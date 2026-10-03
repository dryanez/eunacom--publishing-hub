# CLASE reuma-16 · Reumatologia 9.16: Espondiloartritis: Concepto Unificador, HLA-B27 y Lumbago Inflamatorio vs Mecánico

Escribe `classes/lessons/reuma-16.cjs` siguiendo el PAQUETE COMÚN. El `id` es "reuma-16" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- reuma-13: Reumatologia 9.13: Miopatías Inflamatorias Autoinmunes: Polimiositis, Dermatomiositis y Tamizaje de Cáncer Oculto
- reuma-14: Reumatologia 9.14: Fenómeno de Raynaud Primario vs Secundario y Capilaroscopía Periungueal
- reuma-15: Reumatologia 9.15: Síndrome de Sjögren y Enfermedad Mixta del Tejido Conectivo (EMTC)
- reuma-17: Reumatologia 9.17: Espondilitis Anquilosante (EA): Sacroilitis Bilateral, Columna en Caña de Bambú y Terapia Anti-TNF
- reuma-18: Reumatologia 9.18: Artritis Psoriásica (Dactilitis, Pitting Ungueal) y Artritis Asociada a EII
- reuma-19: Reumatologia 9.19: Artritis Reactiva (Síndrome de Reiter): Tríada Clásica, Chlamydia y Tratamiento

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "reuma-16",
  "classId": "reuma-16",
  "tier": 2,
  "blockNum": 4,
  "blockName": "Espondiloartritis Seronegativas y Enfermedad de Behçet",
  "topicLabel": "9.16",
  "title": "Espondiloartritis: Concepto Unificador, HLA-B27 y Lumbago Inflamatorio vs Mecánico",
  "perfilCode": "1.05.1.001",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Sin garantía GES específica en generalidad · Manejo en APS y derivación a reumatología",
  "reconstrucciones": "EUNACOM 2017 Q#14 · EUNACOM 2020 Q#29 · EUNACOM 2023 Q#07",
  "frecuencia": "Alta · La distinción entre lumbago mecánico e inflamatorio es una de las preguntas fijas del examen",
  "algoTitle": "Diferenciación Clínica: Lumbago Inflamatorio (Espondiloartropatía) vs Mecánico",
  "diagram": {
    "title": "Diferenciación Clínica: Lumbago Inflamatorio (Espondiloartropatía) vs Mecánico",
    "svg": "<svg viewBox=\"0 0 620 267\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n<rect class=\"acc\" x=\"12\" y=\"8\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Dolor Lumbar Crónico (&gt; 3 meses) en Paciente Menor de 45 Años</text>\n<text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Identificación semiológica de banderas rojas inflamatorias según criterios ASAS</text>\n<path class=\"ln\" d=\"M310,47 V69\"/>\n<rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Características del Dolor y Comportamiento con el Ejercicio</text>\n<text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Diferenciación clínica cardinal inmediata</text>\n<path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n<path class=\"ln\" d=\"M310,138 H462 V148\"/>\n<text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Lumbago Inflamatorio (Criterios ASAS)</text>\n<text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Lumbago Mecánico Común</text>\n<rect class=\"warn\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Mejora con Ejercicio · Empeora con Reposo</text>\n<text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">Dolor nocturno (2da mitad noche)</text>\n<text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Rigidez matinal &gt; 30-60 min · Respuesta rápida a AINEs</text>\n<rect class=\"dec\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"t t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Empeora con Ejercicio · Alivia con Reposo</text>\n<text class=\"sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Inicio agudo tras esfuerzo · Sin dolor nocturno</text>\n<text class=\"sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Rigidez matinal breve &lt; 15 min · Kinesioterapia</text>\n<path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n<path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n<rect class=\"warn\" x=\"12\" y=\"220\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Rasgos Comunes de las Espondiloartritis Seronegativas</text>\n<text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">HLA-B27 positivo · FR y ANA negativos · Entesitis (Aquiles/fascia) · Uveítis anterior aguda unilateral</text>\n</svg>"
  },
  "contexto": "Las espondiloartritis representan una familia de artropatías autoinmunes axiales y periféricas interconectadas por la genética (HLA-B27) y la entesitis. La perla más evaluada en EUNACOM es la diferenciación semiológica indiscutible entre el lumbago mecánico común (que alivia en reposo) y el lumbago inflamatorio (que mejora con el movimiento y despierta al paciente en la madrugada).",
  "contentSections": [
    {
      "subhead": "1. Concepto Unificador de las Espondiloartritis Seronegativas",
      "paragraphs": [
        "Las espondiloartritis (SpA) constituyen un grupo heterogéneo pero estrechamente vinculado de enfermedades inflamatorias que comparten características etiopatogénicas, clínicas y radiológicas:",
        "1. <strong>Seronegatividad inmunológica:</strong> Ausencia constante de Factor Reumatoide (FR) y de Anticuerpos Antinucleares (ANA).",
        "2. <strong>Asociación Genética con HLA-B27:</strong> Presente en más del 90% de las espondilitis anquilosantes y en 50-70% de las formas reactivas, psoriásicas y enteropáticas.",
        "3. <strong>Afección Axial y Periférica:</strong> Inflamación crónica del esqueleto axial (sacroilitis y espondilitis) y oligoartritis asimétrica de predominio en miembros inferiores.",
        "4. <strong>Entesitis como Lesión Elemental:</strong> Inflamación del punto de anclaje óseo de tendones, ligamentos y cápsulas articulares (entesis aquiliana, fascia plantar, inserción de costillas).",
        "5. <strong>Manifestaciones Extraarticulares Compartidas:</strong> Uveítis anterior aguda unilateral con hipopión, psoriasis cutánea y ungueal, inflamación de mucosa intestinal subclínica o EII e insuficiencia aórtica."
      ]
    },
    {
      "subhead": "2. Semiología Comparada: Lumbago Inflamatorio vs Lumbago Mecánico",
      "paragraphs": [
        "La identificación del <strong>lumbago inflamatorio</strong> es la clave para la detección precoz antes de que se desarrolle anquilosis ósea irreversible:",
        "<strong>Criterios ASAS para Dolor Lumbar Inflamatorio (Sensibilidad 80%, Especificidad 72%):</strong>",
        "Se sospecha firmemente ante la presencia de <strong>al menos 4 de los siguientes 5 parámetros</strong> en un dolor lumbar crónico (≥ 3 meses de duración):",
        "1. <strong>Edad de inicio menor de 45 años.</strong>",
        "2. <strong>Comienzo insidioso</strong> y solapado (no agudo tras cargar peso).",
        "3. <strong>MEJORÍA franca con el ejercicio físico y el movimiento.</strong>",
        "4. <strong>EMPEORAMIENTO o nula mejoría con el reposo en cama.</strong>",
        "5. <strong>Dolor nocturno</strong> que despierta típicamente al paciente en la segunda mitad de la noche, obligándolo a levantarse y caminar para encontrar alivio.",
        "<em>Adicionalmente:</em> Se acompaña de <strong>rigidez matinal prolongada (> 30 a 60 minutos)</strong> y una <strong>respuesta dramática y casi completa a los AINEs</strong> dentro de las primeras 24 a 48 horas de iniciado el fármaco.",
        "<strong>Lumbago Mecánico:</strong> Es la causa del 90-95% de los dolores lumbares en la población general. Se debe a sobrecarga discal, contractura muscular o artrosis interapofisaria. <em>Comportamiento:</em> El dolor se desencadena o empeora con la flexión, bipedestación o carga, y <strong>CEDE COMPLETAMENTE CON EL REPOSO EN CAMA</strong>; no interrumpe el sueño y la rigidez matinal dura menos de 15 minutos."
      ]
    }
  ],
  "table": {
    "title": "Diagnóstico Diferencial Clínico: Lumbago Inflamatorio vs Mecánico",
    "headers": [
      "Parámetro Clínico",
      "Lumbago Inflamatorio (Espondiloartropatía)",
      "Lumbago Mecánico Común"
    ],
    "rows": [
      [
        "Edad habitual de inicio",
        "Menor de 45 años (típicamente 20 – 35 años)",
        "Cualquier edad (pico entre 30 y 60 años)"
      ],
      [
        "Forma de inicio",
        "Insidiosa, progresiva, sin desencadenante claro",
        "Aguda o subaguda, frecuentemente tras esfuerzo físico"
      ],
      [
        "Efecto del ejercicio",
        "MEJORA marcadamente con la actividad física",
        "EMPEORA con el ejercicio y la deambulación"
      ],
      [
        "Efecto del reposo",
        "EMPEORA con el reposo prolongado en cama",
        "MEJORA o desaparece con el reposo en cama"
      ],
      [
        "Dolor nocturno",
        "Frecuente en la 2da mitad de la noche; obliga a levantarse",
        "Raro o ausente (salvo cambios posturales bruscos)"
      ],
      [
        "Rigidez matinal",
        "Prolongada (superior a 30 – 60 minutos)",
        "Breve (menor a 15 – 30 minutos)"
      ],
      [
        "Respuesta a AINEs",
        "Espectacular y rápida (alivio > 75% en 24-48h)",
        "Parcial o modesta"
      ],
      [
        "Dolor en nalgas",
        "Alternante (en báscula: sacroilitis bilateral)",
        "Unilateral o irradiado por dermatoma (ciática)"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 26 años, administrativo, consulta por dolor lumbar bajo y en ambas nalgas de 5 meses de evolución. Refiere que el dolor es mucho más intenso en las mañanas al despertar, acompañado de rigidez de columna que dura más de 1 hora y que le dificulta calzarse los zapatos. El dolor lo despierta a las 4:00 AM, obligándolo a pasear por la habitación. Conforme camina y avanza el día, el dolor disminuye significativamente. Ha tomado Ibuprofeno 400 mg de forma ocasional con alivio casi inmediato de los síntomas.",
    "conducta": "El cuadro clínico cumple la totalidad de los criterios ASAS para Dolor Lumbar Inflamatorio: paciente menor de 45 años, duración mayor a 3 meses de inicio insidioso, dolor nocturno que interrumpe el sueño, rigidez matinal mayor a 60 minutos, mejoría nítida con el ejercicio, dolor glúteo alternante (sugerente de sacroilitis) y excelente respuesta a AINEs. El diagnóstico más probable es una Espondiloartritis axial precoz (Espondilitis Anquilosante). Requiere estudio con radiografía/resonancia magnética de articulaciones sacroilíacas y HLA-B27."
  },
  "explicacion": "El cuadro clínico cumple la totalidad de los criterios ASAS para Dolor Lumbar Inflamatorio: paciente menor de 45 años, duración mayor a 3 meses de inicio insidioso, dolor nocturno que interrumpe el sueño, rigidez matinal mayor a 60 minutos, mejoría nítida con el ejercicio, dolor glúteo alternante (sugerente de sacroilitis) y excelente respuesta a AINEs. El diagnóstico más probable es una Espondiloartritis axial precoz (Espondilitis Anquilosante). Requiere estudio con radiografía/resonancia magnética de articulaciones sacroilíacas y HLA-B27.",
  "keyPoints": [
    "El dolor lumbar inflamatorio MEJORA con el ejercicio y EMPEORA con el reposo en cama.",
    "El dolor nocturno en la segunda mitad de la noche que obliga a levantarse es característico de inflamación axial.",
    "Los criterios ASAS exigen dolor crónico (> 3 meses) en menores de 45 años con al menos 4 de 5 parámetros cardinales.",
    "El dolor en nalgas alternante (en báscula) es la manifestación semiológica de la sacroilitis bilateral.",
    "Las espondiloartritis son seronegativas: Factor Reumatoide y ANA son constantemente negativos.",
    "La entesitis (inflamación del tendón de Aquiles o fascia plantar) es la lesión patológica distintiva.",
    "La excelente y rápida respuesta analgésica a los AINEs es un rasgo diagnóstico de valor en el lumbago inflamatorio."
  ],
  "questions": [
    {
      "stem": "Todas las siguientes son manifestaciones de la espondilitis anquilosante\n(anquilopoyética) EXCEPTO:",
      "options": [
        {
          "id": "A",
          "text": "Dolor lumbar y rigidez de más de 3 meses que mejora con el ejercicio pero no con el reposo."
        },
        {
          "id": "B",
          "text": "Sacroileitis radiológica bilateral."
        },
        {
          "id": "C",
          "text": "Uveítis aguda anterior."
        },
        {
          "id": "D",
          "text": "Insuficiencia aórtica."
        },
        {
          "id": "E",
          "text": "Vasculitis de pequeños vasos"
        }
      ],
      "correcta": "E",
      "explicacion": "La espondilitis anquilosante (EA o espondiloartritis anquilopoyética) es una enfermedad inflamatoria crónica que pertenece al grupo de las espondiloartropatías seronegativas. Se caracteriza principalmente por la inflamación de las articulaciones sacroilíacas y la columna vertebral, pero también puede afectar otras articulaciones y tener manifestaciones extraarticulares. La vasculitis de pequeños vasos, sin embargo, no es una manifestación típica ni reconocida de la espondilitis anquilosante. Las vasculitis de pequeños vasos son un grupo diverso de trastornos en los que la inflamación afecta los vasos sanguíneos de pequeño calibre, como arteriolas, capilares y vénulas, y suelen presentarse con síntomas cutáneos (púrpura palpable), renales (glomerulonefritis), pulmonares (hemorragia alveolar), neurológicos o gastrointestinales.\n\nLa espondilitis anquilosante tiene mecanismos patogénicos distintos a los que subyacen a las vasculitis de pequeños vasos. Aunque ambas son enfermedades autoinmunes o inflamatorias, la patogenia de la EA está fuertemente asociada al HLA-B27 y se centra en la entesitis (inflamación de la inserción de tendones y ligamentos en el hueso) y la artritis de las articulaciones axiales. La presencia de vasculitis de pequeños vasos en un paciente con EA sería probablemente una coexistencia de dos enfermedades distintas o un diagnóstico alternativo, pero no una manifestación intrínseca de la espondilitis anquilosante.\n\nPor lo tanto, \"Vasculitis de pequeños vasos\" es la opción correcta como la manifestación que NO se asocia con la espondilitis anquilosante.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.018"
    },
    {
      "stem": "Hombre de 24 años, deportista. Consulta por dolor glúteo y lumbar de semanas de evolución, que lo despierta en la noche y que se alivia con la actividad. Refiere además talalgia matinal bilateral y una molestia en el tendón\naquiliano izquierdo. Ha ingerido antiinflamatorios con disminución parcial y\ntransitoria de los síntomas. Desde ayer nota que el segundo ortejo del pie\nderecho está rojo y doloroso. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Artritis séptica"
        },
        {
          "id": "B",
          "text": "Pelviespondilopatía"
        },
        {
          "id": "C",
          "text": "Gota"
        },
        {
          "id": "D",
          "text": "Condrocalcinosis"
        },
        {
          "id": "E",
          "text": "Lumbago mecánico"
        }
      ],
      "correcta": "B",
      "explicacion": "La alternativa correcta es **B (Pelviespondilopatía)**. Varias características del caso clínico apuntan a este diagnóstico. En primer lugar, el dolor lumbar de ritmo inflamatorio (predominio nocturno, mejora con el ejercicio) es un sello distintivo de las pelviespondilopatías. La talalgia matinal y la molestia en el tendón de Aquiles sugieren entesitis, una manifestación común de estas enfermedades. Además, la dactilitis (dedo en salchicha), manifestada como el segundo ortejo rojo y doloroso, es altamente sugestiva de espondiloartritis. La respuesta parcial y transitoria a antiinflamatorios no esteroideos (AINEs) también es consistente con el cuadro. En resumen, la combinación de dolor lumbar inflamatorio, entesitis y dactilitis en un hombre joven, deportista, hace que la pelviespondilopatía sea el diagnóstico más probable.\n\nSegún la Guía Clínica AUGE de Artritis Reumatoide del MINSAL, aunque esta guía se centra en la artritis reumatoide, es importante considerar otras etiologías de artritis y dolor inflamatorio, como las pelviespondilopatías, en el diagnóstico diferencial. Los criterios de clasificación para espondiloartritis axial (ASAS) y periférica (ASAS) deben ser considerados.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.018"
    }
  ],
  "vignetteText": "Hombre de 26 años, administrativo, consulta por dolor lumbar bajo y en ambas nalgas de 5 meses de evolución. Refiere que el dolor es mucho más intenso en las mañanas al despertar, acompañado de rigidez de columna que dura más de 1 hora y que le dificulta calzarse los zapatos. El dolor lo despierta a las 4:00 AM, obligándolo a pasear por la habitación. Conforme camina y avanza el día, el dolor disminuye significativamente. Ha tomado Ibuprofeno 400 mg de forma ocasional con alivio casi inmediato de los síntomas."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "espondiloartritis, concepto, unificador, lumbago, inflamatorio")
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

