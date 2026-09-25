// Clase 18.15 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Atención inmediata del recién nacido, reanimación neonatal según algoritmo internacional, ventilación a presión positiva, técnica del masaje cardíaco y test de APGAR',
      say: 'Bienvenidos a la clase sobre atención inmediata del recién nacido y reanimación neonatal en sala de partos, uno de los temas más evaluados y de mayor impacto asistencial en el examen EUNACOM. En esta sesión dominaremos las tres preguntas iniciales al nacer, el concepto crucial del minuto de oro, los pasos correctivos de la ventilación con la mnemotecnia míster sopa, la técnica del masaje tres a uno y el cálculo exacto del test de APGAR. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiología de la transición perinatal',
      title: 'Transición Cardiorrespiratoria Fetal a Neonatal y Expansión Alveolar',
      nodes: [
        { id: 'pul', col: 0, row: 1, k: 'start', t: 'Pulmón fetal con líquido', s: 'Elevada resistencia vascular pulmonar y flujo sanguíneo derivado por shunts fetales' },
        { id: 'ven', col: 1, row: 1, k: 'mech', t: 'Primera respiración y aireación', s: 'Presión negativa intratorácica que desplaza el líquido hacia los linfáticos pulmonares' },
        { id: 'oxi', col: 2, row: 1, k: 'effect', t: 'Caída de resistencia pulmonar', s: 'El oxígeno alveolar causa vasodilatación masiva y cierre funcional del ductus arterioso' },
        { id: 'per', col: 3, row: 1, k: 'good', t: 'Circulación neonatal establecida', s: 'Perfusión sistémica dependiente del ventrículo izquierdo con intercambio gaseoso autónomo' },
      ],
      edges: [
        { from: 'pul', to: 'ven', label: 'pinzamiento y llanto' },
        { from: 'ven', to: 'oxi', label: 'oxigenación alveolar' },
        { from: 'oxi', to: 'per', label: 'cierre de cortocircuitos' },
      ],
      steps: [
        {
          show: ['pul', 'ven'],
          note: 'Eliminación del líquido pulmonar y primeras ventilaciones',
          say: 'Durante la vida fetal el alvéolo está lleno de líquido y la resistencia vascular pulmonar es muy elevada. Al nacer, el pinzamiento del cordón y las primeras respiraciones generan una potente presión negativa que desplaza el líquido hacia los capilares y linfáticos, permitiendo la entrada de aire.',
        },
        {
          show: ['oxi', 'per'],
          note: 'Vasodilatación pulmonar masiva y cierre de shunts fetales',
          say: 'La llegada de oxígeno al alvéolo produce una rápida relajación del lecho vascular pulmonar con drástica caída de las resistencias. El flujo sanguíneo se desvía masivamente a los pulmones, provocando el cierre funcional del foramen oval y del conducto arterioso para consolidar la circulación neonatal autónoma.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación inicial en sala de partos',
      title: 'Las Tres Preguntas Iniciales: Apego versus Reanimación',
      cards: [
        {
          title: 'Las Tres Preguntas Cardinales al Nacer',
          tag: 'Evaluación visual inmediata en los primeros cinco segundos',
          kind: 'key',
          items: [
            {
              t: '¿Es una gestación de término completa?',
              d: 'Edad gestacional mayor o igual a 37 semanas comprobada por FUR o ecografía precoz',
              say: 'La primera pregunta al recibir al recién nacido es verificar si es de término, es decir, si cumplió al menos treinta y siete semanas completas de gestación.',
            },
            {
              t: '¿Presenta un buen tono muscular activo?',
              d: 'Flexión activa de las cuatro extremidades, movimientos vigorosos y ausencia de flacidez o hipotonía',
              say: 'La segunda pregunta es evaluar el tono muscular, observando si el neonato mantiene sus cuatro extremidades flexionadas y con movilidad espontánea.',
            },
            {
              t: '¿Respira o llora de forma enérgica?',
              d: 'Presencia de esfuerzo respiratorio regular, expansión torácica rítmica o llanto vigoroso inmediato',
              say: 'La tercera pregunta es constatar si el recién nacido respira de manera rítmica o emite un llanto enérgico inmediato que expanda ambos hemitórax.',
            },
          ],
        },
        {
          title: 'Decisión Inmediata de Destino del Neonato',
          tag: 'Contacto piel con piel precoz versus cuna de calor radiante',
          kind: 'criteria',
          items: [
            {
              t: 'Respuesta afirmativa a las tres: Apego precoz inmediato',
              d: 'Neonato vigoroso de término: colocar directo sobre el tórax materno en contacto piel a piel para secado y lactancia en la primera hora',
              say: 'Si la respuesta es afirmativa a las tres preguntas, el recién nacido está vigoroso y debe colocarse de inmediato sobre el pecho desnudo de su madre para iniciar apego precoz ininterrumpido.',
            },
            {
              t: 'Cualquier respuesta negativa: Cuna de calor radiante',
              d: 'Si es pretérmino, está hipotónico o en apnea, trasladar de inmediato a la cuna de calor radiante para iniciar reanimación',
              say: 'Si alguna de las tres preguntas es negativa, el neonato no es vigoroso o es prematuro, debiendo trasladarse sin pérdida de tiempo a la cuna de calor radiante para reanimación.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'El minuto de oro',
      title: 'Los Pasos Iniciales en la Cuna Radiante: Primeros Treinta Segundos',
      cards: [
        {
          title: 'Secuencia Estructurada de Pasos Iniciales',
          tag: 'Ejecutar en los primeros treinta segundos de vida',
          kind: 'key',
          items: [
            {
              t: 'Proporcionar calor radiante inmediato',
              d: 'Colocar bajo calefactor radiante precalentado para evitar el enfriamiento y la vasoconstricción pulmonar refleja',
              say: 'Lo primero es colocar al niño bajo la cuna de calor radiante precalentada para prevenir la pérdida calórica, factor que agravaría la acidosis metabólica.',
            },
            {
              t: 'Posicionar la vía aérea en posición de olfateo',
              d: 'Ligera extensión cervical colocando un rollo bajo los hombros; evitar hiperextensión o flexión que colapsen la tráquea',
              say: 'Luego se posiciona la cabeza en ligera extensión, en la clásica posición de olfateo neutral, que alinea los ejes laríngeos y mantiene la faringe permeable.',
            },
            {
              t: 'Secar meticulosamente y retirar campos húmedos',
              d: 'Secado de cabeza y cuerpo con paños tibios, cambiando de inmediato las compresas mojadas para frenar la evaporación',
              say: 'Se seca todo el cuerpo y la cabeza con paños tibios, retirando de inmediato los campos húmedos para eliminar la pérdida de calor por evaporación.',
            },
          ],
        },
        {
          title: 'Estimulación y Aspiración: Criterios Restrictivos',
          tag: 'Evitar maniobras agresivas innecesarias',
          kind: 'alert',
          items: [
            {
              t: 'Estimulación táctil breve y segura',
              d: 'Friccionar suavemente el dorso o dar dos toques en las plantas de los pies; no zamarrear ni golpear al recién nacido',
              say: 'La estimulación táctil debe ser suave pero firme, frotando la espalda o dando palmadas suaves en las plantas de los pies por pocos segundos.',
            },
            {
              t: 'Aspiración de vía aérea: Solo si hay obstrucción evidente',
              d: 'No aspirar de rutina; solo aspirar boca y luego nariz con pera de goma si existen secreciones abundantes que impiden el paso de aire',
              say: 'La aspiración de la vía aérea no es de rutina. Solo se realiza si hay secreciones abundantes que obstruyan la respiración, aspirando primero la boca y luego la nariz.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación cardiorrespiratoria crítica',
      title: 'Evaluación Simultánea: Respiración y Frecuencia Cardíaca',
      cards: [
        {
          title: 'Los Dos Parámetros Fisiológicos Determinantes',
          tag: 'Medición simultánea al cumplir treinta a sesenta segundos',
          kind: 'criteria',
          items: [
            {
              t: 'Esfuerzo respiratorio: Apnea o boqueo (gasping)',
              d: 'Observar la dinámica torácica; los movimientos respiratorios agónicos o entrecortados equivalen a paro respiratorio',
              say: 'Evaluamos de inmediato la respiración. La presencia de apnea o de respiración en boqueo agónico equivale clínicamente a paro respiratorio inminente.',
            },
            {
              t: 'Auscultación precordial de la frecuencia cardíaca',
              d: 'Auscultar con fonendoscopio el latido precordial contando durante seis segundos y multiplicando el resultado por diez',
              say: 'La frecuencia cardíaca se evalúa auscultando el precordio con fonendoscopio durante seis segundos y multiplicando por diez para obtener los latidos por minuto.',
            },
          ],
        },
        {
          title: 'Toma de Decisión según Frecuencia Cardíaca',
          tag: 'El umbral sagrado de cien latidos por minuto',
          kind: 'alert',
          items: [
            {
              t: 'Frecuencia menor a cien latidos por minuto o apnea',
              d: 'Indicación formal, absoluta e impostergable de Ventilación a Presión Positiva (VPP) en el minuto de oro',
              say: 'Si la frecuencia cardíaca es menor a cien latidos por minuto o el niño está en apnea, la indicación inmediata e incuestionable es iniciar ventilación a presión positiva.',
            },
            {
              t: 'Frecuencia mayor a cien con dificultad respiratoria',
              d: 'Si respira pero tiene quejido o retracción intercostal, aplicar CPAP precoz por vía nasal con PEEP de cinco centímetros de agua',
              say: 'Si la frecuencia cardíaca es mayor a cien pero el niño presenta quejido o tiraje, no requiere ventilación con bolsa sino presión positiva continua nasal.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Técnica de reanimación ventilatoria',
      title: 'Ventilación a Presión Positiva (VPP): El Pilar Fundamental',
      nodes: [
        { id: 'ind', col: 0, row: 1, k: 'start', t: 'FC menor a 100 o apnea', s: 'Reevaluación a los 30 segundos de vida que muestra bradicardia o apnea' },
        { id: 'mas', col: 1, row: 1, k: 'mech', t: 'Máscara anatómica sellada', s: 'Colocación sobre mentón, boca y nariz asegurando sello hermético' },
        { id: 'rit', col: 2, row: 1, k: 'good', t: 'Ritmo: cuarenta a sesenta', s: 'Cadencia auditiva: ventilo, dos, tres, ventilo, dos, tres por minuto' },
        { id: 'eva', col: 3, row: 1, k: 'alert', t: 'Expansión torácica visible', s: 'Si el tórax no se expande no hay ventilación alveolar efectiva' },
      ],
      edges: [
        { from: 'ind', to: 'mas', label: 'indicación VPP' },
        { from: 'mas', to: 'rit', label: 'inicio de insuflación' },
        { from: 'rit', to: 'eva', label: 'constatar elevación' },
      ],
      steps: [
        {
          show: ['ind', 'mas'],
          note: 'Colocación de interfase y sello hermético facial',
          say: 'Ante una frecuencia cardíaca menor a cien latidos por minuto o apnea, se coloca la máscara facial anatómica cubriendo mentón, boca y nariz con un sello hermético con la mano en letra C.',
        },
        {
          show: ['rit', 'eva'],
          note: 'Cadencia de ventilación y confirmación visual de expansión',
          say: 'Se ventila a una frecuencia de cuarenta a sesenta insuflaciones por minuto al ritmo de ventilo, dos, tres, comprobando visualmente que el tórax se eleve suavemente con cada ventilación.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Oxigenoterapia y monitorización',
      title: 'Concentración Inicial de Oxígeno y Metas de Saturación Preductal',
      head: ['Tiempo de Vida', 'Meta Saturación Preductal', 'FiO2 Inicial Término', 'FiO2 Inicial Pretérmino'],
      rows: [
        {
          cells: ['Un minuto de vida', 'Sesenta a sesenta y cinco por ciento', 'Veintiún por ciento (aire ambiental)', 'Veintiuno a treinta por ciento'],
          say: 'Al minuto uno la saturación preductal fisiológica es de apenas sesenta a sesenta y cinco por ciento. En recién nacidos de término se inicia con aire ambiental.',
        },
        {
          cells: ['Dos minutos de vida', 'Sesenta y cinco a setenta por ciento', 'Titular según oximetría', 'Titular con mezclador'],
          say: 'A los dos minutos de vida la saturación sube a sesenta y cinco a setenta por ciento, titulando con mezclador para no sobreoxigenar.',
        },
        {
          cells: ['Cinco minutos de vida', 'Ochenta a ochenta y cinco por ciento', 'Ajustar para evitar hiperoxia', 'Evitar daño por radicales libres'],
          say: 'A los cinco minutos la meta es de ochenta a ochenta y cinco por ciento, evitando la hiperoxia que produce estrés oxidativo pulmonar y retinopatía.',
        },
        {
          cells: ['Diez minutos de vida', 'Ochenta y cinco a noventa y cinco por ciento', 'Saturación neonatal definitiva', 'Saturación neonatal definitiva'],
          say: 'Hacia los diez minutos el recién nacido alcanza su nivel de saturación preductal definitivo entre ochenta y cinco y noventa y cinco por ciento.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Regla anatómica fundamental',
      title: 'Sensor de Oximetría en Mano Derecha: La Saturación Preductal',
      cards: [
        {
          title: 'Fundamento Anatómico de la Mano Derecha',
          tag: 'Por qué la muñeca derecha es sagrada en sala de partos',
          kind: 'key',
          items: [
            {
              t: 'Origen vascular del tronco braquiocefálico',
              d: 'El tronco arterial braquiocefálico emerge del arco aórtico antes de la desembocadura del ductus arterioso persistente',
              say: 'El sensor de oximetría debe colocarse estrictamente en la mano o muñeca derecha porque la arteria subclavia derecha nace del arco aórtico antes del ductus arterioso.',
            },
            {
              t: 'Reflejo fiel de la oxigenación cerebral y coronaria',
              d: 'La sangre que irriga el miembro superior derecho tiene idéntica saturación de oxígeno a la que perfunde el cerebro y el miocardio',
              say: 'Esta sangre preductal refleja con exactitud la oxigenación real que están recibiendo las arterias coronarias del miocardio y las arterias carótidas que nutren el cerebro.',
            },
          ],
        },
        {
          title: 'Peligro de la Medición en Extremidades Izquierdas o Inferiores',
          tag: 'Contaminación con sangre desaturada postductal',
          kind: 'alert',
          items: [
            {
              t: 'Mezcla venosa a través del conducto arterioso',
              d: 'En pies y mano izquierda la sangre se mezcla con flujo desoxigenado que viaja de derecha a izquierda por el ductus',
              say: 'En las piernas o en la mano izquierda la medición puede estar falseada por sangre desoxigenada postductal proveniente del ventrículo derecho a través del ductus.',
            },
            {
              t: 'Riesgo de sobreoxigenación iatrogénica por lectura errónea',
              d: 'Una lectura falsamente baja en el pie puede inducir al reanimador a subir el oxígeno al 100%, generando daño oxidativo grave',
              say: 'Guiarse por un sensor colocado en el pie induciría a aumentar la concentración de oxígeno de forma iatrogénica por creer erróneamente que el niño está hipoxémico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pasos de corrección ventilatoria',
      title: 'Falla de Expansión Torácica: Algoritmo Míster SOPA',
      cards: [
        {
          title: 'Los Seis Pasos Correctivos Míster SOPA',
          tag: 'Aplicar secuencialmente si el tórax no se mueve con la VPP',
          kind: 'criteria',
          items: [
            {
              t: 'M y R: Máscara reacomodar y Reposicionar la cabeza',
              d: 'Reajustar el sello facial en C y volver a colocar la cabeza en posición neutra de olfateo; volver a probar ventilación',
              say: 'La letra M corresponde a reacomodar la máscara logrando un sello hermético, y la R a reposicionar la cabeza en ligera extensión de olfateo.',
            },
            {
              t: 'S y O: Succión de boca y nariz, y Open mouth (abrir boca)',
              d: 'Aspirar secreciones de cavidad oral y fosas nasales, y abrir ligeramente la boca del niño levantando la mandíbula',
              say: 'La letra S indica succionar secreciones de boca y nariz, y la letra O abrir la boca del paciente para reducir la resistencia al flujo de aire.',
            },
            {
              t: 'P y A: Presión aumentar y Vía aérea Alternativa',
              d: 'Incrementar la presión de insuflación progresivamente hasta 30 cm de agua y si persiste sin elevar tórax colocar tubo endotraqueal',
              say: 'La letra P manda a aumentar gradualmente la presión de insuflación, y la letra A obliga a establecer una vía aérea alternativa como intubación endotraqueal.',
            },
          ],
        },
        {
          title: 'Regla de Oro: Confirmar VPP Efectiva',
          tag: 'Prohibido pasar a masaje cardíaco sin ventilación eficaz',
          kind: 'alert',
          items: [
            {
              t: 'El corazón responde a la expansión pulmonar',
              d: 'La causa primaria de bradicardia en el recién nacido es la hipoxia asfíctica por colapso alveolar',
              say: 'La causa casi universal de bradicardia neonatal es la hipoxia asfíctica por colapso alveolar. Al lograr una expansión pulmonar efectiva el corazón recupera su frecuencia.',
            },
            {
              t: 'Treinta segundos de VPP con adecuada elevación torácica',
              d: 'Nunca iniciar masaje cardíaco si no se ha garantizado al menos medio minuto de ventilación efectiva que expanda el tórax',
              say: 'Jamás se debe pasar al masaje cardíaco sin haber certificado treinta segundos completos de ventilación a presión positiva efectiva que movilice el tórax.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Soporte hemodinámico avanzado',
      title: 'Masaje Cardíaco Neonatal: Indicación y Técnica Tres a Uno',
      nodes: [
        { id: 'bra', col: 0, row: 1, k: 'start', t: 'FC menor a sesenta lpm', s: 'Persistencia de bradicardia severa tras treinta segundos de VPP efectiva' },
        { id: 'pul', col: 1, row: 1, k: 'mech', t: 'Técnica de dos pulgares', s: 'Abrazar el tórax y presionar tercio inferior del esternón un tercio del diámetro' },
        { id: 'rel', col: 2, row: 1, k: 'good', t: 'Relación 3 compresiones : 1 ventilación', s: 'Cadencia: un y dos y tres y ventilo y un y dos y tres y ventilo coordinado' },
        { id: 'cie', col: 3, row: 1, k: 'alert', t: 'Oxígeno al cien por ciento', s: 'Aumentar simultáneamente la concentración de oxígeno a FiO2 cien por ciento' },
      ],
      edges: [
        { from: 'bra', to: 'pul', label: 'criterio estricto' },
        { from: 'pul', to: 'rel', label: 'coordinación' },
        { from: 'rel', to: 'cie', label: 'hiperoxigenación' },
      ],
      steps: [
        {
          show: ['bra', 'pul'],
          note: 'Indicación de compresiones y técnica de los dos pulgares',
          say: 'Si tras al menos treinta segundos de ventilación a presión positiva efectiva la frecuencia cardíaca se mantiene por debajo de sesenta latidos por minuto, se inicia masaje cardíaco con la técnica de los dos pulgares sobre el tercio inferior del esternón.',
        },
        {
          show: ['rel', 'cie'],
          note: 'Coordinación tres a uno y elevación de FiO2 al cien por ciento',
          say: 'El masaje se coordina rígidamente con la ventilación a una relación de tres compresiones por una ventilación, sumando noventa compresiones y treinta ventilaciones por minuto, aumentando simultáneamente la fracción inspirada de oxígeno al cien por ciento.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo farmacológico de reanimación',
      title: 'Adrenalina y Expansores de Volumen en Sala de Partos',
      cards: [
        {
          title: 'Adrenalina Endovenosa: Vía Umbilical',
          tag: 'Indicada si FC sigue menor a sesenta tras sesenta segundos de masaje',
          kind: 'pharma',
          items: [
            {
              t: 'Vía de administración de elección: Catéter venoso umbilical',
              d: 'Canalización rápida de la vena umbilical introduciendo el catéter solo 2 a 4 centímetros hasta obtener retorno venoso libre',
              say: 'La vía de elección para administrar adrenalina es el catéter venoso umbilical insertado rápidamente dos a cuatro centímetros hasta obtener retorno venoso.',
            },
            {
              t: 'Dosis exacta y concentración diluida uno en diez mil',
              d: 'Dosis: 0.02 mg/kg (equivalente a 0.2 mL/kg de la dilución al 1:10.000) seguido de bolo de suero fisiológico para lavado',
              say: 'La dosis recomendada es de cero punto cero dos miligramos por kilo de la solución diluida uno en diez mil, seguida de un bolo de solución fisiológica.',
            },
          ],
        },
        {
          title: 'Expansión de Volumen: Suero Fisiológico al 0.9%',
          tag: 'Solo ante sospecha o evidencia de shock hipovolémico',
          kind: 'pharma',
          items: [
            {
              t: 'Indicación precisa: Pérdida aguda de sangre materna o fetal',
              d: 'Desprendimiento prematuro de placenta normoinserta, vasa previa rota o recién nacido pálido con pulsos débiles que no responde',
              say: 'Los expansores de volumen se reservan para neonatos con sospecha de choque hipovolémico por sangrado materno o palidez extrema refractaria.',
            },
            {
              t: 'Solución cristaloide y velocidad de infusión',
              d: 'Suero fisiológico a diez mililitros por kilo administrado por vía endovenosa en un período de cinco a diez minutos',
              say: 'Se administra suero fisiológico isotónico a dosis de diez mililitros por kilo infundido en un lapso de cinco a diez minutos por la vena umbilical.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación de vitalidad neonatal',
      title: 'El Test de APGAR: Significado Clínico Real y Desmitificación',
      cards: [
        {
          title: 'El APGAR NO Define el Inicio de la Reanimación',
          tag: 'Principio fundamental de la Academia Americana de Pediatría',
          kind: 'alert',
          items: [
            {
              t: 'La reanimación inicia de inmediato sin esperar al minuto',
              d: 'Si el niño no respira o está bradicárdico al nacer, se interviene de inmediato; no se posterga ninguna maniobra para calcular APGAR',
              say: 'El puntaje de APGAR no se utiliza jamás para decidir el inicio de la reanimación. Las maniobras de reanimación se inician en los primeros segundos de vida sin esperar el cumplimiento del primer minuto.',
            },
            {
              t: 'Evaluación al minuto uno y al minuto cinco de vida',
              d: 'El APGAR al minuto 1 refleja la tolerancia al trabajo de parto; el APGAR a los 5 minutos mide la respuesta a las maniobras terapéuticas',
              say: 'El APGAR se evalúa al minuto uno para medir cómo toleró el parto, y a los cinco minutos para cuantificar la eficacia de las maniobras de asistencia realizadas.',
            },
          ],
        },
        {
          title: 'Interpretación del Puntaje Total de Cero a Diez',
          tag: 'Estratificación pronóstica del recién nacido',
          kind: 'criteria',
          items: [
            {
              t: 'Puntaje de siete a diez: Recién nacido vigoroso',
              d: 'El puntaje más frecuente en niños sanos es 9 puntos debido a la acrocianosis fisiológica de manos y pies al primer minuto',
              say: 'Un puntaje de siete a diez puntos clasifica al niño como vigoroso, siendo nueve puntos la puntuación más común al minuto por acrocianosis normal.',
            },
            {
              t: 'Puntaje menor a siete: Depresión neonatal que exige extender',
              d: 'Puntaje de 4 a 6 es depresión moderada; 0 a 3 es depresión severa; si el puntaje a los 5 minutos es menor a 7 se evalúa cada 5 min hasta 20 min',
              say: 'Un puntaje menor a siete refleja depresión neonatal; si a los cinco minutos persiste bajo siete, se debe continuar reevaluando cada cinco minutos hasta los veinte minutos.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Desglose del puntaje de apgar',
      title: 'Los Cinco Parámetros del Test de APGAR Puntuados de Cero a Dos',
      head: ['Parámetro Clínico', 'Cero Puntos', 'Un Punto', 'Dos Puntos'],
      rows: [
        {
          cells: ['Apariencia (Color)', 'Cianosis central o palidez', 'Cuerpo rosado con acrocianosis', 'Completamente rosado'],
          say: 'En coloración, la palidez o cianosis total da cero, el cuerpo rosado con acrocianosis distal otorga un punto y completamente rosado dos puntos.',
        },
        {
          cells: ['Pulso (Frecuencia)', 'Ausente (cero lpm)', 'Menor a cien latidos por minuto', 'Mayor a cien latidos por minuto'],
          say: 'En frecuencia cardíaca, ausente es cero, menor a cien latidos por minuto da un punto y sobre cien latidos por minuto suma dos puntos.',
        },
        {
          cells: ['Gesticulación (Reflejo)', 'Sin respuesta a estímulos', 'Mueca o gesticulación débil', 'Llanto vigoroso o estornudo'],
          say: 'En reflejos, la falta de respuesta es cero puntos, una mueca débil da un punto y el llanto vigoroso o tos suma dos puntos.',
        },
        {
          cells: ['Actividad (Tono)', 'Completamente flácido', 'Cierta flexión de extremidades', 'Movimientos activos y buen tono'],
          say: 'En tono muscular, la flacidez da cero puntos, una flexión débil da un punto y la flexión activa con buen tono suma dos puntos.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de actuación en sala de partos',
      title: 'Algoritmo Oficial de Reanimación Neonatal de la Academia Americana de Pediatría',
      say: 'Examinemos el algoritmo internacional de reanimación neonatal paso a paso, desde las tres preguntas iniciales hasta la ventilación, el masaje cardíaco y la administración de adrenalina.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.3.001',
      title: 'Conducta Inmediata ante Neonato que No Respira al Nacer',
      stem: 'Un recién nacido de 39 semanas nace tras un parto vaginal sin incidentes. Al nacer no llora y se encuentra hipotónico sobre la mesa de atención inmediata.',
      question: '¿Cuál es el primer paso a realizar?',
      options: [
        { letter: 'A', text: 'Iniciar masaje cardíaco de inmediato en relación 3:1' },
        { letter: 'B', text: 'Intubación orotraqueal directa y conexión a ventilador mecánico' },
        { letter: 'C', text: 'Trasladar a cuna de calor radiante, posicionar vía aérea en olfateo, secar meticulosamente y estimular' },
        { letter: 'D', text: 'Administrar adrenalina en bolo por vena umbilical' },
        { letter: 'E', text: 'Calcular el test de APGAR al minuto antes de tocar al paciente' },
      ],
      correct: 'C',
      explanation: 'Ante un recién nacido que no responde favorablemente a las tres preguntas iniciales (en este caso no llora y está hipotónico), el paso inicial e impostergable dentro de los primeros 30 segundos es llevarlo a la cuna de calor radiante, colocar la cabeza en posición neutra o de olfateo para permeabilizar la vía aérea, secar exhaustivamente todo el cuerpo retirando los paños húmedos y realizar estimulación táctil suave en el dorso o plantas. Solo si tras estos pasos persiste en apnea o con FC < 100 lpm se procede a la VPP.',
      say: {
        stem: 'Recién nacido de treinta y nueve semanas que al nacer no llora y se encuentra hipotónico.',
        question: '¿Cuál es el primer paso a realizar de forma inmediata?',
        options: 'La opción A masaje cardíaco inmediato. La B intubación directa. La C cuna de calor radiante, posicionar vía aérea, secar y estimular. La D adrenalina umbilical. La E calcular APGAR. Aplica la secuencia cronológica inicial. Piénsalo.',
        answer: 'La respuesta correcta es la C. El primer paso consiste en trasladar a cuna radiante, posicionar la cabeza, secar meticulosamente y estimular.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.3.001',
      title: 'Cálculo del Test de APGAR al Primer Minuto de Vida',
      stem: 'Al evaluar a un recién nacido de término al minuto de vida se constata: cuerpo rosado con manos y pies azulados, frecuencia cardíaca de 120 latidos por minuto, llanto vigoroso al retirar campos, flexión activa de las cuatro extremidades y respiración regular y enérgica.',
      question: '¿Cuál es el puntaje de APGAR exacto asignado a este recién nacido?',
      options: [
        { letter: 'A', text: '10 puntos' },
        { letter: 'B', text: '9 puntos' },
        { letter: 'C', text: '8 puntos' },
        { letter: 'D', text: '7 puntos' },
        { letter: 'E', text: '6 puntos' },
      ],
      correct: 'B',
      explanation: 'El desglose del APGAR al minuto 1 es: 1) Color: cuerpo rosado con acrocianosis distal = 1 punto; 2) Frecuencia cardíaca: 120 lpm (> 100) = 2 puntos; 3) Reflejos o gesticulación: llanto vigoroso al estímulo = 2 puntos; 4) Tono muscular: flexión activa y buen tono = 2 puntos; 5) Respiración: llanto regular y enérgico = 2 puntos. Total = 1 + 2 + 2 + 2 + 2 = 9 puntos. Es el puntaje más característico en un recién nacido de término sano, dado que la acrocianosis periférica es un fenómeno vasomotor totalmente fisiológico en los primeros minutos de adaptación.',
      say: {
        stem: 'Recién nacido al minuto con cuerpo rosado y extremidades azuladas, frecuencia cardíaca de ciento veinte, llanto vigoroso, buen tono muscular y respiración regular.',
        question: '¿Cuál es el puntaje de APGAR correspondiente?',
        options: 'La opción A diez puntos. La B nueve puntos. La C ocho puntos. La D siete puntos. La E seis puntos. Suma los cinco parámetros clínicos. Piénsalo.',
        answer: 'La respuesta correcta es la B. La suma de los parámetros arroja exactamente nueve puntos debido a la acrocianosis distal que resta un punto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.3.001',
      title: 'Conducta ante Bradicardia Persistente tras VPP Efectiva',
      stem: 'Durante la reanimación de un recién nacido que nació en paro respiratorio, se administraron 30 segundos de ventilación a presión positiva (VPP) efectiva con intubación endotraqueal que expande adecuadamente ambos hemitórax. Sin embargo, en la reevaluación su frecuencia cardíaca auscultada es de 48 latidos por minuto.',
      question: '¿Cuál es el siguiente paso protocolizado según el algoritmo internacional?',
      options: [
        { letter: 'A', text: 'Continuar con VPP exclusiva durante 10 minutos más a FiO2 21%' },
        { letter: 'B', text: 'Iniciar masaje cardíaco externo coordinado con la ventilación en relación 3:1 y aumentar la FiO2 al 100%' },
        { letter: 'C', text: 'Administrar bicarbonato de sodio en bolo rápido por vía periférica' },
        { letter: 'D', text: 'Desfibrilar a 2 Joules por kilo con paletas pediátricas' },
        { letter: 'E', text: 'Extubar y pasar a máscara de ventilación libre' },
      ],
      correct: 'B',
      explanation: 'Si tras al menos 30 segundos de Ventilación a Presión Positiva (VPP) efectiva con adecuada expansión de ambos hemitórax la frecuencia cardíaca persiste por debajo de 60 latidos por minuto, la indicación inmediata y protocolizada es iniciar Masaje Cardíaco coordinado con la ventilación a una relación de 3 compresiones por 1 ventilación (3:1), aumentando simultáneamente la concentración inspirada de oxígeno (FiO2) al 100%. El bicarbonato está desaconsejado y la desfibrilación no aplica en la bradicardia hipóxica neonatal.',
      say: {
        stem: 'Recién nacido intubado con treinta segundos de ventilación a presión positiva efectiva cuya frecuencia cardíaca auscultada persiste en cuarenta y ocho latidos por minuto.',
        question: '¿Cuál es el siguiente paso protocolizado según el algoritmo internacional?',
        options: 'La opción A continuar con ventilación exclusiva a aire ambiental. La B iniciar masaje cardíaco coordinado tres a uno y aumentar la fracción de oxígeno al cien por ciento. La C bicarbonato de sodio en bolo. La D desfibrilación inmediata. La E extubar. Recuerda el umbral de sesenta latidos. Piénsalo.',
        answer: 'La respuesta correcta es la B. Con frecuencia menor a sesenta tras ventilación efectiva se inicia masaje cardíaco tres a uno con oxígeno al cien por ciento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.3.001',
      title: 'Fundamento Anatómico del Sensor en Mano Derecha',
      stem: '¿Por qué motivo el sensor de oximetría de pulso debe colocarse estrictamente en la mano o muñeca DERECHA durante la reanimación en sala de partos?',
      options: [
        { letter: 'A', text: 'Porque las arterias de la mano izquierda son anatómicamente más estrechas' },
        { letter: 'B', text: 'Porque mide la saturación preductal, reflejando fielmente la oxigenación que reciben el cerebro y el miocardio' },
        { letter: 'C', text: 'Porque en los pies la oximetría es siempre idéntica a la sangre fetal' },
        { letter: 'D', text: 'Para evitar interferencias con el cateterismo de la vena umbilical' },
        { letter: 'E', text: 'Por convención aleatoria sin fundamento hemodinámico' },
      ],
      correct: 'B',
      explanation: 'El tronco arterial braquiocefálico (que da origen a la arteria carótida común derecha y a la arteria subclavia derecha que irriga el miembro superior derecho) emerge del arco aórtico antes de la inserción anatómica del ductus arterioso. Por lo tanto, la muñeca y mano derecha reciben sangre con saturación preductal, la cual representa fielmente la concentración de oxígeno que llega a las arterias coronarias miocárdicas y a los hemisferios cerebrales. En extremidades inferiores y mano izquierda la saturación es postductal y puede estar disminuida por cortocircuito de derecha a izquierda.',
      say: {
        stem: 'Pregunta sobre la justificación anatómica y hemodinámica de ubicar el sensor de oximetría en la mano o muñeca derecha.',
        question: '¿Por qué motivo el sensor debe colocarse estrictamente en la mano derecha durante la reanimación?',
        options: 'La opción A por mayor calibre arterial. La B porque mide la saturación preductal reflejando fielmente la oxigenación del cerebro y miocardio. La C porque en los pies es idéntica a sangre fetal. La D evitar interferencia con el ombligo. La E convención aleatoria. Recuerda la anatomía aórtica. Piénsalo.',
        answer: 'La respuesta correcta es la B. La mano derecha recibe irrigación preductal previa al conducto arterioso, reflejando la oxigenación miocárdica y cerebral.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en Reanimación Neonatal',
      cards: [
        {
          title: 'Prioridad Absoluta de la Ventilación Alveolar',
          tag: 'El aire es el fármaco más potente en sala de partos',
          kind: 'key',
          items: [
            {
              t: 'La causa número uno de bradicardia es la hipoxia',
              d: 'Ventilar eficazmente a presión positiva es la maniobra que revierte más del 99% de las depresiones perinatales',
              say: 'Recuerden siempre que la ventilación efectiva con bolsa o reanimador en T es la clave absoluta de la reanimación neonatal, revirtiendo casi la totalidad de las depresiones.',
            },
            {
              t: 'Míster SOPA antes de iniciar compresiones cardíacas',
              d: 'Comprobar expansión torácica efectiva antes de catalogar una bradicardia como refractaria; nunca masajear sin expandir',
              say: 'Apliquen la mnemotecnia míster sopa si el tórax no se eleva, asegurando un sello perfecto antes de plantearse el inicio de compresiones torácicas.',
            },
          ],
        },
        {
          title: 'Parámetros Sagrados y Uso Racional de Oxígeno',
          tag: 'Evitar el daño por radicales libres e hiperoxia',
          kind: 'pharma',
          items: [
            {
              t: 'Recién nacido de término inicia siempre con aire al 21%',
              d: 'El oxígeno al 100% solo se utiliza cuando se inician compresiones cardíacas o tras intubación guiada por saturación',
              say: 'En el recién nacido de término se inicia siempre la ventilación con aire ambiental al veintiún por ciento, reservando el cien por ciento para el masaje cardíaco.',
            },
            {
              t: 'Sensor preductal en muñeca derecha y APGAR al 1 y 5 min',
              d: 'Mano derecha para saturación de cerebro y corazón; el APGAR evalúa vitalidad pero no demora la reanimación',
              say: 'El oxímetro se coloca siempre en la muñeca derecha. Si te llevas una sola idea de hoy: la ventilación a presión positiva es la maniobra más importante de la reanimación neonatal y nunca debe postergarse por calcular el puntaje de APGAR. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Reanimación Neonatal en Sala de Partos (AAP/AHA 8va Edición)',
    root: N(
      'start',
      'Nacimiento del Recién Nacido: Tres Preguntas Inmediatas',
      '¿Es de término? ¿Tiene buen tono muscular? ¿Respira o llora vigorosamente?',
      'Al momento del parto formulamos de inmediato las tres preguntas cardinales de vitalidad.',
      [
        'Sí a las tres preguntas: Recién Nacido de Término Vigoroso',
        N(
          'ok',
          'Apego Precoz Piel a Piel con la Madre y Cuidados de Rutina',
          'Colocar en contacto piel con piel sobre el pecho materno · Secar, cubrir con manta tibia, permeabilizar vía aérea solo si es necesario y fomentar lactancia materna en la primera hora',
          'Si el neonato es de término, tiene buen tono y respira enérgicamente se indica apego piel con piel directo con su madre.',
        ),
      ],
      [
        'No a alguna pregunta: Neonato Deprimido o Prematuro',
        N(
          'alert',
          'Minuto de Oro: Traslado Inmediato a Cuna de Calor Radiante (Primeros 30 Segundos)',
          'Calentar bajo cuna radiante · Posicionar cabeza en olfateo · Secar cuerpo y retirar paños húmedos · Estimular dorso suavemente · Aspirar boca y nariz solo si hay secreciones obstructivas',
          'Llevamos al neonato a la cuna radiante para calentar, posicionar en olfateo, secar, estimular y despejar secreciones.',
        ),
        N(
          'q',
          '¿Frecuencia Cardíaca menor a 100 lpm, Apnea o Respiración en Boqueo (Gasping)?',
          'Auscultación precordial con fonendoscopio durante 6 segundos y observación de esfuerzo ventilatorio',
          'Evaluamos simultáneamente la presencia de apnea y la frecuencia cardíaca mediante auscultación precordial.',
          [
            'Sí: FC menor a 100 lpm o persistencia de apnea / boqueo',
            N(
              'alert',
              'Iniciar Ventilación a Presión Positiva (VPP) Inmediata',
              'Ventilación con máscara facial a 40-60 insuflaciones por minuto · FiO2 21% en término o 21-30% en pretérmino · Colocar sensor de oximetría en mano derecha · Vigilar expansión torácica',
              'Iniciamos de inmediato ventilación a presión positiva a cuarenta a sesenta por minuto con sensor preductal en mano derecha.',
            ),
            N(
              'q',
              '¿El tórax se expande adecuadamente con la VPP administrada?',
              'Inspección visual directa de la excursión de ambos hemitórax con cada insuflación',
              'Verificamos si el tórax se eleva con cada ventilación administrada.',
              [
                'No: Tórax no se expande',
                N(
                  'alert',
                  'Pasos Correctivos MR. SOPA y Vía Aérea Avanzada',
                  'Máscara reacomodar · Reposicionar cabeza · Succión de boca y nariz · Open mouth · Presión aumentar · Vía aérea alternativa (Intubación orotraqueal con tubo según peso)',
                  'Aplicamos la secuencia correctiva míster sopa e intubamos si el tórax no se expande adecuadamente.',
                ),
              ],
              [
                'Sí: Tórax se expande con 30 segundos de VPP efectiva',
                N(
                  'q',
                  '¿Frecuencia Cardíaca auscultada tras 30 segundos de VPP efectiva?',
                  'Reevaluación auscultatoria de la frecuencia cardíaca',
                  'Reevaluamos la frecuencia cardíaca tras treinta segundos de ventilación efectiva.',
                  [
                    'FC menor a 60 latidos por minuto',
                    N(
                      'refer',
                      'Masaje Cardíaco 3:1 + Aumentar FiO2 al 100% + Intubación Obligatoria',
                      'Compresiones con técnica de dos pulgares en tercio inferior de esternón · Coordinación 3:1 (90 compresiones y 30 ventilaciones/min) · FiO2 100% · Si FC < 60 a 60 seg: Adrenalina umbilical',
                      'Si la frecuencia es menor a sesenta iniciamos masaje cardíaco tres a uno con oxígeno al cien por ciento y vía aérea avanzada.',
                    ),
                  ],
                  [
                    'FC entre 60 y 99 latidos por minuto',
                    N(
                      'do',
                      'Continuar VPP Efectiva y Ajustar FiO2 según Oximetría Preductal',
                      'Mantener ventilación a presión positiva efectiva · Titular FiO2 según metas de saturación por minuto de vida · Reevaluar FC cada 30 segundos hasta superar los 100 lpm',
                      'Mantenemos la ventilación a presión positiva vigilando la oximetría preductal hasta superar los cien latidos.',
                    ),
                  ],
                  [
                    'FC mayor o igual a 100 latidos por minuto',
                    N(
                      'ok',
                      'Disminución Gradual de VPP, Transición a Respiración Espontánea y CPAP SOS',
                      'Suspender VPP cuando respire espontáneamente · CPAP si persiste dificultad respiratoria con FC > 100 · Monitorización post reanimación en neonatología',
                      'Al superar los cien latidos retiramos progresivamente la ventilación y evaluamos necesidad de presión positiva continua.',
                    ),
                  ],
                ),
              ],
            ),
          ],
          [
            'No: FC mayor o igual a 100 lpm con respiración espontánea pero con dificultad',
            N(
              'ok',
              'Aplicación de CPAP Nasal Precoz y Cuidados Post Reanimación',
              'CPAP nasal con PEEP de 5 cm H2O · Sensor en mano derecha · Titular FiO2 con mezclador · Traslado a unidad de cuidados intensivos neonatales si requiere soporte continuo',
              'Si el niño tiene frecuencia mayor a cien pero persiste con tiraje, aplicamos presión positiva continua por vía nasal.',
            ),
          ],
        ),
      ],
    ),
  },
};
