// Clase 18.04 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Lactancia materna exclusiva, suplementación profiláctica universal con vitamina D y hierro, alimentación complementaria escalonada y alimentos estrictamente prohibidos',
      say: 'Bienvenidos a la clase sobre lactancia materna, alimentación complementaria y suplementación profiláctica en pediatría, un tema clásico y de altísimo rendimiento en el examen EUNACOM. En esta sesión revisaremos las contraindicaciones reales de la lactancia, fijaremos las pautas exactas del Ministerio de Salud para suplementar vitamina D y hierro según la edad gestacional, y dominaremos el cronograma de alimentación complementaria con sus alimentos estrictamente prohibidos. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cronología nutricional',
      title: 'Transición Nutricional y Suplementación en el Primer Año de Vida',
      nodes: [
        { id: 'lme', col: 0, row: 1, k: 'start', t: 'Lactancia materna exclusiva', s: 'A libre demanda los primeros seis meses; aporte óptimo de inmunoglobulinas y nutrientes' },
        { id: 'vit', col: 1, row: 1, k: 'mech', t: 'Vitamina D al primer mes', s: 'Cuatrocientas unidades al día desde los treinta días para prevenir raquitismo carencial' },
        { id: 'hie', col: 2, row: 1, k: 'effect', t: 'Hierro profiláctico', s: 'A los cuatro meses en niños de término y a los dos meses en prematuros o bajo peso' },
        { id: 'sol', col: 3, row: 1, k: 'good', t: 'Alimentación complementaria', s: 'Primera papilla a los seis meses, cena a los ocho meses e integración a la mesa familiar' },
      ],
      edges: [
        { from: 'lme', to: 'vit', label: 'treinta días' },
        { from: 'vit', to: 'hie', label: 'dos o cuatro meses' },
        { from: 'hie', to: 'sol', label: 'seis meses' },
      ],
      steps: [
        {
          show: ['lme', 'vit'],
          note: 'Nutrición líquida exclusiva y profilaxis de raquitismo',
          say: 'Durante los primeros seis meses de vida, la leche materna exclusiva satisface todos los requerimientos biológicos del lactante, requiriendo únicamente el inicio precoz de vitamina D a los treinta días de vida para asegurar una adecuada mineralización ósea y prevenir el raquitismo carencial.',
        },
        {
          show: ['hie', 'sol'],
          note: 'Protección de depósitos de hierro y maduración oromotriz',
          say: 'Antes de que se agoten las reservas hepáticas de hierro se inicia la profilaxis con sulfato ferroso a los dos o cuatro meses, dando paso a los seis meses a la alimentación complementaria semisólida con la primera comida del almuerzo.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Leche humana y seguridad',
      title: 'Lactancia Materna: Beneficios y Contraindicaciones Absolutas',
      cards: [
        {
          title: 'Propiedades Inmunológicas de la Leche Materna',
          tag: 'Inmunoglobulina A secretora y prebióticos',
          kind: 'key',
          items: [
            {
              t: 'Inmunoglobulina A secretora y lactoferrina',
              d: 'Barrera mucosa contra enteropatógenos y quelación de hierro libre que frena la proliferación bacteriana',
              say: 'La leche materna humana es un tejido biológico vivo que aporta inmunoglobulina A secretora, lactoferrina y oligosacáridos prebióticos que recubren la mucosa digestiva, reduciendo drásticamente la incidencia de gastroenteritis, sepsis, otitis media y neumonías.',
            },
            {
              t: 'Técnica de amamantamiento y libre demanda',
              d: 'Acople profundo boca-areola; amamantar a libre demanda sin horarios fijos ni restricción de tiempo',
              say: 'El amamantamiento debe ofrecerse a libre demanda sin restricciones horarias rígidas, verificando un acople bucal profundo que abarque gran parte de la areola inferior para prevenir grietas del pezón y asegurar el vaciamiento glandular.',
            },
          ],
        },
        {
          title: 'Contraindicaciones Absolutas Reales',
          tag: 'Maternas y neonatales',
          kind: 'alert',
          items: [
            {
              t: 'Infección materna por VIH y HTLV uno o dos',
              d: 'En Chile con acceso universal a fórmula, el VIH y el retrovirus HTLV contraindican de forma absoluta el pecho',
              say: 'En nuestro país la infección materna por virus de inmunodeficiencia humana y por retrovirus HTLV uno y dos son contraindicaciones absolutas para la lactancia por riesgo de transmisión vertical, sustituyéndose con fórmula de inicio.',
            },
            {
              t: 'Galactosemia clásica como contraindicación neonatal',
              d: 'Déficit enzimático congénito que impide metabolizar galactosa; exige fórmula sin lactosa basada en soya',
              say: 'En el recién nacido la única contraindicación metabólica congénita absoluta es la galactosemia clásica, patología que exige suspender de inmediato el pecho materno e indicar fórmula libre de lactosa formulada a base de proteína de soya.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Profilaxis universal MINSAL',
      title: 'Suplementación Universal de Vitamina D y Hierro Elemental',
      cards: [
        {
          title: 'Vitamina D Oral Universal',
          tag: 'Cuatrocientas unidades al día',
          kind: 'key',
          items: [
            {
              t: 'Dosis y momento de inicio estandarizado',
              d: '400 UI al día vía oral desde los 30 días de vida (primer mes) en todo lactante con lactancia materna',
              say: 'La normativa técnica del Ministerio de Salud exige suplementar a todo recién nacido alimentado con pecho materno con cuatrocientas unidades internacionales al día de vitamina D oral desde el mes de vida cumplido.',
            },
            {
              t: 'Duración ininterrumpida hasta el año',
              d: 'Mantener suplementación diaria hasta los 12 meses cumplidos para evitar raquitismo subclínico',
              say: 'La administración de vitamina D debe mantenerse sin interrupciones diarias hasta que el lactante cumpla los doce meses de edad, garantizando concentraciones plasmáticas óptimas de veinticinco hidroxivitamina D en sangre.',
            },
          ],
        },
        {
          title: 'Suplementación Profiláctica con Hierro Oral',
          tag: 'Recién nacido de término versus prematuro',
          kind: 'alert',
          items: [
            {
              t: 'Recién nacido de término con peso adecuado',
              d: 'Iniciar a los 4 meses de vida a dosis de 1 mg/kg/día de hierro elemental si recibe > 50% de lactancia',
              say: 'En el recién nacido de término con peso adecuado para la edad gestacional, el hierro elemental se inicia a los cuatro meses de vida a dosis de un miligramo por kilo al día, previniendo la anemia ferropénica del lactante.',
            },
            {
              t: 'Prematuro o bajo peso menor a dos mil quinientos gramos',
              d: 'Iniciar precozmente a los 2 meses a dosis de 2 a 3 mg/kg/día de hierro elemental por menor depósito fetal',
              say: 'En niños prematuros menores a treinta y siete semanas o recién nacidos con peso inferior a dos mil quinientos gramos, el hierro se inicia precozmente a los dos meses a dosis de dos a tres miligramos por kilo al día.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Introducción de sólidos',
      title: 'Cronograma de Alimentación Complementaria y Aceite Crudo',
      cards: [
        {
          title: 'Hito de los Seis Meses: La Primera Comida',
          tag: 'Almuerzo con carne y aceite vegetal crudo',
          kind: 'criteria',
          items: [
            {
              t: 'Composición de la primera papilla',
              d: 'Puré suave de verduras variadas con 20 a 30 gramos de vacuno, pollo o pavo desgrasado, más fruta cruda molida',
              say: 'A los seis meses cumplidos se introduce la primera comida correspondiente al almuerzo, compuesta por una papilla suave de verduras variadas cocidas con veinte a treinta gramos de carne magra de vacuno o ave, acompañada de fruta fresca.',
            },
            {
              t: 'Adición obligatoria de cinco mililitros de aceite vegetal crudo',
              d: 'Una cucharadita de postre (5 mL) de aceite crudo de canola, soya u oliva añadida directamente al servir',
              say: 'Es una recomendación ministerial estricta agregar una cucharadita de postre, equivalente a cinco mililitros de aceite vegetal crudo de canola, soya u oliva directamente al plato caliente para aportar ácidos grasos esenciales omega tres y seis.',
            },
          ],
        },
        {
          title: 'Evolución Hacia los Ocho y Doce Meses',
          tag: 'Cena e integración a la mesa familiar',
          kind: 'key',
          items: [
            {
              t: 'Segunda comida (cena) entre los ocho y nueve meses',
              d: 'Se incorpora la cena con idéntica estructura nutricional y textura progresivamente más espesa',
              say: 'Entre los ocho y nueve meses se introduce la segunda comida del día, la cena, manteniendo la misma estructura calórico proteica y aumentando paulatinamente la consistencia hacia texturas machacadas.',
            },
            {
              t: 'Legumbres, huevo, pescado y mesa familiar al año',
              d: 'Legumbres tamizadas, huevo entero cocido y pescado se introducen gradualmente; mesa familiar a los 12 meses',
              say: 'Las legumbres tamizadas, el huevo entero bien cocido y los pescados se incorporan progresivamente en el segundo semestre, logrando la plena incorporación a la mesa familiar al cumplir los doce meses.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad alimentaria estricta',
      title: 'Alimentos Estrictamente Prohibidos en Menores de un Año',
      cards: [
        {
          title: 'Miel de Abeja y Botulismo del Lactante',
          tag: 'Prohibición absoluta bajo los doce meses',
          kind: 'alert',
          items: [
            {
              t: 'Riesgo letal de esporas de Clostridium botulinum',
              d: 'Las esporas de la miel germinan en el colon del lactante liberando neurotoxina botulínica paralisante',
              say: 'La miel de abeja está terminantemente prohibida en menores de un año de vida por el riesgo gravísimo de botulismo del lactante, ocasionado por la ingestión de esporas bacterianas que germinan en el colon liberando neurotoxinas paralisantes.',
            },
            {
              t: 'Esporas termorresistentes que no se inactivan al hervir',
              d: 'Prohibida en infusiones, postres o para endulzar chupetes; resistencia térmica absoluta',
              say: 'Las esporas de botulino son extremadamente termorresistentes y no se destruyen al hervir la leche ni en infusiones; jamás debe usarse miel para endulzar papillas o chupetes en el lactante.',
            },
          ],
        },
        {
          title: 'Sal Añadida, Azúcares y Leche de Vaca Entera',
          tag: 'Sobrecarga renal y microhemorragias digestivas',
          kind: 'alert',
          items: [
            {
              t: 'Cero sal añadida y cero azúcares simples',
              d: 'Inmadurez de filtración renal para manejar sobrecarga de sodio y programación de preferencia por lo dulce',
              say: 'Está estrictamente prohibido añadir sal a las papillas infantiles por la inmadurez renal para concentrar solutos, así como azúcares simples o edulcorantes que condicionan preferencias dietéticas nocivas.',
            },
            {
              t: 'Prohibición de leche de vaca fluida no modificada',
              d: 'Provoca microhemorragias intestinales ocultas, sobrecarga osmolar de proteínas y anemia ferropénica severa',
              say: 'La leche entera de vaca no modificada está desaconsejada durante todo el primer año, pues su excesiva concentración de proteínas y minerales genera microhemorragias digestivas ocultas y sobrecarga renal.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Protocolo MINSAL',
      title: 'Protocolo de Suplementación y Alimentación Complementaria en Pediatría',
      head: ['Edad o Condición', 'Alimentación Recomendada', 'Suplementación Requerida', 'Pautas de Seguridad'],
      rows: [
        {
          cells: ['Cero a Seis Meses', 'Lactancia materna exclusiva a libre demanda', 'Vitamina D cuatrocientas unidades al día desde el mes', 'No administrar agua, jugos, té ni infusiones'],
          say: 'En el primer semestre la leche materna exclusiva es el alimento de elección, indicando vitamina D a cuatrocientas unidades al día desde los treinta días de vida sin añadir agua ni infusiones.',
        },
        {
          cells: ['Prematuro o Bajo Peso', 'Leche materna o fórmula para prematuros', 'Hierro dos a tres miligramos por kilo al día a los dos meses', 'Control estricto de hemograma y ferritina a los seis meses'],
          say: 'Los recién nacidos prematuros o con peso bajo dos mil quinientos gramos requieren inicio precoz de hierro oral a los dos meses de vida a dosis de dos a tres miligramos por kilo.',
        },
        {
          cells: ['Recién Nacido de Término', 'Lactancia materna exclusiva', 'Hierro un miligramo por kilo al día a los cuatro meses', 'Previene el agotamiento de reservas hepáticas del lactante'],
          say: 'En el lactante de término con lactancia materna el hierro elemental profiláctico se inicia formalmente a los cuatro meses cumplidos a dosis de un miligramo por kilo al día hasta el año.',
        },
        {
          cells: ['Seis Meses Cumplidos', 'Primera papilla (almuerzo) más fruta molida', 'Mantener Vitamina D y Hierro oral diario', 'Adicionar cinco mililitros de aceite vegetal crudo'],
          say: 'A los seis meses debuta el almuerzo con papilla suave de carne magra y verduras, agregando obligatoriamente cinco mililitros de aceite vegetal crudo de canola o soya al momento de servir.',
        },
        {
          cells: ['Ocho a Nueve Meses', 'Segunda comida (cena) más almuerzo', 'Mantener suplementación diaria hasta los doce meses', 'Avanzar a texturas semisólidas y picados blandos'],
          say: 'Entre los ocho y nueve meses se incorpora la cena con idéntica densidad nutricional y calórica, avanzando paulatinamente hacia texturas machacadas con tenedor para estimular la masticación.',
        },
        {
          cells: ['Menores de Un Año', 'Alimentos prohibidos estrictos', 'No aplica', 'Prohibida la miel por botulismo, la sal y la leche entera'],
          say: 'Durante todo el primer año queda estrictamente prohibida la miel de abeja por riesgo inminente de botulismo, así como la sal añadida, los azúcares y la leche de vaca entera fluida.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de prescripción',
      title: 'Algoritmo de Prescripción Nutricional y Suplementación Infantil',
      say: 'Examinemos el algoritmo paso a paso para indicar la suplementación profiláctica adecuada y guiar la introducción escalonada de alimentos sólidos.',
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Suplementación de Hierro en Lactante Prematuro',
      stem: 'Un lactante de 2 meses de vida, nacido a las 33 semanas de gestación con peso de nacimiento de 1.950 g, acude a control de salud infantil. Se alimenta con lactancia materna exclusiva y recibe vitamina D en dosis de 400 UI al día desde los 30 días de vida. Su examen físico es normal.',
      question: '¿Cuál es la indicación de suplementación con hierro más adecuada según la normativa chilena?',
      options: [
        { letter: 'A', text: 'Esperar hasta los 6 meses para iniciar hierro junto con la alimentación complementaria' },
        { letter: 'B', text: 'Iniciar sulfato ferroso a dosis de 2 a 3 mg/kg/día de hierro elemental a contar de este control' },
        { letter: 'C', text: 'Iniciar sulfato ferroso a los 4 meses a dosis de 1 mg/kg/día' },
        { letter: 'D', text: 'No requiere suplementación de hierro si la madre consume carnes rojas y legumbres' },
        { letter: 'E', text: 'Indicar hierro dextrano por vía intramuscular en dosis única mensual' },
      ],
      correct: 'B',
      explanation: 'La norma técnica de suplementación profiláctica del Ministerio de Salud de Chile establece que en niños prematuros (menores a 37 semanas) o con peso de nacimiento menor a 2.500 g, los depósitos fetales de hierro son muy escasos debido a la interrupción del traspaso placentario en el tercer trimestre. Por ello, la suplementación profiláctica con hierro oral debe iniciarse precozmente a los 2 meses de vida (o al duplicar el peso de nacimiento) a dosis de 2 a 3 mg/kg/día de hierro elemental. La dosis de 1 mg/kg/día a contar de los 4 meses se reserva para recién nacidos de término con peso adecuado.',
      say: {
        stem: 'Lactante de dos meses prematuro a las treinta y tres semanas con peso de nacimiento de mil novecientos cincuenta gramos que recibe leche materna y vitamina D.',
        question: '¿Cuál es la indicación de suplementación con hierro más adecuada según la normativa chilena?',
        options: 'La opción A propone esperar a los seis meses. La B iniciar sulfato ferroso a dos a tres miligramos por kilo al día desde este control. La C iniciar a los cuatro meses. La D no suplementar. La E hierro intramuscular. Piensa en sus depósitos fetales.',
        answer: 'La respuesta correcta es la B. Los prematuros tienen depósitos reducidos y deben iniciar hierro a los dos meses a dosis de dos a tres miligramos por kilo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Alimentos Prohibidos y Riesgo de Botulismo en Menores de 1 Año',
      stem: 'Una madre acude a control con su hijo de 7 meses. El niño recibe almuerzo desde los 6 meses. La abuela le aconseja endulzar el puré de frutas crudas con un poco de miel natural de abeja para mejorar su sabor y agregar una pizca de sal marina a la sopa para estimular su apetito.',
      question: '¿Cuál es la recomendación médica y nutricional correcta que debe entregar el profesional?',
      options: [
        { letter: 'A', text: 'Permitir la miel natural pero restringir el agregado de sal marina' },
        { letter: 'B', text: 'Permitir una pizca de sal pero contraindicar la miel por riesgo de botulismo' },
        { letter: 'C', text: 'Contraindicar estrictamente tanto la miel de abeja por riesgo de botulismo como el agregado de sal y azúcar durante todo el primer año' },
        { letter: 'D', text: 'Autorizar ambos alimentos en cantidades mínimas para favorecer la aceptación gustativa' },
        { letter: 'E', text: 'Recomendar diluir la miel en leche tibia para neutralizar posibles toxinas bacterianas' },
      ],
      correct: 'C',
      explanation: 'Las guías del Ministerio de Salud y de la Sociedad Chilena de Pediatría prohíben taxativamente la administración de miel de abeja a cualquier niño menor de un año de vida, debido al riesgo inminente de botulismo del lactante, patología neurotóxica grave producida por la germinación entérica de esporas de Clostridium botulinum. Asimismo, está formalmente contraindicado añadir sal y azúcares a las preparaciones infantiles durante los primeros doce meses de vida para proteger la función renal inmadura y evitar improntas metabólicas e hipertensogénicas tempranas.',
      say: {
        stem: 'Madre de lactante de siete meses que consulta si puede endulzar la fruta con miel natural de abeja y agregar sal a la sopa por consejo familiar.',
        question: '¿Cuál es la recomendación médica y nutricional correcta que debe entregar el profesional de salud?',
        options: 'La opción A permite miel natural. La B permite sal. La C contraindica estrictamente la miel por riesgo de botulismo y prohíbe la sal y el azúcar en menores de un año. La D autoriza ambos. La E hervir la miel. Recuerda las normas de seguridad.',
        answer: 'La respuesta correcta es la C. La miel está estrictamente prohibida por botulismo del lactante y la sal por sobrecarga renal durante todo el primer año.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Alimentación y Suplementación Pediátrica',
      cards: [
        {
          title: 'Suplementación Profiláctica Universal',
          tag: 'Vitamina D y dosificación de hierro',
          kind: 'key',
          items: [
            {
              t: 'Vitamina D 400 UI al mes de vida',
              d: 'Iniciar a los 30 días de vida en todo niño amamantado y mantener hasta los 12 meses',
              say: 'Recuerden con exactitud que la vitamina D oral se prescribe a cuatrocientas unidades al día desde los treinta días de vida y se sostiene durante todo el primer año para evitar raquitismo carencial en el lactante.',
            },
            {
              t: 'Hierro: Término a los 4 meses y prematuros a los 2 meses',
              d: 'Término: 1 mg/kg/día a los 4 meses; prematuro o < 2.500 g: 2 a 3 mg/kg/día a los 2 meses',
              say: 'Fijen en su mente los dos esquemas de hierro: en niños de término a los cuatro meses a un miligramo por kilo, y en prematuros a los dos meses a dos o tres miligramos por kilo al día.',
            },
          ],
        },
        {
          title: 'Alimentación Complementaria y Prohibiciones',
          tag: 'Aceite crudo y peligro de botulismo',
          kind: 'alert',
          items: [
            {
              t: 'Almuerzo a los 6 meses con 5 mL de aceite crudo',
              d: 'Papilla con carne magra y una cucharadita de aceite vegetal crudo al servir; cena a los 8 meses',
              say: 'La primera comida debuta a los seis meses acompañada de cinco mililitros de aceite vegetal crudo para aportar ácidos grasos esenciales omega tres y seis, sumándose la cena a los ocho meses.',
            },
            {
              t: '¡Cero miel en menores de un año por botulismo!',
              d: 'Prohibición estricta de miel (Clostridium botulinum), sal añadida, azúcar y leche entera de vaca',
              say: 'Jamás olviden que la miel de abeja está absolutamente proscrita bajo el año por riesgo letal de botulismo infantil, al igual que la sal añadida, los azúcares refinados y la leche de vaca fluida. Nos vemos en la próxima clase para revisar bronquiolitis y síndrome bronquial obstructivo.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Prescripción Nutricional y Suplementación Infantil',
    root: N(
      'start',
      'Lactante Sano en Control de Salud Infantil en Atención Primaria',
      'Evaluación de edad gestacional al nacer, peso de nacimiento, tipo de alimentación láctea y edad actual',
      'Iniciamos la evaluación nutricional categorizando los antecedentes neonatales del lactante y su alimentación actual.',
      [
        'Lactante menor de seis meses alimentado con lactancia materna exclusiva',
        N(
          'q',
          '¿Cuál es la edad cronológica actual y el antecedente de prematurez o bajo peso?',
          'Estratificación de las ventanas de inicio para vitamina D y hierro profiláctico',
          'Determinamos el hito madurativo actual para indicar los suplementos nutricionales que corresponden.',
          [
            'Cumple treinta días de vida (un mes cumplido)',
            N(
              'ok',
              'Prescripción Universal de Vitamina D',
              'Iniciar Vitamina D cuatrocientas unidades internacionales al día por vía oral hasta los doce meses',
              'Al mes de vida indicamos vitamina D cuatrocientas unidades al día para prevenir el raquitismo carencial.',
            ),
          ],
          [
            'Lactante prematuro o menor de 2.500 g que cumple dos meses de vida',
            N(
              'alert',
              'Inicio Precoz de Hierro en Prematuro',
              'Sulfato ferroso oral dos a tres miligramos por kilo al día de hierro elemental hasta el año de vida',
              'A los dos meses indicamos hierro profiláctico a dos o tres miligramos por kilo en el lactante prematuro.',
            ),
          ],
          [
            'Lactante de término con peso adecuado que cumple cuatro meses de vida',
            N(
              'do',
              'Inicio de Hierro Profiláctico de Término',
              'Sulfato ferroso oral un miligramo por kilo al día de hierro elemental hasta el año de vida',
              'A los cuatro meses prescribimos hierro oral a un miligramo por kilo al día en el niño nacido a término.',
            ),
          ],
        ),
      ],
      [
        'Lactante que cumple seis meses o más de vida',
        N(
          'q',
          '¿Se inicia la primera papilla o se avanza a la segunda comida del día?',
          'Maduración oromotriz, pérdida de reflejo de extrusión y cronograma de alimentación',
          'Evaluamos la incorporación de sólidos según el cronograma de alimentación complementaria del Ministerio.',
          [
            'Cumple seis meses de vida (debut de sólidos)',
            N(
              'ok',
              'Primera Comida: Almuerzo con Aceite Crudo',
              'Papilla suave con carne magra más 5 mL de aceite vegetal crudo · Fruta molida · Cero sal y cero azúcar',
              'A los seis meses indicamos almuerzo con papilla suave, cinco mililitros de aceite crudo y fruta fresca molida.',
            ),
          ],
          [
            'Cumple ocho a nueve meses de vida',
            N(
              'do',
              'Segunda Comida: Incorporación de la Cena',
              'Agregar cena con idéntica densidad calórico-proteica · Textura progresivamente machacada',
              'Entre los ocho y nueve meses agregamos la cena con igual estructura nutricional y textura más espesa.',
            ),
          ],
          [
            'Consulta familiar sobre alimentos de riesgo en menor de un año',
            N(
              'alert',
              'Prohibición Estricta: Cero Miel, Cero Sal y Cero Leche de Vaca',
              'Prohibir miel por riesgo de botulismo del lactante · Prohibir sal por inmadurez renal · No leche de vaca entera',
              'Recordamos a la familia la prohibición estricta de miel por botulismo, de sal añadida y de leche de vaca.',
            ),
          ],
        ),
      ],
    ),
  },
};