### [2] EUNACOM Julio 2019 · Pregunta 72 · confianza 0.96
Un paciente de 39 años, trabajador de la construcción, con IMC de 30, psoriático, consulta por dolor en la zona glútea profunda, de predominio nocturno, muy intenso y que va desapareciendo en la mañana, a medida que realiza sus actividades. El dolor inició hace 3 meses y ha aumentado. Hace 2 meses presentó una uveítis derecha. ¿Cuál es el diagnóstico más probable?
- A) Radiculopatía S1
- B) Espondiloartritis
- C) Espondilodiscitis
- D) Hernia del núcleo pulposo con compresión del plexo lumbar
- E) Raquiestenosis
**Correcta: B**
Explicación del banco: Tiene una espondilitis anquilosante clásica tanto por el lumbago inflamatorio (mayor en la noche y en el reposo) como por la uveítis.

### [3] EUNACOM Diciembre 2025 · Pregunta 143 · confianza 0.95
¿A qué concepto corresponde la siguiente deﬁnición: “Conjunto de medidas des8nadas a evitar que una enfermedad ocurra, actuando antes de que exista la enfermedad o el daño causado por esta”?
- A) Prevención primaria
- B) Prevención secundaria
- C) Prevención terciaria
- D) Prevención cuaternaria
- E) Promoción de la salud
**Correcta: A**
Explicación del banco: Prevención primaria actúa antes de que exista la enfermedad (ej. vacunas con papiloma). Prevención secundaria actúa cuando ya existe la enfermedad, pero todavía no hay síntomas, permiGendo un diagnóstico oportuno (ej. PAP). Prevención terciaria actúa cuando la enfermedad ya Gene síntomas, para recuperar la salud y evitar complicaciones y recidivas (ej. histerectomía radical). Prevención cuaternaria enfrenta los síntomas, en ausencia de una patología orgánica (ej. psicoterapia de trastorno somatomorfo). Promoción de la salud consiste en enseñar hábitos de vida saludables, por lo que se enmarca dentro de la prevención primaria, pero su deﬁnición es especíﬁca.

