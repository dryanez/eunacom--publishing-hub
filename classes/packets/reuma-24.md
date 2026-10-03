# CLASE reuma-24 · Reumatologia 9.24: Osteoporosis y Salud Ósea: Densitometría (T-score vs Z-score), Fracturas por Fragilidad, FRAX y Terapia Farmacológica

Escribe `classes/lessons/reuma-24.cjs` siguiendo el PAQUETE COMÚN. El `id` es "reuma-24" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- reuma-21: Reumatologia 9.21: Vasculitis de Vaso Grande y Mediano: Arteritis de la Temporal (Células Gigantes / Urgencia Visual) y Arteritis de Takayasu
- reuma-22: Reumatologia 9.22: Vasculitis de Vaso Pequeño ANCA Positivas (GPA, PAM, EGPA) y Púrpura de Henoch-Schönlein (Vasculitis por IgA)
- reuma-23: Reumatologia 9.23: Fibromialgia y Polimialgia Reumática: Diagnóstico Diferencial, Reactantes de Fase Aguda y Manejo en APS

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "reuma-24",
  "classId": "reuma-24",
  "tier": 2,
  "blockNum": 5,
  "blockName": "Vasculitis Sistémicas, Reumatología de Partes Blandas y Metabolismo Óseo",
  "topicLabel": "9.24",
  "title": "Osteoporosis y Salud Ósea: Densitometría (T-score vs Z-score), Fracturas por Fragilidad, FRAX y Terapia Farmacológica",
  "perfilCode": "1.09.1.014",
  "dx": "Específico",
  "tx": "Completo",
  "seg": "Completo",
  "ges": "Garantía GES en Tratamiento Quirúrgico de Fractura de Cadera en Adultos Mayores (GES N° 10) y Órtesis",
  "reconstrucciones": "EUNACOM Enero 2023 (Q#84) · EUNACOM Diciembre 2022 (Q#54) · EUNACOM Diciembre 2018 (Q#114) · EUNACOM Julio 2015 (Q#62)",
  "frecuencia": "Muy Alta · Patología prevalente del adulto mayor, fracturas por fragilidad y farmacología en APS",
  "algoTitle": "Algoritmo Diagnóstico y Terapéutico en Osteoporosis y Fracturas por Fragilidad",
  "diagram": {
    "title": "Algoritmo Diagnóstico y Terapéutico en Osteoporosis y Fracturas por Fragilidad",
    "svg": "<svg viewBox=\"0 0 620 418\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n<rect class=\"acc\" x=\"12\" y=\"8\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Evaluación de Riesgo de Fractura en Adulto Mayor (Mujer ≥ 65 a, Hombre ≥ 70 a, o Factores de Riesgo)</text>\n<text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Buscar antecedentes de fractura previa de bajo impacto, corticoides crónicos, bajo peso o tabaco</text>\n<path class=\"ln\" d=\"M310,47 V69\"/>\n<rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">¿Presenta Antecedente de Fractura por Fragilidad Mayor (Cadera o Vértebra)?</text>\n<text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Decisión diagnóstica directa e inmediata</text>\n<path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n<path class=\"ln\" d=\"M310,138 H462 V148\"/>\n<text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">SÍ: Fractura de Cadera o Vértebra por Caída Nivel</text>\n<text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">NO: Paciente Asintomático / Tamizaje Preventivo</text>\n<rect class=\"warn\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Diagnóstico Clínico Directo de Osteoporosis</text>\n<text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">NO requiere densitometría previa para</text>\n<text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">iniciar tratamiento farmacológico de rescate</text>\n<rect class=\"warn\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Solicitar Densitometría Ósea DEXA (L1-L4 y Cadera)</text>\n<text class=\"warnT sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Evaluar T-score en posmenopausia / FRAX con</text>\n<text class=\"warnT sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">cálculo de riesgo de fractura a 10 años</text>\n<path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n<path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n<rect class=\"dec\" x=\"70\" y=\"220\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Interpretación de Densitometría Ósea (T-Score OMS)</text>\n<text class=\"sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Clasificación de densidad mineral ósea</text>\n<path class=\"ln\" d=\"M310,259 V289 H158 V299\"/>\n<path class=\"ln\" d=\"M310,289 H462 V299\"/>\n<text class=\"lbl\" x=\"158\" y=\"284\" text-anchor=\"middle\">T-Score ≤ -2.5 DE (Osteoporosis)</text>\n<text class=\"lbl\" x=\"462\" y=\"284\" text-anchor=\"middle\">T-Score entre -1.0 y -2.5 DE (Osteopenia)</text>\n<rect class=\"warn\" x=\"12\" y=\"299\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"314\" text-anchor=\"middle\" font-weight=\"700\">Iniciar Terapia Antirresortiva Farmacológica</text>\n<text class=\"warnT sub\" x=\"158\" y=\"326\" text-anchor=\"middle\">Bifosfonato de 1.ª línea: Alendronato</text>\n<text class=\"warnT sub\" x=\"158\" y=\"337\" text-anchor=\"middle\">70 mg/semana VO (o Ác. Zoledrónico EV)</text>\n<rect class=\"dec\" x=\"316\" y=\"299\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"t t\" x=\"462\" y=\"314\" text-anchor=\"middle\" font-weight=\"700\">Calcular Score FRAX Calibrado para Chile</text>\n<text class=\"sub\" x=\"462\" y=\"326\" text-anchor=\"middle\">Tratar si Riesgo Fractura Mayor ≥ 20% o Cadera ≥ 3%</text>\n<text class=\"sub\" x=\"462\" y=\"337\" text-anchor=\"middle\">Asegurar Calcio y Vitamina D</text>\n<path class=\"ln\" d=\"M158,349 V359 H310 V371\"/>\n<path class=\"ln\" d=\"M462,349 V359 H310 V371\"/>\n<rect class=\"acc\" x=\"12\" y=\"371\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"386\" text-anchor=\"middle\" font-weight=\"700\">Pilar Terapéutico Base: Calcio 1.000-1.200 mg/día + Vitamina D3 800-2.000 UI/día</text>\n<text class=\"accS\" x=\"310\" y=\"398\" text-anchor=\"middle\">Instrucciones estrictas para bifosfonatos orales: ayuno, vaso de agua lleno y bipedestación 30-60 minutos</text>\n</svg>"
  },
  "contexto": "La osteoporosis es una enfermedad esquelética sistémica silente caracterizada por masa ósea disminuida y deterioro microarquitectónico con consecuente fragilidad ósea. Su mayor relevancia radica en las fracturas por fragilidad, especialmente la fractura de cadera, asociada a una mortalidad del 20-30% al primer año. La regla de oro del EUNACOM establece que la presencia de una fractura por fragilidad en cadera o vértebra define automáticamente el diagnóstico de osteoporosis e impone el inicio de tratamiento antirresortivo sin requerir una densitometría ósea previa.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología, Fracturas por Fragilidad y Diagnóstico Clínico Directo",
      "paragraphs": [
        "La masa ósea del adulto es el resultado del balance dinámico entre la resorción ósea osteoclástica y la formación ósea osteoblástica acopladas en las unidades de remodelado óseo. A partir de los 30 a 35 años sobreviene una pérdida fisiológica anual de masa ósea (0.5% a 1%), la cual se acelera drásticamente en la mujer durante la posmenopausia inmediata (pérdida de hasta un 3-5% anual durante los primeros 5 a 10 años) por la deprivación estrogénica, que incrementa la expresión del ligando del receptor activador del factor nuclear kappa B (RANKL) y prolonga la sobrevida de los osteoclastos.",
        "Una <strong>fractura por fragilidad</strong> se define como aquella producida por un traumatismo de bajo impacto, equivalente o menor a una caída desde la propia altura o en bipedestación (excluyendo traumas mayores como accidentes vehiculares o caídas de altura, y fracturas de dedos, cráneo o columna cervical).",
        "Los <strong>sitios anatómicos cardinales de fractura osteoporótica</strong> son:",
        "1. <strong>Columna vertebral:</strong> Fracturas por aplastamiento acuñado dorsal y lumbar. Son las más frecuentes (constituyen más del 40-50% de todas las fracturas), pero más de dos tercios cursan de forma asintomática o se manifiestan por pérdida progresiva de estatura (> 3-4 cm) y cifosis dorsal (\"joroba de viuda\").",
        "2. <strong>Cadera (cuello femoral y región intertrocantérica):</strong> Es la complicación de mayor morbimortalidad (mortalidad del 20% al 30% en los 12 meses posteriores a la fractura y pérdida permanente de autovalencia en más del 50% de los sobrevivientes). Es una <strong>patología con Garantía Explícita en Salud (GES N° 10)</strong> en personas de 65 años y más.",
        "3. <strong>Radio distal (Fractura de Colles):</strong> Es la fractura por fragilidad más precoz en mujeres posmenopáusicas (frecuente entre los 50 y 65 años tras apoyar la mano en flexión dorsal durante una caída de nivel).",
        "4. <strong>Húmero proximal y pelvis:</strong> Frecuentes en el anciano frágil.",
        "<strong>Regla de oro EUNACOM:</strong> La presencia de una <strong>fractura por fragilidad vertebral o de cadera en un adulto mayor establece por sí misma el diagnóstico clínico de OSTEOPOROSIS</strong>, independientemente del valor de la densitometría ósea, e indica el inicio perentorio de terapia farmacológica de rescate."
      ]
    },
    {
      "subhead": "2. Densitometría Ósea (DEXA): Criterios de la OMS, T-Score vs Z-Score y FRAX",
      "paragraphs": [
        "La <strong>absorciometría de rayos X de doble energía (DEXA)</strong> constituye el examen de referencia para cuantificar la densidad mineral ósea (DMO, expresada en g/cm²). Los sitios de medición estandarizados son la <strong>columna lumbar (vértebras L1 a L4)</strong> y la <strong>cadera (cuello femoral y cadera total)</strong> (véase Tabla 9.24).",
        "<strong>Criterios Diagnósticos Densitométricos de la OMS (Basados en T-score):</strong>",
        "• <strong>Normal:</strong> T-score mayor o igual a <strong>-1.0 DE</strong>.",
        "• <strong>Osteopenia (baja masa ósea):</strong> T-score entre <strong>-1.0 y -2.5 DE</strong>.",
        "• <strong>Osteoporosis:</strong> T-score menor o igual a <strong>-2.5 DE</strong> en cualquiera de los sitios evaluados (columna lumbar, cuello femoral o cadera total).",
        "• <strong>Osteoporosis Severa o Establecida:</strong> T-score menor o igual a -2.5 DE asociado a <strong>una o más fracturas por fragilidad</strong> documentadas.",
        "<strong>Diferenciación Conceptual: T-score vs Z-score:</strong>",
        "• <strong>T-score:</strong> Número de desviaciones estándar por encima o debajo de la media de DMO de una <em>población joven sana de 20 a 30 años del mismo sexo</em> (pico de masa ósea). Es el parámetro diagnóstico estándar que debe utilizarse en <strong>mujeres posmenopáusicas y en varones de 50 años o más</strong>.",
        "• <strong>Z-score:</strong> Número de desviaciones estándar en comparación con una <em>población de la misma edad, sexo y etnia</em>. Se utiliza en <strong>mujeres premenopáusicas, varones menores de 50 años y niños</strong>. Un <strong>Z-score ≤ -2.0 DE</strong> se define como \"baja densidad mineral ósea por debajo del rango esperado para la edad\" y obliga a investigar causas secundarias de osteoporosis (uso crónico de glucocorticoides ≥ 5 mg/día por > 3 meses, hiperparatiroidismo primario, hipertiroidismo, hipogonadismo, enfermedad celíaca o síndrome de malabsorción, mieloma múltiple y alcoholismo).",
        "• <strong>Herramienta FRAX (Fracture Risk Assessment Tool):</strong> Algoritmo computarizado validado por la OMS y calibrado para la población chilena que calcula la <strong>probabilidad a 10 años de sufrir una fractura osteoporótica mayor</strong> (cadera, vértebra clínica, muñeca o húmero) y una fractura de cadera aislada. <em>Umbral de intervención en osteopenia:</em> Se indica iniciar fármacos si el riesgo a 10 años de fractura mayor es <strong>≥ 20%</strong> o si el riesgo de fractura de cadera es <strong>≥ 3%</strong>."
      ]
    },
    {
      "subhead": "3. Terapia Farmacológica Escalonada: Calcio, Vitamina D, Bifosfonatos, Denosumab y Teriparatida",
      "paragraphs": [
        "El manejo de la osteoporosis abarca medidas universales y fármacos modificadores del metabolismo óseo (véase Figura 9.24 y Tabla 9.24):",
        "• <strong>Pilar Universal de Soporte:</strong>",
        "  1. <strong>Calcio elemental:</strong> Aporte de <strong>1.000 a 1.200 mg/día</strong>, idealmente mediante la dieta (lácteos, frutos secos, legumbres). Si la ingesta es deficitaria, se suplementa con Carbonato de calcio (requiere medio ácido gástrico, tomar con comidas) o Citrato de calcio (de elección en usuarios de omeprazol o con hipoclorhidria).",
        "  2. <strong>Vitamina D3 (Colecalciferol):</strong> Aporte de <strong>800 a 2.000 UI/día</strong> para alcanzar y sostener niveles séricos de 25-hidroxivitamina D [25-(OH)-D] ≥ 30 ng/mL.",
        "  3. <strong>Medidas no farmacológicas:</strong> Ejercicios de fortalecimiento muscular y carga gravitacional (caminata vigorosa), prevención activa de caídas en el domicilio (retirar alfombras, barras de apoyo en baño), cese de tabaquismo y moderación de alcohol.",
        "• <strong>Bifosfonatos Orales (Fármacos de Primera Línea en APS):</strong>",
        "  - <strong>Alendronato:</strong> <strong>70 mg vía oral una vez por semana</strong> (o Risedronato 35 mg semanal). Inhiben la enzima farnesil pirofosfato sintasa de los osteoclastos induciendo su apoptosis.",
        "  - <strong>INSTRUCCIONES ESTRICTAS DE ADMINISTRACIÓN ORAL (Pregunta angular EUNACOM):</strong> Para maximizar su baja absorción gastrointestinal (< 1%) y <strong>prevenir el riesgo de esofagitis química erosiva y úlceras esofágicas graves</strong>, el alendronato debe tomarse estrictamente <strong>en ayunas al despertar, con un vaso lleno de agua pura (200 mL)</strong>, el paciente debe <strong>permanecer en bipedestación o sentado erguido durante al menos 30 a 60 minutos</strong> (sin recostarse), y no debe ingerir alimentos, bebidas ni otros medicamentos durante esa hora.",
        "  - <em>Contraindicaciones de bifosfonatos orales:</em> Estenosis esofágica, acalasia, incapacidad para mantenerse sentado o de pie por 30 minutos, cirugía bariátrica con malabsorción, y <strong>enfermedad renal crónica severa con Clearance de creatinina < 30-35 mL/min</strong>.",
        "• <strong>Bifosfonatos Endovenosos:</strong> <strong>Ácido Zoledrónico (5 mg EV infundido en 15 minutos una vez al año)</strong>. De elección ante intolerancia digestiva severa, falta de adherencia a la vía oral o tras una fractura de cadera reciente. Efecto adverso: síndrome pseudogripal agudo en las primeras 48 horas.",
        "• <strong>Denosumab (Anticuerpo Monoclonal Anti-RANKL):</strong> Administrado en dosis de <strong>60 mg subcutáneo cada 6 meses</strong>. Bloquea la interacción entre RANKL y el receptor RANK de los osteoclastos. Es el fármaco de elección en <strong>insuficiencia renal crónica avanzada con VFG < 30 mL/min</strong> (no tiene clearance renal), pero exige asegurar calcemia normal previa por riesgo de hipocalcemia severa. <em>Alerta crítica:</em> Nunca debe suspenderse abruptamente sin una dosis de consolidación con bifosfonato, debido al riesgo de pérdida rápida de masa ósea y fracturas vertebrales múltiples de rebote.",
        "• <strong>Teriparatida (Análogo de Paratohormona PTH 1-34):</strong> Fármaco <strong>osteoformador / anabólico</strong> (20 mcg subcutáneo diario por un máximo de 24 meses). Indicado en osteoporosis muy severa (T-score < -3.5, fracturas vertebrales recurrentes o falla comprobada a bifosfonatos)."
      ]
    }
  ],
  "table": {
    "title": "Criterios Densitométricos OMS y Posología Farmacológica en Osteoporosis",
    "headers": [
      "Fármaco / Clasificación",
      "Criterio Operativo / Dosis Terapéutica",
      "Vía y Frecuencia de Uso",
      "Indicación / Precauciones Clínicas Clave"
    ],
    "rows": [
      [
        "DMO Normal",
        "T-score ≥ -1.0 DE en columna o cadera",
        "Tamizaje preventivo",
        "Dieta equilibrada en calcio, actividad física y cesación tabáquica"
      ],
      [
        "Osteopenia",
        "T-score entre -1.0 y -2.5 DE",
        "Seguimiento con FRAX",
        "Tratar si FRAX mayor ≥ 20% o cadera ≥ 3%; soporte con Calcio/Vit D"
      ],
      [
        "Osteoporosis",
        "T-score ≤ -2.5 DE o fractura fragilidad",
        "Tratamiento farmacológico",
        "Iniciar bifosfonato de primera línea + calcio elemental y vitamina D"
      ],
      [
        "Alendronato sódico",
        "70 mg comprimido vía oral",
        "Una vez por semana en ayuno",
        "Tomar con vaso de agua pura; bipedestación estricta 30-60 min; ClCr > 35"
      ],
      [
        "Ácido Zoledrónico",
        "5 mg solución en infusión endovenosa",
        "Una vez al año (infusión en 15 min)",
        "De elección si intolerancia oral o fractura de cadera; vigilar calcemia"
      ],
      [
        "Denosumab (Anti-RANKL)",
        "60 mg solución inyectable subcutánea",
        "Una vez cada 6 meses",
        "Uso seguro en falla renal (VFG < 30); riesgo de rebote si se suspende"
      ],
      [
        "Teriparatida (PTH 1-34)",
        "20 mcg inyección subcutánea diaria",
        "Diaria por máximo 24 meses",
        "Agente osteoformador en osteoporosis severa o fractura bajo bifosfonatos"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM · Atención Primaria y Salud Ósea",
    "text": "Mujer de 69 años con antecedente de tabaquismo activo (15 paquetes/año) y menopausia a los 48 años sin terapia de reemplazo hormonal acude a control en policlínico. Trae resultado de densitometría ósea DEXA solicitada de forma preventiva: DMO en columna lumbar (L1-L4) con T-score de -2.9 DE y en cuello femoral con T-score de -2.6 DE (Z-score en columna -1.1 DE). La paciente no refiere antecedentes de fracturas previas ni dolores óseos. Su estatura actual es de 158 cm (2 cm menos que a los 30 años). Sus exámenes de laboratorio muestran: hemograma normal, calcemia 9.4 mg/dL, fósforo 3.2 mg/dL, creatinina 0.8 mg/dL (ClCr 68 mL/min), fosfatasas alcalinas normales y 25-hidroxivitamina D en 18 ng/mL (insuficiencia de vitamina D). No presenta reflujo gastroesofágico ni trastornos de deglución.",
    "conducta": "La paciente presenta una OSTEOPOROSIS densitométrica según los criterios de la OMS (T-score ≤ -2.5 DE tanto en columna lumbar como en cuello femoral). La conducta médica integral de primera línea consiste en: 1) Corrección de la insuficiencia de vitamina D con Colecalciferol (Vitamina D3) 2.000 UI/día oral; 2) Asegurar aporte de calcio elemental de 1.000 a 1.200 mg/día (mediante dieta y suplemento de carbonato de calcio con las comidas); 3) Iniciar terapia antirresortiva de primera línea con ALENDRONATO 70 mg VÍA ORAL UNA VEZ POR SEMANA; 4) Educar de manera rigurosa sobre las normas de ingestión del alendronato (ayuno matinal estricto con un vaso grande de agua pura de 200 mL, permanecer sentado erguido o de pie por 30 a 60 minutos sin recostarse y no comer nada durante esa hora para evitar esofagitis química); y 5) Recomendar ejercicios de fuerza y equilibrio, cese de tabaco y control densitométrico en 2 años."
  },
  "explicacion": "La paciente presenta una OSTEOPOROSIS densitométrica según los criterios de la OMS (T-score ≤ -2.5 DE tanto en columna lumbar como en cuello femoral). La conducta médica integral de primera línea consiste en: 1) Corrección de la insuficiencia de vitamina D con Colecalciferol (Vitamina D3) 2.000 UI/día oral; 2) Asegurar aporte de calcio elemental de 1.000 a 1.200 mg/día (mediante dieta y suplemento de carbonato de calcio con las comidas); 3) Iniciar terapia antirresortiva de primera línea con ALENDRONATO 70 mg VÍA ORAL UNA VEZ POR SEMANA; 4) Educar de manera rigurosa sobre las normas de ingestión del alendronato (ayuno matinal estricto con un vaso grande de agua pura de 200 mL, permanecer sentado erguido o de pie por 30 a 60 minutos sin recostarse y no comer nada durante esa hora para evitar esofagitis química); y 5) Recomendar ejercicios de fuerza y equilibrio, cese de tabaco y control densitométrico en 2 años.",
  "keyPoints": [
    "Una fractura por fragilidad en cadera o vértebra define automáticamente OSTEOPOROSIS sin requerir densitometría.",
    "Densitometría OMS: Normal T-score ≥ -1.0; Osteopenia -1.0 a -2.5; Osteoporosis T-score ≤ -2.5 DE.",
    "El T-score se utiliza en posmenopáusicas y varones ≥ 50 años; el Z-score se utiliza en jóvenes (< 50 años).",
    "Un Z-score ≤ -2.0 DE obliga a descartar sistemáticamente causas secundarias de pérdida ósea (corticoides, Cushing).",
    "El Alendronato exige ayuno estricto, vaso con agua pura y bipedestación por 30 a 60 min para prevenir esofagitis.",
    "Denosumab (anti-RANKL) se puede usar con VFG < 30 mL/min, pero nunca suspender sin bifosfonato por riesgo de rebote."
  ],
  "questions": [
    {
      "stem": "Una paciente de 40 años se realiza una radiografía lumbar que muestra\nosteopenia radiológica, por lo que se solicita una densitometría ósea que\nmuestra T-score: -2,6 y un Z-score: -2,0. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Sana"
        },
        {
          "id": "B",
          "text": "Osteopenia"
        },
        {
          "id": "C",
          "text": "Osteoporosis postmenopáusica"
        },
        {
          "id": "D",
          "text": "Osteoporosis secundaria"
        },
        {
          "id": "E",
          "text": "Enfermedad de Paget"
        }
      ],
      "correcta": "D",
      "explicacion": "El diagnóstico de osteoporosis secundaria es el más probable debido a la confluencia de tres datos clave en el caso: la edad de la paciente, el valor del T-score y, fundamentalmente, el valor del Z-score. Primero, la paciente tiene 40 años, una edad en la que se considera premenopáusica. La osteoporosis en mujeres premenopáusicas es infrecuente y siempre debe hacer sospechar una causa subyacente. Segundo, su T-score de -2,6 cumple el criterio densitométrico de la OMS para osteoporosis (T-score ≤ -2,5), confirmando que la paciente tiene una densidad mineral ósea patológicamente baja.\n\nEl dato más decisivo es el Z-score de -2,0. El Z-score compara la densidad mineral ósea de la paciente con la de otras personas de su misma edad, sexo y etnia. Un Z-score de -2,0 o inferior se considera \"baja masa ósea para la edad\" y es un fuerte indicador de que existe un factor secundario que está causando la pérdida ósea acelerada. A diferencia del T-score, que compara con el pico de masa ósea de un adulto joven sano (30 años), el Z-score es la herramienta fundamental para evaluar la salud ósea en niños, adolescentes y adultos jóvenes premenopáusicos.\n\nEn resumen, una mujer de 40 años con osteoporosis densitométrica (T-score ≤ -2,5) y un Z-score significativamente bajo (≤ -2,0) tiene, por definición, una alta probabilidad de padecer osteoporosis secundaria. El siguiente paso en su manejo clínico sería iniciar un estudio etiológico exhaustivo para identificar la causa, que podría incluir patologías endocrinas (hiperparatiroidismo, hipertiroidismo, Cushing), uso de fármacos (corticoides), enfermedades de malabsorción (celiaquía), enfermedades reumatológicas inflamatorias crónicas, entre otras.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.017"
    },
    {
      "stem": "Una paciente de 65 años se realiza una radiografía lumbar que muestra\nosteopenia radiológica, por lo que se solicita una densitometría ósea que\nmuestra T-score: -2,1 y un Z-score: -0,9. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Sana"
        },
        {
          "id": "B",
          "text": "Osteopenia"
        },
        {
          "id": "C",
          "text": "Osteoporosis postmenopáusica"
        },
        {
          "id": "D",
          "text": "Osteoporosis secundaria"
        },
        {
          "id": "E",
          "text": "Enfermedad de Paget"
        }
      ],
      "correcta": "B",
      "explicacion": "La respuesta correcta es b) Osteopenia. La densitometría ósea es la herramienta estándar para el diagnóstico de osteopenia y osteoporosis. En una mujer postmenopáusica (como la paciente de 65 años), el diagnóstico se basa en el T-score. Según la Organización Mundial de la Salud (OMS) y la Sociedad Internacional de Densitometría Clínica (ISCD), los criterios diagnósticos son:\n*   **Normal:** T-score de -1.0 o superior.\n*   **Osteopenia:** T-score entre -1.0 y -2.5 (excluyendo -2.5).\n*   **Osteoporosis:** T-score de -2.5 o inferior.\n\nEn este caso, el T-score de la paciente es -2.1. Este valor se encuentra precisamente dentro del rango de osteopenia (-1.0 > -2.1 > -2.5). Por lo tanto, el diagnóstico más probable es osteopenia. El Z-score, que compara la densidad ósea del paciente con la de individuos de su misma edad, sexo y etnia, es de -0.9, lo cual se considera dentro del rango normal para su edad y no sugiere fuertemente una causa secundaria de pérdida ósea, sino más bien el proceso fisiológico de envejecimiento.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.017"
    }
  ],
  "vignetteText": "Mujer de 69 años con antecedente de tabaquismo activo (15 paquetes/año) y menopausia a los 48 años sin terapia de reemplazo hormonal acude a control en policlínico. Trae resultado de densitometría ósea DEXA solicitada de forma preventiva: DMO en columna lumbar (L1-L4) con T-score de -2.9 DE y en cuello femoral con T-score de -2.6 DE (Z-score en columna -1.1 DE). La paciente no refiere antecedentes de fracturas previas ni dolores óseos. Su estatura actual es de 158 cm (2 cm menos que a los 30 años). Sus exámenes de laboratorio muestran: hemograma normal, calcemia 9.4 mg/dL, fósforo 3.2 mg/dL, creatinina 0.8 mg/dL (ClCr 68 mL/min), fosfatasas alcalinas normales y 25-hidroxivitamina D en 18 ng/mL (insuficiencia de vitamina D). No presenta reflujo gastroesofágico ni trastornos de deglución."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "osteoporosis, densitometria, fracturas, fragilidad, terapia")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2013 · Pregunta 76 · confianza 0.72
