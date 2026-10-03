# CLASE neuro-09 · Neurologia 10.9: Status Epiléptico Convulsivo: Protocolo Escalonado de Rescate y Neurointensivo

Escribe `classes/lessons/neuro-09.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-09" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-06: Neurologia 10.6: Migraña (Fisiopatología, Criterios IHS, Triptanes y Profilaxis) y Cefalea Tensional
- neuro-07: Neurologia 10.7: Cefalea en Racimos (Cluster) y Neuralgia del Trigémino: Diagnóstico Diferencial, Manejo Agudo y Preventivo
- neuro-08: Neurologia 10.8: Epilepsia del Adulto: Clasificación ILAE, Fármacos Antiepilépticos y Monitorización GES
- neuro-10: Neurologia 10.10: Primera Crisis Convulsiva del Adulto y Diagnóstico Diferencial con Síncope: Enfrentamiento, Criterios de Inicio de FAE y Banderas Rojas
- neuro-11: Neurologia 10.11: Enfermedad de Parkinson: Criterios Diagnósticos MDS, Terapia con Levodopa y Fluctuaciones Motoras
- neuro-12: Neurologia 10.12: Parkinsonismos Secundarios, Farmacológicos y Síndromes Parkinson-Plus

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-09",
  "classId": "neuro-09",
  "tier": 3,
  "blockNum": 2,
  "blockName": "Cefaleas, Síndromes Convulsivos y Epilepsia",
  "topicLabel": "10.9",
  "title": "Status Epiléptico Convulsivo: Protocolo Escalonado de Rescate y Neurointensivo",
  "perfilCode": "1.10.2.018",
  "dx": "Específico",
  "tx": "Completo",
  "seg": "Derivar",
  "ges": "Urgencia Médica GES / Riesgo Vital Inmediato · Rescate de urgencia prehospitalario y hospitalario en Unidad de Paciente Crítico (UPC) con monitorización electroencefalográfica continua.",
  "reconstrucciones": "Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026",
  "frecuencia": "Máxima rentabilidad clínica · Emergencia médica tiempo-dependiente con elevada morbimortalidad neuronal y sistémica",
  "algoTitle": "Protocolo Cronometrado de Rescate Escalonado en Status Epiléptico Convulsivo",
  "diagram": {
    "title": "Protocolo Cronometrado de Rescate en Status Epiléptico",
    "svg": "<svg viewBox=\"0 0 620 512\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Minuto 0 a 5: Soporte Vital Inmediato y Diagnóstico Inicial (ABC)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Vía aérea permeable · O2 al 100% · Vía venosa gruesa</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">Glicemia capilar INMEDIATA (descartar hipoglicemia)</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"warn\" x=\"100\" y=\"80\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">Minuto 5 a 10 (Fase 1: Rescate Inicial con Benzodiacepinas)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"107\" text-anchor=\"middle\">Lorazepam 4 mg EV en 2 min (0.1 mg/kg)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"118\" text-anchor=\"middle\">Si no hay vía: Midazolam 10 mg IM · Repetir 1 vez a los 5 min</text>\n  <path class=\"ln\" d=\"M310,130 V152\"/>\n  <rect class=\"dec\" x=\"70\" y=\"152\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"167\" text-anchor=\"middle\" font-weight=\"700\">¿Persiste Crisis Convulsiva tras Fase 1 Benzodiacepínica?</text>\n  <text class=\"sub\" x=\"310\" y=\"179\" text-anchor=\"middle\">Evaluación estricta de respuesta clínica motora al cumplirse 10 minutos de evolución</text>\n  <path class=\"ln\" d=\"M310,191 V221 H158 V231\"/>\n  <path class=\"ln\" d=\"M310,221 H462 V231\"/>\n  <text class=\"lbl\" x=\"158\" y=\"216\" text-anchor=\"middle\">Crisis Yugulada con Éxito</text>\n  <text class=\"lbl\" x=\"462\" y=\"216\" text-anchor=\"middle\">Persiste Crisis al Minuto 10 (Fase 2)</text>\n  <rect class=\"acc\" x=\"12\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">Vigilancia en Reanimación y Estudio Etiológico</text>\n  <text class=\"accS\" x=\"158\" y=\"258\" text-anchor=\"middle\">Monitorización cardiorrespiratoria continua</text>\n  <text class=\"accS\" x=\"158\" y=\"269\" text-anchor=\"middle\">Descartar infección, ACV, toxinas o abandono FAE</text>\n  <rect class=\"crit\" x=\"316\" y=\"231\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"246\" text-anchor=\"middle\" font-weight=\"700\">FAEs Endovenosos No Benzodiacepínicos</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"258\" text-anchor=\"middle\">Levetiracetam 60 mg/kg EV (máx 4.5 g) o</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"269\" text-anchor=\"middle\">Fenitoína 20 mg/kg EV en SF (máx 50 mg/min)</text>\n  <path class=\"ln\" d=\"M158,281 V291 H310 V303\"/>\n  <path class=\"ln\" d=\"M462,281 V291 H310 V303\"/>\n  <rect class=\"dec\" x=\"70\" y=\"303\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"318\" text-anchor=\"middle\" font-weight=\"700\">¿Persiste Crisis al Minuto 30 de Evolución? (Fase 3)</text>\n  <text class=\"sub\" x=\"310\" y=\"330\" text-anchor=\"middle\">Definición operacional de STATUS EPILÉPTICO REFRACTARIO (SEER)</text>\n  <path class=\"ln\" d=\"M310,342 V372 H158 V382\"/>\n  <path class=\"ln\" d=\"M310,372 H462 V382\"/>\n  <text class=\"lbl\" x=\"158\" y=\"367\" text-anchor=\"middle\">Yugulación en Fase 2</text>\n  <text class=\"lbl\" x=\"462\" y=\"367\" text-anchor=\"middle\">Persistencia a los 30 Minutos (SEER)</text>\n  <rect class=\"acc\" x=\"12\" y=\"382\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"397\" text-anchor=\"middle\" font-weight=\"700\">Mantener FAE de Mantenimiento y Controlar CPK</text>\n  <text class=\"accS\" x=\"158\" y=\"409\" text-anchor=\"middle\">Vigilar rabdomiolisis e insuficiencia renal aguda mioglobinúrica</text>\n  <text class=\"accS\" x=\"158\" y=\"420\" text-anchor=\"middle\">Hidratación vigorosa</text>\n  <rect class=\"crit\" x=\"316\" y=\"382\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"397\" text-anchor=\"middle\" font-weight=\"700\">Intubación Orotraqueal + Anestesia en UCI</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"409\" text-anchor=\"middle\">Inducción de coma anestésico con Propofol o Midazolam</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"420\" text-anchor=\"middle\">Meta: Supresión de brotes en EEG</text>\n  <path class=\"ln\" d=\"M158,432 V442 H310 V454\"/>\n  <path class=\"ln\" d=\"M462,432 V442 H310 V454\"/>\n  <rect class=\"acc\" x=\"100\" y=\"454\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"469\" text-anchor=\"middle\" font-weight=\"700\">Monitorización Neurointensiva Continua con EEG en UCI</text>\n  <text class=\"accS\" x=\"310\" y=\"481\" text-anchor=\"middle\">Mantener patrón de supresión de brotes por 24 a</text>\n  <text class=\"accS\" x=\"310\" y=\"492\" text-anchor=\"middle\">48 horas antes de retirar infusión anestésica</text>\n</svg>"
  },
  "contexto": "El status epiléptico convulsivo es una de las emergencias neurológicas más letales y tiempo-dependientes de la medicina interna y la urgencia. La ILAE 2015 estableció las definiciones operativas de tiempo: t1 (5 minutos), momento en el cual una crisis convulsiva tónico-clónica generalizada se torna anormalmente prolongada y debe iniciarse tratamiento farmacológico de rescate de inmediato; y t2 (30 minutos), momento a partir del cual se produce daño neuronal irreversible por excitotoxicidad y complicaciones sistémicas catastróficas (rabdomiolisis, falla renal aguda, acidosis láctica e hipertermia maligna). El pronóstico funcional y vital del paciente depende directamente de la rapidez con que se aplique el protocolo escalonado por fases.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología Celular del Status Epiléptico: Tiempos Críticos ILAE (t1 = 5 min y t2 = 30 min)",
      "paragraphs": [
        "En condiciones fisiológicas, una crisis convulsiva tónico-clónica generalizada autolimita espontáneamente antes de los 2 minutos gracias al agotamiento energético sináptico y a la acción compensatoria de los circuitos gabaérgicos inhibitorios. El <strong>status epiléptico</strong> se produce cuando <em>fracasan los mecanismos intrínsecos de terminación de la crisis</em> o se activan mecanismos aberrantes de mantenimiento paroxístico.",
        "La Liga Internacional contra la Epilepsia (ILAE 2015) introdujo una definición conceptual y operativa basada en dos dimensiones temporales críticas (véase Algoritmo 10.9 y Tabla 10.9):",
        "• <strong>Punto Temporal t1 (5 minutos):</strong> Representa el tiempo a partir del cual es sumamente improbable que la crisis cese espontáneamente y debe <strong>iniciarse el tratamiento farmacológico de emergencia (Fase 1)</strong>. A los 5 minutos de actividad continua, los receptores inhibitorios GABA-A postsinápticos comienzan a internalizarse hacia el citoplasma mediante endocitosis, perdiendo su respuesta farmacológica a las benzodiacepinas.",
        "• <strong>Punto Temporal t2 (30 minutos):</strong> Representa el tiempo a partir del cual la actividad eléctrica continua produce <strong>daño neuronal permanente e irreversible</strong> mediado por excitotoxicidad por glutamato, influjo masivo de calcio intracelular, estrés oxidativo mitocondrial y necrosis celular (especialmente en neuronas de la corteza cerebral, hipocampo CA1/CA3 y tálamo), asociándose además a complicaciones sistémicas graves como rabdomiolisis masiva y falla multiorgánica."
      ]
    },
    {
      "subhead": "2. Fase 1 de Rescate de Emergencia: Benzodiacepinas de Acción Rápida (Lorazepam y Midazolam)",
      "paragraphs": [
        "En los primeros 5 a 10 minutos (Fase 1), el objetivo prioritario es yugular la crisis de forma fulminante mediante el uso de <strong>Benzodiacepinas</strong>, las cuales actúan potenciando la entrada de cloro mediada por los receptores GABA-A residuales:",
        "• <strong>Lorazepam Endovenoso (Fármaco de Elección Hospitalario):</strong> Dosis de <strong>4 mg EV en bolo lento (0.1 mg/kg)</strong> administrado en 2 minutos. Si la convulsión no cede a los 5 minutos, se puede administrar una segunda y última dosis idéntica de 4 mg EV. El lorazepam es la benzodiacepina de referencia debido a su alta afinidad por el receptor GABA-A y su menor liposolubilidad comparativa con el diazepam, lo que se traduce en un volumen de distribución menor y una duración de acción terapéutica cerebral prolongada (12 a 24 horas).",
        "• <strong>Midazolam Intramuscular (Fármaco de Elección Prehospitalario o sin Vía Venosa):</strong> Dosis de <strong>10 mg IM en adultos (> 40 kg)</strong> o 5 mg IM (si peso < 40 kg). El ensayo clínico landmark <em>RAMPART</em> demostró que el midazolam IM administrado por paramédicos en ambulancia es tan eficaz o superior al lorazepam EV debido al ahorro de tiempo crítico al no requerir la instalación de una vía venosa periférica. También puede administrarse por vía intranasal o bucal.",
        "• <strong>Diazepam Endovenoso:</strong> Dosis de 10 mg EV administrado a una velocidad máxima de 2-5 mg/minuto (repetible a los 5 min, máx 20 mg). Aunque cruza la barrera hematoencefálica en segundos por su extrema liposolubilidad, se redistribuye masivamente al tejido adiposo corporal en 15 a 30 minutos, haciendo caer rápidamente sus niveles cerebrales por debajo del umbral terapéutico y permitiendo la reaparición precoz de las crisis."
      ]
    },
    {
      "subhead": "3. Fase 2 de Control Urgente: Antiepilépticos Endovenosos No Benzodiacepínicos (Levetiracetam, Fenitoína, Valproato)",
      "paragraphs": [
        "Si la actividad convulsiva persiste pasados <strong>10 minutos</strong> desde el inicio del rescate a pesar de la dosis adecuada de benzodiacepina, se pasa de inmediato a la <strong>Fase 2 (10 a 30 minutos)</strong>, administrando un fármaco antiepiléptico endovenoso en dosis de carga plena (véase Protocolo Farmacológico 10.9):",
        "• <strong>Levetiracetam Endovenoso (1ª Elección Moderna):</strong> Dosis de <strong>60 mg/kg EV (máximo 4.500 mg)</strong> diluido en 100 mL de solución salina, infundido en 10 minutos. El estudio multicéntrico <em>ESETT (2019)</em> demostró que el levetiracetam tiene una eficacia de yugulación idéntica a la fenitoína y al valproato (~50%), pero con un perfil de seguridad hemodinámica significativamente superior, sin inducir hipotensión ni arritmias cardíacas.",
        "• <strong>Fenitoína Endovenosa (Alternativa Clásica):</strong> Dosis de carga de <strong>20 mg/kg EV</strong> (dosis habitual en adulto: 1.250 a 1.500 mg). <em>Reglas de oro indispensables EUNACOM:</em> 1) Debe diluirse <strong>ÚNICAMENTE en Suero Fisiológico al 0.9%</strong>; está formalmente proscrito mezclarla con suero glucosado porque cristaliza y precipita en la vía; 2) La velocidad de infusión <strong>NUNCA debe exceder los 50 mg/minuto</strong>; 3) Requiere monitorización electrocardiográfica y de presión arterial continua durante toda la infusión, ya que la fenitoína y su vehículo (propilenglicol) pueden inducir hipotensión refractaria, bloqueo auriculoventricular y asistolia.",
        "• <strong>Ácido Valproico Endovenoso:</strong> Dosis de <strong>40 mg/kg EV (máximo 3.000 mg)</strong> infundido en 10 minutos. Fármaco de excelente perfil si el paciente tiene historia previa de epilepsia generalizada o mioclónica."
      ]
    },
    {
      "subhead": "4. Fase 3: Status Epiléptico Refractario, Cuidado Neurointensivo y Anestesia General en UCI",
      "paragraphs": [
        "Si la convulsión clínica o electrográfica continúa después de <strong>30 minutos</strong> desde el inicio del protocolo (falla de benzodiacepina de Fase 1 + FAE endovenoso de Fase 2), el cuadro se clasifica formalmente como <strong>Status Epiléptico Refractario (SEER)</strong> (véase Tabla de Refractariedad y Complicaciones 10.9).",
        "• <strong>Conducta Inmediata:</strong> El paciente debe ser trasladado de urgencia a la Unidad de Cuidados Intensivos (UCI), someterse a <strong>Intubación Orotraqueal (IOT)</strong> con secuencia rápida de intubación para proteger la vía aérea y asegurar ventilación mecánica asistida, e iniciar <strong>Anestesia General Continua</strong>.",
        "• <strong>Fármacos Anestésicos de Elección:</strong>",
        "1) <strong>Propofol:</strong> Bolo inicial de 2 mg/kg EV, seguido de infusión continua de 2 a 10 mg/kg/hora. Excelente poder anticonvulsivante gabaérgico y rápido despertar al suspenderlo. <em>Alerta de seguridad:</em> Si se utiliza a dosis > 5 mg/kg/h por más de 48 horas, existe alto riesgo de <em>Síndrome de Infusión de Propofol (PRIS)</em>: acidosis metabólica severa, rabdomiolisis, hiperkalemia, hepatomegalia y colapso cardiovascular refractario.",
        "2) <strong>Midazolam en Infusión Continua:</strong> Bolo de carga de 0.2 mg/kg EV seguido de infusión de 0.05 a 2.0 mg/kg/hora. Brinda mayor estabilidad hemodinámica que el propofol.",
        "3) <strong>Barbitúricos (Tiopental o Pentobarbital):</strong> Reservados para status super-refractario por su potente depresión miocárdica y vasodilatación periférica.",
        "• <strong>Monitorización Electroencefalográfica Continua (cEEG):</strong> Es obligatoria en la UCI. El objetivo del coma inducido no es únicamente paralizar la actividad motora muscular, sino alcanzar un patrón neurofisiológico de <strong>supresión de brotes (burst-suppression)</strong> con períodos de silencio eléctrico cerebral de 10 a 15 segundos entre brotes, mantenido durante al menos <strong>24 a 48 horas continuas</strong> antes de iniciar el destete anestésico muy gradual."
      ]
    },
    {
      "subhead": "5. Complicaciones Sistémicas Críticas: Rabdomiolisis, Falla Renal Aguda, Acidosis Láctica e Hipertermia",
      "paragraphs": [
        "El status epiléptico prolongado no es únicamente una catástrofe cerebral, sino un síndrome hipermetabólico sistémico de extrema gravedad:",
        "• <strong>Rabdomiolisis Masiva e Insuficiencia Renal Aguda:</strong> La contracción muscular tónico-clónica violenta y sostenida causa necrosis y lisis del sarcolema muscular, con liberación masiva de <strong>mioglobina</strong>, potasio y creatina quinasa (CPK habitualmente > 10.000 a 50.000 U/L) al torrente sanguíneo. La mioglobina precipita en los túbulos renales formando cilindros obstructivos y ejerciendo citotoxicidad directa por estrés oxidativo, desencadenando una <strong>Necrosis Tubular Aguda oligúrica</strong> con alza aguda de creatinina y riesgo de hiperkalemia letal. <em>Tratamiento urgente:</em> Hidratación vigorosa con solución salina isotónica para forzar diuresis (> 200-300 mL/hora) y alcalinización urinaria con bicarbonato.",
        "• <strong>Acidosis Láctica Severa:</strong> Se origina por la glicólisis anaeróbica muscular extrema sumada a la hipoxemia transitoria, alcanzando niveles de lactato plasmático > 10-15 mmol/L y pH < 7.10. Clásicamente, la acidosis metabólica por status convulsivo revierte de manera espontánea en las primeras horas posteriores al cese de las convulsiones motoras sin requerir infusión de bicarbonato de rutina.",
        "• <strong>Hipertermia Maligna Secundaria:</strong> El trabajo muscular masivo eleva la temperatura corporal central a > 40-41 °C. La hipertermia agrava exponencialmente la tasa de apoptosis neuronal y acelera el edema cerebral citotóxico, requiriendo enfriamiento físico activo inmediato.",
        "• <strong>Estatus No Convulsivo (Coma con Descargas Sutiles):</strong> Tras 30-45 minutos de status convulsivo, la manifestación motora visible puede extinguirse progresivamente por agotamiento muscular o bloqueo neuromuscular, permaneciendo el paciente en coma con pequeñas mioclonías periorbitarias o de los dedos, mientras la corteza cerebral continúa en status epiléptico electrográfico fulminante. Solo se detecta mediante EEG continuo."
      ]
    }
  ],
  "table": {
    "title": "Definiciones Operativas ILAE 2015 del Status Epiléptico: Tiempos Críticos T1 y T2",
    "headers": [
      "Tipo de Status Epiléptico",
      "Tiempo T1 (Inicio de Tratamiento Inmediato)",
      "Tiempo T2 (Inicio de Daño Neuronal Irreversible)",
      "Mecanismo Fisiopatológico y Riesgo Biológico"
    ],
    "rows": [
      [
        "Status Convulsivo Tónico-Clónico Generalizado",
        "5 minutos",
        "30 minutos",
        "Fracaso de la terminación espontánea; internalización de receptores GABA-A. A los 30 min: excitotoxicidad por glutamato, necrosis neuronal irreversible, rabdomiolisis y acidosis."
      ],
      [
        "Status Focal con Alteración de Conciencia",
        "10 minutos",
        "> 60 minutos",
        "Descargas focales continuas temporales o frontales con desconexión. Riesgo de secuelas cognitivas y lesión mesial hipocámpica a largo plazo."
      ],
      [
        "Status de Ausencia",
        "10 a 15 minutos",
        "Indeterminado (sin lesión neuronal letal demostrada)",
        "Estado crepuscular continuo con punta-onda a 3 Hz generalizada en EEG. No produce necrosis neuronal pero requiere reversión farmacológica con benzodiacepinas."
      ]
    ]
  },
  "severityTable": {
    "title": "Monitorización Neurointensiva, Criterios de Refractariedad y Complicaciones Sistémicas del Status",
    "headers": [
      "Entidad Clínica / Parámetro",
      "Definición Operativa y Criterios Diagnósticos",
      "Mecanismo de Falla / Daño Órgano Blanco",
      "Conducta Terapéutica y Prevención"
    ],
    "rows": [
      [
        "Status Epiléptico Refractario (SEER)",
        "Persistencia clínica o electrográfica de crisis tras administración adecuada de Fase 1 (benzodiacepina) + Fase 2 (FAE en dosis plena)",
        "Endocitosis masiva de receptores GABA-A y sobreexpresión de receptores NMDA excitatorios",
        "Traslado urgente a UCI, intubación endotraqueal inmediata y coma inducido con Propofol o Midazolam."
      ],
      [
        "Status Epiléptico Super-Refractario (SRSE)",
        "Persistencia o recurrencia de crisis tras ≥ 24 h de anestesia general continua, o al reducir el goteo anestésico",
        "Neuroinflamación fulminante, apertura de BHE y daño mitocondrial sostenido",
        "Inmunomodulación (corticoides, inmunoglobulinas), dieta cetogénica, ketamina o hipotermia controlada."
      ],
      [
        "Rabdomiolisis e Insuficiencia Renal Aguda",
        "Lisis de sarcolema por actividad motora tónica prolongada; elevación de CPK (> 10.000 U/L), mioglobinuria y oliguria",
        "Precipitación intratubular de mioglobina con toxicidad tubular oxidativa directa y vasoconstricción renal",
        "Hidratación parenteral vigorosa con solución salina al 0.9% (metas de diuresis > 200 mL/h) y alcalinización."
      ],
      [
        "Acidosis Láctica e Hipertermia Maligna",
        "pH < 7.10, lactato > 10-15 mmol/L y temperatura central > 40-41 °C por contracción muscular sostenida",
        "Glicólisis anaeróbica extrema; hipertermia acelera y duplica la tasa de necrosis neuronal cerebral",
        "Yugular las crisis motoras; enfriamiento físico activo inmediato; acidosis suele corregir sola tras cesar la crisis."
      ],
      [
        "Status No Convulsivo en Coma",
        "Coma persistente post-status sin clonías francas pero con descargas electrográficas continuas en EEG",
        "Agotamiento de la placa motora o bloqueo farmacológico con persistencia de actividad ictal cerebral",
        "EEG continuo obligatorio en UCI; optimizar infusión anestésica hasta patrón de supresión de brotes."
      ]
    ]
  },
  "treatmentTable": {
    "title": "Protocolo Farmacológico Escalonado por Fases en Status Epiléptico Convulsivo (Dosis y Tiempos)",
    "headers": [
      "Fase de Rescate",
      "Fármaco de Elección",
      "Dosis Exacta y Vía de Administración",
      "Metas, Velocidad de Infusión y Advertencias Críticas"
    ],
    "rows": [
      [
        "Fase 1 (Emergencia: 0 a 10 min)",
        "Lorazepam EV (1ª elección hospitalaria)",
        "4 mg EV en bolo lento (0.1 mg/kg) en 2 minutos; repetir una vez a los 5 min si persiste",
        "Alta afinidad GABA-A y prolongada acción cerebral (> 12 h). Monitorizar depresión respiratoria."
      ],
      [
        "Fase 1 (Alternativa sin vía EV)",
        "Midazolam IM o intranasal",
        "10 mg IM en adultos (> 40 kg); 5 mg IM si peso < 40 kg",
        "Elección prehospitalaria; absorción intramuscular rápida superior a diazepam (estudio RAMPART)."
      ],
      [
        "Fase 1 (Alternativa EV estándar)",
        "Diazepam EV",
        "10 mg EV en bolo lento a 2-5 mg/min; repetir a los 5 min si persiste (máx 20 mg)",
        "Rápida entrada cerebral pero se redistribuye a grasa en 15-30 min perdiendo efecto anticonvulsivante precoz."
      ],
      [
        "Fase 2 (Control urgente: 10 a 30 min)",
        "Levetiracetam EV (1ª elección moderna)",
        "60 mg/kg EV (máximo 4.500 mg) diluido en 100 mL de SF, infundido en 10 minutos",
        "Eficacia equivalente a fenitoína sin riesgo de hipotensión ni arritmias (estudio ESETT 2019)."
      ],
      [
        "Fase 2 (Alternativa clásica)",
        "Fenitoína EV",
        "20 mg/kg EV diluido ÚNICAMENTE en Suero Fisiológico al 0.9% (máximo 1.500 mg)",
        "NUNCA diluir en suero glucosado (cristaliza). Velocidad máxima 50 mg/min bajo monitor ECG por arritmias/asistolia."
      ],
      [
        "Fase 2 (Alternativa en epilepsia conocida)",
        "Ácido Valproico EV",
        "40 mg/kg EV (máximo 3.000 mg) en bolo durante 10 minutos",
        "De elección si el paciente tiene epilepsia generalizada o mioclónica previa. Evitar en sospecha de hepatopatía."
      ],
      [
        "Fase 3 (Refractario: > 30 min)",
        "Propofol EV en infusión continua (UCI)",
        "Bolo de 2 mg/kg EV, seguido de infusión de 2 a 10 mg/kg/hora bajo intubación orotraqueal",
        "Anestésico de titulación rápida. Riesgo de Síndrome de Infusión de Propofol (PRIS) si dosis alta > 48 h."
      ],
      [
        "Fase 3 (Alternativa anestésica UCI)",
        "Midazolam en infusión continua",
        "Bolo de carga de 0.2 mg/kg EV, seguido de infusión titulada de 0.05 a 2.0 mg/kg/hora",
        "Mayor estabilidad hemodinámica. Meta: supresión de brotes en EEG continuo por 24 a 48 horas."
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Hombre de 44 años con antecedente de epilepsia secundaria a traumatismo encéfalo-craneano antiguo, es traído en ambulancia al servicio de urgencia presentando una crisis tónico-clónica generalizada continua de 25 minutos de evolución que inició en su trabajo. Sus familiares relatan que abandonó sus medicamentos antiepilépticos hace 5 días. En el reanimador: paciente inconsciente con movimientos clónicos bilaterales simétricos, trismus, sialorrea espesa y cianosis peribucal. Monitor: FC 138 lpm sinusal, PA 165/100 mmHg, SatO2 86% con aire ambiental, temperatura axilar 38.6 °C. El hemoglucotest marca 112 mg/dL.",
    "conducta": "El paciente cursa un Status Epiléptico Convulsivo Tónico-Clónico Generalizado activo que supera con creces el umbral t1 (5 minutos) y se encuentra peligrosamente cercano al umbral t2 (30 minutos), momento en el cual se desencadena muerte neuronal irreversible por excitotoxicidad y complicaciones sistémicas severas. La conducta médica perentoria e inmediata es: 1) Estabilizar ABC: posicionar vía aérea, aspirar secreciones y administrar oxígeno al 100% mediante mascarilla con bolsa reservorio; 2) Administrar de inmediato la Fase 1 de rescate: Lorazepam 4 mg endovenoso en bolo lento en 2 minutos (o Midazolam 10 mg IM si la vía venosa no es permeable de inmediato); 3) Si la convulsión no cede tras la benzodiacepina, iniciar de forma perentoria la Fase 2 con un antiepiléptico endovenoso: Levetiracetam 60 mg/kg EV (máx 4.5 g) en 10 min o Fenitoína 20 mg/kg EV diluida exclusivamente en suero fisiológico a una velocidad < 50 mg/min con monitor cardíaco; 4) Si persiste la crisis pasados los 30 minutos (Status Refractario), se debe proceder a intubación orotraqueal urgente, sedación profunda en coma anestésico continuo con Propofol o Midazolam y traslado prioritario a UCI con monitorización electroencefalográfica continua."
  },
  "explicacion": "El paciente cursa un Status Epiléptico Convulsivo Tónico-Clónico Generalizado activo que supera con creces el umbral t1 (5 minutos) y se encuentra peligrosamente cercano al umbral t2 (30 minutos), momento en el cual se desencadena muerte neuronal irreversible por excitotoxicidad y complicaciones sistémicas severas. La conducta médica perentoria e inmediata es: 1) Estabilizar ABC: posicionar vía aérea, aspirar secreciones y administrar oxígeno al 100% mediante mascarilla con bolsa reservorio; 2) Administrar de inmediato la Fase 1 de rescate: Lorazepam 4 mg endovenoso en bolo lento en 2 minutos (o Midazolam 10 mg IM si la vía venosa no es permeable de inmediato); 3) Si la convulsión no cede tras la benzodiacepina, iniciar de forma perentoria la Fase 2 con un antiepiléptico endovenoso: Levetiracetam 60 mg/kg EV (máx 4.5 g) en 10 min o Fenitoína 20 mg/kg EV diluida exclusivamente en suero fisiológico a una velocidad < 50 mg/min con monitor cardíaco; 4) Si persiste la crisis pasados los 30 minutos (Status Refractario), se debe proceder a intubación orotraqueal urgente, sedación profunda en coma anestésico continuo con Propofol o Midazolam y traslado prioritario a UCI con monitorización electroencefalográfica continua.",
  "keyPoints": [
    "El status epiléptico convulsivo generalizado se define operacionalmente como una crisis de ≥ 5 minutos (t1: momento de rescate obligado) o crisis repetidas sin recuperación de conciencia entre ellas.",
    "A los 30 minutos (t2) se produce necrosis neuronal irreversible por excitotoxicidad mediada por glutamato y falla de autorregulación cerebral.",
    "Fase 1 (0 a 10 min): Lorazepam 4 mg EV (o Midazolam 10 mg IM si no hay vía venosa) administrado precozmente; repetir una sola vez a los 5 minutos si persiste.",
    "Fase 2 (10 a 30 min): Levetiracetam 60 mg/kg EV, Fenitoína 20 mg/kg EV (en suero fisiológico a ≤ 50 mg/min con monitor ECG) o Ácido Valproico 40 mg/kg EV.",
    "Fase 3 (> 30 min - Status Refractario): Intubación orotraqueal inmediata, inducción de coma anestésico con Propofol o Midazolam y monitorización EEG continua en UCI con meta de supresión de brotes.",
    "La complicación sistémica renal más frecuente es la rabdomiolisis con falla renal aguda por mioglobinuria, requiriendo hidratación masiva y control seriado de CPK y creatinina."
  ],
  "questions": [
    {
      "stem": "Usted evalúa a un recién nacido, diagnosticado de asfixia, con una\nencefalopatía hipóxica, cae en estatus epiléptico. ¿Qué fármaco debe\nadministrar?",
      "options": [
        {
          "id": "A",
          "text": "Lidocaína"
        },
        {
          "id": "B",
          "text": "Barbitúricos"
        },
        {
          "id": "C",
          "text": "Sulfato de magnesio"
        },
        {
          "id": "D",
          "text": "Fenitoína"
        },
        {
          "id": "E",
          "text": "Lamotrigina"
        }
      ],
      "correcta": "B",
      "explicacion": "El estatus epiléptico en un recién nacido, especialmente en el contexto de una encefalopatía hipóxico-isquémica (EHI) secundaria a asfixia, es una emergencia neurológica que requiere tratamiento inmediato para prevenir un mayor daño cerebral.\n\nEl manejo de las convulsiones neonatales sigue un algoritmo escalonado. El fármaco de primera línea o, en su defecto, el segundo tras el fracaso de las benzodiacepinas (que no están en las opciones), es el **fenobarbital**, un tipo de **barbitúrico**. El fenobarbital es el anticonvulsivo más estudiado y utilizado en el período neonatal. Actúa potenciando la acción del neurotransmisor inhibidor GABA, lo que ayuda a suprimir la actividad eléctrica cerebral anómala y detener las convulsiones. Dada la gravedad del cuadro (estatus epiléptico) y las opciones disponibles, los barbitúricos son la elección correcta y estándar en la práctica clínica neonatal.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.018"
    },
    {
      "stem": "Un paciente presenta un estatus convulsivo de cerca de 50 minutos de\nduración, que fue controlado con lorazepam + fenitoína. Evoluciona en las\nhoras siguientes con oliguria y elevación de la creatinina plasmática. ¿Cuál es\nla causa más probable de la insuficiencia renal?",
      "options": [
        {
          "id": "A",
          "text": "Prerrenal"
        },
        {
          "id": "B",
          "text": "Necrosis tubular aguda"
        },
        {
          "id": "C",
          "text": "Rabdomiolisis"
        },
        {
          "id": "D",
          "text": "Toxicidad renal por lorazepam"
        },
        {
          "id": "E",
          "text": "Toxicidad renal por fenitoína"
        }
      ],
      "correcta": "C",
      "explicacion": "La alternativa correcta es **C (Rabdomiolisis)**. La rabdomiolisis es una causa importante de insuficiencia renal aguda, especialmente en pacientes que han sufrido convulsiones prolongadas. La actividad muscular intensa y sostenida durante un estatus convulsivo lleva a la liberación masiva de contenido intracelular muscular, incluyendo mioglobina, creatina quinasa (CK), y electrolitos al torrente sanguíneo. La mioglobina, al ser filtrada por los riñones, puede obstruir los túbulos renales y generar daño directo, conduciendo a la insuficiencia renal aguda. La oliguria y la elevación de la creatinina en las horas siguientes al estatus convulsivo, junto con la historia de convulsión prolongada, son altamente sugestivas de rabdomiolisis. En Chile, el MINSAL cuenta con guías clínicas para el manejo de la Insuficiencia Renal Aguda (IRA) donde se menciona la rabdomiolisis como una etiología importante, requiriendo manejo agresivo con hidratación y control de electrolitos.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.018"
    },
    {
      "stem": "Lactante de 1 año, con fiebre de 40 C y convulsión tónico-clónica\ngeneralizada. ¿Cuál es la conducta más apropiada durante la crisis, después de\nestabilizar al paciente (ABC)?",
      "options": [
        {
          "id": "A",
          "text": "Colocar enema frío"
        },
        {
          "id": "B",
          "text": "Administrar antipiréticos"
        },
        {
          "id": "C",
          "text": "Administrar anticonvulsivante"
        },
        {
          "id": "D",
          "text": "Realizar punción lumbar"
        },
        {
          "id": "E",
          "text": "Instalar vía venosa central"
        }
      ],
      "correcta": "C",
      "explicacion": "El escenario clínico describe a un lactante de 1 año con una convulsión tónico-clónica generalizada en el contexto de fiebre alta (40°C), lo que configura una **crisis convulsiva febril**. La pregunta clave es la conducta *durante la crisis* una vez asegurado el ABC (vía aérea, ventilación y circulación).\n\nLa prioridad absoluta frente a una convulsión activa, especialmente si se prolonga por más de 5 minutos (lo que define el estatus epiléptico), es **yugular la crisis convulsiva** para prevenir el daño neuronal secundario a la hipoxia y a la propia neurotoxicidad de la actividad eléctrica descontrolada. El tratamiento farmacológico de primera línea para detener una convulsión aguda son los **anticonvulsivantes**, específicamente las benzodiazepinas (como lorazepam intravenoso, diazepam intravenoso o rectal, o midazolam intramuscular/intranasal).\n\nPor lo tanto, la administración de un anticonvulsivante es la medida terapéutica inmediata y más importante después de estabilizar las funciones vitales básicas del paciente.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.018"
    },
    {
      "stem": "El primer fármaco que debe administrarse a un paciente es estatus\nepiléptico es:",
      "options": [
        {
          "id": "A",
          "text": "Fenitoína"
        },
        {
          "id": "B",
          "text": "Ácido valproico"
        },
        {
          "id": "C",
          "text": "Lorazepam"
        },
        {
          "id": "D",
          "text": "Carbamazepina"
        },
        {
          "id": "E",
          "text": "Lamotrigina"
        }
      ],
      "correcta": "C",
      "explicacion": "La alternativa correcta es Lorazepam porque, en el manejo inicial del status epilepticus, las benzodiacepinas (como el lorazepam o el diazepam) son los fármacos de primera línea. Su rápido inicio de acción (especialmente por vía intravenosa) permite detener rápidamente la actividad convulsiva, previniendo el daño neuronal asociado al estatus epiléptico prolongado. Las guías clínicas chilenas del MINSAL para el manejo de urgencias así lo indican. El objetivo principal en los primeros minutos es detener la crisis.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.2.018"
    }
  ],
  "vignetteText": "Hombre de 44 años con antecedente de epilepsia secundaria a traumatismo encéfalo-craneano antiguo, es traído en ambulancia al servicio de urgencia presentando una crisis tónico-clónica generalizada continua de 25 minutos de evolución que inició en su trabajo. Sus familiares relatan que abandonó sus medicamentos antiepilépticos hace 5 días. En el reanimador: paciente inconsciente con movimientos clónicos bilaterales simétricos, trismus, sialorrea espesa y cianosis peribucal. Monitor: FC 138 lpm sinusal, PA 165/100 mmHg, SatO2 86% con aire ambiental, temperatura axilar 38.6 °C. El hemoglucotest marca 112 mg/dL."
}
```

