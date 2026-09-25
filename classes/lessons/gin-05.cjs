// Clase 20.5 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Endometriosis y adenomiosis: fisiopatología, tríada cardinal, imagenología en vidrio esmerilado y manejo médico escalonado',
      say: 'Bienvenidos a la clase sobre endometriosis y adenomiosis, dos de las patologías ginecológicas inflamatorias más prevalentes y discapacitantes en la mujer en edad fértil. En esta sesión aprenderemos a reconocer la tríada cardinal de dismenorrea, dispareunia e infertilidad, interpretaremos la ecografía con el clásico endometrioma en vidrio esmerilado, dominaremos el uso de dienogest continuo para el dolor pélvico entendiendo por qué las hormonas no mejoran la fertilidad, y contrastaremos la endometriosis con la adenomiosis. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo biológico',
      title: 'Fisiopatología de la Endometriosis: de la menstruación retrógrada al implante',
      nodes: [
        { id: 'ret', col: 0, row: 1, k: 'start', t: 'Menstruación retrógrada (Sampson)', s: 'Flujo menstrual transtubárico con células endometriales viables hacia el peritoneo' },
        { id: 'adh', col: 1, row: 1, k: 'mech', t: 'Adhesión e invasión peritoneal', s: 'Falla del aclaramiento inmune local mediado por macrófagos y natural killer' },
        { id: 'est', col: 2, row: 1, k: 'risk', t: 'Microambiente estrógeno-dependiente', s: 'Aromatasa local produce estradiol estimulando cicloxigenasa dos y prostaglandinas' },
        { id: 'fib', col: 3, row: 0, k: 'trap', t: 'Fibrosis, adherencias y dolor', s: 'Hemorragia cíclica microcitaria con adherencias densas y distorsión anatómica' },
        { id: 'qui', col: 3, row: 2, k: 'trap', t: 'Endometrioma ovárico de chocolate', s: 'Invaginación de la corteza ovárica con acumulación de sangre degradada' },
      ],
      edges: [
        { from: 'ret', to: 'adh', label: 'reflujo tubárico' },
        { from: 'adh', to: 'est', label: 'implantación' },
        { from: 'est', to: 'fib', label: 'inflamación crónica' },
        { from: 'est', to: 'qui', label: 'afectación ovárica' },
      ],
      steps: [
        {
          show: ['ret', 'adh'],
          note: 'Teoría de Sampson y escape inmune',
          say: 'La teoría más aceptada es la de Sampson o de la menstruación retrógrada: durante la menstruación, tejido endometrial viable refluye por las trompas hacia la cavidad peritoneal. En mujeres susceptibles existe un defecto inmune que impide a los macrófagos eliminar estas células, permitiendo su adhesión al peritoneo.',
        },
        {
          show: ['est', 'fib', 'qui'],
          note: 'Estrógeno-dependencia, fibrosis y endometriomas',
          say: 'Los implantes ectópicos expresan aromatasa y sintetizan su propio estradiol, retroalimentando una cascada inflamatoria crónica de prostaglandinas. Con cada ciclo menstrual sangran internamente provocando fibrosis severa, adherencias pélvicas densas y quistes achocolatados en los ovarios conocidos como endometriomas.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Mapeo anatómico',
      title: 'Localizaciones Anatómicas Típicas y Atípicas de la Endometriosis',
      cards: [
        {
          title: 'Localizaciones Pélvicas Más Frecuentes',
          tag: 'Compromiso ginecológico directo',
          kind: 'key',
          items: [
            {
              t: 'Ovarios (sesenta a setenta por ciento)',
              d: 'Principal sitio de implante formando endometriomas ováricos uni o bilaterales',
              say: 'El ovario es la localización anatómica más común en más del sesenta al setenta por ciento de las pacientes. Allí el tejido ectópico penetra la corteza formando los clásicos endometriomas ováricos o quistes de chocolate rellenos de hemosiderina espesa.',
            },
            {
              t: 'Fondo de saco de Douglas y ligamentos uterosacros',
              d: 'Generan nódulos dolorosos palpables y traccionan el útero en retroversión fija',
              say: 'La implantación en el fondo de saco de Douglas y en ambos ligamentos uterosacros genera una intensa reacción desmoplásica y cicatrizal. Esto retrae el fondo uterino hacia atrás, fijándolo en retroversoflexión rígida y provocando dolor exquisito a la movilización cervical.',
            },
            {
              t: 'Tabique rectovaginal y colon recto-sigmoides',
              d: 'Infiltración profunda de la pared muscular intestinal que ocasiona disquecia cíclica',
              say: 'La invasión del tabique rectovaginal y de la pared muscular anterior del recto genera disquecia cíclica, definida como un dolor punzante e invalidante al defecar que coincide exclusivamente con los días del sangrado menstrual.',
            },
          ],
        },
        {
          title: 'Localizaciones Atípicas y Extrapélvicas',
          tag: 'Manifestaciones catameniales raras',
          kind: 'alert',
          items: [
            {
              t: 'Vejiga y uréteres pelvianos',
              d: 'Originan disuria cíclica, tenesmo vesical y hematuria macroscópica catamenial',
              say: 'El compromiso de la vejiga y uréteres pelvianos produce disuria dolorosa, tenesmo y hematuria macroscópica que coincide exactamente con la menstruación, debiendo sospecharse ante mujeres con síntomas urinarios recurrentes y urocultivos repetidamente negativos.',
            },
            {
              t: 'Pleura y diafragma (neumotórax catamenial)',
              d: 'Implantes torácicos que sangran y se perforan provocando colapso pulmonar cíclico',
              say: 'La presencia de implantes endometriósicos en el hemidiafragma o en la pleura visceral puede erosionar el tejido durante el sangrado catamenial, originando un neumotórax catamenial recurrente que colapsa el pulmón de forma sincrónica con la regla.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de consulta',
      title: 'La Tríada Cardinal de Síntomas de la Endometriosis',
      cards: [
        {
          title: 'Los Tres Síntomas Cardinales (Pregunta Fija EUNACOM)',
          tag: 'Sospecha clínica inmediata',
          kind: 'key',
          items: [
            {
              t: 'Dismenorrea secundaria progresiva severa',
              d: 'Dolor cólico pélvico que empeora con los años y no cede a analgésicos comunes',
              say: 'La dismenorrea secundaria progresiva es el síntoma cardinal más frecuente de la endometriosis. Se trata de un dolor cólico pelviano intenso que se agrava año tras año y que no responde adecuadamente a los antiinflamatorios no esteroidales habituales.',
            },
            {
              t: 'Dispareunia profunda',
              d: 'Dolor severo con la penetración sexual profunda por estiramiento de ligamentos uterosacros',
              say: 'La dispareunia profunda se caracteriza por dolor lacerante agudo durante las relaciones sexuales con la penetración profunda, desencadenado por la tracción mecánica de los implantes nodulares situados en los ligamentos uterosacros y el fondo de saco.',
            },
            {
              t: 'Infertilidad o esterilidad primaria y secundaria',
              d: 'Presente en el treinta al cincuenta por ciento de las pacientes con endometriosis',
              say: 'La infertilidad afecta a entre un treinta y cincuenta por ciento de las mujeres con endometriosis. Se origina tanto por barreras mecánicas obstructivas tubáricas como por la presencia de un líquido peritoneal altamente inflamatorio que altera la fecundación.',
            },
          ],
        },
        {
          title: 'Signos al Examen Físico Ginecológico',
          tag: 'Hallazgos semiológicos al tacto',
          kind: 'criteria',
          items: [
            {
              t: 'Útero en retroversoflexión fija',
              d: 'Pérdida de la movilidad fisiológica del cuerpo uterino por adherencias densas',
              say: 'Al tacto bimanual llama la atención la inmovilidad del útero, encontrándose fijado hacia posterior por bridas adherenciales densas en la pelvis menor.',
            },
            {
              t: 'Nódulos exquisitamente sensibles en fórnix posterior',
              d: 'Palpación de pequeños nódulos azulados o indurados en los ligamentos uterosacros',
              say: 'La palpación del fondo de saco posterior y de los ligamentos uterosacros revela nódulos indurados sumamente dolorosos al menor roce digital.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estudio de imágenes y confirmación',
      title: 'Herramientas Diagnósticas en Endometriosis: de la Ecografía a la Biopsia',
      head: ['Método diagnóstico', 'Hallazgo patológico característico', 'Rol y utilidad clínica'],
      rows: [
        {
          cells: ['Ecografía transvaginal especializada', 'Quiste ovárico de pared fina con ecos homogéneos de bajo nivel en vidrio esmerilado', 'Estudio inicial de elección para diagnosticar endometriomas ováricos'],
          say: 'La ecografía transvaginal es el examen inicial de primera línea para diagnosticar endometriomas ováricos, caracterizados típicamente por una masa quística de pared fina con ecos internos homogéneos de bajo nivel en vidrio esmerilado y ausencia de vascularización interna.',
        },
        {
          cells: ['Resonancia magnética de pelvis', 'Mapeo detallado de nódulos infiltrantes en tabique rectovaginal vejiga y ligamentos', 'Estándar de oro en imágenes para planificación de endometriosis profunda'],
          say: 'La resonancia magnética pélvica de alta resolución constituye el mejor estudio por imágenes no invasivo para mapear con precisión anatómica milimétrica los nódulos de endometriosis profunda que infiltran los ligamentos uterosacros, el tabique rectovaginal y la pared intestinal.',
        },
        {
          cells: ['Laparoscopía quirúrgica con biopsia', 'Visualización directa de lesiones en quemadura de pólvora o vesículas rojas con histología', 'Estándar de oro diagnóstico definitivo formal'],
          say: 'La laparoscopía quirúrgica con toma de biopsia para confirmación histológica de glándulas y estroma endometrial ectópico constituye el estándar de oro diagnóstico definitivo, permitiendo resecar o vaporizar los implantes y liberar adherencias en el mismo tiempo quirúrgico.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Bifurcación de conducta',
      title: 'Algoritmo Terapéutico: ¿Dolor Pélvico o Deseo de Fertilidad?',
      nodes: [
        { id: 'dia', col: 0, row: 1, k: 'start', t: 'Diagnóstico de Endometriosis', s: 'Clínica sugerente con o sin confirmación imagenológica o quirúrgica' },
        { id: 'dol', col: 1, row: 0, k: 'alert', t: 'Objetivo principal: Dolor Pélvico', s: 'Paciente sin deseo reproductivo en el momento actual' },
        { id: 'far', col: 2, row: 0, k: 'good', t: 'Tratamiento médico hormonal', s: 'Dienogest continuo, progestágenos o análogos de la GnRH' },
        { id: 'fer', col: 1, row: 2, k: 'alert', t: 'Objetivo principal: Fertilidad', s: 'Pareja que busca embarazo activo de forma inmediata' },
        { id: 'qui', col: 2, row: 2, k: 'good', t: 'Cirugía conservadora o FIV', s: '¡Prohibido dar hormonas! Quistectomía conservadora o fertilización in vitro' },
      ],
      edges: [
        { from: 'dia', to: 'dol', label: 'síntoma: dolor' },
        { from: 'dol', to: 'far', label: 'supresión estrogénica' },
        { from: 'dia', to: 'fer', label: 'deseo: embarazo' },
        { from: 'fer', to: 'qui', label: 'no dar anticonceptivos' },
      ],
      steps: [
        {
          show: ['dia', 'dol', 'far'],
          note: 'Manejo del dolor pélvico en mujer sin deseo reproductivo',
          say: 'Si el motivo principal de consulta es el dolor y la paciente no busca embarazo inmediato, el tratamiento de elección es médico hormonal. Buscamos inducir amenorrea e hipoestrogenismo para atrofiar los implantes mediante progestágenos continuos.',
        },
        {
          show: ['dia', 'fer', 'qui'],
          note: 'Manejo de la infertilidad: ¡prohibido dar anticonceptivos!',
          say: 'Si la paciente consulta por infertilidad, está formalmente contraindicado prescribir anticonceptivos o progestágenos, ya que no curan las adherencias, frenan la ovulación y solo retrasan el embarazo. La conducta es la cirugía laparoscópica conservadora o la fertilización in vitro.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo médico del dolor',
      title: 'Tratamiento Farmacológico Escalonado del Dolor en Endometriosis',
      cards: [
        {
          title: 'Primera Línea: Progestágenos Continuos',
          tag: 'Dienogest 2 mg al día',
          kind: 'pharma',
          items: [
            {
              t: 'Dienogest dos miligramos al día vía oral',
              d: 'Progestágeno de cuarta generación con potente actividad antiinflamatoria y antiangiogénica',
              say: 'El progestágeno de cuarta generación dienogest en dosis de dos miligramos al día por vía oral continua es el fármaco de primera línea de elección, inhibiendo la secreción de citocinas inflamatorias y atrofiando los implantes con alivio sintomático duradero.',
            },
            {
              t: 'Dispositivo intrauterino liberador de levonorgestrel',
              d: 'Excelente opción para dismenorrea severa y endometriosis peritoneal superficial',
              say: 'El dispositivo intrauterino liberador de levonorgestrel es una alternativa sobresaliente para el manejo del dolor pélvico y la dismenorrea, ejerciendo una potente acción antiproliferativa local sobre el endometrio con mínimas concentraciones hormonales sistémicas.',
            },
          ],
        },
        {
          title: 'Segunda Línea: Análogos de GnRH',
          tag: 'Menopausia médica temporal',
          kind: 'alert',
          items: [
            {
              t: 'Agonistas de la GnRH (Leuprolide o Goserelina)',
              d: 'Desensibilización de receptores hipofisarios induciendo hipogonadismo hipogonadótropo profundo',
              say: 'Los agonistas de la hormona liberadora de gonadotropinas como el acetato de leuprolide bloquean el eje reproductor induciendo una menopausia química transitoria, utilizándose como segunda línea en dolores severos rebeldes a los progestágenos.',
            },
            {
              t: 'Add-back therapy obligatoria',
              d: 'Adición de dosis bajas de estrógenos y progestágenos para proteger el hueso y reducir bochornos',
              say: 'Cuando se prescribe un tratamiento con agonistas de GnRH prolongado por más de tres meses es mandatorio agregar terapia add-back con dosis muy bajas de estrógenos y progestágenos para neutralizar los bochornos y proteger la densidad mineral ósea.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Regla de oro de fertilidad',
      title: 'Infertilidad y Endometriosis: por qué las hormonas no sirven',
      cards: [
        {
          title: 'Incompatibilidad de Hormonas con la Fertilidad',
          tag: 'Concepto clave EUNACOM',
          kind: 'alert',
          items: [
            {
              t: 'Las hormonas no mejoran las tasas de embarazo',
              d: 'Los anticonceptivos combinados o progestágenos suspenden la ovulación sin resolver adherencias',
              say: 'La evidencia científica ha demostrado de forma contundente que la supresión médica ovárica con anticonceptivos orales o progestágenos no mejora en absoluto las tasas de embarazo ni de nacidos vivos tras suspender la medicación.',
            },
            {
              t: 'Pérdida de tiempo reproductivo valioso',
              d: 'Retrasa innecesariamente el tratamiento de fertilidad en mujeres con reserva ovárica decreciente',
              say: 'Indicar tratamiento hormonal a una paciente con endometriosis y deseo de fertilidad constituye un error grave: bloquea la ovulación sin resolver las adherencias pélvicas y retrasa el acceso oportuno a técnicas de reproducción asistida.',
            },
          ],
        },
        {
          title: 'Conducta Correcta ante Infertilidad',
          tag: 'Cirugía conservadora y reproducción asistida',
          kind: 'key',
          items: [
            {
              t: 'Cistectomía ovárica laparoscópica conservadora',
              d: 'Extirpación de la cápsula del endometrioma preservando el tejido ovárico sano circundante',
              say: 'En presencia de endometriomas ováricos de más de tres a cuatro centímetros la conducta indicada es la cistectomía laparoscópica meticulosa, disecando la pared del quiste con preservación máxima del estroma ovárico sano y liberando las adherencias tubáricas.',
            },
            {
              t: 'Fertilización In Vitro (FIV)',
              d: 'Técnica de reproducción asistida de alta complejidad de primera elección en daño tubárico severo',
              say: 'En pacientes con distorsión pélvica anatómica severa, daño tubárico bilateral irreversible o reserva ovárica disminuida, la fertilización in vitro es la técnica de reproducción asistida de alta complejidad con mayor efectividad demostrada.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Patología miometrial',
      title: 'Adenomiosis Uterina: invasión endometrial ectópica en el miometrio',
      nodes: [
        { id: 'uni', col: 0, row: 1, k: 'start', t: 'Ruptura de la unión endometrio-miometrio', s: 'Trauma mecánico por partos múltiples legrados o cesáreas previas' },
        { id: 'inv', col: 1, row: 1, k: 'mech', t: 'Migración glandular al espesor muscular', s: 'Glándulas y estroma endometrial penetran más de dos punto cinco milímetros' },
        { id: 'hip', col: 2, row: 1, k: 'effect', t: 'Hipertrofia miometrial concéntrica', s: 'El miometrio reacciona engrosándose difusamente dando aspecto globuloso' },
        { id: 'san', col: 3, row: 0, k: 'trap', t: 'Hipermenorrea y dismenorrea severa', s: 'Falla en la contracción hemostática miometrial durante la menstruación' },
        { id: 'ute', col: 3, row: 2, k: 'alert', t: 'Útero aumentado simétrico y blando', s: 'Hallazgo semiológico clásico de útero aumentado difusamente a 10 a 12 semanas' },
      ],
      edges: [
        { from: 'uni', to: 'inv', label: 'microtrauma' },
        { from: 'inv', to: 'hip', label: 'infiltración' },
        { from: 'hip', to: 'san', label: 'disfunción vascular' },
        { from: 'hip', to: 'ute', label: 'crecimiento difuso' },
      ],
      steps: [
        {
          show: ['uni', 'inv', 'hip'],
          note: 'Invasión profunda de la unión endometrial-miometrial',
          say: 'La adenomiosis se origina cuando la barrera de la zona de unión endometrio-miometrial se rompe, habitualmente por legrados, cesáreas o multiparidad. Las glándulas y estroma endometrial invaden el espesor del miometrio, induciendo una hipertrofia muscular reactiva compensatoria.',
        },
        {
          show: ['san', 'ute'],
          note: 'Trastorno hemorrágico y semiología del útero adenomiósico',
          say: 'Este miometrio infiltrado y desorganizado pierde su capacidad de contracción fisiológica hemostática, manifestándose típicamente por sangrado uterino abundante o hipermenorrea y dismenorrea en multíparas de más de cuarenta años con un útero difusamente aumentado y blando.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Contraste nosológico',
      title: 'Contraste Clínico y Anatomopatológico: Endometriosis vs Adenomiosis',
      head: ['Parámetro de comparación', 'Endometriosis Externa', 'Adenomiosis Uterina'],
      rows: [
        {
          cells: ['Localización anatómica', 'Fuera del útero: ovarios, peritoneo pelviano, ligamentos uterosacros y tabique', 'Dentro del espesor del miometrio uterino con hipertrofia muscular'],
          say: 'La endometriosis se localiza fuera del útero en peritoneo y ovarios; la adenomiosis se confina exclusivamente al interior del espesor de la pared muscular uterina.',
        },
        {
          cells: ['Perfil epidemiológico típico', 'Mujeres jóvenes de 20 a 35 años, nulíparas con dolor severo e infertilidad', 'Multíparas de 40 a 50 años con partos previos y antecedentes de legrados'],
          say: 'La endometriosis afecta típicamente a mujeres jóvenes en busca de fertilidad; la adenomiosis se presenta clásicamente en multíparas mayores de cuarenta años.',
        },
        {
          cells: ['Signo semiológico cardinal', 'Útero en retroversoflexión fija con nódulos dolorosos en fondo de saco', 'Útero uniformemente aumentado de tamaño de 10 a 12 semanas, globuloso y blando'],
          say: 'La endometriosis fija el útero en retroversión dolorosa con nódulos pelvianos; la adenomiosis genera un útero globuloso, blando y simétricamente aumentado de volumen.',
        },
        {
          cells: ['Tratamiento definitivo', 'Laparoscopía quirúrgica y técnicas de reproducción asistida', 'Histerectomía total en paridad cumplida o dispositivo intrauterino liberador de levonorgestrel'],
          say: 'La endometriosis requiere cirugía conservadora o fertilización in vitro; la adenomiosis refractaria se cura de forma definitiva mediante histerectomía total.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio y tratamiento',
      title: 'Diagnóstico Ecográfico y Manejo Terapéutico de la Adenomiosis',
      cards: [
        {
          title: 'Signos Ecográficos Transvaginales',
          tag: 'Criterios MUSA',
          kind: 'criteria',
          items: [
            {
              t: 'Asimetría de paredes miometriales',
              d: 'Engrosamiento marcado de la pared posterior con aspecto heterogéneo y globuloso',
              say: 'La ecografía ginecológica transvaginal revela una asimetría miometrial característica, evidenciando un engrosamiento heterogéneo prominente de la pared miometrial posterior respecto a la pared anterior, con pérdida de la definición neta de la interfase endometrial.',
            },
            {
              t: 'Estriaciones lineales y microquistes miometriales',
              d: 'Presencia de lagunas anecoicas subendometriales de uno a cinco milímetros con sombras en abanico',
              say: 'El parénquima miometrial muestra múltiples microquistes anecoicos de uno a cinco milímetros rodeados de halos hiperecogénicos, acompañados de estriaciones lineales subendometriales divergentes y sombras acústicas en abanico típicas de la adenomiosis.',
            },
          ],
        },
        {
          title: 'Estrategia Terapéutica Escalonada',
          tag: 'Médico vs Quirúrgico',
          kind: 'pharma',
          items: [
            {
              t: 'Dispositivo intrauterino con Levonorgestrel',
              d: 'Tratamiento médico de primera línea que reduce el sangrado y el dolor en más del 80%',
              say: 'El dispositivo intrauterino con levonorgestrel es el tratamiento médico de primera línea de elección para la adenomiosis, logrando atrofia endometrial y disminuyendo el sangrado.',
            },
            {
              t: 'Histerectomía total en paridad cumplida',
              d: 'Único tratamiento curativo definitivo para mujeres con síntomas severos refractarios',
              say: 'En mujeres con paridad cumplida y síntomas severos refractarios al tratamiento médico, la histerectomía total constituye el único tratamiento curativo definitivo.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo Clínico de Manejo Escalonado de la Sospecha de Endometriosis',
      say: 'Revisemos el algoritmo estructurado para el diagnóstico y tratamiento de la paciente con dolor pélvico cíclico o infertilidad.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Endometriosis y Dolor Pélvico · Tratamiento Farmacológico',
      stem: 'Una paciente de 26 años consulta por dismenorrea secundaria severa que le impide asistir al trabajo durante sus menstruaciones, dispareunia profunda y dispareunia al defecar (disquecia) durante los días de sangrado. Al tacto bimanual se palpa el útero en retroversoflexión fija con gran sensibilidad en los ligamentos uterosacros. La ecografía ginecológica muestra un quiste ovárico derecho de 3.5 cm con ecos internos homogéneos de bajo nivel en vidrio esmerilado. La paciente no desea embarazo en la actualidad.',
      question: '¿Cuál es el tratamiento farmacológico oral de primera línea de elección para el control de sus síntomas dolorosos?',
      options: [
        { letter: 'A', text: 'Paracetamol 500 mg cada 12 horas solo durante el sangrado' },
        { letter: 'B', text: 'Dienogest 2 mg al día por vía oral de forma continua' },
        { letter: 'C', text: 'Metotrexato intramuscular a dosis única' },
        { letter: 'D', text: 'Citrato de Clomifeno oral por 5 días cada mes' },
        { letter: 'E', text: 'Terapia de reemplazo hormonal con estrógenos equinos solos' },
      ],
      correct: 'B',
      explanation: 'La paciente presenta una endometriosis sintomática clásica con endometrioma ovárico y compromiso del tabique/ligamentos uterosacros (tríada: dismenorrea secundaria severa, dispareunia profunda y disquecia catamenial). Al no existir deseo de embarazo inmediato, el tratamiento médico de primera línea para el control del dolor y la supresión de los implantes endometriósicos es el uso continuo de progestágenos orales de cuarta generación, siendo DIENOGEST 2 mg al día por vía oral el fármaco de elección con mayor respaldo de eficacia y tolerabilidad clínica.',
      say: {
        stem: 'Una paciente de veintiséis años presenta dismenorrea severa incapacitante, dispareunia profunda, disquecia y ecografía con quiste ovárico en vidrio esmerilado sin deseo reproductivo.',
        question: '¿Cuál es el tratamiento farmacológico oral de primera línea de elección para sus síntomas dolorosos?',
        options: 'La opción A propone paracetamol solo en la menstruación. La B dienogest dos miligramos al día por vía oral de forma continua. La C metotrexato. La D citrato de clomifeno. La E estrógenos solos. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. En una paciente con endometriosis y dolor sin deseo gestacional, el dienogest dos miligramos al día continuo es el tratamiento oral de primera línea de elección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Diagnóstico Ecográfico de Endometrioma Ovárico',
      stem: 'Una mujer de 30 años, con antecedente de dolor pélvico crónico e infertilidad primaria de 2 años, se somete a una ecografía transvaginal que revela un quiste ovárico de 5 cm de diámetro de pared delgada, regular, con ecogenicidad interna difusa y homogénea de bajo nivel (aspecto en vidrio esmerilado), sin flujo Doppler al interior y sin excrecencias papilares.',
      question: '¿Cuál es el diagnóstico más probable de esta lesión ovárica?',
      options: [
        { letter: 'A', text: 'Cistoadenocarcinoma seroso de ovario' },
        { letter: 'B', text: 'Endometrioma ovárico' },
        { letter: 'C', text: 'Teratoma quístico maduro (quiste dermoide)' },
        { letter: 'D', text: 'Quiste folicular simple funcional' },
        { letter: 'E', text: 'Absceso tubo-ovárico roto' },
      ],
      correct: 'B',
      explanation: 'El patrón ecográfico descrito (quiste de pared regular y delgada, con contenido interno homogéneo difuso de baja ecogenicidad conocido clásicamente como patrón en vidrio esmerilado, en ausencia de papilas sólidas y sin vascularización interna al Doppler) en una mujer joven con clínica de dolor pélvico e infertilidad es PATOGNOMÓNICO de un Endometrioma Ovárico (quiste de chocolate). Los tumores malignos presentan vegetaciones y septos vascularizados, el teratoma ecos hiperecogénicos densos con sombra acústica y el quiste folicular es anecoico puro.',
      say: {
        stem: 'Una mujer de treinta años con dolor pélvico crónico presenta ecografía transvaginal con quiste ovárico de cinco centímetros y contenido homogéneo en vidrio esmerilado sin flujo Doppler.',
        question: '¿Cuál es el diagnóstico más probable de esta lesión ovárica?',
        options: 'La opción A plantea cistoadenocarcinoma seroso. La B endometrioma ovárico. La C teratoma quístico maduro dermoide. La D quiste folicular simple. La E absceso tubo-ovárico. Piénsalo.',
        answer: 'La respuesta correcta es la B. La presencia de ecos homogéneos de bajo nivel en vidrio esmerilado sin vascularización interna es la imagen ecográfica patognomónica del endometrioma ovárico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Endometriosis e Infertilidad · Prohibición Hormonal',
      stem: '¿Por qué razón farmacológica el tratamiento médico hormonal con anticonceptivos orales combinados o progestágenos continuos NO está indicado como tratamiento de la infertilidad en una paciente con endometriosis que busca activamente un embarazo?',
      question: 'Seleccione el fundamento clínico correcto:',
      options: [
        { letter: 'A', text: 'Porque son teratogénicos irreversibles para cualquier ovocito futuro' },
        { letter: 'B', text: 'Porque suprimen la ovulación y no mejoran fertilidad ni nacidos vivos tras suspenderlos' },
        { letter: 'C', text: 'Porque causan oclusión tubárica bilateral irreversible por fibrosis' },
        { letter: 'D', text: 'Porque aumentan la incidencia de embarazo molar recurrente' },
        { letter: 'E', text: 'Porque aceleran la apoptosis de la reserva folicular ovárica' },
      ],
      correct: 'B',
      explanation: 'La evidencia científica y las guías clínicas de reproducción humana (ESHRE / ASRM) han establecido categóricamente que la supresión médica hormonal ovárica (con anticonceptivos, progestágenos, dienogest o agonistas de GnRH) NO erradica las adherencias anatómicas ni mejora las tasas de gestación ni de recién nacidos vivos una vez suspendidos los fármacos. Además, al suprimir la ovulación actúan como anticonceptivos, retrasando innecesariamente la fertilidad en mujeres cuya reserva ovárica disminuye progresivamente. Ante infertilidad la indicación es la cirugía conservadora o la fertilización in vitro.',
      say: {
        stem: 'Se pregunta por qué razón farmacológica el tratamiento médico hormonal con anticonceptivos o progestágenos no está indicado ante infertilidad en una paciente con endometriosis.',
        question: '¿Cuál es el fundamento clínico correcto?',
        options: 'La opción A afirma que son teratogénicos. La B que suprimen la ovulación sin mejorar las tasas de embarazo ni nacidos vivos retrasando la búsqueda. La C que ocluyen trompas. La D mola. La E apoptosis ovárica. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. Los tratamientos hormonales bloquean la ovulación y no mejoran la fertilidad tras suspenderlos, haciendo perder tiempo reproductivo valioso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Adenomiosis Uterina · Diagnóstico Histopatológico',
      stem: 'Una paciente de 42 años, multípara de 3, consulta por hipermenorrea severa y dismenorrea secundaria progresiva. Al examen físico se palpa un útero aumentado de tamaño difusamente de 11 semanas, simétrico, reblandecido y difusamente doloroso al tacto bimanual. La ecografía transvaginal muestra engrosamiento asimétrico del miometrio posterior con estriaciones lineales y microquistes miometriales. La biopsia endometrial es benigna. Tras fallar el tratamiento médico, se decide una histerectomía total.',
      question: '¿Qué hallazgo anatomopatológico confirmará el diagnóstico definitivo?',
      options: [
        { letter: 'A', text: 'Glándulas y estroma endometrial ectópicos en el espesor del miometrio' },
        { letter: 'B', text: 'Proliferación clonal de células fusiformes de músculo liso miometrial' },
        { letter: 'C', text: 'Infiltración estromal por células mesenquimatosas malignas con atipias' },
        { letter: 'D', text: 'Pólipo vascular fibroepitelial endocervical' },
        { letter: 'E', text: 'Tejido decidual ectópico confinado exclusivamente a la serosa peritoneal' },
      ],
      correct: 'A',
      explanation: 'El cuadro clínico (mujer multípara de más de 40 años con hipermenorrea severa, dismenorrea progresiva y un útero globuloso, aumentado simétricamente de tamaño y blando a la palpación) sumado a los signos ecográficos (asimetría miometrial con microquistes y estriaciones lineales) es diagnóstico inequívoco de Adenomiosis Uterina. La confirmación histopatológica definitiva se establece al demostrar la presencia de glándulas y estroma endometrial benignos ectópicos embebidos dentro del espesor del miometrio, acompañados de hipertrofia concéntrica de las fibras musculares lisas adyacentes.',
      say: {
        stem: 'Una multípara de cuarenta y dos años presenta hipermenorrea, dismenorrea y útero difusamente aumentado y blando con microquistes ecográficos tras histerectomía.',
        question: '¿Qué hallazgo anatomopatológico confirmará el diagnóstico definitivo?',
        options: 'La opción A propone glándulas y estroma endometrial ectópicos en el espesor del miometrio. La B leiomioma con células fusiformes. La C leiomiosarcoma. La D pólipo fibroepitelial. La E tejido en la serosa. Piénsalo bien.',
        answer: 'La respuesta correcta es la A. La presencia de glándulas y estroma endometrial ectópico en el espesor del miometrio define anatomopatológicamente la adenomiosis.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Conceptos Clave de Endometriosis y Adenomiosis para el EUNACOM',
      cards: [
        {
          title: 'Endometriosis: Tríada y Manejo',
          tag: 'Dienogest vs Fertilidad',
          kind: 'key',
          items: [
            {
              t: 'Tríada de dismenorrea, dispareunia e infertilidad',
              d: 'Asociada a útero en retroversión fija y quistes ováricos en vidrio esmerilado',
              say: 'La tríada clásica de dismenorrea secundaria severa, dispareunia profunda e infertilidad orienta de inmediato a endometriosis, sustentándose en el hallazgo ecográfico patognomónico de endometrioma en vidrio esmerilado sin flujo Doppler.',
            },
            {
              t: 'Dienogest para dolor; hormonas prohibidas en fertilidad',
              d: 'El tratamiento hormonal atrofia implantes pero suspende la ovulación',
              say: 'El manejo del dolor pélvico se basa en dienogest dos miligramos al día continuo; por el contrario, ante infertilidad las terapias hormonales están contraindicadas debiendo plantearse cistectomía laparoscópica o fertilización in vitro.',
            },
          ],
        },
        {
          title: 'Adenomiosis: Perfil y Tratamiento',
          tag: 'Multípara mayor de 40 años',
          kind: 'alert',
          items: [
            {
              t: 'Útero aumentado simétrico, blando y doloroso',
              d: 'Invasión miometrial con microquistes ecográficos en multíparas con hipermenorrea',
              say: 'La adenomiosis se presenta clásicamente en multíparas mayores de cuarenta años con hipermenorrea severa y útero aumentado de tamaño en forma simétrica, globuloso y reblandecido al examen físico bimanual.',
            },
            {
              t: 'DIU con Levonorgestrel o histerectomía',
              d: 'Manejo médico de elección con DIU-LNG o extirpación uterina curativa definitiva',
              say: 'El tratamiento médico de primera línea para la adenomiosis es el dispositivo intrauterino con levonorgestrel, constituyendo la histerectomía total el único tratamiento curativo definitivo en pacientes con paridad cumplida. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Clínico de Manejo Escalonado de la Sospecha de Endometriosis',
    root: N(
      'start',
      'Sospecha Clínica de Endometriosis',
      'Dismenorrea secundaria progresiva, dispareunia profunda, dolor pélvico crónico o infertilidad',
      'Evaluamos a la paciente con sospecha de endometriosis identificando su motivo principal de consulta.',
      [
        'Examen ginecológico y Ecografía Transvaginal Especializada',
        N(
          'q',
          'Hallazgos Imagenológicos y Clínicos',
          'Presencia de endometriomas en vidrio esmerilado o nódulos dolorosos en fondo de saco',
          'Realizamos ecografía transvaginal para evaluar la presencia de endometriomas ováricos en vidrio esmerilado.',
          [
            'Motivo principal: Dolor Pélvico (Sin deseo gestacional actual)',
            N(
              'do',
              'Tratamiento Médico Hormonal de Primera Línea',
              'Dienogest 2 mg al día vía oral continuo o DIU liberador de levonorgestrel',
              'Si el objetivo es controlar el dolor iniciamos dienogest dos miligramos al día en pauta continua.',
              [
                'Persistencia de dolor severo refractario a progestágenos',
                N(
                  'alert',
                  'Laparoscopía Quirúrgica y Análogos de GnRH',
                  'Resección quirúrgica de implantes o análogos de GnRH con terapia add-back',
                  'Ante refractariedad pasamos a análogos de la GnRH con terapia protectora o laparoscopía.',
                ),
              ],
            ),
          ],
          [
            'Motivo principal: Búsqueda Activa de Embarazo (Infertilidad)',
            N(
              'alert',
              '¡Prohibido Tratamiento Médico Hormonal!',
              'No utilizar anticonceptivos orales ni progestágenos · derivar a medicina reproductiva',
              'Si la paciente busca fertilidad las hormonas están contraindicadas porque suprimen la ovulación.',
              [
                'Endometrioma mayor a tres centímetros o distorsión tubárica',
                N(
                  'do',
                  'Laparoscopía Quirúrgica Conservadora o FIV',
                  'Cistectomía respetando la corteza ovárica sana o Fertilización In Vitro de alta complejidad',
                  'Procedemos a quistectomía laparoscópica conservadora o fertilización in vitro de alta complejidad.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
