# CLASE neuro-13 · Neurologia 10.13: Temblor Esencial vs Parkinsoniano y Distonías Agudas por Neurolépticos

Escribe `classes/lessons/neuro-13.cjs` siguiendo el PAQUETE COMÚN. El `id` es "neuro-13" y el `tier` es 2.

## Clases vecinas del mismo libro (para conectar ideas)
- neuro-10: Neurologia 10.10: Primera Crisis Convulsiva del Adulto y Diagnóstico Diferencial con Síncope: Enfrentamiento, Criterios de Inicio de FAE y Banderas Rojas
- neuro-11: Neurologia 10.11: Enfermedad de Parkinson: Criterios Diagnósticos MDS, Terapia con Levodopa y Fluctuaciones Motoras
- neuro-12: Neurologia 10.12: Parkinsonismos Secundarios, Farmacológicos y Síndromes Parkinson-Plus
- neuro-14: Neurologia 10.14: Enfermedad de Alzheimer y Deterioro Cognitivo Leve
- neuro-15: Neurologia 10.15: Demencia Vascular, Demencia por Cuerpos de Lewy y Demencia Frontotemporal
- neuro-16: Neurologia 10.16: Síndrome de Guillain-Barré: Polirradiculoneuropatía Aguda, Albúmino-citológico y Manejo Intensivo

