// Clase 1.2 de Nefrología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un túbulo que muere y un intersticio que se inflama: cómo distinguirlos y qué hacer con cada uno',
      say: 'Bienvenidos. En la clase anterior llegamos a una bifurcación: si la injuria renal no es obstructiva ni prerrenal, el daño está dentro del riñón. Hoy vemos las dos causas intrínsecas más comunes en el hospital: la necrosis tubular aguda y la nefritis intersticial aguda. Una es un daño directo del túbulo; la otra, una alergia del intersticio. Y el tratamiento de cada una es distinto.',
    },

    {
      type: 'flow',
      kicker: 'Necrosis tubular aguda',
      title: '¿Qué mata al túbulo?',
      nodes: [
        { id: 'isq', col: 0, row: 0, k: 'cause', t: 'Isquemia prolongada', s: 'Shock séptico, cardiogénico o hipovolémico' },
        { id: 'tox', col: 0, row: 2, k: 'cause', t: 'Nefrotóxicos', s: 'Aminoglucósidos, contraste, vancomicina, anfotericina B' },
        { id: 'pig', col: 0, row: 4, k: 'cause', t: 'Pigmentos', s: 'Mioglobina, hemoglobina' },
        { id: 'nta', col: 2, row: 2, k: 'risk', t: 'Necrosis tubular aguda', s: '85 % de las IRA intrínsecas hospitalarias' },
        { id: 'sed', col: 3, row: 2, k: 'effect', t: 'Cilindros granulosos pardos', s: 'FeNa > 2 %, isostenuria' },
      ],
      edges: [
        { from: 'isq', to: 'nta' }, { from: 'tox', to: 'nta' }, { from: 'pig', to: 'nta' },
        { from: 'nta', to: 'sed' },
      ],
      steps: [
        { show: ['isq'], note: 'La prerrenal que no se corrigió a tiempo',
          say: 'Partamos por la necrosis tubular aguda, que explica el ochenta y cinco por ciento de las injurias intrínsecas en pacientes hospitalizados. La primera causa es la isquemia: un shock séptico, cardiogénico o hipovolémico que se prolonga. Es la continuación de lo que vimos la clase pasada: una prerrenal que no se corrigió a tiempo.' },
        { show: ['tox'], note: 'Fármacos de uso hospitalario',
          say: 'La segunda son los nefrotóxicos, casi todos de uso hospitalario: los aminoglucósidos, como la gentamicina y la amikacina, el medio de contraste yodado, la vancomicina y la anfotericina B.' },
        { show: ['pig'], note: 'Rabdomiólisis y hemólisis masiva',
          say: 'Y la tercera son los pigmentos que produce el propio cuerpo: la mioglobina en la rabdomiólisis y la hemoglobina en una hemólisis intravascular masiva.' },
        { show: ['nta', 'sed'], note: 'El túbulo muerto se ve en la orina',
          say: 'Por cualquiera de estas vías, el epitelio tubular muere y se desprende. Y eso se ve en la orina: cilindros granulosos pardos, una FeNa sobre dos por ciento y una orina isostenúrica, tal como lo vimos en la clase anterior.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Rabdomiólisis',
      title: 'La orina oscura sin glóbulos rojos',
      cards: [
        { title: 'Cómo se reconoce', tag: 'Se pregunta', kind: 'key', items: [
          { t: 'Ejercicio extremo, calor, trauma', d: 'Mialgias intensas y orina color té',
            say: 'La rabdomiólisis merece un aparte, porque es muy preguntada. El paciente típico viene de un ejercicio extremo, de un golpe de calor o de un trauma, con mialgias intensas y una orina oscura, color té o coca cola.' },
          { t: 'CPK > 5.000–10.000 U/L', d: 'El examen que confirma',
            say: 'El examen que la confirma es la creatinquinasa, la CPK, que típicamente supera los cinco mil a diez mil.' },
        ] },
        { title: 'La discordancia', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Tira reactiva: sangre positiva', d: 'Detecta el grupo hemo de la mioglobina',
            say: 'Y el dato clave es una discordancia. La tira reactiva marca sangre positiva, porque reacciona con el grupo hemo de la mioglobina.' },
          { t: 'Microscopio: sin glóbulos rojos', d: 'Es mioglobinuria, no hematuria',
            say: 'Pero al microscopio no hay glóbulos rojos. Tira positiva sin hematíes es mioglobinuria hasta que se demuestre lo contrario.' },
        ] },
        { title: 'Tratamiento', tag: 'Urgente', kind: 'pharma', items: [
          { t: 'Hidratación agresiva', d: 'Cristaloides isotónicos para mantener diuresis alta',
            say: 'El pilar del tratamiento es la hidratación intravenosa agresiva con cristaloides isotónicos, para mantener una diuresis alta y evitar que la mioglobina precipite en los túbulos. Es la excepción a lo que dijimos de la necrosis tubular: aquí el volumen previene el daño, no lo agrava.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Nefritis intersticial aguda',
      title: 'Una alergia que se instala en el riñón',
      nodes: [
        { id: 'far', col: 0, row: 2, k: 'cause', t: 'Fármacos', s: 'Más del 75 % de los casos' },
        { id: 'hip', col: 1, row: 2, k: 'mech', t: 'Hipersensibilidad intersticial', s: 'Mediada por células' },
        { id: 'tri', col: 2, row: 0, k: 'trap', t: 'Fiebre, exantema, eosinofilia', s: 'Solo en 10–15 %' },
        { id: 'pio', col: 2, row: 3, k: 'effect', t: 'Piuria estéril', s: 'Cilindros leucocitarios, microhematuria' },
        { id: 'eos', col: 3, row: 3, k: 'q', t: 'Eosinofiluria', s: 'Sugerente, no específica' },
      ],
      edges: [
        { from: 'far', to: 'hip' }, { from: 'hip', to: 'tri', label: 'a veces' },
        { from: 'hip', to: 'pio', label: 'casi siempre' }, { from: 'pio', to: 'eos' },
      ],
      steps: [
        { show: ['far'], note: 'Antibióticos, AINE e IBP',
          say: 'Ahora la otra causa. La nefritis intersticial aguda es provocada por fármacos en más del setenta y cinco por ciento de los casos. Los antibióticos, como penicilinas, cefalosporinas, sulfas y ciprofloxacino; los AINE; y los inhibidores de la bomba de protones, como el omeprazol, hoy una causa frecuente en el adulto mayor.' },
        { show: ['hip'], note: 'No es tóxico: es inmunológico',
          say: 'Fíjate en la diferencia con la necrosis tubular. Aquí el fármaco no intoxica el túbulo: el sistema inmune reacciona contra él dentro del intersticio renal. Es una hipersensibilidad.' },
        { show: ['tri'], note: 'La tríada clásica es la excepción',
          say: 'Por eso puede dar una tríada alérgica clásica: fiebre, exantema maculopapular y eosinofilia. Pero ojo, que es la trampa: solo aparece en el diez a quince por ciento de los casos. Si esperas la tríada completa, se te pasa la mayoría.' },
        { show: ['pio'], note: 'El hallazgo más constante',
          say: 'Lo más constante está en la orina: piuria estéril, es decir, leucocitos en la orina con urocultivo negativo, además de cilindros leucocitarios y microhematuria.' },
        { show: ['eos'], note: 'Apoya, pero no confirma',
          say: 'Y la eosinofiluria, con la tinción de Hansel, es sugerente, pero no es específica. Suma, pero no hace el diagnóstico por sí sola.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Esperar al túbulo o retirar el fármaco',
      nodes: [
        { id: 'nta', col: 0, row: 0, k: 'risk', t: 'Necrosis tubular', s: 'Regenera en 1 a 3 semanas' },
        { id: 'sop', col: 1, row: 0, k: 'good', t: 'Soporte conservador', s: 'Suspender tóxico, ajustar fármacos, balance neutro' },
        { id: 'pol', col: 2, row: 0, k: 'alert', t: 'Fase poliúrica', s: 'Vigilar deshidratación e hipokalemia' },
        { id: 'nti', col: 0, row: 3, k: 'risk', t: 'Nefritis intersticial', s: 'Hipersensibilidad' },
        { id: 'sus', col: 1, row: 3, k: 'good', t: 'Suspender el fármaco', s: 'Medida curativa' },
        { id: 'q', col: 2, row: 3, k: 'q', t: '¿Mejora en 5–7 días?', s: 'O Cr > 3–4 mg/dL' },
        { id: 'pdn', col: 3, row: 3, k: 'refer', t: 'Prednisona 1 mg/kg/día', s: '2 a 4 semanas' },
      ],
      edges: [
        { from: 'nta', to: 'sop' }, { from: 'sop', to: 'pol', label: 'al recuperarse' },
        { from: 'nti', to: 'sus' }, { from: 'sus', to: 'q' }, { from: 'q', to: 'pdn', label: 'no mejora' },
      ],
      steps: [
        { show: ['nta', 'sop'], note: 'No hay antídoto: se espera la regeneración',
          say: 'El tratamiento es distinto en cada una. En la necrosis tubular no hay antídoto: el epitelio tarda de una a tres semanas en regenerarse, y hay que acompañarlo. Suspender el tóxico, ajustar todos los fármacos a la función renal y mantener un balance neutro de agua y electrolitos.' },
        { show: ['pol'], note: 'Túbulo nuevo que todavía no concentra',
          say: 'Y ojo con la fase de recuperación. El túbulo recién regenerado todavía no sabe concentrar la orina, así que el paciente entra en una fase poliúrica. Ahí el riesgo cambia: deshidratación e hipokalemia.' },
        { show: ['nti', 'sus'], note: 'Retirar el fármaco es el tratamiento',
          say: 'En la nefritis intersticial, en cambio, la medida obligatoria y curativa es suspender de inmediato el fármaco responsable. La mayoría de los pacientes se recupera solo con eso.' },
        { show: ['q', 'pdn'], note: 'Corticoides solo si no revierte',
          say: 'Si después de cinco a siete días sin el fármaco la función renal no mejora, o si el compromiso es severo, con creatinina sobre tres o cuatro, se indica prednisona oral, un miligramo por kilo al día, por dos a cuatro semanas, para evitar la fibrosis intersticial irreversible. En la necrosis tubular, en cambio, los corticoides no tienen ningún rol.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Necrosis tubular vs nefritis intersticial',
      head: ['Característica', 'Necrosis tubular aguda', 'Nefritis intersticial aguda'],
      rows: [
        { cells: ['Mecanismo', 'Isquemia o toxicidad directa', 'Hipersensibilidad (tipo IV/III)'],
          say: 'Repasemos lado a lado. El mecanismo: la necrosis tubular es isquemia o toxicidad directa; la nefritis intersticial es una reacción de hipersensibilidad.' },
        { cells: ['Fármacos típicos', 'Aminoglucósidos, contraste, vancomicina', 'Betalactámicos, AINE, IBP, sulfas'],
          say: 'Los fármacos típicos: aminoglucósidos, contraste y vancomicina para la necrosis; betalactámicos, AINE, omeprazol y sulfas para la nefritis.' },
        { cells: ['Clínica extrarrenal', 'Ninguna (la del shock o la sepsis)', 'Fiebre, exantema, artralgias, eosinofilia'],
          say: 'La necrosis tubular no tiene clínica propia fuera del riñón, solo la del shock o la sepsis. La nefritis intersticial puede dar fiebre, exantema, artralgias y eosinofilia.' },
        { cells: ['Sedimento', 'Cilindros granulosos pardos', 'Piuria estéril, cilindros leucocitarios'],
          say: 'El sedimento es lo que más discrimina: cilindros granulosos pardos en la necrosis, piuria estéril y cilindros leucocitarios en la nefritis.' },
        { cells: ['Corticoides', 'No están indicados', 'Si no revierte en 5–7 días'],
          say: 'Y los corticoides: nunca en la necrosis tubular; en la nefritis intersticial, solo si no revierte tras suspender el fármaco. El error clásico es darlos de entrada, antes de retirar el fármaco culpable.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 54 años, hospitalizado hace 10 días por osteomielitis en tratamiento con cefazolina IV. Presenta febrícula de 37,8 °C y exantema eritematoso pruriginoso en el tronco. Creatinina sube de 1,0 a 2,6 mg/dL. Leucocitos 9.800 con 9 % de eosinófilos. Sedimento: 30–40 leucocitos por campo, cilindros leucocitarios; urocultivo negativo.',
      question: '¿Cuál es la primera conducta?',
      options: [
        { letter: 'A', text: 'Suspender la cefazolina y rotar a otra familia antibiótica' },
        { letter: 'B', text: 'Iniciar prednisona 1 mg/kg/día manteniendo la cefazolina' },
        { letter: 'C', text: 'Agregar ciprofloxacino por infección urinaria' },
        { letter: 'D', text: 'Hidratación agresiva con suero fisiológico' },
        { letter: 'E', text: 'Hemodiálisis de urgencia' },
      ],
      correct: 'A',
      explanation: 'Betalactámico + febrícula + exantema + eosinofilia + piuria estéril con cilindros leucocitarios: nefritis intersticial aguda inmunoalérgica. La primera medida es suspender el fármaco. Los corticoides se reservan si no mejora en 5–7 días; el urocultivo negativo descarta la infección urinaria.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y cuatro años, hospitalizado hace diez días por una osteomielitis, con cefazolina endovenosa. Empieza con febrícula y un exantema pruriginoso en el tronco. La creatinina sube de uno a dos coma seis, tiene nueve por ciento de eosinófilos, y el sedimento muestra muchos leucocitos y cilindros leucocitarios, con urocultivo negativo.',
        question: '¿Cuál es la primera conducta?',
        options: 'Las alternativas: suspender la cefazolina y cambiar de familia antibiótica, prednisona manteniendo la cefazolina, agregar ciprofloxacino, hidratación agresiva, o hemodiálisis de urgencia. Piénsalo.',
        answer: 'Es la A. Este paciente tiene todo: un betalactámico, fiebre, exantema, eosinofilia y piuria estéril con cilindros leucocitarios. Es una nefritis intersticial, y lo primero es retirar el fármaco. La B es la trampa: los corticoides no reemplazan la suspensión, y se reservan si no mejora en una semana. Y el urocultivo negativo descarta la infección urinaria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 96',
      stem: 'Un hombre de 32 años presenta dolor muscular y oliguria, 24 horas después de realizar ejercicio intenso, a lo que se agrega malestar general. En sus exámenes destaca creatininemia de 5 mg/dl, uremia de 9 mg/dl y potasemia de 5,4 mEq/L, con natremia: 140 UI/L.',
      question: '¿Qué examen debe pedirse a continuación?',
      options: [
        { letter: 'A', text: 'Creatininkinasa' },
        { letter: 'B', text: 'Proteinuria de 24 horas' },
        { letter: 'C', text: 'Hemograma' },
        { letter: 'D', text: 'Sedimento de orina' },
        { letter: 'E', text: 'Clearence de creatinina' },
      ],
      correct: 'A',
      explanation: 'Mialgias y oliguria tras ejercicio intenso, con falla renal: sospecha de rabdomiólisis con necrosis tubular por mioglobina. El examen que confirma es la creatinquinasa (CPK).',
      say: {
        stem: 'Ahora preguntas reales. La primera, del EUNACOM de julio de dos mil dieciséis. Hombre de treinta y dos años con dolor muscular y oliguria, veinticuatro horas después de un ejercicio intenso. La creatinina está en cinco y el potasio en cinco coma cuatro.',
        question: '¿Qué examen debe pedirse a continuación?',
        options: 'Las opciones: creatinquinasa, proteinuria de veinticuatro horas, hemograma, sedimento de orina, o clearance de creatinina. Piénsalo.',
        answer: 'Es la A, la creatinquinasa. Ejercicio intenso, dolor muscular y falla renal oligúrica: es una rabdomiólisis hasta que se demuestre lo contrario, y la CPK la confirma. El sedimento es el distractor tentador, porque ayuda, pero lo que certifica el daño muscular es la CPK.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 133',
      stem: 'Un paciente de 27 años presenta una lesión en la pierna derecha, consistente en una placa de 13 por 7 cm de diámetro, eritematosa y solevantada. Se inicia cloxacilina endovenosa. Al quinto día, la lesión cutánea ha mejorado, sin embargo, evoluciona con malestar general, fiebre y aparición de un exantema macular eritematoso, generalizado. Se solicitan exámenes que muestran sedimento de orina con hematuria microscópica, glóbulos blancos: 20 por campo, hemograma con leucocitosis de 14.000, con 20% de eosinófilos, BUN: 30 mg/dl y creatinina: 2,0 mg/dl.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Glomerulonefritis aguda postestreptocócica' },
        { letter: 'B', text: 'Púrpura trombocitopénico trombótico' },
        { letter: 'C', text: 'Vasculitis sistémica primaria' },
        { letter: 'D', text: 'Insuficiencia renal aguda prerrenal' },
        { letter: 'E', text: 'Nefritis intersticial' },
      ],
      correct: 'E',
      explanation: 'Betalactámico (cloxacilina) seguido de fiebre, exantema, eosinofilia, leucocituria y falla renal: nefritis intersticial aguda por fármacos. La placa de la pierna era una erisipela o celulitis, no una faringitis estreptocócica.',
      say: {
        stem: 'La siguiente, del EUNACOM de diciembre de dos mil diecinueve. Paciente de veintisiete años con una placa eritematosa en la pierna, que se trata con cloxacilina. Al quinto día la piel mejora, pero aparece fiebre, un exantema generalizado, veinte por ciento de eosinófilos, leucocitos y glóbulos rojos en la orina, y una creatinina de dos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: glomerulonefritis postestreptocócica, púrpura trombocitopénico trombótico, vasculitis, injuria prerrenal, o nefritis intersticial. Piénsalo.',
        answer: 'Es la E, nefritis intersticial. Aquí aparece la tríada completa: fiebre, exantema y eosinofilia, después de un betalactámico. La glomerulonefritis postestreptocócica es el distractor, porque hubo una infección de piel, pero esa aparece semanas después, no al quinto día de un antibiótico, y no da eosinofilia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 167',
      stem: 'Paciente de 36 años con fiebre y la presencia de una lesión en miembro inferior, en forma de una placa de eritematosa, con bordes definidos de aproximadamente 15 x 8 cm, que responde bien al tratamiento con cloxacilina. Al quinto día comienza con náuseas, vómitos, diuresis adecuada, con leucocitosis de 15.000 por mm3, con 10% de eosinófilos, 40% de neutrófilos y 48% de linfocitos, uremia en 50 mg/dl, creatinina en 3 mg/dl, hematuria microscópica, leucocituria, y proteinuria de 0,8 g/día.',
      question: 'Identificar el posible diagnóstico:',
      options: [
        { letter: 'A', text: 'Glomerulonefritis post estreptocócica' },
        { letter: 'B', text: 'Vasculitis de vasos pequeños' },
        { letter: 'C', text: 'Injuria renal pre renal' },
        { letter: 'D', text: 'Endocarditis infecciosa' },
        { letter: 'E', text: 'Nefritis intersticial' },
      ],
      correct: 'E',
      explanation: 'Mismo escenario sin exantema: betalactámico, eosinofilia, leucocituria y falla renal no oligúrica. Sigue siendo una nefritis intersticial por fármacos; la tríada completa no es necesaria.',
      say: {
        stem: 'Y una variante del mismo examen de julio de dos mil dieciséis. Paciente de treinta y seis años con una placa eritematosa en la pierna que responde a cloxacilina. Al quinto día tiene náuseas y vómitos, con diuresis conservada, diez por ciento de eosinófilos, leucocituria, hematuria microscópica y creatinina de tres. Esta vez no hay exantema.',
        question: 'Identificar el posible diagnóstico.',
        options: 'Las opciones: glomerulonefritis postestreptocócica, vasculitis, injuria prerrenal, endocarditis, o nefritis intersticial. Piénsalo.',
        answer: 'De nuevo es la E, nefritis intersticial. Y esta pregunta enseña algo distinto: no hay exantema y la diuresis está conservada, pero basta el betalactámico, la eosinofilia y la leucocituria. No esperes la tríada completa. La prerrenal cae porque no hay hipovolemia y el sedimento está alterado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 154',
      stem: 'Un paciente de 33 años, hospitalizado por una endocarditis subaguda por Streptococcus viridans, en tratamiento con penicilina y gentamicina por vía endovenosa, presenta un cuadro de hematuria de algunos días de evolución. Se solicita sedimento de orina que muestra 50 glóbulos rojos por campo con 95% de dismorfia y presencia de cilindros hemáticos, creatinina de 2,4 mg/dL, ANA (-), fracción C3 del complemento de 53 mg/dL (valor normal: 75-135 mg/dL).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Embolias renales a repetición' },
        { letter: 'B', text: 'Nefritis intersticial secundaria al uso de penicilina' },
        { letter: 'C', text: 'Daño tubular agudo secundario al uso de gentamicina' },
        { letter: 'D', text: 'Glomerulonefritis por depósito de complejos inmunes' },
        { letter: 'E', text: 'Síndrome hemolítico urémico' },
      ],
      correct: 'D',
      explanation: 'Hematuria dismórfica con cilindros hemáticos y C3 bajo: el daño es glomerular, por complejos inmunes asociados a la endocarditis. Ni la nefritis intersticial (piuria estéril, cilindros leucocitarios) ni la necrosis por gentamicina (cilindros granulosos) dan cilindros hemáticos.',
      say: {
        stem: 'La última, del EUNACOM de julio de dos mil diecisiete, y es perfecta para cerrar. Paciente con una endocarditis, tratado con penicilina y gentamicina, que presenta hematuria. El sedimento muestra glóbulos rojos con noventa y cinco por ciento de dismorfia y cilindros hemáticos, la creatinina es dos coma cuatro y el complemento C tres está bajo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: embolias renales, nefritis intersticial por penicilina, necrosis tubular por gentamicina, glomerulonefritis por complejos inmunes, o síndrome hemolítico urémico. Piénsalo.',
        answer: 'Es la D. El enunciado te pone dos fármacos tentadores, una penicilina y un aminoglucósido, para que caigas en la B o en la C. Pero el sedimento manda: cilindros hemáticos y hematíes dismórficos son glomerulares. La nefritis intersticial daría cilindros leucocitarios, y la gentamicina, cilindros granulosos. El complemento bajo apunta a complejos inmunes de la endocarditis.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Necrosis tubular', tag: 'Soporte', kind: 'key', items: [
          { t: 'Isquemia, nefrotóxicos, pigmentos', d: 'Cilindros granulosos pardos',
            say: 'Cerremos con las reglas de oro. La necrosis tubular viene de la isquemia, los nefrotóxicos o los pigmentos, y deja cilindros granulosos pardos.' },
          { t: 'Tira con sangre sin hematíes', d: 'Mioglobinuria: CPK e hidratación agresiva',
            say: 'Si la tira marca sangre y el microscopio no ve glóbulos rojos, piensa en mioglobina: pide la CPK e hidrata agresivamente.' },
          { t: 'Recuperación poliúrica', d: 'Vigilar deshidratación e hipokalemia',
            say: 'Se trata con soporte, y en la recuperación ojo con la fase poliúrica.' },
        ] },
        { title: 'Nefritis intersticial', tag: 'Suspender', kind: 'alert', items: [
          { t: 'Piuria estéril + cilindros leucocitarios', d: 'La tríada aparece en pocos',
            say: 'La nefritis intersticial se sospecha por un fármaco nuevo y piuria estéril con cilindros leucocitarios; la tríada alérgica es la excepción.' },
          { t: 'Primero suspender el fármaco', d: 'Prednisona si no mejora en 5–7 días',
            say: 'Primero se suspende el fármaco, y solo si no mejora en cinco a siete días, prednisona. Si te llevas una sola idea de hoy: en la necrosis tubular se espera al túbulo, y en la nefritis intersticial se retira el fármaco; y el sedimento es el que te dice cuál es cuál. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Injuria intrínseca: túbulo o intersticio',
    root: N('start', 'IRA intrínseca en un hospitalizado', 'Obstrucción y prerrenal descartadas',
      'Paciente hospitalizado con injuria renal que no es obstructiva ni prerrenal. El daño está en el riñón. ¿Túbulo o intersticio?',
      ['', N('q', '¿Qué muestra el sedimento?', 'El dato que más discrimina',
        'La primera pregunta es el sedimento, porque es lo que más discrimina.',
        ['Granulosos pardos', N('q', '¿Tira con sangre sin hematíes?', 'Pensar en mioglobina',
          'Cilindros granulosos pardos: necrosis tubular. Ahora, ¿la tira reactiva marca sangre sin glóbulos rojos en el microscopio?',
          ['SÍ', N('alert', 'Rabdomiólisis', 'CPK + hidratación agresiva',
            'Tira positiva sin hematíes es mioglobinuria. Se confirma con la CPK y se trata con hidratación agresiva con cristaloides.')],
          ['NO', N('do', 'Necrosis isquémica o tóxica', 'Suspender tóxico, balance neutro',
            'Si no, es una necrosis isquémica o por nefrotóxicos. Suspender el tóxico, ajustar fármacos y balance neutro, vigilando la fase poliúrica.')])],
        ['Piuria estéril', N('do', 'Nefritis intersticial', 'Suspender el fármaco culpable',
          'Piuria estéril y cilindros leucocitarios, con un fármaco nuevo: nefritis intersticial. Lo primero es suspender el fármaco.',
          ['', N('q', '¿Mejora en 5–7 días?', 'Tras suspender el fármaco',
            'Después se espera. ¿La función renal mejora en cinco a siete días sin el fármaco?',
            ['SÍ', N('ok', 'Solo observar', 'La mayoría se recupera',
              'Si mejora, no se necesita nada más. La mayoría se recupera solo con retirar el fármaco.')],
            ['NO', N('refer', 'Prednisona 1 mg/kg/día', 'Por 2 a 4 semanas',
              'Si no mejora, o el compromiso es severo, prednisona un miligramo por kilo al día por dos a cuatro semanas, para evitar la fibrosis.')])])],
        ['Hemáticos', N('refer', 'Glomerulonefritis', 'Hematíes dismórficos',
          'Cilindros hemáticos y hematíes dismórficos: no es túbulo ni intersticio, es glomérulo. Se deriva a nefrología.')])]),
  },
};
