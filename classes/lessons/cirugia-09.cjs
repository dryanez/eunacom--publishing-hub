// Clase 11.9 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Protocolo ATLS, evaluación primaria A-B-C-D-E, prevención de la tríada letal y cirugía de control de daños',
      say: 'Bienvenidos a la clase de evaluación inicial del paciente politraumatizado. En el EUNACOM el trauma es una de las áreas más evaluadas con preguntas de conducta inmediata. Aquí la regla de oro es una sola: tratar primero la lesión que mata primero. Durante esta clase dominaremos la secuencia estricta del A-B-C-D-E, los accesos vasculares de reanimación, la clasificación del shock hemorrágico, las contraindicaciones absolutas de las sondas y los principios de la cirugía de control de daños. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Epidemiología y prioridad',
      title: 'Distribución trimodal de la mortalidad en trauma y protocolo ATLS',
      nodes: [
        { id: 'tri', col: 0, row: 2, k: 'start', t: 'Evento traumático mayor', s: 'Accidentes de tránsito · caídas de altura · agresiones' },
        { id: 'p1', col: 1, row: 0, k: 'alert', t: 'Primer pico: Inmediato', s: 'Segundos a minutos · rotura aórtica o transección medular' },
        { id: 'p2', col: 2, row: 1, k: 'risk', t: 'Segundo pico: Hora dorada', s: 'Minutos a horas · shock hemorrágico y asfixia aguda' },
        { id: 'atl', col: 3, row: 1, k: 'good', t: 'Protocolo ATLS A-B-C-D-E', s: 'Evaluación y reanimación simultáneas en urgencia' },
        { id: 'p3', col: 2, row: 3, k: 'trap', t: 'Tercer pico: Tardío', s: 'Días a semanas · sepsis y falla multiorgánica' },
        { id: 'upc', col: 4, row: 2, k: 'good', t: 'Supervivencia sin secuelas', s: 'Reanimación balanceada y control precoz del daño' },
      ],
      edges: [
        { from: 'tri', to: 'p1', label: 'lesión no recuperable' },
        { from: 'tri', to: 'p2', label: 'ventana terapéutica crítica' },
        { from: 'p2', to: 'atl', label: 'intervención prioritaria' },
        { from: 'atl', to: 'upc', label: 'estabilización exitosa' },
        { from: 'tri', to: 'p3', label: 'complicaciones inflamatorias' },
        { from: 'p3', to: 'upc', label: 'soporte intensivo' },
      ],
      steps: [
        {
          show: ['tri', 'p1'],
          note: 'Mortalidad inmediata inevitable en box',
          say: 'La muerte por trauma sigue una distribución en tres picos temporales. El primer pico ocurre en segundos o minutos por lesiones devastadoras, como la rotura de la aorta torácica o la destrucción del tronco encefálico. Estas muertes solo se previenen con políticas de seguridad vial, no en la sala de urgencias.',
        },
        {
          show: ['p2', 'atl'],
          note: 'La hora dorada y el objetivo del ATLS',
          say: 'El segundo pico se produce en minutos a horas posteriores al impacto, la llamada hora dorada. Es causado por hemorragia masiva, neumotórax a tensión, taponamiento cardíaco o hematomas intracraneales. Este es el objetivo directo del protocolo ATLS: salvar la vida interviniendo de forma estandarizada y simultánea.',
        },
        {
          show: ['p3', 'upc'],
          note: 'Tercer pico tardío por disfunción orgánica',
          say: 'El tercer pico ocurre días o semanas más tarde en la unidad de cuidados intensivos, debido a sepsis, coagulopatía o falla multiorgánica. Si realizamos una reanimación inicial adecuada evitando la hipotermia y la acidosis, reducimos drásticamente este desenlace tardío.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso A del protocolo',
      title: 'Vía aérea con protección estricta de la columna cervical',
      cards: [
        {
          title: 'Protección de columna cervical',
          tag: 'Prioridad cero',
          kind: 'alert',
          items: [
            {
              t: 'Sospecha universal de trauma raquimedular',
              d: 'Todo politrauma tiene lesión cervical hasta demostrar lo contrario',
              say: 'En todo paciente que ha sufrido un trauma de alta energía se asume una lesión de columna cervical inestable. Está terminantemente prohibido hiperextender el cuello para abrir la vía aérea.',
            },
            {
              t: 'Estabilización manual bimanual en línea',
              d: 'Tracción neutra manual por un operador dedicado',
              say: 'El collar cervical rígido tipo Philadelphia se coloca de inmediato. Si es necesario retirarlo para intubar o examinar la laringe, un segundo operador debe mantener la cabeza alineada manualmente en posición neutra con ambas manos.',
            },
          ],
        },
        {
          title: 'Permeabilidad e indicaciones de intubación',
          tag: 'Vía aérea definitiva',
          kind: 'criteria',
          items: [
            {
              t: 'Maniobra de subluxación mandibular',
              d: 'Tracción de los ángulos mandibulares hacia adelante sin flexión',
              say: 'Para permeabilizar la vía aérea sin mover el cuello se utiliza la tracción mandibular o elevación del mentón, retirando cuerpos extraños, sangre o secreciones con cánula de aspiración rígida.',
            },
            {
              t: 'Criterio absoluto: Glasgow menor o igual a ocho',
              d: 'Puntaje de coma menor o igual a ocho exige intubación oro-traqueal',
              say: 'La indicación más preguntada en el EUNACOM para intubación inmediata es la incapacidad de proteger la vía aérea, definida por un Glasgow menor o igual a ocho puntos, apnea, trauma maxilofacial grave o quemadura por inhalación.',
            },
            {
              t: 'Técnica de intubación de cuatro manos',
              d: 'Retirar cara anterior de collar manteniendo fijación manual',
              say: 'La intubación oro-traqueal se ejecuta mediante la técnica de cuatro manos: un operador inmoviliza la columna cervical desde la cabecera mientras el operador principal realiza la laringoscopía.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso B del protocolo',
      title: 'Ventilación y lesiones de riesgo vital inmediato',
      cards: [
        {
          title: 'Evaluación y aporte de oxígeno',
          tag: 'Soporte vital',
          kind: 'key',
          items: [
            {
              t: 'Oxígeno a alta concentración',
              d: 'Mascarilla con reservorio a diez o quince litros por minuto',
              say: 'Todo paciente politraumatizado debe recibir oxígeno a alta concentración mediante mascarilla con bolsa de reservorio de no recirculación a diez a quince litros por minuto.',
            },
            {
              t: 'Examen de tórax dirigido en segundos',
              d: 'Inspeccionar expansión, palpar enfisema, percutir y auscultar',
              say: 'En el paso B se busca de forma dirigida descartar tres grandes amenazas vitales inmediatas: el neumotórax a tensión, el neumotórax abierto y el tórax inestable o volante.',
            },
          ],
        },
        {
          title: 'Urgencias torácicas de resolución clínica',
          tag: 'Prohibido demorar',
          kind: 'alert',
          items: [
            {
              t: 'Neumotórax a tensión: diagnóstico clínico puro',
              d: 'Hipotensión, timpanismo, abolición de murmullo y tráquea desviada',
              say: 'El neumotórax a tensión produce colapso circulatorio agudo por compresión de las venas cavas. Si el paciente tiene shock, timpanismo y ausencia de murmullo vesicular, está prohibido pedir radiografía de tórax.',
            },
            {
              t: 'Descompresión inmediata con aguja o tubo',
              d: 'Punción en segundo espacio intercostal línea medioclavicular',
              say: 'La conducta inmediata es descompresión pleural urgente con aguja gruesa en el segundo espacio intercostal línea medioclavicular o en el quinto espacio intercostal línea axilar anterior, seguida de pleurostomía formal con tubo.',
            },
            {
              t: 'Neumotórax abierto y parche de tres puntas',
              d: 'Herida succionante mayor a dos tercios del diámetro traqueal',
              say: 'En el neumotórax abierto se sella la herida con un parche oclusivo rectangular fijado solo en tres de sus cuatro bordes, actuando como una válvula de escape para que el aire salga pero no reingrese.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso C del protocolo',
      title: 'Circulación, control de hemorragia y reanimación balanceada',
      cards: [
        {
          title: 'Control de hemorragias externas',
          tag: 'Foco prioritario',
          kind: 'alert',
          items: [
            {
              t: 'Compresión directa y torniquete precoz',
              d: 'Presión manual firme o torniquete proximal en extremidades',
              say: 'El sangrado externo activo se detiene mediante compresión directa sostenida sobre la herida. Si se trata de una extremidad con sangrado arterial exanguinante, se coloca un torniquete de inmediato y se anota la hora.',
            },
            {
              t: 'Accesos vasculares periféricos de gran calibre',
              d: 'Dos cánulas periféricas cortas y gruesas de catorce a dieciséis gauge',
              say: 'Se instalan dos vías venosas periféricas de grueso calibre, catorce o dieciséis gauge, en pliegue antebraquial. Si no se logran en noventa segundos, la alternativa inmediata es el acceso intraóseo tibial o humeral.',
            },
          ],
        },
        {
          title: 'Estrategia transfusional moderna',
          tag: 'Protocolo de daño',
          kind: 'pharma',
          items: [
            {
              t: 'Hipotensión permisiva y restricción de sueros',
              d: 'Evitar cristaloides masivos que lavan factores de coagulación',
              say: 'Está proscrito pasar grandes volúmenes de suero fisiológico frío, ya que diluyen los factores de coagulación, rompen coágulos blandos y provocan acidosis hiperclorémica. Se tolera una presión sistólica entre ochenta y noventa.',
            },
            {
              t: 'Protocolo de transfusión masiva uno a uno a uno',
              d: 'Glóbulos rojos empacados, plasma fresco y plaquetas balanceados',
              say: 'En el shock hemorrágico severo se activa el protocolo de transfusión masiva administrando concentrados de glóbulos rojos, plasma fresco congelado y plaquetas en proporción balanceada uno a uno a uno.',
            },
            {
              t: 'Ácido tranexámico antes de tres horas',
              d: 'Un gramo en bolo endovenoso seguido de infusión de un gramo',
              say: 'El ácido tranexámico disminuye la mortalidad por hemorragia al bloquear la fibrinólisis. Debe administrarse un gramo en bolo dentro de las primeras tres horas del trauma. Después de tres horas pierde beneficio y aumenta el riesgo.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estratificación hemodinámica',
      title: 'Clasificación del shock hemorrágico según el ATLS',
      head: ['Clase de shock', 'Pérdida y pulso', 'Presión arterial', 'Manejo inicial requerido'],
      rows: [
        {
          cells: ['Clase uno', 'Hasta 15% · Pulso < 100', 'Normal', 'Cristaloides mínimos o nada'],
          say: 'El shock clase uno equivale a una donación de sangre estándar. El paciente está compensado, con pulso y presión normales.',
        },
        {
          cells: ['Clase dos', '15 a 30% · Taquicardia 100 a 120', 'Normal con pulso estrecho', 'Cristaloides tibios moderados'],
          say: 'En la clase dos aparece taquicardia refleja y disminución de la presión de pulso, aunque la presión sistólica todavía se mantiene normal gracias a la vasoconstricción.',
        },
        {
          cells: ['Clase tres', '30 a 40% · Taquicardia 120 a 140', 'Hipotensión arterial manifiesta', 'Transfusión de hemoderivados urgente'],
          say: 'La clase tres es el punto de quiebre: cae la presión arterial sistólica, hay oliguria y confusión. Requiere transfusión precoz de glóbulos rojos.',
        },
        {
          cells: ['Clase cuatro', '> 40% · Frecuencia > 140', 'Hipotensión severa o colapso', 'Protocolo de transfusión masiva 1:1:1'],
          say: 'La clase cuatro es una hemorragia exanguinante con riesgo de paro cardíaco inminente. Exige activación inmediata del protocolo de transfusión masiva y hemostasia quirúrgica.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemorragia oculta pélvica',
      title: 'Control de fracturas de pelvis inestables y sábana trocantérica',
      cards: [
        {
          title: 'Sospecha y riesgo exanguinante',
          tag: 'Sangrado retroperitoneal',
          kind: 'alert',
          items: [
            {
              t: 'Mecanismo en libro abierto',
              d: 'Diástasis de la sínfisis púbica y rotura del plexo venoso presacro',
              say: 'Las fracturas pélvicas por compresión anteroposterior o impacto lateral rompen las venas del plexo presacro y ramas de la arteria ilíaca interna, acumulando litros de sangre en el retroperitoneo.',
            },
            {
              t: 'Prohibida la manipulación repetida',
              d: 'Palpar una sola vez la pelvis; jamás comprimir repetitivamente',
              say: 'Si sospechas fractura de pelvis, examina la estabilidad pélvica una única vez. Movilizar o comprimir la pelvis repetidamente destruye los coágulos retroperitoneales y desata una hemorragia letal.',
            },
          ],
        },
        {
          title: 'Tabilización mecánica inmediata',
          tag: 'Reducción de volumen pélvico',
          kind: 'key',
          items: [
            {
              t: 'Faja o sábana pélvica circunferencial',
              d: 'Instalada exactamente a la altura de los trocánteres mayores',
              say: 'La fijación pélvica de urgencia se logra con una faja comercial o una sábana anudada con pinzas. Recuerda la referencia anatómica que pregunta el examen: debe centrarse a nivel de los trocánteres mayores, no sobre los flancos.',
            },
            {
              t: 'Hemostasia en hemodinamia o pabellón',
              d: 'Angioembolización para sangrado arterial vs packing pélvico',
              say: 'Si el paciente sigue inestable pese a cerrar la pelvis, se traslada a angiografía para embolización arterial o a pabellón para empaquetamiento pélvico preperitoneal de control de daños.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso D del protocolo',
      title: 'Déficit neurológico y examen pupilar rápido',
      cards: [
        {
          title: 'Escala de Coma de Glasgow',
          tag: 'Monitoreo dinámico',
          kind: 'criteria',
          items: [
            {
              t: 'Tres esferas: ocular, verbal y motora',
              d: 'Puntaje de tres a quince; la respuesta motora es la más predictiva',
              say: 'El nivel de conciencia se documenta con la escala de Glasgow al ingreso. Permite clasificar el traumatismo encéfalo-craneano en leve con trece a quince puntos, moderado con nueve a doce puntos y severo con tres a ocho puntos.',
            },
            {
              t: 'Deterioro de dos o más puntos en el seguimiento',
              d: 'Alerta roja de expansión de masa intracraneal expansiva',
              say: 'Cualquier caída de dos puntos o más en la escala de Glasgow durante la observación obliga a una reevaluación urgente y a descartar un hematoma epidural o subdural con tomografía inmediata.',
            },
          ],
        },
        {
          title: 'Simetría pupilar y reflejo fotomotor',
          tag: 'Signos de herniación',
          kind: 'alert',
          items: [
            {
              t: 'Anisocoria y midriasis unilateral fija',
              d: 'Herniación uncal que comprime el tercer par craneal ipsilateral',
              say: 'Una pupila dilatada que no responde a la luz en un paciente con trauma craneano es un signo de herniación del uncus temporal que comprime el tercer par craneal del mismo lado. Es una emergencia neuroquirúrgica absoluta.',
            },
            {
              t: 'Prohibido atribuir deterioro solo a tóxicos',
              d: 'Nunca culpar al alcohol o drogas sin descartar lesión intracraneana',
              say: 'Otra trampa clásica del examen: si un paciente politraumatizado huele a alcohol o tiene test de drogas positivo pero está en coma, jamás atribuyas el compromiso al alcohol. La causa es un trauma craneano hasta demostrar lo contrario.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Paso E del protocolo',
      title: 'Exposición corporal completa y prevención activa de la tríada letal',
      cards: [
        {
          title: 'Desvestir y examinar dorso',
          tag: 'Giro en bloque',
          kind: 'criteria',
          items: [
            {
              t: 'Desnudar completamente al paciente',
              d: 'Retirar toda la ropa cortándola con tijeras de trauma',
              say: 'El paciente debe ser desnudado por completo para no pasar por alto heridas penetrantes en glúteos, axilas o periné. Toda la ropa se corta rápidamente evitando movimientos bruscos.',
            },
            {
              t: 'Giro en bloque coordinado por cuatro personas',
              d: 'Un líder en la cabeza mantiene el eje cervical mientras se rota',
              say: 'Para examinar la columna, el dorso y realizar el tacto rectal se realiza un giro en bloque de noventa grados guiado exclusivamente por la voz del operador que sostiene la cabeza.',
            },
          ],
        },
        {
          title: 'La tríada letal del trauma',
          tag: 'Hipotermia, acidosis y coagulopatía',
          kind: 'alert',
          items: [
            {
              t: 'Círculo vicioso mortal',
              d: 'La hipotermia inhibe la cascada de coagulación y genera acidosis',
              say: 'La tríada letal es la causa biológica de muerte en trauma severo: la hipotermia por debajo de treinta y cinco grados desactiva las enzimas de la coagulación, la hipoperfusión genera acidosis láctica y ambas perpetúan una coagulopatía refractaria.',
            },
            {
              t: 'Calentamiento activo obligatorio',
              d: 'Mantas térmicas, fluidos endovenosos tibios y temperatura ambiental alta',
              say: 'Para prevenirla, inmediatamente después del examen se cubre al paciente con mantas de aire caliente, se infunden sueros y hemoderivados a treinta y nueve grados y se mantiene el box de reanimación a veintisiete grados.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Anexos a la reanimación',
      title: 'Imágenes rápidas y contraindicaciones absolutas de sondas',
      cards: [
        {
          title: 'Tríada radiológica inicial y ecografía',
          tag: 'Estudio primario',
          kind: 'key',
          items: [
            {
              t: 'Radiografía de tórax y de pelvis portátiles',
              d: 'Se toman en el mismo box de reanimación sin trasladar al paciente',
              say: 'Las únicas radiografías que se justifican durante la evaluación primaria son la radiografía anteroposterior de tórax y la radiografía de pelvis. Ambas se toman con equipo portátil en el box.',
            },
            {
              t: 'Ecografía FAST de cuatro cuadrantes',
              d: 'Buscar líquido libre en Morrison, esplenorrenal, pelvis y pericardio',
              say: 'El Eco-FAST se realiza en la camilla de reanimación buscando líquido libre en la ventana hepatorrenal o espacio de Morrison, periesplénica, pelvis y ventana subxifoidea para taponamiento cardíaco.',
            },
          ],
        },
        {
          title: 'Contraindicaciones de sondas en urgencias',
          tag: 'Preguntas fijas de examen',
          kind: 'alert',
          items: [
            {
              t: 'Sonda Foley contraindicada ante sospecha de rotura uretral',
              d: 'Uretrorragia, hematoma escrotal o próstata flotante al tacto rectal',
              say: 'Si el paciente presenta sangre en el meato uretral, hematoma perineal en alas de mariposa o próstata ascendida al tacto rectal, está contraindicada la sonda Foley. Se solicita uretrocistografía retrógrada o se realiza cistostomía.',
            },
            {
              t: 'Sonda nasogástrica contraindicada ante fractura de base',
              d: 'Signo de Battle, ojos de mapache o licuorrea nasal: usar vía oral',
              say: 'Si hay sospecha de fractura de base de cráneo con equimosis periorbitaria o rinorrea de líquido cefalorraquídeo, está prohibido colocar sonda por la nariz por riesgo de penetración intracraneal. Se instala sonda orogástrica.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de reanimación del paciente politraumatizado según ATLS',
      say: 'Analicemos el árbol de decisiones del protocolo ATLS. Todo parte de evaluar si la vía aérea está permeable y si la columna cervical está fijada en posición neutra.',
    },

    {
      type: 'points',
      kicker: 'Fases avanzadas',
      title: 'Evaluación secundaria y principios de Cirugía de Control de Daños',
      cards: [
        {
          title: 'Evaluación secundaria diferida',
          tag: 'Anamnesis AMPLIA',
          kind: 'criteria',
          items: [
            {
              t: 'Solo se inicia tras estabilizar A-B-C-D-E',
              d: 'Jamás avanzar a la evaluación secundaria si hay inestabilidad',
              say: 'La evaluación secundaria solo se realiza cuando las funciones vitales han sido normalizadas y la reanimación está en marcha. Si el paciente se deteriora, se vuelve de inmediato al paso A.',
            },
            {
              t: 'Historia clínica con mnemotecnia AMPLIA',
              d: 'Alergias, Medicamentos, Patologías previas, Libaciones, Incidentes',
              say: 'La historia se obtiene con la regla AMPLIA: alergias, medicamentos habituales, patologías previas y embarazo, libaciones o última ingesta y ambiente o detalles del incidente.',
            },
          ],
        },
        {
          title: 'Cirugía de Control de Daños',
          tag: 'Enfoque abreviado',
          kind: 'key',
          items: [
            {
              t: 'Tres etapas estandarizadas',
              d: 'Laparotomía rápida, reanimación en intensivo y reconstrucción',
              say: 'En el paciente in extremis se aplica la cirugía de control de daños. La etapa uno es una laparotomía de treinta a sesenta minutos para cohibir sangrados y controlar fugas digestivas con empaquetamiento o packing con compresas.',
            },
            {
              t: 'Abdomen abierto y cierre temporal',
              d: 'Bolsa de Bogotá o sistema de vacío para prevenir síndrome compartimental',
              say: 'El abdomen no se cierra para evitar la hipertensión intraabdominal. La etapa dos es la corrección en la unidad de cuidados intensivos de la tríada letal. La etapa tres es la cirugía definitiva a las cuarenta y ocho a setenta y dos horas.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes del examen',
      title: 'Errores fatales y trampas clásicas en politrauma',
      head: ['Escenario clínico', 'Conducta médica correcta', 'Error fatal y distractor'],
      rows: [
        {
          cells: [
            'Politrauma con Glasgow seis y apnea',
            'Intubación orotraqueal con fijación manual bimanual',
            'Trasladar primero a tomografía computarizada de encéfalo',
          ],
          say: 'Un paciente en coma no puede ir al tomógrafo sin vía aérea segura. La intubación orotraqueal con técnica de cuatro manos precede a cualquier imagen.',
        },
        {
          cells: [
            'Hipotensión con timpanismo y ausencia de murmullo',
            'Descompresión inmediata con aguja o tubo pleural',
            'Esperar la placa de tórax para confirmar neumotórax a tensión',
          ],
          say: 'Nunca esperes una radiografía ante un neumotórax a tensión. El diagnóstico es puramente clínico y la descompresión es inmediata.',
        },
        {
          cells: [
            'Sangre en meato uretral y hematoma perineal',
            'Uretrografía retrógrada o cistostomía suprapúbica',
            'Forzar el paso de una sonda Foley lubricada',
          ],
          say: 'Forzar una sonda Foley ante una rotura uretral transforma un desgarro parcial en una sección completa e introduce gérmenes a un hematoma pélvico.',
        },
        {
          cells: [
            'Shock hemorrágico clase cuatro por trauma',
            'Protocolo balanceado uno a uno a uno y ácido tranexámico',
            'Infusión masiva rápida de tres litros de suero fisiológico frío',
          ],
          say: 'La sobrecarga masiva de cristaloides diluye plaquetas, congela al paciente y empeora la coagulopatía. La reanimación moderna es con hemoderivados.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.027',
      stem: 'Un hombre de 24 años ingresa a urgencias tras una colisión en motocicleta a alta velocidad. Se encuentra inmovilizado en tabla espinal y con collar cervical. Al examen físico está estuporoso, emite sonidos incomprensibles, no abre los ojos y presenta postura de descerebración ante el estímulo doloroso, totalizando un puntaje en la escala de Glasgow de 4 puntos. ¿Cuál es la primera medida que debe adoptarse según el protocolo ATLS?',
      question: '¿Cuál es la medida prioritaria según el ATLS?',
      options: [
        { letter: 'A', text: 'Trasladar de inmediato a pabellón para laparotomía exploradora' },
        { letter: 'B', text: 'Realizar intubación orotraqueal con estabilización cervical manual en línea' },
        { letter: 'C', text: 'Solicitar tomografía computarizada cerebral de urgencia' },
        { letter: 'D', text: 'Administrar dos mil mililitros de suero fisiológico frío en bolo' },
        { letter: 'E', text: 'Instalar una sonda nasogástrica por fosa nasal derecha' },
      ],
      correct: 'B',
      explanation: 'En el protocolo ATLS el paso A es la prioridad absoluta. Un puntaje en la Escala de Coma de Glasgow menor o igual a 8 puntos constituye una indicación formal de vía aérea definitiva mediante intubación orotraqueal con técnica de 4 manos y estabilización cervical bimanual.',
      say: {
        stem: 'Revisemos esta pregunta representativa del protocolo ATLS. Un paciente joven politraumatizado ingresa estuporoso con cuatro puntos en la escala de coma de Glasgow tras un accidente en motocicleta.',
        question: '¿Cuál es la primera medida prioritaria que se debe realizar?',
        options: 'Las alternativas proponen: trasladar a pabellón de inmediato, intubación orotraqueal con estabilización cervical en línea, tomografía computarizada cerebral urgente, dos litros de suero en bolo o sonda nasogástrica. Piénsalo.',
        answer: 'La respuesta correcta es la B. Con un puntaje en la escala de Glasgow menor o igual a ocho puntos, el paciente es incapaz de proteger su vía aérea y tiene riesgo inminente de aspiración y muerte por asfixia. La prioridad indiscutible del paso A es la intubación orotraqueal con fijación manual en línea bimanual retirando temporalmente la valva anterior del collar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.027',
      stem: 'Un paciente de 30 años politraumatizado por atropello ingresa pálido y taquicárdico, con presión arterial de 80/50 mmHg. Al examen segmentario se constata presencia de sangre en el meato uretral y un hematoma en alas de mariposa en la región perineal. ¿Cuál es la conducta correcta respecto a la instalación de sondas en este paciente?',
      question: '¿Cuál es la conducta respecto al cateterismo vesical?',
      options: [
        { letter: 'A', text: 'Instalar sonda Foley lubricada ejerciendo presión suave y continua' },
        { letter: 'B', text: 'Contraindicar sonda Foley uretral y evaluar cistostomía suprapúbica o uretrografía' },
        { letter: 'C', text: 'Instalar sonda nasogástrica y sonda Foley para balance estricto' },
        { letter: 'D', text: 'Dilatar la uretra con bujías metálicas previo al paso de sonda' },
        { letter: 'E', text: 'Realizar punción suprapúbica a ciegas con trocar grueso sin ecografía' },
      ],
      correct: 'B',
      explanation: 'La presencia de uretrorragia y hematoma perineal en alas de mariposa son signos cardinales de sospecha de rotura de uretra membranosa. En esta condición está terminantemente contraindicado el cateterismo uretral por el riesgo de seccionar una uretra parcialmente desgarrada.',
      say: {
        stem: 'Veamos este caso cardinal sobre manejo de vías y anexos. Un paciente politraumatizado hipotenso presenta sangre en el meato uretral y un hematoma perineal en alas de mariposa.',
        question: '¿Cuál es la conducta correcta respecto al cateterismo urinario?',
        options: 'Las alternativas plantean: pasar sonda Foley con presión suave, contraindicar sonda Foley y evaluar cistostomía o uretrografía, instalar sonda nasogástrica y Foley, dilatar con bujías o punción a ciegas. Piénsalo.',
        answer: 'La respuesta correcta es la B. La tríada de sangre en el meato uretral, hematoma perineal y próstata flotante indica rotura uretral. El paso a ciegas de una sonda Foley está estrictamente prohibido porque convierte un desgarro parcial en una sección completa y contamina el espacio pélvico. Debe solicitarse uretrografía retrógrada o realizar una cistostomía suprapúbica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.027',
      stem: 'En el contexto de la reanimación del shock hemorrágico por politraumatismo severo, ¿cuál es el beneficio demostrado de la administración precoz de ácido tranexámico según la evidencia clínica actual?',
      question: '¿Cuál es el rol del ácido tranexámico en shock hemorrágico?',
      options: [
        { letter: 'A', text: 'Aumentar la agregación plaquetaria si se indica después de cuatro horas del trauma' },
        { letter: 'B', text: 'Reducir la mortalidad por sangrado al inhibir la fibrinólisis dentro de las tres primeras horas' },
        { letter: 'C', text: 'Revertir de manera selectiva el efecto de los anticoagulantes orales directos' },
        { letter: 'D', text: 'Disminuir la incidencia de insuficiencia renal aguda por rabdomiólisis' },
        { letter: 'E', text: 'Reemplazar por completo la necesidad de transfundir concentrado de plaquetas' },
      ],
      correct: 'B',
      explanation: 'El ensayo CRASH-2 demostró que la administración precoz de ácido tranexámico (1 g en bolo EV en 10 minutos seguido de 1 g en infusión por 8 horas) reduce significativamente la mortalidad por hemorragia al bloquear la fibrinólisis, siempre que se administre dentro de las primeras 3 horas del evento traumático.',
      say: {
        stem: 'Analicemos esta pregunta sobre farmacología del trauma. Se consulta por el beneficio y momento de indicación del ácido tranexámico en la reanimación del shock hemorrágico por politraumatismo.',
        question: '¿Cuál es el beneficio comprobado del ácido tranexámico?',
        options: 'Las opciones son: aumentar la agregación plaquetaria después de cuatro horas, reducir la mortalidad por hemorragia administrado antes de las tres horas, revertir anticoagulantes orales, prevenir falla renal o reemplazar las plaquetas. Piénsalo.',
        answer: 'La respuesta correcta es la B. El ácido tranexámico es un antifibrinolítico que reduce la mortalidad en trauma sangrante si se administra de forma precoz, dentro de las primeras tres horas del impacto. Administrado más tarde de ese plazo no aporta beneficio e incluso puede elevar la mortalidad tromboembólica.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en evaluación inicial del politraumatizado',
      cards: [
        {
          title: 'Prioridades del A-B-C-D-E',
          tag: 'Soporte vital estricto',
          kind: 'alert',
          items: [
            {
              t: 'Tratar primero lo que mata primero',
              d: 'Secuencia estricta y reanimación concomitante inmediata',
              say: 'La evaluación primaria es dinámica: nunca avances al siguiente paso sin haber controlado y resuelto la amenaza del paso previo.',
            },
            {
              t: 'Glasgow menor o igual a ocho exige intubación',
              d: 'Proteger siempre la vía aérea con técnica de cuatro manos',
              say: 'Todo paciente con Glasgow menor o igual a ocho puntos requiere vía aérea definitiva mediante intubación oro-traqueal con inmovilización cervical manual en línea.',
            },
            {
              t: 'Neumotórax a tensión se descomprime sin radiografía',
              d: 'Punción pleural inmediata en tórax antes de cualquier traslado',
              say: 'El neumotórax a tensión es una emergencia clínica pura: punciona y descomprime de inmediato sin esperar imágenes.',
            },
          ],
        },
        {
          title: 'Reanimación y contraindicaciones',
          tag: 'Errores fatales',
          kind: 'key',
          items: [
            {
              t: 'Uretrorragia contraindica la sonda Foley',
              d: 'Pedir uretrografía retrógrada o indicar cistostomía suprapúbica',
              say: 'Ante sospecha de rotura uretral por uretrorragia o hematoma perineal, la sonda Foley está estrictamente prohibida.',
            },
            {
              t: 'Prevenir la tríada letal desde el primer minuto',
              d: 'Abrigo, sueros tibios, transfusión uno a uno a uno y ácido tranexámico',
              say: 'Si te llevas una sola idea de hoy: en el politraumatizado grave, la hipotermia, la acidosis y la coagulopatía forman un círculo vicioso letal. Reanima precozmente con hemoderivados balanceados uno a uno a uno, ácido tranexámico antes de tres horas y calentamiento activo para preservar la vida. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Reanimación Inicial del Politraumatizado (Protocolo ATLS)',
    root: N(
      'start',
      'Ingreso de paciente politraumatizado a box de reanimación',
      'Inmovilización espinal y monitorización multiparámetro',
      'Iniciamos la evaluación primaria A-B-C-D-E con reanimación simultánea.',
      [
        'Paso A: Vía aérea',
        N(
          'q',
          '¿Vía aérea comprometida o Glasgow menor o igual a ocho?',
          'Apnea, estridor, quemadura inhalatoria o coma',
          'Evaluamos si la vía aérea está permeable y si el paciente es capaz de protegerla.',
          [
            'Glasgow menor o igual a ocho o apnea',
            N(
              'do',
              'Intubación orotraqueal con técnica de cuatro manos',
              'Estabilización manual en línea de columna cervical',
              'Se realiza intubación oro-traqueal manteniendo alineación cervical manual neutra por un segundo operador.',
              [
                'Vía aérea asegurada',
                N(
                  'ok',
                  'Avanzar a ventilación y oxigenación',
                  'Oxígeno al cien por ciento y monitor de saturación',
                  'Con la vía aérea protegida, pasamos de inmediato al paso B de ventilación.'
                )
              ]
            )
          ],
          [
            'Vía aérea permeable y habla',
            N(
              'ok',
              'Oxígeno con mascarilla de no recirculación',
              'Collar cervical rígido en posición neutra',
              'Se mantiene el collar cervical y se administra oxígeno a diez a quince litros por minuto.'
            )
          ]
        )
      ],
      [
        'Paso B: Ventilación',
        N(
          'q',
          '¿Neumotórax a tensión o tórax inestable?',
          'Hipotensión, timpanismo y asimetría ventilatoria',
          'Buscamos activamente lesiones torácicas con riesgo vital inminente.',
          [
            'Neumotórax a tensión evidente',
            N(
              'alert',
              'Descompresión inmediata con aguja o tubo',
              'Punción en segundo espacio intercostal línea medioclavicular',
              'Se realiza toracostomía con aguja y luego pleurostomía formal sin esperar radiografía de tórax.'
            )
          ],
          [
            'Ventilación bilateral conservada',
            N(
              'ok',
              'Auscultación simétrica y buena oxigenación',
              'Saturación adecuada con soporte de oxígeno',
              'Se confirma adecuada ventilación y se avanza al paso C circulatorio.'
            )
          ]
        )
      ],
      [
        'Paso C: Circulación',
        N(
          'q',
          '¿Shock hemorrágico o sangrado activo?',
          'Hipotensión arterial, taquicardia y palidez cutánea',
          'Evaluamos pulso, presión arterial y hemostasia externa.',
          [
            'Hemorragia externa exanguinante',
            N(
              'do',
              'Compresión directa o torniquete en extremidad',
              'Cohibir sangrado antes de infusión de fluidos',
              'Se aplica compresión firme o torniquete proximal en la extremidad afectada.'
            )
          ],
          [
            'Shock hemorrágico clase tres o cuatro',
            N(
              'alert',
              'Transfusión masiva uno a uno a uno y tranexámico',
              'Dos vías venosas periféricas o acceso intraóseo',
              'Se activa protocolo de transfusión masiva balanceado y se infunde ácido tranexámico antes de tres horas.',
              [
                'Pelvis inestable',
                N(
                  'do',
                  'Colocación de sábana o faja pélvica',
                  'A nivel de trocánteres mayores para cerrar anillo',
                  'Se estabiliza el anillo pélvico a nivel trocantérico y se planifica angioembolización o pabellón.'
                )
              ]
            )
          ]
        )
      ]
    ),
  },
};
