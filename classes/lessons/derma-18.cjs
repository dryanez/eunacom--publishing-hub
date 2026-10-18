// Clase 16.18 (Dermatología) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_4.cjs (derma-18, tema 16.18, tier 2). Códigos 6.01.2.008 y 6.01.3.002
// (Dx específico · Tx completo · Seguimiento completo, según books/data/v3_codemap.json).
// Preguntas reales (class_questions.cjs derma-18; verificadas contra el banco real): Diciembre 2017 P89 (placa livedoide a las 6 horas) y
// Enero 2023 P149 (dolor escapular y úlcera con halo violáceo). Enunciados y alternativas del banco real (se corrigió "Loxsocelismo").
// No usada: Diciembre 2022 P45 (lesión de 10 cm con centro oscuro en la región escapular: el enunciado y las alternativas coinciden con
// Enero 2023 P149, pero la clave del banco es Pseudomonas aeruginosa, no Loxosceles; contradice el libro: se anota como posible clave errónea).
// La pregunta práctica del libro (niño de 5 años mordido ayer, afebril: control y laboratorio) no es del banco real y no se usa como tal; su idea
// (laboratorio y control en 48 a 72 horas incluso sin síntomas sistémicos) se enseña en la clase y en el árbol.
// Fotos (en contexto): araña de rincón (Nelson Fig. 768.4), serie de la mordedura en el brazo de un niño (Nelson cap. 768) y escara negra
// (Sherman, Atlas of Clinical Emergency Medicine, p. 798). Copias en biblioteca/19_dermatologia/derma-18/.
// En movimiento: scenes/derma_nuevas.html (?v=loxosceles) sobre Blausen "Skin Block", CC BY 3.0 (derma_piel.png, ya limpia).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Loxoscelismo: la mordedura de la araña de rincón, sus dos formas, el manejo y la prevención en la vivienda',
      say: 'Bienvenido. Hoy vemos una urgencia muy chilena: el loxoscelismo, la mordedura de la araña de rincón, la única araña de importancia médica en Chile que causa necrosis de la piel. En el examen se pregunta casi siempre lo mismo: reconocer la placa livedoide con necrosis, saber que existe una forma grave, la cutáneo-visceral, con hemólisis y falla renal, y no operar de entrada. Partamos por conocer a la araña.',
    },

    {
      type: 'points',
      kicker: 'Biología y epidemiología',
      title: 'Loxosceles laeta: la araña de rincón',
      cards: [
        { title: 'Cómo es', tag: 'Violín en el cefalotórax', kind: 'key', items: [
          { t: 'Pardo amarillenta, 8-15 mm', d: 'Patas largas y finas, marca en forma de violín',
            say: 'Loxosceles laeta es una araña pardo amarillenta, de cuerpo de ocho a quince milímetros y patas largas y finas. Mira su marca característica: una mancha en forma de violín en el cefalotórax. Tiene seis ojos agrupados en tres pares.',
            photo: { src: 'biblioteca/19_dermatologia/derma-18/01_arana-de-rincon-violin__nelson_p5752.jpg', label: 'Araña de rincón', at: 'Mira su marca', credit: 'Nelson 22.ª ed., Fig. 768.4' } },
          { t: 'Nocturna, sedentaria, no agresiva', d: 'Rincones oscuros y poco perturbados',
            say: 'Es nocturna, sedentaria y no agresiva. Vive dentro de la casa, en rincones oscuros y poco perturbados: tras cuadros y muebles, en closets, en la ropa, en los zapatos y en las grietas.' },
        ] },
        { title: 'Cuándo muerde', tag: 'Dentro del domicilio', kind: 'alert', items: [
          { t: 'Solo si la aplastas contra la piel', d: 'De noche en la cama o al vestirse y calzarse',
            say: 'Muerde solo cuando es aplastada contra la piel: de noche, en la cama, o al vestirse y calzarse.' },
          { t: 'Zona central, verano y otoño', d: 'Tronco, muslos y brazos',
            say: 'La mayoría de los accidentes ocurre dentro del domicilio, en la zona central del país, con más frecuencia entre el verano y el otoño, y la picadura se ubica en el tronco, los muslos y los brazos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'De la toxina a la necrosis',
      nodes: [
        { id: 'v', col: 0, row: 2, k: 'cause', t: 'Veneno con esfingomielinasa D', s: 'Enzima dermonecrótica' },
        { id: 'a', col: 1, row: 2, k: 'mech', t: 'Activa complemento, neutrófilos y plaquetas', s: 'Daña el endotelio' },
        { id: 't', col: 2, row: 2, k: 'mech', t: 'Trombosis microvascular', s: 'Se ocluyen los vasos' },
        { id: 'n', col: 3, row: 1, k: 'effect', t: 'Necrosis isquémica', s: 'Piel y tejido subcutáneo' },
        { id: 'c', col: 4, row: 1, k: 'risk', t: 'Forma cutánea', s: '80-90% de los casos' },
        { id: 's', col: 3, row: 3, k: 'alert', t: 'Hemólisis y CID', s: 'La misma toxina, en la sangre' },
        { id: 'r', col: 4, row: 3, k: 'risk', t: 'Falla renal', s: 'Forma cutáneo-visceral, 1-15%' },
      ],
      edges: [
        { from: 'v', to: 'a' }, { from: 'a', to: 't' }, { from: 't', to: 'n' }, { from: 'n', to: 'c' }, { from: 't', to: 's' }, { from: 's', to: 'r' },
      ],
      steps: [
        { show: ['v', 'a'], note: 'Una enzima que daña el endotelio',
          say: 'El veneno contiene esfingomielinasa D, una enzima dermonecrótica. Activa el complemento, los neutrófilos y las plaquetas, y daña el endotelio de los vasos pequeños.' },
        { show: ['t', 'n'], note: 'Se tapan los vasos, muere el tejido',
          say: 'El resultado es una trombosis microvascular. Sin flujo, la piel y el tejido subcutáneo sufren una necrosis isquémica, y eso explica la placa pálida, violácea y la escara negra que veremos.' },
        { show: ['c'], note: 'La mayoría solo en la piel',
          say: 'En ochenta a noventa por ciento de los casos, el daño se queda en la piel: es la forma cutánea.' },
        { show: ['s', 'r'], note: 'En una minoría, la toxina pasa a la sangre',
          say: 'En la forma sistémica, la misma toxina provoca hemólisis intravascular, coagulación intravascular diseminada y daño renal. Es la forma cutáneo-visceral, que ocurre en uno a quince por ciento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Loxoscelismo cutáneo',
      title: 'Cómo evoluciona la lesión',
      cards: [
        { title: 'Primeras horas', tag: 'Engañosa al inicio', kind: 'alert', items: [
          { t: 'Mordedura casi indolora', d: 'Dolor quemante y eritema a las 2-8 horas',
            say: 'La mordedura es casi indolora, o produce un leve escozor. Entre dos y ocho horas después aparecen un dolor quemante creciente, eritema y edema.' },
          { t: 'Placa livedoide a las 6-12 horas', d: 'Bordes geográficos: rojo, violáceo y pálido',
            say: 'A las seis a doce horas se forma la placa livedoide: una placa de bordes geográficos, con zonas eritematosas, violáceas y pálidas isquémicas, a menudo con ampollas hemorrágicas. Mira esta lesión en el brazo de un niño: la placa violácea, con un centro oscuro y necrótico.',
            photo: { src: 'biblioteca/19_dermatologia/derma-18/02_loxoscelismo-placa-violacea__nelson_p5753.jpg', label: 'Placa violácea necrótica', at: 'Mira esta lesión', credit: 'Nelson 22.ª ed., cap. 768 (p. 4471)' } },
        ] },
        { title: 'Días a semanas', tag: 'Escara y úlcera', kind: 'criteria', items: [
          { t: 'Extensión gravitacional en 24-72 horas', d: 'Escara negra seca',
            say: 'En veinticuatro a setenta y dos horas la lesión se extiende hacia abajo, por gravedad, y evoluciona a una escara negra seca. Así se ve una escara necrótica extensa, con borde violáceo y halo eritematoso.',
            photo: { src: 'biblioteca/19_dermatologia/derma-18/05_loxoscelismo-escara-negra__sherman_p798.jpg', label: 'Escara negra', at: 'Así se ve una escara', credit: 'Atlas of Clinical Emergency Medicine (Sherman), p. 798' } },
          { t: 'Escara demarcada en 7-14 días', d: 'Se desprende: úlcera de cicatrización lenta',
            say: 'La escara se demarca en siete a catorce días y se desprende, dejando una úlcera de cicatrización lenta, de semanas a meses, con cicatriz atrófica. Esta es esa úlcera: el fondo fibrinoso, con el borde que va cerrando.',
            photo: { src: 'biblioteca/19_dermatologia/derma-18/04_loxoscelismo-ulcera-fibrinosa__nelson_p5753.jpg', label: 'Úlcera de fondo fibrinoso', at: 'Esta es esa úlcera', credit: 'Nelson 22.ª ed., cap. 768 (p. 4471)' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Diagnóstico clínico y forma cutáneo-visceral',
      cards: [
        { title: 'Cutánea', tag: 'Clínico', kind: 'key', items: [
          { t: 'Clínica y captura de la araña', d: 'Se apoya en capturarla',
            say: 'El diagnóstico de la forma cutánea es clínico, y se apoya en la captura de la araña.' },
          { t: 'Diferenciar de', d: 'Pioderma gangrenoso, ectima, fasceítis, celulitis, herpes zóster',
            say: 'Hay que diferenciarlo del pioderma gangrenoso, el ectima, la fasceítis necrotizante, la celulitis, la necrosis grasa y el herpes zóster.' },
        ] },
        { title: 'Cutáneo-visceral', tag: 'Primeras 6 a 72 horas', kind: 'alert', items: [
          { t: 'Fiebre, cefalea, mialgias, exantema', d: 'Morbiliforme o petequial',
            say: 'En una minoría, más en niños y tras mordeduras en zonas con tejido graso, los síntomas sistémicos aparecen en las primeras seis a setenta y dos horas: fiebre, cefalea, mialgias, náuseas y un exantema morbiliforme o petequial.' },
          { t: 'Hemólisis, orina oscura', d: 'Anemia, ictericia, LDH y bilirrubina indirecta altas',
            say: 'Luego viene la hemólisis intravascular, con anemia, ictericia y hemoglobinuria, que es orina oscura, con LDH y bilirrubina indirecta elevadas.' },
          { t: 'CID e insuficiencia renal aguda', d: 'Trombocitopenia, rabdomiólisis, shock',
            say: 'Se suman la coagulación intravascular diseminada, con trombocitopenia y alteración de la coagulación, la insuficiencia renal aguda y la rabdomiólisis. Puede llegar al shock y a la muerte.' },
        ] },
        { title: 'Estudio inicial', tag: 'En toda mordedura sospechosa', kind: 'criteria', items: [
          { t: 'Repetir en las primeras 48 h', d: 'Hemograma, reticulocitos, LDH, bilirrubina, creatinina',
            say: 'El estudio inicial se repite en las primeras cuarenta y ocho horas en toda mordedura sospechosa: hemograma con plaquetas y reticulocitos, LDH, bilirrubina, creatinina, nitrógeno ureico, creatinquinasa, pruebas de coagulación y orina completa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Forma cutánea: frío, reposo y no operar',
      cards: [
        { title: 'Lo que sí', tag: 'Medidas locales', kind: 'pharma', items: [
          { t: 'Reposo, elevación, frío local', d: 'Analgesia, profilaxis antitetánica, aseo',
            say: 'En la forma cutánea: reposo con la zona elevada, frío local, analgesia, profilaxis antitetánica, aseo y curaciones. El frío, no el calor, es lo que se pregunta.' },
          { t: 'Control diario 48-72 horas', d: 'Para detectar progresión sistémica',
            say: 'Se controla a diario las primeras cuarenta y ocho a setenta y dos horas, para detectar si evoluciona a la forma sistémica. Muchos centros indican un corticoide sistémico en las primeras veinticuatro a cuarenta y ocho horas.' },
        ] },
        { title: 'Lo que no', tag: 'Errores clásicos', kind: 'alert', items: [
          { t: 'No escisión quirúrgica precoz', d: 'Empeora la lesión',
            say: 'Y lo que no se hace: no se opera de entrada. La escisión quirúrgica precoz empeora la lesión.' },
          { t: 'Debridar tarde: 2-4 semanas', d: 'Cuando la escara está demarcada',
            say: 'La escara se debrida tardíamente, a las dos a cuatro semanas, cuando ya está demarcada, y la úlcera se maneja como una herida crónica, con eventual injerto. El antibiótico solo se usa si hay infección secundaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Forma cutáneo-visceral: hospitalizar',
      cards: [
        { title: 'Medidas', tag: 'Unidad de monitoreo', kind: 'pharma', items: [
          { t: 'Hidratación endovenosa forzada', d: 'Proteger el riñón, mantener la diuresis',
            say: 'La forma cutáneo-visceral se hospitaliza en una unidad de monitoreo. Se hidrata por vía endovenosa de forma forzada, para proteger el riñón y mantener la diuresis.' },
          { t: 'Corticoide endovenoso precoz', d: 'Transfundir si hay anemia grave',
            say: 'Se indica corticoide endovenoso precoz, se transfunde si hay anemia grave, se corrige la coagulopatía y se dializa si hay falla renal.' },
        ] },
        { title: 'Suero antiloxosceles', tag: 'Tiene ventana', kind: 'key', items: [
          { t: 'Primeras 24-48 horas', d: 'Por indicación del toxicólogo',
            say: 'El suero antiloxosceles es un antiveneno de producción nacional. Se usa en las primeras veinticuatro a cuarenta y ocho horas, porque su eficacia disminuye con el tiempo, y por indicación del toxicólogo o del especialista.' },
          { t: 'CITUC: consulta las 24 horas', d: 'Buen pronóstico si es precoz',
            say: 'El Centro de Información Toxicológica de la Universidad Católica asesora las veinticuatro horas. Y el pronóstico es bueno si se reconoce y se trata a tiempo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención',
      title: 'Higiene de la vivienda',
      cards: [
        { title: 'Ordenar y limpiar', tag: 'Cada semana', kind: 'key', items: [
          { t: 'Aspirar rincones, zócalos, detrás de muebles', d: 'Retirar telas y ootecas; cerrar la bolsa',
            say: 'Como la araña vive en la casa, la prevención es doméstica. Se ordena y se aspira cada semana los rincones, los zócalos, detrás de muebles y cuadros, bajo las camas y dentro de closets y cajones, retirando telas y sacos de huevos, y cerrando la bolsa de la aspiradora.' },
          { t: 'Sellar grietas, evitar acumular cosas', d: 'Muros, zócalos, marcos; leña, cartones, escombros',
            say: 'Se sellan las grietas en muros, zócalos y marcos de puertas y ventanas, y se evita acumular escombros, leña, cartones y papeles.' },
        ] },
        { title: 'Dormir y vestirse', tag: 'Donde ocurre la mordedura', kind: 'alert', items: [
          { t: 'Cama a 20 cm del muro', d: 'Ropa de cama que no cuelgue al piso',
            say: 'Se separa la cama de la pared, al menos veinte centímetros, sin que la ropa de cama cuelgue hasta el piso, y no se guardan cajas ni ropa bajo ella.' },
          { t: 'Sacudir ropa, zapatos, toallas, sábanas', d: 'Guardar en bolsas cerradas',
            say: 'Se sacude y se revisa la ropa, los zapatos, las toallas y las sábanas antes de usarlos, y se guardan en bolsas cerradas.' },
          { t: 'No tocarla con la mano', d: 'Capturarla con un vaso; consultar de inmediato',
            say: 'Si aparece una araña, no se manipula con la mano: se captura con un vaso y se lleva para su identificación. La fumigación solo complementa estas medidas. Y se educa a la familia a consultar de inmediato ante una mordedura con dolor o cambio de color de la piel.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'De la mordedura a la escara',
      images: [
        { src: 'animaciones/derma-18/A1_loxoscelismo_necrosis.mp4', label: 'Trombosis microvascular y necrosis cutánea', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'El veneno ocluye los vasos y la piel se necrosa',
          say: 'Mira la piel. La araña inocula el veneno, y la esfingomielinasa daña el endotelio de los vasos de la dermis. Se forman trombos y la piel se vuelve isquémica, pálida y luego violácea. A las horas está la placa livedoide, y en días la escara negra, que se demarca y se desprende. Y si la toxina pasa a la sangre, aparece la hemólisis. Por eso se controla a las cuarenta y ocho horas, y no se opera de entrada.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la mordedura sospechosa a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Loxoscelismo cutáneo frente a cutáneo-visceral',
      head: ['Parámetro', 'Cutáneo (80-90%)', 'Cutáneo-visceral (1-15%)'],
      rows: [
        { cells: ['Inicio', 'Dolor y eritema a las 2-8 horas', 'Síntomas sistémicos a las 6-72 horas'],
          say: 'El inicio: en la forma cutánea, dolor y eritema a las dos a ocho horas; en la cutáneo-visceral, síntomas sistémicos en las primeras seis a setenta y dos horas.' },
        { cells: ['Lesión', 'Placa livedoide, ampolla hemorrágica y escara', 'Igual, con o sin lesión llamativa'],
          say: 'La lesión es la misma, con placa livedoide, ampolla hemorrágica y escara. Ojo: en la forma sistémica la lesión de la piel puede no ser llamativa.' },
        { cells: ['Clínica sistémica', 'Ausente', 'Fiebre, exantema, ictericia, orina oscura'],
          say: 'La clínica sistémica, ausente en la cutánea, es fiebre, exantema, ictericia y orina oscura en la cutáneo-visceral.' },
        { cells: ['Laboratorio', 'Normal', 'Anemia hemolítica, LDH alta, plaquetas bajas, creatinina alta'],
          say: 'El laboratorio es normal en la cutánea. En la cutáneo-visceral hay anemia hemolítica, LDH elevada, trombocitopenia, coagulopatía y creatinina elevada.' },
        { cells: ['Manejo', 'Reposo, frío, analgesia, curaciones; debridar tarde', 'Hospitalizar: hidratación, corticoide EV, suero, diálisis'],
          say: 'El manejo de la cutánea es reposo, frío, analgesia y curaciones, y debridar tarde. La cutáneo-visceral se hospitaliza, con hidratación, corticoide endovenoso, suero antiloxosceles en las primeras veinticuatro a cuarenta y ocho horas, y diálisis si hay falla renal.' },
        { cells: ['Pronóstico', 'Úlcera de cicatrización lenta', 'Riesgo vital, mayor en niños'],
          say: 'El pronóstico: úlcera de cicatrización lenta en la cutánea, y riesgo vital, mayor en niños, en la sistémica.' },
        { cells: ['Cirugía precoz o calor local', 'Empeora la lesión', 'Error: escisión o calor'],
          say: 'Y las dos trampas: la escisión quirúrgica precoz y el calor local empeoran la lesión. Es frío, y debridar tarde.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niño de 6 años es llevado a urgencia por fiebre de 38,5 °C, decaimiento y orina de color oscuro, 36 horas después de despertar con dolor en el muslo derecho. En esa zona se observa una placa violácea de bordes geográficos con ampolla hemorrágica y áreas pálidas. Los exámenes muestran hemoglobina de 7,5 g/dL, bilirrubina indirecta elevada, LDH elevada, plaquetas de 60.000 por microlitro y creatinina de 1,6 mg/dL; la orina tiene hemoglobina sin glóbulos rojos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalizar con hidratación endovenosa forzada, corticoide endovenoso, soporte transfusional y consulta toxicológica para suero antiloxosceles' },
        { letter: 'B', text: 'Escisión quirúrgica inmediata de la lesión del muslo' },
        { letter: 'C', text: 'Manejo ambulatorio con frío local y control en una semana' },
        { letter: 'D', text: 'Calor local y antibióticos orales' },
        { letter: 'E', text: 'Restringir líquidos por la falla renal' },
      ],
      correct: 'A',
      explanation: 'Es un loxoscelismo cutáneo-visceral por Loxosceles laeta: placa livedoide con ampolla hemorrágica en el muslo y, dentro de las primeras 72 horas, hemólisis intravascular (anemia, LDH elevada, hemoglobinuria), coagulación intravascular (trombocitopenia) y daño renal. Requiere hospitalización con hidratación endovenosa forzada, corticoide endovenoso, monitoreo y soporte transfusional y renal; el suero antiloxosceles se indica en las primeras 24 a 48 horas con asesoría del toxicólogo. No se hace cirugía precoz de la lesión cutánea.',
      say: {
        stem: 'Un niño de seis años llega a urgencia con fiebre, decaimiento y orina oscura, treinta y seis horas después de despertar con dolor en el muslo derecho. En el muslo hay una placa violácea de bordes geográficos, con una ampolla hemorrágica y áreas pálidas. La hemoglobina es de siete coma cinco, con bilirrubina indirecta y LDH elevadas, plaquetas de sesenta mil y creatinina de uno coma seis. La orina tiene hemoglobina, sin glóbulos rojos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hospitalizar con hidratación forzada, corticoide endovenoso, soporte transfusional y consulta toxicológica; escisión quirúrgica inmediata; manejo ambulatorio con frío; calor local y antibióticos; o restringir líquidos. Piénsalo.',
        answer: 'Es la A. Placa livedoide en el muslo y, dentro de las setenta y dos horas, anemia hemolítica, plaquetas bajas y falla renal: es un loxoscelismo cutáneo-visceral. Se hospitaliza con hidratación endovenosa forzada, corticoide endovenoso, soporte, y el suero antiloxosceles en las primeras veinticuatro a cuarenta y ocho horas. La B tienta porque la piel se ve mal, pero la cirugía precoz empeora la lesión. Y la E es el error contrario: se hidrata, para proteger el riñón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 89',
      stem: 'Una paciente consulta por aparición de una lesión en el antebrazo, que inicialmente era dolorosa y eritematosa, pero que luego de 6 horas se volvió más oscura y más grande. Al examen físico, se aprecia una placa livedoide típica en el antebrazo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Loxoscelismo cutáneo' },
        { letter: 'B', text: 'Necrosis grasa' },
        { letter: 'C', text: 'Ectima' },
        { letter: 'D', text: 'Pioderma gangrenoso' },
        { letter: 'E', text: 'Fasceítis necrotizante' },
      ],
      correct: 'A',
      explanation: 'Una lesión que inicia con dolor y eritema y en pocas horas se vuelve violácea, con zonas pálidas isquémicas y bordes geográficos (placa livedoide), es la presentación clásica del loxoscelismo cutáneo. El ectima aparece en días, el pioderma gangrenoso es una úlcera de borde socavado en un paciente con enfermedad de base y la fasceítis necrotizante cursa con toxicidad sistémica marcada y dolor desproporcionado.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Una paciente consulta por una lesión en el antebrazo, que era dolorosa y eritematosa y que a las seis horas se volvió más oscura y más grande. Al examen se aprecia una placa livedoide típica.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: loxoscelismo cutáneo; necrosis grasa; ectima; pioderma gangrenoso; o fasceítis necrotizante. Piénsalo.',
        answer: 'Es la A. Dolor y eritema que en pocas horas se vuelven violáceos, con zonas pálidas y bordes geográficos, es la placa livedoide del loxoscelismo cutáneo. La E tienta por la necrosis, pero la fasceítis necrotizante da toxicidad sistémica y dolor desproporcionado. El ectima aparece en días, y el pioderma gangrenoso es una úlcera de borde socavado en un paciente con enfermedad de base.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 149',
      stem: 'Paciente con dolor en zona escapular izquierda y lesión ulcerada con halo violáceo.',
      question: '¿Cuál es el agente causal más probable?',
      options: [
        { letter: 'A', text: 'Latrodectus mactans (araña del trigo)' },
        { letter: 'B', text: 'Paederus irritans (bicho candela)' },
        { letter: 'C', text: 'Miasis cutánea' },
        { letter: 'D', text: 'Loxosceles laeta (araña de rincón)' },
        { letter: 'E', text: 'Picadura de abeja con reacción local' },
      ],
      correct: 'D',
      explanation: 'Una lesión dolorosa, ulcerada o necrótica con halo violáceo en el tronco, en una persona que muerde al vestirse o dormir, corresponde a una mordedura de Loxosceles laeta (araña de rincón). Latrodectus produce un cuadro neurotóxico con dolor muscular y contracturas sin necrosis cutánea; Paederus causa dermatitis lineal ampollar y la miasis, un nódulo con larva.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente tiene dolor en la zona escapular izquierda y una lesión ulcerada con un halo violáceo.',
        question: '¿Cuál es el agente causal más probable?',
        options: 'Las opciones: Latrodectus, la araña del trigo; Paederus, el bicho candela; miasis cutánea; Loxosceles laeta, la araña de rincón; o una picadura de abeja. Piénsalo.',
        answer: 'Es la D. Una lesión dolorosa y ulcerada con halo violáceo en el tronco, de alguien mordido al dormir o vestirse, es la araña de rincón. La A tienta por ser otra araña, pero Latrodectus da un cuadro neurotóxico, con dolor muscular y contracturas, y sin necrosis de la piel.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: loxoscelismo',
      cards: [
        { title: 'Reconocer', tag: 'La araña y la lesión', kind: 'key', items: [
          { t: 'Araña de rincón: dentro de casa, nocturna', d: 'Muerde al ser aplastada',
            say: 'Cerremos con las reglas de oro. La araña de rincón vive dentro de las casas, es nocturna y muerde cuando se la aplasta contra la piel, al dormir o al vestirse.' },
          { t: 'Placa livedoide → escara → úlcera lenta', d: 'Mordedura casi indolora',
            say: 'La mordedura es casi indolora, y a las seis a doce horas aparece la placa livedoide con ampolla hemorrágica, que evoluciona a escara negra y a una úlcera de cicatrización lenta.' },
        ] },
        { title: 'Conducta', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Cutánea: frío, reposo, sin cirugía precoz', d: 'Debridar la escara a las 2-4 semanas',
            say: 'La forma cutánea se maneja con reposo, frío local, elevación, analgesia, aseo y profilaxis antitetánica. No se hace escisión precoz: la escara se debrida a las dos a cuatro semanas.' },
          { t: 'Cutáneo-visceral: hospitalizar', d: 'Hidratación, corticoide EV; suero en 24-48 h',
            say: 'La forma cutáneo-visceral, con fiebre, hemólisis, orina oscura y falla renal en las primeras setenta y dos horas, se hospitaliza con hidratación y corticoide endovenoso. El suero antiloxosceles solo en las primeras veinticuatro a cuarenta y ocho horas, con el toxicólogo.' },
          { t: 'Prevención doméstica', d: 'Aspirar rincones, cama separada, revisar ropa y calzado',
            say: 'Y la prevención es doméstica: aspirar los rincones, separar la cama del muro, revisar la ropa y el calzado antes de usarlos, y sellar grietas. Si te llevas una sola idea de hoy: una placa livedoide en horas es una araña de rincón, no se opera de entrada, y siempre buscas la hemólisis. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Mordedura de araña de rincón: conducta',
    root: N('start', 'Lesión dolorosa con placa livedoide', 'Antecedente de mordedura al dormir o vestirse',
      'Un paciente con una lesión dolorosa, con una placa violácea y pálida de bordes geográficos, tras una mordedura al dormir o al vestirse. Sospechas loxoscelismo. Y la primera pregunta es: ¿hay compromiso sistémico en las primeras setenta y dos horas?',
      ['Sin síntomas sistémicos', N('do', 'Loxoscelismo cutáneo', 'Reposo, elevación, frío; analgesia; antitetánica',
        'Sin síntomas sistémicos, es un loxoscelismo cutáneo. Reposo con la zona elevada, frío local, analgesia, profilaxis antitetánica, aseo y curaciones. No se opera de entrada, y el antibiótico solo si hay infección secundaria.',
        ['Control en 48-72 horas', N('q', 'Laboratorio y control', 'Hemograma, LDH, bilirrubina, creatinina, orina',
          'Aunque no haya síntomas, controlas en las primeras cuarenta y ocho a setenta y dos horas y pides hemograma, LDH, bilirrubina, creatinina y orina, porque la forma sistémica puede aparecer, sobre todo en niños.',
          ['Todo normal', N('ok', 'Seguir como cutánea', 'Debridar la escara a las 2-4 semanas',
            'Si todo es normal, sigues como forma cutánea, y la escara se debrida tardíamente, a las dos a cuatro semanas, cuando está demarcada.')],
        )],
      )],
      ['Fiebre, ictericia, orina oscura', N('alert', 'Cutáneo-visceral', 'Hemólisis, CID, falla renal',
        'Con fiebre, exantema, ictericia, orina oscura, anemia, plaquetas bajas o creatinina elevada, es la forma cutáneo-visceral.',
        ['Hospitalizar', N('refer', 'Monitoreo, hidratación y corticoide EV', 'Suero antiloxosceles < 48 h; transfusión; diálisis',
          'Hospitalizas en una unidad de monitoreo, con hidratación endovenosa forzada, corticoide endovenoso, transfusión si hay anemia grave, corrección de la coagulopatía y diálisis si hay falla renal. El suero antiloxosceles, en las primeras veinticuatro a cuarenta y ocho horas, con el toxicólogo del CITUC.')],
      )],
    ),
  },
};
