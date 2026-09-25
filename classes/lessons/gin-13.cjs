// Clase 20.13 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer cervicouterino, tamizaje con Papanicolaou GES, genotipos de VPH, sistema Bethesda, colposcopía y límites quirúrgicos de la FIGO',
      say: 'Bienvenidos a la clase sobre cáncer cervicouterino y patología preinvasora del cuello uterino, una de las garantías explícitas en salud más trascendentes de nuestro país y un tópico estelar del examen EUNACOM. En esta sesión dominaremos las pautas de tamizaje con Papanicolaou, conoceremos los genotipos oncogénicos del virus del papiloma humano, interpretaremos la conducta ante informes del sistema Bethesda, revisaremos la vacunación profiláctica y fijaremos la frontera quirúrgica infranqueable entre la cirugía radical y la quimiorradioterapia. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Historia natural del cáncer',
      title: 'Carcinogénesis Cervicouterina: De la Infección por VPH al Cáncer Invasor',
      nodes: [
        { id: 'vph', col: 0, row: 1, k: 'start', t: 'Infección persistente VPH', s: 'Transmisión sexual de genotipos de alto riesgo oncogénico, especialmente VPH 16 y 18' },
        { id: 'onp', col: 1, row: 1, k: 'mech', t: 'Oncoproteínas E6 y E7', s: 'E6 degrada la proteína p53 y E7 inactiva la proteína del retinoblastoma pRb' },
        { id: 'nie', col: 2, row: 1, k: 'effect', t: 'Neoplasia Intraepitelial', s: 'Progresión lenta de NIE uno a NIE dos y tres a lo largo de diez a quince años' },
        { id: 'inv', col: 3, row: 1, k: 'alert', t: 'Carcinoma invasor', s: 'Ruptura de la membrana basal con invasión del estroma cervical y metástasis' },
      ],
      edges: [
        { from: 'vph', to: 'onp', label: 'integración al genoma' },
        { from: 'onp', to: 'nie', label: 'inestabilidad genética' },
        { from: 'nie', to: 'inv', label: 'invasión del estroma' },
      ],
      steps: [
        {
          show: ['vph', 'onp'],
          note: 'Integración viral y bloqueo de supresores tumorales',
          say: 'El cáncer de cuello uterino es provocado de forma prácticamente universal por la infección persistente por genotipos de alto riesgo del virus del papiloma humano. Al integrarse al genoma celular del hospedero, el virus expresa continuamente las oncoproteínas carcinogénicas E seis y E siete, las cuales degradan e inactivan a los genes supresores tumorales maestros p cincuenta y tres y proteína del retinoblastoma.',
        },
        {
          show: ['nie', 'inv'],
          note: 'Fase preinvasora prolongada e invasión estromal',
          say: 'Esta pérdida del control del ciclo celular origina una neoplasia intraepitelial que progresa lentamente durante diez a quince años desde lesiones de bajo grado hasta lesiones preinvasoras avanzadas. Si no se pesquisa oportunamente, las células tumorales rompen la membrana basal invadiendo el estroma vascular como carcinoma invasor.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Epidemiología y prevención primaria',
      title: 'Factores de Riesgo y Vacunación en el Programa Nacional de Inmunizaciones',
      cards: [
        {
          title: 'Factores de Riesgo para Neoplasia Cervical',
          tag: 'Cofactores de persistencia viral',
          kind: 'key',
          items: [
            {
              t: 'Conducta sexual e infección persistente',
              d: 'Inicio precoz de relaciones sexuales, parejas múltiples y falta de métodos de barrera',
              say: 'El inicio precoz de la actividad sexual coital antes de los dieciocho años expone un epitelio metaplásico inmaduro y biológicamente vulnerable a la infección persistente por genotipos oncogénicos del virus papiloma, especialmente ante múltiples parejas sexuales.',
            },
            {
              t: 'Tabaquismo e inmunosupresión celular',
              d: 'Los metabolitos del tabaco en el moco cervical dañan el ADN e inducen inmunosupresión local',
              say: 'El tabaquismo crónico actúa como un potente cofactor carcinogénico al concentrar nicotina e hidrocarburos en el moco cervical, duplicando el riesgo de progresión hacia lesiones de alto grado, un fenómeno que se agrava de manera crítica en mujeres con infección por el virus de inmunodeficiencia humana.',
            },
          ],
        },
        {
          title: 'Vacunación Profiláctica Nacional',
          tag: 'Estrategia escolar del PNI chileno',
          kind: 'criteria',
          items: [
            {
              t: 'Población escolar de cuarto y quinto año básico',
              d: 'Administración universal gratuita a niñas y niños en edad escolar antes del inicio sexual',
              say: 'En Chile la vacuna contra el virus del papiloma humano se administra de manera sistemática y gratuita a escolares de cuarto y quinto año básico de ambos sexos antes del inicio de la vida sexual.',
            },
            {
              t: 'Eficacia preventiva no terapéutica',
              d: 'Previene la infección por genotipos oncogénicos cubiertos; NO cura lesiones ya establecidas',
              say: 'Es crítico recordar que la vacuna es estrictamente profiláctica e induce inmunidad humoral neutralizante frente a nuevos contactos, careciendo por completo de efecto curativo sobre displasias preexistentes.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Salud pública y tamizaje',
      title: 'Tamizaje Poblacional Universal: El Programa Nacional GES de PAP',
      cards: [
        {
          title: 'Parámetros del Tamizaje Universal GES',
          tag: 'Garantía Explícita en Salud Número Tres',
          kind: 'criteria',
          items: [
            {
              t: 'Población diana de 25 a 64 años de edad',
              d: 'Tamizaje sistemático en todas las mujeres asintomáticas de 25 a 64 años inscritas en el sistema',
              say: 'En Chile la garantía explícita en salud número tres establece formalmente que el programa de tamizaje universal del cáncer cervicouterino está dirigido a toda mujer asintomática entre los veinticinco y los sesenta y cuatro años de edad beneficiaria del sistema de salud.',
            },
            {
              t: 'Periodicidad cada tres años',
              d: 'Examen de Papanicolaou cada tres años tras contar con dos exámenes anuales consecutivos normales',
              say: 'La periodicidad oficial establecida por las guías clínicas del Ministerio de Salud es de un examen de Papanicolaou cada tres años ininterrumpidos, una vez que la usuaria cuenta con dos exámenes anuales consecutivos previos informados como rigurosamente normales.',
            },
          ],
        },
        {
          title: 'Genotipos Oncogénicos del Virus Papiloma',
          tag: 'Alto riesgo vs bajo riesgo',
          kind: 'key',
          items: [
            {
              t: 'Genotipos 16 y 18: Más del setenta por ciento del cáncer',
              d: 'El VPH 16 causa el 60% de carcinomas escamosos; el VPH 18 causa el 50% de adenocarcinomas',
              say: 'Los genotipos dieciséis y dieciocho del virus papiloma humano son responsables de más del setenta por ciento de todos los carcinomas invasores en el mundo y están incluidos en las vacunas del programa nacional.',
            },
            {
              t: 'Genotipos 6 y 11: Condilomas acuminados benignos',
              d: 'Bajo riesgo oncogénico; causan el 90% de las verrugas anogenitales sin malignidad invasora',
              say: 'En contraste, los genotipos virales seis y once son de bajo potencial oncogénico y son los causantes de nueve de cada diez condilomas acuminados vulvares y perianales benignos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Citología cervical',
      title: 'Sistema Bethesda: Nomenclatura Citológica y Conductas Clínicas',
      cards: [
        {
          title: 'Lesiones de Bajo Grado e Indeterminadas',
          tag: 'ASC-US y LIE de bajo grado',
          kind: 'normal',
          items: [
            {
              t: 'Células escamosas atípicas de significado indeterminado (ASC-US)',
              d: 'Repetir Papanicolaou a los seis meses o realizar test molecular de VPH; colposcopía si persiste',
              say: 'Ante un informe de células escamosas atípicas de significado indeterminado la conducta recomendada es repetir el Papanicolaou a los seis meses o tipificar el virus papiloma, derivando si persiste la alteración.',
            },
            {
              t: 'Lesión intraepitelial escamosa de bajo grado (LIEBG / L-SIL)',
              d: 'Corresponde a infección citopática por VPH o NIE uno; derivación a colposcopía bajo garantía GES',
              say: 'El informe de lesión intraepitelial de bajo grado refleja cambios virales transitorios o neoplasia intraepitelial grado uno y activa la derivación a la unidad de patología cervical para estudio colposcópico.',
            },
          ],
        },
        {
          title: 'Lesiones de Alto Grado: Derivación Obligatoria',
          tag: 'LIEAG / H-SIL requiere colposcopía inmediata',
          kind: 'alert',
          items: [
            {
              t: 'Lesión de alto grado (LIEAG / H-SIL)',
              d: 'Engloba NIE dos, NIE tres y carcinoma in situ; riesgo elevado de carcinoma invasor sincrónico',
              say: 'El hallazgo citológico de lesión intraepitelial escamosa de alto grado agrupa a la neoplasia intraepitelial grado dos y tres y al carcinoma in situ, con alto riesgo de invasión estromal oculta.',
            },
            {
              t: 'Notificación GES y derivación urgente a UPC',
              d: 'Plazo máximo de treinta días para colposcopía y biopsia; ¡jamás repetir PAP ni operar a ciegas!',
              say: 'Todo informe de lesión de alto grado impone la notificación inmediata de garantía GES y la derivación a la unidad de patología cervical para colposcopía y biopsia dirigida en menos de treinta días.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen de confirmación diagnóstica',
      title: 'Colposcopía y Biopsia Dirigida: Hallazgos de Sospecha Neoplásica',
      cards: [
        {
          title: 'Soluciones Diagnósticas Colposcópicas',
          tag: 'Ácido acético y reactivo de Lugol',
          kind: 'key',
          items: [
            {
              t: 'Ácido acético al 3 a 5 por ciento: Acetoblanco denso',
              d: 'Coagula proteínas nucleares; las lesiones de alto grado muestran epitelio acetoblanco denso y opaco',
              say: 'Al aplicar ácido acético al tres a cinco por ciento sobre el cuello uterino se deshidratan y coagulan las proteínas nucleares aumentadas, observándose un epitelio blanco denso, opaco y con márgenes sobreelevados en aquellas áreas con alta densidad celular y atipia tumoral.',
            },
            {
              t: 'Test de Schiller con Lugol: Áreas yodonegativas',
              d: 'Las células displásicas carecen de glucógeno y no captan el yodo marrón resultando yodonegativas',
              say: 'Al pincelar con solución de Lugol, el epitelio normal capta el yodo tornándose marrón caoba, mientras que las lesiones neoplásicas carecen de glucógeno y se aprecian como zonas yodonegativas claras.',
            },
          ],
        },
        {
          title: 'Patrones Vasculares Atípicos y Biopsia',
          tag: 'Signos colposcópicos mayores',
          kind: 'alert',
          items: [
            {
              t: 'Punteado basófilo grueso y mosaico irregular',
              d: 'Neovascularización aberrante orientada vertical u horizontalmente que traduce neoplasia avanzada',
              say: 'La presencia de un mosaico vascular grueso o punteados dilatados irregulares refleja una angiogénesis anómala de alto grado que orienta el sitio exacto donde debe tomarse la biopsia con pinza.',
            },
            {
              t: 'Biopsia dirigida como estándar confirmatorio',
              d: 'La biopsia histológica de cuello es el único método legal que confirma el grado de neoplasia',
              say: 'La toma de biopsia dirigida bajo visión colposcópica magnificada es el estándar confirmatorio irremplazable que define formalmente la profundidad y el grado histológico de la lesión.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapéutica de lesiones preinvasoras',
      title: 'Manejo Terapéutico de la Neoplasia Intraepitelial Cervical',
      cards: [
        {
          title: 'Neoplasia Intraepitelial Grado Uno (NIE I)',
          tag: 'Comportamiento biológico benigno',
          kind: 'normal',
          items: [
            {
              t: 'Historia natural y regresión espontánea',
              d: 'Más del sesenta por ciento de los casos de NIE uno regresan espontáneamente en dos años',
              say: 'La neoplasia intraepitelial grado uno tiene una tasa de regresión espontánea superior al sesenta por ciento en mujeres jóvenes, mediada por la respuesta inmune contra el virus.',
            },
            {
              t: 'Conducta expectante con seguimiento citológico',
              d: 'Control semestral o anual con Papanicolaou y colposcopía; ablación solo si persiste más de dos años',
              say: 'La conducta de elección es el seguimiento periódico con citología y colposcopía, reservando tratamientos ablativos como crioterapia únicamente ante persistencia documentada por más de dos años.',
            },
          ],
        },
        {
          title: 'Neoplasia Intraepitelial Grados Dos y Tres (NIE II / III)',
          tag: 'Conización cervical terapéutica',
          kind: 'key',
          items: [
            {
              t: 'Conización cervical con asa LEEP o bisturí frío',
              d: 'Escisión completa de la zona de transformación y del canal endocervical con márgenes libres',
              say: 'Las lesiones de grado dos y tres exigen tratamiento quirúrgico conservador mediante conización cervical con asa de radiofrecuencia o cono frío para resecar íntegramente la zona de transformación.',
            },
            {
              t: 'Procedimiento a la vez diagnóstico y curativo',
              d: 'Permite descartar invasión microvascular oculta y cura a más del noventa y cinco por ciento',
              say: 'La conización cervical cumple un doble propósito asistencial irremplazable: descarta definitivamente la presencia de focos de microinvasión estromal oculta en el tejido y cura la neoplasia preinvasora al obtener bordes quirúrgicos libres de lesión.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones y seguimiento',
      title: 'Complicaciones de la Conización Cervical y Seguimiento Postratamiento',
      cards: [
        {
          title: 'Riesgos Obstétricos y Ginecológicos del Cono',
          tag: 'Incompetencia cervical y estenosis',
          kind: 'alert',
          items: [
            {
              t: 'Incompetencia cervical y parto prematuro',
              d: 'La resección de estroma cervical incrementa el riesgo de aborto tardío y parto pretérmino futuro',
              say: 'La complicación obstétrica más relevante de la conización cervical profunda es la incompetencia cervical, la cual eleva el riesgo de abortos de segundo trimestre y partos prematuros en embarazos posteriores.',
            },
            {
              t: 'Estenosis del canal endocervical',
              d: 'Cicatrización concéntrica que puede provocar hematómetra, dismenorrea severa o dificultad en el PAP',
              say: 'A nivel ginecológico puede originar estenosis del orificio cervical con hematómetra y dismenorrea severa, además de dificultar la visualización de la zona de transformación en controles futuros.',
            },
          ],
        },
        {
          title: 'Seguimiento Postconización',
          tag: 'Control a los seis meses',
          kind: 'criteria',
          items: [
            {
              t: 'Control estricto a los seis meses post-cono',
              d: 'Papanicolaou y colposcopía a los seis meses para verificar indemnidad de los márgenes y ausencia de lesión',
              say: 'Toda paciente sometida a conización debe ser controlada estrictamente a los seis meses con Papanicolaou y colposcopía para asegurar la erradicación completa de la neoplasia y vigilar recidivas.',
            },
            {
              t: 'Márgenes comprometidos en la biopsia del cono',
              d: 'Margen endocervical positivo exige reconización o reevaluación estricta de invasión residual',
              say: 'Si el informe patológico revela que el margen endocervical se encuentra comprometido por displasia grave, se debe programar una reconización quirúrgica para descartar adenocarcinoma invasor oculto.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Cáncer invasor y límites quirúrgicos',
      title: 'Estadificación FIGO y la Gran Frontera Terapéutica del Cáncer Cervical',
      cards: [
        {
          title: 'Enfermedad Confinada: Tratamiento Quirúrgico Radical',
          tag: 'Estadios IA a IIA tempranos',
          kind: 'key',
          items: [
            {
              t: 'Estadio uno estricto de cuello uterino',
              d: 'Tumores confinados al cérvix menores de 4 cm sin invasión de parametrios ni fondos vaginales',
              say: 'En el estadio uno el tumor está estrictamente limitado al cuello uterino. Si el diámetro es menor a cuatro centímetros la cirugía de elección es la histerectomía radical con linfadenectomía pélvica.',
            },
            {
              t: 'Operación radical de Wertheim-Meigs',
              d: 'Resección del útero, tercios superiores de vagina, parametrios mediales y ganglios pélvicos',
              say: 'La operación radical de Wertheim Meigs extirpa el cuerpo y cuello uterino junto a los parametrios mediales, el manguito vaginal superior y los ganglios linfáticos pélvicos bilaterales, alcanzando excelentes tasas de sobrevida y curación oncológica definitiva cuando se logran márgenes histológicos completamente libres de tumor.',
            },
          ],
        },
        {
          title: 'Invasión Parametrial: ¡Prohibida la Cirugía!',
          tag: 'Estadio IIB en adelante (FIGO)',
          kind: 'alert',
          items: [
            {
              t: 'Invasión de parametrios en estadio IIB',
              d: 'Induración tumoral palpable al tacto rectovaginal que compromete el tejido parametrial',
              say: 'Cuando el tumor se extiende lateralmente e invade los tejidos parametrios al tacto rectovaginal, la paciente se clasifica en estadio dos B de la Federación Internacional de Ginecología y Obstetricia.',
            },
            {
              t: 'Quimiorradioterapia concomitante definitiva',
              d: 'Radioterapia externa más Braquiterapia de alta tasa asociada a Cisplatino semanal intravenoso',
              say: 'Graben esta regla de oro: invadido el parametrio la cirugía está absolutamente contraindicada; el tratamiento curativo estándar indiscutible es la quimiorradioterapia concomitante con cisplatino semanal.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Algoritmo de tratamiento FIGO',
      title: 'Estadios FIGO del Cáncer Cervicouterino y Conducta Terapéutica',
      head: ['Estadio FIGO', 'Extensión Anatómica del Tumor', 'Tratamiento de Elección'],
      rows: [
        {
          cells: ['Estadio IA1', 'Microinvasión estromal menor a 3 mm de profundidad', 'Conización diagnóstica terapéutica o histerectomía total simple'],
          say: 'El estadio uno A uno es microinvasor y se resuelve conservadoramente con cono cervical si desea fertilidad o histerectomía simple.',
        },
        {
          cells: ['Estadio IB1 - IB2', 'Tumor invasor confinado a cuello menor a 4 cm', 'Histerectomía radical con linfadenectomía pélvica (Wertheim-Meigs)'],
          say: 'El estadio uno B tiene tumor clínicamente visible pero confinado al cérvix, tratándose con cirugía radical de Wertheim Meigs.',
        },
        {
          cells: ['Estadio IIB', 'Invasión tumoral de parametrios (tacto rectovaginal)', '¡CIRUGÍA CONTRAINDICADA! Quimiorradioterapia concomitante con Cisplatino'],
          say: 'En el estadio dos B hay invasión de parametrios; la cirugía queda prohibida y se aplica quimiorradioterapia con cisplatino.',
        },
        {
          cells: ['Estadio IIIB - IV', 'Pared pélvica, hidronefrosis o metástasis a distancia', 'Quimiorradioterapia pélvica o quimioterapia sistémica paliativa'],
          say: 'En estadios avanzados con hidronefrosis o metástasis distantes se indica quimiorradioterapia extendida o quimioterapia sistémica.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo Diagnóstico y Terapéutico del Cáncer Cervicouterino',
      say: 'Revisemos el algoritmo estructurado para orientar la conducta médica ante anomalías del Papanicolaou y la selección del tratamiento del cáncer invasor.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Bethesda H-SIL · Conducta Inmediata GES',
      stem: 'Una mujer de 34 años, asintomática, acude al CESFAM a retirar el informe de su Papanicolaou de control trienal, el cual concluye: Lesión Intraepitelial Escamosa de Alto Grado (LIEAG / H-SIL). Al examen ginecológico con espéculo el cuello uterino se aprecia de aspecto macroscópico sano, sin lesiones exofíticas ni sangrado activo.',
      question: 'De acuerdo con las guías clínicas del MINSAL y el protocolo de Garantías Explícitas en Salud (GES), ¿cuál es la conducta inmediata que debe adoptar el médico tratante?',
      options: [
        { letter: 'A', text: 'Repetir el PAP en 6 meses para confirmar la persistencia de la lesión' },
        { letter: 'B', text: 'Notificar GES y derivar inmediatamente a la Unidad de Patología Cervical (UPC) para Colposcopía y biopsia dirigida' },
        { letter: 'C', text: 'Prescribir óvulos vaginales de metronidazol con nistatina por 10 días y dar de alta' },
        { letter: 'D', text: 'Programar histerectomía total simple por vía laparoscópica de inmediato' },
        { letter: 'E', text: 'Administrar vacuna contra VPH como tratamiento curativo de la lesión' },
      ],
      correct: 'B',
      explanation: 'En el marco del Programa Nacional de Prevención y Control del Cáncer Cervicouterino (GES N° 3), todo informe de PAP con Lesión Intraepitelial Escamosa de Alto Grado (LIEAG / H-SIL) exige la notificación de garantía GES y la derivación inmediata y obligatoria a la Unidad de Patología Cervical (UPC) de nivel secundario para la realización de una Colposcopía con biopsia dirigida y eventual legrado endocervical en un plazo máximo garantizado de 30 días. Repetir el PAP o realizar cirugías sin biopsia colposcópica previa está formalmente contraindicado.',
      say: {
        stem: 'Mujer de treinta y cuatro años asintomática con informe de Papanicolaou que demuestra lesión intraepitelial escamosa de alto grado y cuello macroscópicamente sano.',
        question: 'De acuerdo con las guías del MINSAL y el protocolo GES, ¿cuál es la conducta inmediata que debe adoptar el médico?',
        options: 'La opción A propone repetir el PAP en seis meses. La B notificar GES y derivar de inmediato a patología cervical para colposcopía y biopsia dirigida. La C óvulos vaginales. La D histerectomía laparoscópica inmediata. La E vacuna contra el virus. Piénsalo.',
        answer: 'La respuesta correcta es la B. Toda lesión de alto grado debe notificarse por GES y derivarse a colposcopía y biopsia dirigida en menos de treinta días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Cáncer Cervicouterino Estadio IIB · Límite Quirúrgico',
      stem: 'Una paciente de 49 años consulta por sangrado genital postcoital y fetidez vaginal de 3 meses. Al examen ginecológico con espéculo se observa un tumor ulcerado y vegetante de 4 cm en el cuello uterino. Al tacto rectovaginal se palpa que la induración tumoral se extiende y compromete de forma evidente el tercio medial del parametrio izquierdo, sin alcanzar la pared ósea pélvica. La biopsia confirma Carcinoma Epidermoide Invasor de cuello uterino (Estadio IIB de la FIGO).',
      question: '¿Cuál es el tratamiento oncológico de elección indicado para esta paciente?',
      options: [
        { letter: 'A', text: 'Histerectomía radical con linfadenectomía pélvica bilateral (Operación de Wertheim-Meigs)' },
        { letter: 'B', text: 'Conización cervical con márgenes amplios' },
        { letter: 'C', text: 'Quimiorradioterapia concomitante (Radioterapia externa + Braquiterapia + Cisplatino semanal)' },
        { letter: 'D', text: 'Histerectomía total simple extrafascial' },
        { letter: 'E', text: 'Tratamiento exclusivamente sintomático y cuidados paliativos' },
      ],
      correct: 'C',
      explanation: 'El límite biológico y quirúrgico consensuado internacionalmente (FIGO, NCCN, MINSAL) para operar el cáncer cervicouterino es la indemnidad de los parametrios. Desde el momento en que existe invasión parametrial demostrada al tacto rectovaginal (Estadio IIB), la cirugía radical está CONTRAINDICADA y el tratamiento curativo estándar de elección es la Quimiorradioterapia Concomitante basada en Cisplatino semanal asociado a Radioterapia Externa pélvica y Braquiterapia intracavitaria de alta tasa de dosis. Este esquema alcanza excelentes tasas de control local sin la morbilidad de una cirugía incompleta.',
      say: {
        stem: 'Mujer de cuarenta y nueve años con carcinoma epidermoide invasor de cuatro centímetros con invasión de parametrio izquierdo al tacto rectovaginal en estadio dos B.',
        question: '¿Cuál es el tratamiento oncológico de elección indicado para esta paciente?',
        options: 'La opción A propone histerectomía radical de Wertheim Meigs. La B conización cervical. La C quimiorradioterapia concomitante con cisplatino semanal. La D histerectomía simple. La E cuidados paliativos exclusivos. Piénsalo.',
        answer: 'La respuesta correcta es la C. La invasión de parametrios contraindica la cirugía; el tratamiento de elección es la quimiorradioterapia concomitante definitiva.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Tamizaje Poblacional GES · Población y Frecuencia',
      stem: '¿Cuál es la edad y la periodicidad del tamizaje poblacional universal garantizado por el régimen GES para la detección precoz del Cáncer Cervicouterino en Chile mediante el examen de Papanicolaou (PAP)?',
      question: '¿Cuál es la edad y periodicidad del tamizaje poblacional universal garantizado por el régimen GES mediante Papanicolaou?',
      options: [
        { letter: 'A', text: 'Anual en todas las mujeres a partir del inicio de la actividad sexual hasta los 80 años' },
        { letter: 'B', text: 'Cada 3 años en mujeres de 25 a 64 años de edad' },
        { letter: 'C', text: 'Cada 5 años en mujeres de 50 a 69 años de edad exclusivamente' },
        { letter: 'D', text: 'Semestral en mujeres que utilizan anticonceptivos hormonales orales' },
        { letter: 'E', text: 'Única vez en la vida a los 35 años de edad' },
      ],
      correct: 'B',
      explanation: 'La Guía Clínica de Cáncer Cervicouterino del MINSAL y las Garantías Explícitas en Salud (GES N° 3) definen que la población beneficiaria de tamizaje poblacional universal está constituida por las mujeres de 25 a 64 años de edad, mediante el examen de Papanicolaou (PAP) cada 3 años (tras dos controles anuales iniciales consecutivos negativos). Este intervalo trienal maximiza el costo-efectividad y reduce la incidencia de cáncer invasor en más del 80%.',
      say: {
        stem: 'Pregunta epidemiológica sobre las normas ministeriales chilenas del programa de detección precoz del cáncer cervicouterino.',
        question: '¿Cuál es la edad y periodicidad del tamizaje poblacional universal garantizado por el régimen GES mediante Papanicolaou?',
        options: 'La opción A propone examen anual desde el inicio sexual hasta los ochenta años. La B cada tres años en mujeres de veinticinco a sesenta y cuatro años. La C cada cinco años. La D semestral. La E una única vez en la vida. Piénsalo.',
        answer: 'La respuesta correcta es la B. La garantía explícita en salud cubre el tamizaje con Papanicolaou cada tres años en mujeres entre veinticinco y sesenta y cuatro años.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Genotipos Oncogénicos de VPH · Tipos 16 y 18',
      stem: '¿Cuáles son los dos genotipos oncogénicos del Virus del Papiloma Humano (VPH) de alto riesgo más prevalentes a nivel mundial y en Chile, responsables de más del 70% de los carcinomas invasores de cuello uterino?',
      question: '¿Cuáles son los dos genotipos oncogénicos de alto riesgo responsables de más del 70% de los carcinomas de cuello uterino?',
      options: [
        { letter: 'A', text: 'VPH tipos 6 y 11' },
        { letter: 'B', text: 'VPH tipos 16 y 18' },
        { letter: 'C', text: 'VPH tipos 1 y 2' },
        { letter: 'D', text: 'VPH tipos 42 y 43' },
        { letter: 'E', text: 'VPH tipos 5 y 8' },
      ],
      correct: 'B',
      explanation: 'Los serotipos 16 y 18 del Virus Papiloma Humano son los principales agentes carcinogénicos de alto riesgo oncogénico para el epitelio cervical. El serotipo 16 es responsable de aproximadamente el 55-60% de los carcinomas epidermoides de cuello uterino, y el serotipo 18 es responsable del 15% de los carcinomas epidermoides y de más del 50% de los adenocarcinomas endocervicales. Ambos están cubiertos por la vacuna del PNI chileno. Los tipos 6 y 11 causan verrugas genitales benignas.',
      say: {
        stem: 'Pregunta sobre la biología molecular y virología de los virus de papiloma humano vinculados al desarrollo de neoplasias malignas cervicales.',
        question: '¿Cuáles son los dos genotipos oncogénicos de alto riesgo responsables de más del setenta por ciento de los carcinomas de cuello uterino?',
        options: 'La opción A propone genotipos seis y once. La B genotipos dieciséis y dieciocho. La C genotipos uno y dos. La D cuarenta y dos y cuarenta y tres. La E cinco y ocho. Piénsalo.',
        answer: 'La respuesta correcta es la B. Los genotipos virales dieciséis y dieciocho causan más del setenta por ciento de los carcinomas cervicales invasores.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Cáncer Cervicouterino y Lesiones Preinvasoras',
      cards: [
        {
          title: 'Tamizaje y Conducta ante Bethesda',
          tag: 'PAP y colposcopía oportuna',
          kind: 'key',
          items: [
            {
              t: 'Tamizaje trienal de 25 a 64 años',
              d: 'Garantía GES universal cada tres años; reduce drásticamente la tasa de cáncer avanzado',
              say: 'El tamizaje con Papanicolaou se realiza de forma trienal entre los veinticinco y sesenta y cuatro años de edad garantizado por el régimen de salud.',
            },
            {
              t: 'Lesión de alto grado exige derivación a UPC',
              d: 'Notificación GES y colposcopía con biopsia dirigida en treinta días; jamás repetir PAP',
              say: 'Cualquier reporte de lesión escamosa de alto grado exige notificación GES y derivación urgente a colposcopía sin perder tiempo repitiendo el examen citológico.',
            },
          ],
        },
        {
          title: 'Genotipos Virales y Conización',
          tag: 'Prevención y curación preinvasora',
          kind: 'criteria',
          items: [
            {
              t: 'Genotipos 16 y 18 oncogénicos',
              d: 'Provocan más del setenta por ciento de los cánceres cervicales; tipos 6 y 11 causan condilomas',
              say: 'Los genotipos virales dieciséis y dieciocho causan la gran mayoría de los carcinomas invasores, mientras que seis y once producen verrugas genitales benignas.',
            },
            {
              t: 'Conización cervical en NIE dos y tres',
              d: 'Tratamiento curativo de elección que preserva fertilidad y descarta microinvasión oculta',
              say: 'La neoplasia intraepitelial grado dos y tres se resuelve mediante conización cervical diagnóstica y terapéutica con márgenes histológicos libres.',
            },
          ],
        },
        {
          title: 'La Frontera Quirúrgica del Parametrio',
          tag: 'Estadio dos B y quimiorradioterapia',
          kind: 'alert',
          items: [
            {
              t: 'Cirugía de Wertheim-Meigs si parametrios libres',
              d: 'Histerectomía radical en estadios IA a IB con tumor confinado al cuello menor a 4 cm',
              say: 'El tratamiento quirúrgico radical se reserva para tumores menores a cuatro centímetros estrictamente confinados al cuello con parametrios indemnes.',
            },
            {
              t: '¡Parametrio invadido = Quimiorradioterapia!',
              d: 'Estadio IIB prohíbe la cirugía; tratamiento curativo exclusivo con radioterapia y cisplatino',
              say: 'La invasión parametrial prohíbe la histerectomía radical. Si te llevas una sola idea de hoy: en cáncer cervicouterino, el compromiso de parametrios marca el límite entre la cirugía primaria y la radioquimioterapia concomitante definitiva. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Diagnóstico y Terapéutico del Cáncer Cervicouterino',
    root: N(
      'start',
      'Resultado de Tamizaje Citológico (Papanicolaou) o Sospecha Clínica',
      'Sistema de clasificación Bethesda · inspección visual del cuello uterino con espéculo',
      'Iniciamos el abordaje clasificando el resultado citológico según el sistema Bethesda.',
      [
        'Informe de Lesión Intraepitelial de Alto Grado (LIEAG / H-SIL)',
        N(
          'alert',
          'Notificación GES N° 3 y Derivación Inmediata a UPC',
          'Colposcopía y biopsia dirigida en plazo garantizado menor a 30 días · ¡No repetir PAP!',
          'Ante lesión de alto grado notificamos GES y derivamos de inmediato para colposcopía y biopsia dirigida.',
          [
            'Biopsia confirma Neoplasia Preinvasora (NIE II / NIE III / Carcinoma In Situ)',
            N(
              'do',
              'Conización Cervical Diagnóstica y Terapéutica con Asa LEEP o Cono Frío',
              'Resección de la zona de transformación con bordes quirúrgicos libres preservando el útero',
              'Indicamos conización cervical con asa de radiofrecuencia para resecar la lesión con márgenes libres.',
            ),
          ],
          [
            'Biopsia confirma Carcinoma Epidermoide Invasor',
            N(
              'q',
              '¿Presenta invasión tumoral de parametrios al tacto rectovaginal?',
              'Estadificación clínica de la FIGO · resonancia magnética pélvica',
              'Evaluamos mediante tacto rectovaginal si existe compromiso de los tejidos parametrales.',
              [
                'Parametrios completamente libres y tumor confinado a cuello (Estadio I a IIA)',
                N(
                  'ok',
                  'Cirugía Radical: Operación de Wertheim-Meigs',
                  'Histerectomía radical con parametrectomía medial y linfadenectomía pélvica bilateral',
                  'Si los parametrios están libres realizamos histerectomía radical con linfadenectomía pélvica.',
                ),
              ],
              [
                'Parametrios indurados e invadidos (Estadio IIB en adelante)',
                N(
                  'alert',
                  '¡Cirugía Prohibida! Quimiorradioterapia Concomitante',
                  'Radioterapia externa pélvica + Braquiterapia de alta tasa + Cisplatino semanal EV',
                  'Ante invasión parametrial la cirugía está contraindicada e indicamos quimiorradioterapia curativa.',
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Informe de Papanicolaou Normal / Negativo para Malignidad',
        N(
          'ok',
          'Continuar Tamizaje Trienal Poblacional Universal',
          'Nuevo control con Papanicolaou en tres años en el centro de salud familiar',
          'Si el Papanicolaou resulta normal citamos a nuevo control en tres años dentro del programa de tamizaje.',
        ),
      ],
    ),
  },
};
