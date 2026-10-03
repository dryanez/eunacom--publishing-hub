# CLASE reuma-19 · Reumatologia 9.19: Artritis Reactiva (Síndrome de Reiter): Tríada Clásica, Chlamydia y Tratamiento

Escribe `classes/lessons/reuma-19.cjs` siguiendo el PAQUETE COMÚN. El `id` es "reuma-19" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- reuma-16: Reumatologia 9.16: Espondiloartritis: Concepto Unificador, HLA-B27 y Lumbago Inflamatorio vs Mecánico
- reuma-17: Reumatologia 9.17: Espondilitis Anquilosante (EA): Sacroilitis Bilateral, Columna en Caña de Bambú y Terapia Anti-TNF
- reuma-18: Reumatologia 9.18: Artritis Psoriásica (Dactilitis, Pitting Ungueal) y Artritis Asociada a EII
- reuma-20: Reumatologia 9.20: Enfermedad de Behçet: Aftosis Orogenital Recurrente, Fenómeno de Patergia y Panuveítis
- reuma-21: Reumatologia 9.21: Vasculitis de Vaso Grande y Mediano: Arteritis de la Temporal (Células Gigantes / Urgencia Visual) y Arteritis de Takayasu
- reuma-22: Reumatologia 9.22: Vasculitis de Vaso Pequeño ANCA Positivas (GPA, PAM, EGPA) y Púrpura de Henoch-Schönlein (Vasculitis por IgA)

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "reuma-19",
  "classId": "reuma-19",
  "tier": 2,
  "blockNum": 4,
  "blockName": "Espondiloartritis Seronegativas y Enfermedad de Behçet",
  "topicLabel": "9.19",
  "title": "Artritis Reactiva (Síndrome de Reiter): Tríada Clásica, Chlamydia y Tratamiento",
  "perfilCode": "1.04.1.010",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Sin garantía GES específica · Diagnóstico y manejo inicial en atención primaria/urgencia",
  "reconstrucciones": "EUNACOM 2018 Q#44 · EUNACOM 2020 Q#15 · EUNACOM 2023 Q#30",
  "frecuencia": "Alta · Caso clínico típico de hombre joven con oligoartritis postinfecciosa en EUNACOM",
  "algoTitle": "Algoritmo Diagnóstico y Terapéutico en Artritis Reactiva (Síndrome de Reiter)",
  "diagram": {
    "title": "Algoritmo Diagnóstico y Terapéutico en Artritis Reactiva (Síndrome de Reiter)",
    "svg": "<svg viewBox=\"0 0 620 328\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n<rect class=\"acc\" x=\"12\" y=\"8\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Oligoartritis Asimétrica Aguda en Miembros Inferiores (Rodilla, Tobillo)</text>\n<text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Inicio 1 a 4 semanas después de infección urogenital o gastrointestinal · Paciente HLA-B27 (+)</text>\n<path class=\"ln\" d=\"M310,47 V69\"/>\n<rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Búsqueda de la Tríada Clásica y Manifestaciones Mucocutáneas</text>\n<text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Reconocimiento semiológico de los componentes del Síndrome de Reiter</text>\n<path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n<path class=\"ln\" d=\"M310,138 H462 V148\"/>\n<text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Tríada Clásica de Reiter</text>\n<text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Lesiones Cutáneas Específicas</text>\n<rect class=\"warn\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">1) Uretritis + 2) Conjuntivitis + 3) Artritis</text>\n<text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Secreción uretral serosa estéril</text>\n<text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Ojo rojo bilateral no supurativo · Oligoartritis aditiva</text>\n<rect class=\"warn\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Balanitis Circinada y Queratodermia</text>\n<text class=\"warnT sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Erosiones en glande</text>\n<text class=\"warnT sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Placas hiperqueratósicas en palmas/plantas (blenorrágica) · Aftas orales</text>\n<path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n<path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n<rect class=\"dec\" x=\"12\" y=\"220\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Pilar Diagnóstico Microbiológico: Líquido Sinovial Estéril</text>\n<text class=\"sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Artrocentesis: Líquido inflamatorio aséptico · Buscar patógeno gatillante: PCR Chlamydia en orina</text>\n<path class=\"ln\" d=\"M310,259 V281\"/>\n<rect class=\"acc\" x=\"12\" y=\"281\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"296\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento Médico Escalonado</text>\n<text class=\"accS\" x=\"310\" y=\"308\" text-anchor=\"middle\">1) AINEs plenos para la artritis · 2) Doxiciclina 100mg c/12h x 7d si infección activa genital (+ pareja)</text>\n</svg>"
  },
  "contexto": "La Artritis Reactiva es una sinovitis estéril inmunomediada gatillada por infecciones a distancia. En EUNACOM es un clásico reconocer la tríada de Reiter (uretritis, conjuntivitis y artritis asimétrica en extremidades inferiores tras contacto sexual de riesgo), la esterilidad del líquido articular y el tratamiento antiinflamatorio con AINEs asociado al tratamiento antibiótico del foco urogenital si está activo.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología y Microorganismos Gatillantes",
      "paragraphs": [
        "La Artritis Reactiva es una artropatía inflamatoria aséptica que se manifiesta entre <strong>1 y 4 semanas posteriores a una infección primaria extraarticular</strong> mucosal (urogenital o gastrointestinal).",
        "Existe una fuerte predisposición genética ligada al <strong>HLA-B27 (positivo en el 60-80% de los pacientes)</strong>, lo que condiciona un procesamiento anómalo de los antígenos bacterianos con migración de complejos inmunes y linfocitos T a las sinoviales.",
        "<strong>Patógenos Desencadenantes Principales:</strong>",
        "• <strong>Vía Urogenital / Transmisión Sexual:</strong> <strong>Chlamydia trachomatis</strong> (es el agente gatillante más frecuente en hombres jóvenes), <em>Ureaplasma urealyticum</em>.",
        "• <strong>Vía Digestiva / Enterérica:</strong> <em>Campylobacter jejuni, Salmonella enteritidis, Shigella flexneri, Yersinia enterocolitica</em> y <em>Clostridioides difficile</em>."
      ]
    },
    {
      "subhead": "2. Manifestaciones Clínicas: La Tríada Clásica de Reiter",
      "paragraphs": [
        "La presentación clínica típica comprende la <strong>Tríada Clásica de Reiter</strong> (presente completa en 30-50% de los casos):",
        "1. <strong>Artritis Periférica:</strong> Oligoartritis aguda o subaguda, marcadamente <strong>asimétrica y aditiva, que afecta de forma predominante a las extremidades inferiores</strong> (rodillas, tobillos y articulaciones metatarsofalángicas/interfalángicas de los pies). Se asocia a entesitis aquiliana y dactilitis.",
        "2. <strong>Afección Urogenital:</strong> Uretritis no gonocócica en el hombre (disuria, secreción uretral acuosa o mucopurulenta escasa) o cervicitis/salpingitis en la mujer, que suele preceder en 2 semanas a la artritis.",
        "3. <strong>Afección Ocular:</strong> Conjuntivitis bilateral no purulenta, transitoria y leve (presente en 40-50%), o uveítis anterior aguda unilateral.",
        "<strong>Lesiones Mucocutáneas Patognomónicas:</strong>",
        "• <strong>Balanitis Circinada:</strong> Erosiones eritematosas superficiales serpiginosas no dolorosas de bordes blanquecinos en el glande y meato urinario (presente en 20-40% de los hombres).",
        "• <strong>Queratodermia Blenorrágica:</strong> Lesiones pápulo-pustulosas que evolucionan a placas hiperqueratósicas de aspecto córneo en <strong>palmas de manos y plantas de los pies</strong>, indistinguibles clínicamente de la psoriasis pustulosa.",
        "• Úlceras orales superficiales e indoloras en mucosa yugal y lengua."
      ]
    },
    {
      "subhead": "3. Diagnóstico y Manejo Terapéutico",
      "paragraphs": [
        "• <strong>Estudio de Líquido Sinovial:</strong> La artrocentesis muestra un líquido inflamatorio (2.000 a 50.000 leucocitos/mm³ con predominio PMN), pero <strong>la tinción de Gram y los cultivos microbiológicos son ESTRICTAMENTE NEGATIVOS</strong> (la articulación está libre de bacterias viables).",
        "• <strong>Identificación del Patógeno Primario:</strong> PCR para <em>Chlamydia trachomatis</em> en muestra de orina de primer chorro o frotis uretral/cervical, o coprocultivo/serología si hubo diarrea.",
        "• <strong>Tratamiento Médico:</strong>",
        "1. <em>Manejo Articular:</em> <strong>AINEs a dosis plenas</strong> (Naproxeno 500 mg c/12h o Indometacina 50-75 mg c/8-12h) de primera línea. En mono/oligoartritis resistente se indican infiltraciones locales con corticoides.",
        "2. <em>Manejo Antimicrobiano:</em> Si se detecta infección urogenital activa por <em>Chlamydia trachomatis</em>, se debe tratar con <strong>Doxiciclina 100 mg cada 12 horas vía oral por 7 a 10 días</strong> (o Azitromicina 1 g oral en dosis única), siendo <strong>mandatorio tratar conjuntamente a la pareja sexual</strong>. <em>Nota EUNACOM:</em> Los antibióticos no curan la artritis ya instaurada, pero erradican el foco genital y previenen recidivas."
      ]
    }
  ],
  "table": {
    "title": "Espectro Clínico del Síndrome de Reiter / Artritis Reactiva",
    "headers": [
      "Sistema Orgánico",
      "Manifestación Clínica Típica",
      "Signo Semiológico Clave"
    ],
    "rows": [
      [
        "Articular",
        "Oligoartritis asimétrica de extremidades inferiores",
        "Derrame en rodilla, tobillo y dactilitis en pie"
      ],
      [
        "Genitourinario",
        "Uretritis no gonocócica / cervicitis",
        "Secreción uretral mucoide y disuria"
      ],
      [
        "Ocular",
        "Conjuntivitis no infecciosa / Uveítis anterior",
        "Ojo rojo estéril transitorio"
      ],
      [
        "Cutáneo genital",
        "Balanitis circinada",
        "Erosiones serpiginosas indoloras en glande"
      ],
      [
        "Cutáneo acral",
        "Queratodermia blenorrágica",
        "Placas hiperqueratósicas en palmas y plantas"
      ],
      [
        "Mucoso oral",
        "Aftas orales superficiales",
        "Úlceras mucosas no dolorosas en paladar/lengua"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 23 años consulta por dolor e inflamación en rodilla izquierda y tobillo derecho de 10 días de evolución, con gran dificultad para apoyar el pie. Refiere que hace 3 semanas presentó ardor al orinar con escasa secreción uretral blanquecina matinal tras un contacto sexual de riesgo sin protección, a lo que siguió ojo rojo bilateral leve que resolvió espontáneamente. Al examen físico destaca rodilla izquierda con derrame articular a tensión y dactilitis en el segundo dedo del pie derecho. En el glande se aprecian erosiones circulares confluentes no dolorosas (balanitis circinada). La artrocentesis de rodilla da salida a líquido turbio con 32.000 leucocitos/mm³ con Gram negativo y cultivos bacterianos negativos.",
    "conducta": "El paciente presenta la clásica tríada de Reiter (uretritis + conjuntivitis + oligoartritis asimétrica de extremidades inferiores), asociada a dactilitis y balanitis circinada, gatillada por una infección urogenital previa por Chlamydia trachomatis. La esterilidad del líquido sinovial confirma una Artritis Reactiva aséptica. El tratamiento de primera línea para la artritis son los AINEs a dosis plenas continuas, debiendo prescribirse Doxiciclina oral tanto al paciente como a su pareja sexual para tratar la clamidia genital activa."
  },
  "explicacion": "El paciente presenta la clásica tríada de Reiter (uretritis + conjuntivitis + oligoartritis asimétrica de extremidades inferiores), asociada a dactilitis y balanitis circinada, gatillada por una infección urogenital previa por Chlamydia trachomatis. La esterilidad del líquido sinovial confirma una Artritis Reactiva aséptica. El tratamiento de primera línea para la artritis son los AINEs a dosis plenas continuas, debiendo prescribirse Doxiciclina oral tanto al paciente como a su pareja sexual para tratar la clamidia genital activa.",
  "keyPoints": [
    "La Artritis Reactiva se desarrolla 1 a 4 semanas tras una infección urogenital (Chlamydia) o digestiva.",
    "La Tríada de Reiter comprende: 1) Uretritis no gonocócica, 2) Conjuntivitis estéril y 3) Oligoartritis asimétrica.",
    "Afecta predominantemente las articulaciones de extremidades inferiores (rodillas, tobillos, dedos del pie).",
    "Las lesiones mucocutáneas clásicas son la Balanitis Circinada y la Queratodermia Blenorrágica palmoplantar.",
    "El líquido sinovial es inflamatorio pero ESTÉRIL (Gram y cultivos bacterianos negativos).",
    "Tratamiento articular de primera línea: AINEs a dosis plenas continuas.",
    "Si se demuestra infección activa por Chlamydia, se debe tratar con Doxiciclina o Azitromicina al paciente y a su pareja."
  ],
  "questions": [
    {
      "stem": "Un paciente de 45 años presenta un cuadro diarreico autolimitado. Diez días\ndespués inicia cuadro de dolor lumbar, artritis de rodillas y manos, asociados a\nojo rojo profundo y disuria. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Púrpura trombocitopénico trombótico"
        },
        {
          "id": "B",
          "text": "Síndrome de Reiter"
        },
        {
          "id": "C",
          "text": "Enfermedad de Behcet"
        },
        {
          "id": "D",
          "text": "Vasculitis de Wegener"
        },
        {
          "id": "E",
          "text": "Crioglobulinemia"
        }
      ],
      "correcta": "B",
      "explicacion": "El caso clínico describe un paciente de 45 años que presenta un cuadro diarreico autolimitado seguido, aproximadamente 10 días después, por un cuadro caracterizado por: dolor lumbar, artritis (rodillas y manos), ojo rojo profundo y disuria. Esta secuencia y presentación clínica son altamente sugestivas de un Síndrome de Reiter, también conocido como artritis reactiva. El síndrome de Reiter clásico se define como una tríada de artritis, uretritis (manifestada aquí como disuria) y conjuntivitis (manifestada como ojo rojo). En este caso, la diarrea previa sugiere una infección entérica como desencadenante, lo cual es común en la artritis reactiva. La artritis reactiva se caracteriza por ser una oligoartritis asimétrica, afectando predominantemente grandes articulaciones de extremidades inferiores (rodillas, tobillos), aunque también puede afectar pequeñas articulaciones como las de las manos. El dolor lumbar puede ser reflejo de sacroileitis, otra manifestación común en la artritis reactiva.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.002"
    },
    {
      "stem": "Un paciente de 45 años inicia un cuadro de dolor lumbar insidioso, mayor\ncon el reposo, asociado a artritis de rodillas y manos, con a ojo rojo y disuria\ndolorosa. Refiere estar utilizando doxiciclina, hace una semana, debido a una\nenfermedad de transmisión sexual. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Lupus por drogas"
        },
        {
          "id": "B",
          "text": "Síndrome de Reiter"
        },
        {
          "id": "C",
          "text": "Vasculitis leucocitoclástica"
        },
        {
          "id": "D",
          "text": "Reacción fototóxica secundaria al uso de tetraciclinas"
        },
        {
          "id": "E",
          "text": "Espondilitis anquilosante"
        }
      ],
      "correcta": "B",
      "explicacion": "El síndrome de Reiter, ahora conocido como Artritis Reactiva, es una condición inflamatoria que típicamente se presenta después de una infección, comúnmente gastrointestinal o genitourinaria. La tríada clásica (aunque no siempre completa) incluye artritis (generalmente asimétrica, oligoarticular, afectando principalmente miembros inferiores), uretritis (que se manifiesta como disuria dolorosa) y conjuntivitis (el \"ojo rojo\"). En este caso, el paciente presenta dolor lumbar (una forma de espondiloartropatía), artritis de rodillas y manos, ojo rojo y disuria dolorosa, lo cual se alinea perfectamente con el diagnóstico de Artritis Reactiva. La aparición reciente de una enfermedad de transmisión sexual (ETS) tratada con doxiciclina es un desencadenante típico para esta condición, especialmente si la ETS fue una uretritis causada por Chlamydia trachomatis o si hubo una infección gastrointestinal concurrente.\n\nLa presentación insidiosa y el empeoramiento con el reposo del dolor lumbar sugieren un componente inflamatorio, como en las espondiloartropatías, de las cuales la artritis reactiva es un miembro importante. La afectación de las articulaciones periféricas (rodillas y manos) junto con la uretritis y la conjuntivitis completan el cuadro diagnóstico. Si bien la doxiciclina es un tratamiento, no previene el desarrollo de la artritis reactiva en sí, que es una respuesta inmunológica al patógeno inicial.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.002"
    }
  ],
  "vignetteText": "Hombre de 23 años consulta por dolor e inflamación en rodilla izquierda y tobillo derecho de 10 días de evolución, con gran dificultad para apoyar el pie. Refiere que hace 3 semanas presentó ardor al orinar con escasa secreción uretral blanquecina matinal tras un contacto sexual de riesgo sin protección, a lo que siguió ojo rojo bilateral leve que resolvió espontáneamente. Al examen físico destaca rodilla izquierda con derrame articular a tensión y dactilitis en el segundo dedo del pie derecho. En el glande se aprecian erosiones circulares confluentes no dolorosas (balanitis circinada). La artrocentesis de rodilla da salida a líquido turbio con 32.000 leucocitos/mm³ con Gram negativo y cultivos bacterianos negativos."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "artritis, reactiva, clasica, chlamydia")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Diciembre 2019 · Pregunta 100 · confianza 0.9