Un paciente de 46 años, con antecedente de diabetes mellitus tipo 2 en tratamiento con metformina, acude a control, refiere estar asintomático. Al examen físico se encuentra presión arterial de 138/83, sin otros hallazgos. Sus exámenes de control muestran hemoglobina glicosilada en 6.9%, indice proteinuria creatininuria de 0.3, creatinina 0.8 mg/mL. La conducta más adecuada en este caso es:
- A) Aumentar dosis de metformina
- B) Iniciar hidroclorotiazida
- C) Iniciar enalapril
- D) Suspender metformina e indicar insulina
- E) Mantener tratamiento actual y reforzar medidas como dieta y ejercicio
**Correcta: C**
Explicación del banco: Tanto por la PA (mayor a 130/80 dice la guía antigua, sin embargo la nueva lo deja en 140/90), como por la proteinuria positiva (IP/ C mayor a 0,2 es proteinuria). La proteinuria hace que sea 100% segura la opción de darle los IECAS.

### [2] EUNACOM Enero 2023 · Pregunta 84 · confianza 0.7
Diabético con nefropatía, HTA reciente, creatinina 1,5 mg/dL y proteinuria. ¿Cuál es el tratamiento de elección?
- A) Amlodipino
- B) Atenolol
- C) Hidroclorotiazida
- D) Enalapril
- E) Losartán
**Correcta: D**
Explicación del banco: Conducta / Tratamiento indicado: **Enalapril** (opción **D**). Enalapril. La nefropatía diabética es la primera causa de enfermedad renal terminal en Chile De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [3] EUNACOM Julio 2015 · Pregunta 62 · confianza 0.7
Un paciente diabético de larga data, en tratamiento con insulina, presenta presión arterial de 148/102. Además su índice proteinuria/creatininuria resulta 0,3. ¿Qué fármaco es más adecuado para el manejo de este paciente?
- A) Amlodipino
- B) Enalapril
- C) Carvedilol
- D) Hidroclorotiazida
- E) Diltiazem
**Correcta: B**
Explicación del banco: Conducta / Tratamiento indicado: **Enalapril** (opción **B**). Tanto por la HTA, como por la proteinuria se debe iniciar enalapril en el diabético. La nefropatía diabética es la primera causa de enfermedad renal terminal en Chile De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [4] EUNACOM Diciembre 2018 · Pregunta 114 · confianza 0.62
Un paciente de 62 años, diabético e hipertenso, en tratamiento con metformina 850 mg/8h, hidroclorotiazina 50 mg/día y atenolol 50 mg/día, acude a control. Su presión arterial es 146/100 mmHg, Su examen físico segmentario no aporta mayor información. Trae algunos exámenes, entre los que destacan clearence de creatinina de 48 mililitros por minuto y proteinuria de 500 mg/litro. ¿Cuál es la conducta más adecuada?
- A) Agregar amlodipino
- B) Agregar doxazosina
- C) Agregar enalapril
- D) Mantener las indicaciones
- E) Reemplazar la hidroclorotiazida por furosemida
**Correcta: C**
Explicación del banco: Tanto por ser diabético (en HTA), como por la proteinuria, como por tener PA mayor a 130/80 (en falla renal), está indicado iniciar un IECA.

