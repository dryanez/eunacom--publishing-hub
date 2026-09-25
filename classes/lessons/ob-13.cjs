// Clase 3.13 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Placenta previa, desprendimiento prematuro de placenta normoinserta, rotura uterina y vasa previa: diagnóstico diferencial y conductas de emergencia',
      say: 'Bienvenidos a la clase sobre metrorragias de la segunda mitad del embarazo. En esta sesión aprenderemos a diferenciar la placenta previa del desprendimiento prematuro de placenta, comprenderemos por qué el tacto vaginal está prohibido sin conocer la inserción placentaria, reconoceremos la rotura uterina y de vasa previa, y fijaremos las conductas quirúrgicas de emergencia. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Regla de oro semiológica',
      title: 'Abordaje inicial ante sangrado genital del tercer trimestre',
      nodes: [
        { id: 'san', col: 0, row: 1, k: 'start', t: 'Metrorragia del tercer trimestre', s: 'Sangrado genital de cuantía variable después de las 20 a 24 semanas' },
        { id: 'pro', col: 1, row: 0, k: 'trap', t: '¡PROHIBIDO EL TACTO VAGINAL!', s: 'Peligro de desprender una placenta previa y desatar hemorragia exanguinante' },
        { id: 'esp', col: 1, row: 2, k: 'good', t: 'Especuloscopía suave estéril', s: 'Visualizar origen uterino del sangrado y descartar causas cervicales o vaginales' },
        { id: 'eco', col: 2, row: 1, k: 'mech', t: 'Ecografía transvaginal urgente', s: 'Estándar de oro de máxima seguridad para mapear el borde placentario' },
        { id: 'dif', col: 4, row: 1, k: 'alert', t: 'Diagnóstico etiológico diferencial', s: 'Placenta previa, DPPNI, rotura uterina o rotura de vasa previa' },
      ],
      edges: [
        { from: 'san', to: 'pro', label: 'regla absoluta' },
        { from: 'san', to: 'esp', label: 'inspección' },
        { from: 'esp', to: 'eco', label: 'mapeo anatómico' },
        { from: 'eco', to: 'dif', label: 'conducta clínica' },
      ],
      steps: [
        {
          show: ['san', 'pro'],
          note: 'Prohibición absoluta del tacto vaginal a ciegas',
          say: 'La primera regla de oro ante toda metrorragia de la segunda mitad del embarazo es que está estrictamente prohibido realizar un tacto vaginal digital sin conocer con certeza la localización anatómica de la placenta. Introducir los dedos a través del cuello puede desgarrar los cotiledones de una placenta previa y provocar una hemorragia masiva exanguinante en pocos segundos, con desenlace fatal materno y fetal.',
        },
        {
          show: ['esp', 'eco'],
          note: 'Especuloscopía y ecografía transvaginal segura',
          say: 'El examen inicial correcto consiste en colocar un espéculo estéril con extrema suavidad para constatar que la sangre proviene directamente del canal endocervical y descartar patología local vaginal o cervical. De inmediato realizamos una ecografía transvaginal, la cual es enteramente segura y constituye el estándar de oro para medir la distancia exacta entre el borde placentario y el orificio cervical interno.',
        },
        {
          show: ['dif'],
          note: 'Diferenciación etiológica inmediata',
          say: 'A partir de la ecografía, el tono uterino a la palpación abdominal y la monitorización de la frecuencia cardíaca fetal, clasificaremos el cuadro entre las cuatro grandes causas de sangrado del tercer trimestre: placenta previa, desprendimiento prematuro de placenta normoinserta, rotura uterina o rotura de vasa previa.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial cardinal',
      title: 'Contraste clínico entre Placenta Previa y DPPNI',
      head: ['Parámetro de evaluación', 'Placenta Previa (PP)', 'Desprendimiento Prematuro (DPPNI)'],
      rows: [
        {
          cells: ['Características del sangrado', 'Rojo rutilante, brillante, fresco, sin coágulos', 'Rojo oscuro, negruzco, con coágulos o sangre oculta'],
          say: 'La placenta previa sangra con sangre arterial fresca y rutilante de origen materno desprendido del segmento inferior. Por el contrario, el desprendimiento cursa clásicamente con sangre venosa retenida de color rojo oscuro o incluso sangre oculta dentro de un hematoma retroplacentario no visible al exterior.',
        },
        {
          cells: ['Dolor abdominal y uterino', 'Indoloro; la paciente sangra sin dolor alguno', 'Dolor lacerante intenso súbito y continuo'],
          say: 'La placenta previa es clásicamente indolora; la gestante se despierta sobre un charco de sangre fresca sin haber sentido ninguna molestia. El desprendimiento prematuro de placenta normoinserta, en cambio, se caracteriza por un dolor abdominal lacerante brusco, intenso y sostenido en el tiempo.',
        },
        {
          cells: ['Tono y consistencia uterina', 'Útero blando, relajado, sin dinámica', 'Hipertonía uterina en tabla (tetania miometrial)'],
          say: 'A la palpación abdominal, el útero de la placenta previa es perfectamente blando y relajado. En el desprendimiento, la sangre infiltra el miometrio irritándolo y provocando una contractura tetánica sostenida, dando lugar al clásico útero de consistencia leñosa o útero en tabla.',
        },
        {
          cells: ['Estado del feto (FCF)', 'Frecuencia cardíaca normal; feto no comprometido', 'Sufrimiento fetal agudo precoz, bradicardia u óbito'],
          say: 'En la placenta previa el feto permanece inicialmente indemne con latidos cardiofetales normales porque el sangrado proviene de lagos vasculares maternos. En el desprendimiento, la separación brusca de la superficie de intercambio causa hipoxia severa, desaceleraciones tardías, bradicardia extrema y muerte fetal rápida si no se interviene.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Patología de inserción placentaria',
      title: 'Placenta Previa: fisiopatología, diagnóstico y conducta',
      nodes: [
        { id: 'rie', col: 0, row: 1, k: 'start', t: 'Factores de riesgo', s: 'Cicatriz de cesárea previa, legrados previos, multiparidad y tabaquismo' },
        { id: 'oci', col: 1, row: 1, k: 'mech', t: 'Inserción baja trofoblástica', s: 'Placenta cubre o contacta el orificio cervical interno en el segmento inferior' },
        { id: 'mig', col: 2, row: 0, k: 'good', t: 'Fenómeno de migración placentaria', s: 'Hasta 90% de placentas bajas en segundo trimestre se alejan al crecer el segmento' },
        { id: 'sem', col: 3, row: 1, k: 'alert', t: 'Diagnóstico definitivo a las 32 sem', s: 'Confirmación ecográfica transvaginal formal de placenta oclusiva' },
        { id: 'res', col: 4, row: 1, k: 'trap', t: 'Resolución por cesárea electiva', s: 'Cesárea programada a las 36 a 37 semanas con prevención de acretismo placentario' },
      ],
      edges: [
        { from: 'rie', to: 'oci', label: 'daño endometrial' },
        { from: 'oci', to: 'mig', label: 'semana 20 a 28' },
        { from: 'oci', to: 'sem', label: 'persistencia a 32 sem' },
        { from: 'sem', to: 'res', label: 'contraindicación vaginal' },
      ],
      steps: [
        {
          show: ['rie', 'oci'],
          note: 'Factores de riesgo e implantación anormal',
          say: 'El daño previo del endometrio por cicatrices de cesáreas anteriores, legrados uterinos o multiparidad favorece que el blastocisto nide en el segmento inferior del útero, cubriendo parcial o totalmente el orificio cervical interno. Este segmento es vascularmente pobre y poco elástico durante el estiramiento del tercer trimestre.',
        },
        {
          show: ['mig', 'sem'],
          note: 'Migración placentaria y diagnóstico a las 32 semanas',
          say: 'Durante el segundo trimestre, muchas placentas parecen bajas en la ecografía morfológica. Sin embargo, al desarrollarse y estirarse el segmento uterino inferior, más del noventa por ciento migran cefálicamente alejándose del cuello. Por esta razón, el diagnóstico definitivo de placenta previa se establece formalmente a las treinta y dos semanas.',
        },
        {
          show: ['res'],
          note: 'Interrupción por cesárea programada',
          say: 'Si a las treinta y dos semanas la placenta continúa cubriendo el orificio cervical interno, el parto vaginal está totalmente contraindicado. Se programa una operación cesárea electiva entre las treinta y seis y treinta y siete semanas, anticipando el riesgo de hemorragia y estando muy alertas ante la posible coexistencia de acretismo placentario.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Catástrofe del desprendimiento',
      title: 'DPPNI: desinserción aguda, hipertonía y coagulopatía',
      nodes: [
        { id: 'hta', col: 0, row: 1, k: 'start', t: 'Hipertensión materna (factor #1)', s: 'Preeclampsia o HTA crónica en el cincuenta por ciento de los desprendimientos' },
        { id: 'rup', col: 1, row: 1, k: 'mech', t: 'Rotura de arteriolas deciduales', s: 'Hemorragia en la decidua basal con formación de hematoma retroplacentario' },
        { id: 'tet', col: 2, row: 1, k: 'risk', t: 'Hipertonía uterina en tabla', s: 'La sangre irrita el miometrio desencadenando tetania sostenida y compresión vascular' },
        { id: 'asf', col: 3, row: 0, k: 'trap', t: 'Asfixia fetal aguda rápida', s: 'Pérdida de la superficie de intercambio gaseoso con bradicardia extrema y óbito' },
        { id: 'cid', col: 3, row: 2, k: 'trap', t: 'CID y útero de Couvelaire', s: 'Liberación de tromboplastina tisular decidual con consumo masivo de fibrinógeno' },
      ],
      edges: [
        { from: 'hta', to: 'rup', label: 'vasoespasmo y necrosis' },
        { from: 'rup', to: 'tet', label: 'extravasación decidual' },
        { from: 'tet', to: 'asf', label: 'anoxia placentaria' },
        { from: 'rup', to: 'cid', label: 'paso de factores procoagulantes' },
      ],
      steps: [
        {
          show: ['hta', 'rup'],
          note: 'Vasoespasmo decidual y hematoma retroplacentario',
          say: 'La hipertensión arterial materna, especialmente la preeclampsia, es el principal factor de riesgo para desprendimiento placentario. El vasoespasmo y la necrosis de las arteriolas espirales provocan la rotura vascular en la decidua basal, formándose un hematoma retroplacentario que desinserta mecánicamente la placenta de la pared uterina.',
        },
        {
          show: ['tet', 'asf'],
          note: 'Hipertonía miometrial y sufrimiento fetal',
          say: 'La sangre extravasada irrita intensamente el miometrio y genera una contracción tetánica sostenida conocida como útero leñoso o en tabla. Al perderse la superficie de intercambio de oxígeno y colapsar los vasos por la compresión miometrial, el feto entra en sufrimiento asfíctico agudo de extrema gravedad.',
        },
        {
          show: ['cid'],
          note: 'Coagulopatía de consumo y apoplejía de Couvelaire',
          say: 'La decidua y la placenta dañadas liberan grandes cantidades de tromboplastina tisular hacia la circulación materna, desencadenando una coagulación intravascular diseminada con consumo masivo de fibrinógeno y plaquetas. La sangre puede infiltrar todo el espesor miometrial formando el denominado útero de Couvelaire.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico clínico de DPPNI',
      title: 'Principios clínicos indispensables en desprendimiento prematuro',
      cards: [
        {
          title: 'El diagnóstico es clínico',
          tag: 'Limitación de la ecografía',
          kind: 'alert',
          items: [
            {
              t: 'La ecografía normal no descarta DPPNI',
              d: 'Solo pesquisa el hematoma retroplacentario en la mitad de los casos',
              say: 'La ecografía obstétrica tiene una sensibilidad de apenas el cincuenta por ciento en el desprendimiento agudo, porque la sangre fresca recién extravasada es isoecoica con el parénquima placentario. Un informe ecográfico normal jamás debe retrasar la decisión quirúrgica ante un cuadro clínico sugerente.',
            },
            {
              t: 'Tríada diagnóstica cardinal',
              d: 'Metrorragia oscura, dolor abdominal lacerante e hipertonía uterina',
              say: 'La coexistencia de metrorragia oscura con dolor uterino intenso y palpación de un útero rígido en tabla establece el diagnóstico clínico indiscutible de desprendimiento prematuro de placenta normoinserta.',
            },
          ],
        },
        {
          title: 'Conducta obstétrica de emergencia',
          tag: 'Interrupción expedita',
          kind: 'pharma',
          items: [
            {
              t: 'Operación cesárea de urgencia',
              d: 'Vía de elección ante feto viable y trabajo de parto no avanzado',
              say: 'En todo desprendimiento prematuro con feto vivo y viable la conducta obligatoria e indiscutible es la cesárea de urgencia inmediata para salvar la vida del feto y frenar el consumo progresivo de factores de coagulación en la madre.',
            },
            {
              t: 'Excepción de parto vaginal',
              d: 'Solo admisible si el expulsivo es inminente o si el feto ya está fallecido con madre estable',
              say: 'El parto por vía vaginal únicamente se contempla cuando la paciente multípara se encuentra ya en período expulsivo inminente con buena tolerancia, o bien ante un feto fallecido con madre hemodinámicamente compensada y sin coagulopatía activa.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Catástrofes obstétricas raras',
      title: 'Rotura Uterina y Rotura de Vasa Previa',
      cards: [
        {
          title: 'Rotura uterina intraparto',
          tag: 'Cicatriz de cesárea previa',
          kind: 'alert',
          items: [
            {
              t: 'Dolor desgarrador con cese de dinámica',
              d: 'Dolor lacerante súbito en acmé de contracción con alivio paradójico posterior',
              say: 'La rotura uterina ocurre casi exclusivamente durante el trabajo de parto en mujeres con antecedente de cesárea anterior. Se manifiesta por un dolor punzante desgarrador en el hipogastrio seguido del cese repentino y total de las contracciones uterinas.',
            },
            {
              t: 'Ascenso de la presentación fetal',
              d: 'El feto es expulsado a la cavidad abdominal y se palpa bajo la piel',
              say: 'El signo semiológico patognomónico es el ascenso y desaparición de la presentación fetal que ya estaba encajada en la pelvis, palpándose las partes fetales de forma anormalmente superficial directamente debajo de la pared abdominal materna.',
            },
            {
              t: 'Laparotomía exploradora urgente',
              d: 'Cirugía inmediata para extracción fetal y sutura o histerectomía',
              say: 'Exige laparotomía exploradora de extrema urgencia vital para rescatar al feto, controlar la hemorragia pélvica masiva y reparar el desgarro miometrial o realizar histerectomía obstétrica según la gravedad del daño.',
            },
          ],
        },
        {
          title: 'Rotura de vasa previa',
          tag: 'Sangrado fetal puro',
          kind: 'alert',
          items: [
            {
              t: 'Sangrado inmediato tras romper membranas',
              d: 'Metrorragia brusca al momento exacto de la amniorrexis espontánea o artificial',
              say: 'La vasa previa ocurre cuando vasos umbilicales fetales aberrantes de una inserción velamentosa cruzan sobre el orificio cervical interno sin protección de gelatina de Wharton. Al romperse las membranas, estos vasos se desgarran de inmediato.',
            },
            {
              t: 'Bradicardia fetal extrema y exanguinación',
              d: 'La sangre es cien por ciento fetal; el recién nacido entra en shock exanguinante en minutos',
              say: 'La sangre que brota es íntegramente de origen fetal. Como la volemia de un feto a término es de solo trescientos mililitros, la pérdida de cincuenta a cien mililitros causa un shock hipovolémico fulminante con bradicardia severa o patrón sinusoidal en el monitor.',
            },
            {
              t: 'Cesárea en código rojo inmediato',
              d: 'Extracción en menos de tres a cinco minutos para supervivencia fetal',
              say: 'La sospecha clínica obliga a realizar una operación cesárea en código rojo inmediato para intentar extraer al recién nacido en escasos minutos antes de que ocurra el paro cardiorrespiratorio por desangramiento.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Cuadro sinóptico de guardia',
      title: 'Diagnóstico diferencial de las cuatro metrorragias de la segunda mitad',
      head: ['Entidad clínica', 'Dolor uterino', 'Tono del miometrio', 'Compromiso fetal'],
      rows: [
        {
          cells: ['Placenta Previa', 'Completamente ausente (indolora)', 'Útero blando y relajado', 'Tardío o ausente (feto sano)'],
          say: 'En la placenta previa el sangrado es rojo rutilante, no hay dolor alguno y el útero permanece blando. La frecuencia cardíaca fetal se mantiene normal porque la hemorragia es de sangre materna.',
        },
        {
          cells: ['DPPNI', 'Dolor lacerante intenso continuo', 'Hipertonía uterina en tabla', 'Precoz y severo (asfixia aguda)'],
          say: 'El desprendimiento prematuro cursa con dolor abdominal desgarrador, tetania miometrial leñosa y un sufrimiento fetal agudo precoz que puede culminar rápidamente en óbito si no operamos de urgencia.',
        },
        {
          cells: ['Rotura Uterina', 'Dolor brusco y cese de dinámica', 'Pérdida de la forma uterina', 'Bradicardia fetal extrema o muerte'],
          say: 'La rotura uterina se anuncia por dolor agudo en una cicatriz previa, detención de las contracciones, ascenso de la cabeza fetal y colapso cardiovascular materno por sangrado intraperitoneal masivo.',
        },
        {
          cells: ['Rotura de Vasa Previa', 'Indolora materna', 'Tono uterino normal', 'Colapso fetal exanguinante inmediato'],
          say: 'La vasa previa sangra al romper las membranas en una madre asintomática con útero normal, pero desencadena bradicardia fetal extrema e instantánea porque la sangre vertida es enteramente del feto.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Abordaje ante Metrorragia de la Segunda Mitad del Embarazo',
      say: 'Revisemos el algoritmo estructurado de actuación frente a una hemorragia del tercer trimestre del embarazo, paso a paso para el examen y el turno hospitalario.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en preguntas de sangrado del tercer trimestre',
      head: ['Situación presentada en la pregunta', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Metrorragia abundante en paciente de 33 semanas sin ecografía previa', 'Realizar tacto vaginal para evaluar dilatación cervical y avance', 'Especuloscopía suave y ecografía transvaginal sin tacto digital'],
          say: 'El tacto vaginal digital sin disponer de una ecografía previa está formalmente proscrito en obstetricia, debido al riesgo catastrófico de desgarrar una placenta previa y generar un sangrado incontrolable.',
        },
        {
          cells: ['Metrorragia oscura con dolor e hipertonía pero ecografía normal', 'Descartar DPPNI porque la ecografía no visualizó el hematoma', 'Diagnosticar DPPNI por clínica y realizar cesárea de urgencia'],
          say: 'La ecografía obstétrica no descarta el desprendimiento placentario. El desprendimiento es un diagnóstico clínico soberano y ante hipertonía con dolor debemos proceder a la cesárea de urgencia.',
        },
        {
          cells: ['Placenta baja en contacto con el orificio cervical a las 24 semanas', 'Indicar cesárea programada definitiva por placenta previa', 'Controlar con ecografía transvaginal a las 32 semanas para confirmar migración'],
          say: 'A las veinticuatro semanas no se confirma el diagnóstico definitivo de placenta previa. Se programa una ecografía de control a las treinta y dos semanas para evaluar el fenómeno fisiológico de migración placentaria.',
        },
        {
          cells: ['Hemorragia súbita al romper membranas con bradicardia fetal extrema', 'Asumir placenta previa o hemorragia materna habitual', 'Diagnosticar rotura de vasa previa y realizar cesárea inmediata'],
          say: 'El sangrado inmediato tras la amniorrexis asociado a colapso de la frecuencia cardíaca fetal corresponde a una rotura de vasa previa y demanda una cesárea de extrema urgencia para evitar la exanguinación fetal.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2016',
      title: 'EUNACOM Julio 2016 · Pregunta 166',
      stem: 'Una paciente de 28 años, con 34 semanas de gestación, consulta por metrorragia moderada. Al examen físico tiene presión arterial de 130/70 mmHg, frecuencia cardíaca de 107 latidos por minuto, útero doloroso e hipertónico y metrorragia escasa en la especuloscopía. Se realiza ecografía obstétrica que resulta normal, con placenta posterior, sin signos de desprendimiento visible. El Doppler materno-fetal resulta normal y el cuello uterino mide 30 mm.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar nifedipino oral para frenar contracciones' },
        { letter: 'B', text: 'Inducción de parto con misoprostol' },
        { letter: 'C', text: 'Repetir el Doppler fetal en 7 días' },
        { letter: 'D', text: 'Realizar rotura artificial de membranas' },
        { letter: 'E', text: 'Realizar operación cesárea de urgencia' },
      ],
      correct: 'E',
      explanation: 'La presencia de dolor uterino marcado sumado a hipertonía uterina y metrorragia en el tercer trimestre establece el diagnóstico clínico inequívoco de Desprendimiento Prematuro de Placenta Normoinserta (DPPNI). La ecografía obstétrica normal NO descarta el cuadro, ya que su sensibilidad para visualizar el hematoma retroplacentario agudo es de apenas un 50%. Al tratarse de un feto de 34 semanas no en trabajo de parto avanzado, la conducta mandatoria es la interrupción inmediata mediante cesárea.',
      say: {
        stem: 'Una paciente de treinta y cuatro semanas consulta por sangrado genital, útero doloroso e hipertónico y ecografía obstétrica informada como enteramente normal sin desprendimiento visible.',
        question: '¿Cuál es la conducta más adecuada con la paciente?',
        options: 'La opción A propone nifedipino. La B inducción de parto con misoprostol. La C repetir Doppler en siete días. La D romper membranas. La E realizar operación cesárea. Piénsalo bien.',
        answer: 'La respuesta correcta es la E. Aunque la ecografía no observe el hematoma, la clínica de dolor e hipertonía uterina confirma el desprendimiento y exige la interrupción inmediata mediante cesárea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2016',
      title: 'EUNACOM Julio 2016 · Pregunta 40',
      stem: 'Una paciente multípara, con un parto anterior por cesárea, cursando con un nuevo embarazo de 35 semanas, consulta por metrorragia moderada fresca indolora. Al examen físico presenta una contracción uterina esporádica cada diez minutos con útero blando. Se realiza ecografía transvaginal que visualiza una placenta posterior que sobrepasa en dos centímetros al orificio cervical interno cubriéndolo completamente. El ecodoppler materno-fetal es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar tocolíticos y reposo domiciliario' },
        { letter: 'B', text: 'Inducir el parto con misoprostol vaginal' },
        { letter: 'C', text: 'Administrar corticoides para maduración pulmonar y esperar' },
        { letter: 'D', text: 'Repetir la ecografía obstétrica a las 37 semanas' },
        { letter: 'E', text: 'Realizar operación cesárea' },
      ],
      correct: 'E',
      explanation: 'La paciente presenta una Placenta Previa Oclusiva Total Sintomática (metrorragia activa en el tercer trimestre). Al haber superado las 34 semanas de gestación (cursa 35 semanas), la madurez pulmonar está prácticamente asegurada y el riesgo de hemorragia masiva supera los riesgos de la prematurez tardía. La conducta adecuada es la interrupción del embarazo mediante operación cesárea programada inmediata.',
      say: {
        stem: 'Una multípara con cesárea anterior de treinta y cinco semanas presenta metrorragia moderada e indolora con ecografía que confirma placenta previa oclusiva total sobre el cuello.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'La opción A propone tocolíticos. La B inducción con misoprostol. La C corticoides y esperar. La D repetir ecografía a las treinta y siete semanas. La E realizar cesárea. Piénsalo bien.',
        answer: 'La respuesta correcta es la E. Ante una placenta previa sintomática con más de treinta y cuatro semanas de gestación la conducta indicada es la interrupción mediante operación cesárea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2024',
      title: 'EUNACOM Julio 2024 · Pregunta 54',
      stem: 'Una mujer de 27 años, cursando un embarazo de 25 semanas, acude a control de su embarazo asintomática. Se solicita una ecografía obstétrica morfológica que muestra feto creciendo en percentil 50 con líquido amniótico normal, observándose que el borde inferior de la placenta se encuentra en contacto con el orificio cervical interno.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Inducir el parto de urgencia' },
        { letter: 'B', text: 'Realizar operación cesárea electiva' },
        { letter: 'C', text: 'Controlar con ecografía transvaginal en el tercer trimestre a las 32 semanas' },
        { letter: 'D', text: 'Administrar tocolíticos profilácticos' },
        { letter: 'E', text: 'Solicitar Doppler de arterias uterinas' },
      ],
      correct: 'C',
      explanation: 'El hallazgo de una placenta baja o en contacto con el orificio cervical interno en el segundo trimestre (25 semanas) es frecuente y en más del 90% de los casos se resuelve espontáneamente por el fenómeno de migración placentaria al desarrollarse el segmento inferior. El diagnóstico definitivo de placenta previa se realiza a las 32 semanas de gestación; por tanto, la conducta adecuada en una paciente asintomática es el control ecográfico diferido en el tercer trimestre.',
      say: {
        stem: 'Una paciente asintomática de veinticinco semanas presenta ecografía con placenta en contacto con el orificio cervical interno sin cubrirlo.',
        question: '¿Cuál es la conducta más adecuada a seguir?',
        options: 'La opción A propone inducir el parto. La B cesárea electiva. La C controlar con ecografía en el tercer trimestre a las treinta y dos semanas. La D tocolíticos. La E Doppler uterino. Piénsalo bien.',
        answer: 'La respuesta correcta es la C. Debido al fenómeno de migración placentaria, las placentas bajas del segundo trimestre se controlan ecográficamente a las treinta y dos semanas para confirmar su posición definitiva.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Diciembre 2024',
      title: 'EUNACOM Diciembre 2024 · Pregunta 96',
      stem: 'Una embarazada de 32 semanas consulta por dolor abdominal intenso y sangrado genital escaso oscuro. Al examen físico destaca útero hipertónico y doloroso a la palpación. La ecografía obstétrica de urgencia evidencia un desprendimiento de placenta de moderada cuantía con compromiso del flujo retroplacentario y desaceleraciones variables en la monitorización fetal.',
      question: '¿Cuál es la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Operación cesárea de urgencia' },
        { letter: 'B', text: 'Manejo expectante hasta alcanzar las 34 semanas' },
        { letter: 'C', text: 'Administrar corticoides y reevaluar en 48 horas en sala' },
        { letter: 'D', text: 'Inducción de parto con oxitocina' },
        { letter: 'E', text: 'Reposo absoluto en decúbito lateral y tocolíticos' },
      ],
      correct: 'A',
      explanation: 'El cuadro corresponde a un Desprendimiento Prematuro de Placenta Normoinserta (DPPNI) con repercusión fetal (desaceleraciones en monitorización). En presencia de compromiso materno o sufrimiento fetal agudo por desinserción placentaria, la única medida capaz de evitar el óbito fetal y la coagulopatía de consumo materna es la resolución quirúrgica inmediata mediante cesárea de urgencia.',
      say: {
        stem: 'Una embarazada de treinta y dos semanas presenta dolor abdominal intenso, metrorragia oscura, hipertonía uterina y ecografía con desprendimiento placentario y desaceleraciones fetales.',
        question: '¿Cuál es la conducta médica indicada?',
        options: 'La opción A plantea operación cesárea de urgencia. La B esperar a las treinta y cuatro semanas. La C corticoides y evaluar en cuarenta y ocho horas. La D oxitocina. La E reposo y tocolíticos. Piénsalo bien.',
        answer: 'La respuesta correcta es la A. Ante un desprendimiento prematuro de placenta con compromiso clínico y desaceleraciones fetales la indicación es la cesárea de urgencia inmediata.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso Clínico EUNACOM',
      title: 'Rotura de Vasa Previa · Diagnóstico Cardinal',
      stem: 'Durante la atención de un parto de término, inmediatamente tras realizar la rotura artificial de membranas (amniotomía), se observa salida de líquido amniótico con sangre fresca rutilante moderada. En el monitor cardiofetal se aprecia de forma simultánea una brusca caída de la frecuencia cardíaca fetal a 70 lpm con desaceleraciones severas sostenidas. La madre está normotensa, afebril, sin dolor abdominal y con dinámica uterina de parto normal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Rotura de Vasa Previa' },
        { letter: 'B', text: 'Placenta previa oclusiva total' },
        { letter: 'C', text: 'Desprendimiento prematuro de placenta normoinserta' },
        { letter: 'D', text: 'Laceración traumática de cuello uterino' },
        { letter: 'E', text: 'Corioamnionitis clínica aguda' },
      ],
      correct: 'A',
      explanation: 'La tríada clásica de metrorragia inmediatamente posterior a la rotura de membranas (amniotomía), asociada a sufrimiento fetal agudo severo instantáneo (bradicardia extrema), en una madre asintomática con útero relajado, es diagnóstica de Rotura de Vasa Previa. Los vasos aberrantes se desgarran al romperse las membranas; la sangre es fetal y el feto se desangra rápidamente. Exige cesárea de extrema urgencia.',
      say: {
        stem: 'Durante un parto de término, inmediatamente tras romper membranas de forma artificial, aparece líquido con sangre roja rutilante y bradicardia fetal extrema súbita sin dolor materno.',
        question: '¿Cuál es el diagnóstico más probable en esta paciente?',
        options: 'La opción A plantea rotura de vasa previa. La B placenta previa oclusiva. La C desprendimiento prematuro normoinserto. La D laceración cervical. La E corioamnionitis aguda. Reflexiona tu respuesta.',
        answer: 'La respuesta correcta es la A. La aparición de metrorragia inmediatamente tras romper membranas con colapso cardiofetal instantáneo es la presentación patognomónica de rotura de vasa previa.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave en metrorragias de la segunda mitad para el EUNACOM',
      cards: [
        {
          title: 'Semiología y contraindicaciones',
          tag: 'Diagnóstico de certeza',
          kind: 'key',
          items: [
            {
              t: 'Prohibido el tacto vaginal a ciegas',
              d: 'Puede desgarrar una placenta previa y causar hemorragia masiva',
              say: 'Jamás realices un tacto vaginal digital en una metrorragia de la segunda mitad del embarazo sin antes confirmar con certeza la localización de la placenta mediante ecografía transvaginal.',
            },
            {
              t: 'Placenta previa indolora; DPPNI doloroso',
              d: 'La placenta previa cursa con útero blando; el DPPNI con útero en tabla',
              say: 'La placenta previa sangra con sangre roja brillante fresca sin dolor; el desprendimiento prematuro sangra con sangre oscura retenida, dolor abdominal lacerante y marcado útero en tabla.',
            },
          ],
        },
        {
          title: 'Ecografía e intervenciones',
          tag: 'Conductas de emergencia',
          kind: 'alert',
          items: [
            {
              t: 'DPPNI es diagnóstico clínico',
              d: 'La ecografía normal no descarta el desprendimiento agudo',
              say: 'Una ecografía normal nunca descarta un desprendimiento prematuro de placenta; ante útero hipertónico y doloroso se indica cesárea de urgencia inmediata para salvar la vida fetal.',
            },
            {
              t: 'Rotura de vasa previa tras amniorrexis',
              d: 'Sangrado inmediato con bradicardia fetal extrema exanguinante',
              say: 'La metrorragia que aparece inmediatamente tras romper las membranas con bradicardia fetal fulminante es rotura de vasa previa y requiere cesárea en código rojo inmediato.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de la Metrorragia de la Segunda Mitad del Embarazo',
    root: N(
      'start',
      'Metrorragia de la Segunda Mitad (mayor a 20-24 semanas)',
      '¡NO REALIZAR TACTO VAGINAL! · Evaluación de signos vitales maternos y FCF',
      'Iniciamos el abordaje recordando que el tacto vaginal digital está formalmente prohibido hasta conocer con certeza la inserción placentaria por ecografía.',
      [
        'Metrorragia indolora con sangre roja fresca y útero blando',
        N(
          'q',
          'Sospecha de Placenta Previa',
          'Especuloscopía suave + ecografía transvaginal para medir distancia a OCI',
          'Si el sangrado es rojo fresco y sin dolor, sospechamos placenta previa y realizamos una especuloscopía suave junto a ecografía transvaginal.',
          [
            'Placenta cubre OCI confirmada a las 32 semanas',
            N(
              'do',
              'Cesárea Electiva a las 36 a 37 semanas',
              'Hospitalización si hay sangrado activo · cesárea urgente ante hemorragia masiva',
              'Si la placenta cubre el cuello a las treinta y dos semanas, programamos cesárea electiva a las treinta y seis a treinta y siete semanas.',
            ),
          ],
          [
            'Placenta baja a más de 10 a 20 mm del OCI',
            N(
              'ok',
              'Permitir Prueba de Parto Vaginal',
              'Vigilancia en sala de partos con disponibilidad inmediata de pabellón',
              'Si el borde placentario dista más de uno a dos centímetros del orificio cervical interno, puede permitirse una prueba de parto vaginal.',
            ),
          ],
        ),
      ],
      [
        'Metrorragia oscura con dolor lacerante e hipertonía en tabla',
        N(
          'alert',
          'Desprendimiento Prematuro de Placenta (DPPNI)',
          'Diagnóstico clínico inmediato · la ecografía normal NO descarta DPPNI',
          'Si la gestante presenta dolor abdominal lacerante e hipertonía uterina leñosa diagnosticamos desprendimiento prematuro de placenta por clínica soberana.',
          [
            'Feto viable no en período expulsivo',
            N(
              'do',
              'Operación Cesárea de Urgencia Inmediata',
              'Reanimación hemodinámica, estudio de coagulación y prevención de CID',
              'Indicamos cesárea de urgencia inmediata para salvar la vida fetal y prevenir la coagulopatía de consumo materna.',
            ),
          ],
        ),
      ],
      [
        'Cese brusco de contracciones con dolor desgarrador previo y feto palpable',
        N(
          'alert',
          'Rotura Uterina',
          'Laparotomía exploradora de extrema urgencia para hemostasia e histerectomía si procede',
          'Ante la sospecha clínica de rotura uterina con cese de dinámica y ascenso de la presentación, ingresamos de inmediato a laparotomía exploradora de urgencia vital.',
        ),
      ],
      [
        'Sangrado brusco inmediatamente tras romper membranas con bradicardia fetal',
        N(
          'alert',
          'Rotura de Vasa Previa',
          'Cesárea en código rojo inmediato por riesgo inminente de exanguinación fetal',
          'La rotura de vasa previa tras la amniorrexis exige cesárea en código rojo para evitar la muerte fetal fulminante por exanguinación.',
        ),
      ],
    ),
  },
};
