/**
 * TOMO 18: PEDIATRÍA GENERAL & NEONATOLOGÍA · BLOQUE 2
 * Respiratorio Pediátrico & Urgencias (18.5 a 18.8)
 */

const { flowPediatria } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "ped-05",
    "classId": "ped-05",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Respiratorio Pediátrico & Urgencias",
    "topicLabel": "18.5",
    "title": "Bronquiolitis Aguda & Síndrome Bronquial Obstructivo (SBO): VRS, Score de Tal y Manejo Escalonado",
    "perfilCode": "2.01.1.021",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N° 19): Infección Respiratoria Aguda (IRA) baja de manejo ambulatorio en menores de 5 años.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#1) · EUNACOM Julio 2023 (Q#18) · EUNACOM Diciembre 2022 (Q#5)",
    "frecuencia": "Máxima rentabilidad · Patología respiratoria infantil más evaluada en el EUNACOM",
    "svg": null,
    "algoTitle": "Algoritmo de Evaluación con Score de Tal y Manejo Escalonado del SBO / Bronquiolitis en Urgencia",
    "diagramRows": [
      {
        "t": "Lactante con Dificultad Respiratoria y Sibilancias / Estertores",
        "s": "Pródromo catarral (coriza, tos, febrícula) seguido de taquipnea y tiraje",
        "type": "acc"
      },
      {
        "t": "Cálculo Inmediato del Score de Tal Modificado",
        "s": "Evalúa 4 parámetros: Frecuencia Respiratoria, Sibilancias, Cianosis, Retracción",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Clasificación de Severidad según Puntaje de Tal",
        "al": "Estratificación de Gravedad Score de Tal",
        "ll": "Tal ≤ 5 (Leve)",
        "left": {
          "t": "SBO Leve · Manejo Ambulatorio",
          "s": "Salbutamol MDI con aerocámara 2 puff c/4-6h · Kinesioterapia motora · Alarma",
          "type": "acc"
        },
        "rl": "Tal ≥ 6 (Moderado a Severo)",
        "right": {
          "t": "SBO Moderado o Severo · Hospitalización / Observación",
          "s": "Tal 6-8: Hospitalización abreviada (Salbutamol c/10 min x 1h) · Tal ≥ 9: Oxígeno + Hospitalizar",
          "type": "crit"
        }
      },
      {
        "t": "Hospitalización Abreviada: Salbutamol 2 puff c/10 min x 1 hora (3 ciclos)",
        "s": "Reevaluar al término de la hora: Si Tal ≤ 5 alta ambulatoria · Si Tal persiste 6-8: Corticoide oral + 2.ª hora · Si no responde o Tal ≥ 9: Ingreso hospitalario",
        "type": "warn"
      }
    ],
    "contexto": "El Síndrome Bronquial Obstructivo (SBO) del lactante y la bronquiolitis aguda por Virus Respiratorio Sincicial (VRS) representan la primera causa de consulta en salas de urgencia pediátrica y hospitalización durante la campaña de invierno en Chile. El médico debe dominar la aplicación estricta del Score de Tal, el protocolo de hospitalización abreviada en Sala IRA, el uso racional de broncodilatadores y corticoides, y las nuevas directrices de profilaxis universal con Nirsevimab.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología, Etiología y Diagnóstico Clínico",
        "paragraphs": [
          "La <strong>bronquiolitis aguda</strong> es el primer episodio de obstrucción de la vía aérea distal en un lactante menor de 2 años, precedido típicamente por 2-3 días de síntomas catarrales altos (rinorrea, congestión, tos seca y febrícula). La fisiopatología combina necrosis del epitelio bronquiolar, infiltrado peribronquiolar y abundante taponamiento mucoso.",
          "El agente etiológico principal es el <strong>Virus Respiratorio Sincicial (VRS)</strong> (responsable de >70% de los casos), seguido por Rinovirus, Metapneumovirus humano, Parainfluenza, Adenovirus (este último asociado a bronquiolitis obliterante necrosante grave) e Influenza.",
          "El diagnóstico es <strong>estrictamente clínico</strong>. La radiografía de tórax <strong>NO está indicada de rutina</strong> en cuadros leves a moderados típicos; se reserva ante sospecha de complicaciones (atelectasia masiva, neumotórax) o duda diagnóstica con neumonía consolidativa."
        ]
      },
      {
        "subhead": "2. Evaluación de Gravedad: Score de Tal Modificado",
        "paragraphs": [
          "En Chile, la estratificación obligatoria por guía clínica MINSAL se realiza mediante el <strong>Score de Tal modificado</strong> (0 a 12 puntos), evaluando cuatro variables (0 a 3 puntos cada una):",
          "• <strong>Frecuencia Respiratoria:</strong>",
          "  - < 6 meses: ≤ 40 (0 pts), 41-55 (1 pt), 56-70 (2 pts), > 70 (3 pts).",
          "  - ≥ 6 meses: ≤ 30 (0 pts), 31-45 (1 pt), 46-60 (2 pts), > 60 (3 pts).",
          "• <strong>Sibilancias:</strong> No hay (0 pts), Al final de la espiración con fonendoscopio (1 pt), En toda la espiración con fonendo (2 pts), Audibles a distancia o sin fonendo (3 pts). Si hay murmullo pulmonar abolido ('tórax silente') por obstrucción extrema, se asignan 3 puntos.",
          "• <strong>Cianosis:</strong> No (0 pts), Perioral con el llanto (1 pt), Perioral en reposo (2 pts), Generalizada en reposo (3 pts).",
          "• <strong>Retracción (Tiraje):</strong> No (0 pts), Subcostal leve (1 pt), Intercostal moderada (2 pts), Supraclavicular o aleteo nasal intenso (3 pts).",
          "<strong>Estratificación:</strong>",
          "• <strong>Leve:</strong> ≤ 5 puntos.",
          "• <strong>Moderado:</strong> 6 a 8 puntos.",
          "• <strong>Severo:</strong> 9 a 12 puntos."
        ]
      },
      {
        "subhead": "3. Manejo Escalonado y Protocolo de Hospitalización Abreviada (Sala IRA)",
        "paragraphs": [
          "• <strong>SBO Leve (Tal ≤ 5):</strong> Manejo ambulatorio. <strong>Salbutamol en aerosol presurizado (MDI) con aerocámara</strong> 2 puff cada 4 a 6 horas por 5 a 7 días. Medidas generales: posición semisentada, aseo nasal con suero fisiológico antes de comer y dormir, hidratación fraccionada, control de temperatura y educación estricta de signos de alarma.",
          "• <strong>SBO Moderado (Tal 6 a 8):</strong> Ingreso a <strong>Hospitalización Abreviada en Sala IRA / Urgencia</strong>:",
          "  - <strong>1.ª Hora:</strong> Salbutamol MDI 2 puff cada 10 minutos por 5 veces (ciclo de 1 hora) con aerocámara con válvula y máscara facial.",
          "  - Si al término de la 1.ª hora el Tal baja a ≤ 5: Alta ambulatoria con Salbutamol 2 puff cada 4 horas y control en 24 horas en CESFAM.",
          "  - Si persiste con Tal 6 a 8: Iniciar <strong>segunda hora</strong> de Salbutamol (2 puff cada 10 minutos) y administrar <strong>corticoide sistémico</strong>: <strong>Prednisona oral 1 a 2 mg/kg</strong> (o Betametasona/Metilprednisolona).",
          "  - Si al término de la 2.ª hora continúa con Tal 6 a 8: <strong>Hospitalizar</strong> para oxigenoterapia y manejo médico continuo.",
          "• <strong>SBO Severo (Tal 9 a 12):</strong> Hospitalización inmediata. Oxígeno suplementario para saturación ≥ 93%, corticoide sistémico parenteral, nebulización con salbutamol/adrenalina y considerar cánula nasal de alto flujo (CNAF) o ventilación mecánica en UCI.",
          "<em>Aclaración terapéutica en Bronquiolitis típica:</em> Las guías internacionales y chilenas destacan que en la bronquiolitis viral primaria pura los broncodilatadores y corticoides tienen beneficio marginal, siendo el pilar el soporte de oxígeno e hidratación. Sin embargo, en lactantes con SBO recurrente o sospecha de hiperreactividad bronquial, la prueba terapéutica con salbutamol inhalado está firmemente indicada."
        ]
      },
      {
        "subhead": "4. Coqueluche (Tos Convulsiva): Diagnóstico, Tratamiento y Prevención",
        "paragraphs": [
          "El <strong>coqueluche</strong> es causado por <em>Bordetella pertussis</em>, de transmisión por gotitas, y es una enfermedad de <strong>notificación obligatoria inmediata</strong>. Tiene tres fases: <em>catarral</em> (1 a 2 semanas, similar a un resfrío), <em>paroxística</em> (2 a 6 semanas: tos en «quintas», <strong>estridor inspiratorio («gallito»)</strong>, cianosis y vómitos post-tusivos) y <em>convaleciente</em>. En el <strong>lactante menor de 3 a 6 meses</strong> es frecuente que no haya «gallito» y que predominen las <strong>apneas y la cianosis</strong>; es el grupo con más complicaciones (neumonía, hipertensión pulmonar, convulsiones, encefalopatía) y mortalidad.",
          "<em>Diagnóstico:</em> sospecha clínica ante tos de más de 2 semanas con paroxismos. El hemograma muestra <strong>leucocitosis con linfocitosis</strong> marcada (> 20.000/mm³; cifras > 50.000 a 100.000 se asocian a mal pronóstico). La confirmación es por <strong>PCR de Bordetella pertussis en aspirado nasofaríngeo</strong> (de elección en las primeras 3 a 4 semanas) o cultivo; la radiografía puede mostrar infiltrado perihiliar con «corazón peludo».",
          "<em>Tratamiento:</em> <strong>macrólido</strong>, que acorta el período de contagio pero cambia poco la tos si se da tarde: azitromicina 10 mg/kg/día por 5 días (de elección en menores de 6 meses, evitando la eritromicina en menores de 1 mes por riesgo de estenosis hipertrófica del píloro), o claritromicina 15 mg/kg/día en dos dosis por 7 días; alternativa: cotrimoxazol en mayores de 2 meses. <strong>Hospitalizar</strong> a los menores de 3 a 6 meses, y a todo niño con apneas, cianosis, neumonía o convulsiones. Aislamiento de gotitas hasta completar 5 días de tratamiento.",
          "<em>Prevención:</em> vacuna hexavalente (2, 4 y 6 meses, refuerzo a los 18 meses), dTpa en 1.° y 8.° básico y <strong>dTpa a la embarazada desde las 28 semanas</strong>. A los contactos cercanos (especialmente si hay lactantes o embarazadas en el hogar) se les da <strong>quimioprofilaxis con el mismo macrólido</strong>."
        ]
      },
      {
        "subhead": "5. Gases en Sangre Arterial: Interpretación en el Niño con Dificultad Respiratoria",
        "paragraphs": [
          "Valores normales: <strong>pH 7,35 a 7,45; PaCO₂ 35 a 45 mmHg; PaO₂ 80 a 100 mmHg; HCO₃ 22 a 26 mEq/L; exceso de base ±2</strong>. Se interpreta en orden: pH (acidemia o alcalemia), componente primario (PaCO₂ o HCO₃) y compensación. Una muestra capilar arterializada es aceptable en el lactante; la arterial requiere punción radial con prueba de Allen, jeringa heparinizada sin burbujas y análisis dentro de 15 minutos.",
          "• <strong>Insuficiencia respiratoria tipo I (hipoxémica):</strong> PaO₂ < 60 mmHg (o PaO₂/FiO₂ < 300) con PaCO₂ normal o baja, típica de neumonía y bronquiolitis. • <strong>Tipo II (hipercápnica):</strong> PaCO₂ > 50 mmHg con acidosis respiratoria por fatiga muscular. En el niño con bronquiolitis, SBO grave o croup, una <strong>PaCO₂ «normal» o que sube en un paciente que estaba taquipneico es un signo de agotamiento</strong> y de falla ventilatoria inminente (pH < 7,30 o PaCO₂ > 55 a 60 mmHg: UCI y soporte ventilatorio).",
          "Se solicita en dificultad respiratoria grave, fatiga, alteración de conciencia, saturación < 90% con oxígeno o antes de decidir ventilación no invasiva o intubación. La saturometría no reemplaza al gas en la evaluación de la ventilación (no detecta retención de CO₂)."
        ]
      },
      {
        "subhead": "6. Estudio Etiológico Respiratorio: Inmunofluorescencia, PCR, Serología y Técnicas de Aislamiento",
        "paragraphs": [
          "<strong>Inmunofluorescencia directa (IFD) en aspirado nasofaríngeo:</strong> detecta antígeno de <strong>VRS, influenza A y B, adenovirus, parainfluenza y metapneumovirus</strong> en 2 a 4 horas. Tiene <strong>alta especificidad (> 95%) y sensibilidad moderada (70 a 90%)</strong>: un resultado positivo confirma la etiología viral, pero uno <strong>negativo no la descarta</strong>. La calidad de la muestra (aspirado con células ciliadas) condiciona el resultado. Se solicita en niños hospitalizados para ubicar a los pacientes en <strong>cohortes y aislamiento</strong> y para vigilancia epidemiológica; <strong>no se pide de rutina</strong> en la bronquiolitis ambulatoria, porque no cambia el manejo.",
          "• <strong>PCR multiplex (panel respiratorio):</strong> más sensible que la IFD, detecta coinfecciones y virus menos frecuentes, pero puede persistir positiva semanas después del cuadro. • <strong>Serología:</strong> la <strong>IgM</strong> indica infección reciente (Mycoplasma, Chlamydia trachomatis) y un aumento de IgG de 4 veces entre dos muestras separadas por 2 a 4 semanas confirma retrospectivamente; en menores de 6 meses la IgG es materna y no sirve. En el lactante expuesto a VIH se usa PCR, no anticuerpos.",
          "• <strong>Aislamiento bacteriano:</strong> hemocultivo, cultivo de líquido pleural y tinción de Gram; el esputo no es útil porque el niño pequeño no expectora. • <strong>Precauciones de aislamiento:</strong> contacto más gotitas para VRS e influenza; precauciones <strong>aéreas</strong> (habitación con presión negativa y mascarilla N95) para sarampión, varicela y tuberculosis pulmonar."
        ]
      },
      {
        "subhead": "7. Oxigenoterapia: Indicaciones, Dispositivos y Titulación",
        "paragraphs": [
          "<strong>Indicación:</strong> saturación < 93% al aire ambiente (meta 93 a 97%), cianosis, dificultad respiratoria grave, shock o paro. En neonatos prematuros se evita la hiperoxia (meta de 90 a 95%) por el riesgo de retinopatía y displasia broncopulmonar. Siempre se usa <strong>saturometría continua</strong> y se reevalúa a los 30 a 60 minutos.",
          "• <strong>Cánula nasal (bajo flujo):</strong> 0,25 a 2 L/min en lactantes y hasta 4 L/min en niños; FiO₂ 24 a 40%. • <strong>Mascarilla simple:</strong> 5 a 10 L/min (mínimo 5 para evitar reinhalación), FiO₂ 35 a 60%. • <strong>Mascarilla con reservorio:</strong> 10 a 15 L/min, FiO₂ 60 a 95%. • <strong>Campana cefálica:</strong> en recién nacidos y lactantes pequeños. • <strong>Cánula nasal de alto flujo (CNAF)</strong> humidificada y calentada (1 a 2 L/kg/min): indicada en bronquiolitis moderada a grave con hipoxemia o trabajo respiratorio persistente a pesar de oxígeno convencional. • CPAP y ventilación mecánica en falla respiratoria.",
          "<em>Técnica:</em> verificar la fuente y el flujómetro, humidificar si el flujo es alto, elegir el dispositivo de tamaño adecuado, fijarlo sin comprimir la piel, ajustar el flujo para alcanzar la meta de saturación, revisar las fosas nasales y registrar flujo, FiO₂ y saturación. El retiro es gradual cuando mantiene saturación > 93% de forma estable. Se corrige la técnica si hay sequedad nasal, epistaxis o distensión gástrica."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial del Estridor y Obstrucción Respiratoria en el Lactante",
      "headers": [
        "Entidad Clínica",
        "Frecuencia / Edad",
        "Clínica Cardinal",
        "Tratamiento de Elección"
      ],
      "rows": [
        [
          "Bronquiolitis / SBO",
          "< 2 años (pico 2-6 meses)",
          "Sibilancias espiratorias, estertores, polipnea",
          "Oxígeno, Salbutamol si responde, KNT"
        ],
        [
          "Laringitis Aguda (Croup)",
          "6 meses a 3 años",
          "Estridor inspiratorio, tos perruna, disfonía",
          "Dexametasona oral + Adrenalina racémica"
        ],
        [
          "Cuerpo Extraño",
          "1 a 3 años",
          "Inicio súbito, asfixia inicial, sibilancias unilaterales",
          "Broncoscopía rígida urgente"
        ],
        [
          "Traqueítis Bacteriana",
          "1 a 6 años",
          "Fiebre alta, aspecto tóxico, estridor bifásico",
          "Cefotaxima EV + Intubación en UCI"
        ],
        [
          "Laringomalacia",
          "Congénita (1-4 semanas)",
          "Estridor inspiratorio que cede en prono",
          "Observación / Maduración espontánea"
        ]
      ]
    },
    "severityTable": {
      "title": "Score de Tal Modificado para Evaluación de Obstrucción Bronquial en Menores de 3 Años",
      "headers": [
        "Puntaje",
        "Frecuencia Respiratoria (<6m / ≥6m)",
        "Sibilancias",
        "Cianosis",
        "Retracción"
      ],
      "rows": [
        [
          "0 puntos",
          "≤ 40 / ≤ 30 rpm",
          "Ausentes",
          "No",
          "Sin retracción"
        ],
        [
          "1 punto",
          "41 - 55 / 31 - 45 rpm",
          "Final de la espiración con fonendo",
          "Perioral al llorar",
          "Subcostal leve"
        ],
        [
          "2 puntos",
          "56 - 70 / 46 - 60 rpm",
          "Toda la espiración con fonendo",
          "Perioral en reposo",
          "Intercostal moderada"
        ],
        [
          "3 puntos",
          "> 70 / > 60 rpm",
          "Audibles sin fonendo / Tórax silente",
          "Generalizada en reposo",
          "Supraclavicular / Aleteo nasal"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Escalonamiento Terapéutico en SBO según Gravedad MINSAL",
      "headers": [
        "Severidad (Tal)",
        "Lugar de Atención",
        "Intervención Farmacológica",
        "Monitoreo y Destino"
      ],
      "rows": [
        [
          "Leve (Tal ≤ 5)",
          "Ambulatorio (CESFAM / Hogar)",
          "Salbutamol MDI 2 puff c/4-6h x 5-7 días",
          "Control en 48-72h si no mejora"
        ],
        [
          "Moderado (Tal 6-8)",
          "Sala IRA / Urgencia",
          "Hospitalización Abreviada: Salbutamol 2 puff c/10 min x 1h",
          "Si responde (Tal ≤ 5): Alta · Si persiste: Corticoide + 2.ª hora"
        ],
        [
          "Refractario / Persistente",
          "Hospitalización básica / media",
          "Oxígeno para SatO2 ≥ 93% + Corticoides EV/VO",
          "KNT respiratoria + Monitoreo continuo"
        ],
        [
          "Severo (Tal ≥ 9)",
          "Hospitalización / UTI Pediátrica",
          "Oxígeno de alto flujo (CNAF) + Corticoide sistémico",
          "Traslado monitorizado · Considerar intubación"
        ]
      ]
    },
    "vignette": "Lactante de 5 meses, previamente sano. Presenta cuadro de 3 días de coriza y tos, agregándose en las últimas 12 horas dificultad respiratoria y rechazo alimentario. Al examen físico en SAPU: T° 37.8°C axilar, FC 150 lpm, FR 62 rpm, SatO2 92% ambiental. Se constata tiraje intercostal y subcostal moderado, y a la auscultación pulmonar sibilancias espiratorias bilaterales audibles con fonendoscopio en toda la fase espiratoria. No presenta cianosis.",
    "explicacion": "Al aplicar el Score de Tal modificado para un lactante menor de 6 meses: FR 62 rpm = 2 puntos; Sibilancias en toda la espiración = 2 puntos; Cianosis ausente = 0 puntos; Retracción intercostal y subcostal moderada = 2 puntos. Puntaje total: 6 puntos, correspondiente a SBO Moderado. La conducta clínica protocolizada por MINSAL es el ingreso inmediato a Hospitalización Abreviada: administrar Salbutamol MDI 2 puff con aerocámara cada 10 minutos durante 1 hora (5 ciclos) y reevaluar clínicamente.",
    "keyPoints": [
      "El Score de Tal clasifica el SBO en: Leve (≤ 5), Moderado (6-8) y Severo (9-12).",
      "SBO Moderado (Tal 6-8) requiere Hospitalización Abreviada con Salbutamol 2 puff c/10 min por 1 hora.",
      "Si al término de la 1.ª hora persiste en Tal 6-8, se agrega Prednisona oral 1-2 mg/kg y se inicia 2.ª hora de Salbutamol.",
      "Falla de 2 horas de hospitalización abreviada o Tal inicial ≥ 9 es indicación de hospitalización formal.",
      "VRS es el agente etiológico principal; Nirsevimab se administra a recién nacidos como profilaxis pasiva universal.",
      "La radiografía de tórax NO se solicita de rutina en el SBO típico no complicado.",
      "El tórax silente (ausencia de murmullo por obstrucción extrema) se puntúa con 3 puntos en sibilancias (máxima gravedad)."
    ],
    "questions": [
      {
        "stem": "Un lactante de 4 meses es llevado al Servicio de Urgencia por dificultad respiratoria. Al examen: FR 64 rpm, tiraje intercostal moderado, sibilancias bilaterales audibles en toda la espiración con fonendoscopio, sin cianosis. ¿Cuál es el Score de Tal y la conducta inmediata correcta?",
        "options": [
          {
            "id": "A",
            "text": "Tal 4 puntos (leve); enviar a domicilio con Salbutamol 2 puff cada 6 horas"
          },
          {
            "id": "B",
            "text": "Tal 6 puntos (moderado); iniciar hospitalización abreviada con Salbutamol 2 puff cada 10 minutos por 1 hora"
          },
          {
            "id": "C",
            "text": "Tal 8 puntos (severo); hospitalizar directamente en UCI y conectar a ventilación mecánica"
          },
          {
            "id": "D",
            "text": "Tal 6 puntos (moderado); administrar nebulización con adrenalina racémica y dexametasona intramuscular"
          },
          {
            "id": "E",
            "text": "Tal 3 puntos (leve); indicar kinesioterapia respiratoria ambulatoria sin fármacos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El puntaje calculado es 6, no 4.\nB) Correcta. Para un lactante de 4 meses (<6m): FR 64 rpm = 2 puntos; Sibilancias en toda la espiración = 2 puntos; Retracción moderada = 2 puntos; Cianosis ausente = 0 puntos. Total = 6 puntos (SBO Moderado). La conducta normada es ingresar a hospitalización abreviada en Sala IRA con Salbutamol MDI con aerocámara 2 puff cada 10 minutos durante 1 hora.\nC) Incorrecta. Tal 6 no es severo ni requiere UCI de entrada.\nD) Incorrecta. La adrenalina racémica y dexametasona son el tratamiento de la laringitis aguda (croup), no del SBO.\nE) Incorrecta. El puntaje es 6.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.021"
      },
      {
        "stem": "Un lactante de 7 meses con SBO moderado (Tal 7) completó la primera hora de hospitalización abreviada con Salbutamol. Al reevaluar al término de la hora, el paciente presenta FR 52 rpm, sibilancias espiratorias moderadas y tiraje subcostal, persistiendo con un Score de Tal de 6 puntos. ¿Cuál es la conducta indicada según la guía clínica MINSAL?",
        "options": [
          {
            "id": "A",
            "text": "Alta ambulatoria con salbutamol cada 4 horas por 7 días"
          },
          {
            "id": "B",
            "text": "Administrar Prednisona oral 1 a 2 mg/kg e iniciar una segunda hora de Salbutamol cada 10 minutos"
          },
          {
            "id": "C",
            "text": "Intubación orotraqueal inmediata e ingreso a UCI pediátrica"
          },
          {
            "id": "D",
            "text": "Suspender Salbutamol y administrar Amoxicilina oral por 7 días"
          },
          {
            "id": "E",
            "text": "Solicitar tomografía computarizada de tórax urgente"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El alta solo se indica si el Score de Tal desciende a ≤ 5 puntos.\nB) Correcta. Según el protocolo de hospitalización abreviada MINSAL, si el lactante persiste con Tal entre 6 y 8 puntos al finalizar la primera hora, se administra una dosis de corticoide sistémico oral (Prednisona 1-2 mg/kg) y se procede a realizar una segunda hora de Salbutamol (2 puff cada 10 minutos por 5 veces). Si tras la segunda hora persiste en moderado, se hospitaliza.\nC) Incorrecta. No tiene criterios de falla respiratoria inminente ni Tal ≥ 9.\nD) Incorrecta. El SBO es una patología viral/obstructiva; los antibióticos no tienen ningún rol.\nE) Incorrecta. No está indicada.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.021"
      },
      {
        "stem": "¿Cuál es la intervención preventiva que ha demostrado mayor impacto poblacional en reducir las hospitalizaciones por bronquiolitis grave por Virus Respiratorio Sincicial (VRS) en recién nacidos en Chile desde 2024?",
        "options": [
          {
            "id": "A",
            "text": "Vacuna viva atenuada contra VRS a los 2 y 4 meses de vida"
          },
          {
            "id": "B",
            "text": "Anticuerpo monoclonal de vida media prolongada (Nirsevimab) administrado universalmente al recién nacido"
          },
          {
            "id": "C",
            "text": "Palivizumab mensual durante todo el primer año de vida a todos los niños de término"
          },
          {
            "id": "D",
            "text": "Quimioprofilaxis con Oseltamivir oral durante los meses de invierno"
          },
          {
            "id": "E",
            "text": "Nebulizaciones diarias profilácticas con solución salina hipertónica al 3%"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. No existe vacuna viva atenuada contra VRS en el calendario infantil.\nB) Correcta. Chile fue pionero en Latinoamérica en implementar en 2024 la inmunización pasiva universal con Nirsevimab (anticuerpo monoclonal recombinante anti-VRS de vida media prolongada) para todos los recién nacidos en maternidades y lactantes menores de 6 meses, logrando reducciones superiores al 80% en admisiones hospitalarias por bronquiolitis y neumonía por VRS.\nC) Incorrecta. Palivizumab requería dosis mensuales y solo se cubría en prematuros extremos de alto riesgo.\nD) Incorrecta. Oseltamivir es exclusivo para Influenza.\nE) Incorrecta. No tiene evidencia profiláctica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.021"
      },
      {
        "stem": "Un lactante de 2 meses consulta por dificultad respiratoria progresiva. Al examen: FR 74 rpm, aleteo nasal intenso, quejido audible y cianosis perioral en reposo. A la auscultación se constata marcado silencio auscultatorio bilateral (tórax silente), casi sin murmullo pulmonar audible. ¿Cuál es el significado clínico de este hallazgo?",
        "options": [
          {
            "id": "A",
            "text": "Mejoría clínica espontánea por desaparición de las sibilancias"
          },
          {
            "id": "B",
            "text": "Signo de máxima gravedad por obstrucción bronquial extrema con flujo aéreo casi nulo (asigna 3 puntos en sibilancias)"
          },
          {
            "id": "C",
            "text": "Presencia de enfisema subcutáneo benigno"
          },
          {
            "id": "D",
            "text": "Neumotórax a tensión derecho exclusivo"
          },
          {
            "id": "E",
            "text": "Falso negativo por llanto vigoroso del lactante"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La ausencia de sibilancias con taquipnea severa, cianosis y quejido no es mejoría, es agotamiento respiratorio extremo.\nB) Correcta. En el Score de Tal, cuando la obstrucción bronquiolar es crítica, el flujo espiratorio es tan bajo que no genera turbulencia acústica suficiente para producir sibilancias ('tórax silente'). Por convención clínica y en el score, esto se puntúa con 3 puntos en el ítem sibilancias, indicando riesgo inminente de paro respiratorio y necesidad de soporte ventilatorio avanzado inmediato.\nC) Incorrecta. El enfisema subcutáneo crepita al tacto.\nD) Incorrecta. El cuadro es bilateral difuso.\nE) Incorrecta. Es un signo de alarma mayor.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.021"
      }
    ]
  },
  {
    "id": "ped-06",
    "classId": "ped-06",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Respiratorio Pediátrico & Urgencias",
    "topicLabel": "18.6",
    "title": "Laringitis Aguda Obstructiva / Croup: Score de Taussig, Adrenalina Racémica y Dexametasona",
    "perfilCode": "2.01.2.002",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N° 19): Infección Respiratoria Aguda (IRA) baja y alta de manejo ambulatorio en menores de 5 años.",
    "reconstrucciones": "EUNACOM Diciembre 2023 (Q#22) · EUNACOM Julio 2022 (Q#56) · EUNACOM Diciembre 2020 (Q#9)",
    "frecuencia": "Muy Alta rentabilidad · Caso típico de urgencia nocturna con tríada tos perruna, estridor y disfonía",
    "svg": null,
    "algoTitle": "Algoritmo de Evaluación con Score de Taussig y Manejo Farmacológico Escalonado del Croup",
    "diagramRows": [
      {
        "t": "Niño de 6m a 3 años con Tríada de Laringitis Aguda",
        "s": "Disfonía (llanto ronco) + Tos perruna o traqueal + Estridor inspiratorio",
        "type": "acc"
      },
      {
        "t": "Estratificación de Severidad según Score de Taussig",
        "s": "Evalúa: Estridor, Retracción, Entrada de aire, Color, Conciencia",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Conducta según Grado de Obstrucción Laríngea",
        "al": "Escalonamiento Terapéutico en Laringitis",
        "ll": "Grado I - II (Leve a Moderada)",
        "left": {
          "t": "Dexametasona Oral Única (0.15 a 0.6 mg/kg)",
          "s": "Grado I: Dexametasona y alta · Grado II: Dexametasona + Observación / Adrenalina si empeora",
          "type": "acc"
        },
        "rl": "Grado III - IV (Severa a Falla)",
        "right": {
          "t": "Adrenalina Racémica Nebulizada + Dexametasona",
          "s": "Adrenalina 0.05 mL/kg/dosis (máx 0.5 mL) + O2 húmedo · Observación obligatoria ≥ 2 horas (efecto rebote)",
          "type": "crit"
        }
      },
      {
        "t": "Criterios de Hospitalización y Descarte de Traqueítis / Epiglotitis",
        "s": "Si requiere ≥ 2 nebulizaciones de adrenalina, persiste estridor en reposo o aspecto tóxico: Hospitalizar",
        "type": "warn"
      }
    ],
    "contexto": "La laringitis aguda subglótica (croup viral) es la causa más frecuente de obstrucción de la vía aérea superior en niños de 6 meses a 3 años, con pico de incidencia en otoño e invierno. El edema inflamatorio del área subglótica (cartílago cricoides rígido) produce un aumento crítico de la resistencia al flujo aéreo por la ley de Poiseuille. El médico general debe evaluar con precisión el Score de Taussig, prescribir dexametasona en TODOS los grados de gravedad y manejar el uso de adrenalina nebulizada considerando el efecto rebote.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología, Etiología y Clínica Cardinal",
        "paragraphs": [
          "El agente causal predominante es el <strong>Virus Parainfluenza tipo 1</strong> (65-75% de los casos), seguido por Parainfluenza tipo 2 y 3, VRS, Influenza A/B y Adenovirus.",
          "La región subglótica está rodeada por el anillo cricoides, el único cartílago completo de la laringe. Debido a que el radio de la vía aérea en el lactante es pequeño (alrededor de 4 mm), <strong>apenas 1 mm de edema de mucosa reduce el área transversal en un 75%</strong> y multiplica por 16 la resistencia de la vía aérea.",
          "La <strong>tríada clínica clásica</strong> se presenta típicamente de noche y de forma brusca:",
          "1) <strong>Disfonía</strong> (ronquera o llanto apagado).",
          "2) <strong>Tos perruna</strong> (tos seca, metálica o traqueal).",
          "3) <strong>Estridor inspiratorio</strong> (inicialmente con el llanto o agitación, y en casos severos en reposo absoluto)."
        ]
      },
      {
        "subhead": "2. Estratificación de Severidad: Clasificación de Taussig / Grados Clínicos",
        "paragraphs": [
          "En la práctica chilena se utilizan los <strong>Grados Clínicos de Laringitis</strong> (adaptados de Taussig):",
          "• <strong>Grado I (Leve):</strong> Disfonía, tos perruna, <em>estridor inspiratorio solo al agitarse o llorar</em>, sin tiraje en reposo.",
          "• <strong>Grado II (Moderada):</strong> Disfonía, tos perruna, <em>estridor inspiratorio continuo en reposo</em>, tiraje subcostal e intercostal leve a moderado.",
          "• <strong>Grado III (Grave):</strong> Estridor inspiratorio y espiratorio (bifásico) en reposo, tiraje severo (supraclavicular y aleteo), hipoventilación pulmonar, palidez, inquietud psicomotora o somnolencia.",
          "• <strong>Grado IV (Agotamiento / Falla Respiratoria Inminente):</strong> Estridor atenuado o ausente por hipoflujo, palidez terrosa, cianosis, bradipnea, compromiso de conciencia y paro inminente."
        ]
      },
      {
        "subhead": "3. Manejo Farmacológico Escalonado: Dexametasona y Adrenalina Racémica",
        "paragraphs": [
          "• <strong>Pilar 1: Corticoterapia (Dexametasona):</strong> Está indicada en <strong>TODOS los grados de laringitis (incluso Grado I)</strong>. Reduce el edema mucoso laríngeo, las reconsultas y las hospitalizaciones. Dosis: <strong>Dexametasona oral 0.15 a 0.6 mg/kg en dosis única</strong> (habitualmente 0.15-0.3 mg/kg en cuadros leves-moderados; máximo 10-16 mg). Tiene vida media biológica de 36 a 72 horas.",
          "• <strong>Pilar 2: Adrenalina Nebulizada:</strong> Reservada para <strong>Grado II moderado sintomático, Grado III y Grado IV</strong>. Actúa mediante estimulación alfa-1 adrenérgica causando vasoconstricción arteriolar capilar y disminución inmediata del edema en 10-30 minutos:",
          "  - <strong>Adrenalina corriente (1:1.000):</strong> <strong>0.5 mL/kg/dosis</strong> (máximo 5 mL) nebulizada con 4 L/min de oxígeno durante 10-15 minutos.",
          "  - <em>Regla de Oro del Efecto Rebote:</em> El efecto descongestionante de la adrenalina dura entre 90 y 120 minutos. Al agotarse, el edema puede reaparecer. Por ende, <strong>todo paciente que recibe adrenalina nebulizada DEBE permanecer en observación en urgencia por un mínimo estricto de 2 horas</strong> antes de evaluar el alta.",
          "• <strong>Banderas Rojas y Diagnóstico Diferencial Crítico:</strong>",
          "  - <strong>Epiglotitis Aguda:</strong> Inicio fulminante, fiebre alta, aspecto séptico, sialorrea profusa, disfagia, ausencia de tos perruna y posición de trípode. ¡Prohibido examinar la orofaringe con bajalenguas por riesgo de espasmo laríngeo reflejo fatal!",
          "  - <strong>Traqueítis Bacteriana:</strong> Croup que no responde a adrenalina, fiebre alta y secreciones purulentas abundantes."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial del Estridor Laríngeo Agudo",
      "headers": [
        "Patología",
        "Etiología Principal",
        "Fiebre / Toxicidad",
        "Signos Clínicos Distintivos",
        "Conducta Inmediata"
      ],
      "rows": [
        [
          "Laringitis Viral (Croup)",
          "Parainfluenza tipo 1",
          "Febrícula / Estado general conservado",
          "Tos perruna, disfonía, estridor nocturno",
          "Dexametasona VO ± Adrenalina nebulizada"
        ],
        [
          "Epiglotitis Aguda",
          "Haemophilus influenzae b / S. pyogenes",
          "Fiebre muy alta / Tóxico séptico",
          "Sialorrea, posición en trípode, sin tos",
          "Asegurar vía aérea en pabellón + Cefotaxima"
        ],
        [
          "Traqueítis Bacteriana",
          "Staphylococcus aureus",
          "Fiebre alta / Tóxico progresivo",
          "Croup refractario a adrenalina, pus traqueal",
          "Intubación orotraqueal + Cloxacilina/Cefotaxima"
        ],
        [
          "Cuerpo Extraño Laríngeo",
          "Aspiración mecánica",
          "Apirético / Súbito",
          "Crisis de asfixia al comer o jugar, afonía",
          "Maniobras de desobstrucción / Laringoscopía"
        ]
      ]
    },
    "severityTable": {
      "title": "Clasificación de Severidad y Criterios Clínicos en Laringitis Aguda (Taussig)",
      "headers": [
        "Grado Clínico",
        "Estridor Laríngeo",
        "Retracciones / Tiraje",
        "Murmullo Pulmonar",
        "Manejo Inicial"
      ],
      "rows": [
        [
          "Grado I (Leve)",
          "Solo al llorar o agitarse",
          "Ausente en reposo",
          "Normal",
          "Dexametasona 0.15 mg/kg VO · Alta"
        ],
        [
          "Grado II (Moderada)",
          "Presente en reposo",
          "Subcostal / Intercostal leve",
          "Normal o levemente disminuido",
          "Dexametasona VO + Adrenalina neb si disnea"
        ],
        [
          "Grado III (Grave)",
          "Bifásico continuo en reposo",
          "Universal intenso (supraclavicular)",
          "Marcadamente disminuido",
          "Adrenalina neb + Dexametasona + O2 · Observar"
        ],
        [
          "Grado IV (Falla)",
          "Atenuado o inaudible",
          "Agotamiento muscular",
          "Abolido / Tórax silente",
          "Intubación con tubo traqueal 0.5-1 Nº menor"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Esquema Terapéutico Farmacológico Estandarizado para Laringitis en Urgencias",
      "headers": [
        "Fármaco / Intervención",
        "Dosis y Vía de Administración",
        "Mecanismo y Efecto",
        "Consideraciones Especiales"
      ],
      "rows": [
        [
          "Dexametasona",
          "0.15 a 0.6 mg/kg vía oral dosis única",
          "Efecto antiinflamatorio glucocorticoide a las 2-4h",
          "Indicada en TODOS los grados de croup (incluso Grado I)"
        ],
        [
          "Adrenalina Corriente (1:1.000)",
          "0.5 mL/kg (máx 5 mL) nebulizada con O2 a 4 L/min",
          "Vasoconstricción alfa-1 rápida (inicio 10-15 min)",
          "Obliga a observación en box por ≥ 2 horas por efecto rebote"
        ],
        [
          "Oxígeno Húmedo",
          "Mascarilla multiflujo para SatO2 ≥ 93%",
          "Corrección de hipoxemia",
          "Administrar en brazos de la madre para evitar llanto"
        ],
        [
          "Corticoides Inhalados (Budesonida)",
          "2 mg nebulizados (alternativa si vómitos)",
          "Antiinflamatorio tópico local",
          "Segunda línea si no tolera vía oral"
        ]
      ]
    },
    "vignette": "Niño de 2 años es traído al Servicio de Urgencia a las 02:30 AM por presentar tos seca metálica ('de perro') que se inició bruscamente durante la noche. Al examen físico se encuentra despierto, afebril (T° 36.9°C), con llanto ronco y estridor inspiratorio audible claramente en reposo mientras examina al niño sobre la camilla. Presenta leve tiraje subcostal y frecuencia respiratoria de 34 rpm. Saturación de oxígeno ambiental: 96%.",
    "explicacion": "El paciente presenta la tríada clásica de Laringitis Aguda (Croup). La presencia de estridor inspiratorio audible en reposo con tiraje leve clasifica el cuadro como Grado II (Moderado). La conducta médica protocolizada es administrar Dexametasona oral (0.15 a 0.6 mg/kg dosis única). Si el paciente presenta aumento del trabajo respiratorio o disnea evidente, se asocia nebulización con adrenalina corriente (1:1.000, 0.5 mL/kg, máx 5 mL). Al utilizar adrenalina, es mandatorio mantener al niño en observación clínica estricta en el Servicio de Urgencia por al menos 2 horas para vigilar y descartar el efecto rebote.",
    "keyPoints": [
      "La tríada clínica del Croup es: Disfonía + Tos perruna + Estridor inspiratorio nocturno.",
      "El agente causal principal es el Virus Parainfluenza tipo 1.",
      "Grado I: Estridor solo al llorar; Grado II: Estridor continuo en reposo; Grado III: Estridor con tiraje severo; Grado IV: Agotamiento.",
      "La Dexametasona oral (0.15 a 0.6 mg/kg) está formalmente indicada en TODOS los grados de laringitis.",
      "La adrenalina nebulizada se indica en Grados II moderados-graves y Grado III.",
      "Todo paciente que recibe adrenalina nebulizada debe permanecer en observación un mínimo de 2 horas por efecto rebote.",
      "La presencia de sialorrea profusa, disfagia y ausencia de tos perruna sugiere Epiglotitis Aguda (¡No usar bajalenguas!)."
    ],
    "questions": [
      {
        "stem": "Un niño de 18 meses consulta en el Servicio de Urgencia por disfonía, tos perruna y estridor inspiratorio en reposo de 4 horas de evolución. Se cataloga como laringitis aguda grado II. Se administra dexametasona oral y una nebulización con adrenalina racémica, logrando una rápida mejoría sintomática con desaparición del estridor a los 20 minutos. ¿Cuál es la conducta médica correcta respecto al destino del paciente?",
        "options": [
          {
            "id": "A",
            "text": "Alta inmediata a domicilio con amoxicilina oral"
          },
          {
            "id": "B",
            "text": "Mantener en observación en el Servicio de Urgencia por un mínimo de 2 horas para descartar efecto rebote"
          },
          {
            "id": "C",
            "text": "Hospitalización inmediata en UCI pediátrica"
          },
          {
            "id": "D",
            "text": "Indicar nueva nebulización con adrenalina cada 30 minutos de forma reglada"
          },
          {
            "id": "E",
            "text": "Alta con indicación de frío ambiental e inhalador de salbutamol"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El alta inmediata tras adrenalina es peligrosa por el riesgo de reaparición del edema al cesar la vasoconstricción alfa-1.\nB) Correcta. La adrenalina nebulizada produce vasoconstricción mucosa rápida pero transitoria (duración de 90 a 120 minutos). Existe el riesgo demostrado de 'efecto rebote', en el cual el estridor y la disnea reaparecen con igual o mayor intensidad. Por norma de seguridad pediátrica, todo niño que recibe adrenalina nebulizada debe permanecer en observación en Urgencia por un mínimo de 2 horas antes de definir el alta ambulatoria.\nC) Incorrecta. Si responde favorablemente y no tiene otros factores de riesgo, no requiere UCI.\nD) Incorrecta. La adrenalina se usa según necesidad clínica, no de forma profiláctica reglada cada 30 minutos.\nE) Incorrecta. El salbutamol no actúa en la vía aérea superior subglótica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.002"
      },
      {
        "stem": "Un lactante de 14 meses presenta cuadro de inicio brusco de disfonía y tos perruna. Al examen físico en reposo no se ausculta estridor, pero al momento de llorar y agitarse durante la otoscopía se hace claramente audible un estridor inspiratorio. No presenta tiraje ni cianosis. ¿Cuál es el diagnóstico de severidad y el tratamiento de elección?",
        "options": [
          {
            "id": "A",
            "text": "Laringitis grado II; adrenalina nebulizada y hospitalización"
          },
          {
            "id": "B",
            "text": "Laringitis grado I; Dexametasona oral (0.15 mg/kg) en dosis única y manejo domiciliario"
          },
          {
            "id": "C",
            "text": "Laringitis grado I; manejo expectante exclusivo sin medicamentos"
          },
          {
            "id": "D",
            "text": "Epiglotitis aguda; intubación orotraqueal urgente"
          },
          {
            "id": "E",
            "text": "Bronquiolitis aguda; Salbutamol MDI con aerocámara"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Grado II implica estridor presente en reposo.\nB) Correcta. El estridor inspiratorio que se presenta únicamente con el llanto o agitación clasifica el cuadro como Laringitis Aguda Grado I (Leve). La evidencia científica sólida y las guías clínicas ministeriales demuestran que la administración de Dexametasona oral (0.15 a 0.6 mg/kg en dosis única) en laringitis grado I reduce significativamente la progresión a grados más severos, las consultas repetidas en urgencias y los requerimientos de hospitalización.\nC) Incorrecta. El manejo expectante sin corticoides ya no se recomienda, pues la dexametasona ha demostrado beneficio incluso en formas leves.\nD) Incorrecta. La clínica no corresponde a epiglotitis.\nE) Incorrecta. El cuadro asienta en laringe/subglotis, no en bronquiolos.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.002"
      },
      {
        "stem": "Un niño de 3 años es traído a Urgencias en mal estado general. Presenta fiebre de 39.8°C, aspecto tóxico, disfagia severa con imposibilidad para tragar saliva (sialorrea profusa), voz apagada en 'papa caliente' y adopta espontáneamente una postura sentado inclinado hacia adelante con el cuello en hiperextensión (posición de trípode). No tose. ¿Cuál es la sospecha diagnóstica y la principal contraindicación en el box de urgencias?",
        "options": [
          {
            "id": "A",
            "text": "Croup viral; contraindicada la adrenalina nebulizada"
          },
          {
            "id": "B",
            "text": "Epiglotitis aguda; está formalmente contraindicado examinar la orofaringe con bajalenguas"
          },
          {
            "id": "C",
            "text": "Laringomalacia congénita; contraindicada la sedación profunda"
          },
          {
            "id": "D",
            "text": "Absceso periamigdalino; contraindicada la punción diagnóstica"
          },
          {
            "id": "E",
            "text": "Cuerpo extraño esofágico; contraindicada la radiografía de tórax"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El cuadro no es croup (falta la tos perruna y hay toxicidad/sialorrea).\nB) Correcta. La combinación de fiebre alta, aspecto tóxico, sialorrea, ausencia de tos y posición de trípode es patognomónica de Epiglotitis Aguda (infección bacteriana grave). En el box de urgencia está formalmente CONTRAINDICADO examinar la orofaringe o introducir un bajalenguas, ya que el estímulo físico puede desencadenar un laringoespasmo reflejo total y paro respiratorio inmediato. Se debe mantener al niño en brazos de sus padres y trasladar a pabellón para asegurar la vía aérea bajo anestesia general.\nC) Incorrecta. La laringomalacia es una patología crónica congénita afebril.\nD) Incorrecta. El cuadro es de obstrucción laríngea supraglótica aguda.\nE) Incorrecta. La clínica es infecciosa fulminante.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.002"
      },
      {
        "stem": "¿Cuál es el principal agente etiológico responsable de la Laringitis Aguda Obstructiva en la edad pediátrica?",
        "options": [
          {
            "id": "A",
            "text": "Streptococcus pneumoniae"
          },
          {
            "id": "B",
            "text": "Virus Parainfluenza tipo 1"
          },
          {
            "id": "C",
            "text": "Haemophilus influenzae tipo b"
          },
          {
            "id": "D",
            "text": "Virus Herpes Simple tipo 1"
          },
          {
            "id": "E",
            "text": "Mycoplasma pneumoniae"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Es la principal causa de neumonía y otitis bacteriana, no de croup.\nB) Correcta. El Virus Parainfluenza (principalmente el tipo 1, y en menor medida los tipos 2 y 3) causa más del 70% de todos los episodios de laringitis aguda obstructiva (croup viral) en la infancia.\nC) Incorrecta. Causa epiglotitis bacteriana aguda.\nD) Incorrecta. Causa gingivoestomatitis herpética.\nE) Incorrecta. Causa neumonía atípica en escolares.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.002"
      }
    ]
  },
  {
    "id": "ped-07",
    "classId": "ped-07",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Respiratorio Pediátrico & Urgencias",
    "topicLabel": "18.7",
    "title": "Neumonía Adquirida en la Comunidad (NAC) Pediátrica: Diagnóstico, Amoxicilina vs Ampicilina y Criterios de Hospitalización",
    "perfilCode": "2.01.1.015",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N° 19): Infección Respiratoria Aguda baja de manejo ambulatorio en menores de 5 años.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#3) · EUNACOM Julio 2023 (Q#20) · EUNACOM Diciembre 2021 (Q#42)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico clínico con taquipnea según OMS, dosificación de amoxicilina a 80-90 mg/kg/día",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico Clínico, Criterios de Severidad y Tratamiento Antibiótico de la NAC Pediátrica",
    "diagramRows": [
      {
        "t": "Sospecha de NAC: Fiebre + Tos + Taquipnea según Edad (OMS)",
        "s": "<2m: ≥60 rpm · 2-11m: ≥50 rpm · 1-5 años: ≥40 rpm · >5 años: ≥30 rpm",
        "type": "acc"
      },
      {
        "t": "Evaluación de Criterios de Severidad y Riesgo de Hospitalización",
        "s": "Edad < 3 meses · SatO2 < 93% · Rechazo alimentario · Quejido o tiraje severo",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Decisión de Tratamiento y Nivel Asistencial",
        "al": "Selección de Ámbito Asistencial y Antibiótico",
        "ll": "Manejo Ambulatorio (Sin Criterios de Gravedad)",
        "left": {
          "t": "Amoxicilina Oral (80 a 90 mg/kg/día en 2 o 3 tomas)",
          "s": "Fármaco de 1.ª línea contra Streptococcus pneumoniae · Control obligatorio en 48 horas",
          "type": "acc"
        },
        "rl": "Criterios de Hospitalización Presentes",
        "right": {
          "t": "Hospitalización: Ampicilina EV (o Cefotaxima)",
          "s": "Ampicilina 150-200 mg/kg/día EV c/6h · Oxígeno para SatO2 ≥ 93% · Rx tórax",
          "type": "crit"
        }
      },
      {
        "t": "Sospecha de Gérmenes Atípicos en Escolares (> 5 años)",
        "s": "Clínica insidiosa, compromiso intersticial, mialgias: Macrólido (Azitromicina o Claritromicina)",
        "type": "warn"
      }
    ],
    "contexto": "La Neumonía Adquirida en la Comunidad (NAC) es una de las principales causas de morbimortalidad infantil a nivel mundial. En Chile, la vacunación antineumocócica conjugada ha modificado la epidemiología, pero Streptococcus pneumoniae sigue siendo el patógeno bacteriano clásico más relevante. La OMS define que la taquipnea es el signo individual más sensible y específico para neumonía en niños con tos y fiebre. El médico general debe dosificar correctamente la amoxicilina a dosis altas (80-90 mg/kg/día) para superar la resistencia intermedia de neumococo y reconocer los criterios de hospitalización inmediata.",
    "contentSections": [
      {
        "subhead": "1. Etiología según Grupos Etarios y Definición Operativa OMS",
        "paragraphs": [
          "• <strong>Recién Nacido (< 1 mes):</strong> Streptococcus agalactiae (grupo B), enterobacterias gramnegativas (E. coli, Klebsiella) y Listeria monocytogenes.",
          "• <strong>Lactantes de 1 a 3 meses:</strong> Virus respiratorios (VRS), Streptococcus pneumoniae, Chlamydia trachomatis (neumonía afebril del lactante con tos coqueluchoide y eosinofilia) y Bordetella pertussis.",
          "• <strong>Lactantes y Preescolares (3 meses a 5 años):</strong> Los <strong>virus respiratorios</strong> (VRS, Rinovirus, Metapneumovirus, Adenovirus) son los más frecuentes en general, pero <strong>Streptococcus pneumoniae (Neumococo)</strong> es la bacteria clásica más importante.",
          "• <strong>Escolares y Adolescentes (> 5 años):</strong> <strong>Mycoplasma pneumoniae</strong> y <strong>Chlamydia pneumoniae</strong> (gérmenes atípicos), seguidos por S. pneumoniae.",
          "<strong>Signo Clave OMS (Taquipnea en reposo):</strong>",
          "• < 2 meses: ≥ 60 respiraciones por minuto.",
          "• 2 a 11 meses: ≥ 50 respiraciones por minuto.",
          "• 1 a 4 años: ≥ 40 respiraciones por minuto.",
          "• ≥ 5 años: ≥ 30 respiraciones por minuto."
        ]
      },
      {
        "subhead": "2. Rol de la Radiografía de Tórax y Laboratorio",
        "paragraphs": [
          "• <strong>En APS:</strong> El diagnóstico de NAC en un niño previamente sano con clínica leve-moderada es <strong>clínico</strong>. La radiografía de tórax <strong>NO es imprescindible para iniciar tratamiento ambulatorio</strong> si los recursos son limitados.",
          "• <strong>Indicaciones formales de Rx de tórax:</strong> 1) Duda diagnóstica; 2) Criterios de hospitalización; 3) Sospecha de complicaciones (derrame pleural, empiema, neumatocele, neumotórax); 4) Falta de respuesta clínica tras 48 a 72 horas de tratamiento antibiótico adecuado.",
          "• <strong>Hallazgos radiológicos:</strong> Consolidación lobar con broncograma aéreo (típico de neumococo) vs infiltrado intersticial peribronquial difuso o hiperinsuflación (típico de virus o atípicos)."
        ]
      },
      {
        "subhead": "3. Tratamiento Antibiótico Estandarizado y Dosificación MINSAL",
        "paragraphs": [
          "• <strong>Tratamiento Ambulatorio de Primera Línea:</strong>",
          "  - <strong>Amoxicilina oral a dosis altas: 80 a 90 mg/kg/día</strong> dividido cada 12 o cada 8 horas por <strong>7 días</strong> (máximo 2 a 3 g/día). <em>¿Por qué dosis altas?</em> Para saturar las proteínas fijadoras de penicilina (PBP) de cepas de Streptococcus pneumoniae con resistencia intermedia en Chile.",
          "• <strong>Tratamiento Hospitalario de Primera Línea:</strong>",
          "  - <strong>Ampicilina EV a 150 a 200 mg/kg/día</strong> dividido cada 6 horas.",
          "  - En lactantes no vacunados, infección grave con sepsis o sospecha de resistencia: <strong>Cefotaxima EV (150-200 mg/kg/día)</strong> o Ceftriaxona EV (50-100 mg/kg/día).",
          "• <strong>Neumonía Atípica (> 5 años o sospecha de Mycoplasma):</strong>",
          "  - <strong>Azitromicina oral:</strong> 10 mg/kg/día el día 1, seguido de 5 mg/kg/día los días 2 a 5 (enfermedad autolimitada pero macrólido acorta la excreción). Alternativa: Claritromicina 15 mg/kg/día cada 12 horas por 7 a 10 días."
        ]
      },
      {
        "subhead": "4. Criterios Formales de Hospitalización en Neumonía Pediátrica",
        "paragraphs": [
          "Constituyen indicación absoluta de ingreso hospitalario inmediato:",
          "1) <strong>Edad menor de 3 meses</strong> (por riesgo elevado de sepsis bacteriana grave y apnea).",
          "2) <strong>Hipoxemia:</strong> Saturación de oxígeno < 93% al aire ambiente.",
          "3) <strong>Dificultad respiratoria severa:</strong> Tiraje supraclavicular/aleteo nasal, quejido respiratorio o taquipnea extrema.",
          "4) <strong>Rechazo alimentario o intolerancia oral:</strong> Imposibilidad de beber líquidos o recibir fármacos por vía oral.",
          "5) <strong>Presencia de complicaciones radiológicas:</strong> Derrame pleural paraneumónico, absceso pulmonar o neumotórax.",
          "6) <strong>Fracaso del tratamiento ambulatorio:</strong> Deterioro clínico o persistencia de fiebre tras 48 horas de amoxicilina.",
          "7) <strong>Factores de riesgo social:</strong> Ruralidad extrema, cuidadores no confiables o falta de red asistencial cercana."
        ]
      }
    ],
    "table": {
      "title": "Etiología y Antibioticoterapia Empírica de la Neumonía según Grupo Etario",
      "headers": [
        "Edad del Paciente",
        "Patógenos Bacterianos Principales",
        "Antibiótico de 1.ª Elección",
        "Vía y Dosis"
      ],
      "rows": [
        [
          "< 1 mes (Neonato)",
          "S. agalactiae, E. coli, Listeria",
          "Ampicilina + Cefotaxima (o Amika)",
          "EV hospitalizado"
        ],
        [
          "1 a 3 meses febril",
          "S. pneumoniae, S. agalactiae, VRS",
          "Ampicilina + Cefotaxima EV",
          "EV hospitalizado siempre"
        ],
        [
          "3 meses a 5 años",
          "S. pneumoniae (Neumococo)",
          "Amoxicilina oral",
          "Oral: 80 - 90 mg/kg/día c/8-12h x 7 días"
        ],
        [
          "Hospitalizado (>3m)",
          "S. pneumoniae sensible/intermedio",
          "Ampicilina EV",
          "EV: 150 - 200 mg/kg/día c/6h"
        ],
        [
          "> 5 años (Escolar)",
          "Mycoplasma pneumoniae / Chlamydia",
          "Azitromicina o Claritromicina",
          "Oral: Azitro 10 mg/kg d1, luego 5 mg/kg d2-5"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios de Hospitalización y Evaluación de Riesgo en Neumonía Infantil",
      "headers": [
        "Categoría de Riesgo",
        "Criterios Clínicos / Paraclínicos",
        "Conducta Médica Inmediata"
      ],
      "rows": [
        [
          "Riesgo Etario",
          "Edad < 3 meses cumplidos",
          "Hospitalización obligatoria en lactantes"
        ],
        [
          "Riesgo Ventilatorio",
          "SatO2 < 93% ambiental, quejido, aleteo, tiraje severo",
          "Oxigenoterapia inmediata + Hospitalización"
        ],
        [
          "Riesgo Hemodinámico / Hidratación",
          "Intolerancia oral, signos de deshidratación, shock",
          "Hidratación endovenosa + Hospitalización"
        ],
        [
          "Riesgo Radiológico",
          "Derrame pleural, empiema, neumatocele, atelectasia lobar",
          "Hospitalización + Toracocentesis si derrame significativo"
        ],
        [
          "Falla Terapéutica",
          "Fiebre persistente o empeoramiento a las 48h de amoxicilina",
          "Hospitalizar, Rx tórax, rotar a Ampicilina/Cefotaxima"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Dosificación y Posología Oficial de Antibióticos en NAC Pediátrica",
      "headers": [
        "Fármaco",
        "Dosis Diaria Recomendada",
        "Fraccionamiento",
        "Duración Tratamiento"
      ],
      "rows": [
        [
          "Amoxicilina Oral (1.ª línea)",
          "80 a 90 mg/kg/día",
          "Cada 8 o cada 12 horas",
          "7 días"
        ],
        [
          "Ampicilina Endovenosa",
          "150 a 200 mg/kg/día",
          "Cada 6 horas",
          "Hasta 48h afebril, completar oral a 7-10d"
        ],
        [
          "Cefotaxima Endovenosa",
          "150 a 200 mg/kg/día",
          "Cada 6 u 8 horas",
          "7 a 10 días (complicada o resistencia)"
        ],
        [
          "Azitromicina Oral",
          "10 mg/kg (día 1) + 5 mg/kg (días 2-5)",
          "Cada 24 horas",
          "5 días totales"
        ],
        [
          "Ceftriaxona EV/IM",
          "50 a 100 mg/kg/día",
          "Cada 24 horas",
          "Alternativa ambulatoria si vómito aislado"
        ]
      ]
    },
    "vignette": "Lactante de 10 meses previamente sano, con calendario de vacunas al día. Consulta en CESFAM por fiebre de hasta 39.2°C axilar de 48 horas de evolución, tos húmeda y decaimiento. Al examen físico: reactivo, afebril tras antipirético, FR 54 rpm, SatO2 96% al aire ambiente. A la auscultación pulmonar en base pulmonar derecha se perciben crépitos localizados y disminución del murmullo pulmonar. Tolera adecuadamente líquidos por vía oral y no presenta tiraje severo.",
    "explicacion": "El paciente presenta fiebre, tos y taquipnea (FR 54 rpm en un lactante de 10 meses supera el umbral OMS de ≥ 50 rpm), junto con semiología condensante focalizada (crépitos localizados), lo que configura el diagnóstico clínico de Neumonía Adquirida en la Comunidad (NAC). No presenta criterios de gravedad ni de hospitalización (SatO2 ≥ 93%, tolera líquidos, > 3 meses, sin tiraje severo). La conducta correcta es iniciar Amoxicilina oral a dosis altas de 80 a 90 mg/kg/día fraccionada cada 8 o 12 horas por 7 días, con control clínico presencial obligatorio a las 48 horas.",
    "keyPoints": [
      "La taquipnea en reposo es el signo cardinal más sensible de neumonía en niños con tos y fiebre según la OMS.",
      "Umbrales OMS de taquipnea: <2m: ≥60 rpm; 2-11m: ≥50 rpm; 1-4 años: ≥40 rpm; ≥5 años: ≥30 rpm.",
      "El antibiótico de 1.ª línea ambulatorio es la Amoxicilina oral a 80-90 mg/kg/día por 7 días.",
      "Dosis altas de amoxicilina son necesarias para vencer la resistencia intermedia de Streptococcus pneumoniae.",
      "En niños hospitalizados sin complicaciones, la primera línea es Ampicilina EV (150-200 mg/kg/día).",
      "Menores de 3 meses, SatO2 < 93% o intolerancia oral son criterios de hospitalización inmediata.",
      "En escolares (> 5 años) con sospecha de atípicos (Mycoplasma), el fármaco de elección es Azitromicina."
    ],
    "questions": [
      {
        "stem": "Un lactante de 8 meses consulta en el CESFAM por fiebre de 38.8°C y tos de 2 días. Al examen físico se constata FR de 54 rpm, SatO2 95% al aire ambiente, buen estado general y crépitos en la base pulmonar izquierda. Tolera bien la lactancia materna. ¿Cuál es el tratamiento de primera línea más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Azitromicina oral a 10 mg/kg/día por 3 días"
          },
          {
            "id": "B",
            "text": "Amoxicilina oral a 80-90 mg/kg/día dividida cada 8 o 12 horas por 7 días"
          },
          {
            "id": "C",
            "text": "Ceftriaxona intramuscular diaria por 7 días"
          },
          {
            "id": "D",
            "text": "Salbutamol inhalado exclusivo sin antibióticos"
          },
          {
            "id": "E",
            "text": "Amoxicilina con ácido clavulánico a 40 mg/kg/día"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Los macrólidos son de elección para gérmenes atípicos en niños mayores de 5 años, no para el neumococo típico del lactante.\nB) Correcta. En un lactante de 8 meses con NAC ambulatoria no complicada, el patógeno bacteriano más probable es Streptococcus pneumoniae. El tratamiento de primera línea según las guías nacionales del MINSAL y de la SOCHIPE es Amoxicilina oral a dosis altas (80-90 mg/kg/día) durante 7 días, permitiendo superar la resistencia de baja y moderada afinidad de neumococo.\nC) Incorrecta. La ceftriaxona parenteral no está indicada de primera línea ambulatoria en un paciente que tolera la vía oral.\nD) Incorrecta. Los crépitos localizados con fiebre alta y taquipnea corresponden a neumonía, no a bronquiolitis simple.\nE) Incorrecta. El ácido clavulánico no aporta contra Streptococcus pneumoniae (cuya resistencia es por alteración de PBP, no por betalactamasas) y aumenta los efectos adversos digestivos.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.015"
      },
      {
        "stem": "¿Cuál de los siguientes pacientes con neumonía adquirida en la comunidad presenta un CRITERIO ABSOLUTO DE HOSPITALIZACIÓN?",
        "options": [
          {
            "id": "A",
            "text": "Lactante de 14 meses con fiebre de 38.5°C y SatO2 de 96% que toma mamadera normalmente"
          },
          {
            "id": "B",
            "text": "Lactante de 2 meses de vida con fiebre de 38.2°C y taquipnea de 64 rpm"
          },
          {
            "id": "C",
            "text": "Niño de 4 años con tos y crépitos basales derechos con SatO2 de 95%"
          },
          {
            "id": "D",
            "text": "Niña de 6 años con infiltrado intersticial bilateral que tolera azitromicina oral"
          },
          {
            "id": "E",
            "text": "Lactante de 9 meses con temperatura de 39°C que cede con paracetamol y tiene SatO2 de 97%"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. No tiene criterios de hospitalización (satura bien, come bien, > 3 meses).\nB) Correcta. La edad menor de 3 meses cumplidos (< 90 días) constituye un criterio formal de hospitalización obligatoria en cualquier niño con neumonía clínica, debido al alto riesgo de bacteriemia oculta, progresión fulminante, apnea y sepsis bacteriana.\nC) Incorrecta. Puede tratarse en forma ambulatoria con amoxicilina.\nD) Incorrecta. Neumonía atípica ambulatoria.\nE) Incorrecta. La fiebre alta que responde a antipiréticos sin hipoxemia no obliga a hospitalizar.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.015"
      },
      {
        "stem": "Un niño de 7 años consulta por tos seca persistente de 10 días de evolución, febrícula intermitente (37.8°C), cefalea y mialgias difusas. Al examen: buen estado general, escasos crépitos y sibilancias bilaterales difusas. La radiografía de tórax evidencia un patrón intersticial reticulonodular bilateral bilateral perihiliar disociado de su buen estado clínico general. ¿Cuál es el tratamiento antibiótico empírico de elección?",
        "options": [
          {
            "id": "A",
            "text": "Amoxicilina oral a 80 mg/kg/día"
          },
          {
            "id": "B",
            "text": "Azitromicina oral a 10 mg/kg el día 1, luego 5 mg/kg/día los días 2 a 5"
          },
          {
            "id": "C",
            "text": "Ampicilina endovenosa a 150 mg/kg/día"
          },
          {
            "id": "D",
            "text": "Cloxacilina oral a 100 mg/kg/día"
          },
          {
            "id": "E",
            "text": "Gentamicina intramuscular"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La amoxicilina no tiene actividad contra Mycoplasma pneumoniae, ya que este microorganismo carece de pared celular de peptidoglicano.\nB) Correcta. En escolares (> 5 años), el cuadro clínico de curso insidioso, tos seca prolongada, síntomas extrapulmonares (cefalea, mialgias) e infiltrado intersticial en la radiografía con disociación clínico-radiológica orienta a Neumonía Atípica causada por Mycoplasma pneumoniae. El tratamiento de elección son los macrólidos (Azitromicina o Claritromicina).\nC) Incorrecta. No cubre atípicos.\nD) Incorrecta. Indicada para estafilococo.\nE) Incorrecta. No cubre patógenos atípicos intracelulares.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.015"
      },
      {
        "stem": "Un lactante de 11 meses con diagnóstico de neumonía en tratamiento con amoxicilina oral a dosis plenas desde hace 48 horas persiste con fiebre de 39°C y aumento del trabajo respiratorio. En la reevaluación se constata matidez y abolición del murmullo pulmonar en la base derecha. La radiografía de tórax confirma un derrame pleural paraneumónico moderado derecho. ¿Cuál es la conducta inmediata?",
        "options": [
          {
            "id": "A",
            "text": "Mantener amoxicilina oral por 48 horas más y dar el alta"
          },
          {
            "id": "B",
            "text": "Hospitalizar de inmediato, indicar ecografía pleural / punción pleural diagnóstica y cambiar antibiótico a vía endovenosa"
          },
          {
            "id": "C",
            "text": "Indicar kinesioterapia respiratoria vigorosa y antipiréticos ambulatorios"
          },
          {
            "id": "D",
            "text": "Nebulizar con salbutamol cada 4 horas y enviar a control en 7 días"
          },
          {
            "id": "E",
            "text": "Solicitar hemograma y diferir la hospitalización si los leucocitos son normales"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La persistencia de fiebre a las 48h con derrame pleural es una falla de tratamiento y complicación que contraindica el manejo ambulatorio.\nB) Correcta. El derrame pleural paraneumónico es una complicación mayor de la neumonía bacteriana (típicamente neumocócica o estafilocócica). Requiere hospitalización urgente, estudio ecográfico pleural para evaluar tabiques, toracocentesis diagnóstica (para citoquímico, Gram y cultivo de líquido pleural) y cambio a antibioticoterapia endovenosa (Cefotaxima EV o Ampicilina/Sulbactam).\nC) Incorrecta. La KNT motora está contraindicada en derrames agudos no drenados.\nD) Incorrecta. Inadecuado.\nE) Incorrecta. La conducta no se difiere ante un derrame complicado.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.015"
      }
    ]
  },
  {
    "id": "ped-08",
    "classId": "ped-08",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Respiratorio Pediátrico & Urgencias",
    "topicLabel": "18.8",
    "title": "Cuerpo Extraño en Vía Aérea: Maniobras de Desobstrucción según Edad & Broncoscopía",
    "perfilCode": "2.01.2.003",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Urgencia médica vital con riesgo inminente de asfixia y paro cardiorrespiratorio.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#8) · EUNACOM Julio 2022 (Q#105)",
    "frecuencia": "Alta rentabilidad · Pregunta clásica de maniobras de atragantamiento en menores de 1 año vs niños mayores",
    "svg": null,
    "algoTitle": "Algoritmo de Soporte Vital Básico en Obstrucción de Vía Aérea por Cuerpo Extraño (OVACE)",
    "diagramRows": [
      {
        "t": "Atragantamiento Agudo / Asfixia Presenciada",
        "s": "Sospecha inmediata ante tos violenta súbita, estridor o afonía jugando o comiendo",
        "type": "crit"
      },
      {
        "t": "Estratificación de la Eficacia de la Tos",
        "s": "¿Tos efectiva y vigorosa? -> Estimular a seguir tosiendo sin interferir",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Tos Inefectiva / Imposibilidad de Respirar o Llorar (OVACE Total)",
        "al": "Maniobras de Desobstrucción según Edad",
        "ll": "Lactante Menor (< 1 año)",
        "left": {
          "t": "5 Golpes Interescapulares + 5 Compresiones Torácicas",
          "s": "Lactante boca abajo sobre antebrazo apoyado en muslo · ¡Prohibido Heimlich!",
          "type": "acc"
        },
        "rl": "Niño Mayor (> 1 año)",
        "right": {
          "t": "Maniobra de Heimlich (Compresiones Abdominales)",
          "s": "Abrazo por detrás con puño sobre ombligo con fuerza hacia adentro y arriba",
          "type": "crit"
        }
      },
      {
        "t": "Si Paciente Pierde el Conocimiento",
        "s": "Iniciar RCP pediátrica (30:2 o 15:2) · Mirar vía aérea solo antes de ventilar · Si cuerpo visible retirarlo con dedo en gancho (¡Nunca a ciegas!)",
        "type": "warn"
      }
    ],
    "contexto": "La aspiración de cuerpo extraño en la vía aérea es una causa prevenible de asfixia y muerte accidental en niños pequeños (pico de incidencia entre 1 y 3 años, coincidiendo con la exploración oral, falta de molares y descoordinación deglutoria). El médico general debe actuar en segundos aplicando las maniobras de desobstrucción estandarizadas por la AHA/AAP (diferenciando lactantes menores de 1 año de niños mayores) y coordinar la extracción definitiva mediante broncoscopía rígida.",
    "contentSections": [
      {
        "subhead": "1. Epidemiología y Objetos de Alto Riesgo",
        "paragraphs": [
          "El 80% de los accidentes ocurre en menores de 3 años. Los cuerpos extraños más frecuentes son los <strong>alimentos orgánicos</strong> (frutos secos como maní, nueces, semillas de uva, uvas enteras, trozos de salchicha, palomitas de maíz) y <strong>juguetes pequeños</strong> (piezas plásticas, canicas, pilas de botón).",
          "La localización más frecuente es el <strong>árbol bronquial derecho</strong> (bronquio principal derecho más ancho, vertical y en continuidad directa con la tráquea).",
          "El cuadro presenta tres fases: 1) Crisis asfíctica inicial (tos brusca, cianosis); 2) Fase asintomática de latencia (el objeto se aloja distalmente); 3) Fase de complicaciones tardías (neumonía recurrente en el mismo lóbulo, atelectasia persistente, absceso pulmonar o bronquiectasias)."
        ]
      },
      {
        "subhead": "2. Algoritmo de Soporte Vital: OVACE en Lactantes vs Niños Mayores",
        "paragraphs": [
          "• <strong>Si el niño tose con fuerza y llora (Obstrucción Parcial):</strong> <strong>NO intervenir</strong>. Estimularlo a toser de forma continua. Jamás dar golpes en la espalda mientras tose espontáneamente, pues podría movilizar el objeto y causar obstrucción completa.",
          "• <strong>Si la tos es inefectiva, no puede emitir sonidos ni respirar (Obstrucción Completa Consciente):</strong>",
          "  - <strong>En el Lactante (< 1 año):</strong>",
          "    1) Colocar al lactante en decúbito prono apoyado a lo largo del antebrazo del rescatador, sujetando firmemente la mandíbula, con la cabeza más baja que el tórax.",
          "    2) Administrar <strong>5 golpes firmes en la espalda con el talón de la mano entre las escápulas</strong> (golpes interescapulares).",
          "    3) Girar al lactante en bloque hacia decúbito supino sobre el otro antebrazo y realizar <strong>5 compresiones torácicas</strong> con dos dedos sobre el tercio inferior del esternón (idéntico a masaje de RCP).",
          "    4) Repetir la secuencia 5 golpes + 5 compresiones hasta que el objeto sea expulsado o pierda la conciencia.",
          "    5) <strong>¡LA MANIOBRA DE HEIMLICH ESTÁ PROHIBIDA EN MENORES DE 1 AÑO!</strong> Debido al alto riesgo de laceración hepática o esplénica masiva.",
          "  - <strong>En el Niño Mayor de 1 año:</strong> Realizar la <strong>Maniobra de Heimlich</strong> (compresiones subdiafragmáticas hacia adentro y arriba) con el rescatador situado por detrás del paciente.",
          "• <strong>Si el paciente cae inconsciente:</strong> Iniciar de inmediato <strong>Reanimación Cardiopulmonar (RCP) básica</strong> (abrir vía aérea, ventilar y masajear). <em>Regla de Oro:</em> <strong>NUNCA realizar barrido a ciegas con el dedo</strong> en la orofaringe; solo se extrae el objeto si está directamente visible en la boca."
        ]
      },
      {
        "subhead": "3. Diagnóstico Subagudo y Broncoscopía",
        "paragraphs": [
          "Ante sospecha clínica de cuerpo extraño bronquial de evolución subaguda (antecedente de atragantamiento seguido de sibilancias unilaterales fijas que no responden a broncodilatadores):",
          "• <strong>Radiografía de Tórax:</strong> La mayoría de los objetos son radiolúcidos (frutos secos). Los signos indirectos son <strong>hiperinsuflación unilateral</strong> (por mecanismo de válvula que permite la entrada pero no la salida de aire) y <strong>atrapamiento aéreo</strong> en radiografía en espiración (el hemitórax afectado no se vacía y empuja el mediastino hacia el lado sano).",
          "• <strong>Estándar de Oro Diagnóstico y Terapéutico:</strong> <strong>Broncoscopía Rígida</strong> bajo anestesia general en pabellón. Permite visualizar directamente el objeto, proteger la vía aérea y retirarlo mediante pinzas especializadas."
        ]
      }
    ],
    "table": {
      "title": "Diferencias en el Manejo de OVACE según Grupo Etario (AHA / AAP)",
      "headers": [
        "Parámetro",
        "Lactante (< 1 año)",
        "Niño Mayor (> 1 año) y Adulto"
      ],
      "rows": [
        [
          "Posición del Paciente",
          "Boca abajo sobre antebrazo inclinado hacia abajo",
          "De pie o sentado inclinado levemente hacia adelante"
        ],
        [
          "Maniobra 1",
          "5 golpes interescapulares con el talón de la mano",
          "5 compresiones abdominales (Heimlich)"
        ],
        [
          "Maniobra 2",
          "5 compresiones torácicas con dos dedos en esternón",
          "Compresiones continuas hacia adentro y arriba"
        ],
        [
          "Maniobra de Heimlich",
          "¡ABSOLUTAMENTE CONTRAINDICADA! (Riesgo hepático)",
          "Maniobra de elección absoluta"
        ],
        [
          "Pérdida de Conciencia",
          "Iniciar RCP: 30:2 (15:2 si 2 rescatadores) + Mirar antes de ventilar",
          "Iniciar RCP convencional"
        ],
        [
          "Barrido digital a ciegas",
          "¡ESTRICTAMENTE PROHIBIDO en todas las edades!",
          "¡ESTRICTAMENTE PROHIBIDO!"
        ]
      ]
    },
    "vignette": "Madre acude corriendo a la urgencia con su hijo de 8 meses en brazos. Refiere que hace 3 minutos el niño estaba jugando en el suelo con un juguete de su hermano mayor cuando súbitamente comenzó a toser de forma violenta, dejando de emitir sonidos. Al examen: lactante consciente pero visiblemente angustiado, con respiración inefectiva, aleteo nasal, cianosis perioral y tiraje universal severo. No puede llorar ni emitir ruidos respiratorios.",
    "explicacion": "El lactante presenta una Obstrucción de Vía Aérea por Cuerpo Extraño (OVACE) completa consciente (tos inefectiva, imposibilidad de llorar o emitir sonido). En un lactante menor de 1 año, la conducta inmediata consiste en colocarlo en decúbito prono sobre el antebrazo con la cabeza hacia abajo y aplicar 5 golpes secos en la espalda (entre las escápulas) seguidos de 5 compresiones torácicas en el tercio inferior del esternón. La maniobra de Heimlich está formalmente contraindicada en menores de 1 año por riesgo de rotura de vísceras abdominales.",
    "keyPoints": [
      "Si el paciente tose con fuerza (obstrucción parcial), solo se estimula a toser; no se interviene.",
      "En menores de 1 año con obstrucción total: 5 golpes interescapulares + 5 compresiones torácicas.",
      "La maniobra de Heimlich está estrictamente PROHIBIDA en menores de 1 año (riesgo de rotura hepática).",
      "La maniobra de Heimlich es de elección en niños mayores de 1 año y adultos.",
      "Nunca realizar barrido con el dedo a ciegas en la cavidad oral (puede empujar el objeto más profundo).",
      "Si cae inconsciente, se inicia RCP y solo se extrae el objeto si está visible directamente en la boca.",
      "La broncoscopía rígida es el estándar de oro para el diagnóstico y extracción de cuerpos extraños bronquiales."
    ],
    "questions": [
      {
        "stem": "Un lactante de 9 meses presenta un episodio súbito de asfixia mientras comía trozos de manzana. Al examinarlo en el SAPU, el niño está consciente pero no emite ningún sonido, no puede llorar y presenta tiraje severo con cianosis progresiva. ¿Cuál es la maniobra inicial indicada?",
        "options": [
          {
            "id": "A",
            "text": "Realizar maniobra de Heimlich con 5 compresiones abdominales rápidas"
          },
          {
            "id": "B",
            "text": "Administrar 5 golpes en la espalda seguidos de 5 compresiones torácicas con el niño en el antebrazo"
          },
          {
            "id": "C",
            "text": "Introducir el dedo índice profundamente a ciegas para palpar y enganchar el objeto"
          },
          {
            "id": "D",
            "text": "Iniciar de inmediato intubación orotraqueal a ciegas sin laringoscopía"
          },
          {
            "id": "E",
            "text": "Colocar al lactante en decúbito supino e iniciar compresiones cardíacas continuas"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La maniobra de Heimlich (compresiones abdominales) está formalmente contraindicada en menores de 1 año debido al riesgo de hemorragia y laceración de órganos intraabdominales (especialmente hígado y bazo).\nB) Correcta. La recomendación oficial de soporte vital básico pediátrico (AHA / ERC / SOCHIPE) en menores de 1 año con obstrucción de vía aérea por cuerpo extraño completa (sin tos efectiva) es la combinación secuencial de 5 golpes en la espalda (interescapulares) con la cabeza más baja que el tronco, seguidos de 5 compresiones torácicas sobre el esternón.\nC) Incorrecta. El barrido digital a ciegas está formalmente prohibido porque puede empujar el cuerpo extraño hacia la laringe subglótica provocando una obstrucción irreversible.\nD) Incorrecta. Inadecuado sin visualización.\nE) Incorrecta. El paciente aún está consciente.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.003"
      },
      {
        "stem": "Un niño de 2 años presenta antecedente de un acceso de tos violenta y ahogo mientras comía maní hace 5 días. La madre refiere que desde entonces ha persistido con tos seca y 'silbido al respirar'. Al examen físico se auscultan sibilancias unilaterales persistentes y disminución del murmullo pulmonar en la base pulmonar derecha. La radiografía de tórax en espiración demuestra hiperinsuflación del pulmón derecho con desplazamiento del mediastino hacia la izquierda. ¿Cuál es la conducta diagnóstica y terapéutica definitiva?",
        "options": [
          {
            "id": "A",
            "text": "Iniciar tratamiento con Salbutamol inhalado y control en 1 mes"
          },
          {
            "id": "B",
            "text": "Prescribir Amoxicilina oral por sospecha de neumonía bacteriana"
          },
          {
            "id": "C",
            "text": "Realizar Broncoscopía Rígida en pabellón para extracción del cuerpo extraño"
          },
          {
            "id": "D",
            "text": "Realizar maniobra de Heimlich vigorosa"
          },
          {
            "id": "E",
            "text": "Indicar kinesioterapia respiratoria con clapping torácico en la base derecha"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. El salbutamol no resolverá la obstrucción mecánica.\nB) Incorrecta. Los antibióticos no resuelven la causa subyacente y retrasan el tratamiento definitivo.\nC) Correcta. La presencia de sibilancias fijas unilaterales tras un episodio de atragantamiento con maní, sumado a hiperinsuflación unilateral por mecanismo de válvula en la Rx de tórax, es confirmatoria de aspiración de cuerpo extraño bronquial. El procedimiento de elección estándar de oro para el diagnóstico y extracción es la Broncoscopía Rígida bajo anestesia general en pabellón quirúrgico.\nD) Incorrecta. Las maniobras de Heimlich son solo para asfixia aguda inmediata; en fase subaguda son ineficaces y peligrosas.\nE) Incorrecta. La KNT torácica está contraindicada porque puede movilizar el cuerpo extraño hacia la tráquea causando obstrucción total.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.003"
      }
    ]
  },
  {
    "id": "ped-23",
    "classId": "ped-23",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Respiratorio Pediátrico & Urgencias",
    "topicLabel": "18.23",
    "title": "Cardiología Pediátrica: Soplos, Insuficiencia Cardíaca, Arritmias, Endocarditis y Electrocardiograma",
    "perfilCode": "2.01.1.054, 2.01.1.052, 2.01.2.012, 2.01.1.049, 2.01.1.051, 2.01.4.012",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "GES N° 4: Cardiopatías congénitas operables en menores de 15 años (confirmación y tratamiento). Sin garantía GES específica para soplos inocentes, arritmias ni endocarditis.",
    "reconstrucciones": "EUNACOM Julio 2015 (Q#154) · EUNACOM Julio 2013 (Q#173)",
    "frecuencia": "Alta rentabilidad · soplo inocente vs patológico, insuficiencia cardíaca del lactante (furosemida), taquicardia supraventricular inestable (cardioversión) y hemocultivos antes del antibiótico en la endocarditis",
    "svg": null,
    "algoTitle": "Algoritmo de Evaluación del Soplo y del Paciente Pediátrico con Sospecha de Cardiopatía",
    "diagramRows": [
      {
        "t": "Niño con soplo cardíaco o sospecha de cardiopatía",
        "s": "Anamnesis (cansancio al mamar, sudoración, mal incremento ponderal, síncope), saturación, pulsos femorales y presión en 4 extremidades",
        "type": "acc"
      },
      {
        "t": "Caracterización del soplo y examen cardiovascular",
        "s": "Sistólico/diastólico · intensidad · frémito · segundo ruido · cianosis · hepatomegalia",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "¿Soplo con criterios de inocente?",
        "al": "Soplo inocente",
        "ll": "Sí",
        "left": {
          "t": "Soplo inocente (Still, flujo pulmonar, zumbido venoso)",
          "s": "Sistólico corto, ≤ II/VI, vibratorio, cambia con la posición, niño asintomático, pulsos y segundo ruido normales · No requiere estudio: tranquilizar",
          "type": "acc"
        },
        "rl": "No",
        "right": {
          "t": "Soplo patológico o dudoso",
          "s": "Diastólico, holosistólico, ≥ III/VI, frémito, click, S2 fijo o único, cianosis, pulsos femorales débiles, insuficiencia cardíaca, síncope",
          "type": "crit"
        }
      },
      {
        "t": "Estudio inicial y derivación",
        "s": "ECG y radiografía de tórax · saturación pre y postductal · ecocardiograma · derivar a cardiología pediátrica (GES si es cardiopatía congénita operable)",
        "type": "warn"
      }
    ],
    "contexto": "El médico general debe resolver en el control de salud una pregunta frecuente: ¿este soplo es inocente o hay una cardiopatía? La gran mayoría de los soplos infantiles son inocentes y no requieren estudio, pero cuatro situaciones exigen actuar rápido: la insuficiencia cardíaca del lactante (que se confunde con bronquiolitis), la taquicardia supraventricular con compromiso hemodinámico, la fiebre prolongada en un niño con cardiopatía (endocarditis) y las alteraciones electrocardiográficas que predisponen a muerte súbita. Este tema integra el enfoque inicial, el manejo de urgencia y la derivación oportuna.",
    "contentSections": [
      {
        "subhead": "1. Soplos: Inocente vs Patológico",
        "paragraphs": [
          "Hasta el 50 a 70% de los niños tiene un soplo inocente en algún momento. Un <strong>soplo inocente</strong> es sistólico, de baja intensidad (≤ II/VI), de timbre vibratorio o musical, localizado, que cambia con la posición, la fiebre o el ejercicio, <strong>sin frémito</strong>, con segundo ruido normal, pulsos y presión arterial normales, y en un niño asintomático y con buen crecimiento. No requiere ECG, radiografía ni ecocardiograma: se tranquiliza a la familia.",
          "• <strong>Soplo de Still (vibratorio):</strong> el más frecuente en escolares (3 a 7 años); sistólico, musical, entre el borde esternal izquierdo y el ápex, disminuye al sentarse. • <strong>Soplo pulmonar de flujo:</strong> eyectivo suave en el foco pulmonar, en niños delgados y adolescentes. • <strong>Zumbido venoso:</strong> continuo, supraclavicular o infraclavicular derecho, desaparece al acostar al niño o al comprimir la yugular. • <strong>Estenosis pulmonar periférica fisiológica</strong> del lactante: soplo sistólico en axilas y espalda, que desaparece a los 6 meses.",
          "<strong>Signos de alarma</strong> de soplo patológico: soplo <strong>diastólico</strong> o <strong>holosistólico</strong>, intensidad ≥ III/VI, <strong>frémito</strong>, chasquido (click), <strong>segundo ruido único o con desdoblamiento fijo</strong>, cianosis, pulsos femorales débiles o diferencia de presión entre brazos y piernas, taquicardia, hepatomegalia, mal incremento ponderal, cansancio al alimentarse, síncope o dolor torácico de esfuerzo. Los soplos del recién nacido o lactante con síntomas deben estudiarse siempre.",
          "Principales soplos patológicos: <strong>comunicación interventricular</strong> (holosistólico en borde esternal izquierdo bajo, a veces con frémito; los defectos grandes producen insuficiencia cardíaca a las 4 a 8 semanas), <strong>comunicación interauricular</strong> (sistólico eyectivo pulmonar con desdoblamiento fijo del segundo ruido; suele ser asintomática), <strong>ductus arterioso persistente</strong> (continuo «en maquinaria» y pulsos saltones), <strong>estenosis pulmonar o aórtica</strong> (eyectivos con frémito y click), <strong>coartación de la aorta</strong> (pulsos femorales disminuidos e hipertensión en brazos) y <strong>tetralogía de Fallot</strong> (soplo eyectivo pulmonar con cianosis). <em>Conducta (Inicial/Derivar):</em> ECG, radiografía de tórax, saturación en mano derecha y pie, <strong>ecocardiograma</strong> y derivación a cardiología pediátrica; la cardiopatía congénita operable está cubierta por GES."
        ]
      },
      {
        "subhead": "2. Insuficiencia Cardíaca y Edema Pulmonar en el Niño",
        "paragraphs": [
          "En el <strong>recién nacido</strong> la insuficiencia cardíaca (IC) se debe a cardiopatías obstructivas izquierdas dependientes del ductus (coartación crítica, corazón izquierdo hipoplásico) y se presenta como shock a los 7 a 14 días de vida. En el <strong>lactante</strong> es típica de los cortocircuitos izquierda-derecha grandes (comunicación interventricular, canal auriculoventricular, ductus), que se manifiestan cuando cae la resistencia vascular pulmonar, a las 4 a 8 semanas. En el <strong>escolar y adolescente</strong> predominan la miocarditis, las miocardiopatías y la cardiopatía reumática.",
          "<strong>Clínica del lactante:</strong> cansancio y sudoración al mamar, tomas prolongadas, mal incremento ponderal, <strong>taquipnea y taquicardia</strong>, galope, soplo, <strong>hepatomegalia</strong> y crepitaciones; los edemas periféricos son tardíos. Se confunde con bronquiolitis o neumonía; la hepatomegalia, la cardiomegalia en la radiografía y el galope orientan a la causa cardíaca. En el escolar aparecen disnea, ortopnea, edemas, ingurgitación yugular y dolor abdominal por congestión hepática.",
          "<strong>Manejo inicial (Inicial/Derivar):</strong> posición semisentada, oxígeno si hay hipoxemia, <strong>furosemida 1 mg/kg EV</strong> (repetible), alimentación fraccionada hipercalórica, tratamiento de la causa (infección, anemia, arritmia), y luego <strong>IECA</strong> (captopril, enalapril), espironolactona y, según el caso, digoxina; el especialista decide la cirugía o el cateterismo. En el <strong>edema pulmonar agudo</strong> (disnea, ortopnea, crepitaciones, espuma rosada) se agregan oxígeno a flujo alto o ventilación no invasiva, furosemida EV y vasodilatadores o inotrópicos (dobutamina) si hay bajo gasto; el <strong>shock cardiogénico</strong> se maneja en UCI. En la miocarditis aguda (niño previamente sano con IC tras cuadro viral) se evitan los bolos de volumen y se confirma con troponina, ECG y ecocardiograma."
        ]
      },
      {
        "subhead": "3. Arritmias: Taquicardia Supraventricular y Otras Alteraciones del Ritmo",
        "paragraphs": [
          "La <strong>taquicardia supraventricular (TSV)</strong> es la arritmia sintomática más frecuente del lactante: frecuencia cardíaca <strong>fija, > 220/min</strong> (> 180 en el niño mayor), regular, <strong>QRS estrecho y sin ondas P visibles</strong>, de inicio y término bruscos. Se diferencia de la taquicardia sinusal (fiebre, dolor, hipovolemia) porque en esta la FC es < 220, variable y hay ondas P. En el lactante se manifiesta por rechazo alimentario, palidez y sudoración, y puede progresar a insuficiencia cardíaca.",
          "<strong>Tratamiento:</strong> <em>paciente estable:</em> <strong>maniobras vagales</strong> (en el lactante bolsa con hielo y agua sobre la cara por 15 a 30 segundos; en el mayor, Valsalva modificado); si fallan, <strong>adenosina 0,1 mg/kg en bolo rápido EV</strong> seguida de suero (máx. 6 mg; segunda dosis de 0,2 mg/kg). <em>Paciente inestable</em> (shock, compromiso de conciencia, hipotensión): <strong>cardioversión eléctrica sincronizada 0,5 a 1 J/kg</strong> (luego 2 J/kg), sin retrasarla por obtener una vía venosa. Se deriva a cardiología para el estudio y la profilaxis.",
          "• <strong>Síndrome de Wolff-Parkinson-White:</strong> vía accesoria; el ECG basal muestra PR corto y onda delta. Es causa de TSV y, si se asocia a fibrilación auricular, de muerte súbita; se evita verapamilo y digoxina, y se deriva para ablación. • <strong>Bloqueo AV completo congénito:</strong> bradicardia < 60/min, asociado a lupus materno (anti-Ro/La). • <strong>Síndrome de QT largo:</strong> síncope con el ejercicio, el susto o ruidos intensos, a veces con sordera o antecedente familiar de muerte súbita. • <strong>Taquicardia ventricular y fibrilación ventricular:</strong> raras; sin pulso se manejan como paro con desfibrilación (4 J/kg)."
        ]
      },
      {
        "subhead": "4. Endocarditis Infecciosa: Sospecha, Diagnóstico y Profilaxis",
        "paragraphs": [
          "Se sospecha endocarditis en todo niño con <strong>fiebre prolongada y cardiopatía congénita</strong> (sobre todo cortocircuitos, válvulas o material protésico), cirugía cardíaca previa o catéter venoso central. Los agentes más frecuentes son <strong>estreptococos del grupo viridans</strong> (tras procedimientos dentales; curso subagudo) y <strong><em>Staphylococcus aureus</em></strong> (curso agudo, en recién nacidos, catéteres o corazón sano), además de enterococo y bacilos HACEK.",
          "<strong>Clínica:</strong> fiebre, soplo nuevo o que cambia, esplenomegalia, baja de peso y fenómenos vasculares (petequias, <strong>hemorragias en astilla</strong> subungueales, lesiones de Janeway) e inmunológicos (<strong>nódulos de Osler</strong>, manchas de Roth, glomerulonefritis). <strong>Diagnóstico:</strong> criterios de Duke modificados; se obtienen <strong>al menos 3 hemocultivos de sitios y momentos distintos antes de iniciar antibióticos</strong> y un <strong>ecocardiograma</strong> (vegetaciones, abscesos, regurgitación). Tratamiento: antibióticos EV por 4 a 6 semanas según germen (penicilina o ceftriaxona con gentamicina para viridans; cloxacilina para <em>S. aureus</em> sensible; vancomicina si es meticilino-resistente) y cirugía en caso de insuficiencia cardíaca refractaria, abscesos, embolias repetidas o vegetaciones grandes. Se deriva a cardiología y hospitaliza.",
          "<strong>Profilaxis antibiótica</strong>: solo en pacientes de <strong>alto riesgo</strong> (válvula o material protésico, endocarditis previa, cardiopatía congénita cianótica no reparada o con defectos residuales junto a material protésico, y trasplante cardíaco con valvulopatía) que se someten a procedimientos dentales que manipulan la encía o la región periapical: <strong>amoxicilina 50 mg/kg VO</strong> (máx. 2 g) 30 a 60 minutos antes (clindamicina o azitromicina si hay alergia). <strong>No</strong> se indica en soplos inocentes, comunicaciones interauriculares o interventriculares sin complicaciones, ni en procedimientos digestivos o urinarios. La mejor prevención es la higiene dental."
        ]
      },
      {
        "subhead": "5. Electrocardiograma Pediátrico: Valores Normales e Indicaciones",
        "paragraphs": [
          "El ECG se interpreta en orden: <strong>ritmo, frecuencia, eje, intervalos (PR, QRS, QT corregido), hipertrofia y repolarización</strong>. La frecuencia cardíaca normal varía con la edad: recién nacido 120 a 160/min, lactante 100 a 150, 1 a 3 años 90 a 140, 4 a 5 años 80 a 120, escolar 70 a 110 y adolescente 60 a 100. El PR normal es de hasta 0,16 a 0,18 s, el QRS es estrecho (< 0,09 a 0,10 s) y el <strong>QTc (Bazett) normal es < 0,44 s</strong> (≥ 0,46 s es prolongado).",
          "<strong>Particularidades del niño:</strong> en el recién nacido hay <strong>eje desviado a la derecha</strong> y predominio ventricular derecho (R alta en V1); el «<strong>patrón juvenil</strong>» con ondas T negativas en V1 a V3 es normal hasta la adolescencia, y la arritmia sinusal respiratoria también es normal. Son anormales: PR corto con onda delta (WPW), bloqueos AV, QTc prolongado, QRS ancho, ondas T picudas (hiperkalemia), supradesnivel difuso del ST (pericarditis) y signos de hipertrofia ventricular (R alta en V1 con eje derecho: obstrucción derecha; R alta en V5-V6 con T invertida: obstrucción izquierda).",
          "<strong>Se solicita ECG</strong> en síncope, palpitaciones, dolor torácico de esfuerzo, soplo patológico, antecedente familiar de muerte súbita, QT largo o miocardiopatía, enfermedad de Kawasaki, miocarditis o pericarditis, intoxicaciones y alteraciones hidroelectrolíticas. El médico general debe <strong>interpretar y emplear</strong> el trazado para decidir derivación urgente (arritmias, QT largo, WPW con síntomas) o seguimiento."
        ]
      }
    ],
    "table": {
      "title": "Soplo Inocente vs Soplo Patológico en el Niño",
      "headers": [
        "Característica",
        "Soplo Inocente",
        "Soplo Patológico",
        "Conducta"
      ],
      "rows": [
        [
          "Intensidad y momento",
          "≤ II/VI, sistólico, corto",
          "≥ III/VI, holosistólico o diastólico",
          "Inocente: tranquilizar · Patológico: ecocardiograma"
        ],
        [
          "Frémito / click",
          "Ausente",
          "Presente (estenosis valvulares)",
          "Derivar a cardiología"
        ],
        [
          "Segundo ruido",
          "Normal, con desdoblamiento fisiológico",
          "Único, fuerte o con desdoblamiento fijo (CIA)",
          "ECG y ecocardiograma"
        ],
        [
          "Variación",
          "Cambia con la posición, fiebre o ejercicio",
          "Fijo",
          "Registrar y controlar"
        ],
        [
          "Síntomas y examen",
          "Asintomático, pulsos normales, crecimiento normal",
          "Cianosis, hepatomegalia, mal incremento, pulsos femorales débiles",
          "Estudio completo y derivación"
        ],
        [
          "Ejemplos",
          "Still, flujo pulmonar, zumbido venoso",
          "CIV, CIA, DAP, estenosis, coartación, Fallot",
          "GES si la cardiopatía es operable"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Taquicardia Supraventricular: Manejo según Estabilidad Hemodinámica",
      "headers": [
        "Situación",
        "Medida",
        "Dosis",
        "Observación"
      ],
      "rows": [
        [
          "Estable, QRS estrecho",
          "Maniobras vagales",
          "Hielo sobre la cara 15 a 30 s (lactante) · Valsalva modificado (mayor)",
          "No presionar los globos oculares"
        ],
        [
          "Estable, no cede",
          "Adenosina EV rápida",
          "0,1 mg/kg (máx. 6 mg) · segunda dosis 0,2 mg/kg (máx. 12 mg)",
          "Vía venosa proximal y bolo de suero; vida media de segundos"
        ],
        [
          "Inestable (shock, compromiso de conciencia)",
          "Cardioversión sincronizada",
          "0,5 a 1 J/kg; si falla, 2 J/kg",
          "No retrasar por buscar vía venosa; sedar si hay vía"
        ],
        [
          "Wolff-Parkinson-White",
          "Derivar a cardiología",
          "Estudio electrofisiológico y ablación",
          "Evitar verapamilo y digoxina"
        ]
      ]
    },
    "vignette": "Lactante de 3 meses, alimentado con lactancia materna, es traído a control porque se cansa y suda al mamar, con tomas prolongadas y bajo incremento ponderal (peso cayó dos canales). Al examen: FR 62 por minuto con tiraje subcostal, FC 170 por minuto, saturación 94%, soplo holosistólico III/VI en el borde esternal izquierdo bajo con frémito, galope, crepitaciones basales escasas y hepatomegalia de 4 cm bajo el reborde costal. La radiografía muestra cardiomegalia y plétora pulmonar.",
    "explicacion": "Es una insuficiencia cardíaca del lactante por un cortocircuito izquierda-derecha grande (comunicación interventricular), que se manifiesta cuando cae la resistencia vascular pulmonar. Los datos que la distinguen de una bronquiolitis son la hepatomegalia, el galope, la cardiomegalia y el soplo con frémito. El manejo inicial es oxígeno si hay hipoxemia, furosemida EV y alimentación fraccionada hipercalórica, y se solicita ecocardiograma y derivación a cardiología pediátrica (GES de cardiopatía congénita operable) para tratamiento definitivo.",
    "keyPoints": [
      "Un soplo inocente es sistólico, ≤ II/VI, vibratorio, sin frémito, con segundo ruido normal y en un niño asintomático; no requiere estudio.",
      "Son signos de soplo patológico: diastólico, holosistólico, ≥ III/VI, frémito, click, S2 fijo o único, cianosis, pulsos femorales débiles o insuficiencia cardíaca.",
      "La insuficiencia cardíaca del lactante se presenta con cansancio al mamar, taquipnea, hepatomegalia y mal incremento ponderal; el manejo inicial es furosemida EV y oxígeno si hay hipoxemia.",
      "En la taquicardia supraventricular (FC > 220 con QRS estrecho): maniobras vagales y adenosina 0,1 mg/kg si está estable; cardioversión sincronizada 0,5 a 1 J/kg si está inestable.",
      "En la endocarditis infecciosa se toman al menos 3 hemocultivos antes de los antibióticos y luego ecocardiograma; la profilaxis dental es solo para cardiopatías de alto riesgo.",
      "El ECG pediátrico tiene eje a la derecha en el recién nacido y patrón juvenil (T negativa en V1-V3) normal; QTc ≥ 0,46 s es prolongado."
    ],
    "questions": [
      {
        "stem": "Un niño de 13 años acude a control médico, por una infección respiratoria alta. En su examen físico se ausculta un soplo paraesternal izquierdo, sistólico, de intensidad II/VI, sin otras alteraciones. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Soplo inocente"
          },
          {
            "id": "B",
            "text": "Ductus arterioso persistente"
          },
          {
            "id": "C",
            "text": "Miocardiopatía hipertrófica obstructiva"
          },
          {
            "id": "D",
            "text": "Estenosis aórtica"
          },
          {
            "id": "E",
            "text": "Coartación aórtica"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. Un soplo sistólico suave (II/VI), paraesternal, en un niño asintomático y sin otros hallazgos es un soplo inocente (de flujo o de Still); no requiere estudio.\nB) Incorrecta. El ductus produce un soplo continuo «en maquinaria» con pulsos saltones.\nC) Incorrecta. La miocardiopatía hipertrófica obstructiva se acompaña de disnea, síncope o antecedente familiar de muerte súbita, y el soplo aumenta con el Valsalva.\nD) Incorrecta. La estenosis aórtica da un soplo eyectivo más intenso, con frémito y click.\nE) Incorrecta. La coartación se sospecha por pulsos femorales débiles e hipertensión en los brazos.",
        "recTag": "EUNACOM Julio 2015 · Pregunta 154"
      },
      {
        "stem": "Lactante de 4 meses de edad, sin antecedentes conocidos, alimentado con lactancia materna de forma exclusiva, es traído por presentar bajo incremento ponderal, asociado a cansancio al alimentarse y decaimiento. Se aprecia decaído, saturación arterial de 90%, examen cardiaco con ritmo regular en dos tiempos, con presencia de soplo sistólico, y pulmonar que muestra murmullo pulmonar disminuido en bases, asociado a crepitaciones finas bilaterales. El manejo inicial más adecuado en este caso es:",
        "options": [
          {
            "id": "A",
            "text": "Administrar furosemida endovenosa"
          },
          {
            "id": "B",
            "text": "Administrar vasodilatadores endovenosos"
          },
          {
            "id": "C",
            "text": "Administrar epinefrina endovenosa"
          },
          {
            "id": "D",
            "text": "Realizar intubación endotraqueal y ventilación mecánica"
          },
          {
            "id": "E",
            "text": "Administrar betabloqueadores endovenosos"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El cuadro corresponde a una insuficiencia cardíaca congestiva del lactante (cansancio al comer, soplo, crepitaciones y mal incremento); el manejo inicial es el diurético de asa EV, más oxígeno si hay hipoxemia.\nB) Incorrecta. Los vasodilatadores EV se reservan para bajo gasto con presión conservada y en la unidad de cuidados intensivos.\nC) Incorrecta. La epinefrina se usa en shock o paro, no en esta insuficiencia cardíaca estable.\nD) Incorrecta. No hay falla respiratoria que obligue a intubar; primero se trata la congestión.\nE) Incorrecta. Los betabloqueadores están contraindicados en la IC descompensada aguda.",
        "recTag": "EUNACOM Julio 2013 · Pregunta 173"
      },
      {
        "stem": "Un escolar de 9 años, que hace 10 días tuvo un cuadro respiratorio viral, consulta por cansancio, disnea progresiva, ortopnea y dolor abdominal. Al examen tiene FC 140/min, ritmo de galope, crepitaciones bibasales y hepatomegalia dolorosa. La radiografía de tórax muestra cardiomegalia y congestión pulmonar. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Miocarditis viral con insuficiencia cardíaca"
          },
          {
            "id": "B",
            "text": "Neumonía bilateral"
          },
          {
            "id": "C",
            "text": "Crisis asmática"
          },
          {
            "id": "D",
            "text": "Pericarditis aguda sin compromiso miocárdico"
          },
          {
            "id": "E",
            "text": "Hepatitis viral aguda"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. Insuficiencia cardíaca aguda (taquicardia, galope, congestión pulmonar, hepatomegalia y cardiomegalia) en un niño previamente sano, tras una infección viral, sugiere miocarditis. Se confirma con troponinas, ECG y ecocardiograma; se maneja con diuréticos y soporte, en unidad crítica si hay shock.\nB) Incorrecta. La neumonía no explica la cardiomegalia, el galope ni la hepatomegalia.\nC) Incorrecta. En el asma hay sibilancias y no hay galope ni cardiomegalia.\nD) Incorrecta. La pericarditis sin miocarditis cursa con dolor torácico y roce, sin congestión pulmonar.\nE) Incorrecta. La hepatitis no produce disnea ni congestión pulmonar.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.012"
      },
      {
        "stem": "Un lactante de 4 meses es traído por rechazo alimentario, palidez y sudoración. Al examen está soporoso, con llene capilar de 5 segundos, pulsos periféricos débiles y frecuencia cardíaca de 280/min. El monitor muestra una taquicardia regular de QRS estrecho, sin ondas P visibles. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Maniobras vagales con hielo en la cara"
          },
          {
            "id": "B",
            "text": "Adenosina en bolo endovenoso rápido como única opción, aunque demore la vía"
          },
          {
            "id": "C",
            "text": "Cardioversión eléctrica sincronizada"
          },
          {
            "id": "D",
            "text": "Amiodarona oral"
          },
          {
            "id": "E",
            "text": "Observar y controlar con ECG en 24 horas"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Las maniobras vagales son para el paciente estable; aquí hay shock.\nB) Incorrecta. La adenosina es útil solo si hay una vía venosa inmediata y no debe retrasar el tratamiento de un paciente inestable.\nC) Correcta. Es una taquicardia supraventricular (FC fija > 220, QRS estrecho, sin ondas P) con compromiso hemodinámico (soporoso, llene capilar lento): corresponde cardioversión sincronizada de 0,5 a 1 J/kg, luego 2 J/kg.\nD) Incorrecta. La amiodarona oral no es una medida de urgencia.\nE) Incorrecta. Observar a un lactante en shock es inaceptable.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.049"
      },
      {
        "stem": "Un niño de 9 años con antecedente de comunicación interventricular no operada presenta fiebre de 2 semanas, decaimiento y baja de peso. Hace un mes se realizó una extracción dental. Al examen tiene soplo holosistólico de mayor intensidad que en controles previos, esplenomegalia leve y hemorragias en astilla subungueales. ¿Cuál es el examen más importante para iniciar el estudio?",
        "options": [
          {
            "id": "A",
            "text": "Electrocardiograma"
          },
          {
            "id": "B",
            "text": "Proteína C reactiva"
          },
          {
            "id": "C",
            "text": "Radiografía de tórax"
          },
          {
            "id": "D",
            "text": "Serología para Bartonella"
          },
          {
            "id": "E",
            "text": "Hemocultivos seriados antes de iniciar antibióticos"
          }
        ],
        "correcta": "E",
        "explicacion": "A) Incorrecta. El ECG no confirma ni descarta una endocarditis.\nB) Incorrecta. La PCR es inespecífica.\nC) Incorrecta. La radiografía no aporta al diagnóstico.\nD) Incorrecta. La serología para Bartonella se considera si los hemocultivos son negativos.\nE) Correcta. Fiebre prolongada en un niño con cardiopatía congénita, soplo que cambia, esplenomegalia y fenómenos vasculares sugiere endocarditis infecciosa (criterios de Duke). Lo fundamental es obtener 3 hemocultivos de punciones separadas antes de los antibióticos y luego un ecocardiograma. El germen más probable es un estreptococo del grupo viridans.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.051"
      },
      {
        "stem": "Un adolescente de 14 años consulta por episodios de palpitaciones de inicio y término brusco. Entre crisis, el electrocardiograma muestra intervalo PR corto, onda delta (empastamiento inicial del QRS) y QRS levemente ensanchado. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Bloqueo auriculoventricular de primer grado"
          },
          {
            "id": "B",
            "text": "Síndrome de Wolff-Parkinson-White"
          },
          {
            "id": "C",
            "text": "Síndrome de QT largo"
          },
          {
            "id": "D",
            "text": "Hipertrofia ventricular izquierda"
          },
          {
            "id": "E",
            "text": "Bloqueo completo de rama derecha"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El bloqueo AV de primer grado tiene PR prolongado, no corto.\nB) Correcta. PR corto con onda delta y QRS ancho es la preexcitación por vía accesoria (Wolff-Parkinson-White), causa de taquicardia supraventricular paroxística. Se deriva a cardiología para estratificación y ablación, por el riesgo de muerte súbita si se asocia a fibrilación auricular.\nC) Incorrecta. El QT largo se define por el intervalo QTc prolongado.\nD) Incorrecta. La hipertrofia ventricular izquierda produce voltajes altos, no preexcitación.\nE) Incorrecta. El bloqueo de rama derecha tiene un patrón rSR' en V1 sin PR corto.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.4.012"
      }
    ]
  },
  {
    "id": "ped-24",
    "classId": "ped-24",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Respiratorio Pediátrico & Urgencias",
    "topicLabel": "18.24",
    "title": "Reanimación Cardiopulmonar Pediátrica, Intoxicaciones y Prevención de Accidentes",
    "perfilCode": "2.01.2.020, 2.01.5.012, 2.01.2.014, 2.01.3.008",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Derivar",
    "ges": "Sin garantía GES específica · Intoxicaciones: notificación a CITUC (consulta toxicológica telefónica 24 horas) · Prevención de accidentes: eje del Programa Nacional de Salud de la Infancia",
    "reconstrucciones": "EUNACOM Julio 2017 (Q#108) · EUNACOM Julio 2019 (Q#41) · EUNACOM Julio 2016 (Q#95)",
    "frecuencia": "Alta rentabilidad · adrenalina 0,01 mg/kg en el paro no desfibrilable, relación 15:2 con dos reanimadores, N-acetilcisteína en la intoxicación por paracetamol, atropina en el síndrome colinérgico y endoscopía tras ingestión de cáusticos",
    "svg": null,
    "algoTitle": "Algoritmo de Reanimación Cardiopulmonar Pediátrica (Soporte Vital Avanzado)",
    "diagramRows": [
      {
        "t": "Niño que no responde, no respira normalmente o solo jadea",
        "s": "Seguridad de la escena · estimular · pedir ayuda y desfibrilador · palpar pulso braquial (lactante) o carotídeo/femoral (niño) por máximo 10 segundos",
        "type": "acc"
      },
      {
        "t": "Sin pulso o FC < 60/min con mala perfusión: iniciar RCP",
        "s": "Compresiones (≥ un tercio del tórax, 100-120/min) y ventilaciones con oxígeno · 30:2 un reanimador · 15:2 dos reanimadores",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Monitor o DEA: análisis del ritmo",
        "al": "Ritmo desfibrilable",
        "ll": "FV / TV sin pulso",
        "left": {
          "t": "Desfibrilar y continuar RCP 2 minutos",
          "s": "2 J/kg, luego 4 J/kg · adrenalina 0,01 mg/kg cada 3-5 min desde la 2.ª descarga · amiodarona 5 mg/kg tras la 3.ª",
          "type": "crit"
        },
        "rl": "Asistolia / AESP",
        "right": {
          "t": "No desfibrilable (el más frecuente en niños)",
          "s": "Adrenalina 0,01 mg/kg EV/IO lo antes posible y cada 3-5 min · RCP de alta calidad",
          "type": "warn"
        }
      },
      {
        "t": "Buscar y tratar causas reversibles (Hs y Ts)",
        "s": "Hipoxia · hipovolemia · hipoglicemia · hipo/hiperkalemia · hipotermia · neumotórax a tensión · taponamiento · tóxicos · trombosis",
        "type": "acc"
      }
    ],
    "contexto": "En el niño, el paro cardiorrespiratorio rara vez es de origen cardíaco primario: casi siempre es la etapa final de una hipoxia por falla respiratoria o de un shock, por lo que el ritmo inicial es una asistolia o una actividad eléctrica sin pulso. El médico general debe saber realizar una RCP de calidad, reconocer los toxidromes y usar el antídoto correcto en las intoxicaciones, y ejercer la prevención de accidentes, que son la primera causa de muerte después del año de vida. Este tema agrupa los tres pilares de la atención de urgencia y la prevención en pediatría.",
    "contentSections": [
      {
        "subhead": "1. Paro Cardiorrespiratorio Pediátrico: Causas y Reconocimiento",
        "paragraphs": [
          "El paro pediátrico es secundario a <strong>hipoxia</strong> (asfixia, atoro, ahogamiento, neumonía, SMSL), a shock hipovolémico o séptico, a intoxicaciones y a trauma. El ritmo más frecuente es <strong>no desfibrilable (asistolia o actividad eléctrica sin pulso, 85-90%)</strong>; la fibrilación ventricular o la taquicardia ventricular sin pulso (5-15%) se ve en cardiopatías, trastornos del QT, intoxicaciones y en el niño mayor con colapso súbito. El pronóstico es mejor cuando la causa es una arritmia con testigo y peor cuando la hipoxia es prolongada.",
          "<strong>Reconocimiento:</strong> niño que no responde, <strong>no respira o solo jadea</strong>, y sin pulso central (braquial en el lactante; carotídeo o femoral en el niño) palpado por <strong>no más de 10 segundos</strong>. También se inicia RCP si hay <strong>frecuencia cardíaca < 60/min con mala perfusión</strong> (cianosis, palidez, hipotonía) a pesar de ventilación. Cadena de supervivencia: prevención, RCP precoz de alta calidad, activación del sistema de emergencia, soporte vital avanzado y cuidados posparo."
        ]
      },
      {
        "subhead": "2. RCP Pediátrica: Técnica de Compresiones, Ventilación y Desfibrilación",
        "paragraphs": [
          "<strong>Secuencia C-A-B:</strong> comprobar seguridad, estimular, pedir ayuda y desfibrilador y comenzar las compresiones. <strong>Compresiones:</strong> sobre la mitad inferior del esternón, a una profundidad de <strong>al menos un tercio del diámetro anteroposterior del tórax (~4 cm en el lactante, ~5 cm en el niño)</strong>, a una frecuencia de <strong>100 a 120/min</strong>, permitiendo la reexpansión completa y con interrupciones menores de 10 segundos. Técnica: <strong>lactante</strong> con dos dedos (un reanimador) o <strong>dos pulgares con las manos rodeando el tórax</strong> (dos reanimadores); <strong>niño</strong> con el talón de una o dos manos.",
          "<strong>Relación compresiones-ventilaciones:</strong> <strong>30:2</strong> con un reanimador y <strong>15:2</strong> con dos reanimadores (la relación 3:1 es solo para el recién nacido en sala de partos). Se abre la vía aérea con extensión suave de la cabeza (posición neutra en el lactante) o elevación del mentón, y se ventila con bolsa-máscara y oxígeno al 100% hasta ver elevarse el tórax. Con vía aérea avanzada: compresiones continuas y <strong>1 ventilación cada 6 segundos</strong>. La reanimación sin ventilaciones solo es aceptable si el reanimador no puede o no sabe ventilar.",
          "<strong>Desfibrilación:</strong> se usa DEA con parches pediátricos (atenuador de energía) en menores de 8 años. En ritmo desfibrilable: descarga de <strong>2 J/kg</strong>, luego 4 J/kg, y se retoma la RCP por 2 minutos sin evaluar el pulso. <strong>Fármacos (EV o intraóseo):</strong> <strong>adrenalina 0,01 mg/kg</strong> (0,1 mL/kg de la dilución 1:10.000) cada 3 a 5 minutos, lo antes posible en el ritmo no desfibrilable; <strong>amiodarona 5 mg/kg</strong> (o lidocaína) tras la tercera descarga en FV/TV refractaria. El bicarbonato, el calcio y la atropina no se usan de rutina. Se corrigen las causas reversibles (Hs y Ts), en especial la hipoxia, la hipovolemia y la hipoglicemia.",
          "<strong>Cuidados posparo:</strong> ventilación para saturación de 94 a 99% (evitar hiperoxia), normocapnia, control de la presión arterial, glicemia y temperatura (evitar fiebre), y traslado a una unidad de cuidados intensivos. La reanimación se suspende cuando no hay respuesta tras 20 a 30 minutos, salvo hipotermia o intoxicación, en que se prolonga."
        ]
      },
      {
        "subhead": "3. Intoxicaciones en el Niño: Enfoque General, Toxidromes y Antídotos",
        "paragraphs": [
          "<strong>Enfoque general:</strong> ABC y estabilización, glicemia capilar, historia dirigida (qué, cuánto, cuándo, cómo), identificar el envase y <strong>consultar al CITUC</strong> (centro toxicológico de la UC, atención 24 horas). Si la ingestión fue hace menos de 1 a 2 horas, la vía aérea está protegida y el tóxico se adsorbe, se da <strong>carbón activado 1 g/kg</strong>; no sirve para metales, hierro, litio, alcoholes ni cáusticos. <strong>No se induce el vómito</strong> (jarabe de ipecacuana) y el lavado gástrico no es de rutina. Se observa por el tiempo que corresponda según la sustancia (el paracetamol tarda 24 horas en dar síntomas).",
          "• <strong>Síndrome colinérgico (organofosforados y carbamatos):</strong> miosis, sialorrea, broncorrea, bradicardia, diarrea, vómitos, fasciculaciones y compromiso de conciencia. Se retira la ropa y se lava la piel, y se administra <strong>atropina</strong> (0,02 a 0,05 mg/kg, repetida hasta secar las secreciones) y <strong>pralidoxima</strong>. • <strong>Anticolinérgico:</strong> midriasis, piel seca y caliente, taquicardia, delirio; soporte y benzodiacepinas. • <strong>Opioides:</strong> miosis, depresión respiratoria y coma; <strong>naloxona</strong> (0,1 mg/kg, máx. 2 mg). • <strong>Simpaticomiméticos</strong> (cocaína, anfetaminas): midriasis, hipertermia, hipertensión; benzodiacepinas.",
          "• <strong>Paracetamol</strong> (la intoxicación medicamentosa más frecuente): 24 a 72 horas sin síntomas o con vómitos, luego <strong>hepatotoxicidad</strong> (ictericia, transaminasas muy altas). Dosis tóxica > 150 mg/kg; se mide el nivel a las 4 horas (nomograma de Rumack-Matthew) y se administra <strong>N-acetilcisteína</strong> EV u oral, idealmente dentro de las primeras 8 a 10 horas, y también si ya hay daño hepático. • <strong>Salicilatos:</strong> taquipnea, tinnitus, fiebre, acidosis metabólica con alcalosis respiratoria; alcalinización de la orina, hemodiálisis en casos graves. • <strong>Hierro:</strong> vómitos y diarrea sanguinolentos; deferoxamina. • <strong>Antidepresivos tricíclicos:</strong> QRS ancho, convulsiones, arritmias; bicarbonato de sodio.",
          "• <strong>Monóxido de carbono:</strong> cefalea y compromiso de conciencia con saturación normal; oxígeno al 100% (cámara hiperbárica en casos graves). • <strong>Hidrocarburos:</strong> riesgo de neumonitis por aspiración; no se induce vómito. • <strong>Cáusticos</strong> (soda cáustica, cloro, ácidos): sialorrea, odinofagia, dolor retroesternal o abdominal, estridor; <strong>no se induce vómito ni se neutraliza</strong>, se deja en ayuno y se solicita <strong>endoscopía digestiva alta</strong> dentro de las primeras 12 a 48 horas, porque la ausencia de lesiones orales no descarta lesión esofágica. • <strong>Benzodiacepinas:</strong> sedación sin depresión respiratoria severa; el flumazenil se evita. • <strong>Alcohol etílico:</strong> en el niño produce hipoglicemia y coma."
        ]
      },
      {
        "subhead": "4. Prevención de Accidentes: Consejería por Edad",
        "paragraphs": [
          "Los accidentes son la <strong>primera causa de muerte en los niños mayores de un año</strong> y la mayoría es prevenible. La consejería anticipatoria se entrega en cada control de salud, adaptada a la edad: • <strong>Menor de 1 año:</strong> <strong>sueño seguro</strong> (supino, colchón firme, sin almohadas ni peluches), prevención de caídas del cambiador y de la cama, temperatura del agua del baño ≤ 38 °C, evitar objetos pequeños y bolsas plásticas (asfixia y atoro), guardar medicamentos y productos de aseo.",
          "• <strong>1 a 5 años:</strong> <strong>ahogamiento</strong> (cerco de piscinas y supervisión directa a distancia de un brazo; nunca dejar al niño solo en la tina), quemaduras (mangos de ollas hacia el interior, cocinas con protección, líquidos calientes fuera de alcance), <strong>intoxicaciones</strong> (medicamentos, cloro y plaguicidas bajo llave y en su envase original; teléfono del CITUC visible), caídas (ventanas y escaleras con protección), atoros (frutos secos, uvas y trozos redondos) y atropellos.",
          "• <strong>Transporte:</strong> sistema de retención infantil adecuado a la edad y al peso, en el asiento trasero: <strong>mirando hacia atrás el mayor tiempo posible (idealmente hasta los 2 años o más)</strong>, luego con arnés hacia adelante y luego alzador, hasta que el cinturón de seguridad calce bien; nunca en brazos ni delante de un airbag activo. • <strong>Escolares y adolescentes:</strong> casco en bicicleta y moto, cinturón de seguridad, educación vial, no conducir con alcohol, prevención de violencia y acceso a armas, y deportes con equipo de protección. Cada control debe incluir el registro de los riesgos del hogar."
        ]
      }
    ],
    "table": {
      "title": "Intoxicaciones Frecuentes: Toxidrome, Clave Clínica y Antídoto",
      "headers": [
        "Tóxico / Toxidrome",
        "Clave Clínica",
        "Tratamiento Específico",
        "Advertencia"
      ],
      "rows": [
        [
          "Organofosforados / colinérgico",
          "Miosis, sialorrea, broncorrea, bradicardia, fasciculaciones",
          "Atropina (hasta secar secreciones) + pralidoxima; descontaminar piel",
          "El personal debe protegerse del contacto"
        ],
        [
          "Paracetamol",
          "Asintomático 24 h; luego ictericia y alza de transaminasas",
          "N-acetilcisteína · nivel a las 4 h (Rumack-Matthew)",
          "Dosis tóxica > 150 mg/kg; tratar aunque haya daño hepático"
        ],
        [
          "Opioides",
          "Miosis, depresión respiratoria, coma",
          "Naloxona 0,1 mg/kg (máx. 2 mg)",
          "Su vida media es corta: puede haber renarcotización"
        ],
        [
          "Salicilatos",
          "Taquipnea, tinnitus, fiebre, acidosis metabólica",
          "Alcalinizar orina · hemodiálisis si es grave",
          "Evitar intubar sin hiperventilar"
        ],
        [
          "Cáusticos",
          "Sialorrea, dolor torácico o abdominal, estridor",
          "Ayuno + endoscopía digestiva alta en 12-48 h",
          "No inducir vómito ni neutralizar"
        ],
        [
          "Monóxido de carbono",
          "Cefalea, compromiso de conciencia, saturación normal",
          "Oxígeno 100% · cámara hiperbárica si es grave",
          "La oximetría de pulso es falsamente normal"
        ]
      ]
    },
    "treatmentTable": {
      "title": "RCP Pediátrica: Parámetros según Edad",
      "headers": [
        "Parámetro",
        "Lactante (< 1 año)",
        "Niño (1 año a pubertad)",
        "Recién Nacido (sala de partos)"
      ],
      "rows": [
        [
          "Pulso para decidir RCP",
          "Braquial",
          "Carotídeo o femoral",
          "Frecuencia cardíaca por auscultación"
        ],
        [
          "Técnica de compresión",
          "2 dedos o 2 pulgares con manos rodeando el tórax",
          "Talón de 1 o 2 manos",
          "2 pulgares sobre el tercio inferior del esternón"
        ],
        [
          "Profundidad",
          "≥ un tercio del tórax (~4 cm)",
          "≥ un tercio del tórax (~5 cm)",
          "Un tercio del tórax"
        ],
        [
          "Relación compresión:ventilación",
          "30:2 (1 reanimador) · 15:2 (2 reanimadores)",
          "30:2 (1 reanimador) · 15:2 (2 reanimadores)",
          "3:1"
        ],
        [
          "Adrenalina",
          "0,01 mg/kg EV/IO cada 3-5 min",
          "0,01 mg/kg EV/IO cada 3-5 min",
          "0,01-0,03 mg/kg EV"
        ],
        [
          "Desfibrilación",
          "2 J/kg, luego 4 J/kg",
          "2 J/kg, luego 4 J/kg",
          "No aplica de rutina"
        ]
      ]
    },
    "vignette": "Niño de 3 años que hace 40 minutos fue encontrado en su casa con un frasco de jarabe vacío. Está somnoliento, con vómitos y sialorrea. Al examen: FC 52 por minuto, FR 36 por minuto con roncus y sibilancias difusas, pupilas puntiformes, fasciculaciones en la lengua y piel húmeda. La madre refiere que guardaba un insecticida en el patio, en un envase de bebida.",
    "explicacion": "Presenta un síndrome colinérgico (miosis, sialorrea, broncorrea, bradicardia y fasciculaciones) por un organofosforado o carbamato. El tratamiento es retirar la ropa y lavar la piel, asegurar la vía aérea y oxígeno, y administrar atropina (0,02-0,05 mg/kg, repetida hasta secar las secreciones) y pralidoxima. No se induce el vómito. Se consulta al CITUC y se hospitaliza. La prevención incluye guardar los plaguicidas bajo llave y en su envase original, nunca en envases de bebidas.",
    "keyPoints": [
      "El paro pediátrico suele ser secundario a hipoxia o shock; el ritmo más frecuente es no desfibrilable (asistolia o AESP), y se trata con RCP de calidad y adrenalina 0,01 mg/kg cada 3 a 5 minutos.",
      "Compresiones de al menos un tercio del tórax, 100 a 120/min; relación 30:2 con un reanimador y 15:2 con dos; en el lactante, técnica de dos pulgares con manos rodeando el tórax.",
      "Desfibrilación pediátrica: 2 J/kg, luego 4 J/kg; amiodarona 5 mg/kg en la FV/TV refractaria.",
      "En el síndrome colinérgico se usa atropina hasta secar secreciones y pralidoxima; en el paracetamol, N-acetilcisteína; en opioides, naloxona.",
      "Ante cáusticos no se induce vómito ni se neutraliza: ayuno y endoscopía digestiva alta en 12 a 48 horas.",
      "Los accidentes son la primera causa de muerte después del año: sueño seguro, cerco de piscinas, medicamentos bajo llave y silla de auto mirando hacia atrás en el asiento trasero."
    ],
    "questions": [
      {
        "stem": "Un lactante de 8 meses es encontrado en paro cardiorrespiratorio después de un episodio de atoro. Se inicia reanimación con compresiones y ventilación. El monitor muestra asistolia. Se logra un acceso intraóseo. ¿Cuál es el fármaco y dosis inicial más adecuados?",
        "options": [
          {
            "id": "A",
            "text": "Atropina 0,02 mg/kg"
          },
          {
            "id": "B",
            "text": "Desfibrilación con 4 J/kg"
          },
          {
            "id": "C",
            "text": "Amiodarona 5 mg/kg"
          },
          {
            "id": "D",
            "text": "Bicarbonato de sodio 1 mEq/kg como primera medida"
          },
          {
            "id": "E",
            "text": "Adrenalina 0,01 mg/kg (0,1 mL/kg de solución 1:10.000), repetida cada 3 a 5 minutos"
          }
        ],
        "correcta": "E",
        "explicacion": "A) Incorrecta. La atropina no se usa de rutina en el paro.\nB) Incorrecta. La asistolia es un ritmo no desfibrilable.\nC) Incorrecta. La amiodarona es para FV o TV sin pulso refractarias.\nD) Incorrecta. El bicarbonato no es de uso inicial.\nE) Correcta. En pediatría el paro suele ser secundario a hipoxia y el ritmo más frecuente es no desfibrilable (asistolia o actividad eléctrica sin pulso). Se mantiene RCP de alta calidad y se administra adrenalina 0,01 mg/kg EV o intraósea lo antes posible, repitiendo cada 3 a 5 minutos.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.020"
      },
      {
        "stem": "Usted y un colega encuentran a un lactante de 6 meses que no responde, no respira y no tiene pulso braquial. Inician la reanimación cardiopulmonar. ¿Cuál es la relación compresiones-ventilaciones y la técnica de compresión recomendada para dos reanimadores?",
        "options": [
          {
            "id": "A",
            "text": "30:2 con el talón de una mano sobre el esternón"
          },
          {
            "id": "B",
            "text": "15:2 con técnica de dos pulgares y manos rodeando el tórax, comprimiendo un tercio del diámetro anteroposterior"
          },
          {
            "id": "C",
            "text": "5:1 con dos dedos"
          },
          {
            "id": "D",
            "text": "3:1 como en el recién nacido"
          },
          {
            "id": "E",
            "text": "Solo compresiones, sin ventilaciones"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La relación 30:2 es para un reanimador; en el lactante no se usa el talón de la mano.\nB) Correcta. Con dos reanimadores la relación es 15:2 y en el lactante se prefiere la técnica de dos pulgares con las manos rodeando el tórax, comprimiendo al menos un tercio del diámetro anteroposterior (unos 4 cm), a 100-120 por minuto.\nC) Incorrecta. La relación 5:1 ya no se usa.\nD) Incorrecta. El 3:1 es para la reanimación neonatal en sala de partos.\nE) Incorrecta. En un paro de causa respiratoria las ventilaciones son esenciales.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.5.012"
      },
      {
        "stem": "Un niño de 4 años, hace 24 horas ingiere 7 comprimidos de algún medicamento desconocido, evolucionando con malestar general, vómitos e ictericia. Se solicitan exámenes, en los que destaca GOT: 403 UI/L, GPT: 390 UI/L, bilirrubina plasmática total: 5,2 mg/dl. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Administrar L-carnitina endovenosa"
          },
          {
            "id": "B",
            "text": "Administrar deferoxamina endovenosa"
          },
          {
            "id": "C",
            "text": "Administrar N-acetil-cisteína endovenosa"
          },
          {
            "id": "D",
            "text": "Administrar carbón activado vía oral"
          },
          {
            "id": "E",
            "text": "Administrar piridoxina vía oral"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La L-carnitina es antídoto de la intoxicación por valproato.\nB) Incorrecta. La deferoxamina es el antídoto del hierro.\nC) Correcta. Un cuadro de vómitos, ictericia y alza de transaminasas a las 24 horas de la ingestión de comprimidos corresponde a la hepatotoxicidad del paracetamol; el antídoto es la N-acetilcisteína, que se indica también cuando ya hay daño hepático.\nD) Incorrecta. A las 24 horas el carbón activado no es útil.\nE) Incorrecta. La piridoxina se usa en la intoxicación por isoniazida.",
        "recTag": "EUNACOM Julio 2017 · Pregunta 108"
      },
      {
        "stem": "Un niño de edad presenta un cuadro de agitación, alternado con obnubilación, asociado a vómitos, sialorrea, diarrea, dolor abdominal, taquicardia, tos, temblor y sudoración. Se sospecha que haya ingerido algún tóxico. ¿Cuál es la conducta inicial?",
        "options": [
          {
            "id": "A",
            "text": "Administrar antieméticos"
          },
          {
            "id": "B",
            "text": "Administrar omeprazol"
          },
          {
            "id": "C",
            "text": "Administrar solución glucosada al 10%"
          },
          {
            "id": "D",
            "text": "Administrar N-acetil.cisteína"
          },
          {
            "id": "E",
            "text": "Administrar atropina"
          }
        ],
        "correcta": "E",
        "explicacion": "A) Incorrecta. Los antieméticos no tratan la causa y no son la prioridad.\nB) Incorrecta. El omeprazol no tiene lugar en el manejo inicial de un toxidrome.\nC) Incorrecta. La glucosa solo se da si hay hipoglicemia documentada.\nD) Incorrecta. La N-acetilcisteína es el antídoto del paracetamol.\nE) Correcta. Sialorrea, vómitos, diarrea, sudoración, tos y compromiso de conciencia configuran un síndrome colinérgico (organofosforados o carbamatos), cuyo tratamiento inicial es la atropina, más pralidoxima, junto con el soporte vital.",
        "recTag": "EUNACOM Julio 2019 · Pregunta 41"
      },
      {
        "stem": "Una niña de 5 años, ingiere accidentalmente soda cáustica, hace 45 minutos. Evoluciona con sialorrea y dolor abdominal y torácico. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Administrar carbon activado"
          },
          {
            "id": "B",
            "text": "Solicitar endoscopía digestiva alta"
          },
          {
            "id": "C",
            "text": "Administrar agente alcalinizante"
          },
          {
            "id": "D",
            "text": "Instalar una sonda nasogástrica y aspirar el contenido"
          },
          {
            "id": "E",
            "text": "Inducir los vómitos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El carbón activado no adsorbe cáusticos y dificulta la endoscopía.\nB) Correcta. En la ingestión de un cáustico con síntomas se deja en ayuno y se realiza endoscopía digestiva alta precoz (dentro de las primeras 12 a 48 horas) para evaluar y graduar la lesión esofágica.\nC) Incorrecta. Con una sustancia alcalina no se administran neutralizantes; agravan la lesión por reacción exotérmica.\nD) Incorrecta. La sonda nasogástrica a ciegas puede perforar el esófago lesionado.\nE) Incorrecta. Inducir el vómito reexpone el esófago al cáustico y puede causar aspiración.",
        "recTag": "EUNACOM Julio 2016 · Pregunta 95"
      },
      {
        "stem": "En el control de salud de un lactante de 6 meses, los padres preguntan cómo deben trasladarlo en el automóvil. ¿Cuál es la recomendación correcta?",
        "options": [
          {
            "id": "A",
            "text": "En brazos de un adulto en el asiento trasero"
          },
          {
            "id": "B",
            "text": "En silla de auto en el asiento delantero frente al airbag"
          },
          {
            "id": "C",
            "text": "En silla de auto mirando hacia adelante, en el asiento delantero"
          },
          {
            "id": "D",
            "text": "Con el cinturón de seguridad del adulto"
          },
          {
            "id": "E",
            "text": "En silla de auto mirando hacia atrás, en el asiento trasero"
          }
        ],
        "correcta": "E",
        "explicacion": "A) Incorrecta. Nunca debe viajar en brazos: en una frenada el adulto no puede sujetarlo.\nB) Incorrecta. El airbag activo puede causar lesiones graves o la muerte.\nC) Incorrecta. Antes de los 2 años debe ir mirando hacia atrás, y siempre en el asiento trasero.\nD) Incorrecta. El cinturón del adulto no se ajusta a un lactante.\nE) Correcta. Los lactantes deben viajar en un sistema de retención infantil mirando hacia atrás, en el asiento trasero, idealmente hasta los 2 años o más, porque protege cabeza y cuello.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.3.008"
      }
    ]
  }
];

const bloque2Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowPediatria(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque2Classes };