## PREGUNTAS REALES DEL BANCO (21; por código de la clase y por búsqueda "epileptico, convulsivo, protocolo, escalonado, rescate")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2013 · Pregunta 155 · confianza 0.97
Una paciente de 55 años, se lava las manos recurrentemente porque siente que se encuentran sucias, el hecho de no hacerlo rápidamente le provoca gran angustia. Esto le ha provocado dermatitis en sus manos, por lo cual está preocupada. Sabe que esta conducta no tiene sentido, pero no puede evitarlo. El diagnóstico más probable es:
- A) Trastorno de ansiedad
- B) Ansiedad específica
- C) Trastorno dismórfico corporal
- D) Trastorno disociativo
- E) Trastorno obsesivo compulsivo
**Correcta: E**
Explicación del banco: La opción correcta es la **E** (Trastorno obsesivo compulsivo). En este escenario clínico, trastorno obsesivo compulsivo se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [2] EUNACOM Diciembre 2022 · Pregunta 179 · confianza 0.92
Una paciente de 24 años, primigesta de 12 semanas, consulta porque presenta náuseas y vómitos que afectan significativamente su calidad vida. ¿Cuál de los siguientes tratamientos es más adecuado para el manejo inicial de esta paciente?
- A) Corticoides orales
- B) Omeprazol oral
- C) Doxilamina más piridoxina oral
- D) metoclopramida oral
- E) Ondasentrón oral
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Doxilamina más piridoxina oral** (opción **C**). Tratamiento Escalonado De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad. Las opciones alternativas (Corticoides orales, Omeprazol oral) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [3] EUNACOM Diciembre 2024 · Pregunta 67 · confianza 0.9
Psicofármaco contraindicado en trastorno de estrés post traumático
- A) benzodiazepinas
- B) ISRS
- C) Triciclicos
- D) Antipsicoticos tipicos
- E) Antipsicóticos atípicos
**Correcta: A**
Explicación del banco: La opción correcta es la **A** (benzodiazepinas). En este escenario clínico, benzodiazepinas se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [4] EUNACOM Diciembre 2022 · Pregunta 132 · confianza 0.9
Un paciente de 70 años ha presentado 3 episodios de dolor y aumento de volumen de la rodilla derecha, que le impide o dificulta la marcha, pero que ha respondido a analgésicos. Acude nuevamente por los mismos síntomas, objetivándose artritis de rodilla derecha, con signos de derrame articular, por lo que se punciona, dando salida a un líquido articular inflamatorio, con abundantes cristales de pirofosfato de calcio, sin bacterias. ¿Qué fármaco es más adecuado para evitar recurrencias?
- A) Colchicina
- B) Naproxeno
- C) Alopurinol
- D) Hidroclorotiazida
- E) Metotrexato
**Correcta: A**
Explicación del banco: La opción correcta es la **A** (Colchicina). En este escenario clínico, colchicina se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [5] EUNACOM Agosto 2021 · Pregunta 145 · confianza 0.9
Un paciente de 67 años, usuario de sildenafil, que se automedica como tratamiento de impotencia sexual, presenta dolor torácico intenso, que inició una hora después de haber consumido dicho medicamento. Se solicita un electrocardiograma, que muestra suprdesnivel del segmento ST en las derivaciones inferiores. ¿Qué fármaco está contraindicado en el manejo de este paciente?
- A) Clopidogrel
- B) Aspirina
- C) Atenolol
- D) Nitroglicerina
- E) Estreptoquinasa
**Correcta: D**
Explicación del banco: La opción correcta es la **D** (Nitroglicerina). En este escenario clínico, nitroglicerina se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [6] EUNACOM Julio 2015 · Pregunta 82 · confianza 0.9
Una paciente de 20 años presenta mucha ansiedad ante las situaciones en que debe hacer exposiciones o presentaciones ante los demás. Presenta sudoración y palpitaciones antes de las presentaciones, con opresión cordial y disnea y esta dispuesta incluso a aumentar su carga de trabajo, con tal de evitar ese tipo de situaciones. ¿Cuál es el diagnóstico más probable?
- A) Trastorno de ansiedad generalizada
- B) Trastorno de personalidad evitativo
- C) Trastorno de personalidad dependiente
- D) Trastorno de angustia
- E) Trastorno de ansiedad social
**Correcta: E**
Explicación del banco: La opción correcta es la **E** (Trastorno de ansiedad social). En este escenario clínico, trastorno de ansiedad social se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [7] EUNACOM Enero 2023 · Pregunta 56 · confianza 0.85
Embarazada con náuseas y vómitos importantes que impactan su calidad de vida. ¿Cuál es el tratamiento más adecuado?
- A) Metoclopramida oral
- B) Ondansetrón endovenoso
- C) Dieta fraccionada y observación
- D) Dimenhidrinato oral
- E) Doxilamina y piridoxina
**Correcta: E**
Explicación del banco: Conducta / Tratamiento indicado: **Doxilamina y piridoxina** (opción **E**). Doxilamina y piridoxina. Tratamiento Escalonado De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [8] EUNACOM Diciembre 2022 · Pregunta 162 · confianza 0.85
Un paciente de 45 años, presenta polidipsia y poliuria de 4 semanas de evolución, asociado a baja de peso de 4 kilogramos en un mes. Al examen físico, se observa obeso con IMC: 35 y con presencia de acantosis nigricans en el cuello, sin otras alteraciones. Se solicita glicemia de ayuno, que resulta 318 mg/dl.
- A) Iniciar dieta y metformina
- B) Iniciar dieta y controlar
- C) Solicitar test de tolerancia a la glucosa oral
- D) Repetir la glicemia de ayuno
- E) Iniciar insulina
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Iniciar dieta y metformina). El tratamiento de la diabetes mellitus tipo 2 se basa en un enfoque escalonado que comienza siempre con cambios en el estilo de vida (dieta y ejercicio) más metformina como fármaco de primera línea. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [9] EUNACOM Diciembre 2017 · Pregunta 133 · confianza 0.85
Una paciente de 14 años sufre una convulsión tónico clónica, luego de una noche con privación de sueño y exposición a pantallas. Previo a esto, presentaba movimientos bruscos, como sacudidos, de manera involuntaria. Sus amigas relatan que en ocasiones “se queda pegada” por algunos segundos. ¿Cuál es el diagnóstico más probable?
- A) Epilepsia mioclónica juvenil
- B) Epilepsia de ausencia juvenil
- C) Epilepsia tónicoclónica
- D) Epilepsia focal
- E) Crisis convulsiva por privación de sueño
**Correcta: A**
Explicación del banco: Diagnóstico: **Epilepsia mioclónica juvenil** (opción **A**). Es una epilepsia mioclónica clásica.. Esta clase aborda las crisis convulsivas, la epilepsia, las convulsiones febriles y el estatus convulsivo. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [10] EUNACOM Diciembre 2017 · Pregunta 178 · confianza 0.85
Una paciente de 24 años, cursando un embarazo de 10 semanas, presenta vómitos frecuentes, que iniciaron hace un mes y han ido en aumento. Además ha bajado 3 kilogramos de peso, desde que se embarazó, ya que muchos de los alimentos y olores le producen muchas náuseas y vómitos. Refiere que vomita cerca de 6 veces al día y que esto afecta claramente su calidad de vida. ¿Cuál es el tratamiento más adecuado?
- A) Doxilamina
- B) Clorpromazina
- C) Omeprazol
- D) Metoclopramida
- E) Ondasentrón sublingual
**Correcta: A**
Explicación del banco: Conducta / Tratamiento indicado: **Doxilamina** (opción **A**). La doxilamina (antihistamínico) son el tratamiento de primera línea en la hiperemesis gravídica.. Tratamiento Escalonado De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [11] EUNACOM Agosto 2021 · Pregunta 118 · confianza 0.75
Un paciente de 85 años, con antecedente de deterioro funcional y cognitivo inicial y diagnóstico de diabetes mellitus tipo 2, en tratamiento con metformina 850 mg dos veces al día y glibenclamida 5 mg cada 12 horas, se realiza exámenes de control entre los que destaca una creatinina de 1,0 mg/dL y una hemoglobina glicosilada de 6,9%. Su examen físico no muestra alteraciones. ¿Cuál es la conducta más adecuada?
- A) Suspender la glibenclamida
- B) Disminuir la dosis de glibenclamida a 5 mg una vez al día
- C) Suspender metformina
- D) Disminuir dosis de metformina
- E) Mantener el tratamiento sin cambios
**Correcta: A**
Explicación del banco: Diagnóstico: **Suspender la glibenclamida** (opción **A**). La glicemia de las 3 am está determinada por la insulina nocturna, cuyo peak de acción es a las 5. El tratamiento de la diabetes mellitus tipo 2 se basa en un enfoque escalonado que comienza siempre con cambios en el estilo de vida (dieta y ejercicio) más metformina como fármaco de primera línea. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [12] EUNACOM Diciembre 2018 · Pregunta 67 · confianza 0.75
Un lactante de 4 meses acude a su control de niño sano. Tiene antecedente de una invaginación intestinal a los 2 meses, ¿cuál de las siguientes vacunas está contraindicada en este paciente?
- A) VPO
- B) VPI
- C) Rotavirus oral
- D) Toxoide tetánico
- E) Toxoide diftérico
**Correcta: C**
Explicación del banco: La opción correcta es la **C** (Rotavirus oral). En este escenario clínico, rotavirus oral se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [13] EUNACOM Julio 2025 · Pregunta 125 · confianza 0.72
Niño de 3 años hospitalizado por neumonía. SatO₂ 88% con oxígeno por naricera a 3 L/min. FR 50/min, uso de musculatura accesoria. ¿Cuál es el siguiente paso en el manejo ventilatorio?
- A) Ventilación no invasiva (VNI/CPAP) o cambio a mascarilla de alto flujo
- B) Intubación orotraqueal inmediata
- C) Aumentar flujo de oxígeno por naricera a 6 L/min
- D) Adrenalina nebulizada
- E) Alta con oxígeno domiciliario
**Correcta: A**
Explicación del banco: Niño con neumonía grave que no responde a oxigenoterapia convencional + signos de trabajo respiratorio aumentado: siguiente escalón = VNI (CPAP o BPAP) antes de intubación, según protocolo actual.

