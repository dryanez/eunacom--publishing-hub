// Clase 4.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Una barrera que deja escapar proteínas y todo lo que eso arrastra',
      say: 'Bienvenidos. Con esta clase abrimos el bloque de síndromes glomerulares, y partimos por el síndrome nefrótico, uno de los temas más rentables de nefrología en el EUNACOM. Lo vamos a ordenar con una sola idea: el glomérulo deja escapar proteínas, y cada proteína que se pierde explica una complicación. Al final vas a saber reconocerlo, cuándo biopsiar y a quién anticoagular.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Todo parte en el podocito',
      nodes: [
        { id: 'pod', col: 0, row: 2, k: 'cause', t: 'Daño del podocito', s: 'Falla la barrera de filtración' },
        { id: 'pro', col: 1, row: 2, k: 'mech', t: 'Proteinuria masiva', s: 'Más de 3,5 g en 24 h' },
        { id: 'alb', col: 2, row: 1, k: 'effect', t: 'Hipoalbuminemia', s: 'Cae la presión oncótica' },
        { id: 'ede', col: 3, row: 0, k: 'effect', t: 'Edema blando', s: 'Párpados, tobillos, anasarca' },
        { id: 'lip', col: 3, row: 1, k: 'effect', t: 'Dislipidemia y lipiduria', s: 'El hígado fabrica más lipoproteínas' },
        { id: 'at3', col: 2, row: 3, k: 'risk', t: 'Se pierde antitrombina III', s: 'Estado protrombótico' },
        { id: 'igg', col: 3, row: 4, k: 'risk', t: 'Se pierde IgG', s: 'Infecciones por encapsulados' },
      ],
      edges: [
        { from: 'pod', to: 'pro' }, { from: 'pro', to: 'alb' }, { from: 'alb', to: 'ede' },
        { from: 'alb', to: 'lip', label: 'el hígado compensa' },
        { from: 'pro', to: 'at3' }, { from: 'pro', to: 'igg' },
      ],
      steps: [
        { show: ['pod'], note: 'El problema es la barrera, no la inflamación',
          say: 'Partamos por el mecanismo. En el síndrome nefrótico el daño está en el podocito, la célula que forma la última barrera de filtración del glomérulo. No hay una gran inflamación: hay una barrera que se volvió porosa.' },
        { show: ['pro'], note: 'Proteinuria en rango nefrótico',
          say: 'Por esa barrera porosa se escapan proteínas en cantidad masiva: más de tres gramos y medio al día. Eso es la proteinuria en rango nefrótico, y es el corazón del síndrome.' },
        { show: ['alb', 'ede'], note: 'Menos albúmina, menos presión oncótica, edema',
          say: 'La proteína que más se pierde es la albúmina. Al caer la albúmina, cae la presión oncótica del plasma, el líquido se sale a los tejidos, y aparece el edema blando: primero en los párpados al despertar, después en los tobillos, y en los casos graves, anasarca.' },
        { show: ['lip'], note: 'El hígado responde fabricando lipoproteínas',
          say: 'El hígado intenta compensar la albúmina que falta, acelera su síntesis de proteínas y arrastra también las lipoproteínas. Resultado: hipercolesterolemia grave, y parte de esa grasa termina en la orina. Eso es la lipiduria.' },
        { show: ['at3'], note: 'Se pierden los anticoagulantes naturales',
          say: 'Pero por la orina no solo se va albúmina. También se va la antitrombina tres, un anticoagulante natural. Sin ella, la sangre coagula de más, y ese es el origen de las trombosis que vamos a ver.' },
        { show: ['igg'], note: 'Se pierden anticuerpos: infecciones',
          say: 'Y se van también la inmunoglobulina G y factores del complemento, así que el paciente queda expuesto a bacterias encapsuladas. Fíjate que las tres complicaciones grandes, edema, trombosis e infección, salen del mismo mecanismo: proteínas que se escapan.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: '¿Qué define un síndrome nefrótico?',
      cards: [
        { title: 'Lo que lo define', tag: 'Dos criterios', kind: 'criteria', items: [
          { t: 'Proteinuria mayor de 3,5 g/24 h', d: 'O índice proteinuria/creatininuria > 3–3,5',
            say: 'Vamos a los criterios. El primero es la proteinuria en rango nefrótico: más de tres gramos y medio en orina de veinticuatro horas. Si solo tienes una muestra aislada, sirve el índice proteinuria creatininuria sobre tres a tres y medio.' },
          { t: 'Albúmina menor de 3,0 g/dL', d: 'Hipoalbuminemia severa',
            say: 'El segundo es la hipoalbuminemia: albúmina plasmática bajo tres gramos por decilitro. Proteinuria masiva y albúmina baja, juntas, definen el síndrome.' },
        ] },
        { title: 'Lo que lo acompaña', tag: 'Casi siempre', kind: 'key', items: [
          { t: 'Edema blando con fóvea', d: 'Matinal en párpados, vespertino en piernas',
            say: 'Lo acompaña el edema blando con fóvea. Un detalle clínico que ayuda: en la mañana está en los párpados y la cara, y en la tarde baja a las piernas por gravedad.' },
          { t: 'Colesterol sobre 350–400 mg/dL', d: 'Dislipidemia mixta',
            say: 'Luego la dislipidemia mixta, con colesterol que suele pasar los trescientos cincuenta o cuatrocientos.' },
          { t: 'Cuerpos ovales grasos', d: 'Cruz de Malta con luz polarizada',
            say: 'Y la lipiduria. En el sedimento aparecen cuerpos ovales grasos, que con luz polarizada muestran la clásica imagen en cruz de Malta. Si ves cruz de Malta en una pregunta, piensa síndrome nefrótico.' },
        ] },
        { title: 'Nefrótico puro', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Sin hematuria, sin hipertensión', d: 'Sedimento sin cilindros hemáticos',
            say: 'Y un último dato que decide muchas preguntas. El nefrótico puro no tiene hematuria dismórfica, ni cilindros hemáticos, ni hipertensión importante. Si aparecen, estás frente a un cuadro nefrítico, que es el tema de otra clase de este bloque.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicaciones',
      title: 'Hipercoagulabilidad: la complicación que más se pregunta',
      nodes: [
        { id: 'per', col: 0, row: 1, k: 'cause', t: 'Pérdida urinaria', s: 'Antitrombina III, proteína C y S' },
        { id: 'sin', col: 0, row: 3, k: 'cause', t: 'Más síntesis hepática', s: 'Fibrinógeno, factor V y VIII' },
        { id: 'pro', col: 1, row: 2, k: 'mech', t: 'Estado protrombótico', s: 'Más agregación plaquetaria' },
        { id: 'tvr', col: 2, row: 1, k: 'risk', t: 'Trombosis de vena renal', s: 'Hasta 30 % en membranosa' },
        { id: 'var', col: 3, row: 0, k: 'alert', t: 'Varicocele izquierdo nuevo', s: 'No se reduce en decúbito' },
        { id: 'tep', col: 2, row: 3, k: 'risk', t: 'Tromboembolismo pulmonar', s: 'Disnea y dolor pleurítico súbitos' },
        { id: 'aco', col: 4, row: 2, k: 'good', t: 'Anticoagulación profiláctica', s: 'Membranosa + albúmina < 2,0–2,5 g/dL' },
      ],
      edges: [
        { from: 'per', to: 'pro' }, { from: 'sin', to: 'pro' },
        { from: 'pro', to: 'tvr' }, { from: 'tvr', to: 'var', label: 'signo clásico' },
        { from: 'pro', to: 'tep' },
        { from: 'tvr', to: 'aco', label: 'prevenir' }, { from: 'tep', to: 'aco', label: 'prevenir' },
      ],
      steps: [
        { show: ['per', 'sin'], note: 'Se pierden anticoagulantes y sobran procoagulantes',
          say: 'Profundicemos en la trombosis, porque es lo que más se pregunta de este tema. Hay dos desbalances a la vez. Por la orina se pierden los anticoagulantes naturales: antitrombina tres, proteína C y proteína S. Y el hígado, que está trabajando de más, fabrica más fibrinógeno, factor cinco y factor ocho.' },
        { show: ['pro'], note: 'Menos freno y más acelerador',
          say: 'Menos freno y más acelerador, y además plaquetas más agregables. El resultado es un estado marcadamente protrombótico.' },
        { show: ['tvr'], note: 'La trombosis típica del nefrótico',
          say: 'La trombosis más característica es la de la vena renal. Se ve hasta en el treinta por ciento de los pacientes con nefropatía membranosa. Puede ser silenciosa, o presentarse con dolor lumbar agudo y hematuria macroscópica brusca.' },
        { show: ['var'], note: 'La vena espermática izquierda drena en la renal',
          say: 'Y hay un signo que se pregunta y que se entiende por anatomía: un varicocele izquierdo de inicio reciente, que no desaparece al acostarse. ¿Por qué el izquierdo? Porque la vena espermática izquierda drena directo en la vena renal izquierda. Si la renal está trombosada, la espermática se congestiona.' },
        { show: ['tep'], note: 'Nefrótico + disnea súbita = TEP',
          say: 'La otra complicación mayor es el tromboembolismo pulmonar. En el examen se ve así: un paciente nefrótico, hospitalizado, que de repente hace disnea, dolor torácico y desaturación. Antes que neumonía o infarto, piensa en TEP.' },
        { show: ['aco'], note: 'El corte está en la albúmina',
          say: '¿Y cuándo se anticoagula de forma preventiva? Cuando hay nefropatía membranosa y la albúmina cae bajo dos a dos y medio gramos por decilitro. Se usa heparina de bajo peso molecular o antagonistas de la vitamina K. El número que tienes que recordar es la albúmina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio',
      title: 'Biopsia renal: el niño y el adulto son distintos',
      cards: [
        { title: 'En el niño', tag: 'Tratamiento empírico', kind: 'normal', items: [
          { t: '90 % son cambios mínimos', d: 'Corticoides sin biopsiar',
            say: 'Ahora, el estudio. Y aquí hay una diferencia entre edades que se pregunta mucho. En el niño, el noventa por ciento de los síndromes nefróticos son enfermedad por cambios mínimos. Como la causa es casi siempre la misma, se inician corticoides de forma empírica, sin biopsiar.' },
        ] },
        { title: 'En el adulto', tag: 'Regla general', kind: 'key', items: [
          { t: 'Biopsia renal obligatoria', d: 'En todo nefrótico primario',
            say: 'En el adulto es al revés. En todo adulto con síndrome nefrótico primario, la biopsia renal percutánea es obligatoria. Esa es la respuesta de elección cuando te preguntan cómo proseguir el estudio.' },
          { t: 'Define la histología', d: 'Y con ella, la inmunosupresión',
            say: '¿Por qué tanta insistencia? Porque en el adulto las causas son muchas, y cada una se trata distinto. La biopsia define si es membranosa, focal y segmentaria, cambios mínimos, amiloidosis o membranoproliferativa, y eso define la inmunosupresión.' },
        ] },
        { title: 'Excepciones en el adulto', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Diabetes de más de 10–15 años', d: 'Con retinopatía proliferativa concordante',
            say: 'Hay solo dos excepciones. La primera: el diabético de larga data, más de diez a quince años, con una nefropatía diabética típica y retinopatía proliferativa que concuerda. Ahí la historia ya explica la proteinuria.' },
          { t: 'Amiloidosis ya demostrada', d: 'Por biopsia de grasa o glándula salival',
            say: 'La segunda: una amiloidosis sistémica ya diagnosticada por biopsia de grasa subcutánea o de glándula salival menor. Fuera de eso, el adulto se biopsia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: 'Las cuatro causas que encuentra la biopsia',
      cards: [
        { title: 'Las primarias', tag: 'Próxima clase', kind: 'key', items: [
          { t: 'Nefropatía membranosa', d: 'Causa n.º 1 sobre 50–60 años · anti-PLA2R',
            say: '¿Qué encuentra esa biopsia? La causa número uno en el adulto mayor de cincuenta o sesenta años es la nefropatía membranosa, asociada a anticuerpos anti PLA dos R, y también a cáncer oculto, hepatitis B y antiinflamatorios.' },
          { t: 'Focal y segmentaria', d: 'Adulto joven · VIH, obesidad · mala respuesta a corticoides',
            say: 'En el adulto joven aparece la glomeruloesclerosis focal y segmentaria, ligada al VIH y a la obesidad mórbida, con mala respuesta a corticoides.' },
          { t: 'Cambios mínimos', d: '10–15 % de adultos · Hodgkin, AINE',
            say: 'Y la enfermedad por cambios mínimos, que en el adulto es solo el diez a quince por ciento, se asocia al linfoma de Hodgkin y a los antiinflamatorios, y responde rápido a prednisona. Las tres las vamos a desarmar en la próxima clase.' },
        ] },
        { title: 'La que se asocia a otra enfermedad', tag: 'Adulto mayor', kind: 'alert', items: [
          { t: 'Amiloidosis renal', d: 'Mayores de 65 · mieloma, gammapatía, infección crónica',
            say: 'La cuarta es la amiloidosis renal, del adulto mayor de sesenta y cinco años. Se asocia al mieloma múltiple, a la gammapatía monoclonal y a las infecciones crónicas.' },
          { t: 'Rojo Congo positivo', d: 'Birrefringencia verde manzana',
            say: 'En la biopsia se ve un depósito amorfo que se tiñe con rojo Congo y brilla verde manzana con luz polarizada. Y se trata con quimioterapia, no con corticoides.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones',
      title: 'Infecciones: el nefrótico pierde sus anticuerpos',
      cards: [
        { title: 'Mecanismo', tag: 'Inmunodeficiencia humoral', kind: 'normal', items: [
          { t: 'Pierde IgG y factor B', d: 'Por la orina',
            say: 'Volvamos al mecanismo para la tercera complicación. Junto con la albúmina, el paciente pierde por la orina inmunoglobulina G y el factor B de la vía alterna del complemento. Es una inmunodeficiencia humoral adquirida.' },
        ] },
        { title: 'Qué infecciones', tag: 'Encapsulados', kind: 'alert', items: [
          { t: 'Streptococcus pneumoniae', d: 'El germen clásico',
            say: 'Sin esos anticuerpos, las bacterias encapsuladas se aprovechan, y la más importante es el neumococo.' },
          { t: 'Peritonitis bacteriana espontánea', d: 'Por neumococo, en la ascitis',
            say: 'La complicación clásica es la peritonitis bacteriana espontánea por neumococo en el líquido ascítico. Y también la celulitis por estreptococo sobre la piel edematosa.' },
        ] },
        { title: 'Prevención', tag: 'Antes de inmunosuprimir', kind: 'pharma', items: [
          { t: 'Vacuna antineumocócica', d: 'Conjugada 13V + polisacárida 23V · influenza',
            say: 'Por eso se vacuna: vacuna antineumocócica conjugada y polisacárida, más influenza. Y el momento importa: antes de iniciar la inmunosupresión mayor, para que el paciente todavía pueda responder.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Tratamiento de soporte y antiproteinúrico',
      cards: [
        { title: 'Edema', tag: 'Descongestión', kind: 'pharma', items: [
          { t: 'Sodio menor de 2 g/día', d: 'Restricción de sal',
            say: 'Pasemos al tratamiento de base, que va en todos los pacientes, sea cual sea la biopsia. Para el edema, restricción de sodio a menos de dos gramos al día.' },
          { t: 'Furosemida 40–80 mg/día', d: 'Meta: bajar 0,5–1 kg/día',
            say: 'Y diurético de asa: furosemida, cuarenta a ochenta miligramos al día. Si no basta, se suma una tiazida o espironolactona para bloquear la nefrona en varios puntos. La meta es bajar medio a un kilo al día, sin deteriorar la función renal.' },
        ] },
        { title: 'Nefroprotección', tag: 'Imperativo', kind: 'key', items: [
          { t: 'IECA o ARA-II a dosis máxima', d: 'Dilatan la arteriola eferente',
            say: 'El pilar para frenar la proteinuria es el bloqueo del sistema renina angiotensina: un IECA como enalapril, o un ARA dos como losartán, subido a la dosis máxima tolerada. Dilatan la arteriola eferente, baja la presión dentro del glomérulo, y se escapa menos proteína.' },
          { t: 'Más un iSGLT2', d: 'Dapagliflozina',
            say: 'Se asocia un inhibidor de SGLT dos, como la dapagliflozina.' },
          { t: 'Meta: proteinuria < 0,5–1 g/día', d: 'Y PA < 130/80 mmHg',
            say: 'La meta es llevar la proteinuria bajo medio a un gramo al día, y la presión bajo ciento treinta con ochenta.' },
        ] },
        { title: 'Lípidos y trombosis', tag: 'Complicaciones', kind: 'alert', items: [
          { t: 'Estatinas', d: 'Control agresivo del colesterol',
            say: 'Estatinas para el control agresivo de la hipercolesterolemia.' },
          { t: 'HBPM si albúmina < 2,0–2,5', d: 'En membranosa',
            say: 'Y la anticoagulación profiláctica que ya vimos, solo cuando la albúmina cae bajo dos a dos y medio, sobre todo en la membranosa.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol de decisión, tal como lo vas a razonar frente a un adulto con edema y orina espumosa.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Edema + proteinuria 8 g + albúmina 2,0, sin hematuria', 'Síndrome nefrótico puro', 'Llamarlo nefrítico'],
          say: 'Repasemos las trampas. Edema, proteinuria masiva y albúmina baja, sin hematuria: síndrome nefrótico puro. El error es confundirlo con un cuadro nefrítico, que exige hematuria dismórfica e hipertensión.' },
        { cells: ['Adulto con nefrótico primario', 'Biopsia renal', 'Prednisona empírica como en el niño'],
          say: 'Adulto con nefrótico primario: biopsia renal. La trampa es tratarlo como a un niño, con prednisona empírica.' },
        { cells: ['Diabética joven, mal control, nefrótico', 'Biopsia renal', 'Asumir nefropatía diabética'],
          say: 'Diabética joven con mal control y un nefrótico: también biopsia. La excepción es solo el diabético de larga data con retinopatía concordante, no cualquier diabético.' },
        { cells: ['Nefrótico con disnea y dolor torácico súbitos', 'Tromboembolismo pulmonar', 'Neumonía o infarto'],
          say: 'Nefrótico que hace disnea y dolor torácico súbitos: tromboembolismo pulmonar, hasta demostrar lo contrario.' },
        { cells: ['Varicocele izquierdo nuevo, no reduce en decúbito', 'Trombosis de vena renal izquierda', 'Varicocele primario'],
          say: 'Varicocele izquierdo nuevo que no se reduce al acostarse: trombosis de la vena renal izquierda.' },
        { cells: ['Membranosa con albúmina < 2,0–2,5 g/dL', 'Anticoagulación profiláctica', 'Esperar a que trombose'],
          say: 'Membranosa con albúmina bajo dos a dos y medio: anticoagulación profiláctica, antes de que aparezca la trombosis.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 64 años, fumador, con 3 semanas de edema de extremidades inferiores hasta los muslos, orinas espumosas y alza de 6 kg de peso. PA 130/80 mmHg. Albúmina 2,1 g/dL, colesterol total 420 mg/dL, creatinina 0,9 mg/dL. Proteinuria de 24 horas: 8,6 g. Sedimento: 2 eritrocitos por campo y abundantes cuerpos ovales grasos con cruces de Malta. No es diabético.',
      question: '¿Cuál es la conducta diagnóstica más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar prednisona 1 mg/kg/día de forma empírica' },
        { letter: 'B', text: 'Realizar biopsia renal percutánea' },
        { letter: 'C', text: 'Solicitar ANCA y anticuerpos anti-membrana basal' },
        { letter: 'D', text: 'Indicar losartán y controlar la proteinuria en 6 meses' },
        { letter: 'E', text: 'Solicitar cistoscopía' },
      ],
      correct: 'B',
      explanation: 'Síndrome nefrótico puro en un adulto no diabético: la biopsia renal es obligatoria para definir la histología (lo más probable a esta edad es una membranosa) y guiar el tratamiento. Con albúmina de 2,1 g/dL además hay que evaluar anticoagulación profiláctica.',
      say: {
        stem: 'Vamos al caso. Hombre de sesenta y cuatro años, fumador, con tres semanas de edema hasta los muslos, orina espumosa y seis kilos de alza de peso. Presión normal. Albúmina dos coma uno, colesterol cuatrocientos veinte, creatinina normal, proteinuria de ocho coma seis gramos al día, y en el sedimento, cuerpos ovales grasos con cruces de Malta. No es diabético.',
        question: '¿Cuál es la conducta diagnóstica más adecuada?',
        options: 'Las opciones son: prednisona empírica, biopsia renal, pedir ANCA y anti membrana basal, losartán y control en seis meses, o cistoscopía. Piénsalo.',
        answer: 'La respuesta es la B, biopsia renal. Es un síndrome nefrótico puro en un adulto, y no cumple ninguna de las dos excepciones: no es diabético ni tiene amiloidosis demostrada. A esta edad lo más probable es una membranosa, y con una albúmina de dos coma uno, además hay que pensar en anticoagular. La prednisona empírica es la trampa: esa conducta es del niño, no del adulto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 10',
      stem: 'Hombre de 35 años sin antecedentes previos consulta por edema facial al despertar, orina espumosa y aumento de peso de 5 kg en 2 semanas. Proteinuria 24h: 8 g. Albúmina 2.0 g/dL. Sin hematuria.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome nefrótico puro' },
        { letter: 'B', text: 'Síndrome nefrítico agudo' },
        { letter: 'C', text: 'Glomerulonefritis membranoproliferativa' },
        { letter: 'D', text: 'Nefropatía IgA' },
        { letter: 'E', text: 'Pielonefritis crónica' },
      ],
      correct: 'A',
      explanation: 'Proteinuria masiva (> 3,5 g/24 h) + hipoalbuminemia + edema, sin hematuria: síndrome nefrótico puro. Las glomerulonefritis cursan con hematuria dismórfica.',
      say: {
        stem: 'Vamos con las preguntas reales. Esta es del EUNACOM de julio de dos mil veinticinco. Hombre de treinta y cinco años con edema facial al despertar, orina espumosa y cinco kilos de alza en dos semanas. Proteinuria de ocho gramos al día, albúmina de dos, y sin hematuria.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: síndrome nefrótico puro, síndrome nefrítico agudo, glomerulonefritis membranoproliferativa, nefropatía por IgA, o pielonefritis crónica. Piénsalo.',
        answer: 'Es la A, síndrome nefrótico puro. Proteinuria sobre tres y medio, albúmina bajo tres y edema: cumple todo. Y la palabra clave es sin hematuria. El nefrítico, la membranoproliferativa y la IgA son glomerulonefritis, y todas tienen hematuria. Fíjate que te piden el diagnóstico sindromático, no la histología.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 59',
      stem: 'Una paciente de 27 años, diabética tipo 1, con mal control metabólico, consulta por edema de las extremidades inferiores y orinas espumosas. Al examen físico se constata edema palpebral y facial, edema blando de extremidades inferiores. En sus exámenes destaca hemoglobina glicosilada de 8,2%, ANA negativos, sedimento de orina con abundantes cuerpos ovales grasos, 2-3 glóbulos rojos por campo y 2-4 glóbulos blancos por campo, creatinina: 1,2 mg/dl y proteinuria cuantitativa de 9 g en 24 horas.',
      question: '¿Cuál es la conducta de elección para proseguir el manejo de esta paciente?',
      options: [
        { letter: 'A', text: 'Electroforesis de proteínas en sangre' },
        { letter: 'B', text: 'Biopsia renal' },
        { letter: 'C', text: 'Inmunofijación de proteínas en orina' },
        { letter: 'D', text: 'Prednisona oral' },
        { letter: 'E', text: 'Solicitar ANCA, C3 y C4' },
      ],
      correct: 'B',
      explanation: 'Síndrome nefrótico en una adulta joven: la biopsia es obligatoria. La diabetes no basta para exceptuarla (no es de larga data con retinopatía concordante). Los ANCA son marcadores de vasculitis, que dan cuadros nefríticos, no nefróticos.',
      say: {
        stem: 'Una pregunta del EUNACOM de agosto de dos mil veintiuno, que en diciembre de dos mil diecinueve apareció casi igual. Mujer de veintisiete años, diabética tipo uno con mal control, con edema palpebral y de piernas, orina espumosa, cuerpos ovales grasos, casi sin glóbulos rojos, y nueve gramos de proteinuria al día.',
        question: '¿Cuál es la conducta de elección para proseguir el manejo?',
        options: 'Las opciones son: electroforesis de proteínas en sangre, biopsia renal, inmunofijación en orina, prednisona oral, o pedir ANCA y complemento C tres y C cuatro. Piénsalo.',
        answer: 'La respuesta es la B, biopsia renal. Es un nefrótico en una adulta, y la diabetes no la exime: la excepción es el diabético de larga data con retinopatía concordante, y esta paciente tiene veintisiete años. La prednisona es la trampa pediátrica. Y los ANCA sobran, porque las vasculitis dan cuadros nefríticos, no nefróticos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 3',
      stem: 'Paciente de 65 años, diabético en tratamiento con esquema intensificado de insulina, actualmente hospitalizado por cuadro de edema generalizado en estudio, presenta dolor torácico de inicio súbito, asociado a diaforesis. Al examen físico destaca saturación de 89% con FiO2 ambiental, murmullo pulmonar con crepitaciones difusas bilaterales. En sus exámenes de laboratorio destaca proteinuria de 24 horas de 5gramos, albúmina de 2g/dL y perfil lipídico con triglicéridos de 450 mg/dL.',
      question: 'La causa más probable de su dolor torácico es:',
      options: [
        { letter: 'A', text: 'Neumonía aguda' },
        { letter: 'B', text: 'Tromboemolismo pulmonar' },
        { letter: 'C', text: 'Infarto agudo al miocardio' },
        { letter: 'D', text: 'Pericarditis aguda' },
        { letter: 'E', text: 'Disección aórtica' },
      ],
      correct: 'B',
      explanation: 'Síndrome nefrótico (proteinuria 5 g, albúmina 2 g/dL) con dolor torácico súbito y desaturación: tromboembolismo pulmonar, por la pérdida urinaria de antitrombina III.',
      say: {
        stem: 'Ahora una del EUNACOM de julio de dos mil trece. Paciente de sesenta y cinco años, diabético, hospitalizado por edema generalizado en estudio. Hace un dolor torácico súbito con sudoración, y satura ochenta y nueve por ciento. Tiene cinco gramos de proteinuria, albúmina de dos, y triglicéridos altos.',
        question: '¿Cuál es la causa más probable de su dolor torácico?',
        options: 'Las opciones son: neumonía aguda, tromboembolismo pulmonar, infarto agudo al miocardio, pericarditis aguda, o disección aórtica. Piénsalo.',
        answer: 'Es la B, tromboembolismo pulmonar. Detrás del edema generalizado hay un síndrome nefrótico, con una albúmina de dos, justo en la zona de alto riesgo trombótico. Dolor súbito con desaturación en ese contexto es TEP. El infarto tienta porque es diabético, pero la pregunta te está mostrando la proteinuria por una razón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 121',
      stem: 'Un paciente de 56 años, diabético, hospitalizado en su quinto día, por un síndrome nefrótico, presenta un cuadro de disnea y dolor torácico, por lo que se realiza una radiografía de tórax, la que muestra un derrame pleural derecho. Se realiza la punción pleural, dado salida a un líquido pleural de aspecto hemorrágico, con LDH: 650 UI/L, células 80% de polimorfonucleares, 20% de mononucleares, ADA: 30 UI/L.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Derrame paraneumónico' },
        { letter: 'B', text: 'Trasudado por hipoalbuminemia' },
        { letter: 'C', text: 'Empiema' },
        { letter: 'D', text: 'Tromboembolismo pulmonar' },
        { letter: 'E', text: 'Derrame pleural canceroso' },
      ],
      correct: 'D',
      explanation: 'Nefrótico hospitalizado con disnea y dolor torácico: TEP. El derrame del TEP suele ser un exudado hemorrágico. Un trasudado por hipoalbuminemia no sería hemorrágico ni tendría LDH de 650.',
      say: {
        stem: 'Otra variante de la misma idea, del EUNACOM de diciembre de dos mil diecinueve. Paciente de cincuenta y seis años, hospitalizado hace cinco días por un síndrome nefrótico, que hace disnea y dolor torácico. Tiene un derrame pleural derecho, y la punción muestra un líquido hemorrágico, con LDH de seiscientos cincuenta y predominio de polimorfonucleares.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: derrame paraneumónico, trasudado por hipoalbuminemia, empiema, tromboembolismo pulmonar, o derrame canceroso. Piénsalo.',
        answer: 'Es la D, tromboembolismo pulmonar. Nefrótico hospitalizado con disnea y dolor torácico: el TEP va primero. Y el derrame del TEP suele ser un exudado hemorrágico, como este. El distractor más tentador es el trasudado por hipoalbuminemia, porque el paciente sí tiene la albúmina baja, pero un trasudado no es hemorrágico ni tiene una LDH tan alta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 64',
      stem: 'Un paciente de 80 años consulta por equimosis periorbitaria, sin antecedente traumático, asociado a astenia y edema de extremidades inferiores. Se solicitan exámenes, entre los que destacan creatinina: 2,6 mg/dl, proteinuria de 24 horas: 8,4 gramos/día, albuminemia: 1,4 g/dl. Su hemograma es normal y su VHS: 96 mmHg.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Nefrosis lipoidea' },
        { letter: 'B', text: 'Nefropatía diabética' },
        { letter: 'C', text: 'Amiloidosis primaria' },
        { letter: 'D', text: 'Enfermedad de Berger' },
        { letter: 'E', text: 'Arteritis de la temporal' },
      ],
      correct: 'C',
      explanation: 'Síndrome nefrótico en un adulto mayor de 65 años con equimosis periorbitaria espontánea y VHS muy elevada: amiloidosis primaria (AL), ligada a gammapatía monoclonal o mieloma.',
      say: {
        stem: 'La última, del EUNACOM de diciembre de dos mil diecisiete. Paciente de ochenta años con equimosis alrededor de los ojos sin trauma, astenia y edema de piernas. Creatinina dos coma seis, proteinuria de ocho coma cuatro gramos al día, albúmina de uno coma cuatro, y una VHS de noventa y seis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: nefrosis lipoidea, nefropatía diabética, amiloidosis primaria, enfermedad de Berger, o arteritis de la temporal. Piénsalo.',
        answer: 'Es la C, amiloidosis primaria. Tiene un síndrome nefrótico, tiene ochenta años, y hay dos pistas más: la VHS muy alta, que hace pensar en una gammapatía, y las equimosis periorbitarias espontáneas, clásicas del amiloide en los vasos. La nefrosis lipoidea, que es el otro nombre de cambios mínimos, es la causa típica del niño, no de un paciente de ochenta años.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Proteinuria + albúmina', kind: 'criteria', items: [
          { t: 'Proteinuria > 3,5 g + albúmina < 3,0', d: 'Con edema, dislipidemia y cruz de Malta',
            say: 'Cerremos con las reglas de oro. El síndrome nefrótico es proteinuria sobre tres y medio gramos y albúmina bajo tres, acompañadas de edema, dislipidemia y lipiduria con cruz de Malta.' },
          { t: 'Adulto: biopsia obligatoria', d: 'Niño: corticoides sin biopsia',
            say: 'En el adulto, la biopsia es obligatoria; en el niño, se tratan los cambios mínimos sin biopsiar.' },
        ] },
        { title: 'Complicaciones', tag: 'Lo que se pierde', kind: 'alert', items: [
          { t: 'Antitrombina III: TVR y TEP', d: 'Anticoagular si albúmina < 2,0–2,5 en membranosa',
            say: 'Se pierde antitrombina tres: trombosis de vena renal y TEP. Se anticoagula si la albúmina cae bajo dos a dos y medio en la membranosa.' },
          { t: 'IgG: neumococo', d: 'Peritonitis bacteriana espontánea',
            say: 'Se pierde inmunoglobulina G: infecciones por neumococo, como la peritonitis bacteriana espontánea.' },
        ] },
        { title: 'Tratamiento de base', tag: 'En todos', kind: 'pharma', items: [
          { t: 'IECA o ARA-II + sal < 2 g + furosemida', d: 'Más estatinas',
            say: 'Y a todos, IECA o ARA dos, menos sal, furosemida y estatinas. Si te llevas una sola idea de hoy: en el síndrome nefrótico, cada proteína que se escapa explica una complicación, y en el adulto, la causa la dice la biopsia. En la próxima clase vemos justamente qué encuentra esa biopsia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Adulto con síndrome nefrótico: estudio y prevención',
    root: N('start', 'Edema + orina espumosa', '¿Proteinuria > 3,5 g y albúmina < 3,0?',
      'Adulto que consulta por edema y orina espumosa. Lo primero es confirmar el síndrome: proteinuria sobre tres y medio gramos al día y albúmina bajo tres, con un sedimento sin hematuria dismórfica.',
      ['Hay hematuria dismórfica', N('refer', 'Pensar en cuadro nefrítico', 'Otra vía de estudio',
        'Si hay hematuria dismórfica, cilindros hemáticos o hipertensión, ya no es un nefrótico puro: piensa en un síndrome nefrítico, que tiene su propia clase.')],
      ['Nefrótico puro', N('q', '¿Alguna excepción a la biopsia?', 'Diabetes de larga data con retinopatía · amiloidosis demostrada',
        'Confirmado el nefrótico, la pregunta es si cae en alguna de las dos excepciones: diabetes de larga data con retinopatía concordante, o amiloidosis ya demostrada por otra biopsia.',
        ['SÍ', N('ok', 'No se biopsia', 'Tratar la causa conocida',
          'Si cae en una de ellas, no se biopsia y se trata la causa conocida.')],
        ['NO', N('do', 'Biopsia renal percutánea', 'Define histología e inmunosupresión',
          'Si no cae en ninguna, que es lo habitual, se hace biopsia renal percutánea. En el adulto es obligatoria. Y mientras tanto, mira la albúmina, porque define el riesgo de trombosis.',
          ['Albúmina < 2,0–2,5', N('alert', 'Anticoagulación profiláctica', 'Sobre todo en membranosa',
            'Si la albúmina está bajo dos a dos y medio, especialmente en una membranosa, se indica anticoagulación profiláctica con heparina de bajo peso molecular o antagonistas de la vitamina K.')],
          ['Albúmina mayor', N('ok', 'Soporte para todos', 'IECA/ARA-II, sal, furosemida, estatinas',
            'Y en todos, tratamiento de soporte: IECA o ARA dos, restricción de sal, furosemida y estatinas, más vacuna antineumocócica antes de inmunosuprimir.')])])]),
  },
};
