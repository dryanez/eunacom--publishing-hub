# CLASE neuro-08 · Neurologia 10.8: Epilepsia del Adulto: Clasificación ILAE, Fármacos Antiepilépticos y Monitorización GES

Escribe `classes/lessons/neuro-08.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-08" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-05: Neurologia 10.5: Trombosis Venosa Cerebral: Factores Protrombóticos, Sospecha Clínica, Neuroimagen y Anticoagulación Plena
- neuro-06: Neurologia 10.6: Migraña (Fisiopatología, Criterios IHS, Triptanes y Profilaxis) y Cefalea Tensional
- neuro-07: Neurologia 10.7: Cefalea en Racimos (Cluster) y Neuralgia del Trigémino: Diagnóstico Diferencial, Manejo Agudo y Preventivo
- neuro-09: Neurologia 10.9: Status Epiléptico Convulsivo: Protocolo Escalonado de Rescate y Neurointensivo
- neuro-10: Neurologia 10.10: Primera Crisis Convulsiva del Adulto y Diagnóstico Diferencial con Síncope: Enfrentamiento, Criterios de Inicio de FAE y Banderas Rojas
- neuro-11: Neurologia 10.11: Enfermedad de Parkinson: Criterios Diagnósticos MDS, Terapia con Levodopa y Fluctuaciones Motoras

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-08",
  "classId": "neuro-08",
  "tier": 3,
  "blockNum": 2,
  "blockName": "Cefaleas, Síndromes Convulsivos y Epilepsia",
  "topicLabel": "10.8",
  "title": "Epilepsia del Adulto: Clasificación ILAE, Fármacos Antiepilépticos y Monitorización GES",
  "perfilCode": "1.10.1.007",
  "dx": "Específico",
  "tx": "Completo",
  "seg": "Realizar",
  "ges": "Garantía Explícita en Salud (GES N° 28): Epilepsia no refractaria en personas de 15 años y más · Sospecha con atención médica y solicitud de EEG en ≤ 30 días, confirmación diagnóstica con especialista e inicio inmediato de FAE garantizado por canasta pública/privada.",
  "reconstrucciones": "EUNACOM Diciembre 2024 (Q#140) · EUNACOM Enero 2023 (Q#143) · EUNACOM Diciembre 2019 (Q#41) · EUNACOM Diciembre 2017 (Q#133)",
  "frecuencia": "Máxima rentabilidad · Pregunta obligada en todos los exámenes históricos de neurología y medicina interna",
  "algoTitle": "Algoritmo de Clasificación ILAE y Selección de FAE de Primera Línea",
  "diagram": {
    "title": "Algoritmo de Diagnóstico y Selección de FAE en Adultos",
    "svg": "<svg viewBox=\"0 0 620 501\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Confirmación de Crisis Epiléptica vs Diagnósticos Diferenciales</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Anamnesis a testigos · Descarte de síncope, crisis psicógena y causas metabólicas agudas</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"warn\" x=\"100\" y=\"69\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Evaluación Paraclínica Integral: EEG Interictal y RM Cerebral</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">EEG estándar o con privación de sueño</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Resonancia con protocolo de epilepsia (Garantía GES N° 28)</text>\n  <path class=\"ln\" d=\"M310,119 V141\"/>\n  <rect class=\"dec\" x=\"70\" y=\"141\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"156\" text-anchor=\"middle\" font-weight=\"700\">Clasificación Operativa ILAE: ¿Tipo de Inicio de la Crisis?</text>\n  <text class=\"sub\" x=\"310\" y=\"168\" text-anchor=\"middle\">Determinación semiológica y neurofisiológica para guiar el espectro del fármaco antiepiléptico</text>\n  <path class=\"ln\" d=\"M310,180 V210 H158 V220\"/>\n  <path class=\"ln\" d=\"M310,210 H462 V220\"/>\n  <text class=\"lbl\" x=\"158\" y=\"205\" text-anchor=\"middle\">Crisis de Inicio Focal (Con/Sin alteración de conciencia)</text>\n  <text class=\"lbl\" x=\"462\" y=\"205\" text-anchor=\"middle\">Crisis de Inicio Generalizado (GTC, Mioclonías, Ausencias)</text>\n  <rect class=\"acc\" x=\"12\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">FAEs de Primera Línea para Crisis Focales</text>\n  <text class=\"accS\" x=\"158\" y=\"247\" text-anchor=\"middle\">Lamotrigina, Levetiracetam o Carbamazepina/Oxcarbazepina</text>\n  <text class=\"accS\" x=\"158\" y=\"258\" text-anchor=\"middle\">Bloqueo de canales Na+ y SV2A</text>\n  <rect class=\"crit\" x=\"316\" y=\"220\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">FAEs de Amplio Espectro Obligatorios</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"247\" text-anchor=\"middle\">Ácido Valproico (varones), Levetiracetam o Lamotrigina</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">¡PROSCRITAS Carbamazepina y Fenitoína!</text>\n  <path class=\"ln\" d=\"M158,270 V280 H310 V292\"/>\n  <path class=\"ln\" d=\"M462,270 V280 H310 V292\"/>\n  <rect class=\"dec\" x=\"70\" y=\"292\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">¿Perfil de Seguridad: Mujer en Edad Fértil o Adulto Mayor?</text>\n  <text class=\"sub\" x=\"310\" y=\"319\" text-anchor=\"middle\">Estratificación por riesgo teratogénico, interacciones farmacológicas y comorbilidades</text>\n  <path class=\"ln\" d=\"M310,331 V361 H158 V371\"/>\n  <path class=\"ln\" d=\"M310,361 H462 V371\"/>\n  <text class=\"lbl\" x=\"158\" y=\"356\" text-anchor=\"middle\">Mujer con Potencial Fértil / Embarazo</text>\n  <text class=\"lbl\" x=\"462\" y=\"356\" text-anchor=\"middle\">Adulto Mayor (&gt; 65 a) / Polifarmacia</text>\n  <rect class=\"crit\" x=\"12\" y=\"371\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"386\" text-anchor=\"middle\" font-weight=\"700\">Valproato CONTRAINDICADO (Teratogenia)</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"398\" text-anchor=\"middle\">Preferir Lamotrigina o Levetiracetam + Ácido</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"409\" text-anchor=\"middle\">Fólico 5 mg/día pre-concepcional riguroso</text>\n  <rect class=\"dec\" x=\"316\" y=\"371\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"386\" text-anchor=\"middle\" font-weight=\"700\">Evitar Inductores Enzimáticos CYP450</text>\n  <text class=\"sub\" x=\"462\" y=\"398\" text-anchor=\"middle\">Preferir Levetiracetam o Lamotrigina en dosis bajas</text>\n  <text class=\"sub\" x=\"462\" y=\"409\" text-anchor=\"middle\">Evitar Fenitoína/Carbamazepina</text>\n  <path class=\"ln\" d=\"M158,421 V431 H310 V443\"/>\n  <path class=\"ln\" d=\"M462,421 V431 H310 V443\"/>\n  <rect class=\"acc\" x=\"100\" y=\"443\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"458\" text-anchor=\"middle\" font-weight=\"700\">Titulación Lenta, Monitorización Periódica y Adherencia</text>\n  <text class=\"accS\" x=\"310\" y=\"470\" text-anchor=\"middle\">Titular lentamente para prevenir Stevens-Johnson (Lamotrigina)</text>\n  <text class=\"accS\" x=\"310\" y=\"481\" text-anchor=\"middle\">Control hematológico y hepático</text>\n</svg>"
  },
  "contexto": "La epilepsia es una de las enfermedades neurológicas crónicas más prevalentes en Chile y una patología prioritaria cubierta por las Garantías Explícitas en Salud (GES N° 28). La definición operacional de la Liga Internacional contra la Epilepsia (ILAE) establece que el diagnóstico se confirma con: 1) Al menos dos crisis no provocadas separadas por más de 24 horas; o 2) Una sola crisis no provocada cuando el riesgo de recurrencia a 10 años es superior al 60% (respaldado por un EEG epileptiforme o una lesión estructural causal en la neuroimagen). El éxito terapéutico exige dominar la clasificación de las crisis (focales vs generalizadas), seleccionar el FAE adecuado y vigilar estrictamente las contraindicaciones críticas, destacando la proscripción absoluta del ácido valproico en mujeres en edad fértil.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología de la Epileptogénesis, Balance Glutamato/GABA y Clasificación ILAE 2017",
      "paragraphs": [
        "La crisis epiléptica es la manifestación clínica originada por una <strong>descarga hipersincrónica, excesiva y anormal</strong> de una población neuronal cortical encefálica. A nivel celular, este fenómeno se produce por una ruptura del equilibrio homeostático entre la neurotransmisión excitatoria (mediada por el <strong>glutamato</strong> a través de receptores NMDA y AMPA, con entrada masiva de sodio y calcio celular) y la neurotransmisión inhibitoria (mediada por el <strong>GABA</strong> a través de receptores GABA-A, con influjo de cloro e hiperpolarización de membrana).",
        "La clasificación operacional moderna de la ILAE (2017) abandona los términos ambiguos de \"parcial\" o \"gran mal\" y categoriza las crisis según su <strong>tipo de inicio</strong> (véase Algoritmo 10.8 y Tabla 10.8):",
        "• <strong>Crisis de Inicio Focal:</strong> Se originan en redes neuronales limitadas a un solo hemisferio cerebral. Se subdividen según el estado de la conciencia en: 1) <em>Focal con conciencia preservada (antigua focal simple):</em> el paciente permanece consciente, interactivo y recuerda el evento; 2) <em>Focal con alteración de la conciencia (antigua focal compleja):</em> cursa con desconexión del medio, mirada extraviada, amnesia del episodio y con frecuencia automatismos oromasticatorios (chupeteo, deglución) o motores bizarros. Asimismo, pueden ser de inicio motor (clónicas, mioclónicas, atónicas) o no motor (sensitivas, sensoriales, autonómicas o psíquicas con déjà vu o auras epigástricas ascendentes).",
        "• <strong>Crisis Focal con evolución a Tónico-Clónica Bilateral (antigua secundaria generalizada):</strong> Se inicia como una crisis focal que posteriormente se propaga y sincroniza bilateralmente en toda la corteza.",
        "• <strong>Crisis de Inicio Generalizado:</strong> Se originan en un punto de la corteza y activan de manera rápida, sincrónica y simultánea las redes neuronales distribuidas bilateralmente en ambos hemisferios. Cursan siempre con compromiso de conciencia desde el inicio. Se dividen en: 1) <em>Motoras:</em> tónico-clónicas generalizadas (GTC), mioclónicas, clónicas, tónicas y atónicas; 2) <em>No motoras (Ausencias):</em> ausencias típicas (detención motora y desconexión breve de 5 a 15 segundos sin caída ni confusión postictal, con complejos punta-onda lenta a 3 Hz en el EEG), ausencias atípicas y mioclónicas.",
        "• <strong>Crisis de Inicio Desconocido:</strong> Cuando no es posible determinar el inicio por falta de testigos (p. ej., crisis ocurrida durante el sueño)."
      ]
    },
    {
      "subhead": "2. Diagnóstico Paraclínico: Electroencefalograma (EEG), Neuroimagen y Marco Legal GES N° 28",
      "paragraphs": [
        "El diagnóstico de epilepsia es fundamentalmente clínico, sustentado en una anamnesis exhaustiva a testigos presenciales. Los estudios complementarios tienen como objetivos confirmar la epileptogenicidad, clasificar el síndrome y determinar su etiología:",
        "• <strong>Electroencefalograma (EEG):</strong> Es el examen neurofisiológico de elección. Su rol es pesquisar <em>actividad epileptiforme interictal</em> (puntas, ondas agudas, complejos punta-onda). Un EEG interictal de rutina puede ser normal en el 50% de los pacientes epilépticos; ante alta sospecha con EEG normal, debe solicitarse un <strong>EEG con privación de sueño</strong> o con maniobras de activación (hiperventilación y fotoestimulación intermitente), o una monitorización prolongada (video-EEG). <em>Regla de oro:</em> Un EEG normal no descarta epilepsia, ni un EEG inespecífico con ondas lentas confirma la enfermedad.",
        "• <strong>Neuroimagen de Alta Resolución:</strong> La <strong>Resonancia Magnética (RM) de encéfalo con protocolo de epilepsia</strong> (cortes coronales finos en T1, T2 y FLAIR perpendiculares al eje del hipocampo) es el método de elección superior para detectar lesiones estructurales epileptogénicas sutiles: <strong>esclerosis mesial temporal (atrofia e hiperintensidad hipocámpica)</strong>, malformaciones del desarrollo cortical (displasias corticales focales), cavernomas, tumores gliales de bajo grado y secuelas isquémicas o traumáticas. El TAC de encéfalo se reserva para la urgencia inmediata.",
        "• <strong>Marco de Garantías Explícitas en Salud (GES N° 28):</strong> En Chile, toda persona de 15 años o más con sospecha de epilepsia no refractaria tiene acceso garantizado por ley a confirmación diagnóstica con especialista y realización de EEG en un plazo máximo de <strong>30 días</strong> desde la derivación, así como inicio inmediato del tratamiento farmacológico antiepiléptico de por vida cubierto por la canasta GES."
      ]
    },
    {
      "subhead": "3. Farmacología Antiepiléptica: Mecanismos de Acción, Toxicidades Graves y Reacciones Idiosincráticas",
      "paragraphs": [
        "El conocimiento pormenorizado de las toxicidades graves de los Fármacos Antiepilépticos (FAEs) constituye una de las áreas más evaluadas en el EUNACOM (véase Tabla de Toxicidades 10.8):",
        "• <strong>Ácido Valproico (Divalproato de Sodio):</strong> Modulador de amplio espectro que bloquea canales de Na+ y estimula la vía GABAérgica. Es el fármaco más potente para crisis generalizadas idiopáticas (tónico-clónicas, mioclonías y ausencias). <em>Toxicidad crítica:</em> 1) <strong>Altamente teratogénico:</strong> genera defectos del tubo neural (espina bífida en 1-2%), cardiopatías congénitas y disminución del coeficiente intelectual con riesgo aumentado de trastorno del espectro autista; 2) <strong>Hepatotoxicidad aguda fulminante idiosincrática</strong> (mayor riesgo en menores de 2 años con metabolopatías); 3) Pancreatitis aguda necrotizante; 4) Aumento marcado de peso, alopecia y trombocitopenia dosis-dependiente.",
        "• <strong>Carbamazepina:</strong> Bloqueador potente de canales de sodio dependientes de voltaje. Fármaco clásico de elección para crisis focales. <em>Toxicidad crítica:</em> 1) <strong>Síndrome de Stevens-Johnson / Necrólisis Epidérmica Tóxica (NET)</strong> (asociado fuertemente al alelo HLA-B*1502 en poblaciones asiáticas); 2) <strong>Hiponatremia severa</strong> por secreción inapropiada de hormona antidiurética (SIADH), especialmente en adultos mayores; 3) Aplasia medular, leucopenia y agranulocitosis; 4) <strong>Inducción enzimática potente de citocromos hepáticos (CYP3A4)</strong>, disminuyendo los niveles de anticonceptivos orales, warfarina y estatinas. <em>Peligro EUNACOM:</em> ¡Empeora las crisis de ausencia y las mioclonías!",
        "• <strong>Fenitoína (Difenilhidantoína):</strong> Bloqueador de canales de sodio con <strong>farmacocinética no lineal de saturación (Michaelis-Menten)</strong>: a concentraciones terapéuticas, la vía metabólica se satura, por lo que pequeños incrementos de dosis pueden provocar saltos bruscos y tóxicos en los niveles plasmáticos. <em>Toxicidad crónica:</em> Hiperplasia gingival masiva, hirsutismo, facies tosca, neuropatía periférica, osteomalacia por depleción de vitamina D, atrofia cerebelosa con ataxia y nistagmo irreversible, anemia megaloblástica por déficit de folato. Su rango terapéutico estrecho es de <strong>10 a 20 mcg/mL</strong>.",
        "• <strong>Lamotrigina:</strong> Bloqueador de canales de sodio y reductor de la liberación presináptica de glutamato. Fármaco de amplio espectro. <em>Toxicidad crítica:</em> <strong>Erupción cutánea grave y síndrome de Stevens-Johnson</strong>. Para evitarlo, requiere una titulación escalonada ultra-lenta (iniciar con 25 mg/día e incrementar cada 2 semanas). <em>Interacción de oro:</em> El ácido valproico inhibe la glucuronidación de la lamotrigina, duplicando su vida media; por ende, si se coadministran, la dosis de lamotrigina DEBE reducirse a la mitad.",
        "• <strong>Levetiracetam:</strong> Se une selectivamente a la proteína vesicular sináptica <strong>SV2A</strong>, inhibiendo la exocitosis de vesículas de glutamato. Fármaco moderno de amplio espectro de primera línea. Excreción renal predominante sin metabolización por citocromo P450 (nulas interacciones farmacológicas). <em>Efectos adversos principales:</em> <strong>Alteraciones neuropsiquiátricas y conductuales</strong> (irritabilidad extrema, hostilidad, agresividad, depresión mayor, ideación suicida y psicosis reactiva)."
      ]
    },
    {
      "subhead": "4. Selección Terapéutica de Primera Línea en Poblaciones Especiales (Mujer Fértil y Adulto Mayor)",
      "paragraphs": [
        "La elección del fármaco antiepiléptico se personaliza según el tipo de crisis, la edad, el sexo y las comorbilidades (véase Matriz Terapéutica 10.8):",
        "• <strong>Crisis de Inicio Focal (con o sin generalización secundaria):</strong> Fármacos de primera línea son <strong>Lamotrigina</strong>, <strong>Levetiracetam</strong> o <strong>Carbamazepina</strong> (u Oxcarbazepina). La fenitoína ha quedado relegada a segunda o tercera línea por sus efectos adversos a largo plazo.",
        "• <strong>Crisis Generalizadas Idiopáticas (Epilepsia Mioclónica Juvenil, Ausencias, GTC):</strong> El fármaco más efectivo es el <strong>Ácido Valproico</strong> en varones. Como alternativa moderna de primera línea se utilizan <strong>Levetiracetam</strong> o <strong>Lamotrigina</strong>. <em>Regla de exclusión absoluta:</em> NUNCA utilizar Carbamazepina, Fenitoína, Gabapentina ni Pregabalina en crisis generalizadas idiopáticas, pues bloquean canales de sodio de manera estrecha y agravan severamente las ausencias y mioclonías.",
        "• <strong>Mujer en Edad Fértil y Planificación del Embarazo:</strong> El <strong>Ácido Valproico está FORMALMENTE CONTRAINDICADO</strong> debido a su elevadísimo índice teratogénico. Los fármacos de elección son <strong>Lamotrigina</strong> o <strong>Levetiracetam</strong> en monoterapia y a la menor dosis efectiva posible. Es mandatorio suplementar con <strong>Ácido Fólico en dosis altas (5 mg/día VO)</strong> desde al menos 3 meses antes de la concepción y durante todo el primer trimestre.",
        "• <strong>Adulto Mayor (> 65 años) y Polifarmacia:</strong> El cerebro senescente tiene mayor sensibilidad a efectos sedantes y menor masa renal/hepática. Deben <strong>evitarse estrictamente los inductores enzimáticos potentes (Carbamazepina, Fenitoína, Fenobarbital)</strong> por riesgo de interacciones múltiples con anticoagulantes y fármacos cardiovasculares, hiponatremia y osteoporosis. Los fármacos de elección son <strong>Levetiracetam</strong> (iniciar a dosis bajas como 250-500 mg c/12 h y ajustar por filtración glomerular) o <strong>Lamotrigina</strong>."
      ]
    },
    {
      "subhead": "5. Monitorización Plasmática, Interacciones Farmacológicas y Definición de Epilepsia Refractaria",
      "paragraphs": [
        "La monitorización de niveles plasmáticos de FAEs no es necesaria de rutina para todos los medicamentos, pero resulta obligatoria en: 1) <strong>Fenitoína</strong> (por su cinética de saturación no lineal, rango 10-20 mcg/mL); 2) Sospecha fundada de toxicidad clínica o sobredosis; 3) Sospecha de falta de adherencia al tratamiento; y 4) Embarazo (los niveles de Lamotrigina caen drásticamente en el segundo y tercer trimestre por hiperfiltración y aumento de glucuronidación hepática inducida por estrógenos, requiriendo monitorización y alza de dosis para prevenir crisis).",
        "<strong>Definición de Epilepsia Refractaria (Farmacorresistente):</strong> La ILAE define la epilepsia refractaria como la <em>falla en lograr el control sostenido de crisis tras el ensayo adecuado de al menos DOS fármacos antiepilépticos de primera línea bien tolerados, apropiadamente seleccionados para el tipo de crisis y utilizados en monoterapia o combinación en dosis terapéuticas plenas</em>.",
        "Todo paciente que cumpla criterios de epilepsia farmacorresistente debe ser derivado a un centro terciario especializado con Unidad de Epilepsia para evaluación prequirúrgica (Video-EEG prolongado, RM 3T con volumetría hipocámpica, PET cerebral y evaluación neuropsicológica) para determinar si es candidato a <strong>cirugía de resección epileptogénica</strong> (como lobectomía temporal anterior o lesionectomía) o a terapias paliativas de neuroestimulación (estimulador del nervio vago - VNS)."
      ]
    }
  ],
  "table": {
    "title": "Clasificación Operativa ILAE 2017 de las Crisis Epilépticas: Semiología y Correlato Neuroanatómico",
    "headers": [
      "Categoría ILAE",
      "Subtipo Clínico",
      "Semiología Cardinal y Nivel de Conciencia",
      "Hallazgos Clave de Examen / EEG"
    ],
    "rows": [
      [
        "Inicio Focal: Conciencia Preservada",
        "Focal Motora o Sensitiva (antigua Focal Simple)",
        "Conciencia intacta; interactúa y recuerda. Paroxismos motores clónicos focales (marcha jacksoniana), parestesias o auras",
        "Descargas focales limitadas a corteza somatotópica contralateral"
      ],
      [
        "Inicio Focal: Conciencia Alterada",
        "Focal Discognitiva (antigua Focal Compleja)",
        "Desconexión del medio, mirada fija, amnesia del evento y automatismos oromasticatorios (chupeteo) o manuales",
        "Ondas agudas focales de origen temporal anterior o frontobasal"
      ],
      [
        "Inicio Focal con progresión Bilateral",
        "Focal a Tónico-Clónica Bilateral",
        "Inicia con semiología focal motora o sensitiva, propagándose rápidamente a contracción tónica y clonías bilaterales",
        "Foco epileptiforme inicial que se propaga y sincroniza bilateralmente"
      ],
      [
        "Inicio Generalizado: Motoras Mayores",
        "Tónico-Clónica Generalizada (GTC)",
        "Pérdida brusca de conciencia, grito ictal, fase tónica (10-20 s) con cianosis, fase clónica simétrica (30-60 s) y relajación esfínteres",
        "Paroxismos bilaterales simétricos y sincrónicos de polipunta-onda generalizada"
      ],
      [
        "Inicio Generalizado: No Motoras",
        "Crisis de Ausencia Típicas",
        "Detención motora y del habla súbita (5-15 s) con mirada fija; sin caída ni confusión postictal; retoma actividad previa de inmediato",
        "Patognomónico: descargas generalizadas de punta-onda a 3 Hz sincrónicas"
      ],
      [
        "Inicio Generalizado: Motoras Breves",
        "Crisis Mioclónicas",
        "Sacudidas musculares bruscas e involuntarias bilaterales breves (\"sacudida eléctrica\") en brazos, matinales al despertar",
        "Polipunta-onda generalizada; sello de la Epilepsia Mioclónica Juvenil"
      ]
    ]
  },
  "severityTable": {
    "title": "Fármacos Antiepilépticos (FAEs): Mecanismos, Toxicidades Graves y Reacciones Adversas Críticas",
    "headers": [
      "Fármaco Antiepiléptico",
      "Mecanismo de Acción Principal",
      "Efectos Adversos Graves / Reacciones Idiosincráticas",
      "Monitoreo Obligatorio y Trampas EUNACOM"
    ],
    "rows": [
      [
        "Ácido Valproico",
        "Bloqueo canales Na+, aumento síntesis y disminución degradación de GABA",
        "Teratogenicidad severa (espina bífida 1-2%, cardiopatías, autismo, bajo CI); hepatotoxicidad fulminante; pancreatitis; trombocitopenia",
        "FORMALMENTE PROSCRITO en mujeres en edad fértil. Monitorear hemograma y perfil hepático."
      ],
      [
        "Carbamazepina",
        "Bloqueo selectivo de canales de sodio voltaje-dependientes",
        "Síndrome de Stevens-Johnson / NET (asociado a HLA-B*1502); hiponatremia severa por SIADH; agranulocitosis; inducción de CYP450",
        "Monitorear natremia y hemograma. ¡Empeora crisis de ausencia y mioclonías!"
      ],
      [
        "Fenitoína",
        "Bloqueo selectivo de canales de sodio voltaje-dependientes",
        "Cinética no lineal (saturación Michaelis-Menten); hiperplasia gingival; hirsutismo; atrofia cerebelosa irreversible con ataxia; anemia megaloblástica",
        "Nivel terapéutico 10-20 mcg/mL. EV nunca en suero glucosado (cristaliza). Infusión lenta con monitor ECG por arritmias."
      ],
      [
        "Lamotrigina",
        "Bloqueo canales Na+ y disminución de liberación presináptica de glutamato",
        "Rash cutáneo severo y Síndrome de Stevens-Johnson (riesgo se duplica si se coadministra con valproato o titulación rápida)",
        "1ª elección en mujer fértil y embarazo. Titulación ultra-lenta obligatoria. Reducir dosis a la mitad si toma valproato."
      ],
      [
        "Levetiracetam",
        "Unión selectiva a la proteína de vesícula sináptica SV2A",
        "Trastornos psiquiátricos y conductuales: irritabilidad extrema, hostilidad, agresividad, depresión mayor, psicosis",
        "1ª elección en adultos mayores y polimedicados (nulas interacciones CYP450). Ajustar estrictamente por función renal."
      ]
    ]
  },
  "treatmentTable": {
    "title": "Matriz de Selección Terapéutica de Primera Línea según Tipo de Crisis y Perfil del Paciente (Guías GES)",
    "headers": [
      "Escenario Clínico / Perfil",
      "Fármaco de Elección (1ª Línea)",
      "Dosis Habitual y Titulación",
      "Fármacos Proscritos o Contraindicados y Justificación"
    ],
    "rows": [
      [
        "Crisis de Inicio Focal (adulto estándar)",
        "Lamotrigina o Levetiracetam o Carbamazepina",
        "Lamotrigina 100-200 mg/día; Levetiracetam 1000-2000 mg/día; Carbamazepina 400-800 mg/día",
        "Evitar Fenitoína como primera línea por cinética compleja y toxicidad acumulativa a largo plazo."
      ],
      [
        "Crisis Generalizadas Idiopáticas (varones)",
        "Ácido Valproico",
        "500 a 1500 mg/día VO (fraccionado c/12 h)",
        "Contraindicadas Carbamazepina y Fenitoína: agravan severamente ausencias y mioclonías."
      ],
      [
        "Mujer en Edad Fértil o Embarazo",
        "Lamotrigina o Levetiracetam + Ácido Fólico 5 mg/día",
        "Lamotrigina 100-200 mg/día (titular muy lento); Levetiracetam 1000-1500 mg/día",
        "TOTALMENTE PROSCRITO el Ácido Valproico por riesgo teratogénico mayor (espina bífida, TEA, bajo CI)."
      ],
      [
        "Adulto Mayor (> 65 años) / Polifarmacia",
        "Levetiracetam o Lamotrigina",
        "Levetiracetam 500-1000 mg/día (ajustar por VFG); Lamotrigina 50-100 mg/día",
        "Evitar Carbamazepina y Fenitoína por inducción de citocromo P450, hiponatremia y deterioro cognitivo."
      ],
      [
        "Crisis de Ausencia Puras",
        "Etosuximida (elección) o Ácido Valproico",
        "Etosuximida 250 mg c/12 h; Ácido Valproico 500 mg c/12 h",
        "Contraindicadas Carbamazepina, Fenitoína y Tiagabina: pueden precipitar un status de ausencia."
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 26 años, recién casada y con deseos de fertilidad a corto plazo, portadora de epilepsia generalizada idiopática diagnosticada a los 16 años, actualmente asintomática sin crisis desde hace 3 años bajo tratamiento con Ácido Valproico 500 mg cada 12 horas. Consulta a su médico de atención primaria en policlínico para planificar su embarazo y solicitar recetas. Al examen neurológico se encuentra completamente normal y su último control de función hepática y hemograma resulta estrictamente fisiológico.",
    "conducta": "El Ácido Valproico es el fármaco antiepiléptico con mayor potencial teratogénico conocido, asociándose a un riesgo del 1-2% de defectos del tubo neural (espina bífida, mielomeningocele), malformaciones cardíacas, anomalías craneofaciales y deterioro neurocognitivo a largo plazo con riesgo triplicado de trastorno del espectro autista en la descendencia. En una mujer en edad fértil que planifica embarazo, el valproato está formalmente contraindicado. La conducta obligatoria y correcta es rotar de manera programada y gradual a un FAE de primera línea con excelente perfil de seguridad materno-fetal, siendo la Lamotrigina o el Levetiracetam las alternativas de elección, titulándolos lentamente mientras se retira el valproato, e indicando simultáneamente suplementación con Ácido Fólico en dosis altas (5 mg/día) desde al menos 3 meses antes de la concepción."
  },
  "explicacion": "El Ácido Valproico es el fármaco antiepiléptico con mayor potencial teratogénico conocido, asociándose a un riesgo del 1-2% de defectos del tubo neural (espina bífida, mielomeningocele), malformaciones cardíacas, anomalías craneofaciales y deterioro neurocognitivo a largo plazo con riesgo triplicado de trastorno del espectro autista en la descendencia. En una mujer en edad fértil que planifica embarazo, el valproato está formalmente contraindicado. La conducta obligatoria y correcta es rotar de manera programada y gradual a un FAE de primera línea con excelente perfil de seguridad materno-fetal, siendo la Lamotrigina o el Levetiracetam las alternativas de elección, titulándolos lentamente mientras se retira el valproato, e indicando simultáneamente suplementación con Ácido Fólico en dosis altas (5 mg/día) desde al menos 3 meses antes de la concepción.",
  "keyPoints": [
    "La ILAE clasifica las crisis según su inicio en Focales (conciencia preservada o alterada) y Generalizadas (motoras y no motoras/ausencias).",
    "El GES N° 28 garantiza confirmación diagnóstica con especialista y EEG en ≤ 30 días, y tratamiento farmacológico gratuito de por vida.",
    "La Lamotrigina y el Levetiracetam son los FAEs de elección en mujeres en edad fértil y embarazo; el Ácido Valproico está formalmente proscrito por teratogenicidad mayor.",
    "La Carbamazepina y la Fenitoína bloquean canales de sodio de forma estrecha y están contraindicadas en crisis generalizadas idiopáticas (empeoran ausencias y mioclonías).",
    "El Levetiracetam es ideal en adultos mayores y polimedicados por nula interacción con citocromo P450, pero puede inducir alteraciones psiquiátricas e irritabilidad.",
    "La epilepsia refractaria se define como la persistencia de crisis tras el ensayo adecuado de 2 FAEs tolerados y apropiados, obligando a derivar a cirugía de epilepsia."
  ],
  "questions": [
    {
      "stem": "Un niño de 3 años presenta una crisis convulsiva tónico clónica, en relación a\nun alza térmica hasta 39,6°C. Al examen físico está en buenas condiciones, con\npresión y pulso normal, faringe eritematosa, sin signos neurológicos focales. La\nconducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Indicar antipiréticos en relación a las alzas térmica, sin necesidad de anticonvulsivantes ni de estudio adicional"
        },
        {
          "id": "B",
          "text": "Indicar paracetamol y diazepam durante las alzas térmicas"
        },
        {
          "id": "C",
          "text": "Solicitar electroencefalograma"
        },
        {
          "id": "D",
          "text": "Solicitar hemograma, hemocultivo, exámenes de orina y estudio de líquido cefalorraquídeo"
        },
        {
          "id": "E",
          "text": "Solicitar resonancia magnética nuclear e iniciar carbamazepina"
        }
      ],
      "correcta": "A",
      "explicacion": "La pregunta describe un caso clásico de una crisis convulsiva febril simple en un niño de 3 años. Las características clave son: edad entre 6 meses y 5 años, crisis convulsiva generalizada (tónico-clónica) asociada a un alza térmica (sin evidencia de infección del sistema nervioso central), corta duración (implícito al estar \"en buenas condiciones\" y ser un caso típico), y ausencia de signos neurológicos focales o antecedente de problemas neurológicos previos. El examen físico general, con una faringe eritematosa, sugiere una infección viral común como causa de la fiebre.\n\nEn este escenario, la conducta más adecuada es indicar antipiréticos para el manejo sintomático de la fiebre (mejorar el confort del niño, no para prevenir futuras convulsiones febriles, ya que la evidencia no respalda esta idea) y ofrecer tranquilidad a los padres. No se necesitan anticonvulsivantes de forma profiláctica o crónica para las crisis febriles simples, ya que los riesgos de los fármacos superan los beneficios en la prevención de la recurrencia o el desarrollo de epilepsia. Tampoco se requiere un estudio adicional exhaustivo como EEG, RMN o punciones lumbares en el contexto de una crisis febril simple, salvo que existan características atípicas (crisis prolongada, focal, recurrencia en menos de 24h, edad fuera del rango, signos neurológicos focales, sospecha de infección del SNC).\n\nPor lo tanto, la opción A se alinea con las guías de manejo de la crisis febril simple, que enfatizan la identificación y tratamiento de la causa de la fiebre, el uso de antipiréticos para el confort, y la abstención de estudios diagnósticos invasivos o medicación antiepiléptica a largo plazo en ausencia de banderas rojas.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.007"
    },
    {
      "stem": "Un hombre de 35 años, sin patología previa, presenta cuadro caracterizado\npor movimientos repetitivos involuntarios de la mano derecha, seguidos de\ndesviación de la mirada a derecha y convulsión tónico clónica de 3 minutos de\nduración. Niega uso de fármacos y drogas. Al examen físico se aprecia un\npaciente en buenas condiciones, sin alteraciones en el examen neurológico. La\nconducta más adecuada es:",
      "options": [
        {
          "id": "A",
          "text": "Iniciar carbamazepina y solicitar RMN de cerebro"
        },
        {
          "id": "B",
          "text": "Iniciar fenitoína, sin necesidad de realizar exámenes"
        },
        {
          "id": "C",
          "text": "Solicitar electroencefalograma y decidir manejo según el resultado"
        },
        {
          "id": "D",
          "text": "Solicitar TAC de cerebro, sin contraste"
        },
        {
          "id": "E",
          "text": "Enviar a domicilio, sin necesidad de mayor estudio y reconsultar sólo en caso de repetirse el cuadro"
        }
      ],
      "correcta": "A",
      "explicacion": "La respuesta correcta es la a) Iniciar carbamazepina y solicitar RMN de cerebro. El paciente presenta una crisis convulsiva con características focales claras (movimientos repetitivos de la mano derecha, desviación de la mirada a derecha) que luego se generaliza a una crisis tónico-clónica. Este cuadro clínico se define como una \"crisis de inicio focal con generalización secundaria\" y es altamente sugestivo de epilepsia focal, aunque sea la primera vez que ocurre (primera crisis no provocada).\n\nLa conducta más adecuada frente a una primera crisis convulsiva con características focales es iniciar el estudio etiológico de manera exhaustiva y considerar el inicio de tratamiento antiepiléptico (MAE) si el riesgo de recurrencia es alto o si la crisis es de alto impacto. En este caso, la carbamazepina es un fármaco antiepiléptico de primera línea para crisis focales. La Resonancia Magnética Nuclear (RMN) de cerebro es el estudio de imagen de elección para investigar la etiología de las crisis focales, ya que permite detectar lesiones estructurales sutiles (tumores, malformaciones corticales, esclerosis mesial temporal, cavernomas, etc.) que no serían visibles en una tomografía computarizada (TAC) o que requieren un contraste específico. Es fundamental identificar la causa subyacente para un manejo adecuado y pronóstico.\n\nLa combinación de iniciar un fármaco efectivo para crisis focales y solicitar el estudio de imagen más sensible para su etiología convierte a esta opción en la más completa y apropiada para el manejo inicial de este paciente. Dada la juventud del paciente y la ausencia de patología previa, la búsqueda de una causa estructural es prioritaria.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.007"
    },
    {
      "stem": "Un paciente VIH positivo, sin tratamiento antirretroviral, consulta al\nservicio de urgencias por compromiso de conciencia. La familia refiere que en\nlas últimas semanas presento de forma progresiva dificultad para caminar,\nrefiriendo “falta de fuerzas” en extremidad inferior derecha. Además, presentó\nuna crisis convulsiva en una ocasión. Se solicita un TAC de cerebro para el\nestudio de la etiología. ¿Cuál es el hallazgo más probable de encontrar en este\nexamen?",
      "options": [
        {
          "id": "A",
          "text": "Signos de hipertensión endocraneana ­­13­infectologia/ 4/9"
        },
        {
          "id": "B",
          "text": "TAC normal"
        },
        {
          "id": "C",
          "text": "Lesiones focales captantes de contraste en anillo"
        },
        {
          "id": "D",
          "text": "Multiples lesiones focales hipodensas de sustancia blanca"
        },
        {
          "id": "E",
          "text": "Hidrocefalia con aumento de los tamaños de los ventrículos"
        }
      ],
      "correcta": "C",
      "explicacion": "El paciente presenta un cuadro neurológico progresivo y agudo (compromiso de conciencia, dificultad para caminar, crisis convulsiva) en el contexto de una infección por VIH sin tratamiento antirretroviral. Esta situación de inmunosupresión severa lo hace vulnerable a infecciones oportunistas del sistema nervioso central (SNC). La encefalitis por *Toxoplasma gondii* es la causa más común de lesiones intracraneales focales en pacientes con VIH avanzado que no reciben tratamiento o profilaxis adecuada.\n\nLa presentación clínica de la toxoplasmosis cerebral concuerda perfectamente con el caso descrito: déficit neurológico focal (paresia en extremidad inferior derecha), crisis convulsivas y alteración del estado de conciencia. Estos síntomas apuntan a una lesión ocupante de espacio en el cerebro. En el estudio con tomografía computarizada (TAC) de cerebro, las lesiones por toxoplasmosis se caracterizan típicamente por ser lesiones focales múltiples (aunque pueden ser solitarias en un 30% de los casos), localizadas frecuentemente en los ganglios basales, el tálamo, la unión córtico-medular y la corteza cerebral.\n\nEl hallazgo radiológico más característico de la toxoplasmosis cerebral, especialmente después de la administración de contraste, son las \"lesiones focales captantes de contraste en anillo\". Este patrón de realce indica la presencia de inflamación y disrupción de la barrera hematoencefálica en la periferia de la lesión, rodeando un centro necrótico. Por lo tanto, dado el cuadro clínico y el estado inmunológico del paciente, la opción \"c) Lesiones focales captantes de contraste en anillo\" representa el hallazgo más probable en el TAC de cerebro.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.007"
    },
    {
      "stem": "Un niño de 7 años, sin antecedentes de importancia, presenta una\nconvulsión tónico clónica de 5 minutos de duración, autolimitada. Se recupera\nbien y al momento de la consulta se encuentra asintomático. El examen físico,\nincluyendo un adecuado examen neurológico es normal. El diagnóstico más\nprobable es:",
      "options": [
        {
          "id": "A",
          "text": "Convulsión febril benigna"
        },
        {
          "id": "B",
          "text": "Encefalitis herpética"
        },
        {
          "id": "C",
          "text": "Epilepsia"
        },
        {
          "id": "D",
          "text": "Tumor cerebral"
        },
        {
          "id": "E",
          "text": "Meningitis"
        }
      ],
      "correcta": "C",
      "explicacion": "El caso clínico describe un niño de 7 años que presenta un primer episodio de convulsión tónico-clónica generalizada, sin un desencadenante aparente (como fiebre, traumatismo o infección). La convulsión fue autolimitada y el paciente tuvo una recuperación completa, encontrándose asintomático y con un examen neurológico normal al momento de la evaluación.\n\nLa definición de **epilepsia** de la Liga Internacional contra la Epilepsia (ILAE) incluye la ocurrencia de al menos una crisis convulsiva no provocada. Aunque para un diagnóstico definitivo se suele requerir una segunda crisis o hallazgos en el electroencefalograma (EEG) que indiquen un alto riesgo de recurrencia, un primer evento de este tipo en un niño sano, sin fiebre y con examen normal, es la forma de presentación más común de la epilepsia. Por lo tanto, es el diagnóstico más probable a considerar y estudiar. La ausencia de fiebre y la edad del paciente (7 años) hacen muy poco probable una convulsión febril. La recuperación completa y la normalidad del examen neurológico descartan razonablemente procesos agudos y graves como meningitis o encefalitis.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.007"
    }
  ],
  "vignetteText": "Mujer de 26 años, recién casada y con deseos de fertilidad a corto plazo, portadora de epilepsia generalizada idiopática diagnosticada a los 16 años, actualmente asintomática sin crisis desde hace 3 años bajo tratamiento con Ácido Valproico 500 mg cada 12 horas. Consulta a su médico de atención primaria en policlínico para planificar su embarazo y solicitar recetas. Al examen neurológico se encuentra completamente normal y su último control de función hepática y hemograma resulta estrictamente fisiológico."
}
```

