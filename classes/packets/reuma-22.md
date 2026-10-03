# CLASE reuma-22 · Reumatologia 9.22: Vasculitis de Vaso Pequeño ANCA Positivas (GPA, PAM, EGPA) y Púrpura de Henoch-Schönlein (Vasculitis por IgA)

Escribe `classes/lessons/reuma-22.cjs` siguiendo el PAQUETE COMÚN. El `id` es "reuma-22" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- reuma-19: Reumatologia 9.19: Artritis Reactiva (Síndrome de Reiter): Tríada Clásica, Chlamydia y Tratamiento
- reuma-20: Reumatologia 9.20: Enfermedad de Behçet: Aftosis Orogenital Recurrente, Fenómeno de Patergia y Panuveítis
- reuma-21: Reumatologia 9.21: Vasculitis de Vaso Grande y Mediano: Arteritis de la Temporal (Células Gigantes / Urgencia Visual) y Arteritis de Takayasu
- reuma-23: Reumatologia 9.23: Fibromialgia y Polimialgia Reumática: Diagnóstico Diferencial, Reactantes de Fase Aguda y Manejo en APS
- reuma-24: Reumatologia 9.24: Osteoporosis y Salud Ósea: Densitometría (T-score vs Z-score), Fracturas por Fragilidad, FRAX y Terapia Farmacológica

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "reuma-22",
  "classId": "reuma-22",
  "tier": 3,
  "blockNum": 5,
  "blockName": "Vasculitis Sistémicas, Reumatología de Partes Blandas y Metabolismo Óseo",
  "topicLabel": "9.22",
  "title": "Vasculitis de Vaso Pequeño ANCA Positivas (GPA, PAM, EGPA) y Púrpura de Henoch-Schönlein (Vasculitis por IgA)",
  "perfilCode": "1.09.1.009",
  "dx": "Específico",
  "tx": "Inicial",
  "seg": "Derivar",
  "ges": "Garantía GES en Insuficiencia Renal Crónica Terminal (GES N° 1) · Manejo reumatológico terciario urgente",
  "reconstrucciones": "EUNACOM Enero 2023 (Q#83) · EUNACOM Diciembre 2022 (Q#24) · EUNACOM Diciembre 2018 (Q#1)",
  "frecuencia": "Muy Alta · Prototipo de síndrome riñón-pulmón y emergencias de falla orgánica múltiple",
  "algoTitle": "Algoritmo Diagnóstico y Terapéutico en Vasculitis ANCA e IgA: De la Sospecha a la Remisión",
  "diagram": {
    "title": "Algoritmo Diagnóstico y Terapéutico en Vasculitis ANCA e IgA: De la Sospecha a la Remisión",
    "svg": "<svg viewBox=\"0 0 620 418\" width=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n<style>\n.ln{stroke:#9f1239;stroke-width:1.5;fill:none}\nrect{stroke-width:1.5;stroke:#9f1239;fill:#ffffff}\nrect.dec{fill:#fff1f2;stroke:#be123c}\nrect.warn{fill:#fff7ed;stroke:#ea580c}\nrect.acc{fill:#9f1239;stroke:#881337}\ntext{font-family:ui-sans-serif,system-ui,sans-serif;font-size:11px;fill:#1e293b}\ntext.t{font-size:12px}\ntext.accT{fill:#ffffff}\ntext.accS{fill:#fce7f3;font-size:10px}\ntext.warnT{fill:#9a3412}\ntext.sub{fill:#64748b;font-size:10px}\ntext.lbl{font-size:10px;fill:#9f1239;font-weight:700}\n</style>\n<rect class=\"acc\" x=\"12\" y=\"8\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha de Vasculitis de Pequeño Vaso (Púrpura Palpable, Compromiso Pulmonar o Renal)</text>\n<text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Evaluar sedimento urinario (hematuria dismórfica/cilindros), función renal, Rx/TC tórax y plaquetas</text>\n<path class=\"ln\" d=\"M310,47 V69\"/>\n<rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">Perfil Serológico y Características Clínicas Predominantes</text>\n<text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Diferenciación inmediata entre AAV y vasculitis por inmunocomplejos IgA</text>\n<path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n<path class=\"ln\" d=\"M310,138 H462 V148\"/>\n<text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">ANCA (+) · Sinusitis / Nódulos / Asma / GNRP</text>\n<text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">ANCA (-) · Plaquetas Normales · Púrpura Palpable</text>\n<rect class=\"warn\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Vasculitis Asociadas a ANCA (AAV)</text>\n<text class=\"warnT sub\" x=\"158\" y=\"175\" text-anchor=\"middle\">c-ANCA/PR3 (GPA) vs p-ANCA/MPO (PAM, EGPA)</text>\n<text class=\"warnT sub\" x=\"158\" y=\"186\" text-anchor=\"middle\">Glomerulonefritis pauciinmune</text>\n<rect class=\"warn\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Vasculitis por IgA (Henoch-Schönlein)</text>\n<text class=\"warnT sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Tétrada: Púrpura declive + Artralgias + Dolor abdominal + Nefritis IgA</text>\n<text class=\"warnT sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Pediatría/Adulto</text>\n<path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n<path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n<rect class=\"dec\" x=\"70\" y=\"220\" width=\"480\" height=\"39\" rx=\"3\"/>\n<text class=\"t t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">¿Presenta Criterios de Severidad Orgánica (Hemorragia Alveolar o Falla Renal Rápida)?</text>\n<text class=\"sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Estratificación terapéutica de inducción inmediata</text>\n<path class=\"ln\" d=\"M310,259 V289 H158 V299\"/>\n<path class=\"ln\" d=\"M310,289 H462 V299\"/>\n<text class=\"lbl\" x=\"158\" y=\"284\" text-anchor=\"middle\">SÍ: Falla Renal Crítica / Hemoptisis Masiva</text>\n<text class=\"lbl\" x=\"462\" y=\"284\" text-anchor=\"middle\">NO: Formas No Amenazantes de Órgano / IgA Leve</text>\n<rect class=\"warn\" x=\"12\" y=\"299\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"warnT t\" x=\"158\" y=\"314\" text-anchor=\"middle\" font-weight=\"700\">Bolos Metilprednisolona + Rituximab / Ciclofosfamida</text>\n<text class=\"warnT sub\" x=\"158\" y=\"326\" text-anchor=\"middle\">Evaluar Plasmaféresis si Creatinina &gt;</text>\n<text class=\"warnT sub\" x=\"158\" y=\"337\" text-anchor=\"middle\">5.7 o hemorragia alveolar refractaria</text>\n<rect class=\"dec\" x=\"316\" y=\"299\" width=\"292\" height=\"50\" rx=\"3\"/>\n<text class=\"t t\" x=\"462\" y=\"314\" text-anchor=\"middle\" font-weight=\"700\">Corticoides Orales ± Metotrexato / Manejo Soporte</text>\n<text class=\"sub\" x=\"462\" y=\"326\" text-anchor=\"middle\">Henoch-Schönlein leve: analgesia y reposo</text>\n<text class=\"sub\" x=\"462\" y=\"337\" text-anchor=\"middle\">Vigilar proteinuria y sedimento urinario</text>\n<path class=\"ln\" d=\"M158,349 V359 H310 V371\"/>\n<path class=\"ln\" d=\"M462,349 V359 H310 V371\"/>\n<rect class=\"acc\" x=\"12\" y=\"371\" width=\"596\" height=\"39\" rx=\"3\"/>\n<text class=\"accT t\" x=\"310\" y=\"386\" text-anchor=\"middle\" font-weight=\"700\">Profilaxis Obligatoria y Mantenimiento de Remisión</text>\n<text class=\"accS\" x=\"310\" y=\"398\" text-anchor=\"middle\">Cotrimoxazol para profilaxis de P. jirovecii · Transición a Rituximab de mantenimiento o Azatioprina</text>\n</svg>"
  },
  "contexto": "Las vasculitis necrosantes de vaso pequeño se dividen biológicamente en aquellas mediadas por anticuerpos anticitoplasma de neutrófilos (AAV: GPA, PAM y EGPA) y aquellas mediadas por depósito de inmunocomplejos (Vasculitis por IgA / Púrpura de Henoch-Schönlein). Constituyen una causa prototípica del síndrome riñón-pulmón y exigen un reconocimiento ultra-precoz: la instauración inmediata de bolos de esteroides e inmunosupresores mayores (Ciclofosfamida o Rituximab) salva al paciente de la muerte por hemorragia alveolar masiva o de la dependencia definitiva de hemodiálisis.",
  "contentSections": [
    {
      "subhead": "1. Clasificación de Chapel Hill y Espectro Inmunológico de Vasculitis de Pequeño Vaso",
      "paragraphs": [
        "El Consenso Internacional de Chapel Hill clasifica las <strong>vasculitis de vaso pequeño</strong> (arteriolas, capilares y vénulas) en dos grandes grupos etiopatogénicos:",
        "1. <strong>Vasculitis asociadas a ANCA (AAV):</strong> Caracterizadas por la escasa o nula presencia de depósitos de complejos inmunes en la pared vascular (<em>vasculitis pauciinmunes</em>). Incluyen la Granulomatosis con Poliangeítis (GPA, antes Wegener), la Poliangeítis Microscópica (PAM) y la Granulomatosis Eosinofílica con Poliangeítis (EGPA, antes Churg-Strauss). Los <strong>c-ANCA</strong> presentan un patrón citoplasmático difuso por inmunofluorescencia y van dirigidos contra la enzima <strong>Proteinasa 3 (anti-PR3)</strong>, siendo fuertemente específicos de la GPA (85-90%). Los <strong>p-ANCA</strong> muestran un patrón perinuclear dirigido contra la <strong>Mieloperoxidasa (anti-MPO)</strong>, predominando en la PAM (70-80%) y en la EGPA (40-50%) (véase Tabla 9.22.A).",
        "2. <strong>Vasculitis por inmunocomplejos:</strong> Caracterizadas por depósitos abundantes de anticuerpos y complemento en los vasos. El prototipo indiscutido es la <strong>Vasculitis por Inmunoglobulina A (Púrpura de Henoch-Schönlein)</strong>, caracterizada por depósitos de complejos inmunes que contienen IgA1 en las paredes capilares y en el mesangio renal."
      ]
    },
    {
      "subhead": "2. Características Clínicas Diferenciales: GPA vs PAM vs EGPA",
      "paragraphs": [
        "• <strong>Granulomatosis con Poliangeítis (GPA / Wegener):</strong> Se distingue por su clásica <strong>triada orgánica</strong>:",
        "  a) <em>Vía respiratoria superior:</em> Presente en más del 90% de los pacientes. Rinosinusitis crónica purulenta recidivante refractaria a múltiples ciclos antibióticos, epistaxis recurrente, costras nasales hemáticas, perforación del tabique nasal con colapso del dorso que genera la deformidad en <strong>\"nariz en silla de montar\"</strong>, otomastoiditis y estenosis traqueal subglótica con estridor.",
        "  b) <em>Pulmón:</em> Nódulos pulmonares bilaterales únicos o múltiples con marcada tendencia a la <strong>cavitación</strong> (paredes gruesas e irregulares), infiltrados alveolares fugaces y hemorragia alveolar.",
        "  c) <em>Riñón:</em> Glomerulonefritis necrotizante focal con proliferación extracapilar (semilunas) pauciinmune que se manifiesta como Glomerulonefritis Rápidamente Progresiva (GNRP), hematuria dismórfica, cilindros hemáticos y proteinuria moderada no nefrótica.",
        "• <strong>Poliangeítis Microscópica (PAM):</strong> A diferencia de la GPA, <strong>NO presenta inflamación granulomatosa ni afecta la vía aérea superior</strong>. Compromete casi invariablemente el riñón (GNRP pauciinmune en más del 80-90% de los casos) y los capilares alveolares pulmonares, manifestándose como capilaritis pulmonar con hemorragia alveolar difusa. Se asocia clásicamente a <strong>p-ANCA / anti-MPO</strong>.",
        "• <strong>Granulomatosis Eosinofílica con Poliangeítis (EGPA / Churg-Strauss):</strong> Clínicamente única por su vinculación con la atopia y la eosinofilia:",
        "  a) <em>Fase alérgica:</em> Asma bronquial severa de inicio en la edad adulta, resistente a corticoides inhalados, acompañada de rinosinusitis alérgica y poliposis nasal destructiva.",
        "  b) <em>Fase tisular/eosinofílica:</em> Eosinofilia periférica marcada (frecuentemente > 1.500 eosinófilos/uL o > 10% del recuento diferencial leucocitario) e infiltrados pulmonares migratorios no cavitados.",
        "  c) <em>Fase vasculítica:</em> <strong>Mononeuritis múltiple</strong> (presente en más del 70%, manifestándose como neuropatía axonal asimétrica aguda: pie caído por lesión del nervio ciático poplíteo externo o mano caída por nervio radial) y púrpura palpable. La principal causa de muerte es la <strong>miocardiopatía eosinofílica</strong> (miocarditis necrotizante e insuficiencia cardíaca congestiva refractaria)."
      ]
    },
    {
      "subhead": "3. Púrpura de Henoch-Schönlein (Vasculitis por IgA)",
      "paragraphs": [
        "Es la vasculitis sistémica más prevalente en la población pediátrica (pico de incidencia entre los 3 y 10 años, precedida habitualmente en un 50-75% por una infección respiratoria alta estreptocócica o viral), aunque puede presentarse en adultos con un curso renal más agresivo y tórpido.",
        "Se manifiesta por una <strong>tétrada clínica cardinal</strong>:",
        "1. <strong>Púrpura palpable no trombocitopénica:</strong> Lesiones petequiales y purpúricas sobreelevadas que no desaparecen a la vitropresión, simétricas, de distribución declive característica: miembros inferiores (pantorrillas, tobillos) y región glútea, respetando típicamente el tronco y cara.",
        "2. <strong>Artralgias o artritis:</strong> Periarticular, transitoria, no deformante ni erosiva, con marcado predominio en grandes articulaciones de extremidades inferiores (rodillas y tobillos).",
        "3. <strong>Dolor abdominal cólico:</strong> Secundario a isquemia y edema de la submucosa intestinal (angina intestinal). Puede complicarse con hemorragia digestiva alta o baja, íleo paralítico y, en niños pequeños, <strong>invaginación intestinal (intususcepción ileoileal)</strong>.",
        "4. <strong>Nefropatía por IgA:</strong> Se presenta en el 30-50% de los pacientes como hematuria microscópica o macroscópica asintomática con proteinuria. La histología renal es idéntica a la Enfermedad de Berger (proliferación mesangial con depósitos intensos de IgA1 granular en inmunofluorescencia).",
        "<em>Parámetro analítico crítico EUNACOM:</em> El <strong>recuento de plaquetas es rigurosamente NORMAL o está discretamente elevado</strong> (trombocitosis reactiva). Un recuento plaquetario bajo descarta de inmediato el Púrpura de Henoch-Schönlein y obliga a sospechar trombocitopenia inmune (PTI), púrpura trombocitopénico trombótico (PTT) o síndrome hemolítico urémico (SHU)."
      ]
    },
    {
      "subhead": "4. Urgencia Crítica: Síndrome Riñón-Pulmón y Hemorragia Alveolar Difusa",
      "paragraphs": [
        "La confluencia de hemorragia alveolar difusa y glomerulonefritis necrotizante rápidamente progresiva define el <strong>Síndrome Riñón-Pulmón</strong>, una de las mayores catástrofes en medicina interna (véase Tabla 9.22.B).",
        "La <strong>Hemorragia Alveolar Difusa (HAD)</strong> se produce por capilaritis neutrofílica alveolar con rotura de la membrana basal endotelial y extravasación masiva de hematíes hacia los alvéolos. Clínicamente se manifiesta por disnea aguda, hipoxemia refractaria e infiltrados alveolares algodonosos bilaterales difusos en alas de mariposa en la radiografía o TC de tórax. <em>Trampa de examen:</em> La hemoptisis puede estar completamente AUSENTE en hasta un 30% a 35% de los pacientes (la sangre queda atrapada en el espacio alveolar sin alcanzar la vía aérea proximal).",
        "El examen confirmatorio de urgencia es el <strong>Lavado Broncoalveolar (LBA)</strong> seriado mediante fibrobroncoscopía: demuestra un líquido de aspiración progresivamente más hemorrágico y rojizo en tres alícuotas secuenciales consecutivas, con presencia de más del 20% de macrófagos alveolares cargados de hemosiderina (<em>siderófagos</em> teñidos con azul de Prusia de Perls). Además, la <strong>Capacidad de Difusión de Monóxido de Carbono (DLCO) se encuentra marcadamente ELEVADA</strong> (> 100-130% del teórico) debido a la gran avidez del monóxido de carbono por la hemoglobina intraalveolar libre extravasada (véase Figura 9.22)."
      ]
    },
    {
      "subhead": "5. Protocolos Terapéuticos de Inducción, Remisión y Sostén",
      "paragraphs": [
        "El manejo de las vasculitis ANCA se estructura en dos fases: <strong>inducción de la remisión</strong> y <strong>mantenimiento de la remisión</strong> (véase Tabla 9.22.C):",
        "• <strong>Inducción en AAV grave o amenazante de la vida/órgano (insuficiencia renal aguda o HAD):</strong>",
        "  1. <strong>Bolos de Metilprednisolona EV:</strong> 500 a 1.000 mg EV diarios por 3 días consecutivos, continuando con prednisona oral 1 mg/kg/día con pauta de descenso progresivo.",
        "  2. <strong>Inmunosupresión combinada (Rituximab vs Ciclofosfamida):</strong> Se asocia <strong>Rituximab</strong> (375 mg/m² EV semanal por 4 semanas) O <strong>Ciclofosfamida</strong> (pulsos EV de 0.5 a 0.75 g/m² cada mes por 3 a 6 pulsos, o 2 mg/kg/día oral). Los estudios multicéntricos RAVE y RITUXVAS demostraron que Rituximab no es inferior a Ciclofosfamida y es de <strong>primera elección en mujeres o varones jóvenes en edad reproductiva</strong> (para evitar la insuficiencia ovárica prematura y la azoospermia por ciclofosfamida), en recaídas y en pacientes con toxicidad urológica previa.",
        "  3. <strong>Plasmaféresis (Recambio Plasmático Terapéutico):</strong> Indicada de forma selectiva en pacientes con <strong>hemorragia alveolar difusa severa con insuficiencia respiratoria hipoxémica</strong> o en aquellos con falla renal avanzada rápidamente progresiva (creatinina sérica > 5.7 mg/dL o requerimiento de hemodiálisis aguda) para remover rápidamente los ANCA circulantes.",
        "  4. <strong>Profilaxis obligatoria:</strong> Administración mandatoria de <strong>Cotrimoxazol (Trimetoprim-Sulfametoxazol 160/800 mg 3 veces por semana)</strong> durante todo el periodo de inducción para prevenir la neumonía letal por <em>Pneumocystis jirovecii</em> secundaria a linfopenia farmacológica.",
        "• <strong>Mantenimiento de la remisión:</strong> Una vez lograda la remisión completa (habitualmente a los 3 a 6 meses), se traslapa a <strong>Rituximab de mantenimiento</strong> (500 mg EV cada 6 meses) o <strong>Azatioprina</strong> (2 mg/kg/día oral) por un mínimo de 24 a 36 meses.",
        "• <strong>Manejo de la Vasculitis por IgA (Henoch-Schönlein):</strong> En la mayoría de los casos pediátricos es un cuadro autolimitado que requiere únicamente reposo, analgesia con paracetamol y observación ambulatoria. El uso de <strong>Prednisona oral (1 a 2 mg/kg/día por 1 a 2 semanas)</strong> está formalmente indicado ante <strong>dolor abdominal cólico severo, hemorragia digestiva, compromiso testicular o nefritis moderada a severa</strong> (proteinuria en rango nefrótico o caída de VFG), sin embargo no previene la aparición ulterior de nefropatía a largo plazo."
      ]
    }
  ],
  "table": {
    "title": "Patrones Serológicos ANCA, Compromiso Clínico Renal y Pulmonar en Vasculitis de Pequeño Vaso",
    "headers": [
      "Vasculitis de Pequeño Vaso",
      "Marcador Serológico Principal",
      "Compromiso de Vía Aérea y Pulmón",
      "Compromiso Renal Típico",
      "Histopatología Clave"
    ],
    "rows": [
      [
        "Granulomatosis con Poliangeítis (GPA)",
        "c-ANCA positivo en 85-90% (Anticuerpo Anti-Proteinasa 3 / PR3)",
        "Sinusitis purulenta, nariz en silla de montar, nódulos pulmonares cavitados bilaterales",
        "Glomerulonefritis necrotizante con semilunas pauciinmune (GNRP)",
        "Granulomas necrotizantes intra y extravasculares con necrosis"
      ],
      [
        "Poliangeítis Microscópica (PAM)",
        "p-ANCA positivo en 70-80% (Anticuerpo Anti-Mieloperoxidasa / MPO)",
        "Capilaritis pulmonar con hemorragia alveolar difusa; NO hay granulomas ni vía alta",
        "GNRP pauciinmune severa en > 85% de los pacientes; rápida pérdida de VFG",
        "Vasculitis necrotizante sin granulomas; depósitos inmunes escasos"
      ],
      [
        "Granulomatosis Eosinofílica (EGPA)",
        "p-ANCA / Anti-MPO en 40-50% (50% seronegativo)",
        "Asma grave del adulto refractaria, pólipos nasales, infiltrados pulmonares fugaces",
        "Glomerulonefritis pauciinmune leve a moderada (menos frecuente que en GPA/PAM)",
        "Infiltración masiva de eosinófilos en tejidos y granulomas eosinofílicos"
      ],
      [
        "Vasculitis por IgA (Henoch-Schönlein)",
        "ANCA negativos; elevación de IgA sérica en 50%",
        "Excepcional compromiso alveolar; vía aérea superior respetada",
        "Hematuria glomerular microscópica/macroscópica y proteinuria (Nefritis IgA)",
        "Vasculitis leucocitoclástica con depósitos de IgA1 mesangial granular"
      ]
    ]
  },
  "severityTable": {
    "title": "Criterios de Severidad Orgánica, Síndrome Riñón-Pulmón y Hemorragia Alveolar Difusa",
    "headers": [
      "Manifestación Crítica",
      "Parámetro Diagnóstico / Criterio de Gravedad",
      "Método Confirmatorio de Elección",
      "Riesgo / Conducta de Rescate"
    ],
    "rows": [
      [
        "Hemorragia Alveolar Difusa (HAD)",
        "Disnea aguda súbita, hipoxemia (PaFi < 200), infiltrados bilaterales en alas de mariposa",
        "Lavado Broncoalveolar (LBA) seriado con alícuotas más hemáticas y >20% siderófagos",
        "Mortalidad > 50%; intubación orotraqueal y bolos de metilprednisolona + plasmaféresis"
      ],
      [
        "GNRP Pauciinmune Aguda",
        "Duplicación de creatinina en < 2 semanas, oliguria, sedimento activo (cilindros hemáticos)",
        "Biopsia renal percutánea: semilunas celulares > 50% de glomérulos e IF negativa",
        "Pérdida irreversible de función renal; inicio de diálisis y Rituximab/Ciclofosfamida"
      ],
      [
        "Mononeuritis múltiple severa",
        "Déficit motor periférico asimétrico brusco (pie caído / mano caída) con dolor neuropático",
        "Electromiografía (EMG) con velocidad de conducción: neuropatía axonal motora asimétrica",
        "Daño axonal permanente; corticoterapia enérgica + ciclofosfamida (típica de EGPA)"
      ],
      [
        "Isquemia miocárdica / Miocarditis",
        "Insuficiencia cardíaca congestiva, troponinas elevadas, fracción de eyección deprimida",
        "Ecocardiograma Doppler transtorácico y Resonancia Magnética Cardíaca con realce tardío",
        "Principal causa de muerte en EGPA; hospitalización en UCI y soporte inotrópico"
      ],
      [
        "Abdomen agudo por vasculitis",
        "Dolor abdominal severo continuo, peritonismo, melena masiva o perforación intestinal",
        "Angio-TC de abdomen y pelvis: engrosamiento de asas intestinales y neumatosis",
        "Isquemia mesentérica con perforación; requiere laparotomía exploradora urgente"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Protocolo de Inducción con Ciclofosfamida, Rituximab y Criterios de Plasmaféresis",
    "headers": [
      "Intervención Terapéutica",
      "Régimen y Dosis Estándar",
      "Población / Indicación Preferente",
      "Toxicidad Crítica y Medidas de Soporte"
    ],
    "rows": [
      [
        "Bolos de Metilprednisolona EV",
        "500 a 1.000 mg EV cada 24 horas x 3 días consecutivos",
        "Toda forma de vasculitis ANCA grave con riesgo vital u orgánico",
        "Hiperglicemia severa, hipertensión, psicosis esteroidal, sepsis bacteriana"
      ],
      [
        "Rituximab (Anti-CD20)",
        "375 mg/m² EV semanal x 4 dosis (o 1.000 mg días 1 y 15)",
        "De elección en jóvenes (preserva fertilidad), recaídas o GPA severa",
        "Reacciones infusionales agudas, hipogammaglobulinemia, reactivación de VHB"
      ],
      [
        "Ciclofosfamida (Pulsos EV)",
        "0.5 a 0.75 g/m² EV mensual x 3 a 6 meses + Mesna",
        "Alternativa en falla renal catastrófica o falta de acceso a Rituximab",
        "Cistitis hemorrágica (prevenida con Mesna e hidratación), mielosupresión"
      ],
      [
        "Plasmaféresis (Recambio Plasmático)",
        "6 a 7 sesiones de 40 a 60 mL/kg de plasma en 14 días",
        "Hemorragia alveolar con hipoxemia severa o creatinina > 5.7 mg/dL",
        "Hipotensión por volemia, coagulopatía de consumo, infecciones por catéter"
      ],
      [
        "Cotrimoxazol profiláctico",
        "160/800 mg (1 comprimido fuerte) oral 3 veces por semana",
        "Obligatorio en todo paciente bajo Rituximab o Ciclofosfamida",
        "Prevenir neumonía fatal por Pneumocystis jirovecii; controlar hemograma"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM · Discusión de Alta Complejidad",
    "text": "Hombre de 48 años sin antecedentes médicos consulta en el servicio de urgencias por cuadro de 2 meses de evolución de astenia profunda, rinorrea purulenta fétida matinal, epistaxis recurrentes y sensación de obstrucción nasal que fue tratada en dos oportunidades con amoxicilina/clavulánico sin mejoría. En los últimos 4 días agrega tos seca, fiebre de 38.4 °C, disnea progresiva de esfuerzos y orinas de color oscuro tipo \"té cargado\". Al examen físico destaca paciente enflaquecido, taquipneico a 26 rpm, saturando 89% a aire ambiental. A la rinoscopia se aprecia destrucción y perforación del tabique nasal anterior con costras sanguinolentas abundantes. A la auscultación pulmonar presenta crépitos inspiratorios bibasales. No presenta edemas en extremidades inferiores. La radiografía y tomografía de tórax revelan múltiples lesiones nodulares en ambos campos pulmonares, varias de ellas con evidente cavitación central de paredes gruesas. Exámenes de laboratorio: hemoglobina 8.6 g/dL, leucocitos 14.500/mm³ con 82% neutrófilos, plaquetas 520.000/mm³, creatinina 4.2 mg/dL (basal desconocida), nitrógeno ureico 68 mg/dL, sedimento urinario con hematuria macroscópica (más de 50 hematíes por campo con 45% de hematíes dismórficos y cilindros hemáticos) y proteinuria de 1.8 g en 24 horas.",
    "conducta": "El diagnóstico más probable es una Granulomatosis con Poliangeítis (GPA / antes Wegener) con compromiso de vía aérea superior, pulmonar cavitado y síndrome nefrítico rápidamente progresivo (GNRP). La conducta médica inmediata consiste en hospitalización urgente en Unidad de Paciente Crítico (UPC), toma de anticuerpos c-ANCA (anti-PR3) y anticuerpos anti-MBG, inicio inmediato de BOLOS DE METILPREDNISOLONA 1.000 mg EV diarios por 3 días asociados a terapia de inducción con RITUXIMAB (375 mg/m² semanal) o CICLOFOSFAMIDA EV mensual, profilaxis contra Pneumocystis con cotrimoxazol y coordinación de biopsia renal percutánea urgente. Si el paciente presenta progresión a falla respiratoria por hemorragia alveolar o elevación acelerada de creatinina, debe asociarse plasmaféresis de rescate."
  },
  "explicacion": "El diagnóstico más probable es una Granulomatosis con Poliangeítis (GPA / antes Wegener) con compromiso de vía aérea superior, pulmonar cavitado y síndrome nefrítico rápidamente progresivo (GNRP). La conducta médica inmediata consiste en hospitalización urgente en Unidad de Paciente Crítico (UPC), toma de anticuerpos c-ANCA (anti-PR3) y anticuerpos anti-MBG, inicio inmediato de BOLOS DE METILPREDNISOLONA 1.000 mg EV diarios por 3 días asociados a terapia de inducción con RITUXIMAB (375 mg/m² semanal) o CICLOFOSFAMIDA EV mensual, profilaxis contra Pneumocystis con cotrimoxazol y coordinación de biopsia renal percutánea urgente. Si el paciente presenta progresión a falla respiratoria por hemorragia alveolar o elevación acelerada de creatinina, debe asociarse plasmaféresis de rescate.",
  "keyPoints": [
    "La GPA (Wegener) cursa clásicamente con c-ANCA (Anti-PR3 positivo) y nódulos pulmonares cavitados bilaterales.",
    "La perforación del tabique nasal con deformidad en \"nariz en silla de montar\" es patognomónica de GPA.",
    "La PAM cursa con p-ANCA (Anti-MPO positivo), GNRP pauciinmune y hemorragia alveolar SIN compromiso de vía alta.",
    "La EGPA (Churg-Strauss) se define por asma severo del adulto, eosinofilia > 1.500/uL y mononeuritis múltiple.",
    "En Púrpura de Henoch-Schönlein (IgA), el recuento de plaquetas es NORMAL; plaquetas bajas descartan el diagnóstico.",
    "La inducción en AAV grave exige bolos de metilprednisolona EV + Rituximab o Ciclofosfamida + cotrimoxazol profiláctico."
  ],
  "questions": [
    {
      "stem": "Las vasculitis alérgica de Churg-Strauss, presenta ANCA positivo, en una\nproporción moderada de los casos. Clínicamente se manifiesta como:",
      "options": [
        {
          "id": "A",
          "text": "Asma de difícil manejo, que luego se acompaña de glomerulonefritis"
        },
        {
          "id": "B",
          "text": "Exantema purpúrico, de extremidades inferiores, con hematuria, artritis y compromiso gastrointestinas, como hematoquezia por ejemplo"
        },
        {
          "id": "C",
          "text": "Rinosinusitis de difícil manejo, seguida de hemoptisis y glomerulonefritis, con rápido deterioro de la función renal"
        },
        {
          "id": "D",
          "text": "Cefalea, fiebre, amaurosis fugax, claudicación mandibular, polimialgia reumática y elevación de la VHS"
        },
        {
          "id": "E",
          "text": "Exantema pseudopapular (ronchas) muy pruriginoso, con lesiones que confluyen hasta formar grandes placas, afectando las mucosas y asociándose a hipotensión arterial"
        }
      ],
      "correcta": "A",
      "explicacion": "La alternativa correcta es la A. La vasculitis de Churg-Strauss (ahora conocida como granulomatosis eosinofílica con poliangeítis, GEPA) es una vasculitis sistémica que se caracteriza por asma (frecuentemente de inicio tardío y difícil manejo), eosinofilia, manifestaciones alérgicas (rinitis, pólipos nasales), y vasculitis que afecta múltiples órganos. El compromiso renal, específicamente la glomerulonefritis, es una manifestación importante, aunque no tan frecuente como en otras vasculitis ANCA asociadas (como la granulomatosis con poliangeítis - GPA o granulomatosis de Wegener, y la poliangeítis microscópica - PAM). La presencia de ANCA (generalmente p-ANCA, anti-MPO) se encuentra en una proporción moderada de los casos (alrededor del 40-60%). La secuencia típica es la aparición de asma y manifestaciones alérgicas, seguida por eosinofilia y, finalmente, vasculitis. Aunque no existe una guía clínica chilena específica del MINSAL para GEPA, el manejo se basa en las guías internacionales y el conocimiento de la enfermedad.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.025"
    },
    {
      "stem": "Un paciente de 32 años presenta una rinosinusitis crónica de difícil manejo,\nasociado a epistaxis frecuente. En el último tiempo se agrega compromiso del\nestado general, fiebre, hematuria y oliguria. En sus exámenes destaca ANCA 4/921/12/2016 Prueba 11 | Dr. Guevara\npositivos en patrón “c”. El diagnóstico de sospecha es:\nDr. Guevara",
      "options": [
        {
          "id": "A",
          "text": "Púrpura de Schöenlein-Henoch Preparación EUNACOM"
        },
        {
          "id": "B",
          "text": "Granulomatosis de Wegener"
        },
        {
          "id": "C",
          "text": "Vasculitis de Churg-Strauss"
        },
        {
          "id": "D",
          "text": "Lupus sistémico eritematoso"
        },
        {
          "id": "E",
          "text": "Panarteritis nodosa"
        }
      ],
      "correcta": "B",
      "explicacion": "El diagnóstico de sospecha es Granulomatosis con Poliangeítis (GPA), anteriormente conocida como Granulomatosis de Wegener. Esta es una vasculitis sistémica necrotizante que afecta predominantemente a vasos de pequeño y mediano calibre. El cuadro clínico del paciente es altamente característico y se ajusta a la tríada clásica de esta enfermedad: compromiso de la vía aérea superior, compromiso de la vía aérea inferior (pulmones) y glomerulonefritis.\n\nEl paciente presenta rinosinusitis crónica y epistaxis, que son manifestaciones directas de la inflamación granulomatosa y la vasculitis necrotizante en la vía aérea superior. Este compromiso puede ser muy destructivo, llegando a provocar perforación del tabique nasal o la deformidad en \"silla de montar\". El deterioro del estado general y la fiebre son síntomas constitucionales comunes en las vasculitis sistémicas activas. Finalmente, la aparición de hematuria y oliguria indica un compromiso renal agudo en forma de una glomerulonefritis rápidamente progresiva, una de las complicaciones más graves y definitorias de la GPA.\n\nEl hallazgo de laboratorio es clave y prácticamente confirma la sospecha. Los anticuerpos anticitoplasma de neutrófilos (ANCA) con patrón citoplasmático (c-ANCA) son altamente específicos para la GPA. Estos anticuerpos están dirigidos contra la enzima proteinasa 3 (PR3), y su presencia, en el contexto clínico adecuado, tiene un valor predictivo positivo superior al 95% para el diagnóstico de esta enfermedad.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.025"
    },
    {
      "stem": "La presentación clínica más habitual de la granulomatosis de Wegener es:",
      "options": [
        {
          "id": "A",
          "text": "Astenia, fiebre, compromiso de coronarias y arterias mesentéricas"
        },
        {
          "id": "B",
          "text": "Glomuronefritis rápidamente progresiva y ANCA positivo en patrón perinuclear"
        },
        {
          "id": "C",
          "text": "Asma refractario a tratamiento y con posterioridad afectación renal"
        },
        {
          "id": "D",
          "text": "Rinosinusitis de difícil manejo, asociada a glomerulonefritis rápidamente progresiva y afectación pulmonar"
        },
        {
          "id": "E",
          "text": "Insuficiencia renal, hematuria, accidentes vasculares encefálicos a repetición y púrpura palpable de extremidades inferiores"
        }
      ],
      "correcta": "D",
      "explicacion": "La alternativa correcta es la D: Rinosinusitis de difícil manejo, asociada a glomerulonefritis rápidamente progresiva y afectación pulmonar. La granulomatosis con poliangeítis (GPA), antiguamente conocida como granulomatosis de Wegener, es una vasculitis sistémica necrotizante que afecta principalmente a los vasos sanguíneos de pequeño y mediano calibre. Se caracteriza por la tríada clásica de:\n\n*   **Afectación de la vía aérea superior:** Rinosinusitis crónica necrotizante, con obstrucción nasal, secreción purulenta, úlceras nasales y/o destrucción del cartílago nasal (nariz en silla de montar). Esta rinosinusitis suele ser muy resistente al tratamiento convencional.\n*   **Afectación pulmonar:** Infiltrados pulmonares nodulares, cavitarios o no, que pueden causar tos, disnea, hemoptisis o ser asintomáticos.\n*   **Afectación renal:** Glomerulonefritis rápidamente progresiva, que puede llevar a insuficiencia renal terminal si no se trata.\n\nLa GPA es una enfermedad poco común, pero importante de reconocer debido a su potencial gravedad y necesidad de tratamiento inmunosupresor precoz. Si bien la tríada completa no siempre está presente al inicio, la combinación de rinosinusitis resistente al tratamiento con afectación renal y/o pulmonar debe generar una alta sospecha clínica. El diagnóstico se confirma con biopsia de tejido afectado (nariz, pulmón o riñón) y/o la presencia de anticuerpos anti-citoplasma de neutrófilo (ANCA), típicamente con patrón c-ANCA (dirigido contra la proteinasa 3 o PR3).\n\nSi bien no hay una guía clínica específica del MINSAL para el manejo de la GPA, el diagnóstico precoz y el inicio de inmunosupresión son cruciales para prevenir el daño orgánico irreversible. Las guías internacionales (p.ej., las de la Sociedad Europea de Reumatología, EULAR) son la base para el tratamiento en Chile.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.025"
    },
    {
      "stem": "Un paciente de 65 años consulta por fiebre, artralgias, hematuria, edema de\nextremidades inferiores y luego anuria. En sus exámenes de laboratorio\ndestaca elevación importante de la creatinina y positividad de los ANCA en\npatrón perinuclear, a títulos elevados. El diagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Lupus eritematoso sistémico"
        },
        {
          "id": "B",
          "text": "Granulomatosis de Wegener"
        },
        {
          "id": "C",
          "text": "Arteritis de la temporal"
        },
        {
          "id": "D",
          "text": "Panarteritis nodosa"
        },
        {
          "id": "E",
          "text": "Poliangeítis microscópica"
        }
      ],
      "correcta": "E",
      "explicacion": "La **Poliangeítis Microscópica (PAM)** es la alternativa correcta debido a la combinación de hallazgos clínicos y de laboratorio presentados en el caso:\n\n*   **Fiebre y Artralgias:** Sugieren un proceso inflamatorio sistémico.\n*   **Hematuria y Edema de Extremidades Inferiores:** Indican afectación renal, muy probablemente una glomerulonefritis. El edema es consecuencia de la pérdida de proteínas por el riñón dañado y la retención de líquidos debido a la insuficiencia renal.\n*   **Anuria y Elevación de Creatinina:** Señalan una insuficiencia renal aguda rápidamente progresiva.\n*   **ANCA Perinuclear (p-ANCA) a Títulos Elevados:** Son altamente sugestivos de PAM, aunque también pueden estar presentes en otras vasculitis ANCA asociadas (ej. Granulomatosis con Poliangeítis (GPA)).\n\nEn resumen, la PAM se presenta con una glomerulonefritis rápidamente progresiva asociada a p-ANCA positivos, lo que concuerda con el caso presentado.\n\nNo hay una guía clínica chilena específica del MINSAL para PAM. El manejo de esta patología se basa en guías internacionales, adaptadas a la realidad local. El enfoque general incluye el uso de inmunosupresores (corticoides, ciclofosfamida, rituximab) y, en ocasiones, plasmaféresis.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.11.1.025"
    }
  ],
  "vignetteText": "Hombre de 48 años sin antecedentes médicos consulta en el servicio de urgencias por cuadro de 2 meses de evolución de astenia profunda, rinorrea purulenta fétida matinal, epistaxis recurrentes y sensación de obstrucción nasal que fue tratada en dos oportunidades con amoxicilina/clavulánico sin mejoría. En los últimos 4 días agrega tos seca, fiebre de 38.4 °C, disnea progresiva de esfuerzos y orinas de color oscuro tipo \"té cargado\". Al examen físico destaca paciente enflaquecido, taquipneico a 26 rpm, saturando 89% a aire ambiental. A la rinoscopia se aprecia destrucción y perforación del tabique nasal anterior con costras sanguinolentas abundantes. A la auscultación pulmonar presenta crépitos inspiratorios bibasales. No presenta edemas en extremidades inferiores. La radiografía y tomografía de tórax revelan múltiples lesiones nodulares en ambos campos pulmonares, varias de ellas con evidente cavitación central de paredes gruesas. Exámenes de laboratorio: hemoglobina 8.6 g/dL, leucocitos 14.500/mm³ con 82% neutrófilos, plaquetas 520.000/mm³, creatinina 4.2 mg/dL (basal desconocida), nitrógeno ureico 68 mg/dL, sedimento urinario con hematuria macroscópica (más de 50 hematíes por campo con 45% de hematíes dismórficos y cilindros hemáticos) y proteinuria de 1.8 g en 24 horas."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "vasculitis, pequeno, positivas, purpura, schonlein")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Diciembre 2018 · Pregunta 1 · confianza 0.8
Un paciente de 18 años consulta por cefalea de algunas semanas de evolución, que ha ido en aumento, hasta alcanzar gran intensidad. En su examen físico destaca presión arterial 170/100 mmHg, FC: 72x’ y presencia de un soplo abdominal, en el flanco derecho. El diagnóstico más probable es:
- A) Disección aórtica
- B) Aneurisma aórtico abdominal
- C) Hipertensión esencial
- D) Hipertensión renovascular
- E) Accidente vascular encefálico
**Correcta: D**
Explicación del banco: Es una HTA renovascular clásica, tanto por el soplo renal, como por la clínica de hipertensión secundaria (joven, severa),

