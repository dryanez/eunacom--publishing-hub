// Clase 7.11 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Primero demostrar el exceso de cortisol, después buscar de dónde viene',
      say: 'Bienvenidos. Con esta clase dejamos la tiroides y entramos a las suprarrenales, partiendo por el síndrome de Cushing, un tema de frecuencia alta en el EUNACOM. Y el examen lo pregunta casi siempre igual: te muestra una paciente cushingoide y te pregunta qué examen pides. Para responder bien necesitas una sola idea: el estudio tiene dos fases, y nunca se salta la primera.',
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: '¿De dónde viene el exceso de cortisol?',
      cards: [
        { title: 'Causa más frecuente', tag: 'Pregunta siempre', kind: 'alert', items: [
          { t: 'Exógena: corticoides', d: 'Orales, inyectables, tópicos o inhalados',
            say: 'Partamos por las causas. El síndrome de Cushing es el conjunto de signos que produce una exposición prolongada a demasiado glucocorticoide. Y la causa más frecuente, por lejos, es la exógena: los corticoides que el paciente usa. Por eso, ante todo paciente cushingoide, lo primero es preguntar por corticoides orales, inyectables, cremas o inhaladores de alta potencia.' },
          { t: 'Si los suspende de golpe', d: 'Insuficiencia suprarrenal por eje atrófico',
            say: 'Y ojo con este paciente: si suspende el corticoide bruscamente, su eje está atrofiado y hace una insuficiencia suprarrenal. Eso lo retomamos en la próxima clase.' },
        ] },
        { title: 'Endógenas, ACTH-dependientes', tag: '80–85 %', kind: 'key', items: [
          { t: 'Enfermedad de Cushing: 70–75 %', d: 'Microadenoma hipofisario productor de ACTH',
            say: 'Entre las causas endógenas, la gran mayoría depende de la ACTH. La principal es la enfermedad de Cushing, setenta a setenta y cinco por ciento: un microadenoma de hipófisis que fabrica ACTH por su cuenta. Es cinco veces más frecuente en mujeres. Fíjate en el nombre: enfermedad de Cushing es solo la hipofisaria; síndrome de Cushing es el cuadro, venga de donde venga.' },
          { t: 'ACTH ectópica: 10 %', d: 'Cáncer pulmonar microcítico, carcinoides',
            say: 'La otra causa dependiente de ACTH es la secreción ectópica, cerca de un diez por ciento: un tumor fuera de la hipófisis que fabrica ACTH, sobre todo el cáncer pulmonar de células pequeñas y los carcinoides bronquiales o tímicos.' },
        ] },
        { title: 'Endógenas, ACTH-independientes', tag: '15–20 %', kind: 'normal', items: [
          { t: 'Adenoma suprarrenal: 10 %', d: 'Carcinoma 5 %, hiperplasia macronodular',
            say: 'Y el resto, quince a veinte por ciento, nace en la propia suprarrenal: un adenoma benigno unilateral, que es lo más frecuente de este grupo, un carcinoma corticosuprarrenal, o una hiperplasia macronodular bilateral.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'La ACTH delata el origen',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'cause', t: 'Adenoma hipofisario', s: 'O tumor ectópico' },
        { id: 'acA', col: 1, row: 1, k: 'mech', t: 'ACTH alta', s: 'Estimula ambas suprarrenales' },
        { id: 'cor', col: 2, row: 2, k: 'effect', t: 'Exceso de cortisol', s: 'Síndrome de Cushing' },
        { id: 'sr', col: 0, row: 3, k: 'cause', t: 'Adenoma suprarrenal', s: 'Fabrica cortisol solo' },
        { id: 'acB', col: 3, row: 3, k: 'mech', t: 'ACTH suprimida', s: 'Retroalimentación negativa' },
        { id: 'atr', col: 4, row: 3, k: 'risk', t: 'Suprarrenal contralateral atrófica', s: 'Sin ACTH que la estimule' },
      ],
      edges: [
        { from: 'hip', to: 'acA' }, { from: 'acA', to: 'cor' },
        { from: 'sr', to: 'cor' }, { from: 'cor', to: 'acB', label: 'frena la hipófisis' },
        { from: 'acB', to: 'atr' },
      ],
      steps: [
        { show: ['hip', 'acA'], note: 'ACTH-dependiente: el motor está arriba',
          say: 'Entender este esquema te resuelve la mitad del tema. En el Cushing dependiente de ACTH, el motor está arriba: un adenoma de hipófisis, o un tumor ectópico, produce ACTH en exceso, y esa ACTH estimula las dos suprarrenales.' },
        { show: ['cor'], note: 'Ambos caminos terminan en el mismo cuadro',
          say: 'El resultado es un exceso de cortisol, y la clínica es la misma venga de donde venga. Por eso la clínica no te dice el origen.' },
        { show: ['sr'], note: 'ACTH-independiente: el motor está abajo',
          say: 'En el independiente de ACTH, el motor está abajo: la suprarrenal fabrica cortisol por su cuenta, sin que nadie se lo pida.' },
        { show: ['acB'], note: 'El cortisol frena la hipófisis',
          say: 'Y ese cortisol frena a la hipófisis por retroalimentación negativa, así que la ACTH cae, queda suprimida. Esa es la clave: la ACTH alta o normal te lleva arriba, y la ACTH suprimida te lleva a la suprarrenal.' },
        { show: ['atr'], note: 'Por eso la otra suprarrenal se atrofia',
          say: 'Y hay una consecuencia que se pregunta: sin ACTH, la suprarrenal del otro lado se atrofia. Cuando saques el adenoma, esa glándula atrófica no va a poder responder. Guárdalo para el tratamiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Los signos que de verdad discriminan',
      cards: [
        { title: 'Más específicos', tag: 'Alta sospecha', kind: 'alert', items: [
          { t: 'Equimosis fáciles', d: 'Fragilidad capilar, hematomas espontáneos',
            say: 'Veamos la clínica. Muchos pacientes son obesos e hipertensos, así que lo que importa son los signos que discriminan. El primero, la fragilidad capilar: equimosis y hematomas con traumatismos mínimos.' },
          { t: 'Estrías violáceas anchas', d: 'Más de 1 cm: abdomen, flancos, muslos',
            say: 'El segundo, las estrías violáceas o rojizas, anchas, de más de un centímetro, en el abdomen, los flancos, las mamas y la cara interna de los muslos. Se producen porque el cortisol degrada el colágeno de la dermis.' },
          { t: 'Miopatía proximal', d: 'No se para de la silla sin apoyarse',
            say: 'El tercero, la miopatía proximal: atrofia de cuádriceps y de la cintura pélvica. El paciente no logra pararse de una silla o subir escaleras sin apoyarse con los brazos.' },
          { t: 'Plétora facial', d: 'Cara roja',
            say: 'Y el cuarto, la plétora facial. Si ves estos signos, la sospecha sube mucho.' },
        ] },
        { title: 'Frecuentes, poco específicos', tag: 'Acompañan', kind: 'normal', items: [
          { t: 'Obesidad central, cara de luna', d: 'Giba de búfalo, grasa supraclavicular',
            say: 'Del otro lado están los signos frecuentes pero poco específicos: la obesidad central con giba de búfalo y grasa supraclavicular, y la cara de luna llena.' },
          { t: 'HTA resistente, diabetes, osteoporosis', d: 'Fracturas vertebrales por compresión',
            say: 'La hipertensión resistente, la intolerancia a la glucosa o diabetes, y la osteoporosis precoz con fracturas vertebrales.' },
          { t: 'Hirsutismo, acné, depresión', d: 'O psicosis corticoidea',
            say: 'Y el hirsutismo, el acné, y los trastornos psiquiátricos, como la depresión o la psicosis corticoidea. Una paciente joven con hipertensión, estrías e hirsutismo es la presentación típica del examen.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fase 1',
      title: 'Primero: demostrar el hipercortisolismo',
      nodes: [
        { id: 'sos', col: 0, row: 2, k: 'start', t: 'Sospecha clínica', s: 'Estrías, miopatía, equimosis' },
        { id: 'exo', col: 1, row: 2, k: 'q', t: '¿Usa corticoides?', s: 'Descartar causa exógena' },
        { id: 'dos', col: 2, row: 1, k: 'good', t: '2 pruebas de primera línea', s: 'Nugent, CLU 24 h, cortisol salival' },
        { id: 'pse', col: 2, row: 3, k: 'risk', t: 'Descartar pseudo-Cushing', s: 'Depresión, alcohol, obesidad mórbida' },
        { id: 'conf', col: 3, row: 1, k: 'effect', t: 'Hipercortisolismo confirmado', s: 'Recién ahora, fase 2' },
        { id: 'trap', col: 3, row: 3, k: 'trap', t: 'ACTH o imagen de entrada', s: 'Nunca antes de confirmar' },
      ],
      edges: [
        { from: 'sos', to: 'exo' }, { from: 'exo', to: 'dos', label: 'no' },
        { from: 'exo', to: 'pse' },
        { from: 'dos', to: 'conf', label: 'dos alteradas' },
        { from: 'sos', to: 'trap', label: 'error' },
      ],
      steps: [
        { show: ['sos', 'exo'], note: 'Lo primero es la historia de fármacos',
          say: 'Ahora el algoritmo, que es lo que más se pregunta. Frente a la sospecha clínica, lo primero es descartar la causa exógena: pregunta por corticoides de cualquier tipo.' },
        { show: ['dos'], note: 'Dos pruebas concordantes alteradas',
          say: 'Si no los usa, la fase uno es demostrar que realmente hay un exceso de cortisol, y se hace con al menos dos pruebas de primera línea alteradas: el test de Nugent, el cortisol libre urinario de veinticuatro horas, y el cortisol salival nocturno.' },
        { show: ['pse'], note: 'Cuadros que alteran las pruebas',
          say: 'Antes de avanzar, hay que descartar los estados de pseudo-Cushing, que pueden alterar las pruebas sin que exista un tumor: la depresión severa, el alcoholismo crónico, la obesidad mórbida y la anorexia nerviosa.' },
        { show: ['conf'], note: 'Con dos pruebas alteradas, se confirma',
          say: 'Con dos pruebas concordantes alteradas, el hipercortisolismo está confirmado. Y recién ahí se pasa a la fase dos, buscar el origen.' },
        { show: ['trap'], note: 'La regla de oro del tema',
          say: 'Y esta es la regla de oro. Nunca se pide ACTH, ni resonancia de silla turca, ni escáner de suprarrenales antes de demostrar el hipercortisolismo. Los incidentalomas son frecuentes, y una imagen pedida antes de tiempo solo confunde. Este es el distractor favorito del examen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Pruebas de primera línea',
      title: 'Cómo se interpreta cada una',
      cards: [
        { title: 'Test de Nugent', tag: 'Supresión con 1 mg', kind: 'criteria', items: [
          { t: 'Dexametasona 1 mg a las 23 h', d: 'Cortisol plasmático a las 8 h',
            say: 'Veamos cada prueba. El test de Nugent es la supresión rápida con dexametasona: se da un miligramo por boca a las once de la noche y se mide el cortisol plasmático a las ocho de la mañana siguiente.' },
          { t: 'Normal: menor de 1,8 mcg/dL', d: 'Si no suprime: hipercortisolismo',
            say: 'La dexametasona le dice a la hipófisis que ya hay corticoide de sobra. Si el eje es normal, la ACTH baja y el cortisol cae bajo uno coma ocho microgramos por decilitro. Si el cortisol queda en uno coma ocho o más, no suprimió, y eso indica un hipercortisolismo patológico.' },
        ] },
        { title: 'Cortisol libre urinario', tag: 'Orina de 24 h', kind: 'key', items: [
          { t: 'Idealmente 2 recolecciones', d: 'Más de 3 veces el límite: muy sugerente',
            say: 'El cortisol libre urinario en orina de veinticuatro horas mide todo el cortisol que se produjo en el día. Idealmente se hacen dos recolecciones, y un valor sobre tres veces el límite superior es fuertemente diagnóstico.' },
        ] },
        { title: 'Cortisol salival nocturno', tag: 'Ritmo circadiano', kind: 'normal', items: [
          { t: 'A las 23 h, al menos 2 veces', d: 'En el Cushing no baja de noche',
            say: 'Y el cortisol salival nocturno aprovecha el ritmo circadiano: en una persona sana, el cortisol está en su mínimo a medianoche. En el Cushing ese ritmo se pierde, y el cortisol de las once de la noche sale alto, en al menos dos mediciones.' },
          { t: 'Cortisol plasmático matinal aislado', d: 'No sirve para diagnosticar',
            say: 'Fíjate en lo que no aparece en la lista: el cortisol plasmático de las ocho de la mañana. Suele salir normal en el Cushing, así que no sirve para diagnosticarlo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fase 2',
      title: 'Después: la ACTH decide dónde buscar',
      nodes: [
        { id: 'conf', col: 0, row: 2, k: 'start', t: 'Hipercortisolismo confirmado', s: 'Dos pruebas alteradas' },
        { id: 'acth', col: 1, row: 2, k: 'q', t: 'ACTH plasmática 8 h', s: 'Paso obligatorio' },
        { id: 'baja', col: 2, row: 0, k: 'mech', t: 'Baja o indetectable', s: 'Menor de 5–10 pg/mL' },
        { id: 'tc', col: 3, row: 0, k: 'good', t: 'TC de suprarrenales', s: 'Adenoma o carcinoma' },
        { id: 'alta', col: 2, row: 3, k: 'mech', t: 'Normal-alta o elevada', s: 'Mayor de 15–20 pg/mL' },
        { id: 'rm', col: 3, row: 2, k: 'good', t: 'RM de silla turca', s: 'Más dexametasona 8 mg o CRH' },
        { id: 'cat', col: 4, row: 3, k: 'refer', t: 'Cateterismo de senos petrosos', s: 'Si la RM es negativa o dudosa' },
      ],
      edges: [
        { from: 'conf', to: 'acth' },
        { from: 'acth', to: 'baja' }, { from: 'baja', to: 'tc', label: 'suprarrenal' },
        { from: 'acth', to: 'alta' }, { from: 'alta', to: 'rm', label: 'hipófisis o ectópico' },
        { from: 'rm', to: 'cat', label: 'menor de 6 mm o negativa' },
      ],
      steps: [
        { show: ['conf', 'acth'], note: 'El primer examen de la fase 2',
          say: 'Pasemos a la fase dos. Con el hipercortisolismo confirmado, el siguiente paso obligatorio es medir la ACTH plasmática a las ocho de la mañana. Antes de cualquier imagen.' },
        { show: ['baja', 'tc'], note: 'ACTH suprimida: mira la suprarrenal',
          say: 'Si la ACTH está baja o indetectable, bajo cinco a diez picogramos por mililitro, es un Cushing independiente de ACTH: el problema está en la suprarrenal. Ahí pides una tomografía de abdomen con protocolo suprarrenal, para caracterizar un adenoma o un carcinoma.' },
        { show: ['alta'], note: 'ACTH alta o normal: dependiente de ACTH',
          say: 'Si la ACTH está elevada, o normal cuando debería estar frenada, sobre quince a veinte, es un Cushing dependiente de ACTH. Ochenta a ochenta y cinco por ciento de estos son hipofisarios, y el resto ectópicos.' },
        { show: ['rm'], note: 'Separar hipófisis de ectópico',
          say: 'Para separarlos se pide una resonancia de silla turca con gadolinio, que busca el microadenoma, y una prueba de supresión con dosis alta de dexametasona, ocho miligramos, o un test de CRH. La enfermedad de Cushing conserva algo de retroalimentación y suprime más de la mitad del cortisol basal; el tumor ectópico es autónomo y no suprime.' },
        { show: ['cat'], note: 'El estándar de oro cuando la imagen no aclara',
          say: 'Y si la resonancia es negativa, o muestra una lesión dudosa de menos de seis milímetros, el estándar de oro es el cateterismo de senos petrosos inferiores con estímulo de CRH. Eso ya es terreno del especialista.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Formas especiales',
      title: 'Ectópico y carcinoma suprarrenal',
      cards: [
        { title: 'ACTH ectópica', tag: 'Cáncer pulmonar', kind: 'alert', items: [
          { t: 'ACTH muy alta, mayor de 100', d: 'Fumador, baja de peso, cuadro fulminante',
            say: 'Hay dos formas que el examen dibuja distinto. La primera, el Cushing ectópico. Piensa en un fumador con cáncer pulmonar de células pequeñas: ACTH altísima, sobre cien, y un hipercortisolismo fulminante, de semanas.' },
          { t: 'Hipokalemia y alcalosis', d: 'El cortisol actúa como mineralocorticoide',
            say: 'Da hipokalemia severa con alcalosis metabólica. ¿Por qué? El exceso de cortisol satura la enzima que normalmente lo inactiva en el riñón, la once beta hidroxiesteroide deshidrogenasa tipo dos, y el cortisol termina activando el receptor de mineralocorticoides.' },
          { t: 'Hiperpigmentación, sin fenotipo', d: 'No alcanza a engordar',
            say: 'Y da hiperpigmentación, porque tanta ACTH estimula los melanocitos. Como es tan rápido, muchas veces no alcanza a desarrollar la obesidad típica. Fumador flaco, hiperpigmentado, con potasio bajo e hipertensión: Cushing ectópico.' },
        ] },
        { title: 'Carcinoma suprarrenal', tag: 'Virilización', kind: 'pharma', items: [
          { t: 'Masa mayor de 4–6 cm', d: 'Heterogénea, invasora',
            say: 'La segunda es el carcinoma corticosuprarrenal. En la tomografía es una masa grande, de más de cuatro a seis centímetros, heterogénea e invasora, a diferencia del adenoma, que es un nódulo de menos de cuatro centímetros y rico en lípidos.' },
          { t: 'DHEA-S masivamente elevada', d: 'Con virilización',
            say: 'Y como fabrica también andrógenos, la DHEA sulfato está muy elevada y la paciente se viriliza. En el adenoma, en cambio, la DHEA sulfato está baja. Se trata con cirugía oncológica abierta más mitotano.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cada origen tiene su cirugía',
      cards: [
        { title: 'Tratamiento etiológico', tag: 'Cirugía', kind: 'key', items: [
          { t: 'Enfermedad de Cushing', d: 'Cirugía transesfenoidal, éxito 80–90 %',
            say: 'Vamos al tratamiento, que depende del origen. En la enfermedad de Cushing, resección transesfenoidal del adenoma por un neurocirujano experto, con un éxito inicial de ochenta a noventa por ciento. Si persiste o recidiva, radiocirugía, inhibidores suprarrenales o suprarrenalectomía bilateral.' },
          { t: 'Adenoma suprarrenal', d: 'Suprarrenalectomía laparoscópica',
            say: 'En el adenoma suprarrenal, suprarrenalectomía laparoscópica unilateral, después de estabilizar al paciente. Y en el ectópico, resecar el tumor primario cuando se puede.' },
        ] },
        { title: 'Después de la cirugía', tag: 'Obligatorio', kind: 'alert', items: [
          { t: 'Hidrocortisona 6 a 12 meses', d: 'La suprarrenal contralateral está atrófica',
            say: 'Y aquí vuelve la idea del esquema. Tras sacar el adenoma, la suprarrenal del otro lado está atrófica, porque llevaba años sin ACTH. El paciente pasa de golpe de tener demasiado cortisol a no tener nada, y hace una insuficiencia suprarrenal aguda. Por eso se deja hidrocortisona de reemplazo por seis a doce meses, hasta que el eje se recupere.' },
        ] },
        { title: 'Terapia médica', tag: 'Puente', kind: 'pharma', items: [
          { t: 'Ketoconazol, metirapona, osilodrostat', d: 'Bloquean la síntesis de cortisol',
            say: 'Los fármacos que inhiben la síntesis suprarrenal de cortisol, como el ketoconazol, la metirapona o el osilodrostat, se usan para controlar el hipercortisolismo grave antes de la cirugía, o en el ectópico que no se puede resecar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones',
      title: 'Lo que mata al paciente con Cushing',
      cards: [
        { title: 'Complicaciones graves', tag: 'Anticipar', kind: 'alert', items: [
          { t: 'Tromboembolismo venoso', d: 'Hipercoagulable: profilaxis perioperatoria',
            say: 'El hipercortisolismo no tratado tiene complicaciones graves. El paciente es hipercoagulable, con más factor ocho y von Willebrand, así que tiene riesgo de trombosis y embolía pulmonar: se indica tromboprofilaxis con enoxaparina antes y después de operar.' },
          { t: 'Infecciones graves', d: 'Bacterianas o micóticas',
            say: 'Está inmunosuprimido, con riesgo de sepsis bacteriana o micótica. En el hipercortisolismo severo se da profilaxis de Pneumocystis con cotrimoxazol.' },
          { t: 'Hipokalemia severa', d: 'Espironolactona y potasio',
            say: 'Puede hacer una hipokalemia severa con hipertensión, que se maneja con espironolactona y aporte de cloruro de potasio.' },
          { t: 'Fracturas vertebrales', d: 'Calcio, vitamina D, bifosfonatos',
            say: 'Y el hueso sufre: el cortisol inhibe a los osteoblastos, y aparecen fracturas vertebrales por compresión, que se tratan con calcio, vitamina D y bifosfonatos una vez corregido el cuadro.' },
        ] },
        { title: 'Tu rol', tag: 'Derivar', kind: 'criteria', items: [
          { t: 'No es GES', d: 'Derivación prioritaria a endocrinología',
            say: 'El síndrome de Cushing no tiene garantía GES directa. Tu rol es sospecharlo, pedir las pruebas de primera línea y derivar con prioridad a endocrinología, que coordina con neurocirugía o cirugía.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, desde la paciente cushingoide hasta el tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Hipófisis, suprarrenal o ectópico',
      head: ['Prueba', 'Enfermedad de Cushing', 'Adenoma suprarrenal', 'ACTH ectópica'],
      rows: [
        { cells: ['ACTH', 'Normal-alta o elevada', 'Suprimida (menor de 5)', 'Muy elevada (mayor de 100)'],
          say: 'Repasemos lado a lado. La ACTH: normal alta o elevada en la enfermedad de Cushing, suprimida en el adenoma suprarrenal, y muy elevada, sobre cien, en el ectópico.' },
        { cells: ['Nugent 1 mg', 'No suprime', 'No suprime', 'No suprime'],
          say: 'El Nugent no suprime en ninguno de los tres. Fíjate que por eso sirve para confirmar el hipercortisolismo, pero no para saber de dónde viene.' },
        { cells: ['Dexametasona 8 mg', 'Suprime más del 50 %', 'No suprime', 'No suprime'],
          say: 'La dexametasona en dosis alta, en cambio, solo suprime en la enfermedad de Cushing, porque la hipófisis conserva algo de retroalimentación.' },
        { cells: ['Imagen', 'RM de silla turca', 'TC suprarrenal', 'TC de tórax y abdomen'],
          say: 'La imagen va donde apunta la ACTH: resonancia de silla turca, tomografía suprarrenal, o tomografía de tórax y abdomen buscando el tumor ectópico.' },
        { cells: ['Tratamiento', 'Cirugía transesfenoidal', 'Suprarrenalectomía laparoscópica', 'Resecar el tumor primario'],
          say: 'Y el tratamiento sigue el mismo orden: cirugía transesfenoidal, suprarrenalectomía laparoscópica, o resección del tumor primario.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 41 años, sin uso de corticoides, con obesidad central, estrías violáceas de 1,5 cm y miopatía proximal. Test de Nugent: cortisol 8 h de 12 mcg/dL. Cortisol libre urinario de 24 h: 5 veces el límite superior. ACTH plasmática matinal: indetectable (menor de 2 pg/mL).',
      question: '¿Cuál es el examen más adecuado para continuar el estudio?',
      options: [
        { letter: 'A', text: 'Resonancia magnética de silla turca con gadolinio' },
        { letter: 'B', text: 'Tomografía computarizada de abdomen con protocolo suprarrenal' },
        { letter: 'C', text: 'Cateterismo de senos petrosos inferiores' },
        { letter: 'D', text: 'Test de estimulación con ACTH sintética' },
        { letter: 'E', text: 'Tomografía computarizada de tórax' },
      ],
      correct: 'B',
      explanation: 'El hipercortisolismo está confirmado con dos pruebas de primera línea alteradas. La ACTH suprimida indica un Cushing ACTH-independiente: el origen es suprarrenal, y la imagen que corresponde es la TC de abdomen con protocolo suprarrenal. La RM de silla turca y el cateterismo se reservan para el Cushing ACTH-dependiente.',
      say: {
        stem: 'Vamos a un caso. Mujer de cuarenta y un años, sin corticoides, con obesidad central, estrías violáceas de uno coma cinco centímetros y miopatía proximal. El Nugent deja un cortisol de doce, y el cortisol libre urinario sale cinco veces sobre el límite. La ACTH matinal está indetectable.',
        question: '¿Cuál es el examen más adecuado para continuar el estudio?',
        options: 'Las alternativas: resonancia de silla turca, tomografía de abdomen con protocolo suprarrenal, cateterismo de senos petrosos, test de estimulación con ACTH, o tomografía de tórax. Piénsalo.',
        answer: 'Es la B, la tomografía suprarrenal. La fase uno ya está: dos pruebas alteradas. La fase dos también: ACTH indetectable significa que la suprarrenal fabrica cortisol por su cuenta y frenó a la hipófisis. El distractor tentador es la resonancia de silla turca, porque la enfermedad de Cushing es la causa más frecuente, pero con la ACTH suprimida la hipófisis no es el problema. Y el test de estimulación con ACTH es para la insuficiencia suprarrenal, no para el Cushing.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 27',
      stem: 'Una paciente de 13 años, sin antecedentes, consulta por cefalea e hirsutismo. Al examen físico se encuentra presión arterial en percentil 99 para su edad, índice de masa corporal mayor al percentil 95 para su edad, acné inflamatorio en su rostro y estrías abdominales.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Diabetes mellitus tipo 2' },
        { letter: 'B', text: 'Síndrome de ovario poliquístico' },
        { letter: 'C', text: 'Síndrome de Cushing' },
        { letter: 'D', text: 'Hipotiroidismo' },
        { letter: 'E', text: 'Hiperprolactinemia' },
      ],
      correct: 'C',
      explanation: 'Obesidad, hipertensión marcada, estrías, hirsutismo y acné: el conjunto corresponde a un síndrome de Cushing. El ovario poliquístico explica el hirsutismo y el acné, pero no la hipertensión severa con estrías.',
      say: {
        stem: 'Ahora, preguntas reales. La primera es del EUNACOM de julio de dos mil trece. Paciente de trece años con cefalea e hirsutismo. Tiene la presión en percentil noventa y nueve para su edad, obesidad, acné inflamatorio y estrías abdominales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: diabetes tipo dos, ovario poliquístico, síndrome de Cushing, hipotiroidismo, o hiperprolactinemia. Piénsalo.',
        answer: 'Es la C, síndrome de Cushing. Suma todo: obesidad, hipertensión marcada, estrías, hirsutismo y acné. El distractor tentador es el ovario poliquístico, porque explica el hirsutismo y el acné en una adolescente, pero no te explica una presión en percentil noventa y nueve junto con estrías. El Cushing lo explica todo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 169',
      stem: 'Una mujer de 34 años, con amenorrea de 6 meses, presenta un cuadro de astenia y malestar general. Además refiere equimosis ante mínimos traumatismos. Actualmente tiene PA: 150/90 mmHg, acné facial, cuello ancho, obesidad centrípeta y estrías violáceas. Tiene prueba de embarazo negativa.',
      question: '¿Cuál es la prueba a realizar en primer lugar?',
      options: [
        { letter: 'A', text: 'Cortisol plasmático basal' },
        { letter: 'B', text: 'FSH y estradiol plasmático' },
        { letter: 'C', text: 'Cortisol libre urinario' },
        { letter: 'D', text: 'Prueba de estimulación con ACTH' },
        { letter: 'E', text: 'Resonancia magnética de silla turca' },
      ],
      correct: 'C',
      explanation: 'Equimosis fáciles, estrías violáceas, obesidad centrípeta e hipertensión: sospecha de Cushing. El estudio parte con una prueba de primera línea, como el cortisol libre urinario de 24 horas. El cortisol basal no sirve, la estimulación con ACTH es para la insuficiencia suprarrenal y la resonancia va después.',
      say: {
        stem: 'La segunda es del EUNACOM de julio de dos mil dieciséis. Mujer de treinta y cuatro años con amenorrea de seis meses, astenia, y equimosis con traumatismos mínimos. Tiene presión de ciento cincuenta con noventa, acné, cuello ancho, obesidad centrípeta y estrías violáceas. El test de embarazo es negativo.',
        question: '¿Cuál es la prueba a realizar en primer lugar?',
        options: 'Las opciones: cortisol plasmático basal, FSH y estradiol, cortisol libre urinario, prueba de estimulación con ACTH, o resonancia de silla turca. Piénsalo.',
        answer: 'Es la C, el cortisol libre urinario. Equimosis fáciles y estrías violáceas son signos específicos de Cushing, y el estudio parte por la fase uno. El distractor tentador es el cortisol plasmático basal, que suena lógico, pero suele salir normal en el Cushing. La estimulación con ACTH es para la insuficiencia suprarrenal, y la resonancia se salta la fase uno.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 159',
      stem: 'Una paciente de 29 años consulta por aumento de peso de 10 kg en un año, a pesar de seguir una dieta. Refiere también que sus reglas se han vuelto irregulares y cada vez son menos frecuentes. En su examen físico se observa obesidad y estrías en el abdomen y los muslos, de color rojizo. Sus signos vitales muestran FC: 72 lpm y PA: 150/96 mmHg.',
      question: '¿Cuál de los siguientes exámenes es más adecuado para iniciar el estudio de esta paciente?',
      options: [
        { letter: 'A', text: 'Cortisol plasmático a las 7:00 y a las 23:00 horas' },
        { letter: 'B', text: 'Cortisol plasmático post-dexametasona' },
        { letter: 'C', text: 'Niveles plasmáticos de ACTH' },
        { letter: 'D', text: 'Resonancia magnética nuclear de abdomen' },
        { letter: 'E', text: 'Resonancia magnética nuclear de hipófisis' },
      ],
      correct: 'B',
      explanation: 'El estudio del Cushing se inicia con una prueba de primera línea: cortisol libre urinario, test de supresión con 1 mg de dexametasona o cortisol salival. La ACTH y las imágenes van después de confirmar el hipercortisolismo.',
      say: {
        stem: 'La tercera es la más reciente, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veintinueve años que sube diez kilos en un año pese a la dieta, con reglas cada vez más escasas. Tiene obesidad, estrías rojizas en abdomen y muslos, y presión de ciento cincuenta con noventa y seis.',
        question: '¿Qué examen es más adecuado para iniciar el estudio?',
        options: 'Las opciones: cortisol plasmático a las siete y a las veintitrés horas, cortisol plasmático post dexametasona, ACTH plasmática, resonancia de abdomen, o resonancia de hipófisis. Piénsalo.',
        answer: 'Es la B, cortisol post dexametasona, que es el test de Nugent. Aquí no estaba el cortisol libre urinario, pero cualquiera de las tres pruebas de primera línea sirve para empezar. El distractor tentador es la ACTH, pero la ACTH es el primer paso de la fase dos, no de la fase uno. Y las resonancias se saltan todo el algoritmo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 62 años, fumador pesado de 40 paquetes/año, consulta por astenia severa, debilidad muscular profunda, edema de extremidades inferiores y pérdida de 8 kg de peso en el último mes. Destaca hiperpigmentación cutánea difusa, PA 175/105 mmHg, sin obesidad evidente. Glicemia 260 mg/dL, potasio 2,1 mEq/L y bicarbonato 36 mEq/L. Se confirma hipercortisolismo con ACTH plasmática de 280 pg/mL. El test con dexametasona 8 mg no suprime el cortisol.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Enfermedad de Cushing por adenoma hipofisario' },
        { letter: 'B', text: 'Carcinoma de la corteza suprarrenal productor de cortisol' },
        { letter: 'C', text: 'Síndrome de Cushing ectópico secundario a carcinoma pulmonar de células pequeñas (oat cell)' },
        { letter: 'D', text: 'Hiperaldosteronismo primario (Síndrome de Conn)' },
        { letter: 'E', text: 'Insuficiencia suprarrenal primaria por metástasis' },
      ],
      correct: 'C',
      explanation: 'ACTH muy elevada que no suprime con 8 mg de dexametasona, en un fumador con cuadro rápido, hipokalemia con alcalosis metabólica e hiperpigmentación: Cushing ectópico por carcinoma pulmonar de células pequeñas. La rapidez explica que no alcance el fenotipo cushingoide.',
      say: {
        stem: 'Ahora dos casos representativos del banco, sobre lo que el banco real todavía no pregunta. El primero: hombre de sesenta y dos años, fumador pesado, con astenia, debilidad profunda y ocho kilos menos en un mes. Está hiperpigmentado, hipertenso, sin obesidad. Tiene potasio de dos coma uno, bicarbonato de treinta y seis, y una ACTH de doscientos ochenta que no suprime con dexametasona en dosis alta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: enfermedad de Cushing, carcinoma suprarrenal, Cushing ectópico por cáncer pulmonar de células pequeñas, síndrome de Conn, o insuficiencia suprarrenal por metástasis. Piénsalo.',
        answer: 'Es la C, Cushing ectópico. Fumador flaco, hiperpigmentado, con hipokalemia y alcalosis, ACTH altísima que no suprime. El distractor tentador es la enfermedad de Cushing, porque la ACTH está alta, pero la hipófisis sí suprimiría con dosis alta. El carcinoma suprarrenal tendría la ACTH suprimida, y el Conn no explica la ACTH alta ni la hiperpigmentación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una paciente de 41 años con Síndrome de Cushing confirmado presenta una ACTH plasmática indetectable (< 2 pg/mL). La TC de abdomen revela un tumor suprarrenal derecho de 3.2 cm homogéneo con baja atenuación (< 10 Unidades Hounsfield) compatible con adenoma benigno; la glándula suprarrenal izquierda luce de aspecto atrófico y delgada. La paciente es sometida exitosamente a una suprarrenalectomía laparoscópica derecha.',
      question: 'En el postoperatorio inmediato, ¿cuál es la medida farmacológica mandatoria que debe iniciarse para prevenir una complicación potencialmente mortal?',
      options: [
        { letter: 'A', text: 'Iniciar ketoconazol oral para bloquear residuos tumorales' },
        { letter: 'B', text: 'Iniciar terapia de reemplazo hormonal con Hidrocortisona por riesgo inminente de crisis suprarrenal secundaria a la atrofia del eje hipotálamo-hipófisis-adrenal contralateral' },
        { letter: 'C', text: 'Indicar espironolactona a dosis altas para prevenir hiperkalemia' },
        { letter: 'D', text: 'Indicar radioyodo I-131 para destruir remanentes glandulares' },
        { letter: 'E', text: 'Mantener en observación sin medicamentos puesto que la glándula contralateral asumirá de inmediato la función fisiológica' },
      ],
      correct: 'B',
      explanation: 'El cortisol autónomo del adenoma suprimió por años la ACTH, y la suprarrenal contralateral está atrófica. Al extirpar el adenoma, la paciente cae en insuficiencia suprarrenal aguda: se inicia hidrocortisona de inmediato y se mantiene 6 a 12 meses, hasta que el eje se recupere.',
      say: {
        stem: 'El segundo: paciente de cuarenta y un años con Cushing y ACTH indetectable. La tomografía muestra un adenoma suprarrenal derecho de tres coma dos centímetros, y la suprarrenal izquierda se ve delgada y atrófica. Se le hace una suprarrenalectomía laparoscópica derecha sin problemas.',
        question: 'En el postoperatorio inmediato, ¿qué medida es obligatoria para prevenir una complicación mortal?',
        options: 'Las opciones: ketoconazol, hidrocortisona de reemplazo, espironolactona, radioyodo, u observar sin fármacos. Piénsalo.',
        answer: 'Es la B, hidrocortisona. La suprarrenal izquierda lleva años sin ACTH y está atrófica; al sacar el adenoma, la paciente queda sin cortisol y puede hacer una crisis suprarrenal. El distractor tentador es observar, pensando que la otra glándula va a responder de inmediato, pero tarda seis a doce meses en recuperarse.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Fase 1', tag: 'Confirmar', kind: 'key', items: [
          { t: 'Primero descartar corticoides', d: 'La causa más frecuente es exógena',
            say: 'Cerremos con las reglas de oro. La causa más frecuente de Cushing son los corticoides que el paciente usa: pregunta siempre.' },
          { t: '2 pruebas de primera línea', d: 'Nugent, CLU 24 h, cortisol salival',
            say: 'Para confirmar, dos pruebas de primera línea alteradas: Nugent, cortisol libre urinario o cortisol salival nocturno. Nunca el cortisol basal, y nunca ACTH ni imágenes antes.' },
        ] },
        { title: 'Fase 2', tag: 'Localizar', kind: 'criteria', items: [
          { t: 'ACTH suprimida: TC suprarrenal', d: 'ACTH alta o normal: RM de silla turca',
            say: 'Confirmado el exceso, la ACTH decide: suprimida, tomografía suprarrenal; alta o normal, resonancia de silla turca y dexametasona en dosis alta.' },
        ] },
        { title: 'Después de operar', tag: 'No olvidar', kind: 'alert', items: [
          { t: 'Hidrocortisona 6 a 12 meses', d: 'La otra suprarrenal está atrófica',
            say: 'Y tras sacar un adenoma suprarrenal, hidrocortisona de reemplazo, porque la otra glándula está atrófica. Si te llevas una sola idea de hoy: primero demuestra el exceso de cortisol, y solo después busca de dónde viene. En la próxima clase vemos el problema al revés: la insuficiencia suprarrenal. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Síndrome de Cushing: de la sospecha a la causa',
    root: N('start', 'Paciente cushingoide', 'Estrías, miopatía, equimosis',
      'Parte con un paciente cushingoide: estrías violáceas anchas, miopatía proximal, equimosis fáciles.',
      ['', N('q', '¿Usa corticoides?', 'Orales, inyectables, tópicos, inhalados',
        'Lo primero es preguntar por corticoides de cualquier tipo, porque la causa exógena es la más frecuente.',
        ['Sí', N('ok', 'Cushing exógeno', 'No suspender bruscamente',
          'Si los usa, es un Cushing exógeno, y el corticoide no se suspende bruscamente, porque el eje está atrófico.')],
        ['No', N('q', 'Dos pruebas de primera línea', 'Nugent, CLU 24 h, cortisol salival',
          'Si no, pide pruebas de primera línea y descarta un pseudo-Cushing. Hacen falta dos alteradas para confirmar.',
          ['Confirmado', N('q', 'ACTH plasmática 8 h', '¿Suprimida o alta?',
            'Con el hipercortisolismo confirmado, mide la ACTH de la mañana.',
            ['Suprimida', N('do', 'TC suprarrenal', 'Adenoma o carcinoma',
              'ACTH suprimida: tomografía suprarrenal. El adenoma va a suprarrenalectomía laparoscópica, con hidrocortisona después.')],
            ['Alta o normal', N('do', 'RM de silla + dexametasona 8 mg', 'Suprime: hipófisis',
              'ACTH alta o normal: resonancia de silla turca y dexametasona en dosis alta. Si suprime, es hipofisario, y va a cirugía transesfenoidal.',
              ['No suprime o RM dudosa', N('refer', 'Ectópico o cateterismo', 'Senos petrosos, TC de tórax',
                'Si no suprime o la resonancia no aclara, cateterismo de senos petrosos, y búsqueda del tumor ectópico en tórax y abdomen.')])])])])]),
  },
};