### [14] EUNACOM Enero 2023 · Pregunta 24 · confianza 0.7
Niño con reacción anafiláctica al huevo hace 1 mes. ¿Qué vacuna está contraindicada?
- A) Triple viral (SRP)
- B) Influenza inactivada
- C) Hepatitis A
- D) Varicela
- E) Fiebre amarilla
**Correcta: E**
Explicación del banco: La opción correcta es la **E** (Fiebre amarilla). En este escenario clínico, fiebre amarilla se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [15] EUNACOM Julio 2013 · Pregunta 150 · confianza 0.7
Paciente de 70 años, con antecedente de EPOC tabáquico, presenta cuadro de 3 meses de aumento de su disnea basal asociado a palpitaciones. Al examen físico destaca frecuencia cardiaca de 100 por minuto, ritmo cardiaco irregular con ausencia de soplos y murmullo pulmonar presente con roncus y sibilancias difusas. Se realiza electrocardiograma que muestra ausencia de onda “p”, de forma irregular y presencia de QRS angosto. ¿Cuál de los siguientes fármacos estará contraindicado para el manejo de este paciente?
- A) Verapamilo
- B) Lanantósido C
- C) Losartán
- D) Amiodarona
- E) Carvedilol
**Correcta: E**
Explicación del banco: La opción correcta es la **E** (Carvedilol). En este escenario clínico, carvedilol se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [16] EUNACOM Diciembre 2025 · Pregunta 127 · confianza 0.65
Un paciente de 38 años, con antecedente de asma bronquial en tratamiento con ﬂu8casona inhalada, 1 puﬀ de 250 mcg cada 12 horas, y salbutamol, 1 puﬀ en caso de necesidad, y rini8s alérgica en tratamiento con loratadina 10 mg al día, presenta aumento de su sintomatología en primavera, requiriendo uso frecuente de salbutamol 2 a 3 veces al día. Al examen Fsico está en buenas condiciones, eupneico y en su examen pulmonar se auscultan sibilancias bilaterales. ¿Cuál es la conducta más adecuada?
- A) Aumentar la dosis de ﬂu2casona inhalada
- B) Indicar salbutamol en horario
- C) Prohibir la ac2vidad :sica al aire libre
- D) Agregar inhibidor del receptor de leucotrienos
- E) Mantener tratamiento
**Correcta: A**
Explicación del banco: Es una pregunta discuGble, más aún si tomamos en cuenta que disGntas guías sobre el tratamiento de asma dicen cosas diferentes. A conGnuación, el resumen de lo recomendado por la guía GINA: El régimen de elección (Track 1) uGliza MART (“Terapia de Mantención And Rescate”), a base de formoterol + corticoides (budesonida) - Paso 1: MART SOS. - Paso 2: Agregar MART 1 puﬀ al día horario (aceptable mantenerlo solo SOS). - Paso 3: Agregar MART horario. - Paso 4: Subir dosis de cor<coides del MART. - Paso 5: Agregar LAMA (antimuscarínicos de larga acción, ej. Gotropio) horario y evaluar biológicos (ej. anticuerpos anti-IgE, anti-IL-5, anti-IL-5R, anti-IL-4R). El régimen alterna<vo (Track 2) es el clásico y más usado en Chile uGliza salbutamol SOS como rescate más una terapia de mantención según horario. - Paso 1: Salbutamol SOS + cor<coides SOS (disGntos puﬀ o mezcla). Ya no se recomienda el uso de salbutamol en monoterapia para el manejo crónico. - Paso 2: Agregar cor<coides inhalados 1 vez al día. - Paso 3: Agregar betaagonistas de larga acción (LABA), ej. salmeterol o formoterol). - Paso 4: Subir dosis de cor<coide inhalado. - Paso 5: Mantención con 3 fármacos: corticoides + LABA + LAMA y evaluar biológicos. Ahora volviendo a la pregunta, no estaba dentro de las opciones agregar un broncodilatador de larga acción (ej. formoterol), que hubiese sido la respuesta más correcta. Las dos opciones aceptables serían aumentar la dosis del corticoides y agregar inhibidores de leucotrienos. Por un lado, ya está con una dosis moderada de corticoides (saber esa dosis no es algo que deba hacer el médico general), por lo que no parece correcta subirla. Por otro lado, aunque los inhibidores de leucotrienos Genen algún beneﬁcio en quienes Genen un componente claramente alérgico, como en este caso, las recomendaciones más recientes no los recomiendan en adultos, por su alta tasa de efectos adversos, incluyendo patología psiquiátrica grave (hoy únicamente se aceptan en niños, advirGendo los riesgos). Por ello, dejaremos como respuesta correcta el aumento de la dosis de corticoides, aunque probablemente lo correcto en el Eunacom fue agregar un inhibidor de leucotrienos, por ser una pregunta más antigua.