### [2] EUNACOM Diciembre 2022 · Pregunta 24 · confianza 0.65
Un paciente de 65 años, con antecedente de hipertensión arterial, diagnosticada hace un año en tratamiento con atenolol 50 mg cada 12 horas y enalapril 20 mg cada 12 horas, refiere múltiples tomas de presión arterial con valores sobre 160/100 mmHg. Al examen físico tiene FC: 60x’, PA: 158/100 mmHg, sin alteraciones en el examen segmentario. Se solicitan exámenes que muestran creatinina: 1,2 mg/dl, sodio: 143 mEq/L, potasio: 3,4 mEq/L, hemograma normal y TSH: 3,2 UI/L. ¿Con qué examen se debe proseguir su estudio?
- A) Cortisol basal y post dexametasona
- B) Monitoreo de presión arterial de 24 horas
- C) Calcemia y niveles de paratohormona
- D) Metanefrinas y normetanefrinas en orina
- E) Ecografía Doppler de arterias renales
**Correcta: E**
Explicación del banco: Conducta / Tratamiento indicado: **Ecografía Doppler de arterias renales** (opción **E**). Todos los antihipertensivos tienen eficacia similar; la elección depende de comorbilidades y efectos adversos De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [3] EUNACOM Enero 2023 · Pregunta 83 · confianza 0.6
Paciente con HTA de difícil control, creatinina levemente elevada e hiperkalemia. ¿Cuál es el estudio a solicitar?
- A) Ecografía Doppler de arterias renales
- B) Renograma isotópico con captopril
- C) Arteriografía renal selectiva
- D) AngioTAC renal
- E) Biopsia renal
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Ecografía Doppler de arterias renales). Ecografía Doppler de arterias renales. Clase sobre diagnóstico, objetivos y pilares del tratamiento de la hipertensión arterial. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [4] EUNACOM Diciembre 2019 · Pregunta 14 · confianza 0.92
Una paciente de 34 años, diabética con control metabólico irregular, consulta por edema de las extremidades inferiores y orinas espumosas. Al examen físico se constata edema palpebral y facial, edema blando de extremidades inferiores. En sus exámenes destaca hemoglobina glicosilada de 8,2% y proteinuria cuantitativa de 9 g en 24 horas. ¿Cuál es la conducta de elección para proseguir el manejo de esta paciente?
- A) Electroforesis de proteínas en sangre
- B) Biopsia renal
- C) Inmunofijación de proteínas en orina
- D) Prednisona oral
- E) ANCA, C3 y C4
**Correcta: B**
Explicación del banco: Pregunta muy difícil, pero tiene un claro síndrome nefrótico, que, por estar en contexto de una diabetes, se sospecha sea por nefropatía membranosa. Por ser una mujer joven, también podría ser un lupus, con nefropatía membranosa. De las opciones, solo la biopsia renal serviría para avanzar en el diagnóstico. Sí hay que solicitar ANA y complemento (no ANCA, ya que las vasculitis son nefríticas).

