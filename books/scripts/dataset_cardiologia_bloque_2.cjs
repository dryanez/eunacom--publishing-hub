/**
 * Tomo 01 · Cardiología — Bloque 2: Cardiopatía Coronaria
 * Formato estándar (igual que dataset_endocrinologia_bloque_*.cjs). Migrado desde los 25 temas antiguos
 * (books/scripts/_old_cardio/) por _old_cardio/migrar_a_38_temas.cjs; `_origen` indica de dónde viene cada sección.
 * `_estado`: 'migrado' (contenido antiguo sin reescribir) · 'borrador' (tema nuevo, contenido mínimo) · 'estandar' (reescrito al estándar).
 */
const bloque2 = [
  {
    "id": "cardio-10",
    "classId": "cardio-10",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Cardiopatía Coronaria",
    "topicLabel": "2.1",
    "title": "Dolor Torácico Agudo en Urgencias: Enfoque Inicial y Diagnósticos que No se Pueden Pasar",
    "perfilCode": "1.01.4.007, 1.01.4.009",
    "dx": "No aplica",
    "tx": "No aplica",
    "seg": "No aplica",
    "ges": "Garantía Explícita en Salud (GES N.º 5): Infarto Agudo del Miocardio (el ECG ante la sospecha es parte de la garantía)",
    "reconstrucciones": "",
    "frecuencia": "Máxima · ECG en ≤ 10 minutos, lectura de la troponina ultrasensible y diferencial de los cinco diagnósticos letales del dolor torácico",
    "svg": null,
    "algoTitle": "Dolor torácico agudo en urgencias: ECG en 10 minutos y diagnósticos letales",
    "diagram": {
      "title": "Dolor Torácico Agudo en Urgencias: ECG en 10 Minutos y Diagnósticos Letales",
      "svg": "<svg viewBox=\"0 0 620 470\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar21\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar21)}\n  </style>\n  <rect class=\"b\" x=\"100\" y=\"6\" width=\"420\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"21\" text-anchor=\"middle\" font-weight=\"700\">Dolor torácico agudo en urgencias</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Monitor, signos vitales en ambos brazos, SatO₂, vía venosa</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"dec\" x=\"90\" y=\"58\" width=\"440\" height=\"42\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\">ECG de 12 derivaciones en ≤ 10 minutos + troponina ultrasensible</text>\n  <text class=\"sub\" x=\"310\" y=\"86\" text-anchor=\"middle\">Rx de tórax · anamnesis dirigida: carácter, irradiación, relación con respiración y postura</text>\n  <path class=\"ln\" d=\"M310,100 V116\"/>\n  <rect class=\"dec\" x=\"90\" y=\"116\" width=\"440\" height=\"32\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"131\" text-anchor=\"middle\" font-weight=\"700\">¿Supradesnivel del ST o BCRI nuevo?</text>\n  <text class=\"lbl\" x=\"80\" y=\"140\" text-anchor=\"end\">No</text>\n  <text class=\"lbl\" x=\"318\" y=\"158\" text-anchor=\"start\">Sí</text>\n  <path class=\"ln\" d=\"M310,148 V164\"/>\n  <rect class=\"acc\" x=\"70\" y=\"164\" width=\"480\" height=\"34\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"179\" text-anchor=\"middle\" font-weight=\"700\">SCACEST: reperfusión sin esperar la troponina (Tema 2.5)</text>\n  <text class=\"accS\" x=\"310\" y=\"192\" text-anchor=\"middle\">Angioplastía primaria ≤ 120 min o fibrinólisis ≤ 30 min</text>\n  <path class=\"ln\" d=\"M90,132 H40 V222\"/>\n  <rect class=\"warn\" x=\"12\" y=\"222\" width=\"596\" height=\"40\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"237\" text-anchor=\"middle\" font-weight=\"700\">Antes de pensar en el corazón: descarta los letales según la clínica</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"250\" text-anchor=\"middle\">Disección · TEP · neumotórax a tensión · rotura esofágica · taponamiento</text>\n  <path class=\"ln\" d=\"M310,262 V276\"/>\n  <rect class=\"b\" x=\"12\" y=\"276\" width=\"190\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"107\" y=\"291\" text-anchor=\"middle\" font-weight=\"700\">Hallazgo guía</text>\n  <text class=\"sub\" x=\"107\" y=\"304\" text-anchor=\"middle\">Pulsos asimétricos → angioTAC</text>\n  <text class=\"sub\" x=\"107\" y=\"315\" text-anchor=\"middle\">Disnea súbita + riesgo → Wells</text>\n  <text class=\"sub\" x=\"107\" y=\"326\" text-anchor=\"middle\">Vómito + enfisema → TAC</text>\n  <text class=\"sub\" x=\"107\" y=\"337\" text-anchor=\"middle\">Hipotensión + yugular → eco</text>\n  <rect class=\"dec\" x=\"214\" y=\"276\" width=\"190\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"309\" y=\"291\" text-anchor=\"middle\" font-weight=\"700\">Troponina seriada 0/1 h</text>\n  <text class=\"sub\" x=\"309\" y=\"304\" text-anchor=\"middle\">Sube y cae → IAMSEST (Tema 2.4)</text>\n  <text class=\"sub\" x=\"309\" y=\"315\" text-anchor=\"middle\">Normal + dolor inestable →</text>\n  <text class=\"sub\" x=\"309\" y=\"326\" text-anchor=\"middle\">angina inestable (Tema 2.4)</text>\n  <text class=\"sub\" x=\"309\" y=\"337\" text-anchor=\"middle\">Normal y bajo riesgo → alta</text>\n  <rect class=\"b\" x=\"416\" y=\"276\" width=\"192\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"512\" y=\"291\" text-anchor=\"middle\" font-weight=\"700\">Sin causa letal</text>\n  <text class=\"sub\" x=\"512\" y=\"304\" text-anchor=\"middle\">Pericarditis (ST cóncavo difuso)</text>\n  <text class=\"sub\" x=\"512\" y=\"315\" text-anchor=\"middle\">Esofágico · osteomuscular</text>\n  <text class=\"sub\" x=\"512\" y=\"326\" text-anchor=\"middle\">Angina estable → ergometría</text>\n  <text class=\"sub\" x=\"512\" y=\"337\" text-anchor=\"middle\">(Tema 2.2)</text>\n  <path class=\"ln\" d=\"M107,338 V356\"/>\n  <path class=\"ln\" d=\"M309,338 V356\"/>\n  <path class=\"ln\" d=\"M512,338 V356\"/>\n  <rect class=\"acc\" x=\"12\" y=\"356\" width=\"596\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"371\" text-anchor=\"middle\" font-weight=\"700\">Regla de oro</text>\n  <text class=\"accS\" x=\"310\" y=\"384\" text-anchor=\"middle\">Un ECG normal y una troponina normal únicas NO descartan angina inestable ni disección:</text>\n  <text class=\"accS\" x=\"310\" y=\"395\" text-anchor=\"middle\">se repiten, y la clínica decide qué letal se busca con imagen</text>\n\n</svg>"
    },
    "contexto": "El dolor torácico es uno de los motivos de consulta más frecuentes en un SAPU, un SAR o un servicio de urgencia, y el médico general es quien debe decidir en minutos si el paciente puede esperar o se muere en la sala. Casi todo el EUNACOM de cardiología parte de aquí: el electrocardiograma que se toma sin esperar, la troponina que se interpreta por su curva y los cinco diagnósticos que no se pueden pasar por alto (infarto, disección aórtica, embolia pulmonar, neumotórax a tensión y rotura esofágica). Este tema ordena el enfoque y reparte el camino hacia los temas que siguen.",
    "contentSections": [
      {
        "subhead": "1. Primer contacto: ECG en 10 Minutos y las Preguntas que Ordenan el Cuadro",
        "paragraphs": [
          "Ante todo dolor torácico agudo, la primera acción es un <strong>electrocardiograma de 12 derivaciones tomado e interpretado en ≤ 10 minutos</strong> desde el primer contacto médico: es una meta de la garantía GES del infarto (problema N.º 5) y define de inmediato si hay un supradesnivel del ST que obliga a reperfundir (Tema 2.5). En paralelo se <strong>monitoriza</strong> al paciente (con el desfibrilador al alcance), se instala una vía venosa, se mide la saturación de oxígeno y se toman <strong>la presión arterial en ambos brazos</strong> y los pulsos de las cuatro extremidades: una diferencia de presión entre los brazos mayor de 20 mmHg o un pulso asimétrico apunta a una disección aórtica. Se pide troponina ultrasensible y una radiografía de tórax, que no cambia la conducta del infarto pero sí encuentra el neumotórax, el ensanchamiento mediastínico, el aire mediastínico y la neumonía.",
          "La anamnesis hace la mitad del diagnóstico. El dolor <strong>opresivo, retroesternal, de más de 20 minutos, irradiado al brazo, el cuello o la mandíbula, con diaforesis</strong>, es isquémico. El dolor <strong>«desgarrante», de inicio máximo y súbito, irradiado a la espalda o al abdomen</strong>, es una disección hasta demostrar lo contrario. El dolor <strong>pleurítico</strong> (empeora al inspirar) con disnea y taquicardia lleva a pensar en embolia pulmonar o neumotórax; el que <strong>mejora al inclinarse hacia adelante y empeora al acostarse</strong> es el de la pericarditis; el que aparece <strong>tras vómitos intensos</strong> es la rotura esofágica; el que se reproduce al presionar la pared torácica es osteomuscular. Se pregunta siempre por los factores de riesgo coronario, el consumo de cocaína, el embarazo o el puerperio, las cirugías o inmovilizaciones recientes y los antecedentes de Marfán, hipertensión mal controlada y cáncer."
        ]
      },
      {
        "subhead": "2. El ECG en el Dolor Torácico: lo que Muestra y lo que no Descarta",
        "paragraphs": [
          "El ECG es un examen que el médico general <strong>realiza, interpreta y emplea</strong> (nivel oficial del Perfil EUNACOM). En el dolor torácico se busca, en este orden: 1) <strong>supradesnivel del ST en ≥ 2 derivaciones contiguas</strong> o bloqueo completo de rama izquierda nuevo (SCACEST: se reperfunde sin esperar la troponina; criterios y territorios en el Tema 2.5); 2) <strong>infradesnivel del ST o inversión de la onda T</strong>, que sugieren isquemia sin oclusión total (Tema 2.4); 3) <strong>ondas T hiperagudas</strong> (altas, anchas y simétricas), que pueden ser el primer signo de un infarto en los primeros minutos y obligan a repetir el trazado; 4) signos de otras causas: supradesnivel cóncavo y difuso con descenso del PR (pericarditis), taquicardia sinusal con patrón S1Q3T3 o bloqueo de rama derecha nuevo (embolia pulmonar, poco sensible), voltajes bajos con alternancia eléctrica (derrame pericárdico).",
          "Un ECG normal <strong>no descarta</strong> un síndrome coronario agudo: hasta una parte de los infartos sin supradesnivel y la mayoría de las anginas inestables tienen un primer trazado normal o inespecífico. Por eso, si el dolor persiste o la sospecha es alta, el ECG se <strong>repite cada 15 a 30 minutos</strong>, se agregan las derivaciones posteriores (V7-V9) cuando hay infradesnivel de V1-V3 con R altas, y las derechas (V3R-V4R) en el infarto inferior. Un ECG con supradesnivel tampoco es siempre un infarto: la repolarización precoz, la pericarditis, el aneurisma ventricular, la hipertrofia ventricular izquierda, el Brugada y la hiperkalemia lo imitan.",
          "El ECG sirve además para otras urgencias que el médico general ve a diario: en el <strong>síncope de un adulto mayor con frecuencia cardíaca de 40 latidos por minuto y sin pródromo</strong>, el examen inicial es el electrocardiograma (bloqueo AV, enfermedad del nodo, hiperkalemia), no la imagen cerebral ni el Holter; este último se reserva para las arritmias intermitentes que el trazado de reposo no captó."
        ]
      },
      {
        "subhead": "3. Troponina Ultrasensible: Cinética, Algoritmos y Causas de Elevación",
        "paragraphs": [
          "La <strong>troponina cardíaca ultrasensible (hs-cTn I o T)</strong> es el biomarcador de elección de necrosis miocárdica (nivel oficial: interpreta y emplea). Comienza a subir 1 a 3 horas después del inicio de la necrosis con los ensayos ultrasensibles, alcanza su máximo a las 12-24 horas y se mantiene elevada <strong>7 a 14 días</strong>, lo que la hace útil para diagnosticar un infarto de varios días de evolución. La CK-MB (que sube a las 4-6 horas y se normaliza en 48-72 horas) y la LDH quedaron obsoletas para el diagnóstico; la CK-MB conserva algún uso para detectar un reinfarto precoz. El diagnóstico de infarto exige un <strong>ascenso o descenso de la troponina con al menos un valor sobre el percentil 99</strong> más evidencia de isquemia (síntomas, cambios del ECG, alteración segmentaria o trombo en la coronariografía).",
          "Se interpreta <strong>por su curva, no por un valor aislado</strong>, con algoritmos rápidos de 0 y 1 hora (o 0 y 3 horas): un valor basal muy bajo en un paciente con más de 3 horas de dolor, o un valor bajo sin cambio significativo (delta) a la hora, permite <strong>descartar</strong> el infarto con un valor predictivo negativo cercano al 99%; un valor basal muy alto o un delta marcado lo <strong>confirma</strong>; los casos intermedios se observan y se repite la medición a las 3 horas. Los umbrales exactos dependen del ensayo del laboratorio. Una troponina normal en las primeras horas <strong>no descarta angina inestable</strong>, que por definición no eleva biomarcadores, y el SCACEST <strong>no espera</strong> la troponina para reperfundir.",
          "Una troponina elevada <strong>no siempre es un infarto</strong>. Una elevación estable y persistente sin curva sugiere daño crónico (insuficiencia renal, insuficiencia cardíaca, cardiopatía estructural); una elevación aguda con curva puede deberse a miocarditis, pericarditis con compromiso miocárdico, embolia pulmonar, sepsis, taquiarritmias, crisis hipertensiva, disección aórtica con compromiso coronario o miocardiopatía de estrés (Takotsubo). El infarto tipo 1 es el aterotrombótico; el tipo 2 se debe a un desbalance entre aporte y demanda de oxígeno (anemia grave, hipotensión, taquiarritmia)."
        ]
      },
      {
        "subhead": "4. Los Cinco Diagnósticos Letales (y el Taponamiento)",
        "paragraphs": [
          "Mientras se descarta el síndrome coronario agudo, hay que pensar en cuatro diagnósticos más que matan en horas y que el examen de urgencia clásico exige reconocer; el taponamiento cardíaco completa la lista (Tabla 2.1.A).",
          "<strong>Disección aórtica.</strong> Dolor torácico de inicio súbito, «desgarrante» o transfixiante, que migra hacia la espalda, en un hipertenso mal controlado, un portador de Marfán (o de otra enfermedad del tejido conectivo) o una embarazada o puérpera. Hay <strong>asimetría de pulsos o de presión arterial entre los brazos</strong>, a veces un <strong>soplo diastólico de insuficiencia aórtica</strong> nuevo, síncope o déficit neurológico, y la radiografía puede mostrar un mediastino ensanchado. El ECG es normal o inespecífico (si la disección compromete la coronaria derecha puede simular un infarto inferior), y la troponina puede estar pendiente o normal. El examen de elección es el <strong>angioTAC de aorta</strong> (el ecocardiograma transesofágico si el paciente está inestable); se controlan de inmediato la frecuencia cardíaca y la presión con betabloqueo endovenoso (PAS 100-120 mmHg), la de tipo A (ascendente) va a cirugía urgente y <strong>nunca se anticoagula ni se fibrinoliza</strong>: tratarla como infarto puede ser fatal (Tema 5.7).",
          "<strong>Tromboembolismo pulmonar.</strong> Disnea y dolor pleurítico de inicio súbito, con taquicardia e hipoxemia, en un paciente con factores de trombosis (inmovilización, cirugía, cáncer, anticonceptivos, embarazo, trombosis venosa profunda, <strong>síndrome nefrótico</strong>). Se estima la probabilidad clínica con el puntaje de Wells; si es baja o intermedia, un dímero D normal descarta la enfermedad; si es alta o el dímero está elevado, se hace un <strong>angioTAC de arterias pulmonares</strong>. El ECG suele mostrar solo taquicardia sinusal (el patrón S1Q3T3 es específico pero poco sensible). La anticoagulación empírica se inicia mientras se confirma si la sospecha es alta (Tema 5.9).",
          "<strong>Neumotórax a tensión.</strong> Dolor pleurítico y disnea progresiva con hipotensión, ingurgitación yugular, taquicardia, <strong>ausencia de murmullo pulmonar e hiperresonancia</strong> en un hemitórax y desviación de la tráquea hacia el lado sano. Es un diagnóstico clínico: <strong>se descomprime de inmediato con aguja</strong> (segundo espacio intercostal en la línea medioclavicular o quinto en la línea axilar anterior) y luego se instala un tubo pleural, sin esperar la radiografía. El neumotórax simple, en cambio, se ve en la radiografía como una línea pleural visceral con ausencia de trama vascular periférica.",
          "<strong>Rotura esofágica (síndrome de Boerhaave).</strong> Dolor torácico o epigástrico intenso <strong>tras vómitos o arcadas violentas</strong>, con enfisema subcutáneo en el cuello, fiebre y shock progresivo; puede auscultarse el crujido de Hamman (crujidos sincrónicos con el latido por aire mediastínico). La radiografía muestra aire mediastínico y a veces derrame pleural izquierdo; se confirma con TAC con contraste oral o esofagograma con contraste hidrosoluble. Requiere antibióticos, ayuno y reparación quirúrgica precoz: la mortalidad crece con cada hora de retraso.",
          "<strong>Taponamiento cardíaco.</strong> Hipotensión, ingurgitación yugular y ruidos cardíacos apagados (tríada de Beck) con pulso paradójico, por un derrame pericárdico a tensión (pericarditis, neoplasia, trauma, rotura cardíaca tras un infarto). El ecocardiograma confirma el derrame y la compresión de las cavidades derechas, y la pericardiocentesis es la conducta (Tema 5.6)."
        ]
      },
      {
        "subhead": "5. Dolor Torácico que no es Letal pero se Pregunta",
        "paragraphs": [
          "<strong>Pericarditis aguda:</strong> dolor pleurítico o punzante, que <strong>mejora al sentarse e inclinarse hacia adelante</strong> y empeora al acostarse o al inspirar, a veces con roce pericárdico y antecedente viral. El ECG muestra <strong>supradesnivel cóncavo y difuso del ST en casi todas las derivaciones con descenso del segmento PR</strong>, sin imagen especular ni territorio: esa es la diferencia con el infarto (Tema 5.5). <strong>Esofágico:</strong> el espasmo esofágico y el reflujo dan dolor retroesternal opresivo relacionado con la comida o el decúbito, a veces calma con nitroglicerina (por eso no se usa la respuesta a la nitroglicerina como prueba diagnóstica). <strong>Osteomuscular</strong> (costocondritis): dolor localizado y reproducible a la palpación. <strong>Neumonía o pleuritis</strong>: fiebre, tos y dolor pleurítico. <strong>Herpes zóster</strong>: dolor urente en un dermatoma antes de la erupción. <strong>Ansiedad</strong>: diagnóstico de exclusión.",
          "Dentro de los cuadros coronarios no obstructivos, el <strong>joven que consume cocaína</strong> puede tener vasoespasmo y trombosis (los betabloqueadores están contraindicados), y la <strong>angina de Prinzmetal</strong> da dolor en reposo de madrugada con supradesnivel transitorio (Tema 2.6). El dolor con esfuerzo, de menos de 20 minutos y que cede en reposo es una angina estable y se estudia con ergometría (Tema 2.2)."
        ]
      },
      {
        "subhead": "6. Estratificación y Destino del Paciente",
        "paragraphs": [
          "Con el ECG y la troponina seriada el paciente cae en uno de cuatro caminos: 1) <strong>supradesnivel o equivalente</strong>: SCACEST, reperfusión inmediata (Tema 2.5); 2) <strong>troponina que sube y cae sin supradesnivel</strong>: infarto sin supradesnivel (IAMSEST), hospitalización y estrategia invasiva precoz (Tema 2.4); 3) <strong>troponina normal con dolor de reposo o crescendo y cambios del ECG</strong>: angina inestable, se maneja como SCASEST (Tema 2.4); 4) <strong>ECG y troponina seriados normales con dolor de bajo riesgo</strong>: se puede dar de alta con estudio ambulatorio de isquemia (ergometría; Tema 2.2). Las escalas de riesgo (HEART, TIMI, GRACE) ayudan a decidir: una puntuación HEART de 0 a 3 permite el alta precoz, de 4 a 6 la observación y estudio, y de 7 o más la hospitalización con estrategia invasiva.",
          "Se hospitaliza y se deriva a un centro con unidad coronaria a todo paciente con isquemia en curso, troponina elevada, inestabilidad hemodinámica o sospecha de uno de los diagnósticos letales. El alta desde urgencia solo es segura con dolor atípico, ECG normal repetido, troponina ultrasensible normal en la curva y un plan de estudio ambulatorio explícito."
        ]
      }
    ],
    "table": {
      "title": "Tabla 2.1.A · Diagnósticos Letales del Dolor Torácico: Clave Clínica, Examen de Elección y Conducta Inicial",
      "headers": [
        "Diagnóstico",
        "Clave clínica",
        "Examen de elección",
        "Conducta inicial"
      ],
      "rows": [
        [
          "SCA (infarto, angina inestable)",
          "Opresivo > 20 min, irradiado, diaforesis; factores de riesgo",
          "ECG ≤ 10 min + troponina seriada",
          "SDST → reperfusión; SCASEST → Tema 2.4"
        ],
        [
          "Disección aórtica",
          "Desgarrante, a la espalda; pulsos o PA asimétricos; soplo diastólico",
          "AngioTAC de aorta (ETE si inestable)",
          "Betabloqueo EV, PAS 100-120; tipo A: cirugía; nunca fibrinolizar"
        ],
        [
          "Embolia pulmonar",
          "Disnea y dolor pleurítico súbitos, taquicardia, factores de trombosis",
          "Wells + dímero D; angioTAC de arterias pulmonares",
          "Anticoagulación (empírica si probabilidad alta)"
        ],
        [
          "Neumotórax a tensión",
          "Hipotensión, yugulares, sin murmullo, hiperresonancia, tráquea desviada",
          "Clínico (la Rx no debe retrasar)",
          "Descompresión con aguja y tubo pleural"
        ],
        [
          "Rotura esofágica (Boerhaave)",
          "Dolor tras vómitos; enfisema subcutáneo; fiebre",
          "TAC con contraste oral o esofagograma",
          "Ayuno, antibióticos, cirugía precoz"
        ],
        [
          "Taponamiento cardíaco",
          "Tríada de Beck, pulso paradójico",
          "Ecocardiograma",
          "Pericardiocentesis"
        ]
      ]
    },
    "vignette": "Hombre de 52 años, hipertenso con mal control, consulta en un servicio de urgencia por dolor torácico de inicio súbito hace 40 minutos, «como un puñal», irradiado a la región interescapular, con sudoración y mareo. PA 190/100 mmHg en el brazo derecho y 145/80 mmHg en el izquierdo, FC 105 lpm, SatO₂ 96%. Se ausculta un soplo diastólico aórtico II/VI que no estaba descrito. El ECG muestra taquicardia sinusal con signos de hipertrofia ventricular izquierda, sin supradesnivel del ST; la troponina está pendiente.",
    "explicacion": "Dolor súbito, desgarrante, a la espalda en un hipertenso, con asimetría de presión entre los brazos y un soplo diastólico de insuficiencia aórtica nuevo: es una disección aórtica hasta demostrar lo contrario. Se confirma con angioTAC de aorta (o ecocardiograma transesofágico si se inestabiliza); mientras tanto se controlan la frecuencia cardíaca y la presión con betabloqueo endovenoso (PAS 100-120 mmHg), y si es de tipo A (ascendente) va a cirugía urgente. No se debe anticoagular, antiagregar ni fibrinolizar como si fuera un infarto, y no se espera la troponina para pedir la imagen.",
    "keyPoints": [
      "Todo dolor torácico agudo: ECG de 12 derivaciones en ≤ 10 minutos, monitor, PA en ambos brazos y troponina; el SCACEST se reperfunde sin esperar la troponina.",
      "Un ECG normal no descarta un SCA: se repite cada 15-30 min y se agregan V7-V9 y V3R-V4R según el caso.",
      "La troponina ultrasensible se interpreta por su curva (0/1 h); una sola troponina normal no descarta angina inestable, y una elevación estable sin curva sugiere daño crónico.",
      "Letales: SCA, disección aórtica, embolia pulmonar, neumotórax a tensión y rotura esofágica; el taponamiento completa la lista.",
      "Disección: dolor desgarrante, pulsos o PA asimétricos, soplo diastólico → angioTAC; betabloqueo EV; jamás fibrinolizar ni anticoagular.",
      "Neumotórax a tensión: diagnóstico clínico, descompresión inmediata con aguja sin esperar la radiografía.",
      "Pericarditis: dolor que mejora al inclinarse, supradesnivel cóncavo y difuso con PR descendido y sin imagen especular.",
      "En el síncope de un adulto mayor con bradicardia, el primer examen es el ECG de reposo."
    ],
    "questions": [
      {
        "stem": "Paciente de 50 años, con antecedente de hipertensión en tratamiento irregular con hidroclorotiazida, consulta por dolor torácico de 30 minutos de duración, transfixiante, irradiado a epigastrio, asociado a mareos y diaforesis. Al examen se aprecia pálido, sudoroso, PA 150/90, FC: 110x’, saturación de oxígeno de 93% con FiO2 ambiental, ritmo regular, asociado a soplo diastólico II/ VI y disminución del segundo ruido, abdomen blando, depresible e indoloro, ruidos hidroaéreos presentes. Al ingreso se solicita ECG que muestra alteraciones inespecíficas en pared anterolateral, además troponinas que están con resultado pendiente. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Disección aórtica"
          },
          {
            "id": "B",
            "text": "Infarto agudo al miocardio sin supradesnivel de ST"
          },
          {
            "id": "C",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "D",
            "text": "Infarto mesentérico"
          },
          {
            "id": "E",
            "text": "Pancreatitis aguda"
          }
        ],
        "correcta": "A",
        "explicacion": "Dolor transfixiante en un hipertenso mal controlado, con soplo diastólico y disminución del segundo ruido (insuficiencia aórtica aguda) y un ECG sin supradesnivel con troponina pendiente: es una disección aórtica, no un infarto sin supradesnivel. El soplo diastólico de insuficiencia aórtica es la clave; se confirma con angioTAC y se evita la anticoagulación y la fibrinólisis.",
        "recTag": "EUNACOM Julio 2013 · Pregunta 16"
      },
      {
        "stem": "Una paciente de 30 años, con antecedente de enfermedad de Marfán, puérpera hace un mes, consulta por dolor torácico precordial, opresivo, irradiado al dorso, EVA 8/10. Al examen físico tiene. Su electrocardiograma muestra taquicardia sinusal, sin otras alteraciones. El examen de elección para iniciar el enfrentamiento de esta paciente es:",
        "options": [
          {
            "id": "A",
            "text": "Coronariografía"
          },
          {
            "id": "B",
            "text": "Ecocardiograma transtorácico"
          },
          {
            "id": "C",
            "text": "Dímero D"
          },
          {
            "id": "D",
            "text": "AngioTAC de tórax"
          },
          {
            "id": "E",
            "text": "Test de esfuerzo"
          }
        ],
        "correcta": "D",
        "explicacion": "Portadora de síndrome de Marfán y puérpera con dolor torácico que irradia al dorso: la sospecha es disección aórtica (los dos factores predisponen), y el examen de elección es el angioTAC de tórax. La taquicardia sinusal es inespecífica; el dímero D busca embolia pulmonar y la coronariografía o el test de esfuerzo no corresponden.",
        "recTag": "EUNACOM Julio 2019 · Pregunta 76"
      },
      {
        "stem": "Paciente con dolor torácico retroesternal, antecedente de RGE, en buenas condiciones. ECG con elevación difusa del ST en silla de montar. ¿Diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "SCA con elevación del ST (SCACEST)"
          },
          {
            "id": "B",
            "text": "Angina inestable"
          },
          {
            "id": "C",
            "text": "Miocarditis aguda viral"
          },
          {
            "id": "D",
            "text": "Pericarditis aguda"
          },
          {
            "id": "E",
            "text": "Espasmo coronario (angina de Prinzmetal)"
          }
        ],
        "correcta": "D",
        "explicacion": "Dolor torácico en una persona en buenas condiciones con elevación difusa del ST en «silla de montar» es una pericarditis aguda: el supradesnivel cóncavo y difuso, que no respeta territorios y no tiene imagen especular, la distingue del SCACEST y de la angina de Prinzmetal (supradesnivel regional y transitorio).",
        "recTag": "EUNACOM Enero 2023 · Pregunta 139"
      },
      {
        "stem": "Paciente de 65 años, diabético en tratamiento con esquema intensificado de insulina, actualmente hospitalizado por cuadro de edema generalizado en estudio, presenta dolor torácico de inicio súbito, asociado a diaforesis. Al examen físico destaca saturación de 89% con FiO2 ambiental, murmullo pulmonar con crepitaciones difusas bilaterales. En sus exámenes de laboratorio destaca proteinuria de 24 horas de 5gramos, albúmina de 2g/dL y perfil lipídico con triglicéridos de 450 mg/dL. La causa más probable de su dolor torácico es:",
        "options": [
          {
            "id": "A",
            "text": "Neumonía aguda"
          },
          {
            "id": "B",
            "text": "Tromboemolismo pulmonar"
          },
          {
            "id": "C",
            "text": "Infarto agudo al miocardio"
          },
          {
            "id": "D",
            "text": "Pericarditis aguda"
          },
          {
            "id": "E",
            "text": "Disección aórtica"
          }
        ],
        "correcta": "B",
        "explicacion": "Dolor torácico súbito con diaforesis, hipoxemia y un síndrome nefrótico (hipoalbuminemia y proteinuria de 5 g: estado de hipercoagulabilidad) es una embolia pulmonar. El nefrótico trombosa venas, sobre todo las renales y las profundas de las piernas; los demás diagnósticos no explican la hipoxemia con el contexto trombofílico.",
        "recTag": "EUNACOM Julio 2013 · Pregunta 3"
      }
    ],
    "_origen": "nuevo (borrador inicial) · reescrito al estándar oct-2026 con el enfoque de dolor torácico y la lista de diagnósticos letales",
    "_estado": "estandar"
  },
  {
    "id": "cardio-11",
    "classId": "cardio-11",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Cardiopatía Coronaria",
    "topicLabel": "2.2",
    "title": "Angina Crónica Estable: Diagnóstico, Estratificación Funcional y Coronariografía",
    "perfilCode": "1.01.1.001, 1.01.4.008, 1.01.4.005, 1.01.4.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Alta · Clasificación de Diamond-Forrester, ergometría como primera prueba, cuándo usar imagen de estrés y cuándo indicar coronariografía; se pregunta casi todos los años",
    "svg": null,
    "algoTitle": "Algoritmo diagnóstico de la angina crónica estable",
    "diagram": {
      "title": "Angina Crónica Estable: del Síntoma a la Coronariografía",
      "svg": "<svg viewBox=\"0 0 620 500\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar22\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar22)}\n  </style>\n  <rect class=\"b\" x=\"100\" y=\"6\" width=\"420\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"21\" text-anchor=\"middle\" font-weight=\"700\">Dolor torácico de esfuerzo que cede con reposo o nitroglicerina</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Clasificar: típica (3 criterios) · atípica (2) · no anginoso (0-1) · clase CCS I-IV</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"dec\" x=\"90\" y=\"58\" width=\"440\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\">ECG de reposo, ecocardiograma, perfil lipídico, glicemia, hemoglobina</text>\n  <text class=\"sub\" x=\"310\" y=\"86\" text-anchor=\"middle\">Descarta estenosis aórtica, miocardiopatía hipertrófica, anemia, tirotoxicosis</text>\n  <path class=\"ln\" d=\"M310,96 V112\"/>\n  <rect class=\"dec\" x=\"90\" y=\"112\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"127\" text-anchor=\"middle\" font-weight=\"700\">¿Puede ejercitarse y el ECG basal es interpretable?</text>\n  <text class=\"sub\" x=\"310\" y=\"140\" text-anchor=\"middle\">Sin BCRI, marcapaso, preexcitación, HVI con sobrecarga ni digoxina</text>\n  <text class=\"lbl\" x=\"146\" y=\"168\" text-anchor=\"start\">Sí</text>\n  <text class=\"lbl\" x=\"474\" y=\"168\" text-anchor=\"start\">No</text>\n  <path class=\"ln\" d=\"M200,152 V176 H158 V184\"/>\n  <path class=\"ln\" d=\"M420,152 V176 H462 V184\"/>\n  <rect class=\"acc\" x=\"12\" y=\"184\" width=\"292\" height=\"56\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"199\" text-anchor=\"middle\" font-weight=\"700\">ERGOMETRÍA (Bruce) · primera prueba</text>\n  <text class=\"accS\" x=\"158\" y=\"212\" text-anchor=\"middle\">Positiva: infradesnivel ST ≥ 1 mm a 80 ms del punto J</text>\n  <text class=\"accS\" x=\"158\" y=\"223\" text-anchor=\"middle\">Estratifica riesgo (Duke) y capacidad funcional</text>\n  <rect class=\"warn\" x=\"316\" y=\"184\" width=\"292\" height=\"56\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"199\" text-anchor=\"middle\" font-weight=\"700\">IMAGEN DE ESTRÉS</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"212\" text-anchor=\"middle\">Ecocardiograma con dobutamina o cintigrafía (SPECT)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"223\" text-anchor=\"middle\">Sin poder ejercitarse: estrés farmacológico</text>\n  <path class=\"ln\" d=\"M158,240 V262 H310 V270\"/>\n  <path class=\"ln\" d=\"M462,240 V262 H310\"/>\n  <rect class=\"dec\" x=\"90\" y=\"270\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"285\" text-anchor=\"middle\" font-weight=\"700\">¿Alto riesgo isquémico o angina refractaria a terapia médica?</text>\n  <text class=\"sub\" x=\"310\" y=\"298\" text-anchor=\"middle\">ST ≥ 2 mm · precoz o &lt; 5 METs · caída de PAS · TV · FEVI &lt; 50%</text>\n  <text class=\"lbl\" x=\"80\" y=\"332\" text-anchor=\"end\">No</text>\n  <text class=\"lbl\" x=\"318\" y=\"332\" text-anchor=\"start\">Sí</text>\n  <path class=\"ln\" d=\"M120,310 V344\"/>\n  <path class=\"ln\" d=\"M470,310 V344\"/>\n  <rect class=\"b\" x=\"12\" y=\"344\" width=\"250\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"137\" y=\"359\" text-anchor=\"middle\" font-weight=\"700\">Terapia médica óptima (Tema 2.3)</text>\n  <text class=\"sub\" x=\"137\" y=\"372\" text-anchor=\"middle\">Control de factores de riesgo y seguimiento</text>\n  <rect class=\"acc\" x=\"270\" y=\"344\" width=\"338\" height=\"46\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"439\" y=\"359\" text-anchor=\"middle\" font-weight=\"700\">Coronariografía (acceso radial)</text>\n  <text class=\"accS\" x=\"439\" y=\"372\" text-anchor=\"middle\">Estenosis ≥ 70% (≥ 50% tronco) o FFR ≤ 0,80 = significativa</text>\n  <path class=\"ln\" d=\"M439,390 V408\"/>\n  <rect class=\"warn\" x=\"270\" y=\"408\" width=\"338\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"439\" y=\"423\" text-anchor=\"middle\" font-weight=\"700\">Según anatomía y SYNTAX</text>\n  <text class=\"warnT sub\" x=\"439\" y=\"436\" text-anchor=\"middle\">1-2 vasos sin tronco → stent farmacoactivo</text>\n  <text class=\"warnT sub\" x=\"439\" y=\"447\" text-anchor=\"middle\">Tronco o 3 vasos (diabético, FEVI baja) → by-pass</text>\n\n</svg>"
    },
    "contexto": "La angina de esfuerzo es la cara estable de la enfermedad coronaria, y el médico general la ve en el CESFAM mucho antes de que se vuelva un infarto: un diabético o un fumador que «se ahoga y le aprieta el pecho» al subir la cuesta. Lo que se le exige en el EUNACOM es reconocerla por la clínica, saber qué prueba pedir primero (casi siempre la ergometría), qué cambiar cuando el ECG basal no sirve y cuándo derivar a coronariografía. Entender cómo se lee el informe de la coronariografía decide después si el paciente recibe un stent, un by-pass o solo terapia médica.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología: Placa Estable y Desbalance entre Aporte y Demanda de Oxígeno",
        "paragraphs": [
          "La angina crónica estable es la manifestación clínica de una isquemia miocárdica transitoria causada por un desbalance entre el aporte y la demanda de oxígeno. Se produce por una <strong>placa aterosclerótica fija, con cápsula fibrosa gruesa y núcleo lipídico pequeño</strong>, que obstruye la luz de una o más arterias coronarias epicárdicas. A diferencia del síndrome coronario agudo, la placa no se rompe: la arteria no se ocluye con un trombo, y el dolor aparece solo cuando la demanda sube.",
          "Una obstrucción es <strong>hemodinámicamente significativa</strong> cuando compromete <strong>≥ 70% del diámetro luminal</strong> de una arteria epicárdica mayor (<strong>≥ 50% en el tronco coronario izquierdo</strong>). En reposo, la vasodilatación arteriolar distal mantiene un flujo adecuado; cuando aumenta el consumo de oxígeno (ejercicio, estrés emocional, taquicardia, crisis hipertensiva, comida abundante, frío) la reserva coronaria se agota y se desencadena la <strong>cascada isquémica</strong>: primero el déficit de ATP, luego la disfunción diastólica, después la sistólica, más tarde los cambios del ECG y, al final, el dolor. Por eso las pruebas de estrés buscan reproducir esa cascada: los trastornos de la motilidad y de la perfusión aparecen antes que el dolor y el infradesnivel del ST.",
          "Las causas que agravan una angina estable sin cambiar la placa son las que reducen el aporte (anemia, hipoxemia, hipotensión, estenosis aórtica) o aumentan la demanda (taquicardia, hipertensión, tirotoxicosis, hipertrofia ventricular): se buscan siempre. La enfermedad también puede deberse a <strong>disfunción microvascular</strong> (angina con coronarias normales, más frecuente en mujeres) o a espasmo (Tema 2.6)."
        ]
      },
      {
        "subhead": "2. Clínica: Clasificación de Diamond-Forrester y Gravedad Funcional CCS",
        "paragraphs": [
          "La caracterización semiológica del dolor es el primer paso. Según <strong>Diamond-Forrester</strong>:",
          "1) <strong>Angina típica (cumple los 3 criterios):</strong> dolor o malestar <strong>retroesternal opresivo</strong> (peso, tirantez, ardor; signo de Levine) que puede irradiarse al cuello, la mandíbula, el hombro o el brazo izquierdo; <strong>desencadenado de forma predecible por el esfuerzo o el estrés emocional</strong>; que <strong>cede con el reposo o con nitroglicerina sublingual en menos de 5 minutos</strong>.",
          "2) <strong>Angina atípica (probable):</strong> cumple 2 de los 3 criterios; es frecuente en mujeres, adultos mayores y diabéticos, en quienes el equivalente anginoso puede ser disnea de esfuerzo o dolor epigástrico (la angina de la pared inferior puede simular una dispepsia, pero su relación con el ejercicio la delata). 3) <strong>Dolor torácico no anginoso:</strong> cumple 1 o ninguno; sugiere origen osteomuscular, pleurítico, digestivo o psicógeno.",
          "<strong>Angina de reciente comienzo.</strong> Una angina de esfuerzo que comienza hace pocas semanas y limita los esfuerzos habituales se llama de reciente comienzo; si se vuelve severa (clase III o IV) en los últimos 2 meses se considera angina inestable y se maneja como síndrome coronario agudo (Tema 2.4); si es estable y de esfuerzos mayores, se estudia de forma ambulatoria. Un paciente con tres semanas de dolor epigástrico opresivo que lo obliga a detenerse a los 100 metros y cede en reposo tiene una angina crónica de reciente comienzo de pared inferior.",
          "<strong>Clasificación de severidad funcional de la Canadian Cardiovascular Society (CCS):</strong> <strong>clase I</strong>: la actividad ordinaria (caminar, subir escaleras) no produce angina, solo los esfuerzos extenuantes, rápidos o prolongados; <strong>clase II</strong>: ligera limitación, aparece al caminar más de 2 cuadras planas o subir más de un piso a paso normal; <strong>clase III</strong>: marcada limitación, aparece al caminar 1 a 2 cuadras planas o subir un solo tramo de escaleras; <strong>clase IV</strong>: incapacidad para realizar cualquier actividad sin angina, con síntomas incluso en reposo mínimo.",
          "<strong>Evaluación inicial:</strong> examen físico (soplo de estenosis aórtica, signos de insuficiencia cardíaca, hipertensión), ECG de reposo (normal en gran parte de los pacientes; puede mostrar una onda Q de un infarto antiguo, bloqueo de rama o hipertrofia), ecocardiograma (función ventricular, valvulopatías, miocardiopatía hipertrófica) y exámenes de laboratorio: perfil lipídico, glicemia y HbA1c, hemograma, creatinina y TSH según el caso. La probabilidad previa a la prueba depende de la edad, el sexo y la tipicidad del dolor: en un hombre de más de 50 años con dolor típico y varios factores de riesgo es alta y justifica ir directo a estratificar el riesgo; en una mujer joven con dolor atípico es baja y conviene buscar primero otras causas. Los diagnósticos diferenciales que más se confunden con una angina son el reflujo y el espasmo esofágico, la costocondritis, la pericarditis, la estenosis aórtica y la miocardiopatía hipertrófica (que también producen dolor de esfuerzo), la angina mesentérica (dolor abdominal posprandial, no de esfuerzo) y la ansiedad. La respuesta a la nitroglicerina no es una prueba diagnóstica: también alivia el espasmo esofágico."
        ]
      },
      {
        "subhead": "3. Estratificación No Invasiva: Ergometría e Imágenes Funcionales",
        "paragraphs": [
          "<strong>Test de esfuerzo convencional en cinta rodante (protocolo de Bruce):</strong> es la <strong>prueba inicial de elección</strong> en los pacientes con probabilidad previa intermedia que pueden ejercitarse y tienen un ECG basal interpretable (nivel oficial: emplea el informe). Es positiva con un <strong>infradesnivel horizontal o descendente del ST ≥ 1,0 mm (0,1 mV) medido a 80 ms del punto J</strong>, con o sin angina. Se interpretan la capacidad funcional (METs alcanzados), la respuesta de la frecuencia cardíaca y de la presión arterial, la aparición de angina o arritmias y el <strong>puntaje de Duke</strong> (tiempo de ejercicio menos 5 veces el desnivel del ST menos 4 veces el índice de angina), que clasifica el riesgo en bajo, intermedio y alto.",
          "<em>Criterios de alto riesgo isquémico (indican coronariografía):</em> 1) infradesnivel del ST precoz, en el <strong>estadio 1 de Bruce (&lt; 5 METs)</strong> o a una frecuencia cardíaca &lt; 120 lpm; 2) infradesnivel del ST <strong>≥ 2,0 mm</strong> o en <strong>≥ 5 derivaciones</strong>; 3) <strong>caída de la presión arterial sistólica &gt; 10 mmHg durante el esfuerzo</strong> (falla contráctil isquémica extensa); 4) aparición de <strong>taquicardia ventricular sostenida</strong> o angina limitante grave; 5) persistencia del infradesnivel varios minutos en la recuperación. Se suspende la prueba ante dolor intenso, caída de la presión, arritmia grave o síntomas neurológicos.",
          "<em>La ergometría no sirve (o está contraindicada)</em> si el ECG basal no es interpretable: <strong>bloqueo completo de rama izquierda, marcapaso, preexcitación (WPW), hipertrofia ventricular izquierda con sobrecarga, infradesnivel basal del ST y uso de digoxina</strong>, o si el paciente no puede ejercitarse (amputados, artrosis grave, enfermedad pulmonar). Está contraindicada en síndrome coronario agudo reciente, estenosis aórtica grave sintomática, insuficiencia cardíaca descompensada, arritmias no controladas, hipertensión grave, disección aórtica y miocarditis o pericarditis aguda.",
          "<strong>Imagen de estrés (ecocardiograma con dobutamina o cintigrafía de perfusión miocárdica, SPECT):</strong> se indica cuando el ECG basal no es interpretable o el paciente no puede pedalear o correr; el estrés puede ser farmacológico (dobutamina, o dipiridamol, adenosina o regadenosón para la cintigrafía). El <strong>ecocardiograma con dobutamina</strong> busca alteraciones nuevas de la motilidad segmentaria; la <strong>cintigrafía de perfusión</strong> compara la captación del radiotrazador en esfuerzo y en reposo: un defecto que aparece en el esfuerzo y se normaliza en reposo es <strong>isquemia reversible</strong>; un defecto fijo es una cicatriz. La cintigrafía y el ecocardiograma sirven también para determinar si una insuficiencia cardíaca es de origen isquémico y para valorar la viabilidad miocárdica.",
          "<strong>AngioTAC de arterias coronarias:</strong> tiene una sensibilidad alta y un <strong>valor predictivo negativo &gt; 98%</strong>; es de elección en pacientes de riesgo bajo a intermedio para <strong>descartar</strong> enfermedad anatómica, y no sirve para decidir isquemia cuando hay calcificación extensa o frecuencias elevadas. El puntaje de calcio coronario no reemplaza la prueba funcional en el paciente sintomático."
        ]
      },
      {
        "subhead": "4. Indicaciones de Coronariografía Invasiva y Cómo Leer su Informe",
        "paragraphs": [
          "La derivación al cardiólogo para <strong>coronariografía diagnóstica y revascularización</strong> se reserva para: angina limitante o refractaria pese a terapia médica óptima en dosis máximas toleradas; <strong>criterios de alto riesgo en las pruebas no invasivas</strong> (ergometría, SPECT o eco de estrés); disfunción sistólica del ventrículo izquierdo inexplicada (FEVI &lt; 50%) con sospecha de origen isquémico; y angina con prueba funcional alterada. Un paciente con una ergometría con infradesnivel de 2 mm en las derivaciones anteriores va a coronariografía.",
          "<strong>Interpretación del informe:</strong> la coronariografía define la anatomía y se informa por <strong>arteria comprometida y porcentaje de estenosis del diámetro luminal</strong>. Una estenosis <strong>≥ 70%</strong> de una arteria epicárdica (<strong>≥ 50% en el tronco coronario izquierdo</strong>) es significativa; las lesiones intermedias (50 a 69%) se evalúan con la <strong>reserva fraccional de flujo (FFR ≤ 0,80)</strong>. La enfermedad se clasifica en <strong>1, 2 o 3 vasos</strong> (descendente anterior, circunfleja y coronaria derecha) y se informa si compromete el <strong>tronco izquierdo</strong> o la <strong>descendente anterior proximal</strong>, hallazgos de alto riesgo. El informe incluye además el <strong>flujo TIMI</strong> (0 = oclusión sin flujo; I = penetración sin perfusión; II = flujo lento; III = flujo normal), la calcificación, el trombo, las colaterales y la FEVI de la ventriculografía.",
          "<strong>Cómo se usa para decidir:</strong> arterias normales o con ateromatosis no significativa → terapia médica óptima y búsqueda de otra causa (vasoespasmo, disfunción microvascular, MINOCA); enfermedad de 1 o 2 vasos sin tronco → <strong>angioplastía con stent farmacoactivo</strong>; <strong>tronco izquierdo o 3 vasos</strong>, sobre todo en diabéticos o con FEVI baja y puntaje SYNTAX alto (≥ 33) → <strong>cirugía de by-pass</strong>; un SYNTAX bajo (≤ 22) permite angioplastía (los detalles del tratamiento están en el Tema 2.3). En el infarto, un flujo TIMI 0 a I en la arteria culpable indica una oclusión que requiere reperfusión.",
          "El <strong>acceso radial</strong> es el de elección. Las complicaciones (&lt; 2%) son el hematoma o pseudoaneurisma del sitio de punción, la nefropatía por contraste y, rara vez, el infarto o el ACV; por eso se hidrata al paciente, se suspende la metformina según la función renal y se controla el pulso distal después del procedimiento."
        ]
      }
    ],
    "table": {
      "title": "Tabla 2.2.A · Pruebas para el Estudio de la Angina Estable: Cuándo Usarlas y Qué Informan",
      "headers": [
        "Prueba",
        "Cuándo se indica",
        "Positividad / hallazgo",
        "Comentario"
      ],
      "rows": [
        [
          "Ergometría (Bruce)",
          "Primera prueba si puede ejercitarse y el ECG es interpretable",
          "Infradesnivel horizontal o descendente del ST ≥ 1 mm a 80 ms del punto J",
          "Alto riesgo: ST ≥ 2 mm, precoz (< 5 METs), caída de PAS, TV"
        ],
        [
          "Ecocardiograma con dobutamina",
          "ECG no interpretable (BCRI, marcapaso, HVI, digoxina) o no puede ejercitarse",
          "Alteración nueva de la motilidad segmentaria",
          "No exige ECG basal normal"
        ],
        [
          "Cintigrafía de perfusión (SPECT)",
          "Igual que el eco de estrés; también viabilidad e isquemia en IC",
          "Defecto reversible = isquemia; fijo = cicatriz",
          "Estrés con ejercicio o fármacos (dipiridamol, adenosina)"
        ],
        [
          "AngioTAC coronario",
          "Riesgo bajo a intermedio, para descartar enfermedad",
          "Estenosis anatómica; VPN > 98%",
          "Limita el calcio extenso y la taquicardia"
        ],
        [
          "Coronariografía",
          "Alto riesgo en pruebas, angina refractaria, FEVI < 50% sin causa",
          "Estenosis ≥ 70% (≥ 50% tronco) o FFR ≤ 0,80",
          "Define stent o by-pass; acceso radial"
        ]
      ]
    },
    "vignette": "Hombre de 61 años, hipertenso, diabético y fumador (30 paquetes-año), consulta en su CESFAM por dolor retroesternal opresivo, con sensación de pesadez irradiada a la mandíbula y a la cara interna del brazo izquierdo, desde hace 2 meses. Se desencadena al caminar tres cuadras a paso rápido o al subir una cuesta y desaparece espontáneamente a los 4 minutos al sentarse. PA 138/84 mmHg, FC 74 lpm, examen cardíaco y pulmonar normales. El ECG de reposo está en ritmo sinusal y es normal. Se solicita una ergometría que muestra, a los 4 minutos del protocolo de Bruce, infradesnivel horizontal del ST de 2 mm en V4-V6 y una caída de la presión sistólica de 15 mmHg.",
    "explicacion": "Es una angina típica (dolor opresivo, gatillado por el esfuerzo y aliviado en reposo en menos de 5 minutos: los tres criterios de Diamond-Forrester) de clase funcional II-III. La ergometría fue positiva y de alto riesgo isquémico: infradesnivel de 2 mm, aparición en el estadio 1 de Bruce y caída de la presión sistólica durante el esfuerzo. La conducta es iniciar de inmediato terapia médica óptima (aspirina, atorvastatina de alta potencia, betabloqueador y nitroglicerina sublingual) y derivar a coronariografía, que definirá si corresponde angioplastía con stent (1 o 2 vasos sin tronco) o cirugía de by-pass (tronco izquierdo o 3 vasos en un diabético).",
    "keyPoints": [
      "Angina típica = dolor opresivo retroesternal + gatillado por esfuerzo o estrés + cede con reposo o nitroglicerina en < 5 min (los 3 criterios de Diamond-Forrester); 2 criterios = atípica; 0-1 = no anginoso.",
      "Gravedad CCS: I solo esfuerzos extenuantes; II más de 2 cuadras o un piso; III 1-2 cuadras o un tramo de escalera; IV angina con cualquier actividad o en reposo.",
      "La ergometría (Bruce) es la primera prueba si puede ejercitarse y el ECG basal es interpretable; positiva con infradesnivel horizontal o descendente del ST ≥ 1 mm a 80 ms del punto J.",
      "Alto riesgo en ergometría: ST ≥ 2 mm o en ≥ 5 derivaciones, precoz (< 5 METs), caída de la PAS > 10 mmHg o TV: coronariografía.",
      "Con BCRI, marcapaso, preexcitación, HVI con sobrecarga o digoxina, o si no puede ejercitarse: ecocardiograma con dobutamina o cintigrafía de perfusión (SPECT).",
      "El angioTAC coronario tiene VPN > 98% y sirve para descartar enfermedad en riesgo bajo-intermedio.",
      "Informe de coronariografía: estenosis ≥ 70% (≥ 50% en el tronco) o FFR ≤ 0,80 es significativa; 1-2 vasos sin tronco → stent; tronco o 3 vasos (diabético, FEVI baja, SYNTAX alto) → by-pass."
    ],
    "questions": [
      {
        "stem": "Un paciente de 55 años, con antecedentes de diabetes mellitus tipo 2, hipertensión arterial y tabaquismo de 20 paquetes-año, consulta por dolor torácico de localización precordial y carácter opresivo. El cuadro inició hace tres semanas, presentándose el dolor en relación con la actividad física y desapareciendo rápidamente con el reposo. Sus signos vitales muestran presión arterial 148/92 mmHg, frecuencia cardíaca 81 latidos por minuto y saturación arterial de oxígeno de 96%. Su examen cardiopulmonar no muestra alteraciones. ¿Cuál es el examen de elección para precisar el diagnóstico?",
        "options": [
          {
            "id": "A",
            "text": "Coronariografía"
          },
          {
            "id": "B",
            "text": "Cintigrafía miocárdica"
          },
          {
            "id": "C",
            "text": "Angiorresonancia de arterias coronarias"
          },
          {
            "id": "D",
            "text": "Test de esfuerzo"
          },
          {
            "id": "E",
            "text": "Electrocardiograma de 24 horas (Holter)"
          }
        ],
        "correcta": "D",
        "explicacion": "Dolor opresivo con relación al esfuerzo que cede con el reposo es una angina crónica estable típica. Su estudio comienza con una prueba de esfuerzo (la ergometría, si puede ejercitarse y el ECG es interpretable). La coronariografía y la cintigrafía se piden si la prueba es de alto riesgo o no puede hacerse; el Holter busca arritmias.",
        "recTag": "EUNACOM Diciembre 2025 · Pregunta 2"
      },
      {
        "stem": "Un paciente con antecedente de hipertensión arterial, dislipidemia y diabetes, usuario de aspirina, metformina, hidroclorotiazida y atorvastatina, presenta dolor torácico opresivo, que aparece al caminar 2 cuadras y alcanza un EVA de 5/10. Se solicita un test de esfuerzo que demuestra aparición de un infradesnivel del segmento ST, de 2 mm en las derivadas anteriores. El examen más adecuado para proseguir el estudio es:",
        "options": [
          {
            "id": "A",
            "text": "Ecocardiograma"
          },
          {
            "id": "B",
            "text": "TAC de tórax"
          },
          {
            "id": "C",
            "text": "Ecocardiografía de esfuerzo"
          },
          {
            "id": "D",
            "text": "Coronariografía"
          },
          {
            "id": "E",
            "text": "Cintigrafía de perfesión miocárdica"
          }
        ],
        "correcta": "D",
        "explicacion": "Una ergometría con infradesnivel del ST de 2 mm (criterio de alto riesgo isquémico) en un paciente con angina de esfuerzo obliga a definir la anatomía coronaria con coronariografía, que decide el tratamiento de revascularización. Repetir pruebas funcionales no cambia la conducta.",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 4"
      },
      {
        "stem": "Paciente de 70 años, con antecedentes de diabetes e hipertensión en tratamiento, con historia de dolor torácico que aparece al esfuerzo y cede espontáneamente, la cual se desencadena cada vez con menor esfuerzo, no asociado a otros síntomas. Actualmente se encuentra asintomático y su examen físico muestra ritmo regular en dos tiempos sin soplos, murmullo pulmonar presente sin ruidos asociados. Se realiza ECG que muestra ritmo regular y QRS ancho compatible con bloqueo completo de rama izquierda. El examen más adecuado para continuar el estudio de este paciente es:",
        "options": [
          {
            "id": "A",
            "text": "Test de esfuerzo"
          },
          {
            "id": "B",
            "text": "Ecocardiografía de estrés"
          },
          {
            "id": "C",
            "text": "Enzimas cardiacas"
          },
          {
            "id": "D",
            "text": "AngioTAC"
          },
          {
            "id": "E",
            "text": "Coronariografía"
          }
        ],
        "correcta": "B",
        "explicacion": "El bloqueo completo de rama izquierda hace que el ECG de esfuerzo no sea interpretable (el ST ya está alterado en reposo): el estudio se hace con una imagen de estrés, por ejemplo el ecocardiograma con dobutamina. La ergometría convencional no sirve y la coronariografía es un paso posterior si la prueba es de alto riesgo.",
        "recTag": "EUNACOM Julio 2013 · Pregunta 102"
      },
      {
        "stem": "Paciente de 58 años, con antecedente de diabetes mellitus, hipertensión y fumador de 40 paquetes año, consulta por un cuadro de tres semanas de evolución de dolor epigástrico opresivo, asociado a disnea y palpitaciones regulares, que lo obligan a detenerse cada 100 metros de caminata y ceden con el reposo. En el examen físico, su presión arterial es 140/90 mmHg, frecuencia cardiaca de 80 latidos por minuto regular. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Angina crónica de reciente comienzo"
          },
          {
            "id": "B",
            "text": "Fibrilación auricular paroxística"
          },
          {
            "id": "C",
            "text": "Isquemia cardiaca con arritmia supraventricular"
          },
          {
            "id": "D",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "E",
            "text": "Insuficiencia cardíaca postinfarto"
          }
        ],
        "correcta": "A",
        "explicacion": "Un dolor opresivo (aquí epigástrico, equivalente anginoso de pared inferior) que aparece con el esfuerzo y cede con el reposo, de pocas semanas de evolución, en un diabético, hipertenso y fumador, es una angina crónica de reciente comienzo. La fibrilación auricular y el TEP no se relacionan con el esfuerzo en forma tan reproducible.",
        "recTag": "EUNACOM Diciembre 2019 · Pregunta 118"
      },
      {
        "stem": "Un paciente de 65 años, hipertenso y diabético, consulta por disnea y dolor de precordial, que aparece en relación al ejercicio. Es usuario de aspirina, enalapril, metformina, glibenclamida y atorvastatina. Refiere que le es imposible subir más de dos pisos en su edificio o caminar más de dos cuadras sin detenerse, debido al dolor. Su examen físico es normal, al igual que su electrocardiograma. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Derivar a unidad de salud mental"
          },
          {
            "id": "B",
            "text": "Solicitar test de esfuerzo"
          },
          {
            "id": "C",
            "text": "Solicitar troponinas"
          },
          {
            "id": "D",
            "text": "Indicar programa de ejercicios supervisados, con aumento progresivo"
          },
          {
            "id": "E",
            "text": "Iniciar anticoagulación oral"
          }
        ],
        "correcta": "B",
        "explicacion": "Un paciente con dolor precordial de esfuerzo, ECG normal y una capacidad funcional limitada de 2 cuadras tiene una angina estable; el siguiente paso es la ergometría. Pedir troponinas es para el dolor agudo, y la anticoagulación o los ejercicios supervisados no son el estudio.",
        "recTag": "EUNACOM Agosto 2021 · Pregunta 180"
      }
    ],
    "_origen": "2.1§0 · 2.1§1 · 2.1§2 · 2.1§4p0,1,2,3,5,6 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-12",
    "classId": "cardio-12",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Cardiopatía Coronaria",
    "topicLabel": "2.3",
    "title": "Angina Crónica Estable: Terapia Médica Óptima, Revascularización y Prevención Secundaria",
    "perfilCode": "1.01.1.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "",
    "reconstrucciones": "",
    "frecuencia": "Alta · Fármacos que reducen mortalidad (aspirina y estatina), betabloqueador como primera línea antianginosa, nitroglicerina y sus contraindicaciones, y elección entre stent y by-pass",
    "svg": null,
    "algoTitle": "Algoritmo de tratamiento de la angina crónica estable",
    "diagram": {
      "title": "Angina Crónica Estable: Terapia Médica Óptima y Revascularización",
      "svg": "<svg viewBox=\"0 0 620 500\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar23\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar23)}\n  </style>\n  <rect class=\"b\" x=\"100\" y=\"6\" width=\"420\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"21\" text-anchor=\"middle\" font-weight=\"700\">Angina crónica estable confirmada</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">Dos objetivos a la vez: vivir más (pronóstico) y vivir sin dolor (síntomas)</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"acc\" x=\"12\" y=\"58\" width=\"596\" height=\"70\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\">PARA TODOS · fármacos que reducen infarto y mortalidad</text>\n  <text class=\"accS\" x=\"310\" y=\"86\" text-anchor=\"middle\">Aspirina 100 mg/día de por vida (clopidogrel 75 mg si no la tolera)</text>\n  <text class=\"accS\" x=\"310\" y=\"97\" text-anchor=\"middle\">Atorvastatina 40-80 mg o rosuvastatina 20-40 mg · meta c-LDL &lt; 55 mg/dL y reducción ≥ 50%</text>\n  <text class=\"accS\" x=\"310\" y=\"108\" text-anchor=\"middle\">IECA o ARA II si hay HTA, diabetes, ERC o FEVI ≤ 40% · dejar de fumar, ejercicio, dieta</text>\n  <path class=\"ln\" d=\"M310,128 V144\"/>\n  <rect class=\"dec\" x=\"12\" y=\"144\" width=\"596\" height=\"50\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"159\" text-anchor=\"middle\" font-weight=\"700\">PARA LOS SÍNTOMAS · antianginosos</text>\n  <text class=\"sub\" x=\"310\" y=\"172\" text-anchor=\"middle\">1.ª línea: betabloqueador cardioselectivo (bisoprolol 5-10 mg) · meta FC de reposo 55-60 lpm</text>\n  <text class=\"sub\" x=\"310\" y=\"183\" text-anchor=\"middle\">Contraindicado el BB (asma grave, bloqueo AV, bradicardia): amlodipino o diltiazem/verapamilo</text>\n  <path class=\"ln\" d=\"M310,194 V210\"/>\n  <rect class=\"b\" x=\"12\" y=\"210\" width=\"292\" height=\"52\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"225\" text-anchor=\"middle\" font-weight=\"700\">Persiste angina: asociar</text>\n  <text class=\"sub\" x=\"158\" y=\"238\" text-anchor=\"middle\">Amlodipino 5-10 mg · nitrato de acción larga</text>\n  <text class=\"sub\" x=\"158\" y=\"249\" text-anchor=\"middle\">ivabradina, ranolazina o trimetazidina (2.ª línea)</text>\n  <rect class=\"warn\" x=\"316\" y=\"210\" width=\"292\" height=\"52\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"225\" text-anchor=\"middle\" font-weight=\"700\">Crisis: nitroglicerina sublingual</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"238\" text-anchor=\"middle\">0,6 mg SOS, repetir c/5 min hasta 3 dosis</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"249\" text-anchor=\"middle\">Prohibida con sildenafil (24 h) o tadalafil (48 h)</text>\n  <path class=\"ln\" d=\"M310,262 V280\"/>\n  <rect class=\"dec\" x=\"90\" y=\"280\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"295\" text-anchor=\"middle\" font-weight=\"700\">¿Sigue limitante con terapia óptima, o alto riesgo isquémico/anatómico?</text>\n  <text class=\"sub\" x=\"310\" y=\"308\" text-anchor=\"middle\">Prueba de esfuerzo de alto riesgo · FEVI &lt; 50% · tronco o 3 vasos</text>\n  <text class=\"lbl\" x=\"80\" y=\"342\" text-anchor=\"end\">No</text>\n  <text class=\"lbl\" x=\"318\" y=\"342\" text-anchor=\"start\">Sí</text>\n  <path class=\"ln\" d=\"M130,320 V354\"/>\n  <path class=\"ln\" d=\"M470,320 V354\"/>\n  <rect class=\"b\" x=\"12\" y=\"354\" width=\"230\" height=\"42\" rx=\"3\"/>\n  <text class=\"t\" x=\"127\" y=\"369\" text-anchor=\"middle\" font-weight=\"700\">Continuar terapia médica</text>\n  <text class=\"sub\" x=\"127\" y=\"382\" text-anchor=\"middle\">Control periódico de metas y factores de riesgo</text>\n  <rect class=\"acc\" x=\"250\" y=\"354\" width=\"358\" height=\"42\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"429\" y=\"369\" text-anchor=\"middle\" font-weight=\"700\">Coronariografía y revascularización</text>\n  <text class=\"accS\" x=\"429\" y=\"382\" text-anchor=\"middle\">Elegir según anatomía, diabetes y FEVI (SYNTAX)</text>\n  <path class=\"ln\" d=\"M340,396 V414 H179 V420\"/>\n  <path class=\"ln\" d=\"M340,414 H460 V420\"/>\n  <rect class=\"b\" x=\"12\" y=\"420\" width=\"334\" height=\"70\" rx=\"3\"/>\n  <text class=\"t\" x=\"179\" y=\"435\" text-anchor=\"middle\" font-weight=\"700\">Angioplastía con stent farmacoactivo</text>\n  <text class=\"sub\" x=\"179\" y=\"448\" text-anchor=\"middle\">1 o 2 vasos sin compromiso del tronco</text>\n  <text class=\"sub\" x=\"179\" y=\"459\" text-anchor=\"middle\">SYNTAX bajo (≤ 22)</text>\n  <text class=\"sub\" x=\"179\" y=\"470\" text-anchor=\"middle\">Doble antiagregación 6 meses (12 si fue por un SCA)</text>\n  <rect class=\"warn\" x=\"354\" y=\"420\" width=\"254\" height=\"70\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"481\" y=\"435\" text-anchor=\"middle\" font-weight=\"700\">By-pass (arteria mamaria)</text>\n  <text class=\"warnT sub\" x=\"481\" y=\"448\" text-anchor=\"middle\">Tronco izquierdo ≥ 50%</text>\n  <text class=\"warnT sub\" x=\"481\" y=\"459\" text-anchor=\"middle\">3 vasos en diabético o con FEVI baja</text>\n  <text class=\"warnT sub\" x=\"481\" y=\"470\" text-anchor=\"middle\">SYNTAX alto (≥ 33)</text>\n\n</svg>"
    },
    "contexto": "Una vez confirmada la angina, el médico general es quien parte el tratamiento y controla al paciente por años: aquí se juega la mortalidad del paciente. El EUNACOM pregunta la diferencia entre los fármacos que alivian el dolor y los que reducen el infarto y la muerte (aspirina y estatina), el betabloqueador como primera línea, qué dar cuando el betabloqueador no se puede usar, la dosis de nitroglicerina con sus contraindicaciones y cuándo corresponde un stent o un by-pass. La terapia médica óptima es el cimiento de todo lo demás, incluso del paciente que va a ser revascularizado.",
    "contentSections": [
      {
        "subhead": "1. Dos Objetivos: Pronóstico y Síntomas",
        "paragraphs": [
          "El tratamiento de la cardiopatía coronaria estable tiene dos objetivos que se persiguen a la vez, como lo establece la guía GES y la norma técnica (Tabla 2.3.A): <strong>reducir el infarto y la mortalidad</strong> (con fármacos que modifican la historia natural de la placa) y <strong>aliviar los síntomas y mejorar la capacidad funcional</strong> (con fármacos antianginosos). Es fundamental no confundirlos: los nitratos, los calcioantagonistas, la ivabradina, la ranolazina y la trimetazidina mejoran la tolerancia al esfuerzo, pero <strong>no han demostrado reducir la mortalidad</strong>; la aspirina y las estatinas sí.",
          "La terapia médica óptima (TMO) no es una etapa previa a la revascularización: se mantiene siempre, también después de un stent o un by-pass, porque la enfermedad aterosclerótica es sistémica y la angioplastía trata una lesión, no la enfermedad."
        ]
      },
      {
        "subhead": "2. Fármacos que Modifican el Pronóstico (Obligatorios en Todos)",
        "paragraphs": [
          "<strong>1) Antiagregación plaquetaria:</strong> <strong>aspirina 100 mg/día por vía oral, de por vida</strong>. Si hay intolerancia o alergia gástrica grave demostrada, se usa <strong>clopidogrel 75 mg/día</strong>. Reduce el infarto y la muerte cardiovascular; el riesgo es el sangrado digestivo (se asocia un inhibidor de la bomba de protones si hay antecedente de úlcera o sangrado, edad avanzada o uso de anticoagulantes). La doble antiagregación prolongada no es rutina en la angina estable sin stent reciente.",
          "<strong>2) Estatinas de alta potencia:</strong> <strong>atorvastatina 40 a 80 mg/día o rosuvastatina 20 a 40 mg/día</strong>. La meta es un <strong>c-LDL &lt; 55 mg/dL</strong> y una reducción ≥ 50% del valor basal, lo que estabiliza la placa y previene su rotura; si no se alcanza con la dosis máxima tolerada se agrega ezetimibe y, en caso de no lograrse, un inhibidor de PCSK9. Se controlan las transaminasas si hay síntomas y se vigilan las mialgias (CK solo si hay dolor muscular intenso u orina oscura).",
          "<strong>3) Inhibidores del sistema renina-angiotensina-aldosterona (IECA o ARA II):</strong> <strong>enalapril 10-20 mg/día (hasta 20 mg cada 12 horas) o losartán 50-100 mg/día</strong>. Son <strong>obligatorios si hay fracción de eyección ≤ 40%, hipertensión arterial, diabetes mellitus o enfermedad renal crónica</strong>; en el resto tienen un beneficio menor. Se controlan la creatinina y el potasio a las 1-2 semanas.",
          "Además, el tratamiento incluye el <strong>control de los factores de riesgo</strong>: cesación del tabaco (la intervención de mayor impacto), presión arterial &lt; 130/80 mmHg, control de la diabetes (los inhibidores SGLT2 y los agonistas GLP-1 reducen los eventos cardiovasculares en diabéticos con enfermedad coronaria), pérdida de peso, dieta mediterránea, actividad física regular y <strong>rehabilitación cardíaca</strong>, y vacunación contra la influenza y el neumococo."
        ]
      },
      {
        "subhead": "3. Fármacos Antianginosos y Terapia de las Crisis",
        "paragraphs": [
          "<strong>Betabloqueadores cardioselectivos (primera línea antianginosa):</strong> <strong>bisoprolol (5-10 mg/día), atenolol (50-100 mg/día) o metoprolol succinato</strong>. Disminuyen la frecuencia cardíaca y la contractilidad, reducen el consumo miocárdico de oxígeno y alargan la diástole, que es cuando perfunde la coronaria. Meta: <strong>frecuencia cardíaca de reposo de 55 a 60 lpm</strong>. Están contraindicados en el asma grave broncoespástica, el bloqueo AV de 2.º o 3.º grado, la bradicardia sintomática y el shock; en la angina vasoespástica pura y en el consumo de cocaína tampoco se usan (Tema 2.6). Mejoran además el pronóstico si hay infarto previo o disfunción sistólica.",
          "<strong>Calcioantagonistas:</strong> el <strong>amlodipino (dihidropiridínico) 5-10 mg/día</strong> se asocia al betabloqueador si persisten los síntomas, o es la alternativa de primera línea cuando el betabloqueador está contraindicado. El diltiazem y el verapamilo (no dihidropiridínicos) también son antianginosos, pero no se combinan con betabloqueadores por el riesgo de bradicardia y bloqueo AV, y están contraindicados con FEVI baja.",
          "<strong>Nitratos:</strong> la <strong>nitroglicerina sublingual 0,6 mg SOS</strong> (repetir cada 5 minutos hasta un máximo de 3 dosis) trata la crisis o se usa de forma profiláctica antes de un esfuerzo conocido. Los <strong>nitratos de acción prolongada</strong> (dinitrato o mononitrato de isosorbide, 20 mg cada 12 horas) se agregan si persisten los síntomas, con un intervalo nocturno libre de nitrato para evitar la tolerancia. Están <strong>contraindicados con sildenafil (24 horas) o tadalafil (48 horas)</strong>, en la hipotensión, la estenosis aórtica grave y el infarto del ventrículo derecho; los efectos adversos son la cefalea y la hipotensión.",
          "<strong>Segunda línea:</strong> <strong>ivabradina</strong> (reduce la frecuencia sinusal sin efecto inotrópico; si la frecuencia es ≥ 70 lpm pese al betabloqueador), <strong>ranolazina</strong> (inhibe la corriente tardía de sodio; no baja la presión ni la frecuencia) y <strong>trimetazidina</strong> (modulador metabólico). Mejoran la tolerancia al esfuerzo, no la mortalidad. Una angina refractaria a dos o tres antianginosos es una indicación de coronariografía."
        ]
      },
      {
        "subhead": "4. Revascularización: Angioplastía con Stent o Cirugía de By-pass",
        "paragraphs": [
          "La revascularización no reemplaza a la terapia médica. En la angina estable <strong>mejora los síntomas</strong> y, solo en grupos seleccionados (<strong>tronco izquierdo, enfermedad de tres vasos con disfunción ventricular, o isquemia extensa</strong>), mejora el pronóstico; en los estables sin esas características, una estrategia invasiva inicial no ha demostrado reducir la muerte ni el infarto frente a la terapia médica óptima. Se indica ante angina limitante pese a la terapia óptima, alto riesgo en las pruebas funcionales o anatomía de alto riesgo.",
          "<strong>Elección del método:</strong> 1) <strong>Angioplastía coronaria percutánea con stent farmacoactivo</strong>: de elección en la <strong>enfermedad de 1 o 2 vasos sin compromiso del tronco</strong> y con puntaje SYNTAX bajo (≤ 22). Se trata la lesión culpable; tras el stent se indica doble antiagregación (aspirina más clopidogrel) por 6 meses en la angina estable y por 12 meses si el stent se colocó en un síndrome coronario agudo, y aspirina de por vida. 2) <strong>Cirugía de revascularización con by-pass aortocoronario</strong> (injerto de la <strong>arteria mamaria interna a la descendente anterior</strong> más venas safenas o arteria radial): de elección en la <strong>enfermedad de tronco común izquierdo (estenosis ≥ 50%)</strong> y en la <strong>enfermedad de 3 vasos en pacientes diabéticos o con disfunción ventricular izquierda (FEVI deprimida) y SYNTAX elevado (≥ 33)</strong>. El by-pass trata el vaso epicárdico completo, incluidas las lesiones futuras proximales al injerto, lo que explica su ventaja en la anatomía compleja.",
          "<strong>El puntaje SYNTAX</strong> resume la complejidad anatómica de la enfermedad coronaria según el número, la ubicación y las características de las lesiones (bifurcaciones, calcio, oclusiones totales): un valor bajo (≤ 22) permite elegir entre stent y cirugía, uno intermedio (23-32) se discute en el equipo cardiológico y uno alto (≥ 33) favorece el by-pass. En el diabético con enfermedad multivaso el by-pass reduce la mortalidad y el infarto frente al stent. La decisión la toma el \"equipo del corazón\" (cardiólogo clínico, hemodinamista y cirujano cardíaco), pero el médico general debe conocer el criterio para explicarlo al paciente y derivar a tiempo, sobre todo cuando se pierde el tronco izquierdo o la descendente anterior proximal.",
          "El paciente que va a revascularización continúa con la aspirina, la estatina y el resto de la terapia médica; la aspirina no se suspende antes de la cirugía de by-pass. Tras el by-pass o la angioplastía se indica rehabilitación cardíaca y se controlan los factores de riesgo con la misma rigurosidad."
        ]
      },
      {
        "subhead": "5. Situaciones Especiales y Errores Frecuentes",
        "paragraphs": [
          "<strong>Complicaciones de la angioplastía:</strong> la <strong>trombosis del stent</strong> (aguda o subaguda, casi siempre por suspender la doble antiagregación) se presenta como un infarto con supradesnivel y por eso <strong>no se suspende el clopidogrel ni la aspirina</strong> antes de la fecha indicada sin hablar con el cardiólogo; la <strong>reestenosis</strong> reaparece como angina en los meses siguientes y es menos frecuente con los stents farmacoactivos; el hematoma o el pseudoaneurisma del sitio de punción y la nefropatía por contraste completan las complicaciones. Después del by-pass, los injertos venosos se ocluyen con más frecuencia que la arteria mamaria, y de ahí la importancia de la aspirina y la estatina.",
          "<strong>Pacientes distintos:</strong> en el <strong>diabético</strong> y en el <strong>adulto mayor</strong> la isquemia puede ser silente o presentarse como disnea, por lo que el seguimiento se basa en la capacidad funcional y no solo en el dolor; en la <strong>mujer</strong> son más frecuentes la angina atípica y la disfunción microvascular (angina con coronarias normales o ateromatosis leve), que se trata con betabloqueador, calcioantagonista, estatina e IECA; en el <strong>paciente con anemia o hipertiroidismo</strong> se corrige la causa que desencadena la isquemia antes de intensificar los antianginosos. La insuficiencia renal obliga a ajustar los fármacos de eliminación renal (atenolol) y a vigilar el potasio con los inhibidores del SRAA.",
          "<strong>Errores clásicos que el examen castiga:</strong> usar nitratos de acción larga o calcioantagonistas como si redujeran la mortalidad; asociar verapamilo o diltiazem a un betabloqueador; dar un betabloqueador no selectivo al asmático o al paciente con vasoespasmo; indicar nitroglicerina sublingual a quien tomó sildenafil o tadalafil; pedir una angiografía antes de optimizar la terapia médica en un paciente de bajo riesgo; o suspender la aspirina por una molestia gástrica leve (que se maneja con un inhibidor de la bomba de protones) y no por sangrado digestivo mayor."
        ]
      },
      {
        "subhead": "6. Seguimiento y Señales de Alarma",
        "paragraphs": [
          "El control periódico en el nivel primario revisa la frecuencia de las crisis, la clase funcional (CCS), la frecuencia cardíaca de reposo, la presión arterial, el c-LDL, la glicemia y la adherencia. Se repite la estratificación (ergometría o imagen) si los síntomas cambian. Se deriva de urgencia al paciente cuyos síntomas se aceleran o aparecen en reposo (<strong>angina inestable</strong>, Tema 2.4) y se educa en el uso de la nitroglicerina: una crisis que no cede con 3 dosis en 15 minutos exige llamar a una ambulancia y acudir a urgencias, porque puede tratarse de un infarto."
        ]
      }
    ],
    "table": {
      "title": "Tabla 2.3.A · Esquema de Terapia Médica Óptima en la Angina Crónica Estable (Norma Técnica MINSAL)",
      "headers": [
        "Pilar farmacológico",
        "Fármaco de 1.ª elección",
        "Dosis estándar diaria",
        "Objetivo clínico / meta"
      ],
      "rows": [
        [
          "1. Antiagregación",
          "Aspirina (alternativa: clopidogrel 75 mg)",
          "100 mg/día VO, indefinida",
          "Inhibe la COX-1 plaquetaria; reduce infarto y muerte"
        ],
        [
          "2. Hipolipemiante potente",
          "Atorvastatina / rosuvastatina",
          "40-80 mg/día / 20-40 mg/día VO",
          "Estabiliza la placa; meta c-LDL < 55 mg/dL y reducción ≥ 50%"
        ],
        [
          "3. Bloqueador del SRAA",
          "Enalapril / losartán",
          "10-20 mg/día (hasta c/12 h) / 50-100 mg/día",
          "Obligatorio si HTA, diabetes, ERC o FEVI ≤ 40%"
        ],
        [
          "4. Antianginoso de 1.ª línea",
          "Bisoprolol / atenolol / metoprolol succinato",
          "5-10 mg / 50-100 mg / según presentación",
          "Bloqueo beta-1; meta FC de reposo 55-60 lpm"
        ],
        [
          "5. Antianginoso de 2.ª línea",
          "Amlodipino (o diltiazem/verapamilo sin BB)",
          "5-10 mg/día VO",
          "Vasodilatación coronaria; alivio sintomático"
        ],
        [
          "6. Nitratos",
          "Nitroglicerina SL; isosorbide de acción larga",
          "0,6 mg SOS (hasta 3 dosis) / 20 mg c/12 h",
          "Alivio de la crisis en < 5 min; prohibidos con sildenafil o tadalafil"
        ]
      ]
    },
    "vignette": "Hombre de 61 años, hipertenso, diabético y fumador, con una angina estable de clase II-III confirmada por ergometría, que ya recibe losartán 50 mg y metformina. Su c-LDL es de 148 mg/dL, su frecuencia cardíaca de reposo de 82 lpm y su presión arterial de 142/86 mmHg. No tiene asma ni bloqueo AV. La coronariografía mostró lesiones significativas en la descendente anterior proximal y en la circunfleja, con tronco izquierdo sano y FEVI de 55%.",
    "explicacion": "Se inicia de inmediato terapia médica óptima: aspirina 100 mg/día, atorvastatina 80 mg/día (meta c-LDL < 55 mg/dL), mantener el bloqueador del SRAA por su hipertensión y su diabetes, bisoprolol 5 mg/día con meta de frecuencia cardíaca de 55-60 lpm, y nitroglicerina sublingual 0,6 mg SOS (con la advertencia de no usarla junto con sildenafil). Se suspende el tabaco y se refiere a rehabilitación cardíaca. Con enfermedad de 2 vasos sin compromiso del tronco, FEVI conservada y SYNTAX bajo, la revascularización de elección es la angioplastía con stent farmacoactivo (no el by-pass), seguida de doble antiagregación por 6 meses y aspirina de por vida.",
    "keyPoints": [
      "Aspirina 100 mg/día y estatina de alta potencia (atorvastatina 40-80 mg) reducen infarto y mortalidad: son obligatorias en todos; meta c-LDL < 55 mg/dL y reducción ≥ 50%.",
      "IECA o ARA II obligatorios si hay HTA, diabetes, ERC o FEVI ≤ 40%.",
      "Primera línea antianginosa: betabloqueador cardioselectivo (bisoprolol 5-10 mg), con meta de FC de reposo de 55-60 lpm.",
      "Si el betabloqueador está contraindicado (asma grave, bloqueo AV, bradicardia): amlodipino (o diltiazem/verapamilo sin betabloqueador).",
      "Nitroglicerina sublingual 0,6 mg SOS, hasta 3 dosis cada 5 minutos; prohibida con sildenafil (24 h) o tadalafil (48 h).",
      "Nitratos, calcioantagonistas, ivabradina, ranolazina y trimetazidina alivian el dolor pero no reducen la mortalidad.",
      "1 o 2 vasos sin tronco → angioplastía con stent farmacoactivo; tronco izquierdo ≥ 50% o 3 vasos en diabético o con FEVI baja (SYNTAX alto) → by-pass con arteria mamaria.",
      "La terapia médica óptima se mantiene siempre, también después de un stent o un by-pass."
    ],
    "questions": [
      {
        "stem": "¿Cuál de los siguientes fármacos ha demostrado reducir de forma categórica la mortalidad a largo plazo y la tasa de infarto agudo al miocardio en pacientes portadores de angina crónica estable?",
        "options": [
          {
            "id": "A",
            "text": "Atorvastatina en dosis de alta potencia (80 mg al día)"
          },
          {
            "id": "B",
            "text": "Nitroglicerina sublingual en esquema fijo tres veces al día"
          },
          {
            "id": "C",
            "text": "Diltiazem oral en monoterapia"
          },
          {
            "id": "D",
            "text": "Mononitrato de isosorbide 20 mg cada 12 horas"
          },
          {
            "id": "E",
            "text": "Trimetazidina 35 mg cada 12 horas"
          }
        ],
        "correcta": "A",
        "explicacion": "Las estatinas de alta potencia y la aspirina son los pilares que han demostrado modificar la historia natural de la cardiopatía coronaria (estabilizan la placa y reducen el infarto y la mortalidad cardiovascular). Los nitratos, los calcioantagonistas y la trimetazidina son antianginosos sintomáticos: mejoran la tolerancia al esfuerzo pero no la sobrevida.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Una mujer de 58 años con angina estable de clase II, asma bronquial persistente grave con sibilancias frecuentes y diabetes, ya recibe aspirina y atorvastatina. ¿Qué fármaco antianginoso corresponde agregar como primera línea?",
        "options": [
          {
            "id": "A",
            "text": "Propranolol"
          },
          {
            "id": "B",
            "text": "Bisoprolol"
          },
          {
            "id": "C",
            "text": "Amlodipino"
          },
          {
            "id": "D",
            "text": "Atenolol"
          },
          {
            "id": "E",
            "text": "Sotalol"
          }
        ],
        "correcta": "C",
        "explicacion": "El betabloqueador es la primera línea antianginosa, pero está contraindicado en el asma grave broncoespástica (incluso los cardioselectivos pueden desencadenar broncoespasmo en dosis altas). En ese caso la alternativa de primera línea es un calcioantagonista, en la práctica el amlodipino. Propranolol y sotalol son betabloqueadores no selectivos.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Un hombre de 62 años con angina estable consulta por una crisis de dolor torácico opresivo de 10 minutos que no cede con reposo. Refiere que hace 3 horas tomó sildenafil. ¿Qué fármaco está contraindicado en este momento?",
        "options": [
          {
            "id": "A",
            "text": "Aspirina masticada"
          },
          {
            "id": "B",
            "text": "Nitroglicerina sublingual"
          },
          {
            "id": "C",
            "text": "Atorvastatina"
          },
          {
            "id": "D",
            "text": "Clopidogrel"
          },
          {
            "id": "E",
            "text": "Enoxaparina"
          }
        ],
        "correcta": "B",
        "explicacion": "Los nitratos están contraindicados hasta 24 horas después de sildenafil (48 horas con tadalafil) por el riesgo de hipotensión grave refractaria. Además, una crisis de más de 10-20 minutos que no cede con el reposo exige descartar un síndrome coronario agudo con un ECG y troponina.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Un diabético de 64 años con angina estable limitante tiene una coronariografía que muestra estenosis de 60% del tronco coronario izquierdo, estenosis de 80% de la descendente anterior proximal y de 75% de la coronaria derecha, con FEVI de 38%. ¿Cuál es el método de revascularización de elección?",
        "options": [
          {
            "id": "A",
            "text": "Angioplastía con stent farmacoactivo del tronco únicamente"
          },
          {
            "id": "B",
            "text": "Cirugía de by-pass aortocoronario"
          },
          {
            "id": "C",
            "text": "Solo terapia médica óptima, sin revascularización"
          },
          {
            "id": "D",
            "text": "Fibrinólisis con tenecteplase"
          },
          {
            "id": "E",
            "text": "Balón de contrapulsación intraaórtico permanente"
          }
        ],
        "correcta": "B",
        "explicacion": "La enfermedad del tronco izquierdo (estenosis ≥ 50%) con enfermedad de 3 vasos en un diabético con disfunción ventricular y anatomía compleja (SYNTAX alto) es una indicación de cirugía de by-pass con arteria mamaria interna, que mejora la sobrevida frente al stent. La fibrinólisis solo se usa en el infarto con supradesnivel del ST.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "2.1§3 · 2.1§4p4 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-13",
    "classId": "cardio-13",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Cardiopatía Coronaria",
    "topicLabel": "2.4",
    "title": "SCA sin Supradesnivel del ST: Angina Inestable e Infarto sin Supradesnivel",
    "perfilCode": "1.01.2.001, 1.01.4.009",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES N.º 5): Infarto Agudo del Miocardio",
    "reconstrucciones": "",
    "frecuencia": "Alta · Diferencia entre angina inestable e infarto sin supradesnivel, doble antiagregación con ticagrelor, anticoagulación, momento de la coronariografía y contraindicación de la fibrinólisis",
    "svg": null,
    "algoTitle": "Algoritmo del síndrome coronario agudo sin supradesnivel del ST",
    "diagram": {
      "title": "SCA sin Supradesnivel del ST: Troponina, Riesgo y Momento de la Coronariografía",
      "svg": "<svg viewBox=\"0 0 620 520\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar24\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar24)}\n  </style>\n  <rect class=\"b\" x=\"100\" y=\"6\" width=\"420\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"21\" text-anchor=\"middle\" font-weight=\"700\">Dolor anginoso agudo sin supradesnivel del ST</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">ECG: infradesnivel ≥ 0,5 mm, T negativas, ST transitorio o ECG normal</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"dec\" x=\"90\" y=\"58\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\">Troponina ultrasensible a las 0 y 1 h (o 0 y 3 h)</text>\n  <text class=\"sub\" x=\"310\" y=\"86\" text-anchor=\"middle\">Se interpreta la curva; el primer valor solo no descarta</text>\n  <path class=\"ln\" d=\"M130,98 V120\"/>\n  <path class=\"ln\" d=\"M310,98 V120\"/>\n  <path class=\"ln\" d=\"M490,98 V120\"/>\n  <rect class=\"b\" x=\"12\" y=\"120\" width=\"236\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"130\" y=\"135\" text-anchor=\"middle\" font-weight=\"700\">Rule-out: sin necrosis</text>\n  <text class=\"sub\" x=\"130\" y=\"148\" text-anchor=\"middle\">Basal muy bajo o sin delta + bajo riesgo (GRACE &lt; 109)</text>\n  <rect class=\"dec\" x=\"250\" y=\"120\" width=\"120\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"135\" text-anchor=\"middle\" font-weight=\"700\">Zona</text>\n  <text class=\"sub\" x=\"310\" y=\"148\" text-anchor=\"middle\">intermedia: repetir</text>\n  <text class=\"sub\" x=\"310\" y=\"159\" text-anchor=\"middle\">a las 3 h</text>\n  <rect class=\"acc\" x=\"372\" y=\"120\" width=\"236\" height=\"46\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"490\" y=\"135\" text-anchor=\"middle\" font-weight=\"700\">Rule-in: IAMSEST</text>\n  <text class=\"accS\" x=\"490\" y=\"148\" text-anchor=\"middle\">Troponina sobre el percentil 99 con curva</text>\n  <path class=\"ln\" d=\"M130,166 V184\"/>\n  <path class=\"ln\" d=\"M490,166 V184\"/>\n  <rect class=\"warn\" x=\"12\" y=\"184\" width=\"236\" height=\"52\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"130\" y=\"199\" text-anchor=\"middle\" font-weight=\"700\">Dolor persistente, ECG o clínica sugestivos</text>\n  <text class=\"warnT sub\" x=\"130\" y=\"212\" text-anchor=\"middle\">Angina inestable (troponina normal): se maneja</text>\n  <text class=\"warnT sub\" x=\"130\" y=\"223\" text-anchor=\"middle\">igual que el SCASEST de riesgo</text>\n  <rect class=\"acc\" x=\"372\" y=\"184\" width=\"236\" height=\"52\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"490\" y=\"199\" text-anchor=\"middle\" font-weight=\"700\">Hospitalizar en unidad coronaria</text>\n  <text class=\"accS\" x=\"490\" y=\"212\" text-anchor=\"middle\">AAS + ticagrelor + fondaparinux/enoxaparina</text>\n  <text class=\"accS\" x=\"490\" y=\"223\" text-anchor=\"middle\">Atorvastatina 80 mg · NTG · BB oral</text>\n  <path class=\"ln\" d=\"M310,236 V254\"/>\n  <rect class=\"dec\" x=\"90\" y=\"254\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"269\" text-anchor=\"middle\" font-weight=\"700\">Estratificar: Killip, TIMI (0-7), GRACE (&gt; 140 = alto)</text>\n  <text class=\"sub\" x=\"310\" y=\"282\" text-anchor=\"middle\">Define cuándo se hace la coronariografía</text>\n  <path class=\"ln\" d=\"M130,294 V312\"/>\n  <path class=\"ln\" d=\"M310,294 V312\"/>\n  <path class=\"ln\" d=\"M490,294 V312\"/>\n  <rect class=\"warn\" x=\"12\" y=\"312\" width=\"196\" height=\"66\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"110\" y=\"327\" text-anchor=\"middle\" font-weight=\"700\">MUY ALTO RIESGO: &lt; 2 h</text>\n  <text class=\"warnT sub\" x=\"110\" y=\"340\" text-anchor=\"middle\">Shock o inestabilidad</text>\n  <text class=\"warnT sub\" x=\"110\" y=\"351\" text-anchor=\"middle\">Dolor refractario a nitratos</text>\n  <text class=\"warnT sub\" x=\"110\" y=\"362\" text-anchor=\"middle\">Arritmia maligna · IC aguda</text>\n  <rect class=\"acc\" x=\"214\" y=\"312\" width=\"196\" height=\"66\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"312\" y=\"327\" text-anchor=\"middle\" font-weight=\"700\">ALTO RIESGO: &lt; 24 h</text>\n  <text class=\"accS\" x=\"312\" y=\"340\" text-anchor=\"middle\">GRACE &gt; 140</text>\n  <text class=\"accS\" x=\"312\" y=\"351\" text-anchor=\"middle\">Troponina elevada con curva</text>\n  <text class=\"accS\" x=\"312\" y=\"362\" text-anchor=\"middle\">Cambios dinámicos del ST</text>\n  <rect class=\"b\" x=\"416\" y=\"312\" width=\"192\" height=\"66\" rx=\"3\"/>\n  <text class=\"t\" x=\"512\" y=\"327\" text-anchor=\"middle\" font-weight=\"700\">BAJO RIESGO: selectiva</text>\n  <text class=\"sub\" x=\"512\" y=\"340\" text-anchor=\"middle\">TIMI 0-1, GRACE &lt; 109</text>\n  <text class=\"sub\" x=\"512\" y=\"351\" text-anchor=\"middle\">Troponina negativa</text>\n  <text class=\"sub\" x=\"512\" y=\"362\" text-anchor=\"middle\">Prueba no invasiva primero</text>\n  <path class=\"ln\" d=\"M310,378 V396\"/>\n  <rect class=\"warn\" x=\"12\" y=\"396\" width=\"596\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"411\" text-anchor=\"middle\" font-weight=\"700\">La fibrinólisis está CONTRAINDICADA en el SCASEST</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"424\" text-anchor=\"middle\">No hay trombo oclusivo rojo: el trombo es blanco y suboclusivo, y la fibrinólisis solo aumenta el riesgo de sangrado</text>\n\n</svg>"
    },
    "contexto": "La mayoría de los pacientes que llegan con dolor coronario agudo a un servicio de urgencia no tienen supradesnivel del ST: tienen un ECG con infradesnivel o ondas T negativas, o incluso un ECG normal, y su arteria está parcialmente ocluida por un trombo blanco. El error clásico es tranquilizarse por el trazado o por una primera troponina normal. Este tema enseña a separar la angina inestable del infarto sin supradesnivel, a estratificar el riesgo para decidir cuándo va el paciente a la coronariografía, a iniciar el tratamiento antitrombótico correcto y a recordar lo más preguntado: la fibrinólisis no se usa. El médico general debe sospechar, iniciar el tratamiento y derivar.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Definiciones: Trombo Blanco Suboclusivo",
        "paragraphs": [
          "Los síndromes coronarios agudos sin supradesnivel del ST (SCASEST) son un espectro clínico originado por la <strong>rotura o la erosión de una placa aterosclerótica vulnerable</strong>, sobre la cual se forma un <strong>trombo plaquetario parcialmente oclusivo («trombo blanco», suboclusivo)</strong> que causa isquemia miocárdica aguda y microembolización distal. A diferencia del SCACEST, la arteria no está ocluida por completo (el trombo del infarto con supradesnivel es el trombo rojo, rico en fibrina y glóbulos rojos): por eso la fibrinólisis no ayuda y los antiplaquetarios y anticoagulantes son el tratamiento.",
          "El espectro incluye dos entidades que se diferencian por el biomarcador: la <strong>angina inestable</strong> cursa con <strong>isquemia miocárdica sin necrosis detectable</strong> (troponinas normales); el <strong>infarto sin supradesnivel (IAMSEST)</strong> presenta <strong>necrosis documentada por la elevación o caída típica de troponina ultrasensible</strong>, con al menos un valor sobre el percentil 99. Con el ECG ocurre algo parecido: puede ser normal en la mitad de los casos, mostrar <strong>infradesnivel del ST ≥ 0,5 mm</strong> o <strong>inversión de la onda T</strong> (sobre todo en las derivaciones precordiales) o cambios transitorios del ST durante el dolor. Los signos de alto riesgo en el trazado son el infradesnivel dinámico del ST, las ondas T profundas de V2-V3 (patrón de Wellens, que indica una estenosis crítica de la descendente anterior proximal) y el supradesnivel de aVR con infradesnivel difuso (tronco o enfermedad de tres vasos).",
          "<strong>Formas de presentación de la angina inestable (criterios de Braunwald):</strong> 1) <strong>angina de reposo</strong>: dolor anginoso típico en reposo y prolongado (&gt; 20 minutos); 2) <strong>angina de reciente comienzo</strong>: angina nueva, grave (clase III o IV de la CCS), iniciada en los últimos 2 meses; 3) <strong>angina en crescendo</strong>: angina previamente estable que aumenta de forma marcada en frecuencia, duración o intensidad, o aparece con esfuerzos menores; 4) <strong>angina post-IAM</strong>: la que reaparece dentro de las dos primeras semanas después de un infarto."
        ]
      },
      {
        "subhead": "2. Diagnóstico: Troponina Ultrasensible 0/1 h y Clasificación de Killip-Kimball",
        "paragraphs": [
          "La norma técnica y las guías internacionales recomiendan el protocolo acelerado de troponina ultrasensible a las <strong>0 y 1 horas</strong> (o 0 y 2-3 horas), que se explica en detalle en el Tema 2.1:",
          "• <strong>Rule-out (descarte seguro de necrosis):</strong> si la concentración basal es extremadamente baja, o si a la hora el delta es insignificante, y el paciente está asintomático con bajo riesgo clínico (<strong>GRACE &lt; 140</strong> en el protocolo de la norma, y &lt; 109 para la estrategia selectiva), se descarta el infarto con un valor predictivo negativo &gt; 99% y se planifica el estudio ambulatorio. Una troponina normal en un paciente con cuadro típico y dolor reciente, sin embargo, <strong>no descarta angina inestable</strong>: se repite y se observa.",
          "• <strong>Rule-in (confirmación inmediata):</strong> si la concentración basal es muy alta o el delta a la hora es significativo, se confirma el IAMSEST y se hospitaliza en una unidad coronaria o de cuidados intensivos con terapia antitrombótica plena.",
          "<strong>Clasificación pronóstica de Killip-Kimball</strong> en el infarto agudo: <strong>Killip I</strong> (mortalidad intrahospitalaria ~5%): sin signos de insuficiencia cardíaca ni congestión; <strong>Killip II</strong> (~10-15%): insuficiencia cardíaca leve-moderada, con crépitos basales en menos de la mitad de los campos o galope por tercer ruido; <strong>Killip III</strong> (~40%): edema agudo de pulmón con crépitos en más de la mitad de los campos; <strong>Killip IV</strong> (&gt; 60-80%): <strong>shock cardiogénico</strong> (PAS &lt; 90 mmHg, frialdad distal, oliguria). Un SCASEST con insuficiencia cardíaca, shock o arritmia maligna es de muy alto riesgo.",
          "Otras pruebas: el <strong>ecocardiograma</strong> busca alteraciones segmentarias y descarta otras causas (disección, estenosis aórtica, miocarditis, derrame); la <strong>radiografía de tórax</strong> descarta causas pulmonares; y el diagnóstico diferencial incluye la disección aórtica, el TEP, la pericarditis, la miocarditis y el Takotsubo (Tema 2.1)."
        ]
      },
      {
        "subhead": "3. Estratificación del Riesgo Isquémico y Hemorrágico: TIMI, GRACE y CRUSADE",
        "paragraphs": [
          "Una vez confirmado el SCASEST, la estratificación del riesgo determina la urgencia de la coronariografía:",
          "• <strong>Puntaje TIMI de SCASEST (0 a 7 puntos)</strong>, un punto por cada variable: 1) edad ≥ 65 años; 2) ≥ 3 factores de riesgo cardiovascular (hipertensión, diabetes, dislipidemia, tabaquismo, antecedente familiar precoz); 3) estenosis coronaria previa conocida ≥ 50%; 4) uso de aspirina en los últimos 7 días; 5) ≥ 2 episodios de angina en las últimas 24 horas; 6) desviación del segmento ST ≥ 0,5 mm; 7) marcadores de necrosis (troponina) elevados. <em>Interpretación:</em> 0-2 puntos, bajo riesgo; 3-4, riesgo intermedio; 5-7, alto riesgo.",
          "• <strong>Puntaje GRACE:</strong> estima la mortalidad intrahospitalaria y a 6 meses con la edad, la frecuencia cardíaca, la presión arterial, la creatinina, la clase de Killip, el paro cardíaco al ingreso, la desviación del ST y la troponina. Un <strong>GRACE &gt; 140</strong> define un paciente de <strong>alto riesgo isquémico</strong>; un GRACE &lt; 109 es de bajo riesgo.",
          "• <strong>Puntaje CRUSADE:</strong> estima el riesgo de sangrado intrahospitalario (hematocrito, aclaramiento de creatinina, frecuencia cardíaca, sexo, signos de insuficiencia cardíaca, enfermedad vascular previa, diabetes y presión sistólica) y orienta a elegir el anticoagulante de menor riesgo (fondaparinux) y el acceso radial en los de alto riesgo hemorrágico."
        ]
      },
      {
        "subhead": "4. Tratamiento Inmediato: Doble Antiagregación, Anticoagulación y Antiisquémicos",
        "paragraphs": [
          "<strong>1) Doble antiagregación plaquetaria (DAPT):</strong> <strong>aspirina 250 a 500 mg masticada</strong> (luego 100 mg/día de por vida) más <strong>ticagrelor 180 mg de carga</strong> (seguido de 90 mg cada 12 horas por vía oral), que es de primera línea sobre el clopidogrel porque reduce la mortalidad cardiovascular y el infarto recurrente. Si el ticagrelor está contraindicado o no está disponible, o si el paciente recibe anticoagulantes orales, se usa <strong>clopidogrel 300-600 mg de carga</strong> (75 mg/día de mantención). El prasugrel solo se emplea cuando la anatomía coronaria ya es conocida y se va a hacer una angioplastía. El ticagrelor está contraindicado si hay antecedente de hemorragia intracraneal, y puede producir disnea y bradicardia. La DAPT se mantiene por 12 meses.",
          "<strong>2) Anticoagulación parenteral inmediata:</strong> <strong>fondaparinux 2,5 mg/día por vía subcutánea</strong> (fármaco de elección por su menor riesgo de sangrado) o <strong>enoxaparina 1 mg/kg cada 12 horas por vía subcutánea</strong> (ajustar a 1 mg/kg una vez al día si la VFG es &lt; 30 mL/min). Si se planifica una angioplastía inmediata se emplea heparina no fraccionada en bolo durante el procedimiento (y se evita el fondaparinux solo, por el riesgo de trombosis del catéter).",
          "<strong>3) Antiisquémicos y estatina:</strong> <strong>nitroglicerina sublingual o endovenosa</strong> si hay dolor persistente (contraindicada en el infarto del ventrículo derecho, con PAS &lt; 90 mmHg y tras sildenafil o tadalafil); <strong>betabloqueadores orales precoces</strong> (bisoprolol o carvedilol) si no hay insuficiencia cardíaca aguda, shock, bradicardia ni bloqueo AV; <strong>atorvastatina 80 mg/día</strong> desde las primeras 24 horas, independiente del colesterol basal. Oxígeno solo si SatO₂ &lt; 90%. La <strong>fibrinólisis está contraindicada</strong> en el SCASEST: no hay oclusión total ni supradesnivel, y solo aumenta el sangrado.",
          "<strong>4) Momento de la coronariografía:</strong> <em>estrategia invasiva inmediata (&lt; 2 horas)</em> en el paciente de <strong>muy alto riesgo</strong> (inestabilidad hemodinámica o shock cardiogénico, dolor torácico refractario a nitratos, arritmias ventriculares malignas o insuficiencia cardíaca aguda); <em>estrategia invasiva precoz (&lt; 24 horas)</em> en el de <strong>alto riesgo</strong> (GRACE &gt; 140, troponina elevada con curva confirmada o cambios dinámicos del ST); <em>estrategia selectiva</em> en el de bajo riesgo (TIMI 0-1, GRACE &lt; 109, troponina negativa), previa evaluación con una prueba no invasiva (Tema 2.2). Después de la coronariografía se decide stent o by-pass según la anatomía (Tema 2.3). En los SCASEST el médico general inicia el tratamiento y <strong>deriva al centro con hemodinamia</strong> según el riesgo."
        ]
      },
      {
        "subhead": "5. Después de la Fase Aguda: Alta y Prevención Secundaria",
        "paragraphs": [
          "Antes del alta se mide la fracción de eyección con un ecocardiograma y se indica la <strong>prevención secundaria</strong> completa: aspirina de por vida, el segundo antiagregante (ticagrelor o clopidogrel) por 12 meses, atorvastatina 80 mg/día (meta c-LDL &lt; 55 mg/dL), betabloqueador (obligatorio si la FEVI es &lt; 40%), IECA o ARA II (si hay FEVI reducida, diabetes, hipertensión o enfermedad renal), cesación del tabaco, control de la presión y la glicemia, y rehabilitación cardíaca. Si la FEVI persiste ≤ 35% a pesar del tratamiento óptimo se evalúa un desfibrilador implantable. Un paciente con angina inestable cuya coronariografía es normal debe estudiarse por otras causas (vasoespasmo, disfunción microvascular, MINOCA).",
          "<strong>Situaciones especiales.</strong> En el <strong>diabético, la mujer y el adulto mayor</strong> el SCASEST es más frecuente y se presenta con disnea, fatiga, náuseas o epigastralgia sin dolor típico, y se retrasa el diagnóstico. El <strong>infarto tipo 2</strong> (anemia grave, taquiarritmia, hipotensión, crisis hipertensiva, sepsis) eleva la troponina por un desbalance entre aporte y demanda y se trata corrigiendo la causa; no recibe doble antiagregación de rutina. El <strong>MINOCA</strong> (infarto con coronarias sin obstrucción) y la <strong>miocardiopatía de estrés (Takotsubo)</strong>, frecuente en mujeres posmenopáusicas tras un estrés emocional, simulan un SCASEST y se aclaran con coronariografía y resonancia. En el paciente con <strong>anticoagulación oral</strong> (por ejemplo, con fibrilación auricular) se prefiere clopidogrel y se coordina con el cardiólogo el tiempo de la triple terapia. En la <strong>insuficiencia renal</strong> se ajusta la enoxaparina y se evita el fondaparinux cuando la VFG es &lt; 20 mL/min.",
          "<strong>Errores clásicos que el examen castiga:</strong> dar de alta a un paciente por una primera troponina y un ECG normales sin repetirlos; usar fibrinolíticos en un infradesnivel del ST; indicar clopidogrel en vez de ticagrelor cuando no hay motivo; esperar 24 horas ante un dolor refractario con inestabilidad; olvidar que la angina inestable no eleva la troponina; y confundir un infradesnivel de V1-V3 con R altas (infarto posterior, que se trata como SCACEST) con un SCASEST (Tema 2.5)."
        ]
      }
    ],
    "table": {
      "title": "Tabla 2.4.A · Protocolo Farmacológico Inmediato en el SCASEST (Dosis del Adulto)",
      "headers": [
        "Fármaco / vía",
        "Dosis de carga inicial",
        "Dosis de mantención",
        "Rol terapéutico y advertencias"
      ],
      "rows": [
        [
          "Aspirina VO",
          "250 a 500 mg masticada",
          "100 mg/día VO, indefinida",
          "Inhibe la COX-1; antiagregación universal inmediata"
        ],
        [
          "Ticagrelor VO (1.ª línea)",
          "180 mg de carga",
          "90 mg cada 12 horas VO",
          "Inhibidor P2Y12 potente; superior al clopidogrel; contraindicado con hemorragia intracraneal previa"
        ],
        [
          "Clopidogrel VO (2.ª línea)",
          "300 a 600 mg de carga",
          "75 mg/día VO",
          "Alternativa si el ticagrelor está contraindicado o hay anticoagulación oral"
        ],
        [
          "Fondaparinux SC",
          "2,5 mg/día",
          "2,5 mg/día SC",
          "De elección por menor sangrado; no usar solo en la angioplastía"
        ],
        [
          "Enoxaparina SC",
          "1 mg/kg cada 12 horas",
          "1 mg/kg c/12 h (c/24 h si VFG < 30 mL/min)",
          "Anticoagulante parenteral alternativo durante la hospitalización"
        ],
        [
          "Atorvastatina VO",
          "80 mg la primera noche",
          "80 mg/día VO",
          "Estatina de alta potencia; estabilización precoz de la placa"
        ],
        [
          "Nitroglicerina / betabloqueador",
          "SL o EV si dolor / oral precoz",
          "Según clínica",
          "Sin shock, bradicardia ni IC aguda; la fibrinólisis NO se usa"
        ]
      ]
    },
    "vignette": "Mujer de 68 años, hipertensa y dislipidémica, consulta en un servicio de urgencia por tres episodios de dolor retroesternal opresivo de 25 minutos de duración, en reposo, en las últimas 12 horas. El ECG muestra infradesnivel del ST de 1,5 mm en V4-V6. La primera troponina ultrasensible es de 48 pg/mL (referencia < 14 pg/mL) y a la hora aumenta a 85 pg/mL. PA 150/85 mmHg, FC 82 lpm, pulmones limpios.",
    "explicacion": "La paciente tiene un síndrome coronario agudo sin supradesnivel del ST, y como la troponina está elevada con curva ascendente, un IAMSEST (si la troponina hubiera sido normal con el mismo cuadro sería una angina inestable, que se maneja igual). Su TIMI es 5: edad ≥ 65 (1), ≥ 3 factores de riesgo (1), infradesnivel del ST (1), troponina positiva (1) y ≥ 2 episodios de angina en 24 horas (1): alto riesgo. La conducta es hospitalizar en unidad coronaria, dar aspirina 250 mg masticada y ticagrelor 180 mg, fondaparinux 2,5 mg o enoxaparina 1 mg/kg cada 12 horas, atorvastatina 80 mg, y programar la coronariografía en las primeras 24 horas. La fibrinólisis está contraindicada.",
    "keyPoints": [
      "El SCASEST es un trombo blanco suboclusivo: la angina inestable no eleva la troponina; el IAMSEST sí, con curva sobre el percentil 99.",
      "Una primera troponina y un ECG normales no descartan angina inestable: se repite la troponina (0/1 h) y el ECG.",
      "Angina inestable (Braunwald): de reposo (> 20 min), de reciente comienzo (clase III-IV en 2 meses), en crescendo y post-IAM (< 2 semanas).",
      "Doble antiagregación: aspirina 250-500 mg masticada + ticagrelor 180 mg (clopidogrel 300-600 mg si no se puede); anticoagulante: fondaparinux 2,5 mg (menor sangrado) o enoxaparina 1 mg/kg c/12 h.",
      "La fibrinólisis está contraindicada en el SCASEST.",
      "Estratificación: TIMI 0-7 (5-7 alto riesgo), GRACE > 140 = alto riesgo, Killip I-IV.",
      "Coronariografía: < 2 h si el riesgo es muy alto (shock, dolor refractario, arritmia maligna, IC aguda); < 24 h si el riesgo es alto (GRACE > 140, troponina o ST dinámico); selectiva si es bajo.",
      "Al alta: aspirina de por vida, P2Y12 por 12 meses, atorvastatina 80 mg, betabloqueador, IECA o ARA II y rehabilitación."
    ],
    "questions": [
      {
        "stem": "Hombre de 64 años con dolor torácico opresivo de reposo prolongado ingresa a urgencias. El ECG muestra infradesnivel del ST de 2 mm en derivaciones DII, DIII y aVF. Troponinas ultrasensibles positivas. ¿Cuál es el esquema antitrombótico inicial más adecuado mientras se programa la coronariografía?",
        "options": [
          {
            "id": "A",
            "text": "Aspirina 250 mg + Ticagrelor 180 mg + Enoxaparina 1 mg/kg subcutánea"
          },
          {
            "id": "B",
            "text": "Aspirina 100 mg en monoterapia oral"
          },
          {
            "id": "C",
            "text": "Trombólisis con Tenecteplase endovenoso inmediato"
          },
          {
            "id": "D",
            "text": "Heparina no fraccionada en infusión sin antiagregantes plaquetarios"
          },
          {
            "id": "E",
            "text": "Acenocumarol oral para alcanzar INR de 2.5"
          }
        ],
        "correcta": "A",
        "explicacion": "El pilar del SCASEST confirmado es la triple terapia antitrombótica inicial: doble antiagregación (aspirina más ticagrelor) y anticoagulación parenteral (enoxaparina o fondaparinux). La trombólisis está contraindicada en el SCASEST y solo se usa en el SCACEST; la monoterapia, la heparina sin antiagregantes y los antagonistas de la vitamina K no corresponden a la fase aguda.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "¿Cuál de los siguientes pacientes con SCASEST tiene indicación de coronariografía invasiva urgente en MENOS de 2 horas?",
        "options": [
          {
            "id": "A",
            "text": "Paciente con dolor torácico persistente refractario al tratamiento médico e inestabilidad hemodinámica"
          },
          {
            "id": "B",
            "text": "Paciente de 60 años asintomático tras recibir nitroglicerina con TIMI de 2 puntos"
          },
          {
            "id": "C",
            "text": "Paciente con dolor torácico autolimitado y troponinas negativas"
          },
          {
            "id": "D",
            "text": "Paciente hipertenso con ECG normal y dolor atípico"
          },
          {
            "id": "E",
            "text": "Paciente con Score GRACE de 110 puntos sin nuevos episodios de dolor"
          }
        ],
        "correcta": "A",
        "explicacion": "La coronariografía inmediata (< 2 horas) se reserva para los criterios de muy alto riesgo: shock cardiogénico o inestabilidad hemodinámica, dolor torácico refractario a nitratos y analgesia, arritmias ventriculares malignas o insuficiencia cardíaca aguda secundaria a isquemia. Los demás pacientes son de riesgo intermedio o bajo y se estudian en < 24 horas o de forma selectiva.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Hombre de 58 años, diabético, consulta por dos episodios de dolor opresivo en reposo de 30 minutos en las últimas 24 horas. El ECG muestra ondas T negativas de V2 a V5. La troponina ultrasensible es normal en las mediciones de las 0 y 3 horas. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Infarto agudo con supradesnivel del ST"
          },
          {
            "id": "B",
            "text": "Angina inestable"
          },
          {
            "id": "C",
            "text": "Angina crónica estable"
          },
          {
            "id": "D",
            "text": "Pericarditis aguda"
          },
          {
            "id": "E",
            "text": "Infarto sin supradesnivel del ST (IAMSEST)"
          }
        ],
        "correcta": "B",
        "explicacion": "Un dolor anginoso de reposo prolongado con ondas T negativas dinámicas, sin elevación de troponina en la curva, es una angina inestable: isquemia sin necrosis. Con troponina elevada y con curva sería un IAMSEST. La angina crónica estable es de esfuerzo y breve, y no cursa con cambios dinámicos del ECG ni dolor de reposo.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Mujer de 70 años con infradesnivel del ST y troponina elevada recibe aspirina, ticagrelor y enoxaparina. Un residente propone agregar tenecteplase porque el dolor persiste hace 6 horas. ¿Cuál es la respuesta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Está indicada la fibrinólisis porque el dolor persiste"
          },
          {
            "id": "B",
            "text": "La fibrinólisis está contraindicada en el SCASEST; corresponde coronariografía urgente si el dolor persiste"
          },
          {
            "id": "C",
            "text": "Se debe reemplazar el ticagrelor por estreptoquinasa"
          },
          {
            "id": "D",
            "text": "Se debe suspender la anticoagulación y esperar la evolución"
          },
          {
            "id": "E",
            "text": "Se debe esperar 72 horas y repetir la troponina"
          }
        ],
        "correcta": "B",
        "explicacion": "En el SCASEST el trombo es suboclusivo y la fibrinólisis solo aumenta el sangrado sin beneficio. El dolor refractario a nitratos con tratamiento médico es un criterio de muy alto riesgo y exige coronariografía inmediata (< 2 horas).",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "2.2§0 · 2.2§1 · 2.2§2 · 2.2§3 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-14",
    "classId": "cardio-14",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Cardiopatía Coronaria",
    "topicLabel": "2.5",
    "title": "SCA con Supradesnivel del ST: Diagnóstico Electrocardiográfico y Reperfusión GES",
    "perfilCode": "1.01.2.004, 1.01.5.009, 1.01.4.007",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N.º 5): Infarto Agudo del Miocardio",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Criterios ECG del supradesnivel y sus equivalentes, territorio y arteria culpable, regla de los 120 minutos, dosis de tenecteplase, contraindicaciones de fibrinólisis y terapia coadyuvante",
    "svg": null,
    "algoTitle": "Algoritmo de reperfusión del IAM con supradesnivel del ST (Guía GES)",
    "diagram": {
      "title": "Algoritmo de Reperfusión del IAM con Supradesnivel del ST (Regla de los 120 Minutos)",
      "svg": "<svg viewBox=\"0 0 620 450\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar25\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar25)}\n  </style>\n  <rect class=\"b\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Dolor torácico isquémico (opresivo, &gt; 20 minutos, no cede con reposo)</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">ECG de 12 derivaciones interpretado en ≤ 10 minutos desde el primer contacto médico</text>\n  <path class=\"ln\" d=\"M310,47 V67\"/>\n  <rect class=\"dec\" x=\"90\" y=\"67\" width=\"440\" height=\"42\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"83\" text-anchor=\"middle\" font-weight=\"700\">¿SDST en ≥ 2 derivaciones contiguas o BCRI nuevo?</text>\n  <text class=\"sub\" x=\"310\" y=\"97\" text-anchor=\"middle\">Equivalentes: IAM posterior (V7-V9) · infradesnivel difuso con SDST en aVR · ritmo de marcapaso con Sgarbossa</text>\n  <text class=\"lbl\" x=\"20\" y=\"126\">No → ECG seriado cada 15-30 min y troponina (Temas 2.1 y 2.4)</text>\n  <text class=\"lbl\" x=\"318\" y=\"126\">Sí</text>\n  <path class=\"ln\" d=\"M310,109 V137\"/>\n  <rect class=\"acc\" x=\"70\" y=\"137\" width=\"480\" height=\"40\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"153\" text-anchor=\"middle\" font-weight=\"700\">SCACEST: activar la red de reperfusión (GES)</text>\n  <text class=\"accS\" x=\"310\" y=\"167\" text-anchor=\"middle\">AAS 250 mg masticada + inhibidor P2Y12 + anticoagulante · O₂ solo si SatO₂ &lt; 90%</text>\n  <path class=\"ln\" d=\"M310,177 V197\"/>\n  <rect class=\"dec\" x=\"90\" y=\"197\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"213\" text-anchor=\"middle\" font-weight=\"700\">¿Angioplastía primaria posible en ≤ 120 min desde el diagnóstico?</text>\n  <text class=\"sub\" x=\"310\" y=\"227\" text-anchor=\"middle\">Shock cardiogénico o contraindicación de fibrinólisis → angioplastía, sin importar el tiempo</text>\n  <path class=\"ln\" d=\"M310,237 V255 H158 V267\"/>\n  <path class=\"ln\" d=\"M310,255 H462 V267\"/>\n  <text class=\"lbl\" x=\"150\" y=\"251\" text-anchor=\"end\">Sí</text>\n  <text class=\"lbl\" x=\"470\" y=\"251\">No (&gt; 120 min)</text>\n  <rect class=\"acc\" x=\"12\" y=\"267\" width=\"292\" height=\"54\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"283\" text-anchor=\"middle\" font-weight=\"700\">ANGIOPLASTÍA PRIMARIA (de elección)</text>\n  <text class=\"accS\" x=\"158\" y=\"297\" text-anchor=\"middle\">Traslado directo a hemodinamia 24/7 con stent</text>\n  <text class=\"accS\" x=\"158\" y=\"309\" text-anchor=\"middle\">Meta ≤ 90 min (≤ 60 min si el centro tiene hemodinamia)</text>\n  <rect class=\"warn\" x=\"316\" y=\"267\" width=\"292\" height=\"54\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"283\" text-anchor=\"middle\" font-weight=\"700\">FIBRINÓLISIS en ≤ 30 min (puerta-aguja)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"297\" text-anchor=\"middle\">Tenecteplase en bolo según peso (½ dosis si ≥ 75 años)</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"309\" text-anchor=\"middle\">+ clopidogrel 300 mg y enoxaparina · traslado siempre</text>\n  <path class=\"ln\" d=\"M158,321 V341\"/>\n  <path class=\"ln\" d=\"M462,321 V341\"/>\n  <rect class=\"dec\" x=\"316\" y=\"341\" width=\"292\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"357\" text-anchor=\"middle\" font-weight=\"700\">A los 60-90 min: ¿descendió el ST &gt; 50%?</text>\n  <text class=\"sub\" x=\"462\" y=\"370\" text-anchor=\"middle\">Alivio del dolor y RIVA acompañan a la reperfusión</text>\n  <path class=\"ln\" d=\"M462,381 V390 H387 V399\"/>\n  <path class=\"ln\" d=\"M462,390 H537 V399\"/>\n  <rect class=\"b\" x=\"316\" y=\"399\" width=\"142\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"387\" y=\"415\" text-anchor=\"middle\" font-weight=\"700\">Sí: farmacoinvasiva</text>\n  <text class=\"sub\" x=\"387\" y=\"429\" text-anchor=\"middle\">Coronariografía en 2-24 h</text>\n  <rect class=\"warn\" x=\"466\" y=\"399\" width=\"142\" height=\"44\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"537\" y=\"415\" text-anchor=\"middle\" font-weight=\"700\">No: ACTP de rescate</text>\n  <text class=\"warnT sub\" x=\"537\" y=\"429\" text-anchor=\"middle\">Traslado inmediato</text>\n  <rect class=\"dec\" x=\"12\" y=\"341\" width=\"292\" height=\"54\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"357\" text-anchor=\"middle\" font-weight=\"700\">Al alta: prevención secundaria (GES)</text>\n  <text class=\"sub\" x=\"158\" y=\"371\" text-anchor=\"middle\">AAS de por vida + P2Y12 por 12 meses · atorvastatina 80 mg</text>\n  <text class=\"sub\" x=\"158\" y=\"383\" text-anchor=\"middle\">Betabloqueador · IECA/ARA II · rehabilitación cardíaca</text>\n</svg>"
    },
    "contexto": "El infarto agudo del miocardio con supradesnivel del ST es la urgencia cardiovascular tiempo-dependiente por excelencia y una garantía GES: el médico general de un SAPU, de un SAR o de un hospital comunitario es quien toma el primer electrocardiograma y decide, en minutos, si el paciente viaja a angioplastía o recibe la fibrinólisis ahí mismo. El EUNACOM lo pregunta en todos los exámenes: reconocer el supradesnivel y sus equivalentes (el bloqueo de rama izquierda nuevo), ubicar el territorio, aplicar la regla de los 120 minutos, dosificar el tenecteplase, respetar las contraindicaciones y no caer en las trampas del tratamiento coadyuvante.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología: Oclusión Coronaria Total y «Tiempo es Músculo»",
        "paragraphs": [
          "El Síndrome Coronario Agudo con Supradesnivel del Segmento ST (SCACEST) es una emergencia médica tiempo-dependiente producida por la rotura (o erosión) de una placa aterosclerótica vulnerable sobre la cual se forma un <strong>trombo oclusivo total (100% de la luz / «trombo rojo») rico en fibrina y hematíes</strong>, generando isquemia transmural aguda y necrosis miocárdica progresiva que avanza en «frente de onda» desde el subendocardio hacia el subepicardio en las primeras 6 horas. El beneficio de reperfundir es máximo en las primeras 2 a 3 horas y cae con cada minuto: <strong>«tiempo es músculo»</strong>.",
          "La <strong>definición universal de infarto</strong> exige un ascenso y descenso de troponina con al menos un valor sobre el percentil 99, más evidencia de isquemia (síntomas, cambios nuevos del ECG, onda Q, alteración segmentaria nueva en la imagen o trombo en la angiografía). El infarto <strong>tipo 1</strong> es el aterotrombótico (el SCACEST clásico); el <strong>tipo 2</strong> se debe a un desbalance entre oferta y demanda de oxígeno (anemia grave, taquiarritmia, hipotensión, crisis hipertensiva). Pero el SCACEST <strong>se diagnostica con la clínica y el ECG</strong>: <em>nunca se espera la troponina para reperfundir</em>.",
          "Clínica típica: <strong>dolor retroesternal opresivo de más de 20 minutos</strong>, irradiado al brazo izquierdo, al cuello o a la mandíbula, que no cede con el reposo ni con la nitroglicerina, con diaforesis, náuseas y disnea. Los <strong>adultos mayores, las mujeres y los diabéticos</strong> pueden debutar sin dolor (disnea, síncope, confusión, epigastralgia), y ese infarto atípico es el que más se retrasa. En el joven con dolor torácico tras consumir <strong>cocaína</strong> (vasoespasmo más trombosis) los <strong>betabloqueadores están contraindicados</strong>: se tratan la agitación y la hipertensión con benzodiacepinas y nitratos."
        ]
      },
      {
        "subhead": "2. Diagnóstico Electrocardiográfico: Criterios, Equivalentes y Evolución",
        "paragraphs": [
          "Ante un dolor torácico se toma un <strong>ECG de 12 derivaciones interpretado en ≤ 10 minutos desde el primer contacto médico</strong>; si no es diagnóstico y el dolor persiste, se repite cada 15 a 30 minutos. El supradesnivel se mide en el <strong>punto J</strong> y debe estar presente en <strong>≥ 2 derivaciones contiguas</strong> (del mismo territorio):",
          "• En derivaciones <strong>V2 y V3</strong>: supradesnivel del ST <strong>≥ 2,0 mm (0,2 mV) en hombres ≥ 40 años</strong>; <strong>≥ 2,5 mm en hombres &lt; 40 años</strong>; y <strong>≥ 1,5 mm en mujeres de cualquier edad</strong>.",
          "• En <strong>todas las demás derivaciones</strong> (DI, DII, DIII, aVF, aVL, V1, V4, V5, V6): supradesnivel del ST <strong>≥ 1,0 mm (0,1 mV)</strong>.",
          "<em>Equivalentes de SCACEST (exigen reperfusión inmediata):</em> 1) <strong>Bloqueo completo de rama izquierda (BCRI) nuevo o presumiblemente nuevo</strong> en un paciente con clínica de infarto, apoyado por los criterios de Sgarbossa modificados por Smith: a) elevación del ST concordante ≥ 1 mm; b) depresión del ST concordante en V1-V3 ≥ 1 mm; c) elevación discordante excesiva (&gt; 25% de la amplitud de la onda S previa). Los mismos criterios sirven en el <strong>ritmo de marcapaso</strong>. 2) <strong>IAM posterior aislado</strong> (arteria circunfleja): infradesnivel horizontal del ST en V1-V3 con ondas R altas y T positivas (imagen en espejo); se confirma con las derivaciones posteriores <strong>V7, V8 y V9 (supradesnivel ≥ 0,5 mm)</strong>. 3) <strong>Infradesnivel del ST ≥ 1 mm en ≥ 8 derivaciones con supradesnivel en aVR</strong>: sugiere lesión del tronco coronario izquierdo o enfermedad de tres vasos y obliga a coronariografía urgente.",
          "<strong>Evolución temporal del ECG del infarto:</strong> en los primeros minutos aparecen <strong>ondas T hiperagudas</strong> (altas, anchas y simétricas); en las primeras horas, el <strong>supradesnivel convexo del ST</strong> («onda de lesión»); entre las 6 y 12 horas, la <strong>onda Q de necrosis</strong> (≥ 40 ms) con pérdida de la onda R; en los días siguientes el ST vuelve a la línea de base y la <strong>onda T se invierte</strong>; la onda Q suele persistir para siempre. Un <strong>supradesnivel que persiste más de 4 semanas</strong> sugiere un aneurisma ventricular.",
          "La <strong>imagen especular</strong> (cambios recíprocos) es el infradesnivel del ST en las derivaciones opuestas al territorio infartado: en el infarto inferior aparece en DI y aVL; en el anterior, en DIII y aVF. Su presencia tiene alta especificidad para infarto y es la clave para separarlo de sus imitadores: la <strong>pericarditis aguda</strong> (supradesnivel cóncavo, difuso y no territorial, con infradesnivel del PR, sin imagen especular ni ondas Q), la <strong>repolarización precoz</strong> (joven, ST cóncavo con muesca en J, estable en ECG seriados), el aneurisma ventricular, la hipertrofia ventricular izquierda, el patrón de Brugada y la hiperkalemia. Ante la duda: ECG seriados, ecocardiograma (alteración segmentaria de la motilidad) y consulta precoz con el centro de hemodinamia."
        ]
      },
      {
        "subhead": "3. Territorios, Arteria Culpable e Infarto del Ventrículo Derecho",
        "paragraphs": [
          "Las derivaciones con supradesnivel identifican la pared y la arteria culpable (Tabla 2.5.A): <strong>V1-V4 → pared anterior y septal, arteria descendente anterior (DA)</strong>; V1-V6 con DI y aVL → infarto anterior extenso por oclusión proximal de la DA (el de peor pronóstico); <strong>DI, aVL, V5-V6 → pared lateral, circunfleja o rama diagonal</strong>; <strong>DII, DIII y aVF → pared inferior, coronaria derecha en el 80-90% de los casos</strong> (si el supradesnivel es mayor en DIII que en DII y hay infradesnivel en DI y aVL, la culpable es la coronaria derecha; si es mayor en DII con supradesnivel en V5-V6, la circunfleja).",
          "Todo infarto inferior exige tomar las <strong>derivaciones derechas V3R y V4R</strong>: un supradesnivel ≥ 1 mm en V4R confirma el <strong>infarto del ventrículo derecho</strong> (oclusión proximal de la coronaria derecha). Su tríada es hipotensión, ingurgitación yugular y campos pulmonares limpios; se trata con volumen y están contraindicados los nitratos, los diuréticos y la morfina. La coronaria derecha irriga además el nodo AV, por lo que el infarto inferior se asocia a bradicardia sinusal y bloqueos AV, habitualmente transitorios (manejo completo en el Tema 2.6).",
          "El <strong>ecocardiograma</strong> muestra la alteración segmentaria de la motilidad del territorio y es útil cuando el ECG no es concluyente o se sospecha una complicación mecánica, pero <strong>nunca debe retrasar la reperfusión</strong> de un SCACEST evidente."
        ]
      },
      {
        "subhead": "4. Estrategia de Reperfusión: la Regla de los 120 Minutos",
        "paragraphs": [
          "<strong>Indicación:</strong> todo SCACEST con <strong>menos de 12 horas de síntomas</strong> debe reperfundirse. Entre las 12 y 48 horas se indica angioplastía si persiste el dolor, hay inestabilidad hemodinámica o arritmias graves. Pasadas las 48 horas, en un paciente asintomático y estable, no se reperfunde de rutina la arteria ocluida (se estudia con coronariografía diferida).",
          "La decisión depende del tiempo estimado para realizar una angioplastía primaria desde el diagnóstico (primer contacto médico con ECG diagnóstico):",
          "• <strong>VÍA 1: ANGIOPLASTÍA PRIMARIA POSIBLE EN ≤ 120 MINUTOS.</strong> Se deriva de inmediato a un centro con hemodinamia 24/7 para <strong>angioplastía primaria (ACTP con implante de stent)</strong>, la estrategia de elección. Meta: <em>tiempo puerta-balón ≤ 90 minutos</em> (≤ 60 minutos si el paciente consulta directamente en un hospital con hemodinamia).",
          "• <strong>VÍA 2: ANGIOPLASTÍA EN MÁS DE 120 MINUTOS.</strong> Se realiza <strong>fibrinólisis farmacológica inmediata</strong> en el centro donde está el paciente (SAPU, SAR u hospital comunitario), con meta GES de <strong>tiempo puerta-aguja ≤ 30 minutos</strong> (la guía europea recomienda iniciarla dentro de 10 minutos del diagnóstico), y se traslada después a un centro con hemodinamia.",
          "• La angioplastía primaria es preferida <strong>sin importar el tiempo</strong> en el <strong>shock cardiogénico</strong> o la insuficiencia cardíaca aguda grave, y cuando la fibrinólisis está contraindicada.",
          "• <em>Fibrinolítico de elección:</em> <strong>tenecteplase (TNK-tPA)</strong> en bolo endovenoso único ajustado por peso corporal (Tabla 2.5.C): &lt; 60 kg: 30 mg (6.000 UI) · 60 a 69 kg: 35 mg (7.000 UI) · 70 a 79 kg: 40 mg (8.000 UI) · 80 a 89 kg: 45 mg (9.000 UI) · ≥ 90 kg: 50 mg (10.000 UI). En los <strong>mayores de 75 años se usa la mitad de la dosis</strong>. Alternativas: alteplasa en esquema acelerado y estreptoquinasa 1,5 millones UI en 30 a 60 minutos (no fibrinoespecífica, produce hipotensión y alergia, y no se repite).",
          "• <em>Contraindicaciones absolutas de fibrinólisis:</em> antecedente de ACV hemorrágico de cualquier fecha; ACV isquémico en los últimos 6 meses; malformación arteriovenosa o neoplasia intracraneal; traumatismo craneoencefálico o cirugía mayor en el último mes; sangrado digestivo en el último mes; trastorno hemorrágico conocido; punciones no compresibles en las últimas 24 horas; <strong>sospecha de disección aórtica aguda</strong>. Las relativas (Tabla 2.5.B) obligan a ponderar el riesgo; si hay una contraindicación absoluta, el paciente va a angioplastía aunque el traslado supere los 120 minutos."
        ]
      },
      {
        "subhead": "5. Después de la Fibrinólisis: Reperfusión Exitosa, Rescate y Estrategia Farmacoinvasiva",
        "paragraphs": [
          "A los <strong>60 a 90 minutos</strong> de la trombólisis se evalúa el éxito del procedimiento:",
          "1) <strong>Criterios de reperfusión exitosa:</strong> <strong>descenso del supradesnivel del ST &gt; 50%</strong> en la derivación con mayor elevación; desaparición o alivio marcado del dolor torácico; aparición de arritmias de reperfusión típicas (<strong>ritmo idioventricular acelerado, RIVA</strong>, benigno y que no se trata). Conducta: traslado para coronariografía en 2 a 24 horas (<strong>estrategia farmacoinvasiva</strong>).",
          "2) <strong>Fibrinólisis fallida</strong> (descenso del ST &lt; 50% o persistencia del dolor a los 90 minutos): traslado de emergencia inmediato para <strong>angioplastía de rescate</strong>. La reoclusión, la isquemia recurrente, el shock o las arritmias graves después de una fibrinólisis exitosa también obligan a coronariografía urgente. <em>Todo paciente fibrinolizado se traslada a un centro con hemodinamia.</em>"
        ]
      },
      {
        "subhead": "6. Terapia Farmacológica Coadyuvante Inmediata",
        "paragraphs": [
          "• <strong>Medidas generales:</strong> monitor y desfibrilador a mano, vía venosa y reposo. <strong>Oxígeno solo si la saturación es &lt; 90%</strong> (la hiperoxia no beneficia). <strong>Nitroglicerina</strong> sublingual o endovenosa para el dolor, la hipertensión o la congestión, <strong>contraindicada</strong> en el infarto del ventrículo derecho, con PAS &lt; 90 mmHg o tras usar sildenafil (24 horas) o tadalafil (48 horas). <strong>Morfina</strong> solo para el dolor refractario (retrasa la absorción de los antiagregantes orales).",
          "• <strong>Doble antiagregación plaquetaria:</strong> 1) <strong>Aspirina</strong>: dosis de carga de <strong>250 mg vía oral masticada</strong> (o 500 mg EV), seguida de 100 mg/día de por vida; 2) <strong>Segundo antiagregante (inhibidor P2Y12)</strong>: si el paciente va a <em>angioplastía primaria</em>, el de primera línea es <strong>ticagrelor 180 mg de carga (90 mg cada 12 horas)</strong> o prasugrel 60 mg; si recibe <em>fibrinólisis</em>, se usa <strong>clopidogrel 300 mg de carga</strong> (75 mg sin carga si tiene ≥ 75 años). Duración estándar: <strong>12 meses</strong>.",
          "• <strong>Anticoagulación parenteral:</strong> con fibrinólisis, <strong>enoxaparina</strong> (bolo EV de 30 mg seguido de 1 mg/kg SC cada 12 horas; en mayores de 75 años se omite el bolo y se dosifica 0,75 mg/kg SC cada 12 horas); en la angioplastía primaria, heparina no fraccionada en bolo durante el procedimiento.",
          "• <strong>Estatina de alta potencia precoz:</strong> <strong>atorvastatina 80 mg/día</strong> iniciada en las primeras 24 horas, independientemente del colesterol basal. <strong>Betabloqueador oral</strong> en las primeras 24 horas si no hay insuficiencia cardíaca, shock, bradicardia ni bloqueo AV; <strong>IECA</strong> en las primeras 24 horas si la FEVI es ≤ 40%, hay insuficiencia cardíaca, diabetes o infarto anterior. Evitar los AINE (reinfarto y rotura cardíaca) y no usar antiarrítmicos profilácticos."
        ]
      },
      {
        "subhead": "7. Complicaciones Precoces y Clasificación de Killip-Kimball",
        "paragraphs": [
          "La clasificación de <strong>Killip-Kimball</strong> estratifica el pronóstico al ingreso según el examen físico: <strong>I</strong> sin signos de insuficiencia cardíaca; <strong>II</strong> crépitos basales, tercer ruido o ingurgitación yugular; <strong>III</strong> edema agudo de pulmón; <strong>IV</strong> shock cardiogénico. La mortalidad aumenta en forma escalonada de I a IV, y el shock cardiogénico es la principal causa de muerte intrahospitalaria: se trata con angioplastía urgente (Tema 3.4).",
          "La <strong>fibrilación ventricular</strong> de las primeras horas es la principal causa de muerte prehospitalaria y se trata con desfibrilación inmediata (Tema 1.3). La bradicardia y el bloqueo AV del infarto inferior suelen ser transitorios y responden a atropina; el bloqueo AV en el infarto anterior refleja una necrosis extensa y requiere marcapaso. Las complicaciones mecánicas (rotura de músculo papilar, comunicación interventricular y rotura de pared libre) aparecen entre los días 3 y 7 y se revisan en el Tema 2.6."
        ]
      },
      {
        "subhead": "8. Garantías Explícitas en Salud (GES N.º 5) y Prevención Secundaria Integral",
        "paragraphs": [
          "El Infarto Agudo del Miocardio es el <strong>problema de salud GES N.º 5</strong> en Chile, con garantías legalmente exigibles de acceso, oportunidad, calidad y protección financiera para el diagnóstico (ECG ante la sospecha), el tratamiento de reperfusión (fibrinólisis o angioplastía) y la prevención secundaria después del alta. Las metas de tiempo que se preguntan: <strong>ECG interpretado en ≤ 10 minutos</strong>, <strong>fibrinólisis en ≤ 30 minutos (puerta-aguja)</strong> y <strong>angioplastía primaria en ≤ 90 minutos (puerta-balón) / ≤ 120 minutos desde el primer contacto</strong>.",
          "<strong>Terapia de alta y prevención secundaria:</strong> todo paciente con IAM debe recibir el régimen de prevención secundaria: <em>1) aspirina 100 mg/día de por vida; 2) ticagrelor o clopidogrel por 12 meses; 3) atorvastatina 80 mg/día (meta c-LDL &lt; 55 mg/dL y reducción ≥ 50%); 4) betabloqueador (bisoprolol o carvedilol, obligatorio si FEVI &lt; 40%); 5) IECA (enalapril) o ARA II</em>; más cesación del tabaco, control de la presión arterial y de la diabetes, rehabilitación cardíaca y un ecocardiograma antes del alta para medir la FEVI (si persiste ≤ 35% pese al tratamiento óptimo, se evalúa un desfibrilador implantable)."
        ]
      }
    ],
    "table": {
      "title": "Territorios del IAM con Supradesnivel del ST: Derivaciones, Imagen Especular y Arteria Culpable",
      "headers": [
        "Territorio",
        "Derivaciones con supradesnivel",
        "Imagen especular (infradesnivel)",
        "Arteria culpable habitual"
      ],
      "rows": [
        [
          "Anterior / anteroseptal",
          "V1-V4",
          "DIII, aVF",
          "Descendente anterior (DA)"
        ],
        [
          "Anterior extenso",
          "V1-V6, DI, aVL",
          "DII, DIII, aVF",
          "DA proximal (peor pronóstico)"
        ],
        [
          "Lateral (alto)",
          "DI, aVL, V5-V6",
          "DII, DIII, aVF",
          "Circunfleja o rama diagonal"
        ],
        [
          "Inferior",
          "DII, DIII, aVF (DIII > DII)",
          "DI, aVL",
          "Coronaria derecha (80-90%)"
        ],
        [
          "Posterior",
          "V7-V9 (≥ 0,5 mm)",
          "V1-V3 con R alta y T positiva",
          "Circunfleja o coronaria derecha"
        ],
        [
          "Ventrículo derecho",
          "V3R-V4R (≥ 1 mm) + inferior",
          "DI, aVL",
          "Coronaria derecha proximal"
        ]
      ]
    },
    "severityTable": {
      "title": "Contraindicaciones de la Fibrinólisis en el SCACEST",
      "headers": [
        "Tipo",
        "Contraindicación",
        "Conducta"
      ],
      "rows": [
        [
          "Absoluta",
          "ACV hemorrágico previo (cualquier fecha) o ACV isquémico en los últimos 6 meses",
          "Angioplastía aunque tarde > 120 min"
        ],
        [
          "Absoluta",
          "Malformación arteriovenosa o neoplasia intracraneal",
          "Angioplastía aunque tarde > 120 min"
        ],
        [
          "Absoluta",
          "TEC o cirugía mayor en el último mes; sangrado digestivo en el último mes",
          "Angioplastía aunque tarde > 120 min"
        ],
        [
          "Absoluta",
          "Trastorno hemorrágico conocido; punciones no compresibles en 24 h",
          "Angioplastía aunque tarde > 120 min"
        ],
        [
          "Absoluta",
          "Sospecha de disección aórtica aguda",
          "AngioTAC; nunca trombolizar"
        ],
        [
          "Relativa",
          "AIT en los últimos 6 meses; uso de anticoagulantes orales",
          "Ponderar riesgo-beneficio"
        ],
        [
          "Relativa",
          "Embarazo o primera semana posparto",
          "Ponderar riesgo-beneficio"
        ],
        [
          "Relativa",
          "HTA refractaria (PAS > 180 o PAD > 110 mmHg); hepatopatía avanzada; endocarditis; úlcera péptica activa",
          "Controlar y ponderar"
        ],
        [
          "Relativa",
          "Reanimación cardiopulmonar prolongada o traumática",
          "Ponderar riesgo-beneficio"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Reperfusión y Terapia Coadyuvante Inmediata en el SCACEST (Dosis del Adulto)",
      "headers": [
        "Fármaco",
        "Dosis",
        "Con angioplastía primaria",
        "Con fibrinólisis"
      ],
      "rows": [
        [
          "Aspirina",
          "250 mg VO masticada (o 500 mg EV); luego 100 mg/día",
          "Sí",
          "Sí"
        ],
        [
          "Ticagrelor / prasugrel",
          "180 mg (90 mg c/12 h) / 60 mg de carga",
          "De elección",
          "No"
        ],
        [
          "Clopidogrel",
          "300 mg de carga (≥ 75 años: 75 mg sin carga); 600 mg si va a ACTP sin ticagrelor",
          "Alternativa",
          "De elección"
        ],
        [
          "Enoxaparina",
          "Bolo EV 30 mg + 1 mg/kg SC c/12 h (≥ 75 años: 0,75 mg/kg sin bolo)",
          "Alternativa",
          "De elección"
        ],
        [
          "Heparina no fraccionada",
          "Bolo EV ajustado por peso y TTPA",
          "De elección",
          "Alternativa"
        ],
        [
          "Tenecteplase (TNK-tPA)",
          "< 60 kg 30 mg · 60-69 kg 35 mg · 70-79 kg 40 mg · 80-89 kg 45 mg · ≥ 90 kg 50 mg (bolo único en 5-10 s; ½ dosis si ≥ 75 años)",
          "No",
          "De elección"
        ],
        [
          "Estreptoquinasa",
          "1,5 millones UI EV en 30-60 min",
          "No",
          "Alternativa"
        ],
        [
          "Atorvastatina",
          "80 mg/día desde las primeras 24 h",
          "Sí",
          "Sí"
        ],
        [
          "Nitroglicerina / morfina / O₂",
          "Solo dolor, HTA o congestión / dolor refractario / SatO₂ < 90%",
          "Según clínica",
          "Según clínica"
        ]
      ]
    },
    "vignette": "Hombre de 56 años, fumador e hipertenso, consulta en un Servicio de Atención Primaria de Urgencia (SAPU) rural con dolor torácico opresivo de 1 hora de evolución, irradiado a la mandíbula, con diaforesis. El ECG tomado a los 5 minutos muestra supradesnivel del ST de 3 mm en DII, DIII y aVF, con infradesnivel en DI y aVL; las derivaciones V3R-V4R no muestran supradesnivel. El hospital con laboratorio de hemodinamia más cercano se encuentra a 3 horas de distancia. PA 130/80 mmHg, FC 68 lpm, pulmones limpios, peso 74 kg. Sin antecedentes de ACV, sangrado ni cirugías recientes.",
    "explicacion": "El paciente presenta un SCACEST de pared inferior (con imagen especular en DI y aVL, culpable probable la coronaria derecha) sin compromiso del ventrículo derecho. Como el tiempo estimado para llegar a la angioplastía primaria supera con creces los 120 minutos (está a 3 horas) y no tiene contraindicaciones, la indicación es la fibrinólisis farmacológica inmediata en el SAPU con tenecteplase 40 mg en bolo endovenoso (rango de 70 a 79 kg) dentro de los primeros 30 minutos (puerta-aguja), asociada a aspirina 250 mg masticada, clopidogrel 300 mg y enoxaparina (bolo EV de 30 mg y 1 mg/kg SC), coordinando el traslado en ambulancia avanzada a un centro con hemodinamia: angioplastía de rescate si a los 60-90 minutos el ST no ha descendido más de 50%, o coronariografía en 2 a 24 horas si la fibrinólisis fue exitosa.",
    "keyPoints": [
      "ECG de 12 derivaciones interpretado en ≤ 10 minutos ante todo dolor torácico; el SCACEST se reperfunde sin esperar la troponina.",
      "Supradesnivel en ≥ 2 derivaciones contiguas: ≥ 1 mm en general; en V2-V3 ≥ 2 mm (hombre ≥ 40 años), ≥ 2,5 mm (hombre < 40) y ≥ 1,5 mm (mujer).",
      "BCRI nuevo con clínica de infarto = equivalente de SCACEST: reperfusión inmediata. Infradesnivel V1-V3 con R alta = IAM posterior (pedir V7-V9).",
      "DII, DIII y aVF = infarto inferior (coronaria derecha): tomar siempre V3R-V4R; en el infarto del VD, volumen y nada de nitratos, diuréticos ni morfina.",
      "Angioplastía primaria si se puede hacer en ≤ 120 min desde el diagnóstico (meta puerta-balón ≤ 90 min); si no, fibrinólisis en ≤ 30 min y traslado.",
      "Tenecteplase en bolo según peso (30 a 50 mg; 40 mg entre 70 y 79 kg) y la mitad de la dosis en ≥ 75 años; con fibrinólisis, clopidogrel 300 mg y enoxaparina.",
      "Reperfusión exitosa = descenso del ST > 50% a los 60-90 min (con alivio del dolor y RIVA); si falla, angioplastía de rescate inmediata.",
      "Shock cardiogénico o contraindicación de fibrinólisis (ACV hemorrágico previo, sospecha de disección aórtica) = angioplastía aunque tarde más de 120 min."
    ],
    "questions": [
      {
        "stem": "Un paciente de 62 años, con antecedentes de dislipidemia y diabetes en tratamiento con dieta e hipoglicemiantes orales, consulta por dolor toráxico opresivo irradiado a ambos hombros intenso EVA 9/10, asociado a disnea y sudoración. Al examen físico, su presión arterial es 140/70 mmHg con frecuencia cardiaca de 80 latidos por minuto. Presenta RR3T con presencia de R3, murmullo pulmonar presente con crépitos bibasales. Electrocardiagrama: SDST en V1-V4. La conducta más adecuada es:",
        "options": [
          {
            "id": "A",
            "text": "Tratamiento anticoagulante"
          },
          {
            "id": "B",
            "text": "Tratamiento antiplaquetario"
          },
          {
            "id": "C",
            "text": "Solicitar AngioTAC de tórax"
          },
          {
            "id": "D",
            "text": "Ecocardiograma bidimensional"
          },
          {
            "id": "E",
            "text": "Coronariografía de urgencia"
          }
        ],
        "correcta": "E",
        "explicacion": "SCACEST anterior (supradesnivel V1-V4, territorio de la descendente anterior) con signos de insuficiencia cardíaca (tercer ruido y crépitos: Killip II). La conducta que cambia el pronóstico es la reperfusión: coronariografía de urgencia para angioplastía primaria. Los antiagregantes y la anticoagulación son coadyuvantes, no la conducta principal; el ecocardiograma y el angioTAC retrasan la reperfusión.",
        "recTag": "EUNACOM Julio 2017 · Pregunta 46"
      },
      {
        "stem": "Un paciente de 65 años, diabético e hipertenso, consulta por dolor precordial opresivo intenso, EVA: 9/10, asociado a malestar general y disnea. Al examen físico con frecuencia cardiaca de 90 por minuto, presión arterial de 150/90 mmHg, al examen cardiaco se ausculta un ritmo regular y tercer ruido. Se realiza estudio con electrocardiograma que muestra supradesnivel del segmento ST en DII, DIII y AVF. Diagnóstico más probable:",
        "options": [
          {
            "id": "A",
            "text": "Infarto de pared anterior"
          },
          {
            "id": "B",
            "text": "Infarto de pared inferior"
          },
          {
            "id": "C",
            "text": "Pericarditis"
          },
          {
            "id": "D",
            "text": "Infarto de pared posterior"
          },
          {
            "id": "E",
            "text": "Infarto de pared lateral"
          }
        ],
        "correcta": "B",
        "explicacion": "DII, DIII y aVF son las derivaciones inferiores: infarto de pared inferior, habitualmente por oclusión de la coronaria derecha. Obliga a tomar V3R-V4R para descartar compromiso del ventrículo derecho. La pericarditis da un supradesnivel difuso y cóncavo, no limitado a un territorio.",
        "recTag": "EUNACOM Julio 2017 · Pregunta 60"
      },
      {
        "stem": "Paciente de 63 años, fumador y diabético, que hace una hora comienza con dolor torácico opresivo, intenso, que se irradia a cuello, con diaforesis y sensación de angustia. Se solicita un electrocardiograma, que muestra ritmo sinusal, a 80 lpm, con bloqueo completo de rama izquierda, que no se había visualizado en electrocardiogramas previos. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Solicitar enzimas cardíacas"
          },
          {
            "id": "B",
            "text": "Solicitar angiografía pulmonar"
          },
          {
            "id": "C",
            "text": "Solicitar ecocardiograma transesofágico"
          },
          {
            "id": "D",
            "text": "Instalar marcapaso externo transitorio"
          },
          {
            "id": "E",
            "text": "Iniciar terapia de reperfusión miocárdica precoz"
          }
        ],
        "correcta": "E",
        "explicacion": "El bloqueo completo de rama izquierda nuevo en un paciente con dolor típico es un equivalente de SCACEST: se reperfunde de inmediato (angioplastía primaria o fibrinólisis según el tiempo). Esperar las enzimas es el error que el examen castiga.",
        "recTag": "EUNACOM Julio 2016 · Pregunta 55"
      },
      {
        "stem": "Un paciente de 23 años consulta en el servicio de urgencia, por dolor torácico de 2 horas de evolución, intenso, asociado a diaforesis y palpitaciones, que inició algunos minutos después de haber inhalado cocaína. Al examen físico presenta FC: 120x’, PA: 190/120 mmHg, ritmo regular en dos tonos, sin soplos. Su electrocardiograma muestra supradesnivel de segmento ST en las derivaciones de la pared anterior. ¿Qué fármaco está contraindicado en el manejo de este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Estreptoquinasa"
          },
          {
            "id": "B",
            "text": "Clopidogrel"
          },
          {
            "id": "C",
            "text": "Nitroglicerina"
          },
          {
            "id": "D",
            "text": "Atenolol"
          },
          {
            "id": "E",
            "text": "Diazepam"
          }
        ],
        "correcta": "D",
        "explicacion": "En el infarto asociado a cocaína el betabloqueador está contraindicado: deja sin oposición el efecto alfa-adrenérgico y agrava el vasoespasmo y la hipertensión. Se usan benzodiacepinas y nitratos, y se reperfunde como cualquier SCACEST.",
        "recTag": "EUNACOM Agosto 2021 · Pregunta 44"
      },
      {
        "stem": "Hombre de 60 años consulta en hospital comunal sin hemodinamia por dolor precordial típico de 40 minutos de evolución. ECG revela supradesnivel del ST de 4 mm de V1 a V4. El centro terciario con capacidad de angioplastía está a 150 minutos de traslado. No tiene contraindicaciones de fibrinólisis. ¿Cuál es la conducta médica de elección?",
        "options": [
          {
            "id": "A",
            "text": "Administrar tenecteplase endovenoso en bolo inmediatamente en el hospital comunal y luego trasladar"
          },
          {
            "id": "B",
            "text": "Derivar en ambulancia a angioplastía primaria sin trombólisis previa"
          },
          {
            "id": "C",
            "text": "Administrar heparina en infusión y esperar resultado de troponinas"
          },
          {
            "id": "D",
            "text": "Realizar test de esfuerzo para confirmar extensión del infarto"
          },
          {
            "id": "E",
            "text": "Indicar nitroglicerina sublingual y reposo absoluto sin fármacos trombolíticos"
          }
        ],
        "correcta": "A",
        "explicacion": "Cuando la angioplastía primaria no puede realizarse en 120 minutos o menos, se indica fibrinólisis inmediata con tenecteplase (meta puerta-aguja ≤ 30 minutos) y traslado posterior a un centro con hemodinamia (estrategia farmacoinvasiva). Esperar troponinas o hacer un test de esfuerzo en un SCACEST está contraindicado.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Mujer de 68 años, con antecedente de ACV isquémico hace 2 meses, consulta en un hospital sin hemodinamia por dolor torácico opresivo de 2 horas de evolución. El ECG muestra supradesnivel del ST de 3 mm en DII, DIII y aVF. PA 125/80 mmHg. El centro con angioplastía más cercano está a 150 minutos de traslado. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Tenecteplase a mitad de dosis y traslado"
          },
          {
            "id": "B",
            "text": "Estreptoquinasa, por tener menor riesgo de hemorragia intracraneal"
          },
          {
            "id": "C",
            "text": "Aspirina, clopidogrel y anticoagulación, y traslado inmediato para angioplastía primaria"
          },
          {
            "id": "D",
            "text": "Aspirina y heparina, y coronariografía electiva en 48 a 72 horas"
          },
          {
            "id": "E",
            "text": "Tenecteplase en dosis completa, porque el beneficio supera al riesgo"
          }
        ],
        "correcta": "C",
        "explicacion": "El ACV isquémico en los últimos 6 meses es una contraindicación absoluta de fibrinólisis (con cualquier fibrinolítico y en cualquier dosis). Con una contraindicación absoluta, el SCACEST se traslada a angioplastía primaria aunque el tiempo supere los 120 minutos, con doble antiagregación y anticoagulación desde el inicio.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "2.3§0 · 2.3§1 · 2.3§2 · 2.3§4 · 2.3§5 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-15",
    "classId": "cardio-15",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Cardiopatía Coronaria",
    "topicLabel": "2.6",
    "title": "Complicaciones del Infarto: Ventrículo Derecho, Complicaciones Mecánicas y Angina de Prinzmetal",
    "perfilCode": "1.01.2.004, 1.01.4.006",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N.º 5): Infarto Agudo del Miocardio (la angina de Prinzmetal no es GES)",
    "reconstrucciones": "",
    "frecuencia": "Alta · Infarto del ventrículo derecho y sus fármacos prohibidos, los tres tipos de rotura mecánica (soplo y tiempo), arritmias tempranas y angina vasoespástica",
    "svg": null,
    "algoTitle": "Complicaciones del infarto: del hallazgo clínico al diagnóstico",
    "diagram": {
      "title": "Complicaciones del Infarto Agudo del Miocardio: Ventrículo Derecho, Roturas Mecánicas y Aneurisma",
      "svg": "<svg viewBox=\"0 0 620 470\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar26\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar26)}\n  </style>\n  <rect class=\"b\" x=\"60\" y=\"6\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"21\" text-anchor=\"middle\" font-weight=\"700\">Paciente con infarto que se deteriora</text>\n  <text class=\"sub\" x=\"310\" y=\"34\" text-anchor=\"middle\">PA, yugulares, auscultación pulmonar y cardíaca, ECG (V3R-V4R) y ecocardiograma urgente</text>\n  <path class=\"ln\" d=\"M310,44 V58\"/>\n  <rect class=\"dec\" x=\"40\" y=\"58\" width=\"540\" height=\"34\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"73\" text-anchor=\"middle\" font-weight=\"700\">¿Cuándo y qué se encuentra?</text>\n  <text class=\"sub\" x=\"310\" y=\"86\" text-anchor=\"middle\">Horas: arritmia · 1-3 días: pericarditis · 3-7 días: complicación mecánica</text>\n  <path class=\"ln\" d=\"M100,92 V110\"/>\n  <path class=\"ln\" d=\"M232,92 V110\"/>\n  <path class=\"ln\" d=\"M388,92 V110\"/>\n  <path class=\"ln\" d=\"M520,92 V110\"/>\n  <rect class=\"warn\" x=\"12\" y=\"110\" width=\"176\" height=\"94\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"100\" y=\"125\" text-anchor=\"middle\" font-weight=\"700\">INFARTO DEL VD</text>\n  <text class=\"warnT sub\" x=\"100\" y=\"138\" text-anchor=\"middle\">Inferior + hipotensión,</text>\n  <text class=\"warnT sub\" x=\"100\" y=\"149\" text-anchor=\"middle\">yugulares y pulmón limpio</text>\n  <text class=\"warnT sub\" x=\"100\" y=\"160\" text-anchor=\"middle\">V4R ≥ 1 mm</text>\n  <text class=\"warnT sub\" x=\"100\" y=\"171\" text-anchor=\"middle\">VOLUMEN; no nitratos,</text>\n  <text class=\"warnT sub\" x=\"100\" y=\"182\" text-anchor=\"middle\">diuréticos ni morfina</text>\n  <rect class=\"acc\" x=\"194\" y=\"110\" width=\"150\" height=\"94\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"269\" y=\"125\" text-anchor=\"middle\" font-weight=\"700\">PAPILAR</text>\n  <text class=\"accS\" x=\"269\" y=\"138\" text-anchor=\"middle\">Día 3-7, EAP + shock</text>\n  <text class=\"accS\" x=\"269\" y=\"149\" text-anchor=\"middle\">soplo holosistólico</text>\n  <text class=\"accS\" x=\"269\" y=\"160\" text-anchor=\"middle\">apical a la axila</text>\n  <text class=\"accS\" x=\"269\" y=\"171\" text-anchor=\"middle\">BCPIAo + cirugía</text>\n  <text class=\"accS\" x=\"269\" y=\"182\" text-anchor=\"middle\">mitral urgente</text>\n  <rect class=\"acc\" x=\"350\" y=\"110\" width=\"118\" height=\"94\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"409\" y=\"125\" text-anchor=\"middle\" font-weight=\"700\">CIV</text>\n  <text class=\"accS\" x=\"409\" y=\"138\" text-anchor=\"middle\">Soplo rudo en barra</text>\n  <text class=\"accS\" x=\"409\" y=\"149\" text-anchor=\"middle\">borde esternal</text>\n  <text class=\"accS\" x=\"409\" y=\"160\" text-anchor=\"middle\">izquierdo bajo</text>\n  <text class=\"accS\" x=\"409\" y=\"171\" text-anchor=\"middle\">con frémito</text>\n  <text class=\"accS\" x=\"409\" y=\"182\" text-anchor=\"middle\">Cirugía de cierre</text>\n  <rect class=\"warn\" x=\"474\" y=\"110\" width=\"134\" height=\"94\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"541\" y=\"125\" text-anchor=\"middle\" font-weight=\"700\">PARED LIBRE</text>\n  <text class=\"warnT sub\" x=\"541\" y=\"138\" text-anchor=\"middle\">Colapso súbito,</text>\n  <text class=\"warnT sub\" x=\"541\" y=\"149\" text-anchor=\"middle\">AESP, taponamiento</text>\n  <text class=\"warnT sub\" x=\"541\" y=\"160\" text-anchor=\"middle\">Mortalidad &gt; 90%</text>\n  <text class=\"warnT sub\" x=\"541\" y=\"171\" text-anchor=\"middle\">Pericardiocentesis</text>\n  <text class=\"warnT sub\" x=\"541\" y=\"182\" text-anchor=\"middle\">y toracotomía</text>\n  <path class=\"ln\" d=\"M310,204 V222\"/>\n  <rect class=\"dec\" x=\"40\" y=\"222\" width=\"540\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"237\" text-anchor=\"middle\" font-weight=\"700\">Semanas: ¿ST persistentemente elevado o trombo mural?</text>\n  <text class=\"sub\" x=\"310\" y=\"250\" text-anchor=\"middle\">Aneurisma ventricular verdadero (cuello ancho) vs pseudoaneurisma (cuello estrecho, cirugía urgente)</text>\n  <path class=\"ln\" d=\"M310,266 V284\"/>\n  <rect class=\"b\" x=\"12\" y=\"284\" width=\"292\" height=\"70\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"299\" text-anchor=\"middle\" font-weight=\"700\">Angina de Prinzmetal</text>\n  <text class=\"sub\" x=\"158\" y=\"312\" text-anchor=\"middle\">Dolor de reposo de madrugada</text>\n  <text class=\"sub\" x=\"158\" y=\"323\" text-anchor=\"middle\">ST elevado transitorio que se normaliza</text>\n  <text class=\"sub\" x=\"158\" y=\"334\" text-anchor=\"middle\">Calcioantagonista + nitrato</text>\n  <text class=\"sub\" x=\"158\" y=\"345\" text-anchor=\"middle\">Betabloqueador NO selectivo: PROHIBIDO</text>\n  <rect class=\"b\" x=\"316\" y=\"284\" width=\"292\" height=\"70\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"299\" text-anchor=\"middle\" font-weight=\"700\">Pericarditis post-IAM / Dressler</text>\n  <text class=\"sub\" x=\"462\" y=\"312\" text-anchor=\"middle\">1-3 días (epistenocárdica) y 2-8 semanas</text>\n  <text class=\"sub\" x=\"462\" y=\"323\" text-anchor=\"middle\">AINE (aspirina en dosis altas) o colchicina</text>\n  <text class=\"sub\" x=\"462\" y=\"334\" text-anchor=\"middle\">Evitar corticoides y AINE precozmente</text>\n  <rect class=\"acc\" x=\"12\" y=\"368\" width=\"596\" height=\"84\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"383\" text-anchor=\"middle\" font-weight=\"700\">Regla de oro</text>\n  <text class=\"accS\" x=\"310\" y=\"396\" text-anchor=\"middle\">Hipotensión + yugulares + pulmón limpio en un inferior = ventrículo derecho: volumen.</text>\n  <text class=\"accS\" x=\"310\" y=\"407\" text-anchor=\"middle\">Hipotensión + edema pulmonar + soplo nuevo = rotura mecánica: ecocardiograma y cirugía.</text>\n  <text class=\"accS\" x=\"310\" y=\"418\" text-anchor=\"middle\">Dolor nocturno con ST que vuelve a la línea basal con nitroglicerina = Prinzmetal: calcioantagonista.</text>\n\n</svg>"
    },
    "contexto": "El paciente que llega vivo a una unidad coronaria todavía puede morir de su infarto: de una arritmia en las primeras horas, de un ventrículo derecho que se infartó y exige volumen, o de una rotura mecánica entre el tercer y el séptimo día que se oye en el examen físico. El médico general que atiende al paciente en el SAPU, o que lo recibe en la sala, debe reconocer cada una por su cuadro clínico y por su soplo, saber qué fármacos están prohibidos y derivar a tiempo. A estas se suma la angina de Prinzmetal, que simula un infarto y se trata al revés: el betabloqueador no selectivo está contraindicado.",
    "contentSections": [
      {
        "subhead": "1. Complicaciones Precoces: Arritmias, Insuficiencia Cardíaca y Shock",
        "paragraphs": [
          "La complicación temprana más frecuente del infarto son las <strong>arritmias</strong>, y la <strong>fibrilación ventricular de las primeras horas</strong> es la principal causa de muerte antes de llegar al hospital: por eso el desfibrilador debe estar al lado del paciente. Las <strong>arritmias ventriculares</strong> son la principal complicación temprana del infarto inferior (y de cualquier infarto con supradesnivel); el ritmo idioventricular acelerado (RIVA) es una arritmia de reperfusión benigna que no se trata. La <strong>bradicardia sinusal y el bloqueo AV</strong> son típicos del infarto inferior (la coronaria derecha irriga el nodo AV) y suelen ser transitorios, con respuesta a atropina; en el infarto anterior el bloqueo AV refleja una necrosis extensa del sistema de conducción y requiere marcapaso. La fibrilación auricular aparece en un 10-15% y se maneja con control de frecuencia o cardioversión si hay inestabilidad.",
          "El <strong>shock cardiogénico</strong> (Killip IV) es la principal causa de muerte intrahospitalaria; se trata con angioplastía urgente (Tema 3.4). La insuficiencia cardíaca y el edema pulmonar del infarto se estratifican con la clasificación de Killip-Kimball (Tema 2.5). Ante un deterioro hemodinámico, el médico debe pensar en tres mecanismos: <strong>pérdida extensa de miocardio</strong>, <strong>infarto del ventrículo derecho</strong> y <strong>complicación mecánica</strong>; el ecocardiograma urgente (nivel oficial: emplea el informe) las distingue.",
          "<strong>Isquemia recurrente y reinfarto.</strong> El dolor que reaparece después de un infarto (angina post-IAM) o un nuevo supradesnivel en el mismo territorio indica reoclusión o una estenosis residual crítica y obliga a coronariografía urgente; se confirma con una nueva elevación de la troponina o, en los primeros días, de la CK-MB. Es frecuente después de una fibrinólisis y se previene con la estrategia farmacoinvasiva (Tema 2.5). El <strong>tratamiento de las arritmias</strong> sigue el algoritmo ACLS (Tema 1.3): desfibrilación inmediata en la FV o la TV sin pulso, cardioversión en la taquicardia inestable, atropina o marcapaso transcutáneo en la bradicardia con compromiso y corrección del potasio (&gt; 4 mEq/L) y del magnesio (&gt; 2 mg/dL); no se usan antiarrítmicos profilácticos ni lidocaína de rutina porque aumentan la mortalidad. Las arritmias de reperfusión (RIVA, extrasístoles) son benignas y no se tratan.",
          "<strong>Qué hace el médico general.</strong> En un SAPU o un hospital sin cardiología, el paciente con un infarto reciente que se descompensa se monitoriza, se canaliza, se oxigena solo si la saturación es &lt; 90%, se evita el tratamiento reflejo (no se dan nitratos ni diuréticos hasta saber si el ventrículo derecho está comprometido) y se traslada de inmediato a un centro con ecocardiograma y cirugía cardíaca. Los hallazgos del examen físico (ruidos cardíacos, soplo, yugulares, campos pulmonares) son la clave: <strong>el soplo nuevo señala la rotura; la yugular alta con pulmón limpio, el ventrículo derecho</strong>."
        ]
      },
      {
        "subhead": "2. Infarto del Ventrículo Derecho (IAM de Pared Inferior)",
        "paragraphs": [
          "Todo infarto de pared inferior (supradesnivel en DII, DIII y aVF) exige la toma obligatoria de <strong>derivaciones derechas (V3R y V4R)</strong>. Un supradesnivel del ST ≥ 1 mm en V4R confirma el <strong>infarto del ventrículo derecho</strong>, que se debe a la oclusión proximal de la coronaria derecha (antes de las ramas marginales del VD). Aparece en un tercio de los infartos inferiores y aumenta su mortalidad.",
          "<em>Tríada clínica clásica:</em> 1) <strong>hipotensión arterial</strong>; 2) <strong>campos pulmonares limpios (sin crépitos)</strong>; 3) <strong>ingurgitación yugular marcada</strong> (con signo de Kussmaul positivo, es decir, que la presión venosa aumenta en la inspiración). El ventrículo derecho infartado se vuelve rígido y hace poco gasto, y el gasto del ventrículo izquierdo depende por completo del llenado derecho (la precarga). El ecocardiograma muestra un VD dilatado e hipocinético con ventrículo izquierdo de función conservada.",
          "<em>Tratamiento obligatorio:</em> <strong>aporte de volumen con suero fisiológico</strong> para elevar la presión de llenado del VD (en bolos de 250-500 mL hasta 1-2 litros, vigilando la aparición de congestión), más reperfusión urgente de la coronaria derecha. Si pese al volumen persiste el shock se agrega dobutamina; si hay bradicardia o bloqueo AV se mantiene la sincronía auriculoventricular con marcapaso secuencial. <em>Fármacos estrictamente contraindicados:</em> <strong>nitratos, diuréticos (furosemida) y morfina</strong>, que reducen la precarga y precipitan un colapso hemodinámico. Por esa razón el paciente de un infarto inferior que tomó sildenafil o que tiene hipotensión no recibe nitroglicerina: es una pregunta clásica."
        ]
      },
      {
        "subhead": "3. Complicaciones Mecánicas Agudas del IAM (Días 3 a 7)",
        "paragraphs": [
          "Las complicaciones mecánicas ocurren típicamente entre el <strong>3.º y el 7.º día</strong> después del infarto, por la necrosis transmural, la infiltración de neutrófilos y la debilidad máxima del miocardio, sobre todo en pacientes no reperfundidos o reperfundidos tarde. Toda hipotensión, disnea o shock nuevo con un <strong>soplo que no existía</strong> es una de ellas hasta demostrar lo contrario.",
          "1) <strong>Rotura del músculo papilar (insuficiencia mitral aguda grave).</strong> Más frecuente en el infarto inferior, por necrosis del músculo papilar posteromedial (con irrigación única de la coronaria derecha o de la circunfleja). Cuadro: <strong>edema agudo de pulmón fulminante súbito + shock cardiogénico + soplo holosistólico apical nuevo irradiado a la axila</strong>, a veces corto o ausente porque las presiones se igualan rápido. El ecocardiograma transtorácico urgente lo confirma (valva con movimiento «en latigazo»). Se estabiliza con vasodilatadores si la presión lo permite y con <strong>balón de contrapulsación intraaórtico (BCPIAo)</strong>, y se traslada de inmediato a <strong>cirugía de reemplazo o reparación valvular mitral urgente</strong>.",
          "2) <strong>Rotura del tabique interventricular (CIV post-IAM).</strong> Más frecuente en el infarto anterior o en el inferior extenso. Deterioro hemodinámico brusco con shock biventricular y <strong>soplo pansistólico rudo, «en barra», en el borde esternal izquierdo bajo, con frémito palpable</strong>. El ecocardiograma con Doppler color demuestra el defecto y el cortocircuito izquierda-derecha (con «salto oximétrico» en el ventrículo derecho en el cateterismo). Manejo: soporte hemodinámico con BCPIAo y vasodilatadores, y <strong>cirugía de cierre del tabique de emergencia</strong>.",
          "3) <strong>Rotura de pared libre del ventrículo izquierdo.</strong> Es la complicación mecánica más letal (<strong>mortalidad &gt; 90%</strong>), más común en <strong>mujeres ancianas con su primer infarto anterior transmural</strong>, hipertensas y tratadas con trombolíticos tardíos. Produce un <strong>hemopericardio a tensión con taponamiento hiperagudo</strong> y <strong>disociación electromecánica (actividad eléctrica sin pulso)</strong> con colapso súbito. El ecocardiograma muestra el derrame con compresión de las cavidades derechas; se intenta pericardiocentesis y toracotomía de rescate (Tema 5.6). Algunas roturas son subagudas y se presentan como dolor, hipotensión y síncope.",
          "Por último, la <strong>pericarditis post-infarto</strong> puede ser precoz (1-3 días, epistenocárdica, con roce y dolor pleurítico) o tardía (<strong>síndrome de Dressler</strong>, 2 a 8 semanas después, autoinmune, con fiebre, pericarditis y derrame): se trata con aspirina en dosis altas o colchicina, y se evitan los AINE y los corticoides en la fase temprana porque dificultan la cicatrización y aumentan el riesgo de rotura."
        ]
      },
      {
        "subhead": "4. Aneurisma Ventricular, Pseudoaneurisma y Trombo Mural",
        "paragraphs": [
          "• <strong>Pseudoaneurisma ventricular:</strong> rotura incompleta de la pared libre del ventrículo izquierdo, contenida solo por el pericardio parietal y trombo organizado. Tiene un <strong>cuello estrecho</strong> y una pared muy frágil, de fibrina y sin miocardio. <strong>Riesgo alto de rotura libre cataclísmica</strong>: requiere <strong>cirugía de reparación urgente e inmediata</strong>.",
          "• <strong>Aneurisma ventricular verdadero:</strong> complicación tardía (semanas a meses) por el adelgazamiento fibrótico de una zona infartada, con expansión paradójica en la sístole. Tiene un <strong>cuello ancho</strong> y una pared con fibras musculares necrosadas, y un <strong>riesgo bajo de rotura libre</strong>. El signo del ECG es la <strong>persistencia del supradesnivel del ST más allá de las 4 a 6 semanas</strong> después del infarto, sin síntomas agudos ni elevación de troponina, a veces con ondas Q. Sus complicaciones son la insuficiencia cardíaca, las arritmias ventriculares malignas y los <strong>trombos murales intracavitarios embolígenos</strong>, que obligan a anticoagulación oral. Se resuelve con cirugía solo si es sintomático o refractario.",
          "Un <strong>trombo mural</strong> aparece con frecuencia en el infarto anterior extenso con acinesia apical; se busca con ecocardiograma y se indica anticoagulación oral por 3 a 6 meses, con reevaluación. Otras complicaciones tardías son la insuficiencia cardíaca por remodelado, la insuficiencia mitral isquémica y la muerte súbita por arritmia, que justifica un desfibrilador si la FEVI persiste ≤ 35%."
        ]
      },
      {
        "subhead": "5. Angina Vasoespástica (Angina de Prinzmetal)",
        "paragraphs": [
          "Es un síndrome isquémico caracterizado por episodios de dolor anginoso causados por un <strong>espasmo focal intenso, con hiperreactividad del músculo liso de una arteria coronaria epicárdica</strong>, en ausencia de obstrucciones fijas graves. Los <strong>factores gatillantes</strong> son el <strong>tabaco, la cocaína, las anfetaminas, los triptanes</strong> (usados en la migraña), el alcohol y el estrés; es más frecuente en adultos jóvenes y en mujeres, y se asocia a migraña y fenómeno de Raynaud.",
          "<em>Presentación clínica y ECG:</em> dolor anginoso típico <strong>en reposo, de predominio nocturno o de madrugada (00:00 a 06:00)</strong>, que remite de forma espontánea o con nitroglicerina sublingual. En el ECG tomado <strong>durante la crisis</strong> hay <strong>supradesnivel transitorio del ST</strong> que se normaliza por completo en minutos, sin onda Q ni necrosis (si el espasmo es prolongado puede haber infarto). Puede acompañarse de arritmias ventriculares o bloqueo AV durante el episodio. El diagnóstico se apoya en el ECG o el Holter durante el dolor y, si es dudoso, en una coronariografía con prueba de provocación (acetilcolina o ergonovina).",
          "<em>Tratamiento de primera línea:</em> <strong>calcioantagonistas (diltiazem, verapamilo o amlodipino en dosis altas)</strong> asociados a nitratos para las crisis, y cese estricto del tabaco y de las drogas; si hay una estenosis fija se trata de forma convencional. <strong>Contraindicación absoluta (pregunta clave del examen):</strong> los <strong>betabloqueadores no selectivos (como el propranolol) están contraindicados</strong>: al bloquear los receptores beta-2 vasodilatadores dejan sin oposición a los receptores alfa-1 vasoconstrictores y pueden desencadenar un espasmo coronario masivo. Es el mismo mecanismo por el que el betabloqueador está prohibido en el infarto por cocaína. La aspirina en dosis altas puede empeorar el espasmo, por lo que se usan dosis bajas."
        ]
      }
    ],
    "table": {
      "title": "Tabla 2.6.A · Diagnóstico Diferencial de las Complicaciones del Infarto Agudo al Miocardio",
      "headers": [
        "Complicación",
        "Infarto habitual y momento",
        "Hallazgo semiológico clave",
        "Tratamiento de emergencia"
      ],
      "rows": [
        [
          "Infarto del ventrículo derecho",
          "Inferior, desde las primeras horas",
          "Hipotensión + yugulares + pulmón limpio; V4R ≥ 1 mm",
          "Volumen; reperfusión; NO nitratos, diuréticos ni morfina"
        ],
        [
          "Rotura de músculo papilar",
          "Inferior, días 3-7",
          "Edema pulmonar súbito + soplo holosistólico apical a la axila",
          "BCPIAo + cirugía mitral urgente"
        ],
        [
          "Rotura del tabique (CIV)",
          "Anterior o inferior, días 3-7",
          "Soplo pansistólico rudo en barra + frémito esternal",
          "Vasodilatadores y BCPIAo + cirugía de cierre"
        ],
        [
          "Rotura de pared libre",
          "Anterior transmural, mujer anciana",
          "Colapso súbito + disociación electromecánica",
          "Pericardiocentesis y toracotomía de rescate"
        ],
        [
          "Aneurisma ventricular",
          "Anterior extenso, semanas a meses",
          "ST elevado persistente > 4-6 semanas; trombo mural",
          "Anticoagulación; cirugía si síntomas"
        ],
        [
          "Angina de Prinzmetal",
          "Sin infarto; dolor de reposo nocturno",
          "ST elevado transitorio que se normaliza",
          "Calcioantagonista + nitrato; NO betabloqueador no selectivo"
        ]
      ]
    },
    "vignette": "Hombre de 64 años, en el 4.º día de evolución de un infarto de pared inferior no reperfundido, presenta disnea súbita extrema, cianosis y sudoración profusa. PA 75/40 mmHg, FC 120 lpm, ritmo de galope y un soplo holosistólico III/VI en el ápex irradiado a la axila que no existía al ingreso; crepitaciones difusas en ambos campos pulmonares. Hasta ayer estaba estable.",
    "explicacion": "Un shock cardiogénico súbito con edema agudo de pulmón y un soplo holosistólico apical nuevo irradiado a la axila al 4.º día de un infarto inferior es una rotura del músculo papilar posteromedial con insuficiencia mitral aguda masiva. Se confirma con ecocardiograma transtorácico urgente, se estabiliza con vasodilatadores (si la presión lo permite) y balón de contrapulsación intraaórtico, y se traslada de inmediato a cirugía de reemplazo o reparación valvular mitral. No es un infarto del ventrículo derecho (esa tríada tiene el pulmón limpio) ni una CIV (el soplo sería esternal bajo con frémito).",
    "keyPoints": [
      "Infarto inferior: tomar siempre V3R-V4R; ST ≥ 1 mm en V4R = infarto del VD.",
      "Infarto del VD: hipotensión + yugulares + pulmón limpio; se trata con volumen y están PROHIBIDOS nitratos, diuréticos y morfina.",
      "Complicación temprana más frecuente: arritmias ventriculares (la FV es la principal causa de muerte prehospitalaria); el infarto inferior da bradicardia y BAV transitorios.",
      "Rotura de papilar (días 3-7, inferior): edema pulmonar + soplo holosistólico apical a la axila → eco, BCPIAo y cirugía mitral.",
      "Rotura del tabique: soplo pansistólico rudo en barra con frémito esternal bajo → Doppler y cirugía de cierre.",
      "Rotura de pared libre: colapso con disociación electromecánica y taponamiento; mortalidad > 90%.",
      "Aneurisma verdadero: ST elevado persistente > 4-6 semanas, cuello ancho, trombo mural → anticoagulación; pseudoaneurisma: cuello estrecho y cirugía urgente.",
      "Prinzmetal: dolor nocturno de reposo con ST transitorio; calcioantagonista + nitrato; betabloqueadores no selectivos prohibidos."
    ],
    "questions": [
      {
        "stem": "Un paciente de 60 años consulta por dolor precordial opresivo irradiado a mandíbula de 40 minutos de evolución, asociado a sudoración. El electrocardiograma muestra supradesnivel del segmento ST en derivaciones DII, DIII y aVF. ¿Cuál es la principal complicación temprana de este cuadro?",
        "options": [
          {
            "id": "A",
            "text": "Insuficiencia mitral aguda."
          },
          {
            "id": "B",
            "text": "Rotura de pared libre."
          },
          {
            "id": "C",
            "text": "Arritmias ventriculares."
          },
          {
            "id": "D",
            "text": "Taponamiento cardíaco."
          },
          {
            "id": "E",
            "text": "Fibrilación auricular."
          }
        ],
        "correcta": "C",
        "explicacion": "El infarto inferior (DII, DIII, aVF) tiene como complicación temprana más frecuente las arritmias ventriculares, que son la principal causa de muerte en las primeras horas. La rotura de la pared libre y la insuficiencia mitral aguda por rotura del papilar son mecánicas, más tardías (días 3-7) y menos frecuentes, y el taponamiento es la consecuencia de la rotura.",
        "recTag": "EUNACOM Julio 2018 · Pregunta 42"
      },
      {
        "stem": "Un paciente está hospitalizado por un infarto agudo al miocardio, con supradesnivel del segmento ST, de dos días de evolución. Presenta deterioro del estado general y disnea de reposo, con tendencia a la hipotensión arterial. En su examen físico tiene FC: 115x’, PA: 80/50 mmHg, examen pulmonar con crepitaciones bilaterales intensos y examen cardíaco con ritmo regular en 2 tonos, con soplo sistólico intenso, de localización precordial. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Taponamiento cardíaco por rotura de la pared libre"
          },
          {
            "id": "B",
            "text": "Disfunción valvular aórtica isquémica"
          },
          {
            "id": "C",
            "text": "Rotura del músculo papilar"
          },
          {
            "id": "D",
            "text": "Shock cardiogénico por infarto masivo"
          },
          {
            "id": "E",
            "text": "Disección de la raíz aórtica"
          }
        ],
        "correcta": "C",
        "explicacion": "Un paciente con un infarto de dos días que se deteriora, con hipotensión, crepitaciones bilaterales intensas (edema pulmonar) y un soplo sistólico intenso precordial nuevo tiene una insuficiencia mitral aguda por rotura del músculo papilar. En el taponamiento no hay edema pulmonar y en el shock cardiogénico por infarto masivo no aparece un soplo nuevo tan intenso.",
        "recTag": "EUNACOM Diciembre 2019 · Pregunta 125"
      },
      {
        "stem": "Un paciente de 70 años, hipertenso, presenta dolor torácico de dos días de evolución, intenso, asociado a malestar general. En las últimas horas se agrega disnea y síncopes ortostáticos. Al examen físico aparece un soplo holosistólico en el ápex. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Taponamiento cardiaco por rotura de la pared libre"
          },
          {
            "id": "B",
            "text": "Disección aórtica"
          },
          {
            "id": "C",
            "text": "Insuficiencia mitral por rotura del músculo papilar"
          },
          {
            "id": "D",
            "text": "Endocarditis bacteriana"
          },
          {
            "id": "E",
            "text": "Cardiopatía hipertensiva, descompensada"
          }
        ],
        "correcta": "C",
        "explicacion": "Dolor torácico intenso de 2 días que se acompaña de disnea y síncope, y un soplo holosistólico apical nuevo: es el cuadro de una rotura del músculo papilar con insuficiencia mitral aguda tras un infarto no advertido. No hay signos de taponamiento ni de disección, y la endocarditis no explica el dolor torácico isquémico previo.",
        "recTag": "EUNACOM Julio 2015 · Pregunta 38"
      },
      {
        "stem": "Un paciente de 67 años, usuario de sildenafil, que se automedica como tratamiento de impotencia sexual, presenta dolor torácico intenso, que inició una hora después de haber consumido dicho medicamento. Se solicita un electrocardiograma, que muestra suprdesnivel del segmento ST en las derivaciones inferiores. ¿Qué fármaco está contraindicado en el manejo de este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Clopidogrel"
          },
          {
            "id": "B",
            "text": "Aspirina"
          },
          {
            "id": "C",
            "text": "Atenolol"
          },
          {
            "id": "D",
            "text": "Nitroglicerina"
          },
          {
            "id": "E",
            "text": "Estreptoquinasa"
          }
        ],
        "correcta": "D",
        "explicacion": "Un infarto inferior puede comprometer el ventrículo derecho, que depende de la precarga, y el sildenafil potencia el efecto vasodilatador de los nitratos (hipotensión grave refractaria): por eso la nitroglicerina está contraindicada, con sildenafil (24 horas) o tadalafil (48 horas) y en el infarto del VD. La aspirina, el clopidogrel y la reperfusión con estreptoquinasa se usan.",
        "recTag": "EUNACOM Agosto 2021 · Pregunta 145"
      },
      {
        "stem": "Paciente de 43 años de edad, con antecedente de migraña en tratamiento con propanolol, consulta por historia de dolor toráxico opresivo de 20 minutos, irradiado a miembro superior izquierdo, el cual cede esponáneamente, refiere que ha presentado dicho cuadro en dos ocasiones en su hogar luego de regresar del trabajo. Actualmente está asintomático y su exámen físico es normal. Se solicita electrocardiograma que no muestra alteraciones. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Infarto agudo al miocárdio"
          },
          {
            "id": "B",
            "text": "Pericarditis aguda"
          },
          {
            "id": "C",
            "text": "Angina vasomotora"
          },
          {
            "id": "D",
            "text": "Espasmo esofágico"
          },
          {
            "id": "E",
            "text": "Tromboembolismo pulmonar"
          }
        ],
        "correcta": "C",
        "explicacion": "Dolor torácico opresivo de reposo que cede espontáneamente, con ECG normal fuera de las crisis y en un paciente medicado con propranolol por migraña (un betabloqueador no selectivo que desenmascara la vasoconstricción alfa), es la presentación de una angina vasoespástica (de Prinzmetal o vasomotora). No hay infarto ni pericarditis, que dan alteraciones del ECG persistentes.",
        "recTag": "EUNACOM Julio 2013 · Pregunta 172"
      },
      {
        "stem": "Paciente con infarto agudo al miocardio de pared inferior evoluciona con PA 80/40 mmHg, ingurgitación yugular y examen pulmonar sin ruidos agregados. El ECG muestra supradesnivel del ST de 2 mm en V4R. ¿Cuál es el tratamiento inicial más apropiado para su hipotensión?",
        "options": [
          {
            "id": "A",
            "text": "Administración rápida de carga de suero fisiológico endovenoso"
          },
          {
            "id": "B",
            "text": "Infusión continua de nitroglicerina"
          },
          {
            "id": "C",
            "text": "Administración de Furosemida 40 mg endovenosa"
          },
          {
            "id": "D",
            "text": "Administración de Morfina 5 mg endovenosa"
          },
          {
            "id": "E",
            "text": "Inicio inmediato de Propanolol oral"
          }
        ],
        "correcta": "A",
        "explicacion": "El paciente tiene un infarto del ventrículo derecho confirmado por V4R positivo. El ventrículo derecho infartado depende críticamente de una presión de llenado elevada (precarga) para mantener el gasto cardíaco: el tratamiento de la hipotensión es la expansión de volumen con suero fisiológico. Los nitratos, los diuréticos y la morfina reducen la precarga y causan colapso circulatorio; el betabloqueador no corresponde en el shock.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Hombre de 62 años en su 5.º día post-infarto agudo al miocardio evoluciona con hipotensión severa y disnea. Al examen destaca un soplo pansistólico rudo con frémito en el borde esternal izquierdo bajo. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Rotura del tabique interventricular (CIV post-IAM)"
          },
          {
            "id": "B",
            "text": "Rotura de la pared libre del ventrículo izquierdo"
          },
          {
            "id": "C",
            "text": "Insuficiencia aórtica aguda"
          },
          {
            "id": "D",
            "text": "Reinfarto miocárdico con pericarditis"
          },
          {
            "id": "E",
            "text": "Tromboembolismo pulmonar masivo"
          }
        ],
        "correcta": "A",
        "explicacion": "Un soplo pansistólico rudo con frémito palpable en el borde esternal izquierdo bajo después de varios días de un infarto es característico de la rotura del tabique interventricular. En la rotura de la pared libre hay colapso con disociación electromecánica y sin soplo; en la insuficiencia aórtica el soplo es diastólico.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Mujer de 35 años fumadora consulta por dolor torácico opresivo nocturno en reposo. El ECG durante el dolor muestra supradesnivel del ST de 2 mm en derivaciones anteriores que se normaliza completamente al ceder el dolor con nitroglicerina sublingual. La coronariografía no muestra lesiones obstructivas fijas. ¿Cuál es el fármaco profiláctico de primera línea?",
        "options": [
          {
            "id": "A",
            "text": "Amlodipino o Diltiazem"
          },
          {
            "id": "B",
            "text": "Propranolol oral"
          },
          {
            "id": "C",
            "text": "Atenolol oral"
          },
          {
            "id": "D",
            "text": "Carvedilol oral"
          },
          {
            "id": "E",
            "text": "Metoprolol succinato"
          }
        ],
        "correcta": "A",
        "explicacion": "El cuadro es una angina vasoespástica (de Prinzmetal). Los fármacos de primera línea para prevenir nuevos episodios son los calcioantagonistas (amlodipino, diltiazem o verapamilo), junto con la suspensión del tabaco. Los betabloqueadores, sobre todo los no selectivos, están contraindicados porque favorecen el espasmo.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "2.3§3 · 2.4§0 · 2.4§1 · 2.4§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  }
];

module.exports = { bloque2 };
