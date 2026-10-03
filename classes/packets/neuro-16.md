# CLASE neuro-16 · Neurologia 10.16: Síndrome de Guillain-Barré: Polirradiculoneuropatía Aguda, Albúmino-citológico y Manejo Intensivo

Escribe `classes/lessons/neuro-16.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-16" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-13: Neurologia 10.13: Temblor Esencial vs Parkinsoniano y Distonías Agudas por Neurolépticos
- neuro-14: Neurologia 10.14: Enfermedad de Alzheimer y Deterioro Cognitivo Leve
- neuro-15: Neurologia 10.15: Demencia Vascular, Demencia por Cuerpos de Lewy y Demencia Frontotemporal
- neuro-17: Neurologia 10.17: Miastenia Gravis: Fisiopatología (anti-AChR, anti-MuSK), Crisis Miasténica y Timoma
- neuro-18: Neurologia 10.18: Esclerosis Múltiple: Criterios de McDonald, Bandas Oligoclonales y Terapia Modificadora de Enfermedad
- neuro-19: Neurologia 10.19: Parálisis Facial Periférica (Bell) vs Central y Neuropatías por Atrapamiento

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-16",
  "classId": "neuro-16",
  "tier": 3,
  "blockNum": 4,
  "blockName": "Patología Neuromuscular, Desmielinizante y Nervio Periférico",
  "topicLabel": "10.16",
  "title": "Síndrome de Guillain-Barré: Polirradiculoneuropatía Aguda, Albúmino-citológico y Manejo Intensivo",
  "perfilCode": "1.10.2.013",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Manejo en Unidad de Paciente Crítico (UPC) bajo Ley de Urgencia y garantías de medicina intensiva · Cobertura hospitalaria de soporte vital e inmunoterapia de alto costo (Inmunoglobulina Humana EV / Plasmaféresis).",
  "reconstrucciones": "EUNACOM Julio 2024 (Q#86) · EUNACOM Julio 2019 (Q#85) · EUNACOM Diciembre 2018 (Q#23) · EUNACOM Julio 2016 (Q#170)",
  "frecuencia": "Máxima rentabilidad · Pregunta angular de urgencias neurológicas y medicina intensiva",
  "algoTitle": "Algoritmo de Manejo Integral y Soporte Ventilatorio en Síndrome de Guillain-Barré",
  "diagram": {
    "title": "Algoritmo de Manejo Integral y Soporte Ventilatorio en Síndrome de Guillain-Barré",
    "svg": "<svg viewBox=\"0 0 620 667\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha Clínica de SGB (Debilidad motora aguda simétrica ascendente + Arreflexia)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Antecedente infeccioso respiratorio o gastrointestinal previo (1-4 sem)</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">Parestesias distales en calcetín/guante</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"warn\" x=\"100\" y=\"80\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">Evaluación Inmediata de Riesgo Vital y Vía Aérea (Regla 20/30/40)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Capacidad vital forzada (CVF) · Presión inspiratoria máxima (PImáx)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"118\" text-anchor=\"middle\">Frecuencia respiratoria y mecánica torácica</text>\n  <path class=\"ln\" d=\"M310,130 V152\"/>\n  <rect class=\"dec\" x=\"70\" y=\"152\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"167\" text-anchor=\"middle\" font-weight=\"700\">¿Criterios de Falla Respiratoria Inminente o Disautonomía Grave?</text>\n  <text class=\"sub\" x=\"310\" y=\"179\" text-anchor=\"middle\">CVF &lt; 20 mL/kg, PImáx &lt; -30 cmH2O, taquicardia/bradicardia lábil, parálisis bulbar con disfagia</text>\n  <path class=\"ln\" d=\"M310,191 V221 H158 V231\"/>\n  <path class=\"ln\" d=\"M310,221 H462 V231\"/>\n  <text class=\"lbl\" x=\"158\" y=\"216\" text-anchor=\"middle\">Falla ventilatoria / bulbar inminente</text>\n  <text class=\"lbl\" x=\"462\" y=\"216\" text-anchor=\"middle\">Ventilación preservada (CVF &gt; 20 mL/kg)</text>\n  <rect class=\"crit\" x=\"12\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Intubación Orotraqueal Electiva en UCI</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"258\" text-anchor=\"middle\">¡CONTRAINDICADA Succinilcolina (paro por hiperkalemia)!</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"269\" text-anchor=\"middle\">Ventilación mecánica protectora</text>\n  <rect class=\"dec\" x=\"316\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Ingreso Monitorizado a UPC / Intermedio</text>\n  <text class=\"sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Espirometría / CVF a pie de cama c/4-6 h</text>\n  <text class=\"sub\" x=\"462\" y=\"269\" text-anchor=\"middle\">Telemetría cardíaca y control tensional continuo</text>\n  <path class=\"ln\" d=\"M158,281 V291 H310 V303\"/>\n  <path class=\"ln\" d=\"M462,281 V291 H310 V303\"/>\n  <rect class=\"acc\" x=\"100\" y=\"303\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"318\" text-anchor=\"middle\" font-weight=\"700\">Confirmación Diagnóstica: Punción Lumbar y Estudio Electrofisiológico (EMG/VCN)</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">LCR: Disociación albúmino-citológica (hiperproteinorraquia &gt; 45 mg/dL con &lt; 10-50 leucocitos/μL)</text>\n  <text class=\"accS\" x=\"310\" y=\"341\" text-anchor=\"middle\">Latencias F prolongadas</text>\n  <path class=\"ln\" d=\"M310,353 V375\"/>\n  <rect class=\"dec\" x=\"70\" y=\"375\" width=\"480\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"390\" text-anchor=\"middle\" font-weight=\"700\">Inmunoterapia Específica Temprana (Dentro de las primeras 2 a 4 semanas)</text>\n  <text class=\"sub\" x=\"310\" y=\"402\" text-anchor=\"middle\">Eficacia terapéutica equivalente</text>\n  <text class=\"sub\" x=\"310\" y=\"413\" text-anchor=\"middle\">Seleccionar según disponibilidad, comorbilidades y accesibilidad vascular</text>\n  <path class=\"ln\" d=\"M310,425 V455 H158 V465\"/>\n  <path class=\"ln\" d=\"M310,455 H462 V465\"/>\n  <text class=\"lbl\" x=\"158\" y=\"450\" text-anchor=\"middle\">Opción 1: Inmunoglobulina EV (IgEV)</text>\n  <text class=\"lbl\" x=\"462\" y=\"450\" text-anchor=\"middle\">Opción 2: Plasmaféresis Terapéutica (PE)</text>\n  <rect class=\"acc\" x=\"12\" y=\"465\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"480\" text-anchor=\"middle\" font-weight=\"700\">IgEV: 0.4 g/kg/día por 5 días (total 2 g/kg)</text>\n  <text class=\"accS\" x=\"158\" y=\"492\" text-anchor=\"middle\">Infusión periférica</text>\n  <text class=\"accS\" x=\"158\" y=\"503\" text-anchor=\"middle\">Vigilancia de anafilaxia en déficit de IgA y sobrecarga de volumen</text>\n  <rect class=\"acc\" x=\"316\" y=\"465\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"462\" y=\"480\" text-anchor=\"middle\" font-weight=\"700\">Plasmaféresis: 200-250 mL/kg en 4-5 sesiones</text>\n  <text class=\"accS\" x=\"462\" y=\"492\" text-anchor=\"middle\">Días alternos con albúmina al 5%</text>\n  <text class=\"accS\" x=\"462\" y=\"503\" text-anchor=\"middle\">Requiere acceso venoso central rígido de alto flujo</text>\n  <path class=\"ln\" d=\"M158,515 V525 H310 V537\"/>\n  <path class=\"ln\" d=\"M462,515 V525 H310 V537\"/>\n  <rect class=\"crit\" x=\"100\" y=\"537\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"552\" text-anchor=\"middle\" font-weight=\"700\">¡ADVERTENCIA CRÍTICA EUNACOM: CONTRAINDICACIÓN DE CORTICOIDES!</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"564\" text-anchor=\"middle\">Metilprednisolona y prednisona NO aportan beneficio y retrasan la regeneración axonal</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"575\" text-anchor=\"middle\">NUNCA administrar corticoides</text>\n  <path class=\"ln\" d=\"M310,587 V609\"/>\n  <rect class=\"acc\" x=\"100\" y=\"609\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"624\" text-anchor=\"middle\" font-weight=\"700\">Soporte y Prevención de Complicaciones</text>\n  <text class=\"accS\" x=\"310\" y=\"636\" text-anchor=\"middle\">Profilaxis TVP con HBPM · Manejo del dolor neuropático (gabapentina/pregabalina)</text>\n  <text class=\"accS\" x=\"310\" y=\"647\" text-anchor=\"middle\">Fisioterapia motora precoz</text>\n</svg>"
  },
  "contexto": "El Síndrome de Guillain-Barré (SGB) es una polirradiculoneuropatía aguda inflamatoria autoinmune que representa la causa más frecuente de parálisis flácida aguda en el adulto y una emergencia médica tiempo-dependiente. Su fisiopatología radica en un mimetismo molecular post-infeccioso (habitualmente tras gastroenteritis por Campylobacter jejuni o infecciones respiratorias virales) donde autoanticuerpos atacan gangliósidos y mielina de raíces nerviosas y nervios periféricos. El sello clínico cardinal es la debilidad muscular bilateral y simétrica, de progresión ascendente, acompañada invariablemente de arreflexia osteotendinosa universal. Hasta un 30% de los pacientes desarrolla insuficiencia respiratoria aguda neuromuscular por paresia diafragmática y de la musculatura intercostal, requiriendo intubación orotraqueal electiva y soporte en UPC. El diagnóstico se confirma mediante disociación albúmino-citológica en el líquido cefalorraquídeo y electromiografía. El tratamiento inmunomodulador de elección es la Inmunoglobulina Humana EV (0.4 g/kg/día por 5 días) o la Plasmaféresis en sesiones alternas (ambas de igual eficacia); los corticoides están formalmente contraindicados.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología, Mimetismo Molecular y Desencadenantes Infecciosos",
      "paragraphs": [
        "El Síndrome de Guillain-Barré es prototipo de enfermedad autoinmune desencadenada por <strong>mimetismo molecular</strong> entre antígenos microbianos y estructuras de la membrana axonal o mielínica de los nervios periféricos humanos. Aproximadamente el 70% de los pacientes relata el antecedente de una infección aguda en las 1 a 4 semanas previas. El agente etiológico más común y de peor pronóstico funcional es <strong>Campylobacter jejuni</strong> (asociado a enteritis invasiva y generación de anticuerpos contra gangliósidos GM1, GD1a y GQ1b). Otros agentes frecuentemente identificados incluyen <strong>Citomegalovirus (CMV)</strong>, <strong>Virus de Epstein-Barr (EBV)</strong>, <em>Mycoplasma pneumoniae</em>, <strong>Virus Zika</strong>, virus de influenza y SARS-CoV-2.",
        "La interacción entre los lipooligosacáridos de la cápsula de <em>Campylobacter jejuni</em> y los gangliósidos de los nódulos de Ranvier induce la producción de autoanticuerpos cruzados y la activación del complemento. En la variante desmielinizante clásica (AIDP), los macrófagos y el complejo de ataque a la membrana (MAC) invaden la vaina de mielina de las raíces ventrales y troncos nerviosos motores y sensitivos, provocando bloqueo de la conducción saltatoria y dispersión temporal del potencial de acción. En las variantes axonales (AMAN y AMSAN), el daño se concentra directamente en la membrana axonal en los nódulos de Ranvier, causando degeneración walleriana precoz con recuperación lenta y secuelas neurológicas más pronunciadas."
      ]
    },
    {
      "subhead": "2. Presentación Clínica, Criterios de Asbury y Variantes Clínicas",
      "paragraphs": [
        "El cuadro clínico cardinal inicia de forma subaguda con parestesias y disestesias distales en pies y manos (\"en calcetín y en guante\"), seguidas rápidamente por <strong>debilidad motora flácida, bilateral y relativamente simétrica, de curso típicamente ascendente</strong>: comienza en las extremidades inferiores (dificultad para levantarse de una silla o subir escaleras) y progresa en días hacia las extremidades superiores, musculatura axial, tronco y musculatura inervada por pares craneales (véase Algoritmo 10.16). La progresión alcanza su nadir clínico habitualmente a las 2 a 4 semanas desde el inicio.",
        "El hallazgo físico más constante, patognomónico y obligatorio según los <strong>Criterios Diagnósticos de Asbury</strong> es la <strong>hiporreflexia o arreflexia osteotendinosa profunda generalizada</strong> (véase Tabla 10.16.1). La presencia de reflejos vivos descarta prácticamente el diagnóstico de SGB y obliga a sospechar compresión medular aguda o mielitis transversa.",
        "El <strong>compromiso de pares craneales</strong> ocurre en más del 50% de los casos, siendo la <strong>parálisis facial bilateral (diplejía facial)</strong> la manifestación más común. La afectación de pares bulbares (IX, X, XII) genera disfagia, disartria, acumulación de secreciones faríngeas e incompetencia laríngea con riesgo inminente de broncoaspiración masiva.",
        "La <strong>disautonomía autonómica</strong> ocurre en hasta el 65% de los pacientes graves: se manifiesta por fluctuaciones tensionales erráticas (episodios alternantes de hipertensión severa e hipotensión ortostática refractaria), taquicardia sinusal persistente, bradiarritmias sinusales bruscas e incluso asistolia paroxística por hiperreactividad vagal, así como íleo paralítico y retención urinaria aguda. El dolor neuropático radicular y lumbar sordo o urente es extraordinariamente prevalente (hasta 80%) y a menudo precede a la debilidad muscular."
      ]
    },
    {
      "subhead": "3. Criterios de Monitoreo Respiratorio e Indicaciones de UCI (Regla 20/30/40)",
      "paragraphs": [
        "La complicación más temida del SGB es la <strong>falla respiratoria aguda neuromuscular</strong>, responsable de la gran mayoría de los ingresos a UCI y de la mortalidad intrahospitalaria. La debilidad del diafragma (nervio frénico C3-C5) y de los músculos intercostales produce hipoventilación alveolar progresiva con atelectasias basales e hipercapnia. A diferencia de las neumopatías parenquimatosas, la taquipnea inicial no se acompaña de sibilancias ni crepitaciones, y la oximetría de pulso suele ser engañosamente normal hasta fases terminales de claudicación diafragmática.",
        "Es mandatorio el monitoreo estricto de la mecánica ventilatoria a pie de cama cada 4 a 6 horas mediante la <strong>Regla 20/30/40</strong> (véase Tabla 10.16.2: Criterios de Ingreso a UCI e Intubación): <strong>1) Capacidad Vital Forzada (CVF) &lt; 20 mL/kg</strong> (o disminución &gt; 30% en 24 horas); <strong>2) Presión Inspiratoria Máxima (PImáx / NIF) &lt; -30 cmH2O</strong> (incapacidad para generar presión subatmosférica suficiente para insuflar los pulmones); y <strong>3) Presión Espiratoria Máxima (PEmáx) &lt; 40 cmH2O</strong> (tos inefectiva e incapacidad para movilizar secreciones bronquiales).",
        "En centros que no disponen de espirometría de cabecera, la prueba clínica del <strong>conteo en una sola espiración (single breath count)</strong> es un indicador semiológico invaluable: un paciente incapaz de contar en voz alta hasta 20 tras una inspiración profunda presenta una CVF &lt; 15-20 mL/kg y debe ser trasladado de urgencia a una Unidad de Paciente Crítico para <strong>intubación orotraqueal electiva</strong> antes de que se presente hipoxemia o colapso respiratorio catastrófico.",
        "<em>Precaución farmacológica crítica en intubación:</em> Está <strong>ESTRICTAMENTE CONTRAINDICADA la Succinilcolina</strong> como relajante neuromuscular para la intubación en el SGB. La denervación aguda produce hipersensibilidad por proliferación de receptores de acetilcolina extraneurales en toda la superficie sarcolémica, desencadenando una salida masiva e instantánea de potasio con hiperkalemia maligna fulminante, arritmias ventriculares y asistolia intraprocedimiento. El agente de elección para secuencia rápida es <strong>Rocuronio 1.2 mg/kg</strong>."
      ]
    },
    {
      "subhead": "4. Diagnóstico Paraclínico: Líquido Cefalorraquídeo y Estudio Electrofisiológico",
      "paragraphs": [
        "La confirmación diagnóstica requiere dos estudios complementarios cardinales:",
        "• <strong>Punción Lumbar y Estudio de LCR:</strong> El hallazgo clásico es la <strong>disociación albúmino-citológica</strong>, definida por la presencia de <strong>hiperproteinorraquia marcada (&gt; 45 mg/dL, alcanzando a menudo 100 a 400 mg/dL) con un recuento leucocitario rigurosamente normal o mínimamente elevado (&lt; 10 a 50 células mononucleares/μL)</strong>. <em>Perla EUNACOM:</em> En la primera semana de síntomas, las proteínas del LCR pueden ser completamente normales hasta en el 30-50% de los pacientes; la disociación albúmino-citológica típica se hace evidente y alcanza su máxima sensibilidad a partir del día 7 a 14. Un LCR inicial normal NO descarta SGB. Si el LCR muestra pleocitosis &gt; 50 células/μL, deben investigarse obligatoriamente diagnósticos alternativos como infección por VIH, enfermedad de Lyme, poliomielitis o meningitis carcinomatosa.",
        "• <strong>Electromiografía y Velocidades de Conducción Nerviosa (EMG/VCN):</strong> Permite confirmar la neuropatía motora y sensitiva periférica y clasificar el subtipo fisiopatológico (desmielinizante vs axonal). El signo electrofisiológico más temprano (primeros días) es la <strong>prolongación o ausencia de la onda F</strong> (que refleja el retraso en la conducción a través de las raíces nerviosas ventrales proximales) y la prolongación de la latencia motora distal. Conforme avanza el cuadro, se evidencian bloqueo de conducción motora, dispersión temporal y enlentecimiento severo de las velocidades de conducción (&lt; 70-80% del límite inferior normal)."
      ]
    },
    {
      "subhead": "5. Inmunoterapia Específica y Manejo Médico de Soporte en UPC",
      "paragraphs": [
        "El tratamiento modificador de la enfermedad debe iniciarse de forma precoz (idealmente dentro de las primeras 2 semanas y hasta las 4 semanas desde el inicio de la debilidad motora) en todo paciente con marcha alterada, progresión rápida o insuficiencia respiratoria (véase Tabla 10.16.3: Protocolo Terapéutico en SGB). Existen dos alternativas de <strong>idéntica eficacia clínica probada</strong>:",
        "• <strong>Inmunoglobulina Humana Endovenosa (IgEV):</strong> Administrada a dosis de <strong>0.4 g/kg/día por vía intravenosa durante 5 días consecutivos (dosis acumulada total de 2 g/kg)</strong>. Neutraliza autoanticuerpos patógenos, bloquea receptores Fc macrofágicos y modula la cascada del complemento. Es el tratamiento de primera línea más ampliamente utilizado debido a su facilidad técnica de administración por vía venosa periférica o central convencional y su excelente perfil de tolerancia hemodinámica.",
        "• <strong>Plasmaféresis Terapéutica (Recambio Plasmático):</strong> Consiste en el intercambio de <strong>200 a 250 mL/kg de plasma (generalmente 4 a 5 sesiones en días alternos durante 7 a 10 días)</strong>, sustituyendo el volumen plasmático por albúmina al 5% o solución salina balanceada. Remueve físicamente autoanticuerpos circulantes y factores inflamatorios. Requiere la colocación de un catéter venoso central rígido de alto flujo (tipo catéter de hemodiálisis) y equipo especializado de aféresis.",
        "<em>Principios terapéuticos inviolables en el examen:</em> <strong>1) NO combinar IgEV y plasmaféresis de forma concomitante ni consecutiva</strong>: los ensayos clínicos demostraron que combinar ambas modalidades no confiere beneficio terapéutico adicional y duplica la tasa de complicaciones e infecciones nosocomiales; y <strong>2) Los CORTICOIDES (metilprednisolona, prednisona oral o dexametasona) ESTÁN FORMALMENTE CONTRAINDICADOS COMO MONOTERAPIA EN SGB</strong>. Múltiples ensayos clínicos aleatorizados demostraron que los corticoides no aceleran la recuperación, no previenen la ventilación mecánica y, por el contrario, retrasan la recuperación motora y la reinervación axonal al inhibir la reparación glial endógena."
      ]
    }
  ],
  "table": {
    "title": "Criterios de Asbury y Variantes Clínicas del Síndrome de Guillain-Barré",
    "headers": [
      "Subtipo / Variante",
      "Mecanismo Patológico y Anticuerpos",
      "Cuadro Clínico Distintivo",
      "Hallazgos Neurofisiológicos"
    ],
    "rows": [
      [
        "AIDP (Polirradiculoneuropatía Desmielinizante Aguda)",
        "Ataque a vaina de mielina de raíces y troncos · Células T y macrófagos (> 85-90% en Occidente)",
        "Debilidad motora simétrica ascendente + Parestesias distales · Parálisis facial bilateral en 50% · Arreflexia universal",
        "Enlentecimiento de VCN (< 70%), prolongación de latencias distales y ondas F ausentes/retrasadas · Dispersión temporal"
      ],
      [
        "AMAN (Neuropatía Axonal Motora Aguda)",
        "Ataque directo a nódulos de Ranvier motores mediado por anti-GM1 y anti-GD1a (tras C. jejuni)",
        "Debilidad motora pura rápida y severa SIN alteraciones sensitivas objetivas · Arreflexia · Alta tasa de soporte ventilatorio",
        "Disminución marcada de la amplitud del CMAP con velocidades de conducción conservadas · Ausencia de dispersión"
      ],
      [
        "AMSAN (Neuropatía Axonal Motora y Sensitiva Aguda)",
        "Degeneración axonal masiva de axones motores y sensitivos · Anticuerpos anti-GM1 / GD1a",
        "Tetraparesia flácida severa + Pérdida sensitiva profunda global · Evolución fulminante y recuperación muy lenta con secuelas",
        "Amplitudes de CMAP y SNAP gravemente reducidas o ausentes en todas las extremidades · Marcada denervación en agudo"
      ],
      [
        "Síndrome de Miller Fisher (MFS)",
        "Ataque a nervios oculomotores y husos neuromusculares · Anticuerpos patognomónicos anti-GQ1b (> 90%)",
        "Tríada clásica de Miller Fisher: 1) Ataxia sensitiva/cerebelosa, 2) Arreflexia osteotendinosa, 3) Oftalmoplejía bilateral externa",
        "SNAP disminuidos con conducción motora habitualmente preservada · Responde de forma óptima a IgEV o plasmaféresis"
      ],
      [
        "Encefalitis de Tallo de Bickerstaff",
        "Espectro común con MFS · Reactividad cruzada anti-GQ1b y anti-GM1b en formación reticular",
        "Oftalmoplejía + Ataxia + Compromiso fluctuante de conciencia (letargia, estupor, coma) · Puede tener signos piramidales",
        "LCR con disociación albúmino-citológica · RMN puede mostrar hiperintensidades en protuberancia/mesencéfalo"
      ],
      [
        "Variante Faringo-Cérvico-Braquial",
        "Compromiso focalizado de raíces bulbares y cervicales altas · Asociación con anti-GT1a",
        "Ptosis, disfagia severa, paresia faríngea y debilidad marcada de cuello y hombros; extremidades inferiores respetadas",
        "Conducción alterada en nervios cervicales y pares craneales inferiores · Frecuente confusión con botulismo o miastenia"
      ]
    ]
  },
  "severityTable": {
    "title": "Criterios de Ingreso a UPC y Criterios de Intubación Orotraqueal en SGB",
    "headers": [
      "Parámetro / Criterio",
      "Valor Umbral de Riesgo",
      "Indicación Clínica / Conducta",
      "Justificación Fisiopatológica"
    ],
    "rows": [
      [
        "Capacidad Vital Forzada (CVF)",
        "< 20 mL/kg (o caída > 30% en 24 h)",
        "Ingreso obligatorio a UPC / Monitorización continua",
        "Volumen de reserva inspiratorio insuficiente; riesgo crítico de colapso alveolar"
      ],
      [
        "Capacidad Vital Crítica",
        "< 15 mL/kg",
        "Intubación orotraqueal electiva inmediata",
        "Incapacidad absoluta para mantener ventilación alveolar espontánea; hipoventilación"
      ],
      [
        "Presión Inspiratoria Máxima (PImáx / NIF)",
        "< -30 cmH2O (o más positiva que -20)",
        "Criterio mayor de intubación orotraqueal",
        "Paresia severa del diafragma e intercostales; agotamiento muscular inminente"
      ],
      [
        "Presión Espiratoria Máxima (PEmáx)",
        "< 40 cmH2O",
        "Criterio mayor de soporte invasivo / aspiración",
        "Incompetencia para generar tos efectiva; retención de secreciones bronquiales y taponamiento"
      ],
      [
        "Conteo en Espiración Única (Bedside test)",
        "< 20 números en un aliento (crítico < 15)",
        "Equivalente clínico a CVF < 20 mL/kg; traslado a UCI",
        "Test de cabecera rápido para centros sin espirómetro; predice intubación inminente"
      ],
      [
        "Compromiso Bulbar Progresivo",
        "Disfagia severa, disfonia, abolición de reflejo nauseoso",
        "Intubación orotraqueal para protección de vía aérea",
        "Pérdida de reflejos protectores faringolaríngeos con riesgo masivo de neumonía aspirativa"
      ],
      [
        "Disautonomía Cardiovascular Severa",
        "Labilidad tensional extrema, bradicardia < 40 o arritmias",
        "Monitoreo invasivo con línea arterial y telemetría en UCI",
        "Inestabilidad autonómica por denervación simpática/parasimpática; riesgo de paro asistólico"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Protocolo Terapéutico Escalonado y Cuidados Críticos en SGB",
    "headers": [
      "Intervención / Fármaco",
      "Dosis y Régimen de Administración",
      "Ventajas y Consideraciones",
      "Contraindicaciones y Advertencias"
    ],
    "rows": [
      [
        "Inmunoglobulina Humana EV (IgEV)",
        "0.4 g/kg/día por 5 días consecutivos (dosis total acumulada: 2.0 g/kg)",
        "Primera línea preferida; fácil administración periférica sin catéter de aféresis",
        "Cefalea, meningitis aséptica, nefropatía por sacarosa; contraindicada si déficit congénito de IgA"
      ],
      [
        "Plasmaféresis Terapéutica (PE)",
        "200 a 250 mL/kg de plasma en 4-5 sesiones en días alternos durante 7-10 días",
        "Igual de eficaz que IgEV; remoción directa de anticuerpos; menor costo farmacológico",
        "Requiere catéter venoso central rígido tipo hemodiálisis, personal especializado; riesgo de hipotensión e hipocalcemia"
      ],
      [
        "Corticoides Sistémicos (Metilprednisolona/Prednisona)",
        "NO ADMINISTRAR BAJO NINGUNA CIRCUNSTANCIA EN SGB TÍPICO",
        "Sin beneficio clínico en velocidad de recuperación ni necesidad de ventilación",
        "FORMALMENTE CONTRAINDICADOS: aumentan eventos adversos infecciosos y retrasan la reparación nerviosa"
      ],
      [
        "Profilaxis de Enfermedad Tromboembólica",
        "Enoxaparina 40 mg SC cada 24 h + Medias de compresión neumática intermitente",
        "Mandatoria desde el primer día en todo paciente no deambulador para prevenir TEP fatal",
        "Ajustar dosis en insuficiencia renal; suspender temporalmente si punción lumbar traumática"
      ],
      [
        "Analgesia Neuropática",
        "Gabapentina 300-900 mg c/8 h o Pregabalina 75-150 mg c/12 h oral/SNG",
        "Control del dolor radicular lumbar y en extremidades; mejora sueño y cooperación",
        "Evitar dosis altas de opioides sedantes que depriman el centro respiratorio central"
      ],
      [
        "Relajante para Intubación (IOT)",
        "Rocuronio 1.2 mg/kg EV (Secuencia de Intubación Rápida)",
        "Bloqueante neuromuscular no despolarizante seguro sin liberación de potasio",
        "¡SUCCINILCOLINA ESTRICTAMENTE CONTRAINDICADA!: causa hiperkalemia fulminante y paro cardíaco"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 34 años, previamente sano, es traído al servicio de urgencia por debilidad progresiva de las cuatro extremidades iniciada hace 4 días. Refiere que hace dos semanas presentó un cuadro de diarrea acuosa autolimitada tras comer mariscos. Hace 4 días comenzó con sensación de hormigueo en ambos pies y dificultad para ponerse de pie. En las últimas 24 horas la debilidad progresó hasta comprometer ambos brazos y nota dificultad para masticar y deglutir sólidos. Al examen físico: PA 155/95 mmHg lábil, FC 102 lpm, afebril, lúcido. En la evaluación motora presenta tetraparesia flácida simétrica con fuerza muscular M2 en extremidades inferiores y M3 en superiores. La sensibilidad táctil y dolorosa revela hipoestesia distal en calcetín. El examen de reflejos osteotendinosos demuestra arreflexia patelar, aquiliana, bicipital y tricipital bilateral universal (0/4+). La prueba de conteo en una sola espiración alcanza solo 12 números, con leve respiración paradojal abdominal. La punción lumbar revela líquido claro con proteínas de 145 mg/dL y 2 células mononucleares/μL.",
    "conducta": "El cuadro clínico corresponde al clásico Síndrome de Guillain-Barré (Polirradiculoneuropatía aguda desmielinizante / AIDP) gatillado por un evento entérico previo (sospecha de Campylobacter jejuni). Los elementos patognomónicos son la tetraparesia flácida simétrica ascendente, la arreflexia osteotendinosa generalizada y la disociación albúmino-citológica en el líquido cefalorraquídeo (proteínas elevadas con celularidad normal). La presencia de disfagia y un conteo en una sola espiración de 12 puntos indican insuficiencia respiratoria aguda neuromuscular inminente con fatiga diafragmática. La conducta médica inaplazable es el traslado inmediato a la Unidad de Cuidados Intensivos (UCI), intubación orotraqueal electiva (evitando succinilcolina por riesgo de paro hiperkalémico) e inicio precoz de inmunoterapia con Inmunoglobulina Humana EV a 0.4 g/kg/día por 5 días o Plasmaféresis en 5 sesiones alternas. Se debe enfatizar que los corticoides están contraindicados y no deben utilizarse."
  },
  "explicacion": "El cuadro clínico corresponde al clásico Síndrome de Guillain-Barré (Polirradiculoneuropatía aguda desmielinizante / AIDP) gatillado por un evento entérico previo (sospecha de Campylobacter jejuni). Los elementos patognomónicos son la tetraparesia flácida simétrica ascendente, la arreflexia osteotendinosa generalizada y la disociación albúmino-citológica en el líquido cefalorraquídeo (proteínas elevadas con celularidad normal). La presencia de disfagia y un conteo en una sola espiración de 12 puntos indican insuficiencia respiratoria aguda neuromuscular inminente con fatiga diafragmática. La conducta médica inaplazable es el traslado inmediato a la Unidad de Cuidados Intensivos (UCI), intubación orotraqueal electiva (evitando succinilcolina por riesgo de paro hiperkalémico) e inicio precoz de inmunoterapia con Inmunoglobulina Humana EV a 0.4 g/kg/día por 5 días o Plasmaféresis en 5 sesiones alternas. Se debe enfatizar que los corticoides están contraindicados y no deben utilizarse.",
  "keyPoints": [
    "El Síndrome de Guillain-Barré es una polirradiculoneuropatía inflamatoria aguda autoinmune desencadenada por mimetismo molecular post-infeccioso (Campylobacter jejuni, CMV, EBV).",
    "El hallazgo clínico obligatorio y más constante en el examen físico es la debilidad motora simétrica ascendente con arreflexia osteotendinosa universal (0/4+).",
    "La complicación mortal más frecuente es la falla respiratoria neuromuscular: se evalúa mediante la regla 20/30/40 (CVF < 20 mL/kg, PImáx < 30 cmH2O) o conteo espiratorio simple < 20.",
    "En caso de requerir intubación orotraqueal, la Succinilcolina está TERMINANTEMENTE CONTRAINDICADA por el riesgo de hiperkalemia masiva letal secundaria a denervación; usar Rocuronio.",
    "El estudio de LCR revela disociación albúmino-citológica (hiperproteinorraquia marcada con leucocitos normales < 10-50/μL); puede ser normal durante los primeros 7 días de síntomas.",
    "El tratamiento de elección consiste en Inmunoglobulina Humana EV (0.4 g/kg/día por 5 días) o Plasmaféresis terapéutica (4-5 sesiones en días alternos); los CORTICOIDES ESTÁN FORMALMENTE CONTRAINDICADOS."
  ],
  "questions": [
    {
      "stem": "¿Qué es lo más constante en el examen físico de un paciente con una\nsíndrome de Guillain-Barré?",
      "options": [
        {
          "id": "A",
          "text": "Arreflexia"
        },
        {
          "id": "B",
          "text": "Hipoventilación"
        },
        {
          "id": "C",
          "text": "Compromiso de conciencia"
        },
        {
          "id": "D",
          "text": "Hipoestesia"
        },
        {
          "id": "E",
          "text": "Oftalmoplejia"
        }
      ],
      "correcta": "A",
      "explicacion": "El Síndrome de Guillain-Barré (SGB) es una polirradiculoneuropatía aguda, de origen autoinmune, que afecta principalmente a los nervios periféricos. Su característica patológica principal es la desmielinización de las raíces nerviosas y nervios periféricos.\n\nClínicamente, esto se manifiesta como un síndrome de **neurona motora inferior**, cuyos hallazgos cardinales son:\n1.  **Debilidad muscular:** Típicamente simétrica y de progresión ascendente (comienza en las extremidades inferiores y avanza hacia el tronco, extremidades superiores y músculos bulbares/respiratorios).\n2.  **Arreflexia o hiporreflexia osteotendinosa:** La interrupción de la vaina de mielina en el nervio periférico bloquea la conducción del impulso nervioso a lo largo del arco reflejo. Esto causa la abolición o disminución severa de los reflejos. La arreflexia es un hallazgo casi universal y es un criterio diagnóstico fundamental (por ejemplo, en los criterios de Brighton para el diagnóstico de SGB). Es, por lo tanto, el signo clínico **más constante y fiable** en el examen físico.\n\nLa debilidad progresa durante días o hasta 4 semanas. Aunque existen otros signos y síntomas, la arreflexia generalizada en el contexto de una debilidad progresiva es el pilar del diagnóstico clínico.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.013"
    },
    {
      "stem": "Un paciente de 34 años presenta un cuadro diarreico autolimitado. Diez días\ndespués inicia debilidad progresiva para caminar y para mover las manos. Al\nexamen físico se aprecia además parálisis fácil y arreflexia generalizada. El\ndiagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Síndrome de Guillain Barré"
        },
        {
          "id": "B",
          "text": "Miastenia gravis"
        },
        {
          "id": "C",
          "text": "Polineuropatía"
        },
        {
          "id": "D",
          "text": "Botulismo"
        },
        {
          "id": "E",
          "text": "Intoxicación por marea roja"
        }
      ],
      "correcta": "A",
      "explicacion": "El Síndrome de Guillain-Barré (SGB) es la principal sospecha diagnóstica en este caso. La secuencia clásica es un evento infeccioso (en este caso, diarrea autolimitada) seguido por debilidad muscular ascendente y arreflexia. La parálisis facial refuerza aún más la sospecha, ya que es una manifestación común del SGB. La debilidad es progresiva y de tipo flácido, lo cual es consistente con el SGB. Según la Guía Clínica AUGE para el Síndrome de Guillain-Barré del MINSAL (aunque no se especifica un código en la lista proporcionada), el diagnóstico se basa en la clínica y se confirma con estudios como la electromiografía y el análisis del líquido cefalorraquídeo.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.013"
    },
    {
      "stem": "Un adolescente de 16 años inicia un cuadro relativamente rápido de\ndebilidad de las extremidades inferiores, que luego se extiende a las\nsuperiores, en cosa de 5 horas, agravándose a medida que pasa el tiempo. Al\nexamen físico además se constata arreflexia generalizada. El diagnóstico más\nprobable es:",
      "options": [
        {
          "id": "A",
          "text": "Polineuropatía"
        },
        {
          "id": "B",
          "text": "Síndrome de Guillain- Barre"
        },
        {
          "id": "C",
          "text": "Síndrome de compresión medular"
        },
        {
          "id": "D",
          "text": "Esclerosis múltiple"
        },
        {
          "id": "E",
          "text": "Miastenia gravis"
        }
      ],
      "correcta": "B",
      "explicacion": "La alternativa correcta es el **Síndrome de Guillain-Barré (SGB)** porque el cuadro clínico del paciente, un adolescente de 16 años, se ajusta perfectamente a la presentación clásica de esta enfermedad. Los elementos clave son:\n\n*   **Debilidad rápidamente progresiva:** La debilidad que asciende desde las extremidades inferiores a las superiores en cuestión de horas es muy sugerente de SGB. La rapidez de la progresión es fundamental.\n*   **Arreflexia generalizada:** La ausencia de reflejos osteotendinosos (arreflexia) es un hallazgo cardinal en el SGB. Esto indica compromiso de las raíces nerviosas.\n*   **Historia compatible:** Si bien la pregunta no lo explicita, es importante recordar que en muchos casos el SGB se presenta tras una infección respiratoria o gastrointestinal, lo que activaría una respuesta autoinmune.\n\nSi bien no se menciona en la pregunta, otros hallazgos que podrían apoyar el diagnóstico de SGB incluyen:\n*   **Disociación albumino-citológica en el líquido cefalorraquídeo (LCR):** Aumento de la proteína en el LCR con recuento celular normal o ligeramente elevado.\n*   **Estudios de conducción nerviosa:** Demuestran desmielinización y/o axonal en los nervios periféricos.\n\n**Guías MINSAL:** Aunque no existe una guía clínica específica del MINSAL para el manejo del SGB en adolescentes, el manejo se basa en guías internacionales y la experiencia clínica. El diagnóstico oportuno y el tratamiento adecuado son cruciales para minimizar la morbilidad y mortalidad. En Chile, el manejo suele realizarse en unidades de cuidados intensivos debido al riesgo de insuficiencia respiratoria.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.013"
    },
    {
      "stem": "Un paciente de 36 años presenta disestesias en las piernas, asociadas a\ndebilidad progresiva, que a las 48 horas de su inicio le impide la marcha. Al\nexamen se aprecia arreflexia generalizada. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Polirradiculoneuritis desmielinizante"
        },
        {
          "id": "B",
          "text": "Síndrome de arteria espinal posterior"
        },
        {
          "id": "C",
          "text": "Mononeuritis múltiple"
        },
        {
          "id": "D",
          "text": "Polineuropatía"
        },
        {
          "id": "E",
          "text": "Esclerosis múltiple"
        }
      ],
      "correcta": "A",
      "explicacion": "La respuesta correcta es la a) Polirradiculoneuritis desmielinizante, que es el término técnico para el Síndrome de Guillain-Barré (SGB). Este diagnóstico encaja perfectamente con el cuadro clínico presentado. El paciente experimenta disestesias (alteraciones de la sensibilidad, como hormigueo o adormecimiento) en las piernas, asociadas a debilidad muscular progresiva que avanza rápidamente, impidiendo la marcha en tan solo 48 horas. Esta progresión aguda o subaguda de debilidad y síntomas sensitivos es una característica cardinal del SGB.\n\nEl hallazgo más distintivo y confirmatorio en el examen físico es la arreflexia generalizada. La pérdida de los reflejos osteotendinosos profundos, especialmente de forma simétrica y generalizada, es un signo patognomónico del Síndrome de Guillain-Barré, que es una polineuropatía desmielinizante inflamatoria aguda que afecta las raíces nerviosas y los nervios periféricos. La edad del paciente (36 años) es también compatible, ya que el SGB puede afectar a cualquier edad.\n\nLa polirradiculoneuritis desmielinizante aguda se caracteriza por una respuesta autoinmune dirigida contra la mielina de los nervios periféricos y/o las raíces nerviosas. Esto interrumpe la conducción nerviosa, llevando a la debilidad motora progresiva y la afectación sensitiva. La progresión rápida y la arreflexia son los pilares diagnósticos, haciendo de esta opción la más probable y precisa para la presentación clínica del paciente.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.013"
    }
  ],
  "vignetteText": "Hombre de 34 años, previamente sano, es traído al servicio de urgencia por debilidad progresiva de las cuatro extremidades iniciada hace 4 días. Refiere que hace dos semanas presentó un cuadro de diarrea acuosa autolimitada tras comer mariscos. Hace 4 días comenzó con sensación de hormigueo en ambos pies y dificultad para ponerse de pie. En las últimas 24 horas la debilidad progresó hasta comprometer ambos brazos y nota dificultad para masticar y deglutir sólidos. Al examen físico: PA 155/95 mmHg lábil, FC 102 lpm, afebril, lúcido. En la evaluación motora presenta tetraparesia flácida simétrica con fuerza muscular M2 en extremidades inferiores y M3 en superiores. La sensibilidad táctil y dolorosa revela hipoestesia distal en calcetín. El examen de reflejos osteotendinosos demuestra arreflexia patelar, aquiliana, bicipital y tricipital bilateral universal (0/4+). La prueba de conteo en una sola espiración alcanza solo 12 números, con leve respiración paradojal abdominal. La punción lumbar revela líquido claro con proteínas de 145 mg/dL y 2 células mononucleares/μL."
}
```

