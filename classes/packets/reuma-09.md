# CLASE reuma-09 · Reumatologia 9.9: Nefritis Lúpica y Compromiso Orgánico Mayor en LES: Clasificación, Biopsia y Terapia Inmunosupresora

Escribe `classes/lessons/reuma-09.cjs` siguiendo el PAQUETE COMÚN. El `id` es "reuma-09" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- reuma-06: Reumatologia 9.6: Artritis Reumatoide: Fisiopatología, Criterios ACR/EULAR 2010 y Manifestaciones Extraarticulares
- reuma-07: Reumatologia 9.7: Artritis Reumatoide: Farmacoterapia, FARME Convencionales, Biológicos y GES
- reuma-08: Reumatologia 9.8: Lupus Eritematoso Sistémico (LES): Inmunopatogenia, Criterios EULAR/ACR 2019 y Manejo Basal
- reuma-10: Reumatologia 9.10: Lupus Cutáneo (Subagudo y Crónico Discoide) y Lupus Inducido por Drogas
- reuma-11: Reumatologia 9.11: Síndrome Antifosfolípido (SAF): Criterios de Sydney, Trombosis Vascular y Manejo Obstétrico
- reuma-12: Reumatologia 9.12: Esclerosis Sistémica: Cutánea Difusa (Anti-Scl-70) vs Limitada / CREST (Anti-Centrómero) y Crisis Renal

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "reuma-09",
  "classId": "reuma-09",
  "tier": 3,
  "blockNum": 2,
  "blockName": "Artritis Reumatoide y Enfermedades del Tejido Conectivo",
  "topicLabel": "9.9",
  "title": "Nefritis Lúpica y Compromiso Orgánico Mayor en LES: Clasificación, Biopsia y Terapia Inmunosupresora",
  "perfilCode": "1.05.1.001",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Garantía Explícita en Salud (GES): Nefritis Lúpica · Biopsia renal, inducción y mantenimiento cubiertos",
  "reconstrucciones": "EUNACOM 2017 Q#18 · EUNACOM 2019 Q#49 · EUNACOM 2021 Q#05 · EUNACOM 2023 Q#12",
  "frecuencia": "Muy Alta · Emergencia nefrológica y reumatológica de alto riesgo vital",
  "algoTitle": "Algoritmo de Nefritis Lúpica: Biopsia Renal Clasificatoria e Inducción con Pulsos",
  "diagram": {
    "title": "Algoritmo de Nefritis Lúpica: Biopsia Renal Clasificatoria e Inducción con Pulsos",
    "svg": "<svg viewBox=\"0 0 620 328\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n<rect class=\"acc\" x=\"12\" y=\"8\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de Nefritis Lúpica (Proteinuria &gt; 0.5 g/24h o Sedimento Activo)</text>\n<text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Hematuria glomerular (cilindros hemáticos) · Deterioro de VFG · Anti-dsDNA alto con C3/C4 bajos</text>\n<path class=\"ln\" d=\"M310,47 V69\"/>\n<rect class=\"warn\" x=\"12\" y=\"69\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Paso Mandatorio de Diagnóstico y Pronóstico: Biopsia Renal</text>\n<text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Clasificación histológica ISN/RPS (Clases I a VI) e índice de actividad/cronicidad</text>\n<path class=\"ln\" d=\"M310,108 V130\"/>\n<rect class=\"dec\" x=\"70\" y=\"130\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"145\" text-anchor=\"middle\" font-weight=\"700\">Clasificación Histológica ISN/RPS en Biopsia</text>\n<text class=\"sub\" x=\"310\" y=\"157\" text-anchor=\"middle\">Decisión terapéutica según tipo proliferativo vs no proliferativo</text>\n<path class=\"ln\" d=\"M310,169 V199 H158 V209\"/>\n<path class=\"ln\" d=\"M310,199 H462 V209\"/>\n<text class=\"lbl\" x=\"158\" y=\"194\" text-anchor=\"middle\">Clase III (Focal) y Clase IV (Proliferativa Difusa)</text>\n<text class=\"lbl\" x=\"462\" y=\"194\" text-anchor=\"middle\">Clase V (Membranosa)</text>\n<rect class=\"warn\" x=\"12\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Nefritis Proliferativa Activa (Mayor Gravedad)</text>\n<text class=\"warnT sub\" x=\"158\" y=\"236\" text-anchor=\"middle\">Pulsos Metilprednisolona EV (0.5-1g x 3d) +</text>\n<text class=\"warnT sub\" x=\"158\" y=\"247\" text-anchor=\"middle\">Micofenolato Mofetilo (2-3g/d) o Ciclofosfamida</text>\n<rect class=\"dec\" x=\"316\" y=\"209\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"t t\" x=\"462\" y=\"224\" text-anchor=\"middle\" font-weight=\"700\">Síndrome Nefrótico Puro</text>\n<text class=\"sub\" x=\"462\" y=\"236\" text-anchor=\"middle\">Corticoides orales + Micofenolato o Inhibidores</text>\n<text class=\"sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">de Calcineurina (Tacrolimus) + IECA/ARA-II</text>\n<path class=\"ln\" d=\"M158,259 V269 H310 V281\"/>\n<path class=\"ln\" d=\"M462,259 V269 H310 V281\"/>\n<rect class=\"acc\" x=\"12\" y=\"281\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Fase de Mantenimiento Prolongada (Mínimo 3 a 5 Años)</text>\n<text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">Micofenolato Mofetilo (1-2 g/día) o Azatioprina (2 mg/kg/día) + Dosis bajas de Prednisona + HCQ</text>\n</svg>"
  },
  "contexto": "La nefritis lúpica es la principal causa de morbimortalidad en pacientes con LES. Hasta el 50% de los pacientes lúpicos desarrollan compromiso renal durante el curso de su enfermedad. El EUNACOM evalúa con alta frecuencia la indicación de biopsia renal frente a proteinuria o sedimento urinario activo, el reconocimiento de la Clase IV (proliferativa difusa) como la más agresiva y el esquema de rescate con pulsos de metilprednisolona y micofenolato mofetilo.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología Renal y Mecanismos de Daño Glomerular",
      "paragraphs": [
        "La nefritis lúpica se origina por el <strong>depósito de inmunocomplejos circulantes ADN-anti-ADN</strong> en las distintas estructuras del glomérulo, o por la unión in situ de autoanticuerpos a antígenos plantados en la membrana basal glomerular.",
        "La localización del depósito determina el patrón histopatológico y clínico:",
        "• <strong>Depósitos Subendoteliales:</strong> Producen inflamación vascular directa en contacto con la sangre, activación masiva del complemento, reclutamiento masivo de neutrófilos y proliferación celular endocapilar severa (patrón <strong>proliferativo: Clases III y IV</strong>), cursando con síndrome nefrítico, hematuria con cilindros hemáticos, falla renal rápida e hipocomplementemia intensa.",
        "• <strong>Depósitos Subepiteliales:</strong> Localizados entre la membrana basal y los podocitos (fuera de la circulación directa). Provocan daño podocitario y alteración de la barrera de filtración con proteinuria masiva (patrón <strong>membranoso: Clase V</strong>), cursando con síndrome nefrótico puro sin proliferación celular acusada."
      ]
    },
    {
      "subhead": "2. Clasificación Histológica Internacional ISN/RPS (2004/2018)",
      "paragraphs": [
        "La <strong>biopsia renal percutánea es obligatoria</strong> ante: proteinuria persistente ≥ 0.5 g/24 horas (o relación proteinuria/creatininuria en orina aislada ≥ 0.5 mg/mg), sedimento urinario activo (≥ 5 hematíes por campo de origen glomerular, acantocitos o cilindros hemáticos) o deterioro inexplicable de la función renal.",
        "<strong>Las 6 Clases Histológicas de la ISN/RPS:</strong>",
        "• <strong>Clase I (Mesangial mínima):</strong> Glomérulos normales en microscopía óptica con depósitos mesangiales en inmunofluorescencia. Rara, asintomática, excelente pronóstico.",
        "• <strong>Clase II (Proliferativa mesangial):</strong> Hipercelularidad mesangial pura. Microhematuria y proteinuria leve (< 1 g/24h). No requiere inmunosupresión agresiva.",
        "• <strong>Clase III (Proliferativa focal):</strong> Proliferación endo o extracapilar que afecta a <strong>< 50% de los glomérulos</strong>. Síndrome nefrítico/nefrótico.",
        "• <strong>Clase IV (Proliferativa difusa):</strong> La forma <strong>MÁS FRECUENTE (40-50%), MÁS GRAVE Y DE PEOR PRONÓSTICO</strong>. Compromete a <strong>≥ 50% de los glomérulos</strong>. Se observan asas capilares engrosadas en <em>asa de alambre (wire-loop)</em>, necrosis fibrinoide, semilunas celulares y trombos hialinos. Cursa con síndrome nefrítico-nefrótico severo, hipertensión arterial grave, falla renal aguda, títulos elevados de Anti-dsDNA y marcada caída de C3 y C4. Sin tratamiento progresa rápidamente a uremia terminal.",
        "• <strong>Clase V (Membranosa):</strong> Engrosamiento difuso de la pared capilar con depósitos subepiteliales continuos. Cursa con <strong>síndrome nefrótico florido puro</strong> (edema masivo, hipoalbuminemia, dislipidemia) y alto riesgo de trombosis venosa profunda o de la vena renal. Complemento frecuentemente normal o levemente bajo.",
        "• <strong>Clase VI (Esclerosante avanzada):</strong> Esclerosis de ≥ 90% de los glomérulos. Insuficiencia renal crónica terminal que requiere diálisis; no responde a inmunosupresores."
      ]
    },
    {
      "subhead": "3. Tratamiento de Inducción de la Remisión (Clases Proliferativas III y IV)",
      "paragraphs": [
        "El objetivo en las formas proliferativas activas (Clases III y IV) es frenar de inmediato la inflamación necrotizante para evitar la fibrosis irreversible:",
        "<strong>Esquema de Inducción Inmunosupresora:</strong>",
        "1. <strong>Glucocorticoides a Dosis Altas:</strong>",
        "• Inicio con <strong>Pulsos de Metilprednisolona endovenosa: 500 a 1.000 mg/día por 3 días consecutivos</strong>.",
        "• Seguido de <strong>Prednisona oral: 0.5 a 1 mg/kg/día</strong> (típicamente 40-60 mg/día) con pauta de descenso progresivo rápido semanal hasta alcanzar dosis de mantención ≤ 5-7.5 mg/día a los 3-6 meses.",
        "2. <strong>Inmunosupresor Mayor Concomitante (Elegir una de dos opciones):</strong>",
        "• <strong>Micofenolato Mofetilo (MMF):</strong> Dosis: <strong>2 a 3 g/día vía oral</strong> divididos en 2 tomas. Es el fármaco de <strong>primera elección</strong> en la actualidad por su excelente tasa de remisión, menor toxicidad gonadal y mayor eficacia en pacientes no caucásicos e hispanos.",
        "• <strong>Ciclofosfamida Endovenosa:</strong> Esquema Euro-Lupus (dosis bajas: 500 mg EV cada 2 semanas por 6 dosis = 3 meses) o esquema clásico NIH (dosis altas mensuales: 0.5 a 1 g/m² EV mensual por 6 meses). De elección ante compromiso renal rápidamente progresivo con semilunas masivas o compromiso neurológico concomitante. <em>Toxicidad:</em> cistitis hemorrágica (prevenir con hidratación y Mesna), infertilidad/falla ovárica precoz y neoplasias secundarias.",
        "3. <strong>Terapias Coadyuvantes Obligatorias:</strong> Hidroxicloroquina en todos los pacientes, IECA o ARA-II (enalapril/losartán) para control estricto de PA (< 120-130/80 mmHg) y reducción de proteinuria, estatinas para dislipidemia y profilaxis contra <em>Pneumocystis jirovecii</em> con Cotrimoxazol durante la inmunosupresión profunda."
      ]
    },
    {
      "subhead": "4. Terapia de Mantenimiento de la Remisión y Seguimiento a Largo Plazo",
      "paragraphs": [
        "Una vez alcanzada la remisión parcial o completa (habitualmente a los 6 meses):",
        "• Fármaco de primera elección: <strong>Micofenolato Mofetilo (1 a 2 g/día vía oral)</strong>.",
        "• Alternativa: <strong>Azatioprina (2 mg/kg/día oral)</strong>, de elección obligada si la paciente planea embarazo (el micofenolato es teratogénico y debe suspenderse al menos 6 semanas antes de la concepción).",
        "• Se asocian dosis bajas de Prednisona (2.5 a 5 mg/día) y se mantiene Hidroxicloroquina.",
        "• <strong>Duración de la mantención:</strong> Mínimo <strong>3 a 5 años de tratamiento continuo</strong> antes de considerar una reducción muy lenta y tentativa de la inmunosupresión."
      ]
    }
  ],
  "table": {
    "title": "Clasificación Histológica ISN/RPS de Nefritis Lúpica y Manejo Clínico",
    "headers": [
      "Clase Histológica",
      "Patología Renal Dominante",
      "Presentación Clínica Típica",
      "Esquema Terapéutico de Elección"
    ],
    "rows": [
      [
        "Clase I (Mesangial mínima)",
        "Glomérulos normales en MO; depósitos mesangiales en IF",
        "Sedimento normal o microhematuria leve",
        "Manejo basal con Hidroxicloroquina"
      ],
      [
        "Clase II (Proliferativa mesangial)",
        "Hipercelularidad mesangial pura",
        "Microhematuria y proteinuria < 1 g/24h",
        "Corticoides orales solo si síntomas extra-renales"
      ],
      [
        "Clase III (Proliferativa focal)",
        "Proliferación endo/extracapilar en < 50% de glomérulos",
        "Síndrome nefrítico, proteinuria, hipertensión",
        "Pulsos Metilprednisolona + Micofenolato o Ciclofosfamida"
      ],
      [
        "Clase IV (Proliferativa difusa)",
        "Proliferación en ≥ 50% glomérulos; asas en alambre",
        "Síndrome nefrítico-nefrótico severo, falla renal aguda",
        "Pulsos Metilprednisolona + MMF (2-3g/d) o Ciclofosfamida"
      ],
      [
        "Clase V (Membranosa)",
        "Depósitos subepiteliales; engrosamiento de pared",
        "Síndrome nefrótico florido puro, riesgo de TVP",
        "Prednisona + Micofenolato o Tacrolimus + IECA/ARA-II"
      ],
      [
        "Clase VI (Esclerosante avanzada)",
        "Esclerosis global en ≥ 90% de los glomérulos",
        "Insuficiencia renal crónica avanzada, uremia",
        "Preparación para Terapia de Reemplazo Renal / Diálisis"
      ]
    ]
  },
  "severityTable": {
    "title": "Indicaciones Formales de Biopsia Renal en Lupus Eritematoso Sistémico",
    "headers": [
      "Parámetro Clínico / Urinario",
      "Punto de Corte / Criterio Formal",
      "Urgencia del Procedimiento",
      "Objetivo de la Biopsia"
    ],
    "rows": [
      [
        "Proteinuria Aislada",
        "Proteinuria ≥ 0.5 g/24h (o IPC ≥ 0.5 mg/mg)",
        "Programada prioritaria (< 1-2 semanas)",
        "Diferenciar Clase V membranosa de proliferativas"
      ],
      [
        "Sedimento Urinario Activo",
        "Hematuria glomerular (≥ 5 hematíes/campo o cilindros hemáticos)",
        "Urgente (< 48-72 horas)",
        "Confirmar proliferación activa endocapilar y necrosis"
      ],
      [
        "Deterioro de Función Renal",
        "Alza aguda de creatinina no explicada por deshidratación",
        "Urgente inmediata (< 24-48 horas)",
        "Detectar semilunas extracapilares y rescatar parénquima"
      ],
      [
        "Refractariedad Terapéutica",
        "Persistencia de proteinuria > 1-2 g tras 6-12 meses de terapia",
        "Electiva",
        "Evaluar índice de actividad vs índice de cronicidad"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Esquema de Inducción y Mantenimiento en Nefritis Lúpica Proliferativa (Clase III/IV)",
    "headers": [
      "Fase del Protocolo",
      "Fármacos y Dosificación",
      "Duración Estimada",
      "Monitoreo de Respuesta"
    ],
    "rows": [
      [
        "Inducción Aguda (Semana 1)",
        "Pulsos Metilprednisolona EV 500-1000 mg/d x 3 días + MMF 2-3 g/d",
        "1 semana",
        "Control de PA, glicemia, balance hídrico y creatinina"
      ],
      [
        "Inducción Continuada (Meses 1-6)",
        "Prednisona oral 0.5-1 mg/kg/d (descenso gradual) + MMF 2-3 g/d",
        "6 meses",
        "Proteinuria de 24h, sedimento urinario, C3/C4 y Anti-dsDNA"
      ],
      [
        "Mantenimiento (Años 1-5)",
        "Micofenolato 1-2 g/d (o Azatioprina 2mg/kg/d) + Prednisona ≤ 5mg/d",
        "3 a 5 años mínimo",
        "Creatinina sérica y proteinuria cada 2-3 meses"
      ],
      [
        "Terapia Adyuvante Universal",
        "Hidroxicloroquina ≤ 5 mg/kg/d + Enalapril/Losartán + Cotrimoxazol",
        "Indefinida",
        "Fondo de ojo anual tras 5 años; PA < 120/80"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 24 años con antecedente de LES diagnosticado hace 1 año en tratamiento irregular con hidroxicloroquina. Consulta por edema progresivo de extremidades inferiores hasta rodillas, orinas espumosas y cefalea. Al examen físico destaca PA 160/100 mmHg, edema pretibial +++ con fóvea, y eritema malar tenue. Los exámenes de laboratorio revelan: creatinina plasmática 1.9 mg/dL (basal de 0.8 mg/dL hace 4 meses), nitrógeno ureico 38 mg/dL, albúmina sérica 2.4 g/dL. El examen de orina muestra proteinuria de 3.8 g/24 horas y sedimento con 30-40 glóbulos rojos dismórficos por campo y cilindros hemáticos. El complemento C3 está en 42 mg/dL y el Anti-dsDNA fuertemente positivo.",
    "conducta": "La paciente presenta una Nefritis Lúpica proliferativa activa grave (síndrome nefrítico-nefrótico con deterioro agudo de función renal e hipertensión severa). La conducta diagnóstica de elección e inmediata es la realización de una biopsia renal percutánea para clasificar el daño (altamente sospechosa de Clase IV proliferativa difusa). El tratamiento de inducción urgente consiste en hospitalización, administración de pulsos de Metilprednisolona endovenosa (500 a 1.000 mg/día por 3 días) asociados a Micofenolato Mofetilo a dosis plenas (2-3 g/día) o Ciclofosfamida EV, más control riguroso de la presión arterial y soporte nefrológico."
  },
  "explicacion": "La paciente presenta una Nefritis Lúpica proliferativa activa grave (síndrome nefrítico-nefrótico con deterioro agudo de función renal e hipertensión severa). La conducta diagnóstica de elección e inmediata es la realización de una biopsia renal percutánea para clasificar el daño (altamente sospechosa de Clase IV proliferativa difusa). El tratamiento de inducción urgente consiste en hospitalización, administración de pulsos de Metilprednisolona endovenosa (500 a 1.000 mg/día por 3 días) asociados a Micofenolato Mofetilo a dosis plenas (2-3 g/día) o Ciclofosfamida EV, más control riguroso de la presión arterial y soporte nefrológico.",
  "keyPoints": [
    "La nefritis lúpica afecta hasta al 50% de los pacientes con LES y es su principal causa de morbimortalidad.",
    "La biopsia renal es el patrón de oro y está indicada formalmente ante proteinuria ≥ 0.5 g/24h o sedimento activo.",
    "La Clase IV (Proliferativa Difusa) es la más frecuente, más agresiva y de peor pronóstico si no se trata a tiempo.",
    "La Clase IV cursa típicamente con sedimento activo (cilindros hemáticos), hipocomplementemia severa y anti-dsDNA elevado.",
    "La Clase V (Membranosa) cursa con síndrome nefrótico puro con alto riesgo trombótico.",
    "El tratamiento de inducción de nefritis proliferativa requiere pulsos de Metilprednisolona EV + Micofenolato Mofetilo (o Ciclofosfamida).",
    "El Micofenolato Mofetilo es el inmunosupresor de primera línea para inducción y mantenimiento.",
    "La terapia de mantenimiento debe prolongarse por un mínimo estricto de 3 a 5 años."
  ],
  "questions": [
    {
      "stem": "Una paciente de 20 años consulta por fiebre, astenia, artralgias y hematuria.\nAl examen físico se aprecia artritis de manos, sin otras alteraciones. En sus\nexámenes generales destaca elevación de la creatinina hasta 2,1 mg/dl y\nhematuria dismórfica. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Esclerodermia"
        },
        {
          "id": "B",
          "text": "Crioglobulinemia"
        },
        {
          "id": "C",
          "text": "Poliangeítis microscópica"
        },
        {
          "id": "D",
          "text": "Lupus"
        },
        {
          "id": "E",
          "text": "Artritis reumatoide"
        }
      ],
      "correcta": "D",
      "explicacion": "La alternativa correcta es Lupus Eritematoso Sistémico (LES) debido a la combinación de síntomas y hallazgos de laboratorio presentados. La paciente de 20 años presenta:\n\n*   **Fiebre y Astenia:** Síntomas constitucionales comunes en enfermedades autoinmunes como el LES.\n*   **Artralgias y Artritis de manos:** La artritis en pequeñas articulaciones como las manos es característica de enfermedades autoinmunes.\n*   **Hematuria:** Sugiere afectación renal, lo cual es frecuente en el LES, específicamente la nefritis lúpica.\n*   **Elevación de la Creatinina:** Indica insuficiencia renal, lo que apoya aún más la posibilidad de nefritis lúpica.\n*   **Hematuria Dismórfica:** Apoya la afectación glomerular, lo cual es característico de la nefritis lúpica.\n\nLa nefritis lúpica es una manifestación grave del LES, y la hematuria y la elevación de la creatinina son hallazgos importantes para sospecharla. Según la guía clínica del MINSAL sobre Lupus Eritematoso Sistémico (si bien no existe una guía específica del MINSAL para LES, las guías de manejo de enfermedades autoinmunes del MINSAL generalmente recomiendan una evaluación exhaustiva ante sospecha de compromiso renal), la presencia de compromiso renal obliga a una evaluación diagnóstica completa que incluye biopsia renal para confirmar el diagnóstico y determinar el grado de afectación.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.014"
    },
    {
      "stem": "Un hombre de 68 años, diabético tipo 2, en tratamiento con dieta desde hace\n10 años, presenta astenia y edema de extremidades inferiores. El examen físico\nno presenta otras alteraciones. Se solicitan exámenes que constatan un\nclearence de creatinina de 30 ml/min, BUN: 50 mg/dl, proteinuria de 24 horas de\n1,2 gramos, sedimento de orina con 0-2 glóbulos rojos por campo, sin\nleucocituria, albuminemia de 4,2 g/dl, HbA1c: 8% y perfil lipídico con\n­3/endocrinologia­diabetologia­y­nutriciondiabetes­y­nutricion/ 4/9 hipercolesterolemia. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Nefropatía diabética"
        },
        {
          "id": "B",
          "text": "Glomeruloesclerosis focal y segmentaria"
        },
        {
          "id": "C",
          "text": "Glomeruloesclerosis difusa"
        },
        {
          "id": "D",
          "text": "Glomerulopatía membranosa"
        },
        {
          "id": "E",
          "text": "Nefritis intersticial"
        }
      ],
      "correcta": "A",
      "explicacion": "El diagnóstico más probable es nefropatía diabética debido a la constelación de hallazgos clínicos y de laboratorio en un paciente con un factor de riesgo claro y de larga data. Se trata de un hombre con 10 años de evolución de diabetes mellitus tipo 2 y un control glucémico deficiente (HbA1c: 8%), lo cual es el principal factor de riesgo para el desarrollo de complicaciones microvasculares, incluyendo el daño renal. La presentación clínica con astenia y edema de extremidades inferiores es compatible con una enfermedad renal crónica (ERC) avanzada, donde la astenia puede ser secundaria a la uremia (BUN elevado) y/o anemia de la ERC, y el edema se explica por la retención de sodio y agua debido a la disminución de la tasa de filtración glomerular.\n\nLos exámenes de laboratorio confirman la presencia de una ERC avanzada con características típicas de la nefropatía diabética. Un clearence de creatinina de 30 ml/min lo sitúa en una etapa G4 de ERC. La proteinuria de 1,2 gramos en 24 horas corresponde a una proteinuria en rango nefrótico (o macroalbuminuria), un sello distintivo de esta complicación. Es crucial notar que el sedimento de orina es \"blando\", es decir, sin hematuria ni leucocituria significativas, lo que es característico de la nefropatía diabética y ayuda a descartar glomerulonefritis activas o nefritis intersticiales. Aunque la albuminemia es normal, esto no descarta el diagnóstico, ya que el síndrome nefrótico completo (proteinuria >3.5g/día, hipoalbuminemia, edema, hiperlipidemia) no siempre está presente. La combinación de diabetes de larga evolución, mal control, ERC y proteinuria con sedimento blando hace que la nefropatía diabética sea la principal sospecha, sin necesidad inicial de una biopsia renal.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.014"
    },
    {
      "stem": "Un niño de 6 años presenta un cuadro caracterizado por orinas espumosas y\naumento de volumen facial, especialmente en los párpados. Al examen físico se\naprecia edema facial y de extremidades, presión arterial normal, sin otras\nalteraciones. Se solicitan exámenes que muestran creatinina: 0,6 mg/dl,\nproteinuria de 100 mg/m2/hora, albuminemia: 2,8 g/dl, elevación del colesterol,\nsedimento de orina normal, ANA negativos, ANCA negativos y complemento\nnormal. La conducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Iniciar furosemida"
        },
        {
          "id": "B",
          "text": "Iniciar prednisona"
        },
        {
          "id": "C",
          "text": "Iniciar enalapril"
        },
        {
          "id": "D",
          "text": "Realizar biopsia renal"
        },
        {
          "id": "E",
          "text": "Observar evolución"
        }
      ],
      "correcta": "B",
      "explicacion": "El caso clínico describe a un niño de 6 años con un cuadro clásico de **Síndrome Nefrótico Idiopático (SNI)**. Los elementos clave que apoyan este diagnóstico son:\n1.  **Presentación clínica:** Edema de inicio insidioso, con predominio facial y palpebral (\"anasarca\"), y orinas espumosas (signo de proteinuria masiva).\n2.  **Tétrada del Síndrome Nefrótico:**\n    *   **Proteinuria en rango nefrótico:** 100 mg/m2/hora (el criterio es >40 mg/m2/hora).\n    *   **Hipoalbuminemia:** 2.8 g/dl (el criterio es <3.0 g/dl, aunque clásicamente se usa <2.5 g/dl).\n    *   **Edema:** Presente en el examen físico.\n    *   **Hiperlipidemia:** Mencionada como \"elevación del colesterol\" (es una consecuencia de la hipoalbuminemia, por aumento de la síntesis hepática de lipoproteínas).\n3.  **Ausencia de signos nefríticos:** El paciente tiene presión arterial normal, creatinina normal (función renal conservada) y un sedimento de orina normal (sin hematuria ni cilindros), lo que aleja la sospecha de un síndrome nefrítico.\n4.  **Estudio inmunológico negativo:** ANA, ANCA y complemento normales descartan causas secundarias comunes como lupus o vasculitis.\n\nEn niños de 1 a 10 años con esta presentación clásica, la causa más probable (aproximadamente 90% de los casos) es la **Enfermedad de Cambios Mínimos (ECM)**. Esta patología se caracteriza por su excelente respuesta a los corticoides. Por lo tanto, el manejo inicial estándar y de primera línea, sin necesidad de una biopsia previa, es iniciar un ciclo de **prednisona** oral a dosis altas (60 mg/m2/día o 2 mg/kg/día) con el objetivo de inducir la remisión.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.014"
    },
    {
      "stem": "Un paciente de 67 años consulta por artralgias y fiebre de 3 días de\nevolución, asociados a hematuria y oliguria importante. En sus exámenes\ngenerales se aprecia hematuria dismórfica, elevación de la creatinina hasta 3,5\nmg/dl, anticuerpos antinucleares negativos y anticuerpos anticitoplasma de\nneutrófilos positivos en patrón perinuclear. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Poliangeítis microscópica"
        },
        {
          "id": "B",
          "text": "Panarteritis nodosa"
        },
        {
          "id": "C",
          "text": "Vasculitis granulomatosa de Wegener"
        },
        {
          "id": "D",
          "text": "Vasculitis alérgica de Churg-Strauss"
        },
        {
          "id": "E",
          "text": "Arteritis de la temporal Respuestas: Prueba 13 Diabetes y Nutrición + Reumatología Preguntas Respuestas 1 C 2 E 3 C 4 A 5 E 6 A 7 C 8 B 9 D 10 E ­3/endocrinologia­diabetologia­y­nutriciondiabetes­y­nutricion6 11 E P1re2paración EUNACOM C 13 B 14 B 15 B 16 D 17 E 18 B 19 C 20 A Todos los Derechos Reservados para DrGuevara ­3/endocrinologia­diabetologia­y­nutriciondiabetes­y­nutricion6"
        }
      ],
      "correcta": "A",
      "explicacion": "El paciente presenta un cuadro clínico altamente sugestivo de una vasculitis sistémica que afecta predominantemente los vasos pequeños, manifestándose como una glomerulonefritis rápidamente progresiva (RPGN). Esto se evidencia por la oliguria importante, la elevación aguda de la creatinina a 3,5 mg/dl (indicando lesión renal aguda severa) y la hematuria dismórfica, que es característica de un origen glomerular. Los síntomas sistémicos como artralgias y fiebre de 3 días de evolución refuerzan la idea de un proceso inflamatorio generalizado.\n\nEl perfil inmunológico es clave para el diagnóstico diferencial. La presencia de anticuerpos antinucleares (ANA) negativos descarta lupus eritematoso sistémico y otras enfermedades autoinmunes que comúnmente cursan con ANA positivos. Sin embargo, los anticuerpos anticitoplasma de neutrófilos (ANCA) positivos con patrón perinuclear (p-ANCA) son un hallazgo crucial. El p-ANCA se asocia principalmente a la presencia de anticuerpos anti-mieloperoxidasa (anti-MPO) y es un marcador característico de las vasculitis asociadas a ANCA, especialmente la poliangeítis microscópica (MPA). La MPA es una vasculitis necrotizante de vasos pequeños que afecta capilares, vénulas y arteriolas, y la afectación renal en forma de glomerulonefritis necrotizante pauciinmune (con poca o ninguna evidencia de depósito de inmunocomplejos en la biopsia renal) es una de sus manifestaciones más frecuentes y graves, coincidiendo perfectamente con la presentación del paciente.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.014"
    }
  ],
  "vignetteText": "Mujer de 24 años con antecedente de LES diagnosticado hace 1 año en tratamiento irregular con hidroxicloroquina. Consulta por edema progresivo de extremidades inferiores hasta rodillas, orinas espumosas y cefalea. Al examen físico destaca PA 160/100 mmHg, edema pretibial +++ con fóvea, y eritema malar tenue. Los exámenes de laboratorio revelan: creatinina plasmática 1.9 mg/dL (basal de 0.8 mg/dL hace 4 meses), nitrógeno ureico 38 mg/dL, albúmina sérica 2.4 g/dL. El examen de orina muestra proteinuria de 3.8 g/24 horas y sedimento con 30-40 glóbulos rojos dismórficos por campo y cilindros hemáticos. El complemento C3 está en 42 mg/dL y el Anti-dsDNA fuertemente positivo."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "nefritis, compromiso, organico, clasificacion, biopsia")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2019 · Pregunta 165 · confianza 0.62
