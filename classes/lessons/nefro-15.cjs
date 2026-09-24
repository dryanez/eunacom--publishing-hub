// Clase 4.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La latencia, el C3 y por qué se trata con furosemida',
      say: 'Bienvenidos. En las dos clases anteriores vimos el síndrome nefrótico, donde el glomérulo deja escapar proteínas sin inflamarse. Hoy cambiamos de lado: el síndrome nefrítico, donde el glomérulo se inflama y deja pasar sangre. Y lo vamos a estudiar con su prototipo, la glomerulonefritis postestreptocócica, un caso clínico clásico del EUNACOM que se resuelve con dos datos: cuánto tiempo pasó desde la infección y cómo está el C tres.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la faringitis al glomérulo inflamado',
      nodes: [
        { id: 'str', col: 0, row: 1, k: 'cause', t: 'Estreptococo grupo A', s: 'Cepa nefritogénica' },
        { id: 'lat', col: 1, row: 1, k: 'mech', t: 'Latencia asintomática', s: 'Se forman inmunocomplejos' },
        { id: 'c3', col: 2, row: 0, k: 'mech', t: 'Consumo de C3', s: 'Complemento bajo' },
        { id: 'inf', col: 2, row: 2, k: 'mech', t: 'Inflamación endocapilar', s: 'Se rompe la membrana basal' },
        { id: 'hem', col: 3, row: 1, k: 'effect', t: 'Hematuria dismórfica', s: 'Acantocitos y cilindros hemáticos' },
        { id: 'tfg', col: 3, row: 3, k: 'mech', t: 'Cae la filtración', s: 'Se retienen sodio y agua' },
        { id: 'hta', col: 4, row: 3, k: 'risk', t: 'Hipertensión y edema', s: 'Por volumen' },
      ],
      edges: [
        { from: 'str', to: 'lat' }, { from: 'lat', to: 'c3' }, { from: 'lat', to: 'inf' },
        { from: 'inf', to: 'hem' }, { from: 'inf', to: 'tfg' }, { from: 'tfg', to: 'hta' },
      ],
      steps: [
        { show: ['str'], note: 'Streptococcus pyogenes, cepas nefritogénicas',
          say: 'Partamos por el mecanismo. Todo comienza con una infección por Streptococcus pyogenes, el estreptococo beta hemolítico del grupo A. No cualquier cepa: solo las nefritogénicas.' },
        { show: ['lat'], note: 'El riñón no se enferma con la infección, sino después',
          say: 'Y aquí está la clave cronológica. El riñón no se enferma durante la infección, sino después. Hay un período de latencia sin síntomas, en que el sistema inmune forma inmunocomplejos que se depositan en el glomérulo.' },
        { show: ['c3'], note: 'Los inmunocomplejos activan y consumen complemento',
          say: 'Esos inmunocomplejos activan el complemento y lo consumen. Por eso el C tres baja. Guarda este dato, porque es el que decide el diagnóstico.' },
        { show: ['inf', 'hem'], note: 'Por la brecha pasan glóbulos rojos que se deforman',
          say: 'En el glomérulo se produce una inflamación que rompe la membrana basal. Por esa brecha pasan glóbulos rojos que se deforman al atravesarla, y por eso la hematuria es dismórfica, con acantocitos y cilindros hemáticos.' },
        { show: ['tfg', 'hta'], note: 'El problema clínico es el volumen',
          say: 'Además, el glomérulo inflamado filtra menos. El riñón retiene sodio y agua, el volumen se expande, y aparecen la hipertensión y el edema. Fíjate en esto, porque explica el tratamiento: el problema que hay que resolver es el volumen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo llega el paciente?',
      cards: [
        { title: 'La latencia', tag: 'El dato clave', kind: 'criteria', items: [
          { t: 'Faringoamigdalitis: 1–2 semanas', d: '7 a 14 días',
            say: 'Veamos cómo llega el paciente, y lo primero que tienes que buscar en la historia es la latencia. Si la infección fue una faringoamigdalitis, los síntomas renales aparecen una a dos semanas después.' },
          { t: 'Piel (impétigo): 3–6 semanas', d: '21 a 40 días',
            say: 'Si fue una infección de la piel, un impétigo o una piodermitis, la latencia es más larga: tres a seis semanas.' },
        ] },
        { title: 'El síndrome nefrítico', tag: 'Lo que ves', kind: 'key', items: [
          { t: 'Orina color té o coca-cola', d: 'Hematuria glomerular macroscópica',
            say: 'Luego aparece el síndrome nefrítico. Orina oscura, color té o coca-cola, porque es sangre de origen glomerular.' },
          { t: 'Edema periorbitario matinal', d: 'Y maleolar',
            say: 'Edema de los párpados en la mañana y de los tobillos, por la sal y el agua retenidas.' },
          { t: 'Hipertensión y oliguria', d: 'Volumen-dependiente',
            say: 'Y la hipertensión, con grados variables de oliguria. Hematuria, hipertensión y edema: esa es la tríada del síndrome nefrítico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Sedimento, complemento y serología',
      cards: [
        { title: 'Sedimento', tag: 'El sello', kind: 'key', items: [
          { t: 'Dismorfia > 70–80 %', d: 'Acantocitos y cilindros hemáticos',
            say: 'El laboratorio confirma lo que la clínica sugiere. En el sedimento está el sello del glomérulo: más de setenta a ochenta por ciento de glóbulos rojos dismórficos, acantocitos y cilindros hemáticos.' },
          { t: 'Proteinuria subnefrótica', d: 'Menos de 1 a 2 g/día',
            say: 'La proteinuria existe, pero es subnefrótica, bajo uno a dos gramos al día. Eso lo separa del nefrótico que vimos antes.' },
        ] },
        { title: 'Complemento', tag: 'Lo que más se pregunta', kind: 'alert', items: [
          { t: 'C3 bajo, C4 normal', d: 'En más del 90 %',
            say: 'Y el complemento: el C tres está marcadamente bajo, con un C cuatro normal o apenas disminuido, en más del noventa por ciento de los pacientes.' },
          { t: 'Se normaliza a las 6–8 semanas', d: 'De forma espontánea',
            say: 'Ese C tres bajo es transitorio: vuelve a lo normal solo, entre las seis y las ocho semanas.' },
        ] },
        { title: 'Serología', tag: 'Infección previa', kind: 'criteria', items: [
          { t: 'ASO', d: 'Foco faríngeo',
            say: 'Para demostrar la infección previa, se piden anticuerpos. La antiestreptolisina O, si el foco fue faríngeo.' },
          { t: 'Anti-DNAsa B', d: 'Muy sensible en foco cutáneo',
            say: 'Y la anti DNAsa B, que es la más sensible cuando la infección fue en la piel.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Seguimiento',
      title: '¿Cuándo dejar de pensar en postestreptocócica?',
      nodes: [
        { id: 'dx', col: 0, row: 1, k: 'start', t: 'Nefrítico con C3 bajo', s: 'Sospecha de GNPE' },
        { id: 'con', col: 1, row: 1, k: 'q', t: '¿C3 a las 8 semanas?', s: 'Control del complemento' },
        { id: 'nor', col: 2, row: 0, k: 'good', t: 'C3 normal', s: 'Confirma GNPE' },
        { id: 'per', col: 2, row: 2, k: 'alert', t: 'C3 bajo más de 8–12 semanas', s: 'No es postestreptocócica' },
        { id: 'bio', col: 3, row: 2, k: 'refer', t: 'Biopsia renal', s: 'Lupus o membranoproliferativa' },
      ],
      edges: [
        { from: 'dx', to: 'con' }, { from: 'con', to: 'nor', label: 'se normaliza' },
        { from: 'con', to: 'per', label: 'persiste' }, { from: 'per', to: 'bio' },
      ],
      steps: [
        { show: ['dx', 'con'], note: 'El C3 se vuelve a medir',
          say: 'Ese carácter transitorio del C tres tiene una consecuencia práctica, y se pregunta. Al paciente con sospecha de postestreptocócica se le vuelve a medir el complemento.' },
        { show: ['nor'], note: 'Normal: cuadro autolimitado, confirma',
          say: 'Si a las seis a ocho semanas el C tres volvió a lo normal, el cuadro se comportó como debía, y eso confirma el diagnóstico.' },
        { show: ['per'], note: 'Persistente: el diagnóstico estaba equivocado',
          say: 'Pero si sigue bajo después de ocho a doce semanas, ya no es una postestreptocócica. Hay otra enfermedad que está consumiendo complemento de forma sostenida.' },
        { show: ['bio'], note: 'Lupus o membranoproliferativa',
          say: 'En ese caso se hace biopsia renal, sospechando un lupus o una glomerulonefritis membranoproliferativa. Nota que la postestreptocócica típica no se biopsia: se biopsia cuando no se comporta como tal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Se trata el volumen, no la inmunidad',
      cards: [
        { title: 'Evolución', tag: 'Autolimitada', kind: 'normal', items: [
          { t: 'Resuelve en más del 95 %', d: 'Falla renal e HTA ceden en 1–3 semanas',
            say: 'Pasemos al tratamiento. La postestreptocócica es autolimitada en más del noventa y cinco por ciento de los pacientes: la falla renal y la hipertensión se resuelven en una a tres semanas.' },
          { t: 'No requiere corticoides', d: 'Ni inmunosupresores',
            say: 'Por eso no requiere corticoides ni inmunosupresores. Esta es la trampa más clásica del tema: aunque sea una enfermedad inmune, no se inmunosuprime.' },
        ] },
        { title: 'Soporte del volumen', tag: 'El tratamiento', kind: 'pharma', items: [
          { t: 'Restricción de sodio y líquidos', d: 'Y reposo',
            say: 'Recuerda el mecanismo: el problema es el volumen. Entonces se trata el volumen, con reposo y restricción estricta de sodio y de líquidos.' },
          { t: 'Furosemida', d: 'Diurético de asa, oral o intravenoso',
            say: 'Y con un diurético de asa, la furosemida, que elimina sodio, revierte el edema y controla la presión.' },
        ] },
        { title: 'Urgencia', tag: 'Rescate', kind: 'alert', items: [
          { t: 'Crisis hipertensiva o edema pulmonar', d: 'Furosemida en bolo IV',
            say: 'Si el paciente llega con una crisis hipertensiva o con edema pulmonar, el rescate es la furosemida en bolo intravenoso. En el examen, cuando ves un joven con nefrítico, presión alta y crépitos, la respuesta es furosemida endovenosa.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, partiendo de un paciente con orina oscura.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Postestreptocócica vs nefropatía por IgA',
      head: ['Rasgo', 'Postestreptocócica', 'IgA (Berger)'],
      rows: [
        { cells: ['Latencia', '1–2 sem (faringe) · 3–6 sem (piel)', '24–48 h: sinfaringítica'],
          say: 'Ahora, la diferencia que más se pregunta. Frente a una hematuria después de una faringitis, tienes que separar la postestreptocócica de la nefropatía por IgA, o enfermedad de Berger. Lo primero es la latencia: en la postestreptocócica hay una a dos semanas; en la IgA, la hematuria aparece a las veinticuatro a cuarenta y ocho horas, junto con la infección. Por eso se llama sinfaringítica.' },
        { cells: ['Complemento', 'C3 bajo, C4 normal', 'C3 y C4 normales'],
          say: 'Lo segundo es el complemento: bajo en la postestreptocócica, completamente normal en la IgA.' },
        { cells: ['Edad típica', 'Niños y jóvenes (5–15 años)', 'Adulto joven (2.ª–3.ª década)'],
          say: 'La edad: la postestreptocócica es típica entre los cinco y los quince años; la IgA, del adulto joven, en la segunda y tercera década.' },
        { cells: ['Recurrencia', 'Excepcional: episodio único', 'Brotes con cada infección respiratoria'],
          say: 'La postestreptocócica es un episodio único; la IgA, en cambio, hace brotes con cada infección respiratoria.' },
        { cells: ['Tratamiento', 'Furosemida y restricción de sal', 'IECA/ARA-II · corticoides si proteinuria > 1 g/d'],
          say: 'Y el tratamiento: soporte con furosemida y sal para la postestreptocócica; control de presión con IECA o ARA dos para la IgA, y corticoides si la proteinuria pasa de un gramo al día.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 22 años con 3 días de cefalea, hinchazón facial y orinas color café. Hace 12 días tuvo una faringoamigdalitis purulenta tratada 3 días con amoxicilina. PA 175/105 mmHg, edema periorbitario y de tobillos. Creatinina 1,9 mg/dL. Sedimento: incontables glóbulos rojos con 85 % de dismorfia y cilindros hemáticos; proteinuria 800 mg/24 h. C3 28 mg/dL (VN 80–160), C4 normal.',
      question: '¿Cuál es el tratamiento inicial de elección?',
      options: [
        { letter: 'A', text: 'Prednisona 1 mg/kg/día' },
        { letter: 'B', text: 'Restricción de sodio y furosemida' },
        { letter: 'C', text: 'Completar 10 días de amoxicilina como tratamiento del daño renal' },
        { letter: 'D', text: 'Pulsos de ciclofosfamida' },
        { letter: 'E', text: 'Biopsia renal antes de cualquier medida' },
      ],
      correct: 'B',
      explanation: 'Latencia de 12 días tras faringitis, síndrome nefrítico y C3 bajo con C4 normal: glomerulonefritis postestreptocócica. Es autolimitada; se trata la sobrecarga de volumen con restricción de sodio y furosemida. No se usan corticoides y el antibiótico no cambia el daño glomerular ya instalado.',
      say: {
        stem: 'Vamos al caso. Hombre de veintidós años con tres días de cefalea, cara hinchada y orina color café. Hace doce días tuvo una faringoamigdalitis que trató solo tres días. Presión de ciento setenta y cinco con ciento cinco, edema de párpados y tobillos, creatinina uno coma nueve, hematuria con ochenta y cinco por ciento de dismorfia y cilindros hemáticos. C tres muy bajo y C cuatro normal.',
        question: '¿Cuál es el tratamiento inicial de elección?',
        options: 'Las opciones son: prednisona, restricción de sodio y furosemida, completar la amoxicilina para tratar el riñón, pulsos de ciclofosfamida, o biopsia renal antes de todo. Piénsalo.',
        answer: 'La respuesta es la B. Doce días de latencia después de una faringitis, nefrítico, y C tres bajo con C cuatro normal: postestreptocócica. Es autolimitada y el problema es el volumen, así que se trata con sal restringida y furosemida. La prednisona es la trampa: es inmune, pero no se inmunosuprime. Y el antibiótico no repara un daño glomerular que ya está instalado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 48',
      stem: 'Un paciente de 22 años, con antecedente de una amigdalitis bacteriana, hace 2 semanas, con tratamiento antibiótico incompleto, presenta un cuadro de cefalea y orinas espumosas, asociado a edema de extremidades inferiores. Al examen físico, tiene PA: 180/110 mmHg, FC: 62 lpm. Se solicitan exámenes, que muestran creatinina: 2,0 mg/dl, BUN: 46 mg/dl, sedimento de orina con abundantes glóbulos rojos, con 80% de dismorfia, ANA (-) y proteinuria de 900 mg/24 horas; C3 y C4 bajos.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Diuréticos' },
        { letter: 'B', text: 'Antiinflamatorios' },
        { letter: 'C', text: 'Antibióticos' },
        { letter: 'D', text: 'Inmunosupresores' },
        { letter: 'E', text: 'Corticoides' },
      ],
      correct: 'A',
      explanation: 'Glomerulonefritis postestreptocócica clásica (latencia de 2 semanas, nefrítico, hipocomplementemia). Se trata con soporte: diuréticos para el edema y la hipertensión. No se usan corticoides ni inmunosupresores.',
      say: {
        stem: 'Vamos con preguntas reales. Esta es del EUNACOM de julio de dos mil diecinueve. Paciente de veintidós años que tuvo una amigdalitis bacteriana hace dos semanas, con tratamiento incompleto. Ahora tiene cefalea, edema de piernas y presión de ciento ochenta con ciento diez. Creatinina dos, hematuria con ochenta por ciento de dismorfia, proteinuria de novecientos miligramos, y complemento bajo.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones son: diuréticos, antiinflamatorios, antibióticos, inmunosupresores, o corticoides. Piénsalo.',
        answer: 'Es la A, diuréticos. Latencia de dos semanas, nefrítico y complemento bajo: postestreptocócica clásica, y se trata el volumen. Fíjate en el distractor de los antibióticos: el dato del tratamiento incompleto está puesto para tentarte, pero el daño renal es inmunológico y ya está hecho. Y los corticoides no se usan en la forma típica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 65',
      stem: 'Un paciente de 32 años presenta un cuadro de dos días de odinofagia, fiebre y mialgias, a lo que se agrega hematuria. En sus exámenes destaca sedimento de orina con incontables glóbulos rojos, con 9% de dismorfia, creatinina plasmática de 0,7 mg/dl, BUN: 13 mg/dl, C3 y C4 en niveles normales y proteinuria de 500 mg/día.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Nefropatía mesangiocapilar' },
        { letter: 'B', text: 'Lupus' },
        { letter: 'C', text: 'Glomerulonefritis postestreptocócica' },
        { letter: 'D', text: 'Nefropatía por IgA' },
        { letter: 'E', text: 'Vasculitis de vaso pequeño' },
      ],
      correct: 'D',
      explanation: 'Hematuria a los 2 días de una faringitis (sinfaringítica) con C3 y C4 normales: nefropatía por IgA. La postestreptocócica, la lúpica y la mesangiocapilar (membranoproliferativa) bajan el C3.',
      say: {
        stem: 'Y ahora la contracara, del EUNACOM de julio de dos mil quince. Paciente de treinta y dos años con dos días de odinofagia, fiebre y mialgias, al que se agrega hematuria. Creatinina normal, proteinuria de quinientos miligramos al día, y C tres y C cuatro normales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: nefropatía mesangiocapilar, lupus, glomerulonefritis postestreptocócica, nefropatía por IgA, o vasculitis de vaso pequeño. Piénsalo.',
        answer: 'Es la D, nefropatía por IgA. Aplica los dos datos de la tabla: la hematuria apareció a los dos días, junto con la faringitis, y el complemento es normal. La postestreptocócica tienta porque hay faringitis, pero le falta la latencia y le falta el C tres bajo. Y la lúpica y la mesangiocapilar también consumen complemento.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Latencia + C3', kind: 'criteria', items: [
          { t: 'Nefrítico = hematuria dismórfica + HTA + edema', d: 'Con cilindros hemáticos',
            say: 'Cerremos con las reglas de oro. El síndrome nefrítico es hematuria dismórfica con cilindros hemáticos, hipertensión y edema.' },
          { t: 'Latencia 1–2 semanas + C3 bajo', d: 'Postestreptocócica',
            say: 'Latencia de una a dos semanas y C tres bajo: postestreptocócica. Hematuria junto con la faringitis y complemento normal: IgA.' },
          { t: 'C3 bajo más de 8–12 semanas', d: 'Biopsia: lupus o membranoproliferativa',
            say: 'Si el C tres sigue bajo después de ocho a doce semanas, ya no es postestreptocócica: se biopsia.' },
        ] },
        { title: 'Tratamiento', tag: 'Volumen', kind: 'pharma', items: [
          { t: 'Sal restringida + furosemida', d: 'Sin corticoides',
            say: 'Y se trata el volumen: sal restringida y furosemida, sin corticoides. Si te llevas una sola idea de hoy: en la postestreptocócica, el tiempo y el C tres hacen el diagnóstico, y el volumen decide el tratamiento. En la próxima clase vemos qué pasa cuando el nefrítico no se detiene y destruye el riñón en semanas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hematuria tras una infección: postestreptocócica o IgA',
    root: N('start', 'Nefrítico tras una infección', '¿Cuánto tiempo pasó?',
      'Paciente con orina oscura, edema e hipertensión, y un sedimento con hematuria dismórfica y cilindros hemáticos, que viene de una infección. Es un síndrome nefrítico, y la primera pregunta es la latencia: cuánto tiempo pasó entre la infección y la orina oscura.',
      ['24–48 h, junto con la infección', N('refer', 'Nefropatía por IgA', 'C3 y C4 normales',
        'Si la hematuria apareció junto con la infección respiratoria, en veinticuatro a cuarenta y ocho horas, y el complemento es normal, piensa en nefropatía por IgA. Control de presión con IECA o ARA dos.')],
      ['1–2 sem (faringe) o 3–6 sem (piel)', N('do', 'GNPE: sal + furosemida', 'C3 bajo, C4 normal · sin corticoides',
        'Si hubo una latencia de una a dos semanas tras una faringitis, o tres a seis tras una infección de piel, con C tres bajo y C cuatro normal: postestreptocócica. Restricción de sodio y líquidos y furosemida, sin corticoides. Si hay edema pulmonar o crisis hipertensiva, furosemida en bolo intravenoso.',
        ['', N('q', '¿El C3 se normaliza a las 6–8 semanas?', 'Control del complemento',
          'Después, controla el complemento. ¿Volvió a lo normal a las seis a ocho semanas?',
          ['SÍ', N('ok', 'Confirma GNPE', 'Cuadro autolimitado',
            'Si se normalizó, se confirma la postestreptocócica, que se resolvió sola.')],
          ['NO, > 8–12 semanas', N('alert', 'Biopsia renal', 'Lupus o membranoproliferativa',
            'Si sigue bajo después de ocho a doce semanas, ya no es postestreptocócica: se biopsia pensando en lupus o membranoproliferativa.')])])]),
  },
};
