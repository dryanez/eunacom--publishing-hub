// Clase 7.12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La piel, el potasio y la ACTH separan el Addison de la insuficiencia secundaria',
      say: 'Bienvenidos. En la clase anterior vimos el exceso de cortisol; hoy vemos el problema al revés, la insuficiencia suprarrenal crónica, un tema de frecuencia alta en el EUNACOM. Lo que más se pregunta es distinguir la primaria, el Addison, de la secundaria. Y vas a ver que con dos datos, la piel y el potasio, casi siempre lo resuelves junto a la cama del paciente.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Dónde está el daño?',
      nodes: [
        { id: 'add', col: 0, row: 1, k: 'cause', t: 'Primaria: Addison', s: 'Corteza destruida sobre 90 %' },
        { id: 'sin', col: 1, row: 0, k: 'mech', t: 'Sin cortisol ni aldosterona', s: 'Cae toda la corteza' },
        { id: 'actA', col: 1, row: 2, k: 'mech', t: 'ACTH muy alta', s: 'La hipófisis grita' },
        { id: 'hk', col: 2, row: 0, k: 'effect', t: 'Hiperkalemia e hiponatremia', s: 'Avidez por la sal' },
        { id: 'pig', col: 2, row: 2, k: 'effect', t: 'Hiperpigmentación', s: 'ACTH estimula melanocitos' },
        { id: 'sec', col: 3, row: 3, k: 'cause', t: 'Secundaria', s: 'Falta ACTH o CRH' },
        { id: 'ald', col: 4, row: 3, k: 'good', t: 'Aldosterona intacta', s: 'Potasio normal, piel pálida' },
      ],
      edges: [
        { from: 'add', to: 'sin' }, { from: 'add', to: 'actA', label: 'sin freno' },
        { from: 'sin', to: 'hk' }, { from: 'actA', to: 'pig' },
        { from: 'sec', to: 'ald', label: 'la glomerulosa depende del SRAA' },
      ],
      steps: [
        { show: ['add'], note: 'El daño está en la propia suprarrenal',
          say: 'Partamos por el mecanismo, porque de aquí sale todo el examen. En la insuficiencia primaria, la enfermedad de Addison, el daño está en la propia suprarrenal: se destruye más del noventa por ciento de ambas cortezas.' },
        { show: ['sin', 'hk'], note: 'Se pierde también la aldosterona',
          say: 'Como se pierde toda la corteza, falta el cortisol y también la aldosterona. Sin aldosterona, el riñón pierde sodio y retiene potasio: hiperkalemia, hiponatremia, y un paciente con ganas de comer sal.' },
        { show: ['actA', 'pig'], note: 'La ACTH alta oscurece la piel',
          say: 'Y como no hay cortisol que frene la hipófisis, la ACTH sube muchísimo. La ACTH viene de la misma molécula precursora que la hormona que estimula los melanocitos, y actúa sobre sus receptores de melanocortina uno. Resultado: la piel se oscurece.' },
        { show: ['sec'], note: 'En la secundaria, el problema está arriba',
          say: 'En la insuficiencia secundaria, en cambio, el problema está arriba: la hipófisis no produce ACTH, o el hipotálamo no produce CRH. La suprarrenal está sana, pero nadie la estimula.' },
        { show: ['ald'], note: 'La zona glomerulosa no depende de la ACTH',
          say: 'Y aquí está la clave. La aldosterona no depende de la ACTH, sino del sistema renina angiotensina aldosterona, que responde a la volemia y al potasio. Así que en la secundaria la aldosterona sigue funcionando: no hay hiperkalemia. Y sin ACTH alta, la piel queda pálida.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología',
      title: 'Las causas de cada una',
      cards: [
        { title: 'Primaria (Addison)', tag: 'La corteza', kind: 'key', items: [
          { t: 'Autoinmune: 70–80 %', d: 'Aislada o poliglandular tipo 1 y 2',
            say: 'Veamos las causas. En el Addison, setenta a ochenta por ciento es autoinmune: una adrenalitis aislada, o parte de un síndrome poliglandular autoinmune tipo uno o tipo dos.' },
          { t: 'Tuberculosis suprarrenal', d: 'Sigue siendo relevante',
            say: 'La tuberculosis suprarrenal sigue siendo una causa relevante, y el examen la usa mucho: paciente con antecedente de tuberculosis que ahora está oscuro y con el potasio alto.' },
          { t: 'Metástasis o hemorragia', d: 'Mama, pulmón, melanoma',
            say: 'Y también las metástasis bilaterales, de mama, pulmón o melanoma, y la hemorragia suprarrenal.' },
        ] },
        { title: 'Secundaria y terciaria', tag: 'Hipófisis o hipotálamo', kind: 'alert', items: [
          { t: 'Suspender corticoides de golpe', d: 'La causa más frecuente en la comunidad',
            say: 'En la secundaria, la causa más frecuente en la comunidad es la que dejamos pendiente la clase pasada: el paciente que usó corticoides por mucho tiempo y los suspende de golpe. Su eje está frenado y la suprarrenal atrofiada, y no alcanza a responder.' },
          { t: 'Tumores selares, apoplejía, radioterapia', d: 'Falta de ACTH',
            say: 'Las otras causas son las que dañan la hipófisis: tumores de la silla turca, apoplejía hipofisaria o radioterapia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Lo común y lo que las separa',
      cards: [
        { title: 'En ambas', tag: 'Falta cortisol', kind: 'normal', items: [
          { t: 'Astenia, baja de peso, náuseas', d: 'Progresivo, de meses',
            say: 'Veamos la clínica. Ambas comparten lo que produce la falta de cortisol: astenia progresiva de meses, baja de peso, anorexia y náuseas.' },
          { t: 'Hipotensión y mareo postural', d: 'Hipoglicemia',
            say: 'Además, hipotensión con mareo al pararse, e hipoglicemia, porque el cortisol es una hormona que sube la glucosa.' },
        ] },
        { title: 'Lo que las separa', tag: 'Muy preguntado', kind: 'alert', items: [
          { t: 'Piel: oscura vs pálida', d: 'Pliegues palmares, cicatrices, mucosa oral',
            say: 'Y ahora lo que las separa. Primero la piel. En el Addison hay hiperpigmentación de piel y mucosas: pliegues de las manos, cicatrices recientes, mucosa de la boca y pezones. En la secundaria la piel es pálida, casi de alabastro.' },
          { t: 'Potasio: alto vs normal', d: 'Hiperkalemia solo en la primaria',
            say: 'Segundo, el potasio. La hiperkalemia orienta con fuerza al Addison, porque falta la aldosterona. En la secundaria el potasio es normal. Si ves hiperkalemia, piensa en primaria.' },
          { t: 'Sodio bajo en ambas, por distinto motivo', d: 'Primaria: pierde sal · secundaria: ADH',
            say: 'Y ojo con el sodio, que puede engañarte. Puede estar bajo en las dos, pero por motivos distintos. En la primaria es una hiponatremia hipovolémica, porque el riñón pierde sal. En la secundaria es dilucional, por un aumento inapropiado de la hormona antidiurética. Por eso el sodio no te sirve para separarlas; el potasio sí.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Cortisol matinal, Synacthen y ACTH',
      nodes: [
        { id: 'sos', col: 0, row: 2, k: 'start', t: 'Sospecha clínica', s: 'Astenia, hipotensión, baja de peso' },
        { id: 'cor', col: 1, row: 2, k: 'q', t: 'Cortisol plasmático 8 h', s: 'Primer examen' },
        { id: 'bajo', col: 2, row: 0, k: 'alert', t: 'Menor de 3 mcg/dL', s: 'Confirma la insuficiencia' },
        { id: 'int', col: 2, row: 2, k: 'mech', t: 'Entre 3 y 15 mcg/dL', s: 'Zona indeterminada' },
        { id: 'alto', col: 2, row: 4, k: 'good', t: 'Mayor de 15–18 mcg/dL', s: 'La descarta' },
        { id: 'syn', col: 3, row: 2, k: 'q', t: 'Synacthen 250 mcg', s: 'Pico normal: 18 mcg/dL o más' },
        { id: 'acth', col: 4, row: 1, k: 'refer', t: 'ACTH plasmática', s: 'Alta: primaria · baja: secundaria' },
      ],
      edges: [
        { from: 'sos', to: 'cor' },
        { from: 'cor', to: 'bajo' }, { from: 'cor', to: 'int' }, { from: 'cor', to: 'alto' },
        { from: 'int', to: 'syn' },
        { from: 'bajo', to: 'acth', label: 'tipificar' }, { from: 'syn', to: 'acth', label: 'si no sube' },
      ],
      steps: [
        { show: ['sos', 'cor'], note: 'El primer examen es el cortisol de la mañana',
          say: 'Vamos al diagnóstico. Frente a la sospecha, el primer examen es el cortisol plasmático a las ocho de la mañana, que es cuando debería estar en su punto más alto. Fíjate que es justo el examen que no servía para el Cushing: para el exceso buscábamos el cortisol de la noche; para la falta, el de la mañana.' },
        { show: ['bajo'], note: 'Muy bajo: diagnóstico',
          say: 'Si el cortisol de la mañana está bajo tres microgramos por decilitro, con clínica compatible, prácticamente confirma la insuficiencia suprarrenal.' },
        { show: ['alto'], note: 'Alto: la descarta',
          say: 'Si está sobre quince a dieciocho, la descarta con bastante certeza.' },
        { show: ['int', 'syn'], note: 'La zona gris obliga a estimular',
          say: 'Y si queda entre tres y quince, estás en la zona gris, y necesitas una prueba dinámica: el test de estimulación con ACTH sintética, o Synacthen, que es el patrón de referencia. Se inyectan doscientos cincuenta microgramos de cosintropina y se mide el cortisol a los treinta y sesenta minutos. Lo normal es que suba a dieciocho o más; si no sube, se confirma la insuficiencia.' },
        { show: ['acth'], note: 'La ACTH dice dónde está el defecto',
          say: 'Confirmada la insuficiencia, la ACTH plasmática te dice dónde está el problema. Muy elevada, sobre sesenta a cien picogramos por mililitro, es un Addison. Baja o inapropiadamente normal, es una insuficiencia central, secundaria o terciaria.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Reemplazar lo que falta',
      cards: [
        { title: 'Glucocorticoide', tag: 'En ambas', kind: 'pharma', items: [
          { t: 'Hidrocortisona 15–25 mg/día', d: 'En 2 o 3 tomas: 10 · 5 · 2,5 mg',
            say: 'Vamos al tratamiento, y la lógica es simple: se reemplaza lo que falta. El cortisol falta en las dos, así que ambas reciben hidrocortisona oral, quince a veinticinco miligramos al día, repartidos en dos o tres tomas. Por ejemplo, diez miligramos a las ocho, cinco a las dos de la tarde y dos coma cinco a las seis, para imitar la curva del día.' },
          { t: 'Alternativa: prednisona 3,75–5 mg', d: 'Una toma matinal',
            say: 'La alternativa es la prednisona, tres coma setenta y cinco a cinco miligramos, en una sola toma en la mañana.' },
        ] },
        { title: 'Mineralocorticoide', tag: 'Solo Addison', kind: 'alert', items: [
          { t: 'Fludrocortisona 0,05–0,1 mg/día', d: 'Una toma matinal',
            say: 'La aldosterona falta solo en el Addison, así que solo el Addison recibe fludrocortisona: cero coma cero cinco a cero coma uno miligramos al día, en una toma en la mañana. Normaliza la volemia, la presión postural y corrige la hiperkalemia.' },
          { t: 'En la secundaria: nunca', d: 'La aldosterona funciona',
            say: 'Y en la secundaria nunca se indica fludrocortisona, porque su aldosterona funciona perfectamente. Addison, dos fármacos; secundaria, uno. Esa diferencia se pregunta.' },
        ] },
        { title: 'Seguimiento', tag: 'Clínico', kind: 'criteria', items: [
          { t: 'Peso, PA de pie y sentado, energía', d: 'Más electrolitos y renina',
            say: 'El control es clínico: el peso, la presión de pie y sentado, y cómo anda de energía. Se agregan electrolitos y renina plasmática, que te dice si la dosis de fludrocortisona es adecuada.' },
          { t: 'Nunca ajustar por cortisol plasmático', d: 'No refleja la dosis',
            say: 'Y una regla: la dosis de hidrocortisona nunca se ajusta según el cortisol plasmático.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Educación',
      title: 'El paciente tiene que saber qué hacer',
      cards: [
        { title: 'Reglas de enfermedad', tag: 'Salvan vidas', kind: 'alert', items: [
          { t: 'Fiebre o infección: duplicar o triplicar', d: 'También en cirugías menores',
            say: 'Y lo último, que salva vidas: educar al paciente. Una persona sana sube su cortisol cuando se enferma; tu paciente no puede. Por eso, ante fiebre, una infección aguda o una cirugía menor, debe duplicar o triplicar temporalmente su dosis de hidrocortisona.' },
          { t: 'Vómitos o diarrea: 100 mg IM', d: 'O consultar de urgencia',
            say: 'Y si vomita, no tolera la vía oral o tiene diarrea profusa, no absorbe las tabletas: debe inyectarse de inmediato cien miligramos de hidrocortisona intramuscular, o consultar de urgencia para recibirla por la vena.' },
        ] },
        { title: 'Derivación', tag: 'Endocrinología', kind: 'criteria', items: [
          { t: 'Sin GES directo', d: 'Derivación prioritaria',
            say: 'La insuficiencia suprarrenal no tiene GES directo, y se deriva con prioridad a endocrinología. Si falla la educación, el paciente llega en crisis suprarrenal, que es el tema de la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, desde la sospecha hasta el tratamiento de cada tipo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Primaria versus secundaria',
      head: ['Parámetro', 'Primaria (Addison)', 'Secundaria o terciaria'],
      rows: [
        { cells: ['Causa más frecuente', 'Adrenalitis autoinmune', 'Retiro brusco de corticoides'],
          say: 'Repasemos lado a lado. La causa más frecuente: autoinmune en la primaria, y el retiro brusco de corticoides en la secundaria.' },
        { cells: ['Piel', 'Hiperpigmentada: pliegues y mucosas', 'Pálida, alabastrina'],
          say: 'La piel: oscura en el Addison, pálida en la secundaria.' },
        { cells: ['Potasio', 'Hiperkalemia', 'Normal'],
          say: 'El potasio: alto en el Addison, normal en la secundaria. La trampa es pensar que toda insuficiencia suprarrenal da hiperkalemia.' },
        { cells: ['Sodio', 'Bajo: pierde sal por el riñón', 'Bajo: dilucional por ADH'],
          say: 'El sodio puede estar bajo en ambas, por eso no discrimina.' },
        { cells: ['ACTH', 'Muy elevada (mayor de 100)', 'Baja o inapropiadamente normal'],
          say: 'La ACTH: muy alta en el Addison, baja o normal en la secundaria.' },
        { cells: ['Fludrocortisona', 'Obligatoria', 'No se indica'],
          say: 'Y la fludrocortisona: obligatoria en el Addison, nunca en la secundaria.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 45 años con astenia de 4 meses, baja de 5 kg y mareo al ponerse de pie. PA 100/65 mmHg. Sin hiperpigmentación. Na 134 mEq/L, K 4,4 mEq/L. Cortisol plasmático a las 8 h: 9 mcg/dL.',
      question: '¿Cuál es el paso siguiente más adecuado?',
      options: [
        { letter: 'A', text: 'Descartar insuficiencia suprarrenal por cortisol normal' },
        { letter: 'B', text: 'Test de estimulación con ACTH sintética (Synacthen 250 mcg)' },
        { letter: 'C', text: 'Iniciar hidrocortisona y fludrocortisona' },
        { letter: 'D', text: 'Test de supresión con dexametasona 1 mg' },
        { letter: 'E', text: 'Tomografía computarizada de suprarrenales' },
      ],
      correct: 'B',
      explanation: 'Un cortisol matinal entre 3 y 15 mcg/dL es indeterminado: no confirma ni descarta. Corresponde una prueba de estimulación con Synacthen 250 mcg; un pico menor de 18 mcg/dL confirma la insuficiencia. Luego la ACTH define si es primaria o secundaria.',
      say: {
        stem: 'Vamos a un caso. Mujer de cuarenta y cinco años con astenia de cuatro meses, cinco kilos menos y mareo al pararse. Presión de cien con sesenta y cinco, sin hiperpigmentación. Sodio de ciento treinta y cuatro, potasio normal. El cortisol de las ocho de la mañana es nueve.',
        question: '¿Cuál es el paso siguiente más adecuado?',
        options: 'Las alternativas: descartar la insuficiencia porque el cortisol es normal, test de Synacthen, iniciar hidrocortisona con fludrocortisona, test de supresión con dexametasona, o tomografía de suprarrenales. Piénsalo.',
        answer: 'Es la B, el test de Synacthen. Nueve está entre tres y quince: es la zona gris, que ni confirma ni descarta. El distractor tentador es la A, porque nueve parece un valor normal, pero bajo quince no puedes descartar. La dexametasona es para el Cushing, y la fludrocortisona se adelanta: sin hiperpigmentación y con potasio normal, esto huele a secundaria, que ni siquiera la necesitaría.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 112',
      stem: 'Un paciente alcohólico, vagabundo, con antecedente de haber sido tratado por tuberculosis hace dos años, consulta por un cuadro de diarrea y baja de peso, malestar general de algunos meses de evolución. En su examen físico se aprecia IMC de 16, hiperpigmentación de pliegues y melanoplaquias. En sus exámenes tiene K: 5,5 mEq/L, Na: 132 mEq/L.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Síndrome paraneoplásico' },
        { letter: 'B', text: 'Desnutrición proteica' },
        { letter: 'C', text: 'Enfermedad de Addison' },
        { letter: 'D', text: 'Cáncer de sitio no precisado' },
        { letter: 'E', text: 'Pancreatitis crónica' },
      ],
      correct: 'C',
      explanation: 'Hiperpigmentación de pliegues, melanoplaquias, hiperkalemia e hiponatremia: insuficiencia suprarrenal primaria, probablemente por tuberculosis suprarrenal, que es la segunda causa después de la autoinmune.',
      say: {
        stem: 'Ahora, preguntas reales. La primera es del EUNACOM de julio de dos mil quince. Paciente alcohólico, en situación de calle, tratado por tuberculosis hace dos años. Lleva meses con diarrea, baja de peso y malestar. Está muy delgado, con hiperpigmentación de los pliegues y manchas oscuras en la mucosa oral. El potasio es cinco coma cinco y el sodio ciento treinta y dos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome paraneoplásico, desnutrición proteica, enfermedad de Addison, cáncer de sitio no precisado, o pancreatitis crónica. Piénsalo.',
        answer: 'Es la C, enfermedad de Addison, probablemente por tuberculosis suprarrenal. La piel oscura con melanoplaquias y el potasio alto apuntan a la primaria. El distractor tentador es el síndrome paraneoplásico, porque un Cushing ectópico también oscurece la piel; pero, como vimos la clase pasada, ese da potasio bajo, no alto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 161',
      stem: 'Un niño de 14 años consulta por dolor abdominal y vómitos de 3 días de evolución, con tendencia a la deshidratación. Hace dos meses estuvo hospitalizado por un cuadro similar, para hidratación endovenosa. Al examen físico tiene FC: 110x’, PA: 110/70 mmHg, T°: 36,8°C. Se solicitan exámenes, que muestran glicemia: 36 mg/dl, sodio: 126 mEq/L, potasio: 5,8 mEq/L, pH: 7,32, bicarbonato: 16 mEq/L.',
      question: 'El examen de elección para confirmar el diagnóstico es:',
      options: [
        { letter: 'A', text: 'Niveles plasmáticos de cortisol basal' },
        { letter: 'B', text: 'Prueba de tolerancia a la glucosa con curva de insulina' },
        { letter: 'C', text: 'Creatinina plasmática' },
        { letter: 'D', text: 'Amilasemia' },
        { letter: 'E', text: 'Endoscopía digestiva alta' },
      ],
      correct: 'A',
      explanation: 'Vómitos a repetición con deshidratación, hipoglicemia, hiponatremia e hiperkalemia: sospecha de insuficiencia suprarrenal. Se estudia con cortisol basal y, si no es concluyente, con test de estimulación con ACTH. De las opciones, el cortisol basal es la correcta.',
      say: {
        stem: 'La segunda es del EUNACOM de diciembre de dos mil diecinueve. Adolescente de catorce años con dolor abdominal y vómitos de tres días, tendiendo a la deshidratación. Hace dos meses lo hospitalizaron por lo mismo. Tiene glicemia de treinta y seis, sodio de ciento veintiséis, potasio de cinco coma ocho y acidosis metabólica.',
        question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
        options: 'Las opciones: cortisol basal, curva de tolerancia a la glucosa con insulina, creatinina, amilasa, o endoscopía. Piénsalo.',
        answer: 'Es la A, el cortisol basal. Hipoglicemia, sodio bajo y potasio alto en un paciente que se descompensa una y otra vez con cuadros digestivos: es una insuficiencia suprarrenal. El distractor tentador es la curva de glucosa con insulina, por la hipoglicemia, pero no explica el potasio alto. Y recuerda que si el cortisol queda en la zona gris, se completa con el Synacthen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 42 años acude por debilidad marcada, náuseas recurrentes, baja de 6 kg de peso e hipotensión arterial. Destaca hiperpigmentación marcada en surcos de las manos, codos y encías. Na 129 mEq/L, K 5,8 mEq/L y glicemia 70 mg/dL. Cortisol basal 8 h: 2,0 mcg/dL con ACTH plasmática de 180 pg/mL (VN < 50).',
      question: '¿Cuál es el tratamiento sustitutivo crónico de elección que debe prescribirse?',
      options: [
        { letter: 'A', text: 'Hidrocortisona oral en monoterapia' },
        { letter: 'B', text: 'Prednisona oral asociada a espironolactona' },
        { letter: 'C', text: 'Hidrocortisona oral asociada obligatoriamente a Fludrocortisona oral' },
        { letter: 'D', text: 'Dexametasona oral en dosis nocturna única' },
        { letter: 'E', text: 'Fludrocortisona oral en monoterapia sin glucocorticoides' },
      ],
      correct: 'C',
      explanation: 'Cortisol menor de 3 mcg/dL con ACTH elevada, hiperpigmentación e hiperkalemia: enfermedad de Addison. Falta cortisol y aldosterona, así que el reemplazo es hidrocortisona 15–25 mg/día repartida más fludrocortisona 0,05–0,1 mg/día.',
      say: {
        stem: 'Ahora dos casos representativos del banco, sobre el tratamiento y la forma secundaria. El primero: hombre de cuarenta y dos años, débil, con náuseas, seis kilos menos e hipotenso. Tiene hiperpigmentación en los surcos de las manos, los codos y las encías. Sodio ciento veintinueve, potasio cinco coma ocho, cortisol de dos y ACTH de ciento ochenta.',
        question: '¿Cuál es el tratamiento sustitutivo crónico de elección?',
        options: 'Las opciones: hidrocortisona sola, prednisona con espironolactona, hidrocortisona con fludrocortisona, dexametasona nocturna, o fludrocortisona sola. Piénsalo.',
        answer: 'Es la C, hidrocortisona más fludrocortisona. Es un Addison: piel oscura, potasio alto, ACTH alta. Falta el cortisol y falta la aldosterona, así que se reemplazan las dos. El distractor tentador es la hidrocortisona sola, que sería lo correcto en una secundaria, pero aquí dejaría la hiperkalemia sin corregir. Y la espironolactona empeoraría el potasio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 58 años con artritis reumatoide, en tratamiento con prednisona 15 mg diarios durante 2 años, suspende bruscamente el fármaco. A los 5 días consulta por debilidad extrema, náuseas, astenia e hipotensión postural (PA 95/60 mmHg). Piel pálida sin hiperpigmentación. Na 131 mEq/L, K 4,2 mEq/L, ACTH 4 pg/mL y cortisol 2,1 mcg/dL.',
      question: '¿Cuál es el mecanismo fisiopatológico principal que explica este cuadro?',
      options: [
        { letter: 'A', text: 'Destrucción autoinmune aguda de la glándula suprarrenal' },
        { letter: 'B', text: 'Supresión exógena prolongada del eje hipotálamo-hipófisis con atrofia corticosuprarrenal secundaria y déficit exclusivo de glucocorticoides con aldosterona preservada' },
        { letter: 'C', text: 'Falla mineralocorticoide primaria con pérdida renal masiva de potasio' },
        { letter: 'D', text: 'Secreción ectópica de péptidos supresores adrenales' },
        { letter: 'E', text: 'Síndrome de lisis corticosuprarrenal por nefropatía intersticial' },
      ],
      correct: 'B',
      explanation: 'El corticoide exógeno por años frenó la CRH y la ACTH (ACTH de 4 pg/mL) y atrofió la corteza. Al suspenderlo, falta cortisol, pero la glomerulosa depende del sistema renina-angiotensina: la aldosterona está preservada, por eso el potasio es normal y no hay hiperpigmentación.',
      say: {
        stem: 'El segundo: mujer de cincuenta y ocho años con artritis reumatoide, que tomó quince miligramos de prednisona al día por dos años y la suspendió de golpe. Cinco días después está muy débil, con náuseas e hipotensión postural. Piel pálida, potasio normal, ACTH de cuatro y cortisol de dos coma uno.',
        question: '¿Cuál es el mecanismo principal que explica este cuadro?',
        options: 'Las opciones: destrucción autoinmune, supresión del eje por el corticoide con aldosterona preservada, falla mineralocorticoide primaria, secreción ectópica de péptidos, o lisis suprarrenal por nefropatía. Piénsalo.',
        answer: 'Es la B. Dos años de prednisona frenaron la ACTH y atrofiaron la suprarrenal; al cortarla, falta cortisol. Pero la aldosterona depende del sistema renina angiotensina, así que sigue funcionando: por eso el potasio es normal y la piel pálida. El distractor tentador es la destrucción autoinmune, pero eso sería un Addison, con ACTH alta, piel oscura y potasio alto.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Distinguir', tag: 'Junto a la cama', kind: 'key', items: [
          { t: 'Addison: piel oscura, potasio alto', d: 'Secundaria: piel pálida, potasio normal',
            say: 'Cerremos con las reglas de oro. Addison: piel oscura y potasio alto, porque la ACTH sube y falta la aldosterona. Secundaria: piel pálida y potasio normal, porque la aldosterona funciona.' },
        ] },
        { title: 'Diagnosticar', tag: 'Cortisol y ACTH', kind: 'criteria', items: [
          { t: 'Cortisol 8 h: menor de 3 confirma', d: 'Entre 3 y 15: Synacthen, pico 18 o más',
            say: 'Para diagnosticar, cortisol de la mañana: bajo tres confirma, y entre tres y quince se hace el Synacthen, donde lo normal es subir a dieciocho o más. Después, la ACTH dice si es primaria o secundaria.' },
        ] },
        { title: 'Tratar', tag: 'Reemplazar lo que falta', kind: 'alert', items: [
          { t: 'Addison: hidrocortisona + fludrocortisona', d: 'Secundaria: solo hidrocortisona',
            say: 'Para tratar, reemplaza lo que falta: hidrocortisona en ambas, fludrocortisona solo en el Addison, y enseña a duplicar o triplicar la dosis ante el estrés. Si te llevas una sola idea de hoy: la aldosterona no depende de la ACTH, y eso explica la piel, el potasio y el tratamiento. En la próxima clase vemos qué pasa cuando este paciente se descompensa: la crisis suprarrenal. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Insuficiencia suprarrenal: confirmar, tipificar y tratar',
    root: N('start', 'Sospecha clínica', 'Astenia, baja de peso, hipotensión',
      'Parte con un paciente con astenia progresiva, baja de peso, náuseas e hipotensión postural.',
      ['', N('q', 'Cortisol plasmático 8 h', '¿Bajo, intermedio o alto?',
        'El primer examen es el cortisol plasmático de las ocho de la mañana.',
        ['Mayor de 15–18', N('ok', 'Se descarta', 'Buscar otra causa',
          'Si está sobre quince a dieciocho, se descarta la insuficiencia suprarrenal.')],
        ['Entre 3 y 15', N('do', 'Synacthen 250 mcg', 'Pico menor de 18: confirma',
          'Si está entre tres y quince, test de Synacthen: si el cortisol no llega a dieciocho, se confirma.')],
        ['Menor de 3', N('q', 'ACTH plasmática', '¿Alta o baja?',
          'Si está bajo tres, la insuficiencia está confirmada, y la ACTH define el nivel del defecto.',
          ['Alta', N('alert', 'Addison', 'Hidrocortisona + fludrocortisona',
            'ACTH alta: Addison, con hiperpigmentación e hiperkalemia. Se trata con hidrocortisona más fludrocortisona.')],
          ['Baja o normal', N('refer', 'Secundaria o terciaria', 'Solo hidrocortisona',
            'ACTH baja o normal: insuficiencia central, por corticoides suspendidos o daño hipofisario. Se trata solo con hidrocortisona.')])])]),
  },
};
