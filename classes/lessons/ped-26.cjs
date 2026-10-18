// Clase 18.26 (Pediatría) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_pediatria_bloque_1.cjs (ped-26). Códigos (v3_topic_codes.json y v3_codemap.json):
// 2.01.1.134 Trisomía 21 y 2.01.1.132 Dismorfias (ver el codemap para los niveles de Dx, Tx y seguimiento).
// Preguntas reales (rq por códigos + class_questions.cjs --search "down|trisomía|cariograma|turner|marfan|translucencia"):
// Diciembre 2019 P162 (Down con canal auriculoventricular), Agosto 2021 P175 (Down con atresia duodenal), Julio 2016 P63 (Turner:
// cariotipo), Diciembre 2018 P76 (código de la clase, Marfán) y Julio 2025 P133 (trisomía 21: biopsia de vellosidades coriales).
// Enunciados y alternativas copiados tal cual del banco. No usadas: Julio 2017 P111 (también canal AV; casi igual a Diciembre 2019 P162),
// Agosto 2021 P75 (translucencia nucal en embarazo de 41 años: es de la clase de obstetricia y su explicación trata el aborto), Julio 2024
// P33 y Diciembre 2022 P116 (otras clases).
// Fotos (18-10-2026): Nelson 22.ª ed. Fig. 57.5 (hipotonía, facies, manchas de Brushfield, piel laxa de la nuca, espacio entre el primer y
// el segundo ortejo), Fig. 99.10 (linfedema de la mano en el Turner neonatal) y Fig. 743.1 (signos del pulgar y de la muñeca en el Marfán).
// Se descartaron las imágenes de Prader-Willi (niño sin ropa) y de la pared torácica del Turner por la norma de no mostrar niños desnudos.
// Sin foto de pliegue palmar único ni de cariograma del síndrome de Down en las fuentes locales.
// En movimiento: scenes/ped_nuevas.html (?v=down), gráfico solo código (los cromosomas son esquemas, no hay anatomía que animar).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-26',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dismorfias y síndrome de Down: reconocer el fenotipo, pedir el cariograma y buscar lo que se asocia',
      say: 'Bienvenido. Hoy vemos genética en la consulta pediátrica. Parte por un recién nacido que se ve distinto, y termina con el síndrome de Down, el más preguntado. El examen te pide tres cosas: reconocer el fenotipo, saber qué se busca en un recién nacido con trisomía veintiuno, y no olvidar un consejo genético sencillo. Partamos por cómo se piensa una dismorfia.',
    },

    {
      type: 'points',
      kicker: 'Dismorfias',
      title: 'Malformación mayor, anomalía menor',
      cards: [
        { title: 'Cómo se clasifican', tag: 'Por la consecuencia', kind: 'key', items: [
          { t: 'Mayor: compromete la función o exige cirugía', d: 'Cardiopatía, fisura palatina, tubo neural',
            say: 'Una malformación mayor compromete la función o requiere cirugía: una cardiopatía, una fisura palatina o un defecto del tubo neural.' },
          { t: 'Menor: sin consecuencia funcional', d: 'Epicanto, pliegue palmar único, clinodactilia',
            say: 'Una anomalía menor no tiene consecuencia funcional: epicanto, pliegue palmar único, clinodactilia u orejas displásicas.' },
          { t: '3 o más menores: buscar una mayor', d: 'Sube mucho la probabilidad',
            say: 'La regla útil es que tres o más anomalías menores aumentan mucho la probabilidad de que haya una malformación mayor, y entonces la buscas.' },
        ] },
        { title: 'Según el mecanismo', tag: 'Tres tipos', kind: 'criteria', items: [
          { t: 'Malformación: defecto intrínseco', d: 'El tejido se formó mal',
            say: 'Según el mecanismo, la malformación es un defecto intrínseco: el tejido se formó mal.' },
          { t: 'Disrupción: se destruyó un tejido normal', d: 'Por ejemplo, bridas amnióticas',
            say: 'La disrupción es la destrucción de un tejido que era normal, por ejemplo por bridas amnióticas.' },
          { t: 'Deformación: fuerzas mecánicas', d: 'Por ejemplo, oligohidramnios',
            say: 'Y la deformación es el efecto de fuerzas mecánicas sobre un tejido normal, como el oligohidramnios.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación',
      title: 'Historia, examen y estudio',
      cards: [
        { title: 'Qué preguntas y qué mides', tag: 'Antes del examen', kind: 'criteria', items: [
          { t: 'Historia del embarazo y teratógenos', d: 'Alcohol, anticonvulsivantes, isotretinoína, diabetes',
            say: 'Empiezas por la historia del embarazo: infecciones y teratógenos, como el alcohol, los anticonvulsivantes, la isotretinoína y la diabetes materna. Agregas la edad de los padres, la consanguinidad, los antecedentes familiares y los abortos.' },
          { t: 'Examen completo con medidas', d: 'Peso, talla y perímetro cefálico',
            say: 'Luego el examen completo con peso, talla y perímetro cefálico.' },
        ] },
        { title: 'Qué estudio pides', tag: 'De más simple a más fino', kind: 'key', items: [
          { t: 'Cariograma: numéricas y estructurales grandes', d: 'Trisomías, Turner, Klinefelter',
            say: 'El cariograma detecta alteraciones numéricas, como las trisomías, el Turner y el Klinefelter, y las estructurales grandes.' },
          { t: 'Microarray cromosómico: primera línea', d: 'Malformaciones múltiples o retraso sin causa',
            say: 'El microarray cromosómico es de primera línea en malformaciones múltiples o en retraso del desarrollo sin causa.' },
          { t: 'FISH para microdeleciones', d: 'Por ejemplo 22q11; luego paneles o exoma',
            say: 'El FISH se usa para las microdeleciones, como la del veintidós q once. Después vienen los paneles o el exoma. Y siempre derivas a genética clínica y ofreces consejo genético.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome de Down',
      title: 'Tres maneras de tener un 21 de más',
      cards: [
        { title: 'Genética', tag: 'Cuánto es cada una', kind: 'key', items: [
          { t: 'Trisomía 21 libre: 95%', d: 'No disyunción meiótica; sube con la edad materna',
            say: 'Cerca del noventa y cinco por ciento es una trisomía veintiuno libre, por no disyunción en la meiosis. El riesgo sube con la edad de la madre: uno en trescientos cincuenta a los treinta y cinco años, y uno en cien a los cuarenta.' },
          { t: 'Translocación robertsoniana: 3-4%', d: 'Habitualmente 14;21',
            say: 'La translocación robertsoniana, habitualmente entre los cromosomas catorce y veintiuno, es el tres a cuatro por ciento. Y el mosaicismo, uno a dos por ciento.' },
        ] },
        { title: 'Consejo genético', tag: 'Qué se pregunta', kind: 'alert', items: [
          { t: 'Translocación: cariograma de ambos padres', d: 'Puede venir de un portador',
            say: 'La translocación puede heredarse de un padre portador. Por eso, si el cariograma del niño la muestra, pides el cariograma de ambos padres.' },
          { t: 'Recurrencia: 10-15% madre, 2-5% padre', d: '1% en la trisomía libre',
            say: 'El riesgo de recurrencia es de diez a quince por ciento si la portadora es la madre, dos a cinco por ciento si es el padre, y alrededor de uno por ciento en la trisomía libre.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Las tres formas del síndrome de Down',
      images: [
        { src: 'animaciones/ped-26/A1_tres_formas_down.mp4', label: 'Trisomía libre, translocación y mosaicismo', credit: 'Animación propia · esquema de cromosomas' },
      ],
      steps: [
        { note: 'Material extra del cromosoma 21',
          say: 'Mira las tres formas. En la trisomía libre hay tres cromosomas veintiuno sueltos: es la gran mayoría, y se relaciona con la edad de la madre. En la translocación, uno de esos veintiuno está pegado al catorce, y los padres pueden ser portadores sin tener síntomas: por eso se estudia a ambos. En el mosaicismo, solo parte de las células tiene el cromosoma de más, y el fenotipo suele ser más leve.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Antes y después del nacimiento',
      cards: [
        { title: 'Prenatal', tag: 'Tamizaje y confirmación', kind: 'criteria', items: [
          { t: 'Translucencia nucal, PAPP-A baja, β-hCG alta', d: 'Primer trimestre',
            say: 'En el tamizaje del primer trimestre, la translucencia nucal está aumentada, la PAPP-A baja y la gonadotrofina coriónica libre alta. También se puede estudiar el ADN fetal libre en sangre materna.' },
          { t: 'Confirmar: vellosidades o amniocentesis', d: 'El cariograma fetal',
            say: 'Para confirmar, se necesita el cariograma fetal: biopsia de vellosidades coriales o amniocentesis.' },
        ] },
        { title: 'Posnatal', tag: 'Se sospecha y se confirma', kind: 'key', items: [
          { t: 'Se sospecha con la clínica', d: 'Hipotonía y rasgos faciales',
            say: 'Después del nacimiento, el diagnóstico se sospecha por la clínica, y se confirma con el cariograma.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fenotipo',
      title: 'La cara del recién nacido',
      cards: [
        { title: 'Rasgos faciales', tag: 'Qué mirar', kind: 'key', items: [
          { t: 'Fisuras oblicuas, epicanto, puente plano', d: 'Lengua protruyente, orejas pequeñas',
            say: 'Mira esta cara de un recién nacido con síndrome de Down. Las fisuras palpebrales suben hacia afuera, hay epicanto y un puente nasal plano, y a menudo la lengua protruye y las orejas son pequeñas.',
            photo: { src: 'biblioteca/15_pediatria/ped-26/06_sindrome-down-facies__nelson_p519.jpg', label: 'Facies típica', at: 'Mira esta cara', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 57.5E' } },
          { t: 'Manchas de Brushfield', d: 'Puntos claros en el borde del iris',
            say: 'Si te acercas al ojo, puedes ver las manchas de Brushfield: puntos claros en el borde del iris.',
            photo: { src: 'biblioteca/15_pediatria/ped-26/07_manchas-de-brushfield__nelson_p519.jpg', label: 'Manchas de Brushfield', at: 'las manchas de Brushfield', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 57.5A' } },
          { t: 'Cuello corto, occipucio plano', d: 'Piel laxa en la nuca',
            say: 'Y en el cuello, mira la piel laxa de la nuca, junto a un cuello corto, una braquicefalia y un occipucio plano.',
            photo: { src: 'biblioteca/15_pediatria/ped-26/08_piel-laxa-nuca-sindrome-down__nelson_p519.jpg', label: 'Piel laxa de la nuca', at: 'mira la piel laxa', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 57.5B' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fenotipo',
      title: 'El cuerpo: tono, manos y pies',
      cards: [
        { title: 'Examen del cuerpo', tag: 'Qué buscar', kind: 'key', items: [
          { t: 'Hipotonía', d: 'El signo más constante del recién nacido',
            say: 'Lo primero es la hipotonía. Mira este recién nacido sostenido en suspensión ventral: la cabeza y las extremidades cuelgan, sin tono.',
            photo: { src: 'biblioteca/15_pediatria/ped-26/05_sindrome-down-hipotonia__nelson_p519.jpg', label: 'Hipotonía ventral', at: 'Mira este recién nacido', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 57.5D' } },
          { t: 'Pliegue palmar único, clinodactilia', d: 'Laxitud articular',
            say: 'En las manos buscas el pliegue palmar único y la clinodactilia del quinto dedo, y hay laxitud articular.' },
          { t: 'Espacio amplio entre 1.º y 2.º ortejo', d: 'El signo de la sandalia',
            say: 'Y en el pie, un espacio amplio entre el primer y el segundo ortejo, como en esta planta.',
            photo: { src: 'biblioteca/15_pediatria/ped-26/09_espacio-primer-segundo-ortejo__nelson_p519.jpg', label: 'Espacio 1.º y 2.º ortejo', at: 'como en esta planta', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 57.5C' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Comorbilidades',
      title: 'Lo que se busca en todo recién nacido',
      cards: [
        { title: 'Corazón y tubo digestivo', tag: 'Ecocardiograma a todos', kind: 'alert', items: [
          { t: 'Cardiopatía en ~50%: canal AV', d: 'CIV y ductus; puede ser silente',
            say: 'Cerca de la mitad tiene una cardiopatía congénita. La más característica es el canal auriculoventricular, seguido de la comunicación interventricular y el ductus. Puede ser asintomática al nacer y provocar hipertensión pulmonar precoz, por eso se pide ecocardiograma a todo recién nacido con la sospecha.' },
          { t: 'Atresia duodenal: doble burbuja', d: 'Hirschsprung; celiaquía',
            say: 'En el tubo digestivo, la atresia duodenal, con vómitos biliosos y el signo de la doble burbuja, la enfermedad de Hirschsprung y la celiaquía.' },
        ] },
        { title: 'Endocrino y sentidos', tag: 'Tamizajes programados', kind: 'criteria', items: [
          { t: 'Hipotiroidismo: TSH al nacer, 6 y 12 meses', d: 'Luego anual',
            say: 'El hipotiroidismo es frecuente: se mide la TSH al nacer, a los seis y doce meses, y después cada año.' },
          { t: 'Ojos y oídos', d: 'Cataratas, estrabismo, hipoacusia, otitis serosa',
            say: 'En los sentidos, cataratas congénitas, estrabismo y vicios de refracción, con control oftalmológico en el primer año, e hipoacusia con otitis serosa, con tamizaje auditivo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento',
      title: 'Sangre, columna y equipo',
      cards: [
        { title: 'Otras comorbilidades', tag: 'Qué vigilar', kind: 'criteria', items: [
          { t: 'Reacción leucemoide neonatal y leucemia', d: 'Linfoblástica y megacarioblástica',
            say: 'En la sangre hay una reacción leucemoide transitoria neonatal y mayor riesgo de leucemia aguda, linfoblástica y megacarioblástica.' },
          { t: 'Inestabilidad atlantoaxial', d: 'Si hay mielopatía; sin radiografía de rutina',
            say: 'Existe inestabilidad atlantoaxial, que se sospecha ante signos de mielopatía, pero no se pide radiografía de rutina. Hay apnea del sueño, luxación de cadera, obesidad, caries y Alzheimer de inicio precoz.' },
        ] },
        { title: 'Manejo', tag: 'Inicial / derivar', kind: 'key', items: [
          { t: 'Equipo multidisciplinario', d: 'Genética, cardiología, estimulación temprana',
            say: 'El manejo es de equipo: genética, cardiología, estimulación temprana, fonoaudiología y kinesiología, con las vacunas del programa más influenza, y curvas de crecimiento específicas.' },
          { t: 'Inclusión; esperanza de vida > 55-60 años', d: 'Apoyo a la familia',
            say: 'Se apoya a la familia y se favorece la inclusión escolar. La esperanza de vida supera los cincuenta y cinco a sesenta años.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otros síndromes',
      title: 'Turner y Klinefelter',
      cards: [
        { title: 'Turner (45,X)', tag: 'Niña con talla baja', kind: 'alert', items: [
          { t: 'Talla baja, cuello alado, linfedema', d: 'Coartación aórtica; amenorrea primaria',
            say: 'El Turner es una monosomía X. Piensa en él en toda niña con talla baja, cuello alado, tórax ancho, y linfedema al nacer, como esta mano hinchada de un recién nacido. Tiene coartación aórtica y una disgenesia gonadal que termina en amenorrea primaria.',
            photo: { src: 'biblioteca/15_pediatria/ped-26/10_linfedema-mano-turner__nelson_p995.jpg', label: 'Linfedema neonatal', at: 'como esta mano hinchada', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 99.10' } },
          { t: 'Cariograma, eco cardíaco y renal', d: '',
            say: 'Se confirma con el cariograma, y se estudia con ecocardiograma y ecografía renal.' },
        ] },
        { title: 'Klinefelter (47,XXY)', tag: 'Varón alto', kind: 'criteria', items: [
          { t: 'Varón alto, testículos pequeños', d: 'Ginecomastia e infertilidad',
            say: 'El Klinefelter es el varón alto con hipogonadismo, testículos pequeños, ginecomastia e infertilidad. Se confirma con el cariograma y se mide la testosterona.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Marfán',
      title: 'Talla alta, dedos largos y la aorta',
      cards: [
        { title: 'Fenotipo', tag: 'FBN1 · autosómico dominante', kind: 'alert', items: [
          { t: 'Talla alta, aracnodactilia, hiperlaxitud', d: 'Envergadura mayor que la talla; pectus; escoliosis',
            say: 'El síndrome de Marfán es autosómico dominante, por una mutación del gen de la fibrilina. Tiene talla alta, extremidades y dedos largos, hiperlaxitud, pectus y escoliosis. Mira este signo de la muñeca: el pulgar y el quinto dedo se superponen alrededor de la muñeca. Y este otro signo del pulgar: sobresale del borde de la mano cerrada.',
            photos: [
              { src: 'biblioteca/15_pediatria/ped-26/11_signo-de-la-muneca-marfan__nelson_p5613.jpg', label: 'Signo de la muñeca', at: 'Mira este signo de la muñeca', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 743.1' },
              { src: 'biblioteca/15_pediatria/ped-26/12_signo-del-pulgar-marfan__nelson_p5613.jpg', label: 'Signo del pulgar', at: 'Y este otro signo del pulgar', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 743.1' },
            ] },
          { t: 'Luxación del cristalino, raíz aórtica dilatada', d: 'Insuficiencia aórtica; disección; muerte súbita',
            say: 'Lo grave está en los ojos y el corazón: luxación del cristalino y dilatación de la raíz aórtica, con insuficiencia aórtica, riesgo de disección y muerte súbita.' },
        ] },
        { title: 'Manejo', tag: 'Criterios de Ghent', kind: 'key', items: [
          { t: 'Ecocardiograma y oftalmología', d: 'Criterios de Ghent',
            say: 'El diagnóstico se basa en los criterios de Ghent. Se pide ecocardiograma y evaluación oftalmológica.' },
          { t: 'Sin ejercicio isométrico intenso', d: 'Betabloqueador o losartán; estudiar familiares',
            say: 'Se restringe el ejercicio isométrico intenso, se indica un betabloqueador o losartán según la dilatación de la aorta, y se estudia a los familiares.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Síndromes: fenotipo clave y estudio',
      head: ['Síndrome', 'Alteración', 'Fenotipo y complicaciones', 'Estudio'],
      rows: [
        { cells: ['Down', 'Trisomía 21', 'Hipotonía, fisuras oblicuas · canal AV, atresia duodenal', 'Cariograma, ecocardiograma, TSH'],
          say: 'Para ordenarlo. Down: trisomía veintiuno, hipotonía y fisuras oblicuas, con canal auriculoventricular y atresia duodenal. Cariograma, ecocardiograma y TSH.' },
        { cells: ['Turner', '45,X', 'Talla baja, cuello alado · coartación, amenorrea', 'Cariograma, ecocardiograma, eco renal'],
          say: 'Turner: cuarenta y cinco X, talla baja y cuello alado, con coartación y amenorrea primaria.' },
        { cells: ['Klinefelter', '47,XXY', 'Varón alto, testículos pequeños · infertilidad', 'Cariograma, testosterona'],
          say: 'Klinefelter: cuarenta y siete XXY, varón alto con testículos pequeños e infertilidad.' },
        { cells: ['Marfán', 'FBN1 (AD)', 'Talla alta, aracnodactilia · dilatación aórtica', 'Ghent, ecocardiograma, oftalmología'],
          say: 'Marfán: mutación de la fibrilina, talla alta y aracnodactilia, con dilatación aórtica.' },
        { cells: ['Prader-Willi', 'Deleción 15q11-13 paterna', 'Hipotonía neonatal, luego hiperfagia y obesidad', 'Estudio de metilación'],
          say: 'Prader-Willi: deleción paterna del cromosoma quince, hipotonía neonatal y después hiperfagia y obesidad. Se estudia con metilación.' },
        { cells: ['Alcohólico fetal', 'Teratógeno', 'Microcefalia, fisuras cortas, filtrum liso', 'Clínico y antecedente materno'],
          say: 'Y el síndrome alcohólico fetal: microcefalia, fisuras palpebrales cortas, filtrum liso y labio superior delgado. El diagnóstico es clínico, con el antecedente materno. Otros que se reconocen por el fenotipo: Edwards y Patau, de mal pronóstico; neurofibromatosis, con manchas café con leche; Williams, con facies de elfo y estenosis aórtica supravalvular; y X frágil, con cara alargada y macroorquidismo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del recién nacido que se ve distinto a la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de término, hijo de una madre de 38 años, con hipotonía, fisuras palpebrales oblicuas hacia arriba, epicanto, lengua protruyente, occipucio plano y pliegue palmar único bilateral. A las 12 horas presenta vómitos biliosos; la radiografía de abdomen muestra el signo de la doble burbuja. No hay soplos, pero la saturación es 94%.',
      question: '¿Cuál es la conducta más adecuada, además del cariograma?',
      options: [
        { letter: 'A', text: 'Solicitar radiografía de columna cervical de rutina' },
        { letter: 'B', text: 'Resonancia magnética cerebral' },
        { letter: 'C', text: 'Tratar la atresia duodenal y solicitar ecocardiograma, porque la cardiopatía puede ser silente' },
        { letter: 'D', text: 'Observar al recién nacido: no hay soplos' },
        { letter: 'E', text: 'Solicitar densitometría ósea' },
      ],
      correct: 'C',
      explanation: 'El fenotipo corresponde a una trisomía 21, favorecida por la edad materna. El vómito bilioso con doble burbuja indica atresia duodenal, que se asocia a este síndrome y requiere cirugía. Se confirma con cariograma, y como la cardiopatía (canal auriculoventricular) puede ser silente, se solicita un ecocardiograma a todos estos recién nacidos. También se controlan TSH, audición y visión. Si el cariograma revela una translocación, se estudia a los padres para el consejo genético.',
      say: {
        stem: 'Un recién nacido de término, hijo de una madre de treinta y ocho años, tiene hipotonía, fisuras palpebrales oblicuas hacia arriba, epicanto, lengua protruyente, occipucio plano y pliegue palmar único bilateral. A las doce horas vomita bilis, y la radiografía de abdomen muestra el signo de la doble burbuja. No hay soplos, y la saturación es de noventa y cuatro por ciento.',
        question: '¿Cuál es la conducta más adecuada, además del cariograma?',
        options: 'Las opciones: radiografía de columna cervical; resonancia cerebral; tratar la atresia duodenal y pedir ecocardiograma; observar porque no hay soplos; o densitometría. Piénsalo.',
        answer: 'Es la C. Es una trisomía veintiuno, con atresia duodenal, que se opera. Y como el canal auriculoventricular puede ser silente, se pide ecocardiograma a todos, aunque no haya soplo. La D es la trampa: la ausencia de soplo no descarta la cardiopatía. La radiografía cervical no se pide de rutina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 162',
      stem: 'Una niña de 7 meses, con antecedente de síndrome de Down, ha tenido un mal incremento ponderal y aún no duplica su peso de nacimiento. Se cansa al alimentarse y ha presentado varias infecciones respiratorias. Al examen físico se palpa frémito en el precordio izquierdo y se ausculta un soplo holosistólico, ubicado en el mesocardio, con segundo ruido desdoblado.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Coartación aórtica' },
        { letter: 'B', text: 'Comunicación interauricular' },
        { letter: 'C', text: 'Canal auriculoventricular completo' },
        { letter: 'D', text: 'Comunicación interventricular' },
        { letter: 'E', text: 'Ductus arterioso persistente' },
      ],
      correct: 'C',
      explanation: 'Tanto por el antecedente de síndrome de Down como por la clínica, que mezcla una comunicación interventricular (soplo holosistólico) con una interauricular (segundo ruido desdoblado), se trata de un canal auriculoventricular clásico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Una niña de siete meses con síndrome de Down no ha duplicado su peso de nacimiento, se cansa al alimentarse y ha tenido varias infecciones respiratorias. Tiene frémito en el precordio izquierdo, un soplo holosistólico en el mesocardio y el segundo ruido desdoblado.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: coartación aórtica; comunicación interauricular; canal auriculoventricular completo; comunicación interventricular; o ductus arterioso persistente. Piénsalo.',
        answer: 'Es la C. En el síndrome de Down la cardiopatía característica es el canal auriculoventricular. Aquí se mezclan un soplo holosistólico, de la comunicación interventricular, con un segundo ruido desdoblado, de la interauricular. La D tienta porque el soplo holosistólico es de la interventricular, pero el antecedente de Down y el desdoblamiento apuntan al canal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 175',
      stem: 'Un niño de 48 horas de vida, con antecedente de Síndrome de Down, presenta vómitos alimentarios explosivos, asociados a irritabilidad y decaimiento. Al examen abdominal se palpa abdomen blando, doloroso, con distensión epigástrica, que desaparece después de vomitar.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Atresia esofágica' },
        { letter: 'B', text: 'Hiperplasia suprarrenal congénita' },
        { letter: 'C', text: 'Enterocolitis necrotizante' },
        { letter: 'D', text: 'Atresia duodenal' },
        { letter: 'E', text: 'Estenosis hipertrófica del píloro' },
      ],
      correct: 'D',
      explanation: 'Es una atresia duodenal clásica, tanto por el antecedente de síndrome de Down como por la clínica: vómitos precoces, dolor y distensión epigástrica que ceden con los vómitos. La enterocolitis suele tener distensión persistente y hemorragia, y la estenosis hipertrófica del píloro aparece después de las dos semanas de vida.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un niño de cuarenta y ocho horas de vida, con síndrome de Down, tiene vómitos alimentarios explosivos, irritabilidad y decaimiento. El abdomen es blando y doloroso, con distensión epigástrica que desaparece después de vomitar.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: atresia esofágica; hiperplasia suprarrenal congénita; enterocolitis necrotizante; atresia duodenal; o estenosis hipertrófica del píloro. Piénsalo.',
        answer: 'Es la D. Vómitos precoces con distensión epigástrica que cede al vomitar, en un niño con Down: atresia duodenal. La E tienta porque también da vómitos explosivos, pero aparece después de las dos semanas. La enterocolitis tiene distensión persistente y sangre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 63',
      stem: 'Una niña 14 años consulta por talla baja. Tiene IMC/edad: p65, Talla/edad: - 2 DS, cabello de implantación baja, cuello alado, mamas y vello púbico en Tanner 1. Trae radiografía de mano, con edad ósea de 11 años.',
      question: '¿Con que examen debe continuar el estudio?',
      options: [
        { letter: 'A', text: 'Hemograma' },
        { letter: 'B', text: 'Cariotipo' },
        { letter: 'C', text: 'Anticuerpos antitransglutaminasa' },
        { letter: 'D', text: 'LDH' },
        { letter: 'E', text: 'Hormona de crecimiento' },
      ],
      correct: 'B',
      explanation: 'La sospecha es un síndrome de Turner (talla baja, cuello alado, retraso puberal). La edad ósea es menor por el retraso puberal. Se estudia con cariograma (45,X).',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una niña de catorce años consulta por talla baja, menos dos desviaciones estándar, con implantación baja del cabello, cuello alado, y mamas y vello púbico en Tanner uno. Su edad ósea es de once años.',
        question: '¿Con qué examen debe continuar el estudio?',
        options: 'Las opciones: hemograma; cariotipo; anticuerpos antitransglutaminasa; LDH; u hormona de crecimiento. Piénsalo.',
        answer: 'Es la B. Talla baja, cuello alado, implantación baja del cabello y ausencia de pubertad a los catorce años son un síndrome de Turner, y se confirma con el cariotipo. La C tienta porque la celiaquía también da talla baja y retraso puberal, pero no explica el cuello alado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 76',
      stem: 'Un niño de 14 años, con antecedente de su padre, que murió de muerte súbita, presenta talla alta, sus dedos y extremidades son muy largos y algo desproporcionados. Además, presenta hiperlaxitud de las articulaciones y tiene un soplo diastólico cardíaco en la auscultación cardiopulmonar.',
      question: '¿Cuál es el síndrome más probable?',
      options: [
        { letter: 'A', text: 'Neurofibromatosis' },
        { letter: 'B', text: 'Síndrome alcohólico fetal' },
        { letter: 'C', text: 'Síndrome de Miller' },
        { letter: 'D', text: 'Síndrome de Marfán' },
        { letter: 'E', text: 'Síndrome de Ehler Dahnlos' },
      ],
      correct: 'D',
      explanation: 'Es un síndrome de Marfán clásico (afecta a hombres y mujeres y es genético, autosómico dominante): talla alta, extremidades y dedos largos, hiperlaxitud, soplo diastólico de insuficiencia aórtica por dilatación de la raíz, y un padre fallecido de muerte súbita, probablemente por disección aórtica. El Ehlers-Danlos produce hiperextensibilidad cutánea y fragilidad tisular, sin talla alta ni aracnodactilia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un niño de catorce años, con un padre que murió de muerte súbita, tiene talla alta, dedos y extremidades muy largos y algo desproporcionados, hiperlaxitud articular y un soplo diastólico.',
        question: '¿Cuál es el síndrome más probable?',
        options: 'Las opciones: neurofibromatosis; síndrome alcohólico fetal; síndrome de Miller; síndrome de Marfán; o síndrome de Ehlers-Danlos. Piénsalo.',
        answer: 'Es la D. Talla alta, aracnodactilia, hiperlaxitud, un soplo diastólico de insuficiencia aórtica y un padre fallecido de muerte súbita, probablemente por disección aórtica, son un Marfán. La E tienta por la hiperlaxitud, pero el Ehlers-Danlos no da talla alta ni dedos largos, sino piel hiperextensible y frágil.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 133',
      stem: 'Embarazada de 12 semanas con translucencia nucal aumentada en ecografía.',
      question: '¿Cuál es el examen definitivo para confirmar trisomía 21?',
      options: [
        { letter: 'A', text: 'Biopsia de vellosidades coriales (11-14 semanas)' },
        { letter: 'B', text: 'Amniocentesis (15-20 semanas)' },
        { letter: 'C', text: 'ADN fetal en sangre materna (NIPT)' },
        { letter: 'D', text: 'Fetoscopia' },
        { letter: 'E', text: 'Marcadores séricos maternos (triple marcador)' },
      ],
      correct: 'A',
      explanation: 'A las 12 semanas, la biopsia de vellosidades coriales es el examen invasivo de elección para el cariotipo fetal (ventana de 10 a 14 semanas). La amniocentesis se hace después de las 15 semanas; el ADN fetal libre y los marcadores séricos son tamizaje, no confirman.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Una embarazada de doce semanas tiene la translucencia nucal aumentada en la ecografía.',
        question: '¿Cuál es el examen definitivo para confirmar trisomía veintiuno?',
        options: 'Las opciones: biopsia de vellosidades coriales; amniocentesis; ADN fetal en sangre materna; fetoscopia; o marcadores séricos maternos. Piénsalo.',
        answer: 'Es la A. Para confirmar necesitas el cariotipo fetal, y a las doce semanas el examen invasivo que se puede hacer es la biopsia de vellosidades coriales. La B tienta porque también confirma, pero se hace desde las quince semanas. Y el ADN fetal libre es solo un tamizaje.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: genética y dismorfias',
      cards: [
        { title: 'Reconocer', tag: 'Fenotipo y estudio', kind: 'key', items: [
          { t: 'Tres o más anomalías menores: buscar una mayor', d: 'Cariograma; microarray si hay malformaciones múltiples',
            say: 'Cerremos con las reglas de oro. Tres o más anomalías menores obligan a buscar una malformación mayor. Pides cariograma, y microarray si hay malformaciones múltiples o retraso sin causa.' },
          { t: 'Down: hipotonía, fisuras oblicuas, pliegue único', d: 'Cariograma confirma',
            say: 'El síndrome de Down se sospecha con hipotonía, fisuras palpebrales oblicuas, epicanto y pliegue palmar único, y se confirma con el cariograma.' },
        ] },
        { title: 'Buscar y derivar', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Eco cardíaco a todos; TSH, audición y visión', d: 'Canal AV; atresia duodenal',
            say: 'A todo recién nacido con Down le pides ecocardiograma, porque el canal auriculoventricular puede ser silente, y programas la TSH, la audición y la visión. Y sospechas atresia duodenal ante vómitos biliosos.' },
          { t: 'Translocación: cariograma de ambos padres', d: 'Recurrencia 10-15% madre, 2-5% padre',
            say: 'Si el cariograma muestra una translocación, estudias a ambos padres, por el riesgo de recurrencia.' },
          { t: 'Talla baja en niña: Turner; talla alta y aorta: Marfán', d: 'Cariograma; ecocardiograma y oftalmología',
            say: 'Una niña con talla baja y cuello alado es un Turner, y se pide cariograma. Un adolescente alto con dedos largos y soplo diastólico es un Marfán, y se pide ecocardiograma y oftalmología. Si te llevas una sola idea de hoy: en la trisomía veintiuno, el ecocardiograma se pide siempre. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Recién nacido con dismorfias',
    root: N('start', 'Recién nacido o niño con dismorfias', 'Embarazo, teratógenos, examen con medidas',
      'Ves a un niño con rasgos distintos. Revisas el embarazo y los teratógenos, haces un examen completo con medidas, y te preguntas: ¿qué síndrome sugiere el fenotipo?',
      ['Fenotipo de Down', N('do', 'Sospecha de trisomía 21', 'Hipotonía, fisuras oblicuas, pliegue único',
        'Si el fenotipo es de síndrome de Down, confirmas con el cariograma y pides ecocardiograma a todos, porque la cardiopatía puede ser silente.',
        ['Vómitos biliosos', N('alert', 'Atresia duodenal', 'Doble burbuja: cirugía',
          'Si hay vómitos biliosos con el signo de la doble burbuja, es una atresia duodenal, y se opera.')],
        ['Cariograma con translocación', N('refer', 'Cariograma a ambos padres', 'Consejo genético',
          'Si el cariograma muestra una translocación, estudias a ambos padres, por el riesgo de recurrencia, y derivas a genética para el consejo.')],
        ['Control', N('refer', 'Tamizajes y equipo', 'TSH, audición, visión; estimulación',
          'Programas la TSH, la audición y la visión, y derivas a un equipo con genética, cardiología y estimulación temprana.')],
      )],
      ['Niña con talla baja y cuello alado', N('do', 'Turner: cariograma', 'Eco cardíaco y eco renal',
        'Si es una niña con talla baja, cuello alado y retraso puberal, piensas en Turner. Pides cariograma, ecocardiograma y ecografía renal.')],
      ['Alto, dedos largos, soplo diastólico', N('alert', 'Marfán', 'Ecocardiograma y oftalmología',
        'Si es un escolar alto, con dedos largos, hiperlaxitud y soplo diastólico, piensas en Marfán. Pides ecocardiograma y evaluación oftalmológica, restringes el ejercicio isométrico y estudias a los familiares.')],
      ['Varias anomalías sin síndrome claro', N('do', 'Cariograma y microarray', 'Derivar a genética clínica',
        'Si hay varias anomalías sin un síndrome claro, pides cariograma y microarray, y derivas a genética clínica con consejo genético.')],
    ),
  },
};
