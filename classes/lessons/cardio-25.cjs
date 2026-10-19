// Clase 4.4 (Cardiología) — Fiebre reumática, prevención y estenosis mitral reumática. Guion escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_4.cjs (cardio-25). Códigos y niveles (books/data/v3_codemap.json):
// 1.01.1.010 Estenosis mitral (Dx específico · Tx inicial · Seg derivar), 1.01.1.008 Enfermedad reumática activa (Dx específico ·
// Tx completo · Seg completo) y 1.01.3.005 Prevención de enfermedad reumática (conocimiento).
// Preguntas reales (class_questions.cjs cardio-25): Julio 2024 P128 (EM con FA, soplo diastólico), Agosto 2021 P158 (EM clásica con FA) y, para la
// prevención primaria, Agosto 2021 P28 (amigdalitis estreptocócica del escolar: amoxicilina). Enunciados y alternativas del banco.
// Descartadas: Julio 2017 P80 (el banco trae el enunciado cortado: sin datos clínicos); Diciembre 2025 P107 (amigdalitis del niño de 2 años:
// repite lo de Agosto 2021 P28); Diciembre 2025 P150 y Diciembre 2019 P180 (anticoagulación con prótesis mecánica y flutter: van en cardio-05 y
// cardio-04). El banco no trae ninguna pregunta de fiebre reumática ni de Jones: el caso clínico es de la clase.
// Fotos en contexto: eco de estenosis mitral reumática (Harrison 21.ª ed., p. 1890) y válvula mitral en «palo de hockey» (Harrison, p. 2808).
// No hay foto de eritema marginado ni de nódulos subcutáneos en el material fuente (anotado en FALTANTES_cardio_bloque_4.md).
// En movimiento: scenes/cardio_b4.html ?v=em (gradiente diastólico, ritmo de Duroziez y pérdida del refuerzo en FA), gráfico propio de código.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cardio-25',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'De la faringitis estreptocócica a la estenosis mitral: Jones, tratamiento, profilaxis y valvuloplastía',
      say: 'Bienvenido. Hoy vemos una enfermedad que atraviesa toda la medicina: la fiebre reumática. Un niño con dolor de garganta tratado a tiempo con una sola dosis de penicilina no la desarrolla. Y el que la sufre y deja la profilaxis termina, décadas después, con una estenosis mitral y una fibrilación auricular. Aprenderás los criterios de Jones, el tratamiento, los plazos de la profilaxis y la estenosis mitral.',
    },

    {
      type: 'flow',
      kicker: 'Patogenia',
      title: 'De la garganta al corazón',
      nodes: [
        { id: 'f', col: 0, row: 1, k: 'cause', t: 'Faringitis por estreptococo A', s: 'Niño de 5 a 15 años' },
        { id: 'm', col: 1, row: 1, k: 'mech', t: 'Mimetismo molecular', s: 'Proteína M ≈ miosina, válvula' },
        { id: 'r', col: 2, row: 1, k: 'effect', t: 'Fiebre reumática aguda', s: '2 a 4 semanas después' },
        { id: 'c', col: 3, row: 0, k: 'risk', t: 'Carditis', s: 'La única que deja secuela' },
        { id: 'o', col: 3, row: 2, k: 'good', t: 'Artritis, corea, eritema', s: 'Se curan sin secuela' },
        { id: 'e', col: 4, row: 0, k: 'alert', t: 'Estenosis mitral', s: 'Años o décadas después' },
      ],
      edges: [{ from: 'f', to: 'm' }, { from: 'm', to: 'r' }, { from: 'r', to: 'c' }, { from: 'r', to: 'o' }, { from: 'c', to: 'e' }],
      steps: [
        { show: ['f', 'm'], note: 'Un error del sistema inmune',
          say: 'La fiebre reumática es una enfermedad autoinmune. Aparece dos a cuatro semanas después de una faringoamigdalitis por estreptococo beta-hemolítico del grupo A, en un niño susceptible, entre cinco y quince años. Los anticuerpos contra la proteína M del estreptococo reaccionan de forma cruzada con la miosina del corazón, la válvula, la sinovia y los ganglios basales. Eso se llama mimetismo molecular.' },
        { show: ['r', 'c', 'o'], note: 'Solo la carditis deja secuelas',
          say: 'El resultado es una inflamación de varios sistemas. La artritis, la corea, el eritema marginado y los nódulos se curan sin dejar huella. La carditis es la única que deja secuelas permanentes.' },
        { show: ['e'], note: 'La secuela es la válvula mitral',
          say: 'Y la válvula que casi siempre se daña es la mitral. Años o décadas después, las valvas se engrosan, las comisuras se fusionan y aparece la estenosis mitral. Más del noventa por ciento de las estenosis mitrales son reumáticas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico · 1.01.1.008',
      title: 'Criterios de Jones: la regla',
      cards: [
        { title: 'La regla diagnóstica', tag: 'Se pregunta tal cual', kind: 'criteria', items: [
          { t: 'Evidencia de estreptococo previo', d: 'ASLO, anti-DNasa B, cultivo o test rápido',
            say: 'No hay un examen que confirme la fiebre reumática. Se usan los criterios de Jones. Primero, tiene que haber evidencia de una infección estreptocócica previa: un título de antiestreptolisina O, o de anti-DNasa B, elevado o en ascenso, un cultivo o test rápido faríngeo positivo, o una escarlatina reciente.' },
          { t: 'Dos mayores, o un mayor y dos menores', d: 'En la recurrencia, criterios más laxos',
            say: 'Y además dos criterios mayores, o uno mayor y dos menores. En una recurrencia basta con dos mayores, un mayor y un menor, o tres menores.' },
          { t: 'Excepción: corea y carditis indolente', d: 'Sin evidencia estreptocócica',
            say: 'Hay una excepción: la corea de Sydenham y la carditis indolente pueden diagnosticarse sin evidencia de estreptococo, porque aparecen meses después de la infección.' },
        ] },
        { title: 'Criterios menores', tag: 'Inespecíficos', kind: 'normal', items: [
          { t: 'Fiebre y artralgias', d: 'Fiebre ≥ 38,5 °C en riesgo bajo; ≥ 38 en riesgo alto',
            say: 'Los criterios menores son la fiebre, de treinta y ocho coma cinco grados o más en poblaciones de bajo riesgo y de treinta y ocho en las de alto riesgo, y las artralgias, que solo cuentan si la artritis no se usó como criterio mayor.' },
          { t: 'VSG o PCR elevadas · PR largo', d: 'VHS ≥ 60 o PCR ≥ 3 mg/dL',
            say: 'Los reactantes de fase aguda elevados, con velocidad de sedimentación de sesenta o más, o proteína C reactiva de tres miligramos por decilitro o más, y un intervalo PR prolongado en el electrocardiograma, si no hay carditis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios mayores',
      title: 'Carditis y poliartritis',
      cards: [
        { title: 'Carditis', tag: 'La más grave', kind: 'alert', items: [
          { t: 'Pancarditis: endocardio, miocardio, pericardio', d: 'Clínica o subclínica por eco',
            say: 'La carditis es el criterio mayor más grave. Es una pancarditis. El endocardio, con la valvulitis, produce una insuficiencia mitral: un soplo holosistólico apical, y a veces un soplo mesodiastólico de Carey Coombs. El miocardio, con insuficiencia cardíaca y taquicardia desproporcionada a la fiebre. Y el pericardio, con un roce. Puede ser subclínica, y se detecta con ecocardiograma.' },
          { t: 'Soplo apical nuevo + PR largo', d: 'Siempre pedir ecocardiograma',
            say: 'Por eso, en todo paciente con sospecha de fiebre reumática se pide ecocardiograma, aunque no haya soplo.' },
        ] },
        { title: 'Poliartritis migratoria', tag: 'Muy sensible a aspirina', kind: 'key', items: [
          { t: 'Grandes articulaciones, migratoria', d: 'Rodillas, tobillos, codos, muñecas',
            say: 'La poliartritis migratoria afecta las articulaciones grandes: rodillas, tobillos, codos y muñecas. Es muy dolorosa, pasa de una articulación a otra, y cede con rapidez con aspirina. Esa respuesta casi la diagnostica.' },
          { t: 'No deja secuelas', d: 'Descartar artritis séptica',
            say: 'No deja secuelas. Sí hay que descartar la artritis séptica, que es de una sola articulación, muy caliente, y se punciona.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios mayores',
      title: 'Corea, eritema marginado y nódulos',
      cards: [
        { title: 'Corea de Sydenham', tag: 'Aparece meses después', kind: 'key', items: [
          { t: 'Movimientos involuntarios', d: 'Bruscos, hipotonía y labilidad emocional',
            say: 'La corea de Sydenham aparece uno a seis meses después de la infección. Son movimientos involuntarios, bruscos e irregulares, con hipotonía muscular y labilidad emocional. Cede en semanas a meses y no responde a los antiinflamatorios.' },
        ] },
        { title: 'Piel', tag: 'Poco frecuentes', kind: 'criteria', items: [
          { t: 'Eritema marginado', d: 'Tronco y raíz de miembros; nunca la cara',
            say: 'El eritema marginado son lesiones rosadas, de borde nítido y centro claro, que van y vienen, en el tronco y la raíz de los miembros, nunca en la cara.' },
          { t: 'Nódulos subcutáneos', d: 'Indoloros, superficies extensoras; carditis grave',
            say: 'Y los nódulos subcutáneos, indoloros, sobre las superficies de extensión de las articulaciones, que se asocian a carditis grave.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Resumen',
      title: 'Jones: qué es cada criterio',
      head: ['Criterio', 'Qué buscar', 'Pista de examen'],
      rows: [
        { cells: ['Carditis', 'Soplo apical nuevo, PR largo, eco', 'La única que deja secuela'],
          say: 'La carditis: soplo apical nuevo, intervalo PR largo o hallazgos en el ecocardiograma. Es la única que deja secuela.' },
        { cells: ['Poliartritis migratoria', 'Grandes articulaciones, pasa de una a otra', 'Cede con aspirina'],
          say: 'La poliartritis migratoria de las articulaciones grandes, que cede con aspirina.' },
        { cells: ['Corea de Sydenham', 'Movimientos involuntarios, labilidad', 'Aparece meses después, sin evidencia de estreptococo'],
          say: 'La corea de Sydenham, que aparece meses después y se acepta sin evidencia estreptocócica.' },
        { cells: ['Eritema marginado', 'Anillos rosados en tronco', 'Nunca en la cara'],
          say: 'El eritema marginado, en el tronco, nunca en la cara.' },
        { cells: ['Nódulos subcutáneos', 'Indoloros sobre extensores', 'Se asocian a carditis grave'],
          say: 'Y los nódulos subcutáneos, indoloros, asociados a carditis grave.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento · tratamiento completo',
      title: 'Cuatro pilares',
      cards: [
        { title: 'Erradicar y antiinflamar', tag: 'Todo paciente', kind: 'pharma', items: [
          { t: 'Penicilina benzatina 1.200.000 UI IM', d: 'Dosis única; 600.000 si < 27 kg',
            say: 'Todo paciente con fiebre reumática se hospitaliza, se hace reposo y se erradica el estreptococo, aunque el cultivo sea negativo: penicilina benzatina, un millón doscientas mil unidades por vía intramuscular, en dosis única, o seiscientas mil si pesa menos de veintisiete kilos. Alternativa: amoxicilina diez días. En alérgicos, un macrólido.' },
          { t: 'Aspirina 80-100 mg/kg/día', d: 'Para la artritis y la fiebre',
            say: 'Para la artritis y la fiebre, aspirina, ochenta a cien miligramos por kilo al día, repartidos en cuatro dosis, hasta resolver los síntomas, y luego se reduce en cuatro a seis semanas.' },
        ] },
        { title: 'Carditis y corea', tag: 'Según gravedad', kind: 'alert', items: [
          { t: 'Prednisona 1-2 mg/kg/día', d: 'Carditis moderada o grave, 2-4 semanas',
            say: 'Si la carditis es moderada o grave, con cardiomegalia, insuficiencia cardíaca o bloqueo, se agrega prednisona, uno a dos miligramos por kilo al día, por dos a cuatro semanas, con descenso gradual. En la insuficiencia cardíaca, diuréticos e IECA.' },
          { t: 'Corea: valproato o carbamazepina', d: 'Haloperidol si es grave',
            say: 'Para la corea, ácido valproico o carbamazepina, y haloperidol en los casos graves. La aspirina no la modifica. Y todo paciente sale con profilaxis secundaria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención · 1.01.3.005',
      title: 'Primaria y secundaria',
      cards: [
        { title: 'Prevención primaria', tag: 'En el SAPU', kind: 'key', items: [
          { t: 'Tratar la faringitis estreptocócica', d: 'En ≤ 9 días del inicio',
            say: 'La prevención primaria es tratar a tiempo la faringoamigdalitis estreptocócica. Sirve si se inicia dentro de los nueve días desde el comienzo de los síntomas. Se sospecha en un niño de cinco a quince años con fiebre, odinofagia intensa, exudado y adenopatías dolorosas, sin tos ni coriza.' },
          { t: 'Penicilina benzatina o amoxicilina 10 días', d: 'Macrólido si hay alergia',
            say: 'El tratamiento es penicilina benzatina intramuscular en dosis única, o amoxicilina por diez días. En alérgicos, un macrólido. Esa dosis única es la medida más efectiva de salud pública contra la fiebre reumática.' },
        ] },
        { title: 'Prevención secundaria', tag: 'Cada 3-4 semanas', kind: 'pharma', items: [
          { t: 'Penicilina benzatina 1.200.000 UI IM', d: 'Cada 3 a 4 semanas',
            say: 'Todo paciente con fiebre reumática confirmada recibe penicilina benzatina, un millón doscientas mil unidades, cada tres a cuatro semanas. Y la duración depende de la gravedad.' },
          { t: 'Sin carditis: 5 años o hasta los 21', d: 'Lo que dure más',
            say: 'Sin carditis, cinco años o hasta los veintiún años de edad, lo que dure más.' },
          { t: 'Con carditis: 10 años o hasta los 21; con secuela: hasta los 40', d: 'A veces de por vida',
            say: 'Con carditis sin secuela valvular, diez años o hasta los veintiuno. Y con valvulopatía residual, diez años o hasta los cuarenta años, a veces de por vida.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Profilaxis secundaria',
      title: 'Cuánto tiempo, según lo que quedó',
      head: ['Situación', 'Duración mínima', 'Fármaco'],
      rows: [
        { cells: ['Fiebre reumática sin carditis', '5 años o hasta los 21 años', 'Penicilina benzatina cada 3-4 semanas'],
          say: 'Fiebre reumática sin carditis: cinco años o hasta los veintiún años, lo que dure más.' },
        { cells: ['Carditis sin secuela valvular', '10 años o hasta los 21 años', 'Penicilina benzatina cada 3-4 semanas'],
          say: 'Carditis sin secuela: diez años o hasta los veintiún años.' },
        { cells: ['Valvulopatía residual', '10 años o hasta los 40 años', 'A veces de por vida'],
          say: 'Valvulopatía residual: diez años o hasta los cuarenta años, y a veces de por vida.' },
        { cells: ['Alergia a la penicilina', 'Igual duración', 'Penicilina V oral, sulfadiazina o macrólido'],
          say: 'Si es alérgico a la penicilina, la misma duración con penicilina V oral, sulfadiazina o un macrólido.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Estenosis mitral',
      title: 'Del orificio estrecho a la fibrilación',
      nodes: [
        { id: 'o', col: 0, row: 1, k: 'cause', t: 'Valvas fusionadas', s: 'Orificio < 4-6 cm² normal' },
        { id: 'g', col: 1, row: 1, k: 'mech', t: 'Gradiente diastólico AI → VI', s: 'La aurícula se dilata' },
        { id: 'p', col: 2, row: 0, k: 'effect', t: 'Congestión pulmonar', s: 'Disnea, hemoptisis, HTP' },
        { id: 'a', col: 2, row: 2, k: 'effect', t: 'Fibrilación auricular', s: 'Embolias sistémicas' },
        { id: 't', col: 3, row: 1, k: 'trap', t: 'Taquicardia descompensa', s: 'Embarazo, fiebre, FA rápida' },
        { id: 'v', col: 4, row: 1, k: 'good', t: 'VI normal', s: 'No se dilata' },
      ],
      edges: [{ from: 'o', to: 'g' }, { from: 'g', to: 'p' }, { from: 'g', to: 'a' }, { from: 'p', to: 't' }, { from: 'a', to: 't' }, { from: 't', to: 'v' }],
      steps: [
        { show: ['o', 'g'], note: 'Un orificio que no deja pasar',
          say: 'La estenosis mitral reumática parte con las valvas engrosadas y las comisuras fusionadas. El orificio normal mide entre cuatro y seis centímetros cuadrados, y se estrecha. Para que la sangre pase de la aurícula al ventrículo se necesita un gradiente en diástole, y la aurícula izquierda se dilata.' },
        { show: ['p', 'a'], note: 'Congestión y fibrilación',
          say: 'La presión de la aurícula sube hacia los pulmones: disnea, ortopnea, edema pulmonar, hemoptisis y, con el tiempo, hipertensión pulmonar. Y la aurícula dilatada fibrila: la fibrilación auricular aparece en treinta a cuarenta por ciento y produce embolias sistémicas.' },
        { show: ['t', 'v'], note: 'La taquicardia descompensa; el VI está normal',
          say: 'La taquicardia acorta la diástole y descompensa al paciente: el embarazo, la fiebre o una fibrilación con respuesta rápida pueden provocar un edema pulmonar. Y algo característico: el ventrículo izquierdo no se dilata, es normal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología',
      title: 'El ritmo de Duroziez',
      cards: [
        { title: 'Cuatro componentes', tag: 'Clásico', kind: 'criteria', items: [
          { t: 'R1 brillante', d: 'Valvas rígidas pero móviles',
            say: 'La semiología de la estenosis mitral tiene cuatro componentes, y es el llamado ritmo de Duroziez. Primero, un primer ruido brillante, por el cierre enérgico de valvas rígidas, pero todavía móviles.' },
          { t: 'Sístole limpia', d: 'Sin soplo',
            say: 'Segundo, una sístole limpia, sin soplo.' },
          { t: 'Chasquido de apertura tras R2', d: 'Más cerca de R2 = más grave',
            say: 'Tercero, después del segundo ruido, un chasquido de apertura. Mientras más cerca está del segundo ruido, más severa es la estenosis.' },
          { t: 'Retumbo con refuerzo presistólico', d: 'Ápex, decúbito lateral izquierdo',
            say: 'Y cuarto, un retumbo diastólico grave con refuerzo presistólico, en el ápex, con el paciente de lado sobre el lado izquierdo y con la campana del estetoscopio.' },
        ] },
        { title: 'Diferencias que se preguntan', tag: 'EM frente a IAo', kind: 'alert', items: [
          { t: 'El refuerzo desaparece en la FA', d: 'Pulso irregular y deficitario',
            say: 'Si el paciente está en fibrilación auricular, el refuerzo presistólico desaparece, porque se pierde la contracción de la aurícula. El pulso es irregular y deficitario.' },
          { t: 'Pulso pequeño, presión normal', d: 'No hay presión de pulso amplia',
            say: 'El pulso es pequeño y la presión es normal o baja. A diferencia de la insuficiencia aórtica, no hay presión de pulso amplia. Y puede haber rubicundez de las mejillas, la facies mitral.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'El gradiente, el chasquido y la fibrilación',
      images: [
        { src: 'animaciones/cardio-25/A1_em_ritmo_de_duroziez.mp4', label: 'Ritmo de Duroziez y fibrilación auricular', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Gradiente diastólico y los sonidos',
          say: 'Mira arriba las presiones de la aurícula, en violeta, y del ventrículo, en rojo. En diástole la aurícula tiene mucha más presión que el ventrículo: esa zona sombreada es el gradiente diastólico. Abajo está el fonocardiograma: el primer ruido intenso, el segundo ruido, el chasquido de apertura y el retumbo diastólico con su refuerzo antes del siguiente primer ruido.' },
        { note: 'Con FA desaparece el refuerzo',
          say: 'Ahora el paciente entra en fibrilación auricular: el ritmo se hace irregular y el refuerzo presistólico desaparece. En ese momento hay que anticoagular.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio',
      title: 'Qué muestra el ecocardiograma',
      cards: [
        { title: 'Ecocardiograma', tag: 'Diagnóstico y severidad', kind: 'key', items: [
          { t: 'Valvas engrosadas con domo', d: 'Aurícula izquierda dilatada',
            say: 'El ecocardiograma confirma el diagnóstico. Mira esta imagen de una estenosis mitral reumática: las valvas se mueven, pero quedan pegadas en las puntas, y la aurícula izquierda está muy dilatada. A la derecha, la vista en tres dimensiones muestra el orificio en forma de boca de pez.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-25/01_estenosis-mitral-reumatica-eco-y-3d__harrison_p1890.jpg', label: 'Eco: estenosis mitral', at: 'Mira esta imagen', credit: 'Harrison, Principios de Medicina Interna, 21.ª ed., p. 1890' } },
          { t: 'Área mitral ≤ 1,5 cm²', d: 'PSAP > 50 mmHg = repercusión',
            say: 'Se mide el área valvular, que si es de uno coma cinco centímetros cuadrados o menos es una estenosis significativa. Una presión pulmonar mayor de cincuenta milímetros de mercurio indica repercusión.' },
        ] },
        { title: 'Anatomía', tag: 'Puntaje de Wilkins', kind: 'criteria', items: [
          { t: 'Wilkins ≤ 8: favorable', d: 'Movilidad, grosor, calcio, subvalvular',
            say: 'Se calcula el puntaje de Wilkins, que suma de uno a cuatro puntos para la movilidad, el engrosamiento, la calcificación y el aparato subvalvular. Con ocho o menos, la anatomía es favorable para el balón.' },
          { t: 'Palo de hockey en la cardiopatía reumática', d: 'Valva anterior se abomba hacia el septo',
            say: 'La cardiopatía reumática deja un aspecto típico. En esta imagen la valva anterior de la mitral está engrosada y se abomba hacia el septo en diástole, la deformidad en palo de hockey.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-25/02_cardiopatia-reumatica-valva-mitral-palo-de-hockey__harrison_p2808.jpg', label: 'Mitral en palo de hockey', at: 'En esta imagen', credit: 'Harrison, Principios de Medicina Interna, 21.ª ed., p. 2808' } },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Severidad',
      title: 'Estenosis mitral: gravedad y conducta',
      head: ['Parámetro', 'Leve', 'Moderada', 'Severa o intervenir'],
      rows: [
        { cells: ['Área valvular', '> 1,5 cm²', '1,0 a 1,5 cm²', '< 1,0 cm²; guías actuales ≤ 1,5'],
          say: 'El área valvular: leve, más de uno coma cinco centímetros cuadrados; moderada, de uno a uno coma cinco; severa, menos de uno. Las guías actuales consideran significativa un área de uno coma cinco o menos.' },
        { cells: ['Gradiente medio', '< 5 mmHg', '5 a 10 mmHg', '> 10 mmHg'],
          say: 'El gradiente medio: leve, menos de cinco; moderada, de cinco a diez; severa, más de diez milímetros de mercurio.' },
        { cells: ['PSAP', '< 30 mmHg', '30 a 50 mmHg', '> 50 mmHg'],
          say: 'La presión pulmonar: más de cincuenta indica repercusión, y es motivo de intervenir aunque no haya síntomas.' },
        { cells: ['Wilkins', '≤ 8: balón', '9 a 11: según el caso', '≥ 12 o trombo: cirugía'],
          say: 'Y el puntaje de Wilkins: ocho o menos, balón; de nueve a once, según el caso; doce o más, o trombo en la aurícula, cirugía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Médico, anticoagulación e intervención',
      cards: [
        { title: 'Siempre', tag: 'Alargar la diástole', kind: 'pharma', items: [
          { t: 'Control de frecuencia', d: 'Betabloqueador, verapamilo o digoxina en FA',
            say: 'El tratamiento médico busca alargar la diástole, con control de la frecuencia: betabloqueador, verapamilo o diltiazem, y digoxina si hay fibrilación auricular. Diuréticos si hay congestión.' },
          { t: 'Acenocumarol o warfarina, INR 2 a 3', d: 'Si hay FA, trombo o embolia previa',
            say: 'La anticoagulación oral es obligatoria si hay fibrilación auricular, trombo en la aurícula o una embolia previa, con acenocumarol o warfarina, y un INR de dos a tres. Los anticoagulantes orales directos no se recomiendan en la estenosis mitral reumática moderada a grave.' },
        ] },
        { title: 'Intervención', tag: 'Sintomática y significativa', kind: 'alert', items: [
          { t: 'Valvuloplastía con balón de Inoue', d: 'Wilkins ≤ 8, sin trombo ni IM > 2+',
            say: 'La estenosis significativa con síntomas se interviene. La valvuloplastía mitral percutánea con balón, técnica de Inoue, es de elección si la anatomía es favorable: puntaje de Wilkins de ocho o menos, sin trombo en la aurícula y sin insuficiencia mitral moderada o grave.' },
          { t: 'Cirugía si la anatomía no es favorable', d: 'Comisurotomía o reemplazo',
            say: 'Si la anatomía no es favorable, o hay otra lesión asociada, se hace cirugía: comisurotomía o reemplazo valvular. La prótesis mecánica exige acenocumarol de por vida. Y en la embarazada con estenosis grave, se da betabloqueador y diuréticos, y balón si persiste sintomática.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la faringitis a la intervención mitral.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Fiebre reumática y estenosis mitral: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Faringitis estreptocócica del escolar', 'Penicilina benzatina o amoxicilina', 'Penicilina sódica endovenosa'],
          say: 'Faringitis estreptocócica del escolar: penicilina benzatina o amoxicilina. La penicilina sódica es endovenosa y no se usa en la amigdalitis ambulatoria.' },
        { cells: ['Artritis migratoria + soplo apical + ASLO alto', 'Fiebre reumática: Jones', 'Artritis séptica o reumatoide'],
          say: 'Artritis migratoria con un soplo apical nuevo y antiestreptolisina elevada: fiebre reumática. No es una artritis séptica ni una artritis reumatoide.' },
        { cells: ['Corea meses después de una faringitis', 'Criterio mayor, sin evidencia estreptocócica', 'Exigir ASLO elevada'],
          say: 'Corea meses después de una faringitis es criterio mayor, sin necesidad de evidencia de estreptococo. Exigir una antiestreptolisina elevada es el error.' },
        { cells: ['Carditis con secuela valvular', 'Profilaxis hasta los 40 años', 'Suspender a los 21 años'],
          say: 'Carditis con secuela valvular: profilaxis diez años o hasta los cuarenta. Suspenderla a los veintiún años es el error.' },
        { cells: ['Mujer con FA, disnea y retumbo diastólico', 'Estenosis mitral', 'Estenosis aórtica'],
          say: 'Mujer con fibrilación auricular, disnea y un retumbo diastólico: estenosis mitral. No una estenosis aórtica.' },
        { cells: ['EM con FA', 'Acenocumarol, INR 2-3', 'Anticoagulante oral directo'],
          say: 'Estenosis mitral con fibrilación auricular: acenocumarol con INR de dos a tres. Los anticoagulantes orales directos no se recomiendan.' },
        { cells: ['EM sintomática, Wilkins 6', 'Valvuloplastía con balón', 'Reemplazo valvular o solo furosemida'],
          say: 'Estenosis mitral sintomática con puntaje de Wilkins de seis: valvuloplastía con balón. Reemplazar la válvula o dar solo furosemida es el error.' },
        { cells: ['EM nativa y extracción dental', 'Sin profilaxis de endocarditis', 'Amoxicilina de rutina'],
          say: 'Y la estenosis mitral nativa que va a una extracción dental no necesita profilaxis de endocarditis.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 42 años, con antecedente de amigdalitis a repetición en la infancia y de «reumatismo» a los 11 años del que no recibió profilaxis, consulta por disnea de esfuerzo progresiva y palpitaciones de 3 meses. Pulso irregular y deficitario de 110 lpm, PA 105/70 mmHg. Primer ruido muy acentuado, sístole limpia y, tras el segundo ruido, un chasquido seguido de un retumbo diastólico apical, audible en decúbito lateral izquierdo. ECG: fibrilación auricular. Eco: valvas engrosadas con abombamiento diastólico, área valvular de 1,1 cm², Wilkins 6 y sin trombo en la aurícula.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Digoxina y apixabán, y control en 6 meses' },
        { letter: 'B', text: 'Control de frecuencia, acenocumarol (INR 2-3) y derivar para valvuloplastía con balón' },
        { letter: 'C', text: 'Reemplazo valvular mitral con prótesis mecánica' },
        { letter: 'D', text: 'Amoxicilina como profilaxis de endocarditis' },
        { letter: 'E', text: 'Cardioversión eléctrica sin anticoagular' },
      ],
      correct: 'B',
      explanation: 'Estenosis mitral reumática significativa con el ritmo de Duroziez, complicada con fibrilación auricular (el refuerzo presistólico desaparece). Control de la frecuencia, anticoagulación con acenocumarol o warfarina con INR 2-3 (no con anticoagulantes directos) y, por ser sintomática con anatomía favorable (Wilkins ≤ 8, sin trombo ni insuficiencia mitral significativa), valvuloplastía con balón de Inoue, derivada a cardiología. Debió mantener la profilaxis secundaria con penicilina benzatina.',
      say: {
        stem: 'Una mujer de cuarenta y dos años tuvo amigdalitis a repetición y un reumatismo a los once años, sin profilaxis. Consulta por disnea de esfuerzo y palpitaciones. El pulso es irregular y deficitario. Tiene primer ruido acentuado, un chasquido tras el segundo ruido y un retumbo diastólico apical. El electrocardiograma muestra fibrilación auricular. El ecocardiograma muestra valvas engrosadas, área de uno coma uno centímetros cuadrados, puntaje de Wilkins de seis y sin trombo.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: digoxina y apixabán; control de frecuencia, acenocumarol y derivar para valvuloplastía con balón; reemplazo valvular mecánico; amoxicilina; o cardioversión sin anticoagular. Piénsalo.',
        answer: 'Es la B. Es una estenosis mitral reumática con fibrilación auricular: se controla la frecuencia, se anticoagula con acenocumarol y se deriva para valvuloplastía, porque el puntaje de Wilkins es de seis. La A tienta porque anticoagula, pero los anticoagulantes orales directos no se recomiendan en la estenosis mitral reumática. Y la C es excesiva con una anatomía favorable.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 128',
      stem: 'Un paciente de 70 años consulta por disnea de medianos esfuerzos progresiva, asociada a ortopnea. Al examen físico tiene frecuencia cardíaca: 78 lpm, presión arterial: 130/80 mmHg, examen pulmonar con murmullo vesicular conservado y presencia de crépitos bibasales, examen cardíaco con ritmo irregular en dos tiempos, con presencia de soplo diastólico. Se palpa el choque de la punta en el quinto espacio intercostal línea medioclavicular y se observa edema en extremidades inferiores con signo de la fóvea. Su electrocardiograma muestra fibrilación auricular con respuesta ventricular controlada.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Estenosis aórtica' },
        { letter: 'B', text: 'Estenosis pulmonar' },
        { letter: 'C', text: 'Estenosis mitral' },
        { letter: 'D', text: 'Insuficiencia aórtica' },
        { letter: 'E', text: 'Insuficiencia pulmonar' },
      ],
      correct: 'C',
      explanation: 'Disnea progresiva y ortopnea con fibrilación auricular y un soplo diastólico, sin cardiomegalia izquierda marcada: estenosis mitral. La estenosis aórtica da un soplo sistólico, y la insuficiencia aórtica, un soplo diastólico con presión de pulso amplia. La fibrilación auricular, por la dilatación de la aurícula izquierda, es la complicación más frecuente y la que precipita la insuficiencia cardíaca.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un hombre de setenta años tiene disnea progresiva y ortopnea. El ritmo es irregular, con un soplo diastólico. El choque de la punta está en su lugar, hay crépitos en las bases y edema de las piernas. El electrocardiograma muestra fibrilación auricular con respuesta ventricular controlada.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: estenosis aórtica; estenosis pulmonar; estenosis mitral; insuficiencia aórtica; o insuficiencia pulmonar. Piénsalo.',
        answer: 'Es la C. Un soplo diastólico con fibrilación auricular y un choque de la punta que no está desplazado orienta a estenosis mitral: la aurícula se dilata y el ventrículo queda normal. La D tienta porque también es un soplo diastólico, pero la insuficiencia aórtica tiene presión de pulso amplia y el choque desplazado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 158',
      stem: 'Un paciente de 58 años presenta disnea de medianos esfuerzos y astenia. Al examen físico tiene FC: 70 lpm, PA: 120/80 mmHg, examen cardíaco con choque de la punta en el quinto espacio intercostal, línea medioclavicular y auscultación con un soplo diastólico. Al examen pulmonar se constata murmullo pulmonar presente, con crepitaciones basales escasas. Su electrocardiograma muestra fibrilación auricular, con respuesta ventricular de 70 latidos por minuto.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Estenosis aórtica' },
        { letter: 'B', text: 'Insuficiencia aórtica' },
        { letter: 'C', text: 'Estenosis tricuspídea' },
        { letter: 'D', text: 'Estenosis mitral' },
        { letter: 'E', text: 'Comunicación interventricular' },
      ],
      correct: 'D',
      explanation: 'La estenosis mitral clásica: soplo diastólico, fibrilación auricular y ventrículo izquierdo de tamaño normal con aurícula izquierda crecida. Con la fibrilación auricular se pierde el refuerzo presistólico del retumbo, y obliga a anticoagular con antagonistas de la vitamina K.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un hombre de cincuenta y ocho años tiene disnea de medianos esfuerzos y astenia. El choque de la punta está en el quinto espacio intercostal, se ausculta un soplo diastólico y hay crepitaciones basales escasas. El electrocardiograma muestra fibrilación auricular.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: estenosis aórtica; insuficiencia aórtica; estenosis tricuspídea; estenosis mitral; o comunicación interventricular. Piénsalo.',
        answer: 'Es la D. Soplo diastólico más fibrilación auricular y un ventrículo de tamaño normal: estenosis mitral clásica. La B tienta por el soplo diastólico, pero la insuficiencia aórtica tiene el choque desplazado y presión de pulso amplia, y no suele dar fibrilación auricular como primer hallazgo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 28',
      stem: 'Un niño de 8 años presenta odinofagia intensa, de 48 horas de evolución, asociada a malestar general, fiebre hasta 39ºC, dolor abdominal y vómitos. Al examen físico está hidratado, con FC: 100x’, FR: 15x’, Tº: 38,7ºC; se aprecia faringe congestiva y eritematosa, amígdalas con exudado blanquecino y se palpan múltiples adenopatías dolorosas en la cara anterior del cuello. El examen pulmonar es normal. Se solicita test pack rápido para estreptococo A, que resulta positivo.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Penicilina sódica' },
        { letter: 'B', text: 'Cefadroxilo' },
        { letter: 'C', text: 'Ciprofloxacino' },
        { letter: 'D', text: 'Amoxicilina' },
        { letter: 'E', text: 'Clindamicina' },
      ],
      correct: 'D',
      explanation: 'Un escolar con odinofagia intensa, fiebre alta, exudado amigdalino, adenopatías dolorosas y sin síntomas catarrales tiene una amigdalitis estreptocócica y se trata con amoxicilina o penicilina benzatina. Este tratamiento es la prevención primaria de la fiebre reumática. La penicilina sódica es endovenosa y no se usa en la amigdalitis ambulatoria.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un niño de ocho años tiene dos días de odinofagia intensa, fiebre de treinta y nueve grados, dolor abdominal y vómitos. Tiene la faringe roja, las amígdalas con exudado y adenopatías cervicales dolorosas. El test rápido para estreptococo A es positivo.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: penicilina sódica; cefadroxilo; ciprofloxacino; amoxicilina; o clindamicina. Piénsalo.',
        answer: 'Es la D. Es una amigdalitis estreptocócica, y tratarla con amoxicilina, o con penicilina benzatina, es la prevención primaria de la fiebre reumática. La A tienta porque es penicilina, pero la sódica es endovenosa y no se usa en la amigdalitis ambulatoria.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: fiebre reumática y estenosis mitral',
      cards: [
        { title: 'Fiebre reumática', tag: 'Diagnóstico y prevención', kind: 'key', items: [
          { t: 'Estreptococo previo + 2 mayores, o 1 + 2 menores', d: 'Corea y carditis indolente: excepción',
            say: 'Cerremos con las reglas de oro. La fiebre reumática se diagnostica con evidencia de estreptococo previo más dos criterios mayores, o uno mayor y dos menores. La corea y la carditis indolente son la excepción.' },
          { t: 'Benzatina, aspirina; prednisona si carditis', d: 'Profilaxis cada 3-4 semanas',
            say: 'Se trata con penicilina benzatina y aspirina, y prednisona si la carditis es moderada o grave. La profilaxis secundaria es cada tres a cuatro semanas: cinco años o hasta los veintiuno sin carditis, y hasta los cuarenta si quedó secuela.' },
        ] },
        { title: 'Estenosis mitral', tag: 'Examen y manejo', kind: 'alert', items: [
          { t: 'R1 intenso, chasquido, retumbo', d: 'El refuerzo desaparece en FA',
            say: 'La estenosis mitral tiene primer ruido intenso, chasquido de apertura y retumbo diastólico, con refuerzo que desaparece en fibrilación auricular.' },
          { t: 'FA: acenocumarol; Wilkins ≤ 8: balón', d: 'Sin anticoagulantes directos',
            say: 'Con fibrilación auricular se anticoagula con acenocumarol, sin anticoagulantes directos, y si es sintomática con puntaje de Wilkins de ocho o menos, se hace valvuloplastía con balón. Si te llevas una sola idea de hoy: una dosis de penicilina a tiempo evita décadas de enfermedad valvular. Nos vemos en la próxima clase, con la insuficiencia mitral y el prolapso.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fiebre reumática y estenosis mitral: de la faringitis a la válvula',
    root: N('start', 'Faringitis por estreptococo A', 'Niño de 5 a 15 años',
      'Un niño de cinco a quince años con una faringoamigdalitis estreptocócica. De lo que hagas en esta primera consulta depende que desarrolle o no una fiebre reumática.',
      ['Tratado a tiempo', N('ok', 'Penicilina benzatina o amoxicilina', 'Dosis única o diez días',
        'Con penicilina benzatina en dosis única, o amoxicilina por diez días, dentro de los nueve días del inicio, no se desarrolla la fiebre reumática. Es la prevención primaria.')],
      ['Semanas después: artritis, soplo, corea', N('alert', 'Fiebre reumática aguda', 'Jones: estreptococo previo + 2 mayores o 1 + 2 menores',
        'Si semanas después aparece una artritis migratoria, un soplo apical nuevo, una corea o un eritema marginado, aplicas los criterios de Jones y pides un ecocardiograma. Se hospitaliza, se erradica el estreptococo con penicilina benzatina, se trata la artritis con aspirina y, si la carditis es moderada o grave, se agrega prednisona.',
        ['Al alta', N('do', 'Profilaxis secundaria', 'Benzatina cada 3-4 semanas, 5 a 40 años',
          'Todos salen con profilaxis secundaria: penicilina benzatina cada tres a cuatro semanas, cinco años o hasta los veintiuno sin carditis, y diez años o hasta los cuarenta si quedó una secuela valvular.')],
      )],
      ['Décadas después: soplo diastólico + FA', N('q', 'Estenosis mitral', 'Eco: área, Wilkins y trombo',
        'Años o décadas después aparece la estenosis mitral, con disnea y fibrilación auricular. Se estudia con ecocardiograma: área valvular, puntaje de Wilkins y trombo en la aurícula, y se anticoagula con acenocumarol si hay fibrilación.',
        ['Wilkins ≤ 8, sin trombo', N('ok', 'Valvuloplastía con balón', 'Inoue',
          'Si la anatomía es favorable, valvuloplastía percutánea con balón.')],
        ['Desfavorable o trombo', N('refer', 'Cirugía mitral', 'Comisurotomía o reemplazo',
          'Si la anatomía no es favorable o hay trombo, cirugía mitral, con reemplazo valvular o comisurotomía.')],
      )],
    ),
  },
};
