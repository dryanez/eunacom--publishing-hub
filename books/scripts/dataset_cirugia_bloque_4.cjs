const { flowCirugia } = require('./flow_builder.cjs');

const bloque4Classes = [
  // ==========================================================================
  // TEMA 11.14: EVALUACIÓN PREOPERATORIA (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-14',
    classId: 'cirugia-14',
    tier: 2,
    blockNum: 4,
    blockName: 'Preoperatorio, Anestesia & Complicaciones Quirúrgicas',
    topicLabel: '11.14',
    title: 'Evaluación Preoperatoria: Escala ASA, Score Cardíaco de Lee & Fármacos Perioperatorios',
    perfilCode: '4.01.5.013',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Completo',
    ges: 'Sin garantía GES específica · Norma Técnica del Ministerio de Salud sobre Evaluación y Manejo del Riesgo Perioperatorio.',
    reconstrucciones: 'EUNACOM Julio 2024 (Q#48) · EUNACOM Diciembre 2022 (Q#39) · EUNACOM Enero 2021 (Q#115)',
    frecuencia: 'Alta frecuencia en el EUNACOM · Evaluación transversal en pacientes quirúrgicos electivos y de urgencia',
    diagram: flowCirugia('Enfrentamiento Preoperatorio y Manejo de Fármacos Perioperatorios', [
      { t: 'Paciente Programado para Cirugía: Evaluación del Riesgo Quirúrgico', s: 'Anamnesis clínica completa + Examen físico + Capacidad funcional (METs ≥ 4)', type: 'acc' },
      { t: 'Estratificación del Riesgo: Escala ASA (I a VI) & Score de Lee (RCRI)', s: 'Lee ≥ 2 factores predice riesgo cardiovascular elevado · ASA III o IV requiere optimización', type: 'warn' },
      { k: 'split', q: '¿Conducta con Fármacos de Uso Crónico en el Perioperatorio?', s: 'Diferenciación entre fármacos que se mantienen vs fármacos que se suspenden',
        ll: 'FÁRMACOS QUE SE MANTIENEN hasta la mañana de la cirugía',
        left: { t: 'Betabloqueadores, Estatinas, Tiroideos', s: 'Atenolol, bisoprolol, levotiroxina, inhaladores respiratorios (tomar con sorbo de agua)', type: 'acc' },
        rl: 'FÁRMACOS QUE SE SUSPENDEN antes de pabellón',
        right: { t: 'Suspender: IECAs/ARA-II, Metformina, Anticoagulantes', s: 'IECA/ARA-II: suspender 24 h antes (hipotensión) · Metformina: 24-48 h antes · DOACs: 48 h', type: 'crit' }
      },
      { t: 'Manejo de Antiagregantes Plaquetarios y Anticoagulación', s: 'AAS: Mantener en prevención secundaria salvo neurocirugía · Clopidogrel: Suspender 5-7 días', type: 'dec' },
      { t: 'Exámenes Preoperatorios de Rutina según Edad y Comorbilidad', s: 'No solicitar batería rutinaria en ASA I asintomáticos < 40 años; orientar por clínica', type: 'acc' }
    ]),
    contexto: 'La evaluación preoperatoria no busca "dar un pase quirúrgico", sino estratificar con exactitud el riesgo de morbimortalidad anestésico-quirúrgica e implementar medidas de optimización médica para prevenir complicaciones perioperatorias. La clasificación del estado físico de la American Society of Anesthesiologists (ASA) y el Índice de Riesgo Cardíaco Revisado de Lee (RCRI) son las herramientas clínicas universales. Uno de los tópicos más preguntados en el EUNACOM es el manejo farmacológico perioperatorio específico: qué medicamentos se mantienen rigurosamente y cuáles deben suspenderse para evitar hipotensión refractaria, acidosis láctica o hemorragia perioperatoria.',
    contentSections: [
      {
        subhead: '1. Clasificación del Estado Físico ASA y Capacidad Funcional (METs)',
        paragraphs: [
          'La <strong>Clasificación ASA</strong> estratifica el estado fisiológico global preanestésico:',
          '• <strong>ASA I:</strong> Paciente sano, sin comorbilidades médicas, no fumador, consumo de alcohol mínimo o nulo.',
          '• <strong>ASA II:</strong> Paciente con <strong>enfermedad sistémica leve sin limitación funcional sustancial</strong>. Ejemplos: fumador activo, consumo social de alcohol, embarazo, obesidad leve (IMC 30-39.9 kg/m²), hipertensión arterial o diabetes mellitus bien controladas sin daño de órgano blanco.',
          '• <strong>ASA III:</strong> Paciente con <strong>enfermedad sistémica severa con limitación funcional sustancial</strong> pero no incapacitante. Ejemplos: hipertensión o diabetes mal controladas o con secuelas microvasculares, cardiopatía isquémica estable (antecedente de infarto miocárdico > 3 meses), EPOC moderado-severo, obesidad mórbida (IMC ≥ 40 kg/m²), insuficiencia renal crónica en hemodiálisis programada o marcapasos definitivo.',
          '• <strong>ASA IV:</strong> Paciente con <strong>enfermedad sistémica severa que representa una amenaza constante para la vida</strong>. Ejemplos: infarto agudo de miocardio reciente (< 3 meses), accidente cerebrovascular reciente, angina inestable, shock, disfunción valvular cardíaca severa descompensada.',
          '• <strong>ASA V:</strong> Paciente moribundo que no se espera que sobreviva las próximas 24 horas sin la intervención quirúrgica (rotura de aneurisma aórtico abdominal, trauma masivo exanguinante).',
          '• <strong>ASA VI:</strong> Paciente con muerte encefálica cuyos órganos son extraídos para procuramiento y donación.',
          '<em>Sufijo "E" (Emergency):</em> Se añade a cualquiera de las categorías cuando la cirugía se realiza de urgencia vital (ej. apendicitis aguda en paciente sano = ASA IE).',
          '<strong>Capacidad Funcional:</strong> Se mide en Equivalentes Metabólicos (METs). Una capacidad funcional <strong>≥ 4 METs</strong> (capaz de subir dos pisos de escaleras cargando peso o caminar en subida sin angina ni disnea) predice un excelente pronóstico perioperatorio y autoriza la cirugía sin necesidad de pruebas cardíacas no invasivas adicionales.'
        ]
      },
      {
        subhead: '2. Índice de Riesgo Cardíaco Revisado de Lee (RCRI)',
        paragraphs: [
          'El <strong>Score de Lee (RCRI)</strong> estima el riesgo de infarto agudo al miocardio, edema pulmonar, fibrilación ventricular o paro cardíaco perioperatorio evaluando <strong>6 factores de riesgo independientes (cada uno otorga 1 punto)</strong>:',
          '1) <strong>Cirugía de alto riesgo:</strong> Procedimientos intraperitoneales, intratorácicos o vasculares suprainguinales (aórticos).',
          '2) <strong>Cardiopatía isquémica:</strong> Antecedente de infarto miocárdico, angina de pecho actual, uso de nitratos o prueba de esfuerzo positiva.',
          '3) <strong>Insuficiencia cardíaca congestiva:</strong> Historia de IC, disnea de esfuerzo o signos congestivos al examen físico.',
          '4) <strong>Enfermedad cerebrovascular:</strong> Antecedente de ataque cerebrovascular (ACV) o ataque isquémico transitorio (AIT).',
          '5) <strong>Diabetes mellitus insulinodependiente:</strong> Tratamiento activo con insulina preoperatoria.',
          '6) <strong>Insuficiencia renal crónica:</strong> Creatinina plasmática preoperatoria > 2.0 mg/dL.',
          '<strong>Estratificación del riesgo cardiovascular según puntaje de Lee:</strong> 0 factores: Riesgo muy bajo (0.4%); 1 factor: Riesgo bajo (0.9%); 2 factores: Riesgo moderado (6.6%); <strong>≥ 3 factores: Riesgo elevado (> 11%)</strong>, obligando a evaluación cardiológica formal preoperatoria.'
        ]
      },
      {
        subhead: '3. Manejo de Fármacos Crónicos en el Perioperatorio',
        paragraphs: [
          '<strong>FÁRMACOS QUE DEBEN MANTENERSE (Administrar la mañana de la cirugía con un sorbo de agua):</strong>',
          '• <strong>Betabloqueadores (Atenolol, Bisoprolol, Carvedilol):</strong> NUNCA deben suspenderse bruscamente; su suspensión desencadena taquicardia de rebote, hipertensión severa e isquemia miocárdica perioperatoria.',
          '• <strong>Estatinas (Atorvastatina, Rosuvastatina):</strong> Mantener por sus efectos pleiotrópicos estabilizadores del endotelio vascular.',
          '• <strong>Fármacos tiroideos (Levotiroxina):</strong> Mantener su dosis habitual.',
          '• <strong>Broncodilatadores inhalados y corticoides inhalatorios:</strong> Mantener hasta el pabellón.',
          '• <strong>Corticoides orales crónicos (Prednisona > 5 mg/día por > 3 semanas):</strong> Mantener y administrar <strong>dosis de estrés con Hidrocortisona EV</strong> en la inducción para prevenir una crisis suprarrenal aguda secundaria a atrofia del eje hipotálamo-hipófisis-suprarrenal.',
          '<strong>FÁRMACOS QUE DEBEN SUSPENDERSE:</strong>',
          '• <strong>Inhibidores de la ECA (Enalapril) y ARA-II (Losartán):</strong> <strong>SUSPENDER 24 HORAS ANTES DE LA CIRUGÍA</strong> (omitir la dosis de la mañana de pabellón) para prevenir la <em>hipotensión refractaria a la inducción anestésica</em> (bloqueo vasopléjico severo insensible a efedrina). Se reinician en el postoperatorio precoz una vez normalizada la volemia.',
          '• <strong>Metformina:</strong> <strong>Suspender 24 a 48 horas antes</strong> de cirugías mayores o procedimientos con contraste yodado para evitar la <strong>acidosis láctica</strong> severa en caso de hipoperfusión renal intraoperatoria.',
          '• <strong>Sulfonilureas (Glibenclamida):</strong> Omitir la dosis la mañana de la cirugía por riesgo inminente de hipoglicemia en ayunas.',
          '• <strong>Antiagregantes plaquetarios:</strong> <strong>Ácido Acetilsalicílico (AAS 100 mg):</strong> En prevención secundaria cardiovascular SE MANTIENE en cirugías generales estándar; solo se suspende (7 días antes) en neurocirugía intracraneal, cirugía ocular de cámara posterior o resección prostática transuretral. <strong>Clopidogrel:</strong> Debe suspenderse <strong>5 a 7 días antes</strong> de cualquier cirugía electiva por alto riesgo de sangrado coagulopático.',
          '• <strong>Anticoagulantes orales:</strong> <strong>Antagonistas de vitamina K (Warfarina/Acenocumarol):</strong> Suspender 5 días antes, titulando con INR (< 1.5 para operar); en pacientes de alto riesgo tromboembólico (prótesis mitral mecánica, FA con CHADS-VASc alto) se realiza <em>terapia puente con Heparina de Bajo Peso Molecular (Enoxaparina)</em>. <strong>DOACs (Rivaroxabán, Apixabán):</strong> Suspender 48 horas antes (no requieren terapia puente).'
        ]
      }
    ],
    table: {
      title: 'Manejo Perioperatorio de Fármacos Crónicos Más Frecuentes en Cirugía',
      headers: ['Grupo Farmacológico', 'Conducta Perioperatoria Exacta', 'Momento de Suspensión / Reinicio', 'Justificación Fisiopatológica'],
      rows: [
        ['Betabloqueadores (Bisoprolol)', 'MANTENER con sorbo de agua la mañana de cx', 'No suspender; mantener en postoperatorio', 'Previene taquicardia refleja e isquemia miocárdica'],
        ['IECAs / ARA-II (Losartán, Enalapril)', 'SUSPENDER 24 horas antes de la cirugía', 'Omitir la dosis de la mañana del pabellón', 'Evita hipotensión refractaria profunda en la inducción'],
        ['Metformina', 'SUSPENDER 24 a 48 horas previas', 'Reiniciar al restablecer tolerancia y función renal', 'Previene acidosis láctica letal por hipoperfusión'],
        ['AAS (Prevención secundaria)', 'MANTENER en cirugía general no neurológica', 'Solo suspender 7 días en neurocirugía/oftalmología', 'El riesgo de trombosis del stent supera el sangrado menor'],
        ['Clopidogrel', 'SUSPENDER 5 a 7 días antes de la cirugía', 'Reiniciar a las 24-48 h postoperatorias según hemostasia', 'Inhibición plaquetaria irreversible con riesgo de hemorragia'],
        ['Anticoagulantes orales directos (DOACs)', 'SUSPENDER 48 horas antes (sin terapia puente)', '72 h antes si filtración glomerular < 30 mL/min', 'Vida media corta; el riesgo de sangrado es elevado']
      ]
    },
    vignette: 'Hombre de 64 años, hipertenso, diabético tipo 2 y con antecedente de un infarto agudo al miocardio hace 2 años con colocación de un stent coronario, acude a la consulta preoperatoria para programar una colecistectomía laparoscópica electiva por colelitiasis sintomática. En su tratamiento habitual utiliza: Enalapril 10 mg cada 12 horas, Carvedilol 12.5 mg cada 12 horas, Atorvastatina 40 mg/día, Metformina 850 mg cada 12 horas y Ácido Acetilsalicílico 100 mg/día. Refiere que camina diariamente 5 cuadras en subida a paso firme sin presentar disnea ni dolor torácico (capacidad funcional estimada > 4 METs). Examen físico y signos vitales normales.',
    explicacion: 'El paciente presenta una excelente capacidad funcional (> 4 METs), lo que autoriza la intervención quirúrgica programada sin necesidad de pruebas de esfuerzo cardiológicas adicionales. Respecto al manejo perioperatorio de sus fármacos: 1) El Carvedilol (betabloqueador) y la Atorvastatina (estatina) DEBEN MANTENERSE y administrarse la mañana de la cirugía con un pequeño sorbo de agua para prevenir taquicardia refleja e inestabilidad endotelial; 2) El Ácido Acetilsalicílico (AAS) en prevención secundaria con antecedente de stent coronario DEBE MANTENERSE en la colecistectomía laparoscópica, dado que el riesgo de trombosis del stent coronario supera con creces el riesgo de sangrado quirúrgico menor; 3) El Enalapril (IECA) DEBE SUSPENDERSE 24 horas antes (omitir la dosis de la mañana) para evitar hipotensión refractaria severa durante la inducción anestésica; 4) La Metformina DEBE SUSPENDERSE 24 a 48 horas antes para prevenir acidosis láctica.',
    keyPoints: [
      'Capacidad funcional ≥ 4 METs (subir 2 pisos de escaleras o caminar en subida) autoriza cirugía sin pruebas cardíacas.',
      'Betabloqueadores y estatinas se MANTIENEN rigurosamente hasta la mañana de la cirugía con sorbo de agua.',
      'IECAs y ARA-II se SUSPENDEN 24 horas antes para evitar hipotensión refractaria a la inducción anestésica.',
      'Metformina se suspende 24-48 horas antes para prevenir acidosis láctica intraoperatoria.',
      'AAS en prevención secundaria se mantiene en cirugía general; solo se suspende en neurocirugía y oftalmología posterior.',
      'Clopidogrel se suspende 5 a 7 días antes; Warfarina se suspende 5 días antes con terapia puente de heparina si hay alto riesgo.',
      'Pacientes con corticoides crónicos (> 5 mg/día por > 3 semanas) requieren dosis de estrés con Hidrocortisona EV preoperatoria.'
    ],
    questions: [
      {
        stem: 'Un paciente de 62 años, hipertenso en tratamiento crónico con Enalapril y Amlodipino, y con cardiopatía coronaria en tratamiento con Bisoprolol y Atorvastatina, será sometido a una hernioplastia inguinal electiva. ¿Cuál de las siguientes indicaciones sobre sus medicamentos habituales es la más apropiada para el día de la intervención?',
        options: [
          { id: 'A', text: 'Suspender todos los medicamentos antihipertensivos y coronarios 48 horas antes de la cirugía' },
          { id: 'B', text: 'Suspender el Enalapril 24 horas antes y mantener el Bisoprolol y Atorvastatina la mañana de la cirugía' },
          { id: 'C', text: 'Suspender el Bisoprolol 24 horas antes y administrar el Enalapril la mañana de la cirugía' },
          { id: 'D', text: 'Mantener todos los fármacos sin excepción administrados con un sorbo de agua la mañana de la cirugía' },
          { id: 'E', text: 'Reemplazar todos los fármacos orales por infusión de nitroprusiato de sodio' }
        ],
        correcta: 'B',
        explicacion: 'Las guías internacionales de evaluación perioperatoria recomiendan de manera uniforme suspender los IECA (Enalapril) y ARA-II 24 horas antes de la intervención (omitir la dosis de la mañana) para prevenir cuadros graves de hipotensión refractaria e hipoperfusión renal durante la inducción anestésica. Por el contrario, los betabloqueadores (Bisoprolol) y las estatinas (Atorvastatina) NUNCA deben suspenderse bruscamente y deben ser administrados la mañana de la cirugía con un pequeño sorbo de agua para evitar taquicardia de rebote, arritmias e isquemia miocárdica perioperatoria.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.5.013'
      },
      {
        stem: '¿Cuál de los siguientes pacientes corresponde a la categoría de estado físico ASA III de la American Society of Anesthesiologists?',
        options: [
          { id: 'A', text: 'Mujer de 32 años no fumadora, previamente sana, programada para biopsia mamaria' },
          { id: 'B', text: 'Hombre de 45 años, fumador de 5 cigarrillos al día, hipertenso bien controlado con enalapril sin daño orgánico' },
          { id: 'C', text: 'Hombre de 68 años con antecedente de infarto miocárdico hace 1 año, con angina estable a esfuerzos moderados' },
          { id: 'D', text: 'Mujer de 72 años con infarto miocárdico hace 3 semanas y angina de reposo inestable' },
          { id: 'E', text: 'Paciente politraumatizado en shock hipovolémico que fallece en pabellón' }
        ],
        correcta: 'C',
        explicacion: 'La categoría ASA III corresponde a pacientes con enfermedad sistémica severa que genera una limitación funcional sustancial pero no incapacitante. El antecedente de infarto miocárdico antiguo (> 3 meses) con angina estable o limitación funcional encaja típicamente en ASA III. La opción A es ASA I (sana). La opción B es ASA II (fumador o hipertenso controlado sin limitación funcional). La opción D es ASA IV (enfermedad sistémica severa que amenaza constantemente la vida, como IAM reciente < 3 meses o angina inestable).',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.5.013'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.15: ANESTESIOLOGÍA GENERAL, NEUROAXIAL & TOXICIDAD (LAST) (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-15',
    classId: 'cirugia-15',
    tier: 3,
    blockNum: 4,
    blockName: 'Preoperatorio, Anestesia & Complicaciones Quirúrgicas',
    topicLabel: '11.15',
    title: 'Anestesiología General vs Neuroaxial & Toxicidad Sistémica por Anestésicos Locales',
    perfilCode: '4.01.2.028, 4.01.5.001',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Sin garantía GES específica · Urgencia farmacológica y anestesiológica en pabellón y salas de procedimiento de urgencia.',
    reconstrucciones: 'EUNACOM Julio 2023 (Q#112) · EUNACOM Diciembre 2020 (Q#67)',
    frecuencia: 'Alta frecuencia en el EUNACOM · Pregunta clásica de urgencias de toxicidad por anestésicos locales y cefalea raquídea',
    diagram: flowCirugia('Manejo de la Toxicidad Sistémica por Anestésicos Locales (LAST)', [
      { t: 'Administración de Anestésico Local (Lidocaína / Bupivacaína)', s: 'Infiltración, bloqueo de nervio periférico o anestesia peridural accidental intravascular', type: 'acc' },
      { t: 'Fase Neurológica Precoz de Alarma (Excitación SNC)', s: 'Sabor metálico en la boca + Parestesias periorales + Tinnitus + Agitación y temblores', type: 'warn' },
      { k: 'split', q: '¿Aparición de Convulsiones o Colapso Cardiovascular?', s: 'Fase depresiva neurológica y depresión miocárdica con arritmias ventriculares',
        ll: 'Fase Convulsiva (SNC)',
        left: { t: 'Control de Vía Aérea y Benzodiacepinas', s: 'Oxígeno 100% + Midazolam 1-2 mg EV · Evitar propofol en dosis altas por colapso CV', type: 'crit' },
        rl: 'Fase Cardiovascular (Colapso / Arritmias)',
        right: { t: 'ANTÍDOTO ESPECÍFICO: Emulsión Lipídica al 20%', s: 'Bolo inicial 1.5 mL/kg EV en 1 min + Infusión continua 0.25 mL/kg/min (Intralipid)', type: 'crit' }
      },
      { t: 'Soporte Vital Avanzado Modificado (ACLS)', s: 'Reducir dosis de adrenalina (< 1 mcg/kg) · EVITAR vasopresina, bloqueadores de calcio y betabloqueadores', type: 'crit' },
      { t: 'Recuperación y Monitorización Prolongada en UPC', s: 'Vigilancia continua de arritmias por al menos 4 a 6 horas post-reanimación', type: 'acc' }
    ]),
    contexto: 'La anestesiología combina técnicas generales, neuroaxiales y regionales. La Toxicidad Sistémica por Anestésicos Locales (LAST, Local Anesthetic Systemic Toxicity) es una complicación potencialmente fatal desencadenada por la inyección intravascular inadvertida o sobredosis de anestésicos locales (especialmente bupivacaína por su alta cardiotoxicidad lipofílica). El reconocimiento instantáneo de sus pródromos neurológicos (sabor metálico, tinnitus, parestesias periorales) y la administración inmediata del antídoto específico —Emulsión Lipídica al 20% (Intralipid)— salva vidas y es una de las perlas más evaluadas en el examen.',
    contentSections: [
      {
        subhead: '1. Técnicas Anestésicas: Anestesia General vs Raquídea vs Epidural',
        paragraphs: [
          '<strong>Anestesia General:</strong> Estado reversible inducido farmacológicamente caracterizado por la <strong>tríada clásica: 1) Hipnosis y amnesia; 2) Analgesia; y 3) Relajación neuromuscular</strong>.',
          '• <em>Inducción endovenosa:</em> <strong>Propofol</strong> (fármaco de elección estándar, rápido despertar, efecto antiemético; causa hipotensión arterial por vasodilatación y depresión miocárdica); <strong>Etomidato</strong> (mantiene una notable estabilidad hemodinámica, siendo de elección en pacientes con shock o cardiopatía severa, con riesgo de supresión suprarrenal transitoria); <strong>Ketamina</strong> (anestésico disociativo antagonista NMDA con efecto simpaticomimético, broncodilatador y analgésico, de elección en shock y crisis asmática grave).',
          '• <em>Relajantes neuromusculares:</em> 1) <strong>Succinilcolina (despolarizante):</strong> Inicio ultrarrápido (< 60 s) ideal para intubación en secuencia rápida; riesgos: hiperkalemia grave (contraindicada en quemados extensos > 24 h, politraumatizados, denervación o distrofia muscular) e hipertermia maligna; 2) <strong>Rocuronio y Vecuronio (no despolarizantes):</strong> Reversibles específicamente con <strong>Sugammadex</strong> (quelante selectivo) o neostigmina asociada a atropina.',
          '<strong>Anestesia Neuroaxial (Raquídea vs Epidural):</strong>',
          '• <strong>Anestesia Raquídea (Subaracnoidea / Espinal):</strong> La aguja atraviesa el ligamento supraespinoso, interespinoso, ligamento amarillo y la duramadre-aracnoides, depositando una <strong>pequeña dosis de anestésico local directamente en el líquido cefalorraquídeo</strong> (habitualmente en el interespacio L3-L4 o L4-L5, bien por debajo del cono medular que termina en L1-L2). Produce un <strong>bloqueo sensitivo y motor rápido, profundo y predecible</strong>.',
          '• <strong>Anestesia Epidural (Peridural):</strong> El anestésico se inyecta en el <strong>espacio epidural virtual</strong> (fuera de la duramadre), utilizando la técnica de pérdida de resistencia. Permite dejar un catéter continuo para analgesia postoperatoria prolongada (ideal en trabajo de parto y toracotomías); requiere volúmenes mucho mayores de anestésico y su inicio es más lento.',
          '• <strong>Complicaciones neuroaxiales:</strong> 1) <strong>Hipotensión arterial</strong> (por bloqueo de las fibras simpáticas preganglionares venodilatadoras; se maneja con fluidos y efedrina o fenilefrina); 2) <strong>Cefalea Post-Punción Dural (CPPD):</strong> Cefalea postural que empeora al sentarse/ponerse de pie y alivia al acostarse, causada por fuga continua de LCR; se maneja con reposo en decúbito supino, hidratación, cafeína oral/EV y, si no cede en 48-72 h, <strong>Parche Hemático Epidural autólogo</strong>.'
        ]
      },
      {
        subhead: '2. Farmacología de Anestésicos Locales: Ésteres vs Amidas',
        paragraphs: [
          'Los anestésicos locales bloquean de forma reversible los canales de sodio dependientes de voltaje (Nav1.5) en la membrana axonal neuronal, impidiendo la despolarización y la propagación del potencial de acción.',
          'Se dividen químicamente en dos grandes familias:',
          '• <strong>Tipo Éster:</strong> Procaína, tetracaína, cocaína. Tienen un enlace éster intermedio y son metabolizados rápidamente por las <em>pseudocolinesterasas plasmáticas</em>. Su metabolito ácido para-aminobenzoico (PABA) produce una alta tasa de reacciones alérgicas anafilácticas.',
          '• <strong>Tipo Amida (Mnemotecnia: Tienen dos letras "i" en su nombre):</strong> <strong>Lidocaína, Bupivacaína, Levobupivacaína, Mepivacaína, Ropivacaína</strong>. Tienen enlace amida y se metabolizan por el sistema del citocromo P450 en el <em>hígado</em>. Las reacciones alérgicas verdaderas son excepcionalmente raras.',
          '<strong>Dosis máximas de seguridad (Regla de Oro en EUNACOM):</strong>',
          '• <strong>Lidocaína SIN vasoconstrictor:</strong> <strong>4 a 5 mg/kg</strong> (máximo 300 mg en un adulto).',
          '• <strong>Lidocaína CON epinefrina:</strong> <strong>7 mg/kg</strong> (máximo 500 mg). La adrenalina induce vasoconstricción local, disminuye la absorción sistémica en un 30-50%, prolonga la duración del bloqueo y reduce la toxicidad sistémica.',
          '• <strong>Bupivacaína:</strong> <strong>2 mg/kg</strong> (máximo 150 mg sin epinefrina; 2.5 mg/kg o 175 mg con epinefrina). Tiene una afinidad extremadamente alta por los canales de sodio miocárdicos y disociación muy lenta, siendo el fármaco con mayor riesgo de paro cardíaco refractario.'
        ]
      },
      {
        subhead: '3. Toxicidad Sistémica por Anestésicos Locales (LAST)',
        paragraphs: [
          'La <strong>LAST</strong> se produce por el paso masivo y rápido del fármaco al torrente sanguíneo, ya sea por <strong>inyección intravascular inadvertida directa</strong> (lo más común durante bloqueos peridurales o de plexo) o por absorción acelerada en áreas ricamente vascularizadas.',
          '<strong>Presentación Clínica Progresiva Bifásica:</strong>',
          '1) <strong>Fase de Toxicidad del Sistema Nervioso Central (Precoz):</strong>',
          '   • <em>Pródromos subjetivos:</em> <strong>Gusto o sabor metálico en la boca, entumecimiento y parestesias periorales y de la lengua, tinnitus (zumbido de oídos), mareos y diplopía</strong>.',
          '   • <em>Fase de excitación:</em> Disartria, fasciculaciones musculares, agitación psicomotora y <strong>convulsiones tónico-clónicas generalizadas</strong>.',
          '   • <em>Fase de depresión:</em> Estupor, coma y paro respiratorio apnea central.',
          '2) <strong>Fase de Toxicidad Cardiovascular (Tardía pero letal):</strong>',
          '   • Inicialmente puede haber hipertensión y taquicardia refleja transitoria.',
          '   • Rápidamente progresa a <strong>depresión miocárdica severa, bradicardia extrema, bloqueo auriculoventricular, ensanchamiento del QRS, arritmias ventriculares malignas (taquicardia ventricular, torsades de pointes, fibrilación ventricular) y shock cardiogénico refractario</strong> hasta la asistolia.'
        ]
      },
      {
        subhead: '4. Protocolo de Rescate Específico: Emulsión Lipídica al 20% (Intralipid)',
        paragraphs: [
          'Ante los primeros signos de LAST, se debe <strong>interrumpir de inmediato la administración del anestésico local</strong> y pedir ayuda (carro de paro y kit de rescate lipídico).',
          '<strong>Pasos del Manejo Estandarizado:</strong>',
          '1) <strong>Vía aérea y oxigenación:</strong> Administrar Oxígeno al 100% para prevenir la hipoxemia y la acidosis, las cuales agravan de forma exponencial la toxicidad cardíaca de la bupivacaína.',
          '2) <strong>Tratamiento de las convulsiones:</strong> <strong>Benzodiacepinas de acción corta (Midazolam 1-2 mg EV)</strong>. Si no hay benzodiacepinas se puede usar propofol en dosis mínimas, pero debe evitarse si hay hipotensión.',
          '3) <strong>ANTÍDOTO ESPECÍFICO: EMULSIÓN LIPÍDICA AL 20% (Intralipid):</strong>',
          '   • Actúa como un "sumidero lipídico" (<em>lipid sink</em>), secuestrando las moléculas lipofílicas del anestésico libre en el torrente sanguíneo y restaurando el metabolismo miocárdico.',
          '   • <strong>Bolo endovenoso inicial:</strong> <strong>1.5 mL/kg en 1 minuto</strong> (aproximadamente 100 mL en un adulto de 70 kg).',
          '   • <strong>Infusión continua de mantención:</strong> <strong>0.25 mL/kg/minuto</strong> (unos 18 mL/min en 70 kg).',
          '   • Si la inestabilidad cardiovascular persiste: Repetir el bolo de 1.5 mL/kg una o dos veces y duplicar la infusión a 0.5 mL/kg/min (dosis máxima total recomendada: 10-12 mL/kg en los primeros 30 minutos).',
          '4) <strong>Soporte Vital Cardiovascular Avanzado Modificado:</strong> En caso de paro cardíaco, la reanimación cardiopulmonar (RCP) debe prolongarse (puede requerir más de 60 minutos de masaje continuo hasta que los lípidos metabolicen el anestésico). <em>Reglas de RCP en LAST:</em> Usar <strong>dosis reducidas de adrenalina (< 1 mcg/kg</strong>, bolos de 10-100 mcg en lugar de 1 mg) porque dosis altas empeoran las arritmias; <strong>EVITAR vasopresina, bloqueadores de canales de calcio y betabloqueadores</strong>.'
        ]
      }
    ],
    table: {
      title: 'Anestésicos Locales Tipo Amida: Dosis Máximas y Perfil Farmacológico',
      headers: ['Fármaco Anestésico', 'Dosis Máxima Sin Epinefrina', 'Dosis Máxima Con Epinefrina', 'Comienzo y Duración de Acción'],
      rows: [
        ['Lidocaína al 1% o 2%', '4 – 5 mg/kg (Máximo 300 mg)', '7 mg/kg (Máximo 500 mg)', 'Rápido (2-5 min); Duración intermedia (1-2 h sin epi, 3-4 h con epi)'],
        ['Bupivacaína al 0.25% o 0.5%', '2 mg/kg (Máximo 150 mg)', '2.5 mg/kg (Máximo 175 mg)', 'Lento (10-15 min); Larga duración (4-8 h); ALTA CARDIOTOXICIDAD'],
        ['Mepivacaína al 1% o 2%', '4 – 5 mg/kg (Máximo 300 mg)', '7 mg/kg (Máximo 500 mg)', 'Rápido; duración intermedia; menor vasodilatación propia'],
        ['Ropivacaína al 0.5% o 0.75%', '3 mg/kg (Máximo 200 mg)', '3.5 mg/kg (Máximo 250 mg)', 'Lento; larga duración; menor cardiotoxicidad que bupivacaína']
      ]
    },
    severityTable: {
      title: 'Etapas Clínicas de la Toxicidad Sistémica por Anestésicos Locales (LAST)',
      headers: ['Fase de Toxicidad', 'Signos y Síntomas Clínicos Cardinales', 'Mecanismo Fisiopatológico', 'Intervención de Urgencia'],
      rows: [
        ['Pródromos SNC', 'Sabor metálico, entumecimiento perioral, tinnitus, visión borrosa', 'Bloqueo de vías inhibitorias corticales', 'SUSPENDER inyección inmediatamente; O2 100%'],
        ['Excitación SNC', 'Fasciculaciones faciales, temblores, convulsiones tónico-clónicas', 'Descarga neuronal difusa desinhibida', 'Midazolam 1-2 mg EV; proteger vía aérea'],
        ['Depresión SNC', 'Estupor, coma, apnea y pérdida de reflejos protectores', 'Bloqueo generalizado de vías neuronales', 'Intubación orotraqueal + Asistencia ventilatoria'],
        ['Cardiotoxicidad', 'Bloqueo AV, bradicardia, TV/FV, shock cardiogénico y asistolia', 'Bloqueo de canales de sodio cardíacos Nav1.5', 'EMULSIÓN LIPÍDICA AL 20% (Intralipid) + RCP avanzada']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Rescate con Emulsión Lipídica al 20% (Intralipid) en LAST',
      headers: ['Fase del Protocolo', 'Dosificación Estandarizada Adulto', 'Velocidad de Infusión', 'Metas y Advertencias'],
      rows: [
        ['Bolo Inicial', '1.5 mL/kg de peso corporal en bolo EV', 'Administrar en 1 minuto continuo (aprox. 100 mL en 70 kg)', 'Iniciar de inmediato ante arritmias o convulsiones refractarias'],
        ['Infusión de Mantención', '0.25 mL/kg/minuto en infusión continua', 'Aproximadamente 18 mL/min en paciente de 70 kg', 'Mantener por al menos 10-15 minutos tras recuperar estabilidad'],
        ['Re-bolos de Rescate', 'Repetir bolo de 1.5 mL/kg cada 3-5 minutos', 'Hasta 2 bolos adicionales si persiste colapso circulatorio', 'Duplicar infusión a 0.5 mL/kg/min si persiste hipotensión'],
        ['Límite Máximo', 'Dosis máxima acumulada de 10 a 12 mL/kg', 'En los primeros 30 minutos de reanimación', 'No exceder dosis máxima para evitar sobrecarga lipídica pulmonar']
      ]
    },
    vignette: 'Mujer de 32 años, sin antecedentes mórbidos, sometida a la extirpación de un lipoma en el muslo bajo anestesia local en sala de procedimientos. El cirujano infiltra 25 mL de Lidocaína al 2% con epinefrina en el tejido subcutáneo. Hacia el final de la infiltración, la paciente refiere bruscamente sensación de adormecimiento en los labios y la lengua, junto con un intenso sabor metálico en la boca y zumbidos en los oídos (tinnitus). Segundos después presenta movimientos clónicos faciales seguidos de una convulsión tónico-clónica generalizada con pérdida de conciencia. El monitor cardíaco muestra ensanchamiento progresivo del complejo QRS con frecuencia cardíaca de 42 lpm y PA de 70/40 mmHg.',
    explicacion: 'El cuadro corresponde de forma inequívoca a una Toxicidad Sistémica por Anestésicos Locales (LAST) severa, desencadenada por una absorción masiva o inyección intravascular inadvertida de lidocaína (25 mL al 2% = 500 mg, dosis en el límite máximo absoluto). La paciente presenta la secuencia clásica: pródromos neurológicos inmediatos (sabor metálico, entumecimiento perioral, tinnitus), convulsión tónico-clónica por toxicidad del SNC y colapso cardiovascular con bradicardia severa e hipotensión. La conducta inmediata y salvadora es: 1) Suspender la inyección; 2) Asegurar la vía aérea con oxígeno al 100% e intubación si persiste en apnea; 3) Controlar las convulsiones con Midazolam EV; 4) Administrar el antídoto específico de elección: Emulsión Lipídica al 20% (Intralipid) en bolo inicial de 1.5 mL/kg (aprox. 100 mL) en 1 minuto seguido de infusión de 0.25 mL/kg/minuto; y 5) Iniciar maniobras de soporte cardiovascular avanzado con dosis reducidas de adrenalina.',
    keyPoints: [
      'Dosis máxima de Lidocaína: 4-5 mg/kg SIN epinefrina (máx 300 mg); 7 mg/kg CON epinefrina (máx 500 mg).',
      'Dosis máxima de Bupivacaína: 2 mg/kg (máx 150 mg); posee la mayor cardiotoxicidad de los anestésicos locales.',
      'LAST inicia con pródromos neurológicos: sabor metálico, parestesias periorales, tinnitus y diplopía.',
      'Si progresa sin tratamiento: convulsiones tónico-clónicas, coma, bloqueo AV, arritmias ventriculares y colapso cardiogénico.',
      'El antídoto específico indiscutido de la LAST es la EMULSIÓN LIPÍDICA AL 20% (Intralipid): bolo 1.5 mL/kg + infusión 0.25 mL/kg/min.',
      'En la RCP por LAST: reducir las dosis de adrenalina (< 1 mcg/kg) y EVITAR vasopresina, bloqueadores de calcio y betabloqueadores.',
      'La cefalea post-punción dural (CPPD) es postural; si es refractaria a reposo y cafeína, se trata con Parche Hemático Epidural.'
    ],
    questions: [
      {
        stem: 'Durante la realización de un bloqueo anestésico peridural para una intervención ginecológica utilizando bupivacaína, la paciente refiere repentinamente sensación de sabor metálico en la boca, mareos y zumbido de oídos (tinnitus), presentando inmediatamente después una convulsión tónico-clónica generalizada y colapso hemodinámico con bradicardia extrema y ensanchamiento del QRS. ¿Cuál es el tratamiento farmacológico específico que debe iniciarse de urgencia?',
        options: [
          { id: 'A', text: 'Infusión inmediata de Emulsión Lipídica al 20% (Intralipid)' },
          { id: 'B', text: 'Bolo de 1 mg de adrenalina endovenosa directa' },
          { id: 'C', text: 'Sulfato de magnesio 5 gramos en infusión rápida' },
          { id: 'D', text: 'Flumazenil endovenoso en bolos seriados' },
          { id: 'E', text: 'Amiodarona 300 mg en bolo endovenoso' }
        ],
        correcta: 'A',
        explicacion: 'La paciente presenta una Toxicidad Sistémica por Anestésicos Locales (LAST) grave, probablemente por inyección intravascular inadvertida de bupivacaína en una vena peridural. El antídoto específico y de elección indiscutido según las guías internacionales (ASRA) y las normas de anestesiología es la Emulsión Lipídica al 20% (Intralipid), administrada en bolo inicial de 1.5 mL/kg en 1 minuto seguido de una infusión continua de 0.25 mL/kg/min. La emulsión lipídica actúa secuestrando el fármaco lipofílico libre del plasma y restaurando la fosforilación oxidativa mitocondrial miocárdica.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.028'
      },
      {
        stem: '¿Cuál es la dosis máxima recomendada de Lidocaína al 2% CON epinefrina que se puede infiltrar de forma segura en un paciente adulto de 70 kg durante un procedimiento quirúrgico ambulatorio?',
        options: [
          { id: 'A', text: '3 mg/kg (aproximadamente 210 mg)' },
          { id: 'B', text: '7 mg/kg (aproximadamente 490 - 500 mg)' },
          { id: 'C', text: '10 mg/kg (aproximadamente 700 mg)' },
          { id: 'D', text: '15 mg/kg (aproximadamente 1.050 mg)' },
          { id: 'E', text: '1.5 mg/kg (aproximadamente 105 mg)' }
        ],
        correcta: 'B',
        explicacion: 'La dosis máxima de lidocaína CON epinefrina es de 7 mg/kg de peso corporal (con un techo máximo absoluto de 500 mg en adultos). La adición de epinefrina (vasoconstrictor) enlentece la absorción sistémica vascular, lo que permite elevar la dosis segura respecto a la lidocaína pura sin vasoconstrictor, cuya dosis máxima es de 4 a 5 mg/kg (máximo 300 mg).',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.028'
      },
      {
        stem: 'Una mujer de 28 años fue sometida a cesárea bajo anestesia raquídea sin incidentes hace 48 horas. Al levantarse de la cama para amamantar presenta cefalea holocraneana severa y dolor cervical que empeora drásticamente al ponerse de pie y desaparece por completo al adoptar el decúbito supino horizontal. El examen neurológico es rigurosamente normal. ¿Cuál es el diagnóstico y el mecanismo fisiopatológico?',
        options: [
          { id: 'A', text: 'Meningitis bacteriana aguda por inoculación bacteriana intratecal' },
          { id: 'B', text: 'Cefalea post-punción dural por fuga persistente de líquido cefalorraquídeo a través del orificio meníngeo' },
          { id: 'C', text: 'Trombosis venosa de senos durales por estado protrombótico puerperal' },
          { id: 'D', text: 'Hemorragia subaracnoidea por rotura de aneurisma sacular' },
          { id: 'E', text: 'Cefalea tensional por contractura de musculatura cervical' }
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde típicamente a una Cefalea Post-Punción Dural (CPPD). Su característica patognomónica es el carácter estrictamente postural: cefalea bilateral frontal u occipital que aparece o empeora a los pocos segundos o minutos de sentarse o ponerse de pie, y alivia completamente al adoptar el decúbito supino. Es originada por la fuga persistente de LCR a través del orificio dejado por la aguja espinal en la duramadre, lo que reduce la presión del LCR y produce tracción mecánica de las estructuras vasculares y meníngeas sensibles al dolor.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.028'
      },
      {
        stem: 'Durante la reanimación cardiopulmonar avanzada de un paciente en paro cardiorrespiratorio inducido por toxicidad sistémica severa por bupivacaína (LAST), ¿cuál de las siguientes modificaciones a los algoritmos estándar de ACLS debe aplicarse de forma estricta?',
        options: [
          { id: 'A', text: 'Administrar bolos de adrenalina de 3 mg cada 2 minutos' },
          { id: 'B', text: 'Reducir las dosis de adrenalina a menos de 1 mcg/kg y evitar vasopresina y bloqueadores de canales de calcio' },
          { id: 'C', text: 'Administrar infusión continua de diltiazem para estabilizar la membrana miocárdica' },
          { id: 'D', text: 'Interrumpir el masaje cardíaco externo si no hay respuesta en 10 minutos' },
          { id: 'E', text: 'Indicar cardioversión eléctrica sincronizada en presencia de asistolia' }
        ],
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.028'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.16: FIEBRE POSTOPERATORIA: LAS 5 'W' (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-16',
    classId: 'cirugia-16',
    tier: 2,
    blockNum: 4,
    blockName: 'Preoperatorio, Anestesia & Complicaciones Quirúrgicas',
    topicLabel: '11.16',
    title: "Fiebre Postoperatoria: Cronología de las 5 'W' (Wind, Water, Wound, Walking, Wonder drugs)",
    perfilCode: '4.01.3.005',
    dx: 'Específico',
    tx: 'Inicial y Completo',
    seg: 'Completo',
    ges: 'Sin garantía GES específica · Norma Técnica MINSAL de Infecciones Asociadas a la Atención de Salud (IAAS).',
    reconstrucciones: 'EUNACOM Diciembre 2023 (Q#52) · EUNACOM Julio 2022 (Q#44) · EUNACOM Enero 2020 (Q#78)',
    frecuencia: 'Muy Alta en EUNACOM · Pregunta clásica de diagnóstico cronológico de la causa de fiebre en operados',
    diagram: flowCirugia('Cronología Diagnóstica de la Fiebre Postoperatoria (Las 5 W)', [
      { t: 'Fiebre Postoperatoria (T° ≥ 38.0 °C): Enfrentamiento según Día Quirúrgico', s: 'La cronología temporal es el factor orientador más determinante', type: 'warn' },
      { k: 'split', q: '¿Momento de Inicio de la Fiebre tras la Cirugía?', s: 'Diferenciación temporal de las etiologías más frecuentes',
        ll: 'Día 1 a 2 Postoperatorio: WIND (Pulmonar)',
        left: { t: 'Atelectasia Pulmonar (Causa #1 en 24-48 h)', s: 'Hipoventilación por dolor/anestesia · Tto: Kinesiterapia respiratoria + deambulación precoz', type: 'acc' },
        rl: 'Día 3 a 5 Postoperatorio: WATER & WOUND',
        right: { t: 'ITU (Water, d3) · Infección de Herida (Wound, d5)', s: 'ITU: retiro de Foley + urocultivo · Herida: eritema, calor, dolor · Tto: apertura y drenaje', type: 'crit' }
      },
      { t: 'Día 7 a 10+: WALKING (TVP / TEP) & WONDER DRUGS (Fármacos)', s: 'TVP/TEP: Eco-Doppler de extremidades · Fármacos: antibióticos betalactámicos, heparina (TIH)', type: 'dec' },
      { t: 'Conducta Médica Inmediata ante Fiebre Postoperatoria', s: 'Examen físico dirigido: herida, campos pulmonares, accesos venosos, pantorrillas; no iniciar ATB a ciegas', type: 'acc' }
    ]),
    contexto: 'La fiebre postoperatoria es uno de los motivos de interconsulta más habituales en cirugía. La regla mnemotécnica anglosajona clásica de las 5 "W" (Wind, Water, Wound, Walking, Wonder drugs) orienta con precisión la etiología según el día de aparición: atelectasia pulmonar en las primeras 24-48 horas, infección urinaria al día 3, infección del sitio quirúrgico hacia el día 5, trombosis venosa profunda hacia el día 7 y fiebre por fármacos en cualquier momento posterior. El error más común en el examen es indicar antibióticos empíricos de inmediato en las primeras 24 horas ante una atelectasia, en lugar de kinesiterapia respiratoria y analgesia adecuada.',
    contentSections: [
      {
        subhead: "1. Cronología Clásica de las 5 'W'",
        paragraphs: [
          '• <strong>1) WIND (Viento / Pulmón, Días 1-2):</strong> La <strong>atelectasia pulmonar</strong> es la causa más frecuente de fiebre en las primeras 24 a 48 horas postoperatorias. Fisiopatología: pérdida del volumen pulmonar por anestesia general, bloqueo neuromuscular residual, depresión ventilatoria por opioides y dolor de herida que limita las respiraciones profundas y la tos. <em>Clínica:</em> taquipnea, fiebre moderada (38.0-38.5 °C), murmullo vesicular disminuido y crepitaciones en bases. <em>Conducta:</em> kinesiterapia respiratoria activa, espirometría incentivada, analgesia óptima y deambulación precoz. <strong>NO requiere antibióticos.</strong>',
          '• <strong>2) WATER (Agua / Tracto Urinario, Día 3):</strong> La <strong>infección del tracto urinario (ITU)</strong> asociada a catéter vesical (sonda Foley). Fisiopatología: colonización ascendente por gérmenes uropatógenos (E. coli, Klebsiella, Enterococcus). <em>Conducta:</em> retiro precoz de la sonda Foley, toma de urocultivo y tratamiento antibiótico empírico guiado por flora local.',
          '• <strong>3) WOUND (Herida Quirúrgica, Días 5-7):</strong> La <strong>infección del sitio quirúrgico (ISQ)</strong> superficial o profunda suele manifestarse clásicamente entre el 5° y 7° día postoperatorio (excepto infecciones fulminantes por <em>Streptococcus pyogenes</em> o <em>Clostridium</em> que ocurren < 24-48 h). <em>Clínica:</em> dolor creciente en la herida, eritema perilesional > 1 cm, calor local, induración y drenaje purulento. <em>Conducta:</em> retiro de puntos de sutura, apertura y drenaje completo de la herida, curaciones abiertas y antibióticos si hay celulitis extensa o compromiso sistémico.',
          '• <strong>4) WALKING (Caminar / Trombosis Venosa, Día 7-10):</strong> <strong>Trombosis venosa profunda (TVP)</strong> y tromboembolismo pulmonar (TEP). Fisiopatología: estasis venosa por inmovilización prolongada, daño endotelial y estado protrombótico postquirúrgico (Tríada de Virchow). <em>Clínica:</em> aumento de volumen asimétrico de extremidad inferior, dolor a la dorsiflexión (signo de Homans), empastamiento muscular o disnea súbita/taquipnea (TEP). <em>Conducta:</em> confirmación con Eco-Doppler venoso y anticoagulación plena con HBPM/heparina.',
          '• <strong>5) WONDER DRUGS (Fármacos, Día 7+ / Variable):</strong> Reacción adversa a medicamentos. Fármacos causantes frecuentes: antibióticos betalactámicos, vancomicina, sulfas, anticonvulsivantes, heparina (trombocitopenia inducida por heparina, TIH). Diagnóstico de exclusión tras descartar causas infecciosas y trombóticas. Tratamiento: suspensión del fármaco sospechoso.'
        ]
      },
      {
        subhead: '2. Enfrentamiento Clínico Sistemático y Errores Habituales',
        paragraphs: [
          'Frente a un paciente febril postoperado, el médico debe seguir un examen físico exhaustivo:',
          '1) Inspeccionar la herida operatoria (retirar apósitos para evaluar eritema, fluctuación o salida de secreción).',
          '2) Auscultar campos pulmonares para descartar atelectasias o neumonía aspirativa/asociada a ventilación.',
          '3) Revisar accesos venosos periféricos y centrales (descartar flebitis o infección de catéter venoso central).',
          '4) Palpar pantorrillas y medir circunferencia de extremidades inferiores para descartar TVP.',
          '5) Evaluar síntomas urinarios y características de la orina si tiene catéter vesical.',
          '<em>¡Trampa EUNACOM!:</em> Iniciar antibióticos de amplio espectro en el día 1 postoperatorio frente a fiebre de 38.2 °C con herida limpia y crepitaciones bibasales. La conducta correcta es espirometría incentivada, ejercicios respiratorios y movilización fuera de cama.'
        ]
      }
    ],
    table: {
      title: "Cronología de la Fiebre Postoperatoria: Regla de las 5 'W'",
      headers: ['Mnemotecnia', 'Etiología Principal', 'Día Postoperatorio Habitual', 'Clínica Cardinal', 'Tratamiento de Elección'],
      rows: [
        ['WIND', 'Atelectasia pulmonar', 'Día 1 a 2 (24-48 h)', 'Crepitaciones bibasales, taquipnea leve, herida limpia', 'Kinesiterapia respiratoria, analgesia, deambulación (No ATB)'],
        ['WATER', 'Infección urinaria (ITU)', 'Día 3 a 5', 'Disuria, orina turbia, bacteriuria con sonda Foley', 'Retiro de catéter Foley + cultivo + antibiótico dirigido'],
        ['WOUND', 'Infección sitio quirúrgico', 'Día 5 a 7 (tardía: hasta d30)', 'Eritema, calor, dolor en la herida, salida de pus', 'Apertura y drenaje de herida, aseo, curación abierta'],
        ['WALKING', 'Trombosis venosa profunda', 'Día 7 a 10', 'Edema asimétrico de pantorrilla, dolor, signo de Homans', 'Eco-Doppler venoso + anticoagulación terapéutica (HBPM)'],
        ['WONDER DRUGS', 'Fiebre medicamentosa', 'Día 7 o posterior', 'Paciente con buen estado general, eosinofilia, rash', 'Suspensión del fármaco desencadenante sospechoso']
      ]
    },
    vignette: 'Hombre de 54 años, fumador activo, sometido hace 20 horas a hemicolectomía izquierda programada por adenocarcinoma de colon bajo anestesia general. Evoluciona con registro de temperatura axilar de 38.3 °C y frecuencia respiratoria de 22 rpm. Al examen físico: PA 130/80 mmHg, FC 88 lpm, saturación 94% aire ambiental. La herida operatoria se encuentra cubierta con apósito limpio y seco; al descubrirla, no presenta eritema, calor local ni secreciones. En el examen pulmonar se ausculta murmullo vesicular disminuido en ambas bases con escasas crepitaciones finas inspiratorias basales derechas. Abdomen blando, depresible, levemente doloroso en relación a la herida quirúrgica, con ruidos hidroaéreos escasos.',
    explicacion: 'La causa más probable de la fiebre es una atelectasia pulmonar (Wind), típica del primer y segundo día postoperatorio, favorecida por el antecedente tabáquico, la incisión abdominal alta y la hipoventilación por dolor. La conducta adecuada es optimizar la analgesia multimodal para permitir una adecuada mecánica ventilatoria, iniciar kinesiterapia respiratoria con espirometría incentivada y promover la deambulación precoz. No se deben iniciar antibióticos empíricos ni solicitar cultivos invasivos de rutina en ausencia de otros focos o deterioro clínico.',
    keyPoints: [
      "La atelectasia pulmonar es la causa número 1 de fiebre en las primeras 24 a 48 horas postoperatorias (Wind).",
      "El tratamiento de la atelectasia postquirúrgica es kinesiterapia respiratoria y deambulación precoz; NO requiere antibióticos.",
      "La infección del sitio quirúrgico suele manifestarse entre el 5° y 7° día postoperatorio (Wound); las infecciones antes de 48 h son raras y sugieren S. pyogenes o Clostridium.",
      "La infección urinaria postoperatoria ocurre clásicamente hacia el día 3 (Water) y se previene retirando la sonda Foley lo antes posible.",
      "La sospecha de trombosis venosa profunda (Walking) exige Eco-Doppler de extremidades inferiores e inicio de anticoagulación con HBPM.",
      "Nunca se deben prescribir antibióticos a ciegas ante fiebre postoperatoria sin haber inspeccionado directamente la herida operatoria."
    ],
    questions: [
      {
        stem: 'Un hombre de 62 años, operado de gastrectomía subtotal hace 24 horas, presenta fiebre de 38.4 °C. Al examen físico: PA 125/75 mmHg, FC 92 lpm, FR 22 rpm, SatO2 93% aire ambiente. La herida operatoria está limpia, seca y sin eritema ni induración. La auscultación pulmonar revela murmullo vesicular disminuido y crepitaciones bibasales. ¿Cuál es la conducta más adecuada en este momento?',
        options: [
          { id: 'A', text: 'Iniciar ceftriaxona endovenosa 2 g al día por sospecha de neumonía intrahospitalaria' },
          { id: 'B', text: 'Indicar analgesia adecuada, espirometría incentivada y deambulación precoz' },
          { id: 'C', text: 'Abrir la herida quirúrgica para descartar infección de sitio quirúrgico oculta' },
          { id: 'D', text: 'Instalar catéter venoso central para monitorización hemodinámica continua' },
          { id: 'E', text: 'Solicitar broncoscopía urgente con lavado broncoalveolar' }
        ],
        correcta: 'B',
        explicacion: 'En las primeras 24 a 48 horas postoperatorias, la causa más frecuente de fiebre es la atelectasia pulmonar (Wind). Se produce por colapso alveolar secundario a hipoventilación, dolor postoperatorio y efectos anestésicos. El tratamiento consiste en optimizar la analgesia para permitir una respiración profunda adecuada, incentivar la espirometría/kinesiterapia respiratoria y la movilización precoz fuera de cama. No se requieren antibióticos de entrada.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.3.005'
      },
      {
        stem: 'Una mujer de 45 años, intervenida de histerectomía abdominal hace 6 días, consulta en el servicio de urgencia por sensación febril de 24 horas de evolución y dolor progresivo en la herida operatoria. Al examen físico se constata T° 38.6 °C, eritema perilesional de 3 cm alrededor de la sutura, calor local y dolor marcado a la palpación, con salida de líquido purulento y fétido a través del tercio medio de la herida. ¿Cuál es la conducta terapéutica de elección inicial?',
        options: [
          { id: 'A', text: 'Iniciar ciprofloxacino oral ambulatorio manteniendo la sutura herméticamente cerrada' },
          { id: 'B', text: 'Retirar los puntos de sutura del área comprometida, abrir la herida, evacuar el pus y realizar curaciones abiertas' },
          { id: 'C', text: 'Solicitar resonancia magnética de pelvis para evaluar la cúpula vaginal antes de intervenir la herida' },
          { id: 'D', text: 'Administrar corticoides endovenosos a dosis altas para reducir la inflamación local' },
          { id: 'E', text: 'Comprimir vigorosamente la herida sin retirar los puntos para exprimir el contenido purulento' }
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una infección del sitio quirúrgico (ISQ) incisional superficial/profunda con coleccion purulenta establecida en el 6° día postoperatorio (Wound). El principio quirúrgico fundamental e inaplazable es abrir la herida retirando las suturas en el segmento afectado, drenar todo el pus acumulado, lavar profusamente y dejar la herida abierta para curaciones secundarias con gasa húmeda. Los antibióticos sistémicos se reservan si existe celulitis perilesional extensa (> 5 cm) o compromiso sistémico/sepsis.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.3.005'
      }
    ]
  },

  // ==========================================================================
  // TEMA 11.17: INFECCIÓN DE SITIO QUIRÚRGICO (ISQ) Y DEHISCENCIA (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-17',
    classId: 'cirugia-17',
    tier: 2,
    blockNum: 4,
    blockName: 'Preoperatorio, Anestesia & Complicaciones Quirúrgicas',
    topicLabel: '11.17',
    title: 'Infección de Sitio Quirúrgico (ISQ), Dehiscencia de Herida & Evisceración Aguda',
    perfilCode: '4.01.3.016',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Completo',
    ges: 'Sin garantía GES específica · Norma Técnica IAAS N° 124 del Ministerio de Salud.',
    reconstrucciones: 'EUNACOM Julio 2023 (Q#28) · EUNACOM Diciembre 2021 (Q#102) · EUNACOM Enero 2019 (Q#41)',
    frecuencia: 'Alta en EUNACOM · Preguntas sobre profilaxis antibiótica, clasificación de ISQ y manejo de evisceración',
    diagram: flowCirugia('Prevención, Clasificación y Manejo de ISQ y Dehiscencia', [
      { t: 'Herida Quirúrgica: Prevención de Infección de Sitio Quirúrgico (ISQ)', s: 'Profilaxis ATB en los 60 min previos a incisión (Cefazolina 2g) · No rasurar con máquina de afeitar', type: 'acc' },
      { k: 'split', q: '¿Complicación Postoperatoria de la Pared Abdominal?', s: 'Diferenciación entre infección localizada vs falla mecánica de pared',
        ll: 'Infección de Sitio Quirúrgico (ISQ)',
        left: { t: 'Superficial, Profunda u Órgano-Espacio', s: 'Apertura de sutura + drenaje purulento + curaciones húmedas · ATB solo si celulitis extensa', type: 'warn' },
        rl: 'Dehiscencia de Fascia y Evisceración',
        right: { t: 'Salida de Líquido en "Agua de Carne" o Asas', s: 'Evisceración: cubrir con compresas húmedas estériles con suero tibio + pabellón de urgencia', type: 'crit' }
      },
      { t: 'Clasificación de Heridas según Grado de Contaminación', s: 'Limpia (<2% inf), Limpia-Contaminada (3-7%), Contaminada (10-15%), Sucia (>25%)', type: 'dec' },
      { t: 'Conducta Médica Inmediata ante Evisceración Abdominal', s: 'Reposición de volemia + analgesia EV + no reintroducir asas a ciegas + cirugía urgente', type: 'crit' }
    ]),
    contexto: 'Las complicaciones de la herida operatoria abarcan desde la infección del sitio quirúrgico (ISQ) —la infección intrahospitalaria más prevalente en pacientes operados— hasta la dehiscencia de la pared abdominal y la evisceración aguda, una emergencia quirúrgica con riesgo vital por shock y necrosis visceral. El EUNACOM evalúa consistentemente: 1) la profilaxis antibiótica adecuada (cefazolina 60 minutos antes de la incisión); 2) el drenaje quirúrgico como pilar de la ISQ; y 3) la conducta inmediata ante una evisceración (cubrir con compresas húmedas tibias y traslado urgente a pabellón sin intentar reintroducir las asas a la fuerza).',
    contentSections: [
      {
        subhead: '1. Clasificación de las Heridas Quirúrgicas y Profilaxis Antimicrobiana',
        paragraphs: [
          'La CDC y el MINSAL clasifican las heridas según su potencial de contaminación:',
          '• <strong>Clase I (Limpia):</strong> Herida no traumática, sin inflamación previa, sin apertura del tracto digestivo, respiratorio, genitourinario ni biliar (ej. hernioplastía inguinal electiva, tiroidectomía). Tasa de infección < 2%. <em>Profilaxis ATB:</em> No indicada de rutina salvo si se implanta prótesis o malla sintética.',
          '• <strong>Clase II (Limpia-Contaminada):</strong> Apertura controlada del tracto digestivo, biliar, respiratorio o urinario bajo condiciones programadas, sin derrame inusual (ej. colecistectomía programada, apendicectomía no complicada, histerectomía). Tasa de infección 5-10%. <em>Profilaxis ATB:</em> <strong>Cefazolina 2 g EV</strong> (dosis única 30-60 minutos antes de la incisión; repetir a las 4 horas si la cirugía se prolonga).',
          '• <strong>Clase III (Contaminada):</strong> Herida traumática reciente (< 4 horas), derrame grosero del tracto gastrointestinal o inflamación aguda no purulenta (ej. colecistitis aguda purulenta, apendicitis flegmonosa, herida traumática abierta). Tasa de infección 15-20%. Requiere profilaxis extendida o tratamiento inicial.',
          '• <strong>Clase IV (Sucia / Infectada):</strong> Herida traumática antigua (> 4 horas) con tejido desvitalizado, perforación visceral conocida o infección clínica preexistente con pus libre (ej. peritonitis fecaloidea por perforación de colon, absceso intraabdominal). Tasa de infección > 30-40%. <strong>Constituye tratamiento antibiótico terapéutico</strong>, no profilaxis.',
          '<strong>Reglas de Oro de la Profilaxis Quirúrgica:</strong> Se administra <strong>dentro de los 60 minutos previos a la incisión quirúrgica</strong> para asegurar concentraciones tisulares máximas en el momento de la disección. En cirugías limpias-contaminadas no se debe prolongar más allá de 24 horas postoperatorias.'
        ]
      },
      {
        subhead: '2. Dehiscencia de Fascia y Evisceración Aguda',
        paragraphs: [
          '• <strong>Dehiscencia de la Pared Abdominal:</strong> Separación de las capas de la herida quirúrgica. Si compromete solo piel y tejido celular subcutáneo es una dehiscencia superficial. Si compromete la aponeurosis/fascia muscular, constituye una <strong>dehiscencia de fascia</strong>.',
          '• <strong>Signo Premonitorio Cardinal:</strong> La salida abundante de líquido serosanguinolento claro o rosado (denominado clásicamente <strong>"líquido en agua de carne"</strong> o "lavado de carne") a través de la herida entre el 5° y 8° día postoperatorio es el signo clínico casi patognomónico de dehiscencia fascial subyacente.',
          '• <strong>Evisceración Aguda:</strong> Salida o protrusión de vísceras intraabdominales (habitualmente asas de intestino delgado o epiplón) a través de la herida dehiscente. Es una urgencia quirúrgica mayor.',
          '• <strong>Manejo Inmediato ante Evisceración:</strong>',
          '1) <strong>Cubrir inmediatamente las vísceras evisceradas con compresas estériles humedecidas con suero fisiológico tibio</strong> (evita la desecación y necrosis del peritoneo visceral).',
          '2) <strong>NUNCA intentar reintroducir las asas intestinales en la sala o cama del paciente</strong> (aumenta el riesgo de perforación visceral y peritonitis).',
          '3) Indicar reposo absoluto, posición semifowler o decúbito con rodillas flectadas para reducir la tensión de la pared abdominal.',
          '4) Instalar vía venosa periférica, iniciar reanimación con cristaloides, suspender vía oral e instalar sonda nasogástrica.',
          '5) <strong>Traslado inmediato a pabellón quirúrgico</strong> para aseo de asas y cierre de pared (sutura con puntos totales de retención o colocación de malla de contención).'
        ]
      }
    ],
    table: {
      title: 'Clasificación de Infección del Sitio Quirúrgico (CDC / MINSAL)',
      headers: ['Tipo de ISQ', 'Límites Anatómicos', 'Criterios Diagnósticos', 'Manejo Quirúrgico'],
      rows: [
        ['ISQ Incisional Superficial', 'Compromete solo piel y tejido celular subcutáneo', 'Secreción purulenta, eritema, calor, dolor local (< 30 días)', 'Retiro de puntos, apertura de piel y tejido celular, curación húmeda'],
        ['ISQ Incisional Profunda', 'Compromete fascia muscular y planos musculares', 'Drenaje purulento profundo, dehiscencia de fascia, fiebre', 'Apertura amplia, desbridamiento de tejido desvitalizado, drenaje'],
        ['ISQ de Órgano / Espacio', 'Cualquier zona anatómica abierta o manipulada (peritoneo)', 'Absceso intraabdominal en TAC, peritonitis postoperatoria', 'Drenaje percutáneo guiado por TAC/eco o relaparotomía de aseo'],
        ['Evisceración Aguda', 'Apertura de todos los planos con exteriorización visceral', 'Protrusión visible de asas o epiplón a través de la herida', 'Compresas estériles húmedas tibias + reparación quirúrgica urgente en pabellón']
      ]
    },
    vignette: 'Hombre de 68 años, obeso (IMC 36 kg/m²), con antecedente de EPOC y tos crónica, sometido a laparotomía exploradora de urgencia hace 6 días por peritonitis apendicular. Mientras tose intensamente en su cama de hospitalización, refiere una sensación súbita de "desgarro" y dolor agudo en el abdomen. Al examinar al paciente, el médico constata que el apósito está completamente empapado de líquido serosanguinolento abundante ("en agua de carne") y, al retirarlo, se visualizan múltiples asas de intestino delgado protruyendo a través de la herida operatoria en una longitud de 10 cm, con serosa eritematosa pero aún viable.',
    explicacion: 'El paciente presenta una evisceración aguda postoperatoria, favorecida por la hipertensión intraabdominal generada por los accesos de tos en un paciente con factores de riesgo (obesidad, infección previa). La conducta médica inmediata es cubrir las asas intestinales evisceradas con compresas estériles empapadas en suero fisiológico tibio para evitar la desecación y necrosis isquémica, colocar al paciente en decúbito con rodillas flexionadas, asegurar analgesia y accesos venosos, y trasladar de inmediato a pabellón de operaciones para reexploración y cierre formal de la pared abdominal.',
    keyPoints: [
      "La profilaxis antibiótica quirúrgica de elección en cirugía abdominal limpia-contaminada es Cefazolina 2 g EV administrada 30-60 minutos antes de la incisión.",
      "La salida de líquido serosanguinolento abundante en 'agua de carne' entre el 5° y 8° día es el signo cardinal de dehiscencia de fascia.",
      "Ante una evisceración aguda, NUNCA se deben reintroducir las asas en la sala; se deben cubrir con compresas estériles húmedas tibias y trasladar a pabellón.",
      "El pilar del tratamiento de la infección del sitio quirúrgico incisional es la apertura de la herida y el drenaje completo del pus.",
      "Los antibióticos sistémicos en una ISQ superficial solo están indicados si existe celulitis perilesional extensa (> 5 cm) o signos de respuesta inflamatoria sistémica.",
      "El rasurado con máquina de afeitar la noche previa aumenta el riesgo de ISQ por microlesiones cutáneas; si es necesario cortar el vello, se debe hacer con clipper eléctrico inmediatamente antes de la cirugía."
    ],
    questions: [
      {
        stem: 'Un hombre de 70 años, diabético y con EPOC, operado hace 7 días de resección sigmoidea programada, presenta súbita salida abundante de líquido rosado acuoso ("en agua de carne") a través de la herida operatoria tras un esfuerzo de tos. Al retirar los apósitos se observa dehiscencia de la piel y aponeurosis con protrusión de asas de intestino delgado hacia el exterior. ¿Cuál es la conducta inmediata más adecuada?',
        options: [
          { id: 'A', text: 'Reintroducir las asas manualmente en la cavidad abdominal y cerrar la piel con puntos de seda gruesos en la sala' },
          { id: 'B', text: 'Cubrir las asas evisceradas con compresas estériles empapadas en solución salina tibia y trasladar de inmediato a pabellón' },
          { id: 'C', text: 'Aplicar un vendaje compresivo elástico seco sobre el abdomen y mantener observación ambulatoria' },
          { id: 'D', text: 'Instalar un sistema de aspiración negativa sobre las asas intestinales expuestas' },
          { id: 'E', text: 'Administrar heparina de bajo peso molecular y solicitar TAC de abdomen y pelvis de urgencia' }
        ],
        correcta: 'B',
        explicacion: 'La evisceración aguda postoperatoria requiere protección inmediata de las vísceras expuestas con compresas estériles empapadas en suero fisiológico tibio para prevenir la desecación, el enfriamiento y la necrosis isquémica intestinal. NUNCA se deben manipular o reintroducir las vísceras en la cama de la sala, ya que se corre el riesgo de laceración visceral o contaminación masiva. El tratamiento definitivo es la reparación quirúrgica inmediata en pabellón bajo anestesia general.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.3.016'
      },
      {
        stem: '¿En cuál de las siguientes situaciones clínicas se encuentra formalmente indicada la administración de profilaxis antibiótica quirúrgica según las normas internacionales y del Ministerio de Salud de Chile?',
        options: [
          { id: 'A', text: 'Biopsia excisional de un nevus dérmico benigno de 1 cm en el tórax' },
          { id: 'B', text: 'Hernioplastía inguinal electiva con colocación de malla de polipropileno en paciente no diabético' },
          { id: 'C', text: 'Drenaje ambulatorio de un absceso perianal fluctuante de 2 cm' },
          { id: 'D', text: 'Extirpación de un lipoma subcutáneo superficial de 3 cm en el antebrazo' },
          { id: 'E', text: 'Curación de una quemadura superficial tipo A de 2% de superficie corporal' }
        ],
        correcta: 'B',
        explicacion: 'Las cirugías limpias (Clase I) habitualmente no requieren profilaxis antibiótica sistemática, con una EXCEPCIÓN formal: cuando se implanta un cuerpo extraño protésico o material sintético permanente, como una malla de polipropileno en una hernioplastía, una prótesis articular o una válvula cardíaca. La infección de una malla implica una catástrofe quirúrgica que suele obligar a su explantación. En estos casos, se administra profilaxis con Cefazolina 2 g EV preincisional.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.3.016'
      }
    ]
  },

  // ==========================================================================
  // TEMA 11.18: MANEJO DE HERIDAS, MORDEDURAS Y TÉTANOS (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-18',
    classId: 'cirugia-18',
    tier: 2,
    blockNum: 4,
    blockName: 'Preoperatorio, Anestesia & Complicaciones Quirúrgicas',
    topicLabel: '11.18',
    title: 'Manejo de Heridas Traumáticas, Mordeduras Animales/Humanas & Profilaxis Antitetánica',
    perfilCode: '4.01.2.026',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Prevención y Profilaxis Post-exposición a Rabia y Tétanos · Notificación Obligatoria.',
    reconstrucciones: 'EUNACOM Julio 2024 (Q#12) · EUNACOM Diciembre 2022 (Q#85) · EUNACOM Enero 2021 (Q#14)',
    frecuencia: 'Muy Alta en EUNACOM · Preguntas sobre profilaxis antitetánica según estado vacunal y manejo de mordeduras',
    diagram: flowCirugia('Algoritmo de Profilaxis Antitetánica y Manejo de Mordeduras', [
      { t: 'Herida Traumática o Mordedura: Clasificación de la Herida y Estado Vacunal', s: 'Herida limpia y menor vs Herida sucia/tetanígena (tierra, heces, aplastamiento, punzante)', type: 'warn' },
      { k: 'split', q: '¿Estado Vacunal Antitetánico del Paciente?', s: 'Esquema completo (≥ 3 dosis) vs Incompleto / Desconocido',
        ll: 'Esquema Completo (≥ 3 dosis previas)',
        left: { t: 'Herida Limpia: Vacuna solo si > 10 años', s: 'Herida Sucia: Vacuna de refuerzo (dT) solo si pasaron > 5 años · NO usar Inmunoglobulina (TIG)', type: 'acc' },
        rl: 'Incompleto (< 3 dosis) o Desconocido',
        right: { t: 'Herida Limpia: Solo Vacuna (dT)', s: 'Herida Sucia/Tetanígena: Vacuna (dT) + INMUNOGLOBULINA ANTITETÁNICA (TIG 250 UI) simultáneas', type: 'crit' }
      },
      { t: 'Manejo Especial de Mordeduras Humanas y Animales (Perro/Gato)', s: 'Aseo profuso con suero a presión · NO suturar mordeduras (cierre por segunda intención)', type: 'dec' },
      { t: 'Antibioticoterapia de Elección en Mordeduras de Riesgo', s: 'Amoxicilina / Ácido Clavulánico 875/125 mg c/12h VO (cubre Pasteurella multocida y Eikenella)', type: 'acc' }
    ]),
    contexto: 'El enfrentamiento de las heridas traumáticas en urgencias requiere dominar las técnicas de aseo y desbridamiento, la decisión del tipo de cierre (primario vs segunda intención vs cierre diferido), la indicación rigurosa de profilaxis antitetánica según el protocolo del Ministerio de Salud y la terapia antimicrobiana en mordeduras animales y humanas. El EUNACOM evalúa de manera casi segura la indicación combinada de vacuna dT e inmunoglobulina antitetánica (TIG) en pacientes con esquemas vacunales desconocidos ante heridas sucias, así como el antibiótico de primera línea en mordeduras: amoxicilina con ácido clavulánico.',
    contentSections: [
      {
        subhead: '1. Profilaxis Antitetánica: Protocolo Oficial MINSAL',
        paragraphs: [
          'La decisión de administrar <strong>vacuna antitetánica (toxoide tetánico/difteria, dT)</strong> y/o <strong>Inmunoglobulina Humana Antitetánica (TIG, 250 UI IM)</strong> depende de <strong>dos variables: el tipo de herida y el estado de vacunación previo</strong>:',
          '• <strong>Definición de Herida Sucia o Tetanígena:</strong> Heridas contaminadas con tierra, heces, heno, saliva, heridas punzantes profundas (clavos), por proyectil de arma de fuego, aplastamiento, quemaduras, congeladuras o heridas de más de 6 horas de evolución con tejido desvitalizado.',
          '• <strong>Reglas Claras de Profilaxis Antitetánica:</strong>',
          '1) <strong>Paciente con antecedente de vacunación completa (≥ 3 dosis previas):</strong>',
          '   - <em>Herida limpia y superficial:</em> Solo requiere refuerzo con vacuna (dT) si han pasado <strong>más de 10 años</strong> desde la última dosis. No requiere TIG.',
          '   - <em>Herida sucia o tetanígena:</em> Requiere refuerzo con vacuna (dT) si han pasado <strong>más de 5 años</strong> desde la última dosis. <strong>NO requiere TIG</strong> (su memoria inmunológica responde con el toxoide).',
          '2) <strong>Paciente con vacunación incompleta (< 3 dosis) o DESCONOCIDA:</strong>',
          '   - <em>Herida limpia y menor:</em> Requiere administrar solo <strong>Vacuna (dT)</strong> (completar esquema 0, 1 y 6 meses). No requiere TIG.',
          '   - <em>Herida sucia, tetanígena o punzante profunda:</em> Requiere <strong>VACUNA (dT) + INMUNOGLOBULINA ANTITETÁNICA (TIG 250 UI IM)</strong> administradas simultáneamente en sitios anatómicos diferentes con jeringas distintas.'
        ]
      },
      {
        subhead: '2. Manejo de Mordeduras Animales y Humanas',
        paragraphs: [
          '• <strong>Mordeduras de Gato:</strong> Causadas por dientes afilados que actúan como agujas punzantes profundas, inoculando <strong>Pasteurella multocida</strong> en vainas tendíneas o periostio. Tienen la tasa más alta de infección (hasta 50%).',
          '• <strong>Mordeduras de Perro:</strong> Causan mayor daño por desgarro y aplastamiento tisular. Microorganismos: <em>Pasteurella canis</em>, <em>Capnocytophaga canimorsus</em>, anaerobios.',
          '• <strong>Mordeduras Humanas:</strong> Flora polimicrobiana agresiva rica en <strong>Eikenella corrodens</strong>, <em>Streptococcus viridans</em> y anaerobios orales. Son altamente infecciosas.',
          '• <strong>Principios de Tratamiento de Mordeduras:</strong>',
          '1) <strong>Aseo e irrigación profusa</strong> con abundante suero fisiológico a presión (es la medida más efectiva para reducir la carga bacteriana).',
          '2) <strong>Desbridamiento conservador</strong> de bordes desvitalizados.',
          '3) <strong>REGLA DE CIERRE: NO SUTURAR LAS MORDEDURAS</strong> (dejar cicatrizar por segunda intención o realizar cierre diferido a las 48-72 h), debido al altísimo riesgo de abscesos y flemones profundos. <em>Excepción:</em> heridas faciales extensas por razones estéticas, suturadas laxamente tras lavado quirúrgico masivo y bajo cobertura antibiótica estricta.',
          '4) <strong>Antibioticoterapia de Elección (Profilaxis o Tratamiento):</strong> <strong>Amoxicilina + Ácido Clavulánico 875/125 mg cada 12 horas por vía oral por 5 a 7 días</strong> (o ampicilina/sulbactam EV). En alérgicos a penicilina: Doxiciclina 100 mg c/12h o Moxifloxacino.',
          '5) <strong>Profilaxis Antirrábica:</strong> Evaluar indicación según antecedentes del animal (perro observable por 10 días vs animal silvestre/murciélago/no ubicable).'
        ]
      }
    ],
    table: {
      title: 'Guía de Profilaxis Antitetánica según Antecedente de Vacunación y Tipo de Herida',
      headers: ['Historia de Vacunación Previa', 'Herida Limpia y Menor: Vacuna (dT)', 'Herida Limpia y Menor: TIG (250 UI)', 'Herida Sucia / Tetanígena: Vacuna (dT)', 'Herida Sucia / Tetanígena: TIG (250 UI)'],
      rows: [
        ['Incierta o < 3 dosis', 'SÍ (iniciar esquema)', 'NO', 'SÍ (iniciar esquema)', 'SÍ (250 UI IM en otro sitio)'],
        ['≥ 3 dosis (última < 5 años)', 'NO', 'NO', 'NO', 'NO'],
        ['≥ 3 dosis (última hace 5 a 10 años)', 'NO', 'NO', 'SÍ (refuerzo con dT)', 'NO'],
        ['≥ 3 dosis (última hace > 10 años)', 'SÍ (refuerzo con dT)', 'NO', 'SÍ (refuerzo con dT)', 'NO']
      ]
    },
    vignette: 'Hombre de 42 años, trabajador agrícola en zona rural, consulta en el servicio de urgencia tras enterrarse un clavo oxidado cubierto de tierra en la planta del pie derecho hace 3 horas mientras reparaba un corral. Al examen físico: herida punzante de 1 cm en zona medioplantar derecha con halo eritematoso leve, dolor a la palpación y escaso exudado serohemático. No tiene soluciones de continuidad adicionales. Al ser interrogado sobre sus vacunas, refiere que no recuerda haber recibido ninguna vacuna desde su época escolar.',
    explicacion: 'El paciente presenta una herida tetanígena de alto riesgo (punzante profunda, contaminada con tierra y heces de animales en zona rural) y cuenta con un antecedente vacunal desconocido o incompleto. De acuerdo a la normativa ministerial de salud, la conducta inaplazable consiste en: 1) aseo quirúrgico profuso de la herida con suero fisiológico a presión y extracción de posibles cuerpos extraños; 2) administración inmediata de Vacuna antitetánica (toxoide dT) en un brazo; y 3) administración simultánea de Inmunoglobulina Humana Antitetánica (TIG) 250 UI por vía intramuscular en otro brazo o glúteo.',
    keyPoints: [
      "En heridas sucias o tetanígenas con vacunación desconocida o < 3 dosis, se debe administrar obligatoriamente Vacuna dT + Inmunoglobulina Antitetánica (TIG 250 UI).",
      "Si el paciente tiene vacunación completa (≥ 3 dosis), NUNCA requiere inmunoglobulina; solo requiere refuerzo vacunal si pasaron > 5 años en heridas sucias o > 10 años en limpias.",
      "Las mordeduras de animales y humanas NO deben suturarse de regla; se manejan abiertas con aseo masivo a presión para evitar flemones y abscesos.",
      "El antibiótico de primera elección indiscutido para mordeduras de perro, gato o humanas es Amoxicilina / Ácido Clavulánico (cubre Pasteurella y Eikenella).",
      "Las mordeduras por murciélagos o animales silvestres carnívoros constituyen indicación formal de profilaxis antirrábica inmediata sin esperar observación del animal.",
      "En heridas faciales por mordedura se puede realizar sutura laxa exclusivamente por razones estéticas tras lavado quirúrgico profuso bajo cobertura antibiótica estricta."
    ],
    questions: [
      {
        stem: 'Un hombre de 35 años consulta en el servicio de urgencia 2 horas después de haber sido mordido en la mano derecha por el gato de su vecina. Al examen se aprecian dos heridas puntiformes en la eminencia tenar, con dolor leve y sin compromiso tendíneo ni articular evidente. ¿Cuál es la conducta terapéutica inicial más adecuada?',
        options: [
          { id: 'A', text: 'Realizar aseo profuso con suero fisiológico, afrontar las heridas con sutura no reabsorbible e indicar ciprofloxacino oral' },
          { id: 'B', text: 'Irrigar profusamente con suero fisiológico, dejar las heridas abiertas e iniciar amoxicilina con ácido clavulánico por vía oral' },
          { id: 'C', text: 'Administrar cloxacilina oral durante 10 días y suturar herméticamente las punciones' },
          { id: 'D', text: 'Indicar reposo de la mano en cabestrillo sin necesidad de antibióticos por tratarse de un gato doméstico' },
          { id: 'E', text: 'Realizar exploración quirúrgica de urgencia en pabellón bajo anestesia general' }
        ],
        correcta: 'B',
        explicacion: 'Las mordeduras de gato tienen un alto riesgo de infección por Pasteurella multocida debido a sus colmillos delgados que actúan como agujas punzantes. El manejo de elección consiste en abundante irrigación con suero fisiológico a presión, NO suturar las heridas para evitar atrapamiento bacteriano y flemones profundos, e iniciar profilaxis antibiótica precoz con Amoxicilina con Ácido Clavulánico (fármaco de primera línea frente a Pasteurella multocida).',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026'
      },
      {
        stem: 'Una mujer de 58 años sufre una herida cortante de 4 cm en la pierna izquierda con una lata oxidada en su patio. La herida está visiblemente sucia con tierra. La paciente refiere tener su esquema de vacunación al día, habiendo recibido su última dosis de refuerzo de vacuna antitetánica hace 7 años. ¿Cuál es la indicación correcta respecto a la profilaxis antitetánica en este caso?',
        options: [
          { id: 'A', text: 'No requiere ninguna intervención inmunológica porque su última dosis fue hace menos de 10 años' },
          { id: 'B', text: 'Administrar únicamente una dosis de refuerzo de vacuna antitetánica (dT)' },
          { id: 'C', text: 'Administrar únicamente inmunoglobulina humana antitetánica (TIG)' },
          { id: 'D', text: 'Administrar vacuna antitetánica (dT) e inmunoglobulina antitetánica (TIG) simultáneamente' },
          { id: 'E', text: 'Indicar tratamiento antibiótico con penicilina benzatina en lugar de profilaxis antitetánica' }
        ],
        correcta: 'B',
        explicacion: 'En un paciente con antecedente de vacunación completa previa (≥ 3 dosis) que presenta una herida sucia o tetanígena, el protocolo oficial establece que solo requiere una dosis de refuerzo de Vacuna (dT) si han transcurrido más de 5 años desde la última dosis (en este caso pasaron 7 años). NO requiere inmunoglobulina antitetánica (TIG), ya que conserva memoria inmunológica que responderá rápidamente a la revacunación.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026'
      }
    ]
  }
];

module.exports = { bloque4Classes };
