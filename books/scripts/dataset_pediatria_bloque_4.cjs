/**
 * TOMO 18: PEDIATRÍA GENERAL & NEONATOLOGÍA · BLOQUE 4
 * Neonatología & Sala de Partos (18.15 a 18.22)
 */

const { flowPediatria } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "ped-15",
    "classId": "ped-15",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Neonatología & Sala de Partos",
    "topicLabel": "18.15",
    "title": "Atención Inmediata del Recién Nacido & Reanimación Neonatal: Algoritmo AAP/AHA, Minuto de Oro y Test de APGAR",
    "perfilCode": "2.01.3.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Garantía de atención integral del parto y del recién nacido en maternidades públicas y privadas.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#18) · EUNACOM Julio 2023 (Q#2) · EUNACOM Diciembre 2022 (Q#102)",
    "frecuencia": "Máxima rentabilidad · Pregunta obligada de evaluación de frecuencia cardíaca, ventilación a presión positiva (VPP) y puntaje de APGAR",
    "svg": null,
    "algoTitle": "Algoritmo de Reanimación Neonatal en Sala de Partos (AHA / AAP / MINSAL 2026)",
    "diagramRows": [
      {
        "t": "Nacimiento: 3 Preguntas Iniciales Inmediatas",
        "s": "¿Es a término? ¿Tiene buen tono muscular? ¿Respira o llora vigorosamente?",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Evaluación Inicial en los Primeros Segundos",
        "al": "Decisión de Contacto Piel a Piel vs Cuna de Calor",
        "ll": "SÍ a las 3 Preguntas (Vigoroso)",
        "left": {
          "t": "Apego Oportuno y Contacto Piel a Piel",
          "s": "Sobre el pecho materno · Secar, abrigar, vía aérea permeable, inicio precoz de lactancia",
          "type": "acc"
        },
        "rl": "NO a alguna Pregunta (No Vigoroso)",
        "right": {
          "t": "Traslado Inmediato a Cuna Radiante",
          "s": "Calor, secar y retirar paño húmedo, posición de olfateo, aspirar solo si hay secreciones obstructivas",
          "type": "warn"
        }
      },
      {
        "t": "El 'Minuto de Oro': Evaluación de FC y Respiración a los 60 Segundos",
        "s": "Si FC < 100 lpm o apnea / respiración boqueante (gasping) -> Iniciar Ventilación a Presión Positiva (VPP)",
        "type": "crit"
      },
      {
        "k": "split",
        "q": "Respuesta a la VPP a los 30 Segundos",
        "al": "Evaluación tras 30 segundos de VPP eficaz",
        "ll": "FC > 100 lpm y respira",
        "left": {
          "t": "Estabilización y Cuidados Post-Reanimación",
          "s": "Retiro progresivo de VPP · Monitoreo continuo de SatO2 con sensor preductal derecho",
          "type": "acc"
        },
        "rl": "FC < 60 lpm pese a VPP eficaz",
        "right": {
          "t": "Masaje Cardíaco + O2 al 100% (Relación 3:1)",
          "s": "Compresiones con técnica de dos pulgares · Si persiste FC < 60 lpm: Adrenalina EV 0.02 mg/kg por vena umbilical",
          "type": "crit"
        }
      }
    ],
    "contexto": "La atención inmediata del recién nacido en sala de partos exige una toma de decisiones estandarizada en segundos. Aproximadamente el 10% de los recién nacidos requiere alguna ayuda para iniciar la respiración y solo el 1% requiere maniobras de reanimación avanzada. El 'Minuto de Oro' (los primeros 60 segundos) determina el pronóstico neurológico a largo plazo. El médico general debe dominar el algoritmo AAP/AHA, la técnica de ventilación a presión positiva (la intervención más eficaz y determinante), el cálculo del Score de APGAR y la indicación estricta de masaje y fármacos.",
    "contentSections": [
      {
        "subhead": "1. Evaluación Inicial y las Tres Preguntas Cardinales",
        "paragraphs": [
          "Al momento del desprendimiento completo del feto, se formulan tres preguntas simultáneas:",
          "1) <strong>¿Es una gestación a término (≥ 37 semanas)?</strong>",
          "2) <strong>¿Tiene buen tono muscular (flexión activa de extremidades)?</strong>",
          "3) <strong>¿Respira o llora vigorosamente?</strong>",
          "• <strong>Si las 3 respuestas son SÍ:</strong> El recién nacido NO debe ser separado de su madre. Se coloca en <strong>contacto piel a piel precoz e inmediato</strong> sobre el abdomen o tórax materno, se seca con paño precalentado, se cubre con gorro y manta, se mantiene la vía aérea permeable y se fomenta el acople espontáneo a la lactancia en la primera hora de vida.",
          "• <strong>Si alguna respuesta es NO:</strong> Se traslada de inmediato a una <strong>cuna de calor radiante</strong> para iniciar los <strong>Pasos Iniciales de Reanimación</strong> (en menos de 30 segundos):",
          "  1) Proporcionar calor y mantener normotermia (36.5 - 37.5°C).",
          "  2) Posicionar la cabeza en ligera extensión ('posición de olfateo') para abrir la vía aérea.",
          "  3) Despejar la vía aérea: <strong>aspirar secreciones SOLO si están obstruyendo la respiración o si requiere VPP</strong> (primero boca y luego nariz; ¡no aspirar de rutina!).",
          "  4) Secar y retirar inmediatamente el paño húmedo.",
          "  5) Estimular suavemente frotando la espalda o las plantas de los pies."
        ]
      },
      {
        "subhead": "2. El Minuto de Oro y la Ventilación a Presión Positiva (VPP)",
        "paragraphs": [
          "A los 60 segundos de vida (El Minuto de Oro), se evalúan dos parámetros fisiológicos vitales: <strong>Frecuencia Cardíaca (FC)</strong> (mediante auscultación precordial durante 6 segundos x 10) y <strong>Esfuerzo Respiratorio</strong>:",
          "• Si el RN presenta <strong>FC < 100 latidos por minuto, apnea o respiración boqueante (gasping)</strong>:",
          "  - <strong>INICIAR INMEDIATAMENTE VENTILACIÓN A PRESIÓN POSITIVA (VPP)</strong> con bolsa autoinflable o reanimador en T (Neopuff).",
          "  - <strong>Concentración inicial de Oxígeno (FiO2):</strong>",
          "    • <strong>RN ≥ 35 semanas:</strong> Iniciar VPP con <strong>aire ambiental (FiO2 21%)</strong>. ¡Está formalmente contraindicado iniciar con O2 al 100% en recién nacidos de término por toxicidad por radicales libres!",
          "    • <strong>RN < 35 semanas:</strong> Iniciar VPP con FiO2 al 21-30%.",
          "  - <strong>Frecuencia de ventilación:</strong> 40 a 60 respiraciones por minuto (ritmo mnemotécnico: <em>'Ventilo - dos - tres - Ventilo'</em>).",
          "  - Instalar sensor de oximetría de pulso en la <strong>mano o muñeca derecha (sitio preductal)</strong>.",
          "• Si tras 15 segundos de VPP la FC no aumenta y el tórax no se expande, realizar los pasos de corrección de la ventilación <strong>MR. SOPA</strong>: <strong>M</strong>áscara (ajustar), <strong>R</strong>eposicionar cabeza, <strong>S</strong>ucción de secreciones, <strong>O</strong>pen mouth (abrir boca), <strong>P</strong>resión (aumentar PIP), <strong>A</strong>lternativa de vía aérea (intubación o máscara laríngea)."
        ]
      },
      {
        "subhead": "3. Masaje Cardíaco, Intubación Orotraqueal y Drogas",
        "paragraphs": [
          "• <strong>Masaje Cardíaco:</strong> Está indicado <strong>ÚNICAMENTE si la Frecuencia Cardíaca persiste < 60 lpm tras al menos 30 segundos de VPP EFECTIVA</strong> que logre expandir el tórax (habitualmente tras intubación traqueal).",
          "  - <strong>Técnica de elección:</strong> <strong>Técnica de los dos pulgares</strong> sobre el tercio inferior del esternón (inmediatamente por debajo de la línea intermamilar), abrazando el tórax con las manos.",
          "  - <strong>Relación Compresión - Ventilación:</strong> <strong>3 compresiones por 1 ventilación (3:1)</strong>, completando 90 compresiones y 30 ventilaciones por minuto (120 eventos/minuto).",
          "  - Al iniciar masaje, <strong>subir la concentración de oxígeno (FiO2) al 100%</strong>.",
          "• <strong>Adrenalina:</strong> Indicada si tras 60 segundos de masaje cardíaco coordinado con VPP al 100% la FC se mantiene < 60 lpm. Vía de elección: <strong>Catéter venoso umbilical</strong>. Dosis EV: <strong>0.01 a 0.03 mg/kg</strong> (0.1 a 0.3 mL/kg de solución 1:10.000).",
          "• <strong>Líquido Amniótico con Meconio:</strong> La norma actual establece que si el recién nacido nace con meconio pero está <strong>vigoroso</strong> (buen tono, respira), se mantiene con la madre en apego. Si nace <strong>no vigoroso (deprimido)</strong>, se traslada a cuna radiante y se inicia VPP de inmediato; <strong>ya no se realiza intubación y aspiración traqueal de rutina antes de ventilar</strong>."
        ]
      },
      {
        "subhead": "4. Test de APGAR: Evaluación y Significado Pronóstico",
        "paragraphs": [
          "El <strong>Score de APGAR</strong> se evalúa al <strong>minuto 1 y a los 5 minutos</strong> de vida (y cada 5 minutos hasta los 20 min si el puntaje a los 5 min es < 7):",
          "• Evalúa 5 parámetros (0, 1 o 2 puntos cada uno):",
          "  1) <strong>Apariencia (Color):</strong> Cianosis generalizada/palidez (0); Cuerpo rosado, extremidades cianóticas (acrocianosis) (1); Completamente rosado (2).",
          "  2) <strong>Pulso (Frecuencia cardíaca):</strong> Ausente (0); < 100 lpm (1); ≥ 100 lpm (2).",
          "  3) <strong>Gesticulación (Reflejos/Irritabilidad):</strong> Sin respuesta (0); Mueca / llanto débil (1); Llanto vigoroso, tos o estornudo al estimular (2).",
          "  4) <strong>Actividad (Tono muscular):</strong> Flácido (0); Cierta flexión de extremidades (1); Movimientos activos y flexión vigorosa (2).",
          "  5) <strong>Respiración:</strong> Ausente (0); Lenta, irregular o quejido (1); Llanto vigoroso y regular (2).",
          "• <strong>Puntaje:</strong> 7 a 10 = Normal (vigoroso); 4 a 6 = Depresión moderada; 0 a 3 = Depresión severa.",
          "• <em>Regla de Oro EUNACOM:</em> <strong>El test de APGAR NO se utiliza para decidir cuándo iniciar la reanimación neonatal</strong> (la reanimación se inicia al minuto de oro guiada por FC y respiración sin esperar el APGAR del minuto 1). El APGAR de los 5 minutos tiene valor pronóstico sobre respuesta a la reanimación y riesgo neurológico."
        ]
      }
    ],
    "table": {
      "title": "Evaluación del Test de APGAR en el Recién Nacido (Minutos 1 y 5)",
      "headers": [
        "Signo Clínico",
        "0 Puntos",
        "1 Punto",
        "2 Puntos"
      ],
      "rows": [
        [
          "A - Apariencia (Color)",
          "Cianosis central o palidez",
          "Cuerpo rosado, acrocianosis",
          "Completamente rosado"
        ],
        [
          "P - Pulso (Frecuencia Cardíaca)",
          "Ausente",
          "< 100 latidos por minuto",
          "≥ 100 latidos por minuto"
        ],
        [
          "G - Gesticulación (Reflejos)",
          "Sin respuesta al estímulo",
          "Mueca / llanto débil",
          "Llanto vigoroso, tos o estornudo"
        ],
        [
          "A - Actividad (Tono Muscular)",
          "Flácido, sin movimiento",
          "Cierta flexión de extremidades",
          "Movimientos activos, tono firme"
        ],
        [
          "R - Respiración",
          "Ausente (apnea)",
          "Lenta, irregular, débil",
          "Buena, llanto vigoroso y regular"
        ]
      ]
    },
    "severityTable": {
      "title": "Metas de Saturación de Oxígeno Preductal en los Primeros 10 Minutos de Vida (AHA / AAP)",
      "headers": [
        "Minuto de Vida Postnatal",
        "Rango de Saturación Preductal Aceptable",
        "Sensor de Oximetría",
        "Conducta ante Hipoxemia Fisiológica"
      ],
      "rows": [
        [
          "1 minuto",
          "60% a 65%",
          "Muñeca / Mano DERECHA",
          "La hipoxemia inicial es fisiológica (no sobreoxigenar)"
        ],
        [
          "2 minutos",
          "65% a 70%",
          "Mano derecha exclusiva",
          "El cierre del ductus arterioso es progresivo"
        ],
        [
          "3 minutos",
          "70% a 75%",
          "Preductal derecho",
          "Aumentar FiO2 solo si está por debajo del rango"
        ],
        [
          "4 minutos",
          "75% a 80%",
          "Preductal derecho",
          "Titular oxígeno con mezclador (blender)"
        ],
        [
          "5 minutos",
          "80% a 85%",
          "Preductal derecho",
          "Meta al 5.° minuto es ≥ 80-85%"
        ],
        [
          "10 minutos",
          "85% a 95%",
          "Preductal derecho",
          "A partir de los 10 minutos la saturación normal es > 90%"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Secuencia Terapéutica Escalonada en Reanimación Neonatal Avanzada",
      "headers": [
        "Fase / Tiempo",
        "Condición del Neonato",
        "Intervención Específica",
        "Parámetros Clave"
      ],
      "rows": [
        [
          "0 a 30 segundos",
          "No vigoroso al nacer",
          "Pasos iniciales en cuna radiante",
          "Calor, secar, posición olfateo, aspirar SOS"
        ],
        [
          "30 a 60 segundos",
          "FC < 100 lpm o Apnea / Gasping",
          "Ventilación a Presión Positiva (VPP)",
          "FiO2 21% (≥35 sem) · 40-60 ventilaciones/min"
        ],
        [
          "60 a 90 segundos",
          "Tórax no expande adecuadamente",
          "Pasos correctivos MR. SOPA",
          "Máscara, Reposición, Succión, Open, Presión, Vía aérea"
        ],
        [
          "Tras VPP eficaz",
          "FC < 60 lpm pese a 30s de VPP",
          "Masaje Cardíaco (Técnica 2 pulgares) + FiO2 100%",
          "Relación 3 compresiones : 1 ventilación"
        ],
        [
          "Persistencia FC < 60",
          "Tras 60 segundos de masaje + VPP",
          "Adrenalina por Catéter Venoso Umbilical",
          "0.01 a 0.03 mg/kg EV (dilución 1:10.000)"
        ]
      ]
    },
    "vignette": "Parto eutócico vaginal de una primigesta de 39 semanas de gestación. El recién nacido nace con llanto débil y tono flácido. Se traslada de inmediato a la cuna de calor radiante: se seca rápidamente retirando el paño húmedo, se posiciona la cabeza en olfateo y se estimula suavemente en la espalda. Al evaluar al minuto de vida: el recién nacido continúa en apnea, no llora y la auscultación cardíaca revela una frecuencia cardíaca de 72 latidos por minuto.",
    "explicacion": "Al término de los primeros 60 segundos de vida (el 'Minuto de Oro'), el recién nacido presenta apnea y frecuencia cardíaca menor a 100 latidos por minuto (72 lpm). La conducta médica obligatoria e inmediata según el algoritmo internacional de reanimación neonatal (AHA/AAP/MINSAL) es iniciar de inmediato Ventilación a Presión Positiva (VPP) con bolsa y máscara conectada a aire ambiental (FiO2 21% por ser de 39 semanas), a una frecuencia de 40 a 60 ventilaciones por minuto. El masaje cardíaco NO está indicado en este momento, ya que solo se inicia si la FC es < 60 lpm después de haber administrado al menos 30 segundos de ventilación a presión positiva efectiva.",
    "keyPoints": [
      "Tres preguntas iniciales: ¿A término? ¿Buen tono? ¿Respira o llora? Si todas sí: contacto piel a piel inmediato.",
      "Si FC < 100 lpm o apnea a los 60 segundos: iniciar Ventilación a Presión Positiva (VPP) de inmediato.",
      "En recién nacidos ≥ 35 semanas, la VPP se inicia con AIRE AMBIENTAL (FiO2 21%), NUNCA con O2 al 100%.",
      "El sensor de oximetría de pulso debe colocarse siempre en la mano o muñeca DERECHA (saturación preductal).",
      "El masaje cardíaco solo se inicia si la FC es < 60 lpm pese a 30 segundos de VPP efectiva con tubo traqueal.",
      "Técnica de masaje: dos pulgares en el tercio inferior del esternón con relación 3 compresiones por 1 ventilación (3:1).",
      "El test de APGAR se calcula al 1.° y 5.° minuto, pero NUNCA se espera para decidir iniciar la reanimación."
    ],
    "questions": [
      {
        "stem": "Un recién nacido de 39 semanas nace tras un parto vaginal sin incidentes. Al nacer no llora y se encuentra hipotónico. Es llevado a la cuna de calor radiante donde se seca y se estimula durante 30 segundos. Al cumplir 1 minuto de vida se constata que continúa sin esfuerzo respiratorio y su frecuencia cardíaca auscultada es de 76 lpm. ¿Cuál es la conducta inmediata que debe realizar el equipo médico?",
        "options": [
          {
            "id": "A",
            "text": "Iniciar compresiones torácicas externas con técnica de los dos pulgares en relación 3:1"
          },
          {
            "id": "B",
            "text": "Iniciar Ventilación a Presión Positiva (VPP) con bolsa y mascarilla conectada a aire ambiental (FiO2 21%)"
          },
          {
            "id": "C",
            "text": "Administrar un bolo de Adrenalina endovenosa a través de la vena umbilical"
          },
          {
            "id": "D",
            "text": "Administrar oxígeno libre en flujo continuo al 100% frente a la cara del recién nacido"
          },
          {
            "id": "E",
            "text": "Calcular el Score de APGAR del primer minuto y esperar al minuto 5 para intervenir"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El masaje cardíaco solo se indica si la frecuencia cardíaca persiste < 60 lpm tras al menos 30 segundos de ventilación a presión positiva efectiva.\nB) Correcta. El algoritmo universal de reanimación neonatal (AHA/AAP/MINSAL) establece que si al minuto de vida el neonato presenta apnea o FC < 100 lpm, la intervención cardinal y más determinante es iniciar de inmediato Ventilación a Presión Positiva (VPP). En recién nacidos de término (≥ 35 semanas), la ventilación debe iniciarse obligatoriamente con aire ambiental (FiO2 21%), monitorizando la saturación preductal.\nC) Incorrecta. La adrenalina se reserva para FC < 60 lpm tras masaje y ventilación.\nD) Incorrecta. El oxígeno libre continuo no resuelve la apnea ni expande los alvéolos.\nE) Incorrecta. Las maniobras de reanimación nunca se postergan para calcular el APGAR.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.3.001"
      },
      {
        "stem": "Al evaluar a un recién nacido de término al minuto de vida se constata: cuerpo rosado con manos y pies cianóticos, frecuencia cardíaca auscultada de 120 latidos por minuto, llanto enérgico y vigoroso al aspirarle la boca, flexión activa de extremidades con buen tono muscular y respiración regular espontánea. ¿Cuál es el puntaje de APGAR correspondiente a este paciente?",
        "options": [
          {
            "id": "A",
            "text": "10 puntos"
          },
          {
            "id": "B",
            "text": "9 puntos"
          },
          {
            "id": "C",
            "text": "8 puntos"
          },
          {
            "id": "D",
            "text": "7 puntos"
          },
          {
            "id": "E",
            "text": "6 puntos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Requiere estar completamente rosado sin acrocianosis.\nB) Correcta. El desglose del APGAR al minuto 1 es: 1) Color: cuerpo rosado con acrocianosis distal = 1 punto; 2) Frecuencia cardíaca: 120 lpm (>100) = 2 puntos; 3) Reflejos/Gesticulación: llanto vigoroso al estímulo = 2 puntos; 4) Tono muscular: flexión activa y buen tono = 2 puntos; 5) Respiración: llanto regular y enérgico = 2 puntos. Total = 1 + 2 + 2 + 2 + 2 = 9 puntos. Es el puntaje más común en un recién nacido sano vigoroso (la acrocianosis es fisiológica en los primeros minutos).\nC) Incorrecta. Suma 9 puntos.\nD) Incorrecta. Suma 9 puntos.\nE) Incorrecta. Corresponde a un RN vigoroso.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.3.001"
      },
      {
        "stem": "Durante la reanimación de un recién nacido que nació en paro respiratorio, se administraron 30 segundos de ventilación a presión positiva (VPP) efectiva con intubación endotraqueal que expande adecuadamente ambos hemitórax. Sin embargo, en la reevaluación su frecuencia cardíaca auscultada es de 48 latidos por minuto. ¿Cuál es el siguiente paso protocolizado?",
        "options": [
          {
            "id": "A",
            "text": "Continuar con VPP exclusiva durante 10 minutos más a FiO2 21%"
          },
          {
            "id": "B",
            "text": "Iniciar masaje cardíaco externo coordinado con la ventilación en relación 3:1 y aumentar la FiO2 al 100%"
          },
          {
            "id": "C",
            "text": "Administrar bicarbonato de sodio en bolo rápido por vía periférica"
          },
          {
            "id": "D",
            "text": "Desfibrilar a 2 Joules/kg con paletas pediátricas"
          },
          {
            "id": "E",
            "text": "Extubar y pasar a máscara de ventilación libre"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Con FC < 60 lpm tras VPP efectiva, continuar solo con ventilación es insuficiente y el niño entrará en asistolía.\nB) Correcta. Si tras al menos 30 segundos de VPP efectiva con adecuada expansión torácica la frecuencia cardíaca persiste por debajo de 60 lpm, la indicación inmediata es iniciar Masaje Cardíaco coordinado con la ventilación a una relación de 3 compresiones por 1 ventilación (3:1), aumentando simultáneamente la concentración de oxígeno (FiO2) al 100%.\nC) Incorrecta. El bicarbonato de sodio está desaconsejado en reanimación neonatal aguda porque genera acidosis intracelular por CO2.\nD) Incorrecta. La bradicardia neonatal es por hipoxia asfíctica, no por fibrilación ventricular.\nE) Incorrecta. La vía aérea avanzada debe mantenerse.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.3.001"
      },
      {
        "stem": "¿Por qué motivo el sensor de oximetría de pulso debe colocarse estrictamente en la mano o muñeca DERECHA durante la reanimación en sala de partos?",
        "options": [
          {
            "id": "A",
            "text": "Porque las arterias de la mano izquierda son anatómicamente más estrechas"
          },
          {
            "id": "B",
            "text": "Porque mide la saturación preductal, reflejando fielmente la oxigenación que reciben el cerebro y el miocardio"
          },
          {
            "id": "C",
            "text": "Porque en los pies la oximetría es siempre 100% idéntica a la sangre fetal"
          },
          {
            "id": "D",
            "text": "Para evitar interferencias con el cateterismo de la vena umbilical"
          },
          {
            "id": "E",
            "text": "Por convención aleatoria sin fundamento hemodinámico"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. No hay diferencia anatómica de calibre.\nB) Correcta. El tronco braquiocefálico (que da origen a la arteria subclavia derecha que irriga el miembro superior derecho) emerge de la aorta antes de la desembocadura del ductus arterioso. Por lo tanto, la mano derecha recibe sangre con saturación preductal, la misma que irriga las arterias coronarias y las carótidas que van al cerebro. En cambio, las extremidades inferiores y la mano izquierda pueden recibir sangre postductal mezclada con sangre desoxigenada proveniente del ventrículo derecho a través del ductus arterioso de derecha a izquierda.\nC) Incorrecta. En los pies la saturación es postductal y suele ser menor.\nD) Incorrecta. No interfiere con el ombligo.\nE) Incorrecta. Tiene un fundamento hemodinámico embriológico crítico.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.3.001"
      }
    ]
  },
  {
    "id": "ped-16",
    "classId": "ped-16",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Neonatología & Sala de Partos",
    "topicLabel": "18.16",
    "title": "Evaluación de la Edad Gestacional (Capurro/Ballard) & Clasificación Ponderal Neonatal",
    "perfilCode": "2.01.1.128",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N° 1): Retinopatía del prematuro · (GES N° 2): Displasia broncopulmonar del prematuro.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#5) · EUNACOM Julio 2022 (Q#10)",
    "frecuencia": "Alta rentabilidad · Clasificación cruzada por edad gestacional y percentil de peso (PEG, AEG, GEG)",
    "svg": null,
    "algoTitle": "Matriz de Clasificación Neonatal según Edad Gestacional y Curva de Crecimiento Intrauterino",
    "diagramRows": [
      {
        "t": "Recién Nacido en Examen Físico de Maternidad",
        "s": "Determinación de Edad Gestacional (FUR confiable / Eco precoz / Capurro) y Peso al nacer",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Clasificación según Edad Gestacional (Semanas)",
        "al": "Estratificación por Edad Gestacional",
        "ll": "Pretérmino (< 37 semanas)",
        "left": {
          "t": "Recién Nacido Pretérmino (Prematuro)",
          "s": "< 28 sem: Extremo · 28-31+6: Muy prematuro · 32-33+6: Moderado · 34-36+6: Tardío",
          "type": "warn"
        },
        "rl": "Término (37 a 41+6 semanas)",
        "right": {
          "t": "Recién Nacido de Término / Postérmino",
          "s": "37 a 41 semanas + 6 días: Término · ≥ 42 semanas: Postérmino",
          "type": "acc"
        }
      },
      {
        "t": "Clasificación Ponderal según Curvas Intrauterinas (Alarcón-Pittaluga)",
        "s": "Pequeño para EG (PEG): < P10 · Adecuado para EG (AEG): P10 a P90 · Grande para EG (GEG): > P90",
        "type": "dec"
      },
      {
        "t": "Vigilancia de Complicaciones según Categoría",
        "s": "PEG: Hipoglicemia, policitemia, hipotermia · GEG: Hipoglicemia (hiperinsulinismo), trauma obstétrico, asfixia",
        "type": "crit"
      }
    ],
    "contexto": "La categorización precisa del recién nacido combinando su edad gestacional y su peso al nacer permite anticipar patologías neonatales específicas. En Chile se utilizan las curvas de crecimiento intrauterino de Alarcón-Pittaluga. El médico general debe calcular la edad gestacional somática mediante el método de Capurro o New Ballard, clasificar al recién nacido en la matriz cruzada (término/pretérmino y PEG/AEG/GEG) y monitorizar precozmente la glicemia en los grupos de riesgo.",
    "contentSections": [
      {
        "subhead": "1. Clasificación según Edad Gestacional",
        "paragraphs": [
          "La edad gestacional (EG) se define en semanas cumplidas desde el primer día de la última menstruación (FUM confiable) o confirmada por ecografía del primer trimestre (LCN entre 7 y 14 semanas, con margen de error de ± 3-5 días):",
          "• <strong>Pretérmino (Prematuro):</strong> Nacido <strong>antes de las 37 semanas completas</strong> (< 259 días):",
          "  - Prematuro extremo: < 28 semanas.",
          "  - Muy prematuro: 28 a 31 semanas + 6 días.",
          "  - Prematuro moderado: 32 a 33 semanas + 6 días.",
          "  - Prematuro tardío: 34 a 36 semanas + 6 días (representan el 70% de la prematurez y tienen mayor riesgo de hipotermia, dificultad respiratoria e hiperbilirrubinemia).",
          "• <strong>Término:</strong> Nacido entre las <strong>37 semanas y las 41 semanas + 6 días</strong> (259 a 293 días).",
          "• <strong>Postérmino:</strong> Nacido a las <strong>42 semanas o más</strong> (≥ 294 días) (riesgo de insuficiencia placentaria, líquido meconial y macrosomía)."
        ]
      },
      {
        "subhead": "2. Métodos de Estimación Física: Capurro y Ballard",
        "paragraphs": [
          "Cuando la FUM es desconocida o no confiable y no hay ecografía precoz:",
          "• <strong>Método de Capurro B (Somático):</strong> Se utiliza en recién nacidos de 29 semanas o más. Evalúa <strong>5 signos físicos</strong>:",
          "  1) Forma de la oreja (incurvación del pabellón auricular).",
          "  2) Tamaño de la glándula mamaria (nódulo palpable en mm).",
          "  3) Formación del pezón (diámetro y areola).",
          "  4) Textura de la piel (desde muy fina y gelatinosa hasta gruesa apergaminada con grietas).",
          "  5) Pliegues plantares (surcos en la planta del pie).",
          "  - <em>Cálculo:</em> <strong>Edad Gestacional = (Suma de puntos + 204) / 7</strong>.",
          "• <strong>Método de Ballard Modificado (New Ballard):</strong> Evalúa 6 signos físicos somáticos y 6 signos neuromusculares (postura, ventana cuadrada, retroceso de brazos, ángulo poplíteo, signo de la bufanda y talón a oreja). Es el método de elección en <strong>prematuros extremos (< 28-30 semanas)</strong>."
        ]
      },
      {
        "subhead": "3. Clasificación Ponderal y Riesgos Clínicos Específicos",
        "paragraphs": [
          "Al cruzar el peso de nacimiento con la edad gestacional en las curvas de Alarcón-Pittaluga:",
          "• <strong>Pequeño para la Edad Gestacional (PEG):</strong> Peso al nacer <strong>< Percentil 10</strong> para su EG.",
          "  - <em>Riesgos clínicos cardinales:</em> <strong>Hipoglicemia</strong> (por escasa reserva de glucógeno hepático), <strong>hipotermia</strong> (escasez de grasa parda), <strong>policitemia / hiperviscosidad</strong> (por hipoxia intrauterina crónica con aumento de eritropoyetina) y hemorragia pulmonar.",
          "• <strong>Adecuado para la Edad Gestacional (AEG):</strong> Peso al nacer entre <strong>Percentil 10 y Percentil 90</strong>.",
          "• <strong>Grande para la Edad Gestacional (GEG):</strong> Peso al nacer <strong>> Percentil 90</strong> para su EG.",
          "  - <em>Riesgos clínicos cardinales:</em> <strong>Hipoglicemia precoz sintomática</strong> (por hiperinsulinismo fetal e hipertrofia de islotes pancreáticos, clásico de hijos de madre diabética), <strong>trauma obstétrico</strong> (distocia de hombros, parálisis braquial obstétrica, fractura de clavícula), policitemia y asfixia perinatal."
        ]
      }
    ],
    "table": {
      "title": "Matriz de Clasificación Neonatal según Edad Gestacional y Percentil de Peso",
      "headers": [
        "Categoría",
        "Edad Gestacional (Semanas)",
        "Percentil de Peso Intrauterino",
        "Complicaciones Más Frecuentes"
      ],
      "rows": [
        [
          "Pretérmino PEG",
          "< 37 semanas",
          "< P10",
          "Membrana hialina, hipoglicemia severa, hipotermia, enterocolitis"
        ],
        [
          "Pretérmino AEG",
          "< 37 semanas",
          "P10 a P90",
          "Dificultad respiratoria (EMH), ictericia, apneas"
        ],
        [
          "Pretérmino GEG",
          "< 37 semanas",
          "> P90",
          "Hijo de madre diabética, hipoglicemia por hiperinsulinismo"
        ],
        [
          "Término PEG",
          "37 a 41+6 semanas",
          "< P10",
          "Hipoglicemia por falta de depósitos, poliglobulia"
        ],
        [
          "Término AEG",
          "37 a 41+6 semanas",
          "P10 a P90",
          "Bajo riesgo neonatal general · Alojamiento conjunto"
        ],
        [
          "Término GEG",
          "37 a 41+6 semanas",
          "> P90",
          "Distocia de hombros, fractura clavicular, hipoglicemia"
        ],
        [
          "Postérmino",
          "≥ 42 semanas",
          "Cualquier percentil",
          "Aspiración meconial (SAM), oligohidramnios, piel descamada"
        ]
      ]
    },
    "vignette": "Recién nacido de parto por cesárea a las 38 semanas de gestación por sospecha de restricción de crecimiento intrauterino. Al nacer presenta examen físico vigoroso, llanto inmediato y buen tono. En la antropometría de sala de partos se registra: peso al nacer 2.150 g, longitud 46 cm y perímetro cefálico 32 cm. Al contrastar con la curva de Alarcón-Pittaluga, el peso se ubica bajo el percentil 10 (P3) para las 38 semanas.",
    "explicacion": "El paciente nació a las 38 semanas de gestación (rango entre 37 y 41+6 semanas), por lo que se clasifica como Recién Nacido de Término. Su peso de 2.150 g se sitúa bajo el percentil 10 para su edad gestacional en las curvas de crecimiento intrauterino, lo que define la condición de Pequeño para la Edad Gestacional (PEG). Por lo tanto, su clasificación definitiva es Recién Nacido de Término PEG. Los pacientes PEG tienen alto riesgo de hipoglicemia neonatal por agotamiento rápido de depósitos de glucógeno, hipotermia y policitemia, por lo que requieren control seriado de hemoglucotest preprandial e inicio precoz de alimentación.",
    "keyPoints": [
      "Término: 37 a 41 semanas + 6 días; Pretérmino: < 37 semanas; Postérmino: ≥ 42 semanas.",
      "Percentiles de peso: PEG < P10; AEG P10-P90; GEG > P90.",
      "El test de Capurro evalúa 5 parámetros somáticos en ≥ 29 semanas: EG = (puntaje + 204) / 7.",
      "El test de New Ballard evalúa parámetros somáticos y neuromusculares en prematuros extremos.",
      "Complicaciones clásicas de PEG: Hipoglicemia (falta de reservas), hipotermia y policitemia.",
      "Complicaciones clásicas de GEG: Hipoglicemia (hiperinsulinismo en hijos de madre diabética) y distocia de hombros.",
      "Los prematuros tardíos (34 a 36 semanas) tienen mayor morbimortalidad que los de término."
    ],
    "questions": [
      {
        "stem": "Un recién nacido de sexo masculino nace por parto vaginal a las 35 semanas de gestación con un peso de nacimiento de 2.850 gramos. En las curvas de crecimiento intrauterino nacionales, este peso se sitúa en el percentil 92 para las 35 semanas. ¿Cuál es la clasificación correcta del paciente?",
        "options": [
          {
            "id": "A",
            "text": "Recién nacido de término PEG"
          },
          {
            "id": "B",
            "text": "Recién nacido de término AEG"
          },
          {
            "id": "C",
            "text": "Recién nacido pretérmino GEG"
          },
          {
            "id": "D",
            "text": "Recién nacido pretérmino AEG"
          },
          {
            "id": "E",
            "text": "Recién nacido postérmino GEG"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Nació a las 35 semanas, lo que es pretérmino, no término.\nB) Incorrecta. No es de término ni AEG.\nC) Correcta. La edad gestacional es de 35 semanas, lo que corresponde a Pretérmino (< 37 semanas). Su peso de nacimiento (2.850 g) se sitúa sobre el percentil 90 (> P90) para las 35 semanas, lo que corresponde a Grande para la Edad Gestacional (GEG). Por tanto, la clasificación cruzada correcta es Recién Nacido Pretérmino GEG.\nD) Incorrecta. El percentil 92 está sobre el percentil 90, lo que define GEG, no AEG.\nE) Incorrecta. Postérmino es ≥ 42 semanas.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.128"
      },
      {
        "stem": "¿Cuál es la complicación metabólica más frecuente y de mayor riesgo que debe monitorizarse de forma protocolizada y precoz en un recién nacido clasificado como Pequeño para la Edad Gestacional (PEG)?",
        "options": [
          {
            "id": "A",
            "text": "Hiperglicemia cetósica"
          },
          {
            "id": "B",
            "text": "Hipoglicemia asintomática o sintomática por escasa reserva de glucógeno hepático"
          },
          {
            "id": "C",
            "text": "Hipernatremia severa por deshidratación"
          },
          {
            "id": "D",
            "text": "Hipocalcemia tardía por hipoparatiroidismo"
          },
          {
            "id": "E",
            "text": "Hiperpotasemia con arritmias ventriculares"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Desarrollan hipoglicemia, no hiperglicemia.\nB) Correcta. Los recién nacidos pequeños para la edad gestacional (PEG) presentan un volumen hepático reducido y reservas mínimas de glucógeno y tejido adiposo debido a la insuficiencia placentaria crónica. Al nacer y suspenderse el flujo continuo de glucosa materna, agotan rápidamente sus depósitos energéticos en las primeras 2 a 4 horas de vida, teniendo un riesgo muy elevado de hipoglicemia (< 45 mg/dL), lo que obliga a monitorización con hemoglucotest seriado y alimentación precoz.\nC) Incorrecta. No es una complicación característica temprana de los PEG.\nD) Incorrecta. La hipocalcemia precoz se asocia a asfixia y prematurez.\nE) Incorrecta. No es típica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.128"
      }
    ]
  },
  {
    "id": "ped-17",
    "classId": "ped-17",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Neonatología & Sala de Partos",
    "topicLabel": "18.17",
    "title": "Ictericia Neonatal: Fisiológica vs Patológica (< 24 h), Incompatibilidad ABO/Rh, Curvas Bhutani y Fototerapia",
    "perfilCode": "2.01.1.121",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Cubierto por guía clínica MINSAL de Ictericia e Hiperbilirrubinemia Neonatal.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#14) · EUNACOM Julio 2023 (Q#16) · EUNACOM Diciembre 2021 (Q#18)",
    "frecuencia": "Máxima rentabilidad · Patología neonatal más preguntada en el EUNACOM (diferenciación <24h vs >24h y nomograma de Bhutani)",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Manejo de la Hiperbilirrubinemia Neonatal según Horas de Vida (Bhutani)",
    "diagramRows": [
      {
        "t": "Recién Nacido con Ictericia Visible (Progresión Céfalo-Caudal de Kramer)",
        "s": "Evaluar zona de Kramer: 1 (cabeza ~5mg/dL) a 5 (palmas/plantas >15mg/dL) y horas de vida",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Momento de Aparición de la Ictericia",
        "al": "Estratificación Cronológica de Ictericia",
        "ll": "Aparición < 24 Horas de Vida",
        "left": {
          "t": "ICTERICIA PATOLÓGICA (Emergencia)",
          "s": "Siempre es hemolítica hasta demostrar lo contrario: Incompatibilidad Rh o ABO · Coombs directo, Hemograma, Bilirrubinemia urgente",
          "type": "crit"
        },
        "rl": "Aparición ≥ 24 Horas (Día 2 a 5)",
        "right": {
          "t": "Ictericia Fisiológica vs Deshidratación",
          "s": "Fisiológica (pico 3-5 días): BI < 12-15 mg/dL · Ictericia por lactancia inadecuada (baja de peso >10%)",
          "type": "warn"
        }
      },
      {
        "t": "Interpolar Bilirrubina Total en Nomograma de Bhutani (por Horas de Vida)",
        "s": "Zona Bajo Riesgo -> Observación · Zona Intermedia -> Control · Zona Alto Riesgo -> Fototerapia LED Continua",
        "type": "dec"
      },
      {
        "t": "Criterios de Exanguinotransfusión Inmediata",
        "s": "Falla de fototerapia intensiva o Bilirrubina Total ≥ 20-25 mg/dL o signos precoces de encefalopatía aguda / kernicterus",
        "type": "crit"
      }
    ],
    "contexto": "La ictericia neonatal por hiperbilirrubinemia indirecta (no conjugada) afecta a más del 60% de los recién nacidos de término y 80% de los prematuros. La complicación devastadora irreversible es la Encefalopatía Bilirrubínica Crónica o Kernicterus (impregnación de los ganglios basales y núcleos auditivos con parálisis cerebral coreoatetoide e hipoacusia neurosensorial). El médico debe memorizar la regla de oro: toda ictericia que aparece en las primeras 24 horas de vida es PATOLÓGICA y HEMOLÍTICA, e interpretar los niveles en el Nomograma de Bhutani según las horas exactas de vida.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología: Ictericia Fisiológica vs Patológica",
        "paragraphs": [
          "El feto requiere un hematocrito alto (vida media de hematíes reducida a 70-90 días) y al nacer se produce una sobrecarga de bilirrubina indirecta no conjugada, sumada a la inmadurez transitoria de la enzima hepática <strong>Glucuroniltransferasa (UGT1A1)</strong> y un aumento de la circulación enterohepática por la enzima beta-glucuronidasa intestinal.",
          "• <strong>Criterios de Ictericia Fisiológica (Benigna):</strong>",
          "  1) Aparece <strong>DESPUÉS de las 24 horas de vida</strong> (típicamente entre el 2.° y 3.er día).",
          "  2) Pico máximo al 3.°-5.° día en el recién nacido de término (habitualmente < 12-13 mg/dL) y remite hacia el día 7-10.",
          "  3) Aumento de bilirrubina < 5 mg/dL al día (o < 0.2 mg/dL/hora).",
          "  4) Bilirrubina conjugada (directa) normal (< 1 mg/dL o < 20% del total).",
          "  5) Recién nacido asintomático, activo, con heces coloreadas y orina clara.",
          "• <strong>Criterios de Ictericia Patológica (Alarma Absoluta):</strong>",
          "  1) <strong>Aparición en las primeras 24 horas de vida</strong> (criterio patognomónico de hemólisis).",
          "  2) Incremento rápido de bilirrubina > 5 mg/dL/día (> 0.5 mg/dL/hora).",
          "  3) Bilirrubina total > 15 mg/dL en recién nacido de término sin fototerapia.",
          "  4) <strong>Colestasia:</strong> Bilirrubina directa > 1 mg/dL (si BT < 5) o > 20% de la total.",
          "  5) Duración prolongada más allá de los 14 días en el RN de término (> 21 días en prematuro)."
        ]
      },
      {
        "subhead": "2. Incompatibilidad Sanguínea: Grupo Clásico (ABO) vs Factor Rh",
        "paragraphs": [
          "• <strong>Incompatibilidad de Grupo Clásico (ABO):</strong>",
          "  - Ocurre casi exclusivamente cuando la <strong>Madre es Grupo O y el Recién Nacido es Grupo A o B</strong>.",
          "  - <em>Fisiopatología:</em> La madre grupo O posee anticuerpos naturales de isotipo <strong>IgG anti-A y anti-B</strong> que atraviesan la placenta. Puede presentarse en el <strong>primer embarazo</strong> (sin sensibilización previa).",
          "  - <em>Clínica:</em> Es la causa más frecuente de ictericia hemolítica pero su curso suele ser leve a moderado. Test de Coombs directo suele ser débilmente positivo (+ o ++) o incluso falsamente negativo.",
          "• <strong>Incompatibilidad por Factor Rh (Aloinmunización RhD):</strong>",
          "  - Madre <strong>Rh negativo (d/d) y Recién Nacido Rh positivo (D/d)</strong>.",
          "  - Requiere sensibilización previa (parto, aborto o hemorragia feto-materna previa). No afecta al primer hijo salvo falta de profilaxis anti-D.",
          "  - <em>Clínica:</em> Cuadro <strong>severo, fulminante y potencialmente mortal</strong>. Ictericia precoz (< 24h), anemia hemolítica severa, hepatoesplenomegalia y riesgo de <em>Hydrops fetalis</em> (falla cardíaca anasarca fetal). Coombs directo francamente positivo (++++)."
        ]
      },
      {
        "subhead": "3. Ictericia por Leche Materna vs por Falta de Lactancia (Deshidratación)",
        "paragraphs": [
          "• <strong>Ictericia por Inadecuada Técnica de Lactancia (Lactancia Materna Ineficaz / Precoz):</strong>",
          "  - Ocurre en la primera semana (días 2 a 5). El recién nacido recibe escasa leche, se deshidrata (pérdida > 10% del peso), orina poco y disminuye las deposiciones, lo que <strong>aumenta la recirculación enterohepática de bilirrubina</strong>.",
          "  - Manejo: Corregir la técnica de acople, aumentar la frecuencia de tomas a 8-12 veces al día y suplementar con leche extraída o fórmula si deshidratación moderada. <strong>NO suspender la lactancia</strong>.",
          "• <strong>Ictericia por Leche Materna (Síndrome de Arias / Tardía):</strong>",
          "  - Comienza al final de la primera semana (días 5 a 7), con pico en la segunda o tercera semana de vida (semanas 2 a 4).",
          "  - Producida por factores presentes en la leche materna (beta-glucuronidasa, ácidos grasos libres y pregnandiol) que inhiben la conjugación.",
          "  - El lactante está en <strong>excelente estado general, sube de peso vigorosamente</strong> y tiene examen normal. Es un cuadro totalmente benigno que remite espontáneamente en 1 a 3 meses. <strong>NO se debe suspender la lactancia materna</strong>."
        ]
      },
      {
        "subhead": "4. Tratamiento: Fototerapia y Exanguinotransfusión",
        "paragraphs": [
          "• <strong>Fototerapia (Luz Azul LED, longitud de onda 460-490 nm):</strong>",
          "  - Mecanismo: Fotoisomerización estructural convirtiendo la bilirrubina indirecta no polar en <strong>lumirrubina</strong> (isómero hidrosoluble no tóxico que se excreta por bilis y orina sin necesidad de conjugación hepática).",
          "  - Se indica según el <strong>Nomograma de Bhutani</strong> contrastando la bilirrubina sérica total con las horas exactas de vida y factores de riesgo neurotóxico (hemólisis, asfixia, prematurez).",
          "  - Cuidados: Protección ocular con antifaz opaco y pañal mínimo para máxima superficie corporal expuesta.",
          "• <strong>Exanguinotransfusión Total:</strong>",
          "  - Recambio de dos volemias del recién nacido (2 x 80 mL/kg = 160 mL/kg) a través de la vena umbilical.",
          "  - Remueve hematíes sensibilizados con anticuerpos, elimina bilirrubina sérica y corrige la anemia.",
          "  - Indicada ante falla de fototerapia intensiva o niveles en zona de exanguinotransfusión según curvas (habitualmente BT ≥ 20-25 mg/dL) o <strong>cualquier signo precoz de encefalopatía aguda</strong> (letargia, hipotonía, llanto agudo estridente, opistótonos)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de las Principales Causas de Ictericia Neonatal",
      "headers": [
        "Entidad Clínica",
        "Momento de Inicio",
        "Pico Máximo",
        "Mecanismo Patogénico",
        "Conducta Médica"
      ],
      "rows": [
        [
          "Ictericia Hemolítica (ABO/Rh)",
          "< 24 horas de vida",
          "Primeras 24-48 horas",
          "Destrucción de hematíes mediada por anticuerpos",
          "Fototerapia inmediata ± IgEV o Exanguinotransfusión"
        ],
        [
          "Ictericia Fisiológica",
          "> 24 horas (días 2-3)",
          "Días 3 a 5 (7-10 en preter)",
          "Inmadurez de glucuroniltransferasa + hematocrito alto",
          "Observación / Fototerapia solo si supera curvas"
        ],
        [
          "Ictericia por Falta de Lactancia",
          "Días 2 a 5",
          "Día 4 a 6",
          "Deshidratación + aumento de circulación enterohepática",
          "Optimizar técnica de lactancia · Corregir peso"
        ],
        [
          "Ictericia por Leche Materna",
          "Días 5 a 7 (Tardía)",
          "Semanas 2 a 3",
          "Factores de la leche que inhiben conjugación",
          "Tranquilizar a los padres · Mantener lactancia"
        ],
        [
          "Atresia de Vías Biliares",
          "> 2 semanas (persistente)",
          "Progresivo",
          "Colestasia obstructiva (Bilirrubina Directa > 20%)",
          "Acolia, coluria · Derivar urgente a Cirugía (Kasai)"
        ]
      ]
    },
    "severityTable": {
      "title": "Nomograma de Bhutani y Zonas de Riesgo de Hiperbilirrubinemia en RNT",
      "headers": [
        "Horas de Vida Postnatal",
        "Zona de Bajo Riesgo",
        "Zona Intermedia",
        "Zona de Alto Riesgo (Fototerapia)"
      ],
      "rows": [
        [
          "24 horas",
          "< 5.0 mg/dL",
          "5.0 a 8.0 mg/dL",
          "> 8.0 mg/dL (Sospecha hemólisis)"
        ],
        [
          "48 horas",
          "< 8.5 mg/dL",
          "8.5 a 13.0 mg/dL",
          "> 13.0 mg/dL (Evaluar fototerapia)"
        ],
        [
          "72 horas",
          "< 11.0 mg/dL",
          "11.0 a 15.5 mg/dL",
          "> 15.5 mg/dL (Indicar fototerapia)"
        ],
        [
          "96 horas (4 días)",
          "< 12.5 mg/dL",
          "12.5 a 17.0 mg/dL",
          "> 17.0 mg/dL (Fototerapia intensiva)"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Intervenciones Terapéuticas Específicas en Hiperbilirrubinemia Neonatal",
      "headers": [
        "Modalidad Terapéutica",
        "Mecanismo de Acción",
        "Indicaciones Principales",
        "Efectos Adversos / Monitoreo"
      ],
      "rows": [
        [
          "Fototerapia LED Continua",
          "Fotoisomerización a lumirrubina excretable",
          "Bilirrubina sobre curva de Bhutani",
          "Deshidratación insensible, diarrea, rash, bronceado"
        ],
        [
          "Inmunoglobulina Humana EV",
          "Bloquea receptores Fc de macrófagos",
          "Incompatibilidad Rh o ABO con hemólisis refractaria",
          "Dosis: 0.5 a 1 g/kg EV en 2 horas · Reduce exanguino"
        ],
        [
          "Exanguinotransfusión Total",
          "Recambio de 2 volemias (160 mL/kg)",
          "BT ≥ 20-25 mg/dL o Kernicterus inminente",
          "Arritmias, hipocalcemia, trombocitopenia, embolia"
        ],
        [
          "Lactancia Frecuente",
          "Aumenta motilidad intestinal y vaciamiento",
          "Ictericia fisiológica y por lactancia materna",
          "Control de peso diario y diuresis"
        ]
      ]
    },
    "vignette": "Recién nacido de 16 horas de vida, nacido de término vigoroso por parto vaginal sin incidentes. La matrona alerta al médico porque nota ictericia marcada en la cara, tronco y abdomen (Kramer zona 3). La madre es primigesta, grupo O Rh positivo; el recién nacido es grupo A Rh positivo. La bilirrubina total tomada de urgencia arroja 9.2 mg/dL con bilirrubina directa de 0.4 mg/dL. El hematocrito es de 44% (límite bajo para la edad).",
    "explicacion": "Una ictericia de aparición evidente a las 16 horas de vida (< 24 horas) es por definición una ICTERICIA PATOLÓGICA y HEMOLÍTICA hasta demostrar lo contrario. En este caso, la combinación de madre grupo O y recién nacido grupo A confirma la sospecha de incompatibilidad de grupo clásico (ABO). A las 16 horas de vida, una bilirrubina de 9.2 mg/dL se ubica claramente en la zona de alto riesgo del nomograma de Bhutani. La conducta médica inmediata e ineludible es iniciar Fototerapia Continua en sala de cuidados intermedios/neonatología, solicitar prueba de Coombs directo, hemograma con recuento de reticulocitos y controlar la cinética de bilirrubina cada 4 a 6 horas.",
    "keyPoints": [
      "Toda ictericia que aparece en las primeras 24 horas de vida es PATOLÓGICA y de origen HEMOLÍTICO.",
      "La incompatibilidad ABO ocurre en madres grupo O con hijos grupo A o B (puede ocurrir en el 1.er embarazo).",
      "La incompatibilidad Rh ocurre en madres Rh(-) con hijos Rh(+) y es mucho más severa.",
      "La ictericia fisiológica aparece después de las 24 horas (pico al 3.°-5.° día) y resuelve al día 7-10.",
      "La ictericia por leche materna (Arias) aparece al final de la 1.ª semana, el niño sube de peso y NO se suspende la lactancia.",
      "La fototerapia actúa mediante fotoisomerización transformando la bilirrubina en lumirrubina hidrosoluble.",
      "La presencia de colestasia (bilirrubina directa > 20% con heces acólicas) obliga a descartar Atresia de Vías Biliares."
    ],
    "questions": [
      {
        "stem": "Un recién nacido de 18 horas de vida presenta ictericia marcada que compromete cara, tórax y abdomen. La madre es grupo O Rh(+) y el niño es grupo B Rh(+). El examen de laboratorio informa: Bilirrubina Total de 9.5 mg/dL y Bilirrubina Directa de 0.5 mg/dL. ¿Cuál es el diagnóstico más probable y la conducta inicial?",
        "options": [
          {
            "id": "A",
            "text": "Ictericia fisiológica; enviar a domicilio con lactancia a libre demanda y control en 7 días"
          },
          {
            "id": "B",
            "text": "Incompatibilidad de grupo clásico ABO; hospitalizar de inmediato para iniciar fototerapia continua y solicitar Coombs directo"
          },
          {
            "id": "C",
            "text": "Ictericia por leche materna; suspender la lactancia materna por 48 horas y alimentar con fórmula"
          },
          {
            "id": "D",
            "text": "Atresia de vías biliares congénita; derivar a cirugía pediátrica de urgencia"
          },
          {
            "id": "E",
            "text": "Sepsis neonatal precoz; iniciar vancomicina más meropenem de entrada"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La ictericia en las primeras 24 horas de vida NUNCA es fisiológica.\nB) Correcta. La ictericia que se inicia antes de las 24 horas de vida (< 24h) es patológica y mandatoria de estudio hemolítico. La presencia de madre grupo O e hijo grupo B orienta fuertemente a Incompatibilidad por Grupo Clásico (ABO). Con una bilirrubinemia de 9.5 mg/dL a las 18 horas de vida (zona de alto riesgo de Bhutani), la conducta oficial es hospitalizar en neonatología, iniciar fototerapia continua, solicitar Coombs directo, hemograma, frotis y reticulocitos, y monitorizar la velocidad de ascenso.\nC) Incorrecta. La ictericia por leche materna aparece después del 5.° día y no en las primeras 24h.\nD) Incorrecta. La atresia biliar produce ictericia colestásica con bilirrubina directa elevada y acolia después de las 2 semanas.\nE) Incorrecta. No tiene clínica séptica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.121"
      },
      {
        "stem": "Un recién nacido de término de 3 días de vida (72 horas) presenta ictericia hasta el abdomen (zona 3 de Kramer). Está activo, se alimenta exclusivamente al pecho con buena succión, orina claro y sus deposiciones son de transición amarillentas. Su madre es A(+) y el niño es A(+). La bilirrubina total es de 11.2 mg/dL con bilirrubina directa de 0.6 mg/dL. Al graficar en el nomograma de Bhutani, el valor se ubica en la zona de bajo riesgo. ¿Cuál es la conducta?",
        "options": [
          {
            "id": "A",
            "text": "Exanguinotransfusión inmediata"
          },
          {
            "id": "B",
            "text": "Ingreso a fototerapia intensiva"
          },
          {
            "id": "C",
            "text": "Manejo como ictericia fisiológica, reforzar la lactancia materna y dar de alta con control ambulatorio a las 48 horas"
          },
          {
            "id": "D",
            "text": "Suspender el pecho materno de forma definitiva"
          },
          {
            "id": "E",
            "text": "Indicar fenobarbital oral para inducir la glucuroniltransferasa"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Totalmente desproporcionado.\nB) Incorrecta. Con 11.2 mg/dL a las 72 horas en zona de bajo riesgo de Bhutani, la fototerapia no está indicada.\nC) Correcta. La ictericia apareció después de las 24 horas, alcanza un valor de 11.2 mg/dL a predominio indirecto en el día 3 (pico fisiológico) en un niño asintomático sin incompatibilidad de grupo ni de Rh, y se sitúa en la zona de bajo riesgo del nomograma. Corresponde a Ictericia Fisiológica. La conducta adecuada es reforzar la frecuencia de la lactancia materna, educar a los padres sobre signos de alarma (acolia, coluria, letargia) y citar a control ambulatorio en 48 horas.\nD) Incorrecta. La lactancia materna debe promoverse y mantenerse.\nE) Incorrecta. El fenobarbital ya no se utiliza en ictericia neonatal.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.121"
      },
      {
        "stem": "¿Cuál es el mecanismo biofísico y bioquímico mediante el cual la Fototerapia con luz azul (longitud de onda 460-490 nm) reduce los niveles séricos de bilirrubina indirecta en el recién nacido?",
        "options": [
          {
            "id": "A",
            "text": "Acelera la maduración de la glucuroniltransferasa hepática"
          },
          {
            "id": "B",
            "text": "Provoca fotoisomerización estructural de la bilirrubina indirecta no polar transformándola en lumirrubina hidrosoluble que se excreta sin conjugación"
          },
          {
            "id": "C",
            "text": "Destruye los hematíes circulantes que contienen hemoglobina fetal"
          },
          {
            "id": "D",
            "text": "Inhibe la absorción intestinal de lípidos y quilomicrones"
          },
          {
            "id": "E",
            "text": "Bloquea los receptores Fc de los macrófagos esplénicos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La fototerapia no induce enzimas genómicas hepáticas (eso lo hacía el fenobarbital).\nB) Correcta. La luz azul de alta intensidad absorbida por la piel penetra los capilares dérmicos y convierte la bilirrubina no conjugada (isómero 4Z,15Z hidrófobo) mediante una reacción fotoquímica irreversible en lumirrubina (isómero estructural hidrosoluble), la cual puede filtrarse y excretarse directamente por la orina y la bilis sin requerir el paso limitante de la conjugación hepática por la glucuroniltransferasa.\nC) Incorrecta. No destruye hematíes.\nD) Incorrecta. No actúa en la absorción lipídica.\nE) Incorrecta. Ese es el mecanismo de la Inmunoglobulina endovenosa.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.121"
      },
      {
        "stem": "Un lactante de 20 días de vida es traído a control sano. La madre refiere que lo nota amarillo desde la primera semana de vida. Al examen físico destaca ictericia en cara y tronco, pero la madre agrega que los pañales de orina son oscuros 'como té cargado' (coluria) y las deposiciones han sido blanquecinas como masilla (acolia) en los últimos días. La bilirrubinemia total es de 8.5 mg/dL con bilirrubina directa de 5.2 mg/dL. ¿Cuál es el diagnóstico de sospecha más urgente?",
        "options": [
          {
            "id": "A",
            "text": "Ictericia fisiológica prolongada"
          },
          {
            "id": "B",
            "text": "Ictericia por leche materna benigna"
          },
          {
            "id": "C",
            "text": "Atresia de Vías Biliares Extrahepática"
          },
          {
            "id": "D",
            "text": "Incompatibilidad de grupo ABO tardía"
          },
          {
            "id": "E",
            "text": "Síndrome de Gilbert del lactante"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La ictericia fisiológica nunca dura más de 14 días ni cursa con bilirrubina directa elevada o acolia.\nB) Incorrecta. La ictericia por leche materna es exclusivamente a expensas de bilirrubina indirecta con deposiciones coloreadas normales y orina clara.\nC) Correcta. Todo recién nacido con ictericia persistente más allá de las 2 semanas de vida con elevación de la Bilirrubina Directa (> 1 mg/dL o > 20% de la total), acompañada de acolia (heces blancas) y coluria, presenta un Síndrome Colestásico Neonatal. La causa más frecuente y una urgencia quirúrgica absoluta es la Atresia de Vías Biliares Extrahepática. Debe derivarse de inmediato a centro terciario para ecografía, cintigrafía y cirugía de hepatoportoenterostomía (Cirugía de Kasai) antes de los 60 días de vida para evitar la cirrosis biliar terminal.\nD) Incorrecta. La incompatibilidad ABO es indirecta y no produce acolia.\nE) Incorrecta. Gilbert es hiperbilirrubinemia indirecta leve en adolescentes.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.121"
      }
    ]
  },
  {
    "id": "ped-18",
    "classId": "ped-18",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Neonatología & Sala de Partos",
    "topicLabel": "18.18",
    "title": "Dificultad Respiratoria Neonatal: EMH (Déficit de Surfactante) vs TTNR (Pulmón Húmedo) vs SAM",
    "perfilCode": "2.01.1.126",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES N° 1 y N° 2): Atención del prematuro extremo · Síndrome de Dificultad Respiratoria en el recién nacido.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#2) · EUNACOM Julio 2023 (Q#12) · EUNACOM Diciembre 2022 (Q#1)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico diferencial radiológico y clínico entre EMH, TTNR y SAM",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico Diferencial de la Dificultad Respiratoria Aguda del Neonato",
    "diagramRows": [
      {
        "t": "Recién Nacido con Dificultad Respiratoria Precoz (Silverman-Andersen > 0)",
        "s": "Evaluar: Quejido espiratorio, aleteo nasal, tiraje intercostal, retracción esternal, balance toracoabdominal",
        "type": "acc"
      },
      {
        "t": "Análisis de Antecedentes Obstétricos y Edad Gestacional",
        "s": "¿Prematuro sin corticoides? ¿Cesárea electiva sin trabajo de parto? ¿Postérmino con meconio?",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Patrón Radiológico y Perfil Clínico Cardinal",
        "al": "EMH vs TTNR vs SAM",
        "ll": "Prematuro (< 34 sem) · Inmediato",
        "left": {
          "t": "Enfermedad de Membrana Hialina (EMH)",
          "s": "Déficit de surfactante · Rx: 'Vidrio esmerilado' + broncograma aéreo + volumen pulmonar disminuido · CPAP + Surfactante endotraqueal",
          "type": "crit"
        },
        "rl": "Término / Cesárea · Transitorio",
        "right": {
          "t": "Taquipnea Transitoria (TTNR / Pulmón Húmedo)",
          "s": "Retardo en reabsorción de líquido alveolar · Rx: Cisuritis + congestión perihiliar + hiperinsuflación · O2 / CPAP autolimitado < 72h",
          "type": "warn"
        }
      },
      {
        "t": "Síndrome de Aspiración Meconial (SAM)",
        "s": "Neonato de término o postérmino con meconio espeso · Rx: Infiltrados algodonosos en 'parches' + atelectasias e hiperinsuflación · Riesgo de hipertensión pulmonar",
        "type": "crit"
      }
    ],
    "contexto": "El distrés o dificultad respiratoria neonatal es la principal causa de ingreso a la Unidad de Cuidados Intensivos Neonatales (UCIN). La evaluación clínica se cuantifica objetivamente mediante el Score de Silverman-Andersen (donde a mayor puntaje, mayor gravedad, a la inversa de APGAR). El médico debe dominar la tríada clínica diferencial clásica: la Enfermedad de Membrana Hialina (EMH en prematuros por déficit de surfactante con imagen en vidrio esmerilado), la Taquipnea Transitoria (TTNR en nacidos por cesárea con cisuritis) y el Síndrome de Aspiración Meconial (SAM en postérminos con infiltrados en parches).",
    "contentSections": [
      {
        "subhead": "1. Score de Silverman-Andersen para Distrés Respiratorio Neonatal",
        "paragraphs": [
          "A diferencia del APGAR, en el <strong>Score de Silverman-Andersen</strong> un puntaje de <strong>0 indica ausencia de dificultad respiratoria (normal)</strong> y <strong>10 puntos indica máxima gravedad (paro inminente)</strong>:",
          "• <strong>1) Movimientos toraco-abdominales:</strong> Rítmicos y sincrónicos (0); Tórax inmóvil con abdomen en movimiento (1); Disociación toraco-abdominal o respiración en balancín (2).",
          "• <strong>2) Tiraje intercostal:</strong> Ausente (0); Discreto o leve (1); Acentuado y visible (2).",
          "• <strong>3) Retracción xifoidea:</strong> Ausente (0); Discreta (1); Acentuada (2).",
          "• <strong>4) Aleteo nasal:</strong> Ausente (0); Discreto (1); Acentuado (2).",
          "• <strong>5) Quejido espiratorio:</strong> Ausente (0); Audible solo con fonendoscopio (1); Audible a distancia sin fonendoscopio (2).",
          "• <em>Estratificación:</em> 1 a 3 puntos = Dificultad respiratoria leve; 4 a 6 puntos = Dificultad moderada; ≥ 7 puntos = Dificultad respiratoria grave."
        ]
      },
      {
        "subhead": "2. Enfermedad de Membrana Hialina (EMH / Síndrome de Distress Respiratorio tipo I)",
        "paragraphs": [
          "• <strong>Fisiopatología:</strong> Déficit cuantitativo y cualitativo de <strong>surfactante pulmonar</strong> (dipalmitoilfosfatidilcolina sintetizado por neumocitos tipo II a partir de la semana 32-34). Genera aumento masivo de la tensión superficial alveolar, atelectasias progresivas, colapso espiratorio y cortocircuito intrapulmonar de derecha a izquierda.",
          "• <strong>Población de Riesgo:</strong> Prematuros <strong>< 34-35 semanas</strong> (especialmente < 32 semanas), hijos de madre diabética (la insulina inhibe la síntesis de surfactante mediada por cortisol), cesárea sin trabajo de parto y asfixia perinatal.",
          "• <strong>Clínica:</strong> Inicia <strong>desde el nacimiento o en las primeras 2 a 4 horas de vida</strong>, con quejido precoz (mecanismo para mantener la PEEP y evitar el colapso alveolar), polipnea y cianosis.",
          "• <strong>Radiografía de Tórax Clásica:</strong> <strong>Volúmenes pulmonares marcadamente disminuidos</strong> (hipoinsuflación, < 7-8 espacios intercostales), infiltrado reticulogranular difuso bilateral (patrón en <strong>'vidrio esmerilado'</strong>) y <strong>broncograma aéreo</strong> bien visible.",
          "• <strong>Tratamiento:</strong>",
          "  - <strong>Prevención Prenatal:</strong> Corticoides prenatales a la madre (Betametasona 12 mg IM c/24h x 2 dosis) entre las 24 y 34 semanas de gestación.",
          "  - <strong>Soporte No Invasivo:</strong> <strong>CPAP nasal precoz</strong> desde sala de partos para evitar el colapso alveolar.",
          "  - <strong>Surfactante Exógeno Bovino/Porcino (100 a 200 mg/kg):</strong> Administrado por vía endotraqueal precoz (método InSurE o LISA) si requiere FiO2 > 30% en CPAP."
        ]
      },
      {
        "subhead": "3. Taquipnea Transitoria del Recién Nacido (TTNR / Pulmón Húmedo / SDR tipo II)",
        "paragraphs": [
          "• <strong>Fisiopatología:</strong> <strong>Retardo en la reabsorción y depuración del líquido pulmonar fetal</strong> a través de los canales epiteliales de sodio (ENaC) activados por el trabajo de parto y las catecolaminas.",
          "• <strong>Población de Riesgo:</strong> Recién nacidos de <strong>término o prematuros tardíos (35-37 sem) nacidos por Cesárea Electiva sin trabajo de parto</strong>, parto precipitado o madre sedada.",
          "• <strong>Clínica:</strong> Taquipnea superficial marcada (FR 60 a 100 rpm) que se inicia precozmente, pero con <strong>escaso tiraje y escaso quejido</strong> (neonato 'taquipneico pero contento'). Saturación se normaliza con aportes bajos de FiO2 (< 30-40%).",
          "• <strong>Radiografía de Tórax Clásica:</strong> <strong>Campos pulmonares hiperinsuflados</strong> (> 8-9 espacios intercostales), congestión parahiliar simétrica con imágenes en 'sol radiante', corazón ligeramente aumentado y <strong>presencia de líquido en cisuras pleurales (cisuritis)</strong>.",
          "• <strong>Tratamiento:</strong> Es un cuadro <strong>autolimitado y benigno que se resuelve espontáneamente en 24 a 72 horas</strong>. Requiere soporte con oxígeno por halo o cánula, o CPAP nasal leve si taquipnea extrema, y ayuno/sonda mientras FR > 80 rpm."
        ]
      },
      {
        "subhead": "4. Síndrome de Aspiración Meconial (SAM)",
        "paragraphs": [
          "• <strong>Fisiopatología:</strong> El feto sometido a asfixia o estrés hipóxico intrauterino relaja el esfínter anal y emite <strong>meconio espeso</strong> al líquido amniótico, realizando movimientos respiratorios de gasping que aspiran el meconio a la vía aérea distal. Produce obstrucción mecánica bifásica (efecto válvula con atelectasias y enfisema), neumonitis química inflamatoria e inactivación secundaria de surfactante.",
          "• <strong>Población de Riesgo:</strong> Recién nacidos de <strong>término y postérmino (≥ 42 semanas) o con Restricción de Crecimiento Fetal (RCF)</strong>. ¡Casi NUNCA ocurre en prematuros < 34 semanas!",
          "• <strong>Radiografía de Tórax Clásica:</strong> Marcada hiperinsuflación torácica con <strong>infiltrados algodonosos heterogéneos difusos en 'parches' o en motas</strong>, áreas alternantes de atelectasia y enfisema, y aplanamiento diafragmático.",
          "• <strong>Complicación Mayor:</strong> <strong>Hipertensión Pulmonar Persistente del Neonato (HPPN)</strong> con hipoxemia refractaria severa (requiere Óxido Nítrico Inhalado y ventilación de alta frecuencia)."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial Clínico y Radiológico de la Dificultad Respiratoria Neonatal",
      "headers": [
        "Parámetro",
        "Membrana Hialina (EMH)",
        "Taquipnea Transitoria (TTNR)",
        "Aspiración Meconial (SAM)"
      ],
      "rows": [
        [
          "Edad Gestacional",
          "Prematuro (< 34-35 semanas)",
          "Término o prematuro tardío",
          "Término y Postérmino (≥ 41-42 sem)"
        ],
        [
          "Factor Obstétrico",
          "Falta de maduración pulmonar",
          "Cesárea electiva sin trabajo de parto",
          "Sufrimiento fetal crónico / Asfixia"
        ],
        [
          "Momento de Inicio",
          "Inmediato / < 2 horas",
          "Inmediato / Primeras horas",
          "Inmediato en sala de partos"
        ],
        [
          "Quejido y Tiraje",
          "Quejido intenso, tiraje acentuado",
          "Leve o ausente (taquipnea pura)",
          "Muy intenso, quejido audible"
        ],
        [
          "Volumen Pulmonar en Rx",
          "Hipoinsuflado (< 7 espacios)",
          "Hiperinsuflado (> 8 espacios)",
          "Marcadamente hiperinsuflado"
        ],
        [
          "Patrón Radiológico",
          "Vidrio esmerilado + broncograma aéreo",
          "Cisuritis + congestión hiliar ('sol')",
          "Infiltrados algodonosos en parches"
        ],
        [
          "Evolución Clínica",
          "Empeora hasta día 3 sin surfactante",
          "Resuelve en 24 a 72 horas (Benigna)",
          "Grave · Riesgo de neumotórax y HPPN"
        ],
        [
          "Tratamiento Clave",
          "CPAP nasal precoz + Surfactante endotraqueal",
          "Oxígeno bajo flujo / Soporte · Autolimitado",
          "Soporte intensivo, surfactante, óxido nítrico"
        ]
      ]
    },
    "severityTable": {
      "title": "Evaluación del Distrés Respiratorio con el Score de Silverman-Andersen",
      "headers": [
        "Signo Clínico",
        "0 Puntos",
        "1 Punto",
        "2 Puntos"
      ],
      "rows": [
        [
          "Movimientos Toracoabdominales",
          "Rítmicos y sincronizados",
          "Tórax inmóvil, abdomen se expande",
          "Disociación toracoabdominal (balancín)"
        ],
        [
          "Tiraje Intercostal",
          "Ausente",
          "Discreto / Leve",
          "Acentuado y visible"
        ],
        [
          "Retracción Xifoidea",
          "Ausente",
          "Discreta",
          "Acentuada"
        ],
        [
          "Aleteo Nasal",
          "Ausente",
          "Discreto",
          "Acentuado"
        ],
        [
          "Quejido Espiratorio",
          "Ausente",
          "Audible con fonendoscopio",
          "Audible a distancia sin fonendoscopio"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Terapéutica Neonatal Específica según Etiología Respiratoria",
      "headers": [
        "Entidad Clínica",
        "Soporte Ventilatorio Inicial",
        "Fármaco Específico",
        "Meta Terapéutica"
      ],
      "rows": [
        [
          "Membrana Hialina (EMH)",
          "CPAP nasal con PEEP 5-6 cmH2O",
          "Surfactante porcino/bovino 100-200 mg/kg",
          "Evitar colapso alveolar y barotrauma"
        ],
        [
          "Taquipnea Transitoria (TTNR)",
          "Oxígeno con cánula nasal o halo",
          "Ninguno (autolimitado)",
          "Mantener SatO2 91-95% hasta reabsorción"
        ],
        [
          "Aspiración Meconial (SAM)",
          "Ventilación mecánica o CNAF",
          "Surfactante (lavado) ± Óxido Nítrico (iNO)",
          "Manejo de hipertensión pulmonar"
        ],
        [
          "Neumonía Neonatal",
          "Soporte según gasometría",
          "Ampicilina + Cefotaxima / Gentamicina EV",
          "Erradicación de Streptococcus grupo B"
        ]
      ]
    },
    "vignette": "Recién nacido de 31 semanas de gestación nace por parto prematuro espontáneo. La madre no recibió corticoides prenatales de maduración pulmonar. Inmediatamente tras el nacimiento presenta quejido espiratorio audible a distancia, aleteo nasal y retracción xifoidea acentuada con tiraje intercostal (Silverman-Andersen de 6 puntos). Su saturación de oxígeno es de 82% con FiO2 ambiental. Se realiza radiografía de tórax que demuestra volúmenes pulmonares marcadamente reducidos (6 espacios intercostales visibles), un patrón difuso en vidrio esmerilado bilateral y broncograma aéreo que sobrepasa la silueta cardíaca.",
    "explicacion": "Prematuro de 31 semanas sin corticoides prenatales que debuta inmediatamente con dificultad respiratoria severa con quejido intenso e imagen radiológica de hipoinsuflación con patrón reticulogranular en 'vidrio esmerilado' y broncograma aéreo. El cuadro corresponde a la Enfermedad de Membrana Hialina (EMH) por déficit de surfactante pulmonar. La conducta médica inmediata consiste en instalar soporte no invasivo con CPAP nasal y administrar Surfactante Exógeno por vía endotraqueal, manteniendo al paciente en incubadora en UCIN.",
    "keyPoints": [
      "En el Score de Silverman-Andersen, 0 es normal y 10 es máxima gravedad (lo inverso de APGAR).",
      "EMH: Prematuros (< 34 sem), quejido precoz, Rx con volúmenes disminuidos, vidrio esmerilado y broncograma.",
      "Tratamiento de EMH: CPAP nasal precoz + Surfactante exógeno endotraqueal.",
      "TTNR: Nacidos por cesárea sin trabajo de parto, taquipnea superficial, Rx hiperinsuflada con cisuritis, autolimitada en 72h.",
      "SAM: Término o postérmino con meconio espeso, Rx con hiperinsuflación e infiltrados algodonosos en parches.",
      "Complicación grave de SAM: Hipertensión Pulmonar Persistente del Neonato (HPPN).",
      "La administración prenatal de Betametasona a la madre entre 24 y 34 semanas previene eficazmente la EMH."
    ],
    "questions": [
      {
        "stem": "Un recién nacido de 30 semanas de gestación presenta dificultad respiratoria grave desde el nacimiento caracterizada por quejido espiratorio constante, cianosis y retracción costal severa. La radiografía de tórax revela campos pulmonares poco expandidos con opacificación reticulonodular bilateral difusa y broncograma aéreo visible (patrón en vidrio esmerilado). ¿Cuál es la etiología y el tratamiento de elección?",
        "options": [
          {
            "id": "A",
            "text": "Retardo en la reabsorción de líquido alveolar; oxígeno en cánula nasal de bajo flujo"
          },
          {
            "id": "B",
            "text": "Déficit de surfactante pulmonar; CPAP nasal e instilación endotraqueal de surfactante exógeno"
          },
          {
            "id": "C",
            "text": "Aspiración masiva de meconio; lavado traqueal con solución fisiológica abundante"
          },
          {
            "id": "D",
            "text": "Neumotórax a tensión bilateral; toracocentesis inmediata con aguja"
          },
          {
            "id": "E",
            "text": "Atresia esofágica congénita; instalación de sonda Foley con tracción"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Corresponde a la fisiopatología de la taquipnea transitoria en recién nacidos de término.\nB) Correcta. La combinación de prematurez extrema (30 semanas), presentación inmediata al nacer con distrés severo y quejido, y radiografía con hipoinsuflación, patrón en 'vidrio esmerilado' y broncograma aéreo es diagnóstica de Enfermedad de Membrana Hialina (EMH) por déficit de surfactante alveolar. El tratamiento de elección y estándar de oro consiste en soporte respiratorio continuo con CPAP nasal y administración de surfactante pulmonar exógeno por vía endotraqueal.\nC) Incorrecta. El SAM ocurre en postérminos y no en prematuros de 30 semanas.\nD) Incorrecta. El neumotórax produce hiperlucencia asimétrica sin broncograma difuso.\nE) Incorrecta. La atresia esofágica presenta sialorrea y tope al paso de la sonda nasogástrica.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.126"
      },
      {
        "stem": "Un recién nacido de 39 semanas nace por cesárea electiva sin trabajo de parto previo. A los 30 minutos de vida inicia taquipnea con frecuencia respiratoria de 84 rpm, con llanto vigoroso y quejido espiratorio ausente. La radiografía de tórax muestra hiperinsuflación pulmonar con diafragmas aplanados, refuerzo de la trama vascular perihiliar en 'sol radiante' y presencia de una línea líquida nítida en la cisura horizontal derecha (cisuritis). ¿Cuál es el diagnóstico más probable y el curso esperado?",
        "options": [
          {
            "id": "A",
            "text": "Enfermedad de membrana hialina; requerirá ventilación mecánica prolongada"
          },
          {
            "id": "B",
            "text": "Taquipnea transitoria del recién nacido; resolución clínica espontánea en 24 a 72 horas"
          },
          {
            "id": "C",
            "text": "Síndrome de aspiración meconial; alto riesgo de hipertensión pulmonar persistente"
          },
          {
            "id": "D",
            "text": "Neumonía congénita por Streptococcus agalactiae; requiere tratamiento antibiótico por 14 días"
          },
          {
            "id": "E",
            "text": "Hernia diafragmática congénita; requiere laparotomía de urgencia"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La EMH afecta a prematuros con pulmones hipoinsuflados.\nB) Correcta. El antecedente de recién nacido de término nacido por cesárea electiva sin trabajo de parto (falta de compresión torácica y falta de oleada de catecolaminas para activar los canales ENaC), que presenta taquipnea marcada sin quejido importante, y radiografía con hiperinsuflación, congestión perihiliar y cisuritis líquida interlobar, es la descripción paradigmática de la Taquipnea Transitoria del Recién Nacido (TTNR o Pulmón Húmedo). Es un cuadro benigno y autolimitado que se resuelve espontáneamente en 24 a 72 horas con soporte mínimo de oxígeno.\nC) Incorrecta. No hay antecedente de meconio ni infiltrados en parches.\nD) Incorrecta. La neumonía suele presentar antecedentes de fiebre materna o rotura prematura de membranas prolongada.\nE) Incorrecta. La hernia diafragmática muestra asas intestinales en hemitórax y abdomen excavado.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.126"
      }
    ]
  },
  {
    "id": "ped-19",
    "classId": "ped-19",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Neonatología & Sala de Partos",
    "topicLabel": "18.19",
    "title": "Sepsis Neonatal: Precoz (< 72 h) vs Tardía (> 72 h), Esquema Ampicilina + Aminoglucósido y Cefotaxima",
    "perfilCode": "2.01.1.120",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Urgencia pediátrica mayor con alta morbimortalidad y secuelas neurológicas.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#22) · EUNACOM Julio 2023 (Q#25) · EUNACOM Diciembre 2022 (Q#19)",
    "frecuencia": "Máxima rentabilidad · Factores de riesgo de Streptococcus agalactiae y antibioticoterapia empírica",
    "svg": null,
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de la Sospecha de Sepsis Neonatal Precoz y Tardía",
    "diagramRows": [
      {
        "t": "Sospecha de Sepsis Neonatal: Signos Clínicos Sutiles",
        "s": "Termoinestabilidad (fiebre o hipotermia), mala succión, letargia, apneas, taquicardia, llene capilar lento",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Momento de Inicio del Cuadro Clínico",
        "al": "Sepsis Precoz vs Tardía",
        "ll": "Sepsis Precoz (< 72 horas de vida)",
        "left": {
          "t": "Transmisión Vertical Madre-Hijo",
          "s": "Streptococcus agalactiae (EGB) + E. coli · FR: RPM > 18h, corioamnionitis, ITU materna · Ampicilina + Gentamicina (o Cefotaxima)",
          "type": "crit"
        },
        "rl": "Sepsis Tardía (> 72 horas de vida)",
        "right": {
          "t": "Transmisión Nosocomial o Comunitaria",
          "s": "Staphylococcus coagulasa negativo, S. aureus, enterobacterias · Cloxacilina/Vancomicina + Amikacina",
          "type": "warn"
        }
      },
      {
        "t": "Estudio Séptico Inmediato Previo a los Antibióticos",
        "s": "Hemocultivos x 2 + Hemograma + PCR/Procalcitonina + Punción Lumbar (LCR) + Orina (sondeo si tardía)",
        "type": "dec"
      },
      {
        "t": "Inicio Inmediato de Antibióticos Endovenosos sin Demora",
        "s": "En sepsis precoz: Ampicilina EV (cubre Listeria y EGB) + Gentamicina EV (sinergia) o Cefotaxima EV (si meningitis)",
        "type": "crit"
      }
    ],
    "contexto": "La sepsis neonatal es una de las principales causas de mortalidad en el primer mes de vida. Los recién nacidos presentan una respuesta inflamatoria e inmunológica inmadura que se manifiesta con signos sutiles e inespecíficos (hipotermia, letargia, apneas, mala tolerancia digestiva). El médico general debe diferenciar con precisión la sepsis precoz (< 72 horas, de origen vertical perinatal por Streptococcus agalactiae o E. coli) de la sepsis tardía (> 72 horas, nosocomial o comunitaria) e instaurar de inmediato el esquema antibiótico empírico antes de 1 hora.",
    "contentSections": [
      {
        "subhead": "1. Clasificación: Sepsis Neonatal Precoz vs Tardía",
        "paragraphs": [
          "• <strong>Sepsis Neonatal Precoz (Inicio < 72 horas de vida):</strong>",
          "  - <strong>Mecanismo:</strong> <strong>Transmisión vertical materna</strong> intraparto o ascendente a través del canal del parto.",
          "  - <strong>Microbiología:</strong> <strong>Streptococcus agalactiae (Streptococcus grupo B / EGB)</strong> (50-60% de los casos) y <strong>Escherichia coli</strong> (30%, más frecuente en prematuros), seguidos por <em>Listeria monocytogenes</em> y <em>Enterococcus</em>.",
          "  - <strong>Factores de Riesgo Perinatales Mayores:</strong> 1) Corioamnionitis materna (fiebre intraparto ≥ 38°C + taquicardia fetal, leucorrea fétida o dolor uterino); 2) Rotura prematura de membranas (RPM) prolongada <strong>> 18 horas</strong>; 3) Colonización materna por EGB sin profilaxis antibiótica intraparto completa (requiere Penicilina o Ampicilina EV iniciada ≥ 4 horas antes del expulsivo); 4) Hijo previo con enfermedad invasora por EGB; 5) Prematurez extrema (< 37 semanas).",
          "• <strong>Sepsis Neonatal Tardía (Inicio > 72 horas de vida, habitualmente días 4 a 28):</strong>",
          "  - <strong>Mecanismo:</strong> Transmisión horizontal nosocomial (intrahospitalaria en UCIN a través de catéteres venosos, tubos endotraqueales y personal de salud) o comunitaria.",
          "  - <strong>Microbiología:</strong> <strong>Staphylococcus coagulasa negativo (S. epidermidis)</strong> (>50% en UCIN), <em>Staphylococcus aureus</em>, enterobacterias nosocomiales (Klebsiella, Pseudomonas, Serratia) y <em>Candida albicans</em>."
        ]
      },
      {
        "subhead": "2. Manifestaciones Clínicas y Laboratorio",
        "paragraphs": [
          "Los signos clínicos de sepsis neonatal son <strong>sutiles, proteiformes y rápidamente progresivos</strong>:",
          "• <strong>Termorregulación:</strong> <strong>Hipotermia (< 36.5°C)</strong> es más frecuente que la fiebre en el prematuro y neonato pequeño.",
          "• <strong>Cardiovascular:</strong> Taquicardia persistente, <strong>llene capilar enlentecido (> 3 segundos)</strong>, pulsos débiles, palidez terrosa y piel moteada (livedo reticularis).",
          "• <strong>Respiratorio:</strong> Taquipnea, quejido, aleteo, retracciones y especialmente <strong>apneas recurrentes de inicio súbito</strong>.",
          "• <strong>Neurológico:</strong> Letargia, hipotonía marcada, llanto débil, irritabilidad inconsolable o convulsiones sutiles.",
          "• <strong>Digestivo:</strong> Rechazo alimentario, succión débil, vómitos, distensión abdominal y residuo gástrico bilioso.",
          "• <strong>Laboratorio:</strong> Hemograma con <strong>leucopenia (< 5.000/mm³)</strong> (signo de mayor gravedad y especificidad que la leucocitosis), relación de neutrófilos inmaduros/totales (I/T) <strong>> 0.20</strong>, trombocitopenia (< 100.000/mm³) y PCR / Procalcitonina elevadas."
        ]
      },
      {
        "subhead": "3. Esquemas Antibióticos Empíricos Oficiales",
        "paragraphs": [
          "• <strong>Esquema Empírico de Elección en Sepsis Precoz:</strong>",
          "  - <strong>Ampicilina EV + Gentamicina EV (o Cefotaxima EV)</strong>:",
          "    • <strong>Ampicilina:</strong> 150 a 200 mg/kg/día EV cada 12 horas (en < 7 días). Cubre eficazmente <em>Streptococcus agalactiae</em> y <em>Listeria monocytogenes</em> (Listeria es intrínsecamente resistente a todas las cefalosporinas).",
          "    • <strong>Gentamicina:</strong> 4 a 5 mg/kg/día EV cada 24 a 36 horas. Cubre bacilos gramnegativos (E. coli) y ejerce sinergia bactericida con ampicilina contra EGB.",
          "    • <em>Cefotaxima EV (100-150 mg/kg/día):</em> Se utiliza en lugar del aminoglucósido si existe <strong>sospecha clínica o confirmación de Meningitis Neonatal</strong> (por su excelente penetración en el líquido cefalorraquídeo) o daño renal.",
          "• <strong>Esquema Empírico en Sepsis Tardía Nosocomial:</strong>",
          "  - <strong>Vancomicina EV</strong> (cubre Staphylococcus coagulasa negativo y S. aureus meticilino-resistente) + <strong>Amikacina EV</strong> o <strong>Meropenem EV</strong> (si shock séptico o sospecha de Pseudomonas)."
        ]
      }
    ],
    "table": {
      "title": "Diferencias Cardinales entre Sepsis Neonatal Precoz y Tardía",
      "headers": [
        "Característica",
        "Sepsis Precoz (< 72 horas)",
        "Sepsis Tardía (> 72 horas)"
      ],
      "rows": [
        [
          "Mecanismo de Infección",
          "Transmisión vertical intraparto (ascendente)",
          "Transmisión nosocomial (catéteres) o comunitaria"
        ],
        [
          "Patógenos Principales",
          "Streptococcus agalactiae (EGB) y E. coli",
          "Staphylococcus epidermidis, S. aureus, Klebsiella"
        ],
        [
          "Factores de Riesgo",
          "Corioamnionitis, RPM > 18h, colonización EGB",
          "Prematurez, catéter venoso central, ventilación"
        ],
        [
          "Presentación Típica",
          "Fulminante, dificultad respiratoria, shock",
          "Insidiosa, apneas, intolerancia digestiva, meningitis"
        ],
        [
          "Antibiótico 1.ª Línea",
          "Ampicilina + Gentamicina (o Cefotaxima)",
          "Vancomicina + Amikacina (o Cefepime/Meropenem)"
        ],
        [
          "Mortalidad Relativa",
          "Alta (15 a 30% en prematuros)",
          "Moderada (10 a 15%)"
        ]
      ]
    },
    "severityTable": {
      "title": "Signos de Alarma y Marcadores Hematológicos de Sepsis Neonatal Grave",
      "headers": [
        "Parámetro",
        "Hallazgo Clínico / Laboratorio",
        "Significado Pronóstico",
        "Acción Inmediata"
      ],
      "rows": [
        [
          "Leucocitos Totales",
          "Leucopenia < 5.000/mm³",
          "Agotamiento medular · Alta mortalidad",
          "Inicio inmediato de antibióticos EV"
        ],
        [
          "Índice Inmaduros/Totales",
          "Relación I/T > 0.20",
          "Desviación extrema a la izquierda",
          "Marcador muy sensible de infección bacteriana"
        ],
        [
          "Plaquetas",
          "Trombocitopenia < 100.000/mm³",
          "Consumo por coagulación intravascular / CID",
          "Monitoreo de coagulación y sangrado"
        ],
        [
          "Llene Capilar",
          "> 3 segundos con frialdad distal",
          "Shock séptico descompensado",
          "Expansión con SF 0.9% 10-20 mL/kg en 20 min"
        ],
        [
          "Glicemia",
          "Hipoglicemia < 45 mg/dL o Hiperglicemia",
          "Disfunción metabólica por sepsis",
          "Aporte de glucosa parenteral continuo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Dosificación de Antibióticos en Sepsis Neonatal (Neofax / MINSAL)",
      "headers": [
        "Antimicrobiano",
        "Dosis Neonatal Estandarizada",
        "Vía e Intervalo",
        "Espectro Microbiano Cubierto"
      ],
      "rows": [
        [
          "Ampicilina",
          "100 a 200 mg/kg/día",
          "EV cada 12h (<7 días) o c/8h (>7 días)",
          "Streptococcus agalactiae (EGB) y Listeria"
        ],
        [
          "Gentamicina",
          "4 a 5 mg/kg/dosis",
          "EV cada 24h a 36h según EG",
          "Bacilos gramnegativos (E. coli) y sinergia"
        ],
        [
          "Cefotaxima",
          "100 a 150 mg/kg/día",
          "EV cada 12h o cada 8h",
          "Gramnegativos con penetración al LCR (meningitis)"
        ],
        [
          "Vancomicina",
          "10 a 15 mg/kg/dosis",
          "EV cada 8h a 12h con monitoreo niveles",
          "Staphylococcus aureus y coagulasa negativo (tardía)"
        ]
      ]
    },
    "vignette": "Recién nacido de 28 horas de vida, hijo de madre de 19 años sin controles prenatales regulares, cuyo parto ocurrió tras 22 horas de rotura prematura de membranas con fiebre materna intraparto de 38.4°C. El niño nació de término y se encontraba en alojamiento conjunto. La madre nota que el niño no quiere mamar, tiene la piel pálida terrosa y está muy frío al tacto. Al examen físico: T° axilar 35.8°C (hipotermia), FC 174 lpm, FR 68 rpm con quejido intermitente, fontanela normotensa y llene capilar de 4 segundos. El hemograma muestra 4.100 leucocitos/mm³ con 28% de baciliformes (relación I/T 0.32) y plaquetas 88.000/mm³.",
    "explicacion": "El paciente presenta un cuadro florido de Sepsis Neonatal Precoz (< 72 horas de vida) con signos de choque séptico inicial (hipotermia, taquicardia, llene capilar > 3 segundos, mala succión) y factores de riesgo obstétricos mayores categóricos: rotura de membranas prolongada (> 18h) y sospecha de corioamnionitis (fiebre materna intraparto). El laboratorio confirma leucopenia severa (< 5.000) con marcada desviación a la izquierda (I/T > 0.20) y trombocitopenia. La conducta médica inmediata e ineludible es hospitalizar en UCIN, tomar hemocultivos x 2, punción lumbar para LCR e iniciar inmediatamente antibioticoterapia empírica endovenosa con Ampicilina más Cefotaxima (o Gentamicina) sin retrasar el inicio por los exámenes.",
    "keyPoints": [
      "Sepsis precoz (< 72h): Transmisión vertical; patógenos principales: Streptococcus agalactiae y E. coli.",
      "Factores de riesgo: Corioamnionitis materna, RPM > 18 horas y colonización EGB sin profilaxis.",
      "En neonatos, la hipotermia (< 36.5°C) es un signo de infección bacteriana grave más frecuente que la fiebre.",
      "Leucopenia (< 5.000/mm³) e índice inmaduros/totales (I/T) > 0.20 son marcadores hematológicos cardinales.",
      "Esquema antibiótico de elección en sepsis precoz: Ampicilina + Gentamicina (o Cefotaxima si sospecha meningitis).",
      "La ampicilina es obligatoria para cubrir Listeria monocytogenes (resistente natural a cefalosporinas).",
      "Sepsis tardía (> 72h): Frecuentemente nosocomial por Staphylococcus coagulasa negativo (requiere Vancomicina)."
    ],
    "questions": [
      {
        "stem": "Un recién nacido de 36 horas de vida presenta letargia, rechazo alimentario, quejido espiratorio e hipotermia de 35.6°C. Antecedente materno de rotura prematura de membranas de 24 horas y fiebre en el trabajo de parto. ¿Cuál es la sospecha diagnóstica y el esquema antibiótico empírico de primera línea?",
        "options": [
          {
            "id": "A",
            "text": "Taquipnea transitoria; oxigenoterapia en halo sin antibióticos"
          },
          {
            "id": "B",
            "text": "Sepsis neonatal precoz; Ampicilina más Cefotaxima (o Gentamicina) endovenosa"
          },
          {
            "id": "C",
            "text": "Sepsis neonatal tardía; Vancomicina más Meropenem endovenoso"
          },
          {
            "id": "D",
            "text": "Enfermedad de membrana hialina; Surfactante endotraqueal exclusivo"
          },
          {
            "id": "E",
            "text": "Hipoglicemia transitoria; infusión de suero glucosado al 10% sin cultivos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El cuadro clínico infeccioso con hipotermia, quejido y factores de riesgo maternos graves descarta un proceso puramente mecánico transitorio.\nB) Correcta. El recién nacido tiene < 72 horas de vida (36h), factores de riesgo mayores de transmisión vertical (RPM > 18h y sospecha de corioamnionitis) y signos clínicos cardinales de sepsis (hipotermia, letargia, mala alimentación). El diagnóstico es Sepsis Neonatal Precoz. El tratamiento empírico de primera línea según normativas pediátricas y ministeriales es la combinación de Ampicilina (para cubrir Streptococcus agalactiae y Listeria) más un aminoglucósido (Gentamicina) o una cefalosporina de 3.ª generación (Cefotaxima).\nC) Incorrecta. La sepsis precoz ocurre en < 72h y no requiere vancomicina de entrada salvo cultivos específicos.\nD) Incorrecta. El distrés respiratorio es parte de la sepsis sistémica.\nE) Incorrecta. Aunque debe evaluarse la glicemia, la causa infecciosa de base requiere antibióticos inmediatos.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.120"
      },
      {
        "stem": "¿Por qué motivo la Ampicilina forma parte obligatoria del esquema antibiótico empírico inicial en la sepsis neonatal precoz, en lugar de utilizar una cefalosporina de tercera generación como monoterapia?",
        "options": [
          {
            "id": "A",
            "text": "Porque las cefalosporinas no cubren a Escherichia coli"
          },
          {
            "id": "B",
            "text": "Porque Listeria monocytogenes presenta resistencia intrínseca a todas las cefalosporinas y requiere ampicilina"
          },
          {
            "id": "C",
            "text": "Porque la ampicilina es el único fármaco activo contra Pseudomonas aeruginosa"
          },
          {
            "id": "D",
            "text": "Porque las cefalosporinas están contraindicadas en recién nacidos por toxicidad renal irreversible"
          },
          {
            "id": "E",
            "text": "Por razones exclusivamente económicas de bajo costo en el formulario nacional"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Las cefalosporinas de tercera generación cubren excelentemente a E. coli sensible.\nB) Correcta. Listeria monocytogenes es un bacilo grampositivo intracelular patógeno relevante en sepsis y meningitis neonatal de transmisión vertical, el cual carece de receptores de unión a cefalosporinas, presentando resistencia intrínseca natural absoluta a todas las cefalosporinas (incluyendo Cefotaxima y Ceftriaxona). Por ello, la Ampicilina es un componente insustituible del esquema empírico inicial en el periodo neonatal.\nC) Incorrecta. La ampicilina no tiene ninguna actividad contra Pseudomonas.\nD) Incorrecta. La cefotaxima es muy segura en neonatos.\nE) Incorrecta. Se fundamenta en microbiología y resistencia antimicrobiana.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.120"
      }
    ]
  },
  {
    "id": "ped-20",
    "classId": "ped-20",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Neonatología & Sala de Partos",
    "topicLabel": "18.20",
    "title": "Hipoglicemia Neonatal, Hipocalcemia & Trastornos Metabólicos del Neonato",
    "perfilCode": "2.01.2.009",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES. Cubierto por guías clínicas de Cuidados Intensivos Neonatales.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#9) · EUNACOM Julio 2022 (Q#108)",
    "frecuencia": "Alta rentabilidad · Umbrales de glicemia (< 45 mg/dL), cálculo de carga de glucosa (mg/kg/min) y manejo de hipocalcemia",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo Escalonado de la Hipoglicemia Neonatal Sintomática y Asintomática",
    "diagramRows": [
      {
        "t": "Recién Nacido con Factor de Riesgo o Síntomas Metabólicos",
        "s": "Hijo de madre diabética, PEG, GEG, prematuro < 37 sem, asfixia · Temblores, llanto débil, apneas",
        "type": "acc"
      },
      {
        "t": "Hemoglucotest de Tamizaje Preprandial en las Primeras Horas",
        "s": "Umbral de Alerta: Glicemia < 45 mg/dL (< 2.5 mmol/L) (o < 40 en las primeras 4 horas)",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Presencia de Síntomas Neurológicos / Severidad",
        "al": "Hipoglicemia Asintomática vs Sintomática",
        "ll": "Asintomático con Glicemia 35-44 mg/dL",
        "left": {
          "t": "Alimentación Precoz / Fórmula",
          "s": "Alimentar de inmediato al pecho o fórmula 5-10 mL/kg · Control en 30-60 min · Si persiste baja -> EV",
          "type": "acc"
        },
        "rl": "Sintomático o Glicemia < 35 mg/dL",
        "right": {
          "t": "Bolo de Glucosa + Infusión Continua",
          "s": "Bolo: Suero Glucosado 10% (SG10%) 2 mL/kg EV en 5 min · Carga de mantención: 6 a 8 mg/kg/min",
          "type": "crit"
        }
      },
      {
        "t": "Monitoreo Estricto para Mantener Glicemia > 45-50 mg/dL",
        "s": "Si requiere carga > 12 mg/kg/min -> Sospechar Hiperinsulinismo congénito · Evaluar Calcemia (Ca < 7 mg/dL)",
        "type": "warn"
      }
    ],
    "contexto": "La glucosa es el sustrato energético exclusivo para el cerebro neonatal. La hipoglicemia es el trastorno metabólico más común en el recién nacido. Los episodios repetidos o prolongados de hipoglicemia no corregida producen daño neuronal irreversible en la corteza occipital y parietal con retraso del desarrollo, microcefalia y epilepsia secundaria. El médico general debe saber realizar tamizaje preprandial en recién nacidos de riesgo, reconocer síntomas sutiles (temblores finos de extremidades, rechazo alimentario, hipotonía, letargia) y prescribir con exactitud el bolo de suero glucosado al 10% y la velocidad de infusión de glucosa.",
    "contentSections": [
      {
        "subhead": "1. Definición, Grupos de Riesgo y Manifestaciones Clínicas",
        "paragraphs": [
          "• <strong>Definición Operativa y Umbrales:</strong> Se define hipoglicemia neonatal cuando la <strong>glicemia plasmática es menor a 45 mg/dL</strong> (o menor a 40 mg/dL en las primeras 4 horas de vida postnatal debido al nadir fisiológico). La meta terapéutica tras el inicio de tratamiento es mantener la glucosa plasmática <strong>por encima de 50 mg/dL</strong>.",
          "• <strong>Población de Alto Riesgo (Tamizaje Protocolizado):</strong>",
          "  1) <strong>Hijo de Madre Diabética (HMD) / Macrosómico / GEG:</strong> Desarrollan <em>hiperinsulinismo fetal reactivo</em> por hiperglicemia materna transplacentaria. Al cortar el cordón cesa el aporte de glucosa pero persiste la hiperinsulinemia, produciendo hipoglicemia severa precoz en las primeras 1 a 2 horas.",
          "  2) <strong>Pequeño para la Edad Gestacional (PEG) / RCF:</strong> Reservas de glucógeno y grasa casi nulas.",
          "  3) <strong>Prematuro (< 37 semanas):</strong> Inmadurez de enzimas gluconeogénicas.",
          "  4) Asfixia perinatal, hipotermia o sepsis (aumento drástico del consumo periférico de glucosa).",
          "• <strong>Manifestaciones Clínicas:</strong> Temblores finos ('jitteriness') desencadenados por estímulos o espontáneos, succión débil, letargia, irritabilidad, quejido, <strong>episodios de apnea o bradicardia</strong>, hipotermia y, en casos extremos, convulsiones y coma."
        ]
      },
      {
        "subhead": "2. Manejo Terapéutico Escalonado",
        "paragraphs": [
          "• <strong>Hipoglicemia Asintomática en Paciente Estable (Glicemia 35 a 44 mg/dL):</strong>",
          "  - Alimentación enteral precoz inmediata con leche materna o fórmula láctea de inicio (5 a 10 mL/kg).",
          "  - Control de glicemia capilar/plasmática estricto a los <strong>30 a 60 minutos post-alimentación</strong>.",
          "  - Si se normaliza (≥ 45 mg/dL): mantener tomas frecuentes cada 2-3 horas con controles preprandiales.",
          "  - Si persiste < 45 mg/dL a pesar de dos alimentaciones o desciende a < 35 mg/dL: iniciar vía endovenosa.",
          "• <strong>Hipoglicemia Sintomática O Glicemia Severa (< 35 mg/dL):</strong>",
          "  - <strong>Urgencia Médica: Tratamiento Endovenoso Inmediato:</strong>",
          "    1) <strong>Bolo Endovenoso Inicial:</strong> <strong>Suero Glucosado al 10% (SG10%) a 2 mL/kg</strong> (equivalente a 200 mg/kg de glucosa) administrado por vía endovenosa lenta en 5 minutos (velocidad de 1 mL/min). <em>¡Nunca usar soluciones más concentradas como SG 20% o 50% en bolo por riesgo de hiperosmolaridad y rebote de insulina!</em>",
          "    2) <strong>Infusión Continua de Mantenimiento:</strong> Iniciar inmediatamente después del bolo una infusión de SG10% calculada para aportar una <strong>Carga de Glucosa (VIG: Velocidad de Infusión de Glucosa) de 6 a 8 mg/kg/minuto</strong>.",
          "    3) Reevaluar glicemia a los 30 minutos del bolo: si se mantiene < 50 mg/dL, aumentar la VIG de forma escalonada (8 -> 10 -> 12 mg/kg/min).",
          "    4) <em>Fórmula de Cálculo de Carga de Glucosa:</em> VIG (mg/kg/min) = [Velocidad de infusión (mL/kg/día) x % concentración de glucosa] / 144."
        ]
      },
      {
        "subhead": "3. Hipocalcemia Neonatal",
        "paragraphs": [
          "• <strong>Definición:</strong> Calcio sérico total <strong>< 7.0 mg/dL en prematuros</strong> o <strong>< 8.0 mg/dL en recién nacidos de término</strong> (o Calcio iónico < 4.0 mg/dL / < 1.0 mmol/L).",
          "• <strong>Hipocalcemia Precoz (Primeras 72 horas):</strong> Se observa en prematuros, asfixiados e hijos de madre diabética. Suele ser asintomática pero puede causar temblores e hiperreflexia.",
          "• <strong>Hipocalcemia Tardía (> 72 horas):</strong> Asociada a ingesta de leche de vaca no maternizada (exceso de fósforo), hipomagnesemia o hipoparatiroidismo congénito (Síndrome de DiGeorge).",
          "• <strong>Tratamiento Sintomático (Temblores / Convulsiones / Prolongación del intervalo QT):</strong> <strong>Gluconato de Calcio al 10% a dosis de 1 a 2 mL/kg (100-200 mg/kg) EV lento diluido al 50% con agua bidestilada en 10-15 minutos</strong> bajo monitorización electrocardiográfica continua (riesgo de bradicardia severa, asistolía y necrosis cutánea por extravasación)."
        ]
      }
    ],
    "table": {
      "title": "Protocolo de Manejo de Hipoglicemia Neonatal según Clínica y Nivel de Glicemia",
      "headers": [
        "Estado Clínico",
        "Nivel de Glicemia Plasmática",
        "Intervención Inicial",
        "Monitoreo y Ajuste"
      ],
      "rows": [
        [
          "Asintomático leve",
          "35 a 44 mg/dL",
          "Alimentar al pecho o fórmula (5-10 mL/kg)",
          "Control en 30-60 min · Si falla -> EV"
        ],
        [
          "Asintomático refractario",
          "< 45 mg/dL tras 2 tomas",
          "Infusión EV continua SG10% a 4-6 mg/kg/min",
          "Titular para mantener glicemia > 50 mg/dL"
        ],
        [
          "Sintomático (temblores)",
          "< 45 mg/dL",
          "Bolo SG10% 2 mL/kg EV + VIG 6-8 mg/kg/min",
          "Control en 30 min · Escalar VIG si persiste baja"
        ],
        [
          "Severa / Convulsión",
          "< 25-30 mg/dL",
          "Bolo SG10% 2 mL/kg EV rápido + VIG 8 mg/kg/min",
          "Hospitalización en UCIN · Descartar hiperinsulinismo"
        ],
        [
          "Hiperinsulinismo refractario",
          "Requiere VIG > 12 mg/kg/min",
          "Glucagón IM/EV (0.1 mg/kg) o Diazóxido",
          "Estudio endocrinológico especializado"
        ]
      ]
    },
    "vignette": "Recién nacido de 39 semanas, hijo de madre con diabetes gestacional en tratamiento con insulina. Nace por cesárea con peso de nacimiento de 4.350 g (GEG). A las 2 horas de vida, la matrona constata que el niño presenta temblores finos de extremidades al moverlo, succión débil y tono algo disminuido. Se realiza hemoglucotest capilar que marca 32 mg/dL, confirmado por glicemia venosa en 30 mg/dL.",
    "explicacion": "Hijo de madre diabética grande para la edad gestacional (GEG) que presenta hipoglicemia sintomática precoz (< 45 mg/dL y síntomas neurológicos de temblores e hipotonía). En todo recién nacido con hipoglicemia sintomática, la alimentación oral exclusiva es insuficiente e insegura. La conducta médica inmediata consiste en administrar un bolo endovenoso de Suero Glucosado al 10% (SG10%) a 2 mL/kg (en este RN de 4.3 kg corresponden 8.6 mL de SG10%) en 5 minutos, seguido inmediatamente de una infusión continua de glucosa a una velocidad de infusión de glucosa (VIG) de 6 a 8 mg/kg/minuto, controlando la glicemia cada 30 a 60 minutos hasta estabilizarla por encima de 50 mg/dL.",
    "keyPoints": [
      "Se define hipoglicemia neonatal con glicemia < 45 mg/dL (< 40 mg/dL en primeras 4 horas).",
      "Los grupos de riesgo son: Hijos de madre diabética, PEG, GEG, prematuros y asfícticos.",
      "Hipoglicemia sintomática: Bolo EV de Suero Glucosado al 10% a 2 mL/kg en 5 minutos.",
      "Tras el bolo, se indica infusión continua con carga de glucosa de 6 a 8 mg/kg/minuto.",
      "Nunca utilizar bolos de glucosa al 20% o 50% (riesgo de hiperosmolaridad e hiperinsulinismo rebote).",
      "La hipocalcemia sintomática se trata con Gluconato de Calcio al 10% a 1-2 mL/kg EV lento con monitor cardíaco.",
      "El objetivo terapéutico es mantener la glicemia plasmática por encima de 50 mg/dL."
    ],
    "questions": [
      {
        "stem": "Un recién nacido de 38 semanas, con peso de 4.250 g, hijo de madre con diabetes gestacional, presenta temblores finos en extremidades superiores y succión débil a las 2 horas de vida. Se realiza control de glicemia venosa que informa 32 mg/dL. ¿Cuál es la conducta médica inmediata más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Ofrecer mamadera de 20 mL de agua con azúcar por vía oral y reevaluar en 2 horas"
          },
          {
            "id": "B",
            "text": "Administrar un bolo endovenoso de Suero Glucosado al 10% a 2 mL/kg en 5 minutos, seguido de infusión continua de glucosa a 6-8 mg/kg/min"
          },
          {
            "id": "C",
            "text": "Administrar un bolo endovenoso rápido de Suero Glucosado al 50% a 5 mL/kg"
          },
          {
            "id": "D",
            "text": "Administrar Hidrocortisona endovenosa a 10 mg/kg como primera línea"
          },
          {
            "id": "E",
            "text": "Mantener en observación sin tratamiento, dado que a las 2 horas la glicemia de 32 mg/dL es normal"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. En un paciente sintomático, la vía oral no asegura corrección rápida ni previene el daño cerebral.\nB) Correcta. La hipoglicemia neonatal sintomática (temblores, glicemia < 45 mg/dL) es una urgencia neurológica. El tratamiento protocolizado consiste en administrar un bolo endovenoso de Suero Glucosado al 10% (SG10%) a dosis de 2 mL/kg (200 mg/kg de glucosa) infundido lentamente en 5 minutos, seguido inmediatamente de una infusión continua de glucosa para mantener una carga (VIG) de 6 a 8 mg/kg/minuto, reevaluando la glicemia plasmática en 30 minutos.\nC) Incorrecta. El SG al 50% o al 20% en bolo está formalmente contraindicado por riesgo de lesión endotelial, hiperosmolaridad cerebral y secreción masiva de insulina que produce hipoglicemia de rebote grave.\nD) Incorrecta. Los corticoides se reservan para hiperinsulinismo refractario extremo.\nE) Incorrecta. 32 mg/dL con temblores es francamente patológico.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.009"
      },
      {
        "stem": "Un recién nacido pretérmino de 34 semanas presenta a las 36 horas de vida temblores e irritabilidad marcada. La glicemia es de 62 mg/dL (normal). En los exámenes de laboratorio se constata: Calcio total sérico de 6.2 mg/dL y Calcio iónico de 0.85 mmol/L (normal > 1.1 mmol/L). En el electrocardiograma se evidencia prolongación del intervalo QTc. ¿Cuál es el tratamiento de urgencia indicado?",
        "options": [
          {
            "id": "A",
            "text": "Gluconato de Calcio al 10% a 1 a 2 mL/kg por vía endovenosa lenta con monitorización cardíaca"
          },
          {
            "id": "B",
            "text": "Carbonato de calcio oral en polvo diluido en leche cada 12 horas"
          },
          {
            "id": "C",
            "text": "Sulfato de magnesio endovenoso en bolo rápido"
          },
          {
            "id": "D",
            "text": "Vitamina D3 en megadosis intramuscular de 100.000 UI"
          },
          {
            "id": "E",
            "text": "Cloruro de potasio en bolo endovenoso directo"
          }
        ],
        "correcta": "A",
        "explicacion": "A) Correcta. El recién nacido presenta una Hipocalcemia Neonatal Precoz sintomática (calcio total < 7.0 mg/dL con temblores y prolongación del intervalo QT electrocardiográfico). El tratamiento de urgencia para evitar convulsiones y arritmias ventriculares es la infusión de Gluconato de Calcio al 10% a dosis de 1 a 2 mL/kg (100 a 200 mg/kg) administrado por vía endovenosa lenta diluido al medio con agua bidestilada o suero en 10 a 15 minutos, bajo estricta monitorización electrocardiográfica continua para vigilar bradicardia o arritmias.\nB) Incorrecta. El calcio oral se utiliza para mantenimiento una vez corregida la fase aguda sintomática.\nC) Incorrecta. Solo se utiliza si se documenta hipomagnesemia asociada refractaria.\nD) Incorrecta. Tarda días en actuar.\nE) Incorrecta. El potasio en bolo directo es letal.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.2.009"
      }
    ]
  },
  {
    "id": "ped-21",
    "classId": "ped-21",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Neonatología & Sala de Partos",
    "topicLabel": "18.21",
    "title": "Tamizaje Neonatal Universal en Chile: Fenilcetonuria (PKU), Hipotiroidismo Congénito (HC) y Tamizaje Auditivo",
    "perfilCode": "2.01.1.134",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES N° 34): Hipotiroidismo congénito · (GES N° 45): Fenilcetonuria (PKU).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#25) · EUNACOM Julio 2023 (Q#80)",
    "frecuencia": "Alta rentabilidad · Toma de muestra de talón en papel filtro (días 2 a 5) y confirmación diagnóstica con TSH y T4L",
    "svg": null,
    "algoTitle": "Flujo de Pesquisa Neonatal Universal en Papel Filtro (PKU y TSH) en Maternidades de Chile",
    "diagramRows": [
      {
        "t": "Recién Nacido en Maternidad (Post-Inicio de Alimentación)",
        "s": "Toma de muestra de sangre de talón en papel filtro estéril (Guthrie)",
        "type": "acc"
      },
      {
        "t": "Momento Óptimo de la Toma de Muestra",
        "s": "Entre las 40 y 48 horas de vida (o al alta entre días 2 y 5) · PKU exige ingesta proteica previa",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Resultados de las Pruebas de Tamizaje",
        "al": "Pesquisa Neonatal PKU y TSH",
        "ll": "TSH Neonatal Elevada",
        "left": {
          "t": "Sospecha de Hipotiroidismo Congénito",
          "s": "TSH talón alterada -> Confirmar urgente con TSH y T4 libre plasmática en sangre venosa · Levotiroxina precoz",
          "type": "crit"
        },
        "rl": "Fenilalanina Elevada",
        "right": {
          "t": "Sospecha de Fenilcetonuria (PKU)",
          "s": "Fenilalanina sérica elevada -> Confirmación diagnóstica cuantitativa en INTA · Dieta estricta sin fenilalanina",
          "type": "warn"
        }
      },
      {
        "t": "Tamizaje Auditivo Universal y Tamizaje de Cardiopatías Críticas",
        "s": "Emisiones Otoacústicas (EOA) al alta en maternidad + Oximetría de pulso pre/postductal a las 24h",
        "type": "acc"
      }
    ],
    "contexto": "El Programa Nacional de Búsqueda Masiva de Errores Innatos del Metabolismo del MINSAL (gestionado técnicamente por el INTA de la Universidad de Chile) es uno de los programas de tamizaje neonatal más exitosos de Latinoamérica, con una cobertura superior al 98%. Su objetivo es diagnosticar de forma presintomática el Hipotiroidismo Congénito y la Fenilcetonuria, dos patologías que si no se tratan en las primeras 2 a 3 semanas de vida causan daño cerebral irreversible y retraso mental severo (cretinismo y oligofrenia fenilpirúvica). El médico debe conocer la técnica, los tiempos de toma y las confirmaciones hormonales.",
    "contentSections": [
      {
        "subhead": "1. Hipotiroidismo Congénito (GES N° 34)",
        "paragraphs": [
          "• <strong>Epidemiología y Causa:</strong> Causa prevenible más frecuente de discapacidad intelectual en el mundo (frecuencia ~1 en 2.500 a 3.000 recién nacidos en Chile). La causa más común es la <strong>disgenesia tiroidea</strong> (85%: ectopia tiroidea 60%, agenesia 20%, hipoplasia 5%), seguida por dishormonogénesis (15%).",
          "• <strong>Clínica Inicial (Silenciosa):</strong> Al nacer, el 95% de los recién nacidos son <strong>completamente asintomáticos</strong> gracias al paso transplacentario parcial de T4 materna.",
          "  - Los signos tardíos aparecen a las semanas o meses (cuando el daño neurológico ya es irreversible): <strong>fontanela posterior amplia (> 0.5 cm)</strong>, ictericia fisiológica prolongada, llanto ronco, <strong>macroglosia</strong>, <strong>hernia umbilical</strong>, constipación pertinaz, hipotonía y piel fría y seca.",
          "• <strong>Tamizaje y Confirmación:</strong>",
          "  - Tamizaje: Medición de <strong>TSH en gota de sangre en papel filtro</strong>.",
          "  - Confirmación diagnóstica: Toda TSH de talón alterada exige confirmación inmediata con <strong>TSH y T4 libre (T4L) en sangre venosa</strong>.",
          "  - Tratamiento de Elección: <strong>Levotiroxina sódica oral a dosis de 10 a 15 mcg/kg/día</strong> iniciada <strong>ANTES de los 15 a 28 días de vida</strong> para garantizar un coeficiente intelectual normal."
        ]
      },
      {
        "subhead": "2. Fenilcetonuria (PKU / Oligofrenia Fenilpirúvica - GES N° 45)",
        "paragraphs": [
          "• <strong>Fisiopatología:</strong> Enfermedad autosómica recesiva producida por la deficiencia de la enzima hepática <strong>Fenilalanina Hidroxilasa (PAH)</strong>, que convierte el aminoácido fenilalanina en tirosina. La acumulación tóxica de fenilalanina en sangre y líquido cefalorraquídeo inhibe el transporte de aminoácidos al cerebro y la mielinización, causando microcefalia, retraso mental profundo, convulsiones y piel/ojos claros (por déficit de melanina).",
          "• <strong>Tamizaje:</strong> Cuantificación de <strong>Fenilalanina en sangre de talón</strong> en papel filtro. <em>Condición indispensable:</em> La muestra debe tomarse <strong>después de al menos 24 a 48 horas de ingesta de proteínas lácteas (leche materna o fórmula)</strong>; si se toma antes de iniciar la alimentación, la fenilalanina estará falsamente normal.",
          "• <strong>Tratamiento:</strong> Dieta estricta de por vida <strong>restringida en fenilalanina</strong>, suplementada con una fórmula especial libre de fenilalanina y enriquecida con tirosina y micronutrientes (garantizada por GES)."
        ]
      },
      {
        "subhead": "3. Tamizaje Auditivo y de Cardiopatías Congénitas Críticas",
        "paragraphs": [
          "• <strong>Tamizaje Auditivo Universal (Emisiones Otoacústicas - EOA):</strong> Se realiza a todos los recién nacidos antes del alta de la maternidad. Si falla la primera prueba, se repite al mes; si persiste alterada, se realizan Potenciales Evocados Auditivos de Tronco Encefálico (PEATC) para confirmación precoz e implementación de audífonos o implante coclear antes de los 6 meses de vida.",
          "• <strong>Tamizaje de Cardiopatías Congénitas Críticas (Oximetría de Pulso):</strong> Se mide la saturación de oxígeno a las 24-48 horas de vida en la mano derecha (preductal) y en un pie (postductal). Se considera positivo (anormal) si: 1) SatO2 < 90% en cualquier extremidad; 2) SatO2 < 95% en ambas extremidades en 3 mediciones separadas por 1 hora; 3) Diferencia > 3% entre mano derecha y pie. Permite pesquisar cardiopatías ductus-dependientes antes del colapso circulatorio al cierre del ductus."
        ]
      }
    ],
    "table": {
      "title": "Programas de Tamizaje Neonatal Universal en Maternidades de Chile (MINSAL)",
      "headers": [
        "Patología Pesquisada",
        "Método de Tamizaje",
        "Momento Óptimo",
        "Prueba Confirmatoria",
        "Tratamiento de Elección"
      ],
      "rows": [
        [
          "Hipotiroidismo Congénito",
          "TSH en papel filtro (talón)",
          "40 a 48 horas de vida (alta)",
          "TSH y T4 libre venosa plasmática",
          "Levotiroxina oral 10-15 mcg/kg/día"
        ],
        [
          "Fenilcetonuria (PKU)",
          "Fenilalanina en papel filtro",
          "> 40-48h (con aporte lácteo)",
          "Fenilalanina cuantitativa en INTA",
          "Fórmula y dieta libre de fenilalanina"
        ],
        [
          "Hipoacusia Congénita",
          "Emisiones Otoacústicas (EOA)",
          "Antes del alta hospitalaria",
          "Potenciales evocados (PEATC)",
          "Audífonos / Implante coclear GES"
        ],
        [
          "Cardiopatías Críticas",
          "Oximetría pre y postductal",
          "24 a 48 horas de vida",
          "Ecocardiografía Doppler urgente",
          "Prostaglandina E1 EV si ductus-dependiente"
        ]
      ]
    },
    "vignette": "Lactante de 1 mes de vida es traído a control sano en CESFAM. Nació de término con peso adecuado en un parto domiciliario rural no institucionalizado, sin controles posteriores ni toma de exámenes de maternidad. La madre relata que el niño es 'muy tranquilo, duerme todo el día, le cuesta mamar y tiene el estómago hinchado'. Al examen físico destaca: fontanela posterior amplia de 1.5 cm de diámetro, ictericia leve en cara, macroglosia evidente con protrusión de la lengua fuera de la boca, llanto ronco y hernia umbilical de 2 cm reducible.",
    "explicacion": "El paciente presenta la constelación clínica clásica del Hipotiroidismo Congénito en etapa sintomática (fontanela posterior amplia > 0.5 cm, ictericia prolongada, llanto ronco, macroglosia, hipotonía y hernia umbilical), cuadro que se debió pesquisar en el periodo presintomático mediante el tamizaje neonatal en papel filtro. La conducta médica inmediata e inaplazable es solicitar TSH y T4 libre en sangre venosa de urgencia e iniciar precozmente Levotiroxina oral a 10-15 mcg/kg/día para minimizar el daño sobre el desarrollo neurocognitivo.",
    "keyPoints": [
      "El tamizaje en papel filtro (TSH y Fenilalanina) se toma entre las 40 y 48 horas de vida al alta de maternidad.",
      "Para pesquisar PKU, el recién nacido DEBE haber recibido alimentación proteica láctea por al menos 24-48 horas.",
      "El 95% de los recién nacidos con Hipotiroidismo Congénito son completamente asintomáticos al nacer.",
      "Signos tardíos de hipotiroidismo: Fontanela posterior amplia (> 0.5 cm), macroglosia, llanto ronco y hernia umbilical.",
      "Confirmación de hipotiroidismo: TSH y T4 libre en sangre venosa; tratamiento: Levotiroxina oral (10-15 mcg/kg/d).",
      "El tamizaje auditivo universal se realiza con Emisiones Otoacústicas (EOA) al alta.",
      "El tamizaje de cardiopatías críticas compara la oximetría preductal (mano derecha) con la postductal (pie)."
    ],
    "questions": [
      {
        "stem": "En relación con el Programa Nacional de Pesquisa Neonatal de Errores Innatos del Metabolismo en Chile, ¿cuál es el momento óptimo y la condición requerida para la toma de la muestra de sangre de talón en papel filtro para la detección de Fenilcetonuria (PKU) e Hipotiroidismo Congénito?",
        "options": [
          {
            "id": "A",
            "text": "Inmediatamente al corte del cordón umbilical en sala de partos, antes de la primera mamada"
          },
          {
            "id": "B",
            "text": "Entre las 40 y 48 horas de vida (al alta de maternidad), habiendo recibido alimentación láctea por al menos 24 a 48 horas"
          },
          {
            "id": "C",
            "text": "A los 30 días de vida en el primer control de salud infantil del CESFAM"
          },
          {
            "id": "D",
            "text": "A las 12 horas de vida en ayunas estricto de agua y leche"
          },
          {
            "id": "E",
            "text": "Solo si el recién nacido presenta ictericia o letargia clínica"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. En cordón umbilical o antes de comer no se ha acumulado fenilalanina dietética y la TSH sufre un pico fisiológico transitorio posparto que arroja falsos positivos.\nB) Correcta. La norma técnica del MINSAL establece que la toma de sangre de talón en papel filtro debe realizarse entre las 40 y 48 horas de vida (coincidiendo con el alta de la maternidad). En el caso de la Fenilcetonuria (PKU), es requisito indispensable que el recién nacido haya iniciado alimentación con leche materna o fórmula por al menos 24 a 48 horas para que los niveles de fenilalanina plasmática alcancen valores detectables por el método microbiológico de Guthrie o espectrometría de masas.\nC) Incorrecta. A los 30 días el daño neurológico en hipotiroidismo y PKU ya se ha iniciado.\nD) Incorrecta. No requiere ayuno, requiere alimentación previa.\nE) Incorrecta. El programa es universal y obligatorio para todos los recién nacidos, no solo sintomáticos.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.134"
      },
      {
        "stem": "Un lactante de 2 meses no tuvo tamizaje de talón al nacer. Es evaluado en APS por constipación severa. Al examen se observa somnoliento, con piel seca y fría, llanto ronco, fontanela posterior abierta de 2 cm, macroglosia y una hernia umbilical evidente. La sospecha clínica apunta a Hipotiroidismo Congénito. ¿Cuál es el examen confirmatorio de elección y el tratamiento que debe iniciarse de inmediato?",
        "options": [
          {
            "id": "A",
            "text": "Ecografía de tiroides exclusiva; indicar fórmula enriquecida con yodo"
          },
          {
            "id": "B",
            "text": "TSH y T4 libre en sangre venosa; iniciar Levotiroxina oral a 10-15 mcg/kg/día"
          },
          {
            "id": "C",
            "text": "Anticuerpos anti-TPO en saliva; iniciar Metimazol oral"
          },
          {
            "id": "D",
            "text": "Cintigrama de tiroides con I-131 previo a cualquier tratamiento"
          },
          {
            "id": "E",
            "text": "Punción aspiración de tiroides con aguja fina y tiroidectomía total"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El diagnóstico confirmatorio es hormonal bioquímico en sangre, no anatómico.\nB) Correcta. Ante la sospecha clínica de Hipotiroidismo Congénito, el examen confirmatorio estándar e ineludible es la medición de TSH y T4 libre en sangre venosa. Confirmado el diagnóstico (TSH marcadamente elevada con T4 libre baja), se debe iniciar inmediatamente tratamiento con Levotiroxina sódica oral a dosis de 10 a 15 mcg/kg/día administrada en ayunas triturada con unas gotas de leche o agua, garantizado por las Garantías Explícitas en Salud (GES N° 34).\nC) Incorrecta. El metimazol es un antitiroideo para hipertiroidismo.\nD) Incorrecta. El estudio etiológico no debe retrasar el inicio de la levotiroxina.\nE) Incorrecta. Totalmente disparatado.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.134"
      }
    ]
  },
  {
    "id": "ped-22",
    "classId": "ped-22",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Neonatología & Sala de Partos",
    "topicLabel": "18.22",
    "title": "Displasia del Desarrollo de la Cadera (DDC GES N° 23): Maniobras de Ortolani y Barlow, Radiografía a los 3 Meses y Correas de Pavlik",
    "perfilCode": "2.01.1.140",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES N° 23): Displasia del desarrollo de la cadera en menores de 1 año · Radiografía de pelvis universal a los 3 meses en todo lactante de la red de salud.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#19) · EUNACOM Julio 2023 (Q#10) · EUNACOM Diciembre 2021 (Q#15)",
    "frecuencia": "Máxima rentabilidad · Maniobras de Ortolani (reductora) vs Barlow (luxadora) y líneas radiológicas de Hilgenreiner / Perkin",
    "svg": null,
    "algoTitle": "Algoritmo de Tamizaje Clínico, Radiológico y Manejo Ortopédico de la DDC en Chile (GES N° 23)",
    "diagramRows": [
      {
        "t": "Examen Físico de Cadera en Todo Control Sano Infantil",
        "s": "Maniobras de Ortolani y Barlow en menores de 3 meses · Asimetría de pliegues y abducción limitada",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Presencia de Examen Físico Positivo vs Factores de Riesgo",
        "al": "Tamizaje Clínico vs Universal",
        "ll": "Ortolani o Barlow POSITIVO al nacer",
        "left": {
          "t": "Derivación Inmediata a Ortopedia Infantil",
          "s": "Confirmación precoz con Ecografía de caderas (Método de Graf) · Inicio inmediato de Correas de Pavlik",
          "type": "crit"
        },
        "rl": "Examen Físico Negativo",
        "right": {
          "t": "Tamizaje Radiológico Universal GES",
          "s": "Radiografía de Pelvis AP a los 3 meses de vida (80 a 120 días) a TODOS los lactantes en Chile",
          "type": "acc"
        }
      },
      {
        "t": "Interpretación de la Radiografía de Pelvis a los 3 Meses",
        "s": "Línea de Hilgenreiner (horizontal) + Línea de Perkin (vertical) -> Núcleo femoral en cuadrante infero-interno · Ángulo acetabular ≤ 30°",
        "type": "dec"
      },
      {
        "t": "Manejo Ortopédico con Correas de Pavlik",
        "s": "Mantiene caderas en flexión (90-100°) y abducción moderada (45-60°) · Tratamiento precoz previene artrosis y osteotomías",
        "type": "warn"
      }
    ],
    "contexto": "La Displasia del Desarrollo de la Cadera (DDC) es una anomalía biomecánica congénita o evolutiva del acetábulo y fémur proximal caracterizada por inestabilidad, subluxación o luxación completa de la articulación coxofemoral. Afecta con mayor frecuencia al sexo femenino (relación mujer:hombre 4:1) y a la cadera izquierda. Chile cuenta con la Garantía Explícita en Salud (GES N° 23) que incluye el tamizaje radiológico universal a los 3 meses de vida. El médico general debe dominar las maniobras de Ortolani y Barlow, la lectura de las líneas radiológicas de Hilgenreiner/Perkin y la prescripción oportuna de las correas de Pavlik.",
    "contentSections": [
      {
        "subhead": "1. Factores de Riesgo y Examen Físico de Cadera",
        "paragraphs": [
          "• <strong>Factores de Riesgo Principales:</strong> 1) Sexo femenino (por laxitud ligamentosa mediada por estrógenos maternos); 2) Presentación podálica o de nalgas; 3) Antecedentes familiares de primer grado de DDC; 4) Primiparidad y oligoamnios (compresión uterina); 5) Malformaciones posturales asociadas (tortícolis congénita, pie bot o metatarso varo).",
          "• <strong>Maniobras Clínicas en Menores de 3 Meses:</strong>",
          "  - <strong>Maniobra de Ortolani (Maniobra Reductora):</strong> Con el lactante en supino relajado, se flexionan las caderas y rodillas a 90° sujetando los muslos con los pulgares en la cara medial y los dedos medios sobre el trocánter mayor. Se realiza una <strong>abducción suave del muslo</strong> mientras se tracciona hacia adelante. Es <strong>positiva</strong> si se siente un <strong>'clunk' o resalto palpable</strong> al momento en que la cabeza femoral luxada <strong>se reduce</strong> dentro del acetábulo.",
          "  - <strong>Maniobra de Barlow (Maniobra Provocadora / Luxadora):</strong> Desde la posición de flexión y aducción leve, se ejerce una presión suave hacia atrás a lo largo del eje del fémur. Es <strong>positiva</strong> si la cabeza femoral se desliza fuera del acetábulo (cadera luxable).",
          "• <strong>Signos Clínicos en Mayores de 3 Meses:</strong> Las maniobras pierden sensibilidad por retracción capsular. Los signos clave son la <strong>limitación de la abducción de caderas (< 60° es patológica)</strong>, la asimetría de pliegues inguinales/glúteos (signo tardío e inespecífico) y el <strong>Signo de Galeazzi</strong> (asimetría en la altura de las rodillas al flexionar las caderas a 90° con los pies apoyados sobre la camilla por acortamiento aparente del fémur luxado)."
        ]
      },
      {
        "subhead": "2. Diagnóstico por Imágenes: Ecografía vs Radiografía de Pelvis (GES N° 23)",
        "paragraphs": [
          "• <strong>Ecografía de Cadera (Método de Graf):</strong> Es el examen de elección en <strong>menores de 3 meses</strong> (los núcleos de osificación femorales aún son completamente cartilaginosos y radiolúcidos). Evalúa el ángulo alfa (> 60° es normal).",
          "• <strong>Radiografía de Pelvis Anteroposterior (Garantía Universal GES N° 23):</strong>",
          "  - En Chile se realiza de forma <strong>universal y obligatoria a TODOS los lactantes a los 3 meses de vida (entre los 80 y 120 días)</strong>, independientemente de que tengan examen físico normal y no presenten factores de riesgo.",
          "  - <strong>Líneas Radiológicas Clásicas:</strong>",
          "    1) <strong>Línea de Hilgenreiner:</strong> Línea horizontal que une ambos cartílagos trirradiados en el fondo del acetábulo.",
          "    2) <strong>Línea de Perkin:</strong> Línea vertical perpendicular a la de Hilgenreiner trazada desde el borde óseo superoexterno del acetábulo.",
          "    3) <strong>Cuadrantes de Ombredanne:</strong> La intersección divide la articulación en 4 cuadrantes. <strong>En una cadera normal, el núcleo de osificación de la cabeza femoral (o el fémur proximal) DEBE ubicarse estrictamente en el Cuadrante Ínfero-Interno</strong>. Si está en el cuadrante súpero-externo, la cadera está luxada.",
          "    4) <strong>Índice Acetabular (Ángulo de Hilgenreiner):</strong> Ángulo formado entre la línea de Hilgenreiner y el techo acetabular. A los 3 meses, un valor <strong>≤ 30° es normal</strong>. Un índice acetabular <strong>> 30°</strong> (o asimetría > 5° entre ambas caderas) es diagnóstico de displasia acetabular.",
          "    5) <strong>Arco de Shenton:</strong> Línea continua curva formada por el borde inferior de la rama iliopubiana y el cuello femoral. En DDC el arco se encuentra discontinuo o roto."
        ]
      },
      {
        "subhead": "3. Tratamiento Ortopédico con Correas de Pavlik",
        "paragraphs": [
          "• <strong>Estándar de Oro en Menores de 6 Meses:</strong> <strong>Arnés o Correas de Pavlik</strong>.",
          "  - Mecanismo: Mantiene las caderas en <strong>flexión dinámica (90° a 100°) y abducción moderada (45° a 60°)</strong>, permitiendo el centrado concéntrico espontáneo de la cabeza femoral dentro del cotilo acetabular para estimular su desarrollo normal.",
          "  - <em>Complicaciones a evitar:</em> <strong>Necrosis avascular de la cabeza femoral</strong> (si se fuerza una abducción extrema > 70°) o parálisis del nervio femoral (si la flexión supera los 110-120°).",
          "• <strong>Manejo en Mayores de 6 Meses o Fracaso de Pavlik:</strong> Requiere reducción cerrada o abierta bajo anestesia general y espica de yeso pelvipédico."
        ]
      }
    ],
    "table": {
      "title": "Líneas e Índices Radiológicos en la Radiografía de Pelvis a los 3 Meses",
      "headers": [
        "Parámetro Radiológico",
        "Trazado Anatómico",
        "Valor Normal (3 meses)",
        "Hallazgo en Displasia (DDC)"
      ],
      "rows": [
        [
          "Línea de Hilgenreiner",
          "Horizontal que une cartílagos trirradiados",
          "Línea basal horizontal",
          "Punto de referencia"
        ],
        [
          "Línea de Perkin",
          "Vertical trazada desde el borde acetabular externo",
          "Perpendicular a Hilgenreiner",
          "Delimita cuadrantes"
        ],
        [
          "Cuadrantes de Ombredanne",
          "4 cuadrantes formados por cruce de líneas",
          "Núcleo en Cuadrante Ínfero-Interno",
          "Núcleo desplazado a Súpero-Externo"
        ],
        [
          "Índice Acetabular",
          "Ángulo entre Hilgenreiner y techo acetabular",
          "≤ 30° (desciende con la edad)",
          "> 30° (acetábulo plano / verticalizado)"
        ],
        [
          "Arco de Shenton",
          "Curva entre cuello femoral y rama iliopubiana",
          "Curva continua y suave",
          "Arco roto o discontinuo"
        ]
      ]
    },
    "vignette": "Lactante femenina de 3 meses, nacida de término en presentación podálica. Acude a control sano en CESFAM. Al examen físico actual las caderas son estables y no se aprecian resaltos. Como parte de la Garantía Explícita en Salud (GES N° 23), se solicita radiografía de pelvis anteroposterior. El informe radiológico señala: líneas de Hilgenreiner y Perkin trazadas; núcleo de osificación de cadera derecha en cuadrante ínfero-interno con índice acetabular de 26°; en cadera izquierda, el extremo femoral proximal se sitúa en el cuadrante súpero-externo, con un índice acetabular de 38° y rotura del arco de Shenton.",
    "explicacion": "La paciente presenta factores de riesgo mayores de Displasia del Desarrollo de la Cadera (sexo femenino y presentación podálica). La radiografía de pelvis a los 3 meses (GES N° 23) demuestra en la cadera izquierda luxación o subluxación manifiesta (cabeza femoral en cuadrante súpero-externo de Ombredanne, índice acetabular marcadamente aumentado de 38° y discontinuidad del arco de Shenton). La conducta médica protocolizada es confirmar la garantía GES y derivar de inmediato a Traumatología/Ortopedia Infantil para instalación precoz de Correas de Pavlik, lo que permite la reducción concéntrica y remodelación acetabular sin necesidad de cirugía abierta.",
    "keyPoints": [
      "La radiografía de pelvis a los 3 meses (80-120 días) es una garantía GES universal para TODOS los lactantes en Chile.",
      "Maniobra de Ortolani: Reduce la cadera luxada mediante abducción ('clunk' palpable al entrar).",
      "Maniobra de Barlow: Luxa la cadera inestable mediante aducción y empuje posterior.",
      "En mayores de 3 meses, el signo más confiable es la limitación de la abducción (< 60°).",
      "Radiografía normal: Cabeza femoral en el cuadrante Ínfero-Interno e índice acetabular ≤ 30° a los 3 meses.",
      "El tratamiento de elección en menores de 6 meses son las Correas de Pavlik (flexión 90-100°, abducción 45-60°).",
      "Evitar la abducción forzada > 70° con Pavlik para prevenir la necrosis avascular de la cabeza femoral."
    ],
    "questions": [
      {
        "stem": "Durante el control de salud de un lactante de 2 meses se realiza el examen físico articular de caderas. El médico flexiona las caderas a 90° y al realizar una suave abducción de ambos muslos mientras presiona el trocánter mayor hacia adelante, percibe un resalto audible y palpable ('clunk') en la cadera izquierda que se reduce dentro del cotilo. ¿Cuál es el nombre de esta maniobra semiológica y su significado clínico?",
        "options": [
          {
            "id": "A",
            "text": "Maniobra de Barlow; indica cadera luxable hacia atrás"
          },
          {
            "id": "B",
            "text": "Maniobra de Ortolani; indica reducción de una cadera previamente luxada"
          },
          {
            "id": "C",
            "text": "Signo de Galeazzi; indica fractura del cuello femoral"
          },
          {
            "id": "D",
            "text": "Signo de Trendelenburg; indica parálisis del nervio ciático"
          },
          {
            "id": "E",
            "text": "Maniobra de Adams; indica escoliosis idiopática"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La maniobra de Barlow es aductora y luxadora (provoca la salida de la cabeza femoral).\nB) Correcta. La maniobra de Ortolani es una maniobra abductora y reductora. Al realizar la abducción de la cadera flexionada, la cabeza femoral que se encontraba luxada o subluxada fuera del acetábulo es guiada hacia adentro, percibiéndose un resalto o 'clunk' palpable y visible cuando entra en la cavidad acetabular. Es patognomónica de Displasia del Desarrollo de la Cadera inestable.\nC) Incorrecta. El signo de Galeazzi evalúa la altura asimétrica de las rodillas.\nD) Incorrecta. El signo de Trendelenburg evalúa la insuficiencia del glúteo medio en niños mayores que caminan.\nE) Incorrecta. Adams evalúa escoliosis.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.140"
      },
      {
        "stem": "Se revisa la radiografía de pelvis anteroposterior tomada a los 3 meses de vida a un lactante como parte del tamizaje GES. En la cadera derecha se constata: índice acetabular de 36° (normal ≤ 30°) y el núcleo de osificación femoral proximal se ubica en el cuadrante súpero-externo determinado por la intersección de las líneas de Hilgenreiner y Perkin. ¿Cuál es el tratamiento de primera línea de esta patología ortopédica?",
        "options": [
          {
            "id": "A",
            "text": "Kinesioterapia motora exclusiva dos veces por semana"
          },
          {
            "id": "B",
            "text": "Instalación de Correas o Arnés de Pavlik por traumatólogo infantil"
          },
          {
            "id": "C",
            "text": "Osteotomía femoral varizante desrotadora urgente en pabellón"
          },
          {
            "id": "D",
            "text": "Uso de doble pañal de tela grueso durante el día"
          },
          {
            "id": "E",
            "text": "Conducta expectante y repetir radiografía a los 12 meses cuando inicie la marcha"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La kinesioterapia no reduce la luxación articular ni corrige la displasia acetabular.\nB) Correcta. La radiografía confirma Displasia del Desarrollo de la Cadera con subluxación/luxación (índice acetabular > 30° y núcleo en cuadrante súpero-externo de Ombredanne). En lactantes menores de 6 meses, el tratamiento estándar de oro y de primera línea es la colocación de Correas o Arnés de Pavlik, que mantiene las caderas en posición de reducción concéntrica (flexión 90-100° y abducción 45-60°), logrando la corrección completa en más del 90-95% de los casos sin necesidad de cirugía invasiva.\nC) Incorrecta. La osteotomía se reserva para niños mayores de 18-24 meses o falla de tratamientos conservadores.\nD) Incorrecta. El uso de doble pañal es una práctica tradicional totalmente ineficaz que no mantiene las caderas en abducción estable y retrasa el diagnóstico.\nE) Incorrecta. Esperar a la marcha llevaría a cojera permanente, artrosis precoz y necesidad de cirugía mayor.",
        "recTag": "Banco Oficial AEE · Perfil V3 2.01.1.140"
      }
    ]
  }
];

const bloque4Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowPediatria(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque4Classes };