Un paciente alcohólico, fumador de 10 paquetes año, presenta, desde hace 7 días, un cuadro de tos, con expectoración purulenta y fiebre hasta 38°C. Ha evolucionado con empeoramiento de los síntomas. Al examen físico está febril, con apremio respiratorio. Se solicita una radiografía de tórax, que se muestra a continuación: El examen más adecuado para proseguir el estudio es:
- A) Broncoscopía
- B) Videotoracoscopía
- C) TAC de tórax
- D) PET-TC
- E) Resonancia magnética nuclear de tórax
**Correcta: C**
Explicación del banco: Tiene un absceso pulmonar gigante. El manejo es discutible, pero la TAC podrá identificarlo mejor y descartar que haya un cáncer debajo. La broncoscopía también aparece como una opción aceptable, ya que permitiría el drenaje, pero la TAC igualmente debe solicitarse antes y, además, el tratamiento suele ser con clindamicina endovenosa, más drenaje postural, por lo que la broncoscopía solo se hace si falla.

### [2] EUNACOM Julio 2025 · Pregunta 163 · confianza 0.97
Joven de 25 años con diarrea crónica de 8 meses, 5-6 deposiciones al día sin sangre, pérdida de peso de 7 kg, úlceras orales recurrentes, dolor abdominal periumbilical y fístula perianal. Colonoscopía: úlceras aftosas con mucosa normal entre ellas (patrón en empedrado). ¿Cuál es el diagnóstico?
- A) Síndrome de intestino irritable
- B) Colitis ulcerosa
- C) Enfermedad de Crohn
- D) Tuberculosis intestinal
- E) Linfoma intestinal
**Correcta: C**
Explicación del banco: Enfermedad de Crohn: compromiso transmural + patrón en empedrado + úlceras aftosas con mucosa intercalada normal + fístula perianal + úlceras orales + localización que puede ser cualquier tramo del tubo digestivo. La CU no tiene fístulas ni compromiso ileal típico ni úlceras orales.

