// Clase 3.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer la etapa, leer bien las dos serologías y elegir la dosis correcta de penicilina',
      say: 'Bienvenidos. Abrimos las infecciones de transmisión sexual con la sífilis, una enfermedad que está aumentando en Chile y que el EUNACOM pregunta con mucho detalle. Todo se resuelve con tres preguntas: en qué etapa está el paciente, qué dicen sus dos serologías, y cuántas dosis de penicilina benzatina necesita. Y hay una cuarta que se repite siempre: qué hacer con la embarazada. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Historia natural',
      title: 'Cuatro etapas de un mismo treponema',
      nodes: [
        { id: 'tp', col: 0, row: 2, k: 'cause', t: 'Treponema pallidum', s: 'Sexual o transplacentaria' },
        { id: 'pri', col: 1, row: 0, k: 'effect', t: 'Primaria', s: 'Chancro · cura en 3–6 semanas' },
        { id: 'sec', col: 2, row: 0, k: 'effect', t: 'Secundaria', s: 'Roséola palmoplantar' },
        { id: 'lat', col: 3, row: 1, k: 'mech', t: 'Latente', s: 'Asintomática · precoz o tardía' },
        { id: 'ter', col: 4, row: 2, k: 'alert', t: 'Terciaria', s: 'Gomas · aortitis · neurosífilis' },
      ],
      edges: [
        { from: 'tp', to: 'pri' }, { from: 'pri', to: 'sec', label: 'se disemina' },
        { from: 'sec', to: 'lat', label: 'se silencia' }, { from: 'lat', to: 'ter', label: 'años' },
      ],
      steps: [
        { show: ['tp'], note: 'Una bacteria sistémica',
          say: 'Partamos por el germen. La sífilis la produce el Treponema pallidum, una bacteria que se transmite por contacto sexual o a través de la placenta. Y es sistémica: aunque parta en los genitales, termina en todo el cuerpo. Por eso tiene etapas.' },
        { show: ['pri'], note: 'Una lesión que se va sola',
          say: 'La primera etapa es local: el chancro, en el sitio de inoculación. Y lo engañoso es que cura solo, en tres a seis semanas. El paciente cree que se mejoró, pero el treponema ya se diseminó.' },
        { show: ['sec'], note: 'La etapa de la piel',
          say: 'Esa diseminación da la sífilis secundaria, con un exantema que compromete las palmas y las plantas.' },
        { show: ['lat'], note: 'Sin síntomas, pero con serología',
          say: 'Después la enfermedad se silencia: es la sífilis latente, sin síntomas, que solo se detecta por serología.' },
        { show: ['ter'], note: 'Años después',
          say: 'Y años después, en algunos pacientes, aparece la terciaria: gomas, aortitis y neurosífilis. Ahora veamos cada etapa como la vas a encontrar en un enunciado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Primaria y secundaria',
      cards: [
        { title: 'Sífilis primaria', tag: 'Chancro', kind: 'key', items: [
          { t: 'Úlcera única, indurada e indolora', d: 'Fondo limpio',
            say: 'El chancro sifilítico es una úlcera única, indurada, de fondo limpio, y sobre todo indolora. Esa última palabra es la que se pregunta: una úlcera genital que no duele es sífilis hasta demostrar lo contrario.' },
          { t: 'Adenopatías duras e indoloras', d: 'Regionales',
            say: 'Y se acompaña de adenopatías regionales, también duras e indoloras.' },
        ] },
        { title: 'Sífilis secundaria', tag: 'Diseminada', kind: 'criteria', items: [
          { t: 'Roséola sifilítica', d: 'Exantema maculopapular palmoplantar',
            say: 'En la secundaria aparece la roséola sifilítica, un exantema maculopapular con compromiso de las palmas y las plantas. Pocos exantemas tocan las palmas y las plantas, así que ese dato te lleva directo a la sífilis.' },
          { t: 'Condilomas planos', d: 'Perianales · con micropoliadenopatías',
            say: 'Además, condilomas planos en la región perianal y micropoliadenopatías generalizadas. Ojo con no confundir los condilomas planos de la sífilis con los acuminados del virus papiloma, que vemos en la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Latente y terciaria: lo que decide el tratamiento',
      cards: [
        { title: 'Sífilis latente', tag: 'Asintomática', kind: 'criteria', items: [
          { t: 'Precoz: menos de 1 año', d: 'Tardía: más de 1 año',
            say: 'La latente es asintomática, y se divide por el tiempo: precoz si tiene menos de un año de evolución, y tardía si tiene más de un año.' },
        ] },
        { title: 'Sífilis terciaria', tag: 'Años después', kind: 'alert', items: [
          { t: 'Gomas y aortitis', d: 'Destrucción de tejidos y de la aorta',
            say: 'La terciaria aparece años después, con gomas, que son lesiones destructivas, y aortitis.' },
          { t: 'Neurosífilis', d: 'Compromiso del sistema nervioso',
            say: 'Y con neurosífilis, el compromiso del sistema nervioso.' },
        ] },
        { title: 'La idea que conecta', tag: 'Tiempo de evolución', kind: 'key', items: [
          { t: 'Precoz vs tardía', d: 'Define cuántas dosis de penicilina',
            say: 'Y aquí está la conexión que ordena la clase: ese corte de un año no es un detalle académico. Primaria, secundaria y latente precoz son sífilis precoz; latente tardía, o de duración desconocida, es sífilis tardía. Y esa diferencia es la que define cuántas dosis de penicilina vas a indicar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Serología',
      title: 'Dos pruebas con dos trabajos distintos',
      nodes: [
        { id: 'nt', col: 0, row: 0, k: 'mech', t: 'No treponémicas', s: 'VDRL · RPR' },
        { id: 'cua', col: 1, row: 0, k: 'good', t: 'Cuantitativas', s: 'Diluciones 1:2, 1:4, 1:16…' },
        { id: 'act', col: 2, row: 0, k: 'good', t: 'Miden actividad', s: 'Curación: caída de 4 veces a 6–12 meses' },
        { id: 'tr', col: 0, row: 2, k: 'mech', t: 'Treponémicas', s: 'FTA-ABS · MHA-TP · ELISA IgG' },
        { id: 'cual', col: 1, row: 2, k: 'good', t: 'Cualitativas', s: 'Confirman el diagnóstico' },
        { id: 'cic', col: 2, row: 2, k: 'trap', t: 'Cicatriz serológica', s: 'Positivas de por vida en 90%' },
      ],
      edges: [
        { from: 'nt', to: 'cua' }, { from: 'cua', to: 'act' },
        { from: 'tr', to: 'cual' }, { from: 'cual', to: 'cic' },
      ],
      steps: [
        { show: ['nt', 'cua'], note: 'Se informan en diluciones',
          say: 'Ahora la serología, que es donde más se equivocan los postulantes. Hay dos familias de pruebas, y cada una tiene un trabajo distinto. Las no treponémicas, el VDRL y el RPR, son cuantitativas: se informan en diluciones, uno en dos, uno en cuatro, uno en dieciséis.' },
        { show: ['act'], note: 'Suben con la actividad, bajan con la cura',
          say: 'Y como son cuantitativas, miden la actividad de la enfermedad y la respuesta al tratamiento. Se considera curación cuando los títulos caen cuatro veces, es decir dos diluciones, a los seis a doce meses. Por eso el control después del tratamiento se hace con VDRL.' },
        { show: ['tr', 'cual'], note: 'Sirven para confirmar',
          say: 'Las treponémicas, como el FTA ABS, el MHA TP o el ELISA IgG, son cualitativas: positivo o negativo. Su trabajo es confirmar el diagnóstico.' },
        { show: ['cic'], note: 'No sirven para seguir ni para reinfección',
          say: 'Pero tienen un problema: quedan positivas de por vida en el noventa por ciento de los pacientes, aunque se hayan curado. Es la cicatriz serológica. Por eso no sirven para evaluar la respuesta ni para diagnosticar una reinfección. Si te preguntan cómo controlar a un paciente tratado, la respuesta nunca es un FTA ABS.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Interpretación serológica',
      title: 'Leer las dos pruebas juntas',
      head: ['VDRL / RPR', 'Treponémica', 'Interpretación', 'Conducta'],
      rows: [
        { cells: ['Reactivo (ej. 1:16)', 'Reactiva', 'Sífilis activa confirmada', 'Tratar según tiempo de evolución'],
          say: 'Ahora juntemos las dos pruebas. VDRL reactivo y treponémica reactiva: sífilis activa confirmada. Se trata según el tiempo de evolución.' },
        { cells: ['Reactivo (ej. 1:2)', 'No reactiva', 'Falso positivo biológico', 'No tratar (autoinmune, embarazo, edad)'],
          say: 'VDRL reactivo, generalmente en título bajo, con treponémica no reactiva: es un falso positivo biológico. No se trata. Las causas son las enfermedades autoinmunes, el embarazo y la edad avanzada.' },
        { cells: ['No reactivo', 'Reactiva', 'Cicatriz serológica o primaria muy precoz', 'Tratado antes: observar; si no: evaluar'],
          say: 'VDRL no reactivo con treponémica reactiva: lo más probable es una cicatriz serológica, o bien una sífilis primaria muy precoz. Si fue tratado antes, se observa; si no, hay que evaluarlo.' },
        { cells: ['No reactivo', 'No reactiva', 'No infectado o período de ventana', 'Repetir en 3 semanas si hay chancro'],
          say: 'Y las dos no reactivas: el paciente no está infectado, o está en el período de ventana. Ojo con esto: si tiene un chancro sospechoso, la serología negativa no lo descarta, y se repite en tres semanas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Penicilina benzatina: una dosis o tres',
      nodes: [
        { id: 'sif', col: 0, row: 1, k: 'start', t: 'Sífilis confirmada', s: 'Precisar tiempo de evolución' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Menos de 1 año?', s: 'Precoz vs tardía' },
        { id: 'pre', col: 2, row: 0, k: 'good', t: 'Precoz: dosis única', s: 'PB 2.400.000 UI IM' },
        { id: 'tar', col: 2, row: 2, k: 'good', t: 'Tardía o desconocida', s: 'PB 2.400.000 UI IM semanal × 3' },
        { id: 'emb', col: 3, row: 1, k: 'alert', t: 'Embarazada alérgica', s: 'Desensibilización en UCI' },
        { id: 'jh', col: 4, row: 0, k: 'refer', t: 'Jarisch-Herxheimer', s: 'Benigna · paracetamol' },
        { id: 'dox', col: 4, row: 2, k: 'trap', t: 'Doxiciclina', s: 'Contraindicada en el embarazo' },
      ],
      edges: [
        { from: 'sif', to: 'q' },
        { from: 'q', to: 'pre', label: 'sí' }, { from: 'q', to: 'tar', label: 'no o no se sabe' },
        { from: 'pre', to: 'emb' }, { from: 'tar', to: 'emb' },
        { from: 'pre', to: 'jh', label: 'tras la dosis' }, { from: 'emb', to: 'dox', label: 'nunca' },
      ],
      steps: [
        { show: ['sif', 'q'], note: 'La pregunta es el tiempo',
          say: 'Pasemos al tratamiento. El fármaco es siempre penicilina benzatina, así que la única pregunta es cuántas dosis. Y eso depende del tiempo de evolución: ¿tiene menos de un año?' },
        { show: ['pre'], note: 'Primaria, secundaria y latente precoz',
          say: 'Si es precoz, es decir primaria, secundaria o latente de menos de un año, penicilina benzatina dos millones cuatrocientas mil unidades intramuscular, en dosis única.' },
        { show: ['tar'], note: 'Si no sabes, es tardía',
          say: 'Si es tardía, de más de un año, o de duración desconocida, la misma dosis semanal por tres semanas consecutivas, siete coma dos millones en total. Fíjate en el de duración desconocida: si no puedes fechar la infección, la tratas como tardía.' },
        { show: ['jh'], note: 'No es alergia',
          say: 'Después de la primera dosis puede aparecer la reacción de Jarisch Herxheimer: fiebre y malestar por la lisis de los treponemas. Es benigna y se maneja con paracetamol. No es una alergia, y no es motivo para suspender.' },
        { show: ['emb'], note: 'La regla de la embarazada',
          say: 'Y la situación que más se pregunta: la embarazada alérgica a la penicilina. La penicilina es el único tratamiento que protege al feto, así que no se cambia de fármaco: se hace una desensibilización obligatoria, en la unidad de cuidados intensivos, y luego se trata con penicilina.' },
        { show: ['dox'], note: 'La alternativa del adulto no sirve aquí',
          say: 'La doxiciclina, que aparece como alternativa en otros contextos, está estrictamente contraindicada en el embarazo. Esta es la prevención de la sífilis congénita, y está garantizada por el GES treinta y cinco.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos la serología y el tratamiento en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Secundaria (exantema palmoplantar)', 'PB 2.400.000 UI dosis única', 'Tres dosis semanales'],
          say: 'Repasemos las trampas. La sífilis secundaria es precoz: dosis única. El error es indicar tres dosis porque el cuadro parece más grave que un chancro.' },
        { cells: ['Latente de duración desconocida', 'PB semanal × 3 semanas', 'Dosis única'],
          say: 'La latente de duración desconocida se trata como tardía, con tres dosis semanales. El error es la dosis única.' },
        { cells: ['Control después de tratar', 'VDRL cuantitativo a los 6 y 12 meses', 'Controlar con FTA-ABS'],
          say: 'El control después del tratamiento se hace con VDRL cuantitativo. El error es pedir una treponémica, que va a seguir positiva de por vida.' },
        { cells: ['VDRL bajo con treponémica negativa', 'Falso positivo: no tratar', 'Tratar por el VDRL'],
          say: 'VDRL en título bajo con treponémica negativa: falso positivo. El error es tratar.' },
        { cells: ['Embarazada alérgica a penicilina', 'Desensibilizar y tratar con penicilina', 'Doxiciclina o macrólidos'],
          say: 'Y la embarazada alérgica: desensibilizar y tratar con penicilina. El error es cambiar a doxiciclina, que está contraindicada, o a otro antibiótico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 26 años con úlcera en el glande de 10 días de evolución. Úlcera de 1,5 cm, bordes regulares sobreelevados, base limpia e indurada, indolora, con adenopatía inguinal derecha no dolorosa. VDRL reactivo 1:32.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Penicilina benzatina 2.400.000 UI IM en dosis única' },
        { letter: 'B', text: 'Penicilina benzatina 2.400.000 UI IM semanal por 3 semanas' },
        { letter: 'C', text: 'Aciclovir oral por 7 días' },
        { letter: 'D', text: 'Esperar FTA-ABS antes de tratar' },
        { letter: 'E', text: 'Doxiciclina 100 mg cada 12 horas por 28 días' },
      ],
      correct: 'A',
      explanation: 'Úlcera única, indurada e indolora con adenopatía indolora y VDRL 1:32: sífilis primaria, es decir precoz. Penicilina benzatina 2.400.000 UI IM en dosis única. Además: serología para VIH y hepatitis B, estudio y tratamiento de los contactos sexuales de los últimos 90 días, y VDRL cuantitativo a los 6 y 12 meses.',
      say: {
        stem: 'Vamos con un caso. Hombre de veintiséis años con una úlcera en el glande de diez días. Mide un centímetro y medio, tiene bordes sobreelevados, base limpia e indurada, y no duele. Hay una adenopatía inguinal derecha, también indolora. El VDRL es reactivo en dilución uno en treinta y dos.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones son: penicilina benzatina en dosis única; penicilina benzatina semanal por tres semanas; aciclovir; esperar el FTA ABS; o doxiciclina por veintiocho días. Piénsalo.',
        answer: 'Es la A. Úlcera única, indurada e indolora, con adenopatía indolora: es un chancro, una sífilis primaria, y por lo tanto precoz. Dosis única. La B es el distractor, porque el esquema de tres dosis es para la tardía. Y no termina ahí: se pide serología para VIH y hepatitis B, se estudian y tratan los contactos sexuales de los últimos noventa días, y se controla con VDRL a los seis y doce meses.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 136',
      stem: 'Un paciente consulta porque hace 3 días notó aparición de una úlcera en el pene, ubicada en el glande, de 1 cm de diámetro, de aspecto indurado, fondo limpio y sin otros síntomas. Además, se palpa una adenopatía inguinal derecha indolora. Se solicita VDRL y FTA-ABS, resultando ambos negativos.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Sífilis primaria' },
        { letter: 'B', text: 'Chancroide' },
        { letter: 'C', text: 'Enfermedad de Behcet' },
        { letter: 'D', text: 'Infección por virus papiloma humano' },
        { letter: 'E', text: 'Linfogranuloma venéreo' },
      ],
      correct: 'A',
      explanation: 'Chancro clásico: úlcera indurada, de fondo limpio, con adenopatía indolora. A los 3 días la serología (treponémica y no treponémica) suele ser aún negativa: período de ventana. El diagnóstico es clínico y la serología se repite.',
      say: {
        stem: 'Ahora las preguntas reales. La primera es del EUNACOM de diciembre de dos mil diecinueve. Paciente con una úlcera en el glande de tres días, de un centímetro, indurada, de fondo limpio, con una adenopatía inguinal indolora. El VDRL y el FTA ABS salen los dos negativos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: sífilis primaria; chancroide; enfermedad de Behçet; virus papiloma; o linfogranuloma venéreo. Piénsalo.',
        answer: 'Es la A. La clínica es un chancro de libro, y la trampa está en la serología. A los tres días de la úlcera, las dos pruebas todavía pueden estar negativas: es el período de ventana que vimos en la tabla. La serología negativa no descarta un chancro; se repite. El chancroide es el distractor, pero su úlcera duele.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 62',
      stem: 'Un paciente es diagnosticado de infección por VIH, hace 3 meses. Está en etapa A3 e inició tratamiento con triterapia antirretroviral al momento del diagnóstico. Consulta ahora por aparición de placas pruriginosas en el tronco, más algunas lesiones similares en las palmas y plantas. Además tiene una lesión parecida en la cara interna de la mejilla derecha.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Pitiriasis rosada' },
        { letter: 'B', text: 'Pitiriasis versicolor' },
        { letter: 'C', text: 'Síndrome pie mano boca' },
        { letter: 'D', text: 'Sífilis secundaria' },
        { letter: 'E', text: 'Reacción adversa a la triterapia antirretroviral' },
      ],
      correct: 'D',
      explanation: 'Exantema en tronco con compromiso palmoplantar y de mucosas: sífilis secundaria. Una ITS es el principal factor de riesgo para tener otra.',
      say: {
        stem: 'La segunda es del EUNACOM de diciembre de dos mil diecisiete. Paciente con VIH diagnosticado hace tres meses, ya en triterapia, que consulta por placas en el tronco, lesiones similares en las palmas y las plantas, y una lesión en la mucosa de la mejilla.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: pitiriasis rosada; pitiriasis versicolor; síndrome pie mano boca; sífilis secundaria; o reacción adversa a la triterapia. Piénsalo.',
        answer: 'Es la D, sífilis secundaria. Exantema en el tronco que toca las palmas y las plantas es la roséola sifilítica. Y fíjate en el contexto: una infección de transmisión sexual es el principal factor de riesgo para tener otra, así que en un paciente con VIH siempre buscas sífilis. La reacción a la triterapia es el distractor, porque el paciente recién la inició, pero no explica el compromiso palmoplantar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 2',
      stem: 'Una paciente de 25 años, embarazada, con 12 semanas contadas desde la FUR segura y confiable, se realiza exámenes, entre los que trae un VDRL, que resulta "no reactivo" y un MHA-TP, que resulta "reactivo".',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar penicilina benzatina de inmediato' },
        { letter: 'B', text: 'Realizar VDRL mensual durante el resto del embarazo' },
        { letter: 'C', text: 'Controlar con VDRL a las 30 semanas' },
        { letter: 'D', text: 'Solicitar un FTA-ABS' },
        { letter: 'E', text: 'Indicar doxiciclina vía oral' },
      ],
      correct: 'C',
      explanation: 'VDRL no reactivo con treponémica (MHA-TP) reactiva: cicatriz serológica de una sífilis tratada. No hay actividad, así que no se trata; se sigue el control prenatal habitual, con el VDRL que corresponde a las 28–30 semanas.',
      say: {
        stem: 'La tercera es del EUNACOM de julio de dos mil veinticuatro. Embarazada de doce semanas, con un VDRL no reactivo y un MHA TP reactivo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: penicilina benzatina de inmediato; VDRL mensual el resto del embarazo; control con VDRL a las treinta semanas; pedir un FTA ABS; o doxiciclina. Piénsalo.',
        answer: 'Es la C. VDRL no reactivo con treponémica reactiva es la cicatriz serológica: la paciente tuvo sífilis y se trató. No hay actividad, así que no se trata, y sigue su control prenatal habitual con el VDRL de las treinta semanas. La D es el distractor: un FTA ABS es otra treponémica, y va a salir positivo de por vida, así que no agrega nada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 130',
      stem: 'Una paciente de 25 años, con antecedente de sífilis tratada hace un año, cursando un embarazo de 8 semanas, se realiza un VDRL, que resulta positivo en dilución 1/16.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Solicitar FTA-ABS' },
        { letter: 'B', text: 'Controlar con VDRL seriado' },
        { letter: 'C', text: 'Solicitar RPR' },
        { letter: 'D', text: 'Administrar ceftriaxona' },
        { letter: 'E', text: 'Administrar penicilina benzatina' },
      ],
      correct: 'E',
      explanation: 'En quien ya tuvo sífilis, la treponémica seguirá positiva de por vida: lo que indica actividad o reinfección es el VDRL reactivo. Además, todo VDRL reactivo en el embarazo se trata de inmediato con penicilina benzatina.',
      say: {
        stem: 'Y la cuarta es la contracara de la anterior, del EUNACOM de julio de dos mil diecinueve. Paciente con sífilis tratada hace un año, embarazada de ocho semanas, con un VDRL positivo en dilución uno en dieciséis.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: pedir FTA ABS; controlar con VDRL seriado; pedir RPR; ceftriaxona; o penicilina benzatina. Piénsalo.',
        answer: 'Es la E, penicilina benzatina. Esta paciente ya tuvo sífilis, así que su treponémica va a estar positiva de por vida: pedirla, que es la A, no sirve para nada. Lo que indica una sífilis activa, o una reinfección, es el VDRL, y aquí está en uno en dieciséis. Y en el embarazo no se espera: se trata con penicilina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 26 años con embarazo de 14 semanas presenta VDRL de tamizaje reactivo 1:16, confirmado con FTA-ABS reactivo. Refiere alergia confirmada a la penicilina (shock anafiláctico previo).',
      question: '¿Cuál es la conducta indicada para prevenir la sífilis congénita?',
      options: [
        { letter: 'A', text: 'Doxiciclina 100 mg cada 12 horas por 14 días' },
        { letter: 'B', text: 'Hospitalizar para desensibilización a la penicilina y luego administrar penicilina benzatina' },
        { letter: 'C', text: 'Eritromicina oral 500 mg cada 6 horas por 14 días' },
        { letter: 'D', text: 'Diferir todo tratamiento hasta después del parto' },
        { letter: 'E', text: 'Ceftriaxona 1 g diario intramuscular por 10 días' },
      ],
      correct: 'B',
      explanation: 'La penicilina es el único antibiótico con eficacia demostrada para tratar a la madre y al feto y prevenir la sífilis congénita. La doxiciclina está contraindicada en el embarazo y los macrólidos no cruzan adecuadamente la placenta: se desensibiliza y se trata con penicilina benzatina.',
      say: {
        stem: 'Cerramos con un caso representativo del banco, sobre la regla más preguntada. Embarazada de catorce semanas con VDRL uno en dieciséis, confirmado con FTA ABS. Tiene alergia confirmada a la penicilina, con un shock anafiláctico previo.',
        question: '¿Qué conducta previene la sífilis congénita?',
        options: 'Las opciones son: doxiciclina; hospitalizar para desensibilizar y luego penicilina benzatina; eritromicina; diferir el tratamiento hasta el parto; o ceftriaxona. Piénsalo.',
        answer: 'Es la B. La penicilina es el único antibiótico con eficacia demostrada para tratar a la madre y al feto a la vez. Por eso, aunque haya tenido un shock anafiláctico, se desensibiliza y se trata con penicilina. La eritromicina es el distractor más tentador, porque parece la alternativa segura, pero los macrólidos no cruzan bien la placenta y dejan al feto sin tratar. Y la doxiciclina está contraindicada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Clínica', tag: 'Etapas', kind: 'key', items: [
          { t: 'Úlcera indolora = chancro', d: 'Exantema palmoplantar = secundaria',
            say: 'Cerremos con las reglas de oro. Úlcera genital única, indurada e indolora es un chancro; exantema que toca palmas y plantas es sífilis secundaria.' },
        ] },
        { title: 'Serología', tag: 'Dos trabajos', kind: 'criteria', items: [
          { t: 'VDRL: actividad y respuesta', d: 'Curación: caída de 4 veces',
            say: 'El VDRL mide actividad y respuesta, y la curación es una caída de cuatro veces en los títulos.' },
          { t: 'Treponémica: confirma', d: 'Cicatriz de por vida',
            say: 'La treponémica confirma, pero queda positiva de por vida, así que no sirve para controlar ni para diagnosticar reinfección.' },
        ] },
        { title: 'Tratamiento', tag: 'Penicilina benzatina', kind: 'pharma', items: [
          { t: 'Precoz: dosis única', d: 'Tardía o desconocida: semanal × 3',
            say: 'Precoz, dosis única de dos millones cuatrocientas mil unidades; tardía o de duración desconocida, la misma dosis semanal por tres semanas.' },
          { t: 'Embarazada alérgica: desensibilizar', d: 'Doxiciclina contraindicada',
            say: 'Y la embarazada alérgica se desensibiliza y recibe penicilina. Si te llevas una sola idea de hoy: el tiempo de evolución decide la dosis, y el VDRL decide si hay actividad. En la próxima clase seguimos con las uretritis, las otras úlceras genitales y el virus papiloma. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Sífilis: de la serología a la penicilina',
    root: N('start', 'Sospecha de sífilis', 'Úlcera indolora, exantema o tamizaje',
      'Paciente con sospecha de sífilis: una úlcera indolora, un exantema palmoplantar, o un tamizaje, por ejemplo en el embarazo. Se piden las dos familias de pruebas.',
      ['', N('q', '¿VDRL y treponémica?', 'Leer las dos juntas',
        '¿Qué dicen el VDRL y la prueba treponémica, leídos juntos?',
        ['Ambas reactivas', N('q', '¿Menos de 1 año?', 'Sífilis activa confirmada',
          'Si las dos son reactivas, es una sífilis activa. Ahora la pregunta es el tiempo de evolución: ¿menos de un año?',
          ['SÍ', N('do', 'PB 2.400.000 UI dosis única', 'Sífilis precoz',
            'Si es precoz, penicilina benzatina dos millones cuatrocientas mil unidades intramuscular, en dosis única.')],
          ['NO o no se sabe', N('do', 'PB 2.400.000 UI semanal × 3', 'Sífilis tardía',
            'Si es tardía o no se sabe, la misma dosis semanal por tres semanas. Y si es una embarazada alérgica, se desensibiliza primero.')])],
        ['Solo VDRL', N('ok', 'Falso positivo biológico', 'No tratar',
          'Si solo el VDRL es reactivo, con treponémica negativa, es un falso positivo biológico. No se trata.')],
        ['Solo treponémica', N('ok', 'Cicatriz serológica', 'Si ya fue tratado: observar',
          'Si solo la treponémica es reactiva, lo más probable es una cicatriz serológica. Si ya fue tratado, se observa.')],
        ['Ambas negativas', N('alert', 'Repetir en 3 semanas', 'Si hay chancro: ventana',
          'Si las dos son negativas pero hay un chancro sospechoso, es el período de ventana: se repite la serología en tres semanas.')])]),
  },
};