### [5] EUNACOM Julio 2025 · Pregunta 127 · confianza 0.9
Hombre de 55 años con dolor en el hombro derecho al elevar el brazo entre 60-120° (arco doloroso). Prueba de Neer y Hawkins positivas. ¿Cuál es el diagnóstico más probable?
- A) Síndrome de pinzamiento subacromial (manguito rotador)
- B) Luxación glenohumeral
- C) Capsulitis adhesiva (hombro congelado)
- D) Artritis reumatoide de hombro
- E) Fractura de clavícula
**Correcta: A**
Explicación del banco: Arco doloroso 60-120° + Neer (+) + Hawkins (+) = síndrome de pinzamiento subacromial por tendinitis/desgarro del manguito rotador. Tratamiento: kinesioterapia + AINEs ± corticoides locales.

### [6] EUNACOM Diciembre 2018 · Pregunta 123 · confianza 0.9
Un paciente de 51 años, con antecedente de un recambio valvular, secundario a una valvulopatía, consulta por un cuadro de 2 semanas de astenia, fiebre y malestar general. Al examen físico tiene T°: 38,2°C, PA: 120/80 mmHg, FC: 94x’, se observan lesiones eritematosas en los dedos de ambas manos y algunas petequias en las extremidades inferiores y, en el examen cardíaco, se aprecia un soplo diastólico de intensidad IV/VI. Se solicitan exámenes de sangre, entre los que destaca PCR: 12 mg/L, VHS: 70 mm/h y leucocitosis de 16.000 por mm3. Además, se realizan 3 hemocultivos, que resultan todos positivos para cocáceas Gram positivas, en cadena. ¿Cuál es el antibiótico de elección para iniciar el tratamiento?
- A) Penicilina sódica
- B) Cloxacilina
- C) Clindamicina
- D) Ceftazidima
- E) Gentamicina
**Correcta: A**
Explicación del banco: Tiene una endocarditis subaguda por Streptococcus viridans, que se trata con ampicilina o penicilina sódica.

