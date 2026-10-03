# CLASE reuma-15 · Reumatologia 9.15: Síndrome de Sjögren y Enfermedad Mixta del Tejido Conectivo (EMTC)

Escribe `classes/lessons/reuma-15.cjs` siguiendo el PAQUETE COMÚN. El `id` es "reuma-15" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- reuma-12: Reumatologia 9.12: Esclerosis Sistémica: Cutánea Difusa (Anti-Scl-70) vs Limitada / CREST (Anti-Centrómero) y Crisis Renal
- reuma-13: Reumatologia 9.13: Miopatías Inflamatorias Autoinmunes: Polimiositis, Dermatomiositis y Tamizaje de Cáncer Oculto
- reuma-14: Reumatologia 9.14: Fenómeno de Raynaud Primario vs Secundario y Capilaroscopía Periungueal
- reuma-16: Reumatologia 9.16: Espondiloartritis: Concepto Unificador, HLA-B27 y Lumbago Inflamatorio vs Mecánico
- reuma-17: Reumatologia 9.17: Espondilitis Anquilosante (EA): Sacroilitis Bilateral, Columna en Caña de Bambú y Terapia Anti-TNF
- reuma-18: Reumatologia 9.18: Artritis Psoriásica (Dactilitis, Pitting Ungueal) y Artritis Asociada a EII

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "reuma-15",
  "classId": "reuma-15",
  "tier": 2,
  "blockNum": 3,
  "blockName": "Esclerosis Sistémica, Miopatías Inflamatorias y Síndromes Autoinmunes",
  "topicLabel": "9.15",
  "title": "Síndrome de Sjögren y Enfermedad Mixta del Tejido Conectivo (EMTC)",
  "perfilCode": "1.05.1.003",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Sin garantía GES específica · Derivación a reumatología, oftalmología y odontología",
  "reconstrucciones": "EUNACOM 2018 Q#08 · EUNACOM 2021 Q#35 · EUNACOM 2023 Q#19",
  "frecuencia": "Media-Alta · Patología exocrina autoinmune y síndrome de superposición clásico",
  "algoTitle": "Algoritmo Diagnóstico: Síndrome de Sjögren (Sicca) y Criterios de EMTC",
  "diagram": {
    "title": "Algoritmo Diagnóstico: Síndrome de Sjögren (Sicca) y Criterios de EMTC",
    "svg": "<svg viewBox=\"0 0 620 328\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n<rect class=\"acc\" x=\"12\" y=\"8\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de Síndrome de Sjögren (Síndrome Seco / Sicca)</text>\n<text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Xeroftalmia (sensación arenilla) + Xerostomía (boca seca, caries de cuello) + Tumefacción parotídea</text>\n<path class=\"ln\" d=\"M310,47 V69\"/>\n<rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Estudio Diagnóstico en Síndrome de Sjögren</text>\n<text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Evaluación funcional y confirmación inmunológica/histológica</text>\n<path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n<path class=\"ln\" d=\"M310,138 H462 V148\"/>\n<text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Pruebas Funcionales Oculares y Salivales</text>\n<text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Serología Inmunológica y Biopsia Labial</text>\n<rect class=\"warn\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Test de Schirmer (&lt; 5 mm en 5 min)</text>\n<text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Tinción con Rosa de Bengala / Lisamina</text>\n<text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Gammagrafía salival o flujo salival no estimulado &lt; 0.1 mL/min</text>\n<rect class=\"dec\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"t t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Anti-Ro (SSA) / Anti-La (SSB) (+) Biopsia</text>\n<text class=\"sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Anti-Ro (+) en 70-80%</text>\n<text class=\"sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Biopsia glándula salival menor: focos de infiltrado linfocítico ≥ 1 foco/4mm²</text>\n<path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n<path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n<rect class=\"warn\" x=\"12\" y=\"220\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">ALERTA ONCOLÓGICA CRÍTICA EN SJÖGREN: Riesgo de Linfoma B (MALT)</text>\n<text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Riesgo 40 veces mayor de Linfoma No Hodgkin B · Sospechar ante parotidomegalia fija o gammapatía</text>\n<path class=\"ln\" d=\"M310,259 V281\"/>\n<rect class=\"acc\" x=\"12\" y=\"281\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Enfermedad Mixta del Tejido Conectivo (EMTC / Síndrome de Sharp)</text>\n<text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">Solapamiento de Lupus + Esclerodermia + Miositis · MARCADOR PATOGNOMÓNICO: Anti-U1-RNP a títulos muy altos</text>\n</svg>"
  },
  "contexto": "El Síndrome de Sjögren es una exocrinopatía autoinmune que destruye glándulas salivales y lagrimales. En EUNACOM se evalúa el test de Schirmer, los anticuerpos Anti-Ro/Anti-La y el elevado riesgo de Linfoma MALT. La Enfermedad Mixta del Tejido Conectivo (EMTC) destaca por su tríada clínica de superposición (Raynaud, dedos en salchicha, miositis) y su marcador exclusivo: Anti-RNP en títulos altos.",
  "contentSections": [
    {
      "subhead": "1. Síndrome de Sjögren: Fisiopatología y Cuadro Clínico",
      "paragraphs": [
        "Es una enfermedad autoinmune inflamatoria crónica caracterizada por la <strong>infiltración linfocítica progresiva (linfocitos T CD4+ y linfocitos B) de las glándulas exocrinas</strong>, provocando destrucción del parénquima acinar y pérdida irreversible de secreciones mucosas.",
        "Afecta predominantemente a mujeres (relación 9:1) en la perimenopausia (40-60 años). Puede ser <strong>Primario</strong> (aislado) o <strong>Secundario</strong> (asociado a Artritis Reumatoide [el más común], LES o Esclerodermia).",
        "<strong>Manifestaciones Cardinales del Síndrome Seco (Sicca):</strong>",
        "• <strong>Xeroftalmia (Queratoconjuntivitis seca):</strong> Sensación constante de cuerpo extraño o arenilla ocular, ardor, prurito, hiperemia conjuntival y fotofobia.",
        "• <strong>Xerostomía:</strong> Sequedad bucal severa que obliga a beber agua para tragar alimentos secos, dificultad para hablar continuamente, pérdida del gusto, y aparición precoz de <strong>caries dentales rampantes cervicales (en el cuello de los dientes)</strong> y candidiasis orofaríngea recurrente por pérdida de la acción protectora de la saliva.",
        "• <strong>Agrandamiento de Glándulas Salivales:</strong> Tumefacción indolora recurrente o persistente de las glándulas parótidas (frecuentemente bilateral).",
        "• Manifestaciones extraglandulares sistémicas: Artralgias/artritis no erosiva, fenómeno de Raynaud (30%), acidosis tubular renal distal (tipo I con hipocalemia y nefrocalcinosis) y neuropatía sensitiva periférica."
      ]
    },
    {
      "subhead": "2. Criterios Diagnósticos ACR/EULAR en Sjögren y Riesgo de Linfoma",
      "paragraphs": [
        "<strong>Diagnóstico de Certeza:</strong>",
        "• <strong>Test de Schirmer:</strong> Mide la producción lagrimal acuosa colocando una tira de papel filtro estéril en el fondo de saco conjuntival inferior durante 5 minutos. Es <strong>patológico si la impregnación es < 5 mm en 5 minutos</strong>.",
        "• <strong>Tinción de la superficie ocular (Verde de lisamina o Rosa de Bengala):</strong> Detecta queratopatía puntiforme y daño del epitelio corneal/conjuntival desvitalizado.",
        "• <strong>Biopsia de Glándula Salival Menor del Labio Inferior:</strong> Procedimiento estándar de oro confirmatorio. Se toma una pequeña incisión en mucosa labial interna. Muestra <strong>sialoadenitis linfocítica focal con Focus Score ≥ 1</strong> (definido como al menos un foco de ≥ 50 células mononucleares por cada 4 mm² de tejido glandular).",
        "• <strong>Autoanticuerpos:</strong> <strong>Anti-Ro (SSA) positivos en 70-80%</strong> y <strong>Anti-La (SSB) positivos en 40-50%</strong>. El Factor Reumatoide es positivo en más del 75% de los casos primarios.",
        "<strong>ALERTA DE RIESGO ONCOLÓGICO EUNACOM:</strong>",
        "Los pacientes con Síndrome de Sjögren presentan un <strong>riesgo 40 veces superior al de la población general de desarrollar Linfoma No Hodgkin de células B</strong>, particularmente <strong>Linfoma MALT (tejido linfoide asociado a mucosas) de glándula parótida</strong> o gástrico. Signos de sospecha clínica: agrandamiento parotídeo unilateral persistente y duro, adenopatías palpables, esplenomegalia, aparición de púrpura palpable (crioglobulinemia mixta) y caída inexplicada de los títulos de factor reumatoide o complemento."
      ]
    },
    {
      "subhead": "3. Enfermedad Mixta del Tejido Conectivo (EMTC / Síndrome de Sharp)",
      "paragraphs": [
        "La EMTC es una entidad clínica distintiva caracterizada por la coexistencia de manifestaciones superpuestas de tres conectivopatías: <strong>Lupus Eritematoso Sistémico, Esclerosis Sistémica y Polimiositis</strong>.",
        "<strong>Cuadro Clínico Característico:</strong> Fenómeno de Raynaud severo (presente en 95%), <strong>manos edematosas con dedos tumefactos en salchicha (puffy hands)</strong>, sinovitis/artritis no erosiva, debilidad muscular proximal con elevación de CPK, y dismotilidad esofágica distal.",
        "<strong>MARCADOR PATOGNOMÓNICO OBLIGATORIO:</strong> Anticuerpos dirigidos contra la <strong>ribonucleoproteína nuclear U1 (Anti-U1-RNP) positivos en títulos muy altos</strong> (típicamente > 1:1.000 a 1:10.000), con <strong>ausencia o negatividad estricta de anticuerpos Anti-dsDNA y Anti-Scl-70</strong>.",
        "<em>Causa Principal de Muerte:</em> La <strong>Hipertensión Arterial Pulmonar (HTP)</strong> es la complicación más grave y la principal causa de mortalidad en EMTC. Requiere tamizaje ecocardiográfico periódico."
      ]
    }
  ],
  "table": {
    "title": "Resumen de Criterios Diagnósticos y Marcadores: Sjögren vs EMTC",
    "headers": [
      "Enfermedad",
      "Manifestación Guía Cardinal",
      "Prueba Diagnóstica Objetiva",
      "Autoanticuerpo Clave",
      "Complicación Mayor"
    ],
    "rows": [
      [
        "Síndrome de Sjögren",
        "Xeroftalmia (ojo seco) + Xerostomía (boca seca)",
        "Test de Schirmer (<5mm/5min) y Biopsia labial (Focus Score ≥1)",
        "Anti-Ro (SSA) y Anti-La (SSB)",
        "Linfoma No Hodgkin B (MALT en parótida)"
      ],
      [
        "Enfermedad Mixta del Tejido Conectivo (EMTC)",
        "Raynaud + Manos tumefactas (puffy fingers) + Miositis + Artritis",
        "Biopsia muscular miopática y manometría esofágica",
        "Anti-U1-RNP a títulos muy altos (>1:1.000)",
        "Hipertensión Arterial Pulmonar (HTP)"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 48 años consulta por sensación constante de arenilla en ambos ojos y ardor ocular que le dificulta leer y usar pantallas, de 1 año de evolución. Además refiere boca seca que la obliga a levantarse por las noches a beber agua y necesidad de líquidos abundantes para deglutir alimentos secos como pan o galletas. Su odontólogo le ha tratado 5 caries en el cuello de las piezas dentarias en los últimos 6 meses. Al examen físico se palpa aumento de volumen indoloro y blando de ambas glándulas parótidas. El test de Schirmer muestra un lagrimeo de 2 mm en 5 minutos en ambos ojos. Los exámenes revelan ANA positivos 1:320 y anticuerpos Anti-Ro (SSA) fuertemente positivos.",
    "conducta": "El cuadro corresponde a un Síndrome de Sjögren Primario clásico: xeroftalmia confirmada por test de Schirmer patológico (< 5 mm/5 min), xerostomía severa con caries cervicales aceleradas por hiposialia, parotidomegalia bilateral y anticuerpos Anti-Ro positivos. El manejo inicial consiste en lágrimas artificiales sin preservantes, saliva artificial, medidas estrictas de higiene dental para prevenir la pérdida de piezas dentarias y vigilancia periódica clínica para detección precoz de linfoma de células B."
  },
  "explicacion": "El cuadro corresponde a un Síndrome de Sjögren Primario clásico: xeroftalmia confirmada por test de Schirmer patológico (< 5 mm/5 min), xerostomía severa con caries cervicales aceleradas por hiposialia, parotidomegalia bilateral y anticuerpos Anti-Ro positivos. El manejo inicial consiste en lágrimas artificiales sin preservantes, saliva artificial, medidas estrictas de higiene dental para prevenir la pérdida de piezas dentarias y vigilancia periódica clínica para detección precoz de linfoma de células B.",
  "keyPoints": [
    "El Síndrome de Sjögren es una exocrinopatía autoinmune caracterizada por xeroftalmia y xerostomía.",
    "El Test de Schirmer es patológico si la impregnación del papel filtro es < 5 mm en 5 minutos.",
    "La biopsia de glándula salival menor es el estándar de oro: muestra infiltrado focal ≥ 1 foco/4 mm².",
    "Los anticuerpos Anti-Ro (SSA) son positivos en 70-80% y Anti-La (SSB) en 40-50% de los pacientes.",
    "Los pacientes con Síndrome de Sjögren tienen un riesgo 40 veces mayor de desarrollar Linfoma MALT.",
    "La EMTC combina características de Lupus, Esclerodermia y Polimiositis.",
    "El marcador patognomónico de la EMTC es el anticuerpo Anti-U1-RNP a títulos muy elevados.",
    "La principal causa de mortalidad en la EMTC es la Hipertensión Arterial Pulmonar."
  ],
  "questions": [
    {
      "stem": "¿Cuál de los siguientes hallazgos es característico del Síndrome de Sjögren?",
      "options": [
        {
          "id": "A",
          "text": "Xerostomía"
        },
        {
          "id": "B",
          "text": "Anticuerpos Anti- Jo1 y Mi-2 positivos"
        },
        {
          "id": "C",
          "text": "Anticuerpos Anti- proteína P positivos"
        },
        {
          "id": "D",
          "text": "Test Hirschberg positivo"
        },
        {
          "id": "E",
          "text": "Artritis erosiva"
        }
      ],
      "correcta": "A",
      "explicacion": "El Síndrome de Sjögren es una enfermedad autoinmune sistémica y crónica que se caracteriza por una infiltración linfocitaria de las glándulas exocrinas, principalmente las salivales y lagrimales. Esta infiltración provoca una disfunción glandular progresiva, cuya manifestación clínica principal es el \"síndrome sicca\" (síndrome seco). La xerostomía, o sequedad bucal, es uno de los dos componentes cardinales de este síndrome, siendo el otro la xeroftalmia (sequedad ocular o queratoconjuntivitis sicca).\n\nLa xerostomía en el Síndrome de Sjögren no es un síntoma menor, sino un hallazgo característico y a menudo debilitante. Los pacientes refieren dificultad para tragar alimentos secos (disfagia), hablar durante periodos prolongados, una sensación de ardor en la boca y un aumento significativo en la incidencia de caries dentales y enfermedad periodontal. Por lo tanto, la presencia de xerostomía es un pilar fundamental en la sospecha diagnóstica y forma parte esencial de los criterios de clasificación internacionales para la enfermedad, junto con la sequedad ocular y la presencia de autoanticuerpos específicos (Anti-Ro/SSA y Anti-La/SSB).",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.022"
    },
    {
      "stem": "El test de Schirmer positivo (con hipolacrimia) es característico de:",
      "options": [
        {
          "id": "A",
          "text": "Enfermedad de Behcet"
        },
        {
          "id": "B",
          "text": "Sarcoidosis"
        },
        {
          "id": "C",
          "text": "Síndrome de CREST"
        },
        {
          "id": "D",
          "text": "Dermatomiositis"
        },
        {
          "id": "E",
          "text": "Síndrome de Sjörgren"
        }
      ],
      "correcta": "E",
      "explicacion": "El Síndrome de Sjögren es una enfermedad autoinmune sistémica y crónica que se caracteriza por una infiltración linfocitaria de las glándulas exocrinas, principalmente las glándulas salivales y lacrimales. Esta infiltración provoca una disfunción glandular que se manifiesta clínicamente como el \"síndrome sicca\", un conjunto de síntomas dominado por la sequedad de las mucosas. La manifestación más común es la xeroftalmia (ojo seco) y la xerostomía (boca seca).\n\nEl test de Schirmer es una prueba diagnóstica fundamental y objetiva para evaluar la producción de lágrimas. Consiste en colocar una tira de papel de filtro estandarizado en el saco conjuntival inferior durante cinco minutos. Un resultado se considera positivo (indicativo de hipolacrimia severa) cuando la tira de papel se humedece menos de 5 mm en ese tiempo. Dado que la xeroftalmia por hipolacrimia es una de las dos manifestaciones cardinales del Síndrome de Sjörgren, un test de Schirmer positivo es un hallazgo altamente característico y uno de los criterios clasificatorios internacionales para esta enfermedad.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.022"
    }
  ],
  "vignetteText": "Mujer de 48 años consulta por sensación constante de arenilla en ambos ojos y ardor ocular que le dificulta leer y usar pantallas, de 1 año de evolución. Además refiere boca seca que la obliga a levantarse por las noches a beber agua y necesidad de líquidos abundantes para deglutir alimentos secos como pan o galletas. Su odontólogo le ha tratado 5 caries en el cuello de las piezas dentarias en los últimos 6 meses. Al examen físico se palpa aumento de volumen indoloro y blando de ambas glándulas parótidas. El test de Schirmer muestra un lagrimeo de 2 mm en 5 minutos en ambos ojos. Los exámenes revelan ANA positivos 1:320 y anticuerpos Anti-Ro (SSA) fuertemente positivos."
}
```

## PREGUNTAS REALES DEL BANCO (12; por código de la clase y por búsqueda "sjogren, conectivo")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Diciembre 2019 · Pregunta 27 · confianza 0.95
Un paciente de 58 años, fumador de 10 paquetes año, consulta por disnea, asociada a tos y expectoración mucosa. Los síntomas aumentan especialmente en relación a la actividad física y cuando presenta infecciones respiratorias. En su examen físico se auscultan escasas sibilancias bilaterales y espiración prolongada. Se solicita una espirometría que muestra: Basal Postbroncodilatador CVF 5.928cc 100% 6.106cc 103% VEF1 4.163cc 76% 5.040cc 92% VEF1/CVF 65% 73% Su radiografía de tórax se muestra a continuación: El diagnóstico más probable es:
- A) Asma bronquial
- B) Enfermedad pulmonar obstructiva crónica
- C) Bronquiectasias
- D) Bronquitis crónica
- E) Enfermedad pulmonar intersticial difusa
**Correcta: A**
Explicación del banco: Diagnóstico: **Asma bronquial** (opción **A**). Tiene un cuadro clínico y espirometría (patrón obstructivo que mejora con BD) compatibles con asma.. La enfermedad mixta del tejido conectivo (EMTC) es una mezcla de manifestaciones de artritis reumatoide (artritis), lupus (úlceras orales, rash malar, pericarditis, lupus cutáneo subagudo), esclerodermia (fenómeno de Raynaud, disfagia, esclerodactilia) y miositis (como en la polimiositis/dermatomiositis), pudiendo además complicarse con síndrome de Sjögren. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [2] EUNACOM Julio 2017 · Pregunta 17 · confianza 0.95
Una paciente de 43 años, ex fumadora de 8 paquetes año, consulta por disnea, aso- ciada a tos con expectoración mucosa y respiración sibilante, que aparecen después de realizar ejercicio o presentar infecciones virales. Al examen físico presenta disminu- ción del murmullo pulmonar, sibilancias espiratorias y aumento del diámetro antero- posterior toráxico. Se realiza una radiografía que se muestra a continuación: INSERTAR FOTO El tratamiento inicial más adecuado es:
- A) Salmeterol inhalado
- B) Ipratropio inhalado
- C) Budesonida inhalado
- D) Salbutamol inhalado
- E) Tiotropio inhalado
**Correcta: D**
Explicación del banco: Es un asma y lo más correcto es iniciar salbutamol SOS, más un corticoide inhala- do (budesonida en este caso). Por tanto es una mala pregunta. Si fuerzan a elegir el tra- tamiento “inicial”, yo creo que la respuesta es salbutamol.

### [3] EUNACOM Agosto 2021 · Pregunta 68 · confianza 0.85
años de evolución. En ocasiones, los síntomas aumentan significativamente, especialmente en relación a la actividad física y cuando presenta infecciones respiratorias. En su examen físico se auscultan escasas sibilancias bilaterales y espiración prolongada. Se solicita una espirometría que muestra: Basal Postbroncodilatador POE | 5.928cc 100% 6.106cc 103% MEF] ao0o 504000 VEFYCVE jes | [78% | Su radiografía de tórax se muestra a continuación (fuente: Radiopaedia): El diagnóstico más probable es:
- A) Asma bronquial
- B) Enfermedad pulmonar obstructiva crónica
- C) Bronquiectasias
- D) Bronquitis crónica
- E) Enfermedad pulmonar intersticial difusa
**Correcta: A**
Explicación del banco: Tiene un asma, por tener un patrón obstructivo (VEF1/CVF menor a 70%), que mejora con broncodilatador (sube más de 15% en cualquiera de los parámetros. Nota: no son 15 puntos porcentuales, sino 15%. Ejemplo, 76% a 92% hay 16 puntos porcentuales, pero subió 21%, ya que 16/76 = 0,21). La radiografía es normal. 10 paquetes-año ya aumenta el riesgo de EPOC y cáncer, pero lo habitual es que estas enfermedades aparezcan sobre 15 paq-año.

### [4] EUNACOM Diciembre 2017 · Pregunta 19 · confianza 0.85
Una paciente con antecedente de rinitis alérgica y asma consulta por disnea frecuente, asociada a respiración sibilante y tos, que aparece con frecuencia luego de exponerse a los alergenos, en la noche, cuando cursa con alguna infección respiratoria alta o después de realizar ejercicio. Al examen físico tiene FR: 13 rpm, satura 96% a FiO2 ambiental y en su examen pulmonar destacan sibilancias espiratorias bilaterales. ¿Cuál es la conducta más adecuada con ella?
- A) Evitar los alergenos por 3 meses
- B) Iniciar salmeterol 2 puff cada 12 horas
- C) Iniciar salbutamol 2 puff cada 6 horas
- D) Iniciar fluticasona 2 puff cada 12 horas
- E) Iniciar terapia de desensibilización a los alergenos
**Correcta: D**
Explicación del banco: Lo más correcto es indicar corticoides inhalados cada 12 horas, más salbutamol SOS, pero de las opciones, la D era la más aceptable.

### [5] EUNACOM Julio 2019 · Pregunta 63 · confianza 0.8
Un paciente de 62 años, fumador de 10 paquetes año, consulta por disnea, asociada a tos y expectoración mucosa. Los síntomas aumentan especialmente cuando presenta infecciones respiratorias. En su examen físico se auscultan sibilancias bilaterales y espiración prolongada. Se solicita una espirometría que muestra: Basal Postbroncodilatador CVF 5.810cc 98% 5.870cc 99% VEF1 3.835cc 70% 4.696cc 91% VEF1/CVF 66% 80% Su radiografía de tórax se muestra a continuación: El diagnóstico más probable es:
- A) Asma bronquial
- B) Enfermedad pulmonar obstructiva crónica
- C) Bronquiectasias
- D) Bronquitis crónica
- E) Enfermedad pulmonar intersticial difusa
**Correcta: A**
Explicación del banco: Aunque por la edad y por el tabaquismo podría ser un EPOC, la verdad es que lo habitual es que el EPOC tenga más de 15 paquetes-año y, lo más importante, en este caso la espirometría es un patrón obstructivo que mejora con BD, por lo que está confirmado el diagnóstico de asma.

### [6] EUNACOM Julio 2017 · Pregunta 76 · confianza 0.8
Paciente de 45 años, fumadora activa de 40 paquetes año, consulta por tos irritativa asociada a disnea y crisis de sibilancias que aparecen en relación a la actividad física e infecciones respiratorias. Se realiza una espirometría que muestra: Basal: VEF1/CVF: 62% VEF1: 2,4L (62% del valor teórico) CVF: 4,9L (92% del valor teórico) Post-Salbutamol VEF1/CVF: 74% VEF1: 3,6L (89% del valor teórico) CVF: 5,0L (95% del valor teórico)
- A) Asma
- B) EPOC
- C) Fibrosis pulmonar
- D) Bronquiectasias
- E) Bronquitis crónica
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Asma). Es un patrón obstructivo, que mejora con broncodilatador, es decir, un asma.. La enfermedad mixta del tejido conectivo (EMTC) es una mezcla de manifestaciones de artritis reumatoide (artritis), lupus (úlceras orales, rash malar, pericarditis, lupus cutáneo subagudo), esclerodermia (fenómeno de Raynaud, disfagia, esclerodactilia) y miositis (como en la polimiositis/dermatomiositis), pudiendo además complicarse con síndrome de Sjögren. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [7] EUNACOM Diciembre 2019 · Pregunta 146 · confianza 0.75
Una paciente de 24 años presenta tos frecuente y disnea, asociada a sibilancias, que son mayores en la noche y que aumentan con el ejercicio, cuando fuma y en la primavera. Al examen físico presenta espiración prolongada y examen pulmonar con sibilancias bilaterales inspiratorias y espiratorias. ¿Cuál es el tratamiento más adecuado?
- A) Evitar la exposición a desencadenantes
- B) Salbutamol inhalado cada 6 horas
- C) Budesonida inhalada cada 12 horas
- D) Salmeterol inhalado cada 12 horas
- E) Desensibilizar para los alérgenos
**Correcta: C**
Explicación del banco: [Pregunta disputada] Es una pregunta técnicamente mala, ya que debe recibir corticoides inhalados (C) más broncodilatadores de corta acción (B) y, dada la abundancia de síntomas, probablemente también de larga acción (D). Además, obviamente debe dejar de fumar (A). De las opciones, tengo la impresión de que la respuesta podría ser C, porque los corticoides son los que previenen la aparición de síntomas, aunque el salbutamol debe indicarse de inmediato, por estar tan sintomático, aunque no cada 6 horas, sino SOS.

### [8] EUNACOM Julio 2025 · Pregunta 16 · confianza 0.7
Paciente de 22 años con episodios de disnea y sibilancias. Radiografía de tórax PA y lateral: hiperinsuflación bilateral, horizontalización de costillas. ¿Cuál es el diagnóstico más probable?
- A) Asma bronquial
- B) Neumotórax espontáneo
- C) Derrame pleural bilateral
- D) Neumonía bilateral
- E) Fibrosis quística
**Correcta: A**
Explicación del banco: Hiperinsuflación en radiografía de tórax durante crisis de disnea con sibilancias en joven = asma bronquial. El atrapamiento aéreo produce la imagen de hiperinsuflación.

### [9] EUNACOM Diciembre 2025 · Pregunta 127 · confianza 0.65
Un paciente de 38 años, con antecedente de asma bronquial en tratamiento con ﬂu8casona inhalada, 1 puﬀ de 250 mcg cada 12 horas, y salbutamol, 1 puﬀ en caso de necesidad, y rini8s alérgica en tratamiento con loratadina 10 mg al día, presenta aumento de su sintomatología en primavera, requiriendo uso frecuente de salbutamol 2 a 3 veces al día. Al examen Fsico está en buenas condiciones, eupneico y en su examen pulmonar se auscultan sibilancias bilaterales. ¿Cuál es la conducta más adecuada?
- A) Aumentar la dosis de ﬂu2casona inhalada
- B) Indicar salbutamol en horario
- C) Prohibir la ac2vidad :sica al aire libre
- D) Agregar inhibidor del receptor de leucotrienos
- E) Mantener tratamiento
**Correcta: A**
Explicación del banco: Es una pregunta discuGble, más aún si tomamos en cuenta que disGntas guías sobre el tratamiento de asma dicen cosas diferentes. A conGnuación, el resumen de lo recomendado por la guía GINA: El régimen de elección (Track 1) uGliza MART (“Terapia de Mantención And Rescate”), a base de formoterol + corticoides (budesonida) - Paso 1: MART SOS. - Paso 2: Agregar MART 1 puﬀ al día horario (aceptable mantenerlo solo SOS). - Paso 3: Agregar MART horario. - Paso 4: Subir dosis de cor<coides del MART. - Paso 5: Agregar LAMA (antimuscarínicos de larga acción, ej. Gotropio) horario y evaluar biológicos (ej. anticuerpos anti-IgE, anti-IL-5, anti-IL-5R, anti-IL-4R). El régimen alterna<vo (Track 2) es el clásico y más usado en Chile uGliza salbutamol SOS como rescate más una terapia de mantención según horario. - Paso 1: Salbutamol SOS + cor<coides SOS (disGntos puﬀ o mezcla). Ya no se recomienda el uso de salbutamol en monoterapia para el manejo crónico. - Paso 2: Agregar cor<coides inhalados 1 vez al día. - Paso 3: Agregar betaagonistas de larga acción (LABA), ej. salmeterol o formoterol). - Paso 4: Subir dosis de cor<coide inhalado. - Paso 5: Mantención con 3 fármacos: corticoides + LABA + LAMA y evaluar biológicos. Ahora volviendo a la pregunta, no estaba dentro de las opciones agregar un broncodilatador de larga acción (ej. formoterol), que hubiese sido la respuesta más correcta. Las dos opciones aceptables serían aumentar la dosis del corticoides y agregar inhibidores de leucotrienos. Por un lado, ya está con una dosis moderada de corticoides (saber esa dosis no es algo que deba hacer el médico general), por lo que no parece correcta subirla. Por otro lado, aunque los inhibidores de leucotrienos Genen algún beneﬁcio en quienes Genen un componente claramente alérgico, como en este caso, las recomendaciones más recientes no los recomiendan en adultos, por su alta tasa de efectos adversos, incluyendo patología psiquiátrica grave (hoy únicamente se aceptan en niños, advirGendo los riesgos). Por ello, dejaremos como respuesta correcta el aumento de la dosis de corticoides, aunque probablemente lo correcto en el Eunacom fue agregar un inhibidor de leucotrienos, por ser una pregunta más antigua.

### [10] EUNACOM Julio 2025 · Pregunta 15 · confianza 0.6
Paciente de 30 años con tos nocturna y disnea de esfuerzo. Espirometría basal normal. Se realiza test de provocación con metacolina: caída del VEF1 del 22% con dosis de 8 mg/mL. ¿Cuál es el diagnóstico?
- A) Asma bronquial
- B) EPOC
- C) Bronquiectasias
- D) Fibrosis pulmonar
- E) Bronquiolitis obliterante
**Correcta: A**
Explicación del banco: Caída del VEF1 ≥20% con metacolina = hiperreactividad bronquial = test positivo para asma. Es el gold standard cuando la espirometría basal es normal.

### [11] EUNACOM Julio 2025 · Pregunta 17 · confianza 0.6
Paciente de 25 años con tos y sibilancias recurrentes. Espirometría muestra VEF1/CVF 68% (< 70%), VEF1 72% del predicho. Post broncodilatador: VEF1 aumenta 15% y 220 mL. ¿Cuál es el diagnóstico?
- A) Asma bronquial
- B) EPOC leve
- C) Bronquiectasias
- D) Fibrosis pulmonar idiopática
- E) Traqueomalacia
**Correcta: A**
Explicación del banco: Obstrucción espirométrica + prueba broncodilatadora positiva (aumento VEF1 ≥12% y ≥200 mL) = asma bronquial. La reversibilidad distingue asma de EPOC.

### [12] EUNACOM Diciembre 2024 · Pregunta 154 · confianza 0.65
Paciente con síndrome nefrótico e hipergammaglobulinemia policlonal, complemento bajo. Diagnóstico:
- A) Lupus
- B) Amiloidosis
- C) Mieloma múltiple
- D) Hemograma y VHS
- E) Ecografía
**Correcta: A**
Explicación del banco: Diagnóstico: **Lupus** (opción **A**). El lupus eritematoso sistémico (LES) es una enfermedad del tejido conectivo ANA positiva potencialmente grave. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.
