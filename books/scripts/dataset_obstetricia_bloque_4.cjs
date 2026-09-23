/**
 * TOMO 19: OBSTETRICIA & MEDICINA MATERNO-FETAL · BLOQUE 4
 * Parto Prematuro, Mecanismo del Parto, Puerperio & Urgencias Obstétricas (19.14 a 19.20)
 */

const { flowObstetricia } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "ob-14",
    "classId": "ob-14",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Parto Prematuro, Mecanismo del Parto, Puerperio & Urgencias Obstétricas",
    "topicLabel": "19.14",
    "title": "Rotura Prematura de Membranas (RPM), Latencia, Profilaxis Antibiótica y Corioamnionitis",
    "perfilCode": "3.01.1.005",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por Guía Perinatal MINSAL.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#36) · EUNACOM Julio 2023 (Q#15) · EUNACOM Diciembre 2022 (Q#11)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico con especuloscopía, esquema antibiótico de latencia y Criterios de Gibbs para corioamnionitis",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo de la Rotura Prematura de Membranas según Edad Gestacional",
    "diagramRows": [
      {
        "t": "Sospecha de RPM: Pérdida involuntaria de líquido claro con olor a cloro ('lavandina')",
        "s": "Especuloscopía estéril: visualizar salida de líquido amniótico por OCI (Maniobra de Valsalva / Tarnier). ¡NO HACER TACTO VAGINAL!",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Confirmación Diagnóstica",
        "al": "Evidente a la vista vs Duda diagnóstica",
        "ll": "Salida directa comprobada",
        "left": {
          "t": "RPM Confirmada",
          "s": "No requiere tests adicionales · Monitorizar bienestar fetal y descartar infección ovular",
          "type": "acc"
        },
        "rl": "Duda diagnóstica",
        "right": {
          "t": "Pruebas de Laboratorio",
          "s": "Cristalografía en hoja de helecho (+) · Test de Nitrazina (pH > 6.5) · AmniSure (PAMG-1) · Eco: oligohidramnios",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Evaluación de Infección Intraamniótica (Corioamnionitis)",
        "al": "¿Cumple Criterios de Gibbs?",
        "ll": "SÍ: Fiebre ≥ 38°C + Taquicardia materna/fetal, dolor uterino o fetidez",
        "left": {
          "t": "CORIOAMNIONITIS CLÍNICA",
          "s": "¡INTERRUPCIÓN INMEDIATA DEL EMBARAZO! · Antibioticoterapia EV inmediata: Ampicilina 2g c/6h + Gentamicina 5 mg/kg/día",
          "type": "crit"
        },
        "rl": "NO: Afebril, sin signos de infección ni sufrimiento fetal",
        "right": {
          "t": "Manejo según Edad Gestacional",
          "s": "≥ 34 semanas: Interrupción del parto · < 34 semanas: Antibióticos de latencia + Corticoides + Sulfato Mg (< 32s)",
          "type": "warn"
        }
      }
    ],
    "contexto": "La Rotura Prematura de Membranas (RPM) se define como la pérdida de continuidad de las membranas ovulares con salida de líquido amniótico antes del inicio del trabajo de parto. Se presenta en el 10% de los embarazos de término y en un tercio de los nacimientos pretérmino. El pilar diagnóstico esencial y pregunta fija de examen es que el diagnóstico se realiza mediante especuloscopía estéril y NUNCA con tacto vaginal digital (este último acorta drásticamente el período de latencia y dispara el riesgo de corioamnionitis). El manejo depende estrictamente de la edad gestacional (corte clave a las 34 semanas) y de la presencia o ausencia de infección intraamniótica clínica (criterios de Gibbs).",
    "contentSections": [
      {
        "subhead": "1. Diagnóstico Clínico y Métodos Confirmatorios",
        "paragraphs": [
          "• <strong>Clínica:</strong> La paciente relata la salida brusca o intermitente de abundante líquido transparente, tibio, con <strong>olor característico a hipoclorito de sodio ('cloro' o 'semen')</strong> por genitales externos.",
          "• <strong>Especuloscopía Estéril (Estándar de Oro Clínico):</strong> Visualización directa de la salida de líquido amniótico por el orificio cervical externo espontáneamente o tras maniobras de aumento de presión intratorácica o intraabdominal (<strong>maniobra de Valsalva</strong>) o al empujar la presentación fetal hacia arriba (<strong>maniobra de Tarnier</strong>).",
          "• <strong>¡PROHIBICIÓN DEL TACTO VAGINAL DIGITAL!:</strong> Está contraindicado realizar tacto vaginal digital ante la sospecha de RPM sin trabajo de parto activo, debido a que arrastra microorganismos de la flora vaginal al canal cervical, reduce a la mitad el tiempo de latencia y multiplica por cuatro la tasa de infección intraamniótica y neonatal.",
          "• <strong>Pruebas Auxiliares de Laboratorio (en caso de duda):</strong>",
          "  - <strong>Test de Cristalización (en hoja de helecho):</strong> Se toma muestra de líquido del fondo de saco posterior y se deja secar en portaobjetos al aire. Al microscopio se observa una cristalización arboriforme en hojas de helecho por el alto contenido de sales de sodio y mucina del líquido amniótico (sensibilidad > 90%).",
          "  - <strong>Test de Nitrazina:</strong> Papel de nitrazina reactivo al pH. Las secreciones vaginales normales son ácidas (pH 3.8-4.5), mientras que el líquido amniótico es francamente básico (pH 7.0-7.5). El viraje del papel a color azul intenso (pH > 6.5) es sugerente de RPM (puede dar falsos positivos por semen, sangre, orina infectada o vaginosis bacteriana).",
          "  - <strong>Test Rápido de Biomarcadores (AmniSure / Actim PROM):</strong> Detecta microglobulina placentaria alfa-1 (PAMG-1) o IGFBP-1 en secreción vaginal. Sensibilidad y especificidad > 98-99%.",
          "  - <strong>Ecografía Obstétrica:</strong> Permite evaluar el índice de líquido amniótico (ILA) y bolsillo único mayor. El hallazgo de oligohidramnios apoya la sospecha pero no es diagnóstico por sí solo."
        ]
      },
      {
        "subhead": "2. Manejo según Edad Gestacional (Guía Perinatal MINSAL)",
        "paragraphs": [
          "• <strong>Gestación ≥ 34 Semanas:</strong>",
          "  - <strong>Conducta: INTERRUPCIÓN DEL EMBARAZO</strong>. A partir de las 34 semanas los riesgos de corioamnionitis, desprendimiento placentario y compresión de cordón superan con creces los riesgos de la prematuridad. Se procede a la inducción del parto (mediante oxitocina o misoprostol según score de Bishop). Si el parto no ocurre en < 12-18 horas o si la paciente es portadora de <em>Streptococcus agalactiae</em> (SGB) positivo o de estado desconocido, se inicia profilaxis con Penicilina o Ampicilina EV.",
          "• <strong>Gestación entre 24 y 33+6 Semanas (Manejo Conservador / Expectante):</strong>",
          "  - <strong>Hospitalización obligatoria en Unidad de ARO.</strong>",
          "  - <strong>Antibioticoterapia de Latencia (Obligatoria):</strong> Prolonga el período de latencia (tiempo libre de parto), reduce la tasa de corioamnionitis, hemorragia intraventricular y sepsis neonatal. Esquema recomendado por MINSAL / ACOG: <strong>Ampicilina 2g EV c/6h + Eritromicina 250 mg EV c/6h por 48 horas</strong>, seguido de <strong>Amoxicilina 500 mg c/8h oral + Eritromicina 333-500 mg c/8h oral (o Azitromicina 1g oral dosis única) hasta completar 7 días</strong> de terapia.",
          "  - <strong>Corticoides para Maduración Pulmonar Fetal:</strong> <strong>Betametasona 12 mg IM cada 24 horas por 2 dosis</strong> (o Dexametasona 6 mg IM cada 12 horas por 4 dosis) entre las 24 y 34 semanas para prevenir distress respiratorio, hemorragia intraventricular y enterocolitis necrotizante.",
          "  - <strong>Neuroprotección Fetal con Sulfato de Magnesio:</strong> Indicada si el parto es inminente en gestaciones <strong>menores a 32 semanas</strong> (bolo de 4-5 g en 30 min seguido de infusión de 1 g/h) para reducir parálisis cerebral.",
          "  - <strong>Tocolisis de Rescate:</strong> Solo se utiliza por un máximo de 48 horas para permitir completar el ciclo de corticoides de maduración pulmonar en pacientes con dinámica uterina asociada, NUNCA como mantenimiento prolongado."
        ]
      },
      {
        "subhead": "3. Infección Intraamniótica Clínica (Corioamnionitis) y Criterios de Gibbs",
        "paragraphs": [
          "• <strong>Definición y Criterios Diagnósticos de Gibbs:</strong> Presencia de <strong>Fiebre Materna (temperatura axilar ≥ 38.0°C en dos tomas o ≥ 38.5°C en una toma)</strong> asociada a <strong>DOS o MÁS</strong> de los siguientes criterios:",
          "  - <strong>1) Taquicardia materna (> 100 lpm).</strong>",
          "  - <strong>2) Taquicardia fetal sostenida (> 160 lpm).</strong>",
          "  - <strong>3) Hipersensibilidad o dolor a la palpación uterina.</strong>",
          "  - <strong>4) Líquido amniótico purulento o de olor fétido ('loquios fétidos').</strong>",
          "  - <strong>5) Leucocitosis materna (> 15.000 /mm³ con desviación izquierda).</strong>",
          "• <strong>Conducta Médica Inmediata ante Corioamnionitis (Pregunta Crítica EUNACOM):</strong>",
          "  - <strong>1) INTERRUPCIÓN INMEDIATA DEL EMBARAZO:</strong> La corioamnionitis es una <strong>contraindicación formal y absoluta para cualquier conducta expectante, tocolisis o uso de corticoides</strong>. El feto debe nacer de forma expedita (preferentemente vaginal mediante inducción rápida con oxitocina; la cesárea se reserva para distocias u obstáculo mecánico).",
          "  - <strong>2) Antibioticoterapia Endovenosa Inmediata de Amplio Espectro:</strong> Iniciar sin demora <strong>Ampicilina 2g EV c/6h + Gentamicina 5 mg/kg/día EV en dosis única diaria</strong>. Si se realiza cesárea, se añade <strong>Clindamicina (900 mg c/8h EV)</strong> o Metronidazol para cubrir anaerobios durante el acto quirúrgico. La terapia se mantiene hasta 48 horas afebril postparto."
        ]
      }
    ],
    "table": {
      "title": "Manejo Escalonado de la Rotura Prematura de Membranas según Edad Gestacional (MINSAL)",
      "headers": [
        "Edad Gestacional",
        "Objetivo Primario",
        "Corticoides",
        "Antibioticoterapia",
        "Momento de Interrupción"
      ],
      "rows": [
        [
          "< 24 semanas (Previable)",
          "Consejería familiar, riesgo de hipoplasia pulmonar y deformidades",
          "No indicados",
          "Discutir opciones; antibióticos si manejo expectante",
          "Según decisión informada de los padres y estado infeccioso"
        ],
        [
          "24 a 31+6 semanas",
          "Prolongar latencia y proteger órganos fetales (SNC y pulmón)",
          "Betametasona 12 mg IM c/24h x 2 dosis + Sulfato Mg",
          "Ampicilina + Eritromicina EV x 48h, luego Amoxi + Eritro oral hasta 7d",
          "Interrumpir a las 34 sem (o antes si hay corioamnionitis)"
        ],
        [
          "32 a 33+6 semanas",
          "Prolongar latencia y maduración pulmonar",
          "Betametasona 12 mg IM c/24h x 2 dosis",
          "Ampicilina + Eritromicina (esquema de latencia 7 días)",
          "Interrumpir a las 34 semanas cumplidas"
        ],
        [
          "≥ 34 semanas",
          "Evitar morbilidad infecciosa materno-fetal",
          "No indicados",
          "Profilaxis SGB intraparto (Penicilina o Ampicilina EV) si > 12-18h",
          "INTERRUPCIÓN INMEDIATA (inducción del parto)"
        ],
        [
          "Cualquier EG con Corioamnionitis",
          "Salvar la vida materna y tratar sepsis neonatal",
          "CONTRAINDICADOS",
          "Ampicilina 2g c/6h EV + Gentamicina 5 mg/kg EV (+ Clinda si cesárea)",
          "INTERRUPCIÓN INMEDIATA EXPEDITA (sin demora)"
        ]
      ]
    },
    "severityTable": {
      "title": "Criterios Diagnósticos de Gibbs para Infección Intraamniótica (Corioamnionitis)",
      "headers": [
        "Criterio Mayor Obligatorio",
        "Criterios Menores Adicionales (Se requieren ≥ 2)",
        "Implicancia Clínica y Pronóstica"
      ],
      "rows": [
        [
          "Fiebre Materna ≥ 38.0°C (medida en 2 ocasiones separadas por 1 hora) o ≥ 38.5°C única",
          "• Taquicardia materna (> 100 lpm)\n• Taquicardia fetal (> 160 lpm sostenida)\n• Dolor/sensibilidad uterina anormal\n• Líquido purulento o de olor fétido\n• Leucocitosis materna > 15.000 /mm³",
          "Confirma infección bacteriana invasiva del amnios y cavidad ovular -> Riesgo inminente de sepsis materna, bacteriemia, parálisis cerebral y muerte neonatal. Proscrita cualquier tocolisis."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolos Farmacológicos en Rotura Prematura de Membranas (MINSAL)",
      "headers": [
        "Fármaco / Esquema",
        "Dosis y Posología",
        "Objetivo Primario",
        "Contraindicaciones Formales"
      ],
      "rows": [
        [
          "Esquema de Latencia (Ampicilina + Eritromicina)",
          "Ampicilina 2g c/6h EV + Eritromicina 250 mg c/6h EV x 48h -> Amoxicilina 500 mg c/8h + Eritromicina 500 mg c/8h oral x 5d",
          "Prolonga la latencia y previene corioamnionitis y sepsis neonatal temprana",
          "Hipersensibilidad confirmada a betalactámicos o macrólidos."
        ],
        [
          "Betametasona (Maduración Pulmonar)",
          "12 mg por vía intramuscular cada 24 horas, por un total de 2 dosis",
          "Disminuye distress respiratorio (enfermedad de membrana hialina), HIV y ECN",
          "No aplicar después de las 34 semanas ni ante infección intraamniótica."
        ],
        [
          "Sulfato de Magnesio (Neuroprotección)",
          "Bolo de impregnación de 4 a 5 g EV en 30 minutos, seguido de infusión a 1 g/hora por 12-24h",
          "Reduce significativamente el riesgo de parálisis cerebral en fetos < 32 semanas",
          "Miastenia gravis, insuficiencia renal severa o bloqueo AV materno."
        ],
        [
          "Esquema Corioamnionitis (Ampicilina + Gentamicina)",
          "Ampicilina 2g c/6h EV + Gentamicina 5 mg/kg cada 24h EV (+ Clindamicina 900 mg c/8h si cesárea)",
          "Esterilización de bacteriemia materna y fetal intraparto",
          "Ninguna contraindicación; es tratamiento de urgencia vital."
        ]
      ]
    },
    "vignette": "Paciente de 30 semanas de gestación, primigesta, consulta en la urgencia obstétrica por pérdida repentina de abundante líquido transparente por vagina hace 4 horas, refiriendo 'olor a lavandina'. No refiere dolor ni contracciones. Al examen físico: T° 36.6°C, PA 115/70 mmHg, FC 78 lpm. Abdomen blando, útero relajado, no doloroso. El examen de especuloscopía estéril confirma acumulación de líquido claro en fondo de saco vaginal posterior que fluye al toser (Valsalva positivo). No se observa sangrado ni restos tisulares. En el monitor cardiofetal se auscultan LCF de 140 lpm reactivos y no hay dinámica uterina. El médico tratante descarta tacto vaginal y confirma el diagnóstico de RPM de pretérmino no complicada.",
    "explicacion": "Nos encontramos ante una Rotura Prematura de Membranas en una gestante de 30 semanas (pretérmino de 24 a 34 semanas) sin signos de infección intraamniótica ni trabajo de parto. El manejo estándar oficial consiste en hospitalización en Unidad de Alto Riesgo Obstétrico (ARO), indicación de reposo en cama, vigilancia clínica estricta de parámetros infecciosos maternos y fetales, inicio inmediato de corticoterapia para inducir maduración pulmonar fetal con Betametasona (12 mg IM cada 24 horas por 2 dosis) y el esquema de antibioticoterapia de latencia (Ampicilina más Eritromicina o Azitromicina durante 7 días) para prolongar el tiempo de latencia y prevenir la sepsis neonatal. Se programará la interrupción electiva a las 34 semanas de gestación si no surgen complicaciones antes.",
    "keyPoints": [
      "Diagnóstico de RPM: Especuloscopía estéril con maniobra de Valsalva o Tarnier.",
      "¡PROHIBIDO EL TACTO VAGINAL DIGITAL en sospecha de RPM sin trabajo de parto activo!",
      "Test confirmatorios en duda: Cristalografía en hoja de helecho, Nitrazina (pH > 6.5) y PAMG-1 (AmniSure).",
      "Manejo en ≥ 34 semanas: Interrupción del embarazo (inducción) + profilaxis SGB si indicada.",
      "Manejo en 24 a 33+6 semanas: Hospitalización en ARO, antibióticos de latencia x 7 días y corticoides (Betametasona).",
      "Neuroprotección con Sulfato de Magnesio: Obligatoria si el parto es inminente en gestaciones < 32 semanas.",
      "Criterios de Gibbs para Corioamnionitis: Fiebre materna ≥ 38°C + 2 criterios menores (taquicardia, dolor, fetidez, leucocitosis).",
      "Tratamiento de Corioamnionitis: Interrupción INMEDIATA expedita del embarazo + Ampicilina y Gentamicina EV."
    ],
    "questions": [
      {
        "stem": "Una gestante de 31 semanas consulta por pérdida de líquido claro por vagina hace 6 horas. La especuloscopía estéril confirma salida de líquido amniótico por el orificio cervical externo. Signos vitales: T° 36.8°C, PA 110/70 mmHg, FC 76 lpm. El feto presenta una FCF de 145 lpm con variabilidad conservada y no hay dinámica uterina ni dolor a la palpación del fondo uterino. ¿Cuál es la conducta médica más apropiada a seguir?",
        "options": [
          {
            "id": "A",
            "text": "Realizar tacto vaginal para evaluar dilatación cervical e inducir el parto de inmediato con oxitocina"
          },
          {
            "id": "B",
            "text": "Hospitalizar en ARO, administrar Betametasona intramuscular (2 dosis) y esquema de antibióticos de latencia (Ampicilina + Eritromicina)"
          },
          {
            "id": "C",
            "text": "Manejo ambulatorio con reposo en cama y control ecográfico en 2 semanas"
          },
          {
            "id": "D",
            "text": "Programar cesárea de urgencia en las próximas 2 horas por riesgo de compresión de cordón"
          },
          {
            "id": "E",
            "text": "Iniciar tocolisis continua con nifedipino oral durante 14 días"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. En < 34 semanas sin infección el manejo es conservador; el tacto vaginal arrastra gérmenes y la inducción prematura expone al feto a morbimortalidad severa.\nB) Correcta. En una RPM pretérmino entre 24 y 34 semanas sin signos de infección ovular, la conducta estándar recomendada por el MINSAL es el manejo expectante en una Unidad de ARO. Esto incluye la administración de Betametasona (12 mg IM c/24h x 2 dosis) para acelerar la maduración pulmonar fetal y reducir hemorragia intraventricular, y el esquema de antibioticoterapia de latencia (Ampicilina EV + Eritromicina EV por 48 horas, seguido de Amoxicilina + Eritromicina/Azitromicina oral hasta completar 7 días) para prolongar el tiempo de latencia libre de parto y disminuir el riesgo de infección neonatal.\nC) Incorrecta. La RPM pretérmino exige hospitalización estricta.\nD) Incorrecta. La cesárea no está indicada de urgencia en ausencia de sufrimiento fetal o corioamnionitis.\nE) Incorrecta. La tocolisis prolongada no mejora los resultados perinatales y está contraindicada.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.005"
      },
      {
        "stem": "Una primigesta de 30 semanas hospitalizada hace 3 días por rotura prematura de membranas en manejo conservador presenta súbitamente fiebre de 38.6°C, calofríos y taquicardia materna de 115 lpm. Al examen obstétrico: el útero está hipertónico, tenso y muy sensible al menor contacto. A la especuloscopía fluye líquido amniótico francamente purulento con olor putrefacto. El monitor fetal muestra taquicardia fetal sostenida a 175 lpm con variabilidad mínima. El hemograma confirma leucocitosis de 19.500 /mm³ con 12% de baciliformes. ¿Cuál es la conducta médica inmediata e impostergable?",
        "options": [
          {
            "id": "A",
            "text": "Administrar antipiréticos y tocolíticos para frenar las contracciones y esperar a las 34 semanas"
          },
          {
            "id": "B",
            "text": "Iniciar antibioticoterapia endovenosa con Ampicilina más Gentamicina y proceder a la interrupción INMEDIATA del embarazo"
          },
          {
            "id": "C",
            "text": "Administrar un segundo ciclo de betametasona y esperar 48 horas para asegurar la maduración pulmonar"
          },
          {
            "id": "D",
            "text": "Realizar una amniocentesis diagnóstica para cultivo y esperar el resultado en 72 horas"
          },
          {
            "id": "E",
            "text": "Indicar infusión de sulfato de magnesio y mantener conducta expectante"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La tocolisis en corioamnionitis perpetúa un foco infeccioso que puede costar la vida materna y fetal por shock séptico.\nB) Correcta. La paciente cumple estrictamente todos los criterios de Gibbs para Corioamnionitis Clínica (fiebre materna alta, taquicardia materna y fetal, dolor a la palpación uterina, líquido amniótico purulento/fétido y leucocitosis con desviación izquierda). La corioamnionitis es una EMERGENCIA OBSTÉTRICA que contraindica cualquier conducta expectante o retraso. La conducta obligatoria es la hospitalización en sala de partos/quirófano, inicio inmediato de antibioticoterapia EV de amplio espectro (Ampicilina 2g c/6h EV + Gentamicina 5 mg/kg/día EV) y la INTERRUPCIÓN INMEDIATA del embarazo por la vía más expedita (habitualmente inducción oxitócica si el parto es rápido, o cesárea si hay distocia o sufrimiento fetal severo).\nC) Incorrecta. Los corticoides están contraindicados ante infección intraamniótica manifiesta.\nD) Incorrecta. Esperar cultivos ante un diagnóstico clínico evidente de sepsis ovular es una mala praxis letal.\nE) Incorrecta. La conducta expectante está proscrita ante corioamnionitis.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.005"
      },
      {
        "stem": "Una gestante de 36 semanas consulta por pérdida abundante de líquido claro por genitales hace 8 horas. Al examen con espéculo estéril se observa cuello borrado en un 50% con 2 cm de dilatación y abundante salida de líquido amniótico claro por el orificio cervical. La paciente se encuentra afebril, con signos vitales normales y monitoreo fetal reactivo sin contracciones uterinas dolorosas regulares. ¿Cuál es la conducta indicada según las guías clínicas del MINSAL?",
        "options": [
          {
            "id": "A",
            "text": "Inducir el parto de inmediato con oxitocina o prostaglandinas"
          },
          {
            "id": "B",
            "text": "Administrar betametasona intramuscular y mantener reposo por 1 semana"
          },
          {
            "id": "C",
            "text": "Indicar antibióticos de latencia por 7 días y dar el alta domiciliaria"
          },
          {
            "id": "D",
            "text": "Indicar tocolisis con nifedipino oral para evitar el parto prematuro"
          },
          {
            "id": "E",
            "text": "Programar cesárea electiva para la semana 39"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. En una paciente con Rotura Prematura de Membranas a partir de las 34 semanas de gestación (en este caso 36 semanas), la conducta consensuada oficial por el MINSAL y la FIGO es la INTERRUPCIÓN INMEDIATA DEL EMBARAZO mediante inducción del parto (mediante oxitocina o maduración previa con misoprostol si el Bishop es desfavorable). A esta edad gestacional los riesgos infecciosos materno-fetales superan a los riesgos de la prematuridad tardía.\nB) Incorrecta. Los corticoides no están indicados en mayores de 34 semanas en el contexto de RPM.\nC) Incorrecta. Los antibióticos de latencia se usan en < 34 semanas; en ≥ 34 semanas solo se aplica profilaxis contra SGB si el cultivo es positivo o la latencia supera las 12-18 horas.\nD) Incorrecta. La tocolisis está formalmente contraindicada en ≥ 34 semanas.\nE) Incorrecta. No se puede esperar semanas con membranas rotas por el altísimo riesgo de corioamnionitis.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.005"
      },
      {
        "stem": "¿Cuál de las siguientes maniobras o exámenes está FORMALMENTE CONTRAINDICADO como método diagnóstico inicial en una paciente con sospecha de rotura prematura de membranas que no se encuentra en trabajo de parto activo?",
        "options": [
          {
            "id": "A",
            "text": "Especuloscopía estéril con maniobra de Valsalva"
          },
          {
            "id": "B",
            "text": "Tacto vaginal digital"
          },
          {
            "id": "C",
            "text": "Test de cristalización en hoja de helecho"
          },
          {
            "id": "D",
            "text": "Determinación de pH con papel de nitrazina"
          },
          {
            "id": "E",
            "text": "Detección de alfa-microglobulina-1 placentaria (PAMG-1)"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La especuloscopía estéril es el estándar diagnóstico de elección.\nB) Correcta. El tacto vaginal digital está terminantemente contraindicado en la sospecha de RPM sin trabajo de parto evidente, ya que introduce bacterias patógenas desde el vestíbulo y vagina profunda hacia el canal endocervical y la cavidad amniótica, reduciendo significativamente el tiempo de latencia y multiplicando por 3 a 5 veces el riesgo de infección intraamniótica (corioamnionitis) y sepsis neonatal temprana.\nC) Incorrecta. Es una prueba confirmatoria válida y segura.\nD) Incorrecta. El test de nitrazina es una prueba útil y segura.\nE) Incorrecta. El test AmniSure es altamente específico y no invasivo.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.005"
      }
    ]
  },
  {
    "id": "ob-15",
    "classId": "ob-15",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Parto Prematuro, Mecanismo del Parto, Puerperio & Urgencias Obstétricas",
    "topicLabel": "19.15",
    "title": "Síndrome de Parto Prematuro: Amenaza de Parto Prematuro (APP), Tocolíticos, Maduración Pulmonar y Neuroprotección",
    "perfilCode": "3.01.1.006",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "GES N° 21: Prevención del Parto Prematuro (en población de riesgo con cérvix corto).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#37) · EUNACOM Julio 2023 (Q#17) · EUNACOM Diciembre 2022 (Q#10)",
    "frecuencia": "Máxima rentabilidad · Longitud cervical < 25 mm por eco transvaginal, Nifedipino tocolítico, Betametasona y Sulfato de Magnesio",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo de la Amenaza de Parto Prematuro (APP)",
    "diagramRows": [
      {
        "t": "Gestante entre 24 y 34 semanas con Contracciones Uterinas Dolorosas Frecuentes",
        "s": "Monitoreo tocodinamométrico (≥ 4 contracciones en 20-30 min) + Cervicometría transvaginal",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Evaluación de Modificaciones Cervicales (Cervicometría)",
        "al": "Longitud Cervical < 25 mm vs Longitud ≥ 25 mm",
        "ll": "Cérvix Corto (< 25 mm) o Dilatación ≥ 2 cm",
        "left": {
          "t": "AMENAZA DE PARTO PREMATURO (APP) CONFIRMADA",
          "s": "Hospitalizar en ARO · Instalar Tocolisis (Nifedipino) + Corticoides (Betametasona) + Sulfato Mg si < 32 sem",
          "type": "crit"
        },
        "rl": "Cérvix Largo (≥ 25 mm) sin Dilatación",
        "right": {
          "t": "Bajo Riesgo de Parto Prematuro (< 1-2%)",
          "s": "Fibronectina fetal (-) si disponible · Observación 2-4 horas · Si cede dinámica: alta a domicilio",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "Esquema Terapéutico en APP Confirmada",
        "al": "Pilares Farmacológicos Simultáneos",
        "ll": "1) Freno Uterino + Maduración Pulmonar",
        "left": {
          "t": "Nifedipino oral (20mg inicial, 10-20mg c/6-8h) + Betametasona 12mg IM c/24h x 2d",
          "s": "Objetivo tocolítico: frenar dinámica por 48 horas para completar efecto del corticoide",
          "type": "warn"
        },
        "rl": "2) Neuroprotección SNC (< 32 sem) + Profilaxis SGB",
        "right": {
          "t": "Sulfato de Magnesio EV (Bolo 4-5g + infusión 1g/h) + Penicilina G EV intraparto",
          "s": "Reduce parálisis cerebral infantil en prematuros extremos y previene sepsis neonatal por SGB",
          "type": "acc"
        }
      }
    ],
    "contexto": "El Síndrome de Parto Prematuro (nacimiento entre las 22+0 y las 36+6 semanas de gestación) es la principal causa de morbimortalidad neonatal, secuelas neurológicas a largo plazo y parálisis cerebral infantil en Chile. La diferenciación diagnóstica clave radica en distinguir las contracciones fisiológicas de Braxton Hicks de una verdadera Amenaza de Parto Prematuro (APP) mediante la medición ecográfica transvaginal de la longitud cervical (cervicometría transvaginal: corte crítico < 25 mm). El manejo integral del parto prematuro involucra cuatro intervenciones farmacológicas determinantes: 1) Tocolisis aguda con Nifedipino; 2) Corticoterapia antenatal con Betametasona; 3) Neuroprotección con Sulfato de Magnesio si es < 32 semanas; y 4) Quimioprofilaxis intraparto contra Streptococcus agalactiae.",
    "contentSections": [
      {
        "subhead": "1. Definiciones, Factores de Riesgo y Cervicometría",
        "paragraphs": [
          "• <strong>Definiciones:</strong>",
          "  - <strong>Parto Prematuro:</strong> Nacimiento ocurrido entre las 22+0 y 36+6 semanas de gestación (peso ≥ 500 g).",
          "  - <strong>Amenaza de Parto Prematuro (APP):</strong> Presencia de <strong>contracciones uterinas dolorosas y frecuentes</strong> (≥ 1 contracción cada 10 minutos o ≥ 4 en 20-30 minutos) asociadas a <strong>modificaciones cervicales progresivas</strong> (borramiento > 50% y dilatación cervical entre 1 y 3 cm) entre las 22 y 34 semanas.",
          "  - <strong>Trabajo de Parto Prematuro (TPP):</strong> Dinámica uterina regular con <strong>dilatación cervical ≥ 4 cm</strong> (irreversible, parto inminente).",
          "• <strong>Factores de Riesgo Mayores:</strong> <strong>Antecedente de parto prematuro previo espontáneo</strong> (multiplica el riesgo por 2 a 4), embarazo múltiple, longitud cervical corta pesquisada en la ecografía de 20-24 semanas, sobredistensión uterina (polihidramnios), infecciones maternas (ITU, corioamnionitis subclínica, vaginosis) y tabaquismo.",
          "• <strong>Cervicometría Transvaginal (Estándar de Oro Diagnóstico):</strong>",
          "  - Se mide la distancia lineal entre el OCI y el OCE por ecografía transvaginal con vejiga vacía.",
          "  - <strong>Longitud Cervical < 25 mm (entre 20 y 24 semanas):</strong> Define 'cérvix corto' y constituye el factor predictivo independiente más potente de parto prematuro espontáneo.",
          "  - <strong>Prevención Primaria GES:</strong> Gestantes con antecedentes de parto pretérmino o con cérvix corto (< 25 mm) en la ecografía de rutina 20-24 semanas deben recibir <strong>Progesterona micronizada vaginal (200 mg cada noche)</strong> hasta las 36 semanas, lo que reduce el riesgo de parto prematuro en un 40-50%."
        ]
      },
      {
        "subhead": "2. Tocolisis Aguda: Fármacos y Contraindicaciones",
        "paragraphs": [
          "• <strong>Objetivo Real de la Tocolisis:</strong> La tocolisis <strong>NO previene el parto pretérmino a largo plazo</strong> ni prolonga el embarazo hasta el término. Su único objetivo terapéutico demostrado es <strong>frenar la dinámica uterina durante 48 horas</strong> para permitir:",
          "  - 1) La administración completa del ciclo de corticoides para maduración pulmonar fetal.",
          "  - 2) La administración de Sulfato de Magnesio para neuroprotección fetal si la EG es < 32 semanas.",
          "  - 3) El traslado oportuno de la paciente en una ambulancia medicalizada hacia un centro hospitalario terciario con Unidad de Cuidados Intensivos Neonatales (UCIN).",
          "• <strong>Fármaco Tocolítico de Primera Línea en Chile:</strong> <strong>NIFEDIPINO oral</strong> (Bloqueador de canales de calcio).",
          "  - Posología: Dosis de carga de 20 mg vía oral, repetible a los 20-30 minutos si persisten las contracciones (máximo 40 mg en la primera hora). Luego dosis de mantenimiento de 10 a 20 mg cada 6 a 8 horas vía oral por un máximo estricto de 48 horas.",
          "  - Efectos adversos maternos: Hipotensión arterial refleja, cefalea pulsátil, rubor facial y taquicardia.",
          "• <strong>Fármacos de Segunda Línea y Alternativas:</strong>",
          "  - <strong>Atosiban:</strong> Antagonista específico de los receptores de oxitocina por infusión endovenosa continua. Excelente perfil de seguridad materna pero de alto costo.",
          "  - <strong>Indometacina:</strong> Inhibidor de prostaglandinas (AINE). Solo utilizable en gestaciones <strong>menores a 32 semanas y por menos de 48 horas</strong>. Contraindicado en > 32 semanas por riesgo de <strong>cierre prematuro del ductus arterioso fetal</strong> e hipertensión pulmonar neonatal, así como oligohidramnios.",
          "  - <strong>Betamiméticos (Fenoterol):</strong> Prácticamente en desuso por graves riesgos maternos de edema pulmonar agudo, taquicardia e hiperglicemia.",
          "• <strong>CONTRAINDICACIONES ABSOLUTAS DE LA TOCOLISIS (Pregunta Fija EUNACOM):</strong>",
          "  - <strong>1) Infección Intraamniótica Clínica (Corioamnionitis).</strong>",
          "  - <strong>2) Desprendimiento Prematuro de Placenta (DPPNI) o hemorragia masiva.</strong>",
          "  - <strong>3) Muerte fetal intrauterina o malformación fetal incompatible con la vida.</strong>",
          "  - <strong>4) Compromiso severo de la salud fetal (Monitoreo Fetal Categoría III / Sufrimiento fetal agudo).</strong>",
          "  - <strong>5) Estados hipertensivos descompensados (Eclampsia / Síndrome HELLP).</strong>",
          "  - <strong>6) Dilatación cervical avanzada (≥ 4-5 cm) en trabajo de parto franco.</strong>"
        ]
      },
      {
        "subhead": "3. Maduración Pulmonar Fetal con Corticoides Antenatales",
        "paragraphs": [
          "• <strong>Indicación:</strong> Toda paciente con riesgo inminente de parto prematuro entre las <strong>24+0 y las 34+0 semanas de gestación</strong> (incluso en RPM o preeclampsia programada).",
          "• <strong>Beneficios Clínicos Demostrados:</strong> Estimula la síntesis y liberación de surfactante pulmonar por los neumocitos tipo II. Reduce en un 50% la incidencia del <strong>Síndrome de Dificultad Respiratoria (Enfermedad de Membrana Hialina)</strong>, disminuye la <strong>Hemorragia Intraventricular</strong>, reduce la <strong>Enterocolitis Necrotizante (ECN)</strong> y la mortalidad neonatal global.",
          "• <strong>Esquemas Oficiales Equivalentes (MINSAL / OMS):</strong>",
          "  - <strong>Betametasona:</strong> <strong>12 mg por vía intramuscular cada 24 horas, por un total de 2 dosis</strong> (Esquema de elección).",
          "  - <strong>Dexametasona:</strong> <strong>6 mg por vía intramuscular cada 12 horas, por un total de 4 dosis</strong>.",
          "• El efecto protector máximo se alcanza entre las 24 horas y los 7 días posteriores a la primera dosis."
        ]
      },
      {
        "subhead": "4. Neuroprotección Fetal con Sulfato de Magnesio y Profilaxis de SGB",
        "paragraphs": [
          "• <strong>Neuroprotección con Sulfato de Magnesio (MgSO₄):</strong>",
          "  - Indicación: Gestaciones <strong>menores a 32 semanas</strong> con parto prematuro inminente (planificado o en evolución dentro de las próximas 24 horas).",
          "  - Mecanismo: Bloqueo de los receptores NMDA excitatorios de glutamato, estabilización de membranas neuronales y aumento del flujo cerebral fetal. <strong>Reduce en un 30-40% la tasa de Parálisis Cerebral Infantil</strong> y disfunción motora gruesa.",
          "  - Posología: Bolo de impregnación de <strong>4 a 5 g EV en 30 minutos</strong>, seguido de una infusión de mantenimiento de <strong>1 g/hora EV</strong> hasta el nacimiento (o un máximo de 24 horas).",
          "• <strong>Quimioprofilaxis Intraparto de Infección Neonatal por Streptococcus agalactiae (SGB):</strong>",
          "  - Todo parto prematuro (< 37 semanas) con cultivo SGB positivo o desconocido DEBE recibir profilaxis antibiótica intraparto.",
          "  - Fármaco de elección: <strong>Penicilina G sódica (5 millones UI EV de inicio, luego 2.5 a 3 millones UI c/4h EV hasta el parto)</strong> o <strong>Ampicilina (2g EV de carga, luego 1g c/4h EV)</strong>. Si hay alergia sin anafilaxia: Cefazolina (2g EV inicial, luego 1g c/8h). Si hay anafilaxia severa: Clindamicina (si cepa es sensible) o Vancomicina."
        ]
      }
    ],
    "table": {
      "title": "Intervenciones Farmacológicas Fundamentales en Amenaza de Parto Prematuro (MINSAL)",
      "headers": [
        "Intervención",
        "Fármaco y Dosis",
        "Población Diana",
        "Beneficio Clínico Principal"
      ],
      "rows": [
        [
          "Tocolisis Aguda",
          "Nifedipino oral: 20 mg inicial, luego 10-20 mg c/6-8h x 48h máx",
          "24 a 34 semanas con dinámica activa y cérvix modificado",
          "Frena dinámica 48h para permitir acción de corticoides y traslado"
        ],
        [
          "Maduración Pulmonar",
          "Betametasona 12 mg IM c/24h x 2 dosis (o Dexa 6 mg c/12h x 4 dosis)",
          "24 a 34 semanas con riesgo de parto pretérmino",
          "Reduce enf. de membrana hialina, hemorragia intraventricular y muerte"
        ],
        [
          "Neuroprotección Fetal",
          "Sulfato de Magnesio: bolo 4-5 g EV en 30 min + infusión 1 g/h",
          "Menores de 32 semanas con parto inminente en < 24h",
          "Reduce significativamente parálisis cerebral y disfunción motora"
        ],
        [
          "Profilaxis SGB",
          "Penicilina G 5 mill UI EV inicial + 2.5 mill c/4h (o Ampicilina)",
          "Todo parto prematuro (< 37 sem) con SGB (+) o desconocido",
          "Previene sepsis neonatal precoz, meningitis y neumonía por SGB"
        ],
        [
          "Prevención Primaria",
          "Progesterona micronizada vaginal 200 mg/noche hasta 36 sem",
          "Asintomáticas con cuello < 25 mm a las 20-24 sem o APP previa",
          "Reduce parto prematuro espontáneo en un 40 a 50% (GES)"
        ]
      ]
    },
    "severityTable": {
      "title": "Contraindicaciones Formales Absolutas de la Tocolisis en Parto Prematuro",
      "headers": [
        "Situación Clínica de Alarma",
        "Riesgo Materno-Fetal de Frenar el Parto",
        "Conducta Obstétrica Mandatoria"
      ],
      "rows": [
        [
          "Corioamnionitis Clínica (Criterios de Gibbs)",
          "Sepsis materna y choque séptico inminente con asfixia neonatal intraútero",
          "PROHIBIDA LA TOCOLISIS -> Antibioticoterapia EV inmediata y finalización del parto"
        ],
        [
          "Desprendimiento Prematuro de Placenta (DPPNI)",
          "Exanguinación fetal, muerte intrauterina y CID materna por consumo masivo",
          "PROHIBIDA LA TOCOLISIS -> Cesárea de urgencia inmediata"
        ],
        [
          "Preeclampsia con Criterios de Severidad / Eclampsia",
          "Deterioro multiorgánico materno, convulsiones y hemorragia cerebral",
          "PROHIBIDA LA TOCOLISIS -> Estabilización con Sulfato de Mg y resolución del parto"
        ],
        [
          "Monitoreo Fetal Sospechoso / Patológico (Categoría III)",
          "Hipoxia fetal severa irreversible y acidemia metabólica profunda",
          "PROHIBIDA LA TOCOLISIS -> Extracción fetal expedita por vía cesárea"
        ],
        [
          "Dilatación Cervical Avanzada (≥ 4-5 cm)",
          "Fracaso tocolítico casi universal e inminencia de expulsión",
          "Suspender tocolisis, preparar atención de recién nacido prematuro en pabellón"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Comparación Farmacológica de Agentes Tocolíticos (MINSAL)",
      "headers": [
        "Agente",
        "Mecanismo",
        "Vía y Posología",
        "Contraindicaciones y Efectos Adversos"
      ],
      "rows": [
        [
          "Nifedipino (1.ª Línea)",
          "Bloqueador de canales de calcio tipo L miometriales",
          "Oral: 20 mg de inicio, repetir a los 30 min SOS; luego 10-20 mg c/6-8h por 48h",
          "Hipotensión materna sintomática, cardiopatía materna con disfunción ventricular."
        ],
        [
          "Atosiban (Alternativa)",
          "Antagonista competitivo de receptores de oxitocina",
          "EV: Bolo inicial 6.75 mg en 1 min -> infusión 300 mcg/min x 3h -> 100 mcg/min",
          "Hipersensibilidad. Muy seguro pero de disponibilidad restringida y alto costo."
        ],
        [
          "Indometacina",
          "Inhibidor de ciclooxigenasa (síntesis de PGs)",
          "Oral/Rectal: 100 mg inicial, luego 25 mg c/6h por máximo 48h (solo si EG < 32 sem)",
          "¡CONTRAINDICADO EN > 32 SEM! (Causa cierre prematuro del ductus y oligohidramnios)."
        ],
        [
          "Fenoterol (Betamimético)",
          "Agonista beta-2 adrenérgico miometrial",
          "EV en infusión continua (prácticamente en desuso clínico)",
          "Taquicardia severa, arritmias, edema agudo de pulmón materno e hiperglicemia."
        ]
      ]
    },
    "vignette": "Gestante de 29 semanas, primigesta, sin antecedentes mórbidos, consulta en urgencias por dolor tipo cólico menstrual en hipogastrio de 3 horas de evolución. Al examen físico: signos vitales normales (PA 110/68 mmHg, FC 74 lpm, afebril). En el tocodinamómetro externo se constatan 4 contracciones uterinas dolorosas en 20 minutos. Se efectúa cervicometría por ecografía transvaginal que revela una longitud cervical de 18 mm, con borramiento del 60% y dilatación del orificio cervical interno de 1.5 cm. La paciente no presenta pérdida de líquido ni metrorragia, y el monitoreo fetal confirma FCF de 142 lpm reactiva sin desaceleraciones.",
    "explicacion": "El hallazgo de dinámica uterina dolorosa y frecuente asociada a un cérvix corto de 18 mm (< 25 mm) y dilatación cervical menor a 3 cm entre las 24 y 34 semanas configura el diagnóstico certero de Amenaza de Parto Prematuro (APP). Al encontrarse la paciente afebril y sin ninguna de las contraindicaciones de tocolisis (feto reactivo, sin desprendimiento ni eclampsia), la conducta indicada es la hospitalización inmediata en ARO y la instauración simultánea de: 1) Tocolisis aguda con Nifedipino oral (20 mg de inicio) durante 48 horas para frenar las contracciones; 2) Corticoterapia para inducir maduración pulmonar con Betametasona intramuscular (12 mg cada 24 horas por 2 dosis); y 3) Neuroprotección fetal con Sulfato de Magnesio endovenoso (bolo de 4-5 g en 30 minutos seguido de 1 g/h) debido a que la gestación es menor a 32 semanas.",
    "keyPoints": [
      "Definición de APP: Dinámica uterina frecuente (≥ 4 en 20 min) + modificaciones cervicales entre 22 y 34 semanas.",
      "Cervicometría transvaginal: Corte de < 25 mm define cérvix corto y alto riesgo de parto prematuro.",
      "Prevención GES con Progesterona micronizada vaginal (200 mg/noche) ante cérvix < 25 mm o APP previa.",
      "Tocolítico de primera línea: Nifedipino oral por un máximo de 48 horas (su único fin es permitir el efecto corticoide).",
      "Maduración pulmonar: Betametasona 12 mg IM c/24h x 2 dosis entre 24 y 34 semanas.",
      "Neuroprotección con Sulfato de Magnesio: Obligatoria ante parto inminente en gestaciones < 32 semanas.",
      "Indometacina: Solo permitida en < 32 semanas por < 48 horas (en > 32 sem cierra precozmente el ductus arterioso).",
      "Contraindicaciones de tocolisis: Corioamnionitis, DPPNI, eclampsia, muerte fetal y sufrimiento fetal agudo.",
      "Profilaxis intraparto de SGB: Penicilina G o Ampicilina EV en todo prematuro con cultivo positivo o desconocido."
    ],
    "questions": [
      {
        "stem": "Una primigesta de 30 semanas acude a la urgencia obstétrica por contracciones uterinas dolorosas cada 5 minutos de 2 horas de evolución. Al examen: T° 36.7°C, PA 112/68 mmHg, FC 76 lpm. En la ecografía transvaginal se mide una longitud cervical de 16 mm con embudización del OCI y dilatación de 2 cm. El registro cardiofetal basal es de 140 lpm reactivo. ¿Cuál es la conducta médica integral de primera línea para esta paciente?",
        "options": [
          {
            "id": "A",
            "text": "Indicar reposo en domicilio y consumo abundante de líquidos orales"
          },
          {
            "id": "B",
            "text": "Hospitalizar en ARO, iniciar Nifedipino oral, administrar Betametasona intramuscular (12 mg cada 24 horas por 2 dosis) e infusión de Sulfato de Magnesio para neuroprotección fetal"
          },
          {
            "id": "C",
            "text": "Realizar cesárea de urgencia inmediata por riesgo inminente de parto en menos de 1 hora"
          },
          {
            "id": "D",
            "text": "Administrar Indometacina rectal durante 14 días y dar el alta hospitalaria"
          },
          {
            "id": "E",
            "text": "Realizar cerclaje cervical de emergencia de forma inmediata"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La paciente tiene un cuadro activo de APP con cérvix marcadamente acortado y dilatado; el manejo ambulatorio es una grave negligencia.\nB) Correcta. La presencia de dinámica uterina regular con cérvix corto de 16 mm (< 25 mm) a las 30 semanas de gestación confirma una Amenaza de Parto Prematuro. El manejo integral hospitalizado de primera línea incluye: 1) Tocolisis con Nifedipino oral durante 48 horas para frenar las contracciones; 2) Betametasona 12 mg IM c/24h x 2 dosis para inducir maduración pulmonar y reducir membrana hialina y hemorragia intraventricular; y 3) Sulfato de Magnesio EV para neuroprotección fetal (reducir parálisis cerebral) al tratarse de una gestación menor de 32 semanas.\nC) Incorrecta. La cesárea inmediata no está indicada en ausencia de sufrimiento fetal agudo o complicación catastrófica; debe intentarse la tocolisis para permitir la acción del corticoide.\nD) Incorrecta. La indometacina no se utiliza de mantención prolongada ni ambulatoria por sus graves efectos adversos sobre el feto (cierre del ductus y oligohidramnios).\nE) Incorrecta. El cerclaje de emergencia está contraindicado en presencia de contracciones uterinas activas francas.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.006"
      },
      {
        "stem": "¿En cuál de las siguientes situaciones clínicas está ABSOLUTAMENTE CONTRAINDICADO el uso de fármacos tocolíticos para frenar las contracciones uterinas?",
        "options": [
          {
            "id": "A",
            "text": "Embarazada de 28 semanas con contracciones uterinas dolorosas, cérvix de 20 mm y feto reactivo"
          },
          {
            "id": "B",
            "text": "Gestante de 31 semanas con dinámica uterina y antecedente de un parto prematuro anterior"
          },
          {
            "id": "C",
            "text": "Gestante de 29 semanas con sospecha clínica de Corioamnionitis (fiebre materna de 38.8°C, dolor uterino intenso y taquicardia fetal)"
          },
          {
            "id": "D",
            "text": "Embarazada de 33 semanas con embarazo gemelar bicorial y cuello borrado en un 50%"
          },
          {
            "id": "E",
            "text": "Embarazada de 30 semanas con infección urinaria baja en tratamiento con cefadroxilo y dinámica uterina"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Es la indicación típica de tocolisis para permitir la maduración pulmonar.\nB) Incorrecta. Situación clásica con indicación formal de freno uterino y corticoides.\nC) Correcta. La Corioamnionitis Clínica es una contraindicación formal y absoluta para cualquier terapia tocolítica. Intentar detener el parto en presencia de una infección ovular invasiva pone en riesgo inminente la vida de la madre (sepsis, shock séptico) y del feto (muerte intrauterina, asfixia, secuelas neurológicas severas). La conducta mandatoria es la interrupción inmediata del embarazo bajo cobertura antibiótica endovenosa de amplio espectro.\nD) Incorrecta. El embarazo gemelar con APP puede recibir tocolisis para completar corticoides.\nE) Incorrecta. La ITU puede desencadenar contracciones; mientras se trata el antibiótico, la tocolisis está indicada por 48 horas si hay APP.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.006"
      },
      {
        "stem": "Una paciente cursando un embarazo de 33 semanas consulta por contracciones uterinas. El médico de turno decide indicar un tocolítico. ¿Por qué razón farmacológica y fisiopatológica está formalmente desaconsejado utilizar Indometacina como tocolítico en esta paciente?",
        "options": [
          {
            "id": "A",
            "text": "Porque pierde completamente su efecto tocolítico después de la semana 30 de gestación"
          },
          {
            "id": "B",
            "text": "Porque en gestaciones mayores a 32 semanas induce el cierre prematuro del conducto arterioso fetal e hipertensión pulmonar neonatal"
          },
          {
            "id": "C",
            "text": "Porque produce hemorragia intraventricular en el 90% de los recién nacidos de tercer trimestre"
          },
          {
            "id": "D",
            "text": "Porque genera hiperkalemia materna refractaria y arritmias ventriculares letales"
          },
          {
            "id": "E",
            "text": "Porque estimula directamente la síntesis de surfactante pulmonar a dosis tóxicas"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El fármaco mantiene su acción antiprostaglandínica en cualquier edad gestacional.\nB) Correcta. La Indometacina es un potente inhibidor de la síntesis de prostaglandinas. En fetos mayores de 32 semanas de gestación, el ductus arterioso es altamente sensible a la privación de prostaglandinas E2, por lo que la administración de indometacina provoca el cierre intrauterino prematuro del conducto arterioso, sobrecarga del ventrículo derecho, insuficiencia cardíaca fetal e hipertensión pulmonar persistente neonatal severa. Además, reduce el flujo plasmático renal fetal causando oligohidramnios. Por estos motivos, su uso como tocolítico está estrictamente restringido a embarazos menores de 32 semanas y por lapsos no mayores a 48 horas.\nC) Incorrecta. La indometacina no aumenta la hemorragia intraventricular.\nD) Incorrecta. No causa hiperkalemia materna refractaria a dosis habituales.\nE) Incorrecta. No tiene ningún efecto tóxico sobre el surfactante.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.006"
      },
      {
        "stem": "¿Cuál es el principal beneficio clínico comprobado en ensayos clínicos aleatorizados y metaanálisis que justifica la administración de Sulfato de Magnesio antenatal en mujeres con amenaza de parto prematuro inminente antes de las 32 semanas de gestación?",
        "options": [
          {
            "id": "A",
            "text": "Acelerar la síntesis de surfactante y prevenir la enfermedad de membrana hialina"
          },
          {
            "id": "B",
            "text": "Reducir significativamente el riesgo de Parálisis Cerebral Infantil y disfunción motora severa en el recién nacido prematuro"
          },
          {
            "id": "C",
            "text": "Erradicar la colonización materna por Streptococcus agalactiae"
          },
          {
            "id": "D",
            "text": "Prevenir la enterocolitis necrotizante mediante vasodilatación mesentérica"
          },
          {
            "id": "E",
            "text": "Frenar de forma definitiva las contracciones uterinas hasta llegar al término"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La maduración pulmonar es función exclusiva de los corticoides (betametasona/dexametasona).\nB) Correcta. La administración de Sulfato de Magnesio por vía endovenosa a gestantes con parto prematuro inminente menor a 32 semanas actúa como neuroprotector fetal (bloqueando receptores NMDA y estabilizando el flujo cerebrovascular), demostrando de forma contundente en la literatura científica y en las guías del MINSAL una reducción estadísticamente significativa en la tasa de Parálisis Cerebral Infantil y en la pérdida de la función motora gruesa de los supervivientes.\nC) Incorrecta. La prevención de SGB se logra con antibióticos (Penicilina o Ampicilina).\nD) Incorrecta. La prevención de ECN se asocia a los corticoides y a la lactancia materna.\nE) Incorrecta. El sulfato de magnesio no se utiliza como tocolítico primario de mantenimiento.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.006"
      }
    ]
  },
  {
    "id": "ob-16",
    "classId": "ob-16",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Parto Prematuro, Mecanismo del Parto, Puerperio & Urgencias Obstétricas",
    "topicLabel": "19.16",
    "title": "Trabajo de Parto Normal, Mecanismos del Parto en Cefálica, Score de Bishop y Manejo Activo del Alumbramiento",
    "perfilCode": "3.01.1.007",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "GES N° 17: Parto Prematuro / Atención Integral del Parto Respetado (Chile Crece Contigo).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#34) · EUNACOM Julio 2023 (Q#13) · EUNACOM Julio 2022 (Q#19)",
    "frecuencia": "Alta rentabilidad · Fases del parto (fase activa desde 5 cm), componentes del Score de Bishop y regla de oro del Manejo Activo del Alumbramiento",
    "svg": null,
    "algoTitle": "Algoritmo de Evaluación de Inducción Cervical y Manejo Activo del Parto",
    "diagramRows": [
      {
        "t": "Paciente con Indicación Médica de Inducción del Parto",
        "s": "Evaluar condiciones cervicales mediante el Score de Bishop antes de cualquier decisión",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Puntuación del Score de Bishop",
        "al": "Cuello Desfavorable vs Cuello Favorable",
        "ll": "Score de Bishop ≤ 6 (Cuello Inmaduro / Desfavorable)",
        "left": {
          "t": "MADURACIÓN CERVICAL PREVIA",
          "s": "Misoprostol 25-50 mcg vaginal/oral c/4-6h o Balón de Cook / Foley transcervical · ¡No iniciar oxitocina con cuello inmaduro!",
          "type": "warn"
        },
        "rl": "Score de Bishop > 6 (Cuello Maduro / Favorable)",
        "right": {
          "t": "INDUCCIÓN / CONDUCCIÓN CON OXITOCINA",
          "s": "Infusión endovenosa continua escalonada de Oxitocina en bomba + Amniotomía precoz cuando esté indicada",
          "type": "acc"
        }
      },
      {
        "k": "split",
        "q": "Tercer Período del Parto: Alumbramiento",
        "al": "Conducta Preventiva Obligatoria de Hemorragia Postparto",
        "ll": "Manejo Activo del Alumbramiento (OBLIGATORIO)",
        "left": {
          "t": "1) Oxitocina 10 UI IM tras hombro anterior",
          "s": "2) Tracción suave y controlada del cordón con contracción + 3) Masaje uterino abdominal · Reduce hemorragia postparto en > 60%",
          "type": "crit"
        },
        "rl": "Manejo Expectante (Fisiológico)",
        "right": {
          "t": "NO recomendado de rutina",
          "s": "Mayor pérdida hemática, mayor duración del alumbramiento y mayor necesidad de transfusión sanguínea",
          "type": "warn"
        }
      }
    ],
    "contexto": "El conocimiento preciso de la fisiología del trabajo de parto normal, las fases de la dilatación, los tiempos del mecanismo de parto en presentación cefálica de vértice y la evaluación de la madurez cervical mediante el Score de Bishop son temas esenciales para la práctica clínica y el examen EUNACOM. Asimismo, el Manejo Activo del Tercer Período (Alumbramiento) representa la intervención preventiva más costo-efectiva de toda la obstetricia moderna para prevenir la hemorragia postparto por atonía uterina, reduciendo su incidencia en más de un 60%.",
    "contentSections": [
      {
        "subhead": "1. Fases del Parto y Períodos Clínicos",
        "paragraphs": [
          "• <strong>Primer Período: Borramiento y Dilatación:</strong>",
          "  - <strong>Fase Latente:</strong> Período caracterizado por contracciones irregulares que logran el borramiento y dilatación progresiva lenta hasta alcanzar los <strong>5 cm de dilatación</strong> (según consenso actual FIGO/OMS, antes se consideraban 4 cm). Puede durar hasta 20 horas en primigestas y 14 horas en multíparas sin considerarse anormal.",
          "  - <strong>Fase Activa:</strong> Comienza a partir de los <strong>5 cm de dilatación cervical</strong> con dinámica regular adecuada (3 a 5 contracciones en 10 minutos). La velocidad normal de dilatación es de al menos 1 cm/hora.",
          "• <strong>Segundo Período: Expulsivo:</strong> Transcurre desde la dilatación completa (10 cm) hasta la expulsión total del recién nacido. Duración máxima normal: 2 a 3 horas en primíparas (con anestesia peridural), y 1 a 2 horas en multíparas.",
          "• <strong>Tercer Período: Alumbramiento:</strong> Comprende desde el nacimiento del feto hasta la expulsión completa de la placenta y las membranas ovulares. Tiempo normal fisiológico < 30 minutos.",
          "• <strong>Cuarto Período: Postparto Inmediato (Primeras 2 horas):</strong> Período crítico de máxima vigilancia hemodinámica materna y retracción uterina (formación del 'globo de seguridad de Pinard')."
        ]
      },
      {
        "subhead": "2. Mecanismos del Parto en Presentación Cefálica de Vértice",
        "paragraphs": [
          "• Consta de una secuencia ordenada de seis movimientos pasivos que el feto realiza para franquear la pelvis materna:",
          "  - <strong>1) Acomodación al Estrecho Superior:</strong> Orientación del diámetro mayor cefálico (occipito-frontal de 12 cm) en uno de los diámetros oblicuos de la pelvis + <strong>Flexión de la cabeza</strong> (sustituye el diámetro por el suboccipito-bregmático de 9.5 cm).",
          "  - <strong>2) Descenso y Encajamiento:</strong> Progresión del diámetro biparietal a través del estrecho superior hasta alcanzar el plano de las espinas ciáticas (Estación 0 de Lee o III Plano de Hodge).",
          "  - <strong>3) Rotación Interna:</strong> La cabeza gira 45° (o 90° si partió posterior) dentro de la excavación pelviana para ubicar el occipucio debajo de la sínfisis púbica (variedad de posición <strong>Occípito-Púbica</strong>).",
          "  - <strong>4) Desprendimiento por Extensión (Deflexión):</strong> El occipucio hace punto de apoyo (hipomoclio) en el borde inferior de la sínfisis del pubis y la cabeza se extiende desprendiendo sucesivamente frente, ojos, nariz y mentón.",
          "  - <strong>5) Rotación Externa (Restitución):</strong> Una vez afuera, la cabeza rota espontáneamente 45° mirando hacia el mismo muslo materno que enfrentaba al inicio, orientándose perpendicularmente a los hombros.",
          "  - <strong>6) Expulsión de los Hombros y Cuerpo:</strong> Desprendimiento sucesivo del hombro anterior bajo el pubis, luego hombro posterior sobre el periné y salida rápida del resto del cuerpo."
        ]
      },
      {
        "subhead": "3. Score de Bishop: Evaluación de la Madurez Cervical",
        "paragraphs": [
          "• El Score de Bishop evalúa cinco parámetros en el tacto vaginal para determinar el éxito de la inducción del parto:",
          "  - <strong>1) Dilatación cervical (en cm).</strong>",
          "  - <strong>2) Borramiento cervical (en %).</strong>",
          "  - <strong>3) Altura de la presentación (Estación de Lee / Planos de Hodge).</strong>",
          "  - <strong>4) Consistencia del cuello (Firme, Media, Blanda).</strong>",
          "  - <strong>5) Posición del cuello (Posterior, Media, Anterior).</strong>",
          "• <strong>Interpretación Terapéutica Clave:</strong>",
          "  - <strong>Bishop > 6 puntos (Cuello Favorable o 'Maduro'):</strong> Alta probabilidad de éxito con parto vaginal. La inducción se realiza directamente con <strong>infusión endovenosa continua de OXITOCINA</strong>.",
          "  - <strong>Bishop ≤ 6 puntos (Cuello Desfavorable o 'Inmaduro'):</strong> Si se induce solo con oxitocina, fracasa en más del 50% de los casos. Se requiere <strong>MADURACIÓN CERVICAL PREVIA</strong> con <strong>Prostaglandinas (Misoprostol 25 a 50 mcg vía vaginal cada 4-6 horas o Dinoprostona)</strong> o métodos mecánicos (Balón transcervical de Cook o sonda Foley)."
        ]
      },
      {
        "subhead": "4. Manejo Activo del Tercer Período (Alumbramiento Activo)",
        "paragraphs": [
          "• Es la intervención obstétrica estándar recomendada internacionalmente por la OMS, FIGO y MINSAL para prevenir la Hemorragia Postparto Inmediata (HPI).",
          "• <strong>Los Tres Pasos Secuenciales del Manejo Activo:</strong>",
          "  - <strong>1) Administración de un Uterotónico Inmediato:</strong> <strong>OXITOCINA 10 UI por vía intramuscular (IM)</strong> (o infusión EV de 20 UI en 500 mL) administrada inmediatamente <strong>tras la salida del hombro anterior del feto</strong> (o a más tardar en el primer minuto del nacimiento).",
          "  - <strong>2) Tracción Controlada del Cordón Umbilical (Maniobra de Brandt-Andrews):</strong> Se aplica contratracción suprapúbica firme con una mano empujando el cuerpo uterino hacia arriba mientras la otra mano ejerce una tracción suave y sostenida del cordón hacia abajo durante una contracción uterina. ¡Previene la temida inversión uterina!",
          "  - <strong>3) Masaje Uterino Abdominal:</strong> Masaje suave a través de la pared abdominal inmediatamente tras la salida de la placenta, repitiéndolo cada 15 minutos durante las primeras dos horas postparto para garantizar el 'globo de seguridad' de Pinard."
        ]
      }
    ],
    "table": {
      "title": "Sistema de Puntuación de Madurez Cervical: Score de Bishop",
      "headers": [
        "Parámetro Cervical",
        "0 Puntos",
        "1 Punto",
        "2 Puntos",
        "3 Puntos"
      ],
      "rows": [
        [
          "Dilatación Cervical",
          "Cerrado",
          "1 a 2 cm",
          "3 a 4 cm",
          "≥ 5 cm"
        ],
        [
          "Borramiento Cervical",
          "0 a 30%",
          "40 a 50%",
          "60 a 70%",
          "≥ 80%"
        ],
        [
          "Altura de Presentación (Lee)",
          "-3 cm (móvil)",
          "-2 cm (insinuado)",
          "-1 a 0 cm (fijo/encajado)",
          "+1 a +2 cm"
        ],
        [
          "Consistencia del Cuello",
          "Firme / Duro",
          "Media",
          "Blanda",
          "-"
        ],
        [
          "Posición del Cuello",
          "Posterior",
          "Intermedia",
          "Anterior",
          "-"
        ]
      ]
    },
    "vignette": "Primigesta de 41 semanas, cursando embarazo en vías de prolongación sin complicaciones, ingresa a la maternidad para interrupción programada del embarazo. El feto presenta estimación de peso de 3.400 gramos y registro basal reactivo. Al realizar el tacto vaginal de ingreso, el médico constata: cuello uterino en posición posterior, de consistencia firme, con 0% de borramiento, orificio cervical interno cerrado (0 cm de dilatación) y polo cefálico fetal en estación -3 (móvil sobre el estrecho superior). El cálculo del Score de Bishop arroja un total de 0 puntos. El interno de turno sugiere iniciar de inmediato una infusión de oxitocina a dosis crecientes para inducir el parto.",
    "explicacion": "La sugerencia del interno es incorrecta. Iniciar una infusión de oxitocina sobre un cuello uterino completamente desfavorable o inmaduro (Score de Bishop ≤ 6, y en este caso 0 puntos) resulta en una elevadísima tasa de fracaso de la inducción, hiperdinamia uterina, sufrimiento fetal agudo y una tasa de cesárea secundaria superior al 60%. La conducta obstétrica adecuada y respaldada por las guías del MINSAL es realizar una fase previa de Maduración Cervical mediante el uso de prostaglandinas locales (Misoprostol a dosis bajas de 25 a 50 mcg por vía vaginal cada 4 a 6 horas) o métodos mecánicos (balón de Foley transcervical). Una vez que el cuello madure y alcance un Score de Bishop superior a 6 puntos, recién se procederá a la inducción con oxitocina endovenosa y eventual amniotomía.",
    "keyPoints": [
      "Fase activa del trabajo de parto: Comienza a partir de los 5 cm de dilatación cervical según criterios actuales.",
      "Score de Bishop > 6 puntos: Cuello favorable / maduro -> Se induce directamente con Oxitocina EV.",
      "Score de Bishop ≤ 6 puntos: Cuello desfavorable / inmaduro -> Requiere maduración previa con Misoprostol o Balón de Foley.",
      "El inicio de oxitocina con cuello inmaduro (Bishop bajo) se asocia a alto fracaso de inducción y cesárea innecesaria.",
      "Mecanismos del parto en cefálica: Acomodación y flexión -> Descenso -> Rotación interna -> Desprendimiento -> Rotación externa.",
      "Rotación interna de la cabeza: La variedad de posición final habitual para desprenderse es la Occípito-Púbica.",
      "Manejo Activo del Alumbramiento: 1) Oxitocina 10 UI IM tras hombro anterior; 2) Tracción controlada; 3) Masaje.",
      "El alumbramiento activo reduce la incidencia de hemorragia postparto en más de un 60% y es universalmente obligatorio."
    ],
    "questions": [
      {
        "stem": "Una mujer de 41 semanas de gestación ingresa para inducción de parto por embarazo en vías de prolongación. Al tacto vaginal se encuentra un cuello uterino en posición posterior, consistencia firme, borramiento del 20%, orificio cervical cerrado (0 cm) y cabeza fetal flotante en plano -3 de Lee. ¿Cuál es la conducta de elección para iniciar la inducción del parto?",
        "options": [
          {
            "id": "A",
            "text": "Inducción directa con infusión endovenosa continua de Oxitocina a dosis crecientes"
          },
          {
            "id": "B",
            "text": "Maduración cervical previa con Misoprostol vaginal (25-50 mcg) o métodos mecánicos transcervicales"
          },
          {
            "id": "C",
            "text": "Realizar amniotomía precoz inmediata antes de cualquier medicación"
          },
          {
            "id": "D",
            "text": "Cesárea electiva inmediata sin permitir prueba de maduración cervical"
          },
          {
            "id": "E",
            "text": "Administración de tocolíticos orales y control en 1 semana"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Inducir con oxitocina un cuello con Bishop muy bajo (< 6) fracasa en la mayoría de los casos y genera hiperdinamia con riesgo de hipoxia fetal.\nB) Correcta. El Score de Bishop evalúa la probabilidad de éxito de una inducción. Un cuello posterior, duro, largo, cerrado y alto arroja un Bishop menor a 6 puntos (cuello inmaduro o desfavorable). En este escenario clínico, la norma internacional y la guía MINSAL indican realizar Maduración Cervical Previa utilizando prostaglandinas (Misoprostol vaginal a dosis de 25 a 50 mcg cada 4 a 6 horas) o dispositivos mecánicos de compresión cervical (balón de Foley). Una vez que el cuello se reblandece y dilata (Bishop > 6), se inicia la oxitocina.\nC) Incorrecta. La rotura artificial de membranas con feto flotante en -3 conlleva un gravísimo riesgo de prolapso de cordón umbilical.\nD) Incorrecta. El Bishop desfavorable no es indicación de cesárea primaria si no hay contraindicación de parto vaginal.\nE) Incorrecta. A las 41 semanas el embarazo no debe prolongarse sin inducir.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.007"
      },
      {
        "stem": "En el contexto de la prevención universal de la hemorragia postparto primaria por atonía uterina, ¿cuál es el esquema y el momento de administración farmacológica del 'Manejo Activo del Tercer Período del Parto' (Alumbramiento Activo)?",
        "options": [
          {
            "id": "A",
            "text": "Administrar Metilergonovina 0.2 mg IM después de expulsada completamente la placenta"
          },
          {
            "id": "B",
            "text": "Administrar Oxitocina 10 UI intramuscular inmediatamente tras la salida del hombro anterior del feto"
          },
          {
            "id": "C",
            "text": "Administrar Misoprostol 800 mcg rectal antes del inicio del período expulsivo"
          },
          {
            "id": "D",
            "text": "Infusión de Ácido Tranexámico 1g EV previo a la rotura de membranas"
          },
          {
            "id": "E",
            "text": "Tracción forzada del cordón umbilical en útero completamente relajado"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La metilergonovina no es el fármaco de primera línea para prevención por riesgo hipertensivo y se prefiere la oxitocina.\nB) Correcta. El pilar farmacológico central del Manejo Activo del Alumbramiento (recomendado por OMS y MINSAL) es la administración profiláctica inmediata de Oxitocina a dosis de 10 UI por vía intramuscular inmediatamente tras el desprendimiento del hombro anterior del feto (o dentro del primer minuto tras el nacimiento). Este paso se acompaña de la tracción controlada del cordón umbilical con contratracción suprapúbica y masaje uterino posterior, logrando una reducción superior al 60% en la tasa de atonía uterina y hemorragia postparto.\nC) Incorrecta. El misoprostol no se administra antes del expulsivo.\nD) Incorrecta. El ácido tranexámico se reserva para el tratamiento de hemorragia establecida, no como profilaxis universal de rutina en parto normal.\nE) Incorrecta. Tirar del cordón sin contracción provoca la inversión uterina.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.007"
      }
    ]
  },
  {
    "id": "ob-17",
    "classId": "ob-17",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Parto Prematuro, Mecanismo del Parto, Puerperio & Urgencias Obstétricas",
    "topicLabel": "19.17",
    "title": "Distocias del Trabajo de Parto, Distocia de Hombros y Monitorización Intraparto (CTG FIGO)",
    "perfilCode": "3.01.1.008",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Urgencia Obstétrica de Pabellón.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#40) · EUNACOM Julio 2023 (Q#19) · EUNACOM Diciembre 2021 (Q#14)",
    "frecuencia": "Máxima rentabilidad · Maniobra de McRoberts + Mazzanti para distocia de hombros e interpretación de desaceleraciones DIP I, II, III",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo de la Distocia de Hombros y Patrones del Monitoreo Intraparto",
    "diagramRows": [
      {
        "t": "Emergencia Intraparto: Salida de Cabeza Fetal que se Retrae contra el Periné ('Signo de la Tortuga')",
        "s": "¡DISTOCIA DE HOMBROS! Detención del parto tras salida cefálica · Pedir ayuda, cronometrar y suspender pujos",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "Maniobras de Primera Línea en Distocia de Hombros",
        "al": "McRoberts + Presión Suprapúbica vs Prohibición de Maniobras Peligrosas",
        "ll": "Maniobras de Elección Inmediata",
        "left": {
          "t": "1) Maniobra de McRoberts (Hiperflexión de muslos)",
          "s": "Aplanamiento del sacro y rotación cefálica de sínfisis púbica + 2) Presión Suprapúbica (Mazzanti) dirigida hacia abajo",
          "type": "acc"
        },
        "rl": "¡MANIOBRAS ESTRICTAMENTE PROHIBIDAS!",
        "right": {
          "t": "¡PROHIBIDA LA MANIOBRA DE KRISTELLER!",
          "s": "Prohibido empujar el fondo uterino (causa rotura uterina y mayor impacto del hombro) · Prohibido tirar con fuerza de la cabeza (lesión de plexo braquial)",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Monitoreo Cardiofetal Intraparto (Clasificación FIGO / ACOG)",
        "al": "Patrones Normales vs Patológicos",
        "ll": "DIP I (Tempranas / Fisiológicas)",
        "left": {
          "t": "Coinciden con la contracción · En 'espejo'",
          "s": "Causa: Compresión mecánica de la cabeza fetal -> Reflejo vagal benigno. NO indican hipoxia ni requieren cesárea",
          "type": "acc"
        },
        "rl": "DIP II (Tardías / Patológicas) y DIP III Severos",
        "right": {
          "t": "Comienzan tras el acmé de la contracción",
          "s": "Causa: Insuficiencia útero-placentaria e hipoxia fetal. Categoría III (variabilidad ausente + DIP II) -> ¡Cesárea emergente!",
          "type": "crit"
        }
      }
    ],
    "contexto": "Las distocias representan la alteración en la progresión normal del trabajo de parto secundarias a anomalías en las tres 'P' obstétricas: Pelvis (canal óseo/blando), Pasajero (feto y presentación) o Potencia (dinámica uterina). Entre ellas, la Distocia de Hombros constituye una de las pesadillas más angustiantes de la sala de partos: una emergencia de minutos donde el hombro anterior queda impactado detrás de la sínfisis púbica materna, corriendo riesgo de asfixia neonatal grave y lesión irreversible del plexo braquial. Por su parte, la Monitorización Electrónica Fetal Intraparto (MEFI / CTG) debe interpretarse con absoluta soltura: distinguir las desaceleraciones fisiológicas precoces (DIP I) de las desaceleraciones tardías hipóxicas (DIP II) y variables por cordón (DIP III).",
    "contentSections": [
      {
        "subhead": "1. Distocias de la Fase Activa y del Expulsivo",
        "paragraphs": [
          "• <strong>Trastornos de la Progresión del Parto:</strong>",
          "  - <strong>Fase Activa Prolongada:</strong> Dilatación cervical que progresa a menos de 1 cm/hora en presencia de dinámica uterina adecuada.",
          "  - <strong>Detención Secundaria de la Dilatación:</strong> Cese de la progresión de la dilatación cervical durante <strong>2 horas o más</strong> en la fase activa con dinámica uterina.",
          "  - <strong>Detención del Descenso en el Expulsivo:</strong> Ausencia de progresión de la presentación fetal durante 1 hora en multíparas o 2 horas en primíparas.",
          "• <strong>Desproporción Céfalo-Pélvica (DCP):</strong> Diagnóstico clínico que se plantea ante una detención de la dilatación o del descenso pese a buena dinámica uterina (o prueba de oxitocina), asociado a <strong>asinclitismo, cabalgamiento óseo de suturas craneales y caput succedaneum voluminoso</strong>. Requiere resolución por Cesárea."
        ]
      },
      {
        "subhead": "2. Distocia de Hombros: Diagnóstico y Algoritmo de Maniobras de Rescate",
        "paragraphs": [
          "• <strong>Definición:</strong> Falta de desprendimiento de los hombros fetales tras la salida de la cabeza, requiriendo maniobras adicionales a la tracción axial suave habitual.",
          "• <strong>Factores de Riesgo:</strong> <strong>Macrosomía fetal (peso fetal > 4.000 - 4.500 g)</strong>, diabetes gestacional materna, obesidad, parto instrumental con fórceps/vacuum y antecedente de distocia de hombros previa.",
          "• <strong>Signo Clínico Patognomónico:</strong> <strong>'Signo de la Tortuga'</strong> (la cabeza fetal se desprende pero inmediatamente se retrae fuertemente contra el periné materno).",
          "• <strong>¡LO QUE ESTÁ ESTRICTAMENTE PROHIBIDO!:</strong>",
          "  - <strong>1) PROHIBIDA LA MANIOBRA DE KRISTELLER:</strong> La presión fúngica sobre el fondo uterino está formalmente proscrita; impacta aún más el hombro contra el pubis y causa rotura uterina.",
          "  - <strong>2) PROHIBIDA LA TRACCIÓN Y BALANCEO BRUSCO DE LA CABEZA:</strong> Provoca la elongación y avulsión de las raíces C5-C6 del plexo braquial (<strong>Parálisis braquial de Duchenne-Erb</strong>) o fracturas claviculares.",
          "• <strong>Secuencia Oficial de Maniobras de Rescate (HELPERR):</strong>",
          "  - <strong>1. Maniobra de McRoberts:</strong> <strong>Hiperflexión y abducción de los muslos de la paciente sobre su abdomen</strong>. Logra aplanar la lordosis lumbar y rota la sínfisis púbica en sentido cefálico, desimpactando el hombro anterior en más del 70% de los casos.",
          "  - <strong>2. Presión Suprapúbica (Maniobra de Mazzanti):</strong> Presión firme aplicada por un asistente con la base de la mano justo por encima de la sínfisis púbica en sentido lateral y posterior, para colapsar el diámetro biacromial.",
          "  - <strong>3. Maniobras Internas (si falla lo anterior):</strong>",
          "    • <strong>Maniobra de Rubin / Woods (Sacacorchos):</strong> Rotación manual del hombro fetal anterior hacia el diámetro oblicuo presionando la cara posterior o anterior.",
          "    • <strong>Maniobra de Jacquemier (Extracción del hombro posterior):</strong> Se introduce la mano en vagina, se toma el brazo posterior fetal, se flexiona en el codo y se extrae sobre el tórax.",
          "    • <strong>Maniobra de Gaskin:</strong> Colocar a la paciente en cuatro apoyos (cuadrupedia).",
          "    • <strong>Maniobras de Último Recurso:</strong> Fractura intencional de la clavícula, sinfisiotomía o maniobra de Zavanelli (reintroducción de la cabeza fetal y cesárea de emergencia)."
        ]
      },
      {
        "subhead": "3. Monitorización Electrónica Cardiofetal Intraparto (MEFI / CTG)",
        "paragraphs": [
          "• <strong>Parámetros Basales Normales (FIGO 2015):</strong>",
          "  - <strong>Línea de Base:</strong> 110 a 160 latidos por minuto (lpm). Bradicardia < 110 lpm; Taquicardia > 160 lpm.",
          "  - <strong>Variabilidad:</strong> Amplitud normal de <strong>5 a 25 lpm</strong> (indica adecuada oxigenación del tronco cerebral fetal).",
          "  - <strong>Aceleraciones:</strong> Incremento de la FCF de ≥ 15 lpm de amplitud y ≥ 15 segundos de duración (signo inequívoco de reactividad y bienestar).",
          "• <strong>Desaceleraciones Intraparto y su Significado Clínico:</strong>",
          "  - <strong>Desaceleraciones Tempranas (DIP I):</strong> Comienzan con el inicio de la contracción y su punto más bajo (nadir) <strong>coincide exactamente con el acmé de la contracción ('en imagen en espejo')</strong>. Fisiopatología: <strong>Compresión mecánica de la cabeza fetal</strong> contra la pelvis, originando una respuesta vagal parasimpática refleja totalmente benigna. NO representan hipoxia ni acidosis; tienen pronóstico benigno y no requieren tratamiento.",
          "  - <strong>Desaceleraciones Tardías (DIP II):</strong> Comienzan tarde y su nadir ocurre <strong>con posterioridad al acmé de la contracción uterina (desfase > 20 segundos)</strong>, con una recuperación lenta tras finalizar la contracción. Fisiopatología: <strong>Insuficiencia útero-placentaria aguda o crónica con HIPOXIA FETAL tisular</strong> y activación de quimiorreceptores. Si son recurrentes (> 50% de las contracciones) o se asocian a pérdida de variabilidad, indican acidosis metabólica severa y riesgo de muerte fetal. Conducta: reanimación intrauterina (oxígeno materno, decúbito lateral izquierdo, suspender oxitocina, bolo de cristaloides) y, si no revierte, <strong>Cesárea de Urgencia Inmediata</strong>.",
          "  - <strong>Desaceleraciones Variables (DIP III):</strong> Descenso brusco (< 30 s hasta el nadir) con forma en 'V' o en 'W', asimétricas y sin relación fija con la contracción. Fisiopatología: <strong>Compresión transitoria del cordón umbilical</strong> (circulares, oligohidramnios). Son severas si duran > 60 s o bajan a < 70 lpm.",
          "  - <strong>Patrón Sinusoidal:</strong> Ondulación regular suave y oscilatoria sin aceleraciones. Patognomónico de <strong>Anemia Fetal Severa</strong> (isoinmunización Rh, rotura de vasa previa, fetopatía)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de las Desaceleraciones Cardíacas Fetales Intraparto (FIGO)",
      "headers": [
        "Tipo de Desaceleración",
        "Morfología y Relación con la Contracción",
        "Fisiopatología Subyacente",
        "Significado Clínico y Manejo"
      ],
      "rows": [
        [
          "DIP I (Precoces / Tempranas)",
          "Simétricas, coinciden punto a punto con la contracción ('en espejo')",
          "Compresión fisiológica de la cabeza fetal -> Reflejo vagal",
          "TOTALMENTE BENIGNAS. No indican hipoxia. Parto fisiológico."
        ],
        [
          "DIP II (Tardías)",
          "Asimétricas, desfase > 20s respecto al acmé; recuperación tardía",
          "Hipoxia fetal por hipoperfusión útero-placentaria",
          "PATOLÓGICAS (Acidemia fetal). Reanimación intrauterina o CESÁREA."
        ],
        [
          "DIP III (Variables)",
          "Bruscas en 'V', variables en tiempo, amplitud y relación temporal",
          "Compresión transitoria del cordón umbilical (barorreceptores)",
          "Habituales; si son severas (> 60s, < 70 lpm) descartar prolapso de cordón."
        ],
        [
          "Patrón Sinusoidal",
          "Ondas sinusoidales regulares de 2-5 ciclos/minuto sin variabilidad",
          "Compromiso hemodinámico severo por Anemia Fetal Grave",
          "GRAVE EMERGENCIA. Isoinmunización o desgarro de vasa previa -> Cesárea."
        ]
      ]
    },
    "severityTable": {
      "title": "Categorización del Monitoreo Fetal Intraparto según Riesgo de Acidosis (ACOG / FIGO)",
      "headers": [
        "Categoría ACOG",
        "Hallazgos de la Frecuencia Cardíaca Fetal",
        "Riesgo de Acidosis y Conducta"
      ],
      "rows": [
        [
          "Categoría I (Normal / Trazado Seguro)",
          "Línea basal 110-160 lpm + Variabilidad moderada (5-25 lpm) + Sin DIP II ni DIP III + Presencia de aceleraciones",
          "Riesgo de acidosis metabólica prácticamente NULO. Continuar parto vaginal sin intervenciones."
        ],
        [
          "Categoría II (Indeterminado)",
          "Bradicardia con variabilidad conservada, taquicardia sin DIPs, variabilidad mínima o desaceleraciones variables frecuentes",
          "Riesgo incierto de acidemia. Requiere vigilancia continua, cambio de posición materna, hidratación EV y reevaluación."
        ],
        [
          "Categoría III (Anormal / Patológico)",
          "Pérdida total de variabilidad (ausente / plana) ASOCIADA a: DIP II recurrentes, DIP III recurrentes, bradicardia sostenida o Patrón Sinusoidal",
          "ALTÍSIMO RIESGO DE ASFIXIA FETAL Y DAÑO NEUROLÓGICO. Reanimación intrauterina y CESÁREA INMEDIATA EXPEDITA."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Pasos Críticos de la Reanimación Intrauterina Intraparto",
      "headers": [
        "Medida Terapéutica",
        "Mecanismo Fisiológico",
        "Objetivo Inmediato"
      ],
      "rows": [
        [
          "Decúbito Lateral Izquierdo",
          "Descomprime la vena cava inferior y aorta abdominal materna",
          "Aumenta el retorno venoso, gasto cardíaco y perfusión útero-placentaria."
        ],
        [
          "Suspensión de Oxitocina",
          "Cesa la estimulación miometrial excesiva",
          "Elimina la polisistolia e hipertonía que impiden el intercambio gaseoso."
        ],
        [
          "Carga de Cristaloides EV",
          "Expansión rápida del volumen plasmático materno (500-1000 mL Ringer/SF)",
          "Revierte la hipotensión materna (especialmente post-anestesia peridural)."
        ],
        [
          "Oxígeno Suplementario (SOS)",
          "Mascarilla con reservorio a 10 L/min",
          "Aumenta la presión parcial de oxígeno en sangre materna hacia el espacio intervelloso."
        ],
        [
          "Tocolisis de Emergencia",
          "Nitroglicerina sublingual o Fenoterol / Salbutamol EV en bolo rápido",
          "Relaja el miometrio de inmediato para permitir oxigenación fetal de rescate."
        ]
      ]
    },
    "vignette": "En una sala de partos, una multípara de 39 semanas con diabetes gestacional en tratamiento con insulina da a luz por vía vaginal a la cabeza de un recién nacido vigoroso. Inmediatamente tras la expulsión de la cabeza, esta se retrae firmemente contra el periné materno ('signo de la tortuga'). El médico obstetra intenta la tracción axial suave habitual hacia abajo, pero los hombros no se desprenden tras 30 segundos. Un interno de medicina sube a la camilla y comienza a presionar fuertemente con ambos puños el fondo del útero.",
    "explicacion": "La acción que debe realizarse de inmediato es DETENER DE FORMA ENÉRGICA al interno y PROHIBIR la presión sobre el fondo uterino (Maniobra de Kristeller). Nos encontramos ante una Distocia de Hombros aguda, una emergencia obstétrica crítica. La maniobra de Kristeller está terminantemente prohibida porque aumenta el impacto del hombro anterior contra el hueso púbico y puede causar rotura uterina y hemorragia materna masiva. La conducta de rescate de primera línea con mayor tasa de éxito comprobada consiste en solicitar ayuda de inmediato al equipo, colocar a la paciente en posición de Maniobra de McRoberts (hiperflexión y abducción de ambos muslos contra el abdomen) y aplicar simultáneamente Presión Suprapúbica externa dirigida (Maniobra de Mazzanti) para desimpactar el hombro anterior.",
    "keyPoints": [
      "Distocia de hombros: Emergencia intraparto anunciada por el 'signo de la tortuga'.",
      "¡TERMINANTEMENTE PROHIBIDA la maniobra de Kristeller (presión en fondo uterino) en distocia de hombros!",
      "¡Prohibida la tracción violenta o balanceo de la cabeza por riesgo de parálisis de plexo braquial (Erb-Duchenne)!",
      "Maniobras de primera línea de elección: 1) Maniobra de McRoberts + 2) Presión suprapúbica (Mazzanti).",
      "DIP I (Desaceleraciones tempranas en espejo): Por compresión fisiológica cefálica. Fisiológicas y benignas.",
      "DIP II (Desaceleraciones tardías): Por hipoxia e insuficiencia útero-placentaria. Sugieren acidosis fetal.",
      "DIP III (Desaceleraciones variables en V): Por compresión del cordón umbilical. Descartar procúbito/prolapso.",
      "Patrón Sinusoidal: Patognomónico de anemia fetal severa intraútero.",
      "Categoría III del monitoreo: Variabilidad ausente + DIP II o bradicardia -> ¡Cesárea de urgencia inmediata!"
    ],
    "questions": [
      {
        "stem": "Durante la atención de un parto vaginal de una paciente con feto macrosómico, se produce la salida de la cabeza fetal, la cual inmediatamente se retrae con fuerza contra el periné ('signo de la tortuga'). A pesar de una tracción axial suave, el hombro anterior queda impactado detrás de la sínfisis púbica impidiendo la salida del tórax. ¿Cuáles son las dos maniobras de primera línea recomendadas para resolver esta emergencia obstétrica?",
        "options": [
          {
            "id": "A",
            "text": "Maniobra de Kristeller enérgica sobre el fondo uterino y tracción cefálica forzada"
          },
          {
            "id": "B",
            "text": "Maniobra de McRoberts (hiperflexión de muslos maternos sobre el abdomen) combinada con presión suprapúbica (Mazzanti)"
          },
          {
            "id": "C",
            "text": "Realización inmediata de cesárea con feto desprendido (maniobra de Zavanelli) sin intentar maniobras externas"
          },
          {
            "id": "D",
            "text": "Fractura intencional de ambas clavículas fetales como maniobra primaria de elección"
          },
          {
            "id": "E",
            "text": "Sinfisiotomía quirúrgica inmediata bajo anestesia general"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La maniobra de Kristeller está absolutamente contraindicada en la distocia de hombros por riesgo de rotura uterina y fracturas fetales, al igual que la tracción brusca que rompe el plexo braquial.\nB) Correcta. Ante una Distocia de Hombros confirmada por el 'signo de la tortuga', el abordaje sistemático de primera línea universalmente validado (protocolo HELPERR / MINSAL) consiste en: 1) Maniobra de McRoberts (hiperflexión extrema de los muslos de la madre contra el abdomen, lo que reduce el ángulo de inclinación de la pelvis y amplía el diámetro funcional sagital), asociada a 2) Presión Suprapúbica (Maniobra de Mazzanti), ejerciendo presión hacia abajo y hacia el lado con la eminencia tenar para rotar y desimpactar el hombro anterior. Esta combinación resuelve con éxito entre el 70% y 85% de los casos sin secuelas.\nC) Incorrecta. La maniobra de Zavanelli es un recurso heroico desesperado reservado para el fracaso de todas las maniobras internas.\nD) Incorrecta. La fractura de clavícula no es una maniobra de primera línea.\nE) Incorrecta. La sinfisiotomía es una técnica mutilante de último recurso en países sin quirófano disponible.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.008"
      },
      {
        "stem": "Durante la fase activa de un trabajo de parto a término, el trazado del monitoreo cardiofetal continuo muestra desaceleraciones periódicas de la frecuencia cardíaca fetal que comienzan de forma simultánea con el inicio de la contracción uterina, alcanzando su nadir exactamente en el punto de máxima presión de la contracción ('en imagen en espejo') y retornando a la línea de base de 135 lpm una vez que finaliza la contracción. La variabilidad se mantiene moderada en 15 lpm y el tono uterino es normal. ¿Cuál es el significado fisiopatológico de este hallazgo y la conducta a seguir?",
        "options": [
          {
            "id": "A",
            "text": "Indica acidosis fetal severa por desprendimiento prematuro de placenta; realizar cesárea inmediata"
          },
          {
            "id": "B",
            "text": "Corresponde a desaceleraciones precoces (DIP I) por compresión de la cabeza fetal; son fisiológicas y no requieren intervención quirúrgica"
          },
          {
            "id": "C",
            "text": "Indica hipoxia fetal progresiva por insuficiencia útero-placentaria; administrar tocolíticos y suspender el parto"
          },
          {
            "id": "D",
            "text": "Corresponde a compresión crítica del cordón umbilical con prolapso oculto; trasladar a pabellón en decúbito prono"
          },
          {
            "id": "E",
            "text": "Indica anemia fetal aguda grave; solicitar sangre para transfusión intrauterina inmediata"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Las desaceleraciones que coinciden en espejo no indican acidosis ni desprendimiento.\nB) Correcta. Las desaceleraciones de la frecuencia cardíaca fetal que se inician junto con la contracción uterina, alcanzan su nadir en el acmé de la misma ('imagen en espejo' simétrica) y se normalizan al terminar la contracción corresponden a Desaceleraciones Precoces o Tempranas (DIP I). Están causadas por la compresión mecánica transitoria de la cabeza fetal contra el canal del parto, lo que genera un aumento de la presión intracraneal fetal y estimulación vagal parasimpática con caída de la frecuencia. Tienen carácter totalmente fisiológico y benigno, no se asocian a hipoxia ni acidemia, y permiten continuar la evolución normal del parto vaginal.\nC) Incorrecta. La insuficiencia placentaria e hipoxia se manifiesta como DIP II (tardías).\nD) Incorrecta. La compresión de cordón produce DIP III (variables en V).\nE) Incorrecta. La anemia fetal produce trazado sinusoidal oscilatorio.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.008"
      },
      {
        "stem": "Una multípara en trabajo de parto activo a 7 cm de dilatación presenta en el registro cardiofetal intraparto desaceleraciones repetidas cuya caída de la frecuencia cardíaca comienza después del acmé de la contracción uterina, alcanzando el nadir a los 30 segundos tras la contracción y retornando lentamente a la línea de base. Se constata además una línea de base en 155 lpm con variabilidad ausente (< 3 lpm). ¿Cuál es la conducta terapéutica indicada?",
        "options": [
          {
            "id": "A",
            "text": "Observación expectante durante 4 horas para evaluar el descenso espontáneo"
          },
          {
            "id": "B",
            "text": "Aumentar la dosis de oxitocina endovenosa para acelerar el expulsivo"
          },
          {
            "id": "C",
            "text": "Iniciar medidas de reanimación intrauterina y proceder de inmediato a la interrupción del embarazo mediante cesárea de urgencia"
          },
          {
            "id": "D",
            "text": "Administrar antibióticos orales y solicitar urocultivo"
          },
          {
            "id": "E",
            "text": "Indicar anestesia peridural para mejorar la relajación del piso pelviano"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La observación expectante ante desaceleraciones tardías con variabilidad ausente causará la muerte fetal o encefalopatía hipóxico-isquémica.\nB) Incorrecta. Aumentar la oxitocina aumentará las contracciones y asfixiará al feto.\nC) Correcta. El trazado descrito presenta Desaceleraciones Tardías recurrentes (DIP II) asociadas a pérdida total de la variabilidad fetal, configurando un Patrón de Monitoreo Categoría III (Anormal). Este patrón traduce una hipoxia fetal severa con deuda tisular de oxígeno y acidosis metabólica miocárdica progresiva por insuficiencia útero-placentaria. La conducta obstétrica mandatoria es instaurar de inmediato maniobras de reanimación intrauterina (suspender oxitocina, oxígeno materno, decúbito lateral izquierdo, bolo de cristaloides) y proceder a la resolución inmediata del embarazo mediante cesárea de emergencia.\nD) Incorrecta. Inadecuado ante un compromiso hipóxico agudo.\nE) Incorrecta. La peridural puede generar hipotensión materna que agrava la hipoxia fetal.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.008"
      },
      {
        "stem": "¿Cuál es la complicación neurológica neonatal clásica más frecuente derivada de la aplicación de una tracción lateral excesiva y violenta sobre la cabeza fetal durante el desprendimiento en un parto complicado por distocia de hombros?",
        "options": [
          {
            "id": "A",
            "text": "Parálisis de Bell del nervio facial"
          },
          {
            "id": "B",
            "text": "Parálisis braquial superior de Erb-Duchenne (raíces C5-C6)"
          },
          {
            "id": "C",
            "text": "Parálisis braquial inferior de Klumpke (raíces C8-T1)"
          },
          {
            "id": "D",
            "text": "Parálisis del nervio ciático poplíteo externo"
          },
          {
            "id": "E",
            "text": "Parálisis frénica bilateral con luxación atloidoaxoidea"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La parálisis facial se asocia clásicamente a la compresión de la rama mandibular por las cucharas del fórceps.\nB) Correcta. La Parálisis de Erb-Duchenne es la lesión neurológica obstétrica clásica más común de la distocia de hombros. Ocurre por la distensión excesiva o rotura traumática de las raíces superiores del plexo braquial (C5 y C6) provocada por la tracción axial y balanceo lateral vigoroso ejercido sobre la cabeza fetal cuando el hombro está anclado en la pelvis. El recién nacido adopta la típica postura 'en propina de mozo' (brazo en aducción y rotación interna con antebrazo extendido y pronado).\nC) Incorrecta. La de Klumpke (C8-T1) compromete la mano y es mucho más rara, típica de tracción excesiva en podálica con brazos en alto.\nD) Incorrecta. El nervio ciático poplíteo no se afecta en la distocia de hombros.\nE) Incorrecta. Menos frecuente que la parálisis braquial superior.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.008"
      }
    ]
  },
  {
    "id": "ob-18",
    "classId": "ob-18",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Parto Prematuro, Mecanismo del Parto, Puerperio & Urgencias Obstétricas",
    "topicLabel": "19.18",
    "title": "Hemorragia Postparto Inmediata (HPI), Código Rojo, Regla de las 4T y Algoritmo Terapéutico Escalonado",
    "perfilCode": "3.01.1.009",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Urgencia Obstétrica Vital de Máxima Prioridad en Red de Urgencia.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#42) · EUNACOM Julio 2023 (Q#20) · EUNACOM Diciembre 2022 (Q#12)",
    "frecuencia": "Máxima rentabilidad · Regla de las 4T (Tono 70%), Masaje bimanual, Fármacos uterotónicos escalonados, Ácido Tranexámico y Balón de Bakri",
    "svg": null,
    "algoTitle": "Algoritmo de Reanimación y Rescate Escalonado en Hemorragia Postparto (Código Rojo)",
    "diagramRows": [
      {
        "t": "Hemorragia Postparto Inmediata (> 500 mL en parto vaginal o > 1.000 mL en cesárea)",
        "s": "¡ACTIVAR CÓDIGO ROJO! Solicitar ayuda, 2 vías periféricas 14-16G, tomar exámenes y banco de sangre",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "Diagnóstico Etiológico según la Regla de las 4T",
        "al": "Tono (70%) vs Trauma (20%) vs Tejido (10%) vs Trombina (1%)",
        "ll": "TONO UTERINO (70%): Útero Blando, Subinvolucionado",
        "left": {
          "t": "ATONÍA UTERINA",
          "s": "1) Masaje Uterino Bimanual continuo + 2) Oxitocina EV (bolo + infusión) + Metilergonovina IM (si no es hipertensa) + Misoprostol 800 mcg rectal/SL + Ácido Tranexámico 1g EV",
          "type": "crit"
        },
        "rl": "TRAUMA o TEJIDO: Útero Contraído pero Sangrado Activo",
        "right": {
          "t": "REVISIÓN DEL CANAL Y CAVIDAD",
          "s": "Especuloscopía para reparar desgarros de cuello/vagina/periné · Revisión instrumental si hay retención de restos ovulares",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Respuesta a Uterotónicos de Primera Línea en Atonía",
        "al": "Controla el Sangrado vs Hemorragia Refractaria",
        "ll": "Cede Hemorragia con Fármacos y Masaje",
        "left": {
          "t": "Mantenimiento con Oxitocina EV",
          "s": "Infusión por 24 horas + Monitoreo hemodinámico estricto en sala de recuperación o UTI",
          "type": "acc"
        },
        "rl": "Persiste Sangrado Incoercible / Shock",
        "right": {
          "t": "MANEJO QUIRÚRGICO ESCALONADO",
          "s": "1) Balón de Bakri intrauterino (taponamiento hidrostático) -> 2) Laparotomía: Suturas de B-Lynch, ligadura de arterias uterinas -> 3) Histerectomía de rescate",
          "type": "crit"
        }
      }
    ],
    "contexto": "La Hemorragia Postparto Inmediata (HPI) es la principal causa de muerte materna evitable a nivel mundial y una causa de alarma crítica en los hospitales chilenos. Se define clásicamente como una pérdida hemática superior a 500 mL tras un parto vaginal o superior a 1.000 mL tras una cesárea (o cualquier sangrado que altere los parámetros hemodinámicos maternos). El diagnóstico etiológico se estructura en la universalmente conocida Regla de las 4T: Tono (Atonía Uterina, responsable del 70% de los casos), Trauma (laceraciones y desgarros del canal, hematomas, inversión uterina), Tejido (restos placentarios o cotiledón aberrante) y Trombina (trastornos de la coagulación). El manejo debe ser agresivo y escalonado, activando el 'Código Rojo'.",
    "contentSections": [
      {
        "subhead": "1. Definición, Código Rojo y la Regla Mnemotécnica de las 4T",
        "paragraphs": [
          "• <strong>Definición Actual:</strong> Pérdida hemática acumulada <strong>≥ 1.000 mL</strong> o sangrado acompañado de signos y síntomas de hipovolemia dentro de las primeras 24 horas postparto (tradicionalmente se definía como > 500 mL en parto vaginal y > 1.000 mL en cesárea).",
          "• <strong>Activación de 'Código Rojo Obstétrico':</strong> Es la movilización coordinada y protocolizada del equipo multidisciplinario (obstetra, anestesiólogo, matrona, enfermera, banco de sangre y UCI):",
          "  - <strong>Minuto Cero:</strong> Diagnosticar y activar Código Rojo. Asignar roles (Líder, Vía Aérea, Circulación y Asistente de registro).",
          "  - <strong>Canalización:</strong> Dos accesos venosos periféricos de grueso calibre (<strong>14G o 16G</strong>).",
          "  - <strong>Muestras Urgentes:</strong> Hemograma, pruebas de coagulación (TP, TTPA, Fibrinógeno), pruebas cruzadas para glóbulos rojos.",
          "  - <strong>Resucitación Hemostática:</strong> Cristaloides tibios limitados (Ringer Lactato máximo 1.500 a 2.000 mL para evitar hemodilución e hipotermia) y transfusión temprana balanceada de glóbulos rojos, plasma y plaquetas (relación 1:1:1 en sangrado masivo).",
          "• <strong>La Regla de las 4T (Etiología):</strong>",
          "  - <strong>1) TONO (70% de los casos):</strong> <strong>Atonía Uterina</strong>. Falla en la contracción de las fibras musculares miometriales que normalmente colapsan las arterias espiraladas ('ligaduras vivas de Pinard'). Factores de riesgo: sobredistensión uterina (embarazo múltiple, polihidramnios, macrosomía), trabajo de parto prolongado o precipitado, corioamnionitis, uso prolongado de oxitocina y multiparidad.",
          "  - <strong>2) TRAUMA (20% de los casos):</strong> Desgarros cervicales, vaginales o perineales, rotura uterina, hematomas del ligamento ancho o <strong>Inversión Uterina</strong>.",
          "  - <strong>3) TEJIDO (10% de los casos):</strong> Retención de restos placentarios, cotiledón aberrante succenturiado, coágulos retenidos o espectro de placenta acreta.",
          "  - <strong>4) TROMBINA (1% de los casos):</strong> Coagulopatías preexistentes (enfermedad de von Willebrand, hemofilia) o adquiridas (CID inducida por DPPNI, eclampsia, sepsis o embolia de líquido amniótico)."
        ]
      },
      {
        "subhead": "2. Manejo Inicial de la Atonía Uterina: Masaje Bimanual y Uterotónicos Escalonados",
        "paragraphs": [
          "• <strong>Paso 1: Masaje Uterino Bimanual Inmediato:</strong> Se introduce una mano empuñada en el fórnix anterior de la vagina mientras la otra mano comprime con firmeza el fondo uterino a través de la pared abdominal contra el puño interno, manteniéndolo hasta lograr la respuesta miometrial.",
          "• <strong>Paso 2: Terapia Farmacológica Uterotónica Escalonada:</strong>",
          "  - <strong>Oxitocina (1.ª Línea Obligatoria):</strong> Dosis de bolo lento de 5 a 10 UI EV en 2-3 minutos (o 10 UI IM), seguido de una infusión continua de 20 a 40 UI en 1.000 mL de suero a pasar a 125-250 mL/h.",
          "  - <strong>Ácido Tranexámico (TXA) (Obligatorio en todos los casos de HPI):</strong> <strong>1 g endovenoso administrado dentro de las primeras 3 horas</strong> del inicio de la hemorragia (ensayo clínico mundial WOMAN). Reduce la mortalidad materna por sangrado sin aumentar eventos trombóticos. Si el sangrado persiste a los 30 min, se repite una segunda dosis de 1 g.",
          "  - <strong>Metilergonovina / Ergometrina (2.ª Línea):</strong> Alcaloide del cornezuelo de centeno que produce contracción tetánica sostenida. Dosis de <strong>0.2 mg intramuscular (IM)</strong>. <strong>¡CONTRAINDICACIÓN FORMAL ABSOLUTA: PREECLAMPSIA, ECLAMPSIA O HIPERTENSIÓN ARTERIAL!</strong> Causa vasoconstricción sistémica severa, crisis hipertensiva, ACV hemorrágico y edema agudo de pulmón.",
          "  - <strong>Misoprostol (3.ª Línea):</strong> Prostaglandina E1 a dosis de <strong>800 mcg por vía sublingual o rectal</strong>. Ventaja: no requiere refrigeración y es seguro en pacientes hipertensas. Efectos: calofríos y fiebre transitoria.",
          "  - <strong>Carbetocina:</strong> Análogo sintético de acción prolongada de la oxitocina (100 mcg EV en bolo lento).",
          "  - <strong>Carboprost (PGF2α):</strong> 0.25 mg IM (contraindicado en asma bronquial por broncoespasmo severo)."
        ]
      },
      {
        "subhead": "3. Manejo Mecánico y Quirúrgico de la Hemorragia Refractaria",
        "paragraphs": [
          "• <strong>Taponamiento Uterino con Balón Hidrostático (Balón de Bakri):</strong>",
          "  - Es el procedimiento de rescate mecánico de elección ante el fracaso del masaje y los uterotónicos antes de abrir el abdomen.",
          "  - Técnica: Inserción transcervical del balón de silicona hacia la cavidad uterina, insuflándolo con <strong>300 a 500 mL de suero fisiológico estéril tibio</strong>. Ejerce presión hidrostática directa sobre el lecho vascular miometrial. Si detiene el sangrado ('prueba del taponamiento positiva'), se mantiene durante 12 a 24 horas bajo cobertura antibiótica e infusión de oxitocina.",
          "• <strong>Técnicas Quirúrgicas Conservadoras (Laparotomía):</strong>",
          "  - <strong>Suturas de Compresión Uterina (Técnica de B-Lynch y variantes):</strong> Suturas hemostáticas transmurales que envuelven el cuerpo uterino en forma de 'tirantes de pantalón', manteniéndolo comprimido permanentemente.",
          "  - <strong>Desvascularización Quirúrgica Escalonada:</strong> Ligadura bilateral de arterias uterinas (técnica de O'Leary) y arterias utero-ováricas; y si es necesario ligadura de arterias ilíacas internas (hipogástricas).",
          "• <strong>Histerectomía Obstétrica de Urgencia Total o Subtotal:</strong> Medida terapéutica definitiva y salvadora de la vida materna ante atonía refractaria con shock profundo, acretismo placentario o rotura uterina irreparable."
        ]
      },
      {
        "subhead": "4. Inversión Uterina Puerperal: Emergencia Rara pero Letal",
        "paragraphs": [
          "• <strong>Definición y Causas:</strong> Introducción del fondo uterino dentro de su propia cavidad como el 'dedo de un guante que se da vuelta', protruyendo a través del canal cervical o fuera de la vulva.",
          "• <strong>Factor Desencadenante Principal:</strong> Tracción forzada del cordón umbilical en el alumbramiento sobre un <strong>útero no contraído o con placenta aún adherida</strong>, sumado a presión fúngica indebida.",
          "• <strong>Clínica:</strong> Hemorragia postparto masiva asociada a <strong>Shock Neurogénico desproporcionado</strong> (hipotensión severa y bradicardia por tracción de los plexos nerviosos peritoneales) y ausencia de útero a la palpación abdominal, evidenciándose una masa rojiza carnosa globular en la vagina o vulva.",
          "• <strong>Conducta Inmediata:</strong>",
          "  - Suspender inmediatamente cualquier uterotónico (para permitir la relajación uterina).",
          "  - Administrar relajantes miometriales si es necesario (anestesia general inhalatoria o nitroglicerina).",
          "  - <strong>Reposición Manual Inmediata (Maniobra de Johnson):</strong> El operador empuja el fondo uterino con la palma de la mano hacia arriba a través del canal cervical hacia la cavidad abdominal.",
          "  - Una vez restituido el útero, se inician uterotónicos a altas dosis (oxitocina) para mantenerlo contraído y evitar que vuelva a invertirse."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico y Manejo de la Hemorragia Postparto según la Regla de las 4T",
      "headers": [
        "Causa (Las 4T)",
        "Frecuencia",
        "Hallazgos Clínicos Cardinales",
        "Tratamiento Específico de Elección"
      ],
      "rows": [
        [
          "Tono (Atonía Uterina)",
          "70%",
          "Útero blando, supraumbilical, no se retrae tras alumbramiento",
          "Masaje bimanual + Oxitocina + Metilergonovina/Misoprostol + TXA + Bakri"
        ],
        [
          "Trauma (Laceraciones / Desgarros)",
          "20%",
          "Útero duro y contraído pero sangrado continuo rojo fresco en chorro",
          "Inspección sistemática con valvas y sutura de desgarros de cuello y vagina"
        ],
        [
          "Tejido (Restos Placentarios)",
          "10%",
          "Placenta expulsada incompleta con falta de cotiledones o membranas",
          "Revisión manual/instrumental de la cavidad uterina bajo anestesia"
        ],
        [
          "Trombina (Coagulopatía)",
          "1%",
          "Sangre no coagula, sangrado difuso 'en napa' por venopunciones",
          "Corrección con hemoderivados (Plasma, Crioprecipitados, Plaquetas)"
        ]
      ]
    },
    "severityTable": {
      "title": "Clasificación del Choque Hipovolémico en Hemorragia Postparto (Código Rojo)",
      "headers": [
        "Grado de Shock",
        "Pérdida Hemática",
        "Presión Sistólica",
        "Frecuencia Cardíaca",
        "Síntomas y Conducta"
      ],
      "rows": [
        [
          "Compensado",
          "10 - 15% (500-1.000 mL)",
          "Normal (> 90 mmHg)",
          "70 - 90 lpm",
          "Palidez leve, mareos. Iniciar masaje y oxitocina."
        ],
        [
          "Leve",
          "15 - 25% (1.000-1.500 mL)",
          "80 - 90 mmHg",
          "90 - 100 lpm",
          "Palidez, sudoración, taquicardia. Cristaloides + Ácido Tranexámico 1g."
        ],
        [
          "Moderado",
          "25 - 35% (1.500-2.000 mL)",
          "70 - 80 mmHg",
          "100 - 120 lpm",
          "Inquietud, oliguria, palidez marcada. Transfusión de 2 U de Glóbulos Rojos."
        ],
        [
          "Severo",
          "≥ 35% (> 2.000 mL)",
          "< 70 mmHg",
          "> 120 lpm",
          "Sopor, anuria, colapso circulatorio. Protocolo Transfusión Masiva (1:1:1) + Cirugía."
        ]
      ]
    },
    "treatmentTable": {
      "title": "Perfil Farmacológico de los Fármacos Uterotónicos en Atonía Uterina (MINSAL)",
      "headers": [
        "Fármaco",
        "Dosis y Vía de Administración",
        "Mecanismo de Acción",
        "Contraindicaciones Clave EUNACOM"
      ],
      "rows": [
        [
          "Oxitocina (1.ª Línea)",
          "5-10 UI EV lento o 10 UI IM, luego 20-40 UI en infusión continua",
          "Agonista de receptores de oxitocina miometriales",
          "Hipotensión transitoria por bolo EV rápido. Sin contraindicaciones mayores."
        ],
        [
          "Ácido Tranexámico",
          "1 g EV en 10 min dentro de las primeras 3 horas del sangrado",
          "Antifibrinolítico (inhibe la conversión de plasminógeno)",
          "Antecedente de trombosis activa severa. Seguro y obligatorio en HPI."
        ],
        [
          "Metilergonovina (Ergometrina)",
          "0.2 mg por vía intramuscular (repetible a los 20 min, máx 1 mg)",
          "Alcaloide de cornezuelo de centeno (contracción tetánica)",
          "¡CONTRAINDICADO EN HIPERTENSIÓN ARTERIAL, PREECLAMPSIA Y CARDIOPATÍA!"
        ],
        [
          "Misoprostol",
          "800 mcg por vía sublingual o intrarrectal en dosis única",
          "Análogo sintético de Prostaglandina E1",
          "Hipersensibilidad. Seguro en hipertensas. Provoca calofríos y fiebre."
        ],
        [
          "Carboprost (PGF2α)",
          "0.25 mg intramuscular profunda cada 15-90 min (máx 8 dosis)",
          "Análogo de Prostaglandina F2 alfa (vasoconstricción miometrial)",
          "¡CONTRAINDICADO EN PACIENTES CON ASMA BRONQUIAL! (Broncoespasmo grave)."
        ]
      ]
    },
    "vignette": "Paciente de 32 años, multípara de 3, con embarazo gemelar de término, finaliza el parto vaginal de ambos gemelos sin incidentes tras un trabajo de parto prolongado de 14 horas. Diez minutos después del alumbramiento, la matrona alerta al médico debido a que la paciente presenta sangrado vaginal masivo con coágulos oscuros. Al examen físico: la paciente se encuentra pálida, con PA de 85/50 mmHg y FC de 118 lpm. A la palpación abdominal, el útero se encuentra a 4 cm por encima del ombligo, completamente blando, esponjoso, atónico y sin tono contráctil. El médico confirma que la paciente tiene antecedentes de preeclampsia diagnosticada durante el control prenatal con cifras habituales de 150/95 mmHg.",
    "explicacion": "El cuadro clínico corresponde a una Hemorragia Postparto Inmediata severa por Atonía Uterina (Tono de las 4T), favorecida por la sobredistensión uterina del embarazo gemelar y el trabajo de parto prolongado. La conducta médica inmediata consiste en activar el Código Rojo Obstétrico, colocar dos vías periféricas gruesas, iniciar masaje uterino bimanual continuo, administrar Ácido Tranexámico (1 g EV en infusión rápida) e indicar tratamiento uterotónico de primera línea con Oxitocina en bolo lento e infusión continua. Sin embargo, una consideración farmacológica VITAL y de alto rendimiento en el EUNACOM es que en esta paciente está FORMALMENTE CONTRAINDICADA la administración de Metilergonovina (ergometrina) debido a su antecedente de hipertensión arterial / preeclampsia, ya que este fármaco produce vasoconstricción sistémica aguda y puede desencadenar una crisis hipertensiva letal con hemorragia cerebral. En su lugar, el segundo uterotónico a utilizar es el Misoprostol (800 mcg sublingual o rectal) y, de persistir la atonía, recurrir al taponamiento intrauterino con Balón de Bakri.",
    "keyPoints": [
      "Definición de HPI: Pérdida ≥ 1.000 mL o sangrado con signos de inestabilidad en las primeras 24 horas.",
      "Causa más frecuente de HPI: Atonía Uterina (70% de los casos).",
      "Manejo inicial de la atonía: Masaje uterino bimanual + Oxitocina EV + Ácido Tranexámico 1g EV en < 3 horas.",
      "¡METILERGONOVINA CONTRAINDICADA EN HIPERTENSAS / PREECLAMPSIA! Causa crisis hipertensiva y ACV.",
      "¡CARBOPROST CONTRAINDICADO EN PACIENTES ASMÁTICAS! Causa broncoespasmo severo letal.",
      "Misoprostol 800 mcg rectal/sublingual: Uterotónico seguro y de elección en pacientes con hipertensión.",
      "Taponamiento con Balón de Bakri (300-500 mL): Procedimiento mecánico de rescate de elección antes de cirugía.",
      "Trauma del canal (20%): Si el útero está DURO pero sigue sangrando rutilante, buscar y suturar desgarros.",
      "Inversión Uterina: Desencadenada por tracción indebida del cordón con útero relajado. Requiere restitución manual de Johnson."
    ],
    "questions": [
      {
        "stem": "Una paciente de 28 años con antecedente de Preeclampsia con criterios de severidad en tratamiento con labetalol presenta una hemorragia postparto masiva de 1.200 mL tras un parto vaginal. Al examen físico se palpa un útero atónico, supraumbilical y blando. Se inicia masaje bimanual y oxitocina endovenosa continua. El médico de turno solicita un segundo uterotónico para frenar el sangrado. ¿Cuál de los siguientes fármacos uterotónicos está FORMALMENTE CONTRAINDICADO en esta paciente?",
        "options": [
          {
            "id": "A",
            "text": "Misoprostol sublingual"
          },
          {
            "id": "B",
            "text": "Metilergonovina intramuscular"
          },
          {
            "id": "C",
            "text": "Ácido Tranexámico endovenoso"
          },
          {
            "id": "D",
            "text": "Carbetocina endovenosa"
          },
          {
            "id": "E",
            "text": "Balón hidrostático de Bakri"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El misoprostol es seguro en pacientes hipertensas y es el fármaco de elección alternativa.\nB) Correcta. La Metilergonovina (Ergometrina / Maleato de metilergonovina) es un alcaloide derivado del cornezuelo de centeno que produce vasoconstricción arterial periférica generalizada y contracción tetánica miometrial. Por ende, está ABSOLUTAMENTE CONTRAINDICADA en pacientes con antecedentes de preeclampsia, hipertensión arterial gestacional o crónica y cardiopatía isquémica, debido a que su administración puede precipitar una crisis hipertensiva severa con rotura de vasos cerebrales (ACV hemorrágico), edema agudo de pulmón o infarto agudo de miocardio. En esta paciente hipertensa debe utilizarse Misoprostol o Carbetocina.\nC) Incorrecta. El ácido tranexámico es un antifibrinolítico seguro y mandatorio en HPI.\nD) Incorrecta. La carbetocina es un análogo de la oxitocina y puede utilizarse.\nE) Incorrecta. El balón de Bakri es un dispositivo mecánico altamente recomendado.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.009"
      },
      {
        "stem": "Una puérpera inmediata de parto vaginal presenta sangrado genital rojo rutilante activo continuo y abundante. A la palpación abdominal el fondo uterino se palpa firme, contraído como una pelota ('globo de seguridad de Pinard') a nivel infraumbilical. Se revisó la placenta y se constató completa con todas sus membranas. ¿Cuál es la causa más probable de la hemorragia y cuál es la conducta médica indicada?",
        "options": [
          {
            "id": "A",
            "text": "Atonía uterina oculta; administrar de inmediato una segunda dosis de oxitocina y metilergonovina"
          },
          {
            "id": "B",
            "text": "Trauma del canal del parto (desgarro cervical o vaginal); colocar valvas ginecológicas, explorar minuciosamente el canal y suturar las lesiones sangrantes"
          },
          {
            "id": "C",
            "text": "Retención de cotiledón aberrante; realizar legrado uterino instrumental de urgencia a ciegas"
          },
          {
            "id": "D",
            "text": "Coagulación intravascular diseminada; infundir 4 unidades de plasma fresco congelado"
          },
          {
            "id": "E",
            "text": "Inversión uterina puerperal; intentar reposición manual inmediata de Johnson"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. En la atonía el útero está blando y subinvolucionado, mientras que aquí está firme y bien contraído.\nB) Correcta. La presencia de hemorragia genital activa postparto en presencia de un útero FIRME, BIEN CONTRAÍDO e infraumbilical, con placenta íntegra revisada, orienta con certeza a una causa traumática (Trauma de las 4T: desgarros del cuello uterino, de la pared vaginal o del periné). La conducta obligatoria es trasladar a la paciente a sala de partos o pabellón con buena iluminación, instalar valvas ginecológicas para inspeccionar el cuello uterino en sus 360 grados y las paredes vaginales, y proceder a la hemostasia quirúrgica mediante sutura de los desgarros.\nC) Incorrecta. Si la placenta estaba completa y el útero está contraído, no se justifica legrado a ciegas.\nD) Incorrecta. El sangrado rutilante localizado con útero duro descarta coagulopatía primaria.\nE) Incorrecta. En la inversión uterina el fondo desaparece del abdomen y se palpa una masa en vagina.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.009"
      },
      {
        "stem": "En una paciente con hemorragia postparto inmediata por atonía uterina que no ha respondido al masaje uterino bimanual vigoroso ni a la administración combinada escalonada de oxitocina, ácido tranexámico y misoprostol, ¿cuál es el siguiente paso terapéutico conservador antes de decidir una laparotomía exploradora quirúrgica?",
        "options": [
          {
            "id": "A",
            "text": "Realizar legrado cortante enérgico con cureta metálica"
          },
          {
            "id": "B",
            "text": "Instalación de un balón intrauterino de taponamiento hidrostático (Balón de Bakri)"
          },
          {
            "id": "C",
            "text": "Histerectomía obstétrica total de emergencia como primer recurso"
          },
          {
            "id": "D",
            "text": "Administración de heparina sódica en infusión continua"
          },
          {
            "id": "E",
            "text": "Mantener conducta expectante con reposo en cama y bolsa de arena sobre el abdomen"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El legrado cortante en un útero atónico no detiene el sangrado vascular miometrial y perfora la pared.\nB) Correcta. El Balón de Taponamiento Intrauterino (Balón de Bakri) es el procedimiento conservador no quirúrgico de rescate de elección ante la atonía uterina refractaria a fármacos uterotónicos. Se inserta en la cavidad uterina y se insufla con 300 a 500 mL de solución salina, ejerciendo una compresión hidrostática uniforme directa sobre los lechos vasculares miometriales. Logra controlar la hemorragia en más del 80-85% de los casos, evitando la laparotomía y preservando la fertilidad de la mujer.\nC) Incorrecta. La histerectomía es el último recurso quirúrgico definitivo si fracasan las medidas conservadoras.\nD) Incorrecta. La heparina aumentaría la hemorragia masiva y mataría a la paciente.\nE) Incorrecta. Dejar avanzar el shock es negligencia médica.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.009"
      },
      {
        "stem": "Durante el alumbramiento de un parto vaginal, el profesional a cargo tracciona con fuerza el cordón umbilical en momentos en que el útero no presentaba contracción. De forma instantánea la paciente presenta dolor abdominal agudo severo, palidez extrema, bradicardia marcada a 45 lpm y shock profundo con presión arterial de 60/30 mmHg. A la palpación abdominal el útero no se palpa en el abdomen y en la especuloscopía se aprecia una gran masa globular rojo-violácea que asoma por el introito vaginal con la placenta aún adherida. ¿Cuál es el diagnóstico clínico de esta catástrofe y cuál es la conducta médica inmediata?",
        "options": [
          {
            "id": "A",
            "text": "Placenta previa sangrante; cesárea urgente"
          },
          {
            "id": "B",
            "text": "Inversión Uterina Puerperal en shock neurogénico; suspender uterotónicos, relajar el miometrio y realizar la reposición manual inmediata del fondo uterino (Maniobra de Johnson)"
          },
          {
            "id": "C",
            "text": "Rotura uterina completa; infundir oxitocina a dosis máximas"
          },
          {
            "id": "D",
            "text": "Embolia de líquido amniótico; desfibrilación ventricular inmediata"
          },
          {
            "id": "E",
            "text": "Prolapso de cúpula vaginal; analgesia ambulatoria y derivación diferida"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La placenta previa ocurre antes del parto, no en el postparto.\nB) Correcta. La combinación de tracción excesiva del cordón sobre un útero relajado, colapso hemodinámico severo con bradicardia paradójica (shock neurogénico por tracción de los nervios peritoneales), desaparición del fondo uterino en el abdomen y exteriorización de una masa carnosa globular por la vagina es el cuadro patognomónico de una Inversión Uterina Puerperal. Constituye una emergencia con altísima mortalidad materna. La conducta consiste en: 1) Suspender inmediatamente cualquier uterotónico; 2) Proporcionar soporte circulatorio y analgesia/anestesia profunda para relajar el anillo cervical constrictor; 3) Realizar la Reposición Manual Inmediata (Maniobra de Johnson), empujando el fondo uterino hacia arriba a través del anillo de inversión hacia la cavidad abdominal; y 4) Una vez corregida la posición, recién iniciar oxitocina para mantener el útero contraído.\nC) Incorrecta. No es una rotura miometrial sino una invaginación de la pared.\nD) Incorrecta. La embolia de líquido amniótico produce colapso respiratorio con hipoxemia severa sin masa exteriorizada en vagina.\nE) Incorrecta. El cuadro es una emergencia vital mayor.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.009"
      }
    ]
  },
  {
    "id": "ob-19",
    "classId": "ob-19",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Parto Prematuro, Mecanismo del Parto, Puerperio & Urgencias Obstétricas",
    "topicLabel": "19.19",
    "title": "Infecciones Puerperales: Endometritis Puerperal y Patología Mamaria (Mastitis Congestiva vs Infecciosa vs Absceso)",
    "perfilCode": "3.01.1.010",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Manejo clínico según Guía Perinatal MINSAL.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#43) · EUNACOM Diciembre 2022 (Q#14) · EUNACOM Julio 2021 (Q#16)",
    "frecuencia": "Alta rentabilidad · Esquema Clindamicina + Gentamicina EV en endometritis y no suspender lactancia materna en mastitis infecciosa",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Fiebre Puerperal",
    "diagramRows": [
      {
        "t": "Fiebre en el Puerperio (T° ≥ 38°C en 2 tomas separadas por 6h, excluyendo primeras 24h)",
        "s": "Buscar foco clínico: ¿Útero subinvolucionado y loquios fétidos? ¿Mama inflamada? ¿Herida quirúrgica? ¿Orina?",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Foco Clínico de la Infección Puerperal",
        "al": "Endometritis vs Patología Mamaria",
        "ll": "Dolor Uterino + Loquios Fétidos + Fiebre (2°-4° día)",
        "left": {
          "t": "ENDOMETRITIS PUERPERAL",
          "s": "Hospitalización obligatoria · Terapia EV de elección: Clindamicina 900 mg c/8h + Gentamicina 5 mg/kg/día EV hasta 48h afebril",
          "type": "crit"
        },
        "rl": "Dolor y Eritema Mamario Sectorial + Fiebre (2.ª a 4.ª semana)",
        "right": {
          "t": "MASTITIS PUERPERAL",
          "s": "Congestiva (bilateral sin fiebre) vs Infecciosa (Staph. aureus) -> Cloxacilina o Cefadroxilo oral · ¡NUNCA SUSPENDER LACTANCIA!",
          "type": "warn"
        }
      },
      {
        "k": "split",
        "q": "Evolución de la Mastitis con Antibióticos",
        "al": "¿Resuelve vs Masa fluctuante?",
        "ll": "Cede eritema y fiebre en 48 horas",
        "left": {
          "t": "Completar tratamiento oral x 10-14 días",
          "s": "Vaciamiento mamario frecuente y adecuada técnica de acople al pecho",
          "type": "acc"
        },
        "rl": "Masa fluctuante dolorosa con colecciones (Ecografía)",
        "right": {
          "t": "ABSCESO MAMARIO PUERPERAL",
          "s": "Drenaje quirúrgico o punción aspirativa ecoguiada + Mantener antibióticos EV/oral",
          "type": "crit"
        }
      }
    ],
    "contexto": "La Fiebre Puerperal o Morbilidad Febril Puerperal se define como una temperatura axilar ≥ 38.0°C en dos tomas separadas por al menos 6 horas, que se presenta desde el segundo día del puerperio hasta el día 42 postparto (las primeras 24 horas suelen deberse a deshidratación o reabsorción tisular). La causa más común de fiebre puerperal es la Endometritis Puerperal (especialmente tras cesárea), que exige tratamiento endovenoso de amplio espectro para flora polimicrobiana con Clindamicina más Gentamicina. Por otro lado, en la patología mamaria del puerperio, la regla de oro impostergable es que la mastitis infecciosa por Staphylococcus aureus se trata con antibióticos antiestafilocócicos y NUNCA SE DEBE SUSPENDER LA LACTANCIA MATERNA.",
    "contentSections": [
      {
        "subhead": "1. Endometritis Puerperal: Factores de Riesgo y Clínica",
        "paragraphs": [
          "• <strong>Definición y Epidemiología:</strong> Infección bacteriana polimicrobiana ascendente de la decidua y miometrio superficial. Es la causa más frecuente de morbilidad febril puerperal (incidencia del 1-3% en parto vaginal y del <strong>15 al 30% en cesáreas de urgencia</strong> sin profilaxis antibiótica).",
          "• <strong>Factores de Riesgo Mayores:</strong> <strong>Parto por Cesárea (el factor de riesgo más importante)</strong>, trabajo de parto prolongado, rotura prematura de membranas prolongada (> 12-18 horas), múltiples tactos vaginales, alumbramiento manual y corioamnionitis previa.",
          "• <strong>Etiología Microbiológica:</strong> Infección <strong>polimicrobiana mixta</strong>: bacterias aerobias (<em>Escherichia coli</em>, <em>Streptococcus agalactiae</em>, <em>Enterococcus faecalis</em>) y anaerobias estrictas (<em>Bacteroides fragilis</em>, <em>Prevotella</em>, <em>Peptostreptococcus</em>).",
          "• <strong>Cuadro Clínico Clásico (debuta típicamente al 2.° a 4.° día postparto):</strong>",
          "  - <strong>Fiebre sostenida ≥ 38.0°C con calofríos.</strong>",
          "  - <strong>Dolor uterino espontáneo y a la palpación bimanual.</strong>",
          "  - <strong>Subinvolución uterina (útero blando, mayor al esperado).</strong>",
          "  - <strong>Loquios patológicos (loquios turbios, abundantes, achocolatados o con olor extraordinariamente FÉTIDO).</strong>"
        ]
      },
      {
        "subhead": "2. Tratamiento Hospitalizado de la Endometritis Puerperal",
        "paragraphs": [
          "• <strong>Hospitalización OBLIGATORIA:</strong> No se maneja de forma ambulatoria debido al riesgo de celulitis pelviana, peritonitis, tromboflebitis pelviana séptica o shock séptico.",
          "• <strong>Esquema Antibiótico Endovenoso de Elección (Gold Standard MINSAL):</strong>",
          "  - <strong>CLINDAMICINA 900 mg EV cada 8 horas + GENTAMICINA 5 mg/kg/día EV en dosis única diaria</strong> (o 1.5 mg/kg cada 8 horas).",
          "  - Tasa de curación > 90-95%. La clindamicina proporciona excelente cobertura contra anaerobios (incluido <em>Bacteroides</em>) y cocos Gram positivos; la gentamicina cubre bacilos Gram negativos enterobacterianos.",
          "  - Si se sospecha compromiso por <em>Enterococcus</em> o no hay respuesta en 48-72 horas, se añade <strong>Ampicilina (2g EV c/6h)</strong>.",
          "• <strong>Duración del Tratamiento:</strong> Se mantiene la antibioticoterapia endovenosa hasta que la paciente cumpla <strong>48 horas completamente afebril y asintomática</strong>. En ese momento se da el alta; <strong>NO se requiere continuar antibióticos por vía oral a domicilio</strong> si la respuesta clínica fue favorable."
        ]
      },
      {
        "subhead": "3. Patología Mamaria Puerperal: Congestión vs Mastitis Infecciosa vs Absceso",
        "paragraphs": [
          "• <strong>1) Congestión / Ingurgitación Mamaria (Bilateral):</strong>",
          "  - Ocurre típicamente en los primeros días postparto (2° a 4° día) coincidiendo con la 'bajada de leche'.",
          "  - Ambas mamas se palpan duras, tensas, calientes y dolorosas, pero <strong>NO hay signos inflamatorios focales ni fiebre significativa</strong> (a lo más febrícula transitoria < 38°C por < 24h).",
          "  - Manejo: Fisiológico. Compresas tibias previas a la toma, masajes circulares, extracción manual o sacaleches y lactancia a libre demanda.",
          "• <strong>2) Mastitis Infecciosa Puerperal (Unilateral):</strong>",
          "  - Ocurre típicamente entre la <strong>2.ª y 4.ª semana del puerperio</strong>.",
          "  - Etiología: <strong>Staphylococcus aureus (en más del 85-90% de los casos)</strong>, que ingresa a través de grietas del pezón.",
          "  - Clínica: <strong>Fiebre alta repentina (≥ 38.5-39.0°C) con calofríos</strong>, compromiso del estado general y una <strong>zona inflamatoria sectorial en una mama (placa eritematosa, caliente, indurada y exquisitamente dolorosa)</strong>, habitualmente en el cuadrante superoexterno.",
          "  - Tratamiento Farmacológico: Antibióticos antiestafilocócicos orales durante 10 a 14 días: <strong>Cloxacilina 500 mg cada 6 horas vía oral</strong> o <strong>Cefadroxilo 500 mg cada 12 horas vía oral</strong> (o Flucloxacilina). En alérgicas: Clindamicina o Eritromicina.",
          "  - <strong>REGLA DE ORO FUNDAMENTAL (Pregunta Fija EUNACOM):</strong> <strong>NUNCA SUSPENDER LA LACTANCIA MATERNA</strong>. Se debe <strong>mantener el amamantamiento en ambas mamas</strong> (iniciando por la mama sana para estimular el reflejo de eyección) y asegurar el vaciamiento mamario completo. La leche materna no enferma al lactante (el germen proviene de su propia orofaringe) y la suspensión de la lactancia provoca estasis láctea que desencadena un absceso.",
          "• <strong>3) Absceso Mamario Puerperal:</strong>",
          "  - Complicación de una mastitis infecciosa no tratada o con tratamiento tardío.",
          "  - Se palpa una <strong>masa fluctuante dolorosa con eritema cutáneo</strong> que no responde tras 48-72 horas de antibióticos.",
          "  - Confirmación: Ecografía mamaria (muestra colección líquida anecoica/hipoecoica con detritos).",
          "  - Tratamiento: <strong>Drenaje quirúrgico con incisión y contraberturas</strong> o <strong>punción-aspiración ecoguiada repetida</strong> + antibióticos EV/orales. Se puede continuar amamantando del pecho contralateral (y del afecto si la incisión no compromete la areola/pezón)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de los Cuadros Inflamatorios Mamarios en el Puerperio",
      "headers": [
        "Característica",
        "Congestión Mamaria",
        "Mastitis Infecciosa",
        "Absceso Mamario"
      ],
      "rows": [
        [
          "Momento de Aparición",
          "2° a 4° día postparto ('bajada de leche')",
          "2.ª a 4.ª semana postparto",
          "Complicación a los 3-7 días de mastitis mal tratada"
        ],
        [
          "Afectación",
          "Bilateral, difusa en ambas mamas",
          "Unilateral, sectorial en cuña (típico superoexterno)",
          "Unilateral, masa delimitada fluctuante"
        ],
        [
          "Fiebre y Compromiso",
          "Afebril o febrícula leve transitoria (< 24h)",
          "Fiebre alta (38.5-40°C), calofríos intensos",
          "Fiebre remitente o persistente"
        ],
        [
          "Etiología",
          "Retención láctea y congestión venolinfática",
          "Infección bacteriana por Staphylococcus aureus",
          "Colección purulenta tabicada por S. aureus"
        ],
        [
          "Lactancia Materna",
          "Mantener lactancia a libre demanda",
          "MANTENER LACTANCIA (¡Prohibido suspender!)",
          "Mantener en mama sana; drenar mama afecta"
        ],
        [
          "Tratamiento",
          "Calor local, masaje y vaciamiento manual",
          "Cloxacilina o Cefadroxilo oral x 10-14 días",
          "Drenaje quirúrgico / punción + Cloxacilina EV/oral"
        ]
      ]
    },
    "vignette": "Paciente de 26 años, primípara, cursando su 3° día post-cesárea de urgencia por falla de inducción tras 18 horas de membranas rotas, consulta en el servicio de hospitalizados por fiebre de 38.8°C con calofríos intensos y dolor abdominal bajo. Al examen físico: PA 115/70 mmHg, FC 102 lpm, T° 38.7°C. El abdomen muestra la herida operatoria limpia y sin eritema ni secreciones. A la palpación profunda, el útero se encuentra palpable 2 cm por encima del ombligo, muy reblandecido y exquisitamente doloroso a la movilización bimanual. A la especuloscopía se constata la salida por el orificio cervical de abundantes loquios turbios, achocolatados y de olor intensamente fétido y fétido.",
    "explicacion": "El cuadro clínico de morbilidad febril al tercer día postparto, asociado a dolor hipogástrico, útero subinvolucionado doloroso y blando, y loquios fétidos abundantes en una paciente con antecedente de cesárea de urgencia y rotura prolongada de membranas, es diagnóstico indiscutible de Endometritis Puerperal. La conducta terapéutica de elección indicada por el consenso nacional del MINSAL es la hospitalización en sala de aislamiento obstétrico, solicitud de hemograma y cultivos, y el inicio inmediato de antibioticoterapia parenteral de amplio espectro combinada con Clindamicina (900 mg EV cada 8 horas) más Gentamicina (5 mg/kg/día EV en monodosis diaria), manteniendo el esquema por vía endovenosa hasta cumplir 48 horas continuas afebril y asintomática.",
    "keyPoints": [
      "Endometritis puerperal: Principal causa de morbilidad febril puerperal (debuta al 2°-4° día).",
      "Factor de riesgo mayor de endometritis: Parto por Cesárea (especialmente de urgencia).",
      "Clínica de endometritis: Fiebre + dolor hipogástrico + útero subinvolucionado + loquios fétidos.",
      "Antibioticoterapia de elección en endometritis: Clindamicina 900 mg c/8h EV + Gentamicina 5 mg/kg/día EV.",
      "Duración: Mantener antibióticos EV hasta 48 horas afebril. NO requiere mantención oral al alta.",
      "Congestión mamaria: Bilateral, sin fiebre ni eritema. Se maneja con vaciamiento y calor.",
      "Mastitis infecciosa: Unilateral, eritema sectorial, fiebre alta con calofríos. Germen: S. aureus.",
      "Tratamiento de mastitis: Cloxacilina o Cefadroxilo oral x 10-14 días + NUNCA SUSPENDER LACTANCIA.",
      "Absceso mamario: Colección fluctuante comprobada por ecografía. Requiere drenaje quirúrgico o punción."
    ],
    "questions": [
      {
        "stem": "Una puérpera de 4 días de una cesárea de urgencia presenta fiebre de 38.9°C, calofríos y dolor abdominal en hipogastrio. Al examen físico se constata útero blando palpable a 3 cm sobre el ombligo, muy doloroso al tacto, con salida de loquios achocolatados con olor putrefacto. La herida quirúrgica se encuentra sana y sin eritema. ¿Cuál es el tratamiento antimicrobiano empírico de primera línea indicado?",
        "options": [
          {
            "id": "A",
            "text": "Amoxicilina oral 500 mg cada 8 horas en forma ambulatoria por 7 días"
          },
          {
            "id": "B",
            "text": "Hospitalización para tratamiento endovenoso con Clindamicina más Gentamicina"
          },
          {
            "id": "C",
            "text": "Ciprofloxacino oral más Metronidazol oral en domicilio"
          },
          {
            "id": "D",
            "text": "Ceftriaxona intramuscular en dosis única ambulatoria"
          },
          {
            "id": "E",
            "text": "Vancomicina endovenosa más Imipenem en dosis de choque"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La vía oral y el manejo ambulatorio están estrictamente contraindicados por el alto riesgo de sepsis y absceso pelviano.\nB) Correcta. El cuadro de fiebre, dolor uterino, útero subinvolucionado blando y loquios fétidos tras una cesárea corresponde a una Endometritis Puerperal típica. Al tratarse de una infección polimicrobiana que involucra anaerobios estrictos del tracto genital y enterobacterias, el tratamiento de primera línea respaldado por el MINSAL y la literatura médica internacional es la HOSPITALIZACIÓN OBLIGATORIA para antibioticoterapia parenteral combinada con Clindamicina (900 mg cada 8h EV) + Gentamicina (5 mg/kg/día EV en dosis única), manteniéndose hasta que la paciente esté 48 horas afebril.\nC) Incorrecta. El ciprofloxacino oral no cubre adecuadamente la flora anaerobia miometrial y la vía oral es insuficiente.\nD) Incorrecta. La dosis única es totalmente ineficaz para erradicar una endometritis.\nE) Incorrecta. Reservado únicamente para sepsis refractaria en UCI.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.010"
      },
      {
        "stem": "Una primípara de 3 semanas de puerperio en lactancia materna exclusiva acude a la urgencia por presentar fiebre de 39.2°C con calofríos intensos, mialgias y dolor severo en la mama derecha de 24 horas de evolución. Al examen físico se aprecia en el cuadrante superoexterno de la mama derecha una placa eritematosa de 6 cm, caliente, indurada y muy dolorosa a la palpación, sin fluctuación. La mama izquierda y ambas axilas son normales. Se observan pequeñas grietas en ambos pezones. ¿Cuál es la conducta terapéutica correcta?",
        "options": [
          {
            "id": "A",
            "text": "Suspender definitivamente la lactancia materna e indicar Ciprofloxacino oral por 7 días"
          },
          {
            "id": "B",
            "text": "Prescribir Cloxacilina o Cefadroxilo oral por 10 a 14 días y RECOMENDAR CONTINUAR con el amamantamiento en ambas mamas"
          },
          {
            "id": "C",
            "text": "Realizar drenaje quirúrgico inmediato con anestesia general en pabellón"
          },
          {
            "id": "D",
            "text": "Indicar solo compresas frías y paracetamol sin antibióticos"
          },
          {
            "id": "E",
            "text": "Suspender la lactancia en la mama derecha e inhibir la prolactina con cabergolina"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Suspender la lactancia está formalmente contraindicado porque empeora la estasis láctea.\nB) Correcta. La presentación de fiebre alta, calofríos y una placa eritematosa caliente sectorial unilateral en una mama en el primer mes del puerperio es diagnóstica de Mastitis Infecciosa Puerperal, causada en más del 90% por Staphylococcus aureus procedente de la orofaringe del lactante. El tratamiento de elección consiste en un antibiótico con cobertura antiestafilocócica (Cloxacilina oral 500 mg c/6h o Cefadroxilo 500 mg c/12h) durante 10 a 14 días. La regla de oro fundamental es que NO se debe suspender la lactancia materna; al contrario, debe mantenerse el amamantamiento frecuente y vaciamiento completo del pecho para evitar la estasis de leche que predispone a la formación de un absceso.\nC) Incorrecta. El drenaje quirúrgico solo está indicado si se ha formado un absceso fluctuante comprobado ecográficamente.\nD) Incorrecta. La mastitis infecciosa requiere antibióticos orales obligatorios.\nE) Incorrecta. La cabergolina para inhibir lactancia es un error grave en una mujer que desea amamantar.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.010"
      }
    ]
  },
  {
    "id": "ob-20",
    "classId": "ob-20",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Parto Prematuro, Mecanismo del Parto, Puerperio & Urgencias Obstétricas",
    "topicLabel": "19.20",
    "title": "Aloinmunización Rh e Incompatibilidad de Grupo Materno-Fetal: Profilaxis con Inmunoglobulina Anti-D y Manejo de la Gestante Sensibilizada",
    "perfilCode": "3.01.1.012",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por Guía Perinatal MINSAL de Prevención de la Enfermedad Hemolítica Perinatal.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#44) · EUNACOM Julio 2023 (Q#21) · EUNACOM Diciembre 2021 (Q#16)",
    "frecuencia": "Alta rentabilidad · Esquema de Inmunoglobulina Anti-D (semana 28 y < 72h postparto) y Doppler de ACM para anemia fetal",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico, Profilaxis y Seguimiento de la Aloinmunización Rh",
    "diagramRows": [
      {
        "t": "Gestante Rh (-) D Negativa en Control Prenatal del 1° Trimestre",
        "s": "Solicitar Grupo Sanguíneo y Rh + Test de Coombs Indirecto materno",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Resultado del Test de Coombs Indirecto",
        "al": "Coombs Negativo (No Sensibilizada) vs Coombs Positivo (Sensibilizada)",
        "ll": "Coombs Indirecto NEGATIVO (No Sensibilizada)",
        "left": {
          "t": "PROFILAXIS CON INMUNOGLOBULINA ANTI-D",
          "s": "1) Repetir Coombs a las 28 semanas · 2) Administrar Inmunoglobulina Anti-D (Rhogam 300 mcg IM) a las 28 semanas · 3) Segunda dosis en < 72h postparto si RN es Rh (+)",
          "type": "acc"
        },
        "rl": "Coombs Indirecto POSITIVO (Sensibilizada)",
        "right": {
          "t": "GESTANTE SENSIBILIZADA (¡NO DAR RHOGAM!)",
          "s": "Titulación seriada de anticuerpos · Si título ≥ 1:16 (título crítico) -> Evaluar Anemia Fetal con Doppler de Arteria Cerebral Media",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Evaluación de Anemia Fetal Severa por Doppler",
        "al": "Doppler ACM Normal vs Velocidad Sistólica Máxima > 1.5 MoM",
        "ll": "Velocidad Sistólica Máxima < 1.5 MoM",
        "left": {
          "t": "Anemia Fetal Leve o Ausente",
          "s": "Seguimiento Doppler semanal o quincenal hasta término",
          "type": "acc"
        },
        "rl": "Velocidad Sistólica Máxima ≥ 1.5 MoM",
        "right": {
          "t": "ANEMIA FETAL MODERADA A GRAVE",
          "s": "Cordocentesis percutánea diagnóstica y terapéutica -> Transfusión intravascular intrauterina de concentrado de hematíes O(-)",
          "type": "crit"
        }
      }
    ],
    "contexto": "La aloinmunización eritrocitaria por incompatibilidad del antígeno Rh D materno-fetal ocurre cuando una madre Rh negativa (D-) entra en contacto con eritrocitos de un feto Rh positivo (D+) heredado del padre, generando anticuerpos maternos de tipo IgG anti-D. En un segundo embarazo con feto Rh(+), estos anticuerpos IgG cruzan activamente la placenta y destruyen los glóbulos rojos fetales, desencadenando la Enfermedad Hemolítica Perinatal (EHP), con anemia severa, eritroblastosis fetal, falla cardíaca e hidrops fetalis letal. El médico general debe dominar a la perfección las indicaciones y tiempos de la profilaxis con Inmunoglobulina Anti-D y las pautas de manejo de la gestante ya sensibilizada.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Pruebas de Detección (Coombs Indirecto vs Directo)",
        "paragraphs": [
          "• <strong>Mecanismo Inmune:</strong> La madre Rh negativo carece del antígeno D. Durante un primer embarazo (o eventos de hemorragia feto-materna como parto, aborto, desprendimiento placentario o amniocentesis), eritrocitos fetales Rh positivos ingresan al torrente materno. El sistema inmune materno produce inicialmente anticuerpos IgM (que no cruzan placenta) y posteriormente <strong>anticuerpos de memoria de clase IgG (que cruzan libremente la placenta en futuros embarazos)</strong>.",
          "• <strong>Diferencia Fundamental entre Pruebas de Coombs (Pregunta Fija EUNACOM):</strong>",
          "  - <strong>Test de Coombs Indirecto:</strong> Se realiza en el <strong>suero de la MADRE</strong>. Detecta <strong>anticuerpos anti-D circulantes libres</strong>. Se solicita en el primer control prenatal a toda mujer Rh negativa para verificar si está o no sensibilizada.",
          "  - <strong>Test de Coombs Directo:</strong> Se realiza en los <strong>glóbulos rojos del RECIÉN NACIDO</strong> (sangre de cordón). Detecta <strong>anticuerpos maternos ya pegados / adheridos</strong> a la membrana del eritrocito neonatal. Si es positivo, confirma que el recién nacido padece Enfermedad Hemolítica."
        ]
      },
      {
        "subhead": "2. Protocolo de Profilaxis con Inmunoglobulina Anti-D (Rhogam)",
        "paragraphs": [
          "• <strong>¿A quién se administra?:</strong> A toda paciente <strong>Rh NEGATIVA NO SENSIBILIZADA (Coombs Indirecto Negativo)</strong>.",
          "• <strong>¿Cuándo NUNCA debe administrarse Rhogam?:</strong> <strong>A la paciente Rh negativa YA SENSIBILIZADA (Coombs Indirecto Positivo)</strong>. La inmunoglobulina anti-D es una profilaxis pasiva para evitar que se formen anticuerpos; si la paciente ya formó anticuerpos propios, la inmunoglobulina es totalmente inútil e ineficaz.",
          "• <strong>Esquema Estándar Oficial de Prevención (MINSAL / FIGO):</strong>",
          "  - <strong>Dosis Antenatal de Rutina:</strong> Administrar <strong>Inmunoglobulina Anti-D (300 mcg IM) a las 28 semanas de gestación</strong> (tras confirmar Coombs indirecto negativo). Cubre el riesgo de microtransfusiones feto-maternas silenciosas del tercer trimestre.",
          "  - <strong>Dosis Postparto:</strong> Administrar una segunda dosis de <strong>Inmunoglobulina Anti-D (300 mcg IM) dentro de las primeras 72 horas postparto</strong>, SIEMPRE Y CUANDO el recién nacido sea <strong>Rh POSITIVO (D+)</strong> y el Coombs directo no esté masivamente sensibilizado.",
          "• <strong>Dosis Adicionales Profilácticas Ante Eventos Potencialmente Sensibilizantes:</strong>",
          "  - Toda paciente Rh negativa no sensibilizada debe recibir 300 mcg IM (o 120-250 mcg si EG < 12 sem) dentro de las 72 horas de ocurrido cualquiera de los siguientes eventos: <em>1)</em> Aborto espontáneo o legrado; <em>2)</em> Embarazo ectópico; <em>3)</em> Mola hidatiforme; <em>4)</em> Procedimientos invasivos intrauterinos (amniocentesis, biopsia de vellosidades coriónicas); <em>5)</em> Traumatismo abdominal materno directo; <em>6)</em> Metrorragia del segundo o tercer trimestre; <em>7)</em> Versión cefálica externa."
        ]
      },
      {
        "subhead": "3. Manejo y Seguimiento de la Paciente Rh Sensibilizada",
        "paragraphs": [
          "• Se define por la presencia de un <strong>Test de Coombs Indirecto POSITIVO</strong>.",
          "• <strong>Titulación Seriada de Anticuerpos Maternos:</strong> Se titula la concentración de anticuerpos mensualmente hasta las 24 semanas y luego cada 2 semanas. El <strong>título crítico se establece habitualmente en 1:16 o 1:32</strong>. Por debajo de este umbral, el riesgo de hidrops o anemia severa es prácticamente nulo.",
          "• <strong>Evaluación No Invasiva de la Anemia Fetal (Estándar de Oro Actual):</strong>",
          "  - <strong>Doppler de la Velocidad Sistólica Máxima de la Arteria Cerebral Media (ACM):</strong> En presencia de anemia fetal, disminuye la viscosidad sanguínea y aumenta el gasto cardíaco compensatorio, elevándose la velocidad del flujo sanguíneo cerebral.",
          "  - Hallazgo patológico crítico: <strong>Velocidad sistólica máxima de ACM ≥ 1.5 Múltiplos de la Mediana (MoM)</strong> para la edad gestacional. Tiene una sensibilidad del 100% para pesquisar anemia fetal moderada a severa.",
          "• <strong>Tratamiento In Utero de la Anemia Fetal Grave:</strong>",
          "  - Se confirma mediante <strong>Cordocentesis percutánea</strong> (punción guiada por ecografía de la vena umbilical) para medir hematocrito fetal exacto.",
          "  - Si el hematocrito fetal es < 30% (o Hb < 10 g/dL), se realiza de forma simultánea una <strong>Transfusión Intravascular Intrauterina</strong> de concentrado de glóbulos rojos O Rh negativo leucodepletados e irradiados, logrando una supervivencia fetal superior al 90%."
        ]
      }
    ],
    "table": {
      "title": "Protocolo de Administración de Inmunoglobulina Anti-D (Rhogam) en Pacientes Rh Negativas",
      "headers": [
        "Situación Obstétrica",
        "Condición Materna Obligatoria",
        "Dosis y Vía",
        "Plazo Máximo de Administración"
      ],
      "rows": [
        [
          "Profilaxis Antenatal Rutinaria",
          "Coombs Indirecto Negativo a las 28 semanas",
          "300 mcg IM (1.500 UI)",
          "A las 28 semanas cumplidas de gestación"
        ],
        [
          "Profilaxis Postparto Inmediata",
          "Recién Nacido Rh Positivo y madre no sensibilizada",
          "300 mcg IM",
          "Dentro de las primeras 72 horas postparto (útil hasta día 28)"
        ],
        [
          "Aborto Espontáneo / ILE (< 12 sem)",
          "Madre Rh negativa no sensibilizada",
          "120 a 250 mcg IM",
          "Dentro de las 72 horas del aborto o legrado"
        ],
        [
          "Aborto / Ectópico / Trauma (≥ 12 sem)",
          "Madre Rh negativa no sensibilizada",
          "300 mcg IM",
          "Dentro de las 72 horas del evento clínico"
        ],
        [
          "Amniocentesis / Procedimiento Invasivo",
          "Madre Rh negativa no sensibilizada",
          "300 mcg IM",
          "Dentro de las 72 horas post-punción"
        ],
        [
          "Paciente YA SENSIBILIZADA (Coombs +)",
          "Coombs Indirecto Positivo (título > 1:4)",
          "¡NO ADMINISTRAR RHOGAM!",
          "Inútil; derivar a medicina materno-fetal"
        ]
      ]
    },
    "vignette": "Paciente de 25 años, primigesta de 10 semanas de gestación, acude a su primer control prenatal en el CESFAM. Dentro de los exámenes del primer trimestre se constata que la paciente pertenece al grupo sanguíneo A, factor Rh negativo (D-). La paciente no tiene antecedentes mórbidos, cirugías previas ni transfusiones de sangre. Su pareja es de grupo O, factor Rh positivo. El resultado del Test de Coombs Indirecto solicitado resulta NEGATIVO. La paciente pregunta muy angustiada qué significa ser Rh negativa y qué cuidados debe tener durante el embarazo para que su hijo no nazca con problemas.",
    "explicacion": "El hallazgo de grupo Rh negativo en una primigesta con Test de Coombs Indirecto negativo confirma que la paciente es Rh negativa NO SENSIBILIZADA. En este primer embarazo no existe riesgo de daño fetal por incompatibilidad Rh debido a que la madre no posee anticuerpos anti-D en su sangre. La consejería médica y conducta oficial consiste en tranquilizar a la paciente y explicarle el protocolo preventivo del MINSAL: 1) Repetir el Test de Coombs Indirecto a las 28 semanas de gestación; 2) Si sigue negativo, administrar una dosis profiláctica de Inmunoglobulina Anti-D (Rhogam 300 mcg IM) a las 28 semanas; 3) Administrar una segunda dosis dentro de las primeras 72 horas posteriores al parto si el recién nacido resulta ser Rh positivo; y 4) Recibir una dosis profiláctica de urgencia ante cualquier eventualidad de sangrado genital, traumatismo o aborto durante la gestación.",
    "keyPoints": [
      "Incompatibilidad Rh: Madre Rh(-) y feto Rh(+) heredado del padre biológico.",
      "Test de Coombs Indirecto: Mide anticuerpos libres en la SANGRE DE LA MADRE.",
      "Test de Coombs Directo: Mide anticuerpos adheridos en los GLÓBULOS ROJOS DEL RECIÉN NACIDO.",
      "Profilaxis con Inmunoglobulina Anti-D (300 mcg IM): A las 28 semanas y antes de 72h postparto si el RN es Rh(+).",
      "¡PROHIBIDO / INÚTIL administrar Rhogam si el Test de Coombs Indirecto ya es POSITIVO (Sensibilizada)!",
      "Toda paciente Rh(-) no sensibilizada debe recibir Rhogam tras aborto, ectópico, trauma o amniocentesis en < 72h.",
      "Título crítico de anticuerpos en sensibilizada: Habitualmente 1:16 a 1:32.",
      "Diagnóstico de anemia fetal no invasivo: Velocidad sistólica máxima en Arteria Cerebral Media (ACM) ≥ 1.5 MoM.",
      "Tratamiento de anemia fetal grave: Transfusión intravascular intrauterina por cordocentesis."
    ],
    "questions": [
      {
        "stem": "Una primigesta de 28 semanas de gestación, sana, con grupo sanguíneo O Rh negativo acude a su control de rutina. Su Test de Coombs Indirecto solicitado a las 28 semanas resulta NEGATIVO. Su esposo es Rh positivo conocido. ¿Cuál es la conducta médica indicada según las guías clínicas del MINSAL?",
        "options": [
          {
            "id": "A",
            "text": "Indicar interrupción inmediata del embarazo mediante cesárea electiva"
          },
          {
            "id": "B",
            "text": "Administrar Inmunoglobulina Anti-D (Rhogam) 300 mcg intramuscular profiláctica"
          },
          {
            "id": "C",
            "text": "No administrar ninguna vacuna ni fármaco hasta después del parto"
          },
          {
            "id": "D",
            "text": "Realizar amniocentesis diagnóstica para espectrofotometría de líquido amniótico"
          },
          {
            "id": "E",
            "text": "Indicar transfusión de plasma fresco congelado a la madre"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. No hay justificación de interrupción; el embarazo es fisiológico y sano.\nB) Correcta. En toda gestante Rh negativa no sensibilizada (confirmada por un Test de Coombs Indirecto negativo), las guías clínicas de MINSAL y los consensos internacionales indican la administración profiláctica rutinaria de Inmunoglobulina Anti-D a dosis de 300 mcg (1.500 UI) por vía intramuscular a las 28 semanas de gestación. Esta dosis antenatal previene la sensibilización materna que puede ocurrir por microtransfusiones feto-maternas asintomáticas durante el tercer trimestre. Si el recién nacido resulta ser Rh positivo al nacer, se administrará una segunda dosis dentro de las 72 horas postparto.\nC) Incorrecta. Esperar solo al postparto deja una ventana de riesgo de sensibilización del 1-2% en el tercer trimestre.\nD) Incorrecta. La amniocentesis es invasiva y solo se realiza ante sospecha de anemia en sensibilizadas graves.\nE) Incorrecta. El plasma no aporta anticuerpos anti-D terapéuticos.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.012"
      },
      {
        "stem": "Una multigesta de 16 semanas acude a control prenatal. Se constata grupo sanguíneo B Rh negativo con Test de Coombs Indirecto POSITIVO con títulos de 1:64. ¿Cuál de las siguientes afirmaciones es correcta respecto al manejo de esta paciente?",
        "options": [
          {
            "id": "A",
            "text": "Debe administrarse Inmunoglobulina Anti-D 300 mcg de inmediato para revertir los títulos de anticuerpos"
          },
          {
            "id": "B",
            "text": "Está contraindicada la administración de Inmunoglobulina Anti-D; debe evaluarse la presencia de anemia fetal mediante Doppler de la velocidad sistólica máxima de la arteria cerebral media"
          },
          {
            "id": "C",
            "text": "Debe realizarse de inmediato una exanguinotransfusión total materna"
          },
          {
            "id": "D",
            "text": "Se debe indicar legrado uterino terapéutico por inviabilidad fetal inminente"
          },
          {
            "id": "E",
            "text": "Los anticuerpos de tipo IgM no cruzan la placenta, por lo que el feto no corre ningún peligro"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La administración de inmunoglobulina anti-D en una mujer ya sensibilizada (Coombs positivo) es totalmente inútil, pues la profilaxis previene la respuesta inmune primaria pero no tiene ningún efecto sobre los linfocitos B de memoria ya activados ni sobre los anticuerpos preexistentes.\nB) Correcta. La paciente es una gestante Rh (-) SENSIBILIZADA con títulos de anticuerpos de 1:64, muy por encima del título crítico (1:16). Por ende, está formalmente contraindicada la inmunoglobulina anti-D y la paciente debe ser derivada a la Unidad de Medicina Materno-Fetal para seguimiento con Doppler de la velocidad sistólica máxima de la arteria cerebral media (ACM) a partir de la semana 18-20 para pesquisar anemia fetal moderada a grave de forma no invasiva.\nC) Incorrecta. La exanguinotransfusión materna no tiene rol en la aloinmunización.\nD) Incorrecta. La tasa de supervivencia con transfusión intrauterina supera el 90%.\nE) Incorrecta. Los anticuerpos de la aloinmunización son de clase IgG y cruzan activamente la placenta.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.012"
      }
    ]
  }
];

const bloque4Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowObstetricia(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque4Classes };
