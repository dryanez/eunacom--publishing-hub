// Clase 10.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-06).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Descartar la cefalea secundaria, reconocer la migraña y la tensional, tratar la crisis y saber cuándo prevenir',
      say: 'Bienvenidos. Cerramos el bloque cerebrovascular y abrimos el de cefaleas y epilepsia. Hoy vemos migraña y cefalea tensional, que juntas explican más del noventa por ciento de las consultas por dolor de cabeza en atención primaria. En el examen se juegan tres decisiones: descartar primero una cefalea secundaria que puede matar, elegir bien el tratamiento de la crisis, y saber cuándo indicar profilaxis. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'La migraña es neurovascular, no un espasmo',
      nodes: [
        { id: 'exc', col: 0, row: 1, k: 'cause', t: 'Corteza hiperexcitable', s: 'Predisposición genética' },
        { id: 'dcp', col: 1, row: 0, k: 'mech', t: 'Depresión cortical propagada', s: 'Onda de 2–6 mm/min desde occipital' },
        { id: 'aur', col: 2, row: 0, k: 'effect', t: 'Aura', s: 'Escotoma centellante, fortificación' },
        { id: 'tv', col: 1, row: 2, k: 'mech', t: 'Sistema trigéminovascular', s: 'Ganglio de Gasser libera CGRP' },
        { id: 'inf', col: 2, row: 2, k: 'effect', t: 'Vasodilatación meníngea', s: 'Inflamación neurógena estéril' },
        { id: 'sen', col: 3, row: 2, k: 'effect', t: 'Sensibilización', s: 'Dolor pulsátil · alodinia' },
        { id: 'tri', col: 3, row: 0, k: 'good', t: 'Triptanes', s: 'Agonistas 5-HT1B y 5-HT1D/1F' },
      ],
      edges: [
        { from: 'exc', to: 'dcp' }, { from: 'dcp', to: 'aur' },
        { from: 'exc', to: 'tv' }, { from: 'tv', to: 'inf' }, { from: 'inf', to: 'sen' },
        { from: 'tri', to: 'inf', label: 'bloquean' },
      ],
      steps: [
        { show: ['exc'], note: 'No es un simple trastorno vascular',
          say: 'Partamos por el mecanismo. La migraña no es un simple espasmo de los vasos. Es una disfunción neurovascular primaria: hay una predisposición genética a que la corteza y el tronco encefálico sean hiperexcitables.' },
        { show: ['dcp', 'aur'], note: 'El aura es una onda eléctrica que avanza',
          say: 'El aura se explica por la depresión cortical propagada: una onda de despolarización que avanza lento, dos a seis milímetros por minuto, típicamente desde el lóbulo occipital hacia adelante. Por eso el aura es sobre todo visual, con escotomas centellantes y el espectro de fortificación, y por eso se va extendiendo en minutos.' },
        { show: ['tv'], note: 'El dolor viene del trigémino',
          say: 'El dolor tiene otro origen: el sistema trigéminovascular. Las neuronas del ganglio de Gasser que inervan las meninges liberan neuropéptidos, y el principal es el CGRP, el péptido relacionado con el gen de la calcitonina.' },
        { show: ['inf'], note: 'CGRP: vasodilatación e inflamación',
          say: 'El CGRP dilata intensamente las arterias meníngeas y produce una inflamación neurógena estéril alrededor de los vasos.' },
        { show: ['sen'], note: 'El mecanismo explica la clínica',
          say: 'Esa señal sube por el trigémino hasta el tálamo y la corteza, y sensibiliza la vía. Primero la sensibilización periférica: el dolor es pulsátil y empeora con el esfuerzo o la tos. Luego la central: la alodinia, donde duele peinarse o usar anteojos.' },
        { show: ['tri'], note: 'Así actúan los triptanes',
          say: 'Y aquí entran los triptanes. Son agonistas de receptores de serotonina: el uno B contrae los vasos meníngeos dilatados, y el uno D y uno F bloquean la liberación de CGRP. Recuerda el efecto vasoconstrictor, porque de ahí salen sus contraindicaciones.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Criterios IHS de migraña',
      cards: [
        { title: 'Migraña sin aura', tag: 'Al menos 5 crisis', kind: 'criteria', items: [
          { t: 'Dura 4 a 72 horas', d: 'Sin tratamiento o tratada sin éxito',
            say: 'Veamos los criterios de la Sociedad Internacional de Cefaleas. La migraña sin aura necesita al menos cinco crisis, y cada una dura entre cuatro y setenta y dos horas, sin tratamiento o tratada sin éxito.' },
          { t: '2 de 4 características', d: 'Unilateral, pulsátil, moderada-severa, empeora con actividad',
            say: 'El dolor cumple al menos dos de cuatro características: unilateral, pulsátil, de intensidad moderada a severa, y que empeora con la actividad física rutinaria, como caminar o subir escaleras.' },
          { t: '1 síntoma asociado', d: 'Náuseas o vómitos · o fotofobia Y fonofobia',
            say: 'Y al menos un síntoma asociado: náuseas o vómitos, o fotofobia y fonofobia juntas. Fíjate en esa letra ye, porque es justamente lo que la separa de la tensional.' },
        ] },
        { title: 'Migraña con aura', tag: 'Al menos 2 crisis', kind: 'key', items: [
          { t: 'Síntomas focales reversibles', d: 'Visuales en más del 90 %',
            say: 'La migraña con aura necesita al menos dos crisis con síntomas neurológicos focales totalmente reversibles. Más del noventa por ciento son visuales: escotomas centellantes, líneas en zigzag o pérdida visual parcial.' },
          { t: 'También sensitivos o del lenguaje', d: 'Parestesias de marcha cheiro-oral',
            say: 'También pueden ser sensitivos, con parestesias que avanzan de la mano al brazo y a la boca, la marcha cheiro-oral, o trastornos del lenguaje.' },
          { t: 'Aura de 5 a 60 minutos', d: 'Se extiende en 5 min o más · cefalea en menos de 60 min',
            say: 'Cada síntoma se va extendiendo en cinco minutos o más, dura entre cinco y sesenta minutos, y la cefalea aparece dentro de los sesenta minutos siguientes. Un déficit que se instala de golpe, en cambio, te hace pensar en un ACV.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diferencial',
      title: 'Cefalea tensional: la más frecuente',
      cards: [
        { title: 'Cefalea tensional', tag: 'ICHD-3 2.1', kind: 'key', items: [
          { t: 'Opresiva, "como un casco"', d: 'Bilateral, holocránea u occipitofrontal',
            say: 'La cefalea tensional es la más frecuente en la población. El paciente la describe como un casco, una banda o un peso apretado sobre la cabeza. Es opresiva, no pulsátil, y bilateral, holocránea u occipitofrontal.' },
          { t: 'Leve a moderada', d: 'Permite seguir trabajando · 30 min a 7 días',
            say: 'Es de intensidad leve a moderada: molesta, pero deja seguir trabajando. Y dura de treinta minutos a siete días.' },
        ] },
        { title: 'La diferencia que se pregunta', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'No empeora con la actividad', d: 'La migraña obliga a acostarse a oscuras',
            say: 'Ahora, lo que la separa de la migraña. La tensional no empeora con la actividad física rutinaria. La migrañosa, en cambio, busca el reposo a oscuras.' },
          { t: 'Nunca náuseas ni vómitos', d: 'Fotofobia O fonofobia, jamás ambas',
            say: 'Y el diferenciador crítico: la tensional no tiene náuseas ni vómitos. Puede tener fotofobia o fonofobia aisladas, pero nunca las dos juntas. Si ves náuseas, o luz y ruido a la vez, piensa en migraña.' },
        ] },
        { title: 'Diagnóstico clínico', tag: 'Sin imagen de rutina', kind: 'normal', items: [
          { t: 'Sin banderas rojas: no hay TAC', d: 'Examen neurológico normal basta',
            say: 'Y en las dos, el diagnóstico es clínico. Si el examen neurológico es normal y no hay banderas rojas, la neuroimagen de rutina no está indicada. Justamente, esas banderas rojas son lo que vemos ahora.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencias',
      title: 'Banderas rojas: la regla SNOOP10',
      nodes: [
        { id: 's', col: 0, row: 0, k: 'risk', t: 'S · Sistémico', s: 'Fiebre, baja de peso, cáncer, VIH' },
        { id: 'n', col: 0, row: 1, k: 'risk', t: 'N · Neurológico', s: 'Déficit focal, conciencia, crisis' },
        { id: 'o1', col: 0, row: 2, k: 'alert', t: 'O · Onset: en trueno', s: 'Máximo en menos de 1 minuto' },
        { id: 'o2', col: 0, row: 3, k: 'risk', t: 'O · Older: mayor de 50', s: 'Cefalea nueva' },
        { id: 'p', col: 0, row: 4, k: 'risk', t: 'P · Patrón, posición, papiledema', s: 'Progresiva, Valsalva, ortostática' },
        { id: 'tacc', col: 2, row: 0, k: 'refer', t: 'Imagen con contraste + PL', s: 'Meningitis, absceso, metástasis' },
        { id: 'tac', col: 2, row: 1, k: 'refer', t: 'TAC sin contraste urgente', s: 'ACV, hematoma, masa' },
        { id: 'pl', col: 2, row: 2, k: 'alert', t: 'TAC; si es normal, PL', s: 'Hemorragia subaracnoidea' },
        { id: 'vhs', col: 2, row: 3, k: 'refer', t: 'VHS y PCR', s: 'Arteritis de la temporal' },
        { id: 'fo', col: 2, row: 4, k: 'refer', t: 'Fondo de ojo y RM', s: 'HTEC, fístula de LCR, TVC' },
      ],
      edges: [
        { from: 's', to: 'tacc' }, { from: 'n', to: 'tac' }, { from: 'o1', to: 'pl' },
        { from: 'o2', to: 'vhs' }, { from: 'p', to: 'fo' },
      ],
      steps: [
        { show: [], note: 'El peor error: asumir que es primaria',
          say: 'El error más grave en urgencia es asumir que una cefalea intensa es primaria sin antes buscar una causa secundaria. Para eso existe la regla SNOOP diez. Vamos letra por letra, y a cada letra le asociamos su conducta.' },
        { show: ['s', 'tacc'], note: 'S: el paciente sistémico o inmunosuprimido',
          say: 'La S es de síntomas sistémicos: fiebre, baja de peso, sudoración nocturna, o un paciente con cáncer o inmunosuprimido, por ejemplo con VIH. Pensamos en meningitis, encefalitis, absceso, metástasis o toxoplasmosis, y pedimos neuroimagen con contraste seguida de punción lumbar.' },
        { show: ['n', 'tac'], note: 'N: cualquier signo focal',
          say: 'La N es de signos neurológicos: una paresia, una afasia, diplopía, papiledema, un Babinski, compromiso de conciencia o una convulsión. Aquí va un TAC de encéfalo sin contraste, de inmediato.' },
        { show: ['o1', 'pl'], note: 'La bandera más preguntada',
          say: 'La primera O es de onset, el inicio: la cefalea en trueno, que llega a su máximo en menos de un minuto. Es la hemorragia subaracnoidea hasta demostrar lo contrario, como vimos en la clase de hemorragia subaracnoidea. TAC sin contraste, y si es normal y se tomó en las primeras horas, la punción lumbar es obligatoria, buscando xantocromía.' },
        { show: ['o2', 'vhs'], note: 'Mayor de 50 sin historia de migraña',
          say: 'La segunda O es de older, mayor: una cefalea nueva después de los cincuenta años, sin historia previa de migraña. Lo primero que descartas es la arteritis de células gigantes, pidiendo de inmediato velocidad de sedimentación y proteína C reactiva. También se buscan tumores y el hematoma subdural crónico.' },
        { show: ['p', 'fo'], note: 'P: cambia, progresa, depende de la posición',
          say: 'Y la P agrupa varias cosas: el cambio de patrón, la cefalea progresiva que despierta de noche, la que empeora al acostarse o al toser, que sugiere hipertensión endocraneana, la que empeora de pie y alivia acostado, que es la hipotensión de líquido cefalorraquídeo, y el papiledema. Aquí el fondo de ojo es obligado y se pide resonancia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento agudo',
      title: 'La crisis: tratar temprano y escalonado',
      cards: [
        { title: 'Cuándo', tag: 'Precoz', kind: 'key', items: [
          { t: 'En la primera hora de dolor', d: 'No durante el aura',
            say: 'Pasemos al tratamiento de la crisis. Tiene que ser precoz, idealmente en la primera hora de dolor. Y no durante el aura, porque ahí los vasoconstrictores no sirven y podrían agravar la isquemia focal.' },
        ] },
        { title: 'Crisis leve a moderada', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'AINE en dosis plena', d: 'Ibuprofeno 400–800 mg · naproxeno 500–550 mg',
            say: 'En la crisis leve a moderada, la primera línea son los antiinflamatorios no esteroidales: ibuprofeno cuatrocientos a ochocientos miligramos, naproxeno quinientos a quinientos cincuenta, o aspirina mil miligramos.' },
          { t: '+ Metoclopramida 10 mg', d: 'O domperidona: por la gastroparesia',
            say: 'Y se asocia un procinético, metoclopramida o domperidona, diez miligramos. ¿Por qué? Porque en la crisis hay gastroparesia: el estómago se vacía lento y el analgésico no se absorbe. El procinético acelera la absorción y además quita las náuseas.' },
        ] },
        { title: 'Crisis moderada a severa', tag: 'O falla del AINE', kind: 'pharma', items: [
          { t: 'Sumatriptán 50–100 mg VO', d: 'O 6 mg SC, actúa en 10–15 min',
            say: 'Si la crisis es moderada a severa, o el AINE falló, el tratamiento de elección son los triptanes. El de referencia es el sumatriptán oral, cincuenta a cien miligramos, o subcutáneo, seis miligramos, que actúa en diez a quince minutos.' },
          { t: 'Repetir a las 2 h si recurre', d: 'Máx. 200 mg/día VO o 12 mg/día SC',
            say: 'Si el dolor vuelve después de mejorar, se puede repetir una segunda dosis, separada al menos por dos horas, sin pasar de doscientos miligramos al día por boca o doce subcutáneos. Otras opciones son el zolmitriptán y el eletriptán.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad',
      title: 'Cuándo no dar triptanes y cómo evitar el rebote',
      cards: [
        { title: 'Contraindicaciones del triptán', tag: 'Vasoconstrictor', kind: 'alert', items: [
          { t: 'Coronario o cerebrovascular', d: 'IAM, angina, Prinzmetal, ACV o AIT previo',
            say: 'Volvamos al mecanismo: el triptán contrae los vasos a través del receptor uno B, y no solo los meníngeos, también los coronarios y los cerebrales. Por eso está contraindicado en el infarto previo, la cardiopatía coronaria, la angina de Prinzmetal, y el ACV o la isquemia transitoria previa.' },
          { t: 'HTA severa, arteriopatía periférica', d: 'Migraña hemipléjica o basilar',
            say: 'También en la hipertensión severa o no controlada, la enfermedad arterial periférica, y en subtipos raros como la migraña hemipléjica y la basilar.' },
        ] },
        { title: 'Cefalea por abuso de medicación', tag: 'Rebote', kind: 'criteria', items: [
          { t: 'Analgésicos más de 10–15 días al mes', d: 'Por más de 3 meses',
            say: 'El otro riesgo es la cefalea por abuso de medicación. Aparece cuando el paciente usa analgésicos más de diez a quince días al mes por más de tres meses, y entra en un círculo de cefalea diaria de rebote.' },
          { t: 'AINE menos de 15 días al mes', d: 'Triptán, ergotamina o cafeína: menos de 10',
            say: 'Para prevenirla, instruye al paciente: los AINE menos de quince días al mes, y los triptanes o los combinados con ergotamina o cafeína, menos de diez días al mes. Y si el paciente se está pasando de ese límite, es una razón para empezar profilaxis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Profilaxis',
      title: '¿Cuándo prevenir las crisis?',
      cards: [
        { title: 'Objetivo', tag: 'Realista', kind: 'normal', items: [
          { t: 'Reducir crisis en al menos 50 %', d: 'No eliminarlas por completo',
            say: 'La profilaxis no busca eliminar todas las crisis. Busca bajar su frecuencia, intensidad y duración al menos a la mitad, mejorar la respuesta al tratamiento agudo, y evitar que la migraña se haga crónica o que aparezca el abuso de analgésicos.' },
        ] },
        { title: 'Indicaciones', tag: 'Basta una', kind: 'criteria', items: [
          { t: '3 o más crisis al mes', d: 'O más de 6 a 8 días de cefalea al mes',
            say: 'Se indica si hay tres o más crisis al mes, o más de seis a ocho días de cefalea al mes. Este es el criterio que más se pregunta.' },
          { t: 'Discapacidad pese al tratamiento agudo', d: 'Afecta trabajo o estudios',
            say: 'También si las crisis afectan mucho el trabajo o los estudios, a pesar de un tratamiento agudo bien hecho.' },
          { t: 'Falla o contraindicación del rescate', d: 'O riesgo de abuso de analgésicos',
            say: 'Si el tratamiento de rescate falla o está contraindicado, si hay riesgo de abuso de analgésicos, y en subtipos con riesgo neurológico, como la migraña hemipléjica o con aura de tronco.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Profilaxis',
      title: 'El fármaco se elige según el paciente',
      cards: [
        { title: 'Propranolol 40–160 mg/día', tag: 'Primera línea general', kind: 'pharma', items: [
          { t: 'Joven, ansioso, HTA o temblor', d: 'No en asma, EPOC, bradicardia ni bloqueo AV',
            say: 'La profilaxis se elige mirando al paciente. El propranolol, cuarenta a ciento sesenta miligramos al día, es la primera línea general, ideal en el joven ansioso, con temblor esencial o hipertenso. Pero está contraindicado en el asma, la EPOC severa, la bradicardia y los bloqueos auriculoventriculares.' },
          { t: 'Amitriptilina 10–50 mg/noche', d: 'Insomnio, depresión, componente tensional',
            say: 'La amitriptilina, diez a cincuenta miligramos en la noche, es la elección si hay insomnio, depresión, ansiedad, fibromialgia o una cefalea mixta con componente tensional. Ojo con sus efectos anticolinérgicos: boca seca, constipación, retención urinaria y QT largo.' },
        ] },
        { title: 'Flunarizina 5–10 mg/noche', tag: 'Si hay vértigo', kind: 'pharma', items: [
          { t: 'Vértigo migrañoso', d: 'Sube de peso, somnolencia, parkinsonismo',
            say: 'La flunarizina, cinco a diez miligramos en la noche, es muy útil si hay vértigo migrañoso. Pero da somnolencia, aumento de peso, y en el adulto mayor puede dar parkinsonismo y depresión.' },
        ] },
        { title: 'Anticonvulsivantes', tag: 'Ojo con la mujer fértil', kind: 'alert', items: [
          { t: 'Topiramato 25–100 mg/día', d: 'Obesidad · glaucoma agudo, litiasis, teratógeno',
            say: 'El topiramato, veinticinco a cien miligramos, es de elección en el paciente con obesidad, porque baja de peso. Sus efectos adversos: parestesias, lentitud cognitiva, litiasis renal, glaucoma de ángulo cerrado, y es teratogénico. Guarda el glaucoma para una de las preguntas reales.' },
          { t: 'Ácido valproico 500–1.000 mg/día', d: 'Proscrito en mujer en edad fértil',
            say: 'Y el ácido valproico es muy eficaz, pero está proscrito en la mujer en edad fértil, por los defectos del tubo neural y el ovario poliquístico.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: primero las banderas rojas, después el tipo de cefalea, la crisis y la profilaxis.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Cefalea típica, examen normal, sin banderas rojas', 'Diagnóstico clínico', 'Pedir TAC de rutina'],
          say: 'Repasemos las trampas. Cefalea típica, examen normal y sin banderas rojas: el diagnóstico es clínico. Pedir un TAC de rutina es el error.' },
        { cells: ['Bilateral opresiva, sin náuseas, no empeora al caminar', 'Cefalea tensional', 'Llamarla migraña'],
          say: 'Bilateral, opresiva, sin náuseas y que no empeora al caminar: cefalea tensional. Si tiene fotofobia y fonofobia juntas, o náuseas, ya no es tensional.' },
        { cells: ['Cefalea en trueno con TAC normal', 'Punción lumbar', 'Dar de alta con analgesia'],
          say: 'Cefalea en trueno con TAC normal en las primeras horas: punción lumbar. Dar de alta por un TAC normal es la trampa clásica.' },
        { cells: ['Cefalea nueva en mayor de 50', 'VHS y PCR', 'Tratarla como migraña'],
          say: 'Cefalea nueva después de los cincuenta: velocidad de sedimentación y proteína C reactiva, pensando en la arteritis de la temporal.' },
        { cells: ['Migraña con antecedente coronario o ACV', 'AINE + metoclopramida', 'Indicar un triptán'],
          say: 'Migrañoso con cardiopatía coronaria o ACV previo: no se usa triptán, por su efecto vasoconstrictor.' },
        { cells: ['3 o más crisis al mes', 'Agregar profilaxis', 'Solo aumentar los analgésicos'],
          say: 'Tres o más crisis al mes: se agrega profilaxis. Aumentar los analgésicos solo lleva al rebote.' },
        { cells: ['Profilaxis en mujer en edad fértil', 'Propranolol, amitriptilina, flunarizina', 'Ácido valproico'],
          say: 'Y profilaxis en la mujer en edad fértil: nunca ácido valproico. Y recuerda que el sumatriptán trata la crisis, no la previene.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 28 años, abogada, sin antecedentes mórbidos. Hace 3 años presenta 4 a 5 crisis al mes de cefalea hemicránea derecha pulsátil, que empeora al caminar, con fotofobia, fonofobia y náuseas, de 24 a 36 horas de duración. Paracetamol y ketorolaco le dan alivio parcial y ha faltado varias veces al trabajo. Examen neurológico y fondo de ojo normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar TAC de encéfalo con contraste' },
        { letter: 'B', text: 'Sumatriptán diario como tratamiento preventivo' },
        { letter: 'C', text: 'Sumatriptán más antiemético en las crisis y propranolol como profilaxis' },
        { letter: 'D', text: 'Ketorolaco diario hasta completar 3 meses sin crisis' },
        { letter: 'E', text: 'Ácido valproico como profilaxis y paracetamol en las crisis' },
      ],
      correct: 'C',
      explanation: 'Migraña sin aura (unilateral, pulsátil, empeora con la actividad, fotofobia + fonofobia + náuseas, 24–36 h) sin banderas rojas: no requiere imagen. Tiene 4–5 crisis al mes con falla de analgésicos: triptán más antiemético en la crisis y profilaxis de primera línea (propranolol si no tiene asma). El sumatriptán no es preventivo, el AINE diario causa cefalea por abuso de medicación y el valproato está proscrito en mujer en edad fértil.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintiocho años, abogada, sana. Hace tres años tiene cuatro a cinco crisis al mes de cefalea derecha, pulsátil, que empeora al caminar, con fotofobia, fonofobia y náuseas, y que dura un día o más. El paracetamol y el ketorolaco la alivian a medias, y ha faltado al trabajo. El examen neurológico y el fondo de ojo son normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: pedir un TAC con contraste; sumatriptán diario como preventivo; sumatriptán con antiemético en las crisis y propranolol como profilaxis; ketorolaco diario por tres meses; o ácido valproico como profilaxis con paracetamol en las crisis. Piénsalo.',
        answer: 'Es la C. Primero, cumple los criterios de migraña sin aura y no tiene banderas rojas, así que no hay que pedir imagen. Segundo, el analgésico común falló: pasamos al triptán con antiemético. Y tercero, con cuatro a cinco crisis al mes, tiene indicación de profilaxis, y el propranolol es la primera línea si no tiene asma. La E es la trampa: el valproato previene, pero está proscrito en una mujer en edad fértil.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 59',
      stem: 'Un paciente de 40 años consulta por cefalea holocránea, mayor en la zona occipital, que se irradia al cuello. Suele iniciarse a medio día y alcanza su máxima intensidad al llegar a su casa, después del trabajo. Su examen neurológico no tiene signos focales ni meníngeos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cefalea tensional' },
        { letter: 'B', text: 'Migraña' },
        { letter: 'C', text: 'Cefalea en racimo o cluster' },
        { letter: 'D', text: 'Cefalea por hipertensión endocraneana' },
        { letter: 'E', text: 'Neuralgia de Arnold' },
      ],
      correct: 'A',
      explanation: 'Cefalea holocránea, occipital, que se irradia al cuello y aumenta a lo largo de la jornada, sin náuseas ni signos focales: cefalea tensional clásica. La migraña es unilateral y pulsátil con náuseas o foto y fonofobia; la hipertensión endocraneana predomina en la mañana.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de diciembre de dos mil diecisiete. Hombre de cuarenta años con cefalea holocránea, mayor en la zona occipital, que se irradia al cuello. Empieza a mediodía y llega a su máximo cuando vuelve del trabajo. El examen neurológico no tiene signos focales ni meníngeos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cefalea tensional, migraña, cefalea en racimos, cefalea por hipertensión endocraneana, o neuralgia de Arnold. Piénsalo.',
        answer: 'Es la A, cefalea tensional. Holocránea, occipital, hacia el cuello, que crece durante la jornada, y sin náuseas ni signos focales. La migraña no calza: sería unilateral, pulsátil y con náuseas o luz y ruido molestos. Y la hipertensión endocraneana es al revés: predomina en la mañana.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 180',
      stem: 'Un paciente de 12 años, consulta por cuadro caracterizado por de visión de destellos hace una hora, tras lo cual evolucionó con cefalea frontotemporal intensa, de tipo pulsátil, asociado a fotofobia y fonofobia. Refiere que desde los cinco años ha presentado cuadros similares, y que durante el último año ha presentado cinco episodios.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Migraña clásica' },
        { letter: 'B', text: 'Cefalea en racimos' },
        { letter: 'C', text: 'Cefalea tensional' },
        { letter: 'D', text: 'Migraña complicada' },
        { letter: 'E', text: 'Tumor cerebral' },
      ],
      correct: 'A',
      explanation: 'Destellos visuales seguidos de cefalea pulsátil con fotofobia y fonofobia, con episodios similares por años: migraña con aura, llamada clásica. No es tensional (pulsátil, con foto y fonofobia) ni tumor (es recurrente desde hace años, sin progresión ni déficit).',
      say: {
        stem: 'La segunda, del EUNACOM de julio de dos mil trece. Un niño de doce años ve destellos, y una hora después aparece una cefalea frontotemporal intensa y pulsátil, con fotofobia y fonofobia. Tiene cuadros parecidos desde los cinco años, cinco en el último año.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: migraña clásica, cefalea en racimos, cefalea tensional, migraña complicada, o tumor cerebral. Piénsalo.',
        answer: 'Es la A. Migraña clásica es el nombre antiguo de la migraña con aura: destellos visuales, y después una cefalea pulsátil con fotofobia y fonofobia juntas. El tumor asusta, pero son crisis repetidas por años, sin progresión ni déficit. Y la migraña complicada implica un déficit que no revierte, que aquí no hay.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 169',
      stem: 'Una paciente de 45 años, con antecedente de hipertensión arterial y migraña tratada con antiinflamatorios y ergotamínicos, consulta por cefalea más intensa de lo habitual, desde hace dos meses, que inicialmente era mayor durante la mañana, pero que ha aumentado en intensidad durante todo el día y se ha asociado a náuseas y vómitos explosivos. Refiere no haber tenido respuesta a pesar del uso frecuente de analgésicos y ergotamínicos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de hipertensión endocraneana' },
        { letter: 'B', text: 'Hemorragia subaracnoidea' },
        { letter: 'C', text: 'Encefalopatía hipertensiva' },
        { letter: 'D', text: 'Tumor cerebral' },
        { letter: 'E', text: 'Cefalea por ergotamínicos' },
      ],
      correct: 'A',
      explanation: 'Una migrañosa con cambio de patrón: cefalea progresiva, de predominio matinal, con vómitos explosivos y sin respuesta al tratamiento habitual. Son banderas rojas (letra P de SNOOP10) de hipertensión endocraneana: fondo de ojo y neuroimagen. La cefalea por abuso de medicación no explica los vómitos explosivos ni el predominio matinal.',
      say: {
        stem: 'La tercera, del EUNACOM de diciembre de dos mil veinticinco. Mujer de cuarenta y cinco años, hipertensa, migrañosa, tratada con antiinflamatorios y ergotamínicos. Hace dos meses tiene una cefalea más intensa de lo habitual, al principio mayor en la mañana, que ha ido aumentando, con náuseas y vómitos explosivos. Y no responde a pesar del uso frecuente de analgésicos y ergotamínicos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome de hipertensión endocraneana, hemorragia subaracnoidea, encefalopatía hipertensiva, tumor cerebral, o cefalea por ergotamínicos. Piénsalo.',
        answer: 'Es la A, síndrome de hipertensión endocraneana. Es una migrañosa que cambió de patrón: cefalea progresiva, de predominio matinal, con vómitos explosivos. Esa es la letra P de SNOOP diez, y obliga a fondo de ojo y neuroimagen. La E tienta porque usa ergotamínicos seguido, pero el abuso de medicación no da vómitos explosivos. Y el tumor puede ser la causa, pero lo que describe el cuadro es el síndrome.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 43',
      stem: 'Un paciente de 75 años consulta por cefalea de 2 semanas de evolución, holocránea, intensa, que ha ido en aumento. En el último tiempo refiere además dolor al tocarse el cuero cabelludo y dolor en la rodilla derecha. Al examen físico se constatan signos de derrame articular de la rodilla derecha. Se realiza exámenes, entre los que figura un hemograma, con hemoglobina: 12,0 g/dl, blancos: 9.600 por mm3 y VHS: 76 mm/h.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Artritis seronegativa' },
        { letter: 'B', text: 'Arteritis de células gigantes' },
        { letter: 'C', text: 'Artritis reactiva' },
        { letter: 'D', text: 'Lupus' },
        { letter: 'E', text: 'Endocarditis aguda' },
      ],
      correct: 'B',
      explanation: 'Cefalea nueva y progresiva en un mayor de 50 años (letra O de SNOOP10), con dolor al tocarse el cuero cabelludo y VHS muy elevada: arteritis de células gigantes. Por eso, ante toda cefalea nueva después de los 50 se piden VHS y PCR.',
      say: {
        stem: 'La cuarta, también del EUNACOM de diciembre de dos mil diecisiete. Paciente de setenta y cinco años con dos semanas de cefalea holocránea, intensa y en aumento. Le duele el cuero cabelludo al tocarlo y tiene un derrame en la rodilla derecha. La velocidad de sedimentación es de setenta y seis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: artritis seronegativa, arteritis de células gigantes, artritis reactiva, lupus, o endocarditis aguda. Piénsalo.',
        answer: 'Es la B, arteritis de células gigantes. Es la segunda O de SNOOP diez: una cefalea nueva después de los cincuenta años. Súmale el dolor al tocar el cuero cabelludo y una sedimentación muy alta, y tienes la arteritis de la temporal. La rodilla distrae hacia las artritis, pero lo que manda es la cefalea nueva del adulto mayor.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 80',
      stem: 'Una paciente de 54 años, con antecedente de jaqueca, que trata profilácticamente con topiramato. Refiere estar con más estrés del habitual. Hace dos horas comienza con cefalea intensa, de localización periocular derecha, asociada a náuseas y vómitos. Al examen físico se aprecia el ojo izquierdo enrojecido, con la pupila fija, en semimidriasis.',
      question: 'La conducta inicial más adecuada es:',
      options: [
        { letter: 'A', text: 'Manitol endovenoso' },
        { letter: 'B', text: 'Clorpromazina endovenosa' },
        { letter: 'C', text: 'Ketorolaco endovenoso' },
        { letter: 'D', text: 'Oxígeno al 100% más eletriptán subcutáneo' },
        { letter: 'E', text: 'Carbamazepina oral' },
      ],
      correct: 'A',
      explanation: 'Una migrañosa en profilaxis con topiramato, con dolor periocular, náuseas, ojo rojo y pupila fija en semimidriasis: glaucoma agudo de ángulo cerrado, un efecto adverso conocido del topiramato. Se trata con manitol endovenoso, mióticos e iridotomía. Tratarla como crisis de migraña es la trampa.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil diecinueve. Mujer de cincuenta y cuatro años, migrañosa, en profilaxis con topiramato. Hace dos horas tiene una cefalea intensa alrededor del ojo, con náuseas y vómitos. Al examen, el ojo está rojo y la pupila fija, en semimidriasis.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: manitol endovenoso, clorpromazina endovenosa, ketorolaco endovenoso, oxígeno con eletriptán, o carbamazepina oral. Piénsalo.',
        answer: 'Es la A, manitol. Esto no es una crisis de migraña: ojo rojo con pupila fija en semimidriasis es un glaucoma agudo de ángulo cerrado. Y el dato que lo conecta con la clase es el topiramato, que puede producirlo. El ketorolaco y el oxígeno con triptán son la trampa: tratan una cefalea primaria, y esta paciente tiene una causa secundaria que amenaza el ojo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Primero SNOOP10', kind: 'key', items: [
          { t: 'Banderas rojas antes que todo', d: 'Trueno, focalidad, mayor de 50, cambio de patrón',
            say: 'Cerremos con las reglas de oro. Antes de llamar primaria a una cefalea, recorre SNOOP diez: trueno, signos focales, fiebre o inmunosupresión, cefalea nueva después de los cincuenta y cambio de patrón.' },
          { t: 'Náuseas o foto + fonofobia: migraña', d: 'Opresiva bilateral sin náuseas: tensional',
            say: 'Sin banderas rojas, el diagnóstico es clínico. Náuseas, o luz y ruido a la vez, y dolor que empeora al caminar: migraña. Opresiva, bilateral, sin náuseas: tensional.' },
        ] },
        { title: 'Crisis', tag: 'Escalonado', kind: 'pharma', items: [
          { t: 'AINE + metoclopramida → triptán', d: 'Triptán nunca en coronarios ni ACV',
            say: 'En la crisis, AINE con metoclopramida, y si es severa o falla, triptán, nunca en un paciente coronario o con ACV previo.' },
          { t: 'AINE menos de 15 días/mes', d: 'Triptán menos de 10 días/mes',
            say: 'Y limita los días de analgésicos para evitar el rebote.' },
        ] },
        { title: 'Profilaxis', tag: '3 o más crisis al mes', kind: 'alert', items: [
          { t: 'Propranolol, amitriptilina, flunarizina, topiramato', d: 'Valproato no en mujer fértil',
            say: 'Con tres o más crisis al mes, profilaxis elegida según el paciente, y nunca valproato en la mujer en edad fértil. Si te llevas una sola idea de hoy: la cefalea primaria es un diagnóstico que se gana descartando las banderas rojas. Lo que sigue son la cefalea en racimos y la neuralgia del trigémino. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Migraña y cefalea tensional',
    root: N('start', 'Cefalea que consulta', 'Buscar banderas rojas primero',
      'Frente a cualquier cefalea, lo primero no es el analgésico: es buscar banderas rojas.',
      ['', N('q', '¿Alguna bandera roja SNOOP10?', 'Trueno, focalidad, fiebre, mayor de 50, cambio de patrón',
        'Recorre la regla SNOOP diez: síntomas sistémicos, signos neurológicos, inicio en trueno, cefalea nueva después de los cincuenta, y cambio de patrón o relación con la posición.',
        ['SÍ', N('alert', 'Estudiar causa secundaria', 'TAC, PL, VHS o fondo de ojo según la letra',
          'Si hay una, estudias la causa secundaria según la letra: TAC y punción lumbar en el trueno, velocidad de sedimentación en el mayor de cincuenta, fondo de ojo y resonancia si hay hipertensión endocraneana.')],
        ['NO', N('q', '¿Qué tipo de cefalea?', 'Diagnóstico clínico, sin imagen',
          'Si no hay banderas rojas, el diagnóstico es clínico y no se pide imagen. ¿Migraña o tensional?',
          ['Opresiva bilateral', N('ok', 'Cefalea tensional', 'Sin náuseas, no empeora con actividad',
            'Opresiva, bilateral, leve a moderada, sin náuseas y sin empeorar con la actividad: cefalea tensional.')],
          ['Pulsátil con náuseas', N('q', 'Migraña: ¿intensidad de la crisis?', 'Tratar en la primera hora',
            'Pulsátil, unilateral, con náuseas o fotofobia y fonofobia: migraña. La crisis se trata en la primera hora, según su intensidad.',
            ['Leve-moderada', N('do', 'AINE + metoclopramida', 'Ibuprofeno o naproxeno',
              'Leve a moderada: AINE en dosis plena con metoclopramida.')],
            ['Severa o falla AINE', N('do', 'Triptán', 'Si no hay enfermedad coronaria ni ACV',
              'Severa o con falla del AINE: triptán, siempre que no haya enfermedad coronaria, ACV previo ni hipertensión no controlada.',
              ['', N('q', '¿3 o más crisis al mes o discapacidad?', 'O riesgo de abuso de analgésicos',
                '¿Tiene tres o más crisis al mes, discapacidad, o riesgo de abuso de analgésicos?',
                ['SÍ', N('refer', 'Profilaxis según comorbilidad', 'Propranolol, amitriptilina, flunarizina, topiramato',
                  'Entonces agregas profilaxis según el paciente: propranolol, amitriptilina, flunarizina o topiramato, y nunca valproato en la mujer en edad fértil.')])])])])])]),
  },
};
