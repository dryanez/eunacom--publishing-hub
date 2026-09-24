# CLASE neuro-17 · Neurologia 10.17: Miastenia Gravis: Fisiopatología (anti-AChR, anti-MuSK), Crisis Miasténica y Timoma

Escribe `classes/lessons/neuro-17.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-17" y el `tier` es 3.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-14: Neurologia 10.14: Enfermedad de Alzheimer y Deterioro Cognitivo Leve
- neuro-15: Neurologia 10.15: Demencia Vascular, Demencia por Cuerpos de Lewy y Demencia Frontotemporal
- neuro-16: Neurologia 10.16: Síndrome de Guillain-Barré: Polirradiculoneuropatía Aguda, Albúmino-citológico y Manejo Intensivo
- neuro-18: Neurologia 10.18: Esclerosis Múltiple: Criterios de McDonald, Bandas Oligoclonales y Terapia Modificadora de Enfermedad
- neuro-19: Neurologia 10.19: Parálisis Facial Periférica (Bell) vs Central y Neuropatías por Atrapamiento
- neuro-20: Neurologia 10.20: Síndrome Vertiginoso Periférico vs Central: VPPB, Maniobras de Epley y Protocolo HINTS

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-17",
  "classId": "neuro-17",
  "tier": 3,
  "blockNum": 4,
  "blockName": "Patología Neuromuscular, Desmielinizante y Nervio Periférico",
  "topicLabel": "10.17",
  "title": "Miastenia Gravis: Fisiopatología (anti-AChR, anti-MuSK), Crisis Miasténica y Timoma",
  "perfilCode": "1.10.1.020",
  "dx": "Específico",
  "tx": "Completo",
  "seg": "Realizar",
  "ges": "Evaluación y seguimiento multidisciplinario por Neurología y Cirugía de Tórax · Cobertura hospitalaria de urgencia para Crisis Miasténica en Unidad de Paciente Crítico (UPC) bajo Ley de Urgencia.",
  "reconstrucciones": "EUNACOM Julio 2024 (Q#74)",
  "frecuencia": "Alta rentabilidad · Pregunta angular de patología de la unión neuromuscular en EUNACOM",
  "algoTitle": "Algoritmo de Diagnóstico, Manejo Crónico y Crisis Miasténica en Miastenia Gravis",
  "diagram": {
    "title": "Algoritmo de Manejo Integral de Miastenia Gravis y Crisis Miasténica",
    "svg": "<svg viewBox=\"0 0 620 516\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Sospecha Clínica de Miastenia Gravis (Debilidad muscular fluctuante y fatigable)</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Ptosis palpebral asimétrica, diplopía, voz nasal, debilidad bulbar o proximal</text>\n  <text class=\"accS\" x=\"310\" y=\"46\" text-anchor=\"middle\">Pupilas estrictamente normales</text>\n  <path class=\"ln\" d=\"M310,58 V80\"/>\n  <rect class=\"acc\" x=\"100\" y=\"80\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"95\" text-anchor=\"middle\" font-weight=\"700\">Pruebas Clínicas a Pie de Cama (Bedside Testing)</text>\n  <text class=\"accS\" x=\"310\" y=\"107\" text-anchor=\"middle\">Test del hielo (ice pack test) positivo (mejora ptosis ≥ 2 mm tras 2 min)</text>\n  <text class=\"accS\" x=\"310\" y=\"118\" text-anchor=\"middle\">Test de Simpson (mirada fija hacia arriba)</text>\n  <path class=\"ln\" d=\"M310,130 V152\"/>\n  <rect class=\"acc\" x=\"100\" y=\"152\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"167\" text-anchor=\"middle\" font-weight=\"700\">Confirmación Serológica, Electrofisiológica y TAC de Tórax</text>\n  <text class=\"accS\" x=\"310\" y=\"179\" text-anchor=\"middle\">Anti-AChR (&gt; 85%), Anti-MuSK · EMG estimulación repetitiva 3 Hz (decremento &gt; 10%)</text>\n  <text class=\"accS\" x=\"310\" y=\"190\" text-anchor=\"middle\">TAC tórax sin contraste para timoma</text>\n  <path class=\"ln\" d=\"M310,202 V224\"/>\n  <rect class=\"dec\" x=\"70\" y=\"224\" width=\"480\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"239\" text-anchor=\"middle\" font-weight=\"700\">¿Evaluación de la Gravedad: Signos de Crisis Miasténica Inminente?</text>\n  <text class=\"sub\" x=\"310\" y=\"251\" text-anchor=\"middle\">Disnea en decúbito, ortopnea, conteo en una respiración</text>\n  <text class=\"sub\" x=\"310\" y=\"262\" text-anchor=\"middle\">&lt; 20, debilidad bulbar severa, estridor inspiratorio</text>\n  <path class=\"ln\" d=\"M310,274 V304 H158 V314\"/>\n  <path class=\"ln\" d=\"M310,304 H462 V314\"/>\n  <text class=\"lbl\" x=\"158\" y=\"299\" text-anchor=\"middle\">Crisis Miasténica (CVF &lt; 20 mL/kg o PImáx &lt; 30)</text>\n  <text class=\"lbl\" x=\"462\" y=\"299\" text-anchor=\"middle\">Miastenia Estable / Ambulatoria (Sin falla respiratoria)</text>\n  <rect class=\"crit\" x=\"12\" y=\"314\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"329\" text-anchor=\"middle\" font-weight=\"700\">Ingreso Inmediato a UPC / UCI + IOT Electiva</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"341\" text-anchor=\"middle\">Pausa transitoria de piridostigmina</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"352\" text-anchor=\"middle\">Iniciar IgEV (2 g/kg en 2-5 d) o Plasmaféresis · Evitar relajantes curarizantes</text>\n  <rect class=\"dec\" x=\"316\" y=\"314\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"329\" text-anchor=\"middle\" font-weight=\"700\">Manejo Farmacológico Ambulatorio Escalonado</text>\n  <text class=\"sub\" x=\"462\" y=\"341\" text-anchor=\"middle\">Piridostigmina 60 mg c/4-6 h VO + Corticoides</text>\n  <text class=\"sub\" x=\"462\" y=\"352\" text-anchor=\"middle\">escalonados + Ahorradores de esteroides (Azatioprina)</text>\n  <path class=\"ln\" d=\"M158,364 V374 H310 V386\"/>\n  <path class=\"ln\" d=\"M462,364 V374 H310 V386\"/>\n  <rect class=\"acc\" x=\"100\" y=\"386\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"401\" text-anchor=\"middle\" font-weight=\"700\">Evaluación Quirúrgica: Indicaciones de Timectomía</text>\n  <text class=\"accS\" x=\"310\" y=\"413\" text-anchor=\"middle\">Obligatoria en todo Timoma (10-15%)</text>\n  <text class=\"accS\" x=\"310\" y=\"424\" text-anchor=\"middle\">Recomendada en MG generalizada seropositiva AChR entre 18 y 60 años</text>\n  <path class=\"ln\" d=\"M310,436 V458\"/>\n  <rect class=\"warn\" x=\"100\" y=\"458\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"473\" text-anchor=\"middle\" font-weight=\"700\">¡REGLA DE ORO DE SEGURIDAD: FÁRMACOS PROHIBIDOS EN MIASTENIA!</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"485\" text-anchor=\"middle\">Contraindicados aminoglucósidos, fluoroquinolonas,</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"496\" text-anchor=\"middle\">betabloqueadores, sales de magnesio EV y relajantes musculares</text>\n</svg>"
  },
  "contexto": "La Miastenia Gravis (MG) es una enfermedad autoinmune crónica mediada por anticuerpos contra componentes de la membrana postsináptica de la placa motora, predominantemente contra el receptor nicotínico de acetilcolina (AChR, 85% de los casos generalizados) y la tirosina quinasa específica del músculo (MuSK). Su sello clínico patognomónico es la debilidad muscular fluctuante caracterizada por fatigabilidad: la fuerza empeora con el ejercicio repetido o al final del día y mejora sustancialmente tras el reposo o la aplicación local de frío. Afecta típicamente la musculatura ocular extrínseca (ptosis y diplopía con preservación rigurosa de los reflejos pupilares), la musculatura bulbar (disfagia, disartria, voz nasal) y la musculatura proximal de extremidades. La complicación más grave es la Crisis Miasténica (falla ventilatoria por debilidad diafragmática), desencadenada frecuentemente por infecciones o fármacos que bloquean la transmisión neuromuscular. El timo desempeña un papel patogénico central: 65% presenta hiperplasia tímica y 10-15% un timoma (obligando a solicitar TAC de tórax). El tratamiento escalonado incluye inhibidores de la acetilcolinesterasa (piridostigmina), inmunosupresores, timectomía y plasmaféresis o inmunoglobulina EV en las crisis.",
  "contentSections": [
    {
      "subhead": "1. Fisiopatología de la Unión Neuromuscular y Perfil de Autoanticuerpos",
      "paragraphs": [
        "En condiciones fisiológicas normales, el potencial de acción presináptico abre canales de calcio dependientes de voltaje, desencadenando la exocitosis cuántica de acetilcolina (ACh) hacia la hendidura sináptica. La ACh se une a los receptores nicotínicos postsinápticos (AChR), provocando la apertura de canales de sodio y un potencial de placa terminal que supera el umbral para despolarizar el sarcolema (<em>factor de seguridad de la transmisión neuromuscular</em>).",
        "En la Miastenia Gravis se produce una respuesta autoinmune aberrante dependiente de linfocitos T y B con producción de <strong>autoanticuerpos patógenos dirigidos contra la membrana postsináptica</strong>:",
        "• <strong>Anticuerpos anti-Receptor de Acetilcolina (anti-AChR):</strong> Presentes en el 85% de las formas generalizadas y en el 50% de las formas oculares puras. Pertenecen a las subclases IgG1 e IgG3 y actúan mediante tres mecanismos lesionales: 1) Activación del complemento con formación del complejo de ataque a la membrana (MAC), que destruye los pliegues postsinápticos y ensancha la hendidura; 2) Endocitosis acelerada y degradación lisosomal de los receptores (modulación antigénica); y 3) Bloqueo estéreo de los sitios de unión de la acetilcolina. El resultado es una disminución drástica del número de receptores funcionales; tras contracciones repetidas, la cantidad de ACh liberada decae naturalmente, cayendo por debajo del factor de seguridad y generando el fenómeno clínico de <strong>fatigabilidad muscular progresiva</strong>.",
        "• <strong>Anticuerpos anti-Tirosina Quinasa Específica del Músculo (anti-MuSK):</strong> Presentes en un 30-40% de los pacientes seronegativos para anti-AChR. Suelen ser mujeres jóvenes con compromiso bulbar y respiratorio predominante, debilidad facial y de cuello muy severa, atrofia lingual y marcada refractariedad o empeoramiento clínico con anticolinesterásicos habituales (piridostigmina). Responden excepcionalmente bien a Rituximab.",
        "• <strong>Anticuerpos anti-LRP4:</strong> Presentes en una fracción de pacientes seronegativos dobles (anti-AChR y anti-MuSK negativos)."
      ]
    },
    {
      "subhead": "2. Manifestaciones Clínicas, Examen Físico y Pruebas Diagnósticas a Pie de Cama",
      "paragraphs": [
        "La presentación clínica exhibe una distribución bimodal: un primer pico en mujeres jóvenes de 20 a 40 años (frecuentemente asociado a hiperplasia tímica y otros trastornos autoinmunes como tiroiditis de Hashimoto) y un segundo pico en hombres mayores de 50 a 60 años (asociado con mayor frecuencia a timoma y seropositividad anti-AChR) (véase Algoritmo 10.17).",
        "<strong>Rasgos clínicos cardinales:</strong>",
        "• <strong>Compromiso Ocular Inicial (50-60% de los debuts, > 85% a lo largo de la enfermedad):</strong> <strong>Ptosis palpebral unilateral o bilateral asimétrica</strong> y <strong>diplopía binocular</strong> que no sigue el territorio de un solo par craneal. <em>Regla de Oro Inviolable del EUNACOM:</em> En la Miastenia Gravis la musculatura intrínseca del ojo está rigurosamente INDEMNE: <strong>las pupilas son de tamaño normal, simétricas y reactivas a la luz en el 100% de los casos</strong>. La presencia de midriasis o arreflexia pupilar descarta miastenia y obliga a sospechar síndrome de compresión del III par por aneurisma de arteria comunicante posterior, botulismo o síndrome de Miller Fisher.",
        "• <strong>Compromiso Bulbar:</strong> Disartria con voz nasal progresiva (fatiga del velo del paladar al hablar prolongadamente), disfagia a sólidos y líquidos, y fatiga masticatoria (incapacidad para terminar de masticar un pedazo de carne, requiriendo sostener la mandíbula con la mano).",
        "• <strong>Debilidad en Extremidades:</strong> De predominio proximal y simétrico (afecta deltoides, flexores de cadera y flexores del cuello: \"cabeza caída\"), con preservación habitual de la fuerza distal.",
        "• <strong>Pruebas de Cabecera (Bedside Tests):</strong>",
        "1) <strong>Test del Hielo (Ice Pack Test):</strong> Se coloca una bolsa de hielo sobre el párpado caído durante 2 a 3 minutos. La inhibición térmica de la acetilcolinesterasa endógena incrementa la concentración de ACh en la hendidura sináptica. El test es positivo si la hendidura palpebral mejora en <strong>≥ 2 mm</strong> (sensibilidad 80-90% en ptosis miasténica).",
        "2) <strong>Prueba de Fatigabilidad (Test de Simpson):</strong> Se solicita al paciente mantener la mirada hacia arriba fija durante 60 segundos; la ptosis palpebral se hace evidente o empeora notablemente de forma progresiva."
      ]
    },
    {
      "subhead": "3. Diagnóstico Paraclínico: Serología, Electrofisiología y Neuroimagen Mediastínica",
      "paragraphs": [
        "El protocolo diagnóstico formal contempla los siguientes estudios paraclínicos (véase Tabla 10.17.1):",
        "• <strong>Determinación de Autoanticuerpos:</strong> La cuantificación sérica de <strong>anti-AChR</strong> es la prueba de confirmación de mayor especificidad (> 98%). Si resulta negativa en un cuadro sugestivo generalizado, se solicita <strong>anti-MuSK</strong>.",
        "• <strong>Electromiografía con Estimulación Nerviosa Repetitiva (ENR a 3 Hz):</strong> Consiste en aplicar estímulos supramáximos de baja frecuencia (2 a 3 Hz) sobre nervios motores (accesorio espinal, facial, radial). Se considera positiva si se observa un <strong>decremento progresivo mayor al 10% en la amplitud del potencial de acción muscular compuesto (CMAP)</strong> entre el primer y el cuarto o quinto potencial (patrón decremental por agotamiento sináptico).",
        "• <strong>Electromiografía de Fibra Aislada (Single-Fiber EMG):</strong> Es la prueba electrodiagnóstica de <strong>mayor sensibilidad (> 95-99%)</strong>. Demuestra un aumento marcado del <em>jitter</em> (variabilidad temporal en la transmisión neuromuscular entre dos fibras del mismo axón) y bloqueos de impulsos. Se reserva para casos seronegativos o con sospecha clínica pura en que la estimulación repetitiva convencional resulta normal.",
        "• <strong>TAC de Tórax con y sin Contraste (Obligatorio en todo paciente con MG):</strong> Indicado para evaluar la anatomía del timo. Un <strong>10 a 15% de los pacientes presenta un Timoma</strong> (neoplasia epitelial tímica, habitualmente benigna o de invasión local) y un 65 a 70% presenta <strong>hiperplasia folicular linfoide tímica</strong> activa."
      ]
    },
    {
      "subhead": "4. Fármacos Contraindicados y Factores Desencadenantes de Crisis Miasténica",
      "paragraphs": [
        "La prescripción errónea de fármacos que interfieren con la transmisión sináptica neuromuscular es una causa prevalente de agravamiento catastrófico y desencadenamiento de crisis miasténica en la práctica médica (véase Tabla 10.17.2: Fármacos Contraindicados en Miastenia Gravis).",
        "<strong>Fármacos absolutamente contraindicados o que exigen extrema precaución:</strong>",
        "• <strong>Antibióticos:</strong> <strong>Aminoglucósidos</strong> (Gentamicina, Amikacina, Tobramicina) bloquean competitivamente los canales de calcio presinápticos reduciendo la liberación de acetilcolina; <strong>Fluoroquinolonas</strong> (Ciprofloxacino, Levofloxacino, Moxifloxacino) cuentan con una advertencia de caja negra (<em>Black Box Warning</em>) de la FDA por exacerbaciones graves y parálisis respiratoria en MG; <strong>Macrólidos</strong> (Azitromicina, Claritromicina) y <strong>Clindamicina</strong> interfieren con la liberación presináptica.",
        "• <strong>Cardiovasculares:</strong> <strong>Betabloqueadores</strong> (Propranolol, Atenolol, Labetalol) agravan la debilidad muscular; <strong>Calcioantagonistas</strong> (Verapamilo, Diltiazem); y antiarrítmicos como <strong>Procainamida</strong> y <strong>Quinidina</strong>.",
        "• <strong>Electrolitos y Relajantes:</strong> <strong>Sulfato de Magnesio endovenoso</strong> (el magnesio inhibe potentemente la liberación de acetilcolina, pudiendo causar paro respiratorio fulminante en miasténicos; ¡absolutamente proscrito en eclampsia con MG concomitante!); <strong>Relajantes musculares no despolarizantes</strong> (Rocuronio, Vecuronio: los pacientes presentan hipersensibilidad extrema y prolongación del bloqueo, requiriendo 1/10 de la dosis habitual); y <strong>Succinilcolina</strong> (respuesta errática).",
        "• <strong>Inhibidores de Checkpoint Inmunológico (ICIs):</strong> Fármacos oncológicos modernos (Pembrolizumab, Nivolumab, Ipilimumab) pueden desencadenar miastenia gravis de novo hiperaguda y miocarditis necrotizante con mortalidad superior al 30%."
      ]
    },
    {
      "subhead": "5. Protocolo Terapéutico Escalonado, Timectomía y Manejo de Crisis Miasténica",
      "paragraphs": [
        "El tratamiento de la Miastenia Gravis se estructura en fases sinérgicas (véase Tabla 10.17.3: Protocolo Terapéutico Escalonado y Manejo de Crisis):",
        "• <strong>1. Tratamiento Sintomático de Primera Línea:</strong> <strong>Bromuro de Piridostigmina oral</strong>, inhibidor reversible de la acetilcolinesterasa. Dosis inicial: <strong>30 a 60 mg vía oral cada 4 a 6 horas</strong> (dosis máxima habitual: 360 mg/día). Su efecto inicia a los 15-30 minutos y dura 3 a 4 horas. Los efectos adversos colinérgicos muscarínicos (cólicos abdominales, diarrea líquida, sialorrea, diaforesis, broncorrea) pueden manejarse coadministrando dosis bajas de anticolinérgicos como propantelina o atropina.",
        "• <strong>2. Inmunosupresión Sistémica:</strong> Indicada si persisten síntomas incapacitantes a pesar de dosis optimizadas de piridostigmina. <strong>Prednisona oral</strong>: se inicia a dosis bajas (10 a 20 mg/día) y se escala gradualmente hasta 0.75-1 mg/kg/día para evitar el <em>efecto dip</em> (exacerbación paradójica transitoria de la debilidad que puede ocurrir en los primeros 7-10 días tras bolos altos de esteroides). Como ahorradores de corticoides a largo plazo se utilizan <strong>Azatioprina</strong> (2 a 3 mg/kg/día) o <strong>Micofenolato Mofetilo</strong> (1 a 2 g/día).",
        "• <strong>3. Timectomía Quirúrgica:</strong>",
        "  - <em>Indicación absoluta e imperativa:</em> Presencia de <strong>Timoma comprobado por imagen</strong>, con el objetivo primordial de erradicar la neoplasia y prevenir la invasión pleural/pericárdica local.",
        "  - <em>Indicación modificadora de enfermedad (Estudio MGTX):</em> Pacientes no timomatosos de <strong>18 a 60-65 años con Miastenia Gravis generalizada y seropositividad anti-AChR</strong>. La timectomía extendida incrementa sustancialmente la tasa de remisión clínica completa y reduce a largo plazo la necesidad de corticoides y hospitalizaciones.",
        "• <strong>4. Manejo de la Crisis Miasténica en UPC:</strong> Definida por insuficiencia respiratoria aguda que requiere ventilación mecánica o disfagia severa que impide la nutrición y pone en riesgo la vía aérea. Requiere <strong>intubación orotraqueal electiva precoz</strong> en UPC, monitorización de CVF y PImáx, y tratamiento inmunomodulador rápido con <strong>Plasmaféresis (5 sesiones en 10 días)</strong> o <strong>Inmunoglobulina Humana EV (2 g/kg administrados en 2 a 5 días)</strong>. <em>Perla de Cuidado Intensivo:</em> Durante la intubación mecánica se suspende transitoriamente la piridostigmina para evitar la hipersecreción bronquial mucosa inmanejable que obstruye el tubo endotraqueal."
      ]
    }
  ],
  "table": {
    "title": "Diagnóstico Clínico, Pruebas de Cabecera y Métodos Paraclínicos en Miastenia Gravis",
    "headers": [
      "Método / Prueba Diagnóstica",
      "Fundamento Fisiopatológico",
      "Sensibilidad / Especificidad",
      "Utilidad y Consideraciones Clínicas"
    ],
    "rows": [
      [
        "Fatigabilidad Clínica (Semiología)",
        "Agotamiento del pool presináptico de ACh que desciende bajo el umbral de activación postsináptico",
        "Sensibilidad ~85% / Muy específica si es fluctuante",
        "Debilidad que empeora al final de la tarde o tras uso muscular repetido y revierte tras reposo; pupilas estrictamente normales"
      ],
      [
        "Test del Hielo (Ice Pack Test)",
        "El frío inhibe localmente la enzima acetilcolinesterasa aumentando la concentración de ACh",
        "Sensibilidad 80-90% / Especificidad > 95%",
        "Mejora de la hendidura palpebral en ≥ 2 mm tras 2-3 min de aplicación de hielo sobre el párpado; simple, rápida e inocua a pie de cama"
      ],
      [
        "Anticuerpos anti-AChR",
        "Anticuerpos IgG dirigidos contra el receptor nicotínico postsináptico activadores de complemento",
        "Sensibilidad 85% en generalizada (50% en ocular) / Espec. > 98%",
        "Marcador de confirmación definitivo; no se correlaciona necesariamente con la severidad exacta de los síntomas"
      ],
      [
        "Anticuerpos anti-MuSK",
        "Anticuerpos contra tirosina quinasa muscular esencial para el clustering de receptores AChR",
        "Presentes en 35-40% de pacientes con anti-AChR negativos",
        "Fenotipo clínico con predominio bulbar severo, disartria, disfagia, debilidad facial y atrofia lingual; respuesta excelente a Rituximab"
      ],
      [
        "Estimulación Repetitiva (ENR 3 Hz)",
        "Caída progresiva del potencial de acción muscular compuesto por falla en fibras agotadas",
        "Sensibilidad 75% en generalizada (menor en ocular)",
        "Patrón patológico de decremento > 10% entre el 1° y 4°-5° potencial del CMAP; altamente orientador"
      ],
      [
        "EMG de Fibra Aislada (Single-Fiber)",
        "Medición de la variabilidad temporal entre dos fibras inervadas por la misma unidad motora",
        "Sensibilidad > 95-99% (la prueba más sensible disponible)",
        "Gold standard neurofisiológico; demuestra aumento del jitter y bloqueo de potenciales; altamente técnico"
      ],
      [
        "TAC de Tórax con Contraste",
        "Visualización de masas mediastínicas anteriores en el espacio retroesternal",
        "Sensibilidad > 95% para timoma",
        "Obligatorio en el 100% de los pacientes diagnosticados de MG; pesquisa timoma en 10-15% e hiperplasia tímica en 70%"
      ]
    ]
  },
  "severityTable": {
    "title": "Fármacos Formalmente Contraindicados o de Riesgo Crítico en Miastenia Gravis",
    "headers": [
      "Grupo Farmacológico",
      "Fármacos Específicos Prohibidos",
      "Mecanismo de Interferencia Neuromuscular",
      "Conducta y Alternativas Seguras"
    ],
    "rows": [
      [
        "Antibióticos Aminoglucósidos",
        "Gentamicina, Amikacina, Tobramicina, Estreptomicina",
        "Bloqueo presináptico de canales de calcio dependientes de voltaje; inhiben liberación de ACh",
        "ESTRICTAMENTE CONTRAINDICADOS; utilizar cefalosporinas, carbapenémicos o betalactámicos"
      ],
      [
        "Antibióticos Fluoroquinolonas",
        "Ciprofloxacino, Levofloxacino, Moxifloxacino",
        "Bloqueo postsináptico neuromuscular directo; advertencia de caja negra (Black Box Warning)",
        "CONTRAINDICADAS; si requiere terapia entérica o urinaria, preferir Ceftriaxona o Cotrimoxazol"
      ],
      [
        "Otros Antibacterianos",
        "Macrólidos (Azitromicina, Claritromicina), Clindamicina",
        "Disminuyen la liberación presináptica de acetilcolina e inducen parálisis respiratoria",
        "Usar con extrema cautela o sustituir por penicilinas / betalactámicos alternativos"
      ],
      [
        "Antiarrítmicos y Betabloqueadores",
        "Propranolol, Atenolol, Labetalol, Procainamida, Quinidina",
        "Disminuyen excitabilidad de placa motora y bloquean canales iónicos sarcolémicos",
        "Evitar betabloqueadores; para taquicardia o HTA preferir IECA/ARA-II o hidralazina"
      ],
      [
        "Sales de Magnesio Endovenosas",
        "Sulfato de Magnesio EV (usado en eclampsia o asma)",
        "Antagonismo directo de calcio en terminal presináptica; inhibe exocitosis de vesículas de ACh",
        "¡POTENCIALMENTE MORTAL!: induce paro respiratorio fulminante; contraindicado en eclampsia miasténica"
      ],
      [
        "Relajantes Musculares en Anestesia",
        "Curarizantes no despolarizantes (Rocuronio, Vecuronio)",
        "Ocupación competitiva de los escasos receptores AChR residuales con parálisis extrema prolongada",
        "Reducir dosis a 1/10 del estándar con monitorización estricta por TOF (tren de cuatro) y revertir con Sugammadex"
      ],
      [
        "Inmunooncología (ICIs)",
        "Pembrolizumab, Nivolumab, Ipilimumab, Atezolizumab",
        "Desinhibición masiva de linfocitos autorreactivos contra antígenos de placa motora y miocardio",
        "Generan Miastenia Fulminante y Miocarditis autoinmune letal; suspender de inmediato e iniciar pulsos de corticoides"
      ]
    ]
  },
  "treatmentTable": {
    "title": "Protocolo Farmacológico Escalonado, Timectomía y Manejo de Crisis Miasténica",
    "headers": [
      "Línea Terapéutica",
      "Fármaco / Intervención",
      "Dosis / Posología Estándar",
      "Metas Clínicas y Efectos Secundarios"
    ],
    "rows": [
      [
        "1ª Línea Sintomática",
        "Bromuro de Piridostigmina",
        "60 mg oral cada 4 a 6 horas (rango: 30 a 90 mg c/4-6 h; máx 360 mg/día)",
        "Inicio a 15-30 min; alivia ptosis y debilidad; efectos colinérgicos (diarrea, cólicos) manejables con atropina"
      ],
      [
        "2ª Línea Inmunosupresora",
        "Prednisona oral",
        "Inicio escalonado 10-20 mg/día, aumentar c/3 días hasta 0.75-1 mg/kg/día",
        "Prevenir el \"dip\" o empeoramiento paradójico precoz; desescalar lentamente tras alcanzar control clínico"
      ],
      [
        "Ahorrador de Esteroides",
        "Azatioprina oral",
        "2 a 3 mg/kg/día vía oral (previa medición de enzima TPMT)",
        "Latencia de inicio prolongada (6 a 12 meses); monitorizar hemograma (leucopenia) y transaminasas hepáticas"
      ],
      [
        "Ahorrador Alternativo",
        "Micofenolato Mofetilo",
        "1000 mg oral cada 12 horas (total 2 g/día)",
        "Latencia de respuesta de 2 a 6 meses; excelente tolerancia gastrointestinal; teratogénico"
      ],
      [
        "Cirugía Modificadora",
        "Timectomía por toracoscopía / esternotomía",
        "Resección completa de tejido tímico y grasa mediastínica anterior",
        "Obligatoria en Timoma; recomendada en MG generalizada seropositiva AChR (18-60 años) para inducir remisión"
      ],
      [
        "Crisis Miasténica (Rescate)",
        "Inmunoglobulina Humana EV",
        "0.4 g/kg/día por 5 días o 1 g/kg/día por 2 días (dosis total: 2.0 g/kg)",
        "Manejo en UCI con IOT electiva; suspender temporalmente piridostigmina para evitar exceso de secreciones"
      ],
      [
        "Crisis Miasténica (Alternativa)",
        "Plasmaféresis Terapéutica",
        "5 sesiones de recambio plasmático en días alternos durante 10 días",
        "Remoción física rápida de autoanticuerpos circulantes; igual de efectiva que IgEV; requiere catéter central rígido"
      ]
    ]
  },
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 29 años, cajera de supermercado, consulta por visión doble y caída de párpados de 3 semanas de evolución. Refiere que por las mañanas amanece prácticamente asintomática, pero conforme avanza su jornada laboral nota que se le cae el párpado izquierdo y que al mirar hacia los lados ve doble (diplopía binocular). Además, comenta que en los últimos días le cuesta terminar de almorzar porque se le cansan los músculos de la mandíbula al masticar carnes y nota su voz \"apagada y gangosa\" al final del día. Al examen físico se aprecia ptosis palpebral bilateral de predominio izquierdo y un leve estrabismo divergente con limitación fluctuante de la aducción ocular. Ambas pupilas son redondas, isocóricas y reactivas a la luz de forma bilateral. El test del hielo sobre el párpado izquierdo durante 2 minutos produce una elevación nítida de 3.5 mm de la hendidura palpebral. Los reflejos osteotendinosos están normales (2/4+) y simétricos, y la sensibilidad táctil está conservada.",
    "conducta": "El cuadro clínico de ptosis y diplopía con fatigabilidad vespertina, cansancio masticatorio y disartria fluctuante, sumado a un test del hielo intensamente positivo y pupilas estrictamente normales e isorreactivas, es patognomónico de Miastenia Gravis de inicio ocular con generalización precoz. La normalidad pupilar es la perla semiológica angular para descartar compresión del III par por aneurisma o mononeuropatía diabética. La conducta de confirmación requiere solicitar anticuerpos séricos anti-AChR (y anti-MuSK si resultan negativos), electromiografía con estimulación nerviosa repetitiva (búsqueda de decremento > 10%) y TAC de tórax con contraste para descartar timoma subyacente. El tratamiento farmacológico sintomático de primera línea se inicia de inmediato con Bromuro de Piridostigmina 60 mg cada 4 a 6 horas vía oral, recordando advertir a la paciente que tiene estrictamente prohibido recibir antibióticos como gentamicina o ciprofloxacino por riesgo de claudicación respiratoria miasténica."
  },
  "explicacion": "El cuadro clínico de ptosis y diplopía con fatigabilidad vespertina, cansancio masticatorio y disartria fluctuante, sumado a un test del hielo intensamente positivo y pupilas estrictamente normales e isorreactivas, es patognomónico de Miastenia Gravis de inicio ocular con generalización precoz. La normalidad pupilar es la perla semiológica angular para descartar compresión del III par por aneurisma o mononeuropatía diabética. La conducta de confirmación requiere solicitar anticuerpos séricos anti-AChR (y anti-MuSK si resultan negativos), electromiografía con estimulación nerviosa repetitiva (búsqueda de decremento > 10%) y TAC de tórax con contraste para descartar timoma subyacente. El tratamiento farmacológico sintomático de primera línea se inicia de inmediato con Bromuro de Piridostigmina 60 mg cada 4 a 6 horas vía oral, recordando advertir a la paciente que tiene estrictamente prohibido recibir antibióticos como gentamicina o ciprofloxacino por riesgo de claudicación respiratoria miasténica.",
  "keyPoints": [
    "La Miastenia Gravis es un trastorno autoinmune postsináptico caracterizado por debilidad muscular fluctuante y fatigabilidad (empeora con el uso repetido y mejora con reposo).",
    "Signo semiológico de oro en examen físico: las pupilas son SIEMPRE normales y reactivas a la luz (la musculatura pupilar intrínseca nunca se compromete en miastenia).",
    "El test del hielo (ice pack test) a pie de cama mejora la ptosis palpebral en ≥ 2 mm tras 2 minutos debido a la inhibición térmica de la acetilcolinesterasa.",
    "El estudio diagnóstico confirmatorio requiere anticuerpos anti-AChR (positivos en 85%), anti-MuSK en seronegativos, EMG con decremento > 10% a 3 Hz y TAC de tórax para despistaje de timoma.",
    "Fármacos absolutamente contraindicados que desencadenan crisis miasténica: aminoglucósidos, fluoroquinolonas, betabloqueadores, sulfato de magnesio EV y relajantes musculares curarizantes.",
    "El tratamiento crónico se basa en piridostigmina oral (60 mg c/4-6 h), corticoides e inmunosupresores; la timectomía es obligatoria en timoma y recomendada en MG generalizada anti-AChR (+)."
  ],
  "questions": [
    {
      "stem": "Lo más característico de la miastenia gravis es:",
      "options": [
        {
          "id": "A",
          "text": "Debilidad de instalación súbita de un hemicuerpo"
        },
        {
          "id": "B",
          "text": "Debilidad proximal, asociada a elevación de la creatinfosfoquinasa (CK)"
        },
        {
          "id": "C",
          "text": "Debilidad distal asimétrica que mejora con el ejercicio"
        },
        {
          "id": "D",
          "text": "Debilidad proximal y distal simétricas, sin compromiso ocular"
        },
        {
          "id": "E",
          "text": "Astenia y debilidad muscular de curso fluctuante"
        }
      ],
      "correcta": "E",
      "explicacion": "La respuesta correcta es la e) Astenia y debilidad muscular de curso fluctuante. La miastenia gravis se caracteriza por debilidad muscular que empeora con la actividad y mejora con el reposo. Esta fluctuación es un sello distintivo de la enfermedad. La astenia, o sensación de fatiga, es un síntoma común. La debilidad afecta a menudo los músculos que controlan los ojos (ptosis, diplopía), la masticación, la deglución y las extremidades, pero la presentación varía considerablemente entre los pacientes. La fluctuación en la gravedad de los síntomas es clave para el diagnóstico y el manejo.\n\nLa miastenia gravis es una enfermedad autoinmune que afecta la unión neuromuscular. Los anticuerpos atacan a los receptores de acetilcolina en la placa motora, interfiriendo con la transmisión de impulsos nerviosos a los músculos. Esto causa debilidad muscular que varía a lo largo del día y con la actividad. El diagnóstico se basa en la historia clínica, el examen físico, pruebas farmacológicas (como el test del edrofonio) y pruebas de laboratorio que detectan anticuerpos específicos. El tratamiento incluye medicamentos que mejoran la transmisión neuromuscular, inmunosupresores y, en algunos casos, timectomía.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.020"
    },
    {
      "stem": "Mujer de 33 años, consulta por astenia y diplopía, de 2 semanas de\nevolución, fluctuantes. Al examen se observa ptosis izquierda y ligero\nestrabismo divergente, que ella refiere no haber tenido previamente. El\ndiagnóstico más probable es:",
      "options": [
        {
          "id": "A",
          "text": "Síndrome de Guillan Barré7"
        },
        {
          "id": "B",
          "text": "Miastenia gravis"
        },
        {
          "id": "C",
          "text": "Tumor hipofisiario"
        },
        {
          "id": "D",
          "text": "Encefalopatía de Wernicke"
        },
        {
          "id": "E",
          "text": "Síndrome de Claude Bernard Horner"
        }
      ],
      "correcta": "B",
      "explicacion": "La respuesta correcta es **b) Miastenia gravis**. Este diagnóstico se ajusta perfectamente a la presentación clínica de la paciente. La Miastenia Gravis (MG) es una enfermedad autoinmune crónica que se caracteriza por debilidad muscular fluctuante y fatigabilidad. Afecta predominantemente a mujeres jóvenes, lo que coincide con la edad de la paciente (33 años).\n\nLos síntomas clave en este caso son la astenia (debilidad generalizada o fatiga), la diplopía (visión doble) y la ptosis (caída del párpado), junto con un ligero estrabismo divergente. Todos estos son hallazgos clásicos de la MG, especialmente cuando afectan los músculos oculares (Miastenia Ocular), que es la forma de presentación inicial en aproximadamente el 50-60% de los casos. La característica más distintiva y crucial para el diagnóstico es la **fluctuación** de los síntomas: empeoran con la actividad o al final del día y mejoran con el reposo, lo que la paciente refiere como \"fluctuantes\". La evolución subaguda de 2 semanas es también consistente con el inicio de la enfermedad.\n\nLa patogenia de la Miastenia Gravis implica la formación de autoanticuerpos contra los receptores de acetilcolina en la unión neuromuscular, lo que impide la transmisión eficaz del impulso nervioso a los músculos y provoca la debilidad observada. El compromiso de los músculos extraoculares y de los párpados es muy común, llevando a ptosis y diplopía. La ausencia de antecedentes previos y la aparición de estos síntomas de forma subaguda y fluctuante refuerzan aún más el diagnóstico de Miastenia Gravis.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.020"
    },
    {
      "stem": "Una mujer de 33 años consulta por astenia y debilidad fluctuantes,\nasociadas a diplopía, que se agrava al realizar deporte. El diagnóstico de\nsospecha es:",
      "options": [
        {
          "id": "A",
          "text": "Botulismo"
        },
        {
          "id": "B",
          "text": "Polineuropatía"
        },
        {
          "id": "C",
          "text": "Síndrome de Guillain Barré"
        },
        {
          "id": "D",
          "text": "Miastenia gravis"
        },
        {
          "id": "E",
          "text": "Esclerosis múltiple"
        }
      ],
      "correcta": "D",
      "explicacion": "La miastenia gravis es una enfermedad neuromuscular autoinmune caracterizada por debilidad muscular fluctuante que empeora con la actividad y mejora con el reposo. Los síntomas clásicos incluyen ptosis palpebral (caída del párpado), diplopía (visión doble), dificultad para hablar (disartria), dificultad para tragar (disfagia) y debilidad en las extremidades. El ejercicio exacerba la debilidad debido al agotamiento de los receptores de acetilcolina en la unión neuromuscular. En Chile, el manejo de la miastenia gravis está considerado en las Guías Clínicas del MINSAL, enfocándose en el diagnóstico precoz y tratamiento sintomático e inmunomodulador. La presentación fluctuante de los síntomas, su exacerbación con la actividad física y la presencia de diplopía son altamente sugestivas de miastenia gravis.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.020"
    },
    {
      "stem": "Un hombre de 30 años acude a su consulta por presentar debilidad muscular\ny diplopia fluctuantes, de un mes de evolución, que usted objetiva con la\nexploración física. ¿Cuál de las siguientess NO le parecería oportuno\nsolicitar?:",
      "options": [
        {
          "id": "A",
          "text": "Electromiografía de fibra muscular aislada."
        },
        {
          "id": "B",
          "text": "Electromiografía con estimulación repetitiva."
        },
        {
          "id": "C",
          "text": "Estudio de función autonómica."
        },
        {
          "id": "D",
          "text": "Determinación de anticuerpos anti-receptor de aceticolina."
        },
        {
          "id": "E",
          "text": "TAC torácico."
        }
      ],
      "correcta": "C",
      "explicacion": "La presentación clínica de un hombre de 30 años con debilidad muscular y diplopia fluctuantes, de un mes de evolución y objetivada en la exploración física, es altamente sugestiva de Miastenia Gravis (MG). La Miastenia Gravis es una enfermedad autoinmune que afecta la unión neuromuscular, causando una alteración en la transmisión de impulsos nerviosos a los músculos esqueléticos. La naturaleza \"fluctuante\" de los síntomas, que implica fatigabilidad, es un rasgo distintivo y cardinal de esta condición, haciendo que la sospecha clínica sea muy alta para MG.\n\nEl diagnóstico de Miastenia Gravis se basa en la clínica y se confirma mediante la detección de anticuerpos específicos (principalmente anti-receptor de acetilcolina), estudios electrofisiológicos que demuestren un defecto en la transmisión neuromuscular (como la electromiografía de fibra muscular aislada o la estimulación nerviosa repetitiva) y la búsqueda de patología tímica (mediante TAC torácico). Todas estas pruebas son fundamentales para establecer el diagnóstico, clasificar la enfermedad y guiar el tratamiento adecuado.\n\nPor el contrario, un \"Estudio de función autonómica\" evalúa la función del sistema nervioso autónomo (simpático y parasimpático), que controla funciones corporales involuntarias como la frecuencia cardíaca, la presión arterial, la digestión y la sudoración. La Miastenia Gravis afecta primariamente la musculatura esquelética voluntaria a través del sistema nervioso somático. Si bien en casos muy raros o atípicos, o en presencia de comorbilidades, podría haber alguna disfunción autonómica leve, esta no es una característica principal, esperada ni un componente diagnóstico rutinario o temprano de la Miastenia Gravis típica. Por lo tanto, solicitar un estudio de función autonómica no sería una prueba oportuna en la evaluación inicial de un paciente con esta presentación clínica.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.020"
    }
  ],
  "vignetteText": "Mujer de 29 años, cajera de supermercado, consulta por visión doble y caída de párpados de 3 semanas de evolución. Refiere que por las mañanas amanece prácticamente asintomática, pero conforme avanza su jornada laboral nota que se le cae el párpado izquierdo y que al mirar hacia los lados ve doble (diplopía binocular). Además, comenta que en los últimos días le cuesta terminar de almorzar porque se le cansan los músculos de la mandíbula al masticar carnes y nota su voz \"apagada y gangosa\" al final del día. Al examen físico se aprecia ptosis palpebral bilateral de predominio izquierdo y un leve estrabismo divergente con limitación fluctuante de la aducción ocular. Ambas pupilas son redondas, isocóricas y reactivas a la luz de forma bilateral. El test del hielo sobre el párpado izquierdo durante 2 minutos produce una elevación nítida de 3.5 mm de la hendidura palpebral. Los reflejos osteotendinosos están normales (2/4+) y simétricos, y la sensibilidad táctil está conservada."
}
```