### [4] EUNACOM Julio 2017 · Pregunta 121 · confianza 0.95
Una paciente de 64 años consulta por artralgias de las manos, caderas y rodillas. Al examen físico presenta aumento de volumen de las articulaciones interfalángicas, con nódulos de Heberden. Además tiene limitación de los movimientos de las rodillas, con dolor y crepitación articular, sin signos inflamatorios y limitación a la abducción ambas caderas. ¿Cuál es el tratamiento inicial más adecuado?
- A) Prednisona
- B) Paracetamol
- C) Metotrexato
- D) Bifosfonatos
- E) Ibuprofeno
**Correcta: B**
Explicación del banco: Conducta / Tratamiento indicado: **Paracetamol** (opción **B**). La primera línea de tratamiento en la artrosis, es el paracetamol.. el tratamiento hay que saberlo bien, De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [5] EUNACOM Diciembre 2019 · Pregunta 4 · confianza 0.92
En gestión de salud, ¿cuál es la diferencia entre planificación y programación?
- A) La planificación se refiere a objetivos y recursos específicos, mientras que la programación es global
- B) La planificación es a largo plazo, mientras que la programación es anual
- C) La programación, a diferencia de la planificación, debe ser concordante con la misión y la visión de la institución
- D) La planificación se basa en lo determinado con la programación
- E) La planificación se relaciona a los costes y recursos de actividades concretas y la programación se relaciona con el presupuesto general del proyecto
**Correcta: B**
Explicación del banco: La planificación es a largo plazo y se refiere a la estrategia global de la institución. La programación se basa en la planificación y fija las actividades a realizarse y los recursos necesarios en el corto plazo, generalmente anual, mensual y semanalmente. La A, D y E están al revés los conceptos de planificación y programación. Ambas deben ser compatibles con la misión (la forma en que satisface una necesidad) y la visión (objetivo a larga plazo de la institución), ya que estas regulan la planificación, la que, a su vez, determina la programación.

