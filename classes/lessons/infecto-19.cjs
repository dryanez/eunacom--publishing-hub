// Clase 4.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-19).
// El banco real no tiene preguntas de ántrax: se usan dos casos representativos del libro.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-19',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'La escara negra que no duele, no supura y no se toca',
      say: 'Bienvenidos. Cerramos el bloque de zoonosis con el ántrax, o carbunco. Es poco frecuente, pero cuando aparece se pregunta de forma muy clásica: reconocer una escara negra que no duele, saber que el antibiótico de elección es el ciprofloxacino, y saber qué no hay que hacer nunca. Y otra vez la exposición da la pista: ganado, cueros y lana.',
    },

    {
      type: 'flow',
      kicker: 'Agente y virulencia',
      title: 'Una espora que resiste décadas',
      nodes: [
        { id: 'esp', col: 0, row: 1, k: 'cause', t: 'Esporas en el suelo', s: 'Viables por décadas' },
        { id: 'bac', col: 1, row: 1, k: 'mech', t: 'Bacillus anthracis', s: 'Bacilo Gram + esporulado, encapsulado' },
        { id: 'cap', col: 2, row: 0, k: 'mech', t: 'Cápsula antifagocítica', s: 'Evade a los fagocitos' },
        { id: 'tox', col: 2, row: 2, k: 'mech', t: 'Toxina tripartita', s: 'Antígeno protector + EF + LF' },
        { id: 'ede', col: 3, row: 1, k: 'effect', t: 'Edema masivo', s: 'Factor edematógeno' },
        { id: 'nec', col: 3, row: 2, k: 'risk', t: 'Necrosis y colapso', s: 'Factor letal' },
      ],
      edges: [
        { from: 'esp', to: 'bac', label: 'germina' }, { from: 'bac', to: 'cap' }, { from: 'bac', to: 'tox' },
        { from: 'tox', to: 'ede' }, { from: 'tox', to: 'nec' },
      ],
      steps: [
        { show: ['esp'], note: 'Resiste calor, desecación y desinfectantes',
          say: 'Partamos por el agente, porque explica la lesión. El Bacillus anthracis forma esporas extremadamente resistentes: aguantan el calor, la desecación y los desinfectantes comunes, y siguen viables en el suelo durante décadas. Por eso contaminan al ganado y a sus productos, y por eso se ha usado como arma biológica.' },
        { show: ['bac'], note: 'Gram positivo, formador de esporas, inmóvil',
          say: 'Cuando la espora entra al cuerpo, germina. Es un bacilo grampositivo, encapsulado e inmóvil.' },
        { show: ['cap'], note: 'Primer factor de virulencia',
          say: 'Tiene dos armas. La primera es la cápsula, que impide que los fagocitos lo destruyan.' },
        { show: ['tox'], note: 'Tres piezas: una abre la puerta, dos hacen el daño',
          say: 'La segunda es una toxina de tres piezas. El antígeno protector es la llave que permite entrar a las otras dos: el factor edematógeno y el factor letal.' },
        { show: ['ede', 'nec'], note: 'Por eso la lesión tiene edema enorme y escara',
          say: 'El factor edematógeno produce un edema masivo, y el factor letal produce necrosis. Fíjate que ahí ya tienes la lesión: una escara necrótica rodeada de un edema enorme. El mecanismo te dibuja la clínica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Carbunco cutáneo',
      title: 'La pústula maligna',
      cards: [
        { title: 'Exposición', tag: '95% de los casos', kind: 'key', items: [
          { t: 'Ganado, cueros, lana, huesos', d: 'Esporas por microtraumatismos de la piel',
            say: 'La forma cutánea es el noventa y cinco por ciento de los casos. Se adquiere cuando las esporas entran por pequeñas heridas de la piel, en personas que trabajan con ganado o con productos animales: cueros, lana y huesos. Curtidores, esquiladores, trabajadores de estancias.' },
        ] },
        { title: 'Evolución de la lesión', tag: 'Pápula a escara', kind: 'criteria', items: [
          { t: 'Pápula pruriginosa', d: 'Luego vesícula',
            say: 'La lesión parte como una pápula que pica pero no duele, y el paciente la confunde con una picadura. Luego se transforma en una vesícula.' },
          { t: 'Escara negra central', d: 'Con corona de vesículas',
            say: 'Después se ulcera y aparece una escara negra central, como un carbón, de ahí el nombre carbunco, rodeada de una corona de pequeñas vesículas.' },
          { t: 'Edema gelatinoso extenso', d: 'No deja fóvea',
            say: 'Y alrededor, un edema gelatinoso muy extenso, que no deja fóvea y puede tomar todo el antebrazo. Es el factor edematógeno trabajando.' },
        ] },
        { title: 'El dato que decide', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'Indolora y sin pus', d: 'Salvo sobreinfección secundaria',
            say: 'Y el dato que más se pregunta: la lesión es típicamente indolora y no tiene pus, salvo que se sobreinfecte. Una escara negra con mucho edema que no duele, en alguien que manipula cueros, es carbunco.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Carbunco por inhalación',
      title: 'La enfermedad de los cardadores de lana',
      nodes: [
        { id: 'inh', col: 0, row: 1, k: 'cause', t: 'Inhalación de esporas', s: 'Bioaerosoles' },
        { id: 'med', col: 1, row: 1, k: 'mech', t: 'Mediastinitis hemorrágica', s: 'Linfadenitis necrotizante' },
        { id: 'gri', col: 2, row: 0, k: 'effect', t: 'Cuadro gripal', s: 'Inicio inespecífico' },
        { id: 'sho', col: 3, row: 0, k: 'alert', t: 'Disnea fulminante y shock', s: 'Cianosis, shock tóxico' },
        { id: 'rx', col: 2, row: 2, k: 'good', t: 'Mediastino ensanchado', s: 'Radiografía de tórax' },
      ],
      edges: [
        { from: 'inh', to: 'med' }, { from: 'med', to: 'gri' }, { from: 'gri', to: 'sho', label: 'brusco' },
        { from: 'med', to: 'rx' },
      ],
      steps: [
        { show: ['inh'], note: 'La forma de los bioaerosoles',
          say: 'La otra forma es la inhalatoria, llamada enfermedad de los cardadores de lana, porque aparecía en quienes procesaban lana contaminada. Hoy es también la forma del bioterrorismo: se inhalan esporas en aerosol.' },
        { show: ['med'], note: 'El daño está en los ganglios del mediastino',
          say: 'Las esporas llegan a los ganglios del mediastino y producen una linfadenitis y mediastinitis hemorrágica necrotizante. Fíjate que no es una neumonía clásica: el daño está en el mediastino.' },
        { show: ['gri'], note: 'Parece una gripe',
          say: 'Al principio parece un cuadro gripal, sin nada que llame la atención.' },
        { show: ['sho'], note: 'Luego evoluciona bruscamente',
          say: 'Pero evoluciona bruscamente a disnea fulminante, cianosis y shock tóxico.' },
        { show: ['rx'], note: 'Imagen patognomónica',
          say: 'Y la radiografía de tórax muestra el signo patognomónico: un ensanchamiento marcado del mediastino. Si en una pregunta ves un cuadro gripal que se vuelve fulminante con mediastino ancho, piensa en carbunco por inhalación.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y tratamiento',
      title: 'Confirmar, notificar y tratar sin tocar',
      cards: [
        { title: 'Confirmación', tag: 'ENO inmediata', kind: 'key', items: [
          { t: 'Gram del líquido vesicular', d: 'Bacilos Gram + en caña de bambú',
            say: 'Para confirmar, se toma líquido de las vesículas para tinción de Gram y cultivo, que muestran bacilos grampositivos en caña de bambú.' },
          { t: 'PCR en el ISP', d: 'Y notificación inmediata a la SEREMI',
            say: 'La confirmación final es por PCR en el Instituto de Salud Pública. Y como es un evento de bioseguridad, la notificación a la SEREMI es obligatoria e inmediata, no se espera el resultado.' },
        ] },
        { title: 'Antibiótico', tag: 'Elección', kind: 'pharma', items: [
          { t: 'Ciprofloxacino 500 mg c/12 h oral', d: 'O levofloxacino, por 60 días',
            say: 'El antibiótico de elección es el ciprofloxacino, quinientos miligramos cada doce horas por vía oral, o levofloxacino, por sesenta días según el libro.' },
          { t: 'Alternativa: doxiciclina', d: '100 mg c/12 h oral',
            say: 'La alternativa es doxiciclina, cien miligramos cada doce horas.' },
          { t: 'Sistémico o inhalatorio', d: 'Ciprofloxacino + clindamicina + meropenem EV',
            say: 'En el carbunco sistémico o inhalatorio se usa una triterapia endovenosa: ciprofloxacino, clindamicina y meropenem.' },
        ] },
        { title: 'Contraindicado', tag: 'Nunca', kind: 'alert', items: [
          { t: 'Desbridar la escara', d: 'Disemina: bacteriemia letal',
            say: 'Y lo que nunca se hace: desbridar, curetear o resecar la escara. La manipulación rompe la barrera y lanza bacterias y toxinas a la sangre, con una bacteriemia que puede ser letal. Es contraintuitivo, porque ante una necrosis el reflejo es operar, y por eso se pregunta.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol de decisión, partiendo por la lesión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Escaras negras: la clave es el dolor',
      head: ['Patología', 'Agente', 'Lesión', 'Dolor'],
      rows: [
        { cells: ['Ántrax (carbunco)', 'Bacillus anthracis', 'Escara negra seca, vesículas y gran edema', 'Indolora y sin pus'],
          say: 'Repasemos las escaras negras que el examen puede poner juntas. El ántrax: escara negra seca con vesículas y gran edema, y es indolora y sin pus.' },
        { cells: ['Aracnoidismo cutáneo', 'Loxosceles laeta (araña de rincón)', 'Placa livedoide violácea con necrosis y flictena', 'Muy dolorosa, quemante'],
          say: 'El aracnoidismo cutáneo, por la araña del rincón: una placa livedoide violácea con necrosis y flictena, que es intensamente dolorosa, quemante. Ese dolor es lo que lo separa del carbunco.' },
        { cells: ['Ectima gangrenoso', 'Pseudomonas aeruginosa', 'Úlcera necrótica con halo eritematoso', 'Moderado a severo'],
          say: 'El ectima gangrenoso, por Pseudomonas: úlcera necrótica con halo eritematoso, en un paciente neutropénico, y duele. El contexto es otro: el paciente inmunosuprimido.' },
        { cells: ['Tularemia', 'Francisella tularensis', 'Úlcera con gran adenopatía supurada', 'Muy dolorosa'],
          say: 'Y la tularemia: úlcera muy dolorosa con una gran adenopatía que supura. En resumen, de todas las escaras negras, la única que no duele ni supura es el carbunco.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 52 años, curtidor de cueros y lanares en una estancia rural, con una lesión en el antebrazo derecho de 5 días, que partió como una "picadura" que no dolía. Presenta una placa ulcerada de 2 cm con escara negruzca seca, rodeada de vesículas serosas y un extenso edema duro de todo el antebrazo. Es indolora y sin exudado purulento. Afebril, en buenas condiciones.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Aracnoidismo cutáneo necrótico' },
        { letter: 'B', text: 'Carbunco cutáneo' },
        { letter: 'C', text: 'Ectima gangrenoso' },
        { letter: 'D', text: 'Celulitis por Staphylococcus aureus' },
        { letter: 'E', text: 'Tularemia ulceroglandular' },
      ],
      correct: 'B',
      explanation: 'Exposición ocupacional a cueros y lana + escara negra seca con corona de vesículas y edema extenso, indolora y sin pus: carbunco cutáneo por B. anthracis. El aracnoidismo y la tularemia son muy dolorosos; el ectima gangrenoso ocurre en neutropénicos; la celulitis es dolorosa y sin escara. Conducta: Gram y cultivo/PCR del líquido vesicular, notificación inmediata y ciprofloxacino, sin desbridar.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y dos años, curtidor de cueros y lanares en una estancia, con una lesión en el antebrazo de cinco días, que empezó como una picadura que no le dolía. Tiene una úlcera de dos centímetros con una escara negra seca, rodeada de vesículas y de un edema duro que toma todo el antebrazo. No duele, no tiene pus, y el paciente está afebril.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: aracnoidismo cutáneo, carbunco cutáneo, ectima gangrenoso, celulitis estafilocócica, o tularemia. Piénsalo.',
        answer: 'Es la B, carbunco cutáneo. El oficio, los cueros y la lana, da la exposición, y la lesión es la pústula maligna completa: escara negra, corona de vesículas y un edema enorme. El distractor más tentador es el aracnoidismo, porque también da necrosis en una zona rural, pero la araña del rincón produce un dolor quemante intenso. Aquí la clave es justamente que no duele.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un trabajador de una fábrica procesadora de cueros importados consulta por una lesión en el dorso de la mano izquierda de 4 días de evolución. Al examen se observa una escara negruzca central de consistencia dura, rodeada por vesículas con líquido claro y un marcado edema indurado en toda la mano, sin dolor a la palpación ni secreción purulenta.',
      question: '¿Cuál es el tratamiento farmacológico de primera línea más adecuado?',
      options: [
        { letter: 'A', text: 'Ciprofloxacino oral' },
        { letter: 'B', text: 'Cefazolina endovenosa' },
        { letter: 'C', text: 'Flucloxacilina oral' },
        { letter: 'D', text: 'Aciclovir tópico' },
        { letter: 'E', text: 'Corticoides sistémicos a dosis altas' },
      ],
      correct: 'A',
      explanation: 'Escara necrótica negruzca indolora con vesículas satélites y edema masivo en un trabajador expuesto a cueros: carbunco cutáneo. El tratamiento de elección es ciprofloxacino oral (500 mg cada 12 h) o, alternativamente, doxiciclina.',
      say: {
        stem: 'Ahora un caso representativo del banco. Un trabajador de una fábrica de cueros importados consulta por una lesión en el dorso de la mano de cuatro días. Tiene una escara negruzca dura, rodeada de vesículas con líquido claro y un edema marcado de toda la mano, sin dolor y sin pus.',
        question: '¿Cuál es el tratamiento farmacológico de primera línea más adecuado?',
        options: 'Las opciones: ciprofloxacino oral, cefazolina endovenosa, flucloxacilina oral, aciclovir tópico, o corticoides en dosis altas. Piénsalo.',
        answer: 'Es la A, ciprofloxacino oral. Es la misma pústula maligna del caso anterior, y el antibiótico de elección es la quinolona, con doxiciclina como alternativa. La cefazolina y la flucloxacilina tientan porque son los antibióticos de las infecciones de piel habituales, pero esas lesiones duelen y supuran. Y los corticoides no tratan una infección bacteriana.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de las siguientes conductas está formalmente CONTRAINDICADA en el manejo de una lesión cutánea sospechosa de carbunco (ántrax) por Bacillus anthracis?',
      question: 'Seleccione la conducta contraindicada.',
      options: [
        { letter: 'A', text: 'Toma de frotis de líquido vesicular para tinción de Gram' },
        { letter: 'B', text: 'Desbridamiento y resección quirúrgica amplia de la escara necrótica' },
        { letter: 'C', text: 'Notificación obligatoria inmediata a la autoridad sanitaria' },
        { letter: 'D', text: 'Inicio precoz de tratamiento con quinolonas' },
        { letter: 'E', text: 'Aislamiento de contacto del paciente con la lesión cubierta' },
      ],
      correct: 'B',
      explanation: 'El desbridamiento, curetaje o escisión de la escara está contraindicado: la manipulación rompe la barrera tisular y favorece el paso de bacterias y toxinas a la sangre, con bacteriemia, shock tóxico y muerte.',
      say: {
        stem: 'Y otro caso representativo del banco, más directo. ¿Cuál de estas conductas está contraindicada frente a una lesión sospechosa de carbunco cutáneo?',
        question: 'Busca la conducta que no se debe hacer.',
        options: 'Las opciones: tomar líquido vesicular para Gram, desbridar y resecar la escara, notificar de inmediato, iniciar quinolonas precozmente, o aislamiento de contacto con la lesión cubierta. Piénsalo.',
        answer: 'Es la B. Desbridar o resecar la escara está contraindicado, porque la manipulación lanza bacterias y toxinas a la sangre, con bacteriemia y shock. Todas las demás son correctas: el Gram del líquido vesicular confirma, la notificación es inmediata, la quinolona es el tratamiento, y la lesión se cubre. Fíjate que la trampa está en el reflejo quirúrgico frente a una necrosis: aquí ese reflejo mata.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sospecha', tag: 'Exposición + lesión', kind: 'key', items: [
          { t: 'Cueros, lana o ganado', d: 'Escara negra + vesículas + gran edema',
            say: 'Cerremos con las reglas de oro. Contacto con cueros, lana o ganado, y una escara negra con corona de vesículas y un gran edema: carbunco cutáneo.' },
          { t: 'Indolora y sin pus', d: 'Lo separa de las otras escaras',
            say: 'Lo que lo separa de las otras escaras negras es que no duele y no supura.' },
        ] },
        { title: 'Inhalatorio', tag: 'Fulminante', kind: 'alert', items: [
          { t: 'Gripe que se vuelve shock', d: 'Mediastino ensanchado',
            say: 'La forma inhalatoria es un cuadro gripal que se vuelve fulminante, con el mediastino ensanchado en la radiografía.' },
        ] },
        { title: 'Conducta', tag: 'Tratar sin tocar', kind: 'pharma', items: [
          { t: 'Gram, PCR en ISP y ENO inmediata', d: 'Notificar a la SEREMI',
            say: 'Se confirma con Gram, cultivo y PCR en el Instituto de Salud Pública, y se notifica de inmediato.' },
          { t: 'Ciprofloxacino; nunca desbridar', d: 'Alternativa: doxiciclina',
            say: 'Se trata con ciprofloxacino, o doxiciclina, y nunca se desbrida la escara. Si te llevas una sola idea de hoy: una escara negra que no duele, en alguien que trabaja con cueros o lana, es carbunco, y se trata con antibiótico, no con bisturí. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Escara negra: ¿es carbunco?',
    root: N('start', 'Lesión necrótica con escara negra', 'Piel expuesta',
      'Paciente con una lesión cutánea necrótica, con escara negra. Hay varias causas posibles, y dos preguntas las separan.',
      ['', N('q', '¿Duele o supura?', 'Dolor intenso, pus o adenopatía',
        'La primera pregunta es el dolor. El carbunco es típicamente indoloro y sin pus.',
        ['SÍ', N('refer', 'Pensar en otra causa', 'Aracnoidismo, ectima, tularemia',
          'Si duele mucho o supura, piensa en otra causa: aracnoidismo si es quemante y livedoide, ectima gangrenoso si es neutropénico, tularemia si hay gran adenopatía supurada.')],
        ['NO', N('q', '¿Exposición a ganado, cueros o lana?', 'Vesículas + edema gelatinoso',
          'Si es indolora, sin pus, con corona de vesículas y gran edema, busca la exposición: ganado, cueros, lana o huesos.',
          ['SÍ', N('do', 'Sospecha de carbunco cutáneo', 'Gram y cultivo/PCR (ISP) + ENO inmediata',
            'Con exposición, es carbunco cutáneo. Toma líquido vesicular para Gram y cultivo, confirma por PCR en el Instituto de Salud Pública, y notifica de inmediato a la SEREMI.',
            ['Localizado', N('ok', 'Ciprofloxacino oral', 'O doxiciclina · sin desbridar',
              'Si está localizado, ciprofloxacino oral o doxiciclina. Y nunca desbridar la escara.')],
            ['Sistémico o inhalatorio', N('alert', 'Triterapia EV', 'Ciprofloxacino + clindamicina + meropenem',
              'Si hay compromiso sistémico, o un cuadro gripal fulminante con mediastino ensanchado, es carbunco sistémico o inhalatorio: triterapia endovenosa con ciprofloxacino, clindamicina y meropenem.')])],
          ['NO', N('refer', 'Revisar el diferencial', 'Buscar otra exposición o contexto',
            'Sin esa exposición, el carbunco es muy improbable: revisa el diferencial y el contexto del paciente, como la inmunosupresión o una picadura.')])])]),
  },
};
