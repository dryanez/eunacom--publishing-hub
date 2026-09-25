// Clase 11.8 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Enfermedad pilonidal aguda vs crónica, hidrosadenitis supurativa, lipoma vs quiste epidérmico y banderas rojas de sarcoma',
      say: 'Bienvenidos a la clase de patología pilonidal, hidrosadenitis supurativa y tumores de partes blandas. Aunque muchas veces se consideran patologías menores, en el EUNACOM se evalúan con frecuencia dos decisiones críticas: distinguir cuándo un absceso pilonidal exige drenaje simple inmediato en lugar de una resección amplia, y reconocer las banderas rojas de un sarcoma de partes blandas para no cometer el error de extirparlo a ciegas en atención primaria. Vamos a dominar estos conceptos.',
    },

    {
      type: 'flow',
      kicker: 'Patogenia secuencial',
      title: 'Enfermedad del seno pilonidal: de la penetración pilosa a la fístula crónica',
      nodes: [
        { id: 'fol', col: 0, row: 2, k: 'start', t: 'Folículo piloso interglúteo', s: 'Fricción y presión en surco natal sacrococcígeo' },
        { id: 'inv', col: 1, row: 1, k: 'mech', t: 'Invaginación pilosa retrógrada', s: 'Penetración de pelos sueltos hacia dermis profunda' },
        { id: 'gra', col: 2, row: 0, k: 'alert', t: 'Granuloma a cuerpo extraño', s: 'Reacción inflamatoria estéril inicial' },
        { id: 'abs', col: 2, row: 2, k: 'risk', t: 'Fase aguda: Absceso pilonidal', s: 'Sobreinfección bacteriana fluctuante y dolor exquisito' },
        { id: 'dre', col: 3, row: 1, k: 'good', t: 'Drenaje simple de urgencia', s: 'Incisión paramedial y curetaje de folículos y pelos' },
        { id: 'cro', col: 3, row: 3, k: 'trap', t: 'Fase crónica: Fístula pilonidal', s: 'Orificios ciegos secundarios con descarga purulenta' },
        { id: 'ele', col: 4, row: 2, k: 'good', t: 'Cirugía resectiva programada', s: 'Exéresis en frío por segunda intención o colgajo' },
      ],
      edges: [
        { from: 'fol', to: 'inv', label: 'microtrauma repetido' },
        { from: 'inv', to: 'gra', label: 'reacción dérmica' },
        { from: 'inv', to: 'abs', label: 'colonización bacteriana' },
        { from: 'abs', to: 'dre', label: 'descompresión aguda' },
        { from: 'dre', to: 'cro', label: 'epitelización incompleta' },
        { from: 'cro', to: 'ele', label: 'manejo definitivo diferido' },
      ],
      steps: [
        {
          show: ['fol', 'inv'],
          note: 'Origen adquirido en el surco interglúteo',
          say: 'La enfermedad pilonidal no es una malformación congénita, sino un cuadro adquirido. Ocurre típicamente en hombres jóvenes con abundante vello corporal y actividades sedentarias. El roce continuo y la presión sobre el surco interglúteo fuerzan a los pelos sueltos a penetrar en los orificios foliculares dilatados de la línea media sacrococcígea.',
        },
        {
          show: ['gra', 'abs'],
          note: 'Formación del absceso agudo',
          say: 'La presencia de queratina y pelos en la dermis desencadena un granuloma a cuerpo extraño. Cuando la microbiota cutánea coloniza esta cavidad cerrada, se produce una supuración aguda. El paciente consulta por una masa intensamente dolorosa, eritematosa, caliente y fluctuante en el pliegue interglúteo, a pocos centímetros del ano.',
        },
        {
          show: ['dre'],
          note: 'Conducta inmediata en fase aguda',
          say: 'Frente al absceso pilonidal agudo, la regla de oro que siempre pregunta el EUNACOM es el drenaje quirúrgico simple de urgencia bajo anestesia local. Está prohibido intentar una resección amplia en este momento de infección activa. Solo se incide, se evacua el pus y se curetean los nidos de pelos.',
        },
        {
          show: ['cro', 'ele'],
          note: 'Evolución a fase fistulosa crónica',
          say: 'Tras el drenaje agudo o tras una rotura espontánea, el cuadro pasa a una fase crónica. Se observan orificios puntiformes en la línea media con secreción serosanguinolenta persistente. La extirpación definitiva del trayecto fistuloso se planifica de manera electiva semanas más tarde, con la piel sana, ya sea mediante cierre por segunda intención o colgajos locales.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo en atención primaria',
      title: 'Enfermedad pilonidal: fase aguda versus fase crónica',
      cards: [
        {
          title: 'Fase aguda: Absceso pilonidal',
          tag: 'Urgencia menor',
          kind: 'alert',
          items: [
            {
              t: 'Clínica cardinal',
              d: 'Tumefacción fluctuante muy dolorosa en línea interglútea',
              say: 'El absceso pilonidal se presenta con dolor pulsátil intenso, aumento de volumen eritematoso y fluctuación franca en la región sacrococcígea, sin compromiso del esfínter anal.',
            },
            {
              t: 'Conducta estándar',
              d: 'Drenaje bajo anestesia local y curetaje de restos pilosos',
              say: 'El tratamiento es siempre el drenaje quirúrgico inmediato. No des antibióticos solos esperando que se reabsorba. Una incisión longitudinal simple, retiro de pelos y curaciones diarias resuelven la urgencia.',
            },
            {
              t: 'Error conceptual grave',
              d: 'Resección amplia en bloque durante la fase flemonosa',
              say: 'Nunca realices una resección radical con colgajos en el episodio agudo infectado. Eso condena al paciente a dehiscencia masiva de la herida, infección severa y recidiva.',
            },
          ],
        },
        {
          title: 'Fase crónica: Fístula sacrococcígea',
          tag: 'Electivo diferido',
          kind: 'key',
          items: [
            {
              t: 'Orificios primarios y secundarios',
              d: 'Pits en línea media con drenaje seropurulento intermitente',
              say: 'En la fase crónica destacan los hoyuelos o pits en la línea media y a veces orificios secundarios laterales por donde asoman pelos y secreción recurrente que mancha la ropa interior.',
            },
            {
              t: 'Momento quirúrgico definitivo',
              d: 'Exéresis electiva completa sin signos de celulitis activa',
              say: 'La cirugía definitiva se realiza con el tejido desinflamado. Se reseca todo el trayecto fibroso hasta la fascia presacra. Se puede dejar cicatrizar por segunda intención o usar técnicas de colgajo como el de Limberg.',
            },
            {
              t: 'Prevención de recidiva',
              d: 'Depilación prolongada del surco natal e higiene meticulosa',
              say: 'La principal medida médica para evitar que la enfermedad reaparezca tras la cirugía es mantener la zona interglútea completamente depilada de por vida y extremar el secado del surco.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología de pliegues',
      title: 'Hidrosadenitis supurativa: enfermedad inflamatoria de Verneuil',
      cards: [
        {
          title: 'Clínica y topografía',
          tag: 'Glándulas apocrinas',
          kind: 'criteria',
          items: [
            {
              t: 'Zonas intertriginosas',
              d: 'Axilas, ingles, periné y pliegues inframamarios bilaterales',
              say: 'La hidrosadenitis supurativa es una enfermedad inflamatoria crónica del epitelio folicular en regiones ricas en glándulas apocrinas. Compromete axilas e ingles en forma bilateral y recidivante.',
            },
            {
              t: 'Lesiones polimorfas crónicas',
              d: 'Comedones dobles, nódulos dolorosos, fístulas y cicatrices',
              say: 'Comienza con nódulos subcutáneos inflamatorios que evolucionan a abscesos recurrentes, fístulas que drenan material fétido, comedones abiertos dobles y puentes cicatrizales fibrosos.',
            },
            {
              t: 'Clasificación de Hurley',
              d: 'Estadio uno aislado, dos con fístulas, tres con placas confluentes',
              say: 'Se estratifica con la escala de Hurley. El estadio uno tiene nódulos aislados sin fístulas. El estadio dos presenta fístulas y cicatrices separadas. El estadio tres compromete toda el área con cordones fibrosos interconectados.',
            },
          ],
        },
        {
          title: 'Tratamiento escalonado',
          tag: 'Médico y quirúrgico',
          kind: 'pharma',
          items: [
            {
              t: 'Medidas generales y cese tabáquico',
              d: 'El tabaco y la obesidad son los principales factores agravantes',
              say: 'El tabaquismo y el sobrepeso son desencadenantes fundamentales. La suspensión estricta del tabaco es obligatoria desde la primera consulta médica.',
            },
            {
              t: 'Terapia farmacológica',
              d: 'Clindamicina tópica, doxiciclina oral o rifampicina con clindamicina',
              say: 'En formas leves se usa clindamicina tópica al uno por ciento. En cuadros moderados se indican tetraciclinas orales como doxiciclina o la combinación de rifampicina con clindamicina por diez semanas. En casos severos refractarios se utiliza adalimumab.',
            },
            {
              t: 'Papel de la cirugía',
              d: 'Destechamiento de trayectos o resección radical de la zona apocrina',
              say: 'El drenaje simple solo alivia la tensión momentánea pero no cura. En casos avanzados con fístulas fijas se realiza destechamiento quirúrgico o exéresis completa de la piel axilar comprometida.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial cardinal',
      title: 'Lipoma benigno versus quiste epidérmico versus sarcoma',
      head: ['Parámetro', 'Lipoma subcutáneo', 'Quiste epidérmico', 'Sarcoma de partes blandas'],
      rows: [
        {
          cells: ['Plano anatómico', 'Subcutáneo superficial', 'Intradérmico superficial', 'Profundo subfascial o muscular'],
          say: 'El lipoma y el quiste son lesiones superficiales del tejido celular subcutáneo o de la dermis. El sarcoma, en cambio, nace profundo respecto a la fascia muscular.',
        },
        {
          cells: ['Consistencia', 'Blando, lobulado y móvil', 'Elástico, renitente y móvil', 'Firme, pétreo y adherido a planos'],
          say: 'Al palpar, el lipoma es blando y resbala fácilmente bajo los dedos. El quiste es elástico y esférico. El sarcoma suele ser duro, firme y fijo a las masas musculares o al hueso.',
        },
        {
          cells: ['Signo patognomónico', 'Signo del resbalamiento', 'Poro o punctum central visible', 'Ausencia de plano de clivaje móvil'],
          say: 'El quiste epidérmico tiene casi siempre un pequeño orificio o poro central en la piel que lo cubre. El lipoma no altera la piel suprayacente.',
        },
        {
          cells: ['Tamaño típico', 'Habitualmente menor a cinco centímetros', 'Uno a cuatro centímetros', 'Mayor a cinco centímetros y progresivo'],
          say: 'El diámetro es decisivo. Una masa de partes blandas mayor a cinco centímetros debe considerarse un sarcoma hasta que se demuestre lo contrario.',
        },
        {
          cells: ['Conducta terapéutica', 'Enucleación con cápsula fina', 'Exéresis con cápsula íntegra', 'Prohibida la resección: RMN y biopsia Tru-Cut'],
          say: 'En el lipoma y el quiste realizas exéresis completa. Pero ante sospecha de sarcoma está terminantemente prohibido resecar en atención primaria. Se deriva de inmediato.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Alerta oncológica EUNACOM',
      title: 'Banderas rojas de sarcoma de partes blandas',
      cards: [
        {
          title: 'Criterios clínicos de alarma',
          tag: 'Regla de los 5 centímetros',
          kind: 'alert',
          items: [
            {
              t: 'Tamaño mayor a cinco centímetros',
              d: 'Toda masa que supera los cinco centímetros es sospechosa',
              say: 'El tamaño es el factor de alarma más importante. Una masa en muslo, glúteo o brazo que sobrepasa los cinco centímetros tiene alta probabilidad de malignidad mesenquimática.',
            },
            {
              t: 'Localización subfascial o intramuscular',
              d: 'Masa no pellizcable que queda fija al contraer el músculo',
              say: 'Si le pides al paciente que contraiga el músculo y la lesión se torna inmóvil y queda atrapada en la profundidad, se trata de una masa subfascial.',
            },
            {
              t: 'Crecimiento rápido o doloroso',
              d: 'Aumento progresivo de volumen en pocas semanas o meses',
              say: 'Un lipoma suele tardar años en crecer lentamente sin molestar. El sarcoma suele presentar un aumento rápido de volumen, sensación de pesadez o dolor por invasión de estructuras vecinas.',
            },
          ],
        },
        {
          title: 'Conducta médica obligatoria',
          tag: 'Prohibición en APS',
          kind: 'key',
          items: [
            {
              t: 'Prohibida la extirpación marginal a ciegas',
              d: 'Nunca operar en pabellón menor una masa con banderas rojas',
              say: 'Esta es la clásica trampa del EUNACOM: jamás programes una resección en el consultorio ante una masa mayor a cinco centímetros o profunda. Romper su pseudocápsula disemina el sarcoma y arruina la opción curativa.',
            },
            {
              t: 'Estudio con resonancia magnética',
              d: 'Examen de elección para caracterizar compromiso anatómico',
              say: 'El examen imagenológico de primera línea ante sospecha de sarcoma es la resonancia magnética con contraste de la extremidad afectada, ya que define con precisión la anatomía neurovascular.',
            },
            {
              t: 'Derivación a centro oncológico',
              d: 'Biopsia con aguja gruesa Tru-Cut guiada por especialista',
              say: 'La confirmación histológica se obtiene exclusivamente mediante biopsia con aguja gruesa Tru-Cut realizada por el equipo de oncología quirúrgica que hará el tratamiento definitivo.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Enfrentamiento de masas y lesiones en partes blandas',
      say: 'Analicemos el árbol de decisiones frente a un aumento de volumen de partes blandas. La primera pregunta es si se trata de un proceso inflamatorio agudo, una lesión intertriginosa o una masa tumoral.',
    },

    {
      type: 'table',
      kicker: 'Trampas clásicas del examen',
      title: 'Puntos críticos evaluados en el EUNACOM',
      head: ['Situación clínica', 'Conducta correcta', 'Error frecuente y trampa'],
      rows: [
        {
          cells: [
            'Absceso pilonidal agudo fluctuante',
            'Drenaje quirúrgico simple de inmediato',
            'Indicar solo antibióticos orales o intentar resección en bloque',
          ],
          say: 'Frente al absceso pilonidal fluctuante la respuesta correcta es drenar. No des antibióticos orales aislados y jamás intentes una resección radical de entrada.',
        },
        {
          cells: [
            'Masa en muslo de ocho centímetros profunda',
            'Resonancia magnética y derivar a oncología',
            'Programar exéresis en pabellón menor creyendo que es un lipoma',
          ],
          say: 'Una masa grande de partes blandas profunda no se toca en atención primaria. La trampa habitual es ofrecer extirparla como si fuera un lipoma.',
        },
        {
          cells: [
            'Quiste epidérmico con poro central',
            'Extirpación completa incluyendo toda la cápsula',
            'Drenar el contenido blanquecino dejando la pared quística',
          ],
          say: 'En el quiste epidérmico, si solo exprimes la queratina dejando la cápsula, la lesión recidiva en pocos meses. La pared debe salir intacta.',
        },
        {
          cells: [
            'Hidrosadenitis supurativa leve con nódulos',
            'Cese del tabaco más clindamicina tópica',
            'Hacer incisiones y drenajes repetidos en cada nódulo',
          ],
          say: 'En la hidrosadenitis supurativa inicial, incidir los nódulos no soluciona el problema y genera fístulas iatrogénicas. El tratamiento de base es médico.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Oficial',
      title: 'EUNACOM Diciembre 2024 · Pregunta 77',
      recTag: 'EUNACOM Diciembre 2024 · Pregunta 77',
      stem: 'Un paciente joven en buenas condiciones generales consulta por un aumento de volumen interglúteo de 2 cm, doloroso y fluctuante. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta inicial indicada?',
      options: [
        { letter: 'A', text: 'Iniciar tratamiento antibiótico exclusivo' },
        { letter: 'B', text: 'Drenar quirúrgicamente la lesión' },
        { letter: 'C', text: 'Realizar marsupialización inmediata' },
        { letter: 'D', text: 'Tratar empíricamente contra Staphylococcus aureus sin procedimiento' },
        { letter: 'E', text: 'Derivar para resección electiva en tres meses' },
      ],
      correct: 'B',
      explanation: 'El cuadro corresponde a un absceso pilonidal agudo en el surco interglúteo. Todo absceso fluctuante requiere drenaje quirúrgico inmediato para aliviar el dolor y controlar el foco infeccioso.',
      say: {
        stem: 'Analicemos esta pregunta oficial de diciembre de dos mil veinticuatro. Un paciente en buenas condiciones generales presenta un aumento de volumen interglúteo de dos centímetros, doloroso y fluctuante.',
        question: '¿Cuál es la conducta inicial correcta?',
        options: 'Las alternativas son: antibióticos orales solos, drenar quirúrgicamente la lesión, marsupialización inmediata o diferir a tres meses. Piénsalo.',
        answer: 'La respuesta correcta es la B, drenar. Frente a un absceso pilonidal agudo fluctuante, la descompresión mecánica mediante incisión y drenaje es el único tratamiento que resuelve la infección aguda. La opción A y la D fallan porque los antibióticos no penetran la cavidad purulenta cerrada, y la opción C se reserva para tiempos electivos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Oficial',
      title: 'EUNACOM Diciembre 2024 · Pregunta 79',
      recTag: 'EUNACOM Diciembre 2024 · Pregunta 79',
      stem: 'Un paciente joven consulta por un aumento de volumen blando, móvil y no adherido a planos profundos de 3 cm de diámetro en el muslo derecho, de varios meses de evolución, indoloro. ¿Cuál es el estudio inicial más adecuado?',
      question: '¿Cuál es el examen imagenológico de primera línea?',
      options: [
        { letter: 'A', text: 'Ecografía de piel y partes blandas' },
        { letter: 'B', text: 'Resonancia magnética con contraste' },
        { letter: 'C', text: 'Tomografía axial computarizada de muslo' },
        { letter: 'D', text: 'Biopsia por congelación' },
        { letter: 'E', text: 'Radiografía simple de fémur' },
      ],
      correct: 'A',
      explanation: 'Ante una masa superficial típica, blanda, móvil y menor a 5 cm en una extremidad compatible con lipoma, la ecografía de piel y partes blandas es el método diagnóstico inicial de elección por su alta sensibilidad, inocuidad y bajo costo.',
      say: {
        stem: 'Revisemos esta otra pregunta oficial de diciembre de dos mil veinticuatro. Un paciente joven consulta por un aumento de volumen blando, móvil y no adherido en el muslo, de tres centímetros de diámetro, indoloro y sin signos inflamatorios.',
        question: '¿Cuál es el estudio inicial más apropiado?',
        options: 'Las alternativas ofrecen: ecografía de partes blandas, resonancia magnética, tomografía computarizada, biopsia por congelación o radiografía simple. Piénsalo.',
        answer: 'La respuesta correcta es la A, ecografía de piel y partes blandas. Al ser una lesión pequeña menor a cinco centímetros, móvil y claramente superficial, la ecografía confirma su naturaleza lipomatosa sin requerir estudios de alto costo. La resonancia magnética de la alternativa B se reservaría si midiera más de cinco centímetros o fuera profunda.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en patología de partes blandas',
      cards: [
        {
          title: 'Patología pilonidal e hidrosadenitis',
          tag: 'Enfoque quirúrgico',
          kind: 'alert',
          items: [
            {
              t: 'Absceso pilonidal se drena de urgencia',
              d: 'Incisión simple y curetaje; nunca resección en bloque aguda',
              say: 'Grábate esta regla: el absceso pilonidal agudo se drena de inmediato bajo anestesia local. La resección en bloque se realiza de forma electiva semanas después.',
            },
            {
              t: 'Hidrosadenitis es sistémica y médica',
              d: 'Suspender tabaco y tratar con antibióticos combinados',
              say: 'La hidrosadenitis supurativa no se cura con drenajes locales repetidos. Requiere cese estricto del tabaco y terapia antibiótica combinada prolongada.',
            },
          ],
        },
        {
          title: 'Tumores y regla de los 5 centímetros',
          tag: 'Seguridad oncológica',
          kind: 'key',
          items: [
            {
              t: 'Quiste epidérmico exige cápsula íntegra',
              d: 'Revisar siempre la presencia del poro central característico',
              say: 'Para que un quiste epidérmico no recidive, debes resecar la cápsula completa intacta.',
            },
            {
              t: 'Masa mayor a cinco centímetros o profunda',
              d: 'Prohibida la exéresis en APS: pedir RMN y derivar a oncología',
              say: 'Si te llevas una sola idea de hoy: toda masa de partes blandas mayor a cinco centímetros o fija a planos profundos es un sarcoma hasta demostrar lo contrario. Está prohibido operarla en atención primaria: solicita resonancia y deriva a oncología. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Lesiones de Piel y Partes Blandas',
    root: N(
      'start',
      'Aumento de volumen en partes blandas',
      'Evaluación de signos inflamatorios y topografía',
      'Comenzamos evaluando si hay signos inflamatorios agudos o si se trata de una tumefacción indolora.',
      [
        'Interglúteo doloroso',
        N(
          'alert',
          'Absceso pilonidal agudo',
          'Masa fluctuante dolorosa en surco natal',
          'Si hay una masa fluctuante y eritematosa en el pliegue sacrococcígeo, se trata de un absceso pilonidal agudo.',
          [
            'Conducta inicial',
            N(
              'do',
              'Drenaje quirúrgico simple urgente',
              'Incisión longitudinal y curetaje de pelos',
              'El tratamiento es el drenaje simple bajo anestesia local en urgencias. Nunca reseques en bloque durante el cuadro agudo.',
              [
                'Evolución crónica',
                N(
                  'ok',
                  'Exéresis electiva diferida',
                  'Cirugía programada en frío si persiste fístula',
                  'Tras enfriar el cuadro, si queda una fístula crónica, se programa la resección electiva con piel sana.'
                )
              ]
            )
          ]
        )
      ],
      [
        'Pliegues axilares o inguinales',
        N(
          'q',
          'Hidrosadenitis supurativa recurrente',
          'Nódulos dolorosos, comedones dobles y fístulas',
          'Si el cuadro es crónico, bilateral y compromete pliegues axilares o inguinales, sospechamos hidrosadenitis supurativa.',
          [
            'Hurley I o II',
            N(
              'do',
              'Cese tabáquico y antibióticos',
              'Clindamicina tópica o tetraciclinas orales',
              'Indicamos suspensión del tabaco y terapia antibiótica prolongada combinada según el estadio de Hurley.'
            )
          ],
          [
            'Hurley III severo',
            N(
              'refer',
              'Cirugía resectiva amplia',
              'Destechamiento o resección de áreas con fístulas',
              'Los estadios con cicatrices severas requieren intervención quirúrgica reconstructiva especializada.'
            )
          ]
        )
      ],
      [
        'Masa indolora en extremidad o tronco',
        N(
          'q',
          'Evaluación de banderas rojas',
          'Mayor a cinco centímetros o localización subfascial',
          'Si la masa es indolora, evaluamos si mide más de cinco centímetros, es profunda o crece rápidamente.',
          [
            'Mayor a cinco cm o profunda',
            N(
              'alert',
              'Sospecha de sarcoma de partes blandas',
              'Prohibida la exéresis en atención primaria',
              'Ante cualquier bandera roja está proscrita la cirugía ambulatoria menor. Solicitamos resonancia magnética con contraste.',
              [
                'Confirmación',
                N(
                  'refer',
                  'Derivación para biopsia Tru-Cut',
                  'Evaluación por equipo oncológico especializado',
                  'El equipo oncológico realiza la biopsia percutánea y planifica la resección con márgenes amplios.'
                )
              ]
            )
          ],
          [
            'Menor a cinco cm y móvil',
            N(
              'ok',
              'Masa benigna superficial típica',
              'Lipoma subcutáneo blando o quiste con poro',
              'Si es superficial, móvil y menor a cinco centímetros, se confirma ecográficamente y se programa enucleación electiva.',
              [
                'Tratamiento',
                N(
                  'do',
                  'Exéresis en pabellón menor',
                  'Extirpación con cápsula íntegra en APS',
                  'Se realiza la exéresis en policlínico asegurando la extracción completa de la cápsula quística.'
                )
              ]
            )
          ]
        )
      ]
    ),
  },
};
