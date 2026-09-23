/**
 * DATASET · Gastroenterología — 26 clases · 6 Bloques (recuperado 2026-09-06 desde el PDF
 * compilado Manual_EUNACOM_Gastroenterologia_Completo_2026.pdf tras pérdida del .cjs fuente;
 * el .cjs nunca se llegó a comittear). Estructura definitiva para el pipeline de Módulo 1.
 * Fuentes:
 *   · códigos + Dx/Tx/Seg  → eunacom-master-curriculum/perfil_v3_full.json (Perfil v3 2026)
 *   · prosa / tablas / pearls / preguntas → transcrito fielmente del manual compilado (79 pp)
 *   · claves + justificación de preguntas → Solucionario Razonado del mismo manual
 * Campos nuevos vs cardiología:  contexto ("¿Por qué?")  ·  classId (enlaces libro↔web)
 * NOTA: los diagramas (`svg`/`algoTitle`) del manual original no se pudieron recuperar (el
 * generador `flow()` tampoco se comitteó) — quedan en null pendientes de rehacer.
 */
module.exports = { gastroenterologiaClasses: [

  /* ═══════════════════════ BLOQUE 01 · ESÓFAGO Y ESTÓMAGO ═══════════════════════ */
  {
    id: 'gastro-01', classId: 'gastro-01', tier: 2,
    blockNum: 1, blockName: 'Esófago y Estómago',
    topicLabel: '1.1', title: 'Enfermedad por Reflujo Gastroesofágico y Esófago de Barrett',
    perfilCode: '1.06.1.027', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Norma MINSAL de dispepsia y uso racional de IBP',
    reconstrucciones: 'EUNACOM 2013 (Q#12) · EUNACOM Julio 2015 (Q#124) · EUNACOM Diciembre 2019 (Q#88)',
    frecuencia: 'Alta rentabilidad · tema de tratamiento farmacológico (16 de 31 preguntas del banco son de manejo)',
    svg: null, algoTitle: 'Enfrentamiento de la pirosis crónica y decisión de endoscopía',
    contexto: 'El esfínter esofágico inferior no es una válvula anatómica sino un tono muscular mantenido que se relaja de forma transitoria decenas de veces al día. El reflujo se vuelve patológico cuando esas relajaciones son demasiado frecuentes o el aclaramiento esofágico falla: por eso el tratamiento es funcional (suprimir ácido, mejorar el vaciamiento) y la cirugía queda reservada para la excepción.',
    contentSections: [
      {
        subhead: '1. Definición y presentación clínica',
        paragraphs: [
          'La enfermedad por reflujo gastroesofágico (ERGE) es el paso retrógrado del contenido gástrico al esófago con síntomas o lesión de la mucosa. Su mecanismo es la <strong>relajación transitoria del esfínter esofágico inferior</strong>, no una obstrucción.',
          '<strong>Presentación típica:</strong> pirosis retroesternal y regurgitación ácida, que empeoran al acostarse y con la ingesta abundante. <strong>Presentación atípica:</strong> tos crónica, asma de difícil control, disfonía, erosiones dentales y dolor torácico no cardíaco.',
        ],
      },
      {
        subhead: '2. Diagnóstico: cuándo basta la clínica y cuándo se endoscopia',
        paragraphs: [
          'En un paciente menor de 40–50 años con pirosis y regurgitación <strong>típicas y sin signos de alarma</strong>, el diagnóstico es clínico y se inicia prueba terapéutica con inhibidor de la bomba de protones (IBP) por 4 a 8 semanas: la respuesta confirma el diagnóstico.',
          'La <strong>pH-metría esofágica de 24 horas</strong> es el patrón de referencia y se reserva para la duda diagnóstica, la clínica atípica o la evaluación prequirúrgica.',
          '<strong>Endoscopía digestiva alta obligatoria</strong> si hay signos de alarma: disfagia, odinofagia, baja de peso, anemia o hemorragia, síntomas que despiertan al paciente, inicio después de los 50 años o pirosis de más de 5 años de evolución (riesgo de esófago de Barrett).',
        ],
      },
      {
        subhead: '3. Tratamiento',
        paragraphs: [
          '<strong>Medidas generales:</strong> fraccionar la alimentación, elevar la cabecera de la cama, bajar de peso, suspender tabaco y evitar alcohol, cafeína, comidas grasas y relajantes musculares antes de dormir.',
          '<strong>Farmacoterapia:</strong> el IBP (omeprazol, esomeprazol, lansoprazol) es el fármaco de elección y debe tomarse <strong>en ayunas, 30–60 minutos antes del desayuno</strong>. Los antagonistas H₂ (ranitidina, famotidina) están desplazados y no deben combinarse con IBP.',
          '<strong>Cirugía antirreflujo (funduplicatura de Nissen):</strong> paciente joven con ERGE grave dependiente de IBP, hernia hiatal voluminosa sintomática, o esófago de Barrett con displasia de alto grado.',
        ],
      },
      {
        subhead: '4. Esófago de Barrett',
        paragraphs: [
          'Es la <strong>metaplasia intestinal</strong> del epitelio esofágico (reemplazo del epitelio plano por cilíndrico) secundaria a la exposición ácida crónica. Es asintomático; los síntomas son los del RGE de base.',
          'Su importancia es el riesgo de progresión a <strong>adenocarcinoma de esófago</strong>. La conducta la define la biopsia: metaplasia sin displasia → IBP y endoscopía de vigilancia; displasia de bajo grado → ablación endoscópica; <strong>displasia de alto grado → resección endoscópica o esofagectomía</strong>.',
        ],
      },
    ],
    table: {
      title: 'ERGE — decisiones clave que se preguntan en el EUNACOM',
      headers: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        ['Pirosis típica, < 50 años, sin alarma', 'Prueba con IBP 4–8 semanas', 'Pedir endoscopía de entrada'],
        ['Pirosis + disfagia o baja de peso', 'Endoscopía digestiva alta', 'Subir la dosis de IBP sin estudiar'],
        ['Duda diagnóstica / clínica atípica', 'pH-metría de 24 h', 'Tratar empíricamente de forma indefinida'],
        ['Barrett con metaplasia sin displasia', 'IBP + vigilancia endoscópica', 'Indicar cirugía por el hallazgo de metaplasia'],
        ['Barrett con displasia de alto grado', 'Resección endoscópica / esofagectomía', 'Solo aumentar IBP y controlar'],
      ],
    },
    vignette: 'Mujer de 44 años consulta por pirosis retroesternal y regurgitación ácida de 2 años de evolución, que empeora al acostarse. Ha usado antiácidos ocasionales con alivio parcial. No refiere disfagia, baja de peso ni anemia. Examen físico normal.',
    explicacion: 'ERGE no complicada en una paciente menor de 50 años sin signos de alarma: la conducta es prueba terapéutica con IBP en ayunas por 4 a 8 semanas junto con medidas antirreflujo, sin necesidad de endoscopía inicial. La endoscopía se reservaría para falta de respuesta, recurrencia precoz al suspender el IBP o aparición de signos de alarma.',
    keyPoints: [
      'Pirosis + regurgitación típicas, sin alarma y < 50 años: diagnóstico clínico y prueba con IBP; no se endoscopia de entrada.',
      'El IBP se toma en ayunas, 30–60 min antes de comer. Los antagonistas H₂ están obsoletos y no se combinan con IBP.',
      'Signos de alarma (disfagia, baja de peso, anemia, hemorragia, síntomas nocturnos, > 50 años, > 5 años de pirosis) obligan a endoscopía.',
      'Barrett = biopsia con metaplasia intestinal. Lo que decide la cirugía es la displasia, no la metaplasia — son conceptos distintos.',
      'No se erradica H. pylori por ERGE; sí es obligatorio erradicarlo en úlcera péptica y linfoma MALT.',
    ],
    questions: [
      {
        stem: 'Hombre de 27 años, sin antecedentes, consulta por 3 meses de dolor epigástrico urente que aumenta con el ayuno y el estrés, con pirosis ocasional. La endoscopía digestiva alta muestra una úlcera duodenal activa y el test de ureasa resulta negativo. No usa AINE. ¿Cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Iniciar omeprazol, amoxicilina y claritromicina por 14 días' },
          { id: 'B', text: 'Indicar omeprazol y repetir la endoscopía en 6 semanas' },
          { id: 'C', text: 'Solicitar una nueva endoscopía con test de ureasa' },
          { id: 'D', text: 'Iniciar medidas antirreflujo y omeprazol a permanencia' },
          { id: 'E', text: 'Indicar solo omeprazol por 8 semanas y control clínico' },
        ],
        correcta: 'A',
        explicacion: 'Úlcera duodenal activa en un paciente que no usa AINE: se asume infección por Helicobacter pylori aunque el test de ureasa sea negativo (falso negativo frecuente si hay sangrado reciente o uso previo de IBP/antibióticos), porque el 90 % de las úlceras duodenales son por H. pylori. La conducta es la terapia erradicadora de primera línea (IBP + amoxicilina + claritromicina, 14 días), no solo supresión ácida. B y E tratan la úlcera pero no la causa. D corresponde a manejo de ERGE, no de úlcera. C retrasa el tratamiento sin cambiar la conducta.',
        recTag: 'Reconstrucción EUNACOM 2013 · Pregunta #12',
      },
      {
        stem: 'Paciente con úlcera gástrica y test de ureasa positivo recibe amoxicilina, claritromicina y omeprazol por 10 días, seguido de omeprazol por 4 semanas. El control con test de ureasa a las 6 semanas post-tratamiento sigue positivo. ¿Cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Repetir el mismo esquema por 14 días' },
          { id: 'B', text: 'Realizar endoscopía digestiva alta con biopsias' },
          { id: 'C', text: 'Indicar terapia erradicadora de segunda línea' },
          { id: 'D', text: 'Repetir el test de ureasa en 3 meses' },
          { id: 'E', text: 'Observar la evolución clínica' },
        ],
        correcta: 'C',
        explicacion: 'Falla de la erradicación de primera línea confirmada por test de control positivo: se indica un esquema de segunda línea que evite la claritromicina (terapia cuádruple con bismuto, o levofloxacino + amoxicilina + IBP). Repetir el mismo esquema (A) mantiene la resistencia a claritromicina. La endoscopía (B) sería obligatoria para el control de la úlcera gástrica en sí, pero la pregunta apunta a la conducta frente a la falla de erradicación. D y E no corrigen la infección persistente.',
        recTag: 'Reconstrucción EUNACOM Julio 2015 · Pregunta #124',
      },
    ],
  },

  {
    id: 'gastro-02', classId: 'gastro-02', tier: 2,
    blockNum: 1, blockName: 'Esófago y Estómago',
    topicLabel: '1.2', title: 'Úlcera Péptica, Dispepsia Funcional y Helicobacter pylori',
    perfilCode: '1.06.1.030', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Norma MINSAL de dispepsia y erradicación de H. pylori',
    reconstrucciones: null,
    frecuencia: 'Alta rentabilidad · tema de erradicación y decisión de biopsia/control post-tratamiento',
    svg: null, algoTitle: 'Epigastralgia crónica: endoscopía y erradicación',
    contexto: 'La clave de todo el tema es una sola distinción: el omeprazol trata el reflujo, pero la úlcera péptica se trata erradicando el H. pylori. Si solo se suprime ácido, la úlcera cicatriza y recidiva en el 90 % de los casos porque la causa sigue ahí. Y como la epigastralgia de la úlcera, del cáncer gástrico y de la dispepsia funcional es idéntica, la endoscopía es obligatoria en todo paciente con dispepsia y algún signo de alarma o ≥ 40 años.',
    contentSections: [
      {
        subhead: '1. Síndrome ulceroso y causas',
        paragraphs: [
          'La úlcera gastroduodenal se presenta como epigastralgia urente que aumenta con el ayuno y alivia con la ingesta de alimentos o antiácidos. La misma clínica la produce el cáncer gástrico y la dispepsia funcional.',
          'Las dos causas son <strong>Helicobacter pylori</strong> (90 % de las úlceras duodenales, 70 % de las gástricas) y los <strong>AINE</strong>. El tabaco y los corticoides son cofactores. La prevalencia de H. pylori en Chile alcanza el 75 % de la población.',
        ],
      },
      {
        subhead: '2. Diagnóstico',
        paragraphs: [
          'La endoscopía digestiva alta se solicita siempre en el paciente con dispepsia y signos de alarma o edad ≥ 40 años, con dos objetivos: confirmar la úlcera y <strong>tomar biopsias para descartar cáncer gástrico</strong> (obligatorio en toda úlcera gástrica).',
          'El H. pylori se detecta por test de ureasa en la biopsia, test del aliento con ¹³C-urea o antígeno en deposiciones. La dispepsia funcional es un diagnóstico <strong>de exclusión</strong>: requiere una endoscopía normal.',
        ],
      },
      {
        subhead: '3. Erradicación de H. pylori',
        paragraphs: [
          '<strong>Primera línea:</strong> IBP + amoxicilina 1 g + claritromicina 500 mg, todos cada 12 horas por 14 días. <strong>Segunda línea</strong> (si falla): terapia cuádruple con bismuto (IBP + bismuto + tetraciclina + metronidazol) por 14 días, evitando la claritromicina.',
          'Se erradica siempre en la <strong>úlcera gastroduodenal</strong> y en el <strong>linfoma MALT gástrico</strong> (que regresa solo con antibióticos, sin quimioterapia). No se erradica en la ERGE (no hay asociación). Indicación relativa: dispepsia funcional, usuarios crónicos de AINE, antecedente familiar de cáncer gástrico, metaplasia o gastritis atrófica.',
        ],
      },
      {
        subhead: '4. Control de la erradicación y complicaciones',
        paragraphs: [
          'El control se hace 4 semanas después de terminar los antibióticos: úlcera gástrica → endoscopía (además, para verificar cicatrización y descartar cáncer); úlcera duodenal → antígeno fecal o test del aliento. Los tests deben hacerse con el IBP suspendido 2 semanas antes.',
          'Complicaciones: <strong>hemorragia digestiva alta</strong> (la más frecuente) → IBP endovenoso + endoscopía de urgencia con terapia hemostática; y <strong>perforación</strong> → dolor "en puñalada", abdomen en tabla, radiografía de tórax de pie con neumoperitoneo y cirugía de urgencia (la endoscopía está contraindicada).',
        ],
      },
    ],
    table: {
      title: 'Úlcera péptica — a quién se erradica y cómo se controla',
      headers: ['Situación', '¿Erradicar H. pylori?', 'Control post-tratamiento'],
      rows: [
        ['Úlcera duodenal (cualquiera)', 'Siempre, aunque el test sea negativo', 'Antígeno fecal / test del aliento a las 4 sem'],
        ['Úlcera gástrica con H. pylori (+)', 'Sí', 'Endoscopía (cicatrización + biopsias)'],
        ['Úlcera gástrica con H. pylori (−)', 'No', 'Endoscopía de control'],
        ['ERGE con H. pylori (+)', 'No — no hay asociación', 'No aplica'],
        ['Linfoma MALT gástrico', 'Sí — es el tratamiento (no quimioterapia)', 'Endoscopía seriada'],
      ],
    },
    vignette: 'Hombre de 52 años consulta por epigastralgia urente de 6 semanas que aumenta con el ayuno y mejora al comer. No baja de peso ni presenta anemia. Por la edad se solicita endoscopía digestiva alta, que muestra una úlcera gástrica de 8 mm en curvatura menor; se toman biopsias del borde y el test de ureasa es positivo.',
    explicacion: 'Úlcera gástrica con H. pylori positivo: el tratamiento es la terapia erradicadora de primera línea (IBP + amoxicilina + claritromicina 14 días) seguida de IBP hasta completar 6–8 semanas para asegurar la cicatrización. Toda úlcera gástrica obliga a biopsiar el borde para descartar cáncer y a repetir la endoscopía de control, tanto para verificar la cicatrización como para confirmar la erradicación. Dar solo IBP dejaría la causa sin tratar y la recidiva sería del 90 %.',
    keyPoints: [
      'El omeprazol trata el reflujo; la úlcera péptica se trata erradicando H. pylori. Sin erradicación, la úlcera recidiva en el 90 %.',
      'Toda úlcera duodenal se erradica aunque el test de H. pylori sea negativo (falso negativo frecuente con IBP o sangrado reciente).',
      'Toda úlcera gástrica exige biopsia del borde para descartar cáncer y endoscopía de control tras el tratamiento.',
      'Primera línea: IBP + amoxicilina + claritromicina por 14 días. Segunda línea: cuádruple con bismuto, sin claritromicina.',
      'Linfoma MALT gástrico: se trata con erradicación de H. pylori, no con quimioterapia. En la ERGE no se erradica.',
      'Úlcera perforada: radiografía de tórax de pie (neumoperitoneo) y cirugía urgente; la endoscopía está contraindicada.',
    ],
    questions: [
      {
        stem: 'Hombre de 40 años con úlcera duodenal en la endoscopía. El test de ureasa para H. pylori resulta negativo. No usa AINE. ¿Cuál es la conducta respecto de la erradicación?',
        options: [
          { id: 'A', text: 'No erradicar, porque el test de H. pylori es negativo' },
          { id: 'B', text: 'Erradicar igualmente con esquema de primera línea' },
          { id: 'C', text: 'Indicar solo omeprazol por 6 semanas' },
          { id: 'D', text: 'Repetir la endoscopía en 4 semanas antes de decidir' },
          { id: 'E', text: 'Solicitar antígeno fecal y erradicar solo si es positivo' },
        ],
        correcta: 'B',
        explicacion: 'Toda úlcera duodenal se erradica aunque el test resulte negativo, porque el 90 % son por H. pylori y el test de ureasa tiene falsos negativos frecuentes (uso previo de IBP o antibióticos, sangrado reciente). Dar solo omeprazol (C) cicatriza pero no previene la recidiva. Repetir exámenes (D, E) retrasa el tratamiento sin cambiar la conducta.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Mujer de 35 años con epigastralgia urente de 2 meses, sin baja de peso, anemia ni disfagia. La endoscopía digestiva alta es completamente normal y el test de H. pylori es negativo. ¿Cuál es el diagnóstico y la conducta inicial?',
        options: [
          { id: 'A', text: 'Úlcera péptica; iniciar terapia de erradicación' },
          { id: 'B', text: 'Cáncer gástrico incipiente; repetir endoscopía con cromoendoscopia' },
          { id: 'C', text: 'Dispepsia funcional; educación, manejo del estrés y prueba con IBP' },
          { id: 'D', text: 'Gastroparesia; solicitar cintigrafía de vaciamiento gástrico' },
          { id: 'E', text: 'ERGE; iniciar IBP a permanencia y cirugía antirreflujo' },
        ],
        correcta: 'C',
        explicacion: 'Epigastralgia con endoscopía normal y sin signos de alarma es, por definición, dispepsia funcional (diagnóstico de exclusión que requiere endoscopía normal). El manejo es educación, manejo del estrés, moduladores del dolor y una prueba con IBP; se puede ofrecer erradicación de H. pylori si el test fuera positivo, lo que aquí no aplica. No corresponde tratar como úlcera (A) ni repetir estudios invasivos sin nuevas banderas rojas.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-03', classId: 'gastro-03', tier: 2,
    blockNum: 1, blockName: 'Esófago y Estómago',
    topicLabel: '1.3', title: 'Disfagia y Trastornos Motores del Esófago',
    perfilCode: '1.06.1.013', dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica',
    reconstrucciones: null,
    frecuencia: 'Rentabilidad media-alta · pregunta clásica de patrón clínico → examen de elección',
    svg: null, algoTitle: 'Disfagia: el patrón elige el examen',
    contexto: 'La sola descripción de cómo traga el paciente ya orienta la causa. Si la comida "se atasca" primero con los sólidos y luego progresa a los líquidos, hay una obstrucción que crece (disfagia lógica → cáncer). Si el problema es errático y afecta a los líquidos desde el inicio, el músculo no coordina (disfagia ilógica → acalasia, esclerodermia). El examen correcto se deduce del patrón, no al revés.',
    contentSections: [
      {
        subhead: '1. Disfagia lógica vs ilógica',
        paragraphs: [
          '<strong>Disfagia lógica:</strong> progresiva, comienza con los sólidos y luego afecta a los líquidos. Traduce una obstrucción mecánica que crece; la causa a descartar es el cáncer de esófago, sobre todo si hay baja de peso.',
          '<strong>Disfagia ilógica:</strong> fluctuante o errática, afecta a los líquidos desde el inicio. Traduce un trastorno motor: acalasia o esclerodermia. Regla de oro: si afecta a los líquidos desde el principio, piensa en el músculo, no en un tumor.',
        ],
      },
      {
        subhead: '2. Cáncer de esófago (disfagia lógica)',
        paragraphs: [
          'Disfagia lógica progresiva + baja de peso, en un fumador (carcinoma escamoso) o con ERGE/Barrett de larga data (adenocarcinoma). El cáncer de cardias se comporta igual.',
          'El diagnóstico es <strong>endoscopía digestiva alta con biopsia</strong>. La etapificación usa TAC de tórax-abdomen y endosonografía transesofágica (evalúa invasión transmural, el principal factor pronóstico). El único tratamiento curativo es la cirugía; la radioterapia tiene un rol relevante en el esófago.',
        ],
      },
      {
        subhead: '3. Acalasia (disfagia ilógica baja)',
        paragraphs: [
          'Disfagia ilógica y baja (a nivel del esfínter esofágico inferior), fluctuante, con neumonías aspirativas a repetición y regurgitación de alimentos no ácidos (nunca llegaron al estómago).',
          'El diagnóstico de elección es la <strong>manometría esofágica</strong>: peristalsis disminuida + tono del esfínter esofágico inferior aumentado que no relaja. El esofagograma muestra dilatación del cuerpo con imagen "en pico de pájaro". Tratamiento: <strong>esfinterotomía (miotomía) del EEI</strong> de elección; toxina botulínica endoscópica en etapas iniciales o en pacientes no operables; los bloqueadores de calcio relajan el EEI pero producen reflujo.',
        ],
      },
      {
        subhead: '4. Esclerodermia y divertículo de Zenker',
        paragraphs: [
          'Esclerodermia / CREST: disfagia ilógica + pirosis intensa, en el contexto de fenómeno de Raynaud, calcinosis, telangiectasias. Es un trastorno motor esofágico con reflujo ácido grave (a diferencia de la acalasia).',
          '<strong>Divertículo de Zenker:</strong> disfagia alta (esfínter esofágico superior) + halitosis marcada (alimento retenido que fermenta) + regurgitación de comida no digerida. Diagnóstico con <strong>esofagograma con bario</strong> (no endoscopía, no manometría). Tratamiento quirúrgico: diverticulectomía + miotomía cricofaríngea.',
        ],
      },
    ],
    table: {
      title: 'Disfagia — patrón clínico y examen de elección',
      headers: ['Cuadro', 'Clave clínica', 'Examen de elección'],
      rows: [
        ['Cáncer de esófago', 'Disfagia lógica progresiva + baja de peso', 'Endoscopía digestiva alta + biopsia'],
        ['Acalasia', 'Disfagia ilógica baja + neumonías aspirativas', 'Manometría esofágica'],
        ['Esclerodermia (CREST)', 'Disfagia ilógica + pirosis + Raynaud/calcinosis', 'Manometría + anticuerpos (anti-Scl-70, anticentrómero)'],
        ['Divertículo de Zenker', 'Disfagia alta + halitosis + regurgitación', 'Esofagograma con bario'],
        ['Anillo de Schatzki / estenosis péptica', 'Disfagia lógica intermitente a sólidos, sin baja de peso', 'Endoscopía (permite dilatar)'],
      ],
    },
    vignette: 'Mujer de 46 años consulta por 8 meses de dificultad para tragar, más marcada con los líquidos que con los sólidos, de carácter fluctuante. Ha tenido dos neumonías basales derechas en el último año y regurgita alimentos sin sabor ácido durante la noche. No ha bajado de peso.',
    explicacion: 'Disfagia ilógica (afecta a los líquidos desde el inicio, fluctuante) con neumonías aspirativas y regurgitación de contenido no ácido: el cuadro es acalasia. El examen de elección es la manometría esofágica, que mostrará aperistalsis del cuerpo y un esfínter esofágico inferior hipertónico que no relaja. La endoscopía se hace igualmente para descartar una pseudoacalasia por cáncer del cardias, pero no es el examen que confirma el trastorno motor.',
    keyPoints: [
      'Disfagia lógica (sólidos → líquidos, progresiva) = obstrucción = cáncer de esófago → endoscopía con biopsia.',
      'Disfagia ilógica (líquidos desde el inicio, fluctuante) = trastorno motor = acalasia o esclerodermia → manometría.',
      'Acalasia: regurgitación no ácida y neumonías aspirativas; tratamiento de elección = miotomía del EEI.',
      'Disfagia alta + halitosis = divertículo de Zenker → esofagograma con bario, tratamiento quirúrgico.',
      'Los bloqueadores de calcio relajan el EEI (útiles en acalasia inicial) pero producen reflujo; no se usan para tratar la ERGE.',
    ],
    questions: [
      {
        stem: 'Hombre de 62 años, fumador de 40 paquetes-año, consulta por 3 meses de disfagia que comenzó con la carne y el pan y ahora también le cuesta tragar líquidos, con baja de 7 kg de peso. ¿Cuál es la conducta inicial?',
        options: [
          { id: 'A', text: 'Manometría esofágica' },
          { id: 'B', text: 'Esofagograma con bario' },
          { id: 'C', text: 'Endoscopía digestiva alta con biopsia' },
          { id: 'D', text: 'TAC de tórax con contraste' },
          { id: 'E', text: 'Prueba terapéutica con inhibidor de la bomba de protones' },
        ],
        correcta: 'C',
        explicacion: 'Disfagia lógica (progresiva, de sólidos a líquidos) con baja de peso en un fumador es cáncer de esófago mientras no se demuestre lo contrario. El diagnóstico se hace con endoscopía digestiva alta y biopsia; el TAC y la endosonografía vienen después, para etapificar. La manometría y el esofagograma se reservan para la disfagia ilógica (sospecha de trastorno motor).',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Mujer de 71 años consulta por sensación de que la comida "se le queda en la garganta" desde hace un año, regurgitación de alimentos no digeridos y halitosis intensa que le notan sus familiares. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Cáncer de esófago' },
          { id: 'B', text: 'Acalasia' },
          { id: 'C', text: 'Divertículo de Zenker' },
          { id: 'D', text: 'Esclerodermia esofágica' },
          { id: 'E', text: 'Estenosis péptica por reflujo' },
        ],
        correcta: 'C',
        explicacion: 'Disfagia alta (la comida se queda "en la garganta", a nivel del esfínter esofágico superior) con halitosis marcada y regurgitación de alimento no digerido es el cuadro típico del divertículo de Zenker: el alimento se acumula en el saco diverticular y fermenta. El diagnóstico se confirma con esofagograma con bario. La halitosis es la clave que lo separa de la acalasia.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-04', classId: 'gastro-04', tier: 3,
    blockNum: 1, blockName: 'Esófago y Estómago',
    topicLabel: '1.4', title: 'Úlcera Perforada, Perforación Esofágica e Ingesta de Cáustico',
    perfilCode: '1.06.2.002', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · urgencia quirúrgica según Norma MINSAL',
    reconstrucciones: null,
    frecuencia: 'Rentabilidad media · 3 urgencias con la misma regla: cuándo la endoscopía se prohíbe y cuándo se indica',
    svg: null, algoTitle: 'Tres urgencias del tubo digestivo alto',
    contexto: 'Las tres emergencias de esta clase comparten una regla contraintuitiva: la endoscopía, que parece el examen natural, está contraindicada en la úlcera perforada y en la perforación esofágica (el aire insuflado agranda la fuga), pero es la primera medida en la ingesta de cáustico (define el daño y la conducta). Y en la ingesta de cáustico, el carbón activado y el lavado gástrico están prohibidos: el daño ya ocurrió y ambos lo empeoran.',
    contentSections: [
      {
        subhead: '1. Úlcera gastroduodenal perforada',
        paragraphs: [
          'Antecedente de síndrome ulceroso + dolor epigástrico brusco "en puñalada" que se generaliza a todo el abdomen. Al examen: abdomen en tabla, Blumberg positivo, ruidos hidroaéreos abolidos. Lo que se vierte al peritoneo es contenido ácido, muy irritante.',
          '<strong>Examen inicial:</strong> radiografía de tórax de pie buscando neumoperitoneo (aire subdiafragmático, sobre todo bajo el hemidiafragma derecho). Si no está disponible, radiografía de abdomen de pie. <strong>Tratamiento:</strong> cirugía de urgencia (sutura + parche de epiplón de Graham); suero, IBP endovenoso y antibióticos de amplio espectro son complementos. La endoscopía está contraindicada.',
        ],
      },
      {
        subhead: '2. Perforación esofágica (síndrome de Boerhaave)',
        paragraphs: [
          'Causa más frecuente: iatrogénica por endoscopía. El síndrome de Boerhaave es la perforación espontánea tras vómitos intensos. Tríada: dolor torácico (o cervical) + vómitos + enfisema subcutáneo crepitante.',
          'No confundir: vómitos → hematemesis = Mallory-Weiss (desgarro mucoso, se maneja distinto); vómitos → dolor torácico + enfisema + sepsis = Boerhaave (perforación transmural). Examen inicial: radiografía de tórax (neumomediastino, enfisema); TAC de tórax si la radiografía es negativa y la sospecha alta. La endoscopía está contraindicada. La complicación temida es la mediastinitis aguda. Tratamiento: cirugía de urgencia; manejo conservador (régimen cero + antibióticos) solo en perforaciones pequeñas, contenidas y con buena evolución.',
        ],
      },
      {
        subhead: '3. Ingesta de cáustico (soda cáustica)',
        paragraphs: [
          'Dolor y edema desde los labios hasta el epigastrio, sialorrea, disfagia. Puede haber hemorragia digestiva o perforación con peritonitis/mediastinitis.',
          '<strong>Primera medida:</strong> endoscopía digestiva alta precoz (idealmente en las primeras 12–24 h) para graduar el daño y decidir la conducta. Están <strong>contraindicados el carbón activado y el lavado gástrico</strong> (el daño es inmediato e irreversible, y ambos lo agravan); tampoco se administran neutralizantes ni se provoca el vómito.',
        ],
      },
      {
        subhead: '4. Conducta según la endoscopía en la ingesta de cáustico',
        paragraphs: [
          'Mucosa normal o eritema leve: observación y realimentación oral progresiva. Úlceras / inflamación significativa: régimen cero, nutrición parenteral y endoscopía de control.',
          'Necrosis extensa o perforación: régimen cero, nutrición parenteral y cirugía de urgencia. Secuela tardía: estenosis esofágica cicatricial (dilataciones o reconstrucción con estómago o colon) y riesgo aumentado de carcinoma escamoso a largo plazo.',
        ],
      },
    ],
    table: {
      title: 'Tres urgencias del tubo digestivo alto — examen y contraindicación',
      headers: ['Cuadro', 'Examen inicial', 'Tratamiento', 'Contraindicado'],
      rows: [
        ['Úlcera perforada', 'Rx tórax de pie (neumoperitoneo)', 'Cirugía de urgencia', 'Endoscopía'],
        ['Perforación esofágica (Boerhaave)', 'Rx tórax → TAC tórax (neumomediastino)', 'Cirugía de urgencia', 'Endoscopía'],
        ['Ingesta de cáustico', 'Endoscopía precoz (grada el daño)', 'Según hallazgo endoscópico', 'Carbón activado · lavado gástrico · vómito'],
        ['Mallory-Weiss', 'Endoscopía digestiva alta', 'Suele ceder solo; hemostasia endoscópica si sangra', '—'],
      ],
    },
    vignette: 'Hombre de 58 años con antecedente de epigastralgia de meses consulta por dolor epigástrico de inicio súbito, "como una puñalada", que en una hora se extendió a todo el abdomen. Está pálido, taquicárdico, con el abdomen rígido y doloroso de forma difusa, sin ruidos hidroaéreos.',
    explicacion: 'El cuadro es una úlcera péptica perforada: síndrome ulceroso previo + dolor epigástrico brusco que se generaliza + abdomen en tabla con peritonitis difusa. El examen inicial es la radiografía de tórax de pie para buscar neumoperitoneo, y el tratamiento es la cirugía de urgencia (sutura con parche de epiplón). Suero, IBP endovenoso y antibióticos de amplio espectro acompañan, pero no reemplazan la cirugía. La endoscopía está contraindicada porque el aire insuflado aumenta la filtración peritoneal.',
    keyPoints: [
      'Úlcera perforada: dolor en puñalada + abdomen en tabla → Rx tórax de pie (neumoperitoneo) → cirugía urgente. Endoscopía contraindicada.',
      'Perforación esofágica: dolor torácico + vómitos + enfisema subcutáneo → Rx/TAC tórax (neumomediastino). Causa más frecuente: iatrogénica.',
      'Boerhaave (vómitos → perforación) ≠ Mallory-Weiss (vómitos → hematemesis).',
      'Ingesta de cáustico: endoscopía precoz define la conducta. Carbón activado y lavado gástrico están contraindicados.',
      'Si el enunciado ofrece suero + antibióticos + IBP + cirugía en una perforación, la respuesta es siempre la cirugía.',
    ],
    questions: [
      {
        stem: 'Niño de 3 años que hace 2 horas bebió un sorbo de soda cáustica del envase mal rotulado. Presenta sialorrea y llanto al tragar, sin dificultad respiratoria. ¿Cuál es la conducta inicial más adecuada?',
        options: [
          { id: 'A', text: 'Lavado gástrico con sonda nasogástrica' },
          { id: 'B', text: 'Carbón activado por vía oral' },
          { id: 'C', text: 'Endoscopía digestiva alta en las primeras horas' },
          { id: 'D', text: 'Administrar leche o vinagre diluido para neutralizar' },
          { id: 'E', text: 'Provocar el vómito y observar' },
        ],
        correcta: 'C',
        explicacion: 'En la ingesta de cáusticos la primera medida es la endoscopía digestiva alta precoz para graduar el daño de la mucosa y decidir si se observa, se deja en régimen cero con nutrición parenteral o se opera. El lavado gástrico, el carbón activado, los neutralizantes y provocar el vómito están contraindicados porque el daño es inmediato y todas esas maniobras lo agravan (reexposición del esófago al cáustico, perforación).',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Hombre de 45 años, tras una cena copiosa con alcohol y varios episodios de vómitos, presenta dolor torácico intenso y, al examen, crepitación a la palpación del cuello. Está febril y taquicárdico. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Síndrome de Mallory-Weiss' },
          { id: 'B', text: 'Perforación esofágica (síndrome de Boerhaave)' },
          { id: 'C', text: 'Infarto agudo de miocardio' },
          { id: 'D', text: 'Neumotórax espontáneo' },
          { id: 'E', text: 'Disección aórtica' },
        ],
        correcta: 'B',
        explicacion: 'Vómitos intensos seguidos de dolor torácico y enfisema subcutáneo (crepitación cervical), con fiebre y taquicardia, configuran la tríada del síndrome de Boerhaave (perforación esofágica espontánea). El Mallory-Weiss también sigue a los vómitos, pero se manifiesta con hematemesis y no produce enfisema ni sepsis. El examen inicial es la radiografía de tórax buscando neumomediastino; la endoscopía está contraindicada.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-05', classId: 'gastro-05', tier: 2,
    blockNum: 1, blockName: 'Esófago y Estómago',
    topicLabel: '1.5', title: 'Cáncer de Esófago y Cáncer Gástrico',
    perfilCode: '1.06.1.004', dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'GES: endoscopía digestiva alta en ≥ 40 años con dispepsia/signos de alarma',
    reconstrucciones: null,
    frecuencia: 'Alta rentabilidad · patrón de presentación → cuándo endoscopiar y qué define el pronóstico',
    svg: null, algoTitle: 'Baja de peso + síntoma digestivo alto',
    contexto: 'El cáncer gástrico da síntomas tarde: cuando aparece la epigastralgia o el síndrome pilórico, el tumor suele estar avanzado y el pronóstico es malo. Por eso Chile garantiza el acceso a endoscopía en todo mayor de 40 años con dispepsia: el objetivo es pillar el cáncer incipiente (limitado a mucosa-submucosa), el único con buen pronóstico. El factor que decide el pronóstico es la profundidad de invasión de la pared, no las adenopatías.',
    contentSections: [
      {
        subhead: '1. Lo común a los cánceres digestivos altos',
        paragraphs: [
          'Comparten baja de peso, hemorragia digestiva (con anemia ferropénica) y anorexia. El diagnóstico es siempre <strong>endoscopía digestiva alta con biopsia</strong>; la etapificación, TAC de tórax-abdomen-pelvis.',
          'El principal factor pronóstico es la <strong>invasión transmural</strong> (qué tan profundo penetra el tumor), no las adenopatías ni las metástasis. El único tratamiento curativo es la cirugía; quimio y radioterapia son adyuvantes.',
        ],
      },
      {
        subhead: '2. Cáncer de esófago',
        paragraphs: [
          'Se presenta con disfagia lógica progresiva + baja de peso. Dos tipos: <strong>carcinoma escamoso</strong> (tabaco y alcohol, tercio medio) y <strong>adenocarcinoma</strong> (ERGE crónica y esófago de Barrett, tercio distal). El cáncer de cardias se maneja igual.',
          'Diagnóstico: endoscopía + biopsia. Etapificación: TAC + endosonografía transesofágica (invasión de la pared). Tratamiento: cirugía (esofagectomía); la radioterapia tiene un rol destacado, con frecuencia neoadyuvante.',
        ],
      },
      {
        subhead: '3. Cáncer gástrico',
        paragraphs: [
          'Primera causa de muerte por cáncer en hombres en Chile (segunda en mujeres, tras el de mama). Causa principal: H. pylori; factores de riesgo: gastritis atrófica, metaplasia intestinal, antecedente familiar, dieta rica en ahumados y sal.',
          'Formas de presentación: epigastralgia urente idéntica a la úlcera (siempre endoscopiar), <strong>síndrome pilórico</strong> (vómitos posprandiales de retención, en aumento = cáncer hasta demostrar lo contrario), masa epigástrica palpable, adenopatía supraclavicular izquierda (ganglio de Virchow).',
        ],
      },
      {
        subhead: '4. Clasificación y tratamiento del cáncer gástrico',
        paragraphs: [
          '<strong>Cáncer incipiente:</strong> limitado a mucosa y submucosa, independiente de las adenopatías. Buen pronóstico; tratamiento con resección (endoscópica en casos seleccionados o gastrectomía).',
          '<strong>Cáncer avanzado:</strong> compromete la muscular propia o más allá. Gastrectomía (subtotal o total) con linfadenectomía D2 + quimioterapia perioperatoria. La detección precoz por endoscopía GES en dispépticos ≥ 40 años busca aumentar la proporción de cánceres incipientes.',
        ],
      },
    ],
    table: {
      title: 'Presentaciones que obligan a endoscopía digestiva alta',
      headers: ['Presentación', 'Sospecha', 'Conducta'],
      rows: [
        ['Epigastralgia ≥ 40 años o con signo de alarma', 'Úlcera o cáncer gástrico', 'Endoscopía digestiva alta con biopsias'],
        ['Vómitos posprandiales de retención, en aumento', 'Cáncer gástrico con síndrome pilórico', 'Endoscopía digestiva alta'],
        ['Baja de peso + epigastralgia', 'Cáncer gástrico', 'Endoscopía digestiva alta'],
        ['Baja de peso + epigastralgia + ictericia', 'Cáncer de páncreas', 'TAC de abdomen con contraste'],
        ['Disfagia lógica progresiva + baja de peso', 'Cáncer de esófago', 'Endoscopía digestiva alta con biopsia'],
      ],
    },
    vignette: 'Hombre de 68 años consulta por 3 meses de plenitud posprandial y vómitos de alimentos ingeridos horas antes, cada vez más frecuentes, con baja de 9 kg de peso. Al examen destaca un chapoteo gástrico de ayuno y una adenopatía supraclavicular izquierda pequeña.',
    explicacion: 'Síndrome pilórico (vómitos posprandiales de retención en aumento) con baja de peso y ganglio de Virchow: es un cáncer gástrico avanzado con obstrucción de la salida gástrica hasta que se demuestre lo contrario. El examen es la endoscopía digestiva alta con biopsias; luego se etapifica con TAC. La adenopatía supraclavicular izquierda indica enfermedad metastásica y contraindica la cirugía con intención curativa.',
    keyPoints: [
      'Cáncer gástrico: primera causa de muerte por cáncer en hombres en Chile; causa principal H. pylori.',
      'Toda epigastralgia ≥ 40 años o con signo de alarma exige endoscopía digestiva alta con biopsias (GES).',
      'Síndrome pilórico (vómitos de retención en aumento) en adulto = cáncer gástrico hasta demostrar lo contrario.',
      'El factor pronóstico principal de los cánceres digestivos es la invasión transmural, no las adenopatías.',
      'Cáncer de esófago: escamoso (tabaco/alcohol) vs adenocarcinoma (ERGE/Barrett); radioterapia con rol importante.',
      'Baja de peso + epigastralgia + ictericia cambia la sospecha a cáncer de páncreas → pedir TAC, no endoscopía.',
    ],
    questions: [
      {
        stem: 'Hombre de 60 años consulta por baja de 8 kg de peso en 3 meses, epigastralgia sorda e hiporexia. No tiene ictericia. ¿Cuál es el examen inicial más adecuado?',
        options: [
          { id: 'A', text: 'TAC de abdomen y pelvis con contraste' },
          { id: 'B', text: 'Endoscopía digestiva alta con biopsias' },
          { id: 'C', text: 'Ecografía abdominal' },
          { id: 'D', text: 'Marcadores tumorales (CEA, CA 19-9)' },
          { id: 'E', text: 'Tránsito esofagogastroduodenal con bario' },
        ],
        correcta: 'B',
        explicacion: 'Baja de peso con epigastralgia en un mayor de 40 años obliga a descartar cáncer gástrico, y el examen que confirma es la endoscopía digestiva alta con biopsias (además detecta la úlcera y permite tomar muestras para H. pylori). El TAC se usa después, para etapificar. Si el paciente además tuviera ictericia, la sospecha cambiaría a cáncer de páncreas y ahí sí el examen inicial sería el TAC.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Mujer de 55 años con endoscopía por dispepsia que informa un adenocarcinoma gástrico limitado a la mucosa, sin invasión de la submucosa, en una lesión de 15 mm bien diferenciada y sin úlcera. El TAC no muestra adenopatías ni metástasis. ¿Qué define el pronóstico y cuál es la conducta?',
        options: [
          { id: 'A', text: 'El tamaño de la lesión; observación con endoscopías seriadas' },
          { id: 'B', text: 'La profundidad de invasión de la pared; resección (endoscópica o quirúrgica) con intención curativa' },
          { id: 'C', text: 'La presencia de H. pylori; solo terapia de erradicación' },
          { id: 'D', text: 'El grado de diferenciación; quimioterapia paliativa' },
          { id: 'E', text: 'El nivel de CEA; radioterapia externa' },
        ],
        correcta: 'B',
        explicacion: 'El factor pronóstico principal del cáncer gástrico es la profundidad de invasión de la pared. Este es un cáncer incipiente (limitado a la mucosa), el de mejor pronóstico, y con esos criterios (lesión pequeña, bien diferenciada, sin úlcera, sin invasión submucosa) puede tratarse con resección endoscópica de la mucosa; en otros casos, gastrectomía. Observar (A) o solo erradicar H. pylori (C) deja el tumor sin tratar.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-06', classId: 'gastro-06', tier: 1,
    blockNum: 1, blockName: 'Esófago y Estómago',
    topicLabel: '1.6', title: 'Hernia Hiatal, Hernia Diafragmática y Tumores del Mediastino',
    perfilCode: null, dx: null, tx: null, seg: null,
    ges: 'Sin garantía GES',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Rentabilidad baja · aparece como alternativa a descartar o hallazgo incidental, casi nunca como diagnóstico principal',
    svg: null, algoTitle: 'Hallazgos torácicos que confunden',
    contexto: 'Estos tres temas casi nunca son el diagnóstico principal de una pregunta; aparecen como alternativa a descartar o como hallazgo incidental en una radiografía. Lo único que hay que tener claro es qué es benigno y se observa (hernia hiatal tipo I) y qué necesita cirugía (hernia paraesofágica, hernia diafragmática traumática, timoma con miastenia).',
    contentSections: [
      {
        subhead: '1. Hernia hiatal',
        paragraphs: [
          '<strong>Tipo I (por deslizamiento), &gt; 95 % de los casos:</strong> la unión gastroesofágica asciende al tórax. Es prácticamente una variante normal; solo se trata el reflujo si lo hay. Un hallazgo incidental en endoscopía, sin síntomas, se observa.',
          '<strong>Tipo II–IV (paraesofágica), &lt; 5 %:</strong> el fondo gástrico hernia junto al esófago, que se mantiene en su sitio. Es una hernia "real" con riesgo de vólvulo, incarceración y estrangulación → <strong>cirugía electiva</strong> (reparación + funduplicatura), y urgente si se complica.',
        ],
      },
      {
        subhead: '2. Hernia diafragmática traumática del adulto',
        paragraphs: [
          'Tras un trauma toracoabdominal (más frecuente a izquierda). Puede diagnosticarse en fase aguda o años después como hallazgo: radiografía de tórax con asas intestinales o cámara gástrica en el hemitórax.',
          '<strong>Fase aguda</strong> (con compromiso respiratorio o víscera estrangulada): cirugía de urgencia. <strong>Fase crónica</strong> (hallazgo, paciente estable): cirugía electiva para prevenir la obstrucción o estrangulación futura. No se observa una hernia diafragmática verdadera.',
        ],
      },
      {
        subhead: '3. Tumores del mediastino',
        paragraphs: [
          'La localización orienta la causa. <strong>Mediastino anterior — regla de las 4 T:</strong> Timoma, Terrible linfoma, Teratoma (y tumores germinales), Tiroides (bocio endotorácico).',
          '<strong>Mediastino medio:</strong> quistes broncogénicos y pericárdicos, adenopatías, aneurismas. <strong>Mediastino posterior:</strong> tumores neurogénicos (neurinoma, ganglioneuroma) — los más frecuentes del mediastino en total.',
        ],
      },
      {
        subhead: '4. Estudio y manejo de la masa mediastínica',
        paragraphs: [
          'El examen de elección es el <strong>TAC de tórax con contraste</strong> (localización, tamaño, relaciones vasculares, características). Según el caso se completa con marcadores (alfa-fetoproteína y beta-hCG en tumores germinales), biopsia percutánea o quirúrgica.',
          '<strong>Timoma:</strong> se reseca si es grande, sintomático o se asocia a <strong>miastenia gravis</strong> (la timectomía puede mejorar la miastenia). El linfoma se trata con quimioterapia, no cirugía; el teratoma maduro se reseca.',
        ],
      },
    ],
    table: {
      title: 'Qué se observa y qué se opera',
      headers: ['Hallazgo', 'Conducta'],
      rows: [
        ['Hernia hiatal tipo I asintomática', 'Observar; tratar el reflujo solo si hay síntomas'],
        ['Hernia hiatal paraesofágica (tipo II–IV)', 'Cirugía electiva (riesgo de vólvulo/estrangulación)'],
        ['Hernia diafragmática traumática aguda', 'Cirugía de urgencia'],
        ['Hernia diafragmática traumática crónica (hallazgo)', 'Cirugía electiva'],
        ['Masa en mediastino (cualquier compartimento)', 'TAC de tórax con contraste'],
        ['Timoma con miastenia gravis', 'Timectomía'],
      ],
    },
    vignette: 'Hombre de 34 años, con antecedente de accidente de tránsito con trauma toracoabdominal hace 3 años, se realiza una radiografía de tórax por un cuadro respiratorio banal. El informe describe imágenes de asas intestinales ocupando el tercio inferior del hemitórax izquierdo. Está asintomático desde el punto de vista digestivo.',
    explicacion: 'Es una hernia diafragmática traumática en fase crónica, descubierta como hallazgo. Aunque el paciente esté asintomático, una hernia diafragmática verdadera no se observa: se repara de forma electiva para evitar la obstrucción, la incarceración o la estrangulación de las asas herniadas, complicaciones de alta mortalidad. La cirugía de urgencia se reserva para la fase aguda o para la hernia complicada.',
    keyPoints: [
      'Hernia hiatal tipo I (deslizamiento, > 95 %): casi normal; se observa y solo se trata el reflujo si existe.',
      'Hernia hiatal paraesofágica (< 5 %): cirugía electiva por riesgo de vólvulo y estrangulación.',
      'Hernia diafragmática traumática: aguda → cirugía urgente; crónica (hallazgo) → cirugía electiva. Nunca se observa.',
      'Tumores del mediastino anterior: 4 T = Timoma, Terrible linfoma, Teratoma, Tiroides.',
      'Toda masa mediastínica se estudia con TAC de tórax con contraste. Timoma + miastenia gravis → timectomía.',
    ],
    questions: [
      {
        stem: 'Mujer de 50 años, asintomática, a quien se realiza una endoscopía digestiva alta por anemia y se informa como hallazgo una hernia hiatal por deslizamiento de 2 cm. No refiere pirosis ni regurgitación. ¿Cuál es la conducta?',
        options: [
          { id: 'A', text: 'Cirugía antirreflujo (funduplicatura de Nissen)' },
          { id: 'B', text: 'Iniciar omeprazol profiláctico de por vida' },
          { id: 'C', text: 'Observación, sin tratamiento específico' },
          { id: 'D', text: 'Reparación laparoscópica electiva del hiato' },
          { id: 'E', text: 'pH-metría de 24 horas y decidir según resultado' },
        ],
        correcta: 'C',
        explicacion: 'La hernia hiatal tipo I (por deslizamiento) asintomática se comporta casi como una variante normal y no requiere ningún tratamiento: solo se maneja el reflujo si el paciente tiene síntomas. La cirugía se reserva para las hernias paraesofágicas (por su riesgo de complicación mecánica) o para la ERGE grave refractaria. La anemia de esta paciente debe estudiarse por otras causas.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'En una radiografía de tórax de control se observa un ensanchamiento del mediastino anterior en un paciente de 40 años con diplopía y fatigabilidad muscular que mejora con el reposo. ¿Cuál es el examen a solicitar y la sospecha?',
        options: [
          { id: 'A', text: 'Ecografía torácica; quiste pericárdico' },
          { id: 'B', text: 'TAC de tórax con contraste; timoma asociado a miastenia gravis' },
          { id: 'C', text: 'Resonancia de columna; tumor neurogénico' },
          { id: 'D', text: 'PET-CT; linfoma de Hodgkin' },
          { id: 'E', text: 'Cintigrafía tiroidea; bocio endotorácico' },
        ],
        correcta: 'B',
        explicacion: 'Masa en el mediastino anterior + síntomas de miastenia gravis (diplopía y debilidad fluctuante que mejora con el reposo) orientan a un timoma. El examen de elección para cualquier masa mediastínica es el TAC de tórax con contraste. El timoma asociado a miastenia gravis tiene indicación de timectomía, que además puede mejorar la miastenia.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  /* ═══════════════════════ BLOQUE 02 · INTESTINO Y COLON ═══════════════════════ */
  {
    id: 'gastro-07', classId: 'gastro-07', tier: 1,
    blockNum: 2, blockName: 'Intestino y Colon',
    topicLabel: '2.1', title: 'Trastornos Digestivos Funcionales y Síndrome de Intestino Irritable',
    perfilCode: '1.06.1.008', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES · manejo completo en Atención Primaria',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#41) · EUNACOM Julio 2022 (Q#66)',
    frecuencia: 'Rentabilidad media · aparece como diagnóstico diferencial de dolor abdominal crónico y como pregunta de signos de alarma',
    svg: null, algoTitle: null,
    contexto: null,
    contentSections: [
      {
        subhead: '1. Concepto y peso en el examen',
        paragraphs: [
          'Los trastornos digestivos funcionales (TDF) son síntomas digestivos crónicos o recurrentes sin una anomalía estructural o bioquímica que los explique. Son la <strong>primera causa de consulta gastroenterológica</strong> y la principal causa de dolor abdominal crónico, diarrea crónica y constipación crónica.',
          'Hoy se entienden como trastornos del <strong>eje cerebro-intestino</strong>: hipersensibilidad visceral y alteración de la motilidad, gatilladas por estrés, dieta y disbiosis. El síndrome de intestino irritable (SII) es el prototipo.',
        ],
      },
      {
        subhead: '2. Diagnóstico del SII (criterios de Roma IV)',
        paragraphs: [
          '<strong>Dolor abdominal recurrente</strong> al menos 1 día por semana en los últimos 3 meses, asociado a <strong>2 o más</strong> de: relación con la defecación, cambio en la frecuencia de las deposiciones o cambio en su consistencia.',
          'Es un diagnóstico <strong>clínico y positivo</strong>, no de descarte: si el paciente cumple los criterios y no tiene signos de alarma, no se requiere una batería de exámenes. Sí se solicitan de rutina hemograma, PCR, TSH, anticuerpos de enfermedad celíaca y —en diarrea— calprotectina fecal.',
        ],
      },
      {
        subhead: '3. Signos de alarma que obligan a estudio orgánico',
        paragraphs: [
          'Cualquier signo de alarma cambia la conducta: se abandona la hipótesis funcional y se estudia con <strong>endoscopía digestiva alta o colonoscopía</strong> según la localización del síntoma.',
          'Regla mnemotécnica <strong>ABCDEFH</strong>: <strong>A</strong>nemia, <strong>B</strong>aja de peso, <strong>C</strong>ambio reciente del hábito o del patrón de síntomas, <strong>D</strong>isfagia, <strong>E</strong>dad de inicio &gt; 50 años, <strong>F</strong>amiliar de primer grado con cáncer digestivo, <strong>H</strong>emorragia (rectorragia, melena) y síntomas nocturnos que despiertan al paciente.',
        ],
      },
      {
        subhead: '4. Tratamiento del SII',
        paragraphs: [
          'Base: <strong>educación</strong> (explicar la naturaleza benigna y descartar cáncer explícitamente en la conversación), <strong>manejo del estrés</strong> y ajuste dietético (dieta baja en FODMAP, fibra soluble).',
          'Farmacoterapia dirigida al síntoma predominante: antiespasmódicos (trimebutino, bromuro de pinaverio) para el dolor; <strong>antidepresivos tricíclicos en dosis baja (amitriptilina)</strong> para el SII con predominio de diarrea; laxantes osmóticos (polietilenglicol) para el predominio de constipación.',
        ],
      },
    ],
    table: {
      title: 'Funcional vs orgánico — cómo se distingue en la práctica',
      headers: ['Rasgo', 'Trastorno funcional (SII)', 'Enfermedad orgánica'],
      rows: [
        ['Edad de inicio', 'Joven (< 50 años)', '> 50 años'],
        ['Síntomas nocturnos', 'Ausentes (no despiertan)', 'Presentes'],
        ['Baja de peso / anemia', 'Ausentes', 'Presentes'],
        ['Relación con la defecación', 'Característica (alivia o cambia)', 'Sin relación clara'],
        ['Exámenes de rutina', 'Normales', 'Alterados (VHS, PCR, calprotectina, Hb)'],
      ],
    },
    vignette: 'Mujer de 32 años consulta por dolor abdominal en hipogastrio de 8 meses de evolución que alivia tras defecar, con períodos alternados de diarrea y constipación. Sin baja de peso, rectorragia ni anemia. Examen físico y hemograma normales.',
    explicacion: 'Cumple criterios de Roma IV para síndrome de intestino irritable (dolor recurrente relacionado con la defecación y con cambio en la frecuencia y la forma de las deposiciones) y no presenta signos de alarma. El diagnóstico es clínico y positivo, no requiere endoscopía. El manejo es educación, dieta baja en FODMAP y fármacos según el síntoma predominante.',
    keyPoints: [
      'El diagnóstico de SII es clínico y positivo (criterios de Roma IV), no de descarte: no se necesita endoscopía si no hay signos de alarma.',
      'Signos de alarma (ABCDEFH): anemia, baja de peso, cambio del hábito, disfagia, edad > 50 a, familiar con cáncer, hemorragia y síntomas nocturnos.',
      'Cualquier signo de alarma obliga a estudio con endoscopía o colonoscopía para descartar cáncer.',
      'Tratamiento: educación + manejo del estrés + dieta baja en FODMAP; amitriptilina si predomina la diarrea, polietilenglicol si predomina la constipación.',
    ],
    questions: [
      {
        stem: 'Mujer de 48 años consulta por distensión y dolor abdominal de 1 año, alternando diarrea y constipación. En los últimos 2 meses refiere deposiciones más frecuentes, baja de 4 kg de peso no buscada y un episodio de rectorragia. Su madre tuvo cáncer de colon a los 55 años. ¿Cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Diagnosticar síndrome de intestino irritable e iniciar dieta baja en FODMAP' },
          { id: 'B', text: 'Solicitar colonoscopía' },
          { id: 'C', text: 'Indicar antiespasmódicos y control en 3 meses' },
          { id: 'D', text: 'Solicitar test de sangre oculta en deposiciones y repetir en 1 año' },
          { id: 'E', text: 'Iniciar amitriptilina en dosis baja' },
        ],
        correcta: 'B',
        explicacion: 'Tiene múltiples signos de alarma: edad > 50 (límite), baja de peso involuntaria, cambio reciente del hábito intestinal, rectorragia y antecedente familiar de cáncer de colon. Eso descarta el manejo como trastorno funcional (A, C, E) y obliga a colonoscopía para descartar cáncer colorrectal. El test de sangre oculta (D) es una herramienta de tamizaje poblacional en personas asintomáticas, no sirve para estudiar a un paciente sintomático con banderas rojas.',
        recTag: 'Reconstrucción EUNACOM Diciembre 2018 · Pregunta #41',
      },
      {
        stem: 'Hombre de 29 años consulta por dolor abdominal recurrente de 6 meses que alivia al defecar, asociado a deposiciones más blandas cuando aparece el dolor. Sin baja de peso, anemia ni antecedentes familiares. Hemograma, PCR y anticuerpos anti-transglutaminasa normales. ¿Cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Colonoscopía para descartar enfermedad inflamatoria intestinal' },
          { id: 'B', text: 'Diagnóstico de síndrome de intestino irritable e iniciar manejo' },
          { id: 'C', text: 'Endoscopía digestiva alta con biopsias duodenales' },
          { id: 'D', text: 'TAC de abdomen y pelvis con contraste' },
          { id: 'E', text: 'Prueba terapéutica con inhibidor de la bomba de protones' },
        ],
        correcta: 'B',
        explicacion: 'Cumple criterios de Roma IV (dolor recurrente que alivia con la defecación y se asocia a cambio en la consistencia de las deposiciones) sin ningún signo de alarma y con exámenes básicos normales, incluyendo serología celíaca negativa. El diagnóstico de SII es clínico y positivo; corresponde iniciar tratamiento (educación, dieta, fármacos según síntoma) sin más estudios. Las alternativas A, C y D son estudios invasivos innecesarios en ausencia de banderas rojas.',
        recTag: 'Caso tipo EUNACOM (banco 2022)',
      },
    ],
  },

  {
    id: 'gastro-08', classId: 'gastro-08', tier: 1,
    blockNum: 2, blockName: 'Intestino y Colon',
    topicLabel: '2.2', title: 'Diarrea Aguda, Diarrea Crónica y Constipación',
    perfilCode: '1.06.2.005', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Norma MINSAL de manejo de la diarrea aguda (Planes A/B/C)',
    reconstrucciones: null,
    frecuencia: 'Rentabilidad media-alta · plan de hidratación y cuándo (no) dar antibióticos o antidiarreicos',
    svg: null, algoTitle: 'Diarrea según su duración',
    contexto: 'En la diarrea aguda el 90 % del examen es una sola cosa: hidratar bien y no dar de más. Los antibióticos y los antidiarreicos son la excepción, no la regla, porque en una diarrea infecciosa la loperamida aumenta el riesgo de complicaciones y el antibiótico rara vez cambia el curso. Cuando la diarrea se hace crónica, el eje del razonamiento son los signos de alarma: con ellos, colonoscopía; sin ellos, la causa más probable es funcional.',
    contentSections: [
      {
        subhead: '1. Definiciones y clasificación',
        paragraphs: [
          'Diarrea = deposiciones de menor consistencia y &gt; 3 al día. Por duración: aguda (&lt; 2 semanas), prolongada (2–4 semanas) y crónica (≥ 4 semanas). Constipación = deposiciones duras y &lt; 3 por semana.',
          'La diarrea aguda es habitualmente infecciosa y viral (más frecuente que la bacteriana). En la práctica no se estudia la etiología de cada caso: el diagnóstico es clínico y el manejo, sintomático.',
        ],
      },
      {
        subhead: '2. Manejo de la deshidratación en la diarrea aguda',
        paragraphs: [
          '<strong>Plan A</strong> (sin deshidratación o &lt; 5 % de pérdida de peso): sales de rehidratación oral 100–200 mL tras cada deposición, en domicilio. <strong>Plan B</strong> (deshidratación moderada, 5–10 %: irritabilidad, mucosas secas, ojos hundidos): SRO 50–100 mL/kg en 4–6 h, reevaluando; si vomita, fraccionar a sorbos.',
          '<strong>Plan C</strong> (deshidratación grave &gt; 10 %, shock, compromiso de conciencia, íleo o vómitos incoercibles): hidratación endovenosa con cristaloides (suero fisiológico o Ringer lactato). En hipernatremia se prefieren soluciones hipotónicas o glucosalinas.',
        ],
      },
      {
        subhead: '3. Fármacos en la diarrea aguda',
        paragraphs: [
          '<strong>No</strong> se usan antidiarreicos (loperamida) en la diarrea aguda infecciosa: aumentan el riesgo de complicaciones. Sí pueden usarse antieméticos y antiespasmódicos para el confort.',
          'Antibióticos solo si: disentería (sangre en las deposiciones → Shigella, E. coli enteroinvasora), diarrea del viajero, fiebre persistente &gt; 2–3 días o paciente séptico. Elección: <strong>ciprofloxacino</strong> oral (ceftriaxona endovenosa si es grave); cólera → azitromicina; Campylobacter → azitromicina.',
        ],
      },
      {
        subhead: '4. Diarrea prolongada/crónica y constipación',
        paragraphs: [
          'Prolongada (2–4 sem): buscar el agente (coprocultivo, parasitológico seriado por Giardia y Entamoeba, rotatest). Diarrea post-antibióticos (uso en el último mes) → sospechar <strong>Clostridioides difficile</strong>: diagnóstico por PCR de toxina; tratamiento metronidazol → vancomicina oral; la respuesta se evalúa clínicamente, no repitiendo la PCR.',
          'Crónica (≥ 4 sem): según la clínica → funcional (SII), malabsorción (test de Sudán, D-xilosa, serología celíaca), EII (colonoscopía) o cáncer de colon si hay signos de alarma (colonoscopía). Constipación: funcional (educación, fibra, agua, proquinéticos); con signos de alarma en el adulto mayor → colonoscopía para descartar cáncer.',
        ],
      },
    ],
    table: {
      title: 'Diarrea aguda — plan de hidratación',
      headers: ['Plan', 'Estado del paciente', 'Conducta'],
      rows: [
        ['A', 'Sin deshidratación (< 5 % pérdida de peso)', 'SRO 100–200 mL post deposición, en casa'],
        ['B', 'Deshidratación moderada (5–10 %): irritable, mucosas secas, ojos hundidos', 'SRO 50–100 mL/kg en 4–6 h y reevaluar'],
        ['C', 'Deshidratación grave (> 10 %), shock, compromiso de conciencia, íleo, vómitos incoercibles', 'Cristaloides endovenosos'],
      ],
    },
    vignette: 'Lactante de 8 meses con diarrea acuosa de 3 días, sin sangre ni fiebre alta. Al examen está irritable, con las mucosas secas, los ojos hundidos y el signo del pliegue enlentecido; ha perdido el 7 % de su peso habitual. Tolera pequeños sorbos de líquido.',
    explicacion: 'Deshidratación moderada (7 % de pérdida de peso, mucosas secas, ojos hundidos, irritabilidad) por diarrea aguda sin disentería: corresponde el Plan B, con sales de rehidratación oral 50–100 mL/kg en 4–6 horas y reevaluación clínica. Como tolera la vía oral, no se necesita hidratación endovenosa. No se indican antibióticos (no hay disentería ni fiebre alta persistente) ni antidiarreicos.',
    keyPoints: [
      'Regla de los 3: diarrea = > 3 deposiciones/día; constipación = < 3 deposiciones/semana.',
      'Diarrea aguda: el manejo es la hidratación (Plan A/B/C). Los antidiarreicos están contraindicados.',
      'Antibiótico en diarrea aguda solo si disentería, diarrea del viajero, fiebre persistente o sepsis. Elección: ciprofloxacino.',
      'Diarrea post-antibióticos (último mes) → C. difficile: PCR de toxina; la respuesta se evalúa clínicamente, no con PCR de control.',
      'Diarrea crónica o constipación con signos de alarma en adulto mayor → colonoscopía para descartar cáncer.',
    ],
    questions: [
      {
        stem: 'Hombre de 46 años presenta diarrea líquida de 3 semanas que comenzó 10 días después de terminar un tratamiento con amoxicilina-clavulánico por una neumonía. Sin sangre en las deposiciones. ¿Cuál es el examen más adecuado para confirmar la etiología?',
        options: [
          { id: 'A', text: 'Coprocultivo corriente' },
          { id: 'B', text: 'PCR de toxina para Clostridioides difficile en deposiciones' },
          { id: 'C', text: 'Parasitológico seriado de deposiciones' },
          { id: 'D', text: 'Colonoscopía con biopsias' },
          { id: 'E', text: 'Calprotectina fecal' },
        ],
        correcta: 'B',
        explicacion: 'Diarrea que aparece hasta un mes después del uso de antibióticos obliga a descartar Clostridioides difficile. El examen de elección actual es la PCR de toxina en deposiciones, más sensible que la detección de toxinas A y B. El tratamiento es metronidazol oral y, si falla, vancomicina oral; la respuesta se evalúa por la clínica, no repitiendo la PCR (puede quedar positiva por semanas).',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Niño de 2 años con diarrea acuosa de 2 días y fiebre de 38,5 °C, sin sangre en las deposiciones, con buen estado general y sin signos de deshidratación. ¿Cuál es la conducta respecto de los antibióticos?',
        options: [
          { id: 'A', text: 'Ciprofloxacino oral' },
          { id: 'B', text: 'Ceftriaxona endovenosa' },
          { id: 'C', text: 'Azitromicina oral' },
          { id: 'D', text: 'No indicar antibióticos' },
          { id: 'E', text: 'Metronidazol oral' },
        ],
        correcta: 'D',
        explicacion: 'La diarrea aguda del niño, por regla general, no lleva antibiótico. Solo se indica ante disentería con mal estado general, fiebre alta persistente por varios días, dolor abdominal intenso o aislamiento de Shigella o E. coli enteroinvasora. Este niño está en buen estado, sin disentería y con fiebre de pocas horas: el manejo es hidratación y observación.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-09', classId: 'gastro-09', tier: 2,
    blockNum: 2, blockName: 'Intestino y Colon',
    topicLabel: '2.3', title: 'Síndrome de Malabsorción, Enfermedad Celíaca e Intolerancia a la Lactosa',
    perfilCode: '1.06.1.015', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: null,
    frecuencia: 'Rentabilidad media · perla recurrente: anemia ferropénica refractaria → descartar celíaca',
    svg: null, algoTitle: 'Malabsorción: Sudán y D-xilosa',
    contexto: 'Dos pruebas ordenan todo el tema. El test de Sudán solo dice "hay grasa en las deposiciones" (esteatorrea). El test de D-xilosa dice dónde está el problema: si sale alterado, la pared intestinal no absorbe (celíaca, Crohn); si sale normal, la pared está bien y faltan enzimas (páncreas). Y hay una perla que se repite: una anemia ferropénica que no responde a hierro oral, con o sin diarrea, obliga a descartar enfermedad celíaca, porque el hierro se absorbe justo en el duodeno.',
    contentSections: [
      {
        subhead: '1. Síndrome de malabsorción',
        paragraphs: [
          'Diarrea crónica + baja de peso con ingesta conservada + esteatorrea (deposiciones brillantes, que flotan, de mal olor) + lientería (restos de alimento sin digerir) + signos carenciales (anemia ferropénica refractaria, hipocalcemia, glositis, queilitis, piel seca).',
          'Estudio: test de Sudán en deposiciones confirma la esteatorrea. Test de D-xilosa: alterado = problema parietal (celíaca, Crohn, intestino corto); normal = problema enzimático pancreático (pancreatitis crónica, fibrosis quística). Ante sospecha de Giardia, parasitológico y tratamiento con tinidazol/metronidazol.',
        ],
      },
      {
        subhead: '2. Enfermedad celíaca — clínica y diagnóstico',
        paragraphs: [
          'Enteropatía inmune gatillada por el gluten (trigo, cebada, centeno; también la avena por contaminación/avenina). Puede ser oligosintomática: distensión, flatulencia, dispepsia "funcional", o solo anemia ferropénica o hipocalcemia aisladas (el hierro y el calcio se absorben en el duodeno, la zona más dañada).',
          'Diagnóstico: <strong>anticuerpos anti-transglutaminasa tisular IgA</strong> (más antiendomisio) junto con IgA total (el déficit de IgA, más frecuente en celíacos, da falsos negativos). Confirmación con biopsia duodenal: atrofia vellositaria, hiperplasia de criptas, linfocitosis intraepitelial. El paciente debe estar consumiendo gluten al momento del estudio.',
        ],
      },
      {
        subhead: '3. Enfermedad celíaca — tratamiento y complicaciones',
        paragraphs: [
          'Único tratamiento: <strong>dieta sin gluten estricta y de por vida</strong>. Seguimiento: mejoría clínica + negativización de los anticuerpos (habitualmente al año).',
          'Si no responde: la causa más frecuente es la transgresión de la dieta (a menudo por contaminación cruzada). Si el paciente cumple la dieta, los anticuerpos están negativos y aun así persiste la malabsorción y la baja de peso → sospechar <strong>linfoma T asociado a enteropatía</strong> (linfoma MALT intestinal).',
        ],
      },
      {
        subhead: '4. Intolerancia a la lactosa vs galactosemia',
        paragraphs: [
          '<strong>Intolerancia a la lactosa:</strong> déficit de lactasa (frecuente en el adulto). Diarrea osmótica, meteorismo y dolor tras los lácteos, sin esteatorrea. Diagnóstico: test de hidrógeno espirado. Tratamiento: reducir lactosa o usar lactasa exógena (la "leche sin lactosa" es leche con lactasa añadida).',
          '<strong>Galactosemia:</strong> enfermedad genética autosómica recesiva grave del recién nacido: ictericia, daño hepático, cataratas, retraso del desarrollo, sepsis por E. coli. Tratamiento: eliminar toda la galactosa → lactancia materna y fórmulas animales contraindicadas, se usa <strong>fórmula de soya</strong>. La "leche sin lactosa" está prohibida (contiene galactosa).',
        ],
      },
    ],
    table: {
      title: 'Malabsorción — interpretar la D-xilosa; lactosa vs galactosa',
      headers: ['Prueba / cuadro', 'Hallazgo', 'Significado'],
      rows: [
        ['D-xilosa alterada', 'Baja excreción urinaria', 'Problema parietal: celíaca, Crohn, intestino corto'],
        ['D-xilosa normal', 'Excreción urinaria normal', 'Problema enzimático: pancreatitis crónica, fibrosis quística'],
        ['Anticuerpos celíacos negativos con clínica sugerente', 'Verificar IgA total', 'Déficit de IgA da falsos negativos'],
        ['Intolerancia a la lactosa', 'Diarrea osmótica sin esteatorrea, en el adulto', 'Reducir lactosa; leche sin lactosa útil'],
        ['Galactosemia', 'Recién nacido con cataratas, ictericia, retraso', 'Fórmula de soya; lactancia y leche sin lactosa prohibidas'],
      ],
    },
    vignette: 'Mujer de 30 años consulta por diarrea crónica, distensión y baja de 6 kg de peso en un año. Tiene una anemia ferropénica que no ha respondido a 4 meses de hierro oral bien tolerado. El test de D-xilosa resulta alterado.',
    explicacion: 'Malabsorción con test de D-xilosa alterado indica un problema de la pared intestinal. En una adulta con diarrea crónica y, sobre todo, anemia ferropénica refractaria al hierro oral, la primera sospecha es la enfermedad celíaca, ya que el duodeno —donde se absorbe el hierro— es la zona más afectada. Se solicitan anticuerpos anti-transglutaminasa IgA con IgA total y se confirma con biopsia duodenal, manteniendo el gluten en la dieta hasta completar el estudio.',
    keyPoints: [
      'Test de Sudán confirma esteatorrea; test de D-xilosa localiza: alterado = pared (celíaca/Crohn), normal = enzimas (páncreas).',
      'Anemia ferropénica refractaria al hierro oral, con o sin diarrea, obliga a descartar enfermedad celíaca.',
      'Diagnóstico de celíaca: anti-transglutaminasa IgA + IgA total, y biopsia duodenal (con el paciente consumiendo gluten).',
      'Celíaca que no responde: casi siempre transgresión dietética; si cumple y anticuerpos negativos, sospechar linfoma MALT.',
      'Galactosemia (RN con cataratas e ictericia): fórmula de soya; lactancia materna y "leche sin lactosa" están contraindicadas.',
    ],
    questions: [
      {
        stem: 'Paciente con enfermedad celíaca que lleva 1 año con dieta sin gluten. Refiere seguirla de forma estricta, pero persiste con diarrea y baja de peso. Los anticuerpos anti-transglutaminasa están negativos. ¿Cuál es la sospecha diagnóstica?',
        options: [
          { id: 'A', text: 'Transgresión oculta de la dieta' },
          { id: 'B', text: 'Linfoma T asociado a enteropatía (linfoma MALT)' },
          { id: 'C', text: 'Intolerancia a la lactosa secundaria' },
          { id: 'D', text: 'Síndrome de intestino irritable sobreagregado' },
          { id: 'E', text: 'Giardiasis crónica' },
        ],
        correcta: 'B',
        explicacion: 'La causa más frecuente de falta de respuesta en la celíaca es la transgresión dietética, pero en ese caso los anticuerpos suelen mantenerse elevados. Aquí los anticuerpos están negativos (lo que confirma buena adherencia) y aun así persiste la malabsorción: eso obliga a descartar un linfoma T asociado a enteropatía, complicación grave de la enfermedad celíaca que requiere imágenes y biopsias repetidas.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Recién nacido de 12 días con ictericia prolongada, hepatomegalia, mal incremento ponderal y cataratas bilaterales detectadas en el examen ocular. ¿Cuál es el tratamiento nutricional indicado?',
        options: [
          { id: 'A', text: 'Mantener lactancia materna exclusiva' },
          { id: 'B', text: 'Fórmula sin lactosa' },
          { id: 'C', text: 'Fórmula de soya (sin galactosa)' },
          { id: 'D', text: 'Fórmula extensamente hidrolizada' },
          { id: 'E', text: 'Suplemento oral de lactasa con leche materna' },
        ],
        correcta: 'C',
        explicacion: 'Ictericia, daño hepático, cataratas y retraso del desarrollo en el recién nacido configuran una galactosemia. El tratamiento es eliminar toda la galactosa: están contraindicadas la lactancia materna y las fórmulas de origen animal. La fórmula sin lactosa no sirve, porque aporta galactosa (la lactasa añadida hidroliza la lactosa en glucosa y galactosa). Se usa fórmula de soya u otra de origen vegetal.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-10', classId: 'gastro-10', tier: 2,
    blockNum: 2, blockName: 'Intestino y Colon',
    topicLabel: '2.4', title: 'Enfermedad Inflamatoria Intestinal: Colitis Ulcerosa y Enfermedad de Crohn',
    perfilCode: '1.06.1.018', dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · derivar a especialista para inducción y mantención',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#26) · EUNACOM Agosto 2021 (Q#21) · EUNACOM Julio 2025 (Q#164)',
    frecuencia: 'Alta rentabilidad · la regla "basta una característica de Crohn" resuelve la mayoría de las preguntas',
    svg: null, algoTitle: 'Colitis ulcerosa vs enfermedad de Crohn',
    contexto: 'Ante un joven con diarrea con sangre y mucosidad de meses, fiebre y baja de peso, la conducta siempre es colonoscopía con biopsias. Diferenciar las dos enfermedades se reduce a una regla: basta UNA característica de Crohn (compromiso del íleon o del tubo alto, lesiones en parches, afectación transmural, fístulas, masa o compromiso perianal) para llamarla Crohn. Si es puramente colónica, continua y empieza en el recto, es colitis ulcerosa. Esa distinción cambia la cirugía: colectomía cura la CU, pero en Crohn nunca se opera con intención curativa.',
    contentSections: [
      {
        subhead: '1. El escenario y por qué siempre termina en colonoscopía',
        paragraphs: [
          'La colitis ulcerosa (CU) y la enfermedad de Crohn (EC) son enfermedades autoinmunes por desregulación de la respuesta inmune frente a la microbiota en un individuo genéticamente predispuesto. Debutan en el adulto joven, con curso en brotes y remisiones: diarrea crónica disentérica (sangre, mucosidad o pus), dolor abdominal cólico, baja de peso, fiebre y compromiso del estado general por el estado hipercatabólico.',
          'Ante ese cuadro —o ante cualquier sospecha de cáncer de colon en un mayor— la conducta inicial es siempre <strong>colonoscopía total con ileoscopía y biopsias escalonadas</strong>, que confirma la enfermedad y permite diferenciarlas. La calprotectina fecal elevada apoya el origen inflamatorio (frente a un intestino irritable) y sirve para seguimiento; los anticuerpos p-ANCA (CU) y ASCA (Crohn) orientan pero no diagnostican.',
        ],
      },
      {
        subhead: '2. Leer la colonoscopía: la regla que resuelve la pregunta',
        paragraphs: [
          '<strong>Colitis ulcerosa:</strong> compromete solo el colon, siempre desde el recto (rectitis en el 100 %) y en forma continua, sin mucosa sana intercalada; inflamación limitada a la mucosa; endoscopía con mucosa eritematosa, granular, friable y pseudopólipos; clínica de pujo y tenesmo.',
          '<strong>Enfermedad de Crohn:</strong> puede afectar de la boca al ano (típicamente íleon distal y unión ileocecal), en parches ("skip lesions"), puede respetar el recto, inflamación transmural; endoscopía con úlceras aftosas y aspecto en empedrado con mucosa normal entre las lesiones. <strong>Regla de oro EUNACOM:</strong> basta UNA característica de Crohn —compromiso del íleon o del tubo alto, lesiones en parches, respeto del recto, afectación transmural, fístula, masa/plastrón, úlceras orales o enfermedad perianal— para llamarla Crohn. Si es puramente colónica, continua y desde el recto, es colitis ulcerosa.',
        ],
      },
      {
        subhead: '3. Manifestaciones extraintestinales y complicaciones',
        paragraphs: [
          'Al ser autoinmunes, ambas dan síntomas fuera del intestino: artritis periférica (la más frecuente) y espondilitis anquilosante, uveítis anterior, eritema nodoso (el más frecuente en piel) y pioderma gangrenoso, y <strong>colangitis esclerosante primaria</strong> (fuertemente asociada a la CU). En un caso EUNACOM, la tríada diarrea disentérica + artralgias migratorias + aftas/nódulos en las piernas es casi patognomónica de EII.',
          'Complicaciones según la profundidad de la inflamación: la EC transmural produce fístulas, abscesos perianales, obstrucción intestinal por estenosis cicatricial y síndrome de malabsorción si toma el delgado; la CU mucosa produce <strong>megacolon tóxico</strong> (dilatación &gt; 6 cm con sepsis, urgencia vital) y, tras 8–10 años de enfermedad, un riesgo aumentado de cáncer colorrectal —sobre todo rectal— que obliga a colonoscopías de vigilancia periódicas. Por eso, un paciente con CU y sangrado nuevo se estudia con colonoscopía, no con rectosigmoidoscopía.',
        ],
      },
      {
        subhead: '4. Tratamiento médico y la diferencia clave en cirugía',
        paragraphs: [
          'Farmacológico (similar en ambas, escalonado para inducir y mantener remisión): 5-ASA (mesalazina/sulfasalazina, pilar en la CU leve-moderada, tópico + oral según extensión), corticoides para el brote agudo (budesonida, prednisona; nunca de mantención), inmunomoduladores (azatioprina, metotrexato), biológicos anti-TNF (infliximab, adalimumab) y otras dianas (vedolizumab, ustekinumab), más antibióticos en complicaciones sépticas.',
          'La cirugía es el último escalón y su lógica es opuesta: en la colitis ulcerosa la colectomía es <strong>CURATIVA</strong> porque la enfermedad se limita al colon (colectomía subtotal con muñón rectal, o proctocolectomía total con reservorio ileoanal si hay displasia o cáncer de recto); en el Crohn la cirugía <strong>NUNCA cura</strong> —solo se reseca de forma económica el segmento complicado (estenosis, fístula, absceso) o se hace estenoplastía— porque la enfermedad puede reaparecer en cualquier tramo del tubo digestivo.',
        ],
      },
    ],
    table: {
      title: 'Colitis ulcerosa vs enfermedad de Crohn',
      headers: ['Rasgo', 'Colitis ulcerosa', 'Enfermedad de Crohn'],
      rows: [
        ['Localización', 'Solo colon, desde el recto', 'Boca a ano (típico íleon distal)'],
        ['Distribución', 'Continua', 'En parches (skip lesions)'],
        ['Profundidad', 'Mucosa', 'Transmural'],
        ['Anticuerpos', 'p-ANCA', 'ASCA'],
        ['Complicaciones', 'Megacolon tóxico, cáncer colorrectal', 'Fístulas, abscesos, obstrucción'],
        ['Cirugía', 'Colectomía = curativa', 'Resección segmentaria; nunca curativa'],
      ],
    },
    vignette: 'Hombre de 25 años consulta por 3 meses de diarrea con sangre y mucosidad, dolor abdominal, fiebre vespertina y baja de 5 kg de peso. Al examen se palpa una masa dolorosa mal definida en la fosa ilíaca derecha. Tiene además una úlcera aftosa en la mucosa oral.',
    explicacion: 'Joven con diarrea disentérica crónica, síntomas sistémicos y, sobre todo, una masa en la fosa ilíaca derecha (plastrón inflamatorio del íleon) más úlceras orales: son características propias de la enfermedad de Crohn. Basta una de ellas para hacer el diagnóstico; la masa abdominal y el compromiso ileal no ocurren en la colitis ulcerosa, que es continua, solo colónica y limitada a la mucosa. La conducta es colonoscopía (con ileoscopía) y biopsias.',
    keyPoints: [
      'Joven con diarrea disentérica crónica + fiebre + baja de peso → colonoscopía con biopsias.',
      'Colitis ulcerosa: solo colon, desde el recto, continua, mucosa, p-ANCA. Crohn: boca-ano, en parches, transmural, ASCA.',
      'Basta UNA característica de Crohn (íleon, fístula, parches, masa, perianal) para diagnosticarlo.',
      'Colitis ulcerosa: riesgo de megacolon tóxico y de cáncer colorrectal tras 8–10 años (vigilancia colonoscópica).',
      'Cirugía: colectomía cura la colitis ulcerosa; en Crohn solo se reseca el segmento complicado y nunca cura.',
    ],
    questions: [
      {
        stem: 'Hombre de 25 años con 1 mes de diarrea, dolor abdominal y malestar general; ha tenido disentería en algunas ocasiones y bajó 4 kg. La colonoscopía muestra signos de inflamación en el colon, con zonas de mucosa indemne y sin afectación del recto. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Colitis ulcerosa' },
          { id: 'B', text: 'Enfermedad de Crohn' },
          { id: 'C', text: 'Colitis isquémica' },
          { id: 'D', text: 'Parasitosis intestinal' },
          { id: 'E', text: 'Colitis por Clostridioides difficile' },
        ],
        correcta: 'B',
        explicacion: 'La colonoscopía define el caso: inflamación en parches (zonas de mucosa indemne) y respeto del recto. Cualquiera de esas dos características, por sí sola, descarta la colitis ulcerosa —que es continua y siempre rectal— y establece el diagnóstico de enfermedad de Crohn.',
        recTag: 'EUNACOM Diciembre 2017 · Pregunta 26',
      },
      {
        stem: 'Paciente de 45 años con antecedente de colitis ulcerosa diagnosticada a los 20 años, inactiva hace 10 años. Desde hace una semana presenta deposiciones blandas con escasa sangre. El examen físico no aporta información. ¿Cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Solicitar rectosigmoidoscopía' },
          { id: 'B', text: 'Solicitar TAC de abdomen y pelvis' },
          { id: 'C', text: 'Solicitar parasitológico de deposiciones' },
          { id: 'D', text: 'Solicitar colonoscopía' },
          { id: 'E', text: 'Iniciar corticoides orales' },
        ],
        correcta: 'D',
        explicacion: 'La colitis ulcerosa de larga data multiplica el riesgo de cáncer colorrectal, sobre todo rectal, y todo sangrado digestivo bajo nuevo en un adulto exige colonoscopía completa: la rectosigmoidoscopía no explora el colon proximal y dejaría lesiones sin ver. No se asume un brote ni se inician corticoides antes de descartar neoplasia.',
        recTag: 'EUNACOM Agosto 2021 · Pregunta 21',
      },
      {
        stem: 'Mujer de 35 años con diarrea crónica mucosanguinolenta de 6 meses, urgencia defecatoria, pujo y tenesmo. Colonoscopía: mucosa eritematosa, granular, con pseudopólipos, desde el recto en forma continua hasta el ángulo esplénico, sin mucosa sana intercalada. ¿Cuál es el diagnóstico?',
        options: [
          { id: 'A', text: 'Colitis isquémica' },
          { id: 'B', text: 'Colitis ulcerosa' },
          { id: 'C', text: 'Síndrome de intestino irritable' },
          { id: 'D', text: 'Colitis infecciosa' },
          { id: 'E', text: 'Enfermedad de Crohn' },
        ],
        correcta: 'B',
        explicacion: 'Compromiso mucoso continuo desde el recto hacia proximal, sin mucosa sana intercalada, con pseudopólipos y clínica de pujo y tenesmo: es una colitis ulcerosa. La ausencia de parches, de compromiso ileal y de lesiones perianales descarta el Crohn. Tratamiento según extensión: 5-ASA tópico y oral.',
        recTag: 'EUNACOM Julio 2025 · Pregunta 164',
      },
    ],
  },

  {
    id: 'gastro-11', classId: 'gastro-11', tier: 2,
    blockNum: 2, blockName: 'Intestino y Colon',
    topicLabel: '2.5', title: 'Pólipos y Cáncer Colorrectal · Tamizaje',
    perfilCode: '1.06.1.029', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'GES: tamizaje de cáncer de colon (sangre oculta inmunoquímico) desde los 50 años',
    reconstrucciones: null,
    frecuencia: 'Alta rentabilidad · escenario clásico (adulto mayor + constipación + anemia) y tamizaje poblacional',
    svg: null, algoTitle: 'Del pólipo adenomatoso al cáncer colorrectal',
    contexto: 'Casi todos los cánceres de colon nacen de un pólipo adenomatoso que tarda años en malignizarse: por eso resecar adenomas en la colonoscopía y vigilar previene el cáncer. Dos escenarios se preguntan una y otra vez: el adulto mayor con constipación reciente y anemia ferropénica (cáncer de colon hasta que la colonoscopía diga lo contrario) y el hallazgo de "innumerables pólipos" (poliposis adenomatosa familiar → colectomía profiláctica, porque el 100 % maligniza).',
    contentSections: [
      {
        subhead: '1. Pólipos de colon',
        paragraphs: [
          '<strong>Hiperplásico:</strong> no es premaligno; se observa. <strong>Adenomatoso</strong> (tubular, tubulovelloso, velloso el de mayor riesgo): es la lesión precursora del cáncer → polipectomía endoscópica + colonoscopía de control en 1–3 años según número, tamaño e histología.',
          'La secuencia adenoma-carcinoma tarda ~10 años, lo que da la ventana para el tamizaje.',
        ],
      },
      {
        subhead: '2. Cáncer colorrectal — clínica',
        paragraphs: [
          '<strong>Colon derecho:</strong> anemia ferropénica y masa palpable (sangrado oculto). <strong>Colon izquierdo:</strong> cambio del hábito, constipación progresiva, rectorragia; la obstrucción intestinal es su complicación más frecuente (primera causa de obstrucción del colon en el adulto).',
          '<strong>Recto:</strong> hematoquecia, disquecia, tenesmo, deformación del bolo fecal. Factores de riesgo del cáncer de recto: colitis ulcerosa, VIH y VPH.',
        ],
      },
      {
        subhead: '3. Diagnóstico, etapificación y síndromes hereditarios',
        paragraphs: [
          'Diagnóstico: colonoscopía total con biopsia. Etapificación: TAC de tórax-abdomen-pelvis; en el recto se agregan RM de pelvis y endosonografía, y el TAC de tórax es obligatorio (puede dar metástasis pulmonares sin pasar por el hígado). El <strong>CEA solo sirve para el seguimiento posoperatorio</strong>, no para el diagnóstico.',
          '<strong>Poliposis adenomatosa familiar (PAF):</strong> cientos de pólipos, 100 % maligniza → colectomía total profiláctica. <strong>Síndrome de Lynch (HNPCC):</strong> pocos pólipos, alto riesgo → vigilancia colonoscópica intensiva.',
        ],
      },
      {
        subhead: '4. Tratamiento y tamizaje',
        paragraphs: [
          'Tratamiento: cirugía (hemicolectomía derecha o izquierda según la localización) siempre, incluso en enfermedad avanzada, para evitar la obstrucción. La quimioterapia del cáncer de colon es especialmente eficaz (puede lograr curación con metástasis hepáticas resecables). El cáncer de recto agrega radioterapia (complicación: rectitis actínica).',
          '<strong>Tamizaje poblacional</strong> (personas asintomáticas de riesgo promedio, desde los 50 años): test de sangre oculta inmunoquímico anual/bienal y, si es positivo, colonoscopía; o colonoscopía cada 10 años. No se usa el test de sangre oculta para estudiar a un paciente sintomático: a ese se le hace colonoscopía directamente.',
        ],
      },
    ],
    table: {
      title: 'Pólipos y síndromes hereditarios de cáncer de colon',
      headers: ['Hallazgo', 'Riesgo', 'Conducta'],
      rows: [
        ['Pólipo hiperplásico', 'Nulo', 'Observar'],
        ['Pólipo adenomatoso (tubular/velloso)', 'Premaligno', 'Polipectomía + colonoscopía de control 1–3 años'],
        ['Poliposis adenomatosa familiar (PAF)', '100 % evoluciona a cáncer', 'Colectomía total profiláctica'],
        ['Síndrome de Lynch (HNPCC)', 'Alto, pocos pólipos', 'Vigilancia colonoscópica intensiva'],
        ['Paciente sintomático con signos de alarma', 'A descartar cáncer', 'Colonoscopía (no test de sangre oculta)'],
      ],
    },
    vignette: 'Mujer de 74 años consulta por 4 meses de constipación progresiva que antes no tenía, con deposiciones más delgadas y episodios de rectorragia escasa. El hemograma muestra una anemia microcítica hipocroma con ferritina baja.',
    explicacion: 'Cambio reciente del hábito intestinal hacia la constipación en una adulta mayor, con deposiciones acintadas, rectorragia y anemia ferropénica: es un cáncer colorrectal (probablemente izquierdo) hasta que se demuestre lo contrario. La conducta es la colonoscopía total con biopsia, no el test de sangre oculta (que es una herramienta de tamizaje en asintomáticos). Luego se etapifica con TAC de tórax-abdomen-pelvis.',
    keyPoints: [
      'La mayoría de los cánceres de colon nacen de un adenoma; resecar adenomas en la colonoscopía previene el cáncer.',
      'Constipación reciente + anemia ferropénica en el adulto mayor = cáncer de colon → colonoscopía.',
      'Innumerables pólipos = poliposis adenomatosa familiar → colectomía total profiláctica (100 % maligniza).',
      'El CEA solo sirve para el seguimiento posoperatorio, no para el diagnóstico ni el pronóstico.',
      'El test de sangre oculta es tamizaje de asintomáticos; al paciente con signos de alarma se le hace colonoscopía.',
    ],
    questions: [
      {
        stem: 'En una colonoscopía realizada a un hombre de 28 años con antecedentes familiares de cáncer de colon se describen más de 150 pólipos distribuidos por todo el colon y el recto. Varias biopsias muestran adenomas tubulares con displasia de bajo grado. ¿Cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Polipectomía endoscópica de los pólipos mayores y control anual' },
          { id: 'B', text: 'Colectomía total (proctocolectomía) profiláctica' },
          { id: 'C', text: 'Quimioprevención con AINE y seguimiento' },
          { id: 'D', text: 'Control con CEA seriado cada 6 meses' },
          { id: 'E', text: 'Colonoscopía de control en 3 años' },
        ],
        correcta: 'B',
        explicacion: 'Cientos de pólipos adenomatosos en un paciente joven con historia familiar corresponden a una poliposis adenomatosa familiar, que evoluciona a cáncer colorrectal en prácticamente el 100 % de los casos si no se interviene. La conducta es la colectomía total (proctocolectomía) profiláctica. La polipectomía endoscópica es inviable por el número de lesiones y no elimina el riesgo.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Hombre de 55 años, asintomático, sin antecedentes familiares, consulta para "chequeo". ¿Cuál es la estrategia de tamizaje de cáncer colorrectal más apropiada?',
        options: [
          { id: 'A', text: 'No corresponde tamizaje por ser asintomático' },
          { id: 'B', text: 'Test de sangre oculta inmunoquímico y, si es positivo, colonoscopía; o colonoscopía cada 10 años' },
          { id: 'C', text: 'CEA anual' },
          { id: 'D', text: 'TAC de abdomen y pelvis cada 5 años' },
          { id: 'E', text: 'Colonoscopía solo si aparecen síntomas' },
        ],
        correcta: 'B',
        explicacion: 'En personas de riesgo promedio se recomienda tamizaje desde los 50 años con test de sangre oculta inmunoquímico (anual o bienal), derivando a colonoscopía a los positivos, o bien colonoscopía cada 10 años. El CEA y el TAC no son herramientas de tamizaje. Esperar a que aparezcan síntomas anula el objetivo del cribado, que es detectar adenomas y cánceres tempranos.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-12', classId: 'gastro-12', tier: 1,
    blockNum: 2, blockName: 'Intestino y Colon',
    topicLabel: '2.6', title: 'Patología Perianal: Fisura, Hemorroides, Absceso y Fístula',
    perfilCode: null, dx: null, tx: null, seg: null,
    ges: 'Sin garantía GES',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Rentabilidad media · distinguir manejo médico de quirúrgico por el patrón de dolor',
    svg: null, algoTitle: 'Dolor y sangrado anal: médico vs pabellón',
    contexto: 'Casi todo se ordena con dos ejes. Primero: ¿duele o no duele? El sangrado sin dolor es el hemorroide interno; el dolor con la defecación es la fisura; el dolor que crece día a día con una masa fluctuante es el absceso. Segundo: ¿médico o quirúrgico? La fisura y el hemorroide externo trombosado se manejan con baños de asiento y tratar la constipación; el absceso perianal se drena en pabellón sí o sí (los antibióticos solos no sirven).',
    contentSections: [
      {
        subhead: '1. Fisura anal',
        paragraphs: [
          'Desgarro del anodermo por un bolo fecal duro. Dolor intenso que comienza con la defecación y persiste minutos por espasmo del esfínter interno, con rectorragia escasa al papel. Diagnóstico: inspección.',
          'Tratamiento: baños de asiento (relajan el esfínter interno y alivian el dolor) + tratar la constipación (fibra, agua, laxantes osmóticos). Si es crónica (&gt; 6 semanas) y no responde: <strong>esfinterotomía lateral interna</strong> — se secciona siempre el esfínter interno (el externo, voluntario, no se toca: su sección produce incontinencia).',
        ],
      },
      {
        subhead: '2. Hemorroides',
        paragraphs: [
          '<strong>Hemorroide interno:</strong> hematoquecia sin dolor. Grado I (no protruye) a IV (irreductible). Es causa frecuente de hemorragia digestiva baja, pero siempre hay que descartar otras causas (cáncer, diverticulosis) con rectoscopía/colonoscopía. Tratamiento: ligadura con banda elástica (electiva) + tratar la constipación; cirugía (hemorroidectomía) en grados avanzados.',
          '<strong>Hemorroide externo trombosado:</strong> dolor anal agudo con nódulo violáceo visible. Baños de asiento siempre; trombectomía si consulta dentro de las 48–72 h (después ya no aporta). Fluxión hemorroidal: hemorroides internos prolapsados y trombosados afuera, extremadamente dolorosos → cirugía (urgente o electiva precoz).',
        ],
      },
      {
        subhead: '3. Absceso perianal y fístula',
        paragraphs: [
          '<strong>Absceso perianal:</strong> dolor anal que aumenta progresivamente (no súbito) + masa eritematosa fluctuante. Tratamiento: <strong>drenaje quirúrgico en pabellón</strong> — los antibióticos solos no reemplazan el drenaje.',
          '<strong>Fístula anal:</strong> secuela de un absceso que drena a la piel por un orificio que supura de forma crónica. Diagnóstico clínico. Tratamiento quirúrgico (fistulotomía / sedal). Absceso pelvirrectal (isquioanal): absceso + sepsis + síntomas urinarios → RM de pelvis + drenaje en pabellón + antibióticos endovenosos (aquí sí).',
        ],
      },
      {
        subhead: '4. No confundir: fisura ≠ fístula',
        paragraphs: [
          'Fisura: herida lineal dolorosa del margen anal, causada por constipación, de manejo médico (baños de asiento).',
          'Fístula: trayecto que comunica el canal anal con la piel, secuela de un absceso, de manejo quirúrgico. Se escriben parecido y se manejan al revés.',
        ],
      },
    ],
    table: {
      title: 'Patología perianal — clínica y conducta',
      headers: ['Cuadro', 'Clave clínica', 'Conducta'],
      rows: [
        ['Fisura anal', 'Dolor con la defecación + rectorragia al papel', 'Baños de asiento + tratar constipación'],
        ['Hemorroide interno', 'Hematoquecia sin dolor', 'Ligadura elástica electiva; descartar otras causas'],
        ['Hemorroide externo trombosado', 'Dolor agudo + nódulo violáceo', 'Baños de asiento; trombectomía si < 72 h'],
        ['Absceso perianal', 'Dolor creciente + masa fluctuante', 'Drenaje en pabellón (no ATB solos)'],
        ['Fístula anal', 'Orificio cutáneo que supura crónicamente', 'Cirugía (fistulotomía)'],
        ['Absceso pelvirrectal', 'Absceso + sepsis + síntomas urinarios', 'RM de pelvis + drenaje + ATB endovenosos'],
      ],
    },
    vignette: 'Hombre de 38 años consulta por dolor anal que ha ido aumentando durante 4 días, ahora intenso e invalidante, con fiebre de 38 °C. Al examen se palpa una tumoración perianal eritematosa, caliente y fluctuante a las 5 del reloj, sin nódulo violáceo.',
    explicacion: 'Dolor anal de curso progresivo (no súbito) con una masa eritematosa y fluctuante y fiebre: es un absceso perianal. El tratamiento es el drenaje quirúrgico en pabellón; los antibióticos por sí solos no resuelven la colección. La fluctuación y la ausencia de nódulo violáceo lo diferencian del hemorroide externo trombosado (dolor de inicio brusco, nódulo violáceo, sin fiebre).',
    keyPoints: [
      'Fisura ≠ fístula: la fisura es una herida dolorosa de manejo médico; la fístula es un trayecto de manejo quirúrgico.',
      'Hemorroide interno = sangrado sin dolor; siempre descartar otras causas de hemorragia digestiva baja.',
      'Hemorroide externo trombosado: baños de asiento; trombectomía útil solo dentro de las primeras 48–72 h.',
      'Absceso perianal: drenaje quirúrgico en pabellón. Los antibióticos solos no bastan.',
      'En la esfinterotomía de la fisura crónica se secciona el esfínter interno; nunca el externo (incontinencia).',
    ],
    questions: [
      {
        stem: 'Mujer de 34 años consulta por dolor anal intenso que aparece cada vez que defeca y dura media hora después, junto con manchas de sangre roja en el papel. Lleva semanas con deposiciones duras. Al separar los glúteos se observa una solución de continuidad lineal en la línea media posterior del margen anal. ¿Cuál es el tratamiento inicial?',
        options: [
          { id: 'A', text: 'Esfinterotomía lateral interna de urgencia' },
          { id: 'B', text: 'Baños de asiento y manejo de la constipación (fibra, agua, laxante osmótico)' },
          { id: 'C', text: 'Hemorroidectomía' },
          { id: 'D', text: 'Drenaje quirúrgico en pabellón' },
          { id: 'E', text: 'Antibióticos orales de amplio espectro' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro es una fisura anal (dolor con la defecación que persiste por espasmo del esfínter interno, rectorragia escasa, fisura visible, contexto de constipación). El tratamiento inicial es médico: baños de asiento para relajar el esfínter interno y corregir la constipación. La esfinterotomía lateral interna solo se plantea en la fisura crónica que no responde al tratamiento médico.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Hombre de 45 años consulta porque desde hace 3 meses tiene un pequeño orificio en la piel de la región glútea, cercano al ano, que supura material purulento de forma intermitente. Tuvo un absceso perianal drenado hace 4 meses. ¿Cuál es el diagnóstico y el tratamiento?',
        options: [
          { id: 'A', text: 'Fisura anal crónica; baños de asiento' },
          { id: 'B', text: 'Fístula anal; tratamiento quirúrgico' },
          { id: 'C', text: 'Hidradenitis supurativa; antibióticos prolongados' },
          { id: 'D', text: 'Hemorroide interno grado IV; ligadura elástica' },
          { id: 'E', text: 'Quiste pilonidal; observación' },
        ],
        correcta: 'B',
        explicacion: 'Un orificio cutáneo perianal que supura de forma crónica tras un absceso drenado es una fístula anal (trayecto que comunica el canal anal con la piel). El tratamiento es quirúrgico (fistulotomía o colocación de sedal). Es el error clásico confundirla con la fisura: se escriben parecido, pero la fisura es una herida dolorosa de manejo médico y la fístula es un trayecto de manejo quirúrgico.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  /* ═══════════════════════ BLOQUE 03 · HÍGADO ═══════════════════════ */
  {
    id: 'gastro-13', classId: 'gastro-13', tier: 2,
    blockNum: 3, blockName: 'Hígado',
    topicLabel: '3.1', title: 'Ictericia y Colestasia: Enfrentamiento Diagnóstico',
    perfilCode: '1.06.1.007', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · la ictericia obstructiva del adulto mayor se estudia y deriva según hallazgo',
    reconstrucciones: null,
    frecuencia: 'Alta rentabilidad · algoritmo bioquímico en 2 pasos que resuelve casi cualquier pregunta de ictericia',
    svg: null, algoTitle: 'Ictericia: cómo se clasifica en dos pasos',
    contexto: 'La ictericia se ordena con dos preguntas y en ese orden. Primero: ¿la bilirrubina que sube es la indirecta o la directa? Si es indirecta con todo lo demás normal, es Gilbert y se observa. Si es directa, la segunda pregunta separa hepatitis (suben las transaminasas) de colestasia (suben las fosfatasas alcalinas y la GGT). Y dentro de la colestasia, el dolor y la fiebre lo dicen todo: sin dolor en un adulto mayor = cáncer.',
    contentSections: [
      {
        subhead: '1. Conceptos y primer paso: tipo de bilirrubina',
        paragraphs: [
          'Bilirrubina total normal &lt; 1,1 mg/dL; la ictericia se hace visible sobre 2,5–3 mg/dL (primero en las escleras). La carotenemia tiñe palmas y plantas pero no las escleras y es benigna.',
          '<strong>Hiperbilirrubinemia indirecta</strong> (no conjugada): síndrome de Gilbert (resto de las pruebas hepáticas normales, benigno, 5–10 % de la población → observar) y hemólisis (LDH alta, esquistocitos, anemia → tratar la causa). <strong>Hiperbilirrubinemia directa</strong> (directa &gt; 30 % del total): siempre patológica.',
        ],
      },
      {
        subhead: '2. Segundo paso: hepatitis vs colestasia',
        paragraphs: [
          'Dentro de la hiperbilirrubinemia directa, las transaminasas (AST/ALT) elevadas indican <strong>hepatitis</strong> (lesión del hepatocito); las fosfatasas alcalinas y la GGT elevadas indican <strong>colestasia</strong> (obstrucción del flujo biliar). La GGT alta confirma que la fosfatasa alcalina alta es de origen hepatobiliar y no óseo.',
        ],
      },
      {
        subhead: '3. Clasificación de la colestasia',
        paragraphs: [
          'Colestasia crónica autoinmune: cirrosis biliar primaria (AMA, prurito, mujer) y colangitis esclerosante primaria (ANCA, colitis ulcerosa) — ver clase de hepatitis crónica.',
          'Colestasia aguda con dolor: coledocolitiasis (dolor + ictericia) y colangitis (tríada de Charcot: dolor + ictericia + fiebre). <strong>Colestasia sin dolor (silente) en el adulto mayor: cáncer</strong> — de páncreas (el más frecuente), de la ampolla de Vater, colangiocarcinoma o de vesícula.',
        ],
      },
      {
        subhead: '4. Ictericia maligna: clínica y estudio',
        paragraphs: [
          'Cáncer de páncreas — las <strong>"3 D"</strong>: Diabetes de reciente inicio, Depresión inexplicada, Dolor sordo, más baja de peso e ictericia progresiva indolora. <strong>Signo de Courvoisier-Terrier:</strong> vesícula palpable e indolora con ictericia.',
          'Estudio: ecografía abdominal siempre primero (¿vía biliar dilatada?, ¿colédoco?, ¿masa?). Luego colangiorresonancia como examen de elección de la vía biliar; si la ecografía muestra o sugiere una masa pancreática, el examen es el TAC de abdomen con contraste (mejor para el páncreas).',
        ],
      },
    ],
    table: {
      title: 'Ictericia — patrón bioquímico y orientación',
      headers: ['Patrón', 'Contexto', 'Diagnóstico / conducta'],
      rows: [
        ['Bilirrubina indirecta aislada, resto normal', 'Joven asintomático', 'Síndrome de Gilbert → observar'],
        ['Bilirrubina indirecta + anemia + LDH alta', 'Esquistocitos', 'Hemólisis → tratar la causa'],
        ['↑ AST/ALT (transaminasas)', 'Con o sin ictericia', 'Hepatitis'],
        ['↑ FA/GGT + dolor', 'Cólico biliar', 'Coledocolitiasis → eco → colangio-RM → CPRE'],
        ['↑ FA/GGT + dolor + fiebre', 'Tríada de Charcot', 'Colangitis → CPRE urgente + antibióticos'],
        ['↑ FA/GGT sin dolor', 'Adulto mayor, baja de peso', 'Cáncer → eco → colangio-RM (o TAC si páncreas)'],
      ],
    },
    vignette: 'Hombre de 70 años consulta por ictericia que ha ido en aumento durante 6 semanas, prurito, coluria y baja de 8 kg de peso. No tiene dolor abdominal ni fiebre. Le diagnosticaron diabetes hace 2 meses. Al examen: ictericia marcada y una vesícula palpable, no dolorosa, en el hipocondrio derecho.',
    explicacion: 'Ictericia progresiva e indolora en un adulto mayor, con baja de peso, diabetes de reciente inicio y signo de Courvoisier-Terrier (vesícula palpable indolora): es una ictericia obstructiva maligna, y la primera causa a considerar es el cáncer de cabeza de páncreas ("las 3 D"). El estudio comienza con ecografía abdominal y, ante la sospecha de masa pancreática, el examen de elección es el TAC de abdomen con contraste.',
    keyPoints: [
      'Paso 1: ¿bilirrubina indirecta (Gilbert, hemólisis) o directa? Paso 2 en la directa: transaminasas (hepatitis) vs FA/GGT (colestasia).',
      'Síndrome de Gilbert: hiperbilirrubinemia indirecta con el resto de las pruebas hepáticas normales → observar.',
      'Colestasia con dolor = patología biliar; con dolor y fiebre = colangitis; sin dolor en el adulto mayor = cáncer.',
      'Cáncer de páncreas: 3 D (diabetes, depresión, dolor) + baja de peso + ictericia silente + Courvoisier-Terrier.',
      'La ecografía abdominal es siempre el primer examen de toda ictericia; el TAC se reserva para la sospecha de cáncer de páncreas.',
    ],
    questions: [
      {
        stem: 'Estudiante de 22 años, asintomático, consulta porque en un examen preventivo le encontraron una bilirrubina total de 2,6 mg/dL, a expensas de la indirecta. Las transaminasas, fosfatasas alcalinas, GGT, hemograma y LDH son normales. ¿Cuál es el diagnóstico más probable y la conducta?',
        options: [
          { id: 'A', text: 'Hepatitis viral aguda; solicitar serología viral y control seriado' },
          { id: 'B', text: 'Anemia hemolítica; frotis y test de Coombs' },
          { id: 'C', text: 'Síndrome de Gilbert; tranquilizar y no requiere tratamiento' },
          { id: 'D', text: 'Coledocolitiasis; ecografía abdominal urgente' },
          { id: 'E', text: 'Cirrosis biliar primaria; anticuerpos antimitocondriales' },
        ],
        correcta: 'C',
        explicacion: 'Hiperbilirrubinemia indirecta aislada, con el resto de las pruebas hepáticas y el hemograma normales, en un joven asintomático: es un síndrome de Gilbert, un trastorno hereditario benigno de la conjugación de la bilirrubina que afecta al 5–10 % de la población y suele hacerse evidente con el ayuno o las infecciones. No requiere estudio adicional ni tratamiento.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Mujer de 55 años con dolor cólico en el hipocondrio derecho e ictericia de 2 días, sin fiebre. Laboratorio: bilirrubina 4 mg/dL de predominio directo, fosfatasas alcalinas y GGT elevadas, transaminasas levemente altas. La ecografía muestra colelitiasis y una vía biliar de 9 mm, sin visualizar cálculos en el colédoco. ¿Cuál es el siguiente examen?',
        options: [
          { id: 'A', text: 'CPRE directa' },
          { id: 'B', text: 'Colangiorresonancia' },
          { id: 'C', text: 'TAC de abdomen con contraste' },
          { id: 'D', text: 'Biopsia hepática percutánea' },
          { id: 'E', text: 'Repetir la ecografía en 48 horas' },
        ],
        correcta: 'B',
        explicacion: 'El patrón es colestásico con dolor y sin fiebre: coledocolitiasis. La ecografía muestra la vía biliar dilatada pero no ve el cálculo, así que el siguiente paso es la colangiorresonancia para confirmarlo antes de someter a la paciente a una CPRE (que es invasiva y tiene riesgo de pancreatitis). Se va directo a CPRE solo si hay colangitis o si la ecografía ya vio el cálculo en el colédoco.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  /* ───────────────────────── 🔴 DENSE-EMERGENCY ───────────────────────── */
  {
    id: 'gastro-14', classId: 'gastro-14', tier: 3,
    blockNum: 3, blockName: 'Hígado',
    topicLabel: '3.2', title: 'Hepatitis Aguda y Crónica',
    perfilCode: '1.06.1.019', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'GES: Hepatitis crónica por virus B y C (estudio y antivirales garantizados)',
    reconstrucciones: 'EUNACOM Julio 2015 (Q#122) · EUNACOM Julio 2024 (Q#26) · EUNACOM Diciembre 2019 (Q#83)',
    frecuencia: 'Alta rentabilidad · la tabla de serología de hepatitis B se pregunta de memoria en casi todos los exámenes',
    svg: null, algoTitle: 'Hepatitis: aguda vs crónica y serología B',
    contexto: 'Toda la clase gira en torno a un contraste: la hepatitis aguda mata rápido (por fulminante: ictericia + encefalopatía) y se vigila con el tiempo de protrombina; la hepatitis crónica mata lento (por cirrosis) y se evalúa con biopsia. Y hay una tabla de serología de la hepatitis B que se pregunta literal: el antígeno de superficie dice "hay virus", la IgM anti-core dice "es agudo", y si solo está la IgM sin antígeno, es el período de ventana.',
    contentSections: [
      {
        subhead: '1. Aguda vs crónica: el eje que ordena toda la clase',
        paragraphs: [
          'Hepatitis es la elevación de transaminasas (AST/GOT y ALT/GPT) por inflamación del hepatocito; el manejo universal es identificar la causa, tratarla y dar soporte. La división aguda (&lt; 6 meses) vs crónica (&gt; 6 meses) no es académica: define el riesgo que se vigila y el examen que se pide.',
          'La hepatitis aguda —VHA, VHB, VHE, herpesvirus (VEB, CMV, VHS), alcohol, fármacos y tóxicos (Amanita phalloides)— mata por <strong>hepatitis fulminante</strong>: encefalopatía (desorientación, asterixis, sopor) que aparece dentro de las 8 semanas de iniciada la ictericia en un hígado previamente sano. El marcador pronóstico y el criterio de derivación a trasplante es el <strong>tiempo de protrombina / INR</strong>, no la bilirrubina ni el nivel de transaminasas.',
          'La hepatitis crónica —NASH, VHB, VHC, hepatitis autoinmune— mata por cirrosis; se estadifica con elastografía hepática (FibroScan) o biopsia, que separan el grado de inflamación (velocidad de progresión) del estadio de fibrosis (daño ya establecido).',
        ],
      },
      {
        subhead: '2. Hepatitis A y E: la aguda que se resuelve sola',
        paragraphs: [
          'VHA: transmisión fecal-oral (agua y alimentos contaminados, contactos en jardines infantiles, práctica sexual oro-anal); en Chile es endémica, con brotes, y es enfermedad de notificación obligatoria inmediata a la SEREMI de Salud. Clínica: pródromo de fiebre y malestar → ictericia, coluria y acolia; en niños suele ser anictérica. Diagnóstico: <strong>IgM anti-VHA</strong> (primer examen ante toda hepatitis aguda); la IgG aislada indica infección pasada o vacunación.',
          'Formas atípicas: colestásica (predominan FA y GGT), recurrente (recae a las 4–8 semanas por mecanismo inmune) y fulminante (~0,1 %). Contactos: extradomiciliarios → vacuna; convivientes → inmunoglobulina más vacuna. Desde 2018 la vacuna anti-VHA está en el PNI chileno a los 18 meses. La VHE se comporta como la VHA salvo en la embarazada, en quien la falla hepática aguda tiene letalidad de hasta 20 %.',
        ],
      },
      {
        subhead: '3. Hepatitis B: la serología que se pregunta de memoria',
        paragraphs: [
          'VHB: transmisión sexual (principal en el adulto), parenteral (~30 % de contagio en accidente cortopunzante con fuente AgHBs+) y vertical. En el adulto inmunocompetente el 90 % cura y solo el 10 % cronifica —a la inversa del recién nacido, que cronifica &gt; 90 %—. Riesgo de fulminante ~1 % (diez veces el de la VHA).',
          '<strong>Serología EUNACOM:</strong> AgHBs (+) = "hay virus" (infección activa) e IgM anti-HBc (+) = "es aguda". Combinaciones: AgHBs (+) + IgM anti-HBc (+) → hepatitis B aguda; AgHBs (+) + IgM anti-HBc (−) → hepatitis B crónica; AgHBs (−) + IgM anti-HBc (+) → período de ventana. Anti-HBs aislado (sin anti-HBc) = inmune por vacuna; anti-HBs + anti-HBc IgG = infección resuelta. La vacuna genera solo anti-HBs: si hay cualquier anticuerpo anti-HBc, el paciente estuvo infectado, no vacunado.',
          'Brote agudo: soporte + TP. La hepatitis crónica B y C tiene garantía GES: derivar para carga viral, HBeAg, elastografía y antivirales (tenofovir o entecavir). Contactos: vacuna; exposición reciente → inmunoglobulina anti-HB + vacuna; RN de madre AgHBs (+) → vacuna + inmunoglobulina en las primeras 12 h, sin contraindicar la lactancia.',
        ],
      },
      {
        subhead: '4. Hepatitis C: casi siempre crónica, hoy curable',
        paragraphs: [
          'VHC: transmisión parenteral (drogas endovenosas, transfusiones previas a 1996, tatuajes y pírsines sin control); rara vez produce un cuadro agudo reconocible y el 80–90 % cronifica. Diagnóstico en dos pasos: anticuerpos anti-VHC como tamizaje → confirmación con <strong>ARN-VHC por PCR</strong>, porque un anticuerpo positivo con PCR negativa corresponde a infección pasada resuelta.',
          'Tratamiento: <strong>antivirales de acción directa (AAD)</strong> por 8–12 semanas, con &gt; 95 % de respuesta viral sostenida (curación); el interferón quedó obsoleto. En Chile el tratamiento está garantizado, con meta sanitaria de eliminación. Si ya hay cirrosis, la vigilancia semestral de hepatocarcinoma con ecografía se mantiene aunque el virus se haya erradicado.',
        ],
      },
      {
        subhead: '5. Hepatitis alcohólica y por fármacos: patrón de laboratorio y conducta',
        paragraphs: [
          'Hepatitis alcohólica: ictericia y hepatomegalia dolorosa en un bebedor; el sello es la <strong>relación AST/ALT &gt; 2</strong> con ambas habitualmente &lt; 300–400 U/L —a diferencia de las hepatitis virales o tóxicas, que superan 1.000— más GGT y VCM elevados. La gravedad se estima con la función discriminante de Maddrey (usa TP y bilirrubina): si es grave o hay encefalopatía se agregan corticoides (prednisolona) a la abstinencia y el soporte nutricional.',
          'Hepatitis por fármacos: cualquier fármaco; los clásicos son paracetamol (dosis-dependiente; antídoto N-acetilcisteína, útil incluso de forma tardía), antituberculosos (isoniazida, pirazinamida, rifampicina → suspender todos y derivar), amoxicilina-clavulánico, estatinas, isotretinoína, antiepilépticos y nitrofurantoína. La conducta es siempre suspender el fármaco de inmediato; el diagnóstico es por descarte y por la relación temporal con el inicio del fármaco.',
        ],
      },
      {
        subhead: '6. Hepatitis crónicas no virales: NASH y las autoinmunes',
        paragraphs: [
          'NASH / esteatohepatitis metabólica: hoy la causa más frecuente de hepatopatía crónica; ocurre en resistencia a la insulina (obesidad, DM2, dislipidemia, síndrome metabólico). Ecografía con hígado hiperecogénico ("brillante"); transaminasas levemente altas con AST/ALT &lt; 1. Diagnóstico de exclusión. Tratamiento: baja de peso ≥ 7–10 %, ejercicio y control metabólico.',
          'Hepatitis autoinmune: mujer con otra enfermedad autoinmune (tiroiditis de Hashimoto), hipergammaglobulinemia y ANA/ASMA/anti-LKM1; biopsia con hepatitis de interfase → corticoides + azatioprina. Cirrosis biliar primaria: mujer de 40–60 años con prurito y colestasia (FA y GGT altas, transaminasas normales), AMA (+) → ácido ursodesoxicólico. Colangitis esclerosante primaria: hombre joven con colitis ulcerosa y p-ANCA; colangio-RM con vía biliar "en rosario" y riesgo de colangiocarcinoma.',
        ],
      },
    ],
    table: {
      title: 'Serología de la hepatitis B — las combinaciones que se preguntan',
      headers: ['AgHBs', 'IgM anti-HBc', 'Anti-HBs', 'Interpretación'],
      rows: [
        ['(+)', '(+)', '(−)', 'Hepatitis B aguda'],
        ['(+)', '(−)', '(−)', 'Hepatitis B crónica'],
        ['(−)', '(+)', '(−)', 'Período de ventana (aguda, antígeno aún negativo)'],
        ['(−)', '(−)', '(+) con anti-HBc IgG (+)', 'Infección pasada resuelta'],
        ['(−)', '(−)', '(+) con anti-HBc (−)', 'Inmune por vacuna'],
      ],
    },
    vignette: 'Hombre de 38 años, asintomático, se realiza exámenes por una donación de sangre. Resultado: transaminasas levemente elevadas, HBsAg positivo e IgM anti-HBc negativa. Se solicita carga viral, que resulta detectable.',
    explicacion: 'HBsAg positivo indica infección activa por virus B; la IgM anti-HBc negativa descarta que sea una infección aguda. La combinación HBsAg (+) con IgM anti-HBc (−) define una hepatitis B crónica. Corresponde derivar a especialista para estadificar (elastografía o biopsia, carga viral, HBeAg) y decidir tratamiento antiviral, además de estudiar coinfecciones y vacunar a los contactos.',
    keyPoints: [
      'Hepatitis aguda: el riesgo es la fulminante (ictericia + encefalopatía); se vigila con el tiempo de protrombina.',
      'Hepatitis crónica: el riesgo es la cirrosis; se evalúa con biopsia o elastografía.',
      'HBsAg = "hay virus"; IgM anti-HBc = "es aguda"; HBsAg (+) con IgM anti-HBc (−) = hepatitis B crónica.',
      'Hepatitis A: contacto extradomiciliario → vacuna; contacto intradomiciliario → inmunoglobulina.',
      'Relación AST/ALT > 2 = hepatitis alcohólica. Paracetamol → N-acetilcisteína.',
      'Prurito + AMA + mujer = cirrosis biliar primaria. Colitis ulcerosa + ANCA + vía biliar "en rosario" = colangitis esclerosante primaria.',
    ],
    questions: [
      {
        stem: 'Una paciente se realiza exámenes porque su pareja fue diagnosticada de hepatitis B. Tiene antígeno de superficie para VHB (AgHBs) negativo y anticuerpos anti-HBs (antisuperficie) positivos. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Vacunada contra la hepatitis B' },
          { id: 'B', text: 'Hepatitis B aguda' },
          { id: 'C', text: 'Hepatitis B crónica' },
          { id: 'D', text: 'Hepatitis B en período de ventana' },
          { id: 'E', text: 'Infección asintomática por virus hepatitis B' },
        ],
        correcta: 'A',
        explicacion: 'El AgHBs negativo descarta infección activa y los anti-HBs positivos indican inmunidad. Como no se informan anti-HBc, el patrón "anti-HBs aislado" corresponde a inmunidad por vacuna (una infección resuelta también tendría anti-HBc IgG positivos). En ningún caso hay enfermedad activa ni período de ventana.',
        recTag: 'EUNACOM Julio 2015 · Pregunta 122',
      },
      {
        stem: 'Mujer de 30 años con 10 días de astenia, fiebre, malestar y dolor epigástrico; hace 2 días se agregó ictericia y hoy orinas oscuras. Al examen: FC 96/min, PA 100/60, ictericia franca, sin compromiso de conciencia, dolor en epigastrio e hipocondrio derecho sin signos peritoneales. Laboratorio: GOT 2.640 U/L, GPT 2.860 U/L, GGT 180, FA 412, protrombinemia 52 %, bilirrubina total 9,2 mg/dL (directa 6,6), albúmina 3,4 g/dL. IgM anti-VHA 5,5 U (VN < 0,2). ¿Cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Dieta blanda y reposo en domicilio' },
          { id: 'B', text: 'Hospitalizar' },
          { id: 'C', text: 'Solicitar ecografía abdominal y controlar de forma ambulatoria' },
          { id: 'D', text: 'Solicitar colangiopancreatografía por resonancia magnética' },
          { id: 'E', text: 'Indicar N-acetilcisteína oral' },
        ],
        correcta: 'B',
        explicacion: 'Es una hepatitis A aguda (IgM anti-VHA positiva) con transaminasas muy elevadas y, sobre todo, protrombinemia de 52 %. Aún no hay encefalopatía, por lo que no cumple criterios de hepatitis fulminante, pero la caída del tiempo de protrombina es el marcador de gravedad y de riesgo de progresión: obliga a hospitalizar para vigilancia. El manejo ambulatorio se reserva para la hepatitis A no complicada con protrombina normal.',
        recTag: 'EUNACOM Julio 2024 · Pregunta 26',
      },
      {
        stem: 'Mujer de 20 años en tratamiento con isotretinoína hace 10 días por acné consulta por dolor abdominal, malestar y astenia, con ictericia y orinas oscuras. Examen: ictericia, dolor en epigastrio e hipocondrio, hígado palpable 3 cm bajo el reborde costal. Laboratorio: GOT 328 U/L, GPT 459 U/L, bilirrubina 1,8 mg/dL, FA 80, GGT 92, protrombinemia 80 %. Serología: IgG anti-VHA (+), IgM anti-VHA (−), AgHBs (−), anti-HBc totales (+); anti-VHC y autoinmunidad pendientes. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'Hepatitis A' },
          { id: 'B', text: 'Hepatitis B' },
          { id: 'C', text: 'Hepatitis C' },
          { id: 'D', text: 'Hepatitis por fármacos' },
          { id: 'E', text: 'Hepatitis autoinmune' },
        ],
        correcta: 'D',
        explicacion: 'La IgM anti-VHA negativa descarta hepatitis A aguda (la IgG solo marca contacto previo). El AgHBs negativo descarta infección B activa; los anti-HBc totales positivos sin AgHBs indican solo exposición pasada. Por descarte, y por la relación temporal con un fármaco hepatotóxico conocido (isotretinoína), el diagnóstico es hepatitis por fármacos: la conducta es suspender el fármaco de inmediato.',
        recTag: 'EUNACOM Diciembre 2019 · Pregunta 83',
      },
    ],
  },

  {
    id: 'gastro-15', classId: 'gastro-15', tier: 3,
    blockNum: 3, blockName: 'Hígado',
    topicLabel: '3.3', title: 'Daño Hepático Crónico e Hipertensión Portal',
    perfilCode: '1.06.1.005', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES universal · trasplante hepático según norma de patologías GES cuando corresponda',
    reconstrucciones: null,
    frecuencia: 'Alta rentabilidad · dos reglas fijas: paracentesis diagnóstica siempre, TIPS contraindicado en encefalopatía',
    svg: null, algoTitle: 'Complicaciones del cirrótico',
    contexto: 'La cirrosis descompensa por dos vías. La hipertensión portal genera várices, ascitis y síndrome hepatorrenal; la insuficiencia hepática genera encefalopatía y coagulopatía. Dos reglas se preguntan sin falta: a todo cirrótico con ascitis que llega a urgencias se le hace paracentesis diagnóstica antes que nada (para descartar peritonitis bacteriana espontánea), y el TIPS está contraindicado si hay encefalopatía, porque desviar la sangre del hígado la empeora.',
    contentSections: [
      {
        subhead: '1. Várices esofágicas',
        paragraphs: [
          'Todo cirrótico se hace endoscopía para pesquisar várices. <strong>Profilaxis primaria</strong> (nunca sangró): betabloqueo no selectivo (propranolol/carvedilol); si está contraindicado, ligadura endoscópica. <strong>Profilaxis secundaria</strong> (ya sangró): propranolol + ligadura.',
          '<strong>Hemorragia variceal activa:</strong> reposición de volumen + terlipresina (o somatostatina/octreótido) + antibióticos (ceftriaxona, profilaxis de PBE) + endoscopía con ligadura en las primeras 12 h; tiamina si es alcohólico. Refractaria → TIPS.',
        ],
      },
      {
        subhead: '2. Ascitis',
        paragraphs: [
          'Tratamiento de la ascitis no complicada: restricción de sodio + espironolactona ± furosemida. Ascitis a tensión: paracentesis evacuadora + albúmina (≈ 8 g por litro extraído). Ascitis refractaria: paracentesis seriadas con albúmina; considerar TIPS o trasplante.',
          'El gradiente albúmina sérica-ascítica ≥ 1,1 g/dL confirma que la causa es hipertensión portal. Una albúmina en el líquido &lt; 1,5 g/dL indica alto riesgo de PBE (profilaxis primaria).',
        ],
      },
      {
        subhead: '3. Peritonitis bacteriana espontánea (PBE)',
        paragraphs: [
          'A todo cirrótico con ascitis que consulta se le hace <strong>paracentesis diagnóstica</strong>. Diagnóstico: ≥ 250 polimorfonucleares/mm³ en el líquido ascítico. Agente más frecuente: E. coli.',
          'Tratamiento: cefotaxima (o ceftriaxona) endovenosa por 5–7 días + <strong>albúmina (día 1 y día 3)</strong> para prevenir el síndrome hepatorrenal. Tras una PBE, profilaxis secundaria indefinida con ciprofloxacino mientras persista la ascitis.',
        ],
      },
      {
        subhead: '4. Encefalopatía, síndrome hepatorrenal y coagulopatía',
        paragraphs: [
          'Encefalopatía hepática: desorientación + asterixis; precipitante más frecuente = infección (también hemorragia digestiva, constipación, sedantes, diuréticos). Tratamiento: buscar y tratar el precipitante + lactulosa titulada a 2–3 deposiciones blandas al día (+ rifaximina). <strong>El TIPS está contraindicado en la encefalopatía.</strong>',
          'Síndrome hepatorrenal: falla renal funcional del cirrótico avanzado, de muy mal pronóstico → terlipresina + albúmina y trasplante. Coagulopatía: INR alto (déficit de factores) + trombopenia (hiperesplenismo); se corrige solo ante sangrado o procedimientos.',
        ],
      },
    ],
    table: {
      title: 'Complicaciones del cirrótico — conducta clave',
      headers: ['Situación', 'Conducta de primera línea', 'Trampa frecuente'],
      rows: [
        ['Várices que nunca sangraron', 'Betabloqueo no selectivo (propranolol)', 'Ligar de entrada sin indicación'],
        ['Hemorragia variceal activa', 'Volumen + terlipresina + antibióticos + ligadura', 'Omitir los antibióticos'],
        ['Ascitis a tensión', 'Paracentesis diagnóstica primero, luego evacuadora + albúmina', 'Drenar sin descartar PBE'],
        ['Líquido ascítico con ≥ 250 PMN/mm³', 'Cefotaxima + albúmina', 'Usar aminoglucósidos (nefrotóxicos)'],
        ['Encefalopatía + ascitis refractaria', 'Lactulosa + tratar precipitante; NO TIPS', 'Indicar TIPS'],
      ],
    },
    vignette: 'Hombre de 58 años con cirrosis por alcohol, en control ambulatorio, consulta por aumento del perímetro abdominal en la última semana y febrículas. Al examen: ascitis moderada, sin dolor peritoneal, sin encefalopatía. Está hemodinámicamente estable.',
    explicacion: 'Cirrótico con ascitis y fiebre: la primera conducta, antes de ajustar diuréticos o cualquier otra medida, es la paracentesis diagnóstica para descartar una peritonitis bacteriana espontánea. Si el recuento de polimorfonucleares en el líquido ascítico es ≥ 250/mm³, se inicia cefotaxima endovenosa y albúmina. La fiebre, aunque sea baja, en un cirrótico con ascitis obliga a puncionar.',
    keyPoints: [
      'Todo cirrótico con ascitis que consulta: paracentesis diagnóstica antes que nada (descartar PBE).',
      'PBE: ≥ 250 PMN/mm³ → cefotaxima/ceftriaxona endovenosa + albúmina (días 1 y 3).',
      'Várices: profilaxis primaria = propranolol; secundaria = propranolol + ligadura; sangrado activo = terlipresina + antibióticos + ligadura.',
      'Ascitis a tensión: paracentesis evacuadora + albúmina (~8 g/L). El gradiente albúmina suero-ascitis ≥ 1,1 confirma hipertensión portal.',
      'Encefalopatía: tratar el precipitante (casi siempre infección) + lactulosa a 2–3 deposiciones/día. El TIPS está contraindicado.',
      'Síndrome hepatorrenal: terlipresina + albúmina y trasplante; pronóstico muy malo.',
    ],
    questions: [
      {
        stem: 'Paciente con cirrosis y várices esofágicas medianas encontradas en una endoscopía de tamizaje. Nunca ha presentado hemorragia digestiva. ¿Cuál es la profilaxis indicada?',
        options: [
          { id: 'A', text: 'Ligadura endoscópica de várices + propranolol' },
          { id: 'B', text: 'Propranolol (o carvedilol) por vía oral, titulado por frecuencia cardíaca' },
          { id: 'C', text: 'Instalación electiva de TIPS' },
          { id: 'D', text: 'Terlipresina endovenosa mensual' },
          { id: 'E', text: 'Ácido tranexámico oral permanente' },
        ],
        correcta: 'B',
        explicacion: 'La profilaxis primaria de la hemorragia variceal (paciente que nunca ha sangrado) es el betabloqueo no selectivo, titulado para reducir la frecuencia cardíaca. La ligadura endoscópica se añade en la profilaxis secundaria (tras un primer sangrado) o se usa sola cuando el betabloqueo está contraindicado (asma, EPOC grave, intolerancia).',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Cirrótico con ascitis refractaria a diuréticos que además ha tenido dos episodios de encefalopatía hepática en el último mes. El equipo tratante propone instalar un TIPS para controlar la ascitis. ¿Cuál es la conducta correcta?',
        options: [
          { id: 'A', text: 'Instalar el TIPS: resuelve simultáneamente la ascitis y reduce el riesgo de várices' },
          { id: 'B', text: 'No instalar el TIPS: la encefalopatía es una contraindicación' },
          { id: 'C', text: 'Instalar el TIPS solo si se agrega lactulosa profiláctica' },
          { id: 'D', text: 'Instalar el TIPS y suspender los betabloqueadores' },
          { id: 'E', text: 'Instalar el TIPS con anestesia general para evitar la descompensación' },
        ],
        correcta: 'B',
        explicacion: 'El TIPS crea una derivación portosistémica que hace que la sangre intestinal "salte" el hígado; eso alivia la hipertensión portal pero aumenta la carga de amonio y otras toxinas que llegan al cerebro, por lo que la encefalopatía hepática (aun leve o recurrente) es una contraindicación. En este paciente se mantienen las paracentesis seriadas con albúmina y se prioriza la evaluación para trasplante.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-16', classId: 'gastro-16', tier: 1,
    blockNum: 3, blockName: 'Hígado',
    topicLabel: '3.4', title: 'Lesiones Hepáticas Focales y Pólipos Vesiculares',
    perfilCode: '1.06.1.024', dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica',
    reconstrucciones: null,
    frecuencia: 'Rentabilidad media · el aspecto ecográfico y el contexto clínico resuelven casi toda la clase',
    svg: null, algoTitle: 'Lesión hepática focal en la ecografía',
    contexto: 'El eco describe la lesión y la palabra clave orienta casi todo. Anecogénica y lisa = quiste simple (observar). Hiperecogénica y homogénea = hemangioma (observar). Hipoecogénica única y homogénea en una mujer que usa anticonceptivos = adenoma (resecar, porque sangra y puede malignizar). Heterogénea e irregular en un cirrótico = hepatocarcinoma. Y con los pólipos de vesícula, el umbral es 1 cm: sobre 1 cm o heterogéneo, colecistectomía.',
    contentSections: [
      {
        subhead: '1. Lesiones quísticas',
        paragraphs: [
          'Quiste simple: anecogénico, de pared fina, sin tabiques ni contenido → observar. Quiste hidatídico: con membrana, tabiques o vesículas hijas (contexto rural, contacto con perros) → albendazol + cirugía (o PAIR); evitar la punción libre por riesgo de anafilaxia y siembra.',
          'Absceso hepático: lesión hipoecogénica de contornos irregulares, con fiebre y dolor. Amebiano (serología, viajero) → metronidazol, habitualmente sin drenaje. Piógeno → antibióticos de amplio espectro + drenaje.',
        ],
      },
      {
        subhead: '2. Lesiones sólidas benignas',
        paragraphs: [
          '<strong>Hemangioma:</strong> la lesión hepática benigna más frecuente; hiperecogénico, homogéneo, bien delimitado. Conducta: observar (cirugía solo si es gigante y sintomático). Hiperplasia nodular focal: cicatriz central; benigna, sin riesgo → observar.',
          '<strong>Adenoma hepático:</strong> lesión hipoecogénica, única, homogénea, en mujeres usuarias de anticonceptivos orales o esteroides anabólicos; riesgo de hemorragia y de malignización → suspender los estrógenos y resecar los &gt; 5 cm o sintomáticos.',
        ],
      },
      {
        subhead: '3. Lesiones malignas',
        paragraphs: [
          '<strong>Hepatocarcinoma:</strong> lesión heterogénea, de contornos irregulares, en un hígado con daño hepático crónico (sobre todo cirrosis por virus B o C); alfa-fetoproteína elevada; se confirma por el comportamiento del contraste en TAC/RM trifásico (realce arterial + lavado). Tratamiento: resección, ablación o trasplante (criterios de Milán).',
          'Metástasis hepáticas: lesiones múltiples, hipoecogénicas; buscar el primario (colon, mama, pulmón, estómago). En el cáncer de colon, algunas metástasis hepáticas son resecables con intención curativa.',
        ],
      },
      {
        subhead: '4. Pólipos vesiculares',
        paragraphs: [
          'Colesterolínicos (los más frecuentes): pequeños (&lt; 10 mm), múltiples, homogéneos → seguimiento ecográfico.',
          'Sospecha de pólipo neoplásico → colecistectomía: pólipo ≥ 10 mm, único, sésil o heterogéneo, de crecimiento rápido, en &gt; 50 años o asociado a colelitiasis o a colangitis esclerosante primaria. Ante sospecha de cáncer de vesícula invasor, la cirugía es abierta (colecistectomía radical), no laparoscópica.',
        ],
      },
    ],
    table: {
      title: 'Lesión hepática en la ecografía — diagnóstico y conducta',
      headers: ['Aspecto ecográfico', 'Diagnóstico probable', 'Conducta'],
      rows: [
        ['Anecogénica, pared fina, sin tabiques', 'Quiste simple', 'Observar'],
        ['Quística con membrana/tabiques (contexto rural)', 'Quiste hidatídico', 'Albendazol + cirugía'],
        ['Hiperecogénica, homogénea', 'Hemangioma', 'Observar'],
        ['Hipoecogénica única y homogénea, mujer con ACO', 'Adenoma hepático', 'Suspender estrógenos; resecar si > 5 cm o sintomático'],
        ['Heterogénea irregular en cirrótico + AFP alta', 'Hepatocarcinoma', 'TAC/RM trifásico → resección/ablación/trasplante'],
        ['Múltiples lesiones hipoecogénicas', 'Metástasis', 'Buscar el tumor primario'],
      ],
    },
    vignette: 'Mujer de 34 años, usuaria de anticonceptivos orales desde hace 8 años, se realiza una ecografía abdominal por dolor vago en el hipocondrio derecho. Se informa una lesión hepática sólida, hipoecogénica, homogénea, única, de 6 cm, en el lóbulo derecho. No tiene daño hepático crónico y la alfa-fetoproteína es normal.',
    explicacion: 'Lesión sólida hipoecogénica, homogénea y única, en una mujer joven usuaria prolongada de anticonceptivos orales, sin cirrosis: el diagnóstico más probable es un adenoma hepático. Por su tamaño (> 5 cm) y el riesgo de hemorragia y de transformación maligna, la conducta es suspender los anticonceptivos orales y resecar la lesión. El hemangioma sería hiperecogénico y el hepatocarcinoma aparecería en un hígado dañado y con alfa-fetoproteína elevada.',
    keyPoints: [
      'Anecogénica lisa = quiste simple (observar); hiperecogénica homogénea = hemangioma (observar).',
      'Hipoecogénica única y homogénea + anticonceptivos orales = adenoma → suspender estrógenos y resecar si > 5 cm.',
      'Heterogénea e irregular en un hígado cirrótico + AFP alta = hepatocarcinoma.',
      'Múltiples lesiones hipoecogénicas = metástasis → buscar el primario.',
      'Pólipo vesicular ≥ 10 mm, heterogéneo o con colelitiasis → colecistectomía; sospecha de cáncer invasor → cirugía abierta.',
    ],
    questions: [
      {
        stem: 'En una ecografía abdominal solicitada por dispepsia se informa una lesión hepática de 3 cm, hiperecogénica, homogénea y de bordes bien definidos, en un paciente de 40 años sin antecedentes hepáticos ni baja de peso. ¿Cuál es el diagnóstico más probable y la conducta?',
        options: [
          { id: 'A', text: 'Metástasis hepática; solicitar TAC de tórax-abdomen-pelvis' },
          { id: 'B', text: 'Hemangioma hepático; observación' },
          { id: 'C', text: 'Hepatocarcinoma; derivar para resección' },
          { id: 'D', text: 'Absceso hepático; iniciar antibióticos y drenaje' },
          { id: 'E', text: 'Quiste hidatídico; albendazol' },
        ],
        correcta: 'B',
        explicacion: 'Una lesión hiperecogénica, homogénea y bien delimitada en un hígado sano corresponde casi siempre a un hemangioma, la lesión hepática benigna más frecuente. La conducta es la observación; si hay dudas por el tamaño o características atípicas, se confirma con RM. La cirugía solo se plantea en hemangiomas gigantes y sintomáticos.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'En un paciente de 60 años, sin colelitiasis, se detecta en la ecografía un pólipo vesicular único, sésil, de 14 mm, que ha crecido 4 mm respecto de un control previo. ¿Cuál es la conducta?',
        options: [
          { id: 'A', text: 'Seguimiento ecográfico en 6 meses' },
          { id: 'B', text: 'Colecistectomía' },
          { id: 'C', text: 'Ácido ursodesoxicólico para disolver el pólipo' },
          { id: 'D', text: 'Biopsia percutánea del pólipo' },
          { id: 'E', text: 'Colangiorresonancia y control anual' },
        ],
        correcta: 'B',
        explicacion: 'Un pólipo vesicular ≥ 10 mm, único, sésil, con crecimiento demostrado y en un paciente mayor de 50 años reúne varios criterios de sospecha de malignidad, por lo que la conducta es la colecistectomía (la única "biopsia" adecuada de un pólipo vesicular es la vesícula completa). El seguimiento se reserva para los pólipos pequeños, múltiples y homogéneos (colesterolínicos).',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  /* ═══════════════════════ BLOQUE 04 · VÍA BILIAR Y PÁNCREAS ═══════════════════════ */
  {
    id: 'gastro-17', classId: 'gastro-17', tier: 3,
    blockNum: 4, blockName: 'Vía Biliar y Páncreas',
    topicLabel: '4.1', title: 'Colelitiasis, Colecistitis, Coledocolitiasis y Colangitis',
    perfilCode: '1.06.1.006', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'GES: colecistectomía preventiva en colelitiasis, 35 a 49 años',
    reconstrucciones: null,
    frecuencia: 'Alta rentabilidad · regla de "sumar síntomas" separa las 4 entidades y define cuál se opera de urgencia',
    svg: null, algoTitle: 'Dolor en el hipocondrio derecho: sumar síntomas',
    contexto: 'Las cuatro patologías biliares se separan sumando síntomas. Solo dolor = cólico biliar. Dolor + fiebre = colecistitis. Dolor + ictericia = coledocolitiasis. Dolor + fiebre + ictericia = colangitis (tríada de Charcot). Eso define la urgencia: la única que se opera de urgencia es la colecistitis; la colangitis se drena de urgencia con CPRE. Y como Chile tiene la tasa de cáncer de vesícula más alta del mundo, toda colelitiasis termina en colecistectomía, aunque sea asintomática.',
    contentSections: [
      {
        subhead: '1. Colelitiasis y cólico biliar',
        paragraphs: [
          'Cólico biliar: dolor sordo en el epigastrio/hipocondrio derecho de 30–60 min que cede solo, desencadenado por comidas grasas, con náuseas. La ecografía muestra los cálculos (imagen con sombra acústica). Manejo agudo: analgesia (dipirona) + antiespasmódico.',
          '<strong>Toda colelitiasis se opera</strong> con colecistectomía laparoscópica electiva, incluso la asintomática, por el riesgo de complicaciones y —en Chile— de cáncer de vesícula. El programa GES garantiza la colecistectomía entre los 35 y 49 años.',
        ],
      },
      {
        subhead: '2. Colecistitis aguda',
        paragraphs: [
          'Dolor persistente (&gt; 6 h) en el hipocondrio derecho + fiebre + signo de Murphy + leucocitosis. Ecografía: cálculo enclavado, pared &gt; 4 mm, líquido perivesicular, Murphy ecográfico.',
          'Tratamiento: hospitalización, antibióticos, y <strong>colecistectomía laparoscópica precoz (en las primeras 72 h)</strong> — es la única patología biliar que se opera de urgencia. En el paciente de muy alto riesgo quirúrgico, colecistostomía percutánea transitoria.',
        ],
      },
      {
        subhead: '3. Coledocolitiasis',
        paragraphs: [
          'Dolor + ictericia con patrón colestásico (FA y GGT altas), sin fiebre si no hay infección. Secuencia: ecografía (colédoco &gt; 6–7 mm = sospecha; rara vez ve el cálculo) → colangiorresonancia (confirma) → CPRE (extrae el cálculo).',
          'Se va directo a CPRE, sin colangiorresonancia, si hay colangitis o si la ecografía ya vio el cálculo en el colédoco. Después de la CPRE: colecistectomía laparoscópica electiva.',
        ],
      },
      {
        subhead: '4. Colangitis aguda',
        paragraphs: [
          '<strong>Tríada de Charcot:</strong> dolor + ictericia + fiebre. <strong>Péntada de Reynolds</strong> (forma grave): agrega hipotensión y compromiso de conciencia.',
          'Tratamiento: reposición de volumen + antibióticos de amplio espectro (ceftriaxona + metronidazol) + <strong>drenaje biliar urgente por CPRE</strong> (lo esencial). La colecistectomía se hace después, de forma electiva. Las colecistitis crónicas (vesícula en porcelana, escleroatrófica) se operan de forma electiva por el riesgo de cáncer.',
        ],
      },
    ],
    table: {
      title: 'Patología biliar — clínica, examen y cirugía',
      headers: ['Cuadro', 'Dolor + ...', 'Conducta'],
      rows: [
        ['Cólico biliar (colelitiasis sintomática)', 'solo dolor', 'Analgesia; colecistectomía electiva'],
        ['Colecistitis aguda', 'dolor + fiebre + Murphy', 'Antibióticos + colecistectomía de urgencia (< 72 h)'],
        ['Coledocolitiasis', 'dolor + ictericia', 'Eco → colangio-RM → CPRE → colecistectomía electiva'],
        ['Colangitis aguda', 'dolor + ictericia + fiebre (Charcot)', 'Volumen + antibióticos + CPRE urgente'],
        ['Vesícula en porcelana / escleroatrófica', 'hallazgo (riesgo de cáncer)', 'Colecistectomía electiva'],
      ],
    },
    vignette: 'Mujer de 48 años consulta por 8 horas de dolor intenso y continuo en el hipocondrio derecho, con fiebre de 38,5 °C y vómitos. Al examen tiene un signo de Murphy claramente positivo. Laboratorio: leucocitos 15.000/mm³, PCR elevada, bilirrubina normal. La ecografía muestra colelitiasis, pared vesicular de 6 mm y líquido perivesicular.',
    explicacion: 'Dolor persistente en el hipocondrio derecho + fiebre + Murphy positivo + hallazgos ecográficos (pared engrosada, líquido perivesicular) configuran una colecistitis aguda. La bilirrubina normal la separa de la coledocolitiasis y la colangitis. Es la única patología biliar que se opera de urgencia: el tratamiento es hospitalización, antibióticos y colecistectomía laparoscópica precoz, idealmente en las primeras 72 horas.',
    keyPoints: [
      'Solo dolor = cólico biliar; + fiebre = colecistitis; + ictericia = coledocolitiasis; + fiebre + ictericia = colangitis (Charcot).',
      'Toda colelitiasis se opera (colecistectomía laparoscópica electiva), incluso asintomática — riesgo de cáncer de vesícula en Chile.',
      'La colecistitis aguda es la única patología biliar de resolución quirúrgica urgente (colecistectomía < 72 h).',
      'Coledocolitiasis: eco → colangiorresonancia → CPRE. Directo a CPRE si hay colangitis o si la eco ve el cálculo.',
      'Colangitis: lo esencial es el drenaje biliar urgente por CPRE, junto con volumen y antibióticos.',
    ],
    questions: [
      {
        stem: 'Hombre de 62 años consulta por dolor en el hipocondrio derecho, ictericia progresiva, fiebre de 39 °C con calofríos y, en las últimas horas, tendencia a la somnolencia y presión arterial de 90/50 mmHg. ¿Cuál es el diagnóstico y la conducta prioritaria?',
        options: [
          { id: 'A', text: 'Colecistitis aguda; colecistectomía laparoscópica de urgencia' },
          { id: 'B', text: 'Colangitis aguda grave; reposición de volumen, antibióticos y CPRE urgente para drenaje' },
          { id: 'C', text: 'Coledocolitiasis; colangiorresonancia y luego CPRE electiva' },
          { id: 'D', text: 'Hepatitis aguda; manejo de soporte' },
          { id: 'E', text: 'Absceso hepático; antibióticos y drenaje percutáneo' },
        ],
        correcta: 'B',
        explicacion: 'Dolor + ictericia + fiebre (tríada de Charcot) con hipotensión y compromiso de conciencia constituyen la péntada de Reynolds: una colangitis aguda grave. La prioridad es la reanimación con volumen, los antibióticos de amplio espectro y, sobre todo, el drenaje biliar urgente mediante CPRE. La colecistectomía se difiere hasta que el paciente se estabilice.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Mujer de 40 años, sin síntomas, a quien en una ecografía de rutina se le detecta una colelitiasis (múltiples cálculos, vesícula de pared normal). ¿Cuál es la conducta?',
        options: [
          { id: 'A', text: 'Observación; operar solo si aparecen síntomas' },
          { id: 'B', text: 'Ácido ursodesoxicólico para disolver los cálculos' },
          { id: 'C', text: 'Colecistectomía laparoscópica electiva' },
          { id: 'D', text: 'Dieta baja en grasas y control ecográfico anual' },
          { id: 'E', text: 'Colecistectomía solo si los cálculos superan los 2 cm' },
        ],
        correcta: 'C',
        explicacion: 'En Chile, que tiene la incidencia de cáncer de vesícula más alta del mundo, la conducta ante una colelitiasis —aunque sea asintomática— es la colecistectomía laparoscópica electiva. El GES garantiza esta cirugía preventiva en el grupo de 35 a 49 años. La disolución con ursodesoxicólico y la observación no protegen del cáncer.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-18', classId: 'gastro-18', tier: 3,
    blockNum: 4, blockName: 'Vía Biliar y Páncreas',
    topicLabel: '4.2', title: 'Pancreatitis Aguda',
    perfilCode: '1.06.2.010', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · manejo hospitalario según Norma MINSAL de urgencia abdominal',
    reconstrucciones: 'EUNACOM 2013 (Q#66) · EUNACOM 2013 (Q#121) · EUNACOM Julio 2016 (Q#54) · EUNACOM Diciembre 2019 (Q#101)',
    frecuencia: 'Alta rentabilidad · 18 de 21 preguntas del banco son de diagnóstico diferencial del dolor epigástrico agudo',
    svg: null, algoTitle: 'Diagnóstico, estratificación de gravedad y manejo inicial de la pancreatitis aguda',
    contexto: 'La pancreatitis aguda es autodigestión: la activación intraacinar prematura del tripsinógeno desencadena una cascada de enzimas que digieren el propio páncreas y el retroperitoneo. Eso explica el dolor transfixiante, el íleo, la pérdida masiva de líquido al tercer espacio y por qué el pilar del tratamiento en las primeras 24 horas es la reposición agresiva de volumen — el paciente está perdiendo litros hacia el retroperitoneo aunque su piel esté seca.',
    contentSections: [
      {
        subhead: '1. Diagnóstico: 2 de 3 criterios',
        paragraphs: [
          'El diagnóstico de pancreatitis aguda requiere <strong>2 de los siguientes 3</strong> (criterios de Atlanta revisada 2012): (1) dolor abdominal compatible —epigástrico, intenso, transfixiante, irradiado en faja al dorso—; (2) <strong>lipasa o amilasa &gt; 3 veces el límite superior normal</strong>; (3) hallazgos de pancreatitis en imagen (TAC con contraste, ecografía o resonancia).',
          'La <strong>lipasa es más sensible y específica</strong> que la amilasa y permanece elevada más días. La magnitud de la elevación enzimática <strong>no</strong> se correlaciona con la gravedad.',
          'Si el paciente cumple los dos primeros criterios, <strong>no se necesita TAC para el diagnóstico</strong>. La TAC con contraste se indica a las 72 horas si hay duda diagnóstica o si el paciente evoluciona mal (para evaluar necrosis).',
        ],
      },
      {
        subhead: '2. Etiología: buscar siempre la causa',
        paragraphs: [
          'Las dos causas más frecuentes en Chile son la <strong>litiasis biliar</strong> (cálculo que obstruye la ampolla de Vater; más frecuente en mujeres, con elevación de transaminasas y de fosfatasas alcalinas) y el <strong>alcohol</strong> (varón, consumo intenso y sostenido).',
          'Otras: hipertrigliceridemia (&gt; 1000 mg/dL), post-CPRE, fármacos, hipercalcemia, autoinmune, trauma y tumores. A todo paciente se le solicita <strong>ecografía abdominal</strong> en las primeras 24–48 h para buscar colelitiasis y perfil lipídico y calcemia.',
        ],
      },
      {
        subhead: '3. Estratificación de gravedad',
        paragraphs: [
          'La clasificación de Atlanta revisada define pancreatitis <strong>leve</strong> (sin falla orgánica ni complicaciones locales), <strong>moderadamente grave</strong> (falla orgánica transitoria &lt; 48 h o complicación local) y <strong>grave</strong> (falla orgánica persistente &gt; 48 h).',
          'Scores predictivos: <strong>BISAP</strong> (BUN &gt; 25, alteración de conciencia, SIRS, edad &gt; 60, derrame pleural) es el más simple; APACHE-II el más usado en UCI; los criterios de Ranson requieren 48 h. Un <strong>hematocrito elevado y en ascenso, o un BUN que sube</strong> a las 24 h, predicen necrosis y mala evolución.',
        ],
      },
      {
        subhead: '4. Manejo inicial (primeras 24–48 horas)',
        paragraphs: [
          '<strong>Reposición de volumen agresiva y precoz:</strong> cristaloides, de preferencia <strong>Ringer lactato</strong>, 5–10 mL/kg/h ajustando por diuresis (meta &gt; 0,5 mL/kg/h), frecuencia cardíaca y hematocrito. Es la intervención que más impacta en la mortalidad.',
          '<strong>Analgesia</strong> potente (opioides; la meperidina ya no se prefiere). <strong>Régimen cero</strong> inicial, con <strong>realimentación oral precoz</strong> (dentro de 24–72 h) apenas cede el dolor y el íleo, incluso en pancreatitis grave (nutrición enteral por sonda nasoyeyunal si no tolera vía oral). La nutrición parenteral se evita.',
          '<strong>NO se indican antibióticos profilácticos</strong> en la pancreatitis aguda no infectada, ni siquiera en la necrótica estéril. Los antibióticos se reservan para la necrosis infectada demostrada o la colangitis concomitante.',
          '<strong>Pancreatitis biliar:</strong> colecistectomía en el mismo ingreso una vez resuelto el episodio leve; <strong>CPRE urgente (&lt; 24 h)</strong> solo si hay colangitis asociada u obstrucción biliar persistente.',
        ],
      },
    ],
    table: {
      title: 'Dolor epigástrico agudo — cómo se separa la pancreatitis de sus imitadores',
      headers: ['Diagnóstico', 'Clave que lo distingue', 'Examen que confirma'],
      rows: [
        ['Pancreatitis aguda', 'Dolor transfixiante al dorso + lipasa > 3× · íleo', 'Lipasa/amilasa; TAC a las 72 h si evoluciona mal'],
        ['Coledocolitiasis', 'Dolor + ictericia, sin fiebre · lipasa normal o poco elevada', 'Ecografía (colédoco > 7 mm) → colangio-RM'],
        ['Colangitis aguda', 'Tríada de Charcot: dolor + ictericia + fiebre', 'Ecografía + hemocultivos → CPRE'],
        ['Úlcera perforada', 'Dolor brusco "en puñalada", abdomen en tabla', 'Radiografía de tórax de pie: neumoperitoneo'],
        ['IAM de cara inferior', 'Factores de riesgo CV, síntomas vagales', 'ECG de 12 derivaciones + troponina'],
        ['Isquemia mesentérica', 'Dolor desproporcionado al examen, FA, acidosis con lactato', 'Angio-TAC de abdomen'],
      ],
    },
    vignette: 'Hombre de 45 años, sin antecedentes, consulta por dolor epigástrico intenso de 12 horas irradiado al dorso, con vómitos biliosos. Al examen: FC 90/min, PA 140/90, escleras levemente ictéricas, abdomen blando y doloroso a la palpación epigástrica sin signos peritoneales. Laboratorio: leucocitos 13.000/mm³, PCR 55 mg/L, lipasa 640 U/L (VN < 60), bilirrubina total 2,8 mg/dL de predominio directo, ecografía con colelitiasis y colédoco de 6 mm.',
    explicacion: 'Cumple 2 de 3 criterios de Atlanta (dolor típico + lipasa > 3 veces el límite superior), por lo que el diagnóstico es pancreatitis aguda, de etiología biliar (colelitiasis, patrón colestásico leve). Aunque coexista una probable coledocolitiasis, "manda" la pancreatitis por ser la condición más grave. El manejo inicial es hospitalización, reposición agresiva con Ringer lactato ajustada a diuresis, analgesia, régimen cero con realimentación precoz y ecografía ya realizada; NO se inician antibióticos profilácticos. La CPRE urgente solo se justificaría si apareciera colangitis (fiebre alta, mayor ictericia, compromiso hemodinámico).',
    keyPoints: [
      'Diagnóstico = 2 de 3: dolor típico + lipasa/amilasa > 3× el límite superior + imagen compatible. Con los dos primeros no se necesita TAC.',
      'La magnitud de la elevación enzimática NO se correlaciona con la gravedad; el hematocrito y el BUN en ascenso a las 24 h sí predicen necrosis.',
      'Pilar del tratamiento: reposición de volumen precoz y agresiva con Ringer lactato, ajustada a diuresis. Es lo que más reduce la mortalidad.',
      'Realimentación oral precoz (24–72 h) apenas cede el dolor, incluso en pancreatitis grave. Se evita la nutrición parenteral.',
      'NO antibióticos profilácticos en pancreatitis no infectada. CPRE urgente (< 24 h) solo si hay colangitis asociada.',
      'Pancreatitis biliar leve: colecistectomía en el mismo ingreso para prevenir la recurrencia.',
    ],
    questions: [
      {
        stem: 'Hombre de 45 años consulta por dolor epigástrico intenso y vómitos biliosos. Al examen: FC 90/min, PA 140/90, escleras levemente ictéricas, abdomen blando y doloroso a la palpación epigástrica. Exámenes: escleras ictéricas leves, lipasa 190 U/L (VN < 60), bilirrubina total 3,1 mg/dL directa, ecografía con colédoco de 9 mm y microlitiasis. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Colangitis aguda' },
          { id: 'B', text: 'Pancreatitis aguda' },
          { id: 'C', text: 'Coledocolitiasis' },
          { id: 'D', text: 'Colecistitis aguda' },
          { id: 'E', text: 'Cólico biliar simple' },
        ],
        correcta: 'B',
        explicacion: 'La lipasa está sobre 3 veces el límite superior (> 180 U/L) junto con dolor típico: cumple criterios de pancreatitis aguda, y aunque coexista una coledocolitiasis (colédoco dilatado, patrón colestásico), "manda" la pancreatitis por ser la condición más grave y la que define la conducta. No hay fiebre ni compromiso hemodinámico que hagan pensar en colangitis (A). El colédoco dilatado y la ictericia descartan un cólico biliar simple (E) y la colecistitis (D) cursaría con Murphy y sin esta magnitud de ictericia.',
        recTag: 'Reconstrucción EUNACOM 2013 · Pregunta #121',
      },
      {
        stem: 'Paciente de 55 años con pancreatitis aguda biliar de 36 horas de evolución. Está hemodinámicamente estable, afebril, con dolor en disminución y tolera líquidos. Ecografía: colelitiasis, vía biliar de calibre normal, sin cálculos en el colédoco. ¿Cuál es la conducta más adecuada respecto de la vía biliar?',
        options: [
          { id: 'A', text: 'CPRE de urgencia en las próximas 24 horas' },
          { id: 'B', text: 'Colecistectomía laparoscópica durante el mismo ingreso, una vez resuelto el episodio' },
          { id: 'C', text: 'Alta con colecistectomía programada en 6 a 8 semanas' },
          { id: 'D', text: 'Colangiorresonancia y luego CPRE si es positiva' },
          { id: 'E', text: 'Manejo médico indefinido, sin cirugía, por el riesgo quirúrgico' },
        ],
        correcta: 'B',
        explicacion: 'En la pancreatitis biliar leve que ya resolvió, la colecistectomía laparoscópica debe realizarse en el mismo ingreso, porque diferirla se asocia a alta tasa de recurrencia de pancreatitis, colecistitis o colangitis en las semanas siguientes. La CPRE urgente (A) solo se indica si hay colangitis u obstrucción biliar persistente, lo que aquí no ocurre (afebril, vía biliar normal). La colangiorresonancia (D) no aporta porque la probabilidad de coledocolitiasis es baja. Diferir la cirugía (C) o no operar (E) deja al paciente expuesto a un nuevo evento.',
        recTag: 'Reconstrucción EUNACOM Julio 2016 · Pregunta #54',
      },
    ],
  },

  /* ═══════════════════════ BLOQUE 05 · ABDOMEN AGUDO Y URGENCIAS DIGESTIVAS ═══════════════════════ */
  {
    id: 'gastro-19', classId: 'gastro-19', tier: 3,
    blockNum: 5, blockName: 'Abdomen Agudo y Urgencias Digestivas',
    topicLabel: '5.1', title: 'Abdomen Agudo: Apendicitis y Diverticulitis',
    perfilCode: '1.06.2.001', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · urgencia quirúrgica según Norma MINSAL',
    reconstrucciones: null,
    frecuencia: 'Alta rentabilidad · dos cuadros casi simétricos que se preguntan por su clasificación (Hinchey) y conducta',
    svg: null, algoTitle: 'Dolor en fosa ilíaca: derecha vs izquierda',
    contexto: 'Dos cuadros casi simétricos. La apendicitis es el joven con dolor que migra del ombligo a la fosa ilíaca derecha, con anorexia: es diagnóstico clínico y va a pabellón. La diverticulitis es "la apendicitis del lado izquierdo" del mayor de 50, se estudia con TAC (la colonoscopía está prohibida en agudo) y se clasifica por Hinchey, que decide antibióticos vs drenaje vs cirugía de Hartmann. Y en toda mujer joven con dolor en fosa ilíaca derecha, lo primero es descartar embarazo.',
    contentSections: [
      {
        subhead: '1. Abdomen agudo: principios',
        paragraphs: [
          'El abdomen agudo es un diagnóstico clínico: no todos son quirúrgicos ni todos llevan antibióticos. Signos peritoneales: resistencia muscular, Blumberg (dolor al descomprimir), abdomen en tabla, ausencia de ruidos.',
          'En toda <strong>mujer en edad fértil</strong> con dolor abdominal bajo, la primera conducta es <strong>test de embarazo y evaluación ginecológica</strong> (embarazo ectópico, proceso inflamatorio pelviano, quiste ovárico complicado).',
        ],
      },
      {
        subhead: '2. Apendicitis aguda',
        paragraphs: [
          'Dolor periumbilical que migra a la fosa ilíaca derecha en 12–24 h, con anorexia, náuseas y febrícula. Signos: McBurney, Rovsing, psoas (apéndice retrocecal), obturador (apéndice pélvico).',
          'Diagnóstico clínico (apoyado por leucocitosis y PCR); ecografía en niños y mujeres en edad fértil; TAC si hay duda en el adulto. Tratamiento: apendicectomía (laparoscópica). La apendicitis perforada se opera de urgencia con lavado y antibióticos.',
        ],
      },
      {
        subhead: '3. Plastrón apendicular',
        paragraphs: [
          'Masa palpable en la fosa ilíaca derecha con varios días de evolución: el epiplón ha "tapado" el apéndice inflamado, conteniendo el proceso.',
          'Conducta: primero antibióticos (ceftriaxona + metronidazol) por varias semanas → apendicectomía diferida (o de intervalo) a las 6–8 semanas. No es lo mismo que la apendicitis perforada (peritonitis difusa), que sí va a cirugía inmediata.',
        ],
      },
      {
        subhead: '4. Diverticulitis aguda',
        paragraphs: [
          'Dolor en la fosa ilíaca izquierda + fiebre + cambio del hábito, en un &gt; 50 años ("apendicitis izquierda"). Diagnóstico: TAC de abdomen y pelvis con contraste (engrosamiento del sigmoides, estrías de la grasa, absceso). La <strong>colonoscopía está contraindicada en el episodio agudo</strong> (riesgo de perforación); se hace a las 6–8 semanas para descartar cáncer.',
          '<strong>Clasificación de Hinchey:</strong> I–II (absceso) → antibióticos ± drenaje percutáneo; III (peritonitis purulenta) y IV (peritonitis fecal) → cirugía de urgencia (operación de Hartmann). Fístula colovesical → neumaturia e infecciones urinarias recurrentes.',
        ],
      },
    ],
    table: {
      title: 'Diverticulitis aguda — clasificación de Hinchey y conducta',
      headers: ['Hinchey', 'Hallazgo en el TAC', 'Tratamiento'],
      rows: [
        ['I', 'Absceso pericólico pequeño', 'Antibióticos (± manejo ambulatorio en casos leves)'],
        ['II', 'Absceso pélvico o a distancia', 'Antibióticos + drenaje percutáneo guiado por TAC'],
        ['III', 'Peritonitis purulenta generalizada', 'Cirugía de urgencia (operación de Hartmann)'],
        ['IV', 'Peritonitis fecal (perforación libre)', 'Cirugía de urgencia (operación de Hartmann)'],
        ['Post-episodio (6–8 sem)', '—', 'Colonoscopía para descartar cáncer'],
      ],
    },
    vignette: 'Hombre de 58 años consulta por 2 días de dolor en la fosa ilíaca izquierda, fiebre de 38,3 °C y deposiciones más frecuentes. Al examen tiene dolor y defensa localizada en la fosa ilíaca izquierda, sin signos peritoneales generalizados. El TAC de abdomen muestra engrosamiento del sigmoides con estrías de la grasa pericólica y una colección de 2 cm adyacente.',
    explicacion: 'Diverticulitis aguda con un absceso pericólico pequeño, sin peritonitis generalizada: corresponde a un Hinchey I. El tratamiento es antibióticos (ceftriaxona + metronidazol, endovenosos u orales según la gravedad) y reposo intestinal; el drenaje percutáneo se reserva para los abscesos mayores o a distancia (Hinchey II), y la cirugía urgente (operación de Hartmann) para la peritonitis (Hinchey III–IV). La colonoscopía está contraindicada ahora y se programa a las 6–8 semanas.',
    keyPoints: [
      'Apendicitis: dolor que migra del ombligo a la fosa ilíaca derecha + anorexia; diagnóstico clínico → apendicectomía.',
      'Mujer en edad fértil con dolor abdominal bajo: primero test de embarazo y evaluación ginecológica.',
      'Plastrón apendicular (masa en FID): antibióticos primero y apendicectomía diferida; no es lo mismo que la apendicitis perforada.',
      'Diverticulitis: TAC de abdomen y pelvis; la colonoscopía está contraindicada en el episodio agudo.',
      'Hinchey I–II (absceso) → antibióticos ± drenaje; Hinchey III–IV (peritonitis) → operación de Hartmann.',
      'Fístula colovesical (complicación de la diverticulitis): neumaturia e infecciones urinarias recurrentes.',
    ],
    questions: [
      {
        stem: 'Mujer de 24 años consulta por dolor que comenzó alrededor del ombligo y en 12 horas se localizó en la fosa ilíaca derecha, con náuseas y falta de apetito. Al examen tiene Blumberg positivo en la fosa ilíaca derecha. ¿Cuál es la primera conducta?',
        options: [
          { id: 'A', text: 'Apendicectomía laparoscópica inmediata' },
          { id: 'B', text: 'Test de embarazo y evaluación ginecológica' },
          { id: 'C', text: 'TAC de abdomen y pelvis con contraste' },
          { id: 'D', text: 'Iniciar antibióticos empíricos y observar 24 horas' },
          { id: 'E', text: 'Colonoscopía urgente' },
        ],
        correcta: 'B',
        explicacion: 'En toda mujer en edad fértil con dolor en la fosa ilíaca derecha y sospecha de apendicitis, lo primero es descartar patología ginecológica y, sobre todo, un embarazo ectópico: se solicita test de embarazo y evaluación ginecológica (con ecografía). Recién después se confirma la apendicitis (clínica + ecografía) y se lleva a pabellón. Operar sin este paso puede pasar por alto un ectópico roto.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Mujer de 63 años con diverticulitis aguda. El TAC muestra abundante líquido y aire libre intraperitoneal, con signos de peritonitis fecal difusa. Está febril, taquicárdica e hipotensa. ¿Cuál es la conducta?',
        options: [
          { id: 'A', text: 'Antibióticos endovenosos y reevaluar en 48 horas' },
          { id: 'B', text: 'Drenaje percutáneo guiado por TAC' },
          { id: 'C', text: 'Cirugía de urgencia (operación de Hartmann)' },
          { id: 'D', text: 'Colonoscopía para localizar la perforación' },
          { id: 'E', text: 'Resección sigmoidea laparoscópica con anastomosis primaria diferida' },
        ],
        correcta: 'C',
        explicacion: 'Aire y líquido libre con peritonitis fecal corresponde a un Hinchey IV (perforación libre con contaminación fecal), que junto con el Hinchey III (peritonitis purulenta) es indicación de cirugía de urgencia: resección del sigmoides con colostomía terminal y cierre del muñón rectal (operación de Hartmann), reconstruyendo el tránsito meses después. El manejo médico o percutáneo solo sirve en los abscesos (Hinchey I–II).',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-20', classId: 'gastro-20', tier: 3,
    blockNum: 5, blockName: 'Abdomen Agudo y Urgencias Digestivas',
    topicLabel: '5.2', title: 'Isquemia Mesentérica y Abdomen Agudo de Origen Vascular',
    perfilCode: '1.06.2.001', dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES · urgencia vascular de alta letalidad',
    reconstrucciones: null,
    frecuencia: 'Rentabilidad media-alta · la "disociación clínica" en fibrilación auricular es un escenario recurrente',
    svg: null, algoTitle: 'Dolor abdominal desproporcionado al examen',
    contexto: 'La frase que resuelve la pregunta es "dolor intensísimo con un abdomen que casi no duele al palparlo". Esa disociación entre lo que el paciente refiere y lo que el examinador encuentra, en alguien con fibrilación auricular, es una embolia de la arteria mesentérica superior hasta que se demuestre lo contrario, y hay que anticoagular ante la sola sospecha. La ventana para salvar el intestino es de horas.',
    contentSections: [
      {
        subhead: '1. Embolia de la arteria mesentérica superior',
        paragraphs: [
          'Contexto: fibrilación auricular (u otra fuente cardioembólica). Dolor abdominal de inicio súbito e intensísimo con <strong>disociación clínica</strong>: el abdomen se palpa blando, sin defensa ni Blumberg, en las primeras horas. Puede haber vómitos y diarrea al inicio; luego hematoquecia y, tardíamente, peritonitis por necrosis.',
          'Diagnóstico: angio-TAC (o angiografía, que además puede ser terapéutica). Tratamiento: <strong>anticoagulación con heparina ante la sospecha</strong> + revascularización (embolectomía o trombólisis) + resección del intestino necrótico.',
        ],
      },
      {
        subhead: '2. Trombosis venosa mesentérica',
        paragraphs: [
          'Contexto: estados de hipercoagulabilidad, cirrosis, cirugía abdominal reciente. Dolor subagudo (días), con signos peritoneales más precoces que en la embolia.',
          'Diagnóstico: TAC con contraste (visualiza el trombo en la vena mesentérica). Tratamiento: anticoagulación (es, en esencia, una trombosis venosa); cirugía solo si hay necrosis o perforación.',
        ],
      },
      {
        subhead: '3. Colitis isquémica',
        paragraphs: [
          'La forma más frecuente de isquemia intestinal. Afecta las "zonas frontera" del colon (ángulo esplénico, unión rectosigmoidea). Clínica: dolor cólico en el hemiabdomen izquierdo + hematoquecia, en un adulto mayor con ateroesclerosis o tras un episodio de hipotensión.',
          'Diagnóstico: TAC de abdomen (engrosamiento segmentario del colon); la colonoscopía confirma en casos seleccionados. La mayoría es transitoria y se resuelve con manejo médico (reposo intestinal, hidratación, antibióticos); cirugía solo si hay necrosis, perforación o estenosis.',
        ],
      },
      {
        subhead: '4. Manejo común y diagnóstico diferencial',
        paragraphs: [
          'Las tres comparten: hidratación endovenosa, antibióticos (ceftriaxona + metronidazol) por el riesgo de translocación bacteriana, corrección de la causa y cirugía solo si hay necrosis o perforación.',
          'Diferenciales del dolor abdominal desproporcionado: pancreatitis (lipasa), aneurisma aórtico roto (masa pulsátil, hipotensión, TAC), cetoacidosis diabética, porfiria.',
        ],
      },
    ],
    table: {
      title: 'Abdomen agudo vascular — las tres entidades',
      headers: ['Entidad', 'Inicio / signos peritoneales', 'Contexto', 'Examen'],
      rows: [
        ['Embolia mesentérica', 'Súbito / ausentes al inicio (disociación)', 'Fibrilación auricular', 'Angio-TAC / angiografía'],
        ['Trombosis venosa mesentérica', 'Subagudo (días) / precoces', 'Hipercoagulabilidad, cirrosis', 'TAC con contraste'],
        ['Colitis isquémica', 'Variable / según necrosis', 'Ateroesclerosis, hipotensión previa', 'TAC de abdomen'],
      ],
    },
    vignette: 'Mujer de 76 años con fibrilación auricular no anticoagulada consulta por dolor abdominal de inicio brusco hace 4 horas, de intensidad 10/10, difuso, con dos vómitos y una deposición diarreica. Al examen el abdomen está blando, depresible, levemente sensible de forma difusa, sin defensa ni signo de Blumberg. Está taquicárdica y con lactato elevado.',
    explicacion: 'Dolor abdominal súbito e intensísimo con un examen abdominal casi normal (disociación clínica), en una paciente con fibrilación auricular no anticoagulada y lactato elevado: es una embolia de la arteria mesentérica superior hasta que se demuestre lo contrario. La conducta es anticoagular con heparina de inmediato ante la sospecha, confirmar con angio-TAC y revascularizar; si hay signos de necrosis, laparotomía con resección del segmento comprometido. La ventana terapéutica es de horas.',
    keyPoints: [
      'Embolia mesentérica: fibrilación auricular + dolor súbito e intensísimo + abdomen sin signos peritoneales (disociación clínica).',
      'Ante la sospecha de embolia mesentérica se anticoagula con heparina de inmediato; el examen es la angio-TAC/angiografía.',
      'Trombosis venosa mesentérica: dolor subagudo con signos peritoneales, en hipercoagulables → TAC con contraste + anticoagulación.',
      'Colitis isquémica: dolor en el hemiabdomen izquierdo + hematoquecia en el adulto mayor; suele resolver con manejo médico.',
      'Las tres: hidratación + antibióticos; cirugía solo si hay necrosis o perforación.',
    ],
    questions: [
      {
        stem: 'Hombre de 70 años con antecedente de ateroesclerosis, tras un episodio de hipotensión por una hemorragia digestiva, presenta dolor cólico en el flanco izquierdo y elimina deposiciones con sangre roja. El abdomen está sensible en el flanco izquierdo, sin peritonismo. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Embolia de la arteria mesentérica superior' },
          { id: 'B', text: 'Trombosis venosa mesentérica' },
          { id: 'C', text: 'Colitis isquémica' },
          { id: 'D', text: 'Diverticulitis aguda' },
          { id: 'E', text: 'Enfermedad de Crohn' },
        ],
        correcta: 'C',
        explicacion: 'Dolor en el hemiabdomen izquierdo con hematoquecia en un adulto mayor con ateroesclerosis, precipitado por un episodio de hipotensión (bajo flujo), es característico de la colitis isquémica, que afecta las zonas frontera de irrigación del colon (ángulo esplénico, rectosigmoides). Suele ser transitoria y responde al manejo médico. La embolia mesentérica da dolor mucho más intenso y difuso, con disociación clínica, en el contexto de fibrilación auricular.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Paciente de 72 años con fibrilación auricular presenta dolor abdominal súbito y muy intenso. El examen abdominal es prácticamente normal, sin defensa ni Blumberg. ¿Cuál es el examen diagnóstico de elección?',
        options: [
          { id: 'A', text: 'TAC de abdomen sin contraste' },
          { id: 'B', text: 'Ecografía abdominal' },
          { id: 'C', text: 'Angio-TAC (o angiografía) mesentérica' },
          { id: 'D', text: 'Radiografía de abdomen simple' },
          { id: 'E', text: 'Colonoscopía urgente' },
        ],
        correcta: 'C',
        explicacion: 'La sospecha es una embolia mesentérica (fibrilación auricular + dolor súbito intenso + disociación clínica). El examen de elección es el angio-TAC, que muestra el defecto de llene en la arteria mesentérica superior; la angiografía formal se usa cuando además se planea un tratamiento endovascular. El TAC sin contraste y la radiografía simple no muestran el émbolo y hacen perder tiempo valioso.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-21', classId: 'gastro-21', tier: 3,
    blockNum: 5, blockName: 'Abdomen Agudo y Urgencias Digestivas',
    topicLabel: '5.3', title: 'Hemorragia Digestiva Alta y Baja',
    perfilCode: '1.06.2.007', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · urgencia de manejo hospitalario según Norma MINSAL',
    reconstrucciones: null,
    frecuencia: 'Alta rentabilidad · dos errores clásicos: esperar el hematocrito y olvidar la regla del 10 %',
    svg: null, algoTitle: 'Sangrado digestivo: estabilizar primero',
    contexto: 'Dos errores anulan la respuesta. El primero: esperar el hematocrito para decidir. Al inicio de un sangrado agudo el hematocrito es normal, porque se pierde sangre completa; la gravedad la marca la hemodinamia (taquicardia → ortostatismo → hipotensión). El segundo: olvidar que el 10 % de las hemorragias que parecen bajas son en realidad altas con tránsito rápido, así que si la colonoscopía urgente no encuentra la causa, el siguiente paso es una endoscopía alta.',
    contentSections: [
      {
        subhead: '1. Definiciones y clínica',
        paragraphs: [
          'La hemorragia digestiva alta se origina proximal al ángulo de Treitz (esófago, estómago, duodeno): hematemesis y melena (deposición negra, alquitranada; requiere ≥ 8 h de tránsito). La hemorragia digestiva baja es distal al Treitz: hematoquecia y rectorragia.',
          'La hematoquecia puede aparecer también en una HDA masiva con tránsito acelerado.',
        ],
      },
      {
        subhead: '2. Gravedad y manejo inicial (común a alta y baja)',
        paragraphs: [
          'La gravedad se mide por el <strong>compromiso hemodinámico, no por el hematocrito</strong> (que al inicio es normal): taquicardia (lo más precoz) → ortostatismo → hipotensión (shock).',
          'Manejo: dos vías venosas gruesas + cristaloides (suero fisiológico o Ringer). La transfusión no es la reanimación inicial: se reserva para la anemia persistente tras la reposición o el sangrado masivo. Una vez estabilizado → endoscopía / colonoscopía diagnóstica y terapéutica.',
        ],
      },
      {
        subhead: '3. Hemorragia digestiva alta: causas',
        paragraphs: [
          'Várices esofágicas: cirrótico, hemorragia masiva; agregar terlipresina + antibióticos (profilaxis de PBE) + tiamina si es alcohólico; ligadura endoscópica.',
          'Úlcera gastroduodenal: síndrome ulceroso previo, melena; agregar IBP endovenoso en dosis alta + terapia endoscópica (según la clasificación de Forrest); erradicar H. pylori. Mallory-Weiss: vómitos alimentarios → luego hematemesis; suele ser autolimitado y de buen pronóstico.',
        ],
      },
      {
        subhead: '4. Hemorragia digestiva baja: causas y algoritmo',
        paragraphs: [
          'Causas: enfermedad diverticular (la causa más frecuente de HDB masiva), angiodisplasias (adulto mayor), cáncer de colon, hemorroides internas; divertículo de Meckel en el niño.',
          '<strong>No masiva (estable):</strong> preparación de colon → colonoscopía en 24 h. <strong>Masiva (inestable):</strong> colonoscopía urgente → si no localiza, endoscopía digestiva alta ("regla del 10 %") → angio-TAC/angiografía (puede embolizar) → cintigrafía con glóbulos rojos marcados para sangrados lentos → cirugía (habitualmente hemicolectomía derecha) si todo falla y el paciente sigue inestable.',
        ],
      },
    ],
    table: {
      title: 'Hemorragia digestiva alta — causa y tratamiento específico',
      headers: ['Causa', 'Pista clínica', 'Además del suero y la endoscopía'],
      rows: [
        ['Várices esofágicas', 'Cirrótico, sangrado masivo, protrombina baja', 'Terlipresina + antibióticos + tiamina'],
        ['Úlcera gastroduodenal', 'Síndrome ulceroso previo, melena', 'IBP endovenoso en dosis alta; erradicar H. pylori'],
        ['Mallory-Weiss', 'Vómitos alimentarios y luego hematemesis', 'Suele ser autolimitado; observar si está estable'],
        ['Lesión de Dieulafoy / angiodisplasia', 'Sangrado recurrente sin lesión evidente', 'Hemostasia endoscópica'],
      ],
    },
    vignette: 'Hombre de 55 años con cirrosis por alcohol llega por vómito de abundante sangre roja. Está pálido y sudoroso, con frecuencia cardíaca de 120/min y presión arterial de 85/50 mmHg. El hematocrito informado es de 38 %.',
    explicacion: 'Hemorragia digestiva alta con compromiso hemodinámico (taquicardia e hipotensión) en un cirrótico: lo más probable es una hemorragia variceal. La gravedad la define la hemodinamia, no el hematocrito, que al inicio puede estar normal porque se pierde sangre completa. La conducta es reanimación con dos vías gruesas y cristaloides, terlipresina endovenosa, antibióticos (profilaxis de peritonitis bacteriana espontánea), tiamina y endoscopía digestiva alta con ligadura en las primeras 12 horas.',
    keyPoints: [
      'La gravedad de una hemorragia digestiva se mide por la hemodinamia (taquicardia → ortostatismo → hipotensión), no por el hematocrito.',
      'Reanimación inicial: dos vías gruesas + cristaloides. La transfusión no es el primer paso.',
      'Várices: terlipresina + antibióticos + tiamina + ligadura. Úlcera: IBP endovenoso + terapia endoscópica.',
      'Mallory-Weiss (vómitos y luego hematemesis): buen pronóstico, suele ser autolimitado.',
      'HDB masiva que no se localiza en la colonoscopía → endoscopía digestiva alta (10 % son en realidad altas).',
      'Causa más frecuente de HDB masiva: enfermedad diverticular. En el niño, divertículo de Meckel.',
    ],
    questions: [
      {
        stem: 'Al momento de la presentación de una hemorragia digestiva alta, ¿cuál de los siguientes parámetros determina mejor la gravedad del cuadro?',
        options: [
          { id: 'A', text: 'El hematocrito' },
          { id: 'B', text: 'La hemoglobina' },
          { id: 'C', text: 'La frecuencia cardíaca y la presión arterial' },
          { id: 'D', text: 'El volumen estimado de la hematemesis' },
          { id: 'E', text: 'El recuento de plaquetas' },
        ],
        correcta: 'C',
        explicacion: 'En el sangrado agudo se pierde sangre completa (plasma y glóbulos rojos en proporción), por lo que el hematocrito inicial suele ser normal y solo cae horas después, cuando el líquido intersticial diluye la masa eritrocitaria. La gravedad al momento de la presentación la marca el compromiso hemodinámico: taquicardia (lo más precoz), ortostatismo y, finalmente, hipotensión. Nunca se debe esperar el hematocrito para iniciar la reanimación.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Paciente de 68 años con hemorragia digestiva baja masiva e inestabilidad hemodinámica. Se realiza una colonoscopía urgente que, por la abundante sangre, no logra identificar el sitio del sangrado. ¿Cuál es el siguiente paso?',
        options: [
          { id: 'A', text: 'Repetir la colonoscopía tras una nueva preparación' },
          { id: 'B', text: 'Endoscopía digestiva alta' },
          { id: 'C', text: 'TAC de abdomen sin contraste' },
          { id: 'D', text: 'Laparotomía exploradora inmediata' },
          { id: 'E', text: 'Alta con control ambulatorio en 48 horas' },
        ],
        correcta: 'B',
        explicacion: 'Cerca del 10 % de las hemorragias que se manifiestan como hematoquecia tienen en realidad un origen alto (HDA masiva con tránsito acelerado). Por eso, si la colonoscopía urgente no localiza el sangrado en un paciente inestable, el siguiente paso es la endoscopía digestiva alta. Si tampoco la localiza, se continúa con angio-TAC/angiografía (que puede ser terapéutica) y, en último término, cirugía.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-22', classId: 'gastro-22', tier: 2,
    blockNum: 5, blockName: 'Abdomen Agudo y Urgencias Digestivas',
    topicLabel: '5.4', title: 'Cuerpo Extraño Digestivo',
    perfilCode: '1.06.2.002', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica',
    reconstrucciones: null,
    frecuencia: 'Rentabilidad media · lista fija de objetos que se retiran siempre, esté donde esté el cuerpo extraño',
    svg: null, algoTitle: 'Cuerpo extraño ingerido: retirar u observar',
    contexto: 'La regla es sencilla. En el esófago se retira siempre por endoscopía (riesgo de perforación y mediastinitis). Pasado el esófago, se puede observar si es un objeto romo y pequeño y el niño está bien, con radiografías cada dos semanas. Pero hay una lista que se saca siempre esté donde esté: pilas de botón, dos o más imanes, objetos afilados o mayores de 5 cm, y las bolitas absorbentes. El dolor torácico con un cuerpo extraño esofágico es perforación hasta que se demuestre lo contrario.',
    contentSections: [
      {
        subhead: '1. Evaluación inicial',
        paragraphs: [
          'Ante la sospecha de ingesta de un cuerpo extraño: radiografía de cuello, tórax y abdomen para localizarlo (los objetos radiolúcidos, como el plástico o las espinas de pescado, pueden no verse).',
          'Síntomas de alarma con cuerpo extraño esofágico: sialorrea (no logra tragar la saliva), odinofagia y, sobre todo, <strong>dolor torácico</strong> → sospechar perforación y mediastinitis.',
        ],
      },
      {
        subhead: '2. Cuerpo extraño en el esófago',
        paragraphs: [
          'Se retira siempre por endoscopía digestiva alta, de forma urgente si hay obstrucción completa (sialorrea, no traga saliva), si es una pila o un objeto afilado, o si lleva &gt; 24 h impactado.',
          'Una <strong>pila de botón</strong> en el esófago es una emergencia: genera quemadura eléctrica y necrosis en pocas horas → extracción inmediata.',
        ],
      },
      {
        subhead: '3. Cuerpo extraño más allá del esófago',
        paragraphs: [
          'Objeto romo, pequeño, paciente asintomático: se observa con control radiológico cada 1–2 semanas hasta que se elimine (no hay que buscarlo en las deposiciones).',
          'Se retira siempre, esté donde esté: pilas, ≥ 2 imanes (se atraen entre asas y producen necrosis y perforación), objetos afilados o &gt; 5 cm, y las bolitas de polímero absorbente (se expanden con el agua y obstruyen).',
        ],
      },
      {
        subhead: '4. Comida impactada y complicaciones',
        paragraphs: [
          'Alimento impactado en el esófago: si el paciente puede tragar líquidos y no tiene dolor → observar hasta 24 h. Si no traga líquidos, tiene dolor o lleva &gt; 24 h → endoscopía para desimpactar. Tras el episodio conviene estudiar el esófago (esofagitis eosinofílica, estenosis, anillo).',
          'Si un cuerpo extraño distal produce obstrucción intestinal o perforación, el tratamiento es quirúrgico. No se debe hacer la maniobra de Heimlich por un cuerpo extraño digestivo (solo se usa en la obstrucción completa de la vía aérea).',
        ],
      },
    ],
    table: {
      title: 'Cuerpo extraño digestivo — ¿retirar u observar?',
      headers: ['Situación', 'Conducta'],
      rows: [
        ['Cualquier cuerpo extraño en el esófago', 'Retiro endoscópico (urgente si obstrucción, pila o afilado)'],
        ['Pila de botón en el esófago', 'Emergencia: extracción inmediata'],
        ['Objeto romo y pequeño, ya en el estómago, asintomático', 'Observar + radiografía cada 1–2 semanas'],
        ['Pilas, ≥ 2 imanes, objeto afilado o > 5 cm, bolitas absorbentes', 'Retirar siempre, en cualquier ubicación'],
        ['Alimento impactado, tolera líquidos y sin dolor', 'Observar hasta 24 h'],
        ['Alimento impactado con dolor o sin tragar líquidos', 'Endoscopía para desimpactar'],
      ],
    },
    vignette: 'Niño de 2 años es llevado a urgencias porque hace una hora tragó una pila de botón del control remoto. Está asintomático. La radiografía de tórax muestra la pila a nivel del esófago medio, con el signo del "doble halo".',
    explicacion: 'Una pila de botón alojada en el esófago es una emergencia médica: el paso de corriente y la hidrólisis generan una quemadura alcalina de la pared en cuestión de horas, con riesgo de perforación, fístula traqueoesofágica y mediastinitis. La conducta es la extracción endoscópica inmediata, sin esperar. Si la pila ya hubiera pasado al estómago y el niño estuviera asintomático, igual se retira (las pilas se sacan en cualquier ubicación), pero sin el mismo carácter de emergencia.',
    keyPoints: [
      'Sospecha de cuerpo extraño digestivo: radiografía de cuello, tórax y abdomen.',
      'En el esófago se retira siempre por endoscopía; el dolor torácico sugiere perforación.',
      'Pila de botón en el esófago = emergencia (quemadura en horas) → extracción inmediata.',
      'Se retira en cualquier ubicación: pilas, ≥ 2 imanes, objetos afilados o > 5 cm, bolitas absorbentes.',
      'Objeto romo y pequeño ya en el estómago, asintomático: observar con radiografías cada 1–2 semanas.',
      'Alimento impactado: observar 24 h si tolera líquidos y no duele; endoscopía si no traga o tiene dolor.',
    ],
    questions: [
      {
        stem: 'Hombre de 45 años consulta por sensación de cuerpo extraño retroesternal tras comer un trozo grande de carne hace 6 horas. Tiene dolor retroesternal y no consigue tragar ni siquiera su saliva. ¿Cuál es la conducta?',
        options: [
          { id: 'A', text: 'Observación por 24 horas' },
          { id: 'B', text: 'Radiografía de tórax y control en 12 horas' },
          { id: 'C', text: 'Endoscopía digestiva alta para desimpactar' },
          { id: 'D', text: 'Bebida carbonatada y enzimas proteolíticas para disolver la carne' },
          { id: 'E', text: 'TAC de tórax con contraste' },
        ],
        correcta: 'C',
        explicacion: 'La comida impactada en el esófago con dolor e incapacidad de tragar la saliva (obstrucción esofágica completa) requiere endoscopía digestiva alta para retirarla, sin demora, por el riesgo de aspiración y de perforación. Solo se puede observar hasta 24 horas cuando el paciente está sin dolor y tolera líquidos. Tras resolver el episodio conviene estudiar el esófago (esofagitis eosinofílica, estenosis, anillo de Schatzki).',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Niño de 5 años se tragó una moneda hace 3 horas. Está asintomático, sin sialorrea ni dificultad para tragar. La radiografía muestra la moneda en la cámara gástrica. ¿Cuál es la conducta más apropiada?',
        options: [
          { id: 'A', text: 'Endoscopía digestiva alta urgente' },
          { id: 'B', text: 'Laparotomía para extraer la moneda' },
          { id: 'C', text: 'Observación con control radiológico cada 1–2 semanas' },
          { id: 'D', text: 'Administrar un laxante para acelerar el tránsito' },
          { id: 'E', text: 'Maniobra de Heimlich' },
        ],
        correcta: 'C',
        explicacion: 'Una moneda (objeto romo, no cáustico, no magnético) que ya pasó el esófago y está en el estómago, en un niño asintomático, se maneja con observación y control radiológico cada 1–2 semanas: la gran mayoría se elimina espontáneamente sin complicaciones. La endoscopía se reservaría si el objeto no progresa en 3–4 semanas o si aparecen síntomas. Solo las pilas, los imanes múltiples y los objetos afilados o largos se retiran aunque estén en el estómago.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  /* ═══════════════════════ BLOQUE 06 · GASTROENTEROLOGÍA Y CIRUGÍA PEDIÁTRICA ═══════════════════════ */
  {
    id: 'gastro-23', classId: 'gastro-23', tier: 2,
    blockNum: 6, blockName: 'Gastroenterología y Cirugía Pediátrica',
    topicLabel: '6.1', title: 'Diarrea Aguda y Crónica en el Niño',
    perfilCode: '1.06.2.005', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Norma MINSAL de manejo de la diarrea aguda del lactante',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Rentabilidad media · plan de hidratación pediátrico y descartar giardiasis antes que celíaca',
    svg: null, algoTitle: 'Diarrea del niño',
    contexto: 'En la diarrea aguda del niño casi todo es rotavirus y casi todo se resuelve hidratando por boca; el error clásico es indicar loperamida (contraindicada) o un antibiótico que no cambia el curso. En la diarrea crónica del lactante, la causa más frecuente es la más simple: demasiado jugo. Y hay dos cuadros que "imitan" a la celíaca y hay que descartar antes: la giardiasis y la alergia a la proteína de leche de vaca.',
    contentSections: [
      {
        subhead: '1. Diarrea aguda: hidratación',
        paragraphs: [
          'Mayoritariamente viral (rotavirus). El pilar es la hidratación según el grado de deshidratación: <strong>Plan A</strong> (sin deshidratación): sales de rehidratación oral 100–200 mL tras cada deposición, en casa. <strong>Plan B</strong> (deshidratación moderada, 5–10 %): SRO 50–100 mL/kg en 4–6 h; fraccionar si vomita.',
          '<strong>Plan C</strong> (deshidratación grave &gt; 10 %, shock, compromiso de conciencia, íleo, vómitos incoercibles): suero fisiológico endovenoso en bolo de 20 mL/kg; vía intraósea si no se logra acceso venoso.',
        ],
      },
      {
        subhead: '2. Diarrea aguda: fármacos',
        paragraphs: [
          'Los antidiarreicos están <strong>contraindicados</strong> en la diarrea aguda pediátrica. Se pueden usar antieméticos si hay vómitos.',
          'Antibiótico solo ante Shigella o E. coli enteroinvasora (disentería + fiebre alta + mal estado general): ciprofloxacino oral (excepción a la regla de no usar quinolonas en niños); cefotaximo endovenoso si hay sepsis. La <strong>Salmonella no tifoidea no complicada no se trata</strong> (prolonga el estado de portador).',
        ],
      },
      {
        subhead: '3. Diarrea crónica del lactante y preescolar',
        paragraphs: [
          '<strong>Diarrea crónica inespecífica</strong> (la más frecuente): por exceso de jugos azucarados/hiperosmolares; el niño crece bien y está sano → suspender los jugos.',
          '<strong>Giardiasis:</strong> preescolar de zona rural, con flatulencia y dolor cólico, a menudo varios miembros de la familia afectados; puede dar malabsorción. Diagnóstico: parasitológico seriado (3 muestras). Tratamiento: tinidazol o metronidazol. <strong>Siempre descartar Giardia antes de diagnosticar celíaca.</strong>',
        ],
      },
      {
        subhead: '4. Celíaca, fibrosis quística y alergia a la proteína de leche de vaca',
        paragraphs: [
          'Enfermedad celíaca: desde el año de vida (con la introducción del gluten); malabsorción + anemia ferropénica + anticuerpos anti-transglutaminasa → biopsia duodenal; dieta sin gluten de por vida. Fibrosis quística: diarrea con esteatorrea (insuficiencia pancreática) + neumonías recurrentes (Pseudomonas, S. aureus) → test del sudor (cloro ≥ 60 mmol/L confirma).',
          'Alergia a la proteína de leche de vaca: lactante con síntomas gastrointestinales (diarrea crónica, reflujo, sangre en las deposiciones, lesiones perianales) y alérgicos (exantema, sibilancias). Diagnóstico por prueba terapéutica: fórmula extensamente hidrolizada (o dieta materna sin lácteos) por 2–4 semanas → mejora → se reintroduce y reaparecen los síntomas = confirmado. No hay test sanguíneo validado.',
        ],
      },
    ],
    table: {
      title: 'Diarrea crónica del lactante — orientación diagnóstica',
      headers: ['Causa', 'Pista clínica', 'Estudio / conducta'],
      rows: [
        ['Diarrea crónica inespecífica', 'Niño sano que crece bien; bebe muchos jugos', 'Clínico → suspender jugos'],
        ['Giardiasis', 'Zona rural, flatulencia, varios familiares afectados', 'Parasitológico seriado → tinidazol'],
        ['Enfermedad celíaca', 'Malabsorción + anemia ferropénica desde el año', 'Anti-transglutaminasa + biopsia duodenal'],
        ['Fibrosis quística', 'Esteatorrea + neumonías recurrentes', 'Test del sudor'],
        ['Alergia a la proteína de leche de vaca', 'Síntomas GI + alérgicos en el lactante', 'Prueba terapéutica con fórmula hidrolizada'],
      ],
    },
    vignette: 'Lactante de 10 meses con diarrea acuosa de 3 días, sin sangre. Al examen está irritable, llora sin lágrimas, tiene las mucosas secas y los ojos hundidos, y ha perdido el 7 % de su peso. Bebe con avidez pequeñas cantidades de líquido que se le ofrecen.',
    explicacion: 'Deshidratación moderada (7 % de pérdida de peso, mucosas secas, ojos hundidos, llanto sin lágrimas) por una diarrea aguda sin disentería: corresponde el Plan B, con sales de rehidratación oral 50–100 mL/kg en 4–6 horas, reevaluando. Como tolera la vía oral, no requiere suero endovenoso. No se indican antibióticos (no hay disentería ni fiebre alta persistente) y los antidiarreicos están contraindicados en pediatría.',
    keyPoints: [
      'Diarrea aguda del niño: hidratar según el grado (Plan A oral / B SRO 50–100 mL/kg / C suero fisiológico 20 mL/kg en bolo).',
      'Antidiarreicos contraindicados en pediatría; antibiótico solo en disentería por Shigella o E. coli enteroinvasora (ciprofloxacino).',
      'Salmonella no tifoidea no complicada: no se trata con antibióticos (prolonga el estado de portador).',
      'Diarrea crónica del lactante más frecuente: diarrea crónica inespecífica por jugos hiperosmolares → suspender jugos.',
      'Siempre descartar giardiasis antes de diagnosticar enfermedad celíaca.',
      'Alergia a la proteína de leche de vaca: diagnóstico por prueba terapéutica con reintroducción; no hay test sanguíneo validado.',
    ],
    questions: [
      {
        stem: 'Preescolar de 4 años de una zona rural consulta por diarrea crónica de 2 meses, con abundante flatulencia y dolor abdominal tipo cólico. Dos hermanos tienen síntomas similares. Crece en un percentil bajo pero estable. ¿Cuál es el diagnóstico más probable y su tratamiento?',
        options: [
          { id: 'A', text: 'Diarrea crónica inespecífica; suspender los jugos' },
          { id: 'B', text: 'Enfermedad celíaca; dieta sin gluten' },
          { id: 'C', text: 'Giardiasis; tinidazol (o metronidazol)' },
          { id: 'D', text: 'Fibrosis quística; enzimas pancreáticas' },
          { id: 'E', text: 'Alergia a la proteína de leche de vaca; fórmula hidrolizada' },
        ],
        correcta: 'C',
        explicacion: 'Diarrea crónica con flatulencia y dolor cólico en un preescolar de zona rural, con varios convivientes afectados, es muy sugerente de giardiasis. Se confirma con parasitológico seriado (3 muestras en días distintos) y se trata con tinidazol o metronidazol. La giardiasis puede producir un síndrome de malabsorción idéntico al de la celíaca, por lo que siempre debe descartarse antes de ese diagnóstico.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Lactante de 4 meses alimentado con fórmula presenta diarrea crónica con estrías de sangre, reflujo y episodios de exantema y sibilancias. El incremento ponderal está enlentecido. ¿Cuál es el estudio diagnóstico más apropiado?',
        options: [
          { id: 'A', text: 'Test del sudor' },
          { id: 'B', text: 'Anticuerpos anti-transglutaminasa' },
          { id: 'C', text: 'Prueba terapéutica con fórmula extensamente hidrolizada por 2–4 semanas y posterior reintroducción' },
          { id: 'D', text: 'Parasitológico seriado de deposiciones' },
          { id: 'E', text: 'Endoscopía digestiva alta con biopsias' },
        ],
        correcta: 'C',
        explicacion: 'Un lactante con síntomas gastrointestinales (diarrea con sangre, reflujo, mal incremento) y alérgicos (exantema, sibilancias) sugiere alergia a la proteína de leche de vaca. El diagnóstico se hace con prueba terapéutica: se cambia a fórmula extensamente hidrolizada (o de aminoácidos) por 2–4 semanas y, si mejora, se reintroduce la proteína de leche de vaca; la reaparición de los síntomas confirma el diagnóstico. No existe un test sanguíneo validado para esta condición.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-24', classId: 'gastro-24', tier: 2,
    blockNum: 6, blockName: 'Gastroenterología y Cirugía Pediátrica',
    topicLabel: '6.2', title: 'Reflujo del Lactante, Dolor Abdominal Crónico y Constipación en el Niño',
    perfilCode: '1.06.1.027', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Rentabilidad media · el orden desimpactar-antes-de-mantener se pregunta con frecuencia',
    svg: null, algoTitle: 'Reflujo, dolor abdominal y constipación en el niño',
    contexto: 'El reflujo del lactante se decide con una pregunta: ¿es un "lactante feliz" que crece bien? Entonces es fisiológico y solo hay que tranquilizar. Si hay mal incremento de peso, síntomas respiratorios o sangre, es patológico y se trata. En la constipación con fecaloma el orden es obligatorio: primero se desimpacta (polietilenglicol oral) y después se mantiene con laxantes por semanas; si se salta la desimpactación, el fecaloma no sale y todo empeora.',
    contentSections: [
      {
        subhead: '1. Reflujo gastroesofágico del lactante',
        paragraphs: [
          '<strong>Fisiológico:</strong> "lactante feliz", regurgita pero crece bien y tiene el examen normal. Pico a los 2–6 meses, desaparece hacia el año-año y medio. Conducta: educar y tranquilizar, medidas posturales, fraccionar la alimentación.',
          '<strong>Patológico:</strong> mal incremento ponderal, irritabilidad, rechazo alimentario, síntomas respiratorios (sibilancias, neumonías), hematemesis o episodios de aparente amenaza a la vida. Estudio (pH-metría/impedanciometría si hay duda) y tratamiento con <strong>IBP (omeprazol)</strong> como primera línea; la cirugía (funduplicatura) es la última opción.',
        ],
      },
      {
        subhead: '2. Diferencial: estenosis hipertrófica del píloro',
        paragraphs: [
          'Vómitos explosivos y proyectivos que aparecen entre la 2.ª y la 6.ª semana de vida (no desde el nacimiento), en un lactante ávido por comer, con deshidratación y alcalosis metabólica hipoclorémica e hipopotasémica.',
          'Diagnóstico: ecografía abdominal (píloro engrosado, "oliva pilórica"). Tratamiento: corregir la hidratación y los electrolitos y luego pilorotomía de Ramstedt. Si en lugar de alcalosis hay acidosis con hiperpotasemia, pensar en hiperplasia suprarrenal congénita.',
        ],
      },
      {
        subhead: '3. Dolor abdominal crónico en el niño',
        paragraphs: [
          'Con signos de alarma (baja de peso, examen alterado, vómitos o sangre, fiebre recurrente, dolor que despierta): estudiar con exámenes e imágenes según la orientación.',
          'Sin signos de alarma: lo más frecuente es el <strong>dolor abdominal funcional</strong> (psicógeno), periumbilical, que aumenta con el estrés escolar y cede en vacaciones y fines de semana. Tratamiento: explicar, tranquilizar y manejar el estrés; no hacen falta exámenes si el examen físico es normal.',
        ],
      },
      {
        subhead: '4. Constipación y fecaloma',
        paragraphs: [
          'Constipación funcional: &lt; 3 deposiciones por semana, duras y dolorosas, con un círculo vicioso (dolor → retención → más constipación). El fecaloma es la causa más frecuente de masa abdominal en pediatría y produce encopresis y pseudoincontinencia (rebosamiento). Diagnóstico: examen abdominal y tacto rectal (con testigo y registro).',
          'Manejo en dos fases en orden: (1) <strong>desimpactación con polietilenglicol oral</strong> (de elección), o enema; (2) mantenimiento con laxante osmótico por al menos 4 semanas + hábito de sentarse tras las comidas + fibra y agua. Siempre descartar organicidad (enfermedad de Hirschsprung si hubo retraso en la eliminación del meconio).',
        ],
      },
    ],
    table: {
      title: 'Reflujo del lactante: fisiológico vs patológico',
      headers: ['Rasgo', 'Fisiológico', 'Patológico'],
      rows: [
        ['Estado del lactante', '"Lactante feliz"', 'Irritable, rechazo alimentario'],
        ['Incremento ponderal', 'Normal', 'Enlentecido o descenso'],
        ['Síntomas respiratorios / sangre', 'Ausentes', 'Presentes'],
        ['Conducta', 'Educar y tranquilizar', 'Estudiar + IBP (omeprazol)'],
      ],
    },
    vignette: 'Lactante de 3 meses alimentado al pecho, traído por regurgitaciones después de casi todas las mamadas. Está tranquilo y sonriente, con un incremento de peso adecuado para su edad y un examen físico normal. Los padres están angustiados y piden "algo para el reflujo".',
    explicacion: 'Es un reflujo gastroesofágico fisiológico del lactante: un "lactante feliz" que regurgita pero crece bien y tiene el examen normal. La conducta es educar y tranquilizar a los padres, explicar que el pico es entre los 2 y 6 meses y que se resuelve espontáneamente hacia el año, junto con medidas posturales y fraccionamiento de las tomas. No se indican inhibidores de la bomba de protones ni procinéticos ni estudios, que se reservan para el reflujo patológico (mal incremento, síntomas respiratorios, sangrado).',
    keyPoints: [
      'Reflujo del lactante fisiológico = "lactante feliz" que crece bien → educar y tranquilizar, sin fármacos.',
      'Reflujo patológico (mal incremento, síntomas respiratorios, sangre): IBP (omeprazol) de primera línea.',
      'Vómitos explosivos entre la 2.ª y 6.ª semana + alcalosis hipoclorémica = estenosis hipertrófica del píloro → ecografía → pilorotomía de Ramstedt.',
      'Dolor abdominal crónico sin signos de alarma: funcional/psicógeno, periumbilical, ligado al estrés escolar.',
      'El fecaloma es la causa más frecuente de masa abdominal en pediatría (encopresis, pseudoincontinencia).',
      'Constipación con fecaloma: primero desimpactar (polietilenglicol oral), después mantener con laxante ≥ 4 semanas.',
    ],
    questions: [
      {
        stem: 'Recién nacido de 4 semanas, previamente sano, con 5 días de vómitos explosivos posprandiales. Se muestra ávido por alimentarse. Al examen tiene signos de deshidratación; en el laboratorio destaca hipopotasemia y alcalosis metabólica. ¿Cuál es el examen diagnóstico más apropiado?',
        options: [
          { id: 'A', text: 'pH-metría esofágica de 24 horas' },
          { id: 'B', text: 'Radiografía de abdomen simple' },
          { id: 'C', text: 'Ecografía abdominal' },
          { id: 'D', text: 'Endoscopía digestiva alta' },
          { id: 'E', text: 'TAC de abdomen' },
        ],
        correcta: 'C',
        explicacion: 'Vómitos explosivos y proyectivos que comienzan entre la 2.ª y la 6.ª semana de vida, en un lactante hambriento, con deshidratación y alcalosis metabólica hipoclorémica e hipopotasémica (por la pérdida de ácido clorhídrico en los vómitos), son característicos de la estenosis hipertrófica del píloro. El diagnóstico se confirma con ecografía abdominal, que muestra el músculo pilórico engrosado. El tratamiento es la corrección hidroelectrolítica seguida de la pilorotomía de Ramstedt.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Niño de 5 años con constipación crónica presenta dolor abdominal y manchado fecal en la ropa interior. Al examen se palpa una masa en el hipogastrio y, al tacto rectal, una gran masa fecal dura en la ampolla rectal. ¿Cuál es el tratamiento inicial?',
        options: [
          { id: 'A', text: 'Dieta rica en fibra y aumento de la ingesta de agua' },
          { id: 'B', text: 'Polietilenglicol por vía oral para desimpactar' },
          { id: 'C', text: 'Extracción digital del fecaloma bajo sedación' },
          { id: 'D', text: 'Laxantes osmóticos en dosis de mantenimiento de forma indefinida' },
          { id: 'E', text: 'Derivación quirúrgica' },
        ],
        correcta: 'B',
        explicacion: 'Antes de cualquier medida de mantenimiento hay que desimpactar el fecaloma, y el tratamiento de elección para la desimpactación es el polietilenglicol por vía oral (alternativa: enema). El manchado fecal es pseudoincontinencia por rebosamiento alrededor del fecaloma. La dieta y los laxantes de mantenimiento (fase 2) recién se inician una vez vaciado el recto; la extracción digital se reserva para casos excepcionales.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-25', classId: 'gastro-25', tier: 3,
    blockNum: 6, blockName: 'Gastroenterología y Cirugía Pediátrica',
    topicLabel: '6.3', title: 'Cirugía Pediátrica Digestiva: Urgencias y Malformaciones',
    perfilCode: null, dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Rentabilidad media · cada entidad tiene una imagen-clave única que resuelve la pregunta',
    svg: null, algoTitle: 'Urgencias quirúrgicas digestivas del RN y el lactante',
    contexto: 'Este tema se estudia por sus imágenes-clave, una por diagnóstico. Neumatosis intestinal en un prematuro = enterocolitis necrotizante. Lactante de 6–12 meses con llanto en crisis y deposiciones "en mermelada de grosella" = invaginación. Sangrado rectal indoloro y abundante en un niño sano = divertículo de Meckel. Doble burbuja en el recién nacido que vomita desde el primer día = atresia duodenal. Meconio que no sale en 48 horas = enfermedad de Hirschsprung.',
    contentSections: [
      {
        subhead: '1. Enterocolitis necrotizante',
        paragraphs: [
          'Recién nacido prematuro (factor de riesgo principal), en los primeros días-semanas, con tríada: retención gástrica/vómitos + distensión abdominal + hematoquecia.',
          'Diagnóstico: radiografía de abdomen → <strong>neumatosis intestinal</strong> (aire en la pared, patognomónico); el neumoperitoneo indica perforación. Tratamiento: régimen cero + nutrición parenteral + antibióticos endovenosos; cirugía solo si hay perforación, necrosis o falla del tratamiento médico.',
        ],
      },
      {
        subhead: '2. Invaginación intestinal',
        paragraphs: [
          'Lactante de 6–12 meses, previamente sano, con crisis de llanto e hiperflexión de las piernas que van y vienen, y deposiciones "en mermelada de grosella" (sangre y moco). A veces masa palpable "en salchicha".',
          'Diagnóstico: ecografía abdominal ("signo de la dona" o del "donut"). Tratamiento de primera línea: <strong>reducción neumática</strong> (o hidrostática) guiada por imagen; la cirugía es la última opción (si falla la reducción, hay perforación o hay una causa anatómica).',
        ],
      },
      {
        subhead: '3. Divertículo de Meckel y pólipos juveniles',
        paragraphs: [
          'Divertículo de Meckel: resto del conducto onfalomesentérico en el íleon, con mucosa gástrica ectópica que ulcera y sangra. Se presenta como hemorragia digestiva baja indolora y abundante en un niño pequeño, o como una diverticulitis que imita la apendicitis. Diagnóstico: <strong>cintigrafía con pertecnetato de Tc-99m</strong>. Regla de los "2": 2 % de la población, a 2 pies de la válvula ileocecal, 2 pulgadas de largo, hacia los 2 años.',
          'Pólipos juveniles: escolar sano con rectorragia escasa e intermitente; hamartomas benignos. Diagnóstico y tratamiento: colonoscopía con polipectomía.',
        ],
      },
      {
        subhead: '4. Malformaciones que obstruyen',
        paragraphs: [
          'Atresia duodenal: vómitos biliosos desde el primer día; radiografía con "doble burbuja"; asociada a síndrome de Down. Atresia esofágica: sialorrea desde el nacimiento y sonda que no progresa al estómago. Hernia diafragmática congénita: dificultad respiratoria grave + abdomen excavado + ruidos hidroaéreos en el tórax → lo urgente es intubar y ventilar, la cirugía es diferida.',
          'Enfermedad de Hirschsprung: retraso en la eliminación del meconio (&gt; 48 h) + distensión y constipación; se confirma con biopsia rectal (ausencia de células ganglionares) → resección del segmento agangliónico. Ano imperforado: diagnóstico por inspección; siempre examinar el ano del recién nacido.',
        ],
      },
    ],
    table: {
      title: 'Cirugía pediátrica digestiva — clave diagnóstica única',
      headers: ['Entidad', 'Clave', 'Conducta'],
      rows: [
        ['Enterocolitis necrotizante', 'Prematuro + neumatosis intestinal en la Rx', 'Régimen cero + NPT + antibióticos; cirugía si perfora'],
        ['Invaginación intestinal', 'Lactante 6–12 m + "mermelada de grosella" + signo de la dona', 'Reducción neumática (cirugía si falla)'],
        ['Divertículo de Meckel', 'HDB indolora y abundante en niño pequeño', 'Cintigrafía con Tc-99m → resección'],
        ['Atresia duodenal', 'Vómito bilioso día 1 + doble burbuja', 'Cirugía'],
        ['Enfermedad de Hirschsprung', 'Meconio > 48 h + constipación', 'Biopsia rectal → resección'],
        ['Hernia diafragmática congénita', 'Distrés respiratorio + abdomen excavado', 'Intubar y ventilar; cirugía diferida'],
      ],
    },
    vignette: 'Lactante de 8 meses, previamente sano, es traído por episodios de llanto inconsolable de pocos minutos con flexión de las piernas, que se repiten cada 15–20 minutos, y decaimiento entre las crisis. En el pañal se observan deposiciones con aspecto de "mermelada de grosella". La ecografía abdominal muestra una imagen en "diana" en el cuadrante superior derecho.',
    explicacion: 'La combinación de un lactante de 6–12 meses con crisis de dolor intermitente, decaimiento entre crisis y deposiciones "en mermelada de grosella" (sangre con moco), más el signo de la dona/diana en la ecografía, es diagnóstica de invaginación intestinal. El tratamiento de primera línea es la reducción neumática (o hidrostática) guiada por imagen; la cirugía se reserva para el fracaso de la reducción, la perforación o la sospecha de una causa anatómica de fondo.',
    keyPoints: [
      'Prematuro + tríada (retención, distensión, hematoquecia) + neumatosis intestinal = enterocolitis necrotizante.',
      'Lactante 6–12 meses + llanto en crisis + "mermelada de grosella" = invaginación → reducción neumática de primera línea.',
      'Hemorragia digestiva baja indolora y abundante en un niño = divertículo de Meckel → cintigrafía con Tc-99m.',
      'Vómito bilioso el primer día de vida + "doble burbuja" en la radiografía = atresia duodenal.',
      'Retraso en la eliminación del meconio (> 48 h) = enfermedad de Hirschsprung → biopsia rectal.',
      'Hernia diafragmática congénita: lo urgente es intubar y ventilar; la reparación quirúrgica es diferida.',
    ],
    questions: [
      {
        stem: 'Recién nacido prematuro de 30 semanas, a los 6 días de vida, presenta residuo gástrico bilioso, distensión abdominal y deposiciones con sangre. La radiografía de abdomen muestra aire en el espesor de la pared intestinal. ¿Cuál es el diagnóstico?',
        options: [
          { id: 'A', text: 'Atresia duodenal' },
          { id: 'B', text: 'Invaginación intestinal' },
          { id: 'C', text: 'Enterocolitis necrotizante' },
          { id: 'D', text: 'Enfermedad de Hirschsprung' },
          { id: 'E', text: 'Vólvulo del intestino medio' },
        ],
        correcta: 'C',
        explicacion: 'Un recién nacido prematuro con la tríada de retención gástrica, distensión abdominal y hematoquecia, junto con neumatosis intestinal (aire en la pared del intestino) en la radiografía, tiene una enterocolitis necrotizante. El manejo inicial es régimen cero, nutrición parenteral total, sonda para descompresión y antibióticos endovenosos; la cirugía se indica ante neumoperitoneo (perforación) o deterioro pese al tratamiento médico.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Niño de 3 años, sano, consulta por un episodio de deposición con abundante sangre roja oscura, sin dolor abdominal. Está pálido y taquicárdico; el abdomen es blando, sin masas. La colonoscopía no muestra lesiones. ¿Cuál es el examen diagnóstico más apropiado?',
        options: [
          { id: 'A', text: 'Repetir la colonoscopía con mejor preparación' },
          { id: 'B', text: 'Cintigrafía con pertecnetato de tecnecio-99m' },
          { id: 'C', text: 'Ecografía abdominal' },
          { id: 'D', text: 'Radiografía de abdomen simple' },
          { id: 'E', text: 'TAC de abdomen con contraste' },
        ],
        correcta: 'B',
        explicacion: 'Una hemorragia digestiva baja abundante e indolora en un niño pequeño, con colonoscopía normal, orienta a un divertículo de Meckel: la mucosa gástrica ectópica que contiene secreta ácido y ulcera el íleon adyacente. El examen de elección es la cintigrafía con pertecnetato de Tc-99m, que es captado por esa mucosa gástrica ectópica. La colonoscopía no alcanza el íleon donde se ubica el divertículo.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

  {
    id: 'gastro-26', classId: 'gastro-26', tier: 3,
    blockNum: 6, blockName: 'Gastroenterología y Cirugía Pediátrica',
    topicLabel: '6.4', title: 'Trauma Abdominal y Torácico',
    perfilCode: '1.06.2.002', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · manejo según protocolo ATLS',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Rentabilidad media · el mecanismo (cerrado / arma blanca / arma de fuego) decide la conducta',
    svg: null, algoTitle: 'Trauma de abdomen y tórax: manda el mecanismo',
    contexto: 'La regla es que el mecanismo manda. En el trauma cerrado, decide la clínica más la eco-FAST: estable con FAST negativa se observa. En el trauma por arma blanca, decide la exploración de la herida: si penetra el peritoneo, se explora. En el trauma por arma de fuego abdominal, siempre se opera. El lavado peritoneal diagnóstico quedó obsoleto y la eco-FAST lo reemplazó.',
    contentSections: [
      {
        subhead: '1. Trauma abdominal cerrado',
        paragraphs: [
          'Se maneja con clínica + eco-FAST (busca líquido libre). Paciente estable con FAST negativa y sin signos peritoneales → observación (o TAC si hay mecanismo de alta energía). Inestable, con signos peritoneales o con líquido libre → laparotomía.',
          'El <strong>lavado peritoneal diagnóstico está obsoleto</strong>. La rotura de víscera hueca da peritonitis y neumoperitoneo; la de víscera sólida (bazo, hígado) da hemoperitoneo — el bazo y el hígado se manejan de forma conservadora si el paciente está estable.',
        ],
      },
      {
        subhead: '2. Trauma abdominal por arma blanca',
        paragraphs: [
          'Se maneja con clínica + exploración de la herida. Si la herida no penetra el peritoneo → observación. Si <strong>penetra el peritoneo</strong>, o hay inestabilidad, signos peritoneales o evisceración → exploración quirúrgica.',
        ],
      },
      {
        subhead: '3. Trauma abdominal por arma de fuego',
        paragraphs: [
          'El trauma abdominal por proyectil de arma de fuego se <strong>explora quirúrgicamente siempre</strong> (la energía y la trayectoria producen lesiones múltiples de vísceras).',
          'Excepcionalmente se maneja de forma no operatoria una herida claramente tangencial que no entra a la cavidad, en un paciente estable y bajo observación estricta con TAC.',
        ],
      },
      {
        subhead: '4. Trauma torácico',
        paragraphs: [
          'Cerrado y por arma blanca: clínica + radiografía de tórax y manejo de las complicaciones: neumotórax y hemotórax con tubo pleural, contusión pulmonar con soporte respiratorio, taponamiento con pericardiocentesis/ventana.',
          '<strong>Indicaciones de toracotomía:</strong> hemotórax masivo (&gt; 1.500 mL de salida inicial por el tubo o &gt; 200 mL/h por 2–4 h), taponamiento, lesión de grandes vasos o de la vía aérea, y todo trauma torácico por arma de fuego.',
        ],
      },
    ],
    table: {
      title: 'Trauma de abdomen — conducta según el mecanismo',
      headers: ['Mecanismo', 'Evaluación', 'Cirugía si...'],
      rows: [
        ['Cerrado', 'Clínica + eco-FAST (± TAC)', 'Inestable, signos peritoneales o líquido libre'],
        ['Arma blanca', 'Clínica + exploración de la herida', 'Penetra el peritoneo, inestable, peritonitis o evisceración'],
        ['Arma de fuego', 'Clínica', 'Siempre (salvo herida tangencial demostrada)'],
      ],
    },
    vignette: 'Hombre de 30 años sufre un choque automovilístico y llega hemodinámicamente estable, con dolor leve en el hipocondrio izquierdo y sin signos peritoneales. La eco-FAST no muestra líquido libre intraabdominal. La radiografía de tórax y pelvis son normales.',
    explicacion: 'Trauma abdominal cerrado en un paciente estable, sin signos peritoneales y con eco-FAST negativa: la conducta es la observación con monitorización y reevaluaciones clínicas seriadas (se puede complementar con un TAC de abdomen si el mecanismo fue de alta energía). El lavado peritoneal diagnóstico está obsoleto y la exploración digital de la herida corresponde al trauma por arma blanca, no al cerrado. Se operaría si apareciera inestabilidad, peritonismo o líquido libre.',
    keyPoints: [
      'Trauma abdominal cerrado: clínica + eco-FAST; estable con FAST negativa → observación. El lavado peritoneal está obsoleto.',
      'Trauma abdominal por arma blanca: si la herida penetra el peritoneo → exploración quirúrgica.',
      'Trauma abdominal por arma de fuego: exploración quirúrgica siempre.',
      'Víscera hueca rota → peritonitis y neumoperitoneo; víscera sólida (bazo, hígado) → hemoperitoneo, manejo conservador si está estable.',
      'Trauma torácico: clínica + radiografía; hemotórax > 1.500 mL inicial o > 200 mL/h → toracotomía. Arma de fuego torácica → cirugía.',
    ],
    questions: [
      {
        stem: 'Hombre de 25 años recibe una herida por arma blanca en el flanco derecho. Está estable, sin signos peritoneales. Al explorar la herida en pabellón se constata que atraviesa el peritoneo parietal. ¿Cuál es la conducta?',
        options: [
          { id: 'A', text: 'Observación clínica por 24 horas' },
          { id: 'B', text: 'Eco-FAST y decidir según el resultado' },
          { id: 'C', text: 'Exploración quirúrgica (laparotomía o laparoscopía)' },
          { id: 'D', text: 'Radiografía de abdomen simple y alta si es normal' },
          { id: 'E', text: 'Lavado peritoneal diagnóstico' },
        ],
        correcta: 'C',
        explicacion: 'En el trauma abdominal por arma blanca la conducta se define por la exploración de la herida: si penetra el peritoneo, se indica exploración quirúrgica, porque el riesgo de lesión visceral (intestino, mesenterio) es alto aunque el paciente esté inicialmente estable y sin peritonismo. Si la herida no atraviesa el peritoneo, se puede observar. El lavado peritoneal está en desuso.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
      {
        stem: 'Paciente de 40 años con trauma torácico cerrado. La radiografía muestra una opacidad de la base derecha con borramiento del ángulo costofrénico. Se instala un tubo pleural que drena 1.800 mL de sangre en la primera hora. ¿Cuál es la conducta?',
        options: [
          { id: 'A', text: 'Mantener el tubo pleural y observar' },
          { id: 'B', text: 'Toracotomía (exploración quirúrgica)' },
          { id: 'C', text: 'Transfundir glóbulos rojos y reevaluar en 6 horas' },
          { id: 'D', text: 'Retirar el tubo e instalar uno de mayor calibre' },
          { id: 'E', text: 'TAC de tórax con contraste antes de decidir' },
        ],
        correcta: 'B',
        explicacion: 'Un hemotórax con salida inicial mayor de 1.500 mL por el tubo pleural (o un débito sostenido de más de 200 mL/h durante 2–4 horas) indica una hemorragia activa importante y es indicación de toracotomía. Mantener solo el drenaje o transfundir sin controlar la fuente lleva al shock. El TAC no debe retrasar la cirugía en un sangrado de este volumen.',
        recTag: 'Caso representativo · banco EUNACOM',
      },
    ],
  },

]};