Un paciente de 24 años mantiene relación sexual casual hace 7 días, con penetración vaginal, sin protección evolucionando con disuria, sin otros síntomas. Al examen físico y genital, no hay alteraciones. ¿Cuál es el agente etiológico más probable?
- A) Mycoplasma genitalium
- B) Ureaplasma urealyticum
- C) Chlamydia trachomatis
- D) Trichomona vaginalis
- E) Escherichia coli
**Correcta: C**
Explicación del banco: Pregunta difícil, ya que A, B, C y D pueden producir ese cuadro clínico. Sin embargo, la Chlamydia es la causa más frecuente de uretritis, después de la gonorrea (la que bastante purulenta, casi siempre; mientras que las demás pueden no serlo).

### [2] EUNACOM Julio 2019 · Pregunta 61 · confianza 0.85
Un hombre de 34 años consulta por disuria, asociada a secreción uretral purulenta, de un día de evolución. Refiere haber tenido relaciones sexuales sin protección hace una semana. Se realiza tinción de Gram de la secreción uretral, observándose abundantes cocáceas Gram negativas intra y extracelulares. El agente etiológico más probable es:
- A) Neisseria gonorrhoeae
- B) Treponema pallidum
- C) Chlamydia trachomatis
- D) Mycoplasma genitalium
- E) Streptococcus pyogenes
**Correcta: A**
Explicación del banco: Las cocáceas G(-) intracelulares son gonococo. Se debe tratar con ceftriaxona IM (259 mg por una vez), pero, además, se debe cubrir Chlamydia con doxiciclina o azitromicina o doxiciclina.

