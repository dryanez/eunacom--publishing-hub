// Clase 5.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo sospechar un riñón isquémico, cómo estudiarlo y qué lo cura',
      say: 'Bienvenidos. Hoy vemos la hipertensión secundaria de origen renovascular: la estenosis de la arteria renal. Es una causa poco frecuente de hipertensión, pero vale la pena buscarla, porque es de las pocas que se pueden curar. En el examen se pregunta de tres formas: qué pista te hace sospecharla, cuál es el primer examen, y si el paciente es una mujer joven o un adulto mayor vasculópata. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Un riñón que cree que le falta presión',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'cause', t: 'Estenosis de la arteria renal', s: 'Llega menos sangre al riñón' },
        { id: 'ren', col: 1, row: 1, k: 'mech', t: 'Renina masiva', s: 'El riñón isquémico la secreta' },
        { id: 'ang', col: 2, row: 0, k: 'effect', t: 'Angiotensina II', s: 'Vasoconstricción sistémica' },
        { id: 'ald', col: 2, row: 2, k: 'effect', t: 'Aldosterona', s: 'Retiene sodio, pierde potasio' },
        { id: 'hta', col: 3, row: 1, k: 'risk', t: 'HTA severa y refractaria', s: 'Con K bajo o limítrofe' },
        { id: 'iec', col: 3, row: 3, k: 'trap', t: 'IECA o ARA-II', s: 'Cae la filtración glomerular' },
      ],
      edges: [
        { from: 'est', to: 'ren' }, { from: 'ren', to: 'ang' }, { from: 'ren', to: 'ald' },
        { from: 'ang', to: 'hta' }, { from: 'ald', to: 'hta' },
        { from: 'ang', to: 'iec', label: 'si se bloquea' },
      ],
      steps: [
        { show: ['est'], note: 'La causa más frecuente de HTA secundaria renovascular curable',
          say: 'Partamos por el mecanismo. La hipertensión secundaria es cerca del cinco a diez por ciento de todas las hipertensiones, y la estenosis de la arteria renal es su causa renovascular curable más frecuente. Una placa o una displasia estrecha la arteria, y al riñón le llega menos sangre.' },
        { show: ['ren'], note: 'El riñón interpreta hipotensión',
          say: 'Ese riñón no sabe que el problema es la arteria. Interpreta que al cuerpo le falta presión, y responde como lo haría en un shock: secreta renina en forma masiva.' },
        { show: ['ang', 'ald'], note: 'Vasoconstricción y retención de volumen',
          say: 'La renina activa todo el eje. La angiotensina dos produce una vasoconstricción sistémica intensa, y la aldosterona retiene sodio y agua. Y fíjate en un detalle que se pregunta: la aldosterona elimina potasio, así que estos pacientes pueden tener el potasio bajo o limítrofe.' },
        { show: ['hta'], note: 'Por eso es severa y cuesta controlarla',
          say: 'El resultado es una hipertensión severa, que no cede con los fármacos habituales. Ya tienes dos pistas clínicas que salen directo del mecanismo.' },
        { show: ['iec'], note: 'La angiotensina sostenía la filtración',
          say: 'Y la tercera pista es la más elegante. En ese riñón con poco flujo, la angiotensina dos es lo que mantiene la filtración, porque contrae la arteriola eferente. Si le das un inhibidor de la enzima convertidora, un IECA, o un antagonista del receptor, un ARA dos, le quitas ese sostén, y la filtración se desploma. Recuerda que en la clase de enfermedad renal crónica el IECA era nefroprotector; aquí es justamente lo que delata la estenosis.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Sospecha clínica',
      title: '¿Cuándo pensar en la arteria renal?',
      cards: [
        { title: 'El perfil del paciente', tag: 'Edad y control', kind: 'criteria', items: [
          { t: 'HTA de inicio brusco', d: 'En menores de 30 o mayores de 55–60 años',
            say: 'Veamos cuándo sospecharla. Primero, la edad: una hipertensión que empieza en forma brusca antes de los treinta años hace pensar en displasia fibromuscular; después de los cincuenta y cinco a sesenta, con ateromatosis en otros territorios, en ateroesclerosis.' },
          { t: 'HTA refractaria', d: 'No cede con 3 fármacos a dosis plenas, uno diurético',
            say: 'Segundo, la hipertensión refractaria o resistente: la que no se controla con tres fármacos a dosis plenas, y uno de ellos es un diurético.' },
        ] },
        { title: 'Las pistas del examen', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Soplo abdominal en flanco', d: 'Sisto-diastólico; en el 40–50 %',
            say: 'Tercero, la pista del examen físico: un soplo abdominal continuo o sisto-diastólico en el epigastrio o en el flanco. Aparece en cerca de la mitad de los pacientes, y cuando está es muy específico. Es el flujo turbulento que pasa por la estrechez.' },
          { t: 'Creatinina sube > 30 % con IECA', d: 'En 2 semanas: bilateral o riñón único',
            say: 'Cuarto, lo que acabamos de ver en el mecanismo: la creatinina sube más de un treinta por ciento en las primeras dos semanas después de iniciar un IECA o un ARA dos. Eso es el sello de una estenosis bilateral crítica, o de una estenosis en un riñón único.' },
          { t: 'Edema pulmonar flash', d: 'Recurrente, con función sistólica normal',
            say: 'Y quinto, episodios repetidos de edema pulmonar agudo súbito, el llamado edema pulmonar flash, en un paciente con la función sistólica del ventrículo izquierdo conservada. El corazón está bien; es la retención de volumen y la vasoconstricción las que lo inundan.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dos enfermedades distintas',
      title: 'Displasia fibromuscular vs ateroesclerosis',
      cards: [
        { title: 'Displasia fibromuscular', tag: 'Mujer joven', kind: 'key', items: [
          { t: 'Mujer de 15 a 35 años', d: 'Sin factores de riesgo cardiovascular',
            say: 'La misma estenosis tiene dos causas muy distintas, y el examen te pide reconocerlas por el paciente. La displasia fibromuscular es de la mujer joven, entre quince y treinta y cinco años, sin ningún factor de riesgo cardiovascular.' },
          { t: 'Capa media, 2/3 distales', d: 'No es inflamatoria ni ateroesclerótica',
            say: 'No es inflamación ni ateroesclerosis: es una enfermedad de la capa media de la arteria, y compromete los dos tercios distales, lejos de la aorta.' },
          { t: 'Collar de perlas', d: 'Imagen clásica en la angiografía',
            say: 'En la angiografía da una imagen clásica, en collar de perlas o rosario: zonas estrechas alternadas con dilataciones. Esa imagen se pregunta.' },
        ] },
        { title: 'Ateroesclerosis renal', tag: 'Adulto mayor', kind: 'alert', items: [
          { t: 'Mayor de 60, vasculópata', d: 'Fumador, diabético, dislipidémico, IAM previo',
            say: 'La ateroesclerosis renal es el polo opuesto: adulto mayor de sesenta años, más frecuente en hombres, fumador, diabético, dislipidémico, a menudo con un infarto previo o enfermedad vascular en otros territorios.' },
          { t: 'Ostium y tercio proximal', d: 'Placa en el origen desde la aorta',
            say: 'Y como es la misma placa de la aorta, la lesión está en el ostium, el origen de la arteria renal, o en su tercio proximal. Joven y distal es displasia; viejo y proximal es ateroesclerosis.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Estudio',
      title: 'Primero el Doppler, después la anatomía',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha de HTA renovascular', s: 'Edad, refractaria, soplo, IECA' },
        { id: 'dop', col: 1, row: 1, k: 'good', t: 'Eco Doppler de arterias renales', s: 'Examen inicial de elección' },
        { id: 'cri', col: 2, row: 0, k: 'mech', t: 'VSM > 180–200 cm/s', s: 'Índice reno-aórtico > 3,5' },
        { id: 'ana', col: 2, row: 2, k: 'refer', t: 'AngioTAC o angio-RM', s: 'Si se planifica intervenir' },
        { id: 'art', col: 3, row: 1, k: 'good', t: 'Arteriografía renal', s: 'Estándar de oro; trata en el mismo acto' },
      ],
      edges: [
        { from: 'sos', to: 'dop' }, { from: 'dop', to: 'cri', label: 'mide' },
        { from: 'dop', to: 'ana', label: 'positivo o dudoso' }, { from: 'ana', to: 'art' },
      ],
      steps: [
        { show: ['sos', 'dop'], note: 'No invasivo, sin radiación ni contraste',
          say: 'Con la sospecha hecha, ¿qué examen pides primero? La ecografía Doppler de arterias renales. Es no invasiva, no irradia y no usa contraste, lo que importa mucho en un riñón que ya puede estar dañado. Es la respuesta de la mayoría de las preguntas de este tema.' },
        { show: ['cri'], note: 'Estenosis significativa: más del 60 % de la luz',
          say: 'El Doppler mide la velocidad de la sangre en la estrechez. Una velocidad sistólica máxima sobre ciento ochenta a doscientos centímetros por segundo, y un índice reno-aórtico sobre tres coma cinco, indican una estenosis significativa, de más del sesenta por ciento de la luz.' },
        { show: ['ana'], note: 'Confirmar la anatomía antes de intervenir',
          say: 'Si el Doppler es dudoso, o es positivo y se va a intervenir, se confirma la anatomía con un angioTAC, si la función renal lo permite, o con una angiorresonancia con gadolinio.' },
        { show: ['art'], note: 'Diagnostica y trata a la vez',
          say: 'Y la arteriografía renal por cateterismo es el estándar de oro. Su gracia es que en el mismo acto se puede hacer la angioplastía. Ojo con la trampa: estándar de oro no significa primer examen. El primero es siempre el Doppler.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'La causa decide el tratamiento',
      nodes: [
        { id: 'ear', col: 0, row: 1, k: 'start', t: 'Estenosis confirmada', s: '¿Quién es el paciente?' },
        { id: 'dfm', col: 1, row: 0, k: 'q', t: 'Displasia fibromuscular', s: 'Mujer joven' },
        { id: 'bal', col: 2, row: 0, k: 'good', t: 'Angioplastía con balón', s: 'Sin stent; cura > 70 %' },
        { id: 'ate', col: 1, row: 2, k: 'q', t: 'Ateroesclerosis', s: 'Adulto mayor' },
        { id: 'med', col: 2, row: 2, k: 'good', t: 'Tratamiento médico intensivo', s: 'Estatina, antiagregante, control de PA' },
        { id: 'ste', col: 3, row: 2, k: 'refer', t: 'Angioplastía con stent', s: 'Refractaria, TFG cae o edema recurrente' },
      ],
      edges: [
        { from: 'ear', to: 'dfm' }, { from: 'ear', to: 'ate' },
        { from: 'dfm', to: 'bal' }, { from: 'ate', to: 'med' }, { from: 'med', to: 'ste', label: 'si falla' },
      ],
      steps: [
        { show: ['ear'], note: 'Misma estenosis, dos conductas',
          say: 'Con la estenosis confirmada, el tratamiento depende de la causa, y aquí se separan de verdad las dos enfermedades.' },
        { show: ['dfm', 'bal'], note: 'La joven se cura',
          say: 'En la displasia fibromuscular, el tratamiento de elección es la angioplastía renal con balón simple, sin stent. Y el resultado es muy bueno: según el libro, cura la hipertensión en más del setenta por ciento. Es la paciente a la que de verdad le cambias la vida.' },
        { show: ['ate', 'med'], note: 'El vasculópata parte con fármacos',
          say: 'En la ateroesclerosis, en cambio, la primera línea no es el procedimiento: es el tratamiento médico agresivo. Estatina, antiagregante y un control estricto de la presión, porque ese paciente tiene la misma enfermedad en el corazón y en el cerebro.' },
        { show: ['ste'], note: 'Stent solo en casos seleccionados',
          say: 'La angioplastía con stent queda para casos seleccionados: hipertensión refractaria, caída progresiva de la filtración glomerular o edema pulmonar recurrente. La trampa es mandar a todo adulto mayor con estenosis directo a stent.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: de la sospecha al tratamiento, tal como lo razonas en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Displasia o ateroesclerosis: las diferencias que se preguntan',
      head: ['Parámetro', 'Displasia fibromuscular', 'Ateroesclerosis renal'],
      rows: [
        { cells: ['Paciente', 'Mujer de 15–35 años, sin riesgo CV', 'Mayor de 55–60, fumador, diabético'],
          say: 'Repasemos las diferencias en una tabla. El paciente: mujer joven sin factores de riesgo, versus adulto mayor fumador, diabético o dislipidémico.' },
        { cells: ['Lesión', 'Tercio medio y distal', 'Ostium y tercio proximal'],
          say: 'La ubicación: la displasia es distal; la ateroesclerosis está en el origen de la arteria, pegada a la aorta.' },
        { cells: ['Angiografía', 'Collar de perlas', 'Estenosis orificial calcificada'],
          say: 'La imagen: collar de perlas en la displasia, y una estenosis excéntrica, orificial y calcificada en la ateroesclerosis.' },
        { cells: ['Tratamiento', 'Angioplastía con balón, sin stent', 'Médico intensivo; stent solo si falla'],
          say: 'Y el tratamiento: balón sin stent para la displasia; tratamiento médico intensivo para la ateroesclerosis, y stent solo en casos seleccionados.' },
        { cells: ['Primer examen', 'Eco Doppler renal', 'Eco Doppler renal'],
          say: 'Y en las dos, el primer examen es el Doppler de arterias renales. Pedir la arteriografía de entrada es el error más frecuente: es el estándar de oro, pero no el primer paso.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 22 años, sin antecedentes, consulta por cefalea pulsátil recurrente de 2 meses. Delgada, PA 175/105 mmHg en ambos brazos, FC 72 lpm. Soplo sistólico rudo en flanco derecho que se prolonga hacia la fosa lumbar. Creatinina 0,8 mg/dL, K 3,3 mEq/L, HCO₃ 28 mEq/L. No usa anticonceptivos orales.',
      question: '¿Cuál es el primer examen a solicitar?',
      options: [
        { letter: 'A', text: 'Arteriografía renal selectiva' },
        { letter: 'B', text: 'Ecografía Doppler de arterias renales' },
        { letter: 'C', text: 'Monitoreo ambulatorio de presión arterial de 24 horas' },
        { letter: 'D', text: 'AngioTAC de arterias renales' },
        { letter: 'E', text: 'Metanefrinas urinarias' },
      ],
      correct: 'B',
      explanation: 'HTA severa en mujer joven sin factores metabólicos, soplo en flanco y potasio limítrofe por hiperaldosteronismo secundario: HTA renovascular por displasia fibromuscular. El primer examen es el Doppler de arterias renales; la arteriografía es el estándar de oro y se usa para tratar (angioplastía con balón sin stent).',
      say: {
        stem: 'Vamos con un caso. Mujer de veintidós años, sin antecedentes, con dos meses de cefalea pulsátil. Es delgada, tiene una presión de ciento setenta y cinco con ciento cinco en ambos brazos, y al auscultar el abdomen se oye un soplo sistólico rudo en el flanco derecho. Creatinina normal, potasio de tres coma tres y bicarbonato de veintiocho. No usa anticonceptivos.',
        question: '¿Cuál es el primer examen a solicitar?',
        options: 'Las opciones: arteriografía renal, ecografía Doppler de arterias renales, monitoreo de presión de veinticuatro horas, angioTAC renal, o metanefrinas urinarias. Piénsalo.',
        answer: 'Es la B. Junta las pistas: mujer joven, hipertensión severa, soplo en el flanco, y un potasio bajo por el hiperaldosteronismo secundario. Es una displasia fibromuscular, y el primer examen es el Doppler. La arteriografía tienta porque es el estándar de oro, y en esta paciente de hecho se hará, pero para tratarla con angioplastía con balón. El monitoreo de presión no aporta: la hipertensión ya está clara.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 1',
      stem: 'Un paciente de 18 años consulta por cefalea de algunas semanas de evolución, que ha ido en aumento, hasta alcanzar gran intensidad. En su examen físico destaca presión arterial 170/100 mmHg, FC: 72x’ y presencia de un soplo abdominal, en el flanco derecho.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Disección aórtica' },
        { letter: 'B', text: 'Aneurisma aórtico abdominal' },
        { letter: 'C', text: 'Hipertensión esencial' },
        { letter: 'D', text: 'Hipertensión renovascular' },
        { letter: 'E', text: 'Accidente vascular encefálico' },
      ],
      correct: 'D',
      explanation: 'HTA severa en un joven con soplo abdominal en el flanco: HTA renovascular clásica, a esta edad por displasia fibromuscular. El soplo es el flujo turbulento en la estenosis.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de dieciocho años con cefalea de semanas, cada vez más intensa. Tiene una presión de ciento setenta con cien y un soplo abdominal en el flanco derecho.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: disección aórtica, aneurisma aórtico abdominal, hipertensión esencial, hipertensión renovascular, o accidente vascular encefálico. Piénsalo.',
        answer: 'Es la D, hipertensión renovascular. Un joven con hipertensión severa ya obliga a buscar una causa secundaria, y el soplo en el flanco te dice dónde está. La hipertensión esencial es el distractor: es lo más frecuente en general, pero no a los dieciocho años, tan severa y con soplo. Y el aneurisma no calza: es una enfermedad del adulto mayor.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 24',
      stem: 'Un paciente de 65 años, con antecedente de hipertensión arterial, diagnosticada hace un año en tratamiento con atenolol 50 mg cada 12 horas y enalapril 20 mg cada 12 horas, refiere múltiples tomas de presión arterial con valores sobre 160/100 mmHg. Al examen físico tiene FC: 60x’, PA: 158/100 mmHg, sin alteraciones en el examen segmentario. Se solicitan exámenes que muestran creatinina: 1,2 mg/dl, sodio: 143 mEq/L, potasio: 3,4 mEq/L, hemograma normal y TSH: 3,2 UI/L.',
      question: '¿Con qué examen se debe proseguir su estudio?',
      options: [
        { letter: 'A', text: 'Cortisol basal y post dexametasona' },
        { letter: 'B', text: 'Monitoreo de presión arterial de 24 horas' },
        { letter: 'C', text: 'Calcemia y niveles de paratohormona' },
        { letter: 'D', text: 'Metanefrinas y normetanefrinas en orina' },
        { letter: 'E', text: 'Ecografía Doppler de arterias renales' },
      ],
      correct: 'E',
      explanation: 'HTA de inicio después de los 60 años, de difícil control con dos fármacos a dosis plenas y potasio en el límite inferior: sospecha de estenosis ateroesclerótica de la arteria renal. El examen no invasivo de primera línea es el Doppler de arterias renales.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veintidós. Hombre de sesenta y cinco años, con hipertensión diagnosticada hace un año, que sigue sobre ciento sesenta con cien a pesar de atenolol y enalapril en dosis altas. Creatinina de uno coma dos, potasio de tres coma cuatro, y TSH normal.',
        question: '¿Con qué examen se debe proseguir su estudio?',
        options: 'Las opciones: cortisol post dexametasona, monitoreo de presión de veinticuatro horas, calcemia y paratohormona, metanefrinas urinarias, o Doppler de arterias renales. Piénsalo.',
        answer: 'Es la E. Fíjate en el perfil: hipertensión que aparece después de los sesenta, difícil de controlar, y un potasio en el límite bajo, que sugiere el eje renina angiotensina aldosterona activado. Es el otro extremo de edad, el de la ateroesclerosis, y el primer examen es el Doppler. El monitoreo de veinticuatro horas tienta, pero el paciente ya trae muchas tomas elevadas y el examen físico lo confirma: no hay nada que confirmar, hay que buscar la causa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 83',
      stem: 'Paciente con HTA de difícil control, creatinina levemente elevada e hiperkalemia.',
      question: '¿Cuál es el estudio a solicitar?',
      options: [
        { letter: 'A', text: 'Ecografía Doppler de arterias renales' },
        { letter: 'B', text: 'Renograma isotópico con captopril' },
        { letter: 'C', text: 'Arteriografía renal selectiva' },
        { letter: 'D', text: 'AngioTAC renal' },
        { letter: 'E', text: 'Biopsia renal' },
      ],
      correct: 'A',
      explanation: 'HTA de difícil control con deterioro de la función renal: sospecha de HTA renovascular. El primer estudio es el Doppler de arterias renales: no invasivo y sin contraste. AngioTAC y arteriografía vienen después, si se planifica intervenir.',
      say: {
        stem: 'Una más, del EUNACOM de enero de dos mil veintitrés. Es una pregunta corta: paciente con hipertensión de difícil control, creatinina levemente elevada e hiperkalemia.',
        question: '¿Cuál es el estudio a solicitar?',
        options: 'Las opciones: Doppler de arterias renales, renograma isotópico con captopril, arteriografía renal, angioTAC renal, o biopsia renal. Piénsalo.',
        answer: 'Es la A. Aquí ya no te preguntan si es renovascular, sino con qué examen partes, y todas las alternativas son de imagen renal. Hipertensión difícil con la función renal alterada es sospecha de estenosis, y se parte por el Doppler, que no usa contraste. El angioTAC y la arteriografía son la trampa: vienen después, cuando vas a intervenir, y el contraste es un riesgo en un riñón que ya está fallando.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 59',
      stem: 'Una paciente de 60 años presenta cefalea, astenia y calambres en extremidades inferiores. Al examen físico destaca PA: 170/95 mmHg, FC: 80 lpm y en sus exámenes destaca Na: 150 mEq/L, K: 2.6 mEq/L, Cl: 90 mEq/L y TSH: 4.0 UI/L.',
      question: 'La causa más probable de la hipertensión es:',
      options: [
        { letter: 'A', text: 'Hipertensión renovascular' },
        { letter: 'B', text: 'Feocromocitoma' },
        { letter: 'C', text: 'Hipotiroidismo' },
        { letter: 'D', text: 'Hiperaldosteronismo' },
        { letter: 'E', text: 'Hipertensión esencial' },
      ],
      correct: 'D',
      explanation: 'La HTA renovascular también puede dar hipokalemia (hiperaldosteronismo secundario), pero aquí no hay soplo ni alza de creatinina; la hipokalemia marcada con calambres, astenia y sodio alto calza mejor con hiperaldosteronismo primario.',
      say: {
        stem: 'Y una última, para no caer en el exceso contrario. Es del EUNACOM de julio de dos mil dieciséis. Mujer de sesenta años con cefalea, astenia y calambres en las piernas. Presión de ciento setenta con noventa y cinco. Sodio de ciento cincuenta y potasio de dos coma seis, con TSH normal.',
        question: '¿Cuál es la causa más probable de la hipertensión?',
        options: 'Las opciones: hipertensión renovascular, feocromocitoma, hipotiroidismo, hiperaldosteronismo, o hipertensión esencial. Piénsalo.',
        answer: 'Es la D, hiperaldosteronismo. La renovascular tienta, porque dijimos que también baja el potasio. Pero en la renovascular el potasio baja por un hiperaldosteronismo secundario, y lo que la delata es el soplo o el alza de creatinina, que aquí no aparecen. Una hipokalemia tan marcada, con calambres, astenia y sodio alto, apunta a que el exceso de aldosterona viene de la suprarrenal. La hipokalemia sola no basta: busca el soplo y la creatinina.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sospecha', tag: 'Las pistas', kind: 'key', items: [
          { t: 'Edad extrema o HTA refractaria', d: 'Menor de 30 o mayor de 55–60',
            say: 'Cerremos con las reglas de oro. Sospecha la arteria renal en la hipertensión de los extremos de edad, en la refractaria, y en el edema pulmonar flash con corazón normal.' },
          { t: 'Soplo en flanco o creatinina que sube con IECA', d: 'Más de 30 % en 2 semanas',
            say: 'Y las dos pistas que más se preguntan: el soplo en el flanco, y la creatinina que sube más de un treinta por ciento después de iniciar un IECA o un ARA dos.' },
        ] },
        { title: 'Estudio', tag: 'Primero', kind: 'pharma', items: [
          { t: 'Eco Doppler de arterias renales', d: 'Primer examen; la arteriografía es el estándar',
            say: 'El primer examen es el Doppler de arterias renales. La arteriografía es el estándar de oro, pero se usa para confirmar antes de intervenir y para tratar en el mismo acto.' },
        ] },
        { title: 'Tratamiento', tag: 'Según la causa', kind: 'alert', items: [
          { t: 'Joven con collar de perlas', d: 'Angioplastía con balón, sin stent',
            say: 'La mujer joven con collar de perlas va a angioplastía con balón, sin stent, y suele curarse.' },
          { t: 'Adulto mayor con placa ostial', d: 'Tratamiento médico; stent solo si falla',
            say: 'El adulto mayor con placa en el ostium parte con tratamiento médico intensivo, y el stent queda para casos seleccionados. Si te llevas una sola idea de hoy: hipertensión con soplo en el flanco o creatinina que sube con IECA, piensa en la arteria renal y pide un Doppler. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'HTA renovascular: de la sospecha al tratamiento',
    root: N('start', 'Paciente hipertenso', 'Con alguna pista de causa secundaria',
      'Paciente hipertenso. La primera pregunta es si hay algo que haga sospechar una causa renovascular.',
      ['', N('q', '¿Hay pistas de estenosis renal?', 'Edad extrema · refractaria · soplo · IECA · edema flash',
        'Las pistas son: inicio antes de los treinta o después de los cincuenta y cinco a sesenta, hipertensión refractaria, soplo en el flanco, creatinina que sube más de un treinta por ciento con IECA, o edema pulmonar flash.',
        ['NO', N('ok', 'Manejo habitual de la HTA', 'Sin estudio renovascular',
          'Sin pistas, se maneja como una hipertensión habitual, sin estudio renovascular.')],
        ['SÍ', N('do', 'Eco Doppler de arterias renales', 'VSM > 180–200 cm/s',
          'Con alguna pista, el primer examen es el Doppler de arterias renales, que no irradia ni usa contraste.',
          ['Estenosis significativa', N('q', '¿Quién es el paciente?', 'Joven vs vasculópata',
            'Si muestra una estenosis significativa, se confirma la anatomía antes de intervenir, y la conducta depende de quién es el paciente.',
            ['Mujer joven', N('do', 'Displasia fibromuscular', 'Angioplastía con balón, sin stent',
              'Mujer joven, lesión distal en collar de perlas: displasia fibromuscular. Angioplastía con balón sin stent, que suele curar la hipertensión.')],
            ['Mayor de 60', N('refer', 'Ateroesclerosis renal', 'Tratamiento médico; stent si falla',
              'Adulto mayor vasculópata, placa ostial: ateroesclerosis. Tratamiento médico intensivo con estatina, antiagregante y control de presión; stent solo si es refractaria, cae la filtración o repite el edema pulmonar.')])])])]),
  },
};