### [5] EUNACOM Diciembre 2022 · Pregunta 54 · confianza 0.6
Un paciente de 50 años, con antecedente de diabetes mellitus, en tratamiento con metformina 1g cada 12 horas y sitagliptina 50 mg cada 12 horas, presenta presiones arteriales de 148/92 mmHg, que se repiten en varios días, con valores entre 140/90 y 150/100. Su examen físico no aporta mayor información. Se solicitan exámenes de laboratorio que muestran creatinina plasmática: 1,5 mg/dl, índice proteinuria/creatininuria: 2,2, electrolitos plasmáticos muestran Na+: 138 mEq/L, K+: 4,2 mEq/L, Cl-: 103 mEq/L; HbA1c: 6,6%. ¿Cuál es el fármaco de elección para el manejo de este paciente?
- A) Doxasocina
- B) Enalapril
- C) Hidroclorotiazida
- D) Diltiazem
- E) Amlodipino
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Hidroclorotiazida** (opción **C**). La nefropatía diabética es la primera causa de enfermedad renal terminal en Chile De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [6] EUNACOM Diciembre 2025 · Pregunta 143 · confianza 0.95
¿A qué concepto corresponde la siguiente deﬁnición: “Conjunto de medidas des8nadas a evitar que una enfermedad ocurra, actuando antes de que exista la enfermedad o el daño causado por esta”?
- A) Prevención primaria
- B) Prevención secundaria
- C) Prevención terciaria
- D) Prevención cuaternaria
- E) Promoción de la salud
**Correcta: A**
Explicación del banco: Prevención primaria actúa antes de que exista la enfermedad (ej. vacunas con papiloma). Prevención secundaria actúa cuando ya existe la enfermedad, pero todavía no hay síntomas, permiGendo un diagnóstico oportuno (ej. PAP). Prevención terciaria actúa cuando la enfermedad ya Gene síntomas, para recuperar la salud y evitar complicaciones y recidivas (ej. histerectomía radical). Prevención cuaternaria enfrenta los síntomas, en ausencia de una patología orgánica (ej. psicoterapia de trastorno somatomorfo). Promoción de la salud consiste en enseñar hábitos de vida saludables, por lo que se enmarca dentro de la prevención primaria, pero su deﬁnición es especíﬁca.