## PREGUNTAS REALES DEL BANCO (4; por código de la clase y por búsqueda "miastenia, fisiopatologia, miastenica")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2024 · Pregunta 74 · confianza 0.95
Una paciente de 38 años, profesora de enseñanza básica, consulta por debilidad y mialgias generalizadas, que iniciaron hace un mes. Además, refiere ptosis a derecha, que suele ser mayor en las tardes. Al examen físico se constata ptosis bilateral, mayor a derecha, con normalidad de los reflejos osteotendíneos y la sensibilidad. ¿Cuál es el diagnóstico más probable?
- A) Esclerosis lateal amiotrófica
- B) Polimiositis
- C) Síndrome de Guillain Barré
- D) Esclerosis múltiple
- E) Miastenia gravis
**Correcta: E**
Explicación del banco: Miastenia Gravis: El caso presentado corresponde a una miastenia gravis clásica. Se recomienda repasar el resumen de semiología neurológica.

### [2] EUNACOM Julio 2019 · Pregunta 85 · confianza 0.55
Un paciente de 38 años consulta por paresia facial bilateral, de una semana de evolución, mayor a izquierda. Además, presenta paresia del sexto bervio craneal izquierdo. Al examen físico tiene disminución generalizada de las fuerzas de las extremidades, con arreflexia e hipotonía. ¿Cuál es el diagnóstico más probable?
- A) Polineuropatía
- B) Síndrome de Guillain Barré
- C) Miastenia gravis
- D) Esclerosis múltiple
- E) Infarto de troncoencéfalo
**Correcta: B**
Explicación del banco: Tiene una tetraparesia flácida y arrefléctica, por lo que tiene un síndrome de Guillain Barré. Es clásica la paresia facial bilateral y puede tener afectación de los oculomotores (aunque ello es más probable en una miastenia gravis, cuya clínica, de todos modos, es distinta a la presentada).