## CONTENIDO DEL LIBRO (única fuente clínica)
```json
{
  "id": "neuro-13",
  "classId": "neuro-13",
  "tier": 2,
  "blockNum": 3,
  "blockName": "Trastornos del Movimiento y Enfermedades Neurodegenerativas",
  "topicLabel": "10.13",
  "title": "Temblor Esencial vs Parkinsoniano y Distonías Agudas por Neurolépticos",
  "perfilCode": "1.10.1.026",
  "dx": "Específico",
  "tx": "Completo",
  "seg": "Control",
  "ges": "Manejo integral ambulatorio en atención primaria y nivel secundario · Tratamiento farmacológico con betabloqueadores y derivación urgente ante emergencias extrapiramidales agudas.",
  "reconstrucciones": "EUNACOM Julio 2025 (Q#71) · EUNACOM Julio 2023 (Q#105) · EUNACOM Diciembre 2022 (Q#19)",
  "frecuencia": "Alta frecuencia · Comparación clásica de temblores y urgencias extrapiramidales inducidas por fármacos",
  "algoTitle": "Algoritmo de Diagnóstico Diferencial de Temblores y Conducta Urgente en Distonía Aguda",
  "diagram": {
    "title": "Algoritmo de Diagnóstico Diferencial de Temblores y Conducta en Distonía",
    "svg": "<svg viewBox=\"0 0 620 350\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#6d28d9\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}\n    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}\n    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}\n    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}\n  </style>\n  <rect class=\"acc\" x=\"100\" y=\"8\" width=\"420\" height=\"39\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"23\" text-anchor=\"middle\" font-weight=\"700\">Evaluación Semiológica del Trastorno del Movimiento</text>\n  <text class=\"accS\" x=\"310\" y=\"35\" text-anchor=\"middle\">Inspección de manos, cabeza y voz en reposo, mantención de postura y acción intencional</text>\n  <path class=\"ln\" d=\"M310,47 V69\"/>\n  <rect class=\"dec\" x=\"70\" y=\"69\" width=\"480\" height=\"39\" rx=\"3\"/>\n  <text class=\"t t\" x=\"310\" y=\"84\" text-anchor=\"middle\" font-weight=\"700\">¿Momento de Aparición y Características del Temblor?</text>\n  <text class=\"sub\" x=\"310\" y=\"96\" text-anchor=\"middle\">Diferenciación entre activación cinética/postural vs temblor estático de reposo</text>\n  <path class=\"ln\" d=\"M310,108 V138 H158 V148\"/>\n  <path class=\"ln\" d=\"M310,138 H462 V148\"/>\n  <text class=\"lbl\" x=\"158\" y=\"133\" text-anchor=\"middle\">Temblor Postural / Acción (Bilateral Simétrico)</text>\n  <text class=\"lbl\" x=\"462\" y=\"133\" text-anchor=\"middle\">Temblor de Reposo (4-6 Hz Asimétrico)</text>\n  <rect class=\"acc\" x=\"12\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Temblor Esencial (8-12 Hz)</text>\n  <text class=\"accS\" x=\"158\" y=\"175\" text-anchor=\"middle\">Mejora con alcohol · Antecedente familiar</text>\n  <text class=\"accS\" x=\"158\" y=\"186\" text-anchor=\"middle\">Respeta reposo · Tratamiento: Propranolol o Primidona</text>\n  <rect class=\"dec\" x=\"316\" y=\"148\" width=\"292\" height=\"50\" rx=\"3\"/>\n  <text class=\"t t\" x=\"462\" y=\"163\" text-anchor=\"middle\" font-weight=\"700\">Temblor Parkinsoniano</text>\n  <text class=\"sub\" x=\"462\" y=\"175\" text-anchor=\"middle\">Marcha con hipocinesia · Rueda dentada</text>\n  <text class=\"sub\" x=\"462\" y=\"186\" text-anchor=\"middle\">Desaparece con movimiento voluntario · Iniciar L-Dopa</text>\n  <path class=\"ln\" d=\"M158,198 V208 H310 V220\"/>\n  <path class=\"ln\" d=\"M462,198 V208 H310 V220\"/>\n  <rect class=\"crit\" x=\"100\" y=\"220\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"235\" text-anchor=\"middle\" font-weight=\"700\">Urgencia Extrapiramidal: Distonía Aguda por Fármacos</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"247\" text-anchor=\"middle\">Espasmo doloroso cervical (tortícolis), crisis</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"258\" text-anchor=\"middle\">oculógira o trismus tras neuroléptico o metoclopramida</text>\n  <path class=\"ln\" d=\"M310,270 V292\"/>\n  <rect class=\"acc\" x=\"100\" y=\"292\" width=\"420\" height=\"50\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"310\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Tratamiento de Elección Inmediato en Distonía Aguda</text>\n  <text class=\"accS\" x=\"310\" y=\"319\" text-anchor=\"middle\">Biperideno 2.5 a 5 mg IM o EV lento (anticolinérgico)</text>\n  <text class=\"accS\" x=\"310\" y=\"330\" text-anchor=\"middle\">Respuesta en 10-15 min · Mantener VO x 48 h</text>\n</svg>"
  },
  "contexto": "El temblor es el movimiento involuntario rítmico oscilatorio más frecuente en la práctica médica. El desafío primordial para el médico general radica en diferenciar con precisión el Temblor Esencial (el trastorno del movimiento más prevalente a nivel global, caracterizado por ser postural y cinético, bilateral, familiar y con respuesta al alcohol) del Temblor Parkinsoniano (estático de reposo, asimétrico, con bradicinesia y rigidez). Paralelamente, las Distonías Agudas Inducidas por Fármacos representan una urgencia neurológica extrapiramidal de consulta habitual en los servicios de urgencia, originadas por el bloqueo dopaminérgico agudo tras antieméticos (Metoclopramida) o neurolépticos (Haloperidol), cuyo diagnóstico inmediato y tratamiento específico con anticolinérgicos centrales (Biperideno) son preguntas obligatorias del EUNACOM.",
  "contentSections": [
    {
      "subhead": "1. Semiología Diferencial del Temblor: Reposo vs Acción Postural vs Intención Cinética",
      "paragraphs": [
        "La aproximación diagnóstica al temblor se fundamenta en determinar la <strong>condición de activación motora</strong> en la que se manifiesta (véase Figura 10.13: Algoritmo de Diagnóstico Diferencial de Temblores y Conducta en Distonía):",
        "• <strong>Temblor de Reposo:</strong> Ocurre cuando la musculatura del segmento corporal se encuentra totalmente relajada y apoyada contra la gravedad (por ejemplo, manos sobre el regazo). Frecuencia: <strong>4 a 6 Hz</strong>. Característico de la <strong>Enfermedad de Parkinson</strong>; desaparece transitoriamente con el inicio del movimiento intencional activo.",
        "• <strong>Temblor de Acción - Postural:</strong> Se desencadena al mantener voluntariamente una postura antigravitatoria (por ejemplo, extender los brazos al frente con las manos abiertas). Típico del <strong>Temblor Esencial</strong> y del temblor fisiológico exacerbado.",
        "• <strong>Temblor de Acción - Cinético / Intencional:</strong> Aparece durante cualquier movimiento voluntario guiado por una meta, intensificándose dramáticamente al aproximarse al blanco (\"dismetría con temblor de intención\" en la prueba índice-nariz). Es el sello de la <strong>patología cerebelosa</strong> (esclerosis múltiple, infartos cerebelosos, intoxicación por fenitoína o alcohol)."
      ]
    },
    {
      "subhead": "2. Temblor Esencial: Fisiopatología, Genética y Protocolo Terapéutico Escalonado",
      "paragraphs": [
        "El <strong>Temblor Esencial (TE)</strong> es el trastorno del movimiento más común del ser humano (prevalencia de hasta 4-5% en mayores de 65 años). Posee un claro patrón de <strong>herencia autosómica dominante con penetrancia variable</strong> en más del 50-60% de los pacientes (\"temblor familiar esencial\"). Fisiopatológicamente se atribuye a una oscilación rítmica anómala en el circuito córtico-olivo-cerebelo-talámico.",
        "<strong>Rasgos clínicos cardinales:</strong>",
        "• Temblor <strong>postural y cinético bilateral</strong> de extremidades superiores, típicamente simétrico o discretamente asimétrico, con frecuencia de <strong>8 a 12 Hz</strong> (disminuye en frecuencia y aumenta en amplitud con la edad).",
        "• Dificulta actividades cotidianas de motricidad fina: comer sopa con cuchara, beber agua de un vaso lleno sin derramar, abotonarse o escribir (grafismo con líneas espiculadas y temblorosas en la <em>Espiral de Arquímedes</em>).",
        "• Frecuente afectación de la <strong>cabeza (titubeo cefálico \"no-no\" o \"sí-sí\")</strong> y de la laringe (voz trémula/temblorosa). <em>Regla de Oro:</em> El Temblor Esencial <strong>NO afecta las piernas en reposo</strong> (si tiembla una pierna en reposo, es Parkinson).",
        "• <strong>Respuesta paradójica al etanol:</strong> La ingesta de cantidades moderadas de alcohol (una copa de vino) produce una mejoría transitoria notable del temblor en más del 65-75% de los pacientes (marcador clínico diagnóstico de gran valor anamnésico).",
        "• <strong>Examen neurológico rigurosamente normal:</strong> No existe bradicinesia, no hay rigidez en rueda dentada, los reflejos osteotendinosos son normales y la marcha es estable.",
        "<strong>Tratamiento farmacológico de primera línea:</strong>",
        "1) <strong>Propranolol:</strong> Betabloqueador no selectivo que actúa bloqueando receptores beta-2 periféricos en los husos neuromusculares. Dosis: 40 a 160 mg/día fraccionado en 2-3 tomas (contraindicado en asma bronquial, bloqueo AV y bradicardia severa).",
        "2) <strong>Primidona:</strong> Anticonvulsivante barbitúrico. Dosis: 25 a 250 mg/noche (titular lentamente por riesgo de sedación y mareos). Ambas opciones reducen la amplitud del temblor en un 50-70% (véase Tabla 10.13: Diagnóstico Diferencial de Temblor Esencial, Parkinsoniano y Emergencias Extrapiramidales)."
      ]
    },
    {
      "subhead": "3. Diagnóstico Diferencial con Temblor Fisiológico Exagerado y Temblor Parkinsoniano",
      "paragraphs": [
        "• <strong>Temblor Fisiológico Exagerado:</strong> Temblor postural fino de alta frecuencia (10 a 12 Hz), transitorio y reversible, secundario a hiperactividad adrenérgica. Causas: ansiedad aguda, consumo de cafeína, <strong>hipertiroidismo</strong> (descartar con TSH), abstinencia alcohólica, o fármacos beta-agonistas (salbutamol), litio, ácido valproico, corticoides o antidepresivos tricíclicos.",
        "• <strong>Diferenciación TE vs Enfermedad de Parkinson:</strong> En la EP, el temblor es de <strong>reposo, asimétrico, cede con el movimiento voluntario</strong> y se asocia invariablemente a bradicinesia, hipomimia y rueda dentada; en el TE, el temblor es de <strong>acción/postural, bilateral simétrico, no cede con el movimiento</strong>, afecta con frecuencia la cabeza y no presenta bradicinesia ni rigidez."
      ]
    },
    {
      "subhead": "4. Distonías Agudas por Bloqueo Dopaminérgico: Crisis Oculógira, Tortícolis y Manejo con Biperideno",
      "paragraphs": [
        "Las <strong>Distonías Agudas Inducidas por Fármacos</strong> son contracciones musculares tónicas involuntarias, sostenidas y sumamente dolorosas que ocurren de manera aguda (habitualmente dentro de las primeras 24 a 48 horas, o incluso minutos) tras la administración de un fármaco con acción antagonista de receptores de dopamina D2.",
        "• <strong>Fisiopatología:</strong> El bloqueo agudo masivo de receptores D2 en el cuerpo estriado provoca una desinhibición colinérgica relativa con <strong>hiperactividad de la neurotransmisión muscarínica de acetilcolina</strong>.",
        "• <strong>Fármacos gatillantes típicos en urgencias:</strong> <strong>Metoclopramida endovenosa</strong> (situación clásica EUNACOM: paciente joven que consulta por náuseas o vómitos tras transgresión alimentaria o cólico biliar y recibe metoclopramida EV), <strong>Haloperidol</strong>, Clorpromazina y antipsicóticos atípicos en dosis crecientes.",
        "• <strong>Presentaciones clínicas cardinales:</strong>",
        "1) <strong>Crisis Oculógira:</strong> Desviación forzada, espástica y conjugada de la mirada hacia arriba y afuera sostenida en el tiempo.",
        "2) <strong>Tortícolis aguda / Retrocollis espasmódico:</strong> Contracción dolorosa e intensa del músculo esternocleidomastoideo con rotación forzada del cuello.",
        "3) <strong>Distonía oromandibular y lingual:</strong> Protrusión forzada involuntaria de la lengua (con disartria y riesgo de compromiso de vía aérea), trismus o muecas faciales grotescas.",
        "4) <strong>Opistótonos:</strong> Hiperextensión espástica de la columna vertebral.",
        "• <strong>Tratamiento de Elección Inmediato (Regla de Oro EUNACOM):</strong> Administración inmediata de un <strong>anticolinérgico central: Biperideno 2.5 a 5 mg intramuscular o endovenoso lento</strong> (o difenhidramina 25-50 mg IM/EV). El alivio clínico es dramático y completo en <strong>10 a 15 minutos</strong>. Posteriormente se debe indicar Biperideno oral (2 mg c/8-12h) durante 24 a 48 horas para evitar la recurrencia distónica al reabsorberse el fármaco bloqueador."
      ]
    }
  ],
  "table": {
    "title": "Tabla 10.13: Diagnóstico Diferencial de Temblor Esencial, Parkinsoniano y Emergencias Extrapiramidales",
    "headers": [
      "Característica Clínica",
      "Temblor Esencial",
      "Temblor Parkinsoniano",
      "Temblor Cerebeloso",
      "Distonía Aguda por Fármacos"
    ],
    "rows": [
      [
        "Condición de Activación",
        "Postural y Cinético (aparece al sostener objetos o postura)",
        "Reposo (aparece con extremidad completamente relajada)",
        "Intencional / Cinético terminal (al aproximarse al objetivo)",
        "Contracción tónica sostenida involuntaria (postura fija dolorosa)"
      ],
      [
        "Distribución Anatómica",
        "Bilateral, manos (manos y cabeza; cuerdas vocales)",
        "Asimétrico, manos (\"cuenta monedas\"); respeta cabeza",
        "Unilateral o bilateral en extremidades; dismetría ipsilateral",
        "Focal o segmentario: cuello (tortícolis), ojos (crisis oculógira), lengua"
      ],
      [
        "Frecuencia Oscilatoria",
        "8 a 12 Hz (rápido y fino)",
        "4 a 6 Hz (lento y de mayor amplitud)",
        "< 4 Hz (lento, grosero y ataxia)",
        "No oscilatorio rítmico; postura fija espástica distónica"
      ],
      [
        "Efecto del Alcohol",
        "Mejoría transitoria notable (70% de los pacientes)",
        "Sin efecto significativo",
        "Sin efecto / puede empeorar ataxia",
        "Sin efecto"
      ],
      [
        "Signos Acompañantes",
        "Ninguno; examen neurológico rigurosamente normal",
        "Bradicinesia, rigidez en rueda dentada, marcha a pequeños pasos",
        "Ataxia de la marcha, dismetría, disdiadococinesia, nistagmo",
        "Dolor intenso por espasmo, angustia; sin fiebre ni rigidez generalizada"
      ],
      [
        "Tratamiento de Elección",
        "Propranolol (40-160 mg/día) o Primidona (25-250 mg/día)",
        "Levodopa/Carbidopa o agonistas dopaminérgicos",
        "Tratar causa subyacente; refractario a fármacos",
        "Biperideno 2.5 a 5 mg IM o EV lento de urgencia"
      ]
    ]
  },
  "severityTable": null,
  "treatmentTable": null,
  "vignette": {
    "title": "Caso Clínico Tipo EUNACOM",
    "text": "Mujer de 23 años, sin antecedentes mórbidos, ingresa al servicio de urgencia por un cuadro de náuseas y dolor cólico epigástrico tras transgresión alimentaria rica en grasas. Se le administra analgesia y una ampolla de Metoclopramida 10 mg endovenosa en bolo. Cuarenta minutos más tarde, el médico es llamado con urgencia a la sala de observación porque la paciente presenta bruscamente incapacidad para bajar la mirada, con los ojos desviados de forma fija y sostenida hacia arriba (crisis oculógira), acompañada de dolorosa contractura espástica cervical con rotación fija del mentón hacia el hombro izquierdo (tortícolis espasmódica) y protrusión parcial de la lengua con dificultad para articular palabras. La paciente se encuentra sumamente angustiada y llorosa, con signos vitales normales: PA 125/75 mmHg, FC 82 lpm, afebril, con Glasgow 15 y pupilas isocóricas reactivas.",
    "conducta": "El cuadro corresponde a una Distonía Aguda Inducida por Fármacos secundaria a la administración endovenosa reciente de Metoclopramida. La metoclopramida es un antagonista central de los receptores dopaminérgicos D2 que, en pacientes jóvenes, puede gatillar un desbalance colinérgico agudo con hipertonía colinérgica masiva en los ganglios basales. Las manifestaciones son clásicas: crisis oculógira (desviación tónica involuntaria de la mirada vertical superior) y tortícolis espasmódica aguda. La conducta diagnóstica y terapéutica inmediata es administrar un anticolinérgico central: Biperideno 2.5 a 5 mg por vía intramuscular o endovenosa lenta (o Difenhidramina EV si no está disponible). La respuesta es casi instantánea (resolución en 10-15 minutos). No debe confundirse con una crisis epiléptica, un ACV o un cuadro psicógeno, ni requiere TAC de cerebro."
  },
  "explicacion": "El cuadro corresponde a una Distonía Aguda Inducida por Fármacos secundaria a la administración endovenosa reciente de Metoclopramida. La metoclopramida es un antagonista central de los receptores dopaminérgicos D2 que, en pacientes jóvenes, puede gatillar un desbalance colinérgico agudo con hipertonía colinérgica masiva en los ganglios basales. Las manifestaciones son clásicas: crisis oculógira (desviación tónica involuntaria de la mirada vertical superior) y tortícolis espasmódica aguda. La conducta diagnóstica y terapéutica inmediata es administrar un anticolinérgico central: Biperideno 2.5 a 5 mg por vía intramuscular o endovenosa lenta (o Difenhidramina EV si no está disponible). La respuesta es casi instantánea (resolución en 10-15 minutos). No debe confundirse con una crisis epiléptica, un ACV o un cuadro psicógeno, ni requiere TAC de cerebro.",
  "keyPoints": [
    "El Temblor Esencial es postural y de acción, bilateral y simétrico, de 8 a 12 Hz, con fuerte agregación familiar y mejoría característica con el alcohol.",
    "A diferencia de la enfermedad de Parkinson, el Temblor Esencial afecta con frecuencia la cabeza (titubeo cefálico) y la voz, pero NUNCA afecta las piernas en reposo ni presenta bradicinesia.",
    "El tratamiento farmacológico de primera línea del Temblor Esencial sintomático e invalidante es el Propranolol o la Primidona.",
    "La distonía aguda por fármacos es una emergencia extrapiramidal desencadenada por bloqueo D2 (Metoclopramida, Haloperidol), manifestándose como tortícolis, crisis oculógira y trismus.",
    "La conducta de elección inmediata en la distonía aguda es Biperideno 2.5 a 5 mg IM o EV lento, seguido de mantención oral por 24 a 48 horas."
  ],
  "questions": [
    {
      "stem": "Un paciente de 72 años presenta temblor de las extremidades superiores,\nmayor a la izquierda. El temblor aumenta al adoptar una postura. Además se\nobserva temblor del mentón y de la cabeza y el resto del examen neurológico es\nnormal. El tratamiento de la patología descrita es:",
      "options": [
        {
          "id": "A",
          "text": "Antagonistas dopaminérgicos"
        },
        {
          "id": "B",
          "text": "Agonistas dopaminérgicos"
        },
        {
          "id": "C",
          "text": "Betabloqueoy­geriatria/ 1/9"
        },
        {
          "id": "D",
          "text": "Antipsicóticos"
        },
        {
          "id": "E",
          "text": "Anticonvulsivantes"
        }
      ],
      "correcta": "C",
      "explicacion": "El cuadro clínico presentado por el paciente de 72 años es altamente sugestivo de un **Temblor Esencial (TE)**. Las características clave son: la edad del paciente (generalmente inicia en la adultez, pero es más notorio en personas mayores), el temblor que aumenta \"al adoptar una postura\" (lo que define un temblor postural, principal característica del TE), la afectación de las extremidades superiores (con predominio izquierdo, lo cual puede ocurrir en el TE, aunque a menudo es bilateral), y la presencia de temblor en el mentón y la cabeza (manifestaciones clásicas del TE). La ausencia de otros hallazgos neurológicos anormales descarta otras causas de temblor, como la enfermedad de Parkinson (que presentaría bradicinesia, rigidez y temblor de reposo) o temblor cerebeloso (que se asociaría a ataxia y temblor de intención).\n\nEl tratamiento de primera línea para el Temblor Esencial son los **betabloqueantes**, siendo el Propranolol el fármaco más utilizado y estudiado. Actúa reduciendo la amplitud del temblor en aproximadamente el 50-70% de los pacientes, aunque el mecanismo exacto no se comprende completamente. Se cree que su efecto está relacionado con el bloqueo de los receptores beta-adrenérgicos periféricos, aunque también puede tener un efecto central. La opción \"Betabloqueo\" se refiere directamente a esta clase de fármacos.\n\nPor lo tanto, ante un diagnóstico claro de Temblor Esencial basado en las características del temblor y la normalidad del resto del examen neurológico, el tratamiento más apropiado y de primera elección es el betabloqueo.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.026"
    },
    {
      "stem": "Un paciente de 67 años consulta por temblor de las extremidades\nsuperiores, que aumenta al adoptar alguna postura. Refiere que su madre\npresentó un cuadro similar. La marcha y la coordinación motora son normales\ny no presenta focalidad en el examen neurológico. El tratamiento de la\npatología descrita es:",
      "options": [
        {
          "id": "A",
          "text": "Antidepresivos tricíclicos"
        },
        {
          "id": "B",
          "text": "Agonistas dopaminérgicos"
        },
        {
          "id": "C",
          "text": "Betabloqueo"
        },
        {
          "id": "D",
          "text": "Antipsicóticos"
        },
        {
          "id": "E",
          "text": "Anticonvulsivantes"
        }
      ],
      "correcta": "C",
      "explicacion": "El cuadro clínico presentado por el paciente de 67 años es altamente sugestivo de **Temblor Esencial (TE)**. Las características clave que apoyan este diagnóstico son: el **temblor de las extremidades superiores que aumenta al adoptar alguna postura** (lo que describe un temblor postural, principal manifestación del TE), el antecedente de que **su madre presentó un cuadro similar** (destacando el fuerte componente genético y herencia autosómica dominante en muchos casos de TE), y la **normalidad de la marcha, coordinación motora y ausencia de focalidad en el examen neurológico**. Esta ausencia de otros signos neurológicos es crucial para diferenciarlo de otras patologías como la enfermedad de Parkinson (donde se esperaría temblor de reposo, bradicinesia y rigidez) o patologías cerebelosas (con ataxia y dismetría).\n\nEl **betabloqueo**, específicamente con fármacos como el propranolol (un betabloqueante no selectivo), es el tratamiento farmacológico de primera línea más ampliamente recomendado y eficaz para el Temblor Esencial sintomático. El propranolol actúa reduciendo la amplitud del temblor, mejorando significativamente la calidad de vida de los pacientes. Su mecanismo exacto no está completamente dilucidado, pero se cree que ejerce sus efectos tanto a nivel periférico (bloqueo de receptores beta-2) como a nivel central. La dosis se ajusta de forma individualizada para lograr el máximo beneficio con mínimos efectos adversos.",
      "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.026"
    }
  ],
  "vignetteText": "Mujer de 23 años, sin antecedentes mórbidos, ingresa al servicio de urgencia por un cuadro de náuseas y dolor cólico epigástrico tras transgresión alimentaria rica en grasas. Se le administra analgesia y una ampolla de Metoclopramida 10 mg endovenosa en bolo. Cuarenta minutos más tarde, el médico es llamado con urgencia a la sala de observación porque la paciente presenta bruscamente incapacidad para bajar la mirada, con los ojos desviados de forma fija y sostenida hacia arriba (crisis oculógira), acompañada de dolorosa contractura espástica cervical con rotación fija del mentón hacia el hombro izquierdo (tortícolis espasmódica) y protrusión parcial de la lengua con dificultad para articular palabras. La paciente se encuentra sumamente angustiada y llorosa, con signos vitales normales: PA 125/75 mmHg, FC 82 lpm, afebril, con Glasgow 15 y pupilas isocóricas reactivas."
}
```