### [3] EUNACOM Diciembre 2018 · Pregunta 4 · confianza 0.97
Un paciente ingresa al servicio de urgencia, por un cuadro de disnea marcada y síncopes. Al examen físico está confuso, con pulso de 200 latidos por minuto, regular y presión arterial de 70/40 mmHg. Además, tiene frialdad de extremidades y piel sudorosa. ¿Cuál es el tratamiento inicial más adecuado en este momento?
- A) Maniobras vagales
- B) Amiodarona endovenosa
- C) Adenosina endovenosa
- D) Desfibrilación
- E) Cardioversión eléctrica
**Correcta: E**
Explicación del banco: Por tener compromiso hemodinámico, da igual de qué taquiarritmia se trate y se debe cardiovertir eléctricamente (no confundir con la desﬁbrilación, que se usa en el paro con FV o TVSP).

### [4] EUNACOM Julio 2018 · Pregunta 66 · confianza 0.97
Un hombre de 34 años presenta erección dolorosa, desde hace 8 horas. Al examen tiene cuerpos cavernosos duros, pero con glande y cuerpos esponjosos blandos. ¿Cuál es la conducta inicial más adecuada?
- A) Aplicar paños fríos en la zona genital
- B) Fenilefrina endovenosa
- C) Vaciamiento quirúrgico de los cuerpos cavernosos.
- D) Drenaje con suero fisiológico frío intracavernoso
- E) Fenilefrina intracavernosa Respuesta: (Nota: La imagen se corta antes de mostrar la explicación o la respuesta correcta, pero la conducta inicial para un priapismo isquémico suele ser el drenaje y la inyección de fenilefrina intracavernosa).
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Vaciamiento quirúrgico de los cuerpos cavernosos.** (opción **C**). La resolución quirúrgica urgente constituye la única medida definitiva capaz de controlar el foco séptico, revertir la isquemia o evitar la muerte materna/fetal frente a este compromiso clínico severo.