## PREGUNTAS REALES DEL BANCO (9; por código de la clase y por búsqueda "guillain, polirradiculoneuropatia, albumino, citologico, intensivo")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Diciembre 2018 · Pregunta 23 · confianza 0.95
Un paciente de 29 años consulta por un cuadro de 7 días, progresivo, de disminución de la fuerza muscular, tanto en las extremidades superiores, como en las inferiores, siendo mayor en las inferiores. Tiene el antecedente de haber sufrido una influenza hace 14 días. Al examen físico tiene arreflexia aquiliana bilateral, asociada a hiporreflexia rotuliana mayor a derecha, con paresia M4 en las extremidades superiores y M3 en las inferiores. El diagnóstico más probable es:
- A) Radiculopatía S1 derecho
- B) Polineuropatía desmielinizante aguda
- C) Meningitis viral
- D) Mielopatía por influenza
- E) Miositis viral
**Correcta: B**
Explicación del banco: Diagnóstico: **Polineuropatía desmielinizante aguda** (opción **B**). Es un síndrome de Guillain Barré clásico. La influenza es una de las infecciones respiratorias altas más importantes debido a la intensidad de sus síntomas y su potencial de complicarse con neumonía viral o sobreinfección bacteriana. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [2] EUNACOM Julio 2013 · Pregunta 165 · confianza 0.78
Un paciente de 24 años, sin antecedentes, es traído porque desde que despertó en la mañana no puede movilizar sus cuatro extremidades, sin otros síntomas. Al examen físico se corrobora fuerza totalmente disminuida en todo su cuerpo, sensibilidad normal, reflejos osteotendíneos presentes y simétricos. El diagnóstico más probable es:
- A) Síndrome de Guillain Barré
- B) Miastenia Gravis
- C) Botulismo
- D) Lesión medular cervical
- E) Parálisis periódica hipokalémica
**Correcta: E**
Explicación del banco: Diagnóstico: **Parálisis periódica hipokalémica** (opción **E**). Por descarte y así es la parálisis hipokalémica. El Guillain Barré tiene ROT abolidos.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [3] EUNACOM Julio 2019 · Pregunta 85 · confianza 0.55
Un paciente de 38 años consulta por paresia facial bilateral, de una semana de evolución, mayor a izquierda. Además, presenta paresia del sexto bervio craneal izquierdo. Al examen físico tiene disminución generalizada de las fuerzas de las extremidades, con arreflexia e hipotonía. ¿Cuál es el diagnóstico más probable?
- A) Polineuropatía
- B) Síndrome de Guillain Barré
- C) Miastenia gravis
- D) Esclerosis múltiple
- E) Infarto de troncoencéfalo
**Correcta: B**
Explicación del banco: Tiene una tetraparesia flácida y arrefléctica, por lo que tiene un síndrome de Guillain Barré. Es clásica la paresia facial bilateral y puede tener afectación de los oculomotores (aunque ello es más probable en una miastenia gravis, cuya clínica, de todos modos, es distinta a la presentada).

