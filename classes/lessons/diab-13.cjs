// Clase 3.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué se suspende al ingreso, qué meta se busca y por qué el esquema móvil solo no sirve',
      say: 'Bienvenidos. Hoy vemos al paciente diabético que se hospitaliza, por una neumonía, una cirugía o una sepsis. Venimos de aprender los esquemas de insulina, y ahora los llevamos a la sala. El examen pregunta tres cosas, casi siempre las mismas: qué meta de glicemia se busca, qué fármacos orales se suspenden al ingreso, y con qué esquema de insulina se reemplazan. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Definición y metas',
      title: 'Hiperglicemia hospitalaria: la meta es 140 a 180',
      cards: [
        { title: 'Definición', tag: 'Con o sin diabetes', kind: 'criteria', items: [
          { t: 'Glicemia > 140 mg/dL', d: 'En cualquier paciente hospitalizado',
            say: 'Primero, la definición. Hiperglicemia hospitalaria es cualquier glicemia sobre ciento cuarenta en un paciente internado, tenga o no diagnóstico previo de diabetes. Fíjate en eso: no hace falta ser diabético para tenerla.' },
          { t: 'No es inocente', d: 'Más infecciones, estadía y falla multiorgánica',
            say: 'Y no es un número inocente. La hiperglicemia de estrés se asocia a más mortalidad, más infecciones de la herida operatoria, estadías más largas y falla multiorgánica. Por eso se trata, y no se deja para el alta.' },
        ] },
        { title: 'Meta glicémica', tag: 'Crítico y no crítico', kind: 'key', items: [
          { t: '140 a 180 mg/dL', d: 'En UCI y en sala',
            say: 'La meta es una sola, y se pregunta: mantener la glicemia entre ciento cuarenta y ciento ochenta, tanto en la unidad de cuidados intensivos como en la sala de medicina o cirugía.' },
        ] },
        { title: 'Metas estrictas', tag: 'Trampa', kind: 'alert', items: [
          { t: '< 110 mg/dL: más muertes', d: 'Evidencia del ensayo NICE-SUGAR',
            say: '¿Y por qué no apuntar más bajo, a menos de ciento diez? Porque se probó, en el ensayo NICE-SUGAR, y aumentó las hipoglicemias severas y la mortalidad. En el hospitalizado, apretar demasiado mata más que la hiperglicemia moderada. Si una alternativa te ofrece normalizar la glicemia en todo momento, es la trampa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Al ingreso',
      title: 'Se suspenden todos los orales',
      nodes: [
        { id: 'ing', col: 0, row: 2, k: 'start', t: 'Diabético que se hospitaliza', s: 'Sepsis, cirugía, neumonía' },
        { id: 'met', col: 1, row: 0, k: 'cause', t: 'Metformina', s: 'Sepsis, IRA, hipoxemia, contraste' },
        { id: 'mala', col: 2, row: 0, k: 'alert', t: 'Acidosis láctica', s: 'Riesgo letal' },
        { id: 'su', col: 1, row: 2, k: 'cause', t: 'Sulfonilureas', s: 'Ingesta irregular o régimen cero' },
        { id: 'hipo', col: 2, row: 2, k: 'alert', t: 'Hipoglicemia prolongada', s: 'Glibenclamida' },
        { id: 'sglt', col: 1, row: 4, k: 'cause', t: 'iSGLT2', s: 'Cirugía mayor o infección' },
        { id: 'cad', col: 2, row: 4, k: 'alert', t: 'CAD euglicémica', s: 'Y deshidratación' },
        { id: 'ins', col: 3, row: 2, k: 'good', t: 'Insulina programada', s: 'Reemplaza a todos' },
      ],
      edges: [
        { from: 'ing', to: 'met' }, { from: 'ing', to: 'su' }, { from: 'ing', to: 'sglt' },
        { from: 'met', to: 'mala', label: 'riesgo' }, { from: 'su', to: 'hipo', label: 'riesgo' }, { from: 'sglt', to: 'cad', label: 'riesgo' },
        { from: 'mala', to: 'ins' }, { from: 'hipo', to: 'ins' }, { from: 'cad', to: 'ins' },
      ],
      steps: [
        { show: ['ing'], note: 'Al ingreso, se suspenden todos',
          say: 'Ahora, lo primero que haces cuando ingresa el paciente. La regla es simple: se suspenden todos los hipoglucemiantes orales. Pero el examen quiere que sepas el porqué de cada uno, así que vamos fármaco por fármaco.' },
        { show: ['met'], note: 'El gatillo es la hipoperfusión',
          say: 'La metformina se suspende siempre ante sepsis, hipoperfusión, inestabilidad hemodinámica, insuficiencia renal aguda, hipoxemia, o si se va a usar medio de contraste yodado. Fíjate que todas son situaciones en que el tejido recibe poco oxígeno o el riñón no elimina bien el fármaco.' },
        { show: ['mala'], note: 'Acidosis láctica asociada a metformina',
          say: 'Y el riesgo es la acidosis láctica asociada a metformina, que puede ser letal. Por eso es una de las reglas de más jerarquía del tema: paciente séptico o con falla renal aguda, metformina fuera.' },
        { show: ['su', 'hipo'], note: 'Come poco o nada, pero el fármaco sigue actuando',
          say: 'Las sulfonilureas, como la glibenclamida, se suspenden de inmediato. El hospitalizado come de forma irregular o queda en régimen cero, pero el fármaco sigue estimulando la insulina. El resultado son hipoglicemias prolongadas, que vemos en detalle la próxima clase.' },
        { show: ['sglt', 'cad'], note: 'Estrés + iSGLT2 = cetoacidosis sin hiperglicemia marcada',
          say: 'Y los inhibidores de SGLT dos, como la dapagliflozina, se suspenden ante cirugía mayor o infección, por el riesgo de cetoacidosis diabética euglicémica y deshidratación. Guarda esta idea para las clases de cetoacidosis.' },
        { show: ['ins'], note: 'El reemplazo es siempre insulina',
          say: 'Tres fármacos, tres riesgos distintos, y un solo reemplazo: la insulina programada. La pregunta siguiente es cómo se indica esa insulina.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'El error más sancionado',
      title: 'El esquema móvil solo persigue la glicemia',
      nodes: [
        { id: 'mov', col: 0, row: 1, k: 'trap', t: 'Esquema móvil aislado', s: 'Cristalina según hemoglucotest' },
        { id: 'rea', col: 1, row: 0, k: 'mech', t: 'Es reactivo', s: 'Trata la glicemia que ya subió' },
        { id: 'bas', col: 1, row: 2, k: 'mech', t: 'Sin cobertura basal', s: 'Nada entre una dosis y otra' },
        { id: 'mon', col: 2, row: 1, k: 'risk', t: 'Montaña rusa glicémica', s: 'Hiperglicemia e hipoglicemia' },
        { id: 'ok', col: 3, row: 1, k: 'good', t: 'Basal + corrección', s: 'O basal-bolo-corrección' },
      ],
      edges: [
        { from: 'mov', to: 'rea' }, { from: 'mov', to: 'bas' },
        { from: 'rea', to: 'mon' }, { from: 'bas', to: 'mon' },
        { from: 'mon', to: 'ok', label: 'se reemplaza por' },
      ],
      steps: [
        { show: ['mov'], note: 'Proscrito como terapia única',
          say: 'Uno de los errores más castigados en el examen es indicar un esquema móvil de insulina cristalina según hemoglucotest, y nada más. En inglés se llama sliding scale. Como terapia única está proscrito. Veamos por qué, porque el mecanismo te lo deja claro.' },
        { show: ['rea'], note: 'Llega siempre tarde',
          say: 'Primero, es reactivo. Esperas a que la glicemia suba, y recién entonces pones insulina. No previene la hiperglicemia: la persigue, siempre un paso atrás.' },
        { show: ['bas'], note: 'Falta la insulina de fondo',
          say: 'Segundo, no aporta cobertura basal. Entre una dosis y la siguiente, el paciente no tiene insulina de fondo, justo cuando el estrés de la enfermedad la está pidiendo.' },
        { show: ['mon'], note: 'Picos y caídas',
          say: 'El resultado es una montaña rusa glicémica: picos de hiperglicemia seguidos de correcciones que a veces se pasan y terminan en hipoglicemia. Ineficaz y riesgoso a la vez.' },
        { show: ['ok'], note: 'Lo correcto: insulina programada',
          say: 'Lo correcto es un esquema programado: una insulina basal que cubre el fondo, más dosis de corrección. Ojo con el matiz: la escala de corrección sí se usa, pero siempre encima de una basal, nunca sola.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Qué esquema indicar',
      title: 'Crítico, en ayunas o comiendo',
      nodes: [
        { id: 'pac', col: 0, row: 2, k: 'start', t: 'Hospitalizado con hiperglicemia', s: 'Orales suspendidos' },
        { id: 'q1', col: 1, row: 2, k: 'q', t: '¿Crítico o inestable?', s: 'UCI o shock' },
        { id: 'ev', col: 2, row: 0, k: 'alert', t: 'Insulina cristalina EV', s: 'Bomba, control cada 1–2 h' },
        { id: 'q2', col: 2, row: 3, k: 'q', t: '¿Se alimenta?', s: 'Sala básica o quirúrgica' },
        { id: 'bc', col: 3, row: 2, k: 'good', t: 'Basal-corrección', s: 'Si está en ayunas' },
        { id: 'bb', col: 3, row: 4, k: 'good', t: 'Basal-bolo-corrección', s: 'Si tolera alimentación' },
      ],
      edges: [
        { from: 'pac', to: 'q1' },
        { from: 'q1', to: 'ev', label: 'sí' }, { from: 'q1', to: 'q2', label: 'no' },
        { from: 'q2', to: 'bc', label: 'ayunas' }, { from: 'q2', to: 'bb', label: 'come' },
      ],
      steps: [
        { show: ['pac', 'q1'], note: 'La primera pregunta: dónde está el paciente',
          say: 'Entonces, ¿qué esquema indicas? La primera pregunta es si el paciente es crítico: está en la unidad de cuidados intensivos o hemodinámicamente inestable.' },
        { show: ['ev'], note: 'La vía subcutánea no es confiable en shock',
          say: 'Si es crítico, la vía de elección es la infusión endovenosa continua de insulina cristalina, en bomba, con controles de glicemia capilar cada una a dos horas. Sin ese control horario, la infusión se transforma en riesgo de hipoglicemia.' },
        { show: ['q2'], note: 'En sala, decide la alimentación',
          say: 'Si no es crítico, está en una sala básica o quirúrgica, y la vía es subcutánea. Aquí lo que decide el esquema es si el paciente come o no.' },
        { show: ['bc'], note: 'En ayunas no hay bolo prandial',
          say: 'Si está en ayunas, esquema basal-corrección: la insulina basal más dosis de corrección según la glicemia. No tiene sentido un bolo para una comida que no va a llegar.' },
        { show: ['bb'], note: 'Si come, se agrega el bolo de la comida',
          say: 'Si tolera alimentación oral, esquema basal-bolo-corrección: la basal, un bolo de insulina rápida con cada comida, y la escala de corrección encima. Es lo mismo que aprendiste en la clase de esquemas, adaptado al hospital.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cómo se calcula',
      title: 'Dosis del esquema basal-bolo',
      cards: [
        { title: 'Dosis total diaria', tag: 'Punto de partida', kind: 'pharma', items: [
          { t: '0,2 a 0,4 UI/kg/día', d: 'Insulina subcutánea total',
            say: 'Veamos los números. Se calcula una dosis total diaria de cero coma dos a cero coma cuatro unidades por kilo al día.' },
        ] },
        { title: 'Cómo se reparte', tag: 'Mitad y mitad', kind: 'key', items: [
          { t: '50% basal', d: 'NPH cada 12 h o glargina una vez al día',
            say: 'La mitad va como insulina basal: NPH cada doce horas, o glargina una vez al día.' },
          { t: '50% en bolos prandiales', d: 'Insulina rápida antes de cada comida',
            say: 'La otra mitad se reparte en bolos de insulina rápida antes de cada comida. Por ejemplo, un paciente de setenta kilos a cero coma dos recibe catorce unidades al día: siete de basal y siete repartidas en las comidas.' },
          { t: '+ escala de corrección', d: 'Según glicemia capilar antes de comer',
            say: 'Y encima se agrega la escala de corrección antes de cada comida, según la glicemia capilar. Esa escala es la parte móvil del esquema: bien usada, corrige; usada sola, persigue.' },
        ] },
        { title: 'Meta', tag: 'Siempre la misma', kind: 'criteria', items: [
          { t: '140 a 180 mg/dL', d: 'Sin buscar la normoglicemia',
            say: 'Y todo esto con la meta de ciento cuarenta a ciento ochenta. El esquema no busca una glicemia perfecta: busca sacar al paciente de la hiperglicemia sin llevarlo a la hipoglicemia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en el árbol que vas a razonar frente al diabético que se hospitaliza.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué se hace con cada fármaco al ingreso',
      head: ['Fármaco o esquema', 'Conducta', 'Por qué'],
      rows: [
        { cells: ['Metformina', 'Suspender', 'Acidosis láctica con sepsis, hipoxemia o contraste'],
          say: 'Repasemos en una tabla. Metformina: se suspende, por la acidosis láctica ante sepsis, hipoxemia o contraste. La trampa es mantenerla a media dosis porque la función renal todavía parece aceptable.' },
        { cells: ['Glibenclamida', 'Suspender', 'Hipoglicemia prolongada con ingesta errática'],
          say: 'Glibenclamida: se suspende, por la hipoglicemia prolongada en quien come poco o nada. Nunca se agrega para bajar la glicemia del hospitalizado.' },
        { cells: ['iSGLT2', 'Suspender', 'CAD euglicémica y deshidratación'],
          say: 'Inhibidores de SGLT dos: se suspenden ante cirugía o infección, por la cetoacidosis euglicémica y la deshidratación.' },
        { cells: ['Esquema móvil aislado', 'Proscrito como terapia única', 'Reactivo: hiper e hipoglicemia'],
          say: 'El esquema móvil aislado: proscrito como terapia única. Es la alternativa más tentadora del tema, porque suena prudente, y es incorrecta.' },
        { cells: ['Paciente crítico', 'Insulina cristalina EV en bomba', 'Control de glicemia cada 1–2 h'],
          say: 'En el paciente crítico, insulina cristalina endovenosa en bomba, con control cada una a dos horas.' },
        { cells: ['Meta en todo hospitalizado', '140–180 mg/dL', '< 110 aumenta la mortalidad'],
          say: 'Y la meta, en todos: ciento cuarenta a ciento ochenta. Bajar a menos de ciento diez aumenta la mortalidad por hipoglicemia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 64 años, DM2 en tratamiento con glibenclamida 5 mg cada 12 horas. Cursa el segundo día postoperatorio de una colecistectomía, hemodinámicamente estable y tolerando régimen oral completo. Ha tenido glicemias capilares entre 220 y 260 mg/dL. Pesa 80 kg y su función renal es normal.',
      question: '¿Cuál es el manejo más adecuado de su diabetes durante la hospitalización?',
      options: [
        { letter: 'A', text: 'Reiniciar glibenclamida a la misma dosis' },
        { letter: 'B', text: 'Insulina cristalina según hemoglucotest cada 6 horas como única terapia' },
        { letter: 'C', text: 'Insulina basal más bolos prandiales de insulina rápida y escala de corrección' },
        { letter: 'D', text: 'Infusión endovenosa continua de insulina cristalina' },
        { letter: 'E', text: 'Observar sin tratamiento hasta que la glicemia supere 300 mg/dL' },
      ],
      correct: 'C',
      explanation: 'Paciente no crítico que tolera alimentación: esquema basal-bolo-corrección subcutáneo, con meta de 140–180 mg/dL. La glibenclamida se suspende al ingreso por riesgo de hipoglicemia prolongada; el esquema móvil aislado está proscrito; la infusión EV se reserva para el paciente crítico.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y cuatro años, diabético tipo dos, que usa glibenclamida cinco miligramos cada doce horas. Está en el segundo día después de una colecistectomía, estable, comiendo régimen completo, con glicemias capilares entre doscientos veinte y doscientos sesenta. Pesa ochenta kilos y su función renal es normal.',
        question: '¿Cuál es el manejo más adecuado de su diabetes durante la hospitalización?',
        options: 'Las alternativas: reiniciar la glibenclamida, insulina cristalina según hemoglucotest como única terapia, insulina basal con bolos prandiales y corrección, infusión endovenosa de insulina, u observar hasta que pase de trescientos. Piénsalo.',
        answer: 'Es la C. No es crítico, así que la vía es subcutánea, y come, así que el esquema es basal-bolo-corrección. La B es el distractor más tentador: el esquema móvil solo persigue la glicemia y está proscrito. La glibenclamida se suspende en el hospital, la infusión endovenosa es para el paciente crítico, y esperar a trescientos ignora la meta de ciento cuarenta a ciento ochenta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 169',
      stem: 'Paciente hospitalizada con hidrocortisona endovenosa y glicemias elevadas persistentes.',
      question: '¿Cuál es el examen para el diagnóstico?',
      options: [
        { letter: 'A', text: 'Glicemia en ayunas' },
        { letter: 'B', text: 'Test de tolerancia oral a la glucosa' },
        { letter: 'C', text: 'Insulinemia basal' },
        { letter: 'D', text: 'Hemoglobina glicosilada (HbA1c)' },
        { letter: 'E', text: 'Péptido C' },
      ],
      correct: 'D',
      explanation: 'La hiperglicemia hospitalaria se define con o sin diabetes previa. Con corticoides y estrés agudo, la glicemia no sirve para diagnosticar diabetes de base; la HbA1c refleja los últimos 2 a 3 meses y, si es ≥ 6,5%, certifica que la paciente ya era diabética antes del ingreso.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Paciente hospitalizada, recibiendo hidrocortisona endovenosa, con glicemias elevadas persistentes.',
        question: '¿Cuál es el examen para el diagnóstico?',
        options: 'Las opciones: glicemia en ayunas, test de tolerancia oral a la glucosa, insulinemia basal, hemoglobina glicosilada, o péptido C. Piénsalo.',
        answer: 'Es la D, la hemoglobina glicosilada. Recuerda la definición: hiperglicemia hospitalaria, con o sin diabetes previa. Con corticoides y estrés, la glicemia está alta por la enfermedad y no te dice si había diabetes antes. La hemoglobina glicosilada refleja los últimos dos a tres meses: si es seis coma cinco o más, ya era diabética. La glicemia de ayuno y el test de tolerancia caen por lo mismo: los contamina el corticoide.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 72 años, diabético tipo 2 en tratamiento ambulatorio regular con metformina 850 mg cada 8 horas, ingresa al hospital por un cuadro de sepsis de foco urinario, evidenciándose PA 88/55 mmHg, taquicardia de 112 lpm y creatinina plasmática de 2.2 mg/dL. Su glicemia capilar de ingreso es de 260 mg/dL.',
      question: '¿Cuál es la indicación farmacológica más apropiada para el manejo de su diabetes durante la hospitalización?',
      options: [
        { letter: 'A', text: 'Continuar metformina y agregar glibenclamida 5 mg cada 12 horas' },
        { letter: 'B', text: 'Suspender metformina e indicar insulina cristalina en esquema móvil aislado según hemoglucotest cada 6 horas' },
        { letter: 'C', text: 'Suspender metformina e iniciar insulinoterapia con esquema basal más correcciones de insulina rápida subcutánea' },
        { letter: 'D', text: 'Mantener metformina reduciendo la dosis a la mitad y administrar bicarbonato profiláctico' },
        { letter: 'E', text: 'Indicar hidratación vigorosa sin administrar hipoglucemiantes hasta que la glicemia supere los 300 mg/dL' },
      ],
      correct: 'C',
      explanation: 'Sepsis con hipotensión y falla renal aguda: la metformina se suspende de inmediato por riesgo de acidosis láctica. El esquema móvil aislado está proscrito. Lo correcto es insulina programada: basal más correcciones de insulina rápida subcutánea, con meta de 140–180 mg/dL.',
      say: {
        stem: 'Vamos con una pregunta del banco EUNACOM. Paciente de setenta y dos años, diabético tipo dos con metformina ochocientos cincuenta cada ocho horas, que ingresa con una sepsis urinaria, presión de ochenta y ocho cincuenta y cinco, taquicardia de ciento doce, creatinina de dos coma dos y glicemia de doscientos sesenta.',
        question: '¿Cuál es la indicación más apropiada para su diabetes durante la hospitalización?',
        options: 'Las opciones: seguir con metformina y agregar glibenclamida, suspender metformina y dejar un esquema móvil aislado, suspender metformina e iniciar insulina basal con correcciones, mantener media dosis de metformina con bicarbonato, o solo hidratar hasta que pase de trescientos. Piénsalo.',
        answer: 'Es la C. Sepsis, hipotensión y falla renal aguda: la metformina se suspende ya, por la acidosis láctica. Y fíjate en la B, que es la trampa fina: suspende bien la metformina, pero la reemplaza con un esquema móvil aislado, que está proscrito. Solo la C combina las dos reglas: suspender la metformina e indicar insulina basal con corrección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál es el rango de glicemia recomendado como objetivo terapéutico en la gran mayoría de los pacientes diabéticos adultos no gestantes hospitalizados en servicios de medicina interna?',
      question: 'Seleccione la alternativa correcta.',
      options: [
        { letter: 'A', text: '70 a 100 mg/dL' },
        { letter: 'B', text: '80 a 130 mg/dL' },
        { letter: 'C', text: '140 a 180 mg/dL' },
        { letter: 'D', text: '180 a 250 mg/dL' },
        { letter: 'E', text: 'Menor a 110 mg/dL en todo momento' },
      ],
      correct: 'C',
      explanation: 'La meta en el hospitalizado, crítico o no crítico, es 140–180 mg/dL. Bajar a < 110 mg/dL no reduce las infecciones y aumenta las hipoglicemias severas y la mortalidad (NICE-SUGAR).',
      say: {
        stem: 'Una más del banco, directa. ¿Cuál es el rango de glicemia recomendado como meta en la gran mayoría de los adultos diabéticos, no embarazadas, hospitalizados en medicina interna?',
        question: 'Elige el rango correcto.',
        options: 'Las opciones: setenta a cien, ochenta a ciento treinta, ciento cuarenta a ciento ochenta, ciento ochenta a doscientos cincuenta, o menos de ciento diez en todo momento. Piénsalo.',
        answer: 'Es la C, ciento cuarenta a ciento ochenta. La B es tentadora porque es la meta de glicemia de ayuno del paciente ambulatorio, pero en el hospital la meta es otra. Y la E es la trampa clásica: menos de ciento diez en todo momento fue lo que el ensayo NICE-SUGAR mostró que aumenta las hipoglicemias y la mortalidad.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Meta', tag: 'Crítico y no crítico', kind: 'key', items: [
          { t: '140 a 180 mg/dL', d: 'Menos de 110 aumenta la mortalidad',
            say: 'Cerremos con las reglas de oro. La meta en todo hospitalizado es ciento cuarenta a ciento ochenta. Apretar a menos de ciento diez aumenta la mortalidad.' },
        ] },
        { title: 'Al ingreso', tag: 'Suspender', kind: 'alert', items: [
          { t: 'Metformina fuera', d: 'Sepsis, IRA, hipoxemia o contraste',
            say: 'Al ingreso se suspenden todos los orales. La metformina, por la acidosis láctica ante sepsis, falla renal aguda, hipoxemia o contraste.' },
          { t: 'Sulfonilureas e iSGLT2 fuera', d: 'Hipoglicemia y CAD euglicémica',
            say: 'Las sulfonilureas, por la hipoglicemia prolongada; y los inhibidores de SGLT dos, por la cetoacidosis euglicémica.' },
        ] },
        { title: 'Insulina', tag: 'Programada', kind: 'pharma', items: [
          { t: 'Nunca esquema móvil solo', d: 'Basal-corrección o basal-bolo-corrección',
            say: 'En sala, insulina subcutánea programada: basal-corrección si está en ayunas, basal-bolo-corrección si come. Nunca el esquema móvil solo.' },
          { t: 'Crítico: cristalina EV', d: 'Con control cada 1–2 horas',
            say: 'Y en el paciente crítico, insulina cristalina endovenosa con control horario. Si te llevas una sola idea de hoy: en el hospital la insulina se programa, no se persigue. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hiperglicemia en el paciente hospitalizado',
    root: N('start', 'Diabético o glicemia > 140 al ingreso', 'Paciente hospitalizado',
      'Ingresa un paciente con diabetes, o con una glicemia sobre ciento cuarenta. Tenga o no diagnóstico previo, esto es hiperglicemia hospitalaria, y se trata.',
      ['', N('do', 'Suspender todos los orales', 'Metformina · sulfonilureas · iSGLT2',
        'El primer paso es suspender todos los hipoglucemiantes orales: la metformina por la acidosis láctica, las sulfonilureas por la hipoglicemia, y los inhibidores de SGLT dos por la cetoacidosis euglicémica.',
        ['', N('q', '¿Paciente crítico?', 'UCI, shock o inestable',
          '¿El paciente es crítico, en intensivo o hemodinámicamente inestable? Eso define la vía de la insulina.',
          ['SÍ', N('alert', 'Insulina cristalina EV', 'Bomba · control cada 1–2 h',
            'Si es crítico, infusión endovenosa continua de insulina cristalina, con controles de glicemia cada una a dos horas, y meta de ciento cuarenta a ciento ochenta.')],
          ['NO', N('q', '¿Tolera alimentación?', 'Sala básica o quirúrgica',
            'Si no es crítico, la vía es subcutánea, y el esquema depende de si el paciente come.',
            ['NO', N('ok', 'Basal-corrección', 'Meta 140–180 mg/dL',
              'En ayunas, insulina basal más dosis de corrección según glicemia capilar.')],
            ['SÍ', N('ok', 'Basal-bolo-corrección', '0,2–0,4 UI/kg/día · mitad basal',
              'Si come, basal-bolo-corrección: cero coma dos a cero coma cuatro unidades por kilo al día, la mitad como basal y la mitad en bolos prandiales, más la escala de corrección.')],
            ['Trampa', N('refer', 'Esquema móvil solo', 'Proscrito',
              'Y lo que nunca se indica como terapia única es el esquema móvil de insulina cristalina según hemoglucotest: persigue la glicemia y produce hiper e hipoglicemias.')])])])]),
  },
};
