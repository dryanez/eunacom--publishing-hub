// Clase 11.10 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Neumotórax a tensión, hemotórax masivo, tórax volante, contusión pulmonar y taponamiento cardíaco',
      say: 'Bienvenidos a la clase de trauma torácico mayor. En el EUNACOM el tórax es protagonista indiscutido de las preguntas de urgencia porque las decisiones deben tomarse en segundos y basándose casi exclusivamente en la semiología clínica. Durante esta sesión aprenderemos a diagnosticar y descomprimir de inmediato un neumotórax a tensión, a identificar los criterios exactos de toracotomía en un hemotórax masivo, a manejar el tórax volante con contusión pulmonar y a sospechar el taponamiento cardíaco. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo y colapso circulatorio',
      title: 'Neumotórax a tensión: del efecto valvular al colapso hemodinámico',
      nodes: [
        { id: 'lac', col: 0, row: 2, k: 'start', t: 'Laceración traqueobronquial o pulmonar', s: 'Trauma torácico cerrado o penetrante con rotura pleural' },
        { id: 'val', col: 1, row: 1, k: 'mech', t: 'Efecto de válvula unidireccional', s: 'El aire entra a cavidad pleural pero no puede salir' },
        { id: 'pre', col: 2, row: 0, k: 'alert', t: 'Hipertensión intrapleural progresiva', s: 'Colapso pulmonar ipsilateral completo bajo presión' },
        { id: 'med', col: 2, row: 2, k: 'risk', t: 'Desviación mediastínica contralateral', s: 'Compresión y angulación de venas cavas' },
        { id: 'sho', col: 3, row: 1, k: 'trap', t: 'Shock obstructivo extracardíaco', s: 'Caída crítica del retorno venoso y gasto cardíaco' },
        { id: 'des', col: 4, row: 2, k: 'good', t: 'Descompresión pleural inmediata', s: 'Catéter o toracostomía con tubo restaura retorno venoso' },
      ],
      edges: [
        { from: 'lac', to: 'val', label: 'fuga aérea continua' },
        { from: 'val', to: 'pre', label: 'acumulación a tensión' },
        { from: 'pre', to: 'med', label: 'desplazamiento visceral' },
        { from: 'med', to: 'sho', label: 'obstrucción de cavas' },
        { from: 'sho', to: 'des', label: 'salvataje clínico' },
      ],
      steps: [
        {
          show: ['lac', 'val'],
          note: 'Mecanismo de válvula unidireccional',
          say: 'El neumotórax a tensión se produce por una laceración del parénquima pulmonar o del árbol traqueobronquial que crea un mecanismo de válvula unidireccional. Con cada inspiración, el aire ingresa al espacio pleural, pero durante la espiración el orificio se sella impidiendo su salida.',
        },
        {
          show: ['pre', 'med'],
          note: 'Hipertensión y desplazamiento del mediastino',
          say: 'La presión dentro del hemitórax afectado supera la presión atmosférica, colapsando el pulmón ipsilateral por completo y empujando el mediastino, el corazón y la tráquea hacia el lado contralateral.',
        },
        {
          show: ['sho'],
          note: 'Colapso del retorno venoso y shock obstructivo',
          say: 'Este desplazamiento acoda y comprime las venas cavas superior e inferior. Como la sangre no puede retornar al ventrículo derecho, el gasto cardíaco cae en picada, desencadenando un shock obstructivo severo con hipotensión extrema, taquicardia refleja e ingurgitación yugular.',
        },
        {
          show: ['des'],
          note: 'Resolución inmediata sin imágenes',
          say: 'La descompresión pleural inmediata alivia la presión intratorácica, reexpande las cavas y restablece el retorno venoso en segundos. Si esperas una radiografía para confirmar la sospecha, el paciente entra en paro por actividad eléctrica sin pulso.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y descompresión',
      title: 'Neumotórax a tensión y neumotórax abierto',
      cards: [
        {
          title: 'Neumotórax a tensión',
          tag: 'Emergencia clínica pura',
          kind: 'alert',
          items: [
            {
              t: 'Tetraedro clínico diagnóstico',
              d: 'Shock, timpanismo ipsilateral, abolición de murmullo y tráquea desviada',
              say: 'El diagnóstico es estrictamente clínico: hipotensión arterial, ausencia de murmullo vesicular, timpanismo marcado a la percusión e ingurgitación yugular con tráquea desplazada hacia el lado sano.',
            },
            {
              t: 'Descompresión inicial con aguja gruesa',
              d: 'Catéter catorce gauge en segundo espacio línea medioclavicular',
              say: 'La primera maniobra de salvataje es la toracostomía con aguja: un catéter catorce o dieciséis gauge largo insertado en el segundo espacio intercostal sobre la línea medioclavicular o en el quinto espacio sobre la línea axilar anterior.',
            },
            {
              t: 'Tubo de pleurostomía definitivo',
              d: 'Drenaje torácico veintiocho a treinta y dos French con sello de agua',
              say: 'La punción con aguja solo compra tiempo. Debe seguirse de inmediato por la instalación de un tubo de pleurostomía grueso conectado a una trampa de agua o trampa de tres frascos.',
            },
          ],
        },
        {
          title: 'Neumotórax abierto',
          tag: 'Herida torácica succionante',
          kind: 'key',
          items: [
            {
              t: 'Fisiopatología del defecto parietal',
              d: 'Herida mayor a dos tercios del diámetro de la tráquea',
              say: 'Cuando el orificio en la pared torácica supera dos tercios del diámetro traqueal, el aire entra preferentemente por la herida produciendo hipoxemia grave e hipoventilación.',
            },
            {
              t: 'Parche oclusivo de tres puntas',
              d: 'Gasa vaselinada fijada en tres lados para permitir salida de aire',
              say: 'El manejo inmediato en el sitio del suceso es colocar un parche oclusivo rectangular sellado solo en tres lados. Funciona como válvula: se abre al espirar para liberar aire y se pega al inspirar.',
            },
            {
              t: 'Pleurostomía alejada de la herida',
              d: 'Instalación de tubo de drenaje en sitio anatómico distante',
              say: 'Nunca instales el tubo pleural a través de la misma herida traumática. Se coloca una pleurostomía formal en el quinto espacio intercostal línea axilar media por tejido sano.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemorragia intratorácica',
      title: 'Hemotórax masivo: criterios diagnósticos y toracotomía de urgencia',
      cards: [
        {
          title: 'Fisiopatología y semiología',
          tag: 'Matidez y shock hipovolémico',
          kind: 'criteria',
          items: [
            {
              t: 'Diferencia semiológica cardinal con neumotórax',
              d: 'Matidez a la percusión y venas yugulares colapsadas',
              say: 'Al igual que el neumotórax, el hemotórax tiene murmullo vesicular abolido. Pero a la percusión presenta matidez franca, y las venas del cuello suelen estar planas por hipovolemia masiva.',
            },
            {
              t: 'Vasos causantes de sangrado masivo',
              d: 'Rotura de arterias intercostales, mamaria interna o grandes vasos',
              say: 'El parénquima pulmonar suele coagular por ser de baja presión. El hemotórax masivo traduce casi siempre rotura de arterias sistémicas de alta presión como las mamarias internas o intercostales.',
            },
          ],
        },
        {
          title: 'Criterios de toracotomía de urgencia',
          tag: 'Pregunta fija de examen',
          kind: 'alert',
          items: [
            {
              t: 'Drenaje inicial inmediato',
              d: 'Volumen mayor o igual a mil quinientos mililitros tras instalar tubo',
              say: 'La primera indicación formal de toracotomía en pabellón es la salida inmediata de mil quinientos mililitros o más de sangre fresca al colocar el tubo de pleurostomía.',
            },
            {
              t: 'Débito continuo horario persistente',
              d: 'Más de doscientos mililitros por hora durante dos a cuatro horas',
              say: 'La segunda indicación es un débito persistente mayor a doscientos o doscientos cincuenta mililitros por hora durante dos a cuatro horas consecutivas, o la necesidad continua de transfusión.',
            },
            {
              t: 'Pleurostomía de gran calibre',
              d: 'Tubo treinta y dos a treinta y seis French para evitar coagulación',
              say: 'El drenaje del hemotórax requiere tubos gruesos de calibre treinta y dos a treinta y seis French para evacuar coágulos y evitar el hemotórax retenido y fibroencapsulado.',
            },
          ],
        },
      ],
    },
    {
      type: 'points',
      kicker: 'Técnica quirúrgica básica',
      title: 'Técnica de pleurostomía y triángulo de seguridad de Ward',
      cards: [
        {
          title: 'Anatomía del triángulo de seguridad',
          tag: 'Zona segura',
          kind: 'criteria',
          items: [
            {
              t: 'Límites anatómicos estrictos',
              d: 'Pectoral mayor adelante, dorsal ancho atrás y quinto espacio abajo',
              say: 'El tubo de drenaje pleural debe insertarse siempre dentro del triángulo de seguridad de Ward: delimitado por el borde lateral del pectoral mayor hacia anterior, el borde anterior del dorsal ancho hacia posterior y una línea horizontal a nivel del quinto espacio intercostal.',
            },
            {
              t: 'Incisión sobre el borde superior costal',
              d: 'Protección estricta del paquete vasculonervioso subcostal',
              say: 'La incisión y la disección con pinza se realizan inmediatamente por encima del borde superior de la costilla inferior. Si entras por el borde inferior de la costilla, desgarras la arteria, vena y nervio intercostales causando hemorragia masiva iatrogénica.',
            },
          ],
        },
        {
          title: 'Manejo del sistema de drenaje',
          tag: 'Sello de agua',
          kind: 'key',
          items: [
            {
              t: 'Trampa de agua y cámara colectora',
              d: 'Frasco con varilla sumergida dos centímetros bajo agua estéril',
              say: 'El tubo se conecta a un sistema de sello de agua de uno o tres frascos. La varilla bajo agua permite que el aire y la sangre salgan durante la espiración pero impide que el aire reingrese al tórax.',
            },
            {
              t: 'Criterios de retiro del tubo pleural',
              d: 'Pulmón completamente reexpandido, sin fuga aérea y débito menor',
              say: 'El tubo se retira cuando la radiografía muestra expansión pulmonar completa, la columna de agua ya no oscila con la respiración ni burbujea, y el débito seroso es menor a cien o ciento cincuenta mililitros en veinticuatro horas.',
            },
          ],
        },
      ],
    },


    {
      type: 'points',
      kicker: 'Mecánica respiratoria alterada',
      title: 'Tórax volante, volet costal y contusión pulmonar',
      cards: [
        {
          title: 'Tórax inestable o volet costal',
          tag: 'Respiración paradójica',
          kind: 'key',
          items: [
            {
              t: 'Definición anatómica estricta',
              d: 'Fractura de tres o más costillas consecutivas en dos sitios distintos',
              say: 'El tórax volante se produce cuando tres o más costillas consecutivas se fracturan en dos o más puntos, dejando un segmento de pared torácica desconectado del resto de la reja costal.',
            },
            {
              t: 'Movimiento paradójico del segmento',
              d: 'Se hunde en la inspiración y protruye durante la espiración',
              say: 'Por efecto de las presiones intratorácicas, el segmento suelto se mueve al revés: durante la inspiración se deprime hacia el pulmón y durante la espiración se abomba hacia afuera.',
            },
            {
              t: 'Analgesia regional y fijación interna',
              d: 'Bloqueo paravertebral o peridural; osteosíntesis si hay falla de retiro',
              say: 'El tratamiento fundamental del dolor es la analgesia regional peridural torácica o paravertebral. En fracturas con deformidad severa se realiza fijación quirúrgica costal con placas.',
            },
          ],
        },
        {
          title: 'Contusión pulmonar subyacente',
          tag: 'Verdadera causa de hipoxemia',
          kind: 'alert',
          items: [
            {
              t: 'Laceración microvascular alveolar',
              d: 'Edema y hemorragia intraalveolar con efecto shunt intrapulmonar',
              say: 'La mortalidad del tórax volante no la causa el hueso roto, sino la contusión pulmonar subyacente. El parénquima sufre microhemorragia y edema alveolar masivo, provocando una hipoxemia refractaria.',
            },
            {
              t: 'Evolución radiológica insidiosa',
              d: 'Radiografía inicial puede ser normal; opacidades a las veinticuatro horas',
              say: 'La radiografía tomada al ingreso suele subestimar el daño. Los infiltrados alveolares parcheados aparecen entre las veinticuatro y cuarenta y ocho horas posteriores al traumatismo.',
            },
            {
              t: 'Restricción hídrica y soporte ventilatorio',
              d: 'Fluidos restringidos para no inundar el pulmón contundido',
              say: 'En el manejo médico se debe evitar la sobrehidratación, manteniendo al paciente euvolémico pero seco. Si la presión de oxígeno cae por debajo de sesenta, se conecta a ventilación mecánica.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia cardiovascular en trauma',
      title: 'Taponamiento cardíaco: Tríada de Beck y ventana subxifoidea',
      cards: [
        {
          title: 'Fisiopatología del taponamiento agudo',
          tag: 'Restricción diastólica',
          kind: 'alert',
          items: [
            {
              t: 'Pequeño volumen bajo presión inextensible',
              d: 'Cien a doscientos mililitros bastan para colapsar las cavidades derechas',
              say: 'El pericardio fibroso es inextensible. Una acumulación aguda de apenas cien a doscientos mililitros de sangre comprime las cavidades derechas, impidiendo el llenado diastólico del corazón.',
            },
            {
              t: 'Área precordial peligrosa de Ziedler',
              d: 'Heridas entre clavículas, reborde costal inferior y líneas medioclaviculares',
              say: 'Toda herida penetrante en la caja torácica anterior entre ambas clavículas, los pezones y el epigastrio debe considerarse una lesión cardíaca potencialmente taponante.',
            },
          ],
        },
        {
          title: 'Diagnóstico y resolución de emergencia',
          tag: 'Tríada de Beck y Eco-FAST',
          kind: 'key',
          items: [
            {
              t: 'Tríada clásica de Beck',
              d: 'Hipotensión arterial, ruidos cardíacos apagados e ingurgitación yugular',
              say: 'La tríada de Beck reúne hipotensión arterial sistémica, ingurgitación venosa yugular y ruidos cardíacos apagados a la auscultación, asociada a pulso paradójico.',
            },
            {
              t: 'Ventana subxifoidea en Eco-FAST',
              d: 'Visualización directa de líquido en el saco pericárdico',
              say: 'El método diagnóstico de elección en la sala de urgencias es la ventana subxifoidea del Eco-FAST, que detecta la lámina pericárdica anecogénica en menos de un minuto.',
            },
            {
              t: 'Pericardiocentesis versus toracotomía',
              d: 'Punción subxifoidea descompresiva de rescate y cirugía definitiva',
              say: 'Extraer apenas quince a veinte mililitros mediante pericardiocentesis guiada por ecografía alivia el colapso. El tratamiento definitivo es la esternotomía media o toracotomía para reparar la herida cardíaca.',
            },
          ],
        },
      ],
    },
    {
      type: 'points',
      kicker: 'Reanimación in extremis',
      title: 'Toracotomía de reanimación en el box de urgencias',
      cards: [
        {
          title: 'Indicaciones estrictas en trauma penetrante',
          tag: 'Criterios de rescate',
          kind: 'alert',
          items: [
            {
              t: 'Paro cardíaco presenciado en box o traslado breve',
              d: 'Pérdida de pulso con menos de quince minutos de maniobras en penetrante',
              say: 'La toracotomía de reanimación en la camilla del box está indicada casi exclusivamente en trauma penetrante de tórax que entra en paro cardiorrespiratorio presenciado o con menos de diez a quince minutos de reanimación cardiopulmonar.',
            },
            {
              t: 'Trauma cerrado con resultado desalentador',
              d: 'Sobrevida menor al uno por ciento; solo con menos de cinco minutos de paro',
              say: 'En el trauma torácico cerrado la sobrevida es menor al uno por ciento. Solo se intenta si el paro ocurre directamente en presencia del equipo médico con signos de vida previos documentados.',
            },
          ],
        },
        {
          title: 'Objetivos quirúrgicos inmediatos',
          tag: 'Maniobras salvavidas',
          kind: 'key',
          items: [
            {
              t: 'Toracotomía anterolateral izquierda amplia',
              d: 'Incisión en quinto espacio intercostal desde esternón hasta línea axilar',
              say: 'Se realiza una incisión amplia en el quinto espacio intercostal izquierdo, se coloca el separador de Finochietto y se abre el pericardio longitudinalmente por delante del nervio frénico para descomprimir el taponamiento.',
            },
            {
              t: 'Clampaje de la aorta descendente y masaje interno',
              d: 'Ocluir aorta supracelíaca para redistribuir flujo a cerebro y corazón',
              say: 'Se clampa la aorta torácica descendente justo por encima del diafragma para redirigir toda la volemia hacia la circulación coronaria y cerebral, iniciando masaje cardíaco interno bimanual directo.',
            },
          ],
        },
      ],
    },


    {
      type: 'table',
      kicker: 'Diagnóstico diferencial de shock torácico',
      title: 'Neumotórax a tensión versus hemotórax masivo versus taponamiento',
      head: ['Parámetro clínico', 'Neumotórax a tensión', 'Hemotórax masivo', 'Taponamiento cardíaco'],
      rows: [
        {
          cells: ['Percusión torácica', 'Hipersonoro o timpánico', 'Mate o submate franco', 'Sonoridad pulmonar normal'],
          say: 'La percusión diferencia de inmediato las patologías: timpanismo en el neumotórax, matidez en el hemotórax y resonancia pulmonar normal bilateral en el taponamiento cardíaco.',
        },
        {
          cells: ['Murmullo vesicular', 'Abolido ipsilateral', 'Abolido o muy disminuido', 'Conservado bilateralmente'],
          say: 'El murmullo vesicular se pierde en el hemitórax comprometido en el neumotórax y el hemotórax. En el taponamiento cardíaco puro, ambos campos pulmonares ventilan con normalidad.',
        },
        {
          cells: ['Posición de la tráquea', 'Desviada hacia lado contralateral', 'Línea media o contralateral', 'Centrada en la línea media'],
          say: 'La desviación palpable de la tráquea hacia el lado sano es clásica del neumotórax a tensión con hipertensión intratorácica.',
        },
        {
          cells: ['Ingurgitación yugular', 'Presente y muy marcada', 'Ausente o venas colapsadas', 'Presente y muy ingurgitada'],
          say: 'Las venas del cuello están pletóricas en el neumotórax a tensión y en el taponamiento por congestión venosa retrógrada, pero están colapsadas en el hemotórax por pérdida sanguínea.',
        },
        {
          cells: ['Tratamiento inicial', 'Punción y pleurostomía con tubo', 'Pleurostomía con tubo grueso', 'Pericardiocentesis o ventana'],
          say: 'El tratamiento inicial es punción con aguja en el neumotórax, tubo de gran calibre en el hemotórax y descompresión pericárdica en el taponamiento.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de enfrentamiento en trauma torácico grave',
      say: 'Analicemos el árbol de decisiones frente a un paciente con trauma torácico e inestabilidad hemodinámica o respiratoria grave.',
    },

    {
      type: 'table',
      kicker: 'Trampas del EUNACOM',
      title: 'Errores frecuentes en trauma torácico de urgencia',
      head: ['Escenario clínico', 'Conducta médica estándar', 'Error fatal o trampa'],
      rows: [
        {
          cells: [
            'Neumotórax a tensión con shock',
            'Punción inmediata sin radiografía previa',
            'Solicitar placa de tórax portátil para confirmar',
          ],
          say: 'Esperar una radiografía en un paciente con neumotórax a tensión y colapso circulatorio produce un paro cardiorrespiratorio evitable.',
        },
        {
          cells: [
            'Herida soplante en tórax penetrante',
            'Parche oclusivo sellado en tres lados',
            'Sellar completamente los cuatro bordes del parche',
          ],
          say: 'Sellar los cuatro bordes de un parche en una herida abierta convierte el neumotórax abierto en un neumotórax a tensión mortal.',
        },
        {
          cells: [
            'Hemotórax con mil seiscientos mililitros de salida',
            'Traslado inmediato a pabellón para toracotomía',
            'Mantener en observación para cuantificar débito horario',
          ],
          say: 'Si el débito inicial del tubo supera mil quinientos mililitros, el paciente requiere toracotomía de urgencia en quirófano de inmediato.',
        },
        {
          cells: [
            'Herida penetrante precordial con shock y pulmones limpios',
            'Eco-FAST ventana pericárdica y pericardiocentesis',
            'Atribuir la hipotensión a shock hipovolémico y pasar litros de suero',
          ],
          say: 'En el área cardíaca con hipotensión y pulmones limpios, pasar líquidos a ciegas no resuelve la compresión pericárdica.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Oficial',
      title: 'EUNACOM Diciembre 2025 · Pregunta 123',
      recTag: 'EUNACOM Diciembre 2025 · Pregunta 123',
      stem: 'Un paciente de 32 años sufre accidente de tránsito, golpeándose el pecho contra el pavimento. Minutos después evoluciona con dificultad respiratoria severa, malestar general y compromiso de conciencia. Se constata FC 140 lpm, PA 86/50 mmHg, FR 45 rpm y SatO2 82% a aire ambiental. En el examen segmentario se observa ingurgitación yugular con desviación traqueal, y se ausculta disminución del murmullo pulmonar derecho y ruidos cardíacos apagados. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Contusión pulmonar aislada' },
        { letter: 'B', text: 'Taponamiento cardíaco' },
        { letter: 'C', text: 'Disección aórtica traumática' },
        { letter: 'D', text: 'Neumotórax hipertensivo o a tensión' },
        { letter: 'E', text: 'Hemotórax masivo' },
      ],
      correct: 'D',
      explanation: 'La asociación de insuficiencia respiratoria severa, shock obstructivo, ingurgitación yugular, murmullo vesicular disminuido y desviación de la tráquea hacia el lado contralateral es patognomónica de neumotórax a tensión (hipertensivo). El taponamiento cardíaco no produce desviación traqueal ni abolición del murmullo.',
      say: {
        stem: 'Revisemos esta pregunta reciente de diciembre de dos mil veinticinco. Un paciente tras accidente presenta disnea severa, shock con ochenta y seis con cincuenta de presión, ingurgitación yugular, desviación traqueal y ausencia de murmullo derecho.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas plantean: contusión pulmonar aislada, taponamiento cardíaco, disección aórtica, neumotórax hipertensivo o hemotórax masivo. Piénsalo.',
        answer: 'La respuesta correcta es la D, neumotórax hipertensivo. Aunque el taponamiento cardíaco de la alternativa B también cursa con taquicardia, hipotensión e ingurgitación yugular, no produce desviación de la tráquea ni asimetría del murmullo pulmonar. La desviación traqueal confirma la hipertensión intrapleural que desplaza el mediastino.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Oficial',
      title: 'EUNACOM Julio 2025 · Pregunta 71',
      recTag: 'EUNACOM Julio 2025 · Pregunta 71',
      stem: 'Un paciente de 25 años tras accidente de tránsito ingresa con timpanismo a la percusión del hemitórax derecho, ausencia de murmullo vesicular derecho, disnea severa y desviación traqueal hacia la izquierda. ¿Cuál es el diagnóstico y la conducta inmediata?',
      question: '¿Cuál es el diagnóstico y la conducta inmediata?',
      options: [
        { letter: 'A', text: 'Neumotórax a tensión: descompresión inmediata con aguja en segundo espacio intercostal' },
        { letter: 'B', text: 'Hemotórax masivo: drenaje pleural con tubo' },
        { letter: 'C', text: 'Contusión pulmonar: oxígeno y observación' },
        { letter: 'D', text: 'Fractura de costillas: analgesia endovenosa' },
        { letter: 'E', text: 'Taponamiento cardíaco: pericardiocentesis' },
      ],
      correct: 'A',
      explanation: 'Timpanismo + ausencia de murmullo vesicular + desviación traqueal contralateral configuran un neumotórax a tensión. Constituye una emergencia con riesgo vital que requiere descompresión inmediata con aguja en el segundo espacio intercostal línea medioclavicular sin esperar radiografía.',
      say: {
        stem: 'Analicemos esta pregunta de julio de dos mil veinticinco. Un paciente joven politraumatizado ingresa con timpanismo derecho, abolición del murmullo vesicular derecho, disnea extrema y desviación de la tráquea hacia la izquierda.',
        question: '¿Cuál es el diagnóstico y la conducta inmediata?',
        options: 'Las opciones son: neumotórax a tensión con punción descompresiva inmediata, hemotórax masivo, contusión pulmonar, fractura costal con analgesia o taponamiento cardíaco con pericardiocentesis. Piénsalo.',
        answer: 'La respuesta correcta es la A. La combinación de timpanismo, abolición del murmullo y tráquea desplazada al lado opuesto es el cuadro de neumotórax a tensión. La conducta inmediata es la descompresión con aguja gruesa en el segundo espacio intercostal línea medioclavicular antes de cualquier otro procedimiento o traslado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Oficial',
      title: 'EUNACOM Julio 2024 · Pregunta 102',
      recTag: 'EUNACOM Julio 2024 · Pregunta 102',
      stem: 'Una paciente de 56 años ingresa tras sufrir un accidente automovilístico de alta energía. Presenta múltiples lesiones, taquicardia, hipotensión arterial e inestabilidad hemodinámica. La tomografía cerebral informa hematoma subdural izquierdo con desviación de línea media de 11 mm; la tomografía torácica revela múltiples fracturas costales y neumotórax izquierdo con desplazamiento traqueal hacia la derecha; la tomografía abdominopélvica muestra fractura desplazada de pelvis. ¿Cuál de las siguientes medidas terapéuticas es la más urgente?',
      question: '¿Cuál es el procedimiento terapéutico prioritario?',
      options: [
        { letter: 'A', text: 'Intubación orotraqueal electiva' },
        { letter: 'B', text: 'Laparotomía exploradora de urgencia' },
        { letter: 'C', text: 'Evacuación neuroquirúrgica del hematoma subdural' },
        { letter: 'D', text: 'Pleurostomía izquierda urgente' },
        { letter: 'E', text: 'Estabilización de pelvis con dispositivo de compresión neumática' },
      ],
      correct: 'D',
      explanation: 'Aunque la paciente tiene múltiples lesiones graves con riesgo vital, el neumotórax con desviación traqueal e inestabilidad hemodinámica representa un neumotórax a tensión (paso B del protocolo ATLS). La descompresión torácica mediante pleurostomía precede a la cirugía neuroquirúrgica y pélvica.',
      say: {
        stem: 'Revisemos esta excelente pregunta de julio de dos mil veinticuatro sobre jerarquía de prioridades. Una paciente politraumatizada grave tiene un hematoma subdural con desviación de once milímetros, un neumotórax con desviación de tráquea e hipotensión, y una fractura de pelvis desplazada.',
        question: '¿Cuál es la intervención terapéutica más urgente entre todas las descritas?',
        options: 'Las alternativas son: intubación electiva, laparotomía exploradora, evacuación del hematoma cerebral, pleurostomía izquierda o compresión pélvica. Piénsalo.',
        answer: 'La respuesta correcta es la D, pleurostomía izquierda. Según el principio del ATLS, se trata primero lo que mata más rápido. El neumotórax con desviación de tráquea e inestabilidad hemodinámica compromete la ventilación y la perfusión sistémica de forma inminente. Debe descomprimirse el tórax antes de trasladar a pabellón neuroquirúrgico para evacuar el hematoma.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Oficial',
      title: 'EUNACOM Julio 2015 · Pregunta 32',
      recTag: 'EUNACOM Julio 2015 · Pregunta 32',
      stem: 'Un paciente de 28 años sufre una puñalada en el tórax en el lado derecho. Al examen físico está en buenas condiciones generales, con dolor torácico, disminución del murmullo pulmonar e hipersonoridad a la percusión en el hemitórax derecho, sin signos de inestabilidad hemodinámica. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar radiografía de tórax' },
        { letter: 'B', text: 'Solicitar resonancia magnética de tórax' },
        { letter: 'C', text: 'Instalar de inmediato un tubo pleural a ciegas' },
        { letter: 'D', text: 'Solicitar tomografía computarizada torácica' },
        { letter: 'E', text: 'Realizar videotoracoscopía de urgencia' },
      ],
      correct: 'A',
      explanation: 'El paciente presenta una herida penetrante con sospecha de neumotórax traumático simple, pero se encuentra hemodinámicamente estable y en buenas condiciones generales (no es a tensión). En esta situación está indicado solicitar una radiografía de tórax para cuantificar el neumotórax y descartar hemotórax asociado.',
      say: {
        stem: 'Veamos este contraste fundamental de julio de dos mil quince. Un paciente joven recibe una puñalada en el hemitórax derecho. Tiene dolor, disminución del murmullo e hipersonoridad, pero está en buenas condiciones y hemodinámicamente estable.',
        question: '¿Cuál es la conducta inicial correcta?',
        options: 'Las alternativas proponen: pedir radiografía de tórax, resonancia magnética, tubo pleural inmediato, tomografía computarizada o videotoracoscopía. Piénsalo.',
        answer: 'La respuesta correcta es la A, pedir radiografía de tórax. Ojo con esta trampa: el paciente tiene un neumotórax traumático, pero no tiene criterios de neumotórax a tensión porque está hemodinámicamente estable y en buenas condiciones. Por lo tanto, no se punciona a ciegas; primero se confirma con una radiografía de tórax para cuantificar su volumen y descartar hemotórax.',
      },
    },
    {
      type: 'quiz',
      kicker: 'EUNACOM Oficial',
      title: 'EUNACOM Diciembre 2024 · Pregunta 33',
      recTag: 'EUNACOM Diciembre 2024 · Pregunta 33',
      stem: 'Un hombre politraumatizado ingresa a urgencias. Tras la evaluación inicial se realiza tomografía computarizada que informa hematoma epidural intracraneal, neumotórax con desviación de la tráquea y un derrame pericárdico extenso. Al volver de la sala de tomografía presenta deterioro hemodinámico súbito con hipotensión marcada y pulso paradójico. ¿Cuál es la conducta inicial prioritaria?',
      question: '¿Cuál es la conducta terapéutica prioritaria?',
      options: [
        { letter: 'A', text: 'Pericardiocentesis o ventana pericárdica descompresiva' },
        { letter: 'B', text: 'Craniotomía descompresiva inmediata para evacuar hematoma' },
        { letter: 'C', text: 'Laparotomía exploradora de urgencia' },
        { letter: 'D', text: 'Administración exclusiva de cristaloides endovenosos' },
        { letter: 'E', text: 'Manejo médico conservador en unidad de paciente crítico' },
      ],
      correct: 'A',
      explanation: 'El paciente presenta un taponamiento cardíaco descompensado evidenciado por el colapso hemodinámico súbito y el derrame pericárdico extenso informado en la tomografía. La descompresión del saco pericárdico mediante pericardiocentesis evacuadora o ventana subxifoidea es la prioridad hemodinámica antes de cualquier intervención neuroquirúrgica.',
      say: {
        stem: 'Analicemos esta pregunta oficial de diciembre de dos mil veinticuatro. Un politraumatizado grave tiene un hematoma epidural, un neumotórax y un derrame pericárdico extenso en la tomografía, pero regresa del escáner con colapso circulatorio agudo y pulso paradójico.',
        question: '¿Cuál es la conducta inicial prioritaria?',
        options: 'Las opciones son: pericardiocentesis o descompresión pericárdica, craniotomía descompresiva inmediata, laparotomía exploradora, suero exclusivo o manejo conservador en cuidados intensivos. Piénsalo.',
        answer: 'La respuesta correcta es la A, pericardiocentesis o descompresión pericárdica. Cuando un paciente con trauma tiene un derrame pericárdico extenso y cae en colapso circulatorio con pulso paradójico, la causa inmediata de muerte es el taponamiento cardíaco por restricción diastólica aguda. Debe descomprimirse el saco pericárdico de urgencia para restaurar el gasto cardíaco antes de proceder con la craniotomía.',
      },
    },


    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en trauma torácico mayor',
      cards: [
        {
          title: 'Emergencias clínicas inmediatas',
          tag: 'Decisiones en segundos',
          kind: 'alert',
          items: [
            {
              t: 'Neumotórax a tensión nunca espera radiografía',
              d: 'Punción con catéter catorce gauge y pleurostomía inmediata',
              say: 'El neumotórax a tensión es un diagnóstico clínico puro: si hay shock y timpanismo, descomprime de inmediato.',
            },
            {
              t: 'Parche de tres lados en herida abierta',
              d: 'Permite escape unidireccional de aire sin convertir en tensión',
              say: 'En el neumotórax abierto sella tres bordes con plástico o gasa vaselinada, dejando el cuarto lado libre.',
            },
          ],
        },
        {
          title: 'Criterios quirúrgicos y soporte',
          tag: 'Toracotomía y analgesia',
          kind: 'key',
          items: [
            {
              t: 'Criterios de toracotomía en hemotórax',
              d: 'Mil quinientos mililitros de entrada o más de doscientos por hora',
              say: 'El hemotórax masivo va a pabellón si drena mil quinientos mililitros iniciales o más de doscientos por hora continuos.',
            },
            {
              t: 'Tórax volante mata por contusión',
              d: 'Analgesia regional peridural y restricción cuidadosa de fluidos',
              say: 'Si te llevas una sola idea de hoy: en el tórax inestable o volante, la causa real de hipoxemia refractaria es la contusión pulmonar subyacente. Maneja el dolor precozmente con analgesia regional peridural, cuida no sobrehidratar para evitar inundar los alvéolos y descomprime siempre las lesiones pleurales de riesgo vital. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Toma de Decisiones en Trauma Torácico Grave',
    root: N(
      'start',
      'Paciente con trauma torácico e inestabilidad cardiopulmonar',
      'Evaluación primaria B y C del protocolo ATLS',
      'Iniciamos el enfrentamiento semiológico evaluando la percusión, auscultación y estado hemodinámico.',
      [
        'Timpanismo y ausencia de murmullo con shock',
        N(
          'alert',
          'Neumotórax a tensión',
          'Ingurgitación yugular y desviación de tráquea',
          'Sospechamos neumotórax a tensión frente a hipersonoridad, colapso circulatorio y tráquea desviada.',
          [
            'Conducta inmediata',
            N(
              'do',
              'Descompresión inmediata con aguja',
              'Segundo espacio medioclavicular o quinto axilar',
              'Puncionamos de inmediato con aguja gruesa catorce gauge sin esperar ninguna radiografía previa.',
              [
                'Tratamiento definitivo',
                N(
                  'ok',
                  'Instalación de tubo de pleurostomía',
                  'Tubo veintiocho a treinta y dos French con trampa de agua',
                  'Se coloca de inmediato un tubo pleural conectado a sello de agua para reexpansión pulmonar completa.'
                )
              ]
            )
          ]
        )
      ],
      [
        'Matidez y ausencia de murmullo con shock',
        N(
          'alert',
          'Hemotórax masivo',
          'Pérdida hemática aguda con venas del cuello colapsadas',
          'La matidez a la percusión con shock hipovolémico indica hemotórax masivo por rotura vascular intratorácica.',
          [
            'Drenaje inicial',
            N(
              'do',
              'Pleurostomía con tubo de grueso calibre',
              'Tubo treinta y dos a treinta y seis French',
              'Instalamos un tubo pleural grueso para evacuar sangre, medir volumen y evitar la coagulación del espacio pleural.',
              [
                'Mayor a mil quinientos ml o más de doscientos ml por hora',
                N(
                  'alert',
                  'Toracotomía de urgencia en pabellón',
                  'Hemostasia quirúrgica directa de grandes vasos',
                  'Si el débito inicial supera mil quinientos mililitros o persiste alto, se traslada de urgencia a quirófano.'
                )
              ]
            )
          ]
        )
      ],
      [
        'Ruidos apagados y pulmones limpios con shock',
        N(
          'alert',
          'Taponamiento cardíaco',
          'Tríada de Beck e ingurgitación yugular sin neumotórax',
          'En herida precordial con hipotensión y campos pulmonares normales sospechamos taponamiento pericárdico.',
          [
            'Confirmación rápida',
            N(
              'do',
              'Eco-FAST ventana subxifoidea',
              'Detección de hemopericardio en menos de un minuto',
              'Confirmamos la presencia de derrame pericárdico con la ventana subxifoidea del ecógrafo en box.',
              [
                'Resolución de urgencia',
                N(
                  'do',
                  'Pericardiocentesis o ventana pericárdica',
                  'Evacuación descompresiva y reparación quirúrgica',
                  'Realizamos punción descompresiva de rescate y traslado inmediato a pabellón para cardiorrafia.'
                )
              ]
            )
          ]
        )
      ]
    ),
  },
};