### [4] EUNACOM Julio 2016 · Pregunta 170 · confianza 0.55
Paciente de 45 años presenta paresia facial bilateral de instalación progresiva, en 2 semanas, a lo que luego se agrega parálisis del sexto par craneal. Al examen físico, el tono muscular está disminuido de forma simétrica en las cuatro extremidades, con reflejos osteotendinosos abolidos. El diagnóstico más probable es:
- A) Accidente vascular tronco encefálico
- B) Miastenia gravis
- C) Sd. de Guillain Barre
- D) Botulismo
- E) Hemorragia intracraneana
**Correcta: C**
Explicación del banco: Diagnóstico: **Sd. de Guillain Barre** (opción **C**). Es un Guillain Barré clásico (tetraparesia fácida y arrefléctica, con parálisis facial bilateral).. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [5] EUNACOM Julio 2024 · Pregunta 86 · confianza 0.5
Una mujer de 32 años consulta por debilidad progresiva en ambas piernas, que inició hace 5 días y ha avanzado a las extremidades superiores en las últimas 48 horas. Refiere sensación de hormigueo en manos y pies, pero sin alteración sensorial significativa. No presenta fiebre ni dolor. Hace dos semanas tuvo un cuadro de infección respiratoria con tos y congestión nasal. Al examen físico, destaca debilidad simétrica en las extremidades, arreflexia global y marcha inestable. No hay signos de afectación de los pares craneales.
- A) Realizar resonancia magnética de columna
- B) Iniciar tratamiento con inmunoglobulina intravenosa
- C) Solicitar resonancia magnética de cerebro
- D) Administrar corticosteroides endovenosos
- E) Iniciar aciclovir endovenoso
**Correcta: B**
Explicación del banco: Síndrome de Guillain-Barré: La sospecha es un síndrome de Guillain-Barré, que se diagnostica principalmente por la clínica. Se recomienda complementar con punción lumbar (disociación albuminocitológica) o electromiografía. El tratamiento, además del soporte, es inmunoglobulina G intravenosa o plasmaféresis.