## PREGUNTAS REALES DEL BANCO (25; por código de la clase y por búsqueda "temblor, esencial, parkinsoniano, distonias, neurolepticos")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.

### [1] EUNACOM Julio 2024 · Pregunta 85 · confianza 0.95
Un paciente de 72 años consulta por temblor ambas extremidades, que aparece al realizar sus actividades habituales. Al examen físico se observa el mencionado temblor, sin otras alteraciones en la exploración neurológica. ¿Cuál es el fármaco más adecuado para el manejo de sus síntomas?
- A) Diazepam
- B) Alprazolam
- C) Propranolol
- D) Levodopa
- E) Sertralina
**Correcta: C**
Explicación del banco: Temblor Esencial: El cuadro clínico describe un temblor esencial, caracterizado por una exploración neurológica normal, salvo por temblor que aumenta con la postura o actividad. El tratamiento de elección es propranolol oral.

### [2] EUNACOM Julio 2016 · Pregunta 161 · confianza 0.93
Paciente masculino, de 71 años de edad, con un cuadro de 2 años de evolución de temblor de ambas extremidades superiores, lo cual le sucede al escribir, tomar un objeto, o al usar cubiertos. Toma alprazolam 0,5 mg/dl, dos veces por día por cuadro ansioso. Al examen físico no tiene temblor de reposo y se observan reflejos osteotendíneos conservados, con tono muscular y sensibilidad normal. El temblor se acentúa al tratar de tomar un objeto. El diagnóstico más probable es:
- A) Hipertiroidismo
- B) Enfermedad de Parkinson
- C) Temblor esencial
- D) Temblor por ansiedad
- E) Temblor por medicamentos
**Correcta: C**
Explicación del banco: Es el cuadro típico del temblor esencial: temblor bilateral que aumenta al adoptar una postura y disminuye con el alcohol y las BDZ (benzodiacepinas).

