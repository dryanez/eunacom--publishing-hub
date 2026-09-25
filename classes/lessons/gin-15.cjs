// Clase 20.15 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer de endometrio, metrorragia postmenopáusica con biopsia por Pipelle, masa anexial con criterios IOTA y cáncer de ovario',
      say: 'Bienvenidos a la clase sobre cáncer de endometrio y neoplasias ováricas, dos patologías oncológicas de altísimo rendimiento en el examen EUNACOM. En esta sesión aprenderemos a estudiar la metrorragia de la postmenopausia utilizando el grosor endometrial y la biopsia con cánula de Pipelle, reconoceremos los criterios ecográficos de malignidad en masas anexiales según el modelo IOTA, y grabaremos la prohibición absoluta de realizar punciones ováricas ante sospecha de cáncer. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo carcinogénico',
      title: 'Carcinogénesis Endometrial y Ovárica: Vías Moleculares y Diseminación',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'start', t: 'Hiperestrogenismo no balanceado', s: 'Aromatización periférica en obesidad o anovulación crónica por síndrome de ovario poliquístico' },
        { id: 'hip', col: 1, row: 1, k: 'mech', t: 'Hiperplasia endometrial con atipias', s: 'Mutación del gen PTEN y proliferación clonal glandular descontrolada sin progesterona' },
        { id: 'ade', col: 2, row: 1, k: 'effect', t: 'Adenocarcinoma endometrioide', s: 'Invasión miometrial y metrorragia de la postmenopausia en más del noventa por ciento' },
        { id: 'ova', col: 3, row: 1, k: 'alert', t: 'Carcinomatosis peritoneal ovárica', s: 'Diseminación celómica por líquido ascítico a omento, epiplón y diafragma' },
      ],
      edges: [
        { from: 'est', to: 'hip', label: 'estímulo mitogénico continuo' },
        { from: 'hip', to: 'ade', label: 'transformación maligna' },
        { from: 'ade', to: 'ova', label: 'vías de diseminación' },
      ],
      steps: [
        {
          show: ['est', 'hip'],
          note: 'Estímulo estrogénico continuo y desarrollo de hiperplasia',
          say: 'El adenocarcinoma de endometrio tipo uno endometrioide se origina por la exposición continua y prolongada a concentraciones elevadas de estrógenos sin la oposición protectora de la progesterona secretada por el cuerpo lúteo. En pacientes con obesidad mórbida, la enzima aromatasa del tejido adiposo convierte masivamente la androstenediona suprarrenal en estrona circulante, induciendo una hiperplasia endometrial compleja con atipias nucleares progresivas.',
        },
        {
          show: ['ade', 'ova'],
          note: 'Adenocarcinoma invasor y exfoliación peritoneal ovárica',
          say: 'La hiperplasia atípica evoluciona inevitablemente hacia un adenocarcinoma que infiltra el estroma y la pared miometrial, manifestándose de forma temprana por metrorragia en la postmenopausia. En marcado contraste, el cáncer epitelial de ovario se desarrolla de forma silente exfoliando células malignas hacia el líquido peritoneal, originando ascitis masiva y depósitos metastásicos carcinomatosos sobre el epiplón mayor y la superficie diafragmática.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Epidemiología y factores hormonales',
      title: 'Cáncer de Endometrio: Hiperestrogenismo sin Oposición y Riesgo Oncológico',
      cards: [
        {
          title: 'Factores de Riesgo Primarios',
          tag: 'Estrógenos sin balance progestágeno',
          kind: 'alert',
          items: [
            {
              t: 'Obesidad mórbida y aromatización periférica',
              d: 'Principal factor de riesgo modificable; multiplica por cinco el riesgo de adenocarcinoma endometrioide',
              say: 'La obesidad es el factor de riesgo primordial en los países occidentales, debido a que el exceso de tejido adiposo periférico contiene abundante enzima aromatasa que convierte continuamente los andrógenos suprarrenales en estrona, estimulando al epitelio endometrial sin oposición progestagénica.',
            },
            {
              t: 'Síndrome de ovario poliquístico y tamoxifeno',
              d: 'Ciclos anovulatorios crónicos sin fase lútea y acción agonista estrogénica del tamoxifeno en el útero',
              say: 'El síndrome de ovario poliquístico perpetúa ciclos anovulatorios crónicos sin fase lútea ni secreción de progesterona, mientras que fármacos como el tamoxifeno ejercen un efecto agonista estrogénico parcial sobre el endometrio que cuadruplica el riesgo de adenocarcinoma.',
            },
          ],
        },
        {
          title: 'Factores Protectores Demostrados',
          tag: 'Progesterona y descamación',
          kind: 'key',
          items: [
            {
              t: 'Uso de anticonceptivos combinados y DIU-LNG',
              d: 'Reducen el riesgo en más del cincuenta por ciento al atrofiar y proteger el epitelio endometrial',
              say: 'Los anticonceptivos combinados y el dispositivo con levonorgestrel brindan una potente protección al mantener el endometrio en atrofia, reduciendo a la mitad el riesgo de cáncer a largo plazo.',
            },
            {
              t: 'Multiparidad y lactancia materna prolongada',
              d: 'Los altos niveles de progesterona del embarazo descaman y limpian el estroma endometrial',
              say: 'La multiparidad confiere una marcada protección gracias a los prolongados períodos de exposición a progesterona placentaria que interrumpen los ciclos hiperestrogénicos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Signo de alarma ginecológica',
      title: 'Metrorragia Postmenopáusica y Biopsia Endometrial con Cánula de Pipelle',
      cards: [
        {
          title: 'Metrorragia de la Postmenopausia',
          tag: 'Síntoma cardinal en el noventa por ciento',
          kind: 'alert',
          items: [
            {
              t: 'Todo sangrado en la menopausia exige estudio',
              d: 'El noventa por ciento de los cánceres de endometrio debuta con sangrado genital anormal postmenopáusico',
              say: 'Cualquier episodio de pérdida hemática genital espontánea en una mujer menopáusica representa una neoplasia maligna ginecológica hasta demostrar lo contrario, obligando a realizar una ecografía transvaginal de alta resolución de forma inmediata e impostergable.',
            },
            {
              t: 'Grosor endometrial de corte ecográfico',
              d: 'Grosor mayor o igual a cuatro a cinco milímetros sin TRH o mayor a ocho con TRH exige biopsia',
              say: 'El punto de corte ecográfico fundamental consensuado internacionalmente es de cuatro a cinco milímetros en mujeres que no usan terapia hormonal; un grosor endometrial igual o superior a esta cifra impone la toma mandatoria e ineludible de una biopsia histológica.',
            },
          ],
        },
        {
          title: 'Biopsia con Cánula de Pipelle de Primera Línea',
          tag: 'Estándar ambulatorio no invasivo',
          kind: 'key',
          items: [
            {
              t: 'Aspiración endometrial ambulatoria con Pipelle',
              d: 'Método de primera elección; alta sensibilidad diagnóstica, bajo costo y sin requerir anestesia',
              say: 'La biopsia endometrial ambulatoria por aspiración utilizando una cánula flexible de Pipelle es el procedimiento diagnóstico de primera línea, destacando por su altísima sensibilidad cercana al noventa y ocho por ciento, su bajo costo y su excelente tolerancia sin requerir anestesia ni pabellón quirúrgico.',
            },
            {
              t: 'Histeroscopía con biopsia dirigida ante fallas',
              d: 'Indicada si la muestra de Pipelle es insuficiente o si el sangrado persiste con biopsia negativa',
              say: 'Si la muestra con cánula de Pipelle resulta escasa o si la metrorragia recidiva con estudio previo negativo, se realiza una histeroscopía con biopsia dirigida bajo visión directa.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tipos histológicos y etapificación',
      title: 'Subtipos de Cáncer de Endometrio y Tratamiento Quirúrgico FIGO',
      cards: [
        {
          title: 'Clasificación Dual de Bokhman',
          tag: 'Tipo uno endometrioide vs Tipo dos no endometrioide',
          kind: 'criteria',
          items: [
            {
              t: 'Tipo uno endometrioide: Ochenta por ciento',
              d: 'Asociado a hiperestrogenismo, obesidad, receptores positivos y excelente pronóstico en estadios tempranos',
              say: 'El adenocarcinoma endometrioide tipo uno representa más de ocho de cada diez neoplasias endometriales, surge sobre hiperplasia endometrial compleja en mujeres con sobrepeso y ofrece un pronóstico curativo excelente cuando se detecta y opera en estadios tempranos.',
            },
            {
              t: 'Tipo dos seroso y células claras: Veinte por ciento',
              d: 'Independiente de estrógenos, mujeres delgadas y ancianas con mutación de p53; muy agresivo',
              say: 'Los tumores tipo dos serosos papilares o de células claras no dependen del estímulo estrogénico, asientan sobre endometrio atrófico en mujeres ancianas delgadas, expresan mutaciones en el gen supresor p cincuenta y tres y presentan un comportamiento biológico de extrema agresividad clínica.',
            },
          ],
        },
        {
          title: 'Tratamiento Quirúrgico Estandarizado',
          tag: 'Etapificación quirúrgica FIGO',
          kind: 'key',
          items: [
            {
              t: 'Histerectomía total con salpingooforectomía bilateral',
              d: 'Extirpación en bloque de útero, trompas y ambos ovarios con lavado peritoneal diagnóstico',
              say: 'El pilar del tratamiento y de la estadificación es quirúrgico, requiriendo histerectomía total extrafascial con salpingooforectomía bilateral en bloque y toma de líquido peritoneal.',
            },
            {
              t: 'Estadificación ganglionar pélvica y aórtica',
              d: 'Biopsia de ganglio centinela o linfadenectomía según la profundidad de la invasión miometrial',
              say: 'Se completa con el estudio del ganglio centinela pélvico o linfadenectomía pélvico paraórtica si existe invasión de más del cincuenta por ciento del miometrio o histología de alto grado.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Neoplasia anexial oculta',
      title: 'Cáncer de Ovario: Historia Natural, Clínica Insidiosa y Mal Pronóstico',
      cards: [
        {
          title: 'La Neoplasia Ginecológica Más Letal',
          tag: 'Diagnóstico tardío en estadios avanzados',
          kind: 'alert',
          items: [
            {
              t: 'Mayor letalidad oncológica ginecológica',
              d: 'Siete de cada diez pacientes se diagnostican en estadios tres o cuatro con carcinomatosis peritoneal',
              say: 'El cáncer epitelial de ovario es la neoplasia ginecológica más letal debido a la ausencia total de sintomatología en sus fases tempranas, diagnosticándose más del setenta por ciento de las pacientes en estadios avanzados tres o cuatro con carcinomatosis peritoneal diseminada.',
            },
            {
              t: 'Carcinoma seroso de alto grado en la fimbria tubárica',
              d: 'El tipo histológico más frecuente se origina en el epitelio distal de las trompas de Falopio',
              say: 'La gran mayoría de los carcinomas serosos de alto grado se originan en realidad a partir de lesiones precursoras en las fimbrias distales de las trompas de Falopio y no del propio ovario.',
            },
          ],
        },
        {
          title: 'Manifestaciones Clínicas Subagudas y Ascitis',
          tag: 'Síntomas digestivos y distensión',
          kind: 'criteria',
          items: [
            {
              t: 'Síntomas gastrointestinales inespecíficos',
              d: 'Aumento progresivo del perímetro abdominal, distensión, dispepsia persistente y saciedad precoz',
              say: 'Las pacientes suelen consultar de forma tardía tras semanas o meses refiriendo síntomas digestivos vagos como distensión abdominal progresiva, plenitud postprandial, saciedad precoz, dispepsia y un aumento persistente e inexplicable del perímetro de su cintura.',
            },
            {
              t: 'Presencia de masa pélvica fija y ascitis',
              d: 'Palpación bimanual de masa profunda firme e irregular con matidez desplazable peritoneal',
              say: 'Al examen físico destaca la presencia de ascitis con matidez desplazable en el abdomen y una masa pélvica profunda, fija, dura y nodular en el fondo de saco de Douglas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Ecografía ginecológica avanzada',
      title: 'Criterios Ecográficos IOTA de Malignidad Ovárica y Marcadores Tumorales',
      cards: [
        {
          title: 'Reglas de Malignidad IOTA (Reglas M)',
          tag: 'Criterios de alta sospecha ecográfica',
          kind: 'alert',
          items: [
            {
              t: 'Componentes sólidos y papilas intraquísticas',
              d: 'Presencia de al menos cuatro proyecciones papilares sólidas o tumor sólido irregular multiloculado',
              say: 'De acuerdo con las reglas ecográficas internacionales del grupo IOTA, el hallazgo de masas tumorales sólidas de contornos irregulares, tabiques internos gruesos mayores a cinco milímetros y cuatro o más proyecciones papilares con flujo Doppler interno establece una altísima probabilidad de malignidad ovárica.',
            },
            {
              t: 'Líquido ascítico y Doppler vascular central',
              d: 'Presencia de ascitis peritoneal franca y abundante flujo Doppler de baja resistencia central',
              say: 'El hallazgo de ascitis libre junto a una intensa vascularización central con flujo de baja resistencia en el Doppler color confirman la sospecha de malignidad ovárica avanzada.',
            },
          ],
        },
        {
          title: 'Marcadores Tumorales Séricos',
          tag: 'CA-125 y proteína HE4',
          kind: 'key',
          items: [
            {
              t: 'Antígeno tumoral CA-125 sérico',
              d: 'Elevado en cáncer epitelial de ovario; valor superior a 35 unidades por mililitro orienta malignidad',
              say: 'El antígeno tumoral sérico CA ciento veinticinco se encuentra marcadamente elevado en los carcinomas serosos de ovario, alcanzando su mayor rendimiento y valor predictivo positivo en mujeres postmenopáusicas que presentan una masa pélvica sólida en la ecografía.',
            },
            {
              t: 'Proteína HE4 y algoritmos ROMA',
              d: 'Mayor especificidad que CA-125 al no elevarse en endometriosis ni procesos inflamatorios benignos',
              say: 'El marcador HE cuatro aporta mayor especificidad que el CA ciento veinticinco porque no se eleva en endometriosis ni en cuadros benignos, combinándose en el índice de riesgo de malignidad.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Prohibición oncológica y cirugía',
      title: '¡Prohibición de Punción Ovárica! y Laparotomía Citorreductora Primaria',
      cards: [
        {
          title: '¡Punción Ovárica Formalmente Prohibida!',
          tag: 'Regla de oro absoluta de examen',
          kind: 'alert',
          items: [
            {
              t: 'Ruptura capsular y siembra peritoneal masiva',
              d: 'Puncionar una masa ovárica sospechosa derrama líquido con células malignas en el peritoneo libre',
              say: 'Graben esta prohibición absoluta y terminante de examen: jamás se debe puncionar o aspirar con aguja una masa ovárica sospechosa de cáncer, debido a que la rotura de la cápsula provoca una siembra y diseminación masiva de células neoplásicas en la cavidad peritoneal.',
            },
            {
              t: 'Empeoramiento irreversible del estadio oncológico',
              d: 'Transforma una neoplasia estadio uno A confinada en un estadio uno C de alto riesgo de muerte',
              say: 'La punción transforma una neoplasia precoz confinada al ovario en un estadio avanzado con líquido peritoneal contaminado, multiplicando el riesgo de recidiva y arruinando el pronóstico de la paciente.',
            },
          ],
        },
        {
          title: 'Laparotomía Citorreductora Primaria (Debulking)',
          tag: 'Cirugía citorreductora máxima R0',
          kind: 'key',
          items: [
            {
              t: 'Citorreducción primaria máxima de entrada',
              d: 'Histerectomía, anexectomía bilateral, omentectomía infracólica y resección de implantes peritoneales',
              say: 'El abordaje quirúrgico estándar de elección es la laparotomía exploradora oncológica con objetivo de citorreducción primaria máxima o debulking óptimo, realizando histerectomía total con anexectomía bilateral en bloque, omentectomía infracólica completa, apendicectomía y resección sistemática de cualquier implante peritoneal o carcinomatosis macroscópica visible.',
            },
            {
              t: 'Quimioterapia sistémica adyuvante con Carboplatino',
              d: 'Seis ciclos de quimioterapia combinada de Carboplatino y Paclitaxel endovenosos de rescate',
              say: 'Tras completar una cirugía citorreductora primaria óptima con citorreducción completa, todas las pacientes en estadios avanzados reciben de forma protocolizada seis ciclos de quimioterapia adyuvante basada en la combinación de carboplatino y paclitaxel para erradicar cualquier micrometástasis residual.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Genética oncológica',
      title: 'Síndromes de Cáncer Hereditario: BRCA1, BRCA2 y Síndrome de Lynch',
      cards: [
        {
          title: 'Mutaciones Germinales en BRCA1 y BRCA2',
          tag: 'Cáncer hereditario de mama y ovario',
          kind: 'alert',
          items: [
            {
              t: 'Riesgo acumulado de cáncer de ovario',
              d: 'Riesgo de hasta cuarenta por ciento para BRCA uno y veinte por ciento para BRCA dos a lo largo de la vida',
              say: 'Las mujeres portadoras de mutaciones germinales en los genes supresores de tumores BRCA uno y BRCA dos presentan un riesgo acumulado a lo largo de su vida de hasta un cuarenta por ciento de desarrollar cáncer epitelial de ovario y un ochenta por ciento de padecer carcinoma mamario invasor.',
            },
            {
              t: 'Salpingooforectomía bilateral profiláctica reductora',
              d: 'Cirugía de reducción de riesgo recomendada entre los 35 y 40 años tras completar la paridad',
              say: 'En mujeres con mutación BRCA comprobada la conducta de mayor impacto es la salpingooforectomía bilateral profiláctica entre los treinta y cinco y cuarenta años al completar la paridad.',
            },
          ],
        },
        {
          title: 'Síndrome de Lynch (Cáncer Colorrectal No Polipósico)',
          tag: 'Inestabilidad de microsatélites',
          kind: 'key',
          items: [
            {
              t: 'Mutaciones en genes de reparación del ADN (MMR)',
              d: 'Defectos en MLH1, MSH2, MSH6 y PMS2 con altísima tasa de cáncer de colon y de endometrio',
              say: 'El síndrome de Lynch se produce por mutaciones en genes reparadores de errores de apareamiento del ADN y es la principal causa hereditaria de cáncer de endometrio y colon.',
            },
            {
              t: 'Riesgo de cáncer de endometrio superior al de colon',
              d: 'Las mujeres con Lynch tienen hasta un sesenta por ciento de riesgo de adenocarcinoma endometrial',
              say: 'En las mujeres con síndrome de Lynch el riesgo de desarrollar cáncer de endometrio supera incluso al de cáncer de colon, requiriendo tamizaje endometrial anual con biopsia ambulatoria.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Matriz Diferencial: Cáncer de Endometrio versus Cáncer de Ovario',
      head: ['Parámetro', 'Cáncer de Endometrio', 'Cáncer Epitelial de Ovario'],
      rows: [
        {
          cells: ['Síntoma cardinal inicial', 'Metrorragia de la postmenopausia en más del 90%', 'Distensión abdominal progresiva, ascitis y saciedad precoz'],
          say: 'El cáncer de endometrio debuta precozmente con metrorragia; el de ovario debuta tardíamente con distensión y ascitis.',
        },
        {
          cells: ['Estudio diagnóstico inicial', 'Ecografía transvaginal (grosor > 4-5 mm) y Pipelle', 'Ecografía transvaginal con Doppler y criterios IOTA'],
          say: 'El endometrio se evalúa midiendo el grosor y biopsiando con Pipelle; el ovario requiere ecografía con criterios IOTA.',
        },
        {
          cells: ['Conducta diagnóstica invasiva', 'Biopsia endometrial ambulatoria obligatoria', '¡PUNCIÓN CONTRAINDICADA! Laparotomía citorreductora'],
          say: 'El endometrio exige biopsia inmediata; en el ovario la punción está prohibida y se extirpa en bloque quirúrgicamente.',
        },
        {
          cells: ['Marcadores tumorales séricos', 'Sin marcadores séricos útiles en estadios precoces', 'CA-125 y proteína HE4 marcadamente elevados'],
          say: 'El cáncer de ovario se monitoriza con marcadores tumorales como CA ciento veinticinco y HE cuatro en sangre.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Estudio de Metrorragia Postmenopáusica y Masa Anexial',
      say: 'Revisemos el algoritmo estructurado para abordar el sangrado en la menopausia y clasificar una masa ovárica sospechosa.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Metrorragia Postmenopáusica · Grosor Endometrial y Pipelle',
      stem: 'Una mujer de 62 años consulta por un episodio de sangrado genital escaso tipo manchas oscuras de 5 días de evolución. Su menopausia ocurrió hace 10 años y no utiliza terapia hormonal. El examen físico y espéculo muestran genitales atróficos sin lesiones cervicales. La ecografía transvaginal revela un útero de tamaño normal con un grosor endometrial homogéneo de 12 mm sin líquido en la cavidad. Los anexos son normales.',
      question: '¿Cuál es la conducta médica de elección más adecuada que debe realizarse de inmediato?',
      options: [
        { letter: 'A', text: 'Prescribir estrógenos locales en crema para la atrofia genital y controlar en 3 meses' },
        { letter: 'B', text: 'Realizar Biopsia Endometrial ambulatoria por aspiración con cánula de Pipelle' },
        { letter: 'C', text: 'Solicitar Tomografía por Emisión de Positrones (PET-CT) de pelvis' },
        { letter: 'D', text: 'Indicar reposo y esperar un segundo episodio de sangrado para iniciar estudio' },
        { letter: 'E', text: 'Realizar laparoscopía exploradora diagnóstica para ooforectomía bilateral' },
      ],
      correct: 'B',
      explanation: 'El sangrado postmenopáusico es el síntoma de presentación del Cáncer de Endometrio en el 90% de los casos. La presencia de un grosor endometrial ecográfico ≥ 4 a 5 mm en una mujer menopáusica exige de forma mandatoria e impostergable la obtención de una muestra histológica mediante Biopsia Endometrial (la aspiración ambulatoria con cánula de Pipelle es el método de primera línea por su alta sensibilidad y bajo costo, recurriéndose a histeroscopía si la muestra no es concluyente).',
      say: {
        stem: 'Mujer de sesenta y dos años con sangrado genital diez años después de la menopausia y ecografía con endometrio engrosado de doce milímetros.',
        question: '¿Cuál es la conducta médica de elección más adecuada que debe realizarse de inmediato?',
        options: 'La opción A propone estrógenos locales para atrofia. La B biopsia endometrial ambulatoria con cánula de Pipelle. La C tomografía por emisión de positrones. La D conducta expectante. La E ooforectomía laparoscópica. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. Un grosor endometrial de doce milímetros con sangrado menopáusico impone realizar de inmediato una biopsia por aspiración con cánula de Pipelle.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Masa Anexial Compleja y Ascitis · Cáncer de Ovario',
      stem: 'Una mujer de 65 años consulta por distensión abdominal progresiva, dispepsia y saciedad precoz de 3 meses. Al examen físico se palpa abdomen distendido con ascitis y una masa pelviana profunda firme. La ecografía transvaginal muestra una masa anexial derecha de 9 cm, multiloculada, con septos gruesos de 5 mm, proyecciones papilares sólidas internas con vascularización Doppler central de baja resistencia y líquido libre ascítico en Douglas. El marcador sérico CA-125 resulta en 450 U/mL (VN < 35 U/mL).',
      question: '¿Cuál es la sospecha diagnóstica más probable y la conducta adecuada?',
      options: [
        { letter: 'A', text: 'Quiste folicular funcional simple; indicar anticonceptivos orales por 3 meses' },
        { letter: 'B', text: 'Cáncer epitelial de ovario avanzado; derivar de inmediato a Ginecología Oncológica para laparotomía etapificadora y citorreducción primaria' },
        { letter: 'C', text: 'Punción transvaginal evacuadora del quiste ovárico para aliviar la presión' },
        { letter: 'D', text: 'Endometrioma ovárico; prescribir dienogest oral continuo' },
        { letter: 'E', text: 'Absceso apendicular crónico; apendicectomía electiva ambulatoria' },
      ],
      correct: 'B',
      explanation: 'La constelación clínica de síntomas digestivos subagudos (distensión, saciedad precoz) asociada a ascitis, una masa anexial con todos los criterios IOTA de malignidad (multiloculada, tabiques gruesos, papilas sólidas y flujo Doppler central) y un marcador tumoral CA-125 marcadamente elevado en una mujer postmenopáusica es diagnóstica de Cáncer Epitelial de Ovario Avanzado. La conducta es la derivación urgente a un centro terciario oncológico para cirugía citorreductora primaria máxima (debulking) y posterior quimioterapia con carboplatino y paclitaxel. La punción ovárica está absolutamente contraindicada.',
      say: {
        stem: 'Mujer de sesenta y cinco años con distensión, ascitis, masa anexial multiloculada con papilas y Doppler central, y marcador tumoral CA ciento veinticinco de cuatrocientos cincuenta.',
        question: '¿Cuál es la sospecha diagnóstica más probable y la conducta adecuada?',
        options: 'La opción A propone quiste folicular. La B cáncer epitelial de ovario derivando a laparotomía citorreductora primaria. La C punción evacuadora del quiste. La D endometrioma. La E apendicectomía. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. Los hallazgos ecográficos IOTA y el CA ciento veinticinco elevado en una postmenopáusica indican cáncer de ovario y exigen laparotomía citorreductora.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Masa Ovárica Sospechosa · Prohibición de Punción',
      stem: '¿Por qué razón oncológica fundamental está FORMALMENTE CONTRAINDICADO realizar una punción-aspiración con aguja de una masa anexial ovárica con criterios ecográficos sospechosos de malignidad?',
      question: '¿Por qué razón fundamental está formalmente contraindicado realizar una punción-aspiración de una masa ovárica sospechosa?',
      options: [
        { letter: 'A', text: 'Porque induce una hemorragia digestiva masiva secundaria' },
        { letter: 'B', text: 'Porque la rotura de la cápsula quística provoca la siembra y diseminación de células malignas en la cavidad peritoneal, empeorando el estadio y pronóstico oncológico de la paciente' },
        { letter: 'C', text: 'Porque eleva de forma irreversible los niveles plasmáticos de CA-125' },
        { letter: 'D', text: 'Porque provoca el cierre precoz de las trompas de Falopio contralaterales' },
        { letter: 'E', text: 'Porque desencadena una crisis de tirotoxicosis autoinmune' },
      ],
      correct: 'B',
      explanation: 'La punción evacuadora de un tumor ovárico sospechoso de cáncer está estrictamente proscrita en la ginecología oncológica moderna. Si el tumor corresponde a un carcinoma ovárico confinado al ovario (Estadio IA), la punción accidental o deliberada de la cápsula produce el derrame de líquido cargado de células neoplásicas viables hacia el peritoneo libre, transformando inmediatamente la enfermedad en un Estadio IC (peor pronóstico) y multiplicando drásticamente el riesgo de carcinomatosis peritoneal y muerte. Toda masa ovárica sospechosa debe extirparse quirúrgicamente íntegra sin romper su cápsula.',
      say: {
        stem: 'Pregunta sobre los principios oncológicos quirúrgicos fundamentales que rigen el abordaje de las masas ováricas neoplásicas.',
        question: '¿Por qué razón fundamental está formalmente contraindicado realizar una punción aspiración de una masa ovárica sospechosa?',
        options: 'La opción A propone hemorragia digestiva. La B rotura capsular con siembra peritoneal y empeoramiento irreversible del estadio oncológico. La C aumento irreversible de CA ciento veinticinco. La D cierre tubario. La E tirotoxicosis. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. Puncionar un tumor ovárico derrama células malignas en el peritoneo libre transformando un estadio inicial en uno avanzado de mal pronóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Cáncer de Endometrio Tipo I · Factor de Riesgo Mayor',
      stem: '¿Cuál de las siguientes condiciones clínicas se asocia al mayor riesgo relativo de desarrollar un Adenocarcinoma de Endometrio de tipo I endometrioide debido a la estimulación estrogénica continua no balanceada?',
      question: '¿Cuál de las siguientes condiciones se asocia al mayor riesgo de adenocarcinoma de endometrio tipo I por hiperestrogenismo sin oposición?',
      options: [
        { letter: 'A', text: 'Multiparidad con más de 4 hijos' },
        { letter: 'B', text: 'Uso prolongado de anticonceptivos orales combinados durante más de 10 años' },
        { letter: 'C', text: 'Obesidad severa (aromatización periférica en tejido adiposo) y Síndrome de Ovario Poliquístico' },
        { letter: 'D', text: 'Tabaquismo crónico activo de más de 20 cigarrillos al día' },
        { letter: 'E', text: 'Uso continuo de dispositivo intrauterino liberador de levonorgestrel' },
      ],
      correct: 'C',
      explanation: 'El adenocarcinoma de endometrio tipo I es un tumor hormonodependiente vinculado a la exposición prolongada a estrógenos sin la oposición protectora de la progesterona (estrógenos sin oposición). La Obesidad es el factor de riesgo más importante en países occidentales, debido a que el exceso de tejido adiposo contiene enzima aromatasa que convierte masivamente los andrógenos suprarrenales (androstenediona) en estrona. Asimismo, el Síndrome de Ovario Poliquístico (SOP) perpetúa ciclos anovulatorios crónicos sin fase lútea ni secreción de progesterona.',
      say: {
        stem: 'Pregunta sobre los mecanismos endocrinos y factores de riesgo del adenocarcinoma de endometrio endometrioide tipo uno.',
        question: '¿Cuál de las siguientes condiciones se asocia al mayor riesgo de adenocarcinoma de endometrio tipo uno por hiperestrogenismo sin oposición?',
        options: 'La opción A propone multiparidad. La B anticonceptivos orales combinados. La C obesidad severa y síndrome de ovario poliquístico. La D tabaquismo activo. La E dispositivo con levonorgestrel. Piénsalo bien.',
        answer: 'La respuesta correcta es la C. La obesidad severa y el síndrome de ovario poliquístico generan un hiperestrogenismo crónico sin progesterona que desencadena el tumor.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Cáncer de Endometrio y Cáncer de Ovario',
      cards: [
        {
          title: 'Metrorragia y Biopsia Endometrial',
          tag: 'Pipelle ambulatoria y corte ecográfico',
          kind: 'key',
          items: [
            {
              t: 'Sangrado menopáusico con grosor mayor a 4-5 mm',
              d: 'Grosor igual o mayor a cuatro a cinco milímetros exige biopsia por aspiración con cánula de Pipelle',
              say: 'Toda metrorragia en la postmenopausia con un endometrio de cuatro a cinco milímetros o más exige biopsia inmediata por aspiración con Pipelle en la consulta.',
            },
            {
              t: 'Obesidad como principal gatillante endocrino',
              d: 'La aromatasa periférica grasa sintetiza estrona continua desencadenando adenocarcinoma endometrioide',
              say: 'La obesidad es el principal factor de riesgo para el adenocarcinoma tipo uno al generar hiperestrogenismo continuo sin balance progestagénico.',
            },
          ],
        },
        {
          title: 'Cáncer de Ovario y Criterios IOTA',
          tag: 'Doppler central y CA-125 elevado',
          kind: 'alert',
          items: [
            {
              t: 'Sospecha ante ascitis y papilas sólidas',
              d: 'Multiloculado, septos gruesos, papilas vasculares y CA-125 elevado orientan a tumor epitelial',
              say: 'La combinación de ascitis, proyecciones papilares sólidas con vascularización central y CA ciento veinticinco elevado orienta a cáncer epitelial de ovario.',
            },
            {
              t: '¡Punción ovárica terminantemente prohibida!',
              d: 'La punción rompe la cápsula y disemina células malignas; la masa se extirpa íntegra en pabellón',
              say: 'La punción ovárica está estrictamente prohibida por diseminar células tumorales; la masa sospechosa debe extirparse siempre íntegra mediante laparotomía citorreductora.',
            },
          ],
        },
        {
          title: 'Genética Oncológica Ginecológica',
          tag: 'BRCA y Síndrome de Lynch',
          kind: 'criteria',
          items: [
            {
              t: 'BRCA1 y BRCA2 en cáncer de ovario',
              d: 'Indican salpingooforectomía profiláctica reductora de riesgo al completar la maternidad',
              say: 'Las mutaciones BRCA conllevan un altísimo riesgo ovárico y justifican la anexectomía profiláctica bilateral al completar los deseos de fertilidad.',
            },
            {
              t: 'Síndrome de Lynch y cáncer de endometrio',
              d: 'Riesgo acumulado de hasta un sesenta por ciento; tamizaje anual estricto con biopsia endometrial',
              say: 'El síndrome de Lynch incrementa fuertemente el cáncer de endometrio y colon, requiriendo vigilancia anual sistemática con biopsia endometrial. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Estudio de Metrorragia Postmenopáusica y Masa Anexial',
    root: N(
      'start',
      'Paciente Femenina con Síntoma Ginecológico de Alarma',
      'Metrorragia de la postmenopausia o masa anexial palpable en examen físico bimanual',
      'Iniciamos el algoritmo clasificando entre sangrado genital postmenopáusico o masa anexial.',
      [
        'Metrorragia de la postmenopausia (sangrado tras doce meses de amenorrea)',
        N(
          'q',
          '¿Cuál es el grosor endometrial medido por ecografía transvaginal?',
          'Línea endometrial en corte sagital uterino con transductor de alta frecuencia',
          'Medimos el grosor endometrial sagital por ecografía transvaginal.',
          [
            'Grosor endometrial mayor o igual a 4 a 5 mm (o metrorragia persistente)',
            N(
              'alert',
              'Biopsia Endometrial Ambulatoria por Aspiración con Cánula de Pipelle',
              'Estudio histológico ambulatorio · derivar a histeroscopía si la muestra no es concluyente',
              'Ante un grosor igual o superior a cuatro milímetros realizamos biopsia inmediata con cánula de Pipelle.',
            ),
          ],
          [
            'Grosor endometrial menor a 4 mm lineal regular sin sangrado recurrente',
            N(
              'ok',
              'Atrofia Endometrial: Observación y Control Clínico',
              'Causa benigna más común de sangrado · biopsiar solo si el sangrado reaparece',
              'Con endometrio atrófico menor a cuatro milímetros observamos, descartando malignidad endometrial activa.',
            ),
          ],
        ),
      ],
      [
        'Masa anexial ovárica con criterios ecográficos IOTA sospechosos de malignidad',
        N(
          'alert',
          '¡PUNCIÓN CONTRAINDICADA! Derivación a Ginecología Oncológica',
          'Marcadores tumorales CA-125 y HE4 · Tomografía de tórax, abdomen y pelvis para etapificación',
          'Prohibimos categóricamente la punción de la masa ovárica y derivamos a laparotomía citorreductora en centro oncológico.',
        ),
      ],
    ),
  },
};