### [6] EUNACOM Julio 2024 · Pregunta 116 · confianza 0.9
Una paciente de 27 años, usuaria de dispositivo intrauterino (DIU) de cobre, consulta por flujo genital de mal olor que empeora después de tener relaciones sexuales. Al examen físico se observa cuello uterino normal y secreción vaginal de color gris. ¿Cuál es la conducta más adecuada?
- A) Retirar el dispositivo intrauterino bajo cobertura antibiótica
- B) Indicar fluconazol vía oral
- C) Iniciar doxiciclina vía oral
- D) Realizar VDRL a la paciente y a su pareja.
- E) Indicar metronidazol por vía oral
**Correcta: E**
Explicación del banco: Vaginosis Bacteriana y DIU: La paciente presenta un cuadro clínico compatible con vaginosis bacteriana, la cual se trata con metronidazol vía oral o clindamicina tópica. A diferencia del proceso inflamatorio pélvico que no responde al tratamiento antibiótico después de 48 horas, en la vaginosis bacteriana no es necesario retirar el DIU.

### [7] EUNACOM Diciembre 2022 · Pregunta 132 · confianza 0.9
Un paciente de 70 años ha presentado 3 episodios de dolor y aumento de volumen de la rodilla derecha, que le impide o dificulta la marcha, pero que ha respondido a analgésicos. Acude nuevamente por los mismos síntomas, objetivándose artritis de rodilla derecha, con signos de derrame articular, por lo que se punciona, dando salida a un líquido articular inflamatorio, con abundantes cristales de pirofosfato de calcio, sin bacterias. ¿Qué fármaco es más adecuado para evitar recurrencias?
- A) Colchicina
- B) Naproxeno
- C) Alopurinol
- D) Hidroclorotiazida
- E) Metotrexato
**Correcta: A**
Explicación del banco: La opción correcta es la **A** (Colchicina). En este escenario clínico, colchicina se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [8] EUNACOM Agosto 2021 · Pregunta 104 · confianza 0.9
Un hombre de 68 años, diabético mal controlado, consulta por mialgias generalizadas de 2 semanas de evolución, mayores en los muslos, asociadas a debilidad, mayor en la cintura pélvica y astenia. En el último tiempo refiere dificultades para ponerse de pie, desde una silla o desde la cama. Al examen físico se objetiva debilidad muscular de predominio proximal, sin alteraciones sensitivas. Se solicitan exámenes, entre los que destacan hemograma con hemoglobina: 12,1 g/dl, hematocrito: 37%, blancos: 7.000 por mm3, plaquetas: 250.000 por mm3, VHS: 10 mm/hora. Además, trae glicemia: 150 mg/dl, creatinfosfoquinasa: 1.760 UI/L, LDH: 1.050 UI/L, PCR: 4,3 mg/L, SGOT: 250 UI/L, SGPT: 170 UI/L. ¿Cuál es el diagnóstico más probable?
- A) Polimiositis
- B) Polimialgia reumática
- C) Polineuropatía diabética
- D) Miopatía por cuerpos de inclusión
- E) Síndrome de Guillain Barré
**Correcta: A**
Explicación del banco: La debilidad proximal orienta a miopatía. La elevación de la CK y de los parámetros inflamatorios (PCR) orienta a polimiositis. La polimialgia reumática también puede tener una clínica similar e incluso elevar las CK, pero tiende a elevar mucho la VHS (la polimiositis también puede hacerlo) y, lo más importante, no tiene debilidad en el examen físico (aunque sí puede tener sensación de debilidad). La miopatía por cuerpos de inclusión también es una miopatía inflamatoria y puede tener una clínica similar, pero mucho más lenta (de años o varios meses) y suele afectar muslos y antebrazos con más frecuencia (afectación proximal y distal). Revisar semiología neurológica para las otras opciones.

