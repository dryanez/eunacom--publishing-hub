/**
 * Tomo 01 · Cardiología — Bloque 4: Valvulopatías, Cardiopatías Congénitas y Endocarditis
 * Formato estándar (igual que dataset_endocrinologia_bloque_*.cjs). Migrado desde los 25 temas antiguos
 * (books/scripts/_old_cardio/) por _old_cardio/migrar_a_38_temas.cjs; `_origen` indica de dónde viene cada sección.
 * `_estado`: 'migrado' (contenido antiguo sin reescribir) · 'borrador' (tema nuevo, contenido mínimo) · 'estandar' (reescrito al estándar).
 */
const bloque4 = [
  {
    "id": "cardio-22",
    "classId": "cardio-22",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Valvulopatías, Cardiopatías Congénitas y Endocarditis",
    "topicLabel": "4.1",
    "title": "Paciente con Soplo: Semiología y Maniobras Dinámicas",
    "perfilCode": "1.01.1.021",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Las cardiopatías congénitas operables y la cirugía de las válvulas tienen garantía GES (se revisan en los temas siguientes)",
    "reconstrucciones": "",
    "frecuencia": "Alta · Maniobras que cambian el soplo (inspiración, Valsalva, cuclillas, handgrip), soplo continuo del ductus y cuándo pedir ecocardiograma",
    "svg": null,
    "algoTitle": "Algoritmo del paciente con soplo",
    "diagram": {
      "title": "Algoritmo del Paciente con Soplo: Momento, Maniobras y Conducta",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar22\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar22)}\n  </style>\n  <rect class=\"b\" x=\"150\" y=\"6\" width=\"320\" height=\"36\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22.5\" text-anchor=\"middle\" font-weight=\"700\">Soplo en un paciente (sistólico, diastólico o continuo)</text>\n  <text class=\"sub\" x=\"310\" y=\"34.5\" text-anchor=\"middle\">Describir: momento, forma, foco, irradiación, grado (Levine)</text>\n  <path class=\"ln\" d=\"M310,42 V58\"/>\n  <rect class=\"dec\" x=\"90\" y=\"58\" width=\"440\" height=\"36\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"74.5\" text-anchor=\"middle\" font-weight=\"700\">¿En qué momento del ciclo cae el soplo?</text>\n  <text class=\"sub\" x=\"310\" y=\"86.5\" text-anchor=\"middle\">Entre R1 y R2 (sístole), entre R2 y R1 (diástole) o todo el ciclo</text>\n  <path class=\"ln\" d=\"M310,94 V108 H105 V120\"/>\n  <path class=\"ln\" d=\"M310,108 H310 V120\"/>\n  <path class=\"ln\" d=\"M310,108 H515 V120\"/>\n  <rect class=\"b\" x=\"12\" y=\"120\" width=\"186\" height=\"78\" rx=\"3\"/>\n  <text class=\"t\" x=\"105\" y=\"146.5\" text-anchor=\"middle\" font-weight=\"700\">SISTÓLICO</text>\n  <text class=\"sub\" x=\"105\" y=\"158.5\" text-anchor=\"middle\">Eyectivo (romboidal): EAo, EP, MCH, CIA</text>\n  <text class=\"sub\" x=\"105\" y=\"169.5\" text-anchor=\"middle\">Holosistólico: IM, IT, CIV</text>\n  <text class=\"sub\" x=\"105\" y=\"180.5\" text-anchor=\"middle\">Telesistólico + clic: prolapso mitral</text>\n  <rect class=\"b\" x=\"217\" y=\"120\" width=\"186\" height=\"78\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"146.5\" text-anchor=\"middle\" font-weight=\"700\">DIASTÓLICO</text>\n  <text class=\"sub\" x=\"310\" y=\"158.5\" text-anchor=\"middle\">Decrescendo precoz: IAo, IP</text>\n  <text class=\"sub\" x=\"310\" y=\"169.5\" text-anchor=\"middle\">Retumbo + chasquido: EM</text>\n  <text class=\"sub\" x=\"310\" y=\"180.5\" text-anchor=\"middle\">Siempre patológico: eco</text>\n  <rect class=\"b\" x=\"422\" y=\"120\" width=\"186\" height=\"78\" rx=\"3\"/>\n  <text class=\"t\" x=\"515\" y=\"146.5\" text-anchor=\"middle\" font-weight=\"700\">CONTINUO</text>\n  <text class=\"sub\" x=\"515\" y=\"158.5\" text-anchor=\"middle\">Ductus arterioso (maquinaria)</text>\n  <text class=\"sub\" x=\"515\" y=\"169.5\" text-anchor=\"middle\">Fístula arteriovenosa</text>\n  <text class=\"sub\" x=\"515\" y=\"180.5\" text-anchor=\"middle\">Zumbido venoso (inocente)</text>\n  <path class=\"ln\" d=\"M105,198 V218\"/>\n  <path class=\"ln\" d=\"M310,198 V218\"/>\n  <path class=\"ln\" d=\"M515,198 V218\"/>\n  <rect class=\"dec\" x=\"12\" y=\"218\" width=\"596\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"236.5\" text-anchor=\"middle\" font-weight=\"700\">Maniobras dinámicas para afinar el diagnóstico</text>\n  <text class=\"sub\" x=\"310\" y=\"248.5\" text-anchor=\"middle\">Inspiración: soplos derechos ↑ · Valsalva/de pie: casi todos ↓ (MCH y prolapso ↑) · Handgrip: IM, IAo, CIV ↑; EAo y MCH ↓</text>\n  <path class=\"ln\" d=\"M310,258 V276\"/>\n  <rect class=\"dec\" x=\"90\" y=\"276\" width=\"440\" height=\"36\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"298\" text-anchor=\"middle\" font-weight=\"700\">¿Soplo sistólico ≤ 2/6, sin frémito, ruidos y ECG normales, asintomático?</text>\n  <path class=\"ln\" d=\"M310,312 V326 H158 V338\"/>\n  <path class=\"ln\" d=\"M310,326 H462 V338\"/>\n  <text class=\"lbl\" x=\"150\" y=\"322\" text-anchor=\"end\">Sí</text>\n  <text class=\"lbl\" x=\"470\" y=\"322\" text-anchor=\"start\">No</text>\n  <rect class=\"b\" x=\"12\" y=\"338\" width=\"292\" height=\"54\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"358\" text-anchor=\"middle\" font-weight=\"700\">Soplo inocente o funcional</text>\n  <text class=\"sub\" x=\"158\" y=\"370\" text-anchor=\"middle\">Tranquilizar y controlar</text>\n  <text class=\"sub\" x=\"158\" y=\"381\" text-anchor=\"middle\">Embarazo, fiebre, anemia, hipertiroidismo: tratar la causa</text>\n  <rect class=\"acc\" x=\"316\" y=\"338\" width=\"292\" height=\"54\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"462\" y=\"358\" text-anchor=\"middle\" font-weight=\"700\">Ecocardiograma Doppler y derivación</text>\n  <text class=\"accS\" x=\"462\" y=\"370\" text-anchor=\"middle\">Diastólico, continuo, holosistólico, ≥ 3/6, frémito,</text>\n  <text class=\"accS\" x=\"462\" y=\"381\" text-anchor=\"middle\">síntomas, ruidos anormales o ECG/Rx alterados</text>\n</svg>"
    },
    "contexto": "El soplo es el hallazgo cardiológico más frecuente en la consulta general y el que más se pregunta en el EUNACOM, casi siempre en forma de caso clínico: el enunciado describe el soplo, un pulso o un ruido, y pide el diagnóstico. El médico general debe reconocer en la cabecera del paciente qué soplo es inocente y cuál exige estudio, nombrar la valvulopatía o el defecto congénito por su semiología y usar las maniobras para separar los soplos que se parecen. Este tema da el método; las clases siguientes aplican cada valvulopatía.",
    "contentSections": [
      {
        "subhead": "1. Cómo Describir un Soplo: Momento, Forma, Foco y Grado de Levine",
        "paragraphs": [
          "Un soplo es un ruido producido por flujo turbulento: aparece cuando la sangre pasa por un orificio estrecho (estenosis), retrocede por una válvula que no cierra (insuficiencia), cruza un defecto entre cavidades o simplemente circula con más velocidad de lo normal (embarazo, fiebre, anemia, hipertiroidismo, ejercicio). Todo soplo se describe con seis datos: <strong>momento del ciclo</strong> (sistólico, diastólico o continuo), <strong>forma</strong> (creciente-decreciente o «romboidal», en barra o plateau, decreciente), <strong>foco</strong> de máxima intensidad (aórtico: 2.º espacio intercostal derecho; pulmonar: 2.º izquierdo; tricuspídeo: borde esternal izquierdo bajo; mitral: ápex), <strong>irradiación</strong> (al cuello, a la axila, al dorso), <strong>tono</strong> (rudo, soplante, retumbo) y <strong>grado</strong>.",
          "El grado se mide con la <strong>escala de Levine</strong>: I apenas audible en un ambiente silencioso; II débil pero audible de inmediato; III intenso, sin frémito; IV intenso con <strong>frémito</strong> (vibración palpable); V audible con el estetoscopio apenas apoyado; VI audible sin apoyar el estetoscopio. Un soplo de grado IV o más, con frémito, siempre es patológico. Pero el grado no mide la gravedad: una estenosis aórtica crítica con gasto cardíaco bajo puede sonar suave, y una estenosis mitral grave se oye apenas como un retumbo débil.",
          "No hay que olvidar los demás ruidos, que son más específicos que el soplo mismo: un <strong>primer ruido (R1) intenso</strong> y un <strong>chasquido de apertura</strong> orientan a estenosis mitral; un <strong>segundo ruido (R2) único o apagado</strong> a estenosis aórtica grave; un <strong>desdoblamiento amplio y fijo de R2</strong> a comunicación interauricular; un <strong>clic mesosistólico</strong> a prolapso mitral; un <strong>cuarto ruido (R4)</strong> a ventrículo rígido (hipertrofia) y un <strong>tercer ruido (R3)</strong> a sobrecarga de volumen o falla ventricular."
        ]
      },
      {
        "subhead": "2. Soplos Sistólicos: Eyectivos, Holosistólicos y Telesistólicos",
        "paragraphs": [
          "Entre R1 y R2 caben dos tipos de soplo. El <strong>soplo eyectivo</strong> nace cuando el ventrículo expulsa la sangre contra un obstáculo: empieza un poco después de R1, crece hasta la mitad de la sístole y decrece antes de R2 (forma de rombo o «diamante»). Es el de la <strong>estenosis aórtica</strong> (foco aórtico, irradiado a las carótidas; cuanto más grave, más tardío es el pico), la <strong>estenosis pulmonar</strong>, la <strong>miocardiopatía hipertrófica obstructiva</strong> (borde esternal izquierdo, sin irradiar a las carótidas) y el <strong>hiperflujo pulmonar de la CIA</strong>, además de los soplos inocentes.",
          "El <strong>soplo regurgitante o holosistólico</strong> empieza junto con R1 y dura hasta R2 con intensidad pareja («en barra»), porque la sangre sale por el orificio de baja presión durante toda la sístole. Es el de la <strong>insuficiencia mitral</strong> (ápex, irradiado a la axila), la <strong>insuficiencia tricuspídea</strong> (borde esternal izquierdo bajo, aumenta con la inspiración) y la <strong>comunicación interventricular</strong> (borde esternal izquierdo bajo, con frémito). El <strong>soplo telesistólico precedido de un clic</strong> es el del prolapso mitral. Cada uno de estos temas se desarrolla en las clases siguientes; aquí interesa reconocer el patrón."
        ]
      },
      {
        "subhead": "3. Soplos Diastólicos y Soplos Continuos",
        "paragraphs": [
          "Todo <strong>soplo diastólico es patológico</strong> hasta demostrar lo contrario y exige ecocardiograma. El <strong>soplo diastólico decreciente precoz, aspirativo</strong>, en el borde esternal izquierdo (paciente sentado, inclinado hacia delante y en espiración) es la <strong>insuficiencia aórtica</strong>; en la insuficiencia pulmonar por hipertensión pulmonar se llama soplo de Graham Steell. El <strong>retumbo mesodiastólico grave con chasquido de apertura y refuerzo presistólico</strong>, mejor audible en el ápex con el paciente en decúbito lateral izquierdo y con la campana, es la <strong>estenosis mitral</strong>. El <strong>soplo de Austin Flint</strong> es un retumbo apical de la insuficiencia aórtica grave, producido porque el chorro regurgitante hace vibrar la valva mitral anterior; se distingue de la estenosis mitral porque no tiene chasquido de apertura ni R1 intenso.",
          "Los <strong>soplos continuos</strong> abarcan sístole y diástole sin interrupción: el <strong>ductus arterioso persistente</strong> (soplo «en maquinaria», bajo la clavícula izquierda), las fístulas arteriovenosas y los soplos de la circulación colateral. El <strong>zumbido venoso</strong> (soplo continuo en la base del cuello, de niños y jóvenes, que desaparece al comprimir la yugular o al girar la cabeza) es inocente y se distingue del ductus por estas dos maniobras. Si el soplo continuo se acompaña de pulso saltón y cansancio al alimentarse o al jugar, se piensa en ductus y se deriva."
        ]
      },
      {
        "subhead": "4. Maniobras Dinámicas: Qué Le Pasa a Cada Soplo",
        "paragraphs": [
          "Las maniobras cambian el retorno venoso, el volumen del ventrículo o la poscarga, y el comportamiento del soplo permite afinar el diagnóstico en la cabecera del paciente. Son una de las preguntas más seguras del EUNACOM. La regla práctica: pensar qué le pasa al <strong>volumen del ventrículo izquierdo</strong> y a la <strong>poscarga</strong>.",
          "• <strong>Inspiración profunda (maniobra de Rivero-Carvallo):</strong> la presión intratorácica negativa aumenta el retorno venoso al corazón derecho. <strong>Todos los soplos de origen derecho</strong> (insuficiencia y estenosis tricuspídea, estenosis e insuficiencia pulmonar) <strong>aumentan</strong>. Los izquierdos no cambian o disminuyen. Es la clave para separar una insuficiencia tricuspídea de una mitral.",
          "• <strong>Valsalva (fase de esfuerzo), ponerse de pie y nitrito de amilo:</strong> disminuyen el retorno venoso y el volumen ventricular. <strong>La mayoría de los soplos disminuye</strong>. Solo <strong>dos aumentan</strong>: la <strong>miocardiopatía hipertrófica obstructiva</strong> (la cavidad pequeña acerca la valva mitral al septo y aumenta la obstrucción) y el <strong>prolapso mitral</strong> (el clic se adelanta y el soplo se alarga).",
          "• <strong>Cuclillas y elevación pasiva de las piernas:</strong> aumentan el retorno venoso y la poscarga. Aumentan los soplos de la estenosis aórtica y de la estenosis pulmonar (más flujo), <strong>disminuye el de la miocardiopatía hipertrófica</strong> y en el prolapso el clic se retrasa y el soplo se acorta. Es la maniobra contraria a Valsalva.",
          "• <strong>Empuñadura isométrica (handgrip):</strong> aumenta la poscarga. <strong>Aumentan los soplos regurgitantes del corazón izquierdo</strong> (insuficiencia mitral, insuficiencia aórtica, comunicación interventricular) y <strong>disminuyen los eyectivos</strong> (estenosis aórtica, miocardiopatía hipertrófica obstructiva).",
          "• <strong>Otras posiciones y trucos:</strong> el decúbito lateral izquierdo con la campana destaca el retumbo de la estenosis mitral; sentado e inclinado hacia delante, en espiración, el soplo de la insuficiencia aórtica; tras una <strong>pausa postextrasistólica</strong> el soplo de la estenosis aórtica aumenta (el ventrículo se llena más) y el de la insuficiencia mitral no cambia, lo que permite distinguirlos en un paciente con extrasístoles."
        ]
      },
      {
        "subhead": "5. Soplo Inocente, Cuándo Pedir Ecocardiograma y Conducta en Atención Primaria",
        "paragraphs": [
          "El <strong>soplo inocente o funcional</strong> es sistólico, eyectivo, de grado I-II, corto, suave, que no se irradia, no tiene frémito, cambia con la posición, se acompaña de ruidos normales y no produce síntomas, con electrocardiograma y radiografía normales. Es muy frecuente en niños y adolescentes (soplo de Still: musical, en el borde esternal izquierdo, que disminuye al sentarse), y aparece en el embarazo, la anemia, la fiebre y el hipertiroidismo, situaciones en que aumenta el gasto cardíaco: se trata la causa y desaparece. En el anciano, la <strong>esclerosis aórtica</strong> (válvula calcificada sin obstrucción) da un soplo eyectivo con R2 conservado y pulso normal; la estenosis aórtica verdadera tiene R2 apagado y pulso parvus et tardus.",
          "<strong>Cuándo pedir ecocardiograma Doppler:</strong> todo soplo diastólico, continuo o holosistólico; el soplo sistólico de grado III o más, con frémito, que irradia o es tardío; cualquier soplo con síntomas (disnea, síncope, angina), con ruidos anormales (clic, R2 único, R4, desdoblamiento fijo), con signos de insuficiencia cardíaca, con fiebre y fenómenos embólicos (endocarditis) o con electrocardiograma o radiografía anormales. Un soplo sistólico suave y aislado, en una persona asintomática y con examen normal, no necesita estudio: se tranquiliza y se controla.",
          "En atención primaria el médico general <strong>identifica el tipo de soplo, pide el ecocardiograma y deriva</strong> a cardiología (nivel diagnóstico específico, tratamiento inicial, seguimiento por derivación). Dos recordatorios: la cirugía valvular y la cirugía de las cardiopatías congénitas operables tienen garantía GES, y el paciente con prótesis valvular o endocarditis previa necesita profilaxis antes de procedimientos dentales (se revisa en la clase de endocarditis)."
        ]
      },
      {
        "subhead": "6. Del Soplo al Diagnóstico: los Patrones que el EUNACOM Repite",
        "paragraphs": [
          "El examen presenta el soplo dentro de un caso clínico y espera que se reconozca el patrón completo, no solo el soplo. Los patrones que más se repiten son estos: <strong>adulto mayor con síncope o angina de esfuerzo, soplo eyectivo en el foco aórtico irradiado al cuello, R2 apagado y pulso parvus et tardus</strong> es estenosis aórtica; <strong>presión de pulso amplia, pulsos saltones y soplo diastólico decreciente</strong> es insuficiencia aórtica; <strong>mujer con fibrilación auricular, disnea y retumbo diastólico</strong>, a menudo con antecedente de fiebre reumática, es estenosis mitral; <strong>soplo holosistólico apical irradiado a la axila</strong> es insuficiencia mitral; <strong>mujer joven con palpitaciones y un clic mesosistólico</strong> es prolapso mitral.",
          "En los defectos congénitos del adulto: <strong>soplo eyectivo pulmonar con R2 desdoblado y fijo y bloqueo incompleto de rama derecha</strong> es comunicación interauricular, la cardiopatía congénita que más se diagnostica en el adulto; <strong>soplo holosistólico rudo con frémito en el borde esternal izquierdo bajo</strong> es comunicación interventricular; <strong>soplo continuo infraclavicular izquierdo</strong> es ductus; <strong>hipertensión en los brazos con pulsos femorales débiles</strong> es coartación. Y <strong>fiebre prolongada con un soplo nuevo o cambiante</strong> es endocarditis hasta demostrar lo contrario.",
          "Cuando el soplo es el motivo de consulta de un paciente asintomático, la pregunta del examen casi siempre es si se justifica estudiarlo: si es un soplo sistólico suave, sin otros hallazgos, la respuesta es tranquilizar; si hay síntomas, ruidos anormales o un soplo diastólico, la respuesta es el ecocardiograma Doppler. Ni la radiografía ni el electrocardiograma sustituyen al ecocardiograma para definir una valvulopatía, aunque ayudan a ver su repercusión (cardiomegalia, hipertrofia, fibrilación auricular)."
        ]
      }
    ],
    "table": {
      "title": "Respuesta de los Soplos a las Maniobras Dinámicas",
      "headers": [
        "Maniobra",
        "Efecto hemodinámico",
        "Soplos que aumentan",
        "Soplos que disminuyen"
      ],
      "rows": [
        [
          "Inspiración profunda (Rivero-Carvallo)",
          "Más retorno venoso derecho",
          "Insuficiencia/estenosis tricuspídea, estenosis/insuficiencia pulmonar",
          "Los izquierdos no cambian"
        ],
        [
          "Valsalva, de pie, nitrito de amilo",
          "Menos precarga: VI más pequeño",
          "Miocardiopatía hipertrófica obstructiva; prolapso mitral (clic precoz, soplo más largo)",
          "Casi todos los demás (estenosis aórtica, insuficiencia mitral, CIV)"
        ],
        [
          "Cuclillas, elevación de piernas",
          "Más precarga y más poscarga",
          "Estenosis aórtica, estenosis pulmonar, insuficiencia mitral",
          "Miocardiopatía hipertrófica obstructiva; prolapso (clic tardío, soplo corto)"
        ],
        [
          "Handgrip (empuñadura isométrica)",
          "Más poscarga",
          "Insuficiencia mitral, insuficiencia aórtica, CIV",
          "Estenosis aórtica, miocardiopatía hipertrófica obstructiva"
        ],
        [
          "Pausa postextrasistólica",
          "Mayor llenado del VI",
          "Estenosis aórtica",
          "La insuficiencia mitral no cambia"
        ]
      ]
    },
    "vignette": "Hombre de 22 años, futbolista aficionado, consulta por un síncope durante un partido, con recuperación espontánea. No tiene síntomas de reposo. Un tío falleció súbitamente a los 40 años. Examen: PA 115/70 mmHg, FC 70 lpm, pulso carotídeo rápido y de doble impulso. En el borde esternal izquierdo se ausculta un soplo sistólico eyectivo III/VI, sin irradiación al cuello, que aumenta al ponerse de pie y con la maniobra de Valsalva y disminuye en cuclillas. R2 normal.",
    "explicacion": "Un soplo sistólico eyectivo que aumenta con Valsalva y de pie, y disminuye en cuclillas, es el sello de la miocardiopatía hipertrófica obstructiva: al bajar la precarga, la cavidad se achica y la obstrucción empeora. El síncope de esfuerzo, el antecedente de muerte súbita familiar, el pulso de doble impulso y la ausencia de irradiación a las carótidas lo separan de la estenosis aórtica, cuyo soplo disminuye con Valsalva. Se pide ecocardiograma Doppler y electrocardiograma, se prohíbe el ejercicio intenso y se deriva a cardiología (tema 3.5).",
    "keyPoints": [
      "Todo soplo se describe por momento (sistólico, diastólico, continuo), forma, foco, irradiación, tono y grado de Levine; el grado IV o más tiene frémito y es siempre patológico.",
      "Todo soplo diastólico y todo soplo continuo patológico exigen ecocardiograma Doppler; el sistólico inocente es suave (I-II), corto, sin frémito, con ruidos y ECG normales.",
      "Inspiración profunda (Rivero-Carvallo): aumentan los soplos del corazón derecho (insuficiencia tricuspídea, estenosis pulmonar).",
      "Valsalva y ponerse de pie: disminuyen casi todos los soplos; solo aumentan la miocardiopatía hipertrófica obstructiva y el prolapso mitral (clic precoz, soplo más largo).",
      "Cuclillas: disminuye el soplo de la miocardiopatía hipertrófica y aumenta el de la estenosis aórtica; el clic del prolapso se retrasa.",
      "Handgrip (más poscarga): aumentan insuficiencia mitral, insuficiencia aórtica y CIV; disminuyen estenosis aórtica y miocardiopatía hipertrófica.",
      "Soplo continuo en maquinaria bajo la clavícula izquierda con pulso saltón: ductus arterioso persistente; el zumbido venoso desaparece al comprimir la yugular.",
      "Retumbo diastólico con chasquido de apertura y R1 intenso es estenosis mitral; el Austin Flint (retumbo sin chasquido) es de la insuficiencia aórtica grave."
    ],
    "questions": [
      {
        "stem": "Un niño de 8 años acude a consulta por dificultad para seguir el ritmo en actividades físicas en la escuela, con infecciones respiratorias recurrentes. Signos vitales normales, auscultación pulmonar normal. A la auscultación cardiaca se detecta un soplo continuo de intensidad III/VI en la región paraesternal e infraclavicular izquierda. Talla -1 DE para su edad. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Miocardiopatía hipertrófica"
          },
          {
            "id": "B",
            "text": "Comunicación interventricular"
          },
          {
            "id": "C",
            "text": "Comunicación interauricular"
          },
          {
            "id": "D",
            "text": "Ductus arterioso persistente"
          },
          {
            "id": "E",
            "text": "Soplo funcional"
          }
        ],
        "correcta": "D",
        "explicacion": "Un soplo continuo, que abarca sístole y diástole, en la región infraclavicular izquierda es el soplo «en maquinaria» del ductus arterioso persistente. La comunicación interventricular da un soplo holosistólico con frémito, la comunicación interauricular un soplo eyectivo con desdoblamiento fijo de R2, y la miocardiopatía hipertrófica un soplo eyectivo que aumenta con Valsalva. Un soplo funcional no es continuo ni de grado III. Se confirma con ecocardiograma y se deriva para el cierre.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 88"
      },
      {
        "stem": "Un hombre de 34 años, usuario de drogas endovenosas, consulta por fiebre y se ausculta en el borde esternal izquierdo inferior un soplo holosistólico de grado III/VI. Al pedirle una inspiración profunda, el soplo aumenta de intensidad. ¿Qué lesión valvular es la más probable?",
        "options": [
          {
            "id": "A",
            "text": "Insuficiencia mitral"
          },
          {
            "id": "B",
            "text": "Insuficiencia tricuspídea"
          },
          {
            "id": "C",
            "text": "Estenosis aórtica"
          },
          {
            "id": "D",
            "text": "Comunicación interventricular restrictiva"
          },
          {
            "id": "E",
            "text": "Prolapso de la válvula mitral"
          }
        ],
        "correcta": "B",
        "explicacion": "Los soplos del corazón derecho aumentan con la inspiración profunda (maniobra de Rivero-Carvallo): un soplo holosistólico en el borde esternal izquierdo bajo que aumenta al inspirar es una insuficiencia tricuspídea, aquí probablemente por endocarditis derecha de un usuario de drogas. La insuficiencia mitral y la CIV no cambian con la inspiración y el prolapso mitral es telesistólico con clic.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Un hombre de 25 años consulta por un síncope de esfuerzo. Se ausculta un soplo sistólico eyectivo en el borde esternal izquierdo, que aumenta al pasar de la posición en cuclillas a la bipedestación. ¿Qué maniobra tendría el efecto contrario, disminuyendo el soplo?",
        "options": [
          {
            "id": "A",
            "text": "Maniobra de Valsalva"
          },
          {
            "id": "B",
            "text": "Nitrito de amilo"
          },
          {
            "id": "C",
            "text": "Posición de cuclillas"
          },
          {
            "id": "D",
            "text": "Bipedestación brusca"
          },
          {
            "id": "E",
            "text": "Inspiración profunda"
          }
        ],
        "correcta": "C",
        "explicacion": "El soplo que aumenta al disminuir la precarga (de pie, Valsalva, nitrito de amilo) y disminuye al aumentarla es el de la miocardiopatía hipertrófica obstructiva. Las cuclillas y la elevación de las piernas aumentan el retorno venoso y la poscarga, dilatan el ventrículo y reducen la obstrucción, por lo que el soplo disminuye.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "4.4§0 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-23",
    "classId": "cardio-23",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Valvulopatías, Cardiopatías Congénitas y Endocarditis",
    "topicLabel": "4.2",
    "title": "Estenosis Aórtica: Semiología, Severidad Ecocardiográfica y Reemplazo Valvular",
    "perfilCode": "1.01.1.009, 1.01.4.006",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía GES de cirugía de las válvulas aórtica, mitral y tricúspide (lesiones crónicas) en personas de 15 años y más",
    "reconstrucciones": "",
    "frecuencia": "Máxima · Es la valvulopatía más preguntada: diagnóstico por semiología (soplo, R2, pulso), tríada de síntomas, criterios de severidad por ecocardiograma e indicación de reemplazo valvular",
    "svg": null,
    "algoTitle": "Algoritmo de evaluación de severidad e intervención en estenosis aórtica",
    "diagram": {
      "title": "Algoritmo de la Estenosis Aórtica: Severidad Ecocardiográfica e Indicación de Reemplazo Valvular",
      "svg": "<svg viewBox=\"0 0 620 430\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar23\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar23)}\n  </style>\n  <rect class=\"b\" x=\"110\" y=\"6\" width=\"400\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"24.5\" text-anchor=\"middle\" font-weight=\"700\">Soplo sistólico eyectivo aórtico + R2 apagado + pulso parvus et tardus</text>\n  <text class=\"sub\" x=\"310\" y=\"36.5\" text-anchor=\"middle\">Síncope, angina o disnea de esfuerzo en un adulto mayor o en un bicúspide</text>\n  <path class=\"ln\" d=\"M310,46 V64\"/>\n  <rect class=\"dec\" x=\"90\" y=\"64\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"82.5\" text-anchor=\"middle\" font-weight=\"700\">Ecocardiograma Doppler transtorácico</text>\n  <text class=\"sub\" x=\"310\" y=\"94.5\" text-anchor=\"middle\">Velocidad pico, gradiente medio, área valvular, FEVI, grosor del VI</text>\n  <path class=\"ln\" d=\"M310,104 V122\"/>\n  <rect class=\"dec\" x=\"90\" y=\"122\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"146\" text-anchor=\"middle\" font-weight=\"700\">¿Severa? Vmáx ≥ 4 m/s · gradiente medio ≥ 40 mmHg · AVA ≤ 1,0 cm²</text>\n  <path class=\"ln\" d=\"M310,162 V176 H158 V188\"/>\n  <path class=\"ln\" d=\"M310,176 H462 V188\"/>\n  <text class=\"lbl\" x=\"150\" y=\"172\" text-anchor=\"end\">No</text>\n  <text class=\"lbl\" x=\"470\" y=\"172\" text-anchor=\"start\">Sí</text>\n  <rect class=\"b\" x=\"12\" y=\"188\" width=\"292\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"209.5\" text-anchor=\"middle\" font-weight=\"700\">Leve o moderada</text>\n  <text class=\"sub\" x=\"158\" y=\"221.5\" text-anchor=\"middle\">Control clínico y eco cada 3-5 años (leve) o 1-2 años (moderada)</text>\n  <rect class=\"dec\" x=\"316\" y=\"188\" width=\"292\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"209.5\" text-anchor=\"middle\" font-weight=\"700\">¿Síntomas, FEVI &lt; 50%, prueba de esfuerzo</text>\n  <text class=\"sub\" x=\"462\" y=\"221.5\" text-anchor=\"middle\">anormal o cirugía cardíaca por otra causa?</text>\n  <path class=\"ln\" d=\"M462,234 V250 H387 V262\"/>\n  <path class=\"ln\" d=\"M462,250 H537 V262\"/>\n  <text class=\"lbl\" x=\"380\" y=\"246\" text-anchor=\"end\">No</text>\n  <text class=\"lbl\" x=\"545\" y=\"246\" text-anchor=\"start\">Sí</text>\n  <rect class=\"b\" x=\"316\" y=\"262\" width=\"142\" height=\"52\" rx=\"3\"/>\n  <text class=\"t\" x=\"387\" y=\"281\" text-anchor=\"middle\" font-weight=\"700\">Asintomático severo</text>\n  <text class=\"sub\" x=\"387\" y=\"293\" text-anchor=\"middle\">Eco cada 6-12 meses</text>\n  <text class=\"sub\" x=\"387\" y=\"304\" text-anchor=\"middle\">Evitar esfuerzo máximo</text>\n  <rect class=\"acc\" x=\"466\" y=\"262\" width=\"142\" height=\"52\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"537\" y=\"281\" text-anchor=\"middle\" font-weight=\"700\">REEMPLAZO VALVULAR</text>\n  <text class=\"accS\" x=\"537\" y=\"293\" text-anchor=\"middle\">Indicado: no esperar</text>\n  <text class=\"accS\" x=\"537\" y=\"304\" text-anchor=\"middle\">al deterioro del VI</text>\n  <path class=\"ln\" d=\"M537,314 V332 H400 V346\"/>\n  <path class=\"ln\" d=\"M537,332 H537 V346\"/>\n  <path class=\"ln\" d=\"M537,332 H190 V346\"/>\n  <rect class=\"b\" x=\"12\" y=\"346\" width=\"190\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"107\" y=\"364.5\" text-anchor=\"middle\" font-weight=\"700\">Cirugía (SAVR)</text>\n  <text class=\"sub\" x=\"107\" y=\"376.5\" text-anchor=\"middle\">Menor de 65-75 años o bajo riesgo</text>\n  <text class=\"sub\" x=\"107\" y=\"387.5\" text-anchor=\"middle\">Prótesis mecánica: acenocumarol</text>\n  <text class=\"sub\" x=\"107\" y=\"398.5\" text-anchor=\"middle\">Biológica si ≥ 65-70 años</text>\n  <rect class=\"b\" x=\"310\" y=\"346\" width=\"180\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"400\" y=\"364.5\" text-anchor=\"middle\" font-weight=\"700\">TAVI</text>\n  <text class=\"sub\" x=\"400\" y=\"376.5\" text-anchor=\"middle\">≥ 75-80 años, frágil o</text>\n  <text class=\"sub\" x=\"400\" y=\"387.5\" text-anchor=\"middle\">riesgo quirúrgico alto/prohibitivo</text>\n  <text class=\"sub\" x=\"400\" y=\"398.5\" text-anchor=\"middle\">Anatomía favorable</text>\n  <rect class=\"warn\" x=\"498\" y=\"346\" width=\"110\" height=\"62\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"553\" y=\"364.5\" text-anchor=\"middle\" font-weight=\"700\">No operable</text>\n  <text class=\"warnT sub\" x=\"553\" y=\"376.5\" text-anchor=\"middle\">Valvuloplastía con</text>\n  <text class=\"warnT sub\" x=\"553\" y=\"387.5\" text-anchor=\"middle\">balón solo paliativa</text>\n  <text class=\"warnT sub\" x=\"553\" y=\"398.5\" text-anchor=\"middle\">o puente</text>\n</svg>"
    },
    "contexto": "La estenosis aórtica es la valvulopatía más frecuente en el adulto mayor y la que más veces aparece en el EUNACOM: casi siempre como un anciano con síncope, angina o disnea de esfuerzo y un soplo eyectivo que se irradia al cuello. El médico general debe reconocerla por el examen físico, pedir el ecocardiograma Doppler (primer examen, antes que la prueba de esfuerzo o la coronariografía), interpretar su informe y saber que, una vez que aparecen síntomas, el único tratamiento que cambia el pronóstico es reemplazar la válvula, y que la espera mata.",
    "contentSections": [
      {
        "subhead": "1. Etiología y Fisiopatología: la Sobrecarga de Presión",
        "paragraphs": [
          "La estenosis aórtica es una obstrucción fija a la salida del ventrículo izquierdo. En el adulto tiene tres causas. La <strong>degenerativa calcificada (senil)</strong> es la más frecuente en el mundo occidental y en Chile: predomina sobre los <strong>70 años</strong> y comparte factores de riesgo con la aterosclerosis (edad, hipertensión, dislipidemia, tabaco, insuficiencia renal), porque el proceso es una calcificación progresiva de una válvula trivalva normal. La <strong>válvula aórtica bicúspide congénita</strong> es la anomalía cardíaca congénita más prevalente (1 a 2% de la población, más en hombres): el flujo turbulento acelera la calcificación y la estenosis severa aparece a los <strong>40 a 60 años</strong>; por eso, en un paciente menor de 65 años sin fiebre reumática, la causa más probable es una bicúspide. La <strong>etiología reumática</strong>, hoy poco frecuente, casi siempre se acompaña de compromiso mitral.",
          "<em>Fisiopatología:</em> la obstrucción obliga al ventrículo a generar más presión para eyectar la sangre. Según la ley de Laplace (tensión de la pared = presión × radio / espesor), el ventrículo normaliza la tensión engrosando su pared: aparece una <strong>hipertrofia ventricular izquierda concéntrica</strong>, con la cavidad pequeña y la función sistólica conservada. El precio es una pared rígida, con <strong>disfunción diastólica</strong> y presiones de llenado altas, más dependiente de la contracción auricular (de ahí la intolerancia a la fibrilación auricular, que precipita la insuficiencia cardíaca), y un desequilibrio entre el consumo de oxígeno de una masa miocárdica aumentada y el flujo coronario, comprimido por la pared hipertrófica. Solo en etapas muy avanzadas el ventrículo se dilata y cae la fracción de eyección."
        ]
      },
      {
        "subhead": "2. La Tríada de Síntomas y la Historia Natural",
        "paragraphs": [
          "La estenosis aórtica tiene un <strong>largo período asintomático</strong>, durante el cual el riesgo de muerte súbita es bajo (menos de 1% al año) y el paciente se descubre por un soplo. Todo cambia cuando aparece <strong>cualquiera de los tres síntomas cardinales</strong>: la sobrevida cae de forma dramática si no se opera (curva clásica de Ross y Braunwald):",
          "• <strong>Angina de esfuerzo</strong> (sobrevida media aproximada de 5 años sin cirugía): por el desbalance entre la masa hipertrófica y el flujo coronario. Hasta la mitad de los pacientes con estenosis grave tiene además enfermedad coronaria, de modo que la angina no prueba por sí sola que las coronarias estén sanas ni enfermas.",
          "• <strong>Síncope de esfuerzo</strong> (aproximadamente 3 años): el gasto cardíaco fijo no puede aumentar cuando el ejercicio dilata los vasos de los músculos, la presión cae y baja el flujo cerebral; también contribuyen las arritmias y el reflejo de Bezold-Jarisch.",
          "• <strong>Disnea o insuficiencia cardíaca</strong> (aproximadamente 2 años): indica presiones de llenado muy altas y claudicación del ventrículo. Es la presentación de peor pronóstico.",
          "En el anciano el síncope y la disnea se confunden con el envejecimiento o con la cardiopatía coronaria: la regla para el examen es que <strong>un adulto mayor con angina, síncope o disnea de esfuerzo y un soplo sistólico se estudia primero con ecocardiograma</strong>, no con una prueba de esfuerzo ni una coronariografía. El <strong>síndrome de Heyde</strong> asocia la estenosis aórtica con sangrado digestivo por angiodisplasias (por una deficiencia adquirida del factor de von Willebrand) y se resuelve al reemplazar la válvula."
        ]
      },
      {
        "subhead": "3. Semiología: Pulso, Frémito, Soplo y Ruidos",
        "paragraphs": [
          "1) <strong>Pulso parvus et tardus (anácroto):</strong> pulso de amplitud pequeña (parvus) y ascenso lento con meseta prolongada (tardus), mejor palpado en las carótidas. La presión de pulso se estrecha en las etapas avanzadas, pero puede ser normal en el anciano con arterias rígidas.",
          "2) <strong>Choque de la punta sostenido</strong>, no desplazado hasta etapas avanzadas, por la hipertrofia concéntrica, y un <strong>frémito sistólico</strong> en el foco aórtico (2.º espacio intercostal derecho) y en el hueco supraesternal.",
          "3) <strong>Soplo sistólico eyectivo, rudo, en rombo (creciente-decreciente)</strong> en el foco aórtico, con <strong>irradiación bilateral a las carótidas</strong>. Mientras más grave la estenosis, más tardío es su pico, y el soplo puede oírse también en el ápex (fenómeno de Gallavardin). En la estenosis valvar de un joven con válvula bicúspide se oye además un clic eyectivo.",
          "4) <strong>Ruidos:</strong> el componente aórtico de R2 se <strong>apaga o desaparece</strong> (R2 único o inaudible) y puede haber desdoblamiento paradójico de R2; en la hipertrofia es frecuente un <strong>cuarto ruido (R4)</strong> por la contracción auricular contra un ventrículo rígido. Un soplo eyectivo con R2 conservado y pulso normal, en un anciano, es una esclerosis aórtica (calcificación sin obstrucción importante).",
          "El soplo disminuye con la maniobra de Valsalva y con el handgrip, y aumenta con las cuclillas y tras una pausa postextrasistólica; en eso se distingue de la miocardiopatía hipertrófica obstructiva, cuyo soplo aumenta con Valsalva y no se irradia a las carótidas. El soplo no mide la gravedad: se confía en el pulso, en R2 y en el ecocardiograma."
        ]
      },
      {
        "subhead": "4. Ecocardiografía, Electrocardiograma y Radiografía: Cómo Leer el Informe",
        "paragraphs": [
          "El <strong>ecocardiograma Doppler transtorácico</strong> es el examen diagnóstico de elección (código 1.01.4.006: el médico general lo solicita y emplea su informe). Muestra una válvula calcificada con apertura reducida (domo en sístole en la bicúspide), el grado de hipertrofia, la función sistólica y las otras valvas, y mide tres parámetros hemodinámicos:",
          "• <strong>Velocidad pico del chorro aórtico</strong> (la más reproducible), el <strong>gradiente medio transvalvular</strong> y el <strong>área valvular aórtica (AVA)</strong>, calculada con la ecuación de continuidad. La estenosis es <strong>severa si la velocidad pico es ≥ 4,0 m/s, el gradiente medio ≥ 40 mmHg o el AVA es ≤ 1,0 cm²</strong> (AVA indexada &lt; 0,6 cm²/m²); es moderada con velocidad de 3,0 a 3,9 m/s, gradiente de 25 a 39 mmHg y AVA de 1,0 a 1,5 cm²; leve bajo esos límites (Tabla 4.2). Un cociente adimensional (velocidad del tracto de salida / velocidad aórtica) &lt; 0,25 también es severo.",
          "• Cuando el AVA es pequeña pero el gradiente es bajo hay dos explicaciones: <strong>estenosis de bajo flujo y bajo gradiente con FEVI reducida</strong>, que se aclara con un ecocardiograma de estrés con dobutamina, o con FEVI normal («paradójica»), en un ventrículo pequeño e hipertrófico, de predominio femenino y de edad avanzada, que se completa con un score de calcio de la válvula por tomografía.",
          "El <strong>electrocardiograma</strong> muestra hipertrofia ventricular izquierda con alteración de la repolarización (sobrecarga o «strain»); la <strong>radiografía de tórax</strong> suele ser normal o con una silueta de ápex redondeado y dilatación postestenótica de la aorta ascendente, y el calcio valvular se ve a veces en la proyección lateral. Antes de la cirugía se estudian las coronarias con coronariografía (o angioTAC en los de bajo riesgo) en los hombres mayores de 40 años, mujeres posmenopáusicas y todo paciente con factores de riesgo o angina. <strong>La prueba de esfuerzo está contraindicada en el paciente sintomático con estenosis severa</strong>; en el asintomático se hace bajo vigilancia para desenmascarar síntomas o caída de la presión."
        ]
      },
      {
        "subhead": "5. Tratamiento: Cuándo y Cómo Reemplazar la Válvula",
        "paragraphs": [
          "<strong>No existe tratamiento médico que modifique la historia natural.</strong> Las estatinas no frenan la progresión. En el paciente hipertenso se tratan las cifras con cuidado (dosis bajas de IECA o ARA II, ajustadas lentamente), se evitan la deshidratación y los vasodilatadores potentes, y se usan los diuréticos con prudencia porque el ventrículo rígido depende de la precarga. Se recomienda evitar el esfuerzo máximo y los deportes de competición en los casos severos. <strong>No se indica profilaxis de endocarditis</strong> en la válvula nativa (sí en la prótesis).",
          "<strong>Indicaciones de reemplazo valvular en la estenosis severa:</strong> 1) <strong>todo paciente sintomático</strong> (angina, síncope o disnea), la indicación más fuerte, sin esperar; 2) asintomático con <strong>disfunción sistólica (FEVI &lt; 50%)</strong>; 3) asintomático que presenta <strong>síntomas o caída de la presión en una prueba de esfuerzo</strong> vigilada; 4) asintomático que se opera de otra cirugía cardíaca (by-pass, otra válvula o aorta); 5) en asintomáticos de bajo riesgo, se considera ante una velocidad pico ≥ 5 m/s, progresión rápida de la velocidad o un péptido natriurético muy elevado. Se deriva a cardiología y a un equipo valvular (<em>heart team</em>) para decidir la modalidad.",
          "<strong>Elección de la modalidad:</strong> el <strong>reemplazo valvular quirúrgico (SAVR)</strong> es de elección en el paciente más joven (menor de 65 a 75 años) con bajo riesgo operatorio, o cuando necesita otra cirugía cardíaca; la prótesis mecánica es duradera pero exige anticoagulación de por vida con acenocumarol, y la biológica evita la anticoagulación, pero se degenera (se prefiere sobre los 65 a 70 años). El <strong>implante percutáneo de válvula aórtica por catéter (TAVI)</strong> es de elección en los pacientes de <strong>75 a 80 años o más</strong>, frágiles, con riesgo quirúrgico intermedio o alto, o con comorbilidad que contraindica la cirugía, siempre que la anatomía lo permita; su disponibilidad depende de cada centro. La <strong>valvuloplastía con balón</strong> tiene un efecto transitorio (reestenosis en meses) y solo se usa como puente o paliación.",
          "<strong>Seguimiento:</strong> estenosis leve, control clínico y ecocardiograma cada 3 a 5 años; moderada, cada 1 a 2 años; severa asintomática, cada 6 a 12 meses y con indicación de consultar ante cualquier síntoma. Después de la cirugía se controla la prótesis con ecocardiograma basal y anual, y se mantiene la profilaxis de endocarditis ante procedimientos dentales. Si el paciente tiene una <strong>bicúspide</strong>, se vigila la aorta ascendente (suele estar dilatada) y se ofrece ecocardiograma a los familiares de primer grado."
        ]
      }
    ],
    "table": {
      "title": "Estratificación de la Severidad Ecocardiográfica de la Estenosis Aórtica",
      "headers": [
        "Parámetro hemodinámico",
        "Leve",
        "Moderada",
        "Severa (criterio de intervención)"
      ],
      "rows": [
        [
          "Velocidad pico del chorro",
          "2,6 a 2,9 m/s",
          "3,0 a 3,9 m/s",
          "≥ 4,0 m/s"
        ],
        [
          "Gradiente medio",
          "< 25 mmHg",
          "25 a 39 mmHg",
          "≥ 40 mmHg"
        ],
        [
          "Área valvular aórtica (AVA)",
          "> 1,5 cm²",
          "1,0 a 1,5 cm²",
          "≤ 1,0 cm² (indexada < 0,6 cm²/m²)"
        ],
        [
          "Cociente adimensional",
          "> 0,50",
          "0,25 a 0,50",
          "< 0,25"
        ]
      ]
    },
    "vignette": "Hombre de 78 años consulta por dos episodios de síncope ocurridos al apurar el paso para cruzar la calle. Al examen físico: PA 105/75 mmHg, pulsos carotídeos de ascenso lento y débil amplitud (parvus et tardus). A la auscultación destaca un soplo sistólico rudo eyectivo grado IV/VI en el 2.º espacio intercostal derecho que se irradia a ambos vasos del cuello, con segundo ruido cardíaco único y apagado. El ecocardiograma Doppler demuestra un área valvular aórtica de 0,7 cm², un gradiente medio de 48 mmHg y una FEVI de 60%.",
    "explicacion": "El paciente presenta una estenosis aórtica severa sintomática: síncope de esfuerzo, pulso parvus et tardus, soplo eyectivo irradiado a las carótidas con R2 apagado, AVA < 1,0 cm² y gradiente medio ≥ 40 mmHg. Aunque la FEVI es normal, la aparición de síntomas es indicación de reemplazo valvular sin esperar. A los 78 años, con riesgo quirúrgico intermedio o alto, la modalidad de elección es el implante percutáneo (TAVI) evaluado por el equipo valvular; la cirugía convencional es la alternativa si el riesgo es bajo. La prueba de esfuerzo está contraindicada y el tratamiento médico no mejora el pronóstico.",
    "keyPoints": [
      "Causas: degenerativa calcificada en mayores de 70 años y válvula bicúspide congénita (la más probable en menores de 65 años sin fiebre reumática).",
      "Tríada de síntomas con sobrevida sin cirugía: angina (5 años), síncope (3 años) y disnea o insuficiencia cardíaca (2 años).",
      "Semiología: pulso parvus et tardus, frémito, soplo eyectivo en rombo irradiado a las carótidas y R2 apagado o único; R4 frecuente.",
      "El soplo de la estenosis aórtica disminuye con Valsalva y handgrip; el de la miocardiopatía hipertrófica obstructiva aumenta con Valsalva.",
      "Severa: velocidad pico ≥ 4 m/s, gradiente medio ≥ 40 mmHg o AVA ≤ 1,0 cm² (< 0,6 cm²/m²). El ecocardiograma Doppler es el primer examen en el adulto mayor con soplo y angina o síncope.",
      "La prueba de esfuerzo está contraindicada en la estenosis severa sintomática; los vasodilatadores y diuréticos se usan con cautela.",
      "Reemplazo valvular ante síntomas, FEVI < 50%, prueba de esfuerzo anormal o cirugía cardíaca por otra causa: no existe tratamiento médico que cambie la historia natural.",
      "Cirugía (SAVR) en el menor de 65-75 años y de bajo riesgo; TAVI en ≥ 75-80 años, frágiles o de riesgo alto; sin profilaxis de endocarditis en la válvula nativa."
    ],
    "questions": [
      {
        "stem": "Un paciente de 80 años presenta disnea de esfuerzo de algunos meses de evolución, progresiva. Hace 24 horas sufre un síncope, con recuperación completa. Al examen físico tiene FC: 75x’, PA: 110/70 mmHg se palpa el choque de la punta en el 4° espacio intercostal, línea medio clavicular y se ausculta el corazón con presencia de soplo protomesosistólico III/VI y segundo ruido muy apagado. El examen pulmonar no muestra alteraciones. Se solicita un electrocardiograma, que muestra un ritmo sinusal con onda S de 23 mm en V2 y onda R de 16 mm en V5. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Estenosis aórtica"
          },
          {
            "id": "B",
            "text": "Estenosis mitral"
          },
          {
            "id": "C",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "D",
            "text": "Insuficiencia mitral"
          },
          {
            "id": "E",
            "text": "Cardiopatía coronaria"
          }
        ],
        "correcta": "A",
        "explicacion": "Anciano con disnea de esfuerzo y síncope, soplo eyectivo y segundo ruido muy apagado, con hipertrofia del ventrículo izquierdo en el ECG (S de V2 más R de V5 por sobre 35 mm): estenosis aórtica clásica. La estenosis mitral da un retumbo diastólico y las insuficiencias, soplos holosistólico o diastólico.",
        "recTag": "EUNACOM Diciembre 2019 · Pregunta 126"
      },
      {
        "stem": "Un paciente de 79 años presenta dolor torácico opresivo, que aparece al caminar y que cede con el reposo. Al examen físico se ausculta un soplo sistólico IV de VI, irradiado a la zona baja del cuello. El examen más adecuado para proseguir con su estudio es:",
        "options": [
          {
            "id": "A",
            "text": "Prueba de esfuerzo"
          },
          {
            "id": "B",
            "text": "Electrocardiograma"
          },
          {
            "id": "C",
            "text": "Coronariografía"
          },
          {
            "id": "D",
            "text": "AngioTAC de torax"
          },
          {
            "id": "E",
            "text": "Ecocardiografía doppler"
          }
        ],
        "correcta": "E",
        "explicacion": "Un anciano con dolor opresivo de esfuerzo parece tener una angina estable, pero el soplo sistólico IV/VI irradiado al cuello hace pensar en una estenosis aórtica, y el primer examen es el ecocardiograma Doppler. La prueba de esfuerzo está contraindicada si hay una estenosis severa y la coronariografía se hace después, como estudio preoperatorio.",
        "recTag": "EUNACOM Julio 2015 · Pregunta 56"
      },
      {
        "stem": "Un paciente de 20 años, con antecedente de soplo en su infancia, consulta por sensación de opresión precordial, que aparece al caminar, se asocia a disnea leve y que cede rápidamente con el reposo. Al examen físico tiene PA: 150/80 mmHg, FC: 63x’, pulso débil, regular, de ascenso lento. El examen cardíaco muestra un soplo sistólico eyectivo, paraesternal, que se irradia al cuello. Su electrocardiograma muestra signos de hipertrofia del ventrículo izquierdo. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Estenosis mitral"
          },
          {
            "id": "B",
            "text": "Estenosis aórtica"
          },
          {
            "id": "C",
            "text": "Insuficiencia mitral"
          },
          {
            "id": "D",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "E",
            "text": "Miocardiopatía hipertrófica"
          }
        ],
        "correcta": "B",
        "explicacion": "Un joven con soplo desde la infancia, angina de esfuerzo, pulso débil y de ascenso lento, soplo eyectivo que se irradia al cuello e hipertrofia ventricular tiene una estenosis aórtica, probablemente por válvula bicúspide. El pulso parvus et tardus la distingue de la miocardiopatía hipertrófica, que tiene pulso amplio y rápido.",
        "recTag": "EUNACOM Julio 2019 · Pregunta 101"
      },
      {
        "stem": "Hombre de 76 años consulta por disnea de esfuerzos progresiva y mareos. Al examen físico destaca un pulso carotídeo de baja amplitud y ascenso lento (parvus et tardus) y un soplo mesosistólico en foco aórtico irradiado a carótidas. Ecocardiograma: área valvular aórtica de 0,8 cm² y gradiente medio de 45 mmHg con FEVI de 55%. ¿Cuál es la conducta médica definitiva más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Reemplazo valvular aórtico percutáneo (TAVI) o quirúrgico"
          },
          {
            "id": "B",
            "text": "Tratamiento médico exclusivo con betabloqueadores y control anual"
          },
          {
            "id": "C",
            "text": "Iniciar enalapril y nitratos en dosis crecientes"
          },
          {
            "id": "D",
            "text": "Valvuloplastía aórtica con balón como tratamiento curativo definitivo"
          },
          {
            "id": "E",
            "text": "Test de esfuerzo convencional para medir capacidad funcional"
          }
        ],
        "correcta": "A",
        "explicacion": "Estenosis aórtica severa sintomática (AVA ≤ 1,0 cm² y gradiente medio ≥ 40 mmHg): la aparición de síntomas es una indicación formal de reemplazo valvular, percutáneo en el anciano o quirúrgico en el más joven. El tratamiento médico no cambia el pronóstico, los vasodilatadores pueden provocar hipotensión, la valvuloplastía con balón es solo paliativa y la prueba de esfuerzo está contraindicada.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Un paciente de 45 años, sin antecedente de fiebre reumática, tiene un soplo sistólico eyectivo en el foco aórtico con clic de eyección y un ecocardiograma que muestra estenosis aórtica con calcificación. ¿Cuál es la causa más probable de la estenosis?",
        "options": [
          {
            "id": "A",
            "text": "Válvula aórtica bicúspide congénita"
          },
          {
            "id": "B",
            "text": "Degeneración fibrocalcárea senil de una válvula normal"
          },
          {
            "id": "C",
            "text": "Endocarditis infecciosa previa por enterococo"
          },
          {
            "id": "D",
            "text": "Aterosclerosis de la raíz aórtica"
          },
          {
            "id": "E",
            "text": "Lupus eritematoso sistémico (endocarditis de Libman-Sacks)"
          }
        ],
        "correcta": "A",
        "explicacion": "En un paciente menor de 65 años sin fiebre reumática, la causa más frecuente de estenosis aórtica es la calcificación acelerada de una válvula bicúspide congénita; el clic de eyección apoya el diagnóstico. La calcificación degenerativa de una válvula trivalva predomina sobre los 70 años.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "4.1§0 · 4.1§1 · 4.1§2 · 4.1§3 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-24",
    "classId": "cardio-24",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Valvulopatías, Cardiopatías Congénitas y Endocarditis",
    "topicLabel": "4.3",
    "title": "Insuficiencia Aórtica: Signos Periféricos, Ecocardiograma e Indicación Quirúrgica",
    "perfilCode": "1.01.1.017",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía GES de cirugía de las válvulas aórtica, mitral y tricúspide (lesiones crónicas) en personas de 15 años y más",
    "reconstrucciones": "",
    "frecuencia": "Alta · Signos periféricos con su epónimo, soplo diastólico y Austin Flint, criterios ecocardiográficos de severidad, indicación quirúrgica y manejo de la forma aguda",
    "svg": null,
    "algoTitle": "Algoritmo de la insuficiencia aórtica",
    "diagram": {
      "title": "Algoritmo de la Insuficiencia Aórtica: Forma Aguda y Crónica, Ecocardiograma e Indicación Quirúrgica",
      "svg": "<svg viewBox=\"0 0 620 420\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar24\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar24)}\n  </style>\n  <rect class=\"b\" x=\"90\" y=\"6\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"24.5\" text-anchor=\"middle\" font-weight=\"700\">Soplo diastólico decreciente + presión de pulso amplia + pulsos saltones</text>\n  <text class=\"sub\" x=\"310\" y=\"36.5\" text-anchor=\"middle\">Disnea de esfuerzo, palpitaciones, angina; latido cervical visible</text>\n  <path class=\"ln\" d=\"M310,46 V62\"/>\n  <rect class=\"dec\" x=\"90\" y=\"62\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"80.5\" text-anchor=\"middle\" font-weight=\"700\">¿Aguda (dias) o crónica (años)?</text>\n  <text class=\"sub\" x=\"310\" y=\"92.5\" text-anchor=\"middle\">Aguda: endocarditis, disección aórtica tipo A, trauma · Crónica: bicúspide, raíz dilatada</text>\n  <path class=\"ln\" d=\"M310,102 V116 H158 V128\"/>\n  <path class=\"ln\" d=\"M310,116 H462 V128\"/>\n  <text class=\"lbl\" x=\"150\" y=\"112\" text-anchor=\"end\">Aguda</text>\n  <text class=\"lbl\" x=\"470\" y=\"112\" text-anchor=\"start\">Crónica</text>\n  <rect class=\"warn\" x=\"12\" y=\"128\" width=\"292\" height=\"66\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"158\" y=\"148.5\" text-anchor=\"middle\" font-weight=\"700\">URGENCIA QUIRÚRGICA</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"160.5\" text-anchor=\"middle\">VI no adaptado: edema pulmonar, taquicardia, shock</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"171.5\" text-anchor=\"middle\">Presión de pulso poco amplia, soplo corto y suave</text>\n  <text class=\"warnT sub\" x=\"158\" y=\"182.5\" text-anchor=\"middle\">Nitroprusiato + dobutamina; NO betabloqueador ni balón</text>\n  <rect class=\"dec\" x=\"316\" y=\"128\" width=\"292\" height=\"66\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"148.5\" text-anchor=\"middle\" font-weight=\"700\">Ecocardiograma Doppler color</text>\n  <text class=\"sub\" x=\"462\" y=\"160.5\" text-anchor=\"middle\">Severa: vena contracta &gt; 6 mm · chorro &gt; 65% del tracto</text>\n  <text class=\"sub\" x=\"462\" y=\"171.5\" text-anchor=\"middle\">Vol. regurgitante ≥ 60 mL · fracción ≥ 50%</text>\n  <text class=\"sub\" x=\"462\" y=\"182.5\" text-anchor=\"middle\">Medir DFSVI, FEVI y raíz aórtica</text>\n  <path class=\"ln\" d=\"M462,194 V212\"/>\n  <rect class=\"dec\" x=\"316\" y=\"212\" width=\"292\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"230.5\" text-anchor=\"middle\" font-weight=\"700\">¿Síntomas, FEVI ≤ 55% o DFSVI &gt; 50 mm?</text>\n  <text class=\"sub\" x=\"462\" y=\"242.5\" text-anchor=\"middle\">(&gt; 25 mm/m²) o cirugía cardíaca por otra causa</text>\n  <path class=\"ln\" d=\"M462,252 V266 H387 V278\"/>\n  <path class=\"ln\" d=\"M462,266 H537 V278\"/>\n  <text class=\"lbl\" x=\"380\" y=\"262\" text-anchor=\"end\">No</text>\n  <text class=\"lbl\" x=\"545\" y=\"262\" text-anchor=\"start\">Sí</text>\n  <rect class=\"b\" x=\"316\" y=\"278\" width=\"142\" height=\"62\" rx=\"3\"/>\n  <text class=\"t\" x=\"387\" y=\"296.5\" text-anchor=\"middle\" font-weight=\"700\">Seguimiento</text>\n  <text class=\"sub\" x=\"387\" y=\"308.5\" text-anchor=\"middle\">Vasodilatador si HTA</text>\n  <text class=\"sub\" x=\"387\" y=\"319.5\" text-anchor=\"middle\">(IECA, nifedipino)</text>\n  <text class=\"sub\" x=\"387\" y=\"330.5\" text-anchor=\"middle\">Eco cada 6-12 meses</text>\n  <rect class=\"acc\" x=\"466\" y=\"278\" width=\"142\" height=\"62\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"537\" y=\"302\" text-anchor=\"middle\" font-weight=\"700\">REEMPLAZO VALVULAR</text>\n  <text class=\"accS\" x=\"537\" y=\"314\" text-anchor=\"middle\">Antes de que el VI</text>\n  <text class=\"accS\" x=\"537\" y=\"325\" text-anchor=\"middle\">se deteriore</text>\n  <rect class=\"b\" x=\"12\" y=\"212\" width=\"292\" height=\"60\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"229.5\" text-anchor=\"middle\" font-weight=\"700\">Cirugía de la raíz aórtica</text>\n  <text class=\"sub\" x=\"158\" y=\"241.5\" text-anchor=\"middle\">Aorta ascendente ≥ 55 mm</text>\n  <text class=\"sub\" x=\"158\" y=\"252.5\" text-anchor=\"middle\">(≥ 45-50 mm en Marfan o bicúspide)</text>\n  <text class=\"sub\" x=\"158\" y=\"263.5\" text-anchor=\"middle\">Reparar o reemplazar válvula y aorta</text>\n</svg>"
    },
    "contexto": "La insuficiencia aórtica es, junto con la estenosis aórtica, la valvulopatía izquierda que más se pregunta en el EUNACOM, y casi siempre como un diagnóstico por semiología: presión de pulso amplia, pulsos saltones, un soplo diastólico decreciente y los signos con nombre propio (Corrigan, Musset, Quincke). El médico general debe reconocerla, buscar su causa (la raíz aórtica, la válvula bicúspide, la endocarditis), pedir el ecocardiograma, no operar ni medicar de más al asintomático con ventrículo normal, y reconocer la forma aguda, que es una urgencia quirúrgica.",
    "contentSections": [
      {
        "subhead": "1. Etiología y Fisiopatología: Sobrecarga de Volumen y Presión",
        "paragraphs": [
          "La insuficiencia aórtica (IAo) es el reflujo diastólico de sangre desde la aorta hacia el ventrículo izquierdo por una válvula que no cierra bien o por una raíz aórtica dilatada que separa las valvas. Se clasifica según el mecanismo. <strong>Enfermedad de las valvas:</strong> válvula bicúspide, endocarditis, fiebre reumática, degeneración, anorexígenos, lupus. <strong>Enfermedad de la raíz aórtica</strong> (hoy la causa más frecuente en los países desarrollados): hipertensión arterial, dilatación anuloaórtica del anciano, <strong>síndrome de Marfan</strong> y otras enfermedades del tejido conectivo, <strong>disección aórtica tipo A</strong>, aortitis sifilítica, espondiloartropatías (espondilitis anquilosante), arteritis de Takayasu o de células gigantes.",
          "La distinción más importante es entre <strong>IAo crónica</strong>, bien tolerada durante décadas, e <strong>IAo aguda</strong>, una catástrofe hemodinámica. En la forma crónica el ventrículo recibe en cada diástole el volumen que regurgita más el que viene de la aurícula: se dilata con crecimiento «en serie» de los sarcómeros (hipertrofia excéntrica) y logra un volumen de eyección enorme. Esto explica la <strong>presión arterial divergente</strong>: la sistólica sube por el gran volumen eyectado y la diastólica cae (puede acercarse a 0 mmHg) porque la sangre se devuelve al ventrículo y la aorta se vacía. Con los años el ventrículo claudica: aumentan el volumen de fin de sístole y la presión de llenado y cae la fracción de eyección, a veces antes de que aparezcan síntomas.",
          "La presión diastólica baja y la presión de llenado alta reducen la perfusión coronaria, que ocurre en diástole: de ahí la <strong>angina</strong> aun con coronarias sanas, a menudo nocturna, con sudoración, por la bradicardia del sueño que alarga la diástole y aumenta el volumen regurgitante."
        ]
      },
      {
        "subhead": "2. Clínica y Semiología: los Signos Periféricos",
        "paragraphs": [
          "La IAo crónica es <strong>asintomática por años</strong>. Los síntomas (disnea de esfuerzo, ortopnea, fatiga, palpitaciones por el latido fuerte del corazón, angina) aparecen tarde, cuando el ventrículo ya claudica, y son una indicación de cirugía. Por eso se pregunta tanto la semiología. El <strong>choque de la punta</strong> es amplio, hiperdinámico y desplazado hacia abajo y afuera (la línea axilar media), y se palpa el latido de las carótidas y de la yugular.",
          "<strong>Signos periféricos (alto rendimiento en el examen):</strong> 1) <strong>Pulso saltón, céler o de Corrigan</strong> («en martillo de agua»): asciende con extrema rapidez y colapsa de golpe; 2) <strong>Signo de Musset</strong>: oscilación de la cabeza sincrónica con cada latido; 3) <strong>Signo de Quincke</strong>: pulsación capilar visible en el lecho ungueal al presionar levemente la uña; 4) <strong>Signo de Müller</strong>: pulsación sistólica de la úvula; 5) <strong>Signo de Traube</strong>: ruido «de pistoletazo» sobre la arteria femoral; 6) <strong>Signo de Duroziez</strong>: doble soplo sistodiastólico al comprimir parcialmente la arteria femoral con el estetoscopio; 7) <strong>Signo de Hill</strong>: la presión de la arteria poplítea supera a la braquial en más de 60 mmHg, el signo más sensible de gravedad.",
          "<strong>Auscultación:</strong> el soplo es <strong>diastólico, decreciente, aspirativo, de tono alto</strong>, que empieza inmediatamente después de R2 y se oye mejor en el borde esternal izquierdo (3.º-4.º espacio) con el paciente sentado e inclinado hacia delante, en espiración sostenida; aumenta con el handgrip. Cuanto más grave la regurgitación, más largo el soplo y más rápido su decrecimiento (la presión diastólica de la aorta y del ventrículo se igualan). Se asocia un <strong>soplo sistólico eyectivo</strong> por el gran volumen eyectado (no implica estenosis) y, en la insuficiencia grave, el <strong>soplo de Austin Flint</strong>: un retumbo mesodiastólico apical producido porque el chorro regurgitante choca contra la valva anterior de la mitral y limita su apertura; se diferencia de la estenosis mitral porque no tiene chasquido de apertura ni R1 intenso. Puede haber un tercer ruido (R3) por la sobrecarga de volumen."
        ]
      },
      {
        "subhead": "3. Estudio: Ecocardiograma Doppler Color y Otros Exámenes",
        "paragraphs": [
          "El diagnóstico y la gravedad se establecen con el <strong>ecocardiograma Doppler color</strong>, que muestra el chorro regurgitante diastólico hacia el ventrículo izquierdo en los ejes paraesternales largo y corto, define el mecanismo (válvula bicúspide, prolapso de una valva, vegetación, disección) y mide el ventrículo y la raíz. La regurgitación es <strong>severa</strong> si la <strong>vena contracta es &gt; 6 mm</strong>, el ancho del chorro ocupa &gt; 65% del tracto de salida, el <strong>volumen regurgitante es ≥ 60 mL por latido</strong> o la <strong>fracción regurgitante ≥ 50%</strong>, hay reflujo holodiastólico en la aorta descendente o el tiempo de hemipresión es &lt; 200 ms. Se miden además el <strong>diámetro de fin de sístole (DFSVI)</strong>, el de fin de diástole, la <strong>FEVI</strong> y los diámetros de la raíz y de la aorta ascendente. La resonancia magnética cuantifica la regurgitación cuando el ecocardiograma no es concluyente, y el angioTAC de aorta estudia la raíz.",
          "La <strong>radiografía de tórax</strong> muestra cardiomegalia con ventrículo izquierdo «en bota» (<em>cor bovinum</em>) y una aorta dilatada o elongada; el <strong>electrocardiograma</strong>, hipertrofia ventricular izquierda. Siempre se busca la causa: válvula bicúspide, dilatación de la raíz, síndrome de Marfan (estigmas, antecedentes familiares), endocarditis (fiebre, soplo cambiante, hemocultivos), disección aórtica tipo A (dolor torácico lancinante), sífilis (serología) y enfermedades reumatológicas."
        ]
      },
      {
        "subhead": "4. Tratamiento de la Insuficiencia Aórtica Crónica e Indicación Quirúrgica",
        "paragraphs": [
          "El paciente <strong>asintomático con ventrículo de tamaño y función normales no se opera</strong>. Se controla la presión arterial con <strong>vasodilatadores (IECA o ARA II, o calcioantagonistas dihidropiridínicos como amlodipino o nifedipino)</strong> con meta &lt; 130/80 mmHg, se trata la causa y se repite el ecocardiograma cada 6 a 12 meses si es severa (cada 1 a 2 años si es moderada, cada 3 a 5 si es leve). Los betabloqueadores se usan con cautela: la bradicardia alarga la diástole y aumenta el volumen regurgitante. El tratamiento médico no cambia la historia natural: no reemplaza la cirugía cuando hay indicación. En la insuficiencia cardíaca sintomática se agregan diuréticos e IECA como puente a la cirugía. No se indica profilaxis de endocarditis en la válvula nativa. Se deriva siempre a cardiología.",
          "<strong>Indicaciones de reemplazo valvular aórtico (SAVR):</strong> 1) IAo severa <strong>sintomática</strong> (disnea, angina o síncope), aunque la FEVI sea normal; 2) IAo severa asintomática con <strong>FEVI ≤ 55%</strong> (≤ 50% en la guía europea); 3) IAo severa asintomática con <strong>DFSVI &gt; 50 mm</strong> (o &gt; 25 mm/m²) o dilatación progresiva del VI; 4) IAo severa en un paciente que se opera por otra causa cardíaca (by-pass, otra válvula); 5) dilatación de la raíz o de la aorta ascendente ≥ 55 mm (≥ 45 a 50 mm si hay síndrome de Marfan o válvula bicúspide), con cirugía de la aorta. El implante percutáneo (TAVI) se reserva para casos seleccionados de alto riesgo quirúrgico. <strong>La derivación debe ser antes de la disfunción del VI</strong>, porque la FEVI se recupera mal si se opera tarde: el asintomático sigue un control ecocardiográfico estricto para no pasar por alto el momento."
        ]
      },
      {
        "subhead": "5. Insuficiencia Aórtica Aguda: una Urgencia Quirúrgica",
        "paragraphs": [
          "Las causas son la <strong>endocarditis</strong>, la <strong>disección aórtica tipo A</strong> y el traumatismo torácico. El ventrículo no está dilatado ni adaptado: el volumen regurgitante eleva bruscamente la presión de fin de diástole, la presión del aurícula y la presión capilar pulmonar, con <strong>edema pulmonar, taquicardia y shock cardiogénico</strong>. Los signos periféricos faltan: la <strong>presión de pulso es poco amplia</strong>, el soplo diastólico es corto y suave, y R1 está disminuido por el cierre prematuro de la válvula mitral, que se ve en el ecocardiograma.",
          "Es una <strong>emergencia quirúrgica</strong>. Mientras se traslada: diuréticos, <strong>vasodilatadores (nitroprusiato) e inotrópicos (dobutamina)</strong>; se <strong>evitan los betabloqueadores</strong> (suprimen la taquicardia compensadora) y está <strong>contraindicado el balón de contrapulsación aórtico</strong>, que empeora el reflujo diastólico. Si la causa es una disección, el tratamiento es el de la disección tipo A (cirugía urgente, nunca trombolisis)."
        ]
      },
      {
        "subhead": "6. Diagnóstico Diferencial, Causas Especiales y Seguimiento",
        "paragraphs": [
          "Frente a un soplo diastólico en el borde esternal izquierdo, la alternativa principal es la <strong>insuficiencia pulmonar</strong> (soplo de Graham Steell, con hipertensión pulmonar, que aumenta con la inspiración) y la <strong>estenosis mitral</strong>, cuyo retumbo apical se confunde con el Austin Flint; esta última tiene R1 intenso, chasquido de apertura, pulso pequeño y presión de pulso normal. La presión de pulso amplia también aparece en el hipertiroidismo, la anemia, la fístula arteriovenosa, el embarazo, el ductus arterioso y la insuficiencia hepática; pero ahí no hay soplo diastólico decreciente aórtico.",
          "En el <strong>síndrome de Marfan</strong> (talla alta, aracnodactilia, ectopia del cristalino, escoliosis, prolapso mitral) la dilatación de la raíz se vigila con ecocardiograma al menos anual, con losartán o betabloqueador para enlentecer la dilatación, y se opera con un diámetro ≥ 45 a 50 mm; el embarazo se desaconseja si la raíz supera 40 a 45 mm. En la <strong>sífilis terciaria</strong> la aortitis produce una raíz dilatada con calcificación «en cáscara de huevo» de la aorta ascendente y se trata con penicilina, además de la cirugía si corresponde. En la <strong>válvula bicúspide</strong> la insuficiencia puede ser la lesión principal o acompañar a la estenosis, y se asocia a coartación y a dilatación de la aorta ascendente.",
          "La insuficiencia aórtica moderada o severa bien tolerada puede acompañar un embarazo con vigilancia cardiológica. El seguimiento combina la clínica (cualquier síntoma obliga a consultar), la presión arterial y el ecocardiograma con las mismas medidas de cada visita (DFSVI, FEVI, raíz), porque la decisión quirúrgica se basa en la tendencia: un DFSVI que crece o una FEVI que baja 5 puntos adelantan la cirugía aunque el paciente no tenga síntomas."
        ]
      }
    ],
    "table": {
      "title": "Signos Periféricos de la Insuficiencia Aórtica Crónica: Epónimo y Hallazgo",
      "headers": [
        "Signo",
        "Hallazgo",
        "Mecanismo"
      ],
      "rows": [
        [
          "Corrigan (pulso saltón, céler)",
          "Ascenso rápido y colapso brusco del pulso",
          "Gran volumen eyectado y fuga diastólica"
        ],
        [
          "Musset",
          "Cabeceo rítmico con cada latido",
          "Pulsación transmitida a las carótidas"
        ],
        [
          "Quincke",
          "Pulsación capilar visible en el lecho ungueal",
          "Presión de pulso amplia"
        ],
        [
          "Müller",
          "Pulsación sistólica de la úvula",
          "Presión de pulso amplia"
        ],
        [
          "Traube",
          "Ruido de pistoletazo sobre la femoral",
          "Distensión brusca de la arteria"
        ],
        [
          "Duroziez",
          "Doble soplo sistodiastólico al comprimir la femoral",
          "Flujo anterógrado y retrógrado"
        ],
        [
          "Hill",
          "Presión poplítea > braquial en > 60 mmHg",
          "El más sensible para valorar la gravedad"
        ],
        [
          "Austin Flint",
          "Retumbo mesodiastólico apical sin chasquido",
          "El chorro choca contra la valva mitral anterior"
        ]
      ]
    },
    "vignette": "Hombre de 48 años, hipertenso, alto y delgado, consulta por disnea de esfuerzo progresiva de 6 meses y palpitaciones. Examen: PA 170/45 mmHg, FC 88 lpm, pulso de ascenso rápido y colapso súbito, oscilación rítmica de la cabeza, pulsación capilar visible en las uñas. El choque de la punta está desplazado a la línea axilar media y se ausculta un soplo diastólico decreciente en el borde esternal izquierdo. El ecocardiograma muestra insuficiencia aórtica severa por dilatación de la raíz, con DFSVI de 54 mm y FEVI de 52%.",
    "explicacion": "Se trata de una insuficiencia aórtica crónica severa con signos periféricos clásicos (Corrigan, Musset, Quincke y presión divergente) por dilatación de la raíz aórtica. Está sintomático, tiene un DFSVI mayor de 50 mm y una FEVI limítrofe: es indicación de reemplazo valvular aórtico (con evaluación de la raíz) por cardiología, antes de que el ventrículo se deteriore más. Mientras tanto se controla la presión con vasodilatadores (IECA o nifedipino) y se evita la bradicardia con betabloqueadores en dosis altas.",
    "keyPoints": [
      "Presión de pulso amplia (por ejemplo 170/45 mmHg) con pulso saltón de Corrigan, Musset y Quincke es insuficiencia aórtica; el signo de Hill > 60 mmHg es el más sensible de gravedad.",
      "El soplo es diastólico, decreciente y aspirativo, mejor audible con el paciente sentado e inclinado hacia delante, en espiración; el Austin Flint es un retumbo apical sin chasquido de apertura.",
      "Causas: raíz dilatada (hipertensión, Marfan, disección tipo A, sífilis, espondiloartritis) y valvulares (bicúspide, endocarditis, fiebre reumática).",
      "Ecocardiograma Doppler color: severa si vena contracta > 6 mm, chorro > 65% del tracto de salida, volumen regurgitante ≥ 60 mL o fracción regurgitante ≥ 50%.",
      "El asintomático con VI normal no se opera: vasodilatadores (IECA o dihidropiridínicos) con meta < 130/80 mmHg y ecocardiograma cada 6-12 meses.",
      "Cirugía si hay síntomas, FEVI ≤ 55%, DFSVI > 50 mm (> 25 mm/m²), cirugía cardíaca por otra causa o aorta ascendente ≥ 55 mm (≥ 45-50 mm en Marfan o bicúspide).",
      "La insuficiencia aórtica aguda (endocarditis, disección tipo A) da edema pulmonar y shock con presión de pulso poco amplia: cirugía urgente; evitar betabloqueadores y balón de contrapulsación.",
      "Los betabloqueadores se usan con cautela: la bradicardia alarga la diástole y aumenta la regurgitación."
    ],
    "questions": [
      {
        "stem": "Una paciente de 81 años consulta por disnea de esfuerzos, progresiva, asociada a paroxística nocturna y ortopnea. Al examen físico se objetiva PA: 160/60 mmHg, con pulso regular, amplio, a 72 lpm. Su examen cardíaco muestra desplazamiento del choque cardíaco, con presencia de un soplo intenso, entre el segundo y el primer ruido cardíaco, que se irradia al cuello. El examen pulmonar muestra crepitaciones escasas, en ambas bases. El diagnóstico de sospecha es:",
        "options": [
          {
            "id": "A",
            "text": "Insuficiencia tricuspídea"
          },
          {
            "id": "B",
            "text": "Estenosis aórtica"
          },
          {
            "id": "C",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "D",
            "text": "Estenosis mitral"
          },
          {
            "id": "E",
            "text": "Insuficiencia mitral"
          }
        ],
        "correcta": "C",
        "explicacion": "Presión de pulso amplia (160/60 mmHg), pulso amplio, choque de la punta desplazado y un soplo diastólico que parte tras R2 y se irradia: insuficiencia aórtica. La estenosis aórtica tiene un soplo sistólico y pulso débil. El enunciado dice «soplo entre el segundo y el primer ruido», es decir, diastólico.",
        "recTag": "EUNACOM Julio 2018 · Pregunta 71"
      },
      {
        "stem": "Adulto con disnea de esfuerzos progresiva, diferencia PA sistólica-diastólica amplia, pulsos amplios y soplo diastólico aspirativo. ¿Diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Estenosis aórtica severa"
          },
          {
            "id": "B",
            "text": "Estenosis mitral con hipertensión pulmonar"
          },
          {
            "id": "C",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "D",
            "text": "Insuficiencia mitral crónica"
          },
          {
            "id": "E",
            "text": "Comunicación interventricular del adulto"
          }
        ],
        "correcta": "C",
        "explicacion": "Disnea de esfuerzo, presión de pulso amplia, pulsos amplios y soplo diastólico aspirativo es una insuficiencia aórtica. La estenosis aórtica tiene pulso débil y soplo sistólico; la insuficiencia mitral, un soplo holosistólico.",
        "recTag": "EUNACOM Enero 2023 · Pregunta 147"
      },
      {
        "stem": "Un paciente masculino de 23 años, sin antecedentes de importancia consulta por disnea de esfuerzos e intolerancia al ejercicio, progresiva, que actualmente le obligan a caminar más lento. Al examen físico tiene FC: 88x’, PA: 150/55 mmHg, choque de la punta en la línea axilar media y latido cervical visible. La auscultación cardíaca muestra ritmo regular, en dos tiempos, con un soplo diastólico IV/VI, con frémito. Al examen pulmonar, se constatan crépitos pulmonares. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Insuficiencia mitral"
          },
          {
            "id": "B",
            "text": "Estenosis aórtica"
          },
          {
            "id": "C",
            "text": "Estenosis mitral"
          },
          {
            "id": "D",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "E",
            "text": "Miocardiopatía hipertrófica"
          }
        ],
        "correcta": "D",
        "explicacion": "Un joven con PA 150/55 mmHg (presión de pulso amplia), choque de la punta en la línea axilar media, latido cervical visible y un soplo diastólico con frémito tiene una insuficiencia aórtica severa con insuficiencia cardíaca. Se confirma con ecocardiograma Doppler y se deriva para cirugía.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 2"
      },
      {
        "stem": "Un paciente de 18 años, con antecedente de coartación aórtica, operada en la infancia, consulta por disnea de esfuerzos, que ha ido en aumento, desde hace 2 meses. Además, refiere edema de extremidades inferiores y palpitaciones ocasionales. Al examen físico tiene FC: 88x’, PA: 155/55 mmHg, el choque de la punta se palpa hiperdinámico, en la línea media axilar y en la auscultación cardíaca se constata soplo sistólico eyectivo II/VI, más un soplo diastólico III/VI, que dura toda la diástole. Su examen pulmonar muestra crépitos escasos en ambas bases. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Estenosis aórtica"
          },
          {
            "id": "B",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "C",
            "text": "Recoartación aórtica"
          },
          {
            "id": "D",
            "text": "Miocardiopatía hipertrófica obstructiva"
          },
          {
            "id": "E",
            "text": "Miocardiopatía dilatada"
          }
        ],
        "correcta": "B",
        "explicacion": "Un adulto joven operado de coartación aórtica en la infancia, con PA 155/55 mmHg, choque hiperdinámico y un soplo diastólico de toda la diástole, tiene una insuficiencia aórtica (la coartación se asocia a válvula bicúspide). La recoartación daría hipertensión con diferencia de presión entre brazos y piernas, sin soplo diastólico.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 91"
      },
      {
        "stem": "Una mujer de 40 años con síndrome de Marfan y una insuficiencia aórtica severa asintomática tiene un ecocardiograma con FEVI 62%, diámetro de fin de sístole del ventrículo izquierdo 41 mm y diámetro de la aorta ascendente de 52 mm. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Control con vasodilatadores y ecocardiograma anual"
          },
          {
            "id": "B",
            "text": "Derivar para cirugía de la aorta y de la válvula aórtica"
          },
          {
            "id": "C",
            "text": "Betabloqueador en dosis altas hasta una frecuencia de 50 lpm"
          },
          {
            "id": "D",
            "text": "Profilaxis antibiótica con penicilina benzatina mensual"
          },
          {
            "id": "E",
            "text": "Balón de contrapulsación aórtico"
          }
        ],
        "correcta": "B",
        "explicacion": "En un paciente con síndrome de Marfan, una aorta ascendente de 45 a 50 mm o más es indicación de cirugía de la raíz, y se aprovecha de tratar la válvula. Aunque está asintomática y con ventrículo normal, la dilatación de la aorta define la indicación. El betabloqueador en dosis altas aumenta el volumen regurgitante, y el balón de contrapulsación está contraindicado en la insuficiencia aórtica.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Un hombre de 55 años con endocarditis aórtica presenta de forma súbita disnea intensa, edema pulmonar y PA 90/60 mmHg. Se ausculta un soplo diastólico corto y suave, y R1 está disminuido. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Betabloqueador endovenoso para disminuir la frecuencia cardíaca"
          },
          {
            "id": "B",
            "text": "Balón de contrapulsación aórtico"
          },
          {
            "id": "C",
            "text": "Vasodilatador (nitroprusiato), diurético y traslado para cirugía urgente"
          },
          {
            "id": "D",
            "text": "Antibióticos y observación en sala"
          },
          {
            "id": "E",
            "text": "Anticoagulación con heparina"
          }
        ],
        "correcta": "C",
        "explicacion": "Es una insuficiencia aórtica aguda: el ventrículo no está adaptado y hay edema pulmonar y shock con un soplo corto. Se estabiliza con nitroprusiato, diuréticos o inotrópicos y se opera con urgencia. Los betabloqueadores y el balón de contrapulsación empeoran la regurgitación.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "4.2§0 · 4.2§2 (reescrito y ampliado al estándar, oct-2026; la comparación con la estenosis mitral pasó al tema 4.4)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-25",
    "classId": "cardio-25",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Valvulopatías, Cardiopatías Congénitas y Endocarditis",
    "topicLabel": "4.4",
    "title": "Fiebre Reumática, Prevención y Estenosis Mitral Reumática",
    "perfilCode": "1.01.1.010, 1.01.1.008, 1.01.3.005",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía GES de cirugía de las válvulas aórtica, mitral y tricúspide (lesiones crónicas) en personas de 15 años y más; la fiebre reumática no tiene garantía GES propia",
    "reconstrucciones": "",
    "frecuencia": "Alta · Criterios de Jones, tratamiento de la fiebre reumática (penicilina benzatina, aspirina, corticoides), profilaxis primaria y secundaria con su duración, semiología de la estenosis mitral, anticoagulación y valvuloplastía con puntaje de Wilkins",
    "svg": null,
    "algoTitle": "Algoritmo de la fiebre reumática y la estenosis mitral",
    "diagram": {
      "title": "De la Faringitis Estreptocócica a la Estenosis Mitral: Jones, Tratamiento, Profilaxis y Valvuloplastía",
      "svg": "<svg viewBox=\"0 0 620 470\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar25\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar25)}\n  </style>\n  <rect class=\"b\" x=\"40\" y=\"6\" width=\"540\" height=\"36\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"22.5\" text-anchor=\"middle\" font-weight=\"700\">Faringoamigdalitis por estreptococo del grupo A (niño de 5 a 15 años)</text>\n  <text class=\"sub\" x=\"310\" y=\"34.5\" text-anchor=\"middle\">Sin tratamiento: fiebre reumática 2 a 4 semanas después (mimetismo molecular con la proteína M)</text>\n  <text class=\"lbl\" x=\"318\" y=\"56\" text-anchor=\"middle\">Prevención primaria: antibiótico en ≤ 9 días del inicio</text>\n  <path class=\"ln\" d=\"M310,42 V60\"/>\n  <path class=\"ln\" d=\"M310,60 V72\"/>\n  <rect class=\"dec\" x=\"60\" y=\"72\" width=\"500\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"90.5\" text-anchor=\"middle\" font-weight=\"700\">Fiebre reumática aguda: criterios de Jones</text>\n  <text class=\"sub\" x=\"310\" y=\"102.5\" text-anchor=\"middle\">2 mayores, o 1 mayor + 2 menores, con evidencia de estreptococo previo (ASO, anti-DNasa B, cultivo)</text>\n  <path class=\"ln\" d=\"M310,112 V128\"/>\n  <rect class=\"b\" x=\"12\" y=\"128\" width=\"596\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"149.5\" text-anchor=\"middle\" font-weight=\"700\">Mayores: carditis · poliartritis migratoria · corea de Sydenham · eritema marginado · nódulos subcutáneos</text>\n  <text class=\"sub\" x=\"310\" y=\"161.5\" text-anchor=\"middle\">Menores: fiebre · artralgias · VHS/PCR elevadas · PR prolongado</text>\n  <path class=\"ln\" d=\"M310,174 V190 H158 V200\"/>\n  <path class=\"ln\" d=\"M310,190 H462 V200\"/>\n  <rect class=\"acc\" x=\"12\" y=\"200\" width=\"292\" height=\"62\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"218.5\" text-anchor=\"middle\" font-weight=\"700\">TRATAMIENTO AGUDO</text>\n  <text class=\"accS\" x=\"158\" y=\"230.5\" text-anchor=\"middle\">Penicilina benzatina 1.200.000 UI IM (dosis única)</text>\n  <text class=\"accS\" x=\"158\" y=\"241.5\" text-anchor=\"middle\">Aspirina 80-100 mg/kg/día para la artritis</text>\n  <text class=\"accS\" x=\"158\" y=\"252.5\" text-anchor=\"middle\">Prednisona 1-2 mg/kg si carditis moderada o grave</text>\n  <rect class=\"acc\" x=\"316\" y=\"200\" width=\"292\" height=\"62\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"462\" y=\"218.5\" text-anchor=\"middle\" font-weight=\"700\">PREVENCIÓN SECUNDARIA</text>\n  <text class=\"accS\" x=\"462\" y=\"230.5\" text-anchor=\"middle\">Penicilina benzatina 1.200.000 UI IM cada 3-4 semanas</text>\n  <text class=\"accS\" x=\"462\" y=\"241.5\" text-anchor=\"middle\">Sin carditis: 5 años o hasta los 21</text>\n  <text class=\"accS\" x=\"462\" y=\"252.5\" text-anchor=\"middle\">Carditis con secuela: 10 años o hasta los 40</text>\n  <path class=\"ln\" d=\"M462,262 V284\"/>\n  <rect class=\"b\" x=\"316\" y=\"284\" width=\"292\" height=\"46\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"305.5\" text-anchor=\"middle\" font-weight=\"700\">Años después: estenosis mitral reumática</text>\n  <text class=\"sub\" x=\"462\" y=\"317.5\" text-anchor=\"middle\">Valvas fusionadas, AI dilatada, FA, embolias</text>\n  <path class=\"ln\" d=\"M462,330 V346\"/>\n  <rect class=\"dec\" x=\"316\" y=\"346\" width=\"292\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"364.5\" text-anchor=\"middle\" font-weight=\"700\">ECO: AVA ≤ 1,5 cm² y síntomas</text>\n  <text class=\"sub\" x=\"462\" y=\"376.5\" text-anchor=\"middle\">¿Wilkins ≤ 8, sin trombo ni IM &gt; 2+?</text>\n  <path class=\"ln\" d=\"M462,386 V400 H387 V412\"/>\n  <path class=\"ln\" d=\"M462,400 H537 V412\"/>\n  <text class=\"lbl\" x=\"380\" y=\"396\" text-anchor=\"end\">Sí</text>\n  <text class=\"lbl\" x=\"545\" y=\"396\" text-anchor=\"start\">No</text>\n  <rect class=\"acc\" x=\"316\" y=\"412\" width=\"142\" height=\"46\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"387\" y=\"433.5\" text-anchor=\"middle\" font-weight=\"700\">Valvuloplastía</text>\n  <text class=\"accS\" x=\"387\" y=\"445.5\" text-anchor=\"middle\">con balón (Inoue)</text>\n  <rect class=\"warn\" x=\"466\" y=\"412\" width=\"142\" height=\"46\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"537\" y=\"433.5\" text-anchor=\"middle\" font-weight=\"700\">Cirugía mitral</text>\n  <text class=\"warnT sub\" x=\"537\" y=\"445.5\" text-anchor=\"middle\">Reemplazo o plastía</text>\n  <rect class=\"b\" x=\"12\" y=\"284\" width=\"292\" height=\"100\" rx=\"3\"/>\n  <text class=\"t\" x=\"158\" y=\"310.5\" text-anchor=\"middle\" font-weight=\"700\">Siempre</text>\n  <text class=\"sub\" x=\"158\" y=\"322.5\" text-anchor=\"middle\">Control de frecuencia: betabloqueador, verapamilo</text>\n  <text class=\"sub\" x=\"158\" y=\"333.5\" text-anchor=\"middle\">Diuréticos si hay congestión</text>\n  <text class=\"sub\" x=\"158\" y=\"344.5\" text-anchor=\"middle\">Anticoagulación con acenocumarol (INR 2-3)</text>\n  <text class=\"sub\" x=\"158\" y=\"355.5\" text-anchor=\"middle\">si hay FA, trombo o embolia previa</text>\n  <text class=\"sub\" x=\"158\" y=\"366.5\" text-anchor=\"middle\">No se usan anticoagulantes orales directos</text>\n</svg>"
    },
    "contexto": "La fiebre reumática es la enfermedad que une la atención primaria con la cirugía cardíaca: un niño con dolor de garganta tratado a tiempo con una sola dosis de penicilina no la desarrolla, y un paciente que la sufrió y deja la profilaxis termina, décadas después, con una estenosis mitral, fibrilación auricular y un accidente cerebrovascular. El médico general debe conocer los criterios de Jones, dar el tratamiento y los plazos de la profilaxis, y reconocer por el examen físico la estenosis mitral, que es de las valvulopatías más preguntadas en el EUNACOM, casi siempre como una mujer con fibrilación auricular, disnea y un retumbo diastólico.",
    "contentSections": [
      {
        "subhead": "1. Fiebre Reumática Aguda: Patogenia y Criterios de Jones",
        "paragraphs": [
          "<strong>Fiebre reumática aguda (FRA):</strong> enfermedad inflamatoria multisistémica, de mecanismo autoinmune, que aparece <strong>2 a 4 semanas después de una faringoamigdalitis por <em>Streptococcus pyogenes</em> (estreptococo beta-hemolítico del grupo A)</strong> en un huésped susceptible, sobre todo niños de 5 a 15 años. Los anticuerpos contra la proteína M del estreptococo reaccionan de forma cruzada (mimetismo molecular) con la miosina cardíaca, la válvula, la sinovia y los ganglios basales. Las infecciones de la piel no la causan de forma clásica. Es una enfermedad de la pobreza y del hacinamiento, y es la causa de más del 90% de las estenosis mitrales.",
          "No hay un examen que la confirme; el diagnóstico se hace con los <strong>criterios de Jones</strong> (AHA, revisión de 2015). Se necesita <strong>evidencia de una infección estreptocócica previa</strong> (ASLO o anti-DNasa B elevados o en ascenso, cultivo o test rápido faríngeo positivo, escarlatina reciente) más <strong>2 criterios mayores, o 1 mayor y 2 menores</strong>. Hay excepciones: la <strong>corea de Sydenham</strong> y la <strong>carditis indolente</strong> pueden diagnosticarse sin evidencia estreptocócica, porque aparecen meses después de la infección. En una recurrencia basta con 2 mayores, 1 mayor y 1 menor, o 3 menores.",
          "• <strong>Criterios mayores:</strong> 1) <strong>Carditis</strong> clínica o subclínica (diagnosticada por ecocardiograma): la manifestación más grave, es una pancarditis que afecta endocardio (valvulitis: insuficiencia mitral con soplo holosistólico apical y, a veces, soplo mesodiastólico de Carey Coombs), miocardio (insuficiencia cardíaca, taquicardia desproporcionada a la fiebre) y pericardio (roce); 2) <strong>Poliartritis migratoria</strong> de las articulaciones grandes (rodillas, tobillos, codos, muñecas), muy dolorosa, que cede con rapidez con aspirina; 3) <strong>Corea de Sydenham</strong>: movimientos involuntarios, bruscos e irregulares, con hipotonía y labilidad emocional, de aparición tardía (1 a 6 meses) y que cede en semanas a meses; 4) <strong>Eritema marginado</strong>: lesiones rosadas de borde nítido y centro claro, evanescentes, en el tronco y la raíz de los miembros, nunca en la cara; 5) <strong>Nódulos subcutáneos</strong>: indoloros, sobre superficies de extensión de articulaciones y prominencias óseas, asociados a carditis grave.",
          "• <strong>Criterios menores:</strong> artralgias (monoartralgia o poliartralgia, solo si la artritis no es un criterio mayor), <strong>fiebre</strong> (≥ 38,5 °C en poblaciones de bajo riesgo, ≥ 38 °C en las de riesgo moderado o alto), <strong>reactantes de fase aguda elevados</strong> (VHS ≥ 60 mm/h o PCR ≥ 3 mg/dL en bajo riesgo; VHS ≥ 30 mm/h en riesgo moderado o alto) y <strong>intervalo PR prolongado</strong> en el ECG (si no hay carditis como criterio mayor). De todas las manifestaciones, solo la carditis deja secuelas permanentes: la artritis, la corea, el eritema y los nódulos desaparecen sin dejar huella."
        ]
      },
      {
        "subhead": "2. Tratamiento de la Fiebre Reumática Aguda",
        "paragraphs": [
          "Todo paciente con sospecha de FRA se hospitaliza para confirmar el diagnóstico, evaluar el corazón con ecocardiograma y ECG, y tratar. Se hace <strong>reposo</strong> (relativo, y estricto si hay carditis) hasta que los reactantes se normalicen. El tratamiento tiene cuatro pilares:",
          "1) <strong>Erradicar el estreptococo</strong>, aunque el cultivo sea negativo: <strong>penicilina benzatina 1.200.000 UI intramuscular en dosis única</strong> (600.000 UI si pesa &lt; 27 kg); alternativa, amoxicilina 50 mg/kg/día (máximo 1 g) por 10 días; en alérgicos a la penicilina, un macrólido (azitromicina) o clindamicina. 2) <strong>Antiinflamatorio</strong> para la artritis y la fiebre: <strong>aspirina 80 a 100 mg/kg/día en 4 dosis</strong> (en adultos 4 a 8 g/día) hasta que se resuelvan los síntomas y los reactantes, y luego con descenso por 4 a 6 semanas (alternativa: naproxeno); la respuesta rápida de la artritis a la aspirina es casi diagnóstica. 3) <strong>Corticoides</strong> (<strong>prednisona 1 a 2 mg/kg/día</strong>, por 2 a 4 semanas y luego descenso) en la carditis moderada o grave (cardiomegalia, insuficiencia cardíaca, bloqueo AV); la aspirina sola alcanza para la carditis leve. 4) <strong>Tratamiento de las complicaciones</strong>: diuréticos, IECA y digoxina con cautela en la insuficiencia cardíaca; en la <strong>corea</strong>, ácido valproico o carbamazepina (el haloperidol queda para los casos graves), ambiente tranquilo; los antiinflamatorios no la modifican.",
          "La <strong>cardiopatía reumática crónica</strong> es la secuela valvular de las carditis repetidas: la <strong>válvula mitral</strong> se afecta casi siempre (estenosis, insuficiencia o doble lesión), seguida de la <strong>aórtica</strong>; las derechas rara vez. El daño se perpetúa con cada recurrencia, por eso la prevención secundaria es la intervención que más vidas ahorra."
        ]
      },
      {
        "subhead": "3. Prevención Primaria y Secundaria de la Fiebre Reumática",
        "paragraphs": [
          "<strong>Prevención primaria (1.01.3.005):</strong> el tratamiento antibiótico oportuno de la <strong>faringoamigdalitis estreptocócica</strong> previene la fiebre reumática, y es efectivo si se inicia dentro de los 9 días desde el comienzo de los síntomas. Se sospecha por la clínica (edad 5 a 15 años, fiebre, odinofagia intensa, exudado amigdalino, adenopatías cervicales dolorosas, sin tos ni coriza; criterios de Centor) y se confirma con test rápido o cultivo. El tratamiento de elección es <strong>penicilina benzatina 1.200.000 UI IM en dosis única</strong> (600.000 UI si &lt; 27 kg) o <strong>amoxicilina por 10 días</strong>; en alérgicos, un macrólido. En la sala de un SAPU esa dosis única es la medida más efectiva de salud pública que existe para la fiebre reumática.",
          "<strong>Prevención secundaria:</strong> todo paciente con fiebre reumática confirmada recibe <strong>penicilina benzatina 1.200.000 UI IM cada 3 a 4 semanas</strong> (cada 3 semanas en los de alto riesgo o con valvulopatía grave) por un tiempo que depende de la gravedad: <strong>sin carditis, 5 años o hasta los 21 años de edad</strong> (lo que dure más); <strong>con carditis sin secuela valvular, 10 años o hasta los 21 años</strong>; <strong>con valvulopatía residual, 10 años o hasta los 40 años</strong>, a veces de por vida. Alternativas: penicilina V oral 250 mg cada 12 horas y, en alérgicos, sulfadiazina o un macrólido. Cada recurrencia agrava la valvulopatía, y la profilaxis cae cuando el paciente deja de ir a los controles.",
          "No se confunda con la <strong>profilaxis de endocarditis</strong> (amoxicilina antes de un procedimiento dental): se reserva a quienes tienen una prótesis, endocarditis previa o ciertas cardiopatías congénitas, y <strong>no se indica en la estenosis mitral nativa</strong>, aunque sea reumática (se revisa en el tema 4.7)."
        ]
      },
      {
        "subhead": "4. Estenosis Mitral Reumática: Fisiopatología, Semiología y Estudio",
        "paragraphs": [
          "La <strong>estenosis mitral (EM)</strong> reumática es la secuela más característica: tras años o décadas del episodio agudo, las valvas se engrosan, las comisuras se fusionan y las cuerdas se acortan. El orificio normal (4 a 6 cm²) se estrecha y el flujo de la aurícula al ventrículo exige un gradiente diastólico. La aurícula izquierda se dilata, la presión de la aurícula y de los capilares pulmonares aumenta (disnea, ortopnea, edema pulmonar, hemoptisis, luego hipertensión pulmonar y falla derecha) y el ventrículo izquierdo permanece normal, <em>sin dilatarse</em>. Un hecho clave es que la taquicardia, que acorta la diástole, descompensa al paciente (embarazo, fiebre, ejercicio, fibrilación auricular con respuesta rápida). Por eso la <strong>fibrilación auricular</strong> (30 a 40%) es la complicación más frecuente y un desencadenante de edema pulmonar y de <strong>embolias sistémicas</strong> (el riesgo de ACV es alto, independiente del puntaje CHA₂DS₂-VASc). Otras complicaciones: ronquera por compresión del recurrente (síndrome de Ortner), disfagia, endocarditis (rara).",
          "<strong>Semiología — el «ritmo de Duroziez»:</strong> 1) <strong>R1 brillante</strong> (cierre enérgico de valvas rígidas pero móviles); 2) <strong>sístole limpia</strong>, sin soplo (salvo que haya insuficiencia asociada); 3) <strong>R2 seguido de un chasquido de apertura</strong> mitral (mientras más cerca de R2, más severa la estenosis); 4) <strong>retumbo mesodiastólico grave con refuerzo presistólico</strong>, en el ápex, con el paciente en decúbito lateral izquierdo (posición de Pachón) y con la campana; <strong>el refuerzo desaparece en la fibrilación auricular</strong>. Con hipertensión pulmonar aparecen un R2 fuerte y el soplo de Graham Steell. Puede verse la <strong>facies mitral</strong> (rubicundez malar). El pulso es pequeño y la presión arterial, normal o baja: a diferencia de la insuficiencia aórtica, que tiene presión de pulso amplia y el Austin Flint, que no tiene chasquido ni R1 intenso.",
          "<strong>Estudio:</strong> la radiografía muestra la «rectificación» del borde cardíaco izquierdo (el segmento de la orejuela y de la arteria pulmonar), la aurícula izquierda dilatada (doble contorno derecho, ángulo carinal abierto) y signos de congestión; el ECG, una onda P mitral o fibrilación auricular y, con hipertensión pulmonar, hipertrofia derecha. El <strong>ecocardiograma</strong> confirma el diagnóstico: valvas engrosadas con abombamiento diastólico («en palo de hockey») y aurícula dilatada, y mide el <strong>área valvular (planimetría)</strong>, el <strong>gradiente medio</strong> y el <strong>tiempo de hemipresión</strong>. El <strong>área valvular mitral ≤ 1,5 cm²</strong> define la estenosis clínicamente significativa (clásicamente: moderada de 1,0 a 1,5 cm² y grave &lt; 1,0 cm²), con la <strong>presión sistólica pulmonar &gt; 50 mmHg</strong> como marcador de repercusión. Se calcula el <strong>puntaje ecocardiográfico de Wilkins</strong> (movilidad, engrosamiento, calcificación y compromiso del aparato subvalvular, de 1 a 4 puntos cada uno; <strong>≤ 8 es anatomía favorable</strong>) y se descartan trombos en la aurícula (ecocardiograma transesofágico) e insuficiencia mitral."
        ]
      },
      {
        "subhead": "5. Estenosis Mitral: Tratamiento Médico, Anticoagulación y Valvuloplastía",
        "paragraphs": [
          "<strong>Tratamiento médico:</strong> alargar la diástole con <strong>control de la frecuencia cardíaca</strong> (betabloqueador, verapamilo o diltiazem; digoxina en la fibrilación auricular), diuréticos para la congestión y evitar el esfuerzo extremo. <strong>Anticoagulación oral obligatoria</strong> si hay fibrilación auricular (paroxística o permanente), trombo en la aurícula, embolia previa o aurícula muy dilatada, con <strong>antagonistas de la vitamina K (acenocumarol o warfarina, INR 2,0 a 3,0)</strong>: los anticoagulantes orales directos no se recomiendan en la estenosis mitral moderada a grave reumática. Se mantiene la profilaxis secundaria de fiebre reumática.",
          "<strong>Intervención:</strong> se indica en la EM significativa (AVA ≤ 1,5 cm²) <strong>sintomática</strong>, o asintomática con hipertensión pulmonar o fibrilación auricular nueva. La <strong>valvuloplastía mitral percutánea con balón (técnica de Inoue)</strong> es de elección si las valvas son favorables: <strong>puntaje de Wilkins ≤ 8</strong>, sin calcificación comisural importante, sin trombo auricular y sin insuficiencia mitral moderada o grave. Si la anatomía no es favorable o hay lesión asociada, se hace <strong>cirugía</strong> (comisurotomía, o reemplazo valvular con prótesis; la mecánica exige acenocumarol de por vida). La paciente embarazada con EM grave sintomática recibe betabloqueador y diuréticos y, si persiste sintomática, valvuloplastía."
        ]
      },
      {
        "subhead": "6. Diagnóstico Diferencial, Seguimiento y Situaciones Especiales",
        "paragraphs": [
          "<strong>Diagnóstico diferencial y errores frecuentes.</strong> La artritis de la fiebre reumática se diferencia de la artritis séptica (una sola articulación, muy caliente, con líquido purulento; requiere punción), de la artritis idiopática juvenil (más de 6 semanas, no migratoria), del lupus y de la artritis reactiva. Un soplo nuevo con fiebre y fenómenos embólicos o inmunológicos en un portador de valvulopatía reumática es una <strong>endocarditis</strong> hasta demostrar lo contrario (tema 4.7). No se usa la aspirina antes de tener el diagnóstico solo para «probar», porque oculta la artritis migratoria; en cambio, siempre se solicita un ecocardiograma, que detecta carditis subclínica en pacientes sin soplo.",
          "<strong>Seguimiento en atención primaria.</strong> El paciente con antecedente de fiebre reumática se controla con un carnet de aplicación de penicilina, el control cardiológico y el ecocardiograma periódico. Se educa sobre la importancia de no interrumpir la profilaxis, que se interrumpe más en la adolescencia y en las mujeres jóvenes. Todo familiar con dolor de garganta debe consultar. Se debe reconocer y derivar la <strong>cardiopatía reumática crónica</strong>: estenosis mitral, insuficiencia mitral reumática y lesiones aórticas; con frecuencia se asocian en forma de <strong>enfermedad valvular múltiple</strong>, de modo que un soplo diastólico mitral con un soplo diastólico aórtico en una mujer con fiebre reumática en la infancia no es una contradicción.",
          "<strong>Estenosis mitral y embarazo.</strong> El aumento del volumen circulante y de la frecuencia cardíaca del embarazo y del parto descompensa a la mujer con estenosis mitral previamente tolerada, y a veces el diagnóstico se hace durante el embarazo (edema pulmonar en el segundo o tercer trimestre). Se maneja con reposo, betabloqueador para alargar la diástole, diuréticos y, en la fibrilación auricular, anticoagulación con heparina (la warfarina cruza la placenta en el primer trimestre y alrededor del parto). Si persiste sintomática pese al tratamiento, se indica la valvuloplastía con balón. En la mujer joven en edad fértil con una estenosis significativa, lo ideal es tratar la válvula <strong>antes</strong> de embarazarse.",
          "<strong>Otras valvas.</strong> La fiebre reumática puede producir además <strong>insuficiencia mitral</strong> (es la lesión de la carditis aguda), <strong>estenosis o insuficiencia aórtica</strong> y, de forma más rara, lesiones de la válvula tricúspide. La estenosis tricuspídea reumática casi siempre se acompaña de estenosis mitral, y se sospecha ante un soplo diastólico que aumenta con la inspiración en el borde esternal izquierdo bajo, con ingurgitación yugular con onda «a» gigante."
        ]
      }
    ],
    "table": {
      "title": "Criterios de Jones Modificados (AHA 2015) para la Fiebre Reumática Aguda",
      "headers": [
        "Criterios mayores",
        "Criterios menores",
        "Regla diagnóstica"
      ],
      "rows": [
        [
          "Carditis (clínica o subclínica)",
          "Fiebre (≥ 38,5 °C; ≥ 38 °C en riesgo alto)",
          "2 mayores, o 1 mayor + 2 menores"
        ],
        [
          "Poliartritis migratoria (de grandes articulaciones)",
          "Artralgias (poliartralgia; en riesgo alto, monoartralgia)",
          "Siempre con evidencia de estreptococo previo (ASLO, anti-DNasa B, cultivo)"
        ],
        [
          "Corea de Sydenham",
          "VHS ≥ 60 mm/h o PCR ≥ 3 mg/dL (en riesgo alto, VHS ≥ 30)",
          "Corea y carditis indolente: sin necesidad de evidencia"
        ],
        [
          "Eritema marginado",
          "PR prolongado (sin carditis)",
          "Recurrencia: 2 mayores, 1 mayor + 1 menor o 3 menores"
        ],
        [
          "Nódulos subcutáneos",
          "—",
          "Dx diferencial: artritis séptica, reumatoide, lupus, endocarditis"
        ]
      ]
    },
    "severityTable": {
      "title": "Estenosis Mitral: Gravedad por Ecocardiograma, Anatomía y Conducta",
      "headers": [
        "Parámetro",
        "Leve / favorable",
        "Moderada",
        "Severa o intervención"
      ],
      "rows": [
        [
          "Área valvular mitral (planimetría)",
          "> 1,5 cm²",
          "1,0 a 1,5 cm²",
          "< 1,0 cm² (guías actuales: ≤ 1,5 cm² es significativa)"
        ],
        [
          "Gradiente diastólico medio (FC 60-80)",
          "< 5 mmHg",
          "5 a 10 mmHg",
          "> 10 mmHg"
        ],
        [
          "Tiempo de hemipresión",
          "< 150 ms",
          "150 a 220 ms",
          "≥ 220 ms"
        ],
        [
          "Presión sistólica de la arteria pulmonar",
          "< 30 mmHg",
          "30 a 50 mmHg",
          "> 50 mmHg: intervenir aunque no haya síntomas"
        ],
        [
          "Puntaje de Wilkins",
          "≤ 8: valvuloplastía con balón",
          "9 a 11: según caso",
          "≥ 12 o trombo en la aurícula: cirugía"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Fiebre Reumática: Tratamiento y Profilaxis en el Adulto y el Niño",
      "headers": [
        "Objetivo",
        "Fármaco y dosis",
        "Duración o situación"
      ],
      "rows": [
        [
          "Erradicar el estreptococo",
          "Penicilina benzatina 1.200.000 UI IM (600.000 si < 27 kg); alternativa amoxicilina 50 mg/kg/día",
          "Dosis única (amoxicilina 10 días); alérgicos: azitromicina o clindamicina"
        ],
        [
          "Artritis y fiebre",
          "Aspirina 80-100 mg/kg/día en 4 dosis (adultos 4-8 g/día) o naproxeno",
          "Hasta resolver síntomas y reactantes; descenso en 4-6 semanas"
        ],
        [
          "Carditis moderada o grave",
          "Prednisona 1-2 mg/kg/día",
          "2-4 semanas, con descenso gradual"
        ],
        [
          "Insuficiencia cardíaca por carditis",
          "Reposo, diuréticos, IECA",
          "Digoxina con cautela"
        ],
        [
          "Corea de Sydenham",
          "Ácido valproico o carbamazepina; haloperidol en casos graves",
          "Semanas a meses; la aspirina no la modifica"
        ],
        [
          "Prevención secundaria",
          "Penicilina benzatina 1.200.000 UI IM cada 3-4 semanas",
          "Sin carditis 5 años o hasta los 21; con carditis 10 años o hasta los 21; con secuela valvular 10 años o hasta los 40"
        ],
        [
          "Estenosis mitral con FA, trombo o embolia",
          "Acenocumarol o warfarina, INR 2,0-3,0",
          "De por vida; anticoagulantes directos no recomendados"
        ]
      ]
    },
    "vignette": "Mujer de 42 años, con antecedente de amigdalitis a repetición en la infancia y de «reumatismo» a los 11 años del que no recibió profilaxis, consulta por disnea de esfuerzo progresiva y palpitaciones de 3 meses. Examen: pulso irregular y deficitario de 110 lpm, PA 105/70 mmHg, mejillas rubicundas. A la auscultación, primer ruido muy acentuado, sístole limpia y, tras el segundo ruido, un chasquido seco seguido de un retumbo diastólico de tono grave con epicentro en el ápex, audible en decúbito lateral izquierdo. ECG: fibrilación auricular. El ecocardiograma muestra valvas engrosadas con abombamiento diastólico, área valvular de 1,1 cm² y puntaje de Wilkins de 6; no hay trombos en la aurícula.",
    "explicacion": "Es una estenosis mitral reumática significativa, con el «ritmo de Duroziez» (R1 brillante, chasquido de apertura y retumbo diastólico) complicada con fibrilación auricular, en la que desaparece el refuerzo presistólico. El manejo integral: control de la frecuencia (betabloqueador o verapamilo, digoxina), anticoagulación oral con acenocumarol o warfarina con INR 2,0 a 3,0 (no con anticoagulantes directos), diuréticos, y, por ser sintomática, con anatomía favorable (Wilkins ≤ 8, sin trombo ni insuficiencia mitral significativa), valvuloplastía mitral percutánea con balón de Inoue, derivada a cardiología. Se debió haber mantenido la profilaxis secundaria con penicilina benzatina cada 3 a 4 semanas.",
    "keyPoints": [
      "Fiebre reumática: aparece 2-4 semanas después de una faringoamigdalitis por estreptococo del grupo A, en niños de 5 a 15 años; la piel no la desencadena de forma clásica.",
      "Jones: evidencia de estreptococo previo + 2 criterios mayores, o 1 mayor + 2 menores. Mayores: carditis, poliartritis migratoria, corea de Sydenham, eritema marginado y nódulos subcutáneos.",
      "Corea y carditis indolente se diagnostican sin evidencia estreptocócica; la artritis responde de forma casi diagnóstica a la aspirina; la pancarditis es la única manifestación que deja secuelas.",
      "Tratamiento: penicilina benzatina 1.200.000 UI IM dosis única, aspirina 80-100 mg/kg/día para la artritis y prednisona 1-2 mg/kg/día si hay carditis moderada o grave.",
      "Prevención primaria: tratar la faringoamigdalitis estreptocócica con penicilina benzatina o amoxicilina 10 días, dentro de los 9 días del inicio.",
      "Prevención secundaria: penicilina benzatina 1.200.000 UI IM cada 3-4 semanas, 5 años o hasta los 21 sin carditis; 10 años o hasta los 21 con carditis; 10 años o hasta los 40 con secuela valvular.",
      "Estenosis mitral: R1 intenso, chasquido de apertura y retumbo diastólico con refuerzo presistólico (desaparece en fibrilación auricular); aurícula izquierda dilatada y ventrículo normal.",
      "Estenosis mitral con FA, trombo o embolia: acenocumarol o warfarina (INR 2-3); valvuloplastía con balón si Wilkins ≤ 8, sin trombo ni insuficiencia mitral significativa."
    ],
    "questions": [
      {
        "stem": "Un paciente de 70 años consulta por disnea de medianos esfuerzos progresiva, asociada a ortopnea. Al examen físico tiene frecuencia cardíaca: 78 lpm, presión arterial: 130/80 mmHg, examen pulmonar con murmullo vesicular conservado y presencia de crépitos bibasales, examen cardíaco con ritmo irregular en dos tiempos, con presencia de soplo diastólico. Se palpa el choque de la punta en el quinto espacio intercostal línea medioclavicular y se observa edema en extremidades inferiores con signo de la fóvea. Su electrocardiograma muestra fibrilación auricular con respuesta ventricular controlada. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Estenosis aórtica"
          },
          {
            "id": "B",
            "text": "Estenosis pulmonar"
          },
          {
            "id": "C",
            "text": "Estenosis mitral"
          },
          {
            "id": "D",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "E",
            "text": "Insuficiencia pulmonar"
          }
        ],
        "correcta": "C",
        "explicacion": "Disnea progresiva y ortopnea con fibrilación auricular y un soplo diastólico, sin cardiomegalia izquierda marcada: estenosis mitral. La estenosis aórtica da un soplo sistólico, y la insuficiencia aórtica, un soplo diastólico con presión de pulso amplia. La fibrilación auricular, por la dilatación de la aurícula izquierda, es la complicación más frecuente y la que precipita la insuficiencia cardíaca.",
        "recTag": "EUNACOM Julio 2024 · Pregunta 128"
      },
      {
        "stem": "Un paciente de 58 años presenta disnea de medianos esfuerzos y astenia. Al examen físico tiene FC: 70 lpm, PA: 120/80 mmHg, examen cardíaco con choque de la punta en el quinto espacio intercostal, línea medioclavicular y auscultación con un soplo diastólico. Al examen pulmonar se constata murmullo pulmonar presente, con crepitaciones basales escasas. Su electrocardiograma muestra fibrilación auricular, con respuesta ventricular de 70 latidos por minuto. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Estenosis aórtica"
          },
          {
            "id": "B",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "C",
            "text": "Estenosis tricuspídea"
          },
          {
            "id": "D",
            "text": "Estenosis mitral"
          },
          {
            "id": "E",
            "text": "Comunicación interventricular"
          }
        ],
        "correcta": "D",
        "explicacion": "La estenosis mitral clásica: soplo diastólico, fibrilación auricular y ventrículo izquierdo de tamaño normal con aurícula izquierda crecida. Con la fibrilación auricular se pierde el refuerzo presistólico del retumbo, y obliga a anticoagular con antagonistas de la vitamina K.",
        "recTag": "EUNACOM Agosto 2021 · Pregunta 158"
      },
      {
        "stem": "Un niño de 8 años presenta odinofagia intensa, de 48 horas de evolución, asociada a malestar general, fiebre hasta 39ºC, dolor abdominal y vómitos. Al examen físico está hidratado, con FC: 100x’, FR: 15x’, Tº: 38,7ºC; se aprecia faringe congestiva y eritematosa, amígdalas con exudado blanquecino y se palpan múltiples adenopatías dolorosas en la cara anterior del cuello. El examen pulmonar es normal. Se solicita test pack rápido para estreptococo A, que resulta positivo. ¿Cuál es el tratamiento más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Penicilina sódica"
          },
          {
            "id": "B",
            "text": "Cefadroxilo"
          },
          {
            "id": "C",
            "text": "Ciprofloxacino"
          },
          {
            "id": "D",
            "text": "Amoxicilina"
          },
          {
            "id": "E",
            "text": "Clindamicina"
          }
        ],
        "correcta": "D",
        "explicacion": "Un escolar con odinofagia intensa, fiebre alta, exudado amigdalino, adenopatías dolorosas y sin síntomas catarrales tiene una amigdalitis estreptocócica (Centor 4-5) y se trata con amoxicilina o penicilina benzatina. Este tratamiento es la prevención primaria de la fiebre reumática. La penicilina sódica es endovenosa y no se usa en la amigdalitis ambulatoria.",
        "recTag": "EUNACOM Agosto 2021 · Pregunta 28"
      },
      {
        "stem": "Una niña de 10 años presenta fiebre de 38,6 °C y dolor e hinchazón de la rodilla derecha que desaparece a las 24 horas y aparece en el tobillo contralateral. Hace 3 semanas tuvo una faringitis. La auscultación revela un soplo holosistólico apical nuevo. ASLO 800 UI. ¿Cuál es el diagnóstico y el tratamiento más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Artritis séptica; drenaje y cloxacilina endovenosa"
          },
          {
            "id": "B",
            "text": "Fiebre reumática aguda; penicilina benzatina, aspirina y reposo, y evaluar corticoides si la carditis es moderada o grave"
          },
          {
            "id": "C",
            "text": "Artritis idiopática juvenil; metotrexato"
          },
          {
            "id": "D",
            "text": "Endocarditis infecciosa; hemocultivos y antibióticos por 6 semanas"
          },
          {
            "id": "E",
            "text": "Lupus eritematoso sistémico; hidroxicloroquina"
          }
        ],
        "correcta": "B",
        "explicacion": "Poliartritis migratoria (criterio mayor) más carditis (soplo de insuficiencia mitral nuevo, otro criterio mayor) con evidencia estreptocócica previa (faringitis, ASLO elevado): cumple Jones. Se erradica el estreptococo con penicilina benzatina, se trata la artritis con aspirina, se evalúa el grado de carditis con ecocardiograma (corticoides si es moderada o grave) y se inicia la profilaxis secundaria.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Una mujer de 25 años tuvo fiebre reumática a los 12 años con carditis y quedó con una insuficiencia mitral leve. ¿Hasta cuándo debe mantener la profilaxis secundaria con penicilina benzatina cada 3 a 4 semanas?",
        "options": [
          {
            "id": "A",
            "text": "Hasta cumplir 21 años"
          },
          {
            "id": "B",
            "text": "Por 5 años desde el episodio"
          },
          {
            "id": "C",
            "text": "Por 10 años desde el episodio o hasta los 40 años de edad, lo que dure más"
          },
          {
            "id": "D",
            "text": "Solo si tiene faringitis recurrentes"
          },
          {
            "id": "E",
            "text": "No necesita profilaxis, porque ya es adulta"
          }
        ],
        "correcta": "C",
        "explicacion": "Con carditis y valvulopatía residual, la profilaxis se mantiene al menos 10 años desde el último episodio o hasta los 40 años de edad (lo que sea más largo), y a veces de por vida. Sin carditis son 5 años o hasta los 21; con carditis sin secuela, 10 años o hasta los 21.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Una paciente de 30 años con estenosis mitral reumática tiene área valvular de 1,2 cm², disnea de esfuerzo (clase funcional III), valvas móviles con puntaje de Wilkins de 6, sin trombo en la aurícula y con insuficiencia mitral leve. ¿Cuál es el tratamiento de elección?",
        "options": [
          {
            "id": "A",
            "text": "Valvuloplastía mitral percutánea con balón"
          },
          {
            "id": "B",
            "text": "Reemplazo valvular mitral con prótesis mecánica"
          },
          {
            "id": "C",
            "text": "Comisurotomía quirúrgica a cielo abierto"
          },
          {
            "id": "D",
            "text": "Tratamiento exclusivo con furosemida oral"
          },
          {
            "id": "E",
            "text": "Cierre percutáneo de la orejuela izquierda"
          }
        ],
        "correcta": "A",
        "explicacion": "En la estenosis mitral significativa sintomática con anatomía favorable (Wilkins ≤ 8, sin calcificación comisural importante, sin trombo auricular ni insuficiencia mitral moderada o grave) la valvuloplastía con balón de Inoue es de primera elección por su eficacia y mínima invasividad. La cirugía se reserva para la anatomía desfavorable.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "4.2§1 (reescrito y ampliado al estándar, oct-2026; se agregó la fiebre reumática: Jones, tratamiento y prevención, códigos 1.01.1.008 y 1.01.3.005)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-26",
    "classId": "cardio-26",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Valvulopatías, Cardiopatías Congénitas y Endocarditis",
    "topicLabel": "4.5",
    "title": "Insuficiencia Mitral y Prolapso de la Válvula Mitral",
    "perfilCode": "1.01.1.019",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía GES de cirugía de las válvulas aórtica, mitral y tricúspide (lesiones crónicas) en personas de 15 años y más",
    "reconstrucciones": "",
    "frecuencia": "Alta · Soplo holosistólico apical con irradiación a la axila, comportamiento del clic y soplo del prolapso con las maniobras, insuficiencia mitral aguda y criterios de cirugía (plastía)",
    "svg": null,
    "algoTitle": "Algoritmo de la insuficiencia mitral y el prolapso",
    "diagram": {
      "title": "Algoritmo de la Insuficiencia Mitral y del Prolapso Mitral: Mecanismo, Severidad e Indicación Quirúrgica",
      "svg": "<svg viewBox=\"0 0 620 410\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar26\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar26)}\n  </style>\n  <rect class=\"b\" x=\"90\" y=\"6\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"24.5\" text-anchor=\"middle\" font-weight=\"700\">Soplo sistólico apical en ápex, con o sin clic mesosistólico</text>\n  <text class=\"sub\" x=\"310\" y=\"36.5\" text-anchor=\"middle\">Disnea, palpitaciones o dolor torácico atípico; mujer joven o paciente con IC</text>\n  <path class=\"ln\" d=\"M310,46 V62\"/>\n  <rect class=\"dec\" x=\"90\" y=\"62\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"80.5\" text-anchor=\"middle\" font-weight=\"700\">Ecocardiograma Doppler: mecanismo y severidad</text>\n  <text class=\"sub\" x=\"310\" y=\"92.5\" text-anchor=\"middle\">¿Prolapso, rotura de cuerdas, vegetación, dilatación del anillo, isquemia?</text>\n  <path class=\"ln\" d=\"M310,102 V116 H105 V128\"/>\n  <path class=\"ln\" d=\"M310,116 H310 V128\"/>\n  <path class=\"ln\" d=\"M310,116 H515 V128\"/>\n  <rect class=\"b\" x=\"12\" y=\"128\" width=\"186\" height=\"78\" rx=\"3\"/>\n  <text class=\"t\" x=\"105\" y=\"149\" text-anchor=\"middle\" font-weight=\"700\">PROLAPSO MITRAL</text>\n  <text class=\"sub\" x=\"105\" y=\"161\" text-anchor=\"middle\">Clic mesosistólico + soplo telesistólico</text>\n  <text class=\"sub\" x=\"105\" y=\"172\" text-anchor=\"middle\">Valsalva: clic precoz, soplo largo</text>\n  <text class=\"sub\" x=\"105\" y=\"183\" text-anchor=\"middle\">Sin IM significativa: tranquilizar</text>\n  <text class=\"sub\" x=\"105\" y=\"194\" text-anchor=\"middle\">Palpitaciones: betabloqueador</text>\n  <rect class=\"b\" x=\"217\" y=\"128\" width=\"186\" height=\"78\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"149\" text-anchor=\"middle\" font-weight=\"700\">IM PRIMARIA CRÓNICA</text>\n  <text class=\"sub\" x=\"310\" y=\"161\" text-anchor=\"middle\">Soplo holosistólico a la axila</text>\n  <text class=\"sub\" x=\"310\" y=\"172\" text-anchor=\"middle\">Degenerativa, endocarditis, reumática</text>\n  <text class=\"sub\" x=\"310\" y=\"183\" text-anchor=\"middle\">Severa: Rvol ≥ 60 mL, FR ≥ 50%</text>\n  <text class=\"sub\" x=\"310\" y=\"194\" text-anchor=\"middle\">Plastía mitral &gt; reemplazo</text>\n  <rect class=\"b\" x=\"422\" y=\"128\" width=\"186\" height=\"78\" rx=\"3\"/>\n  <text class=\"t\" x=\"515\" y=\"149\" text-anchor=\"middle\" font-weight=\"700\">IM SECUNDARIA (FUNCIONAL)</text>\n  <text class=\"sub\" x=\"515\" y=\"161\" text-anchor=\"middle\">Valvas sanas, VI dilatado o isquémico</text>\n  <text class=\"sub\" x=\"515\" y=\"172\" text-anchor=\"middle\">Tratar la IC (GDMT)</text>\n  <text class=\"sub\" x=\"515\" y=\"183\" text-anchor=\"middle\">Reparación borde a borde si persiste</text>\n  <text class=\"sub\" x=\"515\" y=\"194\" text-anchor=\"middle\">sintomática con IC optimizada</text>\n  <path class=\"ln\" d=\"M310,206 V224\"/>\n  <rect class=\"dec\" x=\"90\" y=\"224\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"242.5\" text-anchor=\"middle\" font-weight=\"700\">IM primaria severa: ¿síntomas, FEVI ≤ 60%, DFSVI ≥ 40 mm,</text>\n  <text class=\"sub\" x=\"310\" y=\"254.5\" text-anchor=\"middle\">FA nueva o PSAP &gt; 50 mmHg?</text>\n  <path class=\"ln\" d=\"M310,264 V276 H158 V288\"/>\n  <path class=\"ln\" d=\"M310,276 H462 V288\"/>\n  <text class=\"lbl\" x=\"150\" y=\"272\" text-anchor=\"end\">Sí</text>\n  <text class=\"lbl\" x=\"470\" y=\"272\" text-anchor=\"start\">No</text>\n  <rect class=\"acc\" x=\"12\" y=\"288\" width=\"292\" height=\"52\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">CIRUGÍA MITRAL</text>\n  <text class=\"accS\" x=\"158\" y=\"319\" text-anchor=\"middle\">Plastía (preferida) con anuloplastía</text>\n  <text class=\"accS\" x=\"158\" y=\"330\" text-anchor=\"middle\">Reemplazo solo si no es reparable</text>\n  <rect class=\"b\" x=\"316\" y=\"288\" width=\"292\" height=\"52\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"307\" text-anchor=\"middle\" font-weight=\"700\">Control cardiológico</text>\n  <text class=\"sub\" x=\"462\" y=\"319\" text-anchor=\"middle\">Eco cada 6-12 meses si es severa</text>\n  <text class=\"sub\" x=\"462\" y=\"330\" text-anchor=\"middle\">Sin profilaxis de endocarditis</text>\n  <rect class=\"warn\" x=\"12\" y=\"352\" width=\"596\" height=\"48\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"374.5\" text-anchor=\"middle\" font-weight=\"700\">IM AGUDA (rotura de papilar en el IAM, rotura de cuerdas, endocarditis)</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"386.5\" text-anchor=\"middle\">Edema pulmonar y shock con soplo corto o ausente: nitroprusiato, balón de contrapulsación y cirugía de urgencia</text>\n</svg>"
    },
    "contexto": "La insuficiencia mitral y el prolapso de la válvula mitral son las valvulopatías que el EUNACOM pregunta con más variedad: una mujer joven con un clic y palpitaciones, un adulto con un soplo holosistólico que se irradia a la axila, o un paciente que, tras un infarto, hace de pronto un edema pulmonar. El médico general debe distinguir la regurgitación orgánica de la funcional, saber qué hacen las maniobras con el clic del prolapso, reconocer la forma aguda como una urgencia y derivar a tiempo, antes de que el ventrículo se deteriore, a una cirugía que en la mayoría de los casos es una plastía y no un reemplazo.",
    "contentSections": [
      {
        "subhead": "1. Mecanismos: Insuficiencia Mitral Primaria (Orgánica) y Secundaria (Funcional)",
        "paragraphs": [
          "La válvula mitral funciona como un complejo: <strong>valvas, anillo, cuerdas tendinosas, músculos papilares y pared ventricular</strong>. La insuficiencia puede nacer en cualquiera de estos elementos, y la primera pregunta es si la válvula misma está enferma.",
          "1) <strong>Insuficiencia mitral primaria u orgánica:</strong> daño intrínseco del aparato valvular. La causa más frecuente en el adulto es la <strong>degeneración mixomatosa (prolapso valvular mitral, enfermedad de Barlow) o fibroelástica</strong>; siguen la <strong>endocarditis infecciosa</strong>, la <strong>rotura de cuerdas tendinosas</strong>, la <strong>fiebre reumática</strong> (la causa más frecuente en los países en desarrollo y en la carditis aguda), la rotura o disfunción del <strong>músculo papilar por un infarto</strong> y las causas congénitas.",
          "2) <strong>Insuficiencia mitral secundaria o funcional:</strong> las valvas son anatómicamente sanas pero no coaptan porque el anillo se dilata y los músculos papilares se desplazan y «traccionan» las valvas (<em>tethering</em>), por el remodelado ventricular de una <strong>miocardiopatía dilatada</strong> o de una <strong>cardiopatía isquémica crónica</strong>. También se produce por una fibrilación auricular crónica con dilatación auricular. El manejo es el de la insuficiencia cardíaca, no el de la válvula.",
          "Lo mismo que en la insuficiencia aórtica, el curso depende de la velocidad de instalación. En la <strong>forma crónica</strong> la aurícula izquierda se dilata y se adapta (y es la que se vuelve fibrilar), y el ventrículo se dilata y eyecta una parte del volumen hacia una cámara de baja presión (la aurícula), por lo que la <strong>fracción de eyección «normal» ya significa disfunción</strong>: una FEVI ≤ 60% en una insuficiencia mitral severa es un daño ventricular establecido. En la <strong>forma aguda</strong> (rotura de cuerdas, de un papilar o endocarditis) la aurícula, que no se ha adaptado, transmite la presión a los pulmones y aparece edema pulmonar o shock."
        ]
      },
      {
        "subhead": "2. Clínica y Semiología de la Insuficiencia Mitral",
        "paragraphs": [
          "La insuficiencia mitral crónica es <strong>asintomática durante años</strong>; después aparecen fatiga y disnea de esfuerzo, palpitaciones (por fibrilación auricular) y, finalmente, signos de insuficiencia cardíaca y de hipertensión pulmonar. El <strong>choque de la punta</strong> es hiperdinámico y desplazado hacia afuera y abajo.",
          "<strong>Soplo holosistólico o pansistólico, «en barra», de tono soplante</strong>, en el ápex (foco mitral), con <strong>irradiación característica hacia la axila izquierda y el dorso</strong>. Suele acompañarse de un <strong>R1 disminuido</strong> (la válvula no cierra bien) y un <strong>tercer ruido (R3)</strong> por el llenado rápido del ventrículo con el volumen extra. En la insuficiencia mitral grave puede haber un retumbo diastólico por hiperflujo. Si el soplo se irradia hacia la base o el esternón, sospecha un jet excéntrico. En el prolapso con compromiso de la valva posterior, el soplo se irradia al foco aórtico; en el de la anterior, hacia la axila y el dorso.",
          "El soplo aumenta con el handgrip y las cuclillas (poscarga) y se atenúa con Valsalva. No se modifica con la inspiración, lo que lo diferencia de la insuficiencia tricuspídea. La <strong>intensidad no es proporcional a la gravedad</strong>, y en la forma aguda el soplo puede ser corto, suave o incluso inaudible, porque la presión de la aurícula izquierda sube y se iguala con la del ventrículo."
        ]
      },
      {
        "subhead": "3. Prolapso de la Válvula Mitral (Síndrome de Barlow, «Click-Murmur»)",
        "paragraphs": [
          "Es el desplazamiento sistólico de una o ambas valvas mitrales, engrosadas y redundantes, hacia la aurícula izquierda por sobre el plano del anillo (&gt; 2 mm en el eje paraesternal largo). Afecta al 2 a 3% de la población, sobre todo a <strong>mujeres jóvenes</strong>, delgadas, y se asocia a trastornos del tejido conectivo (<strong>síndrome de Marfan, Ehlers-Danlos</strong>), pectus excavatum, escoliosis y síndrome de espalda recta. La forma «clásica» (Barlow) tiene valvas engrosadas y redundantes; la deficiencia fibroelástica, valvas finas y cuerdas rotas.",
          "La mayoría de los pacientes está <strong>asintomática</strong>. Algunos consultan por palpitaciones, dolor torácico punzante atípico, ansiedad, fatiga o mareos (por extrasístoles o arritmias supraventriculares).",
          "<em>Hallazgo semiológico patognomónico:</em> un <strong>clic mesosistólico</strong> (tensión brusca de las cuerdas y las valvas redundantes) seguido de un <strong>soplo telesistólico</strong> en el ápex (la insuficiencia empieza después del clic). <em>Comportamiento dinámico del clic y el soplo (pregunta clave de examen):</em> al <strong>reducir el volumen del ventrículo (Valsalva o ponerse de pie)</strong>, las valvas prolapsan antes en la sístole: el <strong>clic y el soplo se adelantan</strong> y el soplo se alarga; al <strong>aumentar el volumen ventricular (cuclillas, elevación pasiva de las piernas)</strong> el prolapso se retrasa: el <strong>clic y el soplo se retrasan</strong> y el soplo se acorta. Es la contraparte de la miocardiopatía hipertrófica obstructiva, que también aumenta con Valsalva, pero tiene un soplo eyectivo, sin clic.",
          "<strong>Complicaciones:</strong> insuficiencia mitral progresiva (el riesgo aumenta con valvas gruesas y en hombres mayores), rotura de cuerdas, endocarditis, arritmias auriculares y ventriculares y, rara vez, muerte súbita. <strong>Manejo:</strong> el prolapso sin insuficiencia significativa se resuelve en atención primaria, tranquilizando a la paciente tras un ecocardiograma Doppler; se evitan los estimulantes (cafeína, tabaco y simpaticomiméticos), y los <strong>betabloqueadores en dosis bajas</strong> se reservan para las palpitaciones sintomáticas. No hay restricción deportiva si no hay insuficiencia severa ni arritmias, y no se indica profilaxis de endocarditis. Si hay insuficiencia mitral moderada o severa, se sigue como cualquier insuficiencia mitral."
        ]
      },
      {
        "subhead": "4. Diagnóstico, Severidad e Indicación Quirúrgica: la Plastía Mitral",
        "paragraphs": [
          "El <strong>ecocardiograma Doppler</strong> identifica el mecanismo (prolapso, cuerda rota, vegetación, dilatación del anillo, restricción de valvas por isquemia) y la gravedad. La insuficiencia mitral primaria es <strong>severa</strong> con volumen regurgitante ≥ 60 mL por latido, fracción regurgitante ≥ 50%, vena contracta ≥ 7 mm o área del orificio regurgitante efectivo ≥ 0,4 cm². Se miden también el diámetro de fin de sístole del ventrículo izquierdo (DTSVI), la FEVI, el tamaño de la aurícula y la presión sistólica pulmonar. El ECG puede mostrar fibrilación auricular y la radiografía, cardiomegalia con crecimiento de la aurícula izquierda; el ecocardiograma transesofágico y la resonancia afinan la anatomía antes de reparar.",
          "En la insuficiencia mitral primaria severa la intervención de elección es la <strong>reparación valvular (plastía mitral con anuloplastía)</strong>, que preserva el aparato subvalvular y la función ventricular, y ofrece mejor sobrevida que el reemplazo protésico y evita la anticoagulación crónica. El reemplazo (con prótesis mecánica o biológica) queda para las válvulas no reparables.",
          "<em>Indicaciones quirúrgicas:</em> 1) todo paciente con insuficiencia severa <strong>sintomático</strong>; 2) asintomático con <strong>disfunción del ventrículo (FEVI ≤ 60%) o diámetro de fin de sístole (DTSVI) ≥ 40 mm</strong>; 3) asintomático con <strong>fibrilación auricular nueva</strong> o <strong>hipertensión pulmonar en reposo (PSAP &gt; 50 mmHg)</strong>; 4) asintomático con función normal pero con alta probabilidad de reparación duradera, en centros de experiencia. Se opera antes de que el ventrículo se dilate demasiado: con una FEVI &lt; 30% o una dilatación extrema el riesgo operatorio es mayor y la función ventricular se recupera mal.",
          "En la <strong>insuficiencia mitral secundaria</strong> el tratamiento es el de la insuficiencia cardíaca con fracción reducida (tema 3.2), la revascularización si hay isquemia y, si persiste sintomática pese al tratamiento óptimo, la <strong>reparación percutánea borde a borde</strong> (clip mitral) o la cirugía. En la <strong>insuficiencia mitral aguda</strong> (rotura de un músculo papilar en un infarto, rotura de cuerdas, endocarditis) se estabiliza con <strong>nitroprusiato, diuréticos y balón de contrapulsación intraaórtico</strong>, que baja la poscarga y reduce el reflujo, y se opera de urgencia. En el infarto, la insuficiencia mitral por rotura papilar aparece entre el 2.º y el 7.º día, con soplo holosistólico y edema pulmonar."
        ]
      },
      {
        "subhead": "5. Diagnóstico Diferencial, Seguimiento y Situaciones Especiales",
        "paragraphs": [
          "Ante un soplo holosistólico, la insuficiencia mitral se distingue de la <strong>insuficiencia tricuspídea</strong> (borde esternal izquierdo bajo, aumenta con la inspiración, ingurgitación yugular con onda v) y de la <strong>comunicación interventricular</strong> (borde esternal izquierdo bajo, con frémito, aumenta con el handgrip). Un soplo sistólico apical que se irradia al cuello con un soplo diastólico en el foco aórtico puede ser una estenosis aórtica con doble lesión. Si el soplo es nuevo en un paciente con fiebre, soplos cambiantes y fenómenos embólicos, se piensa en <strong>endocarditis</strong>; si aparece tras un infarto, en una <strong>rotura del músculo papilar</strong> (tema 2.6).",
          "<strong>Seguimiento y vida diaria.</strong> El paciente con insuficiencia mitral leve a moderada y ventrículo normal se controla con ecocardiograma cada 1 a 2 años y no necesita medicamentos específicos; si hay hipertensión, se trata (los vasodilatadores reducen la regurgitación). Con la insuficiencia severa asintomática el control es cada 6 a 12 meses, con la medición del DTSVI y de la FEVI en cada visita: el momento de operar se pasa sin que el paciente note un síntoma. La fibrilación auricular se maneja con control de la frecuencia y anticoagulación (aquí, a diferencia de la estenosis mitral, el CHA₂DS₂-VASc y los anticoagulantes orales directos son válidos si la válvula no es mecánica ni la estenosis moderada o grave). No se indica profilaxis de endocarditis en las valvas nativas; sí tras la reparación con anillo protésico o el reemplazo.",
          "<strong>Embarazo.</strong> La insuficiencia mitral crónica con función ventricular conservada se tolera bien, porque la vasodilatación del embarazo reduce la regurgitación. Si hay insuficiencia cardíaca se usan diuréticos y vasodilatadores compatibles con el embarazo (hidralazina, nitratos); los IECA y los ARA II están contraindicados."
        ]
      }
    ],
    "table": {
      "title": "Diagnóstico Diferencial: Insuficiencia Mitral Clásica frente a Prolapso Valvular Mitral",
      "headers": [
        "Parámetro semiológico",
        "Insuficiencia mitral clásica",
        "Prolapso valvular mitral (Barlow)"
      ],
      "rows": [
        [
          "Temporalidad del soplo",
          "Holosistólico (ocupa toda la sístole)",
          "Telesistólico (final de la sístole) precedido de clic mesosistólico"
        ],
        [
          "Irradiación típica",
          "Hacia la axila izquierda y el dorso",
          "Focal en el ápex y el borde esternal"
        ],
        [
          "Respuesta a Valsalva o de pie",
          "Disminuye o no varía de duración",
          "El clic se adelanta y el soplo se vuelve más largo"
        ],
        [
          "Respuesta a cuclillas",
          "Aumenta de intensidad (poscarga)",
          "El clic se retrasa y el soplo se acorta"
        ],
        [
          "R1",
          "Disminuido; R3 frecuente",
          "Normal"
        ],
        [
          "Conducta",
          "Plastía mitral reparadora si es severa y cumple criterios",
          "Observación; plastía si hay regurgitación severa"
        ]
      ]
    },
    "vignette": "Mujer de 26 años, sin antecedentes mórbidos, delgada, consulta por palpitaciones y dolor torácico atípico punzante. PA 115/70 mmHg, FC 72 lpm. En el ápex se ausculta un clic agudo y seco en la mitad de la sístole, seguido de un soplo sistólico breve. Al pedirle una maniobra de Valsalva, el clic se desplaza hacia el inicio de la sístole y el soplo se hace más prolongado. ECG sin alteraciones.",
    "explicacion": "Un clic mesosistólico seguido de un soplo telesistólico que se adelanta y alarga con la maniobra de Valsalva es el sello semiológico del prolapso valvular mitral (síndrome de Barlow). La conducta inicial en atención primaria es tranquilizar a la paciente, descartar una regurgitación significativa con un ecocardiograma Doppler, aconsejar evitar los estimulantes (cafeína, tabaco) y usar betabloqueadores en dosis bajas solo si las palpitaciones son sintomáticas. No requiere restricción deportiva ni profilaxis de endocarditis si no hay insuficiencia mitral significativa.",
    "keyPoints": [
      "Insuficiencia mitral clásica: soplo holosistólico en barra en el ápex, irradiado a la axila y el dorso, con R1 disminuido y R3; no cambia con la inspiración.",
      "Primaria (orgánica): degenerativa/Barlow, endocarditis, cuerdas rotas, reumática, papilar isquémico. Secundaria (funcional): valvas sanas con miocardiopatía dilatada o isquémica, y se maneja como insuficiencia cardíaca.",
      "En la insuficiencia mitral primaria severa una FEVI ≤ 60% ya indica disfunción ventricular, porque el ventrículo eyecta hacia una aurícula de baja presión.",
      "Prolapso mitral: clic mesosistólico + soplo telesistólico; con Valsalva o de pie se adelantan, con cuclillas se retrasan; típico de mujeres jóvenes y Marfan.",
      "El prolapso sin insuficiencia significativa se tranquiliza; betabloqueador en dosis bajas solo si hay palpitaciones, y no requiere profilaxis de endocarditis.",
      "Insuficiencia severa: volumen regurgitante ≥ 60 mL, fracción regurgitante ≥ 50%; cirugía si hay síntomas, FEVI ≤ 60%, DTSVI ≥ 40 mm, FA nueva o PSAP > 50 mmHg.",
      "La reparación (plastía con anuloplastía) se prefiere al reemplazo en la insuficiencia primaria: preserva el ventrículo y evita la anticoagulación crónica.",
      "La insuficiencia mitral aguda (rotura papilar, cuerdas, endocarditis) da edema pulmonar o shock con soplo corto: nitroprusiato, balón de contrapulsación y cirugía de urgencia."
    ],
    "questions": [
      {
        "stem": "Una paciente de 45 años, con antecedente de enfermedad reumática en la infancia, consulta por un cuadro de 3 meses de evolución de disnea de esfuerzos en capacidad funcional II, que actualmente ha progresado a disnea de mínimos esfuerzos. Al examen físico, su presión arterial es de 120/78 mmHg, su frecuencia cardíaca es de 92 latidos por minuto y su saturación de oxígeno es de 93% a aire ambiental. Se ausculta un soplo holosistólico en el ápex, irradiado a la axila y se palpa el choque de la punta hiperdinámico a la altura del quinto espacio intercostal. El examen pulmonar muestra crepitaciones basales bilaterales. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Insuficiencia mitral"
          },
          {
            "id": "B",
            "text": "Insuficiencia aórtica"
          },
          {
            "id": "C",
            "text": "Estenosis mitral"
          },
          {
            "id": "D",
            "text": "Estenosis aórtica"
          },
          {
            "id": "E",
            "text": "Ductus arterioso persistente"
          }
        ],
        "correcta": "A",
        "explicacion": "Disnea progresiva con soplo holosistólico en el ápex irradiado a la axila, choque de la punta hiperdinámico y crépitos: insuficiencia mitral con insuficiencia cardíaca. La estenosis mitral da un retumbo diastólico y chasquido; los soplos aórticos se irradian al cuello. El antecedente de enfermedad reumática en la infancia orienta a la etiología.",
        "recTag": "EUNACOM Diciembre 2025 · Pregunta 1"
      },
      {
        "stem": "Una paciente presenta un cuadro de 2 días de disnea de esfuerzo, que aparece ante medianos esfuerzos, asociado a tos con expectoración, que en ocasiones es rosada. Al examen físico tiene FC: 94x’, PA: 110/70 mmHg, examen pulmonar con crepitaciones bilaterales y examen cardíaco con presencia de un soplo sistólico IV/VI. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Tromboembolismo pulmonar"
          },
          {
            "id": "B",
            "text": "Insuficiencia tricuspídea"
          },
          {
            "id": "C",
            "text": "Neumopatía aguda"
          },
          {
            "id": "D",
            "text": "Insuficiencia mitral aguda"
          },
          {
            "id": "E",
            "text": "Disección aórtica"
          }
        ],
        "correcta": "D",
        "explicacion": "Disnea súbita con expectoración rosada, crépitos bilaterales y soplo sistólico IV/VI: edema pulmonar agudo por insuficiencia mitral aguda (rotura de cuerdas o papilar). Es una urgencia que se estabiliza con vasodilatadores y diuréticos y se opera. La insuficiencia tricuspídea no explica un edema pulmonar, y el tromboembolismo pulmonar no da crépitos con soplo apical.",
        "recTag": "EUNACOM Diciembre 2019 · Pregunta 124"
      },
      {
        "stem": "Mujer de 24 años consulta por palpitaciones ocasionales. Al examen físico se ausculta en el ápex un clic mesosistólico seguido de un soplo telesistólico. ¿Qué ocurre con este soplo al solicitarle a la paciente que se ponga de pie o realice una maniobra de Valsalva?",
        "options": [
          {
            "id": "A",
            "text": "El clic y el soplo se adelantan y se vuelven más prolongados"
          },
          {
            "id": "B",
            "text": "El soplo desaparece por completo"
          },
          {
            "id": "C",
            "text": "El clic se desplaza hacia el segundo ruido y el soplo se acorta"
          },
          {
            "id": "D",
            "text": "No se produce ninguna modificación auscultatoria"
          },
          {
            "id": "E",
            "text": "Aparece un cuarto ruido cardíaco"
          }
        ],
        "correcta": "A",
        "explicacion": "Al realizar la maniobra de Valsalva o ponerse de pie, disminuye el retorno venoso y el volumen del ventrículo izquierdo. En un ventrículo más pequeño las valvas redundantes prolapsan antes durante la sístole, por lo que el clic se produce más temprano y el soplo se hace más precoz y duradero. Con las cuclillas ocurre lo contrario.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Un paciente de 58 años tiene una insuficiencia mitral primaria severa por rotura degenerativa de cuerdas tendinosas, sintomático, con FEVI de 55%. ¿Cuál es la intervención de elección?",
        "options": [
          {
            "id": "A",
            "text": "Cirugía de reparación valvular (plastía mitral)"
          },
          {
            "id": "B",
            "text": "Reemplazo valvular mitral con prótesis biológica"
          },
          {
            "id": "C",
            "text": "Reemplazo valvular mitral con prótesis mecánica"
          },
          {
            "id": "D",
            "text": "Valvuloplastía mitral percutánea con balón"
          },
          {
            "id": "E",
            "text": "Cierre percutáneo de la comunicación interventricular"
          }
        ],
        "correcta": "A",
        "explicacion": "En la insuficiencia mitral orgánica degenerativa la plastía mitral (reparación de valvas y cuerdas con anillo de anuloplastía) es la técnica de elección: preserva la geometría y la contractilidad del ventrículo y evita la anticoagulación crónica. Además está sintomático y con FEVI de 55%, que ya es menor al 60% de corte. La valvuloplastía con balón es para la estenosis mitral.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "4.3§0 · 4.3§1 · 4.3§2 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-27",
    "classId": "cardio-27",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Valvulopatías, Cardiopatías Congénitas y Endocarditis",
    "topicLabel": "4.6",
    "title": "Cardiopatías Congénitas del Adulto: CIA, CIV, Ductus y Coartación",
    "perfilCode": "1.01.1.003",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía GES para las cardiopatías congénitas operables en menores de 15 años; el adulto con un defecto no corregido o residual se deriva a cardiología especializada",
    "reconstrucciones": "",
    "frecuencia": "Alta · Reconocer la CIA (desdoblamiento fijo de R2, bloqueo de rama derecha), la CIV, el ductus y la coartación (pulsos femorales débiles, muescas costales) y su tratamiento",
    "svg": null,
    "algoTitle": "Algoritmo de las cardiopatías congénitas del adulto",
    "diagram": {
      "title": "Cardiopatías Congénitas del Adulto: del Hallazgo Semiológico al Defecto y su Tratamiento",
      "svg": "<svg viewBox=\"0 0 620 400\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar27\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar27)}\n  </style>\n  <rect class=\"b\" x=\"90\" y=\"6\" width=\"440\" height=\"38\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"23.5\" text-anchor=\"middle\" font-weight=\"700\">Adulto con soplo desde la infancia, disnea, arritmia o hipertensión joven</text>\n  <text class=\"sub\" x=\"310\" y=\"35.5\" text-anchor=\"middle\">Antecedente de «soplo» en la infancia o hallazgo en el embarazo</text>\n  <path class=\"ln\" d=\"M310,44 V60\"/>\n  <path class=\"ln\" d=\"M310,60 H75 V72\"/>\n  <path class=\"ln\" d=\"M310,60 H231 V72\"/>\n  <path class=\"ln\" d=\"M310,60 H389 V72\"/>\n  <path class=\"ln\" d=\"M310,60 H545 V72\"/>\n  <rect class=\"dec\" x=\"12\" y=\"72\" width=\"126\" height=\"96\" rx=\"3\"/>\n  <text class=\"t\" x=\"75\" y=\"96.5\" text-anchor=\"middle\" font-weight=\"700\">CIA ostium secundum</text>\n  <text class=\"sub\" x=\"75\" y=\"108.5\" text-anchor=\"middle\">Soplo eyectivo pulmonar</text>\n  <text class=\"sub\" x=\"75\" y=\"119.5\" text-anchor=\"middle\">R2 desdoblado y FIJO</text>\n  <text class=\"sub\" x=\"75\" y=\"130.5\" text-anchor=\"middle\">ECG: rSR' en V1 (BIRD)</text>\n  <text class=\"sub\" x=\"75\" y=\"141.5\" text-anchor=\"middle\">Rx: hiperflujo, AP prominente</text>\n  <text class=\"sub\" x=\"75\" y=\"152.5\" text-anchor=\"middle\">Cierre: Amplatzer</text>\n  <rect class=\"dec\" x=\"156\" y=\"72\" width=\"150\" height=\"96\" rx=\"3\"/>\n  <text class=\"t\" x=\"231\" y=\"96.5\" text-anchor=\"middle\" font-weight=\"700\">CIV</text>\n  <text class=\"sub\" x=\"231\" y=\"108.5\" text-anchor=\"middle\">Soplo holosistólico rudo</text>\n  <text class=\"sub\" x=\"231\" y=\"119.5\" text-anchor=\"middle\">en BEI bajo + frémito</text>\n  <text class=\"sub\" x=\"231\" y=\"130.5\" text-anchor=\"middle\">Pequeña: Roger, solo control</text>\n  <text class=\"sub\" x=\"231\" y=\"141.5\" text-anchor=\"middle\">Qp:Qs &gt; 1,5: cierre</text>\n  <text class=\"sub\" x=\"231\" y=\"152.5\" text-anchor=\"middle\">Riesgo: endocarditis</text>\n  <rect class=\"dec\" x=\"324\" y=\"72\" width=\"130\" height=\"96\" rx=\"3\"/>\n  <text class=\"t\" x=\"389\" y=\"96.5\" text-anchor=\"middle\" font-weight=\"700\">DUCTUS (DAP)</text>\n  <text class=\"sub\" x=\"389\" y=\"108.5\" text-anchor=\"middle\">Soplo continuo en</text>\n  <text class=\"sub\" x=\"389\" y=\"119.5\" text-anchor=\"middle\">maquinaria (Gibson)</text>\n  <text class=\"sub\" x=\"389\" y=\"130.5\" text-anchor=\"middle\">Infraclavicular izquierdo</text>\n  <text class=\"sub\" x=\"389\" y=\"141.5\" text-anchor=\"middle\">Pulso saltón</text>\n  <text class=\"sub\" x=\"389\" y=\"152.5\" text-anchor=\"middle\">Cierre percutáneo</text>\n  <rect class=\"dec\" x=\"472\" y=\"72\" width=\"136\" height=\"96\" rx=\"3\"/>\n  <text class=\"t\" x=\"540\" y=\"96.5\" text-anchor=\"middle\" font-weight=\"700\">COARTACIÓN</text>\n  <text class=\"sub\" x=\"540\" y=\"108.5\" text-anchor=\"middle\">HTA en brazos</text>\n  <text class=\"sub\" x=\"540\" y=\"119.5\" text-anchor=\"middle\">Pulsos femorales débiles</text>\n  <text class=\"sub\" x=\"540\" y=\"130.5\" text-anchor=\"middle\">Rx: muescas costales,</text>\n  <text class=\"sub\" x=\"540\" y=\"141.5\" text-anchor=\"middle\">signo del 3 · Turner, bicúspide</text>\n  <text class=\"sub\" x=\"540\" y=\"152.5\" text-anchor=\"middle\">Stent o cirugía</text>\n  <path class=\"ln\" d=\"M310,168 V186 H310\"/>\n  <path class=\"ln\" d=\"M75,168 V186 H545\"/>\n  <rect class=\"dec\" x=\"90\" y=\"186\" width=\"440\" height=\"44\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"206.5\" text-anchor=\"middle\" font-weight=\"700\">Ecocardiograma Doppler (shunt, sobrecarga, presión pulmonar)</text>\n  <text class=\"sub\" x=\"310\" y=\"218.5\" text-anchor=\"middle\">Angio-TAC o resonancia en la coartación; Qp:Qs por cateterismo</text>\n  <path class=\"ln\" d=\"M310,230 V248 H158 V260\"/>\n  <path class=\"ln\" d=\"M310,248 H462 V260\"/>\n  <text class=\"lbl\" x=\"150\" y=\"244\" text-anchor=\"end\">Sin hipertensión pulmonar fija</text>\n  <text class=\"lbl\" x=\"470\" y=\"244\" text-anchor=\"start\">Hipertensión pulmonar fija</text>\n  <rect class=\"acc\" x=\"12\" y=\"260\" width=\"292\" height=\"52\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"279\" text-anchor=\"middle\" font-weight=\"700\">CORREGIR el defecto</text>\n  <text class=\"accS\" x=\"158\" y=\"291\" text-anchor=\"middle\">Percutáneo si es posible (CIA, ductus, coartación)</text>\n  <text class=\"accS\" x=\"158\" y=\"302\" text-anchor=\"middle\">Cirugía en CIA primum, seno venoso, CIV</text>\n  <rect class=\"warn\" x=\"316\" y=\"260\" width=\"292\" height=\"52\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"462\" y=\"279\" text-anchor=\"middle\" font-weight=\"700\">SÍNDROME DE EISENMENGER</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"291\" text-anchor=\"middle\">Cortocircuito invertido: cianosis, policitemia</text>\n  <text class=\"warnT sub\" x=\"462\" y=\"302\" text-anchor=\"middle\">NO cerrar el defecto; vasodilatadores pulmonares</text>\n  <rect class=\"b\" x=\"12\" y=\"328\" width=\"596\" height=\"60\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"351\" text-anchor=\"middle\" font-weight=\"700\">En todos: seguimiento por cardiología congénita del adulto</text>\n  <text class=\"sub\" x=\"310\" y=\"363\" text-anchor=\"middle\">Profilaxis de endocarditis solo si hay cianosis, material protésico en los 6 primeros meses o defecto residual con material</text>\n  <text class=\"sub\" x=\"310\" y=\"374\" text-anchor=\"middle\">Embarazo contraindicado en Eisenmenger; consejo preconcepcional en los demás</text>\n</svg>"
    },
    "contexto": "Las cardiopatías congénitas ya no son solo de los niños: la mayoría de los defectos simples llegan a la edad adulta, y a veces se diagnostican de forma tardía, ante un soplo en un examen laboral, una fibrilación auricular a los 40 años, un embarazo o una hipertensión en un joven. El EUNACOM las pregunta siempre como un diagnóstico por semiología (la CIA es la más preguntada), y el médico general debe sospechar el defecto, distinguirlo de un soplo funcional, pedir el ecocardiograma y derivar antes de que aparezcan la hipertensión pulmonar, las arritmias o la insuficiencia cardíaca.",
    "contentSections": [
      {
        "subhead": "1. Comunicación Interauricular (CIA)",
        "paragraphs": [
          "Es la <strong>cardiopatía congénita que más se diagnostica en el adulto</strong> y de mayor frecuencia en mujeres. El tipo más común es el <strong>ostium secundum (70%)</strong>, en la fosa oval; menos frecuentes son el <strong>ostium primum</strong> (se asocia a hendidura de la mitral y al síndrome de Down), el <strong>seno venoso</strong> (con drenaje anómalo de venas pulmonares) y el seno coronario. Por la mayor distensibilidad del ventrículo derecho, la sangre pasa de la aurícula izquierda a la derecha (cortocircuito izquierda-derecha), con <strong>sobrecarga de volumen del corazón derecho</strong> y aumento del flujo pulmonar.",
          "Es <strong>asintomática hasta la 3.ª o 4.ª década</strong>: después aparecen disnea y fatiga de esfuerzo, palpitaciones por <strong>fibrilación auricular o flutter</strong> (por dilatación de la aurícula derecha), insuficiencia cardíaca derecha y, a veces, <strong>embolia paradójica</strong> (un trombo venoso que pasa a la circulación sistémica y produce un accidente cerebrovascular). Con los años puede desarrollarse <strong>hipertensión pulmonar</strong>; si se hace fija, el cortocircuito se invierte (síndrome de Eisenmenger). El embarazo, que aumenta el volumen circulante, suele desenmascararla.",
          "<em>Semiología patognomónica:</em> <strong>desdoblamiento amplio y fijo del segundo ruido (R2)</strong> que no varía con la respiración (el volumen extra de la aurícula derecha retrasa el cierre pulmonar, y durante la inspiración el mayor retorno venoso se compensa con un menor cortocircuito, de modo que el intervalo no cambia), un <strong>soplo sistólico eyectivo en el foco pulmonar</strong> por hiperflujo (no por el cortocircuito, que es silencioso) y, si el flujo es muy alto, un retumbo diastólico tricuspídeo. <strong>ECG:</strong> <strong>bloqueo incompleto de rama derecha (rSR' en V1)</strong> con eje desviado a la derecha en el secundum (eje izquierdo en el primum), con fibrilación auricular en la edad adulta. <strong>Radiografía:</strong> aumento del flujo pulmonar con arteria pulmonar prominente («botón pulmonar») y cardiomegalia derecha. El ecocardiograma con Doppler color muestra el defecto y la sobrecarga derecha.",
          "<strong>Tratamiento:</strong> se cierra el defecto si hay <strong>sobrecarga del ventrículo derecho o un cociente Qp:Qs &gt; 1,5</strong>, aunque el paciente esté asintomático, mientras la resistencia pulmonar sea normal. El <strong>cierre percutáneo con dispositivo (Amplatzer)</strong> es de elección en el ostium secundum con bordes adecuados; los demás tipos y los defectos grandes se cierran con cirugía. Está contraindicado en el <strong>síndrome de Eisenmenger</strong>. Si hay fibrilación auricular se anticoagula."
        ]
      },
      {
        "subhead": "2. Comunicación Interventricular (CIV) y Ductus Arterioso Persistente (DAP)",
        "paragraphs": [
          "<strong>CIV:</strong> es el defecto acianótico más común en el niño, y puede persistir en el adulto cuando es pequeño (<em>enfermedad de Roger</em>) o por cierre espontáneo parcial. Se ausculta un <strong>soplo holosistólico rudo, «en barra», en el borde esternal izquierdo bajo, con frémito palpable</strong>, de intensidad inversamente proporcional al tamaño en las CIV restrictivas (el defecto pequeño suena más). Una CIV pequeña es asintomática y solo requiere control y profilaxis de la endocarditis en situaciones especiales. Una CIV grande, de flujo alto, produce sobrecarga de volumen izquierda (<strong>cardiomegalia de cavidades izquierdas</strong>), insuficiencia cardíaca y, si no se corrige, hipertensión pulmonar fija y síndrome de Eisenmenger. Se cierra (cirugía o dispositivo percutáneo) si hay Qp:Qs &gt; 1,5 con sobrecarga ventricular izquierda, endocarditis previa o insuficiencia aórtica por prolapso de valva. En el adulto con un infarto reciente, una CIV de aparición súbita es una complicación mecánica (tema 2.6).",
          "<strong>Ductus arterioso persistente:</strong> comunicación entre la aorta descendente y la arteria pulmonar que debería cerrarse al nacer. Produce un cortocircuito aorta-pulmonar y un <strong>soplo continuo «en maquinaria de vapor» (soplo de Gibson)</strong> bajo la clavícula izquierda, con <strong>pulso saltón y presión de pulso amplia</strong> en el defecto mediano o grande; la radiografía muestra prominencia del botón aórtico y de la arteria pulmonar. El tratamiento en el adulto es el <strong>cierre percutáneo con dispositivo o coils</strong>, que se indica si hay síntomas, sobrecarga del ventrículo izquierdo o antecedente de endocarditis, mientras no haya hipertensión pulmonar con shunt invertido. En el Eisenmenger por ductus aparece la <strong>cianosis diferencial</strong> (pies y dedos de los pies cianóticos, manos rosadas), porque la sangre desoxigenada entra a la aorta descendente después de la salida de los vasos del cuello. El ibuprofeno o la indometacina cierran el ductus del prematuro, no el del adulto."
        ]
      },
      {
        "subhead": "3. Coartación de la Aorta",
        "paragraphs": [
          "Es una estenosis congénita de la aorta torácica, casi siempre <strong>yuxtaductal</strong> (justo distal a la arteria subclavia izquierda). Se asocia a <strong>válvula aórtica bicúspide (50 a 85%)</strong>, al <strong>síndrome de Turner</strong>, a aneurismas del polígono de Willis (hemorragia subaracnoídea) y a otros defectos. Se diagnostica en el adulto joven con hipertensión de difícil manejo, cefalea, epistaxis, claudicación de las piernas o fatiga al caminar.",
          "<em>Semiología cardinal:</em> <strong>hipertensión arterial en las extremidades superiores</strong>, con <strong>pulsos femorales muy disminuidos, retardados o ausentes</strong> (retraso radiofemoral), presión en las piernas menor que en los brazos y un <strong>gradiente de presión braquio-femoral &gt; 20 mmHg</strong>; frecuentemente, un soplo sistólico interescapular y frémito en el hueco supraesternal. La presión puede ser menor en el brazo izquierdo si la coartación compromete la subclavia. <em>Radiografía de tórax:</em> el <strong>signo del 3</strong> en la silueta de la aorta (indentación en el sitio de coartación) y las <strong>muescas en el borde inferior de las costillas 3.ª a 8.ª (signo de Roesler)</strong> por la circulación colateral de arterias intercostales dilatadas. El ECG muestra hipertrofia ventricular izquierda. La confirmación se hace con ecocardiograma (ventana supraesternal), angioTAC o resonancia.",
          "<strong>Tratamiento:</strong> la <strong>angioplastía con implante de stent</strong> es de elección en el adulto cuando la anatomía lo permite; la <strong>cirugía resectiva</strong> o el injerto se reservan para los casos complejos. Después de la corrección persisten la hipertensión y el riesgo de aneurismas, recoartación, disección aórtica, válvula bicúspide y enfermedad coronaria precoz, por lo que el paciente se controla de por vida: un adulto operado de coartación que regresa con un soplo diastólico y presión divergente tiene una insuficiencia aórtica por válvula bicúspide, no una recoartación. La hipertensión por coartación se sospecha en todo joven con hipertensión (tema 5.3)."
        ]
      },
      {
        "subhead": "4. Síndrome de Eisenmenger, Otros Defectos y Principios Generales",
        "paragraphs": [
          "El <strong>síndrome de Eisenmenger</strong> es el destino de cualquier cortocircuito izquierda-derecha grande no corregido: el exceso de flujo daña los vasos pulmonares y la resistencia pulmonar supera a la sistémica, de modo que el cortocircuito se invierte (derecha-izquierda). Aparecen <strong>cianosis, dedos en palillo de tambor, eritrocitosis</strong> (la flebotomía solo si hay síntomas de hiperviscosidad), hemoptisis y arritmias. En este momento <strong>el defecto no se cierra</strong>, porque el ventrículo derecho no tolera la presión pulmonar; se usan vasodilatadores pulmonares (sildenafilo, bosentán), se evita la altitud, la deshidratación y la anemia, y el <strong>embarazo está contraindicado</strong> (mortalidad materna de 30 a 50%).",
          "Otros defectos que llegan al adulto: la <strong>tetralogía de Fallot operada</strong> (con insuficiencia pulmonar y riesgo de arritmias), la <strong>estenosis pulmonar valvar</strong> (soplo eyectivo con clic, se trata con valvuloplastía), la <strong>anomalía de Ebstein</strong> (insuficiencia tricuspídea, arritmias y preexcitación) y el <strong>canal auriculoventricular</strong> del síndrome de Down. La cardiopatía congénita cianótica no reparada en el adulto es poco frecuente y se maneja en centros especializados.",
          "<strong>Principios para el médico general:</strong> un soplo asintomático no es un defecto hasta demostrarlo, pero un soplo con R2 desdoblado y fijo, un soplo continuo, un soplo holosistólico con frémito, pulsos femorales débiles o cianosis exigen ecocardiograma y derivación. La <strong>profilaxis de endocarditis</strong> se reserva a la cardiopatía cianótica no reparada, la reparada con material protésico en los primeros 6 meses y la que tiene defectos residuales junto al material (ver tema 4.7). El embarazo exige consejo previo y cuidado en centro de alta complejidad. Las cardiopatías congénitas operables del niño tienen garantía GES; el adulto con un defecto residual se deriva a una unidad de cardiopatías congénitas del adulto."
        ]
      },
      {
        "subhead": "5. Cuándo Sospechar, Cómo Estudiar y Cómo Derivar",
        "paragraphs": [
          "Los defectos congénitos del adulto se diagnostican por azar: un soplo en un examen de salud laboral o deportivo, un electrocardiograma con bloqueo de rama derecha en una persona joven, una fibrilación auricular a los 35 años, una disnea que aparece en el embarazo, un accidente cerebrovascular sin factores de riesgo (embolia paradójica) o una hipertensión en un menor de 30 años. Ante cualquiera de estas situaciones se hace una anamnesis dirigida (soplo infantil, cianosis, infecciones respiratorias recurrentes, fatiga al comer o jugar de niño, antecedentes familiares, síndromes genéticos) y un examen que incluya <strong>pulsos en las cuatro extremidades</strong>, presión en brazo y pierna, saturación de oxígeno y auscultación con maniobras.",
          "El examen de elección es el <strong>ecocardiograma transtorácico con Doppler</strong>; el transesofágico y la resonancia afinan el tipo de CIA, el drenaje venoso pulmonar y la anatomía de la aorta; el cateterismo cardíaco mide la resistencia pulmonar y el cociente Qp:Qs cuando se duda de la reversibilidad de la hipertensión pulmonar. La oximetría de pulso en la mano derecha y en el pie detecta la cianosis diferencial del ductus.",
          "<strong>Soplo funcional frente a defecto.</strong> Un soplo sistólico eyectivo suave y variable con la posición, sin desdoblamiento fijo ni síntomas, en un joven con ECG normal, es un soplo funcional y no necesita estudio; pero si el soplo está en el foco pulmonar y hay un desdoblamiento fijo o un bloqueo de rama derecha, la respuesta del examen es CIA. Otras preguntas que se repiten: la coartación como causa de hipertensión del joven y la insuficiencia aórtica de un paciente operado de coartación (válvula bicúspide), que se confunde con una recoartación.",
          "<strong>Embarazo y deporte.</strong> La mayoría de las mujeres con CIA, CIV o ductus pequeños, sin hipertensión pulmonar, tolera el embarazo, pero con riesgo de arritmias y embolia paradójica; se desaconseja con hipertensión pulmonar grave o Eisenmenger. Las personas con defectos pequeños pueden hacer ejercicio sin restricción; con hipertensión pulmonar, cianosis o arritmias se restringen los esfuerzos intensos."
        ]
      }
    ],
    "table": {
      "title": "Resumen Semiológico de las Cardiopatías Congénitas Clave del Adulto",
      "headers": [
        "Cardiopatía congénita",
        "Hallazgo auscultatorio cardinal",
        "Signo electrocardiográfico o radiológico",
        "Tratamiento de elección"
      ],
      "rows": [
        [
          "Comunicación interauricular (CIA)",
          "Desdoblamiento amplio y FIJO de R2 + soplo eyectivo pulmonar",
          "ECG: bloqueo incompleto de rama derecha (rSR' en V1) · dilatación AD/VD · botón pulmonar",
          "Cierre percutáneo con dispositivo Amplatzer (Qp:Qs > 1,5)"
        ],
        [
          "Comunicación interventricular (CIV)",
          "Soplo holosistólico rudo en barra + frémito",
          "Cardiomegalia de cavidades izquierdas",
          "Cierre quirúrgico o percutáneo"
        ],
        [
          "Ductus arterioso persistente (DAP)",
          "Soplo continuo «en maquinaria» (Gibson) + pulso saltón",
          "Prominencia del botón aórtico y de la arteria pulmonar",
          "Cierre percutáneo con dispositivo o coils"
        ],
        [
          "Coartación aórtica",
          "Pulsos femorales disminuidos + HTA en los brazos",
          "Rx: signo de Roesler (muescas costales) y signo del 3",
          "Angioplastía con stent o cirugía resectiva"
        ]
      ]
    },
    "vignette": "Hombre de 22 años es derivado desde un chequeo laboral por hallazgo de hipertensión arterial (PA 175/95 mmHg en el brazo derecho). Al examen complementario se constatan pulsos radiales llenos y vigorosos, pero pulsos femorales y pedios muy débiles y retardados; la presión en el tobillo es de 100/60 mmHg. La radiografía de tórax muestra muescas erosivas en el borde inferior de las costillas posteriores (signo de Roesler) y una indentación aórtica «en 3». ECG con hipertrofia ventricular izquierda.",
    "explicacion": "El cuadro (hipertensión en las extremidades superiores, pulsos femorales disminuidos y retardados, gradiente braquio-femoral mayor de 20 mmHg y el signo de Roesler en la radiografía) es patognomónico de coartación aórtica. La confirmación se hace con ecocardiograma supraesternal y angioTAC de aorta, y el tratamiento de elección en el adulto es la angioplastía con stent (o corrección quirúrgica en anatomías complejas), con control de por vida de la presión arterial, la válvula aórtica (bicúspide en más del 50%) y la aorta.",
    "keyPoints": [
      "CIA: desdoblamiento amplio y fijo de R2 que no varía con la respiración, soplo eyectivo pulmonar y bloqueo incompleto de rama derecha (rSR' en V1); es la cardiopatía congénita más frecuente en el adulto.",
      "La CIA se cierra con dispositivo percutáneo (Amplatzer) si hay sobrecarga del ventrículo derecho o Qp:Qs > 1,5; complicaciones: fibrilación auricular, embolia paradójica, hipertensión pulmonar.",
      "CIV: soplo holosistólico rudo en barra en el borde esternal izquierdo bajo, con frémito; la pequeña solo se controla y se cierra la que tiene Qp:Qs > 1,5.",
      "Ductus: soplo continuo «en maquinaria» (Gibson) infraclavicular izquierdo con pulso saltón; se cierra con dispositivo o coils; en Eisenmenger hay cianosis diferencial.",
      "Coartación: hipertensión en los brazos, pulsos femorales débiles y retardados, gradiente braquio-femoral > 20 mmHg, muescas costales de Roesler y signo del 3; se asocia a válvula bicúspide y Turner.",
      "Coartación en el adulto: stent o cirugía; tras la corrección persisten hipertensión y riesgo aórtico; un soplo diastólico tras una coartación operada suele ser insuficiencia aórtica por bicúspide.",
      "Síndrome de Eisenmenger: cortocircuito invertido con cianosis y eritrocitosis; no se cierra el defecto, se dan vasodilatadores pulmonares y el embarazo está contraindicado.",
      "Profilaxis de endocarditis solo en cardiopatía congénita cianótica no reparada, reparada con material protésico (primeros 6 meses) o con defecto residual junto al material."
    ],
    "questions": [
      {
        "stem": "Mujer de 45 años que recuerda que durante un embarazo hace 20 años le diagnosticaron un soplo cardíaco. Actualmente asintomática, tolera el ejercicio normal. Auscultación: soplo sistólico II/VI en foco pulmonar con desdoblamiento fijo del segundo ruido. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Tetralogía de Fallot"
          },
          {
            "id": "B",
            "text": "Ductus arterioso persistente"
          },
          {
            "id": "C",
            "text": "Estenosis pulmonar"
          },
          {
            "id": "D",
            "text": "Comunicación interauricular (CIA)"
          },
          {
            "id": "E",
            "text": "Comunicación interventricular"
          }
        ],
        "correcta": "D",
        "explicacion": "Soplo sistólico eyectivo en el foco pulmonar con desdoblamiento fijo del segundo ruido: comunicación interauricular, que suele diagnosticarse por primera vez en el adulto o en un embarazo. El ductus daría un soplo continuo y la CIV, un soplo holosistólico con frémito.",
        "recTag": "EUNACOM Julio 2025 · Pregunta 147"
      },
      {
        "stem": "Un hombre de 40 años consulta por disnea de esfuerzos de algunos años de evolución, que aparece con medianos esfuerzos, asociada a palpitaciones ocasionales. Al examen físico tiene edema de extremidades inferiores, FC: 75x’, PA: 120/80 mmHg, murmullo pulmonar presente, con escasos crépitos bibasales y al examen cardíaco presenta un soplo sistólico de ubicación paraesternal, con segundo ruido desdoblado fijo. Se solicita un electrocardiograma, que muestra eje a +120°, fibrilación auricular, con un bloqueo completo de la rama derecha del haz de His. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Comunicación interauricular"
          },
          {
            "id": "B",
            "text": "Ductus arteriosos persistente"
          },
          {
            "id": "C",
            "text": "Comunicación interventricular"
          },
          {
            "id": "D",
            "text": "Estenosis aórtica"
          },
          {
            "id": "E",
            "text": "Estenosis mitral"
          }
        ],
        "correcta": "A",
        "explicacion": "Un adulto con disnea, edema, soplo sistólico paraesternal, R2 desdoblado fijo, fibrilación auricular y bloqueo completo de rama derecha: comunicación interauricular con dilatación derecha, el cuadro completo del adulto sin tratar. La estenosis aórtica no desdobla el segundo ruido y la mitral da un retumbo diastólico.",
        "recTag": "EUNACOM Diciembre 2019 · Pregunta 28"
      },
      {
        "stem": "Un hombre de 40 años consulta por disnea y palpitaciones ocasionales. Al examen físico presenta un soplo sistólico basal, con desdoblamiento fijo del segundo ruido. Se solicita un electrocardiograma, que muestra un bloqueo completo de rama derecha. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Comunicación interauricular"
          },
          {
            "id": "B",
            "text": "Ductus arteriosos persistente"
          },
          {
            "id": "C",
            "text": "Comunicación interventricular"
          },
          {
            "id": "D",
            "text": "Estenosis aórtica"
          },
          {
            "id": "E",
            "text": "Estenosis pulmonar"
          }
        ],
        "correcta": "A",
        "explicacion": "Un soplo sistólico basal con desdoblamiento fijo del segundo ruido y bloqueo de rama derecha es una comunicación interauricular, aun en un adulto: el hallazgo clave es la fijeza del desdoblamiento, que no cambia con la respiración.",
        "recTag": "EUNACOM Julio 2016 · Pregunta 86"
      },
      {
        "stem": "Un paciente de 24 años presenta disnea de esfuerzos, asociado a edema de extremidades inferiores. Refiere antecedente de soplo en la infancia. Al examen físico tiene PA: 120/80 mmHg, FC: 74x’, examen cardiopulmona con un segundo ruido desdoblado y fijo, un soplo sistólico eyectivo, paraesternal izquierdo y crepitaciones escasas en ambas bases pulmonares. El electrocardiograma muestra una imagen de bloqueo completo de rama derecha. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Comunicación interauricular"
          },
          {
            "id": "B",
            "text": "Comunicación interventricular"
          },
          {
            "id": "C",
            "text": "Coartación aórtica"
          },
          {
            "id": "D",
            "text": "Ductus arterioso persistente"
          },
          {
            "id": "E",
            "text": "Tetralogía de Fallot"
          }
        ],
        "correcta": "A",
        "explicacion": "Un adulto joven con antecedente de soplo en la infancia, disnea, edema, soplo eyectivo paraesternal izquierdo, segundo ruido desdoblado fijo y bloqueo de rama derecha: comunicación interauricular. La coartación presenta hipertensión con pulsos femorales débiles, y el ductus un soplo continuo.",
        "recTag": "EUNACOM Julio 2019 · Pregunta 137"
      },
      {
        "stem": "Hombre de 25 años en estudio por hipertensión arterial de difícil manejo. Al examen se pesquisan pulsos femorales marcadamente disminuidos en comparación con los radiales. La radiografía de tórax muestra erosiones óseas en el borde inferior de las costillas. ¿Cuál es el diagnóstico?",
        "options": [
          {
            "id": "A",
            "text": "Coartación aórtica"
          },
          {
            "id": "B",
            "text": "Feocromocitoma bilateral"
          },
          {
            "id": "C",
            "text": "Hiperaldosteronismo primario"
          },
          {
            "id": "D",
            "text": "Enfermedad de Takayasu"
          },
          {
            "id": "E",
            "text": "Estenosis de arteria renal aterosclerótica"
          }
        ],
        "correcta": "A",
        "explicacion": "La coartación aórtica se presenta como hipertensión arterial en un paciente joven con asimetría de pulsos (braquiales fuertes y femorales débiles) y el signo radiológico de Roesler (muescas costales por la dilatación de las arterias intercostales colaterales). El diagnóstico se confirma con ecocardiograma, angioTAC o resonancia, y el tratamiento es el stent o la cirugía.",
        "recTag": "Banco Oficial AEE"
      },
      {
        "stem": "Un hombre de 32 años, con antecedente de un soplo no estudiado en la infancia, consulta por disnea, cianosis de los dedos de los pies y de las uñas, con las manos de color normal, y dedos en palillo de tambor. Se ausculta un soplo continuo apagado bajo la clavícula izquierda y un segundo ruido pulmonar muy intenso. ¿Cuál es la conducta más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "Cierre percutáneo urgente del ductus con dispositivo"
          },
          {
            "id": "B",
            "text": "Ligadura quirúrgica del ductus"
          },
          {
            "id": "C",
            "text": "Derivar a cardiología: síndrome de Eisenmenger por ductus, sin cerrar el defecto y con vasodilatadores pulmonares"
          },
          {
            "id": "D",
            "text": "Indometacina endovenosa"
          },
          {
            "id": "E",
            "text": "Profilaxis con penicilina benzatina"
          }
        ],
        "correcta": "C",
        "explicacion": "La cianosis diferencial (pies cianóticos y manos normales) con un ductus y un R2 pulmonar fuerte indica síndrome de Eisenmenger: la resistencia pulmonar es mayor que la sistémica y el cortocircuito se invirtió. En esa situación, cerrar el defecto es contraproducente, porque el ventrículo derecho depende del cortocircuito para descomprimirse; se usan vasodilatadores pulmonares, se evitan la deshidratación y el embarazo y se deriva a cardiología.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "4.4§1 (reescrito y ampliado al estándar, oct-2026; el diagrama de cianosis neonatal fue reemplazado por uno del adulto)",
    "_estado": "estandar"
  },
  {
    "id": "cardio-28",
    "classId": "cardio-28",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Valvulopatías, Cardiopatías Congénitas y Endocarditis",
    "topicLabel": "4.7",
    "title": "Endocarditis Infecciosa: Criterios de Duke, Tratamiento y Profilaxis",
    "perfilCode": "1.01.1.007, 1.04.2.003, 1.04.3.007",
    "dx": "Sospecha",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Sin garantía GES específica para la endocarditis; el recambio valvular se resuelve en un centro de referencia",
    "reconstrucciones": "",
    "frecuencia": "Alta · Hemocultivos antes del antibiótico y ecocardiograma, criterios de Duke, germen según el contexto, tratamiento dirigido, indicaciones de cirugía y profilaxis dental en pacientes de alto riesgo",
    "svg": null,
    "algoTitle": "Algoritmo de la endocarditis infecciosa",
    "diagram": {
      "title": "Algoritmo de la Endocarditis Infecciosa: Sospecha, Hemocultivos, Duke, Tratamiento, Cirugía y Profilaxis",
      "svg": "<svg viewBox=\"0 0 620 440\" width=\"100%\" style=\"max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif\">\n  <defs><marker id=\"ar28\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#475569\"/></marker></defs>\n  <style>\n    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}\n    .t{font-size:10px;fill:#15181d}\n    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}\n    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}\n    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}\n    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}\n    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar28)}\n  </style>\n  <rect class=\"b\" x=\"90\" y=\"6\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"24.5\" text-anchor=\"middle\" font-weight=\"700\">Fiebre + soplo nuevo o cambiante, fenómenos embólicos o inmunológicos</text>\n  <text class=\"sub\" x=\"310\" y=\"36.5\" text-anchor=\"middle\">Prótesis, valvulopatía, drogas endovenosas, procedimiento dental o fiebre sin foco</text>\n  <path class=\"ln\" d=\"M310,46 V62\"/>\n  <rect class=\"dec\" x=\"90\" y=\"62\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"80.5\" text-anchor=\"middle\" font-weight=\"700\">3 hemocultivos de sitios distintos ANTES del antibiótico</text>\n  <text class=\"sub\" x=\"310\" y=\"92.5\" text-anchor=\"middle\">+ ecocardiograma transtorácico (transesofágico si prótesis, TTE negativo o complicación)</text>\n  <path class=\"ln\" d=\"M310,102 V118\"/>\n  <rect class=\"dec\" x=\"90\" y=\"118\" width=\"440\" height=\"40\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"136.5\" text-anchor=\"middle\" font-weight=\"700\">Criterios de Duke modificados</text>\n  <text class=\"sub\" x=\"310\" y=\"148.5\" text-anchor=\"middle\">Definida: 2 mayores · 1 mayor + 3 menores · 5 menores</text>\n  <path class=\"ln\" d=\"M310,158 V172 H158 V184\"/>\n  <path class=\"ln\" d=\"M310,172 H462 V184\"/>\n  <rect class=\"acc\" x=\"12\" y=\"184\" width=\"292\" height=\"66\" rx=\"3\"/>\n  <text class=\"accT t\" x=\"158\" y=\"204.5\" text-anchor=\"middle\" font-weight=\"700\">HOSPITALIZAR Y TRATAR</text>\n  <text class=\"accS\" x=\"158\" y=\"216.5\" text-anchor=\"middle\">Empírico si hay sepsis o IC: ampicilina + cloxacilina + gentamicina</text>\n  <text class=\"accS\" x=\"158\" y=\"227.5\" text-anchor=\"middle\">(prótesis o SARM: vancomicina + gentamicina)</text>\n  <text class=\"accS\" x=\"158\" y=\"238.5\" text-anchor=\"middle\">Luego dirigido al germen: 4-6 semanas EV</text>\n  <rect class=\"dec\" x=\"316\" y=\"184\" width=\"292\" height=\"66\" rx=\"3\"/>\n  <text class=\"t\" x=\"462\" y=\"210\" text-anchor=\"middle\" font-weight=\"700\">Derivar a centro con equipo de endocarditis</text>\n  <text class=\"sub\" x=\"462\" y=\"222\" text-anchor=\"middle\">Cardiología, infectología y cirugía cardíaca</text>\n  <text class=\"sub\" x=\"462\" y=\"233\" text-anchor=\"middle\">Control de hemocultivos a las 48-72 h</text>\n  <path class=\"ln\" d=\"M158,250 V268\"/>\n  <path class=\"ln\" d=\"M462,250 V268\"/>\n  <rect class=\"warn\" x=\"12\" y=\"268\" width=\"596\" height=\"62\" rx=\"3\"/>\n  <text class=\"warnT t\" x=\"310\" y=\"286.5\" text-anchor=\"middle\" font-weight=\"700\">CIRUGÍA VALVULAR</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"298.5\" text-anchor=\"middle\">Insuficiencia cardíaca por disfunción valvular severa (la más frecuente y urgente) · absceso, fístula o bloqueo AV nuevo</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"309.5\" text-anchor=\"middle\">Fiebre o hemocultivos positivos tras 7-10 días de tratamiento · vegetación &gt; 10 mm con embolia, o &gt; 15 mm</text>\n  <text class=\"warnT sub\" x=\"310\" y=\"320.5\" text-anchor=\"middle\">Hongos o germen resistente · prótesis disfuncional o dehiscente · urgente (24 h) si shock o edema pulmonar</text>\n  <path class=\"ln\" d=\"M310,330 V346\"/>\n  <rect class=\"b\" x=\"90\" y=\"346\" width=\"440\" height=\"74\" rx=\"3\"/>\n  <text class=\"t\" x=\"310\" y=\"370.5\" text-anchor=\"middle\" font-weight=\"700\">PROFILAXIS (solo alto riesgo + procedimiento dental con manipulación gingival)</text>\n  <text class=\"sub\" x=\"310\" y=\"382.5\" text-anchor=\"middle\">Prótesis valvular · endocarditis previa · cardiopatía congénita cianótica o con material</text>\n  <text class=\"sub\" x=\"310\" y=\"393.5\" text-anchor=\"middle\">Amoxicilina 2 g VO, 30-60 min antes (dosis única)</text>\n  <text class=\"sub\" x=\"310\" y=\"404.5\" text-anchor=\"middle\">Alérgico a penicilina: azitromicina o claritromicina 500 mg · NO en valvulopatía nativa</text>\n</svg>"
    },
    "contexto": "La endocarditis infecciosa es una urgencia que se oculta tras una fiebre prolongada: el paciente consulta por cansancio, fiebre y baja de peso, y el diagnóstico exige pensar en ella antes de dar un antibiótico que negativice los cultivos. El EUNACOM la pregunta desde tres ángulos: el examen de elección (hemocultivos antes que el ecocardiograma, el eco para ver la vegetación), el antibiótico según el germen y el contexto (S. viridans, S. aureus del usuario de drogas, estafilococo de la prótesis precoz) y la profilaxis dental, que solo corresponde al paciente de alto riesgo. El médico general debe sospecharla, solicitar los exámenes correctos y derivar a un centro con equipo de endocarditis.",
    "contentSections": [
      {
        "subhead": "1. Sospecha Clínica: Cuándo Pensar en Endocarditis y Qué Pedir",
        "paragraphs": [
          "La <b>endocarditis infecciosa (EI)</b> es la infección microbiana del endocardio, con formación de <b>vegetaciones</b> (fibrina, plaquetas y gérmenes) sobre las válvulas, el endotelio mural o material protésico. Se sospecha ante <b>fiebre con un soplo nuevo o que cambia</b>, fenómenos embólicos o inmunológicos, o fiebre prolongada sin foco en un paciente de riesgo. Los factores de riesgo son: <b>prótesis valvular</b>, valvulopatía previa (degenerativa, reumática, válvula aórtica bicúspide, prolapso mitral con insuficiencia), cardiopatía congénita, <b>EI previa</b>, <b>consumo de drogas endovenosas</b>, dispositivos intracardíacos, catéteres y hemodiálisis, y procedimientos dentales o quirúrgicos.",
          "<b>Formas clínicas:</b> la <b>endocarditis subaguda</b> (días a semanas) afecta válvulas previamente dañadas y la causa más frecuente es <b>Streptococcus viridans</b> (origen dental): fiebre, astenia, baja de peso, soplo y fenómenos inmunológicos. La <b>endocarditis aguda</b> (menos de 7 días, compromiso séptico) la produce <b>Staphylococcus aureus</b>, incluso sobre válvulas sanas, y es típica del consumo de drogas endovenosas, donde compromete la <b>válvula tricúspide</b> y causa embolias sépticas pulmonares. Otros gérmenes: <b>enterococo</b> (origen urinario o digestivo), <b>Streptococcus gallolyticus (bovis)</b> (obliga a hacer colonoscopia), estafilococos coagulasa negativos y S. aureus en la <b>endocarditis protésica precoz</b> (posterior a la cirugía), grupo <b>HACEK</b>, hongos, y Coxiella o Bartonella en las de hemocultivo negativo.",
          "<b>Hallazgos del examen:</b> fiebre, soplo, esplenomegalia y los signos periféricos: <b>petequias</b> (conjuntivas, paladar, extremidades), <b>hemorragias en astilla</b> subungueales, <b>nódulos de Osler</b> (dolorosos, en la pulpa de los dedos; inmunológicos), <b>lesiones de Janeway</b> (máculas eritematosas indoloras en palmas y plantas; embolias sépticas) y <b>manchas de Roth</b> (hemorragias retinianas de centro pálido; inmunológicas). Las complicaciones definen el pronóstico: <b>insuficiencia valvular aguda con insuficiencia cardíaca</b> (la primera causa de cirugía y de muerte), absceso perivalvular (PR que se alarga o bloqueo AV nuevo), embolias (cerebrales, esplénicas, renales), aneurismas micóticos y glomerulonefritis.",
          "<b>Exámenes iniciales:</b> <b>tres hemocultivos de sitios distintos antes de la primera dosis de antibiótico</b> (sin esperar el peak febril; es el examen de elección para el diagnóstico etiológico); hemograma con leucocitosis, <b>VHS y PCR elevadas</b>, anemia de enfermedad crónica, sedimento de orina con hematuria y factor reumatoideo. El <b>ecocardiograma transtorácico</b> se pide a todos los pacientes con sospecha; el <b>transesofágico</b> se usa si el estudio transtorácico es negativo con alta sospecha, en portadores de prótesis o si se sospechan complicaciones. Un ecocardiograma normal no descarta la endocarditis si la sospecha clínica es alta: se repite en 7 a 10 días."
        ]
      },
      {
        "subhead": "2. Criterios de Duke Modificados: Cómo se Confirma el Diagnóstico",
        "paragraphs": [
          "El diagnóstico se apoya en los <b>criterios de Duke modificados</b>. <b>Criterios mayores:</b> 1) <b>hemocultivos positivos</b> para un germen típico (S. viridans, S. gallolyticus, HACEK, S. aureus o enterococo adquirido en la comunidad) en <b>al menos 2 muestras separadas</b>, o hemocultivos persistentemente positivos, o serología positiva para Coxiella burnetii; 2) <b>evidencia de compromiso endocárdico</b>: ecocardiograma con vegetación, absceso o dehiscencia nueva de una prótesis, o <b>regurgitación valvular nueva</b>.",
          "<b>Criterios menores:</b> 1) <b>predisposición</b> (cardiopatía de riesgo o consumo de drogas endovenosas); 2) <b>fiebre ≥ 38 °C</b>; 3) <b>fenómenos vasculares</b> (embolias arteriales, infartos pulmonares sépticos, aneurismas micóticos, hemorragia intracraneal, hemorragias conjuntivales, lesiones de Janeway); 4) <b>fenómenos inmunológicos</b> (glomerulonefritis, nódulos de Osler, manchas de Roth, factor reumatoideo); 5) evidencia microbiológica que no cumple un criterio mayor.",
          "<b>Interpretación:</b> la endocarditis es <b>definida</b> con <b>2 criterios mayores</b>, o <b>1 mayor + 3 menores</b>, o <b>5 menores</b>; es <b>posible</b> con 1 mayor + 1 menor o con 3 menores; se <b>descarta</b> si hay un diagnóstico alternativo firme o la fiebre cede con menos de 4 días de antibiótico. Para el médico general el criterio no es un requisito para actuar: ante sospecha razonable se toman los hemocultivos, se pide el ecocardiograma y se <b>deriva a un centro con equipo de endocarditis</b> (cardiología, infectología y cirugía cardíaca). Las guías más recientes agregan el PET-TC y la TC cardíaca para las prótesis."
        ]
      },
      {
        "subhead": "3. Complicaciones, Hemocultivo Negativo y Endocarditis No Infecciosa",
        "paragraphs": [
          "<strong>Hallazgos de laboratorio y de imagen.</strong> Se encuentran anemia de enfermedad crónica, leucocitosis, VHS y PCR elevadas, hematuria microscópica, factor reumatoideo positivo y, cuando hay glomerulonefritis por complejos inmunes, <strong>C3 y C4 disminuidos con creatinina elevada y cilindros hemáticos</strong>. El ecocardiograma muestra una masa oscilante adherida a la valva, del lado de menor presión (cara auricular de la mitral, cara ventricular de la aórtica); la vegetación se ve como una masa móvil de ecogenicidad blanda, y se buscan sus complicaciones: perforación valvular, aneurisma valvular, absceso del anillo, fístula o dehiscencia de una prótesis. Como complemento, se hace tomografía cerebral o de cuerpo entero para buscar embolias silentes y, en las prótesis, PET-TC.",
          "<strong>Complicaciones extracardíacas.</strong> Las <strong>embolias sépticas</strong> aparecen en el 20 a 40% de los pacientes, sobre todo con vegetaciones grandes y móviles de la válvula mitral y por S. aureus: cerebro (infarto, absceso, hemorragia), bazo (infarto o absceso, con dolor en el hipocondrio izquierdo y hombro), riñón, extremidades y mesentéricas. Los <strong>aneurismas micóticos</strong> (cerebrales, mesentéricos) pueden romperse semanas o meses después y producir hemorragia subaracnoídea o cerebral: ante una cefalea nueva se pide una angiografía. La <strong>glomerulonefritis por complejos inmunes</strong> explica la hematuria dismórfica y la insuficiencia renal (hipocomplementemia) y mejora con el tratamiento de la infección. Un ACV en un paciente con endocarditis <strong>contraindica la trombolisis</strong> y retrasa la cirugía si hay hemorragia.",
          "<strong>Endocarditis derecha del usuario de drogas.</strong> Se localiza en la válvula tricúspide por S. aureus y produce fiebre alta, embolias sépticas pulmonares (nódulos cavitados, hemoptisis, dolor pleurítico) y soplo de insuficiencia tricuspídea que aumenta con la inspiración (maniobra de Rivero-Carvallo). Casi nunca produce insuficiencia cardíaca izquierda. Se trata con cloxacilina por 4 semanas (2 si no hay complicaciones y es sensible) y se opera solo si falla el tratamiento. Es además la ocasión de derivar al paciente a un programa de tratamiento de adicciones.",
          "<strong>Endocarditis con hemocultivos negativos</strong> (5 a 10%): lo más frecuente es el <strong>antibiótico recibido antes de tomar los hemocultivos</strong>; las otras causas son los gérmenes de crecimiento lento o intracelulares (grupo HACEK, <em>Coxiella burnetii</em> en la fiebre Q, <em>Bartonella</em>, <em>Brucella</em>, <em>Tropheryma whipplei</em>) y los hongos; se confirman con serología, cultivo prolongado o PCR en la válvula, y se manejan con infectología. La <strong>endocarditis no infecciosa</strong> también existe: la <strong>endocarditis trombótica no bacteriana (marántica)</strong> aparece en el cáncer (adenocarcinoma de páncreas o pulmón), en estados de hipercoagulabilidad y en la sepsis crónica, con vegetaciones estériles que embolizan; y la <strong>endocarditis de Libman-Sacks</strong>, del lupus eritematoso sistémico y del síndrome antifosfolípido, con vegetaciones verrugosas en las dos caras de las valvas. Ambas tienen hemocultivos negativos y no se acompañan de fiebre importante; se tratan con anticoagulación (heparina), con la enfermedad de base y no con antibióticos.",
          "<strong>Seguimiento y prevención de recaídas.</strong> Tras el tratamiento se hace un ecocardiograma de control, se examina la dentadura (la mayoría de las endocarditis por estreptococos viene de la boca), se educa sobre la higiene dental y los síntomas de alarma, y se advierte al paciente que ahora tiene <strong>alto riesgo de endocarditis</strong>: toda fiebre sin foco exige hemocultivos antes de dar antibióticos. Un paciente con prótesis valvular que consulta por fiebre sin foco tiene una endocarditis hasta demostrar lo contrario, y la pregunta del examen es casi siempre la misma: hemocultivos y ecocardiograma."
        ]
      },
      {
        "subhead": "4. Tratamiento Inicial, Antibiótico Dirigido e Indicación Quirúrgica",
        "paragraphs": [
          "<b>Conducta inicial (nivel inicial y derivación):</b> hospitalizar, tomar los hemocultivos y comenzar el <b>antibiótico endovenoso empírico sin esperar el resultado</b> en el paciente séptico o con insuficiencia cardíaca. Para la válvula nativa adquirida en la comunidad se usa <b>ampicilina + cloxacilina + gentamicina</b>; si hay prótesis, atención sanitaria previa o riesgo de SARM, <b>vancomicina + gentamicina</b> (en prótesis se agrega rifampicina más tarde). El esquema se ajusta de inmediato al germen aislado y al antibiograma. Se evitan los anticoagulantes si no son indispensables, por el riesgo de hemorragia por embolia cerebral.",
          "<b>Tratamiento dirigido y duración (siempre endovenoso y prolongado):</b> <b>S. viridans sensible a penicilina:</b> <b>penicilina sódica</b> o ceftriaxona por <b>4 semanas</b> en válvula nativa y <b>6 semanas</b> en prótesis; <b>S. aureus sensible a meticilina:</b> <b>cloxacilina</b> por 4 a 6 semanas; <b>S. aureus resistente (SARM):</b> <b>vancomicina</b>; <b>enterococo:</b> ampicilina + ceftriaxona (o gentamicina) por 6 semanas; <b>endocarditis protésica precoz</b> (por S. aureus o epidermidis): vancomicina + gentamicina + rifampicina por al menos 6 semanas. Se controlan hemocultivos tras 48 a 72 horas, la función renal (aminoglucósidos y vancomicina) y se hace un ecocardiograma al terminar el tratamiento.",
          "<b>Indicaciones de cirugía valvular</b> (se decide con el equipo en el centro de referencia): 1) <b>insuficiencia cardíaca</b> por disfunción valvular severa, la más frecuente y urgente; 2) <b>infección no controlada</b>: absceso, fístula, bloqueo AV nuevo, hemocultivos positivos o fiebre persistentes después de 7 a 10 días de tratamiento adecuado; 3) <b>prevención de embolias</b>: vegetación grande (> 10 mm) con una o más embolias, o > 15 mm; 4) germen difícil de erradicar (hongos, bacilos gramnegativos multirresistentes, SARM persistente); 5) endocarditis protésica con dehiscencia o disfunción. La cirugía es <b>urgente</b> (en 24 horas) si hay shock o edema pulmonar refractario.",
          "<b>Endocarditis derecha</b> (usuarios de drogas endovenosas): la vegetación en la <b>tricúspide</b> por S. aureus causa embolias sépticas pulmonares (nódulos cavitados, fiebre, hemoptisis) y casi nunca insuficiencia cardíaca izquierda; se trata con cloxacilina y se opera solo si falla el tratamiento. Después del alta: control dental, <b>abstención del consumo de drogas</b>, educación sobre síntomas y profilaxis en los controles futuros por ser de alto riesgo."
        ]
      },
      {
        "subhead": "5. Profilaxis de la Endocarditis Infecciosa",
        "paragraphs": [
          "La profilaxis antibiótica ya <b>no se indica a todos los portadores de valvulopatía</b>; se reserva a los pacientes de <b>alto riesgo de endocarditis con mala evolución</b>: 1) <b>prótesis valvular</b> (mecánica, biológica o transcatéter) o material protésico usado en la reparación valvular; 2) <b>endocarditis previa</b>; 3) <b>cardiopatía congénita</b> cianótica no reparada, o reparada con material protésico durante los primeros 6 meses, o con defectos residuales junto al material; 4) trasplante cardíaco con valvulopatía.",
          "<b>¿Para qué procedimientos?</b> Solo para los <b>dentales</b> que manipulan la encía, la región periapical del diente o perforan la mucosa oral (extracciones, cirugía, limpieza profunda). <b>No se indica</b> en procedimientos digestivos (endoscopia, colonoscopia), genitourinarios, ginecológicos, partos, ni en broncoscopia sin biopsia, ni en pacientes con <b>valvulopatía nativa</b> (estenosis aórtica, estenosis o insuficiencia mitral, prolapso mitral), cardiopatía isquémica o marcapasos.",
          "<b>Esquema:</b> <b>amoxicilina 2 g vía oral en dosis única, 30 a 60 minutos antes del procedimiento</b> (niños 50 mg/kg); si no puede usar la vía oral, ampicilina 2 g EV o IM, o cefazolina o ceftriaxona 1 g EV. En alérgicos a penicilina: <b>azitromicina o claritromicina 500 mg</b> o doxiciclina 100 mg por vía oral (la clindamicina ya no se recomienda). No se dan dosis posteriores. La mejor prevención es la <b>higiene dental</b> y el control odontológico periódico, que reducen las bacteriemias espontáneas."
        ]
      },
      {
        "subhead": "6. Cuadros que se Repiten en el Examen y Errores Frecuentes",
        "paragraphs": [
          "<strong>El germen según el contexto</strong> es la forma en que el examen lo plantea. Subaguda (semanas), sobre una válvula previamente dañada (reumática, degenerativa, bicúspide, prolapso con insuficiencia), con un procedimiento dental reciente: <em>Streptococcus viridans</em>. Aguda (días), séptica, en un usuario de drogas endovenosas, con la válvula tricúspide y embolias pulmonares, o en un paciente con un catéter o hemodiálisis: <em>Staphylococcus aureus</em>. Prótesis valvular con menos de 2 meses de la cirugía: estafilococo aureus o epidermidis; prótesis tardía: estreptococos y estafilococos. Origen urinario, ginecológico o digestivo: <em>Enterococcus</em>. Antecedente de cáncer de colon o hepatopatía: <em>Streptococcus gallolyticus</em> (antes bovis), que obliga a hacer una colonoscopia.",
          "<strong>Errores clásicos.</strong> 1) Dar antibióticos «para ver si baja la fiebre» antes de tomar los hemocultivos. 2) Tomar un solo hemocultivo o esperar el pico febril: se toman tres, de sitios distintos, sin esperar. 3) Creer que un ecocardiograma transtorácico normal descarta el diagnóstico; en prótesis o si la sospecha es alta se hace el transesofágico o se repite en 7 a 10 días. 4) Indicar anticoagulantes o trombolisis ante un ACV embólico: en la endocarditis aumentan el riesgo de hemorragia. 5) Indicar profilaxis antibiótica a un paciente con estenosis aórtica, estenosis mitral o prolapso mitral nativos para una extracción dental, o antes de una colonoscopia: no corresponde. 6) Indicar clindamicina como alternativa en el alérgico a la penicilina: ya no se recomienda. 7) Olvidar que el paciente con prótesis valvular que se opera de los dientes sí debe recibir amoxicilina 2 g, una sola vez.",
          "<strong>Anticoagulación y prótesis.</strong> El paciente con una prótesis valvular mecánica toma acenocumarol de por vida (INR objetivo según la posición y los factores de riesgo) y, si desarrolla una endocarditis, el anticoagulante se mantiene con vigilancia estricta o se cambia a heparina, porque la suspensión aumenta el riesgo de trombosis protésica; en cambio, la prótesis biológica no requiere anticoagulación crónica. Esta decisión se toma con el equipo de endocarditis."
        ]
      }
    ],
    "table": {
      "title": "Criterios de Duke Modificados: Mayores y Menores",
      "headers": [
        "Tipo",
        "Criterio",
        "Clave de Examen"
      ],
      "rows": [
        [
          "Mayor",
          "Hemocultivos positivos para germen típico en ≥ 2 muestras separadas (o persistentes)",
          "S. viridans, S. gallolyticus, HACEK, S. aureus, enterococo comunitario"
        ],
        [
          "Mayor",
          "Compromiso endocárdico: vegetación, absceso, dehiscencia protésica o regurgitación nueva",
          "Ecocardiograma transtorácico a todos; transesofágico si prótesis o duda"
        ],
        [
          "Menor",
          "Predisposición (cardiopatía de riesgo, drogas endovenosas) y fiebre ≥ 38 °C",
          "Prótesis, EI previa, congénita, usuario de drogas"
        ],
        [
          "Menor",
          "Fenómenos vasculares: embolias, infarto pulmonar séptico, aneurisma micótico, Janeway",
          "Indoloros: Janeway"
        ],
        [
          "Menor",
          "Fenómenos inmunológicos: glomerulonefritis, Osler, Roth, factor reumatoideo",
          "Dolorosos: Osler · retina: Roth"
        ],
        [
          "Diagnóstico",
          "Definida: 2 mayores, o 1 mayor + 3 menores, o 5 menores",
          "Posible: 1 mayor + 1 menor, o 3 menores"
        ]
      ]
    },
    "severityTable": {
      "title": "Profilaxis de Endocarditis: Quién, Cuándo y Cómo",
      "headers": [
        "Pregunta",
        "Respuesta",
        "Clave de Examen"
      ],
      "rows": [
        [
          "¿Quién?",
          "Prótesis valvular, EI previa, cardiopatía congénita cianótica o reparada con material",
          "La valvulopatía nativa NO requiere profilaxis"
        ],
        [
          "¿Cuándo?",
          "Procedimiento dental con manipulación gingival, periapical o perforación de mucosa",
          "No en endoscopia, colonoscopia, partos ni procedimientos urinarios"
        ],
        [
          "¿Con qué?",
          "Amoxicilina 2 g vía oral, 30 a 60 minutos antes",
          "Dosis única: no se repite después"
        ],
        [
          "Alérgico a penicilina",
          "Azitromicina o claritromicina 500 mg, o doxiciclina 100 mg",
          "Evitar clindamicina"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Endocarditis: Germen Probable y Antibiótico Dirigido",
      "headers": [
        "Contexto",
        "Germen",
        "Tratamiento y Duración"
      ],
      "rows": [
        [
          "Subaguda, válvula nativa, origen dental",
          "Streptococcus viridans",
          "Penicilina sódica o ceftriaxona 4 semanas (prótesis: 6 semanas)"
        ],
        [
          "Aguda, usuario de drogas endovenosas, tricúspide",
          "Staphylococcus aureus",
          "Cloxacilina 4 a 6 semanas (SARM: vancomicina)"
        ],
        [
          "Protésica precoz (postcirugía)",
          "S. aureus, S. epidermidis",
          "Vancomicina + gentamicina + rifampicina, al menos 6 semanas"
        ],
        [
          "Origen urinario o digestivo",
          "Enterococo",
          "Ampicilina + ceftriaxona (o gentamicina) 6 semanas"
        ],
        [
          "Colon o hepatopatía",
          "Streptococcus gallolyticus (bovis)",
          "Penicilina; hacer colonoscopia"
        ],
        [
          "Hemocultivo negativo",
          "HACEK, Coxiella, Bartonella",
          "Ceftriaxona (HACEK) · serología; derivar a infectología"
        ]
      ]
    },
    "vignette": "Hombre de 52 años, portador de una prótesis valvular aórtica biológica colocada hace 3 años, consulta por 3 semanas de fiebre vespertina, sudoración nocturna y baja de peso de 4 kg. Hace una semana se hizo una extracción dental sin profilaxis. Al examen: T° 38,3 °C, FC 98 lpm, soplo diastólico aórtico nuevo, hemorragias en astilla subungueales y nódulos dolorosos en la pulpa de los dedos. El hemograma muestra Hb 10 g/dL y leucocitos 13.000/mm³, PCR 85 mg/L. Tres hemocultivos tomados antes de los antibióticos son positivos para cocáceas grampositivas en cadena.",
    "explicacion": "Es una endocarditis protésica tardía subaguda por Streptococcus viridans, de origen dental. Cumple <b>dos criterios mayores</b> (hemocultivos típicos positivos en ≥ 2 muestras y regurgitación valvular nueva) más criterios menores (predisposición, fiebre, fenómenos inmunológicos), por lo que el diagnóstico es definido. La conducta es hospitalizar, pedir un ecocardiograma transtorácico y transesofágico, indicar <b>penicilina sódica o ceftriaxona endovenosa por 6 semanas</b> (prótesis) y derivar a un centro con cirugía cardíaca. Este paciente era de alto riesgo y debió recibir <b>amoxicilina 2 g 30 a 60 minutos antes de la extracción dental</b>.",
    "keyPoints": [
      "Fiebre + soplo nuevo o cambiante + fenómenos embólicos o inmunológicos = endocarditis hasta demostrar lo contrario.",
      "Tres hemocultivos de sitios distintos ANTES del antibiótico: es el examen de elección para el diagnóstico etiológico; el ecocardiograma muestra la vegetación.",
      "Duke: definida con 2 mayores, o 1 mayor + 3 menores, o 5 menores. Mayores: hemocultivos típicos y evidencia ecocardiográfica.",
      "S. viridans = subaguda sobre válvula dañada (penicilina 4 semanas; prótesis 6). S. aureus = aguda, usuario de drogas, tricúspide (cloxacilina).",
      "Cirugía por insuficiencia cardíaca, infección no controlada, embolias con vegetación grande o germen resistente.",
      "Profilaxis solo en alto riesgo (prótesis, EI previa, congénita cianótica o con material) y solo en procedimientos dentales con manipulación gingival.",
      "Esquema: amoxicilina 2 g vía oral en dosis única, 30 a 60 minutos antes; alérgicos: azitromicina o claritromicina 500 mg.",
      "Complicaciones: insuficiencia valvular aguda con insuficiencia cardíaca (primera causa de cirugía y de muerte), absceso del anillo (PR largo o bloqueo AV nuevo), embolias, aneurismas micóticos y glomerulonefritis con C3 bajo."
    ],
    "questions": [
      {
        "stem": "Un paciente de 45 años, consulta por fiebre de 3 semanas de evolución sin otros síntomas. Al examen físico tiene temperatura 37,8°C, frecuencia cardiaca de 92 por minuto, con presión arterial 120/80mmHG. Al examen cardiaco se ausculta un soplo sistólico en ápex irradiado a dorso. En sus exámenes destacan leucocitos de 12.000/mm3 y PCR 9,6 (valor normal menor a 1,0). ¿Cuál es el examen de elección para continuar el estudio?",
        "options": [
          {
            "id": "A",
            "text": "Ecocardiografía bidimensional"
          },
          {
            "id": "B",
            "text": "Resonancia magnética cardiaca"
          },
          {
            "id": "C",
            "text": "Radiografía de tórax"
          },
          {
            "id": "D",
            "text": "AngioTAC de tórax"
          },
          {
            "id": "E",
            "text": "TAC de tórax abdomen y pelvis"
          }
        ],
        "correcta": "A",
        "explicacion": "Fiebre prolongada de 3 semanas con un soplo sistólico apical irradiado al dorso, leucocitosis y PCR elevada: endocarditis subaguda hasta demostrar lo contrario. Se piden hemocultivos y ecocardiografía; el ecocardiograma es el examen de imagen de elección para ver la vegetación y las complicaciones valvulares.",
        "recTag": "EUNACOM Julio 2017 · Pregunta 70"
      },
      {
        "stem": "Un paciente de 57 años consulta por un cuadro de 7 días de astenia, malestar general, fiebre hasta 39 grados celsius. Al examen físico tiene un soplo pansistólico III/VI en el precordio izquierdo, además de apreciarse petequias en los pulpejos y alguna petequias subconjuntivales. ¿Cuál es el examen de elección para el diagnóstico etiológico?",
        "options": [
          {
            "id": "A",
            "text": "Ecocardiograma"
          },
          {
            "id": "B",
            "text": "Hemocultivos"
          },
          {
            "id": "C",
            "text": "Hemograma"
          },
          {
            "id": "D",
            "text": "Coronariografía"
          },
          {
            "id": "E",
            "text": "ANA y complemento"
          }
        ],
        "correcta": "B",
        "explicacion": "Fiebre, soplo y petequias en los pulpejos y la conjuntiva: endocarditis subaguda. Para el diagnóstico etiológico se piden hemocultivos (tres, antes del antibiótico); el ecocardiograma es el examen de imagen y define la complicación valvular.",
        "recTag": "EUNACOM Diciembre 2017 · Pregunta 63"
      },
      {
        "stem": "Un paciente de 51 años, con antecedente de un recambio valvular, secundario a una valvulopatía, consulta por un cuadro de 2 semanas de astenia, fiebre y malestar general. Al examen físico tiene T°: 38,2°C, PA: 120/80 mmHg, FC: 94x’, se observan lesiones eritematosas en los dedos de ambas manos y algunas petequias en las extremidades inferiores y, en el examen cardíaco, se aprecia un soplo diastólico de intensidad IV/VI. Se solicitan exámenes de sangre, entre los que destaca PCR: 12 mg/L, VHS: 70 mm/h y leucocitosis de 16.000 por mm3. Además, se realizan 3 hemocultivos, que resultan todos positivos para cocáceas Gram positivas, en cadena. ¿Cuál es el antibiótico de elección para iniciar el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "Penicilina sódica"
          },
          {
            "id": "B",
            "text": "Cloxacilina"
          },
          {
            "id": "C",
            "text": "Clindamicina"
          },
          {
            "id": "D",
            "text": "Ceftazidima"
          },
          {
            "id": "E",
            "text": "Gentamicina"
          }
        ],
        "correcta": "A",
        "explicacion": "Portador de una prótesis valvular con fiebre, lesiones de Janeway y petequias, soplo diastólico y hemocultivos con cocáceas grampositivas en cadena: endocarditis subaguda por Streptococcus viridans, que se trata con penicilina sódica (o ceftriaxona) por 4 semanas, y por 6 semanas si hay prótesis. La cloxacilina se reserva al S. aureus y la gentamicina sola no es suficiente.",
        "recTag": "EUNACOM Diciembre 2018 · Pregunta 123"
      },
      {
        "stem": "Paciente operado de válvula cardíaca hace 2 meses. Presenta fiebre, soplo cardíaco nuevo y hemocultivos positivos. ¿Cuál es el agente más probable en endocarditis infecciosa post-cirugía cardíaca precoz?",
        "options": [
          {
            "id": "A",
            "text": "Staphylococcus aureus o S. epidermidis"
          },
          {
            "id": "B",
            "text": "Streptococcus viridans"
          },
          {
            "id": "C",
            "text": "Enterococcus faecalis"
          },
          {
            "id": "D",
            "text": "HACEK group"
          },
          {
            "id": "E",
            "text": "Candida albicans"
          }
        ],
        "correcta": "A",
        "explicacion": "En el posoperatorio precoz de una cirugía valvular (< 2 meses), los gérmenes más probables son los estafilococos adquiridos en el pabellón (S. aureus y S. epidermidis); el S. viridans causa la endocarditis tardía de origen dental, y los enterococos y HACEK son menos frecuentes.",
        "recTag": "EUNACOM Julio 2025 · Pregunta 136"
      },
      {
        "stem": "Paciente masculino de 45 años, presenta súbitamente hemiparesia derecha, refiere historia de 2 meses de evolución de astenia, compromiso del estado general y fiebre de predominio nocturno. Al examen físico presenta hemiparesia derecha, fiebre de 37,8 grados celsius y la auscultación cardiaca muestra un ritmo regular en 2 tiempos, con un soplo sistólico IV/VI en el ápex. Su sedimento de orina muestra hematuria microscópica. El diagnóstico más probable es:",
        "options": [
          {
            "id": "A",
            "text": "Absceso cerebral"
          },
          {
            "id": "B",
            "text": "Tuberculosis meníngea"
          },
          {
            "id": "C",
            "text": "Meningitis bacteriana"
          },
          {
            "id": "D",
            "text": "Endocarditis bacteriana"
          },
          {
            "id": "E",
            "text": "Leucemia mieloide aguda"
          }
        ],
        "correcta": "D",
        "explicacion": "Fiebre vespertina de dos meses, soplo apical, hematuria microscópica y una hemiparesia súbita: endocarditis subaguda con embolia cerebral y glomerulonefritis inmunológica. No es un absceso cerebral ni una meningitis, que no explican el soplo ni la hematuria.",
        "recTag": "EUNACOM Julio 2016 · Pregunta 115"
      },
      {
        "stem": "Un paciente de 33 años, hospitalizado por una endocarditis subaguda por estreptococus víridans, en tratamiento con penicilina y gentamicina por vía endovenosa, presenta un cuadro de hematuria de algunos días de evolución. Se solicita sedimento de orina que muestra 50 glóbulos rojos por campo con 95% de dismorfia y presencia de cilindros hemáticos, creatinina de 2,4mg/dL, ANA (-), fracción C3 del complemento de 53mg/dL (valor normal: 75-135 mg/dL). ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Embolias renales a repetición"
          },
          {
            "id": "B",
            "text": "Nefritis intersticial secundaria al uso de penicilina"
          },
          {
            "id": "C",
            "text": "Daño tubular agudo secundario al uso de gentamicina"
          },
          {
            "id": "D",
            "text": "Glomerulonefritis por depósito de complejos inmunes"
          },
          {
            "id": "E",
            "text": "Síndrome hemolítico urémico"
          }
        ],
        "correcta": "D",
        "explicacion": "Un paciente con endocarditis por S. viridans que desarrolla hematuria dismórfica, cilindros hemáticos, creatinina elevada y C3 bajo tiene una glomerulonefritis por depósito de complejos inmunes: un fenómeno inmunológico de la endocarditis. La nefritis intersticial por penicilina daría eosinofiluria, y el daño tubular por gentamicina no produce cilindros hemáticos ni hipocomplementemia.",
        "recTag": "EUNACOM Julio 2017 · Pregunta 154"
      },
      {
        "stem": "Un hombre de 60 años, portador de una prótesis valvular aórtica mecánica, debe someterse a una extracción dental. No tiene alergias. ¿Cuál es la profilaxis de endocarditis infecciosa más adecuada?",
        "options": [
          {
            "id": "A",
            "text": "No requiere profilaxis"
          },
          {
            "id": "B",
            "text": "Ciprofloxacino oral"
          },
          {
            "id": "C",
            "text": "Amoxicilina 500 mg cada 8 horas por 7 días después del procedimiento"
          },
          {
            "id": "D",
            "text": "Amoxicilina 2 g oral, 30 a 60 minutos antes del procedimiento"
          },
          {
            "id": "E",
            "text": "Vancomicina endovenosa por 5 días"
          }
        ],
        "correcta": "D",
        "explicacion": "La profilaxis está indicada en pacientes de alto riesgo (prótesis valvular, endocarditis previa, ciertas cardiopatías congénitas) sometidos a procedimientos dentales con manipulación gingival o periapical. Se usa una dosis única de amoxicilina 2 g oral, 30 a 60 minutos antes; en alérgicos, un macrólido. No se recomiendan cursos prolongados posteriores.",
        "recTag": "Banco Oficial AEE"
      }
    ],
    "_origen": "4.5§0 · 4.5§1 · 4.5§2 · 4.5§3 (reescrito y ampliado al estándar, oct-2026)",
    "_estado": "estandar"
  }
];

module.exports = { bloque4 };