### [5] EUNACOM Julio 2016 · Pregunta 102 · confianza 0.97
Una paciente de 61 años consulta por dolor articular de ambas manos. Al examen se aprecia aumento de volumen de las articulaciones interfalángicas proximales y distales. Se solicita radiografía de manos, que muestra disminución simétrica del espacio interarticular de las articulaciones interfalángicas, con compromiso de la primera articulación carpometacarpiana bilateral, con presencia de quistes subcondrales. Los ANA y FR resultan positivos. El diagnóstico más probable es:
- A) Artritris psoriática
- B) Artriris reumatoide
- C) Artritis reactiva
- D) Condrocalcinosis
- E) Artrosis
**Correcta: E**
Explicación del banco: Tanto la clínica (compromiso de IFD, IFP y primera CMC), como la radiografía son clásicas de artrosis. No importa la positividad de marcadores, ya que están positivos en un 5% de las personas sanas y solo tienen importancia cuando la clínica es de Lupus o Artritis reumatoide, que no es el caso.

### [6] EUNACOM Julio 2025 · Pregunta 164 · confianza 0.95
Mujer de 35 años con diarrea crónica mucosanguinolenta de 6 meses de evolución, urgencia defecatoria, pujo y tenesmo. Colonoscopía: mucosa eritematosa, granular, con pseudopólipos, desde el recto continuo hasta el ángulo esplénico, sin mucosa sana intercalada. ¿Cuál es el diagnóstico?
- A) Colitis isquémica
- B) Colitis ulcerosa
- C) Síndrome de intestino irritable
- D) Colitis infecciosa
- E) Enfermedad de Crohn
**Correcta: B**
Explicación del banco: Colitis ulcerosa: compromiso mucoso continuo desde el recto hacia proximal + diarrea mucosanguinolenta + tenesmo + pseudopólipos en endoscopía. No hay mucosa sana intercalada (a diferencia de Crohn). Tratamiento: 5-aminosalicilatos (mesalazina) tópicos + orales según extensión.