### [3] EUNACOM Diciembre 2024 · Pregunta 147 · confianza 0.9
Adulto mayor con temblor al escribir, un temblor esencial ¿Con que se trata? a.​ Propanolol
- A) Accidente cerebrovascular
- B) Epilepsia
- C) Esclerosis múltiple
- D) Enfermedad de Parkinson
- E) Migraña
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Accidente cerebrovascular). Esta conducta se sustenta en los criterios de práctica médica estándar y las exigencias del Perfil de Conocimientos V3 de ASOFAMECh. Las opciones alternativas (Epilepsia, Esclerosis múltiple) corresponden a conductas secundarias, exámenes no prioritarios o diagnósticos diferenciales que no concuerdan con la presentación del paciente.

### [4] EUNACOM Diciembre 2018 · Pregunta 22 · confianza 0.96
Un hombre de 55 años, diabético de larga data, presenta temblor de reposo y lentitud al realizar actividades, como vestirse, lo que se ha asociado a dificultades para iniciar la marcha. Relata que se había caído hacia adelante, en dos oportunidades, al empezar a caminar. Al inicio de la marcha es lento e inseguro, pero luego alcanza una velocidad normal, la que se mantiene por el resto del tiempo. No presenta disminución de las fuerzas de las extremidades y sus reflejos osteotendíneos son normales, al igual que la sensibilidad. El diagnóstico más probable es:
- A) Enfermedad de Parkinson
- B) Enfermedad de Alzheimer
- C) Polineuropatía diabética
- D) Polimialgia reumática
- E) Miopatía por cuerpos de inclusión
**Correcta: A**
Explicación del banco: Es una anfermedad de Parkinson clásico: temblor de reposo, bradicinesia y problemas de inicio de marcha.