### [3] EUNACOM Diciembre 2017 · Pregunta 57 · confianza 0.35
Un hombre de 58 años presenta un cuadro de 3 años de evolución de debilidad progresiva de las extremidades, que trae problemas para caminar, hasta no poder hacerlo, a lo que luego se agrega dificultad para tragar. Evoluciona finalmente con dificultad respiratoria y necesidad de traqueostomía. No tiene alteración sensitiva. Se solicita espirometría que se muestra a continuación ¿Cuál es el diagnóstico más probable?
- A) Polineuropatía diabética
- B) Distrofia muscular
- C) Esclerosis múltiple
- E) Esclerosis lateral amiotrófica
- E) Hemograma y VHS
**Correcta: E**
Explicación del banco: Diagnóstico: **Esclerosis lateral amiotrófica** (opción **E**). Es una ELA clásica. La espirometría mostraba un patrón restrictivo.. Esta clase aborda los síndromes motores: diferenciación entre primera y segunda motoneurona, miopatías vs neuropatías, miastenias, síndrome de Guillain-Barré y mielitis transversa. Los hallazgos descritos en el caso concuerdan exactamente con esta entidad clínica en el marco del Perfil V3 ASOFAMECh.

### [4] EUNACOM Julio 2017 · Pregunta 15 · confianza 0.3
Un paciente presenta disfonía y disartria, como secuela, luego de haber sufrido un traumatismo enceflaocraneano. Evoluciona posteriormente con múltiples neumonías aspirativas. ¿Cuál es la causa más probable de estas neumonías?
- A) Reflujo gastroesofágico
- B) Estenosis subglótica
- C) Divertículo esofágico
- D) Trastorno de la deglución
- E) Parálisis frénica
**Correcta: D**
Explicación del banco: La alternativa correcta es la **D** (Trastorno de la deglución). Es un trastorno de la deglución clásico, en este caso como secuela de un TEC severo.. Esta clase aborda los síndromes motores: diferenciación entre primera y segunda motoneurona, miopatías vs neuropatías, miastenias, síndrome de Guillain-Barré y mielitis transversa. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).
