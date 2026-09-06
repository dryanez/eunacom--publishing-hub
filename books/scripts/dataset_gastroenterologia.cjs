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

  /* ───────────────────────── 🟢 FOCUSED ───────────────────────── */
  {
    id: 'gastro-06', classId: 'gastro-06', tier: 1,
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

  /* ───────────────────────── 🔴 DENSE-EMERGENCY ───────────────────────── */
  {
    id: 'gastro-29', classId: 'gastro-29', tier: 3,
    blockNum: 3, blockName: 'Vía biliar y Páncreas',
    topicLabel: '3.1', title: 'Pancreatitis Aguda',
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

]};