### [7] EUNACOM Enero 2023 · Pregunta 172 · confianza 0.85
Adulto mayor hospitalizado por infección, comienza con desorientación temporoespacial, inatención e ideas deliriosas. ¿Diagnóstico más probable?
- A) Demencia de inicio agudo
- B) Trastorno psicótico breve
- C) Delirium
- D) Encefalopatía hepática
- E) Trastorno disociativo agudo
**Correcta: C**
Explicación del banco: Diagnóstico: **Delirium** (opción **C**). Delirium. Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [8] EUNACOM Agosto 2021 · Pregunta 59 · confianza 0.85
Una paciente de 27 años, diabética tipo 1, con mal control metabólico, consulta por edema de las extremidades inferiores y orinas espumosas. Al examen físico se constata edema palpebral y facial, edema blando de extremidades inferiores. En sus exámenes destaca hemoglobina glicosilada de 8,2%, ANA negativos, sedimento de orina con abundantes cuerpos ovales grasos, 2-3 glóbulos rojos por campo y 2-4 glóbulos blancos por campo, creatinina: 1,2 mg/dl y proteinuria cuantitativa de 9 g en 24 horas. ¿Cuál es la conducta de elección para proseguir el manejo de esta paciente?
- A) Electroforesis de proteínas en sangre
- B) Biopsia renal
- C) Inmunofijación de proteínas en orina
- D) Prednisona oral
- E) Solicitar ANCA, C3 y C4
**Correcta: B**
Explicación del banco: Tiene un síndrome nefrótico clásico. Por ser diabética, lo más probable es que sea una glomerulopatía membranosa. El estudio del síndrome nefrótico incluye todos los exámenes de sangre, en busca de otras causas (ANA, complemento, VIH, virus hepatitis ByC más exámenes generales) y luego la biopsia renal. En este caso, los ANCA, que son marcadores de vasculitis, no se asocian asíndrome nefrótico, sino solo nefrítico y GNRP, por lo que la respuesta que incluye los ANCA no parece correcta.