### [7] EUNACOM Diciembre 2025 · Pregunta 35 · confianza 0.95
Un paciente de 23 años sufre una caída mientras jugaba fútbol, cayendo con el hombro derecho contra el piso y resultando en una luxación anterior de hombro derecho, la cual es conﬁrmada con radiograFas de hombro, las cuales descartan la presencia de fracturas. ¿Qué evaluación debe realizarse obligatoriamente en el examen Fsico antes de proceder con las maniobras de reducción?
- A) Buscar presencia de equimosis
- B) Buscar deformación en “charretera”
- C) Explorar la sensibilidad de la zona deltoidea
- D) Evaluar la impotencia funcional
- E) Evaluar crépito óseo
**Correcta: C**
Explicación del banco: La luxación anterior se asocia a lesión del nervio axilar o circunﬂejo, que inerva al deltoides (abducción del hombro) y la sensibilidad en la zona deltoidea. Se debe consignar su alteración antes de la reducción, para que no se culpe luego al médico de haberla causado durante la reducción. Las demás opciones ya han sido evaluadas mediante la clínica (la luxación Gene hombro “en charretera”, impotencia funcional) y la radiografía.

### [8] EUNACOM Julio 2024 · Pregunta 127 · confianza 0.95
Un paciente de 32 años consulta por la idea recurrente de que debe limpiar sus utensilios de alimentación para evitar adquirir una infección intestinal. Refiere que se cepilla los dientes durante 15 minutos y luego se enjuaga la boca por 10 minutos más. Reconoce que a veces quiere dejar de hacerlo, pero no puede evitarlo. Como antecedente, sufrió de leucemia aguda a los 7 años, siendo manejado con quimioterapia y logrando la curación de la enfermedad. ¿Cuál es el diagnóstico más probable?
- A) Manía aguda
- B) Trastorno por descontrol de impulsos
- C) Trastorno de personalidad
- D) Esquizofrenia
- E) Trastorno obsesivo compulsivo
**Correcta: E**
Explicación del banco: Trastorno Obsesivo-Compulsivo: El cuadro clínico describe un trastorno obsesivo-compulsivo clásico, con obsesión por la contaminación y compulsión por la limpieza.

