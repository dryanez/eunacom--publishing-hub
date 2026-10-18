// Clase 15.18 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-18).
// El código de Perfil de la clase (1.01.1.015) no trae preguntas reales del tema: todas las que
// devuelve el banco por ese código son sobre hipertensión arterial (mismo error de código
// descrito en REVISION_CONTENIDO.md). Se buscó entonces por texto ("neuritis óptica", "Marcus
// Gunn", "defecto pupilar aferente", "papiledema", "discromatopsia") y se usan tres preguntas
// reales que el enunciado resuelve por sí solo, sin depender de ninguna imagen de fondo de ojo:
// EUNACOM Julio 2016 · Pregunta 5, EUNACOM Diciembre 2017 · Pregunta 82 (código 6.02.1.016) y
// EUNACOM Diciembre 2025 · Pregunta 169 (código 1.10.1.019, hipertensión endocraneana). Se
// descartan del mismo listado las preguntas de neuropatía óptica isquémica (EUNACOM Agosto 2021
// Pregunta 156, Diciembre 2025 Pregunta 170, Julio 2016 Pregunta 153): esa entidad no está en
// contentSections del libro para esta clase, que se centra en neuritis óptica y papiledema.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuando el ojo se ve completamente sano y el problema está detrás, en el nervio óptico',
      say: 'Bienvenidos. Hoy vemos neuroftalmología: neuritis óptica, edema de papila y el defecto pupilar de Marcus Gunn. Es un tema distinto a todo lo que hemos visto, porque acá el diagnóstico casi nunca lo da el fondo de ojo. En la mayoría de los casos el fondo de ojo se ve perfecto, y lo que te salva es un examen que toma treinta segundos: mover una linterna de un ojo al otro. Vamos a aprenderlo.',
    },

    {
      type: 'flow',
      kicker: 'Semiología pupilar',
      title: 'El defecto pupilar aferente: cuando la luz miente',
      nodes: [
        { id: 'normal', col: 0, row: 0, k: 'good', t: 'Reflejo fotomotor normal', s: 'Cualquier ojo que ilumines, las dos pupilas se cierran igual' },
        { id: 'les', col: 0, row: 2, k: 'cause', t: 'Lesión asimétrica del nervio óptico', s: 'Un ojo recibe menos señal que el otro' },
        { id: 'sano', col: 1, row: 1, k: 'good', t: 'Luz sobre el ojo sano', s: 'Ambas pupilas se contraen con fuerza' },
        { id: 'enfermo', col: 2, row: 2, k: 'q', t: 'Luz sobre el ojo enfermo', s: 'El cerebro lo percibe como menos luminoso' },
        { id: 'dpar', col: 3, row: 2, k: 'trap', t: 'Ambas pupilas se dilatan', s: 'Defecto pupilar aferente relativo, o Marcus Gunn' },
      ],
      edges: [
        { from: 'les', to: 'sano' }, { from: 'sano', to: 'enfermo' }, { from: 'enfermo', to: 'dpar' },
      ],
      steps: [
        { show: ['normal'], note: 'El punto de comparación',
          say: 'Empecemos por el examen que sostiene toda la clase: la prueba de la linterna oscilante. En un ojo sano, cuando iluminas cualquiera de los dos ojos, las dos pupilas se contraen con la misma fuerza, porque el reflejo tiene una vía aferente por el nervio óptico y una vía eferente por el tercer par, y ambas funcionan bien de los dos lados.' },
        { show: ['les'], note: 'El nervio óptico de un lado manda menos señal',
          say: 'Pero si hay una lesión unilateral o asimétrica del nervio óptico, o una lesión extensa de la retina, ese ojo manda menos señal luminosa al cerebro, aunque la pupila en sí funcione bien.' },
        { show: ['sano'], note: 'El primer paso de la prueba',
          say: 'En la prueba, iluminas primero el ojo sano, y como es de esperar, ambas pupilas se contraen enérgicas y simétricas.' },
        { show: ['enfermo'], note: 'Aquí está el truco de la prueba',
          say: 'Luego pasas rápido la luz al ojo enfermo. Y aunque sigues iluminando con la misma intensidad, el cerebro recibe menos señal desde ese nervio dañado, y la interpreta como si hubiera menos luz. Este esquema lo resume.',
          photo: { src: 'biblioteca/12_oftalmologia/oftal-18/S1_marcus-gunn__propio.svg', label: 'Pupila de Marcus Gunn', at: 'Este esquema', credit: 'Dibujo propio (esquema)' } },
        { show: ['dpar'], note: 'El signo que se pregunta con su nombre propio',
          say: 'Entonces, en vez de mantenerse contraídas, ambas pupilas se dilatan paradójicamente. Eso es el defecto pupilar aferente relativo, la pupila de Marcus Gunn, y es el signo objetivo más sensible de una lesión asimétrica del nervio óptico. Ojo con la trampa inversa: si el paciente dice que no ve nada, pero el examen pupilar es normal y simétrico, sin ningún Marcus Gunn, sospecha simulación o una lesión cortical bilateral, no del nervio óptico.' },
        { show: ['dpar'], note: 'Marcus Gunn y pupila de Adie',
          say: 'Mira esta secuencia: al pasar la luz al ojo enfermo la pupila se dilata. Y no confundas con una pupila de Adie, que es más grande y reacciona poco, pero sin lesión del nervio óptico.',
          photos: [
            { src: 'biblioteca/12_oftalmologia/oftal-18/01_linterna_oscilante_dpar__kanski_p820.jpg', label: 'Marcus Gunn', at: 'Mira esta secuencia', credit: "Kanski's Clinical Ophthalmology, 8.ª ed., Fig. 19.33" },
            { src: 'biblioteca/12_oftalmologia/oftal-18/02_pupila-de-adie__amir-oftalmo_p23.jpg', label: 'Pupila de Adie', at: 'una pupila de Adie', credit: 'Manual AMIR Oftalmología, p. 23' },
          ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Neuritis óptica',
      title: 'La tríada clínica y el fondo de ojo que casi siempre engaña',
      cards: [
        { title: 'La paciente típica', tag: 'Mujer joven, veinte a cuarenta años', kind: 'key', items: [
          { t: 'Baja visual monocular subaguda', d: 'Empeora en horas a dos o tres días',
            say: 'El perfil típico es una mujer joven, entre veinte y cuarenta años, que nota que la visión de un ojo empeora a lo largo de horas o de dos a tres días. Es subaguda: ni instantánea, ni de meses.' },
          { t: 'Dolor con los movimientos oculares', d: 'Presente en más del noventa por ciento de los casos',
            say: 'Se suma dolor periocular que aumenta claramente al mover los ojos, presente en más del noventa por ciento de los casos, porque los músculos rectos tiran de la vaina del nervio óptico inflamado.' },
          { t: 'Discromatopsia para el rojo', d: 'Los objetos rojos se ven descoloridos o café',
            say: 'Y el tercer elemento es la discromatopsia: pierde visión de colores de forma desproporcionada, sobre todo del rojo, que se ve descolorido o café. A veces este dato aparece incluso antes que la caída de la agudeza visual.' },
        ] },
        { title: 'Fondo de ojo', tag: 'Ni el médico ni el paciente ven nada', kind: 'alert', items: [
          { t: 'Normal en el sesenta y cinco por ciento', d: 'Neuritis retrobulbar: la inflamación está detrás del globo',
            say: 'Y aquí está el detalle que más confunde en el examen: en el sesenta y cinco por ciento de los casos, el fondo de ojo es completamente normal, porque la inflamación está detrás del globo ocular, en la neuritis retrobulbar. No esperes ver nada anormal para sospechar el diagnóstico.' },
          { t: 'Papilitis en el treinta y cinco por ciento restante', d: 'Edema papilar leve, cuando la inflamación es anterior',
            say: 'En el resto, cuando la inflamación está más adelante, sí se ve un edema papilar leve, y eso se llama papilitis.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Esclerosis múltiple',
      title: 'La neuritis óptica como primer aviso',
      nodes: [
        { id: 'des', col: 0, row: 1, k: 'cause', t: 'Placa desmielinizante en el nervio óptico', s: 'Origen autoinmune' },
        { id: 'no', col: 1, row: 1, k: 'mech', t: 'Neuritis óptica', s: 'Muchas veces el primer síntoma' },
        { id: 'em', col: 2, row: 1, k: 'risk', t: 'Esclerosis múltiple', s: 'En cerca de la mitad de los casos, a futuro' },
        { id: 'rm', col: 2, row: 0, k: 'good', t: 'Resonancia con gadolinio', s: 'Busca otras placas en la sustancia blanca' },
        { id: 'meti', col: 3, row: 1, k: 'good', t: 'Metilprednisolona endovenosa', s: 'Pulsos de un gramo al día, tres a cinco días' },
        { id: 'pred', col: 3, row: 2, k: 'trap', t: 'Prednisona oral sola', s: 'Contraindicada de entrada' },
      ],
      edges: [
        { from: 'des', to: 'no' }, { from: 'no', to: 'em', label: 'riesgo futuro' },
        { from: 'no', to: 'rm' }, { from: 'no', to: 'meti' }, { from: 'meti', to: 'pred', label: 'nunca sola' },
      ],
      steps: [
        { show: ['des'], note: 'El mismo proceso que ataca la sustancia blanca',
          say: 'Ahora la conexión que más se pregunta. La neuritis óptica es, en su origen, una placa desmielinizante, del mismo tipo de proceso autoinmune que ataca la sustancia blanca del sistema nervioso central.' },
        { show: ['no'], note: 'Muchas veces es la primera manifestación',
          say: 'Y muchas veces esta neuritis es la primera manifestación clínica de toda la enfermedad, antes de cualquier otro síntoma neurológico.' },
        { show: ['em'], note: 'La razón de que este tema tenga garantía GES',
          say: 'En cerca de la mitad de los casos, esa paciente termina desarrollando esclerosis múltiple en el seguimiento. Por eso la sospecha de esclerosis múltiple tiene garantía explícita en salud, la garantía GES número sesenta y ocho.' },
        { show: ['rm'], note: 'El examen que define el pronóstico',
          say: 'El estudio de elección es la resonancia magnética de encéfalo y órbitas con gadolinio, que busca otras placas desmielinizantes silenciosas en la sustancia blanca, y eso es justamente lo que predice el riesgo de progresar a esclerosis múltiple.' },
        { show: ['meti'], note: 'Pulsos endovenosos, no comprimidos',
          say: 'El tratamiento de la fase aguda son los pulsos de metilprednisolona endovenosa, un gramo al día, durante tres a cinco días, seguidos después de prednisona oral en dosis decrecientes.' },
        { show: ['pred'], note: 'El ensayo que cambió la práctica',
          say: 'Y aquí la contraindicación formal que se pregunta seguido: nunca se da prednisona oral sola, a dosis bajas, sin los pulsos endovenosos antes. El estudio que se llama ONTT demostró que la prednisona oral sola duplica la tasa de recurrencias de la neuritis óptica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Esclerosis múltiple',
      title: 'Primer brote: cómo se sospecha, se estudia y se trata',
      cards: [
        { title: 'Sospecha', tag: 'Tiempo y espacio', kind: 'key', items: [
          { t: 'Mujer de 20 a 40 años, varios territorios', d: 'Neuritis, mielitis, oftalmoplejía internuclear, ataxia',
            say: 'La esclerosis múltiple se sospecha en una mujer de veinte a cuarenta años con síntomas neurológicos en distintos momentos y territorios, la diseminación en tiempo y espacio: neuritis óptica, mielitis, con parestesias, debilidad o signo de Lhermitte, diplopía por oftalmoplejía internuclear, o ataxia.' },
        ] },
        { title: 'Estudio', tag: 'Resonancia con gadolinio', kind: 'criteria', items: [
          { t: 'RM de cerebro y médula con gadolinio', d: 'Lesiones ovoideas periventriculares; bandas oligoclonales',
            say: 'Se pide resonancia de cerebro y médula con gadolinio, que muestra lesiones ovoideas periventriculares, yuxtacorticales y medulares, y ante dudas, punción lumbar con bandas oligoclonales. Se aplican los criterios de McDonald. Mira esta resonancia de órbita con gadolinio: el nervio óptico inflamado se realza.',
            photo: { src: '_verificadas/374_oftal_Neuritis_óptica__BrantHelms_p287.jpg', label: 'RM de órbita con gadolinio', at: 'Mira esta resonancia', credit: 'Fundamentals of Diagnostic Radiology (Brant and Helms), p. 287' } },
          { t: 'La RM basal predice el riesgo', d: 'Con 1 o más lesiones, más de 70% a 15 años',
            say: 'La resonancia basal es la que mejor predice el riesgo: con una o más lesiones, el riesgo de esclerosis múltiple a quince años supera el setenta por ciento; sin lesiones, ronda el veinticinco por ciento.' },
        ] },
        { title: 'Brote y derivación', tag: 'GES número 68', kind: 'pharma', items: [
          { t: 'Metilprednisolona 1 g EV por 3 días', d: 'Acelera la recuperación, no cambia la visión final',
            say: 'El brote, por ejemplo una neuritis óptica, se trata con metilprednisolona un gramo endovenoso por tres días, con o sin prednisona oral después. Acelera la recuperación, aunque no modifica la visión final. La prednisona oral sola está contraindicada, porque aumenta las recaídas.' },
          { t: 'Derivar a neurología', d: 'Esclerosis múltiple remitente recurrente: GES 68',
            say: 'Se deriva a neurología, con la garantía GES número sesenta y ocho para la esclerosis múltiple remitente recurrente, para confirmar y valorar un tratamiento modificador de la enfermedad. El seguimiento especializado queda fuera de la atención primaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Papiledema: la otra cara del edema de papila',
      cards: [
        { title: 'Siempre bilateral', tag: 'Por hipertensión endocraneana', kind: 'criteria', items: [
          { t: 'Papilas hiperémicas y de bordes difusos', d: 'Con hemorragias en llama peripapilares',
            say: 'El papiledema es el edema de papila bilateral, causado por una presión intracraneana elevada. En el fondo de ojo se ven las dos papilas hiperémicas, con bordes difuminados, y a veces hemorragias en llama alrededor. Mira este fondo de ojo: la papila rosada, elevada, con los bordes borrados.',
            photo: { src: 'biblioteca/12_oftalmologia/oftal-18/01_papiledema__cto-oftalmo_p88.jpg', label: 'Papiledema', at: 'Mira este fondo de ojo', credit: 'Manual CTO Oftalmología 14.ª ed., p. 88' } },
          { t: 'Agudeza visual conservada al inicio', d: 'Veinte veinte, con oscurecimientos visuales fugaces al agacharse',
            say: 'Y la gran diferencia con la neuritis: la agudeza visual central se mantiene conservada al principio. Solo hay episodios cortos de oscurecimiento visual de segundos, al agacharse o pararse rápido, y cefalea que empeora en la mañana y con la tos o el esfuerzo.' },
        ] },
        { title: 'Conducta', tag: 'Neuroimagen antes que todo', kind: 'alert', items: [
          { t: 'Tomografía o resonancia urgente', d: 'Descarta una masa, hidrocefalia o trombosis venosa',
            say: 'Ante un papiledema, la prioridad es la neuroimagen urgente, tomografía o resonancia, para descartar una masa intracraneana, hidrocefalia o trombosis de los senos venosos.' },
          { t: 'Nunca punción lumbar antes de la imagen', d: 'El riesgo es una hernia cerebral',
            say: 'Y la regla que no se negocia: jamás se hace una punción lumbar antes de la neuroimagen. Si hay una masa y bajas la presión de golpe, el cerebro se hernia, y eso puede matar al paciente en minutos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipertensión endocraneana',
      title: 'Hipertensión endocraneana: la que causa el papiledema',
      cards: [
        { title: 'Causas y clínica', tag: 'Masa, hidrocefalia, hemorragia, trombosis', kind: 'alert', items: [
          { t: 'Cefalea matutina que empeora al acostarse', d: 'Valsalva, vómitos en proyectil, oscurecimientos',
            say: 'El síndrome de hipertensión endocraneana se debe a una masa, una hidrocefalia, una hemorragia, una trombosis venosa cerebral, o a la hipertensión intracraneana idiopática, en la mujer joven obesa. Da cefalea matutina o nocturna que empeora con Valsalva o al acostarse, vómitos en proyectil, visión borrosa u oscurecimientos transitorios.' },
          { t: 'Diplopía por VI par y papiledema', d: 'Tardíos: tríada de Cushing y deterioro de conciencia',
            say: 'Puede haber diplopía por parálisis del sexto par, que es un falso signo localizador, y papiledema. Los signos tardíos son la tríada de Cushing, hipertensión, bradicardia y respiración irregular, y el deterioro de conciencia.' },
        ] },
        { title: 'Conducta inicial', tag: 'Imagen antes de puncionar', kind: 'pharma', items: [
          { t: 'Cabecera a 30°, neuroimagen urgente', d: 'Evitar hipotonía y sobrecarga hídrica',
            say: 'Cabecera a treinta grados, evitar la hipotonía y la sobrecarga de líquidos, neuroimagen urgente antes de cualquier punción lumbar, y derivación a urgencia neuroquirúrgica. Si hay signos de herniación, medidas antiedema, con manitol o suero hipertónico, y vía aérea.' },
          { t: 'Idiopática: acetazolamida y bajar de peso', d: 'Control del campo visual para evitar la ceguera',
            say: 'En la forma idiopática, acetazolamida y baja de peso, con control del campo visual para evitar la ceguera.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Procedimiento',
      title: 'Papiloscopía: mirar la papila en el paciente neurológico',
      cards: [
        { title: 'Técnica', tag: 'Sin dilatar', kind: 'key', items: [
          { t: 'Misma técnica de la oftalmoscopía directa', d: 'Sala oscura, ojo derecho con ojo derecho, a 2 o 3 cm',
            say: 'La papiloscopía usa la misma técnica de la oftalmoscopía directa: sala oscura, tu ojo derecho con el ojo derecho del paciente, a dos o tres centímetros. Pero con una diferencia clave: en el paciente neurológico con vigilancia pupilar, por ejemplo un traumatismo o una hipertensión endocraneana, no se dilata. Se examina por la pupila natural, para conservar la evaluación pupilar.' },
        ] },
        { title: 'Qué mirar', tag: 'La papila', kind: 'criteria', items: [
          { t: 'Color, bordes, elevación, hemorragias, venas', d: 'Pulso venoso espontáneo: presente en el 80% de los normales',
            say: 'Miras el color, los bordes, que se borran en el papiledema, la elevación, las hemorragias en llama, la ingurgitación venosa, y el pulso venoso espontáneo. Está presente en el ochenta por ciento de los normales, y su pérdida sugiere una presión intracraneana sobre doscientos milímetros de agua.' },
          { t: 'Papiledema, neuritis o atrofia', d: 'Bilateral con visión conservada; unilateral con baja y dolor; papila pálida',
            say: 'Y distingues: el papiledema es bilateral y con visión conservada; la neuritis es generalmente unilateral, con visión baja y dolor; y la atrofia óptica, con papila pálida, aparece en las lesiones compresivas crónicas.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La linterna oscilante',
      images: [
        { src: 'animaciones/oftal-18/A1_linterna_oscilante.mp4', label: 'Marcus Gunn', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Pupila que se dilata',
          say: 'Al iluminar el ojo sano, ambas pupilas se contraen. Al pasar la luz al ojo enfermo, ambas se dilatan, porque ese nervio óptico conduce menos luz. Es el defecto pupilar aferente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tumores',
      title: 'Tumores del sistema nervioso central en el niño',
      cards: [
        { title: 'Qué son', tag: 'Los sólidos más frecuentes', kind: 'criteria', items: [
          { t: 'Fosa posterior', d: 'Meduloblastoma, astrocitoma pilocítico, ependimoma',
            say: 'Los tumores del sistema nervioso central son los tumores sólidos más frecuentes de la infancia, y la mayoría está en la fosa posterior: meduloblastoma, astrocitoma pilocítico y ependimoma.' },
          { t: 'Cefalea matutina, vómitos sin diarrea, ataxia', d: 'Torticolis, esotropía por VI par, papiledema, convulsiones',
            say: 'Se sospecha por cefalea matutina progresiva, vómitos sin diarrea, ataxia o marcha inestable, torticolis, esotropía por parálisis del sexto par, papiledema, macrocefalia o irritabilidad en el lactante, convulsiones, detención del desarrollo o pérdida visual.' },
          { t: 'Craneofaringioma: hemianopsia bitemporal', d: 'Talla baja y pubertad alterada',
            say: 'Y un craneofaringioma en edad escolar da hemianopsia bitemporal, talla baja y pubertad alterada.' },
        ] },
        { title: 'Conducta inicial', tag: 'Derivación urgente', kind: 'alert', items: [
          { t: 'Fondo de ojo y RM con gadolinio', d: 'Evitar la punción lumbar',
            say: 'Examen neurológico y fondo de ojo, resonancia de encéfalo con gadolinio, o TAC si no hay acceso, y evitar la punción lumbar. Si hay hipertensión endocraneana, cabecera a treinta grados y dexametasona según neurocirugía.' },
          { t: 'Centro de oncología y neurocirugía pediátrica', d: 'GES cáncer en menores de 15 años',
            say: 'Derivación urgente a un centro de oncología y neurocirugía pediátrica, con la garantía GES de cáncer en menores de quince años.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tumores',
      title: 'Tumores de la vía óptica',
      cards: [
        { title: 'Quién', tag: 'Niño y adulto', kind: 'criteria', items: [
          { t: 'Niño: glioma del nervio óptico', d: 'Astrocitoma pilocítico; neurofibromatosis tipo 1',
            say: 'El más frecuente es el glioma del nervio óptico, un astrocitoma pilocítico propio de la infancia, y asociado a neurofibromatosis tipo uno: manchas café con leche, pecas axilares y nódulos de Lisch en el iris.' },
          { t: 'Adulto: meningioma y tumores selares', d: 'Adenoma hipofisario, craneofaringioma',
            say: 'En el adulto, el meningioma de la vaina del nervio, y los tumores de la silla turca que comprimen el quiasma: el adenoma hipofisario y el craneofaringioma.' },
        ] },
        { title: 'Cómo se presenta', tag: 'Lento e indoloro', kind: 'alert', items: [
          { t: 'Pérdida visual lenta e indolora', d: 'Discromatopsia, DPAR, proptosis axial, atrofia óptica',
            say: 'Se presenta con pérdida visual lenta e indolora, discromatopsia, defecto pupilar aferente, proptosis axial, atrofia óptica y defectos del campo visual. La hemianopsia bitemporal indica compromiso del quiasma, y el nistagmo asimétrico en un lactante sugiere una lesión de la vía óptica anterior.' },
        ] },
        { title: 'Conducta inicial', tag: 'Derivar', kind: 'pharma', items: [
          { t: 'Visión, campo, pupilas y estigmas', d: 'RM de órbitas y encéfalo; oftalmología y neurocirugía',
            say: 'Mide visión, campo y pupilas, busca los estigmas de neurofibromatosis, pide resonancia de órbitas y encéfalo con gadolinio y deriva a oftalmología y a neurocirugía u oncología. No se biopsia en atención primaria, y el control del niño es en conjunto, por el riesgo de ceguera y de compromiso hipotalámico.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Neuritis óptica retrobulbar contra papiledema',
      head: ['Parámetro', 'Neuritis óptica retrobulbar', 'Papiledema'],
      rows: [
        { cells: ['Lateralidad', 'Unilateral, monocular', 'Casi siempre bilateral'],
          say: 'Repasemos las trampas. La neuritis es típicamente unilateral; el papiledema, casi siempre bilateral.' },
        { cells: ['Dolor ocular', 'Presente, empeora al mover el ojo', 'Ausente, cursa con cefalea matinal'],
          say: 'El dolor con los movimientos está en la neuritis; en el papiledema no hay dolor ocular, sino cefalea que empeora en la mañana.' },
        { cells: ['Agudeza visual', 'Cae de forma brusca y marcada', 'Se conserva al inicio'],
          say: 'La agudeza visual cae bruscamente en la neuritis; en el papiledema se conserva al comienzo.' },
        { cells: ['Fondo de ojo', 'Normal en la mayoría de los casos', 'Edema bilateral franco, bordes borrados'],
          say: 'El fondo de ojo es normal en la mayoría de las neuritis; en el papiledema el edema es evidente y bilateral.' },
        { cells: ['Defecto pupilar aferente', 'Presente y marcado', 'Ausente, pupilas normales'],
          say: 'El defecto pupilar aferente está presente en la neuritis; en el papiledema las pupilas son normales.' },
        { cells: ['Trampa clásica', 'Descartarla porque el fondo de ojo se ve normal', 'Puncionar antes de pedir neuroimagen'],
          say: 'Y las trampas: descartar la neuritis porque el fondo de ojo se ve normal es el error más común; y puncionar al paciente con papiledema antes de la neuroimagen es el error que puede herniar el cerebro.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 27 años consulta por disminución progresiva de la visión en su ojo derecho de 3 días de evolución, con dolor sordo retroocular que aumenta al mirar hacia los lados o hacia arriba. Refiere que los objetos rojos los ve descoloridos o cafés con ese ojo. Al examen: agudeza visual OD 20/100, OI 20/20. Con la linterna oscilante, al iluminar el ojo izquierdo hay miosis bilateral rápida, pero al pasar la luz al ojo derecho ambas pupilas se dilatan paradójicamente. El fondo de ojo no muestra alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizarla, ya que el fondo de ojo es normal y no hay patología ocular' },
        { letter: 'B', text: 'Solicitar resonancia magnética de encéfalo y órbitas con gadolinio, e iniciar pulsos de metilprednisolona endovenosa' },
        { letter: 'C', text: 'Indicar prednisona oral a dosis bajas y controlar en dos semanas' },
        { letter: 'D', text: 'Realizar punción lumbar de inmediato para medir la presión de apertura' },
        { letter: 'E', text: 'Solicitar tomografía computada de órbita con contraste para descartar celulitis orbitaria' },
      ],
      correct: 'B',
      explanation: 'La baja visual monocular subaguda, el dolor con los movimientos oculares, la discromatopsia para el rojo, el defecto pupilar aferente relativo y el fondo de ojo normal arman el cuadro de neuritis óptica retrobulbar. La conducta es resonancia con gadolinio para evaluar el riesgo de esclerosis múltiple e iniciar pulsos de metilprednisolona endovenosa; la prednisona oral sola está contraindicada.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintisiete años, con disminución progresiva de la visión en su ojo derecho desde hace tres días, con dolor sordo detrás del ojo que aumenta al mover la mirada, y que ve los objetos rojos descoloridos con ese ojo. Con la linterna oscilante, al iluminar el ojo derecho ambas pupilas se dilatan de forma paradójica. El fondo de ojo no muestra alteraciones.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: tranquilizarla porque el fondo de ojo es normal, pedir resonancia magnética con gadolinio e iniciar pulsos de metilprednisolona endovenosa, indicar prednisona oral a dosis bajas, hacer una punción lumbar de inmediato, o pedir tomografía de órbita por sospecha de celulitis orbitaria. Piénsalo.',
        answer: 'Es la B. Tiene la tríada completa: baja visual subaguda, dolor con los movimientos, discromatopsia para el rojo, y el defecto pupilar aferente confirma que el nervio óptico está comprometido. El fondo de ojo normal no descarta nada, porque la mayoría de las neuritis son retrobulbares. Se pide resonancia con gadolinio y se inicia metilprednisolona endovenosa, nunca prednisona oral sola.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 5',
      stem: 'Una paciente de 26 años, con antecedente de esclerosis múltiple, consulta por disminución de la agudeza visual derecha, de 2 días de evolución, asociado a leve dolor retroocular derecho, que aumenta con los movimientos. Al examen físico se aprecia rojo pupilar y movimientos normales, escape pupilar, con defecto pupilar aferente en el ojo derecho y presencia de un escotoma derecho.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Desprendimiento de retina' },
        { letter: 'B', text: 'Trombosis de la vena central de la retina' },
        { letter: 'C', text: 'Trombosis de arteria central de la retina' },
        { letter: 'D', text: 'Neuritis óptica' },
        { letter: 'E', text: 'Absceso orbitario' },
      ],
      correct: 'D',
      explanation: 'La disminución de agudeza visual subaguda, el dolor retroocular que aumenta con los movimientos, el defecto pupilar aferente y el antecedente de esclerosis múltiple arman el cuadro típico de neuritis óptica, cuya causa más frecuente es autoinmune.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Una paciente de veintiséis años, con antecedente de esclerosis múltiple, consulta por disminución de la agudeza visual del ojo derecho, de dos días de evolución, con dolor retroocular leve que aumenta con los movimientos. Al examen tiene defecto pupilar aferente en el ojo derecho y un escotoma en ese mismo ojo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: desprendimiento de retina, trombosis de la vena central de la retina, trombosis de arteria central de la retina, neuritis óptica, o absceso orbitario. Piénsalo.',
        answer: 'Es la D. La combinación de baja visual subaguda, dolor con los movimientos oculares y defecto pupilar aferente ya arma el cuadro, y el antecedente de esclerosis múltiple lo confirma. Las trombosis vasculares de retina no dan este dolor con la motilidad, y el absceso orbitario daría proptosis y fiebre, que aquí no aparecen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 82',
      stem: 'Una paciente, con antecedente de esclerosis múltiple, consulta por dolor ocular derecho, de 2 días de evolución, a lo que se le ha agregado visión borrosa. Tiene agudeza visual de 0,9 en el lado derecho y 1 en el lado izquierdo, que no cambia al mirar por un agujero estenopeico. Además se constata que en el ojo derecho está muy afectada la visión de colores.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Discromatopsia' },
        { letter: 'B', text: 'Retinitis pigmentosa' },
        { letter: 'C', text: 'Coriorretinitis' },
        { letter: 'D', text: 'Desprendimiento de retina' },
        { letter: 'E', text: 'Neuritis óptica' },
      ],
      correct: 'E',
      explanation: 'La discromatopsia marcada, el dolor ocular de instalación reciente y el antecedente de esclerosis múltiple orientan a neuritis óptica, incluso con una agudeza visual apenas alterada, porque la pérdida de colores suele adelantarse a la caída franca de la visión.',
      say: {
        stem: 'Y una segunda pregunta real, del EUNACOM de diciembre de dos mil diecisiete, que insiste en el mismo tema con un ángulo distinto. Una paciente con antecedente de esclerosis múltiple consulta por dolor ocular derecho, de dos días de evolución, con visión borrosa agregada. Su agudeza visual es de nueve décimos en el ojo derecho y de diez décimos en el izquierdo, y en el ojo derecho está muy afectada la visión de colores.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: discromatopsia, retinitis pigmentosa, coriorretinitis, desprendimiento de retina, o neuritis óptica. Piénsalo.',
        answer: 'Es la E. Fíjate en el detalle que hace especial esta pregunta: la agudeza visual apenas está alterada, casi normal, y aun así la respuesta es neuritis óptica, porque la discromatopsia puede adelantarse a la caída franca de la visión. La opción discromatopsia es la trampa, porque nombra el hallazgo, pero no es un diagnóstico: es un síntoma de la neuritis, en el contexto de esclerosis múltiple y dolor ocular reciente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 169',
      stem: 'Una paciente de 45 años, con antecedente de hipertensión arterial y migraña, consulta por cefalea más intensa de lo habitual, desde hace dos meses, que inicialmente era mayor durante la mañana, pero que ha aumentado en intensidad durante todo el día y se ha asociado a náuseas y vómitos explosivos. No ha respondido al uso frecuente de analgésicos y ergotamínicos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de hipertensión endocraneana' },
        { letter: 'B', text: 'Hemorragia subaracnoidea' },
        { letter: 'C', text: 'Encefalopatía hipertensiva' },
        { letter: 'D', text: 'Tumor cerebral' },
        { letter: 'E', text: 'Cefalea por ergotamínicos' },
      ],
      correct: 'A',
      explanation: 'El predominio matinal de la cefalea, sumado a náuseas y vómitos, arma el síndrome de hipertensión endocraneana, que se completa con el edema de papila al fondo de ojo. Ante esta sospecha corresponde examinar el fondo de ojo y solicitar neuroimagen antes de cualquier punción lumbar.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de diciembre de dos mil veinticinco, que cambia de tema dentro de la misma clase, hacia el papiledema. Una paciente de cuarenta y cinco años, con hipertensión arterial y migraña, consulta por una cefalea más intensa de lo habitual, desde hace dos meses, que empezó predominando en la mañana y ahora dura todo el día, con náuseas y vómitos explosivos. No ha respondido a analgésicos ni a ergotamínicos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: síndrome de hipertensión endocraneana, hemorragia subaracnoidea, encefalopatía hipertensiva, tumor cerebral, o cefalea por ergotamínicos. Piénsalo.',
        answer: 'Es la A. La cefalea de predominio matinal, junto con náuseas y vómitos, arma dos de los tres elementos del síndrome de hipertensión endocraneana; el tercero, el edema de papila, se confirma con el fondo de ojo. El tumor cerebral podría ser la causa de fondo, pero el diagnóstico sindromático que responde la pregunta es la hipertensión endocraneana, y lo siguiente es fondo de ojo más neuroimagen, nunca punción lumbar primero.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.5.011 · Reflejos pupilares",
      "stem": "Hombre de 58 años consulta por caída del párpado derecho y visión doble de 1 día de evolución, con cefalea intensa. Al examen, el ojo derecho está desviado hacia abajo y afuera, con ptosis completa. La pupila derecha mide 7 mm y no reacciona a la luz directa ni consensual; la pupila izquierda mide 3 mm y reacciona a la luz directa y consensual.",
      "question": "¿Cuál es la interpretación más adecuada de estos hallazgos?",
      "options": [
        {
          "letter": "A",
          "text": "Defecto pupilar aferente relativo derecho por neuritis óptica"
        },
        {
          "letter": "B",
          "text": "Síndrome de Horner derecho"
        },
        {
          "letter": "C",
          "text": "Lesión eferente del tercer par derecho, sospechar aneurisma de comunicante posterior"
        },
        {
          "letter": "D",
          "text": "Pupila de Argyll Robertson"
        },
        {
          "letter": "E",
          "text": "Anisocoria fisiológica"
        }
      ],
      "correct": "C",
      "explanation": "Si la pupila afectada no responde ni a la luz directa ni a la consensual, el defecto es eferente (tercer par). Un tercer par con midriasis y cefalea obliga a descartar aneurisma de comunicante posterior con angio-TC urgente. En el defecto aferente, la pupila sí contrae con la luz del ojo sano.",
      "say": {
        "stem": "Un hombre de cincuenta y ocho años tiene ptosis derecha, visión doble y cefalea intensa. La pupila derecha está dilatada y no se contrae ni con luz directa ni al iluminar el otro ojo; la izquierda responde normal.",
        "question": "¿Cómo se interpretan estos hallazgos?",
        "options": "Las opciones: defecto aferente por neuritis óptica, síndrome de Horner, lesión eferente del tercer par, pupila de Argyll Robertson o anisocoria fisiológica. Piénsalo.",
        "answer": "Es la C. Una pupila que no responde ni a la luz directa ni a la consensual tiene un problema eferente, del tercer par, y con cefalea hay que descartar un aneurisma. El defecto aferente tienta, pero en él la pupila sí se contrae al iluminar el ojo sano."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 104",
      "stem": "Una paciente de 30 años presenta un cuadro de 1 mes de evolución de neuralgia de la primera rama del trigémino. Hace 1 semana se agrega disminución de la sensibilidad del muslo derecho, con dificultades para caminar. Como antecedente, refiere que hace 1 año tuvo un trastorno del equilibrio, que resolvió espontáneamente.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Polineuropatía por déficit de vitamina B12"
        },
        {
          "letter": "B",
          "text": "Síndrome de Guillain-Barré de presentación atípica"
        },
        {
          "letter": "C",
          "text": "Infarto talámico"
        },
        {
          "letter": "D",
          "text": "Esclerosis múltiple"
        },
        {
          "letter": "E",
          "text": "Neurinoma con compresión del troncoencéfalo"
        }
      ],
      "correct": "D",
      "explanation": "Mujer joven con múltiples déficits focales separados en el espacio (trigémino, sensibilidad de extremidad, equilibrio) y en el tiempo, de inicio subagudo y con recuperación espontánea: es la definición clínica de esclerosis múltiple. Se estudia con resonancia magnética con gadolinio.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Una mujer de treinta años tiene neuralgia del trigémino hace un mes, y hace una semana se agrega menor sensibilidad en el muslo derecho con dificultad para caminar. Hace un año tuvo un trastorno del equilibrio que se resolvió solo.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: polineuropatía por déficit de vitamina B doce, Guillain-Barré atípico, infarto talámico, esclerosis múltiple o neurinoma que comprime el tronco. Piénsalo.",
        "answer": "Es la D. Son déficits focales en distintos lugares y en distintos momentos, en una mujer joven, con recuperación espontánea: eso es esclerosis múltiple. El Guillain-Barré tienta, pero es simétrico, ascendente y no recidiva al año con otros territorios."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2025 · Pregunta 96",
      "stem": "Un niño de 9 años, con antecedente de neurofibromatosis tipo 1, consulta por proptosis izquierda de 6 meses de evolución, progresiva e indolora. Tenía un examen visual normal a los 6 años. Actualmente se observa proptosis izquierda leve, con disminución de la visión de colores del ojo izquierdo y agudeza visual 20/25 en el ojo derecho y 20/30 en el ojo izquierdo.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Celulitis orbitaria"
        },
        {
          "letter": "B",
          "text": "Retinoblastoma"
        },
        {
          "letter": "C",
          "text": "Orbitopatía distiroidea"
        },
        {
          "letter": "D",
          "text": "Angiolipoma orbitario"
        },
        {
          "letter": "E",
          "text": "Tumor del nervio óptico"
        }
      ],
      "correct": "E",
      "explanation": "La neurofibromatosis tipo 1 se asocia a glioma de la vía óptica, el tumor del SNC más característico de esta enfermedad. Proptosis unilateral progresiva e indolora con alteración de la visión de colores (disfunción del nervio óptico) orienta a glioma del nervio óptico. Se estudia con resonancia de órbitas y cerebro. La celulitis orbitaria es aguda, dolorosa y febril.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un niño de nueve años con neurofibromatosis tipo uno tiene proptosis izquierda progresiva e indolora, con menor visión de colores en ese ojo.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: celulitis orbitaria, retinoblastoma, orbitopatía tiroidea, angiolipoma orbitario o tumor del nervio óptico. Piénsalo.",
        "answer": "Es la E. En la neurofibromatosis tipo uno, la proptosis progresiva con alteración de la visión de colores es un glioma del nervio óptico. El retinoblastoma tienta por ser un tumor ocular infantil, pero se presenta antes, con leucocoria, en menores de cinco años."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.5.001 · Papiloscopia (fondo de ojo)",
      "stem": "Mujer de 28 años con obesidad presenta cefalea holocránea progresiva de 2 meses, peor en la mañana y con maniobras de Valsalva, y oscurecimientos visuales transitorios. Examen neurológico sin déficit focal. Se realiza oftalmoscopía directa (fondo de ojo).",
      "question": "¿Qué hallazgo del fondo de ojo indica hipertensión intracraneana?",
      "options": [
        {
          "letter": "A",
          "text": "Microaneurismas y exudados duros"
        },
        {
          "letter": "B",
          "text": "Excavación papilar aumentada, con relación copa/disco de 0,8"
        },
        {
          "letter": "C",
          "text": "Mancha rojo cereza en la mácula"
        },
        {
          "letter": "D",
          "text": "Papilas solevantadas, de bordes borrosos, sin pulso venoso y con hemorragias peripapilares bilaterales"
        },
        {
          "letter": "E",
          "text": "Palidez papilar unilateral sin edema"
        }
      ],
      "correct": "D",
      "explanation": "El edema de papila es el signo cardinal de hipertensión intracraneana: papilas solevantadas de bordes borrosos, pérdida del pulso venoso espontáneo, ingurgitación venosa y hemorragias peripapilares, habitualmente bilateral. En esta paciente sugiere hipertensión intracraneana idiopática, que requiere neuroimagen antes de la punción lumbar. La excavación aumentada es propia del glaucoma.",
      "say": {
        "stem": "Mujer de veintiocho años, obesa, con cefalea matinal progresiva y oscurecimientos visuales transitorios. Le haces fondo de ojo.",
        "question": "¿Qué hallazgo indica hipertensión intracraneana?",
        "options": "Las opciones: microaneurismas, excavación aumentada, mancha rojo cereza, papilas solevantadas de bordes borrosos con hemorragias o palidez papilar unilateral. Piénsalo.",
        "answer": "Es la D. Edema de papila bilateral, con bordes borrosos, sin pulso venoso y con hemorragias peripapilares. La palidez papilar indica atrofia óptica, que es una secuela tardía y no el signo agudo."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.02.1.026 · Tumores de la vía óptica",
      "stem": "Niña de 5 años con neurofibromatosis tipo 1 (múltiples manchas café con leche y efélides axilares). En control se detecta disminución de la agudeza visual del ojo derecho, defecto pupilar aferente relativo y palidez del disco óptico en el fondo de ojo.",
      "question": "¿Cuál es el diagnóstico más probable y el estudio indicado?",
      "options": [
        {
          "letter": "A",
          "text": "Glioma de la vía óptica; resonancia magnética de cerebro y órbitas"
        },
        {
          "letter": "B",
          "text": "Ambliopía refractiva; lentes"
        },
        {
          "letter": "C",
          "text": "Retinoblastoma; ecografía ocular"
        },
        {
          "letter": "D",
          "text": "Neuritis óptica desmielinizante; punción lumbar"
        },
        {
          "letter": "E",
          "text": "Catarata congénita; facoemulsificación"
        }
      ],
      "correct": "A",
      "explanation": "El glioma de la vía óptica (astrocitoma pilocítico) es el tumor de vía óptica más frecuente en la infancia y se asocia a NF1. Produce pérdida visual, defecto pupilar aferente, atrofia óptica, estrabismo o proptosis. Se estudia con resonancia magnética de cerebro y órbitas. En NF1 se recomienda control oftalmológico anual en la infancia.",
      "say": {
        "stem": "Niña de cinco años con neurofibromatosis tipo uno que pierde visión del ojo derecho, con defecto pupilar aferente y papila pálida.",
        "question": "¿Cuál es el diagnóstico y el estudio indicado?",
        "options": "Las opciones: glioma de la vía óptica con resonancia, ambliopía con lentes, retinoblastoma, neuritis óptica o catarata congénita. Piénsalo.",
        "answer": "Es la A. En una niña con neurofibromatosis, la pérdida visual con defecto pupilar aferente y papila pálida es un glioma de la vía óptica, que se estudia con resonancia. La ambliopía tienta por la edad, pero no produce defecto pupilar aferente ni palidez de la papila."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El examen que no falla', tag: 'Marcus Gunn', kind: 'key', items: [
          { t: 'Ambas pupilas se dilatan al iluminar el ojo enfermo', d: 'Signo más sensible de lesión asimétrica del nervio óptico',
            say: 'Cerremos con las reglas de oro. El defecto pupilar aferente relativo, la pupila de Marcus Gunn, es el signo más sensible de una lesión asimétrica del nervio óptico, y se busca con la linterna oscilante.' },
        ] },
        { title: 'Neuritis óptica', tag: 'Dolor, discromatopsia y DPAR', kind: 'criteria', items: [
          { t: 'Fondo de ojo normal en la mayoría', d: 'No lo descarta la falta de hallazgos',
            say: 'La neuritis óptica es baja visual monocular subaguda, con dolor al mover el ojo y discromatopsia. El fondo de ojo normal en la mayoría de los casos no descarta el diagnóstico.' },
          { t: 'Vínculo con la esclerosis múltiple', d: 'Resonancia con gadolinio, nunca prednisona oral sola',
            say: 'Y su vínculo con la esclerosis múltiple exige resonancia con gadolinio, y tratamiento con pulsos de metilprednisolona endovenosa, nunca prednisona oral sola.' },
        ] },
        { title: 'Papiledema', tag: 'Bilateral, sin dolor', kind: 'alert', items: [
          { t: 'Neuroimagen antes que punción lumbar', d: 'Para no herniar el cerebro',
            say: 'Si te llevas una sola idea de hoy: la neuritis es unilateral, dolorosa y con defecto pupilar; el papiledema es bilateral, sin dolor, y antes de puncionar siempre va la neuroimagen. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paciente con pérdida visual y sospecha neuroftalmológica: decide con la linterna oscilante',
    root: (() => {
      const nlm = N('refer', 'Neuroimagen urgente, nunca punción lumbar antes', 'Descarta masa, hidrocefalia o trombosis venosa',
        'Pide neuroimagen urgente antes que cualquier otra cosa: si hay una masa y punzas primero, el riesgo es una hernia cerebral.');
      const papiledema = N('alert', 'Sospecha de papiledema por hipertensión endocraneana', 'Bilateral, sin dolor, visión conservada al inicio',
        'Sospecha papiledema: es bilateral, sin dolor ocular, con visión conservada al inicio y cefalea que empeora en la mañana.',
        ['', nlm]);

      const meti = N('ok', 'Pulsos de metilprednisolona endovenosa', 'Un gramo al día, tres a cinco días, nunca prednisona oral sola',
        'Inicia pulsos de metilprednisolona endovenosa, un gramo al día por tres a cinco días. Nunca prednisona oral sola: duplica las recurrencias.');
      const rm = N('do', 'Resonancia de encéfalo y órbitas con gadolinio', 'Busca placas desmielinizantes silenciosas',
        'Pide resonancia de encéfalo y órbitas con gadolinio, buscando otras placas desmielinizantes que definan el riesgo de esclerosis múltiple.',
        ['', meti]);
      const neuritis = N('alert', 'Sospecha de neuritis óptica', 'Unilateral, dolorosa, con discromatopsia',
        'Sospecha neuritis óptica: es unilateral, duele al mover el ojo, y suele haber discromatopsia para el rojo.',
        ['', rm]);

      const dparQ = N('q', 'Hay defecto pupilar aferente relativo', 'Ambas pupilas se dilatan al iluminar el ojo afectado',
        'Haz la prueba de la linterna oscilante: mira si ambas pupilas se dilatan al pasar la luz al ojo afectado.',
        ['sí, DPAR positivo', neuritis],
        ['no, sin DPAR, pero hay edema bilateral', papiledema]);

      return N('start', 'Paciente con pérdida visual o cefalea con signos visuales', 'Antes de examinar el fondo de ojo, examina las pupilas',
        'Ante un paciente con pérdida de visión o cefalea con síntomas visuales, examina primero las pupilas con la linterna oscilante, antes de fijarte en el fondo de ojo.',
        ['', dparQ]);
    })(),
  },
};
