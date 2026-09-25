// Clase 8.19 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'CRAB, pico monoclonal y la gammapatía que solo se observa',
      say: 'Bienvenidos. Hoy vemos el mieloma múltiple, la neoplasia de la célula plasmática. Es un tema muy preguntado, y casi siempre de la misma forma: un adulto mayor con dolor óseo, anemia, falla renal y una VHS altísima. Si en la clase de linfomas la clave era sacar el ganglio entero, hoy la clave es una palabra de cuatro letras: CRAB. Y con ella vas a separar el mieloma de su pariente benigno, la gammapatía monoclonal de significado incierto.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Una célula plasmática que fabrica una sola proteína',
      nodes: [
        { id: 'clo', col: 0, row: 2, k: 'cause', t: 'Clon de células plasmáticas', s: 'En la médula ósea' },
        { id: 'pm', col: 1, row: 0, k: 'mech', t: 'Proteína monoclonal', s: 'IgG 55% · IgA 20% · cadenas ligeras 20%' },
        { id: 'ost', col: 1, row: 1, k: 'mech', t: 'Activa osteoclastos', s: 'RANK-ligando e IL-6' },
        { id: 'des', col: 1, row: 3, k: 'mech', t: 'Desplaza la médula', s: 'Suprime la eritropoyesis' },
        { id: 'ren', col: 3, row: 0, k: 'effect', t: 'R: riñón de mieloma', s: 'Cilindros de cadenas ligeras' },
        { id: 'cal', col: 3, row: 1, k: 'effect', t: 'C y B: calcio y hueso', s: 'Hipercalcemia y lesiones líticas' },
        { id: 'ane', col: 3, row: 3, k: 'effect', t: 'A: anemia', s: 'Normocítica normocrómica' },
      ],
      edges: [
        { from: 'clo', to: 'pm' }, { from: 'clo', to: 'ost' }, { from: 'clo', to: 'des' },
        { from: 'pm', to: 'ren', label: 'precipitan' }, { from: 'ost', to: 'cal' }, { from: 'des', to: 'ane' },
      ],
      steps: [
        { show: ['clo'], note: 'Adulto mayor: mediana de 65 a 70 años',
          say: 'Partamos por el mecanismo. En el mieloma, un clon de células plasmáticas de la médula ósea se vuelve maligno. Es una enfermedad del adulto mayor: la edad mediana al diagnóstico es de sesenta y cinco a setenta años. Y todo lo que vas a ver en la clínica sale de tres cosas que hace este clon.' },
        { show: ['pm'], note: 'El componente M',
          say: 'Lo primero: fabrica una sola inmunoglobulina, siempre igual, que llamamos componente M. En el cincuenta y cinco por ciento es una IgG, en el veinte por ciento una IgA, y en otro veinte por ciento solo cadenas ligeras kappa o lambda, la clásica proteína de Bence-Jones.' },
        { show: ['ren'], note: 'Las cadenas ligeras tapan los túbulos',
          say: 'Esas cadenas ligeras se filtran por el riñón, precipitan con la proteína de Tamm-Horsfall y forman cilindros que tapan los túbulos distales y colectores. Eso es el riñón de mieloma, la R del CRAB.' },
        { show: ['ost', 'cal'], note: 'El hueso se destruye desde adentro',
          say: 'Lo segundo: las células plasmáticas liberan RANK-ligando e interleucina seis, que encienden a los osteoclastos. El hueso se destruye, aparecen lesiones líticas y fracturas, y el calcio del hueso pasa a la sangre. Ahí tienes la C de hipercalcemia y la B de hueso, por bone en inglés.' },
        { show: ['des', 'ane'], note: 'La médula ocupada no fabrica glóbulos rojos',
          say: 'Y lo tercero: el clon ocupa la médula y suprime la producción de glóbulos rojos. Eso da la A, una anemia normocítica normocrómica. Fíjate que el mecanismo ya te entregó las cuatro letras.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios CRAB',
      title: 'CRAB: el daño que obliga a tratar',
      cards: [
        { title: 'C y R', tag: 'Calcio y riñón', kind: 'criteria', items: [
          { t: 'C: calcio > 11 mg/dL', d: 'O más de 1 sobre el límite normal',
            say: 'Veamos los cortes, porque se preguntan con número. C, hipercalcemia: calcio sérico sobre once miligramos por decilitro, o más de uno sobre el límite superior normal.' },
          { t: 'R: creatinina > 2 mg/dL', d: 'O clearance < 40 mL/min',
            say: 'R, insuficiencia renal: creatinina sobre dos, o clearance bajo cuarenta mililitros por minuto.' },
        ] },
        { title: 'A y B', tag: 'Sangre y hueso', kind: 'criteria', items: [
          { t: 'A: Hb < 10 g/dL', d: 'O más de 2 bajo el límite normal',
            say: 'A, anemia: hemoglobina bajo diez, o más de dos gramos bajo el límite normal.' },
          { t: 'B: lesiones líticas "en sacabocado"', d: 'Cráneo, pelvis, columna, fémur · fracturas',
            say: 'Y B, lesiones óseas: una o más lesiones líticas en sacabocado en la radiografía de cráneo, pelvis, columna o fémur, o fracturas patológicas. Son agujeros redondos, de bordes nítidos, sin esclerosis alrededor.' },
        ] },
        { title: 'Para qué sirve', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Un solo criterio = daño de órgano', d: 'Exige tratamiento inmediato',
            say: 'Y lo más importante: el CRAB no es solo para sospechar. Es la definición de daño de órgano blanco. Basta un criterio para que el mieloma sea activo y haya que tratar de inmediato. Si no hay ninguno, estás frente a otra cosa, y lo vemos enseguida.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Laboratorio',
      title: 'De la VHS altísima al pico monoclonal',
      nodes: [
        { id: 'vhs', col: 0, row: 1, k: 'start', t: 'VHS > 100 mm/h', s: 'Rouleaux en el frotis' },
        { id: 'efp', col: 1, row: 1, k: 'q', t: 'Electroforesis de proteínas', s: '¿Pico en la zona gamma?' },
        { id: 'pic', col: 2, row: 0, k: 'good', t: 'Pico monoclonal', s: 'Angosto, base estrecha' },
        { id: 'inm', col: 3, row: 0, k: 'good', t: 'Inmunofijación', s: 'Define cadena pesada y ligera' },
        { id: 'nor', col: 2, row: 2, k: 'trap', t: 'EFP normal', s: 'No descarta: cadenas ligeras' },
        { id: 'cll', col: 3, row: 2, k: 'refer', t: 'Cadenas ligeras libres', s: 'Kappa/lambda + orina de 24 h' },
        { id: 'mo', col: 4, row: 1, k: 'refer', t: 'Médula ósea', s: 'Plasmocitos ≥ 10%' },
      ],
      edges: [
        { from: 'vhs', to: 'efp' }, { from: 'efp', to: 'pic', label: 'sí' }, { from: 'pic', to: 'inm' },
        { from: 'efp', to: 'nor', label: 'no' }, { from: 'nor', to: 'cll' },
        { from: 'inm', to: 'mo' }, { from: 'cll', to: 'mo' },
      ],
      steps: [
        { show: ['vhs'], note: 'Pilas de monedas',
          say: 'Veamos cómo se estudia. La pista de laboratorio más llamativa es una VHS altísima, típicamente sobre cien milímetros en la primera hora. ¿Por qué? Porque el exceso de inmunoglobulinas neutraliza las cargas negativas de los glóbulos rojos, y estos se apilan como monedas. Eso es el fenómeno de Rouleaux en el frotis.' },
        { show: ['efp', 'pic'], note: 'El componente M se ve como una espícula',
          say: 'El examen que confirma la paraproteína es la electroforesis de proteínas en suero. Muestra una espícula angosta, de base estrecha, en la zona gamma: el pico monoclonal. Un pico angosto es una sola proteína, de un solo clon.' },
        { show: ['inm'], note: 'Qué proteína exactamente',
          say: 'Luego, la inmunofijación en sangre y orina dice exactamente cuál es: qué cadena pesada y qué cadena ligera.' },
        { show: ['nor', 'cll'], note: 'El mieloma de cadenas ligeras',
          say: 'Y ojo con la trampa: una electroforesis normal no descarta el mieloma. Si la sospecha sigue, piensa en un mieloma de cadenas ligeras puras, que no hace un pico visible en la sangre. Se piden las cadenas ligeras libres en suero, con su índice kappa lambda, y una electroforesis de orina de veinticuatro horas.' },
        { show: ['mo'], note: 'El mielograma cuenta los plasmocitos',
          say: 'Finalmente, el estudio de la médula ósea cuenta las células plasmáticas. Diez por ciento o más, con un criterio CRAB, es mieloma activo. Ese cálculo es el que viene ahora.' },
      ],
    },

    {
      type: 'table',
      kicker: 'GMSI vs mieloma',
      title: 'Tres escalones del mismo clon',
      head: ['Criterio', 'GMSI', 'Mieloma quiescente', 'Mieloma activo'],
      rows: [
        { cells: ['Componente M sérico', '< 3 g/dL', '≥ 3 g/dL (u orina ≥ 500 mg/24 h)', 'Presente, habitualmente > 3 g/dL'],
          say: 'Esta es la diferencia que más se pregunta. El mismo clon puede estar en tres escalones. En la gammapatía monoclonal de significado incierto, la GMSI, el pico es menor de tres gramos por decilitro. En el mieloma quiescente es de tres o más, o quinientos miligramos o más en la orina de veinticuatro horas.' },
        { cells: ['Plasmocitos en médula', '< 10%', '10% a 59%', '≥ 10% (o plasmocitoma)'],
          say: 'En la médula, la GMSI tiene menos de diez por ciento de plasmocitos. El quiescente, entre diez y cincuenta y nueve. Y el activo, diez o más, o un plasmocitoma probado.' },
        { cells: ['Criterios CRAB', 'Ausentes', 'Ausentes', 'Al menos 1'],
          say: 'Pero lo que de verdad los separa es el CRAB. La GMSI y el quiescente no tienen ninguno: calcio, riñón, hemoglobina y huesos normales. El mieloma activo tiene al menos uno.' },
        { cells: ['Conducta', 'Observar anualmente', 'Control cada 3–6 meses', 'Tratamiento inmediato'],
          say: 'Y eso define la conducta. La GMSI no se trata: se controla una vez al año, porque progresa a mieloma en un uno por ciento por año. Es muy frecuente, más de tres a cinco por ciento de los mayores de setenta. El quiescente se controla cada tres a seis meses, sin quimioterapia. Y solo el activo se trata de inmediato.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento GES 72',
      title: 'Qué haces tú y qué hace el hematólogo',
      cards: [
        { title: 'Tu conducta inicial', tag: 'Sospecha y derivación', kind: 'alert', items: [
          { t: 'Hidratar con suero fisiológico', d: 'Trata el calcio y protege el riñón',
            say: 'Pasemos al tratamiento. Primero lo que haces tú. Si llega con hipercalcemia y falla renal, se hospitaliza y se hidrata en forma vigorosa con suero fisiológico endovenoso. Eso baja el calcio y protege el riñón.' },
          { t: 'Suspender los AINE', d: 'Derivar a hematología · GES 72',
            say: 'Se suspende cualquier antiinflamatorio no esteroidal, porque agrava el daño renal, y ojo, que estos pacientes suelen llegar tomándolos por su dolor de espalda. Luego, electroforesis e inmunofijación, y derivación urgente a hematología con garantía GES número setenta y dos, mieloma múltiple en personas de quince años y más.' },
        ] },
        { title: 'Inducción', tag: 'Esquema triple', kind: 'pharma', items: [
          { t: 'Bortezomib + lenalidomida + dexametasona', d: 'VRd; alternativa CyBorD',
            say: 'La inducción del mieloma activo es un esquema triple: un inhibidor del proteasoma, el bortezomib; un inmunomodulador, lenalidomida o talidomida; y dexametasona en dosis altas.' },
          { t: 'Trasplante autólogo', d: 'Menores de 65–70 años sin comorbilidad',
            say: 'En menores de sesenta y cinco a setenta años sin comorbilidades importantes, se consolida con un trasplante autólogo de progenitores hematopoyéticos, después de melfalán en dosis altas. Fíjate que es autólogo, a diferencia del alogénico que vimos en la leucemia mieloide aguda.' },
        ] },
        { title: 'Hueso', tag: 'Soporte', kind: 'pharma', items: [
          { t: 'Ácido zoledrónico o denosumab', d: 'Para las lesiones óseas',
            say: 'Y para las lesiones óseas se usan bifosfonatos endovenosos, como el ácido zoledrónico, o denosumab.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, partiendo del adulto mayor con dolor óseo y VHS alta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Adulto mayor: dolor óseo + anemia + falla renal + VHS > 100', 'Mieloma múltiple', 'Cáncer de próstata o renal metastásico'],
          say: 'Repasemos las trampas. Adulto mayor con dolor óseo, anemia, falla renal y VHS sobre cien: mieloma múltiple. No te vayas al cáncer de próstata o renal metastásico: la suma de anemia, riñón y hueso es CRAB.' },
        { cells: ['Pico M < 3 g/dL, plasmocitos < 10%, sin CRAB', 'GMSI: observar anualmente', 'Quimioterapia'],
          say: 'Pico menor de tres, plasmocitos bajo diez por ciento y sin CRAB: GMSI. Se observa una vez al año. Dar quimioterapia es el error.' },
        { cells: ['Pico M con 1 criterio CRAB', 'Mieloma activo: tratar ya', 'Esperar y controlar'],
          say: 'En cambio, con un solo criterio CRAB, el mieloma es activo y se trata de inmediato.' },
        { cells: ['Sospecha alta y EFP normal', 'Cadenas ligeras libres + orina 24 h', 'Descartar mieloma'],
          say: 'Sospecha alta con electroforesis normal: cadenas ligeras libres y orina de veinticuatro horas. Descartar el mieloma es el error.' },
        { cells: ['Mieloma con calcio alto y creatinina alta', 'Suero fisiológico EV + suspender AINE', 'Seguir con AINE para el dolor'],
          say: 'Y mieloma con hipercalcemia y falla renal: suero fisiológico endovenoso y suspender los antiinflamatorios. Mantenerlos para el dolor empeora el riñón.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años con dolor lumbar mecánico progresivo de 3 meses que no cede con paracetamol ni AINE, y astenia. Palidez y dolor a la palpación vertebral L2-L3, sin fiebre. Hb 8,9 g/dL, VCM 87 fL, VHS 125 mm/h, creatinina 2,6 mg/dL, calcio 11,8 mg/dL (VN 8,5–10,5). Frotis con marcado fenómeno de Rouleaux. Radiografía de cráneo: múltiples lesiones osteolíticas redondeadas, de bordes nítidos, sin esclerosis.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Control ambulatorio anual con electroforesis de proteínas' },
        { letter: 'B', text: 'Hospitalizar, hidratar con suero fisiológico EV, suspender AINE y derivar urgente a hematología' },
        { letter: 'C', text: 'Aumentar la dosis de AINE y solicitar resonancia de columna ambulatoria' },
        { letter: 'D', text: 'Solicitar antígeno prostático y cintigrafía ósea' },
        { letter: 'E', text: 'Iniciar hierro endovenoso por la anemia' },
      ],
      correct: 'B',
      explanation: 'Mieloma múltiple activo con los cuatro criterios CRAB: calcio 11,8, creatinina 2,6, Hb 8,9 y lesiones líticas en sacabocado. Se hospitaliza, se hidrata con suero fisiológico para tratar la hipercalcemia y proteger el riñón, se suspenden los AINE, se solicita electroforesis e inmunofijación y se deriva urgente a hematología (GES 72) para estudio medular e inducción.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y ocho años con tres meses de dolor lumbar que no cede con paracetamol ni antiinflamatorios, y astenia. Está pálido y le duele la columna lumbar a la palpación. Hemoglobina ocho coma nueve, VHS ciento veinticinco, creatinina dos coma seis y calcio once coma ocho. Hay Rouleaux en el frotis, y la radiografía de cráneo muestra múltiples lesiones líticas redondas, de bordes nítidos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones. Control anual con electroforesis. Hospitalizar, hidratar, suspender los antiinflamatorios y derivar urgente. Subir los antiinflamatorios y pedir una resonancia. Pedir antígeno prostático y cintigrafía. O iniciar hierro endovenoso. Piénsalo.',
        answer: 'La respuesta es la B. Este paciente tiene las cuatro letras: calcio sobre once, creatinina sobre dos, hemoglobina bajo diez y lesiones en sacabocado. Es un mieloma activo con hipercalcemia y falla renal, así que se hidrata con suero fisiológico, se suspenden los antiinflamatorios y se deriva urgente. El distractor tentador es el control anual: esa es la conducta de la GMSI, que por definición no tiene CRAB.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 145',
      stem: 'Un paciente de 65 años, con cuadro de compromiso del estado general de tres meses de evolución asociado a nicturia y en las últimas semanas dolor lumbar. Al examen físico destaca paciente enflaquecido, piel seca y mucosas pálidas. Se solicitan exámenes de orina que muestra proteinuria ++, urocultivo negativo, 2-3 glóbulos rojos por campo, creatinina 1,8 mg/dL y antígeno prostático de 5,5 (VN <4). Además se realiza ecografía renal que muestra dos quistes renales en lado derecho, sin otros hallazgos.',
      question: 'El diagnóstico más probable en este caso es:',
      options: [
        { letter: 'A', text: 'Mieloma múltiple' },
        { letter: 'B', text: 'Cáncer prostático metastásico' },
        { letter: 'C', text: 'Cáncer renal metastásico' },
        { letter: 'D', text: 'Espondilodiscitis crónica' },
        { letter: 'E', text: 'Espondilolistesis' },
      ],
      correct: 'A',
      explanation: 'Adulto mayor con compromiso del estado general, palidez (anemia), proteinuria con falla renal y dolor lumbar (hueso): mieloma múltiple. El antígeno prostático levemente elevado y los quistes renales simples son distractores.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de julio de dos mil trece. Hombre de sesenta y cinco años con tres meses de compromiso del estado general, nicturia y, en las últimas semanas, dolor lumbar. Está enflaquecido y pálido. Tiene proteinuria, creatinina uno coma ocho, un antígeno prostático de cinco coma cinco, y dos quistes renales simples en la ecografía.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: mieloma múltiple, cáncer prostático metastásico, cáncer renal metastásico, espondilodiscitis crónica, o espondilolistesis. Piénsalo.',
        answer: 'Es la A, mieloma múltiple. Suma las letras: palidez por anemia, proteinuria con falla renal, y dolor óseo. El distractor más tentador es el cáncer de próstata, porque el antígeno está algo elevado y hay dolor lumbar. Pero eso no explica el riñón ni la proteinuria. Y los quistes renales simples no son un cáncer renal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2018 · Pregunta 37',
      stem: 'Un paciente de 64 años consulta por dolores óseos. Se realiza un hemograma que muestra hematocrito: 24%, con hemoglobina: 8 g/dl, VCM: 85 fl, plaquetas: 180.000 por mm3 y blancos: 5.800 por mm3, con VHS: 90 mm/h. En los otros exámenes, destaca hipogamaglobulinemia y en el análisis de proteínas séricas se objetiva elevación monoclonal de proteínas, en la zona Kappa.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Macroglobulinemia de Waldeström' },
        { letter: 'B', text: 'Gamapatía monoclonal incierta' },
        { letter: 'C', text: 'Mieloma múltiple' },
        { letter: 'D', text: 'Amiloidosis' },
        { letter: 'E', text: 'Enfermedad por cadenas pesadas' },
      ],
      correct: 'C',
      explanation: 'Dolor óseo, anemia (Hb 8), VHS elevada y proteína monoclonal de cadenas ligeras kappa: mieloma múltiple (de cadenas ligeras). No es una GMSI, porque hay daño de órgano (anemia bajo 10 y dolor óseo).',
      say: {
        stem: 'La segunda es del EUNACOM de julio de dos mil dieciocho. Hombre de sesenta y cuatro años con dolores óseos. Hemoglobina ocho, VCM normal, plaquetas y blancos normales, y VHS noventa. Tiene hipogammaglobulinemia, y en las proteínas séricas hay una elevación monoclonal en la zona kappa.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: macroglobulinemia de Waldenström, gammapatía monoclonal incierta, mieloma múltiple, amiloidosis, o enfermedad por cadenas pesadas. Piénsalo.',
        answer: 'Es la C, mieloma múltiple, en este caso de cadenas ligeras kappa. Por eso el resto de las inmunoglobulinas está bajo: el clon fabrica solo cadenas ligeras. El distractor más tentador es la gammapatía monoclonal incierta, porque también tiene un componente monoclonal. Pero la GMSI no tiene CRAB, y aquí hay anemia bajo diez y dolor óseo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 117',
      stem: 'Un hombre de 80 años, diabético, consulta por dolor intenso en la zona costal derecha, que aumenta con la palpación y movimientos. Al examen físico tiene dolor epicrítico al palpar la zona. En sus exámenes destaca hemograma con hematocrito: 27%, plaquetas: 103.000 por mm3, blancos: 5.000 por mm3, VHS: 90 mmHg. Además, trae creatininemia: 2,1 mg/dl, calcio: 10,8 mg/dl, proteínas: 9,1 g/dl y albúmina plasmática: 3,0 g/dl. La ecografía abdominal muestra riñones de tamaño normal.',
      question: '¿Cuál es el examen de elección para la confirmación diagnóstica?',
      options: [
        { letter: 'A', text: 'Beta2 microglobulina' },
        { letter: 'B', text: 'Resonancia magnética de columna' },
        { letter: 'C', text: 'Radiografía de parrilla costal' },
        { letter: 'D', text: 'Mielograma' },
        { letter: 'E', text: 'Biopsia renal' },
      ],
      correct: 'D',
      explanation: 'Dolor costal (probable fractura patológica), anemia, VHS alta, falla renal con riñones de tamaño normal y proteínas totales altas con albúmina baja (exceso de globulinas): mieloma múltiple. Se confirma en la médula ósea (mielograma) con 10% o más de plasmocitos.',
      say: {
        stem: 'La tercera es del EUNACOM de julio de dos mil diecinueve. Hombre de ochenta años con dolor costal intenso que aumenta al palparlo. Hematocrito veintisiete, VHS noventa, creatinina dos coma uno, calcio diez coma ocho, y proteínas totales de nueve coma uno con albúmina de solo tres. Los riñones son de tamaño normal.',
        question: '¿Cuál es el examen de elección para la confirmación diagnóstica?',
        options: 'Las opciones son: beta dos microglobulina, resonancia de columna, radiografía de parrilla costal, mielograma, o biopsia renal. Piénsalo.',
        answer: 'Es la D, el mielograma. Mira la pista escondida: proteínas totales altas con albúmina baja significa que sobran globulinas. Con anemia, falla renal y un dolor costal que sugiere una fractura, es un mieloma. Y se confirma en la médula, contando diez por ciento o más de plasmocitos. La radiografía costal es el distractor: mostraría la lesión, pero no confirma el mieloma.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 156',
      stem: 'Un paciente de 64 años, con antecedente de haber sido tratado por un mieloma, con buena respuesta, consulta ahora por cuadro de astenia, con constipación y aumento del volumen urinario, a lo que luego se le agrega desorientación. Al examen físico se aprecia soporoso, pálido. En sus exámenes presenta hematocrito 27%, con Hb: 9 g/dl, VHS: 93 mm/h, proteínas plasmáticas: 7,8 g/dl, albúmina: 3,7 g/dl, sodio: 140 mEq/L, potasio: 4,8 mEq/L, calcio: 14,3 mg/dl.',
      question: 'En este momento debe recibir:',
      options: [
        { letter: 'A', text: 'Calcitonina' },
        { letter: 'B', text: 'Solución salina al 0,9%' },
        { letter: 'C', text: 'Vitamina D' },
        { letter: 'D', text: 'Bifosfonatos' },
        { letter: 'E', text: 'Corticoides' },
      ],
      correct: 'B',
      explanation: 'Hipercalcemia grave (14,3 mg/dL) sintomática en un paciente con mieloma: constipación, poliuria y compromiso de conciencia. Lo primero es hidratar en forma vigorosa con solución salina al 0,9% endovenosa; los bifosfonatos son parte del manejo óseo, pero no son el primer paso.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil dieciséis. Paciente de sesenta y cuatro años, tratado antes por un mieloma, que ahora consulta por astenia, constipación y orina abundante, y luego se desorienta. Está soporoso y pálido, y el calcio es de catorce coma tres.',
        question: 'En este momento, ¿qué debe recibir?',
        options: 'Las opciones son: calcitonina, solución salina al cero coma nueve por ciento, vitamina D, bifosfonatos, o corticoides. Piénsalo.',
        answer: 'Es la B, suero fisiológico. Constipación, poliuria y compromiso de conciencia con calcio sobre catorce es una hipercalcemia grave, la C del CRAB. Y como vimos, lo primero es hidratar en forma vigorosa. El distractor tentador son los bifosfonatos, porque son parte del tratamiento del mieloma. Pero la pregunta dice en este momento, y lo primero es el volumen.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sospecha', tag: 'CRAB', kind: 'key', items: [
          { t: 'Calcio > 11 · creatinina > 2', d: 'Hb < 10 · lesiones en sacabocado',
            say: 'Cerremos con las reglas de oro. CRAB: calcio sobre once, creatinina sobre dos, hemoglobina bajo diez y lesiones líticas en sacabocado.' },
          { t: 'VHS > 100 con Rouleaux', d: 'Adulto mayor con dolor óseo',
            say: 'Un adulto mayor con dolor óseo, anemia y una VHS sobre cien, con Rouleaux, es un mieloma hasta demostrar lo contrario.' },
        ] },
        { title: 'Diagnóstico', tag: 'Pico y médula', kind: 'criteria', items: [
          { t: 'EFP: pico monoclonal en gamma', d: 'Si es normal: cadenas ligeras libres',
            say: 'La electroforesis muestra el pico monoclonal en la zona gamma. Si es normal y la sospecha sigue, se buscan las cadenas ligeras.' },
          { t: 'Médula: plasmocitos ≥ 10%', d: 'Confirma con al menos 1 CRAB',
            say: 'Y la médula ósea confirma, con diez por ciento o más de plasmocitos.' },
        ] },
        { title: 'Conducta', tag: 'CRAB decide', kind: 'alert', items: [
          { t: 'Sin CRAB: GMSI, observar', d: 'Con CRAB: tratar ya · GES 72',
            say: 'Si te llevas una sola idea de hoy: el pico monoclonal solo no basta, lo que decide es el CRAB. Sin CRAB, es una GMSI y se observa; con un solo criterio, es un mieloma activo y se trata de inmediato. En la próxima clase veremos las neoplasias mieloproliferativas y la mielodisplasia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Mieloma múltiple: del pico monoclonal a la conducta',
    root: N('start', 'Adulto mayor con dolor óseo', 'Anemia, VHS > 100, falla renal',
      'Adulto mayor con dolor óseo, anemia, VHS sobre cien o falla renal. Sospecha mieloma múltiple.',
      ['', N('q', '¿Pico monoclonal en la EFP?', 'Electroforesis de proteínas',
        'Pide una electroforesis de proteínas. ¿Aparece un pico monoclonal en la zona gamma?',
        ['NO', N('do', 'Cadenas ligeras libres', 'Suero + orina de 24 h',
          'Si no aparece y la sospecha sigue, no descartes: busca un mieloma de cadenas ligeras, con cadenas ligeras libres en suero y electroforesis de orina de veinticuatro horas.')],
        ['SÍ', N('q', '¿Algún criterio CRAB?', 'Calcio, riñón, anemia, hueso',
          'Si hay pico, la pregunta que decide todo: ¿hay algún criterio CRAB?',
          ['NO', N('ok', 'GMSI o quiescente: observar', 'GMSI anual · quiescente cada 3–6 meses',
            'Sin CRAB, es una GMSI si el pico es menor de tres y los plasmocitos menos de diez por ciento, y se controla una vez al año. Si los supera, es un mieloma quiescente, con controles cada tres a seis meses. Ninguno se trata con quimioterapia.')],
          ['SÍ', N('alert', 'Mieloma activo: derivar urgente', 'Hidratar, sin AINE · GES 72',
            'Con al menos un criterio CRAB, es un mieloma activo. Hidrata con suero fisiológico, suspende los antiinflamatorios, y deriva urgente a hematología con garantía GES, para confirmar en la médula e iniciar inducción con bortezomib, lenalidomida y dexametasona.')])])]),
  },
};