### [9] EUNACOM Julio 2019 · Pregunta 64 · confianza 0.9
Un paciente de 81 años presenta dolor muy intenso den la rodilla derecha, con EVA 8/10, que le impide caminar. En su examen físico, se aprecia eritema y aumento de volumen de la rodilla. Se solicita radiografía de rodilla, que se muestra más abajo. Además, se realiza punción articular, que da salida a un líquido sinovial, con 160.000 glóbulos blancos por mm3, sin visualización de bacterias y con presencia de cristales con elongación positiva débil. ¿Cuál es el diagnóstico más probable?
- A) Artritis séptica
- B) Artritis por cristales de pirofosfato de calcio
- C) Artritis por cristales de hidroxiapatita de calcio
- D) Artritis por oxalato de calcio
- E) Gota
**Correcta: B**
Explicación del banco: Es una condrocalcinosis clásica tanto por la clínica como por la radiografía (meniscos calcificados). El líquido está muy inflamatorio y sugiere infección, pero dice que "no se visualizan bacterias" y, además, la CC puede presentarse, a veces, con más de 100.000 GB/mm3. Es causada por cristales de pirofosfato de calcio.

### [10] EUNACOM Diciembre 2019 · Pregunta 129 · confianza 0.9
Un paciente de 30 años presenta lumbago de 6 meses de evolución, intenso, que limita sus actividades y que es más molesto en la mañana y va cediendo durante el día. Al examen físico tiene lesiones descamativas en las rodillas y punteado ungueal y el examen de la columna muestra limitación a la flexión, con test de Schöber modificado de 2 cm. Se solicitan exámenes que muestran VHS: 60 mm/h, PCR: 5,0 mg/dl, anticuerpos antinucleares y factor reumatoide negativos. ¿Cuál es el examen de elección para establecer el diagnóstico en este paciente?
- A) Radiografía de columna lumbosacra
- B) Radiografía de columna dorsolumbar
- C) TAC de columna lumbosacra
- D) Resonancia magnética de columna dorsolumbar
- E) Resonancia magnética de articulaciones sacroilíacas
**Correcta: E**
Explicación del banco: Es una artritis psoriática clásica, con la pelviespondiloartropatía, que se estudia con RMN de sacroilíacas, como el mejor examen, considerado de elección actualmente (por eso la dejamos como correcta), aunque se suele iniciar con la Rx de sacroilíacas.