### [9] EUNACOM Julio 2025 · Pregunta 119 · confianza 0.8
Hombre de 55 años con diabetes mellitus de larga data. Presenta debilidad asimétrica en extremidades, afectando nervio peroneo derecho y cubital izquierdo. Sin compromiso de pares craneanos. ¿Cuál es el diagnóstico?
- A) Mononeuritis múltiple
- B) Polineuropatía diabética simétrica
- C) Síndrome de Guillain-Barré
- D) ACV múltiple
- E) Miopatía inflamatoria
**Correcta: A**
Explicación del banco: Afectación de nervios periféricos individuales, no contiguos y asimétricos en diabético = mononeuritis múltiple (mononeuropatía múltiple). Causas: diabetes, vasculitis, lepra.

### [10] EUNACOM Diciembre 2017 · Pregunta 44 · confianza 0.8
Una paciente de 67 años, presenta un cuadro de malestar general, asociado a febrículas y edema de las extremidades inferiores. Al examen físico, su presión arterial es 180/110 mmHg y se constata el edema blando, con signo de la fóvea. En sus exámenes de sangre destaca creatininemia de 4,1 mg/dl, BUN de 60 mg/dl y sedimento de orina con 60 eritrocitos por campo, con 80% de dismorfia y leucocitos de 10 a 15 por campo y cilindros hemáticos. Su hemograma muestra hemoglobina: 11,8 mg/dl, hematocrito: 36%, blancos: 10.000 por mm3, plaquetas: 160.000 por mm3. ¿Cuál es el diagnóstico más probable?
- A) Glomerulonefritis postestreptocócica
- B) Nefropatía diabética
- C) Lesión glomerular mínima
- D) Vasculitis ANCA positiva
- E) Púrpura trombocitopénico trombótico
**Correcta: D**
Explicación del banco: Diagnóstico: **Vasculitis ANCA positiva** (opción **D**). Es una poliangeítis microscópica clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [11] EUNACOM Julio 2013 · Pregunta 111 · confianza 0.8
Un paciente de 6 años, con historia de que hace dos semanas presentó cuadro caracterizado por rinorrea, odinofagia y tos, el cual fue manejado adecuadamente. Actualmente consulta por presencia de sangrado de encías, sin otros síntomas. Al examen físico destaca en buenas condiciones generales, con petequias en tronco y extremidades, resto normal. Se solicita hemograma que muestra hemoglobina 12 mg/dL, leucocitos 8.000/mm3 y plaquetas 10.000/mm3. El diagnóstico más probable es:
- A) Purpura trombocitopénico trombótico
- B) Hemofilia A
- C) Púrpura de Schonlein Henoch
- D) Purpura trombocitopénico inmune
- E) Enfermedad de Von Willebrand
**Correcta: D**
Explicación del banco: Diagnóstico: **Purpura trombocitopénico inmune** (opción **D**). PTI de libro. :::warning Púrpura + FIEBRE = URGENCIA → descartar meningococcemia (instalación aguda, grave) o leucemia aguda (fiebre + adenopatías + esplenomegalia + anemia de días a semanas). Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [12] EUNACOM Julio 2013 · Pregunta 168 · confianza 0.8
Paciente de 76 años, con antecedentes de HTA en tratamiento, es hospitalizado por neumonía requiriendo antibíoticos endovenosos. Estando hospitalizado comienza con desorientación temporoespacial, inatención y pensamiento desorganizado, de curso fluctuante durante el día. El diagnóstico más probable es:
- A) Demencia senil
- B) Demencia frontotemporal
- C) Esquizofrenia
- D) Trastorno delirante crónico
- E) Delirium
**Correcta: E**
Explicación del banco: Diagnóstico: **Delirium** (opción **E**). Delirium de libro. Siempre preguntan varios delirium o síndrome confusional agudo.. Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [13] EUNACOM Julio 2024 · Pregunta 2 · confianza 0.75
Una paciente de 25 años, embarazada, con 12 semanas contadas desde la FUR segura y confiable, se realiza exámenes, entre los que trae un VDRL, que resulta "no reactivo" y un MHA-TP, que resulta "reactivo". ¿Cuál es la conducta más adecuada?
- A) Administrar penicilina benzatina de inmediato
- B) Realizar VDRL mensual durante el resto del embarazo
- C) Controlar con VDRL a las 30 semanas
- D) Solicitar un FTA-ABS
- E) Indicar doxiciclina vía oral
**Correcta: C**
Explicación del banco: Sífilis tratada: Las pruebas no treponémicas (VDRL, RPR) se negativizan tras tratamiento exitoso. Las treponémicas (FTA-ABS, MHA-TP) permanecen positivas de por vida. VDRL no reactivo + MHA-TP reactivo indica sífilis tratada. Conducta: control prenatal habitual + VDRL entre las 28-30 semanas.

