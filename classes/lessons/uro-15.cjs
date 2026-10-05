// Clase 13.15 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-15). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.07.1.001) no tiene preguntas reales de hematuria (Diciembre 2024 P63 es de caídas en el adulto mayor y se descartó).
// Real usada: Julio 2013 P148 (hematuria con dismorfismo y cilindros hemáticos tras infección respiratoria: origen glomerular, IgA).
// No usadas por estar en nefrología: Julio 2017 P154 y Diciembre 2017 P44 (nefro-16/02), Julio 2015 P65 (nefro-15). No usada: Julio 2017 P50 (IgA con 9% de dismorfia: no calza con el corte de 80% que enseña el libro).
// No reutilizadas (ya en uro-12, el cáncer de vejiga): Julio 2016 P159 y Julio 2015 P45; aquí solo se enlaza a esa clase.
// Cólico renal con microhematuria (Julio 2016 P33, uro-01) no se repite.
// Sin pregunta real sobre coágulos: una pregunta del libro como "Caso representativo".
// La parte glomerular es breve y se enlaza con nefrología. Sin imágenes: los libros ya extraídos no traen sedimento con hematíes dismórficos ni cilindros hemáticos; ver informe.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Estudio sistemático de la hematuria: glomerular versus urológica, y banderas rojas',
      say: 'Bienvenido. Cierramos el libro con la hematuria. La pregunta del examen casi siempre es la misma: ¿de dónde viene la sangre? Si viene del glomérulo, el paciente va a nefrología. Si viene de la vía urinaria, va a urología, y hay que descartar un cáncer. Hoy aprendes a distinguirlas con tres datos: el color, los coágulos y el sedimento.',
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: 'Confirmar que es hematuria',
      cards: [
        { title: 'Qué es', tag: 'Definición', kind: 'key', items: [
          { t: 'Macroscópica', d: 'Se ve a simple vista',
            say: 'La hematuria macroscópica es la que se ve a simple vista. Basta un mililitro de sangre en un litro de orina para teñirla.' },
          { t: 'Microscópica: ≥ 3 GR por campo', d: 'En 2 de 3 sedimentos, a 400x',
            say: 'La microscópica se define por tres o más glóbulos rojos por campo de aumento, en al menos dos de tres sedimentos bien recolectados. No cuenta si hay ejercicio extremo ni menstruación.' },
        ] },
        { title: 'La tira reactiva', tag: 'Cuidado', kind: 'alert', items: [
          { t: 'Sensible, pero inespecífica', d: 'Falsos positivos',
            say: 'La tira reactiva es muy sensible, pero puede dar falsos positivos. Por mioglobinuria en una rabdomiólisis, por hemoglobinuria en una hemólisis masiva, o por contaminación con antisépticos.' },
          { t: 'Confirmar con sedimento', d: 'Debe haber glóbulos rojos intactos',
            say: 'Por eso toda tira positiva se confirma con un sedimento de orina fresca, que muestre glóbulos rojos intactos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'El eje del examen',
      title: '¿Glomerular o urológica?',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Hematuria confirmada', s: 'Sedimento con GR' },
        { id: 'b', col: 1, row: 1, k: 'q', t: '¿Coágulos? ¿Morfología?', s: 'Color y sedimento' },
        { id: 'c', col: 2, row: 0, k: 'effect', t: 'Té o coca-cola, sin coágulos', s: 'Dismórficos, cilindros, proteinuria' },
        { id: 'd', col: 3, row: 0, k: 'refer', t: 'Glomerular: nefrología', s: 'Síndrome nefrítico' },
        { id: 'e', col: 2, row: 2, k: 'alert', t: 'Roja, con coágulos', s: 'Isomórficos, sin proteinuria' },
        { id: 'f', col: 3, row: 2, k: 'good', t: 'Urológica: estudio de vía', s: 'Uro-TAC y cistoscopía' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'b', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Mira color, coágulos y sedimento',
          say: 'Una vez confirmada la hematuria, hay que decidir su origen. Se miran tres cosas: el color de la orina, si hay coágulos, y la morfología de los glóbulos rojos en el sedimento.' },
        { show: ['c', 'd'], note: 'Glomerular: sin coágulos',
          say: 'La sangre glomerular tiñe la orina de color té cargado o coca-cola, uniforme en toda la micción. Nunca forma coágulos, porque la uroquinasa y el activador del plasminógeno del túbulo los disuelven. El sedimento muestra glóbulos rojos dismórficos, acantocitos, cilindros hemáticos y proteinuria. Ese paciente es del nefrólogo, y el detalle de cada glomerulonefritis lo ves en las clases de nefrología.' },
        { show: ['e', 'f'], note: 'Urológica: coágulos',
          say: 'La sangre urológica viene de cualquier punto entre los cálices y el meato: litiasis, cáncer de vejiga o de riñón, hiperplasia prostática o infección. La orina es roja brillante y con frecuencia tiene coágulos. Los glóbulos rojos son isomórficos, no hay cilindros y casi no hay proteinuria.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Tabla del examen',
      title: 'Glomerular versus urológica',
      head: ['Parámetro', 'Glomerular', 'Urológica'],
      rows: [
        { cells: ['Color', 'Té, coca-cola', 'Roja brillante'],
          say: 'La glomerular es oscura, color té o coca-cola. La urológica es roja brillante o rosada.' },
        { cells: ['Coágulos', 'Nunca', 'Frecuentes'],
          say: 'Los coágulos descartan el origen glomerular. Es el dato más rápido y el más preguntado.' },
        { cells: ['Glóbulos rojos', 'Dismórficos > 80%; acantocitos > 5%', 'Isomórficos > 80%'],
          say: 'En la glomerular, más de ochenta por ciento de los glóbulos rojos son dismórficos, y los acantocitos pasan de cinco por ciento. En la urológica son redondos y uniformes.' },
        { cells: ['Cilindros', 'Hemáticos', 'Sin cilindros hemáticos'],
          say: 'Los cilindros hemáticos son patognomónicos de daño glomerular.' },
        { cells: ['Proteinuria', '> 0,5 g/día', '< 0,3 g/día'],
          say: 'La proteinuria significativa orienta al glomérulo. En la urológica, es mínima o ausente.' },
        { cells: ['Causas', 'IgA, postinfecciosa, lupus', 'Litiasis, cáncer, HPB'],
          say: 'Entre las causas glomerulares están la nefropatía por IgA, la glomerulonefritis postestreptocócica y el lupus. En las urológicas, litiasis, cáncer vesical y renal, e hiperplasia prostática.' },
        { cells: ['Estudio', 'C3/C4, inmunología, biopsia', 'Uro-TAC y cistoscopía'],
          say: 'El estudio glomerular es de nefrología: complemento, inmunología y biopsia. El urológico es imagen y cistoscopía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hematuria urológica',
      title: 'Banderas rojas y estudio',
      cards: [
        { title: 'Riesgo de cáncer', tag: 'Banderas rojas', kind: 'alert', items: [
          { t: 'Más de 50 años', d: 'Edad como primer factor',
            say: 'En una hematuria urológica, o en una macroscópica indolora, hay que estimar el riesgo de tumor. El primer factor es tener más de cincuenta años.' },
          { t: 'Tabaco, más de 10 paquetes-año', d: 'Activo o pasado',
            say: 'Segundo, el tabaquismo, activo o pasado, de más de diez paquetes al año.' },
          { t: 'Aminas aromáticas, hematuria previa', d: 'Tinturas, irradiación pélvica',
            say: 'También la exposición laboral a aminas aromáticas o a químicos, como tinturas, una hematuria macroscópica previa y la irradiación pélvica.' },
        ] },
        { title: 'El estudio', tag: 'Tres pasos', kind: 'key', items: [
          { t: 'Urocultivo', d: 'Descarta infección',
            say: 'Primero, un urocultivo para descartar una infección bacteriana.' },
          { t: 'Uro-TAC con fase excretora', d: 'Parénquima y urotelio superior',
            say: 'Segundo, un uro-TAC con fase de excreción, que evalúa el parénquima renal y el urotelio de la vía superior. No lo confundas con el pielo-TAC sin contraste, que es el examen del cólico renal.' },
          { t: 'Cistoscopía', d: 'Mucosa vesical y uretra',
            say: 'Y tercero, la cistoscopía, que mira directamente la mucosa de la vejiga. Un TAC normal no descarta cáncer de vejiga, y esa trampa la vimos en la clase de cáncer de vejiga.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la hematuria confirmada al destino del paciente.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Tira positiva', 'Confirmar con sedimento', 'Diagnosticar hematuria'],
          say: 'Una tira positiva puede ser mioglobina o hemoglobina. Se confirma con el sedimento.' },
        { cells: ['Coágulos', 'Origen urológico', 'Derivar a nefrología'],
          say: 'Si hay coágulos, no es glomerular.' },
        { cells: ['Dismórficos, cilindros hemáticos', 'Nefrología', 'Pedir cistoscopía'],
          say: 'Si hay dismorfia y cilindros, no sigas con estudio urológico invasivo.' },
        { cells: ['Isomórfica, fumador mayor de 50', 'Uro-TAC y cistoscopía', 'Controlar en un año'],
          say: 'La microhematuria urológica en un fumador mayor se estudia, no se observa.' },
        { cells: ['Cólico renal', 'Pielo-TAC sin contraste', 'Uro-TAC'],
          say: 'No mezcles: el cólico se estudia con pielo-TAC sin contraste, y la hematuria sospechosa de tumor, con uro-TAC.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 62 años, jubilado de una fábrica de pinturas y fumador de 25 paquetes-año. Asintomático, con microhematuria en un control preventivo. Sedimento: 35 a 40 glóbulos rojos por campo, 95% isomórficos, sin acantocitos ni cilindros. Proteinuria negativa, urocultivo estéril, creatinina 0,8 mg/dL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Derivar a nefrología para biopsia renal' },
        { letter: 'B', text: 'Derivar a urología para uro-TAC y cistoscopía' },
        { letter: 'C', text: 'Repetir el examen en un año' },
        { letter: 'D', text: 'Indicar antibióticos empíricos' },
        { letter: 'E', text: 'Solicitar C3, C4 y ANCA' },
      ],
      correct: 'B',
      explanation: 'Es una microhematuria urológica (isomórfica, sin cilindros ni proteinuria) con riesgo oncológico alto: más de 50 años, tabaquismo y exposición laboral a aminas aromáticas. Se estudia con uro-TAC con fase excretora y cistoscopía.',
      say: {
        stem: 'Un hombre de sesenta y dos años, jubilado de una fábrica de pinturas, fumador de veinticinco paquetes al año. No tiene síntomas, y en un control preventivo se encontró microhematuria. En el sedimento, noventa y cinco por ciento de los glóbulos rojos son isomórficos, sin acantocitos ni cilindros. La proteinuria es negativa y el urocultivo, estéril.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: nefrología para biopsia; urología para uro-TAC y cistoscopía; repetir en un año; antibióticos empíricos; o complemento y ANCA. Piénsalo.',
        answer: 'Es la B. Los glóbulos isomórficos y la ausencia de cilindros y proteinuria indican origen urológico. Y tiene todos los factores de riesgo de cáncer urotelial: edad, tabaco y tinturas. Por eso se estudia con uro-TAC y cistoscopía, no se observa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de los siguientes hallazgos, en un paciente con hematuria, permite descartar con mayor certeza el origen glomerular del sangrado?',
      question: '¿Cuál de los siguientes hallazgos permite descartar el origen glomerular?',
      options: [
        { letter: 'A', text: 'Presencia de coágulos macroscópicos en la orina emitida' },
        { letter: 'B', text: 'Orina turbia y espumosa' },
        { letter: 'C', text: 'Hipertensión arterial asociada' },
        { letter: 'D', text: 'Microhematuria aislada sin proteinuria' },
        { letter: 'E', text: 'Hematuria posterior a ejercicio extenuante' },
      ],
      correct: 'A',
      explanation: 'Los coágulos descartan el origen glomerular: el túbulo tiene activador del plasminógeno y uroquinasa que degradan la fibrina. Quien elimina coágulos sangra de la vía urinaria: pelvis renal, uréter, vejiga, próstata o uretra.',
      say: {
        stem: 'Una pregunta de práctica. En un paciente con hematuria, ¿qué hallazgo permite descartar con más certeza que el sangrado sea glomerular?',
        question: '¿Cuál de los siguientes hallazgos permite descartar el origen glomerular?',
        options: 'Las opciones: coágulos macroscópicos; orina turbia y espumosa; hipertensión; microhematuria sin proteinuria; o hematuria después de un ejercicio extenuante. Piénsalo.',
        answer: 'Es la A. La sangre del glomérulo se encuentra con la uroquinasa y el activador del plasminógeno del túbulo, que disuelven la fibrina. Por eso no hay coágulos. Si hay coágulos, la sangre vino de la vía urinaria. La orina espumosa, en cambio, orienta a proteinuria, o sea al glomérulo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 148',
      stem: 'Paciente de 20 años de edad, sin antecedentes, con coriza, tos y odinofagia desde hace dos días manejadas con ibuprofeno, paracetamol y clorfenamina, consulta por aparición de hematuria el día de hoy, asociado a los síntomas antes descritos. Al examen físico presenta presión arterial de 120/70, frecuencia cardiaca normal, resto sin hallazgos patológicos. Se solicita examen de orina que muestra: glóbulos rojos 40-50 por campo con 20% de dismorfismo y cilindros hemáticos. El diagnóstico más probable es:',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Glomerulonefritis post estreptocócica' },
        { letter: 'B', text: 'Glomerulonefritis lúpica' },
        { letter: 'C', text: 'Glomerulonefritis mesangial' },
        { letter: 'D', text: 'Glomerulonefritis por IgA' },
        { letter: 'E', text: 'Glomerulonefritis por drogas' },
      ],
      correct: 'D',
      explanation: 'Enfermedad de Berger con glomerulonefritis aguda, en relación a una infección respiratoria, sin otros síntomas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un joven de veinte años con un resfrío de dos días, tratado con ibuprofeno, paracetamol y clorfenamina, consulta porque hoy apareció hematuria. Está normotenso. El sedimento muestra cuarenta a cincuenta glóbulos rojos por campo, con veinte por ciento de dismorfismo, y cilindros hemáticos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: glomerulonefritis postestreptocócica; lúpica; mesangial; por IgA; o por drogas. Piénsalo.',
        answer: 'Es la D. Los cilindros hemáticos confirman que la sangre es glomerular. Y la hematuria que aparece junto con la infección respiratoria, sin latencia, es la nefropatía por IgA, la enfermedad de Berger. La postestreptocócica aparece una a tres semanas después de la infección, no el mismo día. Fíjate que aquí basta un solo dato glomerular, el cilindro, para derivar a nefrología.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: hematuria',
      cards: [
        { title: 'Distinguir el origen', tag: 'Tres datos', kind: 'key', items: [
          { t: 'Confirmar con sedimento', d: 'La tira puede engañar',
            say: 'Cerremos con las reglas de oro. Una tira positiva se confirma siempre con el sedimento.' },
          { t: 'Coágulos: urológica', d: 'Nunca glomerular',
            say: 'Si hay coágulos, el origen es urológico. Si hay dismorfia, acantocitos, cilindros hemáticos y proteinuria, es glomerular y va a nefrología.' },
        ] },
        { title: 'Si es urológica', tag: 'Conducta', kind: 'alert', items: [
          { t: 'Riesgo: edad, tabaco, aminas', d: 'Sospecha de cáncer urotelial',
            say: 'Si es urológica, se busca el riesgo de cáncer: edad sobre cincuenta años, tabaco y exposición a aminas aromáticas.' },
          { t: 'Urocultivo, uro-TAC, cistoscopía', d: 'Estudio completo',
            say: 'Y se estudia con urocultivo, uro-TAC con fase excretora y cistoscopía. Si te llevas una sola idea de hoy: los coágulos descartan el glomérulo, y la hematuria urológica en un fumador mayor se estudia siempre hasta el final. Con esto cerramos el libro de Urología. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hematuria: de la confirmación al destino',
    root: N('start', 'Tira reactiva positiva', 'Confirmar con sedimento',
      'Una tira reactiva positiva para sangre. Primero se confirma con un sedimento de orina fresca, para descartar mioglobina o hemoglobina.',
      ['Sedimento con GR', N('q', '¿Origen glomerular?', 'Coágulos, dismorfia, cilindros',
        'Con la hematuria confirmada, se decide si la sangre es glomerular o urológica.',
        ['Dismórficos, cilindros, proteinuria', N('refer', 'Nefrología', 'Complemento, inmunología, biopsia',
          'Si hay dismorfia, cilindros hemáticos y proteinuria, sin coágulos, es glomerular. Se deriva a nefrología.')],
        ['Coágulos, isomórficos', N('do', 'Estudio urológico', 'Urocultivo, uro-TAC, cistoscopía',
          'Si hay coágulos o glóbulos isomórficos, es urológica. Se hace urocultivo, uro-TAC con fase excretora y cistoscopía.',
          ['Fumador, más de 50 años', N('alert', 'Sospechar cáncer urotelial', 'Cistoscopía aunque el TAC sea normal',
            'Con edad, tabaco o aminas aromáticas, se sospecha cáncer urotelial, y la cistoscopía no se omite aunque el TAC sea normal.')],
        )],
      )],
    ),
  },
};