### [11] EUNACOM Julio 2013 · Pregunta 27 · confianza 0.9
Una paciente de 13 años, sin antecedentes, consulta por cefalea e hirsutismo. Al examen físico se encuentra presión arterial en percentil 99 para su edad, índice de masa corporal mayor al percentil 95 para su edad, acné inflamatorio en su rostro y estrías abdominales. El diagnóstico más probable es:
- A) Diabetes mellitus tipo 2
- B) Síndrome de ovario poliquístico
- C) Síndrome de Cushing
- D) Hipotiroidismo
- E) Hiperprolactinemia
**Correcta: C**
Explicación del banco: Diagnóstico: **Síndrome de Cushing** (opción **C**). De libro. El hipotiroidismo en el embarazo es importante porque se asocia a daño en el desarrollo cerebral del feto. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [12] EUNACOM Agosto 2021 · Pregunta 105 · confianza 0.85
Un paciente de 71 años, con antecedente de diabetes, hipertensión arterial y lumbago crónico, en tratamiento con hipoglicemiantes orales, atorvastatina y losartán, presenta un cuadro de 1 mes de debilidad de las 4 extremidades, mayor en los muslos, asociadas a mialgias, que en el último tiempo le han dificultado la marcha. Al examen físico se constata paresia M4 de ambas extremidades inferiores, mayor en los cuádriceps, sin alteraciones sensitivas ni focalidad neurológica. Se solicitan exámenes que muestran hemoglobina: 12,1 g/dl, hematocrito: 33%, blancos: 6.200 por mm3, plaquetas: 180.000 por mm3, VHS: 50 mm/hora, SGOT: 210 UI/L, SGPT: 110 UI/L, CPK: 3.760 UI/L, LDH: 1.050 UI/L, PCR: 4,3 mg/L y hemoglobina glicosilada: 7,5%. ¿Cuál es el diagnóstico más probable?
- A) Miopatía por estatinas
- B) Polimialgia reumática
- C) Polimiositis
- D) Miositis por cuerpos de inclusión
- E) Raquiestenosis medular
**Correcta: C**
Explicación del banco: Diagnóstico: **Polimiositis** (opción **C**). Es otra polimiositis clásica, en especial por el marcado aumento de las CPK y la debilidad.. La polimiositis y dermatomiositis son miopatías autoinmunes. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [13] EUNACOM Diciembre 2019 · Pregunta 39 · confianza 0.85
Una mujer de 18 años presenta traumatismo en la rodilla derecha, siendo diagnosticada de esguince de rodilla, el que se maneja con reposo y antiinflamatorios. Evoluciona con dolor persistente, por lo que consulta nuevamente. Se solicita una radiografía de rodilla que muestra reacción perióstica y compromiso de partes blandas. El diagnóstico más probable es:
- A) Osteomielitis del fémur distal
- B) Osteosarcoma osteogénico
- C) Fractura del fémur distal, con callo óseo
- D) Osteocondroma
- E) Hematoma calcificado
**Correcta: B**
Explicación del banco: Pregunta rara, ya que ni siquiera dicen que hay un tumor, pero reacción perióstica y el compromiso de partes blandas son clásicas de un tumor maligno. Por la edad, lo más probable es un osteosarcoma. Es frecuente en el Eunacom que se dé el antecedente de trauma (aunque no tenga relación) en distintos tipos de tumores, ya que ahí es que se lo palpan.

### [14] EUNACOM Diciembre 2019 · Pregunta 179 · confianza 0.85
Un paciente de 60 años fue tratado hace 7 días con ciprofloxacino, por disuria. Hace dos días presenta dolor testicular izquierdo, asociado a fiebre. Al examen físico tiene aumento de volumen testicular, con dolor a la palpación, especialmente del conducto espermático. Se observa ligero edema escrotal, con eritema. ¿Cuál es el diagnóstico más probable?
- A) Hidrocele
- B) Varicocele
- C) Torsión testicular
- D) Tumor testicular
- E) Orquiepididimitis
**Correcta: E**
Explicación del banco: Diagnóstico: **Orquiepididimitis** (opción **E**). Es una orquiepididimitis clásica.. La orquiepididimitis es una infección del epidídimo que puede extenderse al testículo, produciendo un cuadro inflamatorio e infeccioso que hay que diferenciar del testículo agudo por torsión. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [15] EUNACOM Julio 2019 · Pregunta 29 · confianza 0.85
Un paciente de 40 años, oficinista, estuvo moviendo muebles durante 2 días, evolucionando luego con intenso dolor lumbar, que le impide realizar sus actividades. Al examen físico se aprecia muy adolorido, con dificultades para subirse a la camilla y para caminar, tiene IMC de 28 y se observa una contractura muscular a nivel lumbar, con dolor ante todos los movimientos de la columna lumbar, sin signos de irritación nerviosa. Además de administrar analgésicos, la indicación más adecuada es:
- A) Resonancia magnética nuclear
- B) Radiografía de columna lumbosacra
- C) Kinesioterapia motora por 10 días
- D) Reposo en cama por 5 días
- E) Reposo laboral por 3 días
**Correcta: E**
Explicación del banco: Es un lumbago mecánico común y corriente (suelen ser muy intensos). Es fundamental la analgesia, el reposo relativo (no en cama) y, una vez que el dolor ha cedido, indicar KNT por largo tiempo, de modo de fortalecer los músculos del core (abdominales, lumbares, multífidos y glúteos), para disminuir las recurrencias.