### [3] EUNACOM Julio 2016 · Pregunta 110 · confianza 0.8
Un paciente de 24 años mantiene relaciones sexuales, por vía vaginal, sin protección, evolucionando con disuria, sin otros síntomas. Al examen físico y genital, no hay alteraciones. ¿Cuál es el agente etiológico más probable?
- A) Trichomona vaginalis
- B) Treponema pallidum
- C) Ureaplasma urealyticum
- D) Mycoplasma genitalis
- E) Chlamydia trachomatis
**Correcta: E**
Explicación del banco: Pregunta pésima, puede ser cualquiera de las opciones, menos la B. Sin embargo, la causa más frecuente de uretritis no gonocócica es la Chlamydia trachomatis. Si bien le falta clínica para tener una uretritis (solo tiene disuria, sin secreción uretral), pareciera que es lo que se está preguntando, dadas las alternativas.

### [4] EUNACOM Julio 2025 · Pregunta 36 · confianza 0.75
Hombre de 25 años con secreción uretral purulenta y disuria de 4 días de evolución. Tinción de Gram: diplococos gram negativos intracelulares. ¿Cuál es el tratamiento de elección?
- A) Azitromicina 1 g oral dosis única
- B) Doxiciclina 100 mg c/12h por 7 días
- C) Ciprofloxacino 500 mg oral dosis única
- D) Amoxicilina 3 g oral dosis única
- E) Ceftriaxona 500 mg IM dosis única
**Correcta: E**
Explicación del banco: Gonorrea uretral: ceftriaxona 500 mg IM dosis única es el tratamiento de elección (guías CDC 2021). Alta resistencia a ciprofloxacino y amoxicilina. Se agrega azitromicina o doxiciclina para cubrir Chlamydia concomitante (coinfección en ~40% de casos).

