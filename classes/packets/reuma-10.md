# CLASE reuma-10 · Reumatologia 9.10: Lupus Cutáneo (Subagudo y Crónico Discoide) y Lupus Inducido por Drogas

Escribe `classes/lessons/reuma-10.cjs` siguiendo el PAQUETE COMÚN. El `id` es "reuma-10" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- reuma-07: Reumatologia 9.7: Artritis Reumatoide: Farmacoterapia, FARME Convencionales, Biológicos y GES
- reuma-08: Reumatologia 9.8: Lupus Eritematoso Sistémico (LES): Inmunopatogenia, Criterios EULAR/ACR 2019 y Manejo Basal
- reuma-09: Reumatologia 9.9: Nefritis Lúpica y Compromiso Orgánico Mayor en LES: Clasificación, Biopsia y Terapia Inmunosupresora
- reuma-11: Reumatologia 9.11: Síndrome Antifosfolípido (SAF): Criterios de Sydney, Trombosis Vascular y Manejo Obstétrico
- reuma-12: Reumatologia 9.12: Esclerosis Sistémica: Cutánea Difusa (Anti-Scl-70) vs Limitada / CREST (Anti-Centrómero) y Crisis Renal
- reuma-13: Reumatologia 9.13: Miopatías Inflamatorias Autoinmunes: Polimiositis, Dermatomiositis y Tamizaje de Cáncer Oculto

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "reuma-10",
  "classId": "reuma-10",
  "tier": 2,
  "blockNum": 2,
  "blockName": "Artritis Reumatoide y Enfermedades del Tejido Conectivo",
  "topicLabel": "9.10",
  "title": "Lupus Cutáneo (Subagudo y Crónico Discoide) y Lupus Inducido por Drogas",
  "perfilCode": "1.05.1.001",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Garantía GES en Lupus Eritematoso Sistémico · Formas cutáneas exclusivas requieren derivación dermatológica",
  "reconstrucciones": "EUNACOM 2018 Q#39 · EUNACOM 2021 Q#14 · EUNACOM 2023 Q#40",
  "frecuencia": "Media-Alta · Diferenciación diagnóstica y farmacológica clásica en EUNACOM",
  "algoTitle": "Diagnóstico Diferencial: Lupus Cutáneo Subagudo vs Discoide vs Inducido por Drogas",
  "diagram": {
    "title": "Diagnóstico Diferencial: Lupus Cutáneo Subagudo vs Discoide vs Inducido por Drogas",
    "svg": "<svg viewBox=\"0 0 620 267\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n<rect class=\"acc\" x=\"12\" y=\"8\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Lesiones Cutáneas Lúpicas o Síntomas Lúpicos en Adulto</text>\n<text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Identificación morfológica de las placas o antecedente de fármacos desencadenantes</text>\n<path class=\"ln\" d=\"M310,47 V69\"/>\n<rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Patrón Clínico y Antecedente Farmacológico</text>\n<text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Diferenciación biológica de las tres entidades</text>\n<path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n<path class=\"ln\" d=\"M310,138 H462 V148\"/>\n<text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Placas Cicatriciales / Atrofia / Alopecia</text>\n<text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Lesiones Anulares Fotosensibles / No Cicatriz</text>\n<rect class=\"warn\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Lupus Discoide Crónico</text>\n<text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Placas con hiperqueratosis, tapones córneos y atrofia central</text>\n<text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Cicatrización permanente · ANA (-) en 70%</text>\n<rect class=\"dec\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"t t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Lupus Cutáneo Subagudo (LCES)</text>\n<text class=\"sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Lesiones policíclicas descamativas en escote/espalda</text>\n<text class=\"sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Anti-Ro (+) 80% · Riesgo Bloqueo AV congénito</text>\n<path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n<path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n<rect class=\"warn\" x=\"12\" y=\"220\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Lupus Inducido por Drogas (Hidralazina, Procainamida, Isoniazida)</text>\n<text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Artralgias + Fiebre + Serositis · RESPETA Riñón y SNC · Anti-Histona (+) en &gt; 95% · Cede al suspender fármaco</text>\n</svg>"
  },
  "contexto": "Las formas cutáneas de lupus y el lupus farmacológico constituyen motivos recurrentes de preguntas en EUNACOM. Se debe distinguir el lupus discoide (que deja cicatriz atrófica permanente y rara vez se asocia a compromiso visceral) del lupus cutáneo subagudo (asociado a Anti-Ro y fotosensibilidad sin cicatriz). Asimismo, el lupus inducido por drogas destaca por sus anticuerpos anti-histona y el respeto absoluto del riñón y sistema nervioso central.",
  "contentSections": [
    {
      "subhead": "1. Lupus Eritematoso Cutáneo Crónico Discoide (LECD)",
      "paragraphs": [
        "Es la variante cutánea crónica más común. Se presenta predominantemente en áreas fotoexpuestas de la cabeza y cuello (mejillas, dorso nasal, orejas y cuero cabelludo).",
        "<strong>Morfología de la lesión discoide clásica:</strong> Placa eritematosa redondeada bien delimitada con tres zonas concéntricas: 1) Borde eritematoso activo ligeramente sobreelevado con telangiectasias; 2) Escama hiperqueratósica adherente que al desprenderse muestra pequeñas prolongaciones espinosas (<em>signo de la tachuela o taponamiento folicular</em>); y 3) Centro atrófico hipopigmentado o despigmentado con pérdida de anejos.",
        "<strong>Riesgo de Alopecia:</strong> En el cuero cabelludo provoca <strong>alopecia cicatricial irreversible</strong> con destrucción definitiva de los folículos pilosos.",
        "<em>Evolución Sistémica:</em> Solo un 5% a 10% de los pacientes con lupus discoide aislado evolucionan a LES sistémico. Los ANA suelen ser negativos o a títulos bajos (positivos en solo 30-40%).",
        "Tratamiento: Fotoprotección estricta FPS 50+, corticoides tópicos de alta potencia (clobetasol) o intralesionales (triamcinolona), e <strong>Hidroxicloroquina oral (200-400 mg/día)</strong> en casos extensos o refractarios."
      ]
    },
    {
      "subhead": "2. Lupus Eritematoso Cutáneo Subagudo (LCES)",
      "paragraphs": [
        "Se manifiesta como una erupción cutánea extraordinariamente fotosensible, distribuida en zonas expuestas al sol: escote (área en V), parte superior de la espalda, hombros y superficies extensoras de brazos, <strong>respetando típicamente la cara</strong>.",
        "Existen dos variantes morfológicas: <strong>anular policíclica</strong> (placas eritematosas circulares con aclaramiento central) y <strong>papuloescamosa / psoriasiforme</strong>.",
        "<em>Diferencia Crítica con el Discoide:</em> Las lesiones del lupus subagudo curan <strong>SIN dejar cicatriz atrófica ni alopecia definitiva</strong>, aunque pueden dejar despigmentación vitiliginosa transitoria.",
        "<strong>Serología e Implicancia Neonatal:</strong> Presenta una asociación abrumadora con anticuerpos <strong>Anti-Ro / SSA (positivos en > 70-80%)</strong> y Anti-La / SSB (30-50%).",
        "<em>Lupus Neonatal:</em> Los anticuerpos Anti-Ro maternos de clase IgG atraviesan la placenta y pueden dañar el tejido de conducción cardíaco fetal entre las semanas 16 y 24 de gestación, produciendo <strong>Bloqueo Auriculoventricular Congénito Completo</strong> irreversible (que requiere marcapasos definitivo al nacer), además de lesiones cutáneas lúpicas neonatales transitorias que desaparecen a los 6 meses al degradarse los anticuerpos maternos."
      ]
    },
    {
      "subhead": "3. Lupus Inducido por Drogas (Farmacológico)",
      "paragraphs": [
        "Síndrome autoinmune reversible gatillado por la exposición continua a determinados fármacos.",
        "<strong>Fármacos Causales de Alto Riesgo:</strong>",
        "• <strong>Procainamida</strong> (antiarrítmico clase Ia: produce lupus en 20% tras 1 año).",
        "• <strong>Hidralazina</strong> (vasodilatador arterial antihipertensivo: produce lupus en 5-10% a dosis > 200 mg/d).",
        "• Fármacos de riesgo moderado: <strong>Isoniazida, Minociclina, Quinidina, Metildopa, Clorpromazina, Carbamazepina y Terapias Anti-TNF</strong>.",
        "<strong>Manifestaciones Clínicas y Diferencia Crucial con LES Idiopático:</strong>",
        "Cursa con fiebre, astenia, artralgias o artritis simétrica, mialgias, pleuropericarditis y rash cutáneo. <strong>REGLA DE ORO MANDATORIA EUNACOM: El lupus inducido por drogas TÍPICAMENTE RESPETA EL RIÑÓN Y EL SISTEMA NERVIOSO CENTRAL</strong> (la nefritis lúpica y las convulsiones/psicosis están prácticamente ausentes).",
        "<strong>Perfil Serológico Diagnóstico:</strong>",
        "• <strong>Anticuerpos Anti-Histona: Positivos en > 95% de los casos</strong> (su negatividad hace muy improbable el origen farmacológico).",
        "• ANA positivos en el 100%.",
        "• <strong>Anti-dsDNA y Anti-Smith: NEGATIVOS</strong> (su presencia confirma LES idiopático, no farmacológico).",
        "• Niveles de complemento C3 y C4 normales.",
        "<strong>Manejo:</strong> La conducta de elección es la <strong>suspensión inmediata del fármaco responsable</strong>. Los síntomas clínicos ceden en semanas y los anticuerpos se negativizan en meses. Se pueden usar AINEs o cursos breves de corticoides en dosis bajas para acelerar el alivio sintomático."
      ]
    }
  ],
  "table": {
    "title": "Diagnóstico Diferencial: Lupus Eritematoso Sistémico vs Lupus Inducido por Drogas",
    "headers": [
      "Característica",
      "Lupus Sistémico (LES Idiopático)",
      "Lupus Inducido por Drogas (Farmacológico)"
    ],
    "rows": [
      [
        "Sexo predominante",
        "Mujeres jóvenes en edad fértil (9:1)",
        "Distribución similar en ambos sexos; mayor en adultos mayores"
      ],
      [
        "Compromiso renal (Nefritis)",
        "Muy frecuente (hasta 50%), grave (Clase IV)",
        "Excepcional / Prácticamente ausente"
      ],
      [
        "Compromiso neuropsiquiátrico",
        "Frecuente (convulsiones, psicosis, delirium)",
        "Excepcional / Prácticamente ausente"
      ],
      [
        "Anticuerpos Anti-Histona",
        "Positivos en 50 – 60%",
        "Positivos en > 95% de los casos"
      ],
      [
        "Anticuerpos Anti-dsDNA",
        "Positivos en 60 – 70% (marcador de actividad)",
        "Típicamente NEGATIVOS"
      ],
      [
        "Anticuerpos Anti-Smith (Sm)",
        "Positivos en 20 – 30% (muy específico)",
        "Típicamente NEGATIVOS"
      ],
      [
        "Niveles de Complemento (C3/C4)",
        "Frecuentemente DISMINUIDOS (consumo en brotes)",
        "Típicamente NORMALES"
      ],
      [
        "Evolución post-suspensión",
        "Enfermedad crónica con brotes espontáneos",
        "Resolución completa en pocas semanas tras retirar fármaco"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 68 años con hipertensión arterial de difícil manejo en tratamiento con Hidralazina 100 mg cada 12 horas desde hace 9 meses. Consulta por cuadro de 4 semanas de astenia, fiebre vespertina de 38 °C, dolor en muñecas y rodillas y dolor torácico de tipo pleurítico. Al examen físico se ausculta un frote pericárdico leve y artritis en interfalángicas proximales de manos. No presenta edema ni alteraciones neurológicas. Exámenes: creatinina 0.9 mg/dL, examen de orina completamente normal sin proteinuria ni hematuria. Los ANA resultan positivos en título 1:320 y los anticuerpos Anti-Histona son fuertemente positivos. El Anti-dsDNA y el Anti-Smith son negativos, y el complemento C3/C4 es normal.",
    "conducta": "El cuadro clínico y serológico es patognomónico de un Lupus Inducido por Drogas secundario a Hidralazina. Se manifiesta con artralgias, serositis (pleuropericarditis) y fiebre, con respeto absoluto de la función renal y del sistema nervioso central. La presencia de anticuerpos Anti-Histona en títulos altos (>95% de positividad) con Anti-dsDNA y Anti-Smith negativos y complemento normal confirman el diagnóstico. La conducta médica prioritaria y curativa es la suspensión inmediata de la Hidralazina, observándose remisión clínica en pocas semanas."
  },
  "explicacion": "El cuadro clínico y serológico es patognomónico de un Lupus Inducido por Drogas secundario a Hidralazina. Se manifiesta con artralgias, serositis (pleuropericarditis) y fiebre, con respeto absoluto de la función renal y del sistema nervioso central. La presencia de anticuerpos Anti-Histona en títulos altos (>95% de positividad) con Anti-dsDNA y Anti-Smith negativos y complemento normal confirman el diagnóstico. La conducta médica prioritaria y curativa es la suspensión inmediata de la Hidralazina, observándose remisión clínica en pocas semanas.",
  "keyPoints": [
    "El Lupus Discoide se caracteriza por placas con hiperqueratosis, tapones foliculares y atrofia central cicatricial.",
    "En el cuero cabelludo, el lupus discoide provoca alopecia cicatricial permanente irreversible.",
    "El Lupus Cutáneo Subagudo cura SIN dejar cicatriz y se asocia intensamente a anticuerpos Anti-Ro (SSA).",
    "Las madres con Anti-Ro (+) tienen riesgo de tener recién nacidos con Bloqueo Auriculoventricular Congénito completo.",
    "El Lupus Inducido por Drogas es causado típicamente por Hidralazina, Procainamida, Isoniazida y anti-TNF.",
    "El Lupus Farmacológico se caracteriza por el RESPETO ABSOLUTO de riñón y sistema nervioso central.",
    "Los anticuerpos Anti-Histona son positivos en > 95% del lupus por drogas, mientras que Anti-dsDNA y Anti-Sm son negativos.",
    "El tratamiento del lupus farmacológico es la suspensión inmediata del medicamento causal."
  ],
  "questions": [
    {
      "stem": "El lupus inducido por drogas suele presentar:",
      "options": [
        {
          "id": "A",
          "text": "Anticuerpos anti-DNA de doble hebra"
        },
        {
          "id": "B",
          "text": "Anticuerpos anti-proteína P"
        },
        {
          "id": "C",
          "text": "Anticuerpos anti-Ro"
        },
        {
          "id": "D",
          "text": "Anticuerpos anti-histona"
        },
        {
          "id": "E",
          "text": "Anticuerpos anti-ribonucleoproteína"
        }
      ],
      "correcta": "D",
      "explicacion": "El lupus inducido por drogas (LID) es un síndrome que se asemeja al lupus eritematoso sistémico (LES), pero es causado por la exposición crónica a ciertos medicamentos. A diferencia del LES idiopático, el LID tiende a ser menos grave, rara vez involucra los riñones o el sistema nervioso central, y sus síntomas suelen resolver semanas o meses después de la interrupción del fármaco causante. Las manifestaciones clínicas comunes incluyen artralgias, mialgias, fiebre, erupciones cutáneas y serositis (pleuritis o pericarditis).\n\nLa característica serológica más distintiva y la respuesta correcta para el diagnóstico de lupus inducido por drogas son los anticuerpos anti-histona. Estos anticuerpos están presentes en más del 95% de los pacientes con LID, lo que los convierte en un marcador altamente sensible para esta condición. Se dirigen a las proteínas histonas que forman parte del nucleosoma, la unidad fundamental de empaquetamiento del ADN.\n\nLa presencia de anticuerpos anti-histona, junto con una historia de exposición a medicamentos conocidos por inducir lupus (como hidralazina, procainamida, isoniacida, minociclina, anti-TNF-alfa, entre otros) y la resolución de los síntomas tras la interrupción del fármaco, son los pilares para el diagnóstico de LID.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.014"
    },
    {
      "stem": "Cuál de las siguientes asociaciones, entre marcador inmunológico y\npatología, es CORRECTA:",
      "options": [
        {
          "id": "A",
          "text": "Anticuerpos anti-Histonas – Esclerodermia"
        },
        {
          "id": "B",
          "text": "Anticuerpos anti-LKM1 – Lupus por drogas"
        },
        {
          "id": "C",
          "text": "Anticuerpos anti-Ro – Síndrome de Sjörgren"
        },
        {
          "id": "D",
          "text": "Anticuerpos anti-citoplasma de neutrófilo patrón citoplasmático – Poliangeítis microscópica"
        },
        {
          "id": "E",
          "text": "Anticuerpos anti-Jo1 – Fibromialgia9"
        }
      ],
      "correcta": "C",
      "explicacion": "La opción correcta es la C, que asocia los anticuerpos anti-Ro con el Síndrome de Sjögren. Esta es una de las asociaciones inmunológicas más clásicas y relevantes en reumatología. Los anticuerpos anti-Ro (también conocidos como SS-A) y los anti-La (o SS-B) son anticuerpos dirigidos contra ribonucleoproteínas citoplasmáticas. Su presencia es un pilar en el diagnóstico del Síndrome de Sjögren primario, una enfermedad autoinmune sistémica caracterizada por la infiltración linfocitaria de las glándulas exocrinas, principalmente salivales y lagrimales, lo que causa sequedad ocular (xeroftalmia) y bucal (xerostomía).\n\nLa positividad para anti-Ro se encuentra en aproximadamente el 70% de los pacientes con Síndrome de Sjögren primario y forma parte de los criterios de clasificación internacionales (ACR/EULAR). Además de su valor diagnóstico, la presencia de anticuerpos anti-Ro tiene implicaciones pronósticas y clínicas. Se asocia con un inicio más temprano de la enfermedad, mayor riesgo de manifestaciones extraglandulares (como vasculitis, compromiso pulmonar o neurológico) y es el principal responsable del lupus neonatal y el bloqueo cardíaco congénito en hijos de madres portadoras de este anticuerpo, incluso si la madre está asintomática.\n\nSi bien los anti-Ro también pueden encontrarse en otras patologías como el Lupus Eritematoso Sistémico (LES), donde se asocian a fotosensibilidad y lupus cutáneo subagudo, su asociación más fuerte y característica es con el Síndrome de Sjögren. Por lo tanto, esta opción representa un conocimiento fundamental y correcto en el campo de la autoinmunidad.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.014"
    }
  ],
  "vignetteText": "Hombre de 68 años con hipertensión arterial de difícil manejo en tratamiento con Hidralazina 100 mg cada 12 horas desde hace 9 meses. Consulta por cuadro de 4 semanas de astenia, fiebre vespertina de 38 °C, dolor en muñecas y rodillas y dolor torácico de tipo pleurítico. Al examen físico se ausculta un frote pericárdico leve y artritis en interfalángicas proximales de manos. No presenta edema ni alteraciones neurológicas. Exámenes: creatinina 0.9 mg/dL, examen de orina completamente normal sin proteinuria ni hematuria. Los ANA resultan positivos en título 1:320 y los anticuerpos Anti-Histona son fuertemente positivos. El Anti-dsDNA y el Anti-Smith son negativos, y el complemento C3/C4 es normal."
}
```

## PREGUNTAS REALES DEL BANCO (7; por código de la clase y por búsqueda "cutaneo, subagudo, cronico, discoide, inducido")
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

### [2] EUNACOM Diciembre 2019 · Pregunta 27 · confianza 0.95
Un paciente de 58 años, fumador de 10 paquetes año, consulta por disnea, asociada a tos y expectoración mucosa. Los síntomas aumentan especialmente en relación a la actividad física y cuando presenta infecciones respiratorias. En su examen físico se auscultan escasas sibilancias bilaterales y espiración prolongada. Se solicita una espirometría que muestra: Basal Postbroncodilatador CVF 5.928cc 100% 6.106cc 103% VEF1 4.163cc 76% 5.040cc 92% VEF1/CVF 65% 73% Su radiografía de tórax se muestra a continuación: El diagnóstico más probable es:
- A) Asma bronquial
- B) Enfermedad pulmonar obstructiva crónica
- C) Bronquiectasias
- D) Bronquitis crónica
- E) Enfermedad pulmonar intersticial difusa
**Correcta: A**
Explicación del banco: Diagnóstico: **Asma bronquial** (opción **A**). Tiene un cuadro clínico y espirometría (patrón obstructivo que mejora con BD) compatibles con asma.. La enfermedad mixta del tejido conectivo (EMTC) es una mezcla de manifestaciones de artritis reumatoide (artritis), lupus (úlceras orales, rash malar, pericarditis, lupus cutáneo subagudo), esclerodermia (fenómeno de Raynaud, disfagia, esclerodactilia) y miositis (como en la polimiositis/dermatomiositis), pudiendo además complicarse con síndrome de Sjögren. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [3] EUNACOM Julio 2025 · Pregunta 14 · confianza 0.92
Mujer de 35 años con placas eritematosas en cuero cabelludo con alopecia cicatricial, fotosensibilidad y presencia de tapones foliculares. Lesiones similares en mejillas. ¿Cuál es el diagnóstico más probable?
- A) Tinea capitis
- B) Alopecia androgénica
- C) Tricotilomanía
- D) Lupus eritematoso discoide
- E) Alopecia areata
**Correcta: D**
Explicación del banco: Lupus discoide: placas eritematosas con escamas adherentes, tapones foliculares y alopecia cicatricial en cuero cabelludo + fotosensibilidad en mejillas. Alopecia cicatricial permanente. Tratamiento: antipalúdicos (cloroquina) + protección solar.

### [4] EUNACOM Julio 2019 · Pregunta 104 · confianza 0.9
Una paciente de 30 años presenta un cuadro de un mes de evolución de neuralgia de la primera rama del trigémino. Hace una semana se agrega disminución de la sensibilidad del muslo derecho, con dificultades para caminar. Como antecedente, refiere que hace un año tuvo un trastorno del equilibrio, que resolvió espontáneamente. El diagnóstico más probable es:
- A) Polineuropatía por déficit de vitamina B12
- B) Síndrome de Guillain Barré de presentación atípica
- C) Infarto talámico
- D) Esclerosis múltiple
- E) Neurinoma con compresión del troncoencéfalo
**Correcta: D**
Explicación del banco: Es una pregunta difícil, pero el cuadro solo es compatible con una esclerosis múltiple ya que ha tenido múltiples signos focales, de inicio subagudo, que pueden recuperarse (como el trastorno del equilibrio). Revisar el resumen de semiología neurológica.

### [5] EUNACOM Julio 2017 · Pregunta 76 · confianza 0.8
Paciente de 45 años, fumadora activa de 40 paquetes año, consulta por tos irritativa asociada a disnea y crisis de sibilancias que aparecen en relación a la actividad física e infecciones respiratorias. Se realiza una espirometría que muestra: Basal: VEF1/CVF: 62% VEF1: 2,4L (62% del valor teórico) CVF: 4,9L (92% del valor teórico) Post-Salbutamol VEF1/CVF: 74% VEF1: 3,6L (89% del valor teórico) CVF: 5,0L (95% del valor teórico)
- A) Asma
- B) EPOC
- C) Fibrosis pulmonar
- D) Bronquiectasias
- E) Bronquitis crónica
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Asma). Es un patrón obstructivo, que mejora con broncodilatador, es decir, un asma.. La enfermedad mixta del tejido conectivo (EMTC) es una mezcla de manifestaciones de artritis reumatoide (artritis), lupus (úlceras orales, rash malar, pericarditis, lupus cutáneo subagudo), esclerodermia (fenómeno de Raynaud, disfagia, esclerodactilia) y miositis (como en la polimiositis/dermatomiositis), pudiendo además complicarse con síndrome de Sjögren. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [6] EUNACOM Julio 2016 · Pregunta 152 · confianza 0.6
Un paciente de 42 años, fumador de 2,6 paquetes-año, presenta un cuadro de 3 meses de compromiso del estado general, astenia y baja de peso de 3 kilogramos, asociado a tos y expectoración mucopurulenta, que en ocasiones es hemoptoica. Su examen físico no aporta mayor información. Se solicita una radiografía de tórax, que muestra zonas de relleno alveolar en el lóbulo superior derecho. ¿Con qué examen(es) se debe proseguir el estudio?
- A) Baciloscopías de expectoración y cultivo para mycobacterias
- B) Elisa VIH
- C) Biopsia pulmonar por videtoracoscopía
- D) Lavado bronquioalveolar por broncoscopía
- E) TAC de tórax
**Correcta: A**
Explicación del banco: Parece una TBC (cuadro subagudo, con compromiso de los lóbulos superiores), por lo que debe estudiarse con baciloscopías y cultivo.

### [7] EUNACOM Julio 2013 · Pregunta 112 · confianza 0.55
Un paciente de 45 años, sin antecedentes, presenta cuadro de 3 semanas devolución de cefalea y sensación febril que durante los últimos días se ha hecho más intensa, asociado a dolor cervical. Al examen físico destaca leve rigidez de nuca y parálisis del IV par craneano derecho. El diagnóstico más probable es:
- A) Meningitis tuberculosa
- B) Meningoencefalitis por enterovirus
- C) Meningoencefalitis herpética
- D) Meningitis bacteriana
- E) Meningitis por hongos
**Correcta: A**
Explicación del banco: Diagnóstico: **Meningitis tuberculosa** (opción **A**). Por clínica de parálisis del IV par y por lo subagudo del cuadro: 3 semanas. La tuberculosis es causada por Mycobacterium tuberculosis y se presenta con tos, expectoración (mucosa, purulenta o hemoptoica), fiebre y baja de peso por al menos 2 semanas. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.
