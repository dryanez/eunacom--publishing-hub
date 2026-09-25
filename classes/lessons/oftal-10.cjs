// Clase 15.10 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-10).
// Nota: el banco real EUNACOM no tiene ninguna pregunta donde desprendimiento de retina sea
// la respuesta correcta (búsquedas por código 6.02.1.003 y por palabra clave devuelven catarata
// u otros diagnósticos, o preguntas donde el desprendimiento es un distractor descartado). Se usan
// las preguntas propias del libro como "Caso representativo", sin fecha, según LESSON_STANDARD.md.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Moscas, destellos y una cortina que avanza: la secuencia que te dice que hay que operar antes de que caiga la mácula',
      say: 'Bienvenidos. Hoy vemos el desprendimiento de retina, una de las urgencias oftalmológicas más importantes del examen. La buena noticia es que tiene una secuencia clínica clásica, casi de manual, y una sola variable que decide el pronóstico: si la mácula todavía está pegada o ya se desprendió. Vamos a verlo completo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'El mecanismo regmatógeno: por qué se despega la retina',
      nodes: [
        { id: 'liq', col: 0, row: 1, k: 'cause', t: 'Licuefacción del vítreo', s: 'Cambio normal con la edad' },
        { id: 'dvp', col: 1, row: 1, k: 'mech', t: 'Desprendimiento de vítreo posterior', s: 'El vítreo se separa de la retina' },
        { id: 'des', col: 2, row: 1, k: 'mech', t: 'Tracción y desgarro periférico', s: 'Rotura en una zona de retina delgada' },
        { id: 'flu', col: 3, row: 1, k: 'effect', t: 'El vítreo líquido pasa al desgarro', s: 'Se cuela al espacio subretiniano' },
        { id: 'drr', col: 4, row: 1, k: 'risk', t: 'Retina despegada del epitelio', s: 'Desprendimiento de retina regmatógeno' },
        { id: 'mio', col: 0, row: 0, k: 'cause', t: 'Miopía magna', s: 'Retina periférica delgada; principal factor de riesgo' },
        { id: 'cx', col: 0, row: 2, k: 'cause', t: 'Cirugía de catarata previa', s: 'Y traumatismo ocular' },
      ],
      edges: [
        { from: 'liq', to: 'dvp' }, { from: 'dvp', to: 'des' }, { from: 'des', to: 'flu' }, { from: 'flu', to: 'drr' },
        { from: 'mio', to: 'des', label: 'predispone' }, { from: 'cx', to: 'des', label: 'predispone' },
      ],
      steps: [
        { show: ['liq', 'dvp'], note: 'Un cambio normal del envejecimiento del ojo',
          say: 'Empecemos por el mecanismo, porque explica toda la secuencia clínica que viene después. Con la edad, el humor vítreo se licúa y se contrae, y en algún momento se separa de la retina. Eso es el desprendimiento de vítreo posterior, y por sí solo es un fenómeno normal del envejecimiento del ojo.' },
        { show: ['des'], note: 'La retina, del griego rhegma, se rompe',
          say: 'El problema aparece si, al separarse, el vítreo queda pegado a una zona de retina periférica más delgada, y la traccionan hasta romperla. Eso es el desgarro o la rotura retiniana, de donde viene el nombre regmatógeno, del griego rhegma, que significa rotura.' },
        { show: ['flu', 'drr'], note: 'Como despegar un papel mural húmedo',
          say: 'Y por ese orificio, el vítreo ya licuado se cuela hacia el espacio que hay entre la retina y el epitelio pigmentario, y la va despegando, como si despegaras un papel mural húmedo. Ese es el desprendimiento de retina regmatógeno, y es la forma más frecuente, más del noventa por ciento de los casos.' },
        { show: ['mio', 'cx'], note: 'El dato que se pregunta: factores de riesgo',
          say: 'Los factores de riesgo se preguntan mucho: primero, la miopía magna, porque el ojo alargado tiene una retina periférica más delgada y con más tracciones. También la cirugía de catarata previa, y el traumatismo ocular.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La secuencia que tienes que reconocer de memoria',
      cards: [
        { title: 'Pródromos', tag: 'Antes de la cortina', kind: 'key', items: [
          { t: 'Miodesopsias bruscas', d: 'Moscas volantes o lluvia de puntos negros',
            say: 'La clínica sigue una secuencia temporal que se pregunta siempre, y que tienes que reconocer de memoria. Primero aparecen las miodesopsias de inicio brusco: el paciente las describe como moscas volantes, telarañas, o una lluvia de puntos negros, por la condensación del vítreo o una microhemorragia.' },
          { t: 'Fotopsias', d: 'Destellos o relámpagos en la periferia',
            say: 'Seguidas de fotopsias: destellos luminosos, como relámpagos, en la periferia del campo visual, producidos por la tracción mecánica del vítreo sobre los fotorreceptores.' },
        ] },
        { title: 'Desprendimiento establecido', tag: 'La cortina que avanza', kind: 'alert', items: [
          { t: 'Sombra o cortina fija en la periferia', d: 'Progresa en horas o días hacia el centro',
            say: 'Si el proceso avanza, aparece una sombra oscura, fija, como un telón o una cortina, en la periferia del campo visual, que va progresando gradualmente hacia el centro a lo largo de horas o días.' },
          { t: 'Caída de la visión central', d: 'Si la mácula se despega, es brusca y grave',
            say: 'Y si esa sombra alcanza la mácula, ahí sí hay una caída brusca, profunda y potencialmente irreversible de la visión central. Guarda esta idea, porque de eso depende todo el pronóstico.' },
        ] },
        { title: 'La regla de oro', tag: 'Ojo blanco, sin dolor', kind: 'normal', items: [
          { t: 'Completamente indoloro', d: 'Y con el ojo blanco, sin hiperemia ni secreción',
            say: 'Y la regla de oro que resuelve casi cualquier pregunta del tema: el desprendimiento de retina es completamente indoloro, y cursa con el ojo blanco. Si el enunciado te da dolor u ojo rojo, piensa en otra causa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Semiología y diagnósticos diferenciales',
      title: 'El fondo de ojo, y lo que no es un desprendimiento regmatógeno',
      nodes: [
        { id: 'fo', col: 0, row: 1, k: 'good', t: 'Fondo de ojo con pupila dilatada', s: 'Oftalmoscopía indirecta' },
        { id: 'hal', col: 1, row: 1, k: 'q', t: 'Retina levantada, móvil, grisácea', s: 'Con los vasos oscurecidos y tortuosos' },
        { id: 'tra', col: 3, row: 0, k: 'trap', t: 'Traccional', s: 'Bandas fibrosas, sin desgarro previo' },
        { id: 'exu', col: 3, row: 2, k: 'trap', t: 'Exudativo o seroso', s: 'Líquido sin tracción ni rotura' },
      ],
      edges: [
        { from: 'fo', to: 'hal' },
        { from: 'hal', to: 'tra', label: 'no es regmatógeno' }, { from: 'hal', to: 'exu', label: 'no es regmatógeno' },
      ],
      steps: [
        { show: ['fo', 'hal'], note: 'La imagen que confirma el diagnóstico',
          say: 'El diagnóstico se confirma con oftalmoscopía indirecta y pupila dilatada. Se ve la retina levantada, móvil y de un color pálido o grisáceo, que hace protrusión hacia la cavidad vítrea, con los vasos retinianos que se ven tortuosos y oscuros sobre la zona desprendida.' },
        { show: ['tra'], note: 'Sin desgarro: es traccional, no regmatógeno',
          say: 'Pero no todo desprendimiento es regmatógeno, y esa es una trampa clásica. El traccional no tiene desgarro: son bandas fibrovasculares que traccionan mecánicamente la retina hacia adelante, y es típico de la retinopatía diabética proliferativa avanzada.' },
        { show: ['exu'], note: 'Sin desgarro ni tracción: piensa en tumor o inflamación',
          say: 'Y el exudativo o seroso tampoco tiene desgarro ni tracción: es líquido que se acumula por debajo de la retina por un tumor, como un melanoma de coroides, por inflamación severa, o por una preeclampsia grave. Si el enunciado no te da fotopsias ni miodesopsias previas, sospecha uno de estos dos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Urgencia y GES número veintidós',
      title: 'Conducta inmediata y el plazo que decide la visión',
      cards: [
        { title: 'En atención primaria', tag: 'Antes del traslado', kind: 'key', items: [
          { t: 'Reposo absoluto', d: 'En posición semi-Fowler o decúbito',
            say: 'La conducta en la urgencia de atención primaria es simple, pero se pregunta mucho. Reposo absoluto, en posición semi-Fowler o decúbito, para que la gravedad no favorezca el avance del líquido.' },
          { t: 'Régimen cero y derivación inmediata', d: 'Por la inminencia de cirugía',
            say: 'Régimen cero, por la inminencia de una cirugía bajo anestesia, y derivación de extrema urgencia a un centro oftalmológico. No se indican colirios: esto no se trata en la atención primaria.' },
        ] },
        { title: 'Mácula on versus mácula off', tag: 'Lo que decide el pronóstico', kind: 'alert', items: [
          { t: 'Mácula aplicada: emergencia máxima', d: 'Menos de veinticuatro a cuarenta y ocho horas',
            say: 'Y aquí está la variable que más se pregunta: el estado de la mácula. Si la mácula todavía está aplicada, la visión central se conserva, y es una emergencia quirúrgica máxima, con un plazo ideal de menos de veinticuatro a cuarenta y ocho horas, porque más del noventa por ciento recupera la visión completa.' },
          { t: 'Mácula desprendida: pronóstico reservado', d: 'Sigue siendo urgente, pero el plazo es distinto',
            say: 'Si la mácula ya se desprendió, la visión central rara vez se recupera del todo, aunque sigue siendo una cirugía urgente, dentro de siete a diez días. La lección para el examen es que la hora de la cirugía la decide si la mácula sigue aplicada o no.' },
        ] },
        { title: 'Tratamiento quirúrgico', tag: 'Garantía GES número veintidós', kind: 'pharma', items: [
          { t: 'Desgarro sin desprendimiento', d: 'Fotocoagulación láser profiláctica',
            say: 'Si se pesca un desgarro antes de que despegue la retina, el tratamiento es la fotocoagulación con láser alrededor del desgarro, que crea una cicatriz que suelda la retina al epitelio pigmentario.' },
          { t: 'Desprendimiento establecido', d: 'Vitrectomía pars plana o cerclaje escleral',
            say: 'Y si el desprendimiento ya está establecido, la cirugía es la vitrectomía pars plana, con intercambio de líquido por gas o silicón, o el cerclaje escleral. Todo esto está cubierto por la garantía GES número veintidós, para el desprendimiento de retina regmatógeno no traumático.' },
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
      title: 'Tres desprendimientos, tres mecanismos, tres conductas',
      head: ['Tipo', 'Mecanismo', 'Causa típica', 'Manejo de elección'],
      rows: [
        { cells: ['Regmatógeno', 'Rotura retiniana; pasa vítreo líquido', 'Miopía magna, cirugía de catarata, trauma', 'Vitrectomía o cerclaje escleral, GES'],
          say: 'Repasemos las trampas. El regmatógeno necesita una rotura, y aparece en el miope, en el operado de catarata o en el trauma; se opera con vitrectomía o cerclaje.' },
        { cells: ['Traccional', 'Bandas fibrosas sin rotura', 'Retinopatía diabética proliferativa', 'Vitrectomía con corte de las bandas'],
          say: 'El traccional no tiene rotura: son bandas fibrosas que tiran de la retina, típico de la retinopatía diabética proliferativa avanzada, y se opera cortando esas bandas.' },
        { cells: ['Exudativo o seroso', 'Trasudación, sin tracción ni rotura', 'Tumor, coroiditis, preeclampsia grave', 'Tratamiento de la causa; no es quirúrgico'],
          say: 'Y el exudativo no tiene tracción ni rotura: es líquido que se acumula por un tumor o una inflamación, y el tratamiento no es quirúrgico, sino tratar la causa de fondo.' },
        { cells: ['Cualquier tipo', 'Sospecha clínica sin pródromos', 'Confundir con hemorragia vítrea', 'El desprendimiento avanza en cortina; la hemorragia da humo rojizo'],
          say: 'Y una trampa transversal: si la pérdida visual es súbita, sin pródromos, con visión de humo o tinte rojizo y pérdida del reflejo rojo, piensa primero en hemorragia vítrea, no en desprendimiento. El desprendimiento avanza como cortina, y suele estar precedido de fotopsias y miodesopsias.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Protocolo quirúrgico',
      title: 'Tres herramientas, tres momentos distintos de la enfermedad',
      head: ['Modalidad', 'Indicación', 'Mecanismo', 'Cuidado clave'],
      rows: [
        { cells: ['Fotocoagulación láser', 'Desgarro sin desprendimiento', 'Cicatriz coriorretiniana que suelda el desgarro', 'Reposo relativo por cuarenta y ocho horas'],
          say: 'Y para cerrar el tratamiento, tres herramientas para tres momentos distintos. La fotocoagulación láser es para el desgarro que todavía no se ha desprendido: crea una cicatriz que suelda la retina, y el paciente solo necesita reposo relativo por cuarenta y ocho horas.' },
        { cells: ['Vitrectomía pars plana', 'Desprendimiento ya establecido o traccional', 'Retira el vítreo, aplana con gas o silicón, y sella con láser', 'Posición boca abajo estricta, de una a dos semanas'],
          say: 'La vitrectomía pars plana es para el desprendimiento ya establecido, o para el traccional: retira el vítreo, aplana la retina con gas o silicón, y sella con láser. Y aquí está un detalle que se pregunta: el paciente necesita mantener una posición boca abajo estricta, durante una a dos semanas, para que la burbuja sostenga la retina en su lugar.' },
        { cells: ['Cerclaje escleral', 'Desprendimientos periféricos, pacientes jóvenes', 'Banda de silicona externa que indenta la esclera', 'Control estricto de la presión intraocular'],
          say: 'Y el cerclaje escleral, más usado en desprendimientos periféricos de pacientes jóvenes, es una banda de silicona por fuera del ojo que empuja la esclera hacia adentro, acercándola a la retina desprendida. Requiere control estricto de la presión intraocular en el postoperatorio.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 52 años con miopía de seis dioptrías consulta porque hace 48 horas comenzó a ver destellos luminosos en el rabillo del ojo derecho, como flashes de cámara, junto con muchos puntos negros flotantes. Desde esta mañana nota una sombra oscura fija en la parte inferior del campo visual derecho, que ha ido creciendo hacia el centro, como si cerraran una persiana. No refiere dolor, trauma ni ojo rojo. Al examen: ojo blanco, pupila fotorreactiva, agudeza visual conservada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar un colirio antiinflamatorio y control ambulatorio en una semana' },
        { letter: 'B', text: 'Reposo absoluto, régimen cero y derivación de urgencia para cirugía GES' },
        { letter: 'C', text: 'Tranquilizar al paciente: las moscas volantes son siempre benignas' },
        { letter: 'D', text: 'Solicitar una resonancia magnética de órbita antes de decidir' },
        { letter: 'E', text: 'Indicar reposo en el domicilio y control en un mes' },
      ],
      correct: 'B',
      explanation: 'Fotopsias y miodesopsias agudas seguidas de una sombra en cortina que progresa, en un paciente miope y con ojo blanco indoloro, es el cuadro clásico de desprendimiento de retina regmatógeno. La agudeza visual conservada sugiere que la mácula aún está aplicada, lo que hace de esto una emergencia quirúrgica de horas.',
      say: {
        stem: 'Vamos al caso. Un hombre de cincuenta y dos años, miope, consulta porque hace cuarenta y ocho horas empezó a ver destellos luminosos en el rabillo del ojo derecho, como flashes de cámara, junto con muchos puntos negros flotantes. Desde esta mañana nota una sombra fija en la parte inferior de su campo visual, que ha ido creciendo hacia el centro, como si cerraran una persiana. No tiene dolor, trauma ni ojo rojo, y su agudeza visual todavía está conservada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: un colirio antiinflamatorio con control en una semana, reposo absoluto y derivación de urgencia para cirugía GES, tranquilizarlo porque las moscas volantes son siempre benignas, pedir una resonancia de órbita antes de decidir, o reposo en la casa con control en un mes. Piénsalo.',
        answer: 'Es la B. Junta la secuencia: fotopsias, miodesopsias, y ahora una sombra en cortina que avanza, en un paciente miope, con ojo blanco e indoloro. Es un desprendimiento de retina regmatógeno. Y como la visión todavía está conservada, la mácula sigue aplicada: es una emergencia de horas, no de semanas. La opción C es la trampa más peligrosa, porque unas miodesopsias nuevas, agudas y masivas nunca son un hallazgo trivial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: '¿Cuál es la diferencia fisiopatológica fundamental entre el desprendimiento de retina regmatógeno y el desprendimiento de retina traccional?',
      question: '¿Cuál es la diferencia fisiopatológica fundamental entre ambos?',
      options: [
        { letter: 'A', text: 'El regmatógeno requiere una rotura que permite el paso de vítreo líquido; el traccional lo producen membranas fibrovasculares sin desgarro' },
        { letter: 'B', text: 'El regmatógeno es doloroso y con ojo rojo, mientras que el traccional es indoloro' },
        { letter: 'C', text: 'El traccional se opera siempre con láser superficial y el regmatógeno solo con corticoides orales' },
        { letter: 'D', text: 'El regmatógeno se produce por exudados inflamatorios y el traccional por hipertensión intraocular' },
        { letter: 'E', text: 'No existe diferencia; son dos términos sinónimos para la misma patología' },
      ],
      correct: 'A',
      explanation: 'El desprendimiento regmatógeno exige una rotura de la retina, por la que el vítreo licuado penetra al espacio subretiniano. El traccional se origina por membranas fibróticas que tiran de la retina sin que exista una rotura inicial, típicas de la retinopatía diabética proliferativa.',
      say: {
        stem: 'Ahora una pregunta representativa del banco de la especialidad, sin fecha del examen real. La pregunta es directa: ¿cuál es la diferencia fisiopatológica fundamental entre el desprendimiento de retina regmatógeno y el traccional?',
        question: 'Tómate un momento para pensar en el mecanismo de cada uno.',
        options: 'Las opciones: que el regmatógeno necesita una rotura y el traccional son membranas fibrosas sin desgarro, que el regmatógeno duele y el traccional no, que el traccional se trata con láser y el regmatógeno solo con corticoides, que el regmatógeno es por exudados y el traccional por presión alta, o que no existe ninguna diferencia entre ambos. Piénsalo.',
        answer: 'Es la A. El regmatógeno exige, por definición, una rotura de la retina, por la que se cuela el vítreo líquido. El traccional, en cambio, no tiene rotura: son bandas fibrovasculares, típicas de la retinopatía diabética proliferativa, que tiran físicamente de la retina hacia el centro del ojo. Confundir estos dos mecanismos cambia por completo la estrategia quirúrgica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'Una mujer de 55 años presenta de forma repentina múltiples moscas volantes y destellos luminosos en el ojo derecho. Acude a evaluación oftalmológica el mismo día. La oftalmoscopía indirecta con pupila dilatada revela un desgarro retiniano periférico en herradura, sin líquido subretiniano, es decir, sin desprendimiento todavía.',
      question: '¿Cuál es el tratamiento profiláctico de elección para evitar que desarrolle un desprendimiento de retina?',
      options: [
        { letter: 'A', text: 'Vitrectomía pars plana urgente con infusión de aceite de silicona' },
        { letter: 'B', text: 'Fotocoagulación con láser de argón alrededor del desgarro' },
        { letter: 'C', text: 'Inyección intravítrea de triamcinolona' },
        { letter: 'D', text: 'Corticoides orales en dosis altas por un mes' },
        { letter: 'E', text: 'Observación clínica semanal sin intervención' },
      ],
      correct: 'B',
      explanation: 'Cuando el desgarro retiniano se diagnostica antes de que el vítreo líquido levante la retina, el tratamiento de elección es la fotocoagulación con láser de argón, que sella el desgarro con una cicatriz coriorretiniana y evita el desprendimiento.',
      say: {
        stem: 'Otra pregunta representativa, también sin fecha del examen real. Una mujer de cincuenta y cinco años presenta, de forma repentina, muchas moscas volantes y destellos luminosos en el ojo derecho, y consulta el mismo día. La oftalmoscopía con pupila dilatada muestra un desgarro retiniano periférico en forma de herradura, pero todavía sin líquido por debajo, es decir, sin desprendimiento.',
        question: '¿Cuál es el tratamiento profiláctico de elección para evitar que este desgarro progrese a un desprendimiento de retina?',
        options: 'Las opciones: vitrectomía urgente con aceite de silicona, fotocoagulación con láser de argón alrededor del desgarro, una inyección intravítrea de corticoide, corticoides orales por un mes, u observación clínica semanal sin intervención. Piénsalo.',
        answer: 'Es la B. Este es el otro extremo del mismo tema: cuando se pesca el desgarro a tiempo, antes de que el vítreo líquido haya levantado la retina, no hace falta una cirugía mayor. Basta con la fotocoagulación láser alrededor del desgarro, que en pocos días forma una cicatriz firme y sella la retina al epitelio pigmentario. Esperar una semana, como dice la opción E, es la trampa que puede convertir un desgarro sellable en un desprendimiento quirúrgico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'En una serie de pacientes operados de desprendimiento de retina, se busca el factor que se asocia con el peor pronóstico visual final.',
      question: '¿Cuál de los siguientes factores predice la peor agudeza visual final tras la cirugía?',
      options: [
        { letter: 'A', text: 'Desprendimiento localizado en los cuadrantes superiores' },
        { letter: 'B', text: 'Compromiso macular con desprendimiento foveal de más de una semana de evolución' },
        { letter: 'C', text: 'Edad menor a cuarenta años' },
        { letter: 'D', text: 'Uso previo de lentes de contacto blandos' },
        { letter: 'E', text: 'Presencia de miodesopsias antes de la cirugía' },
      ],
      correct: 'B',
      explanation: 'El factor pronóstico determinante es el estado de la mácula y el tiempo de isquemia foveal. Si el desprendimiento foveal persiste por más de una a dos semanas, los conos foveales sufren daño irreversible, y la recuperación de la visión central fina es pobre aunque la retina se reaplique con éxito anatómico.',
      say: {
        stem: 'Una última pregunta representativa, también sin fecha del examen real. Se busca, en pacientes operados de desprendimiento de retina, cuál es el factor que más empeora el pronóstico visual final.',
        question: '¿Cuál de las siguientes opciones predice la peor agudeza visual, incluso después de una cirugía anatómicamente exitosa?',
        options: 'Las opciones: que el desprendimiento esté en los cuadrantes superiores, que la mácula esté desprendida por más de una semana, tener menos de cuarenta años, haber usado lentes de contacto blandos, o haber tenido miodesopsias antes de operarse. Piénsalo.',
        answer: 'Es la B. Esto cierra el tema exactamente donde lo abrimos: lo que decide la visión final no es la ubicación del desprendimiento ni la edad del paciente, es cuánto tiempo estuvo la mácula sin su epitelio pigmentario. Si el desprendimiento foveal dura más de una a dos semanas, los conos de la fóvea se dañan de forma irreversible, y la retina puede quedar anatómicamente perfecta, pero la visión central fina ya no vuelve del todo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La secuencia', tag: 'De memoria', kind: 'key', items: [
          { t: 'Miodesopsias, luego fotopsias', d: 'Después, una cortina que avanza',
            say: 'Cerremos con las reglas de oro. La secuencia es miodesopsias, luego fotopsias, y después una sombra en cortina que avanza desde la periferia.' },
        ] },
        { title: 'La regla de oro', tag: 'Ojo blanco, sin dolor', kind: 'alert', items: [
          { t: 'Indoloro y con ojo blanco', d: 'Si hay dolor u ojo rojo, piensa en otra causa',
            say: 'Y recuerda siempre: el desprendimiento de retina es indoloro y cursa con ojo blanco. Si hay dolor, busca otro diagnóstico.' },
        ] },
        { title: 'El pronóstico', tag: 'Mácula on versus off', kind: 'pharma', items: [
          { t: 'Mácula aplicada: emergencia de horas', d: 'Mácula desprendida: urgente, pero el plazo es distinto',
            say: 'Y si te llevas una sola idea de hoy: lo que decide la urgencia real no es el desprendimiento en sí, es si la mácula todavía está aplicada. Con mácula on, cada hora cuenta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fotopsias y miodesopsias agudas: sigue la secuencia hasta la mácula',
    root: (() => {
      const emergencia = N('alert', 'Emergencia quirúrgica máxima', 'Menos de veinticuatro a cuarenta y ocho horas',
        'Notifica la garantía GES número veintidós y deriva para cirugía en menos de veinticuatro a cuarenta y ocho horas: más del noventa por ciento recupera la visión completa.');
      const urgenteDias = N('ok', 'Cirugía urgente en días', 'Dentro de siete a diez días',
        'La cirugía sigue siendo urgente, dentro de siete a diez días, aunque el pronóstico visual central es más reservado.');
      const preguntaMacula = N('q', '¿La visión central todavía está conservada?', 'Compara la agudeza visual con la basal del paciente',
        'Evalúa si la agudeza visual central todavía está conservada, lo que indica que la mácula sigue aplicada.',
        ['sí, conservada: mácula on', emergencia],
        ['no, muy disminuida: mácula off', urgenteDias]);
      const confirmado = N('refer', 'Desprendimiento de retina regmatógeno', 'Reposo absoluto, régimen cero, derivación de urgencia',
        'Indica reposo absoluto en semi-Fowler o decúbito, régimen cero, y deriva de urgencia a un centro oftalmológico especializado.',
        ['', preguntaMacula]);
      const soloDesgarro = N('do', 'Desgarro sin desprendimiento', 'Fotocoagulación láser profiláctica ambulatoria',
        'Si el fondo de ojo muestra el desgarro pero la retina aún no está despegada, el tratamiento es la fotocoagulación láser alrededor del desgarro.');
      const preguntaFondo = N('q', '¿El fondo de ojo muestra retina levantada y móvil, o solo el desgarro?', 'Oftalmoscopía indirecta con pupila dilatada',
        'Realiza fondo de ojo con pupila dilatada para ver si la retina ya está desprendida o si solo hay un desgarro.',
        ['retina levantada y desprendida', confirmado],
        ['solo el desgarro, retina aplicada', soloDesgarro]);
      return N('start', 'Miodesopsias y fotopsias de inicio brusco', 'Sin dolor ni ojo rojo',
        'Paciente con miodesopsias y fotopsias de inicio brusco, sin dolor ni ojo rojo, con o sin sombra en el campo visual.',
        ['', preguntaFondo]);
    })(),
  },
};
