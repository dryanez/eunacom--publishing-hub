// Clase 18.01 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Evaluación antropométrica estandarizada, curvas OMS 2006, indicadores P/T, IMC/E, T/E y diagnóstico nutricional según desviaciones estándar MINSAL',
      say: 'Bienvenidos a la primera clase del módulo de pediatría, dedicada a la evaluación del crecimiento y del estado nutricional infantil mediante las curvas de la Organización Mundial de la Salud. Este tema es una constante absoluta en el examen EUNACOM, donde se exige dominar con exactitud los puntos de corte en desviaciones estándar, la elección correcta del indicador según la edad y el algoritmo de manejo en atención primaria. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Dinámica del crecimiento',
      title: 'Fisiología y Fases del Crecimiento Pediátrico',
      nodes: [
        { id: 'fet', col: 0, row: 1, k: 'start', t: 'Fase fetal y neonatal', s: 'Regulada por nutrición materna, función placentaria y factores de crecimiento similares a insulina' },
        { id: 'lac', col: 1, row: 1, k: 'mech', t: 'Lactancia y primera infancia', s: 'Crecimiento rápido desacelerado; máxima dependencia de la nutrición calórico-proteica' },
        { id: 'pre', col: 2, row: 1, k: 'effect', t: 'Fase preescolar y escolar', s: 'Velocidad de crecimiento estable; predominio del eje hormona de crecimiento y hormonas tiroideas' },
        { id: 'pub', col: 3, row: 1, k: 'good', t: 'Estirón puberal', s: 'Aceleración rápida dependiente de la interacción entre esteroides sexuales y hormona de crecimiento' },
      ],
      edges: [
        { from: 'fet', to: 'lac', label: 'nacimiento' },
        { from: 'lac', to: 'pre', label: 'dos años' },
        { from: 'pre', to: 'pub', label: 'tanner dos' },
      ],
      steps: [
        {
          show: ['fet', 'lac'],
          note: 'Nutrición como determinante primario de los primeros dos años',
          say: 'Durante la etapa fetal y los primeros dos años de vida, el crecimiento depende de manera casi exclusiva de la nutrición calórico proteica y el aporte adecuado de micronutrientes, con una velocidad muy elevada que desacelera paulatinamente.',
        },
        {
          show: ['pre', 'pub'],
          note: 'Regulación endocrina estable y brote puberal final',
          say: 'A partir de los dos años, el eje endocrino comandado por la hormona de crecimiento y las hormonas tiroideas toma el control, manteniendo una velocidad constante hasta el inicio puberal, cuando los esteroides sexuales desatan el estirón final.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica estandarizada',
      title: 'Técnica Antropométrica: Infantómetro versus Estadiómetro',
      cards: [
        {
          title: 'Medición en Menores de Dos Años',
          tag: 'Decúbito supino con infantómetro',
          kind: 'key',
          items: [
            {
              t: 'Longitud en decúbito supino con infantómetro',
              d: 'Hasta los 24 meses cumplidos; requiere dos operadores, vértice cefálico fijo y pies en 90 grados',
              say: 'Hasta los veinticuatro meses cumplidos la medición obligatoria es la longitud corporal, realizada acostado en decúbito supino sobre un infantómetro rígido con ayuda de dos operadores para asegurar la extensión completa.',
            },
            {
              t: 'Pesaje con balanza de lactantes calibrada',
              d: 'Completamente desnudo, sin pañal ni apósitos, utilizando balanza mecánica o digital con resolución de 10 g',
              say: 'El pesaje del lactante debe efectuarse retirando por completo la ropa y el pañal, registrando la cifra en una balanza pediátrica calibrada con sensibilidad de diez gramos para evitar falsos diagnósticos de desnutrición.',
            },
          ],
        },
        {
          title: 'Medición desde los Dos Años',
          tag: 'Bipedestación con estadiómetro',
          kind: 'criteria',
          items: [
            {
              t: 'Estatura de pie con estadiómetro rígido',
              d: 'Desde los 2 años en adelante; cinco puntos de contacto anatómicos y cabeza en plano de Frankfurt',
              say: 'Desde los dos años cumplidos se evalúa la estatura de pie en un estadiómetro vertical, alineando talones, glúteos, espalda y cabeza contra la barra en el plano horizontal de Frankfurt sin calzado.',
            },
            {
              t: 'Pesaje de pie en balanza de plataforma',
              d: 'Con ropa interior ligera y sin zapatos, registrando el peso exacto para el cálculo del IMC',
              say: 'En el niño mayor el pesaje se efectúa de pie en balanza de plataforma con ropa interior mínima, sirviendo de base matemática directa para calcular el índice de masa corporal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Indicadores clásicos',
      title: 'Indicadores Antropométricos: Peso para Talla, Talla para Edad y Peso para Edad',
      cards: [
        {
          title: 'Peso para la Talla e Índice de Masa Corporal',
          tag: 'Estado nutricional actual y agudo',
          kind: 'key',
          items: [
            {
              t: 'Peso para la Talla en menores de 5 años',
              d: 'Indicador oficial del MINSAL para diagnosticar armonía corporal y masa magra o grasa actual',
              say: 'En todos los niños menores de cinco años, el diagnóstico estatutario del estado nutricional se establece exclusivamente mediante el indicador peso para la talla, reflejando compromiso agudo o exceso ponderal.',
            },
            {
              t: 'Índice de Masa Corporal para la Edad desde los 5 años',
              d: 'Desde los 60 meses hasta los 19 años reemplaza al P/T para clasificar sobrepeso, obesidad y desnutrición',
              say: 'Al cumplir los cinco años de vida, el indicador peso para la talla deja de utilizarse y es reemplazado oficialmente por el índice de masa corporal para la edad, vigente hasta los diecinueve años.',
            },
          ],
        },
        {
          title: 'Talla para la Edad y Peso para la Edad',
          tag: 'Crecimiento crónico y alerta global',
          kind: 'alert',
          items: [
            {
              t: 'Talla para la Edad: Nutrición y salud a largo plazo',
              d: 'Evalúa el crecimiento lineal crónico; un valor menor o igual a menos dos desviaciones define talla baja',
              say: 'La talla para la edad refleja la historia nutricional y biológica acumulada a largo plazo; valores inferiores a menos dos desviaciones estándar diagnostican talla baja o retraso crónico del crecimiento.',
            },
            {
              t: 'Peso para la Edad: Indicador de alerta global',
              d: 'Útil en menores de un año para monitorizar el canal de crecimiento, pero no discrimina talla baja de desnutrición',
              say: 'El peso para la edad es un parámetro de pesquisa global muy sensible en el menor de un año para advertir caídas de canal, pero resulta insuficiente para diferenciar entre un desnutrido y un niño constitucionalmente bajo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Puntos de corte MINSAL',
      title: 'Diagnóstico Nutricional en Menores de 5 Años: Eutrofia y Malnutrición por Exceso',
      cards: [
        {
          title: 'Eutrofia o Normalidad Ponderal',
          tag: 'P/T entre -0.9 y +0.9 DE',
          kind: 'key',
          items: [
            {
              t: 'Estado nutricional normal en menor de 5 años',
              d: 'P/T entre -0.9 y +0.9 desviaciones estándar; armonía entre masa corporal y longitud',
              say: 'El rango de eutrofia o normalidad comprende valores de peso para la talla entre menos cero coma nueve y más cero coma nueve desviaciones estándar, reflejando un desarrollo pondoestatural armónico.',
            },
            {
              t: 'Educación y refuerzo de hábitos saludables',
              d: 'Mantener lactancia materna o sucedáneo adecuado y alimentación complementaria variada',
              say: 'En el niño eutrófico se refuerzan las prácticas de alimentación perceptiva, estimulación temprana y controles regulares de salud infantil en el centro de atención primaria.',
            },
          ],
        },
        {
          title: 'Malnutrición por Exceso en Menores de 5 Años',
          tag: 'P/T entre +1.0 y mayor o igual a +3.0 DE',
          kind: 'alert',
          items: [
            {
              t: 'Sobrepeso o riesgo de obesidad',
              d: 'P/T entre +1.0 y +1.9 desviaciones estándar; alerta preventiva para ajuste de hábitos',
              say: 'El sobrepeso se diagnostica cuando el indicador peso para la talla se ubica entre más una coma cero y más una coma nueve desviaciones estándar, exigiendo educación dietética sin restricción calórica drástica.',
            },
            {
              t: 'Obesidad y Obesidad Severa',
              d: 'Obesidad: P/T entre +2.0 y +2.9 DE. Obesidad severa: P/T mayor o igual a +3.0 DE',
              say: 'La obesidad se define con peso para la talla entre más dos coma cero y más dos coma nueve desviaciones estándar, mientras que valores iguales o superiores a más tres coma cero constituyen obesidad severa.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Déficit ponderal agudo',
      title: 'Déficit Nutricional en Menores de 5 Años: Riesgo y Desnutrición Clínica',
      cards: [
        {
          title: 'Riesgo de Desnutrición en Lactantes',
          tag: 'P/T entre -1.0 y -1.9 DE',
          kind: 'alert',
          items: [
            {
              t: 'Definición estatutaria de riesgo de desnutrición',
              d: 'P/T entre -1.0 y -1.9 desviaciones estándar; alerta para intervención nutricional ambulatoria inmediata',
              say: 'El riesgo de desnutrición abarca valores de peso para la talla entre menos uno coma cero y menos uno coma nueve desviaciones estándar, requiriendo citar a control en quince a treinta días.',
            },
            {
              t: 'Evaluación técnica de alimentación',
              d: 'Auditar técnica de acople, dilución de fórmulas lácteas, frecuencia de tomas y densidad energética',
              say: 'Frente al riesgo nutricional se audita la técnica de lactancia, el cálculo de dilución de sucedáneos lácteos y el aporte calórico de las papillas sin suspender la leche materna.',
            },
          ],
        },
        {
          title: 'Desnutrición Clínica y Desnutrición Severa',
          tag: 'P/T menor o igual a -2.0 DE',
          kind: 'criteria',
          items: [
            {
              t: 'Desnutrición clínica formal en menores de 5 años',
              d: 'P/T menor o igual a -2.0 DE; desnutrición severa con P/T menor o igual a -3.0 DE o emaciación',
              say: 'La desnutrición clínica se diagnostica cuando el peso para la talla cae a menos dos coma cero desviaciones estándar o inferior, considerándose severa bajo menos tres desviaciones.',
            },
            {
              t: 'Marasmo versus Kwashiorkor en EUNACOM',
              d: 'Marasmo: déficit calórico global, emaciación extrema y piel arrugada. Kwashiorkor: déficit proteico con edema hipoalbuminémico',
              say: 'En el examen clásico, el marasmo representa un déficit calórico global con atrofia muscular marcada, mientras que el kwashiorkor es un déficit proteico con edema maleolar y hepatomegalia grasa.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación escolar',
      title: 'Diagnóstico Nutricional en Escolares y Adolescentes (5 a 19 Años: IMC/E)',
      cards: [
        {
          title: 'Malnutrición por Exceso en Escolares',
          tag: 'IMC/E desde +1.0 DE en adelante',
          kind: 'alert',
          items: [
            {
              t: 'Sobrepeso y Obesidad escolar',
              d: 'Sobrepeso: IMC/E entre +1.0 y +1.9 DE; Obesidad: IMC/E entre +2.0 y +2.9 DE; Obesidad severa: mayor o igual a +3.0 DE',
              say: 'En escolares y adolescentes entre cinco y diecinueve años, el índice de masa corporal para la edad define sobrepeso desde más una desviación y obesidad desde más dos desviaciones.',
            },
            {
              t: 'Evaluación de comorbilidades metabólicas',
              d: 'Pesquisa de acantosis nigricans, presión arterial elevada, hígado graso y dislipidemia precoz',
              say: 'En todo escolar con obesidad se debe examinar dirigidamente el cuello buscando acantosis nigricans, medir la presión arterial con manguito adecuado y pesquisar factores de riesgo cardiovascular.',
            },
          ],
        },
        {
          title: 'Déficit Ponderal Escolar y Estirón Puberal',
          tag: 'IMC/E menor a -1.0 DE y estadios de Tanner',
          kind: 'criteria',
          items: [
            {
              t: 'Bajo peso y desnutrición en mayores de 5 años',
              d: 'Bajo peso: IMC/E entre -1.0 y -1.9 DE; Desnutrición: IMC/E menor o igual a -2.0 DE',
              say: 'El déficit ponderal en el escolar se cataloga como bajo peso entre menos uno y menos uno coma nueve, y desnutrición formal con valor inferior o igual a menos dos desviaciones.',
            },
            {
              t: 'Concordancia con maduración biológica de Tanner',
              d: 'El pico de velocidad de crecimiento ocurre en Tanner 3 en niñas y Tanner 4 en varones',
              say: 'La evaluación antropométrica del adolescente debe contextualizarse con los estadios de maduración sexual de Tanner, recordando que el pico del estirón ocurre en estadios tres y cuatro.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Velocidad de crecimiento',
      title: 'Velocidad de Crecimiento, Faltering Growth y Enfoque de Talla Baja',
      cards: [
        {
          title: 'Desaceleración y Faltering Growth',
          tag: 'Caída de dos canales percentilares',
          kind: 'alert',
          items: [
            {
              t: 'Aplanamiento de curva de crecimiento',
              d: 'Caída de dos percentiles o cruce mayor a 1 DE en controles seriados; alerta precoz de organicidad',
              say: 'El parámetro más sensible de patología es la velocidad de crecimiento. El aplanamiento de la curva o la caída de dos percentiles obliga a estudiar organicidad subyacente.',
            },
            {
              t: 'Descarte obligatorio de causas orgánicas',
              d: 'Celiaquía, alergia a proteína de leche de vaca, fibrosis quística, infección urinaria o acidosis tubular',
              say: 'Ante un aplanamiento pondoestatural se deben investigar dirigidamente causas orgánicas como enfermedad celíaca, acidosis tubular renal, fibrosis quística o infección urinaria recurrente.',
            },
          ],
        },
        {
          title: 'Enfoque de Talla Baja (T/E menor o igual a -2.0 DE)',
          tag: 'Variantes normales versus patológicas',
          kind: 'key',
          items: [
            {
              t: 'Talla baja familiar versus Retraso constitucional',
              d: 'Familiar: edad ósea igual a cronológica y padres bajos. Retraso constitucional: edad ósea retrasada con talla final normal',
              say: 'En la talla baja familiar la edad ósea coincide con la cronológica y los padres son bajos. En el retraso constitucional la edad ósea está retrasada pero la talla adulta final es normal.',
            },
            {
              t: 'Signos de alarma de patología endocrina o genética',
              d: 'Disgenesia gonadal o síndrome de Turner en niñas, hipotiroidismo congénito y déficit de hormona de crecimiento',
              say: 'Toda niña con talla baja inexplicada exige cariotipo para descartar síndrome de Turner, junto con descarte de hipotiroidismo y déficit de hormona de crecimiento.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Resumen estatutario',
      title: 'Clasificación Nutricional según Puntaje Z del MINSAL y Curvas OMS',
      head: ['Diagnóstico Nutricional', 'Menores de 5 Años (P/T)', 'De 5 a 19 Años (IMC/E)', 'Talla para la Edad (T/E)'],
      rows: [
        {
          cells: ['Obesidad Severa', 'Mayor o igual a +3.0 DE', 'Mayor o igual a +3.0 DE', 'No aplica'],
          say: 'La obesidad severa requiere puntaje z mayor o igual a más tres desviaciones estándar tanto en menores como en mayores de cinco años.',
        },
        {
          cells: ['Obesidad', '+2.0 a +2.9 DE', '+2.0 a +2.9 DE', 'No aplica'],
          say: 'La obesidad se sitúa en el rango estricto entre más dos coma cero y más dos coma nueve desviaciones estándar en ambos grupos etarios.',
        },
        {
          cells: ['Sobrepeso', '+1.0 a +1.9 DE', '+1.0 a +1.9 DE', 'No aplica'],
          say: 'El sobrepeso comprende valores entre más uno coma cero y más uno coma nueve desviaciones estándar, marcando la alarma por exceso.',
        },
        {
          cells: ['Eutrófico (Normal)', '-0.9 a +0.9 DE', '-0.9 a +0.9 DE', '-1.9 a +1.9 DE (Talla Normal)'],
          say: 'El rango de eutrofia y normalidad se extiende entre menos cero coma nueve y más cero coma nueve para masa, y hasta menos uno coma nueve para talla.',
        },
        {
          cells: ['Riesgo Desnutrición / Bajo Peso', '-1.0 a -1.9 DE', '-1.0 a -1.9 DE', 'No aplica'],
          say: 'El riesgo de desnutrición o bajo peso se diagnostica con cifras entre menos uno coma cero y menos uno coma nueve desviaciones estándar.',
        },
        {
          cells: ['Desnutrición / Talla Baja', 'Menor o igual a -2.0 DE', 'Menor o igual a -2.0 DE', 'Menor o igual a -2.0 DE (Talla Baja)'],
          say: 'La desnutrición clínica y la talla baja se definen de manera universal cuando el indicador cae a menos dos coma cero desviaciones o inferior.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo en atención primaria',
      title: 'Conducta Clínica y Seguimiento Nutricional en el CESFAM',
      cards: [
        {
          title: 'Abordaje del Riesgo de Desnutrición y Desnutrición',
          tag: 'Auditoría de ingesta y pesquisa orgánica',
          kind: 'key',
          items: [
            {
              t: 'Evaluación de técnica de lactancia y fórmulas',
              d: 'Auditar volumen, dilución de sucedáneos, técnica de amamantamiento y consistencia de papillas',
              say: 'Frente a un déficit ponderal se debe verificar la técnica de amamantamiento, la correcta preparación y dilución de las fórmulas lácteas y la densidad calórica de los alimentos sólidos.',
            },
            {
              t: 'Laboratorio básico y control abreviado en 15 a 30 días',
              d: 'Solicitar orina completa, urocultivo y hemograma; citar a control en quince a treinta días',
              say: 'Se solicitan exámenes generales para descartar infección urinaria silente o anemia ferropénica y se programa un control de seguimiento estrecho en quince a treinta días en el centro de salud.',
            },
          ],
        },
        {
          title: 'Abordaje de la Malnutrición por Exceso',
          tag: 'Educación sin dietas restrictivas en lactantes',
          kind: 'criteria',
          items: [
            {
              t: 'No restringir calorías en menores de dos años',
              d: 'La meta es frenar la ganancia excesiva de peso permitiendo que la estatura normalice el índice',
              say: 'En lactantes menores de dos años jamás se deben indicar dietas restrictivas ni leche descremada; la meta terapéutica es ralentizar la ganancia de peso mientras la talla continúa creciendo.',
            },
            {
              t: 'Eliminar azúcares libres y estimular juego activo',
              d: 'Suspender jugos envasados y golosinas; promover mínimo sesenta minutos diarios de movimiento libre',
              say: 'Se deben eliminar los jugos azucarados, bebidas y colaciones procesadas, promoviendo el juego en el suelo y la actividad motriz espontánea durante al menos sesenta minutos al día.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo MINSAL',
      title: 'Algoritmo de Evaluación y Clasificación Nutricional Pediátrica',
      say: 'Revisemos el algoritmo estructurado paso a paso para evaluar el estado nutricional infantil, clasificar los indicadores y definir la conducta médica.',
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Evaluación Nutricional en Lactante Menor de 5 Años',
      stem: 'Un lactante de 14 meses es llevado al CESFAM para su control de salud infantil. Su madre refiere que come bien, recibe fórmula de continuación y sólidos. En la antropometría se registra: Peso para la Talla (P/T) en +1.4 DE, Talla para la Edad (T/E) en +0.2 DE y Peso para la Edad (P/E) en +1.1 DE.',
      question: '¿Cuál es el diagnóstico nutricional integrado del paciente?',
      options: [
        { letter: 'A', text: 'Eutrófico con talla normal' },
        { letter: 'B', text: 'Sobrepeso con talla normal' },
        { letter: 'C', text: 'Obesidad con talla normal' },
        { letter: 'D', text: 'Riesgo de desnutrición con talla normal' },
        { letter: 'E', text: 'Sobrepeso con talla alta' },
      ],
      correct: 'B',
      explanation: 'En menores de 5 años, el estado nutricional actual se determina oficialmente por el indicador Peso para la Talla (P/T). Un valor de +1.4 DE se encuentra en el rango de +1.0 a +1.9 DE, lo que corresponde estatutariamente a Sobrepeso (o riesgo de obesidad). El indicador Talla para la Edad (T/E) se sitúa en +0.2 DE, dentro del rango de normalidad (-1.9 a +1.9 DE), por lo que se cataloga como Talla Normal. El indicador P/E (+1.1 DE) es solo una referencia global que no define el diagnóstico.',
      say: {
        stem: 'Lactante de catorce meses en control sano con peso para la talla en más una coma cuatro desviaciones estándar y talla para la edad en más cero coma dos desviaciones.',
        question: '¿Cuál es el diagnóstico nutricional integrado de este paciente?',
        options: 'La opción A propone eutrófico con talla normal. La B sobrepeso con talla normal. La C obesidad con talla normal. La D riesgo de desnutrición con talla normal. La E sobrepeso con talla alta. Piénsalo.',
        answer: 'La respuesta correcta es la B. En menores de cinco años el peso para la talla define el estado nutricional, correspondiendo más una coma cuatro a sobrepeso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Evaluación Nutricional en Escolar Mayor de 5 Años',
      stem: 'Una niña de 7 años acude a control de salud escolar. En la evaluación antropométrica presenta un índice de masa corporal (IMC) de 21.5 kg/m2, lo que al graficar en las tablas OMS para su edad y sexo arroja un puntaje Z de IMC para la Edad (IMC/E) de +2.4 DE y una Talla para la Edad (T/E) de -0.5 DE.',
      question: '¿Cuál es la clasificación nutricional correcta de la paciente?',
      options: [
        { letter: 'A', text: 'Sobrepeso con talla normal' },
        { letter: 'B', text: 'Obesidad con talla baja' },
        { letter: 'C', text: 'Obesidad con talla normal' },
        { letter: 'D', text: 'Obesidad severa con talla normal' },
        { letter: 'E', text: 'Eutrófica con talla normal' },
      ],
      correct: 'C',
      explanation: 'A partir de los 5 años cumplidos (60 meses) hasta los 19 años, el diagnóstico nutricional se establece mediante el indicador Índice de Masa Corporal para la Edad (IMC/E) según las curvas OMS. Un puntaje Z de +2.4 DE se ubica en el intervalo entre +2.0 y +2.9 DE, lo que corresponde a Obesidad infantil. La Talla para la Edad es de -0.5 DE, situándose dentro del canal normal (-1.9 a +1.9 DE). Por lo tanto, el diagnóstico integrado es Obesidad con talla normal.',
      say: {
        stem: 'Niña de siete años en control escolar con índice de masa corporal para la edad en más dos coma cuatro desviaciones estándar y talla para la edad en menos cero coma cinco.',
        question: '¿Cuál es la clasificación nutricional correcta de la paciente?',
        options: 'La opción A plantea sobrepeso con talla normal. La B obesidad con talla baja. La C obesidad con talla normal. La D obesidad severa con talla normal. La E eutrófica con talla normal. Piénsalo.',
        answer: 'La respuesta correcta es la C. Desde los cinco años se utiliza el índice de masa corporal para la edad, correspondiendo más dos coma cuatro desviaciones a obesidad.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Crecimiento y Nutrición Pediátrica',
      cards: [
        {
          title: 'Selección de Indicadores según Edad',
          tag: 'Menores versus mayores de 5 años',
          kind: 'key',
          items: [
            {
              t: 'P/T en menores de 5 años e IMC/E desde los 5 años',
              d: 'Regla de oro: nunca diagnosticar sobrepeso u obesidad por P/E en menores de cinco años',
              say: 'Recuerden siempre que en menores de cinco años el estado nutricional lo define el peso para la talla, mientras que a partir de los cinco años se emplea el índice de masa corporal para la edad. Jamás utilicen el peso para la edad para definir exceso o desnutrición en el examen.',
            },
            {
              t: 'Talla baja con T/E menor o igual a -2.0 DE',
              d: 'Refleja cronicidad; valores entre -1.9 y +1.9 DE corresponden a estatura normal',
              say: 'La talla para la edad refleja compromiso crónico y diagnostica talla baja únicamente cuando cae a menos dos desviaciones estándar o menos.',
            },
          ],
        },
        {
          title: 'Puntos de Corte y Alertas de Crecimiento',
          tag: 'Desviaciones estándar y desaceleración',
          kind: 'alert',
          items: [
            {
              t: 'Sobrepeso desde +1 DE y Obesidad desde +2 DE',
              d: 'Eutrófico entre -0.9 y +0.9 DE; riesgo de desnutrición entre -1.0 y -1.9 DE',
              say: 'Fijen en su memoria los cortes: sobrepeso desde más uno, obesidad desde más dos, riesgo desnutrición bajo menos uno y desnutrición clínica bajo menos dos.',
            },
            {
              t: 'Caída de canales percentilares exige estudio',
              d: 'La desaceleración pondoestatural obliga a descartar patología digestiva o infecciosa oculta',
              say: 'La desaceleración del crecimiento con caída de canales es una señal de alarma que exige estudio. Si te llevas una sola idea de hoy: en menores de cinco años el estado nutricional lo define el peso para la talla, jamás el peso para la edad. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Evaluación y Clasificación Nutricional Pediátrica',
    root: N(
      'start',
      'Lactante o Escolar en Control de Salud Infantil en CESFAM',
      'Antropometría estandarizada: peso, longitud o estatura y cálculo de edad cronológica exacta',
      'Iniciamos la evaluación nutricional realizando antropometría rigurosa según la edad del paciente.',
      [
        'Menor de 5 años (cero a cincuenta y nueve meses)',
        N(
          'q',
          '¿Cuál es el valor del indicador Peso para la Talla (P/T) en desviaciones estándar?',
          'Graficar en tablas OMS 2006 de Peso para la Talla según sexo',
          'En menores de cinco años evaluamos el indicador peso para la talla en las curvas de la Organización Mundial de la Salud.',
          [
            'P/T mayor o igual a +1.0 desviaciones estándar',
            N(
              'alert',
              'Malnutrición por Exceso en Menor de 5 Años',
              'Sobrepeso (+1.0 a +1.9 DE) u Obesidad (+2.0 DE o más) · Educación dietética sin restricción calórica',
              'Si el peso para la talla supera más una desviación diagnosticamos sobrepeso u obesidad e indicamos educación dietética.',
            ),
          ],
          [
            'P/T entre -0.9 y +0.9 desviaciones estándar con T/E normal',
            N(
              'ok',
              'Eutrófico con Crecimiento Armónico',
              'Mantener lactancia materna y alimentación saludable · Continuar controles sanos regulares',
              'Con peso para la talla armónico catalogamos al paciente como eutrófico y mantenemos sus controles sanos regulares.',
            ),
          ],
          [
            'P/T menor o igual a -1.0 desviaciones estándar',
            N(
              'do',
              'Riesgo de Desnutrición o Desnutrición Clínica',
              'Riesgo (-1.0 a -1.9 DE) o Desnutrición (menor o igual a -2.0 DE) · Auditoría de ingesta y control en 15 a 30 días',
              'Si cae bajo menos una desviación clasificamos riesgo de desnutrición o desnutrición y citamos a control en quince a treinta días.',
            ),
          ],
        ),
      ],
      [
        'Mayor o igual a 5 años (sesenta meses a diecinueve años)',
        N(
          'q',
          '¿Cuál es el valor del Índice de Masa Corporal para la Edad (IMC/E)?',
          'Cálculo de IMC y comparación en curvas OMS de IMC para la edad según sexo',
          'En niños desde los cinco años calculamos el índice de masa corporal y lo graficamos en las tablas de edad y sexo.',
          [
            'IMC/E mayor o igual a +1.0 desviaciones estándar',
            N(
              'alert',
              'Sobrepeso u Obesidad Escolar',
              'Sobrepeso (+1.0 a +1.9 DE) u Obesidad (+2.0 DE o más) · Plan de estilo de vida, ejercicio y control mensual',
              'Valores sobre más una desviación confirman sobrepeso u obesidad escolar requiriendo plan de actividad física y nutrición.',
            ),
          ],
          [
            'IMC/E entre -0.9 y +0.9 desviaciones estándar',
            N(
              'ok',
              'Estado Nutricional Eutrófico Escolar',
              'Alimentación balanceada, actividad física escolar y control anual habitual',
              'El escolar con índice normal continúa con pautas saludables de ejercicio y control anual del programa escolar.',
            ),
          ],
          [
            'IMC/E menor o igual a -1.0 desviaciones estándar',
            N(
              'do',
              'Bajo Peso o Desnutrición Escolar',
              'Bajo peso (-1.0 a -1.9 DE) o Desnutrición (menor o igual a -2.0 DE) · Descartar patología orgánica o trastornos de conducta alimentaria',
              'Cifras bajo menos una desviación exigen descartar patologías orgánicas o trastornos de conducta alimentaria.',
            ),
          ],
        ),
      ],
    ),
  },
};