### [5] EUNACOM Julio 2015 · Pregunta 26 · confianza 0.95
Un paciente de 70 años presenta un cuadro de dificultad para girarse y para meterse a la tina, asociado a múltiples caídas. Además presenta cambios en la escritura y temblor de reposo. No presenta deterioro cognitivo evidente. El diagnóstico más probable es:
- A) Atrofia generalizada
- B) Hidrocefalia normotensiva
- C) Temblor senil
- D) Demencia por cuerpos de Lewy
- E) Enfermedad de Parkinson
**Correcta: E**
Explicación del banco: Diagnóstico: **Enfermedad de Parkinson** (opción **E**). Cuadro clásico. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [6] EUNACOM Julio 2025 · Pregunta 149 · confianza 0.9
Mujer de 35 años con exoftalmo bilateral, palpitaciones, pérdida de peso y temblor fino en manos. TSH suprimida, T4 libre elevada. Bocio difuso. ¿Cuál es el diagnóstico?
- A) Enfermedad de Graves-Basedow
- B) Tiroiditis de Hashimoto
- C) Bocio multinodular tóxico
- D) Adenoma tóxico de tiroides
- E) Tiroiditis subaguda de De Quervain
**Correcta: A**
Explicación del banco: Hipertiroidismo + exoftalmo (oftalmopatía de Graves) + bocio difuso en mujer joven = enfermedad de Graves-Basedow (autoinmune, anticuerpos anti-TSH-R). El exoftalmo es patognomónico.