### [16] EUNACOM Diciembre 2017 · Pregunta 46 · confianza 0.85
Una paciente de 39 años consulta por deseos de embarazo. Tiene antecedente de artritis reumatoide, en tratamiento con paracetamol. Refiere artralgias de manos con frecuencia. Al examen físico no tiene signos inflamatorios, salvo en una de las articulaciones metacarpofalángicas derechas. Trae factor reumatoideo y anticuerpos antiCCP positivos a títulos elevados y una radiogargía de manos, con lesiones erosivas en algunas articulaciones interfalángicas proximales. ¿Cuál es el tratamiento más indicado en esta paciente?
- A) Metotrexato
- B) Leflunomide
- C) Azulfidine
- D) Anticuerpos contra el receptor de TNF alfa
- E) Plaquinol
**Correcta: D**
Explicación del banco: La AR se trata con infliximab en el embarazo. De todos modos, es una pregunta específica, que excede lo que un médico general debe saber.

### [17] EUNACOM Julio 2017 · Pregunta 53 · confianza 0.85
Una mujer de 17 años presenta traumatismo en la rodilla izquierda, siendo diagnos- ticada de esguince de rodilla, el que se maneja con reposo y antiinflamatorios. Evolucio- na con dolor persistente, por lo que consulta nuevamente. Se solicita una radiografía de rodilla que muestra reacción perióstica y compromiso de partes blandas. El diagnóstico más probable es:
- A) Osteomielitis del fémur distal
- B) Osteosarcoma osteogénico
- C) Fractura del fémur distal, con callo óseo
- D) Osteocondroma
- E) Hematoma en organización
**Correcta: B**
Explicación del banco: Diagnóstico: **Osteosarcoma osteogénico** (opción **B**). Es un osteosarcoma clásico, aunque la pregunta estaba horriblemente redactada.. Los tumores óseos se diagnostican principalmente con la radiografía, que aporta información crucial para diferenciar benignos de malignos. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [18] EUNACOM Julio 2013 · Pregunta 43 · confianza 0.8
Una paciente de 16 años, obesa, consulta por astenia y debilidad de semanas de evolución, no asociado a otros síntomas. Al examen físico se corrobora obesidad en percentil 97 para la edad, se aprecia hirsutismo, acné inflamatorio y estrías abdominales. El diagnóstico más probable es:
- A) Resistencia insulínica
- B) Síndrome de ovario poliquístico
- C) Síndrome de Cushing
- D) Diabetes Mellitus tipo 1
- E) Hiperprolactinoma
**Correcta: C**
Explicación del banco: Diagnóstico: **Síndrome de Cushing** (opción **C**). Es la misma pregunta de antes.. El hipotiroidismo en el embarazo es importante porque se asocia a daño en el desarrollo cerebral del feto. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [19] EUNACOM Diciembre 2018 · Pregunta 66 · confianza 0.75
Un niño de 5 años consulta por un cuadro de 7 días de evolución de rinorrea purulenta, descarga posterior, cefalea, fiebre y obstrucción nasal. En el último tiempo se agrega mayor fiebre, más edema y eritema periocular derecho. ¿Cuál es el diagnóstico más probable?
- A) Queratoconjuntivitis viral
- B) Absceso periorbitario
- C) Conjuntivitis bacteriana
- D) Sinusitis maxilar
- E) Absceso frontal
**Correcta: D**
Explicación del banco: [Pregunta disputada] Es una mala pregunta. En estricto rigor parece una celulitis preorbitaria, que no estaba en las opciones, secundaria a una sinusitis (no queda claro si es maxilar, etmoidal o frontal). Tampoco parace un absceso orbitario (no existe el concepto periorbitario), por no tener limitación a la movilización de los movimientos, proptosis o otras alteraciones similares.

### [20] EUNACOM Diciembre 2019 · Pregunta 173 · confianza 0.72
Un paciente de 46 años se realiza una colecistectomía abierta. A las 48 horas presenta fiebre de 37,8°C. Al examen físico está eupneico, FR: 14x’, FC: 78x’, PA: 120/80 mmHg, satura 98% a FiO2 ambiental. Se aprecia herida operatoria sin eritema ni secreción y se revisan las vías venosas, que están permeables, sin signos inflamatorios. Su examen pulmonar presenta crépitos localizados en la base derecha. ¿Cuál es el diagnóstico más probable?
- A) Neumonía
- B) Dehiscencia de la anastomosis
- C) Atelectasia
- D) Infección de la herida operatoria
- E) Tromboembolismo pulmonar
**Correcta: C**
Explicación del banco: Las atelectasias son la causa más frecuente de fiebre postquirúrgica en las primeras 48 horas. Los crépitos también la sugieren. La neumonía sí tiene crépitos localizados y fiebre, pero le falta la tos y expectoración mucopurulenta. El TEP puede tener esa clínica, pero suele tener taquicardia o síntomas respiratorios de inicio súbito. La dehiscencia de la anastomosis produce una peritonitis aguda.

