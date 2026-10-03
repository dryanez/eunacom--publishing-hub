// Clase 8.23 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-23).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-23',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'A quién estudiar, cuándo tomar la muestra y por qué el SAF se trata con cumarínicos',
      say: 'Bienvenidos. En el bloque de hemostasia vimos pacientes que sangran. Hoy vemos el problema contrario: los que coagulan de más. Son las trombofilias, hereditarias y adquiridas, y la más importante de las adquiridas es el síndrome antifosfolípido. El examen pregunta cuatro cosas: cuál es la más frecuente, a quién estudiar, cuándo tomar la muestra y con qué anticoagular. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Dos formas de romper el equilibrio',
      nodes: [
        { id: 'eq', col: 0, row: 2, k: 'start', t: 'Equilibrio de la coagulación', s: 'Procoagulantes vs inhibidores' },
        { id: 'gan', col: 1, row: 0, k: 'cause', t: 'Ganancia de función', s: 'Las más frecuentes' },
        { id: 'fvl', col: 2, row: 0, k: 'mech', t: 'Factor V Leiden', s: 'La PCa no logra degradarlo' },
        { id: 'pt', col: 2, row: 1, k: 'mech', t: 'Protrombina G20210A', s: 'Más protrombina en plasma' },
        { id: 'per', col: 1, row: 4, k: 'cause', t: 'Pérdida de inhibidores', s: 'Más raras, más trombogénicas' },
        { id: 'inh', col: 2, row: 4, k: 'mech', t: 'Déficit de AT, proteína C o S', s: 'Se pierde el freno' },
        { id: 'tev', col: 3, row: 2, k: 'risk', t: 'Tromboembolismo venoso', s: 'Precoz y recurrente' },
      ],
      edges: [
        { from: 'eq', to: 'gan' }, { from: 'gan', to: 'fvl' }, { from: 'gan', to: 'pt' },
        { from: 'eq', to: 'per' }, { from: 'per', to: 'inh' },
        { from: 'fvl', to: 'tev' }, { from: 'pt', to: 'tev' }, { from: 'inh', to: 'tev' },
      ],
      steps: [
        { show: ['eq'], note: 'Acelerador y freno',
          say: 'Piensa la coagulación como un auto con acelerador y freno. Los factores procoagulantes aceleran, y los anticoagulantes naturales, la antitrombina y las proteínas C y S, frenan. Una trombofilia es cualquier cosa que rompa ese equilibrio hacia la trombosis.' },
        { show: ['gan', 'fvl'], note: 'El factor V ya no se apaga',
          say: 'La primera forma es la ganancia de función, que es la más frecuente. El ejemplo clásico es el factor cinco Leiden. Una mutación puntual elimina justo el sitio donde la proteína C activada corta al factor cinco. Resultado: el factor cinco no se apaga. Eso se llama resistencia a la proteína C activada.' },
        { show: ['pt'], note: 'Más sustrato, más trombina',
          say: 'La otra es la mutación del gen de la protrombina. Aquí el hígado fabrica más protrombina, y con más materia prima se forma más trombina.' },
        { show: ['per', 'inh'], note: 'Menos frecuentes, pero más graves',
          say: 'La segunda forma es la pérdida de los frenos: el déficit de antitrombina, de proteína C o de proteína S. Son más raras, pero tienen mayor potencial trombogénico. Fíjate en el contraste, porque se pregunta: las de ganancia son más frecuentes, las de pérdida son más graves.' },
        { show: ['tev'], note: 'Trombosis venosa en jóvenes',
          say: 'Por cualquiera de las dos vías, el resultado es el mismo: tromboembolismo venoso, es decir, trombosis venosa profunda y tromboembolismo pulmonar, que aparece a edades tempranas y tiende a repetirse.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trombofilias hereditarias',
      title: 'La más frecuente y la más grave',
      cards: [
        { title: 'Factor V Leiden', tag: 'La más frecuente', kind: 'key', items: [
          { t: 'Resistencia a la proteína C activada', d: '3–5% de los caucásicos son portadores',
            say: 'Dos superlativos que tienes que tener claros. El factor cinco Leiden es la trombofilia hereditaria más frecuente en la población caucásica y chilena: entre tres y cinco por ciento son portadores. Se hereda en forma autosómica dominante.' },
          { t: 'Riesgo de TEV 4 a 8 veces mayor', d: 'En heterocigotos',
            say: 'En los heterocigotos, el riesgo de tromboembolismo venoso es cuatro a ocho veces mayor. Su trombosis es predominantemente venosa.' },
        ] },
        { title: 'Déficit de antitrombina', tag: 'La más trombogénica', kind: 'alert', items: [
          { t: 'Trombosis venosa grave y recurrente', d: 'Rara en la población general',
            say: 'En el otro extremo, el déficit de antitrombina es raro, pero es la trombofilia hereditaria más trombogénica de todas. Da trombosis venosas profundas graves y recurrentes.' },
          { t: 'Resistencia a la heparina', d: 'La heparina actúa a través de la antitrombina',
            say: 'Y tiene un detalle que se pregunta: resistencia a la heparina. ¿Por qué? Porque la heparina no anticoagula por sí sola, sino que potencia a la antitrombina. Si falta la antitrombina, la heparina no tiene sobre qué actuar.' },
        ] },
        { title: 'Déficit de proteína C o S', tag: 'Pérdida de freno', kind: 'criteria', items: [
          { t: 'Raros, con alto potencial trombótico', d: 'Autosómicos dominantes',
            say: 'Los déficits de proteína C y de proteína S también son raros y muy trombogénicos. Y tienen una complicación propia con los cumarínicos, que es lo que vemos ahora.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Peligro farmacológico',
      title: 'Necrosis cutánea por cumarínicos',
      nodes: [
        { id: 'def', col: 0, row: 1, k: 'cause', t: 'Déficit de proteína C o S', s: 'Congénito' },
        { id: 'aco', col: 1, row: 1, k: 'cause', t: 'Acenocumarol a dosis altas', s: 'Sin puente con heparina' },
        { id: 'cae', col: 2, row: 1, k: 'mech', t: 'La proteína C cae primero', s: 'Vida media de 6 horas' },
        { id: 'pro', col: 3, row: 0, k: 'risk', t: 'Estado protrombótico transitorio', s: 'Paradójico' },
        { id: 'nec', col: 3, row: 2, k: 'alert', t: 'Necrosis cutánea', s: 'Trombosis microvascular masiva' },
        { id: 'pue', col: 4, row: 1, k: 'good', t: 'Prevención', s: 'Puente con heparina' },
      ],
      edges: [
        { from: 'def', to: 'aco' }, { from: 'aco', to: 'cae' }, { from: 'cae', to: 'pro' },
        { from: 'pro', to: 'nec' }, { from: 'nec', to: 'pue', label: 'se evita con' },
      ],
      steps: [
        { show: ['def', 'aco'], note: 'El escenario de riesgo',
          say: 'Este es un peligro que el examen adora. Un paciente con déficit congénito de proteína C o S inicia acenocumarol a dosis altas, sin puente con heparina.' },
        { show: ['cae'], note: 'La proteína C se agota antes',
          say: 'El acenocumarol bloquea todas las proteínas dependientes de vitamina K, pero no caen al mismo ritmo. La proteína C tiene una vida media muy corta, de unas seis horas, así que es la primera en desaparecer, antes que los factores procoagulantes.' },
        { show: ['pro'], note: 'Primero se pierde el freno',
          say: 'Entonces, durante los primeros días, el paciente pierde el freno antes que el acelerador. Paradójicamente, el anticoagulante lo deja en un estado protrombótico transitorio.' },
        { show: ['nec'], note: 'Trombosis de la piel',
          say: 'Y ese estado se expresa como una trombosis microvascular masiva en la piel: la necrosis cutánea por cumarínicos.' },
        { show: ['pue'], note: 'Heparina hasta que el cumarínico sea eficaz',
          say: 'La prevención es la misma regla de siempre: iniciar el cumarínico con un puente de heparina, que protege al paciente mientras el acenocumarol hace efecto completo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome antifosfolípido',
      title: 'Criterios de Sydney: la clínica',
      cards: [
        { title: 'Qué es', tag: 'Adquirida autoinmune', kind: 'key', items: [
          { t: 'La trombofilia adquirida más frecuente', d: 'Primaria o secundaria a LES',
            say: 'Pasemos a la trombofilia adquirida más frecuente y más peligrosa: el síndrome antifosfolípido, o SAF. Es autoinmune, y puede ser primario o secundario a un lupus eritematoso sistémico. Se diagnostica con los criterios de Sydney: al menos un criterio clínico más al menos uno de laboratorio.' },
        ] },
        { title: 'Trombosis', tag: 'Criterio clínico 1', kind: 'alert', items: [
          { t: 'Arterial, venosa o de pequeño vaso', d: 'Documentada objetivamente',
            say: 'El primer criterio clínico es la trombosis documentada. Y aquí está la gran diferencia con las hereditarias: en el SAF la trombosis puede ser venosa, como una trombosis venosa profunda, pero también arterial. Un accidente cerebrovascular isquémico en un paciente joven te tiene que hacer pensar en SAF.' },
        ] },
        { title: 'Morbilidad obstétrica', tag: 'Criterio clínico 2', kind: 'criteria', items: [
          { t: '3 o más abortos antes de la semana 10', d: 'Consecutivos e inexplicados',
            say: 'El segundo criterio es obstétrico, y tiene tres formas. Tres o más abortos espontáneos, consecutivos e inexplicados, antes de la semana diez.' },
          { t: '1 o más muertes fetales desde la semana 10', d: 'Feto morfológicamente normal',
            say: 'Una o más muertes fetales inexplicadas desde la semana diez, con un feto morfológicamente normal.' },
          { t: 'Parto prematuro antes de la semana 34', d: 'Por preeclampsia severa o insuficiencia placentaria',
            say: 'O uno o más partos prematuros antes de la semana treinta y cuatro, por preeclampsia severa, eclampsia o insuficiencia placentaria grave. Si en un enunciado ves trombosis más pérdidas de embarazo, ya sabes qué buscar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Anticoagulante lúpico',
      title: 'Un TTPK largo en un paciente que trombosa',
      nodes: [
        { id: 'al', col: 0, row: 1, k: 'cause', t: 'Anticoagulante lúpico', s: 'Anticuerpo contra fosfolípidos' },
        { id: 'tt', col: 1, row: 1, k: 'effect', t: 'TTPK prolongado', s: 'Solo in vitro' },
        { id: 'mez', col: 2, row: 0, k: 'q', t: 'Prueba de mezcla', s: 'No corrige: es un inhibidor' },
        { id: 'fos', col: 2, row: 2, k: 'mech', t: 'Exceso de fosfolípidos', s: 'Se normaliza' },
        { id: 'trb', col: 3, row: 1, k: 'trap', t: 'In vivo: trombosis', s: 'No sangra' },
      ],
      edges: [
        { from: 'al', to: 'tt' }, { from: 'tt', to: 'mez' }, { from: 'tt', to: 'fos' },
        { from: 'mez', to: 'trb' }, { from: 'fos', to: 'trb' },
      ],
      steps: [
        { show: ['al', 'tt'], note: 'El nombre engaña',
          say: 'El criterio de laboratorio más preguntado es el anticoagulante lúpico, y su nombre es una trampa. En el tubo, este anticuerpo se pega a los fosfolípidos que usa la prueba, y el TTPK sale prolongado.' },
        { show: ['mez'], note: 'Mezcla 1:1 con plasma normal',
          say: 'Si mezclas el plasma del paciente con plasma normal, en partes iguales, el TTPK no corrige. Recuerda lo que vimos en la clase de laboratorio de hemostasia: si falta un factor, la mezcla corrige; si no corrige, hay un inhibidor.' },
        { show: ['fos'], note: 'Confirma que el blanco son los fosfolípidos',
          say: 'Y si agregas un exceso de fosfolípidos a la prueba, el anticuerpo queda saturado y el tiempo se normaliza. Eso confirma que el inhibidor va contra los fosfolípidos.' },
        { show: ['trb'], note: 'TTPK largo + trombosis = SAF',
          say: 'Pero dentro del cuerpo el paciente no sangra: trombosa. Esa es la paradoja que el examen pregunta. Un paciente joven con trombosis y un TTPK prolongado no tiene una hemofilia: tiene un anticoagulante lúpico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome antifosfolípido',
      title: 'Criterios de Sydney: el laboratorio',
      cards: [
        { title: 'Anticuerpos', tag: 'Basta uno', kind: 'criteria', items: [
          { t: 'Anticoagulante lúpico positivo', d: 'TTPK largo que no corrige con mezcla',
            say: 'Los criterios de laboratorio son tres, y basta uno. El primero, el anticoagulante lúpico que acabamos de ver.' },
          { t: 'Anticardiolipina IgG o IgM', d: 'Títulos moderados o altos, > 40 GPL o MPL',
            say: 'El segundo, los anticuerpos anticardiolipina, IgG o IgM, a títulos moderados o altos, sobre cuarenta unidades.' },
          { t: 'Anti-β2-glicoproteína 1', d: 'IgG o IgM, títulos elevados',
            say: 'Y el tercero, los anticuerpos anti beta dos glicoproteína uno, también IgG o IgM, a títulos elevados. Cuando los tres son positivos se habla de triple positividad, y eso importa para el tratamiento.' },
        ] },
        { title: 'Regla de las 12 semanas', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'Positivo en 2 ocasiones', d: 'Separadas por al menos 12 semanas',
            say: 'Y una regla que no puedes olvidar: el anticuerpo tiene que ser positivo en al menos dos ocasiones, separadas por un mínimo de doce semanas.' },
          { t: 'Descarta positivos transitorios', d: 'Frecuentes después de infecciones',
            say: '¿Por qué? Porque después de una infección estos anticuerpos pueden aparecer en forma transitoria. Un solo resultado positivo no hace el diagnóstico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuándo estudiar',
      title: 'A quién sí y a quién no',
      cards: [
        { title: 'Sí se estudia', tag: 'Indicaciones', kind: 'key', items: [
          { t: 'TEV no provocado en menor de 50', d: 'Sin factor de riesgo transitorio',
            say: 'Ahora, la pregunta práctica: ¿a quién estudio? La primera indicación es la trombosis venosa no provocada en un menor de cincuenta años. Joven y sin causa aparente.' },
          { t: 'Trombosis recurrentes', d: 'O antecedente familiar directo de TEV precoz',
            say: 'También las trombosis recurrentes, y el paciente con familiares directos que tuvieron tromboembolismo a edad temprana.' },
          { t: 'Sitios atípicos', d: 'Venas cerebrales, mesentéricas o suprahepáticas',
            say: 'Y las trombosis en sitios atípicos: senos venosos cerebrales, venas mesentéricas o suprahepáticas. Una trombosis ahí no es una trombosis cualquiera.' },
        ] },
        { title: 'No se estudia', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Trombosis provocada', d: 'Cirugía ortopédica mayor, trauma, inmovilización',
            say: 'En cambio, no se estudia en forma indiscriminada al paciente cuya trombosis tiene un gatillante transitorio mayor y evidente: una cirugía ortopédica mayor, un politraumatismo o una inmovilización prolongada. Ahí la causa ya está clara.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Regla de laboratorio',
      title: 'Cuándo tomar la muestra',
      nodes: [
        { id: 'tev', col: 0, row: 1, k: 'start', t: 'Paciente con indicación de estudio', s: 'Con trombosis reciente' },
        { id: 'gen', col: 1, row: 0, k: 'good', t: 'Estudio genético', s: 'Factor V Leiden y protrombina por PCR' },
        { id: 'cua', col: 2, row: 0, k: 'good', t: 'En cualquier momento', s: 'El ADN no cambia' },
        { id: 'fun', col: 1, row: 2, k: 'mech', t: 'Estudio funcional', s: 'Proteína C, S y antitrombina' },
        { id: 'no', col: 2, row: 2, k: 'trap', t: 'No en fase aguda ni anticoagulado', s: 'Falsos déficits' },
        { id: 'dif', col: 3, row: 2, k: 'good', t: 'Diferir', s: '4 a 6 semanas tras suspender' },
      ],
      edges: [
        { from: 'tev', to: 'gen' }, { from: 'gen', to: 'cua' },
        { from: 'tev', to: 'fun' }, { from: 'fun', to: 'no' }, { from: 'no', to: 'dif' },
      ],
      steps: [
        { show: ['tev'], note: 'Dos tipos de examen, dos reglas',
          say: 'Ya decidiste estudiar. Ahora viene una regla técnica que el examen pregunta mucho: cuándo tomar la muestra. Depende de si el examen mide un gen o mide una proteína.' },
        { show: ['gen', 'cua'], note: 'Lo genético no se altera',
          say: 'El estudio genético, factor cinco Leiden y protrombina por PCR, se puede hacer en cualquier momento. El ADN no cambia con el trombo ni con el anticoagulante.' },
        { show: ['fun'], note: 'Las proteínas sí cambian',
          say: 'Las pruebas funcionales, en cambio, miden proteínas: proteína C, proteína S y antitrombina. Y esas proteínas se mueven.' },
        { show: ['no'], note: 'Consumo y fármacos',
          say: 'En la fase aguda se consumen en el trombo. Y los anticoagulantes las alteran: los cumarínicos bajan la proteína C y la S, y las heparinas bajan la antitrombina. Si mides en ese momento, vas a encontrar un déficit que no existe.' },
        { show: ['dif'], note: 'Esperar a que se normalicen',
          say: 'Por eso el estudio funcional se difiere hasta al menos cuatro a seis semanas después de haber suspendido la anticoagulación. La trampa clásica es la alternativa que pide proteína C y S el día del diagnóstico.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Con qué anticoagular',
      nodes: [
        { id: 'saf', col: 0, row: 0, k: 'start', t: 'SAF trombótico', s: 'Primario o con LES' },
        { id: 'hbpm', col: 1, row: 0, k: 'mech', t: 'Heparina de bajo peso molecular', s: 'Puente' },
        { id: 'avk', col: 2, row: 0, k: 'good', t: 'Acenocumarol o warfarina', s: 'INR 2–3, de por vida' },
        { id: 'doac', col: 3, row: 0, k: 'trap', t: 'DOAC', s: 'Contraindicados en triple positivo' },
        { id: 'her', col: 0, row: 2, k: 'start', t: 'Trombofilia hereditaria', s: 'Factor V Leiden, déficit de AT' },
        { id: 'opc', col: 2, row: 2, k: 'good', t: 'DOAC o cumarínicos', s: 'Ambos son opción' },
      ],
      edges: [
        { from: 'saf', to: 'hbpm' }, { from: 'hbpm', to: 'avk' }, { from: 'avk', to: 'doac', label: 'no reemplazar por' },
        { from: 'her', to: 'opc' },
      ],
      steps: [
        { show: ['saf', 'hbpm'], note: 'Primero heparina',
          say: 'Terminemos con el tratamiento. En el SAF trombótico, primario o asociado a lupus, se parte con heparina de bajo peso molecular como puente.' },
        { show: ['avk'], note: 'El estándar es el cumarínico',
          say: 'Y el tratamiento de elección es un antagonista de la vitamina K, acenocumarol o warfarina, con meta de INR entre dos y tres, y de por vida.' },
        { show: ['doac'], note: 'TRAPS y ASTRO-APS',
          say: 'Ahora, la alerta del tema. Los anticoagulantes orales directos, como rivaroxabán o apixabán, parecen más cómodos. Pero los ensayos TRAPS y ASTRO-APS mostraron que son inferiores a los cumarínicos y aumentan las trombosis arteriales, como accidente cerebrovascular e infarto. En el SAF con triple positividad están formalmente contraindicados.' },
        { show: ['her', 'opc'], note: 'En las hereditarias no hay esa restricción',
          say: 'En las trombofilias hereditarias, como el factor cinco Leiden o el déficit de antitrombina, sí se pueden usar los anticoagulantes directos o los cumarínicos. Por eso la pregunta de fondo siempre es la misma: ¿esto es hereditario o es un SAF?' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol: a quién estudiar, qué pedir, cuándo, y con qué tratar.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Hereditarias vs síndrome antifosfolípido',
      head: ['', 'Factor V Leiden', 'Déficit de antitrombina', 'SAF'],
      rows: [
        { cells: ['Origen', 'Hereditario, AD', 'Hereditario, AD', 'Adquirido autoinmune'],
          say: 'Repasemos en una tabla las tres trombofilias que más se preguntan. El factor cinco Leiden y el déficit de antitrombina son hereditarios, autosómicos dominantes. El SAF es adquirido y autoinmune.' },
        { cells: ['Frecuencia', 'La más común (3–5%)', 'Rara', 'La adquirida más frecuente'],
          say: 'En frecuencia, el Leiden es la hereditaria más común, el déficit de antitrombina es raro, y el SAF es la trombofilia adquirida más frecuente.' },
        { cells: ['Trombosis', 'Venosa', 'Venosa grave, recurrente', 'Venosa y arterial'],
          say: 'En el tipo de trombosis está la clave: las hereditarias dan trombosis venosa; el SAF da trombosis venosa y también arterial, como accidente cerebrovascular, infarto o gangrena.' },
        { cells: ['Obstetricia', 'Riesgo leve a moderado', 'Riesgo moderado', 'Abortos < 10 sem, muerte fetal ≥ 10 sem'],
          say: 'En lo obstétrico, el SAF es el que tiene criterios propios: abortos recurrentes antes de la semana diez y muerte fetal desde la semana diez.' },
        { cells: ['Examen', 'Resistencia a PCa / PCR', 'Actividad de antitrombina', 'AL, anticardiolipina, anti-β2GP1'],
          say: 'En el examen, el Leiden se busca por resistencia a la proteína C activada o por PCR; el déficit, midiendo la actividad de la antitrombina; y el SAF, con sus tres anticuerpos.' },
        { cells: ['Anticoagulante', 'DOAC o cumarínico', 'DOAC o cumarínico (resiste heparina)', 'Cumarínico, INR 2–3; DOAC no'],
          say: 'Y en el tratamiento, la fila que más se pregunta: en las hereditarias sirven los anticoagulantes directos o los cumarínicos; en el SAF, cumarínico con INR de dos a tres, y los anticoagulantes directos no.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 31 años con trombosis venosa profunda iliofemoral izquierda no provocada, confirmada por eco-Doppler. Antecedente de dos pérdidas fetales a las 18 y 22 semanas, con fetos morfológicamente normales, y un aborto a las 8 semanas. No usa anticonceptivos, no ha viajado ni tenido cirugías. TP normal, TTPK 52 s (control 30 s) que no corrige con la mezcla 1:1.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Heparina de bajo peso molecular y rivaroxabán como anticoagulante de mantención' },
        { letter: 'B', text: 'Medir proteína C, S y antitrombina hoy, antes de anticoagular' },
        { letter: 'C', text: 'HBPM con puente a acenocumarol (INR 2–3) y anticuerpos antifosfolípidos, a repetir en 12 semanas' },
        { letter: 'D', text: 'Plasma fresco congelado para corregir el TTPK antes de anticoagular' },
        { letter: 'E', text: 'Estudio de factores VIII y IX por sospecha de hemofilia' },
      ],
      correct: 'C',
      explanation: 'Trombosis no provocada + muertes fetales desde la semana 10 + TTPK largo que no corrige con mezcla: anticoagulante lúpico y alta sospecha de SAF. Se anticoagula con HBPM puenteada a acenocumarol (INR 2–3) y se piden anticoagulante lúpico, anticardiolipina y anti-β2GP1, a confirmar a las 12 semanas. Los DOAC están contraindicados; el estudio funcional no se hace en fase aguda.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y un años con una trombosis venosa profunda iliofemoral izquierda, no provocada. Tuvo dos pérdidas fetales, a las dieciocho y veintidós semanas, con fetos normales, y un aborto a las ocho semanas. Sin anticonceptivos, viajes ni cirugías. El tiempo de protrombina es normal y el TTPK está en cincuenta y dos segundos, y no corrige con la mezcla.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: heparina y luego rivaroxabán, medir proteína C, S y antitrombina hoy, heparina con puente a acenocumarol y anticuerpos antifosfolípidos, plasma fresco para corregir el TTPK, o estudiar factores ocho y nueve. Piénsalo.',
        answer: 'Es la C. Trombosis sin causa, muertes fetales y un TTPK que no corrige: es un anticoagulante lúpico, y esto es un SAF hasta demostrar lo contrario. Se anticoagula con heparina y acenocumarol, y los anticuerpos se repiten a las doce semanas. La A es la trampa más tentadora: en el SAF los anticoagulantes directos no sirven. La B falla por el momento, y la D y la E confunden un inhibidor con un déficit de factor.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 54',
      stem: 'Un paciente de 32 años, presenta una trombosis venosa profunda femoropoplítea. Como antecedente, su abuelo falleció a los 85 años, por un accidente vascular encefálico y su padre tuvo un infarto agudo al miocardio a los 60 años. En sus exámenes destacan plaquetas: 140.000 por mm3, TTPA prolongado y VDRL (+).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Déficit de antitrombina III' },
        { letter: 'B', text: 'Déficit de factor VIII' },
        { letter: 'C', text: 'Síndrome antifosfolípidos' },
        { letter: 'D', text: 'Púrpura trombocitopénica trombótica' },
        { letter: 'E', text: 'Enfermedad de Von Willebrand' },
      ],
      correct: 'C',
      explanation: 'Trombosis en un joven con TTPA prolongado y VDRL positivo: síndrome antifosfolípido. Los anticuerpos antifosfolípidos prolongan el TTPA in vitro y pueden dar un VDRL falsamente positivo. El déficit de antitrombina es una trombofilia, pero no alarga el TTPA; el déficit de factor VIII y el von Willebrand sangran.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Paciente de treinta y dos años con una trombosis venosa profunda femoropoplítea. Su abuelo murió de un accidente cerebrovascular a los ochenta y cinco y su padre tuvo un infarto a los sesenta. En los exámenes: ciento cuarenta mil plaquetas, TTPA prolongado y VDRL positivo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: déficit de antitrombina, déficit de factor ocho, síndrome antifosfolípido, púrpura trombocitopénica trombótica, o enfermedad de von Willebrand. Piénsalo.',
        answer: 'Es la C, síndrome antifosfolípido. Un joven que trombosa con un TTPA largo es la paradoja del anticoagulante lúpico. Y el VDRL positivo refuerza la idea: estos anticuerpos reaccionan con la cardiolipina que usa la prueba de sífilis y dan un falso positivo. El déficit de antitrombina es el distractor tentador, porque también trombosa, pero no alarga el TTPA. Y los antecedentes familiares de eventos a edades avanzadas no suman.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 55',
      stem: 'Un paciente de 18 años consulta por dolor y aumento de volumen en la pantorrilla izquierda, en relación a un pequeño traumatismo. Se solicita un estudio Doppler de las extremidades inferiores, que muestra alteraciones del drenaje venoso profundo de la zona. En sus exámenes, se constata hematocrito: 38%, hemoglobina: 12,8 g/dl, plaquetas: 145.000 por mm3, blancos: 8.000 por mm3, TTPA 54 segundos, protrombina: 85%.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Déficit de antitrombina III' },
        { letter: 'B', text: 'Hemofilia A' },
        { letter: 'C', text: 'Trombofilia por anticoagulante lúpico' },
        { letter: 'D', text: 'Hemofilia B' },
        { letter: 'E', text: 'Enfermedad de Von Willebrand' },
      ],
      correct: 'C',
      explanation: 'Trombosis venosa profunda en un joven con TTPA de 54 segundos y protrombina normal: el TTPA largo en un paciente que trombosa corresponde a anticoagulante lúpico. Las hemofilias y el von Willebrand alargan el TTPA pero dan sangrado, no trombosis.',
      say: {
        stem: 'Otra del mismo examen, diciembre de dos mil diecinueve. Paciente de dieciocho años con dolor y aumento de volumen de la pantorrilla tras un traumatismo pequeño. El Doppler muestra una trombosis venosa profunda. Hemoglobina de doce coma ocho, ciento cuarenta y cinco mil plaquetas, TTPA de cincuenta y cuatro segundos y protrombina de ochenta y cinco por ciento.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: déficit de antitrombina, hemofilia A, trombofilia por anticoagulante lúpico, hemofilia B, o enfermedad de von Willebrand. Piénsalo.',
        answer: 'Es la C. Otra vez la misma paradoja: un TTPA muy prolongado con protrombina normal, en un paciente que no sangra sino que trombosa. Eso es el anticoagulante lúpico. Las hemofilias y el von Willebrand son la trampa, porque también alargan el TTPA, pero sus pacientes sangran. Y fíjate que un traumatismo pequeño no explica una trombosis en alguien de dieciocho años.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 68',
      stem: 'Mujer de 28 años con antecedente de 3 abortos espontáneos en primer trimestre y episodio de sangrado vaginal profuso durante el embarazo actual.',
      question: '¿Cuál es el estudio más adecuado para investigar la causa?',
      options: [
        { letter: 'A', text: 'Panel de trombofilias (anticoagulante lúpico, anticuerpos anticardiolipina, anti-β2-glicoproteína I)' },
        { letter: 'B', text: 'Cariotipo de los padres' },
        { letter: 'C', text: 'Histeroscopia diagnóstica' },
        { letter: 'D', text: 'Progesterona en fase lútea' },
        { letter: 'E', text: 'TSH y T4 libre' },
      ],
      correct: 'A',
      explanation: 'Abortos recurrentes del primer trimestre: se debe descartar síndrome antifosfolípido con anticoagulante lúpico, anticardiolipina y anti-β2-glicoproteína I. Es la causa tratable más importante.',
      say: {
        stem: 'Y una más reciente, del EUNACOM de julio de dos mil veinticinco. Mujer de veintiocho años con tres abortos espontáneos en el primer trimestre, que ahora presenta un sangrado vaginal profuso en su embarazo actual.',
        question: '¿Cuál es el estudio más adecuado para investigar la causa?',
        options: 'Las opciones: panel de anticuerpos antifosfolípidos, cariotipo de los padres, histeroscopía, progesterona en fase lútea, o pruebas tiroideas. Piénsalo.',
        answer: 'Es la A. Tres abortos antes de la semana diez es exactamente el criterio obstétrico de Sydney. Entonces buscas los tres anticuerpos: anticoagulante lúpico, anticardiolipina y anti beta dos glicoproteína uno. Fíjate que esta pregunta viene de obstetricia: el SAF se pregunta también fuera de hematología. El cariotipo y la histeroscopía estudian otras causas, pero el SAF es la causa tratable más importante.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Hereditarias', tag: 'Frecuencia vs gravedad', kind: 'key', items: [
          { t: 'Factor V Leiden: la más frecuente', d: 'Resistencia a la proteína C activada',
            say: 'Cerremos con las reglas de oro. El factor cinco Leiden es la trombofilia hereditaria más frecuente, por resistencia a la proteína C activada.' },
          { t: 'Déficit de AT: la más trombogénica', d: 'Con resistencia a la heparina',
            say: 'El déficit de antitrombina es la más trombogénica, y da resistencia a la heparina.' },
        ] },
        { title: 'Estudio', tag: 'A quién y cuándo', kind: 'criteria', items: [
          { t: 'Menor de 50, recurrente o sitio atípico', d: 'No en la trombosis provocada',
            say: 'Se estudia la trombosis no provocada en menores de cincuenta, la recurrente y la de sitio atípico, no la trombosis provocada.' },
          { t: 'Funcionales: 4–6 semanas sin anticoagular', d: 'Genético: en cualquier momento',
            say: 'Las pruebas funcionales se piden cuatro a seis semanas después de suspender la anticoagulación; el estudio genético, en cualquier momento.' },
        ] },
        { title: 'SAF', tag: 'La adquirida', kind: 'alert', items: [
          { t: 'Trombosis u obstetricia + anticuerpo × 2', d: 'Separados por 12 semanas',
            say: 'El SAF es trombosis o morbilidad obstétrica, más un anticuerpo positivo dos veces, separado por doce semanas. TTPK largo en quien trombosa es anticoagulante lúpico.' },
          { t: 'Cumarínico con INR 2–3', d: 'Los DOAC no',
            say: 'Y se trata con cumarínicos, con INR de dos a tres, nunca con anticoagulantes directos. Si te llevas una sola idea de hoy: un paciente joven que trombosa con el TTPK largo tiene un SAF, y el SAF se trata con acenocumarol. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trombofilias: a quién estudiar y cómo tratar',
    root: N('start', 'Paciente con trombosis', 'TEV o trombosis arterial',
      'Llega un paciente con una trombosis. La primera pregunta no es qué examen pedir, sino si vale la pena estudiarlo.',
      ['', N('q', '¿Hay un gatillante transitorio mayor?', 'Cirugía, trauma, inmovilización',
        '¿Hay un gatillante transitorio mayor y evidente, como una cirugía ortopédica, un politraumatismo o una inmovilización prolongada?',
        ['SÍ', N('ok', 'No estudiar trombofilia', 'Tratar la trombosis',
          'Si lo hay, la causa ya está clara: se trata la trombosis y no se estudia trombofilia en forma indiscriminada.')],
        ['NO', N('q', '¿Menor de 50, recurrente, sitio atípico u obstetricia?', 'O historia familiar',
          'Si no lo hay, ¿es menor de cincuenta años, es recurrente, está en un sitio atípico, tiene historia familiar o pérdidas obstétricas? Entonces se estudia.',
          ['Pérdidas fetales, arterial o TTPK largo', N('alert', 'Sospecha de SAF', 'AL, aCL, anti-β2GP1 × 2 en 12 semanas',
            'Si hay pérdidas fetales, trombosis arterial o un TTPK largo que no corrige, sospecha SAF: pide los tres anticuerpos y confírmalos a las doce semanas.',
            ['Confirmado', N('do', 'HBPM → acenocumarol de por vida', 'INR 2–3 · DOAC contraindicados',
              'Si se confirma, heparina con puente a acenocumarol, INR de dos a tres y de por vida. Los anticoagulantes directos no.')])],
          ['TEV venoso', N('do', 'Genético ahora, funcional después', 'Leiden y protrombina · PC, PS y AT a las 4–6 semanas',
            'Si es una trombosis venosa, el estudio genético se pide ahora, y el funcional de proteína C, S y antitrombina, cuatro a seis semanas después de suspender el anticoagulante.',
            ['Hereditaria', N('refer', 'Anticoagular y derivar a hematología', 'DOAC o cumarínico',
              'En la trombofilia hereditaria sirven los anticoagulantes directos o los cumarínicos, y el seguimiento lo hace hematología.')])])])]),
  },
};