## PREGUNTAS REALES DEL BANCO (11; por código de la clase y por búsqueda "epilepsia, clasificacion, farmacos, antiepilepticos, monitorizacion")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Diciembre 2024 · Pregunta 140 · confianza 0.85
Niño o adolescente con conducta disruptiva + crisis de ausencia ¿Como estudiarlo?
- A) Electroencefalograma
- B) TAC
- C) RNM
- D) Psicometria
- E) Control sano habitual
**Correcta: A**
Explicación del banco: Conducta / Tratamiento indicado: **Electroencefalograma** (opción **A**). Crisis focal (por lesión focal): RM/TAC con contraste + carbamazepina/fenitoína. Crisis generalizada (epilepsia/tóxico-metabólica): exámenes generales + EEG + ácido valproico/lamotrigina. De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [2] EUNACOM Diciembre 2019 · Pregunta 41 · confianza 0.85
Un niño de 16 años convulsiona al despertar, en la mañana siguiente de haber estado jugando videojuegos hasta tarde. Además, refiere mioclonías matinales frecuentes, desde hace algunos meses. Su examen físico es normal, al igual que su examen neurológico. ¿Cuál es el tratamiento de elección?
- A) Suspender por completo los videojuegos
- B) Ácido valproico
- C) Carbamazepina
- D) Melatonina en la noche
- E) Diazepam si convulsiona nuevamente
**Correcta: B**
Explicación del banco: Tiene una epilepsia mioclónica. Los niños con epilepsia sí pueden ver pantallas, pero máximo 1 hora al día, con una buena iluminación.