### [9] EUNACOM Diciembre 2017 · Pregunta 100 · confianza 0.95
Un paciente sufre una caída a nivel, con golpe en el hombro derecho, evolucionando con dolor e impotencia funcional. Se realizan radiografías de hombro, una de las que se muestra a continuación: FOTO (Radiografía AP de hombro, con fractura del tercio medio de la clavícula derecha, con ligero desplazamiento, sin conminución) ¿Qué tipo de inmovilización es la más adecuada?
- A) Vendaje axial de hombro
- B) Vendaje en ocho
- C) Yeso Velpeau
- D) Yeso toracobraquial
- E) Cabestrillo
**Correcta: E**
Explicación del banco: , ¿B?. El cabestrillo y el vendaje en 8 son los más usados en las fracturas del tercio medio de clavícula. Sin embargo, también se pueden usar otros tipos de inmovilización, según la valoración por el especialista. El vendaje en 8 se asocia a mayores molestias, por compresión cutánea y del complejo neurovascular axilar, así que el cabestrillo suele ser lo más recomendado. De todos, modos, es una pregunta de especialista.

### [10] EUNACOM Julio 2015 · Pregunta 46 · confianza 0.95
Un paciente de presenta dolor abdominal en el flanco izquierdo, por lo que se realiza una ecografía abdominal, que muestra un tumor renal sólido, de 2,5 cm de diámetro, en el polo superior del riñón derecho. Se solicita un TAC, que confirma el tumor renal de aspecto sólido y que capta contraste. ¿Cuál es la conducta más adecuada?
- A) Nefrectomía radical
- B) Nefrectomía parcial
- C) Nefroureterectomía
- D) Iniciar inhibidores de la tirosinasa
- E) Realizar seguimiento ecográfico
**Correcta: B**
Explicación del banco: Todo tumor renal sólido (con pocas excepciones) se presume un cáncer renal. Si son menores a 7 cm (antes era 4), se tratan con nefrectomía parcial (más aún en monorrenos o insuficientes renales). Si son más de 7 cm se tratan con nefrectomía radical. Si tienen metástasis ganglionares, van a terapia paliativa (la inmunoterapia puede servir, pero poco y es muy cara). Si es de pelvis renal, se hace nefroureterectomía.