### [6] EUNACOM Julio 2015 · Pregunta 24 · confianza 0.5
Un paciente de 18 años presenta debilidad progresiva de las extremidades, con dificultad para caminar. Al examen físico no puede ponerse de pie y sus reflejos osteotendíneos están disminuidos, sin afectación de la sensibilidad. El diagnóstico más probable es:
- A) Polirradiculoneuritis desmielinizante
- B) Miastenia gravis
- C) Polineuropatía
- D) Parálisis hipokalémica
- E) Mielitis transversa
**Correcta: A**
Explicación del banco: Diagnóstico: **Polirradiculoneuritis desmielinizante** (opción **A**). Es un Guillain Barré clásico. Otro nombre es Polirradiculoneuritis desmielinizante.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [7] EUNACOM Julio 2017 · Pregunta 66 · confianza 0.4
Paciente de 30 años comienza hace una semana con cuadro de dolor en la espalda y extremidades, a lo que luego se agrega debilidad progresiva que actualmente dificulta la marcha asociado a dificultad para orinar. Al examen físico se constata debilidad de
- A) Miastenia gravis
- B) Síndrome de Guillain Barre
- C) Mielitis transversa
- D) Compresión medular toráxica
- E) Parálisis hipokalémica episódica
**Correcta: B**
Explicación del banco: B? La clínica es sugerente de un Sd. Guillain Barré, pero el dolor de espalda, la afec- tación vesical y en especial el nivel sensitivo obliga a descartar una mielitis transversa; sin embargo, el nivel era torácico y la afectación motora era de las 4 extremidades y el Guillain Barré sí puede tener esos síntomas. Es una mala pregunta, ya que el cuadro clí- nico no era lo suficientemente limpio, como para elegir una de las dos opciones.