### [14] EUNACOM Diciembre 2018 · Pregunta 119 · confianza 0.75
Una paciente de 74 años hospitalizada, desde hace una semana, por una fractura de cadera. Ha presentado cambios en su conducta, ya que al inicio era amable y cooperadora, pero en el último tiempo se ha agitado y mostrado confusa, e incluso ha llegado a agredir a otros pacientes. ¿Cuál es el diagnóstico más probable?
- A) Enfermedad de Alzheimer
- B) Trastorno delirante
- C) Esquizofrenia
- D) Demencia vascular
- E) Delírium
**Correcta: E**
Explicación del banco: Diagnóstico: **Delírium** (opción **E**). Es un síndrome confusional agudo o delirium clásico.. Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [15] EUNACOM Julio 2016 · Pregunta 140 · confianza 0.75
Puérpera de 15 días, inicia disnea y tos, asociada a expectoración, hemoptoica. Al examen pulmonar tiene murmullo pulmonar presente, con escasos crépitos y satura 90% a FiO2 ambiental. El diagnóstico más probable es:
- A) Tromboembolismo pulmonar
- B) Neumonía adquirida en la comunidad
- C) Neumonía intrahospitalaria
- D) Tuberculosis pulmonar
- E) VIH
**Correcta: A**
Explicación del banco: Diagnóstico: **Tromboembolismo pulmonar** (opción **A**). el antecedente de puerperio orienta muy fuertemente a TEP. La clínica es compatible.. La enfermedad de Behçet es una vasculitis cuyas manifestaciones recuerdan a las pelvispondiloartropatías. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [16] EUNACOM Diciembre 2018 · Pregunta 97 · confianza 0.72
Un paciente de 68 años, con antecedente de cáncer de próstata, en tratamiento con hormonoterapia, consulta por un cuadro de 2 días de evolución de dolor torácico, en el lado izquierdo, tipo puntada de costado, asociado a disnea, tos y fiebre. ¿Cuál es el diagnóstico más probable?
- A) Metástasis pulmonares
- B) Neumotórax
- C) Infarto agudo al miocardio
- D) Tromboembolismo pulmonar
- E) Distrés respiratorio
**Correcta: D**
Explicación del banco: Diagnóstico: **Tromboembolismo pulmonar** (opción **D**). Es un TEP clásico.. La enfermedad de Behçet es una vasculitis cuyas manifestaciones recuerdan a las pelvispondiloartropatías. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [17] EUNACOM Diciembre 2017 · Pregunta 5 · confianza 0.72
Un paciente de 68 años presenta una fractura de cadera, de la que es operado. Al segundo día, presenta un síncope, que se recupera al a los pocos segundos. Su presión arterial es de 100/60 mmHg y su frecuencia cardíaca es 110. Además satura 91% a FiO2 ambiental. Su examen físico muestra murmullo pulmonar presente, sin ruidos agregados y un ritmo regular en 2 tiempos, sin soplos. ¿Cuál es el examen más adecuado para proseguir con el estudio?
- A) Ecocardiograma
- B) Radiografía de tórax
- C) AngioTAC de tórax
- D) TILT test
- E) Monitorización electrocardiográfica de 24 horas
**Correcta: C**
Explicación del banco: La alternativa correcta es la **C** (AngioTAC de tórax). La sospecha es un TEP.. La enfermedad de Behçet es una vasculitis cuyas manifestaciones recuerdan a las pelvispondiloartropatías. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [18] EUNACOM Diciembre 2025 · Pregunta 107 · confianza 0.7
Un niño de 2 años consulta por odinofagia de 2 días de evolución, asociada a ﬁebre de 38,1 °C. En su examen Fsico presenta amígdalas eritematosas y aumentadas de tamaño, con exudado bilateral de aspecto purulento, y se palpan adenopa`as cervicales pequeñas bilaterales. Su examen cardiopulmonar es normal. Se solicita prueba de detección de estreptococo beta hemolí8co del grupo A, que resulta posi8va. ¿Cuál es el tratamiento de elección?
- A) Azitromicina
- B) Amoxicilina
- C) Claritromicina
- D) Amoxicilina + ácido clavulánico
- E) Penicilina sódica
**Correcta: B**
Explicación del banco: Si bien es rara la amigdaliGs bacteriana en menores de 3 años, en este caso Gene 3 criterios de Centor (ﬁebre, exudado y adenopaVas), por lo que es correcto haberle pedido las pruebas de detección de SGA. Al estar positivas, se obliga al tratamiento antibiótico. De elección se usa la amoxicilina sola. El SGA no desarrolla betalactamasas, por lo que no es necesario el ácido clavulánico. La penicilina benzaGna en una dosis es una buena opción, aunque dolorosa, en cambio la penicilina sódica se debe dar cada 6 horas, por lo que no se usa en esta infección. Los macrólidos son de elección en alérgicos a la penicilina.

### [19] EUNACOM Julio 2024 · Pregunta 69 · confianza 0.7
Una paciente de 25 años, embarazada, con 12 semanas contadas desde la FUR segura y confiable, se realiza exámenes, entre los que trae un VDRL, que resulta "no reactivo" y un MHA-TP, que resulta "reactivo". ¿Cuál es la conducta más adecuada?
- A) Administrar penicilina benzatina de inmediato
- B) Realizar VDRL mensual durante el resto del embarazo
- C) Controlar con VDRL a las 30 semanas
- D) Solicitar un FTA-ABS
- E) Indicar doxiciclina vía oral
**Correcta: C**
Explicación del banco: Las pruebas no treponémicas (VDRL, RPR) se negativizan tras el tratamiento exitoso. Las treponémicas (FTA-ABS, MHA-TP) permanecen positivas de por vida. VDRL no reactivo + MHA-TP reactivo = sífilis tratada en el pasado. Conducta: control prenatal habitual con VDRL a las 28-30 semanas.

### [20] EUNACOM Julio 2019 · Pregunta 106 · confianza 0.7
Una paciente de 76 años presenta, desde hace un mes tos, disnea y expectoración, que en ocasiones es hemoptoica. A lo anterior se agrega hematuria, orinas espumosas, edema de extremidades inferiores y malestar general. En sus exámenes destaca creatinina: 4,6 mg/dl, BUN: 89 mg/dl, K: 5,9 mEq/L, Na: 130 mEq/L, proteinuria: 1.600 mg/24 horas, ANA negativos y complemento normal. El diagnóstico más probable es:
- A) Glomerulonefritis postestreptocócica
- B) Lupus eritematoso sistémico
- C) Tuberculosis miliar
- D) Vasculitis sistémica
- E) Púrpura trombocitopénico trombótico
**Correcta: D**
Explicación del banco: Tiene un síndrome riñón-pulmón, con una alveolitis hemorrágica y una GNRP, que, por la edad, corresponde probablemente a una PAM (poliangeítis microscópica), que es una vasculitis primaria muy agresiva, clásica de los adultos mayores y que se presenta con esta clínica, más mononeuritis múltiple, rash y fiebre, además de síntomas inespecíficos, como malestar y artralgias. Es muy grave y requiere de corticoides e inmunosupresores.

### [21] EUNACOM Diciembre 2022 · Pregunta 96 · confianza 0.6
Un paciente de 84 años es traído a urgencia por familiares. Refieren que sus síntomas iniciaron hace 7 días, consistentes en tos con expectoración purulenta, sensación febril y disnea de esfuerzos. En las últimas noches se ha levantado algo agitado y anoche estuvo muy agitado, gritando que habían entrado extraterrestres en su casa y que lo querían matar. Al examen físico, tiene T°: 37,9°C, PA: 154/100, FC: 88x’, FR: 25x’, satura: 93% a FiO2 ambienta, tiene examen pulmonar con crepitaciones en la base derecha y examen cardíaco con ritmo regular en dos tiempos sin soplos. ¿Cuál es el diagnóstico más probable?
- A) Accidente vascular encefálico
- B) Delirium
- C) Epilepsia del lóbulo temporal
- D) Demencia tipo Alzheimer
- E) Esquizofrenia paranoide
**Correcta: C**
Explicación del banco: Diagnóstico: **Epilepsia del lóbulo temporal** (opción **C**). Esta clase cubre la púrpura de Schonlein-Henoch, también llamada vasculitis por IgA. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [22] EUNACOM Julio 2019 · Pregunta 142 · confianza 0.6
¿Cuál es la conducta más adecuada para un paciente, que es contacto intradomiciliario de otro individuo diagnosticado de tuberculosis pulmonar bacilífera?
- A) Solicitar PPD y cultivo de expectoración
- B) Solicitar radiografía de tórax y baciloscopías
- C) Controlar clínicamente por 3 meses
- D) Indicar profilaxis con isoniazida por 6 meses
- E) Solicitar cultivo de Koch y broncoscopía
**Correcta: B**
Explicación del banco: El manejo actual de los contactos de TBC es solicitar radiografía, baciloscopías y consultar la presencia de síntomas. Además, se puede pedir el PPD (obligatorio en menores de 15 años): si está positivo y todo el resto normal, se deja profilaxis por 6 meses con isoniazida. Si las BK están positivas, se trata con los 4 ATB antiTBC (en el menor de 15 años, también si es que tiene la RxTx alterada).

### [23] EUNACOM Julio 2019 · Pregunta 130 · confianza 0.58
Una paciente de 25 años, con antecedente de sífilis tratada hace un año, cursando un embarazo de 8 semanas, se realiza un VDRL, que resulta positivo en dilución 1/16. La conducta más adecuada es:
- A) Solicitar FTA-ABS
- B) Controlar con VDRL seriado
- C) Solicitar RPR
- D) Administrar ceftriaxona
- E) Administrar penicilina benzatina
**Correcta: E**
Explicación del banco: Debe tratarse por cualquier de las dos siguientes razones: 1. Todo VDRL positivo en el embarazo se trata, incluso antes de confirmarse con las pruebas treponémicas. 2. Alguien que ya tuvo sífilis mantendrá siempre positivas las pruebas treponémicas (FTA-ABS o MHA-TP), por lo que basta que vuelvan a positivizar las pruebas no treponémicas (VDRL o RPR) para indicar tratamiento.

### [24] EUNACOM Julio 2024 · Pregunta 70 · confianza 0.55
Una paciente de 25 años, embarazada, con 12 semanas contadas desde la FUR segura y confiable, se realiza exámenes, entre los que trae un VDRL, que resulta “no reactivo” y un MHA-TP, que resulta “reactivo”. ¿Cuál es la conducta más adecuada?
- A) Administrar penicilina benzatina de inmediato
- B) Realizar VDRL mensual durante el resto del embarazo
- C) Controlar con VDRL a las 30 semanas
- D) Solicitar un FTA-ABS
- E) Indicar doxiciclina vía oral
**Correcta: C**
Explicación del banco: Sífilis tratada: Para el diagnóstico de sífilis se utilizan dos tipos de pruebas serológicas: pruebas no treponémicas y pruebas treponémicas. Las pruebas no treponémicas, como el VDRL (Venereal Disease Research Laboratory) y el RPR (Rapid Plasma Reagin), suelen negativizarse después del tratamiento exitoso de la sífilis. Las pruebas treponémicas, como el FTA-ABS (Fluorescent Treponemal Antibody Absorption) y el MHA-TP (Micro-Hemagglutination Assay for Treponema pallidum), permanecen positivas de por vida, incluso después del tratamiento. En el caso descrito, los resultados sugieren que la paciente tuvo sífilis en el pasado y se curó con tratamiento. Por lo tanto, la conducta a seguir es realizar el control prenatal habitual, incluyendo una nueva prueba de VDRL entre las 28 y 30 semanas de gestación.

### [25] EUNACOM Diciembre 2017 · Pregunta 6 · confianza 0.55
Un paciente de 71 años, con antecedente de tabaquismo de 30 paquetes año, presenta tos de 2 meses de evolución de tos, asociado a baja de peso. Hace 2 días inició con disnea, asociada a dolor con tope inspiratorio. Hoy se agregó fiebre y expectoración hemoptoica. Al examen físico tiene FR: 20x’, PA: 110/70 mmHg, FC: 96x’, murmullo pulmonar presente, simétrico, con escasos crépitos bilaterales y ritmo regular en 2 tonos, sin ruidos agregados. ¿Cuál es el estudio más adecuado para el enfrentamiento de este paciente?
- A) Radiografía de tórax
- B) Ecocardiografía
- C) Hemograma y hemocultivos
- D) AngioTAC de tórax
- E) Cultivos de expectoración
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (AngioTAC de tórax). La sospecha también es un TEP.. La enfermedad de Behçet es una vasculitis cuyas manifestaciones recuerdan a las pelvispondiloartropatías. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).