### [7] EUNACOM Julio 2025 · Pregunta 120 · confianza 0.95
Mujer de 35 años con placas eritematosas bien delimitadas, cubiertas de escamas plateadas en rodillas y codos, con fenómeno de Auspitz positivo. Compromete el 10% de la superficie corporal. ¿Cuál es el diagnóstico?
- A) Psoriasis en placas
- B) Dermatitis atópica
- C) Dermatitis de contacto
- D) Liquen plano
- E) Micosis fungoide
**Correcta: A**
Explicación del banco: Placas eritematosas con escamas plateadas en superficies extensoras + fenómeno de Auspitz (sangrado puntiforme al retirar escama) = psoriasis en placas. Compromiso 10% = psoriasis moderada.

### [8] EUNACOM Julio 2025 · Pregunta 7 · confianza 0.95
Paciente de 28 años llega a urgencias con fiebre alta, cefalea intensa, mialgias, compromiso respiratorio progresivo y antecedente de trabajo en zona rural del sur de Chile. Hemograma con leucopenia y trombocitopenia. ¿Cuál es el agente causal más probable?
- A) Hantavirus (Sin Nombre)
- B) Leptospira interrogans
- C) Rickettsia conorii
- D) Yersinia pestis
- E) Francisella tularensis
**Correcta: A**
Explicación del banco: Hantavirus pulmonar en Chile es transmitido por ratón colilargo. Fase cardiopulmonar: edema pulmonar no cardiogénico + leucopenia + trombocitopenia. Es la causa más probable en zona rural del sur.