### [5] EUNACOM Julio 2025 · Pregunta 37 · confianza 0.75
Hombre de 30 años consulta por úlcera indolora en glande de 5 días de evolución, bordes indurados, fondo limpio. Sin adenopatías inguinales dolorosas. ¿Cuál es el diagnóstico más probable?
- A) Sífilis primaria (chancro sifilítico)
- B) Herpes genital
- C) Chancroide (Haemophilus ducreyi)
- D) Linfogranuloma venéreo
- E) Carcinoma espinocelular de pene
**Correcta: A**
Explicación del banco: Úlcera genital única, indolora, bordes indurados, fondo limpio = chancro sifilítico (sífilis primaria por Treponema pallidum). El herpes es doloroso y con vesículas; el chancroide es doloroso.

### [6] EUNACOM Diciembre 2019 · Pregunta 136 · confianza 0.75
Un paciente consulta porque hace 3 días notó aparición de una úlcera en el pene, ubicada en el glande, de 1 cm de diámetro, de aspecto indurado, fondo limpio y sin otros síntomas. Además, se palpa una adenopatía inguinal derecha indolora. Se solicita VDRL y FTA-ABS, resultando ambos negativos. El diagnóstico más probable es:
- A) Sífilis primaria
- B) Chancroide
- C) Enfermedad de Behcet
- D) Infección por virus papiloma humano
- E) Linfogranuloma venéreo
**Correcta: A**
Explicación del banco: Es un chancro o sífilis primaria clásica. Es frecuente que las pruebas treponémicas y no treponémicas estén negativas al inicio, por lo que el diagnóstico es clínico (a lo más se confirma con una microscopía de campo oscuro).