### [7] EUNACOM Diciembre 2024 · Pregunta 35 · confianza 0.9
Paciente femenina con antecedente de episodio depresivo mayor hace 5 años tratada, nuevamente sintomática, parte antidepresivos y evoluciona con cambios de conducta aumento de energía: a.​ Bipolar
- A) Trastorno de ansiedad generalizada
- B) Trastorno obsesivo compulsivo
- C) Trastorno de estrés postraumático
- D) Episodio depresivo mayor
- E) Trastorno bipolar
**Correcta: A**
Explicación del banco: Conducta / Tratamiento indicado: **Trastorno de ansiedad generalizada** (opción **A**). Intoxicación por litio: vómitos, temblor, ataxia, poliuria; manejo con suero fisiológico y hemodiálisis si grave. De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [8] EUNACOM Julio 2019 · Pregunta 160 · confianza 0.9
Una paciente consulta por un cuadro de 3 semanas de evolución de fiebre, sudoración nocturna, temblor, malestar general y artralgias. Hace 7 días se agrega dolor en el cuello. Al examen físico tiene marcado dolor a la palpación de la glándula tiroides. Se solicitan exámenes que muestran TSH: 0,01 UI/L y T4 libre: 2,9 ng/dl, con captación de yodo radiactivo de 1% (VN: 2 a 40%). El tratamiento más adecuado es:
- A) Paracetamol
- B) Antibióticos
- C) Prednisona
- D) Metimazol
- E) Ketoprofeno
**Correcta: E**
Explicación del banco: Tiene una clásica tiroiditis subaguda o tiroiditis de Quervain, que se trata con AINEs. Solo si es que tiene muchos síntomas hipertiroideos se agrega el propanolol. No están indicadas las drogas antitiroideas (metimazol o propiltiouracilo).

### [9] EUNACOM Julio 2025 · Pregunta 103 · confianza 0.85
Paciente de 55 años alcohólico crónico, 48 horas después de dejar de beber presenta agitación severa, alucinaciones visuales de insectos, temblor generalizado, taquicardia 120 lpm, sudoración y fiebre 38°C. ¿Cuál es el diagnóstico y tratamiento?
- A) Delirium tremens: diazepam EV + tiamina + corrección hidrolectrolítica
- B) Psicosis alcohólica: haloperidol
- C) Meningoencefalitis: antibióticos EV
- D) Hipoglicemia: glucosa EV en bolo
- E) ACV isquémico: tPA
**Correcta: A**
Explicación del banco: Delirium tremens: síndrome de abstinencia alcohólica grave (48-72h post cese). Tratamiento: benzodiacepinas IV (diazepam o lorazepam) para prevenir convulsiones + tiamina IM + fluidos.

### [10] EUNACOM Diciembre 2025 · Pregunta 177 · confianza 0.85
Un paciente de 45 años, con IMC de 32 kg/m², acude a control médico, obje8vándose presión arterial de 146/92 mmHg. Se solicita Holter de presión arterial, que muestra múl8ples registros sobre 140/90 mmHg, diagnos8cándose hipertensión arterial. Sus exámenes de laboratorio resultan normales, incluyendo función renal, electrolitos plasmá8cos y electrocardiograma. ¿Qué 8po de fármacos es el más adecuado para iniciar el tratamiento an8hipertensivo en este paciente?
- A) Bloqueadores alfa-adrenérgicos
- B) Bloqueadores beta-adrenérgicos
- C) Inhibidores del canal de calcio
- D) Antagonistas del receptor de angiotensina
- E) Diuré2cos 2azídicos
**Correcta: D**
Explicación del banco: Además de obesidad, con alta probabilidad Gene una hipertensión esencial, ya que no Gene elementos que hagan sospechar una causa secundaria. En pacientes jóvenes se suele iniciar con IECA (inhibidores de la enzima converGdora de angiotensina) o ARA2 (antagonistas del receptor de angiotensina 2). Muchas guías actuales preﬁeren iniciar con dos fármacos de forma simultánea (ej. losartán + amlodipino). Aunque IECA y ARA2 Genen resultados comparables, muchos pacientes preﬁeren el losartán sobre el enalapril, debido a que se toma una vez al día.

### [11] EUNACOM Diciembre 2024 · Pregunta 40 · confianza 0.85
Paciente en tratamiento anti hipertensivo + sd vertiginoso en tto con Cinarizina, metformina, inicia temblor de reposo, simétrico, bilateral, rigidez y asociado a caídas frecuentes. ¿Cuál es el diagnóstico más probable?
- A) Parkinson POR QUÉ NO PODÍA SER PÁRKINSON ? Porque describía un temblor bilateral simétrico, Parkinson inicia como unilateral y no simétrico
- B) Parkinsonismo por fármacos
- C) Accidente cerebrovascular
- D) Epilepsia
- E) Esclerosis múltiple
**Correcta: A**
Explicación del banco: Diagnóstico: **Parkinson POR QUÉ NO PODÍA SER PÁRKINSON ? Porque describía un temblor bilateral simétrico, Parkinson inicia como unilateral y no simétrico** (opción **A**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [12] EUNACOM Diciembre 2025 · Pregunta 99 · confianza 0.8
Un paciente de 62 años, con antecedente de hipertensión arterial en tratamiento con doxazosina, hiperplasia prostá8ca benigna en tratamiento con tamsulosina y trastorno afec8vo bipolar en tratamiento con carbonato de li8o, consulta por temblor de manos mayor a derecha que aparece con el reposo y se asocia a len8tud en los movimientos. El cuadro inició hace 4 meses. Se miden los niveles plasmá8cos de los fármacos que u8liza, los que son informados dentro de rango terapéu8co. ¿Cuál es la conducta más adecuada?
- A) Suspender la doxazosina
- B) Disminuir la dosis de carbonato de li2o
- C) Suspender la tamsulosina
- D) Realizar prueba con levodopa
- E) Iniciar propranolol vía oral
**Correcta: D**
Explicación del banco: La bradicinesia (lentitud de movimientos) más temblor obliga a pensar en enfermedad de Parkinson, cuyo diagnóstico es clínico, pudiendo hacer una prueba con levodopa para ver si mejoran los síntomas. La intoxicación por liGo sí puede producir temblor, pero suele ser aguda y, además, explícitamente se reportan niveles dentro de rango terapéutico.

