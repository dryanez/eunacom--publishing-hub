// Clase 13.3 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-03). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El código de la clase no tiene preguntas reales propias. Se usan Julio 2013 P8 (retención aguda como indicación absoluta de cirugía)
// y Diciembre 2017 P80 (HPB con residuo e incontinencia por rebalse). Julio 2025 P19 y Diciembre 2025 P5 las usa uro-02.
// Se descartó Julio 2013 P104: su clave marca resección transuretral en un paciente sin indicación absoluta de cirugía,
// lo que contradice al libro y a su propia explicación (primero tratamiento médico con alfabloqueante).
// El banco real no tiene preguntas sobre el APE bajo finasteride ni sobre el síndrome de RTUP: se usan dos preguntas del libro como "Caso representativo".
// No se enseña el número "GES N° 10" del libro (ver informe, categoría A): se dice solo que el tratamiento quirúrgico de la HPB sintomática tiene garantía GES.
// Imágenes: Bailey & Love 27.ª ed., Fig. 75.10, 75.9 y 78.11.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hiperplasia prostática benigna: síntomas, IPSS, fármacos, efecto sobre el APE y cirugía',
      say: 'Bienvenido. Hoy vemos la hiperplasia prostática benigna, el tumor benigno más frecuente del hombre mayor de cincuenta años. El examen vuelve una y otra vez sobre lo mismo: qué fármaco parte primero, qué hace cada uno, qué le pasa al antígeno prostático con el finasteride y cuándo se opera. Partamos por entender de dónde nace.',
    },

    {
      type: 'points',
      kicker: 'Anatomía',
      title: 'La próstata por zonas',
      cards: [
        { title: 'Zonas de McNeal', tag: 'Dónde nace cada cosa', kind: 'key', items: [
          { t: 'Zona de transición: HPB', d: 'Rodea la uretra proximal; 95% de las HPB',
            say: 'La hiperplasia benigna nace en la zona de transición, la que rodea la uretra proximal. De ahí sale el noventa y cinco por ciento de los casos. Mira esta vista por cistoscopio de la uretra prostática: a ambos lados, los lóbulos de la próstata protruyen hacia la luz y la estrechan.',
            photo: { src: 'biblioteca/19_urologia/uro-03/01_uretra-prostatica-lobulos-cistoscopia__bailey-love_p1404.jpg', label: 'Lóbulos que cierran uretra', at: 'Mira esta vista', credit: 'Bailey & Love 27.ª ed., Fig. 75.10' } },
          { t: 'Zona periférica: cáncer', d: 'Origen de 75 a 80% de los cánceres',
            say: 'El cáncer, en cambio, nace en la zona periférica, de setenta y cinco a ochenta por ciento de los casos. Esa diferencia de zonas es la que se aprovecha en el tacto rectal.' },
        ] },
        { title: 'Dos componentes', tag: 'Fisiopatología', kind: 'alert', items: [
          { t: 'Estático: masa glandular', d: 'Comprime la uretra',
            say: 'El adenoma produce dos efectos. El componente estático es la masa de la glándula, que comprime la uretra. A esto responde el finasteride.' },
          { t: 'Dinámico: tono alfa uno', d: 'Músculo liso del estroma y cuello vesical',
            say: 'El componente dinámico es el tono del músculo liso de la próstata y del cuello vesical, que depende de receptores alfa uno. A esto responde la tamsulosina.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la obstrucción a los síntomas',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Adenoma de la zona de transición', s: 'Estático y dinámico' },
        { id: 'o', col: 1, row: 1, k: 'mech', t: 'Obstrucción de la salida', s: 'La orina sale con dificultad' },
        { id: 's', col: 2, row: 0, k: 'effect', t: 'Síntomas de vaciado', s: 'Chorro débil, goteo, esfuerzo' },
        { id: 'd', col: 2, row: 2, k: 'mech', t: 'El detrusor se hipertrofia', s: 'Vejiga de lucha' },
        { id: 'i', col: 3, row: 2, k: 'effect', t: 'Síntomas de llenado', s: 'Polaquiuria, nicturia, urgencia' },
        { id: 'c', col: 4, row: 1, k: 'risk', t: 'Complicaciones', s: 'Retención, ITU, litiasis, hidronefrosis' },
      ],
      edges: [
        { from: 'a', to: 'o' },
        { from: 'o', to: 's' },
        { from: 'o', to: 'd', label: 'compensa' },
        { from: 'd', to: 'i' },
        { from: 'i', to: 'c', label: 'si progresa' },
      ],
      steps: [
        { show: ['a', 'o'], note: 'El adenoma obstruye la salida',
          say: 'El adenoma de la zona de transición comprime la uretra y, además, aprieta el cuello vesical por su tono muscular. Resultado: una obstrucción de la salida.' },
        { show: ['s'], note: 'Primero, síntomas de vaciado',
          say: 'La dificultad de salida produce los síntomas obstructivos o de vaciado: chorro débil, latencia para empezar a orinar, esfuerzo, intermitencia y goteo terminal.' },
        { show: ['d', 'i'], note: 'Después, síntomas de llenado',
          say: 'Para vencer la obstrucción, el detrusor se hipertrofia y forma una vejiga de lucha, con trabéculas y pseudodivertículos. Ese músculo irritable produce los síntomas irritativos o de llenado: polaquiuria diurna, nicturia más de dos veces, urgencia e incontinencia de urgencia. Mira esta pared de la vejiga por dentro: las bandas musculares marcadas son la trabeculación, la huella de años de esfuerzo.',
          photo: { src: 'biblioteca/19_urologia/uro-03/02_vejiga-trabeculada-cistoscopia__bailey-love_p1404.jpg', label: 'Vejiga trabeculada', at: 'Mira esta pared', credit: 'Bailey & Love 27.ª ed., Fig. 75.9' } },
        { show: ['c'], note: 'Si no se trata, complica',
          say: 'Y si la obstrucción progresa, aparecen las complicaciones: retención aguda, infecciones, litiasis vesical, y daño del riñón. Esas complicaciones son las que mandan a cirugía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Obstructivos contra irritativos',
      cards: [
        { title: 'Síntomas de vaciado', tag: 'Obstructivos', kind: 'key', items: [
          { t: 'Chorro débil y entrecortado', d: 'Latencia, esfuerzo, goteo terminal',
            say: 'Los síntomas de vaciado reflejan la dificultad de salida: disminución del calibre del chorro, espera para iniciar, esfuerzo, goteo terminal e intermitencia.' },
        ] },
        { title: 'Síntomas de llenado', tag: 'Irritativos', kind: 'criteria', items: [
          { t: 'Nicturia, polaquiuria, urgencia', d: 'Respuesta del detrusor',
            say: 'Los síntomas de llenado son la respuesta del detrusor: polaquiuria diurna, nicturia más de dos veces por noche, urgencia miccional e incontinencia de urgencia.' },
        ] },
        { title: 'Trampa clásica', tag: 'Tamaño y síntomas', kind: 'alert', items: [
          { t: 'Tamaño no es gravedad', d: 'Un lóbulo medio pequeño puede obstruir mucho',
            say: 'Y ojo con esto: el tamaño de la próstata no se correlaciona con la gravedad de los síntomas. Una próstata pequeña con un lóbulo medio que crece hacia la vejiga puede producir una obstrucción importante.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación',
      title: 'Frecuencia, ecografía y uroflujometría',
      cards: [
        { title: 'Quién la tiene', tag: 'Epidemiología', kind: 'key', items: [
          { t: 'Tumor benigno más frecuente', d: '50% a los 60 años; 80 a 90% a los 80',
            say: 'La hiperplasia prostática es el tumor benigno más frecuente del hombre y la causa más común de síntomas urinarios bajos. Aparece desde los cuarenta años: afecta a cerca de la mitad a los sesenta, y a ocho o nueve de cada diez a los ochenta, aunque solo una parte tiene síntomas.' },
          { t: 'Andrógenos y envejecimiento', d: 'No aparece si se castró antes de la pubertad',
            say: 'Necesita dihidrotestosterona y envejecimiento: no se desarrolla en quien fue castrado antes de la pubertad. Se asocia además a obesidad, síndrome metabólico, sedentarismo y antecedente familiar.' },
        ] },
        { title: 'Ecografía vésico-prostática', tag: 'Con vejiga llena y vacía', kind: 'criteria', items: [
          { t: 'Volumen y lóbulo medio', d: 'Aumentada si pasa de 30 a 40 cc',
            say: 'La ecografía suprapúbica estima el volumen de la próstata, que está aumentada sobre treinta a cuarenta centímetros cúbicos, y muestra el lóbulo medio. Mira esta resonancia: la masa de la próstata se proyecta hacia dentro de la vejiga, es el lóbulo medio, y explica por qué una próstata no tan grande puede dar una obstrucción importante.',
            photo: { src: 'biblioteca/19_urologia/uro-03/03_rm-lobulo-medio-protruye-vejiga__bailey-love_p1482.jpg', label: 'RM sagital: lóbulo medio prostático que protruye en la vejiga', at: 'Mira esta resonancia', credit: 'Bailey & Love\'s Short Practice of Surgery, 27.ª ed., p. 1482' } },
          { t: 'Residuo mayor de 100 mL', d: 'Trabéculas, divertículos, hidronefrosis',
            say: 'Después de orinar mide el residuo, que es significativo sobre cien mililitros, y busca trabeculación, divertículos, cálculos y hidronefrosis. La ecografía transrectal se reserva para guiar la biopsia.' },
        ] },
        { title: 'Uroflujometría', tag: 'Flujo máximo', kind: 'alert', items: [
          { t: 'Qmax menor de 10: obstrucción', d: 'Mayor de 15 mL/s es normal',
            say: 'La uroflujometría registra una micción espontánea de al menos ciento cincuenta mililitros. Un flujo máximo sobre quince es normal, y bajo diez sugiere obstrucción, con una curva aplanada y prolongada en vez de la campana normal.' },
          { t: 'No distingue el detrusor débil', d: 'Se lee junto con residuo e IPSS',
            say: 'Ojo: no separa la obstrucción de un detrusor poco contráctil. Por eso se interpreta junto con el residuo y el IPSS.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación',
      title: 'Tacto rectal y obstrucción baja',
      cards: [
        { title: 'La técnica del tacto', tag: 'La realizas tú', kind: 'key', items: [
          { t: 'Decúbito lateral izquierdo', d: 'Rodillas flectadas; explica antes',
            say: 'Primero explicas el procedimiento y colocas al paciente en decúbito lateral izquierdo con las rodillas flectadas. Inspeccionas la región perianal, lubricas el dedo y lo apoyas sobre el esfínter hasta que se relaje, antes de introducirlo.' },
          { t: 'Cara posterior de la próstata', d: 'Normal 3 a 4 cm, como una nuez',
            say: 'Con la cara palmar hacia adelante palpas la cara posterior de la próstata: tamaño, que normalmente es de tres a cuatro centímetros, simetría, surco medio, consistencia, nódulos y dolor. Si sospechas prostatitis aguda, no hay masaje.' },
          { t: 'Registrar y sumar el APE', d: 'No reemplaza al antígeno',
            say: 'Registras el hallazgo y lo complementas con el APE; uno no reemplaza al otro.' },
        ] },
        { title: 'Uropatía obstructiva baja', tag: 'Del cuello al meato', kind: 'alert', items: [
          { t: 'En el adulto mayor, casi siempre HPB', d: 'Pero también estenosis, cáncer, cálculos',
            say: 'Es la dificultad para vaciar por un obstáculo desde el cuello vesical hasta el meato. En el hombre mayor la causa más frecuente es la hiperplasia, pero piensa también en estenosis uretral, cáncer de próstata, cálculos y fimosis. En el niño, las válvulas de uretra posterior.' },
          { t: 'Sonda, creatinina, urocultivo y eco', d: 'Luego derivar a urología',
            say: 'Si hay retención, pasas una sonda; pides creatinina, orina completa y urocultivo, haces una ecografía y derivas. Sus complicaciones son la infección, la litiasis vesical, la retención aguda y la insuficiencia renal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación',
      title: 'IPSS, tacto rectal y exámenes',
      cards: [
        { title: 'Cuestionario y examen', tag: 'Mandatorio', kind: 'key', items: [
          { t: 'IPSS de 7 preguntas', d: 'Leve, moderado y severo',
            say: 'La evaluación parte con el cuestionario IPSS, la escala internacional de síntomas prostáticos, de siete preguntas. De cero a siete son síntomas leves, de ocho a diecinueve moderados, y de veinte a treinta y cinco severos.' },
          { t: 'Tacto rectal siempre', d: 'Fibroelástica, lisa, bordes netos, indolora',
            say: 'El tacto rectal es mandatorio. En la hiperplasia, la próstata es fibroelástica, lisa, de bordes netos e indolora. Un nódulo duro, la asimetría pétrea o la pérdida de bordes orientan a cáncer.' },
        ] },
        { title: 'Exámenes indispensables', tag: 'Qué se pide', kind: 'criteria', items: [
          { t: 'Sedimento de orina', d: 'Descarta infección',
            say: 'Se pide un sedimento de orina para descartar infección.' },
          { t: 'Creatinina', d: 'Descarta nefropatía obstructiva',
            say: 'La creatinina, para descartar daño renal por la obstrucción.' },
          { t: 'Antígeno prostático específico', d: 'Cribado de cáncer',
            say: 'Y el antígeno prostático específico, el APE, para el cribado de cáncer.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'IPSS',
      title: 'Puntaje y conducta',
      head: ['IPSS', 'Gravedad', 'Conducta'],
      rows: [
        { cells: ['0 a 7', 'Leve', 'Observación y hábitos'],
          say: 'Con síntomas leves, de cero a siete, se observa. Se cambian hábitos: menos líquidos de noche, y evitar cafeína, alcohol y anticolinérgicos. Control anual.' },
        { cells: ['8 a 19', 'Moderada', 'Alfa uno bloqueante'],
          say: 'De ocho a diecinueve, síntomas moderados: monoterapia con un alfa uno bloqueante, la tamsulosina. Se evalúa agregar un inhibidor de la cinco alfa reductasa si la próstata supera cuarenta centímetros cúbicos.' },
        { cells: ['20 a 35', 'Severa', 'Terapia combinada; evaluar cirugía'],
          say: 'De veinte a treinta y cinco, síntomas severos: terapia combinada precoz de tamsulosina con finasteride, y se evalúa la necesidad de cirugía.' },
        { cells: ['Cualquiera, con complicación', 'HPB complicada', 'Cirugía: derivar a urología'],
          say: 'Y con cualquier puntaje, si hay una complicación orgánica, la indicación es quirúrgica, y se deriva a urología de forma prioritaria.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento médico',
      title: 'Tamsulosina: efecto rápido, sin tocar la próstata',
      cards: [
        { title: 'Alfa uno bloqueantes', tag: 'Primera elección', kind: 'pharma', items: [
          { t: 'Tamsulosina 0,4 mg al día', d: 'Relaja el músculo liso en 48 a 72 horas',
            say: 'Los alfa uno bloqueantes selectivos, como la tamsulosina, cero coma cuatro miligramos al día, son los fármacos de primera elección en los síntomas moderados a severos. Relajan el músculo liso de la próstata y del cuello vesical en dos a tres días, y mejoran el flujo entre veinte y treinta por ciento.' },
          { t: 'Ni volumen ni APE cambian', d: 'Solo alivia el componente dinámico',
            say: 'No reducen el volumen de la glándula ni modifican el APE. Actúan sobre el componente dinámico, no sobre el estático.' },
        ] },
        { title: 'Efectos adversos', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Eyaculación retrógrada', d: 'Y mareos, hipotensión ortostática',
            say: 'El efecto adverso característico es la eyaculación retrógrada. También mareos e hipotensión ortostática, y congestión nasal.' },
          { t: 'Síndrome de iris flácido', d: 'Avisar antes de una cirugía de cataratas',
            say: 'Y el síndrome de iris flácido, que importa si el paciente va a operarse de cataratas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento médico',
      title: 'Finasteride: volumen y APE',
      cards: [
        { title: 'Inhibidores de la 5-alfa reductasa', tag: 'Acción lenta', kind: 'pharma', items: [
          { t: 'Finasteride 5 mg, dutasteride', d: 'Bajan la dihidrotestosterona',
            say: 'El finasteride, cinco miligramos al día, y el dutasteride, cero coma cinco, bloquean la conversión de testosterona a dihidrotestosterona, la que hace crecer la próstata.' },
          { t: 'Reducen el volumen 20 a 25%', d: 'En 3 a 6 meses; próstata mayor de 40 cc',
            say: 'Reducen el volumen entre veinte y veinticinco por ciento, pero lentamente, de tres a seis meses. Por eso se indican en próstatas mayores de cuarenta centímetros cúbicos, y disminuyen el riesgo de retención y de cirugía a largo plazo.' },
          { t: 'Efectos: disfunción eréctil y libido', d: 'También ginecomastia',
            say: 'Sus efectos adversos son disfunción eréctil, caída de la libido, ginecomastia y menos eyaculado.' },
        ] },
        { title: 'La regla de oro', tag: 'Se pregunta siempre', kind: 'alert', items: [
          { t: 'Bajan el APE a la mitad', d: 'Tras 6 meses: multiplicar por 2',
            say: 'Y esta es la regla que más se pregunta. A los seis meses de finasteride, el APE baja a la mitad. Entonces, para el cribado de cáncer de próstata, el valor medido se multiplica por dos.' },
          { t: 'Tamsulosina no lo modifica', d: 'Los alfabloqueantes no tocan el APE',
            say: 'La tamsulosina, en cambio, no modifica el APE. Si no multiplicas por dos, subestimas un posible cáncer.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Fármacos en HPB',
      title: 'Comparación de los fármacos',
      head: ['Fármaco', 'Efecto', 'APE', 'Efecto adverso'],
      rows: [
        { cells: ['Tamsulosina', 'En 48 a 72 horas', 'No cambia', 'Eyaculación retrógrada, mareo'],
          say: 'La tamsulosina actúa en dos a tres días, no cambia el APE, y produce eyaculación retrógrada y mareo.' },
        { cells: ['Finasteride o dutasteride', 'En 3 a 6 meses', 'Baja 50%: multiplicar por 2', 'Disfunción eréctil, libido'],
          say: 'Finasteride y dutasteride actúan en tres a seis meses, bajan el APE a la mitad, y producen disfunción eréctil y baja de libido.' },
        { cells: ['Tamsulosina más dutasteride', 'Rápido y sostenido', 'Baja 50%', 'Suma de ambos'],
          say: 'La terapia combinada une el efecto rápido con la reducción del volumen. Se prefiere en próstatas mayores de cuarenta centímetros cúbicos, y suma los efectos adversos de las dos.' },
        { cells: ['Tadalafilo 5 mg', 'En 1 a 2 semanas', 'No cambia', 'Cefalea, rubor'],
          say: 'El tadalafilo, cinco miligramos al día, es una opción si el paciente además tiene disfunción eréctil. Su efecto adverso son cefalea y rubor.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía',
      title: 'Cuándo se opera: indicaciones absolutas',
      cards: [
        { title: 'Indicación quirúrgica', tag: 'Absolutas', kind: 'alert', items: [
          { t: 'Retención aguda refractaria o repetida', d: 'Falla el retiro de sonda',
            say: 'La cirugía se indica si fracasa el tratamiento médico, o si hay complicaciones. La primera, la retención aguda de orina que se repite o que no se resuelve al retirar la sonda.' },
          { t: 'ITU recurrente o litiasis vesical', d: 'Por estasis de orina',
            say: 'Las infecciones urinarias recurrentes por estasis, y la litiasis vesical secundaria a la obstrucción crónica.' },
          { t: 'Hematuria prostática recurrente', d: 'Refractaria a finasteride',
            say: 'La hematuria macroscópica de origen prostático que reaparece pese al finasteride.' },
          { t: 'Divertículos o daño renal', d: 'Hidronefrosis bilateral, insuficiencia renal',
            say: 'Los divertículos vesicales gigantes, y la dilatación del uréter y del riñón en ambos lados, o la insuficiencia renal postrenal.' },
        ] },
        { title: 'GES', tag: 'Chile', kind: 'key', items: [
          { t: 'Cirugía de HPB sintomática', d: 'Tiene garantía GES',
            say: 'En Chile, el tratamiento quirúrgico de la hiperplasia benigna en personas sintomáticas que cumplen los criterios tiene garantía GES, con plazos máximos para la evaluación urológica y la cirugía.' },
        ] },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 8',
      stem: 'Un paciente de 50 años, diabético en tratamiento con metformina, consulta por poliaquiuria, nicturia, latencia y debilidad del chorro miccional desde hace meses, no asociado a otros síntomas. Su tacto rectal muestra próstata aumentada de tamaño de consistencia gomosa. Con respecto a este caso,',
      question: '¿Cuál de las siguientes es una indicación absoluta para resolución quirúrgica en esta patología?',
      options: [
        { letter: 'A', text: 'Hematuria en una ocasión' },
        { letter: 'B', text: 'Retención aguda de orina' },
        { letter: 'C', text: 'Residuo postmiccional de 150 ml' },
        { letter: 'D', text: 'Prostata mayor a 40 cc' },
        { letter: 'E', text: 'Antígeno prostático de 5 ng/ml' },
      ],
      correct: 'B',
      explanation: 'Es una HPB. La retención urinaria aguda es indicación absoluta de cirugía. Hematuria en una ocasión y residuo de 150 ml son indicaciones relativas. El APE elevado solo es indicación de biopsia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de cincuenta años, diabético, con polaquiuria, nicturia, latencia y debilidad del chorro desde hace meses. En el tacto rectal, la próstata está aumentada de tamaño, de consistencia gomosa.',
        question: '¿Cuál de las siguientes es una indicación absoluta de cirugía?',
        options: 'Las opciones: hematuria en una ocasión; retención aguda de orina; residuo postmiccional de ciento cincuenta mililitros; próstata mayor de cuarenta centímetros cúbicos; o antígeno prostático de cinco. Piénsalo.',
        answer: 'Es la B. La retención aguda de orina es una indicación absoluta. La D es la trampa: el volumen mayor de cuarenta centímetros cúbicos justifica agregar finasteride, no operar. Y el APE elevado se estudia con biopsia, no con cirugía de HPB.',
      },
    },

    {
      type: 'table',
      kicker: 'Técnicas quirúrgicas',
      title: 'Qué cirugía según el volumen',
      head: ['Técnica', 'Volumen', 'Ventaja o riesgo'],
      rows: [
        { cells: ['RTUP', 'Menor de 80 cc', 'Sin herida; eyaculación retrógrada'],
          say: 'La resección transuretral de próstata, la RTUP, es el estándar para próstatas menores de ochenta centímetros cúbicos. Se hace por vía endoscópica, sin herida, con sonda uno o dos días. Su secuela más frecuente es la eyaculación retrógrada.' },
        { cells: ['Adenomectomía abierta', 'Mayor de 80 cc', 'Más sangrado y estadía'],
          say: 'Para próstatas mayores de ochenta centímetros cúbicos, la técnica clásica es la adenomectomía abierta, de Millin. Extrae todo el adenoma, pero con más sangrado, herida dolorosa y sonda cinco a siete días.' },
        { cells: ['Enucleación con láser holmium', 'Cualquier tamaño', 'Buena hemostasia; curva de aprendizaje'],
          say: 'La enucleación con láser holmium, la HoLEP, sirve para cualquier tamaño por vía endoscópica, con poco sangrado, incluso en anticoagulados. Requiere un cirujano entrenado y equipo costoso.' },
        { cells: ['Vaporización con láser verde', 'Menor de 60 cc', 'Casi ambulatoria; sin biopsia'],
          say: 'La vaporización con láser verde se usa en próstatas pequeñas a medianas. Sangra poco, pero no entrega tejido para biopsia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicación',
      title: 'Síndrome de RTUP',
      cards: [
        { title: 'Qué es', tag: 'Cirugía monopolar', kind: 'alert', items: [
          { t: 'Hiponatremia dilucional', d: 'Se absorbe el líquido de irrigación',
            say: 'El síndrome de RTUP ocurre en la resección monopolar clásica. El líquido de irrigación, glicina hipotónica, se absorbe por los senos venosos abiertos de la próstata, y baja el sodio por dilución.' },
          { t: 'Confusión, cefalea, convulsiones', d: 'Después de una cirugía larga',
            say: 'Aparecen confusión, cefalea, náuseas, hipertensión con bradicardia y, si es severo, convulsiones. Es típico tras una cirugía prolongada.' },
        ] },
        { title: 'Cómo se evita', tag: 'Hoy', kind: 'key', items: [
          { t: 'RTUP bipolar con suero fisiológico', d: 'El suero isotónico no diluye el sodio',
            say: 'Hoy se previene con la resección bipolar, que usa suero fisiológico isotónico, que no diluye el sodio. Por eso es una complicación casi erradicada.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La uretra se estrecha',
      images: [
        { src: 'animaciones/uro-03/A1_hpb_uretra_estrecha.mp4', label: 'De la próstata normal a la obstrucción', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'De la próstata normal a la obstrucción',
          say: 'Compara la próstata normal con la hiperplásica. Cuando el adenoma de la zona de transición crece, la uretra se estrecha y el chorro se adelgaza: el flujo máximo cae bajo diez mililitros por segundo. El detrusor se hipertrofia y aparecen los síntomas de llenado. Y recuerda los dos componentes: el estático, que trata el finasteride, y el dinámico, que relaja la tamsulosina.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de los síntomas urinarios del hombre mayor al tratamiento según IPSS, volumen y complicaciones.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'HPB: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Síntomas moderados, IPSS 8 a 19', 'Tamsulosina', 'Partir con finasteride'],
          say: 'Síntomas moderados: se parte con tamsulosina, que actúa en días. El finasteride tarda meses.' },
        { cells: ['Finasteride por más de 6 meses', 'APE medido por 2', 'Leer el APE tal cual'],
          say: 'Si toma finasteride, el APE medido se multiplica por dos.' },
        { cells: ['Próstata de más de 40 cc', 'Agregar inhibidor 5-ARI', 'Operar de entrada'],
          say: 'Próstata de más de cuarenta centímetros cúbicos: se agrega un inhibidor de la cinco alfa reductasa. Eso no es indicación de cirugía.' },
        { cells: ['Retención aguda repetida', 'Cirugía: RTUP', 'Seguir con sonda permanente'],
          say: 'Retención aguda que se repite: cirugía. Dejar una sonda permanente expone a infecciones y a perder función renal.' },
        { cells: ['Nódulo duro, asimetría', 'Sospechar cáncer', 'Diagnosticar HPB'],
          say: 'Un nódulo duro o una próstata asimétrica en el tacto rectal es sospecha de cáncer, no de hiperplasia.' },
        { cells: ['Tamsulosina y cirugía de cataratas', 'Síndrome de iris flácido', 'Ignorarlo'],
          say: 'Y la tamsulosina antes de una cirugía de cataratas: avisa al oftalmólogo, por el síndrome de iris flácido.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años con 2 años de nicturia 4 a 5 veces, chorro débil y entrecortado y sensación de vaciamiento incompleto. IPSS 22. Sin globo vesical. Tacto rectal: próstata de 55 cc, lisa, de bordes netos, fibroelástica, sin nódulos. APE 2,4 ng/mL, creatinina 0,9 mg/dL y sedimento normal. Residuo postmiccional de 130 mL.',
      question: '¿Cuál es el tratamiento inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Tamsulosina más finasteride' },
        { letter: 'B', text: 'Resección transuretral urgente' },
        { letter: 'C', text: 'Ciprofloxacino por 2 semanas' },
        { letter: 'D', text: 'Biopsia prostática' },
        { letter: 'E', text: 'Oxibutinina' },
      ],
      correct: 'A',
      explanation: 'HPB con síntomas severos y próstata de más de 40 cc, con tacto rectal y APE benignos y sin complicaciones orgánicas. Se parte con tratamiento médico: un alfa uno bloqueante, que actúa rápido, junto a un inhibidor de la 5-alfa reductasa, que frena el crecimiento. La cirugía no está indicada todavía, ni la biopsia, porque el APE y el tacto son normales.',
      say: {
        stem: 'Un hombre de sesenta y ocho años con dos años de nicturia, cuatro a cinco veces por noche, chorro débil, entrecortado y sensación de vaciamiento incompleto. El IPSS es veintidós. En el tacto rectal, la próstata es de unos cincuenta y cinco centímetros cúbicos, lisa, de bordes netos y sin nódulos. El APE es dos coma cuatro, la creatinina es normal y el residuo postmiccional es de ciento treinta mililitros.',
        question: '¿Cuál es el tratamiento inicial más adecuado?',
        options: 'Las opciones: tamsulosina más finasteride; resección transuretral urgente; ciprofloxacino; biopsia de próstata; u oxibutinina. Piénsalo.',
        answer: 'Es la A. Síntomas severos y próstata de más de cuarenta centímetros cúbicos, sin complicaciones: tratamiento médico combinado. La B es la tentación, pero no hay indicación absoluta de cirugía. Y la E no corresponde: es un anticolinérgico, que puede empeorar la retención.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 80',
      stem: 'Un paciente de 70 años, con antecedente de hiperplasia prostática benigna, consulta por escapes de grandes cantidades de orina, asociada a deseos intensos de ir al baño. Se solicita una ecografía vesicoprostática que visualiza adenoma prostático de 50 cc de volumen, vejiga urinaria con paredes engrosadas y residuo postmiccional significativo',
      question: '¿Cuál es la indicación más adecuada?',
      options: [
        { letter: 'A', text: 'Imipramina oral' },
        { letter: 'B', text: 'Tamsulosina oral' },
        { letter: 'C', text: 'Amitriptilina oral' },
        { letter: 'D', text: 'Tolterodina oral' },
        { letter: 'E', text: 'Cloruro de trospio' },
      ],
      correct: 'B',
      explanation: 'HPB con complicaciones y escapes de orina por rebalse. El alfabloqueante es el tratamiento de primera línea para la HPB con síntomas obstructivos y residuo postmiccional significativo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente de setenta años con hiperplasia prostática, que consulta por escapes de grandes cantidades de orina con deseos intensos de ir al baño. La ecografía muestra un adenoma de cincuenta centímetros cúbicos, la pared de la vejiga engrosada y un residuo postmiccional significativo.',
        question: '¿Cuál es la indicación más adecuada?',
        options: 'Las opciones: imipramina; tamsulosina; amitriptilina; tolterodina; o cloruro de trospio. Piénsalo.',
        answer: 'Es la B. El problema es una obstrucción con residuo, y el escape es por rebalse. Se trata la obstrucción con tamsulosina. La D y la E son anticolinérgicos: aumentarían el residuo y podrían precipitar una retención.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 71 años en tratamiento con Finasteride 5 mg/día desde hace 1 año por HPB. En su control anual asintomático, el laboratorio informa un APE total sérico de 2.8 ng/mL. El tacto rectal no revela nódulos.',
      question: '¿Cómo debe interpretarse el valor real de su APE sérico para fines de screening de cáncer de próstata?',
      options: [
        { letter: 'A', text: 'El valor real es 2.8 ng/mL y se considera normal para su edad' },
        { letter: 'B', text: 'El valor real es 5.6 ng/mL y se encuentra en zona de sospecha oncológica' },
        { letter: 'C', text: 'El valor real es 1.4 ng/mL debido a la sobrestimación por tiazidas' },
        { letter: 'D', text: 'El valor del APE es inválido y debe suspenderse el finasteride por 1 mes para repetir' },
        { letter: 'E', text: 'El finasteride no altera el valor plasmático del APE' },
      ],
      correct: 'B',
      explanation: 'Los inhibidores de la 5-alfa reductasa reducen el APE en 50% a partir de los 6 meses de uso continuo. Para interpretarlo, se duplica el valor informado: 2,8 por 2 son 5,6 ng/mL, que cae en la zona de sospecha y exige estudio.',
      say: {
        stem: 'Un caso representativo del banco de preguntas. Un hombre de setenta y un años que toma finasteride desde hace un año por hiperplasia prostática. Está asintomático, el tacto rectal no tiene nódulos, y el APE informado es dos coma ocho.',
        question: '¿Cómo se interpreta su APE para el cribado de cáncer de próstata?',
        options: 'Las opciones: dos coma ocho, normal; cinco coma seis, zona de sospecha; uno coma cuatro por las tiazidas; inválido, hay que suspender el finasteride un mes; o el finasteride no altera el APE. Piénsalo.',
        answer: 'Es la B. El finasteride baja el APE a la mitad después de seis meses, entonces se multiplica por dos: cinco coma seis, que está en la zona de sospecha. La A es la trampa: tomar el valor tal cual deja pasar un posible cáncer.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Durante el postoperatorio inmediato de una RTUP monopolar en un paciente con próstata de 75 cc tras 120 minutos de cirugía, el paciente presenta confusión mental, desorientación témporo-espacial, cefalea intensa y náuseas. Los signos vitales muestran PA 175/105 mmHg y FC 54 lpm. Laboratorio urgente: Sodio plasmático 116 mEq/L.',
      question: '¿Cuál es el diagnóstico más probable de esta complicación?',
      options: [
        { letter: 'A', text: 'Accidente cerebrovascular isquémico embólico' },
        { letter: 'B', text: 'Síndrome de RTUP (hiponatremia dilucional por absorción de líquido de irrigación)' },
        { letter: 'C', text: 'Shock séptico por translocación bacteriana urinaria' },
        { letter: 'D', text: 'Hematoma retroperitoneal masivo con shock hipovolémico' },
        { letter: 'E', text: 'Reacción alérgica anafilactoide a la anestesia general' },
      ],
      correct: 'B',
      explanation: 'Es el síndrome de RTUP, típico de una cirugía monopolar prolongada: se absorbe líquido de irrigación hipotónico por los senos venosos prostáticos abiertos, con hiponatremia dilucional y edema cerebral. Se manifiesta con hipertensión, bradicardia, confusión y cefalea.',
      say: {
        stem: 'Otro caso representativo del banco. Un paciente con una próstata de setenta y cinco centímetros cúbicos, recién operado de una RTUP monopolar de ciento veinte minutos. Está confuso y desorientado, con cefalea intensa y náuseas. Tiene la presión alta, la frecuencia baja, y el sodio plasmático en ciento dieciséis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: accidente cerebrovascular embólico; síndrome de RTUP; shock séptico; hematoma retroperitoneal; o reacción alérgica a la anestesia. Piénsalo.',
        answer: 'Es la B. Una cirugía monopolar larga, con sodio muy bajo, hipertensión y bradicardia: el síndrome de RTUP. La C y la D darían hipotensión y taquicardia, y aquí ocurre lo contrario.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.1.027 · Uropatía obstructiva baja",
      "stem": "Hombre de 76 años con síntomas urinarios bajos de años, sin tratamiento, consulta por goteo urinario continuo, día y noche, de 2 meses, y decaimiento. Al examen hay un globo vesical palpable indoloro. Creatinina 2,8 mg/dL (hace 1 año 1,0 mg/dL). La ecografía muestra hidroureteronefrosis bilateral y vejiga distendida con 900 mL.",
      "question": "¿Cuál es la conducta inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Descompresión vesical con sonda Foley, control de diuresis y electrolitos por riesgo de poliuria postobstructiva, y derivar a urología"
        },
        {
          "letter": "B",
          "text": "Oxibutinina por incontinencia de urgencia"
        },
        {
          "letter": "C",
          "text": "Nefrostomía percutánea bilateral urgente"
        },
        {
          "letter": "D",
          "text": "Iniciar tamsulosina y control en 3 meses"
        },
        {
          "letter": "E",
          "text": "Biopsia renal por insuficiencia renal de causa desconocida"
        }
      ],
      "correct": "A",
      "explanation": "El goteo continuo con globo vesical es incontinencia por rebalse, y la hidronefrosis bilateral con alza de creatinina indica uropatía obstructiva baja con daño renal. Se descomprime la vejiga con sonda, vigilando la poliuria postobstructiva y los electrolitos, y luego se trata la causa. La nefrostomía no es necesaria si la obstrucción es infravesical.",
      "say": {
        "stem": "Un hombre de setenta y seis años con síntomas prostáticos antiguos tiene goteo de orina continuo, un globo vesical indoloro, creatinina que subió a dos coma ocho, y en la ecografía ambos riñones dilatados con la vejiga muy llena.",
        "question": "¿Cuál es la conducta inicial más adecuada?",
        "options": "Las opciones: sonda Foley vigilando la diuresis y los electrolitos, oxibutinina, nefrostomía bilateral, tamsulosina con control en tres meses o biopsia renal. Piénsalo.",
        "answer": "Es la A. Es una obstrucción infravesical con daño renal, y se resuelve vaciando la vejiga con sonda, atentos a la poliuria posterior a la obstrucción. La oxibutinina tienta porque se escapa la orina, pero es incontinencia por rebalse y ese fármaco empeora la retención."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.3.002 · Epidemiología del adenoma de próstata",
      "stem": "En una charla para la comunidad, un médico de un CESFAM explica los aspectos epidemiológicos de la hiperplasia prostática benigna a un grupo de hombres adultos.",
      "question": "¿Cuál de las siguientes afirmaciones es correcta?",
      "options": [
        {
          "letter": "A",
          "text": "Es una lesión premaligna que evoluciona a cáncer de próstata en la mayoría de los casos"
        },
        {
          "letter": "B",
          "text": "Es más frecuente en hombres castrados antes de la pubertad"
        },
        {
          "letter": "C",
          "text": "Se origina principalmente en la zona periférica de la próstata"
        },
        {
          "letter": "D",
          "text": "Su prevalencia histológica aumenta con la edad, alcanzando alrededor de 50% a los 60 años y cerca de 80 a 90% a los 80 años, y requiere andrógenos testiculares para desarrollarse"
        },
        {
          "letter": "E",
          "text": "El tamaño de la próstata se correlaciona estrechamente con la intensidad de los síntomas"
        }
      ],
      "correct": "D",
      "explanation": "La hiperplasia prostática benigna es muy frecuente y dependiente de la edad y de la dihidrotestosterona: no ocurre en castrados prepuberales. Nace en la zona de transición, no es premaligna, y el tamaño glandular se correlaciona mal con los síntomas. El cáncer, en cambio, nace en la zona periférica.",
      "say": {
        "stem": "Un médico del CESFAM da una charla a hombres adultos sobre la epidemiología del crecimiento benigno de la próstata.",
        "question": "¿Qué afirmación es correcta?",
        "options": "Las opciones: es premaligna, es más común en castrados, nace en la zona periférica, su frecuencia aumenta con la edad y depende de los andrógenos o el tamaño se correlaciona con los síntomas. Piénsalo.",
        "answer": "Es la D. Su frecuencia sube con la edad, llegando a cerca de la mitad de los hombres a los sesenta, y depende de los andrógenos testiculares. La zona periférica tienta, pero ahí nace el cáncer; la hiperplasia nace en la zona de transición."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.4.006 · Ecografía vésico-prostática básica",
      "stem": "Hombre de 70 años con síntomas urinarios bajos moderados: chorro débil, nicturia y sensación de vaciado incompleto. Al tacto rectal, la próstata está aumentada de tamaño, lisa y elástica. Función renal normal.",
      "question": "¿Cuál es el examen de imagen más útil en la evaluación inicial?",
      "options": [
        {
          "letter": "A",
          "text": "Pielografía de eliminación"
        },
        {
          "letter": "B",
          "text": "Resonancia magnética de pelvis"
        },
        {
          "letter": "C",
          "text": "Cistografía miccional"
        },
        {
          "letter": "D",
          "text": "TAC de abdomen con contraste"
        },
        {
          "letter": "E",
          "text": "Ecografía vésico-prostática con medición del residuo postmiccional"
        }
      ],
      "correct": "E",
      "explanation": "En la hiperplasia prostática benigna, la ecografía vésico-prostática estima el volumen prostático, evalúa la pared vesical y la presencia de litiasis, y mide el residuo postmiccional; un residuo significativo (mayor de 100-150 mL) indica vaciamiento incompleto y riesgo de retención. La RM se usa ante sospecha de cáncer, y la TAC y la pielografía no son rutinarias.",
      "say": {
        "stem": "Hombre de setenta años con chorro débil, nicturia y próstata aumentada, lisa y elástica.",
        "question": "¿Qué imagen pides primero?",
        "options": "Las opciones: pielografía, resonancia de pelvis, cistografía, TAC con contraste o ecografía vésico prostática con residuo. Piénsalo.",
        "answer": "Es la E. Ecografía vésico prostática con residuo postmiccional. La resonancia es útil cuando se sospecha cáncer, no en una evaluación inicial de hiperplasia."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.5.007 · Tacto rectal para reconocimiento básico de crecimiento prostático",
      "stem": "Hombre de 68 años con nicturia y chorro débil. Se realiza tacto rectal para evaluar la próstata.",
      "question": "¿Cuál de los siguientes hallazgos es característico de la hiperplasia prostática benigna?",
      "options": [
        {
          "letter": "A",
          "text": "Próstata aumentada de tamaño, de superficie lisa, consistencia elástica y surco medio borrado"
        },
        {
          "letter": "B",
          "text": "Nódulo pétreo e irregular en un lóbulo"
        },
        {
          "letter": "C",
          "text": "Próstata muy dolorosa, caliente y fluctuante"
        },
        {
          "letter": "D",
          "text": "Próstata fija a planos profundos"
        },
        {
          "letter": "E",
          "text": "Próstata de tamaño normal con induración difusa"
        }
      ],
      "correct": "A",
      "explanation": "En la hiperplasia prostática benigna el tacto muestra una próstata aumentada de volumen, simétrica y lisa, de consistencia elástica (similar a la eminencia tenar) y con surco medio borrado. Un nódulo pétreo, irregular o fijo sugiere cáncer y obliga a biopsia aun con APE normal. Una próstata muy dolorosa sugiere prostatitis aguda, en la que no se debe masajear.",
      "say": {
        "stem": "Hombre de sesenta y ocho años con nicturia y chorro débil, al que le haces un tacto rectal.",
        "question": "¿Qué hallazgo es típico de hiperplasia benigna?",
        "options": "Las opciones: próstata grande, lisa, elástica y con surco borrado, nódulo pétreo, próstata dolorosa y fluctuante, próstata fija, o induración difusa. Piénsalo.",
        "answer": "Es la A. Una próstata aumentada, lisa, elástica y con surco medio borrado. El nódulo pétreo corresponde a cáncer y obliga a biopsia."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.4.007 · Ecotomografía de vejiga y próstata",
      "stem": "Hombre de 68 años con síntomas urinarios bajos obstructivos moderados (IPSS 18), tacto rectal con próstata aumentada de tamaño, lisa, elástica y sin nódulos. Creatinina normal.",
      "question": "¿Qué información principal aporta la ecotomografía vesical y prostática en este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Diagnóstico histológico de cáncer de próstata"
        },
        {
          "letter": "B",
          "text": "Volumen prostático, residuo postmiccional y repercusión vesical (engrosamiento de pared, divertículos, cálculos)"
        },
        {
          "letter": "C",
          "text": "Medición del flujo urinario máximo"
        },
        {
          "letter": "D",
          "text": "Presión del detrusor durante la micción"
        },
        {
          "letter": "E",
          "text": "Etapificación ganglionar"
        }
      ],
      "correct": "B",
      "explanation": "En la HPB, la ecografía vesicoprostática (suprapúbica) mide el volumen prostático, el residuo postmiccional y muestra repercusión vesical (vejiga de lucha, divertículos, litiasis); la ecografía renal descarta hidronefrosis. No diagnostica cáncer (requiere APE y biopsia) ni mide flujo (uroflujometría) ni presiones (urodinamia).",
      "say": {
        "stem": "Hombre de sesenta y ocho años con síntomas obstructivos moderados y próstata grande, lisa y sin nódulos.",
        "question": "¿Qué información principal aporta la ecografía de vejiga y próstata?",
        "options": "Las opciones: diagnóstico de cáncer, volumen prostático con residuo postmiccional y daño vesical, flujo urinario, presión del detrusor o compromiso ganglionar. Piénsalo.",
        "answer": "Es la B. Aporta el volumen de la próstata, el residuo después de orinar y el daño de la pared vesical. Medir el flujo tienta, pero eso lo hace la uroflujometría, no la ecografía."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.4.013 · Uroflujometría",
      "stem": "Hombre de 65 años con chorro débil y sensación de vaciamiento incompleto. Se realiza uroflujometría con volumen miccional de 250 mL.",
      "question": "¿Qué resultado sugiere obstrucción del tracto urinario inferior?",
      "options": [
        {
          "letter": "A",
          "text": "Flujo máximo (Qmáx) mayor de 15 mL/s con curva en campana"
        },
        {
          "letter": "B",
          "text": "Volumen miccional de 250 mL"
        },
        {
          "letter": "C",
          "text": "Flujo máximo menor de 10 mL/s con curva aplanada y prolongada"
        },
        {
          "letter": "D",
          "text": "Residuo postmiccional de 10 mL"
        },
        {
          "letter": "E",
          "text": "Tiempo miccional de 15 segundos"
        }
      ],
      "correct": "C",
      "explanation": "La uroflujometría mide el flujo urinario; es válida con volumen miccional mayor de 150 mL. Un Qmáx menor de 10 mL/s con curva aplanada y prolongada sugiere obstrucción (HPB, estenosis uretral) o hipocontractilidad del detrusor; mayor de 15 mL/s es normal. Para diferenciarlas se requiere estudio de flujo-presión.",
      "say": {
        "stem": "Hombre de sesenta y cinco años con chorro débil. Se hace una uroflujometría con un volumen orinado adecuado.",
        "question": "¿Qué resultado sugiere obstrucción?",
        "options": "Las opciones: flujo máximo sobre quince con curva en campana, volumen de doscientos cincuenta, flujo máximo bajo diez con curva aplanada y larga, residuo de diez o tiempo de quince segundos. Piénsalo.",
        "answer": "Es la C. Un flujo máximo menor de diez mililitros por segundo con curva aplanada sugiere obstrucción. La curva en campana con flujo sobre quince tienta por ser un dato concreto, pero es normal."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: hiperplasia prostática benigna',
      cards: [
        { title: 'Diagnóstico y fármacos', tag: 'Lo central', kind: 'key', items: [
          { t: 'Zona de transición; tacto fibroelástico', d: 'Nódulo duro: sospechar cáncer',
            say: 'Cerremos con las reglas de oro. La hiperplasia nace en la zona de transición, y al tacto la próstata es lisa y fibroelástica. Un nódulo duro es sospecha de cáncer.' },
          { t: 'Tamsulosina primero', d: 'Finasteride si más de 40 cc; APE por 2',
            say: 'En síntomas moderados a severos, parte la tamsulosina, que actúa en días. El finasteride se agrega si la próstata supera cuarenta centímetros cúbicos, y baja el APE a la mitad: se multiplica por dos.' },
        ] },
        { title: 'Cirugía', tag: 'Cuándo y cuál', kind: 'alert', items: [
          { t: 'Retención, ITU, litiasis, hematuria, daño renal', d: 'Indicaciones absolutas de cirugía',
            say: 'La cirugía se indica ante retención aguda recurrente, infecciones, litiasis vesical, hematuria recurrente o daño renal.' },
          { t: 'Técnica según el volumen', d: 'RTUP bajo 80 cc; sobre 80, abierta o láser',
            say: 'La RTUP es la técnica para próstatas menores de ochenta centímetros cúbicos. Sobre ese volumen, cirugía abierta o láser holmium. Si te llevas una sola idea de hoy: la tamsulosina alivia rápido, el finasteride reduce la próstata y baja el APE a la mitad, y la retención aguda es indicación de cirugía. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'HPB: de los síntomas al tratamiento',
    root: N('start', 'Hombre mayor con síntomas urinarios', 'Vaciado y llenado',
      'Un hombre mayor con chorro débil, nicturia y urgencia. Lo primero es el tacto rectal, el IPSS y los exámenes básicos, y mirar si hay una complicación.',
      ['Complicación orgánica', N('refer', 'Cirugía: derivar a urología', 'Retención, ITU, litiasis, hematuria, daño renal',
        'Si hay retención aguda recurrente, infecciones, litiasis vesical, hematuria recurrente o daño renal, la indicación es quirúrgica. Se elige la técnica según el volumen: RTUP bajo ochenta centímetros cúbicos, abierta o láser sobre ese volumen.')],
      ['Sin complicación', N('do', 'Tacto, IPSS, APE, creatinina', 'Nódulo duro: sospechar cáncer',
        'Sin complicaciones, se mide la gravedad con el IPSS. Un nódulo duro o un APE sospechoso es otra historia: se estudia por cáncer.',
        ['IPSS de 0 a 7', N('ok', 'Observación y hábitos', 'Menos líquidos de noche',
          'Con síntomas leves se observa, se reducen los líquidos nocturnos y se evitan cafeína, alcohol y anticolinérgicos.')],
        ['IPSS de 8 a 19', N('ok', 'Tamsulosina', 'Más 5-ARI si más de 40 cc',
          'Con síntomas moderados, tamsulosina. Si la próstata supera los cuarenta centímetros cúbicos, se agrega un inhibidor de la cinco alfa reductasa.')],
        ['IPSS de 20 a 35', N('ok', 'Tamsulosina más finasteride', 'Evaluar cirugía',
          'Con síntomas severos, terapia combinada de tamsulosina con finasteride, y se evalúa la necesidad de cirugía. Con finasteride, el APE se multiplica por dos.')],
      )],
    ),
  },
};