### [7] EUNACOM Diciembre 2018 · Pregunta 169 · confianza 0.75
Una paciente de 19 años consulta por disuria dolorosa y lesiones vulvares, de 48 horas de evolución. Refiere relaciones sexuales sin protección. Al examen genital, tiene 3 úlceras de fondo amarillento y halo eritematoso. ¿Cuál es el diagnóstico más probable?
- A) Molusco contagioso
- B) Infección por Chlamydia trachomatis
- C) Herpes genital
- D) Chancro sifilítico
- E) Condiloma acuminado
**Correcta: C**
Explicación del banco: Diagnóstico: **Herpes genital** (opción **C**). [Pregunta disputada] Es un herpes genital clásico.. La artritis reactiva es una pelvispondiloartropatía que ocurre 1-4 semanas después de una infección. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [8] EUNACOM Julio 2019 · Pregunta 86 · confianza 0.7
Una mujer de 26 años, sexualmente activa y alérgica a la penicilina, consulta por disuria y molestias genitales, de 4 días de evolución, asociada a leucorrea. Al examen físico, se observan signos inflamatorios en el cuello uterino, con escasa leucorrea. El cultivo de Thayer Martin es positivo y prueba de aminas, negativa. El tratamiento de elección es:
- A) Ciprofloxacino
- B) Ceftriaxona
- C) Azitromicina
- D) Doxiciclina
- E) Penicilina benzatina
**Correcta: B**
Explicación del banco: Tiene una uretritis y cervicitis gonocócica (cultivo de Thayer Martin positivo) y, por tanto, se debe tratar con ceftriaxona de elección. La azitromicina y el ciprofloxacino también sirven, pero sigue siendo de elección la ceftriaxona. Es cierto que también se debe cubrir Chlamydia, por lo que la única respuesta que cubre todo es la azitromicina, pero se debe simplificar el enfrentamiento de esta pregunta, en que específicamente se pregunta el tratamiento de la gonorrea y, por ello, la respuesta es la B.

### [9] EUNACOM Julio 2015 · Pregunta 91 · confianza 0.6
¿Cuál es la conducta más adecuada ante un hombre joven, que presenta múltiples condilomas acuminados perianales?
- A) Descartar otras enfermedades de transmisión sexual
- B) Determinar el genotipo del virus papiloma
- C) Realizar rectosigmoidoscopía
- D) Realizar tratamiento con podofilino
- E) Indicar aciclovir oral
**Correcta: A**
Explicación del banco: Lo más importante en toda ETS es descartar otras ETS, en particular en los condilomas, que no tienen mayores complicaciones.

