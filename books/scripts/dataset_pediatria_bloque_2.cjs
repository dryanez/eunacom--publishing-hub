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
  }
];

const bloque2Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowPediatria(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque2Classes };
