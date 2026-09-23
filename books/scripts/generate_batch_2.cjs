/**
 * Generador de Preguntas de Alta Calibración · Lote 2 (18 preguntas)
 * Ensayo EUNACOM 2026 · Módulo 1 Medicina Interna
 * 
 * 9 preguntas de Gastroenterología (B2-Q01 a B2-Q09)
 * 9 preguntas de Respiratorio (B2-Q10 a B2-Q18)
 */

const fs = require('fs');
const path = require('path');

const batch2Questions = [
  // =========================================================================
  // GASTROENTEROLOGÍA (9 PREGUNTAS: B2-Q01 a B2-Q09)
  // =========================================================================

  // B2-Q01
  {
    id: "B2-Q01",
    specialtyKey: "gastroenterologia",
    specialtyName: "Gastroenterología",
    topicTitle: "Enfermedad por Reflujo Gastroesofágico y Esófago de Barrett",
    perfilCode: "1.06.1.027",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "Sin garantía GES específica · Norma MINSAL de dispepsia y uso racional de IBP"
    },
    stem: "Hombre de 52 años, chofer de locomoción colectiva, con antecedente de tabaquismo suspendido hace 5 años y pirosis retroesternal con regurgitación ácida de más de 6 años de evolución en tratamiento discontinuo con antiácidos. Consulta en el CESFAM refiriendo que en el último mes ha presentado sensación de detención retroesternal de alimentos sólidos de carácter intermitente y una baja de peso no buscada de 3 kg. No refiere hematemesis ni melena. Al examen físico: PA 128/82 mmHg, FC 74 lpm, afebril, IMC 28.5 kg/m². El examen cardiopulmonar y abdominal no revelan alteraciones. Laboratorio en APS: Hemoglobina 11.8 g/dL, VCM 76 fL (anemia microcítica incipiente). ¿Cuál es la conducta médica inicial más adecuada?",
    options: [
      {
        id: "A",
        text: "Indicar prueba terapéutica con esomeprazol 40 mg al día en ayunas por 8 semanas y reevaluar"
      },
      {
        id: "B",
        text: "Solicitar una endoscopía digestiva alta (EDA) con toma de biopsias para estudio histológico"
      },
      {
        id: "C",
        text: "Solicitar una manometría esofágica de alta resolución para evaluar la motilidad del esófago"
      },
      {
        id: "D",
        text: "Iniciar tratamiento empírico con sucralfato oral y derivar a nutricionista para dieta antirreflujo"
      },
      {
        id: "E",
        text: "Solicitar una pH-metría esofágica ambulatoria de 24 horas con impedanciometría"
      }
    ],
    correcta: "B",
    explicacion: "Justificación de la alternativa correcta (B): En pacientes con síntomas de reflujo gastroesofágico, la presencia de cualquier 'signo o síntoma de alarma' (edad > 50 años, disfagia de reciente comienzo, baja de peso involuntaria, anemia ferropénica, hemorragia digestiva, vómitos recurrentes o síntomas nocturnos rebeldes) contraindica formalmente el manejo empírico con IBP y obliga a realizar una Endoscopía Digestiva Alta (EDA) precoz con toma de biopsias. Su objetivo primordial es descartar un adenocarcinoma esofágico, estenosis péptica o esófago de Barrett con displasia antes de iniciar cualquier tratamiento médico.\n\nAnálisis de distractores:\n- A es incorrecta: La prueba terapéutica empírica con IBP se reserva exclusivamente para pacientes jóvenes (< 50 años) con pirosis y regurgitación típicas sin ninguna bandera roja. En un paciente de 52 años con disfagia progresiva, baja de peso y anemia, dar IBP sin endoscopia es una negligencia que retrasa el diagnóstico de neoplasia esofágica curable.\n- C es incorrecta: La manometría esofágica es el estándar de oro para evaluar trastornos motores (como acalasia o espasmo esofágico difuso), pero no visualiza la mucosa y nunca es el examen inicial ante síntomas de alarma; primero debe descartarse organicidad mediante endoscopía.\n- D es incorrecta: El sucralfato es un protector de mucosa obsoleto con eficacia mínima en ERGE y no sustituye la obligación médica y legal de investigar signos de alarma endoscópicamente.\n- E es incorrecta: La pH-metría de 24 horas con impedancia es el examen de elección para certificar reflujo ácido o no ácido cuando la endoscopía es normal y persisten dudas diagnósticas, o como evaluación prequirúrgica de funduplicatura; no tiene indicación inicial en presencia de disfagia y baja de peso."
  },

  // B2-Q02
  {
    id: "B2-Q02",
    specialtyKey: "gastroenterologia",
    specialtyName: "Gastroenterología",
    topicTitle: "Trastornos Digestivos Funcionales y Síndrome de Intestino Irritable",
    perfilCode: "1.06.1.008",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "Sin garantía GES · manejo completo en Atención Primaria"
    },
    stem: "Mujer de 29 años, cajera de supermercado, consulta en el CESFAM por dolor abdominal cólico recurrente en hemiabdomen inferior de 8 meses de evolución, que se presenta de 2 a 3 días por semana, aliviándose de manera ostensible tras defecar. Relata que en los días con dolor presenta deposiciones líquidas a semilíquidas (Bristol 6) entre 3 y 5 veces al día, con sensación de evacuación incompleta, sin sangre visible ni fiebre. No presenta baja de peso, dolor nocturno que interrumpa el sueño ni antecedentes familiares de cáncer digestivo. Al examen físico: PA 115/70 mmHg, FC 68 lpm, afebril, abdomen blando, depresible, levemente sensible en fosa ilíaca izquierda sobre marco cólico, sin visceromegalias ni signos peritoneales. Exámenes de laboratorio en APS: hemograma, velocidad de sedimentación globular (VSG), PCR, función tiroidea y anticuerpos anti-transglutaminasa IgA son rigurosamente normales. La paciente ha mantenido una dieta baja en carbohidratos fermentables (FODMAP) y medidas de estilo de vida durante 6 semanas con alivio insatisfactorio del dolor. ¿Cuál es el tratamiento farmacológico de primera línea más adecuado para optimizar el control de sus síntomas?",
    options: [
      {
        id: "A",
        text: "Polietilenglicol 17 g al día disuelto en agua por la mañana"
      },
      {
        id: "B",
        text: "Ciprofloxacino 500 mg cada 12 horas por vía oral por 14 días"
      },
      {
        id: "C",
        text: "Loperamida 4 mg cada 8 horas por vía oral en forma fija e indefinida"
      },
      {
        id: "D",
        text: "Amitriptilina 10 a 25 mg por vía oral por las noches al acostarse"
      },
      {
        id: "E",
        text: "Prednisona 40 mg al día por vía oral en pauta descendente por 4 semanas"
      }
    ],
    correcta: "D",
    explicacion: "Justificación de la alternativa correcta (D): La paciente cumple estrictamente los Criterios de Roma IV para Síndrome de Intestino Irritable con predominio de diarrea (SII-D): dolor abdominal recurrente al menos 1 día por semana en los últimos 3 meses, relacionado con la defecación y asociado a cambios en la frecuencia y consistencia de las heces, sin signos de alarma y con despistaje de enfermedad celíaca y orgánica negativo. Cuando las medidas higiénico-dietéticas (dieta baja en FODMAP) no logran controlar el dolor, los antidepresivos tricíclicos en dosis bajas (Amitriptilina 10 a 25 mg al acostarse) son los neuromoduladores centrales y periféricos de primera línea recomendados en Atención Primaria. Actúan modulando la hipersensibilidad visceral y, gracias a sus propiedades anticolinérgicas leves, enlentecen el tránsito colónico, disminuyendo la diarrea.\n\nAnálisis de distractores:\n- A es incorrecta: El polietilenglicol (PEG) es un laxante osmótico de primera línea en el SII con constipación predominante (SII-C); en esta paciente con diarrea, su uso exacerbaría catastróficamente los síntomas.\n- B es incorrecta: El uso de antibióticos sistémicos como ciprofloxacino no tiene ninguna indicación en SII; altera la microbiota autóctona, predispone a colitis por C. difficile y empeora la disfunción intestinal.\n- C es incorrecta: La loperamida puede usarse como rescate situacional episódico ante eventos sociales, pero su administración fija y continua en dosis altas no alivia el dolor visceral ni el meteorismo y puede inducir constipación de rebote severa e íleo.\n- E es incorrecta: La prednisona está indicada en la Enfermedad Inflamatoria Intestinal (colitis ulcerosa o enfermedad de Crohn), no en trastornos funcionales donde no existe inflamación transmural ni de mucosa; someter a la paciente a corticoides produce efectos adversos metabólicos e inmunes graves sin beneficio clínico."
  },

  // B2-Q03
  {
    id: "B2-Q03",
    specialtyKey: "gastroenterologia",
    specialtyName: "Gastroenterología",
    topicTitle: "Ictericia y Colestasia: Enfrentamiento Diagnóstico",
    perfilCode: "1.06.1.007",
    legalLevel: {
      dx: "Específico",
      tx: "Inicial",
      seg: "Derivar",
      ges: "Sin garantía GES específica · la ictericia obstructiva del adulto mayor se estudia y deriva según hallazgo"
    },
    stem: "Hombre de 71 años, jubilado, consulta en el servicio de urgencias por ictericia mucocutánea progresiva de 5 semanas de evolución, asociada a coluria intensa, acolia fecal y prurito generalizado insidioso. Refiere una baja involuntaria de 8 kg de peso en los últimos 2 meses y astenia. No ha presentado fiebre, calofríos ni dolor abdominal cólico. Refiere como antecedente médico la detección de diabetes mellitus tipo 2 hace 2 meses en su centro de salud. Al examen físico: adelgazado, vigil, orientado, PA 124/76 mmHg, FC 74 lpm, T° 36.7 °C. Marcada ictericia esclero-tegumentaria verdínica. Al examen abdominal: abdomen blando, indoloro, palpándose en el hipocondrio derecho una masa redondeada, lisa, renitente, móvil e indolora por debajo del reborde costal (signo de Courvoisier-Terrier). Laboratorio: Bilirrubina total 16.2 mg/dL (Bilirrubina directa 13.8 mg/dL), Fosfatasa alcalina 620 U/L, GGT 480 U/L, GOT 62 U/L, GPT 70 U/L, INR 1.1. ¿Cuál es el estudio por imágenes de elección para confirmar la etiología, evaluar resecabilidad vascular y etapificar la lesión responsable?",
    options: [
      {
        id: "A",
        text: "Biopsia hepática percutánea con aguja gruesa bajo visión ecográfica"
      },
      {
        id: "B",
        text: "Colangiopancreatografía retrógrada endoscópica (CPRE) diagnóstica inmediata con toma de cepillado biliar"
      },
      {
        id: "C",
        text: "Tomografía computarizada de abdomen y pelvis con contraste intravenoso en fase trifásica y protocolo pancreático"
      },
      {
        id: "D",
        text: "Ecografía doppler color de venas suprahepáticas y sistema porta"
      },
      {
        id: "E",
        text: "Radiografía simple de abdomen de pie y decúbito"
      }
    ],
    correcta: "C",
    explicacion: "Justificación de la alternativa correcta (C): El cuadro clínico de ictericia obstructiva indolora y progresiva en un adulto mayor, asociada a baja de peso, colestasia marcada, diabetes mellitus de reciente comienzo ('las 3 D') y vesícula palpable indolora en hipocondrio derecho (signo de Courvoisier-Terrier), es patognomónico de una neoplasia periampular, principalmente adenocarcinoma de cabeza de páncreas. El examen de elección ('gold standard') para el diagnóstico, la etapificación locorregional, el compromiso vascular (invasión de la arteria mesentérica superior, tronco celíaco y vena porta) y la resecabilidad quirúrgica es la Tomografía Computarizada de abdomen y pelvis con contraste y protocolo de páncreas (cortes finos en fases arterial, venosa pancreática y portal).\n\nAnálisis de distractores:\n- A es incorrecta: La biopsia hepática percutánea está contraindicada en tumores periampulares potencialmente resecables por el riesgo de diseminación tumoral a lo largo del trayecto de punción, hemorragia y peritonitis biliar, además de que no entrega información de resecabilidad anatómica vascular.\n- B es incorrecta: La CPRE es un procedimiento invasivo con riesgo de pancreatitis post-CPRE (5-10%), perforación y colangitis; su rol actual es eminentemente terapéutico (instalación de endoprótesis para drenaje biliar o paliación), no de diagnóstico o etapificación inicial.\n- D es incorrecta: La ecografía doppler evalúa hipertensión portal o síndrome de Budd-Chiari, pero no tiene resolución espacial para caracterizar la masa pancreática ni definir resecabilidad oncológica.\n- E es incorrecta: La radiografía simple de abdomen carece de utilidad para el diagnóstico de tumores de la vía biliar o páncreas y solo irradia innecesariamente al paciente."
  },

  // B2-Q04
  {
    id: "B2-Q04",
    specialtyKey: "gastroenterologia",
    specialtyName: "Gastroenterología",
    topicTitle: "Colelitiasis, Colecistitis, Coledocolitiasis y Colangitis",
    perfilCode: "1.06.1.006",
    legalLevel: {
      dx: "Específico",
      tx: "Inicial",
      seg: "Derivar",
      ges: "GES: colecistectomía preventiva en colelitiasis, 35 a 49 años"
    },
    stem: "Mujer de 47 años consulta en el Servicio de Urgencias por dolor continuo y de intensidad creciente en el hipocondrio derecho de 16 horas de evolución, irradiado al dorso y región escapular derecha, acompañado de náuseas y dos episodios de vómitos biliosos. Refiere sensación febril en el domicilio. Al examen físico: PA 132/80 mmHg, FC 96 lpm, FR 20 rpm, T° 38.3 °C axilar. Escleras anictéricas. Abdomen: ruidos hidroaéreos disminuidos; palpación marcadamente dolorosa en hipocondrio derecho con interrupción brusca de la inspiración profunda a la palpación del punto cístico (signo de Murphy positivo); no se palpan masas ni hay signos de peritonitis generalizada. Laboratorio: Leucocitosis de 14.200/mm³ con 80% de baciliformes y neutrófilos, PCR 68 mg/L, Bilirrubina total 0.9 mg/dL, Amilasemia 45 U/L. Ecografía abdominal urgente: vesícula biliar distendida de 10 cm con litiasis única enclavada en el bacinete de 16 mm, engrosamiento parietal difuso de 6 mm con signo del doble contorno y líquido perivesicular laminar; colédoco de 4 mm sin imágenes litiásicas en su interior. ¿Cuál es la conducta médica y terapéutica más adecuada?",
    options: [
      {
        id: "A",
        text: "Manejo ambulatorio con ciprofloxacino oral por 7 días y derivar a interconsulta para colecistectomía electiva por GES"
      },
      {
        id: "B",
        text: "Indicación urgente de colangiopancreatografía retrógrada endoscópica (CPRE) para esfinterotomía biliar"
      },
      {
        id: "C",
        text: "Hospitalización para tratamiento antibiótico médico exclusivo y programar colecistectomía electiva diferida a las 8 semanas para enfriar el proceso inflamatorio"
      },
      {
        id: "D",
        text: "Instalación percutánea de colecistostomía transhepática urgente como procedimiento de elección de primera línea"
      },
      {
        id: "E",
        text: "Hospitalización, reposo digestivo, hidratación parenteral, analgesia, antibióticos endovenosos y colecistectomía laparoscópica precoz dentro de las primeras 72 horas"
      }
    ],
    correcta: "E",
    explicacion: "Justificación de la alternativa correcta (E): La tríada de dolor en hipocondrio derecho prolongado (> 6 horas), fiebre con respuesta inflamatoria sistémica (leucocitosis con desviación a la izquierda y elevación de PCR), signo de Murphy positivo y hallazgos ecográficos categóricos (lito enclavado en bacinete, pared vesicular > 4 mm, doble contorno y líquido perivesicular) configuran el diagnóstico indiscutible de Colecistitis Aguda Litiásica. Según las Guías de Tokio 2018 y los consensos quirúrgicos chilenos, la colecistitis aguda es la patología biliar que requiere resolución quirúrgica de urgencia: la conducta estándar de elección es la hospitalización con antibióticos endovenosos (ceftriaxona + metronidazol o ampicilina/sulbactam) y colecistectomía laparoscópica precoz dentro de las primeras 72 horas desde el inicio de los síntomas, lo que reduce la estadía hospitalaria, complicaciones y costos en comparación con el tratamiento diferido.\n\nAnálisis de distractores:\n- A es incorrecta: La colecistitis aguda no puede manejarse de forma ambulatoria; el riesgo de gangrena vesicular, perforación libre y sepsis biliar es elevado. El GES garantiza la colecistectomía electiva preventiva en colelitiasis asintomática o sintomática no complicada en personas de 35 a 49 años, no para resolver urgencias sépticas.\n- B es incorrecta: La paciente no tiene ictericia, su bilirrubina es normal y el colédoco mide 4 mm sin litiasis; la CPRE es un procedimiento con alta morbimortalidad y no tiene indicación.\n- C es incorrecta: 'Enfriar el cuadro' con antibióticos para operar a las 6-8 semanas es un paradigma quirúrgico obsoleto; se asocia a tasas elevadas de falla terapéutica, recurrencias precoces graves y una cirugía diferida técnicamente más difícil por fibrosis cicatrizal densa.\n- D es incorrecta: La colecistostomía percutánea es una técnica de rescate reservada para pacientes críticos o con riesgo quirúrgico y anestésico prohibitivo (shock séptico en UCI) que no pueden tolerar una anestesia general, lo que no aplica a esta paciente hemodinámicamente estable."
  },

  // B2-Q05
  {
    id: "B2-Q05",
    specialtyKey: "gastroenterologia",
    specialtyName: "Gastroenterología",
    topicTitle: "Abdomen Agudo: Apendicitis y Diverticulitis",
    perfilCode: "1.06.2.001",
    legalLevel: {
      dx: "Específico",
      tx: "Inicial",
      seg: "Derivar",
      ges: "Sin garantía GES específica · urgencia quirúrgica según Norma MINSAL"
    },
    stem: "Hombre de 32 años consulta en el servicio de urgencias por dolor abdominal en la fosa ilíaca derecha de 5 días de evolución. Refiere que el cuadro comenzó insidiosamente con malestar periumbilical y náuseas, para luego focalizarse en la fosa ilíaca derecha, asociándose a sensación febril y anorexia. Por cuenta propia tomó ibuprofeno y paracetamol cada 8 horas, logrando alivio transitorio. Al examen físico: vigil, PA 124/78 mmHg, FC 86 lpm, T° 38.0 °C. El abdomen es blando y depresible en hemiabdomen superior e izquierdo; a la palpación profunda de la fosa ilíaca derecha se constata una masa empastada, firme, dolorosa, de bordes mal delimitados de aproximadamente 6 cm de diámetro, con resistencia muscular localizada pero sin rebote ni signos de peritonitis generalizada. Laboratorio: Leucocitos 13.800/mm³ (78% neutrófilos), PCR 82 mg/L. La tomografía computarizada (TAC) de abdomen y pelvis con contraste revela apéndice cecal engrosado de 11 mm bloqueado y rodeado por conglomerado inflamatorio de asas ileales y epiplón mayor, compatible con plastrón apendicular, sin colecciones líquidas loculadas mayores de 2 cm ni aire libre peritoneal. ¿Cuál es la conducta médica inicial de elección?",
    options: [
      {
        id: "A",
        text: "Hospitalización, reposo digestivo, analgesia y tratamiento antibiótico endovenoso de amplio espectro, con apendicectomía diferida a las 8 a 12 semanas"
      },
      {
        id: "B",
        text: "Laparotomía exploradora de urgencia para apendicectomía abierta inmediata y lavado peritoneal"
      },
      {
        id: "C",
        text: "Apendicectomía laparoscópica de urgencia en el primer turno quirúrgico disponible"
      },
      {
        id: "D",
        text: "Drenaje percutáneo guiado por tomografía de la masa inflamatoria antes de administrar antibióticos"
      },
      {
        id: "E",
        text: "Alta inmediata con analgesia oral y citación a colonoscopía ambulatoria en 48 horas"
      }
    ],
    correcta: "A",
    explicacion: "Justificación de la alternativa correcta (A): El paciente presenta una evolución subaguda (5 días) con una masa inflamatoria palpable en fosa ilíaca derecha sin peritonitis generalizada, confirmándose en la TAC un Plastrón Apendicular (o flemón apendicular). En el plastrón apendicular, el intento de apendicectomía quirúrgica de urgencia (abierta o laparoscópica) se asocia a una morbimortalidad extremadamente alta: los tejidos inflamados están friables y fusionados, provocando desgarros ileales, fístulas cecales y la necesidad de una hemicolectomía derecha de urgencia no planificada. El estándar de manejo internacional y de la Sociedad de Cirujanos de Chile es el tratamiento médico conservador: hospitalización, reposo intestinal, hidratación y antibioticoterapia parenteral de amplio espectro (ej. Ceftriaxona + Metronidazol). Tras enfriarse el cuadro con éxito, se programa una apendicectomía diferida de intervalo (a las 8–12 semanas) o estudio de colon en adultos mayores.\n\nAnálisis de distractores:\n- B y C son incorrectas: La cirugía inmediata (abierta o laparoscópica) en presencia de un plastrón establecido sin peritonitis difusa es un error técnico que expone al paciente a resecciones intestinales extensas y fístulas estercoráceas.\n- D es incorrecta: El drenaje percutáneo guiado por imágenes está indicado en los abscesos apendiculares coleccionados y licuados (generalmente > 3 a 4 cm de diámetro), pero es inútil y peligroso en un flemón inflamatorio sólido sin líquido drenable.\n- E es incorrecta: El alta domiciliaria en un cuadro infeccioso intraabdominal activo es inaceptable, y la colonoscopía está absolutamente contraindicada por riesgo inminente de perforación cecal iatrogénica."
  },

  // B2-Q06
  {
    id: "B2-Q06",
    specialtyKey: "gastroenterologia",
    specialtyName: "Gastroenterología",
    topicTitle: "Diarrea Aguda y Crónica en el Niño",
    perfilCode: "1.06.2.005",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "Sin garantía GES específica · Norma MINSAL de manejo de la diarrea aguda del lactante"
    },
    stem: "Lactante de 9 meses es traído al Servicio de Urgencias de Atención Primaria (SAPU) por su madre debido a un cuadro de 40 horas de diarrea acuosa profusa (más de 12 deposiciones líquidas abundantes) y vómitos incoercibles que le impiden retener líquidos. Peso actual registrado en el box: 7.8 kg (peso controlado hace 5 días en control de niño sano: 8.9 kg, lo que representa una pérdida ponderal del 12.3%). Al examen físico: lactante somnoliento, hipoactivo, con respuesta torpe a estímulos, llanto sin lágrimas, ojos profundamente hundidos, mucosa oral seca sin saliva, signo del pliegue cutáneo que regresa muy lentamente (más de 2 segundos), extremidades distales frías, llenado capilar de 4 segundos, FC 178 lpm, pulsos periféricos filiformes y PA 66/38 mmHg. ¿Cuál es la conducta médica prioritaria e inmediata de acuerdo con la norma de manejo ministerial?",
    options: [
      {
        id: "A",
        text: "Administrar sales de rehidratación oral a 100 mL/kg por sonda nasogástrica fraccionada en 4 horas"
      },
      {
        id: "B",
        text: "Iniciar de inmediato solución salina fisiológica al 0.9% a 20 mL/kg en bolo endovenoso rápido (o intraóseo)"
      },
      {
        id: "C",
        text: "Indicar loperamida en gotas orales asociada a metoclopramida endovenosa para detener los vómitos"
      },
      {
        id: "D",
        text: "Iniciar infusión de suero glucosado al 5% con electrolitos a requerimiento basal de mantención por bomba de infusión"
      },
      {
        id: "E",
        text: "Indicar ciprofloxacino oral y solicitar coprocultivo con leucocitos fecales en sala de observación"
      }
    ],
    correcta: "B",
    explicacion: "Justificación de la alternativa correcta (B): El paciente presenta una diarrea aguda severamente deshidratada con Signos Clínicos de Shock Hipovolémico: pérdida de peso > 10% (12.3%), compromiso cuantitativo de conciencia (somnoliento, hipoactivo), ojos profundamente hundidos, signo del pliegue > 2 segundos, pulsos débiles, llenado capilar prolongado (4 segundos), taquicardia severa e hipotensión arterial franca. Esto define la indicación ineludible del Plan C de Rehidratación de la OMS y MINSAL: acceso vascular de urgencia (endovenoso o intraóseo si no se canaliza en 90 segundos) e infusión rápida de cristaloides isotónicos (Suero Fisiológico 0.9% o Ringer Lactato) a 20 mL/kg en bolo en 15 a 30 minutos, reevaluando de inmediato signos vitales y perfusión.\n\nAnálisis de distractores:\n- A es incorrecta: El Plan B (sales de rehidratación oral por boca o sonda nasogástrica) está estrictamente contraindicado en presencia de shock hipovolémico, somnolencia, íleo paralítico o vómitos incoercibles por el riesgo de broncoaspiración y la incapacidad de expandir rápidamente el lecho vascular.\n- C es incorrecta: La loperamida y los antieméticos (como metoclopramida) están formalmente contraindicados en pediatría por riesgo de íleo paralítico, depresión del sistema nervioso central y reacciones extrapiramidales.\n- D es incorrecta: El suero glucosado al 5% es una solución hipotónica que no expande el espacio intravascular; administrarlo en bolo para reanimar un shock hipovolémico provoca hiponatremia dilucional aguda y edema cerebral.\n- E es incorrecta: La diarrea aguda acuosa del lactante es mayoritariamente viral (rotavirus, norovirus) y no requiere antibióticos. Además, priorizar cultivos o antibióticos en un paciente en shock antes de la expansión de volumen intravascular es un error fatal."
  },

  // B2-Q07
  {
    id: "B2-Q07",
    specialtyKey: "gastroenterologia",
    specialtyName: "Gastroenterología",
    topicTitle: "Úlcera Péptica, Dispepsia Funcional y Helicobacter pylori",
    perfilCode: "1.06.1.030",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "Sin garantía GES específica · Norma MINSAL de dispepsia y erradicación de H. pylori"
    },
    stem: "Hombre de 58 años consulta en el CESFAM para control médico tras haber sido diagnosticado hace 8 semanas de una úlcera gástrica de 18 mm en la incisura angularis mediante endoscopía digestiva alta (EDA). En dicho procedimiento, el test rápido de ureasa resultó positivo y las biopsias de los bordes informaron gastritis crónica con actividad inflamatoria, sin atipias ni células neoplásicas. El paciente completó satisfactoriamente la terapia erradicadora de primera línea con omeprazol 20 mg cada 12 h, amoxicilina 1 g cada 12 h y claritromicina 500 mg cada 12 h durante 14 días, y continuó posteriormente con omeprazol 20 mg al día hasta hoy. Actualmente se encuentra totalmente asintomático, sin dolor epigástrico ni baja de peso. ¿Cuál es la conducta médica obligatoria que debe indicarse a continuación?",
    options: [
      {
        id: "A",
        text: "Dar el alta médica definitiva al paciente al encontrarse completamente asintomático y suspender el inhibidor de la bomba de protones"
      },
      {
        id: "B",
        text: "Solicitar serología IgG en sangre para Helicobacter pylori para confirmar la curación bacteriana"
      },
      {
        id: "C",
        text: "Indicar omeprazol 20 mg al día de forma continua e indefinida sin necesidad de reevaluación endoscópica"
      },
      {
        id: "D",
        text: "Solicitar una endoscopía digestiva alta de control con toma de biopsias para certificar la cicatrización y descartar adenocarcinoma gástrico"
      },
      {
        id: "E",
        text: "Iniciar inmediatamente un esquema erradicador de segunda línea con bismuto, metronidazol y tetraciclina"
      }
    ],
    correcta: "D",
    explicacion: "Justificación de la alternativa correcta (D): En Chile, dada la elevada incidencia y mortalidad por cáncer gástrico, toda Úlcera Gástrica exige la realización obligatoria de una Endoscopía Digestiva Alta de control con toma de biopsias de los bordes y del lecho a las 6 a 8 semanas tras finalizar el tratamiento médico. Hasta un 5% de las lesiones ulceradas gástricas catalogadas inicialmente como benignas corresponden a carcinomas gástricos incipientes o avanzados ulcerados, los cuales pueden cicatrizar de manera parcial o transitoria y quedar asintomáticos con el uso de IBP. Por el contrario, la úlcera duodenal no presenta riesgo de malignización y no requiere endoscopía de control si el paciente se encuentra asintomático.\n\nAnálisis de distractores:\n- A es incorrecta: Dar de alta al paciente solo por estar asintomático sin control endoscópico de una úlcera gástrica es una falta grave que puede retrasar el diagnóstico oportuno de un cáncer gástrico curable.\n- B es incorrecta: La serología IgG para H. pylori permanece positiva durante meses o años después de una erradicación exitosa ('cicatriz serológica'); no distingue entre infección activa y curada, por lo que carece de utilidad para certificar erradicación.\n- C es incorrecta: Mantener IBP a permanencia sin control endoscópico enmascara los síntomas de una eventual neoplasia gástrica subyacente y genera falsos diagnósticos de benignidad.\n- E es incorrecta: La segunda línea de erradicación se reserva para fallas documentadas mediante test de aliento o antígeno en deposiciones (al menos 4 semanas después de suspender antibióticos y 2 semanas sin IBP); no tiene indicación empírica en un paciente asintomático."
  },

  // B2-Q08
  {
    id: "B2-Q08",
    specialtyKey: "gastroenterologia",
    specialtyName: "Gastroenterología",
    topicTitle: "Diarrea Aguda, Diarrea Crónica y Constipación",
    perfilCode: "1.06.2.005",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "Sin garantía GES específica · Norma MINSAL de manejo de la diarrea aguda (Planes A/B/C)"
    },
    stem: "Mujer de 64 años, sin antecedentes mórbidos relevantes, consulta en el CESFAM por un cambio persistente del hábito intestinal de 3 meses de evolución, manifestado por constipación progresiva (evacuación cada 4 a 5 días con heces acintadas y tenesmo) alternada con episodios intermitentes de deposiciones líquidas con mucosidad. Refiere además astenia progresiva y una baja involuntaria de 5 kg de peso en el mismo período. Al examen físico: vigil, enflaquecida, palidez mucocutánea moderada, PA 118/74 mmHg, FC 76 lpm. Abdomen blando, depresible, sin masas palpables ni dolor a la palpación. El tacto rectal demuestra ampolla rectal vacía sin lesiones palpables en los primeros 7 cm, observándose dedil con trazas de sangre microscópica. Exámenes de laboratorio en APS: Hemoglobina 9.4 g/dL, VCM 71 fL, HCM 23 pg (anemia microcítica e hipocrómica), Ferritina sérica 8 ng/mL (ferropenia severa). ¿Cuál es la conducta diagnóstica de primera línea que se debe indicar de inmediato?",
    options: [
      {
        id: "A",
        text: "Indicar suplementación con fibra soluble y polietilenglicol con control clínico en 6 meses"
      },
      {
        id: "B",
        text: "Solicitar coprocultivo corriente, parasitológico seriado y calprotectina fecal"
      },
      {
        id: "C",
        text: "Solicitar una colonoscopía total con sedación y toma de biopsias"
      },
      {
        id: "D",
        text: "Solicitar test inmunológico de sangre oculta en heces (TSOH) y repetir en 1 año si es positivo"
      },
      {
        id: "E",
        text: "Prescribir enemas evacuantes de fosfato y recomendar dieta rica en salvado de trigo"
      }
    ],
    correcta: "C",
    explicacion: "Justificación de la alternativa correcta (C): Toda alteración del hábito intestinal de reciente comienzo en un paciente mayor de 50 años (especialmente si es mayor de 60 años) que se acompañe de signos de alarma (baja de peso involuntaria, heces acintadas, anemia ferropénica documentada por ferritina muy baja) constituye una indicación urgente e indiscutible de Colonoscopía Total con biopsias. El objetivo fundamental es descartar un Cáncer Colorrectal (especialmente estenosante de colon izquierdo o sigmoides). En Chile y a nivel mundial, la anemia ferropénica en el adulto mayor sin sangrado evidente es cáncer gastrointestinal hasta que se demuestre lo contrario.\n\nAnálisis de distractores:\n- A y E son incorrectas: Indicar laxantes, enemas o fibra dietética e indicar control tardío ante un cuadro con múltiples banderas rojas constituye una negligencia diagnóstica inexcusable que permite la progresión del cáncer a etapas metastásicas o a una obstrucción intestinal completa.\n- B es incorrecta: El estudio microbiológico y la calprotectina se utilizan en diarrea aguda infecciosa o sospecha de EII en personas jóvenes; no descartan organicidad tumoral en un paciente de 64 años con anemia.\n- D es incorrecta: El test de sangre oculta en heces (TSOH) es un método de tamizaje en población asintomática. En una paciente sintomática con signos de alarma y anemia confirmada, realizar un test de screening en lugar de la colonoscopía directa es un grave error procedimental."
  },

  // B2-Q09
  {
    id: "B2-Q09",
    specialtyKey: "gastroenterologia",
    specialtyName: "Gastroenterología",
    topicTitle: "Hepatitis Aguda y Crónica",
    perfilCode: "1.06.1.019",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "GES: Hepatitis crónica por virus B y C (estudio y antivirales garantizados)"
    },
    stem: "Mujer de 54 años, con antecedente de una colecistectomía abierta y cesárea en 1990 con antecedente de transfusión sanguínea perioperatoria, consulta en el CESFAM tras realizarse un examen médico preventivo del adulto (EMPA) que detectó alteración asintomática de pruebas hepáticas: GOT 68 U/L, GPT 84 U/L (ambas levemente elevadas, VN < 35), con fosfatasas alcalinas, bilirrubina y protrombina normales. El médico del centro de salud solicitó anticuerpos contra el virus de la hepatitis C (anti-VHC), los cuales resultaron reactivos (positivos). La paciente se encuentra totalmente asintomática y el examen físico no demuestra estigmas de daño hepático crónico. ¿Cuál es la conducta médica confirmatoria y el paso a seguir de acuerdo con las Garantías Explícitas en Salud (GES) de Chile?",
    options: [
      {
        id: "A",
        text: "Iniciar tratamiento empírico inmediato con interferón alfa pegilado más ribavirina durante 48 semanas"
      },
      {
        id: "B",
        text: "Solicitar una biopsia hepática percutánea para confirmar la presencia del virus antes de solicitar pruebas moleculares"
      },
      {
        id: "C",
        text: "Tranquilizar a la paciente e informarle que el resultado solo demuestra inmunidad protectora duradera por infección resuelta"
      },
      {
        id: "D",
        text: "Indicar reposo relativo, dieta hepatoprotectora y repetir la serología anti-VHC en 6 meses"
      },
      {
        id: "E",
        text: "Solicitar la cuantificación de ARN del virus de la hepatitis C (VHC-ARN) por técnica de PCR para confirmar infección activa"
      }
    ],
    correcta: "E",
    explicacion: "Justificación de la alternativa correcta (E): La positividad de los anticuerpos anti-VHC demuestra exposición previa al virus de la hepatitis C en algún momento de la vida, pero cerca de un 15 a 25 % de las personas aclaran la infección espontáneamente sin desarrollar enfermedad crónica. Por lo tanto, bajo las guías clínicas ministeriales y la Garantía GES N° 75 ('Hepatitis Crónica por Virus C'), el examen confirmatorio indispensable para demostrar replicación viral activa e infección crónica es la Carga Viral de ARN-VHC por PCR. Si el ARN resulta detectable, la paciente tiene acceso garantizado por ley a la etapificación no invasiva (elastografía) y al tratamiento con Antivirales de Acción Directa (AAD pangenómicos como Sofosbuvir/Velpatasvir o Glecaprevir/Pibrentasvir), los cuales logran tasas de curación virológica superiores al 95 % con un excelente perfil de seguridad.\n\nAnálisis de distractores:\n- A es incorrecta: El interferón alfa pegilado y la ribavirina son terapias obsoletas y tóxicas (provocan anemia hemolítica, depresión severa, citopenias) que han sido reemplazadas por completo por los AAD orales libres de interferón. Además, jamás se inicia tratamiento antiviral sin certificar la replicación del virus por PCR.\n- B es incorrecta: La biopsia hepática ya no es un requisito para diagnosticar ni iniciar tratamiento en la hepatitis C; la evaluación de la fibrosis se realiza mediante métodos no invasivos (elastografía hepática o índices serológicos FIB-4/APRI).\n- C es incorrecta: Los anticuerpos anti-VHC no son neutralizantes ni confieren inmunidad protectora; el 75-85 % de los pacientes expuestos cronifica la infección con riesgo de cirrosis y hepatocarcinoma si no se tratan.\n- D es incorrecta: Repetir los anticuerpos en 6 meses es inútil porque permanecerán positivos de por vida independientemente de la presencia del virus; la dieta o el reposo no modifican la historia natural de la hepatitis C."
  },

  // =========================================================================
  // RESPIRATORIO (9 PREGUNTAS: B2-Q10 a B2-Q18)
  // =========================================================================

  // B2-Q10
  {
    id: "B2-Q10",
    specialtyKey: "neumologia",
    specialtyName: "Respiratorio",
    topicTitle: "Espirometría y Pruebas de Función Pulmonar",
    perfilCode: "1.05.4.001",
    legalLevel: {
      dx: "Específico",
      tx: "Inicial",
      seg: "Completo",
      ges: "Garantía Explícita en Salud (GES): Diagnóstico y Confirmación de Asma y EPOC en APS"
    },
    stem: "Hombre de 63 años, con antecedentes de tabaquismo activo con un índice de 38 paquetes-año, consulta en el CESFAM por disnea de esfuerzo progresiva que actualmente le impide caminar al mismo paso que personas de su misma edad en plano (mMRC 2), acompañada de tos crónica matinal y expectoración mucosa habitual de 2 años de evolución. Al examen físico: SatO2 93% al aire ambiente, tórax con leve aumento del diámetro anteroposterior, murmullo pulmonar disminuido bilateralmente con espiración prolongada, sin sibilancias ni crépitos. Se realiza espirometría basal y con prueba broncodilatadora (400 mcg de salbutamol inhalado), arrojando los siguientes resultados:\n- Basal: CVF 3.10 L (76% del valor predicho), VEF1 1.58 L (51% del valor predicho), relación VEF1/CVF 0.51.\n- Post-broncodilatador: CVF 3.22 L (79% del valor predicho), VEF1 1.68 L (54% del valor predicho; aumento de 100 mL y 6.3%), relación VEF1/CVF 0.52.\n¿Cuál es la interpretación funcional y el diagnóstico clínico correcto según las guías clínicas GOLD y GES?",
    options: [
      {
        id: "A",
        text: "Patrón obstructivo con limitación crónica al flujo aéreo no completamente reversible compatible con Enfermedad Pulmonar Obstructiva Crónica (EPOC), con severidad funcional moderada (GOLD 2)"
      },
      {
        id: "B",
        text: "Patrón obstructivo con respuesta broncodilatadora positiva diagnóstica de Asma Bronquial del adulto"
      },
      {
        id: "C",
        text: "Patrón restrictivo pulmonar puro con atrapamiento aéreo que exige suspender el estudio"
      },
      {
        id: "D",
        text: "Espirometría normal con respuesta fisiológica esperada para la edad"
      },
      {
        id: "E",
        text: "Patrón obstructivo muy severo (GOLD 4) con indicación inmediata de oxigenoterapia domiciliaria continua"
      }
    ],
    correcta: "A",
    explicacion: "Justificación de la alternativa correcta (A): El paciente presenta una limitación crónica y persistente al flujo aéreo definida estrictamente por una relación VEF1/CVF post-broncodilatador menor a 0.70 (en este caso 0.52). En un paciente mayor de 40 años con tabaquismo pesado y síntomas respiratorios crónicos, este hallazgo es confirmatorio de Enfermedad Pulmonar Obstructiva Crónica (EPOC) de acuerdo con las directrices internacionales GOLD y la guía clínica GES chilena. La respuesta broncodilatadora es negativa (aumento de 100 mL y 6.3%, inferior al umbral de 200 mL y 12%). La gravedad de la obstrucción se clasifica según el VEF1 post-BD: VEF1 ≥ 80% (GOLD 1 leve), 50% ≤ VEF1 < 80% (GOLD 2 moderada), 30% ≤ VEF1 < 50% (GOLD 3 grave) y VEF1 < 30% (GOLD 4 muy grave). Con un VEF1 post-BD de 54%, el paciente tiene limitación moderada al flujo aéreo (GOLD 2).\n\nAnálisis de distractores:\n- B es incorrecta: El test de broncodilatación es formalmente negativo (no alcanza el criterio de aumento ≥ 12% Y ≥ 200 mL respecto al basal); en el asma suele haber reversibilidad significativa y normalización del VEF1/CVF.\n- C es incorrecta: La restricción se caracteriza por VEF1/CVF normal (≥ 0.70) y CVF < 80%, y su confirmación definitiva requiere pletismografía demostrando Capacidad Pulmonar Total (CPT) < 80%; una relación de 0.52 define sin ambigüedades obstrucción.\n- D es incorrecta: Una relación VEF1/CVF de 0.52 jamás es fisiológica ni normal; traduce atrapamiento y resistencia bronquial patológica.\n- E es incorrecta: La categoría GOLD 4 (muy grave) exige un VEF1 post-BD < 30%. La oxigenoterapia domiciliaria continua se reserva para pacientes con hipoxemia severa en reposo (PaO2 ≤ 55 mmHg o SatO2 ≤ 88%), lo que no ocurre en este paciente (SatO2 93%)."
  },

  // B2-Q11
  {
    id: "B2-Q11",
    specialtyKey: "neumologia",
    specialtyName: "Respiratorio",
    topicTitle: "Neumonía Adquirida en la Comunidad (NAC): Diagnóstico y Severidad CURB-65",
    perfilCode: "1.05.1.027",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "Garantía Explícita en Salud (GES): Neumonía Adquirida en la Comunidad de Manejo Ambulatorio en Personas de 65 años y más"
    },
    stem: "Hombre de 56 años, chofer de camión, con antecedente de hipertensión arterial bien controlada, consulta en el servicio de urgencias por un cuadro de 3 días de fiebre alta hasta 39.2 °C con calofríos intensos, tos con expectoración mucopurulenta y dolor punzante en hemitórax derecho al toser y respirar hondo. Al examen físico: vigil, orientado en tiempo, espacio y persona (Glasgow 15), FR 32 rpm, FC 106 lpm, PA 118/72 mmHg, T° 38.7 °C, SatO2 93% al aire ambiente. A la auscultación se pesquisan estertores crepitantes inspiratorios y soplo tubario en el tercio inferior del hemitórax derecho. La radiografía de tórax confirma una condensación alveolar homogénea con broncograma aéreo en el lóbulo inferior derecho, sin derrame pleural. Exámenes de laboratorio: Leucocitos 15.600/mm³ (10% baciliformes), PCR 135 mg/L, Creatinina 1.3 mg/dL, Nitrógeno ureico en sangre (BUN) 24 mg/dL. ¿Cuál es el puntaje CURB-65 del paciente y la conducta clínica más adecuada según las guías de manejo?",
    options: [
      {
        id: "A",
        text: "CURB-65 de 1 punto; tratamiento ambulatorio con amoxicilina oral y citación a control clínico a las 48 horas"
      },
      {
        id: "B",
        text: "CURB-65 de 4 puntos; traslado inmediato a la Unidad de Cuidados Intensivos (UCI) para intubación orotraqueal de urgencia"
      },
      {
        id: "C",
        text: "CURB-65 de 2 puntos; hospitalización en sala de medicina general para tratamiento antibiótico parenteral y monitorización clínica"
      },
      {
        id: "D",
        text: "CURB-65 de 0 puntos; manejo sintomático con antipiréticos en domicilio y reposo laboral"
      },
      {
        id: "E",
        text: "CURB-65 de 3 puntos; indicación de hospitalización domiciliaria con visitas de enfermería cada 48 horas"
      }
    ],
    correcta: "C",
    explicacion: "Justificación de la alternativa correcta (C): Calculemos minuciosamente el puntaje de gravedad CURB-65:\n- C (Confusión mental): No (vigil, orientado, Glasgow 15) = 0 puntos.\n- U (Urea/BUN): BUN 24 mg/dL (> 19 mg/dL o Urea > 42 mg/dL) = +1 punto.\n- R (Frecuencia respiratoria): FR 32 rpm (≥ 30 rpm) = +1 punto.\n- B (Presión arterial): PA 118/72 mmHg (PAS ≥ 90 y PAD > 60) = 0 puntos.\n- 65 (Edad ≥ 65 años): 56 años (< 65) = 0 puntos.\nTotal CURB-65 = 2 puntos.\nSegún las directrices de la Sociedad Británica del Tórax (BTS) y la Sociedad Chilena de Enfermedades Respiratorias (SER), un CURB-65 de 2 puntos representa una gravedad moderada con una mortalidad cercana al 9 %, lo que define la necesidad indiscutible de hospitalización en sala de cuidados básicos/medicina interna para monitorización de parámetros vitales e inicio de antibioticoterapia parenteral (ej. Ceftriaxona 1 a 2 g EV al día).\n\nAnálisis de distractores:\n- A es incorrecta: El paciente tiene 2 puntos, no 1; manejarlo de forma ambulatoria aumenta significativamente el riesgo de falla ventilatoria y muerte.\n- B es incorrecta: El paciente no tiene 4 puntos ni cumple criterios de UCI (los criterios mayores de ATS/IDSA para UCI directa son ventilación mecánica invasiva o shock séptico refractario con vasopresores; este paciente no está en shock ni en falla respiratoria extrema).\n- D es incorrecta: El puntaje de 0 es matemáticamente erróneo; omitir antibióticos en una condensación alveolar bacteriana confirmada es una negligencia grave.\n- E es incorrecta: El puntaje no es 3, y la hospitalización domiciliaria sin monitorización médica directa no es segura para un paciente con taquipnea marcada y elevación de azoados."
  },

  // B2-Q12
  {
    id: "B2-Q12",
    specialtyKey: "neumologia",
    specialtyName: "Respiratorio",
    topicTitle: "Derrame Pleural: Diagnóstico Diferencial y Criterios de Light",
    perfilCode: "1.05.1.010",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "No GES"
    },
    stem: "Hombre de 31 años, sin antecedentes mórbidos, consulta por cuadro de 3 semanas de astenia, sudoración nocturna, febrícula vespertina intermitente (37.8 °C) y dolor torácico sordo en puntada de costado izquierdo. Al examen físico: vigil, enflaquecido, FC 84 lpm, PA 120/75 mmHg, FR 18 rpm, SatO2 96% al aire ambiente. El examen pulmonar revela matidez franca a la percusión con abolición de las vibraciones vocales y del murmullo pulmonar en la mitad inferior del hemitórax izquierdo. La radiografía de tórax confirma un derrame pleural izquierdo moderado que ocupa el tercio inferior. Se realiza toracocentesis diagnóstica ecoguiada, extrayéndose líquido amarillo cetrino límpido. Los resultados del análisis citoquímico y sérico simultáneo muestran:\n- Proteínas en líquido pleural: 5.2 g/dL (Proteínas séricas: 6.8 g/dL)\n- LDH en líquido pleural: 440 U/L (LDH sérica: 210 U/L; límite superior normal sérico: 200 U/L)\n- Glucosa en líquido pleural: 76 mg/dL\n- Recuento celular: 2.400 leucocitos/mm³, con 86% de linfocitos y 14% de polimorfonucleares\n- Adenosina deaminasa (ADA) en líquido pleural: 62 U/L (valor de referencia normal < 35 U/L)\n- Baciloscopía directa de líquido pleural (tinción de Ziehl-Neelsen): negativa\n¿Cuál es la clasificación del líquido pleural según los criterios de Light y la etiología más probable?",
    options: [
      {
        id: "A",
        text: "Trasudado; insuficiencia cardíaca congestiva descompensada"
      },
      {
        id: "B",
        text: "Exudado linfocítico; pleuresía tuberculosa"
      },
      {
        id: "C",
        text: "Exudado neutrofílico; empiema paraneumónico agudo"
      },
      {
        id: "D",
        text: "Trasudado; síndrome nefrótico con hipoalbuminemia"
      },
      {
        id: "E",
        text: "Exudado hemático; mesotelioma pleural asociado a asbestosis"
      }
    ],
    correcta: "B",
    explicacion: "Justificación de la alternativa correcta (B): Aplicando rigurosamente los Criterios de Light:\n1. Relación Proteínas LP / Suero: 5.2 / 6.8 = 0.76 (es > 0.5) -> Criterio cumplido.\n2. Relación LDH LP / Suero: 440 / 210 = 2.10 (es > 0.6) -> Criterio cumplido.\n3. LDH en LP (440 U/L) es superior a 2/3 del límite superior normal del suero (2/3 de 200 = 133 U/L) -> Criterio cumplido.\nBasta un solo criterio para definir un EXUDADO (aquí se cumplen los tres). Al analizar las características celulares y bioquímicas secundarias, se aprecia un exudado con marcada linfocitosis relativa (86 % de linfocitos) y una elevación notable de Adenosina Deaminasa (ADA = 62 U/L, corte diagnóstico > 35–40 U/L). En un paciente joven con clínica subaguda de baja de peso, sudoración nocturna y febrícula, este perfil tiene una sensibilidad y especificidad superiores al 90 % para Pleuresía Tuberculosa. Un punto clave de examen es que la baciloscopía directa del líquido pleural tiene una sensibilidad inferior al 10–20 %, por lo que su resultado negativo jamás descarta tuberculosis pleural.\n\nAnálisis de distractores:\n- A y D son incorrectas: Los trasudados presentan relación de proteínas ≤ 0.5 y LDH ≤ 0.6; la insuficiencia cardíaca y el síndrome nefrótico generan trasudados con baja celularidad y ADA normal.\n- C es incorrecta: El empiema agudo es turbio o purulento, con predominio masivo de polimorfonucleares (> 80–90 %), pH ácido (< 7.20), glucosa muy disminuida (< 40 mg/dL) y LDH > 1.000 U/L.\n- E es incorrecta: El mesotelioma es típico de adultos mayores con antecedente laboral de exposición a asbesto, el líquido suele ser serohemático y no se asocia a ADA elevado ni a presentación subaguda en un joven de 31 años."
  },

  // B2-Q13
  {
    id: "B2-Q13",
    specialtyKey: "neumologia",
    specialtyName: "Respiratorio",
    topicTitle: "Nódulo Pulmonar Solitario (NPS): Evaluación y Algoritmo Fleischner",
    perfilCode: "1.05.1.008, 1.05.5.005",
    legalLevel: {
      dx: "Específico",
      tx: "Inicial",
      seg: "Derivar",
      ges: "Garantía Explícita en Salud (GES): Sospecha de Cáncer Pulmonar"
    },
    stem: "Mujer de 62 años, exfumadora de 32 paquetes-año que suspendió el tabaco hace 3 años, asintomática respiratoria, se realiza una tomografía computarizada (TAC) de tórax como parte del estudio de una fractura costal traumática reciente. El informe tomográfico describe en el segmento apical del lóbulo superior derecho un nódulo pulmonar sólido de 15 mm de diámetro mayor, de contornos espiculados y con retracción de la pleura visceral adyacente, sin calcificaciones ni densidad grasa en su interior. No existen adenopatías hiliares ni mediastínicas. La paciente no cuenta con radiografías ni tomografías de tórax previas para comparar. ¿Cuál es la conducta médica más adecuada a seguir de acuerdo con las guías de la Sociedad Fleischner y los protocolos oncológicos vigentes?",
    options: [
      {
        id: "A",
        text: "Tranquilizar a la paciente y programar una radiografía de tórax simple de control en 12 meses"
      },
      {
        id: "B",
        text: "Indicar tratamiento antibiótico empírico con levofloxacino oral por 14 días y repetir la TAC de tórax al término"
      },
      {
        id: "C",
        text: "Solicitar espirometría basal con prueba broncodilatadora como único procedimiento confirmatorio"
      },
      {
        id: "D",
        text: "Derivar a equipo de cirugía de tórax / comité oncológico para etapificación con Tomografía por Emisión de Positrones combinada con TC (PET-CT con 18-FDG) y biopsia diagnóstica"
      },
      {
        id: "E",
        text: "Indicar broncoscopía rígida con lavado broncoalveolar para cultivo de bacterias comunes y micobacterias"
      }
    ],
    correcta: "D",
    explicacion: "Justificación de la alternativa correcta (D): La paciente presenta un Nódulo Pulmonar Solitario (NPS) sólido de 15 mm (> 8 mm) con múltiples factores de muy alto riesgo de malignidad: edad > 60 años, tabaquismo pesado (32 paquetes-año), localización en el lóbulo superior y características morfológicas sospechosas (bordes espiculados y retracción pleural), sin estudios previos que demuestren estabilidad. Según las directrices de la Sociedad Fleischner y las normas oncológicas chilenas (GES Sospecha Cáncer de Pulmón), los nódulos sólidos > 8 mm con riesgo intermedio a alto de malignidad deben ser derivados a especialista para estudio de actividad metabólica con PET-CT con 18-FDG (que evalúa el valor de captación estandarizada o SUV y etapifica el mediastino) seguido de biopsia guiada o resección quirúrgica diagnóstica por videotoracoscopía (VATS).\n\nAnálisis de distractores:\n- A es incorrecta: Una radiografía simple en 12 meses para una lesión espiculada de 15 mm en una fumadora es una conducta peligrosa que retrasaría el diagnóstico de un cáncer pulmonar en estadio temprano resecable.\n- B es incorrecta: Los ciclos de antibióticos empíricos se reservan para nódulos subsólidos o en vidrio esmerilado con sospecha infecciosa en no fumadores; en un nódulo sólido y espiculado no tienen justificación y exponen a toxicidad.\n- C es incorrecta: La espirometría evalúa la reserva pulmonar si se planifica una resección quirúrgica (lobectomía), pero no tiene capacidad diagnóstica sobre la naturaleza benigna o maligna de un nódulo.\n- E es incorrecta: La broncoscopía rígida con lavado para cultivo tiene un rendimiento prácticamente nulo en un nódulo periférico apical de 15 mm sin clínica infecciosa ni expectoración."
  },

  // B2-Q14
  {
    id: "B2-Q14",
    specialtyKey: "neumologia",
    specialtyName: "Respiratorio",
    topicTitle: "Insuficiencia Respiratoria Aguda: Tipo 1 (Hipoxémica) vs Tipo 2 (Hipercápnica)",
    perfilCode: "1.05.1.023, 1.05.2.008, 1.05.2.009",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "No GES"
    },
    stem: "Mujer de 36 años, con antecedente de miastenia gravis diagnosticada hace un año en tratamiento irregular con piridostigmina, es traída al Servicio de Urgencias por disnea de rápida progresión en las últimas 24 horas, disfagia a líquidos y debilidad muscular generalizada. Al examen físico: vigil pero intensamente angustiada, diaforética, con voz apagada e inaudible, respiración superficial con FR 32 rpm, FC 114 lpm, PA 138/86 mmHg, SatO2 87% al aire ambiente. A la inspección dinámica se evidencia tiraje supraclavicular y disociación toracoabdominal marcada (movimiento paradójico del abdomen hacia adentro durante la inspiración). Los campos pulmonares se auscultan limpios, sin ruidos agregados. La radiografía de tórax portátil es estrictamente normal, sin condensaciones ni atelectasias. Los gases en sangre arterial respirando aire ambiental a nivel del mar muestran: pH 7.24, PaO2 53 mmHg, PaCO2 66 mmHg, HCO3 27 mEq/L. El cálculo del gradiente alvéolo-arterial de oxígeno P(A-a)O2 resulta en 12 mmHg (rango normal para su edad < 15 mmHg). ¿Cuál es la interpretación fisiopatológica del cuadro y la conducta terapéutica prioritaria?",
    options: [
      {
        id: "A",
        text: "Insuficiencia respiratoria aguda hipoxémica (Tipo 1) por efecto shunt intrapulmonar; aporte de oxígeno al 100% mediante mascarilla con reservorio"
      },
      {
        id: "B",
        text: "Crisis de angustia con hiperventilación psicógena; administración de lorazepam intramuscular y observación ambulatoria"
      },
      {
        id: "C",
        text: "Tromboembolismo pulmonar masivo con falla del ventrículo derecho; administración inmediata de trombolíticos endovenosos"
      },
      {
        id: "D",
        text: "Neumonía aspirativa incipiente; inicio de antibióticos endovenosos y oxigenoterapia por cánula nasal a 2 L/min"
      },
      {
        id: "E",
        text: "Insuficiencia respiratoria aguda hipercápnica (Tipo 2) por hipoventilación alveolar y fatiga de la bomba ventilatoria; intubación orotraqueal y conexión a ventilación mecánica invasiva inmediata"
      }
    ],
    correcta: "E",
    explicacion: "Justificación de la alternativa correcta (E): La paciente presenta una Crisis Miasténica: falla neuromuscular de los músculos respiratorios e intercostales que genera una Insuficiencia Respiratoria Aguda Hipercápnica (Tipo 2) con acidosis respiratoria aguda (pH 7.24 y PaCO2 66 mmHg). El cálculo del Gradiente Alvéolo-Arterial de Oxígeno [PAO2 - PaO2 = 150 - (66 / 0.8) - 53 = 14.5 mmHg, rigurosamente normal para su edad] es el dato clave que confirma que el parénquima pulmonar y la microvasculatura están intactos; la hipoxemia es secundaria exclusivamente a la hipoventilación alveolar pura. El hallazgo al examen físico de respiración paradójica abdominal (el abdomen se hunde durante la inspiración) es el signo semiológico cardinal de fatiga y claudicación diafragmática bilateral inminente. En una crisis miasténica con disociación toracoabdominal, la ventilación no invasiva fracasa y la intubación endotraqueal precoz bajo secuencia rápida e ingreso a UCI es la medida prioritaria y salvadora antes de que ocurra paro respiratorio.\n\nAnálisis de distractores:\n- A es incorrecta: La IRA Tipo 1 se define por PaCO2 normal o baja y gradiente alvéolo-arterial marcadamente elevado (> 20–30 mmHg) por alteración V/Q o shunt; en este caso la PaCO2 está muy elevada y el gradiente es normal.\n- B es incorrecta: La hiperventilación psicógena produce alcalosis respiratoria aguda (pH > 7.45 y PaCO2 < 35 mmHg); administrar benzodiacepinas a una paciente con acidosis respiratoria e hipoventilación produce paro cardiorrespiratorio inmediato.\n- C es incorrecta: El TEP masivo cursa con hipocapnia por taquipnea refleja, acidosis metabólica por shock y gradiente alvéolo-arterial marcadamente ensanchado, incompatible con este caso.\n- D es incorrecta: La neumonía aspirativa compromete el espacio alveolar, cursa con infiltrados en la radiografía y eleva drásticamente el gradiente A-a; además, la cánula nasal a 2 L/min no resuelve la hipoventilación hipercápnica."
  },

  // B2-Q15
  {
    id: "B2-Q15",
    specialtyKey: "neumologia",
    specialtyName: "Respiratorio",
    topicTitle: "Crisis Asmática en el Adulto",
    perfilCode: "1.05.2.004",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Inicial",
      ges: "Garantía Explícita en Salud (GES): Manejo de Urgencia del Asma Bronquial Moderada o Grave"
    },
    stem: "Mujer de 24 años, con antecedentes de asma bronquial desde la infancia en tratamiento irregular con salbutamol inhalado, consulta en el SAPU por disnea de inicio rápido de 4 horas de evolución tras una infección respiratoria viral. Al ingresar al box de reanimación: la paciente está sentada inclinada hacia adelante, agitada, solo logra responder con palabras entrecortadas. Signos vitales: FC 124 lpm, FR 34 rpm, PA 132/84 mmHg, SatO2 89% al aire ambiente. Se observa tiraje supraclavicular e intercostal intenso. A la auscultación pulmonar se aprecian sibilancias inspiratorias y espiratorias bilaterales difusas audibles a distancia. Se mide el Flujo Espiratorio Máximo (PEF), obteniéndose 170 L/min (38% del predicho). ¿Cuál es la conducta médica inmediata más adecuada de acuerdo con las Guías Clínicas GES para el manejo de la crisis asmática severa?",
    options: [
      {
        id: "A",
        text: "Oxigenoterapia para saturar 93-95%, salbutamol 4 a 8 puff más bromuro de ipratropio 4 puff con aerocámara cada 20 minutos durante la primera hora, y corticoide sistémico oral o endovenoso precoz"
      },
      {
        id: "B",
        text: "Nebulización con salbutamol más infusión endovenosa continua de aminofilina, postergando los corticoides hasta tener radiografía de tórax"
      },
      {
        id: "C",
        text: "Administrar lorazepam sublingual para mitigar la ansiedad y nebulizar exclusivamente con solución salina fisiológica al 0.9%"
      },
      {
        id: "D",
        text: "Administrar sulfato de magnesio 2 g endovenoso de entrada como monoterapia y mantener en reposo sin inhaladores"
      },
      {
        id: "E",
        text: "Realizar intubación orotraqueal de urgencia inmediata sin administrar broncodilatadores inhalados"
      }
    ],
    correcta: "A",
    explicacion: "Justificación de la alternativa correcta (A): La paciente cumple criterios objetivos inequívocos de Crisis Asmática Severa (grave): incapacidad de completar frases (habla entrecortada), taquicardia > 120 lpm (124 lpm), taquipnea > 30 rpm (34 rpm), uso activo de musculatura accesoria, hipoxemia (SatO2 89%) y PEF < 50% del valor teórico (38%). Según la Guía Clínica GES de Asma del Adulto y las recomendaciones GINA, el esquema de tratamiento de primera línea durante la primera hora de atención en urgencias consiste en la tríada simultánea:\n1. Oxigenoterapia por cánula nasal o mascarilla para alcanzar una meta de SatO2 entre 93% y 95%.\n2. Broncodilatadores de acción corta en dosis plenas combinados: Salbutamol (SABA) 4 a 8 puff más Bromuro de Ipratropio (SAMA) 4 puff administrados con inhalador presurizado de dosis medida (MDI) y aerocámara con válvula espaciadora cada 20 minutos durante la primera hora (3 ciclos).\n3. Corticoides sistémicos administrados dentro de la primera hora (Prednisona 40 a 50 mg vía oral o Hidrocortisona 100 a 200 mg EV si no tolera vía oral) para revertir la inflamación y restablecer la respuesta de los receptores beta-2 adrenérgicos.\n\nAnálisis de distractores:\n- B es incorrecta: La aminofilina carece de beneficio adicional comprobado sobre los beta-2 agonistas, posee un estrecho margen terapéutico y alta toxicidad arrítmica y neurológica; además, la radiografía de tórax no es de rutina y no debe retrasar la administración de corticoides.\n- C es incorrecta: Los sedantes y ansiolíticos están formalmente contraindicados en las exacerbaciones asmáticas porque suprimen el centro respiratorio y precipitan falla respiratoria hipercápnica fatal.\n- D es incorrecta: El sulfato de magnesio endovenoso (2 g en infusión de 20 min) es una terapia de rescate de segunda línea para pacientes que permanecen graves o con PEF < 50% tras la primera hora de tratamiento broncodilatador pleno, nunca como monoterapia inicial.\n- E es incorrecta: La intubación orotraqueal de urgencia se reserva para pacientes con signos de paro inminente (tórax silente, coma, respiración agónica o PaCO2 normal o elevada con acidosis refractaria); en ausencia de estos criterios, se inicia el manejo médico de primera línea."
  },

  // B2-Q16
  {
    id: "B2-Q16",
    specialtyKey: "neumologia",
    specialtyName: "Respiratorio",
    topicTitle: "Tratamiento Antimicrobiano de la NAC y Criterios GES",
    perfilCode: "1.05.1.028",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "Garantía Explícita en Salud (GES): Neumonía en el Adulto de 65 años y más (Tratamiento en menos de 24 horas)"
    },
    stem: "Hombre de 38 años, obrero de la construcción, sin antecedentes mórbidos, no fumador y sin alergias a medicamentos, consulta en el CESFAM por cuadro de 48 horas de fiebre hasta 38.8 °C con calofríos, tos con expectoración herrumbrosa y dolor en puntada de costado derecho al inspirar. Al examen físico: vigil, orientado, PA 120/76 mmHg, FC 82 lpm, FR 18 rpm, SatO2 97% al aire ambiente. A la auscultación se constatan crépitos inspiratorios localizados y aumento de las vibraciones vocales en la base pulmonar derecha. La radiografía de tórax confirma una condensación alveolar homogénea con broncograma aéreo en el lóbulo inferior derecho, sin derrame. Creatinina y nitrógeno ureico son normales (CURB-65 = 0 puntos). ¿Cuál es la terapia antimicrobiana ambulatoria de primera elección recomendada por las guías clínicas ministeriales y de la Sociedad Chilena de Enfermedades Respiratorias?",
    options: [
      {
        id: "A",
        text: "Amoxicilina con ácido clavulánico 875/125 mg cada 12 horas por vía oral durante 14 días"
      },
      {
        id: "B",
        text: "Amoxicilina 1 g cada 8 horas por vía oral durante 5 a 7 días"
      },
      {
        id: "C",
        text: "Ciprofloxacino 500 mg cada 12 horas por vía oral durante 10 días"
      },
      {
        id: "D",
        text: "Ceftriaxona 1 g intramuscular al día durante 10 días"
      },
      {
        id: "E",
        text: "Levofloxacino 750 mg cada 24 horas por vía oral durante 14 días"
      }
    ],
    correcta: "B",
    explicacion: "Justificación de la alternativa correcta (B): En un paciente adulto joven (< 65 años) previamente sano, sin comorbilidades crónicas (diabetes, EPOC, cirrosis, insuficiencia renal), sin uso previo de antibióticos y con un puntaje de bajo riesgo (CURB-65 = 0 puntos), el agente etiológico predominante es Streptococcus pneumoniae (neumococo). En Chile, el neumococo mantiene una excelente sensibilidad a dosis altas de aminopenicilinas orales. Por ello, la norma técnica nacional (MINSAL y Sociedad Chilena de Enfermedades Respiratorias) establece como terapia antimicrobiana de primera elección la Amoxicilina en dosis de 1 g cada 8 horas por vía oral durante 5 a 7 días.\n\nAnálisis de distractores:\n- A es incorrecta: La asociación amoxicilina/ácido clavulánico es el esquema ambulatorio de elección en pacientes de 65 años y más (garantía GES) o en personas con comorbilidades crónicas donde aumenta la incidencia de bacilos gramnegativos o H. influenzae productor de betalactamasa. En un joven sano sin comorbilidades, el ácido clavulánico no agrega cobertura al neumococo y solo aumenta los costos y la tasa de diarrea.\n- C es incorrecta: El ciprofloxacino no posee actividad confiable contra Streptococcus pneumoniae y su uso en neumonía comunitaria es un grave error conceptual que conduce al fracaso terapéutico.\n- D es incorrecta: La ceftriaxona parenteral es innecesaria y constituye un sobretratamiento en un paciente joven de bajo riesgo con excelente tolerancia de la vía oral.\n- E es incorrecta: Las fluoroquinolonas respiratorias (levofloxacino, moxifloxacino) deben reservarse para casos de alergia anafiláctica severa a penicilinas o fallas de primera línea, para evitar la selección de cepas multirresistentes, infecciones por C. difficile y toxicidad tendínea o aórtica."
  },

  // B2-Q17
  {
    id: "B2-Q17",
    specialtyKey: "neumologia",
    specialtyName: "Respiratorio",
    topicTitle: "Derrame Paraneumónico y Empiema Pleural",
    perfilCode: "1.05.1.011, 1.05.1.012",
    legalLevel: {
      dx: "Específico",
      tx: "Completo",
      seg: "Completo",
      ges: "No GES"
    },
    stem: "Hombre de 52 años, previamente sano, ingresa hospitalizado en la sala de medicina interna con diagnóstico de neumonía adquirida en la comunidad en el lóbulo inferior derecho, iniciando tratamiento con ceftriaxona 2 g EV al día. Al segundo día de hospitalización, el paciente refiere leve dolor pleurítico persistente pero la fiebre ha disminuido a 37.4 °C. La radiografía de tórax de control muestra un derrame pleural derecho laminar que ocupa el fondo de saco costofrénico posterior. Se realiza una ecografía torácica que confirma una colección líquida anecoica libre, no loculada, de 250 mL. Se realiza una toracocentesis diagnóstica obteniendo líquido pleural amarillo cetrino transparente cuyo análisis arroja:\n- pH: 7.36\n- Glucosa en líquido pleural: 84 mg/dL (Glicemia plasmática simultánea: 110 mg/dL)\n- LDH en líquido pleural: 460 U/L (LDH sérica: 230 U/L)\n- Tinción de Gram directa del líquido pleural: no se observan bacterias\n- Recuento celular: 3.200 leucocitos/mm³ con 68% de neutrófilos\n¿Cuál es la conducta médica más adecuada respecto al manejo del espacio pleural?",
    options: [
      {
        id: "A",
        text: "Instalar de inmediato una pleurostomía cerrada con tubo de drenaje torácico conectado a trampa de agua"
      },
      {
        id: "B",
        text: "Indicar instilación intrapleural de fibrinolíticos combinados (t-PA más DNAsa) a través de un catéter fino"
      },
      {
        id: "C",
        text: "Continuar el tratamiento antibiótico sistémico endovenoso y vigilar la evolución clínica y radiológica, sin necesidad de instalar tubo de drenaje pleural"
      },
      {
        id: "D",
        text: "Derivar a cirugía de tórax para videotoracoscopía (VATS) precoz con debridamiento pleural"
      },
      {
        id: "E",
        text: "Realizar toracocentesis evacuadoras repetidas diarias hasta secar completamente el espacio pleural"
      }
    ],
    correcta: "C",
    explicacion: "Justificación de la alternativa correcta (C): El paciente presenta un Derrame Paraneumónico No Complicado (o simple). Los criterios bioquímicos y microbiológicos son categóricos: pH > 7.30 (7.36), glucosa > 60 mg/dL (84 mg/dL), LDH < 1.000 U/L (460 U/L), ausencia de bacterias en la tinción de Gram y aspecto macroscópico límpido no purulento. Esto indica una respuesta inflamatoria estéril en la pleura sin invasión bacteriana activa que genere acidosis local. Según las guías internacionales (BTS/ACCP) y nacionales, el derrame paraneumónico no complicado se resuelve favorablemente con la terapia antibiótica sistémica indicada para la neumonía y NO requiere la instalación de tubo de tórax (pleurostomía). Instalar un tubo de pleurostomía en un derrame no complicado no aporta beneficio y expone al paciente a dolor, infección bacteriana secundaria del espacio pleural e invasividad innecesaria.\n\nAnálisis de distractores:\n- A es incorrecta: La pleurostomía cerrada con tubo está indicada en el derrame paraneumónico complicado (pH < 7.20, glucosa < 40–60 mg/dL, LDH > 1.000 U/L) o ante un empiema franco (pus o bacterias visibles en Gram/cultivo), situaciones que no se cumplen en este paciente.\n- B es incorrecta: Los fibrinolíticos intrapleurales (t-PA + DNAsa) se reservan para empiemas tabicados multiloculados en fase fibrinopurulenta que no drenan tras la instalación de un tubo; en un derrame libre de 250 mL están totalmente fuera de indicación.\n- D es incorrecta: La videotoracoscopía (VATS) es un procedimiento quirúrgico indicado ante fracaso del drenaje y fibrinolíticos o colecciones organizadas tabicadas, no para un derrame seroso simple.\n- E es incorrecta: Las punciones evacuadoras repetidas diarias aumentan drásticamente el riesgo de neumotórax y de sobreinfección iatrogénica del espacio pleural, y son innecesarias porque el líquido se reabsorbe con los antibióticos."
  },

  // B2-Q18
  {
    id: "B2-Q18",
    specialtyKey: "neumologia",
    specialtyName: "Respiratorio",
    topicTitle: "Cáncer Pulmonar: Tipos Histológicos, Clínica y Manejo Inicial",
    perfilCode: "1.05.1.007, 1.05.1.025, 1.05.1.038",
    legalLevel: {
      dx: "Específico",
      tx: "Inicial",
      seg: "Derivar",
      ges: "Garantía Explícita en Salud (GES): Cáncer de Pulmón en Personas de 15 años y más"
    },
    stem: "Hombre de 64 años, fumador activo de 45 paquetes-año, consulta en el servicio de urgencias por disnea progresiva de 2 semanas de evolución, sensación de pesadez craneal y aumento de volumen en el rostro y cuello que empeora ostensiblemente al inclinarse hacia adelante. Al examen físico: PA 132/84 mmHg, FC 94 lpm, SatO2 93% ambiental. Destaca edema facial, periorbitario y del tercio superior del tórax en esclavina, cianosis y plétora facial, marcada ingurgitación de venas yugulares que no colapsan durante la inspiración profunda y desarrollo de una red venosa colateral tortuosa dilatada en la pared torácica anterior superior. La tomografía computarizada (TAC) de tórax con contraste endovenoso revela una masa perihiliar y mediastínica anterosuperior derecha de 6.5 cm que comprime e infiltra la vena cava superior en más del 80% de su luz, con adenopatías paratraqueales bilaterales prominentes. ¿Cuál es el diagnóstico clínico sindromático y la etiología tumoral primaria más frecuente responsable de este cuadro?",
    options: [
      {
        id: "A",
        text: "Insuficiencia cardíaca derecha descompensada; cardiopatía hipertensiva"
      },
      {
        id: "B",
        text: "Síndrome nefrótico grave con anasarca; nefropatía membranosa"
      },
      {
        id: "C",
        text: "Bocio endotorácico gigante hiperfuncionante; enfermedad de Graves"
      },
      {
        id: "D",
        text: "Síndrome de Vena Cava Superior; Carcinoma pulmonar broncogénico (especialmente carcinoma microcítico o epidermoide)"
      },
      {
        id: "E",
        text: "Trombosis venosa profunda iliofemoral con embolismo paradójico"
      }
    ],
    correcta: "D",
    explicacion: "Justificación de la alternativa correcta (D): La tétrada semiológica clásica compuesta por: 1) Edema en esclavina (edema facial, cervical y supraclavicular bilateral), 2) Plétora y cianosis facial que empeoran al inclinarse hacia adelante, 3) Ingurgitación yugular bilateral fija no pulsátil sin colapso inspiratorio, y 4) Circulación venosa colateral visible en la pared torácica anterior superior, configura de manera patognomónica un Síndrome de Vena Cava Superior (SVCS). En el 70 a 80 % de los casos en adultos, el SVCS es originado por una neoplasia maligna intratorácica, siendo el Cáncer Pulmonar Broncogénico (especialmente el carcinoma de células pequeñas o microcítico y el carcinoma epidermoide por su localización perihiliar central y compromiso ganglionar mediastínico) la causa más común por amplio margen. Constituye una urgencia oncológica (garantizada por GES Cáncer de Pulmón) que requiere confirmación histológica rápida, elevación de cabecera, corticoides endovenosos en altas dosis (dexametasona) y quimioterapia, radioterapia urgente o instalación de stent endovascular según el tipo histológico.\n\nAnálisis de distractores:\n- A es incorrecta: La insuficiencia cardíaca derecha cursa con edema gravitacional en extremidades inferiores, hepatomegalia congestiva, reflujo hepatoyugular e ingurgitación yugular pulsátil; no genera edema en esclavina ni circulación colateral torácica fija.\n- B es incorrecta: El síndrome nefrótico produce anasarca difusa con proteinuria masiva e hipoalbuminemia, afectando predominantemente tobillos y zonas dependientes, no una obstrucción venosa localizada en el territorio de la vena cava superior.\n- C es incorrecta: El bocio endotorácico puede provocar compresión mecánica mediastínica (signo de Pemberton), pero es una etiología mucho menos frecuente y benigna; la masa de 6.5 cm con infiltración vascular en un gran fumador es francamente tumoral.\n- E es incorrecta: La trombosis venosa profunda iliofemoral compromete el retorno venoso de los miembros inferiores y la vena cava inferior; no tiene relación anatómica con la circulación de la vena cava superior."
  }
];

const outputPath = path.join(__dirname, '..', 'data', 'temp_ensayo_batch_2.json');
fs.writeFileSync(outputPath, JSON.stringify(batch2Questions, null, 2), 'utf8');
console.log(`✓ Archivo generado exitosamente con ${batch2Questions.length} preguntas en: ${outputPath}`);
