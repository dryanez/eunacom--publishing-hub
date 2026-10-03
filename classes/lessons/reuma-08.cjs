// Clase 1.8 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_2.cjs (reuma-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-08",
  tier: 3,
  slides: [
    {
      type: "cover",
      subtitle: "Criterio de entrada obligatorio, perfiles de anticuerpos y la hidroxicloroquina para toda la vida",
      say: "Bienvenidos. Hoy abordamos el lupus eritematoso sistémico, la enfermedad autoinmune paradigmática del tejido conectivo y patología garantizada por el GES en Chile. Revisaremos la inmunopatogenia por inmunocomplejos, los criterios clasificatorios internacionales de dos mil diecinueve con su criterio de entrada innegociable, la diferencia vital entre la sensibilidad de los anticuerpos antinucleares y la especificidad del anti-Smith, y la regla de oro del tratamiento basal con hidroxicloroquina. Empecemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia",
      title: "Pérdida de autotolerancia e inmunocomplejos",
      nodes: [
        { id: "apo", col: 0, row: 1, k: "cause", t: "Depuración apoptótica defectuosa", s: "Exposición masiva de antígenos nucleares" },
        { id: "inf", col: 1, row: 0, k: "mech", t: "Firma de interferón alfa", s: "Activación de células dendríticas plasmocitoides" },
        { id: "aut", col: 1, row: 2, k: "mech", t: "Autoanticuerpos patogénicos", s: "Linfocitos B producen anti-ADN y anti-Sm" },
        { id: "inm", col: 2, row: 1, k: "effect", t: "Inmunocomplejos circulantes", s: "Depósito en endotelios y membranas basales" },
        { id: "com", col: 3, row: 0, k: "alert", t: "Activación del complemento", s: "Consumo agudo de C tres y C cuatro" },
        { id: "org", col: 3, row: 2, k: "risk", t: "Daño multiorgánico inflamatorio", s: "Glomérulo, piel, articulaciones y serosas" },
      ],
      edges: [
        { from: "apo", to: "inf" },
        { from: "apo", to: "aut" },
        { from: "inf", to: "inm" },
        { from: "aut", to: "inm" },
        { from: "inm", to: "com" },
        { from: "inm", to: "org" },
      ],
      steps: [
        { show: ["apo", "inf"], note: "El defecto biológico primario",
          say: "En el lupus existe una falla intrínseca en la eliminación y depuración normal de las células apoptóticas. Los restos de núcleos celulares quedan expuestos en los tejidos y estimulan a las células dendríticas, generando una secreción masiva y sostenida de interferón alfa conocida como la firma de interferón." },
        { show: ["aut", "inm"], note: "Producción de autoanticuerpos patogénicos",
          say: "Los linfocitos B autorreactivos proliferan sin control y secretan autoanticuerpos dirigidos contra complejos de ADN e histonas y ribonucleoproteínas nucleares. Estos autoanticuerpos se unen a los antígenos nucleares circulantes formando inmunocomplejos que viajan por el torrente sanguíneo y se depositan en los capilares de múltiples órganos." },
        { show: ["com", "org"], note: "Activación del complemento y daño multiorgánico",
          say: "Al depositarse en las membranas basales de los riñones, la piel y las serosas, los inmunocomplejos activan la cascada clásica del complemento. Este proceso consume masivamente las fracciones C tres y C cuatro, y atrae neutrófilos activados que provocan necrosis fibrinoide y daño inflamatorio tisular severo." },
      ],
    },

    {
      type: "points",
      kicker: "Criterios EULAR y ACR dos mil diecinueve",
      title: "El criterio de entrada y el sistema de puntos",
      cards: [
        { title: "Criterio de entrada obligatorio", tag: "Sensibilidad mayor al noventa y ocho por ciento", kind: "alert", items: [
          { t: "ANA positivos en título uno en ochenta", d: "En células HEp dos por inmunofluorescencia",
            say: "Regla obligatoria de los criterios internacionales: el criterio de entrada es la presencia de anticuerpos antinucleares positivos en título mayor o igual a uno en ochenta por inmunofluorescencia indirecta en células HEp dos." },
          { t: "Si los ANA son negativos no clasifica", d: "Excluye el diagnóstico clasificatorio",
            say: "Si los anticuerpos antinucleares resultan negativos, el paciente no puede clasificarse formalmente como lupus eritematoso sistémico, dada su altísima sensibilidad cercana al cien por ciento en etapas tempranas." },
        ] },
        { title: "Punto de corte acumulado", tag: "Diez o más puntos requeridos", kind: "criteria", items: [
          { t: "Umbral de diez puntos ponderados", d: "Sumando criterios clínicos e inmunológicos",
            say: "Una vez que el paciente cumple el criterio de entrada de anticuerpos antinucleares, se suman los puntos de los distintos dominios clínicos e inmunológicos, necesitando al menos diez puntos para confirmar la clasificación diagnóstica." },
          { t: "Se cuenta el mayor puntaje por dominio", d: "No se suman ítems dentro del mismo grupo",
            say: "Dentro de cada dominio solo se contabiliza la manifestación que tenga el mayor puntaje asignado, evitando duplicar puntuaciones artificialmente por un mismo sistema orgánico." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Manifestaciones clínicas cardinales",
      title: "Compromiso mucocutáneo, articular y seroso",
      cards: [
        { title: "Eritema malar en mariposa", tag: "Seis puntos EULAR", kind: "key", items: [
          { t: "Respeta los surcos nasogenianos", d: "Diferencia clínica con la rosácea",
            say: "El eritema malar característico abarca el puente nasal y ambas mejillas en alas de mariposa, respetando rigurosamente los surcos nasogenianos. Este detalle semiológico es clave para diferenciarlo del eritema de la rosácea o la dermatitis seborreica." },
          { t: "Fotosensibilidad y úlceras orales", d: "Úlceras habitualmente indoloras en paladar",
            say: "Se asocia a fotosensibilidad marcada desencadenada por la radiación solar y a úlceras mucosas superficiales en el paladar duro o tabique nasal, que típicamente son indoloras y no provocan molestias al comer." },
        ] },
        { title: "Artropatía de Jaccoud", tag: "Seis puntos EULAR", kind: "criteria", items: [
          { t: "Deformidad articular reductible", d: "Desviación cubital y dedos en cuello de cisne",
            say: "El compromiso articular del lupus produce inflamación y dolor simétrico en manos y muñecas. Puede generar la clásica artropatía de Jaccoud, con desviación cubital y dedos en cuello de cisne que son fácilmente reductibles de forma pasiva por el examinador." },
          { t: "Sin erosiones óseas en radiografía", d: "Diferencia crucial con artritis reumatoide",
            say: "A diferencia de la artritis reumatoide, la artropatía lúpica de Jaccoud no produce erosiones óseas ni anquilosis en las radiografías articulares, ya que la laxitud reside en las cápsulas articulares y tendones y no en el hueso subcondral." },
        ] },
        { title: "Serositis y fiebre", tag: "Cinco puntos por serositis", kind: "normal", items: [
          { t: "Pleuritis y pericarditis aguda", d: "Dolor torácico pleurítico y frote",
            say: "La serositis es muy prevalente en el lupus, manifestándose como pleuritis con dolor punzante al toser y respirar hondo, o pericarditis aguda con frote auscultable y derrame pericárdico evidenciable en el ecocardiograma." },
          { t: "Fiebre inexplicada de origen autoinmune", d: "Dos puntos en el dominio constitucional",
            say: "La fiebre de origen lúpico suele presentarse durante los brotes agudos, requiriendo siempre descartar una infección bacteriana o viral sobreagregada mediante hemocultivos y urocultivo antes de escalar la inmunosupresión." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Compromiso hematológico y neuropsiquiátrico",
      title: "Citopenias autoinmunes y compromiso del sistema nervioso",
      cards: [
        { title: "Dominio hematológico", tag: "Citopenias periféricas", kind: "alert", items: [
          { t: "Leucopenia y linfopenia marcada", d: "Menor a 4.000 blancos o 1.000 linfocitos",
            say: "La leucopenia menor a cuatro mil y especialmente la linfopenia marcada menor a mil linfocitos son hallazgos hematológicos muy característicos del lupus activo, sumando puntos en los criterios diagnósticos." },
          { t: "Trombocitopenia y anemia hemolítica", d: "Menor a 100.000 plaquetas y Coombs directo positivo",
            say: "La trombocitopenia inmune menor a cien mil plaquetas y la anemia hemolítica con prueba de Coombs directa positiva son manifestaciones mayores que pueden requerir pulsos de corticoides o inmunoglobulinas." },
        ] },
        { title: "Dominio neuropsiquiátrico", tag: "Hasta cinco puntos", kind: "criteria", items: [
          { t: "Convulsiones y psicosis lúpica", d: "Manifestaciones de alta gravedad orgánica",
            say: "El compromiso del sistema nervioso central incluye convulsiones de novo, psicosis lúpica aguda con alucinaciones y delirium, y estado confusional agudo no explicable por infecciones o alteraciones metabólicas." },
          { t: "Diagnóstico diferencial con corticoides", d: "Diferenciar psicosis por corticoterapia",
            say: "Es fundamental diferenciar la psicosis lúpica primaria de la psicosis secundaria a dosis altas de glucocorticoides, evaluando la presencia de otros signos de actividad inflamatoria sistémica y niveles de complemento." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Perfil inmunológico",
      title: "Sensibilidad de los ANA versus especificidad del anti-Smith",
      nodes: [
        { id: "ana", col: 0, row: 1, k: "start", t: "Anticuerpos Antinucleares (ANA)", s: "Sensibilidad noventa y ocho por ciento" },
        { id: "des", col: 1, row: 0, k: "good", t: "Prueba de descarte ideal", s: "Excelente valor predictivo negativo" },
        { id: "ina", col: 1, row: 2, k: "alert", t: "Baja especificidad diagnóstica", s: "Positivo en población sana y otras patologías" },
        { id: "smi", col: 2, row: 0, k: "good", t: "Anticuerpos Anti-Smith (Sm)", s: "Especificidad mayor al noventa y nueve por ciento" },
        { id: "con", col: 3, row: 1, k: "good", t: "Confirmación categórica de LES", s: "Patognomónico de la enfermedad" },
      ],
      edges: [
        { from: "ana", to: "des" },
        { from: "ana", to: "ina" },
        { from: "des", to: "smi" },
        { from: "ina", to: "smi" },
        { from: "smi", to: "con" },
      ],
      steps: [
        { show: ["ana", "des"], note: "El valor de los ANA en el tamizaje",
          say: "Los anticuerpos antinucleares tienen una sensibilidad superior al noventa y ocho por ciento en el lupus eritematoso sistémico. Por ello son el examen de tamizaje inicial perfecto: si resultan negativos, prácticamente descartan la enfermedad en la práctica clínica diaria." },
        { show: ["ina", "smi"], note: "La limitación de la especificidad serológica",
          say: "Sin embargo, los anticuerpos antinucleares no son específicos, ya que pueden ser positivos a títulos bajos hasta en un cinco por ciento de personas sanas y en muchas otras condiciones autoinmunes e infecciosas. Por eso no confirman el diagnóstico por sí solos." },
        { show: ["con"], note: "Anti-Smith como sello patognomónico",
          say: "El anticuerpo más específico de todos es el anti-Smith, con una especificidad mayor al noventa y nueve por ciento. Aunque solo está presente en un tercio de los pacientes lúpicos, su hallazgo confirma el diagnóstico de lupus con absoluta certeza en cualquier examen." },
      ],
    },

    {
      type: "points",
      kicker: "Monitoreo biológico",
      title: "Anti-ADN de doble hebra y consumo de complemento",
      cards: [
        { title: "Anti-ADN de doble hebra", tag: "Marcador de actividad lúpica", kind: "key", items: [
          { t: "Se correlaciona con brotes inflamatorios", d: "Títulos en ascenso predicen recaídas",
            say: "Los anticuerpos anti-ADN de doble hebra tienen una especificidad sobre el noventa y cinco por ciento y, a diferencia del anti-Smith, sus títulos varían según el grado de inflamación del paciente en cada control médico." },
          { t: "Predictor de nefritis lúpica", d: "Alza de títulos precede daño glomerular",
            say: "Un incremento marcado en los títulos de anti-ADN de doble hebra advierte sobre un brote inminente de la enfermedad, especialmente el desarrollo de nefritis lúpica proliferativa activa con sedimento urinario alterado." },
        ] },
        { title: "Hipocomplementemia C tres y C cuatro", tag: "Consumo de la vía clásica", kind: "alert", items: [
          { t: "Consumo masivo de complemento", d: "Niveles disminuidos en sangre periférica",
            say: "Durante los brotes lúpicos se forman grandes cantidades de inmunocomplejos circulantes que activan la vía clásica del complemento, provocando una caída simultánea de los niveles séricos de C tres y C cuatro." },
          { t: "Doble alerta de brote", d: "Anti-ADN elevado más C tres bajo",
            say: "La combinación biológica de títulos de anti-ADN de doble hebra en ascenso junto con complemento C tres y C cuatro marcadamente disminuidos es el sello inequívoco de un brote lúpico severo en evolución." },
        ] },
        { title: "Otros anticuerpos relevantes", tag: "Anti-Ro y anti-La", kind: "normal", items: [
          { t: "Anti-Ro SSA y anti-La SSB", d: "Lupus subagudo y lupus neonatal",
            say: "Los anticuerpos anti-Ro y anti-La se asocian a lupus cutáneo subagudo fotosensible y confieren un riesgo crítico de bloqueo cardíaco congénito completo en los recién nacidos de madres afectadas." },
          { t: "Anti-histona en lupus farmacológico", d: "Positivo en más del noventa y cinco por ciento",
            say: "Los anticuerpos anti-histona son característicos del lupus inducido por medicamentos como hidralazina o procainamida, estando presentes en casi la totalidad de estos cuadros reversibles." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Tratamiento basal",
      title: "La regla de oro de la hidroxicloroquina universal",
      nodes: [
        { id: "dx", col: 0, row: 1, k: "start", t: "Lupus confirmado en cualquier etapa", s: "Desde cuadros leves hasta remisión clínica" },
        { id: "hcq", col: 1, row: 1, k: "good", t: "Hidroxicloroquina de por vida", s: "Dosis menor o igual a 5 mg por kilo de peso real al día" },
        { id: "bro", col: 2, row: 0, k: "good", t: "Reducción drástica de brotes", s: "Protección contra daño renal acumulado" },
        { id: "tro", col: 2, row: 1, k: "good", t: "Efecto antitrombótico y metabólico", s: "Mejora el perfil lipídico y reduce trombosis" },
        { id: "mor", col: 3, row: 1, k: "good", t: "Disminución de la mortalidad global", s: "Aumento comprobado de la sobrevida a largo plazo" },
      ],
      edges: [
        { from: "dx", to: "hcq" },
        { from: "hcq", to: "bro" },
        { from: "hcq", to: "tro" },
        { from: "bro", to: "mor" },
        { from: "tro", to: "mor" },
      ],
      steps: [
        { show: ["dx", "hcq"], note: "Prescripción universal obligatoria",
          say: "Esta es una regla innegociable en el examen: todo paciente con diagnóstico de lupus eritematoso sistémico debe recibir hidroxicloroquina de por vida, sin importar si la enfermedad está inactiva o en aparente remisión completa." },
        { show: ["bro", "tro"], note: "Efectos protectores multisistémicos",
          say: "La hidroxicloroquina reduce a la mitad la tasa de brotes inflamatorios, previene la progresión a insuficiencia renal crónica, disminuye los eventos trombóticos vasculares y mejora el perfil de lípidos y glucosa en sangre." },
        { show: ["mor"], note: "Impacto comprobado en la sobrevida",
          say: "Es el único fármaco de mantención basal que ha demostrado disminuir de forma contundente la mortalidad global a largo plazo en pacientes con lupus eritematoso sistémico en estudios clínicos mundiales." },
      ],
    },

    {
      type: "points",
      kicker: "Seguridad y medidas generales",
      title: "Fotoprotección y vigilancia oftalmológica",
      cards: [
        { title: "Fotoprotección rigurosa diaria", tag: "Prevención de brotes por radiación", kind: "alert", items: [
          { t: "Protector solar factor cincuenta o superior", d: "Aplicar cada tres a cuatro horas",
            say: "La radiación ultravioleta es el principal gatillante ambiental de apoptosis de queratinocitos y brotes lúpicos. El uso de protector solar factor cincuenta o más es obligatorio todos los días del año, incluso en días nublados." },
          { t: "Prendas protectoras y evitar el mediodía", d: "Barreras físicas indispensables",
            say: "Se debe educar al paciente para evitar la exposición directa al sol entre las once de la mañana y las cuatro de la tarde, utilizando sombreros de ala ancha y ropa que cubra las extremidades superiores e inferiores." },
        ] },
        { title: "Seguridad retiniana en hidroxicloroquina", tag: "Dosis menor a 5 mg por kilo", kind: "criteria", items: [
          { t: "Ajuste por peso corporal real", d: "Dosis habitual de doscientos a cuatrocientos miligramos al día",
            say: "Para prevenir la toxicidad retiniana en ojo de buey, la dosis máxima permitida es de cinco miligramos por kilo de peso real al día, administrada habitualmente en una o dos tabletas diarias por vía oral." },
          { t: "Control oftalmológico basal y anual", d: "Campo visual computarizado y tomografía macular",
            say: "Se solicita una evaluación oftalmológica basal al iniciar el tratamiento y controles anuales regulares a partir del quinto año de uso continuo, cuando aumenta el riesgo de depósito pigmentario macular." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Significado clínico de los autoanticuerpos en LES",
      head: ["Autoanticuerpo", "Sensibilidad", "Especificidad", "Regla de oro EUNACOM"],
      rows: [
        { cells: ["Antinucleares (ANA)", "Mayor al 98%", "Moderada (80%)", "Criterio de entrada obligatorio · Si es negativo descarta el diagnóstico"],
          say: "Repasemos los anticuerpos. Los antinucleares son el examen de entrada: sensibilidad mayor al noventa y ocho por ciento. Si son negativos, descartan el lupus con certeza casi absoluta." },
        { cells: ["Anti-Smith (Sm)", "20 a 30%", "Mayor al 99%", "El más específico de todos · Patognomónico pero de baja sensibilidad"],
          say: "El anti-Smith tiene una especificidad sobre el noventa y nueve por ciento. Es patognomónico de lupus pero solo aparece en uno de cada tres pacientes lúpicos." },
        { cells: ["Anti-ADN doble hebra", "60 a 70%", "Mayor al 95%", "Se correlaciona con actividad biológica y predice nefritis lúpica"],
          say: "El anti-ADN de doble hebra indica actividad inflamatoria y predice el compromiso renal agudo. Sus títulos suben durante los brotes de la enfermedad." },
        { cells: ["Anti-Ro y Anti-La", "30 a 40%", "Inespecífica", "Asociados a lupus cutáneo subagudo y bloqueo auriculoventricular neonatal"],
          say: "Los anticuerpos anti-Ro y anti-La se asocian a fotosensibilidad extrema y causan bloqueo cardíaco congénito irreversible en el feto de madres portadoras." },
        { cells: ["Anti-Histona", "50 a 60%", "Baja en LES", "Positivo en más del 95% del lupus inducido por medicamentos"],
          say: "Los anticuerpos anti-histona son típicos del lupus inducido por drogas, presentes en más del noventa y cinco por ciento de los casos farmacológicos." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Mujer de 24 años consulta por eritema facial en mariposa que respeta surcos nasogenianos tras paseo a la playa, artralgias simétricas en muñecas y manos de 4 semanas y astenia. Al examen físico se confirma eritema malar eritematoso y úlceras orales superficiales indoloras en paladar duro. Hemograma con leucopenia de 3.200 por microlitro y trombocitopenia leve de 110.000. Sedimento de orina y creatinina normales.",
      question: "¿Cuál es la conducta inicial obligatoria para confirmar el diagnóstico y qué terapia basal innegociable debe recibir?",
      options: [
        { letter: "A", text: "Solicitar ANA por inmunofluorescencia y prescribir Hidroxicloroquina más fotoprotección estricta" },
        { letter: "B", text: "Iniciar pulsos de Ciclofosfamida endovenosa de inmediato sin esperar autoanticuerpos" },
        { letter: "C", text: "Indicar Prednisona 60 mg al día en monoterapia permanente sin exámenes serológicos" },
        { letter: "D", text: "Solicitar biopsia renal percutánea urgente y derivar a diálisis" },
        { letter: "E", text: "Prescribir Metotrexato semanal en monoterapia y suspender todo protector solar" },
      ],
      correct: "A",
      explanation: "Ante la sospecha clínica de LES, el primer paso diagnóstico indispensable según los criterios EULAR/ACR 2019 es solicitar Anticuerpos Antinucleares (ANA) como criterio de entrada mandatario. En cuanto al tratamiento basal, todo paciente con diagnóstico confirmado o alta sospecha de lupus debe recibir Hidroxicloroquina a dosis ≤ 5 mg/kg peso real/día de forma indefinida, junto a fotoprotección estricta con FPS ≥ 50, medidas que reducen brotes, daño orgánico y mortalidad global.",
      say: {
        stem: "Caso clínico. Paciente de veinticuatro años que debuta con eritema malar que respeta surcos nasogenianos, úlceras orales indoloras, artralgias simétricas y leucopenia.",
        question: "¿Cuál es la conducta inicial obligatoria para confirmar el diagnóstico y qué terapia basal innegociable debe recibir?",
        options: "Las alternativas: solicitar anticuerpos antinucleares e iniciar hidroxicloroquina con protector solar, ciclofosfamida endovenosa inmediata, prednisona alta sola permanente, biopsia renal urgente, o metotrexato sin fotoprotección. Piénsalo.",
        answer: "La respuesta correcta es la A. El estudio diagnóstico parte siempre con anticuerpos antinucleares, que constituyen el criterio de entrada innegociable. Y la hidroxicloroquina con fotoprotección es la base del tratamiento para toda la vida en todo paciente con lupus para reducir brotes y prolongar la sobrevida.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2018 · Pregunta 28",
      stem: "Mujer de 24 años consulta por eritema facial en mariposa que respeta surcos nasogenianos, fotosensibilidad, úlceras orales indoloras y poliartralgias en manos de 6 semanas. Para confirmar la sospecha clínica de Lupus Eritematoso Sistémico según los criterios EULAR/ACR 2019, ¿cuál es el examen inmunológico que constituye el criterio de entrada obligatorio e indispensable?",
      options: [
        { letter: "A", text: "Factor Reumatoide a títulos altos mayor a 3 veces el valor normal" },
        { letter: "B", text: "Anticuerpos Antinucleares (ANA) positivos en título mayor o igual a 1:80" },
        { letter: "C", text: "Niveles séricos de complemento C3 menores a 40 mg/dL" },
        { letter: "D", text: "Biopsia de piel sana con depósito de inmunoglobulinas en banda lúpica" },
        { letter: "E", text: "Anticuerpos Anti-Ro (SSA) positivos en dilución simple" },
      ],
      correct: "B",
      explanation: "Según los criterios clasificatorios EULAR/ACR 2019 para Lupus Eritematoso Sistémico, el criterio de entrada obligatorio e ineludible es la presencia de Anticuerpos Antinucleares (ANA) positivos por inmunofluorescencia indirecta en células HEp-2 en título ≥ 1:80. Si este examen es negativo, el paciente no clasifica como LES independientemente de las otras manifestaciones clínicas.",
      say: {
        stem: "Pregunta real del EUNACOM dos mil dieciocho, pregunta veintiocho. Mujer de veinticuatro años con clínica sugerente de lupus eritematoso sistémico.",
        question: "¿Cuál es el examen inmunológico que constituye el criterio de entrada obligatorio e indispensable según los criterios internacionales?",
        options: "Las opciones: factor reumatoideo a títulos altos, anticuerpos antinucleares positivos en título mayor o igual a uno en ochenta, niveles de complemento C tres bajos, biopsia de piel sana, o anticuerpos anti-Ro. Piénsalo.",
        answer: "La respuesta correcta es la B. Los criterios de dos mil diecinueve establecieron como criterio de entrada innegociable los anticuerpos antinucleares positivos en dilución de al menos uno en ochenta por su sensibilidad superior al noventa y ocho por ciento.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2020 · Pregunta 04",
      stem: "¿Cuál de los siguientes autoanticuerpos presenta la mayor especificidad diagnóstica (superior al 99%) para el Lupus Eritematoso Sistémico?",
      options: [
        { letter: "A", text: "Anticuerpos Antinucleares (ANA)" },
        { letter: "B", text: "Anticuerpos Anti-Smith (Anti-Sm)" },
        { letter: "C", text: "Anticuerpos Anti-Ro (SSA)" },
        { letter: "D", text: "Anticuerpos Anti-Histona" },
        { letter: "E", text: "Anticuerpos Anticentrómero" },
      ],
      correct: "B",
      explanation: "El anticuerpo Anti-Smith (Anti-Sm), dirigido contra una ribonucleoproteína del núcleo, es el marcador serológico más específico de Lupus Eritematoso Sistémico (> 99%), considerándose patognomónico. Aunque solo está presente en el 20-30% de los pacientes lúpicos (baja sensibilidad), su hallazgo confirma el diagnóstico.",
      say: {
        stem: "EUNACOM dos mil veinte, pregunta cuatro. Se evalúa la especificidad serológica en reumatología.",
        question: "¿Cuál de los siguientes autoanticuerpos presenta la mayor especificidad diagnóstica, superior al noventa y nueve por ciento, para el lupus eritematoso sistémico?",
        options: "Las opciones: anticuerpos antinucleares, anticuerpos anti-Smith, anticuerpos anti-Ro, anticuerpos anti-histona, o anticuerpos anticentrómero. Piénsalo.",
        answer: "Es la B. El anticuerpo anti-Smith es el más específico de todos, con una especificidad superior al noventa y nueve por ciento. No confundir con los anticuerpos antinucleares, que son los más sensibles pero poco específicos.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2022 · Pregunta 41",
      stem: "Una paciente de 30 años con diagnóstico confirmado de Lupus Eritematoso Sistémico en tratamiento con Hidroxicloroquina 200 mg al día consulta a control médico asintomática. En sus exámenes de control destaca elevación significativa de los títulos de anticuerpos Anti-dsDNA y una caída marcada en los niveles séricos de C3 (48 mg/dL, normal > 90) y C4 (6 mg/dL, normal > 15). ¿Qué significado clínico tienen estos hallazgos biológicos?",
      options: [
        { letter: "A", text: "Indican remisión completa y permiten suspender la hidroxicloroquina" },
        { letter: "B", text: "Son marcadores inequívocos de toxicidad farmacológica por antipalúdicos" },
        { letter: "C", text: "Traducen un brote de actividad autoinmune con consumo de complemento y riesgo de nefritis" },
        { letter: "D", text: "Corresponden a una infección bacteriana piógena sobreagregada" },
        { letter: "E", text: "Indican transformación maligna hacia linfoma de células B" },
      ],
      correct: "C",
      explanation: "En el Lupus Eritematoso Sistémico, el aumento en los títulos de anticuerpos Anti-dsDNA asociado a hipocomplementemia (C3 y C4 disminuidos por consumo en la activación de la vía clásica por inmunocomplejos) es el marcador por excelencia de brote de actividad biológica lúpica, con un riesgo muy elevado de compromiso renal proliferativo agudo.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veintidós, pregunta cuarenta y uno. Paciente con lupus conocida en control asintomática que presenta elevación de anti-ADN de doble hebra y descenso marcado de las fracciones de complemento C tres y C cuatro.",
        question: "¿Qué significado clínico tienen estos hallazgos biológicos?",
        options: "Las alternativas: remisión completa, toxicidad por hidroxicloroquina, brote de actividad autoinmune con consumo de complemento y riesgo de nefritis, infección bacteriana sobreagregada, o transformación a linfoma. Piénsalo.",
        answer: "La respuesta correcta es la C. El incremento de anti-ADN de doble hebra junto a hipocomplementemia severa traduce un brote inminente por activación de la vía clásica y formación de inmunocomplejos, alertando sobre riesgo de nefritis lúpica.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2024 · Pregunta 17",
      stem: "Mujer de 28 años con diagnóstico reciente de Lupus Eritematoso Sistémico leve manifestado por eritema malar y artralgias sin daño de órgano vital. ¿Cuál es el tratamiento farmacológico basal que debe indicarse de forma obligatoria e indefinida para reducir brotes y disminuir la mortalidad global?",
      options: [
        { letter: "A", text: "Prednisona 60 mg al día en monoterapia permanente" },
        { letter: "B", text: "Hidroxicloroquina a dosis menor o igual a 5 mg/kg peso real al día" },
        { letter: "C", text: "Ciclofosfamida endovenosa mensual por 6 ciclos" },
        { letter: "D", text: "Metotrexato 25 mg a la semana subcutáneo sin corticoides" },
        { letter: "E", text: "Ácido acetilsalicílico 100 mg al día exclusivo" },
      ],
      correct: "B",
      explanation: "En todo paciente con LES, independientemente de la severidad o si está en remisión clínica, la Hidroxicloroquina (dosis ≤ 5 mg/kg peso real/día) es la piedra angular del tratamiento que debe mantenerse de por vida. Ha demostrado reducir significativamente la frecuencia de brotes, prevenir el daño orgánico renal, disminuir eventos trombóticos y reducir la mortalidad global.",
      say: {
        stem: "Pregunta del EUNACOM dos mil veinticuatro, pregunta diecisiete. Mujer de veintiocho años con lupus recién diagnosticado sin daño de órgano vital.",
        question: "¿Cuál es el tratamiento farmacológico basal que debe indicarse de forma obligatoria e indefinida para reducir brotes y disminuir la mortalidad?",
        options: "Las opciones: prednisona alta sola permanente, hidroxicloroquina a dosis menor o igual a cinco miligramos por kilo al día, ciclofosfamida mensual, metotrexato subcutáneo, o aspirina sola. Piénsalo.",
        answer: "Es la B. La hidroxicloroquina es el fármaco obligatorio para todo paciente lúpico de por vida, ajustada al peso real. Reduce la tasa de recaídas, protege el riñón, disminuye trombosis y reduce la mortalidad global.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Diagnóstico y anticuerpos", tag: "Criterios internacionales", kind: "key", items: [
          { t: "ANA mayor a 1:80 de entrada", d: "Sensibilidad máxima; si es negativo no es lupus",
            say: "Sintetizamos las tres reglas de oro. Primero: los anticuerpos antinucleares son el criterio de entrada indispensable por su alta sensibilidad, mientras que el anti-Smith confirma el diagnóstico por su especificidad casi absoluta." },
          { t: "Anti-ADN y complemento como brote", d: "Alza de títulos y caída de C tres y C cuatro",
            say: "Segundo: el alza de títulos de anti-ADN de doble hebra junto a hipocomplementemia anuncia un brote agudo con alto riesgo de nefritis proliferativa en desarrollo." },
        ] },
        { title: "Tratamiento basal de por vida", tag: "Hidroxicloroquina universal", kind: "pharma", items: [
          { t: "Dosis menor a 5 mg por kilo al día", d: "Mantiene la remisión y disminuye mortalidad",
            say: "Tercero: todo paciente lúpico debe recibir hidroxicloroquina indefinidamente junto con fotoprotección rigurosa diaria con factor cincuenta o superior." },
          { t: "Monitoreo oftalmológico anual", d: "Campo visual computarizado tras cinco años",
            say: "Recuerda vigilar el riesgo de maculopatía en ojo de buey con controles anuales tras cinco años de tratamiento continuo de la enfermedad." },
        ] },
        { title: "Artropatía y garantías GES", tag: "Reductible y no erosiva", kind: "criteria", items: [
          { t: "Artropatía de Jaccoud", d: "Deformidad articular sin erosiones radiológicas",
            say: "La artropatía de Jaccoud produce deformidades llamativas en las manos pero es totalmente reductible y no muestra erosiones en la radiografía ósea." },
          { t: "Garantía Explícita en Salud", d: "Cobertura integral de confirmación y terapia",
            say: "En Chile el lupus está garantizado por el GES desde los quince años de edad. Si te llevas una sola idea de hoy: los anticuerpos antinucleares son la puerta de entrada, el anti-Smith el sello específico, y la hidroxicloroquina el escudo protector que salva vidas. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo diagnóstico y terapéutico basal: Lupus Eritematoso Sistémico",
    root: N("start", "Sospecha clínica de Lupus Eritematoso Sistémico", "Eritema malar, fotosensibilidad, artralgias, citopenias",
      "Paciente con manifestaciones clínicas sugerentes de lupus eritematoso sistémico.",
      ["", N("q", "¿Anticuerpos Antinucleares (ANA) en título mayor o igual a 1:80?", "Criterio de entrada obligatorio EULAR/ACR 2019",
        "Se evalúa la presencia de anticuerpos antinucleares en células HEp dos.",
        ["NO: ANA negativos", N("alert", "No clasifica como LES", "Buscar diagnósticos alternativos",
          "Si los anticuerpos antinucleares resultan negativos, se descarta el diagnóstico clasificatorio de lupus eritematoso sistémico y se investigan otras patologías.")],
        ["SÍ: ANA positivos en título mayor o igual a 1:80", N("do", "Evaluar dominios clínicos e inmunológicos ponderados", "Revisar criterios mucocutáneos, articulares, renales y serológicos",
          "Cumple el criterio de entrada obligatorio. Se procede a contabilizar los puntos acumulados en los distintos dominios.",
          ["", N("q", "¿Puntaje acumulado mayor o igual a 10 puntos?", "Umbral clasificatorio de certeza",
            "Se calcula la suma de los puntajes máximos de cada dominio.",
            ["MENOR a 10 puntos", N("alert", "LES no confirmado actualmente", "Seguimiento clínico y analítico periódico",
              "No alcanza el puntaje clasificatorio. Se mantiene en control periódico ante posible evolución de nuevos criterios a lo largo del tiempo.")],
            ["MAYOR O IGUAL a 10 puntos", N("ok", "Diagnóstico confirmado de Lupus Eritematoso Sistémico", "Iniciar Hidroxicloroquina más fotoprotección estricta",
              "Diagnóstico de lupus confirmado. Todo paciente debe recibir hidroxicloroquina a dosis menor o igual a cinco miligramos por kilo al día de por vida y protección solar rigurosa.",
              ["", N("q", "¿Evidencia de brote con compromiso renal o de órgano vital?", "Sedimento activo, proteinuria o falla orgánica",
                "Se pesquisan signos de nefritis o afectación visceral mayor.",
                ["SÍ: Compromiso de órgano mayor", N("refer", "Derivación urgente a Reumatología y Biopsia Renal", "Pulsos de metilprednisolona más micofenolato",
                  "Presencia de compromiso orgánico grave. Derivar de urgencia para biopsia renal e inicio precoz de inmunosupresión intensiva con pulsos de metilprednisolona y micofenolato bajo cobertura GES.")],
                ["NO: Forma leve a moderada", N("ok", "Mantener Hidroxicloroquina y corticoides en dosis bajas transitorias", "Control cada 3 a 6 meses con C3, C4 y Anti-ADN",
                  "Mantener hidroxicloroquina continua, asociando pautas cortas de prednisona en dosis bajas ante artralgias y controlando periódicamente los niveles de complemento y anti-ADN de doble hebra.")])])])])])]),
  },
};