### [21] EUNACOM Julio 2016 · Pregunta 7 · confianza 0.72
Una paciente de 30 años, con antecedente de un quiste mamario izquierdo, consulta por dolor en la mama izquierda, asociada a fiebre y eritema. Al examen físico se constata eritema, aumento de volumen y dolor en la mama izquierda, con un nódulo doloroso a la palpación. Se solicita una ecografía que muestra una imagen quística de 5 cm de diámetro, con signos inflamatorios en las partes blandas. ¿Cuál es la conducta más adecuada?
- A) Realizar seguimiento ecográfico
- B) Iniciar tratamiento con AINES
- C) Realizar punción y drenaje
- D) Drenar mediante cirugía
- E) Solicitar resonancia magnética nuclear de mamas
**Correcta: D**
Explicación del banco: Es un absceso mamario, que se debe drenar en pabellón. Además, se deben dar antibióticos (cloxacilina o cefazolina). En cambio, el flegmón mamario y las mastitis no abscedadas, solo se tratan con antibióticos.

### [22] EUNACOM Diciembre 2024 · Pregunta 121 · confianza 0.7
Adulto con PTI sin sangrado grave, plaquetas en 5.000:
- A) Corticoides 1mg/kg
- B) Transfusión de plaquetas
- C) Terapia biológica
- D) Amoxicilina
- E) Ibuprofeno
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Corticoides 1mg/kg). Esta clase introduce el concepto de púrpura en medicina. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES). Las opciones alternativas (Transfusión de plaquetas, Terapia biológica) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [23] EUNACOM Agosto 2021 · Pregunta 95 · confianza 0.7
Un paciente de 68 años presenta monoartritis de rodilla izquierda, desde hace 48 horas. Al examen físico se observa aumento de volumen con signos de derrame articular, por lo que se punciona, dando salida a un líquido articular poco filante, con 50.000 glóbulos blancos por mm3, sin presencia de cristales. Lo más probable es que se trate de una artritis:
- A) Reactiva
- B) Seronegativa
- C) Reumatoide
- D) Séptica
- E) Psoriática
**Correcta: D**
Explicación del banco: Es una pregunta difícil, ya que el líquido está en el límite entre séptico (más de 50.000 glóbulos blancos) e inflamatorio. Ambas tienen filancia disminuida. La falta de antecedente de lesiones cutáneas hace improbable una psoriasis. Así mismo, la ausencia de infección previa hace improbable la séptica. La ausencia de otros síntomas (ej. lumbago) hace improbable la pelviespondilopatía seronegativa. Por tanto, por descarte y a pesar de que no se ven bacterias, el diagnóstico es una artritis séptica.

### [24] EUNACOM Julio 2019 · Pregunta 86 · confianza 0.7
Una mujer de 26 años, sexualmente activa y alérgica a la penicilina, consulta por disuria y molestias genitales, de 4 días de evolución, asociada a leucorrea. Al examen físico, se observan signos inflamatorios en el cuello uterino, con escasa leucorrea. El cultivo de Thayer Martin es positivo y prueba de aminas, negativa. El tratamiento de elección es:
- A) Ciprofloxacino
- B) Ceftriaxona
- C) Azitromicina
- D) Doxiciclina
- E) Penicilina benzatina
**Correcta: B**
Explicación del banco: Tiene una uretritis y cervicitis gonocócica (cultivo de Thayer Martin positivo) y, por tanto, se debe tratar con ceftriaxona de elección. La azitromicina y el ciprofloxacino también sirven, pero sigue siendo de elección la ceftriaxona. Es cierto que también se debe cubrir Chlamydia, por lo que la única respuesta que cubre todo es la azitromicina, pero se debe simplificar el enfrentamiento de esta pregunta, en que específicamente se pregunta el tratamiento de la gonorrea y, por ello, la respuesta es la B.

### [25] EUNACOM Diciembre 2018 · Pregunta 79 · confianza 0.7
Una paciente, con antecedente de varias parejas sexuales, consulta por disuria inicial y leucorrea. En la especuloscopía se observa cuello uterino con cambios inflamatorios y abundante leucorrea amarillenta, sin otras alteraciones en el examen ginecológico. ¿Cuál es el diagnóstico más probable?
- A) Vaginosis bacteriana
- B) Proceso inflamatorio pélvico
- C) Candidiasis urogenital
- D) Tricomoniasis
- E) Cervicitis gonocócica
**Correcta: E**
Explicación del banco: Diagnóstico: **Cervicitis gonocócica** (opción **E**). Es una cervicitis aguda clásica, cuyas causas más frecuentes son la gonorrea y la clamidia.. Esta clase aborda las generalidades de las ETS y cubre uretritis, herpes genital y condiloma acuminado. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.
