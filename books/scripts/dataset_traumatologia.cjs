/**
 * DATASET MASTER · TOMO 12: TRAUMATOLOGÍA & ORTOPEDIA
 * Colección Oficial EUNACOM 2026 · Módulo 2 Cirugía y Especialidades Quirúrgicas
 * Color Oficial: #b45309 (Ámbar Cálido) · Código: TO · 15 Clases · 4 Bloques · 45 Preguntas AEE
 */

const { flowTrauma } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "trauma-01",
    "classId": "trauma-01",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Generalidades de Fracturas, Fracturas Expuestas & Complicaciones",
    "topicLabel": "12.1",
    "title": "Principios Generales de Fracturas, Consolidación Ósea & Inmovilización",
    "perfilCode": "4.01.1.001",
    "dx": "Específico",
    "tx": "Inicial y Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Norma Técnica de Manejo de Urgencias Traumatológicas.",
    "reconstrucciones": "EUNACOM Diciembre 2023 (Q#18) · EUNACOM Julio 2021 (Q#72)",
    "frecuencia": "Alta en EUNACOM · Fases de consolidación, principios de inmovilización y reducción cerrada",
    "diagram": flowTrauma('Principios Generales de Fracturas, ConsolidaciÃ³n Ãsea & InmovilizaciÃ³n: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Principios Generales de Fracturas, ConsolidaciÃ³n Ãsea & InmovilizaciÃ³n (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Principios Generales de Fracturas, Consolidación Ósea & Inmovilización es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Principios Generales de Fracturas, Consolidación Ósea & Inmovilización",
        "paragraphs": [
          ":::important\n4.01.1.001 | Fracturas: Generalidades | Dx: Específico | Tx: Inicial | Seg: Completo\n*(Nota: El código corresponde a la sección de Cirugía/Traumatología del perfil EUNACOM)*\n:::",
          "Las fracturas son una de las consultas más frecuentes en los servicios de urgencia y una piedra angular de la traumatología. Para el examen EUNACOM, se suelen incluir aproximadamente 5 preguntas de esta especialidad, las cuales tienden a ser de dificultad moderada si se dominan los conceptos generales y las indicaciones quirúrgicas.",
          "## Clínica de las Fracturas",
          "El diagnóstico de una fractura es fundamentalmente clínico, aunque requiere confirmación de imagen. Los signos y síntomas clásicos incluyen:",
          "- **Dolor intenso**: Localizado en el foco de la lesión, que aumenta con la movilización.\n- **Deformidad y desviación de los ejes**: Alteración de la anatomía normal del miembro.\n- **Equimosis y aumento de volumen**: Debido al hematoma fracturario y la inflamación de partes blandas.\n- **Impotencia funcional**: Incapacidad para utilizar la extremidad.\n- **Crepitación ósea**: Es el signo más característico. Es la sensación táctil o auditiva del roce de los fragmentos óseos fracturados.",
          ":::tip\nLa **crepitación** o los crépitos óseos son patognomónicos de fractura, pero no se deben buscar intencionadamente de forma vigorosa para evitar mayor daño a partes blandas, vasos o nervios.\n:::"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "## Manejo Inicial: El ABC del Trauma",
          "Antes de enfocarse exclusivamente en el hueso, es imperativo realizar el manejo general de urgencias siguiendo el protocolo ATLS:",
          "1. **A (Airway)**: Vía aérea y control de la columna cervical (uso de collar cervical si hay sospecha de trauma axial).\n2. **B (Breathing)**: Ventilación y oxigenación adecuada.\n3. **C (Circulation)**: Manejo de la hemodinamia. Las fracturas de pelvis o fémur pueden causar grandes hemorragias internas y shock hipovolémico.",
          ":::warning\nNunca ignore el estado hemodinámico del paciente por centrarse en una fractura evidente de extremidades. Una fractura de fémur puede perder hasta 1.5 litros de sangre.\n:::",
          "## Opciones de Tratamiento",
          "El tratamiento busca la consolidación ósea en una posición funcional adecuada. Se divide en dos grandes grupos:"
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "No todas las fracturas requieren pabellón. Las indicaciones clásicas para optar por un tratamiento quirúrgico son:",
          "1. **Fracturas Expuestas**: Son una urgencia quirúrgica. Requieren aseo quirúrgico prolijo y estabilización para prevenir la [[Osteomielitis]].\n2. **Rasgo Intraarticular**: Si el rasgo de fractura compromete la superficie de la articulación, debe quedar perfectamente alineado. Un escalón articular milimétrico predispone a una [[Artrósis]] postraumática precoz.\n3. **Fracturas Desplazadas e Irreductibles**: Cuando los fragmentos están muy separados y no es posible alinearlos mediante maniobras externas (reducción cerrada).\n4. **Fracturas Conminutas**: Aquellas donde el hueso está \"astillado\" o en múltiples fragmentos pequeños. Tienen alto riesgo de complicaciones en la unión.\n5. **Fracturas Segmentarias**: Existen al menos dos rasgos de fractura en el mismo hueso, dejando un segmento intermedio móvil (\"segmento flotante\"). Tienen alto riesgo de problemas de vascularización.\n6. **Inestabilidad**: Fracturas que, aunque se reduzcan, no se mantienen en posición con un yeso.",
          "## Complicaciones de la Consolidación",
          "Cuando el proceso de curación del hueso falla o se altera, pueden ocurrir dos situaciones principales:",
          "- **No-unión o Pseudoartrosis**: El hueso simplemente no pega. Se forma una \"falsa articulación\" en el foco de fractura. Puede ser atrófica (falta de biología/sangre) o hipertrófica (falta de estabilidad).\n- **Consolidación Viciosa (Mala unión)**: El hueso consolida (pega), pero lo hace en una posición anatómica incorrecta (angulado, rotado o cabalgado), lo que puede generar limitación funcional o estética.",
          ":::tip\nA mayor energía del trauma y mayor daño de las partes blandas (músculos, piel, vasos), mayor es la probabilidad de requerir cirugía y de presentar complicaciones en la consolidación.\n:::"
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Principios Generales de Fracturas, Consolidación Ósea & Inmovilización",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": null,
    "treatmentTable": null,
    "vignette": ":::important\n4.01.1.001 | Fracturas: Generalidades | Dx: Específico | Tx: Inicial | Seg: Completo\n*(Nota: El código corresponde a la sección de Cirugía/Traumatología del perfil EUNACOM)*\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Principios Generales de Fracturas, Consolidación Ósea & Inmovilización. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Principios Generales de Fracturas, Consolidación Ósea & Inmovilización, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un hombre de treinta años llega a urgencias tras un accidente de tránsito con dolor e impotencia funcional en el antebrazo derecho, con deformidad visible y crepitación al examen. ¿Cuál es el diagnóstico y el estudio inicial?",
        "options": [
          {
            "id": "A",
            "text": "Contusión de antebrazo; ecografía de partes blandas"
          },
          {
            "id": "B",
            "text": "Fractura de antebrazo; radiografías anteroposterior y lateral"
          },
          {
            "id": "C",
            "text": "Luxación de codo; TAC de antebrazo"
          },
          {
            "id": "D",
            "text": "Fractura de antebrazo; solo radiografía anteroposterior"
          },
          {
            "id": "E",
            "text": "Contusión grave; solo analgesia y observación"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: La crepitación ósea con deformidad y desviacón de ejes orienta claramente a fractura, no a una contusión. El estudio inicial es radiografía en dos proyecciones. Opción B: Dolor, deformidad, impotencia funcional y crepitación son la clínica clásica de fractura. El diagnóstico se confirma con radiografías en más de una proyección: anteroposterior más lateral. Opción C: La crepitación ósea es característica de fractura. El TAC no es el examen inicial; la radiografía en dos proyecciones es el estudio de primera línea. Opción D: Las fracturas de huesos largos requieren siempre más de una proyección. No es suficiente solo la anteroposterior; se necesita también la proyección lateral. Opción E: La crepitación y la deformidad indican fractura, no solo contusión. Toda sospecha de fractura requiere radiografías para confirmar el diagnóstico.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      },
      {
        "stem": "Un paciente tiene una fractura de pierna con el hueso muy desplazado, irreductible por maniobra ortopédica, y con múltiples fragmentos conminutos. ¿Cuál es la conducta?",
        "options": [
          {
            "id": "A",
            "text": "Inmovilización con yeso e indicar control en dos semanas"
          },
          {
            "id": "B",
            "text": "Cirugía con reducción y osteosíntesis"
          },
          {
            "id": "C",
            "text": "Tracción continua por cuatro semanas y luego yeso"
          },
          {
            "id": "D",
            "text": "Observación porque las fracturas de pierna siempre consolidan solas"
          },
          {
            "id": "E",
            "text": "Inmovilización con órtesis funcional por seis semanas"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: Una fractura conminuta e irreductible no puede manejarse con yeso solamente. Tiene indicación quirúrgica por el riesgo de no-unión y mala unión. Opción B: Una fractura muy desplazada e irreductible más conminución son indicaciones claras de cirugía. El tratamiento es reducción más osteosíntesis con placa, tornillos o agujas de Kirschner. Opción C: La fractura conminuta irreductible tiene indicación de cirugía. La tracción prolongada no es el manejo adecuado cuando hay indicación quirúrgica clara. Opción D: Las fracturas conminutas no consolidan solas. Tienen alto riesgo de pseudoartrosis y consolidación viciosa, por lo que requieren cirugía. Opción E: Una fractura conminuta irreductible no puede manejarse solo con órtesis funcional. La indicación quirúrgica es clara en este caso.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.1.001"
      }
    ]
  },
  {
    "id": "trauma-02",
    "classId": "trauma-02",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Generalidades de Fracturas, Fracturas Expuestas & Complicaciones",
    "topicLabel": "12.2",
    "title": "Fracturas Expuestas: Clasificación Gustilo-Anderson, Antibioticoterapia EV & Aseo Quirúrgico Urgente",
    "perfilCode": "1.12.2.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES): Politraumatizado / Urgencia Traumatológica de Alta Complejidad.",
    "reconstrucciones": "EUNACOM Diciembre 2023 (Q#42) · EUNACOM Julio 2022 (Q#19) · EUNACOM Enero 2020 (Q#88)",
    "frecuencia": "Muy Alta en EUNACOM · Pregunta segura sobre esquema antibiótico según Gustilo y timing de aseo",
    "diagram": flowTrauma('Fracturas Expuestas: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Fracturas Expuestas (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Fracturas Expuestas: Clasificación Gustilo-Anderson, Antibioticoterapia EV & Aseo Quirúrgico Urgente es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Fracturas Expuestas",
        "paragraphs": [
          ":::important\n1.12.2.001 | Fractura expuesta | Dx: Específico | Tx: Inicial | Seg: Derivar\n:::",
          "Una **fractura expuesta** se define como la solución de continuidad de un hueso (fractura) que se asocia a una herida de las partes blandas, permitiendo que el foco de fractura entre en contacto directo con el medio ambiente (aire, agua, contaminantes).",
          "Es considerada una **urgencia traumatológica no derivable** en su fase inicial. Esto significa que, si bien el tratamiento definitivo es quirúrgico y requiere un especialista, el médico general debe realizar el manejo inmediato para disminuir drásticamente el riesgo de complicaciones graves.",
          "## Riesgos y Complicaciones\nEl principal problema de una fractura expuesta no es la fractura en sí, sino la exposición. Los riesgos principales son:\n- **Infección y [[Osteomielitis]]**: Es la complicación más específica y temida, ya que puede impedir la consolidación ósea y llevar a la pérdida de la extremidad.\n- **Lesiones neurovasculares**: Daño a nervios o vasos sanguíneos adyacentes.\n- **[[Síndrome Compartimental]]**: Debido al trauma de alta energía y el edema.\n- **Retardo en la consolidación** o pseudoartrosis.",
          "## Diagnóstico\nEl diagnóstico es fundamentalmente **clínico**. \n1.  **Examen físico**: Presencia de una herida que comunica con el hueso fracturado.\n2.  **Radiografía**: Confirma la fractura, su morfología y la presencia de aire en los tejidos o cuerpos extraños.",
          ":::tip\nToda herida en la cercanía de una fractura debe considerarse una fractura expuesta hasta que se demuestre lo contrario, incluso si el hueso no es visible a simple vista.\n:::"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "## Pilares del Tratamiento Inicial\nEl manejo debe comenzar siempre con el **ABC del trauma** (Vía aérea, ventilación y circulación). Una vez estabilizado el paciente, se procede con los pilares específicos de la fractura expuesta:",
          "1.  **Aseo con Suero Fisiológico**: Es la medida inicial más importante. Se debe irrigar la herida con grandes volúmenes (habitualmente entre **3 a 10 litros**) a chorro para remover mecánicamente restos vegetales, tierra y detritos.\n2.  **Antibioticoterapia Endovenosa**: Debe iniciarse lo antes posible (idealmente en la primera hora).\n3.  **Analgesia**: Uso de AINES u opioides según la escala de dolor.\n4.  **Vacunación Antitetánica**: Según el antecedente vacunal del paciente y el grado de suciedad de la herida.\n5.  **Cirugía**: El tratamiento definitivo es el aseo quirúrgico y la estabilización (osteosíntesis) en pabellón.",
          ":::note\n**Fisiopatología de la infección:** La contaminación bacteriana ocurre en el momento del trauma. La precariedad del flujo sanguíneo en el hueso fracturado y el daño a las partes blandas circundantes crean un ambiente ideal para la proliferación bacteriana si no se realiza un aseo precoz.\n:::",
          "## Antibioticoterapia según Clasificación\nLa elección del antibiótico depende de la clasificación de **Gustilo y Anderson**:",
          "| Grado | Cobertura Necesaria | Antibiótico Sugerido |\n| :--- | :--- | :--- |\n| **Grado I** | Gram positivos (S. aureus) | **Cefazolina** EV |\n| **Grado II** | Gram positivos + Gram negativos | **Cefazolina + Gentamicina** |\n| **Grado III** | Gram (+), Gram (-) y Anaerobios | **Cefazolina + Gentamicina + Clindamicina** (o Metronidazol) |",
          "## Clasificación de Gustilo y Anderson\nEs la escala más utilizada para determinar el pronóstico y el tratamiento."
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "*   **Grado I**: Herida < 1 cm. Mecanismo de baja energía, generalmente de \"adentro hacia afuera\" (el hueso rompe la piel). Contaminación mínima.\n*   **Grado II**: Herida > 1 cm (pero habitualmente < 10 cm). Daño moderado a partes blandas. Mecanismo de moderada energía.\n*   **Grado III**: Herida > 10 cm o alta energía. Incluye:\n    *   **III A**: Cobertura cutánea adecuada a pesar de la laceración extensa.\n    *   **III B**: Daño extenso de partes blandas con denudación del periostio y exposición ósea. Requiere colgajos para su cierre. **Es la que más se infecta.**\n    *   **III C**: Lesión arterial que requiere reparación vascular (independiente del tamaño de la herida).\n    *   **III D**: Amputación traumática.",
          ":::warning\nCualquier fractura producida por **arma de fuego**, en contextos de **catástrofes/guerras** o con **alta contaminación** (tierras de campo, aguas servidas), se clasifica automáticamente como **Grado III**, sin importar el tamaño de la herida.\n:::",
          "## Manejo para el Traslado (Derivación)\nComo médico general, tras realizar el manejo inicial (aseo, antibióticos, analgesia), se debe derivar a un centro de mayor complejidad. Las condiciones para el traslado son:",
          "1.  **No suturar la herida**: La herida debe quedar abierta para el aseo quirúrgico formal en pabellón. Solo se permite un punto de sutura si es estrictamente necesario para realizar hemostasia activa.\n2.  **Cubrir la herida**: Utilizar apósitos estériles.\n3.  **Inmovilización**: Se debe colocar una **valva de yeso larga** (que incluya la articulación proximal y distal a la fractura).\n4.  **Valva Abierta**: La inmovilización debe ser abierta (no un yeso circular) para permitir la expansión de los tejidos y prevenir un [[Síndrome Compartimental]].",
          ":::tip\nEl estado de las **partes blandas** es el factor pronóstico más importante para la evolución y el riesgo de infección de la fractura.\n:::",
          "## Tratamiento Quirúrgico\nEn el centro terciario, el traumatólogo realizará:\n-   **Aseo quirúrgico**: Limpieza profunda y desbridamiento de tejido necrótico en pabellón.\n-   **Reducción y Osteosíntesis**: Estabilización del hueso, que puede ser mediante fijación externa (común en grado III) o interna.\n-   En caso de grado **III C**, es obligatoria la intervención conjunta con un **cirujano vascular**."
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Fracturas Expuestas",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": {
      "title": "Estratificación de Severidad y Factores de Alto Riesgo en Fracturas Expuestas",
      "headers": [
        "Nivel de Severidad",
        "Hallazgos Clínicos Cardinales",
        "Riesgo / Complicación Mayor",
        "Conducta Inmediata"
      ],
      "rows": [
        [
          "Leve / No Desplazada",
          "Deformidad mínima, pulsos distales presentes y simétricos",
          "Consolidación viciosa si no se inmoviliza",
          "Inmovilización con valva de yeso y control"
        ],
        [
          "Moderada / Desplazada",
          "Deformidad marcada, impotencia funcional, hematoma",
          "Lesión de partes blandas, atrapamiento",
          "Reducción cerrada bajo analgesia / tracción"
        ],
        [
          "Grave / Inestable o Expuesta",
          "Pérdida de pulsos, alteración sensitiva, exposición ósea",
          "Necrosis avascular, shock, pérdida de extremidad",
          "Pabellón quirúrgico urgente, fijación y aseo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado y Fármacos en Fracturas Expuestas",
      "headers": [
        "Fase Terapéutica",
        "Intervención Primaria",
        "Fármacos / Posología",
        "Objetivo Clínico"
      ],
      "rows": [
        [
          "Urgencia Inicial",
          "Alineación anatómica e inmovilización provisoria",
          "Analgesia EV (Ketoprofeno 100mg / Tramadol 50-100mg)",
          "Alivio del dolor y prevención de daño secundario"
        ],
        [
          "Protección Cutánea",
          "Aseo de heridas, apósitos estériles y férula",
          "Cefazolina 2g EV + profilaxis antitetánica si expuesta",
          "Prevención de infección osteoarticular profunda"
        ],
        [
          "Resolución Definitiva",
          "Osteosíntesis interna (placas/tornillos/clavos) o prótesis",
          "Tromboprofilaxis con HBPM (Enoxaparina 40mg/d SC)",
          "Movilización precoz y consolidación ósea anatómica"
        ]
      ]
    },
    "vignette": ":::important\n1.12.2.001 | Fractura expuesta | Dx: Específico | Tx: Inicial | Seg: Derivar\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Fracturas Expuestas: Clasificación Gustilo-Anderson, Antibioticoterapia EV & Aseo Quirúrgico Urgente. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Fracturas Expuestas, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un paciente tiene fractura de pierna expuesta grado 1 de Gustilo: herida menor de un centímetro, baja energía, contaminación mínima. ¿Cuál es el antibiótico endovenoso inicial?",
        "options": [
          {
            "id": "A",
            "text": "Cefazolina"
          },
          {
            "id": "B",
            "text": "Amikacina más cefazolina"
          },
          {
            "id": "C",
            "text": "Cefazolina más amikacina más clindamicina"
          },
          {
            "id": "D",
            "text": "Metronidazol intravenoso"
          },
          {
            "id": "E",
            "text": "Amoxicilina clavulánico oral"
          }
        ],
        "correcta": "A",
        "explicacion": "La opción correcta es la A. Opción A: La fractura expuesta grado 1 requiere cobertura para gram positivos especialmente estafilococo aureus. La cefazolina es la cefalosporina de primera línea para esto. Opción B: La combinación con amikacina es para el grado 2 cuando se necesita agregar cobertura para gram negativos. El grado 1 solo requiere cefazolina. Opción C: Esta triple combinación es para el grado 3. El grado 1 solo requiere cefazolina para gram positivos. Opción D: El metronidazol cubre anaerobios y se usa en grado 3. El grado 1 requiere cefazolina para gram positivos. Opción E: El tratamiento endovenoso es el indicado en la fractura expuesta. La vía oral no es adecuada en este contexto.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.2.001"
      },
      {
        "stem": "Un paciente tiene fractura de pierna expuesta con herida de quince centímetros muy contaminada con restos vegetales. ¿Cuál es la clasificación de Gustilo y el esquema antibiótico?",
        "options": [
          {
            "id": "A",
            "text": "Grado 2; cefazolina más amikacina"
          },
          {
            "id": "B",
            "text": "Grado 3; cefazolina más amikacina más clindamicina"
          },
          {
            "id": "C",
            "text": "Grado 1; solo cefazolina"
          },
          {
            "id": "D",
            "text": "Grado 3; solo metronidazol"
          },
          {
            "id": "E",
            "text": "Grado 2; solo cefazolina"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El grado 2 es herida entre uno y diez centímetros. Una herida de quince centímetros muy contaminada corresponde al grado 3. Opción B: Herida mayor de diez centímetros muy contaminada es grado 3. Requiere triple cobertura: cefazolina gram positivos, amikacina gram negativos y clindamicina anaerobios. Opción C: El grado 1 es herida menor de un centímetro con mínima contaminación. Esta fractura es claramente grado 3. Opción D: El metronidazol solo no es suficiente. El grado 3 requiere triple cobertura para gram positivos, gram negativos y anaerobios. Opción E: El grado 2 requiere cefazolina más amikacina. Además esta fractura corresponde al grado 3 por la herida grande y muy contaminada.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.2.001"
      },
      {
        "stem": "Un médico general maneja una fractura expuesta y va a trasladar al paciente al centro de referencia. ¿Cuál es la forma correcta de inmovilizar y preparar el traslado?",
        "options": [
          {
            "id": "A",
            "text": "Suturar la herida completamente y colocar yeso circular"
          },
          {
            "id": "B",
            "text": "Cubrir con apósitos estériles e inmovilizar con valva de yeso larga y abierta"
          },
          {
            "id": "C",
            "text": "Dejar la herida al aire sin cubrir y trasladar sin inmovilización"
          },
          {
            "id": "D",
            "text": "Suturar la herida y colocar valva corta de yeso"
          },
          {
            "id": "E",
            "text": "Yeso circular inmediato para asegurar la fractura durante el traslado"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: No se debe suturar la herida porque necesita aseo quirúrgico en pabellón. El yeso circular puede generar síndrome compartimental. Opción B: La herida se cubre con apósitos estériles sin suturar. La valva de yeso debe ser larga para mejor inmovilización y abierta para prevenir síndrome compartimental. Opción C: La herida debe cubrirse con apósitos estériles para evitar mayor contaminación. La inmovilización es obligatoria para el traslado. Opción D: No se debe suturar la herida. La valva debe ser larga para mejor inmovilización, no corta. Opción E: El yeso circular puede causar síndrome compartimental. Se debe usar valva de yeso larga y abierta.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.2.001"
      },
      {
        "stem": "En el contexto del manejo de Fracturas Expuestas: Clasificación Gustilo-Anderson, Antibioticoterapia EV & Aseo Quirúrgico Urgente, ¿cuál de las siguientes afirmaciones respecto al diagnóstico y tratamiento representa la conducta correcta de acuerdo a las guías de práctica clínica?",
        "options": [
          {
            "id": "A",
            "text": "Se debe realizar inmovilización adecuada, evaluación neurovascular distal y derivación prioritaria."
          },
          {
            "id": "B",
            "text": "Está indicada la movilización precoz forzada sin inmovilización previa."
          },
          {
            "id": "C",
            "text": "Se debe diferir el estudio radiológico hasta que ceda completamente el edema de partes blandas."
          },
          {
            "id": "D",
            "text": "El tratamiento farmacológico exclusivo con reposo absoluto sustituye a la reducción en fracturas desplazadas."
          },
          {
            "id": "E",
            "text": "La infiltración intraarticular con corticoides es la primera línea terapéutica en casos agudos traumáticos."
          }
        ],
        "correcta": "A",
        "explicacion": "La opción correcta es la A. En Fracturas Expuestas: Clasificación Gustilo-Anderson, Antibioticoterapia EV & Aseo Quirúrgico Urgente, la evaluación neurovascular distal previa y posterior a cualquier inmovilización o reducción es una regla de oro obligatoria.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.12.2.001"
      }
    ]
  },
  {
    "id": "trauma-03",
    "classId": "trauma-03",
    "tier": 3,
    "blockNum": 1,
    "blockName": "Generalidades de Fracturas, Fracturas Expuestas & Complicaciones",
    "topicLabel": "12.3",
    "title": "Síndrome Compartimental Agudo: Signos Cardinales (5P), Presión Intracompartimental & Fasciotomía Urgente",
    "perfilCode": "1.01.1.006",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Urgencia Traumatológica Vital · Indicación de Cirugía Descompresiva Inmediata.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#05) · EUNACOM Diciembre 2022 (Q#61) · EUNACOM Enero 2021 (Q#104)",
    "frecuencia": "Muy Alta en EUNACOM · Dolor desproporcionado al estiramiento pasivo y contraindicación de yesos cerrados",
    "diagram": flowTrauma('SÃ­ndrome Compartimental Agudo: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de SÃ­ndrome Compartimental Agudo (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Síndrome Compartimental Agudo: Signos Cardinales (5P), Presión Intracompartimental & Fasciotomía Urgente es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Síndrome Compartimental Agudo",
        "paragraphs": [
          ":::important\n**Perfil EUNACOM:** Aunque el tema principal es de Traumatología, sus complicaciones se evalúan con frecuencia en Medicina Interna y Cirugía.\n- **Tromboembolismo Pulmonar:** 1.01.1.006 | Dx: Sospecha | Tx: Inicial | Seg: Derivar\n- **Síndrome Compartimental / Embolia Grasa:** Requieren sospecha y manejo inicial de urgencia.\n:::",
          "Las complicaciones de las [[Fracturas]] son un tema de alta rentabilidad en el examen EUNACOM, con presencia habitual de 2 a 3 preguntas por versión. Es fundamental distinguir entre complicaciones precoces (horas/días) y tardías (semanas/meses), así como sus características clínicas diferenciales.",
          "## 1. Distrofia Simpático Refleja (SDR)\nTambién conocida bajo otros nombres que el alumno debe reconocer en las alternativas:",
          "| Nombre Alternativo | Descripción |\n| :--- | :--- |\n| **Atrofia ósea de Sudeck** | Enfoque en los cambios óseos radiológicos. |\n| **Síndrome de Dolor Regional Complejo (SDRC)** | Denominación moderna y fisiopatológica. |",
          "### Clínica\nEs una complicación de aparición **tardía** (semanas a meses después de la lesión). Sus pilares clínicos son:\n- **Dolor neuropático:** De carácter urente (quemante), con presencia de alodinia e hiperalgesia.\n- **Aumento con movilidad distal:** El dolor empeora al mover los dedos o ortejos.\n- **Cambios tróficos:** Alteraciones en piel (color), fanéreos (aumento o disminución de vello) y uñas (engrosamiento o fragilidad).\n- **Signos óseos:** Radiológicamente se observa una **osteoporosis moteada** o con lesiones en \"sacabocado\".",
          ":::note\n**Fisiopatología:** Se cree que existe una interacción o \"cortocircuito\" entre las fibras del dolor y las fibras del sistema nervioso simpático, gatillada frecuentemente por un mal manejo de la analgesia inicial.\n:::"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "- **Causa frecuente:** Se asocia a fracturas de la extremidad superior, especialmente la **fractura supracondílea de húmero** y fracturas de antebrazo.\n- **Clínica:** Aparece semanas o meses después. Se caracteriza por la **mano en garra**, donde el paciente presenta una incapacidad o gran dificultad para extender los dedos y la muñeca debido a la fibrosis muscular.\n- **Manejo:** Inicialmente quinesioterapia motora. Si no hay respuesta, se recurre a cirugía para liberación de fascias y tendones.",
          "---",
          "## 3. Síndrome Compartimental\nEs la complicación más preguntada y una verdadera urgencia traumatológica. A diferencia de las anteriores, es de aparición **inmediata** (minutos a horas).",
          "### Clínica (Las \"P\" del síndrome)\n- **Dolor intenso:** Desproporcionado a la lesión y que no cede con analgésicos habituales.\n- **Dolor al estiramiento pasivo:** Es el signo más precoz y característico (aumento del dolor al mover distalmente la extremidad).\n- **Edema y tensión:** El compartimento se siente \"pétreo\".\n- **Alteración de pulsos:** Es un signo **tardío**. Si no hay pulsos, la isquemia ya es avanzada y el riesgo de necrosis es inminente.",
          ":::warning\n**Peligro de Necrosis:** El aumento de presión tisular colapsa primero el retorno venoso y luego el flujo arterial, pudiendo llevar a la pérdida de la extremidad en pocas horas.\n:::",
          "### Diagnóstico y Conducta\n1. **Clínico:** Ante la sospecha clara, se debe actuar. En casos dudosos, se puede medir la presión del compartimento (invasivo).\n2. **Tratamiento Definitivo:** **Fasciotomía amplia** (procedimiento quirúrgico para liberar la presión).\n3. **Manejo inicial (solo si es muy leve):** Retirar yesos o vendajes, elevar la extremidad y fomentar movimientos distales. Si no mejora de inmediato, proceder a cirugía."
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "### Tromboembolismo Pulmonar ([[TEP]])\n- **Clínica:** Disnea súbita, dolor torácico de tipo pleurítico y desaturación. Puede haber hemoptisis o síncope.\n- **Diagnóstico:** **AngioTAC de tórax**.",
          ":::tip\n**Perla EUNACOM:** En el contexto de una fractura, el **Dímero-D NO es útil** para descartar TEP, ya que la propia fractura y la cirugía elevan sus niveles de forma inespecífica.\n:::",
          ":::note\n**TEP Masivo:** Si hay compromiso hemodinámico (shock/hipotensión), el examen de elección puede ser un ecocardiograma (buscando signos de falla derecha) y el tratamiento de elección es la **trombolisis**.\n:::",
          "---",
          "## 5. Embolia Grasa\nComplicación grave y sistémica, propia de fracturas de **huesos largos** (fémur, tibia, húmero).",
          "### Clínica\nAparece rápidamente (horas a 24-48 horas post-fractura). Se caracteriza por una tríada clásica:\n1. **Distrés Respiratorio:** Edema pulmonar no cardiogénico.\n2. **Compromiso de Conciencia:** Desde confusión hasta coma.\n3. **Rash Petequial:** Típicamente en tórax superior, cuello y axilas."
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Síndrome Compartimental Agudo",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": {
      "title": "Estratificación de Severidad y Factores de Alto Riesgo en Síndrome Compartimental Agudo",
      "headers": [
        "Nivel de Severidad",
        "Hallazgos Clínicos Cardinales",
        "Riesgo / Complicación Mayor",
        "Conducta Inmediata"
      ],
      "rows": [
        [
          "Leve / No Desplazada",
          "Deformidad mínima, pulsos distales presentes y simétricos",
          "Consolidación viciosa si no se inmoviliza",
          "Inmovilización con valva de yeso y control"
        ],
        [
          "Moderada / Desplazada",
          "Deformidad marcada, impotencia funcional, hematoma",
          "Lesión de partes blandas, atrapamiento",
          "Reducción cerrada bajo analgesia / tracción"
        ],
        [
          "Grave / Inestable o Expuesta",
          "Pérdida de pulsos, alteración sensitiva, exposición ósea",
          "Necrosis avascular, shock, pérdida de extremidad",
          "Pabellón quirúrgico urgente, fijación y aseo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado y Fármacos en Síndrome Compartimental Agudo",
      "headers": [
        "Fase Terapéutica",
        "Intervención Primaria",
        "Fármacos / Posología",
        "Objetivo Clínico"
      ],
      "rows": [
        [
          "Urgencia Inicial",
          "Alineación anatómica e inmovilización provisoria",
          "Analgesia EV (Ketoprofeno 100mg / Tramadol 50-100mg)",
          "Alivio del dolor y prevención de daño secundario"
        ],
        [
          "Protección Cutánea",
          "Aseo de heridas, apósitos estériles y férula",
          "Cefazolina 2g EV + profilaxis antitetánica si expuesta",
          "Prevención de infección osteoarticular profunda"
        ],
        [
          "Resolución Definitiva",
          "Osteosíntesis interna (placas/tornillos/clavos) o prótesis",
          "Tromboprofilaxis con HBPM (Enoxaparina 40mg/d SC)",
          "Movilización precoz y consolidación ósea anatómica"
        ]
      ]
    },
    "vignette": ":::important\n**Perfil EUNACOM:** Aunque el tema principal es de Traumatología, sus complicaciones se evalúan con frecuencia en Medicina Interna y Cirugía.\n- **Tromboembolismo Pulmonar:** 1.01.1.006 | Dx: Sospecha | Tx: Inicial | Seg: Derivar\n- **Síndrome Compartimental / Embolia Grasa:** Requieren sospecha y manejo inicial de urgencia.\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Síndrome Compartimental Agudo: Signos Cardinales (5P), Presión Intracompartimental & Fasciotomía Urgente. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Síndrome Compartimental Agudo, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un paciente con fractura de fémur tratada hace tres días presenta en forma súbita disnea intensa y desaturación. ¿Cuál es el diagnóstico más probable y el examen de elección?",
        "options": [
          {
            "id": "A",
            "text": "Embolia grasa; dímero D"
          },
          {
            "id": "B",
            "text": "Tromboembolismo pulmonar; angiotac de tórax"
          },
          {
            "id": "C",
            "text": "Tromboembolismo pulmonar; dímero D"
          },
          {
            "id": "D",
            "text": "Síndrome compartimental; fasciotomía inmediata"
          },
          {
            "id": "E",
            "text": "Neumonía aspirativa; radiografía de tórax"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: La embolia grasa aparece en las primeras horas con tríada de distrés, compromiso de conciencia y petequias, no días después con disnea súbita. El dímero D no es el examen de elección. Opción B: El TEP aparece días después de una fractura con disnea o dolor torácico súbito. El angiotac de tórax es el examen de elección. El dímero D no es útil porque la fractura ya lo eleva. Opción C: Aunque el diagnóstico de TEP es correcto, el dímero D no es útil en este contexto porque la fractura misma lo eleva, generando un falso positivo que no aporta al diagnóstico. Opción D: El síndrome compartimental aparece en horas con dolor intenso en la extremidad que aumenta con movilidad distal, no con disnea súbita días después. Opción E: Una neumonía no se presenta súbitamente días después de una fractura. El cuadro súbito de disnea post fractura orienta a TEP.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.006"
      },
      {
        "stem": "Un paciente operado de fractura de pierna en yeso circular presenta a las cuatro horas un dolor muy intenso en la extremidad que aumenta al mover los ortejos. ¿Cuál es el diagnóstico y la conducta?",
        "options": [
          {
            "id": "A",
            "text": "Distrofia simpático refleja; pregabalina"
          },
          {
            "id": "B",
            "text": "TVP; anticoagulación y ecodoppler"
          },
          {
            "id": "C",
            "text": "Síndrome compartimental; fasciotomía amplia urgente"
          },
          {
            "id": "D",
            "text": "Síndrome compartimental; retirar yeso y observar"
          },
          {
            "id": "E",
            "text": "Dolor postoperatorio normal; analgesia oral"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: La distrofia simpático refleja aparece semanas a meses después, no en horas. El dolor es neuropático urente, no somático inmediato. La conducta también es diferente. Opción B: La TVP aparece días después y se presenta con dolor muscular al palpar, edema y signo de Homans, no con dolor que aumente al mover los dedos en horas post cirugía. Opción C: El síndrome compartimental aparece en horas con dolor somático intenso que aumenta con la movilidad distal. La fasciotomía amplia es el tratamiento de urgencia para evitar necrosis de la extremidad. Opción D: Retirar el yeso y elevar la extremidad solo está indicado al inicio con dolor leve sin signos de isquemia. Con dolor muy intenso a las cuatro horas se requiere fasciotomía urgente. Opción E: El dolor que aumenta con la movilidad distal en horas post fractura no es dolor postoperatorio normal, orienta a síndrome compartimental que requiere manejo urgente.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.006"
      },
      {
        "stem": "Un paciente con fractura de fémur presenta a las seis horas distrés respiratorio, compromiso de conciencia y se observan petequias en el tronco. ¿Cuál es el diagnóstico y el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "TEP masivo; trombolisis"
          },
          {
            "id": "B",
            "text": "Embolia grasa; soporte"
          },
          {
            "id": "C",
            "text": "Embolia grasa; anticoagulación con heparina"
          },
          {
            "id": "D",
            "text": "Síndrome compartimental; fasciotomía urgente"
          },
          {
            "id": "E",
            "text": "Distrofia simpático refleja; pregabalina"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El TEP aparece días después con disnea súbita, no en horas con la tríada de distrés, compromiso de conciencia y petequias. La tríada petequial es característica de embolia grasa. Opción B: La embolia grasa aparece en horas con tríada de distrés respiratorio, compromiso de conciencia y rash petequial. Se asocia a fracturas de huesos largos como el fémur. El tratamiento es solo soporte, no hay fármacos con eficacia demostrada. Opción C: El diagnóstico de embolia grasa es correcto, pero el tratamiento no es la anticoagulación. El único tratamiento disponible es el soporte, no hay fármacos con eficacia demostrada. Opción D: El síndrome compartimental se presenta con dolor intenso en la extremidad que aumenta con la movilidad distal, no con distrés respiratorio, compromiso de conciencia y petequias. Opción E: La distrofia simpático refleja aparece semanas a meses después con dolor neuropático y cambios tróficos, no en horas con distrés respiratorio y petequias.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.006"
      },
      {
        "stem": "En el contexto del manejo de Síndrome Compartimental Agudo: Signos Cardinales (5P), Presión Intracompartimental & Fasciotomía Urgente, ¿cuál de las siguientes afirmaciones respecto al diagnóstico y tratamiento representa la conducta correcta de acuerdo a las guías de práctica clínica?",
        "options": [
          {
            "id": "A",
            "text": "Se debe realizar inmovilización adecuada, evaluación neurovascular distal y derivación prioritaria."
          },
          {
            "id": "B",
            "text": "Está indicada la movilización precoz forzada sin inmovilización previa."
          },
          {
            "id": "C",
            "text": "Se debe diferir el estudio radiológico hasta que ceda completamente el edema de partes blandas."
          },
          {
            "id": "D",
            "text": "El tratamiento farmacológico exclusivo con reposo absoluto sustituye a la reducción en fracturas desplazadas."
          },
          {
            "id": "E",
            "text": "La infiltración intraarticular con corticoides es la primera línea terapéutica en casos agudos traumáticos."
          }
        ],
        "correcta": "A",
        "explicacion": "La opción correcta es la A. En Síndrome Compartimental Agudo: Signos Cardinales (5P), Presión Intracompartimental & Fasciotomía Urgente, la evaluación neurovascular distal previa y posterior a cualquier inmovilización o reducción es una regla de oro obligatoria.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.006"
      }
    ]
  },
  {
    "id": "trauma-04",
    "classId": "trauma-04",
    "tier": 2,
    "blockNum": 1,
    "blockName": "Generalidades de Fracturas, Fracturas Expuestas & Complicaciones",
    "topicLabel": "12.4",
    "title": "Complicaciones Graves de Fracturas: Embolia Grasa, Pseudoartrosis & Osteomielitis Postraumática",
    "perfilCode": "1.01.2.007",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Sin garantía GES específica · Detección oportuna de hipoxemia post-fractura diafisiaria.",
    "reconstrucciones": "EUNACOM Diciembre 2023 (Q#92) · EUNACOM Julio 2020 (Q#41)",
    "frecuencia": "Media-Alta en EUNACOM · Tríada de Gurd en embolia grasa (hipoxemia, petequias, deterioro neurológico)",
    "diagram": flowTrauma('Complicaciones Graves de Fracturas: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Complicaciones Graves de Fracturas (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Complicaciones Graves de Fracturas: Embolia Grasa, Pseudoartrosis & Osteomielitis Postraumática es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Complicaciones Graves de Fracturas",
        "paragraphs": [
          ":::important\nSITUACIONES DE URGENCIA:\n1.01.2.007 | Shock (y compromiso vascular periférico) | Dx: Específico | Tx: Inicial | Seg: Derivar\n*Nota: Este tema también se integra con Traumatología (Lesiones de nervio periférico y compromiso vascular).*\n:::",
          "Las complicaciones neurovasculares en el contexto de [[Fracturas: Generalidades]] y luxaciones son emergencias que requieren una detección clínica precoz para evitar secuelas funcionales permanentes o la pérdida de la extremidad.",
          "## Lesiones Nerviosas",
          "Las lesiones de los nervios periféricos suelen ocurrir de forma inmediata al momento del trauma (fractura o luxación).",
          "### Clínica General\nEl diagnóstico es **estrictamente clínico** y se caracteriza por un déficit neurológico distal a la lesión:\n- **Alteración Motora:** Paresia (debilidad) o plejia (parálisis).\n- **Alteración Sensitiva:** Hipoestesia (disminución) o anestesia (pérdida total).\n- **Reflejos:** Eventual arreflexia si el nervio participa en un arco reflejo específico.",
          "### Clasificación de Seddon (Pronóstico)"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          ":::tip\nSi el déficit es **parcial** (mueve o siente algo), se asume **Neuroapraxia** y se observa. Si el déficit es **total**, es imposible distinguir clínicamente entre axonotmesis y neurotmesis, por lo que se suele indicar **exploración quirúrgica**.\n:::",
          "### Lesiones Nerviosas Específicas por Fractura/Luxación",
          "1.  **Nervio Radial:**\n    - **Asociación:** Fractura de la diáfisis del húmero (el nervio pasa por el surco radial).\n    - **Clínica:** \"Mano caída\". Imposibilidad de extender la muñeca y los dedos.\n    - **Sensibilidad:** Cara posterior de la extremidad superior.\n2.  **Nervio Axilar (Circunflejo):**\n    - **Asociación:** [[Luxación de Hombro]] (especialmente anterior) o fracturas del cuello del húmero.\n    - **Clínica:** Imposibilidad de abducir el hombro (parálisis del deltoides).\n    - **Sensibilidad:** Zona deltoídea (parche del hombro).\n3.  **Nervio Mediano:**\n    - **Asociación:** Fractura supracondílea de húmero.\n    - **Clínica:** Dificultad para flectar los primeros tres dedos (1° al 3°).\n    - **Sensibilidad:** Primeros 3 dedos y mitad radial del 4°.\n4.  **Nervio Cubital:**\n    - **Asociación:** Fracturas de codo (cara medial/epitróclea).\n    - **Clínica:** Dificultad para flectar el 4° y 5° dedo.\n    - **Sensibilidad:** 5° dedo y mitad cubital del 4°.\n5.  **Nervio Ciático:**\n    - **Asociación:** Luxación posterior de cadera (típico accidente de tránsito, golpe de rodilla contra el tablero).\n    - **Clínica:** Imposibilidad de flectar la rodilla y realizar dorsiflexión del pie.\n    - **Sensibilidad:** Cara posterior del muslo, pierna y pie.\n    - **Reflejos:** Disminución del reflejo aquiliano (raíz S1).",
          ":::note\n**Neuropatías compresivas clásicas:**\n- **Parálisis del borracho:** Compresión del nervio radial (brazo sobre una silla durante el sueño profundo).\n- **Parálisis de la luna de miel:** Compresión del plexo braquial (pareja durmiendo sobre el brazo/axila).\n:::",
          "---",
          "## Lesiones Vasculares"
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "### Clínica de la Oclusión Arterial (Isquemia Aguda)\nSe debe buscar activamente el signo de las **6 P**:\n1.  **Pain** (Dolor intenso).\n2.  **Pallor** (Palidez).\n3.  **Pulselessness** (Ausencia de pulsos).\n4.  **Paresthesia** (Hormigueo/alteración sensitiva).\n5.  **Paralysis** (Paresia o plejia).\n6.  **Poikilothermia** (Frialdad).",
          "### Clínica de la Hemorragia\n- Lo característico de una lesión arterial es la **hemorragia pulsátil**.",
          "### Manejo de Urgencia\n1.  **Hemorragia:** La prioridad es la **compresión directa** (parte del ABC del trauma).\n2.  **Cirugía Vascular:** Reparación definitiva de la arteria.\n3.  **Ligadura:** Solo en casos extremos donde no se logra hemostasia con compresión, seguido de traslado urgente para revascularización.",
          ":::warning\nEl uso de **torniquetes** está generalmente desaconsejado en el manejo estándar inicial porque aumenta el daño isquémico de la extremidad, a menos que sea una hemorragia exanguinante que no ceda a compresión.\n:::",
          "---",
          "## Caso Especial: Disección de la Arteria Poplítea"
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Complicaciones Graves de Fracturas",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": null,
    "treatmentTable": null,
    "vignette": ":::important\nSITUACIONES DE URGENCIA:\n1.01.2.007 | Shock (y compromiso vascular periférico) | Dx: Específico | Tx: Inicial | Seg: Derivar\n*Nota: Este tema también se integra con Traumatología (Lesiones de nervio periférico y compromiso vascular).*\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Complicaciones Graves de Fracturas: Embolia Grasa, Pseudoartrosis & Osteomielitis Postraumática. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Complicaciones Graves de Fracturas, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un paciente sufre fractura de diáfisis humeral en un accidente de tránsito. Al examen físico no puede extender la muñeca ni los dedos. ¿Qué nervio está lesionado y cuál es el déficit sensitivo esperado?",
        "options": [
          {
            "id": "A",
            "text": "Nervio mediano; hipoestesia de los primeros tres dedos"
          },
          {
            "id": "B",
            "text": "Nervio radial; hipoestesia de la cara posterior de la extremidad superior"
          },
          {
            "id": "C",
            "text": "Nervio cubital; hipoestesia del quinto dedo"
          },
          {
            "id": "D",
            "text": "Nervio axilar; hipoestesia sobre el hombro"
          },
          {
            "id": "E",
            "text": "Nervio ciático; hipoestesia de la pierna"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El nervio mediano se lesiona en la fractura supracondílea de húmero, no en la diáfisis. Produce déficit de flexión de los primeros tres dedos, no de extensión. Opción B: El nervio radial está adherido a la diáfisis humeral. Su lesión produce imposibilidad de extender dedos y muñeca más hipoestesia de la cara posterior de la extremidad superior. Opción C: El nervio cubital se lesiona en fracturas de codo y produce déficit de flexión del cuarto y quinto dedo, no de extensión. Se asocia a fractura de codo, no de diáfisis humeral. Opción D: El nervio axilar se lesiona en luxación de hombro y produce incapacidad para abducir el brazo, no para extender la muñeca. Opción E: El nervio ciático está en la extremidad inferior y se lesiona en luxación posterior de cadera. No tiene relación con la fractura de húmero.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.2.007"
      },
      {
        "stem": "Un paciente sufre luxación anterior de hombro derecho. Al reducirlo presenta imposibilidad de abducir el brazo y disminución de la sensibilidad en la zona deltoidea. ¿Qué nervio está comprometido?",
        "options": [
          {
            "id": "A",
            "text": "Nervio radial"
          },
          {
            "id": "B",
            "text": "Nervio mediano"
          },
          {
            "id": "C",
            "text": "Nervio axilar o circunflejo"
          },
          {
            "id": "D",
            "text": "Nervio cubital"
          },
          {
            "id": "E",
            "text": "Nervio ciático"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: El nervio radial se lesiona en la fractura de diáfisis humeral y produce déficit de extensión de dedos y muñeca, no de abducción del hombro. Opción B: El nervio mediano se lesiona en la fractura supracondílea de húmero y produce déficit de flexión de los primeros tres dedos, no de abducción del hombro. Opción C: El nervio axilar inerva el deltoides y la piel sobre él. Se lesiona clásicamente en la luxación anterior de hombro, produciendo incapacidad de abducción y hipoestesia sobre el deltoides. Opción D: El nervio cubital se lesiona en fracturas de codo y produce déficit de flexión del cuarto y quinto dedo más hipoestesia del quinto dedo. Opción E: El nervio ciático está en la extremidad inferior y se lesiona en luxación posterior de cadera, no tiene relación con la luxación de hombro.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.2.007"
      }
    ]
  },
  {
    "id": "trauma-05",
    "classId": "trauma-05",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Politrauma del Aparato Locomotor, Pelvis & Raquis",
    "topicLabel": "12.5",
    "title": "Fracturas de Pelvis & Shock Hipovolémico Pelviano: Clasificación Tile / Young-Burgess & Estabilización Precoz",
    "perfilCode": "1.01.2.007",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES): Politraumatizado Grave con Riesgo Vital.",
    "reconstrucciones": "EUNACOM Diciembre 2022 (Q#14) · EUNACOM Enero 2021 (Q#56)",
    "frecuencia": "Muy Alta en EUNACOM · Maniobra de faja pélvica sobre trocánteres mayores y reanimación hemostática",
    "diagram": flowTrauma('Fracturas de Pelvis & Shock HipovolÃ©mico Pelviano: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Fracturas de Pelvis & Shock HipovolÃ©mico Pelviano (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Fracturas de Pelvis & Shock Hipovolémico Pelviano: Clasificación Tile / Young-Burgess & Estabilización Precoz es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Fracturas de Pelvis & Shock Hipovolémico Pelviano",
        "paragraphs": [
          ":::important\n1.01.2.007 | Shock | Dx: Específico | Tx: Inicial | Seg: Derivar\n*Nota: Aunque el politraumatismo es de manejo quirúrgico/traumatológico, su manejo inicial es la base de la medicina de urgencias en el EUNACOM.*\n:::",
          "El **politraumatismo** se define como la lesión de al menos **tres sistemas** (ej. gastrointestinal, geniturinario y locomotor) o la afectación de tres o más órganos de sistemas diferentes que ponen en riesgo la vida del paciente. Su manejo debe ser sistemático, priorizando siempre la estabilidad vital sobre las lesiones evidentes pero no letales.",
          "## Etiología y Epidemiología\nLas causas más frecuentes de politraumatismo en Chile son:\n1. **Accidentes de tránsito:** Es la causa principal. Los atropellos son especialmente letales, siendo los ocurridos en carretera los de mayor mortalidad, seguidos por los de ciudad.\n2. **Caídas de altura:** Frecuentes en contextos laborales o accidentales.\n3. **Agresiones:** Heridas por arma blanca o de fuego.",
          "## Evaluación Inicial: El ABCDE del Trauma\nEl manejo del paciente politraumatizado sigue un orden estricto de prioridades. No se debe avanzar al siguiente paso sin haber resuelto el anterior.",
          "| Letra | Significado | Acciones Clave |\n| :--- | :--- | :--- |\n| **A** | *Airway* (Vía aérea) | Asegurar permeabilidad de la vía aérea e **instalación de collar cervical**. |\n| **B** | *Breathing* (Ventilación) | Asegurar que el paciente ventile. Uso de Ambú o ventilación mecánica si es necesario. |\n| **C** | *Circulation* (Circulación) | Instalar 2 vías venosas gruesas, infusión de cristaloides (Suero Fisiológico) y **compresión de hemorragias externas**. |\n| **D** | *Disability* (Déficit neurológico) | Realizar examen neurológico completo (Escala de Glasgow, pupilas) para descartar lesión medular o TEC. |\n| **E** | *Exposure* (Exposición) | Desvestir completamente al paciente para buscar lesiones ocultas, evitando la hipotermia. |",
          ":::tip\nEn el manejo de la circulación (**C**), si te preguntan qué es más urgente entre comprimir una hemorragia activa o instalar la vía venosa, la respuesta suele ser **comprimir primero** para detener la pérdida de volemia.\n:::"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          ":::note\nLa **A** no solo implica que el aire pase, sino proteger la médula espinal. Todo paciente politraumatizado se considera portador de una lesión de columna cervical hasta que se demuestre lo contrario.\n:::",
          "## Estudio Radiológico Inicial\nEn todo paciente politraumatizado, independientemente de la clínica, se debe solicitar de forma sistemática la \"trilogía radiográfica\":\n1. **Radiografía de Columna Cervical (Lateral):** Para descartar fracturas o luxaciones que comprometan la médula.\n2. **Radiografía de Tórax (AP):** Para buscar [[Neumotórax]], [[Hemotórax]] o contusión pulmonar.\n3. **Radiografía de Pelvis (AP):** Fundamental para detectar fracturas de pelvis que pueden causar hemorragias masivas.",
          "*Adicionalmente, se pedirán radiografías específicas de las zonas donde se sospeche fractura por el mecanismo del trauma o deformidad evidente.*",
          "## Fractura de Pelvis\nLa fractura de pelvis suele presentarse en el contexto de un paciente politraumatizado. Es una lesión de alta energía con un potencial de mortalidad elevado debido a complicaciones vasculares y viscerales.",
          "### Evaluación Específica\nAdemás del ABCDE, en la fractura de pelvis es obligatorio realizar:\n- **Tacto rectal y vaginal:** Para descartar que se trate de una **fractura expuesta** hacia la mucosa rectal o vaginal, lo cual requiere antibióticos y cirugía de urgencia.\n- **Evaluación de la estabilidad pélvica:** Maniobras de compresión-distracción (aunque deben hacerse con precaución para no aumentar el sangrado).",
          ":::warning\nSi sospechas una fractura de pelvis, evita realizar maniobras repetidas de estabilidad pélvica, ya que puedes romper coágulos formados y reactivar una hemorragia venosa masiva.\n:::"
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "### Complicaciones Graves\nExisten dos complicaciones clásicas que son frecuentemente preguntadas:",
          "#### 1. Shock Hipovolémico\nEs la causa principal de muerte inmediata. \n- **Origen:** Generalmente es por sangrado de los **plexos venosos pélvicos** (hemorragia venosa), aunque también puede haber compromiso arterial.\n- **Manejo:** Reposición de volumen con cristaloides y **estabilización precoz de la pelvis**.\n- **Métodos de estabilización:**\n    - Férula neumática (pantalón antichoque).\n    - Tutores externos (quirúrgico).\n    - Hamaca pélvica.\n    - **Sábana pélvica:** En APS o lugares sin recursos, enrollar una sábana apretada alrededor de las trocánteres mayores para cerrar el espacio pélvico.",
          "#### 2. Sección Uretral\nFrecuente en fracturas de la sínfisis del pubis (lesiones en \"libro abierto\").\n- **Sospecha:** Sangre en el meato urinario, próstata flotante al tacto rectal o globo vesical.\n- **Diagnóstico:** Uretrocistografía retrógrada.",
          ":::warning\n**CONTRAINDICACIÓN ABSOLUTA:** Está prohibido instalar una **sonda Foley** ante la sospecha de sección uretral, ya que puede agravar la lesión o crear una falsa vía. El manejo inicial del globo vesical debe ser mediante una **cistostomía suprapúbica**.\n:::",
          "## Resumen de Manejo\n1. **ABCDE** (Prioridad absoluta).\n2. **Estabilización de pelvis** (si hay sospecha de fractura o inestabilidad hemodinámica).\n3. **Radiografía AP de Pelvis** para confirmar diagnóstico.\n4. Manejo de complicaciones (cirugía, antibióticos en fracturas expuestas, cistostomía en lesiones uretrales).",
          "[[Shock]]\n[[Insuficiencia Respiratoria]]\n[[Traumatismo Encefalocraneano]]"
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Fracturas de Pelvis & Shock Hipovolémico Pelviano",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": {
      "title": "Estratificación de Severidad y Factores de Alto Riesgo en Fracturas de Pelvis & Shock Hipovolémico Pelviano",
      "headers": [
        "Nivel de Severidad",
        "Hallazgos Clínicos Cardinales",
        "Riesgo / Complicación Mayor",
        "Conducta Inmediata"
      ],
      "rows": [
        [
          "Leve / No Desplazada",
          "Deformidad mínima, pulsos distales presentes y simétricos",
          "Consolidación viciosa si no se inmoviliza",
          "Inmovilización con valva de yeso y control"
        ],
        [
          "Moderada / Desplazada",
          "Deformidad marcada, impotencia funcional, hematoma",
          "Lesión de partes blandas, atrapamiento",
          "Reducción cerrada bajo analgesia / tracción"
        ],
        [
          "Grave / Inestable o Expuesta",
          "Pérdida de pulsos, alteración sensitiva, exposición ósea",
          "Necrosis avascular, shock, pérdida de extremidad",
          "Pabellón quirúrgico urgente, fijación y aseo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado y Fármacos en Fracturas de Pelvis & Shock Hipovolémico Pelviano",
      "headers": [
        "Fase Terapéutica",
        "Intervención Primaria",
        "Fármacos / Posología",
        "Objetivo Clínico"
      ],
      "rows": [
        [
          "Urgencia Inicial",
          "Alineación anatómica e inmovilización provisoria",
          "Analgesia EV (Ketoprofeno 100mg / Tramadol 50-100mg)",
          "Alivio del dolor y prevención de daño secundario"
        ],
        [
          "Protección Cutánea",
          "Aseo de heridas, apósitos estériles y férula",
          "Cefazolina 2g EV + profilaxis antitetánica si expuesta",
          "Prevención de infección osteoarticular profunda"
        ],
        [
          "Resolución Definitiva",
          "Osteosíntesis interna (placas/tornillos/clavos) o prótesis",
          "Tromboprofilaxis con HBPM (Enoxaparina 40mg/d SC)",
          "Movilización precoz y consolidación ósea anatómica"
        ]
      ]
    },
    "vignette": ":::important\n1.01.2.007 | Shock | Dx: Específico | Tx: Inicial | Seg: Derivar\n*Nota: Aunque el politraumatismo es de manejo quirúrgico/traumatológico, su manejo inicial es la base de la medicina de urgencias en el EUNACOM.*\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Fracturas de Pelvis & Shock Hipovolémico Pelviano: Clasificación Tile / Young-Burgess & Estabilización Precoz. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Fracturas de Pelvis & Shock Hipovolémico Pelviano, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un paciente politraumatizado llega a urgencias tras un accidente de tránsito. ¿Cuáles son las tres radiografías mínimas que se deben solicitar?",
        "options": [
          {
            "id": "A",
            "text": "Anteroposterior de tórax, anteroposterior de abdomen y lateral de rodilla"
          },
          {
            "id": "B",
            "text": "Lateral de cuello, anteroposterior de tórax y anteroposterior de pelvis"
          },
          {
            "id": "C",
            "text": "Anteroposterior de tórax, TAC de cerebro y anteroposterior de pelvis"
          },
          {
            "id": "D",
            "text": "Solo anteroposterior de tórax si el paciente está estable"
          },
          {
            "id": "E",
            "text": "Radiografías de todos los huesos largos más AP de tórax"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: Las radiografías mínimas en un politraumatizado son lateral de cuello, AP de tórax y AP de pelvis. La radiografía de abdomen no es parte del estudio mínimo inicial. Opción B: Estas tres proyecciones son el estudio mínimo en un politraumatizado: lateral de cuello para descartar fractura cervical, AP de tórax para neumotórax o hemotórax, y AP de pelvis para fractura de pelvis. Opción C: El TAC de cerebro no es parte de las tres radiografías mínimas iniciales. Las mínimas son lateral de cuello, AP de tórax y AP de pelvis. Opción D: Un politraumatizado requiere siempre las tres proyecciones mínimas independientemente de su estabilidad: lateral de cuello, AP de tórax y AP de pelvis. Opción E: No se piden radiografías de todos los huesos largos inicialmente. El estudio mínimo son solo tres proyecciones específicas: lateral de cuello, AP de tórax y AP de pelvis.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.2.007"
      },
      {
        "stem": "Un paciente con fractura de pelvis en libro abierto tras un accidente de tránsito está en shock hipovolémico. ¿Cuál es la conducta más urgente para controlar la hemorragia?",
        "options": [
          {
            "id": "A",
            "text": "Transfusión de glóbulos rojos y esperar que se estabilice solo"
          },
          {
            "id": "B",
            "text": "Cirugía de pelvis de urgencia para clipar las venas pélvicas"
          },
          {
            "id": "C",
            "text": "ABC más estabilización externa de la pelvis con sábana, amaca o tutores externos"
          },
          {
            "id": "D",
            "text": "Instalar sonda Foley para medir diuresis y controlar hidratación"
          },
          {
            "id": "E",
            "text": "Angiografía pélvica para embolizar las arterias sangrantes"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: La transfusión puede ser parte del manejo pero no controla la fuente de sangrado. Lo urgente es estabilizar la pelvis para reducir la capacitancia y frenar la hemorragia venosa pélvica. Opción B: La cirugía no es lo más urgente ni lo inicial. La estabilización externa de la pelvis es la primera medida para controlar la hemorragia venosa pélvica. Opción C: La pelvis abierta tiene mayor capacitancia para acumular sangre. Estabilizarla y comprimirla reduce ese espacio y frena la hemorragia venosa. Se puede usar sábana enrollada, amaca pélvica o tutores externos. Opción D: La sonda Foley está contraindicada en fractura de pelvis sin descartar sección uretral. La conducta urgente es estabilizar la pelvis para controlar la hemorragia. Opción E: La hemorragia en fractura de pelvis es principalmente venosa, no arterial. La medida urgente es la estabilización externa de la pelvis, no la embolización arterial.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.2.007"
      },
      {
        "stem": "Un paciente con fractura de pelvis no puede orinar y presenta dolor suprapúbico. Usted sospecha sección uretral. ¿Cuál es la conducta correcta?",
        "options": [
          {
            "id": "A",
            "text": "Instalar sonda Foley con cuidado para drenar la vejiga"
          },
          {
            "id": "B",
            "text": "Cistostomía suprapúbica, uretrocistografía y reparación quirúrgica de la uretra"
          },
          {
            "id": "C",
            "text": "Uretrocistografía primero y luego sonda Foley si la uretra está íntegra"
          },
          {
            "id": "D",
            "text": "Observar y esperar que orine espontáneamente"
          },
          {
            "id": "E",
            "text": "TAC de pelvis para ver la extensión de la fractura"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: La sonda Foley está absolutamente contraindicada si se sospecha sección uretral porque puede crear una falsa vía y generar más daño. Se debe instalar cistostomía. Opción B: La sonda Foley está contraindicada en sección uretral. El manejo correcto es cistostomía para drenar la vejiga, uretrocistografía para el diagnóstico y cirugía para reparar la uretra. Opción C: Si se sospecha sección uretral con globo vesical, primero se instala la cistostomía para drenar la vejiga y luego se hace la uretrocistografía diagnóstica. No se instala sonda Foley. Opción D: La retención urinaria con globo vesical en un politraumatizado no puede quedar sin manejo. Hay que drenar la vejiga con cistostomía y estudiar la uretra con uretrocistografía. Opción E: Aunque el TAC puede ayudar a ver la fractura, la urgencia en este momento es drenar la vejiga. La sonda Foley está contraindicada y la cistostomía es la conducta inmediata.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.2.007"
      },
      {
        "stem": "En el contexto del manejo de Fracturas de Pelvis & Shock Hipovolémico Pelviano: Clasificación Tile / Young-Burgess & Estabilización Precoz, ¿cuál de las siguientes afirmaciones respecto al diagnóstico y tratamiento representa la conducta correcta de acuerdo a las guías de práctica clínica?",
        "options": [
          {
            "id": "A",
            "text": "Se debe realizar inmovilización adecuada, evaluación neurovascular distal y derivación prioritaria."
          },
          {
            "id": "B",
            "text": "Está indicada la movilización precoz forzada sin inmovilización previa."
          },
          {
            "id": "C",
            "text": "Se debe diferir el estudio radiológico hasta que ceda completamente el edema de partes blandas."
          },
          {
            "id": "D",
            "text": "El tratamiento farmacológico exclusivo con reposo absoluto sustituye a la reducción en fracturas desplazadas."
          },
          {
            "id": "E",
            "text": "La infiltración intraarticular con corticoides es la primera línea terapéutica en casos agudos traumáticos."
          }
        ],
        "correcta": "A",
        "explicacion": "La opción correcta es la A. En Fracturas de Pelvis & Shock Hipovolémico Pelviano: Clasificación Tile / Young-Burgess & Estabilización Precoz, la evaluación neurovascular distal previa y posterior a cualquier inmovilización o reducción es una regla de oro obligatoria.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.2.007"
      }
    ]
  },
  {
    "id": "trauma-06",
    "classId": "trauma-06",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Politrauma del Aparato Locomotor, Pelvis & Raquis",
    "topicLabel": "12.6",
    "title": "Trauma Raquimedular: Clasificación ASIA, Inmovilización Cervical, Shock Neurogénico vs Medular",
    "perfilCode": "4.01.2.020",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES): Traumatismo Raquimedular.",
    "reconstrucciones": "EUNACOM Julio 2023 (Q#35) · EUNACOM Enero 2022 (Q#80)",
    "frecuencia": "Alta en EUNACOM · Diferenciación de shock neurogénico (hipotensión con bradicardia) y collar cervical rígido",
    "diagram": flowTrauma('Trauma Raquimedular: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Trauma Raquimedular (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Trauma Raquimedular: Clasificación ASIA, Inmovilización Cervical, Shock Neurogénico vs Medular es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Trauma Raquimedular",
        "paragraphs": [
          ":::important\n1.08.1.001 | Fracturas: Generalidades y Complicaciones | Dx: Específico | Tx: Inicial | Seg: Completo\n:::",
          "En el proceso de recuperación de una fractura, la consolidación ósea es el objetivo final. Sin embargo, diversos factores pueden interferir con este proceso biológico, dando lugar a complicaciones que alteran la función y la anatomía del paciente. Es fundamental distinguir entre el **retardo de la consolidación**, la **pseudoartrosis** y la **consolidación viciosa**, ya que sus manejos y pronósticos son radicalmente distintos.",
          "## 1. Retardo de la Consolidación (Retraso de la Unión)",
          "Se define como un proceso de curación que se prolonga más allá del tiempo promedio esperado para una fractura específica y una localización determinada, pero que **mantiene la capacidad de consolidar** por sí solo si se eliminan los factores que lo frenan.",
          "### Clínica y Fisiopatología\n- **Dolor persistente:** A diferencia de una consolidación normal, el dolor en el foco de fractura persiste por más tiempo de lo habitual.\n- **Causas principales:**\n    - **Inmovilización inadecuada:** El exceso de micromovimientos impide que el callo óseo se estabilice.\n    - **Uso de AINEs:** Los antiinflamatorios no esteroideos pueden reducir el flujo sanguíneo hacia el hueso y alterar la cascada inflamatoria necesaria para la osteogénesis.\n    - **Factores sistémicos:** Tabaquismo, diabetes o desnutrición.",
          ":::note\nEl hueso tiene una notable capacidad de regeneración, pero requiere estabilidad y una respuesta inflamatoria inicial adecuada. Los **AINEs**, al inhibir las prostaglandinas, pueden frenar el reclutamiento de células osteogénicas en las etapas iniciales del callo.\n:::"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "## 2. Pseudoartrosis (No-Unión)",
          "La pseudoartrosis representa el fracaso definitivo del proceso de consolidación. Se considera que existe cuando la curación se ha detenido por completo y no ocurrirá sin intervención quirúrgica.",
          "### Clínica y Características\n- **Movilidad anormal:** El signo patognomónico es la movilidad indolora (o poco dolorosa) en el foco de fractura, creando una \"falsa articulación\".\n- **Ausencia de dolor:** Habitualmente el dolor agudo ha desaparecido, aunque puede persistir una molestia leve al cargar peso.\n- **Interposición de partes blandas:** El tejido fibroso o muscular se interpone entre los extremos óseos, impidiendo físicamente la unión.",
          "### Clasificación y Causas\nExisten dos tipos principales según la vitalidad de los extremos óseos:",
          "| Tipo | Causa Principal | Hallazgo Radiográfico |\n| :--- | :--- | :--- |\n| **Hipertrófica** | Mala inmovilización (exceso de movilidad) | Extremos óseos ensanchados en **\"pata de elefante\"**. |\n| **Atrófica** | Mala irrigación sanguínea o hueso patológico | Extremos óseos adelgazados, redondeados o \"en punta de lápiz\". |",
          ":::tip\nLa pseudoartrosis **hipertrófica** ocurre porque el cuerpo intenta consolidar y genera mucho hueso, pero como hay demasiado movimiento, no logra cerrar el puente. La **atrófica**, en cambio, ocurre porque \"no hay vida\" o energía biológica suficiente (isquemia, infección, etc.).\n:::"
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "A diferencia de las anteriores, aquí el hueso **sí consolida**, pero lo hace en una posición anatómica incorrecta (angulación, rotación o acortamiento).",
          "### Clínica\n- **Deformidad visible:** El segmento afectado se observa desviado o \"chueco\".\n- **Ausencia de dolor:** Una vez que el hueso ha pegado, el dolor de la fractura desaparece, aunque puede aparecer dolor secundario en articulaciones adyacentes por mala distribución de cargas.\n- **Limitación funcional:** Dependiendo del grado de desviación.",
          "### Causas\n- **Mala reducción inicial:** Los fragmentos nunca fueron alineados correctamente.\n- **Pérdida de la reducción:** La fractura estaba bien alineada, pero se desplazó durante el periodo de inmovilización y no se corrigió a tiempo.",
          ":::warning\nEs vital no confundir la **no-unión** (pseudoartrosis) con la **mala unión** (consolidación viciosa). En la mala unión el hueso está sólido, pero en mala posición.\n:::",
          "### Manejo\nSi la deformidad es funcionalmente inaceptable, el tratamiento es quirúrgico mediante una **osteotomía correctora** (cirugía de refractura):\n1. Se corta el hueso consolidado.\n2. Se realiza una **reducción** anatómica correcta.\n3. Se estabiliza con osteosíntesis para asegurar una nueva consolidación en el eje adecuado.",
          "## Resumen Comparativo para el EUNACOM"
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Trauma Raquimedular",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": {
      "title": "Estratificación de Severidad y Factores de Alto Riesgo en Trauma Raquimedular",
      "headers": [
        "Nivel de Severidad",
        "Hallazgos Clínicos Cardinales",
        "Riesgo / Complicación Mayor",
        "Conducta Inmediata"
      ],
      "rows": [
        [
          "Leve / No Desplazada",
          "Deformidad mínima, pulsos distales presentes y simétricos",
          "Consolidación viciosa si no se inmoviliza",
          "Inmovilización con valva de yeso y control"
        ],
        [
          "Moderada / Desplazada",
          "Deformidad marcada, impotencia funcional, hematoma",
          "Lesión de partes blandas, atrapamiento",
          "Reducción cerrada bajo analgesia / tracción"
        ],
        [
          "Grave / Inestable o Expuesta",
          "Pérdida de pulsos, alteración sensitiva, exposición ósea",
          "Necrosis avascular, shock, pérdida de extremidad",
          "Pabellón quirúrgico urgente, fijación y aseo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado y Fármacos en Trauma Raquimedular",
      "headers": [
        "Fase Terapéutica",
        "Intervención Primaria",
        "Fármacos / Posología",
        "Objetivo Clínico"
      ],
      "rows": [
        [
          "Urgencia Inicial",
          "Alineación anatómica e inmovilización provisoria",
          "Analgesia EV (Ketoprofeno 100mg / Tramadol 50-100mg)",
          "Alivio del dolor y prevención de daño secundario"
        ],
        [
          "Protección Cutánea",
          "Aseo de heridas, apósitos estériles y férula",
          "Cefazolina 2g EV + profilaxis antitetánica si expuesta",
          "Prevención de infección osteoarticular profunda"
        ],
        [
          "Resolución Definitiva",
          "Osteosíntesis interna (placas/tornillos/clavos) o prótesis",
          "Tromboprofilaxis con HBPM (Enoxaparina 40mg/d SC)",
          "Movilización precoz y consolidación ósea anatómica"
        ]
      ]
    },
    "vignette": ":::important\n1.08.1.001 | Fracturas: Generalidades y Complicaciones | Dx: Específico | Tx: Inicial | Seg: Completo\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Trauma Raquimedular: Clasificación ASIA, Inmovilización Cervical, Shock Neurogénico vs Medular. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Trauma Raquimedular, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un paciente con fractura de tibia en yeso desde hace cuatro meses sigue con dolor leve en el foco de fractura. La radiografía muestra callo óseo en formación pero sin terminar de consolidar. ¿Cuál es el diagnóstico y la conducta?",
        "options": [
          {
            "id": "A",
            "text": "Pseudoartrosis; cirugía para remover partes blandas"
          },
          {
            "id": "B",
            "text": "Retraso de consolidación; mejorar la inmovilización"
          },
          {
            "id": "C",
            "text": "Consolidación viciosa; cirugía de refractura"
          },
          {
            "id": "D",
            "text": "Pseudoartrosis atrófica; tratamiento de la mala irrigación"
          },
          {
            "id": "E",
            "text": "Osteomielitis; antibióticos endovenosos"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: La pseudoartrosis tiene movilidad anormal y sin dolor, con partes blandas interpuestas en la radiografía. Este paciente tiene dolor leve y callo en formación, que corresponde a retraso de consolidación. Opción B: El retraso de consolidación se presenta con dolor persistente más allá del tiempo normal y radiografía con callo óseo en maduración. El tratamiento es mejorar la inmovilización, que era la causa. Opción C: La consolidación viciosa tiene consolidación ya completada pero desviada. Este paciente aún no ha consolidado, lo que corresponde a retraso de consolidación. Opción D: La pseudoartrosis tiene movilidad anormal en el foco y la radiografía muestra partes blandas interpuestas, no callo en formación. Este caso tiene callo en maduración que es retraso de consolidación. Opción E: La osteomielitis tiene fiebre, eritema y secreción. El callo óseo en formación con dolor leve después de una fractura en yeso corresponde a retraso de consolidación.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.020"
      },
      {
        "stem": "Un paciente con fractura de fémur tratada hace seis meses presenta movilidad anormal en el muslo y ausencia de dolor. La radiografía muestra los extremos óseos hipertróficos como pata de elefante con partes blandas interpuestas. ¿Cuál es el diagnóstico y el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "Retraso de consolidación; mejorar la inmovilización"
          },
          {
            "id": "B",
            "text": "Pseudoartrosis hipertrófica; cirugía para remover partes blandas"
          },
          {
            "id": "C",
            "text": "Consolidación viciosa; refractura quirúrgica"
          },
          {
            "id": "D",
            "text": "Pseudoartrosis atrófica; tratamiento de la irrigación"
          },
          {
            "id": "E",
            "text": "Fractura patológica; descartar tumor óseo"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El retraso de consolidación tiene dolor persistente y callo en maduración. Este paciente tiene movilidad anormal y sin dolor con la imagen radiográfica de partes blandas interpuestas. Opción B: La pseudoartrosis hipertrófica tiene movilidad anormal sin dolor, extremos óseos en pata de elefante y partes blandas interpuestas, causada por mala inmovilización. El tratamiento es siempre quirúrgico. Opción C: La consolidación viciosa tiene el hueso ya consolidado pero desviado, sin movilidad anormal en el foco. Este caso tiene movilidad anormal que indica que no consolidó. Opción D: La pseudoartrosis atrófica tiene extremos óseos atróficos por mala irrigación. Este caso tiene extremos hipertróficos en pata de elefante que corresponde a la variante hipertrófica por mala inmovilización. Opción E: Una fractura patológica tiene causa subyacente como tumor u osteoporosis. La imagen de pseudoartrosis hipertrófica con extremos en pata de elefante es característica de mala inmovilización previa.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.020"
      },
      {
        "stem": "Un paciente con fractura de antebrazo tratada hace tres meses consulta por deformidad del antebrazo sin dolor. La radiografía muestra consolidación completa pero con desviación de los ejes. ¿Cuál es el diagnóstico y el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "Retraso de consolidación; mejorar inmovilización"
          },
          {
            "id": "B",
            "text": "Pseudoartrosis; cirugía para remover partes blandas"
          },
          {
            "id": "C",
            "text": "Consolidación viciosa; cirugía de refractura con nueva reducción"
          },
          {
            "id": "D",
            "text": "Fractura patológica; estudio de causa subyacente"
          },
          {
            "id": "E",
            "text": "Consolidación normal; alta sin tratamiento"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: El retraso de consolidación tiene dolor persistente y callo en maduración, no consolidación completa con desviación. El hueso ya consolidó en este caso. Opción B: La pseudoartrosis tiene movilidad anormal sin dolor y partes blandas interpuestas. Este caso tiene consolidación completa, aunque desviada, que corresponde a consolidación viciosa. Opción C: La consolidación viciosa tiene el hueso consolidado de manera desviada sin dolor, por mala reducción o mala inmovilización. El tratamiento es refractura quirúrgica con nueva reducción e inmovilización adecuada. Opción D: Una fractura patológica se da en contexto de tumor u osteoporosis. Una fractura que consolidó desviada en un adulto joven corresponde a consolidación viciosa por mala reducción o inmovilización. Opción E: Una consolidación con desviación de los ejes no es normal. La mala unión o consolidación viciosa produce problemas funcionales y requiere tratamiento quirúrgico.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.020"
      },
      {
        "stem": "En el contexto del manejo de Trauma Raquimedular: Clasificación ASIA, Inmovilización Cervical, Shock Neurogénico vs Medular, ¿cuál de las siguientes afirmaciones respecto al diagnóstico y tratamiento representa la conducta correcta de acuerdo a las guías de práctica clínica?",
        "options": [
          {
            "id": "A",
            "text": "Se debe realizar inmovilización adecuada, evaluación neurovascular distal y derivación prioritaria."
          },
          {
            "id": "B",
            "text": "Está indicada la movilización precoz forzada sin inmovilización previa."
          },
          {
            "id": "C",
            "text": "Se debe diferir el estudio radiológico hasta que ceda completamente el edema de partes blandas."
          },
          {
            "id": "D",
            "text": "El tratamiento farmacológico exclusivo con reposo absoluto sustituye a la reducción en fracturas desplazadas."
          },
          {
            "id": "E",
            "text": "La infiltración intraarticular con corticoides es la primera línea terapéutica en casos agudos traumáticos."
          }
        ],
        "correcta": "A",
        "explicacion": "La opción correcta es la A. En Trauma Raquimedular: Clasificación ASIA, Inmovilización Cervical, Shock Neurogénico vs Medular, la evaluación neurovascular distal previa y posterior a cualquier inmovilización o reducción es una regla de oro obligatoria.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.01.2.020"
      }
    ]
  },
  {
    "id": "trauma-07",
    "classId": "trauma-07",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Extremidad Superior, Inferior & Cadera",
    "topicLabel": "12.7",
    "title": "Lesiones de Hombro, Clavícula y Miembro Superior: Luxación Glenohumeral, Fractura de Colles & Escafoides",
    "perfilCode": "1.14.1.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Maniobras de reducción cerrada y evaluación del nervio axilar/radial.",
    "reconstrucciones": "EUNACOM Diciembre 2023 (Q#29) · EUNACOM Julio 2022 (Q#58)",
    "frecuencia": "Muy Alta en EUNACOM · Signo de la charretera en luxación anterior y dolor en tabaquera anatómica",
    "diagram": flowTrauma('Lesiones de Hombro, ClavÃ­cula y Miembro Superior: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Lesiones de Hombro, ClavÃ­cula y Miembro Superior (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Lesiones de Hombro, Clavícula y Miembro Superior: Luxación Glenohumeral, Fractura de Colles & Escafoides es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Lesiones de Hombro, Clavícula y Miembro Superior",
        "paragraphs": [
          ":::important\n1.14.1.001 | Fracturas de extremidad inferior | Dx: Específico | Tx: Inicial | Seg: Derivar\n1.14.1.002 | Esguince de tobillo | Dx: Específico | Tx: Completo | Seg: Completo\n:::",
          "Las lesiones traumáticas de las extremidades inferiores son un motivo de consulta extremadamente frecuente en los servicios de urgencia. Para el examen EUNACOM, es fundamental distinguir entre aquellas que requieren un manejo quirúrgico inmediato y aquellas que pueden ser tratadas de forma ortopédica, así como identificar las complicaciones potencialmente graves.",
          "## Generalidades de las Fracturas de Extremidad Inferior",
          "Independientemente del hueso afectado, las fracturas de extremidad inferior comparten una clínica común que debe hacer sospechar el diagnóstico de inmediato:",
          "- **Dolor intenso** de inicio súbito tras el trauma.\n- **Impotencia funcional** (incapacidad para la marcha o el apoyo).\n- **Deformidad y desviación de los ejes** anatómicos.\n- **Crepitación ósea** al movimiento o palpación.\n- **Equimosis y aumento de volumen** local.",
          ":::tip\nComo regla general para el EUNACOM: Las fracturas de **fémur, pierna (tibia/peroné) y tobillo** se consideran de tratamiento **quirúrgico**. El manejo ortopédico es la excepción y suele reservarse para casos muy específicos o pacientes con contraindicación quirúrgica absoluta.\n:::"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "### Manejo\n- **Diagnóstico:** Se confirma mediante radiografías AP y lateral de fémur, incluyendo las articulaciones proximal (cadera) y distal (rodilla).\n- **Tratamiento:** Es siempre **quirúrgico** (habitualmente con clavos intramedulares o placas). El manejo ortopédico no logra contrarrestar la fuerza muscular y suele terminar en consolidación viciosa o pseudoartrosis.",
          "---",
          "## Fractura de Pierna (Tibia y Peroné)",
          "Se refiere a las fracturas de la diáfisis de la tibia, que frecuentemente se asocian a fractura del peroné.",
          "### Complicaciones Críticas\nEstas fracturas son particularmente peligrosas por dos complicaciones que siempre se preguntan:",
          "1.  **[[Síndrome Compartimental]]**: Debido al espacio limitado en los compartimentos de la pierna, el edema y el sangrado pueden aumentar la presión tisular, comprometiendo la perfusión. Es una urgencia quirúrgica (fasciotomía).\n2.  **[[Trombosis Venosa Profunda]] (TVP)**: El trauma y la inmovilización prolongada son factores de riesgo mayores."
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "| Hallazgo Clínico | Probable Esguince | Probable Fractura |\n| :--- | :--- | :--- |\n| **Apoyo de la extremidad** | Puede ser doloroso, pero es posible | **Imposibilidad total de apoyar** |\n| **Crepitación ósea** | Ausente | **Presente** |\n| **Palpación ósea** | Dolor en ligamentos | **Dolor sobre prominencias óseas** |\n| **Equimosis** | Suele ser tardía/localizada | Suele ser inmediata y extensa |",
          "### Puntos Clave de Dolor (Criterios de Sospecha)\nSe debe palpar sistemáticamente:\n1.  **Maléolos (medial y lateral):** Su fractura es lo más común en el tobillo.\n2.  **Base del 5to Metatarsiano:** Por la tracción del músculo peroneo lateral corto, puede haber una fractura por avulsión.\n3.  **Cabeza del Peroné:** El trauma puede transmitirse a través de la **sindesmosis** (la unión fibrosa entre tibia y peroné) y fracturar el peroné en su parte proximal (Fractura de Maisonneuve).",
          ":::tip\n**Perla EUNACOM:** Ante la duda entre esguince y fractura, la conducta correcta es: **\"Un esguince es una fractura hasta que se demuestre lo contrario con una radiografía\"**. Si se pregunta por el *diagnóstico* más probable ante una torcedura simple con equimosis, es esguince; si se pregunta por el *manejo*, es solicitar radiografía.\n:::",
          "---",
          "## Tratamiento y Manejo Inicial",
          "### 1. Fractura de Tobillo\nEl tratamiento definitivo suele ser la **reducción y osteosíntesis quirúrgica**, especialmente si hay compromiso de ambos maléolos o inestabilidad de la sindesmosis."
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Lesiones de Hombro, Clavícula y Miembro Superior",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": null,
    "treatmentTable": null,
    "vignette": ":::important\n1.14.1.001 | Fracturas de extremidad inferior | Dx: Específico | Tx: Inicial | Seg: Derivar\n1.14.1.002 | Esguince de tobillo | Dx: Específico | Tx: Completo | Seg: Completo\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Lesiones de Hombro, Clavícula y Miembro Superior: Luxación Glenohumeral, Fractura de Colles & Escafoides. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Lesiones de Hombro, Clavícula y Miembro Superior, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un hombre de veintidós años sufre una caída y presenta dolor en la tabaquera anatómica de la mano derecha. La radiografía es normal. ¿Cuál es la conducta?",
        "options": [
          {
            "id": "A",
            "text": "Alta con analgésicos porque la radiografía es normal y no hay fractura"
          },
          {
            "id": "B",
            "text": "Solicitar TAC de la mano para confirmar o descartar fractura de escafoides"
          },
          {
            "id": "C",
            "text": "Ecografía de partes blandas para evaluar tendones"
          },
          {
            "id": "D",
            "text": "RMN de muñeca como primer examen"
          },
          {
            "id": "E",
            "text": "Inmovilización y control en dos semanas sin más estudios"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: La radiografía normal no descarta la fractura de escafoides. El dolor en la tabaquera anatómica es fractura de escafoides hasta descartarse con TAC. Opción B: El TAC es el examen de elección para la fractura de escafoides porque la radiografía puede ser normal incluso con fractura. Si el TAC está normal, ahí sí se descarta. Opción C: La ecografía no es el examen de elección para fractura de escafoides. El TAC es el examen de elección ante dolor en la tabaquera anatómica con radiografía normal. Opción D: Aunque la RMN puede detectar fracturas de escafoides, el TAC es el examen de elección según la clase. Si no hay TAC disponible, se inmoviliza la mano. Opción E: La inmovilización es correcta si no hay TAC disponible, pero siempre se debe solicitar TAC para confirmar o descartar la fractura. No se puede quedar sin diagnóstico definitivo.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.14.1.001"
      },
      {
        "stem": "Un paciente presenta fractura de la diáfisis cubital más luxación de la cúpula radial en la radiografía. ¿Cuál es el nombre de esta lesión?",
        "options": [
          {
            "id": "A",
            "text": "Fractura de Galeazzi"
          },
          {
            "id": "B",
            "text": "Fractura de Colles"
          },
          {
            "id": "C",
            "text": "Fractura de Monteggia"
          },
          {
            "id": "D",
            "text": "Fractura supracondílea de húmero"
          },
          {
            "id": "E",
            "text": "Fractura subcapital de húmero"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: La fractura de Galeazzi es fractura de diáfisis del radio más luxación del cúbito distal. La fractura de la diáfisis cubital más luxación de cúpula radial es de Monteggia. Opción B: La fractura de Colles es una fractura de muñeca con deformidad en dorso de tenedor. No involucra la diáfisis cubital ni la cúpula radial. Opción C: La fractura de Monteggia es la fractura de la diáfisis cubital más la luxación de la cúpula radial. La de Galeazzi es al revés: fractura de radio más luxación del cúbito distal. Opción D: La fractura supracondílea de húmero afecta el extremo distal del húmero con riesgo de lesión de arteria braqueal y nervio mediano, no involucra el antebrazo. Opción E: La fractura subcapital de húmero afecta el extremo proximal del húmero y es característica del adulto mayor con osteoporosis, no es una lesión del antebrazo.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.14.1.001"
      }
    ]
  },
  {
    "id": "trauma-08",
    "classId": "trauma-08",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Extremidad Superior, Inferior & Cadera",
    "topicLabel": "12.8",
    "title": "Lesiones de Tobillo y Pie: Fracturas Maleolares, Reglas de Ottawa & Rotura del Tendón de Aquiles",
    "perfilCode": "1.01.1.021",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Criterios radiológicos de Ottawa y Signo de Thompson.",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#71) · EUNACOM Enero 2021 (Q#19)",
    "frecuencia": "Alta en EUNACOM · Indicación de radiografías según Ottawa y diagnóstico clínico de rotura aquiliana",
    "diagram": flowTrauma('Lesiones de Tobillo y Pie: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Lesiones de Tobillo y Pie (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Lesiones de Tobillo y Pie: Fracturas Maleolares, Reglas de Ottawa & Rotura del Tendón de Aquiles es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Lesiones de Tobillo y Pie",
        "paragraphs": [
          ":::important\n3.01.1.001 | Lesiones de rodilla (Meniscales y Ligamentosas) | Dx: Específico | Tx: Inicial/Completo | Seg: Derivar/Completo\n:::",
          "Las lesiones de rodilla son un motivo de consulta extremadamente frecuente en la práctica clínica y en el examen EUNACOM. Aunque cada estructura tiene una presentación particular, comparten elementos comunes: todas cursan con **dolor de rodilla** e **impotencia funcional**.",
          "Dado que los meniscos y ligamentos son tejido conectivo y fibrocartílago, no son visibles en la radiografía convencional. Por lo tanto, el estándar de oro para el diagnóstico de partes blandas es la **Resonancia Magnética Nuclear (RMN)**.",
          "## 1. Lesiones Meniscales",
          "Los meniscos (medial y lateral) actúan como amortiguadores y estabilizadores de la rodilla. Su lesión suele ocurrir por mecanismos de **torsión brusca** (giros con el pie fijo en el suelo).",
          "### Clínica Específica\n- **Bloqueo articular:** Sensación de que la rodilla se queda \"atascada\" o trabada al caminar.\n- **Dolor en la interlínea articular:** Dolor a la palpación directa del espacio entre el fémur y la tibia.\n- **Sensación de inestabilidad.**"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "Los ligamentos cruzados son los principales estabilizadores de la traslación anterior y posterior de la tibia. Su síntoma cardinal es la **inestabilidad** (\"siento que la rodilla se me va\").",
          "### Diferencias entre LCA y LCP",
          "| Característica | Ligamento Cruzado Anterior (LCA) | Ligamento Cruzado Posterior (LCP) |\n| :--- | :--- | :--- |\n| **Mecanismo** | Hiperextensión o desaceleración brusca. | Hiperflexión o golpe directo anterior (\"golpe en tablero\"). |\n| **Signo Clínico** | **Cajón Anterior** (tibia se desplaza hacia adelante). | **Cajón Posterior** (tibia se desplaza hacia atrás). |\n| **Frecuencia** | Mucho más frecuente. | Menos frecuente. |\n| **Tratamiento** | **Quirúrgico** (habitual en jóvenes/activos). | **Conservador** (inicialmente). Quirúrgico en deportistas. |",
          ":::note\nLa rotura del LCA genera una gran inestabilidad funcional, por lo que en la mayoría de los pacientes jóvenes o deportistas la resolución es quirúrgica mediante reconstrucción artroscópica.\n:::",
          "---",
          "## 3. Lesiones de Ligamentos Colaterales"
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "## 4. Disfunción Patelofemoral (Síndrome de Hiperpresión Rotuliana)",
          "Es una causa muy común de consulta, especialmente en personas jóvenes que realizan actividad física.",
          "### Clínica\n- **Dolor anterior de rodilla:** Localizado \"detrás\" o alrededor de la rótula.\n- **Desencadenantes:** Subir o bajar escaleras, caminar por cerros (trekking) o estar sentado mucho tiempo.\n- Puede haber sensación de que la rótula \"se corre\".",
          ":::important\nEl diagnóstico de la **Disfunción Patelofemoral** es eminentemente **CLÍNICO**. No requiere RMN de entrada a menos que se sospechen lesiones meniscales o ligamentarias asociadas.\n:::",
          "### Tratamiento\n- Reposo relativo en fase aguda y AINES.\n- **Pilar Fundamental:** Fortalecimiento del **músculo cuádriceps** (especialmente el vasto medial) para centrar la rótula y mejorar la mecánica articular.",
          "---"
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Lesiones de Tobillo y Pie",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": null,
    "treatmentTable": null,
    "vignette": ":::important\n3.01.1.001 | Lesiones de rodilla (Meniscales y Ligamentosas) | Dx: Específico | Tx: Inicial/Completo | Seg: Derivar/Completo\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Lesiones de Tobillo y Pie: Fracturas Maleolares, Reglas de Ottawa & Rotura del Tendón de Aquiles. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Lesiones de Tobillo y Pie, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un paciente se tuerce el tobillo y llega a urgencias con dolor, equimosis y dificultad para apoyar el pie. ¿Cuál es la conducta inicial?",
        "options": [
          {
            "id": "A",
            "text": "Inmovilizar con yeso y dar de alta sin radiografía porque es clínica de esguince"
          },
          {
            "id": "B",
            "text": "Solicitar radiografía de tobillo para descartar fractura"
          },
          {
            "id": "C",
            "text": "Diagnóstico de esguince; RICE más bota removible sin radiografía"
          },
          {
            "id": "D",
            "text": "TAC de tobillo como primera imagen para ver los ligamentos"
          },
          {
            "id": "E",
            "text": "RMN de tobillo para evaluar los ligamentos laterales"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: Toda lesión de tobillo requiere radiografía para descartar fractura antes del alta. La dificultad para apoyar además orienta a fractura. Opción B: Ante toda lesión de tobillo se pide radiografía siempre para descartar fractura. La imposibilidad de apoyar es un signo que orienta a fractura. El diagnóstico de esguince se hace solo cuando la radiografía es normal. Opción C: El diagnóstico de esguince requiere que la radiografía sea normal. No se puede diagnosticar esguince sin descartar primero una fractura con radiografía. Opción D: El TAC no es el examen inicial en lesiones de tobillo. La radiografía simple es suficiente para descartar fractura. Opción E: La RMN puede evaluar los ligamentos pero no es el examen inicial. Primero se descarta fractura con radiografía simple.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.021"
      },
      {
        "stem": "Un paciente con fractura de tobillo confirmada en la radiografía. ¿Cuál es el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "RICE más bota removible por cuatro semanas"
          },
          {
            "id": "B",
            "text": "Yeso de pierna por seis semanas"
          },
          {
            "id": "C",
            "text": "Cirugía con reducción y osteosíntesis"
          },
          {
            "id": "D",
            "text": "Observación ambulatoria y control en una semana"
          },
          {
            "id": "E",
            "text": "Inmovilización con bota de yeso y evaluar en dos semanas"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: El RICE con bota es el tratamiento del esguince de tobillo, no de la fractura de tobillo. Las fracturas de tobillo se tratan quirúrgicamente. Opción B: El yeso es tratamiento ortopédico pero por regla general las fracturas de tobillo requieren tratamiento quirúrgico. Opción C: Las fracturas de fémur, pierna y tobillo se tratan quirúrgicamente por regla general. La cirugía permite la reducción y fijación adecuada y permite al paciente apoyar antes. Opción D: Una fractura de tobillo confirmada no se puede observar sin tratamiento. El tratamiento es quirúrgico por regla general. Opción E: La fractura de tobillo requiere cirugía. La inmovilización solo puede ser parte del manejo perioperatorio, no el tratamiento definitivo.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.021"
      }
    ]
  },
  {
    "id": "trauma-09",
    "classId": "trauma-09",
    "tier": 3,
    "blockNum": 3,
    "blockName": "Extremidad Superior, Inferior & Cadera",
    "topicLabel": "12.9",
    "title": "Fracturas de Cadera en el Adulto Mayor: Cuello Femoral vs Transtrocantérica & Protocolo Quirúrgico GES < 48 h",
    "perfilCode": "4.02.2.004",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES): Tratamiento Quirúrgico de la Fractura de Cadera en mayores de 65 años.",
    "reconstrucciones": "EUNACOM Diciembre 2023 (Q#03) · EUNACOM Julio 2022 (Q#47) · EUNACOM Enero 2020 (Q#12)",
    "frecuencia": "Muy Alta en EUNACOM · Deformidad en acortamiento y rotación externa; cirugía <48 horas para sobrevida",
    "diagram": flowTrauma('Fracturas de Cadera en el Adulto Mayor: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Fracturas de Cadera en el Adulto Mayor (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Fracturas de Cadera en el Adulto Mayor: Cuello Femoral vs Transtrocantérica & Protocolo Quirúrgico GES < 48 h es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Fracturas de Cadera en el Adulto Mayor",
        "paragraphs": [
          ":::important\n**Perfil EUNACOM**\n*   **Lesiones de partes blandas:** Dx: Específico | Tx: Inicial | Seg: Derivar/Completo (según gravedad).\n*   **Rotura de tendón de Aquiles:** Dx: Específico | Tx: Inicial | Seg: Derivar (Urgencia quirúrgica).\n:::",
          "Las **lesiones de partes blandas** constituyen uno de los motivos de consulta más frecuentes en los servicios de urgencia y atención primaria. A diferencia de las [[Fracturas: Generalidades]], estas afectan estructuras como músculos, ligamentos, tendones y tejido celular subcutáneo.",
          "## Contusiones",
          "Una **contusión** es una lesión producida por un traumatismo directo (golpe) sobre las partes blandas, sin llegar a romper la continuidad de la piel.",
          "-   **Clínica:** Dolor local, aumento de volumen y aparición de **equimosis** (sangrado superficial).\n-   **Diagnóstico:** Es eminentemente clínico. El punto clave es la ausencia de signos de fractura.\n-   **Estudio:** Se solicita **radiografía** principalmente para descartar lesiones óseas si el mecanismo fue de alta energía o el dolor es muy invalidante. \n-   **Tratamiento:** \n    1.  Manejo del dolor con **AINES**.\n    2.  Crioterapia (frío local) en las primeras 48 horas, luego calor local.\n    3.  Reposo relativo. El pronóstico suele ser excelente en pocos días.",
          ":::warning\nDesde el punto de vista médico-legal, una contusión simple es una lesión leve, pero si se asocia a una fractura, el cuadro pasa inmediatamente a ser una lesión grave.\n:::"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "## Hematomas",
          "Un **hematoma** es una colección de sangre en un espacio anatómico o dentro de un tejido, secundario a un traumatismo o un desgarro.",
          "-   **Clínica:** Aumento de volumen fluctuante, dolor y, en ocasiones, coloración violácea de la piel si la sangre se desplaza al tejido subcutáneo.\n-   **Diagnóstico:** Clínico, apoyado por **ecografía** para diferenciar entre una inflamación difusa y una colección líquida organizada.\n-   **Tratamiento:** \n    -   La mayoría son de manejo conservador (frío, calor, AINES).\n    -   **Cirugía de drenaje:** Indicada si el hematoma es muy grande, extremadamente doloroso o si presenta signos de **infección secundaria** (calor, rubor, fiebre).",
          "## Esguinces",
          "El **esguince** es la lesión de los **ligamentos** (estructuras que unen hueso con hueso) tras un movimiento que supera los límites fisiológicos de la articulación.",
          "### Clasificación de los Esguinces"
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "Es una distensión de la bursa asociada a la articulación de la rodilla, que se llena de **líquido sinovial**, formando una tumoración en la **fosa poplítea**.",
          "-   **Clínica:** Aumento de volumen palpable y visible en la parte posterior de la rodilla. Suele ser asintomático a menos que crezca mucho o se rompa.\n-   **Rotura del Quiste de Baker:** Cuando se rompe, el líquido se desplaza hacia la pantorrilla, causando dolor agudo, edema y aumento de volumen.",
          ":::tip\nEl quiste de Baker roto es un gran simulador de la [[Trombosis Venosa Profunda]] (TVP). La clave diagnóstica es el antecedente de una masa previa en la zona poplítea.\n:::",
          "-   **Tratamiento:** Observación y analgesia. Solo se punciona si es gigante y genera mucha molestia. La cirugía es excepcional.",
          "## Rotura del Tendón de Aquiles",
          "Es una lesión grave, generalmente de etiología **degenerativa**, que afecta con mayor frecuencia a adultos de mediana edad que realizan actividad física esporádica."
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Fracturas de Cadera en el Adulto Mayor",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": {
      "title": "Estratificación de Severidad y Factores de Alto Riesgo en Fracturas de Cadera en el Adulto Mayor",
      "headers": [
        "Nivel de Severidad",
        "Hallazgos Clínicos Cardinales",
        "Riesgo / Complicación Mayor",
        "Conducta Inmediata"
      ],
      "rows": [
        [
          "Leve / No Desplazada",
          "Deformidad mínima, pulsos distales presentes y simétricos",
          "Consolidación viciosa si no se inmoviliza",
          "Inmovilización con valva de yeso y control"
        ],
        [
          "Moderada / Desplazada",
          "Deformidad marcada, impotencia funcional, hematoma",
          "Lesión de partes blandas, atrapamiento",
          "Reducción cerrada bajo analgesia / tracción"
        ],
        [
          "Grave / Inestable o Expuesta",
          "Pérdida de pulsos, alteración sensitiva, exposición ósea",
          "Necrosis avascular, shock, pérdida de extremidad",
          "Pabellón quirúrgico urgente, fijación y aseo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado y Fármacos en Fracturas de Cadera en el Adulto Mayor",
      "headers": [
        "Fase Terapéutica",
        "Intervención Primaria",
        "Fármacos / Posología",
        "Objetivo Clínico"
      ],
      "rows": [
        [
          "Urgencia Inicial",
          "Alineación anatómica e inmovilización provisoria",
          "Analgesia EV (Ketoprofeno 100mg / Tramadol 50-100mg)",
          "Alivio del dolor y prevención de daño secundario"
        ],
        [
          "Protección Cutánea",
          "Aseo de heridas, apósitos estériles y férula",
          "Cefazolina 2g EV + profilaxis antitetánica si expuesta",
          "Prevención de infección osteoarticular profunda"
        ],
        [
          "Resolución Definitiva",
          "Osteosíntesis interna (placas/tornillos/clavos) o prótesis",
          "Tromboprofilaxis con HBPM (Enoxaparina 40mg/d SC)",
          "Movilización precoz y consolidación ósea anatómica"
        ]
      ]
    },
    "vignette": ":::important\n**Perfil EUNACOM**\n*   **Lesiones de partes blandas:** Dx: Específico | Tx: Inicial | Seg: Derivar/Completo (según gravedad).\n*   **Rotura de tendón de Aquiles:** Dx: Específico | Tx: Inicial | Seg: Derivar (Urgencia quirúrgica).\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Fracturas de Cadera en el Adulto Mayor: Cuello Femoral vs Transtrocantérica & Protocolo Quirúrgico GES < 48 h. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Fracturas de Cadera en el Adulto Mayor, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un adulto mayor de setenta años con osteoporosis sufre una caída y no puede caminar. Al examen presenta abducción, rotación externa y acortamiento de la extremidad derecha. ¿Cuál es el diagnóstico y el estudio inicial?",
        "options": [
          {
            "id": "A",
            "text": "Luxación posterior de cadera; TAC de cadera"
          },
          {
            "id": "B",
            "text": "Fractura de cadera; radiografía anteroposterior de cadera y pelvis"
          },
          {
            "id": "C",
            "text": "Fractura de cadera; resonancia magnética de cadera"
          },
          {
            "id": "D",
            "text": "Fractura de fémur; radiografía de fémur en dos proyecciones"
          },
          {
            "id": "E",
            "text": "Coxartrosis aguda; radiografía de pelvis"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: La luxación posterior produce posición púdica con aducción y rotación interna, no la posición impúdica con abducción y rotación externa. El estudio inicial es radiografía, no TAC. Opción B: La posición impúdica con abducción, rotación externa y acortamiento es el signo clásico de fractura de cadera. El diagnóstico se hace con radiografía AP y axial de cadera más AP de pelvis. Opción C: La fractura de cadera se diagnostica con radiografía, no con resonancia magnética. La resonancia es para lesiones de partes blandas como meniscos y ligamentos. Opción D: La posición impúdica con abducción y rotación externa localiza la lesión en la cadera, no en la diáfisis femoral. La radiografía de cadera es el estudio inicial. Opción E: La coxartrosis no produce la posición impúdica ni la incapacidad súbita de caminar tras una caída. El antecedente de caída más la posición impúdica orienta claramente a fractura de cadera.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.02.2.004"
      },
      {
        "stem": "Un paciente de setenta y dos años tiene una fractura de cuello femoral desplazada. ¿Cuál es el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "DHS o tornillo dinámico de cadera"
          },
          {
            "id": "B",
            "text": "Prótesis de cadera"
          },
          {
            "id": "C",
            "text": "Tornillo canulado y observar si hace necrosis"
          },
          {
            "id": "D",
            "text": "Cirugía de Girdlestone"
          },
          {
            "id": "E",
            "text": "Inmovilización y manejo conservador por la edad"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El DHS se usa en las fracturas intertrocantéricas. En la fractura de cuello femoral desplazada en mayor de sesenta y cinco años, la indicación es prótesis de cadera. Opción B: Fractura de cuello femoral más desplazada más mayor de sesenta y cinco años son las tres condiciones para indicar prótesis. El riesgo de necrosis avascular es muy alto y se prefiere prótesis desde el inicio. Opción C: El tornillo canulado se usa en fractura de cuello en menores de sesenta y cinco años o no desplazada. En mayor de sesenta y cinco años con fractura desplazada, el riesgo de necrosis es tan alto que se prefiere prótesis de entrada. Opción D: La cirugía de Girdlestone retira la cabeza femoral y se indica en pacientes postrados, no en pacientes que caminan. Un paciente de setenta y dos años que camina merece prótesis. Opción E: La fractura de cadera siempre requiere tratamiento quirúrgico independientemente de la edad. El manejo conservador en una fractura de cadera tiene mortalidad muy alta por complicaciones del reposo.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.02.2.004"
      },
      {
        "stem": "Un copiloto tiene un accidente de tránsito frontal con golpe del tablero en la rodilla. Presenta imposibilidad de caminar con aducción y rotación interna de la cadera derecha. ¿Cuál es el diagnóstico y el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "Fractura de cadera; osteosíntesis quirúrgica"
          },
          {
            "id": "B",
            "text": "Luxación posterior de cadera; reducción cerrada bajo anestesia"
          },
          {
            "id": "C",
            "text": "Fractura de fémur; radiografía y cirugía"
          },
          {
            "id": "D",
            "text": "Luxación posterior de cadera; cirugía abierta de urgencia"
          },
          {
            "id": "E",
            "text": "Luxación anterior de cadera; reducción cerrada"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: La fractura de cadera tiene posición impúdica con abducción y rotación externa. Este paciente tiene aducción y rotación interna que corresponde a la posición púdica de la luxación posterior. Opción B: El mecanismo de golpe del tablero en la rodilla del copiloto empuja la cadera hacia atrás produciendo luxación posterior. La posición púdica con aducción y rotación interna lo confirma. El tratamiento es reducción cerrada bajo anestesia. Opción C: La fractura de fémur produce dolor en el muslo con crepitación. El mecanismo de tablero en rodilla con la posición púdica es característico de luxación posterior de cadera. Opción D: El diagnóstico de luxación posterior de cadera es correcto, pero el tratamiento es reducción cerrada bajo anestesia, no cirugía abierta. Opción E: La luxación anterior produce posición impúdica con abducción y rotación externa. El mecanismo de tablero en rodilla del copiloto produce luxación posterior con posición púdica.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.02.2.004"
      },
      {
        "stem": "En el contexto del manejo de Fracturas de Cadera en el Adulto Mayor: Cuello Femoral vs Transtrocantérica & Protocolo Quirúrgico GES < 48 h, ¿cuál de las siguientes afirmaciones respecto al diagnóstico y tratamiento representa la conducta correcta de acuerdo a las guías de práctica clínica?",
        "options": [
          {
            "id": "A",
            "text": "Se debe realizar inmovilización adecuada, evaluación neurovascular distal y derivación prioritaria."
          },
          {
            "id": "B",
            "text": "Está indicada la movilización precoz forzada sin inmovilización previa."
          },
          {
            "id": "C",
            "text": "Se debe diferir el estudio radiológico hasta que ceda completamente el edema de partes blandas."
          },
          {
            "id": "D",
            "text": "El tratamiento farmacológico exclusivo con reposo absoluto sustituye a la reducción en fracturas desplazadas."
          },
          {
            "id": "E",
            "text": "La infiltración intraarticular con corticoides es la primera línea terapéutica en casos agudos traumáticos."
          }
        ],
        "correcta": "A",
        "explicacion": "La opción correcta es la A. En Fracturas de Cadera en el Adulto Mayor: Cuello Femoral vs Transtrocantérica & Protocolo Quirúrgico GES < 48 h, la evaluación neurovascular distal previa y posterior a cualquier inmovilización o reducción es una regla de oro obligatoria.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.02.2.004"
      }
    ]
  },
  {
    "id": "trauma-10",
    "classId": "trauma-10",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Extremidad Superior, Inferior & Cadera",
    "topicLabel": "12.10",
    "title": "Lesiones Ligamentosas y Meniscales de Rodilla: LCA (Lachman), Meniscos (McMurray) & Hemartrosis Aguda",
    "perfilCode": "8.01.1.003",
    "dx": "Específico",
    "tx": "Inicial y Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Semiología de estabilidad de rodilla en el servicio de urgencia.",
    "reconstrucciones": "EUNACOM Julio 2023 (Q#50) · EUNACOM Enero 2022 (Q#89)",
    "frecuencia": "Alta en EUNACOM · Hemartrosis a tensión inmediata = 70% rotura de ligamento cruzado anterior",
    "diagram": flowTrauma('Lesiones Ligamentosas y Meniscales de Rodilla: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Lesiones Ligamentosas y Meniscales de Rodilla (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Lesiones Ligamentosas y Meniscales de Rodilla: LCA (Lachman), Meniscos (McMurray) & Hemartrosis Aguda es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Lesiones Ligamentosas y Meniscales de Rodilla",
        "paragraphs": [
          ":::important\n8.01.1.003 | Fractura de cadera | Dx: Específico | Tx: Inicial | Seg: Completo\n:::",
          "La **fractura de cadera** es una patología crítica en la práctica clínica, situada en la intersección de la traumatología y la geriatría. Representa una de las principales causas de morbimortalidad en el adulto mayor; se estima que la mortalidad a los dos años de ocurrida la fractura alcanza el **50%**. Por ello, su enfoque no solo es quirúrgico, sino también preventivo y rehabilitador.",
          "## Epidemiología y Factores de Riesgo",
          "La fractura de cadera es considerada una **fractura osteoporótica** por excelencia.",
          "- **En adultos mayores:** El mecanismo habitual es un trauma de baja energía, como una **caída de propia altura** (tropiezo o resbalón) sobre el costado del cuerpo. El sustrato fisiopatológico es la [[Osteoporosis]].\n- **En pacientes jóvenes:** Se requiere un trauma de **muy alto impacto** (accidentes de tránsito, caídas de gran altura) para fracturar el fémur proximal.",
          "## Clínica y Examen Físico"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          ":::tip\n**Mnemotecnia:** Para recordar la **Posición Impúdica** de la fractura, piensa que el paciente \"no tiene pudor\" y muestra la zona inguinal al rotar la pierna hacia afuera. En cambio, la **Luxación Posterior** tiene posición **Púdica** (aducción y rotación interna, como \"escondiéndose\").\n:::",
          "## Diagnóstico por Imágenes",
          "El estudio debe ser sistemático para clasificar la fractura y planificar la cirugía:",
          "- **Radiografía de Pelvis AP:** Permite comparar ambas caderas y descartar fracturas asociadas en el lado contralateral.\n- **Radiografía de Cadera AP y Axial:** Son las proyecciones específicas para evaluar el rasgo de fractura en el fémur proximal.",
          "## Clasificación y Manejo Quirúrgico",
          "El tratamiento de la fractura de cadera es **siempre quirúrgico**, salvo en casos de riesgo vital inminente que contraindique la anestesia."
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "### Criterios para indicar Prótesis de entrada\nSe prefiere la prótesis (reemplazo articular) en lugar de fijar el hueso cuando se cumplen simultáneamente estas tres condiciones:\n1. Fractura de **cuello femoral** (intracapsular).\n2. Fractura **desplazada**.\n3. Paciente **mayor de 65 años**.",
          ":::note\n**Fisiopatología de la Necrosis:** La irrigación de la cabeza femoral depende principalmente de las arterias circunflejas que rodean el cuello. Una fractura de cuello desplazada rompe estos vasos, provocando una **necrosis avascular de la cabeza femoral**, la complicación más frecuente y grave de este tipo de fracturas.\n:::",
          "### Procedimiento de Girdlestone\nEs una cirugía de salvataje o paliativa para pacientes **postrados crónicos**. \n- **En qué consiste:** Se retira la cabeza femoral y se descarta, dejando al paciente sin articulación (\"cadera flotante\").\n- **Objetivo:** Eliminar el dolor causado por el roce de los fragmentos óseos para evitar complicaciones como el [[Delirium]] o infecciones, sin la necesidad de implantes caros en alguien que ya no camina.",
          "## Diagnóstico Diferencial: Luxación Posterior de Cadera",
          "Es fundamental no confundirla con la fractura, aunque el cuadro clínico tiene diferencias marcadas.",
          "- **Mecanismo:** Típicamente el \"accidente del copiloto\" (impacto de la rodilla contra el tablero del auto) o caídas de altura.\n- **Clínica (Posición Púdica):**\n    - **Aducción** (pierna hacia adentro).\n    - **Rotación interna**.\n    - **Acortamiento**.\n- **Complicación asociada:** Alta frecuencia de lesión del **nervio ciático** (siempre evaluar sensibilidad y motilidad distal).\n- **Tratamiento:** Reducción cerrada bajo anestesia en pabellón, seguida de inmovilización."
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Lesiones Ligamentosas y Meniscales de Rodilla",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": null,
    "treatmentTable": null,
    "vignette": ":::important\n8.01.1.003 | Fractura de cadera | Dx: Específico | Tx: Inicial | Seg: Completo\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Lesiones Ligamentosas y Meniscales de Rodilla: LCA (Lachman), Meniscos (McMurray) & Hemartrosis Aguda. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Lesiones Ligamentosas y Meniscales de Rodilla, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un paciente relata que al caminar siente que su rodilla se queda atascada y le duele. Al examen con la maniobra de Apley, le duele al rotar en rotación externa. ¿Cuál es el diagnóstico y el examen de elección?",
        "options": [
          {
            "id": "A",
            "text": "Lesión del menisco externo; radiografía de rodilla"
          },
          {
            "id": "B",
            "text": "Lesión del menisco interno; resonancia magnética nuclear"
          },
          {
            "id": "C",
            "text": "Rotura del ligamento cruzado anterior; resonancia magnética"
          },
          {
            "id": "D",
            "text": "Lesión del menisco interno; radiografía de rodilla en dos proyecciones"
          },
          {
            "id": "E",
            "text": "Disfunción patelofemoral; solo reposo y AINEs"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: Si duele a la rotación externa es el menisco interno el afectado. Además la radiografía no diagnostica lesiones meniscales porque son tejido blando. Opción B: Con la maniobra de Apley el talón apunta al menisco afectado: si duele a la rotación externa está lesionado el menisco interno. El diagnóstico se confirma con resonancia magnética nuclear. Opción C: La rotura del ligamento cruzado anterior produce inestabilidad y cajón anterior, no bloqueo articular. El bloqueo articular es característico de lesión meniscal. Opción D: El diagnóstico de menisco interno es correcto según la maniobra de Apley, pero la radiografía no ve los meniscos. El examen de elección es la resonancia magnética. Opción E: La disfunción patelofemoral produce dolor anterior de rodilla con actividad sin bloqueo articular. El bloqueo articular orienta a lesión meniscal.",
        "recTag": "Banco Oficial AEE · Perfil V3 8.01.1.003"
      },
      {
        "stem": "Un futbolista sufre un mecanismo de hiperextensión de rodilla y presenta inestabilidad y cajón anterior positivo. ¿Cuál es el diagnóstico y el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "Rotura del ligamento cruzado posterior; tratamiento conservador"
          },
          {
            "id": "B",
            "text": "Rotura del ligamento cruzado anterior; cirugía artroscópica"
          },
          {
            "id": "C",
            "text": "Rotura del ligamento cruzado anterior; tratamiento conservador con reposo y AINEs"
          },
          {
            "id": "D",
            "text": "Lesión de menisco interno; maniobra de Apley para confirmar"
          },
          {
            "id": "E",
            "text": "Esguince de ligamento colateral lateral; inmovilizador de rodilla"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El cajón anterior es signo de rotura del ligamento cruzado anterior, no del posterior. El cajón posterior indica lesión del cruzado posterior. Opción B: El cajón anterior es el signo de rotura del ligamento cruzado anterior. La rotura del cruzado anterior siempre se opera artroscópicamente porque de lo contrario queda con inestabilidad permanente. Opción C: La rotura del ligamento cruzado anterior no se trata conservadoramente porque queda con demasiada inestabilidad. Siempre se opera artroscópicamente. Opción D: La lesión de menisco produce bloqueo articular, no inestabilidad con cajón anterior. El cajón anterior es específico de rotura del ligamento cruzado anterior. Opción E: El esguince colateral lateral produce signo de bostezo hacia lateral por varo forzado, no cajón anterior. El cajón anterior es específico del cruzado anterior.",
        "recTag": "Banco Oficial AEE · Perfil V3 8.01.1.003"
      }
    ]
  },
  {
    "id": "trauma-11",
    "classId": "trauma-11",
    "tier": 2,
    "blockNum": 3,
    "blockName": "Extremidad Superior, Inferior & Cadera",
    "topicLabel": "12.11",
    "title": "Lesiones de Partes Blandas, Artrosis & Patología Degenerativa Articular (Coxartrosis / Gonartrosis GES)",
    "perfilCode": "1.01.1.021",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Garantía Explícita en Salud (GES): Tratamiento Médico en personas de 55 años y más con Artrosis de Cadera o Rodilla.",
    "reconstrucciones": "EUNACOM Diciembre 2022 (Q#76) · EUNACOM Enero 2020 (Q#34)",
    "frecuencia": "Alta en EUNACOM · Criterios radiológicos de artrosis y escalonamiento de paracetamol/ejercicio a prótesis",
    "diagram": flowTrauma('Lesiones de Partes Blandas, Artrosis & PatologÃ­a Degenerativa Articular (Coxartrosis / Gonartrosis GES): Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Lesiones de Partes Blandas, Artrosis & PatologÃ­a Degenerativa Articular (Coxartrosis / Gonartrosis GES) (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Lesiones de Partes Blandas, Artrosis & Patología Degenerativa Articular (Coxartrosis / Gonartrosis GES) es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Lesiones de Partes Blandas, Artrosis & Patología Degenerativa Articular (Coxartrosis / Gonartrosis GES)",
        "paragraphs": [
          ":::important\nEUNACOM Perfil: Aunque no se encuentra en el listado proporcionado, estas patologías se evalúan generalmente como: Dx: Específico | Tx: Inicial | Seg: Completo/Derivar. Son temas de alta frecuencia en la sección de Reumatología y Medicina Familiar.\n:::",
          "Las patologías osteomusculares no traumáticas representan una de las causas más frecuentes de consulta en atención primaria. Como médico general, el objetivo es diferenciar cuadros mecánicos de inflamatorios, identificar signos de alarma y manejar el tratamiento inicial de forma efectiva.",
          "## Lumbago y Lumbociática",
          "El **lumbago** se define simplemente como dolor en la zona lumbar. La causa más frecuente es el **lumbago mecánico**, secundario a debilidad de la musculatura axial (lumbar y abdominal), lo que genera posiciones viciosas e irritación de estructuras articulares o musculares.",
          "### Características Clínicas\n- **Lumbago Mecánico:** Aumenta con el movimiento y disminuye con el reposo.\n- **Lumbago Inflamatorio:** Aumenta con el reposo y disminuye con el ejercicio (sugiere [[Espondiloartritis]]).\n- **Lumbociática:** Dolor lumbar irradiado a las extremidades inferiores. El manejo inicial es idéntico al lumbago simple.",
          "### Manejo Inicial\nEl tratamiento se basa en tres pilares:\n1. **Reposo relativo:** Evitar el reposo en cama prolongado; se prefiere mantener actividad según tolerancia.\n2. **AINEs:** Manejo analgésico de primera línea.\n3. **Kinesioterapia:** No se realiza en la fase aguda. Se inicia cuando el dolor ha cedido para fortalecer la musculatura y prevenir recurrencias."
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "---",
          "## Hombro Doloroso",
          "La causa más común es el **Síndrome de Manguito Rotador**.",
          "- **Clínica:** Dolor que aumenta con movimientos repetitivos, más intenso en la noche. Duele especialmente a la abducción y extensión contra resistencia.\n- **Diagnóstico:** Clínico. El examen de elección para objetivar la inflamación es la **Ecografía** (más costo-efectiva que la RM).\n- **Tratamiento:** Reposo, AINEs y kinesioterapia motora.",
          "### Capsulitis Adhesiva (Hombro Congelado)\nEs una inflamación de la cápsula articular que lleva a una restricción severa del movimiento.\n- **Clínica:** Dolor que impide la movilidad **tanto activa como pasiva**. Evoluciona de una fase dolorosa a una fase de anquilosis (rigidez sin dolor).\n- **Tratamiento:** A diferencia del manguito rotador, aquí se utilizan **corticoides** (sistémicos o infiltración) y kinesioterapia intensiva.",
          "---"
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "## Tendinitis y Bursitis",
          "### Tendinitis Específicas\nSe caracterizan por dolor a la palpación y al estiramiento del tendón involucrado.",
          "- **Pata de Ganso:** Dolor en la zona anteromedial e inferior de la rodilla. Común en montañismo/trekking.\n- **Rotuliana:** Dolor en la tuberosidad tibial. Incluye la enfermedad de **Osgood-Schlatter** en adolescentes.\n- **Fascia Lata (Síndrome de la Banda Iliotibial):** Dolor en la cara lateral de la rodilla. Típico de corredores (**\"rodilla del maratonista\"**).\n- **De Quervain:** Dolor en la zona lateral de la muñeca (extensor corto y abductor largo del pulgar).",
          "### Bursitis\nInflamación de la bursa (saco sinovial extraarticular). A diferencia de la tendinitis, suele presentar **eritema y aumento de volumen visible**.",
          "- **Bursitis Olecraniana:** Aumento de volumen en la punta del codo.\n- **Bursitis Pertrocantérica:** Dolor sobre el trocánter mayor del fémur.\n- **Tratamiento:** AINEs, frío local y, en casos refractarios, corticoides.",
          ":::note\nPara diferenciar una **Bursitis** de una **Artritis Séptica**: En la bursitis, la inflamación es superficial y externa a la articulación; en la artritis, hay derrame articular profundo y limitación dolorosa de todo el rango de movimiento.\n:::"
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Lesiones de Partes Blandas, Artrosis & Patología Degenerativa Articular (Coxartrosis / Gonartrosis GES)",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": null,
    "treatmentTable": null,
    "vignette": ":::important\nEUNACOM Perfil: Aunque no se encuentra en el listado proporcionado, estas patologías se evalúan generalmente como: Dx: Específico | Tx: Inicial | Seg: Completo/Derivar. Son temas de alta frecuencia en la sección de Reumatología y Medicina Familiar.\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Lesiones de Partes Blandas, Artrosis & Patología Degenerativa Articular (Coxartrosis / Gonartrosis GES). El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Lesiones de Partes Blandas, Artrosis & Patología Degenerativa Articular (Coxartrosis / Gonartrosis GES), la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Hombre de sesenta y cinco años consulta por dolor en la rodilla derecha de seis meses de evolución que empeora al caminar y mejora con el reposo. La radiografía de rodilla muestra disminución del espacio articular, osteofitos marginales y esclerosis subcondral. Hasta ahora no ha recibido tratamiento. ¿Cuál es el primer escalón terapéutico indicado?",
        "options": [
          {
            "id": "A",
            "text": "Corticoides intrarticulares de rodilla derecha"
          },
          {
            "id": "B",
            "text": "Reemplazo articular de rodilla derecha"
          },
          {
            "id": "C",
            "text": "Paracetamol un gramo cada ocho horas más ejercicios de fortalecimiento de cuádriceps"
          },
          {
            "id": "D",
            "text": "Ibuprofeno más omeprazol como tratamiento de inicio"
          },
          {
            "id": "E",
            "text": "Tramadol oral por su mayor eficacia analgésica"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: Los corticoides intrarticulares corresponden a una etapa avanzada del tratamiento escalonado de la artrosis, cuando han fallado el paracetamol, los AINE y los opiáceos. No son el primer escalón. Opción B: La cirugía con prótesis articular es la última línea de tratamiento en la artrosis, reservada para cuando todos los tratamientos médicos han fracasado. No es el manejo inicial. Opción C: El primer escalón del tratamiento de la artrosis es el paracetamol en dosis altas, habitualmente un gramo cada ocho horas, combinado con ejercicio de fortalecimiento muscular, especialmente del cuádriceps para la artrosis de rodilla. Está demostrado que disminuye el dolor. Opción D: Los AINE como el ibuprofeno corresponden al segundo escalón terapéutico, cuando el paracetamol más el ejercicio no han logrado controlar el dolor. No son el tratamiento inicial. Opción E: El tramadol, un opioide débil, es el tercer escalón en el tratamiento de la artrosis, indicado solo cuando el paracetamol y los AINE han fallado. Comenzar con opioides sería saltarse dos escalones del tratamiento.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.021"
      },
      {
        "stem": "Mujer de cincuenta y ocho años con insuficiencia renal crónica estadio tres y úlcera duodenal activa consulta por artrosis de cadera con dolor que no cede con paracetamol. ¿Cuál es el siguiente paso correcto en el manejo?",
        "options": [
          {
            "id": "A",
            "text": "Agregar ibuprofeno más omeprazol como protección gástrica"
          },
          {
            "id": "B",
            "text": "Agregar celecoxib, ya que los COX-2 no producen úlcera"
          },
          {
            "id": "C",
            "text": "Tramadol oral, saltando el escalón de los AINE por contraindicación"
          },
          {
            "id": "D",
            "text": "Corticoides orales en dosis bajas como antiinflamatorio alternativo"
          },
          {
            "id": "E",
            "text": "Derivar directamente a cirugía por la complejidad del caso"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: Los AINE están contraindicados en esta paciente por la úlcera duodenal activa y la insuficiencia renal crónica. Aunque se agregue omeprazol, el riesgo renal persiste y es una contraindicación formal. Opción B: Si bien los inhibidores COX-2 tienen menor riesgo gastrointestinal, siguen estando contraindicados en insuficiencia renal crónica porque pueden deteriorar la función renal. En esta paciente se deben evitar todos los AINE. Opción C: Cuando los AINE están contraindicados, ya sea por úlcera péptica activa o insuficiencia renal crónica, el protocolo indica saltar ese escalón y pasar directamente del paracetamol al tramadol. Esta es una pregunta clásica del EUNACOM sobre el tratamiento escalonado de la artrosis. Opción D: Los corticoides orales no forman parte del tratamiento escalonado de la artrosis. Los corticoides que pueden indicarse son los intrarticulares, y solo cuando han fallado el paracetamol, AINE y opiáceos. Opción E: La cirugía es la última línea del tratamiento de la artrosis. Aún no se han agotado las opciones médicas disponibles para esta paciente, como los opiáceos y los corticoides intrarticulares.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.01.1.021"
      }
    ]
  },
  {
    "id": "trauma-12",
    "classId": "trauma-12",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Ortopedia Infantil, Tumores & Columna",
    "topicLabel": "12.12",
    "title": "Traumatología Infantil: Fracturas en Tallo Verde, Epifisiolisis (Salter-Harris) & Codo de Niñera (Pronación Dolorosa)",
    "perfilCode": "1.08.1.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Maniobra de reducción de pronación dolorosa (supinación-flexión).",
    "reconstrucciones": "EUNACOM Julio 2024 (Q#88) · EUNACOM Diciembre 2021 (Q#12)",
    "frecuencia": "Muy Alta en EUNACOM · Pronación dolorosa (tracción de brazo por cuidador) y Salter-Harris II más común",
    "diagram": flowTrauma('TraumatologÃ­a Infantil: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de TraumatologÃ­a Infantil (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Traumatología Infantil: Fracturas en Tallo Verde, Epifisiolisis (Salter-Harris) & Codo de Niñera (Pronación Dolorosa) es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Traumatología Infantil",
        "paragraphs": [
          ":::important\n1.08.1.001 | Artrosis | Dx: Específico | Tx: Completo | Seg: Completo\n1.08.2.001 | Artritis Séptica | Dx: Específico | Tx: Inicial | Seg: Derivar\n1.08.1.005 | Gota y Artritis por Cristales | Dx: Específico | Tx: Completo | Seg: Completo\n:::",
          "Este artículo aborda las patologías más frecuentes de la reumatología clínica y de urgencias: la **Artrosis** (enfermedad degenerativa) y el enfrentamiento de la **Monartritis Aguda**, que incluye las artritis por cristales y la artritis séptica.",
          "## Artrosis (Osteoartritis)",
          "La artrosis es una enfermedad degenerativa caracterizada por la destrucción progresiva del **cartílago articular**. Es fundamental entender que el cartílago no tiene capacidad de regeneración.",
          "### Etiología\n- **Primaria:** Causa degenerativa idiopática con un fuerte componente genético.\n- **Secundaria:** Resulta de un daño previo en la articulación, como:\n    - Luxaciones crónicas.\n    - Fracturas con rasgo intraarticular.\n    - [[Artritis Reumatoide]].\n    - Secuelas de [[Artritis Séptica]].",
          "### Clínica\nEl síntoma cardinal es el **dolor articular**. \n- El dolor suele ser de tipo mecánico (empeora con el uso, mejora con el reposo).\n- Puede evolucionar a la **anquilosis** (rigidez total de la articulación).\n- Puede presentar derrame articular de tipo **no inflamatorio**."
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "1.  **Primera Línea:** **Paracetamol** (1g cada 8 horas) + **Ejercicio** de fortalecimiento (especialmente de cuádriceps para artrosis de rodilla).\n2.  **Segunda Línea:** **AINEs**. \n    - Inhibidores COX-1 (ej. Ibuprofeno) deben asociarse a Omeprazol para protección gástrica.\n    - Inhibidores COX-2 (ej. Celecoxib) tienen menor riesgo de úlcera.\n3.  **Tercera Línea:** Opiáceos débiles, principalmente **Tramadol**.\n4.  **Cuarta Línea:** Corticoides intraarticulares (infiltraciones).\n5.  **Quinta Línea (Quirúrgica):** Prótesis articular (reemplazo) o artrodesis (fijación, común en interfalángicas).",
          ":::tip\nEn el EUNACOM, si el paciente tiene **Insuficiencia Renal Crónica** o **Úlcera Gastroduodenal**, los AINEs están contraindicados. En ese caso, el tratamiento salta directamente del Paracetamol al Tramadol.\n:::",
          "---",
          "## Enfrentamiento de la Monartritis Aguda",
          "Ante una articulación inflamada (dolor, aumento de volumen, eritema y calor), la conducta mandatoria es realizar una **artrocentesis** (punción articular) para analizar el líquido sinovial.",
          "### Análisis del Líquido Sinovial"
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "### 2. Condrocalcinosis (Pseudogota)\nCausada por cristales de **pirofosfato de calcio**.\n- **Clínica:** Afecta frecuentemente la **rodilla**.\n- **Cristales:** Presentan **elongación positiva** (brillan de color azulado).",
          ":::tip\nLa **Podagra** es la única monartritis aguda que suele diagnosticarse clínicamente sin necesidad de punción, a menos que se sospeche infección.\n:::",
          "### Tratamiento de la Gota\n- **Crisis Aguda:** AINEs endovenosos o **Colchicina** (ojo con la diarrea como efecto adverso).\n- **Manejo Crónico (Profilaxis):** \n    - Indicado si el paciente tiene **2 o más crisis al año**.\n    - Fármacos: **Alopurinol** (inhibidor de la xantina oxidasa) o Probenecid (uricosúrico).\n    - **Metas de Ácido Úrico:** < 6 mg/dL en mujeres y < 7 mg/dL en hombres.",
          ":::warning\n**Jamás** inicie ni suspenda el Alopurinol durante una crisis aguda, ya que los cambios bruscos en los niveles de ácido úrico pueden empeorar o prolongar la inflamación.\n:::",
          "---",
          "## Artritis Séptica"
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Traumatología Infantil",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": null,
    "treatmentTable": null,
    "vignette": ":::important\n1.08.1.001 | Artrosis | Dx: Específico | Tx: Completo | Seg: Completo\n1.08.2.001 | Artritis Séptica | Dx: Específico | Tx: Inicial | Seg: Derivar\n1.08.1.005 | Gota y Artritis por Cristales | Dx: Específico | Tx: Completo | Seg: Completo\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Traumatología Infantil: Fracturas en Tallo Verde, Epifisiolisis (Salter-Harris) & Codo de Niñera (Pronación Dolorosa). El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Traumatología Infantil, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Recién nacida de dos días de vida, sexo femenino, parto en presentación podálica. En el examen físico se detecta que al flexionar y abducir la cadera se escucha un clic y la cadera luxada logra reposicionarse en el acetábulo. ¿Cuál de los siguientes describe correctamente este hallazgo?",
        "options": [
          {
            "id": "A",
            "text": "Signo de Barlow positivo: la cadera encajada se luxa al aplicar presión"
          },
          {
            "id": "B",
            "text": "Signo de Ortolani positivo: la cadera luxada se reduce al abducir"
          },
          {
            "id": "C",
            "text": "Arco de Shenton discontinuo visible en la radiografía AP de pelvis"
          },
          {
            "id": "D",
            "text": "Pie bot o pie zambo bilateral por artrogriposis neonatal"
          },
          {
            "id": "E",
            "text": "Epifisiólisis de la cabeza femoral por obesidad en el adolescente"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El signo de Barlow es el opuesto: la cadera está encajada y se puede luxar con la maniobra. En este caso la cadera estaba luxada y se logró reducir, lo que corresponde al signo de Ortolani. Opción B: El signo de Ortolani indica que la cadera viene basalmente luxada y al realizar la maniobra de abducción y flexión, el examinador logra reposicionarla o reducirla al acetábulo. Es el hallazgo clásico de displasia del desarrollo de cadera en el recién nacido. Opción C: El arco de Shenton es un hallazgo radiográfico, no un signo clínico de exploración física. El enunciado describe una maniobra clínica en el recién nacido, no un hallazgo imagenológico. Opción D: El pie zambo es una deformidad del pie, no de la cadera. El hallazgo descrito en el enunciado es específico de la displasia del desarrollo de cadera, con reducción de la articulación luxada. Opción E: La epifisiólisis ocurre en adolescentes de doce a quince años, frecuentemente obesos, no en recién nacidos. El enunciado describe claramente una patología neonatal.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.08.1.001"
      },
      {
        "stem": "Niño de siete años, previamente sano, de talla baja para su edad y que practica fútbol cuatro veces por semana. Consulta por dolor en la ingle derecha y cojera de dos semanas de evolución. La radiografía AP de pelvis muestra aplanamiento y aumento de densidad de la cabeza femoral derecha en comparación con la izquierda. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Sinovitis transitoria de cadera"
          },
          {
            "id": "B",
            "text": "Artritis séptica de cadera derecha"
          },
          {
            "id": "C",
            "text": "Epifisiólisis de la cabeza femoral derecha"
          },
          {
            "id": "D",
            "text": "Enfermedad de Perthes de cadera derecha"
          },
          {
            "id": "E",
            "text": "Displasia del desarrollo de cadera con luxación tardía"
          }
        ],
        "correcta": "D",
        "explicacion": "La opción correcta es la D. Opción A: La sinovitis transitoria afecta a niños de dos a cuatro años, presenta radiografía normal y suele asociarse a infección respiratoria viral previa. La radiografía alterada y la edad descartan este diagnóstico. Opción B: La artritis séptica cursa con fiebre, compromiso sistémico y líquido articular inflamatorio con bacterias. El enunciado no describe estos hallazgos sistémicos, y la radiografía sugiere otra entidad. Opción C: La epifisiólisis ocurre en adolescentes de doce a quince años, frecuentemente obesos. La radiografía muestra separación de la epifisis, no aplanamiento ni aumento de densidad. Este paciente tiene siete años y talla baja. Opción D: La enfermedad de Perthes es una necrosis avascular de la cabeza femoral en niños de cinco a diez años. Se asocia a talla baja y actividad física intensa. La radiografía muestra aplanamiento y aumento de densidad de la cabeza femoral, hallazgos clásicos de esta entidad. Opción E: La displasia del desarrollo de cadera se diagnostica en recién nacidos y lactantes. A los siete años con radiografía que muestra aplanamiento y esclerosis de la cabeza femoral, el diagnóstico es la enfermedad de Perthes.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.08.1.001"
      }
    ]
  },
  {
    "id": "trauma-13",
    "classId": "trauma-13",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Ortopedia Infantil, Tumores & Columna",
    "topicLabel": "12.13",
    "title": "Displasia del Desarrollo de la Cadera (DDC): Maniobras de Ortolani/Barlow, Screening Ecográfico & Correas de Pavlik GES",
    "perfilCode": "1.08.1.001",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES): Displasia del Desarrollo de la Cadera · Radiografía de pelvis a los 3 meses.",
    "reconstrucciones": "EUNACOM Diciembre 2023 (Q#22) · EUNACOM Julio 2022 (Q#09) · EUNACOM Enero 2021 (Q#64)",
    "frecuencia": "Muy Alta en EUNACOM · Screening universal GES al 3er mes (Rx pelvis) o ecografía Graf antes de 3 meses",
    "diagram": flowTrauma('Displasia del Desarrollo de la Cadera (DDC): Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Displasia del Desarrollo de la Cadera (DDC) (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Displasia del Desarrollo de la Cadera (DDC): Maniobras de Ortolani/Barlow, Screening Ecográfico & Correas de Pavlik GES es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Displasia del Desarrollo de la Cadera (DDC)",
        "paragraphs": [
          ":::important\n1.01.1.021 | Tumores Óseos (Generalidades y tipos frecuentes) | Dx: Específico | Tx: Inicial | Seg: Derivar\n:::",
          "Los tumores óseos son un tema de baja frecuencia en el EUNACOM, pero cuando aparecen, las preguntas suelen ser muy específicas sobre la **radiología**, la **edad del paciente** y la **localización anatómica**.",
          "## Generalidades y Clínica",
          "La mayoría de los tumores óseos comparten una presentación clínica similar, lo que dificulta el diagnóstico basado únicamente en los síntomas. Los tres escenarios principales son:",
          "- **Asintomáticos**: Hallazgo incidental en una radiografía solicitada por otro motivo (frecuente en tumores benignos).\n- **Dolor**: Puede ser sordo, persistente o nocturno.\n- **Fractura en hueso patológico**: El tumor debilita la cortical hasta que el hueso falla ante un traumatismo mínimo.",
          ":::tip\nPara el diagnóstico diferencial en el examen, fíjate siempre en tres factores:\n1. **Edad** del paciente.\n2. **Localización** en el hueso (Epífisis, Metáfisis o Diáfisis).\n3. **Aspecto radiológico** (Signos de benignidad vs. malignidad).\n:::"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          "| Característica | Benigno | Maligno |\n| :--- | :--- | :--- |\n| **Cortical** | Respetada o adelgazada suavemente | Disrupción / Rotura de la cortical |\n| **Partes Blandas** | No invadidas | Invasión de partes blandas |\n| **Límites** | Bien delimitados, geográficos | Mal delimitados, infiltrativos, heterogéneos |\n| **Reacción Perióstica** | Ausente o simple (sólida) | Compleja (Sol naciente, Telas de cebolla) |",
          ":::warning\nLa **reacción perióstica compleja** es un signo de alta agresividad. \n- **Sol naciente (o en sol radiante)**: Sugiere crecimiento rápido que levanta el periostio.\n- **Telas de cebolla**: Capas sucesivas de hueso reactivo, clásico del Sarcoma de Ewing.\n:::",
          "---",
          "## Tumores Óseos Benignos y Pseudo-tumorales",
          "### 1. Osteocondroma\nEs el tumor óseo benigno más frecuente.\n- **Clínica**: Pacientes jóvenes. Suele ser asintomático o presentarse como un bulto óseo indoloro (aumento de volumen).\n- **Radiografía**: Imagen polipoidea, como un \"hijo\" o \"cachito\" de hueso que crece hacia afuera de la metáfisis.\n- **Tratamiento**: Observación. Solo se opera si genera compresión mecánica o dolor por roce.",
          "### 2. Osteoma Osteoide\n- **Clínica**: Jóvenes con **dolor nocturno característico que cede con Aspirina o AINEs**.\n- **Radiografía**: Lesión radiolúcida pequeña (nidus) rodeada de un halo de esclerosis (radiopaco), ubicada típicamente en la **cortical**.\n- **Tratamiento**: AINEs para el dolor. Si es refractario o muy grande, se plantea cirugía o ablación por radiofrecuencia."
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "---",
          "## Tumores Óseos Malignos y Agresivos",
          "### 1. Osteosarcoma\nEs el tumor óseo maligno primario más común.\n- **Edad**: Distribución bimodal (Adolescentes/adultos jóvenes 15-20 años y adultos >65 años).\n- **Localización**: **Metáfisis** de huesos largos (frecuente cerca de la rodilla).\n- **Radiografía**: Aspecto francamente maligno, heterogéneo, con disrupción cortical y reacción en \"sol naciente\".\n- **Tratamiento**: Cirugía radical (a veces preservadora de extremidad) + Quimioterapia.",
          "### 2. Sarcoma de Ewing (o de Yubin)\n- **Edad**: Niños y adolescentes.\n- **Localización**: Clásicamente en la **Diáfisis** de los huesos largos o en la pelvis.\n- **Radiografía**: Reacción perióstica en **\"telas de cebolla\"**.\n- **Biopsia**: Células pequeñas, redondas y azules (aspecto similar a un linfoma).\n- **Tratamiento**: Quimioterapia (para reducir el tamaño), cirugía y a veces radioterapia. Tiene pronóstico reservado pero mejoría con tratamientos modernos.",
          "### 3. Tumor de Células Gigantes\n- **Edad**: Adultos de 40 a 50 años.\n- **Localización**: **Epífisis/Metáfisis** (típicamente fémur distal o tibia proximal, \"alrededor de la rodilla\").\n- **Comportamiento**: Es localmente muy agresivo (rompe cortical e invade partes blandas), aunque generalmente no da metástasis (benigno biológicamente, maligno radiológicamente).\n- **Tratamiento**: Cirugía (legrado/curetaje amplio).",
          "---"
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Displasia del Desarrollo de la Cadera (DDC)",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": {
      "title": "Estratificación de Severidad y Factores de Alto Riesgo en Displasia del Desarrollo de la Cadera (DDC)",
      "headers": [
        "Nivel de Severidad",
        "Hallazgos Clínicos Cardinales",
        "Riesgo / Complicación Mayor",
        "Conducta Inmediata"
      ],
      "rows": [
        [
          "Leve / No Desplazada",
          "Deformidad mínima, pulsos distales presentes y simétricos",
          "Consolidación viciosa si no se inmoviliza",
          "Inmovilización con valva de yeso y control"
        ],
        [
          "Moderada / Desplazada",
          "Deformidad marcada, impotencia funcional, hematoma",
          "Lesión de partes blandas, atrapamiento",
          "Reducción cerrada bajo analgesia / tracción"
        ],
        [
          "Grave / Inestable o Expuesta",
          "Pérdida de pulsos, alteración sensitiva, exposición ósea",
          "Necrosis avascular, shock, pérdida de extremidad",
          "Pabellón quirúrgico urgente, fijación y aseo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado y Fármacos en Displasia del Desarrollo de la Cadera (DDC)",
      "headers": [
        "Fase Terapéutica",
        "Intervención Primaria",
        "Fármacos / Posología",
        "Objetivo Clínico"
      ],
      "rows": [
        [
          "Urgencia Inicial",
          "Alineación anatómica e inmovilización provisoria",
          "Analgesia EV (Ketoprofeno 100mg / Tramadol 50-100mg)",
          "Alivio del dolor y prevención de daño secundario"
        ],
        [
          "Protección Cutánea",
          "Aseo de heridas, apósitos estériles y férula",
          "Cefazolina 2g EV + profilaxis antitetánica si expuesta",
          "Prevención de infección osteoarticular profunda"
        ],
        [
          "Resolución Definitiva",
          "Osteosíntesis interna (placas/tornillos/clavos) o prótesis",
          "Tromboprofilaxis con HBPM (Enoxaparina 40mg/d SC)",
          "Movilización precoz y consolidación ósea anatómica"
        ]
      ]
    },
    "vignette": ":::important\n1.01.1.021 | Tumores Óseos (Generalidades y tipos frecuentes) | Dx: Específico | Tx: Inicial | Seg: Derivar\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Displasia del Desarrollo de la Cadera (DDC): Maniobras de Ortolani/Barlow, Screening Ecográfico & Correas de Pavlik GES. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Displasia del Desarrollo de la Cadera (DDC), la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un deportista de cuarenta años va corriendo y siente súbitamente como una pedrada intensa en el talón. No puede caminar. La maniobra de Thompson está alterada. ¿Cuál es el diagnóstico y el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "Esguince de tobillo grado tres; inmovilización con bota removible"
          },
          {
            "id": "B",
            "text": "Rotura del tendón de Aquiles; cirugía urgente"
          },
          {
            "id": "C",
            "text": "Rotura del tendón de Aquiles; inmovilización con yeso"
          },
          {
            "id": "D",
            "text": "Fractura de calcáneo; radiografía de pie"
          },
          {
            "id": "E",
            "text": "Desgarro muscular de gemelos; RICE y AINEs"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El esguince de tobillo se produce por inversión o eversión y afecta los ligamentos laterales, no produce el síntoma del piedrazo ni altera la maniobra de Thompson. Opción B: El síntoma del piedrazo con dolor súbito muy intenso en el talón al correr más la maniobra de Thompson alterada son el cuadro clásico de rotura del tendón de Aquiles. Requiere cirugía urgente antes de que los gastrocnemios se retraigan. Opción C: La rotura del tendón de Aquiles requiere cirugía urgente, no solo inmovilización. Si se demora en operar los gastrocnemios se retraen y es difícil unir los extremos. Opción D: La fractura de calcáneo tiene mecanismo de caída de altura aterrizando en el pie, no el síntoma del piedrazo al correr. La maniobra de Thompson alterada orienta a rotura del tendón de Aquiles. Opción E: El desgarro muscular de gemelos no produce la maniobra de Thompson alterada ni el síntoma del piedrazo en el talón. La maniobra de Thompson alterada es específica de rotura del tendón de Aquiles.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.08.1.001"
      },
      {
        "stem": "Un paciente tiene dolor y edema en la pantorrilla izquierda. Refiere que desde hace varios meses tenía un bulto indoloro en la zona posterior de la rodilla que ahora desapareció. ¿Cuál es el diagnóstico y el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "TVP; ecodoppler y anticoagulación urgente"
          },
          {
            "id": "B",
            "text": "Quiste de Baker roto; analgesia con AINEs"
          },
          {
            "id": "C",
            "text": "Quiste de Baker roto; cirugía de extirpación urgente"
          },
          {
            "id": "D",
            "text": "Hematoma de pantorrilla; frío local y AINEs"
          },
          {
            "id": "E",
            "text": "Esguince de rodilla; inmovilizador y AINEs"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: La TVP tiene antecedente de trombofilia, inmovilidad o fractura. El antecedente de bulto previo en la fosa poplítea que desapareció orienta a quiste de Baker roto, no TVP. Opción B: El antecedente del bulto en la fosa poplítea que desapareció más el dolor y edema en la pantorrilla corresponde a quiste de Baker roto. El tratamiento es analgesia con AINEs ya que es un cuadro transitorio. Opción C: El quiste de Baker roto no requiere cirugía urgente. El tratamiento es analgesia porque el cuadro es doloroso pero transitorio. La cirugía es excepcional. Opción D: Un hematoma requiere antecedente de trauma o desgarro muscular. El antecedente del bulto previo en la fosa poplítea que desapareció es diagnóstico de quiste de Baker roto. Opción E: El esguince de rodilla requiere traumatismo de la rodilla. El bulto previo en la fosa poplítea y el dolor en la pantorrilla post desaparición del bulto es el cuadro clásico de quiste de Baker roto.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.08.1.001"
      },
      {
        "stem": "Un paciente sufre un esguince de tobillo por inversión y presenta equimosis lateral más inestabilidad articular al examen. ¿Cuál es el grado y el tratamiento?",
        "options": [
          {
            "id": "A",
            "text": "Grado uno; solo analgesia sin inmovilización"
          },
          {
            "id": "B",
            "text": "Grado dos; RICE más inmovilización con órtesis removible"
          },
          {
            "id": "C",
            "text": "Grado tres; RICE más inmovilización con órtesis removible"
          },
          {
            "id": "D",
            "text": "Grado tres; cirugía de reparación ligamentaria urgente"
          },
          {
            "id": "E",
            "text": "Grado uno; RICE sin necesidad de radiografía"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: El grado uno tiene solo dolor sin equimosis ni inestabilidad. La presencia de equimosis e inestabilidad corresponde al grado tres. Opción B: El grado dos tiene rotura parcial con equimosis pero sin inestabilidad articular. La inestabilidad indica rotura total que es grado tres. Opción C: El grado tres tiene rotura total del ligamento con inestabilidad articular más equimosis. El tratamiento es RICE más AINEs más inmovilización con órtesis removible. La cirugía es excepcional. Opción D: El grado tres con inestabilidad es correcto, pero la cirugía no es el tratamiento inicial. El tratamiento es RICE e inmovilización con órtesis. La cirugía se considera solo si hay inestabilidad persistente en el tiempo. Opción E: La equimosis e inestabilidad corresponden a grado tres, no grado uno. Además, siempre se pide radiografía de tobillo para descartar fractura antes de diagnosticar esguince.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.08.1.001"
      },
      {
        "stem": "En el contexto del manejo de Displasia del Desarrollo de la Cadera (DDC): Maniobras de Ortolani/Barlow, Screening Ecográfico & Correas de Pavlik GES, ¿cuál de las siguientes afirmaciones respecto al diagnóstico y tratamiento representa la conducta correcta de acuerdo a las guías de práctica clínica?",
        "options": [
          {
            "id": "A",
            "text": "Se debe realizar inmovilización adecuada, evaluación neurovascular distal y derivación prioritaria."
          },
          {
            "id": "B",
            "text": "Está indicada la movilización precoz forzada sin inmovilización previa."
          },
          {
            "id": "C",
            "text": "Se debe diferir el estudio radiológico hasta que ceda completamente el edema de partes blandas."
          },
          {
            "id": "D",
            "text": "El tratamiento farmacológico exclusivo con reposo absoluto sustituye a la reducción en fracturas desplazadas."
          },
          {
            "id": "E",
            "text": "La infiltración intraarticular con corticoides es la primera línea terapéutica en casos agudos traumáticos."
          }
        ],
        "correcta": "A",
        "explicacion": "La opción correcta es la A. En Displasia del Desarrollo de la Cadera (DDC): Maniobras de Ortolani/Barlow, Screening Ecográfico & Correas de Pavlik GES, la evaluación neurovascular distal previa y posterior a cualquier inmovilización o reducción es una regla de oro obligatoria.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.08.1.001"
      }
    ]
  },
  {
    "id": "trauma-14",
    "classId": "trauma-14",
    "tier": 2,
    "blockNum": 4,
    "blockName": "Ortopedia Infantil, Tumores & Columna",
    "topicLabel": "12.14",
    "title": "Tumores Óseos Benignos y Malignos: Osteosarcoma (Sol Naciente), Sarcoma de Ewing (Capas de Cebolla) & Metástasis",
    "perfilCode": "4.02.1.009",
    "dx": "Específico",
    "tx": "Inicial",
    "seg": "Derivar",
    "ges": "Garantía Explícita en Salud (GES): Cáncer en menores de 15 años · Alivio del dolor por cáncer avanzado.",
    "reconstrucciones": "EUNACOM Julio 2023 (Q#44) · EUNACOM Enero 2020 (Q#95)",
    "frecuencia": "Alta en EUNACOM · Patrones radiológicos clásicos: sol naciente/Codman (osteosarcoma) vs cebolla (Ewing)",
    "diagram": flowTrauma('Tumores Ãseos Benignos y Malignos: Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Tumores Ãseos Benignos y Malignos (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Tumores Óseos Benignos y Malignos: Osteosarcoma (Sol Naciente), Sarcoma de Ewing (Capas de Cebolla) & Metástasis es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Tumores Óseos Benignos y Malignos",
        "paragraphs": [
          ":::important\n**Perfil EUNACOM**\nAunque el listado proporcionado se enfoca en Medicina Interna, los temas de Traumatología Infantil son de alta relevancia en las secciones de Pediatría y Cirugía/Traumatología del examen:\n*   **Displasia de Cadera:** Dx: Específico | Tx: Inicial | Seg: Derivar.\n*   **Escoliosis:** Dx: Específico | Tx: Inicial | Seg: Derivar.\n*   **Sinovitis Transitoria / Perthes / Epifisiólisis:** Dx: Específico | Tx: Inicial | Seg: Derivar.\n:::",
          "## Displasia de Cadera (Displasia del Desarrollo de la Cadera)",
          "La displasia de cadera es una patología que abarca desde la inestabilidad neonatal hasta la luxación franca. Su importancia radica en que, de no tratarse a tiempo, evoluciona hacia la **artrosis precoz**, dolor crónico y claudicación.",
          "### Clínica y Examen Físico\nEn el recién nacido y lactante menor, la clínica suele ser asintomática, por lo que el diagnóstico depende de las maniobras de screening:",
          "- **Signo de Ortolani:** Se utiliza para **reducir** (encajar) una cadera que está luxada. Al abducir la cadera, se siente un \"clic\" de entrada.\n- **Signo de Barlow:** Se utiliza para **luxar** una cadera que está reducida. Al aducir y presionar hacia atrás, se siente la salida de la cabeza femoral.",
          ":::tip\n**Mnemotecnia:**\n*   **O**rtolani: **O** de \"O\"K (la cadera entra, se reduce).\n*   **B**arlow: **B** de \"B\"ad (la cadera se sale, se luxa).\n:::"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          ":::note\n**Hallazgos Radiográficos de Displasia:**\n*   **Líneas de Perkins y Hilgenreiner:** El núcleo de osificación debe estar en el cuadrante ínfero-interno. En la displasia, se desplaza hacia **arriba y afuera**.\n*   **Arco de Shenton:** Es una línea curva imaginaria entre el fémur y el agujero obturador. En la displasia, este arco se presenta **discontinuo**.\n*   **Ángulo Acetabular:** Sospechoso si es >30°, diagnóstico si es >36°.\n:::",
          "### Tratamiento\nEl éxito depende directamente de la precocidad del diagnóstico (\"a menor edad, mayor éxito\"):\n- **Correas de Pavlik:** Tratamiento de elección en lactantes (generalmente <10 meses). Es un arnés funcional que mantiene la cadera en flexión y abducción.\n- **Yeso Pelvipedio (con yugo):** Se indica si fallan las correas o en niños mayores (>10 meses) que no las toleran.\n- **Reducción Cruenta (Cirugía):** Casos severos o diagnósticos tardíos (>1.5 años).",
          "---",
          "## Escoliosis",
          "Es la desviación lateral de la columna vertebral en el plano coronal, asociada a rotación de las vértebras.",
          "- **Diagnóstico Clínico:** Se utiliza el **Test de Adams**. Se pide al paciente que se incline hacia adelante; si aparece una **giba costal**, el test es positivo y confirma una escoliosis verdadera (estructural), diferenciándola de la actitud escoliótica (postural).\n- **Tratamiento según grados de desviación:**\n    - **< 30°:** Ejercicios de fortalecimiento y observación.\n    - **30° - 50°:** Uso de **corsé** (ortesis rígida).\n    - **> 50°:** Tratamiento quirúrgico (artrodesis)."
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "### Pie Bot (Pie Sambo o Equinovaro)\nMalformación congénita compleja que incluye cuatro deformidades: **Varo, Equino, Cavo y Adducto**.\n- **Tratamiento:** Actualmente es ortopédico mediante el **Método de Ponsetti** (yesos seriados). Ha desplazado a la cirugía por tener mejores resultados y menos secuelas. Debe iniciarse lo antes posible.",
          "---",
          "## Diagnóstico Diferencial de la Cadera Dolorosa",
          "El \"niño que claudica\" (cojea) es un motivo de consulta frecuente. La edad es la clave para el diagnóstico diferencial.",
          "| Patología | Edad Típica | Antecedentes Clave | Hallazgo Radiográfico | Tratamiento |\n| :--- | :--- | :--- | :--- | :--- |\n| **Sinovitis Transitoria** | 2 - 4 años | Infección viral previa (respiratoria) | Normal | Paracetamol y reposo |\n| **Enfermedad de Perthes** | 5 - 10 años | Talla baja, actividad física intensa | Cabeza femoral plana y densa | Reposo o cirugía |\n| **Epifisiólisis** | 12 - 15 años | Obesidad, pubertad, actividad física | Signo del \"helado caído\" | Cirugía (Osteosíntesis) |",
          "### 1. Sinovitis Transitoria\nEs una inflamación benigna y autolimitada de la sinovial.\n- **Clínica:** Dolor en ingle o rodilla, claudicación, buen estado general, **sin fiebre**.\n- **Diagnóstico:** Clínico. Si hay duda con [[Artritis Séptica]], se realiza punción articular (el líquido será normal)."
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Tumores Óseos Benignos y Malignos",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": null,
    "treatmentTable": null,
    "vignette": ":::important\n**Perfil EUNACOM**\nAunque el listado proporcionado se enfoca en Medicina Interna, los temas de Traumatología Infantil son de alta relevancia en las secciones de Pediatría y Cirugía/Traumatología del examen:\n*   **Displasia de Cadera:** Dx: Específico | Tx: Inicial | Seg: Derivar.\n*   **Escoliosis:** Dx: Específico | Tx: Inicial | Seg: Derivar.\n*   **Sinovitis Transitoria / Perthes / Epifisiólisis:** Dx: Específico | Tx: Inicial | Seg: Derivar.\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Tumores Óseos Benignos y Malignos: Osteosarcoma (Sol Naciente), Sarcoma de Ewing (Capas de Cebolla) & Metástasis. El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Tumores Óseos Benignos y Malignos, la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Un adolescente de quince años presenta dolor en el muslo derecho. La radiografía muestra una lesión en la metáfisis del fémur con disrupción de la cortical, invasión de partes blandas y reacción perióstica en sol naciente. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Osteocondroma"
          },
          {
            "id": "B",
            "text": "Osteosarcoma"
          },
          {
            "id": "C",
            "text": "Sarcoma de Ewing"
          },
          {
            "id": "D",
            "text": "Tumor de células gigantes"
          },
          {
            "id": "E",
            "text": "Osteoma osteoide"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El osteocondroma es benigno con aspecto polipoidea y sin disrupción de la cortical. No tiene invasión de partes blandas ni reacción perióstica compleja. Opción B: El osteosarcoma ocurre en adolescentes y adultos jóvenes con localización metafisiaria. La disrupción de la cortical, invasión de partes blandas y reacción perióstica en sol naciente son signos de malignidad típicos del osteosarcoma. Opción C: El sarcoma de Ewing también ocurre en adolescentes pero su localización más característica es diafisiaria, no metafisiaria. La localización metafisiaria en un adolescente orienta más a osteosarcoma. Opción D: El tumor de células gigantes ocurre en adultos de cuarenta a cincuenta años, no en adolescentes de quince años. La edad y la localización metafisiaria en adolescente apuntan a osteosarcoma. Opción E: El osteoma osteoide es benigno con imagen radiolúcida con halo radiopaco en la cortical, sin disrupción ni invasión de partes blandas. El aspecto maligno de la lesión excluye esta opción.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.02.1.009"
      },
      {
        "stem": "Un niño de diez años presenta dolor en la diáfisis del húmero. La radiografía muestra una lesión diafisiaria con aspecto heterogéneo, disrupción de la cortical y extensión a partes blandas. ¿Cuál es el diagnóstico más probable?",
        "options": [
          {
            "id": "A",
            "text": "Osteosarcoma"
          },
          {
            "id": "B",
            "text": "Sarcoma de Ewing"
          },
          {
            "id": "C",
            "text": "Tumor de células gigantes"
          },
          {
            "id": "D",
            "text": "Osteocondroma"
          },
          {
            "id": "E",
            "text": "Enfermedad de Paget"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: El osteosarcoma en adolescentes tiene localización metafisiaria preferentemente, no diafisiaria. La localización diafisiaria en un niño orienta a sarcoma de Ewing. Opción B: El sarcoma de Ewing afecta a niños y adolescentes con localización diafisiaria característica. La lesión maligna en diáfisis de un niño es sarcoma de Ewing hasta que se demuestre lo contrario. Opción C: El tumor de células gigantes afecta a adultos de cuarenta a cincuenta años y se localiza alrededor de la rodilla. No corresponde a un niño de diez años con lesión diafisiaria. Opción D: El osteocondroma es benigno con aspecto polipoidea sin disrupción de la cortical. El aspecto maligno con disrupción y extensión a partes blandas excluye esta opción. Opción E: La enfermedad de Paget es una lesión pseudotumoral de adultos mayores con lesiones en sal y pimienta y fosfatasa alcalina elevada. No corresponde a un niño con lesión diafisiaria maligna.",
        "recTag": "Banco Oficial AEE · Perfil V3 4.02.1.009"
      }
    ]
  },
  {
    "id": "trauma-15",
    "classId": "trauma-15",
    "tier": 3,
    "blockNum": 4,
    "blockName": "Ortopedia Infantil, Tumores & Columna",
    "topicLabel": "12.15",
    "title": "Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica)",
    "perfilCode": "1.10.1.001",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "Sin garantía GES específica · Banderas rojas en dolor lumbar y criterios de cirugía descompresiva inmediata.",
    "reconstrucciones": "EUNACOM Diciembre 2023 (Q#55) · EUNACOM Julio 2021 (Q#108) · EUNACOM Enero 2020 (Q#22)",
    "frecuencia": "Muy Alta en EUNACOM · Cauda equina (anestesia en silla de montar + retención/incontinencia urinaria)",
    "diagram": flowTrauma('Lumbago MecÃ¡nico vs Inflamatorio, Hernia Discal Lumbar & SÃ­ndrome de Cauda Equina (Urgencia QuirÃºrgica): Algoritmo DiagnÃ³stico y TerapÃ©utico', [
  { t: 'Sospecha ClÃ­nica de Lumbago MecÃ¡nico vs Inflamatorio, Hernia Discal Lumbar & SÃ­ndrome de Cauda Equina (Urgencia QuirÃºrgica) (Dolor, Deformidad, Impotencia)', s: 'Anamnesis de mecanismo de trauma + EvaluaciÃ³n neurovascular distal obligatoria', type: 'warn' },
  { k: 'split', q: 'Â¿Presenta Criterios de Urgencia QuirÃºrgica Inmediata?', s: 'ExposiciÃ³n Ã³sea, compromiso vascular (ausencia de pulso) o sospecha de sÃ­ndrome compartimental',
    ll: 'SÃ: Urgencia QuirÃºrgica Mayor',
    left: { t: 'PabellÃ³n QuirÃºrgico Urgente', s: 'Aseo quirÃºrgico, reducciÃ³n urgente, fijaciÃ³n externa y descompresiÃ³n / fasciotomÃ­a', type: 'crit' },
    rl: 'NO: Manejo Inicial Estabilizador',
    right: { t: 'Estudio RadiolÃ³gico & InmovilizaciÃ³n', s: 'RadiografÃ­as AP y Lateral Â· Valva de yeso acolchada Â· Analgesia multimodal', type: 'acc' }
  },
  { t: 'EstratificaciÃ³n TerapÃ©utica Definitiva', s: 'Manejo ortopÃ©dico conservador vs ReducciÃ³n abierta y fijaciÃ³n interna (RAFI)', type: 'dec' },
  { t: 'Control y RehabilitaciÃ³n Funcional Precoz', s: 'Control radiolÃ³gico seriado + Kinesiterapia motora para evitar rigidez articular', type: 'acc' }
]),
    "contexto": "El dominio de Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica) es un pilar fundamental en la práctica médica y en el examen EUNACOM. Su correcta evaluación semiológica permite distinguir los cuadros manejables en el nivel primario de aquellos que exigen reducción cerrada, estabilización urgente o intervención quirúrgica inmediata para preservar la función y viabilidad de la extremidad.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Principios Diagnósticos de Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica)",
        "paragraphs": [
          ":::important\n1.10.1.001 | Lumbago (Sindrome de dolor lumbar) | Dx: Específico | Tx: Completo | Seg: Completo\n1.10.1.002 | Patología de partes blandas (Hombro, codo, etc.) | Dx: Específico | Tx: Inicial | Seg: Completo\n1.10.1.003 | Fibromialgia | Dx: Específico | Tx: Completo | Seg: Completo\n:::",
          "Este artículo aborda el manejo clínico de las patologías musculoesqueléticas no articulares más frecuentes en la práctica del médico general y muy preguntadas en el examen EUNACOM. Se agrupan bajo el concepto de reumatismo de partes blandas.",
          "## Lumbago y Lumbociática",
          "El **lumbago** se define como dolor en la zona lumbar. La causa más frecuente es el **lumbago mecánico**, secundario a debilidad de la musculatura axial (lumbar y abdominal), lo que genera posiciones viciosas e irritación de estructuras articulares, musculares o nerviosas.",
          "### Clasificación Clínica",
          "| Tipo de Lumbago | Características | Manejo |\n| :--- | :--- | :--- |\n| **Mecánico** | Aumenta con movimiento, disminuye con reposo. | Médico (AINEs + Kine). |\n| **Inflamatorio** | Aumenta con reposo, disminuye con ejercicio. Sugiere [[Espondilitis Anquilosante]]. | Estudio con imágenes y derivación. |\n| **Lumbociática** | Dolor irradiado a extremidades inferiores. | Igual al lumbago (salvo compromiso neurológico). |"
        ]
      },
      {
        "subhead": "2. Evaluación Clínica, Criterios de Severidad y Estudio por Imágenes",
        "paragraphs": [
          ":::warning\nLa cirugía en la hernia del núcleo pulposo (HNP) solo se indica ante fracaso del tratamiento médico bien llevado o compromiso neurológico agudo.\n:::",
          "## Cervicalgia y Cervicobraquialgia\nEl manejo de la **cervicalgia** (dolor de cuello) y la **cervicobraquialgia** (dolor cervical irradiado al brazo) sigue exactamente la misma lógica que el lumbago: manejo médico inicial con AINEs/Kine y estudio con RM solo ante signos de alarma.",
          "---",
          "## Hombro Doloroso",
          "### 1. Síndrome de Manguito Rotador\nEs la causa más común. Se produce por movimientos repetitivos que inflaman los tendones (especialmente el supraespinoso).\n- **Clínica:** Dolor nocturno que aumenta al acostarse sobre el hombro afectado. Dolor a la abducción y extensión contra resistencia.\n- **Diagnóstico:** Clínico. El examen de elección para objetivar la inflamación es la **Ecografía** (más costo-efectiva).\n- **Tratamiento:** Reposo, AINEs y kinesioterapia motora (pudiendo usar ultrasonido).",
          "### 2. Capsulitis Adhesiva (Hombro Congelado)\n- **Clínica:** Limitación de la movilidad **tanto activa como pasiva**. Pasa por una fase inicial muy dolorosa y luego una fase de anquilosis (rigidez) donde el dolor cede pero el hombro no se mueve.\n- **Tratamiento:** A diferencia del manguito rotador, aquí se utilizan **corticoides** y una kinesioterapia intensiva para recuperar rango articular."
        ]
      },
      {
        "subhead": "3. Tratamiento Médico-Quirúrgico, Inmovilización y Derivación Oportuna",
        "paragraphs": [
          "---",
          "## Tendinitis y Bursitis",
          "### Tendinitis Frecuentes\nSe caracterizan por dolor a la palpación y al estiramiento del tendón específico.",
          "- **Pata de Ganso:** Dolor en la zona medial e inferior de la rodilla. Asociada a trekking o caminatas en pendiente.\n- **Tendinitis Rotuliana:** Dolor en la tuberosidad tibial. Su variante en adolescentes es la enfermedad de **Osgood-Schlatter**.\n- **Fascia Lata (Banda Iliotibial):** Dolor en la cara lateral de la rodilla. Típica de corredores (**\"rodilla del maratonista\"**).\n- **Tendinitis de De Quervain:** Dolor en la zona lateral de la muñeca (extensor corto y abductor largo del pulgar).",
          "### Bursitis\nInflamación de la bursa (saco sinovial peritendinoso). A diferencia de la tendinitis, suele presentar **eritema y aumento de volumen visible**.",
          "- **Bursitis Olecraniana:** Aumento de volumen en la punta del codo.\n- **Bursitis Pertrocantérica:** Dolor sobre el trocánter mayor del fémur.\n- **Bursitis Prepatelar:** Inflamación sobre la rótula."
        ]
      }
    ],
    "table": {
      "title": "Enfrentamiento y Criterios Diagnósticos de Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica)",
      "headers": [
        "Parámetro Clínico",
        "Criterio Diagnóstico",
        "Signo de Alarma",
        "Conducta Terapéutica"
      ],
      "rows": [
        [
          "Evaluación Inicial",
          "Anamnesis de energía del trauma + Deformidad visible",
          "Compromiso neurovascular distal",
          "Inmovilización provisoria inmediata"
        ],
        [
          "Estudio Radiológico",
          "Radiografías en al menos 2 proyecciones (AP y Lateral)",
          "Fractura intraarticular o luxación asociada",
          "Reducción precoz o TAC complementario"
        ],
        [
          "Manejo Farmacológico",
          "Analgesia multimodal escalonada (Paracetamol + AINEs / Opioides)",
          "Dolor refractario o desproporcionado",
          "Sospecha de síndrome compartimental"
        ],
        [
          "Criterio Quirúrgico",
          "Desplazamiento inaceptable, inestabilidad o exposición",
          "Lesión vascular o nerviosa aguda",
          "Cirugía traumatológica de urgencia"
        ]
      ]
    },
    "severityTable": {
      "title": "Estratificación de Severidad y Factores de Alto Riesgo en Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica)",
      "headers": [
        "Nivel de Severidad",
        "Hallazgos Clínicos Cardinales",
        "Riesgo / Complicación Mayor",
        "Conducta Inmediata"
      ],
      "rows": [
        [
          "Leve / No Desplazada",
          "Deformidad mínima, pulsos distales presentes y simétricos",
          "Consolidación viciosa si no se inmoviliza",
          "Inmovilización con valva de yeso y control"
        ],
        [
          "Moderada / Desplazada",
          "Deformidad marcada, impotencia funcional, hematoma",
          "Lesión de partes blandas, atrapamiento",
          "Reducción cerrada bajo analgesia / tracción"
        ],
        [
          "Grave / Inestable o Expuesta",
          "Pérdida de pulsos, alteración sensitiva, exposición ósea",
          "Necrosis avascular, shock, pérdida de extremidad",
          "Pabellón quirúrgico urgente, fijación y aseo"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Terapéutico Escalonado y Fármacos en Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica)",
      "headers": [
        "Fase Terapéutica",
        "Intervención Primaria",
        "Fármacos / Posología",
        "Objetivo Clínico"
      ],
      "rows": [
        [
          "Urgencia Inicial",
          "Alineación anatómica e inmovilización provisoria",
          "Analgesia EV (Ketoprofeno 100mg / Tramadol 50-100mg)",
          "Alivio del dolor y prevención de daño secundario"
        ],
        [
          "Protección Cutánea",
          "Aseo de heridas, apósitos estériles y férula",
          "Cefazolina 2g EV + profilaxis antitetánica si expuesta",
          "Prevención de infección osteoarticular profunda"
        ],
        [
          "Resolución Definitiva",
          "Osteosíntesis interna (placas/tornillos/clavos) o prótesis",
          "Tromboprofilaxis con HBPM (Enoxaparina 40mg/d SC)",
          "Movilización precoz y consolidación ósea anatómica"
        ]
      ]
    },
    "vignette": ":::important\n1.10.1.001 | Lumbago (Sindrome de dolor lumbar) | Dx: Específico | Tx: Completo | Seg: Completo\n1.10.1.002 | Patología de partes blandas (Hombro, codo, etc.) | Dx: Específico | Tx: Inicial | Seg: Completo\n1.10.1.003 | Fibromialgia | Dx: Específico | Tx: Completo | Seg: Completo\n:::",
    "explicacion": "El cuadro clínico y los antecedentes orientan claramente a Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica). El estándar de oro incluye inmovilización adecuada, evaluación neurovascular estricta y derivación o tratamiento quirúrgico según criterios de estabilidad y alineación ósea.",
    "keyPoints": [
      "En Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica), la evaluación neurovascular distal (pulsos, llenado capilar, sensibilidad motora) es obligatoria antes y después de inmovilizar.",
      "Toda fractura requiere al menos 2 proyecciones radiológicas perpendiculares (AP y Lateral), incluyendo las articulaciones proximal y distal.",
      "El dolor desproporcionado y el dolor al estiramiento pasivo son los signos más precoces y sensibles de síndrome compartimental agudo.",
      "Las fracturas expuestas constituyen emergencias quirúrgicas: iniciar antibióticos EV en los primeros 60 minutos y aseo quirúrgico urgente.",
      "En fracturas de cadera del adulto mayor, la cirugía en las primeras 24 a 48 horas reduce significativamente la morbimortalidad y es garantía GES.",
      "La sospecha clínica manda en trauma: ante duda diagnóstica o luxación irreducible, derivar de urgencia a especialista traumatólogo."
    ],
    "questions": [
      {
        "stem": "Hombre de cuarenta y dos años consulta por lumbago de tres semanas de evolución. Refiere que el dolor aumenta al moverse y mejora significativamente cuando está acostado en reposo. No tiene fiebre, ni baja de peso, ni irradiación a extremidades, ni debilidad muscular. ¿Cuál es el manejo inicial más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Solicitar resonancia magnética lumbar para estudio etiológico"
          },
          {
            "id": "B",
            "text": "Reposo absoluto en cama por dos semanas hasta la remisión del dolor"
          },
          {
            "id": "C",
            "text": "Reposo relativo, AINE y derivación a quinesioterapia una vez aliviado el dolor"
          },
          {
            "id": "D",
            "text": "Corticoides orales por el componente inflamatorio del cuadro"
          },
          {
            "id": "E",
            "text": "Derivación urgente a neurocirugía por riesgo de compresión medular"
          }
        ],
        "correcta": "C",
        "explicacion": "La opción correcta es la C. Opción A: La resonancia magnética se reserva para lumbagos con signos de alarma: fractura, sospecha de cáncer, infección, espondilitis anquilosante o compromiso neurológico. Este paciente no presenta ninguno de esos signos, por lo que no corresponde solicitarla. Opción B: El reposo en el lumbago mecánico es relativo, no absoluto. El reposo absoluto prolongado tiene un efecto negativo y retrasa la recuperación. El paciente debe mantenerse activo dentro de sus tolerancias. Opción C: El lumbago mecánico sin signos de alarma se maneja con reposo relativo, antiinflamatorios no esteroidales y quinesioterapia. La quinesioterapia se inicia cuando el dolor ha mejorado y va dirigida a fortalecer la musculatura lumbar y abdominal para prevenir recurrencias. Opción D: Los corticoides orales no están indicados en el lumbago mecánico. El tratamiento antiinflamatorio de elección son los AINE. Los corticoides se reservan para algunas situaciones específicas como la capsulitis adhesiva de hombro. Opción E: No hay signos de alarma neurológica en este caso, como debilidad, parestesias o arreflexia. Sin estos hallazgos, no existe indicación de derivación urgente a neurocirugía.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.001"
      },
      {
        "stem": "Mujer de treinta y cinco años deportista, tenista amateur, consulta por dolor en la cara lateral del codo derecho que lleva dos meses de evolución y que aumenta al extender la muñeca contra resistencia. No hay eritema ni aumento de volumen articular. ¿Cuál es el diagnóstico y el manejo inicial correcto?",
        "options": [
          {
            "id": "A",
            "text": "Bursitis del olécranon: AINE más calor local"
          },
          {
            "id": "B",
            "text": "Epitrocleitis o codo del golfista: reposo, AINE y epicondilera"
          },
          {
            "id": "C",
            "text": "Artritis séptica de codo: punción articular urgente y antibióticos"
          },
          {
            "id": "D",
            "text": "Epicondilitis lateral o codo del tenista: reposo, AINE, epicondilera y quinesioterapia"
          },
          {
            "id": "E",
            "text": "Tendinitis del manguito rotador: ecografía de hombro y corticoides"
          }
        ],
        "correcta": "D",
        "explicacion": "La opción correcta es la D. Opción A: La bursitis del olécranon produce inflamación visible en la punta del codo, con eritema y aumento de volumen de la bursa. El dolor a la extensión de la muñeca contra resistencia en la cara lateral del codo es característico de epicondilitis, no de bursitis. Opción B: La epitrocleitis afecta la cara medial del codo y se relaciona con los flexores del antebrazo. El enunciado describe dolor en la cara lateral con movimientos de extensión, lo que corresponde a epicondilitis lateral o codo del tenista. Opción C: La artritis séptica presenta eritema, aumento de volumen articular, fiebre y compromiso sistémico. El enunciado describe dolor crónico sin signos inflamatorios ni sistémicos, lo que descarta esta entidad. Opción D: La epicondilitis lateral afecta la zona de inserción de los extensores del antebrazo en el epicóndilo, produce dolor en la cara lateral del codo que aumenta con la extensión de muñeca contra resistencia y es frecuente en tenistas. El tratamiento es reposo relativo, AINE, quinesioterapia y el uso de la epicondilera para descomprimir la entesis. Opción E: El síndrome del manguito rotador afecta el hombro, no el codo. La clínica descrita con dolor lateral del codo que aumenta con extensión de muñeca es específica de epicondilitis lateral.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.001"
      },
      {
        "stem": "Mujer de cuarenta y ocho años consulta por dolor generalizado en múltiples grupos musculares, fatiga crónica y trastornos del sueño de ocho meses de evolución. Al examen tiene dolor a la compresión en puntos cervicales, trapecios, epicóndilos y cara medial de las rodillas. La VHS y la PCR están dentro de rangos normales. ¿Cuál es el diagnóstico y el tratamiento de primera línea?",
        "options": [
          {
            "id": "A",
            "text": "Polimialgia reumática: corticoides orales en dosis bajas"
          },
          {
            "id": "B",
            "text": "Fibromialgia: ejercicio físico más moduladores del dolor como pregabalina"
          },
          {
            "id": "C",
            "text": "Artritis reumatoide: metotrexato como fármaco modificador de la enfermedad"
          },
          {
            "id": "D",
            "text": "Polimiositis: biopsia muscular y corticoides sistémicos"
          },
          {
            "id": "E",
            "text": "Lumbago crónico con irradiación generalizada: resonancia magnética lumbar"
          }
        ],
        "correcta": "B",
        "explicacion": "La opción correcta es la B. Opción A: La polimialgia reumática cursa con elevación de la VHS y tiene una distribución proximal de los síntomas. En este caso la VHS es normal y hay dolor en puntos gatillo específicos, lo que orienta a fibromialgia. Opción B: La fibromialgia es un diagnóstico clínico basado en dolor a la compresión de los puntos gatillos musculares, astenia y trastornos del sueño, con marcadores inflamatorios normales. El tratamiento de primera línea son los ejercicios de elongación y fortalecimiento, más moduladores del dolor como la pregabalina o los antidepresivos tricíclicos. Opción C: La artritis reumatoide produce artritis simétrica de pequeñas articulaciones, rigidez matutina y marcadores inflamatorios elevados. El enunciado describe dolor muscular en puntos gatillos con marcadores normales, lo que corresponde a fibromialgia. Opción D: La polimiositis cursa con elevación marcada de la creatinkinasa y compromiso muscular proximal con debilidad objetiva, no solo dolor. Los marcadores inflamatorios están alterados. En este caso son normales. Opción E: El lumbago es un dolor lumbar localizado. El enunciado describe dolor en múltiples grupos musculares con puntos gatillos específicos, lo cual es incompatible con lumbago y corresponde al cuadro clínico de fibromialgia.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.001"
      },
      {
        "stem": "En el contexto del manejo de Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica), ¿cuál de las siguientes afirmaciones respecto al diagnóstico y tratamiento representa la conducta correcta de acuerdo a las guías de práctica clínica?",
        "options": [
          {
            "id": "A",
            "text": "Se debe realizar inmovilización adecuada, evaluación neurovascular distal y derivación prioritaria."
          },
          {
            "id": "B",
            "text": "Está indicada la movilización precoz forzada sin inmovilización previa."
          },
          {
            "id": "C",
            "text": "Se debe diferir el estudio radiológico hasta que ceda completamente el edema de partes blandas."
          },
          {
            "id": "D",
            "text": "El tratamiento farmacológico exclusivo con reposo absoluto sustituye a la reducción en fracturas desplazadas."
          },
          {
            "id": "E",
            "text": "La infiltración intraarticular con corticoides es la primera línea terapéutica en casos agudos traumáticos."
          }
        ],
        "correcta": "A",
        "explicacion": "La opción correcta es la A. En Lumbago Mecánico vs Inflamatorio, Hernia Discal Lumbar & Síndrome de Cauda Equina (Urgencia Quirúrgica), la evaluación neurovascular distal previa y posterior a cualquier inmovilización o reducción es una regla de oro obligatoria.",
        "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.001"
      }
    ]
  }
];

const traumatologiaClasses = rawClasses.map(c => {
  const normQuestions = (c.questions || []).map(q => ({
    stem: q.stem,
    options: q.options,
    correcta: q.correcta,
    explicacion: q.explicacion,
    recTag: q.recTag || ('Banco Oficial AEE · Perfil V3 ' + (c.perfilCode || '4.01.1.001'))
  }));

  return {
    ...c,
    questions: normQuestions
  };
});

module.exports = {
  traumatologiaClasses,
  flow: flowTrauma
};