### [10] EUNACOM Julio 2016 · Pregunta 145 · confianza 0.55
Una paciente de sexo femenino de 17 años de edad, con antecedente de relaciones sexuales sin protección, consulta prurito vulvar, asociado a ardor progresivo. Refiere sensación de aumento del volumen de la vulva, que luego fue seguido por los síntomas actuales. Al examen físico se observa lo expuesto en la siguiente imagen. Se trata de una infección por:
- A) Treponema pallidum
- B) Virus herpes simplex
- C) Chlamydia tracomatis
- D) Virus papiloma humano
- E) Ureaplasma urealyticum
**Correcta: B**
Explicación del banco: La alternativa correcta es la **B** (Virus herpes simplex). Es un herpes genital clásico.. La artritis reactiva es una pelvispondiloartropatía que ocurre 1-4 semanas después de una infección. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [11] EUNACOM Diciembre 2025 · Pregunta 52 · confianza 0.5
Una mujer de 23 años consulta por disuria de 7 días de evolución asociada a dolor abdominal bajo. En su examen ginecológico 8ene especuloscopía con cuello uterino cerrado y sin lesiones y con paredes vaginales sin alteraciones. Al tacto vaginal presenta dolor a la compresión anterior de la vagina. Se solicita sedimento de orina, que muestra presencia de piuria y leucocituria y un urocul8vo, que resulta nega8vo a las 24 horas. ¿Cuál es la conducta más adecuada?
- A) Solicitar urocul2vo de 2empo extendido
- B) Solicitar UroTAC
- C) Solicitar cistoscopía
- D) Iniciar ﬂavoxato vía oral
- E) Solicitar panel de reacción de cadena de polimerasa para ITS
**Correcta: E**
Explicación del banco: La sospecha es una uretriGs por Chlamydia (más raro gonococo), dada la disuria con piuria aséptica y el dolor a la palpación uretral (zona anterior de la vagina). Además de solicitar la PCR para ITS, se debe iniciar tratamiento empírico con 1 dosis de cemriaxona (gonococo) + 10 días de doxicilina (clamidia), siendo una opción la azitromicina en monodosis. La piuria aséptica (sedimento con piuria + urocultivo negativo) también se ve en la tuberculosis renal y en las ITU en las que se iniciaron antibióticos antes de tomar el urocultivo.

### [12] EUNACOM Agosto 2021 · Pregunta 112 · confianza 0.5
Un paciente de 23 años, con antecedente de relación sexual sin protección, consulta porque hace 3 días notó aparición de una úlcera en el pene, ubicada en el glande, indolora, de 1 cm de diámetro, de aspecto indurado. Además, se palpa una adenopatía inguinal derecha indolora. Se solicita VDRL y FTA-ABS, resultando ambos negativos. El diagnóstico más probable es:
- A) Sífilis primaria
- B) Chancroide
- C) Enfermedad de Behcet
- D) Herpes genital
- E) Linfogranuloma venéreo
**Correcta: A**
Explicación del banco: Es un chancro clásico, cuyo diagnóstico es clínico (úlcera indolora) precisamente porque las pruebas suelen salir negativas al inicio (treponémicas y no treponémicas).

### [13] EUNACOM Diciembre 2019 · Pregunta 3 · confianza 0.97
Un paciente de 30 años, hipermétrope, consulta por cefalea intensa, en el lado derecho, asociado a náuseas, de intensidad 10/10. Al examen físico se observa ojo rojo profundo en el lado derecho, con pupila en midriasis fija y arreactiva. ¿Cuál es el diagnóstico más probable?
- A) Glaucoma agudo
- B) Trombosis de la vena central de la retina
- C) Cefalea cluster
- D) Celulitis orbitaria
- E) Accidente vascular encefálico
**Correcta: A**
Explicación del banco: Diagnóstico: **Glaucoma agudo** (opción **A**). Es un glaucoma agudo clásico.. El ojo rojo es uno de los motivos de consulta más frecuentes en la práctica clínica del médico general. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [14] EUNACOM Diciembre 2018 · Pregunta 149 · confianza 0.97
Un paciente de 48 años, con antecedente de hipermetropía, consulta por dolor en el ojo izquierdo, muy intenso, irradiado a la frente. Al examen físico, se aprecia eritema periquerático del ojo izquierdo, con pupila midriática arreactiva y se aprecia opacidad corneal. El ojo derecho tiene visión 20/20, mientras que el ojo izquierdo tiene visión borrosa, que solo es capaz de contar dedos. El diagnóstico más probable es:
- A) Conjuntivitis
- B) Uveítis aguda
- C) Queratitis viral aguda
- D) Trombosis de la vena central de la retina
- E) Glaucoma agudo
**Correcta: E**
Explicación del banco: Diagnóstico: **Glaucoma agudo** (opción **E**). Es un glaucoma agudo clásico: antecedente de hipermetropía, ojo rojo central y midriasis arreactiva.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [15] EUNACOM Julio 2016 · Pregunta 102 · confianza 0.97
Una paciente de 61 años consulta por dolor articular de ambas manos. Al examen se aprecia aumento de volumen de las articulaciones interfalángicas proximales y distales. Se solicita radiografía de manos, que muestra disminución simétrica del espacio interarticular de las articulaciones interfalángicas, con compromiso de la primera articulación carpometacarpiana bilateral, con presencia de quistes subcondrales. Los ANA y FR resultan positivos. El diagnóstico más probable es:
- A) Artritris psoriática
- B) Artriris reumatoide
- C) Artritis reactiva
- D) Condrocalcinosis
- E) Artrosis
**Correcta: E**
Explicación del banco: Tanto la clínica (compromiso de IFD, IFP y primera CMC), como la radiografía son clásicas de artrosis. No importa la positividad de marcadores, ya que están positivos en un 5% de las personas sanas y solo tienen importancia cuando la clínica es de Lupus o Artritis reumatoide, que no es el caso.