### [3] EUNACOM Diciembre 2017 · Pregunta 133 · confianza 0.85
Una paciente de 14 años sufre una convulsión tónico clónica, luego de una noche con privación de sueño y exposición a pantallas. Previo a esto, presentaba movimientos bruscos, como sacudidos, de manera involuntaria. Sus amigas relatan que en ocasiones “se queda pegada” por algunos segundos. ¿Cuál es el diagnóstico más probable?
- A) Epilepsia mioclónica juvenil
- B) Epilepsia de ausencia juvenil
- C) Epilepsia tónicoclónica
- D) Epilepsia focal
- E) Crisis convulsiva por privación de sueño
**Correcta: A**
Explicación del banco: Diagnóstico: **Epilepsia mioclónica juvenil** (opción **A**). Es una epilepsia mioclónica clásica.. Esta clase aborda las crisis convulsivas, la epilepsia, las convulsiones febriles y el estatus convulsivo. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [4] EUNACOM Enero 2023 · Pregunta 143 · confianza 0.62
Paciente con mirada forzada hacia la derecha, luego espasmo hemifacial, luego movimientos de sacudidas en las 4 extremidades. ¿Diagnóstico más probable?
- A) Crisis focal con generalización secundaria
- B) Crisis tónico-clónica generalizada primaria
- C) Estatus epiléptico no convulsivo
- D) Accidente isquémico transitorio (AIT)
- E) Crisis mioclónica juvenil
**Correcta: A**
Explicación del banco: Diagnóstico: **Crisis focal con generalización secundaria** (opción **A**). Crisis focal con generalización secundaria. Esta clase aborda las crisis convulsivas, la epilepsia, las convulsiones febriles y el estatus convulsivo. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [5] EUNACOM Julio 2017 · Pregunta 144 · confianza 0.95
Una paciente de 25 años, cursando con embarazo de 30 semanas, con antecedente de epilepsia hace 1 año, presenta crisis convulsivas tónico-clónicas, desde hace una hora. Al examen físico se aprecia edema de extremidades inferiores, FC: 87x’ y PA: 160/100 mmHg. La ecografía obstétrica muestra feto vivo. ¿Cuál es la primera medida?
- A) Administrar nifedipino
- B) Administrar fenobarbital
- C) Administrar diazepam
- D) Administrar sulfato de magnesio
- E) Administrar misoprostol
**Correcta: D**
Explicación del banco: Aunque haya teido antecedente de epilepsia, el diagnóstico ahora es una eclam- sia, que en primer lugar recibe MgSO4.