### [13] EUNACOM Diciembre 2024 · Pregunta 145 · confianza 0.8
Era una clínica de ojo rojo, pero con temblor en las manos y baja de peso, al examen físico se observa retracción palpebral: a.​ TSH y T4 libre
- A) Accidente cerebrovascular
- B) Epilepsia
- C) Esclerosis múltiple
- D) Enfermedad de Parkinson
- E) Migraña
**Correcta: A**
Explicación del banco: La alternativa correcta es la **A** (Accidente cerebrovascular). Los trastornos ansiosos incluyen el trastorno de pánico (o angustia), el trastorno de ansiedad generalizada, la agorafobia, la fobia social, las fobias simples, el TOC, el trastorno de estrés postraumático (TEPT), el estrés agudo y el trastorno adaptativo. Esta decisión se fundamenta en la evidencia clínica y normativas ministeriales de Chile (MINSAL/GES).

### [14] EUNACOM Julio 2019 · Pregunta 157 · confianza 0.8
Una paciente de 21 años presenta un episodio de rápida instalación, en 5 minutos, de marcada angustia, llanto, disnea y sensación de opresión precordial, más vértigo, imposibilidad de tragar, temblor y mucho miedo a morir. ¿Cuál es el tratamiento de esta crisis?
- A) Risperidona
- B) Carbamazepina
- C) Clorpromazina
- D) Fluoxetina
- E) Lorazepam
**Correcta: E**
Explicación del banco: Tiene una crisis de pánico, es decir solo un síntoma. Se pregunta el tratamiento de la crisis, que es con benzodiacepinas de rápida acción (lorazepam, clonazepam e incluso alprazolam, aunque el lorazepam es el más usado), generalmente por una vía de rápida absorción (sublingual, EV o IM). No se debe confundir la crisis de pánico con el trastorno de pánico, que tiene múltiples crisis de pánico, sin una causa evidente, asociado a miedo a las crisis, evitación y angustia. El trastorno de angustia, en cambio, se trata con antidepresivos IRS, como fármaco más importante.

### [15] EUNACOM Julio 2024 · Pregunta 180 · confianza 0.7
Un paciente de 70 años, sin antecedentes de importancia presenta un síncope de reposo sin pródromo, con recuperación completa. Al examen físico se encuentra orientado, en Glasgow 15, con frecuencia cardíaca de 40 latidos por minuto. ¿Cuál es el examen de elección para iniciar el estudio?
- A) Monitoreo electrocardiográfico de 24 horas
- B) Ecocardiograma
- C) TAC de cerebro
- D) Resonancia magnética de cerebro
- E) Electrocardiograma
**Correcta: E**
Explicación del banco: Evaluación del Síncope Cardiogénico: En un paciente con sospecha de síncope cardiogénico debido a una bradiarritmia, el electrocardiograma (ECG) es el examen inicial esencial. El ECG puede identificar bloqueos auriculoventriculares, enfermedad del nodo sinusal y alteraciones hidroelectrolíticas como la hiperpotasemia, que se asocian con este tipo de arritmias.

### [16] EUNACOM Diciembre 2022 · Pregunta 148 · confianza 0.7
Un paciente de 56 años es encontrado inconsciente en la vía pública, con hálito alcohólico, con varios golpes. Se hospitaliza para manejo de sus lesiones, sin embargo, a las 48 horas presenta gran agitación, diciendo que lo tienen encerrado en la cárcel y no lo dejan escapar. Se observa desorientado, tembloroso y no coopera con el interrogatorio. ¿Cuál es el fármaco de elección para su manejo?
- A) Tiamina
- B) Haloperidol
- C) Lorazepam
- D) Clorpromazina
- E) Risperidona
**Correcta: A**
Explicación del banco: Conducta / Tratamiento indicado: **Tiamina** (opción **A**). Tratamiento demencia: multidisciplinario + evitar estrés del cuidador + donepesilo (inhibidor acetilcolinesterasa, de elección) o memantina. De acuerdo con las guías ministeriales de Chile, esta es la intervención que reduce morbilidad y mortalidad.

### [17] EUNACOM Julio 2019 · Pregunta 41 · confianza 0.65
Un niño de edad presenta un cuadro de agitación, alternado con obnubilación, asociado a vómitos, sialorrea, diarrea, dolor abdominal, taquicardia, tos, temblor y sudoración. Se sospecha que haya ingerido algún tóxico. ¿Cuál es la conducta inicial?
- A) Administrar antieméticos
- B) Administrar omeprazol
- C) Administrar solución glucosada al 10%
- D) Administrar N-acetil.cisteína
- E) Administrar atropina
**Correcta: E**
Explicación del banco: Tiene un síndrome colinérgico clásico (lo más probable es que consumió insecticidas), por lo que debe recibir atropina como antídoto. Revisar los síndromes de las intoxicaciones en psiquiatría.

### [18] EUNACOM Diciembre 2022 · Pregunta 120 · confianza 0.6
Un paciente de 20 años, con diagnóstico de trastorno bipolar, en tratamiento con risperidona y litio, desde hace 3 meses, consulta por un cuadro de una semana de evolución de náuseas, malestar general y tendencia al sopor. Al examen físico se constata desorientado, con temblor de extremidades superiores. Se solicitan exámenes, entre los que destaca litemia de 2,2 mEq/L (rango normal: 0,6 a 1,2 mEq/L) y creatininemia: 1,3 mg/dl. ¿Cuál es la conducta inicial más adecuada?
- A) Plasmaféresis
- B) Hemodiálisis
- C) Alcalinizar la orina
- D) Administrar suero fisiológico endovenoso
- E) Diazepam endovenosa
**Correcta: D**
Explicación del banco: Diagnóstico: **Administrar suero fisiológico endovenoso** (opción **D**). El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).

