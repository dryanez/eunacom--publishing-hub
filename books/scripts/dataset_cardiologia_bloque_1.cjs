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
    "ges": "Herramienta Diagnóstica Universal (Protocolo GES Urgencias)",
    "reconstrucciones": "EUNACOM 2024 (Q#14) &bull; EUNACOM 2023 (Q#22) &bull; EUNACOM 2022 (Q#08) &bull; EUNACOM 2021 (Q#45)",
    "frecuencia": "Alta Rentabilidad (Aparece en el 100% de los exámenes EUNACOM)",
    "svg": null,
    "algoTitle": null,
    "diagram": null,
    "contexto": "",
    "contentSections": [
      {
        "subhead": "1. Importancia del ECG en el Examen EUNACOM y la Práctica Médica Chilena",
        "paragraphs": [
          "El electrocardiograma (ECG) de 12 derivaciones es la prueba diagnóstica no invasiva más costo-efectiva en la medicina de urgencia y en la Atención Primaria de Salud (APS) en Chile. Según las exigencias de ASOFAMECh para el Perfil V3, el egresado de medicina debe tener un nivel de competencia de \"Realiza, Interpreta y Emplea\" el ECG en forma autónoma. Esto significa que ante un paciente que consulta en el SAPU, SAR o Servicio de Urgencia Hospitalario con dolor torácico, palpitaciones, síncope o disnea aguda, el médico debe ser capaz de tomar una decisión terapéutica en menos de 10 minutos basada en un análisis electrocardiográfico metódico y libre de sesgos (véase Figura 1.1: Algoritmo de Lectura Sistemática del ECG en Urgencias).",
          "El error más frecuente en el EUNACOM es \"saltar\" directamente a buscar el infarto o la arritmia más llamativa, pasando por alto alteraciones críticas como la prolongación del intervalo QT, los signos de hiperpotasemia incipiente o la preexcitación ventricular en reposo. Para garantizar un rendimiento del 100% en las preguntas clínicas, se debe aplicar rigurosamente una rutina secuencial estandarizada de 5 pasos (véase Tabla 1.1: Intervalos Electrocardiográficos, Valores Normales y Diagnósticos Clave)."
        ]
      },
      {
        "subhead": "2. Rutina Sistemática de Interpretación en 5 Pasos",
        "paragraphs": [
          "<strong>Paso 1: Frecuencia Cardíaca (FC).</strong> Se evalúa en primer lugar si el ritmo es regular o irregular. En ritmos regulares con velocidad de papel estándar (25 mm/s), se aplica la \"Regla de los 300\" (300 dividido por el número de cuadros grandes de 5 mm entre dos ondas R consecutivas: 1 cuadro = 300 lpm, 2 = 150 lpm, 3 = 100 lpm, 4 = 75 lpm, 5 = 60 lpm, 6 = 50 lpm). En ritmos irregulares (como en la Fibrilación Auricular), se cuentan los complejos QRS contenidos en 30 cuadros grandes (6 segundos) y se multiplica dicho número por 10. Se define Taquicardia como FC > 100 lpm y Bradicardia como FC < 60 lpm.",
          "<strong>Paso 2: Ritmo Cardíaco (Sinusal vs No Sinusal).</strong> Para certificar un Ritmo Sinusal Normal se deben cumplir obligatoriamente tres criterios: 1) Onda P positiva en derivaciones inferiores (DII, DIII, aVF) y negativa en aVR; 2) Toda onda P debe estar seguida de un complejo QRS; 3) El intervalo P-P y R-R debe ser constante. La ausencia de ondas P con línea de base irregular y R-R caótico define Fibrilación Auricular (véase Tema 1.3 y Figura 1.3: Algoritmo AF-CARE).",
          "<strong>Paso 3: Eje Eléctrico del QRS en el Plano Frontal.</strong> El eje normal se ubica entre -30° y +90°. La forma más rápida de evaluarlo en urgencias es observar DI y aVF: si ambos son positivos (deflexión predominantemente hacia arriba), el eje es NORMAL (entre 0° y +90°). Si DI es positivo y aVF es negativo, se mira DII: si DII es positivo, el eje es normal; si DII es negativo, hay Desviación del Eje a la Izquierda (< -30°), sugerente de Hemibloqueo Anterior Izquierdo o Hipertrofia Ventricular Izquierda. Si DI es negativo y aVF es positivo, hay Desviación del Eje a la Derecha (> +90°), sugerente de sobrecarga del ventrículo derecho, TEP o Hemibloqueo Posterior.",
          "<strong>Paso 4: Intervalos y Conducción Eléctrica.</strong> 1) Intervalo PR: Normal entre 120 ms (3 mm) y 200 ms (5 mm). PR > 200 ms define Bloqueo AV de 1er Grado; PR < 120 ms con onda delta define Síndrome de Preexcitación (Wolff-Parkinson-White); 2) Duración del QRS: Normal < 120 ms (< 3 mm). QRS ≥ 120 ms define Bloqueo Completo de Rama (BCRI vs BCRD); 3) Intervalo QT corregido (QTc): Calculado mediante la fórmula de Bazett (QT medido dividido por la raíz cuadrada del RR). Valor normal < 440 ms en hombres y < 460 ms en mujeres. QTc > 500 ms constituye una emergencia farmacológica por altísimo riesgo de inducir Torsades de Pointes (TV polimorfa) y muerte súbita.",
          "<strong>Paso 5: Segmento ST, Onda T y Onda Q (Isquemia, Lesión y Necrosis).</strong> Búsqueda de supradesnivel del ST (lesión transmural/SCACEST), infradesnivel del ST (isquemia subendocárdica), ondas T negativas simétricas o acuminadas (isquemia/hiperkalemia) y ondas Q patológicas (> 25% del voltaje del QRS o > 40 ms de duración, indicativas de necrosis miocárdica establecida)."
        ]
      },
      {
        "subhead": "3. Criterios de Hipertrofia y Daño de Órgano Blanco (HTA GES)",
        "paragraphs": [
          "En el marco del Programa de Salud Cardiovascular del MINSAL, la documentación de Hipertrofia Ventricular Izquierda (HVI) en el ECG califica al paciente hipertenso en la categoría de \"Alto Riesgo Cardiovascular\", modificando las metas terapéuticas a cifras más estrictas. Los dos índices electrocardiográficos evaluados en EUNACOM son:",
          "1) <strong>Índice de Sokolow-Lyon:</strong> Se suma la amplitud de la onda S en V1 más la amplitud de la onda R en V5 o V6 (la que sea mayor). Criterio positivo para HVI: <strong>S en V1 + R en V5/V6 ≥ 35 mm (3.5 mV)</strong>. En pacientes mayores de 35 años tiene una alta especificidad para sobrecarga ventricular izquierda crónica.",
          "2) <strong>Índice de Cornell:</strong> Amplitud de la onda R en aVL más la onda S en V3. Criterio positivo: <strong>> 28 mm en hombres</strong> o <strong>> 20 mm en mujeres</strong>."
        ]
      }
    ],
    "table": {
      "title": "Intervalos Electrocardiográficos, Valores Normales y Diagnósticos Clave EUNACOM",
      "headers": [
        "Parámetro",
        "Valor Normal",
        "Alteración Electrocardiográfica",
        "Significado Clínico / Diagnóstico EUNACOM"
      ],
      "rows": [
        [
          "Frecuencia Cardíaca",
          "60 a 100 lpm",
          "< 60 lpm / > 100 lpm",
          "Bradicardia Sinusal / Taquicardia Sinusal o Arritmia"
        ],
        [
          "Onda P",
          "< 120 ms y < 2.5 mm",
          "P picuda en DII (> 2.5 mm) / P ancha y mellada en DI (> 120 ms)",
          "Crecimiento Auricular Derecho (P pulmonar) / Crecimiento Auricular Izquierdo (P mitrale)"
        ],
        [
          "Intervalo PR",
          "120 a 200 ms (3 a 5 mm)",
          "PR > 200 ms constante / PR < 120 ms con onda delta",
          "Bloqueo AV de 1er Grado / Síndrome de Wolff-Parkinson-White"
        ],
        [
          "Complejo QRS",
          "< 120 ms (< 3 mm)",
          "QRS ≥ 120 ms con R ancha en V6 / QRS ≥ 120 ms con rsR' en V1",
          "Bloqueo Completo de Rama Izquierda (BCRI) / Bloqueo Completo de Rama Derecha (BCRD)"
        ],
        [
          "Intervalo QTc",
          "< 440 ms (H) / < 460 ms (M)",
          "QTc > 500 ms",
          "Riesgo inminente de Torsades de Pointes (TV Polimorfa)"
        ],
        [
          "Segmento ST",
          "Isoeléctrico",
          "Supra ST ≥ 1 mm en ≥ 2 derivaciones contiguas",
          "SCACEST (Protocolo Reperfusión GES Emergencia)"
        ]
      ]
    },
    "vignette": "Hombre de 48 años con antecedente de hipertensión arterial esencial de 8 años de evolución en tratamiento irregular consulta en CESFAM para control. Al examen físico: PA 155/95 mmHg, FC 74 lpm regular, sin soplos cardíacos ni rales pulmonares. El ECG de control en reposo muestra ritmo sinusal, onda S en V1 de 19 mm y onda R en V5 de 23 mm, con QRS de 90 ms y segmento ST isoeléctrico.",
    "explicacion": "El análisis metódico del ECG muestra un ritmo sinusal normal pero con criterios de voltaje aumentados para el ventrículo izquierdo. Al calcular el índice de Sokolow-Lyon (S en V1 de 19 mm + R en V5 de 23 mm = 42 mm), este supera ampliamente el umbral diagnóstico de 35 mm. Esto confirma Hipertrofia Ventricular Izquierda (HVI) como daño de órgano blanco secundario a HTA no controlada, lo que sitúa al paciente en riesgo cardiovascular alto e impone la intensificación inmediata del tratamiento antihipertensivo con terapia combinada en dosis fija (ej. IECA/ARA2 + Amlodipino).",
    "keyPoints": [
      "Lectura sistemática obligatoria en 5 pasos: Frecuencia → Ritmo → Eje → Intervalos (PR/QRS/QT) → Isquemia (ST/T).",
      "Índice de Sokolow-Lyon ≥ 35 mm (S en V1 + R en V5/V6) es el criterio de HVI más evaluado en el EUNACOM.",
      "La presencia de onda delta con PR corto define preexcitación ventricular (patrón de Wolff-Parkinson-White)."
    ],
    "questions": [
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
        "explicacion": "En el ritmo sinusal normal, la despolarización auricular se origina en el nodo sinusal (ubicado en la parte alta de la aurícula derecha) y se dirige hacia abajo y a la izquierda. Por ende, la onda P DEBE ser positiva en DII, DIII y aVF, y negativa en aVR. Una onda P negativa en DII indica un ritmo auricular bajo o ectópico.",
        "recTag": "Reconstrucción Oficial EUNACOM 2023 • Pregunta #22"
      }
    ],
    "_origen": "1.1§0 · 1.1§1 · 1.1§2",
    "_estado": "migrado"
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
    "ges": "Garantía Explícita en Salud (Atención de Urgencia Vital Inmediata)",
    "reconstrucciones": "EUNACOM 2024 (Q#03) &bull; EUNACOM 2023 (Q#18) &bull; EUNACOM 2022 (Q#51) &bull; EUNACOM 2020 (Q#72)",
    "frecuencia": "Alta Rentabilidad (Pregunta fija en el 100% de los exámenes)",
    "svg": "algo_pcr.svg",
    "algoTitle": "Algoritmo de Soporte Vital Cardiovascular Avanzado (ACLS)",
    "diagram": null,
    "contexto": "",
    "contentSections": [
      {
        "subhead": "1. Definición y Cadena de Supervivencia en el Adulto",
        "paragraphs": [
          "El Paro Cardiorrespiratorio (PCR) es la interrupción brusca, inesperada y potencialmente reversible de la actividad mecánica cardíaca y de la respiración espontánea. Clínicamente se define por la tríada clásica de: 1) Inconsciencia (no responde al llamado); 2) Ausencia de respiración o respiración agónica (\"gasping\"); 3) Ausencia de pulso carotídeo palpable verificado por personal de salud en un lapso de 5 a 10 segundos (nunca retrasar el inicio de compresiones más de 10 segundos).",
          "La Cadena de Supervivencia intrahospitalaria y extrahospitalaria en Chile comprende 6 eslabones críticos: Reconocimiento precoz y activación del sistema de emergencia (llamar al 131 SAMU / Código Azul) → RCP de alta calidad inmediata → Desfibrilación precoz → Soporte vital avanzado y transporte → Cuidados post-paro integrales → Recuperación."
        ]
      },
      {
        "subhead": "2. Parámetros Obligatorios de RCP de Alta Calidad",
        "paragraphs": [
          "La calidad de las compresiones torácicas es el factor fisiológico determinante del flujo sanguíneo coronario y cerebral durante el paro: 1) Frecuencia de compresión: 100 a 120 compresiones por minuto; 2) Profundidad: Al menos 5 cm (sin exceder los 6 cm en adultos); 3) Expansión torácica completa tras cada compresión (permitir el retorno elástico del tórax para asegurar el llenado ventricular); 4) Minimizar las interrupciones en las compresiones a menos de 10 segundos (fracción de compresión torácica > 80%); 5) Evitar la ventilación excesiva (1 ventilación cada 6 segundos en paciente con vía aérea avanzada, o relación 30:2 en paciente no intubado); 6) Rotar al reanimador cada 2 minutos para evitar la fatiga."
        ]
      },
      {
        "subhead": "3. PCR y RCP en el Hospital y en Otras Especialidades: Técnica, Causas Respiratorias y Perioperatorias, Cuidados Post-Paro",
        "paragraphs": [
          "<b>Técnica de la RCP que el médico general debe realizar (secuencia C-A-B):</b> 1) asegurar la escena y comprobar la respuesta; 2) pedir ayuda, activar el sistema de emergencia (131 o Código Azul) y solicitar el desfibrilador; 3) evaluar la respiración y el pulso carotídeo por <b>no más de 10 segundos</b>; 4) iniciar de inmediato <b>compresiones en la mitad inferior del esternón</b>, con el talón de una mano sobre la otra, brazos rectos, sobre una superficie firme; 5) abrir la vía aérea con extensión de cabeza y elevación del mentón (<b>tracción mandibular</b> si se sospecha lesión cervical) y ventilar con <b>bolsa-mascarilla y oxígeno a alto flujo</b>, 1 segundo por ventilación con elevación visible del tórax, en relación <b>30:2</b>; 6) encender el DEA o el monitor en cuanto llegue, colocar los parches y no tocar al paciente al analizar o descargar. Con vía aérea avanzada las compresiones son continuas con 1 ventilación cada 6 segundos. Se usa vía <b>intraósea</b> si no hay acceso venoso, y la <b>capnografía</b> guía la calidad de la RCP (CO₂ espirado < 10 mmHg indica compresiones ineficaces; un alza súbita sugiere retorno de circulación). La RCP no se inicia si hay una orden de no reanimar documentada o signos evidentes de muerte.",
          "<b>Paro de causa respiratoria o hipóxica:</b> en la asfixia, el ahogamiento, la obstrucción de la vía aérea, el asma grave, la EPOC descompensada y la sobredosis de opioides, el ritmo inicial suele ser <b>bradicardia progresiva que termina en asistolia o AESP</b> y no una fibrilación ventricular. Por eso en estos paros la <b>ventilación y la oxigenación</b> son tan importantes como las compresiones, y se trata la causa mientras se reanima: desobstruir la vía aérea, ventilar con O₂ al 100%, <b>naloxona</b> en intoxicación por opioides, descompresión del <b>neumotórax a tensión</b>, broncodilatadores y adrenalina en el asma casi fatal. La hipoxia es la causa reversible más frecuente de AESP.",
          "<b>Paro perioperatorio y de la anestesia:</b> ocurre en un paciente monitorizado, por lo que suele reconocerse por la caída brusca de la saturación, del CO₂ espirado o de la presión arterial. Las causas reversibles son: problemas de la <b>vía aérea</b> (laringoespasmo, intubación esofágica, aspiración); <b>hipovolemia o hemorragia</b>; <b>anafilaxia</b> (relajantes musculares, antibióticos, látex; se trata con adrenalina); <b>neumotórax a tensión</b>; <b>hiperkalemia</b> por succinilcolina en quemados o rabdomiólisis; <b>toxicidad por anestésico local</b> (bupivacaína; se agrega <b>emulsión lipídica al 20%</b>); <b>hipertermia maligna</b> (dantroleno) y embolia pulmonar, gaseosa o grasa. Se suspende el anestésico, se ventila con O₂ al 100% y se aplica el mismo algoritmo ACLS. En el postoperatorio inmediato de cirugía cardíaca se administran hasta 3 descargas consecutivas antes de comenzar las compresiones y se prepara la reapertura del esternón."
        ]
      }
    ],
    "table": null,
    "vignette": "",
    "explicacion": "",
    "keyPoints": [
      "Inmediatamente después de descargar, reanudar RCP por 2 minutos sin detenerse a chequear pulso."
    ],
    "questions": [],
    "_origen": "1.2§0 · 1.2§1 · 1.2§4p0,1,2",
    "_estado": "migrado"
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
    "ges": "Garantía Explícita en Salud (Atención de Urgencia Vital Inmediata)",
    "reconstrucciones": "EUNACOM 2024 (Q#03) &bull; EUNACOM 2023 (Q#18) &bull; EUNACOM 2022 (Q#51) &bull; EUNACOM 2020 (Q#72)",
    "frecuencia": "Alta Rentabilidad (Pregunta fija en el 100% de los exámenes)",
    "svg": "algo_urgencias.svg",
    "algoTitle": "Arritmia peri-paro en urgencias: inestable → cardioversión o marcapaso",
    "diagram": null,
    "contexto": "",
    "contentSections": [
      {
        "subhead": "1. Los Dos Grandes Algoritmos Terapéuticos ACLS",
        "paragraphs": [
          "Ante la llegada del monitor/desfibrilador, se debe clasificar el ritmo en una de las dos vías independientes:",
          "<strong>VÍA 1: RITMOS DESFIBRILABLES (Fibrilación Ventricular / Taquicardia Ventricular sin pulso).</strong> Representan el 70-80% de los paros extrahospitalarios presenciados. Tienen el mayor potencial de sobrevida si se desfibrila precozmente. Esquema de acción: 1) Descarga inmediata de 200 J bifásicos (o 360 J monofásico); 2) Reanudar RCP inmediatamente durante 2 minutos sin chequear pulso; 3) Evaluar ritmo a los 2 min: si persiste FV/TVsp → 2ª Descarga de 200 J + reanudar RCP + <strong>Adrenalina 1 mg EV</strong> (y repetir cada 3 a 5 minutos); 4) Si persiste FV/TVsp a los 4 min tras la 3ª Descarga → <strong>Amiodarona 300 mg EV en bolo</strong> (segunda dosis de 150 mg en la siguiente descarga) o Lidocaína (1-1.5 mg/kg).",
          "<strong>VÍA 2: RITMOS NO DESFIBRILABLES (Asistolia / Actividad Eléctrica Sin Pulso - AESP).</strong> La electricidad no es efectiva y está formalmente contraindicada (empeora el daño miocárdico). Esquema de acción: 1) RCP ininterrumpida de alta calidad; 2) <strong>Adrenalina 1 mg EV lo antes posible</strong> (en el primer minuto); 3) Búsqueda y corrección exhaustiva de las causas potencialmente reversibles (Regla de las 5H y 5T)."
        ]
      },
      {
        "subhead": "2. Diagnóstico Etiológico: Regla de las 5H y 5T",
        "paragraphs": [
          "La causa del paro debe identificarse y tratarse mientras se realiza el masaje:",
          "<strong>Las 5H:</strong> 1) <em>Hipovolemia</em> (shock hemorrágico, deshidratación → infusión masiva de cristaloides/sangre); 2) <em>Hipoxia</em> (obstrucción vía aérea → intubación y O₂ 100%); 3) <em>Hidrogeniones / Acidosis</em> (ventilación adecuada y bicarbonato solo si pH < 7.1 o intoxicación por tricíclicos); 4) <em>Hipo / Hiperkalemia</em> (Gluconato de Calcio al 10% EV inmediato en hiperkalemia con ensanchamiento del QRS); 5) <em>Hipotermia</em> (recalentamiento activo).",
          "<strong>Las 5T:</strong> 1) <em>Trombosis Coronaria (IAM)</em> → angioplastía de rescate post-RCE; 2) <em>Trombosis Pulmonar (TEP Masivo)</em> → trombólisis con Alteplasa en paro; 3) <em>Tensión Neumotórax</em> → descompresión inmediata con aguja en 2° EIC línea medioclavicular o 5° EIC línea axilar anterior; 4) <em>Taponamiento Cardíaco</em> → pericardiocentesis de urgencia; 5) <em>Tóxicos / Sobredosis</em> (Naloxona en opioides, Flumazenil, etc.)."
        ]
      },
      {
        "subhead": "3. PCR y RCP en el Hospital y en Otras Especialidades: Técnica, Causas Respiratorias y Perioperatorias, Cuidados Post-Paro",
        "paragraphs": [
          "<b>Cuidados post-paro (después de recuperar la circulación):</b> 1) mantener <b>SpO₂ entre 92 y 98%</b> (evitar la hiperoxia) y normocapnia; 2) mantener una <b>PAM ≥ 65 mmHg</b> con fluidos y vasopresores; 3) <b>ECG de 12 derivaciones</b> inmediato y <b>coronariografía urgente</b> si hay supradesnivel del ST; 4) controlar la temperatura (evitar la fiebre, con meta entre 32 y 37,5 °C) en el paciente que no obedece órdenes; 5) controlar la glicemia, tratar las convulsiones y corregir la causa del paro; y 6) postergar el pronóstico neurológico hasta al menos <b>72 horas</b> del evento. Todo paro se documenta y el paciente se traslada a una unidad de cuidados intensivos."
        ]
      }
    ],
    "table": {
      "title": "Resumen Comparativo de Fármacos y Manejo en Paro Cardiorrespiratorio (ACLS 2026)",
      "headers": [
        "Fármaco / Intervención",
        "Dosis Estándar en Adultos",
        "Momento de Administración",
        "Indicación / Vía ACLS"
      ],
      "rows": [
        [
          "Desfibrilación Eléctrica",
          "200 Joules (Bifásico)",
          "Minuto 0, Minuto 2, Minuto 4 (si persiste ritmo)",
          "Exclusivo para FV y TV sin pulso"
        ],
        [
          "Adrenalina (Epinefrina)",
          "1 mg EV en bolo (1:10.000) c/3-5 min",
          "Tras la 2ª descarga en FV/TVsp; INMEDIATA en Asistolia/AESP",
          "Todos los ritmos de paro cardiorrespiratorio"
        ],
        [
          "Amiodarona",
          "300 mg EV bolo (2ª dosis 150 mg)",
          "Tras la 3ª descarga no exitosa en FV/TVsp refractaria",
          "Exclusivo para FV y TV sin pulso"
        ],
        [
          "Lidocaína (Alternativa)",
          "1.0 a 1.5 mg/kg EV inicial",
          "Si no hay amiodarona disponible",
          "Exclusivo para FV y TV sin pulso refractaria"
        ],
        [
          "Gluconato de Calcio 10%",
          "10 a 20 mL EV en 2 a 5 min",
          "Ante sospecha de hiperkalemia o hipocalcemia",
          "Asistolia / AESP con QRS ancho o paciente en diálisis"
        ]
      ]
    },
    "vignette": "Hombre de 63 años con antecedente de insuficiencia renal crónica terminal en hemodiálisis sufre colapso brusco en el centro de diálisis. A la llegada del equipo de reanimación no responde, no respira y no tiene pulso carotídeo. El monitor electrocardiográfico muestra complejos QRS extremadamente anchos a 40 lpm con ondas T picudas gigantes, sin pulso palpable.",
    "explicacion": "El paciente se encuentra en Paro Cardiorrespiratorio en ritmo de Actividad Eléctrica Sin Pulso (AESP). No es un ritmo desfibrilable. La prioridad es la RCP continua y la administración inmediata de Adrenalina 1 mg EV. Dado el antecedente de ERC en diálisis y la morfología del ECG con QRS ancho y T picudas, la causa subyacente más probable es una Hiperkalemia severa (una de las 5H). El tratamiento específico y salvador que debe administrarse de inmediato durante la reanimación es Gluconato de Calcio al 10% endovenoso para estabilizar la membrana miocárdica, seguido de medidas de desplazamiento de potasio (Insulina con Glucosa y Bicarbonato de Sodio).",
    "keyPoints": [
      "Ritmos desfibrilables = FV y TV sin pulso. Tratamiento clave = Desfibrilación 200 J precoz.",
      "Adrenalina 1 mg EV se da tras la 2ª descarga en FV/TVsp, pero es de primera línea inmediata en Asistolia/AESP.",
      "Amiodarona 300 mg EV se administra tras la 3ª descarga en ritmos desfibrilables refractarios."
    ],
    "questions": [
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
        "explicacion": "La regla de oro del ACLS establece que inmediatamente después de administrar una descarga eléctrica, se deben reanudar las compresiones torácicas durante 2 minutos completos sin interrumpir para verificar el ritmo o el pulso. Chequear el pulso inmediatamente después del choque genera pausas innecesarias y el corazón recién desfibrilado requiere soporte hemodinámico mediante compresiones para recuperar el gasto cardíaco.",
        "recTag": "Reconstrucción Oficial EUNACOM 2025 • Pregunta #01"
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
            "text": "Administrar Adrenalina 1 mg endovenosa"
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
        "explicacion": "La asistolia es un ritmo no desfibrilable. La aplicación de descargas eléctricas en asistolia no tiene utilidad fisiológica, produce daño térmico miocárdico adicional y retrasa las compresiones torácicas efectivas, por lo que está formalmente contraindicada.",
        "recTag": "Reconstrucción Oficial EUNACOM 2024 • Pregunta #08"
      }
    ],
    "_origen": "1.2§2 · 1.2§3 · 1.2§4p3",
    "_estado": "migrado"
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
    "ges": "Patología GES (Fibrilación Auricular y Prevención Secundaria de ACV)",
    "reconstrucciones": "EUNACOM 2024 (Q#08, Q#32) &bull; EUNACOM 2023 (Q#12, Q#44) &bull; EUNACOM 2022 (Q#19) &bull; EUNACOM 2021 (Q#05)",
    "frecuencia": "Máxima Rentabilidad (2 a 4 preguntas por examen)",
    "svg": "algo_fa.svg",
    "algoTitle": "Estrategia Global AF-CARE y Manejo de Fibrilación Auricular",
    "diagram": null,
    "contexto": "",
    "contentSections": [
      {
        "subhead": "1. Epidemiología y Diagnóstico Electrocardiográfico",
        "paragraphs": [
          "La Fibrilación Auricular (FA) es la arritmia cardíaca sostenida más frecuente en la población adulta en Chile y en el mundo, afectando a más del 10% de los mayores de 80 años. Es responsable de 1 de cada 3 Accidentes Cerebrovasculares (ACV) isquémicos, los cuales son típicamente más extensos, discapacitantes y letales que los de origen aterotrombótico. En el ECG se caracteriza por: 1) Ausencia total de ondas P sinusales; 2) Presencia de oscilaciones basales rápidas e irregulares (ondas f a 350-600 cpm); 3) Intervalos R-R completamente irregulares (\"arritmia completa\")."
        ]
      },
      {
        "subhead": "2. Control de Frecuencia vs Control de Ritmo & Regla de las 48 Horas",
        "paragraphs": [
          "1) <strong>Control de Frecuencia Cardíaca</strong> (estrategia inicial en la mayoría, meta FC < 110 lpm en reposo): Betabloqueadores (Metoprolol, Bisoprolol, Carvedilol) o Calcioantagonistas no DHP (Verapamilo, Diltiazem). Si el paciente tiene IC con FEVI reducida, solo se usan Betabloqueadores o Digoxina (el Verapamilo está contraindicado en IC-FEr). 2) <strong>Control de Ritmo (Cardioversión eléctrica o farmacológica):</strong> En FA de reciente comienzo (< 48 horas de evolución) se puede cardiovertir de inmediato. Fármaco de elección en corazón estructuralmente sano: Antiarrítmicos Clase Ic (Flecainida 200-300 mg VO o Propafenona). Si el paciente tiene cardiopatía estructural, antecedente de infarto o IC: Flecainida está CONTRAINDICADA (produce arritmias ventriculares letales); el único fármaco seguro es la Amiodarona EV. 3) <strong>Regla de las 48 horas:</strong> Si la FA tiene > 48 horas de evolución (o tiempo indeterminado), está PROHIBIDO cardiovertir sin antes: Anticoagular 3 semanas previas con DOACs, o realizar un Ecocardiograma Transesofágico (ETE) para descartar trombos en la orejuela izquierda; y mantener anticoagulación por al menos 4 semanas post-cardioversión."
        ]
      },
      {
        "subhead": "3. Flutter Auricular (Aleteo Auricular)",
        "paragraphs": [
          "El Flutter Auricular es una macrorreentrada auricular alrededor del anillo tricuspídeo (istmo cavotricuspídeo). En el ECG se caracteriza por ondas \"F\" en dientes de sierra regulares a 300 cpm en derivaciones inferiores (DII, DIII, aVF) con conducción AV fija 2:1 (generando una taquicardia rítmica regular a 150 lpm exactos). La estratificación tromboembólica y anticoagulación siguen las mismas reglas que la FA. El tratamiento curativo definitivo de elección es la <strong>Ablación por Radiofrecuencia del istmo cavotricuspídeo</strong> con tasa de éxito > 95%."
        ]
      }
    ],
    "table": {
      "title": "Fármacos para Control de Frecuencia y de Ritmo en Fibrilación Auricular",
      "headers": [
        "Fármaco / Grupo",
        "Mecanismo / Dosis",
        "Indicación Clínica Principal",
        "Contraindicación / Advertencia Crítica"
      ],
      "rows": [
        [
          "Bisoprolol / Carvedilol",
          "Betabloqueadores orales",
          "Control de frecuencia 1ª línea (incluso en IC)",
          "Contraindicado en asma severa o bloqueo AV avanzado"
        ],
        [
          "Verapamilo / Diltiazem",
          "Calcioantagonistas No DHP",
          "Control de frecuencia en pacientes sin IC",
          "CONTRAINDICADO en IC-FEr (empeora fallo de bomba)"
        ],
        [
          "Flecainida / Propafenona",
          "Antiarrítmico Clase Ic",
          "Cardioversión farmacológica en corazón SANO",
          "ESTRICTAMENTE CONTRAINDICADO en infarto previo o IC"
        ],
        [
          "Amiodarona",
          "Antiarrítmico Clase III (EV / VO)",
          "Cardioversión en pacientes con daño estructural o IC",
          "Toxicidad pulmonar, tiroidea, hepática y corneal a largo plazo"
        ]
      ]
    },
    "vignette": "Hombre de 71 años hipertenso y con antecedente de infarto agudo al miocardio hace 2 años (FEVI 35%) consulta por palpitaciones de 4 horas de evolución. ECG: Fibrilación auricular con respuesta ventricular rápida a 140 lpm. PA 130/80 mmHg, sin dolor torácico ni signos de shock. El médico de turno decide realizar cardioversión farmacológica.",
    "explicacion": "El paciente presenta una FA de < 48 horas de evolución, pero tiene como antecedente una cardiopatía estructural severa (infarto previo y FEVI reducida al 35%). En este escenario, los antiarrítmicos Clase Ic como la Flecainida y la Propafenona están formalmente contraindicados por inducir taquicardia ventricular y muerte. El único fármaco antiarrítmico seguro y de elección para cardioversión química en cardiopatía isquémica o disfunción ventricular es la Amiodarona endovenosa. Además, por su score CHA₂DS₂-VASc de 4 (Edad 71: 1, HTA: 1, IAM: 1, IC-FEr: 1), debe quedar con anticoagulación oral permanente con DOACs.",
    "keyPoints": [
      "En cardiopatía estructural o infarto previo, la Flecainida está contraindicada; se debe usar Amiodarona.",
      "Si la FA tiene > 48 horas de duración, se debe anticoagular 3 semanas antes de cardiovertir para evitar embolia cerebral."
    ],
    "questions": [],
    "_origen": "1.3§0 · 1.3§3 · 1.3§4",
    "_estado": "migrado"
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
    "ges": "Patología GES (Fibrilación Auricular y Prevención Secundaria de ACV)",
    "reconstrucciones": "EUNACOM 2024 (Q#08, Q#32) &bull; EUNACOM 2023 (Q#12, Q#44) &bull; EUNACOM 2022 (Q#19) &bull; EUNACOM 2021 (Q#05)",
    "frecuencia": "Máxima Rentabilidad (2 a 4 preguntas por examen)",
    "svg": null,
    "algoTitle": null,
    "diagram": null,
    "contexto": "",
    "contentSections": [
      {
        "subhead": "1. Estratificación del Riesgo Tromboembólico: Score CHA₂DS₂-VASc",
        "paragraphs": [
          "Todo paciente con FA no valvular debe ser estratificado para definir la necesidad de Anticoagulación Oral (ACO) permanente mediante el score CHA₂DS₂-VASc: <strong>C</strong>ongestive Heart Failure (IC / FEVI ≤ 40%): 1 pt; <strong>H</strong>ipertensión arterial: 1 pt; <strong>A</strong>ge ≥ 75 años: 2 pts; <strong>D</strong>iabetes Mellitus: 1 pt; <strong>S</strong>troke / AIT / Tromboembolismo previo: 2 pts; <strong>V</strong>ascular disease (infarto previo, EAP, placa aórtica): 1 pt; <strong>A</strong>ge 65-74 años: 1 pt; <strong>Sc</strong> Sex category (femenino): 1 pt. <em>Conducta según puntuación:</em> Hombres ≥ 2 puntos o Mujeres ≥ 3 puntos → Anticoagulación Oral OBLIGATORIA de por vida. Hombres = 1 o Mujeres = 2 → Considerar anticoagulación. Hombres = 0 o Mujeres = 1 → No anticoagular. REGLA PROHIBIDA: La Aspirina está formalmente CONTRAINDICADA como monoterapia para prevenir embolias en FA (no reduce ACV y aumenta riesgo de sangrado digestivo)."
        ]
      },
      {
        "subhead": "2. Selección del Anticoagulante: DOACs vs Antagonistas de Vitamina K",
        "paragraphs": [
          "Los Anticoagulantes Orales Directos (DOACs: Apixabán 5 mg c/12h, Rivaroxabán 20 mg/día, Dabigatrán 150 mg c/12h) son la primera línea recomendada por el MINSAL y guías internacionales por su mayor eficacia en reducir ACV, reducción del 50% en hemorragia intracraneal y no requerir controles de laboratorio. Excepciones donde los DOACs están estrictamente CONTRAINDICADOS: 1) Estenosis Mitral Reumática moderada o severa; 2) Prótesis Valvulares Cardíacas Mecánicas. En estos dos escenarios la única opción autorizada es el Acenocumarol o Warfarina con meta de INR entre 2.0 y 3.0 (o 2.5 a 3.5 en prótesis mecánicas aórticas/mitrales)."
        ]
      }
    ],
    "table": {
      "title": "Anticoagulantes Orales en Fibrilación Auricular",
      "headers": [
        "Fármaco / Grupo",
        "Mecanismo / Dosis",
        "Indicación Clínica Principal",
        "Contraindicación / Advertencia Crítica"
      ],
      "rows": [
        [
          "Apixabán (DOAC)",
          "Inhibidor Factor Xa (5 mg c/12h)",
          "Anticoagulación 1ª línea en FA no valvular",
          "Contraindicado en Estenosis Mitral Reumática o Válvula Mecánica"
        ],
        [
          "Acenocumarol / Warfarina",
          "Antagonista Vitamina K (Meta INR 2-3)",
          "FA valvular reumática y Prótesis Mecánicas",
          "Requiere controles seriados de INR y ajuste dietético"
        ]
      ]
    },
    "vignette": "",
    "explicacion": "",
    "keyPoints": [
      "CHA₂DS₂-VASc ≥ 2 en hombres o ≥ 3 en mujeres = Anticoagulación Oral obligatoria con DOACs.",
      "Aspirina está contraindicada para profilaxis de ACV en FA."
    ],
    "questions": [
      {
        "stem": "Mujer de 76 años con antecedentes de hipertensión arterial y diabetes mellitus tipo 2 acude a control en APS. Se encuentra asintomática. Al examen: pulso irregular a 84 lpm. ECG confirma fibrilación auricular crónica no valvular. ¿Cuál es la conducta terapéutica más adecuada respecto a la prevención de eventos tromboembólicos?",
        "options": [
          {
            "id": "A",
            "text": "Iniciar anticoagulación oral permanente con un anticoagulante oral directo (DOAC)"
          },
          {
            "id": "B",
            "text": "Indicar Aspirina 100 mg al día en monoterapia"
          },
          {
            "id": "C",
            "text": "Indicar terapia combinada de Aspirina más Clopidogrel"
          },
          {
            "id": "D",
            "text": "No indicar anticoagulación por encontrarse en frecuencia cardíaca controlada"
          },
          {
            "id": "E",
            "text": "Realizar cardioversión eléctrica ambulatoria inmediata"
          }
        ],
        "correcta": "A",
        "explicacion": "La paciente presenta un puntaje CHA₂DS₂-VASc de 5 (Edad ≥ 75: 2 pts, HTA: 1 pt, DM: 1 pt, Sexo femenino: 1 pt), lo que confiere un riesgo tromboembólico anual > 6-8%. La indicación obligatoria según guías MINSAL y protocolos GES es la Anticoagulación Oral continua con DOACs (Apixabán, Rivaroxabán o Dabigatrán). La aspirina no previene el ACV embólico y no debe utilizarse.",
        "recTag": "Reconstrucción Oficial EUNACOM 2025 • Pregunta #33"
      },
      {
        "stem": "Hombre de 60 años portador de una prótesis valvular mecánica mitral consulta por fibrilación auricular. ¿Cuál es el tratamiento anticoagulante de elección?",
        "options": [
          {
            "id": "A",
            "text": "Acenocumarol o Warfarina con meta de INR entre 2.5 y 3.5"
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
        "explicacion": "Las prótesis valvulares cardíacas mecánicas constituyen una contraindicación absoluta para el uso de DOACs (ensayos clínicos demostraron mayor tasa de trombosis protésica y sangrado con dabigatrán/rivaroxabán). El único tratamiento anticoagulante validado y seguro son los antagonistas de vitamina K (Acenocumarol/Warfarina) con meta de INR estricta de 2.5 a 3.5 para válvulas mecánicas mitrales.",
        "recTag": "Reconstrucción Oficial EUNACOM 2024 • Pregunta #19"
      }
    ],
    "_origen": "1.3§1 · 1.3§2",
    "_estado": "migrado"
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
    "ges": "No GES",
    "reconstrucciones": "EUNACOM 2024 (Q#21) &bull; EUNACOM 2023 (Q#39) &bull; EUNACOM 2022 (Q#14) &bull; EUNACOM 2020 (Q#28)",
    "frecuencia": "Alta Rentabilidad (Pregunta fija anual de urgencias)",
    "svg": "algo_tpsv.svg",
    "algoTitle": "Algoritmo de Manejo de TPSV y Síndrome de Wolff-Parkinson-White",
    "diagram": null,
    "contexto": "",
    "contentSections": [
      {
        "subhead": "1. Mecanismos Fisiopatológicos de las Taquicardias Paroxísticas Supraventriculares",
        "paragraphs": [
          "La Taquicardia Paroxística Supraventricular (TPSV) es una arritmia de inicio y término súbito (\"paroxístico\") producida por un circuito de reentrada. En el 60% de los casos corresponde a <strong>Taquicardia por Reentrada Nodal (TRN)</strong>, debida a la existencia de dos vías electrofisiológicas en el nodo AV: una vía lenta (con período refractario corto) y una vía rápida (con período refractario largo). En el 30% corresponde a <strong>Taquicardia por Reentrada Auriculoventricular (TRAV)</strong> a través de una vía accesoria anómala (Haz de Kent en el Síndrome de Wolff-Parkinson-White). En el ECG de la crisis se observa: Taquicardia de complejo QRS estrecho (< 120 ms), regular, a frecuencias de 150 a 220 lpm, con ondas P ocultas dentro del QRS o visibles como una pseudo-r' en V1 o pseudo-s en derivaciones inferiores."
        ]
      },
      {
        "subhead": "2. Manejo Escalonado de la TPSV en Paciente Hemodinámicamente Estable",
        "paragraphs": [
          "Ante un paciente vigil, bien perfundido y con PA normal en el SAPU o Urgencia, se sigue un algoritmo escalonado estricto: 1) <strong>Maniobras Vagales (1ª Línea):</strong> La técnica más efectiva es la <em>Maniobra de Valsalva Modificada</em> (el paciente sentado sopla en una jeringa de 10 mL hasta mover el émbolo o alcanzar 40 mmHg de presión durante 15 segundos, e inmediatamente se le acuesta en decúbito supino elevando sus piernas pasivamente a 45° durante 15 segundos). Revierte hasta el 45% de los episodios; 2) <strong>Adenosina Endovenosa (2ª Línea):</strong> Si las maniobras vagales fallan, se administra Adenosina 6 mg EV en bolo ultrarrápido (en 1-2 segundos) a través de una vía venosa antecubital de grueso calibre, seguido inmediatamente de un \"flush\" de 20 mL de suero fisiológico y elevación del brazo. Si no revierte en 2 minutos, se administra un segundo bolo de 12 mg EV; 3) <strong>Calcioantagonistas No DHP o Betabloqueadores (3ª Línea):</strong> Verapamilo 5 a 10 mg EV lento en 2 minutos."
        ]
      },
      {
        "subhead": "3. Síndrome de Wolff-Parkinson-White (WPW) y Peligro de Muerte Súbita",
        "paragraphs": [
          "El Síndrome de Wolff-Parkinson-White se define por la presencia de preexcitación ventricular en el ECG de ritmo sinusal más episodios de taquiarritmias sintomáticas. <em>Tríada ECG de preexcitación:</em> 1) Intervalo PR corto (< 120 ms); 2) Onda Delta (empastamiento inicial en la rama ascendente del QRS); 3) Ensanchamiento del complejo QRS (> 120 ms)."
        ]
      },
      {
        "subhead": "4. Fibrilación Auricular Preexcitada: Fármacos Rigurosamente Prohibidos",
        "paragraphs": [
          "La complicación más letal del WPW es el desarrollo de Fibrilación Auricular con conducción anterógrada rápida por el haz de Kent (FA preexcitada). Se manifiesta en el ECG como una taquicardia de <strong>complejo ancho, totalmente irregular, con frecuencias extremas que superan los 200 a 250 lpm</strong>. En este cuadro clínico están <strong>ESTRICTAMENTE PROHIBIDOS TODOS LOS FÁRMACOS QUE FRENAN EL NODO AV: Adenosina, Verapamilo, Diltiazem, Digoxina y Betabloqueadores</strong>. Al bloquear el nodo AV, la totalidad de los 300-600 impulsos auriculares caóticos se desvían a través de la vía accesoria de conducción ultrarrápida, induciendo Fibrilación Ventricular y paro cardíaco inmediato. TRATAMIENTO: Cardioversión Eléctrica Sincronizada inmediata (o Procainamida EV en paciente estable). El tratamiento curativo definitivo es la <strong>Ablación por Radiofrecuencia de la vía accesoria</strong>."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial y Contraindicaciones Absolutas en Taquicardias de Urgencia",
      "headers": [
        "Tipo de Taquicardia",
        "Ritmo / Complejo QRS",
        "Manejo de 1ª Elección (Estable)",
        "FÁRMACOS CONTRAINDICADOS"
      ],
      "rows": [
        [
          "TPSV Reentrada Nodal",
          "Regular / QRS Estrecho (< 120 ms)",
          "Valsalva modificada → Adenosina 6 mg EV",
          "Antiarrítmicos orales sin monitorización"
        ],
        [
          "FA con WPW (Preexcitada)",
          "IRREGULAR / QRS Ancho (> 120 ms)",
          "Cardioversión Eléctrica / Procainamida",
          "Verapamilo, Digoxina, Adenosina, Betabloqueadores"
        ],
        [
          "Flutter Auricular 2:1",
          "Regular a 150 lpm / QRS Estrecho",
          "Betabloqueador / Ablación por RF",
          "Cardioversión sin descartar trombo si > 48h"
        ]
      ]
    },
    "vignette": "Mujer de 24 años con antecedente de palpitaciones ocasionales consulta en urgencias por palpitaciones intensas, mareos y disnea. ECG muestra taquicardia con complejos QRS anchos de 150 ms, con morfología variable y ritmo totalmente irregular a 220 lpm. PA 105/65 mmHg. El interno de medicina propone administrar Verapamilo 5 mg EV.",
    "explicacion": "La presencia de una taquicardia de complejo QRS ancho, ritmo totalmente irregular y frecuencia superior a 200 lpm en una mujer joven es diagnóstica de Fibrilación Auricular preexcitada a través de una vía accesoria (Síndrome de Wolff-Parkinson-White). La propuesta de administrar Verapamilo (o adenosina, digoxina o betabloqueadores) es un error médico gravísimo y potencialmente mortal: los bloqueadores del nodo AV conducen preferencialmente todos los impulsos por el haz de Kent, provocando degeneración a Fibrilación Ventricular y muerte súbita. La conducta médica correcta es la Cardioversión Eléctrica Sincronizada o administración de Procainamida.",
    "keyPoints": [
      "TPSV estable = Maniobras vagales (Valsalva modificada) → Adenosina 6 mg EV en bolo rápido.",
      "Tríada de WPW en ritmo sinusal: PR corto (< 120 ms) + Onda Delta + QRS ancho.",
      "En FA preexcitada (WPW) están PROHIBIDOS: Verapamilo, Digoxina, Adenosina y Betabloqueadores.",
      "El tratamiento definitivo curativo del WPW y de la TPSV recidivante es la Ablación por Radiofrecuencia."
    ],
    "questions": [
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
            "text": "Digoxina 0.5 mg en infusión lenta"
          },
          {
            "id": "E",
            "text": "Lidocaína 100 mg endovenosa"
          }
        ],
        "correcta": "A",
        "explicacion": "La Adenosina tiene una vida media ultracorta (< 10 segundos). Para que alcance concentraciones terapéuticas en el nodo AV, debe inyectarse en bolo ultrarrápido (1-2 segundos) en una vena periférica proximal, seguido de un bolo de lavado de 20 mL de solución fisiológica y elevación del brazo. La dosis inicial es de 6 mg.",
        "recTag": "Reconstrucción Oficial EUNACOM 2024 • Pregunta #45"
      },
      {
        "stem": "¿Cuál de los siguientes fármacos antiarrítmicos puede desencadenar fibrilación ventricular y paro cardíaco si se administra a un paciente con fibrilación auricular preexcitada (Wolff-Parkinson-White)?",
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
            "text": "Sulfato de Magnesio"
          },
          {
            "id": "E",
            "text": "Quinidina"
          }
        ],
        "correcta": "A",
        "explicacion": "El Verapamilo es un bloqueador de los canales de calcio no dihidropiridínico que bloquea la conducción en el nodo auriculoventricular sin afectar la vía accesoria. Al suprimir el freno nodal, los impulsos auriculares caóticos pasan sin resistencia por la vía accesoria rápida hacia los ventrículos, gatillando Fibrilación Ventricular.",
        "recTag": "Reconstrucción Oficial EUNACOM 2023 • Pregunta #12"
      }
    ],
    "_origen": "1.4§0 · 1.4§1 · 1.4§2 · 1.4§3",
    "_estado": "migrado"
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
    "ges": "No GES",
    "reconstrucciones": "EUNACOM 2024 (Q#21) &bull; EUNACOM 2023 (Q#39) &bull; EUNACOM 2022 (Q#14) &bull; EUNACOM 2020 (Q#28)",
    "frecuencia": "Alta Rentabilidad (Pregunta fija anual de urgencias)",
    "svg": "algo_tv.svg",
    "algoTitle": "Diagnóstico Diferencial y Manejo de las Miocardiopatías",
    "diagram": null,
    "contexto": "",
    "contentSections": [
      {
        "subhead": "1. Taquicardia de Complejo Ancho: Asumir Taquicardia Ventricular",
        "paragraphs": [
          "Toda taquicardia regular de <strong>QRS ancho (≥ 120 ms)</strong> se considera <strong>taquicardia ventricular (TV) hasta demostrar lo contrario</strong>, sobre todo si hay cardiopatía estructural o infarto previo. La primera pregunta es siempre si el paciente tiene pulso y si está estable: sin pulso se trata como paro (desfibrilación, ver Tema 1.3); con pulso e inestabilidad (hipotensión, compromiso de conciencia, dolor torácico isquémico o edema pulmonar) se indica <strong>cardioversión eléctrica sincronizada inmediata</strong>.",
          "En la TV estable el fármaco de elección es la <strong>amiodarona 150 mg EV en 10 minutos</strong>. El <strong>verapamilo está contraindicado</strong> en toda taquicardia de complejo ancho: si la arritmia es ventricular provoca colapso hemodinámico."
        ]
      },
      {
        "subhead": "2. QT Largo y Torsión de Puntas",
        "paragraphs": [
          "El QT corregido (QTc, fórmula de Bazett) es normal bajo 440 ms en hombres y 460 ms en mujeres; un <strong>QTc > 500 ms</strong> es el umbral de alarma para torsión de puntas. Las causas adquiridas más preguntadas son fármacos (macrólidos, quinolonas, antipsicóticos, ondansetrón, metadona, antiarrítmicos clase IA y III) y la hipokalemia, hipomagnesemia o hipocalcemia.",
          "Conducta: suspender el fármaco causante, monitorizar y corregir los electrolitos. La torsión de puntas se trata con <strong>sulfato de magnesio 2 g EV</strong>; si degenera en fibrilación ventricular, desfibrilación."
        ]
      }
    ],
    "table": {
      "title": "Taquicardia Ventricular: Reconocimiento y Manejo de Urgencia",
      "headers": [
        "Tipo de Taquicardia",
        "Ritmo / Complejo QRS",
        "Manejo de 1ª Elección (Estable)",
        "FÁRMACOS CONTRAINDICADOS"
      ],
      "rows": [
        [
          "Taquicardia Ventricular (TV)",
          "Regular / QRS Ancho (> 120 ms)",
          "Amiodarona 150 mg EV / Cardioversión",
          "Verapamilo (provoca shock hemodinámico letal)"
        ]
      ]
    },
    "vignette": "",
    "explicacion": "",
    "keyPoints": [
      "QTc > 500 ms es el límite de alarma para arritmias ventriculares por fármacos (ej. macrólidos, antiarrítmicos, psicofármacos).",
      "Taquicardia regular de QRS ancho = TV hasta demostrar lo contrario; verapamilo contraindicado.",
      "TV con pulso e inestable = cardioversión eléctrica sincronizada inmediata; estable = amiodarona 150 mg EV.",
      "Torsión de puntas = sulfato de magnesio 2 g EV y suspender el fármaco que alarga el QT."
    ],
    "questions": [
      {
        "stem": "Hombre de 52 años en tratamiento con claritromicina por neumonía presenta palpitaciones y mareos. El ECG revela ritmo sinusal a 75 lpm, intervalo QT medido de 520 ms y RR de 800 ms (QTc calculado de 581 ms mediante fórmula de Bazett). ¿Cuál es la conducta médica inmediata más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Suspender de inmediato la claritromicina, monitorizar al paciente y corregir eventuales trastornos hidroelectrolíticos"
          },
          {
            "id": "B",
            "text": "Iniciar Amiodarona endovenosa para prevenir taquiarritmias"
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
        "explicacion": "Un QTc > 500 ms representa un riesgo crítico de inducir Torsades de Pointes y fibrilación ventricular. La medida mandatoria es suspender inmediatamente el fármaco causante (los macrólidos como la claritromicina prolongan el QT), monitorizar el ritmo cardíaco y asegurar niveles plasmáticos normales de potasio y magnesio. La amiodarona prolongaría aún más el QT y está contraindicada.",
        "recTag": "Reconstrucción Oficial EUNACOM 2024 • Pregunta #14"
      }
    ],
    "_origen": "nuevo (borrador inicial)",
    "_estado": "borrador"
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
    "ges": "Patología GES #24 (Tratamiento Quirúrgico de Lesiones Valvulares y Marcapasos en Bloqueos AV)",
    "reconstrucciones": "EUNACOM 2024 (Q#17) &bull; EUNACOM 2023 (Q#25) &bull; EUNACOM 2022 (Q#42) &bull; EUNACOM 2021 (Q#33)",
    "frecuencia": "Alta Rentabilidad (Pregunta obligatoria de indicación de marcapaso GES)",
    "svg": "algo_bav.svg",
    "algoTitle": "Algoritmo Diagnóstico y Terapéutico de Bloqueos AV y Bradicardias",
    "diagram": null,
    "contexto": "",
    "contentSections": [
      {
        "subhead": "1. Clasificación Anatómica y Electrocardiográfica de los Bloqueos AV",
        "paragraphs": [
          "Los Bloqueos Auriculoventriculares (BAV) representan una alteración en la propagación del impulso eléctrico desde las aurículas hacia los ventrículos a través del nodo AV o del sistema His-Purkinje: 1) <strong>BAV de 1er Grado:</strong> Retraso constante de la conducción. Intervalo PR > 200 ms (5 mm), constante, donde TODAS las ondas P conducen y van seguidas de un QRS. Es de localización nodal y benigno; 2) <strong>BAV de 2° Grado Mobitz I (Fenómeno de Wenckebach):</strong> Prolongación progresiva del intervalo PR en cada latido hasta que una onda P se bloquea y no genera QRS; el ciclo se reinicia. Localización nodal, generalmente asintomático y no progresa a bloqueo completo; 3) <strong>BAV de 2° Grado Mobitz II:</strong> Intervalos PR constantes (normales o alargados) con fallo intermitente e impredecible de la conducción (ondas P bloqueadas sin alargamiento previo). Localización infranodal (Haz de His o ramas), alto riesgo de progresión a asistolia o síncope; 4) <strong>BAV de 3er Grado o Completo:</strong> Interrupción total de la conducción auriculoventricular. Existe <em>disociación AV completa</em>: las aurículas laten a su frecuencia sinusal (ondas P a 60-80 cpm) y los ventrículos son comandados por un marcapaso de escape ventricular o nodal bajo (QRS ancho a 30-40 cpm), latiendo en forma totalmente independiente."
        ]
      },
      {
        "subhead": "2. Manifestaciones Clínicas y Síndrome de Stokes-Adams",
        "paragraphs": [
          "Los bloqueos de alto grado (Mobitz II y BAV 3°) se manifiestan clínicamente por bajo gasto cardíaco: astenia severa, mareos, disnea de esfuerzo, angina e insuficiencia cardíaca. El <strong>Síndrome de Morgagni-Adams-Stokes</strong> es la pérdida súbita y transitoria de la conciencia (síncope cardiogénico) por asistolia ventricular transitoria o bradicardia extrema, con recuperación rápida sin déficit neurológico focal."
        ]
      },
      {
        "subhead": "3. Manejo de Urgencias de la Bradicardia Inestable",
        "paragraphs": [
          "Ante una bradicardia sintomática con compromiso hemodinámico (hipotensión arterial, shock, alteración de conciencia, dolor torácico isquémico o edema pulmonar agudo): 1) <strong>Atropina (1ª Línea farmacológica):</strong> Dosis de 1 mg EV en bolo directo cada 3 a 5 minutos (hasta dosis máxima acumulada de 3 mg). Es muy efectiva en bloqueos suprahisianos/nodales (Mobitz I), pero poco efectiva en bloqueos infranodales (Mobitz II y BAV 3°); 2) <strong>Estimulación Eléctrica Transcutánea (Marcapaso Externo):</strong> Si la atropina falla o en bloqueos de alto grado inestables, instalar parches de marcapaso transcutáneo de inmediato fijando frecuencia a 60-70 lpm y subiendo miliamperios hasta lograr captura mecánica con pulso palpable; 3) <strong>Drogas Vasoactivas en Infusión:</strong> Infusión de Adrenalina (2 a 10 mcg/min) o Dopamina (5 a 20 mcg/kg/min); 4) <strong>Marcapaso Transitorio Transvenoso:</strong> Instalación de catéter marcapaso por vía venosa central (femoral o yugular) como puente definitivo."
        ]
      },
      {
        "subhead": "4. Criterios de Implante de Marcapaso Definitivo GES en Chile",
        "paragraphs": [
          "Bajo la garantía GES chilena, tienen indicación formal y perentoria de <strong>Implante de Marcapaso Definitivo</strong>: 1) Bloqueo AV de 3er Grado (completo) sintomático o asintomático con pausas ventriculares > 3 segundos o escape < 40 lpm; 2) Bloqueo AV de 2° Grado Mobitz II; 3) Enfermedad del Nodo Sinusal sintomática (Síndrome de Taquicardia-Bradicardia); 4) Bloqueo bifascicular o trifascicular con síncope."
        ]
      }
    ],
    "table": {
      "title": "Clasificación de Bloqueos AV, Hallazgos Electrocardiográficos y Conducta Terapéutica",
      "headers": [
        "Tipo de Bloqueo AV",
        "Patrón en el ECG",
        "Nivel Anatómico de la Lesión",
        "Tratamiento Definitivo (GES)"
      ],
      "rows": [
        [
          "BAV 1er Grado",
          "PR > 200 ms constante, todas las P conducen",
          "Nodo AV (Suprahisiano)",
          "No requiere marcapaso (Control médico)"
        ],
        [
          "BAV 2° Mobitz I (Wenckebach)",
          "PR se alarga progresivamente hasta que una P no conduce",
          "Nodo AV (Suprahisiano)",
          "Observación (Marcapaso solo si hay síntomas graves)"
        ],
        [
          "BAV 2° Mobitz II",
          "PR constante con ondas P bloqueadas súbitas",
          "His-Purkinje (Infranodal)",
          "MARCAPASO DEFINITIVO GES OBLIGATORIO"
        ],
        [
          "BAV 3er Grado (Completo)",
          "Disociación AV total (P y QRS laten independientes)",
          "Infranodal / His-Purkinje",
          "MARCAPASO DEFINITIVO GES OBLIGATORIO"
        ],
        [
          "Síndrome Taqui-Bradi",
          "Bradicardia sinusal severa alternada con FA",
          "Nodo Sinusal",
          "Marcapaso Definitivo + Fármacos frenadores"
        ]
      ]
    },
    "vignette": "Hombre de 81 años es traído a urgencias tras sufrir dos caídas con pérdida de conciencia breve mientras caminaba en su casa. Al examen físico: vigil, pálido, PA 85/45 mmHg, FC 32 lpm. El ECG muestra ondas P regulares a 78 cpm y complejos QRS anchos regulares a 32 cpm, sin ninguna correlación matemática ni fija entre el intervalo PR y los complejos QRS.",
    "explicacion": "El cuadro corresponde a un Bloqueo Auriculoventricular Completo de 3er Grado que genera síncopes cardiogénicos por bajo gasto (crisis de Stokes-Adams). La conducta en urgencias es: 1) Monitorización continua y aporte de oxígeno; 2) Administrar Atropina 1 mg EV como medida puente y preparar parches de marcapaso transcutáneo; 3) Hospitalizar en Unidad de Cuidados Intermedios/Coronaria para instalación de Marcapaso Transitorio; 4) Activar garantía GES para implante de Marcapaso Definitivo bicameral.",
    "keyPoints": [
      "BAV 2° Mobitz II y BAV 3er Grado son indicación obligatoria de Marcapaso Definitivo GES.",
      "La disociación AV (ondas P y complejos QRS independientes) es el sello patognomónico del BAV completo.",
      "La Atropina (1 mg EV) es útil en bloqueos suprahisianos/nodales, pero inefectiva en bloqueos infranodales.",
      "Síncope brusco en paciente con bradicardia severa define el Síndrome de Stokes-Adams."
    ],
    "questions": [
      {
        "stem": "Hombre de 76 años consulta por astenia y mareos de 3 días. El ECG revela ondas P a 70 lpm e intervalos PR de 160 ms constantes, pero cada tres ondas P, una no es seguida de complejo QRS sin que haya existido alargamiento previo del PR. El complejo QRS mide 130 ms. ¿Cuál es el diagnóstico y la conducta definitiva?",
        "options": [
          {
            "id": "A",
            "text": "Bloqueo AV de 2° grado Mobitz II; requiere implante de marcapaso definitivo"
          },
          {
            "id": "B",
            "text": "Bloqueo AV de 2° grado Mobitz I; requiere observación ambulatoria"
          },
          {
            "id": "C",
            "text": "Bloqueo AV de 1er grado; requiere suspender fármacos cronótropos"
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
        "explicacion": "El bloqueo intermitente de ondas P sin prolongación previa del intervalo PR define un Bloqueo AV de 2° Grado Mobitz II. Debido a que la lesión se encuentra en el sistema His-Purkinje infranodal, existe un alto riesgo de progresión a bloqueo completo y muerte súbita, por lo que tiene indicación formal de Marcapaso Definitivo.",
        "recTag": "Reconstrucción Oficial EUNACOM 2025 • Pregunta #10"
      },
      {
        "stem": "Paciente de 85 años ingresa a SAPU en shock cardiogénico con FC de 28 lpm por BAV de tercer grado. Se administra Atropina 1 mg EV sin respuesta de la frecuencia cardíaca ni de la presión arterial. ¿Cuál es el paso inmediato que debe realizar el médico tratante?",
        "options": [
          {
            "id": "A",
            "text": "Instalar marcapaso externo transcutáneo e iniciar infusión de Adrenalina"
          },
          {
            "id": "B",
            "text": "Repetir Atropina hasta completar 6 mg"
          },
          {
            "id": "C",
            "text": "Administrar Amiodarona 300 mg endovenosa"
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
        "explicacion": "En una bradiarritmia con inestabilidad hemodinámica que no responde a la dosis inicial de atropina, la conducta de emergencia perentoria es la estimulación eléctrica mediante marcapaso transcutáneo externo asociada al inicio de drogas vasoactivas (Adrenalina o Dopamina) mientras se prepara el marcapaso transvenoso.",
        "recTag": "Reconstrucción Oficial EUNACOM 2024 • Pregunta #27"
      }
    ],
    "_origen": "1.5§0 · 1.5§1 · 1.5§2 · 1.5§3",
    "_estado": "migrado"
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
    "ges": "Sin garantía GES específica · se resuelve en atención primaria con derivación si hay banderas rojas",
    "reconstrucciones": "EUNACOM Diciembre 2017 (Q#7)",
    "frecuencia": "Rentabilidad media · palpitaciones con corazón sano: tranquilizar; Holter de 24 horas para correlacionar síntomas con el ritmo y cuantificar la carga",
    "svg": null,
    "algoTitle": null,
    "diagram": null,
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
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.011",
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
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.4.014",
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
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.011",
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
    "_origen": "1.6§0 · 1.6§1 · 1.6§2",
    "_estado": "migrado"
  }
];

module.exports = { bloque1 };
