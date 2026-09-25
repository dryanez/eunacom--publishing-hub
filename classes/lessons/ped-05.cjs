// Clase 18.05 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Bronquiolitis aguda, síndrome bronquial obstructivo, virus respiratorio sincicial, profilaxis con Nirsevimab, score de Tal y protocolo de hospitalización abreviada',
      say: 'Bienvenidos a una de las clases más determinantes de la pediatría ambulatoria y de urgencias en el examen EUNACOM: bronquiolitis aguda y síndrome bronquial obstructivo en el lactante. Esta patología representa el motivo principal de consulta respiratoria y de hospitalización invernal en menores de dos años en Chile. Hoy dominaremos la fisiopatología del virus respiratorio sincicial, el impacto revolucionario del anticuerpo monoclonal Nirsevimab, la puntuación exacta del score de Tal y el algoritmo ministerial de hospitalización abreviada. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cascada fisiopatológica',
      title: 'Infección por VRS, Necrosis Bronquiolar y Atrapamiento Aéreo',
      nodes: [
        { id: 'vrs', col: 0, row: 1, k: 'start', t: 'Infección viral de vía aérea', s: 'Inóculo nasal que desciende por epitelio respiratorio en 2 a 3 días' },
        { id: 'nec', col: 1, row: 1, k: 'mech', t: 'Necrosis epitelial y tapón mucoso', s: 'Necrosis ciliar, edema de submucosa y detritus en bronquiolos terminales' },
        { id: 'val', col: 2, row: 1, k: 'effect', t: 'Mecanismo valvular y resistencia', s: 'Permite entrada inspiratoria de aire pero colapsa en la espiración' },
        { id: 'air', col: 3, row: 1, k: 'risk', t: 'Hiperinsuflación y atelectasias', s: 'Atrapamiento aéreo difuso, alteración V/Q e hipoxemia progresiva' },
      ],
      edges: [
        { from: 'vrs', to: 'nec', label: 'citopatología' },
        { from: 'nec', to: 'val', label: 'obstrucción' },
        { from: 'val', to: 'air', label: 'colapso espiratorio' },
      ],
      steps: [
        {
          show: ['vrs', 'nec'],
          note: 'Citopatología viral y descamación epitelial bronquiolar',
          say: 'El virus respiratorio sincicial ingresa por vía nasofaríngea y migra hacia la vía aérea inferior, destruyendo el epitelio ciliado bronquiolar y generando abundantes detritus celulares con tapones densos de fibrina y moco.',
        },
        {
          show: ['val', 'air'],
          note: 'Fenómeno de válvula espiratoria y desbalance ventilación perfusión',
          say: 'La submucosa engrosada actúa como una válvula que permite la entrada del aire durante la inspiración forzada, pero colapsa en la espiración pasiva, produciendo atrapamiento aéreo distal, hiperinsuflación alveolar y severo desbalance ventilación perfusión.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Definiciones clínicas',
      title: 'Bronquiolitis Aguda versus Síndrome Bronquial Obstructivo (SBO)',
      cards: [
        {
          title: 'Bronquiolitis Aguda del Lactante',
          tag: 'Primer episodio sibilante en menores de dos años',
          kind: 'key',
          items: [
            {
              t: 'Definición clásica de bronquiolitis',
              d: 'Primer episodio de dificultad respiratoria con sibilancias y crépitos en un niño menor de dos años',
              say: 'La bronquiolitis aguda se define formalmente como el primer episodio de sibilancias y dificultad respiratoria precedido por coriza en un lactante menor de dos años, con pico de incidencia entre los dos y seis meses.',
            },
            {
              t: 'Fisiopatología predominantemente inflamatoria',
              d: 'El componente principal es el edema parietal y detritus luminales, no el broncoespasmo muscular',
              say: 'A diferencia del asma en el niño mayor, en la bronquiolitis predomina la inflamación y el edema de la pared bronquiolar junto al tapón mucoso, razón por la cual los broncodilatadores tienen una eficacia errática.',
            },
          ],
        },
        {
          title: 'Síndrome Bronquial Obstructivo (SBO)',
          tag: 'Concepto sindromático operativo en Chile',
          kind: 'criteria',
          items: [
            {
              t: 'Concepto clínico de SBO',
              d: 'Conjunto de manifestaciones clínicas caracterizado por espiración prolongada, sibilancias y polipnea',
              say: 'En el sistema de salud chileno se utiliza el término síndrome bronquial obstructivo para agrupar operativamente a todo cuadro de obstrucción bronquial en el lactante, permitiendo protocolizar su manejo según severidad.',
            },
            {
              t: 'SBO recurrente y diagnóstico diferencial',
              d: 'Tres o más episodios al año; exige descartar asma del lactante, fibrosis quística o reflujo masivo',
              say: 'Hablamos de síndrome bronquial obstructivo recurrente cuando el paciente presenta tres o más episodios en el año, situación que obliga a investigar atopia familiar, reflujo gastroesofágico, cardiopatías congénitas o fibrosis quística.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología y prevención',
      title: 'Virus Respiratorio Sincicial e Inmunización Pasiva con Nirsevimab',
      cards: [
        {
          title: 'Agentes Virológicos Prevalentes',
          tag: 'VRS como causa hegemónica invernal',
          kind: 'key',
          items: [
            {
              t: 'Virus respiratorio sincicial tipo A y B',
              d: 'Responsable de más del 70% de las bronquiolitis graves hospitalizadas; alta transmisibilidad',
              say: 'El virus respiratorio sincicial es el agente causal predominante en más del setenta por ciento de los casos hospitalizados, con circulación estacional invernal intensa y transmisión directa por microgotas y fómites.',
            },
            {
              t: 'Otros virus respiratorios productores de SBO',
              d: 'Rinovirus humano, metapneumovirus, bocavirus, adenovirus e influenza estacional',
              say: 'Otros patógenos frecuentes son el rinovirus, el metapneumovirus y el adenovirus, este último capaz de desencadenar cuadros necrotizantes severos que pueden evolucionar a bronquiolitis obliterante crónica.',
            },
          ],
        },
        {
          title: 'Hito Sanitario: Nirsevimab en Chile',
          tag: 'Anticuerpo monoclonal profiláctico universal',
          kind: 'key',
          items: [
            {
              t: 'Nirsevimab universal en maternidades',
              d: 'Anticuerpo monoclonal recombinante humano de vida media prolongada administrado a todos los recién nacidos',
              say: 'Chile marcó un hito epidemiológico histórico al implementar en dos mil veinticuatro la administración universal de Nirsevimab, un anticuerpo monoclonal de vida media prolongada inyectado a todo recién nacido en maternidades.',
            },
            {
              t: 'Impacto en hospitalizaciones y camas críticas',
              d: 'Reducción de más del 80% en admisiones por VRS y caída drástica en ocupación de UCI pediátrica',
              say: 'Esta estrategia de inmunización pasiva logró reducir en más de un ochenta por ciento las hospitalizaciones por virus respiratorio sincicial en lactantes, transformando radicalmente la campaña de invierno nacional.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación semiológica',
      title: 'Cuadro Clínico, Pródromo Catarral y Signos de Alerta',
      cards: [
        {
          title: 'Evolución Temporal del Cuadro',
          tag: 'Fase catarral previa a la obstrucción bronquial',
          kind: 'criteria',
          items: [
            {
              t: 'Pródromo de coriza de dos a tres días',
              d: 'Rinorrea serosa, estornudos, febrícula o fiebre moderada y disminución del apetito',
              say: 'El cuadro debuta típicamente con dos a tres días de rinorrea transparente, estornudos y fiebre baja, tras los cuales el virus desciende a la vía aérea distal desatando tos progresiva y dificultad para respirar.',
            },
            {
              t: 'Pico de gravedad entre el tercer y quinto día',
              d: 'Aparición de polipnea, espiración prolongada, sibilancias bilaterales y dificultad para lactar',
              say: 'El momento de máxima dificultad respiratoria suele presentarse entre el tercer y quinto día de enfermedad, manifestándose con taquipnea marcada, tiraje intercostal y rechazo a las tomas de leche.',
            },
          ],
        },
        {
          title: 'Examen Físico Pulmonar Riguroso',
          tag: 'Auscultación dinámica y tiraje',
          kind: 'key',
          items: [
            {
              t: 'Sibilancias espiratorias y crépitos finos basales',
              d: 'Espiración audible prolongada, roncus de secreciones y crépitos inspiratorios por alveolos descolapsados',
              say: 'A la auscultación destacan sibilancias bilaterales espiratorias junto a crépitos finos basales que reflejan la ocupación alveolar y bronquiolar periférica por detritus inflamatorios.',
            },
            {
              t: 'Signos de sobrecarga mecánica torácica',
              d: 'Aleteo nasal, tiraje subcostal, retracción xifoidea y respiración paradójica en lactantes pequeños',
              say: 'El examen físico debe evaluar meticulosamente el esfuerzo toracoabdominal, buscando aleteo nasal, tiraje subcostal y disociación toracoabdominal como signos cardinales de fatiga diafragmática inminente.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación de gravedad',
      title: 'Score de Tal: Parámetros Clínicos y Puntuación según Edad',
      cards: [
        {
          title: 'Frecuencia Respiratoria y Sibilancias',
          tag: 'Corte estricto bajo y sobre los seis meses',
          kind: 'key',
          items: [
            {
              t: 'Frecuencia respiratoria estratificada por edad',
              d: 'Menor de 6 meses: menor o igual a 40 (0), 41 a 55 (1), 56 a 70 (2), mayor a 70 (3). Mayor o igual a 6 meses: menor o igual a 30 (0), 31 a 45 (1), 46 a 60 (2), mayor a 60 (3)',
              say: 'El score de Tal evalúa cuatro parámetros asignando de cero a tres puntos. La frecuencia respiratoria se diferencia estrictamente: en menores de seis meses el corte de tres puntos es sobre setenta respiraciones por minuto, mientras que desde los seis meses es sobre sesenta.',
            },
            {
              t: 'Sibilancias auscultatorias',
              d: '0: ausentes; 1: fin de espiración; 2: toda la espiración; 3: inspiración y espiración o tórax silente',
              say: 'Las sibilancias se gradúan desde ausentes con cero puntos, pasando a un punto si son telespiratorias, dos puntos si abarcan toda la espiración, y tres puntos si son audibles en ambos tiempos o existe tórax silente.',
            },
          ],
        },
        {
          title: 'Cianosis y Retracciones Torácicas',
          tag: 'Marcadores de hipoxia y esfuerzo muscular',
          kind: 'alert',
          items: [
            {
              t: 'Cianosis clínica objetiva',
              d: '0: ausente; 1: perioral con el llanto o agitación; 2: perioral en reposo; 3: generalizada en reposo',
              say: 'La cianosis puntúa cero si está ausente, un punto si aparece en la boca solo al llorar, dos puntos si se observa cianosis perioral en reposo, y tres puntos si es generalizada.',
            },
            {
              t: 'Retracciones y tiraje muscular',
              d: '0: sin tiraje; 1: intercostal leve; 2: tiraje intercostal y subcostal moderado; 3: supraclavicular y aleteo nasal',
              say: 'Las retracciones suman un punto si el tiraje intercostal es leve, dos puntos con compromiso intercostal y subcostal moderado, y tres puntos si compromete fosas supraclaviculares con aleteo nasal y quejido.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de emergencia',
      title: 'Tórax Silente y Signos de Agotamiento Respiratorio Crítico',
      cards: [
        {
          title: 'Fisiopatología del Silencio Auscultatorio',
          tag: 'Colapso de flujo aéreo y fatiga diafragmática',
          kind: 'alert',
          items: [
            {
              t: 'Ausencia paradójica de sibilancias en niño obstructivo',
              d: 'La obstrucción lumina es tan crítica que el flujo espiratorio es insuficiente para generar turbulencia audible',
              say: 'El tórax silente es una trampa mortal en urgencias: la desaparición de las sibilancias en un niño visiblemente agotado no significa mejoría, sino que el flujo de aire es casi nulo por obstrucción bronquiolar extrema.',
            },
            {
              t: 'Asignación reglamentaria de tres puntos en Score de Tal',
              d: 'El protocolo ministerial estipula puntuar con 3 puntos en el ítem sibilancias ante silencio auscultatorio',
              say: 'Por norma técnica del Ministerio de Salud, el silencio auscultatorio o tórax silente se califica obligatoriamente con tres puntos máximos en el ítem de sibilancias del score de Tal.',
            },
          ],
        },
        {
          title: 'Signos Inminentes de Paro Respiratorio',
          tag: 'Indicación de intubación y soporte invasivo',
          kind: 'alert',
          items: [
            {
              t: 'Bradipnea paradójica y respiración irregular',
              d: 'El paso de taquipnea extrema a bradipnea con pausas respiratorias indica agotamiento diafragmático terminal',
              say: 'Si un lactante polipneico comienza a respirar más lento con pausas o boqueos, no se está tranquilizando: está sufriendo fatiga de la musculatura respiratoria y entrará en paro por hipoxia.',
            },
            {
              t: 'Compromiso de conciencia, hipotonía y letargia',
              d: 'Somnolencia que no responde a estímulos y pérdida de tono postural traducen hipercapnia severa',
              say: 'La somnolencia profunda y la hipotonía son manifestaciones de narcosis por dióxido de carbono e hipoxia tisular severa, requiriendo ventilación con bolsa mascarilla e intubación inmediata en sala de reanimación.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Rol de imágenes y laboratorio',
      title: 'Indicaciones Reales de Radiografía de Tórax y Laboratorio',
      cards: [
        {
          title: 'La Radiografía NO es de Rutina en SBO',
          tag: 'Diagnóstico esencialmente clínico',
          kind: 'key',
          items: [
            {
              t: 'Cuadro típico no complicado no requiere radiografía',
              d: 'La radiografía de tórax expone a radiación innecesaria y no cambia la conducta inicial en el SBO leve o moderado',
              say: 'En el examen EUNACOM es una regla de oro: la radiografía de tórax no se solicita de rutina en el síndrome bronquial obstructivo típico, pues el diagnóstico y la severidad son exclusivamente clínicos.',
            },
            {
              t: 'Hallazgos radiológicos clásicos inespecíficos',
              d: 'Hiperinsuflación pulmonar, aplanamiento diafragmático, aumento del espacio retroesternal y atelectasias subsegmentarias',
              say: 'Cuando se realiza, la placa suele mostrar signos inespecíficos de atrapamiento aéreo como hiperclaridad, costillas horizontalizadas, aplanamiento de cúpulas diafragmáticas y frecuentes microatelectasias laminares.',
            },
          ],
        },
        {
          title: 'Criterios Estrictos para Solicitar Radiografía',
          tag: 'Sospecha de complicaciones o atipicidad',
          kind: 'criteria',
          items: [
            {
              t: 'Asimetría auscultatoria o falta de respuesta al tratamiento',
              d: 'Disminución focal marcada del murmullo para descartar atelectasia lobar masiva, neumotórax o cuerpo extraño',
              say: 'Se solicita radiografía de tórax ante asimetría persistente en el examen físico para descartar atelectasias masivas o neumotórax, o si el paciente fracasa a la hospitalización abreviada.',
            },
            {
              t: 'Fiebre muy elevada y sospecha de sobreinfección bacteriana',
              d: 'Temperatura superior a 39 grados mantenida o sospecha de neumonía alveolar concomitante',
              say: 'También está indicada la placa si existe fiebre alta persistente sobre treinta y nueve grados con deterioro séptico que haga sospechar una condensación neumónica bacteriana sobreagregada.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Diagnóstico Diferencial del Estridor y Sibilancias en Pediatría',
      head: ['Entidad Clínica', 'Edad Típica', 'Signos Cardinales', 'Tratamiento Principal'],
      rows: [
        {
          cells: ['Bronquiolitis / SBO', 'Menor de dos años', 'Sibilancias bilaterales, espiración prolongada, crépitos', 'Oxigenoterapia, hospitalización abreviada con salbutamol'],
          say: 'El síndrome bronquial obstructivo y la bronquiolitis afectan a menores de dos años con sibilancias espiratorias bilaterales y responden al soporte con oxígeno y salbutamol.',
        },
        {
          cells: ['Laringitis Aguda (Croup)', 'Seis meses a tres años', 'Estridor inspiratorio, tos perruna, disfonía laríngea', 'Dexametasona oral y adrenalina racémica nebulizada'],
          say: 'La laringitis aguda compromete la región subglótica con estridor típicamente inspiratorio y tos perruna, tratándose con dexametasona y adrenalina racémica.',
        },
        {
          cells: ['Cuerpo Extraño en Vía Aérea', 'Uno a tres años', 'Comienzo súbito con asfixia inicial y asimetría pulmonar', 'Broncoscopía rígida de urgencia diagnóstica y terapéutica'],
          say: 'El cuerpo extraño debuta en forma súbita con síndrome de penetración y auscultación asimétrica, requiriendo broncoscopía rígida sin dilación.',
        },
        {
          cells: ['Traqueítis Bacteriana', 'Uno a seis años', 'Aspecto séptico tóxico, fiebre alta, estridor inspiratorio y espiratorio', 'Cefotaxima endovenosa e intubación traqueal en unidad intensiva'],
          say: 'La traqueítis bacteriana presenta aspecto tóxico, fiebre elevada y estridor bifásico, requiriendo cefalosporinas de tercera generación e intubación precoz en cuidados intensivos.',
        },
        {
          cells: ['Laringomalacia Congénita', 'Recién nacido a lactante menor', 'Estridor inspiratorio que empeora en decúbito supino y cede en prono', 'Manejo expectante, maduración espontánea hacia el año'],
          say: 'La laringomalacia es la causa congénita más común de estridor inspiratorio, el cual empeora al alimentar o acostar boca arriba y cede en decúbito prono.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Protocolo de rescate en APS',
      title: 'Hospitalización Abreviada en Sala IRA: Primera Hora de Salbutamol',
      cards: [
        {
          title: 'Criterio de Ingreso a Hospitalización Abreviada',
          tag: 'Score de Tal entre 6 y 8 puntos (Moderado)',
          kind: 'alert',
          items: [
            {
              t: 'Manejo en Sala IRA de atención primaria o urgencia',
              d: 'Lactante con SBO moderado (Tal 6 a 8); ambiente térmico adecuado y aspiración suave de secreciones',
              say: 'Todo lactante con score de Tal entre seis y ocho puntos califica como síndrome bronquial obstructivo moderado y debe ingresar de inmediato al protocolo de hospitalización abreviada.',
            },
            {
              t: 'Esquema de la primera hora de Salbutamol',
              d: 'Salbutamol inhalador presurizado 2 puff con aerocámara cada 10 minutos por 5 veces en 1 hora',
              say: 'La primera hora consiste en administrar salbutamol en aerosol con aerocámara valvulada pediátrica, a razón de dos inhalaciones cada diez minutos completando cinco ciclos en una hora.',
            },
          ],
        },
        {
          title: 'Evaluación y Conducta al Término de la Primera Hora',
          tag: 'Respuesta clínica al broncodilatador',
          kind: 'key',
          items: [
            {
              t: 'Puntaje de Tal desciende a cinco puntos o menos',
              d: 'Éxito terapéutico: alta a domicilio con Salbutamol 2 puff cada 4 a 6 horas y control en 24 horas',
              say: 'Si al cabo de los sesenta minutos el score de Tal desciende a cinco puntos o menos, el cuadro pasa a leve y el niño se va a casa con salbutamol cada cuatro a seis horas y control al día siguiente.',
            },
            {
              t: 'Puntaje de Tal persiste entre 6 y 8 puntos',
              d: 'Indicar Prednisona oral 1 a 2 mg/kg dosis única e iniciar inmediatamente la segunda hora de Salbutamol',
              say: 'Si tras la primera hora el lactante persiste con score de Tal entre seis y ocho puntos, se administra una dosis oral de prednisona a uno o dos miligramos por kilo y se inicia la segunda hora de salbutamol.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Segunda hora y criterios de hospitalización',
      title: 'Segunda Hora de Hospitalización Abreviada y Manejo en Hospital',
      cards: [
        {
          title: 'Desenlace de la Segunda Hora en Sala IRA',
          tag: 'Decisión definitiva de alta versus traslado',
          kind: 'criteria',
          items: [
            {
              t: 'Descenso a cinco puntos o menos tras la segunda hora',
              d: 'Alta ambulatoria con Salbutamol 2 puff cada 4 a 6 horas más Prednisona oral 1 a 2 mg/kg/día por 5 días',
              say: 'Si al terminar la segunda hora el score de Tal baja a cinco puntos o menos, se indica alta ambulatoria completando cinco días de prednisona oral y salbutamol con control médico al día siguiente.',
            },
            {
              t: 'Persistencia en 6 a 8 puntos o empeoramiento a 9 puntos o más',
              d: 'Fracaso de hospitalización abreviada: hospitalización formal en sala básica o intermedia pediátrica',
              say: 'Si al concluir las dos horas de salbutamol el lactante persiste con seis a ocho puntos o sube a nueve puntos, se decreta el fracaso terapéutico y se hospitaliza de inmediato en un centro asistencial.',
            },
          ],
        },
        {
          title: 'Criterios de Hospitalización Inmediata sin Abreviada',
          tag: 'Indicaciones de ingreso hospitalario directo',
          kind: 'alert',
          items: [
            {
              t: 'Score de Tal inicial de nueve puntos o más (Severo)',
              d: 'SBO grave con riesgo de agotamiento respiratorio inminente; no realizar hospitalización abreviada en APS',
              say: 'Un paciente que consulta con score de Tal inicial de nueve a doce puntos no ingresa a hospitalización abreviada en consultorio: se administra oxígeno inmediato y se traslada de urgencia al hospital.',
            },
            {
              t: 'Factores de riesgo social y comorbilidades mayores',
              d: 'Menor de tres meses, antecedente de prematurez extrema, apnea observada o saturación menor a 90% con oxígeno',
              say: 'La edad menor a tres meses, el antecedente de prematurez menor a treinta y dos semanas, episodios de apnea o saturación ambiental menor a noventa y tres por ciento son criterios absolutos de hospitalización formal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuidados hospitalarios avanzados',
      title: 'Manejo en Paciente Hospitalizado: Oxígeno y Cánula de Alto Flujo',
      cards: [
        {
          title: 'Oxigenoterapia y Soporte General',
          tag: 'La intervención con mayor impacto demostrado',
          kind: 'key',
          items: [
            {
              t: 'Oxígeno humidificado para meta de saturación mayor a 93%',
              d: 'Administrar por naricera o cánula nasal para mantener saturación arterial entre 93% y 95%',
              say: 'En el paciente hospitalizado por bronquiolitis, el oxígeno humidificado es la medida terapéutica más eficaz y con mayor evidencia para corregir la hipoxemia tisular secundaria a la alteración ventilación perfusión.',
            },
            {
              t: 'Hidratación enteral o endovenosa fraccionada',
              d: 'Alimentación por sonda nasogástrica si la polipnea supera 60 rpm para evitar broncoaspiración durante tomas',
              say: 'Si la frecuencia respiratoria supera sesenta por minuto, la alimentación oral se suspende o se fracciona mediante sonda nasogástrica para prevenir eventos de broncoaspiración durante la deglución.',
            },
          ],
        },
        {
          title: 'Cánula Nasal de Alto Flujo (CNAF)',
          tag: 'Soporte no invasivo de primera línea en falla respiratoria',
          kind: 'key',
          items: [
            {
              t: 'Generación de presión positiva espiratoria y lavado de espacio muerto',
              d: 'Flujos de 1 a 2 litros por kilo por minuto con mezcla de aire y oxígeno tibio y humidificado al 100%',
              say: 'La cánula nasal de alto flujo entrega mezclas de gas calentado y saturado con flujos de uno a dos litros por kilo al minuto, generando presión positiva espiratoria que disminuye el trabajo respiratorio y previene la intubación.',
            },
            {
              t: 'Criterios de ingreso a Unidad de Cuidados Intensivos (UCI)',
              d: 'Hipercapnia progresiva en gases con acidosis respiratoria, apnea recurrente o saturación refractaria',
              say: 'El paciente debe ingresar a unidad de paciente crítico ante la persistencia de quejido espiratorio, apneas recurrentes, acidosis respiratoria descompensada o requerimiento creciente de soporte ventilatorio mecánico.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo ministerial',
      title: 'Algoritmo de Manejo Escalonado del Síndrome Bronquial Obstructivo',
      say: 'Examinemos el algoritmo oficial paso a paso para el enfrentamiento del síndrome bronquial obstructivo según el score de Tal y la respuesta clínica.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2015 · Pregunta 148',
      title: 'Manejo Prioritario en Lactante Obstructivo con Hipoxemia',
      stem: 'Un lactante de 5 meses de edad es llevado al servicio de urgencias por presentar un cuadro de obstrucción bronquial. Al examen físico presenta taquipnea importante, satura 90%, tiene retracción intercostal, cianosis perioral y sibilancias bilaterales intensas.',
      question: '¿Cuál es la primera medida que se debe tomar?',
      options: [
        { letter: 'A', text: 'Nebulizaciones con salbutamol' },
        { letter: 'B', text: 'Administrar corticoides orales' },
        { letter: 'C', text: 'Dar oxígeno por mascarilla' },
        { letter: 'D', text: 'Administrar corticoides endovenosos' },
        { letter: 'E', text: 'Kinesioterapia respiratoria de desobstrucción' },
      ],
      correct: 'C',
      explanation: 'Ante un paciente con dificultad respiratoria e hipoxemia demostrada (saturación de oxígeno 90% con cianosis perioral), la medida inicial más urgente e impostergable siempre es la oxigenoterapia para restaurar la oxigenación tisular y corregir el trastorno ventilación-perfusión. En la bronquiolitis aguda viral, el oxígeno suplementario es el único tratamiento con impacto clínico indiscutido sobre la morbimortalidad, precediendo a cualquier intervención farmacológica secundaria.',
      say: {
        stem: 'Lactante de cinco meses llevado a urgencias por obstrucción bronquial con taquipnea importante saturando noventa por ciento tiraje intercostal y cianosis perioral.',
        question: '¿Cuál es la primera medida que se debe tomar?',
        options: 'La opción A propone nebulizar salbutamol. La B corticoides orales. La C dar oxígeno por mascarilla. La D corticoides endovenosos. La E kinesioterapia respiratoria. Prioriza el ABC de reanimación.',
        answer: 'La respuesta correcta es la C. Ante hipoxemia demostrada en un trastorno ventilación perfusión la primera medida más urgente siempre es administrar oxígeno suplementario.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Cálculo de Score de Tal y Conducta Inmediata',
      stem: 'Un lactante de 4 meses es llevado al Servicio de Urgencia por dificultad respiratoria. Al examen: FR 64 rpm, tiraje intercostal moderado, sibilancias bilaterales audibles en toda la espiración con fonendoscopio, sin cianosis.',
      question: '¿Cuál es el Score de Tal y la conducta inmediata correcta?',
      options: [
        { letter: 'A', text: 'Tal 4 puntos (leve); enviar a domicilio con Salbutamol 2 puff cada 6 horas' },
        { letter: 'B', text: 'Tal 6 puntos (moderado); iniciar hospitalización abreviada con Salbutamol 2 puff cada 10 minutos por 1 hora' },
        { letter: 'C', text: 'Tal 8 puntos (severo); hospitalizar directamente en UCI y conectar a ventilación mecánica' },
        { letter: 'D', text: 'Tal 6 puntos (moderado); administrar nebulización con adrenalina racémica y dexametasona' },
        { letter: 'E', text: 'Tal 3 puntos (leve); indicar kinesioterapia respiratoria ambulatoria sin fármacos' },
      ],
      correct: 'B',
      explanation: 'Para un lactante de 4 meses (< 6 meses de edad): Frecuencia respiratoria de 64 rpm corresponde a 2 puntos (rango 56-70 rpm); Sibilancias en toda la espiración corresponden a 2 puntos; Retracción intercostal moderada corresponde a 2 puntos; Ausencia de cianosis corresponde a 0 puntos. La sumatoria total es exactamente 6 puntos, lo que define un SBO Moderado (rango 6 a 8 puntos). La conducta ministerial normada en atención primaria o urgencia es ingresar de inmediato a Hospitalización Abreviada con Salbutamol en aerosol con aerocámara a dosis de 2 puff cada 10 minutos durante 1 hora (5 ciclos en total).',
      say: {
        stem: 'Lactante de cuatro meses con frecuencia respiratoria de sesenta y cuatro tiraje moderado sibilancias en toda la espiración y sin cianosis.',
        question: '¿Cuál es el Score de Tal y la conducta inmediata correcta?',
        options: 'La opción A plantea Tal cuatro leve. La B Tal seis moderado con hospitalización abreviada con salbutamol por una hora. La C Tal ocho severo a cuidados intensivos. La D adrenalina racémica. La E kinesioterapia respiratoria. Calcula con precisión.',
        answer: 'La respuesta correcta es la B. En menores de seis meses esa frecuencia suma dos puntos, más dos de sibilancias y dos de tiraje totalizan seis puntos, requiriendo hospitalización abreviada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Conducta ante Falla de Primera Hora de Hospitalización Abreviada',
      stem: 'Un lactante de 7 meses con SBO moderado (Tal 7) completó la primera hora de hospitalización abreviada con Salbutamol. Al reevaluar al término de la hora, el paciente presenta FR 52 rpm, sibilancias espiratorias moderadas y tiraje subcostal, persistiendo con un Score de Tal de 6 puntos.',
      question: '¿Cuál es la conducta indicada según la guía clínica MINSAL?',
      options: [
        { letter: 'A', text: 'Alta ambulatoria con salbutamol cada 4 horas por 7 días' },
        { letter: 'B', text: 'Administrar Prednisona oral 1 a 2 mg/kg e iniciar una segunda hora de Salbutamol cada 10 minutos' },
        { letter: 'C', text: 'Intubación orotraqueal inmediata e ingreso a UCI pediátrica' },
        { letter: 'D', text: 'Suspender Salbutamol y administrar Amoxicilina oral por 7 días' },
        { letter: 'E', text: 'Solicitar tomografía computarizada de tórax urgente' },
      ],
      correct: 'B',
      explanation: 'El protocolo de hospitalización abreviada del MINSAL establece que si al término de la primera hora de Salbutamol el lactante persiste con un Score de Tal en rango moderado (6 a 8 puntos), se debe administrar una dosis oral de corticoide sistémico (Prednisona 1 a 2 mg/kg) y dar inicio de inmediato a una segunda hora completa de Salbutamol (2 puff cada 10 minutos por 5 veces). Solo si tras completar la segunda hora persiste con Tal entre 6 y 8 puntos o empeora a severo, se indicará el traslado y la hospitalización formal en un centro secundario.',
      say: {
        stem: 'Lactante de siete meses con obstrucción moderada que al término de la primera hora de salbutamol persiste con un score de Tal de seis puntos.',
        question: '¿Cuál es la conducta indicada según la guía clínica ministerial?',
        options: 'La opción A indica alta a domicilio. La B administrar prednisona oral de uno a dos miligramos por kilo e iniciar segunda hora de salbutamol. La C intubar de inmediato. La D amoxicilina. La E tomografía de tórax. Recuerda el protocolo de segunda hora.',
        answer: 'La respuesta correcta es la B. La persistencia en rango moderado tras la primera hora exige agregar corticoide sistémico e iniciar la segunda hora de salbutamol.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Tórax Silente en Lactante Obstructivo Crítico',
      stem: 'Un lactante de 2 meses consulta por dificultad respiratoria progresiva. Al examen: FR 74 rpm, aleteo nasal intenso, quejido audible y cianosis perioral en reposo. A la auscultación se constata marcado silencio auscultatorio bilateral (tórax silente), casi sin murmullo pulmonar audible.',
      question: '¿Cuál es el significado clínico de este hallazgo y su puntuación en el Score de Tal?',
      options: [
        { letter: 'A', text: 'Mejoría clínica espontánea por desaparición de sibilancias (0 puntos)' },
        { letter: 'B', text: 'Signo de máxima gravedad por flujo aéreo espiratorio casi nulo; asigna 3 puntos en el ítem de sibilancias' },
        { letter: 'C', text: 'Presencia de enfisema subcutáneo benigno que bloquea la acústica (1 punto)' },
        { letter: 'D', text: 'Neumotórax a tensión unilateral exclusivo (2 puntos)' },
        { letter: 'E', text: 'Falso negativo debido al llanto vigoroso del lactante (0 puntos)' },
      ],
      correct: 'B',
      explanation: 'En pacientes con obstrucción bronquiolar crítica, el flujo espiratorio puede llegar a ser tan escaso que no alcanza la velocidad necesaria para generar vibraciones acústicas de turbulencia, produciendo el fenómeno conocido como "tórax silente" o silencio auscultatorio. Lejos de ser un signo de mejoría, traduce una obstrucción extrema con riesgo inminente de agotamiento y paro respiratorio. Por convención ministerial y técnica en el Score de Tal, el tórax silente se clasifica obligatoriamente con 3 puntos en el ítem de sibilancias.',
      say: {
        stem: 'Lactante de dos meses con taquipnea extrema quejido cianosis perioral y marcado silencio auscultatorio bilateral sin murmullo ni sibilancias audibles.',
        question: '¿Cuál es el significado clínico de este hallazgo y su puntuación en el score de Tal?',
        options: 'La opción A sostiene mejoría clínica espontánea con cero puntos. La B signo de máxima gravedad por flujo casi nulo asignando tres puntos en sibilancias. La C enfisema con un punto. La D neumotórax. La E falso negativo. No caigas en la trampa del silencio.',
        answer: 'La respuesta correcta es la B. El tórax silente representa obstrucción extrema con flujo aéreo colapsado y asigna el puntaje máximo de tres puntos en el score de Tal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Estrategia Preventiva con Anticuerpo Monoclonal Anti-VRS',
      stem: '¿Cuál es la intervención preventiva que ha demostrado mayor impacto poblacional en reducir las hospitalizaciones por bronquiolitis grave por Virus Respiratorio Sincicial (VRS) en recién nacidos en Chile desde 2024?',
      options: [
        { letter: 'A', text: 'Vacuna viva atenuada contra VRS administrada a los dos y cuatro meses' },
        { letter: 'B', text: 'Anticuerpo monoclonal de vida media prolongada (Nirsevimab) administrado universalmente al recién nacido' },
        { letter: 'C', text: 'Palivizumab mensual administrado durante todo el primer año a todos los recién nacidos de término' },
        { letter: 'D', text: 'Quimioprofilaxis con Oseltamivir oral durante los meses de invierno' },
        { letter: 'E', text: 'Nebulizaciones profilácticas diarias con solución salina hipertónica' },
      ],
      correct: 'B',
      explanation: 'Chile implementó en 2024 una estrategia pionera de salud pública consistente en la administración universal y gratuita de Nirsevimab (un anticuerpo monoclonal recombinante humano de acción prolongada contra la proteína F del VRS) a todos los recién nacidos en las maternidades del país y a lactantes menores de 6 meses al inicio de la temporada invernal. Esta inmunización pasiva demostró una eficacia superior al 80% en la reducción de hospitalizaciones por bronquiolitis y neumonía grave por VRS, aliviando de forma histórica la sobrecarga del sistema sanitario pediátrico.',
      say: {
        stem: 'Pregunta sobre la intervención preventiva de mayor impacto poblacional en reducir hospitalizaciones por bronquiolitis grave por virus respiratorio sincicial en recién nacidos en Chile.',
        question: '¿Cuál es la estrategia implementada con éxito en nuestro país?',
        options: 'La opción A propone vacuna viva atenuada. La B anticuerpo monoclonal de vida media prolongada Nirsevimab universal al recién nacido. La C Palivizumab mensual universal. La D Oseltamivir. La E solución salina hipertónica. Recuerda el avance chileno.',
        answer: 'La respuesta correcta es la B. Nirsevimab es el anticuerpo monoclonal universal de dosis única que redujo en más de un ochenta por ciento las hospitalizaciones por sincicial.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Bronquiolitis y Síndrome Bronquial Obstructivo',
      cards: [
        {
          title: 'Score de Tal y Toma de Decisiones',
          tag: 'Cortes terapéuticos fundamentales',
          kind: 'key',
          items: [
            {
              t: 'Leve menor o igual a 5, Moderado 6 a 8, Severo 9 o más',
              d: 'Leve: domicilio con Salbutamol. Moderado: hospitalización abreviada. Severo: hospitalización inmediata con oxígeno',
              say: 'Graben los tres niveles de Tal: cinco o menos es leve y va a domicilio; seis a ocho es moderado e ingresa a hospitalización abreviada; nueve o más es severo y se hospitaliza de inmediato.',
            },
            {
              t: 'Protocolo estricto de hospitalización abreviada',
              d: '1a hora: Salbutamol cada 10 min. Si persiste moderado: Prednisona 1-2 mg/kg más 2a hora. Falla: hospitalizar',
              say: 'La primera hora es salbutamol cada diez minutos; si persiste en moderado se agrega prednisona oral y se hace la segunda hora; si no responde tras dos horas, el niño se hospitaliza.',
            },
          ],
        },
        {
          title: 'Perlas Clínicas del Examen',
          tag: 'Prioridad del oxígeno y tórax silente',
          kind: 'alert',
          items: [
            {
              t: 'Hipoxemia: Oxígeno como medida primordial absoluta',
              d: 'Ante saturación baja o cianosis, la primera indicación siempre es oxígeno humidificado',
              say: 'Frente a un lactante desaturando con cianosis, la primera medida impostergable es el oxígeno. Ningún fármaco sustituye la corrección inmediata de la hipoxemia tisular.',
            },
            {
              t: 'Tórax silente asigna tres puntos máximos en sibilancias',
              d: 'No confundir silencio auscultatorio con mejoría clínica; traduce colapso de flujo aéreo inminente de paro',
              say: 'El tórax silente suma tres puntos en el score de Tal y advierte paro respiratorio inminente. Nos vemos en la siguiente clase para dominar la laringitis aguda obstructiva.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo del Síndrome Bronquial Obstructivo en Pediatría',
    root: N(
      'start',
      'Lactante con Cuadro Respiratorio Obstructivo y Dificultad Respiratoria',
      'Evaluación clínica inicial, signos vitales, saturación de oxígeno y cálculo de Score de Tal',
      'Iniciamos la evaluación del paciente calculando el score de Tal para estratificar la gravedad y definir la conducta inmediata.',
      [
        'Score de Tal menor o igual a 5 puntos (SBO Leve)',
        N(
          'ok',
          'Manejo Ambulatorio en Domicilio',
          'Salbutamol MDI 2 puff con aerocámara cada 4 a 6 horas por 5 a 7 días · Educación en signos de alarma y control en 24 horas en APS',
          'Con score de Tal leve el lactante se maneja en casa con salbutamol cada cuatro a seis horas y control médico al día siguiente.',
        ),
      ],
      [
        'Score de Tal entre 6 y 8 puntos (SBO Moderado)',
        N(
          'do',
          'Ingreso a Hospitalización Abreviada en Sala IRA',
          'Primera hora: Salbutamol MDI 2 puff cada 10 minutos por 5 veces en 1 hora con aerocámara · Aspiración nasal suave si hay secreciones',
          'El SBO moderado ingresa a hospitalización abreviada recibiendo cinco ciclos de salbutamol durante la primera hora.',
          [
            'Reevaluación a los 60 minutos: Score de Tal desciende a menor o igual a 5 puntos',
            N(
              'ok',
              'Éxito de Primera Hora: Alta Ambulatoria',
              'Alta a domicilio con Salbutamol 2 puff cada 4 a 6 horas · Control médico obligatorio en 24 horas en CESFAM',
              'Si el score desciende a rango leve se otorga el alta con salbutamol en aerosol y control en veinticuatro horas.',
            ),
          ],
          [
            'Reevaluación a los 60 minutos: Score de Tal persiste entre 6 y 8 puntos',
            N(
              'alert',
              'Persistencia de SBO Moderado: Inicio de Segunda Hora',
              'Administrar Prednisona oral 1 a 2 mg/kg dosis única e iniciar segunda hora de Salbutamol 2 puff cada 10 minutos por 5 veces',
              'Si persiste moderado administramos prednisona oral de uno a dos miligramos por kilo e iniciamos la segunda hora de salbutamol.',
              [
                'Reevaluación a los 120 minutos: Score de Tal desciende a menor o igual a 5 puntos',
                N(
                  'ok',
                  'Éxito de Segunda Hora: Alta con Corticoide Oral',
                  'Alta con Salbutamol cada 4 a 6 horas más Prednisona oral 1 a 2 mg/kg/día por 5 días · Control precoz al día siguiente',
                  'Al descender a rango leve tras la segunda hora se da de alta completando cinco días de prednisona oral y control al día siguiente.',
                ),
              ],
              [
                'Reevaluación a los 120 minutos: Persiste entre 6 y 8 puntos o sube a 9 o más',
                N(
                  'refer',
                  'Fracaso de Hospitalización Abreviada: Hospitalización Formal',
                  'Traslado a centro hospitalario · Oxigenoterapia para Sat > 93%, vía venosa y evaluación por pediatra de guardia',
                  'Si no responde tras dos horas de tratamiento se declara fracaso terapéutico y se traslada para hospitalización formal.',
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Score de Tal mayor o igual a 9 puntos (SBO Severo)',
        N(
          'refer',
          'SBO Severo: Hospitalización Inmediata sin Abreviada en APS',
          'Oxígeno por naricera o mascarilla de no recirculación inmediata · Salbutamol nebulizado o MDI continuo · Traslado en ambulancia a hospital / UCI',
          'Con score de Tal severo se administra oxígeno urgente y se hospitaliza de inmediato en un centro terciario o unidad crítica.',
        ),
      ],
    ),
  },
};
