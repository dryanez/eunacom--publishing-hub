// Clase 16.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia.cjs (derma-13, melanoma maligno).
// Nota: el código de la clase (1.09.1.006) no devuelve preguntas reales de confianza suficiente
// (solo una, y es en realidad de nefropatía lúpica: falso positivo de código). Se buscó por tema
// con --search "melanoma|nevo|Breslow|ABCDE|lesión pigmentada" y se encontraron 2 preguntas reales
// de melanoma (EUNACOM Diciembre 2019 P178 y Enero 2023 P115), pero ambas dependen por completo de
// una fotografía clínica ("se observa lo siguiente" / "se muestra en imagen") que no tenemos
// disponible: el enunciado escrito por sí solo no permite razonar la respuesta. Se descartan por
// esa razón. Se usan 2 preguntas del libro ("Caso representativo", sin fecha), porque enseñan
// contenidos distintos (técnica de biopsia; márgenes y ganglio centinela según Breslow) y no
// requieren imagen.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El ABCDE que hace sospechar, la biopsia que no se puede improvisar, y el Breslow que decide el margen',
      say: 'Bienvenidos. Hoy vemos melanoma maligno, el tumor de piel más letal, y uno de los temas que el EUNACOM pregunta con más constancia. La buena noticia es que casi todo se reduce a tres decisiones: cuándo sospechar con el ABCDE, qué biopsia corresponde, y qué hace el índice de Breslow con el margen quirúrgico y el ganglio centinela. Partamos por la sospecha.',
    },

    {
      type: 'flow',
      kicker: 'Sospecha clínica',
      title: '¿Por qué se dispara la sospecha de melanoma?',
      nodes: [
        { id: 'fot', col: 0, row: 0, k: 'cause', t: 'Fototipo claro y quemaduras en la infancia', s: 'Exposición solar intermitente e intensa' },
        { id: 'nev', col: 0, row: 1, k: 'cause', t: 'Muchos nevos o nevos displásicos', s: 'Más de 50 a 100 nevos comunes' },
        { id: 'fam', col: 0, row: 2, k: 'cause', t: 'Historia familiar de melanoma', s: 'Mutación en el gen CDKN2A' },
        { id: 'tra', col: 1, row: 1, k: 'mech', t: 'El melanocito escapa al control', s: 'Transformación maligna' },
        { id: 'abc', col: 2, row: 1, k: 'effect', t: 'Lesión pigmentada con ABCDE', s: 'Asimetría, bordes, color, diámetro' },
        { id: 'evo', col: 3, row: 1, k: 'risk', t: 'La evolución es lo más sensible', s: 'Cambio dinámico, o lesión nueva: "el patito feo"' },
      ],
      edges: [
        { from: 'fot', to: 'tra' },
        { from: 'nev', to: 'tra', label: 'más nevos, más riesgo' },
        { from: 'fam', to: 'tra', label: 'mutación heredada' },
        { from: 'tra', to: 'abc' },
        { from: 'abc', to: 'evo' },
      ],
      steps: [
        { show: ['fot'], note: 'No es el sol crónico y parejo: son las quemaduras',
          say: 'Empecemos por quién tiene más riesgo. No es la exposición solar crónica y pareja la que más pesa, sino las quemaduras solares intensas e intermitentes en la infancia y la adolescencia, sobre todo en personas de fototipo claro: piel blanca, ojos claros, pelo rubio o pelirrojo, con pecas.' },
        { show: ['nev'], note: 'Más de cincuenta a cien nevos comunes',
          say: 'Se suma tener muchos nevos melanocíticos, más de cincuenta a cien, o tener nevos displásicos, esos nevos atípicos que ya de por sí se parecen un poco a lo que no queremos ver.' },
        { show: ['fam'], note: 'Historia familiar: pensar en CDKN2A',
          say: 'Y la historia personal o familiar de melanoma, ligada en algunos casos a una mutación heredada que se transmite en la familia.' },
        { show: ['tra'], note: 'El melanocito deja de obedecer las señales de control',
          say: 'Todos estos factores convergen en lo mismo: el melanocito, la célula que produce el pigmento, escapa al control normal y se transforma.' },
        { show: ['abc'], note: 'El ABCDE describe lo que ese melanocito descontrolado produce',
          say: 'Y esa transformación se traduce en una lesión pigmentada que rompe las reglas de un nevo común. Ahí entra la regla del ABCDE: Asimetría, cuando una línea imaginaria por el centro no deja dos mitades iguales; Bordes irregulares, festoneados o mal definidos; Color heterogéneo, con más de un tono de marrón, negro, azulado o rojo en la misma lesión; y Diámetro mayor a seis milímetros, aunque un melanoma inicial puede ser más chico.' },
        { show: ['evo'], note: 'El criterio más preguntado: el cambio en el tiempo',
          say: 'Y la E, de Evolución, es el criterio más sensible de todos, y el que más se pregunta: cualquier cambio de tamaño, forma, color, elevación, prurito o sangrado en un nevo que ya existía, o la aparición de una lesión nueva y distinta en un adulto, lo que se conoce como el signo del patito feo.' },
        { show: ['evo'], note: 'La dermatoscopía apoya, pero no reemplaza a la biopsia',
          say: 'Frente a esta sospecha clínica se apoya la evaluación con dermatoscopía, que amplifica la piel y ayuda a decidir si esa lesión merece biopsia. Pero ojo: la dermatoscopía nunca reemplaza a la biopsia cuando la sospecha ya es alta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Subtipos clínico-patológicos',
      title: 'Cuatro formas de melanoma, y una que rompe la regla del sol',
      cards: [
        { title: 'Los dos más frecuentes', tag: 'Crecimiento radial versus vertical', kind: 'key', items: [
          { t: 'Extensión superficial: 70%', d: 'Espalda en hombres, piernas en mujeres',
            say: 'Veamos los subtipos, porque el examen los pregunta por su comportamiento. El más frecuente, en el setenta por ciento de los casos en personas caucásicas, es el de extensión superficial: aparece en la espalda de los hombres y en las piernas de las mujeres, y crece primero hacia los lados, en la epidermis, antes de invadir en profundidad.' },
          { t: 'Nodular: 15%, y el más agresivo', d: 'Nódulo azul-negro, crece hacia abajo desde el inicio',
            say: 'El nodular, en cambio, es el más agresivo: crece hacia abajo desde el principio, sin esa fase superficial que da tiempo. Es un nódulo cupuliforme, negro-azulado, que sangra o se ulcera, y suele llegar con un Breslow ya alto.' },
        ] },
        { title: 'Los que cambian la regla', tag: 'Uno muy lento, otro sin relación con el sol', kind: 'alert', items: [
          { t: 'Léntigo maligno melanoma: 10%', d: 'Cara de ancianos, evoluciona en años',
            say: 'El léntigo maligno melanoma aparece en la cara de personas mayores con daño solar crónico, y evoluciona muy lento, durante años, precedido por una mancha llamada peca de Hutchinson.' },
          { t: 'Lentiginoso acral: 5%, pero más de la mitad en Chile', d: 'Palmas, plantas y uñas; no depende del sol',
            say: 'Y guarda esta cifra, porque es un dato muy chileno: el lentiginoso acral es solo el cinco por ciento en caucásicos, pero es el subtipo más frecuente en poblaciones mestizas y latinoamericanas, superando la mitad de los casos. Aparece en palmas, plantas y bajo las uñas, con melanoniquia y el signo de Hutchinson, y no tiene relación con la exposición solar. No lo descartes en un paciente sin antecedente de sol.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'La biopsia que corresponde, y la que está prohibida',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Lesión pigmentada sospechosa', s: 'Cumple criterios de ABCDE' },
        { id: 'exc', col: 1, row: 0, k: 'good', t: 'Biopsia excisional completa', s: 'Margen de 1 a 2 milímetros, con hipodermis' },
        { id: 'sha', col: 1, row: 2, k: 'trap', t: 'Biopsia por rasurado o sacabocados', s: 'Contraindicada de entrada' },
        { id: 'bre', col: 2, row: 0, k: 'effect', t: 'Mide el Breslow real', s: 'Espesor exacto desde la capa granulosa' },
        { id: 'sub', col: 2, row: 2, k: 'alert', t: 'Subestima el espesor', s: 'Arriesga subetapificar el tumor' },
      ],
      edges: [
        { from: 'sos', to: 'exc' },
        { from: 'sos', to: 'sha', label: 'nunca' },
        { from: 'exc', to: 'bre' },
        { from: 'sha', to: 'sub' },
      ],
      steps: [
        { show: ['sos'], note: 'La técnica de biopsia es la pregunta más repetida del tema',
          say: 'Frente a una lesión sospechosa, la pregunta que más se repite en el examen es la técnica de biopsia. Y aquí no hay espacio para la duda.' },
        { show: ['exc'], note: 'Margen estrecho, pero profundidad completa',
          say: 'La técnica correcta es la biopsia excisional completa: se saca toda la lesión, con un margen estrecho de uno a dos milímetros de piel sana, y en profundidad hasta incluir todo el tejido celular subcutáneo.' },
        { show: ['bre'], note: 'Solo así el patólogo mide el espesor real',
          say: 'Solo con la lesión completa y con esa profundidad el patólogo puede medir con exactitud el índice de Breslow, que es la pieza que decide todo lo que viene después.' },
        { show: ['sha'], note: 'Shave y punch: contraindicados de entrada',
          say: 'Y por eso la biopsia por rasurado, o shave, y la biopsia por sacabocados o punch superficial, están contraindicadas de entrada, salvo excepciones puntuales como una lesión gigante o en la cara.' },
        { show: ['sub'], note: 'Amputan la base y falsean el pronóstico',
          say: 'Porque amputan la base del tumor: si el patólogo no ve la profundidad real, el Breslow que informa está subestimado, y eso puede llevar a subetapificar un melanoma que en realidad es más grave.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Índice de Breslow',
      title: 'El Breslow decide el margen y si va ganglio centinela',
      nodes: [
        { id: 'med', col: 0, row: 1, k: 'start', t: 'Ya tienes el Breslow informado', s: 'Espesor tumoral en milímetros' },
        { id: 'sit', col: 1, row: 0, k: 'good', t: 'In situ', s: 'Margen de 0,5 centímetros' },
        { id: 'b1', col: 1, row: 1, k: 'good', t: 'Hasta 1 milímetro', s: 'Margen de 1 centímetro' },
        { id: 'b2', col: 1, row: 2, k: 'good', t: 'De 1 a 2 milímetros', s: 'Margen de 1 a 2 centímetros' },
        { id: 'b3', col: 1, row: 3, k: 'risk', t: 'Más de 2 milímetros', s: 'Margen de 2 centímetros' },
        { id: 'sln', col: 2, row: 2, k: 'alert', t: 'Biopsia de ganglio centinela', s: 'Si supera 0,8 milímetros, o hay ulceración' },
      ],
      edges: [
        { from: 'med', to: 'sit' }, { from: 'med', to: 'b1' }, { from: 'med', to: 'b2' }, { from: 'med', to: 'b3' },
        { from: 'b1', to: 'sln', label: 'si supera 0,8 mm o hay ulceración' },
        { from: 'b2', to: 'sln', label: 'siempre' },
        { from: 'b3', to: 'sln', label: 'siempre' },
      ],
      steps: [
        { show: ['med'], note: 'Todo lo que sigue depende de este número',
          say: 'Ahora, con el Breslow ya medido, se decide la ampliación quirúrgica definitiva. Y esto se pregunta con números exactos, así que memorízalos.' },
        { show: ['sit'], note: 'Melanoma in situ: el margen más chico, la sobrevida más alta',
          say: 'Si es un melanoma in situ, que no ha invadido la dermis, el margen es de cero coma cinco centímetros, cinco milímetros, y la sobrevida a cinco años supera el noventa y nueve por ciento.' },
        { show: ['b1'], note: 'Hasta un milímetro: margen de un centímetro',
          say: 'Con un Breslow de hasta un milímetro, el margen es de un centímetro, y la sobrevida a cinco años sigue siendo muy alta, entre el noventa y cinco y el noventa y ocho por ciento.' },
        { show: ['b2'], note: 'De uno a dos milímetros: margen de uno a dos centímetros',
          say: 'Entre uno y dos milímetros, el margen sube a uno o dos centímetros, y la sobrevida ya baja al rango de ochenta y cinco a noventa por ciento.' },
        { show: ['b3'], note: 'Más de dos milímetros: margen de dos centímetros',
          say: 'Y sobre los dos milímetros, el margen es de dos centímetros, y ahí se queda: márgenes más amplios no mejoran el resultado. Eso sí, el pronóstico sigue empeorando con el espesor: la sobrevida cae por debajo del setenta y cinco por ciento, y si el Breslow supera los cuatro milímetros, ronda apenas el cincuenta por ciento. Por eso la biopsia bien hecha, la que mide el Breslow real, es tan importante desde el principio.' },
        { show: ['sln'], note: 'El corte que decide el ganglio centinela: 0,8 milímetros',
          say: 'Y en paralelo, la biopsia de ganglio centinela, sin adenopatías palpables, está indicada siempre que el Breslow supere los cero coma ocho milímetros, o incluso por debajo de esa cifra si hay ulceración o mitosis elevadas. Ese corte de cero coma ocho milímetros es justamente lo que más se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento sistémico',
      title: 'De la cirugía local a la enfermedad diseminada',
      cards: [
        { title: 'Enfermedad localizada', tag: 'Ampliación más ganglio centinela', kind: 'normal', items: [
          { t: 'Ampliación de márgenes según Breslow', d: 'Más biopsia de ganglio centinela si corresponde',
            say: 'En la enfermedad localizada, la conducta es la ampliación de márgenes según el Breslow que ya vimos, junto con la biopsia de ganglio centinela cuando está indicada, y estudio de etapificación con tomografía de tórax, abdomen y pelvis, o PET si el tumor es grueso.' },
        ] },
        { title: 'Compromiso ganglionar', tag: 'Linfadenectomía e inmunoterapia', kind: 'alert', items: [
          { t: 'Ganglios palpables: linfadenectomía', d: 'Terapéutica, no solo diagnóstica',
            say: 'Si ya hay compromiso ganglionar palpable, la cirugía cambia: linfadenectomía regional con intención terapéutica, y se suma inmunoterapia con nivolumab o pembrolizumab.' },
        ] },
        { title: 'Enfermedad metastásica', tag: 'Según la mutación BRAF', kind: 'pharma', items: [
          { t: 'BRAF mutado: inhibidores BRAF y MEK', d: 'Sin mutación: inmunoterapia anti-PD-1',
            say: 'Y en la enfermedad metastásica, la conducta depende de si el tumor tiene la mutación característica del gen BRAF: si la tiene, se usan inhibidores de BRAF y de MEK combinados; si no la tiene, el pilar es la inmunoterapia anti PD uno. Esto ya es manejo oncológico especializado, pero te sirve para reconocer que no es quimioterapia clásica la que manda hoy.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión: de la sospecha a la biopsia, y de la biopsia al margen definitivo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Lesión con ABCDE positivo', 'Biopsia excisional completa con margen estrecho e hipodermis', 'Biopsia por shave o punch "para no dejar cicatriz"'],
          say: 'Repasemos las trampas. Ante una lesión con ABCDE positivo, la conducta es la biopsia excisional completa. El error clásico es elegir shave o punch para no dejar cicatriz.' },
        { cells: ['Breslow de 0,6 milímetros, sin ulceración', 'Margen de 1 centímetro, sin ganglio centinela', 'Pedir ganglio centinela igual'],
          say: 'Con un Breslow bajo, de cero coma seis milímetros y sin ulceración, el margen es de un centímetro y no corresponde pedir ganglio centinela. Pedirlo igual es el error, porque no está indicado bajo cero coma ocho milímetros sin ulceración.' },
        { cells: ['Breslow mayor a 0,8 milímetros, o con ulceración', 'Ganglio centinela obligatorio', 'Omitirlo porque "no se palpan adenopatías"'],
          say: 'Pasado ese umbral, el ganglio centinela es obligatorio. Y el error es omitirlo solo porque no se palpan adenopatías: la biopsia de ganglio centinela existe justamente para detectar lo que la mano no palpa.' },
        { cells: ['Lesión acral en paciente sin antecedente solar', 'Sospechar melanoma lentiginoso acral igual', 'Descartarlo "porque no toma sol"'],
          say: 'Una lesión en palma, planta o uña, en un paciente sin antecedente de exposición solar, igual debe hacer sospechar un melanoma lentiginoso acral. Descartarlo por falta de sol es el error, y en Chile es un error caro.' },
        { cells: ['Nódulo azul-negro de crecimiento rápido', 'Derivar de inmediato: probable melanoma nodular', 'Esperar semanas para ver evolución'],
          say: 'Y un nódulo azul-negro de crecimiento rápido debe derivarse de inmediato, porque suele ser un melanoma nodular con Breslow ya alto. Esperar a ver cómo evoluciona es perder tiempo que el paciente no tiene.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 45 años consulta por una lesión pigmentada en la pantorrilla izquierda, de 5 meses de evolución, con crecimiento progresivo y prurito ocasional. Al examen se observa una mácula de 8 mm de diámetro mayor, asimétrica, de bordes irregulares, con tonalidades café oscuro, negro y un área grisácea central. No se palpan adenopatías inguinales.',
      question: '¿Cuál es la conducta diagnóstica más adecuada?',
      options: [
        { letter: 'A', text: 'Biopsia excisional completa con 1 a 2 mm de margen y tejido celular subcutáneo' },
        { letter: 'B', text: 'Biopsia por sacabocados (punch) del área más pigmentada' },
        { letter: 'C', text: 'Crioterapia con nitrógeno líquido en la misma consulta' },
        { letter: 'D', text: 'Control fotográfico digital seriado en 6 meses' },
        { letter: 'E', text: 'Biopsia por afeitado (shave) superficial' },
      ],
      correct: 'A',
      explanation: 'La lesión cumple los cinco criterios del ABCDE: asimetría, bordes irregulares, color heterogéneo, diámetro mayor a 6 mm y evolución en 5 meses. Ante esa sospecha, la conducta obligatoria es la biopsia excisional completa con margen estrecho e hipodermis, que permite medir el Breslow real. El punch y el shave subestiman el espesor; la crioterapia y el control diferido retrasan el diagnóstico de un posible cáncer.',
      say: {
        stem: 'Vamos con un caso. Mujer de cuarenta y cinco años, con una lesión pigmentada en la pantorrilla izquierda, de cinco meses de evolución, que ha crecido y a veces le pica. Al examen: una mácula de ocho milímetros, asimétrica, de bordes irregulares, con café oscuro, negro y un área grisácea central. No se palpan adenopatías inguinales.',
        question: '¿Cuál es la conducta diagnóstica más adecuada?',
        options: 'Las opciones: biopsia excisional completa, biopsia por punch del área más pigmentada, crioterapia en la misma consulta, control fotográfico en seis meses, o biopsia por shave superficial. Piénsalo.',
        answer: 'Es la A. Cuenta los criterios: asimetría, bordes irregulares, color con tres tonos, diámetro sobre seis milímetros, y evolución de cinco meses. Con el ABCDE completo, la conducta obligatoria es la biopsia excisional con margen estrecho e hipodermis. El punch y el shave son la trampa clásica: parecen razonables, pero subestiman el Breslow. Y esperar seis meses, con esta sospecha, no es una opción.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un hombre de 46 años consulta por un nevo en la espalda que ha cambiado de color y aumentado de tamaño en los últimos 4 meses. Al examen se observa una lesión macular asimétrica de 8 mm con bordes irregulares y tres colores distintos (café claro, negro y grisáceo).',
      question: '¿Cuál es la conducta diagnóstica de elección?',
      options: [
        { letter: 'A', text: 'Cauterización con nitrógeno líquido (crioterapia) en la consulta' },
        { letter: 'B', text: 'Biopsia excisional completa con 1 a 2 mm de margen lateral y celular subcutáneo' },
        { letter: 'C', text: 'Biopsia por afeitado (shave) superficial para no dejar cicatriz antiestética' },
        { letter: 'D', text: 'Biopsia por sacabocados (punch) de 2 mm tomada del centro más pigmentado de la lesión' },
        { letter: 'E', text: 'Control fotográfico digital seriado cada 3 meses' },
      ],
      correct: 'B',
      explanation: 'Ante una lesión con sospecha clínica de melanoma maligno, el estándar de oro diagnóstico es la biopsia excisional completa con márgenes estrechos de 1 a 2 mm y en toda la profundidad del tejido celular subcutáneo, lo que permite medir el espesor de Breslow sin desestructurar la lesión.',
      say: {
        stem: 'Ahora una pregunta representativa del banco. Hombre de cuarenta y seis años, con un nevo en la espalda que cambió de color y creció en los últimos cuatro meses. Al examen: una lesión asimétrica de ocho milímetros, bordes irregulares y tres colores distintos, café claro, negro y grisáceo.',
        question: '¿Cuál es la conducta diagnóstica de elección?',
        options: 'Las opciones: crioterapia en la consulta, biopsia excisional completa, biopsia por shave para no dejar cicatriz, biopsia por punch del centro más pigmentado, o control fotográfico cada tres meses. Piénsalo.',
        answer: 'Es la B. Mismo razonamiento de siempre: sospecha de melanoma, biopsia excisional completa. El shave y el punch son la trampa que suena razonable, "para no dejar cicatriz" o "sacar solo lo más sospechoso", pero desestructuran la lesión y no permiten medir el Breslow.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'El informe histopatológico de una biopsia excisional de una lesión cutánea en la pierna de una mujer de 38 años concluye: "Melanoma maligno de extensión superficial, espesor de Breslow de 0,6 mm, sin ulceración, márgenes de resección libres a 1 mm".',
      question: '¿Cuál es la conducta terapéutica definitiva más apropiada?',
      options: [
        { letter: 'A', text: 'No realizar ningún procedimiento adicional dado que los márgenes de la biopsia estaban libres' },
        { letter: 'B', text: 'Ampliación quirúrgica de márgenes a 1 cm de tejido sano, sin necesidad de biopsia de ganglio centinela' },
        { letter: 'C', text: 'Ampliación quirúrgica de márgenes a 2 cm más biopsia de ganglio centinela obligatoria' },
        { letter: 'D', text: 'Iniciar quimioterapia adyuvante con dacarbazina por 6 ciclos' },
        { letter: 'E', text: 'Radioterapia local fraccionada sobre el lecho de la cicatriz' },
      ],
      correct: 'B',
      explanation: 'Con un Breslow de 0,6 mm y sin ulceración (T1a), el margen quirúrgico definitivo es de 1,0 cm de piel sana. Como el Breslow es menor a 0,8 mm y no hay ulceración, no está indicada la biopsia de ganglio centinela.',
      say: {
        stem: 'Una pregunta más. El informe de una biopsia excisional en la pierna de una mujer de treinta y ocho años dice: melanoma de extensión superficial, espesor de Breslow de cero coma seis milímetros, sin ulceración, márgenes libres a un milímetro.',
        question: '¿Cuál es la conducta terapéutica definitiva más apropiada?',
        options: 'Las opciones: no hacer nada más porque los márgenes de la biopsia estaban libres, ampliar a un centímetro sin ganglio centinela, ampliar a dos centímetros más ganglio centinela obligatorio, quimioterapia con dacarbazina, o radioterapia sobre la cicatriz. Piénsalo.',
        answer: 'Es la B. Aplica la tabla que aprendimos: Breslow de cero coma seis milímetros, menor a un milímetro, margen de un centímetro. Y como está bajo cero coma ocho milímetros y sin ulceración, no corresponde ganglio centinela. La trampa es la C, que suena más "agresiva" y por eso más segura, pero es un sobretratamiento para este Breslow.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La evolución manda', tag: 'El signo más sensible', kind: 'key', items: [
          { t: 'ABCDE, y sobre todo la E', d: 'Cambio dinámico, o lesión nueva en el adulto',
            say: 'Cerremos con las reglas de oro. En el ABCDE, la Evolución es el criterio más sensible: un cambio dinámico, o una lesión nueva en un adulto.' },
        ] },
        { title: 'La biopsia no se negocia', tag: 'Excisional, siempre', kind: 'alert', items: [
          { t: 'Nunca shave ni punch superficial', d: 'Amputan el Breslow real',
            say: 'La biopsia siempre es excisional completa, con margen estrecho e hipodermis. Nunca shave ni punch superficial: amputan el dato que más importa.' },
        ] },
        { title: 'El Breslow es la brújula', tag: 'Margen y ganglio centinela', kind: 'pharma', items: [
          { t: '0,8 mm es el corte del ganglio centinela', d: 'El margen crece con el espesor',
            say: 'Y el Breslow es la brújula de todo lo que viene: el margen crece con el espesor, y cero coma ocho milímetros es el corte para el ganglio centinela. Si te llevas una sola idea de hoy: sospecha con el ABCDE, biopsia siempre excisional, y deja que el Breslow decida el resto. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Melanoma: de la sospecha a la ampliación de márgenes',
    root: N(
      'start', 'Lesión pigmentada con criterios de ABCDE', 'Sobre todo si cambió en el tiempo',
      'Frente a una lesión pigmentada que cumple ABCDE, sobre todo si cambió en el tiempo, el siguiente paso es la técnica de biopsia.',
      ['', N(
        'q', '¿Qué técnica de biopsia corresponde?', 'Nunca shave ni punch superficial',
        'La técnica de biopsia decide si el diagnóstico va a ser confiable o no.',
        ['Shave o punch superficial', N(
          'alert', 'Error: subestima el Breslow', 'Repetir con biopsia excisional completa',
          'Esta técnica amputa la base de la lesión y falsea el espesor tumoral: hay que repetir con biopsia excisional.',
        )],
        ['Biopsia excisional completa', N(
          'q', '¿Cuál es el Breslow informado?', 'Define el margen definitivo y el ganglio centinela',
          'Con la biopsia correcta, el Breslow informado decide el margen de ampliación y si corresponde ganglio centinela.',
          ['0,8 mm o menos, sin ulceración', N(
            'do', 'Margen según Breslow, sin ganglio centinela', 'Por ejemplo, 1 cm si el Breslow es menor a 1 mm',
            'Bajo el umbral de cero coma ocho milímetros y sin ulceración, el ganglio centinela no está indicado.',
          )],
          ['Más de 0,8 mm, o con ulceración', N(
            'refer', 'Margen según Breslow, más ganglio centinela', 'Y estudio de etapificación si el Breslow es alto',
            'Sobre ese umbral, o con ulceración, la biopsia de ganglio centinela es obligatoria, además de la ampliación de márgenes.',
          )],
        )],
      )],
    ),
  },
};