### [9] EUNACOM Julio 2024 · Pregunta 91 · confianza 0.95
Una paciente de 35 años, multípara de 1, se realiza PAP de control, que es informado como presencia de atipias escamosas de significado incierto (ASC-US). Su especuloscopía es normal. ¿Cuál es la conducta más adecuada?
- A) Realizar colposcopía y biopsia cervical
- B) Solicitar reacción de cadena de polimerasa para virus papiloma humano
- C) Realizar diatermocoagulación cervical
- D) Realizar histerectomía
- E) Realizar biopsia de endometrio
**Correcta: B**
Explicación del banco: Manejo de ASCUS (Células Escamosas Atípicas de Significado Incierto): Vale la pena recordar que las indicaciones más importantes para realizar una colposcopía y biopsia cervical son: Lesión cervical independiente del resultado de la prueba de Papanicolaou (PAP). PAP de tipo glandular, independientemente del grado. PAP escamoso de alto grado. Presencia del virus del papiloma humano (VPH) de alto grado, independientemente del resultado del PAP. PAP escamoso de bajo grado con VPH de bajo grado. Con lo anterior, se puede deducir el manejo de las ASCUS: existes 3 opciones: observar, controlar en 1 año y solicitar una prueba de VPH (la más aceptada). Si VPH(+): Se realiza colposcopía y biopsia, ya que cumple con el criterio de PAP de bajo grado más VPH de bajo grado. Si VPH(-): Se puede optar por la observación o un nuevo PAP en 6 a 12 meses. La opción más recomendada por las guías internacionales es solicitar un nuevo PAP. En menores de 25 años con ASCUS, también se solicita la prueba de VPH, pero se sigue en 1 (si VPH+) o 3 años (si VPH-).

### [10] EUNACOM Diciembre 2019 · Pregunta 21 · confianza 0.95
Una paciente de 25 años, con antecedente de haber iniciado su vida sexual a los 14 años y, desde entonces, mantener relaciones sexuales, con múltiples parejas, sin utilización de métodos de barrera, se realiza un PAP que es informado como lesión de alto grado. Además, se realiza tipificación de virus papiloma humano, que muestra serotipo de bajo grado. ¿Cuál es la conducta más adecuada?
- A) Solicitar nuevo PAP en 6 meses
- B) Solicitar nuevo PAP en 6 años
- C) Realizar colposcopía y eventual biopsia
- D) Realizar conización cervical
- E) Realizar histerectomía
**Correcta: C**
Explicación del banco: El PAP de alto grado siempre va a colposcopía y biopsia. La tipificación de VPH no ha demostrado ser un buen examen y la guía Minsal solo lo tiene como opción ante el ASCUS (PAP de bajo grado) y no para el ASCH (alto grado).

### [11] EUNACOM Julio 2019 · Pregunta 177 · confianza 0.95
Un paciente de 65 años, con antecedente de un infarto agudo al miocardio, hace 2 años, presenta un síncope, con compromiso de conciencia que requirió maniobras de reanimación para recuperarse. ¿Qué arritmia es la que debe descartarse en primer lugar?
- A) Taquicardia paroxística supraventricular
- B) Bloqueo auriculoventricular completo
- C) Síndrome de Wolff Parkinson White
- D) Taquicardia ventricular
- E) Fibrilación auricular
**Correcta: D**
Explicación del banco: Si bien cualquier arritmia se puede presentar así, el antecedente de un IAM previo orienta mucho a TV. Además, la TV suele ser más grave y letal que las demás, por lo que la necesidad de maniobras de reanimación orienta también a TV.

### [12] EUNACOM Julio 2019 · Pregunta 126 · confianza 0.95
Una paciente de 43 años presenta sequedad bucal, asociada a ardor y sensación de arenilla ocular y a artralgias. Al examen físico tiene sequedad de piel y de mucosas, se observa aumento de volumen de ambas parótidas y se palpan adenopatías submandibulares de consistencia aumentada. Se solicitan exámenes, que muestra FR: 40 UI/nl, ANA positivos 1/16, ENA negativo, antiDNA negativo. ¿Cuál es el examen de elección para proseguir el estudio diagnóstico?
- A) Punción parotidea
- B) Biopsia ganglionar
- C) Anticuerpos anti-CCP
- D) Biopsia de glándula salival accesoria
- E) Anticuerpos anti-Sm
**Correcta: D**
Explicación del banco: La historia es compatible con un síndrome de Sjögren (tiene el síndrome de Sicca: xeroftalmia y xerostomía). El 90% tiene FR positivo. Además, es frecuente que tengan positivos los ANA, con un perfil ENA que muestra anticuerpos anti-Ro o anti-La positivos. Se confirma la biopsia de glándula salival menor o con los anticuerpos anti-Ro o anti-La, aunque actualmente el diagnóstico se realiza en base a una serie de criterios clínicos y de laboratorio, que no vale la pena aprenderse.

