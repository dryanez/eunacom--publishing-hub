# CLASE neuro-22 · Neurologia 10.22: Fragilidad, Sarcopenia y Valoración Geriátrica Integral (VGI)

Escribe `classes/lessons/neuro-22.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-22" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-19: Neurologia 10.19: Parálisis Facial Periférica (Bell) vs Central y Neuropatías por Atrapamiento
- neuro-20: Neurologia 10.20: Síndrome Vertiginoso Periférico vs Central: VPPB, Maniobras de Epley y Protocolo HINTS
- neuro-21: Neurologia 10.21: Síndrome Confusional Agudo (Delirium): Criterios CAM, Factores Precipitantes y Abordaje Multicomponente
- neuro-23: Neurologia 10.23: Caídas en el Adulto Mayor, Trastornos de la Marcha y Fractura de Cadera GES
- neuro-24: Neurologia 10.24: Polifarmacia, Criterios de Beers / STOPP-START e Incontinencia Urinaria en la Persona Mayor

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-22",
  "classId": "neuro-22",
  "tier": 2,
  "blockNum": 5,
  "blockName": "Geriatría Clínica y Grandes Síndromes Geriátricos",
  "topicLabel": "10.22",
  "title": "Fragilidad, Sarcopenia y Valoración Geriátrica Integral (VGI)",
  "perfilCode": "1.07.1.008",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Control ambulatorio",
  "ges": "Evaluación y cribado en el Examen de Medicina Preventiva del Adulto Mayor (EMPAM) en Atención Primaria de Salud (APS) · Programa Nacional del Adulto Mayor.",
  "reconstrucciones": "EUNACOM 2024 (Q#95) · EUNACOM 2022 (Q#108) · EUNACOM 2019 (Q#114) · EUNACOM 2015 (Q#82)",
  "frecuencia": "Alta rentabilidad · Concepto central en atención primaria, medicina preventiva y geriatría",
  "algoTitle": null,
  "diagram": null,
  "contexto": "La fragilidad y la sarcopenia representan el sustrato biológico del declive funcional en la persona mayor. La fragilidad es un síndrome biológico multisistémico caracterizado por la pérdida de la reserva homeostática y de la capacidad de adaptación ante estresores menores, lo que predispone a caídas, discapacidad, hospitalización y muerte. No equivale a envejecimiento cronológico ni a discapacidad terminal: es un estado dinámico, prevenible y potencialmente reversible. Su detección sistemática mediante el fenotipo de Linda Fried y los instrumentos de la Valoración Geriátrica Integral (VGI) en el EMPAM permite instaurar programas de ejercicio multicomponente e intervenciones nutricionales que rescatan la autonomía funcional.",
  "contentSections": [
    {
      "subhead": "1. Concepto Biológico de Fragilidad y Fenotipo de Linda Fried",
      "paragraphs": [
        "La <strong>fragilidad</strong> se define como un estado de vulnerabilidad biológica aumentada resultante del declive acumulativo de múltiples sistemas fisiológicos (inmune, neuroendocrino, osteomuscular y cardiovascular), mediado por senescencia celular, inflamación crónica de bajo grado (<em>inflammaging</em>), estrés oxidativo y disfunción mitocondrial. Este deterioro agota la reserva funcional orgánica, de modo que ante un estresor clínico menor (una infección urinaria no complicada, un cambio en la pauta farmacológica o un reposo en cama de 48 horas), el adulto mayor frágil experimenta una caída catastrófica y desproporcionada de su capacidad funcional.",
        "El modelo fenotípico más validado y empleado en investigación y clínica geriátrica es el <strong>Fenotipo de Linda Fried (Cardiovascular Health Study)</strong>, que evalúa 5 criterios objetivos (véase Tabla 10.22: Criterios de Fried de Fragilidad e Instrumentos de la VGI):",
        "• <strong>1. Pérdida involuntaria de peso:</strong> Pérdida no intencionada de ≥ 4.5 kg o ≥ 5% del peso corporal en el último año.",
        "• <strong>2. Agotamiento o fatiga autorreportada:</strong> Sentimiento de que \"todo lo que hacía requería un esfuerzo inmenso\" o \"no podía ponerse en marcha\" durante la última semana (preguntas de la escala CES-D).",
        "• <strong>3. Debilidad muscular (fuerza de prensión disminuida):</strong> Fuerza de prensión palmar reducida cuantificada mediante dinamometría hidráulica de mano, ajustada por sexo e índice de masa corporal (habitualmente &lt; 20-27 kg en hombres y &lt; 16 kg en mujeres).",
        "• <strong>4. Lentitud en la velocidad de la marcha:</strong> Tiempo prolongado para recorrer 4 metros a paso habitual (velocidad de marcha &lt; 0.8 m/s o &gt; 5-6 segundos en 4 metros).",
        "• <strong>5. Bajo nivel de actividad física:</strong> Gasto calórico semanal estimado reducido (&lt; 383 kcal/semana en varones o &lt; 270 kcal/semana en mujeres).",
        "<strong>Estratificación fenotípica:</strong> La presencia de <strong>0 criterios</strong> clasifica al paciente como <em>Robusto</em>; la presencia de <strong>1 o 2 criterios</strong> define el estadio de <strong>Prefragilidad</strong> (fase de altísima rentabilidad para intervenciones preventivas); y la presencia de <strong>≥ 3 criterios</strong> establece el diagnóstico formal de <strong>Síndrome de Fragilidad</strong>."
      ]
    },
    {
      "subhead": "2. Sarcopenia: Consenso Europeo EWGSOP2 y Criterios Diagnósticos",
      "paragraphs": [
        "La <strong>sarcopenia</strong> es una enfermedad del músculo esquelético de base progresiva y generalizada, caracterizada por la pérdida acelerada de masa muscular, fuerza muscular y función física, asociada a un incremento significativo de caídas, fracturas, discapacidad y mortalidad (véase Tabla de Gravedad 10.22: Consenso Europeo EWGSOP2 de Sarcopenia).",
        "El Consenso Europeo <strong>EWGSOP2 (European Working Group on Sarcopenia in Older People, actualización 2019)</strong> revolucionó su enfoque clínico al posicionar a la <strong>fuerza muscular</strong> (y no a la masa) como el parámetro cardinal primario de sospecha y diagnóstico probable:",
        "• <strong>Paso 1 (Cribado clínico):</strong> Se pesquisa mediante el cuestionario autoadministrado <strong>SARC-F</strong> (evalúa fuerza, asistencia para caminar, levantarse de una silla, subir escaleras y caídas). Una puntuación ≥ 4 puntos predice sarcopenia e indica evaluación objetiva.",
        "• <strong>Paso 2 (Diagnóstico Probable de Sarcopenia):</strong> Documentación de <strong>baja fuerza muscular</strong>. Se mide mediante dinamometría manual (corte: &lt; 27 kg en varones y &lt; 16 kg en mujeres) o mediante la <strong>Prueba de levantarse de la silla (Chair Stand Test)</strong>: requerir más de 15 segundos para completar 5 levantamientos consecutivos de una silla sin ayudarse con los brazos. <em>La sola presencia de baja fuerza muscular confirma sarcopenia probable e impone el inicio inmediato de intervención terapéutica</em>.",
        "• <strong>Paso 3 (Confirmación Diagnóstica):</strong> Demostración de <strong>baja cantidad o calidad de masa muscular</strong> mediante técnicas de imagen corporal: Densitometría Ósea de cuerpo entero (DEXA - Dual-energy X-ray Absorptiometry) cuantificando el Índice de Masa Muscular Apendicular (IMAE &lt; 7.0 kg/m² en hombres y &lt; 5.5 kg/m² en mujeres) o Bioimpedanciometría Eléctrica (BIA).",
        "• <strong>Paso 4 (Determinación de Severidad):</strong> Sarcopenia Severa se diagnostica cuando a la baja fuerza muscular y a la baja masa muscular confirmada se añade un <strong>bajo rendimiento físico funcional</strong>, evaluado mediante velocidad de la marcha &lt; 0.8 m/s, test Timed Up and Go (TUG) ≥ 20 segundos o batería SPPB (Short Physical Performance Battery) ≤ 8 puntos."
      ]
    },
    {
      "subhead": "3. Valoración Geriátrica Integral (VGI) y el EMPAM en Chile",
      "paragraphs": [
        "La <strong>Valoración Geriátrica Integral (VGI)</strong> es la tecnología diagnóstica nuclear de la medicina geriátrica. Consiste en un proceso diagnóstico interdisciplinario y multidimensional diseñado para identificar las capacidades y problemas clínicos, funcionales, mentales y sociales del adulto mayor, con el fin de elaborar un plan coordinado de tratamiento y seguimiento a largo plazo.",
        "La VGI abarca 4 esferas fundamentales evaluadas mediante instrumentos estructurados y validados:",
        "• <strong>1. Esfera Funcional:</strong> Evalúa la capacidad del individuo para desempeñarse en su entorno habitual. Se divide en: <em>Actividades Básicas de la Vida Diaria (ABVD)</em> mediante el <strong>Índice de Barthel</strong> (0 a 100 puntos: alimentación, baño, vestido, aseo personal, continencia vesical y fecal, uso de retrete, transferencias y deambulación; &lt; 20 dependencia total, 20-55 dependencia grave, 60-95 dependencia leve/moderada, 100 independiente) o Índice de Katz; y <em>Actividades Instrumentales de la Vida Diaria (AIVD)</em> mediante la <strong>Escala de Lawton y Brody</strong> (0 a 8 puntos: uso de teléfono, compras, preparación de comida, cuidado del hogar, lavado de ropa, uso de transporte, manejo de medicación y finanzas; sensible a pérdidas iniciales por deterioro cognitivo).",
        "• <strong>2. Esfera Mental (Cognitiva y Afectiva):</strong> Evaluación cognitiva mediante el <strong>Cuestionario de Pfeiffer (SPMSQ)</strong> (10 preguntas breves de orientación, memoria y cálculo; 0-2 errores normal, 3-4 leve, 5-7 moderado, 8-10 severo) y el Mini-Mental de Folstein (MMSE) o MoCA. La esfera afectiva se cribea con la <strong>Escala de Depresión Geriátrica de Yesavage (GDS-15)</strong> (puntuación ≥ 5 sugiere depresión activa).",
        "• <strong>3. Esfera Clínica y Nutricional:</strong> Registro exhaustivo de comorbilidades, polifarmacia y cribado nutricional mediante el <strong>Mini Nutritional Assessment (MNA)</strong> (&lt; 17 puntos desnutrición establecida, 17-23.5 riesgo de desnutrición).",
        "• <strong>4. Esfera Social:</strong> Evaluación del soporte familiar, cuidador principal, redes de apoyo y recursos económicos mediante la <strong>Escala de Valoración Sociofamiliar de Gijón</strong>.",
        "En el sistema público de salud de Chile (APS), el <strong>Examen de Medicina Preventiva del Adulto Mayor (EMPAM)</strong> aplica anualmente el instrumento <strong>EFAM-Chile (Evaluación Funcional del Adulto Mayor)</strong> en personas de 65 años y más, clasificándolas en: <em>Autovalente sin riesgo</em>, <em>Autovalente con riesgo</em> (derivado a talleres de prevención y actividad física) y <em>En riesgo de dependencia</em> (derivado a médico para VGI completa y manejo multifactorial)."
      ]
    },
    {
      "subhead": "4. Intervenciones Basadas en Evidencia: Ejercicio Multicomponente y Nutrición",
      "paragraphs": [
        "La evidencia médica contemporánea demuestra que el síndrome de fragilidad y la sarcopenia son entidades reversibles si se interviene oportunamente:",
        "• <strong>Ejercicio Físico Multicomponente (Pilar Angular):</strong> Es la intervención no farmacológica de mayor impacto clínico. El modelo estandarizado internacional <strong>Vivifrail</strong> prescribe un programa combinado de: 1) Ejercicio de fuerza y potencia muscular (contracciones contra resistencia progresiva para cuádriceps, glúteos y prensión); 2) Entrenamiento del equilibrio estático y dinámico (prevención directa de caídas); 3) Marcha funcional; y 4) Flexibilidad articular. Debe practicarse al menos 3 a 5 días a la semana.",
        "• <strong>Optimización Nutricional Proteico-Calórica:</strong> Los adultos mayores requieren un aporte proteico superior al adulto joven para superar la resistencia anabólica muscular: meta de <strong>1.2 a 1.5 g de proteínas por kg de peso corporal al día</strong> (en ausencia de insuficiencia renal avanzada terminal sin diálisis), distribuido homogéneamente en las tres comidas principales y enriquecido con aminoácidos ramificados (especialmente leucina 2.5 a 3 g por porción).",
        "• <strong>Vitamina D:</strong> Suplementación con Colecalciferol (800 a 2000 UI/día) si los niveles séricos de 25-hidroxivitamina D son inferiores a 20-30 ng/mL, mejorando la fuerza de las fibras musculares tipo II y reduciendo el riesgo de caídas.",
        "• <strong>Revisión Farmacológica:</strong> Desprescripción activa de fármacos sedantes, anticolinérgicos y anorexígenos que perpetúan la inmovilidad y la anorexia senil."
      ]
    }
  ],
  "table": {
    "title": "Criterios de Fried de Fragilidad e Instrumentos Cardinales de la Valoración Geriátrica Integral (VGI)",
    "headers": [
      "Dominio / Criterio",
      "Definición Operativa y Puntos de Corte",
      "Herramienta Estandarizada / Escala",
      "Utilidad Clínica en EUNACOM y APS"
    ],
    "rows": [
      [
        "Pérdida Involuntaria de Peso",
        "Pérdida no intencionada ≥ 4.5 kg o ≥ 5% del peso basal en los últimos 12 meses",
        "Registro antropométrico seriado de peso corporal e IMC",
        "Criterio 1 de Fried · Alerta de sarcopenia, desnutrición o neoplasia oculta"
      ],
      [
        "Agotamiento / Fatiga Subjetiva",
        "Sensación autorreportada de que todo esfuerzo es insuperable ≥ 3 días/semana",
        "Preguntas estructuradas escala CES-D de depresión",
        "Criterio 2 de Fried · Marcador de declive psicobiológico y anergia"
      ],
      [
        "Debilidad Muscular",
        "Fuerza prensil disminuida en dinamometría (< 27 kg hombres, < 16 kg mujeres)",
        "Dinamómetro hidráulico Jamar (o Chair Stand Test > 15 s)",
        "Criterio 3 de Fried · Parámetro cardinal EWGSOP2 para Sarcopenia Probable"
      ],
      [
        "Lentitud de la Marcha",
        "Velocidad de marcha habitual reducida: tiempo > 5-6 s para recorrer 4 metros (< 0.8 m/s)",
        "Test de marcha cronometrada de 4 metros a paso usual",
        "Criterio 4 de Fried · Predictor potente de caídas, institucionalización y muerte"
      ],
      [
        "Bajo Nivel de Actividad Física",
        "Gasto calórico semanal mínimo (< 383 kcal/sem hombres, < 270 kcal/sem mujeres)",
        "Cuestionario de actividad física para el anciano (Minnesota / IPAQ)",
        "Criterio 5 de Fried · 0 criterios: Robusto; 1-2: Prefrágil; ≥ 3: Frágil"
      ],
      [
        "Esfera Funcional Básica (ABVD)",
        "Independencia para baño, vestido, alimentación, continencia y deambular",
        "Índice de Barthel (0 a 100 puntos) / Índice de Katz (A a G)",
        "Puntaje < 60 define dependencia funcional moderada a severa"
      ],
      [
        "Esfera Instrumental (AIVD)",
        "Capacidad para tareas comunitarias: teléfono, finanzas, transporte y remedios",
        "Escala de Lawton y Brody (0 a 8 puntos)",
        "Primera esfera que claudica ante deterioro cognitivo inicial"
      ],
      [
        "Esfera Cognitiva de Cribado",
        "Orientación temporoespacial, memoria biográfica y cálculo matemático simple",
        "Cuestionario de Pfeiffer (SPMSQ) (0 a 10 errores)",
        "≥ 3 errores indica deterioro cognitivo que requiere estudio formal"
      ],
      [
        "Esfera Nutricional",
        "Cribado de pérdida de peso, apetito, movilidad y estrés agudo reciente",
        "Mini Nutritional Assessment (MNA) (0 a 30 puntos)",
        "< 17 puntos confirma desnutrición calórico-proteica establecida"
      ]
    ]
  },
  "severityTable": {
    "title": "Consenso Europeo EWGSOP2 para el Diagnóstico y Estadificación de Sarcopenia",
    "headers": [
      "Nivel de Progresión",
      "Criterio Diagnóstico EWGSOP2",
      "Método Clínico / Umbrales",
      "Acción Terapéutica Inmediata"
    ],
    "rows": [
      [
        "1. Sospecha Clínica",
        "Cuestionario SARC-F alterado (evalúa fuerza, ayuda marcha, levantarse silla, escaleras, caídas)",
        "Puntuación SARC-F ≥ 4 puntos",
        "Proceder de inmediato a la medición cuantitativa de fuerza muscular"
      ],
      [
        "2. Sarcopenia Probable",
        "Disminución objetiva de la FUERZA MUSCULAR (parámetro primario obligatorio)",
        "Dinamometría manual: < 27 kg (hombres) / < 16 kg (mujeres) Ó Chair Stand Test > 15 s (5 repeticiones)",
        "SUFICIENTE para iniciar intervención: Ejercicio de fuerza multicomponente + aporte proteico 1.2-1.5 g/kg/d"
      ],
      [
        "3. Sarcopenia Confirmada",
        "Baja fuerza muscular + Disminución documentada de la MASA o CALIDAD MUSCULAR",
        "DEXA de cuerpo entero: IMAE < 7.0 kg/m² (hombres) / < 5.5 kg/m² (mujeres) Ó Bioimpedanciometría (BIA)",
        "Confirma diagnóstico anatomopatológico; optimizar nutrición con leucina y Vitamina D si sérica < 30 ng/mL"
      ],
      [
        "4. Sarcopenia Severa",
        "Baja fuerza muscular + Baja masa muscular + Bajo RENDIMIENTO FÍSICO funcional",
        "Velocidad de marcha < 0.8 m/s Ó Timed Up and Go (TUG) ≥ 20 s Ó batería SPPB ≤ 8 puntos",
        "Alto riesgo de caídas y dependencia; programa de rehabilitación motora intensiva y evaluación de ayudas técnicas"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 78 años, autovalente con antecedente de osteoporosis e hipotiroidismo en tratamiento con levotiroxina y carbonato de calcio, acude a control en su consultorio de atención primaria. Su hija refiere que en el último año \"ha bajado de peso sin hacer dieta\" (pesaba 58 kg y actualmente pesa 52 kg; IMC 21.5 kg/m²), camina más lento arrastrando los pies y ya no sale a comprar porque \"se cansa enseguida\". En el examen físico: signos vitales normales. En la dinamometría manual registra una fuerza prensil de 13 kg en la mano dominante. En la prueba de velocidad de la marcha demora 7.2 segundos en recorrer 4 metros (0.55 m/s). En el cuestionario de Pfeiffer comete 1 error (normal). Su Índice de Barthel es de 95/100 y Lawton-Brody 6/8.",
    "conducta": "La paciente cumple criterios diagnósticos inequívocos para Síndrome de Fragilidad según los Criterios de Linda Fried: 1) Pérdida involuntaria de peso (> 10% en 1 año; 6 kg perdidos de 58 kg basales); 2) Fatiga o agotamiento autorreportado; 3) Debilidad muscular demostrada por dinamometría palmar < 16 kg (13 kg); y 4) Lentitud de la marcha (< 0.8 m/s; 0.55 m/s). Al presentar 4 de los 5 criterios de Fried (se requieren ≥ 3), se confirma el diagnóstico de Fragilidad establecida. Asimismo, según el consenso europeo EWGSOP2, la presencia de baja fuerza muscular (< 16 kg) establece el diagnóstico de Sarcopenia Probable, y la velocidad de marcha < 0.8 m/s cataloga el cuadro como Sarcopenia Severa. La conducta prioritaria en APS es indicar un programa de ejercicio físico multicomponente adaptado (programa Vivifrail: fuerza muscular progresiva, marcha y equilibrio), asegurar aporte proteico de 1.2 a 1.5 g/kg/día, medir niveles de 25-OH-Vitamina D y descartar causas orgánicas secundarias de baja de peso."
  },
  "explicacion": "La paciente cumple criterios diagnósticos inequívocos para Síndrome de Fragilidad según los Criterios de Linda Fried: 1) Pérdida involuntaria de peso (> 10% en 1 año; 6 kg perdidos de 58 kg basales); 2) Fatiga o agotamiento autorreportado; 3) Debilidad muscular demostrada por dinamometría palmar < 16 kg (13 kg); y 4) Lentitud de la marcha (< 0.8 m/s; 0.55 m/s). Al presentar 4 de los 5 criterios de Fried (se requieren ≥ 3), se confirma el diagnóstico de Fragilidad establecida. Asimismo, según el consenso europeo EWGSOP2, la presencia de baja fuerza muscular (< 16 kg) establece el diagnóstico de Sarcopenia Probable, y la velocidad de marcha < 0.8 m/s cataloga el cuadro como Sarcopenia Severa. La conducta prioritaria en APS es indicar un programa de ejercicio físico multicomponente adaptado (programa Vivifrail: fuerza muscular progresiva, marcha y equilibrio), asegurar aporte proteico de 1.2 a 1.5 g/kg/día, medir niveles de 25-OH-Vitamina D y descartar causas orgánicas secundarias de baja de peso.",
  "keyPoints": [
    "La fragilidad es un síndrome de vulnerabilidad biológica y pérdida de reserva homeostática frente a estresores; es dinámica, prevenible y reversible.",
    "El fenotipo de Fried evalúa 5 criterios: baja de peso involuntaria, fatiga, debilidad muscular (dinamometría), marcha lenta y baja actividad física (≥ 3: Frágil; 1-2: Prefrágil).",
    "El consenso EWGSOP2 define la Sarcopenia Probable únicamente por baja fuerza muscular (dinamometría < 27 kg hombres / < 16 kg mujeres o Chair Stand Test > 15 s), lo que autoriza iniciar tratamiento inmediato.",
    "La Valoración Geriátrica Integral (VGI) abarca cuatro esferas: funcional (Barthel, Lawton-Brody), mental (Pfeiffer, Yesavage), clínica-nutricional (MNA) y social (Gijón).",
    "La intervención de primera línea con mayor nivel de evidencia para revertir fragilidad y sarcopenia es el ejercicio físico multicomponente (fuerza, equilibrio y marcha: Vivifrail) asociado a nutrición proteica (1.2-1.5 g/kg/día)."
  ],
  "questions": [
    {
      "stem": "Una mujer de 55 años se realiza una densitometría ósea que muestra un T-\nscore de -2,3 DS y un Z-score de -1 DS. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Sano"
        },
        {
          "id": "B",
          "text": "Osteopenia"
        },
        {
          "id": "C",
          "text": "Osteoporosis primaria"
        },
        {
          "id": "D",
          "text": "Osteoporosis secundaria"
        },
        {
          "id": "E",
          "text": "Osteopetrosis"
        }
      ],
      "correcta": "B",
      "explicacion": "La pregunta se refiere a la interpretación de los resultados de una densitometría ósea en una mujer postmenopáusica, que es una situación clínica común evaluada en endocrinología. Para clasificar la densidad mineral ósea (DMO), se utilizan principalmente el T-score y, en menor medida, el Z-score. Según los criterios de la Organización Mundial de la Salud (OMS), el T-score es el parámetro clave para diagnosticar osteopenia u osteoporosis en mujeres postmenopáusicas (como la paciente de 55 años) y hombres mayores de 50 años.\n\nLos criterios de la OMS son los siguientes:\n*   **DMO normal**: T-score igual o superior a -1.0 desviación estándar (DS).\n*   **Osteopenia (baja masa ósea)**: T-score entre -1.0 y -2.5 DS.\n*   **Osteoporosis**: T-score igual o inferior a -2.5 DS.\n*   **Osteoporosis grave establecida**: T-score igual o inferior a -2.5 DS y la presencia de una o más fracturas por fragilidad.\n\nEn el caso presentado, la paciente de 55 años tiene un T-score de -2.3 DS. Este valor se encuentra claramente entre -1.0 y -2.5 DS, lo que corresponde al diagnóstico de osteopenia. El Z-score de -1 DS compara la densidad ósea del paciente con la de personas de su misma edad y sexo. Aunque se menciona, el Z-score es más relevante para evaluar la DMO en niños, mujeres premenopáusicas y hombres menores de 50 años, donde un T-score negativo podría ser normal para la edad. Sin embargo, en una mujer postmenopáusica de 55 años, el T-score es el criterio diagnóstico definitivo.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.1.008"
    },
    {
      "stem": "¿Por qué mecanismo se produce la mayor parte de las fracturas de cadera?",
      "options": [
        {
          "id": "A",
          "text": "Caídas a nivel"
        },
        {
          "id": "B",
          "text": "Caídas de altura"
        },
        {
          "id": "C",
          "text": "Rotación forzada"
        },
        {
          "id": "D",
          "text": "Fractura espontánea durante la marcha normal"
        },
        {
          "id": "E",
          "text": "Accidentes de tránsito"
        }
      ],
      "correcta": "A",
      "explicacion": "La alternativa correcta es **A (Caídas a nivel)** porque la mayoría de las fracturas de cadera, especialmente en adultos mayores, se producen como resultado de caídas desde la propia altura. La fragilidad ósea asociada a la osteoporosis, común en este grupo etario, disminuye la resistencia del hueso, haciéndolo más susceptible a fracturas incluso con traumatismos de baja energía como una caída a nivel. La prevalencia de caídas a nivel es significativamente mayor que otras causas en la población de riesgo, según datos epidemiológicos y guías clínicas nacionales e internacionales. Aunque no hay una guía clínica MINSAL específica para fracturas de cadera, las guías sobre osteoporosis enfatizan la prevención de caídas como una medida clave.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.07.1.008"
    }
  ],
  "vignetteText": "Mujer de 78 años, autovalente con antecedente de osteoporosis e hipotiroidismo en tratamiento con levotiroxina y carbonato de calcio, acude a control en su consultorio de atención primaria. Su hija refiere que en el último año \"ha bajado de peso sin hacer dieta\" (pesaba 58 kg y actualmente pesa 52 kg; IMC 21.5 kg/m²), camina más lento arrastrando los pies y ya no sale a comprar porque \"se cansa enseguida\". En el examen físico: signos vitales normales. En la dinamometría manual registra una fuerza prensil de 13 kg en la mano dominante. En la prueba de velocidad de la marcha demora 7.2 segundos en recorrer 4 metros (0.55 m/s). En el cuestionario de Pfeiffer comete 1 error (normal). Su Índice de Barthel es de 95/100 y Lawton-Brody 6/8."
}
```