### [8] EUNACOM Diciembre 2017 · Pregunta 57 · confianza 0.35
Un hombre de 58 años presenta un cuadro de 3 años de evolución de debilidad progresiva de las extremidades, que trae problemas para caminar, hasta no poder hacerlo, a lo que luego se agrega dificultad para tragar. Evoluciona finalmente con dificultad respiratoria y necesidad de traqueostomía. No tiene alteración sensitiva. Se solicita espirometría que se muestra a continuación ¿Cuál es el diagnóstico más probable?
- A) Polineuropatía diabética
- B) Distrofia muscular
- C) Esclerosis múltiple
- E) Esclerosis lateral amiotrófica
- E) Hemograma y VHS
**Correcta: E**
Explicación del banco: Diagnóstico: **Esclerosis lateral amiotrófica** (opción **E**). Es una ELA clásica. La espirometría mostraba un patrón restrictivo.. Esta clase aborda los síndromes motores: diferenciación entre primera y segunda motoneurona, miopatías vs neuropatías, miastenias, síndrome de Guillain-Barré y mielitis transversa. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [9] EUNACOM Julio 2017 · Pregunta 15 · confianza 0.3
Un paciente presenta disfonía y disartria, como secuela, luego de haber sufrido un traumatismo enceflaocraneano. Evoluciona posteriormente con múltiples neumonías aspirativas. ¿Cuál es la causa más probable de estas neumonías?
- A) Reflujo gastroesofágico
- B) Estenosis subglótica
- C) Divertículo esofágico
- D) Trastorno de la deglución
- E) Parálisis frénica
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Trastorno de la deglución). Es un trastorno de la deglución clásico, en este caso como secuela de un TEC severo.. Esta clase aborda los síndromes motores: diferenciación entre primera y segunda motoneurona, miopatías vs neuropatías, miastenias, síndrome de Guillain-Barré y mielitis transversa. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).
