/**
 * Tomo 01 · Cardiología — Bloque 1: Arritmias y Paro Cardiorrespiratorio
 * Formato estándar (igual que dataset_endocrinologia_bloque_*.cjs). Migrado desde los 25 temas antiguos
 * (books/scripts/_old_cardio/) por _old_cardio/migrar_a_38_temas.cjs; `_origen` indica de dónde viene cada sección.
 * `_estado`: 'migrado' (contenido antiguo sin reescribir) · 'borrador' (tema nuevo, contenido mínimo) · 'estandar' (reescrito al estándar).
 */
const bloque1 = [
  {
    "id": "cardio-01",
    "classId": "cardio-01",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Arritmias y Paro Cardiorrespiratorio",
    "topicLabel": "1.1",
    "title": "Lectura Sistemática del Electrocardiograma",
    "perfilCode": "1.01.4.007",
    "dx": "No aplica",
    "tx": "No aplica",
    "seg": "No aplica",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Lectura en 5 pasos, regla de los 300, eje, intervalos (PR, QRS, QTc con Bazett), alteraciones electrolíticas, criterios de hipertrofia ventricular izquierda (Sokolow-Lyon y Cornell)",
    "svg": null,
    "algoTitle": "Lectura sistemática del ECG en 5 pasos",
    "diagram": {
      "title": "Algoritmo de Lectura Sistemática del ECG en Urgencias (5 Pasos)",
      "svg": "<svg viewBox=\"0 0 620 440\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar01\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar01)}\n  </style>\n  <rect class=\"b\" x=\"110\" y=\"6\" width=\"400\" height=\"36\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"21\" text-anchor=\"middle\" font-weight=\"700\">Paciente con dolor torácico, palpitaciones, síncope o disnea aguda</text>\n  <text class=\"sub\" x=\"310\" y=\"33\" text-anchor=\"middle\">ECG de 12 derivaciones: tomarlo e interpretarlo en ≤ 10 minutos</text>\n  <path class=\"ln\" d=\"M310,42 V56\"/>\n  <rect class=\"b\" x=\"60\" y=\"56\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"75\" text-anchor=\"middle\" font-weight=\"700\">1. FRECUENCIA</text>\n  <text class=\"sub\" x=\"310\" y=\"87\" text-anchor=\"middle\">Regla de los 300 (ritmo regular) o QRS en 6 s × 10 (irregular) · taquicardia &gt; 100 · bradicardia &lt; 60</text>\n  <path class=\"ln\" d=\"M310,100 V114\"/>\n  <rect class=\"b\" x=\"60\" y=\"114\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"133\" text-anchor=\"middle\" font-weight=\"700\">2. RITMO</text>\n  <text class=\"sub\" x=\"310\" y=\"145\" text-anchor=\"middle\">¿P positiva en DII, DIII y aVF y negativa en aVR? ¿Una P por cada QRS? ¿R-R regular?</text>\n  <path class=\"ln\" d=\"M310,158 V172\"/>\n  <rect class=\"b\" x=\"60\" y=\"172\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"191\" text-anchor=\"middle\" font-weight=\"700\">3. EJE DEL QRS</text>\n  <text class=\"sub\" x=\"310\" y=\"203\" text-anchor=\"middle\">DI y aVF positivos = normal (−30° a +90°) · DI+ aVF− → mirar DII · DI− aVF+ = derecho</text>\n  <path class=\"ln\" d=\"M310,216 V230\"/>\n  <rect class=\"b\" x=\"60\" y=\"230\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"249\" text-anchor=\"middle\" font-weight=\"700\">4. INTERVALOS</text>\n  <text class=\"sub\" x=\"310\" y=\"261\" text-anchor=\"middle\">PR 120-200 ms · QRS &lt; 120 ms · QTc &lt; 440 (H) / 460 (M) ms; &gt; 500 ms = riesgo de torsión</text>\n  <path class=\"ln\" d=\"M310,274 V288\"/>\n  <rect class=\"b\" x=\"60\" y=\"288\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">5. ST, T Y ONDA Q</text>\n  <text class=\"sub\" x=\"310\" y=\"319\" text-anchor=\"middle\">Supradesnivel · infradesnivel · T negativas o picudas · Q patológica (≥ 40 ms o &gt; 25% de la R)</text>\n  <path class=\"ln\" d=\"M310,332 V348\"/>\n  <rect class=\"acc\" x=\"60\" y=\"348\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"364\" text-anchor=\"middle\" font-weight=\"700\">Integrar con la clínica y decidir</text>\n  <text class=\"accS\" x=\"310\" y=\"376\" text-anchor=\"middle\">¿Inestable? ¿Supradesnivel? ¿QTc &gt; 500? ¿Preexcitación? ¿Bloqueo de alto grado?</text>\n  <text class=\"lbl\" x=\"60\" y=\"404\" text-anchor=\"start\">Error típico del examen: saltar al «infarto» y no ver el QT largo, la hiperkalemia o la preexcitación.</text>\n  <text class=\"lbl\" x=\"60\" y=\"418\" text-anchor=\"start\">Se hace siempre en este orden; así no se escapa nada.</text>\n\n</svg>"
    },
    "contexto": "El electrocardiograma es el examen que el médico general debe saber tomar, interpretar y emplear solo, en el SAPU, en el SAR o en el consultorio: ASOFAMECh le exige el nivel «realiza, interpreta y emplea». Casi todo el resto de este bloque (arritmias, bloqueos, infarto, paro) se decide mirando un trazado, y el error más frecuente es saltar al diagnóstico que llama la atención y no ver el QT largo, la hiperkalemia o la preexcitación. Una rutina fija de cinco pasos (frecuencia, ritmo, eje, intervalos y segmento ST-T) hace que nada se escape y es la base de las clases que siguen.",
    "contentSections": [
      {
        "subhead": "1. Importancia del ECG en el EUNACOM y en la Práctica Médica Chilena",
        "paragraphs": [
          "El electrocardiograma (ECG) de 12 derivaciones es la prueba diagnóstica no invasiva más costo-efectiva de la medicina de urgencia y de la Atención Primaria. Según el Perfil V3 de ASOFAMECh, el egresado debe tener el nivel de competencia <strong>«realiza, interpreta y emplea»</strong> el ECG de manera autónoma: ante un paciente que consulta en un SAPU, un SAR o un servicio de urgencia por dolor torácico, palpitaciones, síncope o disnea aguda, debe poder tomar una decisión terapéutica en menos de <strong>10 minutos</strong> a partir de un análisis metódico y sin sesgos (véase la).",
          "El error más frecuente en el EUNACOM es «saltar» a buscar el infarto o la arritmia más llamativa y pasar por alto alteraciones críticas como el <strong>QT prolongado</strong>, los signos de <strong>hiperkalemia</strong> incipiente o la <strong>preexcitación ventricular</strong> en reposo. Para no perderlas, se aplica siempre la misma rutina de cinco pasos, en el mismo orden: frecuencia, ritmo, eje, intervalos y segmento ST-onda T-onda Q. La pregunta de la prueba rara vez muestra solo un hallazgo: muestra un trazado con una pista principal y una trampa secundaria.",
          "El ECG es además el <strong>primer examen del síncope</strong>. Ante un adulto mayor con un síncope de reposo sin pródromo y una frecuencia de 40 latidos por minuto, el examen con el que se inicia el estudio es el electrocardiograma (no el escáner de cerebro ni el Holter): puede mostrar un bloqueo auriculoventricular, una enfermedad del nodo sinusal o una alteración hidroelectrolítica como la hiperkalemia. El Holter y el ecocardiograma vienen después, según lo que muestre el ECG (Tema 1.9)."
        ]
      },
      {
        "subhead": "2. Cómo se Toma y Qué Se Mide: Papel, Derivaciones y Calibración",
        "paragraphs": [
          "El papel estándar corre a <strong>25 mm por segundo</strong> y la calibración es de <strong>10 mm por milivolt</strong>. Cada cuadro pequeño mide 1 mm: <strong>1 mm = 0,04 s (40 ms)</strong> en horizontal y 0,1 mV en vertical; el cuadro grande de 5 mm equivale a <strong>0,2 s (200 ms)</strong>. Con estas dos equivalencias se mide todo: un PR de 5 mm son 200 ms y un QRS de 3 mm son 120 ms. Antes de interpretar se comprueba que el trazado esté bien calibrado y que no haya artefactos (temblor muscular, interferencia de la red eléctrica, electrodos sueltos), que pueden simular fibrilación auricular o taquicardia ventricular.",
          "Las <strong>12 derivaciones</strong> miran el corazón desde distintos ángulos. Las seis del plano frontal (DI, DII, DIII, aVR, aVL, aVF) se calculan con los electrodos de las extremidades; las seis precordiales (V1 a V6) se colocan en el tórax: V1 y V2 en el cuarto espacio intercostal a cada lado del esternón, V4 en el quinto espacio en la línea medioclavicular, V3 entre V2 y V4, V5 en la línea axilar anterior y V6 en la axilar media. Los electrodos de brazos y piernas invertidos son un error clásico: producen una P y un QRS negativos en DI y una falsa desviación del eje. Cuando el cuadro lo pide se agregan las derivaciones derechas (V3R-V4R) y las posteriores (V7-V9), que se revisan en el Tema 2.5.",
          "<strong>Anatomía del latido.</strong> La onda P es la despolarización auricular; el intervalo PR, el retraso fisiológico en el nodo AV; el complejo QRS, la despolarización ventricular; el segmento ST, la meseta de la fase 2; y la onda T, la repolarización ventricular. El intervalo QT va del inicio del QRS al final de la T y refleja la duración total de la actividad eléctrica ventricular. El corazón se despolariza desde el nodo sinusal (aurícula derecha alta) hacia abajo y a la izquierda, por eso en el ritmo sinusal la P es positiva en las derivaciones inferiores."
        ]
      },
      {
        "subhead": "3. Rutina Sistemática de Interpretación en 5 Pasos",
        "paragraphs": [
          "<strong>Paso 1: Frecuencia cardíaca (FC).</strong> Se evalúa primero si el ritmo es regular o irregular. En ritmos regulares con papel a 25 mm/s se aplica la <strong>«regla de los 300»</strong>: 300 dividido por el número de cuadros grandes de 5 mm entre dos ondas R consecutivas (1 cuadro = 300 lpm, 2 = 150, 3 = 100, 4 = 75, 5 = 60, 6 = 50). Una alternativa es dividir 1.500 por el número de cuadros pequeños. En ritmos irregulares (como la fibrilación auricular) se cuentan los QRS contenidos en 30 cuadros grandes (6 segundos) y se multiplica por 10. Taquicardia es una FC mayor de 100 lpm y bradicardia, menor de 60.",
          "<strong>Paso 2: Ritmo (sinusal o no sinusal).</strong> Para certificar un ritmo sinusal normal deben cumplirse tres criterios: 1) onda P positiva en las derivaciones inferiores (DII, DIII y aVF) y negativa en aVR; 2) toda onda P va seguida de un QRS (y todo QRS está precedido de una P); y 3) los intervalos P-P y R-R son constantes. Una P negativa en DII indica un ritmo auricular bajo o ectópico. La ausencia de ondas P con una línea de base irregular y un R-R caótico define la fibrilación auricular (Tema 1.4); las ondas «en dientes de sierra», el flutter; y un QRS ancho sin P precedente, un origen ventricular.",
          "<strong>Paso 3: Eje eléctrico del QRS en el plano frontal.</strong> El eje normal está entre −30° y +90°. La forma más rápida de calcularlo en urgencias es mirar DI y aVF: si ambos son positivos (deflexión predominantemente hacia arriba), el eje es <strong>normal</strong>. Si DI es positivo y aVF negativo, se mira DII: positivo, el eje es normal; negativo, hay <strong>desviación del eje a la izquierda</strong> (menor de −30°), que sugiere hemibloqueo anterior izquierdo, hipertrofia ventricular izquierda o un infarto inferior antiguo. Si DI es negativo y aVF positivo, hay <strong>desviación del eje a la derecha</strong> (mayor de +90°), que sugiere sobrecarga del ventrículo derecho (tromboembolismo pulmonar, EPOC, hipertensión pulmonar), hemibloqueo posterior izquierdo o un infarto lateral; un eje con DI y aVF negativos («eje extremo») es característico del origen ventricular de una taquicardia.",
          "<strong>Paso 4: Intervalos y conducción.</strong> 1) <em>Intervalo PR</em>: normal entre 120 ms (3 mm) y 200 ms (5 mm). Un PR mayor de 200 ms constante define el bloqueo AV de primer grado; un PR menor de 120 ms con onda delta define el síndrome de preexcitación (Wolff-Parkinson-White, Tema 1.6). 2) <em>Duración del QRS</em>: normal menor de 120 ms (menos de 3 mm). Un QRS de 120 ms o más define un bloqueo completo de rama (BCRI o BCRD) o un origen ventricular del latido. 3) <em>Intervalo QT corregido (QTc)</em>: se calcula con la <strong>fórmula de Bazett</strong> (QT medido dividido por la raíz cuadrada del R-R, ambos en segundos); el valor normal es menor de 440 ms en el hombre y de 460 ms en la mujer. Un <strong>QTc mayor de 500 ms</strong> es una emergencia farmacológica por el riesgo de torsión de puntas y muerte súbita (Tema 1.7). Bazett sobrecorrige con frecuencias altas; ante una taquicardia se prefiere la corrección de Fridericia.",
          "<strong>Paso 5: Segmento ST, onda T y onda Q (isquemia, lesión y necrosis).</strong> Se busca el <em>supradesnivel del ST</em> (lesión transmural, SCACEST; Tema 2.5), el <em>infradesnivel del ST</em> (isquemia subendocárdica), las <em>ondas T negativas simétricas</em> (isquemia) o <em>acuminadas</em> (hiperkalemia) y las <em>ondas Q patológicas</em> (de 40 ms o más de duración, o mayores del 25% del voltaje del QRS; no cuentan la Q de DIII ni la de aVR), que indican necrosis establecida. Una R que no progresa de V1 a V4 (transición después de V4) sugiere un infarto anterior antiguo o dilatación ventricular."
        ]
      },
      {
        "subhead": "4. Crecimiento de Cavidades y Criterios de Hipertrofia Ventricular Izquierda",
        "paragraphs": [
          "El <strong>crecimiento auricular derecho</strong> (P pulmonar) se ve como una P alta y picuda en DII (mayor de 2,5 mm); el <strong>crecimiento auricular izquierdo</strong> (P mitrale), como una P ancha (mayor de 120 ms) y mellada en DI o con un componente negativo profundo en V1. Una P mitrale en un paciente con soplo diastólico en el foco mitral orienta a estenosis mitral.",
          "En el marco del Programa de Salud Cardiovascular del MINSAL, documentar <strong>hipertrofia ventricular izquierda (HVI)</strong> en el ECG califica al hipertenso como de <strong>alto riesgo cardiovascular</strong> (daño de órgano blanco) y obliga a intensificar el tratamiento. Los dos índices que se preguntan son:",
          "1) <strong>Índice de Sokolow-Lyon:</strong> onda S en V1 más la onda R en V5 o V6 (la mayor) <strong>≥ 35 mm (3,5 mV)</strong>. Tiene alta especificidad en mayores de 35 años.",
          "2) <strong>Índice de Cornell:</strong> onda R en aVL más onda S en V3, <strong>mayor de 28 mm en hombres</strong> o <strong>mayor de 20 mm en mujeres</strong>. La HVI también produce una «sobrecarga» del segmento ST-T (infradesnivel asimétrico con T invertida en V5-V6) y desvía el eje a la izquierda. La HVI por estenosis aórtica se revisa en el Tema 4.2 y por hipertensión, en el Tema 5.1."
        ]
      },
      {
        "subhead": "5. Alteraciones Electrolíticas y Otras Firmas del ECG que Se Preguntan",
        "paragraphs": [
          "<strong>Hiperkalemia:</strong> secuencia de <strong>ondas T altas, simétricas y en tienda de campaña</strong> (potasio ≥ 5,5-6 mEq/L), seguida de P aplanada, PR prolongado y, con potasio muy alto, <strong>QRS ancho</strong> y finalmente una onda sinusoidal que precede a la asistolia o la fibrilación ventricular. Con QRS ancho o arritmia se indica <strong>gluconato de calcio</strong> endovenoso de inmediato (estabiliza la membrana) y después insulina con glucosa. Una bradicardia con potasio de 8 mEq/L se trata primero con calcio, no con atropina ni marcapaso.",
          "<strong>Hipokalemia:</strong> T aplanada, <strong>onda U</strong> prominente, infradesnivel del ST y QT aparentemente largo. Predispone a extrasístoles y torsión de puntas, sobre todo con fármacos que alargan el QT. <strong>Hipocalcemia:</strong> QT largo por alargamiento del segmento ST. <strong>Hipercalcemia:</strong> QT corto. <strong>Intoxicación digitálica:</strong> ST en «cubeta» o en «palo de hockey», extrasístoles ventriculares y bloqueos.",
          "<strong>Pericarditis aguda:</strong> supradesnivel del ST difuso y cóncavo, con infradesnivel del PR y sin imagen especular (Tema 5.5). <strong>Tromboembolismo pulmonar:</strong> taquicardia sinusal como hallazgo más frecuente, y a veces S1Q3T3, T negativas en V1-V4 o bloqueo de rama derecha nuevo (Tema 5.9). <strong>Bloqueo completo de rama izquierda:</strong> QRS ancho con R empastada en V5-V6; si es nuevo y hay dolor típico, equivale a un SCACEST (Tema 2.5).",
          "Una conducta práctica: ante un trazado anormal, se pregunta primero por el estado hemodinámico del paciente (el ECG se interpreta con el paciente al lado, no al revés), se compara con ECG previos si existen y se repite si el cuadro cambia. Un ECG normal no descarta un síndrome coronario agudo: si la clínica es sugerente se repite cada 15 a 30 minutos y se mide la troponina."
        ]
      }
    ],
    "table": {
      "title": "Intervalos Electrocardiográficos, Valores Normales y Diagnósticos Clave EUNACOM",
      "headers": [
        "Parámetro",
        "Valor normal",
        "Alteración electrocardiográfica",
        "Significado clínico / diagnóstico EUNACOM"
      ],
      "rows": [
        [
          "Frecuencia cardíaca",
          "60 a 100 lpm",
          "< 60 lpm / > 100 lpm",
          "Bradicardia sinusal / taquicardia sinusal o arritmia"
        ],
        [
          "Onda P",
          "< 120 ms y < 2,5 mm",
          "P picuda en DII (> 2,5 mm) / P ancha y mellada en DI (> 120 ms)",
          "Crecimiento auricular derecho (P pulmonar) / izquierdo (P mitrale)"
        ],
        [
          "Intervalo PR",
          "120 a 200 ms (3 a 5 mm)",
          "PR > 200 ms constante / PR < 120 ms con onda delta",
          "Bloqueo AV de 1.er grado / síndrome de Wolff-Parkinson-White"
        ],
        [
          "Complejo QRS",
          "< 120 ms (< 3 mm)",
          "≥ 120 ms con R ancha en V6 / ≥ 120 ms con rsR' en V1",
          "Bloqueo completo de rama izquierda (BCRI) / derecha (BCRD)"
        ],
        [
          "Intervalo QTc (Bazett)",
          "< 440 ms (H) / < 460 ms (M)",
          "QTc > 500 ms",
          "Riesgo inminente de torsión de puntas (TV polimorfa)"
        ],
        [
          "Segmento ST",
          "Isoeléctrico",
          "Supradesnivel ≥ 1 mm en ≥ 2 derivaciones contiguas",
          "SCACEST (reperfusión urgente, Tema 2.5)"
        ],
        [
          "Eje del QRS",
          "−30° a +90° (DI y aVF positivos)",
          "DI+ aVF− y DII− / DI− aVF+",
          "Desviación izquierda (HBAI, HVI) / derecha (TEP, EPOC, HBPI)"
        ],
        [
          "Voltaje (HVI)",
          "S V1 + R V5/V6 < 35 mm",
          "Sokolow ≥ 35 mm; Cornell > 28 mm (H) o > 20 mm (M)",
          "Hipertrofia ventricular izquierda: hipertenso de alto riesgo"
        ]
      ]
    },
    "vignette": "Hombre de 48 años con hipertensión arterial de 8 años de evolución, en tratamiento irregular, consulta en el CESFAM para control. PA 155/95 mmHg, FC 74 lpm regular, sin soplos ni crépitos. El ECG de reposo muestra ritmo sinusal (P positiva en DII y negativa en aVR, una P por cada QRS), eje normal, PR de 160 ms, QRS de 90 ms, QTc de 410 ms, segmento ST isoeléctrico, onda S en V1 de 19 mm y onda R en V5 de 23 mm.",
    "explicacion": "La lectura en cinco pasos muestra un ritmo sinusal normal, con eje, intervalos y segmento ST normales, pero con criterios de voltaje aumentados: el índice de Sokolow-Lyon (S en V1 19 mm + R en V5 23 mm = 42 mm) supera el umbral de 35 mm. Esto confirma una hipertrofia ventricular izquierda como daño de órgano blanco de una hipertensión mal controlada, lo que lo sitúa en alto riesgo cardiovascular e impone intensificar el tratamiento antihipertensivo con terapia combinada en dosis fija (por ejemplo IECA o ARA II más amlodipino) y buscar otro daño de órgano (creatinina, albuminuria, fondo de ojo).",
    "keyPoints": [
      "Lectura sistemática en 5 pasos y siempre en el mismo orden: frecuencia, ritmo, eje, intervalos (PR, QRS, QT) y segmento ST-T-Q; el ECG se interpreta en ≤ 10 minutos.",
      "Papel a 25 mm/s: 1 mm = 0,04 s y 5 mm = 0,2 s. Regla de los 300 para ritmos regulares; en ritmos irregulares, QRS en 6 segundos × 10.",
      "Ritmo sinusal: P positiva en DII, DIII y aVF y negativa en aVR, una P por cada QRS y R-R constante.",
      "Eje normal: DI y aVF positivos (−30° a +90°). PR > 200 ms = BAV de 1.er grado; PR < 120 ms con onda delta = preexcitación; QRS ≥ 120 ms = bloqueo de rama o latido ventricular.",
      "QTc de Bazett normal < 440 ms (hombre) y < 460 ms (mujer); QTc > 500 ms = riesgo de torsión de puntas: suspender el fármaco y corregir K, Mg y Ca.",
      "Hiperkalemia: T alta y simétrica, luego QRS ancho y onda sinusoidal; con QRS ancho o arritmia, gluconato de calcio EV primero.",
      "HVI: Sokolow-Lyon ≥ 35 mm (S V1 + R V5/V6) o Cornell > 28 mm en hombres y > 20 mm en mujeres; el hipertenso con HVI es de alto riesgo.",
      "En el síncope, el ECG es el primer examen; un ECG inicial normal no descarta un síndrome coronario agudo si la clínica es sugerente."
    ],
    "questions": [
      {
        "stem": "Un paciente de 70 años, sin antecedentes de importancia presenta un síncope de reposo sin pródromo, con recuperación completa. Al examen físico se encuentra orientado, en Glasgow 15, con frecuencia cardíaca de 40 latidos por minuto. ¿Cuál es el examen de elección para iniciar el estudio?",
        "options": [
          {
            "id": "A",
            "text": "Monitoreo electrocardiográfico de 24 horas"
          },
          {
            "id": "B",
            "text": "Ecocardiograma"
          },
          {
            "id": "C",
            "text": "TAC de cerebro"
          },
          {
            "id": "D",
            "text": "Resonancia magnética de cerebro"
          },
          {
            "id": "E",
            "text": "Electrocardiograma"
          }
        ],
        "correcta": "E",
        "explicacion": "En un síncope de reposo sin pródromo con bradicardia se sospecha una causa cardíaca (bloqueo AV, enfermedad del nodo sinusal, hiperkalemia). El examen inicial es siempre el ECG de 12 derivaciones; el Holter y el ecocardiograma se piden después según lo que muestre, y las imágenes cerebrales no corresponden.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 180"
      },
      {
        "stem": "¿Cuál de los siguientes hallazgos electrocardiográficos descarta la presencia de un ritmo sinusal normal?",
        "options": [
          {
            "id": "A",
            "text": "Onda P negativa en la derivación DII y positiva en la derivación aVR"
          },
          {
            "id": "B",
            "text": "Frecuencia cardíaca de 65 latidos por minuto"
          },
          {
            "id": "C",
            "text": "Intervalo PR constante de 160 milisegundos"
          },
          {
            "id": "D",
            "text": "Onda P positiva en DI y aVF"
          },
          {
            "id": "E",
            "text": "Complejo QRS precedido por una onda P con intervalo R-R regular"
          }
        ],
        "correcta": "A",
        "explicacion": "En el ritmo sinusal el impulso nace en la parte alta de la aurícula derecha y se dirige hacia abajo y a la izquierda: la P debe ser positiva en DII, DIII y aVF y negativa en aVR. Una P negativa en DII indica un ritmo auricular bajo o ectópico (o electrodos invertidos).",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Hombre de 66 años, hipertenso, en control. El ECG de reposo muestra ritmo sinusal a 70 lpm, eje normal, PR 160 ms, QRS 90 ms y una onda S en V1 de 20 mm con onda R en V5 de 18 mm. ¿Cuál es la interpretación más adecuada del trazado?",
        "options": [
          {
            "id": "A",
            "text": "Hipertrofia ventricular izquierda por criterio de voltaje de Sokolow-Lyon"
          },
          {
            "id": "B",
            "text": "Bloqueo completo de rama izquierda"
          },
          {
            "id": "C",
            "text": "Infarto de pared anterior antiguo"
          },
          {
            "id": "D",
            "text": "Crecimiento auricular derecho"
          },
          {
            "id": "E",
            "text": "Trazado normal para la edad"
          }
        ],
        "correcta": "A",
        "explicacion": "S en V1 (20 mm) + R en V5 (18 mm) = 38 mm, mayor que el umbral de 35 mm del índice de Sokolow-Lyon: hipertrofia ventricular izquierda. El QRS es angosto (90 ms), por lo que no es un bloqueo de rama.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "1.1§0 · 1.1§1 · 1.1§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-02",
    "classId": "cardio-02",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Arritmias y Paro Cardiorrespiratorio",
    "topicLabel": "1.2",
    "title": "Paro Cardiorrespiratorio: Reconocimiento, RCP de Alta Calidad y Desfibrilador Externo Automático",
    "perfilCode": "1.01.2.006, 1.01.5.006, 1.05.2.012, 1.05.5.010, 4.01.2.030, 4.01.5.028",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Derivar",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Primer paso del paro (compresiones y pedir ayuda), parámetros de RCP de alta calidad, uso del DEA, paro de causa respiratoria y perioperatoria",
    "svg": null,
    "algoTitle": "Algoritmo de soporte vital básico del adulto",
    "diagram": {
      "title": "Algoritmo de Soporte Vital Básico en el Adulto: de la Persona Inconsciente al DEA",
      "svg": "<svg viewBox=\"0 0 620 450\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar02\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar02)}\n  </style>\n  <rect class=\"b\" x=\"110\" y=\"6\" width=\"400\" height=\"36\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"21\" text-anchor=\"middle\" font-weight=\"700\">Persona que se desploma</text>\n  <text class=\"sub\" x=\"310\" y=\"33\" text-anchor=\"middle\">Asegurar la escena · estimular y llamar · mirar respiración y pulso carotídeo ≤ 10 s</text>\n  <path class=\"ln\" d=\"M310,42 V58\"/>\n  <rect class=\"dec\" x=\"90\" y=\"58\" width=\"440\" height=\"42\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"76\" text-anchor=\"middle\" font-weight=\"700\">¿No responde, no respira (o solo jadea) y no hay pulso?</text>\n  <text class=\"sub\" x=\"310\" y=\"88\" text-anchor=\"middle\">Si hay pulso y no respira: ventilar 1 cada 6 s y buscar ayuda</text>\n  <path class=\"ln\" d=\"M310,100 V116\"/>\n  <rect class=\"acc\" x=\"60\" y=\"116\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"135\" text-anchor=\"middle\" font-weight=\"700\">PEDIR AYUDA: 131 (SAMU) o Código Azul + traer DEA o desfibrilador</text>\n  <text class=\"accS\" x=\"310\" y=\"147\" text-anchor=\"middle\">Y empezar COMPRESIONES de inmediato: no esperar nada para comprimir</text>\n  <path class=\"ln\" d=\"M310,160 V176\"/>\n  <rect class=\"b\" x=\"60\" y=\"176\" width=\"500\" height=\"52\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"193\" text-anchor=\"middle\" font-weight=\"700\">RCP de alta calidad (C-A-B)</text>\n  <text class=\"sub\" x=\"310\" y=\"205\" text-anchor=\"middle\">100-120 por minuto · ≥ 5 cm (máx. 6 cm) · dejar re-expandir el tórax</text>\n  <text class=\"sub\" x=\"310\" y=\"217\" text-anchor=\"middle\">Interrupciones &lt; 10 s · 30:2 (sin vía aérea avanzada) · relevo cada 2 min</text>\n  <path class=\"ln\" d=\"M310,228 V244\"/>\n  <rect class=\"b\" x=\"60\" y=\"244\" width=\"500\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"263\" text-anchor=\"middle\" font-weight=\"700\">Llega el DEA / monitor: encender, parches y analizar</text>\n  <text class=\"sub\" x=\"310\" y=\"275\" text-anchor=\"middle\">Nadie toca al paciente al analizar ni al descargar</text>\n  <path class=\"ln\" d=\"M310,288 V304 H158 V316\"/>\n  <path class=\"ln\" d=\"M310,304 H462 V316\"/>\n  <text class=\"lbl\" x=\"150\" y=\"300\" text-anchor=\"end\">Descarga indicada</text>\n  <text class=\"lbl\" x=\"470\" y=\"300\" text-anchor=\"start\">No indicada</text>\n  <rect class=\"acc\" x=\"12\" y=\"316\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"332\" text-anchor=\"middle\" font-weight=\"700\">DESFIBRILAR (1 descarga)</text>\n  <text class=\"accS\" x=\"158\" y=\"344\" text-anchor=\"middle\">Reanudar RCP de inmediato por 2 minutos</text>\n  <text class=\"accS\" x=\"158\" y=\"356\" text-anchor=\"middle\">sin buscar pulso (Tema 1.3: ACLS)</text>\n  <rect class=\"b\" x=\"316\" y=\"316\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"332\" text-anchor=\"middle\" font-weight=\"700\">RCP inmediata 2 minutos</text>\n  <text class=\"sub\" x=\"462\" y=\"344\" text-anchor=\"middle\">Después, nuevo análisis; seguir hasta que llegue</text>\n  <text class=\"sub\" x=\"462\" y=\"356\" text-anchor=\"middle\">el equipo avanzado o haya retorno de circulación</text>\n  <path class=\"ln\" d=\"M158,366 V382 H310\"/>\n  <path class=\"ln\" d=\"M462,366 V382 H310\"/>\n  <rect class=\"dec\" x=\"60\" y=\"382\" width=\"500\" height=\"52\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"405\" text-anchor=\"middle\" font-weight=\"700\">Retorno de circulación espontánea (RCE)</text>\n  <text class=\"sub\" x=\"310\" y=\"417\" text-anchor=\"middle\">Cuidados post-paro y causa del paro (Tema 1.3)</text>\n\n</svg>"
    },
    "contexto": "El paro cardiorrespiratorio es la urgencia en que un minuto de demora cambia la sobrevida, y todo médico general debe saber reanimar sin esperar al especialista: el que está al lado del paciente en el SAPU, en la sala de espera o en la calle es el que decide si hay compresiones de calidad y un desfibrilador a tiempo. El EUNACOM pregunta casi siempre lo mismo con distintos ropajes: cuál es el primer gesto (comprimir y pedir ayuda), cuáles son los parámetros de la compresión, cuándo se usa el DEA y qué cambia cuando el paro es respiratorio o ocurre en pabellón. Este tema es el soporte vital básico; los ritmos, los fármacos y el post-paro van en el Tema 1.3.",
    "contentSections": [
      {
        "subhead": "1. Definición, Reconocimiento y Cadena de Supervivencia",
        "paragraphs": [
          "El <strong>paro cardiorrespiratorio (PCR)</strong> es la interrupción brusca, inesperada y potencialmente reversible de la actividad mecánica del corazón y de la respiración espontánea. Se reconoce por la tríada clásica: 1) <strong>inconsciencia</strong> (no responde al llamado ni al estímulo); 2) <strong>ausencia de respiración o respiración agónica («gasping»)</strong>; y 3) <strong>ausencia de pulso carotídeo</strong> verificada por personal de salud en 5 a 10 segundos. El pulso nunca se busca por más de 10 segundos: si hay duda, se comienza a comprimir. El «gasping» no es respirar: ocurre en los primeros minutos de un paro y no debe retrasar la reanimación.",
          "La <strong>cadena de supervivencia</strong> hospitalaria y extrahospitalaria en Chile tiene seis eslabones: 1) reconocimiento precoz y activación del sistema de emergencia (llamar al <strong>131, SAMU</strong>, o activar el <strong>Código Azul</strong> en el hospital); 2) <strong>RCP de alta calidad inmediata</strong>; 3) <strong>desfibrilación precoz</strong>; 4) soporte vital avanzado y traslado; 5) cuidados post-paro integrales; y 6) recuperación. Los tres primeros eslabones dependen del primer testigo y son los que más modifican la sobrevida.",
          "La secuencia de la RCP es <strong>C-A-B</strong>: primero circulación (compresiones), después vía aérea y ventilación. La razón es fisiológica: en el paro presenciado de origen cardíaco la sangre aún lleva oxígeno, y lo que falta es flujo. Por eso, ante un paciente que pierde la conciencia sin respirar y sin pulso, <strong>además de solicitar ayuda, la conducta inicial es iniciar las compresiones torácicas</strong>: no se intuba, no se coloca una vía venosa, no se pide un ECG ni se da adrenalina antes. El golpe precordial no se recomienda.",
          "Un matiz que el banco explica: en un <strong>paro presenciado y monitorizado</strong>, con el desfibrilador al lado y un ritmo desfibrilable constatado, lo primero es descargar. Pero eso exige las tres condiciones a la vez; en la gran mayoría de los casos (paciente en la sala de urgencia, en la casa o en la calle) la conducta inicial es pedir ayuda y comprimir mientras llega el desfibrilador y el carro de paro."
        ]
      },
      {
        "subhead": "2. Parámetros Obligatorios de RCP de Alta Calidad",
        "paragraphs": [
          "La calidad de las compresiones es el factor que determina el flujo coronario y cerebral durante el paro. En el adulto: 1) <strong>frecuencia de 100 a 120 compresiones por minuto</strong>; 2) <strong>profundidad de al menos 5 cm</strong> (sin exceder 6 cm); 3) <strong>permitir la expansión torácica completa</strong> después de cada compresión, sin apoyarse en el tórax (el retorno elástico es lo que llena el ventrículo); 4) <strong>minimizar las interrupciones</strong> a menos de 10 segundos, con una fracción de compresión mayor del 80%; 5) <strong>evitar la hiperventilación</strong>: una ventilación cada 6 segundos con vía aérea avanzada, o relación <strong>30 compresiones:2 ventilaciones</strong> si no está intubado; y 6) <strong>relevar al reanimador cada 2 minutos</strong> (o antes si hay fatiga), porque la calidad cae a los 1 o 2 minutos aunque el reanimador no lo note.",
          "Las compresiones se hacen sobre una <strong>superficie firme</strong>, en la mitad inferior del esternón, con el talón de una mano sobre la otra y los brazos rectos, perpendiculares al tórax. En el niño y el lactante la profundidad es de al menos un tercio del diámetro anteroposterior del tórax (unos 5 cm y 4 cm respectivamente) y, con dos reanimadores, la relación es 15:2. En la embarazada avanzada se desplaza manualmente el útero a la izquierda para liberar la vena cava; las compresiones se hacen en la misma posición.",
          "La <strong>capnografía</strong> es la mejor herramienta de monitoreo de la calidad de la RCP y la forma de confirmar que el tubo orotraqueal está bien puesto: un CO₂ espirado menor de 10 mmHg indica compresiones ineficaces; un aumento súbito sugiere retorno de la circulación espontánea. La auscultación, la saturación y la expansión torácica no son tan confiables en el paro. Para la vía aérea se usa la <strong>extensión de cabeza con elevación del mentón</strong> (o <strong>tracción mandibular</strong> si se sospecha lesión cervical) y la ventilación con <strong>bolsa-mascarilla y oxígeno a alto flujo</strong>, de 1 segundo por ventilación y con elevación visible del tórax."
        ]
      },
      {
        "subhead": "3. Desfibrilador Externo Automático (DEA): Cuándo y Cómo",
        "paragraphs": [
          "El <strong>DEA</strong> es un aparato que analiza el ritmo y dice si la descarga está indicada; permite que cualquier persona, sin saber leer un ECG, desfibrile. Es el segundo eslabón de la cadena: la fibrilación ventricular es el ritmo inicial más frecuente del paro súbito de origen cardíaco y la sobrevida cae cerca de un 10% por cada minuto sin desfibrilar. Por eso se trae el DEA o el desfibrilador al lado del paciente apenas se activa el sistema, y se usa en cuanto llega, sin suspender las compresiones hasta que esté listo.",
          "<strong>Uso paso a paso:</strong> 1) encender el equipo (sigue instrucciones de voz); 2) secar el tórax y colocar los parches: uno debajo de la clavícula derecha y otro en la axila izquierda (línea axilar media); si hay un marcapaso o desfibrilador implantable visible se pone el parche a unos 8 cm de él; 3) dejar que analice, sin tocar al paciente; 4) si indica descarga, <strong>«todos alejados»</strong> (nadie en contacto, oxígeno apartado) y se presiona el botón; 5) <strong>reanudar las compresiones de inmediato por 2 minutos</strong> sin chequear pulso ni ritmo, y repetir el ciclo. En los menores de 8 años se usan parches pediátricos o atenuador; si no existen, se usan los de adulto.",
          "El DEA no se usa en pacientes con pulso. Si indica «descarga no indicada» (asistolia, actividad eléctrica sin pulso o un ritmo con pulso), se continúa con la RCP. El agua, la nitroglicerina en parche y el vello extenso pueden interferir: se seca, se retira el parche de fármaco y se rasura si es necesario. La <strong>desfibrilación manual</strong> y los fármacos del paro son parte del soporte avanzado (Tema 1.3)."
        ]
      },
      {
        "subhead": "4. Técnica de la RCP en el Hospital y en Otras Especialidades",
        "paragraphs": [
          "<strong>Secuencia que el médico general debe realizar:</strong> 1) asegurar la escena y comprobar la respuesta; 2) pedir ayuda, activar el sistema de emergencia (131 o Código Azul) y solicitar el desfibrilador; 3) evaluar respiración y pulso carotídeo por <strong>no más de 10 segundos</strong>; 4) iniciar de inmediato las <strong>compresiones</strong> en la mitad inferior del esternón; 5) abrir la vía aérea y ventilar con bolsa-mascarilla y oxígeno a alto flujo, en relación <strong>30:2</strong>; 6) encender el DEA o el monitor al llegar, colocar los parches y no tocar al paciente al analizar o descargar. Con vía aérea avanzada las compresiones son continuas, con 1 ventilación cada 6 segundos. Se usa la vía <strong>intraósea</strong> si no hay acceso venoso. La RCP no se inicia si hay una orden de no reanimar documentada o signos evidentes de muerte.",
          "<strong>Paro de causa respiratoria o hipóxica</strong> (asfixia, ahogamiento, obstrucción de la vía aérea, asma grave, EPOC descompensada, sobredosis de opioides): el ritmo inicial suele ser una <strong>bradicardia progresiva que termina en asistolia o actividad eléctrica sin pulso</strong> y no una fibrilación ventricular. Por eso la ventilación y la oxigenación pesan tanto como las compresiones (en el ahogamiento se parte con 5 ventilaciones de rescate) y se trata la causa mientras se reanima: desobstruir la vía aérea, ventilar con O₂ al 100%, <strong>naloxona</strong> en la intoxicación por opioides, descompresión del <strong>neumotórax a tensión</strong>, broncodilatadores y adrenalina en el asma casi fatal. La hipoxia es la causa reversible más frecuente de actividad eléctrica sin pulso. En el ahogamiento no se diferencia el manejo entre agua salada y dulce.",
          "<strong>Paro perioperatorio y de la anestesia:</strong> ocurre en un paciente monitorizado, por lo que se reconoce por la caída brusca de la saturación, del CO₂ espirado o de la presión arterial. Las causas reversibles son: problemas de la <strong>vía aérea</strong> (laringoespasmo, intubación esofágica, aspiración), <strong>hipovolemia o hemorragia</strong>, <strong>anafilaxia</strong> (relajantes musculares, antibióticos, látex: adrenalina), <strong>neumotórax a tensión</strong>, <strong>hiperkalemia</strong> por succinilcolina en quemados o rabdomiólisis, <strong>toxicidad por anestésico local</strong> (bupivacaína: se agrega <strong>emulsión lipídica al 20%</strong>), <strong>hipertermia maligna</strong> (dantroleno) y embolia pulmonar, gaseosa o grasa. Se suspende el anestésico, se ventila con O₂ al 100% y se aplica el mismo algoritmo. En el postoperatorio inmediato de cirugía cardíaca se dan hasta 3 descargas consecutivas antes de comprimir y se prepara la reapertura del esternón.",
          "La RCP se detiene cuando hay retorno de la circulación, cuando se transfiere el paciente al equipo avanzado, cuando el reanimador queda exhausto o en peligro, o cuando el equipo decide terminar la reanimación (habitualmente tras unos 20 a 30 minutos sin respuesta, individualizando por la causa y la calidad de la RCP). Todo paro se documenta y se informa a la familia de forma clara y respetuosa."
        ]
      },
      {
        "subhead": "5. Situaciones Especiales del Soporte Vital Básico",
        "paragraphs": [
          "<strong>Obstrucción de la vía aérea por un cuerpo extraño (atragantamiento).</strong> Si la persona tose con fuerza, se la anima a toser. Si no puede hablar, respirar ni toser (se lleva las manos al cuello), se aplican <strong>compresiones abdominales (maniobra de Heimlich)</strong> en el adulto y el niño, y cinco golpes interescapulares alternados con cinco compresiones torácicas en el lactante. Si la persona pierde la conciencia se comienza la RCP y, antes de cada ventilación, se mira la boca y se retira el objeto solo si se ve (no se hace barrido a ciegas).",
          "<strong>Embarazada con paro.</strong> Pasadas las 20 semanas el útero comprime la vena cava: se desplaza el útero a la izquierda con las manos, se hace la RCP habitual y se prepara la <strong>cesárea de emergencia</strong> si no hay retorno de la circulación en unos 4 minutos, porque el vaciado del útero mejora el retorno venoso y la sobrevida de la madre. <strong>Ahogamiento:</strong> comienza con cinco ventilaciones de rescate, ya que la causa es la hipoxia. <strong>Hipotermia grave:</strong> «nadie está muerto hasta que está tibio y muerto»; se comprime y se recalienta, y se limita el número de descargas hasta que la temperatura supere los 30 °C. <strong>Electrocución y rayo:</strong> se asegura la escena, se corta la corriente y se reanima; muchas víctimas son jóvenes y recuperan si se las trata a tiempo.",
          "Un error frecuente es detener las compresiones para «buscar el pulso» una y otra vez, para colocar una vía o para intubar. Cada pausa baja la presión de perfusión coronaria, que tarda varias compresiones en recuperarse. El reanimador que comprime debe cantar el ritmo, se mide la profundidad con retroalimentación de la máquina si está disponible, y el líder cuenta los minutos: relevo y análisis cada 2 minutos."
        ]
      }
    ],
    "table": {
      "title": "RCP de Alta Calidad: Parámetros por Grupo de Edad",
      "headers": [
        "Parámetro",
        "Adulto",
        "Niño",
        "Lactante"
      ],
      "rows": [
        [
          "Frecuencia de compresión",
          "100-120 por minuto",
          "100-120 por minuto",
          "100-120 por minuto"
        ],
        [
          "Profundidad",
          "≥ 5 cm (máx. 6 cm)",
          "≥ 1/3 del tórax (≈ 5 cm)",
          "≥ 1/3 del tórax (≈ 4 cm)"
        ],
        [
          "Relación compresión:ventilación",
          "30:2 (1 ventilación cada 6 s con vía aérea avanzada)",
          "30:2 un reanimador; 15:2 dos reanimadores",
          "30:2 un reanimador; 15:2 dos reanimadores"
        ],
        [
          "Técnica",
          "Talón de ambas manos, mitad inferior del esternón",
          "Una o dos manos",
          "Dos dedos o pulgares con manos rodeando el tórax"
        ],
        [
          "Ritmo del paro más frecuente",
          "FV / TV sin pulso (cardíaco)",
          "Asistolia / AESP (respiratorio)",
          "Asistolia / AESP (respiratorio)"
        ],
        [
          "Interrupciones y relevo",
          "< 10 s; relevo cada 2 min",
          "< 10 s; relevo cada 2 min",
          "< 10 s; relevo cada 2 min"
        ]
      ]
    },
    "vignette": "Hombre de 62 años, fumador e hipertenso, consulta en un SAPU por dolor torácico opresivo de 1 hora. Mientras espera en la sala de procedimientos pierde la conciencia: no responde al llamado, no respira (hace una inspiración ocasional y ruidosa) y no se palpa pulso carotídeo tras 10 segundos de búsqueda. El auxiliar trae el desfibrilador automático, aún sin conectar, y el carro de paro.",
    "explicacion": "Es un paro cardiorrespiratorio (inconsciencia, gasping y ausencia de pulso) probablemente por un síndrome coronario agudo. Además de pedir ayuda (activar el Código Azul o el 131), la conducta inicial es iniciar de inmediato las compresiones torácicas de alta calidad, 100 a 120 por minuto y de al menos 5 cm, mientras se conecta el DEA: no se pierde tiempo intubando, canalizando ni pidiendo un ECG. En cuanto el DEA esté encendido con los parches puestos, se analiza el ritmo sin tocar al paciente; si indica descarga, se descarga y se reanuda la RCP por 2 minutos sin buscar pulso. Se releva al reanimador cada 2 minutos.",
    "keyPoints": [
      "PCR = inconsciencia + sin respiración (o gasping) + sin pulso carotídeo en ≤ 10 segundos; ante la duda, comprimir.",
      "Primer gesto: pedir ayuda (131 / Código Azul) e iniciar compresiones (C-A-B); no intubar, canalizar ni dar adrenalina antes; el golpe precordial no se hace.",
      "Compresiones: 100-120 por minuto, ≥ 5 cm (máx. 6 cm), permitir la re-expansión, interrupciones < 10 s, relevo cada 2 minutos.",
      "Relación 30:2 sin vía aérea avanzada; con vía aérea avanzada, compresiones continuas y 1 ventilación cada 6 segundos (sin hiperventilar).",
      "DEA: parches infraclavicular derecho y axilar izquierdo; nadie toca al paciente al analizar o descargar; tras la descarga, RCP de inmediato por 2 minutos sin chequear pulso.",
      "Paro presenciado y monitorizado con desfibrilador a mano y ritmo desfibrilable: se descarga primero; en los demás casos, se comprime mientras llega el equipo.",
      "Paro respiratorio (asfixia, ahogamiento, opioides, asma): asistolia o AESP; la ventilación es tan importante como las compresiones; naloxona en opioides.",
      "La capnografía confirma la posición del tubo y guía la calidad de la RCP (CO₂ < 10 mmHg = compresiones ineficaces; alza súbita = retorno de circulación)."
    ],
    "questions": [
      {
        "stem": "Diabético hipertenso con dolor torácico súbito, luego compromiso de conciencia y ausencia de pulso. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Desfibrilación inmediata sin RCP previa"
          },
          {
            "id": "B",
            "text": "Iniciar compresiones torácicas externas (RCP)"
          },
          {
            "id": "C",
            "text": "Intubación orotraqueal inmediata"
          },
          {
            "id": "D",
            "text": "Administrar adrenalina 1 mg EV de inmediato"
          },
          {
            "id": "E",
            "text": "Acceso venoso y carga de volumen"
          }
        ],
        "correcta": "B",
        "explicacion": "Sin pulso y sin conciencia es un paro: lo primero es iniciar las compresiones torácicas (y pedir ayuda). La desfibrilación inmediata solo corresponde si el paro es presenciado, monitorizado y hay un ritmo desfibrilable constatado; la intubación, la adrenalina y la vía venosa vienen después.",
        "recTag": "EUNACOM Enero 2023 · Pregunta 120"
      },
      {
        "stem": "Un paciente de 67 años, diabético, hipertenso y dislipidémico, fumador activo, consulta en el servicio de urgencia por dolor torácico opresivo e intenso, de 2 horas de evolución, irradiado al hombro derecho y asociado a disnea. Mientras estaba en la sala de reanimación presenta pérdida de conciencia y usted constata que no se mueve, no respira y no tiene pulso. Además de pedir ayuda y activar el código de paro, ¿cuál es la conducta inmediata?",
        "options": [
          {
            "id": "A",
            "text": "Instalar el monitor cardíaco en modo paletas"
          },
          {
            "id": "B",
            "text": "Realizar intubación orotraqueal"
          },
          {
            "id": "C",
            "text": "Solicitar electrocardiograma"
          },
          {
            "id": "D",
            "text": "Realizar compresiones torácicas"
          },
          {
            "id": "E",
            "text": "Administrar adrenalina endovenosa en bolo"
          }
        ],
        "correcta": "D",
        "explicacion": "Tras pedir ayuda y activar el código de paro, el primer gesto es comprimir el tórax con alta calidad. El monitor en modo paletas, la intubación, el ECG y la adrenalina se hacen mientras otro miembro del equipo continúa las compresiones, nunca en su lugar.",
        "recTag": "EUNACOM Diciembre 2022 · Pregunta 158"
      },
      {
        "stem": "Un paciente es recibido en urgencia sin pulso ni respiración. El equipo realiza compresiones torácicas. ¿Cuál de las siguientes condiciones corresponde a una RCP de alta calidad en el adulto?",
        "options": [
          {
            "id": "A",
            "text": "Compresiones de 100 a 120 por minuto y de al menos 5 cm de profundidad, permitiendo la re-expansión del tórax"
          },
          {
            "id": "B",
            "text": "Compresiones de 60 a 80 por minuto con ventilaciones continuas"
          },
          {
            "id": "C",
            "text": "Compresiones de 2 a 3 cm de profundidad para evitar fracturas costales"
          },
          {
            "id": "D",
            "text": "Una ventilación cada 2 segundos con vía aérea avanzada"
          },
          {
            "id": "E",
            "text": "Pausas de 30 segundos cada 2 minutos para buscar pulso"
          }
        ],
        "correcta": "A",
        "explicacion": "La RCP de alta calidad exige 100 a 120 compresiones por minuto, al menos 5 cm (sin pasar de 6 cm), re-expansión completa, interrupciones menores de 10 segundos y ventilación sin exceso (una cada 6 segundos con vía aérea avanzada).",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "1.2§0 · 1.2§1 · 1.2§4p0,1,2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-03",
    "classId": "cardio-03",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Arritmias y Paro Cardiorrespiratorio",
    "topicLabel": "1.3",
    "title": "ACLS: Ritmos Desfibrilables y No Desfibrilables, Fármacos y Cuidados Post-Paro",
    "perfilCode": "1.01.5.004, 1.01.2.006, 1.01.5.006",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Derivar",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Clasificación del ritmo del paro, descarga de 200 J, adrenalina y amiodarona, ritmos no desfibrilables, 5H y 5T, cuidados post-paro",
    "svg": null,
    "algoTitle": "Algoritmo de soporte vital cardiovascular avanzado (ACLS) del adulto",
    "diagram": {
      "title": "Algoritmo ACLS del Adulto: Ritmos Desfibrilables y No Desfibrilables",
      "svg": "<svg viewBox=\"0 0 620 470\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar03\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar03)}\n  </style>\n  <rect class=\"b\" x=\"110\" y=\"6\" width=\"400\" height=\"34\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"20\" text-anchor=\"middle\" font-weight=\"700\">Paro: RCP en curso + monitor / desfibrilador</text>\n  <text class=\"sub\" x=\"310\" y=\"32\" text-anchor=\"middle\">Parches y análisis del ritmo (pausa &lt; 10 s)</text>\n  <path class=\"ln\" d=\"M310,40 V54\"/>\n  <rect class=\"dec\" x=\"110\" y=\"54\" width=\"400\" height=\"34\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"68\" text-anchor=\"middle\" font-weight=\"700\">¿Ritmo desfibrilable?</text>\n  <text class=\"sub\" x=\"310\" y=\"80\" text-anchor=\"middle\">FV o TV sin pulso  /  asistolia o AESP</text>\n  <path class=\"ln\" d=\"M310,88 V102 H158 V114\"/>\n  <path class=\"ln\" d=\"M310,102 H462 V114\"/>\n  <text class=\"lbl\" x=\"150\" y=\"99\" text-anchor=\"end\">Sí: FV / TVsp</text>\n  <text class=\"lbl\" x=\"470\" y=\"99\" text-anchor=\"start\">No: asistolia / AESP</text>\n  <rect class=\"acc\" x=\"12\" y=\"114\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"133\" text-anchor=\"middle\" font-weight=\"700\">DESCARGA 200 J (bifásico)</text>\n  <text class=\"accS\" x=\"158\" y=\"145\" text-anchor=\"middle\">y RCP 2 minutos sin chequear pulso</text>\n  <rect class=\"b\" x=\"316\" y=\"114\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"133\" text-anchor=\"middle\" font-weight=\"700\">RCP 2 minutos</text>\n  <text class=\"sub\" x=\"462\" y=\"145\" text-anchor=\"middle\">Acceso IV/IO · adrenalina 1 mg lo antes posible</text>\n  <path class=\"ln\" d=\"M158,158 V172\"/>\n  <rect class=\"b\" x=\"12\" y=\"172\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"191\" text-anchor=\"middle\" font-weight=\"700\">Reevaluar ritmo: persiste FV/TVsp</text>\n  <text class=\"sub\" x=\"158\" y=\"203\" text-anchor=\"middle\">2.ª descarga + RCP 2 min + adrenalina 1 mg c/3-5 min</text>\n  <path class=\"ln\" d=\"M158,216 V230\"/>\n  <rect class=\"b\" x=\"12\" y=\"230\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"249\" text-anchor=\"middle\" font-weight=\"700\">Persiste: 3.ª descarga + RCP 2 min</text>\n  <text class=\"sub\" x=\"158\" y=\"261\" text-anchor=\"middle\">Amiodarona 300 mg EV (luego 150 mg) o lidocaína</text>\n  <path class=\"ln\" d=\"M462,158 V230\"/>\n  <rect class=\"warn\" x=\"316\" y=\"172\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"191\" text-anchor=\"middle\" font-weight=\"700\">NO se descarga en asistolia ni AESP</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"203\" text-anchor=\"middle\">Contraindicado: daño miocárdico y pierde tiempo</text>\n  <rect class=\"b\" x=\"316\" y=\"230\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"249\" text-anchor=\"middle\" font-weight=\"700\">Buscar y tratar causas: 5H y 5T</text>\n  <text class=\"sub\" x=\"462\" y=\"261\" text-anchor=\"middle\">Hipovolemia, hipoxia, H⁺, K⁺, hipotermia · trombosis (coronaria, pulmonar), tensión, taponamiento, tóxicos</text>\n  <path class=\"ln\" d=\"M158,274 V292 H310\"/>\n  <path class=\"ln\" d=\"M462,274 V292 H310\"/>\n  <rect class=\"dec\" x=\"60\" y=\"292\" width=\"500\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"309\" text-anchor=\"middle\" font-weight=\"700\">Vía aérea avanzada, capnografía y relevo cada 2 minutos</text>\n  <text class=\"sub\" x=\"310\" y=\"321\" text-anchor=\"middle\">CO₂ espirado &lt; 10 mmHg: mejorar la RCP · alza súbita: probable RCE</text>\n  <path class=\"ln\" d=\"M310,332 V346\"/>\n  <rect class=\"acc\" x=\"60\" y=\"346\" width=\"500\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"362\" text-anchor=\"middle\" font-weight=\"700\">Retorno de circulación: cuidados post-paro</text>\n  <text class=\"accS\" x=\"310\" y=\"374\" text-anchor=\"middle\">SpO₂ 92-98% · PAM ≥ 65 · ECG 12 derivaciones y coronariografía si hay SDST</text>\n  <text class=\"accS\" x=\"310\" y=\"386\" text-anchor=\"middle\">Evitar fiebre · glicemia · pronóstico neurológico después de 72 h</text>\n  <text class=\"lbl\" x=\"60\" y=\"416\" text-anchor=\"start\">Desfibrilación (en el paro, sin sincronizar) ≠ cardioversión (con pulso, sincronizada, Tema 1.7).</text>\n  <text class=\"lbl\" x=\"60\" y=\"430\" text-anchor=\"start\">Después de cada descarga se reanuda la RCP de inmediato; no se palpa pulso hasta el siguiente análisis.</text>\n\n</svg>"
    },
    "contexto": "Cuando llega el desfibrilador o el monitor, el paro deja de ser una maniobra universal y pasa a ser un problema de ritmo: lo que se hace con una fibrilación ventricular es exactamente lo contrario de lo que se hace con una asistolia. El EUNACOM pregunta cuándo se descarga y cuándo no, en qué momento entran la adrenalina y la amiodarona, cuáles son las causas reversibles (las 5H y las 5T) y qué se hace al recuperar el pulso. Este tema es el soporte vital avanzado que continúa al Tema 1.2; el médico general debe dominar la secuencia aunque después derive al paciente a una unidad de paciente crítico.",
    "contentSections": [
      {
        "subhead": "1. Los Dos Grandes Algoritmos Terapéuticos del ACLS",
        "paragraphs": [
          "Con el monitor o el desfibrilador conectado, el primer paso es <strong>clasificar el ritmo</strong>, con una pausa de menos de 10 segundos, en una de dos vías independientes. Los ritmos <strong>desfibrilables</strong> son la <strong>fibrilación ventricular (FV)</strong>, un temblor caótico de la línea de base sin QRS identificables, y la <strong>taquicardia ventricular sin pulso (TVsp)</strong>, un ritmo ventricular rápido y organizado en un paciente que no tiene pulso. Los <strong>no desfibrilables</strong> son la <strong>asistolia</strong> (línea plana, confirmada en dos derivaciones y con electrodos bien puestos) y la <strong>actividad eléctrica sin pulso (AESP)</strong>, un ritmo organizado que no genera pulso.",
          "<strong>VÍA 1: ritmos desfibrilables (FV / TVsp).</strong> Representan el 70-80% de los paros extrahospitalarios presenciados y tienen la mayor sobrevida si se desfibrila precozmente. Esquema: 1) <strong>descarga inmediata de 200 J bifásicos</strong> (la energía recomendada por el fabricante, habitualmente 120 a 200 J; 360 J en un monofásico); 2) <strong>reanudar la RCP de inmediato por 2 minutos sin chequear pulso ni ritmo</strong>; 3) a los 2 minutos se evalúa el ritmo: si persiste FV/TVsp, <strong>segunda descarga de 200 J</strong>, nuevamente RCP y <strong>adrenalina 1 mg EV</strong>, repetida cada 3 a 5 minutos; 4) si persiste FV/TVsp tras la tercera descarga, se administra <strong>amiodarona 300 mg EV en bolo</strong> (segunda dosis de 150 mg) o, si no hay amiodarona, <strong>lidocaína 1 a 1,5 mg/kg</strong>. La regla del examen: inmediatamente después de descargar se reanudan las compresiones; palpar el pulso o mirar el monitor justo después del choque solo genera pausas, y el corazón recién desfibrilado necesita soporte con compresiones para recuperar su gasto.",
          "En la fibrilación ventricular de la torsión de puntas, o con hipomagnesemia, se agrega <strong>sulfato de magnesio 2 g EV</strong>. La desfibrilación se aplica a ritmos <em>sin pulso</em>; no debe confundirse con la <strong>cardioversión sincronizada</strong>, que se usa en la taquiarritmia con pulso e inestabilidad hemodinámica (Tema 1.7).",
          "<strong>VÍA 2: ritmos no desfibrilables (asistolia / AESP).</strong> La electricidad no sirve y está <strong>formalmente contraindicada</strong> (no tiene utilidad fisiológica, daña el miocardio y retrasa las compresiones). Esquema: 1) <strong>RCP ininterrumpida de alta calidad</strong>; 2) <strong>adrenalina 1 mg EV lo antes posible</strong> (en el primer minuto), repetida cada 3 a 5 minutos; 3) <strong>búsqueda y corrección exhaustiva de las causas reversibles</strong> (5H y 5T); 4) revisar el ritmo cada 2 minutos: si aparece un ritmo desfibrilable, se pasa a la vía 1; si aparece un ritmo organizado con pulso, se inician los cuidados post-paro. En la asistolia se confirma además que los electrodos estén bien puestos y que la ganancia del monitor no esté en cero."
        ]
      },
      {
        "subhead": "2. Vía Aérea Avanzada, Acceso y Monitoreo Durante el Paro",
        "paragraphs": [
          "El acceso de elección es la <strong>vía venosa periférica</strong> o, si no se logra, la <strong>vía intraósea</strong>; los fármacos no se administran por el tubo orotraqueal. La intubación o la mascarilla laríngea no deben interrumpir las compresiones por más de 10 segundos; una vez colocada la vía aérea avanzada las compresiones son continuas y se ventila una vez cada 6 segundos. La posición del tubo y la calidad de la RCP se monitorizan con la <strong>capnografía</strong> (el método de confirmación más confiable en el paro): un CO₂ espirado menor de 10 mmHg a los 20 minutos de RCP es mal pronóstico y exige mejorar las compresiones; un aumento súbito sugiere recuperación de la circulación.",
          "El equipo se organiza con un líder que no hace maniobras y que asigna roles (compresiones, vía aérea, vía venosa, desfibrilador, registro de tiempos). Los relevos de quien comprime se hacen cada 2 minutos aprovechando la pausa del análisis. El <strong>bicarbonato</strong> no se da de rutina; se reserva para la hiperkalemia grave, la intoxicación por antidepresivos tricíclicos o la acidosis metabólica previa severa. El <strong>calcio</strong> tampoco es de rutina: se indica en la hiperkalemia, la hipocalcemia y la intoxicación por bloqueadores del calcio. La <strong>RCP extracorpórea</strong> (ECMO) se reserva para centros especializados en pacientes seleccionados."
        ]
      },
      {
        "subhead": "3. Diagnóstico Etiológico: Regla de las 5H y 5T",
        "paragraphs": [
          "La causa del paro debe identificarse y tratarse mientras se comprime, sobre todo en los ritmos no desfibrilables:",
          "<strong>Las 5H:</strong> 1) <em>Hipovolemia</em> (shock hemorrágico, deshidratación: cristaloides o sangre); 2) <em>Hipoxia</em> (obstrucción de la vía aérea: intubación y O₂ al 100%); 3) <em>Hidrogeniones / acidosis</em> (ventilación adecuada; bicarbonato solo si el pH es menor de 7,1 o hay intoxicación por tricíclicos); 4) <em>Hipo / hiperkalemia</em> (<strong>gluconato de calcio al 10% EV</strong> inmediato en la hiperkalemia con ensanchamiento del QRS); 5) <em>Hipotermia</em> (recalentamiento activo).",
          "<strong>Las 5T:</strong> 1) <em>Trombosis coronaria</em> (infarto): angioplastía de rescate tras el retorno de circulación; 2) <em>Trombosis pulmonar</em> (TEP masivo): trombólisis con alteplasa durante el paro; 3) <em>Tensión (neumotórax a tensión)</em>: descompresión inmediata con aguja en el 2.º espacio intercostal línea medioclavicular o el 5.º espacio línea axilar anterior; 4) <em>Taponamiento cardíaco</em>: pericardiocentesis de urgencia (Tema 5.6); 5) <em>Tóxicos / sobredosis</em> (naloxona en opioides, antídotos específicos).",
          "La clave diagnóstica clásica: un paciente en diálisis o con insuficiencia renal que colapsa, con un QRS muy ancho y lento y ondas T picudas gigantes, tiene una AESP por <strong>hiperkalemia grave</strong>: además de la RCP y la adrenalina, se administra gluconato de calcio al 10% de inmediato, seguido de insulina con glucosa y bicarbonato. Un paro con QRS angosto y pulmones silentes sugiere neumotórax a tensión; con yugulares ingurgitadas, taponamiento o TEP."
        ]
      },
      {
        "subhead": "4. Cuidados Post-Paro (Después de Recuperar la Circulación)",
        "paragraphs": [
          "Al recuperar el pulso comienza la fase más importante para el pronóstico neurológico: 1) mantener la <strong>SpO₂ entre 92 y 98%</strong> (evitar la hiperoxia) y normocapnia; 2) mantener una <strong>PAM ≥ 65 mmHg</strong> con fluidos y vasopresores (noradrenalina); 3) <strong>ECG de 12 derivaciones inmediato</strong> y <strong>coronariografía urgente si hay supradesnivel del ST</strong> (la causa más frecuente del paro es el infarto; Tema 2.5), aun si el paciente está en coma; 4) <strong>control de temperatura</strong> en el paciente que no obedece órdenes: evitar la fiebre y mantener entre 32 y 37,5 °C; 5) controlar la glicemia, tratar las convulsiones y corregir la causa del paro; y 6) <strong>postergar el pronóstico neurológico hasta al menos 72 horas</strong> del evento, con un enfoque multimodal (examen, EEG, imágenes, biomarcadores).",
          "Todo paro se documenta y el paciente se traslada a una unidad de cuidados intensivos. En un paciente con un paro de ritmo desfibrilable por infarto agudo y buen estado previo, los cuidados post-paro y la reperfusión pueden cambiar la sobrevida con buen resultado neurológico; en uno con asistolia prolongada y comorbilidad grave, la conversación sobre los límites del esfuerzo terapéutico se hace con la familia y el equipo tratante."
        ]
      },
      {
        "subhead": "5. Cómo Reconocer los Ritmos del Paro en el Monitor",
        "paragraphs": [
          "<strong>Fibrilación ventricular:</strong> oscilaciones caóticas e irregulares de amplitud y frecuencia variables, sin QRS identificables; puede ser <em>gruesa</em> (mayor de 3 mm, mejor respuesta a la descarga) o <em>fina</em> (puede confundirse con asistolia: se revisa en dos derivaciones y se aumenta la ganancia). <strong>Taquicardia ventricular sin pulso:</strong> QRS ancho, regular y rápido (monomorfa) o con morfología cambiante (polimorfa), en un paciente sin pulso. <strong>Asistolia:</strong> línea casi plana, con ondulaciones mínimas; se confirma que los cables estén conectados, la ganancia sea la adecuada y la derivación correcta (la «línea plana» de un electrodo suelto no es asistolia). <strong>AESP:</strong> cualquier ritmo organizado (incluso sinusal normal) en un paciente sin pulso palpable; el ecocardiograma de cabecera ayuda a distinguirla del «pseudo-AESP» (contracción cardíaca sin pulso palpable).",
          "La torsión de puntas es una TV polimorfa que se trata con magnesio y desfibrilación si no tiene pulso (Tema 1.7). Una bradicardia extrema con QRS ancho y pulso ausente es una AESP, y no se cardioverte. Los latidos con pulso débil o impalpable pero presión arterial medible por línea arterial se consideran retorno de circulación y se pasa a los cuidados post-paro."
        ]
      },
      {
        "subhead": "6. Paro en Situaciones Especiales y Errores Frecuentes",
        "paragraphs": [
          "La búsqueda de la causa cambia la conducta en situaciones específicas: en el <strong>trauma</strong> la causa es hipovolemia, neumotórax a tensión o taponamiento (se trata el reversible, con control de hemorragia y volumen); en la <strong>anafilaxia</strong>, adrenalina precoz y volumen; en el <strong>TEP masivo</strong> sospechado, trombólisis durante el paro; en la <strong>hipotermia</strong>, recalentamiento; en la <strong>sobredosis de opioides</strong>, naloxona y ventilación; en la <strong>intoxicación por antidepresivos tricíclicos</strong> con QRS ancho, bicarbonato de sodio; en la <strong>toxicidad por anestésicos locales</strong>, emulsión lipídica; y en el <strong>paro de causa respiratoria</strong>, la ventilación y la oxigenación. En el paro del <strong>paciente en diálisis o con hiperkalemia</strong> se agrega calcio, insulina y glucosa.",
          "<strong>Errores clásicos del examen:</strong> 1) descargar en asistolia o en AESP; 2) palpar el pulso o mirar el monitor justo después de una descarga en vez de reanudar las compresiones; 3) dar amiodarona antes de la tercera descarga o adrenalina «cada minuto»; 4) administrar fármacos por el tubo orotraqueal; 5) cardiovertir con sincronización a un paciente sin pulso (o desfibrilar a uno con pulso estable); 6) olvidar las causas reversibles en un ritmo no desfibrilable; 7) pronosticar antes de 72 horas; y 8) retrasar la coronariografía en el paciente reanimado con supradesnivel del ST. Un paciente con un paro presenciado de ritmo desfibrilable y el desfibrilador a mano se descarga de inmediato; en los demás, se comprime primero."
        ]
      }
    ],
    "table": {
      "title": "Resumen Comparativo de Fármacos y Manejo en el Paro Cardiorrespiratorio del Adulto",
      "headers": [
        "Fármaco / Intervención",
        "Dosis estándar en adultos",
        "Momento de administración",
        "Indicación / vía ACLS"
      ],
      "rows": [
        [
          "Desfibrilación eléctrica",
          "200 J bifásico (360 J monofásico)",
          "Minuto 0, 2 y 4 si persiste el ritmo",
          "Exclusivo de FV y TV sin pulso"
        ],
        [
          "Adrenalina (epinefrina)",
          "1 mg EV en bolo cada 3-5 min",
          "Tras la 2.ª descarga en FV/TVsp; lo antes posible en asistolia/AESP",
          "Todos los ritmos del paro"
        ],
        [
          "Amiodarona",
          "300 mg EV en bolo (2.ª dosis 150 mg)",
          "Tras la 3.ª descarga fallida",
          "FV/TVsp refractarias"
        ],
        [
          "Lidocaína (alternativa)",
          "1 a 1,5 mg/kg EV",
          "Si no hay amiodarona",
          "FV/TVsp refractarias"
        ],
        [
          "Gluconato de calcio 10%",
          "10 a 20 mL EV en 2-5 min",
          "Sospecha de hiperkalemia, hipocalcemia o toxicidad por bloqueadores del calcio",
          "Asistolia/AESP con QRS ancho o paciente en diálisis"
        ],
        [
          "Sulfato de magnesio",
          "2 g EV",
          "Torsión de puntas o hipomagnesemia",
          "FV/TV polimorfa con QT largo"
        ],
        [
          "Bicarbonato de sodio",
          "50 mEq EV",
          "Solo hiperkalemia grave, tricíclicos o acidosis previa",
          "No es de rutina"
        ]
      ]
    },
    "vignette": "Hombre de 63 años con insuficiencia renal crónica terminal en hemodiálisis colapsa bruscamente en el centro de diálisis. Al llegar el equipo de reanimación no responde, no respira y no tiene pulso carotídeo. El monitor muestra complejos QRS extremadamente anchos a 40 lpm con ondas T picudas gigantes; no hay pulso palpable. Ya se están dando compresiones de calidad.",
    "explicacion": "Es un paro cardiorrespiratorio en un ritmo no desfibrilable, una actividad eléctrica sin pulso: no se descarga. La prioridad es la RCP continua y la adrenalina 1 mg EV lo antes posible. Por el antecedente de insuficiencia renal en diálisis y el ECG con QRS ancho y T picudas, la causa más probable es una hiperkalemia grave (una de las 5H): el tratamiento específico que se administra de inmediato durante la reanimación es gluconato de calcio al 10% endovenoso para estabilizar la membrana miocárdica, seguido de insulina con glucosa y bicarbonato para desplazar el potasio.",
    "keyPoints": [
      "Ritmos desfibrilables: FV y TV sin pulso (descarga de 200 J bifásicos y RCP por 2 minutos). No desfibrilables: asistolia y AESP (RCP, adrenalina y causas reversibles).",
      "Inmediatamente después de la descarga se reanudan las compresiones por 2 minutos, sin palpar pulso ni mirar el monitor.",
      "Adrenalina 1 mg EV cada 3-5 minutos: tras la 2.ª descarga en FV/TVsp, pero lo antes posible en asistolia/AESP.",
      "Amiodarona 300 mg EV tras la 3.ª descarga en FV/TVsp refractaria (luego 150 mg); alternativa: lidocaína 1-1,5 mg/kg.",
      "La descarga en asistolia está contraindicada. La desfibrilación (paro, sin pulso) no es la cardioversión (con pulso, sincronizada).",
      "5H: hipovolemia, hipoxia, hidrogeniones, hipo/hiperkalemia, hipotermia. 5T: trombosis coronaria, trombosis pulmonar, tensión (neumotórax), taponamiento, tóxicos.",
      "AESP con QRS ancho y T picudas en un paciente renal: hiperkalemia; gluconato de calcio 10% EV inmediato, además de RCP y adrenalina.",
      "Post-paro: SpO₂ 92-98%, PAM ≥ 65, ECG y coronariografía urgente si hay supradesnivel, evitar la fiebre y no pronosticar antes de 72 horas."
    ],
    "questions": [
      {
        "stem": "Un paciente de 60 años, con antecedentes de hipertensión arterial, dislipidemia, diabetes mellitus tipo 2 y tabaquismo de 20 paquetes año, consulta en el servicio de urgencia, por dolor precordial opresivo. Luego de su ingreso, presenta compromiso de conciencia, sin respuesta. Al examen físico no respira y es imposible palpar el pulso carotídeo. Además de solicitar ayuda, la conducta inicial más adecuada es:",
        "options": [
          {
            "id": "A",
            "text": "Realizar compresiones torácicas"
          },
          {
            "id": "B",
            "text": "Realizar intubación orotraqueal"
          },
          {
            "id": "C",
            "text": "Dar golpe torácico"
          },
          {
            "id": "D",
            "text": "Desfibrilar"
          },
          {
            "id": "E",
            "text": "Administrar adrenalina endovenosa"
          }
        ],
        "correcta": "A",
        "explicacion": "Aunque el paro sea presenciado, la desfibrilación inmediata solo corresponde si además está monitorizado, con el desfibrilador a mano y con un ritmo desfibrilable ya constatado. Lo habitual es pedir ayuda e iniciar compresiones mientras llega el equipo con el desfibrilador y el carro de paro (adrenalina, amiodarona, vías, tubo).",
        "recTag": "EUNACOM Agosto 2021 · Pregunta 55"
      },
      {
        "stem": "Un paciente de 60 años, con antecedentes de hipertensión arterial, dislipidemia, diabetes mellitus tipo 2 y tabaquismo de 50 paquetes año, consulta por dolor precordial opresivo y durante la anamnesis presenta compromiso de conciencia, sin respuesta. Al examen no respira y es imposible palpar el pulso carotídeo. Además de solicitar ayuda, la conducta más adecuada es:",
        "options": [
          {
            "id": "A",
            "text": "Realizar compresiones torácicas"
          },
          {
            "id": "B",
            "text": "Realizar intubación orotraqueal"
          },
          {
            "id": "C",
            "text": "Dar golpe torácico"
          },
          {
            "id": "D",
            "text": "Administrar adrenalina intracardiaca"
          },
          {
            "id": "E",
            "text": "Realizar angioplastia de urgencia"
          }
        ],
        "correcta": "A",
        "explicacion": "Es un paro: se pide ayuda e inician las compresiones torácicas. Si el paro es presenciado y el desfibrilador está disponible se conecta lo antes posible, pero la conducta de la lista es comprimir. La adrenalina intracardíaca no se usa y la angioplastía es posterior a recuperar la circulación.",
        "recTag": "EUNACOM Julio 2017 · Pregunta 35"
      },
      {
        "stem": "Durante la reanimación cardiopulmonar avanzada de una mujer de 50 años en fibrilación ventricular, se realiza la primera descarga de 200 J bifásicos. ¿Cuál es la acción inmediata que debe realizar el equipo?",
        "options": [
          {
            "id": "A",
            "text": "Reanudar inmediatamente las compresiones torácicas durante 2 minutos antes de cualquier otra evaluación"
          },
          {
            "id": "B",
            "text": "Palpar el pulso carotídeo para verificar si recuperó circulación espontánea"
          },
          {
            "id": "C",
            "text": "Mirar el monitor para comprobar si el ritmo cambió a sinusal"
          },
          {
            "id": "D",
            "text": "Administrar inmediatamente 1 mg de adrenalina endovenosa"
          },
          {
            "id": "E",
            "text": "Administrar 300 mg de amiodarona en bolo rápido"
          }
        ],
        "correcta": "A",
        "explicacion": "Inmediatamente después de una descarga se reanudan las compresiones por 2 minutos completos, sin interrumpir para ver el ritmo ni el pulso: el corazón recién desfibrilado necesita compresiones para recuperar su gasto cardíaco. La adrenalina entra tras la segunda descarga y la amiodarona tras la tercera.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Hombre de 70 años hospitalizado entra en paro cardiorrespiratorio. El monitor muestra una línea isoeléctrica plana en dos derivaciones con electrodos bien posicionados. ¿Cuál de las siguientes intervenciones está CONTRAINDICADA?",
        "options": [
          {
            "id": "A",
            "text": "Aplicar una descarga eléctrica de 200 J"
          },
          {
            "id": "B",
            "text": "Administrar adrenalina 1 mg endovenosa"
          },
          {
            "id": "C",
            "text": "Realizar compresiones torácicas continuas a 100-120 por minuto"
          },
          {
            "id": "D",
            "text": "Ventilar con bolsa-mascarilla conectada a oxígeno"
          },
          {
            "id": "E",
            "text": "Buscar causas reversibles de asistolia"
          }
        ],
        "correcta": "A",
        "explicacion": "La asistolia es un ritmo no desfibrilable: la descarga no tiene utilidad, daña el miocardio y retrasa las compresiones, por lo que está contraindicada. Se comprime, se da adrenalina lo antes posible y se buscan las causas reversibles (5H y 5T).",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "1.2§2 · 1.2§3 · 1.2§4p3 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-04",
    "classId": "cardio-04",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Arritmias y Paro Cardiorrespiratorio",
    "topicLabel": "1.4",
    "title": "Fibrilación Auricular y Flutter Auricular: Diagnóstico, Control de Frecuencia y de Ritmo",
    "perfilCode": "1.01.1.012, 1.01.1.013, 1.01.1.014",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Diagnóstico por pulso irregular y ECG, cardioversión eléctrica en la inestable, control de frecuencia, regla de las 48 horas, flecainida contraindicada en cardiopatía estructural, flutter",
    "svg": null,
    "algoTitle": "Estrategia global de manejo de la fibrilación auricular",
    "diagram": {
      "title": "Manejo de la Fibrilación Auricular: Inestable, Control de Frecuencia y Control de Ritmo",
      "svg": "<svg viewBox=\"0 0 620 470\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar04\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar04)}\n  </style>\n  <rect class=\"b\" x=\"90\" y=\"6\" width=\"440\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Pulso irregular + palpitaciones: ECG</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Sin ondas P, línea de base ondulante (ondas f) y R-R irregularmente irregular = FA</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"dec\" x=\"90\" y=\"58\" width=\"440\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"74\" text-anchor=\"middle\" font-weight=\"700\">¿Inestable? (hipotensión, shock, edema pulmonar, isquemia)</text>\n  <text class=\"sub\" x=\"310\" y=\"86\" text-anchor=\"middle\">Cualquier taquiarritmia inestable se cardioverte, sin importar el tipo</text>\n  <path class=\"ln\" d=\"M310,96 V112 H158 V122\"/>\n  <path class=\"ln\" d=\"M310,112 H462 V122\"/>\n  <text class=\"lbl\" x=\"150\" y=\"108\" text-anchor=\"end\">Sí</text>\n  <text class=\"lbl\" x=\"470\" y=\"108\" text-anchor=\"start\">No: estable</text>\n  <rect class=\"acc\" x=\"12\" y=\"122\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"141\" text-anchor=\"middle\" font-weight=\"700\">CARDIOVERSIÓN ELÉCTRICA sincronizada</text>\n  <text class=\"accS\" x=\"158\" y=\"153\" text-anchor=\"middle\">Inmediata; la anticoagulación se inicia igual</text>\n  <rect class=\"b\" x=\"316\" y=\"122\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"141\" text-anchor=\"middle\" font-weight=\"700\">1. Anticoagular (CHA₂DS₂-VASc, Tema 1.5)</text>\n  <text class=\"sub\" x=\"462\" y=\"153\" text-anchor=\"middle\">2. Controlar la frecuencia: meta FC &lt; 110 lpm en reposo</text>\n  <path class=\"ln\" d=\"M462,166 V182\"/>\n  <rect class=\"dec\" x=\"316\" y=\"182\" width=\"292\" height=\"52\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"193\" text-anchor=\"middle\" font-weight=\"700\">Control de frecuencia</text>\n  <text class=\"sub\" x=\"462\" y=\"205\" text-anchor=\"middle\">Betabloqueador o verapamilo/diltiazem</text>\n  <text class=\"sub\" x=\"462\" y=\"217\" text-anchor=\"middle\">Con FEVI reducida: betabloqueador o digoxina</text>\n  <text class=\"sub\" x=\"462\" y=\"229\" text-anchor=\"middle\">(verapamilo contraindicado)</text>\n  <path class=\"ln\" d=\"M462,234 V250\"/>\n  <rect class=\"dec\" x=\"40\" y=\"250\" width=\"540\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"267\" text-anchor=\"middle\" font-weight=\"700\">¿Duración &lt; 48 h y se busca control de ritmo?</text>\n  <text class=\"sub\" x=\"310\" y=\"279\" text-anchor=\"middle\">Sí: cardioversión (química o eléctrica) · No o dudosa: 3 semanas de anticoagulación o ETE antes</text>\n  <path class=\"ln\" d=\"M310,290 V306 H158 V318\"/>\n  <path class=\"ln\" d=\"M310,306 H462 V318\"/>\n  <rect class=\"b\" x=\"12\" y=\"318\" width=\"292\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"340\" text-anchor=\"middle\" font-weight=\"700\">Corazón sano</text>\n  <text class=\"sub\" x=\"158\" y=\"352\" text-anchor=\"middle\">Flecainida 200-300 mg VO o propafenona</text>\n  <text class=\"sub\" x=\"158\" y=\"364\" text-anchor=\"middle\">o cardioversión eléctrica</text>\n  <rect class=\"warn\" x=\"316\" y=\"318\" width=\"292\" height=\"62\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"340\" text-anchor=\"middle\" font-weight=\"700\">Cardiopatía estructural / infarto / IC</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"352\" text-anchor=\"middle\">Flecainida CONTRAINDICADA (CAST)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"364\" text-anchor=\"middle\">Amiodarona EV o cardioversión eléctrica</text>\n  <path class=\"ln\" d=\"M310,380 V396\"/>\n  <rect class=\"acc\" x=\"60\" y=\"396\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"412\" text-anchor=\"middle\" font-weight=\"700\">Anticoagular ≥ 4 semanas después de cardiovertir</text>\n  <text class=\"accS\" x=\"310\" y=\"424\" text-anchor=\"middle\">Y de por vida si CHA₂DS₂-VASc ≥ 2 (hombre) o ≥ 3 (mujer)</text>\n  <text class=\"lbl\" x=\"60\" y=\"454\" text-anchor=\"start\">Flutter: ondas F en dientes de sierra a 300/min, conducción 2:1 = 150 lpm regular. Mismas reglas; ablación del istmo.</text>\n\n</svg>"
    },
    "contexto": "La fibrilación auricular es la arritmia sostenida más frecuente del adulto y la que más se cruza en la práctica del médico general: el paciente que consulta por palpitaciones con pulso irregular, el adulto mayor con un ACV embólico, el hipertenso con disnea. El examen la pregunta de varias maneras: cómo se reconoce, cuándo se cardiovierte de inmediato, qué fármaco frena la frecuencia, cuándo es peligroso cardiovertir y por qué la flecainida está prohibida en el corazón enfermo. El flutter comparte casi todas las reglas y tiene una firma electrocardiográfica propia. La anticoagulación, que es lo que previene el ACV, se revisa en el Tema 1.5.",
    "contentSections": [
      {
        "subhead": "1. Epidemiología, Causas y Diagnóstico Electrocardiográfico",
        "paragraphs": [
          "La <strong>fibrilación auricular (FA)</strong> es la arritmia cardíaca sostenida más frecuente en Chile y en el mundo y afecta a más del 10% de los mayores de 80 años. Es responsable de <strong>1 de cada 3 accidentes cerebrovasculares isquémicos</strong>, los que suelen ser más extensos, más discapacitantes y más letales que los aterotrombóticos. Se clasifica en <strong>paroxística</strong> (cede sola en menos de 7 días), <strong>persistente</strong> (dura más de 7 días o requiere cardioversión) y <strong>permanente</strong> (se acepta como definitiva); la que no es valvular se llama «no valvular» y la que ocurre en una estenosis mitral reumática o con una prótesis valvular mecánica se llama «valvular».",
          "Las causas y gatillantes más preguntados son la <strong>hipertensión arterial</strong> (la más frecuente), la <strong>valvulopatía mitral</strong> (estenosis mitral: un R1 reforzado con ritmo irregular y disnea), la insuficiencia cardíaca, la cardiopatía isquémica, el <strong>hipertiroidismo</strong>, el <strong>consumo excesivo de alcohol</strong> («corazón del fin de semana» o <em>holiday heart</em>: un joven con palpitaciones tras varios días de consumo abundante), la EPOC, la apnea del sueño, la obesidad, el tromboembolismo pulmonar, la sepsis y el posoperatorio (sobre todo cardíaco y torácico).",
          "El examen sospecha el diagnóstico: <strong>pulso irregularmente irregular</strong> («arritmia completa») con un primer ruido de intensidad variable y ausencia de onda «a» yugular. El ECG lo confirma: 1) <strong>ausencia total de ondas P sinusales</strong>; 2) <strong>oscilaciones basales rápidas e irregulares (ondas f, 350 a 600 por minuto)</strong>, a veces casi planas; 3) intervalos <strong>R-R completamente irregulares</strong>, con QRS habitualmente angosto y una frecuencia ventricular de 100 a 180 lpm sin tratamiento. Una taquicardia irregular de QRS angosto es una FA hasta que se demuestre lo contrario; la taquicardia auricular multifocal (EPOC grave) es irregular pero tiene P de tres o más morfologías, y la taquicardia sinusal y la TPSV son regulares.",
          "<strong>Estudio mínimo:</strong> ECG de 12 derivaciones, hemograma, electrolitos (potasio, magnesio), función renal y hepática (para elegir y dosificar fármacos), <strong>TSH</strong> y <strong>ecocardiograma</strong> (válvulas, tamaño de la aurícula izquierda, FEVI). La troponina se pide si hay dolor torácico. Se calcula el riesgo embólico (Tema 1.5) y el riesgo de sangrado antes de tratar."
        ]
      },
      {
        "subhead": "2. Paciente Inestable y Control de la Frecuencia Cardíaca",
        "paragraphs": [
          "<strong>La FA con inestabilidad hemodinámica</strong> (hipotensión, shock, edema pulmonar agudo, dolor torácico isquémico o compromiso de conciencia) se trata, como toda taquiarritmia inestable, con <strong>cardioversión eléctrica sincronizada inmediata</strong>, sin esperar fármacos ni ecocardiograma (no confundir con la desfibrilación, que es para el paro). Se anticoagula en forma simultánea. En una mujer de 68 años con FA a 160 lpm, PA 85/40 mmHg y extremidades frías, la conducta es cardiovertir, no dar verapamilo ni amiodarona.",
          "En el paciente estable la estrategia inicial es la <strong>anticoagulación</strong> (Tema 1.5) y el <strong>control de la frecuencia cardíaca</strong>, con una meta de <strong>FC menor de 110 lpm en reposo</strong> (control «laxo»; se baja más si persisten síntomas o hay miocardiopatía por taquicardia). Los fármacos: <strong>betabloqueadores</strong> (metoprolol, bisoprolol, carvedilol) o <strong>calcioantagonistas no dihidropiridínicos</strong> (verapamilo, diltiazem). En FA con respuesta ventricular rápida, función ventricular conservada y paciente estable, el <strong>metoprolol</strong> es de primera línea.",
          "Con <strong>insuficiencia cardíaca con FEVI reducida</strong> solo se usan betabloqueadores (en paciente compensado) o <strong>digoxina</strong>; el <strong>verapamilo y el diltiazem están contraindicados</strong> porque empeoran la falla de bomba. En un paciente con <strong>asma o EPOC con broncoespasmo</strong> los betabloqueadores no se usan (atenolol y carvedilol son la respuesta clásica de «fármaco contraindicado»), y se prefiere el calcioantagonista. En hipotensión o shock cardiogénico los calcioantagonistas tampoco se emplean. La <strong>digoxina</strong> sirve en el sedentario o en la insuficiencia cardíaca, es de acción lenta y se debe usar con cuidado en la insuficiencia renal y la hipokalemia. La <strong>amiodarona</strong> endovenosa frena la frecuencia en el paciente crítico pero puede cardiovertir (riesgo embólico si no está anticoagulado). En la <strong>FA preexcitada</strong> (síndrome de Wolff-Parkinson-White) los frenadores del nodo AV están prohibidos (Tema 1.6).",
          "La FA se trata además en su causa: en el hipertiroidismo se usa betabloqueador y antitiroideos; en el consumo de alcohol, abstención (muchas ceden solas en horas o días); en la sepsis o el posoperatorio, se corrige el desencadenante. La <strong>FA de reciente comienzo</strong> debe anticoagularse igual: la única excepción es el episodio autolimitado de muy corta duración en el paciente de bajo riesgo."
        ]
      },
      {
        "subhead": "3. Control de Ritmo, Cardioversión y Regla de las 48 Horas",
        "paragraphs": [
          "El <strong>control de ritmo</strong> (cardioversión eléctrica o farmacológica) se prefiere en el paciente joven, muy sintomático, con FA de reciente inicio o con insuficiencia cardíaca atribuible a la arritmia; la guía actual propone un abordaje integral (AF-CARE: comorbilidades, evitar ACV, reducir síntomas y evaluación dinámica). En la FA de <strong>menos de 48 horas</strong> se puede cardiovertir de inmediato. El <strong>fármaco de elección en un corazón estructuralmente sano</strong> son los antiarrítmicos clase Ic: <strong>flecainida 200-300 mg VO</strong> o propafenona. Si el paciente tiene <strong>cardiopatía estructural, antecedente de infarto, hipertrofia importante o insuficiencia cardíaca</strong>, la flecainida y la propafenona están <strong>contraindicadas</strong> (producen arritmias ventriculares letales; estudio CAST): el fármaco seguro es la <strong>amiodarona EV</strong>. La cardioversión eléctrica es más eficaz que la química y se hace bajo sedación breve.",
          "<strong>Regla de las 48 horas:</strong> si la FA tiene <strong>más de 48 horas</strong> de evolución (o tiempo indeterminado), está <strong>prohibido cardiovertir</strong> sin antes: a) <strong>anticoagular durante 3 semanas</strong> (con un anticoagulante oral directo), o b) descartar trombos en la orejuela izquierda con un <strong>ecocardiograma transesofágico (ETE)</strong>. En ambos casos se mantiene la anticoagulación por <strong>al menos 4 semanas después</strong> de la cardioversión, y de por vida si el CHA₂DS₂-VASc lo indica. La razón es que la aurícula recobra su contracción tras volver al ritmo sinusal y puede expulsar un trombo formado durante la fibrilación.",
          "El <strong>mantenimiento del ritmo sinusal</strong> se logra con antiarrítmicos (flecainida o propafenona en corazón sano, amiodarona o sotalol/dronedarona en otros contextos) o con <strong>ablación con catéter</strong> (aislamiento de las venas pulmonares), que es una opción de primera línea en el paciente joven sintomático y en la insuficiencia cardíaca con FEVI reducida. La ablación del nodo AV con marcapaso se reserva para casos refractarios. Los antiarrítmicos son tratamiento sintomático: <strong>no reemplazan la anticoagulación</strong>, que se decide por el riesgo y no por el ritmo."
        ]
      },
      {
        "subhead": "4. Flutter Auricular (Aleteo Auricular)",
        "paragraphs": [
          "El <strong>flutter auricular</strong> típico es una macrorreentrada auricular derecha alrededor del anillo tricuspídeo, a través del <strong>istmo cavotricuspídeo</strong>. En el ECG se caracteriza por <strong>ondas F «en dientes de sierra» regulares a 300 por minuto</strong>, mejor vistas en las derivaciones inferiores (DII, DIII, aVF) y sin segmento isoeléctrico, con <strong>conducción AV fija 2:1</strong> que produce una taquicardia regular de <strong>150 lpm</strong> casi exactos. La frecuencia de 150 lpm regular de QRS angosto debe hacer pensar siempre en flutter (y no en taquicardia sinusal). Las <strong>maniobras vagales o la adenosina</strong> aumentan el bloqueo AV transitoriamente y dejan ver las ondas de sierra sin terminar la arritmia, lo que ayuda a distinguirlo de la TPSV.",
          "La estratificación del riesgo tromboembólico y la <strong>anticoagulación siguen las mismas reglas que la FA</strong>, y la regla de las 48 horas se aplica igual. El control de frecuencia es más difícil que en la FA; la cardioversión eléctrica con energía baja es muy eficaz. Con antiarrítmicos clase Ic el flutter se enlentece y puede conducirse 1:1 (frecuencia ventricular de 250 a 300 lpm), por lo que se asocia un frenador del nodo AV. El <strong>tratamiento curativo de elección es la ablación por radiofrecuencia del istmo cavotricuspídeo</strong>, con una tasa de éxito mayor del 95%. Un flutter o una FA «lentos» en un paciente que usa digoxina o tiene bloqueo AV pueden representar un bloqueo completo: se revisa el ritmo ventricular regularizado."
        ]
      },
      {
        "subhead": "5. Situaciones Clínicas Especiales y Seguimiento",
        "paragraphs": [
          "<strong>FA en la insuficiencia cardíaca:</strong> la FA descompensa la insuficiencia cardíaca (se pierde la contribución auricular) y la insuficiencia cardíaca favorece la FA; se prefieren los betabloqueadores aprobados para la IC (bisoprolol, carvedilol, succinato de metoprolol) y la digoxina, y se evita el verapamilo y el diltiazem; la ablación mejora la sobrevida en pacientes seleccionados con FEVI reducida. <strong>FA en la estenosis mitral:</strong> es la «FA valvular»: el crecimiento de la aurícula izquierda y la estasis tienen un riesgo embólico altísimo; el anticoagulante es un antagonista de vitamina K (Tema 1.5) y el control de la frecuencia con betabloqueador o verapamilo es esencial porque la taquicardia acorta el llenado diastólico y eleva la presión auricular.",
          "<strong>FA posoperatoria y en el paciente crítico:</strong> aparece entre el segundo y el cuarto día; se corrigen el dolor, la hipovolemia, la hipoxemia y los electrolitos, y se frena la frecuencia; con frecuencia revierte sola. <strong>FA en el embarazo:</strong> se busca una causa (cardiopatía, hipertiroidismo); la cardioversión eléctrica es segura, los betabloqueadores cardioselectivos son la primera opción y se evitan los anticoagulantes orales directos y la warfarina (heparina de bajo peso molecular). <strong>FA de causa metabólica o tóxica</strong> (alcohol, hipertiroidismo, feocromocitoma, sepsis): se trata la causa y se anticoagula según el puntaje. <strong>FA como causa de ACV:</strong> toda persona con un ACV o AIT de causa no clara debe tener un ECG y un monitoreo prolongado (Holter, parche, registrador implantable) para buscar FA paroxística, porque cambia la prevención secundaria (se anticoagula en vez de dar antiagregantes).",
          "<strong>Seguimiento:</strong> el paciente con FA permanente se controla cada 6 a 12 meses: frecuencia en reposo y con esfuerzo, ecocardiograma si hay cambios, función renal, hemoglobina, dosis y adherencia del anticoagulante, y actualización del puntaje. Si la frecuencia se mantiene alta durante meses con FEVI en descenso se sospecha una miocardiopatía mediada por taquicardia, que se revierte al controlar la frecuencia o el ritmo. La estrategia «pastilla en el bolsillo» (flecainida u otro, autoadministrada ante una crisis) se reserva para pacientes seleccionados con corazón sano y crisis infrecuentes y bien toleradas, con una primera dosis supervisada.",
          "<strong>Errores clásicos del examen:</strong> cardiovertir una FA de más de 48 horas sin anticoagular ni hacer ETE; indicar flecainida en el paciente con infarto previo; usar verapamilo en la insuficiencia cardíaca con FEVI baja; dar adenosina o verapamilo a una FA con QRS ancho e irregular; usar aspirina «en vez de» anticoagular; y olvidar la anticoagulación porque «el paciente volvió al ritmo sinusal» o porque «tiene 80 años»."
        ]
      }
    ],
    "table": {
      "title": "Fármacos para Control de Frecuencia y de Ritmo en la Fibrilación Auricular",
      "headers": [
        "Fármaco / grupo",
        "Mecanismo / dosis",
        "Indicación clínica principal",
        "Contraindicación / advertencia crítica"
      ],
      "rows": [
        [
          "Metoprolol / bisoprolol / carvedilol",
          "Betabloqueadores (VO; metoprolol EV 5 mg lento)",
          "Control de frecuencia de 1.ª línea (incluso en IC compensada)",
          "Asma y EPOC con broncoespasmo, bloqueo AV avanzado, shock"
        ],
        [
          "Verapamilo / diltiazem",
          "Calcioantagonistas no DHP",
          "Control de frecuencia sin insuficiencia cardíaca",
          "CONTRAINDICADOS en IC con FEVI reducida e hipotensión"
        ],
        [
          "Digoxina",
          "Inhibe la bomba Na/K; frena el nodo AV",
          "Control de frecuencia en IC o en sedentarios",
          "Insuficiencia renal, hipokalemia; preexcitación"
        ],
        [
          "Flecainida / propafenona",
          "Antiarrítmico clase Ic (VO)",
          "Cardioversión farmacológica en corazón SANO (< 48 h)",
          "ESTRICTAMENTE CONTRAINDICADAS en infarto previo o IC (CAST)"
        ],
        [
          "Amiodarona",
          "Antiarrítmico clase III (EV / VO)",
          "Cardioversión en cardiopatía estructural o IC; control de frecuencia en el crítico",
          "Toxicidad pulmonar, tiroidea, hepática y corneal; riesgo embólico si no se anticoagula"
        ],
        [
          "Cardioversión eléctrica",
          "Choque sincronizado bajo sedación",
          "FA inestable (inmediata) o de reciente inicio",
          "FA > 48 h: 3 semanas de anticoagulación o ETE antes"
        ]
      ]
    },
    "vignette": "Hombre de 71 años, hipertenso y con antecedente de infarto agudo al miocardio hace 2 años (FEVI 35%), consulta por palpitaciones de 4 horas de evolución. ECG: fibrilación auricular con respuesta ventricular rápida a 140 lpm. PA 130/80 mmHg, sin dolor torácico ni signos de shock. El médico de turno decide realizar una cardioversión farmacológica.",
    "explicacion": "El paciente presenta una FA de menos de 48 horas, pero con una cardiopatía estructural severa (infarto previo y FEVI de 35%). En este escenario los antiarrítmicos clase Ic (flecainida y propafenona) están formalmente contraindicados porque inducen taquicardia ventricular y muerte. El único fármaco seguro y de elección para la cardioversión química en la cardiopatía isquémica o con disfunción ventricular es la amiodarona endovenosa; otra opción es la cardioversión eléctrica. Con un CHA₂DS₂-VASc de 4 (edad 65-74: 1, HTA: 1, IAM previo: 1, IC con FEVI reducida: 1) debe quedar con anticoagulación oral permanente con un anticoagulante oral directo. Si necesitara frenar la frecuencia, el verapamilo está contraindicado por la FEVI reducida.",
    "keyPoints": [
      "FA: pulso irregularmente irregular, ECG sin ondas P, línea de base ondulante (ondas f) y R-R irregular; causa de 1 de cada 3 ACV isquémicos.",
      "FA inestable (shock, edema pulmonar, isquemia): cardioversión eléctrica sincronizada inmediata; no confundir con desfibrilación.",
      "Paciente estable: anticoagular y controlar la frecuencia (meta FC < 110 lpm); metoprolol o verapamilo/diltiazem; con FEVI reducida, betabloqueador o digoxina y NO verapamilo.",
      "Betabloqueadores no se usan en el asma ni en el EPOC con broncoespasmo (atenolol, carvedilol); se prefiere el calcioantagonista.",
      "FA < 48 h: se puede cardiovertir; FA > 48 h o dudosa: 3 semanas de anticoagulación o ETE antes, y ≥ 4 semanas de anticoagulación después.",
      "Flecainida y propafenona solo en corazón sano; en cardiopatía estructural, infarto o IC, amiodarona EV o cardioversión eléctrica.",
      "Flutter típico: ondas F en dientes de sierra a 300 por minuto, conducción 2:1 (150 lpm regular); las maniobras vagales dejan ver las ondas; ablación del istmo cavotricuspídeo (> 95%).",
      "FA preexcitada (WPW): prohibidos adenosina, verapamilo, diltiazem, digoxina y betabloqueadores (Tema 1.6); la anticoagulación se decide por CHA₂DS₂-VASc (Tema 1.5)."
    ],
    "questions": [
      {
        "stem": "Paciente con ECG que muestra fibrilación auricular con respuesta ventricular rápida (130 lpm) y función ventricular conservada. Hemodinámicamente estable. ¿Cuál es el fármaco de elección para control de frecuencia?",
        "options": [
          {
            "id": "A",
            "text": "Metoprolol oral"
          },
          {
            "id": "B",
            "text": "Amiodarona EV"
          },
          {
            "id": "C",
            "text": "Digoxina EV"
          },
          {
            "id": "D",
            "text": "Flecainida oral"
          },
          {
            "id": "E",
            "text": "Sotalol oral"
          }
        ],
        "correcta": "A",
        "explicacion": "FA con respuesta ventricular rápida, estable y con FEVI conservada: control de frecuencia con betabloqueador (metoprolol, primera línea) o calcioantagonista no dihidropiridínico. La amiodarona y la flecainida son fármacos de control de ritmo, y la digoxina se reserva para la insuficiencia cardíaca.",
        "recTag": "EUNACOM Julio 2025 · Pregunta 128"
      },
      {
        "stem": "Un hombre de 35 años consulta por palpitaciones intensas, que iniciaron tras 4 días de consumo abundante de alcohol. Al examen físico se palpa pulso irregular a 160 latidos por minuto y se constata presión arterial de 105/67 mmHg. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Taquicardia sinusal"
          },
          {
            "id": "B",
            "text": "Taquicardia paroxística supraventricular"
          },
          {
            "id": "C",
            "text": "Taquicardia ventricular"
          },
          {
            "id": "D",
            "text": "Fibrilación auricular"
          },
          {
            "id": "E",
            "text": "Taquicardia auricular multifocal"
          }
        ],
        "correcta": "D",
        "explicacion": "Un pulso irregular rápido después de un consumo abundante de alcohol («corazón del fin de semana») es una fibrilación auricular. La taquicardia sinusal y la TPSV son regulares; la taquicardia auricular multifocal es irregular pero rara y propia del EPOC grave; la taquicardia ventricular es poco probable en un joven sano y hemodinámicamente estable. Se confirma con un ECG.",
        "recTag": "EUNACOM Diciembre 2025 · Pregunta 154"
      },
      {
        "stem": "Una paciente de 68 años, con antecedente de diabetes, hipertensión arterial, en tratamiento con enalapril, metformina y aspirina, consulta por un cuadro de palpitaciones, asociado a malestar general y disnea de reposo. Tiene frecuencia cardíaca irregular de 160 lpm, PA: 85/40 mmHg, extremidades pálidas y frías en la zona distal. Su electrocardiograma muestra una fibrilación auricular rápida. ¿Cuál es la conducta inicial más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Administrar amiodarona"
          },
          {
            "id": "B",
            "text": "Administrar verapamilo"
          },
          {
            "id": "C",
            "text": "Administrar heparina y clopidogrel"
          },
          {
            "id": "D",
            "text": "Realizar cardioversión eléctrica"
          },
          {
            "id": "E",
            "text": "Administrar nitritos y morfina"
          }
        ],
        "correcta": "D",
        "explicacion": "Es una FA con inestabilidad hemodinámica (hipotensión e hipoperfusión): como toda taquiarritmia inestable, se cardioverte eléctricamente de inmediato, sin esperar fármacos. El verapamilo agravaría la hipotensión y la amiodarona tarda; la anticoagulación se inicia en paralelo.",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 2"
      },
      {
        "stem": "Un paciente hipertenso bien controlado, con antecedente de EPOC, presenta un cuadro de palpitaciones y disnea, siendo diagnosticado de fibrilación auricular. ¿Qué fármaco está contraindicado?",
        "options": [
          {
            "id": "A",
            "text": "Atenolol"
          },
          {
            "id": "B",
            "text": "Digoxina"
          },
          {
            "id": "C",
            "text": "Enalapril"
          },
          {
            "id": "D",
            "text": "Acenocumarol"
          },
          {
            "id": "E",
            "text": "Amlodipino"
          }
        ],
        "correcta": "A",
        "explicacion": "En el EPOC (y en el asma) se evitan los betabloqueadores por el riesgo de broncoespasmo; el control de la frecuencia se hace con un calcioantagonista no dihidropiridínico o con digoxina. El acenocumarol es el anticoagulante de elección en la FA valvular y la digoxina y el enalapril no están contraindicados.",
        "recTag": "EUNACOM Julio 2016 · Pregunta 1"
      }
    ],
    "_origen": "1.3§0 · 1.3§3 · 1.3§4 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-05",
    "classId": "cardio-05",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Arritmias y Paro Cardiorrespiratorio",
    "topicLabel": "1.5",
    "title": "Anticoagulación en Fibrilación Auricular: CHA₂DS₂-VASc, Anticoagulantes Directos y Antagonistas de Vitamina K",
    "perfilCode": "1.01.3.003",
    "dx": "No aplica",
    "tx": "No aplica",
    "seg": "No aplica",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Cálculo del CHA₂DS₂-VASc y umbral de anticoagulación, anticoagulante directo como primera línea, FA valvular y prótesis mecánica con antagonista de vitamina K, aspirina contraindicada, manejo del sangrado",
    "svg": null,
    "algoTitle": "Decisión de anticoagulación en la fibrilación auricular",
    "diagram": {
      "title": "Anticoagulación en la FA: Valvular o No Valvular, CHA₂DS₂-VASc y Elección del Fármaco",
      "svg": "<svg viewBox=\"0 0 620 440\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar05\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar05)}\n  </style>\n  <rect class=\"b\" x=\"110\" y=\"6\" width=\"400\" height=\"36\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"21\" text-anchor=\"middle\" font-weight=\"700\">Fibrilación auricular o flutter confirmados</text>\n  <text class=\"sub\" x=\"310\" y=\"33\" text-anchor=\"middle\">Anticoagular antes de pensar en el ritmo: el riesgo embólico no depende de si hay síntomas</text>\n  <path class=\"ln\" d=\"M310,42 V56\"/>\n  <rect class=\"dec\" x=\"70\" y=\"56\" width=\"480\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\">¿Estenosis mitral reumática moderada-grave o prótesis valvular mecánica?</text>\n  <text class=\"sub\" x=\"310\" y=\"85\" text-anchor=\"middle\">«FA valvular»: el riesgo es alto de entrada, sin calcular puntaje</text>\n  <path class=\"ln\" d=\"M310,96 V112 H158 V124\"/>\n  <path class=\"ln\" d=\"M310,112 H462 V124\"/>\n  <text class=\"lbl\" x=\"150\" y=\"108\" text-anchor=\"end\">Sí</text>\n  <text class=\"lbl\" x=\"470\" y=\"108\" text-anchor=\"start\">No: FA no valvular</text>\n  <rect class=\"warn\" x=\"12\" y=\"124\" width=\"292\" height=\"62\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"134\" text-anchor=\"middle\" font-weight=\"700\">ANTAGONISTA DE VITAMINA K</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"146\" text-anchor=\"middle\">Acenocumarol o warfarina</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"158\" text-anchor=\"middle\">INR 2,0-3,0 (estenosis mitral)</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"170\" text-anchor=\"middle\">INR 2,5-3,5 (prótesis mecánica mitral)</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"182\" text-anchor=\"middle\">Los anticoagulantes directos están CONTRAINDICADOS</text>\n  <rect class=\"dec\" x=\"316\" y=\"124\" width=\"292\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"140\" text-anchor=\"middle\" font-weight=\"700\">Calcular CHA₂DS₂-VASc</text>\n  <text class=\"sub\" x=\"462\" y=\"152\" text-anchor=\"middle\">IC 1 · HTA 1 · edad ≥ 75 = 2 · DM 1</text>\n  <text class=\"sub\" x=\"462\" y=\"164\" text-anchor=\"middle\">ACV/AIT = 2 · vascular 1 · edad 65-74 = 1</text>\n  <text class=\"sub\" x=\"462\" y=\"176\" text-anchor=\"middle\">sexo femenino 1</text>\n  <path class=\"ln\" d=\"M462,186 V204 H158 V214\"/>\n  <path class=\"ln\" d=\"M462,204 H462 V214\"/>\n  <rect class=\"acc\" x=\"12\" y=\"214\" width=\"292\" height=\"56\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"227\" text-anchor=\"middle\" font-weight=\"700\">Hombre ≥ 2 · Mujer ≥ 3</text>\n  <text class=\"accS\" x=\"158\" y=\"239\" text-anchor=\"middle\">ANTICOAGULACIÓN ORAL PERMANENTE</text>\n  <text class=\"accS\" x=\"158\" y=\"251\" text-anchor=\"middle\">Apixabán, rivaroxabán, dabigatrán o edoxabán</text>\n  <text class=\"accS\" x=\"158\" y=\"263\" text-anchor=\"middle\">(1.ª línea); NUNCA aspirina sola</text>\n  <rect class=\"b\" x=\"316\" y=\"214\" width=\"292\" height=\"56\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"233\" text-anchor=\"middle\" font-weight=\"700\">Hombre 1 · Mujer 2</text>\n  <text class=\"sub\" x=\"462\" y=\"245\" text-anchor=\"middle\">Considerar anticoagular</text>\n  <text class=\"sub\" x=\"462\" y=\"257\" text-anchor=\"middle\">Hombre 0 · Mujer 1: no anticoagular</text>\n  <path class=\"ln\" d=\"M158,270 V286 H310\"/>\n  <path class=\"ln\" d=\"M462,270 V286 H310\"/>\n  <rect class=\"dec\" x=\"60\" y=\"286\" width=\"500\" height=\"52\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"303\" text-anchor=\"middle\" font-weight=\"700\">Antes de indicar y mientras se usa</text>\n  <text class=\"sub\" x=\"310\" y=\"315\" text-anchor=\"middle\">Función renal y hepática, peso, hemoglobina e interacciones</text>\n  <text class=\"sub\" x=\"310\" y=\"327\" text-anchor=\"middle\">Riesgo de sangrado (HAS-BLED): corregir HTA, alcohol, AINE y antiagregantes</text>\n  <path class=\"ln\" d=\"M310,338 V354\"/>\n  <rect class=\"acc\" x=\"60\" y=\"354\" width=\"500\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"370\" text-anchor=\"middle\" font-weight=\"700\">Cardioversión: ≥ 3 semanas antes (o ETE) y ≥ 4 semanas después</text>\n  <text class=\"accS\" x=\"310\" y=\"382\" text-anchor=\"middle\">Hemorragia mayor: suspender, medidas locales y antídoto</text>\n  <text class=\"accS\" x=\"310\" y=\"394\" text-anchor=\"middle\">(vitamina K + CCP · idarucizumab · andexanet)</text>\n  <text class=\"lbl\" x=\"60\" y=\"424\" text-anchor=\"start\">La aspirina (sola o con clopidogrel) no previene el ACV en la FA y sangra casi igual: está contraindicada.</text>\n\n</svg>"
    },
    "contexto": "Lo que realmente cambia la vida del paciente con fibrilación auricular no es el ritmo sino el ACV que se evita: anticoagular bien reduce el riesgo de embolia cerebral en cerca de dos tercios. El médico general decide a quién se anticoagula (con el puntaje CHA₂DS₂-VASc), con qué fármaco (anticoagulante oral directo o antagonista de vitamina K según haya o no una válvula mecánica o una estenosis mitral) y cómo se controla y se rescata cuando algo sale mal. El EUNACOM pregunta el puntaje, la elección y los errores clásicos, como indicar aspirina, usar un anticoagulante directo con una prótesis mecánica o dejar sin anticoagular a la persona de 80 años por «edad».",
    "contentSections": [
      {
        "subhead": "1. Por Qué se Anticoagula y a Quién: Estratificación con CHA₂DS₂-VASc",
        "paragraphs": [
          "En la fibrilación auricular (FA) la aurícula izquierda, y sobre todo su orejuela, no se contrae: la sangre queda estancada y se forma un trombo que puede embolizar al cerebro. El ACV de la FA es más extenso y letal que el aterotrombótico. El riesgo existe tanto en la FA paroxística como en la persistente o permanente, y <strong>no depende de los síntomas ni de si la frecuencia está controlada</strong>: una paciente asintomática con pulso de 84 lpm irregular y varios factores de riesgo debe anticoagularse igual.",
          "Todo paciente con <strong>FA no valvular</strong> se estratifica con el <strong>puntaje CHA₂DS₂-VASc</strong>: <strong>C</strong>ongestive heart failure (insuficiencia cardíaca o FEVI ≤ 40%): 1 punto; <strong>H</strong>ipertensión arterial: 1; <strong>A</strong>ge ≥ 75 años: 2; <strong>D</strong>iabetes mellitus: 1; <strong>S</strong>troke / AIT / tromboembolismo previo: 2; <strong>V</strong>ascular disease (infarto previo, enfermedad arterial periférica, placa aórtica): 1; <strong>A</strong>ge 65-74 años: 1; <strong>Sc</strong> Sex category (sexo femenino): 1.",
          "<strong>Conducta según el puntaje:</strong> hombres con <strong>2 o más</strong> y mujeres con <strong>3 o más</strong> puntos: <strong>anticoagulación oral obligatoria</strong>, de por vida; hombres con 1 y mujeres con 2: <strong>considerar</strong> anticoagular (se decide con el paciente); hombres con 0 y mujeres con 1: <strong>no anticoagular</strong>. Un mismo paciente de 78 años con FA no valvular y CHA₂DS₂-VASc de 4 se anticoagula: la edad avanzada no es una contraindicación, sino un factor de riesgo. El puntaje se recalcula cada año, porque el paciente suma puntos al envejecer y al desarrollar hipertensión o diabetes.",
          "Regla prohibida del examen: la <strong>aspirina</strong>, sola o en combinación con clopidogrel, <strong>no es una alternativa</strong> a la anticoagulación en la FA: no reduce los ACV de manera relevante y aumenta el riesgo de sangrado digestivo y cerebral casi tanto como un anticoagulante. Tampoco se retira la anticoagulación porque el paciente «volvió al ritmo sinusal» tras una cardioversión: el riesgo depende del puntaje y se mantiene."
        ]
      },
      {
        "subhead": "2. Selección del Anticoagulante: ACOD frente a Antagonistas de Vitamina K",
        "paragraphs": [
          "Los <strong>anticoagulantes orales directos (ACOD)</strong> son la <strong>primera línea</strong> recomendada por el MINSAL y las guías internacionales en la FA no valvular: <strong>apixabán 5 mg cada 12 horas</strong>, <strong>rivaroxabán 20 mg al día</strong> con la comida, <strong>dabigatrán 150 mg cada 12 horas</strong> y edoxabán 60 mg al día. Son más eficaces o equivalentes a la warfarina en reducir el ACV, reducen alrededor de la mitad las hemorragias intracraneales y no requieren controles de laboratorio ni ajustes por la dieta. El apixabán tiene el menor riesgo de sangrado y es el de elección en el adulto mayor; el dabigatrán se elimina por vía renal en un 80%.",
          "<strong>Ajuste de dosis:</strong> el apixabán baja a 2,5 mg cada 12 horas si se cumplen al menos dos de estos tres criterios: edad ≥ 80 años, peso ≤ 60 kg o creatinina ≥ 1,5 mg/dL. El rivaroxabán se reduce a 15 mg si el clearance de creatinina es de 15 a 50 mL/min. Antes de indicar un ACOD se mide la <strong>función renal</strong> (clearance de creatinina), el hemograma, la función hepática y el peso, y se revisan las interacciones (los inductores e inhibidores fuertes de la glicoproteína P y del CYP3A4, como la rifampicina, la carbamazepina, el ketoconazol o el ritonavir, las alteran). Los ACOD tienen vida media corta: <strong>una dosis olvidada importa</strong>.",
          "<strong>Excepciones: los ACOD están estrictamente contraindicados</strong> en: 1) la <strong>estenosis mitral reumática moderada o grave</strong>; y 2) las <strong>prótesis valvulares cardíacas mecánicas</strong> (los ensayos mostraron más trombosis protésica y sangrado). En estos dos escenarios (la «FA valvular») la única opción es un <strong>antagonista de vitamina K: acenocumarol o warfarina</strong>, con una <strong>meta de INR entre 2,0 y 3,0</strong> en la estenosis mitral y la prótesis aórtica sin factores de riesgo, y de <strong>2,5 a 3,5</strong> en las prótesis mecánicas mitrales (o aórticas con factores de riesgo). Los antagonistas de vitamina K son también la alternativa cuando no hay acceso a un ACOD, en el síndrome antifosfolípido y en la insuficiencia renal terminal con clearance bajo 15 mL/min (el apixabán sí puede usarse en la insuficiencia renal grave, y las heparinas de bajo peso molecular no se recomiendan por acumulación).",
          "Los antagonistas de vitamina K se inician con control del INR frecuente (al principio, dos o tres veces por semana), y después cada 4 semanas con un tiempo en rango terapéutico mayor del 70%. Interactúan con muchísimos fármacos y alimentos: <strong>aumentan el efecto</strong> los antibióticos (cotrimoxazol, metronidazol, quinolonas, macrólidos), la amiodarona, el alopurinol y los antifúngicos azólicos; <strong>lo disminuyen</strong> la rifampicina, la carbamazepina y los alimentos ricos en vitamina K (verduras de hoja verde en cantidades variables). El paciente debe llevar un carné y consultar antes de cualquier medicamento nuevo."
        ]
      },
      {
        "subhead": "3. Riesgo de Sangrado, Complicaciones y Manejo del Paciente Anticoagulado",
        "paragraphs": [
          "El puntaje <strong>HAS-BLED</strong> (hipertensión no controlada, función renal o hepática alterada, ACV previo, sangrado previo, INR lábil, edad &gt; 65 años, fármacos como AINE o antiagregantes, y alcohol) no sirve para negar la anticoagulación, sino para <strong>corregir los factores modificables</strong>: controlar la presión arterial, suspender los AINE y los antiagregantes que no sean imprescindibles, limitar el alcohol y estabilizar el INR. Un puntaje alto exige controles más frecuentes, no el abandono del tratamiento. La oclusión percutánea de la orejuela izquierda es una opción para el paciente con contraindicación real y permanente a la anticoagulación.",
          "<strong>Sangrado en el paciente anticoagulado:</strong> 1) medidas locales y de soporte (compresión, volumen, transfusión); 2) suspender el anticoagulante; 3) si el sangrado es mayor (intracraneal, hemodinámicamente inestable o en un sitio crítico), <strong>revertir</strong>: con la warfarina o el acenocumarol, <strong>vitamina K endovenosa más concentrado de complejo protrombínico</strong> (o plasma fresco si no está disponible); con el <strong>dabigatrán</strong>, <strong>idarucizumab</strong>; con el apixabán o el rivaroxabán, <strong>andexanet alfa</strong> (o concentrado de complejo protrombínico). Un INR muy elevado sin sangrado se corrige con vitamina K oral y suspensión transitoria.",
          "<strong>Procedimientos y otras situaciones:</strong> en un procedimiento de bajo riesgo se continúa o se omite una dosis; en uno de alto riesgo el ACOD se suspende 24 a 72 horas antes según la función renal, sin puente con heparina, y la warfarina se suspende 5 días antes con control del INR. Tras una cardioversión se anticoagula al menos 4 semanas (Tema 1.4). En un paciente con FA que sufre un infarto o recibe un stent se combina el anticoagulante con un solo antiagregante durante un período corto y se deriva al especialista. En el embarazo los ACOD y la warfarina (en el primer trimestre) están contraindicados; se usa heparina de bajo peso molecular. En el ACV isquémico agudo con FA no se anticoagula de inmediato: se espera según el tamaño del infarto."
        ]
      },
      {
        "subhead": "4. Casos Prácticos de Decisión",
        "paragraphs": [
          "<strong>Caso 1: mujer de 76 años, hipertensa y diabética, con FA crónica asintomática.</strong> Puntaje: edad ≥ 75 (2) + HTA (1) + diabetes (1) + sexo femenino (1) = 5. Se anticoagula con un ACOD; la aspirina no se indica. <strong>Caso 2: hombre de 60 años con FA paroxística, sin otra enfermedad.</strong> Puntaje 0: no se anticoagula, aunque tenga síntomas intensos y reciba antiarrítmicos; se reevalúa cada año. <strong>Caso 3: mujer de 55 años con FA y estenosis mitral reumática moderada.</strong> No se calcula el puntaje: antagonista de vitamina K con INR de 2 a 3. <strong>Caso 4: hombre de 70 años con FA, creatinina de 1,6 mg/dL, 58 kg y 82 años</strong> (cumple tres criterios): apixabán 2,5 mg cada 12 horas.",
          "<strong>Caso 5: FA en un paciente con una hemorragia digestiva reciente.</strong> Se trata la causa del sangrado (úlcera, angiodisplasia), se suspende el anticoagulante de forma transitoria y se reinicia cuando el sitio esté controlado (en general, dentro de una a dos semanas); la contraindicación definitiva para anticoagular es rara y en ese caso se considera la oclusión de la orejuela. <strong>Caso 6: FA tras un ACV isquémico agudo.</strong> El anticoagulante se inicia cuando el riesgo de transformación hemorrágica es bajo (habitualmente entre unos días y 2 semanas, según el tamaño del infarto), no en las primeras horas. <strong>Caso 7: FA con un INR de 1,6 en un paciente con acenocumarol.</strong> Aumenta la dosis semanal, se investigan la adherencia y las interacciones y se controla en una semana; no se «cubre» con heparina salvo en válvula mecánica de alto riesgo."
        ]
      },
      {
        "subhead": "5. Seguimiento, Educación del Paciente y Errores Frecuentes",
        "paragraphs": [
          "Cada control incluye: adherencia (los ACOD pierden su efecto en 24 horas si se omiten), efectos adversos (sangrado, equimosis, melena, hematuria), función renal y hemoglobina (cada 6 a 12 meses y antes si hay deshidratación o una enfermedad intercurrente), interacciones nuevas, el puntaje de riesgo y el sangrado modificable. Se educa al paciente: tomar la dosis a la misma hora, no suspender sin avisar, evitar AINE (ibuprofeno, diclofenaco) y la aspirina no indicada, avisar de procedimientos dentales o quirúrgicos y llevar un carné anticoagulante. El paciente con antagonista de vitamina K mantiene una dieta estable en vitamina K.",
          "<strong>Errores clásicos del examen:</strong> indicar aspirina o doble antiagregación para prevenir el ACV en la FA; dar un ACOD en una válvula mecánica o en una estenosis mitral reumática; negar la anticoagulación por la edad, las caídas o por «frecuencia controlada»; usar heparina de bajo peso molecular indefinida; olvidar el ajuste por función renal; y no anticoagular tras una cardioversión. En una FA con puntaje de 0 en el varón, anticoagular tampoco es lo correcto: se evita el riesgo hemorrágico sin beneficio."
        ]
      }
    ],
    "table": {
      "title": "Anticoagulantes Orales en la Fibrilación Auricular",
      "headers": [
        "Fármaco / grupo",
        "Mecanismo / dosis",
        "Indicación clínica principal",
        "Contraindicación / advertencia crítica"
      ],
      "rows": [
        [
          "Apixabán (ACOD)",
          "Inhibidor del factor Xa; 5 mg cada 12 h (2,5 mg si 2 de: ≥ 80 años, ≤ 60 kg, creatinina ≥ 1,5)",
          "Anticoagulación de 1.ª línea en FA no valvular; el adulto mayor y la IRC",
          "Estenosis mitral reumática o válvula mecánica"
        ],
        [
          "Rivaroxabán (ACOD)",
          "Inhibidor del factor Xa; 20 mg al día con la comida (15 mg si CrCl 15-50)",
          "FA no valvular",
          "Estenosis mitral reumática o válvula mecánica; tomar con alimento"
        ],
        [
          "Dabigatrán (ACOD)",
          "Inhibidor de la trombina; 150 mg cada 12 h",
          "FA no valvular con función renal conservada",
          "80% de eliminación renal; antídoto idarucizumab"
        ],
        [
          "Acenocumarol / warfarina",
          "Antagonistas de vitamina K; INR 2,0-3,0 (2,5-3,5 prótesis mecánica mitral)",
          "FA valvular (estenosis mitral reumática) y prótesis mecánicas",
          "Requieren controles del INR y ajuste de la dieta; muchas interacciones"
        ],
        [
          "Aspirina (± clopidogrel)",
          "Antiagregante",
          "NO sirve para prevenir ACV en la FA",
          "Contraindicada como monoterapia en FA: no reduce el ACV y sangra"
        ]
      ]
    },
    "vignette": "Mujer de 76 años con hipertensión y diabetes tipo 2 acude a control en el CESFAM. Está asintomática. Al examen, pulso irregular a 84 lpm; el ECG confirma una fibrilación auricular crónica sin valvulopatía conocida. Su clearance de creatinina es de 62 mL/min y su peso, 68 kg. Toma aspirina 100 mg diarios por indicación previa.",
    "explicacion": "Es una FA no valvular con CHA₂DS₂-VASc de 5 (edad ≥ 75: 2, HTA: 1, diabetes: 1, sexo femenino: 1), que supera con holgura el umbral de 3 en la mujer, con un riesgo anual de ACV de alrededor del 7%. La indicación es anticoagulación oral permanente con un anticoagulante oral directo (apixabán, rivaroxabán o dabigatrán), de primera línea por eficacia y menor riesgo de hemorragia intracraneal. La aspirina no previene el ACV de la FA y debe suspenderse si no tiene otra indicación; el apixabán se mantiene en 5 mg cada 12 horas porque cumple solo un criterio de reducción (edad). Se controlan la función renal y la hemoglobina cada año y se refuerzan los factores de sangrado modificables (presión arterial, AINE).",
    "keyPoints": [
      "La FA se anticoagula según el riesgo embólico (CHA₂DS₂-VASc), no según los síntomas, la frecuencia ni el ritmo.",
      "CHA₂DS₂-VASc: IC 1, HTA 1, edad ≥ 75 = 2, DM 1, ACV/AIT = 2, enfermedad vascular 1, edad 65-74 = 1, sexo femenino 1.",
      "Anticoagulación obligatoria con ≥ 2 puntos en el hombre y ≥ 3 en la mujer; considerar con 1 y 2, respectivamente; con 0 y 1 no se anticoagula.",
      "Primera línea en la FA no valvular: ACOD (apixabán 5 mg c/12 h, rivaroxabán 20 mg/día, dabigatrán 150 mg c/12 h); la edad avanzada no contraindica.",
      "Estenosis mitral reumática moderada-grave y prótesis mecánica: antagonista de vitamina K (acenocumarol o warfarina; INR 2-3 y 2,5-3,5 en prótesis mecánica mitral); ACOD contraindicados.",
      "La aspirina (sola o con clopidogrel) no previene el ACV en la FA y sangra: es la respuesta incorrecta clásica.",
      "Sangrado mayor: suspender, reversión (vitamina K + concentrado de complejo protrombínico; idarucizumab para dabigatrán; andexanet para anti-Xa).",
      "Tras cardiovertir: anticoagular al menos 4 semanas; si la FA dura > 48 h, 3 semanas antes o ETE."
    ],
    "questions": [
      {
        "stem": "Un paciente de 62 años, con antecedente de prótesis mecánica de válvula mitral e insuficiencia renal crónica, con un clearence de creatinina estimado de 20 ml/min, presenta un cuadro de palpitaciones. Se realiza electrocardiograma que muestra una taquiarritmia irregular con QRS angosto y ausencia de onda P. ¿Qué tratamiento es el más adecuado para su manejo?",
        "options": [
          {
            "id": "A",
            "text": "Apixabán"
          },
          {
            "id": "B",
            "text": "Enoxaparina"
          },
          {
            "id": "C",
            "text": "Dabigatrán"
          },
          {
            "id": "D",
            "text": "Acenocumarol"
          },
          {
            "id": "E",
            "text": "Rivaroxabán"
          }
        ],
        "correcta": "D",
        "explicacion": "Una prótesis mecánica contraindica los anticoagulantes directos (apixabán, rivaroxabán, dabigatrán): el tratamiento es un cumarínico (acenocumarol o warfarina). La insuficiencia renal grave refuerza la elección, y las heparinas de bajo peso molecular no se recomiendan por acumulación.",
        "recTag": "EUNACOM Diciembre 2025 · Pregunta 150"
      },
      {
        "stem": "Mujer de 78 años con fibrilación auricular permanente no valvular, CHA₂DS₂-VASc de 4. Sin antecedente de hemorragia. ¿Cuál es el manejo antitrombótico más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Anticoagulación oral con apixabán o rivaroxabán"
          },
          {
            "id": "B",
            "text": "Aspirina 100 mg/día"
          },
          {
            "id": "C",
            "text": "No anticoagular por edad avanzada"
          },
          {
            "id": "D",
            "text": "Heparina de bajo peso molecular"
          },
          {
            "id": "E",
            "text": "Clopidogrel + aspirina"
          }
        ],
        "correcta": "A",
        "explicacion": "En la FA no valvular con CHA₂DS₂-VASc de 2 o más en el hombre y de 3 o más en la mujer corresponde anticoagulación oral. Los ACOD son preferibles a la warfarina en el adulto mayor por el menor riesgo de hemorragia intracraneal; la edad avanzada no es contraindicación y la aspirina no previene el ACV.",
        "recTag": "EUNACOM Julio 2025 · Pregunta 97"
      },
      {
        "stem": "Hombre de 60 años portador de una prótesis valvular mecánica mitral consulta por fibrilación auricular. ¿Cuál es el tratamiento anticoagulante de elección?",
        "options": [
          {
            "id": "A",
            "text": "Acenocumarol o warfarina con meta de INR entre 2,5 y 3,5"
          },
          {
            "id": "B",
            "text": "Apixabán 5 mg cada 12 horas"
          },
          {
            "id": "C",
            "text": "Rivaroxabán 20 mg al día"
          },
          {
            "id": "D",
            "text": "Dabigatrán 150 mg cada 12 horas"
          },
          {
            "id": "E",
            "text": "Heparina de bajo peso molecular por vía subcutánea indefinida"
          }
        ],
        "correcta": "A",
        "explicacion": "Las prótesis mecánicas contraindican los anticoagulantes directos (más trombosis protésica y sangrado). El tratamiento validado es un antagonista de vitamina K (acenocumarol o warfarina) con INR de 2,5 a 3,5 en la posición mitral.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Mujer de 55 años con estenosis mitral reumática moderada y fibrilación auricular. ¿Cuál es el tratamiento anticoagulante más adecuado para prevenir el accidente cerebrovascular?",
        "options": [
          {
            "id": "A",
            "text": "Aspirina 100 mg al día"
          },
          {
            "id": "B",
            "text": "Apixabán 5 mg cada 12 horas"
          },
          {
            "id": "C",
            "text": "Acenocumarol o warfarina con INR de 2,0 a 3,0"
          },
          {
            "id": "D",
            "text": "Rivaroxabán 20 mg al día"
          },
          {
            "id": "E",
            "text": "No requiere anticoagulación mientras el pulso esté controlado"
          }
        ],
        "correcta": "C",
        "explicacion": "La estenosis mitral reumática moderada o grave con FA (FA valvular) tiene un riesgo embólico alto sin necesidad de calcular el puntaje, y los anticoagulantes directos están contraindicados. Corresponde un antagonista de vitamina K con INR de 2,0 a 3,0.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "1.3§1 · 1.3§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-06",
    "classId": "cardio-06",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Arritmias y Paro Cardiorrespiratorio",
    "topicLabel": "1.6",
    "title": "Taquicardia Paroxística Supraventricular y Síndrome de Wolff-Parkinson-White",
    "perfilCode": "1.01.1.024",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Alta · Taquicardia regular de QRS estrecho, maniobras vagales y adenosina en bolo rápido, WPW (PR corto y onda delta), fármacos prohibidos en la FA preexcitada, ablación",
    "svg": null,
    "algoTitle": "Manejo de la TPSV y del síndrome de Wolff-Parkinson-White",
    "diagram": {
      "title": "Algoritmo de Manejo de la TPSV y Riesgo de la Preexcitación (WPW)",
      "svg": "<svg viewBox=\"0 0 620 470\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar06\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar06)}\n  </style>\n  <rect class=\"b\" x=\"80\" y=\"6\" width=\"460\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Taquicardia regular de QRS estrecho (&lt; 120 ms), 150-220 lpm</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Inicio y término súbitos · ondas P ocultas en el QRS o pseudo-r' en V1</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"dec\" x=\"80\" y=\"58\" width=\"460\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"74\" text-anchor=\"middle\" font-weight=\"700\">¿Hemodinámicamente estable?</text>\n  <text class=\"sub\" x=\"310\" y=\"86\" text-anchor=\"middle\">Hipotensión, shock, edema pulmonar, dolor isquémico o compromiso de conciencia = inestable</text>\n  <path class=\"ln\" d=\"M310,96 V112 H158 V122\"/>\n  <path class=\"ln\" d=\"M310,112 H462 V122\"/>\n  <text class=\"lbl\" x=\"150\" y=\"108\" text-anchor=\"end\">No</text>\n  <text class=\"lbl\" x=\"470\" y=\"108\" text-anchor=\"start\">Sí</text>\n  <rect class=\"acc\" x=\"12\" y=\"122\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"141\" text-anchor=\"middle\" font-weight=\"700\">CARDIOVERSIÓN ELÉCTRICA sincronizada</text>\n  <text class=\"accS\" x=\"158\" y=\"153\" text-anchor=\"middle\">Inmediata (50-100 J), con sedación si es posible</text>\n  <rect class=\"b\" x=\"316\" y=\"122\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"141\" text-anchor=\"middle\" font-weight=\"700\">1.ª LÍNEA: maniobras vagales</text>\n  <text class=\"sub\" x=\"462\" y=\"153\" text-anchor=\"middle\">Valsalva modificado (soplar 15 s y acostar con piernas arriba)</text>\n  <path class=\"ln\" d=\"M462,166 V182\"/>\n  <rect class=\"b\" x=\"316\" y=\"182\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"198\" text-anchor=\"middle\" font-weight=\"700\">2.ª LÍNEA: ADENOSINA 6 mg EV en bolo</text>\n  <text class=\"sub\" x=\"462\" y=\"210\" text-anchor=\"middle\">En 1-2 s por vena gruesa + 20 mL de suero rápido</text>\n  <text class=\"sub\" x=\"462\" y=\"222\" text-anchor=\"middle\">Si no revierte: 12 mg (hasta 2 veces)</text>\n  <path class=\"ln\" d=\"M462,232 V248\"/>\n  <rect class=\"b\" x=\"316\" y=\"248\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"267\" text-anchor=\"middle\" font-weight=\"700\">3.ª LÍNEA: verapamilo 5-10 mg EV lento</text>\n  <text class=\"sub\" x=\"462\" y=\"279\" text-anchor=\"middle\">o betabloqueador (sin IC ni hipotensión)</text>\n  <path class=\"ln\" d=\"M462,292 V308\"/>\n  <rect class=\"dec\" x=\"60\" y=\"308\" width=\"500\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"325\" text-anchor=\"middle\" font-weight=\"700\">Recurrencias o WPW: ablación por radiofrecuencia (curativa)</text>\n  <text class=\"sub\" x=\"310\" y=\"337\" text-anchor=\"middle\">Derivar a cardiología / electrofisiología</text>\n  <rect class=\"warn\" x=\"12\" y=\"366\" width=\"596\" height=\"66\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"390\" text-anchor=\"middle\" font-weight=\"700\">PREEXCITACIÓN: ¿QRS ancho, IRREGULAR y &gt; 200 lpm (FA preexcitada)?</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"402\" text-anchor=\"middle\">PROHIBIDOS: adenosina, verapamilo, diltiazem, digoxina y betabloqueadores</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"414\" text-anchor=\"middle\">Tratamiento: cardioversión eléctrica sincronizada (o procainamida si está estable)</text>\n\n</svg>"
    },
    "contexto": "Un joven que llega al SAPU con el corazón a 180, regular, que empezó de golpe, es el caso más típico de la taquicardia paroxística supraventricular, y el EUNACOM lo pregunta casi todos los años: primero las maniobras vagales, después la adenosina en bolo rápido. Detrás está el síndrome de Wolff-Parkinson-White, una vía accesoria que puede dar la misma taquicardia y que esconde una trampa mortal, la fibrilación auricular preexcitada, en la que los frenadores del nodo AV están prohibidos. El tema une un algoritmo corto y bien definido con una lista de fármacos que no se pueden dar nunca en un cuadro específico.",
    "contentSections": [
      {
        "subhead": "1. Mecanismos y Diagnóstico de las Taquicardias Paroxísticas Supraventriculares",
        "paragraphs": [
          "La <strong>taquicardia paroxística supraventricular (TPSV)</strong> es una arritmia de inicio y término súbito («paroxístico») producida por un <strong>circuito de reentrada</strong>. Afecta con mayor frecuencia a adultos jóvenes sin cardiopatía, en especial mujeres, y el paciente refiere palpitaciones regulares y rápidas, opresión torácica, mareo, disnea o poliuria por péptido natriurético; a veces el desencadenante es la cafeína, el alcohol o el estrés. En el <strong>60%</strong> corresponde a la <strong>taquicardia por reentrada nodal (TRN)</strong>: el nodo AV tiene dos vías, una lenta (período refractario corto) y una rápida (período refractario largo), y el impulso gira entre ambas. En el <strong>30%</strong> es una <strong>taquicardia por reentrada auriculoventricular (TRAV)</strong> a través de una <strong>vía accesoria</strong> (haz de Kent, en el síndrome de Wolff-Parkinson-White). El resto son taquicardias auriculares.",
          "En el ECG de la crisis se observa una <strong>taquicardia regular de complejo QRS estrecho (&lt; 120 ms)</strong> a <strong>150 a 220 lpm</strong>, con ondas P ocultas dentro del QRS o visibles como una <strong>pseudo-r' en V1</strong> o una pseudo-s en las derivaciones inferiores. En la TRAV <strong>ortodrómica</strong> (la más frecuente) el impulso baja por el nodo AV y vuelve por la vía accesoria: QRS estrecho, con la P retrógrada después del QRS. En la TRAV <strong>antidrómica</strong> (rara) baja por la vía accesoria: QRS ancho, regular, imposible de distinguir de una taquicardia ventricular (en un paciente con WPW conocido se trata como preexcitada).",
          "El diagnóstico diferencial de una taquicardia regular y angosta incluye la <strong>taquicardia sinusal</strong> (hasta 150-160 lpm, con inicio gradual y P visible, y que no termina con maniobras vagales), el <strong>flutter auricular 2:1</strong> (150 lpm exactos; las ondas de sierra aparecen con las maniobras vagales o la adenosina; Tema 1.4) y la taquicardia auricular. Con un QRS ancho y regular se asume una taquicardia ventricular (Tema 1.7). Una TPSV en un paciente de 28 años sin cardiopatía, con una crisis de 160 lpm regular sin soplos, se trata como TPSV típica; el tratamiento no depende de saber si es TRN o TRAV."
        ]
      },
      {
        "subhead": "2. Manejo Escalonado de la TPSV",
        "paragraphs": [
          "<strong>Si el paciente está inestable</strong> (hipotensión, shock, edema pulmonar, dolor isquémico o compromiso de conciencia) la primera línea es la <strong>cardioversión eléctrica sincronizada</strong> inmediata (50 a 100 J, con sedación si el estado lo permite); como toda taquiarritmia con compromiso hemodinámico, no se espera ni a las maniobras ni al fármaco. En el paciente <strong>estable</strong> (vigil, bien perfundido, PA normal) el algoritmo es estricto y escalonado:",
          "1) <strong>Maniobras vagales (primera línea).</strong> La más efectiva es la <strong>maniobra de Valsalva modificada</strong>: el paciente sentado sopla en una jeringa de 10 mL hasta mover el émbolo (o logra una presión de 40 mmHg) durante 15 segundos y, inmediatamente después, se lo acuesta en decúbito supino con las piernas elevadas a 45° durante 15 segundos; revierte hasta cerca del 45% de los episodios. El <strong>masaje del seno carotídeo</strong> se puede usar en el adulto joven (nunca simultáneo en ambos lados), pero no se recomienda en los adultos mayores con riesgo de ateroma carotídeo ni en los niños, en quienes se prefiere la inmersión de la cara en agua fría; la presión ocular está contraindicada.",
          "2) <strong>Adenosina endovenosa (segunda línea).</strong> Si las maniobras fallan, <strong>6 mg EV en bolo ultrarrápido (1 a 2 segundos)</strong> por una vena antecubital de grueso calibre, seguidos inmediatamente de un <strong>«flush» de 20 mL de suero fisiológico</strong> y elevación del brazo, porque su vida media es de menos de 10 segundos. Si no revierte a los 2 minutos, se da un segundo bolo de <strong>12 mg EV</strong> (y, si es necesario, un tercero de 12 mg). Los efectos adversos son breves y se avisan al paciente: rubor facial, opresión torácica, disnea, pausa o asistolia transitoria. Está <strong>contraindicada en el asma grave</strong> y su efecto se potencia con el dipiridamol y la carbamazepina (dosis menor, 3 mg) y se bloquea con la teofilina y la cafeína. Una taquicardia que «se frena y se reinicia» sugiere TRAV o taquicardia auricular; una que no se frena, flutter o taquicardia ventricular.",
          "3) <strong>Calcioantagonistas no dihidropiridínicos o betabloqueadores (tercera línea).</strong> <strong>Verapamilo 5 a 10 mg EV lento en 2 minutos</strong> (o diltiazem). Están contraindicados en la hipotensión, la insuficiencia cardíaca con FEVI reducida, el QRS ancho de origen incierto y la preexcitación, y el verapamilo no se usa en los lactantes. Cuando todo falla o el paciente se compromete, se cardioverte. El <strong>tratamiento definitivo</strong> de la TPSV recidivante o mal tolerada es la <strong>ablación por radiofrecuencia</strong> (curativa en más del 95%); en las crisis infrecuentes y bien toleradas se enseña la maniobra de Valsalva al paciente («pastilla en el bolsillo» solo en casos seleccionados)."
        ]
      },
      {
        "subhead": "3. Síndrome de Wolff-Parkinson-White (WPW)",
        "paragraphs": [
          "El <strong>síndrome de Wolff-Parkinson-White</strong> se define por la presencia de <strong>preexcitación ventricular</strong> en el ECG de ritmo sinusal más episodios de taquiarritmias sintomáticas. La <strong>tríada electrocardiográfica de la preexcitación</strong> es: 1) <strong>intervalo PR corto (&lt; 120 ms)</strong>; 2) <strong>onda delta</strong> (empastamiento inicial en la rama ascendente del QRS); y 3) <strong>ensanchamiento del QRS (&gt; 110-120 ms)</strong>, con alteraciones secundarias del ST y la T que pueden simular un infarto (ondas Q falsas).",
          "La vía accesoria conduce el impulso de aurículas a ventrículos sin el retraso del nodo AV, por lo que una parte del ventrículo se activa antes (onda delta). Un paciente con un patrón de preexcitación pero sin síntomas tiene un riesgo bajo de muerte súbita, que se estratifica con un estudio electrofisiológico (sobre todo en deportistas y trabajos de riesgo); el síntoma típico es la palpitación paroxística, y la primera manifestación en algunos es la muerte súbita. El WPW aparece en jóvenes, se asocia a la anomalía de Ebstein y, aunque es infrecuente, no se pierde en la lectura del ECG si se aplica la rutina de cinco pasos (Tema 1.1: PR corto, onda delta)."
        ]
      },
      {
        "subhead": "4. Fibrilación Auricular Preexcitada: Fármacos Rigurosamente Prohibidos",
        "paragraphs": [
          "La complicación más letal del WPW es la <strong>fibrilación auricular con conducción anterógrada rápida por la vía accesoria</strong> (FA preexcitada). Se manifiesta en el ECG como una taquicardia de <strong>complejo ancho, totalmente irregular, con QRS de morfología variable y frecuencias que superan los 200 a 250 lpm</strong> (intervalos R-R de menos de 250 ms). Una taquicardia ancha e irregular a más de 200 lpm en una mujer joven es una FA preexcitada hasta que se demuestre lo contrario, y se parece a una taquicardia ventricular, pero la irregularidad extrema la distingue.",
          "En este cuadro están <strong>estrictamente prohibidos todos los fármacos que frenan el nodo AV</strong>: <strong>adenosina, verapamilo, diltiazem, digoxina y betabloqueadores</strong> (y la amiodarona EV, que también frena el nodo). Al bloquear el nodo AV, la totalidad de los impulsos auriculares caóticos (300 a 600 por minuto) se desvía por la vía accesoria, de conducción ultrarrápida, y se provoca una <strong>fibrilación ventricular</strong> y un paro cardíaco inmediato. <strong>Tratamiento:</strong> cardioversión eléctrica sincronizada inmediata (obligatoria si hay inestabilidad) o <strong>procainamida EV</strong> en el paciente estable; el tratamiento curativo definitivo es la <strong>ablación por radiofrecuencia de la vía accesoria</strong>.",
          "Resumen práctico: en una taquicardia <em>regular y angosta</em> el fármaco es la adenosina; en una taquicardia <em>irregular y ancha</em> con un antecedente de preexcitación, la cardioversión. Una pregunta clásica del EUNACOM es «qué fármaco puede desencadenar una fibrilación ventricular en un paciente con FA y WPW»: el verapamilo."
        ]
      },
      {
        "subhead": "5. Otras Taquicardias Supraventriculares y Cómo Diferenciarlas",
        "paragraphs": [
          "La <strong>taquicardia auricular</strong> nace de un foco auricular ectópico: la onda P tiene una morfología distinta de la sinusal, con un intervalo RP largo (mayor que la mitad del R-R); puede conducirse con bloqueo AV variable (por ejemplo en la intoxicación digitálica) y no responde a la adenosina de forma estable (se enlentece sin terminar). La <strong>taquicardia auricular multifocal</strong> (tres o más morfologías de P, ritmo irregular, FC mayor de 100 lpm) se ve en la EPOC grave y la hipoxemia; se trata corrigiendo la causa y con calcioantagonistas, y no con cardioversión. La <strong>taquicardia sinusal</strong> tiene un inicio gradual, una P normal, una frecuencia habitual de menos de 150-160 lpm y una causa (fiebre, dolor, anemia, hipovolemia, hipertiroidismo, embolia pulmonar, ansiedad): se trata la causa, no el ritmo.",
          "Para distinguir en el ECG una <strong>TRN</strong> de una <strong>TRAV ortodrómica</strong>: en la TRN la P retrógrada está dentro del QRS o al final (pseudo-r' en V1) con un intervalo RP corto (< 70 ms); en la TRAV, la P aparece claramente después del QRS (RP de más de 70 ms), y pueden verse alternancia eléctrica del QRS y una onda delta en ritmo sinusal. La respuesta a la adenosina (terminación súbita) sugiere reentrada que involucra al nodo AV; la aparición de ondas de sierra sin terminación sugiere flutter; la persistencia con bloqueo AV transitorio, taquicardia auricular."
        ]
      },
      {
        "subhead": "6. Situaciones Especiales, Seguimiento y Errores Frecuentes",
        "paragraphs": [
          "<strong>Embarazo:</strong> la TPSV se presenta o empeora; las maniobras vagales y la adenosina son seguras; si es inestable se cardioverte con seguridad para el feto; la prevención se hace con betabloqueadores cardioselectivos o verapamilo. <strong>Niños y lactantes:</strong> la TPSV se maneja con la maniobra del buzo (inmersión de la cara en agua fría) y adenosina en dosis por peso; con 280 lpm regulares y shock en un lactante, la conducta es la cardioversión. <strong>Ablación:</strong> en la recidiva frecuente, la mala tolerancia, el WPW con un riesgo alto o la profesión de riesgo, la ablación es curativa en más del 95% con un riesgo bajo (el bloqueo AV es una complicación infrecuente en la reentrada nodal), y es la opción de primera línea; el paciente asintomático con preexcitación se estratifica con una prueba de esfuerzo o un estudio electrofisiológico.",
          "<strong>Errores clásicos del examen:</strong> dar verapamilo a una taquicardia de QRS ancho o a un paciente con insuficiencia cardíaca o hipotensión; dar adenosina lentamente o sin suero («no hace efecto»); usar masaje carotídeo en un adulto mayor con ateroma (soplo carotídeo) o la presión ocular; no cardiovertir a un paciente inestable «porque es supraventricular»; dar digoxina, betabloqueadores o calcioantagonistas a una FA preexcitada; y confundir el flutter 2:1 con una TPSV. Una TPSV que no revierte con adenosina obliga a replantear el diagnóstico (flutter, taquicardia auricular, taquicardia ventricular)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial y Contraindicaciones Absolutas en Taquicardias de Urgencia",
      "headers": [
        "Tipo de taquicardia",
        "Ritmo / complejo QRS",
        "Manejo de 1.ª elección (estable)",
        "Fármacos contraindicados"
      ],
      "rows": [
        [
          "TPSV por reentrada nodal",
          "Regular / QRS estrecho (< 120 ms), 150-220 lpm",
          "Valsalva modificado → adenosina 6 mg EV (luego 12 mg)",
          "Adenosina en asma grave; verapamilo en IC o hipotensión"
        ],
        [
          "TRAV ortodrómica (WPW)",
          "Regular / QRS estrecho",
          "Valsalva → adenosina; ablación",
          "Evitar digoxina"
        ],
        [
          "FA con WPW (preexcitada)",
          "IRREGULAR / QRS ancho (> 120 ms), > 200 lpm",
          "Cardioversión eléctrica / procainamida",
          "Adenosina, verapamilo, diltiazem, digoxina, betabloqueadores y amiodarona"
        ],
        [
          "Flutter auricular 2:1",
          "Regular, 150 lpm / QRS estrecho",
          "Betabloqueador o diltiazem; ablación del istmo",
          "Cardioversión sin descartar trombo si > 48 h"
        ],
        [
          "Taquicardia ventricular",
          "Regular / QRS ancho",
          "Amiodarona o cardioversión (Tema 1.7)",
          "Verapamilo (colapso hemodinámico)"
        ]
      ]
    },
    "vignette": "Mujer de 24 años, con palpitaciones ocasionales desde la adolescencia, consulta en urgencias por palpitaciones intensas, mareo y disnea. El ECG muestra una taquicardia con complejos QRS anchos de 150 ms, de morfología variable y ritmo totalmente irregular, a 220 lpm. PA 105/65 mmHg. El interno de medicina propone administrar verapamilo 5 mg EV.",
    "explicacion": "Una taquicardia de QRS ancho, ritmo totalmente irregular y frecuencia mayor de 200 lpm en una mujer joven con palpitaciones previas es diagnóstica de fibrilación auricular preexcitada a través de una vía accesoria (síndrome de Wolff-Parkinson-White). La propuesta de verapamilo (o adenosina, digoxina o betabloqueadores) es un error potencialmente mortal: los bloqueadores del nodo AV derivan todos los impulsos por el haz de Kent y desencadenan una fibrilación ventricular. La conducta correcta es la cardioversión eléctrica sincronizada, o procainamida endovenosa si estuviera estable, y derivar para ablación de la vía accesoria.",
    "keyPoints": [
      "TPSV: taquicardia regular de QRS estrecho, 150-220 lpm, de inicio y fin súbitos; 60% reentrada nodal, 30% por vía accesoria (WPW).",
      "Estable: 1.º maniobras vagales (Valsalva modificado), 2.º adenosina 6 mg EV en bolo ultrarrápido + 20 mL de suero (luego 12 mg), 3.º verapamilo 5-10 mg EV lento.",
      "Inestable: cardioversión eléctrica sincronizada inmediata. La presión ocular está contraindicada y el masaje carotídeo no se recomienda en el adulto mayor ni en niños.",
      "Adenosina: vida media < 10 s (por eso bolo rápido y suero); contraindicada en el asma grave; da rubor, opresión torácica y pausa transitoria.",
      "WPW en ritmo sinusal: PR < 120 ms + onda delta + QRS ancho.",
      "FA preexcitada (QRS ancho, irregular, > 200 lpm): PROHIBIDOS adenosina, verapamilo, diltiazem, digoxina y betabloqueadores; tratamiento: cardioversión eléctrica o procainamida.",
      "Tratamiento curativo de la TPSV recidivante y del WPW: ablación por radiofrecuencia.",
      "Una taquicardia regular de 150 lpm que revela ondas de sierra con la adenosina o las maniobras vagales es un flutter 2:1, no una TPSV."
    ],
    "questions": [
      {
        "stem": "Joven de 22 años con palpitaciones súbitas de inicio y término brusco. ECG en crisis: taquicardia regular de QRS estrecho a 180 lpm. Cede con maniobra de Valsalva. ¿Cuál es el tratamiento farmacológico de elección si reaparece?",
        "options": [
          {
            "id": "A",
            "text": "Adenosina IV en bolo rápido"
          },
          {
            "id": "B",
            "text": "Amiodarona EV"
          },
          {
            "id": "C",
            "text": "Metoprolol oral"
          },
          {
            "id": "D",
            "text": "Digoxina IV"
          },
          {
            "id": "E",
            "text": "Cardioversión eléctrica sincronizada"
          }
        ],
        "correcta": "A",
        "explicacion": "Es una TPSV estable: si las maniobras vagales fallan, la adenosina IV 6 mg en bolo rápido es el fármaco de elección por su efecto ultrabreve sobre el nodo AV. La cardioversión se reserva para la inestabilidad.",
        "recTag": "EUNACOM Julio 2025 · Pregunta 44"
      },
      {
        "stem": "Paciente con palpitaciones regulares y taquicardia supraventricular en el ECG. ¿Cuál es el tratamiento más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Verapamilo 5 mg EV lento"
          },
          {
            "id": "B",
            "text": "Amiodarona 300 mg EV"
          },
          {
            "id": "C",
            "text": "Cardioversión eléctrica sincronizada"
          },
          {
            "id": "D",
            "text": "Metoprolol 5 mg EV"
          },
          {
            "id": "E",
            "text": "Adenosina 6 mg IV en bolo rápido"
          }
        ],
        "correcta": "E",
        "explicacion": "Tras las maniobras vagales, el tratamiento farmacológico de la TPSV estable es la adenosina 6 mg IV en bolo rápido. El verapamilo es de tercera línea y la cardioversión eléctrica se reserva para el paciente inestable.",
        "recTag": "EUNACOM Enero 2023 · Pregunta 141"
      },
      {
        "stem": "Mujer de 25 años con palpitaciones paroxísticas. ECG en sinusal muestra intervalo PR corto y onda delta. Episodio de TPSV con QRS ancho. ¿Cuál es el diagnóstico?",
        "options": [
          {
            "id": "A",
            "text": "Síndrome de Wolff-Parkinson-White (WPW)"
          },
          {
            "id": "B",
            "text": "Fibrilación auricular"
          },
          {
            "id": "C",
            "text": "Taquicardia ventricular"
          },
          {
            "id": "D",
            "text": "Bloqueo AV completo"
          },
          {
            "id": "E",
            "text": "Síndrome de QT largo"
          }
        ],
        "correcta": "A",
        "explicacion": "PR corto más onda delta en ritmo sinusal define la preexcitación; con taquicardias paroxísticas, es un síndrome de Wolff-Parkinson-White (vía accesoria). La taquicardia puede ser ortodrómica (QRS estrecho) o antidrómica (QRS ancho).",
        "recTag": "EUNACOM Julio 2025 · Pregunta 134"
      },
      {
        "stem": "Hombre de 26 años con palpitaciones paroxísticas regulares de inicio súbito a 180 lpm y QRS estrecho. Se realizaron maniobras vagales sin éxito. ¿Cuál es el fármaco de primera línea y la técnica correcta de administración?",
        "options": [
          {
            "id": "A",
            "text": "Adenosina 6 mg en bolo endovenoso ultrarrápido seguido de bolo de 20 mL de suero fisiológico"
          },
          {
            "id": "B",
            "text": "Amiodarona 300 mg en infusión continua para 1 hora"
          },
          {
            "id": "C",
            "text": "Verapamilo 10 mg por vía intramuscular profunda"
          },
          {
            "id": "D",
            "text": "Digoxina 0,5 mg en infusión lenta"
          },
          {
            "id": "E",
            "text": "Lidocaína 100 mg endovenosa"
          }
        ],
        "correcta": "A",
        "explicacion": "La adenosina tiene una vida media menor de 10 segundos: para llegar al nodo AV debe inyectarse en bolo ultrarrápido (1-2 s) en una vena proximal, seguida de 20 mL de suero fisiológico y elevación del brazo. La dosis inicial es de 6 mg.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "¿Cuál de los siguientes fármacos puede desencadenar fibrilación ventricular y paro cardíaco si se administra a un paciente con fibrilación auricular preexcitada (Wolff-Parkinson-White)?",
        "options": [
          {
            "id": "A",
            "text": "Verapamilo"
          },
          {
            "id": "B",
            "text": "Procainamida"
          },
          {
            "id": "C",
            "text": "Ibutilide"
          },
          {
            "id": "D",
            "text": "Sulfato de magnesio"
          },
          {
            "id": "E",
            "text": "Quinidina"
          }
        ],
        "correcta": "A",
        "explicacion": "El verapamilo frena el nodo AV sin afectar la vía accesoria: los impulsos auriculares caóticos pasan sin resistencia por la vía rápida y gatillan una fibrilación ventricular. En la FA preexcitada se cardioverte o se da procainamida.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "1.4§0 · 1.4§1 · 1.4§2 · 1.4§3 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-07",
    "classId": "cardio-07",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Arritmias y Paro Cardiorrespiratorio",
    "topicLabel": "1.7",
    "title": "Taquicardia de Complejo Ancho, Taquicardia Ventricular, QT Largo y Cardioversión Eléctrica",
    "perfilCode": "1.01.2.009, 1.01.5.002",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Alta · Taquicardia de QRS ancho = TV hasta demostrar lo contrario, cardioversión sincronizada en la inestable, amiodarona en la estable, verapamilo contraindicado, QTc > 500 ms y torsión de puntas",
    "svg": null,
    "algoTitle": "Algoritmo de la taquicardia de complejo ancho y de la torsión de puntas",
    "diagram": {
      "title": "Taquicardia de Complejo Ancho: Pulso, Estabilidad, Cardioversión y Torsión de Puntas",
      "svg": "<svg viewBox=\"0 0 620 480\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar07\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar07)}\n  </style>\n  <rect class=\"b\" x=\"80\" y=\"6\" width=\"460\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Taquicardia de complejo ancho (QRS ≥ 120 ms)</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Se asume TAQUICARDIA VENTRICULAR hasta demostrar lo contrario</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"dec\" x=\"80\" y=\"58\" width=\"460\" height=\"36\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\">¿Tiene pulso?</text>\n  <text class=\"sub\" x=\"310\" y=\"85\" text-anchor=\"middle\">Sin pulso: se trata como paro (desfibrilación, Tema 1.3)</text>\n  <path class=\"ln\" d=\"M310,94 V108\"/>\n  <rect class=\"dec\" x=\"80\" y=\"108\" width=\"460\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"125\" text-anchor=\"middle\" font-weight=\"700\">¿Está inestable? (shock, edema pulmonar, isquemia, síncope)</text>\n  <text class=\"sub\" x=\"310\" y=\"137\" text-anchor=\"middle\">Hipotensión, compromiso de conciencia, dolor torácico</text>\n  <path class=\"ln\" d=\"M310,148 V162 H158 V174\"/>\n  <path class=\"ln\" d=\"M310,162 H462 V174\"/>\n  <text class=\"lbl\" x=\"150\" y=\"158\" text-anchor=\"end\">Sí</text>\n  <text class=\"lbl\" x=\"470\" y=\"158\" text-anchor=\"start\">No: estable</text>\n  <rect class=\"acc\" x=\"12\" y=\"174\" width=\"292\" height=\"54\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"186\" text-anchor=\"middle\" font-weight=\"700\">CARDIOVERSIÓN ELÉCTRICA SINCRONIZADA</text>\n  <text class=\"accS\" x=\"158\" y=\"198\" text-anchor=\"middle\">Inmediata, con sedación si es posible</text>\n  <text class=\"accS\" x=\"158\" y=\"210\" text-anchor=\"middle\">TV monomorfa: 100 J y subir</text>\n  <text class=\"accS\" x=\"158\" y=\"222\" text-anchor=\"middle\">TV polimorfa: desfibrilación (no sincronizada)</text>\n  <rect class=\"b\" x=\"316\" y=\"174\" width=\"292\" height=\"54\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"192\" text-anchor=\"middle\" font-weight=\"700\">AMIODARONA 150 mg EV en 10 minutos</text>\n  <text class=\"sub\" x=\"462\" y=\"204\" text-anchor=\"middle\">Luego infusión 1 mg/min por 6 h; ECG de 12 derivaciones</text>\n  <text class=\"sub\" x=\"462\" y=\"216\" text-anchor=\"middle\">Alternativa: procainamida · lidocaína</text>\n  <rect class=\"warn\" x=\"316\" y=\"244\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"263\" text-anchor=\"middle\" font-weight=\"700\">VERAPAMILO / DILTIAZEM CONTRAINDICADOS</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"275\" text-anchor=\"middle\">En TV provocan colapso hemodinámico</text>\n  <path class=\"ln\" d=\"M462,228 V244\"/>\n  <rect class=\"dec\" x=\"12\" y=\"244\" width=\"292\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"263\" text-anchor=\"middle\" font-weight=\"700\">¿QT largo (QTc &gt; 500 ms) y TV polimorfa?</text>\n  <text class=\"sub\" x=\"158\" y=\"275\" text-anchor=\"middle\">Torsión de puntas: ver abajo</text>\n  <path class=\"ln\" d=\"M158,228 V244\"/>\n  <path class=\"ln\" d=\"M158,288 V306\"/>\n  <rect class=\"acc\" x=\"12\" y=\"306\" width=\"596\" height=\"52\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"323\" text-anchor=\"middle\" font-weight=\"700\">TORSIÓN DE PUNTAS: SULFATO DE MAGNESIO 2 g EV</text>\n  <text class=\"accS\" x=\"310\" y=\"335\" text-anchor=\"middle\">Suspender el fármaco que alarga el QT · corregir K (&gt; 4,5), Mg y Ca · NO amiodarona (alarga el QT)</text>\n  <text class=\"accS\" x=\"310\" y=\"347\" text-anchor=\"middle\">Si degenera en FV: desfibrilación</text>\n  <rect class=\"b\" x=\"12\" y=\"376\" width=\"596\" height=\"80\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"401\" text-anchor=\"middle\" font-weight=\"700\">Después de la crisis</text>\n  <text class=\"sub\" x=\"310\" y=\"413\" text-anchor=\"middle\">Buscar cardiopatía estructural (ecocardiograma, isquemia) · derivar a cardiología</text>\n  <text class=\"sub\" x=\"310\" y=\"425\" text-anchor=\"middle\">TV en infarto previo o FEVI ≤ 35%: evaluar desfibrilador implantable (DAI)</text>\n  <text class=\"sub\" x=\"310\" y=\"437\" text-anchor=\"middle\">QT largo congénito: betabloqueador (propranolol, nadolol) y DAI según riesgo</text>\n\n</svg>"
    },
    "contexto": "Una taquicardia con QRS ancho es la arritmia en la que el error cuesta la vida: la misma pantalla puede ser una taquicardia ventricular que degenera en fibrilación ventricular o una taquicardia supraventricular con bloqueo de rama, y el verapamilo que salva a la segunda mata a la primera. El médico general debe seguir una regla simple (se asume taquicardia ventricular), mirar el pulso y la estabilidad antes que el trazado, saber cuándo cardiovertir y qué dar si el paciente está estable. En la misma familia entran los pacientes con QT largo, un riesgo silencioso que provocan fármacos de uso cotidiano como los macrólidos, las quinolonas y los antipsicóticos.",
    "contentSections": [
      {
        "subhead": "1. Taquicardia de Complejo Ancho: Asumir Taquicardia Ventricular",
        "paragraphs": [
          "Toda taquicardia de <strong>QRS ancho (≥ 120 ms)</strong> se considera <strong>taquicardia ventricular (TV) hasta demostrar lo contrario</strong>, sobre todo si el paciente tiene cardiopatía estructural o un infarto previo: en estos pacientes el 80% o más de las taquicardias anchas son ventriculares. Las otras posibilidades son una taquicardia supraventricular con bloqueo de rama (previo o dependiente de la frecuencia, «aberrancia»), una taquicardia preexcitada (antidrómica o FA preexcitada; Tema 1.6) y las causas metabólicas (hiperkalemia, intoxicación por antiarrítmicos), que también ensanchan el QRS. En el EUNACOM el antecedente de infarto previo con síncope o paro orienta de inmediato a taquicardia ventricular, porque el tejido cicatricial del infarto es el sustrato de la reentrada.",
          "La TV se define por tres o más latidos ventriculares consecutivos a más de 100 lpm; es <strong>sostenida</strong> si dura más de 30 segundos o provoca inestabilidad, y <strong>no sostenida (TVNS)</strong> si es más breve. Se llama <strong>monomorfa</strong> si todos los QRS son iguales (la mayoría; en el infarto previo) y <strong>polimorfa</strong> si la morfología cambia (isquemia aguda, QT largo). La TV puede tener pulso o no tenerlo: sin pulso, es un ritmo de paro desfibrilable.",
          "<strong>Datos que favorecen una TV</strong> frente a una supraventricular con aberrancia: antecedente de infarto o cardiopatía estructural; <strong>disociación aurículo-ventricular</strong> (ondas P independientes de los QRS, latidos de captura o de fusión); QRS muy ancho (mayor de 140 ms con morfología de bloqueo de rama derecha, o mayor de 160 ms con bloqueo de rama izquierda); <strong>concordancia positiva o negativa</strong> en todas las precordiales; eje en «tierra de nadie» (−90° a 180°); y un patrón de bloqueo de rama distinto del habitual (por ejemplo «orejas de conejo» con la oreja izquierda mayor en V1). Los criterios de Brugada ordenan estos signos, pero en la urgencia no se pierde tiempo: se asume TV. La estabilidad del paciente no sirve para distinguirlas, porque una TV puede ser bien tolerada durante horas.",
          "La primera pregunta, siempre, es <strong>si el paciente tiene pulso y si está estable</strong>. Sin pulso se trata como paro (Tema 1.3). Con pulso e inestabilidad (hipotensión, compromiso de conciencia, dolor torácico isquémico, edema pulmonar o insuficiencia cardíaca aguda), se indica <strong>cardioversión eléctrica sincronizada inmediata</strong>, sin esperar un ECG de 12 derivaciones ni un fármaco. Un paciente de 60 años con 200 lpm regulares, PA 70/40 mmHg, confuso y frío se cardiovierte, sea cual sea la taquiarritmia («por tener compromiso hemodinámico, da igual de qué taquiarritmia se trate»)."
        ]
      },
      {
        "subhead": "2. Cardioversión Eléctrica Sincronizada: Indicaciones y Técnica",
        "paragraphs": [
          "La <strong>cardioversión</strong> es una descarga eléctrica <strong>sincronizada con el QRS</strong> (el equipo detecta la onda R y dispara en ese momento) que termina una taquiarritmia <em>con pulso</em>. La sincronización evita que la descarga caiga en el período vulnerable de la onda T y provoque una fibrilación ventricular. Se distingue de la <strong>desfibrilación</strong>, que es una descarga no sincronizada de energía alta en el paro por fibrilación ventricular o TV sin pulso (y en la TV polimorfa inestable, donde no hay un QRS que sincronizar).",
          "Se indica en toda <strong>taquiarritmia con inestabilidad hemodinámica</strong> (TV, FA, flutter, TPSV) y de forma electiva en la FA o el flutter persistentes, con anticoagulación previa (Tema 1.4). <strong>Técnica:</strong> sedación breve y analgesia en el paciente consciente (midazolam, propofol, etomidato) con vía aérea asegurada y monitoreo; parches en posición anteroposterior o anterolateral; activar el botón «SYNC» y comprobar que el marcador cae sobre cada QRS; <strong>energías bifásicas iniciales</strong> de 50 a 100 J en el flutter y la TPSV, de 120 a 200 J en la FA y de <strong>100 J</strong> en la TV monomorfa, con aumentos escalonados si no revierte; alejarse y descargar. Si la descarga no revierte la arritmia, se repite con más energía y se combina con amiodarona.",
          "La cardioversión electiva y la decisión de una estrategia de control del ritmo corresponden al cardiólogo (el perfil del médico general es <em>derivar</em>), pero <strong>en el paciente inestable no se espera a un especialista</strong>: el médico que está al lado del paciente cardiovierte si cuenta con el equipo y la formación, o prepara el procedimiento mientras llega el equipo. Después de una TV estable o inestable el paciente siempre se hospitaliza con monitor y se deriva para estudiar la cardiopatía de base."
        ]
      },
      {
        "subhead": "3. Tratamiento de la TV Estable y Prevención de la Muerte Súbita",
        "paragraphs": [
          "En la <strong>TV monomorfa estable</strong> el fármaco de elección es la <strong>amiodarona 150 mg EV en 10 minutos</strong>, seguida de una infusión de 1 mg/min durante 6 horas y luego 0,5 mg/min; son alternativas la procainamida (30 mg/min hasta 17 mg/kg) y la lidocaína. Se toma un ECG de 12 derivaciones, se corrigen el potasio (meta mayor de 4 mEq/L) y el magnesio, y se busca la isquemia. El <strong>verapamilo y el diltiazem están contraindicados</strong> en toda taquicardia de complejo ancho no aclarada: si la arritmia es ventricular provocan colapso hemodinámico. La adenosina solo se considera en una taquicardia ancha regular monomorfa de causa supraventricular probable, nunca en la irregular.",
          "<strong>Prevención de la muerte súbita:</strong> el tratamiento de fondo de la TV en el infarto previo incluye un betabloqueador, la optimización del tratamiento de la insuficiencia cardíaca, la revascularización si hay isquemia y, en pacientes seleccionados, la <strong>ablación con catéter</strong>. El <strong>desfibrilador automático implantable (DAI)</strong> está indicado en la <strong>prevención secundaria</strong> (sobreviviente de un paro por FV o TV, o TV sostenida con compromiso hemodinámico sin causa reversible) y en la <strong>prevención primaria</strong> (FEVI ≤ 35% con síntomas de insuficiencia cardíaca a pesar de tres meses de tratamiento óptimo, o ≤ 30% 40 días después de un infarto). Las TV idiopáticas del tracto de salida del ventrículo derecho (morfología de bloqueo de rama izquierda con eje inferior en un joven sin cardiopatía) son benignas y se manejan con betabloqueador, calcioantagonista o ablación.",
          "<strong>Otras causas de arritmia ventricular que se preguntan:</strong> la <strong>hipertrofia</strong> o la <strong>miocardiopatía hipertrófica</strong> y la displasia arritmogénica en el joven que se desmaya con el ejercicio (Tema 3.5); el <strong>síndrome de Brugada</strong> (patrón de bloqueo de rama derecha con supradesnivel «coved» del ST en V1-V2, síncope o muerte súbita en el reposo o con la fiebre; DAI en los sintomáticos y evitar fármacos bloqueadores del sodio); la <strong>TV polimorfa catecolaminérgica</strong> (inducida por el ejercicio o el estrés emocional, tratada con betabloqueadores); y la intoxicación por antidepresivos tricíclicos, cocaína o digoxina."
        ]
      },
      {
        "subhead": "4. QT Largo y Torsión de Puntas",
        "paragraphs": [
          "El intervalo QT corregido (QTc, fórmula de Bazett; Tema 1.1) es normal por debajo de <strong>440 ms en el hombre y 460 ms en la mujer</strong>; un <strong>QTc mayor de 500 ms</strong> es el umbral de alarma para la <strong>torsión de puntas</strong> (<em>torsades de pointes</em>), una TV polimorfa con QRS que «giran» alrededor de la línea de base, que ocurre típicamente después de una secuencia corto-largo-corto (una extrasístole que produce una pausa) y puede ser autolimitada (síncope) o degenerar en fibrilación ventricular y muerte súbita.",
          "El <strong>QT largo adquirido</strong> es el más importante en la práctica. Las causas más preguntadas son <strong>fármacos</strong>: los macrólidos (claritromicina, azitromicina), las fluoroquinolonas (ciprofloxacino, levofloxacino), los antipsicóticos (haloperidol, quetiapina), los antidepresivos tricíclicos, el ondansetrón, la metadona, la cloroquina, los antifúngicos azólicos y los antiarrítmicos de clase IA (procainamida, quinidina) y III (sotalol, amiodarona); y los <strong>trastornos electrolíticos</strong>: <strong>hipokalemia, hipomagnesemia e hipocalcemia</strong>. Otros factores de riesgo son el sexo femenino, la bradicardia, la insuficiencia cardíaca y la hepatopatía. El <strong>QT largo congénito</strong> (síndromes de Romano-Ward, y de Jervell y Lange-Nielsen con sordera) se sospecha en un niño o adulto joven con síncope con el ejercicio, el susto o el ruido, o con antecedentes familiares de muerte súbita; se evita cualquier fármaco que alargue el QT en esos pacientes (por ejemplo, el ciprofloxacino y la azitromicina, que están contraindicados, y se elige un antibiótico que no los alargue).",
          "<strong>Conducta ante un QTc largo:</strong> 1) <strong>suspender el fármaco causante</strong>; 2) monitorizar el ritmo; 3) corregir los electrolitos (potasio hasta 4,5 mEq/L o más, magnesio y calcio); 4) la <strong>torsión de puntas</strong> se trata con <strong>sulfato de magnesio 2 g EV</strong> en 10 minutos (aunque el magnesio sea normal); si es recurrente se acorta el QT aumentando la frecuencia cardíaca con isoproterenol o con un marcapaso; 5) si degenera en FV o hay inestabilidad, desfibrilación. <strong>La amiodarona, la procainamida y el sotalol están contraindicados</strong> porque prolongan más el QT. En el QT largo congénito el tratamiento es un betabloqueador (propranolol o nadolol), evitar los gatillantes y, en los de alto riesgo o sobrevivientes de un paro, un DAI."
        ]
      },
      {
        "subhead": "5. Seguimiento Posterior y Errores Frecuentes",
        "paragraphs": [
          "Todo paciente que presentó una taquicardia ventricular, una fibrilación ventricular o una torsión de puntas se hospitaliza con monitoreo, se le mide la troponina, se corrigen el potasio (meta de 4 a 5 mEq/L) y el magnesio y se estudia la causa con ecocardiograma, coronariografía si hay sospecha de isquemia y, en los jóvenes o con una historia familiar, un estudio genético o de canalopatías. Después del alta se controlan los fármacos que alargan el QT (se entrega al paciente con QT largo una lista de medicamentos que debe evitar), se mantiene el betabloqueador y se revisa el desfibrilador implantable si lo tiene.",
          "<strong>Errores clásicos del examen:</strong> dar verapamilo (o adenosina sin certeza) a una taquicardia de QRS ancho; cardiovertir sin sincronizar a un paciente con pulso o sincronizar en la FV; indicar amiodarona en la torsión de puntas; retrasar la cardioversión del paciente inestable para «tomar el ECG de 12 derivaciones»; no revisar la lista de fármacos ante un QTc alargado; y descartar la TV porque el paciente «está estable» (la estabilidad no distingue la TV de una TPSV con aberrancia)."
        ]
      }
    ],
    "table": {
      "title": "Taquicardias de Complejo Ancho: Reconocimiento y Manejo de Urgencia",
      "headers": [
        "Tipo de taquicardia",
        "Ritmo / complejo QRS",
        "Manejo de 1.ª elección",
        "Fármacos contraindicados"
      ],
      "rows": [
        [
          "TV monomorfa estable",
          "Regular / QRS ancho (> 120 ms)",
          "Amiodarona 150 mg EV en 10 min (o cardioversión)",
          "Verapamilo y diltiazem (colapso hemodinámico)"
        ],
        [
          "TV (o FA, TPSV) inestable",
          "Cualquier taquiarritmia con compromiso hemodinámico",
          "Cardioversión eléctrica sincronizada inmediata",
          "Retrasar con fármacos o estudios"
        ],
        [
          "TV sin pulso / FV",
          "Sin pulso (paro)",
          "Desfibrilación 200 J + RCP (Tema 1.3)",
          "Cardioversión sincronizada"
        ],
        [
          "Torsión de puntas (QT largo)",
          "Polimorfa; QTc > 500 ms",
          "Sulfato de magnesio 2 g EV; suspender fármaco; corregir K, Mg",
          "Amiodarona, procainamida, sotalol"
        ],
        [
          "FA preexcitada (WPW)",
          "Irregular / QRS ancho, > 200 lpm",
          "Cardioversión sincronizada o procainamida (Tema 1.6)",
          "Adenosina, verapamilo, digoxina, betabloqueadores"
        ],
        [
          "TPSV con aberrancia",
          "Regular / QRS ancho",
          "Se trata como TV si hay duda",
          "Verapamilo si no se aclara el origen"
        ]
      ]
    },
    "vignette": "Hombre de 62 años con un infarto de pared anterior hace 3 años (FEVI 32%) consulta en el servicio de urgencia por palpitaciones y disnea de 40 minutos. Está vigil, PA 102/68 mmHg, FC 172 lpm regular, sin dolor torácico ni edema pulmonar. El ECG muestra una taquicardia regular de complejos anchos de 160 ms, con disociación de las ondas P. El médico de turno sugiere administrar verapamilo endovenoso.",
    "explicacion": "Es una taquicardia ventricular monomorfa sostenida, hemodinámicamente estable, en un paciente con cardiopatía estructural (infarto previo y FEVI baja). La conducta es amiodarona 150 mg EV en 10 minutos con monitorización continua y desfibrilador a mano, ECG de 12 derivaciones, corrección del potasio y del magnesio, y derivación a cardiología para estudiar la isquemia y evaluar un desfibrilador implantable (FEVI ≤ 35%). Si se hubiera deteriorado (hipotensión, compromiso de conciencia o edema pulmonar) se cardiovertiría de inmediato con una descarga sincronizada. El verapamilo está contraindicado en las taquicardias de complejo ancho: en una TV provoca colapso hemodinámico.",
    "keyPoints": [
      "Taquicardia regular de QRS ancho (≥ 120 ms) = TV hasta demostrar lo contrario, sobre todo con infarto previo o cardiopatía estructural.",
      "Primero pulso y estabilidad: sin pulso es paro (desfibrilación); con pulso e inestable, cardioversión eléctrica sincronizada inmediata, cualquiera sea la taquiarritmia.",
      "TV estable: amiodarona 150 mg EV en 10 minutos; el verapamilo y el diltiazem están contraindicados (colapso hemodinámico).",
      "Cardioversión = descarga sincronizada con pulso; desfibrilación = descarga no sincronizada en el paro (FV/TV sin pulso) y en la TV polimorfa.",
      "Favorecen TV: disociación AV, latidos de captura o fusión, QRS > 140-160 ms, concordancia precordial y eje extremo.",
      "QTc normal < 440 ms (H) y < 460 ms (M); QTc > 500 ms = riesgo de torsión de puntas.",
      "Causas de QT largo: macrólidos, quinolonas, antipsicóticos, ondansetrón, metadona, antiarrítmicos IA y III, hipokalemia, hipomagnesemia e hipocalcemia.",
      "Torsión de puntas: sulfato de magnesio 2 g EV, suspender el fármaco, corregir electrolitos, desfibrilar si degenera en FV; no usar amiodarona. DAI en prevención secundaria y en FEVI ≤ 35%."
    ],
    "questions": [
      {
        "stem": "Un paciente ingresa al servicio de urgencia, por un cuadro de disnea marcada y síncopes. Al examen físico está confuso, con pulso de 200 latidos por minuto, regular y presión arterial de 70/40 mmHg. Además, tiene frialdad de extremidades y piel sudorosa. ¿Cuál es el tratamiento inicial más adecuado en este momento?",
        "options": [
          {
            "id": "A",
            "text": "Maniobras vagales"
          },
          {
            "id": "B",
            "text": "Amiodarona endovenosa"
          },
          {
            "id": "C",
            "text": "Adenosina endovenosa"
          },
          {
            "id": "D",
            "text": "Desfibrilación"
          },
          {
            "id": "E",
            "text": "Cardioversión eléctrica"
          }
        ],
        "correcta": "E",
        "explicacion": "Por tener compromiso hemodinámico, da igual de qué taquiarritmia se trate: se cardioverte eléctricamente de inmediato. No debe confundirse con la desfibrilación, que se usa en el paro con FV o TV sin pulso.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 4"
      },
      {
        "stem": "Un paciente de 65 años, con antecedente de un infarto agudo al miocardio, hace 2 años, presenta un síncope, con compromiso de conciencia que requirió maniobras de reanimación para recuperarse. ¿Qué arritmia es la que debe descartarse en primer lugar?",
        "options": [
          {
            "id": "A",
            "text": "Taquicardia paroxística supraventricular"
          },
          {
            "id": "B",
            "text": "Bloqueo auriculoventricular completo"
          },
          {
            "id": "C",
            "text": "Síndrome de Wolff Parkinson White"
          },
          {
            "id": "D",
            "text": "Taquicardia ventricular"
          },
          {
            "id": "E",
            "text": "Fibrilación auricular"
          }
        ],
        "correcta": "D",
        "explicacion": "Un infarto previo es el sustrato clásico de la reentrada ventricular: el síncope con necesidad de reanimación orienta a una taquicardia ventricular (que puede degenerar en fibrilación ventricular), la arritmia más grave y letal de la lista.",
        "recTag": "EUNACOM Julio 2019 · Pregunta 177"
      },
      {
        "stem": "Hombre de 75 años que hace 4 años tuvo un infarto y actualmente presenta palpitaciones intensas y compromiso de conciencia que se recupera después de reanimación cardiopulmonar ¿Qué arritmia debe descartarse en primer lugar?",
        "options": [
          {
            "id": "A",
            "text": "Fibrilación Auricular"
          },
          {
            "id": "B",
            "text": "Taquicardia Ventricular"
          },
          {
            "id": "C",
            "text": "Taquicardia paroxística supraventricular"
          },
          {
            "id": "D",
            "text": "Bloqueo A-V de segundo grado mobitz 1"
          },
          {
            "id": "E",
            "text": "Flutter auricular"
          }
        ],
        "correcta": "B",
        "explicacion": "Palpitaciones con pérdida de conciencia y reanimación en un paciente con infarto previo: taquicardia ventricular, por reentrada alrededor de la cicatriz. También podría ser una fibrilación ventricular, que suele estar precedida de una TV.",
        "recTag": "EUNACOM Julio 2016 · Pregunta 92"
      },
      {
        "stem": "Hombre de 52 años en tratamiento con claritromicina por neumonía presenta palpitaciones y mareos. El ECG revela ritmo sinusal a 75 lpm, intervalo QT medido de 520 ms y RR de 800 ms (QTc calculado de 581 ms mediante fórmula de Bazett). ¿Cuál es la conducta médica inmediata más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Suspender de inmediato la claritromicina, monitorizar al paciente y corregir eventuales trastornos hidroelectrolíticos"
          },
          {
            "id": "B",
            "text": "Iniciar amiodarona endovenosa para prevenir taquiarritmias"
          },
          {
            "id": "C",
            "text": "Indicar cardioversión eléctrica sincronizada"
          },
          {
            "id": "D",
            "text": "Administrar sulfato de atropina 1 mg endovenoso"
          },
          {
            "id": "E",
            "text": "Tranquilizar al paciente e indicar control ambulatorio en 1 semana"
          }
        ],
        "correcta": "A",
        "explicacion": "Un QTc mayor de 500 ms es un riesgo crítico de torsión de puntas. La conducta es suspender el fármaco causante (los macrólidos prolongan el QT), monitorizar y asegurar potasio y magnesio normales. La amiodarona prolonga aún más el QT y está contraindicada; no hay taquiarritmia que cardiovertir.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "nuevo (borrador inicial; reescrito al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-08",
    "classId": "cardio-08",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Arritmias y Paro Cardiorrespiratorio",
    "topicLabel": "1.8",
    "title": "Bradicardias, Bloqueos Aurículo-Ventriculares y Marcapasos",
    "perfilCode": "1.01.1.002, 1.01.2.009",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Implante de marcapaso en el bloqueo AV de alto grado y en la enfermedad del nodo sinusal sintomática (problema de salud GES)",
    "reconstrucciones": "",
    "frecuencia": "Alta · Identificación de los bloqueos AV (Mobitz I, Mobitz II y completo), atropina y marcapaso transcutáneo en la bradicardia inestable, indicación de marcapaso definitivo, hiperkalemia con bradicardia",
    "svg": null,
    "algoTitle": "Algoritmo diagnóstico y terapéutico de los bloqueos AV y las bradicardias",
    "diagram": {
      "title": "Bradicardia: Estabilidad, Atropina, Marcapaso y Tipo de Bloqueo AV",
      "svg": "<svg viewBox=\"0 0 620 480\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar08\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar08)}\n  </style>\n  <rect class=\"b\" x=\"80\" y=\"6\" width=\"460\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Bradicardia (FC &lt; 60 lpm): ECG de 12 derivaciones y monitor</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">¿P antes de cada QRS? ¿PR? ¿Disociación AV? ¿QRS ancho?</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"dec\" x=\"80\" y=\"58\" width=\"460\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"75\" text-anchor=\"middle\" font-weight=\"700\">¿Inestable por la bradicardia?</text>\n  <text class=\"sub\" x=\"310\" y=\"87\" text-anchor=\"middle\">Hipotensión, shock, compromiso de conciencia, dolor isquémico o edema pulmonar</text>\n  <path class=\"ln\" d=\"M310,98 V112 H158 V122\"/>\n  <path class=\"ln\" d=\"M310,112 H462 V122\"/>\n  <text class=\"lbl\" x=\"150\" y=\"108\" text-anchor=\"end\">Sí</text>\n  <text class=\"lbl\" x=\"470\" y=\"108\" text-anchor=\"start\">No: estable</text>\n  <rect class=\"acc\" x=\"12\" y=\"122\" width=\"292\" height=\"46\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"142\" text-anchor=\"middle\" font-weight=\"700\">1. ATROPINA 1 mg EV c/3-5 min</text>\n  <text class=\"accS\" x=\"158\" y=\"154\" text-anchor=\"middle\">Máximo 3 mg · útil en bloqueo nodal; poco en infranodal</text>\n  <rect class=\"b\" x=\"316\" y=\"122\" width=\"292\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"142\" text-anchor=\"middle\" font-weight=\"700\">Observar, tratar la causa</text>\n  <text class=\"sub\" x=\"462\" y=\"154\" text-anchor=\"middle\">Fármacos (BB, calcioantagonistas, digoxina), K, TSH, isquemia</text>\n  <path class=\"ln\" d=\"M158,168 V184\"/>\n  <rect class=\"acc\" x=\"12\" y=\"184\" width=\"292\" height=\"46\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"204\" text-anchor=\"middle\" font-weight=\"700\">2. MARCAPASO TRANSCUTÁNEO</text>\n  <text class=\"accS\" x=\"158\" y=\"216\" text-anchor=\"middle\">60-70 lpm, subir mA hasta capturar con pulso</text>\n  <path class=\"ln\" d=\"M158,230 V246\"/>\n  <rect class=\"b\" x=\"12\" y=\"246\" width=\"292\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"266\" text-anchor=\"middle\" font-weight=\"700\">3. Adrenalina 2-10 µg/min o dopamina 5-20 µg/kg/min</text>\n  <text class=\"sub\" x=\"158\" y=\"278\" text-anchor=\"middle\">Puente: marcapaso transvenoso transitorio</text>\n  <rect class=\"warn\" x=\"316\" y=\"184\" width=\"292\" height=\"46\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"204\" text-anchor=\"middle\" font-weight=\"700\">Bradicardia con hiperkalemia (QRS ancho)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"216\" text-anchor=\"middle\">GLUCONATO DE CALCIO EV primero (no atropina)</text>\n  <path class=\"ln\" d=\"M462,168 V184\"/>\n  <rect class=\"dec\" x=\"316\" y=\"246\" width=\"292\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"266\" text-anchor=\"middle\" font-weight=\"700\">¿Mobitz II, BAV completo o ENS sintomática?</text>\n  <text class=\"sub\" x=\"462\" y=\"278\" text-anchor=\"middle\">Marcapaso DEFINITIVO (GES)</text>\n  <path class=\"ln\" d=\"M462,230 V246\"/>\n  <rect class=\"b\" x=\"12\" y=\"310\" width=\"596\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"326\" text-anchor=\"middle\" font-weight=\"700\">Bloqueos AV: nivel y conducta</text>\n  <text class=\"sub\" x=\"310\" y=\"338\" text-anchor=\"middle\">1.er grado (PR &gt; 200 ms): benigno, sin marcapaso · Mobitz I (Wenckebach, nodal): observar</text>\n  <text class=\"sub\" x=\"310\" y=\"350\" text-anchor=\"middle\">Mobitz II (infranodal): marcapaso · BAV completo (disociación AV, QRS ancho o escape lento): marcapaso</text>\n  <text class=\"sub\" x=\"310\" y=\"362\" text-anchor=\"middle\">IAM inferior: BAV transitorio, atropina · IAM anterior: BAV = necrosis extensa, marcapaso</text>\n  <text class=\"lbl\" x=\"12\" y=\"392\" text-anchor=\"start\">Síncope súbito + bradicardia severa = crisis de Stokes-Adams.</text>\n\n</svg>"
    },
    "contexto": "Un adulto mayor con mareos, caídas o un síncope sin pródromo y un pulso de 35 es el paciente típico de la bradiarritmia, y su trazado es una pregunta fija del EUNACOM. El médico general debe distinguir los cuatro bloqueos aurículo-ventriculares en el ECG, saber qué hacer con la bradicardia inestable (atropina, marcapaso transcutáneo y fármacos) y reconocer a quién se le implanta un marcapaso definitivo. Un detalle que cae siempre: la bradicardia con hiperkalemia no se trata con atropina sino con calcio. Esta clase se apoya en la lectura del ECG (Tema 1.1) y se continúa en el infarto inferior (Tema 2.6).",
    "contentSections": [
      {
        "subhead": "1. Bradicardia: Causas y Evaluación Inicial",
        "paragraphs": [
          "La <strong>bradicardia</strong> es una frecuencia cardíaca menor de 60 lpm. Puede ser fisiológica (deportistas, sueño) o patológica. Las causas se dividen en <strong>intrínsecas</strong> (enfermedad degenerativa del sistema de conducción en el adulto mayor, <strong>enfermedad del nodo sinusal</strong>, isquemia o infarto —sobre todo inferior—, miocarditis, enfermedad de Chagas, cirugía cardíaca, amiloidosis) y <strong>extrínsecas</strong> (<strong>fármacos</strong>: betabloqueadores, calcioantagonistas no dihidropiridínicos, digoxina, amiodarona, donepezilo; <strong>hiperkalemia</strong>, hipotiroidismo, hipotermia, hipertensión intracraneal con la tríada de Cushing, aumento del tono vagal por vómitos o dolor, apnea del sueño). En un paciente con bradicardia es obligatorio revisar la lista de medicamentos y el potasio.",
          "La <strong>enfermedad del nodo sinusal</strong> (síndrome del seno enfermo) incluye la bradicardia sinusal persistente e inapropiada, las pausas sinusales, el bloqueo sinoauricular y el <strong>síndrome de taquicardia-bradicardia</strong>, en el que períodos de fibrilación auricular o flutter alternan con bradicardia o pausas al terminar la taquiarritmia. Un paciente con FA que consulta por episodios de malestar, sudoración y mareo de segundos de duración, y que usa atenolol y verapamilo, tiene típicamente un síndrome de taquicardia-bradicardia: el examen para confirmarlo es el <strong>monitoreo electrocardiográfico de 24 horas (Holter)</strong>, que correlaciona los síntomas con el ritmo (Tema 1.9). El ECG es el examen inicial en cualquier síncope con bradicardia.",
          "El manejo parte de una pregunta: ¿la bradicardia explica los síntomas y es hemodinámicamente tolerada? Una frecuencia de 45 lpm en un paciente joven y asintomático no se trata; una frecuencia de 35 con hipotensión es una emergencia. El <strong>ECG</strong> aclara el mecanismo: si cada QRS está precedido por una P (bradicardia sinusal) o si hay un bloqueo, una disociación o un ritmo de escape."
        ]
      },
      {
        "subhead": "2. Clasificación Anatómica y Electrocardiográfica de los Bloqueos AV",
        "paragraphs": [
          "Los <strong>bloqueos aurículo-ventriculares (BAV)</strong> son una alteración de la propagación del impulso desde las aurículas a los ventrículos, a través del nodo AV o del sistema His-Purkinje. Se clasifican por grado y por el nivel anatómico:",
          "1) <strong>BAV de primer grado:</strong> retraso constante de la conducción. <strong>PR &gt; 200 ms (5 mm)</strong>, constante, y <strong>todas las ondas P conducen</strong>. Suele ser nodal, benigno y asintomático (aumento del tono vagal, fármacos como betabloqueadores o digoxina, miocarditis, fiebre reumática, edad); no requiere marcapaso.",
          "2) <strong>BAV de segundo grado Mobitz I (fenómeno de Wenckebach):</strong> prolongación progresiva del intervalo PR en cada latido hasta que una onda P se bloquea y no genera QRS; después el ciclo se reinicia (los R-R se acortan antes de la pausa). El nivel es <strong>nodal</strong>, el QRS es angosto, suele ser asintomático y raramente progresa a bloqueo completo. Se observa; se maneja la causa (fármacos, vagotonía, infarto inferior).",
          "3) <strong>BAV de segundo grado Mobitz II:</strong> intervalos PR <strong>constantes</strong> (normales o largos) con <strong>falla intermitente e impredecible de la conducción</strong> (ondas P bloqueadas sin alargamiento previo del PR). Su nivel es <strong>infranodal</strong> (haz de His o ramas), el QRS suele ser ancho y tiene un <strong>alto riesgo de progresar a asistolia o BAV completo</strong>, con síncope. Tiene indicación de marcapaso definitivo. El <strong>bloqueo 2:1</strong> (una P conducida y una bloqueada) no puede clasificarse como tipo I ni tipo II con certeza: si el QRS es ancho se considera infranodal. El <strong>BAV de alto grado</strong> es aquel en que dos o más P consecutivas se bloquean.",
          "4) <strong>BAV de tercer grado o completo:</strong> interrupción total de la conducción AV, con <strong>disociación AV completa</strong>: las aurículas laten a su frecuencia sinusal (ondas P regulares a 60-80 por minuto) y los ventrículos son comandados por un <strong>marcapaso de escape</strong> nodal (QRS angosto, 40-60 lpm) o ventricular (QRS ancho, 30-40 lpm), en forma totalmente independiente: la P no se relaciona con el QRS. Una FC regular cercana a 30-40 lpm con disociación AV en el ECG, en un paciente con malestar o síncope, es un BAV completo.",
          "La relación entre el bloqueo y el infarto agudo es una pregunta frecuente: en el <strong>infarto inferior</strong> (coronaria derecha, que irriga el nodo AV) el BAV es nodal, habitualmente transitorio, con QRS angosto y responde a la atropina; en el <strong>infarto anterior</strong> (descendente anterior) el bloqueo es infranodal, refleja una necrosis extensa del tabique y requiere marcapaso. El BAV congénito, el de la cirugía valvular y el de la enfermedad de Chagas (que produce además bloqueo de rama derecha y hemibloqueo anterior) deben recordarse como etiologías."
        ]
      },
      {
        "subhead": "3. Manifestaciones Clínicas y Síndrome de Stokes-Adams",
        "paragraphs": [
          "Los bloqueos de alto grado (Mobitz II y BAV completo) y la bradicardia severa producen bajo gasto cardíaco: <strong>astenia intensa, mareos, intolerancia al ejercicio, disnea, angina e insuficiencia cardíaca</strong>, y en el adulto mayor caídas y deterioro cognitivo. El <strong>síndrome de Morgagni-Adams-Stokes</strong> es la pérdida súbita y transitoria de la conciencia (síncope cardiogénico) por asistolia ventricular transitoria o bradicardia extrema, de duración breve y con recuperación rápida y sin déficit neurológico focal; puede acompañarse de convulsiones por la hipoperfusión cerebral. Un paciente con dos caídas con pérdida de conciencia, pálido y con 32 lpm, tiene un Stokes-Adams hasta que se demuestre lo contrario.",
          "El examen físico muestra un <strong>pulso regular y lento</strong>, ondas «a en cañón» en el pulso yugular (por la contracción auricular contra la válvula tricúspide cerrada) y un primer ruido de intensidad variable en el bloqueo completo. La hipertensión sistólica con presión de pulso amplia y la cardiomegalia son compensaciones del volumen sistólico aumentado. Siempre se descartan causas reversibles: hiperkalemia, intoxicación digitálica o por betabloqueadores, hipotiroidismo y el infarto inferior."
        ]
      },
      {
        "subhead": "4. Manejo de Urgencia de la Bradicardia Inestable",
        "paragraphs": [
          "Ante una bradicardia sintomática con compromiso hemodinámico (hipotensión, shock, alteración de conciencia, dolor torácico isquémico o edema pulmonar agudo) se monitoriza, se da oxígeno si hay hipoxemia, se instala una vía venosa y se sigue esta secuencia: 1) <strong>atropina 1 mg EV en bolo cada 3 a 5 minutos, hasta un máximo acumulado de 3 mg</strong> (dosis menores de 0,5 mg o la administración lenta pueden producir bradicardia paradójica). Es muy efectiva en los bloqueos suprahisianos o nodales (Mobitz I y los del infarto inferior) pero <strong>poco eficaz en los infranodales</strong> (Mobitz II y BAV completo con QRS ancho) y no sirve en el trasplante cardíaco; 2) <strong>estimulación eléctrica transcutánea (marcapaso externo)</strong>, si la atropina falla o el bloqueo es de alto grado inestable: parches anteroposteriores, frecuencia de 60 a 70 lpm, y se sube la corriente (mA) hasta lograr <strong>captura mecánica con pulso palpable</strong> (con sedación y analgesia por el dolor); 3) <strong>drogas vasoactivas en infusión</strong>: adrenalina 2 a 10 µg/min o dopamina 5 a 20 µg/kg/min, como puente; 4) <strong>marcapaso transitorio transvenoso</strong> por vía venosa central (yugular o femoral) mientras se resuelve la causa o se implanta el definitivo.",
          "<strong>La excepción que se pregunta:</strong> si la bradicardia (por ejemplo 30 lpm) se acompaña de <strong>hiperkalemia</strong> (potasio de 8 mEq/L, T picudas, QRS ancho), la conducta inicial es el <strong>gluconato de calcio endovenoso</strong>, que estabiliza la membrana miocárdica; después insulina con glucosa, salbutamol, bicarbonato y diálisis. No se pierde tiempo con atropina ni marcapaso, que fallan con un potasio muy elevado. En la intoxicación por betabloqueadores se usa glucagón, y en la digitálica, anticuerpos específicos (fragmentos Fab). Los fármacos causantes se suspenden.",
          "En el <strong>paciente estable</strong> con un bloqueo de bajo riesgo (primer grado o Mobitz I) se observa y se corrigen las causas; con Mobitz II o BAV completo, aunque esté estable, se hospitaliza con monitor y, si fuera necesario, marcapaso transcutáneo disponible, porque el riesgo de asistolia es alto."
        ]
      },
      {
        "subhead": "5. Marcapasos: Indicaciones de Implante Definitivo y Aspectos Prácticos",
        "paragraphs": [
          "Tienen indicación formal de <strong>marcapaso definitivo</strong>: 1) <strong>BAV de tercer grado (completo)</strong>, sintomático o asintomático con pausas ventriculares mayores de 3 segundos o un escape menor de 40 lpm; 2) <strong>BAV de segundo grado Mobitz II</strong> (y el BAV avanzado o de alto grado); 3) <strong>enfermedad del nodo sinusal sintomática</strong> (incluido el síndrome de taquicardia-bradicardia), una vez descartadas las causas reversibles; y 4) el bloqueo bifascicular o trifascicular con síncope, y el bloqueo de rama alternante. El implante de marcapaso en estos pacientes está cubierto por el sistema GES (Garantías Explícitas en Salud). <strong>No tienen indicación de marcapaso</strong>: el BAV de primer grado, el Mobitz I asintomático, la fibrilación auricular o el flutter (se tratan con fármacos), el bloqueo completo de rama izquierda aislado y asintomático (se observa) ni la bradicardia sinusal asintomática. Una bradicardia causada por un fármaco necesario se resuelve cambiando el fármaco antes de implantar.",
          "El marcapaso consiste en un generador subcutáneo (subclavio) y uno o dos electrodos transvenosos: <strong>auricular derecho</strong> y/o <strong>ventricular derecho</strong>. Los modos se nombran con un código de letras (la primera, la cámara estimulada; la segunda, la cámara sensada; la tercera, la respuesta): <strong>VVI</strong> estimula y sensa el ventrículo (sirve en la fibrilación auricular lenta), <strong>AAI</strong> la aurícula y <strong>DDD</strong> ambas cámaras, manteniendo la sincronía AV (de elección en el BAV con ritmo sinusal y en la enfermedad del nodo con conducción AV normal). La estimulación ventricular derecha crónica y excesiva puede provocar insuficiencia cardíaca, y la estimulación fisiológica (del haz de His o del sistema de conducción) y la resincronización son alternativas. Complicaciones: neumotórax en el implante, infección de la bolsa o del electrodo, desplazamiento del electrodo y el síndrome del marcapaso. El paciente lleva un carné, se controla cada 6 a 12 meses y la imagen por resonancia se hace solo con dispositivos compatibles."
        ]
      }
    ],
    "table": {
      "title": "Clasificación de los Bloqueos AV: Hallazgos Electrocardiográficos y Conducta",
      "headers": [
        "Tipo de bloqueo AV",
        "Patrón en el ECG",
        "Nivel anatómico de la lesión",
        "Conducta / tratamiento definitivo"
      ],
      "rows": [
        [
          "BAV 1.er grado",
          "PR > 200 ms constante, todas las P conducen",
          "Nodo AV (suprahisiano)",
          "No requiere marcapaso (control médico, revisar fármacos)"
        ],
        [
          "BAV 2.º grado Mobitz I (Wenckebach)",
          "PR se alarga progresivamente hasta que una P no conduce",
          "Nodo AV (suprahisiano)",
          "Observación; marcapaso solo si hay síntomas graves"
        ],
        [
          "BAV 2.º grado Mobitz II",
          "PR constante con ondas P bloqueadas súbitas",
          "His-Purkinje (infranodal)",
          "MARCAPASO DEFINITIVO"
        ],
        [
          "BAV 3.er grado (completo)",
          "Disociación AV total (P y QRS independientes), escape lento",
          "Infranodal / His-Purkinje (o nodal)",
          "MARCAPASO DEFINITIVO"
        ],
        [
          "Enfermedad del nodo sinusal / taqui-bradi",
          "Bradicardia sinusal severa, pausas, alternancia con FA",
          "Nodo sinusal",
          "Marcapaso definitivo + fármacos frenadores"
        ],
        [
          "Bradicardia inestable",
          "FC < 50 con hipotensión, shock o isquemia",
          "Cualquiera",
          "Atropina 1 mg → marcapaso transcutáneo → adrenalina o dopamina"
        ],
        [
          "Bradicardia con hiperkalemia",
          "QRS ancho, T picudas, K > 7",
          "Metabólico",
          "Gluconato de calcio EV primero"
        ]
      ]
    },
    "vignette": "Hombre de 81 años es traído a urgencias tras dos caídas con pérdida de conciencia breve mientras caminaba en su casa. Está vigil, pálido, PA 85/45 mmHg, FC 32 lpm. El ECG muestra ondas P regulares a 78 por minuto y complejos QRS anchos regulares a 32 por minuto, sin relación fija entre el intervalo PR y los complejos QRS. El potasio es de 4,2 mEq/L.",
    "explicacion": "El cuadro corresponde a un bloqueo aurículo-ventricular completo de tercer grado con escape ventricular lento, que causa síncopes por bajo gasto (crisis de Stokes-Adams). La conducta en urgencias: monitorización continua y oxígeno; atropina 1 mg EV como medida puente (poco probable que responda, por ser infranodal) y parches de marcapaso transcutáneo listos o ya aplicados con captura mecánica; adrenalina o dopamina si la hipotensión persiste; hospitalización en una unidad coronaria o de cuidados intermedios para marcapaso transitorio; y activación del implante de marcapaso definitivo (dual, DDD) bajo la garantía GES.",
    "keyPoints": [
      "BAV 1.er grado: PR > 200 ms constante, benigno, sin marcapaso. Mobitz I (Wenckebach): PR progresivo y pausa, nodal, se observa.",
      "Mobitz II (PR constante y P bloqueadas) y BAV completo (disociación AV con escape lento): infranodales, indicación de marcapaso definitivo.",
      "La disociación AV (P y QRS independientes) con FC cercana a 30-40 lpm es el sello del BAV completo; síncope súbito con bradicardia severa = Stokes-Adams.",
      "Bradicardia inestable: atropina 1 mg EV cada 3-5 min (máx. 3 mg) → marcapaso transcutáneo → adrenalina o dopamina → marcapaso transvenoso.",
      "La atropina sirve en el bloqueo nodal (Mobitz I, infarto inferior) pero poco en el infranodal (Mobitz II y BAV completo con QRS ancho).",
      "Bradicardia con hiperkalemia (K 8, QRS ancho): gluconato de calcio EV primero.",
      "Marcapaso definitivo (GES): BAV completo, Mobitz II, enfermedad del nodo sinusal sintomática, bloqueo bifascicular con síncope. No en FA ni flutter ni en el BAV de primer grado.",
      "En el infarto inferior el BAV es transitorio y nodal (atropina); en el infarto anterior es infranodal y exige marcapaso."
    ],
    "questions": [
      {
        "stem": "En un paciente adulto mayor, que presenta síncopes, ¿cuál de las siguientes arritmias requiere un marcapaso definitivo?",
        "options": [
          {
            "id": "A",
            "text": "Fibrilación auricular crónica"
          },
          {
            "id": "B",
            "text": "Bloqueo auriculoventricular de primer grado"
          },
          {
            "id": "C",
            "text": "Flutter auricular 2-3 a 1"
          },
          {
            "id": "D",
            "text": "Enfermedad del nodo sinusal"
          },
          {
            "id": "E",
            "text": "Bloqueo completo de rama izquierda"
          }
        ],
        "correcta": "D",
        "explicacion": "La enfermedad del nodo sinusal sintomática requiere marcapaso definitivo. Los bloqueos AV son indicación solo si son de tercer grado o de segundo grado Mobitz II; el flutter y la FA se tratan con fármacos, y el bloqueo de rama izquierda se observa.",
        "recTag": "EUNACOM Julio 2016 · Pregunta 117"
      },
      {
        "stem": "Paciente con bradicardia de 30 lpm e hiperkalemia de 8,3 mEq/L. ¿Cuál es la conducta inicial más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Bicarbonato de sodio endovenoso"
          },
          {
            "id": "B",
            "text": "Insulina + glucosa endovenosa"
          },
          {
            "id": "C",
            "text": "Gluconato de calcio endovenoso"
          },
          {
            "id": "D",
            "text": "Kayexalate oral"
          },
          {
            "id": "E",
            "text": "Hemodiálisis de urgencia"
          }
        ],
        "correcta": "C",
        "explicacion": "Con alteraciones del ECG o bradicardia por hiperkalemia grave, la primera medida es el gluconato de calcio endovenoso, que estabiliza la membrana del miocardio en minutos; después se desplaza el potasio (insulina con glucosa, salbutamol, bicarbonato) y se elimina (diálisis, resinas).",
        "recTag": "EUNACOM Enero 2023 · Pregunta 107"
      },
      {
        "stem": "Hombre de 76 años consulta por astenia y mareos de 3 días. El ECG revela ondas P a 70 lpm e intervalos PR de 160 ms constantes, pero cada tres ondas P, una no es seguida de complejo QRS sin que haya existido alargamiento previo del PR. El complejo QRS mide 130 ms. ¿Cuál es el diagnóstico y la conducta definitiva?",
        "options": [
          {
            "id": "A",
            "text": "Bloqueo AV de 2.º grado Mobitz II; requiere implante de marcapaso definitivo"
          },
          {
            "id": "B",
            "text": "Bloqueo AV de 2.º grado Mobitz I; requiere observación ambulatoria"
          },
          {
            "id": "C",
            "text": "Bloqueo AV de 1.er grado; requiere suspender fármacos cronótropos"
          },
          {
            "id": "D",
            "text": "Disociación auriculoventricular por intoxicación digitálica"
          },
          {
            "id": "E",
            "text": "Paro sinusal con ritmo de escape de la unión"
          }
        ],
        "correcta": "A",
        "explicacion": "Un bloqueo intermitente de ondas P sin prolongación previa del PR es un Mobitz II. Por su origen infranodal, con QRS ancho, el riesgo de progresar a bloqueo completo y de muerte súbita es alto: indicación formal de marcapaso definitivo.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Paciente de 85 años ingresa a SAPU en shock cardiogénico con FC de 28 lpm por BAV de tercer grado. Se administra atropina 1 mg EV sin respuesta de la frecuencia cardíaca ni de la presión arterial. ¿Cuál es el paso inmediato que debe realizar el médico tratante?",
        "options": [
          {
            "id": "A",
            "text": "Instalar marcapaso externo transcutáneo e iniciar infusión de adrenalina"
          },
          {
            "id": "B",
            "text": "Repetir atropina hasta completar 6 mg"
          },
          {
            "id": "C",
            "text": "Administrar amiodarona 300 mg endovenosa"
          },
          {
            "id": "D",
            "text": "Realizar cardioversión eléctrica sincronizada a 100 J"
          },
          {
            "id": "E",
            "text": "Derivar en ambulancia básica sin monitor"
          }
        ],
        "correcta": "A",
        "explicacion": "En una bradiarritmia inestable que no responde a la atropina (máximo 3 mg), la conducta es la estimulación eléctrica con marcapaso transcutáneo y drogas vasoactivas (adrenalina o dopamina) mientras se prepara el marcapaso transvenoso. La cardioversión y la amiodarona son para taquiarritmias.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "1.5§0 · 1.5§1 · 1.5§2 · 1.5§3 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-09",
    "classId": "cardio-09",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Arritmias y Paro Cardiorrespiratorio",
    "topicLabel": "1.9",
    "title": "Extrasístoles Ventriculares y Holter de Ritmo",
    "perfilCode": "1.01.1.011, 1.01.4.014",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Media · Palpitaciones con corazón sano: tranquilizar; benignas frente a banderas rojas; antiarrítmicos clase I contraindicados en cardiopatía; Holter de 24 horas, su informe y cuándo usar otros registros",
    "algoTitle": "Estudio y manejo de las extrasístoles ventriculares; informe del Holter",
    "contexto": "Las extrasístoles ventriculares (EV) son la causa más frecuente de palpitaciones y están presentes en más de la mitad de las personas sanas si se registran por 24 horas. En un corazón estructuralmente normal son benignas y solo requieren tranquilizar y suprimir gatillantes; en un corazón enfermo, en cambio, pueden anunciar arritmias malignas. El Holter de ritmo es el examen que el médico general debe saber pedir e interpretar: permite cuantificar cuántas extrasístoles hay, descartar taquicardia ventricular y correlacionar los síntomas con el ritmo.",
    "contentSections": [
      {
        "subhead": "1. Extrasístoles Ventriculares: Reconocimiento y Diferencia entre Benignas y de Alarma",
        "paragraphs": [
          "La <b>extrasístole ventricular (EV)</b> es un latido prematuro que nace en el ventrículo, sin onda P previa. En el ECG es un <b>complejo QRS ancho (≥ 120 ms) y prematuro</b>, de morfología distinta al latido sinusal, con onda T de sentido opuesto y una <b>pausa compensadora completa</b>. El paciente refiere «saltos» o «vuelcos» en el pecho, un latido fuerte tras la pausa o mareo breve; muchos no tienen síntomas. Se clasifican como aisladas, en <b>parejas</b>, en <b>bigeminismo</b> o <b>trigeminismo</b> (cada 2 o 3 latidos), y <b>monomorfas</b> (una sola morfología) o <b>polimorfas</b>.",
          "<b>Son benignas</b> cuando se cumplen todas estas condiciones: <b>corazón estructuralmente sano</b> (examen, ECG basal y ecocardiograma normales), EV <b>aisladas y monomorfas</b>, <b>desaparecen o disminuyen con el ejercicio</b>, sin síncope, sin antecedente familiar de muerte súbita y <b>carga baja</b> (menos de 10% de los latidos en el Holter). Suelen originarse en el <b>tracto de salida del ventrículo derecho</b> (morfología de bloqueo de rama izquierda con eje inferior). Los gatillantes son <b>cafeína, alcohol, tabaco, estimulantes y simpaticomiméticos</b>, el estrés y la privación de sueño, el <b>hipertiroidismo</b> y las alteraciones del potasio y el magnesio.",
          "<b>Banderas rojas</b> que obligan a derivar: <b>cardiopatía estructural</b> (infarto previo, miocardiopatía, FEVI deprimida, hipertrofia importante), <b>síncope</b> o presíncope, antecedente familiar de muerte súbita, EV <b>polimorfas</b>, <b>parejas o taquicardia ventricular no sostenida</b>, EV que <b>aumentan con el ejercicio</b>, fenómeno R sobre T, QT largo y una <b>carga mayor de 10 a 15%</b>, porque puede producir una miocardiopatía por extrasístoles con caída de la FEVI.",
          "<b>Estudio inicial:</b> anamnesis (fármacos, drogas, cafeína, antecedentes familiares), examen cardiovascular, <b>ECG de 12 derivaciones</b>, electrolitos (potasio, magnesio), <b>TSH</b> y <b>ecocardiograma</b> para descartar cardiopatía estructural. Se agrega un <b>Holter de 24 horas</b> para cuantificar la carga y descartar taquicardia ventricular, y una <b>prueba de esfuerzo</b> si se sospecha isquemia o si las EV aparecen con el ejercicio."
        ]
      },
      {
        "subhead": "2. Conducta Inicial y Seguimiento",
        "paragraphs": [
          "<b>EV benignas asintomáticas o poco sintomáticas: no se tratan.</b> Se <b>tranquiliza</b> al paciente explicando que el pronóstico es excelente, se suprimen los gatillantes (café, alcohol, tabaco, energizantes, descongestionantes) y se corrigen el sueño y el estrés. No se usan antiarrítmicos en los asintomáticos: tratar el número de extrasístoles no mejora la sobrevida.",
          "<b>EV muy sintomáticas:</b> el tratamiento de primera línea es un <b>betabloqueador</b> (bisoprolol, metoprolol) o un <b>calcioantagonista no dihidropiridínico</b> (verapamilo, diltiazem). Los <b>antiarrítmicos clase I (flecainida, propafenona)</b> y la amiodarona <b>no están indicados</b> en el médico general y están <b>contraindicados en cardiopatía estructural</b> (el estudio CAST mostró mayor mortalidad con flecainida tras un infarto). Se deriva a cardiología para evaluar la <b>ablación con catéter</b> si los síntomas son refractarios, si la carga es alta (> 10 a 15%) o si baja la FEVI.",
          "<b>Seguimiento:</b> el paciente con EV benignas y estudio normal se controla en forma clínica; se repite el Holter y el ecocardiograma si aparecen síntomas nuevos, síncope o si la carga era alta (control anual de FEVI). En el paciente con cardiopatía (infarto previo, FEVI baja), las EV frecuentes se manejan tratando la enfermedad de base con betabloqueador y el resto del tratamiento de la insuficiencia cardíaca, y se deriva para evaluar un desfibrilador si cumple los criterios."
        ]
      },
      {
        "subhead": "3. Holter de Ritmo: Indicaciones e Interpretación del Informe",
        "paragraphs": [
          "El <b>Holter de ritmo</b> es el registro electrocardiográfico continuo de <b>24 a 48 horas</b> (hasta 7 a 14 días con parches adhesivos), mientras el paciente hace su vida habitual y anota sus síntomas en un diario. Está indicado en <b>palpitaciones, mareo, presíncope o síncope</b> (para correlacionar el síntoma con el ritmo), para <b>cuantificar la carga de extrasístoles</b>, detectar <b>fibrilación auricular paroxística</b> en un ACV criptogénico, evaluar el <b>control de la frecuencia</b> en la FA, buscar bradiarritmias o pausas en la enfermedad del nodo sinusal (síndrome taquicardia-bradicardia) y controlar la respuesta al tratamiento antiarrítmico.",
          "<b>Cómo se emplea el informe:</b> se revisan la frecuencia cardíaca <b>mínima, media y máxima</b>, las <b>pausas</b> (más de 3 segundos es patológica en vigilia), los bloqueos AV de alto grado (Mobitz II y completo), la <b>carga de EV</b> (porcentaje de latidos totales), las parejas y los episodios de <b>taquicardia ventricular no sostenida</b>, la FA o el flutter y las taquicardias supraventriculares, y la <b>correlación con el diario de síntomas</b>. Un Holter con síntomas sin alteración del ritmo descarta arritmia como causa; las pausas sintomáticas o los bloqueos de alto grado indican <b>marcapaso</b>; la TV no sostenida con cardiopatía obliga a derivar; la carga de EV mayor de 10% orienta a ecocardiograma y derivación.",
          "<b>Limitaciones:</b> un Holter normal no descarta una arritmia si los síntomas ocurren menos de una vez al día: en ese caso se usa un <b>monitor de eventos</b> externo (semanas) o un <b>registrador implantable</b> (meses a años) en el síncope inexplicado. El Holter no sirve para el síncope de mecanismo vasovagal u ortostático, donde se usa la prueba de inclinación (<i>tilt test</i>), ni para evaluar la isquemia, que requiere prueba de esfuerzo. Para el diagnóstico de HTA en 24 horas existe otro examen, el Holter de presión (MAPA), que se revisa en el tema 5.1."
        ]
      },
      {
        "subhead": "4. Extrasístoles Supraventriculares y Cómo Distinguirlas",
        "paragraphs": [
          "La <b>extrasístole supraventricular</b> (auricular o de la unión) es un latido prematuro que nace por encima del ventrículo. En el ECG se ve como una <b>onda P prematura (P') de morfología distinta de la sinusal, seguida de un QRS estrecho</b> (parecido al sinusal) y, en general, una <b>pausa compensadora incompleta</b>, porque la extrasístole auricular reinicia el nodo sinusal. Si la extrasístole llega muy temprano, la P' puede quedar «escondida» en la onda T del latido anterior (se ve una T deformada) y a veces el impulso no conduce a los ventrículos («extrasístole bloqueada»): produce una pausa que puede confundirse con un bloqueo AV. También puede conducirse con un QRS ancho por <b>aberrancia</b> (fenómeno de Ashman, tras un ciclo largo) y simular una extrasístole ventricular.",
          "La regla práctica para el examen: <b>QRS ancho con pausa compensadora completa y sin P previa = ventricular</b>; <b>QRS estrecho con P' prematura = supraventricular</b>. Las extrasístoles supraventriculares son aún más benignas y no requieren estudio si el corazón es sano; el tratamiento es el mismo (suprimir gatillantes y, si molestan, betabloqueador). Cuando son muy frecuentes, en un adulto mayor, anticipan <b>fibrilación auricular</b> y se explora la aurícula con el ecocardiograma y el Holter. Una pausa de más de 3 segundos con síntomas, aunque sea por una extrasístole bloqueada o por enfermedad del nodo, justifica derivar."
        ]
      },
      {
        "subhead": "5. Palpitaciones y Síncope: Qué Registro Pedir Según la Frecuencia de los Síntomas",
        "paragraphs": [
          "Ante las palpitaciones, la anamnesis orienta el mecanismo: los «saltos» en reposo y que desaparecen al ejercicio son extrasístoles; el inicio y término súbito de una taquicardia regular, TPSV (Tema 1.6); las palpitaciones irregulares «sin ritmo», fibrilación auricular (Tema 1.4); las palpitaciones de esfuerzo con síncope, una arritmia ventricular o una cardiopatía obstructiva (Tema 3.5). El examen busca soplos, signos de insuficiencia cardíaca y bocio; el ECG y los exámenes básicos (potasio, magnesio, TSH, hemoglobina) se piden siempre. Un ECG normal entre las crisis no descarta una arritmia paroxística: por eso se necesita un registro prolongado.",
          "La elección del método de registro depende de <b>qué tan seguido ocurre el síntoma</b>: si es <b>diario</b>, un <b>Holter de 24 a 48 horas</b>; si ocurre cada <b>semana</b>, un <b>parche adhesivo</b> de 7 a 14 días; si es <b>mensual</b>, un <b>monitor de eventos</b> externo de hasta 30 días, que el paciente activa al sentir el síntoma; y si es <b>muy infrecuente</b> o se trata de un síncope inexplicado, un <b>registrador de eventos implantable</b> (monitoreo de meses a años). La paciente de 67 años con fibrilación auricular, tratada con atenolol y verapamilo, que presenta episodios breves de malestar, sudoración y ortostatismo, tiene sospecha de una enfermedad del nodo sinusal (síndrome de taquicardia-bradicardia): el examen para confirmarla es el <b>monitoreo electrocardiográfico de 24 horas</b>.",
          "En el <b>síncope</b> el ECG inicial es obligatorio. Son de <b>alto riesgo</b> y se hospitalizan: el síncope durante el esfuerzo o en decúbito, con palpitaciones previas, con cardiopatía estructural o insuficiencia cardíaca, con antecedente familiar de muerte súbita, o con un ECG anormal (bloqueo AV de alto grado, bloqueo bifascicular, QT largo, patrón de Brugada, preexcitación, TV no sostenida). En estos pacientes se monitoriza y se estudia con ecocardiograma, Holter y estudio electrofisiológico. El síncope vasovagal típico (con pródromos, bipedestación prolongada, calor o dolor) y el ortostático se diagnostican por la historia y, si hay dudas, con la prueba de inclinación (<i>tilt test</i>), no con el Holter."
        ]
      },
      {
        "subhead": "6. Situaciones Especiales y Errores Frecuentes",
        "paragraphs": [
          "<b>Extrasístoles frecuentes después de un infarto o con FEVI baja:</b> el pronóstico lo define la función ventricular, no el número de extrasístoles. El estudio CAST (1989) mostró que suprimirlas con flecainida o encainida tras un infarto <b>aumentaba la mortalidad</b>: por eso los antiarrítmicos de clase I están contraindicados en la cardiopatía estructural y el tratamiento es el del paciente (betabloqueador, inhibidor de la enzima convertidora, tratamiento de la insuficiencia cardíaca y revascularización) y, si cumple criterios, el desfibrilador. <b>En el embarazo</b> las extrasístoles son frecuentes y benignas; si molestan, se usa un betabloqueador cardioselectivo (metoprolol). <b>En el deportista</b> las extrasístoles que desaparecen con el ejercicio son benignas, mientras que las que aumentan con el esfuerzo o se asocian a síncope obligan a estudiar una miocardiopatía.",
          "<b>Causas secundarias a descartar antes de rotular «benigna»:</b> hipokalemia e hipomagnesemia, hipertiroidismo, intoxicación digitálica (extrasístoles ventriculares bigeminadas), anemia, hipoxemia y apnea del sueño, y fármacos o sustancias (descongestionantes, teofilina, cocaína, energizantes). Tratar la causa suele eliminar el problema. <b>Errores clásicos del examen:</b> indicar amiodarona o flecainida a un paciente con extrasístoles asintomáticas; pedir un Holter de 24 horas para un síntoma mensual; confundir el Holter de ritmo con el MAPA; y olvidar que una carga de extrasístoles mayor de 10 a 15% con caída de la FEVI es una miocardiopatía mediada por extrasístoles potencialmente reversible, que se deriva para ablación."
        ]
      },
      {
        "subhead": "7. Ejemplo Comentado: Cómo Leer un Informe de Holter",
        "paragraphs": [
          "Un informe típico incluye: duración del registro (por ejemplo 23 horas 40 minutos), <strong>frecuencia mínima, media y máxima</strong> (48, 72 y 138 lpm), <strong>pausas</strong> (la mayor, en segundos y su hora), el número de latidos totales (por ejemplo 104.000), el <strong>número y porcentaje de extrasístoles ventriculares</strong> (3.120, es decir 3% de carga), si hubo parejas, tripletas o <strong>TV no sostenida</strong>, la presencia de <strong>fibrilación auricular o flutter</strong> con su carga, las extrasístoles supraventriculares y las <strong>tablas por hora</strong>. Después, la correlación con el diario: «a las 15:20 palpitaciones: ritmo sinusal con una extrasístole ventricular».",
          "La lectura se hace en tres preguntas: 1) ¿<strong>hay una arritmia que explique los síntomas</strong>? (si el diario muestra síntomas con ritmo sinusal normal, se descarta la arritmia como causa); 2) ¿<strong>hay un hallazgo de riesgo</strong>? (pausa mayor de 3 segundos, bloqueo AV Mobitz II o completo, TV no sostenida con cardiopatía, FA paroxística, carga de extrasístoles mayor de 10 a 15%); y 3) ¿<strong>qué cambia la conducta</strong>? (marcapaso, anticoagulación, derivación para ablación, ecocardiograma). Una pausa de 2,8 segundos durante el sueño en un deportista joven es normal; la misma pausa con síncope en un adulto mayor es patológica. Un Holter con 40 latidos extrasistólicos en 24 horas es normal. Es normal que la frecuencia baje a 40 lpm durmiendo en una persona entrenada y que se registren extrasístoles ocasionales.",
          "Se piden el ecocardiograma y la ablación según la carga y la función ventricular; se repite el Holter al año si la carga es alta (para vigilar la FEVI) o ante síntomas nuevos. Como el Holter es un examen de <strong>«emplear el informe»</strong> para el médico general, lo importante no es leer el trazado minuto a minuto sino saber qué indicar, qué significan las cifras del informe y a quién derivar y con qué urgencia: el paciente con pausas sintomáticas y bloqueo de alto grado, de inmediato; el de carga de 15% con FEVI en descenso, preferente; y el de extrasístoles aisladas con corazón sano, con alta, educación y control clínico si aparecen síntomas nuevos o síncope."
        ]
      }
    ],
    "table": {
      "title": "Extrasístoles Ventriculares: Benignas vs Signos de Alarma",
      "headers": [
        "Característica",
        "Benigna",
        "Alarma (derivar)"
      ],
      "rows": [
        [
          "Corazón",
          "Estructuralmente sano; ECG y ecocardiograma normales",
          "Infarto previo, miocardiopatía, FEVI deprimida"
        ],
        [
          "Morfología y patrón",
          "Aislada y monomorfa",
          "Polimorfa, parejas, TV no sostenida, R sobre T"
        ],
        [
          "Con el ejercicio",
          "Desaparece o disminuye",
          "Aumenta"
        ],
        [
          "Síntomas y antecedentes",
          "Palpitaciones aisladas",
          "Síncope o historia familiar de muerte súbita"
        ],
        [
          "Carga en el Holter",
          "Menos de 10%",
          "Más de 10 a 15%: riesgo de miocardiopatía por EV"
        ],
        [
          "Conducta",
          "Tranquilizar y suprimir gatillantes; betabloqueador si molestan",
          "Estudio y derivación; evitar antiarrítmicos clase I"
        ]
      ]
    },
    "severityTable": {
      "title": "Holter de Ritmo: Hallazgo del Informe y Conducta",
      "headers": [
        "Hallazgo",
        "Interpretación",
        "Conducta"
      ],
      "rows": [
        [
          "Pausas > 3 s o bloqueo AV Mobitz II o completo",
          "Bradiarritmia significativa",
          "Derivar para marcapaso"
        ],
        [
          "Síntomas sin alteración del ritmo",
          "La arritmia no explica el síntoma",
          "Buscar otra causa; descartar con tilt test si es presíncope postural"
        ],
        [
          "Carga de EV > 10 a 15%",
          "Riesgo de miocardiopatía por EV",
          "Ecocardiograma y derivar para ablación"
        ],
        [
          "TV no sostenida con cardiopatía",
          "Riesgo de muerte súbita",
          "Derivar a cardiología"
        ],
        [
          "FA paroxística",
          "Riesgo embólico",
          "Calcular CHA₂DS₂-VASc y anticoagular si corresponde"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Manejo Escalonado de las Extrasístoles Ventriculares",
      "headers": [
        "Escalón",
        "Medida",
        "Clave de Examen"
      ],
      "rows": [
        [
          "1",
          "Estudio: ECG, electrolitos, TSH, ecocardiograma, Holter",
          "Descartar cardiopatía estructural"
        ],
        [
          "2",
          "Tranquilizar y suprimir cafeína, alcohol, tabaco y estimulantes",
          "La mayoría no requiere fármacos"
        ],
        [
          "3",
          "Betabloqueador o verapamilo/diltiazem si son sintomáticas",
          "Primera línea farmacológica"
        ],
        [
          "4",
          "Derivar para ablación si carga alta o síntomas refractarios",
          "Evita la miocardiopatía por EV"
        ],
        [
          "No usar",
          "Flecainida, propafenona o amiodarona en el consultorio",
          "Contraindicados en cardiopatía estructural (CAST)"
        ]
      ]
    },
    "vignette": "Mujer de 34 años, sana, consulta por 2 meses de «saltos» en el pecho en reposo, sobre todo después de tomar varios cafés al día y con poco sueño, que desaparecen al subir escaleras. Sin síncope ni antecedentes familiares de muerte súbita. Examen físico normal con latidos prematuros ocasionales. El ECG muestra extrasístoles ventriculares aisladas con morfología de bloqueo de rama izquierda y eje inferior. El ecocardiograma y la TSH son normales. El Holter de 24 horas registra 3% de latidos extrasistólicos monomorfos, sin parejas ni taquicardia ventricular.",
    "explicacion": "Son <b>extrasístoles ventriculares benignas</b> del tracto de salida del ventrículo derecho: corazón sano, aisladas, monomorfas, con baja carga (3%) y que desaparecen con el ejercicio. La conducta es <b>tranquilizar</b>, suprimir la cafeína y mejorar el sueño, y control clínico. Si fueran muy molestas se podría usar un betabloqueador. No requieren antiarrítmicos ni ablación; se reevalúa si aparecen síncope, síntomas nuevos o aumenta la carga por sobre 10 a 15%.",
    "keyPoints": [
      "EV: QRS ancho prematuro, sin onda P y con pausa compensadora completa.",
      "Benignas: corazón sano, aisladas, monomorfas, desaparecen con el ejercicio y carga < 10% en el Holter.",
      "Banderas rojas: cardiopatía estructural, síncope, antecedente familiar de muerte súbita, polimorfas, parejas o TVNS, aumentan con el ejercicio.",
      "Tratamiento: tranquilizar, suprimir gatillantes; betabloqueador o verapamilo si molestan; no antiarrítmicos clase I.",
      "Carga de EV > 10 a 15% puede causar miocardiopatía: ecocardiograma y derivar para ablación.",
      "Holter 24 h: palpitaciones, presíncope o síncope, cuantificar EV, FA paroxística y pausas; informe: FC, pausas, carga, TVNS, correlación con síntomas.",
      "Síntomas infrecuentes: monitor de eventos o registrador implantable, no un Holter de 24 horas."
    ],
    "questions": [
      {
        "stem": "Un hombre de 35 años, sin antecedentes, consulta por sensación de 'saltos' en el pecho en reposo, que desaparecen al hacer ejercicio. Examen físico normal. El ECG muestra extrasístoles ventriculares aisladas, monomorfas, sin otras alteraciones. El ecocardiograma es normal y el Holter muestra 2% de extrasístoles ventriculares aisladas, sin taquicardia ventricular. ¿Cuál es la conducta más adecuada?",
        "recTag": "Banco Oficial AEE",
        "options": [
          {
            "id": "A",
            "text": "Tranquilizar, reducir cafeína y alcohol, y control clínico"
          },
          {
            "id": "B",
            "text": "Amiodarona oral"
          },
          {
            "id": "C",
            "text": "Derivar para ablación urgente"
          },
          {
            "id": "D",
            "text": "Implantar un desfibrilador"
          },
          {
            "id": "E",
            "text": "Iniciar flecainida"
          }
        ],
        "correcta": "A",
        "explicacion": "Extrasístoles ventriculares aisladas y monomorfas que desaparecen con el ejercicio, con corazón estructuralmente normal y baja carga en el Holter, son benignas: basta educar y suprimir gatillantes. Si son muy molestas, se usa un betabloqueador. Amiodarona o flecainida no están indicadas y son proarrítmicas."
      },
      {
        "stem": "Una paciente de 67 años, con antecedente de hipertensión arterial y fibrilación auricular, en tratamiento con atenolol, verapamilo y acenocumarol, consulta porque presenta repetidos episodios de malestar, sudoración y ortostatismo, que duran algunos segundos y revierten espontáneamente. Al examen físico destaca frecuencia cardiaca de 60 lpm, irregular y presión arterial 110/70 mmHg. Su examen cardiopulmonar es normal. ¿Cuál es el examen más adecuado para confirmar la sospecha diagnóstica?",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 7",
        "options": [
          {
            "id": "A",
            "text": "Test de esfuerzo"
          },
          {
            "id": "B",
            "text": "Ecocardiograma"
          },
          {
            "id": "C",
            "text": "Ecografía doppler de extremidades inferiores"
          },
          {
            "id": "D",
            "text": "Tilt test"
          },
          {
            "id": "E",
            "text": "Monitoreo electrocardiográfico de 24 horas"
          }
        ],
        "correcta": "E",
        "explicacion": "La sospecha es una enfermedad del nodo sinusal, en contexto de un síndrome taquicardia/bradicardia (FA + ENS)."
      },
      {
        "stem": "Una mujer de 58 años se hizo un Holter de 24 horas por palpitaciones. El informe muestra 22% de latidos extrasistólicos ventriculares monomorfos, sin taquicardia ventricular. Hace un año su ecocardiograma era normal; hoy la FEVI es 40%. ¿Cuál es la conducta más adecuada?",
        "recTag": "Banco Oficial AEE",
        "options": [
          {
            "id": "A",
            "text": "Tranquilizar y repetir el Holter en 5 años"
          },
          {
            "id": "B",
            "text": "Derivar a cardiología para evaluar ablación de las extrasístoles"
          },
          {
            "id": "C",
            "text": "Iniciar flecainida en el consultorio"
          },
          {
            "id": "D",
            "text": "Indicar tilt test"
          },
          {
            "id": "E",
            "text": "Solicitar un MAPA de 24 horas"
          }
        ],
        "correcta": "B",
        "explicacion": "Una carga de extrasístoles ventriculares mayor de 10 a 15% con caída de la FEVI configura una miocardiopatía mediada por extrasístoles, potencialmente reversible. Corresponde derivar a cardiología para ablación con catéter, con betabloqueador mientras tanto. Los antiarrítmicos clase I no se inician en el consultorio."
      },
      {
        "stem": "Un hombre de 62 años con infarto previo y FEVI 35% consulta por palpitaciones. El ECG muestra extrasístoles ventriculares frecuentes y parejas. ¿Qué fármaco está contraindicado para suprimirlas?",
        "recTag": "Banco Oficial AEE",
        "options": [
          {
            "id": "A",
            "text": "Bisoprolol"
          },
          {
            "id": "B",
            "text": "Metoprolol succinato"
          },
          {
            "id": "C",
            "text": "Flecainida"
          },
          {
            "id": "D",
            "text": "Carvedilol"
          },
          {
            "id": "E",
            "text": "Optimización del tratamiento de la insuficiencia cardíaca"
          }
        ],
        "correcta": "C",
        "explicacion": "En cardiopatía estructural (infarto previo, FEVI baja) los antiarrítmicos clase I como la flecainida aumentan la mortalidad (estudio CAST). El manejo es el betabloqueador y el tratamiento de la insuficiencia cardíaca, con derivación para evaluar un desfibrilador."
      }
    ],
    "_origen": "1.6§0 · 1.6§1 · 1.6§2 (completado al estándar, oct-2026)",
    "_estado": "estandar",
    "svg": null,
    "diagram": {
      "title": "Extrasístoles Ventriculares: Estudio, Benignas frente a Banderas Rojas y Uso del Holter",
      "svg": "<svg viewBox=\"0 0 620 470\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar09\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar09)}\n  </style>\n  <rect class=\"b\" x=\"80\" y=\"6\" width=\"460\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">Palpitaciones («saltos», «vuelcos»): anamnesis y examen</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Fármacos, cafeína, alcohol, drogas · síncope · antecedentes familiares de muerte súbita</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"b\" x=\"80\" y=\"58\" width=\"460\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"74\" text-anchor=\"middle\" font-weight=\"700\">ECG de 12 derivaciones + estudio básico</text>\n  <text class=\"sub\" x=\"310\" y=\"86\" text-anchor=\"middle\">K, Mg, TSH, hemograma · ecocardiograma (¿corazón estructuralmente sano?)</text>\n  <path class=\"ln\" d=\"M310,96 V110\"/>\n  <rect class=\"dec\" x=\"60\" y=\"110\" width=\"500\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"127\" text-anchor=\"middle\" font-weight=\"700\">Holter de ritmo 24-48 h con diario de síntomas</text>\n  <text class=\"sub\" x=\"310\" y=\"139\" text-anchor=\"middle\">Carga de EV (% de latidos), parejas, TV no sostenida, pausas, FA, correlación con los síntomas</text>\n  <path class=\"ln\" d=\"M310,150 V166 H158 V178\"/>\n  <path class=\"ln\" d=\"M310,166 H462 V178\"/>\n  <text class=\"lbl\" x=\"150\" y=\"162\" text-anchor=\"end\">EV benignas</text>\n  <text class=\"lbl\" x=\"470\" y=\"162\" text-anchor=\"start\">Banderas rojas</text>\n  <rect class=\"b\" x=\"12\" y=\"178\" width=\"292\" height=\"78\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"202\" text-anchor=\"middle\" font-weight=\"700\">Aisladas, monomorfas, carga &lt; 10%</text>\n  <text class=\"sub\" x=\"158\" y=\"214\" text-anchor=\"middle\">Desaparecen con el ejercicio · sin síncope ni familiares</text>\n  <text class=\"sub\" x=\"158\" y=\"226\" text-anchor=\"middle\">TRANQUILIZAR · suprimir cafeína, alcohol, tabaco</text>\n  <text class=\"sub\" x=\"158\" y=\"238\" text-anchor=\"middle\">Muy sintomáticas: betabloqueador o verapamilo</text>\n  <rect class=\"warn\" x=\"316\" y=\"178\" width=\"292\" height=\"78\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"202\" text-anchor=\"middle\" font-weight=\"700\">Cardiopatía, síncope, polimorfas, parejas/TVNS</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"214\" text-anchor=\"middle\">Aumentan con el ejercicio · carga &gt; 10-15% · FEVI baja</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"226\" text-anchor=\"middle\">DERIVAR · ablación si refractarias</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"238\" text-anchor=\"middle\">NO flecainida ni propafenona en el consultorio</text>\n  <path class=\"ln\" d=\"M310,256 V272\"/>\n  <rect class=\"dec\" x=\"60\" y=\"272\" width=\"500\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"289\" text-anchor=\"middle\" font-weight=\"700\">Si el síntoma es infrecuente (&lt; 1 vez al día)</text>\n  <text class=\"sub\" x=\"310\" y=\"301\" text-anchor=\"middle\">Monitor de eventos (semanas) · registrador implantable (meses-años)</text>\n  <path class=\"ln\" d=\"M310,312 V328\"/>\n  <rect class=\"acc\" x=\"60\" y=\"328\" width=\"500\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"344\" text-anchor=\"middle\" font-weight=\"700\">Informe del Holter: qué cambia la conducta</text>\n  <text class=\"accS\" x=\"310\" y=\"356\" text-anchor=\"middle\">Pausas &gt; 3 s o BAV Mobitz II / completo → marcapaso</text>\n  <text class=\"accS\" x=\"310\" y=\"368\" text-anchor=\"middle\">TVNS con cardiopatía → derivar · FA paroxística → CHA₂DS₂-VASc</text>\n  <text class=\"lbl\" x=\"60\" y=\"400\" text-anchor=\"start\">El Holter de ritmo (ECG 24 h) no es el MAPA (presión 24 h, Tema 5.1) ni el tilt test (síncope vasovagal).</text>\n  <text class=\"lbl\" x=\"60\" y=\"414\" text-anchor=\"start\">Síntomas sin alteración del ritmo en el Holter = la arritmia no los explica.</text>\n\n</svg>"
    }
  }
];

module.exports = { bloque1 };
