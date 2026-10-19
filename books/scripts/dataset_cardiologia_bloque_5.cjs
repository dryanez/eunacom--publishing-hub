/**
 * Tomo 01 · Cardiología — Bloque 5: Hipertensión Arterial, Pericardio y Patología Vascular
 * Formato estándar (igual que dataset_endocrinologia_bloque_*.cjs). Migrado desde los 25 temas antiguos
 * (books/scripts/_old_cardio/) por _old_cardio/migrar_a_38_temas.cjs; `_origen` indica de dónde viene cada sección.
 * `_estado`: 'migrado' (contenido antiguo sin reescribir) · 'borrador' (tema nuevo, contenido mínimo) · 'estandar' (reescrito al estándar).
 */
const bloque5 = [
  {
    "id": "cardio-29",
    "classId": "cardio-29",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.1",
    "title": "Hipertensión Arterial: Diagnóstico, MAPA y Etapificación",
    "perfilCode": "1.01.1.015, 1.01.4.011",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N.º 21): Hipertensión Arterial Primaria o Esencial en personas de 15 años y más",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Criterios diagnósticos de consulta, MAPA y AMPA, bata blanca y enmascarada, etapas, daño de órgano blanco y primera elección según comorbilidad",
    "svg": null,
    "algoTitle": "Algoritmo de diagnóstico de la hipertensión arterial (Guía GES)",
    "diagram": {
      "title": "Algoritmo de Confirmación Diagnóstica de la Hipertensión Arterial",
      "svg": "<svg viewBox=\"0 0 620 310\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar29\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar29)}\n  </style>\n  <path class=\"ln\" d=\"M310,46 V72\"/>\n  <path class=\"ln\" d=\"M310,110 V120 H162 V136\"/>\n  <text class=\"lbl\" x=\"166\" y=\"132\">Sí</text>\n  <path class=\"ln\" d=\"M310,110 V120 H458 V136\"/>\n  <text class=\"lbl\" x=\"462\" y=\"132\">No</text>\n  <path class=\"ln\" d=\"M162,174 V188 H310 V200\"/>\n  <path class=\"ln\" d=\"M458,174 V188 H310 V200\"/>\n  <path class=\"ln\" d=\"M310,238 V248 H162 V264\"/>\n  <text class=\"lbl\" x=\"166\" y=\"260\">Consulta alta, MAPA normal</text>\n  <path class=\"ln\" d=\"M310,238 V248 H458 V264\"/>\n  <text class=\"lbl\" x=\"462\" y=\"260\">MAPA alto</text>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de HTA: PA ≥ 140/90 mmHg en la consulta</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">Técnica correcta: sentado, reposo 5 min, brazalete adecuado, 2 tomas por visita</text>\n  <rect class=\"dec\" x=\"60\" y=\"72\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"87\" text-anchor=\"middle\" font-weight=\"700\">¿PA ≥ 180/110, o ≥ 140/90 con daño de órgano blanco?</text>\n  <text class=\"sub\" x=\"310\" y=\"100\" text-anchor=\"middle\">HVI, retinopatía III-IV, ERC, infarto o ACV previo</text>\n  <rect class=\"acc\" x=\"12\" y=\"136\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"162\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">HTA confirmada en la primera consulta</text>\n  <text class=\"accS\" x=\"162\" y=\"164\" text-anchor=\"middle\">Inicio de tratamiento; descartar emergencia hipertensiva</text>\n  <rect class=\"dec\" x=\"308\" y=\"136\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"458\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Confirmar fuera de la consulta</text>\n  <text class=\"sub\" x=\"458\" y=\"164\" text-anchor=\"middle\">Perfil de PA (≥ 2 visitas) o MAPA / AMPA</text>\n  <rect class=\"b\" x=\"60\" y=\"200\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"215\" text-anchor=\"middle\" font-weight=\"700\">MAPA 24 h: ≥ 130/80 · diurno ≥ 135/85 · nocturno ≥ 120/70</text>\n  <text class=\"sub\" x=\"310\" y=\"228\" text-anchor=\"middle\">AMPA 7 días: ≥ 135/85 mmHg</text>\n  <rect class=\"warn\" x=\"12\" y=\"264\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"162\" y=\"279\" text-anchor=\"middle\" font-weight=\"700\">Bata blanca</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"292\" text-anchor=\"middle\">Sin fármaco; control anual</text>\n  <rect class=\"acc\" x=\"308\" y=\"264\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"458\" y=\"279\" text-anchor=\"middle\" font-weight=\"700\">HTA confirmada: etapificar</text>\n  <text class=\"accS\" x=\"458\" y=\"292\" text-anchor=\"middle\">Grado 1 · 2 · 3 y riesgo cardiovascular</text>\n</svg>"
    },
    "contexto": "La hipertensión arterial es la enfermedad crónica más frecuente de la atención primaria y el principal factor de riesgo de muerte cardiovascular en Chile; afecta a cerca de uno de cada tres adultos y muchos no lo saben. El médico general es quien la diagnostica, y un diagnóstico mal hecho tiene costo: tratar a un paciente de bata blanca expone a efectos adversos innecesarios, y pasar por alto una hipertensión enmascarada deja sin proteger a quien sí tiene riesgo. El EUNACOM pregunta cuántas tomas se necesitan, cuándo basta una sola consulta, los cortes del MAPA y qué hacer cuando la presión de consulta y la de domicilio no coinciden.",
    "contentSections": [
      {
        "subhead": "1. Qué es la HTA y por qué se diagnostica con tanto cuidado",
        "paragraphs": [
          "La presión arterial es el producto del <strong>gasto cardíaco por la resistencia vascular periférica</strong>. En más del 90% de los adultos la elevación crónica no tiene una causa identificable y se llama <strong>hipertensión arterial primaria o esencial</strong>: resulta de la suma de predisposición genética, exceso de sal, sobrepeso, sedentarismo, alcohol, envejecimiento de la pared arterial y activación del sistema simpático y del eje renina-angiotensina-aldosterona. Menos del 10% es secundaria a una causa corregible (renal, endocrina, vascular o inducida por fármacos), y se estudia en el Tema 5.3.",
          "La HTA es <strong>silenciosa</strong>: la gran mayoría de los pacientes no tiene síntomas hasta que aparece el daño. La presión alta sostenida lesiona los órganos con mayor flujo y vasos más finos, y por eso se habla de <strong>daño de órgano blanco</strong>: <em>corazón</em> (hipertrofia ventricular izquierda, insuficiencia cardíaca, cardiopatía coronaria, fibrilación auricular), <em>cerebro</em> (accidente cerebrovascular, demencia vascular), <em>riñón</em> (nefroesclerosis, enfermedad renal crónica con albuminuria), <em>retina</em> (retinopatía hipertensiva) y <em>arterias</em> (aneurisma y disección aórtica, enfermedad arterial periférica). Cada 20 mmHg de presión sistólica sobre 115 mmHg duplica el riesgo de muerte cardiovascular.",
          "Como el tratamiento es de por vida y la presión de un mismo paciente varía a lo largo del día, el diagnóstico exige <strong>más de una medición en condiciones controladas</strong>. Un número aislado tomado con el paciente angustiado, con el brazalete mal puesto o recién llegado corriendo a la consulta no define una enfermedad crónica."
        ]
      },
      {
        "subhead": "2. Cómo se mide la presión arterial",
        "paragraphs": [
          "La técnica correcta es parte de lo que el EUNACOM espera que el médico domine. El paciente debe estar <strong>sentado, con la espalda apoyada, los pies en el suelo y el brazo a la altura del corazón, tras 5 minutos de reposo</strong>, sin haber fumado, tomado café ni hecho ejercicio en los 30 minutos previos y con la vejiga vacía. El <strong>brazalete debe tener el tamaño adecuado</strong>: la cámara inflable cubre al menos el 80% de la circunferencia del brazo. Un brazalete demasiado chico sobrestima la presión (error frecuente en obesos); uno demasiado grande la subestima.",
          "En la primera consulta se mide en <strong>ambos brazos</strong> y se usa para el seguimiento el de cifras más altas; una diferencia sistólica sostenida de más de 15 a 20 mmHg obliga a pensar en estenosis subclavia o en disección aórtica. Se hacen <strong>al menos 2 mediciones por visita, separadas por 1 a 2 minutos</strong>, y se promedian (si difieren más de 5 mmHg se toma una tercera). En adultos mayores, diabéticos y pacientes con fármacos que dan hipotensión se mide también de pie, al minuto y a los 3 minutos, para detectar <strong>hipotensión ortostática</strong> (caída de ≥ 20 mmHg sistólica o ≥ 10 mmHg diastólica).",
          "Los equipos de brazo validados (oscilométricos) han reemplazado al esfigmomanómetro de mercurio; los de muñeca o de dedo no se recomiendan. En la arritmia (fibrilación auricular) se promedian varias lecturas."
        ]
      },
      {
        "subhead": "3. Criterios diagnósticos oficiales en Chile (Guía Clínica GES del MINSAL)",
        "paragraphs": [
          "El diagnóstico se basa en el <strong>perfil de presión arterial</strong>, que reúne las mediciones de varias visitas:",
          "• <strong>Criterio estándar de consulta:</strong> promedio de <strong>≥ 2 tomas de presión arterial separadas por al menos 1 a 2 semanas</strong>, con <strong>presión sistólica (PAS) ≥ 140 mmHg y/o presión diastólica (PAD) ≥ 90 mmHg</strong>.",
          "• <strong>Excepción: diagnóstico en la primera consulta.</strong> Se confirma HTA en una sola visita si la presión es <strong>≥ 180/110 mmHg</strong> (grado 3) <strong>o si es ≥ 140/90 mmHg con daño de órgano blanco documentado</strong> (hipertrofia ventricular izquierda en el ECG, retinopatía hipertensiva grado III-IV, enfermedad renal crónica, o antecedente de infarto o accidente cerebrovascular). En estos pacientes se inicia el tratamiento sin esperar. Cuando el paciente es diabético o tiene enfermedad renal crónica, la práctica clínica acepta confirmar con 2 tomas elevadas.",
          "• <strong>Criterios fuera de la consulta:</strong> (1) <strong>MAPA</strong> (monitoreo ambulatorio de presión arterial, o «Holter de presión»): promedio de 24 horas <strong>≥ 130/80 mmHg</strong>, promedio diurno (vigilia) <strong>≥ 135/85 mmHg</strong> o promedio nocturno (sueño) <strong>≥ 120/70 mmHg</strong>. (2) <strong>AMPA</strong> (automonitoreo domiciliario): promedio de las mediciones de <strong>7 días ≥ 135/85 mmHg</strong>, con 2 tomas en la mañana y 2 en la noche y descartando el primer día.",
          "Un punto que se pregunta: <strong>los umbrales fuera de la consulta son más bajos que los de consulta</strong> (135/85 en lugar de 140/90) porque la presión ambulatoria es, en promedio, menor. No se confunden los cortes: 140/90 en la consulta; 135/85 en el domicilio y en el período diurno del MAPA; 130/80 en las 24 horas; 120/70 en el sueño."
        ]
      },
      {
        "subhead": "4. MAPA (Holter de presión arterial): indicaciones e interpretación del informe",
        "paragraphs": [
          "El <strong>MAPA</strong> registra la presión cada 20 a 30 minutos durante el día y cada 30 a 60 minutos durante la noche, por 24 horas, mientras el paciente hace su vida habitual y anota en un diario sus horas de sueño y sus medicamentos. Se coloca el manguito en el brazo no dominante, con tamaño adecuado. El estudio es válido si tiene al menos <strong>70% de las lecturas</strong> esperadas (mínimo 20 diurnas y 7 nocturnas). Es el estándar de oro para confirmar el diagnóstico de HTA y estratificar el riesgo, y predice mejor que la presión de consulta el daño de órgano blanco y los eventos cardiovasculares.",
          "<strong>Indicaciones:</strong> 1) sospecha de <strong>HTA de bata blanca</strong> (presión de consulta ≥ 140/90 con cifras normales fuera de ella y sin daño de órgano blanco); 2) sospecha de <strong>HTA enmascarada</strong> (presión de consulta normal con daño de órgano blanco, diabetes, enfermedad renal crónica o alto riesgo); 3) <strong>HTA resistente</strong>, para descartar pseudorresistencia; 4) hipotensión sintomática o disfunción autonómica; 5) evaluación del descenso nocturno; 6) presión muy variable entre controles; y 7) sospecha de preeclampsia en la embarazada hipertensa.",
          "<strong>Cómo se lee el informe:</strong> se revisan los promedios de <strong>24 horas (≥ 130/80), diurno (≥ 135/85) y nocturno (≥ 120/70)</strong>, la <strong>carga tensional</strong> (porcentaje de lecturas sobre el valor normal; una carga mayor de 40% es patológica) y el <strong>descenso nocturno</strong>: <em>dipper</em> (la presión cae entre 10 y 20% durante el sueño, lo normal), <em>non-dipper</em> (cae menos de 10%) y <em>riser</em> (la presión nocturna supera a la diurna). El patrón non-dipper o riser se asocia a mayor daño de órgano blanco y mayor riesgo cardiovascular, y obliga a buscar apnea del sueño (SAHOS), enfermedad renal crónica, hiperaldosteronismo, diabetes con neuropatía autonómica y exceso de sal; si la presión nocturna es alta con el esquema matinal, parte de los antihipertensivos se pasa a la noche.",
          "<strong>Qué concluir:</strong> un promedio de 24 horas bajo 130/80 con presión de consulta alta confirma <strong>bata blanca</strong>: no se inicia fármaco, se indican medidas de estilo de vida y se repite el control al año (un tercio evoluciona a HTA sostenida). Una presión de consulta normal con MAPA o AMPA elevados es <strong>HTA enmascarada</strong> y se trata como HTA confirmada; un MAPA con presión de consulta normal pero «carga tensional» elevada es la forma de reconocerla. La HTA de bata blanca y la enmascarada son los dos desacuerdos que se preguntan."
        ]
      },
      {
        "subhead": "5. Etapificación: grados de HTA y estratificación del riesgo cardiovascular",
        "paragraphs": [
          "La clasificación por niveles de presión de consulta (Tabla 5.1.A) separa la presión <strong>óptima (&lt; 120/80)</strong>, <strong>normal (120-129/80-84)</strong> y <strong>normal-alta (130-139/85-89)</strong> de los grados de hipertensión: <strong>grado 1 (140-159/90-99)</strong>, <strong>grado 2 (160-179/100-109)</strong> y <strong>grado 3 (≥ 180/110)</strong>. Cuando la sistólica y la diastólica caen en categorías distintas, manda la más alta. La <strong>HTA sistólica aislada</strong> (PAS ≥ 140 con PAD &lt; 90) es la forma típica del adulto mayor por rigidez arterial.",
          "El grado de presión no basta: el tratamiento depende del <strong>riesgo cardiovascular global</strong>, que suma al nivel de presión los otros factores de riesgo (edad, sexo masculino, tabaquismo, dislipidemia, diabetes, obesidad, antecedente familiar precoz), el daño de órgano blanco y las enfermedades asociadas. Un hipertenso grado 1 sin otros factores tiene riesgo bajo; con diabetes, enfermedad renal crónica o enfermedad cardiovascular establecida, el riesgo es alto o muy alto aunque su presión sea solo grado 1. En el programa de salud cardiovascular (PSCV) la clasificación del riesgo (bajo, moderado, alto, muy alto) determina la frecuencia de los controles y la intensidad del tratamiento.",
          "La <strong>prehipertensión o presión normal-alta</strong> no se trata con fármacos salvo en pacientes de muy alto riesgo; se indican cambios de estilo de vida y control anual. La guía estadounidense (ACC/AHA) define HTA desde 130/80, pero la norma chilena y el EUNACOM usan 140/90 para la consulta y reservan los cortes de 130/80 para el MAPA y para las metas de tratamiento en grupos de riesgo."
        ]
      },
      {
        "subhead": "6. Evaluación inicial del paciente hipertenso: daño de órgano blanco y exámenes",
        "paragraphs": [
          "Una vez confirmada la HTA se busca el <strong>daño de órgano blanco</strong>, se evalúa el riesgo cardiovascular y se descartan causas secundarias. La anamnesis explora el tiempo de evolución, antecedentes familiares, consumo de sal, alcohol, tabaco, drogas (cocaína, anfetaminas), y <strong>fármacos que elevan la presión</strong>: antiinflamatorios (AINE), corticoides, anticonceptivos orales combinados, descongestionantes con pseudoefedrina, ciclosporina, eritropoyetina, regaliz. En el examen se mide peso, talla, IMC y circunferencia de cintura, se palpan los pulsos (femorales retrasados respecto de los radiales sugieren coartación), se auscultan soplos carotídeos, abdominales y cardíacos, y se hace el fondo de ojo cuando hay cifras graves.",
          "Los <strong>exámenes básicos del PSCV</strong> son: electrocardiograma (hipertrofia ventricular izquierda, isquemia, arritmias), creatinina con cálculo de la velocidad de filtración glomerular, <strong>razón albuminuria/creatininuria (RAC)</strong>, sedimento de orina, glicemia en ayunas, perfil lipídico, potasio, calcio y ácido úrico, hemograma y TSH si hay sospecha. El ecocardiograma no es de rutina: se pide ante sospecha de hipertrofia, soplo o síntomas de insuficiencia cardíaca. Una <strong>hipopotasemia espontánea</strong> orienta a hiperaldosteronismo, una creatinina que sube tras iniciar un IECA o ARA II a estenosis de la arteria renal, y la tríada de cefalea, sudor y palpitaciones a feocromocitoma (Tema 5.3).",
          "El <strong>fondo de ojo</strong> clasifica la retinopatía hipertensiva: grado I y II (estrechamiento arteriolar y cruces arteriovenosos patológicos) son cambios crónicos de poca especificidad; el <strong>grado III (hemorragias y exudados algodonosos o duros)</strong> y el <strong>grado IV (edema de papila)</strong> indican daño avanzado y, en este último caso, una emergencia hipertensiva (Tema 5.4). La nefroesclerosis hipertensiva se reconoce por la albuminuria y la caída progresiva de la velocidad de filtración glomerular."
        ]
      },
      {
        "subhead": "7. Seguimiento, GES N.º 21 y primera elección según el paciente",
        "paragraphs": [
          "La HTA primaria en personas de 15 años y más es el <strong>problema de salud GES N.º 21</strong>: el sistema garantiza la confirmación diagnóstica, el tratamiento farmacológico y los controles, junto con el acceso a atención de especialidad cuando corresponde. El programa de salud cardiovascular de la atención primaria agrupa los controles con médico, enfermera y nutricionista; la frecuencia depende del riesgo y de si el paciente está compensado.",
          "Una vez hecho el diagnóstico, el fármaco de primera elección se escoge por las <strong>indicaciones obligadas</strong> (detalle en el Tema 5.2): IECA o ARA II en el diabético, el paciente con proteinuria o enfermedad renal crónica, la insuficiencia cardíaca con fracción reducida y el posinfarto; tiazida o calcioantagonista en el adulto mayor y en el paciente de raza negra; betabloqueador solo cuando hay una indicación propia (cardiopatía coronaria, taquiarritmia, insuficiencia cardíaca) y no como primera línea. En la mujer en edad fértil se evitan IECA y ARA II por el riesgo teratogénico.",
          "Las <strong>medidas no farmacológicas</strong> acompañan a todo paciente y por sí solas bajan la presión: reducir la sal a menos de 5 g al día (cada 2 g menos de sodio bajan unos 5 mmHg), bajar de peso (cerca de 1 mmHg por kilo), dieta DASH rica en frutas, verduras y lácteos descremados, ejercicio aeróbico 150 minutos por semana, limitar el alcohol y dejar de fumar. En el paciente con presión de bata blanca, o en el hipertenso grado 1 de bajo riesgo, se prueban 3 a 6 meses de estas medidas antes de iniciar fármacos, salvo que haya daño de órgano blanco o riesgo alto."
        ]
      }
    ],
    "table": {
      "title": "Criterios de Hipertensión según el Método de Medición y Clasificación por Grados",
      "headers": [
        "Método",
        "Se considera HTA si…",
        "Observación"
      ],
      "rows": [
        [
          "Consulta (perfil de PA)",
          "≥ 140/90 mmHg en ≥ 2 visitas separadas por 1-2 semanas",
          "Promedio de 2 tomas por visita"
        ],
        [
          "Primera consulta",
          "≥ 180/110, o ≥ 140/90 con daño de órgano blanco",
          "No se espera una segunda visita"
        ],
        [
          "MAPA 24 h",
          "Promedio 24 h ≥ 130/80 · diurno ≥ 135/85 · nocturno ≥ 120/70",
          "Estándar de oro; válido con ≥ 70% de lecturas"
        ],
        [
          "AMPA 7 días",
          "Promedio ≥ 135/85 mmHg",
          "2 tomas mañana y 2 noche; se descarta el 1.er día"
        ],
        [
          "Grado 1",
          "140-159 / 90-99 mmHg",
          "Riesgo según factores asociados"
        ],
        [
          "Grado 2",
          "160-179 / 100-109 mmHg",
          "Mayor probabilidad de requerir 2 fármacos"
        ],
        [
          "Grado 3",
          "≥ 180 / 110 mmHg",
          "Descartar daño agudo de órgano blanco"
        ],
        [
          "Bata blanca",
          "Consulta ≥ 140/90 y MAPA/AMPA normales",
          "Sin fármacos; control anual"
        ],
        [
          "Enmascarada",
          "Consulta normal y MAPA/AMPA elevados",
          "Se trata como HTA"
        ]
      ]
    },
    "vignette": "Mujer de 47 años, con IMC 31 kg/m², consulta a control en el consultorio. Sin síntomas. Se registran 148/94 y 146/92 mmHg en dos visitas separadas por 10 días, con técnica correcta. Creatinina 0,8 mg/dL, potasio 4,2 mEq/L, glicemia 92 mg/dL, RAC normal y ECG sin hipertrofia. El mes siguiente trae un MAPA con promedio de 24 horas de 132/82 mmHg, diurno 138/86 y nocturno 118/68 mmHg, con descenso nocturno de 14%.",
    "explicacion": "Las dos visitas con presión ≥ 140/90 cumplen el criterio de consulta, y el MAPA lo confirma: el promedio de 24 horas (132/82) supera 130/80 y el diurno (138/86) supera 135/85. El nocturno está bajo 120/70 y el descenso de 14% es normal (dipper). Es una hipertensión grado 1 esencial sin daño de órgano blanco, sin diabetes ni enfermedad renal y con riesgo cardiovascular probablemente bajo-moderado: se indican medidas de estilo de vida (sal, peso, ejercicio) y se inicia tratamiento con un ARA II o IECA, o una tiazida o un calcioantagonista, según la tolerancia, con control mensual hasta lograr la meta. No requiere estudio de causas secundarias.",
    "keyPoints": [
      "Diagnóstico de HTA: promedio de ≥ 2 tomas en ≥ 2 visitas separadas por 1-2 semanas con PA ≥ 140/90 mmHg (perfil de PA).",
      "Se diagnostica en la primera consulta si PA ≥ 180/110 o si PA ≥ 140/90 con daño de órgano blanco.",
      "Cortes fuera de la consulta: MAPA 24 h ≥ 130/80, diurno ≥ 135/85, nocturno ≥ 120/70; AMPA de 7 días ≥ 135/85.",
      "Bata blanca: consulta alta y MAPA normal (sin fármaco, control anual). Enmascarada: consulta normal y MAPA alto (se trata).",
      "MAPA: dipper (cae 10-20%), non-dipper (< 10%), riser (sube de noche): buscar SAHOS, ERC, hiperaldosteronismo.",
      "Grados: 1 (140-159/90-99), 2 (160-179/100-109), 3 (≥ 180/110); el riesgo cardiovascular global decide el tratamiento.",
      "Estudio inicial: ECG, creatinina/VFG, RAC, glicemia, perfil lipídico, potasio y fondo de ojo; GES N.º 21.",
      "Medir con brazalete adecuado, sentado y con 5 minutos de reposo; ambos brazos en la primera visita."
    ],
    "questions": [
      {
        "stem": "Un paciente de 45 años, con IMC de 32 kg/m², acude a control médico, objetivándose presión arterial de 146/92 mmHg. Se solicita Holter de presión arterial, que muestra múltiples registros sobre 140/90 mmHg, diagnosticándose hipertensión arterial. Sus exámenes de laboratorio resultan normales, incluyendo función renal, electrolitos plasmáticos y electrocardiograma. ¿Qué tipo de fármacos es el más adecuado para iniciar el tratamiento antihipertensivo en este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Bloqueadores alfa-adrenérgicos"
          },
          {
            "id": "B",
            "text": "Bloqueadores beta-adrenérgicos"
          },
          {
            "id": "C",
            "text": "Inhibidores del canal de calcio"
          },
          {
            "id": "D",
            "text": "Antagonistas del receptor de angiotensina"
          },
          {
            "id": "E",
            "text": "Diuréticos tiazídicos"
          }
        ],
        "correcta": "D",
        "explicacion": "Un Holter de presión con múltiples registros sobre 140/90 confirma la hipertensión. Sin elementos de causa secundaria, es una HTA esencial: se inicia un inhibidor del sistema renina-angiotensina (IECA o ARA II) o un tratamiento combinado con calcioantagonista. De las alternativas, los antagonistas del receptor de angiotensina son la primera elección; los betabloqueadores y los alfabloqueadores no son de primera línea.",
        "recTag": "EUNACOM Diciembre 2025 · Pregunta 177"
      },
      {
        "stem": "Un paciente diabético de larga data en tratamiento con empagliflozina 10 mg al día, metformina 1.000 mg cada 8 horas y atorvastatina 20 mg al día, presenta presiones arteriales de 140/90 mmHg y 158/87 mmHg en dos controles diferentes. El resto de su examen físico es normal y trae exámenes, entre los que destaca hemoglobina glicosilada de 6.9%. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Iniciar terapia depletiva de potasio"
          },
          {
            "id": "B",
            "text": "Iniciar tratamiento antihipertensivo"
          },
          {
            "id": "C",
            "text": "Solicitar un monitoreo ambulatorio de presión arterial (MAPA)"
          },
          {
            "id": "D",
            "text": "Iniciar terapia antiagregante plaquetaria"
          },
          {
            "id": "E",
            "text": "Iniciar insulina"
          }
        ],
        "correcta": "B",
        "explicacion": "En un paciente diabético, dos tomas de 140/90 y 158/87 mmHg en controles distintos bastan para confirmar la hipertensión, porque la meta es < 130/80 y su riesgo es alto; no es necesario esperar el MAPA. Se inicia tratamiento antihipertensivo, con IECA o ARA II de primera elección.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 144"
      },
      {
        "stem": "Un paciente de 38 años, diagnosticado de hipertensión arterial, está en tratamiento con enalapril 20 mg c/12 horas, hidroclorotiazida 25 mg/d y amlodipino 10 mg/día. Se realiza control con monitoreo de 24 horas de presión arterial que muestra presiones arteriales diurnas promedio de 152/100 mmHg, con sobrecarga tensional de 60% sistólica y 43% diastólica y presiones arteriales nocturnas de 140/92 mmHg, con sobrecarga tensional de 25% sistólica y 27% diastólica. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Aumentar la dosis de hidroclorotiazida"
          },
          {
            "id": "B",
            "text": "Aumentar la dosis de enalapril"
          },
          {
            "id": "C",
            "text": "Iniciar inhibidor del receptor de aldosterona y descartar hipertensión secundaria"
          },
          {
            "id": "D",
            "text": "Reemplazar el enalapril por losartán"
          },
          {
            "id": "E",
            "text": "Reemplazar la hidroclorotiazida por un inhibidor del receptor de aldosterona"
          }
        ],
        "correcta": "C",
        "explicacion": "Con tres fármacos (IECA, tiazida y calcioantagonista) en dosis altas y un MAPA con promedio diurno de 152/100 y cargas tensionales elevadas, la hipertensión no está controlada: es una HTA resistente. Se agrega un antagonista de la aldosterona (espironolactona) como cuarto fármaco y se estudia una causa secundaria. La carga tensional elevada con presión de consulta normal sería, en cambio, una HTA enmascarada.",
        "recTag": "EUNACOM Agosto 2021 · Pregunta 136"
      }
    ],
    "_origen": "5.1§0 · 5.1§4 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-30",
    "classId": "cardio-30",
    "tier": 3,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.2",
    "title": "Hipertensión Arterial: Tratamiento Farmacológico, Metas y GES",
    "perfilCode": "1.01.1.015",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES N.º 21): Hipertensión Arterial Primaria o Esencial en personas de 15 años y más",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Primera elección según comorbilidad, efectos adversos y su conducta (tos por IECA, edema por amlodipino), metas por edad y diabetes, HTA resistente y espironolactona",
    "svg": null,
    "algoTitle": "Algoritmo de tratamiento farmacológico de la hipertensión arterial (Guía GES)",
    "diagram": {
      "title": "Algoritmo de Tratamiento Escalonado de la Hipertensión Arterial",
      "svg": "<svg viewBox=\"0 0 620 374\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar30\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar30)}\n  </style>\n  <path class=\"ln\" d=\"M310,46 V72\"/>\n  <path class=\"ln\" d=\"M310,110 V120 H162 V136\"/>\n  <text class=\"lbl\" x=\"166\" y=\"132\">Sí</text>\n  <path class=\"ln\" d=\"M310,110 V120 H458 V136\"/>\n  <text class=\"lbl\" x=\"462\" y=\"132\">No</text>\n  <path class=\"ln\" d=\"M162,174 V188 H310 V200\"/>\n  <path class=\"ln\" d=\"M458,174 V188 H310 V200\"/>\n  <path class=\"ln\" d=\"M310,238 V264\"/>\n  <path class=\"ln\" d=\"M310,302 V328\"/>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">HTA confirmada: cambios de estilo de vida en todos</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">Sal &lt; 5 g/día · bajar de peso · DASH · ejercicio · alcohol · tabaco</text>\n  <rect class=\"dec\" x=\"60\" y=\"72\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"87\" text-anchor=\"middle\" font-weight=\"700\">¿Grado 1 con riesgo bajo y sin daño de órgano blanco?</text>\n  <text class=\"sub\" x=\"310\" y=\"100\" text-anchor=\"middle\">Si no: grado ≥ 2, riesgo alto, diabetes, ERC o daño de órgano blanco</text>\n  <rect class=\"b\" x=\"12\" y=\"136\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"162\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Prueba de 3 a 6 meses sin fármaco</text>\n  <text class=\"sub\" x=\"162\" y=\"164\" text-anchor=\"middle\">Si no llega a la meta: monoterapia</text>\n  <rect class=\"acc\" x=\"308\" y=\"136\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"458\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Fármaco desde el inicio</text>\n  <text class=\"accS\" x=\"458\" y=\"164\" text-anchor=\"middle\">IECA o ARA II + calcioantagonista o tiazida (dosis fija si PA ≥ 160/100)</text>\n  <rect class=\"dec\" x=\"60\" y=\"200\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"215\" text-anchor=\"middle\" font-weight=\"700\">PA fuera de meta a las 4 semanas</text>\n  <text class=\"sub\" x=\"310\" y=\"228\" text-anchor=\"middle\">Verificar adherencia, técnica de medición, sal y fármacos que suben la PA</text>\n  <rect class=\"acc\" x=\"60\" y=\"264\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"279\" text-anchor=\"middle\" font-weight=\"700\">Terapia triple</text>\n  <text class=\"accS\" x=\"310\" y=\"292\" text-anchor=\"middle\">IECA/ARA II + calcioantagonista + tiazida a dosis plenas</text>\n  <rect class=\"warn\" x=\"60\" y=\"328\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"343\" text-anchor=\"middle\" font-weight=\"700\">HTA resistente: agregar espironolactona 25-50 mg</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"356\" text-anchor=\"middle\">Estudiar causa secundaria (Tema 5.3) · derivar a especialista</text>\n</svg>"
    },
    "contexto": "Tratar la hipertensión es lo que más muertes cardiovasculares previene en la atención primaria: bajar la presión sistólica en 10 mmHg reduce cerca de 40% el accidente cerebrovascular y 20% la enfermedad coronaria. Pero el tratamiento es largo, el paciente no siente nada y los fármacos tienen efectos adversos, por lo que hacerlo bien exige elegir la clase adecuada para cada persona, reconocer a tiempo un efecto adverso y reemplazar el medicamento culpable. El EUNACOM pregunta casi siempre lo mismo: el fármaco de primera elección según la comorbilidad, qué hacer con la tos del IECA o el edema del amlodipino, la meta de presión según la edad y cuándo agregar espironolactona.",
    "contentSections": [
      {
        "subhead": "1. Principios del tratamiento: cuándo, con qué meta y con qué objetivo",
        "paragraphs": [
          "El objetivo del tratamiento antihipertensivo no es solo un número: es <strong>reducir la morbimortalidad cardiovascular</strong> (accidente cerebrovascular, infarto, insuficiencia cardíaca y enfermedad renal crónica). La reducción de la presión es lo que importa, y la mayor parte del beneficio se debe al descenso mismo y no a la clase de fármaco, con excepciones que se verán más adelante (indicaciones obligadas).",
          "Las <strong>medidas no farmacológicas</strong> se indican a todos los hipertensos, con o sin fármacos: reducir la sal a menos de 5 g al día, bajar de peso (cada kilo menos baja cerca de 1 mmHg), dieta DASH, ejercicio aeróbico de 150 minutos por semana, moderar el alcohol y dejar de fumar. Juntas pueden bajar entre 10 y 20 mmHg. En el <strong>hipertenso grado 1 de riesgo bajo, sin daño de órgano blanco</strong>, se ensayan solas durante 3 a 6 meses; si no se llega a la meta, se agrega el fármaco.",
          "Se inicia <strong>tratamiento farmacológico de inmediato</strong> si la HTA es grado 2 o 3 (≥ 160/100 mmHg), si el riesgo cardiovascular es alto o muy alto, o si hay <strong>diabetes, enfermedad renal crónica, daño de órgano blanco o enfermedad cardiovascular establecida</strong>, con cifras desde 140/90 mmHg. En el adulto mayor se trata también (el beneficio se demostró hasta los 80 años y más), pero con metas y velocidad de descenso más cuidadosas."
        ]
      },
      {
        "subhead": "2. Las clases de fármacos: mecanismo, efectos adversos y contraindicaciones",
        "paragraphs": [
          "<strong>Inhibidores de la enzima convertidora de angiotensina (IECA; enalapril, captopril, ramipril)</strong> y <strong>antagonistas del receptor de angiotensina II (ARA II; losartán, valsartán, candesartán)</strong> bloquean el eje renina-angiotensina-aldosterona: dilatan la arteriola eferente del glomérulo, bajan la proteinuria y protegen al corazón y al riñón. Los IECA producen <strong>tos seca en 10 a 15%</strong> (acumulación de bradicinina), y rara vez <strong>angioedema</strong>; los ARA II no producen tos y se usan como reemplazo (si aparece la tos, se cambia a losartán: no se agrega otro fármaco ni se suspende sin reemplazo). Ambas clases pueden causar <strong>hiperpotasemia</strong> y un alza de creatinina de hasta 30% al iniciar, que es esperable; si sube más, se sospecha <strong>estenosis de la arteria renal</strong> bilateral. <strong>No se combinan entre sí</strong>, están <strong>contraindicados en el embarazo</strong> (teratogénicos) y en el angioedema previo, y se usan con precaución en hiperpotasemia.",
          "<strong>Calcioantagonistas dihidropiridínicos (amlodipino, nifedipino de liberación prolongada)</strong> dilatan las arteriolas. Su efecto adverso típico es el <strong>edema maleolar bilateral</strong> dependiente de la dosis (dilatación arteriolar sin dilatación venosa), con cefalea y rubor. El edema no responde a diuréticos y no indica insuficiencia cardíaca ni retención de sal: <strong>se suspende el amlodipino y se reemplaza por otra clase</strong>, que es lo que el examen castiga cuando se «sube el diurético». Los calcioantagonistas no dihidropiridínicos (verapamilo y diltiazem) frenan el nodo AV: dan bradicardia, bloqueo y estreñimiento, y <strong>no se combinan con betabloqueadores</strong>.",
          "<strong>Diuréticos tiazídicos (hidroclorotiazida, clortalidona, indapamida)</strong> reducen el volumen plasmático y luego la resistencia periférica. Efectos adversos: <strong>hipopotasemia, hiponatremia, hiperuricemia (gota), intolerancia a la glucosa, hipercalcemia e hipomagnesemia</strong>; son ineficaces con velocidad de filtración glomerular bajo 30 mL/min (aunque la clortalidona conserva efecto) y en esos pacientes se usa un diurético de asa. Previenen la osteoporosis, por lo que son útiles en la mujer posmenopáusica. La <strong>espironolactona</strong> (antagonista de la aldosterona) es el cuarto fármaco de la HTA resistente: da hiperpotasemia y, en el varón, ginecomastia.",
          "<strong>Betabloqueadores (atenolol, bisoprolol, carvedilol, propranolol)</strong> bajan la frecuencia y el gasto cardíacos. Ya no son de primera línea para la HTA sola, porque protegen peor contra el accidente cerebrovascular, empeoran la sensibilidad a la insulina y pueden enmascarar la hipoglicemia; se reservan para las indicaciones propias: cardiopatía coronaria, posinfarto, insuficiencia cardíaca con fracción reducida (bisoprolol, carvedilol, succinato de metoprolol), taquiarritmias y migraña. Están contraindicados o se evitan en asma, bradicardia y bloqueo AV. <strong>Los alfabloqueadores (doxazosina)</strong> dan hipotensión ortostática con la primera dosis, y se usan como fármaco adicional, sobre todo si hay hiperplasia prostática; <strong>hidralazina</strong> y <strong>metildopa</strong> se reservan para el embarazo y la hipertensión refractaria."
        ]
      },
      {
        "subhead": "3. Estrategia escalonada: monoterapia, combinación y triple terapia",
        "paragraphs": [
          "La tendencia actual y las guías ministeriales favorecen <strong>iniciar con dos fármacos de clases complementarias, idealmente en una sola pastilla (dosis fija)</strong> cuando la presión está claramente elevada (≥ 160/100 mmHg o 20/10 mmHg sobre la meta) o el riesgo es alto, porque se alcanza antes la meta y mejora la adherencia. La combinación de primera línea es un <strong>inhibidor del sistema renina-angiotensina (IECA, p. ej. enalapril 10 a 20 mg/día, o ARA II, p. ej. losartán 50 a 100 mg/día)</strong> más un <strong>calcioantagonista dihidropiridínico (amlodipino 5 mg/día) o una tiazida (hidroclorotiazida 12,5 a 25 mg/día; clortalidona 12,5 a 25 mg/día)</strong>.",
          "La <strong>monoterapia</strong> es una opción razonable en el hipertenso grado 1 de riesgo bajo o moderado (por ejemplo, un hombre de 45 años con HTA confirmada por Holter y sin comorbilidad puede partir con un ARA II), en el paciente frágil y en el mayor de 80 años. Se parte con una dosis baja y se sube a la dosis plena antes de cambiar de estrategia. Se reevalúa a las 4 semanas; si la presión no alcanza la meta, antes de escalar se verifica la <strong>adherencia</strong>, la técnica de medición, el consumo de sal y los fármacos que elevan la presión (AINE, corticoides, anticonceptivos, descongestionantes, alcohol).",
          "Si la dupla no alcanza la meta, se pasa a la <strong>terapia triple: IECA o ARA II + calcioantagonista + tiazida</strong> a dosis plenas, que es la combinación con mayor evidencia. La <strong>HTA resistente</strong> es la presión no controlada pese a tres fármacos a dosis plenas, uno de ellos un diurético, con buena adherencia: el cuarto fármaco de elección es la <strong>espironolactona (25 a 50 mg/día)</strong>, y se estudia una causa secundaria (hiperaldosteronismo, estenosis de arteria renal, apnea del sueño; Tema 5.3). Si aun así no se controla, se habla de HTA refractaria y se deriva al especialista, que puede considerar otras opciones (bloqueo del sistema simpático, ajuste de diuréticos de asa en el paciente con enfermedad renal). Antes de rotular una HTA como resistente se descarta la <strong>pseudorresistencia</strong>: mala adherencia, técnica de medición con brazalete chico, efecto de bata blanca (se confirma con MAPA) y fármacos que elevan la presión."
        ]
      },
      {
        "subhead": "4. Primera elección según el paciente: indicaciones obligadas y contraindicaciones",
        "paragraphs": [
          "La clase de fármaco se escoge por las <strong>comorbilidades</strong> (Tabla 5.2.B). En el <strong>diabético</strong> y en el paciente con <strong>proteinuria o enfermedad renal crónica</strong> la primera elección es un <strong>IECA o ARA II</strong>, porque reducen la progresión de la nefropatía; en la insuficiencia cardíaca con fracción reducida, IECA/ARA II, betabloqueador (bisoprolol, carvedilol, metoprolol) y espironolactona son parte del tratamiento (Tema 3.2); en el posinfarto y la cardiopatía coronaria, betabloqueador más IECA; en el <strong>adulto mayor</strong> con HTA sistólica aislada, calcioantagonista o tiazida; en el paciente con <strong>gota</strong> se evitan las tiazidas; con <strong>asma o EPOC</strong>, los betabloqueadores; con <strong>hiperpotasemia o estenosis bilateral de la arteria renal</strong>, los IECA y ARA II; con <strong>hiperplasia prostática</strong>, un alfabloqueador puede ser el fármaco adicional.",
          "En la <strong>mujer embarazada</strong> los IECA y ARA II están prohibidos; los fármacos seguros son la <strong>metildopa, el labetalol y el nifedipino de liberación prolongada</strong>. En la mujer en edad fértil que usa IECA o ARA II se advierte sobre anticoncepción. Con <strong>fibrilación auricular</strong> se prefieren betabloqueadores o no dihidropiridínicos para el control de frecuencia.",
          "<strong>Un diabético hipertenso con proteinuria parte con IECA</strong> (enalapril), sin esperar otros ensayos; una paciente diabética menor de 55 años recién diagnosticada, también. Ante un paciente sin otro motivo y con un ARA II o IECA en tratamiento, el siguiente fármaco que se agrega es un calcioantagonista o una tiazida, no un betabloqueador. Cuando hay síntomas de insuficiencia cardíaca con presión elevada pese a betabloqueador y diurético, la prioridad es optimizar el tratamiento de la insuficiencia con IECA o ARA II, antes de agregar un alfabloqueador."
        ]
      },
      {
        "subhead": "5. Metas terapéuticas de presión arterial",
        "paragraphs": [
          "La meta general en el adulto hipertenso menor de 65 años, incluidos los <strong>diabéticos</strong> y los pacientes con <strong>enfermedad coronaria, accidente cerebrovascular previo o enfermedad renal crónica</strong>, es <strong>&lt; 130/80 mmHg</strong> si el paciente la tolera, sin bajar de 120 mmHg de sistólica ni de 70 mmHg de diastólica. La norma GES vigente mantiene como meta de la población general <strong>&lt; 140/90 mmHg</strong> y <strong>&lt; 130/80</strong> para el paciente de alto riesgo (diabetes, enfermedad renal, enfermedad cardiovascular).",
          "En el <strong>adulto mayor</strong> las metas son menos exigentes, para evitar la hipotensión ortostática, las caídas y la hipoperfusión cerebral: entre 65 y 79 años, <strong>PAS entre 130 y 139 mmHg</strong> y PAD &lt; 80 mmHg si lo tolera; en los mayores de 80 años y en los frágiles, <strong>&lt; 150/90 mmHg</strong>. Por eso un paciente de 85 años con promedio de 145/75 mmHg con losartán y amlodipino <strong>está bien controlado: se mantiene el tratamiento</strong>, sin escalar. Se evita bajar la diastólica de 60 mmHg, que se asocia a más eventos coronarios.",
          "El descenso debe ser <strong>gradual</strong> en los pacientes crónicos: en 4 a 12 semanas, no en horas. En el paciente con hipertensión grado 3 sin daño agudo (urgencia hipertensiva) no se busca normalizar la presión de inmediato (Tema 5.4). Cuando la presión baja de la meta con síntomas de hipotensión ortostática (mareo, caídas), se reduce el tratamiento, en particular en el anciano."
        ]
      },
      {
        "subhead": "6. Seguimiento, efectos adversos y qué hacer con ellos",
        "paragraphs": [
          "Tras iniciar el tratamiento se controla cada 2 a 4 semanas hasta alcanzar la meta, y luego cada 3 a 6 meses según el riesgo. Con IECA o ARA II se mide la <strong>creatinina y el potasio a las 1 a 2 semanas</strong> y tras cada aumento de dosis; una caída de la velocidad de filtración mayor de 30% o un potasio sobre 5,5 mEq/L obliga a revisar el tratamiento. Con tiazidas se controlan sodio y potasio; con espironolactona, potasio.",
          "La <strong>regla del efecto adverso</strong> es que se suspende y se reemplaza el fármaco que lo produce antes de agregar otras medidas: <strong>tos con enalapril → cambiar a un ARA II</strong>; <strong>edema maleolar con amlodipino → suspender el amlodipino</strong> (no aumentar el diurético, no solicitar un ecodoppler si el cuadro es bilateral y simétrico, y no atribuirlo a insuficiencia cardíaca); <strong>hipopotasemia con tiazida</strong> → reponer potasio o cambiar; <strong>hiperpotasemia con IECA</strong> → revisar la dosis, la dieta y los AINE y valorar un diurético tiazídico; <strong>angioedema con IECA</strong> → suspender de forma definitiva y no usar ARA II sin vigilancia estrecha.",
          "Un error frecuente es mantener la dosis y no reevaluar: el paciente que logra la meta de forma sostenida durante un año puede probar una reducción cuidadosa de los fármacos solo si hay hipotensión sintomática, nunca por haberse «normalizado» la presión, porque la presión normal es el efecto del tratamiento y no su cura. Se aconseja <strong>aspirina en dosis bajas solo en la prevención secundaria</strong> (enfermedad cardiovascular establecida), no en la primaria; y <strong>estatina</strong> según el riesgo cardiovascular y el colesterol LDL. El control de la presión se acompaña del tratamiento de los otros factores de riesgo (diabetes, tabaquismo, dislipidemia, obesidad) porque el riesgo global es la suma."
        ]
      },
      {
        "subhead": "7. GES N.º 21: garantías, derivación y metas del programa",
        "paragraphs": [
          "La <strong>HTA primaria en personas de 15 años y más</strong> es el problema de salud <strong>GES N.º 21</strong>: el sistema garantiza la confirmación diagnóstica, el tratamiento farmacológico gratuito en el nivel primario y los controles con médico, enfermera y otros profesionales, además de la <strong>evaluación por especialista</strong> en los casos que la guía define. El indicador de calidad del programa es el porcentaje de hipertensos de 15 a 79 años con presión <strong>&lt; 140/90 mmHg</strong> (compensación).",
          "Se <strong>deriva a cardiología, nefrología o medicina interna</strong> al hipertenso menor de 40 años (sospecha de causa secundaria), con HTA resistente o refractaria, con sospecha de causa secundaria (hipopotasemia espontánea, soplo abdominal, crisis paroxísticas, alza de creatinina con IECA), con daño de órgano blanco grave, con crisis hipertensivas recurrentes, o embarazada hipertensa. El control en el nivel primario sigue vigente mientras el paciente esté estable."
        ]
      }
    ],
    "table": {
      "title": "Clases de Antihipertensivos: Efecto Adverso Característico y Conducta",
      "headers": [
        "Clase (ejemplo)",
        "Efecto adverso característico",
        "Conducta / contraindicación"
      ],
      "rows": [
        [
          "IECA (enalapril)",
          "Tos seca (10-15%), hiperpotasemia, angioedema, alza de creatinina",
          "Tos → cambiar a ARA II; prohibido en embarazo; no combinar con ARA II"
        ],
        [
          "ARA II (losartán)",
          "Hiperpotasemia, alza de creatinina; no da tos",
          "Prohibido en embarazo; cuidado en estenosis renal bilateral"
        ],
        [
          "Calcioantagonista DHP (amlodipino)",
          "Edema maleolar bilateral, cefalea, rubor",
          "Suspender y reemplazar; el diurético no corrige el edema"
        ],
        [
          "Tiazida (hidroclorotiazida)",
          "Hipopotasemia, hiponatremia, hiperuricemia, hiperglicemia",
          "Evitar en gota; ineficaz con VFG < 30 (excepto clortalidona)"
        ],
        [
          "Betabloqueador (atenolol, carvedilol)",
          "Bradicardia, broncoespasmo, fatiga, enmascara hipoglicemia",
          "Solo con indicación propia; contraindicado en asma y bloqueo AV"
        ],
        [
          "Alfabloqueador (doxazosina)",
          "Hipotensión ortostática en la primera dosis",
          "Fármaco adicional; útil si hay hiperplasia prostática"
        ],
        [
          "Espironolactona",
          "Hiperpotasemia, ginecomastia",
          "4.º fármaco de la HTA resistente; controlar potasio y creatinina"
        ]
      ]
    },
    "severityTable": {
      "title": "Primera Elección Según el Paciente (Indicaciones Obligadas) y Metas de Presión",
      "headers": [
        "Paciente",
        "Fármaco de elección",
        "Meta de PA"
      ],
      "rows": [
        [
          "Diabético, proteinuria o ERC",
          "IECA o ARA II",
          "< 130/80 mmHg"
        ],
        [
          "Insuficiencia cardíaca con FEVI reducida",
          "IECA/ARA II + betabloqueador + espironolactona",
          "< 130/80 mmHg"
        ],
        [
          "Cardiopatía coronaria / posinfarto",
          "Betabloqueador + IECA",
          "< 130/80 mmHg"
        ],
        [
          "Adulto joven o de mediana edad sin comorbilidad",
          "IECA o ARA II ± calcioantagonista o tiazida",
          "< 140/90 (o < 130/80)"
        ],
        [
          "Adulto mayor 65-79 años",
          "Calcioantagonista, tiazida o ARA II",
          "PAS 130-139 y PAD < 80"
        ],
        [
          "Mayor de 80 años o frágil",
          "Monoterapia a dosis baja",
          "< 150/90 mmHg"
        ],
        [
          "Embarazada",
          "Metildopa, labetalol, nifedipino retard (nunca IECA/ARA II)",
          "< 140/90 mmHg"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Antihipertensivos: Dosis Habituales del Adulto",
      "headers": [
        "Fármaco",
        "Dosis habitual",
        "Comentario"
      ],
      "rows": [
        [
          "Enalapril",
          "5-40 mg/día (1-2 dosis)",
          "Primera elección en diabetes y proteinuria"
        ],
        [
          "Losartán",
          "50-100 mg/día",
          "Alternativa al IECA si hay tos"
        ],
        [
          "Amlodipino",
          "5-10 mg/día",
          "Edema maleolar dosis-dependiente"
        ],
        [
          "Hidroclorotiazida",
          "12,5-25 mg/día (hasta 50 mg)",
          "Controlar potasio y sodio"
        ],
        [
          "Clortalidona",
          "12,5-25 mg/día",
          "Eficaz aun con VFG reducida"
        ],
        [
          "Atenolol / bisoprolol / carvedilol",
          "50-100 mg / 2,5-10 mg / 6,25-25 mg c/12 h",
          "Solo con indicación propia"
        ],
        [
          "Espironolactona",
          "25-50 mg/día",
          "4.º fármaco; vigilar potasio"
        ],
        [
          "Doxazosina",
          "1-8 mg/día, de noche",
          "Primera dosis puede dar síncope"
        ],
        [
          "Metildopa / labetalol",
          "250-1000 mg c/8-12 h / 100-400 mg c/12 h",
          "HTA del embarazo"
        ]
      ]
    },
    "vignette": "Mujer de 66 años, hipertensa y diabética tipo 2, con proteinuria de 0,4 g/día, en tratamiento con enalapril 20 mg c/12 h, hidroclorotiazida 25 mg y amlodipino 10 mg al día. Consulta por hinchazón progresiva de ambos tobillos, sin disnea ni ortopnea. PA 128/76 mmHg, FC 70 lpm, pulmones limpios, yugulares planas, edema bimaleolar con fóvea simétrico. Creatinina 0,9 mg/dL, potasio 4,3 mEq/L.",
    "explicacion": "El edema maleolar bilateral con presión controlada, yugulares planas y pulmones limpios es un efecto adverso del amlodipino a dosis alta (10 mg), no una insuficiencia cardíaca ni una retención de sal. La conducta es suspender el amlodipino y reemplazarlo por otra clase compatible con su tratamiento (por ejemplo, un ajuste del IECA o ARA II o de la tiazida según la presión) y controlar en 2 a 4 semanas; subir el diurético o pedir exámenes de insuficiencia cardíaca no corrige el problema. El IECA debe mantenerse porque es la clase de elección en la diabética con proteinuria, y la meta es < 130/80 mmHg.",
    "keyPoints": [
      "Todo hipertenso recibe medidas de estilo de vida; el grado 1 de bajo riesgo las prueba 3-6 meses antes de agregar fármacos.",
      "Primera línea: IECA o ARA II + calcioantagonista dihidropiridínico o tiazida (dosis fija si PA ≥ 160/100 o riesgo alto).",
      "Diabético o proteinuria: IECA o ARA II. IECA y ARA II no se combinan y están prohibidos en el embarazo.",
      "Tos con IECA: cambiar a ARA II. Edema maleolar con amlodipino: suspender el amlodipino (no subir el diurético).",
      "Metas: < 130/80 en diabéticos, coronarios, ERC y ACV; 130-139 de PAS a los 65-79 años; < 150/90 si ≥ 80 años o frágil.",
      "HTA resistente (3 fármacos a dosis plenas con un diurético): agregar espironolactona y estudiar causa secundaria.",
      "Los betabloqueadores no son de primera línea: solo con indicación propia (coronaria, IC, taquiarritmia).",
      "GES N.º 21: indicador de compensación PA < 140/90 mmHg; derivar a especialista si < 40 años o HTA resistente."
    ],
    "questions": [
      {
        "stem": "Un paciente de 85 años, hipertenso, está en tratamiento con losartan 50 mg/12 horas y amlodipino 2,5 mg/día. Acude a control y refiere múltiples tomas de presión arterial, las que promedian 145/75 mmHg ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Aumentar la dosis de losartán a 100 mg/12 horas"
          },
          {
            "id": "B",
            "text": "Aumentar el amlodipino a 5 mg/día"
          },
          {
            "id": "C",
            "text": "Agregar atenolol 12,5 mg/día"
          },
          {
            "id": "D",
            "text": "Agregar hidroclorotiazida 25 mg/día"
          },
          {
            "id": "E",
            "text": "Mantener el tratamiento"
          }
        ],
        "correcta": "E",
        "explicacion": "Por su edad (85 años), la meta de presión es menor de 150/90 mmHg y un promedio de 145/75 con losartán y amlodipino ya está en rango. Escalar el tratamiento en un anciano frágil expone a hipotensión ortostática y caídas: se mantiene el tratamiento.",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 65"
      },
      {
        "stem": "Un paciente de 63 años, diabético y dislipidémico, en tratamiento con metformina, atorvastatina y aspirina, se realiza varias tomas de presión arterial, que resultan 170/100 mmHg en promedio. Se realiza exámenes que muestran creatinina: 1,1 mg/dl, proteinuria (+), glucosuria (++), potasemia: 4,0 mEq/L, natremia: 142 mEq/L, glicemia: 115 mg/dl. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Iniciar amlodipino"
          },
          {
            "id": "B",
            "text": "Iniciar hidroclorotiazida"
          },
          {
            "id": "C",
            "text": "Iniciar enalapril"
          },
          {
            "id": "D",
            "text": "Iniciar hidralazina"
          },
          {
            "id": "E",
            "text": "Iniciar atenolol"
          }
        ],
        "correcta": "C",
        "explicacion": "Un diabético hipertenso con proteinuria tiene indicación obligada de IECA (enalapril): reduce la presión y la progresión de la nefropatía. Amlodipino, tiazidas, hidralazina y atenolol no tienen ese efecto renal protector.",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 9"
      },
      {
        "stem": "Hombre de 55 años hipertenso en tratamiento con enalapril, bien controlado. Consulta por tos seca persistente desde que inició el tratamiento hace 3 meses. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Amlodipino (mantener enalapril y agregar calcioantagonista)"
          },
          {
            "id": "B",
            "text": "Hidroclorotiazida (agregar diurético)"
          },
          {
            "id": "C",
            "text": "Losartán (cambiar enalapril por ARA II)"
          },
          {
            "id": "D",
            "text": "Atenolol (agregar betabloqueador)"
          },
          {
            "id": "E",
            "text": "Suspender enalapril sin reemplazar"
          }
        ],
        "correcta": "C",
        "explicacion": "La tos seca persistente es un efecto de clase de los IECA (acumulación de bradicinina). Se cambia el enalapril por un ARA II (losartán), que mantiene el control de la presión sin producir tos. Agregar otro fármaco o suspender sin reemplazo no resuelve el problema.",
        "recTag": "EUNACOM Julio 2025 · Pregunta 32"
      },
      {
        "stem": "Una paciente de 67 años, hipertensa, en tratamiento con losartán 50 mg, hidroclorotiazida 25 mg, amlodipino 5 mg, carvedilol 12,5 mg. Presenta edema de las extremidades inferiores, que ha ido en aumento. En su examen físico tiene FC: 57x’ regular, con PA: 130/90 mmHg, RR2T, examen pulmonar sin alteraciones y examen abdominal con hígado palpable 1 cm bajo el reborde costal y extremidades inferiores con edema bimaleolar con signo de la fóvea. La conducta más adecuada es:",
        "options": [
          {
            "id": "A",
            "text": "Reforzar la dieta hiposódica e indicar reposo con las extremidades en alto"
          },
          {
            "id": "B",
            "text": "Suspender el amlodipino"
          },
          {
            "id": "C",
            "text": "Subir la dosis del diurético"
          },
          {
            "id": "D",
            "text": "Suspender el losartán y agregar doxazosina"
          },
          {
            "id": "E",
            "text": "Solicitar ecodoppler de extremidades inferiores"
          }
        ],
        "correcta": "B",
        "explicacion": "El edema bimaleolar con fóvea en una paciente que toma amlodipino, con yugulares planas y sin otros signos de insuficiencia cardíaca, es un efecto adverso del calcioantagonista. Se suspende el amlodipino (y se reemplaza si hace falta); subir el diurético o hacer reposo no trata la causa.",
        "recTag": "EUNACOM Julio 2019 · Pregunta 51"
      }
    ],
    "_origen": "5.1§1 · 5.1§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-31",
    "classId": "cardio-31",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.3",
    "title": "Hipertensión Arterial Secundaria: Cuándo Sospecharla y Cómo Estudiarla",
    "perfilCode": "1.01.1.016",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES N.º 21): Hipertensión Arterial Primaria o Esencial (la HTA secundaria queda fuera de la garantía hasta descartar la causa)",
    "reconstrucciones": "",
    "frecuencia": "Alta · Cuándo sospechar, hiperaldosteronismo (ARR), estenosis de arteria renal tras IECA, feocromocitoma (metanefrinas), SAHOS y coartación",
    "svg": null,
    "algoTitle": "Sospecha y estudio dirigido de la hipertensión arterial secundaria",
    "diagram": {
      "title": "Cuándo Sospechar y Qué Pedir en la HTA Secundaria",
      "svg": "<svg viewBox=\"0 0 620 246\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar31\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar31)}\n  </style>\n  <path class=\"ln\" d=\"M310,46 V72\"/>\n  <path class=\"ln\" d=\"M310,110 V120 H110 V136\"/>\n  <path class=\"ln\" d=\"M310,110 V120 H310 V136\"/>\n  <path class=\"ln\" d=\"M310,110 V120 H510 V136\"/>\n  <path class=\"ln\" d=\"M110,174 V200\"/>\n  <path class=\"ln\" d=\"M310,174 V200\"/>\n  <path class=\"ln\" d=\"M510,174 V200\"/>\n  <rect class=\"dec\" x=\"60\" y=\"8\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de HTA secundaria</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">&lt; 30 años · HTA grave o resistente · inicio brusco · daño de órgano blanco desproporcionado</text>\n  <rect class=\"b\" x=\"60\" y=\"72\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"87\" text-anchor=\"middle\" font-weight=\"700\">Pistas en la historia y el examen</text>\n  <text class=\"sub\" x=\"310\" y=\"100\" text-anchor=\"middle\">Hipopotasemia espontánea · soplo abdominal · crisis paroxísticas · ronquidos · pulsos femorales débiles</text>\n  <rect class=\"acc\" x=\"12\" y=\"136\" width=\"196\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"110\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Hipopotasemia + alcalosis</text>\n  <text class=\"accS\" x=\"110\" y=\"164\" text-anchor=\"middle\">Aldosterona / renina (ARR &gt; 20-30)</text>\n  <rect class=\"acc\" x=\"212\" y=\"136\" width=\"196\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Soplo abdominal; Cr ↑ con IECA</text>\n  <text class=\"accS\" x=\"310\" y=\"164\" text-anchor=\"middle\">Eco-Doppler renal / angioTAC</text>\n  <rect class=\"acc\" x=\"412\" y=\"136\" width=\"196\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"510\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Cefalea + sudor + palpitaciones</text>\n  <text class=\"accS\" x=\"510\" y=\"164\" text-anchor=\"middle\">Metanefrinas plasmáticas u orina 24 h</text>\n  <rect class=\"b\" x=\"12\" y=\"200\" width=\"196\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"110\" y=\"215\" text-anchor=\"middle\" font-weight=\"700\">Hiperaldosteronismo</text>\n  <text class=\"sub\" x=\"110\" y=\"228\" text-anchor=\"middle\">Espironolactona / adrenalectomía</text>\n  <rect class=\"b\" x=\"212\" y=\"200\" width=\"196\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"215\" text-anchor=\"middle\" font-weight=\"700\">Estenosis de arteria renal</text>\n  <text class=\"sub\" x=\"310\" y=\"228\" text-anchor=\"middle\">Stent (displasia) / médico</text>\n  <rect class=\"warn\" x=\"412\" y=\"200\" width=\"196\" height=\"38\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"510\" y=\"215\" text-anchor=\"middle\" font-weight=\"700\">Feocromocitoma</text>\n  <text class=\"warnT sub\" x=\"510\" y=\"228\" text-anchor=\"middle\">Alfabloqueo primero, luego cirugía</text>\n</svg>"
    },
    "contexto": "Entre el 5 y el 10% de los hipertensos tiene una causa identificable, y en ellos la hipertensión puede curarse o controlarse mucho mejor si se encuentra la causa. El médico general no tiene que estudiar a todos los hipertensos, pero sí reconocer a los que deben estudiarse: el joven, el que no responde a tres fármacos, el que tiene potasio bajo sin diuréticos o el que se descompensa con un IECA. El EUNACOM pregunta qué examen de tamizaje pedir para cada causa y qué hallazgo clínico orienta a cada una, con vignettes clásicas: hipopotasemia con hipertensión, soplo abdominal con creatinina que sube, y la tríada de cefalea, sudor y palpitaciones.",
    "contentSections": [
      {
        "subhead": "1. Cuándo sospechar una HTA secundaria",
        "paragraphs": [
          "La HTA esencial es un diagnóstico de exclusión razonable, pero hay cuadros que la hacen menos probable. Se sospecha una causa secundaria ante: <strong>1) inicio antes de los 30 años</strong> (o después de los 55 con cifras graves) <strong>sin obesidad ni antecedentes familiares</strong>; <strong>2) HTA grado 3 o acelerada</strong>, o un salto brusco de las cifras en un paciente antes controlado; <strong>3) HTA resistente</strong> a tres fármacos a dosis plenas, incluido un diurético, con buena adherencia; <strong>4) daño de órgano blanco desproporcionado</strong> a la duración o gravedad de la HTA (retinopatía grado III-IV, hipertrofia ventricular marcada, albuminuria intensa); 5) hallazgos específicos de la historia o el examen (soplo abdominal, pulsos femorales débiles, hipopotasemia, crisis paroxísticas, ronquidos, rasgos cushingoides); y 6) <strong>deterioro de la función renal al iniciar un IECA o ARA II</strong>.",
          "Antes de buscar una causa, se descartan las <strong>causas iatrogénicas y de pseudorresistencia</strong>, que son mucho más frecuentes que las endocrinas: mala técnica de medición, bata blanca, mala adherencia, exceso de sal y los fármacos y sustancias que elevan la presión (AINE, corticoides, anticonceptivos orales combinados, descongestionantes con pseudoefedrina, eritropoyetina, ciclosporina, antidepresivos que aumentan la noradrenalina, regaliz, alcohol, cocaína y anfetaminas). Retirarlos suele bastar."
        ]
      },
      {
        "subhead": "2. Panorama de las causas y su frecuencia",
        "paragraphs": [
          "Las causas más frecuentes en el adulto son la <strong>enfermedad renal parenquimatosa</strong> (glomerulopatías, nefropatía diabética, riñón poliquístico del adulto) y la <strong>apnea del sueño</strong>; luego el <strong>hiperaldosteronismo primario</strong> (5 a 10% de los hipertensos, y hasta 20% en los resistentes), la <strong>estenosis de la arteria renal</strong> (por aterosclerosis en el mayor de 60 años y por displasia fibromuscular en la mujer joven) y, mucho menos frecuentes, el <strong>feocromocitoma</strong>, el síndrome de Cushing, los trastornos tiroideos y paratiroideos, la <strong>coartación de la aorta</strong> y la acromegalia. En la embarazada se suma la preeclampsia.",
          "La clave para el examen y para la práctica es relacionar cada causa con su <strong>pista clínica</strong> y con su <strong>examen de tamizaje</strong>, porque el médico general rara vez resuelve la causa, pero sí debe saber qué sospechar y qué pedir antes de derivar (Tabla 5.3.A). Una regla útil: el estudio se hace <strong>dirigido por la pista</strong>; no se piden exámenes endocrinos «de rutina» a todo hipertenso."
        ]
      },
      {
        "subhead": "3. Hiperaldosteronismo primario (síndrome de Conn)",
        "paragraphs": [
          "Es la <strong>causa endocrina más frecuente</strong> de HTA secundaria: una producción autónoma de aldosterona por un <em>adenoma suprarrenal</em> (aldosteronoma, síndrome de Conn) o por <em>hiperplasia suprarrenal bilateral</em>. La aldosterona aumenta la reabsorción de sodio y la excreción de potasio e hidrogeniones en el túbulo distal: resultan <strong>hipertensión, hipopotasemia y alcalosis metabólica</strong>, con renina suprimida por la expansión de volumen. Se presenta con HTA moderada a grave, a menudo resistente, con debilidad muscular, calambres, poliuria y cefalea. Un hallazgo que se pregunta: <strong>solo en la mitad de los casos el potasio está bajo</strong>; la mayoría es normopotasémica, más aún si usa IECA o ARA II, que tienden a elevar el potasio. Por eso no se descarta el diagnóstico por un potasio normal.",
          "El <strong>tamizaje</strong> es la <strong>relación aldosterona/actividad de renina plasmática (ARR)</strong>: es sospechoso un valor mayor de 20 a 30 con aldosterona elevada y renina suprimida. Se toma por la mañana, con el paciente de pie o sentado, con potasio normalizado; los antagonistas de la aldosterona, los diuréticos, los IECA y los betabloqueadores pueden alterar la renina, y a veces el estudio se hace modificando el tratamiento con el especialista. La confirmación se hace con una prueba de sobrecarga o supresión de la aldosterona, y luego la <strong>TAC de suprarrenales</strong> muestra el adenoma (habitualmente &lt; 2 cm, homogéneo, de baja densidad) o la hiperplasia; en mayores de 35 años, antes de operar se confirma la lateralidad con cateterismo de venas suprarrenales.",
          "El <strong>tratamiento</strong> es la <strong>adrenalectomía laparoscópica</strong> en el adenoma unilateral (cura o mejora la HTA en la mayoría) y la <strong>espironolactona o eplerenona</strong> en la hiperplasia bilateral o si no se opera. En el paciente con HTA resistente, la espironolactona es el cuarto fármaco aun sin diagnóstico definitivo, y el estudio puede hacerse en paralelo."
        ]
      },
      {
        "subhead": "4. Estenosis de la arteria renal (HTA renovascular) y enfermedad renal parenquimatosa",
        "paragraphs": [
          "La estenosis de la arteria renal reduce la perfusión del riñón, activa el sistema renina-angiotensina-aldosterona y produce una <strong>HTA dependiente de la angiotensina II</strong>. Hay dos causas: la <strong>aterosclerosis</strong> (varón mayor de 60 años con otros territorios vasculares comprometidos, fumador, con insuficiencia renal) y la <strong>displasia fibromuscular</strong> (mujer menor de 35 años, con aspecto de «collar de perlas» en la angiografía). Se sospecha ante HTA grave o resistente de inicio brusco, un <strong>soplo abdominal sistodiastólico en el epigastrio o los flancos</strong>, asimetría del tamaño renal, episodios de <strong>edema pulmonar súbito</strong> con función ventricular conservada («flash») e hipopotasemia por hiperaldosteronismo secundario.",
          "El dato que más se pregunta es el <strong>deterioro de la función renal después de iniciar un IECA o un ARA II</strong>: la angiotensina II mantiene la presión de filtración al contraer la arteriola eferente, y su bloqueo hace caer la filtración en el riñón estenótico (o en ambos si la estenosis es bilateral o en riñón único). Un alza de la creatinina mayor de 30% en las 2 primeras semanas obliga a sospechar estenosis renal y a suspender el fármaco. El <strong>examen de elección</strong> es el <strong>eco-Doppler de las arterias renales</strong> (no invasivo; depende del operador), y se confirma con <strong>angioTAC o angiorresonancia</strong>; la angiografía queda para el momento de la intervención.",
          "El tratamiento de la <strong>displasia fibromuscular</strong> es la angioplastía con balón (con o sin stent), que cura la HTA en la mayoría; en la <strong>estenosis aterosclerótica</strong> se prefiere el tratamiento médico (estatina, antiagregante, antihipertensivos) y se revasculariza solo si hay deterioro progresivo de la función renal, edema pulmonar recurrente o HTA refractaria. En la enfermedad parenquimatosa renal (ecografía con riñones pequeños o poliquísticos, sedimento activo, albuminuria, creatinina elevada) el tratamiento de elección es el IECA o ARA II con control estricto de sal y volumen."
        ]
      },
      {
        "subhead": "5. Feocromocitoma y paraganglioma",
        "paragraphs": [
          "Es un tumor de las células cromafines de la médula suprarrenal (feocromocitoma) o de los ganglios simpáticos (paraganglioma) que produce <strong>catecolaminas</strong>. Es raro (menos de 0,2% de los hipertensos), pero es una de las causas que no se puede perder, porque una crisis es mortal y la cirugía lo cura. La <strong>regla de los 10</strong> (aproximada): 10% bilaterales, 10% extrasuprarrenales, 10% malignos, 10% familiares (en realidad hasta 30%, asociados a MEN 2, von Hippel-Lindau y neurofibromatosis tipo 1).",
          "La clínica es <strong>paroxística</strong>: la <strong>tríada de cefalea pulsátil intensa, sudoración profusa y palpitaciones o taquicardia</strong>, con crisis de HTA lábil, palidez, ansiedad y temblor; entre las crisis la presión puede ser normal o estar elevada de forma sostenida. Las crisis las desencadenan el ejercicio, la anestesia, el estrés, ciertos fármacos (betabloqueadores sin alfabloqueo previo, metoclopramida, glucagón, corticoides) y la palpación del tumor. Una hipotensión ortostática paradójica también orienta.",
          "El <strong>tamizaje</strong> es la medición de <strong>metanefrinas libres en plasma</strong> o de <strong>metanefrinas fraccionadas en orina de 24 horas</strong> (sensibilidad cercana a 97%); las catecolaminas urinarias y el ácido vanilmandélico se usan poco. Si son positivas se localiza el tumor con TAC o resonancia de abdomen y, si hace falta, gammagrafía con MIBG. El <strong>tratamiento</strong> es la resección quirúrgica, precedida de <strong>bloqueo alfa-adrenérgico durante 10 a 14 días</strong> (fenoxibenzamina o doxazosina) y solo después, si hay taquicardia, de un betabloqueador. <strong>Jamás se da un betabloqueador solo</strong>: el bloqueo beta sin bloqueo alfa deja sin oposición la vasoconstricción alfa y precipita una crisis hipertensiva. En una crisis se usan fentolamina o nitroprusiato."
        ]
      },
      {
        "subhead": "6. Otras causas: apnea del sueño, coartación, endocrinopatías y fármacos",
        "paragraphs": [
          "El <strong>síndrome de apnea-hipopnea obstructiva del sueño (SAHOS)</strong> es la <strong>causa no endocrina más frecuente de HTA resistente</strong>. Se sospecha en el paciente obeso, de cuello ancho, con ronquidos fuertes, pausas respiratorias presenciadas por la pareja, somnolencia diurna y cefalea matinal, con pérdida del descenso nocturno de la presión en el MAPA (patrón non-dipper o riser). La apnea cursa con hipoxemia repetida y descargas simpáticas que mantienen la presión elevada. Se confirma con <strong>poligrafía o polisomnografía</strong> y se trata con <strong>CPAP nocturno</strong> y baja de peso.",
          "La <strong>coartación de la aorta</strong> se sospecha en el adulto joven con HTA, <strong>pulsos femorales débiles y retrasados respecto de los radiales</strong>, presión mayor en los brazos que en las piernas (diferencia de más de 20 mmHg), soplo sistólico interescapular y, en la radiografía, <strong>muescas costales</strong> por circulación colateral; el electrocardiograma muestra hipertrofia ventricular izquierda. Se confirma con ecocardiograma y angioTAC o angiorresonancia (Tema 4.6). La HTA puede persistir o reaparecer después de la reparación (recoartación).",
          "Otras causas endocrinas: el <strong>síndrome de Cushing</strong> (obesidad central, estrías violáceas, facies de luna llena, hiperglicemia; se tamiza con cortisol libre urinario, cortisol salival nocturno o supresión con 1 mg de dexametasona), el <strong>hipertiroidismo</strong> (HTA sistólica, taquicardia, TSH suprimida), el <strong>hipotiroidismo</strong> (HTA diastólica; TSH elevada), el <strong>hiperparatiroidismo primario</strong> (hipercalcemia) y la <strong>acromegalia</strong>. Pedir <strong>TSH</strong> es razonable en toda HTA de difícil control."
        ]
      },
      {
        "subhead": "7. Conducta del médico general: sospechar, estudiar dirigido, tratar y derivar",
        "paragraphs": [
          "El rol del médico general es <strong>sospechar y orientar el estudio inicial</strong> (nivel «sospecha» del Perfil), <strong>iniciar el tratamiento</strong> mientras se completa y <strong>derivar al especialista</strong> (nefrología, endocrinología, cardiología). En la práctica: retirar los fármacos que suben la presión, confirmar la presión con MAPA, controlar electrolitos y creatinina, pedir el tamizaje dirigido por la pista y, cuando el paciente ya recibe tres fármacos incluido un diurético y sigue alto, <strong>agregar espironolactona y solicitar el estudio de HTA secundaria</strong> al mismo tiempo.",
          "La orientación es siempre la misma pregunta: ¿qué hallazgo tiene el paciente? <strong>Potasio bajo sin diurético</strong> → aldosterona/renina. <strong>Creatinina que sube con IECA o soplo abdominal</strong> → Doppler de arterias renales. <strong>Cefalea, sudor y palpitaciones</strong> → metanefrinas. <strong>Obeso, ronquidos y somnolencia</strong> → polisomnografía. <strong>Pulsos femorales débiles</strong> → coartación. Cuando el cuadro es de una crisis (Tema 5.4) se estabiliza primero y se estudia después."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial de las Causas Principales de HTA Secundaria",
      "headers": [
        "Causa",
        "Población y cuadro clínico clave",
        "Tamizaje inicial",
        "Conducta"
      ],
      "rows": [
        [
          "Hiperaldosteronismo primario",
          "HTA resistente, hipopotasemia (en 50%), alcalosis",
          "Relación aldosterona/renina (> 20-30)",
          "Adrenalectomía si adenoma; espironolactona"
        ],
        [
          "Estenosis de arteria renal",
          "Soplo abdominal; creatinina sube con IECA/ARA II",
          "Eco-Doppler renal; angioTAC",
          "Angioplastía en displasia; médico en ateroesclerosis"
        ],
        [
          "Feocromocitoma",
          "Crisis: cefalea + sudor + palpitaciones",
          "Metanefrinas plasmáticas u orina 24 h",
          "Alfabloqueo previo, luego resección"
        ],
        [
          "SAHOS",
          "Obeso, ronquidos, somnolencia, non-dipper",
          "Poligrafía / polisomnografía",
          "CPAP y baja de peso"
        ],
        [
          "Coartación de la aorta",
          "Joven; pulsos femorales débiles; PA brazos > piernas",
          "Ecocardiograma; angioTAC",
          "Reparación (cirugía o stent)"
        ],
        [
          "Enfermedad renal parenquimatosa",
          "Creatinina alta, albuminuria, sedimento activo",
          "Creatinina, RAC, ecografía renal",
          "IECA/ARA II; nefrología"
        ],
        [
          "Cushing",
          "Obesidad central, estrías violáceas, glicemia alta",
          "Cortisol libre urinario o supresión con dexametasona",
          "Derivar a endocrinología"
        ]
      ]
    },
    "vignette": "Hombre de 44 años con diagnóstico de HTA hace un año, resistente a enalapril 20 mg c/12 h y amlodipino 10 mg al día, con presión de 165/102 mmHg en el control. Refiere calambres y debilidad de las piernas. Sus exámenes muestran creatinina 0,9 mg/dL, sodio 142 mEq/L, potasio 2,8 mEq/L (sin usar diuréticos) y bicarbonato 30 mEq/L. No tiene edemas. No ronca, y los pulsos femorales son normales.",
    "explicacion": "La HTA resistente con hipopotasemia espontánea y alcalosis metabólica en un paciente de mediana edad es la presentación clásica del hiperaldosteronismo primario (síndrome de Conn). La conducta en la atención primaria es solicitar la relación aldosterona / actividad de renina plasmática; si es mayor de 20 a 30, se deriva a endocrinología para confirmar y hacer una TAC de suprarrenales, con adrenalectomía si es un adenoma unilateral o espironolactona si la hiperplasia es bilateral. Mientras tanto se corrige el potasio y, dado que ya usa dos fármacos a dosis altas, se puede agregar espironolactona.",
    "keyPoints": [
      "Se sospecha HTA secundaria si hay inicio < 30 años, HTA grave o resistente a 3 fármacos, daño de órgano blanco desproporcionado o alza de creatinina con IECA.",
      "Antes de estudiar: descartar mala técnica, bata blanca, mala adherencia, exceso de sal y fármacos que suben la PA (AINE, corticoides, ACO).",
      "Hipopotasemia espontánea + alcalosis + HTA resistente → hiperaldosteronismo: tamizaje con ARR > 20-30; solo la mitad tiene potasio bajo.",
      "Soplo abdominal o creatinina que sube > 30% tras IECA/ARA II → estenosis de arteria renal: eco-Doppler renal y angioTAC.",
      "Cefalea + sudor + palpitaciones paroxísticas → feocromocitoma: metanefrinas; alfabloqueo antes que betabloqueo, nunca betabloqueador solo.",
      "SAHOS: causa no endocrina más común de HTA resistente (non-dipper): polisomnografía y CPAP.",
      "Coartación: pulsos femorales débiles, PA brazos > piernas, muescas costales: ecocardiograma y angioTAC.",
      "HTA resistente: agregar espironolactona y estudiar causa secundaria en paralelo; derivar."
    ],
    "questions": [
      {
        "stem": "Un paciente de 37 años acude a chequeo médico en el que destaca presión arterial de 170/110 mmHg. No tiene obesidad ni antecedentes familiares de hipertensión. Se solicita un monitoreo ambulatorio de presión arterial de 24 horas, confirmándose el diagnóstico de hipertensión arterial, por lo que se inicia losartán 50 mg al día y amlodipino 5 mg al día. Se controla un mes después y el paciente refiere que ha mantenido presiones arteriales cercanas a 160/100 mmHg. Los exámenes de laboratorio muestran creatininemia: 0,9 mg/dL, BUN: 12 mg/dL, sodio plasmático: 140 mEq/L y potasio plasmático: 4,4 mEq/L. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Aumentar la dosis de los fármacos"
          },
          {
            "id": "B",
            "text": "Agregar un diurético al tratamiento"
          },
          {
            "id": "C",
            "text": "Solicitar ecografía Doppler renal"
          },
          {
            "id": "D",
            "text": "Solicitar niveles plasmáticos de aldosterona"
          },
          {
            "id": "E",
            "text": "Solicitar metanefrinas y catecolaminas en orina"
          }
        ],
        "correcta": "D",
        "explicacion": "Es una HTA grave y refractaria en un joven sin obesidad ni antecedentes familiares: debe estudiarse una causa secundaria. Dada la edad, el hiperaldosteronismo primario es más probable que la HTA renovascular, y la mayoría de los pacientes es normopotasémica (más aún con IECA o ARA II), por lo que se solicita la aldosterona (idealmente como relación con la actividad de renina). No hay clínica paroxística que sugiera feocromocitoma, y subir los fármacos no es la conducta.",
        "recTag": "EUNACOM Diciembre 2025 · Pregunta 171"
      },
      {
        "stem": "Un paciente de 35 años consulta por cefalea y debilidad muscular de algunos meses de evolución. Al examen físico presenta FC: 70x’, PA: 160/110 mmHg, sin otros hallazgos. Se solicitan exámenes que muestran creatininemia de 0,9 mg/dl, sodio: 138 mEq/l, potasio: 3,0 mEq/l y cloro: 98 mEq/l. ¿Cuál es el examen más adecuado para proseguir el estudio en este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Doppler de arterias renales"
          },
          {
            "id": "B",
            "text": "Holter de presión arterial"
          },
          {
            "id": "C",
            "text": "Determinación de metanefrinas urinarias"
          },
          {
            "id": "D",
            "text": "Relación aldosterona / actividad de renina plasmática"
          },
          {
            "id": "E",
            "text": "Cortisol libre urinario de 24 horas"
          }
        ],
        "correcta": "D",
        "explicacion": "Un joven hipertenso con cefalea, debilidad muscular e hipopotasemia con sodio normal-alto tiene un hiperaldosteronismo primario hasta que se demuestre lo contrario. El examen de tamizaje es la relación aldosterona / actividad de renina plasmática. Las metanefrinas se piden ante crisis adrenérgicas, el cortisol libre ante rasgos cushingoides y el Doppler renal ante soplo abdominal o alza de creatinina.",
        "recTag": "EUNACOM Julio 2019 · Pregunta 32"
      },
      {
        "stem": "Un paciente de 18 años consulta por cefalea de algunas semanas de evolución, que ha ido en aumento, hasta alcanzar gran intensidad. En su examen físico destaca presión arterial 170/100 mmHg, FC: 72x’ y presencia de un soplo abdominal, en el flanco derecho. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Disección aórtica"
          },
          {
            "id": "B",
            "text": "Aneurisma aórtico abdominal"
          },
          {
            "id": "C",
            "text": "Hipertensión esencial"
          },
          {
            "id": "D",
            "text": "Hipertensión renovascular"
          },
          {
            "id": "E",
            "text": "Accidente vascular encefálico"
          }
        ],
        "correcta": "D",
        "explicacion": "Un joven con cefalea, presión de 170/100 mmHg y un soplo abdominal en el flanco derecho tiene una HTA renovascular clásica (displasia fibromuscular a esa edad). El soplo abdominal y la edad de presentación orientan a causa secundaria; se confirma con eco-Doppler de arterias renales o angioTAC.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 1"
      },
      {
        "stem": "Un paciente de 40 años, con antecedente de hipertensión arterial diagnosticada hace 6 meses, de difícil manejo, acude a control. Toma hidroclorotiazida 50 mg/día, losartán 100 mg/día y amlodipino 10 mg/día. Refiere varias crisis hipertensivas, a pesar de una buena adherencia a su tratamiento farmacológico. En el examen físico, su presión arterial actual es 158/97, que es similar a los valores que habitualmente presenta en su casa; su frecuencia cardíaca es 65x’ y su examen cardiopulmonar muestra ritmo regular en dos tiempos, sin soplos y murmullo pulmonar presente, sin ruidos agregados. Trae un monitoreo de presión arterial con presión arterial promedio de 160/101 mmHg, con que muestra cargas tensionales diurnas de 77% sistólica y 63% diastólica y cargas tensionales nocturnas de 67% sistólica y 56% diastólica. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Reemplazar el losartán por un IECA"
          },
          {
            "id": "B",
            "text": "Reemplazar la hidroclorotiazida por un diurético antialdosterónico"
          },
          {
            "id": "C",
            "text": "Agregar doxazosina al tratamiento"
          },
          {
            "id": "D",
            "text": "Agregar espironolactona y solicitar exámenes para descartar una hipertensión secundaria"
          },
          {
            "id": "E",
            "text": "Reemplazar el amlodipino por diltiazem"
          }
        ],
        "correcta": "D",
        "explicacion": "Un hipertenso de 40 años que recibe tres fármacos a dosis plenas, incluido un diurético, y cuyo MAPA confirma una presión promedio de 160/101 con cargas tensionales elevadas, tiene una HTA resistente verdadera (no bata blanca ni mala adherencia). Se agrega espironolactona como cuarto fármaco y se estudia en paralelo una HTA secundaria.",
        "recTag": "EUNACOM Diciembre 2022 · Pregunta 51"
      },
      {
        "stem": "Hombre de 52 años, hipertenso, inicia tratamiento con enalapril 20 mg al día. En el control a las 2 semanas la creatinina plasmática subió de 1,0 a 2,4 mg/dL. A la auscultación abdominal se pesquisa un soplo sistólico en el flanco izquierdo. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Estenosis de la arteria renal aterosclerótica"
          },
          {
            "id": "B",
            "text": "Hiperaldosteronismo primario"
          },
          {
            "id": "C",
            "text": "Nefropatía diabética incipiente"
          },
          {
            "id": "D",
            "text": "Glomerulonefritis membranosa"
          },
          {
            "id": "E",
            "text": "Necrosis tubular aguda tóxica"
          }
        ],
        "correcta": "A",
        "explicacion": "El deterioro brusco de la función renal (alza de la creatinina mayor de 30%) tras iniciar un IECA, junto con un soplo abdominal, es la presentación de la estenosis de la arteria renal: al bloquear la angiotensina II se pierde la vasoconstricción de la arteriola eferente que mantenía la filtración del riñón isquémico. El estudio es un eco-Doppler de arterias renales y se suspende el IECA.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Mujer de 38 años consulta por crisis de cefalea pulsátil intensa, palpitaciones y sudoración profusa. Durante la consulta se registra PA de 210/120 mmHg y FC de 115 lpm. ¿Cuál es el examen de primera elección para el diagnóstico de esta condición?",
        "options": [
          {
            "id": "A",
            "text": "Metanefrinas libres en plasma o fraccionadas en orina de 24 horas"
          },
          {
            "id": "B",
            "text": "Cortisol libre urinario en 24 horas"
          },
          {
            "id": "C",
            "text": "Relación aldosterona / renina plasmática"
          },
          {
            "id": "D",
            "text": "Ecocardiograma transesofágico"
          },
          {
            "id": "E",
            "text": "Resonancia magnética de cerebro y fosa posterior"
          }
        ],
        "correcta": "A",
        "explicacion": "La tríada de cefalea, sudoración y palpitaciones con crisis hipertensivas paroxísticas orienta a feocromocitoma. El examen de tamizaje de primera elección, de mayor sensibilidad, es la medición de metanefrinas libres en plasma o fraccionadas en orina de 24 horas; el tratamiento es el bloqueo alfa antes de la resección.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "5.1§3 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-32",
    "classId": "cardio-32",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.4",
    "title": "Crisis Hipertensivas: Urgencia versus Emergencia Hipertensiva",
    "perfilCode": "1.09.2.002",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Completo",
    "ges": "La crisis hipertensiva no es un problema GES en sí; la HTA de base sí lo es (GES N.º 21)",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Urgencia versus emergencia por daño de órgano blanco, fármaco de elección según el órgano, meta de descenso y nifedipino sublingual contraindicado",
    "svg": null,
    "algoTitle": "Algoritmo de manejo de las crisis hipertensivas",
    "diagram": {
      "title": "Crisis Hipertensiva: Urgencia o Emergencia",
      "svg": "<svg viewBox=\"0 0 620 270\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar32\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar32)}\n  </style>\n  <path class=\"ln\" d=\"M310,46 V72\"/>\n  <path class=\"ln\" d=\"M310,110 V120 H162 V136\"/>\n  <text class=\"lbl\" x=\"166\" y=\"132\">Sí</text>\n  <path class=\"ln\" d=\"M310,110 V120 H458 V136\"/>\n  <text class=\"lbl\" x=\"462\" y=\"132\">No</text>\n  <path class=\"ln\" d=\"M162,186 V200 H310 V212\"/>\n  <path class=\"ln\" d=\"M458,186 V200 H310 V212\"/>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">PA ≥ 180 y/o ≥ 120 mmHg (medida 2 veces, reposo, brazalete adecuado)</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">Buscar síntomas y signos de daño agudo de órgano blanco</text>\n  <rect class=\"dec\" x=\"60\" y=\"72\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"87\" text-anchor=\"middle\" font-weight=\"700\">¿Daño AGUDO de órgano blanco?</text>\n  <text class=\"sub\" x=\"310\" y=\"100\" text-anchor=\"middle\">Encefalopatía · ACV · EAP · SCA · disección · IRA · eclampsia · papiledema</text>\n  <rect class=\"warn\" x=\"12\" y=\"136\" width=\"300\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"162\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">EMERGENCIA HIPERTENSIVA</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"164\" text-anchor=\"middle\">UCI/UTI · fármaco EV titulable</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"176\" text-anchor=\"middle\">PAM ↓ 20-25% en la 1.ª hora; luego 160/100 en 2-6 h</text>\n  <rect class=\"acc\" x=\"308\" y=\"136\" width=\"300\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"458\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">URGENCIA HIPERTENSIVA</text>\n  <text class=\"accS\" x=\"458\" y=\"164\" text-anchor=\"middle\">Reposo 30-60 min + fármaco ORAL (captopril, labetalol, amlodipino)</text>\n  <text class=\"accS\" x=\"458\" y=\"176\" text-anchor=\"middle\">Control en 24-48 h en APS</text>\n  <rect class=\"b\" x=\"60\" y=\"212\" width=\"500\" height=\"50\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"227\" text-anchor=\"middle\" font-weight=\"700\">Excepciones: descenso rápido o fármaco propio</text>\n  <text class=\"sub\" x=\"310\" y=\"240\" text-anchor=\"middle\">Disección: PAS &lt; 120 y FC &lt; 60 en 20 min · EAP: nitroglicerina + furosemida</text>\n  <text class=\"sub\" x=\"310\" y=\"252\" text-anchor=\"middle\">SCA: nitroglicerina · Eclampsia: Mg + labetalol · NUNCA nifedipino sublingual</text>\n</svg>"
    },
    "contexto": "Un paciente con la presión en 200/120 mmHg asusta a cualquier médico, y la reacción instintiva, bajarla rápido, es justo lo que puede hacerle daño. Lo que define la gravedad no es la cifra sino si hay un órgano sufriendo en este momento: cuando lo hay, es una emergencia y requiere cuidados intensivos y fármacos endovenosos; cuando no, es una urgencia y se maneja con calma, por vía oral y con control a las 24 a 48 horas. El EUNACOM repite esta distinción en cada examen, junto con la regla del descenso gradual, el fármaco de cada emergencia (nitroglicerina en el infarto, labetalol en la disección) y el error que no se perdona: el nifedipino sublingual.",
    "contentSections": [
      {
        "subhead": "1. Definiciones: lo que define la gravedad es el daño de órgano blanco",
        "paragraphs": [
          "Una <strong>crisis hipertensiva</strong> es la elevación aguda y severa de la presión arterial, habitualmente con <strong>PAS ≥ 180 mmHg y/o PAD ≥ 120 mmHg</strong> (algunas guías usan 180/110). Se subdivide según haya o no lesión aguda de un órgano diana:",
          "1) <strong>Emergencia hipertensiva (riesgo vital inminente):</strong> la presión severa se acompaña de <strong>daño agudo, progresivo y en evolución de órganos blanco</strong>: cerebro (encefalopatía hipertensiva, accidente cerebrovascular isquémico o hemorrágico), corazón (edema agudo de pulmón, síndrome coronario agudo, disección aórtica aguda), riñón (injuria renal aguda rápidamente progresiva), ojo (retinopatía hipertensiva grado IV con edema de papila y hemorragias), y en la embarazada, <strong>preeclampsia grave o eclampsia</strong>. Requiere <strong>hospitalización inmediata en UCI/UTI y fármacos endovenosos titulables</strong>.",
          "2) <strong>Urgencia hipertensiva:</strong> la presión es igual de alta (≥ 180/120 mmHg) <strong>pero sin daño agudo de órgano blanco</strong>; el paciente está asintomático o con síntomas inespecíficos (cefalea occipital leve, mareo, epistaxis, ansiedad). <strong>No requiere UCI ni fármacos endovenosos</strong>: se maneja en el servicio de urgencia o en la atención primaria con <strong>fármacos por vía oral</strong> y control ambulatorio en 24 a 48 horas.",
          "La frase que se pregunta: <strong>«la cifra tensional no define la urgencia vital, sino el daño de órgano blanco»</strong>. Un paciente con 230/130 mmHg asintomático es una urgencia; uno con 170/100 y un edema agudo de pulmón es una emergencia. Existe además la <strong>pseudocrisis</strong>: la presión alta de un paciente con dolor, ansiedad, retención urinaria o abstinencia, que mejora al tratar la causa. Por eso, antes de decidir el tratamiento, se repite la medición en reposo y con brazalete adecuado."
        ]
      },
      {
        "subhead": "2. Fisiopatología: la autorregulación y por qué no se baja la presión de golpe",
        "paragraphs": [
          "En un individuo normotenso, el <strong>flujo cerebral se mantiene constante</strong> mientras la presión arterial media (PAM) está entre aproximadamente 60 y 150 mmHg: las arteriolas se contraen si la presión sube y se dilatan si baja. En el hipertenso crónico la curva de autorregulación está <strong>desplazada hacia la derecha</strong> (el límite inferior sube a cerca de 100-110 mmHg de PAM), de modo que una presión que sería normal en otra persona le produce hipoperfusión. Lo mismo ocurre en el miocardio y el riñón.",
          "En la emergencia, la presión supera el límite superior de la autorregulación: las arteriolas se dilatan a la fuerza (encefalopatía, edema cerebral), la pared sufre necrosis fibrinoide y el daño se perpetúa por la liberación de vasoconstrictores (angiotensina II, catecolaminas). Por eso se baja la presión, pero <strong>no más del 20 a 25% de la PAM en la primera hora</strong>: un descenso mayor o más rápido deja a los órganos bajo el límite de su autorregulación y causa <strong>infartos cerebrales, infarto de miocardio e injuria renal iatrogénicos</strong>. Un paciente con 220/130 (PAM 160) que llega a 150/90 (PAM 110) en una hora ha bajado cerca de 30%: ya es demasiado.",
          "La urgencia, en cambio, no tiene lesión en curso y la autorregulación está preservada: no hay que bajar la presión en minutos. Normalizar la presión de un paciente asintomático con cifras severas en horas, con cápsulas sublinguales o fármacos endovenosos, es peligroso y no tiene beneficio demostrado."
        ]
      },
      {
        "subhead": "3. Evaluación en el servicio de urgencia",
        "paragraphs": [
          "La evaluación busca daño de órgano blanco y causas desencadenantes. En la anamnesis se pregunta por cefalea, alteraciones visuales, confusión, convulsiones, déficit focal, dolor torácico, disnea, dolor de espalda, oliguria y embarazo; por la adherencia al tratamiento (la <strong>suspensión brusca de clonidina o de betabloqueadores</strong> produce hipertensión de rebote), por AINE, descongestionantes, anticonceptivos y por <strong>cocaína o anfetaminas</strong>. El examen incluye presión en ambos brazos (diferencia sugiere disección), pulsos, auscultación de soplos (insuficiencia aórtica nueva), campos pulmonares, examen neurológico y, de ser posible, el <strong>fondo de ojo</strong>: hemorragias en llama y exudados algodonosos (grado III) o edema de papila (grado IV) definen una emergencia.",
          "Los exámenes mínimos son: <strong>electrocardiograma y troponina</strong> (isquemia, hipertrofia), <strong>creatinina, electrolitos y orina completa</strong> (hematuria, proteinuria y cilindros orientan a nefropatía aguda), hemograma, lactato deshidrogenasa y frotis si se sospecha microangiopatía, y según clínica: <strong>radiografía de tórax</strong> (edema pulmonar, mediastino ensanchado), <strong>TAC de cerebro</strong> (si hay síntomas neurológicos), <strong>angioTAC de aorta</strong> (si hay dolor torácico o dorsal desgarrante o asimetría de pulsos) y test de embarazo. En la mujer embarazada o puérpera con cefalea y presión alta, la urgencia es la eclampsia.",
          "Un paciente <strong>asintomático con presión severa y sin daño</strong> (urgencia) no necesita más estudio de urgencia que el ECG y la creatinina; muchos son pacientes sin tratamiento o con mala adherencia. Lo importante es dejarlo con tratamiento de mantención y control a las 24 a 48 horas."
        ]
      },
      {
        "subhead": "4. Emergencia hipertensiva: meta de descenso y fármacos endovenosos",
        "paragraphs": [
          "<strong>Regla general:</strong> reducir la <strong>presión arterial media en un máximo de 20 a 25% durante la primera hora</strong>, luego descender gradualmente hacia <strong>160/100 mmHg en las siguientes 2 a 6 horas</strong> y normalizar en las 24 a 48 horas siguientes, siempre con monitorización continua y, de preferencia, vía arterial. Se usan <strong>fármacos endovenosos de vida media corta y fácilmente titulables</strong>: <strong>labetalol</strong> (bolo de 20 mg y luego infusión, o bolos repetidos; bloqueo alfa y beta; contraindicado en bradicardia, bloqueo AV e insuficiencia cardíaca aguda), <strong>nitroprusiato de sodio</strong> (0,25 a 10 µg/kg/min; el más potente, con riesgo de toxicidad por tiocianato y cianuro si se usa más de 24 a 48 horas o hay insuficiencia renal; se asocia a un betabloqueador para evitar la taquicardia refleja), <strong>nitroglicerina</strong> (venodilatador, de elección en el síndrome coronario y el edema pulmonar), <strong>nicardipino o clevidipino</strong> (calcioantagonistas EV), <strong>esmolol</strong> (betabloqueador ultracorto, de elección junto con un vasodilatador en la disección) e <strong>hidralazina</strong> (en la embarazada).",
          "La elección depende del órgano en riesgo (Tabla 5.4.A): en la <strong>encefalopatía hipertensiva</strong> (cefalea, vómitos, confusión, convulsiones, ceguera cortical, papiledema, con edema occipital reversible en la resonancia) se usa labetalol, nicardipino o nitroprusiato, evitando fármacos que aumenten la presión intracraneal; en el <strong>edema agudo de pulmón hipertensivo</strong>, <strong>nitroglicerina EV más furosemida EV</strong>; en el <strong>síndrome coronario agudo</strong> con crisis hipertensiva (por ejemplo, un diabético hipertenso de 68 años con presión 220/120 y supradesnivel del ST), la <strong>nitroglicerina endovenosa en infusión continua</strong> es el fármaco de elección, junto con betabloqueador si no hay contraindicación; en la <strong>disección aórtica</strong>, descenso ultrarrápido (Tema 5.7); en la <strong>eclampsia o preeclampsia grave</strong>, <strong>sulfato de magnesio</strong> (previene las convulsiones) más labetalol o hidralazina, con resolución obstétrica; en el <strong>feocromocitoma</strong>, fentolamina o nitroprusiato; en la <strong>crisis renal esclerodérmica</strong>, IECA.",
          "El <strong>accidente cerebrovascular</strong> requiere un manejo distinto: en el ACV isquémico agudo no se baja la presión de rutina (la penumbra depende de la perfusión), salvo que supere 220/120 mmHg o que el paciente vaya a recibir trombólisis (se baja a menos de 185/110 antes y a menos de 180/105 durante 24 horas después); en el hemorrágico se busca una PAS cercana a 140 a 160 mmHg. La <strong>cocaína</strong> da una crisis simpaticomimética que se trata con benzodiacepinas y nitratos; los betabloqueadores puros están contraindicados (Tema 2.5)."
        ]
      },
      {
        "subhead": "5. Excepciones a la regla general: descensos rápidos",
        "paragraphs": [
          "La regla del 20 a 25% tiene excepciones donde el riesgo de no bajar rápido supera al de bajar demasiado: <strong>1) disección aórtica aguda:</strong> reducción ultrarrápida en <strong>menos de 20 minutos</strong> hasta <strong>PAS &lt; 120 mmHg y frecuencia cardíaca &lt; 60 lpm</strong>, con <strong>labetalol EV o esmolol</strong> y nitroprusiato si hace falta (el betabloqueo siempre primero, para evitar la taquicardia refleja que aumenta el dP/dt). <strong>2) Edema agudo de pulmón hipertensivo:</strong> nitroglicerina más furosemida, que bajan la precarga y la poscarga con rapidez. <strong>3) Eclampsia y preeclampsia grave:</strong> labetalol EV o hidralazina, con sulfato de magnesio.",
          "Una pregunta típica: un paciente con disección aórtica tipo A y presión de 220/120 con FC de 110. El objetivo es <strong>PAS &lt; 120 y FC &lt; 60 en menos de 20 minutos con labetalol endovenoso antes de pasar a pabellón</strong>; el nitroprusiato solo después del betabloqueo, la hidralazina (que aumenta la taquicardia) y los diuréticos están excluidos. Como regla mnemotécnica: <em>cuando el problema es el estrés de cizallamiento sobre la aorta, se baja la presión y la frecuencia; cuando es la sobrecarga de volumen, nitroglicerina y furosemida; cuando es la eclampsia, magnesio</em>."
        ]
      },
      {
        "subhead": "6. Urgencia hipertensiva: manejo ambulatorio y errores a evitar",
        "paragraphs": [
          "En la urgencia hipertensiva se indica <strong>reposo en un ambiente tranquilo durante 30 a 60 minutos</strong> (muchas elevaciones ceden con reposo, analgesia o ansiolisis) y se reinicia o ajusta la medicación de mantención. Si persiste la presión, se administra un <strong>antihipertensivo por vía oral</strong>: <strong>captopril 25 mg</strong> (inicio a los 15-30 minutos), <strong>labetalol oral</strong> o <strong>amlodipino 5 a 10 mg</strong>; se confirma un descenso moderado, se da el alta con indicación de tratamiento de mantención y <strong>control en la atención primaria en 24 a 48 horas</strong>. El descenso total puede tomar de 24 a 48 horas, hasta días.",
          "Errores que el examen castiga: <strong>1) hospitalizar en UCI y usar nitroprusiato</strong> en una urgencia asintomática; <strong>2) administrar nifedipino sublingual</strong> (cápsula perforada o masticada): produce un descenso brusco, impredecible y no controlable, con taquicardia refleja, y se han descrito infartos cerebrales y de miocardio y muerte; <strong>está contraindicado en todas las crisis hipertensivas</strong>; 3) bajar la presión a cifras normales en pocas horas; 4) usar diuréticos de asa en bolo repetido en un paciente sin sobrecarga de volumen, lo que activa más el sistema renina-angiotensina y produce hipovolemia; 5) dar un betabloqueador a un paciente con cocaína o con feocromocitoma sin alfabloqueo.",
          "Conviene recordar que el <strong>paciente que consulta por cefalea y presión de 210/115</strong> sin déficit, con fondo de ojo normal y creatinina y ECG normales, es una urgencia: se trata con reposo y antihipertensivo oral y se controla a las 24 a 48 horas, y no hay que hacer una punción lumbar ni dar furosemida endovenosa. Se educa sobre la adherencia y se revisan fármacos desencadenantes."
        ]
      }
    ],
    "table": {
      "title": "Urgencia versus Emergencia Hipertensiva y Fármaco de Elección según el Órgano en Riesgo",
      "headers": [
        "Característica / situación",
        "Urgencia hipertensiva",
        "Emergencia hipertensiva"
      ],
      "rows": [
        [
          "Daño agudo de órgano blanco",
          "Ausente (asintomático o cefalea leve)",
          "Presente y en evolución"
        ],
        [
          "Lugar de atención",
          "Box de urgencia / APS",
          "UCI / UTI con monitorización"
        ],
        [
          "Vía y fármaco",
          "Oral: captopril 25 mg, labetalol, amlodipino",
          "EV titulable: labetalol, nitroprusiato, nitroglicerina, nicardipino"
        ],
        [
          "Meta de descenso",
          "Gradual en 24-48 h; control en APS",
          "PAM ↓ 20-25% en 1 h; 160/100 en 2-6 h"
        ],
        [
          "Síndrome coronario agudo",
          "—",
          "Nitroglicerina EV (± betabloqueador)"
        ],
        [
          "Edema agudo de pulmón",
          "—",
          "Nitroglicerina EV + furosemida EV"
        ],
        [
          "Disección aórtica",
          "—",
          "Labetalol/esmolol EV; PAS < 120 y FC < 60 en < 20 min"
        ],
        [
          "Eclampsia / preeclampsia grave",
          "—",
          "Sulfato de magnesio + labetalol o hidralazina"
        ],
        [
          "Nifedipino sublingual",
          "Contraindicado",
          "Contraindicado"
        ]
      ]
    },
    "vignette": "Hombre de 58 años, sin antecedentes conocidos, consulta en urgencias por cefalea global de 6 horas de evolución. Vigil, orientado, sin déficit focal. Fondo de ojo sin edema de papila ni hemorragias, examen cardíaco y pulmonar normales. PA 205/115 mmHg en ambos brazos, FC 78 lpm. Creatinina, orina y ECG normales.",
    "explicacion": "La presión es severa (≥ 180/120 mmHg) pero no hay ningún signo de daño agudo de órgano blanco: es una urgencia hipertensiva. La conducta es mantener al paciente en reposo en un ambiente tranquilo durante 30 a 60 minutos, administrar un antihipertensivo oral (captopril 25 mg o amlodipino 5 a 10 mg), comprobar un descenso moderado y darlo de alta con tratamiento de mantención y control en la atención primaria en 24 a 48 horas. No se hospitaliza en UCI, no se usan fármacos endovenosos y está prohibido el nifedipino sublingual.",
    "keyPoints": [
      "Crisis hipertensiva: PAS ≥ 180 y/o PAD ≥ 120 mmHg; la gravedad la define el daño agudo de órgano blanco, no la cifra.",
      "Urgencia = sin daño de órgano: reposo, fármaco oral (captopril 25 mg), descenso gradual y control en APS en 24-48 h.",
      "Emergencia = con daño agudo: UCI, fármaco EV titulable, PAM ↓ máximo 20-25% en la 1.ª hora y luego 160/100 en 2-6 h.",
      "Un descenso excesivo sobrepasa la autorregulación y causa infarto cerebral o miocárdico iatrogénico.",
      "Disección: PAS < 120 y FC < 60 en < 20 min con labetalol/esmolol; EAP: nitroglicerina + furosemida; eclampsia: sulfato de magnesio + labetalol.",
      "SCA con crisis hipertensiva: nitroglicerina EV en infusión continua; ACV isquémico: no bajar salvo > 220/120 o trombólisis.",
      "Nifedipino sublingual está contraindicado en toda crisis hipertensiva (hipotensión brusca, ACV, infarto).",
      "Cocaína: benzodiacepinas y nitratos; el betabloqueador y la suspensión brusca de clonidina empeoran la crisis."
    ],
    "questions": [
      {
        "stem": "Una paciente de 75 años, con antecedente de hipertensión arterial y diabetes, en tratamiento con metforminal, glibenclamida, hidroclorotiazida y enalapril consulta por un cuadro de cefalea y malestar general. Refiere que sus presiones arteriales habituales son cercanas a 150/90 mmHg. Al examen físico presenta PA: 200/105 mmHg, FC: 73 x’, con examen pulmonar normal. ¿Cuál es el tratamiento del cuadro actual?",
        "options": [
          {
            "id": "A",
            "text": "Nifedipino sublingual"
          },
          {
            "id": "B",
            "text": "Nitroglicerina sublingual"
          },
          {
            "id": "C",
            "text": "Nitroprusiato endovenoso"
          },
          {
            "id": "D",
            "text": "Captopril oral"
          },
          {
            "id": "E",
            "text": "Labetalol endovenoso"
          }
        ],
        "correcta": "D",
        "explicacion": "Es una crisis hipertensiva sin compromiso de órgano blanco (cefalea inespecífica, examen pulmonar normal): una urgencia hipertensiva. El tratamiento es un antihipertensivo oral, como el captopril, con descenso gradual. El nifedipino sublingual está contraindicado, y la nitroglicerina, el nitroprusiato y el labetalol endovenosos son para las emergencias.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 7"
      },
      {
        "stem": "Un paciente de 68 años, con antecedente de diabetes e hipertensión de larga data, mal controlado, consulta por un cuadro de disnea, opresión precordial y malestar general que comenzó hace dos horas. Al examen físico tiene FC: 88 lpm, PA: 220/120 mmHg y se ausculta ritmo regular en dos tiempos sin soplos y murmullo pulmonar presente bilateral, con escasos crépitos basales. Se solicita electrocardiograma que muestra desnivel de 2 milímetros en las derivaciones precordiales izquierdas. ¿Cuál es el fármaco de elección para el control de su presión arterial?",
        "options": [
          {
            "id": "A",
            "text": "Nitroprusiato endovenoso en infusión continua"
          },
          {
            "id": "B",
            "text": "Nitroglicerina endovenosa en infusión continua"
          },
          {
            "id": "C",
            "text": "Captopril vía oral"
          },
          {
            "id": "D",
            "text": "Hidralazina endovenosa"
          },
          {
            "id": "E",
            "text": "Nifedipino sublingual"
          }
        ],
        "correcta": "B",
        "explicacion": "Es una emergencia hipertensiva con síndrome coronario agudo (disnea, opresión precordial, desnivel del ST con presión de 220/120 mmHg y crépitos basales). En el infarto con crisis hipertensiva el fármaco de elección es la nitroglicerina endovenosa en infusión continua; el labetalol o el nitroprusiato se prefieren en la disección aórtica, y el nifedipino sublingual está contraindicado.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 28"
      },
      {
        "stem": "Hombre de 62 años consulta por cefalea leve sin otros síntomas. PA 210/115 mmHg. Examen físico neurológico, cardíaco y fondo de ojo completamente normales. ¿Cuál es la conducta médica más apropiada?",
        "options": [
          {
            "id": "A",
            "text": "Indicar reposo y administrar un antihipertensivo oral con control en 24-48 horas"
          },
          {
            "id": "B",
            "text": "Hospitalizar de inmediato en UCI e iniciar nitroprusiato de sodio endovenoso"
          },
          {
            "id": "C",
            "text": "Administrar una cápsula de nifedipino sublingual perforada"
          },
          {
            "id": "D",
            "text": "Realizar punción lumbar de urgencia para descartar hemorragia"
          },
          {
            "id": "E",
            "text": "Administrar furosemida 80 mg endovenosa en bolo cada 4 horas"
          }
        ],
        "correcta": "A",
        "explicacion": "Es una urgencia hipertensiva (alza severa sin daño de órgano blanco). Se maneja con reposo, antihipertensivo oral y control en 24 a 48 horas; no requiere UCI ni nitroprusiato. El nifedipino sublingual está contraindicado.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Paciente con disección aórtica aguda tipo A, con PA 220/120 mmHg y FC 110 lpm. ¿Cuál es el objetivo hemodinámico y el tratamiento inicial de elección antes de ingresar a pabellón?",
        "options": [
          {
            "id": "A",
            "text": "Labetalol endovenoso para alcanzar PAS < 120 mmHg y FC < 60 lpm en menos de 20 minutos"
          },
          {
            "id": "B",
            "text": "Nitroprusiato de sodio en monoterapia para bajar la PAM un 10% en 24 horas"
          },
          {
            "id": "C",
            "text": "Hidralazina endovenosa para mantener PAS alrededor de 160 mmHg"
          },
          {
            "id": "D",
            "text": "Furosemida endovenosa en bolo y reposo absoluto"
          },
          {
            "id": "E",
            "text": "Enalapril oral cada 8 horas hasta normalizar la presión"
          }
        ],
        "correcta": "A",
        "explicacion": "En la disección aórtica el objetivo es disminuir el estrés de cizallamiento sobre la pared aórtica (dP/dt): PAS < 120 mmHg y FC < 60 lpm en menos de 20 minutos, con un betabloqueador endovenoso (labetalol o esmolol) como primera línea, y vasodilatador solo después del betabloqueo.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "5.2§0 · 5.2§1 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-33",
    "classId": "cardio-33",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.5",
    "title": "Pericarditis Aguda",
    "perfilCode": "1.01.1.022",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "No requiere",
    "ges": "No GES",
    "reconstrucciones": "",
    "frecuencia": "Alta · Criterios diagnósticos, ECG con supradesnivel cóncavo difuso e infradesnivel del PR, diferencia con el infarto, AINE más colchicina y complicaciones",
    "svg": null,
    "algoTitle": "Algoritmo diagnóstico y de manejo de la pericarditis aguda",
    "diagram": {
      "title": "Diagnóstico y Manejo de la Pericarditis Aguda",
      "svg": "<svg viewBox=\"0 0 620 310\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar33\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar33)}\n  </style>\n  <path class=\"ln\" d=\"M310,46 V72\"/>\n  <path class=\"ln\" d=\"M310,110 V136\"/>\n  <path class=\"ln\" d=\"M310,174 V200\"/>\n  <path class=\"ln\" d=\"M310,238 V248 H162 V264\"/>\n  <text class=\"lbl\" x=\"166\" y=\"260\">Sí</text>\n  <path class=\"ln\" d=\"M310,238 V248 H458 V264\"/>\n  <text class=\"lbl\" x=\"462\" y=\"260\">No</text>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Dolor torácico pleurítico / posicional</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">↑ con inspiración, tos y decúbito · ↓ al inclinarse hacia adelante</text>\n  <rect class=\"dec\" x=\"60\" y=\"72\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"87\" text-anchor=\"middle\" font-weight=\"700\">≥ 2 de 4: dolor típico · frote · ECG típico · derrame nuevo</text>\n  <text class=\"sub\" x=\"310\" y=\"100\" text-anchor=\"middle\">ECG: SDST cóncavo difuso + infradesnivel del PR (sin imagen especular)</text>\n  <rect class=\"acc\" x=\"60\" y=\"136\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Pericarditis aguda</text>\n  <text class=\"accS\" x=\"310\" y=\"164\" text-anchor=\"middle\">Troponina, PCR, ecocardiograma, Rx tórax</text>\n  <rect class=\"dec\" x=\"60\" y=\"200\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"215\" text-anchor=\"middle\" font-weight=\"700\">¿Factores de alto riesgo?</text>\n  <text class=\"sub\" x=\"310\" y=\"228\" text-anchor=\"middle\">Fiebre &gt; 38 °C · subaguda · derrame grande/taponamiento · trauma · anticoagulante · miopericarditis · falla AINE</text>\n  <rect class=\"warn\" x=\"12\" y=\"264\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"162\" y=\"279\" text-anchor=\"middle\" font-weight=\"700\">Hospitalizar y estudiar la causa</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"292\" text-anchor=\"middle\">Ecocardiograma; pericardiocentesis si taponamiento (Tema 5.6)</text>\n  <rect class=\"acc\" x=\"308\" y=\"264\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"458\" y=\"279\" text-anchor=\"middle\" font-weight=\"700\">Manejo ambulatorio</text>\n  <text class=\"accS\" x=\"458\" y=\"292\" text-anchor=\"middle\">AINE (ibuprofeno 600 c/8 h o aspirina) 1-2 sem + colchicina 3 meses + IBP</text>\n</svg>"
    },
    "contexto": "La pericarditis aguda es una de las causas más comunes de dolor torácico en el joven y la gran imitadora del infarto con supradesnivel del ST: el electrocardiograma tiene el ST elevado, y la diferencia entre trombolizar a un paciente o mandarlo a su casa con ibuprofeno depende de reconocer el dolor que mejora al inclinarse hacia adelante, el frote pericárdico y la elevación difusa y cóncava del ST con descenso del PR. Además, es el prólogo del taponamiento y de la pericarditis constrictiva, que se estudian a continuación. El EUNACOM pregunta el diagnóstico clínico, el ECG, el tratamiento (antiinflamatorio más colchicina) y la lista de signos de alarma.",
    "contentSections": [
      {
        "subhead": "1. Qué es y por qué ocurre: etiología",
        "paragraphs": [
          "El <strong>pericardio</strong> es el saco de dos hojas (visceral y parietal) que rodea al corazón y contiene 15 a 50 mL de líquido seroso; la <strong>pericarditis aguda</strong> es su inflamación, con o sin derrame. En los países desarrollados la causa es <strong>idiopática o viral en más del 80 a 85% de los casos</strong> de pacientes inmunocompetentes: los virus más frecuentes son coxsackie, echovirus, adenovirus, parvovirus, virus de Epstein-Barr, citomegalovirus y, en los últimos años, el SARS-CoV-2. El hallazgo de la causa específica solo es productivo en una minoría, por lo que no se estudia de rutina a un paciente de bajo riesgo.",
          "Otras causas que se preguntan: <strong>infarto agudo del miocardio</strong> (pericarditis precoz a los 1 a 3 días por inflamación del tejido necrótico transmural, y <strong>síndrome de Dressler</strong> a las 2 a 8 semanas, de mecanismo autoinmune, con fiebre, pleuritis y derrame), <strong>pericarditis urémica</strong> (insuficiencia renal avanzada o diálisis insuficiente), <strong>tuberculosis</strong> (derrame hemorrágico, riesgo de constricción; frecuente en países con alta endemia y en inmunodeprimidos), <strong>neoplasias</strong> (pulmón, mama, linfoma; derrame hemorrágico y riesgo de taponamiento), <strong>enfermedades autoinmunes</strong> (lupus eritematoso sistémico, artritis reumatoide, esclerodermia), <strong>cirugía cardíaca o pericardiotomía</strong>, radioterapia torácica, traumatismo y <strong>fármacos</strong> (hidralazina, procainamida, isoniazida, doxorrubicina).",
          "La inflamación del pericardio roza la pleura vecina y el diafragma, y el nervio frénico lleva el dolor al borde del trapecio. La hoja visceral inflamada se frota contra la parietal (frote pericárdico), y la irritación del epicardio superficial produce las alteraciones del segmento ST y del PR."
        ]
      },
      {
        "subhead": "2. Diagnóstico clínico: los 4 criterios (se necesitan al menos 2)",
        "paragraphs": [
          "El diagnóstico se hace con al menos <strong>2 de los 4 criterios</strong>:",
          "1) <strong>Dolor torácico típico:</strong> retroesternal o precordial, punzante o pleurítico, de inicio relativamente rápido, que <strong>aumenta con la inspiración profunda, la tos y el decúbito dorsal</strong> y que <strong>alivia al sentarse e inclinarse hacia adelante</strong> (posición de rezo o mahometana). Puede irradiarse al <strong>borde del trapecio</strong>, que es casi específico de afectación pericárdica (por el nervio frénico). A diferencia del dolor del infarto, no es opresivo ni se irradia al brazo y la mandíbula, y no se alivia con nitroglicerina. Con frecuencia hay un pródromo viral (fiebre baja, mialgias, síntomas respiratorios o gastrointestinales) y disnea leve por el dolor al respirar.",
          "2) <strong>Frote pericárdico:</strong> ruido áspero, «de cuero nuevo», auscultable en el borde esternal izquierdo con el paciente inclinado hacia adelante y en espiración, con hasta tres componentes (sístole auricular, sístole ventricular y llenado ventricular rápido). Es el signo más específico, pero transitorio y puede cambiar de una hora a otra; auscultarlo repetidamente aumenta el rendimiento.",
          "3) <strong>Alteraciones electrocardiográficas típicas</strong> (detalle en la sección siguiente): supradesnivel difuso y cóncavo del ST con descenso del PR.",
          "4) <strong>Derrame pericárdico nuevo o empeoramiento de uno previo</strong> en el ecocardiograma. El derrame no es necesario para el diagnóstico; aparece en un 60% de las pericarditis y suele ser pequeño.",
          "Un paciente joven y deportista con dolor torácico de 1 a 2 días que empeora al recostarse y mejora al sentarse, con frote y ECG compatible, tiene una pericarditis aguda. Cuando además hay <strong>elevación de la troponina</strong> (compromiso del miocardio subepicárdico) o disfunción ventricular, se habla de <strong>miopericarditis</strong>, que se maneja con restricción estricta del ejercicio."
        ]
      },
      {
        "subhead": "3. El electrocardiograma: cuatro fases y cómo separarla del infarto",
        "paragraphs": [
          "El ECG de la pericarditis refleja la inflamación del epicardio de toda la superficie cardíaca, por eso es <strong>difuso</strong> y no respeta territorios coronarios. Los hallazgos de la <strong>fase I</strong> (primeras horas a días) son: <strong>supradesnivel del segmento ST de concavidad superior («en batea» o «en silla de montar») en casi todas las derivaciones</strong> (DI, DII, DIII, aVF y V2 a V6), con <strong>infradesnivel del segmento PR</strong> (el signo más precoz y específico, por inflamación auricular), y las derivaciones <strong>aVR y V1 con la imagen opuesta</strong>: ST descendido y PR elevado. También puede verse un infradesnivel del segmento TP (signo de Spodick).",
          "La evolución clásica tiene cuatro fases: <strong>I</strong> (ST elevado, PR descendido, ondas T positivas), <strong>II</strong> (el ST y el PR vuelven a la línea basal), <strong>III</strong> (inversión difusa de las ondas T) y <strong>IV</strong> (normalización, o T invertidas persistentes). Puede haber taquicardia sinusal. Una evolución que pasa de inversión de T con nueva elevación del ST sugiere recidiva. En el derrame grande aparece <strong>bajo voltaje</strong> y <strong>alternancia eléctrica</strong> (Tema 5.6).",
          "La <strong>diferencia con el infarto con supradesnivel del ST</strong> es la que más se pregunta (véase el Tema 2.5): en la pericarditis el supradesnivel es <strong>cóncavo, difuso y no territorial</strong>, el PR está descendido y <strong>no hay imagen especular</strong> (salvo en aVR) ni ondas Q; el paciente no está comprometido hemodinámicamente y la evolución es sin necrosis. En el infarto el supradesnivel es convexo y territorial, con imagen especular, y evoluciona a ondas Q. Los otros imitadores son la <strong>repolarización precoz</strong> (joven, deportista, ST cóncavo con muesca en el punto J y ondas T grandes, estable en el tiempo y sin descenso del PR), la miocarditis y el aneurisma ventricular. Ante la duda con un infarto, se repite el ECG, se pide troponina y ecocardiograma (alteración segmentaria de la motilidad en el infarto)."
        ]
      },
      {
        "subhead": "4. Exámenes complementarios",
        "paragraphs": [
          "En el servicio de urgencia se solicitan: <strong>ECG</strong>, <strong>troponina</strong> (si es elevada, miopericarditis o infarto; un alza leve y transitoria no cambia el pronóstico), <strong>proteína C reactiva y VHS</strong> (útiles para el seguimiento y para decidir el fin del tratamiento), hemograma, creatinina (la uremia como causa y para ajustar los AINE), <strong>radiografía de tórax</strong> (la silueta cardíaca se agranda solo si el derrame supera los 250 mL; busca neumonía, tumor o tuberculosis) y <strong>ecocardiograma transtorácico</strong>, que detecta el derrame, su tamaño y signos de taponamiento.",
          "No se estudia la causa en todos: en un paciente joven con cuadro típico, sin criterios de alto riesgo, se asume causa viral o idiopática. Se amplía el estudio (hemocultivos, serologías, anticuerpos antinucleares, prueba de tuberculina o quantiferón, estudio del líquido) cuando hay derrame grande, fiebre alta, curso subagudo o falla de tratamiento a la semana. La resonancia magnética cardíaca con realce tardío se reserva para la miopericarditis o los casos dudosos."
        ]
      },
      {
        "subhead": "5. Tratamiento: antiinflamatorio más colchicina, reposo y signos de alarma",
        "paragraphs": [
          "<strong>Primera línea</strong> en todo paciente: un <strong>antiinflamatorio no esteroideo en dosis plenas</strong>, <strong>aspirina 750 a 1.000 mg cada 8 horas</strong> o <strong>ibuprofeno 600 mg cada 8 horas</strong>, durante 1 a 2 semanas y con descenso gradual, <strong>junto con un inhibidor de la bomba de protones</strong> (omeprazol) como protección gástrica; <strong>más colchicina 0,5 mg al día si pesa menos de 70 kg, o 0,5 mg cada 12 horas si pesa 70 kg o más, durante 3 meses</strong>. La colchicina reduce a la mitad las recidivas, y por eso es parte del tratamiento de primera línea. La aspirina se prefiere en la pericarditis posinfarto (los demás AINE interfieren con la cicatrización y se evitan); en el paciente con enfermedad renal se reduce la dosis o se evitan.",
          "Además se indica <strong>reposo y restricción del ejercicio</strong> hasta la resolución de los síntomas y la normalización de los marcadores (en general, hasta 1 mes en el no deportista y 3 meses en el deportista de competencia). Los <strong>corticoides</strong> no son de primera línea porque aumentan el riesgo de recurrencia; se reservan para las causas autoinmunes o urémicas y para los pacientes que no toleran los AINE, siempre en dosis bajas y acompañados de colchicina. Los <strong>anticoagulantes</strong> se evitan cuando es posible porque aumentan el riesgo de hemopericardio, y la <strong>antibioticoterapia empírica</strong> no tiene lugar en la pericarditis viral.",
          "Se <strong>hospitaliza</strong> al paciente con factores de mal pronóstico: <strong>fiebre mayor de 38 °C, curso subagudo, derrame grande o signos de taponamiento, traumatismo, uso de anticoagulantes orales, inmunosupresión, miopericarditis (troponina elevada) y falta de respuesta a los AINE en 1 semana</strong>. El resto se maneja en forma ambulatoria con control a la semana. La pericarditis neoplásica, tuberculosa y purulenta requiere estudio del líquido y manejo específico."
        ]
      },
      {
        "subhead": "6. Complicaciones y evolución: recurrencia, derrame y constricción",
        "paragraphs": [
          "La <strong>recurrencia</strong> aparece en 15 a 30% de los pacientes, habitualmente en las semanas siguientes, y es la razón de la colchicina; se trata con AINE, colchicina y, en el caso refractario, con corticoides y fármacos como el anakinra. El <strong>derrame pericárdico</strong> puede evolucionar a <strong>taponamiento cardíaco</strong> (Tema 5.6), más probable en las pericarditis neoplásicas, tuberculosas, urémicas o hemorrágicas. La <strong>pericarditis constrictiva</strong> es una complicación tardía (meses o años) de cualquier pericarditis, sobre todo la tuberculosa, la posquirúrgica y la posradiación: el pericardio fibrosado y calcificado impide el llenado diastólico y causa un cuadro de <strong>insuficiencia cardíaca derecha</strong> con ingurgitación yugular que aumenta en la inspiración (<strong>signo de Kussmaul</strong>), ascitis, edema, hepatomegalia y un <strong>ruido protodiastólico agudo («knock pericárdico»)</strong>; la radiografía o la TAC muestran calcificación pericárdica, y el tratamiento definitivo es la pericardiectomía.",
          "Es útil comparar los tres síndromes en una tabla (Tabla 5.5.A): la <strong>pericarditis aguda</strong> da dolor y ECG típico con presión normal; el <strong>taponamiento</strong> da hipotensión, ingurgitación yugular y ruidos apagados (tríada de Beck) y es una emergencia; la <strong>constricción</strong> da un síndrome de falla derecha crónica con Kussmaul. Para el diagnóstico diferencial de dolor torácico recuerde también el tromboembolismo pulmonar (disnea, hipoxemia, factor de riesgo), el neumotórax, el espasmo esofágico y la costocondritis (dolor reproducible a la palpación, ECG normal)."
        ]
      }
    ],
    "table": {
      "title": "Pericarditis Aguda frente al Infarto con Supradesnivel y al Taponamiento",
      "headers": [
        "Parámetro",
        "Pericarditis aguda",
        "Infarto con SDST",
        "Taponamiento"
      ],
      "rows": [
        [
          "Dolor",
          "Pleurítico; ↓ al inclinarse, ↑ al acostarse",
          "Opresivo, > 20 min, irradiado",
          "Disnea; dolor variable"
        ],
        [
          "ST",
          "Cóncavo, difuso, no territorial",
          "Convexo, territorial",
          "Bajo voltaje y alternancia eléctrica"
        ],
        [
          "PR e imagen especular",
          "PR descendido; sin imagen especular",
          "Imagen especular; sin cambio del PR",
          "—"
        ],
        [
          "Ondas Q",
          "No",
          "Sí (necrosis)",
          "No"
        ],
        [
          "Examen",
          "Frote pericárdico",
          "R3, signos de IC",
          "Tríada de Beck, pulso paradojal"
        ],
        [
          "Conducta",
          "AINE + colchicina",
          "Reperfusión urgente",
          "Pericardiocentesis"
        ]
      ]
    },
    "vignette": "Hombre de 32 años, deportista, consulta en urgencias por dolor torácico precordial punzante de inicio brusco hace 24 horas, con un resfrío la semana previa. El dolor aumenta al toser y al acostarse, y se alivia casi por completo cuando se sienta e inclina el tórax hacia adelante. PA 125/80 mmHg, FC 92 lpm, temperatura 37,6 °C. Se ausculta un frote rudo en el borde esternal izquierdo. El ECG muestra supradesnivel del ST de concavidad superior en DI, DII, aVF y V2 a V6 con infradesnivel del PR.",
    "explicacion": "Cumple 3 de los 4 criterios diagnósticos de pericarditis aguda (dolor posicional típico, frote pericárdico y ECG con supradesnivel cóncavo difuso con infradesnivel del PR), sin imagen especular ni ondas Q, con pródromo viral y sin factores de alto riesgo (sin fiebre alta, sin signos de taponamiento). La conducta es ambulatoria: reposo y restricción del ejercicio, ibuprofeno 600 mg cada 8 horas (o aspirina) con omeprazol, colchicina 0,5 mg cada 12 horas por 3 meses para prevenir recurrencias y un ecocardiograma para descartar derrame. No requiere trombólisis ni anticoagulación.",
    "keyPoints": [
      "Pericarditis: ≥ 2 de 4 criterios (dolor pleurítico que mejora al inclinarse, frote, ECG típico, derrame nuevo).",
      "ECG: supradesnivel cóncavo y difuso del ST con infradesnivel del PR; sin imagen especular ni ondas Q (salvo aVR y V1).",
      "Causa idiopática o viral en > 80% de los casos; se estudia la causa solo si hay alto riesgo.",
      "Tratamiento de primera línea: aspirina 750-1000 mg c/8 h o ibuprofeno 600 mg c/8 h + colchicina 3 meses + IBP.",
      "Los corticoides no son de primera línea (aumentan las recurrencias); evitar anticoagulantes.",
      "Hospitalizar si hay fiebre > 38 °C, curso subagudo, derrame grande o taponamiento, trauma, anticoagulantes, troponina elevada o falla de AINE.",
      "Complicaciones: recurrencia (15-30%), taponamiento y constricción (Kussmaul, knock, calcificación): pericardiectomía.",
      "Síndrome de Dressler: 2-8 semanas tras el infarto; la aspirina es el AINE de elección en la pericarditis posinfarto."
    ],
    "questions": [
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
        "explicacion": "Dolor retroesternal con antecedente de reflujo, buen estado general y elevación difusa del ST «en silla de montar» (cóncava, no territorial) es una pericarditis aguda. El SCACEST daría supradesnivel convexo y territorial con imagen especular; la angina inestable no eleva el ST; la miocarditis cursa con compromiso de la función ventricular; en la angina de Prinzmetal la elevación del ST es transitoria y territorial.",
        "recTag": "EUNACOM Enero 2023 · Pregunta 139"
      },
      {
        "stem": "Hombre de 26 años con pericarditis aguda viral. ¿Cuál es la terapia farmacológica de primera línea recomendada para tratar el episodio actual y reducir significativamente la tasa de recidiva?",
        "options": [
          {
            "id": "A",
            "text": "Antiinflamatorios no esteroidales (AINE) asociados a colchicina durante 3 meses"
          },
          {
            "id": "B",
            "text": "Prednisona en dosis altas en monoterapia"
          },
          {
            "id": "C",
            "text": "Antibioticoterapia empírica con ceftriaxona endovenosa"
          },
          {
            "id": "D",
            "text": "Anticoagulación con heparina de bajo peso molecular"
          },
          {
            "id": "E",
            "text": "Paracetamol 500 mg cada 12 horas SOS"
          }
        ],
        "correcta": "A",
        "explicacion": "El tratamiento estándar de la pericarditis aguda es un AINE en dosis altas (ibuprofeno o aspirina) más colchicina durante 3 meses, que reduce a la mitad las recurrencias. Los corticoides no son de primera línea y la anticoagulación y los antibióticos no tienen indicación en la pericarditis viral.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "5.3§0 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-34",
    "classId": "cardio-34",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.6",
    "title": "Taponamiento Cardíaco y Pericardiocentesis",
    "perfilCode": "1.01.2.008, 1.01.5.007",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES",
    "reconstrucciones": "",
    "frecuencia": "Alta · Tríada de Beck, pulso paradojal, alternancia eléctrica, ecocardiograma y pericardiocentesis; diagnóstico diferencial del shock obstructivo",
    "svg": null,
    "algoTitle": "Algoritmo de diagnóstico y manejo del taponamiento cardíaco",
    "diagram": {
      "title": "Taponamiento Cardíaco: Reconocer y Drenar",
      "svg": "<svg viewBox=\"0 0 620 246\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar34\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar34)}\n  </style>\n  <path class=\"ln\" d=\"M310,46 V72\"/>\n  <path class=\"ln\" d=\"M310,110 V120 H162 V136\"/>\n  <text class=\"lbl\" x=\"166\" y=\"132\">Sí: taponamiento</text>\n  <path class=\"ln\" d=\"M310,110 V120 H458 V136\"/>\n  <text class=\"lbl\" x=\"462\" y=\"132\">No: estable</text>\n  <path class=\"ln\" d=\"M162,174 V188 H310 V200\"/>\n  <path class=\"ln\" d=\"M458,174 V188 H310 V200\"/>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Hipotensión + ingurgitación yugular + ruidos apagados</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">Tríada de Beck · taquicardia · disnea · pulso paradojal (↓ PAS &gt; 10 mmHg al inspirar)</text>\n  <rect class=\"dec\" x=\"60\" y=\"72\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"87\" text-anchor=\"middle\" font-weight=\"700\">¿Inestabilidad hemodinámica?</text>\n  <text class=\"sub\" x=\"310\" y=\"100\" text-anchor=\"middle\">Eco a la cabecera: derrame con colapso diastólico de AD/VD, VCI dilatada</text>\n  <rect class=\"warn\" x=\"12\" y=\"136\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"162\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Pericardiocentesis urgente</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"164\" text-anchor=\"middle\">Subxifoidea guiada por eco; dejar catéter · volumen EV mientras se prepara</text>\n  <rect class=\"acc\" x=\"308\" y=\"136\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"458\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Derrame sin taponamiento</text>\n  <text class=\"accS\" x=\"458\" y=\"164\" text-anchor=\"middle\">Tratar la causa · eco seriado · drenar si es grande</text>\n  <rect class=\"b\" x=\"60\" y=\"200\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"215\" text-anchor=\"middle\" font-weight=\"700\">Cirugía (ventana pericárdica / esternotomía)</text>\n  <text class=\"sub\" x=\"310\" y=\"228\" text-anchor=\"middle\">Trauma, disección tipo A, hemopericardio coagulado o recidiva</text>\n</svg>"
    },
    "contexto": "El taponamiento cardíaco es un shock obstructivo curable: el corazón no se llena porque el líquido a presión dentro del pericardio lo comprime desde afuera. Si se reconoce, un procedimiento de minutos con una aguja devuelve el gasto cardíaco; si se confunde con insuficiencia cardíaca y se trata con diuréticos y vasodilatadores, el paciente muere. El médico general debe reconocerlo en el paciente con cáncer, pericarditis, trauma torácico o infarto reciente que llega hipotenso y con las yugulares ingurgitadas. El EUNACOM lo pregunta con la tríada de Beck, el pulso paradojal, el bajo voltaje con alternancia eléctrica y el procedimiento de urgencia, la pericardiocentesis.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología: el pericardio rígido y la curva presión-volumen",
        "paragraphs": [
          "El <strong>pericardio fibroso</strong> es poco distensible. La relación entre el volumen de líquido y la presión intrapericárdica es una curva con una zona plana inicial y una vertical después: un derrame que se acumula <strong>lentamente</strong> (días o semanas, como en una neoplasia o un hipotiroidismo) permite que el pericardio se estire y puede alcanzar 1 a 2 litros sin taponamiento; un derrame que se acumula <strong>rápidamente</strong> (trauma, rotura cardíaca, disección, hemopericardio posprocedimiento) produce taponamiento con apenas <strong>100 a 200 mL</strong>. Lo que determina el taponamiento es la velocidad y la presión intrapericárdica, no solo el volumen.",
          "Cuando la presión intrapericárdica supera la presión de llenado de las cavidades, comprime primero las de menor presión, las <strong>cavidades derechas (aurícula y ventrículo derechos) durante la diástole</strong>, y limita el llenado ventricular. El volumen sistólico cae, y el cuerpo compensa con <strong>taquicardia</strong> y vasoconstricción periférica para mantener el gasto cardíaco; cuando se agotan, aparece el <strong>shock obstructivo</strong> con hipotensión, oliguria y alteración de la conciencia, y en el límite, la actividad eléctrica sin pulso. Como las cavidades están comprimidas, <strong>los pulmones están limpios</strong> (no hay congestión) y las venas del cuello están llenas.",
          "Un fenómeno central es la <strong>interdependencia ventricular</strong>: en un saco pericárdico sin espacio, el llenado de un ventrículo es a expensas del otro. En la inspiración aumenta el retorno venoso al ventrículo derecho, que se dilata y empuja el tabique hacia la izquierda; el ventrículo izquierdo se llena menos, cae su volumen sistólico y baja la presión arterial. Eso explica el <strong>pulso paradojal</strong>."
        ]
      },
      {
        "subhead": "2. Causas",
        "paragraphs": [
          "Cualquier causa de derrame pericárdico puede producir taponamiento. Las más frecuentes: <strong>neoplasias</strong> (pulmón, mama, linfoma, melanoma; derrame hemorrágico), <strong>pericarditis</strong> viral, tuberculosa o urémica, el <strong>hemopericardio iatrogénico</strong> (perforación por catéter, marcapaso, ablación, angioplastía; cirugía cardíaca), el <strong>trauma torácico penetrante</strong> (herida por arma blanca o de fuego del precordio), la <strong>rotura de la pared libre del ventrículo izquierdo tras un infarto</strong> (Tema 2.6), la <strong>disección aórtica tipo A</strong> con rotura al saco pericárdico, la <strong>anticoagulación</strong> excesiva y las enfermedades del tejido conectivo. Con menos frecuencia: hipotiroidismo, radioterapia, quilopericardio.",
          "Un paciente con <strong>cáncer de pulmón o de mama</strong> que consulta por disnea y síncope, con hipotensión e ingurgitación yugular, tiene un taponamiento mientras no se demuestre lo contrario; un paciente que <strong>sale de una cirugía cardíaca o de un procedimiento invasivo</strong> y se hipotensa, también."
        ]
      },
      {
        "subhead": "3. Clínica: tríada de Beck, pulso paradojal y signos asociados",
        "paragraphs": [
          "La <strong>tríada de Beck clásica</strong> (se pregunta en todos los exámenes) reúne: <strong>1) hipotensión arterial</strong> (con shock en los casos graves), <strong>2) ingurgitación yugular marcada</strong> (a 90°, con onda <em>x</em> prominente y ausencia de la onda <em>y</em>, porque el llenado ventricular solo ocurre en la sístole) y <strong>3) ruidos cardíacos apagados o «alejados»</strong> (porque el líquido amortigua los ruidos). Aunque la tríada es específica, está completa en una minoría; en el paciente hipovolémico (trauma con hemorragia) las yugulares pueden no estar ingurgitadas.",
          "El <strong>pulso paradojal</strong> es una <strong>caída de la presión arterial sistólica mayor de 10 mmHg durante la inspiración normal</strong>. Se mide con el manguito: se infla sobre la presión sistólica y se desinfla lentamente; se anota la presión a la que aparecen los primeros ruidos solo en la espiración, y luego la presión a la que se oyen todos; si la diferencia supera 10 mmHg, hay pulso paradojal. Se explica por la interdependencia ventricular descrita. Es una «paradoja» solo en el sentido de que el pulso desaparece a la palpación mientras los ruidos cardíacos se siguen auscultando. No debe confundirse con el <strong>signo de Kussmaul</strong>, que es el <em>aumento</em> de la presión venosa yugular en inspiración y se ve en la pericarditis constrictiva y no en el taponamiento. El pulso paradojal también aparece en el asma grave, la EPOC descompensada y el TEP masivo.",
          "Los otros hallazgos: <strong>taquicardia</strong> (casi constante), <strong>taquipnea y disnea</strong> con ortopnea y pulmones limpios, <strong>extremidades frías y oliguria</strong>, <strong>pulso débil</strong> y, en ocasiones, un dolor torácico sordo. En un paciente de 79 años con cáncer de pulmón que presenta síncopes breves, presión de 80/60, yugulares ingurgitadas a 50° y ruidos cardíacos apagados, el diagnóstico es taponamiento, aunque el tromboembolismo pulmonar sea tentador; lo que lo distingue es la disminución de la intensidad de los ruidos."
        ]
      },
      {
        "subhead": "4. Diagnóstico: electrocardiograma, radiografía y ecocardiograma",
        "paragraphs": [
          "El <strong>ecocardiograma</strong> es el examen de elección y se hace a la cabecera: muestra el derrame (espacio libre de ecos alrededor del corazón), y los signos de taponamiento: <strong>colapso diastólico de la aurícula derecha y del ventrículo derecho</strong>, <strong>vena cava inferior dilatada sin colapso inspiratorio</strong> (plétora), variación respiratoria exagerada de los flujos mitral y tricuspídeo, y a veces el corazón «bailando» en el líquido (<em>swinging heart</em>). En el contexto de una clínica de taponamiento, el examen que hace el diagnóstico es el ecocardiograma (no un TAC con contraste ni una radiografía).",
          "El <strong>electrocardiograma</strong> muestra <strong>bajo voltaje</strong> generalizado y <strong>alternancia eléctrica</strong>: los complejos QRS cambian de amplitud latido a latido porque el corazón oscila libremente dentro del líquido. La taquicardia sinusal es habitual. La <strong>radiografía de tórax</strong> puede mostrar una silueta cardíaca aumentada «en botella de agua» o «en cantimplora» (cuando el derrame supera unos 250 mL), con campos pulmonares limpios; en un derrame agudo pequeño puede ser normal, por lo que un tórax normal no excluye el taponamiento.",
          "En el paciente en shock no se espera un estudio completo: el ecocardiograma de cabecera (o la ventana subxifoidea de la ecografía FAST en el trauma) define la conducta. La <strong>presión venosa central elevada con hipotensión y pulmones limpios</strong> en el paciente con cáncer, pericarditis o trauma basta para sospecharlo. El diagnóstico diferencial es el <strong>shock obstructivo</strong>: tromboembolismo pulmonar masivo (ventrículo derecho dilatado y sobrecargado), neumotórax a tensión (murmullo abolido, tráquea desviada) y taponamiento; y el shock cardiogénico por insuficiencia ventricular izquierda, donde hay congestión pulmonar."
        ]
      },
      {
        "subhead": "5. Tratamiento: pericardiocentesis y medidas de sostén",
        "paragraphs": [
          "El <strong>tratamiento de emergencia es la pericardiocentesis evacuadora inmediata</strong>: punción del saco pericárdico con una aguja y drenaje del líquido, <strong>guiada por ecocardiografía</strong> (técnica de elección) o, si hay paro inminente y no se dispone de imagen, por <strong>abordaje subxifoideo a ciegas</strong>. En la técnica clásica, con el paciente semisentado a 30 a 45°, se punciona 1 a 2 cm bajo el apéndice xifoides, entre el xifoides y el reborde costal izquierdo, dirigiendo la aguja hacia el hombro izquierdo en un ángulo de 30° con la piel, aspirando continuamente hasta obtener líquido; se deja un catéter tipo pigtail para drenaje continuo durante 24 a 72 horas. El líquido se envía a citología, cultivo (incluida tuberculosis), adenosina desaminasa y recuento celular. En hemopericardio por trauma o disección o cuando el líquido ha coagulado, el drenaje con aguja no basta y se hace una <strong>ventana pericárdica o toracotomía de urgencia</strong>.",
          "Mientras se prepara el procedimiento se administran <strong>volumen endovenoso</strong> (suero fisiológico en bolos, que aumenta transitoriamente la presión de llenado) y, si hace falta, vasopresores. Se <strong>evitan</strong> los diuréticos, los vasodilatadores (nitroglicerina) y los betabloqueadores (que reducen la precarga o bloquean la taquicardia compensadora), y la <strong>ventilación con presión positiva</strong> (la intubación puede precipitar el paro porque reduce el retorno venoso). Un taponamiento por rotura cardíaca, disección aórtica o trauma se resuelve en pabellón.",
          "Las <strong>complicaciones</strong> de la pericardiocentesis son la punción del ventrículo (se retira líquido sanguinolento que coagula, a diferencia del hemopericardio, que no coagula porque es defibrinado), arritmias, neumotórax, laceración de una coronaria y lesión hepática; la técnica guiada por ecografía las reduce. Después del drenaje se trata la causa (quimioterapia, diálisis, antituberculosos, AINE y colchicina en la pericarditis) y se hace un ecocardiograma de control para detectar la reacumulación; en los derrames neoplásicos recidivantes se hace una ventana pericárdica o una esclerosis."
        ]
      },
      {
        "subhead": "6. Derrame pericárdico sin taponamiento",
        "paragraphs": [
          "No todo derrame es taponamiento. El derrame se clasifica por tamaño en el ecocardiograma: <strong>pequeño</strong> (menos de 10 mm de separación en diástole), <strong>moderado</strong> (10 a 20 mm) y <strong>grande</strong> (más de 20 mm). El paciente estable con un derrame pequeño o moderado se maneja tratando la causa, con control ecocardiográfico seriado; se hace una pericardiocentesis diagnóstica solo ante sospecha de pericarditis bacteriana o neoplásica, o si el derrame es grande (más de 20 mm) y persiste más de 3 meses. En el hipotiroidismo, la insuficiencia cardíaca y la hipoalbuminemia, el derrame es un trasudado y se corrige con el tratamiento de la enfermedad de base.",
          "La <strong>indicación de pericardiocentesis</strong> es el taponamiento (siempre) y, de forma electiva, el derrame grande de causa no aclarada o con sospecha de infección o neoplasia. Sus <strong>contraindicaciones</strong> son relativas en el paciente que se está muriendo: una coagulopatía o la anticoagulación no impiden el drenaje de urgencia; en cambio, en la <strong>disección aórtica</strong> o la <strong>rotura cardíaca</strong> el drenaje con aguja puede soltar el sello del sangrado y desencadenar un colapso, por lo que la conducta es llevar al paciente a pabellón con drenaje mínimo para mantener la presión. En el nivel del médico general, la tarea es reconocer la indicación, estabilizar y derivar de inmediato a un centro con ecocardiografía y cirugía cardiovascular, y solo ante un paro inminente realizar la punción subxifoidea. Quien realiza el procedimiento debe monitorizar el ECG durante la punción: una elevación del ST o extrasístoles ventriculares indican contacto con el epicardio y obligan a retirar la aguja unos milímetros.",
          "Cuando el derrame es de causa desconocida, se distingue entre un <strong>exudado</strong> (proteínas altas; infección, neoplasia, autoinmune) y un <strong>trasudado</strong> y se estudia con citología, ADA y cultivos; un derrame hemorrágico sin trauma orienta a neoplasia o tuberculosis."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial: Pericarditis Aguda, Taponamiento y Pericarditis Constrictiva",
      "headers": [
        "Parámetro",
        "Pericarditis aguda",
        "Taponamiento cardíaco",
        "Pericarditis constrictiva"
      ],
      "rows": [
        [
          "Presión arterial",
          "Normal",
          "Hipotensión / shock",
          "Normal o baja"
        ],
        [
          "Yugulares",
          "Normales",
          "Ingurgitadas (onda x, sin y)",
          "Ingurgitadas, signo de Kussmaul (↑ en inspiración)"
        ],
        [
          "Ruidos cardíacos",
          "Frote pericárdico",
          "Apagados",
          "Knock pericárdico"
        ],
        [
          "Pulso",
          "Normal",
          "Paradojal (↓ PAS > 10 al inspirar)",
          "Puede haber paradojal leve"
        ],
        [
          "ECG",
          "SDST cóncavo difuso + infra PR",
          "Bajo voltaje + alternancia eléctrica",
          "Inespecífico; FA"
        ],
        [
          "Tratamiento",
          "AINE + colchicina",
          "Pericardiocentesis inmediata",
          "Pericardiectomía"
        ]
      ]
    },
    "vignette": "Mujer de 55 años con cáncer de pulmón, consulta por disnea intensa y decaimiento de 3 días. PA 85/50 mmHg, FC 118 lpm, FR 28/min, saturación 94%. Ingurgitación yugular hasta el ángulo mandibular a 90°, ruidos cardíacos muy apagados y campos pulmonares limpios. La presión sistólica cae 18 mmHg durante la inspiración. El ECG muestra bajo voltaje y complejos QRS que alternan de amplitud. El ecocardiograma de cabecera muestra un derrame pericárdico con colapso diastólico del ventrículo derecho y vena cava inferior dilatada.",
    "explicacion": "Es un taponamiento cardíaco neoplásico con tríada de Beck completa (hipotensión, ingurgitación yugular y ruidos apagados), pulso paradojal de 18 mmHg y alternancia eléctrica. La conducta es la pericardiocentesis evacuadora inmediata guiada por ecocardiografía, con un bolo de suero fisiológico mientras se prepara el procedimiento; se evitan los diuréticos, los vasodilatadores y la intubación con presión positiva. El líquido se envía a citología y cultivo, y se deja un catéter de drenaje y control ecocardiográfico, con evaluación de una ventana pericárdica si hay reacumulación.",
    "keyPoints": [
      "Taponamiento = shock obstructivo: líquido intrapericárdico a presión que comprime las cavidades derechas en diástole.",
      "Tríada de Beck: hipotensión, ingurgitación yugular y ruidos cardíacos apagados, con pulmones limpios.",
      "Pulso paradojal: caída de la PAS > 10 mmHg al inspirar (interdependencia ventricular); no confundir con el signo de Kussmaul.",
      "ECG: bajo voltaje y alternancia eléctrica; ecocardiograma: colapso diastólico de AD/VD y VCI dilatada.",
      "El examen que hace el diagnóstico es el ecocardiograma, que no debe retrasar el drenaje en el paciente inestable.",
      "Tratamiento: pericardiocentesis inmediata (subxifoidea, guiada por eco, con catéter) + volumen EV mientras se prepara.",
      "Evitar diuréticos, vasodilatadores y ventilación con presión positiva; en trauma o disección tipo A, cirugía.",
      "Causas: neoplasia, pericarditis, iatrogenia, trauma, rotura post-IAM y disección aórtica tipo A."
    ],
    "questions": [
      {
        "stem": "Un paciente con antecedente de ser fumador de 30 paquetes año, suspendido hace 5 años, consulta por un cuadro de 24 horas de disnea de mínimos esfuerzos, asociada a intolerancia al ejercicio y malestar general. Al examen físico su PA: 90/60 y su FC: 110x’. Además destacan yugulares ingurgitadas a 45 grados y ruidos cardíacos apagados a la auscultación. Su electrocardiograma muestra disminución difusa del voltaje. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "B",
            "text": "Neumotórax"
          },
          {
            "id": "C",
            "text": "Derrame pleural"
          },
          {
            "id": "D",
            "text": "Infarto agudo al miocardio"
          },
          {
            "id": "E",
            "text": "Taponamiento cardíaco"
          }
        ],
        "correcta": "E",
        "explicacion": "Disnea súbita con hipotensión (90/60), taquicardia, yugulares ingurgitadas, ruidos cardíacos apagados y bajo voltaje en el ECG es la tríada de Beck con bajo voltaje: taponamiento cardíaco. El tromboembolismo pulmonar no atenúa los ruidos cardíacos ni baja el voltaje, el neumotórax y el derrame pleural alteran el murmullo pulmonar y el infarto no produce esta combinación.",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 3"
      },
      {
        "stem": "Un paciente de 79 años, con antecedente de cáncer de pulmón en espera de tratamiento, presenta un cuadro de 5 días de malestar general, disnea y episodios de pérdida de conocimiento de pocos segundos de duración, con recuperación completa. El examen físico muestra presión arterial: 80/60 mmHg, frecuencia cardíaca: 110x’ regular, cuello con ingurgitación yugular a 50 grados. El examen pulmonar muestra murmullo pulmonar presente, sin otros ruidos agregados y la auscultación cardíaca es difícil de realizar, ya que los ruidos cardíacos se encuentran apagados. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "B",
            "text": "Taponamiento cardíaco"
          },
          {
            "id": "C",
            "text": "Derrame pleural"
          },
          {
            "id": "D",
            "text": "Síndrome de la vena cava superior"
          },
          {
            "id": "E",
            "text": "Insuficiencia tricuspídea"
          }
        ],
        "correcta": "B",
        "explicacion": "La hipotensión, la ingurgitación yugular y los síncopes en un paciente con cáncer de pulmón sugieren un tromboembolismo pulmonar, pero la disminución de la intensidad de los ruidos cardíacos orienta a un derrame pericárdico con taponamiento (frecuente en la neoplasia pulmonar). El derrame pleural y el síndrome de vena cava superior no explican los ruidos apagados y la hipotensión.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 136"
      },
      {
        "stem": "Mujer de 55 años con cáncer pulmonar consulta por disnea severa y decaimiento. Al examen: PA 85/50 mmHg, ingurgitación yugular hasta el ángulo mandibular, ruidos cardíacos muy apagados y una caída de 18 mmHg de la presión arterial sistólica durante la inspiración. ¿Cuál es el procedimiento de urgencia indicado?",
        "options": [
          {
            "id": "A",
            "text": "Pericardiocentesis evacuadora de urgencia"
          },
          {
            "id": "B",
            "text": "Administración de furosemida 80 mg endovenosa"
          },
          {
            "id": "C",
            "text": "Cardioversión eléctrica sincronizada"
          },
          {
            "id": "D",
            "text": "Instalación de marcapaso transitorio"
          },
          {
            "id": "E",
            "text": "Infusión de nitroglicerina a dosis altas"
          }
        ],
        "correcta": "A",
        "explicacion": "Taponamiento cardíaco neoplásico clásico (tríada de Beck y pulso paradojal de más de 10 mmHg). El único tratamiento salvavidas es la evacuación inmediata del líquido mediante pericardiocentesis; los diuréticos y los vasodilatadores empeoran el cuadro porque reducen la precarga.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "5.3§1 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-35",
    "classId": "cardio-35",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.7",
    "title": "Disección Aórtica Aguda",
    "perfilCode": "1.01.2.002, 1.01.4.002",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES",
    "reconstrucciones": "",
    "frecuencia": "Alta · Dolor desgarrante con asimetría de pulsos, soplo de insuficiencia aórtica, angioTAC, Stanford A (cirugía) versus B (médico) y betabloqueo antes que vasodilatadores",
    "svg": null,
    "algoTitle": "Algoritmo de diagnóstico y manejo de la disección aórtica aguda",
    "diagram": {
      "title": "Disección Aórtica: Sospechar, Controlar la Presión y Clasificar",
      "svg": "<svg viewBox=\"0 0 620 258\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar35\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar35)}\n  </style>\n  <path class=\"ln\" d=\"M310,46 V72\"/>\n  <path class=\"ln\" d=\"M310,122 V148\"/>\n  <path class=\"ln\" d=\"M310,186 V196 H162 V212\"/>\n  <text class=\"lbl\" x=\"166\" y=\"208\">Stanford A (aorta ascendente)</text>\n  <path class=\"ln\" d=\"M310,186 V196 H458 V212\"/>\n  <text class=\"lbl\" x=\"462\" y=\"208\">Stanford B (distal a la subclavia)</text>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Dolor torácico o dorsal súbito, desgarrante, máximo desde el inicio</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">HTA mal controlada · asimetría de pulsos o PA &gt; 20 mmHg · soplo diastólico nuevo · déficit neurológico</text>\n  <rect class=\"acc\" x=\"60\" y=\"72\" width=\"500\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"87\" text-anchor=\"middle\" font-weight=\"700\">Estabilizar ya: analgesia + betabloqueador EV</text>\n  <text class=\"accS\" x=\"310\" y=\"100\" text-anchor=\"middle\">Labetalol/esmolol: FC &lt; 60 · PAS 100-120 (nitroprusiato solo después)</text>\n  <text class=\"accS\" x=\"310\" y=\"112\" text-anchor=\"middle\">NO fibrinolizar · NO anticoagular</text>\n  <rect class=\"dec\" x=\"60\" y=\"148\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">AngioTAC de tórax, abdomen y pelvis con contraste</text>\n  <text class=\"sub\" x=\"310\" y=\"176\" text-anchor=\"middle\">Inestable: ecocardiograma transesofágico en pabellón</text>\n  <rect class=\"warn\" x=\"12\" y=\"212\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"162\" y=\"227\" text-anchor=\"middle\" font-weight=\"700\">CIRUGÍA DE EMERGENCIA</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"240\" text-anchor=\"middle\">Reemplazo de aorta ascendente; mortalidad 1-2% por hora</text>\n  <rect class=\"acc\" x=\"308\" y=\"212\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"458\" y=\"227\" text-anchor=\"middle\" font-weight=\"700\">MANEJO MÉDICO EN UCI</text>\n  <text class=\"accS\" x=\"458\" y=\"240\" text-anchor=\"middle\">TEVAR si hay malperfusión, rotura, dolor o HTA refractarios</text>\n</svg>"
    },
    "contexto": "La disección aórtica aguda mata a un paciente de cada cuatro en las primeras 24 horas si no se reconoce, y se confunde con el infarto: ambos son dolor torácico intenso con sudoración en un hipertenso. Por eso el error clásico es dar aspirina, heparina o fibrinolíticos a un paciente con una aorta abierta. El médico general debe sospecharla por el carácter del dolor, la asimetría de pulsos y el soplo diastólico nuevo, estabilizar con betabloqueo endovenoso, pedir el angioTAC y derivar a un centro con cirugía cardiovascular. El EUNACOM pregunta el diagnóstico clínico, el examen de elección, la clasificación de Stanford y la conducta en cada tipo.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología, factores de riesgo y síndrome aórtico agudo",
        "paragraphs": [
          "La pared aórtica tiene tres capas: <strong>íntima</strong> (endotelio), <strong>media</strong> (fibras elásticas y músculo liso, la que da la resistencia) y <strong>adventicia</strong>. La <strong>disección aórtica aguda</strong> comienza con un desgarro de la íntima que permite que la sangre a alta presión penetre en la media y la separe en dos, creando una <strong>falsa luz</strong> que se propaga a lo largo de la aorta, en general en dirección anterógrada y a veces retrógrada. El flap de la íntima separa la luz verdadera de la falsa, y puede obstruir las ramas aórticas (malperfusión), destruir la válvula aórtica o romper al pericardio o a la pleura. La disección se considera <strong>aguda</strong> en las primeras 2 semanas, subaguda hasta 3 meses y crónica después.",
          "El <strong>factor de riesgo principal es la hipertensión arterial mal controlada (presente en más del 70 a 75% de los casos)</strong>, que somete a la pared a un mayor estrés de cizallamiento (dP/dt) y acelera la degeneración de la media. Otros: la <strong>edad mayor de 60 años</strong> y el sexo masculino, enfermedades del tejido conectivo (<strong>síndrome de Marfan</strong>, Ehlers-Danlos vascular, síndrome de Loeys-Dietz), <strong>válvula aórtica bicúspide</strong>, <strong>coartación aórtica</strong>, síndrome de Turner, <strong>aneurisma aórtico previo</strong>, <strong>cocaína y anfetaminas</strong>, el embarazo (tercer trimestre y posparto, sobre todo en Marfan), el traumatismo torácico cerrado, la cirugía o cateterismo cardíaco previos y las aortitis (arteritis de Takayasu, de células gigantes, sífilis). En el <strong>joven con disección</strong>, se busca Marfan: talla alta, aracnodactilia, luxación del cristalino, pectus.",
          "La disección es una forma del <strong>síndrome aórtico agudo</strong>, que incluye además el <strong>hematoma intramural</strong> (sangrado en la media sin desgarro de la íntima) y la <strong>úlcera aórtica penetrante</strong>; las tres presentan un dolor similar y se manejan con los mismos principios, y el angioTAC las distingue."
        ]
      },
      {
        "subhead": "2. Clasificación: Stanford y DeBakey",
        "paragraphs": [
          "La <strong>clasificación de Stanford</strong> es la que decide la conducta: <strong>tipo A</strong> (cerca del 65%) <strong>compromete la aorta ascendente</strong>, con o sin extensión al arco o a la aorta descendente; <strong>tipo B</strong> (cerca del 35%) <strong>nace distal a la arteria subclavia izquierda y compromete exclusivamente la aorta descendente</strong>. La clasificación de DeBakey agrega la localización del desgarro: tipo I (ascendente y más allá), tipo II (solo la ascendente) y tipo III (solo la descendente); los tipos I y II son Stanford A y el tipo III es Stanford B. Una regla simple: <em>si hay compromiso de la aorta ascendente, es tipo A, venga de donde venga el desgarro</em>.",
          "La razón de la clasificación es el riesgo: la disección tipo A puede producir <strong>rotura al saco pericárdico con taponamiento cardíaco</strong>, <strong>insuficiencia aórtica aguda masiva</strong> (por pérdida del soporte comisural) y <strong>disección de las coronarias</strong> con infarto (casi siempre de la coronaria derecha: infarto inferior), y su mortalidad sin cirugía es de <strong>1 a 2% por cada hora</strong> durante las primeras 48 horas. La tipo B tiene mejor pronóstico con tratamiento médico, a menos que se complique."
        ]
      },
      {
        "subhead": "3. Presentación clínica: el dolor y los signos de compromiso de órganos",
        "paragraphs": [
          "El síntoma cardinal es un <strong>dolor torácico o interescapular de inicio súbito, lancinante, «desgarrante» o «transfixiante»</strong>, de <strong>máxima intensidad desde el primer segundo</strong> (a diferencia del infarto, que aumenta progresivamente), que puede <strong>migrar</strong> siguiendo la propagación de la disección: del tórax al dorso, y al abdomen y las piernas. La disección tipo A suele dar dolor anterior; la tipo B, dolor interescapular o lumbar. Hasta un 5 a 10% se presenta sin dolor (sobre todo con síncope o déficit neurológico).",
          "La clave diagnóstica es la <strong>diferencia de pulsos o de presión arterial entre ambos brazos (&gt; 20 mmHg)</strong>, un déficit de pulso, o la aparición de un <strong>soplo diastólico de insuficiencia aórtica nuevo</strong> (decrescendo, en el borde esternal izquierdo y paraesternal derecho, con pulso amplio). Las manifestaciones según el territorio comprometido: <strong>síncope</strong> (taponamiento, hipotensión), <strong>accidente cerebrovascular</strong> o déficit neurológico (compromiso de las carótidas), <strong>infarto del miocardio</strong> (coronaria derecha), <strong>isquemia de extremidades</strong> (pulsos disminuidos o frialdad, como el brazo izquierdo frío con pulso radial débil), <strong>isquemia mesentérica</strong> (dolor abdominal, lactato elevado), <strong>injuria renal aguda</strong> y <strong>paraplejia</strong> (compromiso de las arterias espinales). Un derrame pleural izquierdo o un hemotórax es signo de rotura.",
          "La <strong>presión arterial</strong> suele estar elevada (el paciente vive una descarga adrenérgica), pero la <strong>hipotensión</strong> indica una complicación grave: taponamiento, rotura o insuficiencia aórtica aguda. Una cifra baja en un brazo ocluido puede ser una pseudohipotensión, por lo que se mide en ambos brazos y se hace caso a la más alta. Los signos más específicos son el déficit de pulso, el soplo de insuficiencia aórtica y el déficit neurológico focal. Un <strong>ECG normal o inespecífico y una troponina negativa</strong> en un paciente con dolor intenso orientan más a disección que a infarto."
        ]
      },
      {
        "subhead": "4. Diagnóstico: probabilidad clínica, imágenes y el examen de elección",
        "paragraphs": [
          "La sospecha se ordena con el <strong>puntaje de riesgo de disección aórtica (ADD-RS)</strong>: se suma 1 punto por cada categoría presente: <strong>condiciones de alto riesgo</strong> (Marfan, historia familiar, valvulopatía aórtica, manipulación aórtica reciente, aneurisma torácico), <strong>características del dolor de alto riesgo</strong> (inicio súbito, intensidad severa, desgarrante) y <strong>hallazgos del examen de alto riesgo</strong> (déficit de pulso, diferencia de presión sistólica, déficit neurológico focal con dolor, soplo diastólico nuevo, hipotensión o shock). Con 0 puntos y un dímero D negativo (&lt; 500 ng/mL) se descarta; con 1 o más puntos se pide una imagen.",
          "El <strong>examen de elección es el angioTAC de tórax, abdomen y pelvis con contraste endovenoso</strong> (sensibilidad y especificidad mayores de 98%): muestra el flap intimal que separa la luz verdadera de la falsa, la extensión, el origen de las ramas, el hematoma y el derrame. En el nivel del médico general se debe saber indicarlo e <em>interpretar el informe</em>. En el paciente <strong>inestable</strong> que no puede ir a la TAC, el <strong>ecocardiograma transesofágico</strong> a la cabecera o en pabellón (alta sensibilidad, evalúa la válvula y el pericardio); el ecocardiograma transtorácico muestra la raíz aórtica dilatada, el flap en la ascendente, el derrame pericárdico y la insuficiencia aórtica, pero no descarta. La resonancia magnética es muy sensible pero poco práctica en la urgencia.",
          "La <strong>radiografía de tórax</strong> tiene mala sensibilidad: puede mostrar <strong>ensanchamiento del mediastino</strong> (&gt; 8 cm), pérdida del botón aórtico, desplazamiento de la calcificación de la íntima o derrame pleural izquierdo, pero un tórax normal no la descarta. El <strong>ECG</strong> es normal en 30% y puede mostrar signos de isquemia, hipertrofia o un infarto inferior si hay compromiso de la coronaria derecha: en ese caso, no se debe iniciar fibrinólisis. Con un <strong>angioTAC de tórax y abdomen</strong> se evalúa también el compromiso de las ramas abdominales, lo que explica que un paciente con dolor que migra al abdomen y pulsos femorales disminuidos se estudie con un angioTAC de tórax y abdomen y no con un ecocardiograma."
        ]
      },
      {
        "subhead": "5. Tratamiento inicial: controlar el dP/dt antes que la presión",
        "paragraphs": [
          "Todo paciente con sospecha fundada recibe, antes de confirmar el diagnóstico, <strong>monitorización continua</strong>, dos vías venosas, <strong>analgesia endovenosa</strong> (morfina; el dolor mantiene la descarga adrenérgica) y el control de la presión y de la frecuencia cardíaca. El objetivo hemodinámico es <strong>reducir el estrés de cizallamiento sobre la pared aórtica (dP/dt)</strong>: <strong>frecuencia cardíaca &lt; 60 lpm y presión arterial sistólica entre 100 y 120 mmHg</strong>, en menos de 20 minutos si es posible, siempre que se mantenga una perfusión adecuada de los órganos.",
          "La <strong>primera línea absoluta es un betabloqueador endovenoso</strong> (<strong>labetalol</strong> en bolo e infusión, o <strong>esmolol</strong> en infusión) que baja la contractilidad y la frecuencia. Solo <strong>después de lograr el betabloqueo</strong> se agrega un vasodilatador (<strong>nitroprusiato de sodio</strong> o nicardipino) si la presión sigue elevada: si se usa un vasodilatador solo, la taquicardia refleja aumenta el dP/dt y empeora la disección. En el paciente con contraindicación para betabloqueadores (asma grave, bloqueo AV) se usan verapamilo o diltiazem endovenosos. Se evita el exceso de líquidos y los inotrópicos. Si hay <strong>hipotensión</strong>, se busca la causa (taponamiento, insuficiencia aórtica aguda, rotura) y se trata con reposición moderada de volumen y cirugía urgente; no se baja la presión.",
          "<strong>Errores que el examen castiga:</strong> dar <strong>aspirina, heparina o fibrinolíticos</strong> por confundirla con un infarto (causan hemorragia intrapericárdica o aumentan la disección: la sospecha de disección es una contraindicación absoluta de fibrinólisis); pedir una coronariografía antes que un angioTAC; usar hidralazina o nifedipino (taquicardia refleja) o solo nitroprusiato; y retrasar el traslado esperando exámenes. El paciente inestable con sospecha de tipo A va directo a pabellón con ecocardiograma transesofágico."
        ]
      },
      {
        "subhead": "6. Tratamiento definitivo según Stanford y seguimiento",
        "paragraphs": [
          "<strong>Stanford tipo A: cirugía cardíaca de emergencia.</strong> Se reemplaza la aorta ascendente (con o sin la válvula aórtica y el arco) con un injerto de tubo; sin cirugía la mortalidad aumenta de 1 a 2% por hora y llega al 50% en la primera semana. Se hace aunque el paciente tenga accidente cerebrovascular o isquemia de órganos, que a veces mejoran con la reperfusión. Se deriva de inmediato a un centro con cirugía cardiovascular y se avisa al cirujano de turno antes de que llegue el paciente.",
          "<strong>Stanford tipo B no complicada: manejo médico en UCI de entrada</strong> (betabloqueo EV, analgesia y control de la presión, y luego pase a la vía oral con 3 a 4 fármacos). La <strong>cirugía endovascular (TEVAR, endoprótesis)</strong> se reserva para las <strong>complicaciones</strong>: dolor refractario, hipertensión incontrolable, rotura inminente o confirmada, <strong>malperfusión</strong> de órganos viscerales o de las extremidades, crecimiento rápido del diámetro aórtico. La cirugía abierta es hoy poco frecuente en la tipo B.",
          "Después del alta, todos los pacientes necesitan <strong>control estricto de la presión (&lt; 130/80 mmHg) con betabloqueador como pilar</strong>, abandonar el tabaco, evitar el ejercicio isométrico intenso, y <strong>seguimiento con angioTAC o resonancia al mes, a los 6 y 12 meses, y luego cada año</strong>, porque la aorta disecada se dilata. En el <strong>síndrome de Marfan</strong> se estudia a la familia (ecocardiograma y estudio genético), se usa betabloqueador o losartán para frenar la dilatación y se indica cirugía profiláctica de la raíz aórtica cuando el diámetro supera 4,5 a 5 cm. La mortalidad quirúrgica de la tipo A es del 15 al 25%."
        ]
      }
    ],
    "table": {
      "title": "Dolor Torácico Agudo: Disección Aórtica frente a Otras Causas Graves",
      "headers": [
        "Condición",
        "Dato clínico cardinal",
        "Examen de elección",
        "Conducta"
      ],
      "rows": [
        [
          "Disección Stanford A",
          "Dolor desgarrante, asimetría de pulsos, soplo de IAo",
          "AngioTAC de tórax, abdomen y pelvis",
          "Betabloqueo EV + cirugía de emergencia"
        ],
        [
          "Disección Stanford B",
          "Dolor interescapular migratorio",
          "AngioTAC",
          "Manejo médico en UCI (TEVAR si complicada)"
        ],
        [
          "SCACEST",
          "Opresivo, supradesnivel ST, troponina ↑",
          "ECG",
          "Reperfusión (nunca si hay sospecha de disección)"
        ],
        [
          "TEP",
          "Disnea, hipoxemia, factor de riesgo",
          "AngioTAC pulmonar",
          "Anticoagulación"
        ],
        [
          "Pericarditis",
          "Dolor posicional, frote, ECG difuso",
          "ECG, ecocardiograma",
          "AINE + colchicina"
        ],
        [
          "Rotura esofágica",
          "Vómitos previos, enfisema subcutáneo",
          "TAC con contraste oral",
          "Cirugía"
        ]
      ]
    },
    "vignette": "Hombre de 64 años, hipertenso mal controlado, ingresa a urgencias con dolor torácico anterior intenso y desgarrante de inicio brusco hace 45 minutos, irradiado a la espalda entre las escápulas. Sudoroso y pálido. PA brazo derecho 195/105 mmHg y brazo izquierdo 140/80 mmHg; FC 112 lpm. Se ausculta un soplo diastólico aspirativo nuevo en el borde esternal izquierdo. ECG con taquicardia sinusal sin supradesnivel; troponina negativa.",
    "explicacion": "Dolor desgarrante súbito con asimetría de presión arterial de 55 mmHg entre ambos brazos y un soplo de insuficiencia aórtica nuevo es una disección aórtica aguda, probablemente Stanford A (compromete la aorta ascendente y la válvula). La conducta: monitorización, analgesia y labetalol endovenoso de inmediato para FC < 60 y PAS 100-120 mmHg, sin aspirina, heparina ni fibrinolíticos; confirmar con angioTAC de tórax, abdomen y pelvis (o ecocardiograma transesofágico si se inestabiliza), y trasladar sin demora al cirujano cardiovascular para reemplazo quirúrgico urgente de la aorta ascendente.",
    "keyPoints": [
      "Dolor torácico/dorsal súbito, desgarrante y máximo desde el inicio, con diferencia de presión > 20 mmHg entre brazos o soplo diastólico nuevo.",
      "Factor de riesgo principal: HTA mal controlada; también Marfan, bicúspide, coartación, embarazo, cocaína.",
      "Examen de elección: angioTAC de tórax, abdomen y pelvis; ecocardiograma transesofágico si hay inestabilidad.",
      "Stanford A (aorta ascendente): cirugía de emergencia. Stanford B (distal a subclavia): tratamiento médico en UCI; TEVAR si hay complicaciones.",
      "Meta hemodinámica: FC < 60 y PAS 100-120 en < 20 min; betabloqueador EV (labetalol/esmolol) primero y nitroprusiato después.",
      "No dar aspirina, heparina ni fibrinolíticos: la sospecha de disección contraindica la fibrinólisis.",
      "Tipo A puede complicarse con taponamiento, insuficiencia aórtica aguda masiva e infarto inferior.",
      "Seguimiento con angioTAC o RM al mes, 6 y 12 meses; PA < 130/80 y betabloqueador de por vida."
    ],
    "questions": [
      {
        "stem": "Paciente masculino de 55 años con dolor torácico desgarrador de inicio súbito, irradiado a la espalda. TA en brazo derecho 185/100 y en brazo izquierdo 140/80. TC: disección de aorta tipo B de Stanford. ¿Cuál es el manejo inicial?",
        "options": [
          {
            "id": "A",
            "text": "Manejo médico: control de frecuencia cardíaca y presión arterial"
          },
          {
            "id": "B",
            "text": "Cirugía de emergencia"
          },
          {
            "id": "C",
            "text": "Trombólisis sistémica"
          },
          {
            "id": "D",
            "text": "Endoprótesis aórtica de urgencia"
          },
          {
            "id": "E",
            "text": "Anticoagulación con heparina EV"
          }
        ],
        "correcta": "A",
        "explicacion": "La disección tipo B de Stanford no compromete la aorta ascendente: el manejo inicial es médico, con control de la frecuencia cardíaca (< 60 lpm) y de la presión sistólica (100-120 mmHg) con un betabloqueador endovenoso. La cirugía y la endoprótesis se reservan para las complicaciones (malperfusión, rotura, dolor refractario); la trombólisis y la heparina están contraindicadas.",
        "recTag": "EUNACOM Julio 2025 · Pregunta 22"
      },
      {
        "stem": "Un paciente de 70 años, con antecedente de hipertensión, en tratamiento con losartán e hidroclorotiazida, consulta por dolor torácico, EVA 9/10, irradiado a dorso, asociado a malestar general y sudoración. Al examen físico tiene FC: 110x’, PA: 170/110 mmHg, examen pulmonar con crépitos escasos bibasales y examen cardíaco con choque de la punta no desplazado y auscultación con ritmo regular, en dos tiempos, con presencia de un soplo cardíaco diastólico aspirativo, de intensidad IV/VI, de ubicación paraesternal derecho. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Neumotórax"
          },
          {
            "id": "B",
            "text": "Aneurisma de la aorta ascendente"
          },
          {
            "id": "C",
            "text": "Infarto miocárdico con rotura del músculo papilar"
          },
          {
            "id": "D",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "E",
            "text": "Disección aórtica tipo A"
          }
        ],
        "correcta": "E",
        "explicacion": "Dolor torácico irradiado al dorso en un hipertenso, con un soplo diastólico aspirativo (insuficiencia aórtica) es una disección aórtica; como la válvula aórtica está comprometida, la disección involucra la aorta ascendente: es tipo A (cirugía de urgencia). La rotura de un músculo papilar produce un soplo sistólico, no diastólico.",
        "recTag": "EUNACOM Diciembre 2019 · Pregunta 12"
      },
      {
        "stem": "Un paciente de 60 años, con antecedente de hipertensión arterial e hipotiroidismo, en tratamiento con enalapril y levotiroxina, consulta por dolor torácico intenso, que inició hace 22 horas, inicialmente con EVA 9/10, que se irradiaba al dorso y posteriormente al abdomen. Tomó analgésicos y el dolor disminuyó de intensidad, sin embargo, persiste 5/10, por lo que decidió consultar. Al examen físico, tiene FC: 98x’, PA: 170/112 mmHg, pulsos de extremidades superiores conservados y disminución de los pulsos de las extremidades inferiores; examen cardíaco muestra ritmo regular en dos tiempos, sin soplos y examen pulmonar con murmullo vesicular presenta y simétrico, sin ruidos agregados. Se solicita electrocardiograma que muestra una taquicardia sinusal. ¿Cuál es el examen más adecuado para proseguir el estudio?",
        "options": [
          {
            "id": "A",
            "text": "Ecocardiograma transtorácico"
          },
          {
            "id": "B",
            "text": "Angiografía coronaria"
          },
          {
            "id": "C",
            "text": "AngioTAC de tórax y abdomen"
          },
          {
            "id": "D",
            "text": "Radiografía de tórax"
          },
          {
            "id": "E",
            "text": "Troponinas plasmáticas"
          }
        ],
        "correcta": "C",
        "explicacion": "Dolor intenso que migra del tórax al abdomen, presión elevada y pulsos disminuidos de las extremidades inferiores indican una disección que se extiende hacia la aorta abdominal; el examen de elección es el angioTAC de tórax y abdomen, que define la extensión y las ramas comprometidas. El ecocardiograma transtorácico, la coronariografía y la troponina no hacen el diagnóstico.",
        "recTag": "EUNACOM Diciembre 2022 · Pregunta 180"
      },
      {
        "stem": "Un paciente de 69 años, con antecedente de hipertensión y diabetes, consulta por dolor torácico intenso EVA 10/10, de carácter lancinante y que se irradia a cuello y dorso. A lo anterior se agregó dolor intenso en la extremidad superior izquierda. Al examen físico tiene FC: 120x’, PA: 200/140 mmHg, ritmo regular en dos tiempos, sin soplos, murmullo pulmonar bilateral conservado, sin otros ruidos, extremidad superior izquierda con disminución del pulso radial y frialdad de la mano. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Pericarditis aguda"
          },
          {
            "id": "B",
            "text": "Disección aórtica"
          },
          {
            "id": "C",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "D",
            "text": "Infarto agudo al miocardio"
          },
          {
            "id": "E",
            "text": "Embolias cardíacas"
          }
        ],
        "correcta": "B",
        "explicacion": "Dolor lancinante irradiado a cuello y dorso, presión de 200/140 y un brazo con pulso radial disminuido y frialdad (compromiso de la arteria subclavia o del tronco braquiocefálico) es una disección aórtica. El infarto no produce déficit de pulso ni asimetría, la pericarditis cursa con dolor posicional y el tromboembolismo pulmonar con disnea e hipoxemia.",
        "recTag": "EUNACOM Diciembre 2022 · Pregunta 98"
      },
      {
        "stem": "Hombre de 59 años, hipertenso, ingresa con dolor torácico retroesternal transfixiante irradiado a la espalda. El angioTAC confirma una disección aórtica que compromete la aorta ascendente y se extiende hasta el arco (Stanford A). ¿Cuál es el tratamiento definitivo de elección?",
        "options": [
          {
            "id": "A",
            "text": "Cirugía cardíaca de reemplazo aórtico de urgencia inmediata"
          },
          {
            "id": "B",
            "text": "Manejo médico conservador exclusivo en UCI con betabloqueadores"
          },
          {
            "id": "C",
            "text": "Fibrinólisis endovenosa con tenecteplase"
          },
          {
            "id": "D",
            "text": "Implante de stent aórtico percutáneo electivo en 1 mes"
          },
          {
            "id": "E",
            "text": "Anticoagulación con heparina no fraccionada en infusión"
          }
        ],
        "correcta": "A",
        "explicacion": "Toda disección Stanford A es una emergencia quirúrgica: se opera de inmediato para reemplazar la aorta ascendente y evitar la muerte por rotura intrapericárdica con taponamiento, infarto o insuficiencia aórtica aguda masiva. El betabloqueo es el tratamiento previo, no el definitivo; la fibrinólisis y la heparina están contraindicadas.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "5.4§0 · 5.4§1 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-36",
    "classId": "cardio-36",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.8",
    "title": "Aneurisma de Aorta Abdominal",
    "perfilCode": "4.01.2.022",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES",
    "reconstrucciones": "",
    "frecuencia": "Alta · Masa pulsátil, ecografía, umbral quirúrgico de 5,5 cm, crecimiento rápido, rotura y su manejo de urgencia",
    "svg": null,
    "algoTitle": "Aneurisma de aorta abdominal: medición y criterios de cirugía",
    "diagram": {
      "title": "Aneurisma de Aorta Abdominal: Medir, Vigilar o Reparar",
      "svg": "<svg viewBox=\"0 0 620 270\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar36\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar36)}\n  </style>\n  <path class=\"ln\" d=\"M310,46 V72\"/>\n  <path class=\"ln\" d=\"M310,110 V120 H162 V136\"/>\n  <text class=\"lbl\" x=\"166\" y=\"132\">Sí</text>\n  <path class=\"ln\" d=\"M310,110 V120 H458 V136\"/>\n  <text class=\"lbl\" x=\"462\" y=\"132\">No</text>\n  <path class=\"ln\" d=\"M162,186 V212\"/>\n  <text class=\"lbl\" x=\"168\" y=\"202\">Sí</text>\n  <path class=\"ln\" d=\"M458,186 V212\"/>\n  <text class=\"lbl\" x=\"464\" y=\"202\">No</text>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Aneurisma de aorta abdominal: dilatación ≥ 3,0 cm (o &gt; 50% del diámetro normal)</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">Varón &gt; 65 años, fumador, hipertenso · masa pulsátil expansiva indolora · ecografía abdominal</text>\n  <rect class=\"dec\" x=\"60\" y=\"72\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"87\" text-anchor=\"middle\" font-weight=\"700\">¿Síntomas o signos de rotura?</text>\n  <text class=\"sub\" x=\"310\" y=\"100\" text-anchor=\"middle\">Dolor abdominal o lumbar súbito + masa pulsátil + hipotensión</text>\n  <rect class=\"warn\" x=\"12\" y=\"136\" width=\"300\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"162\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">ROTURA: emergencia quirúrgica</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"164\" text-anchor=\"middle\">Hipotensión permisiva, evitar sobrecarga de volumen, angioTAC si estable</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"176\" text-anchor=\"middle\">Laparotomía o EVAR urgente; mortalidad &gt; 50%</text>\n  <rect class=\"dec\" x=\"308\" y=\"136\" width=\"300\" height=\"50\" rx=\"3\"/>\n  <text class=\"t\" x=\"458\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">¿≥ 5,5 cm (mujer ≥ 5,0), crece o duele?</text>\n  <text class=\"sub\" x=\"458\" y=\"164\" text-anchor=\"middle\">Crece &gt; 0,5 cm en 6 meses · sintomático · sacular</text>\n  <rect class=\"acc\" x=\"12\" y=\"212\" width=\"300\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"162\" y=\"227\" text-anchor=\"middle\" font-weight=\"700\">Reparación electiva: EVAR o cirugía abierta</text>\n  <text class=\"accS\" x=\"162\" y=\"240\" text-anchor=\"middle\">Derivar a cirugía vascular</text>\n  <rect class=\"b\" x=\"308\" y=\"212\" width=\"300\" height=\"50\" rx=\"3\"/>\n  <text class=\"t\" x=\"458\" y=\"227\" text-anchor=\"middle\" font-weight=\"700\">Vigilancia ecográfica según tamaño</text>\n  <text class=\"sub\" x=\"458\" y=\"240\" text-anchor=\"middle\">3,0-3,9: 3 años · 4,0-4,9: 1 año · 5,0-5,4: 6 meses</text>\n  <text class=\"sub\" x=\"458\" y=\"252\" text-anchor=\"middle\">Control de PA, estatina, no fumar</text>\n</svg>"
    },
    "contexto": "El aneurisma de aorta abdominal es la «bomba de tiempo» silenciosa del varón mayor fumador: casi nunca da síntomas hasta que se rompe, y la rotura mata a más de la mitad de los pacientes antes de que lleguen al quirófano. Se descubre por una ecografía pedida por otra razón o por una masa pulsátil palpada en el examen abdominal. Lo que el médico general necesita saber es cuándo sospecharlo, que la ecografía abdominal lo confirma, el diámetro que obliga a operar (5,5 cm en el hombre), el crecimiento que lo precipita y la tríada de la rotura, que es una emergencia quirúrgica. El EUNACOM pregunta estos umbrales casi textualmente.",
    "contentSections": [
      {
        "subhead": "1. Definición, fisiopatología y factores de riesgo",
        "paragraphs": [
          "Un <strong>aneurisma de aorta abdominal (AAA)</strong> es una <strong>dilatación focal y permanente de la aorta abdominal con un diámetro ≥ 3,0 cm</strong> (o más del 50% del diámetro normal del segmento vecino, que es de 2 cm en el hombre y algo menos en la mujer), localizada en más del 90% de los casos en la porción <strong>infrarrenal</strong>. Es <strong>verdadero</strong> si compromete las tres capas de la pared; el <strong>pseudoaneurisma</strong> (falso) es un hematoma contenido por la adventicia tras un trauma o una anastomosis.",
          "La aorta infrarrenal tiene menos fibras elásticas y menos vasa vasorum que la torácica, y está sometida a mayor presión y a reflexión de las ondas del pulso. La <strong>degeneración de la media</strong> por <strong>aterosclerosis</strong>, inflamación crónica y activación de metaloproteinasas destruye la elastina y el colágeno. Una vez dilatada, la <strong>ley de Laplace</strong> (la tensión de la pared es proporcional al radio y a la presión) hace que cada aumento de diámetro aumente la tensión, y la dilatación se acelera: por eso el <strong>riesgo de rotura crece rápidamente con el tamaño</strong> (menos de 1% por año bajo 5 cm; 5 a 10% por año entre 5,5 y 6,9 cm; 20 a 40% por año sobre 7 cm).",
          "Los <strong>factores de riesgo</strong> son: <strong>sexo masculino, edad mayor de 65 años, tabaquismo (el más importante: aumenta el riesgo hasta 5 veces)</strong>, hipertensión arterial, dislipidemia, enfermedad coronaria y vascular periférica, historia familiar de AAA, EPOC y la <strong>enfermedad renal poliquística del adulto</strong> (se asocia a aneurismas aórticos y cerebrales). Las mujeres tienen menos aneurismas, pero se rompen con diámetros menores y con peor pronóstico. Otras etiologías son el síndrome de Marfan y Ehlers-Danlos, la aortitis y el aneurisma micótico (infeccioso) en bacteriemia por Salmonella o estafilococos."
        ]
      },
      {
        "subhead": "2. Clínica y diagnóstico",
        "paragraphs": [
          "En la gran mayoría, el AAA es <strong>asintomático</strong> y se descubre como un hallazgo en una ecografía, una TAC o una radiografía de columna lumbar (calcificación en «cáscara de huevo» de la pared). El examen físico puede mostrar una <strong>masa pulsátil, expansiva e indolora, en el epigastrio o el mesogastrio</strong>, con latido transmitido; la palpación tiene baja sensibilidad en los aneurismas pequeños y en los obesos. Una masa pulsátil sensible a la palpación o un dolor abdominal inexplicado son signos de alarma. El AAA puede además asociarse a aneurismas poplíteos o femorales (que deben buscarse en el examen).",
          "El <strong>método de tamizaje, diagnóstico y seguimiento de elección es la ecografía abdominal</strong> (sensibilidad cercana a 100% y especificidad de 96 a 98%), rápida y sin radiación, y que mide el diámetro anteroposterior máximo. Un ejemplo clásico del examen: un paciente de 77 años, diabético e hipertenso, con dolor abdominal inespecífico de 2 meses y un tumor pulsátil de 4 a 5 cm en la zona umbilical, sin signos peritoneales, tiene un AAA. El <strong>angioTAC de aorta</strong> se solicita para planificar la reparación (diámetro, cuello, relación con las arterias renales e ilíacas) o ante la sospecha de rotura en un paciente estable; la resonancia es una alternativa en la insuficiencia renal.",
          "Se recomienda el <strong>tamizaje con una ecografía única</strong> en los <strong>varones de 65 a 75 años con antecedente de tabaquismo</strong> (reduce la mortalidad por AAA); en los varones que nunca han fumado se considera de forma selectiva, y en las mujeres solo si hay antecedentes familiares o tabaquismo intenso. También se hace tamizaje a los hermanos de un paciente con AAA."
        ]
      },
      {
        "subhead": "3. Vigilancia y tratamiento médico",
        "paragraphs": [
          "Mientras no se cumpla el criterio de reparación, el aneurisma se vigila con ecografía a intervalos según el diámetro: <strong>3,0 a 3,9 cm, cada 3 años; 4,0 a 4,9 cm, cada 12 meses; 5,0 a 5,4 cm, cada 6 meses</strong>. Lo que se persigue es detectar el crecimiento (los aneurismas crecen en promedio 1 a 3 mm por año, y más rápido los grandes y los de los fumadores).",
          "El tratamiento médico busca reducir el crecimiento y el riesgo cardiovascular: <strong>dejar de fumar</strong> (el aporte más efectivo), <strong>control estricto de la presión arterial</strong>, <strong>estatina</strong> y <strong>aspirina</strong> en prevención cardiovascular, actividad física moderada y evitar los esfuerzos isométricos muy intensos. Los <strong>betabloqueadores</strong> no han demostrado reducir el crecimiento en forma consistente; las <strong>fluoroquinolonas</strong> se evitan porque se asocian a aneurismas y disecciones. El paciente se educa para consultar de inmediato ante un dolor abdominal, lumbar o de la ingle de inicio brusco."
        ]
      },
      {
        "subhead": "4. Indicaciones de reparación: cuándo operar",
        "paragraphs": [
          "La reparación (quirúrgica abierta o endovascular) se indica cuando el riesgo de rotura supera el riesgo del procedimiento (mortalidad operatoria de 1 a 5% en el EVAR y de 3 a 5% en la cirugía abierta electiva):",
          "1) <strong>Diámetro máximo ≥ 5,5 cm en los hombres</strong> (o <strong>≥ 5,0 cm en las mujeres</strong>).",
          "2) <strong>Crecimiento rápido documentado: expansión mayor de 0,5 cm en 6 meses</strong> (o mayor de 1,0 cm en un año).",
          "3) <strong>Cualquier aneurisma sintomático</strong> (dolor lumbar o abdominal continuo, que indica expansión o rotura inminente), aunque el diámetro sea menor.",
          "4) Aneurisma <strong>sacular</strong>, <strong>infeccioso (micótico)</strong>, inflamatorio complicado, o con embolización distal.",
          "Un paciente de 68 años, fumador y asintomático, con un AAA infrarrenal de 5,8 cm cumple el criterio de diámetro: se deriva a <strong>cirugía vascular</strong> para reparación. El control anual, la anticoagulación con warfarina o las estatinas solas no son alternativas a un aneurisma por sobre el umbral.",
          "Las dos opciones de reparación son la <strong>cirugía abierta</strong> (laparotomía, clampeo aórtico e injerto de tubo o bifurcado) y el <strong>EVAR (reparación endovascular)</strong>, con una endoprótesis liberada desde las arterias femorales. El EVAR tiene menor mortalidad y menor estadía hospitalaria en el período perioperatorio, pero exige una anatomía adecuada (cuello suficiente bajo las renales), vigilancia de por vida con imágenes por el riesgo de <strong>endofuga (endoleak)</strong> y reintervenciones; la cirugía abierta se prefiere en el paciente joven con buena reserva y en la anatomía desfavorable."
        ]
      },
      {
        "subhead": "5. Rotura del aneurisma: la emergencia",
        "paragraphs": [
          "La rotura del AAA es una de las emergencias quirúrgicas de mayor mortalidad (cerca de 80 a 90% en total, con la mitad de los pacientes falleciendo antes de llegar al hospital). Se presenta con la <strong>tríada clásica: dolor abdominal o lumbar súbito e intenso, masa abdominal pulsátil e hipotensión o shock hipovolémico</strong> (completa solo en una minoría). El dolor puede irradiarse al dorso, el flanco, la ingle o el testículo, y se confunde con un cólico renal, una diverticulitis, una pancreatitis o un infarto mesentérico; el cuadro de un paciente mayor con dolor epigástrico intenso, hipotensión, taquicardia y una masa abdominal debe llevar a pensar en AAA roto, y la ecografía abdominal de urgencia al lado de la cama confirma el aneurisma y el líquido libre (por ejemplo, en un paciente de 41 años con enfermedad renal poliquística y un cuadro de dolor epigástrico, hipotensión y masas palpables, el examen inicial es la ecografía abdominal).",
          "El sangrado habitualmente se contiene en el retroperitoneo, lo que da una breve ventana de tiempo. El manejo es <strong>quirúrgico de emergencia</strong>: <strong>laparotomía con control proximal de la aorta, o EVAR de urgencia</strong> si la anatomía lo permite. Mientras se prepara el quirófano: <strong>hipotensión permisiva</strong> (PAS 70 a 90 mmHg, mientras mantenga la conciencia), <strong>evitar la sobrecarga de volumen</strong> y el exceso de cristaloides (que aumentan el sangrado y la coagulopatía), hemoderivados en transfusión masiva con la relación 1:1:1, vías de grueso calibre y aviso inmediato al cirujano vascular. Si el paciente está estable puede hacerse un angioTAC; si está inestable, no se pierde tiempo: va a pabellón.",
          "Otras complicaciones del aneurisma: <strong>embolización distal</strong> de trombo mural (síndrome del dedo azul), <strong>trombosis aórtica</strong>, <strong>fístula aortoentérica</strong> (sangrado digestivo masivo en un paciente con injerto aórtico previo) o <strong>aortocava</strong> (insuficiencia cardíaca de gasto alto con soplo continuo), y compresión de estructuras vecinas. El <strong>aneurisma inflamatorio</strong> se asocia a fibrosis retroperitoneal."
        ]
      },
      {
        "subhead": "6. Después de la reparación y errores frecuentes",
        "paragraphs": [
          "Antes de una reparación electiva se hace una <strong>evaluación del riesgo cardiovascular</strong> (los pacientes con AAA tienen enfermedad coronaria asociada en más de la mitad de los casos), de la función renal (el contraste del angioTAC y el clampeo aórtico la afectan) y de la función respiratoria. Después del EVAR se controla con <strong>angioTAC o eco-Doppler al mes y a los 12 meses, y luego anualmente</strong>, buscando endofugas, migración de la endoprótesis y crecimiento del saco; después de la cirugía abierta el control es más espaciado. La complicación más temida de la cirugía abierta es la isquemia colónica y la insuficiencia renal; la del EVAR, la endofuga tipo II (flujo retrógrado por lumbares o mesentérica inferior).",
          "Errores que se preguntan: <strong>1) confundir el AAA con la disección aórtica</strong>: el aneurisma es una dilatación crónica, habitualmente asintomática y con masa pulsátil; la disección es un cuadro agudo y desgarrante del tórax (Tema 5.7); <strong>2) vigilar con ecografía anual un aneurisma de 5,5 cm o más</strong>; <strong>3) anticoagular</strong>: el trombo mural no se trata con anticoagulantes; <strong>4) palpar enérgicamente</strong> una masa pulsátil dolorosa; <strong>5) sobrecargar de volumen</strong> a un paciente con rotura. La indicación de operar se basa en el diámetro, el crecimiento y los síntomas, y no en la edad por sí sola."
        ]
      }
    ],
    "table": {
      "title": "Aneurisma de Aorta Abdominal: Tamaño, Riesgo de Rotura y Conducta",
      "headers": [
        "Diámetro / situación",
        "Riesgo anual de rotura",
        "Conducta"
      ],
      "rows": [
        [
          "3,0-3,9 cm",
          "Muy bajo (< 0,5%)",
          "Ecografía cada 3 años; control de factores de riesgo"
        ],
        [
          "4,0-4,9 cm",
          "0,5-1,5%",
          "Ecografía cada 12 meses"
        ],
        [
          "5,0-5,4 cm",
          "1-5%",
          "Ecografía cada 6 meses (reparar si mujer)"
        ],
        [
          "≥ 5,5 cm (hombre) / ≥ 5,0 cm (mujer)",
          "5-20%",
          "Reparación electiva: EVAR o cirugía abierta"
        ],
        [
          "Crecimiento > 0,5 cm en 6 meses o > 1 cm/año",
          "Alto",
          "Reparación aunque sea < 5,5 cm"
        ],
        [
          "Sintomático (dolor lumbar o abdominal)",
          "Rotura inminente",
          "Reparación urgente"
        ],
        [
          "Rotura (dolor + masa pulsátil + shock)",
          "—",
          "Cirugía de emergencia; hipotensión permisiva"
        ]
      ]
    },
    "vignette": "Hombre de 68 años, fumador de 40 paquetes-año, hipertenso, asintomático. En un control se palpa una masa pulsátil, expansiva e indolora en el mesogastrio. La ecografía abdominal muestra un aneurisma infrarrenal de 5,8 cm de diámetro anteroposterior máximo, con trombo mural, sin signos de rotura. PA 150/90 mmHg.",
    "explicacion": "El diámetro de 5,8 cm supera el umbral de reparación en el hombre (≥ 5,5 cm), por lo que está indicada la reparación electiva con EVAR o cirugía abierta: se deriva a cirugía vascular, con un angioTAC para planificar el procedimiento. Mientras tanto se indican abstención de tabaco, control estricto de la presión, estatina y aspirina, y se educa sobre los signos de alarma (dolor abdominal o lumbar súbito) que obligan a consultar a un servicio de urgencia. El control ecográfico anual, la warfarina o las estatinas solas no corresponden a un aneurisma de este tamaño.",
    "keyPoints": [
      "AAA: dilatación ≥ 3,0 cm de la aorta abdominal, infrarrenal en > 90%; predomina en el varón > 65 años fumador.",
      "Clínica: casi siempre asintomático; masa pulsátil, expansiva e indolora en epigastrio o mesogastrio.",
      "Tamizaje, diagnóstico y seguimiento: ecografía abdominal (sensibilidad > 95%); angioTAC para planificar la reparación.",
      "Se repara si el diámetro es ≥ 5,5 cm (hombre) o ≥ 5,0 cm (mujer), crece > 0,5 cm en 6 meses (> 1 cm/año) o es sintomático.",
      "Vigilancia: 3-3,9 cm cada 3 años; 4-4,9 cm cada año; 5-5,4 cm cada 6 meses.",
      "Rotura: dolor abdominal o lumbar súbito + masa pulsátil + shock: cirugía de emergencia con hipotensión permisiva.",
      "EVAR: menor mortalidad perioperatoria, pero requiere vigilancia de por vida (endofuga).",
      "Dejar de fumar es la medida más importante; evitar fluoroquinolonas; se asocia a poliquistosis renal."
    ],
    "questions": [
      {
        "stem": "Un paciente de 77 años, con antecedente de diabetes mellitus tipo 2 e hipertesión arterial, consulta por dolor abdominal de tipo inespecífico, de 2 meses de evolución, sin otros síntomas. En su examen físico se palpa un tumor abdominal de 4 a 5 cm de diámetro, en la zona umbilical, pulsátil, sin signos peritoneales. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Trombosis mesentérica"
          },
          {
            "id": "B",
            "text": "Tumor de colon"
          },
          {
            "id": "C",
            "text": "Tumor de páncreas"
          },
          {
            "id": "D",
            "text": "Disección aórtica"
          },
          {
            "id": "E",
            "text": "Aneurisma aórtico abdominal"
          }
        ],
        "correcta": "E",
        "explicacion": "Un tumor pulsátil de 4 a 5 cm en la zona umbilical en un anciano hipertenso y diabético, con dolor abdominal inespecífico de meses, es un aneurisma aórtico abdominal. La disección aórtica es un cuadro agudo, y los tumores de colon o páncreas no son pulsátiles; la trombosis mesentérica se presenta con dolor agudo y signos peritoneales.",
        "recTag": "EUNACOM Julio 2017 · Pregunta 65"
      },
      {
        "stem": "Un paciente de 41 años, con antecedente de riñón poliquístico del adulto, acude al servicio de urgencia por dolor epigástrico intenso asociado a malestar general. Al examen físico presenta frecuencia cardíaca 105 por minuto, presión arterial 90/60 mmHg, temperatura 36,2 °C y examen abdominal con abdomen depresible, con presencia de signos peritoneales esbozados en abdomen superior. Se palpan masas en ambos flancos y en el epigastrio. Se solicitan exámenes de laboratorio que muestran amilasa 160 U/L (valor normal 60 - 140 U/L), glicemia 110 mg/dL, GOT 50 U/L, creatinina: 2,5 mg/dL, BUN: 48 mg/dL y troponinas negativas. ¿Cuál es el examen imagenológico de elección para iniciar el estudio en este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Ecografía abdominal"
          },
          {
            "id": "B",
            "text": "PieloTAC"
          },
          {
            "id": "C",
            "text": "UroTAC"
          },
          {
            "id": "D",
            "text": "Ecocardiografía transesofágica"
          },
          {
            "id": "E",
            "text": "Resonancia magnética nuclear de abdomen"
          }
        ],
        "correcta": "A",
        "explicacion": "Dolor epigástrico intenso con hipotensión, taquicardia, signos peritoneales y masas palpables en un paciente con riñón poliquístico del adulto (que se asocia a aneurismas aórticos) sugiere un aneurisma de aorta abdominal complicado. El examen de elección para iniciar el estudio, rápido y a la cabecera, es la ecografía abdominal; en el paciente estable el angioTAC la complementa.",
        "recTag": "EUNACOM Diciembre 2025 · Pregunta 86"
      },
      {
        "stem": "Hombre de 68 años fumador, asintomático, es derivado por el hallazgo ecográfico de un aneurisma de aorta abdominal infrarrenal de 5,8 cm de diámetro transversal máximo. ¿Cuál es la conducta médica indicada?",
        "options": [
          {
            "id": "A",
            "text": "Derivación a cirugía vascular para reparación quirúrgica o endovascular (EVAR)"
          },
          {
            "id": "B",
            "text": "Control ecográfico anual para vigilar el crecimiento"
          },
          {
            "id": "C",
            "text": "Iniciar anticoagulación oral con warfarina"
          },
          {
            "id": "D",
            "text": "Indicar reposo en cama permanente"
          },
          {
            "id": "E",
            "text": "Tratamiento con dosis altas de estatinas sin intervención"
          }
        ],
        "correcta": "A",
        "explicacion": "El umbral de reparación del aneurisma de aorta abdominal es ≥ 5,5 cm en el hombre (≥ 5,0 cm en la mujer), porque sobre ese tamaño el riesgo anual de rotura supera el riesgo del procedimiento. Se deriva a cirugía vascular para reparación abierta o endovascular (EVAR).",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "5.4§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-37",
    "classId": "cardio-37",
    "tier": 3,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.9",
    "title": "Tromboembolismo Pulmonar",
    "perfilCode": "1.01.1.006, 1.05.2.005, 1.01.4.002",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Probabilidad pretest (Wells), dímero D, angioTAC, estratificación de riesgo, trombólisis en el TEP masivo y anticoagulación con DOAC",
    "svg": null,
    "algoTitle": "Algoritmo diagnóstico y estratificación terapéutica del TEP agudo",
    "diagram": {
      "title": "Tromboembolismo Pulmonar: Sospechar, Confirmar y Estratificar",
      "svg": "<svg viewBox=\"0 0 620 346\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar37\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar37)}\n  </style>\n  <path class=\"ln\" d=\"M310,58 V84\"/>\n  <path class=\"ln\" d=\"M310,122 V132 H162 V148\"/>\n  <text class=\"lbl\" x=\"166\" y=\"144\">Sí</text>\n  <path class=\"ln\" d=\"M310,122 V132 H458 V148\"/>\n  <text class=\"lbl\" x=\"462\" y=\"144\">No</text>\n  <path class=\"ln\" d=\"M162,210 V224 H310 V236\"/>\n  <path class=\"ln\" d=\"M458,210 V224 H310 V236\"/>\n  <path class=\"ln\" d=\"M310,274 V300\"/>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"50\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de TEP: disnea súbita, dolor pleurítico, taquicardia</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">Síncope o factor de riesgo · O₂ si SatO₂ &lt; 90% · ECG</text>\n  <text class=\"sub\" x=\"310\" y=\"48\" text-anchor=\"middle\">Anticoagular de inmediato si la sospecha es alta</text>\n  <rect class=\"dec\" x=\"60\" y=\"84\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"99\" text-anchor=\"middle\" font-weight=\"700\">¿Inestabilidad hemodinámica? (PAS &lt; 90 mmHg, shock, vasopresores)</text>\n  <text class=\"sub\" x=\"310\" y=\"112\" text-anchor=\"middle\">Tabla 5.9.A: riesgo alto = TEP masivo</text>\n  <rect class=\"warn\" x=\"12\" y=\"148\" width=\"300\" height=\"62\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"162\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">TEP de alto riesgo</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"176\" text-anchor=\"middle\">Ecocardiograma a la cabecera (VD dilatado)</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"188\" text-anchor=\"middle\">Heparina no fraccionada + trombólisis (alteplasa 100 mg en 2 h)</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"200\" text-anchor=\"middle\">Contraindicada: embolectomía o trombectomía</text>\n  <rect class=\"dec\" x=\"308\" y=\"148\" width=\"300\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"458\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Probabilidad pretest (Wells)</text>\n  <text class=\"sub\" x=\"458\" y=\"176\" text-anchor=\"middle\">≤ 4: dímero D · si positivo, angioTAC</text>\n  <text class=\"sub\" x=\"458\" y=\"188\" text-anchor=\"middle\">&gt; 4: angioTAC directo (sin dímero D)</text>\n  <rect class=\"acc\" x=\"60\" y=\"236\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"251\" text-anchor=\"middle\" font-weight=\"700\">AngioTAC de arterias pulmonares confirma el TEP</text>\n  <text class=\"accS\" x=\"310\" y=\"264\" text-anchor=\"middle\">Contraindicado el contraste: cintigrama V/Q</text>\n  <rect class=\"b\" x=\"60\" y=\"300\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"315\" text-anchor=\"middle\" font-weight=\"700\">Estratificar (sPESI, troponina, VD) y anticoagular</text>\n  <text class=\"sub\" x=\"310\" y=\"328\" text-anchor=\"middle\">Bajo riesgo: DOAC y alta precoz · Intermedio: hospitalizar · 3 meses (provocado) a indefinido</text>\n</svg>"
    },
    "contexto": "El tromboembolismo pulmonar es la tercera causa de muerte cardiovascular después del infarto y el accidente cerebrovascular, y la que más se diagnostica tarde: sus síntomas (disnea, dolor torácico, taquicardia) se parecen a los de media docena de enfermedades. Visto desde la cardiología, es una falla aguda del ventrículo derecho que se enfrenta a una arteria pulmonar obstruida, y el pronóstico depende de cuánto resiste ese ventrículo. Por eso el médico general debe saber ordenar el estudio con la probabilidad pretest (Wells), no pedir un dímero D cuando la sospecha es alta, reconocer el TEP masivo con shock y fibrinolizarlo sin esperar, y anticoagular con anticoagulantes orales directos al paciente estable. La profundización de la parte respiratoria está en el libro de Respiratorio; aquí se enfatizan el ventrículo derecho y la decisión hemodinámica.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología: del trombo venoso a la falla del ventrículo derecho",
        "paragraphs": [
          "La <strong>enfermedad tromboembólica venosa</strong> reúne la trombosis venosa profunda (TVP, Tema 5.10) y el tromboembolismo pulmonar (TEP), expresiones de un mismo proceso: la interacción de los tres factores de la <strong>tríada de Virchow</strong>. 1) <strong>Estasis venosa</strong>: inmovilización mayor de 3 días, viaje en avión de más de 6 a 8 horas, cirugía ortopédica mayor (prótesis de cadera o rodilla), insuficiencia cardíaca, parálisis. 2) <strong>Lesión endotelial</strong>: fracturas, cirugía, catéteres venosos centrales. 3) <strong>Hipercoagulabilidad</strong>: cáncer activo (síndrome de Trousseau), embarazo y puerperio, anticonceptivos combinados o terapia hormonal, trombofilias hereditarias (factor V Leiden, mutación G20210A de la protrombina, déficit de proteína C, S o antitrombina) y adquiridas (<strong>síndrome antifosfolípido</strong>: TVP con TTPA prolongado y VDRL falso positivo en un adulto joven).",
          "En más del <strong>90% de los casos el émbolo viene de las venas profundas proximales de las piernas</strong> (poplítea, femoral, ilíaca); las trombosis distales de pantorrilla tienen bajo riesgo de embolizar. El émbolo viaja por la cava y las cavidades derechas y se impacta en las arterias pulmonares. Un TEP se clasifica como <strong>provocado</strong> (factor desencadenante mayor transitorio, como cirugía o fractura, o menor, como viaje o anticonceptivos), <strong>asociado a cáncer</strong> o <strong>no provocado</strong> (idiopático), clasificación que decide la duración de la anticoagulación.",
          "La consecuencia que determina el pronóstico es hemodinámica. La obstrucción del lecho vascular pulmonar y la liberación de mediadores vasoconstrictores (tromboxano, serotonina) <strong>aumentan bruscamente la poscarga del ventrículo derecho</strong>; el ventrículo derecho, que no está preparado para presiones pulmonares mayores de 40 a 50 mmHg, se dilata, el tabique interventricular se desplaza a la izquierda (interdependencia ventricular) y el llenado del ventrículo izquierdo cae, con descenso del gasto cardíaco, hipotensión e isquemia del ventrículo derecho (por compresión de su irrigación). El resultado es el <strong>shock obstructivo</strong> del TEP masivo, con mortalidad de más de 15 a 30%. La hipoxemia se debe al desajuste ventilación-perfusión, y el <strong>infarto pulmonar</strong> periférico explica el dolor pleurítico y la hemoptisis."
        ]
      },
      {
        "subhead": "2. Cuadro clínico y primeros exámenes",
        "paragraphs": [
          "La presentación más frecuente es la <strong>disnea de inicio súbito e inexplicada</strong> (más del 80%), seguida de <strong>dolor torácico pleurítico</strong>, tos y, en casos de infarto pulmonar, <strong>hemoptisis</strong>. El examen muestra <strong>taquicardia</strong>, taquipnea y, en el TEP grave, <strong>hipotensión, síncope, ingurgitación yugular</strong> y un segundo ruido pulmonar aumentado. Una <strong>puérpera con disnea, tos hemoptoica y desaturación</strong> es un TEP hasta que se demuestre lo contrario. Lo más característico es que el examen pulmonar es pobre (murmullo pulmonar normal): la desproporción entre la disnea o la hipoxemia y los hallazgos de la auscultación es una pista. Casi la mitad de los pacientes tiene signos de TVP (pantorrilla asimétrica, dolorosa y empastada).",
          "El <strong>electrocardiograma</strong> suele ser inespecífico: lo más frecuente es la <strong>taquicardia sinusal</strong> (40 a 50%). Los hallazgos de sobrecarga aguda del ventrículo derecho son más específicos pero poco sensibles: el patrón <strong>S1Q3T3</strong> de McGinn-White (onda S profunda en DI, onda Q y T negativa en DIII), el <strong>bloqueo completo de rama derecha</strong> nuevo, la desviación del eje a la derecha y las <strong>ondas T negativas en V1 a V4</strong>. Los gases arteriales muestran hipoxemia con <strong>hipocapnia y alcalosis respiratoria</strong>. La <strong>radiografía de tórax</strong> es normal en la mitad; puede mostrar atelectasias, derrame pleural, la <strong>joroba de Hampton</strong> (opacidad triangular periférica de base pleural por infarto) o la oligohemia focal de Westermark, y sirve para descartar neumonía y neumotórax.",
          "Los <strong>biomarcadores</strong> orientan el pronóstico: la <strong>troponina</strong> y el péptido natriurético (BNP o NT-proBNP) se elevan por la sobrecarga del ventrículo derecho. El <strong>ecocardiograma</strong> muestra dilatación del ventrículo derecho, aplanamiento del tabique («forma de D» del ventrículo izquierdo), hipocinesia de la pared libre con apex conservado (<strong>signo de McConnell</strong>), disminución del TAPSE, vena cava inferior plética y a veces trombos en las cavidades derechas; es indispensable en el paciente inestable, en quien un ventrículo derecho dilatado en un contexto compatible justifica el tratamiento de reperfusión incluso sin angioTAC."
        ]
      },
      {
        "subhead": "3. Algoritmo diagnóstico: probabilidad pretest, dímero D y angioTAC",
        "paragraphs": [
          "En el paciente <strong>hemodinámicamente estable</strong> el diagnóstico se ordena por la <strong>probabilidad clínica pretest</strong>. El <strong>score de Wells para TEP</strong> suma: signos clínicos de TVP (+3), diagnóstico alternativo menos probable que TEP (+3), frecuencia cardíaca &gt; 100 lpm (+1,5), inmovilización o cirugía en las últimas 4 semanas (+1,5), TVP o TEP previos (+1,5), hemoptisis (+1) y cáncer activo (+1). El <strong>score de Ginebra revisado</strong> es una alternativa que no depende del juicio del médico. Con la versión de dos niveles, <strong>Wells ≤ 4</strong> es probabilidad baja o intermedia («TEP improbable») y <strong>Wells &gt; 4</strong> es probabilidad alta («TEP probable»).",
          "<strong>Probabilidad baja o intermedia (Wells ≤ 4):</strong> se solicita <strong>dímero D de alta sensibilidad</strong>. Si es <strong>negativo</strong> (&lt; 500 µg/L, o ajustado por edad: edad × 10 µg/L en mayores de 50 años), <strong>se descarta el TEP</strong> con valor predictivo negativo mayor de 99%, sin imágenes ni anticoagulación. Si es <strong>positivo</strong>, se pide <strong>angioTAC de arterias pulmonares</strong>. Los criterios <strong>PERC</strong> (edad &lt; 50, FC &lt; 100, SatO₂ ≥ 95%, sin hemoptisis, sin estrógenos, sin TVP o TEP previos, sin edema unilateral, sin cirugía o trauma reciente) permiten descartar sin dímero D en probabilidad muy baja. <strong>El dímero D es muy sensible pero poco específico</strong>: se eleva en el embarazo, el cáncer, la infección, la cirugía reciente y el adulto mayor, por lo que un valor positivo no confirma nada.",
          "<strong>Probabilidad alta (Wells &gt; 4):</strong> <strong>no se pide dímero D</strong> (un resultado negativo no es suficiente para descartar la enfermedad con una prevalencia tan alta); se solicita directamente el <strong>angioTAC de arterias pulmonares con contraste</strong>, que es el examen confirmatorio de elección (sensibilidad y especificidad cercanas a 95%) y muestra los defectos de llenado, la dilatación del ventrículo derecho y el infarto pulmonar. Una paciente con anticonceptivos orales y un viaje reciente de 12 horas en avión, con disnea, FC de 100 y SatO₂ de 90%, tiene dos puntos clave (taquicardia y ausencia de diagnóstico alternativo): el examen de elección para continuar el estudio es el angioTAC, y no el dímero D. Si hay contraindicación del contraste (alergia grave, insuficiencia renal con VFG &lt; 30), la alternativa es la <strong>cintigrafía de ventilación/perfusión (V/Q)</strong>, también de elección en el embarazo con radiografía normal; la <strong>ecografía de compresión de las piernas</strong> que muestra una TVP permite tratar sin más estudios.",
          "En el <strong>paciente inestable</strong> (sospecha de TEP masivo) no se espera el angioTAC si el paciente no puede trasladarse: el ecocardiograma a la cabecera busca la sobrecarga del ventrículo derecho y descarta otras causas de shock (taponamiento, disfunción ventricular izquierda, disección). Por eso en el TEP masivo con compromiso hemodinámico, el estudio de elección para continuar es el ecocardiograma y no el angioTAC."
        ]
      },
      {
        "subhead": "4. Estratificación del riesgo: el TEP masivo y los estables",
        "paragraphs": [
          "Una vez confirmado el diagnóstico (o fuertemente sospechado), el tratamiento se decide por el <strong>riesgo de muerte temprana</strong> (Tabla 5.9.A):",
          "• <strong>TEP de alto riesgo o masivo (mortalidad &gt; 15 a 30%):</strong> hay <strong>inestabilidad hemodinámica o shock obstructivo</strong>: <strong>PAS &lt; 90 mmHg</strong> (o caída de ≥ 40 mmHg durante más de 15 minutos), necesidad de vasopresores, o paro cardíaco, causados por falla aguda del ventrículo derecho y no por arritmia, hipovolemia o sepsis. Se recibe en un contexto con disfunción de VD y elevación de troponina.",
          "• <strong>TEP de riesgo no alto (hemodinámicamente estable):</strong> se estratifica con el <strong>score sPESI</strong> (edad &gt; 80 años, cáncer, insuficiencia cardíaca o EPOC crónica, FC ≥ 110, PAS &lt; 100, SatO₂ &lt; 90%): <strong>sPESI = 0</strong> es riesgo bajo (mortalidad a 30 días &lt; 1%) y permite el alta precoz o el manejo ambulatorio; <strong>sPESI ≥ 1</strong> se clasifica como riesgo intermedio, y se evalúa la <strong>disfunción del ventrículo derecho</strong> (ecocardiograma o angioTAC) y la <strong>troponina</strong>: si ambos son positivos, <strong>riesgo intermedio-alto</strong> (hospitalización en unidad de cuidados con monitorización por riesgo de descompensación); si solo uno, <strong>intermedio-bajo</strong> (hospitalización en sala).",
          "Una regla útil: <em>el compromiso hemodinámico, no el tamaño del émbolo, define el TEP masivo</em>. Un émbolo central en un paciente con presión normal y ventrículo derecho normal no es masivo; un émbolo moderado en un paciente con enfermedad cardiopulmonar previa puede causar shock."
        ]
      },
      {
        "subhead": "5. Tratamiento de emergencia: anticoagular, fibrinolizar y sostener",
        "paragraphs": [
          "Mientras se completa el estudio, se inicia la anticoagulación parenteral de inmediato si la sospecha clínica es alta o intermedia: <strong>enoxaparina 1 mg/kg cada 12 horas por vía subcutánea</strong> (o 1,5 mg/kg una vez al día) en el paciente estable, y <strong>heparina no fraccionada en bolo (80 U/kg) e infusión continua</strong> en el paciente inestable, con insuficiencia renal grave o en quien se considera reperfusión. Se administra <strong>oxígeno</strong> si la saturación es &lt; 90%; el volumen se limita (máximo 500 mL) porque la sobrecarga empeora la dilatación del ventrículo derecho, y se usa <strong>noradrenalina</strong> para mantener la presión. La intubación y la ventilación con presión positiva son riesgosas (disminuyen el retorno venoso y precipitan el paro), y se evitan si es posible.",
          "En el <strong>TEP de alto riesgo</strong>, el tratamiento de reperfusión de elección es la <strong>trombólisis farmacológica sistémica endovenosa: alteplasa (rt-PA) 100 mg en infusión de 2 horas</strong> (en el paro inminente se usa un bolo de 0,6 mg/kg en 15 minutos, máximo 50 mg); el tenecteplase en bolo según peso es una alternativa aceptada, y la estreptoquinasa un fibrinolítico antiguo que se prefiere evitar. Se acompaña de heparina no fraccionada. Las <strong>contraindicaciones absolutas</strong> son las mismas que en el infarto (Tema 2.5): antecedente de hemorragia intracraneal, accidente cerebrovascular isquémico en los últimos 6 meses, neoplasia o malformación cerebral, trauma craneoencefálico o cirugía mayor reciente y sangrado activo. En el paciente con contraindicación o falla de la fibrinólisis se recurre a la <strong>embolectomía quirúrgica pulmonar</strong> o a la <strong>trombectomía percutánea por catéter</strong>, y en el shock refractario, a la oxigenación por membrana extracorpórea (ECMO).",
          "En el TEP estable <strong>no se fibrinoliza</strong> de rutina: la fibrinólisis aumenta el riesgo de hemorragia sin mejorar la supervivencia; en el riesgo intermedio-alto se vigila y se reserva la reperfusión de rescate si hay deterioro hemodinámico. El <strong>filtro de vena cava inferior</strong> solo se usa si la anticoagulación está absolutamente contraindicada o si hay recurrencia a pesar de una anticoagulación adecuada."
        ]
      },
      {
        "subhead": "6. Anticoagulación de mantención, duración y poblaciones especiales",
        "paragraphs": [
          "En el paciente estable, el tratamiento de primera línea son los <strong>anticoagulantes orales directos (DOAC)</strong> en monoterapia oral, sin necesidad de heparina previa en el caso del apixabán y del rivaroxabán: <strong>apixabán 10 mg cada 12 horas durante 7 días y luego 5 mg cada 12 horas</strong>, o <strong>rivaroxabán 15 mg cada 12 horas durante 21 días y luego 20 mg una vez al día con comida</strong>. Dabigatrán y edoxabán se usan después de 5 a 10 días de heparina. Los antagonistas de la vitamina K (<strong>warfarina, acenocumarol</strong>, INR 2 a 3) se superponen con heparina durante al menos 5 días y hasta tener 2 INR consecutivos en rango; se prefieren en el síndrome antifosfolípido (con anticuerpos triple positivo), la insuficiencia renal grave y las válvulas mecánicas. En el <strong>cáncer activo</strong> se prefieren la heparina de bajo peso molecular o un DOAC (apixabán o edoxabán), según el riesgo de sangrado digestivo, y en el <strong>embarazo</strong> la HBPM (los DOAC y la warfarina están contraindicados).",
          "La <strong>duración</strong> es de <strong>3 meses</strong> si el TEP fue provocado por un factor transitorio reversible mayor (cirugía, inmovilización, yeso); de <strong>6 meses a indefinida</strong> si fue no provocado (idiopático), recurrente, asociado a cáncer activo (mientras el cáncer esté activo) o a síndrome antifosfolípido, evaluando siempre el riesgo de sangrado. Al terminar el período de tratamiento, en el TEP no provocado se considera la anticoagulación extendida con dosis reducida de apixabán (2,5 mg cada 12 horas) o rivaroxabán (10 mg al día). El estudio de trombofilia no se hace de rutina: se reserva para pacientes jóvenes con TEP no provocado o historia familiar.",
          "Al seguimiento a 3 a 6 meses se pesquisan las secuelas: persistencia de disnea (descartar <strong>hipertensión pulmonar tromboembólica crónica</strong>, con ecocardiograma y cintigrama V/Q) y el síndrome postrombótico. La <strong>prevención</strong> (tromboprofilaxis) del TEP es parte del manejo del paciente hospitalizado: movilización precoz, medias de compresión neumática y <strong>heparina de bajo peso molecular en dosis profilácticas</strong> (enoxaparina 40 mg al día) en el paciente quirúrgico o médico de riesgo moderado a alto."
        ]
      }
    ],
    "table": {
      "title": "Estratificación y Tratamiento del Tromboembolismo Pulmonar Agudo",
      "headers": [
        "Categoría de riesgo",
        "Hemodinamia",
        "Disfunción de VD / troponina",
        "Tratamiento de elección"
      ],
      "rows": [
        [
          "Alto riesgo (masivo)",
          "PAS < 90 mmHg, shock o vasopresores",
          "VD dilatado, troponina elevada",
          "HNF + fibrinólisis (alteplasa 100 mg en 2 h); embolectomía si hay contraindicación"
        ],
        [
          "Intermedio-alto",
          "Estable; sPESI ≥ 1",
          "Ambos positivos (VD y troponina)",
          "Anticoagulación + monitorización en unidad de cuidados"
        ],
        [
          "Intermedio-bajo",
          "Estable; sPESI ≥ 1",
          "Solo uno positivo",
          "Anticoagulación; hospitalización en sala"
        ],
        [
          "Bajo riesgo",
          "Estable; sPESI = 0",
          "Negativos",
          "DOAC; alta precoz o manejo ambulatorio"
        ]
      ]
    },
    "severityTable": {
      "title": "Probabilidad Pretest y Conducta Diagnóstica según el Score de Wells",
      "headers": [
        "Situación",
        "Score de Wells",
        "Primer examen",
        "Si es negativo / positivo"
      ],
      "rows": [
        [
          "Probabilidad baja o intermedia (TEP improbable)",
          "≤ 4 puntos",
          "Dímero D de alta sensibilidad",
          "Negativo: se descarta TEP; positivo: angioTAC"
        ],
        [
          "Probabilidad alta (TEP probable)",
          "> 4 puntos",
          "AngioTAC de arterias pulmonares (sin dímero D)",
          "Negativo: buscar otro diagnóstico (V/Q si duda)"
        ],
        [
          "Inestable (sospecha de TEP masivo)",
          "No se calcula",
          "Ecocardiograma a la cabecera",
          "VD dilatado: tratar como TEP masivo"
        ],
        [
          "Contraindicación del contraste o embarazo",
          "Según probabilidad",
          "Cintigrama V/Q (± Doppler de piernas)",
          "Alta probabilidad: tratar y derivar"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Tratamiento del TEP: Fármacos y Dosis del Adulto",
      "headers": [
        "Fármaco",
        "Dosis",
        "Indicación / comentario"
      ],
      "rows": [
        [
          "Alteplasa (rt-PA)",
          "100 mg EV en 2 h (paro inminente: 0,6 mg/kg en 15 min, máx. 50 mg)",
          "TEP de alto riesgo, con heparina no fraccionada"
        ],
        [
          "Heparina no fraccionada",
          "Bolo 80 U/kg + infusión 18 U/kg/h, ajustada por TTPA",
          "Inestable, VFG baja o reperfusión"
        ],
        [
          "Enoxaparina",
          "1 mg/kg c/12 h SC",
          "Estable; cáncer y embarazo"
        ],
        [
          "Apixabán",
          "10 mg c/12 h por 7 días y luego 5 mg c/12 h",
          "Primera línea oral; sin heparina previa"
        ],
        [
          "Rivaroxabán",
          "15 mg c/12 h por 21 días y luego 20 mg/día",
          "Primera línea oral; con comida"
        ],
        [
          "Warfarina / acenocumarol",
          "INR 2-3, con heparina por ≥ 5 días",
          "SAF, IRC grave, válvulas mecánicas"
        ],
        [
          "Duración",
          "3 meses (provocado); 6 meses a indefinida (no provocado, cáncer, SAF)",
          "Evaluar el riesgo de sangrado"
        ]
      ]
    },
    "vignette": "Mujer de 34 años, usuaria de anticonceptivos orales combinados, que hace 4 días viajó 12 horas en avión. Consulta por dolor torácico pleurítico derecho de inicio súbito, tos con estrías de sangre y disnea. PA 120/80 mmHg, FC 108 lpm, SatO₂ 93% ambiental. La pantorrilla derecha tiene 4 cm más de diámetro que la izquierda, con calor y dolor a la palpación. ECG con taquicardia sinusal.",
    "explicacion": "Score de Wells: signos de TVP (+3), diagnóstico alternativo menos probable que TEP (+3), FC > 100 (+1,5) y hemoptisis (+1) = 8,5 puntos: probabilidad pretest alta. Con probabilidad alta no se pide dímero D: se solicita directamente el angioTAC de arterias pulmonares. Como está hemodinámicamente estable (PAS 120/80), no corresponde fibrinólisis; se inicia anticoagulación inmediata (enoxaparina mientras se completa el estudio) y, confirmado el TEP, un anticoagulante oral directo (apixabán o rivaroxabán), con suspensión del anticonceptivo hormonal y duración de al menos 3 meses por tratarse de un TEP provocado; se estratifica con sPESI (0 puntos: bajo riesgo, posible manejo ambulatorio breve) y troponina.",
    "keyPoints": [
      "TEP: > 90% de origen en las venas profundas proximales de las piernas; la tríada de Virchow explica los factores de riesgo.",
      "Probabilidad baja o intermedia (Wells ≤ 4): dímero D; si es negativo se descarta, si es positivo se pide angioTAC.",
      "Probabilidad alta (Wells > 4): no se pide dímero D; se solicita angioTAC de arterias pulmonares directamente.",
      "Contraindicación del contraste (alergia, VFG < 30) o embarazo: cintigrama V/Q.",
      "TEP masivo = hipotensión o shock por falla del VD: ecocardiograma a la cabecera y fibrinólisis (alteplasa 100 mg en 2 h) con heparina.",
      "TEP estable: DOAC (apixabán o rivaroxabán) en monoterapia oral; HBPM en cáncer y embarazo.",
      "sPESI = 0: bajo riesgo, alta precoz; troponina y disfunción de VD definen el riesgo intermedio-alto.",
      "Duración: 3 meses si fue provocado; 6 meses a indefinida si fue no provocado, recurrente, con cáncer o SAF."
    ],
    "questions": [
      {
        "stem": "Puérpera de 15 días, inicia disnea y tos, asociada a expectoración, hemoptoica. Al examen pulmonar tiene murmullo pulmonar presente, con escasos crépitos y satura 90% a FiO2 ambiental. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "B",
            "text": "Neumonía adquirida en la comunidad"
          },
          {
            "id": "C",
            "text": "Neumonía intrahospitalaria"
          },
          {
            "id": "D",
            "text": "Tuberculosis pulmonar"
          },
          {
            "id": "E",
            "text": "VIH"
          }
        ],
        "correcta": "A",
        "explicacion": "Una puérpera con disnea, tos hemoptoica y saturación de 90% tiene el puerperio como factor de riesgo de enfermedad tromboembólica: el diagnóstico más probable es el tromboembolismo pulmonar. La neumonía y la tuberculosis no se explican por un puerperio sin fiebre ni exposición, y el murmullo pulmonar casi normal con hipoxemia es la desproporción característica del TEP.",
        "recTag": "EUNACOM Julio 2016 · Pregunta 140"
      },
      {
        "stem": "Una paciente consulta al servicio de urgencias por disnea y malestar de 2 horas de evolución. Refiere un viaje reciente en avión desde Europa hace 12 horas y es usuaria de anticonceptivos orales. Al examen físico, tiene presión arterial: 110/70 mmHg, frecuencia cardíaca: 100x’ y saturación arterial de oxígeno: 90%, su auscultación cardiopulmonar es normal, al igual que el resto de su examen físico. Se solicita un electrocardiograma que muestra taquicardia sinusal a 120 latidos por minuto. ¿Cuál es el examen de elección para continuar con el estudio?",
        "options": [
          {
            "id": "A",
            "text": "Dímero D"
          },
          {
            "id": "B",
            "text": "Ecocardiograma"
          },
          {
            "id": "C",
            "text": "AngioTAC de tórax"
          },
          {
            "id": "D",
            "text": "Péptido natriurético cerebral"
          },
          {
            "id": "E",
            "text": "Electrocardiograma Holter de 24 horas"
          }
        ],
        "correcta": "C",
        "explicacion": "Una paciente con anticonceptivos orales y un viaje reciente en avión, taquicardia y SatO₂ de 90%, sin otro diagnóstico más probable, cumple al menos dos criterios de Wells (taquicardia y TEP como diagnóstico más probable): la probabilidad no es baja y obliga a confirmar con imágenes. El examen de elección en un paciente estable es el angioTAC de tórax; el dímero D no sirve para descartar con esta probabilidad.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 134"
      },
      {
        "stem": "Un paciente masculino de 60 años, con antecedente de hipertensión arterial crónica, diabetes y dislipidemia, de larga data, en tratamiento oral. Desde hace 2 meses está en quimioterapia por cáncer de colon. Hoy presenta un síncope luego de levantarse de la cama y se asocia a disnea y dolor torácico. Su FC: 120x’, PA: 90/50 mmHg, FR: 32x’ y saturación de oxígeno: 93%. Su examen pulmonar es inespecífico. Se solicita electrocardiograma que muestra un bloqueo completo de rama derecha, con alteraciones inespecíficas de la repolarización. ¿Cuál es el examen de elección para continuar el estudio en este paciente?",
        "options": [
          {
            "id": "A",
            "text": "Radiografía de tórax"
          },
          {
            "id": "B",
            "text": "TAC de tórax"
          },
          {
            "id": "C",
            "text": "Dímero D"
          },
          {
            "id": "D",
            "text": "Ecocardiograma"
          },
          {
            "id": "E",
            "text": "AngioTAC de tórax"
          }
        ],
        "correcta": "D",
        "explicacion": "Síncope, disnea y dolor torácico en un paciente con cáncer en quimioterapia, con taquicardia, hipotensión (90/50), taquipnea y bloqueo de rama derecha, es un TEP masivo con compromiso hemodinámico. En el paciente inestable se estudia con ecocardiograma, que muestra la sobrecarga del ventrículo derecho, y no con el angioTAC (de elección en el TEP no masivo). El dímero D, la radiografía y la TAC de tórax no ayudan.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 99"
      },
      {
        "stem": "Un paciente de 60 años, fumador de 20 paquetes-año y con antecedente de trombosis venosa profunda hace 10 años, presenta un cuadro de disnea y malestar general de 7 días de evolución, que empeoró súbitamente hace unas horas, presentando un síncope con recuperación posterior. Al examen físico destaca presión arterial 70/40 mmHg, frecuencia cardíaca 150 lpm, frecuencia respiratoria 40 rpm y saturación de oxígeno de 86%. Se observa ingurgitación yugular y se constata que está desorientado. Se solicita un electrocardiograma, que muestra una taquicardia sinusal y se realiza un AngioTAC, que muestra defectos de llenado en ambas arterias pulmonares. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Trombólisis con tenecteplase"
          },
          {
            "id": "B",
            "text": "Trombólisis con estreptoquinasa"
          },
          {
            "id": "C",
            "text": "Heparina endovenosa"
          },
          {
            "id": "D",
            "text": "Trombectomía abierta quirúrgica"
          },
          {
            "id": "E",
            "text": "Trombectomía intraarterial con catéter"
          }
        ],
        "correcta": "A",
        "explicacion": "Síncope, hipotensión (70/40), taquicardia, hipoxemia, ingurgitación yugular y desorientación con defectos de llenado en ambas arterias pulmonares: TEP masivo. El tratamiento de elección es la trombólisis sistémica (se prefieren los trombolíticos modernos, como el tenecteplase, sobre la estreptoquinasa). La heparina sola es insuficiente, y la trombectomía queda para quien tiene contraindicación de trombólisis.",
        "recTag": "EUNACOM Diciembre 2025 · Pregunta 8"
      }
    ],
    "_origen": "5.5§0 · 5.5§1 · 5.5§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-38",
    "classId": "cardio-38",
    "tier": 2,
    "blockNum": 5,
    "blockName": "Hipertensión Arterial, Pericardio y Patología Vascular",
    "topicLabel": "5.10",
    "title": "Trombosis Venosa Profunda",
    "perfilCode": "4.01.1.049",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "No GES",
    "reconstrucciones": "",
    "frecuencia": "Alta · Pierna edematosa unilateral, score de Wells, dímero D, eco-Doppler con compresión, anticoagulación y flegmasia cerulea dolens; trombofilia y síndrome antifosfolípido",
    "svg": null,
    "algoTitle": "Algoritmo diagnóstico y de tratamiento de la trombosis venosa profunda",
    "diagram": {
      "title": "Trombosis Venosa Profunda: de la Sospecha al Tratamiento",
      "svg": "<svg viewBox=\"0 0 620 246\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar38\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar38)}\n  </style>\n  <path class=\"ln\" d=\"M310,46 V72\"/>\n  <path class=\"ln\" d=\"M310,110 V136\"/>\n  <path class=\"ln\" d=\"M310,174 V184 H162 V200\"/>\n  <text class=\"lbl\" x=\"166\" y=\"196\">TVP confirmada</text>\n  <path class=\"ln\" d=\"M310,174 V184 H458 V200\"/>\n  <text class=\"lbl\" x=\"462\" y=\"196\">Complicada</text>\n  <rect class=\"b\" x=\"60\" y=\"8\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Pierna dolorosa y edematosa unilateral</text>\n  <text class=\"sub\" x=\"310\" y=\"36\" text-anchor=\"middle\">Pantorrilla &gt; 3 cm más que la contralateral (10 cm bajo la tuberosidad tibial), empastamiento, venas colaterales</text>\n  <rect class=\"dec\" x=\"60\" y=\"72\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"87\" text-anchor=\"middle\" font-weight=\"700\">Probabilidad clínica (Wells para TVP)</text>\n  <text class=\"sub\" x=\"310\" y=\"100\" text-anchor=\"middle\">Improbable (&lt; 2): dímero D · Probable (≥ 2): eco-Doppler directo</text>\n  <rect class=\"acc\" x=\"60\" y=\"136\" width=\"500\" height=\"38\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"151\" text-anchor=\"middle\" font-weight=\"700\">Eco-Doppler venoso con compresión</text>\n  <text class=\"accS\" x=\"310\" y=\"164\" text-anchor=\"middle\">Vena NO colapsable = trombosis; si es negativo y la sospecha persiste, repetir en 1 semana</text>\n  <rect class=\"warn\" x=\"12\" y=\"200\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"162\" y=\"215\" text-anchor=\"middle\" font-weight=\"700\">Anticoagular de inmediato</text>\n  <text class=\"warnT sub\" x=\"162\" y=\"228\" text-anchor=\"middle\">HBPM o DOAC · deambulación · 3 meses si provocada</text>\n  <rect class=\"b\" x=\"308\" y=\"200\" width=\"300\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"458\" y=\"215\" text-anchor=\"middle\" font-weight=\"700\">Flegmasia cerulea dolens o TEP</text>\n  <text class=\"sub\" x=\"458\" y=\"228\" text-anchor=\"middle\">Trombólisis dirigida o trombectomía urgente; ver Tema 5.9</text>\n</svg>"
    },
    "contexto": "La trombosis venosa profunda es la otra mitad del tromboembolismo pulmonar: la mayoría de los émbolos nacen en una vena de la pierna, y tratar bien una TVP es prevenir un TEP. El diagnóstico clínico es poco confiable (la mitad de las piernas hinchadas dolorosas no tienen trombosis y la mitad de las trombosis no se notan), por lo que el médico general debe apoyarse en la probabilidad pretest, el dímero D y el eco-Doppler venoso. El EUNACOM pregunta el examen confirmatorio (vena no compresible), la utilidad del dímero D, la conducta anticoagulante y las situaciones especiales: la flegmasia cerulea dolens, la trombofilia y el síndrome antifosfolípido en el adulto joven con TVP.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología, factores de riesgo y clasificación",
        "paragraphs": [
          "La <strong>trombosis venosa profunda (TVP)</strong> es la formación de un trombo en el sistema venoso profundo, con mayor frecuencia en las <strong>piernas (más del 90%)</strong>, y menos en los brazos (asociada a catéteres venosos centrales, marcapasos y cáncer). Se origina habitualmente en las válvulas de las venas de la pantorrilla, donde el flujo es lento, y se propaga hacia las venas proximales. Se clasifica en <strong>distal</strong> (venas de la pantorrilla: tibiales posteriores, peroneas, gemelares y sóleo), de bajo riesgo embólico si no progresa, y <strong>proximal</strong> (poplítea, femoral, ilíaca y cava), que es la que da <strong>embolia pulmonar</strong> en cerca de la mitad de los casos si no se trata.",
          "Los mecanismos son los de la <strong>tríada de Virchow</strong> (Tema 5.9): <strong>estasis</strong> (inmovilización, cirugía, viajes largos, insuficiencia cardíaca, parálisis, obesidad), <strong>lesión endotelial</strong> (trauma, cirugía ortopédica, catéteres) e <strong>hipercoagulabilidad</strong> (cáncer, embarazo y puerperio, anticonceptivos combinados y terapia hormonal, trombofilias hereditarias y adquiridas, enfermedades inflamatorias, síndrome nefrótico, policitemia). El antecedente de TVP o TEP previo es el factor individual más importante de recurrencia. Una TVP puede ser <strong>provocada</strong> (factor transitorio: cirugía, inmovilización, trauma, viaje), <strong>asociada a cáncer</strong> o <strong>no provocada</strong>.",
          "Una <strong>trombofilia</strong> se sospecha en la TVP de un paciente joven (menor de 45 años) sin factor de riesgo, con historia familiar, trombosis recurrente o en sitios inusuales. El <strong>síndrome antifosfolípido</strong> (SAF), una trombofilia adquirida autoinmune, se sospecha ante TVP con <strong>TTPA prolongado que no corrige</strong>, <strong>VDRL falsamente positivo</strong>, trombocitopenia leve y antecedente de abortos o trombosis arteriales; se confirma con anticoagulante lúpico, anticardiolipina y anti-beta-2-glicoproteína I positivos en dos ocasiones separadas por 12 semanas, y su tratamiento es la anticoagulación con antagonistas de la vitamina K (no con DOAC)."
        ]
      },
      {
        "subhead": "2. Clínica y diagnóstico diferencial",
        "paragraphs": [
          "El cuadro típico de una TVP de la pierna es <strong>dolor en la pantorrilla, aumento de volumen asimétrico y unilateral</strong> (diferencia de diámetro de pantorrilla &gt; 3 cm respecto de la contralateral, medida 10 cm bajo la tuberosidad tibial), <strong>empastamiento muscular</strong> (sensación de masa dura en la pantorrilla), edema con fóvea, calor local, enrojecimiento y <strong>venas superficiales colaterales dilatadas</strong>. En la TVP ileofemoral, toda la pierna se edematiza y el dolor se localiza en la ingle o el muslo. Sin embargo, un tercio o más de las trombosis es asintomático o paucisintomático y se descubre por una embolia pulmonar.",
          "El <strong>signo de Homans</strong> (dolor en la pantorrilla a la dorsiflexión forzada del pie) es <strong>poco sensible y poco específico</strong>: su ausencia no descarta TVP y su presencia no la confirma, por lo que ya no se usa para decidir. El diagnóstico diferencial de la pierna dolorosa y edematosa unilateral incluye el <strong>quiste de Baker roto</strong> (dolor súbito en el hueco poplíteo y la pantorrilla, con antecedente de artrosis o artritis de rodilla; el eco-Doppler lo distingue), la <strong>celulitis</strong> (eritema, fiebre y calor, con borde definido), el <strong>desgarro muscular o hematoma</strong>, el <strong>linfedema</strong>, la <strong>insuficiencia venosa crónica</strong> (cambios cutáneos crónicos), el edema por insuficiencia cardíaca o hipoalbuminemia (habitualmente bilateral) y la compresión venosa por un tumor pelviano.",
          "La complicación hiperaguda más grave es la <strong>flegmasia cerulea dolens</strong>: una trombosis ileofemoral masiva con oclusión total del drenaje venoso que produce edema a tensión muy doloroso, coloración <strong>cianótica violácea</strong> profunda, colapso arterial secundario con pérdida de pulsos, isquemia tisular y riesgo de gangrena venosa y amputación. Su forma menos grave, la <em>flegmasia alba dolens</em>, da una pierna pálida y edematosa. Es una emergencia vascular: se anticoagula con heparina de inmediato y se hace <strong>trombólisis dirigida por catéter o trombectomía quirúrgica urgente</strong>."
        ]
      },
      {
        "subhead": "3. Diagnóstico: probabilidad clínica, dímero D y eco-Doppler",
        "paragraphs": [
          "Se estima primero la probabilidad pretest con el <strong>score de Wells para TVP</strong>, que suma 1 punto por cada uno: cáncer activo; parálisis, paresia o yeso reciente de la pierna; postración mayor de 3 días o cirugía mayor en las últimas 12 semanas; dolor localizado a lo largo del sistema venoso profundo; edema de toda la pierna; pantorrilla &gt; 3 cm más gruesa; edema con fóvea limitado a la pierna sintomática; venas superficiales colaterales no varicosas; y TVP previa; y <strong>resta 2 puntos si hay un diagnóstico alternativo tan probable como la TVP</strong>. En la versión de dos niveles, <strong>≥ 2 puntos es «TVP probable»</strong> y &lt; 2 es «TVP improbable».",
          "En el paciente con <strong>probabilidad improbable</strong> se pide el <strong>dímero D</strong>: si es negativo, se descarta la TVP sin otros estudios, porque tiene una <strong>alta sensibilidad y un valor predictivo negativo elevado</strong>, que es lo que permite descartar con un resultado negativo; si es positivo, se hace un eco-Doppler. En el paciente con <strong>probabilidad probable</strong>, el dímero D no se usa y se solicita directamente el <strong>eco-Doppler venoso</strong>. Recuerde que el dímero D es muy poco específico (se eleva en el embarazo, el cáncer, la infección y la cirugía), por lo que un valor positivo no confirma una TVP.",
          "El <strong>examen confirmatorio de elección es el eco-Doppler venoso de las extremidades inferiores con maniobra de compresión</strong>: el criterio diagnóstico es la <strong>falta de colapso de la luz de la vena al comprimirla con el transductor</strong>, además de la visualización directa del trombo y la ausencia de flujo en el Doppler. Su sensibilidad en la TVP proximal sintomática es de cerca de 95%, y es menor en la distal. Si el examen es negativo y la sospecha clínica persiste, se repite en 5 a 7 días (para detectar una extensión proximal de una TVP distal). La flebografía, el angioTAC y la resonancia se reservan para situaciones especiales (venas ilíacas y cava, sospecha de síndrome de May-Thurner).",
          "En un paciente con TVP confirmada no se busca un cáncer de forma exhaustiva si la TVP fue provocada; se hace una anamnesis, examen físico y exámenes básicos (hemograma, función renal y hepática, radiografía de tórax y otros según la edad). En el <strong>adulto joven con TVP no provocada</strong> se solicita estudio de trombofilia (incluido el síndrome antifosfolípido, sobre todo si el TTPA está prolongado), idealmente al terminar el tratamiento, porque la fase aguda y la anticoagulación alteran los resultados."
        ]
      },
      {
        "subhead": "4. Tratamiento: anticoagulación inmediata, medidas y duración",
        "paragraphs": [
          "La base del tratamiento es la <strong>anticoagulación</strong>, que se inicia en cuanto se sospecha una TVP con probabilidad alta (sin esperar el eco-Doppler si este se va a demorar más de 4 horas) y se mantiene si se confirma. Su objetivo es <strong>evitar la extensión del trombo, la embolia pulmonar y la recurrencia</strong>; no disuelve el trombo, que se resuelve por la fibrinólisis endógena. Las opciones: <strong>heparina de bajo peso molecular</strong> (enoxaparina 1 mg/kg cada 12 horas por vía subcutánea) o heparina no fraccionada (que es preferible en la insuficiencia renal grave, por su depuración hepática y reversibilidad), y los <strong>anticoagulantes orales directos</strong>: <strong>rivaroxabán 15 mg cada 12 horas por 21 días y luego 20 mg al día</strong>, o <strong>apixabán 10 mg cada 12 horas por 7 días y luego 5 mg cada 12 horas</strong>, sin necesidad de heparina previa. Los antagonistas de la vitamina K (warfarina, acenocumarol) requieren superponerse con heparina durante al menos 5 días y hasta lograr un INR de 2 a 3 en dos controles; son de elección en el síndrome antifosfolípido y las válvulas mecánicas. En el embarazo se usa solo HBPM; en el cáncer, HBPM o DOAC según el riesgo de sangrado.",
          "La <strong>duración</strong> es de <strong>3 meses</strong> si la TVP fue provocada por un factor transitorio (cirugía, inmovilización, yeso), de <strong>3 a 6 meses o más, con evaluación de la extensión</strong> en la TVP no provocada, e <strong>indefinida (revaluando cada año)</strong> en la TVP recurrente, la asociada a cáncer activo o al síndrome antifosfolípido. La TVP distal aislada se trata durante 6 a 12 semanas, o se vigila con eco-Doppler seriado si no hay factores de riesgo de extensión. Muchos pacientes se manejan de forma <strong>ambulatoria</strong>, con deambulación precoz (el reposo no es necesario y no previene el TEP) y educación sobre los signos de alarma (disnea, dolor torácico, síncope, hemorragia).",
          "Las <strong>medias de compresión</strong> alivian el dolor y el edema, pero no previenen el síndrome postrombótico de forma consistente. La <strong>trombólisis o trombectomía</strong> se reserva para la TVP iliofemoral extensa de menos de 14 días con riesgo de pérdida del miembro (flegmasia cerulea dolens) y bajo riesgo de sangrado. El <strong>filtro de vena cava inferior</strong> es para los pacientes con TVP proximal en quienes la anticoagulación está contraindicada o fracasa."
        ]
      },
      {
        "subhead": "5. Complicaciones: embolia pulmonar, recurrencia y síndrome postrombótico",
        "paragraphs": [
          "La complicación aguda más grave es el <strong>tromboembolismo pulmonar</strong> (Tema 5.9): toda TVP proximal no tratada tiene un 30 a 50% de riesgo de embolizar, y el 90% de los émbolos pulmonares proviene de las venas profundas de las piernas. La <strong>recurrencia</strong> aparece en el 20 a 30% de los pacientes a 5 años y es mayor en la TVP no provocada, en el cáncer y en la trombofilia. El <strong>síndrome postrombótico</strong> (dolor, pesadez, edema crónico, hiperpigmentación y úlceras venosas, en la mitad de los casos a los 2 años) se debe a la incompetencia valvular y a la obstrucción residual; la mejor prevención es una anticoagulación efectiva y, en algunos casos, medias de compresión.",
          "La <strong>trombosis venosa superficial o tromboflebitis</strong> (cordón doloroso, eritematoso y caliente en una vena superficial, a menudo una várice o un sitio de catéter) se trata con AINE por vía oral o tópica, calor local y deambulación; sin embargo, se anticoagula (fondaparinux 2,5 mg al día o HBPM en dosis profilácticas durante 45 días) si el trombo mide ≥ 5 cm, está a menos de 3 cm de la unión safeno-femoral (por el riesgo de propagarse al sistema profundo) o si hay factores de riesgo. Se retira el catéter si es de origen infusional. La <strong>tromboflebitis migratoria</strong> sugiere cáncer (síndrome de Trousseau).",
          "Para prevenir la TVP en el paciente hospitalizado se aplica <strong>tromboprofilaxis</strong>: deambulación precoz, compresión neumática intermitente o medias, y <strong>heparina de bajo peso molecular en dosis profilácticas</strong> (enoxaparina 40 mg al día) en el paciente quirúrgico (sobre todo ortopédico y oncológico), el paciente médico inmovilizado y el embarazo de riesgo. Una paciente de 25 años, operada de una apendicitis hace 24 horas, pálida, con disnea y presión de 90/60, debe hacer pensar en un TEP masivo por TVP posoperatoria."
        ]
      }
    ],
    "table": {
      "title": "Trombosis Venosa Profunda: Datos Clínicos, Examen y Conducta",
      "headers": [
        "Aspecto",
        "Hallazgo o dato clave",
        "Conducta"
      ],
      "rows": [
        [
          "Clínica",
          "Pantorrilla > 3 cm, dolor, empastamiento, venas colaterales",
          "Calcular Wells; Homans no sirve"
        ],
        [
          "Dímero D",
          "Alta sensibilidad y VPN; baja especificidad",
          "Negativo en probabilidad improbable: descarta TVP"
        ],
        [
          "Eco-Doppler con compresión",
          "Vena no colapsable",
          "Confirma; repetir en 1 semana si es negativo y la sospecha persiste"
        ],
        [
          "Tratamiento",
          "HBPM o DOAC; deambulación",
          "3 meses (provocada); 3-6 meses o indefinida (no provocada, cáncer, SAF)"
        ],
        [
          "Flegmasia cerulea dolens",
          "Pierna cianótica, edema a tensión, pulsos ausentes",
          "Heparina + trombólisis por catéter o trombectomía urgente"
        ],
        [
          "Trombofilia / SAF",
          "TVP en < 45 años, TTPA prolongado, VDRL falso positivo",
          "Warfarina; estudio de trombofilia al terminar"
        ],
        [
          "Tromboflebitis superficial",
          "Cordón doloroso en vena superficial",
          "AINE; anticoagular si ≥ 5 cm o cerca de la unión safeno-femoral"
        ]
      ]
    },
    "vignette": "Hombre de 47 años, operado de una prótesis total de rodilla derecha hace 8 días, consulta por dolor y aumento de volumen de la pantorrilla derecha de 2 días. La pantorrilla derecha mide 4 cm más que la izquierda, con empastamiento, calor local, edema con fóvea y venas superficiales dilatadas. No tiene disnea ni dolor torácico. FC 88 lpm, SatO₂ 97%.",
    "explicacion": "Cirugía mayor reciente, pantorrilla asimétrica (> 3 cm), edema con fóvea, venas colaterales y dolor: probabilidad alta (Wells ≥ 2, «TVP probable»). No se solicita dímero D: se hace un eco-Doppler venoso con compresión, que mostrará una vena no colapsable. Si la espera supera las 4 horas se inicia anticoagulación de inmediato. Confirmada la TVP, se indica un anticoagulante oral directo (rivaroxabán 15 mg cada 12 horas por 21 días y luego 20 mg al día, o apixabán), deambulación precoz y control, por 3 meses, ya que fue provocada por la cirugía.",
    "keyPoints": [
      "TVP: dolor, pantorrilla > 3 cm más gruesa (10 cm bajo la tuberosidad tibial), empastamiento y venas colaterales; Homans poco sensible.",
      "Wells para TVP: ≥ 2 «probable» (eco-Doppler directo); < 2 «improbable» (dímero D, y eco si es positivo).",
      "El dímero D tiene alta sensibilidad y valor predictivo negativo alto: un resultado negativo descarta, uno positivo no confirma.",
      "Examen confirmatorio: eco-Doppler venoso con compresión (vena no colapsable); repetir en 1 semana si es negativo y la sospecha persiste.",
      "Tratamiento: HBPM o DOAC (rivaroxabán, apixabán) de inmediato; deambulación precoz; 3 meses si fue provocada.",
      "TVP en adulto joven con TTPA prolongado y VDRL falso positivo: síndrome antifosfolípido (anticoagulación con warfarina).",
      "Flegmasia cerulea dolens: TVP ileofemoral masiva con pierna cianótica e isquemia: trombólisis dirigida o trombectomía urgente.",
      "Complicaciones: TEP (más del 90% proviene de las piernas), recurrencia y síndrome postrombótico."
    ],
    "questions": [
      {
        "stem": "Un paciente de 32 años, presenta una trombosis venosa profunda femoropoplítea. Como antecedente, su abuelo falleció a los 85 años, por un accidente vascular encefálico y su padre tuvo un infarto agudo al miocardio a los 60 años. En sus exámenes destacan plaquetas: 140.000 por mm3, TTPA prolongado y VDRL (+). ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Déficit de antitrombina III"
          },
          {
            "id": "B",
            "text": "Déficit de factor VIII"
          },
          {
            "id": "C",
            "text": "Síndrome antifosfolípidos"
          },
          {
            "id": "D",
            "text": "Púrpura trombocitopénica trombótica"
          },
          {
            "id": "E",
            "text": "Enfermedad de Von Willebrand"
          }
        ],
        "correcta": "C",
        "explicacion": "Una TVP femoropoplítea en un adulto joven, con TTPA prolongado y VDRL positivo, es un síndrome antifosfolípido: el anticoagulante lúpico prolonga el TTPA in vitro (aunque la tendencia es trombótica) y los anticuerpos anticardiolipina dan un VDRL falsamente positivo. El déficit de antitrombina III es una trombofilia posible, pero no explica la prolongación del TTPA ni el VDRL; el déficit de factor VIII y la enfermedad de von Willebrand producen sangrado; la púrpura trombocitopénica trombótica no da una TVP aislada.",
        "recTag": "EUNACOM Diciembre 2019 · Pregunta 54"
      },
      {
        "stem": "Un paciente consulta por dolor y aumento de volumen en la pierna derecha. ¿Qué característica del dímero D es aquella que permite descartar una trombosis venosa profunda cuando resulta negativo?",
        "options": [
          {
            "id": "A",
            "text": "Alta especificidad"
          },
          {
            "id": "B",
            "text": "Alta sensibilidad"
          },
          {
            "id": "C",
            "text": "Elevado valor predictivo negativo"
          },
          {
            "id": "D",
            "text": "Elevado valor predictivo positivo"
          },
          {
            "id": "E",
            "text": "Baja especificidad"
          }
        ],
        "correcta": "C",
        "explicacion": "Un dímero D negativo permite descartar una TVP porque tiene un elevado valor predictivo negativo (que se relaciona con su alta sensibilidad): un resultado negativo hace muy improbable la enfermedad. Su especificidad es baja, por lo que un resultado positivo no confirma la TVP y exige un eco-Doppler.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 42"
      },
      {
        "stem": "Hombre de 47 años, operado de una prótesis total de rodilla hace 8 días, consulta por dolor y aumento de volumen de la pantorrilla derecha, que mide 4 cm más que la izquierda, con empastamiento y calor. ¿Cuál es el examen confirmatorio de elección?",
        "options": [
          {
            "id": "A",
            "text": "Dímero D plasmático"
          },
          {
            "id": "B",
            "text": "Eco-Doppler venoso de las extremidades inferiores con maniobra de compresión"
          },
          {
            "id": "C",
            "text": "Radiografía de la pierna"
          },
          {
            "id": "D",
            "text": "Angiografía pulmonar"
          },
          {
            "id": "E",
            "text": "Ecocardiograma transtorácico"
          }
        ],
        "correcta": "B",
        "explicacion": "Con alta probabilidad clínica de TVP (cirugía reciente, pantorrilla asimétrica de más de 3 cm, edema con fóvea) el dímero D no sirve para descartar y se solicita el eco-Doppler venoso con compresión: la vena que no se colapsa al comprimirla con el transductor confirma la trombosis.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "5.5§3 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  }
];

module.exports = { bloque5 };
