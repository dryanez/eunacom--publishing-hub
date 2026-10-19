// Clase 2.5 (Cardiología) — guion docente escrito a mano (estándar Módulo 1). Muestra del rediseño de Cardiología en 38 temas.
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_2.cjs (cardio-14). Códigos: 1.01.2.004 Infarto agudo al miocardio
// (Dx específico · Tx inicial · Seguimiento completo), 1.01.5.009 Trombolisis (realizar) y 1.01.4.007 Electrocardiograma
// (realiza, interpreta y emplea), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs --search "supradesnivel|IAM|trombolisis|angioplastia|…"): Julio 2017 P46 (SDST V1-V4,
// coronariografía de urgencia), Julio 2017 P60 (SDST DII-DIII-aVF, pared inferior), Julio 2016 P55 (BCRI nuevo, reperfusión) y
// Agosto 2021 P44 (cocaína, atenolol contraindicado). Enunciados y alternativas copiados del banco (solo se unieron las palabras
// cortadas con guion por el PDF).
// No usadas: Julio 2025 P96 (clave dudosa: con angioplastía a 60 minutos la conducta es trasladar a angioplastía primaria, no
// trombolizar; anotada en REVISION_CONTENIDO.md); Julio 2015 P60, Julio 2024 P87 y Diciembre 2025 P4 (dependen de un ECG que el
// banco no trae); Diciembre 2024 P157 (alternativas rotas); Diciembre 2017 P11 (BCRI, válida, repite lo de Julio 2016 P55);
// Julio 2018 P42 y Diciembre 2019 P125 (complicaciones: van en cardio-15); Julio 2024 P28 (emergencia hipertensiva: cardio-32).
// Fotos en contexto: dos ECG reales de Stroobandt, Barold y Sinnaeve, «ECG from Basics to Essentials» (Wiley, 2016), p. 178 y 169
// (classes/media/biblioteca/20_cardiologia/cardio-14/). En movimiento: scenes/cardio_nuevas.html ?v=ecg_iam (gráfico propio) y
// ?v=oclusion (Blausen «Coronary Circulation (Anterior)», CC BY 3.0, la misma lámina de neuro-25).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const STRO = p => `Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. ${p}`;