### [19] EUNACOM Diciembre 2019 · Pregunta 37 · confianza 0.6
Un paciente se hospitaliza hace 48 horas, por un traumatismo, secundario a un accidente de tránsito. Como antecedente, toma 1 botella de vino al día, sin llegar a la ebriedad. Al segundo día de ingreso presenta un cuadro de agitación psicomotora, desorientación temporoespacial, temblor y alucinaciones visuales zoomórficas. ¿Cuál es el tratamiento más adecuado?
- A) Haloperidol
- B) Lorazepam
- C) Risperidona
- D) Carbamacepina
- E) Tiamina
**Correcta: B**
Explicación del banco: Tiene un delirium tremens clásico, que se trata con benzodiacepinas, en especial el diazepam. El lorazepam también es útil y es el de elección en el DHC.

### [20] EUNACOM Julio 2025 · Pregunta 73 · confianza 0.55
Hombre de 50 años operado de bypass gástrico hace 1 año. Consulta por episodios de sudoración, temblor y mareo 2 horas después de las comidas. Glicemia capilar durante el episodio: 52 mg/dL. ¿Cuál es el diagnóstico?
- A) Úlcera marginal
- B) Obstrucción de la anastomosis
- C) Dumping tardío (hipoglicemia reactiva postprandial)
- D) Hipoglicemia por insulinoma
- E) Síndrome de asa aferente
**Correcta: C**
Explicación del banco: Dumping tardío: hipoglicemia 1-3h postprandial por liberación exagerada de insulina tras la hiperglicemia inicial del dumping precoz. Exclusivo del bypass gástrico. Tratamiento: comidas pequeñas y frecuentes, reducción de carbohidratos simples, acarbosa.

### [21] EUNACOM Diciembre 2017 · Pregunta 40 · confianza 0.55
Un paciente de 67 años, diabético, tipo 2, en tratamiento con metformina 1700 mg/día y glibenclamida 20 mg/día, ambos separados en dos dosis diarias consulta por episodios repetidos de mareos, malestar y sudoración, asociado a temblor, que ocurren al final de la mañana o antes de almuerzo. Han coincidido con glicemias capilares de 65 mg/dl. Su IMC es 32 Kg/m2. Su hemoglobina A1c resulta 8,1. ¿Cuál es la conducta más adecuada?
- A) Suspender la glibenclamida
- B) Agregar una colación con 25 gramos de hidrato de carbono antes del almuerzo
- C) Suspender la glibenclamida
- D) Reemplazar la glibenclamida por sitagliptina
- E) Reemplazar la metformina por pioglitazona
**Correcta: D**
Explicación del banco: Tiene clínica de hipoglicemias, que probablemente son causadas por la glibenclamida. Por eso se debe cambiar por otro hipoglicemiante. Como tiene un mal control metabólico (HbA1c alta), no se debe agregar la colación

### [22] EUNACOM Julio 2015 · Pregunta 81 · confianza 0.55
Un paciente de 54 años, alcohólico hace 20 años, que en contexto de una festividad consume abundante alcohol, con cerca de 3 botellas de vino al día. Se reintegra a su trabajo y al tercer día después de suspender el consumo, evoluciona con un cuadro de malestar general, ansiedad, temblor, seguido luego de agitación psicomotora y alucinaciones. ¿Qué fármaco debe administrarse?
- A) Diazepam
- B) Fenobarbital
- C) Fenitoína
- D) Haloperidol
- E) Tiamina
**Correcta: A**
Explicación del banco: Tiene un delirium tremens (abstinencia de alcohol grave) se trata con diazepam. Si tiene daño hepático crónico, es con lorazepam

### [23] EUNACOM Julio 2019 · Pregunta 15 · confianza 0.5
Un paciente de 42 años, alcohólico, consume cerca de 3 botellas de vino al día, durante dos semanas. Luego de 3 días de abstinencia, presenta agitación psicomotora, desorientación y temblor, asociado a alucinaciones visuales. ¿Cuál es el tratamiento inicial para el manejo de este paciente?
- A) Tiamina
- B) Zink
- C) Clorpromazina
- D) Haloperidol
- E) Diazepam
**Correcta: E**
Explicación del banco: Es un clásico delirium tremens, que se trata con benzodiacepinas, idealmente diazepam, que tiene vida media larga, a menos que tenga DHC, en que se debe tratar con lorazepam. Las demás causas de agitación psicomotora psiquiátrica se tratan con haloperidol, pero esta es una excepción que hay que saber.

### [24] EUNACOM Diciembre 2024 · Pregunta 171 · confianza 0.4
(178) Paciente de 78 años con antecedentes de HTA DM2 vértigo recurrente en tratamiento con Losartán Metformina y Cinarizina. Consulta por 3 meses de temblor en EESS y caídas frecuentes. Al examen físico temblor de reposo en EESS bilateral y simétrico, leve rigidez y marcha enlentecida. Sin focalidad, sin alteraciones en la sensibilidad, Minimental 30/30
- A) Temblor esencial
- B) Neuropatía DM
- C) Hidrocefalia normotensiva d.​ Parkinsonismo por fármacos (cinarizina)
- E) Enfermedad de Parkinson
- E) Accidente cerebrovascular
**Correcta: C**
Explicación del banco: Conducta / Tratamiento indicado: **Hidrocefalia normotensiva d.​ Parkinsonismo por fármacos (cinarizina)** (opción **C**). Según los consensos y guías clínicas del MINSAL, esta constituye la conducta estándar de primera línea recomendada para este nivel de atención.

### [25] EUNACOM Diciembre 2017 · Pregunta 105 · confianza 0.4
Un paciente esquizofrénico, recién diagnósticado, inicia tratamiento con risperidona. Al tercer día, inicia un cuadro de disestesias en las extremidades inferiores, asociadas a temblor, inquietud y cambio continuo de posición. Se muestra muy incómodo y angustiado. ¿Cuál es el diagnóstico más probable?
- A) Parkinsonismo por fármacos
- B) Distonía aguda
- C) Disquinesia aguda
- D) Acatisia
- E) Manía aguda
**Correcta: D**
Explicación del banco: Diagnóstico: **Acatisia** (opción **D**). Es una acatisia clásica.. El cuadro clínico presentado reúne los criterios diagnósticos cardinales para esta patología, de acuerdo a las pautas de práctica clínica del Ministerio de Salud (MINSAL).