### [11] EUNACOM Agosto 2021 · Pregunta 78 · confianza 0.92
Una mujer de 52 años presenta reglas irregulares, desde hace 8 meses, asociadas a bochornos frecuentes, con calor, enrojecimiento de la cara, sudoración nocturna y dificultades para dormir. ¿Cuál es la indicación más adecuada para el manejo de los síntomas de esta paciente?
- A) Fitoestrógenos
- B) Terapia de reemplazo hormonal combinada continua
- C) Terapia de reemplazo hormonal combinada cíclica
- D) Estrógenos solos continuos
- E) Progestágenos solos continuos
**Correcta: B**
Explicación del banco: Tiene síntomas climatéricos, que se tratan con terapia de reemplazo hormonal. La regla general es que se usan estrógenos más progestágenos, salvo en las pacientes histerectomizadas, en que se usa estrógeno solo. En este caso tiene útero, ya que tiene reglas irregulares. En los casos en que la TRH está contraindicada (ej. cáncer de mama) se usan los antidepresivos, ya sea IRS o venlafaxina. En la práctica, suele indicarse de tipo continua, ya que no sirve mayormente la TRH cíclica (aunque hay quienes postulan que sirve en el inicio de los síntomas climatérico, como una forma de ciclar a la paciente con reglas irregulares; sin embargo, en la práctica casi no existen fármacos de ese tipo disponibles en el medio chileno, salvo que use ACOs como TRH).

### [12] EUNACOM Julio 2017 · Pregunta 139 · confianza 0.92
¿Qué antecedente es indicación del uso de estrógenos orales solos, en la terapia de reemplazo hormonal?
- A) Antecedente de cáncer de mama
- B) Antecedente de dislipidemia
- C) Antecedente de histerectomía total
- D) Osteoporosis
- E) Edad mayor a 70 años
**Correcta: C**
Explicación del banco: El uso de progestágeno en la TRH está solo indicado para evitar el cáncer de endo- metrio. Si hay histerectomía, se hace innecesario dar progestágeno y se dan estrógenos solos.