## PREGUNTAS REALES DEL BANCO (3; por código de la clase y por búsqueda "fragilidad, sarcopenia, valoracion, geriatrica, integral")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2025 · Pregunta 143 · confianza 0.65
Hombre de 78 años con pérdida de masa muscular, fuerza de prensión <16 kg y velocidad de marcha 0.7 m/s. ¿Cuál es el diagnóstico y la intervención más eficaz?
- A) Sarcopenia: ejercicio de resistencia progresivo + aporte proteico adecuado (1.2-1.5 g/kg/día)
- B) Desnutrición: solo suplementos nutricionales orales
- C) Depresión en adulto mayor: antidepresivos
- D) Osteoporosis: bifosfonatos
- E) Hipotiroidismo: levotiroxina
**Correcta: A**
Explicación del banco: Sarcopenia (masa + fuerza muscular reducidas + velocidad de marcha lenta): intervención más efectiva = ejercicio de resistencia progresivo + ingesta proteica aumentada. No hay fármaco aprobado de primera línea.

### [2] EUNACOM Diciembre 2024 · Pregunta 138 · confianza 0.85
Si aumenta la velocidad de envejecimiento en la población que pasara en temas de salud publica:
- A) Aumento de cobertura de adultos mayores en APS
- B) Aumento de personas con fragilidad
- C) Aumento en la variabilidad de morbilidad o mortalidad
- D) Ninguna de las anteriores es correcta
- E) Todas las anteriores son correctas
**Correcta: B**
Explicación del banco: La alternativa correcta es la **B** (Aumento de personas con fragilidad). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Aumento de cobertura de adultos mayores en AP, Aumento en la variabilidad de morbilidad o mo) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [3] EUNACOM Julio 2024 · Pregunta 152 · confianza 0.4
Una paciente de 70 años sufrió una caída a nivel hace un mes, que resultó en una fractura de tobillo derecho. Al examen físico, se encuentra un diámetro de pierna de 33 cm (valor normal: mayor a 31 cm), una prueba de unipedestación con un tiempo de 2 segundos (valor normal: mayor a 5 segundos) y una velocidad de marcha de 0.4 m/s (valor normal: mayor a 0.8 m/s). La densitometría ósea muestra un T-score de -1.9 en la columna lumbar y -2.1 en las caderas. ¿Cuál es el diagnóstico más probable?
- A) Osteoporosis
- B) Sarcopenia
- C) Osteosarcopenia
- D) Fragilidad
- E) Alto riesgo de caídas
**Correcta: C**
Explicación del banco: Osteopenia, Osteoporosis y Sarcopenia: Osteopenia: T-score menor o igual a -1. Osteoporosis: T-score menor o igual a -2.5 (no en este caso). Sarcopenia: Se diagnostica con base en atrofia muscular y/o debilidad muscular, evidenciada en este caso por alteraciones en la velocidad de la marcha y en el test de unipedestación.
