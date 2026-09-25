// Clase 15.11 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-11).
// Nota: el banco real EUNACOM no tiene ninguna pregunta donde la oclusión arterial o venosa
// central de la retina sea la respuesta correcta (las búsquedas por código y por palabra clave
// devuelven casos donde ambas son distractores descartados a favor de otro diagnóstico). Se usan
// las preguntas propias del libro como "Caso representativo", sin fecha, según LESSON_STANDARD.md.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dos accidentes vasculares del ojo, un mismo paciente indoloro: la clave está en el fondo de ojo',
      say: 'Bienvenidos. Hoy vemos las oclusiones vasculares de la retina, la arterial y la venosa. Piensa en ellas como el infarto y la trombosis del ojo: dos accidentes vasculares que se parecen en la forma de presentarse, pero que el fondo de ojo distingue sin ninguna duda. Y las dos te obligan a pensar más allá del ojo, porque son ventanas al resto del cuerpo.',
    },

    {
      type: 'flow',
      kicker: 'Oclusión arterial',
      title: 'OACR: el infarto cerebral de la retina',
      nodes: [
        { id: 'emb', col: 0, row: 0, k: 'cause', t: 'Émbolo carotídeo o cardíaco', s: 'Fibrilación auricular, ateroma carotídeo' },
        { id: 'hor', col: 0, row: 1, k: 'cause', t: 'Arteritis de células gigantes', s: 'Sospechar siempre después de los sesenta y cinco años' },
        { id: 'obs', col: 1, row: 0, k: 'mech', t: 'Obstrucción de la arteria central', s: 'Infarto retiniano agudo' },
        { id: 'clin', col: 2, row: 0, k: 'effect', t: 'Pérdida catastrófica en segundos', s: 'Como si se apagara la pantalla' },
        { id: 'rce', col: 3, row: 0, k: 'risk', t: 'Mancha rojo cereza foveal', s: 'Sobre una retina pálida y edematosa' },
        { id: 'dpar', col: 3, row: 1, k: 'q', t: 'Defecto pupilar aferente relativo', s: 'Pupila de Marcus Gunn' },
      ],
      edges: [
        { from: 'emb', to: 'obs' }, { from: 'hor', to: 'obs', label: 'en el adulto mayor' },
        { from: 'obs', to: 'clin' }, { from: 'clin', to: 'rce' }, { from: 'obs', to: 'dpar' },
      ],
      steps: [
        { show: ['emb', 'obs'], note: 'Es el equivalente a un accidente cerebrovascular isquémico',
          say: 'Empecemos con la oclusión de la arteria central de la retina, la OACR. Piénsala como el equivalente exacto de un infarto cerebral isquémico, pero en el ojo. La causa más frecuente es un émbolo, que puede venir de una placa de ateroma en la bifurcación carotídea, o del corazón, como en una fibrilación auricular o una valvulopatía.' },
        { show: ['hor'], note: 'No te olvides de preguntar por la arteritis de Horton',
          say: 'Y en todo paciente mayor de sesenta y cinco a setenta años, siempre hay que descartar la arteritis de células gigantes, la enfermedad de Horton, porque cambia el tratamiento de inmediato.' },
        { show: ['clin'], note: 'Segundos, no minutos ni horas',
          say: 'La clínica es dramática: pérdida visual súbita, catastrófica, profunda, e indolora, en cuestión de segundos. El paciente lo describe como si se apagara la pantalla de golpe.' },
        { show: ['dpar'], note: 'La pupila del ojo afectado casi no reacciona',
          say: 'Al examinar las pupilas encuentras un defecto pupilar aferente relativo marcado, la pupila de Marcus Gunn, en el ojo afectado.' },
        { show: ['rce'], note: 'El hallazgo que responde la pregunta por sí solo',
          say: 'Y el fondo de ojo es patognomónico: la retina se ve intensamente pálida, edematosa, lechosa, por el infarto de la capa de fibras nerviosas, y en el centro brilla la mancha rojo cereza. La fóvea no tiene capa ganglionar, se nutre directo de la coroides sana, y por eso mantiene su color rojo natural mientras todo alrededor está blanco. Si el examen te da esta imagen, la respuesta es esta, sin dudar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de la OACR',
      title: 'La ventana de rescate: menos de seis horas',
      cards: [
        { title: 'Maniobras de urgencia', tag: 'Intentar desplazar el émbolo', kind: 'key', items: [
          { t: 'Masaje ocular digital', d: 'Y paracentesis de cámara anterior',
            say: 'El tratamiento de urgencia se intenta dentro de las primeras seis horas, e incluye masaje ocular digital y paracentesis de la cámara anterior, para intentar desplazar el émbolo hacia una rama más periférica y menos crítica.' },
          { t: 'Hipotensores oculares', d: 'Acetazolamida y timolol',
            say: 'Además se usan hipotensores oculares, como acetazolamida y timolol, con la misma intención de bajar la presión y favorecer el desplazamiento del émbolo.' },
        ] },
        { title: 'Si se sospecha Horton', tag: 'Proteger el ojo contralateral', kind: 'alert', items: [
          { t: 'Metilprednisolona endovenosa urgente', d: 'Claudicación mandibular, VHS elevada',
            say: 'Y si hay sospecha de arteritis de Horton, por claudicación mandibular o una velocidad de eritrosedimentación elevada, se indica metilprednisolona endovenosa de urgencia, no para salvar el ojo ya afectado, sino para proteger el ojo contralateral, que corre el mismo riesgo.' },
        ] },
        { title: 'Estudio sistémico', tag: 'Es un accidente vascular, trátalo como tal', kind: 'normal', items: [
          { t: 'Ecografía Doppler carotídea', d: 'Y electrocardiograma u Holter de arritmias',
            say: 'Y como es un verdadero accidente vascular, todo paciente con OACR se estudia igual que un accidente cerebrovascular: ecografía Doppler carotídea, electrocardiograma u Holter para buscar arritmias, y evaluación cardiológica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Oclusión venosa',
      title: 'OVCR: la trombosis venosa, y la complicación de los cien días',
      nodes: [
        { id: 'hta', col: 0, row: 1, k: 'cause', t: 'Hipertensión arterial y edad', s: 'También glaucoma crónico e hipercoagulabilidad' },
        { id: 'trom', col: 1, row: 1, k: 'mech', t: 'Trombosis venosa en la lámina cribosa', s: 'Segunda causa vascular de pérdida visual' },
        { id: 'clin2', col: 2, row: 1, k: 'effect', t: 'Baja visual subaguda o súbita', s: 'Habitualmente menos profunda que la arterial' },
        { id: 'piz', col: 3, row: 0, k: 'risk', t: 'Hemorragias en llamarada', s: 'En los cuatro cuadrantes: imagen en pizza marinara' },
        { id: 'vegf', col: 3, row: 2, k: 'mech', t: 'Isquemia libera VEGF', s: 'Factor de crecimiento del endotelio vascular' },
        { id: 'neo', col: 4, row: 2, k: 'trap', t: 'Glaucoma neovascular', s: 'El glaucoma de los cien días' },
      ],
      edges: [
        { from: 'hta', to: 'trom' }, { from: 'trom', to: 'clin2' }, { from: 'clin2', to: 'piz' },
        { from: 'trom', to: 'vegf', label: 'si es isquémica' }, { from: 'vegf', to: 'neo' },
      ],
      steps: [
        { show: ['hta', 'trom'], note: 'La segunda causa vascular de pérdida visual, después de la diabética',
          say: 'Ahora la oclusión de la vena central de la retina, la OVCR: es una trombosis en la lámina cribosa, favorecida por la hipertensión arterial, la edad avanzada, el glaucoma crónico y los estados de hipercoagulabilidad. Es la segunda causa vascular más común de pérdida visual, después de la retinopatía diabética.' },
        { show: ['clin2'], note: 'Menos profunda y más lenta que la arterial',
          say: 'La clínica también es indolora, pero suele ser subaguda o menos brusca que la arterial, y la pérdida visual habitualmente es menos profunda.' },
        { show: ['piz'], note: 'Retina en tormenta',
          say: 'El fondo de ojo también es patognomónico, pero completamente distinto: hemorragias retinianas masivas en llamarada, distribuidas en los cuatro cuadrantes, con venas dilatadas, tortuosas y congestivas, y exudados algodonosos. A esta imagen se le llama tormenta retiniana, o pizza marinara.' },
        { show: ['vegf', 'neo'], note: 'El dato que más se pregunta de esta mitad de la clase',
          say: 'Y aquí está la complicación que más se pregunta: cuando la oclusión es de tipo isquémica, la falta de perfusión libera grandes cantidades de factor de crecimiento del endotelio vascular, el VEGF, que genera neovasos en el iris y en el ángulo. Esos neovasos bloquean la salida del humor acuoso, y producen un glaucoma neovascular, doloroso y refractario, que aparece típicamente alrededor de los tres meses: el glaucoma de los cien días.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención y seguimiento de la OVCR',
      title: 'Vigilar para no llegar tarde al glaucoma neovascular',
      cards: [
        { title: 'Prevención del neovascular', tag: 'Antes de los cien días', kind: 'alert', items: [
          { t: 'Anti-VEGF intravítreo', d: 'O panfotocoagulación láser',
            say: 'La forma de evitar que llegue el glaucoma neovascular es tratar la isquemia antes de tiempo, con inyecciones intravítreas de anti-VEGF, o con panfotocoagulación láser, que reduce el estímulo que produce los neovasos.' },
        ] },
        { title: 'Seguimiento y estudio', tag: 'Control de presión, no solo de la retina', kind: 'normal', items: [
          { t: 'Perfil lipídico e hipertensión', d: 'Y control estricto de la presión intraocular',
            say: 'El seguimiento de la OVCR incluye estudio de hipertensión, perfil lipídico y coagulopatías, además de un control estricto y periódico de la presión intraocular durante los primeros meses, precisamente para pescar a tiempo la aparición de los neovasos.' },
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
      title: 'Arterial contra venosa: la pregunta clásica del examen',
      head: ['Característica', 'Oclusión arterial (OACR)', 'Oclusión venosa (OVCR)'],
      rows: [
        { cells: ['Velocidad de inicio', 'Brusca, en segundos', 'Rápida o subaguda, en horas a días'],
          say: 'Repasemos el contraste directo. La arterial se instala en segundos; la venosa, en horas o días.' },
        { cells: ['Fondo de ojo', 'Retina pálida con mancha rojo cereza foveal', 'Hemorragias en llamarada en los cuatro cuadrantes'],
          say: 'El fondo de ojo es la pregunta más frecuente: retina pálida con mancha rojo cereza es arterial; hemorragias en llamarada por los cuatro cuadrantes es venosa.' },
        { cells: ['Etiología', 'Émbolo carotídeo o cardíaco; arteritis de Horton', 'Trombosis asociada a hipertensión y glaucoma'],
          say: 'La arterial viene de un émbolo, o de Horton en el adulto mayor. La venosa viene de una trombosis, casi siempre sobre una hipertensión mal controlada.' },
        { cells: ['Complicación a los noventa días', 'Atrofia óptica pálida irreversible', 'Glaucoma neovascular: el glaucoma de los cien días'],
          say: 'Y la complicación tardía: la arterial deja una atrofia óptica pálida e irreversible. La venosa isquémica puede terminar en un glaucoma neovascular, alrededor de los cien días.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 71 años, hipertenso, con fibrilación auricular en tratamiento irregular, consulta por pérdida visual súbita y completa del ojo izquierdo, iniciada hace 2 horas al despertar. Refiere que se apagó la luz de golpe en ese ojo, sin dolor ni traumatismo. Al examen: ojo blanco, agudeza visual limitada a percepción de luz, defecto pupilar aferente en el ojo izquierdo. El fondo de ojo muestra palidez retiniana difusa con un punto rojo brillante en la fóvea.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar reposo domiciliario y control ambulatorio en una semana' },
        { letter: 'B', text: 'Iniciar maniobras de rescate ocular, derivar de urgencia y estudiar fuente embólica' },
        { letter: 'C', text: 'Indicar colirio de corticoide y antiinflamatorio oral' },
        { letter: 'D', text: 'Tranquilizar al paciente: la fibrilación auricular no se relaciona con la visión' },
        { letter: 'E', text: 'Solicitar campo visual computarizado antes de decidir cualquier conducta' },
      ],
      correct: 'B',
      explanation: 'Pérdida monocular súbita, catastrófica e indolora, con defecto pupilar aferente y mancha rojo cereza foveal, en un paciente con fibrilación auricular: oclusión de la arteria central de la retina de origen cardioembólico. La conducta es intentar maniobras de rescate, derivar de urgencia y hospitalizar para estudio vascular y anticoagulación, previniendo un accidente cerebrovascular futuro.',
      say: {
        stem: 'Vamos al caso. Un hombre de setenta y un años, hipertenso, con fibrilación auricular en tratamiento irregular, consulta por pérdida visual súbita y completa del ojo izquierdo, iniciada hace dos horas al despertar. Cuenta que se apagó la luz de golpe, sin dolor ni traumatismo. El ojo está blanco, la visión se reduce a percepción de luz, hay defecto pupilar aferente, y el fondo de ojo muestra retina pálida con un punto rojo brillante en la fóvea.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: reposo domiciliario con control en una semana, maniobras de rescate ocular más derivación urgente y estudio de la fuente embólica, colirio de corticoide con antiinflamatorio oral, tranquilizarlo porque la fibrilación no se relaciona con la visión, o pedir un campo visual antes de decidir. Piénsalo.',
        answer: 'Es la B. Todo el cuadro es una oclusión de la arteria central de la retina: pérdida súbita y catastrófica, indolora, con defecto pupilar aferente y la mancha rojo cereza sobre la retina pálida, en un paciente con una fuente embólica cardíaca clara, la fibrilación auricular. La conducta es intentar el rescate dentro de las primeras horas, derivar de urgencia, y hospitalizar para estudiar el origen vascular, exactamente igual que frente a un accidente cerebrovascular.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo',
      stem: 'Una mujer de 55 años, hipertensa, presenta disminución progresiva de la visión de su ojo izquierdo en las últimas 24 horas. Al fondo de ojo se observan hemorragias retinianas masivas en llama en los cuatro cuadrantes, venas tortuosas muy dilatadas y exudados algodonosos. Tres meses después consulta por dolor ocular insoportable y ojo rojo intenso, con la presión intraocular muy elevada.',
      question: '¿Qué complicación ha desarrollado?',
      options: [
        { letter: 'A', text: 'Glaucoma agudo por cierre angular primario' },
        { letter: 'B', text: 'Glaucoma neovascular secundario a la isquemia retiniana' },
        { letter: 'C', text: 'Endoftalmitis endógena bacteriana' },
        { letter: 'D', text: 'Desprendimiento de retina exudativo' },
        { letter: 'E', text: 'Uveítis anterior hipertensiva' },
      ],
      correct: 'B',
      explanation: 'El cuadro inicial es una oclusión de la vena central de la retina de tipo isquémica. La falta de perfusión estimula la liberación masiva de VEGF, que produce neovasos en el iris y el ángulo, bloqueando la malla trabecular: es el glaucoma neovascular, o glaucoma de los cien días, que aparece típicamente a los tres meses.',
      say: {
        stem: 'Ahora una pregunta representativa del banco de la especialidad, sin fecha del examen real, y que retoma la complicación tardía de esta clase. Una mujer de cincuenta y cinco años, hipertensa, tiene disminución progresiva de la visión del ojo izquierdo, y su fondo de ojo muestra hemorragias masivas en llama por los cuatro cuadrantes, venas muy dilatadas y exudados algodonosos. Tres meses después, vuelve a consultar por un dolor ocular insoportable, ojo rojo intenso y una presión intraocular muy elevada.',
        question: '¿Qué complicación ha desarrollado esta paciente?',
        options: 'Las opciones: un glaucoma agudo por cierre angular primario, un glaucoma neovascular secundario a la isquemia retiniana, una endoftalmitis bacteriana, un desprendimiento de retina exudativo, o una uveítis anterior hipertensiva. Piénsalo.',
        answer: 'Es la B. El cuadro inicial ya era una oclusión de vena central isquémica, con su imagen en tormenta retiniana. Esa isquemia liberó cantidades enormes de VEGF, que formó neovasos en el iris y el ángulo, bloqueando la malla trabecular. El resultado, a los tres meses, es el glaucoma de los cien días: doloroso, con ojo rojo y presión disparada. Por eso toda OVCR isquémica necesita vigilancia estricta de la presión intraocular.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El fondo de ojo decide', tag: 'La imagen no se confunde', kind: 'key', items: [
          { t: 'Rojo cereza: arterial', d: 'Hemorragias en llama: venosa',
            say: 'Cerremos con las reglas de oro. Retina pálida con mancha rojo cereza es la arterial; hemorragias masivas en llama en los cuatro cuadrantes es la venosa.' },
        ] },
        { title: 'Ambas son indoloras', tag: 'Con el ojo estrictamente blanco', kind: 'normal', items: [
          { t: 'Ojo blanco en ambas', d: 'La diferencia está solo dentro del ojo',
            say: 'Ninguna de las dos duele ni enrojece el ojo por sí misma: la diferencia siempre está adentro, en el fondo de ojo.' },
        ] },
        { title: 'La consecuencia sistémica', tag: 'Es un accidente vascular', kind: 'alert', items: [
          { t: 'OACR: estudiar como un ACV', d: 'OVCR: vigilar el glaucoma de los cien días',
            say: 'Y si te llevas una sola idea de hoy: la OACR se estudia igual que un accidente cerebrovascular, con Doppler carotídeo y electrocardiograma, y la OVCR isquémica exige vigilar la presión intraocular durante los primeros cien días. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Pérdida monocular súbita e indolora, con el ojo blanco: mira el fondo de ojo',
    root: (() => {
      const rescateOACR = N('ok', 'Rescate en las primeras seis horas', 'Masaje ocular, hipotensores, paracentesis',
        'Intenta el rescate dentro de las primeras seis horas: masaje ocular digital, hipotensores oculares y paracentesis de cámara anterior.');
      const hortonQ = N('q', '¿Hay claudicación mandibular o sospecha de Horton?', 'Sobre todo después de los sesenta y cinco años',
        'Pregunta dirigidamente por claudicación mandibular, cefalea temporal y pide una velocidad de eritrosedimentación urgente.',
        ['sí, sospecha de Horton', N('alert', 'Metilprednisolona endovenosa urgente', 'Para proteger el ojo contralateral',
          'Inicia metilprednisolona endovenosa de urgencia, no para salvar este ojo, sino para proteger el ojo sano del mismo riesgo.')],
        ['no, sospecha embólica', rescateOACR]);
      const oacr = N('refer', 'Oclusión de la arteria central de la retina', 'Estudiar como un accidente vascular',
        'Deriva de urgencia y estudia como un accidente vascular: ecografía Doppler carotídea y electrocardiograma u Holter.',
        ['', hortonQ]);
      const vigilar = N('alert', 'Vigilar el glaucoma de los cien días', 'Control estricto de la presión intraocular',
        'Si la oclusión venosa es isquémica, vigila la presión intraocular estrictamente durante los primeros tres meses, y considera anti-VEGF o panfotocoagulación preventiva.');
      const ovcr = N('refer', 'Oclusión de la vena central de la retina', 'Derivar y vigilar la isquemia',
        'Deriva a oftalmología y clasifica si la oclusión es isquémica o no isquémica.',
        ['', vigilar]);
      const preguntaFondo = N('q', '¿Retina pálida con mancha rojo cereza, o hemorragias en llama?', 'Fondo de ojo bajo pupila dilatada',
        'Examina el fondo de ojo bajo pupila dilatada de inmediato.',
        ['retina pálida, mancha rojo cereza', oacr],
        ['hemorragias en llama, venas dilatadas', ovcr]);
      return N('start', 'Pérdida visual monocular súbita, ojo blanco e indoloro', 'Sin trauma ni antecedente de dolor',
        'Paciente con pérdida visual monocular súbita, indolora, con el ojo estrictamente blanco.',
        ['', preguntaFondo]);
    })(),
  },
};