### [13] EUNACOM Julio 2015 · Pregunta 155 · confianza 0.92
Una paciente se realiza un legrado por un aborto espontáneo. La biopsia es informada como “mola completa”. Su HCG postlegrado es de 750 UI/L. ¿Cuál es la conducta más adecuada?
- A) Seguirla con niveles seriados de HCG
- B) Realizar biopsia endometrial
- C) Indicar anticonceptivos con progestágeno solo
- D) Repetir el legrado
- E) Indicar metotrexato
**Correcta: A**
Explicación del banco: Ante un embarazo molar se debe seguir con HCG, después de sacarla. Si se eleva o mantiene sin bajar, se diagnostica neoplasia trofoblástica gestacional y se procede a la histerectomía más quimioterapia con metotrexato. Una HCG de 750 postlegrado, es bastante baja.

### [14] EUNACOM Diciembre 2025 · Pregunta 46 · confianza 0.9
Una paciente de 55 años, con menopausia a los 51 años y usuaria de estrógenos transdérmicos como terapia de reemplazo hormonal, consulta por sangrado genital de 5 días de evolución. Al examen Fsico, sus signos vitales son normales y la especuloscopía no muestra metrorragia ac8va ni lesiones del cuello uterino. ¿Cuál es la conducta más adecuada?
- A) Realizar histerectomía
- B) Aumentar la dosis de estrógenos
- C) Iniciar an2concep2vos orales
- D) Solicitar biopsia de endometrio
- E) Indicar ácido tranexámico vía oral
**Correcta: D**
Explicación del banco: Toda metrorragia postmenopáusica se debe estudiar. Existen dos opciones de estudio: 1. Ecografía transvaginal (el más usado) y 2. Directamente la biopsia endometrial (BEM), que habitualmente se hace por técnicas poco invasivas, como la Pipelle. En el caso de que se uGlice la ecografía, se ve el grosor del endometrio, si es menor a 5 mm, se asume que era atroﬁa vaginal y se observa. Si es de 5 mm o más, se biopsia. En caso de que esté con terapia de reemplazo hormonal (TRH), se biopsia desde 8 mm. Si se solicita una ecografía por otro motivo, en una paciente postmenopáusica sin metrorragia, también se biopsia desde los 11 mm. En resumen, las indicaciones de BEM en la postmenopausia: 1. Cualquier metrorragia (aceptable, sin EcoTV). 2. Metrorragia + EcoTV con EM > 4-5 mm (≥ 8 mm si TRH). 3. Asintomática + EcoTV con EM ≥ 11 mm

### [15] EUNACOM Diciembre 2025 · Pregunta 43 · confianza 0.9
Una paciente de 56 años, usuaria de terapia de reemplazo hormonal y sin síntomas ginecológicos, se realiza una ecograFa abdominal durante el estudio de un cuadro cons8pación crónica. En dicho examen se detecta un mioma uterino subseroso de 32 × 35 mm, FIGO 6. ¿Cuál es la conducta más adecuada?
- A) Realizar laparoscopía
- B) Suspender la terapia de reemplazo hormonal
- C) Iniciar an2concep2vos orales
- D) Realizar histerectomía
- E) Realizar control ecográﬁco en 6 meses
**Correcta: E**
Explicación del banco: Los miomas asintomáticos se observan, sin importar su clasiﬁcación. Por cultura general, la clasiﬁcación FIGO va del 1 al 8 y se reﬁere a la ubicación, en relación a la pared. Mientras más bajo, más hacia submucoso (hacia la cavidad uterina) y mientras más alto, más subseroso (hacia afuera). FIGO 4 es intramural puro y FIGO 6 es subseroso, con un componente intramural.

### [16] EUNACOM Diciembre 2025 · Pregunta 162 · confianza 0.9
Una paciente de 53 años acude a control ginecológico. Tuvo su menopausia a los 51 años y está en terapia de reemplazo hormonal, con estrógeno y progestágeno por vía oral, como tratamiento de los síntomas vasomotores del climaterio. Su examen ginecológico es normal, al igual que su mamograFa y PAP. Además, se solicita una ecograFa transvaginal, cuya imagen se presenta a con8nuación: ¿Cuál es la conducta más adecuada?
- A) Realizar biopsia endometrial
- B) Controlar con ecogra:a en 6 meses
- C) Suspender la terapia de reemplazo hormonal
- D) Realizar resección de la lesión por laparoscopía
- E) Instalar disposi2vo intrauterino medicado con levonorgestrel
**Correcta: B**
Explicación del banco: Conducta / Tratamiento indicado: **Controlar con ecogra:a en 6 meses** (opción **B**). Tiene un mioma asintomático, por lo que se debe observar evolución. Fuente imagen: hxps://we.riseup.net/assets/230674/.... Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención.

### [17] EUNACOM Julio 2025 · Pregunta 127 · confianza 0.9
Hombre de 55 años con dolor en el hombro derecho al elevar el brazo entre 60-120° (arco doloroso). Prueba de Neer y Hawkins positivas. ¿Cuál es el diagnóstico más probable?
- A) Síndrome de pinzamiento subacromial (manguito rotador)
- B) Luxación glenohumeral
- C) Capsulitis adhesiva (hombro congelado)
- D) Artritis reumatoide de hombro
- E) Fractura de clavícula
**Correcta: A**
Explicación del banco: Arco doloroso 60-120° + Neer (+) + Hawkins (+) = síndrome de pinzamiento subacromial por tendinitis/desgarro del manguito rotador. Tratamiento: kinesioterapia + AINEs ± corticoides locales.

### [18] EUNACOM Julio 2025 · Pregunta 95 · confianza 0.9
Hombre de 45 años con lumbalgia mecánica de 5 días de evolución, sin irradiación, sin signos de alarma. EF: dolor a la palpación paravertebral lumbar, sin déficit neurológico. ¿Cuál es el manejo más adecuado?
- A) Analgesia (AINEs o paracetamol) + kinesioterapia activa; no reposo en cama
- B) Reposo absoluto por 7 días
- C) Cirugía de columna
- D) Infiltración epidural de corticoides
- E) Resonancia magnética urgente
**Correcta: A**
Explicación del banco: Lumbalgia mecánica aguda sin alarma: AINEs por corto plazo + actividad física progresiva + kinesioterapia. El reposo en cama prolonga la incapacidad. Sin indicación de imagen en fase aguda.

