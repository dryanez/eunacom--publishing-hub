// Clase 17.10 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-10). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.05.1.002) no trae preguntas reales; las de esquizofrenia y de efectos extrapiramidales están bajo 5.01.1.010, 5.01.2.002 y 5.01.5.002. De la búsqueda por tema se usaron:
//   Julio 2025 P39 (síntomas positivos, negativos y desorganización), Diciembre 2025 P76 (voces desde la adolescencia con ánimo bajo: esquizofrenia y no depresión psicótica),
//   Julio 2015 P74 (solo síntomas negativos, sin respuesta a antidepresivos), Agosto 2021 P14 (distonía aguda con haloperidol), Agosto 2021 P13 (acatisia con risperidona),
//   Diciembre 2019 P8 (tratamiento de la distonía aguda: la clave del banco es lorazepam, ver nota abajo).
// No usadas por repetir lo mismo: Julio 2017 P129, Julio 2013 P51, Julio 2016 P172, Diciembre 2017 P116, Julio 2015 P75, Diciembre 2018 P39, Julio 2013 P137 (hebefrenia: subtipo que el DSM-5 ya no usa), Diciembre 2018 P36, Diciembre 2017 P105, Diciembre 2019 P57 (misma acatisia), Julio 2016 P62 y Diciembre 2018 P38 (misma distonía).
// DESCARTADA: Diciembre 2022 P78 (flufenazina de depósito con fiebre, rigidez y obnubilación): la clave del banco dice distonía aguda, pero el cuadro es un síndrome neuroléptico maligno. No se enseña (el SNM va en psiq-13).
// DESCARTADA: Diciembre 2017 P110 (clave esquizofrenia; es la misma viñeta de Diciembre 2019 P95, con clave esquizoafectivo): el propio banco se contradice. No se enseña.
// Sin pregunta real sobre GES, síndrome metabólico ni duración del mantenimiento: tres preguntas del libro como "Caso representativo" (la de distonía del libro se omite porque hay reales).
// Cuidado clínico: el libro trata la distonía con biperideno y el banco real (Dic 2019 P8) acepta una benzodiacepina; se enseña biperideno como primera opción y la benzodiacepina como alternativa válida.
//   Los antipsicóticos de depósito no se enseñan como primera elección en el primer episodio. La clozapina se deja a psiq-11, el síndrome neuroléptico maligno a psiq-13 y la agitación a psiq-14.
// Imágenes: ninguna (los libros extraídos no traen un esquema útil de las vías dopaminérgicas; se propone una animación).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Esquizofrenia: dopamina, síntomas positivos y negativos, antipsicóticos atípicos, GES y efectos adversos',
      say: 'Bienvenido. Hoy vemos la esquizofrenia, la psicosis más preguntada del examen. Partimos por el mecanismo dopaminérgico, que explica por qué los síntomas positivos responden a los fármacos y los negativos casi no. Después vienen los criterios, el estudio obligatorio de un primer episodio, la garantía explícita en salud, los antipsicóticos de segunda generación y sus efectos adversos. La clozapina, el síndrome neuroléptico maligno y la agitación tienen su propia clase.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Dopamina: demasiada y muy poca',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Dopamina desbalanceada', s: 'Dos vías, dos direcciones' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Vía mesolímbica hiperactiva', s: 'Exceso de tono D2' },
        { id: 'c', col: 1, row: 3, k: 'mech', t: 'Vía mesocortical hipoactiva', s: 'Poca dopamina prefrontal' },
        { id: 'd', col: 2, row: 1, k: 'effect', t: 'Síntomas positivos', s: 'Delirios, alucinaciones' },
        { id: 'e', col: 2, row: 3, k: 'effect', t: 'Negativos y cognitivos', s: 'Abulia, aplanamiento' },
        { id: 'f', col: 3, row: 1, k: 'good', t: 'El bloqueo D2 los controla', s: 'Antipsicóticos' },
        { id: 'g', col: 3, row: 3, k: 'trap', t: 'Responden poco', s: 'Al antipsicótico' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'a', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'e' }, { from: 'd', to: 'f' }, { from: 'e', to: 'g' },
      ],
      steps: [
        { show: ['a', 'b', 'd'], note: 'Exceso mesolímbico: lo positivo',
          say: 'La hipótesis dopaminérgica dice que hay dos vías que van en direcciones opuestas. La vía mesolímbica nace en el área tegmental ventral y llega al núcleo accumbens. Con exceso de dopamina aparecen los síntomas positivos: delirios, alucinaciones, suspicacia y pensamiento desorganizado.' },
        { show: ['f'], note: 'Bloquear D2 los apaga',
          say: 'Por eso todos los antipsicóticos bloquean los receptores de dopamina D dos. Al bloquearlos en esta vía, los delirios y las alucinaciones se apagan.' },
        { show: ['c', 'e', 'g'], note: 'Déficit mesocortical: lo negativo',
          say: 'La vía mesocortical va del área tegmental ventral a la corteza prefrontal, y aquí la dopamina falta. Eso produce los síntomas negativos y el deterioro cognitivo: apatía, abulia, pocas palabras, anhedonia. Y ojo con esto: estos síntomas responden mucho menos al fármaco, y es una pregunta típica.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Mecanismo',
      title: 'Las cuatro vías dopaminérgicas',
      head: ['Vía', 'En la esquizofrenia', 'Al bloquear D2'],
      rows: [
        { cells: ['Mesolímbica', 'Hiperactiva: síntomas positivos', 'Mejoran delirios y alucinaciones'],
          say: 'En la vía mesolímbica hay exceso de dopamina y de ahí salen los síntomas positivos. Es el blanco terapéutico: el bloqueo mejora delirios y alucinaciones.' },
        { cells: ['Mesocortical', 'Hipoactiva: negativos y cognitivos', 'Respuesta pobre'],
          say: 'En la mesocortical hay déficit, con síntomas negativos y cognitivos. El bloqueo aporta poco, por eso se necesita además el apoyo psicosocial y la rehabilitación.' },
        { cells: ['Nigroestriada', 'Normal en la enfermedad', 'Síntomas extrapiramidales'],
          say: 'La vía nigroestriada no está afectada por la enfermedad. Pero si el fármaco la bloquea, aparecen los efectos extrapiramidales: distonía, parkinsonismo, acatisia.' },
        { cells: ['Tuberoinfundibular', 'Normal en la enfermedad', 'Hiperprolactinemia'],
          say: 'La tuberoinfundibular tampoco está afectada. Si se bloquea, sube la prolactina, con galactorrea, amenorrea y disfunción sexual. Esta tabla es la base de todos los efectos adversos que veremos más adelante.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Clínica',
      title: 'Síntomas positivos y negativos',
      head: ['Grupo', 'Qué se ve', 'Respuesta al fármaco'],
      rows: [
        { cells: ['Positivos', 'Delirios, alucinaciones auditivas, habla desorganizada', 'Excelente'],
          say: 'Los positivos son lo que se agrega: delirios de persecución, de perjuicio o místicos, voces y habla desorganizada. Son lo que llama la atención de la familia, y responden muy bien a los antipsicóticos.' },
        { cells: ['Negativos', 'Aplanamiento, abulia, alogia, anhedonia', 'Pobre; mejor con atípicos y apoyo psicosocial'],
          say: 'Los negativos son lo que se pierde: afecto plano, falta de voluntad, pobreza del habla y anhedonia. Responden poco, algo mejor con los atípicos, y con intervención psicosocial.' },
        { cells: ['Cognitivos', 'Memoria de trabajo, atención, lentitud', 'Rehabilitación cognitiva'],
          say: 'Los cognitivos son déficit de memoria de trabajo, de atención y lentitud de procesamiento. No remiten del todo con fármacos, y se trabajan con rehabilitación cognitiva.' },
        { cells: ['Afectivos', 'Disforia, depresión, riesgo suicida', 'Manejo cauteloso'],
          say: 'Los síntomas afectivos incluyen disforia y depresión posterior al brote psicótico, con riesgo suicida elevado. Eso lo vimos en la clase de conducta suicida, y la clozapina aparece de nuevo en la próxima clase.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Criterios DSM-5',
      cards: [
        { title: 'Criterio A: síntomas activos', tag: 'Dos o más, un mes', kind: 'criteria', items: [
          { t: 'Dos o más durante 1 mes', d: 'Uno debe ser de los tres primeros',
            say: 'El criterio A pide al menos dos síntomas durante un mes, o menos si se trataron con éxito. Y al menos uno tiene que ser uno de los tres primeros: ideas delirantes, alucinaciones o lenguaje desorganizado.' },
          { t: 'Delirios, alucinaciones, habla desorganizada', d: 'Voces comentadoras o en tercera persona',
            say: 'Las alucinaciones típicas son auditivas, voces que comentan lo que hace la persona o que hablan de ella en tercera persona.' },
          { t: 'Conducta desorganizada o catatonía; negativos', d: 'Los otros dos síntomas del criterio',
            say: 'Los otros dos síntomas son el comportamiento muy desorganizado o catatónico, y los síntomas negativos, es decir, expresión emotiva disminuida o abulia.' },
        ] },
        { title: 'Criterios B, C, D y E', tag: 'Tiempo y exclusiones', kind: 'key', items: [
          { t: 'Disfunción sociolaboral marcada', d: 'Respecto del nivel previo',
            say: 'El criterio B es un deterioro marcado del funcionamiento social y laboral, comparado con lo que la persona hacía antes.' },
          { t: 'Seis meses en total', d: 'Incluye pródromo y fase residual',
            say: 'El criterio C es la duración total: al menos seis meses de signos continuos. Eso incluye al menos un mes de fase activa, más las fases prodrómicas o residuales. Este es el dato que separa la esquizofrenia de los cuadros más breves.' },
          { t: 'Excluir esquizoafectivo, bipolar, tóxicos, orgánico', d: 'Criterios D y E',
            say: 'Y los criterios D y E exigen descartar un trastorno esquizoafectivo o bipolar, el consumo de sustancias y las enfermedades médicas, como encefalitis límbica, lupus o epilepsia del lóbulo temporal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Contexto',
      title: 'Quién enferma y qué influye',
      cards: [
        { title: 'Epidemiología', tag: 'Dato base', kind: 'normal', items: [
          { t: 'Cerca de 1% de la población', d: 'Crónica y discapacitante',
            say: 'La esquizofrenia afecta a cerca del uno por ciento de la población. Es un trastorno crónico, heterogéneo y discapacitante, de origen neuroevolutivo y multifactorial.' },
          { t: 'Inicio de adulto joven', d: 'Hombres 18 a 25; mujeres 25 a 35 años',
            say: 'Suele partir en el adulto joven: entre los dieciocho y los veinticinco años en los hombres, y entre los veinticinco y los treinta y cinco en las mujeres.' },
        ] },
        { title: 'Factor modificable', tag: 'Cannabis', kind: 'alert', items: [
          { t: 'Cannabis habitual en adolescentes', d: 'Riesgo de 2 a 4 veces',
            say: 'El consumo habitual de cannabis en adolescentes con predisposición genética multiplica por dos a cuatro el riesgo, y adelanta la edad del primer brote. Es un buen tema de consejería en la atención primaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Primer episodio',
      title: 'Antes de decir esquizofrenia',
      cards: [
        { title: 'Descartar causas secundarias', tag: 'Obligatorio', kind: 'alert', items: [
          { t: 'Drogas en orina', d: 'Cannabis, cocaína, anfetaminas, pasta base',
            say: 'Todo primer episodio psicótico exige un estudio para descartar causas reversibles. Lo primero es el examen toxicológico en orina: cannabis, cocaína, anfetaminas, pasta base, fenciclidina y éxtasis.' },
          { t: 'TAC de encéfalo o resonancia', d: 'Tumores, ACV, hidrocefalia',
            say: 'Se pide neuroimagen, tomografía de encéfalo sin contraste o resonancia, para descartar tumores como el meningioma frontal, un accidente cerebrovascular o una hidrocefalia.' },
          { t: 'Laboratorio general', d: 'TSH, VDRL, VIH, hemograma, electrolitos',
            say: 'Y el laboratorio: hemograma, inflamatorios, función renal y hepática, electrolitos, hormona tiroidea, VDRL para neurosífilis y serología para VIH.' },
        ] },
        { title: 'Cuándo punción lumbar', tag: 'Banderas rojas', kind: 'key', items: [
          { t: 'Fiebre, cefalea súbita, signos meníngeos', d: 'Sospecha de encefalitis',
            say: 'La punción lumbar se reserva para cuando hay fiebre, cefalea súbita, signos meníngeos o sospecha de encefalitis viral o autoinmune, como la anti NMDA en mujeres jóvenes.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Garantía explícita en salud',
      title: 'GES 34: primer episodio',
      cards: [
        { title: 'Quién y cuánto', tag: 'GES 34', kind: 'criteria', items: [
          { t: 'Primer episodio, 15 años y más', d: 'Sospecha: confirmar con psiquiatra',
            say: 'El primer episodio de esquizofrenia en personas de quince años y más está protegido por la garantía explícita en salud número treinta y cuatro. El médico general reconoce el debut, descarta tóxicos y causas orgánicas, y deriva.' },
          { t: 'Confirmación en 20 días', d: 'Por médico psiquiatra',
            say: 'La confirmación diagnóstica por psiquiatra tiene un plazo máximo de veinte días desde la sospecha.' },
          { t: 'Tratamiento en 24 horas', d: 'Desde la confirmación',
            say: 'Y el tratamiento farmacológico y psicosocial integral debe comenzar dentro de las veinticuatro horas siguientes a la confirmación.' },
        ] },
        { title: 'Qué haces tú', tag: 'Médico general', kind: 'key', items: [
          { t: 'Notificar GES y derivar', d: 'Seguimiento y apoyo familiar',
            say: 'Tu conducta es notificar el caso GES, derivar a psiquiatría, iniciar un antipsicótico atípico de primera línea y coordinar un seguimiento estrecho con apoyo psicosocial a la familia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Antipsicóticos de segunda generación',
      cards: [
        { title: 'Por qué son la primera línea', tag: 'Atípicos', kind: 'pharma', items: [
          { t: 'Bloqueo dual D2 y 5-HT2A', d: 'Menos efectos extrapiramidales',
            say: 'Los antipsicóticos de segunda generación, los atípicos, bloquean tanto los receptores de dopamina D dos como los de serotonina dos A. Eso les da menos riesgo de efectos extrapiramidales y de discinesia tardía, y por eso son la primera línea.' },
          { t: 'Risperidona 2 a 6 mg', d: 'Sobre 6 mg: más SEP y prolactina',
            say: 'La risperidona se usa de dos a seis miligramos al día, y es muy eficaz en síntomas positivos. Sobre seis miligramos aumentan los efectos extrapiramidales y la hiperprolactinemia.' },
          { t: 'Olanzapina 10 a 20 mg', d: 'Sedante; alerta metabólica',
            say: 'La olanzapina, de diez a veinte miligramos, controla rápido el delirio y seda. Su alerta es metabólica: ganancia de peso, dislipidemia y diabetes.' },
        ] },
        { title: 'Otros dos', tag: 'Quetiapina y aripiprazol', kind: 'pharma', items: [
          { t: 'Quetiapina 300 a 800 mg', d: 'Sedante; casi sin efectos motores',
            say: 'La quetiapina, de trescientos a ochocientos miligramos, es muy sedante y casi no da efectos extrapiramidales. Por eso es la opción cuando hay insomnio, componente afectivo o enfermedad de Parkinson.' },
          { t: 'Aripiprazol 10 a 30 mg', d: 'Agonista parcial D2; no engorda',
            say: 'El aripiprazol, de diez a treinta miligramos, es agonista parcial D dos, casi neutro en lo metabólico y no sedante. Puede dar acatisia al inicio. Es útil en jóvenes preocupados por el peso.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Elección',
      title: 'Qué atípico para quién',
      head: ['Fármaco', 'Efectos motores', 'Riesgo metabólico', 'Se prefiere en'],
      rows: [
        { cells: ['Risperidona', 'Moderado; sube sobre 6 mg', 'Moderado; prolactina alta', 'Síntomas positivos y agitación'],
          say: 'Risperidona: eficaz en lo positivo y en la agitación, con riesgo moderado de efectos motores y prolactina alta.' },
        { cells: ['Olanzapina', 'Muy bajo', 'Muy alto', 'Crisis aguda e insomnio'],
          say: 'Olanzapina: casi sin efectos motores, pero con el mayor riesgo metabólico. Sirve para crisis agudas con insomnio.' },
        { cells: ['Quetiapina', 'Casi nulo', 'Alto; sedación', 'Insomnio, ánimo, Parkinson'],
          say: 'Quetiapina: casi sin efectos motores, sedante y con riesgo metabólico alto. Es la que se tolera mejor en Parkinson.' },
        { cells: ['Aripiprazol', 'Bajo; acatisia', 'Muy bajo', 'Jóvenes preocupados por el peso'],
          say: 'Aripiprazol: neutro en lo metabólico, no seda, a veces causa acatisia.' },
        { cells: ['Clozapina', 'Mínimo; sin discinesia', 'Muy alto; agranulocitosis', 'Esquizofrenia refractaria'],
          say: 'Y la clozapina, que no es de primera línea: es el estándar de oro cuando fallan otros fármacos, con riesgo de agranulocitosis. Es el tema de la próxima clase.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad',
      title: 'Control metabólico obligatorio',
      cards: [
        { title: 'Qué medir', tag: 'Con todo atípico', kind: 'alert', items: [
          { t: 'Peso, cintura, presión', d: 'Glicemia y perfil lipídico',
            say: 'Con cualquier atípico se mide peso, circunferencia abdominal, presión arterial, glicemia y perfil lipídico.' },
          { t: 'Basal, 1 mes, 3 meses, anual', d: 'Calendario del libro',
            say: 'El calendario es: al inicio, al mes, a los tres meses y luego cada año.' },
        ] },
        { title: 'Si aparece el problema', tag: 'Conducta', kind: 'key', items: [
          { t: 'Diabetes o dislipidemia: tratar', d: 'Estilo de vida y metformina',
            say: 'Si aparece diabetes o dislipidemia, se trata con cambios de estilo de vida y metformina.' },
          { t: 'Rotar a un fármaco neutro', d: 'Aripiprazol o ziprasidona',
            say: 'Y se planifica un cambio gradual a un antipsicótico neutro en lo metabólico, como aripiprazol o ziprasidona. Nunca se suspende sin reemplazo, porque eso provoca recaída.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Efectos adversos',
      title: 'Efectos extrapiramidales',
      head: ['Efecto', 'Cuándo', 'Qué se ve', 'Tratamiento'],
      rows: [
        { cells: ['Distonía aguda', '24 a 48 horas', 'Tortícolis, crisis oculógira, trismus', 'Biperideno 5 mg IM o EV'],
          say: 'La distonía aguda aparece en las primeras veinticuatro a cuarenta y ocho horas: espasmo doloroso del cuello, desviación de la mirada o trismus. Es una urgencia y se trata con biperideno cinco miligramos intramuscular o endovenoso, repetible a los treinta minutos.' },
        { cells: ['Acatisia', 'Días a semanas', 'Inquietud intolerable, no puede sentarse', 'Propranolol 20 a 80 mg; bajar dosis'],
          say: 'La acatisia es una inquietud interna intolerable con necesidad de moverse. Se trata con propranolol de veinte a ochenta miligramos al día o con una benzodiacepina, y reduciendo la dosis del antipsicótico.' },
        { cells: ['Parkinsonismo', 'Semanas a meses', 'Temblor de reposo, rigidez, bradicinesia', 'Bajar dosis, rotar a atípico, biperideno temporal'],
          say: 'El parkinsonismo farmacológico aparece a las semanas, con temblor de reposo, rigidez en rueda dentada y lentitud. Se baja la dosis, se rota a un atípico o se agrega biperideno oral por poco tiempo.' },
        { cells: ['Discinesia tardía', 'Años', 'Movimientos oro faciales, lengua', 'Rotar; NO biperideno'],
          say: 'La discinesia tardía aparece tras años de tratamiento, con movimientos de masticación y protrusión de la lengua. El biperideno la empeora, y la conducta es rotar a clozapina, que es el que menos discinesia produce.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué viene',
      title: 'Una alerta que no es motora',
      cards: [
        { title: 'Síndrome neuroléptico maligno', tag: 'Próxima clase', kind: 'alert', items: [
          { t: 'Fiebre, rigidez, conciencia alterada', d: 'Urgencia vital: se ve en psiq-13',
            say: 'Si un paciente con antipsicótico tiene fiebre alta, rigidez generalizada y alteración de la conciencia, no es una distonía: es un síndrome neuroléptico maligno, una urgencia. Lo vemos completo en la clase siguiente.' },
        ] },
        { title: 'Para distinguir', tag: 'Ojo', kind: 'key', items: [
          { t: 'Distonía: vigil y sin fiebre', d: 'Se alivia con biperideno',
            say: 'La clave con la distonía es que el paciente está vigil, sin fiebre, y el espasmo cede en minutos con el tratamiento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Después del primer brote',
      title: 'Cuánto tiempo y cómo mantener',
      cards: [
        { title: 'Duración del tratamiento', tag: 'Mantención', kind: 'key', items: [
          { t: 'Mínimo 1 a 2 años', d: 'Tras remisión, de forma continua',
            say: 'Tras la remisión de un primer episodio, el antipsicótico se mantiene de forma continua durante al menos uno a dos años. Suspenderlo antes se asocia a recaídas frecuentes.' },
          { t: 'Recaídas múltiples: indefinido', d: 'Cada recaída deja más deterioro',
            say: 'Si ya hubo varias recaídas, el tratamiento es indefinido, porque cada recaída deja deterioro y aumenta el riesgo de refractariedad.' },
        ] },
        { title: 'Si no hay adherencia', tag: 'Cuidado', kind: 'alert', items: [
          { t: 'Depósito no es primera elección', d: 'Lo indica el psiquiatra con motivo',
            say: 'Los antipsicóticos inyectables de depósito se reservan para quien no logra tomar la medicación oral, y los decide el psiquiatra. No son el tratamiento inicial de un primer episodio sin una razón clara.' },
          { t: 'Sin respuesta tras 2 ensayos', d: 'Pensar en clozapina',
            say: 'Y si la persona no responde a dos antipsicóticos bien usados, se piensa en esquizofrenia refractaria. Eso es la clase siguiente.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del primer episodio psicótico al seguimiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Primer episodio con tóxicos negativos', 'Notificar GES, derivar, atípico', 'Esperar o dar solo psicoterapia'],
          say: 'Primer episodio, estudio negativo: se notifica GES, se deriva y se inicia un atípico. El error es esperar o dar solo psicoterapia.' },
        { cells: ['Delirios y voces resueltos; sigue apático', 'Negativos: apoyo psicosocial', 'Subir mucho el antipsicótico'],
          say: 'Si lo positivo remitió pero persiste la apatía, son síntomas negativos. El error es subir la dosis, que solo aumenta los efectos adversos.' },
        { cells: ['Espasmo de cuello a las 24 horas', 'Distonía: biperideno', 'Pensar en conversión o convulsión'],
          say: 'Espasmo de cuello al día siguiente de haloperidol: distonía aguda, biperideno.' },
        { cells: ['Inquietud de piernas con risperidona', 'Acatisia: propranolol', 'Subir el antipsicótico'],
          say: 'Inquietud de piernas con angustia a los pocos días: acatisia. El error es aumentar el antipsicótico creyendo que es agitación.' },
        { cells: ['Aumento de peso y glicemia con olanzapina', 'Metformina y rotar a aripiprazol', 'Suspender sin reemplazo'],
          say: 'Peso y glicemia altos con olanzapina: se trata y se rota a un fármaco neutro. Suspender sin reemplazo es el error.' },
        { cells: ['Discinesia tardía', 'Rotar; evitar anticolinérgicos', 'Dar biperideno'],
          say: 'En discinesia tardía, el biperideno la empeora. Es la trampa preferida.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 24 años con esquizofrenia, en tratamiento con risperidona 4 mg al día hace 3 meses con buena adherencia. Los delirios de persecución y las voces desaparecieron, pero sigue sin estudiar ni trabajar, con afecto plano, habla escasa y sin interés en nada. No tiene temblor, rigidez ni inquietud. Su pareja pide aumentar la dosis «hasta que se active».',
      question: '¿Cuál es la explicación y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Resistencia al tratamiento; subir risperidona a 12 mg al día' },
        { letter: 'B', text: 'Síntomas negativos de hipoactividad mesocortical, que responden poco al fármaco; mantener el tratamiento y reforzar rehabilitación psicosocial' },
        { letter: 'C', text: 'Depresión mayor; suspender el antipsicótico e iniciar un antidepresivo solo' },
        { letter: 'D', text: 'Parkinsonismo farmacológico; agregar biperideno de forma indefinida' },
        { letter: 'E', text: 'Recaída psicótica; hospitalizar de inmediato' },
      ],
      correct: 'B',
      explanation: 'Remitieron los síntomas positivos (vía mesolímbica bloqueada), y lo que persiste es negativo y cognitivo (hipoactividad mesocortical), que responde poco a los antipsicóticos. Subir la dosis, en el caso de la risperidona sobre 6 mg, solo aumenta los efectos extrapiramidales y la prolactina. Se mantiene el tratamiento y se refuerza la rehabilitación psicosocial.',
      say: {
        stem: 'Un hombre de veinticuatro años con esquizofrenia lleva tres meses con risperidona cuatro miligramos al día, con buena adherencia. Los delirios y las voces desaparecieron, pero sigue sin estudiar ni trabajar, con afecto plano, habla escasa y sin interés en nada. No tiene temblor, rigidez ni inquietud. Su pareja pide subir la dosis hasta que se active.',
        question: '¿Cuál es la explicación y la conducta más adecuada?',
        options: 'Las opciones: resistencia y subir a doce miligramos; síntomas negativos que responden poco, con rehabilitación psicosocial; depresión y suspender el antipsicótico; parkinsonismo con biperideno indefinido; o recaída que se hospitaliza. Piénsalo.',
        answer: 'Es la B. Lo positivo remitió, porque el bloqueo en la vía mesolímbica funcionó. Lo que queda es negativo y cognitivo, por déficit mesocortical, y eso responde poco al fármaco. Subir la dosis solo traería efectos extrapiramidales y prolactina. Se mantiene el tratamiento y se refuerza la rehabilitación psicosocial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 39',
      stem: 'Joven de 22 años que abandonó su carrera universitaria hace 8 meses, pasa la mayor parte del tiempo en casa, habla solo, ríe sin motivo aparente y cree que sus compañeros lo persiguen. Sin consumo de sustancias. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Esquizofrenia' },
        { letter: 'B', text: 'Trastorno esquizoafectivo' },
        { letter: 'C', text: 'Trastorno de personalidad esquizoide' },
        { letter: 'D', text: 'Trastorno bipolar con psicosis' },
        { letter: 'E', text: 'Trastorno delirante crónico' },
      ],
      correct: 'A',
      explanation: 'Esquizofrenia: síntomas positivos (alucinaciones, ideas de persecución), negativos (aislamiento social, abandono de actividades) y desorganización (habla solo, risa inapropiada) por más de 6 meses en un adulto joven. Requiere antipsicótico y rehabilitación.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un joven de veintidós años abandonó la universidad hace ocho meses, pasa la mayor parte del tiempo en casa, habla solo, ríe sin motivo aparente y cree que sus compañeros lo persiguen. No consume sustancias.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: esquizofrenia; esquizoafectivo; personalidad esquizoide; bipolar con psicosis; o delirante crónico. Piénsalo.',
        answer: 'Es la A. Tiene síntomas positivos, con persecución y soliloquios, negativos, con aislamiento y abandono de actividades, y desorganización, con risa inmotivada, todo durante más de seis meses en un adulto joven y sin tóxicos. El delirante crónico no tiene síntomas negativos ni desorganización, y la personalidad esquizoide no tiene psicosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 76',
      stem: 'Una paciente de 40 años, trabajadora de supermercado, consulta por sentirse angustiada y triste. Refiere que desde su adolescencia presenta alucinaciones auditivas, consistentes en voces que hacen comentarios negativos acerca de ella, las que desaparecen durante algunos periodos, reapareciendo en momentos de mayor estrés o soledad. Refiere que en el último tiempo las voces le han estado ordenando que se suicide. Al examen físico destaca su aspecto personal muy descuidado. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno delirante crónico' },
        { letter: 'B', text: 'Delirium' },
        { letter: 'C', text: 'Esquizofrenia' },
        { letter: 'D', text: 'Trastorno de personalidad paranoide' },
        { letter: 'E', text: 'Depresión mayor con síntomas psicóticos' },
      ],
      correct: 'C',
      explanation: 'Es una esquizofrenia clásica, con alucinaciones auditivas, inicio en la adolescencia y afectación general de su vida (aspecto descuidado), complicada con una probable depresión y síntomas ansiosos. No parece un trastorno esquizoafectivo, ya que no tiene historia de episodios depresivos o maníacos repetidos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una mujer de cuarenta años consulta por angustia y tristeza. Desde la adolescencia tiene alucinaciones auditivas: voces que hacen comentarios negativos sobre ella, que desaparecen por períodos y reaparecen con el estrés o la soledad. Últimamente las voces le ordenan que se suicide. Tiene un aspecto muy descuidado.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: delirante crónico; delirium; esquizofrenia; personalidad paranoide; o depresión mayor con síntomas psicóticos. Piénsalo.',
        answer: 'Es la C. Voces comentadoras desde la adolescencia, con curso fluctuante y deterioro del autocuidado: esquizofrenia. La tristeza y la angustia son una complicación, no el diagnóstico. La depresión psicótica es la trampa, pero aquí las voces vienen desde la adolescencia y la tristeza es reciente. Y fíjate en el riesgo: voces que ordenan suicidarse es una señal de alarma, que conecta con la clase de conducta suicida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 74',
      stem: 'Un paciente de 18 años presenta un cuadro de ánimo bajo, en tratamiento con antidepresivos por 3 meses, sin respuesta. Sus padres están muy preocupados, porque permanece encerrado en su cuarto, sin hacer nada, ni siquiera ver televisión. Al examinarlo, no se aprecia anhedonia, ni tristeza. No ha tenido alucinaciones. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Distimia' },
        { letter: 'B', text: 'Trastorno de personalidad esquizoide' },
        { letter: 'C', text: 'Esquizofrenia' },
        { letter: 'D', text: 'Trastorno esquizoafectivo' },
        { letter: 'E', text: 'Depresión mayor' },
      ],
      correct: 'C',
      explanation: 'Aunque no tenga delirios ni alucinaciones, parece una esquizofrenia que está debutando, probablemente de predominio negativo (esquizofrenia simple) o incluso catatónica, por permanecer inmóvil tanto tiempo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente de dieciocho años con ánimo bajo lleva tres meses con antidepresivos, sin respuesta. Sus padres están preocupados porque permanece encerrado en su cuarto sin hacer nada, ni siquiera ver televisión. Al examinarlo no se aprecia anhedonia ni tristeza, y no ha tenido alucinaciones.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: distimia; personalidad esquizoide; esquizofrenia; esquizoafectivo; o depresión mayor. Piénsalo.',
        answer: 'Es la C. Es la cara negativa de la esquizofrenia: un adolescente que se aísla, sin tristeza ni anhedonia, que no responde a antidepresivos. La depresión y la distimia quedan descartadas porque no hay tristeza. Mira lo importante: un cuadro puede debutar solo con síntomas negativos, y por eso la falta de respuesta al antidepresivo es la pista.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 14',
      stem: 'Un paciente de 18 años, adicto a la pasta base, presenta un episodio psicótico, en relación al consumo, el que es manejado con haloperidol 5 mg por vía intramuscular. Al día siguiente presenta contracción tónica del cuello, que desvía la cabeza hacia la izquierda, con intenso dolor. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Distonía aguda' },
        { letter: 'B', text: 'Acatisia' },
        { letter: 'C', text: 'Síndrome neuroléptico maligno' },
        { letter: 'D', text: 'Disquinesia tardía' },
        { letter: 'E', text: 'Parkinsonismo farmacológico' },
      ],
      correct: 'A',
      explanation: 'Es una distonía aguda clásica, de tipo tortícolis espasmódica, al día siguiente de un antipsicótico de alta potencia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un joven de dieciocho años, consumidor de pasta base, tiene un episodio psicótico relacionado con el consumo y se le administra haloperidol cinco miligramos intramuscular. Al día siguiente presenta una contracción tónica del cuello, con la cabeza desviada hacia la izquierda y mucho dolor.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: distonía aguda; acatisia; síndrome neuroléptico maligno; discinesia tardía; o parkinsonismo. Piénsalo.',
        answer: 'Es la A. Espasmo tónico y doloroso del cuello a las pocas horas de un antipsicótico de alta potencia: distonía aguda, tortícolis. La discinesia tardía aparece tras años, la acatisia es inquietud y no espasmo, y el síndrome neuroléptico maligno trae fiebre, rigidez y alteración de la conciencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 8',
      stem: 'Un paciente de 25 años, con esquizofrenia, recibe 5 mg de haloperidol intramuscular, por un cuadro de agitación psicomotora. A las dos horas presenta contracción tónica y dolorosa del cuello, con desviación hacia la derecha. ¿Cuál es el tratamiento de este cuadro?',
      question: '¿Cuál es el tratamiento de este cuadro?',
      options: [
        { letter: 'A', text: 'Bromocriptina' },
        { letter: 'B', text: 'Clorpromazina' },
        { letter: 'C', text: 'Lorazepam' },
        { letter: 'D', text: 'Diclofenaco' },
        { letter: 'E', text: 'Propranolol' },
      ],
      correct: 'C',
      explanation: 'El manejo de la distonía aguda (tortícolis espasmódica) es suspender el antipsicótico y administrar una benzodiacepina. El biperideno es el anticolinérgico de elección, pero no figura entre las alternativas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente de veinticinco años con esquizofrenia recibe cinco miligramos de haloperidol intramuscular por agitación. A las dos horas tiene una contracción tónica y dolorosa del cuello, desviada hacia la derecha. Pregunta cuál es el tratamiento.',
        question: '¿Cuál es el tratamiento de este cuadro?',
        options: 'Las opciones: bromocriptina; clorpromazina; lorazepam; diclofenaco; o propranolol. Piénsalo.',
        answer: 'Es la C. El tratamiento habitual de la distonía es el biperideno, que no está entre las opciones. Cuando no aparece, la respuesta es una benzodiacepina como el lorazepam, que también la controla. Las otras opciones no sirven: la clorpromazina es otro antipsicótico y empeoraría el cuadro, el propranolol es para la acatisia y la bromocriptina para el síndrome neuroléptico maligno.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 13',
      stem: 'Un paciente con esquizofrenia, recién diagnosticado, inicia tratamiento con risperidona 2 mg/día hace 5 días. Al tercer día, inicia un cuadro de disestesias en las extremidades inferiores, asociadas a angustia, inquietud y cambio continuo de posición. Se muestra muy incómodo y angustiado. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno de adaptación' },
        { letter: 'B', text: 'Distonía aguda' },
        { letter: 'C', text: 'Disquinesia aguda' },
        { letter: 'D', text: 'Acatisia' },
        { letter: 'E', text: 'Hipomanía' },
      ],
      correct: 'D',
      explanation: 'Acatisia: inquietud con malestar en las piernas y necesidad de cambiar de posición, a los pocos días de iniciar risperidona.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente con esquizofrenia, recién diagnosticado, empezó risperidona dos miligramos al día hace cinco días. Al tercer día aparecen sensaciones molestas en las piernas, con angustia, inquietud y cambio continuo de posición. Está muy incómodo y angustiado.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: trastorno de adaptación; distonía aguda; discinesia aguda; acatisia; o hipomanía. Piénsalo.',
        answer: 'Es la D. Es la inquietud motora subjetiva con necesidad de moverse que aparece los primeros días. La distonía es un espasmo, no inquietud. Y el error clínico es creer que está más psicótico o agitado y subir la dosis: se trata con propranolol y se revisa la dosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un joven de 20 años es llevado a la consulta médica por sus padres debido a que en los últimos 7 meses ha abandonado la universidad, se aísla en su habitación y afirma que una organización criminal lo espía a través de la televisión. En el examen mental se constata afecto aplanado, soliloquios y alucinaciones auditivas de voces que comentan lo que hace. El examen físico y el screening de drogas en orina son normales. ¿Cuál es el diagnóstico clínico y la conducta médico-legal más adecuada?',
      question: '¿Cuál es el diagnóstico clínico y la conducta médico-legal más adecuada?',
      options: [
        { letter: 'A', text: 'Trastorno delirante crónico; manejo ambulatorio exclusivo en APS sin derivación' },
        { letter: 'B', text: 'Primer episodio de esquizofrenia; activar GES 34, iniciar antipsicótico atípico y derivar a confirmación por especialista' },
        { letter: 'C', text: 'Trastorno esquizoafectivo; indicar sertralina 100 mg y reposo en casa' },
        { letter: 'D', text: 'Psicosis reactiva breve; esperar resolución espontánea antes de cumplir el mes' },
        { letter: 'E', text: 'Trastorno de personalidad esquizotípico; indicar psicoterapia individual sin fármacos' },
      ],
      correct: 'B',
      explanation: 'Cumple criterios de esquizofrenia: síntomas positivos (delirio de persecución, voces comentadoras), negativos (aplanamiento, abulia) y disfunción sociolaboral de más de 6 meses, con tóxicos negativos. En Chile es un primer episodio de esquizofrenia cubierto por GES 34: confirmación por psiquiatra en 20 días como máximo y tratamiento integral dentro de 24 horas desde la confirmación. Se notifica, se inicia un atípico (por ejemplo risperidona u olanzapina) y se deriva. La psicosis breve dura menos de un mes.',
      say: {
        stem: 'Una pregunta representativa del banco EUNACOM. Un joven de veinte años es llevado por sus padres porque en siete meses abandonó la universidad, se aísla, y dice que una organización criminal lo espía por la televisión. Tiene afecto aplanado, soliloquios y voces que comentan lo que hace. El examen físico y las drogas en orina son normales.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuada?',
        options: 'Las opciones: delirante crónico, solo en atención primaria; primer episodio de esquizofrenia, con GES, atípico y derivación; esquizoafectivo con sertralina; psicosis breve con espera; o personalidad esquizotípica con psicoterapia. Piénsalo.',
        answer: 'Es la B. Hay síntomas positivos y negativos durante más de seis meses, con tóxicos negativos: esquizofrenia en su primer episodio. En Chile corresponde notificar el GES treinta y cuatro, iniciar un antipsicótico atípico y derivar a psiquiatría, que confirma en veinte días. La psicosis breve dura menos de un mes, y aquí van siete.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 26 años con esquizofrenia en tratamiento con olanzapina 15 mg/día acude a control de salud a los 6 meses de terapia, manteniéndose sin síntomas psicóticos activos. En los exámenes de laboratorio destaca aumento de peso de 9 kg, glicemia en ayunas de 136 mg/dL (confirmada en segunda toma en 132 mg/dL) y triglicéridos en 280 mg/dL. ¿Cuál es la complicación que presenta y la conducta médica indicada?',
      question: '¿Cuál es la complicación que presenta y la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Hipotiroidismo farmacológico; iniciar levotiroxina 100 mcg al día' },
        { letter: 'B', text: 'Síndrome metabólico y diabetes inducidos por olanzapina; manejo dietético, metformina y evaluar rotación a un antipsicótico de menor perfil metabólico como aripiprazol' },
        { letter: 'C', text: 'Resistencia a antipsicóticos; duplicar la dosis de olanzapina a 30 mg al día' },
        { letter: 'D', text: 'Suspensión inmediata de todo tratamiento antipsicótico sin reemplazo' },
        { letter: 'E', text: 'Insuficiencia suprarrenal secundaria; administrar hidrocortisona endovenosa' },
      ],
      correct: 'B',
      explanation: 'La olanzapina (junto con la clozapina) es el antipsicótico de mayor riesgo metabólico: ganancia de peso, hipertrigliceridemia, resistencia a la insulina y diabetes tipo 2. Se diagnostica y trata la diabetes y la dislipidemia (estilo de vida y metformina) y se planifica la rotación gradual a un fármaco neutro, como aripiprazol o ziprasidona. Suspender sin reemplazo provoca una recaída psicótica grave.',
      say: {
        stem: 'Otra pregunta representativa del banco EUNACOM. Un hombre de veintiséis años con esquizofrenia, en tratamiento con olanzapina quince miligramos al día, llega a control a los seis meses, sin síntomas psicóticos. Subió nueve kilos, tiene una glicemia en ayunas de ciento treinta y seis, confirmada en una segunda toma, y triglicéridos de doscientos ochenta.',
        question: '¿Cuál es la complicación y la conducta indicada?',
        options: 'Las opciones: hipotiroidismo con levotiroxina; síndrome metabólico y diabetes por olanzapina, con metformina y rotación; resistencia con duplicación de la dosis; suspensión sin reemplazo; o insuficiencia suprarrenal. Piénsalo.',
        answer: 'Es la B. La olanzapina es, con la clozapina, el atípico de mayor riesgo metabólico. Aquí ya hay diabetes y dislipidemia, que se tratan con dieta y metformina, y se rota de forma gradual a un fármaco neutro como aripiprazol. Suspender sin reemplazo gatillaría una recaída grave, y duplicar la olanzapina empeoraría el problema metabólico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 24 años que presentó un primer episodio de esquizofrenia logra la remisión completa de sus ideas delirantes y alucinaciones tras 6 meses de tratamiento con risperidona 3 mg/día. Se encuentra asintomático y ha retomado sus actividades cotidianas. Sus familiares preguntan cuánto tiempo debe continuar tomando el antipsicótico. Según las guías clínicas y la evidencia psiquiátrica, ¿cuál es la duración mínima recomendada del tratamiento de mantenimiento?',
      question: '¿Cuál es la duración mínima recomendada del tratamiento de mantenimiento?',
      options: [
        { letter: 'A', text: 'El medicamento puede suspenderse de inmediato ya que se logró la remisión completa' },
        { letter: 'B', text: 'Debe mantenerse durante al menos 1 a 2 años continuos tras la remisión del primer episodio para evitar recaídas' },
        { letter: 'C', text: 'Solo debe tomarlo en los días en que vuelva a escuchar voces' },
        { letter: 'D', text: 'Debe suspenderse a las 4 semanas y reemplazarse por psicoterapia exclusiva' },
        { letter: 'E', text: 'Debe mantenerse por 3 meses y luego usar únicamente benzodiacepinas' },
      ],
      correct: 'B',
      explanation: 'Tras la remisión de un primer episodio, el antipsicótico se mantiene de forma continua y a dosis terapéutica al menos 1 a 2 años. Suspenderlo antes se asocia a una alta tasa de recaída, y cada recaída deja deterioro y más riesgo de refractariedad. Con varios episodios previos, la mantención es más prolongada o indefinida.',
      say: {
        stem: 'Una última pregunta representativa del banco EUNACOM. Un paciente de veinticuatro años logra la remisión completa de sus delirios y alucinaciones tras seis meses con risperidona tres miligramos al día. Está asintomático y retomó sus actividades. La familia pregunta cuánto tiempo debe seguir tomando el antipsicótico.',
        question: '¿Cuál es la duración mínima recomendada del tratamiento de mantenimiento?',
        options: 'Las opciones: suspender ya; mantener al menos uno a dos años; tomarlo solo cuando oiga voces; suspender a las cuatro semanas; o tres meses y luego benzodiacepinas. Piénsalo.',
        answer: 'Es la B. Mantener de forma continua al menos uno a dos años tras la remisión. Suspender antes, o tomarlo solo cuando hay síntomas, se asocia a recaídas, y cada recaída deja deterioro. Las benzodiacepinas no tratan la psicosis.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: esquizofrenia',
      cards: [
        { title: 'Diagnóstico', tag: 'Qué buscar', kind: 'key', items: [
          { t: 'Positivos, negativos y 6 meses', d: 'Uno entre delirio, alucinación, habla',
            say: 'Cerremos con las reglas de oro. La esquizofrenia exige dos o más síntomas, uno de ellos delirio, alucinación o habla desorganizada, y seis meses de evolución total. Los positivos responden al bloqueo dopaminérgico y los negativos casi no.' },
          { t: 'Primer episodio: estudio, GES y derivar', d: 'Orina, TAC, laboratorio',
            say: 'Todo primer episodio lleva estudio de tóxicos, neuroimagen y laboratorio, se notifica el GES treinta y cuatro y se deriva.' },
        ] },
        { title: 'Tratamiento', tag: 'Qué hacer', kind: 'alert', items: [
          { t: 'Atípico primero; controlar peso y glicemia', d: 'Mantener 1 a 2 años',
            say: 'Se parte con un antipsicótico atípico, con control metabólico, y se mantiene al menos uno a dos años tras la remisión.' },
          { t: 'Distonía: biperideno; acatisia: propranolol', d: 'Discinesia tardía: nunca biperideno',
            say: 'La distonía se trata con biperideno, la acatisia con propranolol, y en la discinesia tardía el biperideno está contraindicado. Si te llevas una sola idea de hoy: positivos responden al bloqueo de dopamina, negativos casi no, y todo primer episodio se estudia y se notifica al GES. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Primer episodio psicótico: del estudio al seguimiento',
    root: N('start', 'Primer episodio psicótico', 'Delirios, voces, desorganización',
      'Un adulto joven consulta con delirios, voces o conducta desorganizada. Antes de nombrarlo esquizofrenia, hay que estudiar tóxicos y causas médicas, y mirar cuánto tiempo lleva.',
      ['Tóxicos o causa orgánica', N('alert', 'Tratar la causa', 'Droga o enfermedad médica',
        'Si el estudio muestra consumo de drogas o una enfermedad médica, el cuadro es secundario y se trata la causa.')],
      ['Menos de 1 mes y se resuelve', N('refer', 'Psicosis breve', 'La próxima clase la compara',
        'Si dura menos de un mes y vuelve a la normalidad, es un trastorno psicótico breve, que veremos en la clase de trastorno delirante.')],
      ['Más de 6 meses, estudio negativo', N('do', 'Esquizofrenia', 'Notificar GES 34 y derivar',
        'Con más de seis meses de evolución, síntomas positivos y negativos y estudio negativo, es esquizofrenia. Se notifica el GES treinta y cuatro y se deriva a psiquiatría.',
        ['Iniciar tratamiento', N('ok', 'Antipsicótico atípico', 'Risperidona u olanzapina',
          'Se inicia un antipsicótico atípico de primera línea, como risperidona u olanzapina, con apoyo psicosocial a la familia.',
          ['Espasmo o inquietud', N('refer', 'Distonía o acatisia', 'Biperideno o propranolol',
            'Si aparece un espasmo de cuello, es una distonía y se da biperideno. Si hay inquietud intolerable, es acatisia, y se da propranolol o se baja la dosis.')],
          ['Peso o glicemia en alza', N('refer', 'Control metabólico', 'Metformina y rotar a aripiprazol',
            'Si suben el peso, la glicemia o los lípidos, se trata y se rota a un fármaco neutro, sin suspender el tratamiento.')],
          ['Remisión', N('ok', 'Mantener 1 a 2 años', 'No suspender antes',
            'Tras la remisión, el antipsicótico se mantiene de forma continua al menos uno a dos años.')],
          ['Sin respuesta a 2 ensayos', N('refer', 'Esquizofrenia refractaria', 'Clozapina: próxima clase',
            'Si no hay respuesta a dos antipsicóticos a dosis plena por seis semanas, es esquizofrenia refractaria. Eso nos lleva a la clozapina, en la clase siguiente.')],
        )],
      )],
    ),
  },
};