### [16] EUNACOM Julio 2013 · Pregunta 144 · confianza 0.97
Una paciente de 50 años consulta por dolor ocular izquierdo de inicio agudo, asociado a visión borrosa. Al examen físico destaca ojo rojo periquerático y pupila midriáticas arreactivas, la agudeza visual es de 0,6 en ojo izquierdo y 1 en ojo derecho. El diagnóstico más probable en este caso es:
- A) Uveítis aguda
- B) Endoftalmitis
- C) Queratitis aguda
- D) Escleritis
- E) Glaucoma agudo
**Correcta: E**
Explicación del banco: Diagnóstico: **Glaucoma agudo** (opción **E**). Glaucoma agudo de libro. El ojo rojo es uno de los motivos de consulta más frecuentes en la práctica clínica del médico general. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [17] EUNACOM Agosto 2021 · Pregunta 96 · confianza 0.95
Una paciente de 50 años consulta por artralgias y edema de las manos, especialmente en las articulaciones metacarpofalángicas, interfalángicas proximales y en las muñecas de ambas manos. Refiere fenómeno de Raynaud y rigidez matinal de 1 hora de duración. Además, relata sensación de arenilla ocular, hipolacrimia y xerostomía. Se solicitan exámenes, que muestran hemograma normal, VHS: 52 mm/h, PCR: 2,8 mg/dl, ENA (-), AntiDNA 2h (-) y anticuerpos anti- CCP mayores a 200 UI/ml. La radiografía de manos muestra edema de partes blandas y osteopenia yuxtarticular de los huesos metacarpianos. El diagnóstico más probable es:
- A) Lupus eritematoso sistémico
- B) Artritis reumatoide
- C) Artritis psoriática
- D) Esclerosis sistémica
- E) Síndrome de Sjörgren primario
**Correcta: B**
Explicación del banco: Diagnóstico: **Artritis reumatoide** (opción **B**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [18] EUNACOM Diciembre 2019 · Pregunta 27 · confianza 0.95
Un paciente de 58 años, fumador de 10 paquetes año, consulta por disnea, asociada a tos y expectoración mucosa. Los síntomas aumentan especialmente en relación a la actividad física y cuando presenta infecciones respiratorias. En su examen físico se auscultan escasas sibilancias bilaterales y espiración prolongada. Se solicita una espirometría que muestra: Basal Postbroncodilatador CVF 5.928cc 100% 6.106cc 103% VEF1 4.163cc 76% 5.040cc 92% VEF1/CVF 65% 73% Su radiografía de tórax se muestra a continuación: El diagnóstico más probable es:
- A) Asma bronquial
- B) Enfermedad pulmonar obstructiva crónica
- C) Bronquiectasias
- D) Bronquitis crónica
- E) Enfermedad pulmonar intersticial difusa
**Correcta: A**
Explicación del banco: Diagnóstico: **Asma bronquial** (opción **A**). Tiene un cuadro clínico y espirometría (patrón obstructivo que mejora con BD) compatibles con asma.. La enfermedad mixta del tejido conectivo (EMTC) es una mezcla de manifestaciones de artritis reumatoide (artritis), lupus (úlceras orales, rash malar, pericarditis, lupus cutáneo subagudo), esclerodermia (fenómeno de Raynaud, disfagia, esclerodactilia) y miositis (como en la polimiositis/dermatomiositis), pudiendo además complicarse con síndrome de Sjögren. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [19] EUNACOM Diciembre 2018 · Pregunta 28 · confianza 0.95
Una mujer de 30 años presenta un cuadro de malestar general y artralgias de varias semanas de evolución, asociada a febrícula ocasional. Al examen físico se aprecia rash facial, úlceras orales, alopecia difusa, artritis de varias articulaciones interfalángicas y metacarpofalángicas de ambas manos. Se solicitan exámenes, entre los que se encuentran hemograma con hematocrito: 30%, hemoglobina: 10 g/dl, leucocitos: 4.000 por mm3, con 15% de linfocitos, además se solicitan ANA (+) en dilución 1:640, Anti-DNA de 2 hebras (+) en dilución 1:160, C3: 60 mg/dl, C4:11 mg/dl, factor reumatoide: 65 U/ml y Anti-CCP (-). El diagnóstico más probable es:
- A) Artritis reumatoide
- B) Púrpura trombocitopénico trombótico
- C) Lupus eritematoso sistémico
- D) Vasculitis
- E) Dermatomiositis
**Correcta: C**
Explicación del banco: Tiene muchas cosas de lupus sistémico: ólceras orales, rash malar, linfocitos bajo, ANA+, anti-DNA+, hipocomplementemia.

