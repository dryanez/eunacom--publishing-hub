// Clase 11.13 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Regla de Wallace, clasificación de profundidad, criterios de gran quemado GES 56, fórmula de Parkland, injuria inhalatoria y escarotomía',
      say: 'Bienvenidos a la clase de quemaduras graves y paciente gran quemado. En el EUNACOM este tema es de máxima rentabilidad porque combina el cálculo matemático exacto de fluidos mediante la fórmula de Parkland, la definición legal de las garantías GES número cincuenta y seis, el reconocimiento precoz de la injuria inhalatoria para intubación inmediata y la indicación urgente de escarotomía en quemaduras circulares. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología sistémica',
      title: 'Del daño térmico cutáneo al shock distributivo e hipovolémico',
      nodes: [
        { id: 'ter', col: 0, row: 2, k: 'start', t: 'Agresión térmica tisular', s: 'Fuego directo · líquidos calientes · electricidad o químicos' },
        { id: 'des', col: 1, row: 1, k: 'mech', t: 'Pérdida de barrera epidérmica', s: 'Evaporación masiva e invasión bacteriana descontrolada' },
        { id: 'per', col: 2, row: 0, k: 'alert', t: 'Aumento de permeabilidad capilar', s: 'Liberación masiva de histamina, tromboxanos y citoquinas' },
        { id: 'ter3', col: 2, row: 2, k: 'risk', t: 'Fuga plasmática al tercer espacio', s: 'Extravasación de agua y albúmina en tejidos sanos y quemados' },
        { id: 'sho', col: 3, row: 1, k: 'trap', t: 'Shock por quemadura', s: 'Hemoconcentración severa, hipovolemia y colapso circulatorio' },
        { id: 'par', col: 4, row: 2, k: 'good', t: 'Reanimación Parkland y titulación', s: 'Ringer Lactato guiado por diuresis horaria estricta' },
      ],
      edges: [
        { from: 'ter', to: 'des', label: 'necrosis coagulativa' },
        { from: 'ter', to: 'per', label: 'respuesta inflamatoria' },
        { from: 'per', to: 'ter3', label: 'extravasación' },
        { from: 'des', to: 'sho', label: 'pérdida de fluidos' },
        { from: 'ter3', to: 'sho', label: 'caída del volumen' },
        { from: 'sho', to: 'par', label: 'reanimación precoz' },
      ],
      steps: [
        {
          show: ['ter', 'des'],
          note: 'Destrucción de la integridad cutánea',
          say: 'El daño térmico destruye la barrera protectora de la piel por necrosis coagulativa. Esto provoca una evaporación masiva de agua libre, pérdida del control térmico corporal y desprotección inmunológica frente a infecciones bacterianas.',
        },
        {
          show: ['per', 'ter3'],
          note: 'Respuesta inflamatoria sistémica y fuga capilar',
          say: 'En quemaduras que superan el veinte por ciento de superficie corporal, se desata una tormenta inflamatoria sistémica. La permeabilidad microvascular aumenta no solo en la quemadura, sino en todo el lecho capilar del organismo, permitiendo la salida masiva de plasma y proteínas hacia el espacio intersticial.',
        },
        {
          show: ['sho', 'par'],
          note: 'Shock hipovolémico y soporte hidroelectrolítico',
          say: 'Esta fuga genera una hipovolemia brutal con hemoconcentración marcada, shock distributivo y falla renal aguda prerrenal por hipoperfusión. La única medida que previene la muerte es la reposición hidroelectrolítica inmediata con Ringer Lactato titulada minuto a minuto según la diuresis horaria.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación anatomopatológica',
      title: 'Clasificación de profundidad tisular de las quemaduras',
      cards: [
        {
          title: 'Primero y segundo grado',
          tag: 'Compromiso parcial',
          kind: 'criteria',
          items: [
            {
              t: 'Primer grado o epidérmica',
              d: 'Eritema doloroso sin flictenas; NO suma para el cálculo de SCQ',
              say: 'La quemadura de primer grado, como la solar, solo afecta la epidermis. Cursa con eritema y dolor pero sin ampollas. Grábate esto: jamás se contabiliza en el cálculo de superficie corporal quemada ni en la fórmula de Parkland.',
            },
            {
              t: 'Segundo grado superficial dérmica',
              d: 'Flictenas húmedas, lecho rosado exudativo e hiperestesia exquisita',
              say: 'El segundo grado superficial compromete la dermis papilar. Presenta ampollas o flictenas intactas, lecho rosado muy húmedo y dolor intenso al roce. Cura espontáneamente en diez a catorce días sin cicatriz patológica.',
            },
            {
              t: 'Segundo grado profundo',
              d: 'Lecho pálido moteado, hipoestesia y requiere escisión tangencial',
              say: 'El segundo grado profundo lesiona la dermis reticular. El lecho es pálido, seco y moteado, con dolor disminuido por destrucción parcial de terminaciones nerviosas. Tarda más de veintiún días en epitelizar y suele requerir injerto.',
            },
          ],
        },
        {
          title: 'Tercer grado o espesor total',
          tag: 'Destrucción total',
          kind: 'alert',
          items: [
            {
              t: 'Escara acartonada insensible',
              d: 'Aspecto en cuero tostado blanco o carbonizado e indolora',
              say: 'El tercer grado destruye todas las capas dérmicas hasta el tejido celular subcutáneo. La lesión es una escara rígida, acartonada, de color blanco céreo o marrón, y completamente insensible al tacto y al pinchazo.',
            },
            {
              t: 'Tratamiento quirúrgico mandatorio',
              d: 'Incapaz de epitelizar; requiere escisión fascial e injertos dermoepidérmicos',
              say: 'Al destruirse los anejos pilosebáceos, el tercer grado es incapaz de regenerar piel. Requiere escisión quirúrgica precoz en pabellón y cobertura definitiva con autoinjertos de piel parcial.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Medición de superficie',
      title: 'Regla de los nueves de Wallace y regla de la palma',
      cards: [
        {
          title: 'Regla de los 9 en adultos',
          tag: 'Múltiplos de nueve',
          kind: 'key',
          items: [
            {
              t: 'Cabeza y extremidades superiores',
              d: 'Cabeza y cuello nueve por ciento; cada brazo nueve por ciento',
              say: 'La cabeza y cuello representan el nueve por ciento de la superficie corporal total. Cada extremidad superior completa, incluyendo mano y antebrazo, equivale a un nueve por ciento.',
            },
            {
              t: 'Tronco anterior y dorso',
              d: 'Tórax y abdomen dieciocho por ciento; espalda y glúteos dieciocho por ciento',
              say: 'El tronco anterior suma un dieciocho por ciento, dividido en tórax y abdomen. La cara posterior del tronco y los glúteos suman otro dieciocho por ciento.',
            },
            {
              t: 'Extremidades inferiores y periné',
              d: 'Cada pierna dieciocho por ciento; región genital y periné uno por ciento',
              say: 'Cada extremidad inferior completa desde el muslo hasta el pie representa un dieciocho por ciento. La región genital y periné aporta el uno por ciento restante.',
            },
          ],
        },
        {
          title: 'Regla de la palma en quemaduras parcheadas',
          tag: 'Estimación rápida',
          kind: 'criteria',
          items: [
            {
              t: 'Palma del paciente con dedos juntos',
              d: 'Representa exactamente el uno por ciento de su superficie corporal',
              say: 'En quemaduras irregulares o dispersas se utiliza la palma de la mano del paciente con los dedos juntos, que equivale al uno por ciento de su superficie corporal total.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Distribución anatómica',
      title: 'Regla de Wallace y consideraciones diagnósticas en adultos',
      head: ['Segmento anatómico', 'Porcentaje SCQ', 'Consideración clínica especial', 'Riesgo evaluado'],
      rows: [
        {
          cells: ['Cabeza y cuello', '9% total (4.5% anterior / 4.5% posterior)', 'Zona estética especial', 'Alta sospecha de injuria inhalatoria'],
          say: 'La cabeza y cuello aportan nueve por ciento y exigen descartar compromiso de vía aérea.',
        },
        {
          cells: ['Tronco anterior', '18% (tórax y abdomen)', 'Evaluar mecánica torácica', 'Restricción ventilatoria si es circular'],
          say: 'El tronco anterior equivale a dieciocho por ciento; si la quemadura es circular, impide expandir la caja torácica.',
        },
        {
          cells: ['Tronco posterior', '18% (dorso y glúteos)', 'Requiere giro en bloque', 'Lesiones inadvertidas en decúbito'],
          say: 'El dorso aporta dieciocho por ciento y obliga a desvestir y rotar al paciente para examinarlo por completo.',
        },
        {
          cells: ['Extremidades superiores', '9% cada brazo (18% total)', 'Manos son zona especial funcional', 'Monitoreo de pulsos distales'],
          say: 'Cada extremidad superior representa nueve por ciento; el compromiso de manos es criterio GES por secuela funcional.',
        },
        {
          cells: ['Extremidades inferiores', '18% cada pierna (36% total)', 'Pies son zona de apoyo especial', 'Riesgo de síndrome compartimental'],
          say: 'Cada pierna suma dieciocho por ciento y su quemadura profunda puede ocluir el retorno vascular tibial.',
        },
        {
          cells: ['Genitales y periné', '1%', 'Zona especial contaminada', 'Instalación precoz de sonda Foley'],
          say: 'Los genitales representan el uno por ciento; se instala sonda Foley antes de que el edema impida el cateterismo.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Prioridad sanitaria nacional',
      title: 'Criterios de Gran Quemado y Garantías Explícitas en Salud (GES 56)',
      cards: [
        {
          title: 'Definición de Gran Quemado',
          tag: 'Criterios ministeriales',
          kind: 'alert',
          items: [
            {
              t: 'Índice de Garcés mayor a setenta puntos',
              d: 'O quemaduras de segundo o tercer grado mayores al veinte por ciento',
              say: 'Se define como Gran Quemado a todo paciente con índice de gravedad de Garcés superior a setenta puntos, o con más del veinte por ciento de superficie corporal quemada en adultos o más del diez por ciento en niños o ancianos.',
            },
            {
              t: 'Tercer grado mayor al cinco por ciento',
              d: 'O quemaduras de alta energía con comorbilidades descompensadas',
              say: 'También clasifica como gran quemado quien presente quemaduras de tercer grado que superen el cinco por ciento de superficie corporal, o quemaduras asociadas a politrauma mayor.',
            },
            {
              t: 'Compromiso de zonas especiales',
              d: 'Cara, cuello, manos, pies, genitales, periné o grandes articulaciones',
              say: 'Toda quemadura profunda en áreas funcionales y estéticas críticas califica como grave y requiere derivación a centros especializados.',
            },
          ],
        },
        {
          title: 'Mecanismos específicos de alta gravedad',
          tag: 'Derivación inmediata',
          kind: 'key',
          items: [
            {
              t: 'Quemadura de vía aérea por inhalación',
              d: 'Inhalación de humo y gases calientes en espacios confinados',
              say: 'La sospecha de trauma inhalatorio califica automáticamente al paciente como gran quemado independientemente del porcentaje cutáneo.',
            },
            {
              t: 'Quemadura eléctrica de alto voltaje',
              d: 'Voltaje mayor a mil voltios con riesgo de rabdomiólisis y arritmias',
              say: 'Las quemaduras eléctricas de alto voltaje causan destrucción muscular profunda masiva, mioglobinuria y riesgo de insuficiencia renal aguda.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Resucitación hidroelectrolítica',
      title: 'Fórmula de Parkland y distribución en el tiempo',
      cards: [
        {
          title: 'Cálculo de volumen total en 24 horas',
          tag: 'Fórmula clásica de Parkland',
          kind: 'pharma',
          items: [
            {
              t: 'Cuatro mililitros por kilogramo por porcentaje de SCQ',
              d: 'Volumen total de Ringer Lactato a infundir en veinticuatro horas',
              say: 'La fórmula de Parkland establece: cuatro mililitros multiplicado por el peso del paciente en kilogramos y por el porcentaje de superficie corporal quemada de segundo y tercer grado.',
            },
            {
              t: 'Solución cristaloide de elección: Ringer Lactato',
              d: 'Evita la acidosis hiperclorémica producida por el suero fisiológico',
              say: 'El fluido estándar es el Ringer Lactato tibio. El suero fisiológico al cero nueve por ciento está desaconsejado en grandes volúmenes porque produce acidosis metabólica hiperclorémica severa.',
            },
          ],
        },
        {
          title: 'Distribución temporal estricta',
          tag: 'La gran trampa del EUNACOM',
          kind: 'alert',
          items: [
            {
              t: 'Cincuenta por ciento en las primeras ocho horas',
              d: 'Contadas rigurosamente desde la HORA DEL ACCIDENTE',
              say: 'Esta es la trampa que más se pregunta: la mitad del volumen calculado debe pasarse en las primeras ocho horas contadas desde el momento exacto en que ocurrió la quemadura, no desde el ingreso al hospital.',
            },
            {
              t: 'Cincuenta por ciento restante en dieciséis horas',
              d: 'Se infunde a velocidad constante durante el segundo período',
              say: 'El cincuenta por ciento restante se administra en las siguientes dieciséis horas. Si el paciente llega a urgencias dos horas después del fuego, debes pasar la mitad en las seis horas restantes.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Titulación de fluidos',
      title: 'Monitoreo hemodinámico y meta de diuresis horaria',
      cards: [
        {
          title: 'Diuresis horaria: estándar de oro',
          tag: 'Sonda vesical con urómetro',
          kind: 'key',
          items: [
            {
              t: 'Meta en adultos: 0.5 a 1.0 mL por kilo por hora',
              d: 'Parámetro clínico más confiable para regular la velocidad de infusión',
              say: 'La diuresis horaria medida con urómetro estricto es el mejor parámetro para guiar la reposición. En adultos la meta es mantener entre cero coma cinco y un mililitro por kilo por hora.',
            },
            {
              t: 'Meta en niños: 1.0 a 1.5 mL por kilo por hora',
              d: 'Mayor requerimiento urinario por inmadurez renal fisiológica',
              say: 'En pacientes pediátricos la meta de diuresis horaria es más exigente, debiendo mantenerse entre uno y uno coma cinco mililitros por kilo por hora.',
            },
          ],
        },
        {
          title: 'Ajuste dinámico de velocidad',
          tag: 'Evitar el sobrellenado',
          kind: 'alert',
          items: [
            {
              t: 'Ajuste porcentual cada sesenta minutos',
              d: 'Subir o bajar un veinte a treinta por ciento el goteo según diuresis',
              say: 'La fórmula de Parkland es solo un punto de partida. Si la diuresis cae bajo la meta, aumentas el flujo un veinte por ciento; si supera la meta, lo reduces para no provocar edema pulmonar.',
            },
            {
              t: 'Prevención de síndrome compartimental abdominal',
              d: 'La sobrehidratación masiva dispara la presión intraabdominal',
              say: 'Infundir líquidos en exceso provoca un tercer espacio masivo intraabdominal, hipertensión intrabdominal y síndrome compartimental con anuria e isquemia intestinal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Urgencia respiratoria',
      title: 'Sospecha de injuria inhalatoria e intubación precoz',
      cards: [
        {
          title: 'Signos clínicos de sospecha de vía aérea',
          tag: 'Fuego en espacio cerrado',
          kind: 'alert',
          items: [
            {
              t: 'Antecedente de recinto cerrado y esputo carbonáceo',
              d: 'Atrapamiento en incendios con inhalación de vapores tóxicos',
              say: 'La sospecha nace de la historia de incendio en lugar cerrado con pérdida de conciencia, esputo con partículas de carbón y vibrisas nasales o cejas chamuscadas.',
            },
            {
              t: 'Disfonía y estridor laríngeo inspiratorio',
              d: 'Edema supraglótico progresivo con riesgo de oclusión total inminente',
              say: 'La presencia de voz ronca, disfonía o estridor inspiratorio indica que la glotis y las cuerdas vocales están severamente edematizadas y a punto de cerrarse.',
            },
          ],
        },
        {
          title: 'Conducta médica obligatoria',
          tag: 'Asegurar vía aérea',
          kind: 'key',
          items: [
            {
              t: 'Intubación orotraqueal inmediata sin demora',
              d: 'Nunca esperar la radiografía ni gases arteriales ante estridor',
              say: 'Ante estridor laríngeo o quemadura profunda de cuello, la intubación orotraqueal debe realizarse de inmediato. Esperar unas horas puede imposibilitar la laringoscopía y obligar a una traqueostomía de urgencia.',
            },
            {
              t: 'Manejo de intoxicación por monóxido de carbono',
              d: 'Oxígeno al cien por ciento con mascarilla de no recirculación',
              say: 'Todo paciente atrapado en un incendio debe recibir oxígeno al cien por ciento para desplazar al monóxido de carbono de la hemoglobina y reducir su vida media de cuatro horas a cuarenta minutos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Descompresión quirúrgica urgente',
      title: 'Escarotomía descompresiva en quemaduras circulares de tercer grado',
      cards: [
        {
          title: 'Mecanismo del torniquete cutáneo',
          tag: 'Síndrome compartimental por escara',
          kind: 'alert',
          items: [
            {
              t: 'Escara rígida inextensible',
              d: 'El edema subyacente colapsa la circulación venosa y arterial',
              say: 'La piel con quemadura de tercer grado se vuelve una coraza inelástica. Conforme se infunden sueros, el edema muscular aumenta la presión hasta superar la presión capilar y arterial.',
            },
            {
              t: 'Signos de isquemia distal en extremidades',
              d: 'Dolor desproporcionado, parestesias, palidez y ausencia de pulsos',
              say: 'En una extremidad quemada de forma circular aparecen dolor exquisito, pérdida de sensibilidad en los dedos y finalmente desaparición del pulso radial o pedio.',
            },
          ],
        },
        {
          title: 'Técnica de la escarotomía',
          tag: 'Procedimiento de salvataje en box',
          kind: 'key',
          items: [
            {
              t: 'Incisiones longitudinales mediales y laterales',
              d: 'Se incide la escara en toda su longitud hasta ver grasa subcutánea',
              say: 'La escarotomía se realiza en el box de urgencias incidiendo con bisturí la escara a lo largo de las caras lateral y medial del miembro hasta alcanzar el tejido celular subcutáneo.',
            },
            {
              t: 'Escarotomía torácica en enrejado',
              d: 'Líneas axilares anteriores y transversas para liberar la excursión respiratoria',
              say: 'Si la quemadura circular compromete el tórax, la escara impide la expansión pulmonar produciendo hipoventilación severa. Se realizan incisiones en enrejado para liberar la caja torácica.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de enfrentamiento del paciente gran quemado (Guías GES)',
      say: 'Analicemos el árbol de decisiones frente a un paciente con quemaduras graves. El primer paso es descartar compromiso de la vía aérea e iniciar de inmediato el cálculo de reanimación hidroelectrolítica.',
    },

    {
      type: 'table',
      kicker: 'Trampas del EUNACOM',
      title: 'Errores frecuentes en la evaluación y reanimación de quemados',
      head: ['Escenario clínico', 'Conducta médica estándar', 'Error fatal o trampa'],
      rows: [
        {
          cells: [
            'Eritema solar extenso sin ampollas en espalda',
            'No contabilizar en la regla de Wallace ni Parkland',
            'Sumar dieciocho por ciento e infundir miles de mililitros de suero',
          ],
          say: 'El primer grado nunca se suma en el cálculo de Parkland; sobrehidratar a un paciente por eritema es una iatrogenia grave.',
        },
        {
          cells: [
            'Paciente quemado hace tres horas que llega a urgencias',
            'Calcular la mitad de Parkland para las cinco horas restantes',
            'Iniciar un reloj de ocho horas completas a partir del ingreso hospitalario',
          ],
          say: 'Las primeras ocho horas de la fórmula de Parkland se cuentan desde la hora del accidente y no desde la llegada a urgencias.',
        },
        {
          cells: [
            'Quemadura facial con disfonía y estridor inspiratorio',
            'Intubación orotraqueal inmediata en el box',
            'Observar evolución con nebulizaciones de adrenalina y corticoides',
          ],
          say: 'Esperar ante un estridor en un quemado conduce a la asfixia total por edema glótico irreversible.',
        },
        {
          cells: [
            'Quemadura circular de tercer grado en antebrazo sin pulso',
            'Escarotomía longitudinal urgente en urgencias',
            'Elevar la extremidad y aplicar compresas con hielo esperando al cirujano',
          ],
          say: 'El hielo agrava la isquemia tisular; el síndrome compartimental por escara exige apertura quirúrgica inmediata.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Oficial',
      title: 'EUNACOM Enero 2023 · Pregunta 77',
      recTag: 'EUNACOM Enero 2023 · Pregunta 77',
      stem: 'Un niño presenta una quemadura en palmas y dedos de ambas manos con eritema importante y ampollas húmedas tras tomar un objeto caliente. Se encuentra intensamente inquieto, irritable y lloroso en la sala de urgencias. ¿Cuál es la conducta médica inicial prioritaria?',
      question: '¿Cuál es la conducta inicial prioritaria?',
      options: [
        { letter: 'A', text: 'Aplicar apósitos de plata y hospitalizar' },
        { letter: 'B', text: 'Enfriar con agua fría y cubrir con gasa estéril' },
        { letter: 'C', text: 'Indicar analgesia endovenosa inmediata' },
        { letter: 'D', text: 'Hospitalizar para manejo de quemaduras sin analgesia previa' },
        { letter: 'E', text: 'Debridación bajo anestesia general inmediata' },
      ],
      correct: 'C',
      explanation: 'Las quemaduras de segundo grado superficial son extraordinariamente dolorosas por exposición de terminaciones nerviosas dérmicas intactas. En un paciente pediátrico con dolor severo e irritabilidad, el control del dolor mediante analgesia parenteral adecuada es la prioridad clínica inicial absoluta antes de cualquier curación o procedimiento local.',
      say: {
        stem: 'Revisemos esta pregunta oficial de enero de dos mil veintitrés. Un niño con quemadura de segundo grado con ampollas en ambas manos llega extremadamente irritable, lloroso y con dolor severo a urgencias.',
        question: '¿Cuál es la conducta médica inicial prioritaria?',
        options: 'Las alternativas proponen: aplicar apósitos de plata, enfriar con agua fría, analgesia endovenosa inmediata, hospitalizar directamente o debridar en pabellón. Piénsalo.',
        answer: 'La respuesta correcta es la C, indicar analgesia endovenosa inmediata. El dolor en las quemaduras superficiales es atroz debido a las terminaciones nerviosas desnudas. En urgencias no se puede manipular ni curar una quemadura sin antes haber garantizado una analgesia potente y eficaz por vía endovenosa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026',
      stem: 'Un hombre de 70 kg sufre quemaduras por fuego hace 2 horas, comprometiendo todo el tronco anterior (tórax y abdomen) y ambas extremidades superiores en su totalidad con lesiones dérmicas de segundo y tercer grado. Aplicando la fórmula de Parkland, ¿cuál es el volumen total de Ringer Lactato a infundir en 24 horas y cómo debe distribuirse en las próximas horas?',
      question: '¿Cuál es el volumen total y su distribución horaria?',
      options: [
        { letter: 'A', text: '10.080 mL en 24 horas; infundir 5.040 mL en las próximas 6 horas' },
        { letter: 'B', text: '5.040 mL en 24 horas; infundir 2.520 mL en las próximas 6 horas' },
        { letter: 'C', text: '7.560 mL en 24 horas; infundir 3.780 mL en las próximas 6 horas' },
        { letter: 'D', text: '12.600 mL en 24 horas; infundir 6.300 mL en las próximas 8 horas' },
        { letter: 'E', text: '10.080 mL en 24 horas; infundir 5.040 mL en las próximas 8 horas' },
      ],
      correct: 'A',
      explanation: 'Superficie corporal quemada: tronco anterior 18% + ambos brazos 18% = 36% SCQ. Fórmula de Parkland: 4 mL x 70 kg x 36% = 10.080 mL en 24 horas. El 50% (5.040 mL) debe administrarse en las primeras 8 horas DESDE EL ACCIDENTE. Habiendo transcurrido 2 horas, ese volumen debe infundirse en las 6 horas restantes de esa ventana.',
      say: {
        stem: 'Analicemos este clásico ejercicio de cálculo de Parkland. Un hombre de setenta kilos con quemadura del tronco anterior y ambos brazos llega dos horas después del siniestro.',
        question: '¿Cuál es el volumen total calculado y su distribución?',
        options: 'Las opciones ofrecen diferentes volúmenes totales y ventanas de tiempo de seis u ocho horas. Piénsalo.',
        answer: 'La respuesta correcta es la A. El tronco anterior suma dieciocho y ambos brazos suman dieciocho, totalizando treinta y seis por ciento de superficie quemada. Cuatro por setenta por treinta y seis da diez mil ochenta mililitros. La mitad, cinco mil cuarenta mililitros, debe pasar en las primeras ocho horas del accidente. Como ya pasaron dos horas, ese volumen debe infundirse en las seis horas restantes.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026',
      stem: '¿Cuál es el mejor parámetro clínico individual para monitorizar y titular dinámicamente la velocidad de infusión de fluidos durante la reanimación hidroelectrolítica de un paciente gran quemado?',
      question: '¿Cuál es el parámetro clínico estándar de oro para titular fluidos?',
      options: [
        { letter: 'A', text: 'Presión venosa central mediante catéter venoso central' },
        { letter: 'B', text: 'Diuresis horaria estricta mediante sonda vesical con urómetro' },
        { letter: 'C', text: 'Valores seriados de hematocrito y hemoglobina' },
        { letter: 'D', text: 'Frecuencia cardíaca y tiempo de llenado capilar distal' },
        { letter: 'E', text: 'Nivel plasmático de lactato venoso periférico' },
      ],
      correct: 'B',
      explanation: 'La diuresis horaria cuantificada estrictamente a través de una sonda vesical con urómetro es el parámetro clínico individual más fidedigno y utilizado para guiar la fluidoterapia en el paciente quemado, con una meta estándar de 0.5 a 1.0 mL/kg/hora en adultos.',
      say: {
        stem: 'Revisemos esta pregunta sobre monitoreo en la reanimación del quemado. Se consulta por el mejor parámetro individual para titular la velocidad de los cristaloides.',
        question: '¿Cuál es el parámetro estándar de oro para guiar los sueros?',
        options: 'Las alternativas proponen: presión venosa central, diuresis horaria estricta con urómetro, hematocrito seriado, frecuencia cardíaca o lactato venoso. Piénsalo.',
        answer: 'La respuesta correcta es la B, diuresis horaria estricta mediante sonda vesical con urómetro. Ni la presión venosa central ni los signos vitales reflejan con tanta precisión la perfusión tisular efectiva como el flujo urinario horario, cuya meta en adultos es de cero cinco a un mililitro por kilo por hora.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026',
      stem: 'Un bombero de 38 años es rescatado de una habitación en llamas en un edificio. Presenta disfonía, tos con esputo carbonáceo y eritema facial con vibrisas nasales chamuscadas. Al examen pulmonar se ausculta estridor laríngeo inspiratorio leve y su saturación de oxígeno es de 98% con mascarilla. ¿Cuál es la conducta médica prioritaria?',
      question: '¿Cuál es la conducta médica prioritaria e inmediata?',
      options: [
        { letter: 'A', text: 'Realizar intubación orotraqueal inmediata' },
        { letter: 'B', text: 'Nebulizar con adrenalina racémica y budesonida en sala' },
        { letter: 'C', text: 'Solicitar radiografía de tórax y gases arteriales antes de actuar' },
        { letter: 'D', text: 'Indicar tratamiento con corticoides endovenosos en altas dosis' },
        { letter: 'E', text: 'Realizar lavado gástrico y administrar carbón activado' },
      ],
      correct: 'A',
      explanation: 'La presencia de esputo carbonáceo, quemadura facial y estridor inspiratorio tras incendio en espacio cerrado confirma injuria inhalatoria con edema laríngeo en progresión rápida. La intubación orotraqueal precoz e inmediata es mandatoria antes de que el edema supraglótico cierre completamente la vía aérea.',
      say: {
        stem: 'Analicemos este caso de urgencia respiratoria. Un bombero rescatado de un incendio cerrado presenta quemadura de vibrisas, esputo con carbón, disfonía y estridor laríngeo inspiratorio leve.',
        question: '¿Cuál es la conducta médica inmediata?',
        options: 'Las opciones son: intubación orotraqueal inmediata, nebulizar con adrenalina racémica, pedir radiografía de tórax previa, corticoides endovenosos o lavado gástrico. Piénsalo.',
        answer: 'La respuesta correcta es la A, intubación orotraqueal inmediata. El estridor laríngeo en un quemado indica que la vía aérea superior está a punto de colapsar por edema inflamatorio agudo. Si esperas que desature o pides una radiografía, las cuerdas vocales se cerrarán por completo, imposibilitando la intubación y forzando una vía aérea quirúrgica de rescate.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.026',
      stem: 'Un paciente de 40 años presenta una quemadura de tercer grado circular que rodea todo el antebrazo y muñeca derechos. A las 6 horas de evolución se queja de dolor insoportable distal a la lesión con parestesias en los dedos, edema tenso indurado y ausencia de pulso radial palpable. ¿Cuál es el procedimiento terapéutico de urgencia que debe realizarse?',
      question: '¿Cuál es el procedimiento terapéutico urgente indicado?',
      options: [
        { letter: 'A', text: 'Elevación del brazo y aplicación de compresas con hielo' },
        { letter: 'B', text: 'Escarotomía longitudinal descompresiva inmediata' },
        { letter: 'C', text: 'Infusión de heparina endovenosa para prevenir trombosis' },
        { letter: 'D', text: 'Colocación de férula de yeso cerrada acolchada' },
        { letter: 'E', text: 'Administración de vasodilatadores arteriales orales' },
      ],
      correct: 'B',
      explanation: 'El paciente presenta un síndrome compartimental agudo provocado por la escara rígida inelástica de una quemadura circular de tercer grado. La conducta de salvataje inmediata es la escarotomía descompresiva mediante incisiones longitudinales profundas en la escara hasta el tejido celular subcutáneo para liberar la presión y restablecer la perfusión.',
      say: {
        stem: 'Revisemos este caso de complicación vascular en quemaduras. Un paciente con quemadura circular de tercer grado en el antebrazo desarrolla dolor intolerable, pérdida de sensibilidad en los dedos y ausencia de pulsos distales.',
        question: '¿Cuál es el procedimiento terapéutico urgente que se debe realizar?',
        options: 'Las alternativas proponen: elevar el brazo con hielo, escarotomía longitudinal descompresiva inmediata, heparina endovenosa, yeso cerrado o vasodilatadores orales. Piénsalo.',
        answer: 'La respuesta correcta es la B, escarotomía longitudinal descompresiva inmediata. La escara inelástica de tercer grado actúa como un torniquete implacable sobre el antebrazo edematoso. La única forma de evitar la necrosis neuromuscular irreversible y la amputación es incidir la escara de polo a polo hasta descomprimir el compartimento.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en manejo de quemaduras graves',
      cards: [
        {
          title: 'Cálculo de fluidos y metas',
          tag: 'Parkland estricto',
          kind: 'alert',
          items: [
            {
              t: 'El primer grado nunca se suma en Parkland',
              d: 'Solo segundo y tercer grado cuentan para superficie corporal quemada',
              say: 'Grábate esta regla de oro: el eritema solar de primer grado jamás se contabiliza para la fórmula de Parkland.',
            },
            {
              t: 'Ocho horas contadas desde el accidente',
              d: 'El cincuenta por ciento del volumen se pasa en el tiempo restante',
              say: 'La mitad de los fluidos de Parkland debe infundirse en las primeras ocho horas del siniestro, no desde el ingreso.',
            },
            {
              t: 'La diuresis horaria manda la velocidad',
              d: 'Meta de cero coma cinco a un mililitro por kilo por hora en adultos',
              say: 'Ajusta el goteo de sueros según la diuresis horaria con sonda vesical: entre cero coma cinco y un mililitro por kilo por hora.',
            },
          ],
        },
        {
          title: 'Vía aérea y descompresión',
          tag: 'Salvavidas en urgencia',
          kind: 'key',
          items: [
            {
              t: 'Estridor inspiratorio exige intubación ya',
              d: 'Nunca esperar la radiografía si hay sospecha de vía aérea quemada',
              say: 'El estridor en un quemado es el último aviso antes del cierre total de la glotis: intuba de inmediato.',
            },
            {
              t: 'Quemadura circular sin pulsos exige escarotomía',
              d: 'Incisión longitudinal en la escara en el box hasta tejido celular',
              say: 'Si te llevas una sola idea de hoy: en quemaduras circulares de tercer grado que comprometen una extremidad o el tórax, la escara rígida produce un síndrome compartimental asfixiante o isquémico. Realiza de inmediato una escarotomía longitudinal en el box de urgencias para descomprimir los tejidos y salvar la extremidad. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo Inicial del Paciente Gran Quemado (Guías GES)',
    root: N(
      'start',
      'Ingreso de paciente con quemaduras agudas',
      'Evaluación primaria y cálculo de superficie corporal',
      'Iniciamos la atención evaluando la vía aérea y determinando si cumple criterios de Gran Quemado según Guías GES.',
      [
        '¿Signos de injuria inhalatoria o estridor?',
        N(
          'alert',
          'Vía aérea en riesgo vital inminente',
          'Esputo carbonáceo, disfonía o estridor inspiratorio',
          'Evaluamos si hay quemadura de vía aérea superior con riesgo de oclusión glótica.',
          [
            'Estridor o edema laríngeo',
            N(
              'do',
              'Intubación orotraqueal inmediata',
              'Tubo endotraqueal asegurado antes del cierre de glotis',
              'Se intuba de inmediato en el box y se administra oxígeno al cien por ciento para tratar monóxido de carbono.'
            )
          ]
        )
      ],
      [
        'Cálculo de SCQ y Reanimación hidroelectrolítica',
        N(
          'q',
          '¿SCQ mayor al veinte por ciento o criterios GES?',
          'Garcés mayor a setenta o tercer grado mayor a cinco por ciento',
          'Calculamos la superficie corporal quemada de segundo y tercer grado con la regla de Wallace.',
          [
            'Criterio de Gran Quemado confirmado',
            N(
              'do',
              'Fórmula de Parkland con Ringer Lactato',
              'Cuatro ml por kg por porcentaje de SCQ en veinticuatro horas',
              'Se inicia infusión de Ringer Lactato pasando el cincuenta por ciento en las primeras ocho horas del accidente.',
              [
                'Monitoreo con sonda vesical',
                N(
                  'ok',
                  'Meta de diuresis 0.5 a 1.0 mL por kg por hora',
                  'Ajustar velocidad de goteo cada hora según urómetro',
                  'Se titula la velocidad de sueros para mantener diuresis de cero coma cinco a un mililitro por kilo por hora.'
                )
              ]
            )
          ]
        )
      ],
      [
        'Quemaduras circulares profundas de tercer grado',
        N(
          'q',
          '¿Signos de isquemia distal o restricción torácica?',
          'Pérdida de pulsos distales, parestesias o hipoventilación',
          'Evaluamos la perfusión distal en miembros con quemaduras circulares o la ventilación en tórax.',
          [
            'Síndrome compartimental por escara rígida',
            N(
              'alert',
              'Escarotomía descompresiva de urgencia',
              'Incisiones longitudinales en la escara hasta tejido graso',
              'Se incide la escara en toda su longitud en el box de urgencias para restaurar el flujo vascular distal.'
            )
          ]
        )
      ]
    ),
  },
};