module.exports = {
  id: 'cardio-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer el supradesnivel y sus equivalentes, ubicar la arteria, decidir en minutos entre angioplastía y fibrinólisis',
      say: 'Bienvenido. Venimos del síndrome coronario sin supradesnivel, y hoy vemos la urgencia cardiológica más importante del examen: el infarto con supradesnivel del ST. Es una garantía GES, y el que toma el primer electrocardiograma y decide la reperfusión casi siempre eres tú, en un SAPU o en un hospital comunitario. El examen pregunta cuatro cosas: leer el ECG, ubicar el territorio, elegir entre angioplastía y fibrinólisis, y no equivocarse con los fármacos. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Una arteria cerrada por completo',
      nodes: [
        { id: 'p', col: 0, row: 1, k: 'cause', t: 'Placa vulnerable', s: 'Se rompe o se erosiona' },
        { id: 't', col: 1, row: 1, k: 'mech', t: 'Trombo oclusivo total', s: 'Rojo: fibrina y hematíes' },
        { id: 'i', col: 2, row: 1, k: 'mech', t: 'Isquemia transmural', s: 'Del endocardio al epicardio' },
        { id: 'e', col: 3, row: 0, k: 'effect', t: 'Supradesnivel del ST', s: 'La firma en el ECG' },
        { id: 'n', col: 3, row: 2, k: 'effect', t: 'Necrosis en 6 horas', s: 'Frente de onda' },
        { id: 'r', col: 4, row: 1, k: 'good', t: 'Reperfundir ya', s: 'Tiempo es músculo' },
      ],
      edges: [
        { from: 'p', to: 't' }, { from: 't', to: 'i' }, { from: 'i', to: 'e' }, { from: 'i', to: 'n' },
        { from: 'e', to: 'r' }, { from: 'n', to: 'r' },
      ],
      steps: [
        { show: ['p', 't'], note: 'La placa se rompe y el trombo cierra todo',
          say: 'Todo parte en una placa de ateroma vulnerable que se rompe o se erosiona. Encima se forma un trombo rojo, rico en fibrina y glóbulos rojos, que cierra la arteria por completo. Esa oclusión total es la diferencia con el síndrome sin supradesnivel, donde la arteria queda parcialmente abierta.' },
        { show: ['i', 'e'], note: 'Isquemia de todo el espesor',
          say: 'Con la arteria cerrada, se queda sin sangre todo el espesor de la pared, desde el endocardio hasta el epicardio. Esa isquemia transmural es la que levanta el segmento ST en las derivaciones que miran ese territorio.' },
        { show: ['n', 'r'], note: 'Cada minuto cuenta',
          say: 'La necrosis avanza como un frente de onda, de adentro hacia afuera, y se completa en unas seis horas. El beneficio de abrir la arteria es máximo en las primeras dos a tres horas y cae con cada minuto. Por eso se dice que tiempo es músculo, y por eso este tema es una carrera contra el reloj.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'El dolor que no se pasa',
      cards: [
        { title: 'Presentación típica', tag: 'Más de veinte minutos', kind: 'key', items: [
          { t: 'Opresivo, retroesternal, > 20 min', d: 'Irradiado a brazo, cuello o mandíbula',
            say: 'El cuadro típico es un dolor retroesternal opresivo, de más de veinte minutos, irradiado al brazo izquierdo, al cuello o a la mandíbula. No cede con el reposo ni con la nitroglicerina, y se acompaña de sudoración, náuseas y disnea.' },
          { t: 'No se espera la troponina', d: 'El diagnóstico es clínica + ECG',
            say: 'Y aquí está la primera regla. El infarto con supradesnivel se diagnostica con la clínica y el electrocardiograma. La troponina confirma la necrosis, pero nunca se espera su resultado para reperfundir.' },
        ] },
        { title: 'Presentación atípica', tag: 'El que se retrasa', kind: 'alert', items: [
          { t: 'Adulto mayor, mujer, diabético', d: 'Disnea, síncope, confusión, epigastralgia',
            say: 'Ojo con el adulto mayor, la mujer y el diabético. Pueden infartarse sin dolor, con disnea, síncope, confusión o dolor epigástrico. Ese infarto atípico es el que más se retrasa.' },
          { t: 'Joven con cocaína', d: 'Betabloqueador contraindicado',
            say: 'Y el joven con dolor torácico después de consumir cocaína: tiene vasoespasmo y trombosis. A él no se le da betabloqueador, porque deja sin freno el efecto alfa y empeora el espasmo. Se calma con benzodiacepinas y nitratos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico electrocardiográfico',
      title: 'Cuántos milímetros y dónde',
      cards: [
        { title: 'La regla', tag: 'ECG en 10 minutos', kind: 'key', items: [
          { t: 'ECG interpretado en ≤ 10 min', d: 'Repetir cada 15-30 min si no es diagnóstico',
            say: 'Ante todo dolor torácico, el electrocardiograma de doce derivaciones se toma y se interpreta en diez minutos o menos desde el primer contacto. Si no es diagnóstico y el dolor sigue, lo repites cada quince a treinta minutos.' },
          { t: 'Punto J, ≥ 2 derivaciones contiguas', d: 'Del mismo territorio',
            say: 'El supradesnivel se mide en el punto J, donde termina el QRS, y tiene que estar en dos o más derivaciones contiguas, es decir, que miran la misma pared.' },
        ] },
        { title: 'Los cortes', tag: 'Se preguntan tal cual', kind: 'criteria', items: [
          { t: 'Todas las derivaciones: ≥ 1 mm', d: 'Salvo V2 y V3',
            say: 'El corte general es un milímetro o más.' },
          { t: 'V2-V3: hombre ≥ 2 mm; < 40 años ≥ 2,5', d: 'Mujer ≥ 1,5 mm',
            say: 'La excepción son V dos y V tres, que normalmente tienen algo de supradesnivel. Ahí se exigen dos milímetros en el hombre de cuarenta años o más, dos y medio en el hombre menor de cuarenta, y uno y medio en la mujer.' },
        ] },
        { title: 'Equivalentes', tag: 'Reperfundir igual', kind: 'alert', items: [
          { t: 'BCRI nuevo con clínica de infarto', d: 'Sgarbossa; también en marcapaso',
            say: 'Hay patrones que valen como supradesnivel. El primero, el bloqueo completo de rama izquierda nuevo en un paciente con clínica de infarto. Se reperfunde igual, apoyado en los criterios de Sgarbossa, que también sirven con ritmo de marcapaso.' },
          { t: 'Infra V1-V3 con R alta: posterior', d: 'Pedir V7-V9 (≥ 0,5 mm)',
            say: 'El segundo, el infradesnivel en V uno a V tres con ondas R altas: es la imagen en espejo de un infarto posterior. Lo confirmas con las derivaciones posteriores, V siete a V nueve, donde basta medio milímetro.' },
          { t: 'Infra difuso + supra en aVR', d: 'Tronco o tres vasos',
            say: 'Y el tercero: infradesnivel en ocho o más derivaciones con supradesnivel en aVR. Sugiere lesión del tronco o de tres vasos, y va a coronariografía urgente.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Así evoluciona el ECG del infarto',
      images: [
        { src: 'animaciones/cardio-14/A1_ecg_evolucion_iam.mp4', label: 'De la T hiperaguda a la onda Q', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Minutos, horas, días, semanas',
          say: 'Mira cómo cambia el trazado. En los primeros minutos la onda T se hace alta y picuda. En horas sube el ST, con forma convexa, y abajo, en la derivación opuesta, aparece la imagen especular. Entre seis y doce horas se forma la onda Q de necrosis. En días el ST baja y la T se invierte, y la Q queda para siempre. Si el ST sigue arriba más de cuatro semanas, piensa en un aneurisma ventricular.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Territorios',
      title: 'Qué pared, qué arteria',
      cards: [
        { title: 'Anterior', tag: 'Descendente anterior', kind: 'key', items: [
          { t: 'V1-V4: anterior y septal', d: 'Especular en DIII y aVF',
            say: 'Las derivaciones con supradesnivel te dicen qué pared y qué arteria. Mira este electrocardiograma: el ST sube de V uno a V cinco. Es la pared anterior y septal, por la arteria descendente anterior. Y fíjate abajo, en DIII y aVF: el ST está descendido. Esa es la imagen especular.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-14/01_iam-anterior-sdst-v1-v5-especular-inferior__stroobandt-ecg_p178.jpg', label: 'IAM anterior: SDST V1-V5', at: 'Mira este electrocardiograma', credit: STRO(178) } },
          { t: 'V1-V6 + DI y aVL: extenso', d: 'DA proximal, el de peor pronóstico',
            say: 'Si el supradesnivel toma de V uno a V seis más DI y aVL, es un infarto anterior extenso por oclusión proximal de la descendente anterior, el de peor pronóstico.' },
          { t: 'DI, aVL, V5-V6: lateral', d: 'Circunfleja o diagonal',
            say: 'DI, aVL, V cinco y V seis son la pared lateral, por la circunfleja o una rama diagonal.' },
        ] },
        { title: 'Inferior', tag: 'Coronaria derecha', kind: 'criteria', items: [
          { t: 'DII, DIII y aVF: inferior', d: 'Coronaria derecha en 80-90%',
            say: 'Y ahora este otro: el ST sube en DII, DIII y aVF, más en DIII que en DII. Es un infarto inferior, y en ocho a nueve de cada diez casos la culpable es la coronaria derecha. Mira DI y aVL: el ST va hacia abajo. Otra vez, la imagen especular.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-14/02_iam-inferior-sdst-ii-iii-avf-especular-i-avl__stroobandt-ecg_p169.jpg', label: 'IAM inferior: DII-DIII-aVF', at: 'Y ahora este otro', credit: STRO(169) } },
          { t: 'Especular = infarto', d: 'La pericarditis no la tiene',
            say: 'La imagen especular es muy específica de infarto. La pericarditis, en cambio, da un supradesnivel cóncavo, difuso, que no respeta territorios, con el PR descendido y sin imagen especular. Esa diferencia se pregunta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Infarto inferior',
      title: 'Siempre mirar el ventrículo derecho',
      cards: [
        { title: 'Ventrículo derecho', tag: 'V3R y V4R', kind: 'alert', items: [
          { t: 'Inferior → V3R y V4R siempre', d: 'Supra ≥ 1 mm en V4R',
            say: 'Todo infarto inferior te obliga a tomar las derivaciones derechas, V tres R y V cuatro R. Un supradesnivel de un milímetro o más en V cuatro R confirma que también se infartó el ventrículo derecho.' },
          { t: 'Hipotensión, yugulares, pulmón limpio', d: 'Volumen; nada de nitratos',
            say: 'Lo sospechas con la tríada: hipotensión, yugulares ingurgitadas y pulmones limpios. Ese ventrículo depende de la precarga, así que se trata con volumen. Y están contraindicados los nitratos, los diuréticos y la morfina. Lo verás en detalle en la próxima clase.' },
        ] },
        { title: 'Lo que lo imita', tag: 'Ante la duda', kind: 'normal', items: [
          { t: 'Repolarización precoz, HVI, Brugada', d: 'Aneurisma, hiperkalemia',
            say: 'Otros que levantan el ST: la repolarización precoz del joven, que es cóncava y no cambia en el tiempo, la hipertrofia ventricular izquierda, el Brugada, el aneurisma ventricular y la hiperkalemia.' },
          { t: 'ECG seriado y ecocardiograma', d: 'Sin retrasar la reperfusión',
            say: 'Si dudas, repites el electrocardiograma y pides un ecocardiograma buscando una alteración segmentaria. Pero si el infarto es evidente, el ecocardiograma nunca debe retrasar la reperfusión.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Reperfusión',
      title: 'La regla de los 120 minutos',
      nodes: [
        { id: 'd', col: 0, row: 2, k: 'start', t: 'SCACEST < 12 h', s: 'ECG diagnóstico' },
        { id: 'q', col: 1, row: 2, k: 'q', t: '¿ACTP en ≤ 120 min?', s: 'Desde el diagnóstico' },
        { id: 'a', col: 3, row: 0, k: 'good', t: 'Angioplastía primaria', s: 'Puerta-balón ≤ 90 min' },
        { id: 'f', col: 3, row: 4, k: 'alert', t: 'Fibrinólisis', s: 'Puerta-aguja ≤ 30 min' },
        { id: 's', col: 2, row: 0, k: 'trap', t: 'Shock o contraindicación', s: 'ACTP sin importar el tiempo' },
        { id: 't', col: 4, row: 4, k: 'refer', t: 'Traslado siempre', s: 'A centro con hemodinamia' },
      ],
      edges: [
        { from: 'd', to: 'q' }, { from: 'q', to: 'a', label: 'Sí' }, { from: 'q', to: 'f', label: 'No' },
        { from: 's', to: 'a' }, { from: 'f', to: 't' },
      ],
      steps: [
        { show: ['d', 'q'], note: 'Una sola pregunta decide',
          say: 'Todo infarto con supradesnivel de menos de doce horas se reperfunde. Y la decisión depende de una sola pregunta: ¿puedo hacer una angioplastía primaria en ciento veinte minutos o menos desde el diagnóstico?' },
        { show: ['a'], note: 'Sí: angioplastía primaria',
          say: 'Si la respuesta es sí, el paciente viaja directo a hemodinamia para una angioplastía primaria con stent, que es la estrategia de elección. La meta es un tiempo puerta-balón de noventa minutos o menos, o sesenta si ya está en un hospital con hemodinamia.' },
        { show: ['f', 't'], note: 'No: fibrinólisis y traslado',
          say: 'Si la respuesta es no, porque el centro está lejos, se hace la fibrinólisis ahí mismo, en treinta minutos o menos desde que llegó: el tiempo puerta-aguja. Y después se traslada siempre a un centro con hemodinamia.' },
        { show: ['s'], note: 'Las excepciones',
          say: 'Hay dos excepciones que van a angioplastía aunque tarde más: el shock cardiogénico, o la insuficiencia cardíaca grave, y la contraindicación de fibrinólisis. Entre doce y cuarenta y ocho horas, solo se reperfunde con angioplastía si persiste el dolor o hay inestabilidad.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fibrinólisis',
      title: 'Tenecteplase y sus contraindicaciones',
      cards: [
        { title: 'Tenecteplase', tag: 'Bolo único por peso', kind: 'pharma', items: [
          { t: '30 a 50 mg según peso', d: '< 60 kg 30 · 70-79 kg 40 · ≥ 90 kg 50',
            say: 'El fibrinolítico de elección es el tenecteplase, en un solo bolo endovenoso según el peso: treinta miligramos bajo sesenta kilos, y cinco miligramos más por cada diez kilos, hasta cincuenta miligramos sobre noventa kilos. Para un paciente de setenta a setenta y nueve kilos, son cuarenta miligramos.' },
          { t: '≥ 75 años: mitad de la dosis', d: 'Menos hemorragia intracraneal',
            say: 'En los mayores de setenta y cinco años se usa la mitad de la dosis, para bajar el riesgo de hemorragia intracraneal.' },
          { t: 'Estreptoquinasa: alternativa', d: '1,5 millones UI en 30-60 min',
            say: 'La alternativa es la estreptoquinasa, un millón y medio de unidades en treinta a sesenta minutos. No es fibrinoespecífica, da hipotensión y alergia, y no se repite.' },
        ] },
        { title: 'Contraindicaciones absolutas', tag: 'Entonces, angioplastía', kind: 'alert', items: [
          { t: 'ACV hemorrágico previo; isquémico < 6 m', d: 'MAV o tumor intracraneal',
            say: 'Las contraindicaciones absolutas se preguntan una por una. Un accidente cerebrovascular hemorrágico en cualquier momento, o uno isquémico en los últimos seis meses. Una malformación arteriovenosa o un tumor intracraneal.' },
          { t: 'TEC, cirugía o sangrado digestivo < 1 mes', d: 'Coagulopatía; punción no compresible',
            say: 'Un traumatismo encefalocraneano, una cirugía mayor o un sangrado digestivo en el último mes, un trastorno de la coagulación conocido o una punción no compresible en las últimas veinticuatro horas.' },
          { t: 'Sospecha de disección aórtica', d: 'Nunca trombolizar',
            say: 'Y la sospecha de disección aórtica, que nunca se tromboliza. Con cualquiera de estas, el paciente va a angioplastía aunque el traslado supere los ciento veinte minutos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Después de la fibrinólisis',
      title: '¿Funcionó? Se mira a los 60-90 minutos',
      cards: [
        { title: 'Reperfusión exitosa', tag: 'Farmacoinvasiva', kind: 'key', items: [
          { t: 'ST desciende > 50%', d: 'En la derivación más elevada',
            say: 'A los sesenta a noventa minutos de la fibrinólisis miras de nuevo el electrocardiograma. Funcionó si el supradesnivel bajó más de la mitad en la derivación que estaba más elevada.' },
          { t: 'Alivio del dolor y RIVA', d: 'El RIVA es benigno: no se trata',
            say: 'Se acompaña de alivio del dolor y, a veces, de un ritmo idioventricular acelerado, el RIVA, que es una arritmia de reperfusión benigna y no se trata.' },
          { t: 'Coronariografía en 2-24 h', d: 'Estrategia farmacoinvasiva',
            say: 'Si funcionó, el paciente igual se traslada para una coronariografía entre dos y veinticuatro horas. Eso se llama estrategia farmacoinvasiva.' },
        ] },
        { title: 'Fibrinólisis fallida', tag: 'Urgente', kind: 'alert', items: [
          { t: 'ST baja < 50% o dolor persiste', d: 'A los 90 minutos',
            say: 'Si a los noventa minutos el ST bajó menos de la mitad, o el dolor persiste, la fibrinólisis falló.' },
          { t: 'Angioplastía de rescate inmediata', d: 'También si se reocluye o hay shock',
            say: 'Entonces se traslada de inmediato para una angioplastía de rescate. Lo mismo si la arteria se vuelve a cerrar, si reaparece la isquemia o si el paciente entra en shock.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento coadyuvante',
      title: 'Lo que acompaña a la reperfusión',
      cards: [
        { title: 'Antiagregar y anticoagular', tag: 'Desde el primer minuto', kind: 'pharma', items: [
          { t: 'Aspirina 250 mg masticada', d: 'Luego 100 mg/día de por vida',
            say: 'Desde el primer minuto, aspirina doscientos cincuenta miligramos masticada, y después cien miligramos al día de por vida.' },
          { t: 'ACTP: ticagrelor 180 mg', d: 'O prasugrel 60 mg',
            say: 'El segundo antiagregante depende de la estrategia. Si va a angioplastía, ticagrelor ciento ochenta miligramos de carga, o prasugrel.' },
          { t: 'Fibrinólisis: clopidogrel 300 mg', d: '≥ 75 años: 75 mg sin carga; + enoxaparina',
            say: 'Si recibe fibrinólisis, el que se usa es el clopidogrel, trescientos miligramos de carga, o setenta y cinco sin carga en los mayores de setenta y cinco años. Más enoxaparina: un bolo endovenoso de treinta miligramos y uno por kilo subcutáneo cada doce horas, sin bolo y con menos dosis en el mayor de setenta y cinco.' },
        ] },
        { title: 'Los demás', tag: 'Las trampas', kind: 'alert', items: [
          { t: 'Atorvastatina 80 mg en 24 h', d: 'Sin importar el colesterol',
            say: 'Atorvastatina ochenta miligramos en las primeras veinticuatro horas, sin importar el colesterol.' },
          { t: 'O₂ solo si SatO₂ < 90%', d: 'Morfina solo si el dolor no cede',
            say: 'Oxígeno solo si la saturación está bajo noventa por ciento. Y morfina solo para el dolor que no cede, porque retrasa la absorción de los antiagregantes orales.' },
          { t: 'Nitroglicerina: no en VD ni PAS < 90', d: 'Ni tras sildenafil',
            say: 'La nitroglicerina alivia el dolor y la congestión, pero no se da en el infarto del ventrículo derecho, con presión sistólica bajo noventa, ni después de sildenafil o tadalafil. Y el betabloqueador oral se inicia en las primeras veinticuatro horas solo si no hay insuficiencia cardíaca, shock ni bradicardia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones precoces',
      title: 'Killip y las arritmias de las primeras horas',
      cards: [
        { title: 'Killip-Kimball', tag: 'Pronóstico al ingreso', kind: 'criteria', items: [
          { t: 'I sin IC · II crépitos, R3', d: 'III edema pulmonar · IV shock',
            say: 'Al ingreso clasificas al paciente con Killip. Uno, sin insuficiencia cardíaca. Dos, con crépitos basales o tercer ruido. Tres, en edema pulmonar. Y cuatro, en shock cardiogénico.' },
          { t: 'Shock: angioplastía urgente', d: 'La principal causa de muerte en el hospital',
            say: 'La mortalidad sube en cada escalón, y el shock cardiogénico es la principal causa de muerte en el hospital. Se trata con angioplastía urgente.' },
        ] },
        { title: 'Arritmias', tag: 'Primeras horas', kind: 'alert', items: [
          { t: 'FV: desfibrilar', d: 'Principal muerte prehospitalaria',
            say: 'La fibrilación ventricular de las primeras horas es la principal causa de muerte antes de llegar al hospital. Por eso el desfibrilador va al lado del paciente.' },
          { t: 'Inferior: bradicardia y BAV', d: 'Transitorios; atropina',
            say: 'El infarto inferior da bradicardia y bloqueo aurículo-ventricular, porque la coronaria derecha irriga el nodo. Suelen ser transitorios y responden a atropina. Las complicaciones mecánicas, entre el tercer y el séptimo día, las vemos en la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'GES y prevención secundaria',
      title: 'Las metas de tiempo y el alta',
      cards: [
        { title: 'GES número 5', tag: 'Metas de tiempo', kind: 'criteria', items: [
          { t: 'ECG ≤ 10 min · aguja ≤ 30 min', d: 'Balón ≤ 90 min; ≤ 120 desde el contacto',
            say: 'El infarto es el problema GES número cinco. Las metas que se preguntan son tres: electrocardiograma en diez minutos, fibrinólisis en treinta minutos desde la llegada, y angioplastía en noventa minutos, o ciento veinte desde el primer contacto.' },
        ] },
        { title: 'Al alta', tag: 'Prevención secundaria', kind: 'pharma', items: [
          { t: 'Aspirina + P2Y12 por 12 meses', d: 'Doble antiagregación',
            say: 'Al alta, doble antiagregación: aspirina de por vida y ticagrelor o clopidogrel por doce meses.' },
          { t: 'Atorvastatina 80 mg', d: 'LDL < 55 mg/dL',
            say: 'Atorvastatina ochenta miligramos, con meta de colesterol LDL bajo cincuenta y cinco.' },
          { t: 'Betabloqueador e IECA', d: 'Obligatorios si FEVI < 40%',
            say: 'Betabloqueador e inhibidor de la enzima convertidora, o un ARA dos, obligatorios si la fracción de eyección está bajo cuarenta por ciento. Más dejar de fumar, rehabilitación cardíaca y un ecocardiograma antes del alta.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Tiempo es músculo: abrir la arteria',
      images: [
        { src: 'animaciones/cardio-14/A2_oclusion_da_reperfusion.mp4', label: 'Oclusión de la descendente anterior y angioplastía', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Se cierra la arteria, sube el ST; se abre, baja',
          say: 'Juntemos todo. Un trombo cierra la descendente anterior, el flujo se detiene y el músculo se oscurece. En V dos sube el ST y en DIII aparece la imagen especular. Corre el reloj: angioplastía en ciento veinte minutos, o fibrinólisis en treinta. El balón abre la arteria, el flujo vuelve y el ST baja más de la mitad. Eso es reperfundir.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del dolor torácico a la reperfusión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Infarto con supradesnivel: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['SDST en ECG, troponina pendiente', 'Reperfundir ya', 'Esperar la troponina'],
          say: 'Supradesnivel en el electrocardiograma con la troponina pendiente: se reperfunde ya. Esperar la troponina es el error clásico.' },
        { cells: ['BCRI nuevo con dolor típico', 'Igual que SDST: reperfundir', 'Pedir enzimas o ecocardiograma'],
          say: 'Bloqueo de rama izquierda nuevo con dolor típico: se maneja como supradesnivel y se reperfunde. Pedir enzimas o un ecocardiograma retrasa.' },
        { cells: ['Infra V1-V3 con R alta', 'Pedir V7-V9: posterior', 'Tratarlo como SCASEST'],
          say: 'Infradesnivel de V uno a V tres con R alta: es un infarto posterior. Se piden V siete a V nueve, y no se trata como un síndrome sin supradesnivel.' },
        { cells: ['Inferior hipotenso, pulmón limpio', 'V4R; volumen', 'Nitroglicerina o furosemida'],
          say: 'Infarto inferior hipotenso con pulmones limpios: ventrículo derecho. Se toma V cuatro R y se da volumen. La nitroglicerina y la furosemida lo hacen colapsar.' },
        { cells: ['Hemodinamia en ≤ 120 min', 'Angioplastía primaria', 'Trombolizar de rutina'],
          say: 'Si la angioplastía se puede hacer en ciento veinte minutos o menos, ese es el camino. Trombolizar de rutina en ese caso es un error.' },
        { cells: ['Hemodinamia a > 120 min', 'Tenecteplase ≤ 30 min y traslado', 'Esperar el traslado sin fibrinolizar'],
          say: 'Si el centro está a más de ciento veinte minutos, tenecteplase en treinta minutos y traslado. Esperar el viaje sin fibrinolizar pierde músculo.' },
        { cells: ['ACV isquémico hace 2 meses', 'Angioplastía aunque tarde', 'Fibrinólisis a media dosis'],
          say: 'Accidente cerebrovascular isquémico hace dos meses: contraindicación absoluta. Va a angioplastía aunque tarde, y la media dosis no lo hace seguro.' },
        { cells: ['ST baja < 50% a los 90 min', 'Angioplastía de rescate', 'Repetir la fibrinólisis'],
          say: 'Si a los noventa minutos el ST bajó menos de la mitad: angioplastía de rescate. Repetir la fibrinólisis no es la respuesta.' },
        { cells: ['IAM tras cocaína', 'Benzodiacepinas, nitratos, reperfundir', 'Betabloqueador'],
          say: 'Infarto después de cocaína: benzodiacepinas, nitratos y reperfusión. El betabloqueador está contraindicado.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 56 años, fumador e hipertenso, consulta en un SAPU rural por dolor torácico opresivo de 1 hora, irradiado a la mandíbula, con diaforesis. ECG a los 5 minutos: supradesnivel del ST de 3 mm en DII, DIII y aVF, con infradesnivel en DI y aVL; V3R-V4R sin supradesnivel. El hospital con hemodinamia está a 3 horas. PA 130/80 mmHg, FC 68 lpm, pulmones limpios, peso 74 kg. Sin antecedentes de ACV, sangrado ni cirugías recientes.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Trasladar a angioplastía primaria sin fibrinólisis previa' },
        { letter: 'B', text: 'Tenecteplase 40 mg en bolo, aspirina, clopidogrel 300 mg y enoxaparina, y trasladar' },
        { letter: 'C', text: 'Esperar la troponina y repetir el ECG en 6 horas' },
        { letter: 'D', text: 'Tenecteplase 50 mg y alta si el dolor cede' },
        { letter: 'E', text: 'Nitroglicerina y morfina, y observación en el SAPU' },
      ],
      correct: 'B',
      explanation: 'SCACEST inferior (imagen especular en DI y aVL) sin compromiso del ventrículo derecho, con hemodinamia a 3 horas: la angioplastía no es posible en 120 minutos, así que corresponde fibrinólisis en ≤ 30 minutos con tenecteplase según peso (74 kg: 40 mg), con aspirina 250 mg, clopidogrel 300 mg y enoxaparina, y traslado a un centro con hemodinamia: rescate si el ST no baja más de 50% a los 60-90 minutos, o coronariografía en 2-24 horas si la fibrinólisis fue exitosa.',
      say: {
        stem: 'Un hombre de cincuenta y seis años, fumador e hipertenso, llega a un SAPU rural con una hora de dolor opresivo irradiado a la mandíbula. El electrocardiograma muestra supradesnivel de tres milímetros en DII, DIII y aVF, con infradesnivel en DI y aVL, y las derechas son normales. La hemodinamia está a tres horas. Está estable, con pulmones limpios, pesa setenta y cuatro kilos y no tiene contraindicaciones.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: trasladar a angioplastía sin fibrinólisis; tenecteplase cuarenta miligramos con aspirina, clopidogrel y enoxaparina, y trasladar; esperar la troponina; tenecteplase cincuenta miligramos y alta si cede el dolor; o nitroglicerina, morfina y observación. Piénsalo.',
        answer: 'Es la B. Es un infarto inferior, con imagen especular, y la angioplastía está a tres horas, más de ciento veinte minutos. Entonces se fibrinoliza en el SAPU, en treinta minutos o menos, con tenecteplase según peso: cuarenta miligramos para setenta y cuatro kilos, más aspirina, clopidogrel y enoxaparina. La A tienta, pero esperar tres horas pierde músculo. Y la D falla dos veces: la dosis no corresponde, y el fibrinolizado siempre se traslada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 46',
      stem: 'Un paciente de 62 años, con antecedentes de dislipidemia y diabetes en tratamiento con dieta e hipoglicemiantes orales, consulta por dolor toráxico opresivo irradiado a ambos hombros intenso EVA 9/10, asociado a disnea y sudoración. Al examen físico, su presión arterial es 140/70 mmHg con frecuencia cardiaca de 80 latidos por minuto. Presenta RR3T con presencia de R3, murmullo pulmonar presente con crépitos bibasales. Electrocardiagrama: SDST en V1-V4.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Tratamiento anticoagulante' },
        { letter: 'B', text: 'Tratamiento antiplaquetario' },
        { letter: 'C', text: 'Solicitar AngioTAC de tórax' },
        { letter: 'D', text: 'Ecocardiograma bidimensional' },
        { letter: 'E', text: 'Coronariografía de urgencia' },
      ],
      correct: 'E',
      explanation: 'SCACEST anterior (V1-V4, descendente anterior) con tercer ruido y crépitos (Killip II): lo que cambia el pronóstico es reperfundir, con coronariografía de urgencia para angioplastía primaria. Antiagregar y anticoagular acompañan, pero no son la conducta principal.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un hombre de sesenta y dos años, diabético y dislipidémico, tiene dolor torácico opresivo intenso con disnea y sudoración. Tiene un tercer ruido y crépitos en ambas bases, y el electrocardiograma muestra supradesnivel de V uno a V cuatro.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: anticoagulante; antiplaquetario; angioTAC de tórax; ecocardiograma; o coronariografía de urgencia. Piénsalo.',
        answer: 'Es la E. Es un infarto anterior, por la descendente anterior, y además con insuficiencia cardíaca, un Killip dos. Lo que cambia su pronóstico es abrir la arteria: coronariografía de urgencia para angioplastía primaria. La B tienta, porque el antiagregante se da de inmediato, pero es un coadyuvante, no la conducta que se pregunta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 60',
      stem: 'Un paciente de 65 años, diabético e hipertenso, consulta por dolor precordial opresivo intenso, EVA: 9/10, asociado a malestar general y disnea. Al examen físico con frecuencia cardiaca de 90 por minuto, presión arterial de 150/90 mmHg, al examen cardiaco se ausculta un ritmo regular y tercer ruido. Se realiza estudio con electrocardiograma que muestra supradesnivel del segmento ST en DII, DIII y AVF.',
      question: 'Diagnóstico más probable:',
      options: [
        { letter: 'A', text: 'Infarto de pared anterior' },
        { letter: 'B', text: 'Infarto de pared inferior' },
        { letter: 'C', text: 'Pericarditis' },
        { letter: 'D', text: 'Infarto de pared posterior' },
        { letter: 'E', text: 'Infarto de pared lateral' },
      ],
      correct: 'B',
      explanation: 'DII, DIII y aVF son las derivaciones inferiores: infarto de pared inferior, habitualmente por la coronaria derecha. Obliga a tomar V3R-V4R. La pericarditis da un supradesnivel difuso y cóncavo, sin territorio ni imagen especular.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un hombre de sesenta y cinco años, diabético e hipertenso, tiene dolor precordial opresivo intenso con disnea. El electrocardiograma muestra supradesnivel del ST en DII, DIII y aVF.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: infarto anterior; infarto inferior; pericarditis; infarto posterior; o infarto lateral. Piénsalo.',
        answer: 'Es la B. DII, DIII y aVF miran la pared inferior, y la culpable suele ser la coronaria derecha. Por eso, en este paciente pides V cuatro R. La C tienta porque la pericarditis también sube el ST, pero lo hace en forma difusa, sin respetar territorios y sin imagen especular.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 55',
      stem: 'Paciente de 63 años, fumador y diabético, que hace una hora comienza con dolor torácico opresivo, intenso, que se irradia a cuello, con diaforesis y sensación de angustia. Se solicita un electrocardiograma, que muestra ritmo sinusal, a 80 lpm, con bloqueo completo de rama izquierda, que no se había visualizado en electrocardiogramas previos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar enzimas cardíacas' },
        { letter: 'B', text: 'Solicitar angiografía pulmonar' },
        { letter: 'C', text: 'Solicitar ecocardiograma transesofágico' },
        { letter: 'D', text: 'Instalar marcapaso externo transitorio' },
        { letter: 'E', text: 'Iniciar terapia de reperfusión miocárdica precoz' },
      ],
      correct: 'E',
      explanation: 'El bloqueo completo de rama izquierda nuevo con dolor típico es un equivalente de SCACEST: se reperfunde de inmediato, con angioplastía primaria si es posible en ≤ 120 minutos o con fibrinólisis si no. Esperar las enzimas retrasa la reperfusión.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un hombre de sesenta y tres años, fumador y diabético, tiene desde hace una hora dolor torácico opresivo irradiado al cuello, con sudoración. El electrocardiograma muestra un bloqueo completo de rama izquierda que no estaba en sus electrocardiogramas previos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: enzimas cardíacas; angiografía pulmonar; ecocardiograma transesofágico; marcapaso transitorio; o reperfusión precoz. Piénsalo.',
        answer: 'Es la E. Un bloqueo de rama izquierda nuevo con dolor típico vale como supradesnivel, y se reperfunde de inmediato. La A es la trampa: pedir enzimas y esperar es exactamente lo que no se hace en un infarto con supradesnivel o su equivalente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 44',
      stem: 'Un paciente de 23 años consulta en el servicio de urgencia, por dolor torácico de 2 horas de evolución, intenso, asociado a diaforesis y palpitaciones, que inició algunos minutos después de haber inhalado cocaína. Al examen físico presenta FC: 120x’, PA: 190/120 mmHg, ritmo regular en dos tonos, sin soplos. Su electrocardiograma muestra supradesnivel de segmento ST en las derivaciones de la pared anterior.',
      question: '¿Qué fármaco está contraindicado en el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Estreptoquinasa' },
        { letter: 'B', text: 'Clopidogrel' },
        { letter: 'C', text: 'Nitroglicerina' },
        { letter: 'D', text: 'Atenolol' },
        { letter: 'E', text: 'Diazepam' },
      ],
      correct: 'D',
      explanation: 'En el infarto por cocaína el betabloqueador está contraindicado: deja sin oposición el efecto alfa-adrenérgico y agrava el vasoespasmo y la hipertensión. Se usan benzodiacepinas y nitratos, y se reperfunde como cualquier SCACEST.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un joven de veintitrés años tiene dolor torácico intenso con sudoración, que empezó minutos después de inhalar cocaína. Está taquicárdico e hipertenso, y el electrocardiograma muestra supradesnivel en la pared anterior.',
        question: '¿Qué fármaco está contraindicado?',
        options: 'Las opciones: estreptoquinasa; clopidogrel; nitroglicerina; atenolol; o diazepam. Piénsalo.',
        answer: 'Es la D. Con cocaína, el betabloqueador deja sin freno el efecto alfa y empeora el vasoespasmo y la hipertensión. Por eso está contraindicado. La C tienta porque está hipertenso, pero la nitroglicerina sí se usa, igual que el diazepam, y el infarto se reperfunde como cualquier otro.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: infarto con supradesnivel',
      cards: [
        { title: 'Reconocer', tag: 'El ECG manda', kind: 'key', items: [
          { t: 'ECG ≤ 10 min; no esperar troponina', d: 'Clínica + ECG = diagnóstico',
            say: 'Cerremos con las reglas de oro. Electrocardiograma en diez minutos, y nunca se espera la troponina para reperfundir.' },
          { t: '≥ 1 mm en 2 contiguas; V2-V3 más', d: 'BCRI nuevo y posterior = equivalentes',
            say: 'Un milímetro en dos derivaciones contiguas, con más exigencia en V dos y V tres. El bloqueo de rama izquierda nuevo y el infarto posterior valen como supradesnivel.' },
          { t: 'Inferior: V4R siempre', d: 'VD: volumen, nada de nitratos',
            say: 'En el infarto inferior, V cuatro R siempre; si el ventrículo derecho está comprometido, volumen y nada de nitratos.' },
        ] },
        { title: 'Reperfundir', tag: 'Contra el reloj', kind: 'alert', items: [
          { t: '≤ 120 min: angioplastía primaria', d: 'Si no: tenecteplase ≤ 30 min y traslado',
            say: 'Angioplastía si se puede en ciento veinte minutos; si no, tenecteplase en treinta minutos y traslado.' },
          { t: 'Shock o contraindicación: ACTP', d: 'Aunque tarde más',
            say: 'El shock y la contraindicación de fibrinólisis van a angioplastía aunque tarde más.' },
          { t: 'ST baja < 50%: rescate', d: 'Éxito: coronariografía 2-24 h',
            say: 'Y si el ST no baja más de la mitad a los noventa minutos, angioplastía de rescate. Si te llevas una sola idea de hoy: ante un supradesnivel, la pregunta no es qué examen pedir, sino cuánto tardas en abrir la arteria. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Infarto con supradesnivel del ST: del dolor a la reperfusión',
    root: N('start', 'Dolor torácico isquémico', 'ECG en ≤ 10 minutos',
      'Llega un paciente con dolor torácico opresivo. Lo primero es el electrocardiograma, interpretado en diez minutos o menos.',
      ['Sin supradesnivel', N('q', 'SCASEST o dolor no coronario', 'ECG seriado y troponina',
        'Si no hay supradesnivel ni equivalentes, repites el electrocardiograma cada quince a treinta minutos y pides troponina: es el camino del síndrome sin supradesnivel.')],
      ['SDST o BCRI nuevo', N('alert', 'SCACEST', 'Aspirina, P2Y12 y anticoagulante',
        'Si hay supradesnivel en dos derivaciones contiguas, o un bloqueo de rama izquierda nuevo, es un infarto con supradesnivel. Das aspirina masticada, el segundo antiagregante y un anticoagulante, y activas la red de reperfusión.',
        ['Angioplastía en ≤ 120 min', N('ok', 'Angioplastía primaria', 'Puerta-balón ≤ 90 min',
          'Si la angioplastía se puede hacer en ciento veinte minutos o menos, el paciente viaja directo a hemodinamia. Es la estrategia de elección.')],
        ['Shock o contraindicación', N('refer', 'Angioplastía siempre', 'Sin importar el tiempo',
          'Si está en shock, o tiene una contraindicación de fibrinólisis, va a angioplastía aunque tarde más de ciento veinte minutos.')],
        ['Más de 120 min', N('do', 'Fibrinólisis', 'Tenecteplase ≤ 30 min y traslado',
          'Si la angioplastía tarda más de ciento veinte minutos, tenecteplase según peso en treinta minutos o menos, con clopidogrel y enoxaparina, y traslado.',
          ['ST baja más de la mitad', N('ok', 'Farmacoinvasiva', 'Coronariografía en 2-24 h',
            'Si a los sesenta a noventa minutos el ST bajó más de la mitad, la fibrinólisis funcionó, y se hace una coronariografía entre dos y veinticuatro horas.')],
          ['ST no baja o sigue el dolor', N('alert', 'Angioplastía de rescate', 'Inmediata',
            'Si el ST no bajó lo suficiente o el dolor sigue, la fibrinólisis falló: angioplastía de rescate inmediata.')],
        )],
      )],
    ),
  },
};