### [20] EUNACOM Diciembre 2018 · Pregunta 29 · confianza 0.95
Una paciente de 42 años presenta artritis de las articulaciones interfalángicas distales y proximales de ambas manos, con afectaciónreciente de una articulación metatarsofalángica. Al examen físico, además de las artritis descritas, presenta múltiples depresiones en las uñas de las manos y engrosamiento de las uñas de los pies. ¿A qué tipo de artritis corresponde este cuadro?
- A) Reumatoide
- B) Reactiva
- C) Psoriática
- D) Gotosa
- E) Lúpica
**Correcta: C**
Explicación del banco: La alternativa correcta es la **C** (Psoriática). Es una artritis psoriática clásica (con los picotazos ungueales).. La artritis psoriásica es una pelvispondiloartropatía asociada a psoriasis. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [21] EUNACOM Diciembre 2017 · Pregunta 47 · confianza 0.95
Un paciente de 45 años ha presentado 3 episodios de gota en el último año, por lo que se inició tratamiento colchicina y luego se agregó alopurinol 100 mg/día. Actualmente está asintomático, sin signos de artritis y se controlar uricemia de 7 mg/dl. ¿Cuál es la conducta más adecuada?
- A) Suspender el tratamiento
- B) Aumetar la dosis de alopurinol a 300 mg/día
- C) Agregar probenecid al tratamiento
- D) Suspender la colchicina
- E) Agregar prednisona en baja dosis
**Correcta: D**
Explicación del banco: La colchicina tiene muchos efectos adversos, por lo que se prefiere no dejarla como tratamiento profiláctico, sino solo en las crisis agudas (en agudo los AINEs son de elección). EL alopurinol debe mantenerse, ya que tuvo más de 2 crisis en 1 año y actualmente tiene buenos niveles de ácido úrico.

### [22] EUNACOM Diciembre 2017 · Pregunta 45 · confianza 0.95
Una paciente de 50 años, con antecedente de fenómeno de Raynaud frecuente, desde hace 5 años consulta por edema de los dedos y artritis de algunas articulaciones interfalángicas. Se solicitan exámenes inmunológicos que resultan ANA: positivos 1/320, en patrón anticentrómero; antiDNA: negativos; Anti Sm: negativos; Anti Ro negativo; Anti La: negativo; Factor reumatoide: negativo. ¿Cuál es el diagnóstico más probable?
- A) Artritis psoriática
- B) Esclerosis sistémica
- C) Lupus
- D) Enfermedad mixta del tejido conectivo
- E) Artritis reumatoide
**Correcta: B**
Explicación del banco: Diagnóstico: **Esclerosis sistémica** (opción **B**). Es un CREST clásico.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [23] EUNACOM Julio 2013 · Pregunta 20 · confianza 0.95
Una paciente de 60 años, con antecedente de hipertensión en tratamiento, con cuadro de tres meses de dolor en ambas manos y muñecas, asociados a rigidez matinal de 2 horas de evolución. Al examen físico se aprecia compromiso en ambas manos de articulaciones metacarpofalángica e interfalangicas proximales. Se solicita radiografía de manos que muestra erosión de la base de la quinta articulación metacarpofalángica. Además se solicita factor reumatoídeo que resulta negativo y péptido citrulinado que también resulta negativo. El diagnóstico más probable es:
- A) Artritis reumatoídea
- B) Artritis psoriática
- C) Osteoartritis
- D) Espondilitis anquilosante
- E) Lupus con compromiso articular
**Correcta: A**
Explicación del banco: Diagnóstico: **Artritis reumatoídea** (opción **A**). Es una AR de libro, aunque tenga negativos los marcadores.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [24] EUNACOM Diciembre 2017 · Pregunta 59 · confianza 0.93
Un paciente de 40 años consulta por cefalea holocránea, mayor en la zona occipital, que se irradia al cuello. Suele iniciarse a medio día y alcanza su máxima intensidad al llegar a su casa, después del trabajo. Su examen neurológico no tiene signos focales ni meníngeos. ¿Cuál es el diagnóstico más probable?
- A) Cefalea tensional
- B) Migraña
- C) Cefalea en racimo o cluster
- D) Cefalea por hipertensión endocraneana
- E) Neuralgia de Arnold
**Correcta: A**
Explicación del banco: Diagnóstico: **Cefalea tensional** (opción **A**). Es una cefalea tensional clásica (como la que da al salir del Eunacom).. El tratamiento de la artritis reumatoide se basa en las drogas modificadoras de la artritis reumatoide (DMARs). Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [25] EUNACOM Diciembre 2019 · Pregunta 166 · confianza 0.92
Un paciente de 60 años, diabético, hipertenso y dislipidémico, con antecedente de artritis reumatoide en tratamiento con metotrexato, consulta por disminución progresiva de la calidad de la visión. A su examen físico, la exploración ocular es normal, con rojo pupilar normal bilateral. La agudeza visual es 20/25 en ambos ojos. La campimetría muestra defectos visuales en los dos cuadrantes superiores del campo visual izquierdo y en los dos cuadrantes mediales del campo visual derecho. ¿Cuál es el diagnóstico más probable?
- A) Degeneración macular relacionada con la edad
- B) Tumor del lóbulo occipital
- C) Catarata
- D) Glaucoma crónico
- E) Neuropatía óptica isquémica
**Correcta: D**
Explicación del banco: Es un glaucoma crónico clásico, con afectación del campo visual, de predominio periférico y agudeza visual conservada. La DMRE afecta la AV, al igual que la catarata y la NOI. El tumor occipital produciría una hemianopsia homónima (ej. solo derecho o solo izquierdo, pero no bimedial).