### [13] EUNACOM Diciembre 2018 · Pregunta 174 · confianza 0.95
Una mujer de 30 años, cursando un embarazo inicial, presenta un aborto espontáneo, que es manejado con legrado, con buen resultado y sin complicaciones. Se controla dos semanas después y la biopsia es informada como “mola hidatiforme”. La conducta más adecuada es:
- A) Indicar anticonceptivos orales por 12 meses
- B) Controlar con beta-HCG seriada
- C) Controlar con ecografía transvaginal en 2 semanas
- D) Quimioterapia profiláctica
- E) Realizar histerectomía
**Correcta: B**
Explicación del banco: Lo más importante es la HCG seriada, para detectar precozmente la aparición de una neoplasia trofoblástica gestacional. Sin embargo, también deberá quedar con ACO, para evitar un embarazo que eleva la HCG y alterará el seguimiento.

### [14] EUNACOM Julio 2013 · Pregunta 20 · confianza 0.95
Una paciente de 60 años, con antecedente de hipertensión en tratamiento, con cuadro de tres meses de dolor en ambas manos y muñecas, asociados a rigidez matinal de 2 horas de evolución. Al examen físico se aprecia compromiso en ambas manos de articulaciones metacarpofalángica e interfalangicas proximales. Se solicita radiografía de manos que muestra erosión de la base de la quinta articulación metacarpofalángica. Además se solicita factor reumatoídeo que resulta negativo y péptido citrulinado que también resulta negativo. El diagnóstico más probable es:
- A) Artritis reumatoídea
- B) Artritis psoriática
- C) Osteoartritis
- D) Espondilitis anquilosante
- E) Lupus con compromiso articular
**Correcta: A**
Explicación del banco: Diagnóstico: **Artritis reumatoídea** (opción **A**). Es una AR de libro, aunque tenga negativos los marcadores.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [15] EUNACOM Julio 2013 · Pregunta 158 · confianza 0.95
Un paciente de 16 años, sin antecedentes, consulta por dolor testicular que inició hace una hora, asociado a náuseas, vómitos y sudoración. Al examen físico se aprecia testículo derecho ascendido respecto al contralateral y escaso eritema circundante. La conducta más adecuada en este caso es:
- A) Realizar ecografía testicular
- B) Indicar doxiciclina y cirpofloxacino
- C) Indicar ketorolaco endovenoso y suspensión testicular
- D) Realizar exploración quirúrgica inmediata
- E) Solicitar exámenes generales, parámetros inflamatorios y sedimento de orina, luego decidir conducta según resultados
**Correcta: D**
Explicación del banco: Conducta / Tratamiento indicado: **Realizar exploración quirúrgica inmediata** (opción **D**). Testículo agudo: probable torsión testicular. La resolución quirúrgica urgente constituye la única medida definitiva capaz de controlar el foco séptico, revertir la isquemia o evitar la muerte materna/fetal frente a este compromiso clínico severo.

### [16] EUNACOM Diciembre 2022 · Pregunta 5 · confianza 0.94
Una paciente de 48 años consulta por sangrado uterino, que no ha cesado desde su última menstruación, que inició hace dos semanas. Se solicita una ecografía transvaginal que muestra útero de tamaño normal, con endometrio de 19 mm de grosor y sin alteraciones anexiales. Su PAP, realizado hace poco es normal y su test de embarazo en orina es negativo. ¿Cuál es la conducta más adecuada?
- A) Histerectomía
- B) Ácido tranexámico endovenoso
- C) Estrógenos inyectables
- D) Anticonceptivos orales combinados
- E) Biopsia de endometrio
**Correcta: E**
Explicación del banco: Conducta / Tratamiento indicado: **Biopsia de endometrio** (opción **E**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención. Las opciones alternativas (Histerectomía, Ácido tranexámico endovenoso) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [17] EUNACOM Diciembre 2025 · Pregunta 21 · confianza 0.93
Un paciente de 29 años presenta ictericia, disnea y compromiso marcado del estado general. Su examen Fsico solo muestra ictericia de escleras y piel, sin alteraciones relevantes en el examen segmentario. Sus exámenes de laboratorio muestran hemograma con hematocrito: 12%, hemoglobina: 4,1 g/dL, plaquetas: 250.000/mm³, glóbulos blancos 7.800/mm³, VCM: 103 fL y CHCM: 32 pg; en el fro8s se observa presencia de microesferocitos. Las pruebas hepá8cas muestran GOT: 52 U/L, GPT: 56 U/L, bilirrubina total: 4,1 mg/dL, bilirrubina directa 0,5: mg/dL, GGT: 50 U/L, fosfatasas alcalinas: 211 U/L y LDH: 960 U/L. ¿Cuál es el diagnós8co más probable?
- A) Hepa22s A
- B) Anemia por déﬁcit de vitamina B12
- C) Hemólisis
- D) Anemia aplásica
- E) Mielodisplasia
**Correcta: C**
Explicación del banco: Es una anemia hemolítica clásica, probablemente autoinmune (AHAI). Orientan la anemia aguda y severa, con hiperbilirrubinemia indirecta, elevación de LDH. El VCM se puede elevar, por aumento de los reGculocitos. Los microesferocitos se ven en la AHAI, por el daño que sufren los glóbulos; en cambio, la microesferocitosis familiar suele ser un cuadro crónico, menos grave, con esplenomegalia y exacerbación durante los cuadros agudos. La prueba de Coombs directo está positiva en la AHAI y negativa en la mayoría de las otras causas de hemólisis.

### [18] EUNACOM Diciembre 2025 · Pregunta 16 · confianza 0.92
Un paciente de 35 años consulta por un cuadro de dolor abdominal y diarrea de 3 meses de evolución, con 8 a 10 deposiciones líquidas al día, tanto diurnas como nocturnas. Presenta dolor abdominal 8po cólico con exacerbación en el hemiabdomen derecho. Además, al interrogatorio, reﬁere visión borrosa con enrojecimiento del ojo derecho y ajas orales recurrentes. También, relata baja de peso y presencia ocasional de sangre en las deposiciones. Al examen Fsico se observa pálido, con frecuencia cardíaca 90 lpm, presión arterial 125/72 mmHg y temperatura 37,2 °C. El abdomen está blando y sensible de forma difusa, con dolor más intenso en la fosa ilíaca derecha, sin signos peritoneales. ¿Cuál es el diagnós8co más probable?
- A) Coli2s ulcerosa
- B) Coli2s infecciosa
- C) Cáncer de colon
- D) Enfermedad de Crohn
- E) Síndrome de intes2no irritable con predominio de diarrea Mortalidad Mortalidad proporcional Mortalidad Mortalidad proporcional Patología cardiovascular 60/1000 50% 150/1000 71,4% Cáncer 30/1000 25% 30/1000 14,3% Otras causas de muerte 30/1000 25% 30/1000 14,3% Total 120/1000 100% 210/1000 100% Periodo inicial Periodo tardío
**Correcta: D**
Explicación del banco: Tiene clínica de una enfermedad inﬂamatoria intestinal (EII). Entre ellas, parece más enfermedad de Crohn, por el dolor en el lado derecho (la zona ileocecal es lo más frecuentemente afectado), las amas (el compromiso oral también se puede ver en la coliGs ulcerosa, pero orienta a Crohn) y el compromiso ocular (más frecuente en enfermedad de Crohn que en coliGs ulcerosa).

