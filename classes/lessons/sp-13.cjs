// Clase 21.13 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-11.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs (sp-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué se escribe, cuándo se prohíbe firmar, y el plazo fatal del deber de denuncia',
      say: 'Bienvenidos. Hoy vemos la certificación médica de defunción, las autopsias y el deber de denuncia. Es de máxima rentabilidad, porque casi todos los exámenes traen una pregunta sobre el llenado correcto del certificado, y trae siempre la misma trampa: escribir paro cardiorrespiratorio, algo que está terminantemente prohibido. Vamos a entender por qué, y a aprender exactamente qué sí se puede escribir.',
    },

    {
      type: 'flow',
      kicker: 'El certificado de defunción',
      title: 'Tres causas, una sola cadena lógica',
      nodes: [
        { id: 'bas', col: 0, row: 1, k: 'cause', t: 'Causa básica', s: 'La enfermedad que inició todo' },
        { id: 'int', col: 1, row: 1, k: 'mech', t: 'Causa intermedia', s: 'La complicación que le siguió' },
        { id: 'inm', col: 2, row: 1, k: 'effect', t: 'Causa inmediata', s: 'La condición final antes de morir' },
        { id: 'mue', col: 3, row: 1, k: 'risk', t: 'Muerte', s: 'El desenlace' },
        { id: 'pro', col: 2, row: 3, k: 'trap', t: 'Paro cardiorrespiratorio', s: 'Prohibido escribirlo solo' },
        { id: 'ine', col: 3, row: 3, k: 'alert', t: 'Certificado inválido', s: 'No sirve para las estadísticas' },
      ],
      edges: [
        { from: 'bas', to: 'int' }, { from: 'int', to: 'inm' }, { from: 'inm', to: 'mue' },
        { from: 'pro', to: 'ine', label: 'si se usa' },
      ],
      steps: [
        { show: ['bas'], note: 'Es la que tabula el INE',
          say: 'Empecemos por la estructura. Mira este certificado de defunción vigente en Chile: se llena hacia atrás, empezando por el final, pero se razona hacia adelante, desde la causa básica. La causa básica es la enfermedad o lesión inicial que echó a andar toda la cadena, por ejemplo un adenocarcinoma o una cirrosis. Es la que el Instituto Nacional de Estadísticas tabula para las estadísticas de salud del país.',
          photo: { src: 'biblioteca/16_salud_publica/sp-13/01_formulario_cmd__manual-cmd.jpg', label: 'Certificado vigente', at: 'Mira este certificado', credit: 'Manual correcto llenado CMD (ESP U. de Chile / Colegio Médico), Anexo 2' } },
        { show: ['int'], note: 'La complicación que la causa básica generó',
          say: 'En esta secuencia se ve cómo, de esa causa básica, nace la causa intermedia: la complicación que la enfermedad de base originó o facilitó. Por ejemplo, una cirrosis que genera hipertensión portal y várices esofágicas.',
          photo: { src: 'biblioteca/16_salud_publica/sp-13/02_secuencia_causas__manual-cmd.jpg', label: 'Secuencia de causas', at: 'En esta secuencia', credit: 'Manual correcto llenado CMD, Fig. 2' } },
        { show: ['inm'], note: 'Lo último antes de morir',
          say: 'Y de la causa intermedia nace la causa inmediata: la condición final que llevó directamente a la muerte, como una hemorragia masiva o un shock séptico. Fíjate en la lógica: tiene que existir una relación de causalidad real entre las tres, una lleva a la otra en orden descendente.' },
        { show: ['mue'], note: 'El desenlace de la cadena',
          say: 'Y esa cadena completa termina en la muerte del paciente.' },
        { show: ['pro', 'ine'], note: 'La trampa más repetida del tema',
          say: 'Ahora, la trampa que garantiza pregunta. Nunca se escribe paro cardiorrespiratorio, ni falla multiorgánica, ni paro respiratorio, como causa única o como causa básica. ¿Por qué? Porque todas las personas, sin excepción, mueren en paro cardiorrespiratorio: ese término no aporta ninguna información diagnóstica ni epidemiológica. Un certificado así no sirve para nada, y el examen lo sabe.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El certificado, Parte II',
      title: 'Lo que contribuye, pero no inicia la cadena',
      cards: [
        { title: 'Estados mórbidos contribuyentes', tag: 'Se anotan aparte', kind: 'normal', items: [
          { t: 'Diabetes, hipertensión, obesidad', d: 'Van en la Parte II del certificado',
            say: 'Antes de seguir, un detalle que el libro marca y que se pregunta poco pero se confunde mucho. El certificado tiene una segunda parte, la Parte dos, donde se anotan otros estados mórbidos que contribuyeron a la muerte, pero que no forman parte de esa cadena causal directa. Ahí van, por ejemplo, la diabetes mellitus tipo dos o la hipertensión arterial de un paciente que fallece por otra causa.' },
          { t: 'No son la causa, agravan el cuadro', d: 'La diferencia con la Parte I decide la pregunta',
            say: 'Y la diferencia con la cadena de la Parte uno es exactamente esta: si esa diabetes o esa hipertensión generaron directamente la enfermedad que terminó matando al paciente, van en la cadena, como causa básica o intermedia. Si solo empeoraron el pronóstico sin ser la causa directa de nada, van en la Parte dos, como contribuyentes. No es lo mismo causar que acompañar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cuándo no se firma',
      title: 'Muerte natural versus muerte médico-legal',
      nodes: [
        { id: 'vio', col: 0, row: 0, k: 'risk', t: 'Muerte violenta', s: 'Homicidio, suicidio, trauma o accidente' },
        { id: 'tox', col: 0, row: 1, k: 'risk', t: 'Intoxicación', s: 'Química, medicamentosa o por drogas' },
        { id: 'cus', col: 0, row: 2, k: 'risk', t: 'Muerte en custodia', s: 'Policial o penitenciaria' },
        { id: 'qui', col: 0, row: 3, k: 'risk', t: 'Muerte quirúrgica inexplicable', s: 'Sospecha de mala praxis' },
        { id: 'hal', col: 0, row: 4, k: 'risk', t: 'Cadáver hallado', s: 'Sin atención previa, causa incierta' },
        { id: 'sml', col: 2, row: 2, k: 'refer', t: 'Servicio Médico Legal', s: 'Notificar a Fiscalía o Carabineros' },
        { id: 'nat', col: 4, row: 0, k: 'good', t: 'Muerte natural conocida', s: 'Enfermedad médica de base, sin sospecha' },
        { id: 'fir', col: 4, row: 1, k: 'good', t: 'Médico tratante firma el CMD', s: 'Con la cadena de causas correcta' },
      ],
      edges: [
        { from: 'vio', to: 'sml' }, { from: 'tox', to: 'sml' }, { from: 'cus', to: 'sml' },
        { from: 'qui', to: 'sml' }, { from: 'hal', to: 'sml' },
        { from: 'nat', to: 'fir' },
      ],
      steps: [
        { show: ['vio'], note: 'El médico clínico no firma nunca en estos casos',
          say: 'Ahora la pregunta que decide si tú puedes firmar el certificado o no. Lo primero: toda muerte violenta, ya sea homicidio, suicidio, un trauma o un accidente de tránsito, va al Servicio Médico Legal. Y ojo con un detalle que se pregunta: da lo mismo si la muerte ocurre semanas después en la Unidad de Cuidados Intensivos por una complicación médica, como una neumonía; si el origen fue un trauma violento, sigue siendo una muerte médico-legal.' },
        { show: ['tox'], note: 'Cualquier tóxico, lícito o ilícito',
          say: 'Lo mismo con cualquier intoxicación, sea por un medicamento, un químico o una droga ilícita.' },
        { show: ['cus'], note: 'Cualquier fallecido bajo custodia del Estado',
          say: 'También toda muerte que ocurra mientras la persona está bajo custodia policial o penitenciaria.' },
        { show: ['qui'], note: 'Cuando hay sospecha de mala praxis',
          say: 'Y la muerte intraoperatoria o en el postoperatorio inmediato que resulta inexplicable, porque ahí puede haber sospecha de mala praxis.' },
        { show: ['hal'], note: 'Sin testigo médico y sin causa clara',
          say: 'Y un cadáver hallado en la vía pública o en su domicilio, sin atención médica previa y sin una causa de muerte clara.' },
        { show: ['sml'], note: 'Se preserva el cuerpo, se avisa, no se toca nada',
          say: 'En todos estos casos, el médico tiene prohibición legal formal de firmar el certificado. Tiene que preservar el cuerpo, no alterar el sitio, y notificar de inmediato a Carabineros, a la PDI o al Ministerio Público, para que el caso se derive al Servicio Médico Legal.' },
        { show: ['nat', 'fir'], note: 'Solo aquí firma el médico clínico',
          say: 'Solo cuando la muerte es por una enfermedad médica conocida, sin sospecha de nada de lo anterior, el médico tratante firma el certificado, con su cadena de causa básica, intermedia e inmediata.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Autopsias',
      title: 'Autopsia clínica versus autopsia médico-legal',
      cards: [
        { title: 'Autopsia clínica', tag: 'Hospitalaria', kind: 'normal', items: [
          { t: 'En muertes naturales conocidas', d: 'Fines docentes y de confirmación diagnóstica',
            say: 'Hay dos tipos de autopsia, y no se pueden confundir. La autopsia clínica se hace en el servicio de anatomía patológica de un hospital, en pacientes fallecidos por causas naturales, y sirve para confirmar el diagnóstico, entender por qué no respondió al tratamiento, y con fines docentes para la formación de nuevos médicos.' },
          { t: 'Exige autorización familiar', d: 'Firmada por los familiares directos',
            say: 'Y necesita la autorización firmada de los familiares directos. Sin esa firma, no se hace.' },
        ] },
        { title: 'Autopsia médico-legal', tag: 'Judicial', kind: 'alert', items: [
          { t: 'La ordena el fiscal', d: 'Obligatoria en toda muerte violenta o sospechosa',
            say: 'La autopsia médico-legal es completamente distinta: la ordena un fiscal del Ministerio Público, y es obligatoria en toda muerte violenta o con sospecha de delito, aunque los familiares prefieran evitarla.' },
          { t: 'La familia no puede oponerse', d: 'Y la firma el médico legista del Servicio Médico Legal',
            say: 'Aquí la familia no tiene derecho a oponerse, porque no depende de su voluntad, depende de un mandato judicial que busca esclarecer un posible delito. Y el que firma el certificado, en estos casos, es el médico legista del Servicio Médico Legal, nunca el médico tratante que atendió al paciente en vida.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Deber de denuncia',
      title: 'Artículos ciento setenta y cinco y ciento setenta y seis del Código Procesal Penal',
      cards: [
        { title: 'Quién está obligado', tag: 'Todo el equipo de salud', kind: 'key', items: [
          { t: 'Médicos, enfermeras y matronas', d: 'De establecimientos públicos y privados',
            say: 'Cambiemos de tema, al deber de denuncia. Todo médico cirujano, enfermera o matrona que atienda a una persona con lesiones que parezcan un delito de acción pública, está obligado por ley a denunciarlo, sea en un establecimiento público o privado, y da lo mismo si el paciente sobrevive o fallece por esas lesiones.' },
          { t: 'Heridas, agresión sexual, maltrato', d: 'Por arma blanca o de fuego, y violencia intrafamiliar grave',
            say: 'Se denuncian las lesiones por arma blanca o de fuego, la sospecha de agresión sexual, las señales de maltrato infantil o de violencia intrafamiliar grave, y las intoxicaciones dolosas.' },
        ] },
        { title: 'El plazo que se pregunta', tag: 'Veinticuatro horas', kind: 'alert', items: [
          { t: 'Plazo fatal, no prorrogable', d: 'Desde que se toma conocimiento del hecho',
            say: 'Y aquí está el dato que garantiza pregunta: el plazo legal para denunciar es de veinticuatro horas, contadas desde que el profesional toma conocimiento del hecho. No es facultativo, no depende de que la víctima autorice, y no se cumple citando primero al agresor para verificar su versión.' },
          { t: 'Se denuncia a Fiscalía, PDI o Carabineros', d: 'No al Colegio Médico ni a la familia',
            say: 'Se denuncia ante el Ministerio Público, Carabineros o la Policía de Investigaciones. No basta con avisar al jefe de servicio o con dejarlo solo escrito en la ficha: la denuncia formal es a la autoridad, y omitirla dentro del plazo es en sí mismo un delito.' },
          { t: 'Omitir la denuncia es delito', d: 'Se sanciona penalmente al profesional que calla',
            say: 'Y el incumplimiento no es una falta administrativa menor: omitir la denuncia constituye en sí mismo un delito de omisión, sancionado en el Código Penal, independiente de cualquier responsabilidad civil que además pueda seguir el profesional.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Maltrato infantil',
      title: 'Cuándo sospechar, qué hacer y cómo prevenir',
      cards: [
        { title: 'Sospéchalo ante', tag: 'Señales de alarma', kind: 'alert', items: [
          { t: 'Lesión que no calza con el relato', d: 'Con el mecanismo o con la edad del niño',
            say: 'Esta denuncia se junta con un caso muy frecuente: el maltrato infantil. Incluye el maltrato físico, el psicológico, la negligencia, el abuso sexual y la exposición a violencia intrafamiliar. Sospéchalo cuando la lesión no coincide con el mecanismo relatado o con la edad del niño.' },
          { t: 'Equimosis en zonas protegidas', d: 'Orejas, cuello, tronco, glúteos, genitales; lactante que no camina',
            say: 'También ante equimosis en zonas protegidas, como orejas, cuello, tronco, glúteos y genitales, o en un lactante que aún no camina; y lesiones de edades distintas.' },
          { t: 'Fracturas y quemaduras sospechosas', d: 'Costales posteriores, metafisarias; inmersión',
            say: 'Las fracturas costales posteriores o metafisarias, las quemaduras por inmersión, y el hematoma subdural con hemorragias retinianas, que es el niño sacudido. Y los relatos cambiantes o la consulta tardía.' },
        ] },
        { title: 'Manejo', tag: 'Qué haces tú', kind: 'key', items: [
          { t: 'Examen completo y estudio por edad', d: 'Radiografías de esqueleto en menores de 2 años; fondo de ojo',
            say: 'El manejo: examen completo y registro objetivo, y estudio según la edad, con radiografías de esqueleto en menores de dos años, fondo de ojo y neuroimagen.' },
          { t: 'Hospitalizar si hay riesgo', d: 'Protección inmediata',
            say: 'Si hay riesgo, hospitalización protectora.' },
          { t: 'Denunciar en 24 horas', d: 'Y pedir medida de protección al Tribunal de Familia',
            say: 'Y denuncia dentro de las veinticuatro horas, más la solicitud de una medida de protección al Tribunal de Familia.' },
        ] },
        { title: 'Prevención', tag: 'Tres niveles', kind: 'criteria', items: [
          { t: 'Primaria: parentalidad positiva', d: 'Apego, Edimburgo, Chile Crece Contigo',
            say: 'La prevención primaria promueve la parentalidad positiva, el apego, la pesquisa de depresión posparto con la escala de Edimburgo y el programa Chile Crece Contigo.' },
          { t: 'Secundaria: familias de riesgo', d: 'Padres jóvenes, adicciones, violencia, hacinamiento',
            say: 'La secundaria identifica familias de riesgo, con padres muy jóvenes, adicciones, violencia, hacinamiento o un hijo prematuro o con discapacidad, y refuerza las visitas domiciliarias.' },
          { t: 'Terciaria: tratar y proteger', d: 'La detección es del equipo de atención primaria',
            say: 'La terciaria trata, repara y protege al niño. Y la detección en el control de salud es responsabilidad del equipo de atención primaria.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Violencia intrafamiliar',
      title: 'Detectar y manejar la violencia intrafamiliar',
      nodes: [
        { id: 'c1', col: 0, row: 0, k: 'cause', t: 'Acumulación de tensión', s: 'Fase uno del ciclo' },
        { id: 'c2', col: 1, row: 1, k: 'alert', t: 'Explosión', s: 'La agresión' },
        { id: 'c3', col: 2, row: 0, k: 'effect', t: 'Luna de miel', s: 'Arrepentimiento y promesas' },
        { id: 'det', col: 2, row: 3, k: 'q', t: 'Pregunta directa y a solas', s: 'Lesiones inexplicadas, consultas repetidas, embarazo' },
        { id: 'man', col: 4, row: 3, k: 'good', t: 'Riesgo vital, lesiones, derivar', s: 'SERNAMEG o tribunales; delito: denuncia' },
      ],
      edges: [
        { from: 'c1', to: 'c2' }, { from: 'c2', to: 'c3' }, { from: 'c3', to: 'c1', label: 'se repite' },
        { from: 'det', to: 'man' },
      ],
      steps: [
        { show: ['c1', 'c2', 'c3'], note: 'Un ciclo que se repite',
          say: 'La violencia intrafamiliar, regulada por la Ley veinte mil sesenta y seis, es todo maltrato a la vida o la integridad física o psíquica de quien tiene o tuvo una relación familiar o de convivencia con el agresor. Sigue un ciclo: acumulación de tensión, explosión, que es la agresión, y luna de miel. Y vuelve a empezar.' },
        { show: ['det'], note: 'Preguntar siempre, a solas',
          say: 'Para detectarla, pregunta directamente y a solas, sobre todo ante lesiones inexplicadas, consultas repetidas, embarazo, depresión o síntomas inespecíficos.' },
        { show: ['man'], note: 'Riesgo, registro, derivación',
          say: 'El manejo: evaluar el riesgo vital, atender y registrar las lesiones, informar sobre medidas de protección y derivar a los Centros de la Mujer del SERNAMEG o a los tribunales de familia. Si la violencia es grave y constituye delito, la denuncia es obligatoria, en veinticuatro horas. Y mientras exista riesgo, se evita la terapia de pareja y la mediación.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fuentes de información',
      title: 'De dónde sale la información en salud, y tu papel',
      cards: [
        { title: 'Fuentes', tag: 'Para el diagnóstico de salud', kind: 'key', items: [
          { t: 'Estadísticas vitales y censos', d: 'Nacimientos y defunciones; el certificado es su origen; INE',
            say: 'El certificado de defunción alimenta una de las fuentes de información en salud: las estadísticas vitales, de nacimientos y defunciones. Las otras son los censos de población, a cargo del INE.' },
          { t: 'Encuestas y registros de servicios', d: 'ENS, CASEN, ENCAVI; egresos, REM, GES',
            say: 'Las encuestas poblacionales, como la Encuesta Nacional de Salud, la CASEN y la ENCAVI. Y los registros de servicios: egresos hospitalarios, el REM y el GES.' },
          { t: 'Vigilancia y registros poblacionales', d: 'EPIVIGILA, cáncer; estudios especiales',
            say: 'La vigilancia epidemiológica, con EPIVIGILA, los registros poblacionales como el de cáncer, y los estudios especiales. El DEIS del Ministerio consolida la mayoría.' },
        ] },
        { title: 'Tu papel', tag: 'El médico genera el dato', kind: 'alert', items: [
          { t: 'Llenas certificado, notificas, registras', d: 'Con rigor',
            say: 'Y tú generas esa información: al llenar el certificado, notificar enfermedades y registrar diagnósticos en la ficha. Por eso debes hacerlo con rigor.' },
          { t: 'Limitaciones: subregistro y causa mal escrita', d: 'Evita «paro cardiorrespiratorio»',
            say: 'Sus limitaciones son el subregistro y la mala calidad de la causa de muerte, por ejemplo cuando se escribe paro cardiorrespiratorio. La licencia médica es el tercer documento que emites, controlado por la COMPIN y la SUSESO.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora armemos el árbol completo de decisión frente a un fallecido.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Muerte natural versus muerte médico-legal',
      head: ['Criterio', 'Muerte natural', 'Muerte médico-legal'],
      rows: [
        { cells: ['Quién firma el certificado', 'El médico tratante', 'Solo el médico legista del Servicio Médico Legal'],
          say: 'Repasemos con la tabla. Quién firma el certificado: en la muerte natural, el médico tratante; en la médico-legal, exclusivamente el médico legista.' },
        { cells: ['Consentimiento familiar', 'Se exige para la autopsia clínica', 'No aplica: la autopsia es obligatoria'],
          say: 'El consentimiento familiar: se exige para la autopsia clínica, pero no aplica en la médico-legal, porque esa autopsia es obligatoria por orden del fiscal.' },
        { cells: ['Origen violento con muerte hospitalaria tardía', 'No aplica', 'Sigue siendo médico-legal, aunque pasen semanas'],
          say: 'Y el caso que más confunde, el que suele decidir la pregunta del examen: si el origen fue violento, la muerte sigue siendo médico-legal aunque el paciente fallezca semanas después en el hospital por una complicación médica, como una neumonía o una sepsis.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Llenado correcto del certificado: un ejemplo',
      head: ['Línea del certificado', 'Error frecuente', 'Llenado correcto'],
      rows: [
        { cells: ['Causa inmediata', 'Paro cardiorrespiratorio', 'Shock séptico de foco abdominal'],
          say: 'Y una segunda tabla, con un ejemplo de llenado. En la causa inmediata, el error frecuente es escribir paro cardiorrespiratorio; lo correcto es la condición real, como un shock séptico de foco abdominal.' },
        { cells: ['Causa intermedia', 'Falla multiorgánica', 'Peritonitis aguda difusa'],
          say: 'En la causa intermedia, el error es falla multiorgánica; lo correcto es la complicación real que la generó, como una peritonitis aguda difusa.' },
        { cells: ['Causa básica', 'Insuficiencia respiratoria', 'Diverticulitis aguda perforada'],
          say: 'Y en la causa básica, el error es un término inespecífico como insuficiencia respiratoria; lo correcto es la enfermedad que inició todo, en este ejemplo, una diverticulitis aguda perforada. Fíjate en el hilo: cada línea tiene que ser una enfermedad real y diagnosticable, nunca un modo de morir.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un anciano de 82 años, diabético e hipertenso, sufre un asalto en la vía pública y recibe un golpe contuso severo en el cráneo, que le produce un hematoma subdural traumático. Es operado y derivado a la Unidad de Cuidados Intensivos, donde fallece a los 25 días de ingreso, por una neumonía aspirativa y un shock séptico. El médico residente de turno evalúa si debe firmar el certificado de defunción, por tratarse de una muerte hospitalaria tardía.',
      question: '¿Cuál es la conducta correcta?',
      options: [
        { letter: 'A', text: 'Firmar el certificado, con shock séptico como causa básica de defunción' },
        { letter: 'B', text: 'No firmar el certificado: la muerte es médico-legal, por el origen traumático inicial' },
        { letter: 'C', text: 'Firmar el certificado, escribiendo paro cardiorrespiratorio como causa básica' },
        { letter: 'D', text: 'Firmar el certificado solo si la familia lo autoriza por escrito' },
        { letter: 'E', text: 'Solicitar una autopsia clínica antes de decidir quién firma' },
      ],
      correct: 'B',
      explanation: 'Si el evento causal inicial fue violento o accidental, la muerte se clasifica como médico-legal, sin importar cuánto tiempo pase internado ni que la causa inmediata final sea médica. El residente no debe firmar el certificado: debe preservar el cuerpo y notificar para que el caso se derive al Servicio Médico Legal.',
      say: {
        stem: 'Vamos con un caso. Un anciano de ochenta y dos años, diabético e hipertenso, sufre un asalto en la vía pública y recibe un golpe fuerte en el cráneo, que le produce un hematoma bajo la duramadre. Lo operan y lo llevan a la unidad de cuidados intensivos, donde fallece veinticinco días después, por una neumonía aspirativa y un shock séptico. El médico residente de turno evalúa si debe firmar el certificado, porque piensa que es una muerte hospitalaria tardía.',
        question: '¿Cuál es la conducta correcta?',
        options: 'Las opciones: firmar con shock séptico como causa básica, no firmar porque es médico-legal por el origen traumático, firmar escribiendo paro cardiorrespiratorio, firmar solo con autorización familiar, o pedir primero una autopsia clínica. Piénsalo.',
        answer: 'Es la B. Este caso está armado justo para la trampa del tiempo: veinticinco días internado suenan a una muerte médica tardía, pero el origen de toda la cadena fue un trauma por asalto. Eso convierte la muerte en médico-legal, sin importar que la causa inmediata haya sido una complicación médica como la neumonía. El residente no firma nada: preserva el cuerpo y notifica para que vaya al Servicio Médico Legal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 4',
      stem: 'Un paciente con antecedente de cáncer de próstata sufre un tromboembolismo pulmonar, luego falla respiratoria, luego un paro cardíaco, y finalmente la muerte.',
      question: '¿Cuál es la causa inmediata de muerte en el certificado de defunción?',
      options: [
        { letter: 'A', text: 'Cáncer de próstata' },
        { letter: 'B', text: 'Tromboembolismo pulmonar' },
        { letter: 'C', text: 'Paro cardíaco' },
        { letter: 'D', text: 'Falla respiratoria' },
        { letter: 'E', text: 'Trombosis venosa profunda' },
      ],
      correct: 'D',
      explanation: 'La cadena completa es: cáncer de próstata como causa básica, tromboembolismo pulmonar como causa intermedia, y falla respiratoria como causa inmediata, la condición final antes de morir. El paro cardíaco es el mecanismo terminal universal y nunca se escribe en el certificado, por más que sea literalmente lo último que ocurrió.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Un paciente con antecedente de cáncer de próstata sufre un tromboembolismo pulmonar, después una falla respiratoria, después un paro cardíaco, y finalmente muere.',
        question: '¿Cuál es la causa inmediata de muerte en el certificado de defunción?',
        options: 'Las opciones: cáncer de próstata, tromboembolismo pulmonar, paro cardíaco, falla respiratoria, o trombosis venosa profunda.',
        answer: 'Es la D, falla respiratoria. Arma la cadena completa como la vimos: el cáncer de próstata es la causa básica, el tromboembolismo pulmonar es la causa intermedia, y la falla respiratoria es la causa inmediata, la última condición real antes de morir. El paro cardíaco es exactamente el distractor que estudiamos: es lo último que ocurre, pero por ser un mecanismo universal, nunca se escribe en el certificado.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2024 · Pregunta 167",
      "stem": "Un médico recién titulado quiere conocer qué norma regula en Chile el ejercicio de las profesiones de la salud, incluida la medicina.",
      "question": "¿Cuál es el cuerpo normativo que regula el ejercicio de la profesión médica en Chile?",
      "options": [
        {
          "letter": "A",
          "text": "Constitución Política de la República"
        },
        {
          "letter": "B",
          "text": "Código del Colegio Médico de Chile"
        },
        {
          "letter": "C",
          "text": "Ley que crea el Ministerio de Salud"
        },
        {
          "letter": "D",
          "text": "Ley de Derechos y Deberes del Paciente"
        },
        {
          "letter": "E",
          "text": "Código Sanitario"
        }
      ],
      "correct": "E",
      "explanation": "El Código Sanitario regula el ejercicio de las profesiones de la salud, además del control de enfermedades transmisibles, medicamentos y establecimientos, con fiscalización de la SEREMI de Salud. El Código de Ética del Colegio Médico es gremial y solo obliga a sus colegiados; la Ley 20.584 regula los derechos del paciente.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticuatro, sobre el marco legal del ejercicio médico.",
        "question": "¿Cuál es el cuerpo normativo que regula el ejercicio de la profesión médica en Chile?",
        "options": "Las opciones: la Constitución, el código del Colegio Médico, la ley que crea el Ministerio de Salud, la ley de derechos y deberes del paciente, o el Código Sanitario. Piénsalo.",
        "answer": "Es la E. El Código Sanitario es el que regula el ejercicio de las profesiones de la salud en Chile. El código del Colegio Médico tienta, pero es un marco ético gremial que solo obliga a quienes están colegiados."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 5.01.3.008 · Maltrato infantil",
      "stem": "Lactante de 4 meses es traído a urgencia por llanto e inmovilidad de la pierna derecha. Los padres refieren que se cayó del sofá hace 2 días. La radiografía muestra una fractura espiroidea de fémur. El lactante aún no logra girarse solo y tiene equimosis en el tórax.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Hospitalizar para protección y estudio (serie ósea y fondo de ojo), registrar los hallazgos y denunciar"
        },
        {
          "letter": "B",
          "text": "Inmovilizar y dar de alta con control en traumatología"
        },
        {
          "letter": "C",
          "text": "Dar de alta y citar a control en una semana"
        },
        {
          "letter": "D",
          "text": "Realizar la denuncia y dar de alta con los padres"
        },
        {
          "letter": "E",
          "text": "Descartar osteogénesis imperfecta antes de adoptar cualquier medida"
        }
      ],
      "correct": "A",
      "explanation": "Fractura de fémur en un lactante que no se desplaza, con mecanismo incoherente, consulta tardía y equimosis, es altamente sugerente de maltrato. Se hospitaliza para protegerlo y estudiarlo (serie ósea, fondo de ojo, eventual neuroimagen), se registra en la ficha y se denuncia, deber legal del médico. El estudio de diagnósticos diferenciales no retrasa la protección.",
      "say": {
        "stem": "Lactante de cuatro meses, que aún no se gira, con fractura espiroidea de fémur atribuida a una caída del sofá hace dos días y equimosis en el tórax.",
        "question": "¿Cuál es la conducta?",
        "options": "Las opciones: hospitalizar, estudiar y denunciar; inmovilizar y alta; control en una semana; denunciar y dar de alta con los padres; o descartar osteogénesis imperfecta primero. Piénsalo.",
        "answer": "Es la A. El mecanismo no calza y hay que proteger al niño hospitalizándolo, estudiándolo y denunciando. Denunciar y dar de alta tienta, pero lo devuelve al mismo lugar donde ocurrió el posible maltrato."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 5.01.3.013 · Violencia intrafamiliar",
      "stem": "Mujer de 35 años consulta en el servicio de urgencia de un hospital público por contusiones en la cara y los brazos. Relata que su pareja la golpea hace un año, que anoche la amenazó con un cuchillo y que teme por su vida. Tiene 2 hijos pequeños en casa.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Recomendar terapia de pareja"
        },
        {
          "letter": "B",
          "text": "Tratar las lesiones, evaluar el riesgo, registrar en la ficha, realizar la denuncia y activar la red de protección"
        },
        {
          "letter": "C",
          "text": "Tratar las lesiones y dar de alta sin registrar para proteger su privacidad"
        },
        {
          "letter": "D",
          "text": "Citar a la pareja para conversar con ambos"
        },
        {
          "letter": "E",
          "text": "Derivar a psicología con hora en 3 meses"
        }
      ],
      "correct": "B",
      "explanation": "Ante violencia intrafamiliar se atiende la lesión, se evalúa el riesgo (amenaza con arma y temor por su vida son de alto riesgo), se registra en la ficha y se activa la red de protección. En un establecimiento público el médico tiene deber de denuncia de lesiones por delito. La terapia de pareja está contraindicada en violencia activa.",
      "say": {
        "stem": "Mujer con contusiones que relata que su pareja la golpea hace un año, que anoche la amenazó con un cuchillo y que teme por su vida.",
        "question": "¿Cuál es la conducta?",
        "options": "Las opciones: evaluar riesgo, tratar, registrar, denunciar y proteger; terapia de pareja; alta sin registrar; citar a la pareja; o psicología en tres meses. Piénsalo.",
        "answer": "Es la B. Es violencia de alto riesgo, así que se trata, se registra, se denuncia y se activa la protección. La terapia de pareja tienta como mediación, pero en violencia activa está contraindicada y puede aumentar el riesgo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 7.01.3.011 · Fuentes de información para el diagnóstico",
      "stem": "Un equipo de salud pública quiere conocer las principales causas de muerte de la región en los últimos 5 años para su diagnóstico de situación de salud.",
      "question": "¿Cuál es la fuente primaria de las estadísticas oficiales de mortalidad en Chile?",
      "options": [
        {
          "letter": "A",
          "text": "El certificado médico de defunción"
        },
        {
          "letter": "B",
          "text": "La Encuesta Nacional de Salud"
        },
        {
          "letter": "C",
          "text": "El Censo de población"
        },
        {
          "letter": "D",
          "text": "Las fichas clínicas hospitalarias"
        },
        {
          "letter": "E",
          "text": "La encuesta CASEN"
        }
      ],
      "correct": "A",
      "explanation": "Las estadísticas de mortalidad se construyen a partir del certificado médico de defunción, inscrito en el Registro Civil y procesado por el DEIS del Ministerio de Salud y el INE. La Encuesta Nacional de Salud entrega prevalencias de enfermedades y factores de riesgo; el Censo, datos poblacionales; y la CASEN, datos socioeconómicos.",
      "say": {
        "stem": "Un equipo quiere conocer las principales causas de muerte de su región para el diagnóstico de salud.",
        "question": "¿De dónde salen las estadísticas oficiales de mortalidad?",
        "options": "Las opciones: certificado de defunción, Encuesta Nacional de Salud, Censo, fichas clínicas o CASEN. Piénsalo.",
        "answer": "Es la A. Todas las estadísticas de mortalidad nacen del certificado médico de defunción. La Encuesta Nacional de Salud tienta, pero esa mide prevalencias y factores de riesgo en personas vivas."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 7.01.3.050 · Rol del médico en la generación y uso de la información",
      "stem": "Paciente de 74 años con diabetes mellitus tipo 2 de 20 años de evolución, que desarrolló enfermedad renal crónica terminal. Fallece por una hiperkalemia grave que le produjo un paro cardiorrespiratorio. El médico debe llenar el certificado de defunción.",
      "question": "¿Cuál debe registrarse como causa básica de muerte?",
      "options": [
        {
          "letter": "A",
          "text": "Diabetes mellitus tipo 2"
        },
        {
          "letter": "B",
          "text": "Paro cardiorrespiratorio"
        },
        {
          "letter": "C",
          "text": "Hiperkalemia"
        },
        {
          "letter": "D",
          "text": "Enfermedad renal crónica"
        },
        {
          "letter": "E",
          "text": "Vejez"
        }
      ],
      "correct": "A",
      "explanation": "La causa básica es la enfermedad que inició la cadena de acontecimientos que llevó a la muerte, y es la que se usa en las estadísticas de mortalidad. Se anota en la última línea de la parte I, con las causas intermedias y la inmediata por encima. El paro cardiorrespiratorio es un mecanismo, no una causa, y no debe registrarse.",
      "say": {
        "stem": "Paciente diabético de larga data, con enfermedad renal terminal, que fallece por una hiperkalemia que le produjo un paro cardiorrespiratorio.",
        "question": "¿Cuál es la causa básica de muerte en el certificado?",
        "options": "Las opciones: diabetes tipo dos, paro cardiorrespiratorio, hiperkalemia, enfermedad renal crónica o vejez. Piénsalo.",
        "answer": "Es la A. La causa básica es la que inició toda la cadena, aquí la diabetes. La enfermedad renal tienta, pero es una causa intermedia, consecuencia de la diabetes."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.3.010 · Prevención de maltrato y abuso infantil",
      "stem": "Una niña de 6 años es traída por su madre, quien relata que la niña le contó que un familiar le tocó los genitales. Al examen no hay lesiones físicas.",
      "question": "¿Cuál es la conducta más adecuada del médico?",
      "options": [
        {
          "letter": "A",
          "text": "Interrogar a la niña en detalle varias veces para confirmar el relato"
        },
        {
          "letter": "B",
          "text": "Descartar el abuso por la ausencia de lesiones"
        },
        {
          "letter": "C",
          "text": "Proteger a la niña, registrar el relato textual y realizar la denuncia dentro de las 24 horas"
        },
        {
          "letter": "D",
          "text": "Citar al familiar para confrontarlo"
        },
        {
          "letter": "E",
          "text": "Esperar a que la madre decida si denuncia"
        }
      ],
      "correct": "C",
      "explanation": "Ante sospecha de abuso sexual infantil, el médico debe proteger al niño, registrar textualmente lo relatado sin interrogatorios repetidos (para evitar revictimización) y denunciar: el Código Procesal Penal obliga a los profesionales de salud a hacerlo dentro de 24 horas. La ausencia de lesiones no descarta el abuso, que con frecuencia no deja hallazgos.",
      "say": {
        "stem": "Una madre cuenta que su hija de seis años le relató que un familiar le tocó los genitales; la niña no tiene lesiones.",
        "question": "¿Cuál es la conducta más adecuada del médico?",
        "options": "Las opciones: interrogar en detalle varias veces, descartar por falta de lesiones, proteger, registrar y denunciar en veinticuatro horas, confrontar al familiar o esperar la decisión materna. Piénsalo.",
        "answer": "Es la C. El médico debe proteger a la niña, registrar el relato y denunciar dentro de veinticuatro horas. Esperar la decisión de la madre tienta por respeto a la familia, pero la denuncia es una obligación legal del médico."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El certificado', tag: 'Tres causas reales', kind: 'key', items: [
          { t: 'Básica, intermedia, inmediata', d: 'Cada una, una enfermedad diagnosticable',
            say: 'Cerremos con las reglas de oro. El certificado siempre tiene tres causas encadenadas: básica, intermedia e inmediata, y cada una tiene que ser una enfermedad real, nunca un modo de morir.' },
          { t: 'Nunca paro cardiorrespiratorio', d: 'Ni falla multiorgánica, ni solas',
            say: 'Nunca se escribe paro cardiorrespiratorio ni falla multiorgánica como causa básica o única.' },
        ] },
        { title: 'Quién firma', tag: 'Origen violento manda', kind: 'alert', items: [
          { t: 'Origen violento, aunque muera después', d: 'Siempre médico-legal, nunca lo firma el clínico',
            say: 'Si el origen fue violento, la muerte es médico-legal aunque el paciente fallezca semanas después en el hospital, y el médico clínico nunca firma ese certificado, por más que la causa inmediata que vio con sus propios ojos haya sido una complicación médica.' },
          { t: 'Autopsia: consentimiento solo en la clínica', d: 'La médico-legal es obligatoria por orden judicial',
            say: 'La autopsia clínica exige el consentimiento firmado de la familia; la autopsia médico-legal no, porque la ordena un fiscal y la familia no puede oponerse.' },
          { t: 'Deber de denuncia: veinticuatro horas', d: 'Plazo fatal, a la Fiscalía o a la policía',
            say: 'Y el deber de denuncia tiene un plazo fatal de veinticuatro horas, hacia la Fiscalía o la policía, nunca solo hacia la ficha clínica. Si te llevas una sola idea de hoy: antes de firmar cualquier certificado, pregúntate cómo empezó todo, no solo cómo terminó. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Certificar una defunción: qué firmar y a quién avisar',
    root: N(
      'start', 'Un paciente fallece y hay que certificar la defunción', '¿Cómo empezó la cadena de eventos?',
      'La primera pregunta nunca es la última condición clínica: es el origen de todo.',
      ['El origen es una enfermedad médica conocida', N(
        'q', '¿Hay sospecha de violencia, tóxicos o mala praxis?', 'Revisar el contexto completo del ingreso',
        'Incluso con una causa médica final, hay que descartar un origen violento oculto, revisando cómo empezó realmente el cuadro.',
        ['No, es puramente una enfermedad natural', N(
          'ok', 'El médico tratante firma el certificado', 'Con causa básica, intermedia e inmediata reales',
          'Se arma la cadena completa con enfermedades diagnosticables reales, evitando siempre términos como paro cardiorrespiratorio o falla multiorgánica.',
        )],
        ['Sí, hay un origen violento o dudoso', N(
          'refer', 'No firmar: derivar al Servicio Médico Legal', 'Preservar el cuerpo y notificar de inmediato',
          'Es una muerte médico-legal, aunque la causa final parezca puramente médica y hayan pasado semanas desde el hecho inicial.',
        )],
      )],
      ['El paciente presenta lesiones por un posible delito', N(
        'q', '¿Cuánto tiempo hay para denunciar el hecho?', 'El plazo corre desde que se toma conocimiento',
        'El deber de denuncia es independiente de si el paciente sobrevive o fallece por esas lesiones.',
        ['Dentro de las primeras horas', N(
          'do', 'Denunciar a Fiscalía, Carabineros o la PDI', 'Plazo fatal de veinticuatro horas',
          'Omitir la denuncia dentro del plazo es en sí mismo un delito de omisión, sancionado penalmente.',
        )],
        ['Se dejó pasar el plazo', N(
          'alert', 'Igual se denuncia, sin demora adicional', 'El incumplimiento ya generó responsabilidad',
          'Pasado el plazo fatal, la denuncia tardía no borra la infracción ya cometida, pero sigue siendo obligatoria.',
        )],
      )],
    ),
  },
};