### [17] EUNACOM Enero 2023 · Pregunta 143 · confianza 0.62
Paciente con mirada forzada hacia la derecha, luego espasmo hemifacial, luego movimientos de sacudidas en las 4 extremidades. ¿Diagnóstico más probable?
- A) Crisis focal con generalización secundaria
- B) Crisis tónico-clónica generalizada primaria
- C) Estatus epiléptico no convulsivo
- D) Accidente isquémico transitorio (AIT)
- E) Crisis mioclónica juvenil
**Correcta: A**
Explicación del banco: Diagnóstico: **Crisis focal con generalización secundaria** (opción **A**). Crisis focal con generalización secundaria. Esta clase aborda las crisis convulsivas, la epilepsia, las convulsiones febriles y el estatus convulsivo. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [18] EUNACOM Diciembre 2022 · Pregunta 2 · confianza 0.6
¿Qué vacuna está contraindicada en un niño con antecedente de anafilaxia en relación a la ingesta de huevo?
- A) Vacuna neumocócica conjugada
- B) Vacuna tres vírica
- C) Vacuna antimeningocócica
- D) Vacuna antirrábica
- E) Vacuna contra la fiebre amarilla
**Correcta: C**
Explicación del banco: La opción correcta es la **C** (Vacuna antimeningocócica). En este escenario clínico, vacuna antimeningocócica se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [19] EUNACOM Agosto 2021 · Pregunta 37 · confianza 0.6
67) Un lactante de 4 meses acude a su control de niño sano. Tiene antecedente de una invaginación intestinal a los 2 meses, ¿cuál de las siguientes vacunas está contraindicada en este paciente?
- A) VPO
- B) VPI
- C) Rotavirus oral
- D) Toxoide tetánico
- E) Toxoide diftérico
**Correcta: C**
Explicación del banco: La opción correcta es la **C** (Rotavirus oral). En este escenario clínico, rotavirus oral se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.