### [19] EUNACOM Julio 2024 · Pregunta 120 · confianza 0.92
Una paciente de 68 años, nulípara, con antecedente de menopausia a los 50 años, consulta debido a sangrado genital intermitente de 2 meses de evolución, con cuantía variable. Se realiza una ecografía transvaginal que muestra un endometrio de 13 mm de grosor de aspecto heterogénea, con áreas microquísticas. ¿Cuál es el diagnóstico más probable?
- A) Hiperplasia endometrial
- B) Miomatosis endometrial
- C) Atrofia endometrial
- D) Pólipo endometrial
- E) Cáncer de endometrio
**Correcta: A**
Explicación del banco: Hiperplasia Endometrial: El endometrio grueso e irregular es una característica tanto de la hiperplasia endometrial como del cáncer de endometrio. Sin embargo, la descripción de un aspecto heterogéneo con áreas microquísticas se observa con mayor frecuencia en la hiperplasia endometrial, por lo que esta es la respuesta correcta. Eso sí, la conducta es realizar una biopsia de endometrio para confirmar el diagnóstico y descartar el cáncer. La hiperplasia simple se trata con progestágenos. La hiperplasia atípica, en cambio, se trata con histerectomía.

### [20] EUNACOM Agosto 2021 · Pregunta 123 · confianza 0.92
Un paciente de 17 años, apendictomizado hace 6 horas, evoluciona con malestar general y dolor abdominal intenso. Su pulso es regular a 120 latidos por minuto, su presión arterial es 90/50 mmHg y su temperatura es 37,7ºC. En el examen abdominal presenta dolor a la palpación profunda y superficial, con signos peritoneales difusos, mayores en el hemiabdomen inferior. El diagnóstico más probable es:
- A) Hemoperitoneo
- B) Evisceración
- C) Trombosis de la vena porta
- D) Dehiscencia de la base apendicular
- E) Tromboembolismo pulmonar masivo
**Correcta: D**
Explicación del banco: El hemoperitoneo es muy raro y se presenta con compromiso hemodinámico y palidez y luego, más tarde presenta dolor abdominal e incluso signos peritoneales difusos. Sin embargo, la dehiscencia presenta una clara peritonitis, con dolor, signos peritoneales localizados y luego difusos, fiebre y luego shock hipovolémico y séptico; es mucho más frecuente.

### [21] EUNACOM Diciembre 2019 · Pregunta 14 · confianza 0.92
Una paciente de 34 años, diabética con control metabólico irregular, consulta por edema de las extremidades inferiores y orinas espumosas. Al examen físico se constata edema palpebral y facial, edema blando de extremidades inferiores. En sus exámenes destaca hemoglobina glicosilada de 8,2% y proteinuria cuantitativa de 9 g en 24 horas. ¿Cuál es la conducta de elección para proseguir el manejo de esta paciente?
- A) Electroforesis de proteínas en sangre
- B) Biopsia renal
- C) Inmunofijación de proteínas en orina
- D) Prednisona oral
- E) ANCA, C3 y C4
**Correcta: B**
Explicación del banco: Pregunta muy difícil, pero tiene un claro síndrome nefrótico, que, por estar en contexto de una diabetes, se sospecha sea por nefropatía membranosa. Por ser una mujer joven, también podría ser un lupus, con nefropatía membranosa. De las opciones, solo la biopsia renal serviría para avanzar en el diagnóstico. Sí hay que solicitar ANA y complemento (no ANCA, ya que las vasculitis son nefríticas).

### [22] EUNACOM Diciembre 2018 · Pregunta 147 · confianza 0.92
Un paciente de 61 años, con antecedente de haberse realizado una colonoscopía, hace un mes, la que estaba normal, consulta por una hemorragia digestiva baja abundante, con compromiso hemodinámico. Su frecuencia cardiaca es 120x’ y su presión arterial, 90/60 mmHg. Se realiza endoscopía digestiva alta, que resulta normal y su hemograma muestra hematocrito de 19%, con hemoglobina: 6,3 g/dl. ¿Cuál es el examen de elección para continuar el estudio?
- A) Ecografía abdominal
- B) TAC de abdomen y pelvis
- C) Cintigrafía con glóbulos rojos marcados
- D) Colonoscopía
- E) Angiografía mesentérica
**Correcta: D**
Explicación del banco: La colonoscopía es el examen de elección para enfrentar la HDB. La EDA se hizo, porque tenía hemodinamia inestable (siempre se debe hacer en ese caso). No importa que hace un mes tuviese una colonoscopía normal. Si no localiza, se procede a la cintigrafía con GR marcados o a la angiografía mesentérica.

### [23] EUNACOM Julio 2017 · Pregunta 162 · confianza 0.92
Un paciente de 30 años consulta por aumento de volumen escrotal derecho. Al exa- men físico se palpa un tumor en relación al testículo derecho. Se solicita ecografía testi- cular que visualiza una lesión sólida, de 3 cm de diámetro, sin vascularización, que re- emplaza al parénquima testicular, sin compromiso del epidídimo. ¿Cuál es la conducta?
- A) Radioterapia
- B) Quimioterapia
- C) Orquiectomía radical
- D) TAC de abdomen y pelvis
- E) Biopsia testicular por punción
**Correcta: C**
Explicación del banco: Es un tumor testicular, confirmado con la ecografía, por lo que se debe realizar la orquiectomía radical, con biopsia excisional.

### [24] EUNACOM Julio 2016 · Pregunta 132 · confianza 0.92
Una paciente de 54 años ha presentado dolores simétricos en pequeñas y grandes articulaciones, con compromiso de las articulaciones metacarpofalángicas e interfalángicas proximales, que iniciaron hace un año, y que se asocian a rigidez matinal de más de una hora y a sensación de arenilla y sequedad ocular. Se solicitan exámenes que muestran PCR: 10, factor reumatoideo: negativo, anticuerpos antinucleares: negativo y anticuerpos anti- CCP negativos. ¿Cuál es el diagnóstico más probable?
- A) Artritis reumatoidea
- B) Artritis reactiva
- C) Artrosis
- D) Atritis psoriatica.
- E) Síndrome de Sjörgren primario
**Correcta: A**
Explicación del banco: Diagnóstico: **Artritis reumatoidea** (opción **A**). Aunque los marcadores estén negativos, es una AR clásica. Tiene además un Sjögren secundario.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [25] EUNACOM Julio 2015 · Pregunta 155 · confianza 0.92
Una paciente se realiza un legrado por un aborto espontáneo. La biopsia es informada como “mola completa”. Su HCG postlegrado es de 750 UI/L. ¿Cuál es la conducta más adecuada?
- A) Seguirla con niveles seriados de HCG
- B) Realizar biopsia endometrial
- C) Indicar anticonceptivos con progestágeno solo
- D) Repetir el legrado
- E) Indicar metotrexato
**Correcta: A**
Explicación del banco: Ante un embarazo molar se debe seguir con HCG, después de sacarla. Si se eleva o mantiene sin bajar, se diagnostica neoplasia trofoblástica gestacional y se procede a la histerectomía más quimioterapia con metotrexato. Una HCG de 750 postlegrado, es bastante baja.
