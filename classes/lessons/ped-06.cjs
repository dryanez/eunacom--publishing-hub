// Clase 18.06 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Laringitis aguda obstructiva, croup viral, virus parainfluenza, score de Taussig, dexametasona oral, adrenalina racémica nebulizada y diagnósticos diferenciales críticos',
      say: 'Bienvenidos a la clase sobre laringitis aguda obstructiva o croup en pediatría, uno de los motivos de consulta más frecuentes en el servicio de urgencia infantil durante los meses de otoño e invierno. En esta sesión aprenderemos a reconocer la tríada clínica patognomónica, estratificar la gravedad mediante los grados clínicos ministeriales, indicar oportunamente la dexametasona y la adrenalina racémica respetando el período de observación por efecto rebote, y diferenciar con precisión la epiglotitis y la traqueítis bacteriana. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo obstructivo subglótico',
      title: 'Inflamación Subglótica y Resistencia al Flujo Aéreo',
      nodes: [
        { id: 'par', col: 0, row: 1, k: 'start', t: 'Infección viral de laringe', s: 'Infección respiratoria alta por parainfluenza que invade epitelio subglótico' },
        { id: 'ede', col: 1, row: 1, k: 'mech', t: 'Edema de mucosa subglótica', s: 'Inflamación y congestión en el anillo cricoides inextensible' },
        { id: 'res', col: 2, row: 1, k: 'effect', t: 'Reducción lumina exponencial', s: 'Un milímetro de edema reduce el área de la vía aérea en un 75% en el lactante' },
        { id: 'est', col: 3, row: 1, k: 'alert', t: 'Turbulencia y estridor inspiratorio', s: 'Flujo aéreo turbulento que genera tos perruna, disfonía y estridor' },
      ],
      edges: [
        { from: 'par', to: 'ede', label: 'invasión ciliar' },
        { from: 'ede', to: 'res', label: 'ley de poiseuille' },
        { from: 'res', to: 'est', label: 'flujo turbulento' },
      ],
      steps: [
        {
          show: ['par', 'ede'],
          note: 'Invasión viral e inflamación en el anillo cricoides rígido',
          say: 'El virus parainfluenza coloniza la mucosa laríngea desencadenando una intensa respuesta inflamatoria en la región subglótica, justo a nivel del cartílago cricoides, la única estructura cartilaginosa anular completa e inextensible de la vía aérea superior.',
        },
        {
          show: ['res', 'est'],
          note: 'Efecto Poiseuille: aumento crítico de la resistencia inspiratoria',
          say: 'Debido a la ley de Poiseuille, apenas un milímetro de edema en la subglotis del lactante reduce el área luminal en tres cuartas partes y multiplica por dieciséis la resistencia al flujo aéreo, generando turbulencia acústica con estridor y tos perruna.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología y anatomía',
      title: 'Virus Parainfluenza y la Anatomía Crítica de la Laringe Infantil',
      cards: [
        {
          title: 'Agentes Virológicos Causales',
          tag: 'Parainfluenza tipo uno como líder indiscutido',
          kind: 'key',
          items: [
            {
              t: 'Virus parainfluenza tipo uno y dos',
              d: 'Responsable de más del 70% de todos los casos de croup viral agudo en pediatría',
              say: 'El virus parainfluenza tipo uno es el causante de más del setenta por ciento de los cuadros de laringitis aguda obstructiva infantil, presentándose en brotes epidémicos bien definidos en otoño y primavera.',
            },
            {
              t: 'Otros virus implicados en el croup',
              d: 'Virus respiratorio sincicial, adenovirus, virus influenza y metapneumovirus',
              say: 'Con menor frecuencia participan el virus respiratorio sincicial, el adenovirus y la influenza, estos dos últimos capaces de provocar formas inflamatorias más severas y prolongadas.',
            },
          ],
        },
        {
          title: 'Peculiaridades Anatómicas del Lactante',
          tag: 'Cartílago cricoides como embudo fisiológico',
          kind: 'criteria',
          items: [
            {
              t: 'La subglotis es la zona más estrecha en niños',
              d: 'A diferencia del adulto cuya zona más estrecha es la glotis, en el niño es el anillo cricoides',
              say: 'En el paciente pediátrico menor de ocho años, el punto más angosto de toda la vía aérea no son las cuerdas vocales, sino la región subglótica delimitada rígidamente por el anillo cricoides.',
            },
            {
              t: 'Círculo vicioso por agitación y llanto',
              d: 'El llanto vigoroso aumenta la presión negativa intratorácica y colapsa la vía aérea flexible',
              say: 'Cuando el niño llora o se agita, la presión inspiratoria negativa generada colapsa activamente las estructuras supraglóticas blandas, aumentando el edema y cerrando aún más la luz laríngea.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de la obstrucción alta',
      title: 'La Tríada Cardinal del Croup: Tos Perruna, Disfonía y Estridor',
      cards: [
        {
          title: 'Manifestaciones Clínicas Típicas',
          tag: 'Presentación brusca de predominio nocturno',
          kind: 'key',
          items: [
            {
              t: 'Disfonía o afonía de inicio laríngeo',
              d: 'Voz ronca, apagada o pérdida del llanto normal por edema en cuerdas vocales',
              say: 'La inflamación de las cuerdas vocales verdaderas y falsas altera su vibración fisiológica, produciendo una disfonía característica con llanto ronco o apagado.',
            },
            {
              t: 'Tos perruna o metálica característica',
              d: 'Tos seca, resonante, similar al ladrido de un perro o al graznido de una foca',
              say: 'La tos es seca, metálica y resonante, tradicionalmente descrita como tos perruna o tos de foca, ocasionada por el paso forzado del aire a través del canal subglótico edematoso.',
            },
          ],
        },
        {
          title: 'Estridor Laríngeo y Progresión Nocturna',
          tag: 'Inspiratorio en etapas precoces y bifásico en severidad',
          kind: 'alert',
          items: [
            {
              t: 'Estridor de tono agudo inspiratorio',
              d: 'Sonido musical inspiratorio audible; inicialmente solo con agitación y luego en reposo',
              say: 'El estridor es un ruido respiratorio inspiratorio de tono rudo que al comienzo se escucha únicamente al llorar o agitarse, pero que al aumentar el edema se vuelve audible en reposo.',
            },
            {
              t: 'Exacerbación típica durante la madrugada',
              d: 'Empeoramiento nocturno por disminución del cortisol endógeno y sequedad del ambiente frío',
              say: 'Los padres consultan con frecuencia durante la madrugada debido a un despertar súbito del niño con tos sofocante y estridor, favorecido por el descenso del cortisol circadiano y el aire frío de la noche.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación clínica ministerial',
      title: 'Clasificación de Severidad y Grados de Laringitis Aguda (Taussig)',
      cards: [
        {
          title: 'Grado Uno y Grado Dos',
          tag: 'Formas leves a moderadas de manejo habitual',
          kind: 'criteria',
          items: [
            {
              t: 'Grado uno o laringitis leve',
              d: 'Disfonía y tos perruna; estridor inspiratorio presente únicamente al llorar o agitarse, sin tiraje en reposo',
              say: 'El grado uno o leve se define por disfonía y tos perruna con estridor presente solo cuando el niño llora o se inquieta, manteniéndose sin estridor ni esfuerzo muscular en reposo.',
            },
            {
              t: 'Grado dos o laringitis moderada',
              d: 'Estridor inspiratorio continuo en reposo, disfonía, tos perruna y tiraje intercostal o subcostal leve a moderado',
              say: 'El grado dos o moderado se caracteriza porque el estridor inspiratorio se ausculta en reposo absoluto, acompañado de tiraje intercostal y subcostal moderado.',
            },
          ],
        },
        {
          title: 'Grado Tres y Grado Cuatro',
          tag: 'Emergencias con riesgo de falla respiratoria inminente',
          kind: 'alert',
          items: [
            {
              t: 'Grado tres o laringitis severa',
              d: 'Estridor inspiratorio y espiratorio (bifásico) en reposo, tiraje universal severo, palidez, desasosiego y agitación',
              say: 'El grado tres o severo presenta estridor bifásico inspiratorio y espiratorio, retracción universal intensa con aleteo nasal y signos de hipoxia con agitación psicomotriz.',
            },
            {
              t: 'Grado cuatro o inminencia de paro respiratorio',
              d: 'Cianosis, somnolencia, palidez extrema, bradipnea y desaparición del estridor por agotamiento muscular',
              say: 'El grado cuatro es la fase premórbida terminal: el niño se agota, deja de emitir estridor por flujo casi nulo, se torna cianótico y bradipneico requiriendo soporte ventilatorio inmediato.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar terapéutico antiinflamatorio',
      title: 'Farmacología de Rescate: Dexametasona Oral en Dosis Única',
      cards: [
        {
          title: 'Dexametasona: Evidencia y Dosificación',
          tag: 'El estándar de oro en todos los grados de croup',
          kind: 'pharma',
          items: [
            {
              t: 'Dosis oral estándar de 0.15 a 0.6 mg/kg',
              d: 'Dosis única oral de dexametasona en solución o comprimido triturado; máxima eficacia antiinflamatoria',
              say: 'La dexametasona oral en dosis única de cero coma quince a cero coma seis miligramos por kilo es el fármaco de elección indiscutido para todos los grados de laringitis, incluso en el grado uno.',
            },
            {
              t: 'Inicio de acción y vida media biológica prolongada',
              d: 'Comienza su efecto a las 2 a 3 horas con una vida media tisular de 36 a 72 horas, cubriendo todo el cuadro',
              say: 'La dexametasona inicia su acción antiinflamatoria a las dos horas de ingerida y posee una vida media biológica prolongada de hasta tres días, protegiendo al niño durante todo el período crítico.',
            },
          ],
        },
        {
          title: 'Vías Alternativas y Otros Corticoides',
          tag: 'Intramuscular, endovenosa o budesonida nebulizada',
          kind: 'key',
          items: [
            {
              t: 'Vía intramuscular o endovenosa en vómitos reiterados',
              d: 'Si el paciente vomita la vía oral o presenta grado tres severo, administrar dexametasona intramuscular',
              say: 'Si el paciente presenta vómitos reiterados o dificultad extrema para deglutir en grados tres, se administra la misma dosis de dexametasona por vía intramuscular o endovenosa.',
            },
            {
              t: 'Budesonida nebulizada en casos seleccionados',
              d: 'Dos miligramos nebulizados; útil como alternativa si no es posible administrar dexametasona sistémica',
              say: 'La budesonida nebulizada a dosis de dos miligramos es una alternativa válida si existe rechazo absoluto a la vía oral y se busca evitar la inyección intramuscular en niños reactivos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Acción rápida de vasoconstricción',
      title: 'Adrenalina Racémica Nebulizada y el Efecto Rebote',
      cards: [
        {
          title: 'Indicación y Farmacodinamia de la Adrenalina',
          tag: 'Uso obligatorio en grados dos, tres y cuatro',
          kind: 'pharma',
          items: [
            {
              t: 'Vasoconstricción alfa uno rápida y reducción del edema',
              d: 'Estimulación alfa-1 adrenérgica que contrae capilares submucosos en 10 a 30 minutos',
              say: 'La adrenalina nebulizada actúa sobre los receptores alfa uno de la mucosa subglótica produciendo vasoconstricción capilar intensa, reduciendo el edema y aliviando el estridor en menos de treinta minutos.',
            },
            {
              t: 'Dosificación de adrenalina racémica versus corriente',
              d: 'Racémica al 2.25%: 0.05 mL/kg (máximo 0.5 mL) en 3 mL de suero. Corriente 1:1.000: 0.5 mL/kg (máximo 5 mL)',
              say: 'Se puede utilizar adrenalina racémica al dos coma veinticinco por ciento a dosis de cero coma cero cinco mililitros por kilo, o adrenalina corriente uno a mil a cero coma cinco mililitros por kilo nebulizada con oxígeno.',
            },
          ],
        },
        {
          title: 'Regla de Seguridad: Efecto Rebote a las Dos Horas',
          tag: 'Observación estricta obligatoria en Urgencia',
          kind: 'alert',
          items: [
            {
              t: 'Riesgo de vasodilatación refleja y reaparición de disnea',
              d: 'Al metabolizarse la adrenalina a los 90 a 120 minutos, el edema puede reaparecer de forma intensa',
              say: 'La acción de la adrenalina es fugaz y cede a las dos horas. Al terminar su efecto puede ocurrir vasodilatación de rebote con reaparición violenta del estridor y la insuficiencia respiratoria.',
            },
            {
              t: 'Mínimo de dos horas de observación antes del alta',
              d: 'Todo niño nebulizado con adrenalina debe permanecer monitorizado en urgencia al menos 2 horas',
              say: 'En el EUNACOM es un mandato de seguridad: todo lactante que recibe adrenalina nebulizada debe permanecer en observación médica por un mínimo estricto de dos horas antes de autorizar el alta a domicilio.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio imagenológico',
      title: 'Radiografía Cervical: Signo del Campanario y Cuándo Omitirla',
      cards: [
        {
          title: 'Signo Radiológico Patognomónico',
          tag: 'Estrechamiento simétrico de la columna de aire subglótica',
          kind: 'key',
          items: [
            {
              t: 'Signo de la aguja, torre o campanario en proyección anteroposterior',
              d: 'Pérdida de los hombros normales de la tráquea subglótica, afilándose hacia las cuerdas vocales',
              say: 'En la radiografía anteroposterior de cuello, el edema subglótico borra los ángulos laterales de la tráquea, dibujando un estrechamiento progresivo conocido clásicamente como signo de la torre, del lápiz o del campanario.',
            },
            {
              t: 'Proyección lateral para evaluar la epiglotis',
              d: 'Permite confirmar que la epiglotis es delgada y móvil, descartando el engrosamiento en pulgar de la epiglotitis',
              say: 'La placa lateral permite visualizar una epiglotis normal y delgada con espacio retrofaríngeo conservado, diferenciando con nitidez el croup de la peligrosa epiglotitis bacteriana.',
            },
          ],
        },
        {
          title: 'No Retrasar el Tratamiento por la Radiografía',
          tag: 'Prioridad clínica absoluta sobre las imágenes',
          kind: 'alert',
          items: [
            {
              t: 'La radiografía no es obligatoria para iniciar terapia',
              d: 'En el paciente con estridor moderado a severo, la prioridad es nebulizar adrenalina y administrar corticoide',
              say: 'Jamás se debe enviar a un niño con dificultad respiratoria moderada o severa a rayos sin haber iniciado el tratamiento, ya que la manipulación o el llanto en el servicio de radiología pueden gatillar asfixia súbita.',
            },
            {
              t: 'Indicaciones formales de imagen cervical',
              d: 'Evolución atípica, falta de respuesta al tratamiento médico o sospecha de cuerpo extraño o traqueítis',
              say: 'La radiografía de cuello se reserva para cuadros que no responden a la dexametasona y adrenalina, sospecha de cuerpo extraño radiopaco o sospecha clínica de traqueítis invasiva.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial de urgencia',
      title: 'Diagnóstico Diferencial del Estridor Agudo en la Infancia',
      head: ['Entidad Clínica', 'Etiología y Estado', 'Clínica Cardinal', 'Manejo Inicial'],
      rows: [
        {
          cells: ['Laringitis Viral (Croup)', 'Parainfluenza 1 / Estado conservado', 'Tos perruna, disfonía, estridor nocturno', 'Dexametasona oral más adrenalina racémica nebulizada'],
          say: 'El croup viral por parainfluenza presenta buen estado general con tos perruna y estridor, respondiendo a dexametasona y adrenalina racémica.',
        },
        {
          cells: ['Epiglotitis Aguda', 'Haemophilus influenzae b / Séptico', 'Sialorrea, posición en trípode, sin tos', 'Vía aérea en pabellón más cefalosporina endovenosa'],
          say: 'La epiglotitis bacteriana muestra aspecto séptico tóxico, posición de trípode y babeo sin tos, requiriendo intubación inmediata en pabellón.',
        },
        {
          cells: ['Traqueítis Bacteriana', 'Staphylococcus aureus / Fiebre alta', 'Croup refractario a adrenalina, pus traqueal', 'Intubación endotraqueal y cloxacilina con cefotaxima'],
          say: 'La traqueítis bacteriana debuta como un croup que no responde a adrenalina, con fiebre alta y secreción purulenta espesa en tráquea.',
        },
        {
          cells: ['Cuerpo Extraño Laríngeo', 'Aspiración mecánica / Afebril', 'Síndrome de penetración con afonía brusca', 'Maniobras de desobstrucción o broncoscopía rígida'],
          say: 'El cuerpo extraño laríngeo es súbito y afbril mientras el niño come o juega, exigiendo maniobras inmediatas o laringoscopía de rescate.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia pediátrica mayor',
      title: 'Epiglotitis Aguda: Clínica en Trípode y Contraindicación del Bajalenguas',
      cards: [
        {
          title: 'Clínica Cardinal de la Epiglotitis',
          tag: 'Infección bacteriana fulminante por Haemophilus o Estreptococo',
          kind: 'alert',
          items: [
            {
              t: 'Las cuatro D de la epiglotitis clásica',
              d: 'Disfagia severa, Drooling (sialorrea profusa), Disfonía apagada en papa caliente y Distress respiratorio',
              say: 'La epiglotitis aguda bacteriana se manifiesta por la clásica tétrada: disfagia intensa, salivación o babeo constante, voz apagada en papa caliente y dificultad respiratoria progresiva sin tos.',
            },
            {
              t: 'Posición espontánea en trípode',
              d: 'Niño sentado inclinado hacia adelante con el mentón protruido y la boca abierta para alinear la glotis',
              say: 'El paciente adopta espontáneamente la posición de trípode, inclinándose hacia adelante con el cuello en hiperextensión y la boca abierta para maximizar el paso de aire a través de la laringe tumefacta.',
            },
          ],
        },
        {
          title: 'Regla de Oro: Prohibición Absoluta del Bajalenguas',
          tag: 'Riesgo inminente de laringoespasmo reflejo y muerte',
          kind: 'criteria',
          items: [
            {
              t: 'Jamás examinar la orofaringe con bajalenguas en el box',
              d: 'El contacto mecánico con la faringe posterior puede desatar un espasmo laríngeo reflejo total irreversible',
              say: 'En el box de urgencias está formalmente contraindicado introducir un bajalenguas o forzar el decúbito supino, ya que este estímulo puede desencadenar un laringoespasmo masivo y paro respiratorio inmediato.',
            },
            {
              t: 'Manejo en pabellón quirúrgico bajo anestesia',
              d: 'Mantener en brazos de los padres, trasladar a pabellón con carro de paro e intubar bajo visión directa',
              say: 'El niño debe permanecer tranquilo en brazos de sus padres con oxígeno por máscara próxima y ser trasladado de urgencia a quirófano para intubación orotraqueal por especialista bajo anestesia general.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Sobreinfección bacteriana grave',
      title: 'Traqueítis Bacteriana: Croup Pseudomembranoso Refractario a Adrenalina',
      cards: [
        {
          title: 'Fisiopatología y Agentes Invasivos',
          tag: 'Staphylococcus aureus y secreciones purulentas',
          kind: 'alert',
          items: [
            {
              t: 'Croup refractario que evoluciona con fiebre tóxica',
              d: 'Niño con diagnóstico inicial de laringitis que empeora con fiebre alta y no responde a adrenalina ni corticoides',
              say: 'La traqueítis bacteriana es una infección invasiva de la mucosa traqueal, frecuentemente por estafilococo dorado, que simula un croup viral pero evoluciona con fiebre alta y no responde a la adrenalina.',
            },
            {
              t: 'Necrosis mucosa y formación de pseudomembranas',
              d: 'Descamación epitelial con placas fibrinopurulentas que ocluyen mecánicamente el lumen traqueal',
              say: 'La invasión bacteriana produce necrosis de la mucosa con formación de pseudomembranas mucopurulentas densas que amenazan con ocluir por completo la tráquea distal.',
            },
          ],
        },
        {
          title: 'Conducta Médica Inmediata en UCI Pediátrica',
          tag: 'Asegurar vía aérea y antibióticos sistémicos',
          kind: 'criteria',
          items: [
            {
              t: 'Intubación orotraqueal y aspiración de tapones',
              d: 'Requiere intubación electiva en unidad crítica para lavado y aspiración mecánica de secreciones espesas',
              say: 'El paciente debe ser trasladado de urgencia a cuidados intensivos para intubación traqueal programada, permitiendo la aspiración directa de los tapones purulentos que provocan la asfixia.',
            },
            {
              t: 'Esquema antibiótico parenteral combinado',
              d: 'Cloxacilina o vancomicina asociada a cefotaxima o ceftriaxona endovenosa por diez a catorce días',
              say: 'Se inicia tratamiento antibiótico endovenoso de amplio espectro combinando cloxacilina o vancomicina con una cefalosporina de tercera generación para cubrir estafilococo y bacilos gramnegativos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Entidad clínica recurrente',
      title: 'Croup Espasmódico: Hipersensibilidad Laríngea y Enfoque Ambulatorio',
      cards: [
        {
          title: 'Características Clínicas del Croup Espasmódico',
          tag: 'Despertar súbito afebril en niño atópico',
          kind: 'key',
          items: [
            {
              t: 'Despertar nocturno brusco sin pródromo catarral',
              d: 'Cuadro repetitivo, apirético o con febrícula leve, en niños con atopia o antecedentes familiares',
              say: 'El croup espasmódico se manifiesta por un despertar nocturno brusco con tos perruna y estridor en un niño previamente sano sin fiebre ni catarro previo, asociado a hiperreactividad laríngea.',
            },
            {
              t: 'Fisiopatología alérgica y neurovegetativa',
              d: 'Edema subglótico no infeccioso transitorio gatillado por reflujo gastroesofágico o alérgenos ambientales',
              say: 'La base patogénica involucra hiperreactividad neuromuscular y edema transitorio sin invasión viral destructiva, gatillado a menudo por microaspiración nocturna o aeroalérgenos.',
            },
          ],
        },
        {
          title: 'Respuesta al Manejo Ambiental y Corticoides',
          tag: 'Eficacia del aire frío y dosis oral única',
          kind: 'criteria',
          items: [
            {
              t: 'Resolución rápida con aire fresco y vapor húmedo',
              d: 'Suele remitir espontáneamente al exponer al niño al frío nocturno o vapor del baño; tranquilizar a la familia',
              say: 'El espasmo suele ceder espontáneamente al abrir la ventana y respirar aire fresco nocturno o con vapor tibio, aliviando la angustia familiar mediante medidas sencillas de confort.',
            },
            {
              t: 'Dexametasona oral en dosis única para prevenir recidivas',
              d: 'Una dosis de dexametasona oral corta el episodio y reduce la probabilidad de recurrencia en noches sucesivas',
              say: 'Una dosis oral de dexametasona administrada en el episodio agudo aborta la inflamación y previene que el niño vuelva a despertar con estridor en las noches siguientes.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Manejo de la Laringitis Aguda según Grado Clínico',
      say: 'Revisemos el algoritmo oficial paso a paso para clasificar la severidad de la laringitis aguda e instaurar el tratamiento farmacológico inmediato.',
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Laringitis Grado Dos y Regla de Observación por Adrenalina',
      stem: 'Un niño de 18 meses consulta en el Servicio de Urgencia por disfonía, tos perruna y estridor inspiratorio en reposo de 4 horas de evolución. Se cataloga como laringitis aguda grado II. Se administra dexametasona oral y una nebulización con adrenalina racémica, logrando una rápida mejoría sintomática con desaparición del estridor a los 20 minutos.',
      question: '¿Cuál es la conducta médica correcta respecto al destino del paciente?',
      options: [
        { letter: 'A', text: 'Alta inmediata a domicilio con amoxicilina oral' },
        { letter: 'B', text: 'Mantener en observación en el Servicio de Urgencia por un mínimo de 2 horas para descartar efecto rebote' },
        { letter: 'C', text: 'Hospitalización inmediata en UCI pediátrica' },
        { letter: 'D', text: 'Indicar nueva nebulización con adrenalina cada 30 minutos de forma reglada' },
        { letter: 'E', text: 'Alta con indicación de frío ambiental e inhalador de salbutamol' },
      ],
      correct: 'B',
      explanation: 'La adrenalina nebulizada produce vasoconstricción mucosa subglótica potente y rápida, pero su efecto farmacológico es transitorio, con una duración promedio de 90 a 120 minutos. Al agotarse la estimulación alfa-1, existe un riesgo demostrado de "efecto rebote", caracterizado por vasodilatación refleja y reaparición súbita del edema laríngeo con estridor y dificultad respiratoria severa. Por protocolo ministerial de seguridad pediátrica, todo paciente que recibe adrenalina racémica debe permanecer en observación monitorizada en Urgencia por un mínimo de 2 horas antes de autorizar el alta ambulatoria.',
      say: {
        stem: 'Niño de dieciocho meses con laringitis grado dos que recibe dexametasona y adrenalina racémica presentando rápida mejoría con desaparición del estridor.',
        question: '¿Cuál es la conducta médica correcta respecto al destino del paciente?',
        options: 'La opción A alta inmediata con amoxicilina. La B mantener en observación en urgencia por un mínimo de dos horas para descartar efecto rebote. La C cuidados intensivos. La D adrenalina reglada cada media hora. La E alta con salbutamol. Recuerda la farmacocinética de la adrenalina.',
        answer: 'La respuesta correcta es la B. La adrenalina puede provocar efecto rebote a las dos horas por lo que la observación durante ese período es una regla de oro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Laringitis Grado Uno y Beneficio de Dexametasona Oral',
      stem: 'Un lactante de 14 meses presenta cuadro de inicio brusco de disfonía y tos perruna. Al examen físico en reposo no se ausculta estridor, pero al momento de llorar y agitarse durante la otoscopía se hace claramente audible un estridor inspiratorio. No presenta tiraje ni cianosis.',
      question: '¿Cuál es el diagnóstico de severidad y el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Laringitis grado II; adrenalina nebulizada y hospitalización' },
        { letter: 'B', text: 'Laringitis grado I; Dexametasona oral (0.15 a 0.6 mg/kg) en dosis única y manejo domiciliario' },
        { letter: 'C', text: 'Laringitis grado I; manejo expectante exclusivo sin medicamentos' },
        { letter: 'D', text: 'Epiglotitis aguda; intubación orotraqueal urgente' },
        { letter: 'E', text: 'Bronquiolitis aguda; Salbutamol MDI con aerocámara' },
      ],
      correct: 'B',
      explanation: 'El estridor inspiratorio que se presenta únicamente con el llanto o la agitación, manteniéndose ausente en reposo y sin retracciones torácicas basales, clasifica al paciente como Laringitis Aguda Grado I (Leve). Múltiples ensayos clínicos y las directrices del MINSAL respaldan el uso universal de Dexametasona oral (0.15 a 0.6 mg/kg en dosis única) en laringitis grado I, ya que acorta la duración de los síntomas, previene la progresión a grados moderados o severos y reduce las reconsultas en los servicios de urgencia.',
      say: {
        stem: 'Lactante de catorce meses con disfonía y tos perruna que presenta estridor inspiratorio únicamente al llorar sin estridor ni tiraje en reposo.',
        question: '¿Cuál es el diagnóstico de severidad y el tratamiento de elección?',
        options: 'La opción A plantea grado dos con adrenalina y hospitalización. La B laringitis grado uno con dexametasona oral en dosis única y manejo domiciliario. La C manejo expectante sin medicamentos. La D epiglotitis. La E bronquiolitis con salbutamol. Analiza el grado clínico.',
        answer: 'La respuesta correcta es la B. El estridor que solo aparece con llanto define grado uno leve y se trata con dexametasona oral en dosis única.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Epiglotitis Aguda y Contraindicación Absoluta de Manipulación',
      stem: 'Un niño de 3 años es traído a Urgencias en mal estado general. Presenta fiebre de 39.8°C, aspecto tóxico, disfagia severa con imposibilidad para tragar saliva (sialorrea profusa), voz apagada en "papa caliente" y adopta espontáneamente una postura sentado inclinado hacia adelante con el cuello en hiperextensión (posición de trípode). No tose.',
      question: '¿Cuál es la sospecha diagnóstica y la principal contraindicación en el box de urgencias?',
      options: [
        { letter: 'A', text: 'Croup viral; contraindicada la adrenalina nebulizada' },
        { letter: 'B', text: 'Epiglotitis aguda; está formalmente contraindicado examinar la orofaringe con bajalenguas' },
        { letter: 'C', text: 'Laringomalacia congénita; contraindicada la sedación profunda' },
        { letter: 'D', text: 'Absceso periamigdalino; contraindicada la punción diagnóstica' },
        { letter: 'E', text: 'Cuerpo extraño esofágico; contraindicada la radiografía de tórax' },
      ],
      correct: 'B',
      explanation: 'La presentación con fiebre alta, aspecto tóxico, disfagia severa con sialorrea, ausencia de tos y adopción espontánea de la posición de trípode es característica de Epiglotitis Aguda, celulitis bacteriana invasiva de la supraglotis. En el box de urgencia está TERMINANTEMENTE CONTRAINDICADO introducir un bajalenguas o examinar agresivamente la faringe, dado que el contacto físico o el llanto desencadenan un laringoespasmo reflejo total irreversible con asfixia inmediata. Se debe mantener al niño calmado en brazos de sus padres y trasladar a pabellón para asegurar la vía aérea bajo anestesia general.',
      say: {
        stem: 'Niño de tres años séptico con fiebre muy alta disfagia con sialorrea voz en papa caliente y posición en trípode sin toser.',
        question: '¿Cuál es la sospecha diagnóstica y la principal contraindicación en el box de urgencias?',
        options: 'La opción A propone croup viral contraindicando adrenalina. La B epiglotitis aguda estando formalmente contraindicado examinar la orofaringe con bajalenguas. La C laringomalacia. La D absceso periamigdalino. La E cuerpo extraño. Prioriza la seguridad de la vía aérea.',
        answer: 'La respuesta correcta es la B. Es una epiglotitis aguda y está terminantemente prohibido usar bajalenguas en el box por riesgo inminente de laringoespasmo reflejo fatal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Etiología Viral Hegemónica del Croup',
      stem: '¿Cuál es el principal agente etiológico responsable de la Laringitis Aguda Obstructiva en la edad pediátrica?',
      options: [
        { letter: 'A', text: 'Streptococcus pneumoniae' },
        { letter: 'B', text: 'Virus Parainfluenza tipo 1' },
        { letter: 'C', text: 'Haemophilus influenzae tipo b' },
        { letter: 'D', text: 'Virus Herpes Simple tipo 1' },
        { letter: 'E', text: 'Mycoplasma pneumoniae' },
      ],
      correct: 'B',
      explanation: 'El Virus Parainfluenza (principalmente el serotipo 1, seguido en menor frecuencia por los tipos 2 y 3) es el responsable de más del 70% de todos los episodios de laringitis aguda obstructiva (croup viral) en la edad pediátrica. Streptococcus pneumoniae es la causa más común de neumonía y otitis bacteriana, Haemophilus influenzae b causa epiglotitis aguda bacteriana, Virus Herpes Simple produce gingivoestomatitis herpética y Mycoplasma pneumoniae causa neumonía atípica en escolares y adolescentes.',
      say: {
        stem: 'Pregunta directa sobre el agente causal predominante en la laringitis aguda obstructiva pediátrica.',
        question: '¿Cuál es el principal patógeno responsable del croup viral?',
        options: 'La opción A propone neumococo. La B virus Parainfluenza tipo uno. La C Haemophilus influenzae b. La D herpes simple. La E Mycoplasma pneumoniae. Identifica el virus respiratorio hegemónico.',
        answer: 'La respuesta correcta es la B. El virus Parainfluenza tipo uno causa más del setenta por ciento de los casos de laringitis obstructiva en niños.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Laringitis Aguda y Vía Aérea Superior',
      cards: [
        {
          title: 'Manejo Farmacológico Escalonado',
          tag: 'Dexametasona siempre y adrenalina según reposo',
          kind: 'pharma',
          items: [
            {
              t: 'Dexametasona oral en todos los grados de croup',
              d: 'Dosis única de 0.15 a 0.6 mg/kg vía oral; reduce progresiones y reconsultas incluso en grado leve',
              say: 'Recuerden que la dexametasona oral se administra en todos los grados de laringitis, incluso en el grado uno con estridor solo al llanto, para evitar que progrese a grados moderados o severos.',
            },
            {
              t: 'Adrenalina nebulizada exige dos horas de observación',
              d: 'Estridor en reposo (grado dos o más) indica adrenalina; no dar el alta antes de dos horas por efecto rebote',
              say: 'Si hay estridor en reposo se nebuliza adrenalina racémica, siendo obligatorio mantener al paciente en observación médica durante dos horas completas antes de evaluar su alta.',
            },
          ],
        },
        {
          title: 'Alertas Rojas en el Examen',
          tag: 'Epiglotitis y signos de alarma',
          kind: 'alert',
          items: [
            {
              t: '¡Cero bajalenguas ante sospecha de epiglotitis!',
              d: 'Fiebre alta, aspecto tóxico, sialorrea y posición de trípode prohíben la exploración bucal en box',
              say: 'Jamás olviden la contraindicación absoluta del bajalenguas ante fiebre alta con sialorrea y posición de trípode, ya que gatilla paro respiratorio instantáneo.',
            },
            {
              t: 'Croup refractario sugiere traqueítis bacteriana',
              d: 'Falta de respuesta a adrenalina más fiebre elevada obliga a sospechar infección por Staphylococcus aureus',
              say: 'Si un croup no mejora tras adrenalina y agrega fiebre tóxica, sospechen de inmediato traqueítis bacteriana. Nos vemos en la próxima clase para revisar neumonía adquirida en la comunidad.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de la Laringitis Aguda Obstructiva en Pediatría',
    root: N(
      'start',
      'Lactante o Preescolar con Disfonía, Tos Perruna y Sospecha de Laringitis Aguda',
      'Evaluación de signos vitales, estado general, presencia de estridor en reposo y signos de dificultad respiratoria',
      'Iniciamos la evaluación clínica categorizando la presencia de estridor y retracción torácica para definir el grado de severidad.',
      [
        'Estridor inspiratorio solo con llanto o agitación · Sin tiraje en reposo (Grado I · Leve)',
        N(
          'ok',
          'Laringitis Grado I: Manejo Ambulatorio',
          'Dexametasona oral 0.15 a 0.6 mg/kg dosis única · Frío ambiental o vapor tibio · Educación en signos de alarma y alta a domicilio',
          'En grado uno indicamos dexametasona oral en dosis única y medidas de frío ambiental con alta y control si empeora.',
        ),
      ],
      [
        'Estridor inspiratorio continuo en reposo · Tiraje intercostal moderado (Grado II · Moderado)',
        N(
          'do',
          'Laringitis Grado II: Adrenalina y Dexametasona en Urgencia',
          'Dexametasona oral 0.15 a 0.6 mg/kg más Nebulización con Adrenalina racémica o corriente con flujo de oxígeno',
          'En grado dos administramos dexametasona y nebulizamos adrenalina racémica con oxígeno en la sala de urgencias.',
          [
            'Respuesta clínica favorable a los 60 a 120 minutos: Desaparición del estridor en reposo',
            N(
              'ok',
              'Completar Observación de Dos Horas y Alta',
              'Mantener en observación por mínimo 2 horas para descartar efecto rebote · Si persiste estable: alta a domicilio',
              'Si el niño evoluciona favorablemente se completa el período obligatorio de dos horas y se otorga el alta a domicilio.',
            ),
          ],
          [
            'Falta de respuesta o reaparición del estridor en reposo a las 2 horas (Efecto rebote)',
            N(
              'refer',
              'Hospitalización en Sala Básica Pediátrica',
              'Nueva nebulización con adrenalina · Hospitalizar para monitorización continua y descartar traqueítis bacteriana',
              'Si el estridor reaparece o no cede se indica nueva nebulización y se hospitaliza para vigilancia estrecha.',
            ),
          ],
        ),
      ],
      [
        'Estridor bifásico en reposo, tiraje universal severo y agitación psicomotriz (Grado III · Severo)',
        N(
          'alert',
          'Laringitis Grado III: Rescate de Emergencia y Hospitalización',
          'Oxígeno humidificado · Adrenalina racémica nebulizada inmediata · Dexametasona IM o EV 0.6 mg/kg · Hospitalización obligatoria',
          'En grado tres se administra oxígeno, adrenalina nebulizada inmediata y corticoide parenteral hospitalizando al paciente.',
        ),
      ],
      [
        'Cianosis, palidez extrema, bradipnea, somnolencia o silencio auscultatorio (Grado IV · Falla Inminente)',
        N(
          'refer',
          'Grado IV: Intubación Orotraqueal de Emergencia y UCI',
          'Ventilación bolsa-mascarilla con O2 al 100% · Intubación con tubo 0.5 a 1 calibre menor por edema subglótico · Traslado a UCI',
          'En inminencia de paro se procede a intubación de rescate con tubo más estrecho por el edema y traslado urgente a cuidados intensivos.',
        ),
      ],
    ),
  },
};