### [19] EUNACOM Julio 2025 · Pregunta 24 · confianza 0.9
Mujer de 55 años con DM2 en tratamiento con metformina, requiere corticoterapia con prednisona 40 mg/día por enfermedad pulmonar. Sus glicemias de ayuno eran 130 mg/dL y post-prandiales suben a 280 mg/dL. ¿Cuál es el ajuste más adecuado?
- A) Iniciar insulina
- B) Agregar metformina adicional
- C) Pioglitazona
- D) Glibenclamida
- E) Sitagliptina
**Correcta: A**
Explicación del banco: Corticoides causan hiperglicemia postprandial marcada por resistencia a la insulina. La insulina es el tratamiento de elección en este contexto (flexibilidad de ajuste, control rápido). Los hipoglicemiantes orales no dan el control necesario con dosis altas de corticoides.

### [20] EUNACOM Diciembre 2025 · Pregunta 20 · confianza 0.9
Un paciente de 55 años, diagnos8cado con un linfoma no Hodgkin con múl8ples masas medias`nicas y abdominales de gran tamaño, de hasta 25 cm, inicia quimioterapia endovenosa. Al tercer día evoluciona con malestar general marcado, obnubilación y disnea. Al examen Fsico, se aprecia desorientado en el 8empo y el espacio, en malas condiciones generales y se solicitan exámenes de laboratorio, entre los que destacan ácido úrico: 13 mg/dL, sodio: 140 mEq/L, potasio: 5,9 mEq/L, fósforo: 6,5 mg/dl, crea8nina plasmá8ca: 2,1 mg/dl y hematocrito 22%. ¿Cuál es el diagnós8co más probable?
- A) Hipercalcemia maligna
- B) Metástasis cerebrales
- C) Síndrome de vena cava superior
- D) Síndrome de compresión medular
- E) Síndrome de lisis tumoral
**Correcta: E**
Explicación del banco: Es un síndrome de lisis tumoral clásico, con rotura celular masiva, que se reﬂeja en hiperuricemia, hiperkalemia, hiperfosfemia, hipocalcemia, acidosis, falla renal, compromiso de conciencia, compromiso hemodinámico. Se trata con hidratación, hipouricemiantes (ej. alopurinol) y manejo de los electrolitos según las alteraciones (ej. Bicarbonato, calcio, furosemida, insulina más glucosa, resinas de intercambio como el sulfonato de poliestireno, etc.).

### [21] EUNACOM Julio 2025 · Pregunta 63 · confianza 0.9
Paciente con linfoma en quimioterapia. Post primer ciclo presenta hiperuricemia, hiperkalemia, hiperfosfatemia e hipocalcemia. Creatinina en ascenso. ¿Cuál es el diagnóstico?
- A) Síndrome de lisis tumoral
- B) Insuficiencia renal aguda prerenal
- C) Nefrotoxicidad por cisplatino
- D) Síndrome hemolítico urémico
- E) Hiperparatiroidismo secundario
**Correcta: A**
Explicación del banco: Post quimioterapia: hiperuricemia + hiperkalemia + hiperfosfatemia + hipocalcemia + IRA = síndrome de lisis tumoral. Ocurre por destrucción masiva de células tumorales que liberan su contenido.

### [22] EUNACOM Diciembre 2025 · Pregunta 73 · confianza 0.9
Una paciente de 35 años es traída al servicio de urgencia debido a que, luego del consumo de alcohol en una ﬁesta, presentó una ac8tud agresiva peleando con otros invitados, a quienes arrojó vasos de vidrio, por lo que fue re8rada del lugar. Reﬁere que consume alcohol de manera esporádica, habitualmente solo durante los ﬁnes de semana, y que lo hace como una forma de distenderse de su alta carga laboral. En una oportunidad fue detenida por manejar en estado de ebriedad, sin embargo, ella no considera que ello sea un problema. ¿Cuál es la conducta más adecuada?
- A) Iniciar disulﬁram vía oral
- B) Indicar benzodiacepinas vía oral
- C) Iniciar bupropión vía oral
- D) Realizar entrevista mo2vacional
- E) Derivar para psicoterapia cogni2vo-conductual
**Correcta: D**
Explicación del banco: Presenta un consumo perjudicial de alcohol con escasa conciencia de enfermedad (etapa precontemplativa), por lo que primero se debe trabajar la motivación al cambio. De nada sirve iniciar fármacos o derivar a psicoterapia, si no Gene intenciones de cambiar.

### [23] EUNACOM Diciembre 2025 · Pregunta 138 · confianza 0.9
Un paciente de 21 años sufre accidente en esquí con caída y torsión del tobillo derecho, evolucionando con dolor e impotencia funcional. Se solicita radiograFa de tobillo que se muestra a con8nuación: ¿Cuál es la conducta inicial más adecuada?
- A) Reposo con extremidad en elevación
- B) Reducción cerrada e inmovilización con valva de yeso
- C) Analgésicos y apoyo progresivo con mínima carga
- D) Vendaje compresivo
- E) Tracción e inmovilización con yeso de la extremidad
**Correcta: B**
Explicación del banco: Tiene una luxofractura de tobillo, cuyo manejo es quirúrgico. Sin embargo, el manejo inicial consiste en analgesia, reducción cerrada (bajo anestesia o sedación) e inmovilización transitoria, con valva de yeso abierta, para evitar un síndrome compartimental. Este mismo manejo aplica a otras fracturas desplazadas, mientras se espera la cirugía. Fuente imagen: Radiopaedia.

### [24] EUNACOM Diciembre 2022 · Pregunta 7 · confianza 0.9
Una paciente de 56 años tiene antecedentes de cáncer de mama, en tratamiento con quimioterapia cuyo último ciclo fue hace 9 días. Consulta porque ha presentado malestar general y fiebre hasta 38,5°C. Al examen físico, se confirma febril, con frecuencia cardíaca 95x’, PA: 120/80, sin otras alteraciones. ¿Cuál es el examen de elección para iniciar el estudio?
- A) Hemograma
- B) Radiografía de tórax
- C) Urocultivo
- D) Ecografía abdominal
- E) Mielograma
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Urocultivo** (opción **C**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención. Las opciones alternativas (Hemograma, Radiografía de tórax) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [25] EUNACOM Julio 2018 · Pregunta 76 · confianza 0.9
Una paciente de 30 años se realiza un PAP, que resulta atípico de alto grado, por lo que se realiza una colposcopía y biopsia, que es informada como NIE-1, de localización exocervical. ¿Cuál es la conducta más adecuada?
- A) Seguimiento con PAP
- B) Crioterapia
- C) Cono cervical
- D) Tipificación de virus papiloma humano
- E) Diatermocoagulación
**Correcta: E**
Explicación del banco: Conducta / Tratamiento indicado: **Diatermocoagulación** (opción **E**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención. Las opciones alternativas (Seguimiento con PAP, Crioterapia) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.
