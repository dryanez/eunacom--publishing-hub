/**
 * TOMO 16 · DERMATOLOGÍA — BLOQUE 03: Farmacodermias Graves & Enfermedades Ampollares
 * Clases 16.9 a 16.12 · Editorial EUNACOM 2026 · Color #a21caf
 */

const { flow } = require('./dataset_dermatologia_bloque_1.cjs');

const bloque3 = [
  {
    id: 'derma-09',
    classId: 'derma-09',
    tier: 3,
    blockNum: 3,
    blockName: 'Farmacodermias Graves & Enfermedades Ampollares',
    topicLabel: '16.9',
    title: 'Reacciones Medicamentosas Graves: Stevens-Johnson (SSJ) y Necrólisis Epidérmica Tóxica (NET)',
    perfilCode: '6.01.2.004',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Urgencia Dermatológica y de Cuidados Intensivos (Manejo en Centro de Quemados)',
    reconstrucciones: 'EUNACOM 2015 (Q#89) · EUNACOM Diciembre 2019 (Q#42) · EUNACOM 2022 (Q#112)',
    frecuencia: 'Máxima rentabilidad · Desprendimiento epidérmico masivo, Signo de Nikolsky positivo, clasificación por superficie corporal desprendida y escala pronóstica SCORTEN',
    diagram: flow('Algoritmo de Manejo de Emergencia en SSJ y NET', [
      { t: 'Paciente con Fiebre, Dolor Cutáneo y Exantema con Flictenas / Desprendimiento tras Fármaco', s: 'Paso 1: Evaluar Signo de Nikolsky (desprendimiento epidérmico por frotamiento suave) y afección mucosa' },
      { k: 'split', q: '¿Porcentaje de Superficie Corporal Total Desprendida o Desprendible (BSA)?', s: 'Estratificación diagnóstica estricta de gravedad según extensión de epidermis necrótica', ll: '< 10% BSA (Síndrome de Stevens-Johnson)', rl: '> 30% BSA (Necrólisis Epidérmica Tóxica / NET)',
        left: { t: 'Síndrome de Stevens-Johnson (SSJ)', s: 'Afectación < 10% de piel + Compromiso grave de ≥ 2 mucosas (oral, ocular, urogenital)', type: 'warn' },
        right: { t: 'Necrólisis Epidérmica Tóxica (NET / Síndrome de Lyell)', s: 'Desprendimiento > 30% de piel (gran quemado médico) · Letalidad 30-50% · Falla multiorgánica', type: 'crit' },
        ll: 'afectación < 10%', rl: 'desprendimiento > 30%' },
      { t: 'CONDUCTA CRÍTICA DE EMERGENCIA INMEDIATA', s: '1. SUSPENDER INMEDIATAMENTE el fármaco sospechoso · 2. Hospitalización URGENTE en UCI o Centro de Quemados · 3. Fluidoterapia agresiva, termorregulación, apósitos no adherentes y soporte nutricional enteral precoz', type: 'dec', al: 'traslado inmediato a quemados', from: 'right' },
    ]),
    contexto: 'El Síndrome de Stevens-Johnson (SSJ) y la Necrólisis Epidérmica Tóxica (NET o síndrome de Lyell) representan el espectro de máxima gravedad de las reacciones adversas a medicamentos mediadas por inmunidad celular. Se caracterizan por la apoptosis y necrosis masiva de queratinocitos mediada por linfocitos T citotóxicos (CD8+) y células NK mediante la vía Fas/FasL y la secreción masiva de Granulisina. El cuadro se comporta clínicamente como un "gran quemado médico", con alto riesgo de sepsis bacteriana, shock hipovolémico y falla multiorgánica. La evaluación del signo de Nikolsky, la superficie desprendida y el cálculo del score pronóstico SCORTEN son preguntas obligadas en el examen.',
    contentSections: [
      {
        subhead: '1. Fármacos Desencadenantes y Fisiopatología Celular',
        paragraphs: [
          '• <strong>Fármacos Culpables de Alto Riesgo (Acrónimo EUNACOM "S-A-P-O-C"):</strong><br>' +
          '- <strong>Sulfonamidas:</strong> Cotrimoxazol (Sulfametoxazol-Trimetoprima) y sulfadiazina.<br>' +
          '- <strong>Alopurinol:</strong> Especialmente al iniciar dosis elevadas o en pacientes con insuficiencia renal crónica sin ajuste.<br>' +
          '- <strong>Anticonvulsivantes Aromáticos:</strong> Carbamazepina, Fenitoína, Lamotrigina y Fenobarbital.<br>' +
          '- <strong>Oxicams / AINEs:</strong> Piroxicam, meloxicam y metamizol.<br>' +
          '- <strong>Cefalosporinas y Penicilinas:</strong> Antibióticos betalactámicos de uso masivo.<br>' +
          '• <strong>Período de Latencia:</strong> Típicamente entre <strong>1 a 4 semanas (promedio 7 a 21 días)</strong> tras el inicio del fármaco culpable (nunca ocurre a las pocas horas ni después de años de tratamiento crónico ininterrumpido).<br>' +
          '• <strong>Patogenia Inmune:</strong> Reconocimiento hapteno/péptido mediado por HLA específico (ej. HLA-B*1502 con carbamazepina en asiáticos; HLA-B*5801 con alopurinol). Los linfocitos T CD8+ clonales liberan <strong>Granulisina</strong> (la principal toxina inductora de apoptosis) junto con perforina y granzima B, desencadenando la muerte celular programada masiva de todo el estrato epidérmico.',
        ],
      },
      {
        subhead: '2. Cuadro Clínico, Signo de Nikolsky y Espectro SSJ/NET',
        paragraphs: [
          '• <strong>Pródromos (1 a 3 días antes):</strong> Síndrome pseudogripal con fiebre alta (> 38.5 °C), malestar general, dolor faríngeo, tos y ardor ocular severo.<br>' +
          '• <strong>Lesiones Cutáneas Iniciales:</strong> Máculas eritematosas o purpúricas de contorno irregular, confluentes, que evolucionan rápidamente a máculas con aspecto de "diana atípica" (solo 2 anillos concéntricos o centro purpúrico/ampollar, a diferencia de la diana clásica de 3 anillos del eritema multiforme). <strong>El dolor cutáneo es intenso y desproporcionado a los hallazgos iniciales</strong>.<br>' +
          '• <strong>Formación de Flictenas y Desprendimiento Epidérmico:</strong> Las lesiones confluyen y se forman grandes ampollas flácidas que se rompen con facilidad, dejando la dermis denudada de color rojo vivo ("aspecto de escaldadura térmica").<br>' +
          '• <strong>SIGNO DE NIKOLSKY (+):</strong> Al aplicar una suave fricción tangencial o deslizamiento digital sobre piel eritematosa o perilesional aparentemente intacta, <strong>la epidermis se despega y desprende en sábana</strong> revelando la dermis húmeda subyacente. También se presenta el <em>Signo de Asboe-Hansen</em> (al comprimir verticalmente el centro de una ampolla, esta se extiende lateralmente hacia piel sana).<br>' +
          '• <strong>Compromiso Severo de Mucosas (> 90% de los casos):</strong><br>' +
          '- <strong>Mucosa Oral y Labial:</strong> Estomatitis hemorrágica masiva con queilitis costrosa sanguinolenta ("costras hemáticas gruesas en los labios"), odinofagia severa e imposibilidad de deglutir.<br>' +
          '- <strong>Mucosa Ocular:</strong> Conjuntivitis pseudomembranosa bilateral severa, queratitis, ulceración corneal y riesgo crítico de <strong>simbléfaron</strong> (sinequias cicatriciales conjuntivo-palpebrales) y ceguera.<br>' +
          '- <strong>Mucosa Urogenital:</strong> Balanitis, vulvovaginitis erosiva y sinequias vaginales/uretrales.',
        ],
      },
      {
        subhead: '3. Clasificación según Porcentaje de Superficie Corporal Total (BSA)',
        paragraphs: [
          'La distinción entre SSJ y NET es estrictamente cuantitativa y se basa en el porcentaje de <strong>Superficie Corporal Total (BSA) con desprendimiento epidérmico franco</strong> (empleando la regla de los nueve de Wallace o tabla de Lund-Browder):<br>' +
          '1. <strong>Síndrome de Stevens-Johnson (SSJ):</strong> Desprendimiento epidérmico en <strong>< 10%</strong> de la superficie corporal total + compromiso de mucosas.<br>' +
          '2. <strong>Síndrome de Superposición SSJ / NET:</strong> Desprendimiento epidérmico entre <strong>10% y 30%</strong> de la superficie corporal total.<br>' +
          '3. <strong>Necrólisis Epidérmica Tóxica (NET o Síndrome de Lyell):</strong> Desprendimiento epidérmico en <strong>> 30%</strong> de la superficie corporal total (con frecuencia llega al 70-90% de la piel).',
        ],
      },
      {
        subhead: '4. Escala Pronóstica SCORTEN y Enfoque Terapéutico en Centro de Quemados',
        paragraphs: [
          '• <strong>Score Pronóstico SCORTEN (evaluado dentro de las primeras 24-48 horas):</strong><br>' +
          'Consta de 7 variables independientes (1 punto cada una). A mayor puntaje, mayor mortalidad:<br>' +
          '1. Edad ≥ 40 años.<br>' +
          '2. Frecuencia cardíaca ≥ 120 latidos por minuto.<br>' +
          '3. Presencia de cáncer activo o neoplasia hematológica.<br>' +
          '4. Superficie corporal desprendida inicial > 10% de BSA.<br>' +
          '5. Nitrógeno ureico en sangre (BUN) > 28 mg/dL (> 10 mmol/L) o Urea > 60 mg/dL.<br>' +
          '6. Bicarbonato sérico < 20 mEq/L (acidosis metabólica).<br>' +
          '7. Glicemia en ayunas > 252 mg/dL (> 14 mmol/L).<br>' +
          '<em>Mortalidad esperada:</em> 0-1 puntos: ~3%; 2 puntos: ~12%; 3 puntos: ~35%; 4 puntos: ~58%; ≥ 5 puntos: > 90%.<br>' +
          '• <strong>Pilares Terapéuticos Fundamentales:</strong><br>' +
          '1. <strong>Retiro Inmediato del Fármaco Causal:</strong> Es la medida que más impacta en la sobrevida. Cuanto más corta la vida media del fármaco y más precoz su suspensión, menor es la mortalidad.<br>' +
          '2. <strong>Traslado Urgente a Unidad de Cuidados Intensivos (UCI) o Centro de Gran Quemado:</strong> Requiere aislamiento térmico ambiental (temperatura ambiente controlada a 30-32 °C para evitar la hipotermia severa por evaporación cutánea masiva).<br>' +
          '3. <strong>Fluidoterapia Intravenosa Agresiva:</strong> Reposición hidroelectrolítica calculada similar a quemaduras pero reduciendo un 25-30% el volumen de Parkland para evitar sobrecarga y edema pulmonar.<br>' +
          '4. <strong>Cuidado Tópico de la Piel:</strong> Asepsia estricta, NUNCA desbridar quirúrgicamente las flictenas ni despegar la epidermis necrótica (la piel desprendida actúa como apósito biológico natural); aplicar gasas vaselinadas no adherentes o apósitos de plata nanocristalina.<br>' +
          '5. <strong>Interconsulta Oftalmológica de Emergencia:</strong> Aseo ocular continuo, lágrimas artificiales sin conservantes cada 1-2 horas y desbridamiento manual de sinequias conjuntivales diariamente para prevenir simbléfaron y perforación corneal.',
        ],
      },
    ],
    table: {
      title: 'Clasificación y Criterios Diagnósticos del Espectro SSJ / NET',
      headers: ['Parámetro', 'Síndrome de Stevens-Johnson (SSJ)', 'Superposición SSJ / NET', 'Necrólisis Epidérmica Tóxica (NET)'],
      rows: [
        ['Porcentaje de BSA Desprendida', '< 10% de la piel total', '10% a 30% de la piel total', '> 30% de la piel total (hasta > 80%)'],
        ['Tipo de Lesión Cutánea', 'Máculas en dianas atípicas purpúricas y flictenas', 'Dianas atípicas confluentes con ampollas extensas', 'Desprendimiento en sábanas completas (escaldadura)'],
        ['Compromiso de Mucosas', 'Grave (≥ 2 mucosas en > 95%)', 'Grave y constante (oral, genital, conjuntival)', 'Masivo y hemorrágico difuso con necrosis traqueobronquial'],
        ['Signo de Nikolsky', 'Positivo (+) en áreas eritematosas', 'Positivo (+) ampliamente distribuido', 'Positivo (+) generalizado en casi toda la superficie'],
        ['Mortalidad Estimada', '1% a 5%', '10% a 15%', '30% a 50% (por sepsis y shock distributivo)'],
      ],
    },
    severityTable: {
      title: 'Score Pronóstico SCORTEN en las Primeras 48 Horas de Hospitalización',
      headers: ['Variable SCORTEN', 'Punto de Corte de Riesgo (1 Punto)', 'Fundamento Fisiopatológico', 'Mortalidad según Puntaje Acumulado'],
      rows: [
        ['1. Edad del Paciente', '≥ 40 años', 'Menor reserva fisiológica y regeneración epitelial', '0 a 1 punto: 3.2% de mortalidad'],
        ['2. Frecuencia Cardíaca', '≥ 120 latidos/minuto', 'Respuesta hiperadrenérgica y shock hipovolémico', '2 puntos: 12.1% de mortalidad'],
        ['3. Cáncer / Neoplasia', 'Presencia de malignidad previa activa', 'Inmunosupresión basal y caquexia tumoral', '3 puntos: 35.3% de mortalidad'],
        ['4. Extensión Desprendida', 'Superficie desprendida inicial > 10% BSA', 'Falla de barrera cutánea masiva y pérdida insensible', '4 puntos: 58.3% de mortalidad'],
        ['5. Nitrógeno Ureico / Urea', 'BUN > 28 mg/dL (o Urea sérica > 60 mg/dL)', 'Hipovolemia prerrenal severa y catabolismo proteico', '≥ 5 puntos: > 90% de mortalidad (crítico)'],
        ['6. Bicarbonato Sérico', 'Bicarbonato sérico < 20 mEq/L', 'Acidosis láctica por hipoperfusión tisular', '—'],
        ['7. Glicemia en Ayunas', 'Glicemia > 252 mg/dL (> 14 mmol/L)', 'Estrés metabólico hiperglucémico extremo', '—'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Terapéutico y Soporte Vital en Centro de Quemados',
      headers: ['Eje de Manejo', 'Intervención de Emergencia', 'Objetivo Terapéutico', 'Error Crítico a Evitar'],
      rows: [
        ['1. Etiológico', 'Suspensión inmediata de todo fármaco introducido en últimas 8 semanas', 'Detener la cascada de apoptosis epidérmica por linfocitos CD8+', 'NUNCA demorar el retiro buscando exámenes confirmatorios'],
        ['2. Soporte Hemodinámico', 'Fluidoterapia balanceada (Ringer Lactato ~2 mL/kg/%BSA en 24 h)', 'Mantener diuresis > 0.5-1 mL/kg/h y presión arterial media > 65 mmHg', 'NO sobrehidratar (riesgo de edema pulmonar y dificultad respiratoria)'],
        ['3. Termorregulación', 'Sala térmica calefaccionada a 30 °C - 32 °C y mantas térmicas', 'Evitar hipotermia grave por pérdida calórica masiva transcutánea', 'NO dejar al paciente expuesto a temperatura ambiente estándar'],
        ['4. Cuidado de la Piel', 'Apósitos no adherentes de vaselina o plata, aseo suave con clorhexidina 0.05%', 'Proteger la dermis denudada sin despegar la epidermis residual', 'PROHIBIDO el desbridamiento quirúrgico mecánico agresivo'],
        ['5. Prevención Ocular', 'Lavado ocular salino cada hora + lágrimas artificiales + lisis de sinequias', 'Evitar formación de simbléfaron, queratinización conjuntival y ceguera', 'NO diferir la evaluación por oftalmólogo desde el día 1'],
        ['6. Terapia Inmunomoduladora', 'Ciclosporina A oral (3-5 mg/kg/día) o Inmunoglobulina Humana IV (IGIV 1 g/kg/d x 3 d)', 'Neutralizar Granulisina y detener apoptosis en centros especializados', 'Uso rutinario de corticoides sistémicos a dosis altas es controvertido por sepsis'],
      ],
    },
    vignette: 'Hombre de 54 años, con antecedente de gota tofácea que inició alopurinol 300 mg/día hace 3 semanas, consulta en urgencias por cuadro de 4 días de fiebre alta (39 °C), malestar general, dolor faríngeo intenso y ardor en ambos ojos. Al examen físico destaca paciente en malas condiciones generales, taquicárdico a 125 lpm, con eritema confluente extenso en tronco y extremidades asociado a flictenas y desprendimiento epidérmico que compromete el 35% de la superficie corporal total. Al frotar suavemente la piel perilesional eritematosa con el pulpejo del dedo, la epidermis se desprende con extrema facilidad dejando una superficie denudada y sangrante. Presenta labios cubiertos por gruesas costras hemáticas e inyección conjuntival bilateral con exudado purulento.',
    explicacion: 'El cuadro clínico corresponde a una Necrólisis Epidérmica Tóxica (NET o síndrome de Lyell) secundaria al uso reciente de alopurinol. El hallazgo de desprendimiento epidérmico en el 35% de la superficie corporal total (> 30%) clasifica de inmediato el cuadro como NET. El desprendimiento epidérmico ante la fricción digital tangencial corresponde al Signo de Nikolsky positivo, confirmando la necrosis epidérmica de espesor total por lisis mediada por granulisina y linfocitos T. La conducta inmediata mandatoria es la suspensión inmediata del alopurinol, el ingreso urgente a una Unidad de Cuidados Intensivos o Centro de Quemados para manejo hidroelectrolítico y de soporte de barrera, y la interconsulta oftalmológica precoz para prevenir simbléfaron.',
    keyPoints: [
      'Los fármacos gatillantes más frecuentes son Alopurinol, Carbamazepina, Cotrimoxazol y AINEs.',
      'El período de latencia típico es de 1 a 4 semanas tras el inicio del fármaco culpable.',
      'El Signo de Nikolsky (+) es el desprendimiento de la epidermis por fricción suave sobre piel eritematosa.',
      'Clasificación por superficie corporal desprendida: SSJ < 10%; Superposición SSJ/NET 10-30%; NET > 30%.',
      'El score SCORTEN (7 parámetros dentro de las primeras 48 h) estima con precisión la mortalidad.',
      'La medida de mayor impacto en la sobrevida es el RETIRO INMEDIATO del fármaco sospechoso.',
      'El manejo debe realizarse en UCI o Centro de Quemados con soporte hidroelectrolítico y control térmico estricto.',
      'El compromiso ocular exige evaluación precoz para evitar sinequias conjuntivales (simbléfaron) y ceguera.',
    ],
    questions: [
      {
        stem: 'Una mujer de 38 años consulta en urgencias por un cuadro febril de 48 horas de evolución acompañado de odinofagia intensa y ardor ocular. Al examen físico presenta lesiones eritematosas en diana atípica en tronco, con flictenas y desprendimiento de la piel que compromete aproximadamente el 7% de la superficie corporal total, asociado a úlceras orales con costras hemáticas labiales y conjuntivitis bilateral. Al realizar una suave presión tangencial con el dedo sobre la piel eritematosa, la epidermis se desliza y desprende. ¿Cuál es el diagnóstico más probable y el signo semiológico descrito?',
        options: [
          { id: 'A', text: 'Eritema multiforme menor y Signo de Darier' },
          { id: 'B', text: 'Síndrome de Stevens-Johnson y Signo de Nikolsky' },
          { id: 'C', text: 'Necrólisis epidérmica tóxica y Fenómeno de Koebner' },
          { id: 'D', text: 'Penfigoide ampollar y Signo de Auspitz' },
          { id: 'E', text: 'Síndrome DRESS y Fenómeno de Patergia' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a un Síndrome de Stevens-Johnson (SSJ) y el signo semiológico descrito es el Signo de Nikolsky positivo. El SSJ se define por el desprendimiento epidérmico en menos del 10% de la superficie corporal total con compromiso severo de al menos dos mucosas (oral y ocular en este caso). El Signo de Nikolsky consiste en el despegamiento o desprendimiento de la epidermis al aplicar una suave fricción tangencial sobre la piel eritematosa o perilesional, lo que traduce necrosis epidérmica aguda o acantolisis. Si el compromiso fuera > 30% sería NET (C). El eritema multiforme menor (A) respeta mucosas o afecta una sola de forma leve y Nikolsky es negativo. Auspitz (D) es rocío sangrante en psoriasis.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.004',
      },
      {
        stem: '¿Cuál es el porcentaje de superficie corporal total (BSA) desprendida que define y distingue formalmente a la Necrólisis Epidérmica Tóxica (NET) del Síndrome de Stevens-Johnson (SSJ)?',
        options: [
          { id: 'A', text: 'Mayor al 5% de superficie corporal total' },
          { id: 'B', text: 'Mayor al 10% de superficie corporal total' },
          { id: 'C', text: 'Mayor al 20% de superficie corporal total' },
          { id: 'D', text: 'Mayor al 30% de superficie corporal total' },
          { id: 'E', text: 'Mayor al 50% de superficie corporal total' },
        ],
        correcta: 'D',
        explicacion: 'La clasificación internacional del consenso dermatológico estratifica el espectro SSJ/NET según el porcentaje de superficie corporal total (BSA) desprendida con necrosis epidérmica de espesor total: 1) Síndrome de Stevens-Johnson: afectación menor al 10% de la BSA; 2) Síndrome de Superposición SSJ/NET: afectación entre 10% y 30% de la BSA; 3) Necrólisis Epidérmica Tóxica (NET o Síndrome de Lyell): desprendimiento en más del 30% de la BSA. Recordar: corte menor al 10% es SSJ, corte mayor al 30% es NET.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.004',
      },
      {
        stem: 'Un hombre de 62 años es hospitalizado por una Necrólisis Epidérmica Tóxica que compromete el 45% de la superficie corporal tras iniciar carbamazepina hace dos semanas. Al ingreso a la unidad de pacientes críticos se calculan los parámetros de la escala pronóstica SCORTEN. ¿Cuál de los siguientes hallazgos aporta UN PUNTO de gravedad en dicha escala?',
        options: [
          { id: 'A', text: 'Frecuencia cardíaca de 95 latidos por minuto' },
          { id: 'B', text: 'Edad de 35 años' },
          { id: 'C', text: 'Bicarbonato sérico de 16 mEq/L' },
          { id: 'D', text: 'Glicemia en ayunas de 140 mg/dL' },
          { id: 'E', text: 'Nitrógeno ureico en sangre (BUN) de 15 mg/dL' },
        ],
        correcta: 'C',
        explicacion: 'El score pronóstico SCORTEN consta de 7 variables evaluadas al ingreso (1 punto cada una): 1) Edad ≥ 40 años; 2) FC ≥ 120 lpm; 3) Neoplasia activa; 4) Superficie epidérmica desprendida inicial > 10%; 5) BUN > 28 mg/dL (> 10 mmol/L); 6) Bicarbonato sérico < 20 mEq/L; 7) Glicemia > 252 mg/dL (> 14 mmol/L). En este paciente, el bicarbonato de 16 mEq/L es menor a 20 mEq/L, por lo que suma un punto de gravedad. La edad de 35 años no suma punto (el corte es ≥ 40 años), la FC de 95 lpm no suma punto (el corte es ≥ 120 lpm), la glicemia de 140 mg/dL no suma (corte > 252 mg/dL) y el BUN de 15 mg/dL tampoco suma (corte > 28 mg/dL).',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.004',
      },
      {
        stem: 'En el manejo hospitalario de un paciente diagnosticado con Necrólisis Epidérmica Tóxica severa en un Centro de Quemados, ¿cuál de las siguientes intervenciones representa una MALA PRÁCTICA contraindicada?',
        options: [
          { id: 'A', text: 'Mantener la temperatura ambiental de la sala entre 30 °C y 32 °C' },
          { id: 'B', text: 'Desbridamiento quirúrgico agresivo en pabellón de toda la epidermis desprendida y flictenas' },
          { id: 'C', text: 'Instilación frecuente de lágrimas artificiales sin preservantes y evaluación diaria por oftalmología' },
          { id: 'D', text: 'Reposición hídrica intravenosa guiada por diuresis horaria estricta' },
          { id: 'E', text: 'Suspensión inmediata de todos los fármacos no vitales introducidos en las semanas previas' },
        ],
        correcta: 'B',
        explicacion: 'A diferencia de las quemaduras térmicas profundas de tercer grado, en la Necrólisis Epidérmica Tóxica el desbridamiento quirúrgico agresivo de la epidermis desprendida está CONTRAINDICADO. La epidermis necrótica desprendida actúa como un apósito biológico natural que protege la dermis papilar subyacente y favorece la reepitelización sin cicatriz profunda si no se somete a tracción traumática. Las ampollas grandes pueden aspirarse con aguja estéril preservando el techo de la flictena y cubriendo con gasas no adherentes. El ambiente térmico cálido (A), la protección ocular intensiva para prevenir simbléfaron (C), la fluidoterapia controlada (D) y el retiro farmacológico precoz (E) son pilares fundamentales de la buena práctica médica.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.004',
      },
    ],
  },
  {
    id: 'derma-10',
    classId: 'derma-10',
    tier: 3,
    blockNum: 3,
    blockName: 'Farmacodermias Graves & Enfermedades Ampollares',
    topicLabel: '16.10',
    title: 'Síndrome DRESS: Erupción Medicamentosa con Eosinofilia y Síntomas Sistémicos',
    perfilCode: '6.01.2.003',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Farmacodermia Severa con Riesgo Vital',
    reconstrucciones: 'EUNACOM 2018 (Q#67) · EUNACOM Enero 2021 (Q#94) · EUNACOM 2023 (Q#38)',
    frecuencia: 'Alta rentabilidad diagnóstica · Latencia prolongada (2-8 semanas), fiebre persistente, edema facial característico, eosinofilia marcada, atipia linfocitaria y hepatitis con falla multiorgánica',
    diagram: flow('Algoritmo Diagnóstico y Terapéutico del Síndrome DRESS', [
      { t: 'Paciente con Fiebre Alta, Rash Cutáneo Confluente y Edema Facial tras Fármaco (2-8 sem)', s: 'Paso 1: Sospechar DRESS por latencia prolongada y solicitar Hemograma Completo + Pruebas Hepáticas (GOT/GPT)' },
      { k: 'split', q: '¿Confirma Eosinofilia Marcada (> 700-1500/uL), Linfocitos Atípicos o Falla Orgánica?', s: 'Aplicación de criterios diagnósticos internacionales RegiSCAR para confirmar el síndrome', ll: 'RegiSCAR Definitivo / Probable (> 4 puntos)', rl: 'Sospecha Inicial en APS',
        left: { t: 'Síndrome DRESS Confirmado con Falla de Órgano', s: 'Compromiso hepático (75-90%) · Renal (30%) · Miocarditis o Neumonitis intersticial', type: 'crit' },
        right: { t: 'Derivación Urgente y Retiro Inmediato del Fármaco', s: 'Suspender anticonvulsivante / alopurinol / sulfas · NUNCA reiniciar el fármaco culpable', type: 'warn' },
        ll: 'compromiso visceral confirmado', rl: 'derivación a centro terciario' },
      { t: 'TERAPIA CON CORTICOIDES SISTÉMICOS Y DESESCALE MUY LENTO', s: 'Prednisona oral 1 mg/kg/día (o Metilprednisolona EV) · Retiro muy progresivo en 2 a 3 meses para evitar recaídas mortales', type: 'dec', al: 'terapia corticoide prolongada', from: 'left' },
    ]),
    contexto: 'El Síndrome DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms o Síndrome de Hipersensibilidad Inducida por Fármacos - DIHS) es una reacción de hipersensibilidad retardada potencialmente letal (mortalidad del 5-10%). Su patogenia combina una respuesta inmune mediada por linfocitos T específicos antígeno-fármaco junto con la reactivación masiva de virus de la familia Herpesviridae (particularmente Herpesvirus Humano tipo 6 - HHV-6, HHV-7 y Virus de Epstein-Barr). Se distingue clínicamente por una latencia muy prolongada (de 2 a 8 semanas tras iniciar el fármaco), la presencia de edema facial prominente, fiebre alta, eosinofilia marcada y daño visceral grave, principalmente hepatitis tóxica.',
    contentSections: [
      {
        subhead: '1. Fármacos Implicados y Mecanismo de Hipersensibilidad Retardada',
        paragraphs: [
          '• <strong>Fármacos Típicamente Responsables:</strong><br>' +
          '- <strong>Anticonvulsivantes Aromáticos (los más frecuentes, > 50% de casos):</strong> Carbamazepina, Fenitoína, Fenobarbital y Lamotrigina.<br>' +
          '- <strong>Alopurinol:</strong> Frecuente en pacientes ancianos o con insuficiencia renal.<br>' +
          '- <strong>Sulfonamidas y Sulfonas:</strong> Cotrimoxazol, Sulfasalazina y Dapsona (Síndrome por Dapsona).<br>' +
          '- <strong>Antibióticos y Antivirales:</strong> Vancomicina, Minociclina, Nevirapina y Abacavir.<br>' +
          '• <strong>Período de Latencia Característico (CLAVE DE EXAMEN):</strong> A diferencia de las urticarias (minutos a horas) o del SSJ (1 a 3 semanas), el DRESS tiene una <strong>latencia prolongada y traicionera de 2 a 8 semanas (habitualmente 3 a 6 semanas)</strong>. Con frecuencia el paciente olvida mencionar el medicamento porque lo viene tomando desde hace un mes.<br>' +
          '• <strong>Reactivación Viral de Herpesvirus 6 (HHV-6):</strong> La interacción fármaco-linfocito T provoca una inmunodepresión transitoria que reactiva el virus herpes humano 6 latente, perpetuando la inflamación y las recaídas tardías semanas después de retirar el medicamento.',
        ],
      },
      {
        subhead: '2. Tríada Clínica Clásica y Criterios RegiSCAR',
        paragraphs: [
          '• <strong>1. Fiebre Alta Persistente (> 38.5 °C):</strong> Presente en más del 90% de los casos, suele ser el primer síntoma y se acompaña de compromiso del estado general y postración.<br>' +
          '• <strong>2. Erupción Cutánea Polimorfa con Edema Facial:</strong><br>' +
          '- Comienza como un exantema morbiliforme o maculopapular eritematoso difuso en cara, tronco superior y extremidades que confluye en un eritema generalizado.<br>' +
          '- <strong>EDEMA FACIAL PERIORBITARIO Y MALAR PROMINENTE:</strong> Es el hallazgo semiológico cardinal más orientador en la inspección física (presente en > 75% de los pacientes).<br>' +
          '- A diferencia de SSJ/NET, en el DRESS <strong>NO suele haber flictenas ni desprendimiento epidérmico difuso</strong>, y el Signo de Nikolsky es TÍPICAMENTE NEGATIVO.<br>' +
          '• <strong>3. Linfadenopatías Generalizadas:</strong> Ganglios dolorosos palpables ≥ 1 cm en dos o más cadenas linfáticas (cervicales, axilares, inguinales).<br>' +
          '• <strong>Criterios Diagnósticos Internacionales RegiSCAR (Score ≥ 4 confirma DRESS):</strong><br>' +
          '1. Erupción cutánea aguda que compromete > 50% de la superficie corporal.<br>' +
          '2. Fiebre superior a 38.5 °C.<br>' +
          '3. Linfadenopatías en al menos dos territorios ganglionares anatómicos.<br>' +
          '4. Compromiso de al menos un órgano interno.<br>' +
          '5. Anormalidades hematológicas: <strong>Eosinofilia (≥ 700/uL o ≥ 10%)</strong> o presencia de <strong>Linfocitos Atípicos</strong> en sangre periférica.<br>' +
          '6. Curso clínico prolongado (> 15 días tras retirar el fármaco) y exclusión de causas infecciosas primarias.',
        ],
      },
      {
        subhead: '3. Compromiso de Órganos Internos (Falla Visceral)',
        paragraphs: [
          'La morbimortalidad del síndrome DRESS depende exclusivamente de la gravedad del daño en los órganos internos:<br>' +
          '• <strong>Hígado (el órgano blanco más frecuentemente afectado, 75% a 90% de casos):</strong> Hepatitis tóxica que varía desde elevación asintomática de transaminasas (GOT/GPT > 2 a 5 veces el límite superior normal) y colestasis, hasta necrosis hepática masiva e insuficiencia hepática aguda fulminante (principal causa de muerte).<br>' +
          '• <strong>Riñón (15% a 30% de casos):</strong> Nefritis tubulointersticial aguda con elevación de creatinina, proteinuria y hematuria microscópica (particularmente frecuente tras alopurinol).<br>' +
          '• <strong>Corazón (Miocarditis por Hipersensibilidad, 5% a 10%):</strong> Cuadro muy grave y traicionero que puede debutar semanas después con disnea, arritmias ventriculares, elevación de troponinas y shock cardiogénico.<br>' +
          '• <strong>Pulmón (10% a 15%):</strong> Neumonitis intersticial con infiltrados bilaterales y disnea progresiva.',
        ],
      },
      {
        subhead: '4. Tratamiento: Suspensión Precoz y Corticoides Sistémicos Prolongados',
        paragraphs: [
          '• <strong>Medida Inmediata y Esencial:</strong> <strong>RETIRAR INMEDIATAMENTE EL FÁRMACO CULPABLE</strong>. Registrar la alergia de forma indeleble en la ficha clínica (advertir riesgo de reactividad cruzada entre anticonvulsivantes aromáticos: si hizo DRESS por carbamazepina, tiene prohibida la fenitoína y fenobarbital).<br>' +
          '• <strong>Terapia Farmacológica de Elección: CORTICOIDES SISTÉMICOS:</strong><br>' +
          '- En pacientes con compromiso de órganos internos o eosinofilia severa: <strong>Prednisona oral a dosis de 0.5 a 1.0 mg/kg/día</strong> (o pulsos de Metilprednisolona endovenosa 1 g/día por 3 días si hay hepatitis grave o miocarditis).<br>' +
          '- <strong>REGLA DE ORO DE DESCONTINUACIÓN:</strong> La reducción de la dosis de corticoides debe ser <strong>EXTREMADAMENTE LENTA Y PROGRESIVA, A LO LARGO DE 2 A 3 MESES (8 a 12 semanas)</strong>. La suspensión rápida antes de las 4 semanas produce recaídas inflamatorias graves o empeoramiento fulminante de la hepatitis.<br>' +
          '- En casos refractarios a corticoides: Se puede asociar Inmunoglobulina intravenosa (IGIV) o Ciclosporina A oral.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: DRESS vs Síndrome de Stevens-Johnson / NET',
      headers: ['Característica Clínica', 'Síndrome DRESS', 'Síndrome de Stevens-Johnson / NET'],
      rows: [
        ['Período de Latencia Farmacológica', 'Muy prolongado: 2 a 8 semanas (habitual 3-6 sem)', 'Intermedio: 1 a 3 semanas (7 a 21 días)'],
        ['Lesión Cutánea Predominante', 'Exantema morbiliforme confluente + Edema facial intenso', 'Máculas en diana atípica + Flictenas y ampollas flácidas'],
        ['Signo de Nikolsky', 'Negativo (-) habitualmente', 'Positivo (+) patognomónico'],
        ['Desprendimiento Epidérmico', 'Ausente o solo descamación tardía laminar', 'Presente y extenso (> 10% a > 30% de la piel)'],
        ['Compromiso de Mucosas', 'Ausente o leve queilitis (labios secos)', 'Severo y hemorrágico (≥ 2 mucosas en > 90%)'],
        ['Hallazgo Hematológico Clave', 'Eosinofilia marcada (≥ 700-1500/uL) + Linfocitos atípicos', 'Neutropenia o leucopenia de mal pronóstico'],
        ['Órgano Blanco Principal', 'Hígado (hepatitis en 80-90%), Riñón y Miocardio', 'Piel (gran quemado) y mucosa respiratoria/ocular'],
        ['Tratamiento Específico', 'Corticoides sistémicos orales en retiro muy lento (2-3 meses)', 'Manejo en Centro de Quemados / Soporte hidroelectrolítico'],
      ],
    },
    severityTable: {
      title: 'Criterios RegiSCAR para Diagnóstico y Clasificación de Gravedad en DRESS',
      headers: ['Criterio RegiSCAR', 'Hallazgo Requerido', 'Puntaje', 'Categoría Diagnóstica'],
      rows: [
        ['Fiebre', 'Temperatura corporal > 38.5 °C', '+1', 'Score < 2: No es DRESS'],
        ['Linfadenopatías', 'Cadenas ganglionares palpables ≥ 2 sitios (≥ 1 cm)', '+1', 'Score 2 a 3: Caso Posible'],
        ['Eosinofilia', 'Eosinófilos 700 a 1499/uL (+1) o ≥ 1500/uL (+2)', '+1 o +2', 'Score 4 a 5: Caso Probable'],
        ['Linfocitos Atípicos', 'Presencia documentada en frotis sanguíneo', '+1', 'Score ≥ 6: Caso Definitivo'],
        ['Exantema Cutáneo', 'Extensión > 50% de BSA (+1) y edema facial/infiltrado (+1)', '+1 a +2', '—'],
        ['Daño de Órgano', 'Compromiso de 1 órgano (+1) o ≥ 2 órganos internos (+2)', '+1 a +2', '—'],
        ['Biopsia Cutánea', 'Infiltrado compatible sin otra causa explicable', '+1', '—'],
      ],
    },
    treatmentTable: {
      title: 'Esquema de Tratamiento y Monitorización en Síndrome DRESS',
      headers: ['Fase Terapéutica', 'Intervención y Fármaco', 'Dosis / Duración', 'Monitorización de Seguridad'],
      rows: [
        ['1. Retiro de Culpable', 'Suspensión inmediata de anticonvulsivantes, alopurinol o sulfas', 'Inmediato (día 0)', 'Evitar reactividad cruzada con otros anticonvulsivantes aromáticos'],
        ['2. Corticoterapia Inducción', 'Prednisona oral (o Metilprednisolona EV si hay falla hepática)', '0.5 a 1.0 mg/kg/día por vía oral (o pulsos EV 1 g/d x 3 d)', 'Control de presión arterial, hemoglucotest y profilaxis con IBP'],
        ['3. Desescalamiento Lento', 'Descenso paulatino bisemanal de la dosis de prednisona', 'Disminución progresiva a lo largo de 8 a 12 semanas (2-3 meses)', 'Monitorear reaparición de fiebre o eosinofilia por rebote'],
        ['4. Control Paraclínico', 'Perfil hepático (GOT/GPT/FA/Bilirrubina), Creatinina y Hemograma', 'Semanal durante el primer mes, luego cada 2 semanas', 'Descartar hepatitis fulminante o nefritis intersticial aguda'],
        ['5. Seguimiento Tardío', 'Evaluación tiroidea (TSH y T4 libre) a los 2 y 6 meses', 'Tamizaje de tiroiditis autoinmune post-DRESS', 'Pesquisar fenómenos autoinmunes tardíos post-reactivación viral'],
      ],
    },
    vignette: 'Mujer de 48 años con antecedente de neuralgia del trigémino que inició carbamazepina hace 4 semanas. Consulta en el servicio de urgencias por fiebre alta de 39 °C de 5 días de evolución, astenia intensa y aparición de una erupción cutánea pruriginosa. Al examen físico destaca paciente febril, con notable edema periorbitario y facial simétrico, asociado a un exantema eritematoso maculopapular confluente que cubre la cara, tronco y más del 60% de la superficie corporal, sin flictenas ni desprendimiento epidérmico (Nikolsky negativo). Se palpan adenopatías cervicales anteriores y axilares de 1.5 cm, sensibles. Los exámenes de laboratorio revelan: Leucocitos 18.500/uL con 18% de eosinófilos (recuento absoluto 3.330/uL), presencia de linfocitos reactivos atípicos en el frotis, GOT 320 U/L (VN < 35), GPT 410 U/L (VN < 35) y Creatinina 1.1 mg/dL.',
    explicacion: 'El cuadro clínico es clásico de un Síndrome DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms) secundario a carbamazepina. Los elementos definitorios son: 1) Período de latencia prolongado de 4 semanas; 2) Fiebre persistente y adenopatías múltiples; 3) Exantema eritematoso confluente con edema facial característico y Nikolsky negativo; 4) Marcada eosinofilia periférica (> 1.500/uL) y presencia de linfocitos atípicos; 5) Compromiso visceral evidenciado por hepatitis tóxica (transaminasas > 10 veces el valor normal). El score RegiSCAR es ≥ 6 (caso definitivo). La conducta inmediata es la suspensión absoluta y definitiva de la carbamazepina y el inicio de corticoterapia sistémica (prednisona 1 mg/kg/día) con un retiro muy gradual en 2 a 3 meses para evitar recaídas y falla hepática.',
    keyPoints: [
      'El DRESS tiene una latencia prolongada y característica de 2 a 8 semanas tras iniciar el fármaco.',
      'Los fármacos causales más comunes son Carbamazepina, Fenitoína, Fenobarbital y Alopurinol.',
      'La tríada cardinal es: Fiebre alta + Rash confluente con Edema Facial + Linfadenopatías.',
      'En el laboratorio destaca eosinofilia marcada (> 700-1500/uL) y presencia de linfocitos atípicos.',
      'El órgano interno más afectado es el hígado (hepatitis tóxica en 75-90% de los pacientes).',
      'A diferencia de SSJ/NET, el signo de Nikolsky es negativo y no hay desprendimiento epidérmico difuso.',
      'El tratamiento de elección es la Prednisona oral (1 mg/kg/día) con desescalamiento muy lento (2-3 meses).',
      'Existe reactivación de Herpesvirus humano tipo 6 (HHV-6) que explica las recaídas tardías.',
    ],
    questions: [
      {
        stem: 'Un hombre de 55 años inició tratamiento con alopurinol 300 mg/día hace un mes por gota tofácea. Consulta por fiebre de 39 °C, malestar general y un exantema eritematoso difuso confluente en tronco y extremidades, acompañado de evidente edema periorbitario y en mejillas. Al examen no se observan ampollas ni desprendimiento cutáneo. En el hemograma destaca leucocitosis de 16.000/uL con 2.100 eosinófilos/uL y linfocitos atípicos. El perfil hepático muestra GOT 280 U/L y GPT 340 U/L. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Síndrome de Stevens-Johnson' },
          { id: 'B', text: 'Síndrome DRESS' },
          { id: 'C', text: 'Psoriasis eritrodérmica' },
          { id: 'D', text: 'Urticaria aguda alérgica' },
          { id: 'E', text: 'Enfermedad del suero' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde con total precisión a un Síndrome DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms) inducido por alopurinol. Presenta todos los elementos diagnósticos clásicos: latencia de 4 semanas (1 mes), fiebre alta persistente, exantema morbiliforme confluente con edema facial prominente (sello semiológico), eosinofilia marcada (> 1.500/uL), linfocitos atípicos en sangre y compromiso hepático evidente con elevación de transaminasas. En el SSJ (A) habría ampollas, desprendimiento epidérmico, Nikolsky positivo y compromiso mucoso hemorrágico severo, sin eosinofilia prominente. La psoriasis eritrodérmica (C) cursa con descamación laminar generalizada y no da hepatitis ni eosinofilia de este grado.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.003',
      },
      {
        stem: '¿Cuál es el período de latencia típico característico que transcurre entre el inicio del medicamento causal y la aparición de las manifestaciones clínicas del Síndrome DRESS?',
        options: [
          { id: 'A', text: 'Menos de 24 a 48 horas' },
          { id: 'B', text: 'De 3 a 5 días' },
          { id: 'C', text: 'De 2 a 8 semanas' },
          { id: 'D', text: 'De 6 a 12 meses' },
          { id: 'E', text: 'Más de 2 años de uso ininterrumpido' },
        ],
        correcta: 'C',
        explicacion: 'Una de las características más importantes y preguntadas del Síndrome DRESS en el EUNACOM es su período de latencia inusualmente prolongado, que típicamente oscila entre 2 y 8 semanas (promedio 3 a 6 semanas) después de la primera dosis del fármaco responsable. Esto contrasta abiertamente con las reacciones anafilácticas o urticarias inmediatas (minutos a pocas horas), el exantema maculopapular benigno común (4 a 10 días) y el síndrome de Stevens-Johnson (1 a 3 semanas). Esta latencia tardía con frecuencia dificulta el reconocimiento inicial si el médico no indaga fármacos iniciados el mes previo.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.003',
      },
      {
        stem: '¿Cuál es el órgano interno que se compromete con mayor frecuencia en los pacientes con Síndrome DRESS y cuya afectación condiciona la principal causa de mortalidad?',
        options: [
          { id: 'A', text: 'Riñón (glomerulonefritis membranosa)' },
          { id: 'B', text: 'Hígado (hepatitis tóxica / necrosis hepática)' },
          { id: 'C', text: 'Pulmón (derrame pleural hemorrágico)' },
          { id: 'D', text: 'Páncreas (pancreatitis aguda necrotizante)' },
          { id: 'E', text: 'Sistema nervioso central (meningoencefalitis aséptica)' },
        ],
        correcta: 'B',
        explicacion: 'El hígado es, por amplio margen, el órgano interno más frecuentemente comprometido en el Síndrome DRESS, afectándose en el 75% al 90% de todos los casos confirmados. La presentación varía desde una elevación asintomática de transaminasas hasta una hepatitis tóxica severa con ictericia y coagulopatía, siendo la insuficiencia hepática aguda fulminante la principal causa de muerte por este síndrome (mortalidad global del 5% al 10%). El riñón (B) se afecta en un 15-30% de los casos (nefritis tubulointersticial, especialmente por alopurinol), pero con menor frecuencia que el hígado.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.003',
      },
      {
        stem: 'Una mujer de 32 años es diagnosticada de Síndrome DRESS secundario a fenitoína con compromiso hepático moderado (GPT 380 U/L). Se suspende el fármaco culpable y se inicia prednisona oral a 1 mg/kg/día con excelente mejoría clínica y paraclínica a las dos semanas. Respecto al plan de retiro de la corticoterapia, ¿cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Suspender de inmediato la prednisona ya que los exámenes se han normalizado' },
          { id: 'B', text: 'Reducir la dosis rápidamente para suspenderla en un plazo de 3 a 5 días' },
          { id: 'C', text: 'Disminuir la dosis de prednisona de manera muy lenta y progresiva a lo largo de 2 a 3 meses' },
          { id: 'D', text: 'Mantener la dosis plena de 1 mg/kg/día de por vida para evitar reactivación de la epilepsia' },
          { id: 'E', text: 'Cambiar a hidrocortisona tópica en crema y suspender la vía oral' },
        ],
        correcta: 'C',
        explicacion: 'En el síndrome DRESS, el desescalamiento de la corticoterapia sistémica debe realizarse de forma extraordinariamente lenta y paulatina, a lo largo de 8 a 12 semanas (2 a 3 meses). Esto se debe a que la respuesta inflamatoria mediada por linfocitos T y la reactivación concomitante del herpesvirus humano tipo 6 (HHV-6) persisten activas mucho después de retirado el medicamento. Una suspensión rápida (en días o semanas cortas) provoca casi invariablemente un "efecto rebote" con recurrencia de la fiebre, reaparición del exantema y hepatitis fulminante grave. Mantenerla de por vida (D) es incorrecto y tóxico.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.003',
      },
    ],
  },
  {
    id: 'derma-11',
    classId: 'derma-11',
    tier: 3,
    blockNum: 3,
    blockName: 'Farmacodermias Graves & Enfermedades Ampollares',
    topicLabel: '16.11',
    title: 'Pénfigo Vulgar (Intraepidérmico) vs Penfigoide Ampollar (Subepidérmico)',
    perfilCode: '6.01.2.004',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Dermatosis Ampollares Autoinmunes de Alto Riesgo',
    reconstrucciones: 'EUNACOM 2014 (Q#56) · EUNACOM Julio 2017 (Q#83) · EUNACOM Diciembre 2020 (Q#109)',
    frecuencia: 'Máxima rentabilidad semiológica · Diagnóstico diferencial obligatorio en EUNACOM: nivel de la ampolla (intraepidérmica vs subepidérmica), autoantígenos (desmogleína vs hemidesmosomas), signo de Nikolsky y compromiso mucoso',
    diagram: flow('Algoritmo de Diagnóstico Diferencial de Dermatosis Ampollares Autoinmunes', [
      { t: 'Paciente Adulto o Anciano con Erupción Ampollar Crónica / Erosiones Cutáneas', s: 'Paso 1: Evaluar morfología de la ampolla (flácida vs tensa), Signo de Nikolsky y presencia de úlceras orales' },
      { k: 'split', q: '¿Ampollas Flácidas, Nikolsky (+) y Afectación Oral PREVIA vs Ampollas Tensas, Nikolsky (-) y Prurito?', s: 'Diferenciación semiológica e histopatológica del nivel de clivaje de la ampolla', ll: 'Pénfigo Vulgar (Intraepidérmico)', rl: 'Penfigoide Ampollar (Subepidérmico)',
        left: { t: 'Pénfigo Vulgar (Autoanticuerpos anti-Desmogleína 3 y 1)', s: 'Ampolla FLÁCIDA que se rompe fácil · Nikolsky POSITIVO (+) · Úlceras orales dolorosas iniciales en 80-100% · Adultos 40-60 años', type: 'warn' },
        right: { t: 'Penfigoide Ampollar (Autoanticuerpos anti-BP180 y BP230)', s: 'Ampolla TENSA sobre base eritematosa o urticarial · Nikolsky NEGATIVO (-) · Prurito intenso · Respeta mucosa oral · Ancianos > 70 años', type: 'acc' },
        ll: 'clivaje suprabasal acantolítico', rl: 'clivaje subepidérmico en lámina basal' },
      { t: 'CONDUCTA TERAPÉUTICA DE ESPECIALIDAD', s: 'Pénfigo Vulgar: Corticoides orales a dosis altas (Prednisona 1-1.5 mg/kg/d) + Rituximab / Azatioprina · Penfigoide: Clobetasol tópico alta potencia en toda la piel o corticoides orales dosis moderada (0.5 mg/kg/d)', type: 'dec', al: 'inmunosupresión específica', from: 'left' },
    ]),
    contexto: 'Las enfermedades ampollares autoinmunes representan un clásico evaluado año a año en el examen EUNACOM. La distinción cardinal se establece entre el Pénfigo Vulgar (patología intraepidérmica con acantolisis mediada por autoanticuerpos dirigidos contra desmogleínas desmosómicas) y el Penfigoide Ampollar (patología subepidérmica mediada por autoanticuerpos contra proteínas hemidesmosómicas de la membrana basal: BP180 y BP230). El reconocimiento de las diferencias clínicas (flácida vs tensa, Nikolsky positivo vs negativo, afectación mucosa oral vs indemnidad de mucosas) y de la inmunofluorescencia directa permite responder con total certeza cualquier pregunta del examen.',
    contentSections: [
      {
        subhead: '1. Pénfigo Vulgar: Fisiopatología, Autoantígenos y Nivel de Clivaje',
        paragraphs: [
          '• <strong>Mecanismo Inmune:</strong> Es una enfermedad autoinmune potencialmente mortal causada por <strong>autoanticuerpos IgG circulantes dirigidos contra la Desmogleína 3 (Dsg3)</strong> —responsable de la adhesión queratinocítica suprabasal en mucosas— y secundariamente contra la <strong>Desmogleína 1 (Dsg1)</strong> en piel.<br>' +
          '• <strong>Fenómeno de Acantolisis:</strong> La unión del anticuerpo a las desmogleínas rompe los desmosomas (complejos de unión intercelular entre queratinocitos), provocando la pérdida de cohesión intercelular (acantolisis).<br>' +
          '• <strong>Nivel Histopatológico de la Ampolla:</strong> <strong>AMPOLLA INTRAEPIDÉRMICA SUPRABASAL</strong>. El techo de la ampolla está formado por las capas superiores de la epidermis y el piso por la monocapa de células basales ancladas a la lámina basal (aspecto de "hilera de lápidas sepulcrales").<br>' +
          '• <strong>Inmunofluorescencia Directa (IFD):</strong> Depósito intercelular intraepidérmico de <strong>IgG y C3 con patrón en "malla", "red de pescar" o "panal de abejas"</strong> alrededor de los queratinocitos.',
        ],
      },
      {
        subhead: '2. Semiología y Cuadro Clínico del Pénfigo Vulgar',
        paragraphs: [
          '• <strong>Población Típica:</strong> Adultos entre los <strong>40 y 60 años</strong>, sin predominio marcado de sexo.<br>' +
          '• <strong>Compromiso de Mucosa Oral (HALLAZGO INAUGURAL EN 70-90% DE CASOS):</strong><br>' +
          'El paciente debuta meses antes con erosiones y úlceras orales muy dolorosas en paladar blando, mucosa yugal y encías que tardan semanas en sanar y dificultan la alimentación. Es excepcional observar ampollas intactas en la boca debido al roce constante que las deseca de inmediato.<br>' +
          '• <strong>Lesiones Cutáneas:</strong><br>' +
          '- <strong>AMPOLLAS FLÁCIDAS, DE TECHO MUY DELGADO Y FRÁGIL</strong>, que surgen sobre piel aparentemente sana o ligeramente eritematosa.<br>' +
          '- Por ser de techo tan fino, <strong>se rompen con extrema facilidad al menor roce</strong>, dejando grandes erosiones y costras denudadas muy dolorosas que sangran y no cicatrizan espontáneamente.<br>' +
          '- <strong>SIGNO DE NIKOLSKY POSITIVO (+):</strong> Al frotar suavemente con el pulgar la piel aparentemente sana perilesional, la epidermis superior se desprende en bloque.<br>' +
          '- <strong>Signo de Asboe-Hansen (+):</strong> La compresión vertical del techo de una ampolla intacta extiende el líquido lateralmente despegando la piel vecina.',
        ],
      },
      {
        subhead: '3. Penfigoide Ampollar: Autoantígenos, Clivaje Subepidérmico y Clínica',
        paragraphs: [
          '• <strong>Mecanismo Inmune:</strong> Es la dermatosis ampollar autoinmune <strong>más frecuente</strong> de todas. Producida por autoanticuerpos IgG dirigidos contra componentes de los hemidesmosomas en la unión dermoepidérmica: el <strong>antígeno del penfigoide ampollar 1 (BP230)</strong> y el <strong>antígeno del penfigoide ampollar 2 (BP180 o colágeno XVII)</strong>.<br>' +
          '• <strong>Nivel Histopatológico de la Ampolla:</strong> <strong>AMPOLLA SUBEPIDÉRMICA</strong> (por debajo de la membrana basal). El techo de la ampolla contiene toda la epidermis íntegra y engrosada, lo que le otorga enorme resistencia y estabilidad.<br>' +
          '• <strong>Inmunofluorescencia Directa (IFD):</strong> Depósito continuo y lineal de <strong>IgG y C3 a lo largo de la membrana basal</strong> (patrón lineal de unión dermoepidérmica).<br>' +
          '• <strong>Población Afectada:</strong> Predomina marcadamente en <strong>ancianos mayores de 70 u 80 años</strong>, con frecuencia con comorbilidades neurológicas crónicas (demencia, Parkinson o ACV previo).<br>' +
          '• <strong>Cuadro Clínico Clásico:</strong><br>' +
          '- <strong>Fase Prodrómica Pruriginosa:</strong> Meses antes pueden presentar un prurito intenso e intratable con placas urticariales eritematosas semejantes a eccema o urticaria ("fase pre-ampollar").<br>' +
          '- <strong>AMPOLLAS TENSAS Y DURO-ELÁSTICAS:</strong> Ampollas de gran tamaño (de 1 a varios centímetros), de paredes gruesas y contenido seroso o hemorrágico transparente, que <strong>NO se rompen fácilmente</strong> y permanecen intactas durante días.<br>' +
          '- Asientan predominantemente sobre base eritematosa o eccematosa en abdomen inferior, ingles, axilas y caras de flexión de extremidades.<br>' +
          '- <strong>SIGNO DE NIKOLSKY NEGATIVO (-):</strong> La fricción lateral no despega la piel vecina porque la cohesión intraepidérmica está completamente sana.<br>' +
          '- <strong>COMPROMISO DE MUCOSAS EXCEPCIONAL (< 10-20%):</strong> Respeta típicamente la mucosa oral.<br>' +
          '- Frecuente presencia de <strong>Eosinofilia</strong> periférica y en el líquido de la ampolla.',
        ],
      },
      {
        subhead: '4. Comparación Terapéutica y Pronóstico Vital',
        paragraphs: [
          '• <strong>Tratamiento del Pénfigo Vulgar:</strong><br>' +
          '- Históricamente era una patología mortal (> 70% por sepsis o deshidratación antes de los corticoides).<br>' +
          '- <strong>Pilar Inicial: Corticoides Sistémicos en Dosis Altas:</strong> <strong>Prednisona oral a 1.0 a 1.5 mg/kg/día</strong> (asociado a profilaxis de osteoporosis y gastroprotección).<br>' +
          '- <strong>Terapia Ahorradora de Corticoides y Biológica:</strong> <strong>Rituximab (anticuerpo monoclonal anti-CD20)</strong> es hoy de primera línea en guías internacionales para inducir remisión completa precoz; alternativamente Azatioprina o Micofenolato Mofetilo.<br>' +
          '• <strong>Tratamiento del Penfigoide Ampollar:</strong><br>' +
          '- El tratamiento de elección de primera línea (demostrado en ensayos clínicos con menor mortalidad que corticoides orales en ancianos) es el uso de <strong>Corticoides Tópicos de Muy Alta Potencia (Clobetasol propionato crema al 0.05% aplicado en todo el cuerpo, 20-40 g/día)</strong>.<br>' +
          '- Si hay intolerancia tópica o enfermedad muy extensa: Prednisona oral a dosis moderadas (0.5 mg/kg/día), asociando Metotrexato oral a dosis bajas si se requiere mantenimiento.',
        ],
      },
    ],
    table: {
      title: 'Tabla Comparativa Clave EUNACOM: Pénfigo Vulgar vs Penfigoide Ampollar',
      headers: ['Parámetro', 'Pénfigo Vulgar', 'Penfigoide Ampollar'],
      rows: [
        ['Grupo Etario Típico', 'Adultos de 40 a 60 años', 'Adultos mayores / Ancianos (> 70-80 años)'],
        ['Autoantígenos Diana', 'Desmogleína 3 (mucosa) y Desmogleína 1 (piel)', 'BP180 (colágeno XVII) y BP230 (hemidesmosomas)'],
        ['Estructura Afectada', 'Desmosomas (unión célula-célula)', 'Hemidesmosomas (unión epidermis-dermis)'],
        ['Nivel Histológico de la Ampolla', 'Intraepidérmica suprabasal (con acantolisis)', 'Subepidérmica (techo epidérmico completo íntegro)'],
        ['Morfología de la Ampolla', 'Flácida, pared muy delgada, se rompe rápido', 'Tensa, pared gruesa resistente, permanece días'],
        ['Signo de Nikolsky', 'Positivo (+)', 'Negativo (-)'],
        ['Afectación de Mucosa Oral', 'Muy frecuente (> 70-90%, suele ser el inicio)', 'Rara (< 10-20%, casi siempre respeta mucosas)'],
        ['Prurito', 'Raro o escaso (predomina el dolor y ardor)', 'Muy intenso (síntoma cardinal predominante)'],
        ['Inmunofluorescencia Directa', 'Depósito intraepidérmico en "red de pescar" / "malla"', 'Depósito lineal continuo en la membrana basal'],
        ['Tratamiento de Elección', 'Corticoides orales dosis altas (1-1.5 mg/kg) + Rituximab', 'Corticoides tópicos potentes (Clobetasol) o Prednisona 0.5 mg/kg'],
      ],
    },
    severityTable: {
      title: 'Diagnóstico Diferencial Completo de Enfermedades Ampollares para EUNACOM',
      headers: ['Entidad Clínica', 'Nivel de la Ampolla', 'Signo de Nikolsky', 'Asociación Clínica y Terapéutica Clave'],
      rows: [
        ['Pénfigo Vulgar', 'Intraepidérmica suprabasal', 'Positivo (+)', 'Anticuerpos anti-Dsg3; úlceras orales graves; Prednisona altas dosis'],
        ['Pénfigo Foliáceo', 'Intraepidérmica subcórnea', 'Positivo (+)', 'Anticuerpos anti-Dsg1; NO afecta mucosas; escamas y costras superficiales'],
        ['Penfigoide Ampollar', 'Subepidérmica', 'Negativo (-)', 'Anticuerpos anti-BP180/BP230; prurito en ancianos; Clobetasol tópico'],
        ['Dermatitis Herpetiforme', 'Subepidérmica (microabscesos papilares)', 'Negativo (-)', 'Asociada 100% a Celiaquía; IgA granular en papilas dérmicas; Dapsona'],
        ['Epidermólisis Bullosa', 'Subepidérmica mecánica hereditaria', 'Variable', 'Genética congénita ("piel de mariposa"); fragilidad extrema ante trauma'],
        ['NET / Síndrome de Lyell', 'Necrosis epidérmica total', 'Positivo (+)', 'Desencadenada por fármacos; > 30% BSA desprendida; Centro de Quemados'],
      ],
    },
    treatmentTable: {
      title: 'Protocolos de Inmunosupresión en Pénfigo Vulgar y Penfigoide Ampollar',
      headers: ['Enfermedad', 'Fase de Inducción', 'Fase de Mantenimiento / Ahorradores', 'Monitorización Crítica'],
      rows: [
        ['Pénfigo Vulgar', 'Prednisona oral 1.0 a 1.5 mg/kg/día (o pulsos de Metilprednisolona)', 'Rituximab 1000 mg IV (días 1 y 15) o Azatioprina 2-3 mg/kg/día', 'Pesquisar infecciones oportunistas, sepsis, diabetes esteroidal'],
        ['Penfigoide Ampollar (Leve-Mod)', 'Clobetasol propionato 0.05% crema 20-30 g/día en todo el tegumento', 'Reducción progresiva de aplicaciones tópicas a lo largo de 4-6 meses', 'Vigilar atrofia cutánea superficial; menor riesgo sistémico'],
        ['Penfigoide Ampollar (Grave/Ext)', 'Prednisona oral 0.5 mg/kg/día', 'Metotrexato oral 10-15 mg/semana + Ácido fólico o Azatioprina', 'Hemograma y función hepática seriada por inmunosupresión'],
      ],
    },
    vignette: 'Hombre de 46 años consulta por múltiples erosiones dolorosas en la mucosa bucal y encías de 3 meses de evolución, tratadas sin éxito con enjuagues bucales y nistatina. Desde hace 3 semanas nota la aparición en el pecho y espalda de varias ampollas de contenido transparente que se rompen con extrema facilidad con el roce de la camisa, dejando erosiones eritematosas descubiertas muy sensibles y exudativas. Al examen físico no se aprecian ampollas intactas en la cavidad oral sino múltiples aftas y úlceras en mucosa yugal; en el tronco se observan algunas ampollas flácidas de paredes delgadas y extensas áreas denudadas húmedas. Al ejercer una suave presión tangencial con el dedo sobre la piel aparentemente sana adyacente a una lesión, la epidermis se desprende con facilidad desnudando la dermis.',
    explicacion: 'La presencia de ampollas flácidas intraepidérmicas que se rompen con gran fragilidad, el antecedente de úlceras orales crónicas dolorosas que precedieron a las lesiones cutáneas y el Signo de Nikolsky positivo en un paciente adulto de mediana edad (46 años) configuran el cuadro clínico típico e indudable de un Pénfigo Vulgar. La fisiopatología corresponde a la producción de autoanticuerpos IgG contra desmogleína 3 y desmogleína 1 con acantolisis suprabasal. El diagnóstico se confirma con biopsia para histología e inmunofluorescencia directa que demostrará depósitos de IgG intercelulares en "red de pescar". El tratamiento inicial mandatorio son los corticoides sistémicos a dosis altas (prednisona 1 a 1.5 mg/kg/día), asociados a inmunosupresores como rituximab.',
    keyPoints: [
      'Pénfigo Vulgar = Ampolla flácida intraepidérmica suprabasal + Nikolsky (+) + Afectación mucosa oral inicial.',
      'Penfigoide Ampollar = Ampolla tensa subepidérmica + Nikolsky (-) + Prurito intenso en ancianos + Respeta boca.',
      'El autoantígeno del pénfigo vulgar es la Desmogleína 3 y 1 (desmosomas / acantolisis).',
      'El autoantígeno del penfigoide ampollar es BP180 y BP230 (hemidesmosomas / membrana basal).',
      'La IFD en pénfigo muestra depósito en "red de pescar"; en penfigoide muestra depósito lineal en membrana basal.',
      'El tratamiento del pénfigo vulgar requiere corticoides orales a dosis altas (1-1.5 mg/kg) + Rituximab.',
      'El tratamiento de primera línea del penfigoide ampollar es el corticoide tópico de alta potencia (Clobetasol).',
    ],
    questions: [
      {
        stem: 'Un hombre de 76 años, con antecedentes de enfermedad de Parkinson, consulta por un cuadro de 2 meses de evolución de prurito generalizado severo, al que se agregó en las últimas dos semanas la aparición de múltiples ampollas de gran tamaño en el abdomen, ingles y caras internas de muslos. Al examen físico se aprecian numerosas ampollas de contenido seroso claro, de paredes gruesas, muy tensas y duras a la palpación, asentadas sobre placas eritematosas. La mucosa oral no presenta lesiones. Al frotar con fuerza moderada la piel sana perilesional, la epidermis no se despega. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Pénfigo vulgar' },
          { id: 'B', text: 'Penfigoide ampollar' },
          { id: 'C', text: 'Necrólisis epidérmica tóxica' },
          { id: 'D', text: 'Dermatitis herpetiforme' },
          { id: 'E', text: 'Epidermólisis bullosa simple' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro clínico es patognomónico de Penfigoide Ampollar. Los hallazgos cardinales que lo confirman son: 1) Edad avanzada (76 años con patología neurológica crónica asociada); 2) Prurito intenso prodrómico; 3) Ampollas tensas, de paredes gruesas y resistentes que no se rompen fácilmente; 4) Signo de Nikolsky negativo (la epidermis sana no se desprende con la fricción); y 5) Ausencia de compromiso en la mucosa oral. El pénfigo vulgar (A) afectaría a personas más jóvenes (40-60 años), cursaría con ampollas flácidas muy frágiles, Nikolsky positivo y compromiso oral casi universal. La NET (C) es una farmacodermia aguda grave con Nikolsky positivo y desprendimiento masivo. La dermatitis herpetiforme (D) se asocia a celiaquía con vesículas en codos y rodillas.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.004',
      },
      {
        stem: '¿Cuál es el hallazgo anatomopatológico característico en la biopsia cutánea que define la ampolla del Pénfigo Vulgar?',
        options: [
          { id: 'A', text: 'Ampolla subepidérmica con neutrófilos en las papilas dérmicas' },
          { id: 'B', text: 'Ampolla intraepidérmica suprabasal con acantolisis celular' },
          { id: 'C', text: 'Ampolla subcórnea con pústulas de espongiosis eosinofílica' },
          { id: 'D', text: 'Necrosis de espesor total de la epidermis con despegamiento dermoepidérmico' },
          { id: 'E', text: 'Vacuolización de la capa basal con infiltrado linfocítico en banda' },
        ],
        correcta: 'B',
        explicacion: 'El hallazgo histopatológico diagnóstico del Pénfigo Vulgar es la ampolla intraepidérmica de localización suprabasal con acantolisis (pérdida de uniones desmosómicas entre queratinocitos mediada por anticuerpos anti-desmogleína 3). La hilera de queratinocitos de la capa basal permanece adherida a la membrana basal mediante sus hemidesmosomas indemnes, adoptando el clásico aspecto de "hilera de lápidas sepulcrales". La ampolla subepidérmica (A) es propia del penfigoide ampollar y dermatitis herpetiforme. La ampolla subcórnea (C) es del impétigo ampollar o pénfigo foliáceo. La necrosis epidérmica total (D) es de la NET. La vacuolización basal en banda (E) es del liquen plano.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.004',
      },
      {
        stem: 'Una paciente de 50 años con diagnóstico confirmado de Pénfigo Vulgar extenso inicia tratamiento de inducción. ¿Cuál es el tratamiento médico de primera línea indicado para controlar la actividad de la enfermedad?',
        options: [
          { id: 'A', text: 'Corticoides sistémicos a dosis altas (Prednisona 1 a 1.5 mg/kg/día)' },
          { id: 'B', text: 'Antihistamínicos H1 orales de segunda generación en dosis estándar' },
          { id: 'C', text: 'Dapsona oral combinada con dieta estricta libre de gluten' },
          { id: 'D', text: 'Aciclovir oral en dosis de 800 mg cinco veces al día' },
          { id: 'E', text: 'Metotrexato subcutáneo a dosis bajas en monoterapia exclusiva' },
        ],
        correcta: 'A',
        explicacion: 'El pilar fundamental e irremplazable de primera línea para el tratamiento del Pénfigo Vulgar agudo son los Corticoides Sistémicos en dosis altas (Prednisona oral a 1.0 a 1.5 mg/kg/día, o pulsos endovenosos de metilprednisolona en formas hiperagudas fulminantes). Debido a la alta morbimortalidad de los corticoides a largo plazo, se asocian precozmente a agentes biológicos como Rituximab (anti-CD20) o inmunosupresores como azatioprina o micofenolato como ahorradores de corticoides. La dapsona con dieta sin gluten (C) es el tratamiento de la dermatitis herpetiforme asociada a celiaquía. El aciclovir (D) trata herpes. Los antihistamínicos (B) no frenan la acantolisis autoinmune.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.004',
      },
      {
        stem: '¿Cuál es el patrón característico observado en la Inmunofluorescencia Directa (IFD) de una biopsia perilesional en un paciente con Penfigoide Ampollar?',
        options: [
          { id: 'A', text: 'Depósito de IgA granular en los vértices de las papilas dérmicas' },
          { id: 'B', text: 'Depósito intercelular intraepidérmico de IgG en patrón de red de pescar' },
          { id: 'C', text: 'Depósito lineal y continuo de IgG y C3 a lo largo de la membrana basal' },
          { id: 'D', text: 'Ausencia total de depósitos inmunes en la epidermis y dermis' },
          { id: 'E', text: 'Depósito granular de IgM en los vasos capilares dérmicos superficiales' },
        ],
        correcta: 'C',
        explicacion: 'En el Penfigoide Ampollar, la inmunofluorescencia directa (IFD) sobre piel perilesional revela un depósito continuo y lineal de IgG y factor C3 del complemento a lo largo de la zona de la membrana basal (unión dermoepidérmica), donde se ubican los antígenos hemidesmosómicos BP180 y BP230. En contraste, el pénfigo vulgar (B) muestra un depósito intercelular de IgG en patrón de "red de pescar" o "malla" en la epidermis. El depósito granular de IgA en las papilas dérmicas (A) es patognomónico de la dermatitis herpetiforme de Duhring-Brocq.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.004',
      },
    ],
  },
  {
    id: 'derma-12',
    classId: 'derma-12',
    tier: 2,
    blockNum: 3,
    blockName: 'Farmacodermias Graves & Enfermedades Ampollares',
    topicLabel: '16.12',
    title: 'Eritema Multiforme: Morfología en Diana Clásica y Asociación a Virus Herpes Simple',
    perfilCode: '6.01.2.005',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Manejo Ambulatorio y Criterios de Derivación',
    reconstrucciones: 'EUNACOM 2012 (Q#31) · EUNACOM Julio 2019 (Q#45)',
    frecuencia: 'Alta rentabilidad · Lesión elemental en diana o escarapela típica con 3 zonas concéntricas, desencadenada en > 70% por infección previa por Virus Herpes Simple (VHS) o Mycoplasma, y distinción estricta de SSJ',
    diagram: flow('Algoritmo de Diagnóstico y Manejo de Eritema Multiforme', [
      { t: 'Paciente Joven con Lesiones Cutáneas Acrales Anulares tras Cuadro de Herpes Labial', s: 'Paso 1: Identificar lesiones en diana o escarapela clásica (3 anillos concéntricos bien delimitados)' },
      { k: 'split', q: '¿Presenta Compromiso Mucoso Severo o Flictenas / Desprendimiento Cutáneo?', s: 'Evaluación de gravedad clínica y diagnóstico diferencial', ll: 'Lesiones en Diana Acrales SIN Desprendimiento', rl: 'Desprendimiento Cutáneo / Mucosas Graves',
        left: { t: 'Eritema Multiforme (Minor / Major)', s: 'Diana típica (3 anillos) · Predominio acral (manos, codos, rodillas) · Asocia a VHS o Mycoplasma · Nikolsky (-)', type: 'acc' },
        right: { t: 'Sospecha de Síndrome de Stevens-Johnson (SSJ)', s: 'Dianas atípicas (2 anillos) · Desprendimiento epidérmico · Nikolsky (+) · Desencadenado por fármacos', type: 'crit' },
        ll: 'diana típica de 3 anillos', rl: 'diana atípica y desprendimiento' },
      { t: 'TRATAMIENTO SINTOMÁTICO Y ANTIVIRAL', s: 'Tratar causa subyacente: Aciclovir oral si hay sospecha de VHS recurrente · Antihistamínicos orales + Corticoides tópicos · Resuelve espontáneamente en 2 a 4 semanas', type: 'dec', al: 'manejo ambulatorio en aps', from: 'left' },
    ]),
    contexto: 'El Eritema Multiforme (antiguamente llamado eritema multiforme menor) es una reacción inmunológica mucocutánea aguda y autolimitada mediada por complejos inmunes y linfocitos T citotóxicos. La causa desencadenante más frecuente por amplio margen (> 70% de los casos) es una infección viral precedente por Virus Herpes Simple (VHS-1 o VHS-2), típicamente un herpes labial presentado 7 a 14 días antes. La segunda causa más común es Mycoplasma pneumoniae en niños y adultos jóvenes. En las clasificaciones dermatológicas modernas, el Eritema Multiforme se considera una entidad completamente separada del Síndrome de Stevens-Johnson (que es una farmacodermia necrotizante grave).',
    contentSections: [
      {
        subhead: '1. Morfología de la Lesión en Diana Típica (Lesión en Escarapela)',
        paragraphs: [
          '• <strong>LA LESIÓN PATOGNOMÓNICA: DIANA CLÁSICA O EN ESCARAPELA:</strong><br>' +
          'Se trata de una lesión anular concéntrica muy bien delimitada, regular, de menos de 3 cm de diámetro, que se compone de <strong>TRES ZONAS CONCÉNTRICAS BIEN DIFERENCIADAS</strong>:<br>' +
          '1. <strong>Centro oscuro:</strong> Disco central violáceo, purpúrico o con una microvesícula/costra.<br>' +
          '2. <strong>Anillo intermedio pálido:</strong> Zona edematosa elevada de color blanquecino o rosado claro.<br>' +
          '3. <strong>Halo exterior eritematoso:</strong> Anillo externo plano de color rojo brillante o violáceo bien circunscrito.<br>' +
          '• <strong>Distribución Acral y Simétrica:</strong> Las lesiones aparecen de forma eruptiva y bilateral en las <strong>extremidades: dorso de manos, muñecas, palmas, antebrazos, codos, rodillas y dorso de pies</strong>. Es común que se extiendan centrípetamente hacia el tronco.',
        ],
      },
      {
        subhead: '2. Clasificación: Eritema Multiforme Minor vs Major y Causas Gatillantes',
        paragraphs: [
          '• <strong>Eritema Multiforme Minor:</strong> Presenta lesiones típicas en diana en piel acral, <strong>sin afección de mucosas o con compromiso leve de una sola mucosa (habitualmente oral)</strong>. Buen estado general del paciente, sin fiebre ni compromiso sistémico.<br>' +
          '• <strong>Eritema Multiforme Major:</strong> Presenta lesiones típicas en diana o placas eritematosas dianaformes asociadas a <strong>compromiso mucoso franco en al menos dos mucosas (oral, conjuntival o genital)</strong>, con fiebre y astenia. A pesar de las erosiones mucosas, <strong>NO presenta desprendimiento epidérmico en sábanas y el Signo de Nikolsky es NEGATIVO</strong>.<br>' +
          '• <strong>Etiología Desencadenante:</strong><br>' +
          '- <strong>Infecciosa en > 90%:</strong> <strong>Virus Herpes Simple tipo 1 y 2 (causa número 1, responsable de más del 70% de casos y de las recurrencias periódicas)</strong>. El ADN viral de VHS se transporta por células de Langerhans a la piel donde estimula la citotoxicidad.<br>' +
          '- <em>Mycoplasma pneumoniae:</em> Causa infecciosa prominente en niños (asociada a menudo a neumonía atípica y mucositis grave).<br>' +
          '- <em>Fármacos:</em> Muy infrecuente como causa de eritema multiforme típico con dianas de 3 anillos (< 10%).',
        ],
      },
      {
        subhead: '3. Diagnóstico y Manejo Terapéutico',
        paragraphs: [
          '• <strong>Diagnóstico Clínico:</strong> Es eminentemente visual e inspeccional. La presencia de dianas de 3 zonas concéntricas de predominio acral con antecedente de herpes labial previo es confirmatoria.<br>' +
          '• <strong>Tratamiento Sintomático de Soporte:</strong><br>' +
          '- Por regla general es una enfermedad benigna autolimitada que <strong>se resuelve espontáneamente en 2 a 4 semanas</strong> sin secuelas cicatriciales.<br>' +
          '- Control del prurito y ardor con <strong>Antihistamínicos orales</strong> (Cetirizina, Desloratadina) y <strong>Corticoides tópicos</strong> en las lesiones dérmicas.<br>' +
          '- Enjuagues orales antisépticos o con lidocaína viscosa para el dolor en erosiones bucales.<br>' +
          '• <strong>Terapia Antiviral Específica:</strong><br>' +
          '- En el episodio agudo: Si el herpes labial está activo simultáneamente, se indica <strong>Aciclovir oral (400 mg 5 veces/día o Valaciclovir 500-1000 mg cada 12 h)</strong>.<br>' +
          '- <strong>Eritema Multiforme Recurrente por VHS:</strong> En pacientes que sufren más de 3 a 5 brotes al año, el tratamiento de elección profiláctico es la <strong>terapia antiviral supresiva continua con Aciclovir oral (400 mg cada 12 horas por 6 meses)</strong>, logrando prevenir las recurrencias en más del 80% de los casos.',
        ],
      },
    ],
    table: {
      title: 'Diferencias Cardinales: Eritema Multiforme vs Síndrome de Stevens-Johnson',
      headers: ['Criterio Diferencial', 'Eritema Multiforme (EM)', 'Síndrome de Stevens-Johnson (SSJ)'],
      rows: [
        ['Etiología Principal', 'Infecciosa: Virus Herpes Simple (> 70%) o Mycoplasma', 'Medicamentosa: Fármacos (Alopurinol, sulfas, anticonvulsivantes)'],
        ['Morfología de la Diana', 'Diana típica clásica con 3 anillos concéntricos definidos', 'Diana atípica con 2 anillos (centro purpúrico/ampollar plano)'],
        ['Distribución Anatómica', 'Acral: dorso de manos, antebrazos, codos, rodillas', 'Centrípeta y axial: tronco, tórax anterior, cara y cuello'],
        ['Desprendimiento Epidérmico', 'Ausente (0% de superficie corporal desprendida)', 'Presente (< 10% en SSJ puro, > 30% en NET)'],
        ['Signo de Nikolsky', 'Negativo (-)', 'Positivo (+) en piel perilesional'],
        ['Compromiso de Mucosas', 'Ausente o leve a moderado (oral); buen estado general', 'Severo, extenso, hemorrágico y con costras labiales'],
        ['Pronóstico y Manejo', 'Autolimitado en 2-4 semanas; manejo ambulatorio en APS', 'Grave con riesgo vital; requiere hospitalización en UCI/Quemados'],
      ],
    },
    vignette: 'Joven de 22 años consulta en el CESFAM por la aparición súbita hace 3 días de múltiples lesiones cutáneas eritematosas poco pruriginosas en ambas manos y antebrazos. Refiere como único antecedente haber presentado un brote de "fuegos labiales" (herpes labial recurrente) hace 10 días, el cual ya se encuentra en fase costrosa cicatrizal. Al examen físico se aprecian múltiples lesiones circulares regulares de 1 a 2 cm de diámetro en el dorso de las manos, palmas y cara extensora de ambos antebrazos. Cada lesión presenta un centro violáceo oscuro con una pequeña vesícula central, rodeado por un anillo pálido edematoso y un halo exterior eritematoso rojo vivo bien delimitado (aspecto de tiro al blanco o escarapela). El signo de Nikolsky es negativo y la mucosa oral no presenta úlceras.',
    explicacion: 'El cuadro corresponde a un Eritema Multiforme clásico (Eritema Multiforme Minor). La morfología de las lesiones en diana típica o escarapela con 3 anillos concéntricos bien delimitados, de distribución simétrica y predominantemente acral en dorso de manos y antebrazos, gatillada 10 días después de un episodio de herpes labial por Virus Herpes Simple (la causa más frecuente en > 70% de los casos), confirma el diagnóstico. El signo de Nikolsky negativo y la ausencia de desprendimiento epidérmico o afección mucosa severa descartan de plano un síndrome de Stevens-Johnson. El manejo en este paciente es sintomático ambulatorio con antihistamínicos orales y corticoides tópicos, con resolución espontánea esperada en 2 a 4 semanas.',
    keyPoints: [
      'La causa más frecuente de Eritema Multiforme es el Virus Herpes Simple (VHS-1 y 2) en > 70% de los casos.',
      'La segunda causa infecciosa relevante es Mycoplasma pneumoniae en niños y jóvenes.',
      'La lesión elemental patognomónica es la Diana Típica o en Escarapela con 3 zonas concéntricas.',
      'Se distribuye de forma simétrica en zonas acrales: dorso de manos, palmas, antebrazos y rodillas.',
      'En el eritema multiforme NO hay desprendimiento epidérmico en sábanas y el Nikolsky es NEGATIVO.',
      'El cuadro es benigno y autolimitado, resolviéndose espontáneamente en 2 a 4 semanas.',
      'En casos de brotes recurrentes frecuentes asociados a VHS, el tratamiento de elección es Aciclovir oral supresivo.',
    ],
    questions: [
      {
        stem: 'Un adulto joven de 24 años consulta por una erupción cutánea en el dorso de ambas manos y antebrazos caracterizada por lesiones redondeadas eritematosas, con un centro purpúrico violáceo rodeado por un anillo pálido edematoso y un halo eritematoso externo (lesiones en diana de 3 anillos). Refiere haber tenido un episodio de herpes labial hace una semana. Al examen físico no se palpan adenopatías y el signo de Nikolsky es negativo. ¿Cuál es el diagnóstico más probable y el agente causal más frecuentemente asociado?',
        options: [
          { id: 'A', text: 'Síndrome de Stevens-Johnson por ingesta de paracetamol' },
          { id: 'B', text: 'Eritema multiforme por infección por Virus Herpes Simple' },
          { id: 'C', text: 'Urticaria multiforme por virus de Epstein-Barr' },
          { id: 'D', text: 'Penfigoide ampollar por exposición a radiación UV' },
          { id: 'E', text: 'Lupus eritematoso discoide por fotosensibilidad' },
        ],
        correcta: 'B',
        explicacion: 'La presencia de lesiones en diana o escarapela típica con 3 anillos concéntricos en extremidades acrales, asociadas al antecedente inmediato de herpes labial (7 a 14 días previos), es el cuadro clásico indiscutible de un Eritema Multiforme inducido por Virus Herpes Simple (VHS). El VHS es el responsable de más del 70% de todos los casos de eritema multiforme. El SSJ (A) cursa con dianas atípicas de solo dos zonas, Nikolsky positivo, flictenas con desprendimiento epidérmico y compromiso mucoso severo. La urticaria multiforme (C) produce habones evanescentes migratorios que duran menos de 24 horas cada uno. El penfigoide (D) da ampollas tensas en ancianos.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.005',
      },
      {
        stem: 'Un paciente de 28 años presenta su quinto episodio en el último año de eritema multiforme con lesiones típicas en diana en manos y antebrazos, todos ellos precedidos 10 días antes por un brote visible de herpes labial recurrente. ¿Cuál es la conducta médica más adecuada para prevenir futuros episodios?',
        options: [
          { id: 'A', text: 'Prednisona oral en dosis de 1 mg/kg/día de forma indefinida' },
          { id: 'B', text: 'Tratamiento profiláctico continuo con Aciclovir oral durante 6 meses' },
          { id: 'C', text: 'Aplicación de protector solar factor 50+ como única medida' },
          { id: 'D', text: 'Inmunoterapia con interferón gamma recombinante subcutáneo' },
          { id: 'E', text: 'Derivación para plasmaféresis de mantención mensual' },
        ],
        correcta: 'B',
        explicacion: 'En pacientes con Eritema Multiforme recurrente frecuente (más de 3 a 5 episodios al año) asociado a reactivaciones documentadas de Virus Herpes Simple (VHS), la indicación médica con mayor nivel de evidencia es la profilaxis o terapia supresiva continua con antivirales orales: Aciclovir oral (400 mg cada 12 horas) o Valaciclovir (500 mg una vez al día) durante 6 a 12 meses. Esta estrategia suprime la replicación del ADN viral del VHS en los ganglios sensitivos, previniendo el estímulo inmunológico antigénico en la piel y evitando las recidivas en más del 80% de los casos. Los corticoides sistémicos continuos (A) están contraindicados por su severa toxicidad acumulativa.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.005',
      },
    ],
  },
];

module.exports = { bloque3 };