### [6] EUNACOM Diciembre 2024 · Pregunta 147 · confianza 0.9
Adulto mayor con temblor al escribir, un temblor esencial ¿Con que se trata? a.​ Propanolol
- A) Accidente cerebrovascular
- B) Epilepsia
- C) Esclerosis múltiple
- D) Enfermedad de Parkinson
- E) Migraña
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Accidente cerebrovascular). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Epilepsia, Esclerosis múltiple) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [7] EUNACOM Julio 2016 · Pregunta 78 · confianza 0.68
Un niño de 7 años es traído por su madre, porque presenta mal rendimiento escolar. Tiene un hermano con déficit atencional diagnosticado. Durante el examen, presenta un breve episodio de desconexión con el medio. ¿Con que examen se debe continuar el estudio de este paciente?
- A) Psicometría
- B) Evaluación psicopedagógica
- C) Electroencefalograma
- D) TAC cerebral
- E) Audiometría
**Correcta: C**
Explicación del banco: Tiene una probable epilepsia por crisis de ausencia. Se estudia con EEG, al igual que las demás epilepsias primarias. Su hermano también debería estudiarse.

### [8] EUNACOM Diciembre 2024 · Pregunta 26 · confianza 0.6
RN de término convulsión a las 12 hrs de 2 minutos de duración. A la evaluación todo normal hgtes: diagnóstico más probable
- A) Epilepsia
- B) Hipoglicemia
- C) Hipocalcemia
- D) Hemorragia intracerebral
- E) Accidente cerebrovascular
**Correcta: B**
Explicación del banco: Diagnóstico: **Hipoglicemia** (opción **B**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL). Las opciones alternativas (Epilepsia, Hipocalcemia) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [9] EUNACOM Diciembre 2022 · Pregunta 96 · confianza 0.6
Un paciente de 84 años es traído a urgencia por familiares. Refieren que sus síntomas iniciaron hace 7 días, consistentes en tos con expectoración purulenta, sensación febril y disnea de esfuerzos. En las últimas noches se ha levantado algo agitado y anoche estuvo muy agitado, gritando que habían entrado extraterrestres en su casa y que lo querían matar. Al examen físico, tiene T°: 37,9°C, PA: 154/100, FC: 88x’, FR: 25x’, satura: 93% a FiO2 ambienta, tiene examen pulmonar con crepitaciones en la base derecha y examen cardíaco con ritmo regular en dos tiempos sin soplos. ¿Cuál es el diagnóstico más probable?
- A) Accidente vascular encefálico
- B) Delirium
- C) Epilepsia del lóbulo temporal
- D) Demencia tipo Alzheimer
- E) Esquizofrenia paranoide
**Correcta: C**
Explicación del banco: Diagnóstico: **Epilepsia del lóbulo temporal** (opción **C**). Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [10] EUNACOM Julio 2017 · Pregunta 77 · confianza 0.6
Un niño de 10 años convulsiona a la mañana siguiente, de haber trasnochado jugan- do videojuegos. Además refiere mioclonías matinales frecuentes, desde hace algunos meses. Su examen físico es normal, al igual que su examen neurológico. ¿Cuál es la me- dida más adecuada?
- A) Prohibir por completo los videojuegos
- B) Iniciar ácido valproico
- C) Iniciar carbamazepina
- D) Iniciar fenobarbital
- E) Solicitar resonancia magnética nuclear de cerebro
**Correcta: B**
Explicación del banco: Es una probable epilepsia mioclónica, que se trata preferentemente con ácido val- proico. Sí pueden jugar videojuegos, pero con pantallas e iluminación adecuadas y por ciertos horarios limitados. Es una pregunta que excede los conocimientos de un médico general.

### [11] EUNACOM Julio 2025 · Pregunta 139 · confianza 0.55
Paciente usuario de cocaína y en tratamiento con carbamazepina por epilepsia. Llega a urgencias con agitación, taquicardia y midriasis. ¿Cuál es el examen de urgencia más relevante a solicitar?
- A) Niveles séricos de carbamazepina y ECG
- B) TAC de cerebro
- C) Ecografía abdominal
- D) Radiografía de tórax
- E) Hemograma y VHS
**Correcta: A**
Explicación del banco: Cocaína + carbamazepina: riesgo de interacción (cocaína aumenta niveles de carbamazepina) y toxicidad cardíaca (QRS ancho, arritmias). Urgencia: ECG para evaluar arritmias + niveles de carbamazepina.
