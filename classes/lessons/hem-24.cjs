// Clase 8.24 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-24).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-24',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Umbrales restrictivos, el componente correcto y qué hacer cuando la transfusión sale mal',
      say: 'Bienvenidos. Cerramos el libro de hematología con medicina transfusional, un tema que usarás en cualquier servicio. Casi todas las clases anteriores terminaban en la misma pregunta: ¿transfundo o no? Hoy la respondemos con números. Vamos a ver los umbrales para glóbulos rojos y plaquetas, cuándo sirve el plasma y el crioprecipitado, y qué hacer ante una reacción transfusional, incluida la diferencia entre TRALI y TACO, que se pregunta mucho.',
    },

    {
      type: 'flow',
      kicker: 'El principio',
      title: 'Por qué transfundir menos es mejor',
      nodes: [
        { id: 'lib', col: 0, row: 0, k: 'cause', t: 'Estrategia liberal', s: 'Transfundir con Hb < 9–10' },
        { id: 'res', col: 0, row: 2, k: 'good', t: 'Estrategia restrictiva', s: 'Transfundir con Hb < 7' },
        { id: 'ens', col: 1, row: 1, k: 'mech', t: 'Ensayos TRICC, FOCUS, TRISS', s: 'Comparan ambas' },
        { id: 'sob', col: 2, row: 1, k: 'good', t: 'Sobrevida igual o mejor', s: 'Con la restrictiva' },
        { id: 'men', col: 3, row: 1, k: 'good', t: 'Menos complicaciones', s: 'Infecciones, sobrecarga, aloinmunización' },
      ],
      edges: [
        { from: 'lib', to: 'ens' }, { from: 'res', to: 'ens' }, { from: 'ens', to: 'sob' }, { from: 'sob', to: 'men' },
      ],
      steps: [
        { show: ['lib'], note: 'Lo que se hacía antes',
          say: 'Partamos por el principio que ordena toda la clase. Antes se transfundía con una hemoglobina bajo nueve o diez. Era la estrategia liberal, y parecía lo prudente.' },
        { show: ['res', 'ens'], note: 'Se compararon en ensayos grandes',
          say: 'La alternativa es la estrategia restrictiva: transfundir solo cuando la hemoglobina baja de siete. Los grandes ensayos, como TRICC, FOCUS y TRISS, compararon las dos.' },
        { show: ['sob'], note: 'Transfundir menos no empeora',
          say: 'Y el resultado fue concluyente: la estrategia restrictiva tiene una sobrevida igual o mejor que la liberal.' },
        { show: ['men'], note: 'Cada unidad tiene riesgos',
          say: '¿Por qué mejor? Porque cada unidad trae riesgos: más infecciones intrahospitalarias, sobrecarga de volumen y aloinmunización. La sangre es un tratamiento, no un suplemento. Guarda esta idea, porque la sobrecarga de volumen vuelve al final de la clase.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Glóbulos rojos',
      title: 'Umbrales de transfusión',
      cards: [
        { title: 'Umbrales', tag: 'Según el paciente', kind: 'criteria', items: [
          { t: 'Estable: Hb < 7 g/dL', d: 'En sala o UCI · meta 7 a 8',
            say: 'Veamos los números. El paciente hospitalizado y estable, en sala o en la unidad de cuidados intensivos, se transfunde con hemoglobina menor de siete, y la meta es mantenerla entre siete y ocho.' },
          { t: 'Coronario activo: Hb < 8–9', d: 'Síndrome coronario agudo · meta 9 a 10',
            say: 'La excepción importante es el corazón isquémico. En el síndrome coronario agudo, el umbral sube a ocho o nueve, porque un miocardio que sufre necesita más oxígeno. Esa diferencia se pregunta.' },
          { t: 'Cirugía ortopédica + vascular: < 8', d: 'Con antecedentes vasculares',
            say: 'Y en la cirugía ortopédica mayor, en un paciente con antecedentes vasculares, el umbral es ocho.' },
        ] },
        { title: 'Hemorragia masiva', tag: 'No espera el laboratorio', kind: 'alert', items: [
          { t: 'Protocolo de hemorragia masiva', d: '1 GR : 1 plasma : 1 pool de plaquetas',
            say: 'En el shock hemorrágico activo todo esto cambia: no se espera la hemoglobina. Se activa el protocolo de hemorragia masiva, que transfunde en proporción balanceada: una unidad de glóbulos rojos, una de plasma y un pool de plaquetas.' },
        ] },
        { title: 'Rendimiento', tag: 'Para calcular', kind: 'key', items: [
          { t: '1 unidad: +1 g/dL de Hb', d: 'Y +3% de hematocrito',
            say: 'Y un cálculo útil: en un adulto que no sangra, una unidad de glóbulos rojos, de unos doscientos cincuenta a trescientos mililitros, sube la hemoglobina en un gramo y el hematocrito en tres puntos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Plaquetas',
      title: 'El umbral depende de lo que vas a hacer',
      cards: [
        { title: 'Umbrales', tag: 'De menor a mayor', kind: 'criteria', items: [
          { t: '< 10.000: falla medular estable', d: 'Profilaxis',
            say: 'Con las plaquetas, el umbral sube según el riesgo. En la falla medular estable, como la aplasia o la leucemia en quimioterapia, se transfunde en forma profiláctica bajo diez mil.' },
          { t: '< 20.000: fiebre o infección grave', d: 'O factores de riesgo hemorrágico',
            say: 'Si además hay fiebre, infección grave u otro factor de riesgo de sangrado, el umbral sube a veinte mil.' },
          { t: '< 50.000: sangrado o procedimiento', d: 'Punción lumbar, paracentesis, biopsia hepática',
            say: 'Con sangrado mucoso activo, o antes de un procedimiento invasivo como una paracentesis, una toracocentesis, una punción lumbar o una biopsia hepática, se transfunde bajo cincuenta mil. Lo mismo para una cirugía mayor.' },
          { t: '< 100.000: SNC u ojo', d: 'Neurocirugía o polo posterior ocular',
            say: 'Y donde un sangrado pequeño es catastrófico, en la neurocirugía o la cirugía del polo posterior del ojo, el umbral es cien mil.' },
        ] },
        { title: 'Rendimiento', tag: 'Adulto de 70 kg', kind: 'key', items: [
          { t: '1 aféresis o pool de 4–6', d: 'Sube 30.000 a 50.000',
            say: 'Una aféresis de plaquetas, o un pool de cuatro a seis concentrados, sube el recuento en treinta a cincuenta mil en un adulto de setenta kilos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Plasma y crioprecipitado',
      title: 'Cada componente repone algo distinto',
      cards: [
        { title: 'Plasma fresco congelado', tag: '10–15 mL/kg', kind: 'pharma', items: [
          { t: 'Contiene todos los factores', d: 'Pocas indicaciones justificadas',
            say: 'El plasma fresco congelado contiene todos los factores de la coagulación y se da a diez a quince mililitros por kilo. Pero sus indicaciones justificadas son pocas.' },
          { t: 'Sangrado + TP o TTPK > 1,5 veces', d: 'O transfusión masiva',
            say: 'La principal es la coagulopatía con sangrado activo, con un tiempo de protrombina o un TTPK sobre una vez y media el control. También la transfusión masiva.' },
          { t: 'Plasmaféresis en PTT', d: 'Y déficit sin concentrado específico',
            say: 'Y dos más: la reposición durante la plasmaféresis en la púrpura trombocitopénica trombótica, que vimos en microangiopatías, y el déficit congénito de un factor que no tiene concentrado purificado. Un TP alargado sin sangrado no es indicación.' },
        ] },
        { title: 'Crioprecipitado', tag: 'Fibrinógeno', kind: 'key', items: [
          { t: 'Elección para reponer fibrinógeno', d: 'Sangrado con fibrinógeno < 100–150',
            say: 'El crioprecipitado es una fracción del plasma concentrada en frío, y es el componente de elección para reponer fibrinógeno cuando hay sangrado con un fibrinógeno bajo cien a ciento cincuenta.' },
          { t: 'CID, hemorragia masiva, DPPNI', d: 'También disfibrinogenemia',
            say: 'Los escenarios típicos: la coagulación intravascular diseminada, la hemorragia masiva y el desprendimiento de placenta. Plasma para los factores, crioprecipitado para el fibrinógeno.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Compatibilidad ABO',
      title: 'Quién puede recibir de quién',
      cards: [
        { title: 'La lógica', tag: 'Anticuerpos del receptor', kind: 'key', items: [
          { t: 'El receptor tiene anticuerpos naturales', d: 'Grupo A tiene anti-B',
            say: 'Antes de las reacciones, entendamos la compatibilidad. Lo que destruye los glóbulos transfundidos son los anticuerpos del receptor. Un paciente grupo A tiene antígeno A en sus glóbulos y anticuerpos anti B en su plasma.' },
          { t: 'A que recibe AB: hemólisis > 95%', d: 'Sus anti-B atacan al antígeno B',
            say: 'Por eso, si un paciente A recibe glóbulos AB, sus anticuerpos anti B reconocen el antígeno B y los destruyen. La probabilidad de una reacción hemolítica es prácticamente total, sobre noventa y cinco por ciento.' },
        ] },
        { title: 'Los extremos', tag: 'Para glóbulos rojos', kind: 'criteria', items: [
          { t: 'AB: receptor universal', d: 'No tiene anti-A ni anti-B',
            say: 'El grupo AB no tiene anticuerpos anti A ni anti B, así que puede recibir glóbulos de cualquier grupo: es el receptor universal.' },
          { t: 'O: donante de glóbulos rojos', d: 'Sin antígenos A ni B',
            say: 'Y los glóbulos grupo O no tienen antígenos A ni B, así que ningún receptor los ataca por el sistema ABO. Esa lógica, anticuerpos del receptor contra antígenos del donante, es la que explica la reacción más grave.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Reacción transfusional aguda',
      title: 'La regla de oro: detener primero',
      nodes: [
        { id: 'rx', col: 0, row: 1, k: 'start', t: 'Síntoma durante la transfusión', s: 'Fiebre, disnea, dolor, hipotensión' },
        { id: 'det', col: 1, row: 1, k: 'alert', t: 'Detener la infusión', s: 'De inmediato' },
        { id: 'via', col: 2, row: 0, k: 'good', t: 'Vía con suero fisiológico', s: 'Con un equipo nuevo' },
        { id: 'ide', col: 2, row: 2, k: 'good', t: 'Verificar identidad', s: 'Paciente y etiqueta de la bolsa' },
        { id: 'ban', col: 3, row: 1, k: 'refer', t: 'Notificar al banco de sangre', s: 'Bolsa + muestras del paciente' },
      ],
      edges: [
        { from: 'rx', to: 'det' }, { from: 'det', to: 'via' }, { from: 'det', to: 'ide' },
        { from: 'via', to: 'ban' }, { from: 'ide', to: 'ban' },
      ],
      steps: [
        { show: ['rx', 'det'], note: 'Antes de pensar en el diagnóstico',
          say: 'Ante cualquier reacción aguda durante una transfusión, sea fiebre, disnea, dolor o hipotensión, el primer paso es siempre el mismo: detener la infusión de inmediato. Antes de saber qué es. Esa es la respuesta que el examen busca.' },
        { show: ['via'], note: 'No se pierde el acceso',
          say: 'Luego se mantiene la vía venosa permeable con suero fisiológico, pero con un equipo de goteo nuevo, para no seguir pasando lo que queda en la línea.' },
        { show: ['ide'], note: 'Buscar el error',
          say: 'Se verifica de inmediato la identidad del paciente y la compatibilidad en la etiqueta de la bolsa. La reacción más grave casi siempre nace de un error humano de identificación.' },
        { show: ['ban'], note: 'Estudio de hemólisis y cultivos',
          say: 'Y se notifica al banco de sangre, enviando la bolsa con lo que quedó y muestras del paciente para estudio de hemólisis y cultivos.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Reacción hemolítica aguda',
      title: 'Incompatibilidad ABO',
      nodes: [
        { id: 'err', col: 0, row: 1, k: 'cause', t: 'Error de identificación', s: 'Sangre ABO incompatible' },
        { id: 'hem', col: 1, row: 1, k: 'mech', t: 'Hemólisis intravascular', s: 'En los primeros 10–15 min' },
        { id: 'cli', col: 2, row: 0, k: 'effect', t: 'Fiebre, calofríos, dolor lumbar', s: 'Disnea e hipotensión' },
        { id: 'ori', col: 2, row: 2, k: 'effect', t: 'Orina roja oscura', s: 'Hemoglobina libre' },
        { id: 'cid', col: 3, row: 1, k: 'risk', t: 'CID y shock', s: 'Daño renal por hemoglobina' },
        { id: 'tto', col: 4, row: 1, k: 'good', t: 'Soporte + diuresis forzada', s: '> 100 mL/h con suero y furosemida' },
      ],
      edges: [
        { from: 'err', to: 'hem' }, { from: 'hem', to: 'cli' }, { from: 'hem', to: 'ori' },
        { from: 'cli', to: 'cid' }, { from: 'ori', to: 'cid' }, { from: 'cid', to: 'tto' },
      ],
      steps: [
        { show: ['err', 'hem'], note: 'Minutos después de iniciar',
          say: 'La reacción más grave es la hemolítica aguda. Casi siempre es una incompatibilidad ABO por un error de identificación, y los anticuerpos del receptor destruyen los glóbulos dentro de los vasos. Empieza muy rápido, en los primeros diez a quince minutos.' },
        { show: ['cli'], note: 'Dolor lumbar: la pista',
          say: 'El paciente hace fiebre alta, calofríos intensos, disnea, hipotensión, y un dato clave: dolor lumbar agudo, intolerable. Si el enunciado dice dolor lumbar durante una transfusión, piensa en hemólisis.' },
        { show: ['ori'], note: 'Hemoglobinuria',
          say: 'La hemoglobina liberada sale por la orina, que se ve roja oscura.' },
        { show: ['cid'], note: 'Puede terminar en shock',
          say: 'Y el cuadro puede progresar a coagulación intravascular diseminada y shock, mientras la hemoglobina libre precipita en los túbulos y daña el riñón.' },
        { show: ['tto'], note: 'Proteger el riñón',
          say: 'Después de detener la transfusión, el manejo es soporte hemodinámico agresivo e hidratación con suero para forzar una diuresis sobre cien mililitros por hora, con furosemida, para lavar los túbulos y protegerlos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reacción febril no hemolítica',
      title: 'La más frecuente y la más benigna',
      cards: [
        { title: 'Qué es', tag: '1–2% de las transfusiones', kind: 'key', items: [
          { t: 'Anticuerpos contra leucocitos', d: 'O citocinas del donante en la bolsa',
            say: 'Ahora el otro extremo: la reacción febril no hemolítica, la más frecuente, en uno a dos por ciento de las transfusiones. Se debe a anticuerpos del receptor contra los leucocitos del donante, o a citocinas que se acumularon en la bolsa.' },
          { t: 'Alza térmica de 1 °C o más', d: 'Sin dolor lumbar ni hemólisis',
            say: 'Se manifiesta con un alza de temperatura de un grado o más, pero sin dolor lumbar y sin hemólisis. Esa es la diferencia con la hemolítica: fiebre sola, sin el resto.' },
        ] },
        { title: 'Manejo', tag: 'Tratar y prevenir', kind: 'pharma', items: [
          { t: 'Paracetamol', d: 'Responde a antipiréticos',
            say: 'Responde a antipiréticos como el paracetamol.' },
          { t: 'Prevención: desleucocitados', d: 'Sin leucocitos no hay blanco',
            say: 'Y se previene con hemocomponentes desleucocitados. Tiene lógica: si le quitas los leucocitos a la bolsa, los anticuerpos no tienen contra qué reaccionar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Disnea postransfusional',
      title: 'TRALI vs TACO',
      nodes: [
        { id: 'dis', col: 0, row: 1, k: 'start', t: 'Disnea e hipoxemia', s: 'Durante o tras la transfusión' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Presión y yugulares?', s: 'La clave está en el volumen' },
        { id: 'tra', col: 2, row: 0, k: 'alert', t: 'TRALI', s: 'Hipotensión, yugulares normales' },
        { id: 'tram', col: 3, row: 0, k: 'mech', t: 'Anti-HLA del donante', s: 'Edema no cardiogénico, < 6 h' },
        { id: 'trat', col: 4, row: 0, k: 'good', t: 'Soporte ventilatorio', s: 'Diuréticos no sirven' },
        { id: 'tac', col: 2, row: 2, k: 'risk', t: 'TACO', s: 'Hipertensión, ingurgitación yugular' },
        { id: 'tacm', col: 3, row: 2, k: 'mech', t: 'Sobrecarga de volumen', s: 'Anciano o cardiópata' },
        { id: 'tact', col: 4, row: 2, k: 'good', t: 'Furosemida EV', s: 'Y restricción hídrica' },
      ],
      edges: [
        { from: 'dis', to: 'q' }, { from: 'q', to: 'tra', label: 'baja' }, { from: 'tra', to: 'tram' }, { from: 'tram', to: 'trat' },
        { from: 'q', to: 'tac', label: 'alta' }, { from: 'tac', to: 'tacm' }, { from: 'tacm', to: 'tact' },
      ],
      steps: [
        { show: ['dis', 'q'], note: 'Dos edemas pulmonares muy distintos',
          say: 'Llegamos a la diferencia que más se pregunta. Un paciente que se pone disneico e hipoxémico durante o después de una transfusión tiene un edema pulmonar. Pero hay dos, y se tratan al revés. La pista está en el volumen: la presión arterial y las yugulares.' },
        { show: ['tra', 'tram'], note: 'Un problema de permeabilidad',
          say: 'El primero es el TRALI, la injuria pulmonar aguda asociada a transfusión. Aparece dentro de seis horas. Anticuerpos anti HLA o anti neutrófilo del donante activan los neutrófilos en el pulmón, y los capilares se vuelven permeables. Es un edema no cardiogénico: hipoxemia severa, fiebre, hipotensión, y presiones de llenado normales.' },
        { show: ['trat'], note: 'No hay exceso de volumen que sacar',
          say: 'Su manejo es soporte ventilatorio. Y ojo: los diuréticos no sirven, porque no sobra volumen, y pueden empeorar la hipotensión.' },
        { show: ['tac', 'tacm'], note: 'Un problema de volumen',
          say: 'El segundo es el TACO, la sobrecarga circulatoria asociada a transfusión. Es un edema cardiogénico por exceso de volumen, típico del anciano o del cardiópata que recibe la sangre muy rápido. Aquí hay hipertensión, ingurgitación yugular, tercer ruido y un péptido natriurético elevado.' },
        { show: ['tact'], note: 'Responde espectacularmente',
          say: 'Y responde de forma espectacular a la furosemida endovenosa y a la restricción hídrica. Resumen: si la presión está baja, piensa en TRALI; si está alta con yugulares ingurgitadas, TACO y furosemida.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'TRALI vs TACO, parámetro por parámetro',
      head: ['Parámetro', 'TRALI', 'TACO'],
      rows: [
        { cells: ['Mecanismo', 'Permeabilidad capilar (anti-HLA)', 'Hipervolemia, sobrecarga del VI'],
          say: 'Pongamos las dos lado a lado. En el mecanismo, el TRALI es permeabilidad por anticuerpos, y el TACO es exceso de volumen.' },
        { cells: ['Presión arterial', 'Baja o normal', 'Hipertensión marcada'],
          say: 'La presión arterial es baja o normal en el TRALI, y marcadamente alta en el TACO.' },
        { cells: ['Yugulares y corazón', 'Sin ingurgitación, sin galope', 'Ingurgitación yugular, R3'],
          say: 'El TRALI no tiene ingurgitación yugular ni galope; el TACO tiene yugulares ingurgitadas y tercer ruido.' },
        { cells: ['BNP', 'Normal o levemente alto', 'Marcadamente elevado'],
          say: 'El péptido natriurético es normal o poco elevado en el TRALI, y muy elevado en el TACO.' },
        { cells: ['Furosemida', 'Nula o perjudicial', 'Mejoría rápida'],
          say: 'La furosemida no ayuda en el TRALI, e incluso empeora la hipotensión; en el TACO produce una mejoría rápida.' },
        { cells: ['Tratamiento', 'Oxígeno y ventilación protectora', 'Furosemida EV 20–40 mg + restricción'],
          say: 'Por eso el TRALI se maneja con oxígeno y ventilación protectora, y el TACO con veinte a cuarenta miligramos de furosemida endovenosa y restricción de líquidos.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las reacciones en un solo árbol, tal como lo vas a razonar al lado de la cama.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hospitalizado estable, Hb 7,5', 'No transfundir', 'Transfundir para llegar a 10'],
          say: 'Repasemos las trampas. Paciente hospitalizado y estable con siete coma cinco de hemoglobina: no se transfunde. El error es transfundir para llegar a diez.' },
        { cells: ['Síndrome coronario agudo, Hb 7,8', 'Transfundir (umbral 8–9)', 'Aplicar el umbral de 7'],
          say: 'Pero con un síndrome coronario agudo y siete coma ocho, sí se transfunde, porque el umbral sube a ocho o nueve.' },
        { cells: ['Aplasia, plaquetas 15.000, sin fiebre', 'Observar (umbral 10.000)', 'Transfundir por el número'],
          say: 'En la aplasia estable, sin fiebre y con quince mil plaquetas, no se transfunde: el umbral profiláctico es diez mil.' },
        { cells: ['Punción lumbar, plaquetas 35.000', 'Transfundir antes (umbral 50.000)', 'Hacerla sin preparar'],
          say: 'Pero si ese paciente necesita una punción lumbar con treinta y cinco mil plaquetas, se transfunde antes, porque el umbral para procedimientos es cincuenta mil.' },
        { cells: ['Fiebre y dolor lumbar durante la transfusión', 'Detener la transfusión', 'Dar paracetamol y seguir'],
          say: 'Fiebre con dolor lumbar durante la transfusión: detener de inmediato. El error es dar paracetamol y seguir, como si fuera una reacción febril.' },
        { cells: ['Disnea, hipotensión, yugulares normales', 'TRALI: soporte ventilatorio', 'Dar furosemida'],
          say: 'Y disnea con hipotensión y yugulares normales es TRALI: soporte ventilatorio. Dar furosemida es la trampa, porque eso es para el TACO.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 78 años con insuficiencia cardíaca con FE preservada e HTA, hospitalizada por anemia sintomática con Hb 6,4 g/dL. Durante la infusión rápida de la segunda unidad de glóbulos rojos presenta disnea súbita, FR 32, tos con expectoración rosada y cianosis. PA 185/100 mmHg (ingreso 130/80), FC 110, ingurgitación yugular hasta el ángulo mandibular y crépitos bilaterales hasta los ápices.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Disminuir la velocidad de infusión y completar la unidad' },
        { letter: 'B', text: 'Suspender la transfusión, sentarla, oxígeno y furosemida 40 mg EV' },
        { letter: 'C', text: 'Suspender la transfusión e iniciar ventilación protectora sin diuréticos' },
        { letter: 'D', text: 'Paracetamol y continuar la transfusión' },
        { letter: 'E', text: 'Hidratación salina masiva para diuresis forzada' },
      ],
      correct: 'B',
      explanation: 'Anciana cardiópata con transfusión rápida que desarrolla edema pulmonar con hipertensión e ingurgitación yugular: TACO. Se suspende la transfusión, se sienta con las piernas declives, oxígeno a flujo alto y furosemida 40 mg EV en bolo. El soporte sin diuréticos corresponde al TRALI, que cursa con hipotensión.',
      say: {
        stem: 'Vamos con un caso. Mujer de setenta y ocho años con insuficiencia cardíaca e hipertensión, hospitalizada por una anemia sintomática con seis coma cuatro de hemoglobina. Durante la infusión rápida de la segunda unidad hace disnea súbita, taquipnea, expectoración rosada y cianosis. La presión sube a ciento ochenta y cinco con cien, tiene yugulares ingurgitadas hasta el ángulo mandibular y crépitos hasta los ápices.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: bajar la velocidad y completar la unidad, suspender y dar furosemida con oxígeno, suspender y ventilar sin diuréticos, paracetamol y seguir, o hidratación masiva. Piénsalo.',
        answer: 'Es la B. Anciana cardiópata, transfusión rápida, hipertensión y yugulares ingurgitadas: es un TACO. Se detiene la transfusión, se sienta a la paciente con las piernas colgando, oxígeno y cuarenta miligramos de furosemida endovenosa. La C es la trampa: ese es el manejo del TRALI, que cursa con hipotensión. Y la A falla en la regla de oro: ante una reacción, la transfusión se detiene.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 14',
      stem: 'Una paciente de 68 años sufre un accidente de tránsito, resultando con fractura de pelvis inestable y hemorragia masiva, ingresando para su manejo en la unidad de paciente crítico. Al examen físico está taquicárdica e hipotensa, por lo que se solicitan pruebas de grupo y Rh, resultando su grupo sanguíneo O-Rh negativo. Sin embargo, en el hospital únicamente hay dos unidades de glóbulos rojos O-Rh negativo, aunque múltiples unidades O-Rh positivo. El hospital más cercano con unidades O-Rh negativo disponibles está a 4 horas de traslado.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar cristaloides hasta conseguir más unidades O-Rh negativo' },
        { letter: 'B', text: 'Administrar las dos unidades O-Rh negativo y, en caso necesario, las O-Rh positivo' },
        { letter: 'C', text: 'Esperar a obtener más unidades O-Rh negativo, solicitándolas de inmediato a otro centro' },
        { letter: 'D', text: 'Administrar únicamente las dos unidades O-Rh negativo disponibles' },
        { letter: 'E', text: 'Trasladar de inmediato a otro hospital que tenga disponibles unidades O-Rh negativo' },
      ],
      correct: 'B',
      explanation: 'En la hemorragia masiva la transfusión no espera. A diferencia del sistema ABO, en el sistema Rh se puede transfundir excepcionalmente sangre Rh positivo a un paciente Rh negativo cuando hay riesgo vital, porque el riesgo de hemólisis es menor que el de la anemia aguda severa.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil veinticuatro. Mujer de sesenta y ocho años con fractura de pelvis inestable y hemorragia masiva, taquicárdica e hipotensa. Es grupo O Rh negativo, pero el hospital solo tiene dos unidades O negativo, y muchas O positivo. El hospital más cercano con O negativo está a cuatro horas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cristaloides hasta conseguir más O negativo, dar las dos O negativo y luego las O positivo si hace falta, esperar las unidades de otro centro, dar solo las dos O negativo, o trasladarla. Piénsalo.',
        answer: 'Es la B. En la hemorragia masiva la transfusión no espera, y trasladar o esperar cuatro horas es dejarla morir. Y a diferencia del ABO, en el sistema Rh se puede transfundir excepcionalmente sangre Rh positivo a un paciente Rh negativo con riesgo vital, porque el riesgo de hemólisis es menor que el de la anemia aguda. La D es la trampa: suena prudente, pero dos unidades no alcanzan en una hemorragia masiva.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 96',
      stem: 'Un paciente de 55 años con antecedentes de hipertensión arterial y una válvula cardíaca aórtica mecánica, anticoagulado con antagonistas de la vitamina K, ingresa al servicio de urgencias por un episodio de hemorragia digestiva alta, con signos de inestabilidad hemodinámica. Además de la administración de fluidos y la solicitud de una endoscopía digestiva alta con urgencia,',
      question: '¿cuál es la conducta más adecuada para el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Administrar vitamina K por vía endovenosa' },
        { letter: 'B', text: 'Transfundir sangre completa' },
        { letter: 'C', text: 'Administrar ácido tranexámico endovenoso' },
        { letter: 'D', text: 'Administrar plasma fresco congelado endovenoso' },
        { letter: 'E', text: 'Administrar factor VII recombinante endovenoso' },
      ],
      correct: 'D',
      explanation: 'Sangrado activo grave en un paciente con cumarínicos: se requiere reversión inmediata, que aporta el plasma fresco congelado (coagulopatía con sangrado activo). La vitamina K sola revierte en horas; sirve para la reversión no urgente.',
      say: {
        stem: 'Del mismo examen, julio de dos mil veinticuatro. Paciente de cincuenta y cinco años con una válvula aórtica mecánica, anticoagulado con antagonistas de la vitamina K, que llega con una hemorragia digestiva alta e inestabilidad hemodinámica. Ya se le dieron fluidos y se pidió la endoscopía.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: vitamina K endovenosa, sangre completa, ácido tranexámico, plasma fresco congelado, o factor siete recombinante. Piénsalo.',
        answer: 'Es la D. Es exactamente la indicación principal del plasma que vimos: coagulopatía con sangrado activo. El plasma aporta de inmediato los factores que el cumarínico bloqueó. La vitamina K es la trampa: es necesaria, pero tarda horas, así que sola sirve para la reversión no urgente. Y recuerda de la clase de coagulopatías adquiridas que, si está disponible, el concentrado de complejo protrombínico es aún más rápido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 121',
      stem: 'Adulto con PTI sin sangrado grave, plaquetas en 5.000:',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Corticoides 1mg/kg' },
        { letter: 'B', text: 'Transfusión de plaquetas' },
        { letter: 'C', text: 'Terapia biológica' },
        { letter: 'D', text: 'Amoxicilina' },
        { letter: 'E', text: 'Ibuprofeno' },
      ],
      correct: 'A',
      explanation: 'En la PTI las plaquetas se destruyen por autoanticuerpos: el tratamiento de primera línea son los corticoides. El umbral de 10.000 para transfundir es de la falla medular; en la PTI la transfusión se reserva para el sangrado con riesgo vital.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil veinticuatro. Adulto con púrpura trombocitopénica inmune, sin sangrado grave, con cinco mil plaquetas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: corticoides a un miligramo por kilo, transfusión de plaquetas, terapia biológica, amoxicilina, o ibuprofeno. Piénsalo.',
        answer: 'Es la A, corticoides. La transfusión es la trampa, porque cinco mil está bajo el umbral de diez mil. Pero ese umbral es para la falla medular, donde faltan plaquetas porque no se producen. En la PTI se producen, pero los anticuerpos las destruyen, y las plaquetas transfundidas corren la misma suerte. Por eso se reserva para el sangrado con riesgo vital. El umbral depende de la causa, no solo del número.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Umbrales', tag: 'Restrictivo', kind: 'criteria', items: [
          { t: 'Glóbulos rojos: Hb < 7', d: 'Coronario: 8–9 · hemorragia masiva: no espera',
            say: 'Cerremos con las reglas de oro. Glóbulos rojos con hemoglobina bajo siete en el paciente estable; ocho a nueve en el síndrome coronario; y en la hemorragia masiva no se espera el laboratorio.' },
          { t: 'Plaquetas: 10 · 20 · 50 · 100 mil', d: 'Según el riesgo del escenario',
            say: 'Plaquetas: diez mil en la falla medular, veinte mil con fiebre, cincuenta mil para procedimientos o sangrado, y cien mil en neurocirugía. En la PTI, la regla no se aplica.' },
        ] },
        { title: 'Componentes', tag: 'Qué repone cada uno', kind: 'pharma', items: [
          { t: 'Plasma: sangrado + TP o TTPK > 1,5', d: 'Crioprecipitado: fibrinógeno',
            say: 'El plasma, para la coagulopatía con sangrado activo; el crioprecipitado, para el fibrinógeno bajo.' },
        ] },
        { title: 'Reacciones', tag: 'Detener primero', kind: 'alert', items: [
          { t: 'Cualquier reacción: detener', d: 'Dolor lumbar = hemólisis ABO',
            say: 'Ante cualquier reacción, primero se detiene la transfusión. Dolor lumbar y orina oscura es hemólisis por incompatibilidad ABO.' },
          { t: 'TRALI: hipotensión, sin diurético', d: 'TACO: hipertensión, furosemida',
            say: 'Y en la disnea, mira la presión y las yugulares. Si te llevas una sola idea de hoy: ante una reacción, primero detienes la transfusión, y después la presión te dice si es TRALI o TACO. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Reacción transfusional aguda',
    root: N('start', 'Síntoma durante la transfusión', 'Fiebre, dolor, disnea o hipotensión',
      'Un paciente presenta un síntoma nuevo mientras recibe una transfusión.',
      ['', N('alert', 'Detener la transfusión', 'Vía con SF · verificar identidad · avisar al banco',
        'Lo primero, siempre: detener la transfusión, mantener la vía con suero fisiológico, verificar la identidad y la etiqueta, y avisar al banco de sangre.',
        ['', N('q', '¿Qué síntoma predomina?', 'Fiebre, hemólisis o disnea',
          'Recién ahora se piensa en el diagnóstico. ¿Qué predomina: fiebre sola, signos de hemólisis, o disnea?',
          ['Fiebre sola', N('ok', 'Reacción febril no hemolítica', 'Paracetamol · desleucocitados',
            'Si es solo fiebre de un grado o más, sin dolor lumbar ni hemólisis, es una reacción febril no hemolítica: paracetamol, y en adelante componentes desleucocitados.')],
          ['Dolor lumbar, orina oscura', N('alert', 'Hemolítica aguda ABO', 'Soporte + diuresis > 100 mL/h',
            'Si hay dolor lumbar, hipotensión y orina oscura, es una reacción hemolítica aguda por incompatibilidad ABO: soporte hemodinámico, hidratación y furosemida para forzar la diuresis.')],
          ['Disnea', N('q', '¿Presión y yugulares?', 'Volumen del paciente',
            'Si predomina la disnea, mira la presión arterial y las yugulares.',
            ['Hipotensión', N('refer', 'TRALI', 'Soporte ventilatorio, sin diuréticos',
              'Con hipotensión y yugulares normales es un TRALI: oxígeno y soporte ventilatorio en la unidad de cuidados intensivos, sin diuréticos.')],
            ['Hipertensión + IY', N('do', 'TACO', 'Furosemida EV + restricción',
              'Con hipertensión e ingurgitación yugular es un TACO: sentar al paciente, oxígeno, furosemida endovenosa y restricción hídrica.')])])])]),
  },
};