### [20] EUNACOM Julio 2025 · Pregunta 100 · confianza 0.55
Hombre de 62 años con pérdida de peso de 10 kg en 3 meses, ictericia progresiva, coluria y heces acólicas. Ecografía: dilatación de vía biliar intra y extrahepática, páncreas no visualizado. ¿Cuál es el examen siguiente más apropiado?
- A) Ecografía de control en 1 mes
- B) Radiografía de abdomen
- C) AngioTAC de páncreas y vía biliar
- D) Endoscopía digestiva alta
- E) Resonancia magnética de columna
**Correcta: C**
Explicación del banco: Ictericia obstructiva con dilatación biliar y sospecha de tumor pancreático: el siguiente examen es AngioTAC de páncreas (protocolo páncreas) o CRMN para caracterizar la lesión, evaluar extensión vascular y ganglionar para etapificación y decisión quirúrgica.

### [21] EUNACOM Diciembre 2024 · Pregunta 43 · confianza 0.3
Síndrome adrenérgico por cocaína. Fármaco contraindicado.
- A) Atenolol
- B) Captopril
- C) Nitroglicerina
- D) Diltiazem
- E) Amoxicilina
**Correcta: A**
Explicación del banco: La opción correcta es la **A** (Atenolol). En este escenario clínico, atenolol se encuentra estrictamente contraindicado debido a que su mecanismo de acción interfiere negativamente con la fisiopatología basal del paciente, aumentando la morbimortalidad según los protocolos clínicos vigentes.
