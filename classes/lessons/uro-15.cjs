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
      type: 'points',
      kicker: 'Urgencia',
      title: 'Hematuria masiva: coágulos y retención',
      cards: [
        { title: 'Qué es y por qué', tag: 'Urgencia urológica', kind: 'alert', items: [
          { t: 'Coágulos con inestabilidad o retención', d: 'Anemia aguda, globo vesical, dolor hipogástrico',
            say: 'La hematuria masiva es un sangrado urinario con coágulos que causa inestabilidad hemodinámica, anemia aguda o una retención por coágulos, con dolor en el hipogastrio, globo vesical e imposibilidad de orinar.' },
          { t: 'Tumor, HPB, cistitis hemorrágica', d: 'Litiasis, trauma, anticoagulación',
            say: 'Las causas son el tumor de vejiga, la hiperplasia prostática, la cistitis hemorrágica por ciclofosfamida, radioterapia o virus BK, la litiasis, el trauma y la anticoagulación.' },
        ] },
        { title: 'Manejo en urgencia', tag: 'Lo haces tú', kind: 'key', items: [
          { t: 'ABC, dos vías, exámenes', d: 'Corregir coagulopatía; transfundir si Hb bajo 7',
            say: 'Parte por el ABC, dos vías venosas, hemograma, grupo y Rh, coagulación y creatinina. Corriges la coagulopatía y transfundes si hay inestabilidad o hemoglobina bajo siete.' },
          { t: 'Sonda Foley de 3 vías, 20 a 24 Fr', d: 'Lavado manual hasta sacar coágulos',
            say: 'Instalas una sonda Foley de tres vías y grueso calibre, de veinte a veinticuatro French, y haces un lavado manual con suero fisiológico y una jeringa grande hasta extraer los coágulos. Después, irrigación continua hasta que la orina aclare.' },
          { t: 'Derivar a urología', d: 'Cistoscopía y Uro-TAC',
            say: 'Luego derivas a urología para cistoscopía con evacuación y hemostasia, y para estudiar la causa con un uro-TAC.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Glomerular',
      title: 'Síndrome nefrítico: la hematuria glomerular',
      cards: [
        { title: 'Cómo se reconoce', tag: 'Sedimento', kind: 'key', items: [
          { t: 'Hematíes dismórficos', d: 'Sobre 80%: el origen es el glomérulo',
            say: 'El síndrome nefrítico es la expresión clínica de la hematuria glomerular. En el sedimento, los glóbulos rojos se ven deformados, dismórficos. Mira estos glóbulos rojos: si pasan del ochenta por ciento, el origen es el glomérulo.',
            photo: { src: 'biblioteca/19_urologia/uro-15/01_sedimento-hematies-dismorficos__cto-nefro_p33.jpg', label: 'Hematíes dismórficos', at: 'Mira estos glóbulos rojos', credit: 'Manual CTO Nefrología 14.ª ed., p. 33' } },
          { t: 'Cilindros hemáticos', d: 'Glomerular: nefrología, no urología',
            say: 'Y este es un cilindro hemático. Si lo ves en el sedimento, la hematuria es glomerular y el paciente va a nefrología, no a urología. Se suman hipertensión, edema periorbitario, oliguria, proteinuria bajo tres coma cinco gramos al día y alza de la creatinina.',
            photo: { src: 'biblioteca/19_urologia/uro-15/02_cilindro-hematico__amir-nefro17_p46.jpg', label: 'Cilindro hemático', at: 'Y este es un cilindro', credit: 'Manual AMIR Nefrología 17.ª ed., p. 46' } },
        ] },
        { title: 'Causas y estudio', tag: 'Nefrítico', kind: 'criteria', items: [
          { t: 'Postestreptocócica: C3 bajo, ASLO +', d: '2 a 3 semanas tras faringitis; 4 a 6 tras piel',
            say: 'La causa clásica es la glomerulonefritis postestreptocócica, dos a tres semanas después de una faringitis o cuatro a seis tras una infección de la piel, con C tres bajo y ASLO positivo. La nefropatía por IgA aparece uno a tres días después de una infección respiratoria, con complemento normal. Y piensa también en lupus y vasculitis ANCA.' },
          { t: 'Sedimento, C3 y C4, ANA, ANCA', d: 'Hepatitis B y C, VIH',
            say: 'Estudias con sedimento, proteinuria, creatinina, C tres y C cuatro, ASLO, ANA, ANCA, hepatitis B y C, y VIH.' },
        ] },
        { title: 'Manejo inicial', tag: 'Y cuándo derivar', kind: 'pharma', items: [
          { t: 'Reposo, sal y líquidos restringidos', d: 'Furosemida si hay sobrecarga',
            say: 'El manejo inicial es reposo relativo, restricción de sal y de líquidos, furosemida si hay sobrecarga, antihipertensivos como un inhibidor de la enzima convertidora o un calcioantagonista, y penicilina si hay infección activa.' },
          { t: 'Derivar de urgencia', d: 'Oliguria, creatinina en alza o hemoptisis',
            say: 'Derivas a nefrología, y de urgencia si hay oliguria marcada, creatinina en rápido ascenso o hemoptisis, porque puede necesitar una biopsia renal.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Dónde nace la hematuria',
      images: [
        { src: 'animaciones/uro-15/A1_hematuria_origen.mp4', label: 'Urológica o glomerular', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Urológica o glomerular',
          say: 'Mira las dos fuentes. En la urológica hay coágulos y se estudia con cistoscopía y uro-TAC. En la glomerular, los hematíes cruzan el glomérulo dañado, llegan deformados, dismórficos, y forman cilindros hemáticos: es un síndrome nefrítico y va a nefrología. Y primero siempre confirma con el sedimento, porque la tira reactiva puede engañar.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.4.011 · Examen de orina completo, urocultivo",
      "stem": "Mujer de 28 años, no embarazada, consulta por disuria, polaquiuria y urgencia miccional de 2 días, sin fiebre ni dolor lumbar. Se toma orina de segundo chorro con aseo genital previo. Orina completa: nitritos positivos, leucocitos 25 a 30 por campo, bacterias abundantes. El urocultivo informa Escherichia coli 10.000 UFC/mL sensible a nitrofurantoína.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Urocultivo negativo porque no alcanza 100.000 UFC/mL; no corresponde tratar"
        },
        {
          "letter": "B",
          "text": "Contaminación de la muestra; repetir con punción suprapúbica"
        },
        {
          "letter": "C",
          "text": "Infección urinaria baja; en una mujer sintomática con piuria, un recuento desde 1.000 a 10.000 UFC/mL de un uropatógeno es significativo y se trata, por ejemplo con nitrofurantoína"
        },
        {
          "letter": "D",
          "text": "Bacteriuria asintomática; no requiere tratamiento"
        },
        {
          "letter": "E",
          "text": "Pielonefritis aguda; hospitalizar para antibióticos endovenosos"
        }
      ],
      "correct": "C",
      "explanation": "El punto de corte de 100.000 UFC/mL se diseñó para bacteriuria asintomática. En una mujer con síntomas de cistitis y piuria, recuentos menores (desde 1.000 a 10.000 UFC/mL) de un uropatógeno como E. coli son significativos. Los nitritos positivos y la piuria apoyan el diagnóstico de cistitis, que se trata ambulatoriamente.",
      "say": {
        "stem": "Una mujer de veintiocho años tiene ardor al orinar y orina muy seguido hace dos días, sin fiebre. La orina completa tiene nitritos positivos y muchos leucocitos, y el urocultivo muestra Escherichia coli con diez mil unidades formadoras de colonias por mililitro.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: urocultivo negativo por no llegar a cien mil, contaminación de la muestra, cistitis significativa que se trata, bacteriuria asintomática o pielonefritis con hospitalización. Piénsalo.",
        "answer": "Es la C. En una mujer con síntomas y leucocitos en la orina, recuentos menores de cien mil de Escherichia coli son significativos y se tratan. Considerarlo negativo tienta por el clásico corte de cien mil, pero ese corte es para pacientes sin síntomas."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 100",
      "stem": "Un niño de 7 años se encuentra en el preoperatorio de una cirugía de fimosis. Entre los exámenes prequirúrgicos, el examen de orina reporta 2 a 5 leucocitos por campo, 10 a 15 eritrocitos por campo y proteínas 5 mg/dL.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitar índice albúmina/creatinina en orina"
        },
        {
          "letter": "B",
          "text": "Solicitar creatinina y calcio en una muestra de orina aislada"
        },
        {
          "letter": "C",
          "text": "Repetir el examen de orina"
        },
        {
          "letter": "D",
          "text": "Solicitar proteinuria en orina de 24 horas"
        },
        {
          "letter": "E",
          "text": "Solicitar títulos de antiestreptolisina O"
        }
      ],
      "correct": "C",
      "explanation": "Microhematuria aislada, asintomática, sin proteinuria significativa, sin HTA ni edema, es un hallazgo frecuente y muchas veces transitorio. Lo primero es repetir el examen de orina (2 a 3 muestras en semanas). Solo si persiste se estudia: calciuria/creatininuria, función renal, imágenes y antecedentes familiares.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro. En el preoperatorio de una fimosis, un niño de siete años tiene un examen de orina con diez a quince eritrocitos por campo, sin proteinuria significativa ni otros hallazgos.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: índice albúmina creatinina, calcio y creatinina urinarios, repetir la orina, proteinuria de veinticuatro horas o antiestreptolisina. Piénsalo.",
        "answer": "Es la C. Una microhematuria aislada y asintomática primero se confirma repitiendo el examen de orina, porque suele ser transitoria. La calciuria tienta porque la hipercalciuria es una causa frecuente, pero se estudia solo si la hematuria persiste."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.013 · Examen de orina completa",
      "stem": "Un hombre de 30 años presenta orina color 'coca-cola' y edema palpebral 2 semanas después de una faringitis. Su presión arterial es 150/95 mmHg.",
      "question": "¿Qué hallazgo en el examen de orina completa confirma el origen glomerular de la hematuria?",
      "options": [
        {
          "letter": "A",
          "text": "Cristales de oxalato de calcio"
        },
        {
          "letter": "B",
          "text": "Leucocitos abundantes con bacterias"
        },
        {
          "letter": "C",
          "text": "Nitritos positivos"
        },
        {
          "letter": "D",
          "text": "Cilindros hemáticos y glóbulos rojos dismórficos"
        },
        {
          "letter": "E",
          "text": "Hematuria con coágulos"
        }
      ],
      "correct": "D",
      "explanation": "Los cilindros hemáticos y los glóbulos rojos dismórficos (acantocitos) indican sangrado de origen glomerular, aquí una probable glomerulonefritis postestreptocócica. La hematuria con coágulos sugiere origen urológico (vía urinaria), y nitritos con leucocitos y bacterias orientan a infección urinaria.",
      "say": {
        "stem": "Un hombre de treinta años tiene orina color coca cola, edema de párpados y presión alta dos semanas después de una faringitis.",
        "question": "¿Qué hallazgo del examen de orina confirma el origen glomerular de la hematuria?",
        "options": "Las opciones: cristales de oxalato, leucocitos con bacterias, nitritos positivos, cilindros hemáticos con glóbulos rojos dismórficos o hematuria con coágulos. Piénsalo.",
        "answer": "Es la D. Los cilindros hemáticos y los glóbulos rojos dismórficos prueban que la sangre viene del glomérulo. Los coágulos tientan como signo de hematuria importante, pero apuntan a la vía urinaria, no al glomérulo."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.2.002 · Hematuria masiva",
      "stem": "Hombre de 72 años, fumador, consulta por hematuria macroscópica con coágulos de 12 horas y ahora no puede orinar. Al examen tiene globo vesical doloroso. Está hemodinámicamente estable, Hb 11 g/dL.",
      "question": "¿Cuál es la conducta inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Instalar sonda Foley de 2 vías de calibre fino"
        },
        {
          "letter": "B",
          "text": "Instalar sonda vesical de 3 vías de grueso calibre, evacuar coágulos e iniciar irrigación vesical continua con suero fisiológico"
        },
        {
          "letter": "C",
          "text": "Cistostomía suprapúbica por punción"
        },
        {
          "letter": "D",
          "text": "Indicar ácido tranexámico y alta con control urológico"
        },
        {
          "letter": "E",
          "text": "Cistoscopía diagnóstica ambulatoria en 1 mes"
        }
      ],
      "correct": "B",
      "explanation": "La hematuria masiva con retención por coágulos se maneja con sonda de 3 vías de grueso calibre (20 a 24 Fr), lavado manual para evacuar coágulos e irrigación continua, además de soporte y corrección de coagulopatía. Una sonda fina se obstruye con coágulos. Luego se estudia la causa (en fumador mayor, descartar cáncer vesical con cistoscopía y uroTAC).",
      "say": {
        "stem": "Hombre de setenta y dos años, fumador, con hematuria con coágulos y retención urinaria, estable.",
        "question": "¿Cuál es la conducta inicial?",
        "options": "Las opciones: sonda fina de dos vías, sonda gruesa de tres vías con evacuación de coágulos e irrigación continua, cistostomía, ácido tranexámico y alta, o cistoscopía en un mes. Piénsalo.",
        "answer": "Es la B. Se instala una sonda gruesa de tres vías, se evacuan los coágulos y se irriga en forma continua. La sonda común de dos vías tienta por ser la habitual, pero los coágulos la tapan."
      }
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
