// Clase 11.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_3.cjs (cir-09, classId cirugia-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El orden que salva: qué se trata primero y qué nunca se hace a ciegas',
      say: 'Bienvenido. Empezamos el bloque de trauma con el protocolo ATLS: la forma ordenada de evaluar a un politraumatizado grave. Es un tema muy rentable, porque casi todas las preguntas se resuelven con una sola idea: tratas primero la lesión que mata primero, en un orden fijo que nunca te saltas. Vamos a ese orden.',
    },

    {
      type: 'points',
      kicker: 'Por qué existe el ATLS',
      title: 'Los tres momentos en que muere un politraumatizado',
      cards: [
        { title: 'Distribución trimodal', tag: 'Tres picos de mortalidad', kind: 'key', items: [
          { t: 'Primer pico: segundos', d: 'Lesiones incompatibles con la vida',
            say: 'Antes de entrar al protocolo, entiende para qué sirve. La mortalidad del trauma tiene tres picos. El primero es en segundos: lesiones tan graves, como una rotura de la aorta, que nada en un hospital las puede evitar. Ahí solo sirve la prevención, no la medicina de urgencia.' },
          { t: 'Segundo pico: la hora dorada', d: 'Aquí actúa el ATLS',
            say: 'El segundo pico es en minutos u horas, la llamada hora dorada: hematomas intracraneales, neumotórax a tensión, rotura de bazo o hígado, shock hemorrágico. Este es exactamente el grupo que el ATLS busca salvar, porque son lesiones tratables si actúas rápido y en el orden correcto.' },
          { t: 'Tercer pico: días después', d: 'Sepsis y falla de varios órganos',
            say: 'Y el tercer pico es días o semanas después, por sepsis y falla de varios órganos en la unidad de paciente crítico. Con esa idea clara, vamos al protocolo que ataca el segundo pico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Evaluación primaria',
      title: 'A, B, C, D, E: el orden que no se salta',
      nodes: [
        { id: 'ing', col: 0, row: 1, k: 'start', t: 'Politraumatizado grave', s: 'Evaluación y reanimación juntas' },
        { id: 'a', col: 1, row: 0, k: 'alert', t: 'A: vía aérea', s: 'Con control cervical' },
        { id: 'b', col: 1, row: 1, k: 'alert', t: 'B: ventilación', s: 'Buscar lesiones que matan ya' },
        { id: 'c', col: 1, row: 2, k: 'alert', t: 'C: circulación', s: 'Detener la hemorragia' },
        { id: 'd', col: 2, row: 1, k: 'effect', t: 'D: neurológico', s: 'Glasgow y pupilas' },
        { id: 'e', col: 3, row: 1, k: 'good', t: 'E: exposición', s: 'Evitar la hipotermia' },
      ],
      edges: [
        { from: 'ing', to: 'a' }, { from: 'a', to: 'b' }, { from: 'b', to: 'c' },
        { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
      ],
      steps: [
        { show: ['ing'], note: 'Se evalúa y se reanima al mismo tiempo',
          say: 'Un politraumatizado grave no se evalúa por partes mientras nadie hace nada. La evaluación y la reanimación van juntas, y siguen siempre el mismo orden: tratas primero lo que mata primero. Mira este esquema: cinco letras, siempre en el mismo orden.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-09/S1_abcde__propio.svg', label: 'ABCDE', at: 'Mira este esquema', credit: 'Dibujo propio (esquema)' } },
        { show: ['a'], note: 'GCS de 8 o menos: vía aérea definitiva',
          say: 'El paso A es la vía aérea, con control cervical estricto. Mantienes el cuello alineado con las dos manos, y solo retiras el collar para intubar. ¿Cuándo intubas? Si el paciente está en apnea, si tiene una quemadura de la vía aérea, un tórax volante grave, o si su Glasgow es de ocho puntos o menos: ahí ya no puede proteger su propia vía aérea.' },
        { show: ['a'], note: 'Si falla la intubación, rescate quirúrgico',
          say: 'Y si no logras intubarlo después de dos o tres intentos, el rescate ya no es insistir: es quirúrgico, una cricotiroidotomía.' },
        { show: ['b'], note: 'Aquí buscas lo que mata en segundos',
          say: 'El paso B es la ventilación. Aquí buscas el neumotórax a tensión, el neumotórax abierto y el hemotórax masivo, porque matan en minutos. De estos te voy a hablar en detalle en la próxima clase; hoy quédate con la idea central: se buscan y se tratan de inmediato, dentro de este mismo paso B, antes de seguir.' },
        { show: ['c'], note: 'Dos vías gruesas y ácido tranexámico antes de las tres horas',
          say: 'El paso C es la circulación. Primero detienes cualquier hemorragia externa con presión directa firme, o un torniquete si es en una extremidad. Después instalas dos vías venosas gruesas, en el antebrazo, y empiezas a reponer con sangre, plasma y plaquetas en partes iguales, más ácido tranexámico en las primeras tres horas del trauma, porque después de ese plazo deja de servir.' },
        { show: ['c'], note: 'El suero fisiológico se limita a un litro',
          say: 'Y ojo con un dato que se pregunta seguido: el suero fisiológico se limita a un litro. Pasar más solo diluye la sangre y empeora la coagulación.' },
        { show: ['d'], note: 'Nivel de conciencia y pupilas',
          say: 'El paso D es el estado neurológico: calculas el Glasgow y revisas las pupilas, buscando asimetría.' },
        { show: ['e'], note: 'Desvestir completo y calentar de inmediato',
          say: 'Y el paso E es exponer al paciente por completo, cortando la ropa, girándolo en bloque para revisar la espalda, y cubriéndolo enseguida con mantas térmicas y sueros tibios. Parece un detalle menor, pero la hipotermia es una de las tres cosas que puede matar a este paciente en pabellón, y ya vamos a ver por qué.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Vía aérea definitiva',
      title: 'Abrir, intubar y confirmar',
      cards: [
        { title: 'Abrir la vía aérea', tag: 'Sin extender el cuello', kind: 'key', items: [
          { t: 'Tracción mandibular', d: 'Con control manual del cuello',
            say: 'Vamos a la vía aérea en detalle. En el trauma abres la vía con tracción mandibular, o elevación del mentón, sin extender el cuello, mientras alguien mantiene la columna cervical alineada. Aspiras sangre y secreciones, y sacas cuerpos extraños bajo visión directa.' },
          { t: 'Cánula de Guedel', d: 'Nasofaríngea: no si hay fractura de base',
            say: 'Si el paciente está inconsciente y sin reflejo nauseoso, pones una cánula orofaríngea, la de Guedel. La nasofaríngea se evita si sospechas fractura de base de cráneo. Oxigenas con mascarilla con reservorio y ventilas con bolsa mientras preparas la vía definitiva.' },
        ] },
        { title: 'Intubación orotraqueal', tag: 'Secuencia rápida', kind: 'criteria', items: [
          { t: 'Indicaciones', d: 'Apnea, Glasgow 8 o menos, obstrucción',
            say: 'La intubación orotraqueal se indica ante apnea, Glasgow de ocho o menos, obstrucción o riesgo de obstrucción de la vía aérea, hipoxemia que no mejora con oxígeno, o inestabilidad hemodinámica grave.' },
          { t: 'Preoxigenar, secuencia rápida', d: 'Etomidato y succinilcolina',
            say: 'Preoxigenas, mantienes el cuello alineado con un ayudante, y haces secuencia rápida con un hipnótico, etomidato, y un relajante, succinilcolina. Con laringoscopía de hoja curva ves las cuerdas, pasas el tubo y inflas el balón.' },
          { t: 'Confirmar con capnografía', d: 'Fijo a 21-23 cm en la comisura',
            say: 'El tubo se fija a veintiuno o veintitrés centímetros en la comisura, y se confirma con capnografía, que es el estándar. Después auscultas epigastrio y ambos tórax, y pides una radiografía. Un tubo en el esófago no da dióxido de carbono; si solo ventila un pulmón, está en el bronquio derecho. Cada intento dura menos de treinta segundos, y tras dos o tres fallidos pasas a la vía de rescate.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Vía aérea de rescate',
      title: 'No puedo intubar ni ventilar',
      cards: [
        { title: 'Cricotiroidotomía', tag: 'El rescate en urgencia', kind: 'alert', items: [
          { t: 'Membrana cricotiroidea', d: 'Entre tiroides y cricoides',
            say: 'Cuando no puedes intubar ni ventilar, por edema o trauma laríngeo, trauma facial masivo o un cuerpo extraño, el rescate es la cricotiroidotomía. Identificas la membrana cricotiroidea, entre el cartílago tiroides y el cricoides, y estabilizas la laringe con la mano no dominante. Mira este esquema del cuello: la incisión va justo sobre el cartílago cricoides, en la línea media.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-09/03_cricotiroidotomia-esquema__sherman_p234.jpg', label: 'Dónde se corta', at: 'Mira este esquema', credit: 'Atlas of Clinical Emergency Medicine (Sherman), p. 234' } },
          { t: 'Incisión vertical, luego horizontal', d: 'Tubo pequeño 5-6 mm con balón',
            say: 'Haces una incisión vertical de piel de tres o cuatro centímetros, luego una incisión horizontal de la membrana, dilatas e introduces un tubo pequeño, de cinco a seis milímetros, con balón. Confirmas con capnografía.' },
          { t: 'Menores de 12 años', d: 'Punción con aguja gruesa',
            say: 'En menores de doce años la técnica quirúrgica está contraindicada: se usa la punción con aguja gruesa. Las complicaciones son sangrado, falso trayecto y lesión de cuerdas vocales o tiroides.' },
        ] },
        { title: 'Traqueostomía', tag: 'Derivar, no es urgencia', kind: 'pharma', items: [
          { t: 'Electiva o semiurgente', d: 'La hace el especialista',
            say: 'La traqueostomía no es la vía de rescate: es más lenta, sangra más y exige hiperextender el cuello. Es un procedimiento electivo o semiurgente del especialista, para ventilación mecánica prolongada, más de diez a catorce días, o secuelas con riesgo de aspiración.' },
          { t: 'Sangrado centinela', d: 'Puede anunciar fístula traqueoinnominada',
            say: 'Tú debes reconocer sus complicaciones: hemorragia, y ojo, un sangrado centinela puede anunciar una fístula traqueoinnominada; también neumotórax, obstrucción de la cánula y estenosis traqueal tardía.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Shock en el trauma',
      title: 'Todo shock es hemorrágico hasta demostrar lo contrario',
      head: ['Clase ATLS', 'Pérdida', 'Hallazgos'],
      rows: [
        { cells: ['I', 'Menos de 15 %', 'Signos normales'],
          say: 'En el trauma todo shock se considera hemorrágico hasta demostrar lo contrario, y la hemorragia se clasifica en cuatro clases. La clase uno es una pérdida de menos del quince por ciento, hasta setecientos cincuenta mililitros, con signos normales.' },
        { cells: ['II', '15-30 %', 'Taquicardia, pulso de presión disminuido'],
          say: 'La clase dos, entre quince y treinta por ciento: taquicardia y presión de pulso disminuida.' },
        { cells: ['III', '30-40 %', 'FC > 120, hipotensión, oliguria, confusión'],
          say: 'La clase tres, treinta a cuarenta por ciento, mil quinientos a dos mil mililitros: taquicardia sobre ciento veinte, hipotensión, oliguria y confusión. Aquí ya hay hipotensión.' },
        { cells: ['IV', 'Más de 40 %', 'Colapso, anuria, compromiso de conciencia'],
          say: 'Y la clase cuatro, más del cuarenta por ciento: colapso, anuria y compromiso de conciencia.' },
        { cells: ['Obstructivo', 'Neumotórax a tensión, taponamiento', 'Ingurgitación yugular'],
          say: 'No todo shock es hemorragia. El obstructivo, por neumotórax a tensión o taponamiento, viene con ingurgitación yugular. El neurogénico, por lesión medular, y rara vez el cardiogénico por contusión miocárdica. La respuesta al bolo inicial, rápida, transitoria o nula, define si necesitas transfusión y cirugía urgente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trauma raquimedular',
      title: 'Sospechar y inmovilizar',
      cards: [
        { title: 'Cuándo sospechar', tag: 'Mecanismo y signos', kind: 'key', items: [
          { t: 'Mecanismo de riesgo', d: 'Tránsito, caída de altura, zambullida',
            say: 'Sospechas un trauma raquimedular ante un mecanismo de riesgo, un accidente de tránsito, una caída de altura o una zambullida, y ante dolor cervical o dorsolumbar.' },
          { t: 'Déficit, priapismo, respiración abdominal', d: 'O pérdida de esfínteres',
            say: 'También si hay déficit sensitivo o motor, priapismo, respiración abdominal o pérdida del control de esfínteres.' },
        ] },
        { title: 'Shock neurogénico', tag: 'Lesión sobre T6', kind: 'alert', items: [
          { t: 'Hipotensión con bradicardia', d: 'Piel tibia; el hemorrágico: taquicardia, piel fría',
            say: 'El shock neurogénico cursa con hipotensión y bradicardia, con piel tibia, a diferencia del hemorrágico, que da taquicardia y piel fría. Pero ojo: en un politraumatizado hipotenso primero se descarta hemorragia.' },
        ] },
        { title: 'Manejo inicial', tag: 'Inmovilizar y derivar', kind: 'pharma', items: [
          { t: 'Collar, tabla, traslado en bloque', d: 'PAM sobre 85 mmHg',
            say: 'El manejo es inmovilización completa con collar rígido, tabla larga y traslado en bloque, ABCDE con oxígeno, y evitar la hipotensión, manteniendo la presión arterial media sobre ochenta y cinco con volumen y vasopresor. Sonda vesical y un examen neurológico registrado. No se recomiendan los corticoides de rutina, y se traslada a un centro con neurocirugía o columna.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Radiografía cervical',
      title: 'Cómo leer la columna cervical',
      cards: [
        { title: 'La proyección', tag: 'De C1 a T1', kind: 'criteria', items: [
          { t: 'Lateral hasta C7-T1', d: 'Si no se ve: nadador o TAC',
            say: 'La radiografía lateral debe mostrar desde la primera vértebra cervical hasta la unión entre la séptima cervical y la primera torácica. Si no se ve completa, repites en posición de nadador o pides TAC, y se complementa con proyección anteroposterior y transoral para el odontoides.' },
          { t: 'Alineación, huesos, espacios, partes blandas', d: 'Prevertebral > 7 mm en C2 o 21 mm en C6',
            say: 'La lees en orden: alineación, con las líneas vertebral anterior, posterior, espinolaminar y de las apófisis espinosas; huesos; espacios discales; y partes blandas. Más de siete milímetros a nivel de la segunda cervical, o veintiuno a nivel de la sexta, sugiere hematoma.' },
        ] },
        { title: 'Cuándo y qué más', tag: 'TAC y criterios NEXUS', kind: 'key', items: [
          { t: 'Trauma mayor: TAC', d: 'Una radiografía normal no descarta lesión ligamentosa',
            say: 'En el trauma mayor el estudio de elección es la TAC de columna cervical. Una radiografía normal no descarta una lesión ligamentosa.' },
          { t: 'NEXUS negativo: sin imágenes', d: 'Alerta, sin intoxicación, sin dolor ni déficit',
            say: 'Y en el paciente alerta, sin intoxicación, sin dolor de línea media, sin déficit neurológico ni lesión dolorosa que distraiga, los criterios NEXUS permiten no pedir imágenes.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Anexos',
      title: 'Dos sondas que a veces no se pueden instalar',
      cards: [
        { title: 'Sonda Foley', tag: 'Ojo con la uretra', kind: 'alert', items: [
          { t: 'Uretrorragia o próstata flotante', d: 'Sangre en el meato, hematoma en el perineo',
            say: 'Después del ABC vienen dos sondas, y ambas tienen una contraindicación que se pregunta mucho. La Foley te sirve para medir la orina cada hora, pero antes de instalarla revisa la uretra: si hay sangre en el meato, un hematoma en el perineo o la próstata se siente flotando al tacto rectal, algo se rompió ahí.' },
          { t: 'Nunca a ciegas', d: 'Va cistostomía o uretrografía primero',
            say: 'Con cualquiera de esos signos, jamás metas la sonda a ciegas: pides una uretrografía retrógrada, o instalas directamente una cistostomía suprapúbica. Meter la Foley igual puede completar la rotura de la uretra. En esta uretrografía, mira la flecha: el contraste se escapa por la uretra rota.',
      photo: { src: 'biblioteca/10_cirugia/cirugia-09/02_uretrografia-lesion-uretral__bailey-love_p227.jpg', label: 'Uretrografía: fuga (flecha)', at: 'En esta uretrografía', credit: 'Bailey & Love 27.ª ed., Fig. 14.28' } },
        ] },
        { title: 'Sonda nasogástrica', tag: 'Ojo con la base del cráneo', kind: 'alert', items: [
          { t: 'Ojos de mapache, signo de Battle', d: 'O salida de líquido claro por nariz u oído',
            say: 'La otra sonda es la nasogástrica, para vaciar el estómago. Pero si el paciente tiene los ojos de mapache, un moretón detrás de la oreja, o le sale líquido claro por la nariz o el oído, sospechas una fractura de la base del cráneo. Mira estos ojos de mapache: el moretón rodea ambos ojos sin haber golpe directo.',
      photo: { src: 'biblioteca/10_cirugia/cirugia-09/01_ojos_de_mapache__commons.jpg', label: 'Ojos de mapache', at: 'Mira estos ojos', credit: 'Wikimedia Commons «Bilateral periorbital ecchymosis (raccoon eyes).jpg», Public domain, Marion County Sheriff\'s Office' } },
          { t: 'Se pasa por la boca', d: 'Nunca por la nariz en ese escenario',
            say: 'Ahí la sonda nunca va por la nariz, porque puede meterse por la fractura hasta el lóbulo frontal. Se instala por la boca, orogástrica, y asunto resuelto.' },
        ] },
        { title: 'Evaluación secundaria', tag: 'La mnemotecnia AMPLIA', kind: 'key', items: [
          { t: 'Solo si ya está estable', d: 'Alergias, medicamentos, patologías, ayuno, incidente',
            say: 'Y solo cuando el ABC ya terminó y el paciente está reanimado, viene la evaluación secundaria: la historia con la mnemotecnia AMPLIA, alergias, medicamentos, patologías previas, la última comida y el incidente, más un examen físico completo, de la cabeza a los pies.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cuando el paciente se agota',
      title: 'La tríada letal decide si sigues operando',
      nodes: [
        { id: 'hip', col: 0, row: 0, k: 'cause', t: 'Hipotermia', s: 'Menos de 35 grados' },
        { id: 'aci', col: 0, row: 1, k: 'cause', t: 'Acidosis', s: 'pH bajo siete coma dos' },
        { id: 'coa', col: 0, row: 2, k: 'cause', t: 'Coagulopatía', s: 'La sangre no coagula en la mesa' },
        { id: 'tri', col: 1, row: 1, k: 'risk', t: 'Tríada letal', s: 'Las tres juntas matan al paciente' },
        { id: 'cd', col: 2, row: 1, k: 'alert', t: 'Cirugía de control de daños', s: 'Abreviada, en tres tiempos' },
      ],
      edges: [
        { from: 'hip', to: 'tri' }, { from: 'aci', to: 'tri' }, { from: 'coa', to: 'tri' },
        { from: 'tri', to: 'cd', label: 'obliga a parar' },
      ],
      steps: [
        { show: ['hip'], note: 'El frío por sí solo ya frena la coagulación',
          say: 'Ahora, un escenario que se pregunta seguido: el paciente ya está en pabellón, y las cosas se ponen difíciles. El primer componente es la hipotermia, con la temperatura bajo treinta y cinco grados.' },
        { show: ['aci'], note: 'La perfusión de los tejidos ya falló',
          say: 'El segundo es la acidosis metabólica, con un pH bajo siete coma dos, porque los tejidos llevan rato sin recibir suficiente sangre.' },
        { show: ['coa'], note: 'La sangre ya no coagula en la mesa',
          say: 'Y el tercero es la coagulopatía: la sangre deja de coagular, y ves sangrado difuso en toda la herida.' },
        { show: ['tri'], note: 'Cuando aparecen las tres juntas',
          say: 'Cuando estos tres aparecen juntos, se llama la tríada letal, y es un límite que no puedes cruzar: seguir operando en ese estado termina en la muerte del paciente sobre la mesa.' },
        { show: ['cd'], note: 'Se detiene la cirugía definitiva y se traslada',
          say: 'La conducta es la cirugía de control de daños, en tres tiempos. Primero, controlas el sangrado y la contaminación lo más rápido posible, tapando con compresas. Segundo, cierras el abdomen de forma temporal, sin terminar nada, y trasladas al paciente a la unidad de paciente crítico para que se recaliente y se corrija.' },
        { show: ['cd'], note: 'Recién a las 48 o 72 horas se reconstruye',
          say: 'Y tercero, recién a las cuarenta y ocho o setenta y dos horas, vuelves a pabellón para la reconstrucción definitiva. Acuérdate de esto: cuando hay tríada letal, la prioridad deja de ser terminar la cirugía, y pasa a ser mantener al paciente con vida.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Triage y traslado',
      title: 'Catástrofe, vía venosa y traslado',
      cards: [
        { title: 'Triage START', tag: 'Mayor beneficio para el mayor número', kind: 'criteria', items: [
          { t: 'Verde, negro, rojo, amarillo', d: 'Camina: verde. No respira con vía abierta: negro',
            say: 'El triage ordena a los lesionados cuando los recursos son menores que la demanda; el objetivo es el mayor beneficio para el mayor número. En el método START, si camina es verde. Si no respira después de abrir la vía aérea, es negro.' },
          { t: 'Rojo: FR > 30, llene > 2 s', d: 'O no obedece órdenes simples',
            say: 'Si respira más de treinta veces por minuto, tiene llene capilar mayor de dos segundos o no obedece órdenes simples, es rojo, inmediato. El resto es amarillo, diferido. En urgencias hospitalarias se usa la categorización ESI, con cinco niveles de prioridad. La extricación se hace con inmovilización cervical y de columna antes de mover al atrapado.' },
        ] },
        { title: 'Denudación venosa', tag: 'Derivar', kind: 'pharma', items: [
          { t: 'Safena delante del maléolo', d: 'Hoy se prefiere la vía intraósea',
            say: 'La denudación venosa es la disección de una vena, habitualmente la safena mayor delante del maléolo interno, para pasar un catéter cuando no logras vía periférica ni central. Hoy se prefiere la vía intraósea, en la tibia proximal o el húmero; la denudación la hace el cirujano y se reserva si no hay otra alternativa.' },
        ] },
        { title: 'Traslado', tag: 'Después de estabilizar', kind: 'key', items: [
          { t: 'Estabilizar y no retrasar', d: 'Vía aérea, hemorragia, dos vías, columna',
            say: 'El traslado del traumatizado se hace después de estabilizar, sin retrasarlo por estudios no esenciales: vía aérea asegurada, intubando antes si el Glasgow es de ocho o menos, hemorragias controladas, dos vías venosas, inmovilización y férulas. Coordinas médico a médico, envías un resumen escrito y acompañas con personal que maneje la vía aérea, con monitorización. El destino es un centro con capacidad quirúrgica y unidad de paciente crítico.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El orden ABCDE',
      images: [
        { src: 'animaciones/cirugia-09/A1_abcde.mp4', label: 'Una letra a la vez', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'No avanzar sin resolver',
          say: 'La evaluación primaria va letra por letra: vía aérea con columna cervical, ventilación, circulación, déficit neurológico y exposición. No pasas a la siguiente sin resolver la anterior.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo el protocolo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los errores que más se repiten en trauma',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Glasgow de 8 o menos', 'Intubación con control cervical', 'Hiperextender el cuello o esperar'],
          say: 'Repasemos las trampas. Con Glasgow de ocho o menos, intubas con control cervical. El error es hiperextender el cuello, o esperar a ver si mejora.' },
        { cells: ['Sospecha de neumotórax a tensión', 'Descompresión inmediata', 'Pedir radiografía antes de actuar'],
          say: 'Con sospecha de neumotórax a tensión, descompresión inmediata. Pedir la radiografía antes de actuar solo demora una emergencia de segundos.' },
        { cells: ['Hemorragia externa mayor', 'Presión, torniquete y ácido tranexámico antes de tres horas', 'Pasar más de un litro de suero fisiológico'],
          say: 'Con una hemorragia externa mayor, presión, torniquete y ácido tranexámico antes de las tres horas. Pasar más de un litro de suero fisiológico diluye la coagulación.' },
        { cells: ['Uretrorragia o próstata flotante', 'Cistostomía o uretrografía', 'Instalar sonda Foley a ciegas'],
          say: 'Con uretrorragia o próstata flotante, cistostomía o uretrografía. Instalar la sonda Foley a ciegas puede completar la rotura de la uretra.' },
        { cells: ['Fractura de base de cráneo', 'Sonda orogástrica', 'Sonda nasogástrica por la nariz'],
          say: 'Con fractura de base de cráneo, la sonda va por la boca. Ponerla por la nariz es el error que más se repite en esta pregunta.' },
        { cells: ['Tríada letal en pabellón', 'Cirugía de control de daños', 'Continuar la cirugía definitiva'],
          say: 'Y con la tríada letal ya instalada en pabellón, cirugía de control de daños. Seguir con la cirugía definitiva termina en la muerte del paciente en la mesa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 34 años, motociclista, sufre una colisión de alta energía. Tras una hora de cirugía por una laceración hepática, el anestesista informa temperatura de 34,2 grados, pH arterial de 7,15 y sangrado difuso en napa desde toda la herida operatoria, sin que ningún vaso puntual esté sangrando.',
      question: '¿Cuál es la conducta quirúrgica más adecuada en este momento?',
      options: [
        { letter: 'A', text: 'Continuar la reconstrucción hepática definitiva hasta terminarla' },
        { letter: 'B', text: 'Empaquetar la cavidad con compresas, cerrar en forma temporal y trasladar a la unidad de paciente crítico' },
        { letter: 'C', text: 'Administrar bicarbonato de sodio y seguir operando sin cambios' },
        { letter: 'D', text: 'Realizar un bypass vascular y cerrar la pared por planos' },
        { letter: 'E', text: 'Esperar en pabellón a que la temperatura se normalice sola' },
      ],
      correct: 'B',
      explanation: 'Hipotermia, acidosis y sangrado difuso en napa son la tríada letal instalada. Continuar la cirugía definitiva es lo que más se pregunta como error: la conducta correcta es la cirugía de control de daños, con packing, cierre temporal y traslado a la unidad de paciente crítico.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y cuatro años, motociclista, tras una colisión de alta energía. Lleva una hora de cirugía por una laceración hepática, y el anestesista informa una temperatura de treinta y cuatro coma dos grados, un pH de siete coma quince, y sangrado difuso en napa desde toda la herida, sin que haya ningún vaso puntual sangrando.',
        question: '¿Cuál es la conducta quirúrgica más adecuada en este momento?',
        options: 'Tienes cinco opciones: continuar la reconstrucción hepática hasta terminarla, empaquetar y trasladar a la unidad de paciente crítico, dar bicarbonato y seguir operando, hacer un bypass vascular y cerrar, o esperar en pabellón a que la temperatura mejore sola. Piénsalo.',
        answer: 'Es la B. Fíjate que aquí están las tres piezas juntas: hipotermia, acidosis, y coagulopatía con sangrado difuso. Esa es la tríada letal, y una vez que aparece, seguir operando de forma definitiva mata al paciente en la mesa. La conducta es la cirugía de control de daños: empaquetas con compresas, cierras de forma temporal, y trasladas a la unidad de paciente crítico para recalentar y corregir.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 26',
      stem: 'Paciente de 30 años sufre una caída desde 15 metros de altura, golpeándose contra el suelo. Al examen físico está orientado, con frecuencia cardíaca de 80 y presión arterial de 120/80, con mucho dolor a la compresión de la pelvis, mayor a izquierda. Se solicita una radiografía de pelvis que muestra una fractura pélvica.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Pasar una sonda Foley' },
        { letter: 'B', text: 'Indicar reposo con una hamaca o sábana pélvica' },
        { letter: 'C', text: 'Administrar antibióticos' },
        { letter: 'D', text: 'Realizar cirugía de inmediato' },
        { letter: 'E', text: 'Solicitar ecografía de abdomen y pelvis' },
      ],
      correct: 'B',
      explanation: 'Frente a una fractura de pelvis, lo primero es estabilizar el anillo pélvico externamente, con un tutor externo o, si no está disponible, una sábana o hamaca pélvica, para limitar la hemorragia venosa. La sonda Foley se pospone hasta descartar una lesión uretral asociada.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de treinta años, tras una caída desde quince metros de altura. Está orientado, con signos vitales estables, pero con mucho dolor al comprimir la pelvis, mayor hacia el lado izquierdo. La radiografía confirma una fractura de pelvis.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones son: pasar una sonda Foley, indicar reposo con hamaca o sábana pélvica, dar antibióticos, operar de inmediato, o pedir una ecografía de abdomen. Piénsalo.',
        answer: 'La respuesta es la B. Con una fractura de pelvis, lo primero es reducir el volumen pélvico por fuera, con una sábana o hamaca pélvica, porque ahí se puede esconder una hemorragia venosa enorme. Y fíjate en el distractor: la sonda Foley suena razonable, pero en toda fractura de pelvis primero descartas una lesión uretral, así que se pospone hasta tenerlo claro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 43',
      stem: 'Paciente de 46 años sufre un accidente y presenta una fractura de pelvis. Tiene dolor y salida de sangre fresca por la uretra. Además, se palpa la próstata ascendida en el tacto rectal, y no ha podido orinar.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Pedir un TAC de abdomen y pelvis' },
        { letter: 'B', text: 'Solicitar resonancia magnética' },
        { letter: 'C', text: 'Realizar cistoscopía' },
        { letter: 'D', text: 'Instalar sonda Foley' },
        { letter: 'E', text: 'Instalar una cistostomía' },
      ],
      correct: 'E',
      explanation: 'Uretrorragia y próstata ascendida en un paciente con fractura de pelvis son los signos clásicos de una sección uretral. La sonda Foley está formalmente contraindicada; la conducta es la cistostomía suprapúbica, y luego se estudia con uretrografía retrógrada.',
      say: {
        stem: 'Y otra pregunta real, del EUNACOM de julio de dos mil quince. Paciente de cuarenta y seis años, con una fractura de pelvis. Tiene dolor y sale sangre fresca por la uretra, la próstata se palpa ascendida al tacto rectal, y no ha podido orinar.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: pedir un TAC de abdomen y pelvis, pedir una resonancia magnética, hacer una cistoscopía, instalar sonda Foley, o instalar una cistostomía. Piénsalo.',
        answer: 'Es la E. Este caso junta los tres signos que ya vimos: sangre en el meato, próstata que se siente flotando, y ahora además retención urinaria. Es una sección uretral, y ahí la sonda Foley está prohibida. La conducta es la cistostomía suprapúbica, para vaciar la vejiga sin tocar la uretra rota, y recién después se estudia con una uretrografía.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.014 · Evaluación primaria en trauma",
      "stem": "Hombre de 30 años, motociclista, llega tras una colisión de alta energía. Presenta ronquido y respiración ruidosa, Glasgow 8, presión arterial 90/60 y frecuencia cardíaca 120. Tiene deformidad del muslo derecho, sin sangrado externo activo.",
      "question": "¿Cuál es la primera acción que se debe realizar?",
      "options": [
        {
          "letter": "A",
          "text": "Instalar dos vías venosas gruesas e iniciar cristaloides"
        },
        {
          "letter": "B",
          "text": "Permeabilizar y asegurar la vía aérea con restricción de movimiento de la columna cervical"
        },
        {
          "letter": "C",
          "text": "Solicitar TAC de cerebro"
        },
        {
          "letter": "D",
          "text": "Alinear e inmovilizar la fractura de fémur"
        },
        {
          "letter": "E",
          "text": "Solicitar radiografía de pelvis"
        }
      ],
      "correct": "B",
      "explanation": "La evaluación primaria sigue el orden ABCDE: primero vía aérea con protección cervical. El ronquido y el Glasgow 8 indican una vía aérea comprometida, que mata antes que la hipovolemia. Recién después se evalúa ventilación, circulación, déficit neurológico y exposición.",
      "say": {
        "stem": "Hombre de treinta años, motociclista, tras una colisión de alta energía. Llega roncando, con Glasgow ocho, presión de noventa sobre sesenta y frecuencia cardíaca de ciento veinte. Tiene el muslo derecho deformado, sin sangrado externo activo.",
        "question": "¿Cuál es la primera acción que se debe realizar?",
        "options": "Las opciones: dos vías venosas y cristaloides, asegurar la vía aérea protegiendo la columna cervical, TAC de cerebro, inmovilizar el fémur, o radiografía de pelvis. Piénsalo.",
        "answer": "Es la B. En la evaluación primaria se va por orden, y la A, la vía aérea con protección cervical, siempre va primero: el ronquido y el Glasgow ocho te dicen que está comprometida. Las vías venosas tientan por la hipotensión, pero corresponden a la C, después de asegurar la vía aérea y la ventilación."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.015 · Evaluación secundaria en trauma",
      "stem": "Hombre de 40 años cae desde 4 metros. Se completa la evaluación primaria: vía aérea permeable, ventilación normal, presión arterial 120/80 tras 1 litro de cristaloides, Glasgow 15 y sin lesiones evidentes a la exposición. Se mantiene estable.",
      "question": "¿Cuál es el paso siguiente más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Realizar la evaluación secundaria: anamnesis dirigida y examen físico completo de cabeza a pies, incluido el dorso"
        },
        {
          "letter": "B",
          "text": "Dar de alta con analgesia y control en 48 horas"
        },
        {
          "letter": "C",
          "text": "Realizar laparotomía exploradora"
        },
        {
          "letter": "D",
          "text": "Repetir solo la evaluación primaria cada 5 minutos sin otro examen"
        },
        {
          "letter": "E",
          "text": "Iniciar la evaluación secundaria antes de terminar la evaluación primaria"
        }
      ],
      "correct": "A",
      "explanation": "La evaluación secundaria comienza solo cuando la primaria está completa y el paciente estabilizado. Incluye anamnesis dirigida, con alergias, medicamentos, antecedentes, última comida y mecanismo, y un examen de cabeza a pies, incluido el dorso con rotación en bloque, para pesquisar lesiones no evidentes.",
      "say": {
        "stem": "Hombre de cuarenta años que cae desde cuatro metros. Se completa la evaluación primaria: vía aérea permeable, ventila bien, presión de ciento veinte sobre ochenta después de un litro de suero, Glasgow quince y sin lesiones evidentes. Se mantiene estable.",
        "question": "¿Cuál es el paso siguiente más adecuado?",
        "options": "Las opciones: evaluación secundaria con anamnesis y examen de cabeza a pies, alta con analgesia, laparotomía exploradora, repetir solo la primaria o empezar la secundaria antes de terminar la primaria. Piénsalo.",
        "answer": "Es la A. Con la primaria completa y el paciente estable, toca la secundaria: anamnesis dirigida y examen de cabeza a pies, incluido el dorso, porque una caída de cuatro metros puede esconder lesiones. El alta tienta porque se ve bien, pero sin la evaluación secundaria puedes dejar pasar fracturas o lesiones viscerales."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.022 · Manejo de vía aérea y columna cervical en trauma",
      "stem": "Mujer de 35 años, traída tras un volcamiento, está inconsciente y con ronquido. Se sospecha lesión de columna cervical. No tiene trauma facial ni sangre en la boca.",
      "question": "¿Cuál es la maniobra inicial más adecuada para permeabilizar la vía aérea?",
      "options": [
        {
          "letter": "A",
          "text": "Hiperextensión del cuello con elevación del mentón"
        },
        {
          "letter": "B",
          "text": "Intubación nasotraqueal a ciegas"
        },
        {
          "letter": "C",
          "text": "Retirar el collar cervical para evaluar el cuello"
        },
        {
          "letter": "D",
          "text": "Tracción mandibular manteniendo inmovilización manual alineada de la columna cervical"
        },
        {
          "letter": "E",
          "text": "Colocar a la paciente en posición lateral de seguridad"
        }
      ],
      "correct": "D",
      "explanation": "En trauma con sospecha de lesión cervical, la vía aérea se abre con tracción mandibular, o elevación del mentón sin extender el cuello, manteniendo la inmovilización manual alineada. La hiperextensión puede agravar una lesión medular. Si no se logra una vía aérea adecuada, se avanza a cánula y vía aérea definitiva.",
      "say": {
        "stem": "Mujer de treinta y cinco años tras un volcamiento, inconsciente y roncando. Se sospecha lesión de columna cervical. No tiene trauma facial ni sangre en la boca.",
        "question": "¿Cuál es la maniobra inicial para abrir la vía aérea?",
        "options": "Las opciones: hiperextensión del cuello con elevación del mentón, intubación nasotraqueal a ciegas, retirar el collar, tracción mandibular con inmovilización cervical o posición lateral de seguridad. Piénsalo.",
        "answer": "Es la D. La tracción mandibular abre la vía aérea sin mover el cuello, mientras alguien mantiene la columna alineada. La hiperextensión tienta porque es la maniobra clásica de reanimación básica, pero en trauma puede transformar una fractura cervical en una lesión medular."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.2.020 · Traumatismo raquimedular",
      "stem": "Hombre de 28 años sufre una caída de 5 metros. Ingresa con vía aérea permeable, sin lesiones torácicas ni abdominales evidentes y eco-FAST negativa. Presenta PA 80/45 mmHg, FC 52 lpm, piel tibia y seca, y paraplejia con arreflexia de las cuatro extremidades.",
      "question": "¿Cuál es el tipo de shock más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Shock hipovolémico hemorrágico"
        },
        {
          "letter": "B",
          "text": "Shock séptico"
        },
        {
          "letter": "C",
          "text": "Shock cardiogénico"
        },
        {
          "letter": "D",
          "text": "Shock neurogénico"
        },
        {
          "letter": "E",
          "text": "Shock obstructivo por neumotórax a tensión"
        }
      ],
      "correct": "D",
      "explanation": "La lesión medular cervical o torácica alta interrumpe el tono simpático: hipotensión con bradicardia y piel tibia y seca caracterizan al shock neurogénico, a diferencia del hemorrágico, que cursa con taquicardia y piel fría. Se maneja con volumen prudente y vasopresores, inmovilización espinal y búsqueda activa de hemorragia oculta antes de atribuir todo a la médula.",
      "say": {
        "stem": "Hombre de veintiocho años que cae desde cinco metros. Tiene la vía aérea permeable, sin lesiones torácicas ni abdominales evidentes y una eco FAST negativa. Está hipotenso, con frecuencia cardíaca de cincuenta y dos, piel tibia y seca, y no mueve ni tiene reflejos en las cuatro extremidades.",
        "question": "¿Cuál es el tipo de shock más probable?",
        "options": "Las opciones: hipovolémico hemorrágico, séptico, cardiogénico, neurogénico o obstructivo por neumotórax a tensión. Piénsalo.",
        "answer": "Es la D. Hipotensión con bradicardia y piel tibia, en un traumatizado con lesión medular, es shock neurogénico por pérdida del tono simpático. El hemorrágico tienta porque es el más frecuente en trauma, pero cursa con taquicardia y piel fría."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.2.031 · Shock",
      "stem": "Hombre de 35 años, de 70 kg, ingresa tras un accidente de tránsito con fractura expuesta de fémur. Presenta FC 135 lpm, PA 80/50 mmHg, FR 32 por minuto, llene capilar enlentecido y está ansioso y confuso. Diuresis escasa por sonda.",
      "question": "Según la clasificación ATLS del shock hemorrágico, ¿qué clase presenta y cuál es su manejo?",
      "options": [
        {
          "letter": "A",
          "text": "Clase I; solo observación"
        },
        {
          "letter": "B",
          "text": "Clase II; cristaloides exclusivamente"
        },
        {
          "letter": "C",
          "text": "Clase III; reposición de volumen y transfusión de hemoderivados"
        },
        {
          "letter": "D",
          "text": "Clase I; vasopresores"
        },
        {
          "letter": "E",
          "text": "Clase II; noradrenalina"
        }
      ],
      "correct": "C",
      "explanation": "Taquicardia sobre 120, hipotensión, taquipnea, confusión y oliguria corresponden a un shock hemorrágico clase III (pérdida de 30 a 40% de la volemia, aproximadamente 1.500 a 2.000 mL). Requiere control de la hemorragia, cristaloides tibios limitados y transfusión precoz de glóbulos rojos y hemoderivados. Los vasopresores no tienen rol en el shock hemorrágico inicial.",
      "say": {
        "stem": "Hombre de treinta y cinco años, de setenta kilos, con fractura expuesta de fémur tras un choque. Tiene frecuencia cardíaca de ciento treinta y cinco, presión de ochenta y cincuenta, respira rápido, el llene capilar es lento, está ansioso y confuso, y orina poco.",
        "question": "Según la clasificación ATLS, ¿qué clase de shock presenta y cómo se maneja?",
        "options": "Las opciones: clase uno con observación, clase dos solo con cristaloides, clase tres con volumen y transfusión, clase uno con vasopresores, o clase dos con noradrenalina. Piénsalo.",
        "answer": "Es la C. Taquicardia sobre ciento veinte, hipotensión y confusión es un shock clase tres, con pérdida de treinta a cuarenta por ciento de la volemia, y necesita sangre además de controlar el sangrado. La clase dos tienta, pero en ella la presión todavía se mantiene normal."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.3.008 · Conceptos de manejo en situación de catástrofe (triage, extricación, inmovilización y transporte)",
      "stem": "En un accidente de bus con múltiples víctimas, usted aplica el triage START. Un paciente no puede caminar, respira espontáneamente con una frecuencia de 34 por minuto y tiene pulso radial palpable.",
      "question": "¿Qué categoría de triage le corresponde?",
      "options": [
        {
          "letter": "A",
          "text": "Verde (diferido, puede esperar)"
        },
        {
          "letter": "B",
          "text": "Amarillo (urgente, no inmediato)"
        },
        {
          "letter": "C",
          "text": "Negro (fallecido o expectante)"
        },
        {
          "letter": "D",
          "text": "Rojo (inmediato)"
        },
        {
          "letter": "E",
          "text": "Blanco (sin lesiones)"
        }
      ],
      "correct": "D",
      "explanation": "En el triage START, quien camina es verde. En quien no camina se evalúa la respiración: si no respira tras abrir la vía aérea es negro; si respira con frecuencia mayor de 30 por minuto es rojo. Luego se evalúan la perfusión (llene capilar mayor de 2 segundos o sin pulso radial: rojo) y la obediencia a órdenes simples.",
      "say": {
        "stem": "En un accidente de bus con múltiples víctimas, usted aplica el triage START. Un paciente no puede caminar, respira solo a treinta y cuatro por minuto y tiene pulso radial palpable.",
        "question": "¿Qué categoría le corresponde?",
        "options": "Las opciones: verde, amarillo, negro, rojo o blanco. Piénsalo.",
        "answer": "Es la D. En el START, una frecuencia respiratoria sobre treinta en alguien que no camina lo clasifica como rojo, de atención inmediata. El amarillo tienta porque tiene pulso y respira, pero la taquipnea sobre treinta ya basta para subirlo a rojo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.4.004 · Radiografía de columna cervical",
      "stem": "Hombre de 30 años, motociclista, ingresa con dolor cervical posterior tras un choque. Está inmovilizado con collar cervical. La radiografía lateral de columna cervical solo permite visualizar hasta el borde inferior de C6, sin lesiones evidentes.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Retirar el collar, porque la radiografía es normal"
        },
        {
          "letter": "B",
          "text": "Solicitar electromiografía"
        },
        {
          "letter": "C",
          "text": "Solicitar radiografía con proyecciones en flexión y extensión"
        },
        {
          "letter": "D",
          "text": "Mantener el collar y repetir la radiografía en 1 semana"
        },
        {
          "letter": "E",
          "text": "Solicitar TAC de columna cervical"
        }
      ],
      "correct": "E",
      "explanation": "Una radiografía lateral cervical es adecuada solo si se visualizan las 7 vértebras cervicales y la unión C7-T1, sitio frecuente de lesiones. Si no se visualiza, se debe completar el estudio: actualmente la TAC de columna cervical es el examen de elección en el trauma. Las radiografías dinámicas están contraindicadas en el paciente agudo con dolor.",
      "say": {
        "stem": "Hombre de treinta años, motociclista, con dolor cervical posterior tras un choque, inmovilizado con collar. La radiografía lateral de columna cervical solo llega hasta el borde inferior de C seis, sin lesiones visibles.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: retirar el collar, electromiografía, radiografías en flexión y extensión, mantener el collar y repetir en una semana o TAC de columna cervical. Piénsalo.",
        "answer": "Es la E. La radiografía lateral solo sirve si muestra hasta la unión entre C siete y T uno, que aquí no se ve, así que se completa con TAC. Retirar el collar tienta porque lo visible está normal, pero la lesión podría estar justo en la zona que no se vio."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.007 · Cricoidostomía",
      "stem": "Niño de 7 años, víctima de un accidente de tránsito con trauma facial grave, presenta obstrucción de la vía aérea con desaturación progresiva. Fracasan la intubación orotraqueal y la ventilación con bolsa-mascarilla.",
      "question": "¿Cuál es el procedimiento de rescate de la vía aérea más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Cricotiroidotomía quirúrgica"
        },
        {
          "letter": "B",
          "text": "Traqueostomía reglada en pabellón"
        },
        {
          "letter": "C",
          "text": "Cricotiroidotomía por punción con aguja y ventilación en jet"
        },
        {
          "letter": "D",
          "text": "Intubación nasotraqueal a ciegas"
        },
        {
          "letter": "E",
          "text": "Esperar al anestesiólogo manteniendo oxígeno por mascarilla"
        }
      ],
      "correct": "C",
      "explanation": "Ante un escenario de no intubable y no oxigenable, se requiere una vía aérea quirúrgica. En menores de 12 años la cricotiroidotomía quirúrgica está relativamente contraindicada por riesgo de estenosis subglótica, y se prefiere la punción cricotiroidea con aguja y ventilación en jet. La intubación nasal está contraindicada en trauma facial grave.",
      "say": {
        "stem": "Niño de siete años con un trauma facial grave en un accidente de tránsito, con obstrucción de la vía aérea y desaturación progresiva. Fracasan la intubación y la ventilación con bolsa y mascarilla.",
        "question": "¿Cuál es el procedimiento de rescate más adecuado?",
        "options": "Las opciones: cricotiroidotomía quirúrgica, traqueostomía en pabellón, punción cricotiroidea con aguja y ventilación en jet, intubación nasal a ciegas o esperar al anestesiólogo. Piénsalo.",
        "answer": "Es la C. En un niño menor de doce años la vía aérea quirúrgica de rescate es la punción con aguja, porque el cricoides es pequeño y frágil. La cricotiroidotomía quirúrgica tienta porque es la de elección en adultos, pero en niños arriesga una estenosis subglótica."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.010 · Denudación venosa",
      "stem": "Hombre de 40 años en shock hemorrágico tras un politraumatismo. No ha sido posible canalizar dos vías venosas periféricas y no se dispone de dispositivo intraóseo. Se decide realizar una denudación venosa.",
      "question": "¿Cuál es el sitio clásico de elección para este procedimiento en el adulto?",
      "options": [
        {
          "letter": "A",
          "text": "Vena yugular externa"
        },
        {
          "letter": "B",
          "text": "Vena cefálica en el surco deltopectoral"
        },
        {
          "letter": "C",
          "text": "Vena femoral en el triángulo de Scarpa"
        },
        {
          "letter": "D",
          "text": "Vena subclavia"
        },
        {
          "letter": "E",
          "text": "Vena safena interna, anterior al maléolo medial"
        }
      ],
      "correct": "E",
      "explanation": "La denudación venosa es una técnica de acceso vascular de rescate cuando fracasan las vías periféricas y la vía intraósea. El sitio clásico es la vena safena interna en el tobillo, aproximadamente 2 cm anterior y superior al maléolo medial, por su ubicación constante y superficial. Hoy se prefiere la vía intraósea o central, más rápidas.",
      "say": {
        "stem": "Hombre de cuarenta años en shock hemorrágico por politrauma, en quien no se logró instalar vías periféricas ni hay dispositivo intraóseo disponible. Se decide hacer una denudación venosa.",
        "question": "¿Cuál es el sitio clásico de elección en el adulto?",
        "options": "Las opciones: yugular externa, cefálica en el surco deltopectoral, femoral en el triángulo de Scarpa, subclavia o safena interna por delante del maléolo medial. Piénsalo.",
        "answer": "Es la E. La denudación clásica se hace en la safena interna, justo por delante del maléolo medial, porque ahí es constante y superficial. La femoral tienta por ser una vena grande, pero esa se canaliza por punción, no por denudación."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 90",
      "stem": "Durante la reanimación de un paciente se realiza una intubación orotraqueal.",
      "question": "¿Cuál es el parámetro ideal para confirmar que el tubo quedó en la tráquea?",
      "options": [
        {
          "letter": "A",
          "text": "Pulsometría"
        },
        {
          "letter": "B",
          "text": "Auscultación pulmonar"
        },
        {
          "letter": "C",
          "text": "Capnografía"
        },
        {
          "letter": "D",
          "text": "Oximetría"
        },
        {
          "letter": "E",
          "text": "Expansión torácica"
        }
      ],
      "correct": "C",
      "explanation": "La capnografía con onda continua es el método más confiable para confirmar y monitorizar la posición del tubo en la tráquea, porque detecta CO2 espirado en cada ventilación. La auscultación y la expansión torácica pueden engañar (por ejemplo, en una intubación esofágica), y la oximetría cae tardíamente.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Durante la reanimación de un paciente se le realiza una intubación orotraqueal.",
        "question": "¿Cuál es el parámetro ideal para confirmar que el tubo quedó en la tráquea?",
        "options": "Las opciones: pulsometría, auscultación pulmonar, capnografía, oximetría, o expansión torácica. Piénsalo.",
        "answer": "Es la C. La capnografía detecta dióxido de carbono en cada espiración, y eso solo ocurre si el tubo está en la tráquea. La auscultación tienta porque es lo primero que haces, pero en una intubación esofágica se pueden transmitir ruidos que engañan."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.031 · Traslado del traumatizado",
      "stem": "Mujer de 25 años, víctima de un volcamiento, se encuentra consciente, con dolor cervical y parestesias en ambas manos. El equipo prehospitalario debe extraerla y trasladarla al servicio de urgencia.",
      "question": "¿Cuál es la forma más adecuada de traslado?",
      "options": [
        {
          "letter": "A",
          "text": "Sentada en el asiento del vehículo de emergencia"
        },
        {
          "letter": "B",
          "text": "Inmovilización con collar cervical rígido y tabla espinal, movilizándola en bloque"
        },
        {
          "letter": "C",
          "text": "Permitir que camine hasta la ambulancia si puede hacerlo"
        },
        {
          "letter": "D",
          "text": "Trasladarla en decúbito lateral sin collar"
        },
        {
          "letter": "E",
          "text": "Retirar el casco y el collar para facilitar la evaluación durante el traslado"
        }
      ],
      "correct": "B",
      "explanation": "Ante sospecha de lesión de columna (mecanismo de alta energía, dolor cervical, síntomas neurológicos), la paciente debe trasladarse con restricción de movimiento espinal: collar cervical rígido, tabla espinal o camilla de cuchara, y movilización en bloque con varios rescatadores, manteniendo la alineación del eje cabeza-cuello-tronco hasta descartar la lesión en el hospital.",
      "say": {
        "stem": "Mujer de veinticinco años que sufre un volcamiento, consciente, con dolor cervical y hormigueo en ambas manos, y que debe ser extraída y trasladada a urgencia.",
        "question": "¿Cuál es la forma más adecuada de traslado?",
        "options": "Las opciones: sentada en la ambulancia, collar rígido y tabla espinal movilizándola en bloque, dejarla caminar si puede, de lado sin collar, o retirar el collar para evaluarla. Piénsalo.",
        "answer": "Es la B. Dolor cervical con hormigueo en las manos tras un volcamiento es lesión medular hasta demostrar lo contrario, y se traslada con collar, tabla y movimientos en bloque. Dejarla caminar tienta porque está consciente y se mueve, pero un movimiento puede transformar una lesión parcial en una completa."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.2.021 · Politraumatismos",
      "stem": "Un niño de 7 años, de 25 kg, es atropellado. Llega con vía aérea permeable, FR 30/min y saturación 96% con oxígeno. Está pálido, con FC 150/min, llene capilar de 4 segundos y extremidades frías. Se instalan dos vías venosas.",
      "question": "¿Cuál es la reposición inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Albúmina al 20% como primera elección"
        },
        {
          "letter": "B",
          "text": "Suero glucosado al 5% de mantención"
        },
        {
          "letter": "C",
          "text": "Bolo de cristaloide tibio de 20 mL/kg y reevaluar"
        },
        {
          "letter": "D",
          "text": "Restringir fluidos hasta tener la TAC"
        },
        {
          "letter": "E",
          "text": "Bolo de 60 mL/kg de cristaloide en 5 minutos sin reevaluar"
        }
      ],
      "correct": "C",
      "explanation": "En el niño politraumatizado, la taquicardia y la mala perfusión son signos precoces de shock hemorrágico; la hipotensión es tardía. Tras asegurar vía aérea y ventilación, se da un bolo de cristaloide isotónico tibio de 20 mL/kg y se reevalúa; si persiste, segundo bolo y transfusión precoz de glóbulos rojos (10 a 20 mL/kg).",
      "say": {
        "stem": "Un niño de siete años atropellado está pálido, con frecuencia de ciento cincuenta, llene capilar de cuatro segundos y extremidades frías.",
        "question": "¿Cuál es la reposición inicial más adecuada?",
        "options": "Las opciones: albúmina, suero glucosado, bolo de cristaloide tibio de veinte mililitros por kilo, restringir fluidos o sesenta mililitros por kilo sin reevaluar. Piénsalo.",
        "answer": "Es la C. Es un shock hemorrágico y se inicia un bolo de cristaloide tibio de veinte mililitros por kilo, reevaluando. Restringir fluidos hasta la TAC tienta, pero el niño ya tiene signos de shock y no puede esperar."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.01.5.005 · Intubación traqueal",
      "stem": "Un motociclista de 25 años ingresa tras un choque. Tiene Glasgow de 7 (O1 V2 M4), respiración ruidosa y saturación de 90% con mascarilla de alto flujo. Se mantiene la restricción de movimiento cervical.",
      "question": "¿Cuál es la conducta más adecuada respecto de la vía aérea?",
      "options": [
        {
          "letter": "A",
          "text": "Mantener la mascarilla de alto flujo y realizar TAC de encéfalo"
        },
        {
          "letter": "B",
          "text": "Intubación orotraqueal con secuencia rápida, manteniendo la restricción del movimiento cervical"
        },
        {
          "letter": "C",
          "text": "Cánula nasofaríngea y observación"
        },
        {
          "letter": "D",
          "text": "Traqueostomía electiva"
        },
        {
          "letter": "E",
          "text": "Ventilación no invasiva"
        }
      ],
      "correct": "B",
      "explanation": "Un Glasgow de 8 o menos indica incapacidad de proteger la vía aérea y es indicación de vía aérea definitiva. En trauma se realiza intubación orotraqueal con secuencia rápida y restricción del movimiento cervical en línea. La ventilación no invasiva está contraindicada con compromiso de conciencia; la vía quirúrgica se reserva si falla la intubación.",
      "say": {
        "stem": "Un motociclista de veinticinco años llega con Glasgow de siete, respiración ruidosa y saturación de noventa con mascarilla, con collar cervical.",
        "question": "¿Cuál es la conducta más adecuada con la vía aérea?",
        "options": "Las opciones: seguir con mascarilla e ir a TAC, intubación orotraqueal con secuencia rápida protegiendo la columna, cánula nasofaríngea, traqueostomía electiva o ventilación no invasiva. Piénsalo.",
        "answer": "Es la B. Con Glasgow de ocho o menos necesita vía aérea definitiva, con intubación de secuencia rápida y columna protegida. Ir primero a la TAC tienta, pero la vía aérea es la A del ABCDE y va antes de cualquier imagen."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.5.003 · Cricoidostomía",
      "stem": "Un hombre de 30 años ingresa tras un accidente de tránsito con trauma facial grave, fractura mandibular y sangrado orofaríngeo masivo. Está desaturando a 75%, no se logra ventilar con bolsa-mascarilla y fracasan 2 intentos de intubación orotraqueal.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Nuevo intento de intubación con un laringoscopio de otro tamaño"
        },
        {
          "letter": "B",
          "text": "Traqueostomía reglada en pabellón"
        },
        {
          "letter": "C",
          "text": "Cricotiroidotomía quirúrgica de urgencia"
        },
        {
          "letter": "D",
          "text": "Intubación nasotraqueal a ciegas"
        },
        {
          "letter": "E",
          "text": "Ventilación no invasiva"
        }
      ],
      "correct": "C",
      "explanation": "La situación de 'no puedo intubar, no puedo oxigenar' indica una vía aérea quirúrgica de urgencia: cricotiroidotomía a través de la membrana cricotiroidea, rápida y con pocas estructuras vasculares. La traqueostomía es más lenta y compleja en urgencia, y la intubación nasotraqueal se evita en trauma facial grave. En menores de 12 años se prefiere la cricotiroidotomía por punción.",
      "say": {
        "stem": "Un hombre de treinta años con trauma facial grave, fractura mandibular y sangrado orofaríngeo masivo está desaturando, no se logra ventilar con bolsa mascarilla y fracasan dos intentos de intubación.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: otro intento de intubación, traqueostomía en pabellón, cricotiroidotomía quirúrgica de urgencia, intubación nasotraqueal a ciegas o ventilación no invasiva. Piénsalo.",
        "answer": "Es la C. No se puede intubar ni oxigenar, así que corresponde una vía aérea quirúrgica inmediata, la cricotiroidotomía. La traqueostomía tienta por ser más definitiva, pero es lenta y compleja para una urgencia."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.2.021 · Traumatismo raquimedular",
      "stem": "Hombre de 24 años cae de 4 metros de altura y llega con collar cervical. Está vigil, con vía aérea permeable y ventilación adecuada. Presenta tetraplejia flácida con nivel sensitivo en C6, PA 78/40 mmHg, FC 50/min y piel tibia y seca en extremidades. Eco-FAST negativa y radiografía de pelvis normal.",
      "question": "¿Cuál es la causa más probable de la hipotensión y su manejo inicial?",
      "options": [
        {
          "letter": "A",
          "text": "Shock hipovolémico; transfusión masiva"
        },
        {
          "letter": "B",
          "text": "Shock cardiogénico; dobutamina"
        },
        {
          "letter": "C",
          "text": "Shock neurogénico; fluidos endovenosos y vasopresor (noradrenalina), con atropina si la bradicardia es sintomática"
        },
        {
          "letter": "D",
          "text": "Taponamiento cardíaco; pericardiocentesis"
        },
        {
          "letter": "E",
          "text": "Shock séptico; antibióticos de amplio espectro"
        }
      ],
      "correct": "C",
      "explanation": "La lesión medular cervical o torácica alta interrumpe el tono simpático y produce shock neurogénico: hipotensión con bradicardia y piel tibia, a diferencia del hipovolémico, que es frío y taquicárdico. Tras descartar sangrado, se trata con fluidos y vasopresores (atropina si la bradicardia es sintomática), manteniendo restricción de movimiento de la columna.",
      "say": {
        "stem": "Hombre de veinticuatro años que cae de cuatro metros, con tetraplejia, presión de setenta y ocho sobre cuarenta, frecuencia cardíaca de cincuenta y piel tibia. Eco FAST negativa.",
        "question": "¿Cuál es la causa de la hipotensión y cómo la manejas?",
        "options": "Las opciones: hipovolémico con transfusión, cardiogénico con dobutamina, neurogénico con fluidos y vasopresor, taponamiento con pericardiocentesis o séptico con antibióticos. Piénsalo.",
        "answer": "Es la C. Es un shock neurogénico, con hipotensión, bradicardia y piel tibia, y se trata con fluidos y noradrenalina. El hipovolémico es lo primero que se busca en trauma, pero daría taquicardia y piel fría, y aquí la Eco FAST es negativa."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.02.2.015 · Trauma raquimedular",
      "stem": "Hombre de 25 años se lanza de cabeza a una piscina poco profunda. Llega inmovilizado con collar cervical. Vía aérea permeable, respira con patrón diafragmático, PA 80/45 mmHg, FC 52 lpm, piel tibia y seca. No mueve las 4 extremidades, tiene anestesia bajo las clavículas y priapismo. FAST negativo y sin otras lesiones evidentes.",
      "question": "¿Cuál es la causa más probable de la hipotensión?",
      "options": [
        {
          "letter": "A",
          "text": "Shock neurogénico por lesión medular cervical"
        },
        {
          "letter": "B",
          "text": "Shock hemorrágico por lesión abdominal oculta"
        },
        {
          "letter": "C",
          "text": "Shock espinal sin repercusión hemodinámica"
        },
        {
          "letter": "D",
          "text": "Neumotórax a tensión"
        },
        {
          "letter": "E",
          "text": "Taponamiento cardíaco"
        }
      ],
      "correct": "A",
      "explanation": "Hipotensión con bradicardia y piel tibia en un trauma cervical con tetraplejia es shock neurogénico: pérdida del tono simpático. Se maneja con volumen cauteloso y vasopresores, manteniendo restricción de movimiento de la columna. El shock hemorrágico da taquicardia y piel fría; el shock espinal es la arreflexia transitoria, no un estado hemodinámico.",
      "say": {
        "stem": "Hombre de veinticinco años que se lanzó de cabeza a una piscina baja. Está tetrapléjico, respira con el diafragma, tiene presión baja, frecuencia cardíaca de cincuenta y dos, piel tibia y priapismo. La ecografía FAST es negativa.",
        "question": "¿Cuál es la causa más probable de la hipotensión?",
        "options": "Las opciones: shock neurogénico, shock hemorrágico oculto, shock espinal, neumotórax a tensión o taponamiento. Piénsalo.",
        "answer": "Es la A. Hipotensión con bradicardia y piel tibia tras una lesión medular cervical es shock neurogénico, por pérdida del tono simpático. El shock espinal tienta por el nombre, pero describe la pérdida transitoria de reflejos, no la hipotensión."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.02.3.007 · Triage",
      "stem": "Se produce un choque de un bus con múltiples víctimas. Usted llega primero al lugar y aplica triage START. Un hombre adulto no puede caminar, respira espontáneamente con una frecuencia de 24 por minuto, tiene llene capilar menor de 2 segundos y obedece órdenes simples.",
      "question": "¿Qué categoría de triage le corresponde?",
      "options": [
        {
          "letter": "A",
          "text": "Verde (leve, puede esperar)"
        },
        {
          "letter": "B",
          "text": "Amarilla (diferible)"
        },
        {
          "letter": "C",
          "text": "Roja (inmediata)"
        },
        {
          "letter": "D",
          "text": "Negra (fallecido o no recuperable)"
        },
        {
          "letter": "E",
          "text": "Roja, porque no puede caminar"
        }
      ],
      "correct": "B",
      "explanation": "En START, quien camina es verde. Si no camina, se evalúa: sin respiración tras abrir la vía aérea es negra; frecuencia respiratoria mayor de 30, llene capilar mayor de 2 segundos (o sin pulso radial) o no obedece órdenes es roja. Este paciente no camina pero pasa todos los criterios: amarilla.",
      "say": {
        "stem": "Accidente de bus con muchas víctimas, aplicando triage START. Un hombre no puede caminar, respira a veinticuatro por minuto, tiene buen llene capilar y obedece órdenes.",
        "question": "¿Qué categoría de triage le corresponde?",
        "options": "Las opciones: verde, amarilla, roja, negra, o roja por no caminar. Piénsalo.",
        "answer": "Es la B. Es amarilla: no camina, pero su respiración, perfusión y estado mental no cumplen criterios de rojo. Elegir rojo por no caminar es el error tentador; no caminar solo lo saca del verde."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.5.008 · Intubacion traqueal",
      "stem": "Se realiza intubación orotraqueal de un paciente con insuficiencia respiratoria en el servicio de urgencia. Tras pasar el tubo, se ausculta murmullo pulmonar solo en el hemitórax derecho y la capnografía muestra curva presente con valores adecuados.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Retirar el tubo y reintubar porque está en el esófago"
        },
        {
          "letter": "B",
          "text": "Mantener sin cambios"
        },
        {
          "letter": "C",
          "text": "Avanzar más el tubo"
        },
        {
          "letter": "D",
          "text": "Instalar drenaje pleural izquierdo de inmediato"
        },
        {
          "letter": "E",
          "text": "Desinflar el cuff y retirar el tubo unos centímetros hasta auscultar murmullo bilateral, y confirmar con radiografía de tórax"
        }
      ],
      "correct": "E",
      "explanation": "La capnografía con curva persistente confirma ubicación traqueal. El murmullo solo derecho indica intubación selectiva del bronquio principal derecho por tubo muy profundo: se desinfla el cuff, se retira hasta lograr murmullo simétrico y se fija (adulto, unos 21 a 23 cm en la comisura). La radiografía confirma la punta 2 a 4 cm sobre la carina.",
      "say": {
        "stem": "Tras intubar a un paciente en urgencia, se ausculta murmullo solo en el pulmón derecho, con capnografía normal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: reintubar por tubo esofágico, no cambiar nada, avanzar el tubo, drenaje pleural izquierdo o desinflar el cuff y retirar unos centímetros hasta murmullo bilateral con radiografía. Piénsalo.",
        "answer": "Es la E. La capnografía confirma que está en la tráquea, y el murmullo solo derecho indica intubación selectiva, que se corrige retirando el tubo. Pensar en un neumotórax izquierdo tienta, pero lo más frecuente es simplemente un tubo demasiado profundo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 149",
      "stem": "Paciente de 47 años con antecedente de neumonía grave por SARS-CoV-2 que requirió intubación y ventilación mecánica por 10 días evoluciona con dificultad respiratoria progresiva. Al examen físico presenta estridor bifásico, FC 110 lpm y FR aumentada a 20 rpm. La TAC de cuello muestra estenosis marcada de la vía aérea a nivel subglótico.",
      "question": "¿Cuál es la conducta más adecuada para su manejo actual?",
      "options": [
        {
          "letter": "A",
          "text": "Intubación orotraqueal"
        },
        {
          "letter": "B",
          "text": "Cricotirotomía"
        },
        {
          "letter": "C",
          "text": "Traqueostomía"
        },
        {
          "letter": "D",
          "text": "Oxigenoterapia por mascarilla de no recirculación"
        },
        {
          "letter": "E",
          "text": "Broncoscopía"
        }
      ],
      "correct": "C",
      "explanation": "La estenosis subglótica posintubación con estridor y dificultad respiratoria progresiva requiere una vía aérea segura por debajo de la estenosis: traqueostomía. La intubación es difícil y puede empeorar la lesión al pasar por la zona estrecha, y la cricotirotomía se realiza a nivel de la membrana cricotiroidea, justo en la zona estenótica subglótica, y es solo un procedimiento de emergencia.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Paciente de cuarenta y siete años intubado diez días por COVID, que ahora tiene estridor bifásico y dificultad respiratoria progresiva por una estenosis subglótica en la TAC.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: intubación orotraqueal, cricotirotomía, traqueostomía, mascarilla de no recirculación o broncoscopía. Piénsalo.",
        "answer": "Es la C. Se necesita una vía aérea por debajo de la estenosis, y eso es una traqueostomía. La cricotirotomía tienta por ser la vía quirúrgica rápida, pero se hace justo a nivel subglótico, donde está la estenosis."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El orden que no cambia', tag: 'A antes que B, B antes que C', kind: 'key', items: [
          { t: 'Primero lo que mata primero', d: 'A, B, C, D, E, siempre en ese orden',
            say: 'Cerremos con las reglas de oro. En todo politraumatizado, el orden es siempre el mismo: se trata primero la lesión que mata primero.' },
          { t: 'Glasgow de 8 o menos', d: 'Intubación con control cervical',
            say: 'Con Glasgow de ocho o menos, intubas con control cervical, sin discutirlo.' },
        ] },
        { title: 'Lo que nunca se hace a ciegas', tag: 'Foley y sonda nasogástrica', kind: 'alert', items: [
          { t: 'Uretrorragia', d: 'Cistostomía, nunca sonda Foley',
            say: 'Con uretrorragia o próstata flotante, nunca instales la sonda Foley: va cistostomía.' },
          { t: 'Fractura de base de cráneo', d: 'Sonda por la boca, no por la nariz',
            say: 'Y con fractura de base de cráneo, la sonda gástrica se pasa por la boca, nunca por la nariz.' },
        ] },
        { title: 'Cuando el cuerpo se agota', tag: 'Tríada letal', kind: 'alert', items: [
          { t: 'Hipotermia, acidosis, coagulopatía', d: 'Detienes la cirugía definitiva',
            say: 'Y si aparece la tríada letal en pabellón, hipotermia, acidosis y coagulopatía, detienes la cirugía definitiva. Si te llevas una sola idea de hoy: en trauma, el orden decide la vida, y ese orden nunca se salta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'ATLS: el orden que decide qué se trata primero',
    root: N('start', 'Politraumatizado en el box de reanimación', 'Evaluación y reanimación simultáneas',
      'Llega un politraumatizado grave. Antes de examinar nada más, sigue el orden fijo del ATLS: se trata primero la lesión que mata primero.',
      ['¿Vía aérea en riesgo o Glasgow de 8 o menos?', N('alert', 'A: intubación orotraqueal', 'Control cervical en línea bimanual',
        'Si la vía aérea está comprometida o el Glasgow es de ocho o menos, intubas de inmediato, manteniendo el cuello alineado con las dos manos.')],
      ['¿Hay signos de neumotórax a tensión?', N('alert', 'B: descompresión inmediata', 'Aguja en el 5° espacio intercostal',
        'Si hay timpanismo, ausencia de murmullo pulmonar y desviación traqueal, descomprimes ya, sin esperar ninguna radiografía.')],
      ['¿Hay uretrorragia o próstata flotante?', N('alert', 'C: sonda Foley contraindicada', 'Cistostomía o uretrografía retrógrada',
        'Si hay signos de lesión uretral, no instalas la sonda Foley: pides una uretrografía o instalas directamente una cistostomía.')],
      ['¿Shock sin lesión uretral?', N('do', 'C: reanimación 1:1:1 y ácido tranexámico', 'Dos vías venosas gruesas',
        'Sin contraindicación, controlas la hemorragia externa e inicias la reposición con hemoderivados y ácido tranexámico antes de las tres horas.',
        ['¿Aparece la tríada letal en pabellón?', N('q', 'Hipotermia, acidosis y coagulopatía', 'La decisión que separa la vida de la muerte',
          'Si el paciente cae en hipotermia, acidosis y coagulopatía mientras operas, la prioridad deja de ser terminar la cirugía.',
          ['Sí, tríada letal', N('alert', 'Cirugía de control de daños', 'Packing, cierre temporal y traslado a UPC',
            'Empaquetas, cierras de forma temporal y trasladas a la unidad de paciente crítico para recalentar y corregir antes de reoperar.')],
          ['No, paciente estable', N('ok', 'Cirugía definitiva', 'Reparación completa en el mismo tiempo',
            'Sin tríada letal, completas la reconstrucción definitiva en la misma cirugía.')])])]),
  },
};
