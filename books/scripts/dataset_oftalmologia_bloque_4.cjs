/**
 * TOMO 15 · OFTALMOLOGÍA — BLOQUE 04: Trauma Ocular & Neuroftalmología
 * Clases 15.15 a 15.18 · Editorial EUNACOM 2026 · Color #0e7490
 */

const { flow } = require('./dataset_oftalmologia_bloque_1.cjs');

const bloque4 = [
  {
    id: 'oftal-15',
    classId: 'oftal-15',
    tier: 3,
    blockNum: 4,
    blockName: 'Trauma Ocular & Neuroftalmología',
    topicLabel: '15.15',
    title: 'Trauma Ocular: Sospecha de Globo Ocular Abierto, Hipema Traumático y Conducta',
    perfilCode: '6.02.1.001',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 48): Trauma Ocular Grave',
    reconstrucciones: 'EUNACOM 2014 (Q#22) · EUNACOM Diciembre 2017 (Q#83) · EUNACOM Julio 2021 (Q#14)',
    frecuencia: 'Máxima rentabilidad · Prohibiciones absolutas de manipulación en sospecha de herida penetrante',
    diagram: flow('Algoritmo de Triage y Conducta en Trauma Ocular de Urgencias', [
      { t: 'Paciente con Antecedente de Traumatismo Ocular Mecánico Reciente', s: 'Paso 1: Determinar de inmediato si se trata de Trauma Cerrado vs Sospecha de Globo Abierto' },
      { k: 'split', q: '¿Pupila en Gota, Hipotonía Ocular, Hipema Masivo o Seidel Positivo?', s: 'Bifurcación clínica crítica de urgencia vital para el globo ocular', ll: 'Trauma Contuso Cerrado / Sin sospecha de herida', rl: 'SOSPECHA DE GLOBO OCULAR ABIERTO',
        left: { t: 'Trauma Ocular Cerrado (Hipema / Erosión)', s: 'Hipema: reposo en cama 45°, protector ocular, no AINEs · Erosión: ungüento antibiótico', type: 'acc' },
        right: { t: 'GLOBO OCULAR ABIERTO (Herida Penetrante / CEIO)', s: 'PROHIBIDO TOCAR O MEDICAR TÓPICAMENTE · Concha rígida sin compresión + Profilaxis ATB EV + Derivar GES', type: 'warn' },
        ll: 'trauma cerrado', rl: 'globo ocular abierto' },
      { t: 'Prohibiciones Críticas en Globo Abierto', s: 'NO palpar · NO medir PIO · NO aplicar pomadas ni colirios · Régimen cero estricto y analgesia endovenosa', type: 'dec', al: 'regla de oro de examen', from: 'right' },
    ]),
    contexto: 'El trauma ocular grave es la principal causa de ceguera monocular adquirida en adultos jóvenes y está cubierto íntegramente por el problema GES N° 48. La misión primordial del médico general en urgencias no es explorar exhaustivamente la herida, sino proteger el ojo traumatizado de cualquier compresión que cause la expulsión irreversible de su contenido interno.',
    contentSections: [
      {
        subhead: '1. Clasificación BETT (Birmingham Eye Trauma Terminology)',
        paragraphs: [
          'Es el lenguaje universal para clasificar los traumatismos mecánicos oculares:<br>' +
          '• <strong>Trauma Ocular Cerrado:</strong> La pared del globo ocular (córnea y esclera) conserva su integridad de espesor total. Incluye contusiones, desgarros lamelares superficiales y cuerpos extraños superficiales.<br>' +
          '• <strong>Trauma Ocular Abierto (Ruptura o Laceración):</strong> Existe una <strong>herida de espesor total de la pared ocular</strong> que comunica la cavidad intraocular con el medio externo. Se subdivide en:<br>' +
          '- <em>Ruptura ocular:</em> Herida de espesor total producida por un objeto romo que eleva bruscamente la presión hidrostática intraocular.<br>' +
          '- <em>Herida penetrante:</em> Solución de continuidad de espesor total con un orificio de entrada.<br>' +
          '- <em>Herida perforante:</em> Presenta un orificio de entrada y un orificio de salida en la pared ocular.<br>' +
          '- <em>Cuerpo extraño intraocular (CEIO):</em> Fragmento retenido dentro del globo ocular (común en trabajadores que martillan metal sobre metal sin protección).',
        ],
      },
      {
        subhead: '2. Signos Clínicos de Sospecha de Globo Ocular Abierto',
        paragraphs: [
          'La presencia de cualquiera de los siguientes signos semiológicos certifica la sospecha fundada de rotura o herida penetrante:<br>' +
          '1. <strong>Disminución severa y brusca de la agudeza visual</strong>.<br>' +
          '2. <strong>Deformidad pupilar o pupila "en gota / lágrima":</strong> El iris se hernia a través de la herida corneal o escleral, tironeando de la pupila cuyo vértice "apunta" directamente hacia el sitio de la perforación.<br>' +
          '3. <strong>Cámara anterior anormal:</strong> Excesivamente plana/estrecha (por vaciamiento de humor acuoso) o patológicamente profunda.<br>' +
          '4. <strong>Hipotonía ocular marcada:</strong> Ojo muy blando a la estimulación cuidadosa.<br>' +
          '5. Protrusión visible de tejido uveal oscuro (iris, cuerpo ciliar o coroides) o humor vítreo a través de la esclera o córnea.<br>' +
          '6. <strong>Signo de Seidel positivo:</strong> Al colocar fluoresceína sobre la superficie corneal, la fuga activa de humor acuoso transparente diluye el colorante, observándose un "río" o cascada verde-amarillenta fluyendo bajo luz azul de cobalto.<br>' +
          '7. Hemorragia subconjuntival masiva en 360° con quemosis severa tras traumatismo contuso.',
        ],
      },
      {
        subhead: '3. Conducta Obligatoria de Urgencia en APS y Prohibiciones Absolutas',
        paragraphs: [
          'Ante la sospecha de globo ocular abierto, la prioridad médica es <strong>EVITAR A TODA COSTA EL AUMENTO DE LA PRESIÓN INTRAOCULAR</strong>, ya que cualquier presión expulsa el vítreo y la retina, provocando ceguera irrecuperable.<br>' +
          '• <strong>Conductas Obligatorias:</strong><br>' +
          '1. <strong>Colocar un protector ocular rígido o concha fenestrada</strong> (que se apoye en los rebordes óseos de la órbita, NUNCA sobre el ojo).<br>' +
          '2. <strong>Régimen cero absoluto</strong> (preparación para pabellón de urgencia bajo anestesia general).<br>' +
          '3. Reposo en cama con cabecera a 30°.<br>' +
          '4. Analgesia endovenosa y <strong>antieméticos EV profilácticos (ondansetrón)</strong> para evitar a toda costa el vómito o náuseas que elevarían la presión venosa central.<br>' +
          '5. <strong>Profilaxis antitetánica</strong> si procede.<br>' +
          '6. Iniciar antibióticos sistémicos profilácticos EV de amplio espectro para prevenir la endoftalmitis traumática (Ceftazidima + Vancomicina EV o Moxifloxacino oral).<br>' +
          '7. Solicitar <strong>Tomografía Computarizada (TAC) de órbita cortes finos sin contraste</strong> para pesquisar CEIO. (<strong>CONTRAINDICADA LA RESONANCIA MAGNÉTICA</strong> por riesgo de movilización de fragmentos metálicos).<br>' +
          '• <strong>PROHIBICIONES ABSOLUTAS:</strong><br>' +
          '- <strong>NO presionar ni palpar el ojo</strong>.<br>' +
          '- <strong>NO medir la presión intraocular (tonometría PROHIBIDA)</strong>.<br>' +
          '- <strong>NO colocar pomadas oftálmicas ni colirios</strong> (los vehículos grasos penetran a la cámara anterior y causan endoftalmitis química grave).<br>' +
          '- <strong>NO parchar con gasa compresiva</strong>.',
        ],
      },
      {
        subhead: '4. Hipema Traumático: Manejo y Complicaciones',
        paragraphs: [
          'Es la presencia de <strong>sangre en la cámara anterior del ojo</strong> por rotura de los vasos de la raíz del iris o cuerpo ciliar tras un traumatismo contuso.<br>' +
          '• <strong>Clínica:</strong> Disminución visual, fotofobia y nivel hemático visible en el tercio inferior de la cámara anterior.<br>' +
          '• <strong>Conducta en APS:</strong> Reposo absoluto en cama con <strong>cabecera elevada a 30°-45°</strong> (para facilitar que los eritrocitos decanten por gravedad y no ocluyan la pupila ni la malla trabecular superior), protector ocular rígido, analgesia (<strong>EVITAR ASPIRINA Y AINEs</strong> por riesgo de resangrado).<br>' +
          '• <strong>Riesgo crítico: RESANGRADO a las 48-72 horas</strong>, que suele ser más masivo que el sangrado inicial, pudiendo desencadenar glaucoma secundario agudo y tinción hemática de la córnea.',
        ],
      },
    ],
    table: {
      title: 'Signos de Certeza vs Sospecha de Globo Ocular Abierto',
      headers: ['Categoría Semiológica', 'Hallazgos al Examen Físico', 'Mecanismo Fisiopatológico', 'Conducta Inmediata'],
      rows: [
        ['Signo de Certeza', 'Pérdida de contenido ocular (tejido uveal/vítreo visible)', 'Evisceración traumática por solución de continuidad', 'Concha rígida + Antibiótico EV + Pabellón urgente'],
        ['Signo de Certeza', 'Presencia de cuerpo extraño intraocular en TAC', 'Herida penetrante metálica a alta velocidad', 'TAC órbita sin contraste; RM CONTRAINDICADA'],
        ['Signo de Sospecha Alta', 'Pupila en gota o lágrima que apunta a la herida', 'Herniación del iris hacia el orificio perforante', 'No tocar; proteger con concha ósea rígida'],
        ['Signo de Sospecha Alta', 'Cámara anterior muy estrecha / Seidel positivo', 'Fuga activa de humor acuoso a través de la córnea', 'Prohibidas pomadas y tonometría'],
        ['Signo de Sospecha Alta', 'Hiposfagma masivo 360° + quemosis bullosa severa', 'Ruptura escleral oculta posterior bajo conjuntiva', 'Derivación GES N° 48 de urgencia'],
      ],
    },
    severityTable: {
      title: 'Clasificación de Ocular Trauma Score (OTS) y Pronóstico Visual',
      headers: ['Parámetro de Entrada', 'Puntuación Bruta', 'Factor Modificador Negativo', 'Pronóstico Visual Final'],
      rows: [
        ['Agudeza visual inicial: No luz', 'Puntuación = 60', 'Ruptura ocular (-23 puntos)', 'Ceguera permanente en >70%'],
        ['Agudeza visual inicial: Solo luz / bultos', 'Puntuación = 70', 'Endoftalmitis traumática (-17 puntos)', 'Recuperación visual limitada'],
        ['Agudeza visual inicial: 20/200 a 20/50', 'Puntuación = 90', 'Herida perforante posterior (-14 puntos)', 'Pronóstico moderado'],
        ['Agudeza visual inicial: ≥ 20/40', 'Puntuación = 100', 'Desprendimiento de retina (-11 puntos)', 'Buena sobrevida visual'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Urgencia en APS y Manejo Quirúrgico GES N° 48',
      headers: ['Acción Médica', 'Detalle Técnico de Ejecución', 'Justificación Clínica', 'Error Crítico a Evitar'],
      rows: [
        ['Protección ocular', 'Concha rígida fenestrada plástica o metálica', 'Descansa sobre rebordes óseos orbitarios', 'Colocar gasa o parche compresivo'],
        ['Sedación / Antieméticos', 'Ondansetrón 4-8 mg EV + Analgesia EV reglada', 'Evita náuseas, vómitos y maniobras de Valsalva', 'Permitir que el paciente vomite'],
        ['Antibioticoterapia profiláctica', 'Ceftazidima 1-2g EV + Vancomicina 1g EV', 'Previene endoftalmitis bacteriana destructiva', 'Instilar pomadas oftálmicas tópicas'],
        ['Neuroimagen', 'Tomografía Computarizada (TAC) de órbita cortes finos', 'Identifica cuerpos extraños intraoculares radioopacos', 'Solicitar Resonancia Magnética (RM)'],
        ['Soporte general', 'Régimen cero y toxoide tetánico IM', 'Preparación para cirugía inmediata bajo anestesia', 'Alimentar al paciente'],
      ],
    },
    vignette: 'Trabajador metalúrgico de 34 años consulta en SAPU tras recibir el impacto de una esquirla metálica mientras martillaba sin gafas de protección hace 1 hora. Refiere dolor ocular punzante y pérdida brusca de visión en ojo derecho. Al examen: agudeza visual cuenta dedos a 1 metro. Al iluminar el ojo derecho se observa una solución de continuidad de 2 mm en el limbo esclerocorneal temporal, la cámara anterior está colapsada y la pupila tiene forma ovalada "en gota", cuyo extremo apunta hacia la herida temporal. No se visualiza el fondo de ojo.',
    explicacion: 'La presencia de pupila distorsionada "en gota o lágrima" cuyo vértice apunta hacia una herida en el limbo, acompañada de cámara anterior colapsada y baja severa de visión tras traumatismo con esquirlas metálicas, es diagnóstica de sospecha fundada de Globo Ocular Abierto (herida penetrante con sospecha de cuerpo extraño intraocular). La conducta médica obligatoria en APS es la protección con concha rígida no compresiva, régimen cero, antieméticos y analgesia EV, profilaxis antitetánica, antibióticos sistémicos parenterales, TAC de órbita sin contraste y derivación inmediata bajo la garantía legal GES N° 48 (Trauma Ocular Grave). Está formalmente contraindicado palpar el ojo, medir la PIO o aplicar colirios/pomadas.',
    keyPoints: [
      'La pupila en gota o lágrima apunta directamente hacia el sitio de la perforación corneal o escleral.',
      'PROHIBICIONES EN GLOBO ABIERTO: NO comprimir, NO palpar, NO medir PIO, NO colocar pomadas ni colirios.',
      'El ojo debe protegerse con una concha rígida fenestrada que apoye en el hueso orbitario, NUNCA con parche compresivo.',
      'Siempre administrar antieméticos EV (ondansetrón) para evitar el vómito y la expulsión de tejido intraocular.',
      'El examen imagenológico de elección es el TAC de órbita sin contraste; la Resonancia Magnética está PROHIBIDA ante CEIO.',
      'El hipema traumático requiere reposo semisentado a 45° para evitar la oclusión pupilar y el resangrado a las 72h.',
      'El Trauma Ocular Grave es patología cubierta por el problema GES N° 48.',
    ],
    questions: [
      {
        stem: 'Un obrero de la construcción acude a un centro de urgencias tras recibir el impacto de un clavo en el ojo izquierdo. Al examen físico el paciente se encuentra muy quejumbroso, la agudeza visual en el ojo izquierdo es de bultos a 30 cm, la pupila está desfigurada en forma de pera apuntando hacia la hora 2 y se observa una cámara anterior muy plana con salida de un filamento negruzco a través de una incisión en la córnea. ¿Cuál de las siguientes conductas representa una ACCIÓN ESTRICTAMENTE CONTRAINDICADA en este paciente?',
        options: [
          { id: 'A', text: 'Instalar una concha o protector rígido fenestrado plástico fijado con tela adhesiva' },
          { id: 'B', text: 'Administrar analgesia y antieméticos por vía endovenosa' },
          { id: 'C', text: 'Realizar tonometría aplanática para cuantificar el grado de hipotonía ocular' },
          { id: 'D', text: 'Indicar ayuno absoluto y solicitar evaluación urgente por oftalmología' },
          { id: 'E', text: 'Administrar vacuna antitetánica si no tiene dosis de refuerzo reciente' },
        ],
        correcta: 'C',
        explicacion: 'El paciente presenta signos inequívocos de Globo Ocular Abierto (herida penetrante corneal con prolapso o herniación de tejido uveal/iris a través de la brecha y atalamia). En cualquier sospecha de globo abierto, realizar una tonometría (medición de la presión intraocular) está estrictamente contraindicado, ya que el contacto del tonómetro presiona el ojo y provoca la expulsión masiva del contenido intraocular (vítreo y retina), transformando una herida reparable en una pérdida ocular definitiva. Asimismo, están prohibidas las pomadas y los parches compresivos. La protección con concha rígida ósea (A), analgesia/antieméticos EV (B) y ayuno (D) son conductas mandatorias. Perla. En sospecha de herida penetrante ocular está terminantemente prohibido medir la presión o presionar el ojo.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.001',
      },
      {
        stem: 'Un paciente de 26 años recibe un golpe de puño directo en el ojo derecho durante una riña. Al examen en el box se aprecia un hipema traumático que ocupa el tercio inferior de la cámara anterior (Grado I), agudeza visual 20/40 y no hay signos de globo abierto. ¿Cuál es la indicación de manejo ambulatorio o en sala más adecuada y la complicación principal que se busca prevenir en los primeros días?',
        options: [
          { id: 'A', text: 'Reposo en cama con cabecera a 45 grados, protector rígido y evitar aspirina/AINEs; prevenir resangrado a las 48-72 horas' },
          { id: 'B', text: 'Reposo en decúbito prono estricto con la cara hacia abajo; prevenir catarata traumática' },
          { id: 'C', text: 'Indicar aspirina 500 mg cada 8 horas para licuar el coágulo; prevenir la trombosis de arteria central' },
          { id: 'D', text: 'Realizar paracentesis corneal inmediata con aguja fina en el box de urgencias' },
          { id: 'E', text: 'Instilar colirio de pilocarpina cada 15 minutos; prevenir la cicloplejía traumática' },
        ],
        correcta: 'A',
        explicacion: 'El manejo del hipema traumático consiste en reposo absoluto en cama con la cabecera elevada en 30 a 45 grados (para favorecer la sedimentación inferior de los glóbulos rojos por gravedad, liberando el eje pupilar y el trabéculo superior), protección ocular con concha rígida sin compresión, analgesia con paracetamol y colirio ciclopléjico. Están formalmente contraindicados el ácido acetilsalicílico y los AINEs porque alteran la hemostasia plaquetaria. La complicación más temida en los primeros 3 a 5 días es el RESANGRADO secundario a la lisis del coágulo primario, el cual suele ser mucho más extenso y desencadenar hipertensión ocular severa e impregnación hemática de la córnea. Trampa. La aspirina y AINEs están prohibidos en el hipema por riesgo de resangrado masivo.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.001',
      },
      {
        stem: 'Un tornero mecánico ingresa a urgencias tras sentir el impacto de una partícula de acero a alta velocidad en su ojo izquierdo mientras utilizaba una pulidora sin gafas protectoras. La agudeza visual es 20/30, se observa una mínima hemorragia subconjuntival temporal pero no se aprecian cuerpos extraños en la córnea ni fondos de saco. ¿Cuál es el estudio de imagen de elección que debe solicitarse para descartar un cuerpo extraño intraocular radiopaco?',
        options: [
          { id: 'A', text: 'Resonancia magnética de encéfalo y órbitas con cortes finos' },
          { id: 'B', text: 'Tomografía computarizada (TAC) de órbita sin contraste con cortes finos de 1 mm' },
          { id: 'C', text: 'Radiografía simple de cráneo anteroposterior' },
          { id: 'D', text: 'Ecografía ocular modo A con sonda de alta frecuencia' },
          { id: 'E', text: 'Gammagrafía ósea facial' },
        ],
        correcta: 'B',
        explicacion: 'El método diagnóstico de elección indiscutido para la detección, localización espacial y evaluación de cuerpos extraños intraoculares (CEIO) es la Tomografía Computarizada (TAC) de órbitas sin medio de contraste con cortes axiales y coronales finos (de 1 mm). La Resonancia Magnética (RM) está ESTRICTAMENTE CONTRAINDICADA ante la sospecha de cualquier cuerpo extraño metálico o ferromagnético, ya que el potente campo magnético del resonador provocaría el movimiento o tracción violenta del fragmento dentro del ojo, causando laceraciones retinianas masivas, hemorragia vítrea catastrófica y pérdida inmediata del globo ocular. Perla. El TAC de órbita es el examen de elección para cuerpo extraño; la resonancia está prohibida.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.001',
      },
      {
        stem: '¿Cuál es el objetivo principal de administrar antieméticos parenterales (como ondansetrón endovenoso) en un paciente con sospecha de estallido o ruptura de globo ocular?',
        options: [
          { id: 'A', text: 'Prevenir la absorción sistémica de las toxinas de la flora conjuntival' },
          { id: 'B', text: 'Evitar las náuseas y el vómito, ya que la maniobra de Valsalva asociada eleva bruscamente la presión intraocular y puede expulsar el contenido intraocular' },
          { id: 'C', text: 'Inducir miosis pupilar farmacológica para sellar la herida' },
          { id: 'D', text: 'Facilitar la penetración de los colirios a través de la barrera hematoencefálica' },
          { id: 'E', text: 'Disminuir la producción de humor acuoso por los procesos ciliares' },
        ],
        correcta: 'B',
        explicacion: 'Durante el esfuerzo del vómito o las arcadas intensas, se genera una marcada maniobra de Valsalva con aumento abrupto de la presión intratorácica y de la presión venosa central. Esto se transmite instantáneamente al lecho coroideo vascular retrorbitario, provocando un pico masivo de presión intraocular. En un globo ocular con una solución de continuidad de espesor total (ojo abierto), este aumento de presión actúa como un émbolo hidrostático que extruye y expulsa hacia el exterior el iris, el cristalino, el humor vítreo e incluso la retina completa a través de la herida, transformando un ojo con pronóstico reparable en una lesión irrecuperable. Por ello, la analgesia y la antiemesis profiláctica son medidas de rescate de primer orden. Perla. El vómito en ojo abierto expulsa el vítreo: los antieméticos EV son obligatorios.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.001',
      },
    ],
  },

  {
    id: 'oftal-16',
    classId: 'oftal-16',
    tier: 2,
    blockNum: 4,
    blockName: 'Trauma Ocular & Neuroftalmología',
    topicLabel: '15.16',
    title: 'Quemaduras Químicas Oculares: Lavado Ocular Inmediato y Profuso',
    perfilCode: '6.02.2.002',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud: Incluido en Trauma Ocular Grave GES N° 48',
    reconstrucciones: 'EUNACOM 2013 (Q#71) · EUNACOM Julio 2019 (Q#24)',
    frecuencia: 'Muy alta · La urgencia oftalmológica número 1: lavar primero, preguntar después',
    diagram: flow('Algoritmo de Rescate en Quemaduras Químicas Oculares', [
      { t: 'Paciente con Contacto Ocular Reciente con Sustancia Química (Álcali o Ácido)', s: 'REGLA DE ORO DE EXTREMA URGENCIA: NO hacer anamnesis ni medir agudeza visual en este momento' },
      { k: 'split', q: '¿Conducta Médica Inmediata e Impostergable?', s: 'Prioridad absoluta para salvar la superficie ocular y células madre del limbo', ll: 'IRRIGACIÓN INMEDIATA Y PROFUSA (De Elección)', rl: 'Intentar neutralización química o medir visión',
        left: { t: 'LAVADO PROFUSO CON SUERO FISIOLÓGICO (1-2 LITROS)', s: 'Lavar durante 20-30 minutos continuos · Evertir párpados y limpiar fondos de saco', type: 'acc' },
        right: { t: 'ERROR GRAVE QUE PROVOCA CEGUERA', s: 'Demorar el lavado para hacer ficha clínica, tomar agudeza visual o buscar antídotos químicos', type: 'warn' },
        ll: 'conducta correcta salvadora', rl: 'conducta iatrogénica letal' },
      { t: 'Medición de pH con Tira Reactiva', s: 'Continuar irrigación hasta alcanzar pH neutro (7.0 - 7.5) verificado 10 minutos post-lavado · Derivar urgente', type: 'dec', al: 'criterio de fin de lavado', from: 'left' },
    ]),
    contexto: 'Las quemaduras químicas son la única urgencia oftalmológica donde el tratamiento precede a la anamnesis completa y al examen físico detallado. Los álcalis son particularmente devastadores debido a que producen necrosis por licuefacción que destruye las membranas y penetra al interior del ojo en minutos. Cada segundo sin irrigación destruye células madre límbicas y nubla el pronóstico visual de por vida.',
    contentSections: [
      {
        subhead: '1. Fisiopatología: Álcalis vs Ácidos',
        paragraphs: [
          '• <strong>Quemaduras por Álcalis / Bases (MUCHO MÁS GRAVES Y DESTRUCTIVAS):</strong><br>' +
          '- Sustancias comunes: Soda cáustica (hidróxido de sodio), cal viva/cemento (óxido de calcio), amoníaco de limpiadores, lejía.<br>' +
          '- Mecanismo: Producen <strong>necrosis por licuefacción</strong> con saponificación de los ácidos grasos de las membranas celulares y desnaturalización del colágeno estromal. El álcali destruye las barreras tisulares y <strong>continúa penetrando activamente</strong> a través de la córnea hacia la cámara posterior, destruyendo el iris, cristalino y trabéculo en cuestión de minutos u horas.<br>' +
          '• <strong>Quemaduras por Ácidos (Menos destructivas):</strong><br>' +
          '- Sustancias: Ácido sulfúrico (baterías de autos), ácido clorhídrico (muriático).<br>' +
          '- Mecanismo: Producen <strong>necrosis por coagulación</strong> con precipitación masiva de proteínas celulares, lo que forma una escara o barrera protectora superficial que limita la penetración del ácido hacia capas profundas (a excepción del ácido fluorhídrico).',
        ],
      },
      {
        subhead: '2. Regla de Oro de Urgencia: El Lavado Inmediato y Profuso',
        paragraphs: [
          '<strong>Regla de oro absoluta de examen: ANTE UNA QUEMADURA QUÍMICA, SE LAVA PRIMERO Y SE PREGUNTA DESPUÉS</strong>.<br>' +
          '• No se debe perder tiempo en redactar la historia clínica, buscar la ficha, llamar al oftalmólogo ni medir la agudeza visual.<br>' +
          '• <strong>Técnica de Irrigación:</strong><br>' +
          '- Instilar una gota de anestésico tópico (proparacaína) para vencer el blefarospasmo.<br>' +
          '- Irrigar de forma continua con <strong>suero fisiológico o Ringer lactato</strong> (o agua corriente limpia si no hay suero) utilizando un matraz o equipo de venoclisis abierto a chorro directo sobre el ojo.<br>' +
          '- <strong>Volumen y duración: Mínimo 1 a 2 litros de suero durante 20 a 30 minutos ininterrumpidos</strong>.<br>' +
          '- <strong>Eversión de párpados obligatoria:</strong> Es mandatorio evertir el párpado superior e inferior y barrer con una tórula húmeda los fondos de saco para retirar partículas sólidas de cal o cemento atrapadas que seguirían liberando álcali.<br>' +
          '- <strong>Control con tira de pH:</strong> Medir el pH en el fondo de saco conjuntival con tira reactiva. El lavado debe continuar hasta alcanzar la <strong>neutralidad (pH 7.0 a 7.5)</strong>. Esperar 10 minutos post-lavado y reevaluar el pH para descartar rebote por partículas retenidas.',
        ],
      },
      {
        subhead: '3. Signos Pronósticos y Escala de Roper-Hall',
        paragraphs: [
          '• <strong>Isquemia Límbica:</strong> El signo pronóstico más importante es la presencia de isquemia en el limbo esclerocorneal.<br>' +
          'El limbo alberga las <strong>células madre (stem cells) epiteliales de la córnea</strong>. Si el químico destruye los vasos sanguíneos del limbo, el ojo luce paradójicamente <strong>BLANCO Y SIN VASOS ("ojo blanco pálido" o porcelana)</strong>, lo cual no es signo de mejoría sino de necrosis vascular isquémica severa. Implica pérdida de la capacidad regenerativa corneal y pronóstico visual pésimo (requerirá trasplante de limbo).',
        ],
      },
    ],
    table: {
      title: 'Comparación entre Quemaduras Químicas Oculares por Álcalis y Ácidos',
      headers: ['Característica', 'Quemadura por Álcalis (Bases)', 'Quemadura por Ácidos'],
      rows: [
        ['Sustancias frecuentes', 'Soda cáustica, cal, cemento, amoníaco, lavavajillas', 'Ácido de baterías (sulfúrico), ácido muriático'],
        ['Tipo de necrosis', 'NECROSIS POR LICUEFACCIÓN y saponificación', 'NECROSIS POR COAGULACIÓN'],
        ['Profundidad de daño', 'PROFUNDA y progresiva; penetra a cámara anterior', 'Superficial; la escara proteica frena el avance'],
        ['Gravedad clínica', 'Extremadamente GRAVE y destructiva', 'Moderada a severa (menor que álcalis)'],
        ['Signo de mal pronóstico', 'Isquemia límbica (limbo blanquecino en porcelana)', 'Erosiones epiteliales y necrosis conjuntival'],
        ['Conducta inmediata', 'LAVADO PROFUSO CON SUERO > 20-30 MINUTOS', 'LAVADO PROFUSO CON SUERO > 20-30 MINUTOS'],
      ],
    },
    vignette: 'Trabajador de faena de 29 años llega corriendo a la urgencia rural gritando de dolor, luego de que un saco de cemento y cal viva le estallara directamente en la cara hace 10 minutos. El paciente se encuentra con blefarospasmo intenso y lagrimeo. El técnico de enfermería le pregunta al médico si debe tomar los signos vitales y la agudeza visual antes de ingresar al paciente al box.',
    explicacion: 'En toda quemadura química ocular, la conducta inmediata, inaplazable y prioritaria es la Irrigación Ocular Inmediata y Profusa con suero fisiológico o agua corriente. La cal y el cemento son álcalis que provocan necrosis por licuefacción rápida, saponificando las membranas celulares y destruyendo las células madre del limbo corneal en minutos. Está estrictamente contraindicado demorar el lavado para realizar trámites administrativos, anamnesis detallada o toma de agudeza visual. Se debe instilar anestésico tópico, irrigar con al menos 1-2 litros de suero durante 20 a 30 minutos, evertir los párpados para remover mecánicamente las partículas de cal retenidas y verificar la neutralidad del pH (7.0-7.5) con tiras reactivas antes de derivar.',
    keyPoints: [
      'Ante una quemadura química ocular: SE LAVA PRIMERO Y SE PREGUNTA DESPUÉS.',
      'Está PROHIBIDO retrasar el lavado para medir la agudeza visual o tomar la ficha clínica.',
      'Los álcalis (soda cáustica, cal, cemento) son más destructivos que los ácidos por necrosis de licuefacción.',
      'El lavado debe durar mínimo 20 a 30 minutos con 1 a 2 litros de suero salino o agua corriente.',
      'Es obligatorio evertir los párpados para remover partículas sólidas de cal atrapadas en los fondos de saco.',
      'La meta es la neutralización del pH conjuntival (7.0 a 7.5), verificada 10 minutos post-lavado.',
      'El "ojo blanco" en el limbo esclerocorneal indica isquemia límbica severa y pronóstico nefasto.',
    ],
    questions: [
      {
        stem: 'Un trabajador de aseo sufre salpicadura accidental de soda cáustica líquida en ambos ojos. Es llevado de inmediato al centro de salud familiar más cercano. ¿Cuál es la primera medida que debe realizar el personal de salud al recibir al paciente en el establecimiento?',
        options: [
          { id: 'A', text: 'Evaluar y registrar la agudeza visual con la tabla de Snellen' },
          { id: 'B', text: 'Instilar colirio de ácido acético diluido para neutralizar químicamente el álcali' },
          { id: 'C', text: 'Iniciar irrigación ocular continua profusa con suero fisiológico o agua corriente de forma inmediata' },
          { id: 'D', text: 'Aplicar ungüento oftálmico con corticoides y ocluir con parche estéril' },
          { id: 'E', text: 'Llamar a la ambulancia y esperar la llegada del médico oftalmólogo sin tocar los ojos' },
        ],
        correcta: 'C',
        explicacion: 'En cualquier quemadura química ocular, el factor pronóstico determinante primordial de la sobrevida visual es el tiempo transcurrido hasta el inicio de la irrigación. La soda cáustica es un álcali fuerte que penetra activamente hacia las estructuras profundas del ojo en minutos mediante necrosis por licuefacción. El tratamiento debe iniciarse de forma inmediata en el mismo momento del ingreso del paciente, irrigando abundantemente con suero salino fisiológico o agua corriente a chorro durante al menos 20 a 30 minutos. Nunca debe perderse tiempo en tomar agudeza visual (A), llenar registros ni derivar sin lavar. Intentar neutralizar químicamente con ácidos (B) está formalmente contraindicado porque genera una reacción exotérmica con quemadura térmica adicional. Perla. Quemadura química = lavado ocular profuso inmediato antes de cualquier otra acción.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.2.002',
      },
      {
        stem: '¿Por qué las quemaduras oculares provocadas por álcalis (como la cal, amoníaco o soda cáustica) revisten una gravedad mucho mayor que las provocadas por ácidos fuertes?',
        options: [
          { id: 'A', text: 'Porque los ácidos producen necrosis por coagulación que forma una barrera proteica protectora limitando su penetración, mientras que los álcalis producen necrosis por licuefacción con saponificación que favorece la penetración profunda continua' },
          { id: 'B', text: 'Porque los álcalis se evaporan instantáneamente destruyendo el cristalino por calor seco' },
          { id: 'C', text: 'Porque los ácidos tienen un pH neutro que no interactúa con las membranas celulares' },
          { id: 'D', text: 'Porque los álcalis provocan vasoconstricción retiniana mediada por receptores adrenérgicos' },
          { id: 'E', text: 'Porque las quemaduras por ácidos siempre se resuelven con lágrimas artificiales' },
        ],
        correcta: 'A',
        explicacion: 'La diferencia fisiopatológica crucial radica en el tipo de necrosis tisular inducida. Los ácidos desnaturalizan y precipitan las proteínas celulares formando un coágulo o escara firme sobre la superficie corneal que actúa como un escudo o barrera mecánica que impide o retrasa la penetración del químico a planos más profundos. Por el contrario, los álcalis saponifican los lípidos de las membranas celulares, degradan los mucopolisacáridos del estroma corneal y producen necrosis por licuefacción. Esta lisis tisular no crea ninguna barrera de contención, permitiendo que los iones hidroxilo continúen penetrando activamente hacia el estroma profundo, la cámara anterior, el endotelio, el iris y el cristalino en cuestión de pocos minutos. Perla. Los álcalis licúan y penetran profundamente; los ácidos coagulan y se auto-limitan.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.2.002',
      },
    ],
  },

  {
    id: 'oftal-17',
    classId: 'oftal-17',
    tier: 3,
    blockNum: 4,
    blockName: 'Trauma Ocular & Neuroftalmología',
    topicLabel: '15.17',
    title: 'Celulitis Preseptal vs Orbitaria (Postseptal): Oftalmoplejía, Proptosis y TAC',
    perfilCode: '6.02.1.030',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Urgencia Infecciosa Craneofacial',
    reconstrucciones: 'EUNACOM 2013 (Q#56) · EUNACOM Diciembre 2016 (Q#11) · EUNACOM Julio 2020 (Q#64)',
    frecuencia: 'Máxima rentabilidad · Diagnóstico diferencial semiológico crítico entre celulitis preseptal y orbitaria',
    diagram: flow('Algoritmo de Triage: Celulitis Preseptal vs Celulitis Orbitaria', [
      { t: 'Paciente Pediátrico o Adulto con Edema, Eritema y Calor Palpebral Unilateral', s: 'Paso 1: Evaluar la tríada orbitaria: Motilidad ocular, Proptosis y Agudeza Visual' },
      { k: 'split', q: '¿Presenta Dolor a los Movimientos, Oftalmoplejía o Exoftalmos?', s: 'Diferenciación anatómica respecto al Septum Orbitario (Preseptal vs Postseptal)', ll: 'Motilidad ocular normal e INDOLORA · Sin proptosis', rl: 'OFTALMOPLEJÍA DOLOROSA · PROPTOSIS · BAJA DE VISIÓN',
        left: { t: 'CELULITIS PRESEPTAL (PERIORBITARIA)', s: 'Infección superficial cutánea / herida / picadura · Manejo ambulatorio con Amoxicilina-Clavulánico oral', type: 'acc' },
        right: { t: 'CELULITIS ORBITARIA POSTSEPTAL (EMERGENCIA)', s: 'Infección profunda post-sinusitis etmoidal · HOSPITALIZACIÓN INMEDIATA + TAC DE ÓRBITA + ATB EV', type: 'warn' },
        ll: 'infección anterior al septum', rl: 'compromiso orbitario profundo' },
      { t: 'Complicaciones Mortales a Prevenir', s: 'Absceso subperióstico, meningitis y Trombosis del Seno Cavernoso (parálisis bilateral de pares III, IV, VI)', type: 'dec', al: 'alerta neuroquirúrgica', from: 'right' },
    ]),
    contexto: 'La distinción entre celulitis preseptal y celulitis orbitaria es una de las competencias más evaluadas en medicina de urgencias y pediatría. El septum orbitario es la barrera fibrosa anatómica divisoria. Mientras la celulitis preseptal se maneja ambulatoriamente con antibióticos orales, la celulitis orbitaria es una infección profunda que amenaza la visión por compresión del nervio óptico y compromete la vida por extensión intracraneana y trombosis del seno cavernoso.',
    contentSections: [
      {
        subhead: '1. Anatomía del Septum Orbitario y Vías de Infección',
        paragraphs: [
          'El <strong>septum orbitale</strong> es una lámina fibrosa densa que se extiende desde el periostio del reborde orbitario hasta las placas tarsales de los párpados, actuando como barrera física impenetrable frente a microorganismos.<br>' +
          '• <strong>Celulitis Preseptal (Periorbitaria):</strong> Infección de los tejidos blandos subcutáneos palpebrales y perioculares situados <strong>por delante del septum orbitario</strong>. Se origina típicamente por <strong>rotura de la barrera cutánea</strong> (picaduras de insectos, microtraumatismos, rasguños, orzuelos, dacriocistitis o impétigo). Microorganismos: <em>Staphylococcus aureus</em> y <em>Streptococcus pyogenes</em>.<br>' +
          '• <strong>Celulitis Orbitaria (Postseptal o Verdadera):</strong> Infección de los tejidos grasos, musculares y neurovasculares intraorbitarios situados <strong>por detrás del septum orbitario</strong>. En más del <strong>85% a 90% de los casos se origina por contigüidad desde una sinusitis paranasal bacteriana aguda</strong> (especialmente <strong>sinusitis etmoidal</strong>, dada la extrema delgadez de la lámina papirácea que separa las celdillas etmoidales de la cavidad orbitaria). Microorganismos: <em>Streptococcus pneumoniae</em>, <em>S. aureus</em>, <em>Streptococcus anginosus</em> y anaerobios.',
        ],
      },
      {
        subhead: '2. Semiología Diferencial: Los Tres Signos Clave de Compromiso Orbitario',
        paragraphs: [
          'Ambos cuadros comparten eritema, edema palpebral tenso, calor local y fiebre. Sin embargo, la celulitis orbitaria se distingue por los <strong>tres signos cardinales de invasión orbitaria profunda</strong>:<br>' +
          '1. <strong>Oftalmoplejía y Dolor con los Movimientos Oculares:</strong> En la celulitis orbitaria, la inflamación de los músculos extraoculares y de la grasa intraorbitaria produce limitación de la motilidad ocular (oftalmoplejía) y <strong>dolor intenso al intentar mover el ojo</strong>. En la celulitis preseptal, los movimientos oculares son <strong>completamente libres, simétricos e indolores</strong>.<br>' +
          '2. <strong>Proptosis o Exoftalmos:</strong> El acúmulo de pus, flemón y edema dentro de la cavidad ósea cerrada de la órbita empuja el globo ocular hacia adelante (protrusión o proptosis unilateral evidente). En la celulitis preseptal no hay proptosis.<br>' +
          '3. <strong>Compromiso Visual y Pupilar:</strong> La compresión o isquemia del nervio óptico dentro de la órbita provoca <strong>disminución de la agudeza visual, discromatopsia (pérdida de visión de colores) y Defecto Pupilar Aferente Relativo (DPAR)</strong>. En la preseptal, la visión y las pupilas son normales.',
        ],
      },
      {
        subhead: '3. Complicaciones Fatales: Trombosis del Seno Cavernoso',
        paragraphs: [
          'La extensión retrógrada de la infección a través de las venas oftálmicas avalvuladas puede propagarse al <strong>seno cavernoso</strong> intracraneano.<br>' +
          '• <strong>Signos de alarma de Trombosis del Seno Cavernoso:</strong><br>' +
          '- <strong>Bilateralización de los signos oculares</strong> (el edema, proptosis y quemosis se extienden al ojo contralateral).<br>' +
          '- <strong>Parálisis múltiple de pares craneales oculomotores (pares III, IV y VI)</strong> con oftalmoplejía completa bilateral.<br>' +
          '- Hipoestesia o hiperalgesia en la frente y mejilla (compromiso de las ramas V1 y V2 del nervio trigémino).<br>' +
          '- Fiebre en agujas, cefalea frontal severa, alteración de conciencia (estupor/coma) y papiledema.<br>' +
          'Otras complicaciones mayores: Absceso subperióstico, absceso orbitario y empiema o absceso cerebral.',
        ],
      },
      {
        subhead: '4. Diagnóstico por Imagen y Algoritmo Terapéutico',
        paragraphs: [
          '• <strong>Examen Diagnóstico Confirmatorio de Elección: TOMOGRAFÍA COMPUTARIZADA (TAC) DE ÓRBITA, SENOS PARANASALES Y ENCÉFALO CON CONTRASTE ENDOVENOSO</strong>.<br>' +
          'Es mandatorio ante cualquier sospecha de celulitis orbitaria para confirmar la sinusitis, evaluar flemón vs absceso subperióstico y descartar extensión intracraneana.<br>' +
          '• <strong>Tratamiento de la Celulitis Preseptal:</strong> Paciente hemodinámicamente estable, afebril o con febrícula y buen estado general: manejo ambulatorio con <strong>Amoxicilina-Ácido Clavulánico oral</strong> (o Cefadroxilo) por 7 a 10 días, con control clínico obligatorio a las 24 horas.<br>' +
          '• <strong>Tratamiento de la Celulitis Orbitaria:</strong> <strong>HOSPITALIZACIÓN INMEDIATA OBLIGATORIA</strong> + <strong>Antibioticoterapia endovenosa de amplio espectro</strong> (Ceftriaxona 2 g/día EV + Vancomicina 1 g c/12h EV ± Metronidazol) + Evaluación interdisciplinaria por Oftalmología y Otorrinolaringología (ORL) para drenaje quirúrgico si hay absceso subperióstico > 1 cm, deterioro de agudeza visual o falta de mejoría en 48 horas.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial Clínico: Celulitis Preseptal vs Celulitis Orbitaria',
      headers: ['Hallazgo Clínico', 'Celulitis Preseptal (Periorbitaria)', 'Celulitis Orbitaria (Postseptal)'],
      rows: [
        ['Localización anatómica', 'Anterior al septum orbitario (tejido subcutáneo)', 'Posterior al septum orbitario (grasa y músculos)'],
        ['Origen habitual', 'Infección cutánea, picadura, traumatismo, orzuelo', 'Sinusitis paranasal aguda (especialmente etmoidal)'],
        ['Motilidad ocular', 'NORMAL E INDOLORA en todos los ejes', 'OFTALMOPLEJÍA DOLOROSA (limitada y con dolor)'],
        ['Proptosis / Exoftalmos', 'AUSENTE', 'PRESENTE (protrusión ocular unilateral)'],
        ['Agudeza visual y reflejos', 'NORMALES (20/20)', 'DISMINUIDA; puede haber DPAR (compromiso nervio)'],
        ['Estudio de imagen', 'No requerido de regla si es clara', 'TAC DE ÓRBITA CON CONTRASTE OBLIGATORIO'],
        ['Manejo médico', 'Ambulatorio con Amoxicilina-Clavulánico oral', 'HOSPITALIZACIÓN INMEDIATA + Antibióticos EV triples'],
      ],
    },
    severityTable: {
      title: 'Clasificación de Chandler de Complicaciones Orbitarias de Sinusitis',
      headers: ['Grupo / Estadio', 'Definición Fisiopatológica', 'Signos Distintivos', 'Conducta de Urgencia'],
      rows: [
        ['I. Celulitis Preseptal', 'Edema y eritema palpebral sin invasión', 'Ojo móvil sin dolor, sin proptosis', 'Tratamiento oral ambulatorio / control 24h'],
        ['II. Celulitis Orbitaria', 'Infiltración difusa inflamatoria de grasa', 'Proptosis, quemosis y oftalmoplejía leve', 'Hospitalización + Antibióticos EV amplios'],
        ['III. Absceso Subperióstico', 'Pus coleccionado entre hueso y periórbita', 'Desplazamiento del globo + fiebre alta', 'TAC con contraste + Drenaje quirúrgico ORL'],
        ['IV. Absceso Orbitario', 'Colección purulenta dentro de la cavidad grasa', 'Oftalmoplejía total + riesgo de ceguera', 'Drenaje quirúrgico oftalmológico de urgencia'],
        ['V. Trombosis Seno Cavernoso', 'Tromboflebitis séptica retroocular bilateral', 'Parálisis bilateral pares III, IV, VI + estupor', 'UCI + Anticoagulación + ATB EV altas dosis'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Farmacológico y Criterios Quirúrgicos en Infecciones Orbitarias',
      headers: ['Entidad Clínica', 'Régimen Antibiótico de Primera Línea', 'Examen de Apoyo Mandatorio', 'Criterios Quirúrgicos'],
      rows: [
        ['Celulitis Preseptal', 'Amoxicilina-Clavulánico 875/125 mg c/12h VO x 7-10 días', 'Clínico; TAC solo si duda diagnóstica', 'Drenaje de absceso palpebral cutáneo si fluctúa'],
        ['Celulitis Orbitaria', 'Ceftriaxona 2g EV c/24h + Vancomicina 1g c/12h EV', 'TAC de órbita y encéfalo con contraste', 'Falla tras 48h de ATB EV o pérdida visual'],
        ['Absceso Subperióstico', 'Ceftriaxona + Vancomicina + Metronidazol EV', 'TAC helicoidal cortes finos de 1-2 mm', 'Drenaje endoscópico endonasal por ORL'],
      ],
    },
    vignette: 'Niño de 7 años con antecedente de congestión nasal y rinorrea purulenta de 5 días de evolución tratada como resfrío común, es llevado al servicio de urgencias por hinchazón progresiva del ojo derecho y fiebre de 39.0 °C. Al examen físico se aprecia edema y eritema palpebral derecho violáceo tenso. Al evaluar los movimientos oculares, el niño llora de dolor al intentar mirar hacia arriba y afuera, constatándose una clara limitación de la abducción y elevación del ojo derecho. Se aprecia una leve protrusión del ojo derecho hacia adelante comparado con el izquierdo. La agudeza visual en OD es 20/40 y en OI 20/20.',
    explicacion: 'La tríada de oftalmoplejía dolorosa (limitación de movimientos oculares con dolor severo), proptosis unilateral y disminución de la agudeza visual en el contexto de una sinusitis paranasal previa con fiebre alta establece el diagnóstico definitivo de Celulitis Orbitaria (postseptal). Estos hallazgos descartan una celulitis preseptal simple y confirman la invasión bacteriana profunda hacia los músculos y cono orbitario. La conducta médica inmediata obligatoria es la hospitalización urgente, toma de hemocultivos, inicio de antibioticoterapia endovenosa de amplio espectro (ceftriaxona + vancomicina) y solicitud urgente de TAC de órbita y senos paranasales con contraste para descartar absceso subperióstico.',
    keyPoints: [
      'Celulitis preseptal = movimientos oculares normales e INDOLOROS, sin proptosis y visión 20/20.',
      'Celulitis orbitaria = OFTALMOPLEJÍA DOLOROSA, PROPTOSIS y disminución de agudeza visual.',
      'La principal causa de celulitis orbitaria es la Sinusitis Etmoidal aguda complicada.',
      'La celulitis preseptal se trata ambulatoriamente con Amoxicilina-Clavulánico oral.',
      'La celulitis orbitaria requiere HOSPITALIZACIÓN OBLIGATORIA + Antibióticos EV triples + TAC de órbita con contraste.',
      'La bilateralización del cuadro con oftalmoplejía completa alerta de Trombosis del Seno Cavernoso.',
    ],
    questions: [
      {
        stem: 'Un escolar de 9 años es evaluado en urgencias por edema y eritema palpebral izquierdo severo tras un cuadro catarral de una semana. Al examen físico presenta fiebre de 38.8 °C. La apertura palpebral espontánea está dificultada por el edema, pero al separar manualmente los párpados se constata que los movimientos oculares están completamente conservados y son indoloros, no hay proptosis y la agudeza visual es 20/20 en ambos ojos. ¿Cuál es el diagnóstico más probable y la conducta médica indicada?',
        options: [
          { id: 'A', text: 'Celulitis orbitaria postseptal; hospitalizar para drenaje quirúrgico inmediato por orbitotomía' },
          { id: 'B', text: 'Celulitis preseptal; iniciar tratamiento antibiótico oral ambulatorio con amoxicilina-ácido clavulánico y control en 24 horas' },
          { id: 'C', text: 'Trombosis del seno cavernoso; iniciar heparina endovenosa y trombolisis' },
          { id: 'D', text: 'Pseudotumor orbitario inflamatorio; indicar corticoides orales en megadosis' },
          { id: 'E', text: 'Conjuntivitis alérgica primaveral; prescribir colirio de antihistamínicos' },
        ],
        correcta: 'B',
        explicacion: 'La ausencia total de afectación de las estructuras intraorbitarias (motilidad ocular completamente libre e indolora, ausencia de proptosis y agudeza visual normal 20/20) confirma que el proceso infeccioso inflamatorio se encuentra estrictamente limitado por delante del tabique orbitario, lo que define a una Celulitis Preseptal (o periorbitaria). En pacientes estables y colaboradores, el tratamiento de elección es ambulatorio con antibióticos orales con cobertura frente a estafilococos y estreptococos (amoxicilina-ácido clavulánico o cefadroxilo), indicando a los padres pautas estrictas de alarma y control clínico obligatorio en 24 horas. La celulitis orbitaria (A) tendría oftalmoplejía o proptosis. Perla. Movilidad ocular conservada e indolora descarta celulitis orbitaria y define celulitis preseptal.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.030',
      },
      {
        stem: 'Una niña de 6 años hospitalizada por celulitis orbitaria derecha secundaria a sinusitis etmoidal presenta súbitamente cefalea intensa, náuseas, temperatura de 39.5 °C y comienza con hinchazón, enrojecimiento y proptosis marcada en el ojo izquierdo contralateral. Al examen neurológico se constata midriasis arreactiva bilateral y ptosis bilateral con imposibilidad total para mover ambos ojos en cualquier dirección (oftalmoplejía bilateral completa), con pérdida de sensibilidad en la frente. ¿Cuál es la complicación intracraneana más probable?',
        options: [
          { id: 'A', text: 'Meningitis bacteriana aguda por neumococo sin foco trombótico' },
          { id: 'B', text: 'Trombosis séptica del seno cavernoso' },
          { id: 'C', text: 'Absceso epidural frontal contralateral aislado' },
          { id: 'D', text: 'Glaucoma agudo bilateral sincronizado' },
          { id: 'E', text: 'Encefalitis por virus herpes simple tipo 1' },
        ],
        correcta: 'B',
        explicacion: 'El seno cavernoso es una estructura venosa dural que recibe el drenaje de ambas órbitas a través de las venas oftálmicas y por el cual discurren los pares craneales III, IV, VI y las ramas V1 y V2 del trigémino. La extensión séptica de una celulitis orbitaria hacia el seno cavernoso produce la temible Trombosis del Seno Cavernoso. Sus signos patognomónicos cardinales son: 1) Bilateralización rápida del edema palpebral y proptosis al ojo opuesto (a través de los senos intercavernosos), 2) Oftalmoplejía dolorosa bilateral completa con ptosis (parálisis de pares III, IV y VI), 3) Hipoestesia en el territorio del nervio oftálmico (V1) y maxilar (V2), y 4) Compromiso sistémico grave y alteración de conciencia. Es una emergencia neuroquirúrgica de altísima mortalidad. Perla. La bilateralización de una celulitis orbitaria con oftalmoplejía total es trombosis del seno cavernoso.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.030',
      },
      {
        stem: '¿Cuál es el estudio de imagen de primera línea indicado para confirmar el diagnóstico, evaluar la extensión anatómica y pesquisar complicaciones quirúrgicas ante la sospecha clínica fundada de celulitis orbitaria?',
        options: [
          { id: 'A', text: 'Radiografía de senos paranasales en proyecciones de Waters y Caldwell' },
          { id: 'B', text: 'Tomografía computarizada (TAC) de órbitas, senos paranasales y cerebro con contraste endovenoso' },
          { id: 'C', text: 'Ecografía ocular modo B transpalpebral' },
          { id: 'D', text: 'Resonancia magnética nuclear sin contraste' },
          { id: 'E', text: 'Gammagrafía con galio-67' },
        ],
        correcta: 'B',
        explicacion: 'El examen imagenológico estándar de oro y de primera elección mandatorio ante cualquier sospecha de celulitis orbitaria es la Tomografía Computarizada (TAC) de órbitas y senos paranasales con contraste endovenoso, extendida al encéfalo. El TAC permite: 1) Diferenciar fehacientemente la celulitis preseptal de la orbitaria, 2) Identificar la sinusitis paranasal de origen (etmoidal/maxilar), 3) Detectar precozmente colecciones purulentas que requieren drenaje quirúrgico urgente (absceso subperióstico y absceso intraorbitario), y 4) Descartar trombosis del seno cavernoso y empiemas intracraneanos. Las radiografías simples (A) están obsoletas por su baja sensibilidad. Perla. Sospecha de celulitis orbitaria exige TAC de órbita con contraste de urgencia.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.030',
      },
      {
        stem: '¿Cuál es el esquema antimicrobiano empírico endovenoso de primera línea más recomendado para el tratamiento intrahospitalario de la celulitis orbitaria bacteriana en pediatría?',
        options: [
          { id: 'A', text: 'Amoxicilina oral en suspensión cada 8 horas' },
          { id: 'B', text: 'Ceftriaxona endovenosa combinada con vancomicina (o clindamicina)' },
          { id: 'C', text: 'Ciprofloxacino en colirio tópico exclusivo' },
          { id: 'D', text: 'Aciclovir endovenoso en monoterapia' },
          { id: 'E', text: 'Gentamicina intramuscular en dosis única' },
        ],
        correcta: 'B',
        explicacion: 'La celulitis orbitaria es una infección grave que pone en riesgo la visión y la vida, por lo que requiere hospitalización inmediata y antibioticoterapia parenteral de amplio espectro. La microbiología involucra patógenos nasosinusales como Streptococcus pneumoniae (incluyendo cepas con susceptibilidad intermedia a penicilinas), Streptococcus pyogenes, Staphylococcus aureus (incluyendo cepas meticilino-resistentes comunitarias SAMR-AC) y anaerobios orofaríngeos. El esquema estándar recomendado consiste en una cefalosporina de 3.ª generación parenteral con excelente penetración ósea y meníngea (Ceftriaxona o Cefotaxima) combinada con Vancomicina (o Clindamicina) para cobertura de SAMR y estreptococos. Los colirios (C) no tienen ninguna utilidad en infecciones orbitarias profundas. Perla. El tratamiento de la celulitis orbitaria es siempre endovenoso y hospitalizado con ceftriaxona más vancomicina.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.02.1.030',
      },
    ],
  },

  {
    id: 'oftal-18',
    classId: 'oftal-18',
    tier: 2,
    blockNum: 4,
    blockName: 'Trauma Ocular & Neuroftalmología',
    topicLabel: '15.18',
    title: 'Neuroftalmología: Neuritis Óptica, Edema de Papila y Defecto Pupilar de Marcus Gunn',
    perfilCode: '1.01.1.015',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud: Sospecha de Esclerosis Múltiple (GES N° 68)',
    reconstrucciones: 'EUNACOM 2015 (Q#63) · EUNACOM Diciembre 2019 (Q#42)',
    frecuencia: 'Muy alta · Reconocimiento del DPAR (Marcus Gunn), esclerosis múltiple y papiledema vs neuritis',
    diagram: flow('Algoritmo Neuroftalmológico: Pérdida Visual y Alteración Pupilar', [
      { t: 'Paciente Joven con Pérdida Monocular Subaguda de Visión y Dolor con los Movimientos', s: 'Paso 1: Realizar prueba de la linterna oscilante para evaluar reactividad pupilar afferente' },
      { k: 'split', q: '¿Presencia de Defecto Pupilar Aferente Relativo (DPAR / Pupila de Marcus Gunn)?', s: 'Certificación semiológica de patología asimétrica del nervio óptico anterior', ll: 'DPAR POSITIVO en ojo afecto (Dilatación paradójica)', rl: 'Pupilas isocóricas fotorreactivas normales bilaterales',
        left: { t: 'NEURITIS ÓPTICA DESMIELINIZANTE', s: 'Asociada a Esclerosis Múltiple · RM de encéfalo y órbitas con gadolinio · Metilprednisolona EV en pulsos', type: 'acc' },
        right: { t: 'Evaluar Hipertensión Endocraneana o Causa No Neurológica', s: 'Papiledema bilateral sin baja visual precoz · Solicitar neuroimagen urgente para descartar masa', type: 'warn' },
        ll: 'lesión del nervio óptico', rl: 'edema papilar bilateral' },
      { t: 'Regla de Oro Terapéutica en Neuritis Óptica', s: 'CONTRAINDICADA LA PREDNISONA ORAL AISLADA A DOSIS BAJAS (duplica la tasa de recurrencias de neuritis)', type: 'dec', al: 'trampa farmacológica', from: 'left' },
    ]),
    contexto: 'La neuroftalmología integra la vía óptica desde la retina hasta la corteza occipital. La neuritis óptica desmielinizante es con frecuencia el debut clínico de una esclerosis múltiple (GES N° 68). El médico general debe dominar la prueba de la linterna oscilante para pesquisar el defecto pupilar de Marcus Gunn y saber diferenciar una neuritis monocular de un papiledema bilateral por hipertensión endocraneana.',
    contentSections: [
      {
        subhead: '1. Vía Pupilar y el Defecto Pupilar Aferente Relativo (DPAR / Marcus Gunn)',
        paragraphs: [
          'El reflejo fotomotor evalúa la integridad de la vía aferente (II par, nervio óptico) y la vía eferente (III par, fibras parasimpáticas constrictoras).<br>' +
          '• <strong>Prueba de la Linterna Oscilante (Swinging Flashlight Test):</strong> En una habitación en penumbra, se ilumina un ojo y luego se desplaza rápidamente el haz de luz al otro ojo, alternando cada 2 a 3 segundos:<br>' +
          '- En un paciente normal, al iluminar cualquier ojo, ambas pupilas se contraen con igual intensidad (reflejo fotomotor directo y consensual simétricos).<br>' +
          '- <strong>En presencia de DPAR (Pupila de Marcus Gunn):</strong> Al iluminar el ojo sano, ambas pupilas se contraen enérgica y simétricamente. Al pasar la luz rápidamente al ojo enfermo, el estímulo aferente es percibido por el cerebro como "menos luminoso"; en consecuencia, el tono parasimpático disminuye y <strong>AMBAS PUPILAS SE DILATAN PARADÓJICAMENTE ante la luz directa</strong>.<br>' +
          '• <strong>Regla de oro:</strong> El DPAR es el signo objetivo más sensible de <strong>lesión unilateral o asimétrica del nervio óptico o de la retina extensa</strong>. Si el paciente refiere que no ve nada pero el examen pupilar es normal y simétrico sin DPAR, sospechar simulación o pérdida cortical bilateral.',
        ],
      },
      {
        subhead: '2. Neuritis Óptica Desmielinizante y Esclerosis Múltiple',
        paragraphs: [
          'Inflamación aguda del nervio óptico, altamente prevalente en <strong>mujeres jóvenes (20 a 40 años)</strong>. En el 50% de los casos se asocia al desarrollo futuro de <strong>Esclerosis Múltiple (GES N° 68)</strong>.<br>' +
          '• <strong>Tríada Clínica Cardinal:</strong><br>' +
          '1. <strong>Disminución de la agudeza visual subaguda monocular</strong> (empeora a lo largo de horas a 2-3 días).<br>' +
          '2. <strong>Dolor periocular que empeora con los movimientos oculares</strong> en más del 90% de los casos (producido por la tracción del recto superior y medial sobre la vaina del nervio óptico en el foramen).<br>' +
          '3. <strong>Discromatopsia severa:</strong> Pérdida desproporcionada de la visión de colores (especialmente desaturación del color rojo, que se percibe como rosado o café).<br>' +
          '• <strong>Fondo de Ojo en Neuritis: "Ni el médico ni el paciente ven nada"</strong>.<br>' +
          'En el <strong>65% de los casos el fondo de ojo es COMPLETAMENTE NORMAL</strong> (Neuritis Óptica Retrobulbar: la inflamación se ubica por detrás del globo ocular). En el 35% restante se observa edema papilar leve (papilitis anterior).<br>' +
          '• <strong>Manejo y Regla Farmacológica de Examen:</strong><br>' +
          'El estudio de elección es la <strong>Resonancia Magnética de encéfalo y órbitas con gadolinio</strong> (detecta lesiones desmielinizantes en sustancia blanca).<br>' +
          'El tratamiento de elección en la fase aguda son los <strong>pulsos de Metilprednisolona endovenosa (1 g/día por 3 a 5 días)</strong> seguido de prednisona oral escalonada. <strong>CONTRAINDICACIÓN FORMAL: NUNCA administrar prednisona oral aislada a dosis estándar</strong> sin pulsos EV previos, ya que el ensayo clínico ONTT demostró que la prednisona oral sola duplica la tasa de recurrencias de neuritis óptica.',
        ],
      },
      {
        subhead: '3. Papiledema por Hipertensión Endocraneana',
        paragraphs: [
          'Es el <strong>edema de papila BILATERAL secundario a una elevación de la presión intracraneana (PIC)</strong>.<br>' +
          '• <strong>Semiología:</strong> Se debe a la interrupción del transporte axoplásmico axonal en la cabeza del nervio óptico. Fondo de ojo: papilas hiperémicas bilaterales con bordes difuminados o borrados, ausencia de pulso venoso espontáneo, hemorragias en llama peripapilares.<br>' +
          '• <strong>Diferencia clave con la Neuritis:</strong> En el papiledema inicial, <strong>LA AGUDEZA VISUAL CENTRAL ESTÁ ESTRICTAMENTE CONSERVADA (20/20)</strong>. Solo presentan oscurecimientos visuales transitorios de segundos al agacharse o levantarse (amaurosis fugaz postural), aumento de la mancha ciega y cefalea matutina que empeora con Valsalva.<br>' +
          '• <strong>Conducta:</strong> Descartar masa intracraneana, hidrocefalia o trombosis de senos venosos mediante <strong>Neuroimagen urgente (TAC o RM cerebral) ANTES de realizar cualquier punción lumbar</strong>.',
        ],
      },
    ],
    table: {
      title: 'Neuritis Óptica Retrobulbar vs Papiledema por Hipertensión Endocraneana',
      headers: ['Parámetro', 'Neuritis Óptica Retrobulbar', 'Papiledema por Hipertensión Endocraneana'],
      rows: [
        ['Lateralidad', 'Típicamente UNILATERAL (monocular)', 'Prácticamente siempre BILATERAL'],
        ['Dolor ocular', 'PRESENTE en > 90% (empeora al mover el ojo)', 'AUSENTE; cursa con cefalea matutina y vómitos'],
        ['Agudeza visual central', 'CAÍDA BRUSCA y marcada (20/80 a bultos)', 'CONSERVADA (20/20 inicial); oscurecimientos fugaces'],
        ['Visión de colores (rojo)', 'DISCROMATOPSIA SEVERA muy temprana', 'Normal hasta etapas terminales'],
        ['Fondo de ojo inicial', 'NORMAL en 65% ("ni médico ni paciente ven")', 'EDEMA BILATERAL franco con borramiento papilar'],
        ['Examen pupilar', 'DPAR POSITIVO marcado (Marcus Gunn)', 'Pupilas reactivas normales (sin DPAR)'],
        ['Patología asociada', 'Esclerosis Múltiple (desmielinización)', 'Tumores cerebrales, hidrocefalia, pseudotumor cerebri'],
      ],
    },
    vignette: 'Mujer de 27 años consulta por disminución progresiva de la visión en su ojo derecho de 3 días de evolución, acompañada de dolor sordo retroocular que aumenta notoriamente cuando mira hacia los lados o arriba. Refiere que los objetos rojos los ve descoloridos o cafés con el ojo derecho. Al examen: agudeza visual OD 20/100, OI 20/20. Al realizar la prueba de la linterna oscilante, la luz sobre el ojo izquierdo induce miosis bilateral rápida, pero al pasar la luz al ojo derecho ambas pupilas se dilatan paradójicamente. El fondo de ojo no muestra alteraciones.',
    explicacion: 'La presentación en una mujer joven de pérdida visual monocular subaguda, dolor con los movimientos oculares, discromatopsia foveal para el rojo, defecto pupilar aferente relativo (DPAR / Marcus Gunn) y un fondo de ojo rigurosamente normal ("neuritis retrobulbar") conforma el cuadro clínico clásico de Neuritis Óptica Desmielinizante, altamente sugerente de debut de Esclerosis Múltiple (garantía GES N° 68). La conducta médica obligatoria es solicitar Resonancia Magnética de encéfalo y órbitas con contraste e iniciar tratamiento con pulsos de Metilprednisolona endovenosa (1 g/día por 3 a 5 días). Está contraindicado prescribir prednisona oral aislada de entrada.',
    keyPoints: [
      'El DPAR (pupila de Marcus Gunn) es la dilatación paradójica de ambas pupilas al iluminar el ojo enfermo.',
      'Neuritis óptica = dolor con movimientos oculares + baja visual monocular + discromatopsia + DPAR.',
      'En el 65% de las neuritis el fondo de ojo es NORMAL ("neuritis retrobulbar").',
      'La neuritis óptica es el debut clínico clásico de la Esclerosis Múltiple (GES N° 68).',
      'El papiledema es BILATERAL, con agudeza visual CONSERVADA inicialmente y sin dolor ocular.',
      'CONTRAINDICACIÓN: NUNCA tratar la neuritis con prednisona oral aislada a dosis bajas (aumenta las recidivas).',
    ],
    questions: [
      {
        stem: 'Una mujer de 29 años previamente sana consulta por disminución de la visión en su ojo izquierdo de 48 horas de evolución, acompañada de dolor en la órbita que se intensifica al mover los ojos. Al examen se constata agudeza visual de 20/70 en ojo izquierdo y 20/20 en ojo derecho. En la prueba de la linterna oscilante, al iluminar el ojo derecho ambas pupilas se contraen intensamente, pero al pasar el foco de luz al ojo izquierdo ambas pupilas se dilatan de forma paradójica. El fondo de ojo muestra papilas de bordes netos y retina transparente sin anomalías. ¿Cuál es el examen diagnóstico de elección para evaluar la etiología y el pronóstico de esta paciente?',
        options: [
          { id: 'A', text: 'Tomografía computarizada de encéfalo sin contraste' },
          { id: 'B', text: 'Resonancia magnética de encéfalo y órbitas con gadolinio' },
          { id: 'C', text: 'Punción lumbar urgente con manometría de apertura' },
          { id: 'D', text: 'Potenciales evocados somatosensoriales periféricos' },
          { id: 'E', text: 'Biopsia de la arteria temporal superficial' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una Neuritis Óptica Retrobulbar desmielinizante en una mujer joven (pérdida visual monocular, dolor con la motilidad ocular, DPAR positivo y fondo de ojo normal). El examen de elección incuestionable es la Resonancia Magnética (RM) de cerebro y órbitas con contraste de gadolinio y secuencias FLAIR. La RM permite confirmar la inflamación y realce del nervio óptico y, de manera crucial, pesquisar la presencia de lesiones desmielinizantes asintomáticas en la sustancia blanca periventricular o cuerpo calloso, lo que define el riesgo de progresión a Esclerosis Múltiple clínicamente definida (bajo la cobertura del problema GES N° 68). La TAC (A) tiene muy baja resolución para lesiones desmielinizantes. Perla. Paciente joven con neuritis óptica monocular requiere RM cerebral con contraste para descartar esclerosis múltiple.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.01.1.015',
      },
      {
        stem: 'Un hombre de 38 años consulta por cefaleas matutinas pulsátiles que aumentan con la tos desde hace dos semanas y episodios breves de oscurecimiento de la visión de 2 a 3 segundos de duración al ponerse de pie. Al examen su agudeza visual es 20/20 en ambos ojos, las pupilas son isocóricas y fotorreactivas normales sin DPAR, pero al fondo de ojo se evidencia borramiento completo de los bordes papilares de forma bilateral, con hiperemia y elevación de ambas cabezas del nervio óptico. ¿Cuál es la conducta diagnóstica de prioridad obligatoria?',
        options: [
          { id: 'A', text: 'Realizar punción lumbar en el box para medir la presión de apertura de inmediato' },
          { id: 'B', text: 'Solicitar neuroimagen urgente (TAC o RM de cerebro) para descartar un proceso expansivo intracraneano antes de cualquier otra intervención' },
          { id: 'C', text: 'Iniciar colirio de timolol al 0.5% cada 12 horas' },
          { id: 'D', text: 'Indicar tratamiento con acetazolamida oral y enviar a control ambulatorio' },
          { id: 'E', text: 'Prescribir paracetamol y lentes de descanso para la astenopía' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un Papiledema bilateral franco (edema de papila bilateral con agudeza visual conservada y oscurecimientos visuales posturales transitorios), lo que es un signo de alarma mayor de Hipertensión Endocraneana. La conducta médica primordial, obligatoria e impostergable es solicitar una Neuroimagen urgente (TAC o RM de encéfalo) para descartar la presencia de una masa expansiva intracraneana (tumor, hematoma, absceso) o hidrocefalia obstructiva. Está formalmente PROHIBIDO realizar una punción lumbar (A) a ciegas sin neuroimagen previa en un paciente con papiledema, ya que si existe una masa intracraneana la descompresión brusca del líquido cefalorraquídeo precipitará una herniación cerebral amigdalina o transtentorial fatal. Perla. Papiledema bilateral exige neuroimagen urgente para descartar masa cerebral antes de puncionar.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.01.1.015',
      },
    ],
  },
];

module.exports = {
  bloque4,
  flow,
};
