// Clase 20.9 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Infecciones del tracto genital inferior, vulvovaginitis por Gardnerella, Candida y Trichomonas, criterios de Amsel y cervicitis por clamidia y gonococo',
      say: 'Bienvenidos a la clase sobre infecciones del tracto genital inferior, uno de los temas con mayor número de preguntas en el examen EUNACOM. En esta sesión dominaremos la diferenciación clínica y de laboratorio entre vaginosis bacteriana, candidiasis vulvovaginal y tricomoniasis, grabaremos cuándo es obligatorio tratar a la pareja sexual, y fijaremos el esquema empírico combinado de ceftriaxona y doxiciclina en cervicitis mucopurulenta. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Ecosistema vaginal',
      title: 'Fisiopatología de la Disbiosis y la Infección Cervicovaginal',
      nodes: [
        { id: 'lac', col: 0, row: 1, k: 'start', t: 'Lactobacillus acidophilus', s: 'Producción de ácido láctico y peróxido de hidrógeno; pH normal entre 3.8 y 4.5' },
        { id: 'dis', col: 1, row: 1, k: 'mech', t: 'Pérdida de acidez fisiológica', s: 'Uso de antibióticos, alcalinización por semen o sangre, duchas vaginales y coito' },
        { id: 'sob', col: 2, row: 1, k: 'effect', t: 'Sobrecrecimiento microbiano', s: 'Proliferación de anaerobios en vaginosis, levaduras en candidiasis o protozoos' },
        { id: 'sin', col: 3, row: 1, k: 'alert', t: 'Leucorrea y sintomatología', s: 'Flujo anormal, prurito, mal olor, disuria, dispareunia o friabilidad cervical' },
      ],
      edges: [
        { from: 'lac', to: 'dis', label: 'factores disruptores' },
        { from: 'dis', to: 'sob', label: 'alcalinización o disbiosis' },
        { from: 'sob', to: 'sin', label: 'infección manifiesta' },
      ],
      steps: [
        {
          show: ['lac', 'dis'],
          note: 'Mantenimiento y ruptura de la barrera ácida protectora',
          say: 'El epitelio vaginal fisiológico en edad fértil se encuentra colonizado de forma preponderante por colonias protectoras de lactobacilos acidófilos que fermentan activamente el glucógeno celular y producen ácido láctico y peróxido de hidrógeno, manteniendo un pH marcadamente ácido inferior a cuatro coma cinco. Factores disruptores como antibióticos sistémicos, el coito sin condón o las duchas vaginales barren esta flora protectora.',
        },
        {
          show: ['sob', 'sin'],
          note: 'Proliferación de patógenos y presentación clínica',
          say: 'Al caer la defensa ácida proliferan patógenos oportunistas: anaerobios en la vaginosis bacteriana, hongos del género cándida en estados de hiperglucemia o inmunosupresión, y protozoos transmitidos por contacto sexual como tricomonas, originando flujos característicos y síntomas inflamatorios.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Disbiosis anaerobia más frecuente',
      title: 'Vaginosis Bacteriana: Fisiopatología y Agentes Causales',
      cards: [
        {
          title: 'Definición de Disbiosis Polimicrobiana',
          tag: 'No es una vaginitis inflamatoria',
          kind: 'key',
          items: [
            {
              t: 'Sustitución de lactobacilos por anaerobios',
              d: 'Sobrecrecimiento masivo de Gardnerella vaginalis, Atopobium vaginae, Prevotella y Mobiluncus',
              say: 'La vaginosis bacteriana no es una infección invasora inflamatoria sino una disbiosis ecológica compleja donde los lactobacilos son sustituidos por una densa biopelícula polimicrobiana de bacterias anaerobias.',
            },
            {
              t: 'Ausencia de leucocitos y eritema',
              d: 'No produce respuesta inflamatoria celular; la mucosa vaginal suele estar pálida y sin prurito intenso',
              say: 'A diferencia de otras infecciones genitales, en la vaginosis bacteriana no se observan leucocitos abundantes en el microscopio ni se aprecia eritema vulvar importante, predominando el mal olor.',
            },
          ],
        },
        {
          title: 'Complicaciones Gineco-Obstétricas',
          tag: 'Riesgo ascendente documentado',
          kind: 'alert',
          items: [
            {
              t: 'Riesgo en mujeres gestantes',
              d: 'Asociación demostrada con rotura prematura de membranas, parto prematuro y corioamnionitis',
              say: 'En el embarazo la vaginosis bacteriana no tratada incrementa sustancialmente el peligro de aborto espontáneo del segundo trimestre, rotura de membranas pretérmino e infección intraamniótica.',
            },
            {
              t: 'Riesgo postquirúrgico y de ITS',
              d: 'Mayor riesgo de endometritis post-aborto, infección de cúpula e infección por VIH y clamidia',
              say: 'Asimismo, la pérdida de la acidez protectora facilita la colonización ascendente post-procedimientos ginecológicos y duplica el riesgo de adquirir el virus de inmunodeficiencia humana.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y terapia en vaginosis',
      title: 'Vaginosis Bacteriana: Criterios de Amsel y Esquema Terapéutico',
      cards: [
        {
          title: 'Criterios Diagnósticos de Amsel',
          tag: 'Exige al menos tres de cuatro criterios',
          kind: 'criteria',
          items: [
            {
              t: 'Flujo fino homogéneo blanco-grisáceo',
              d: 'Leucorrea fluida, no grumosa, que tapiza uniformemente las paredes vaginales',
              say: 'El primer criterio es la presencia de un flujo vaginal homogéneo, fino, blanco grisáceo, que recubre las paredes vaginales sin formar grumos adherentes.',
            },
            {
              t: 'pH vaginal mayor a 4.5',
              d: 'Alcalinización del medio vaginal por consumo de lactobacilos y producción de aminas',
              say: 'El segundo criterio es un pH vaginal elevado superior a cuatro coma cinco al contacto con papel tornasol, secundario al déficit de ácido láctico protector.',
            },
            {
              t: 'Test de aminas positivo (Whiff test)',
              d: 'Liberación de olor fétido a pescado tras agregar una gota de KOH al diez por ciento',
              say: 'El tercer criterio es la prueba de aminas positiva: al mezclar el flujo con hidróxido de potasio al diez por ciento se volatilizan putrescina y cadaverina generando un penetrante olor a pescado.',
            },
            {
              t: 'Células clave o clue cells mayor al 20 por ciento',
              d: 'Células epiteliales con bordes borrosos completamente tapizadas por cocobacilos en frotis fresco',
              say: 'El cuarto criterio es el hallazgo microscópico de células clave o clue cells en más del veinte por ciento de los campos, constituidas por células escamosas con bordes difuminados por bacterias.',
            },
          ],
        },
        {
          title: 'Tratamiento de Elección y Pareja Sexual',
          tag: 'Regla cardinal EUNACOM',
          kind: 'pharma',
          items: [
            {
              t: 'Metronidazol oral por siete días',
              d: 'Metronidazol 500 mg cada doce horas oral por 7 días o gel de metronidazol al 0.75 por ciento vaginal',
              say: 'El tratamiento de primera línea respaldado por el Ministerio de Salud es metronidazol quinientos miligramos por vía oral cada doce horas durante siete días continuos.',
            },
            {
              t: '¡NO requiere tratar a la pareja sexual masculina!',
              d: 'Ensayos clínicos demuestran que tratar a la pareja no previene recurrencias en vaginosis',
              say: 'Graben esta regla de oro: la vaginosis bacteriana no requiere tratamiento empírico de la pareja sexual masculina de rutina, a diferencia absoluta de lo que ocurre con la tricomoniasis.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Micosis oportunista',
      title: 'Candidiasis Vulvovaginal: Factores de Riesgo, Clínica y pH Ácido',
      cards: [
        {
          title: 'Factores Predisponentes y Agente',
          tag: 'Candida albicans en el noventa por ciento',
          kind: 'key',
          items: [
            {
              t: 'Gatillantes clínicos clásicos',
              d: 'Uso reciente de antibióticos de amplio espectro, diabetes descompensada, embarazo e inmunosupresión',
              say: 'La candidiasis suele desencadenarse tras el uso de antibióticos como amoxicilina que eliminan las bacterias competidoras, en estados de hiperglucemia diabética, en el embarazo o ante corticoides.',
            },
            {
              t: 'Candida albicans versus especies no albicans',
              d: 'Candida albicans responde a azoles; Candida glabrata o krusei presentan resistencia relativa',
              say: 'Candida albicans causa nueve de cada diez episodios y responde de forma excelente a azólicos comunes; las cepas no albicans causan cuadros recurrentes más rebeldes al manejo.',
            },
          ],
        },
        {
          title: 'Cuadro Clínico y Laboratorio Inconfundible',
          tag: 'Prurito intenso y leucorrea en leche cortada',
          kind: 'criteria',
          items: [
            {
              t: 'Prurito vulvar desesperante y eritema',
              d: 'Prurito severo, disuria externa, edema, excoriaciones por rascado y placas blanquecinas',
              say: 'El síntoma cardinal es un prurito vulvar desesperante acompañado de ardor miccional, disuria externa, marcado edema en labios menores y excoriaciones por rascado.',
            },
            {
              t: 'Flujo en grumos y pH normal menor a 4.5',
              d: 'Aspecto en requesón o leche cortada, adherente a mucosa, inodoro, con test de aminas negativo',
              say: 'El flujo es blanco, espeso, grumoso como leche cortada o requesón, intensamente adherido a la mucosa. Su rasgo clave de laboratorio es que mantiene un pH ácido normal menor a cuatro coma cinco.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo de candidiasis',
      title: 'Candidiasis Vulvovaginal: Esquemas Terapéuticos en No Embarazadas y Gestantes',
      cards: [
        {
          title: 'Tratamiento en Paciente No Embarazada',
          tag: 'Vía oral cómoda y rápida',
          kind: 'pharma',
          items: [
            {
              t: 'Fluconazol oral en dosis única',
              d: 'Fluconazol 150 mg vía oral en monodosis única; curación clínica superior al noventa por ciento',
              say: 'En mujeres no gestantes el tratamiento de elección por su comodidad y eficacia es el fluconazol oral en dosis única de ciento cincuenta miligramos, con resolución rápida de los síntomas.',
            },
            {
              t: 'Alternativa tópica con clotrimazol',
              d: 'Clotrimazol óvulos vaginales de 100 mg por seis noches o comprimido vaginal de 500 mg monodosis',
              say: 'Como alternativa tópica se pueden utilizar óvulos vaginales de clotrimazol de quinientos miligramos en dosis única o de cien miligramos durante seis noches consecutivas.',
            },
          ],
        },
        {
          title: 'Candidiasis en la Mujer Gestante',
          tag: '¡Fluconazol oral contraindicado!',
          kind: 'alert',
          items: [
            {
              t: 'Uso obligatorio de terapia tópica con clotrimazol',
              d: 'Clotrimazol en óvulos o crema vaginal al uno por ciento por siete noches completas',
              say: 'En la mujer embarazada está formalmente contraindicado el fluconazol oral por potencial teratogénico. El tratamiento mandatorio es exclusivamente tópico con clotrimazol vaginal durante siete noches.',
            },
            {
              t: 'Manejo de la pareja sexual',
              d: 'No requiere tratar a la pareja si es asintomático; tratar con clotrimazol tópico si hay balanitis',
              say: 'La pareja sexual masculina asintomática no requiere tratamiento. Solo se prescribe crema tópica de clotrimazol en el varón si presenta signos inflamatorios evidentes de balanitis candidiásica.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Infección de transmisión sexual por protozoo',
      title: 'Tricomoniasis Vaginal: Protozoo Móvil y Colpitis en Fresa',
      cards: [
        {
          title: 'Trichomonas vaginalis: Protozoo Patógeno',
          tag: 'Infección de transmisión sexual obligada',
          kind: 'key',
          items: [
            {
              t: 'Protozoo flagelado móvil anaerobio facultativo',
              d: 'Afecta la vagina, uretra y glándulas parauretrales; se transmite exclusivamente por vía sexual',
              say: 'Trichomonas vaginalis es un protozoo flagelado móvil que coloniza el epitelio escamoso del tracto genital y se transmite de forma prácticamente exclusiva por contacto sexual coital.',
            },
            {
              t: 'Varón como reservorio asintomático',
              d: 'El hombre alberga el parásito en uretra y próstata sin síntomas en más del setenta por ciento',
              say: 'En el varón la infección suele cursar de manera asintomática o como una uretritis subclínica leve, actuando como un reservorio silencioso que reinfecta continuamente a su pareja.',
            },
          ],
        },
        {
          title: 'Manifestaciones Clínicas y Examen Físico',
          tag: 'Leucorrea espumosa y cuello en fresa',
          kind: 'alert',
          items: [
            {
              t: 'Flujo abundante amarillo-verdoso espumoso',
              d: 'Leucorrea fluida, aireada con burbujas de gas, fétida y acompañada de prurito y disuria',
              say: 'La paciente consulta por un flujo genital profuso, amarillo verdoso, de consistencia espumosa con burbujas de gas y muy maloliente, asociado a prurito vulvar y sensación de quemazón.',
            },
            {
              t: 'Colpitis en fresa (Strawberry cervix)',
              d: 'Punteado petequial hemorrágico eritematoso característico en el ectocérvix y fondo vaginal',
              say: 'A la especuloscopía destaca la colpitis macular o cuello en fresa, constituido por múltiples petequias eritematosas punctiformes sobre la superficie del cuello uterino y cúpula vaginal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tricomoniasis y corte de transmisión',
      title: 'Tricomoniasis: Diagnóstico en Fresco y Manejo de la Pareja Sexual',
      cards: [
        {
          title: 'Laboratorio y Frotis en Fresco',
          tag: 'pH marcadamente alcalino mayor a 5.0',
          kind: 'criteria',
          items: [
            {
              t: 'Visualización de trofozoítos móviles',
              d: 'Examen microscópico directo en fresco revela parásitos flagelados ovoides con motilidad rápida',
              say: 'En el examen directo en fresco con suero fisiológico se aprecian trofozoítos flagelados ovoides que se mueven activamente entre numerosos leucocitos polimorfonucleares.',
            },
            {
              t: 'pH elevado y test de aminas positivo',
              d: 'El pH vaginal suele ser superior a cinco coma cinco o seis coma cero; aminas frecuentemente positivas',
              say: 'El pH vaginal es marcadamente alcalino, casi siempre superior a cinco coma cinco, y la prueba de aminas con hidróxido de potasio suele resultar positiva por descomposición de proteínas.',
            },
          ],
        },
        {
          title: 'Tratamiento Obligatorio y Simultáneo de Pareja',
          tag: 'Pregunta cardinal del EUNACOM',
          kind: 'pharma',
          items: [
            {
              t: 'Metronidazol oral a dosis completa',
              d: 'Metronidazol 2 gramos oral en dosis única o 500 mg cada 12 horas por siete días',
              say: 'El tratamiento de elección consiste en metronidazol por vía oral, ya sea en monodosis de dos gramos o en pauta fraccionada de quinientos miligramos cada doce horas durante siete días.',
            },
            {
              t: '¡Tratamiento estricto a todas las parejas!',
              d: 'Prescribir el mismo esquema a la pareja sexual y mantener abstinencia hasta finalizar',
              say: 'Es terminantemente obligatorio tratar a todas las parejas sexuales recientes simultáneamente e indicar abstinencia sexual hasta completar la terapia para erradicar el reservorio y evitar reinfecciones.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Infección endocervical alta',
      title: 'Cervicitis Mucopurulenta: Chlamydia trachomatis y Gonorrea',
      cards: [
        {
          title: 'Microbiología y Cuadro Clínico',
          tag: 'Afectación del epitelio columnar endocervical',
          kind: 'key',
          items: [
            {
              t: 'Etiología: Chlamydia y Neisseria gonorrhoeae',
              d: 'Chlamydia trachomatis serovares D a K y diplococo intracelular Neisseria gonorrhoeae',
              say: 'La cervicitis aguda es una infección del epitelio cilíndrico del canal endocervical producida predominantemente por Chlamydia trachomatis y Neisseria gonorrhoeae, con frecuente coinfección.',
            },
            {
              t: 'Secreción purulenta y friabilidad cervical',
              d: 'Salida de pus espeso por el orificio cervical externo y sangrado fácil al roce de la tórula',
              say: 'A la especuloscopía se aprecia exudado mucopurulento amarillento espeso fluyendo desde el orificio cervical externo y una marcada friabilidad del cuello que sangra al mínimo contacto de la tórula.',
            },
          ],
        },
        {
          title: 'Diferenciación con Enfermedad Pélvica Inflamatoria',
          tag: 'Ausencia de dolor pelviano a la palpación',
          kind: 'criteria',
          items: [
            {
              t: 'Ausencia de dolor a la movilización cervical',
              d: 'En la cervicitis pura no existe dolor a la palpación de anexos ni a la lateralización del cuello',
              say: 'La clave clínica para distinguir la cervicitis de una enfermedad pélvica inflamatoria es que la paciente no presenta dolor a la movilización cervical ni sensibilidad en los fondos de saco anexiales.',
            },
            {
              t: 'Paciente afebril y sin compromiso sistémico',
              d: 'El cuadro se restringe al cuello uterino sin ascender aún al endometrio ni a las trompas de Falopio',
              say: 'La mujer con cervicitis pura se encuentra afebril y en buenas condiciones generales, requiriendo tratamiento inmediato para impedir la progresión bacteriana ascendente hacia el endometrio y trompas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapia empírica MINSAL',
      title: 'Cervicitis Mucopurulenta: Esquema Empírico Combinado Obligatorio',
      cards: [
        {
          title: 'Esquema de Amplio Espectro Inmediato',
          tag: 'Cobertura simultánea para gonococo y clamidia',
          kind: 'pharma',
          items: [
            {
              t: 'Ceftriaxona intramuscular para gonococo',
              d: 'Ceftriaxona 500 mg intramuscular en dosis única para erradicar cepas resistentes de gonococo',
              say: 'Para erradicar Neisseria gonorrhoeae la pauta actual del Ministerio de Salud indica ceftriaxona quinientos miligramos por vía intramuscular profunda en dosis única.',
            },
            {
              t: 'Doxiciclina oral para Chlamydia trachomatis',
              d: 'Doxiciclina 100 mg cada doce horas vía oral durante siete días continuos',
              say: 'Para cubrir Chlamydia trachomatis se asocia de forma estricta doxiciclina cien miligramos cada doce horas por vía oral durante siete días completos.',
            },
          ],
        },
        {
          title: 'Alternativa en Gestantes y Manejo Epidemiológico',
          tag: 'Seguridad fetal y notificación',
          kind: 'alert',
          items: [
            {
              t: 'Gestantes: Reemplazar doxiciclina por azitromicina',
              d: 'La doxiciclina mancha los dientes fetales; en embarazo indicar Azitromicina 1 gramo oral monodosis',
              say: 'En pacientes embarazadas las tetraciclinas están prohibidas por toxicidad ósea y dental fetal; en este grupo reemplazamos la doxiciclina por azitromicina un gramo oral en dosis única.',
            },
            {
              t: 'Tratamiento de contactos sexuales y pesquisa de ITS',
              d: 'Estudiar y tratar a la pareja sexual simultáneamente; solicitar serología de VIH, sífilis y VHB',
              say: 'Toda cervicitis obliga a convocar y tratar a la pareja sexual para cortar la cadena de transmisión y exige solicitar serología de tamizaje para sífilis, virus de hepatitis B y virus de inmunodeficiencia.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Matriz comparativa diferencial',
      title: 'Tabla Diagnóstica Comparativa de Infecciones del Tracto Genital Inferior',
      head: ['Patología', 'Características del Flujo', 'pH y Microscopía', 'Tratamiento de Elección'],
      rows: [
        {
          cells: ['Vaginosis Bacteriana', 'Blanco-grisáceo, fino, olor a pescado', 'pH > 4.5, células clave > 20%, sin leucocitos', 'Metronidazol 500 mg c/12h por 7 días (no tratar pareja)'],
          say: 'La vaginosis tiene flujo fino grisáceo, olor a pescado, células clave, pH elevado y se trata con metronidazol sin necesidad de medicar al cónyuge.',
        },
        {
          cells: ['Candidiasis Vulvovaginal', 'Blanco grumoso en leche cortada, prurito severo', 'pH < 4.5 normal, hifas y esporas en fresco', 'Fluconazol 150 mg oral (Clotrimazol óvulos en embarazo)'],
          say: 'La candidiasis se distingue por prurito desesperante, flujo en requesón, pH ácido normal y se trata con fluconazol oral o clotrimazol tópico.',
        },
        {
          cells: ['Tricomoniasis Vaginal', 'Amarillo-verdoso, espumoso, cuello en fresa', 'pH > 5.5, parásitos flagelados móviles en fresco', 'Metronidazol 2 g oral (¡TRATAR A LA PAREJA OBLIGATORIO!)'],
          say: 'La tricomoniasis cursa con flujo espumoso verdoso, colpitis petequial y exige tratar al protozoo flagelado y medicar obligatoriamente a la pareja.',
        },
        {
          cells: ['Cervicitis Mucopurulenta', 'Secreción endocervical purulenta, cuello friable', 'Diplococos gram negativos o bacterias intracelulares', 'Ceftriaxona 500 mg IM + Doxiciclina 100 mg c/12h por 7 días'],
          say: 'La cervicitis purulenta sangra al roce y requiere la combinación de ceftriaxona intramuscular para gonococo y doxiciclina oral para clamidia.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo Diagnóstico y Terapéutico de Leucorrea y Cervicitis',
      say: 'Revisemos el algoritmo estructurado para clasificar y tratar adecuadamente la leucorrea patológica y la cervicitis en la consulta ginecológica.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Vaginosis Bacteriana · Criterios de Amsel y Terapia',
      stem: 'Una mujer de 26 años consulta por secreción vaginal abundante y mal olor que empeora notablemente después de las relaciones sexuales y tras la menstruación. Al examen físico no presenta eritema vulvar ni prurito. A la especuloscopía se observa una leucorrea fina, homogénea, de color blanco-grisáceo adherida a las paredes vaginales. El pH vaginal es de 5.2. Al agregar una gota de KOH al 10% se percibe un fuerte olor a pescado en descomposición (test de aminas positivo). En el frotis en fresco se aprecian abundantes células epiteliales con bordes borrosos tapizadas por cocobacilos (células clave en más del 30%), con muy escasos leucocitos.',
      question: '¿Cuál es el tratamiento de elección indicado por las guías clínicas para resolver este cuadro?',
      options: [
        { letter: 'A', text: 'Fluconazol 150 mg oral en dosis única a la paciente y a su pareja' },
        { letter: 'B', text: 'Metronidazol 500 mg cada 12 horas por vía oral durante 7 días a la paciente' },
        { letter: 'C', text: 'Ceftriaxona 500 mg intramuscular en dosis única' },
        { letter: 'D', text: 'Nistatina en crema tópica vulvar por 14 días' },
        { letter: 'E', text: 'Doxiciclina 100 mg cada 12 horas por 14 días a ambos cónyuges' },
      ],
      correct: 'B',
      explanation: 'La paciente cumple con los 4 Criterios de Amsel para Vaginosis Bacteriana (flujo fino homogéneo blanco-grisáceo, pH > 4.5, test de aminas positivo con KOH y presencia de más de un 20% de células clave o clue cells en el frotis). El tratamiento de primera línea respaldado por el MINSAL y la OMS es el Metronidazol oral a dosis de 500 mg cada 12 horas durante 7 días (o gel de metronidazol tópico). Es un hecho clínico comprobado que la vaginosis bacteriana NO requiere tratamiento de la pareja sexual masculina de rutina, a diferencia de la tricomoniasis.',
      say: {
        stem: 'Mujer de veintiséis años con leucorrea blanco grisácea fina con mal olor postcoital, pH de cinco coma dos, aminas positivas y más de treinta por ciento de células clave en frotis.',
        question: '¿Cuál es el tratamiento de elección indicado por las guías clínicas para resolver este cuadro?',
        options: 'La opción A propone fluconazol a la pareja. La B metronidazol quinientos miligramos cada doce horas oral por siete días a la paciente. La C ceftriaxona intramuscular. La D nistatina tópica. La E doxiciclina. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. La paciente cumple los criterios de Amsel para vaginosis bacteriana y se trata con metronidazol oral por siete días sin requerir tratar a la pareja.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Candidiasis Vulvovaginal · pH Ácido y Clínica',
      stem: 'Una mujer de 29 años en tratamiento con amoxicilina por una sinusitis acude a consulta por prurito vulvar desesperante y sensación de ardor al orinar de 3 días de evolución. Al examen físico se evidencia marcado eritema y edema vulvar con fisuras por rascado, y al colocar el espéculo se aprecia una leucorrea blanca espesa en grumos, similar a leche cortada, intensamente adherida a las paredes vaginales. El pH vaginal es de 4.0 y el test de aminas con KOH al 10% resulta negativo.',
      question: '¿Cuál es el diagnóstico clínico más probable frente a estos hallazgos?',
      options: [
        { letter: 'A', text: 'Vaginosis bacteriana por Gardnerella vaginalis' },
        { letter: 'B', text: 'Candidiasis vulvovaginal' },
        { letter: 'C', text: 'Tricomoniasis vaginal sintomática' },
        { letter: 'D', text: 'Cervicitis mucopurulenta por Chlamydia trachomatis' },
        { letter: 'E', text: 'Vaginitis atrófica senil' },
      ],
      correct: 'B',
      explanation: 'La combinación de prurito vulvar severo, antecedente reciente de tratamiento antibiótico, leucorrea espesa grumosa en leche cortada con placas adherentes a una mucosa intensamente eritematosa, asociado a un pH vaginal NORMAL ÁCIDO (< 4.5) y test de aminas negativo es la manifestación clásica e inequívoca de una Candidiasis Vulvovaginal. Se trata con Fluconazol 150 mg oral dosis única o Clotrimazol vaginal.',
      say: {
        stem: 'Mujer de veintinueve años que tras tomar amoxicilina presenta prurito vulvar severo, eritema con excoriaciones, flujo grumoso en leche cortada y pH ácido normal de cuatro coma cero.',
        question: '¿Cuál es el diagnóstico clínico más probable frente a estos hallazgos?',
        options: 'La opción A propone vaginosis bacteriana. La B candidiasis vulvovaginal. La C tricomoniasis sintomática. La D cervicitis mucopurulenta. La E vaginitis atrófica senil. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. El prurito desesperante tras antibióticos con flujo grumoso y pH ácido fisiológico menor a cuatro coma cinco es patognomónico de candidiasis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Tricomoniasis · Indicación Estricta de Pareja',
      stem: '¿En cuál de las siguientes infecciones ginecológicas del tracto genital inferior es ESTRICTAMENTE OBLIGATORIO prescribir tratamiento farmacológico simultáneo a todas las parejas sexuales de la paciente para evitar la reinfección y cortar la cadena de transmisión epidemiológica?',
      question: '¿En cuál de las siguientes infecciones ginecológicas es obligatorio prescribir tratamiento farmacológico simultáneo a la pareja sexual?',
      options: [
        { letter: 'A', text: 'Vaginosis bacteriana recurrente' },
        { letter: 'B', text: 'Candidiasis vulvovaginal esporádica' },
        { letter: 'C', text: 'Tricomoniasis vaginal' },
        { letter: 'D', text: 'Vaginitis inflamatoria descamativa' },
        { letter: 'E', text: 'Infección urinaria baja por Escherichia coli' },
      ],
      correct: 'C',
      explanation: 'La Tricomoniasis es una Infección de Transmisión Sexual (ITS) clásica en la que el varón suele actuar como portador asintomático del protozoo en la uretra y próstata. Por esta razón, el tratamiento simultáneo de la pareja sexual (con Metronidazol 2g oral en dosis única o 500 mg cada 12 horas por 7 días) junto con la indicación de abstinencia coital es ESTRICTAMENTE OBLIGATORIO en todos los casos para prevenir la reinfección inmediata de la mujer y detener la transmisión comunitaria.',
      say: {
        stem: 'Pregunta conceptual sobre infecciones ginecológicas bajas y necesidad de cortar la cadena de transmisión epidemiológica.',
        question: '¿En cuál de las siguientes infecciones ginecológicas es obligatorio prescribir tratamiento farmacológico simultáneo a la pareja sexual?',
        options: 'La opción A propone vaginosis bacteriana recurrente. La B candidiasis esporádica. La C tricomoniasis vaginal. La D vaginitis descamativa. La E infección urinaria baja. Piénsalo bien.',
        answer: 'La respuesta correcta es la C. La tricomoniasis es una infección de transmisión sexual donde el varón suele ser portador asintomático, siendo mandatorio medicar a la pareja.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Cervicitis Mucopurulenta · Tratamiento Empírico MINSAL',
      stem: 'Una paciente de 21 años consulta por leucorrea purulenta y sangrado postcoital ocasional. A la especuloscopía se observa salida de secreción mucopurulenta espesa por el orificio cervical externo y cuello uterino marcadamente friable que sangra con facilidad al pasar la tórula. La paciente se encuentra afebril y sin dolor a la palpación uterina ni anexial.',
      question: '¿Cuál es el tratamiento antimicrobiano empírico recomendado por las guías del MINSAL mientras se esperan los resultados?',
      options: [
        { letter: 'A', text: 'Metronidazol 500 mg cada 12 horas por 7 días oral exclusivamente' },
        { letter: 'B', text: 'Ceftriaxona 500 mg intramuscular en dosis única MÁS Doxiciclina 100 mg cada 12 horas por vía oral durante 7 días' },
        { letter: 'C', text: 'Amoxicilina 500 mg cada 8 horas oral por 10 días' },
        { letter: 'D', text: 'Fluconazol 150 mg oral en dosis única' },
        { letter: 'E', text: 'Clotrimazol en crema vaginal por 3 noches' },
      ],
      correct: 'B',
      explanation: 'El cuadro de secreción purulenta endocervical con cuello friable corresponde a una Cervicitis Mucopurulenta aguda. Dado que los dos agentes causales más frecuentes y graves son Neisseria gonorrhoeae y Chlamydia trachomatis y que la coinfección es muy habitual, la norma ministerial y los CDC recomiendan el tratamiento empírico inmediato combinado de amplio espectro: Ceftriaxona 500 mg intramuscular dosis única (para gonococo) MÁS Doxiciclina 100 mg cada 12 horas vía oral por 7 días (para Chlamydia). Se debe citar a la pareja para tratamiento simultáneo.',
      say: {
        stem: 'Joven de veintiún años con secreción mucopurulenta por el orificio cervical externo y cuello friable que sangra a la tórula, afebril y sin dolor anexial.',
        question: '¿Cuál es el tratamiento antimicrobiano empírico recomendado por las guías del MINSAL mientras se esperan los resultados microbiológicos?',
        options: 'La opción A propone metronidazol oral exclusivo. La B ceftriaxona quinientos miligramos intramuscular más doxiciclina cien miligramos cada doce horas por siete días. La C amoxicilina. La D fluconazol. La E clotrimazol. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. La cervicitis mucopurulenta aguda exige cobertura empírica dual con ceftriaxona intramuscular para gonococo más doxiciclina oral para clamidia.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Infecciones del Tracto Genital Inferior',
      cards: [
        {
          title: 'Vaginosis y Candidiasis',
          tag: 'pH y necesidad de tratar pareja',
          kind: 'key',
          items: [
            {
              t: 'Vaginosis bacteriana: Células clave y pH alcalino',
              d: 'Amsel positivo, metronidazol por siete días y NO tratar a la pareja masculina de rutina',
              say: 'La vaginosis bacteriana se caracteriza por células clave, aminas positivas y pH mayor a cuatro coma cinco; se trata con metronidazol oral y no requiere medicar al varón.',
            },
            {
              t: 'Candidiasis: Prurito desesperante y pH ácido normal',
              d: 'Flujo en requesón, pH menor a 4.5, fluconazol oral en no gestantes y clotrimazol tópico en embarazo',
              say: 'La candidiasis cursa con intenso prurito y flujo en requesón conservando un pH ácido fisiológico menor a cuatro coma cinco; usamos fluconazol oral o clotrimazol en gestantes.',
            },
          ],
        },
        {
          title: 'Tricomoniasis como ITS Mayor',
          tag: '¡Pareja obligatoria y cuello en fresa!',
          kind: 'alert',
          items: [
            {
              t: 'Flujo espumoso verdoso y protozoo flagelado',
              d: 'Colpitis macular en fresa, pH muy alcalino y visualización directa de parásitos móviles',
              say: 'La tricomoniasis presenta flujo espumoso amarillo verdoso, colpitis petequial en fresa y protozoos flagelados que se mueven activamente en el frotis en fresco.',
            },
            {
              t: 'Tratamiento simultáneo inexcusable a la pareja',
              d: 'Metronidazol oral a dosis completa a ambos miembros y abstinencia hasta finalizar',
              say: 'En la tricomoniasis es terminantemente obligatorio tratar a la pareja sexual con metronidazol para evitar que el varón actúe como reservorio asintomático.',
            },
          ],
        },
        {
          title: 'Cervicitis Aguda Mucopurulenta',
          tag: 'Cobertura empírica combinada',
          kind: 'pharma',
          items: [
            {
              t: 'Cuello friable con secreción purulenta',
              d: 'Infección endocervical por Chlamydia trachomatis y Neisseria gonorrhoeae sin dolor anexial',
              say: 'La cervicitis purulenta produce exudado cervical espeso y sangrado fácil al contacto de la tórula sin dolor a la movilización pélvica.',
            },
            {
              t: 'Esquema dual mandatorio MINSAL',
              d: 'Ceftriaxona 500 mg intramuscular más Doxiciclina 100 mg cada 12 horas por siete días',
              say: 'El esquema empírico dual e indiscutible combina ceftriaxona intramuscular para gonococo y doxiciclina oral por siete días para clamidia. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Diagnóstico y Terapéutico de Leucorrea y Cervicitis',
    root: N(
      'start',
      'Paciente Femenina con Leucorrea o Síntomas Vulvovaginales',
      'Especuloscopía · medición de pH vaginal · prueba de aminas con KOH · frotis en fresco',
      'Iniciamos la evaluación mediante especuloscopía directa, medición de pH y prueba de aminas.',
      [
        'Presencia de exudado mucopurulento por orificio cervical y cuello friable que sangra a la tórula',
        N(
          'alert',
          'Cervicitis Mucopurulenta Aguda (Gonococo / Clamidia)',
          'Descartar dolor anexial para diferenciar de EIP · solicitar PCR para ITS',
          'Si observamos secreción purulenta endocervical y cuello friable diagnosticamos cervicitis aguda.',
          [
            'Paciente no embarazada',
            N(
              'do',
              'Terapia Empírica Combinada: Ceftriaxona IM + Doxiciclina Oral',
              'Ceftriaxona 500 mg IM dosis única más Doxiciclina 100 mg cada 12 horas por siete días',
              'Indicamos ceftriaxona intramuscular para gonococo más doxiciclina oral por siete días para clamidia.',
            ),
          ],
          [
            'Paciente cursando embarazo',
            N(
              'do',
              'Ceftriaxona 500 mg IM + Azitromicina 1 g Oral Dosis Única',
              'Reemplazo seguro de tetraciclinas para prevenir toxicidad dental y ósea en el feto',
              'En embarazadas sustituimos la doxiciclina por azitromicina oral en dosis única.',
            ),
          ],
        ),
      ],
      [
        'Infección restringida a la mucosa vaginal y vulvar (Vulvovaginitis)',
        N(
          'q',
          '¿Cuál es el pH vaginal y el aspecto de la secreción?',
          'Tornasol vaginal · frotis directo en fresco con solución salina y KOH',
          'Evaluamos el pH vaginal para orientar la etiología infecciosa o disbiosis.',
          [
            'pH menor a 4.5 ácido con flujo grumoso en leche cortada y prurito intenso',
            N(
              'ok',
              'Candidiasis Vulvovaginal: Fluconazol 150 mg Oral',
              'Monodosis oral en no gestantes o Clotrimazol óvulos vaginales por siete días en embarazo',
              'Ante prurito intenso con pH ácido menor a cuatro coma cinco diagnosticamos candidiasis y damos fluconazol.',
            ),
          ],
          [
            'pH mayor a 4.5 con flujo fino grisáceo, olor a pescado y células clave',
            N(
              'ok',
              'Vaginosis Bacteriana: Metronidazol 500 mg c/12h Oral por 7 Días',
              'Criterios de Amsel positivos · NO tratar a la pareja sexual masculina',
              'Si el pH está elevado con células clave indicamos metronidazol oral por siete días sin tratar a la pareja.',
            ),
          ],
          [
            'pH mayor a 5.5 con flujo amarillo-verdoso espumoso y cuello en fresa',
            N(
              'refer',
              'Tricomoniasis Vaginal: Metronidazol Oral + ¡TRATAR PAREJA OBLIGATORIO!',
              'Protozoo flagelado móvil en fresco · abstinencia sexual hasta completar terapia',
              'Con flujo espumoso verdoso y protozoos móviles tratamos con metronidazol y medicamos obligatoriamente a la pareja.',
            ),
          ],
        ),
      ],
    ),
  },
};
