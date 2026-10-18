// Clase 18.24 (Pediatría) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_pediatria_bloque_2.cjs (ped-24). Códigos (v3_topic_codes.json y v3_codemap.json):
// 2.01.2.020 Paro cardiorrespiratorio, 2.01.5.012 Reanimación cardiopulmonar pediátrica, 2.01.2.014 Intoxicaciones, 2.01.3.008
// Prevención de accidentes (ver el codemap para los niveles de Dx, Tx y seguimiento).
// Preguntas reales (rq por códigos + class_questions.cjs --search "organofosforad|paracetamol|cáustic|sueño seguro|reanimaci|accidente"):
// Julio 2019 P41 (síndrome colinérgico: atropina), Julio 2017 P108 (paracetamol: N-acetilcisteína), Julio 2016 P95 (cáustico: endoscopía),
// Julio 2015 P143 (posición del lactante al dormir: supina). Enunciados y alternativas copiados tal cual del banco.
// No usadas: Diciembre 2018 P40 (clave "AINES", pero la explicación del propio banco describe una intoxicación por tricíclicos: clave
// incoherente); Diciembre 2024 P28 (organofosforado con clave "Control sano habitual", incoherente con la explicación); Julio 2025 P81
// (organofosforado: la clave A incluye lavado gástrico, que el libro no indica de rutina); Diciembre 2025 P59 (reanimación del recién nacido:
// es de la clase de reanimación neonatal y las alternativas C y D traen texto corrupto); Julio 2013 P35 (atoro del lactante: 2.01.2.003);
// Diciembre 2022 P21 (quemadura por estufa, analgesia EV: el libro no trata el manejo de quemaduras).
// Foto: endoscopía con lesión esofágica grave (Nelson Fig. 373.3, por pila de botón; se usa solo como ejemplo de lesión esofágica
// endoscópica en la ingesta de cáusticos). Sin foto de maniobras de RCP ni de toxidromes en las fuentes locales; no hay foto de niño
// quemado sin ropa que cumpla la norma, así que no se incluye.
// En movimiento: scenes/ped_nuevas.html (?v=rcp), gráfico solo código (el tema no tiene una anatomía que animar).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-24',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Paro, reanimación, intoxicaciones y accidentes: la urgencia pediátrica que no puedes dejar para después',
      say: 'Bienvenido. Hoy vemos tres pilares de la urgencia pediátrica: la reanimación cardiopulmonar, las intoxicaciones y la prevención de accidentes. Son temas de mucha rentabilidad, porque se preguntan con antídotos, dosis y algoritmos, y porque los accidentes son la primera causa de muerte después del año de vida. Partamos por lo que hace distinto al paro del niño: casi nunca nace en el corazón.',
    },

    {
      type: 'flow',
      kicker: 'Paro cardiorrespiratorio',
      title: 'En el niño el paro empieza en los pulmones',
      nodes: [
        { id: 'h', col: 0, row: 0, k: 'cause', t: 'Hipoxia', s: 'Asfixia, atoro, ahogamiento, neumonía' },
        { id: 's', col: 0, row: 2, k: 'cause', t: 'Shock', s: 'Hipovolémico o séptico' },
        { id: 'x', col: 0, row: 4, k: 'cause', t: 'Intoxicación o trauma', s: 'Otras causas' },
        { id: 'b', col: 2, row: 2, k: 'mech', t: 'Bradicardia progresiva', s: 'El corazón se agota' },
        { id: 'n', col: 4, row: 1, k: 'effect', t: 'No desfibrilable', s: 'Asistolia o AESP: 85-90%' },
        { id: 'd', col: 4, row: 3, k: 'risk', t: 'Desfibrilable', s: 'FV o TV sin pulso: 5-15%' },
      ],
      edges: [
        { from: 'h', to: 'b' }, { from: 's', to: 'b' }, { from: 'x', to: 'b' },
        { from: 'b', to: 'n' }, { from: 'b', to: 'd' },
      ],
      steps: [
        { show: ['h', 's', 'x'], note: 'Casi siempre es secundario',
          say: 'El paro del niño rara vez es una enfermedad primaria del corazón. Casi siempre es la etapa final de una hipoxia, por asfixia, atoro, ahogamiento o neumonía, o de un shock hipovolémico o séptico. También pueden llevar a él las intoxicaciones y el trauma.' },
        { show: ['b', 'n'], note: 'El ritmo más frecuente no se desfibrila',
          say: 'El corazón hipóxico se enlentece, y termina en asistolia o en actividad eléctrica sin pulso. Ese ritmo no desfibrilable es entre el ochenta y cinco y el noventa por ciento de los paros pediátricos. Por eso lo que salva al niño es ventilar bien y comprimir bien, y no una descarga.' },
        { show: ['d'], note: 'Cuándo sí se ve FV o TV sin pulso',
          say: 'La fibrilación ventricular o la taquicardia ventricular sin pulso son menos frecuentes, entre cinco y quince por ciento. Se ven en cardiopatías, en trastornos del QT, en intoxicaciones y en el niño mayor que se colapsa de golpe. El pronóstico es mejor si la causa es una arritmia con testigo, y peor si la hipoxia fue prolongada.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reconocimiento',
      title: 'Cuándo empezar a reanimar',
      cards: [
        { title: 'Paro', tag: 'Empiezas RCP', kind: 'alert', items: [
          { t: 'No responde, no respira o solo jadea', d: 'Pulso central no palpable en 10 segundos',
            say: 'Se reconoce al niño que no responde, que no respira o solo jadea, y sin pulso central, que buscas por no más de diez segundos. El pulso se toma en el braquial en el lactante, y en el carotídeo o el femoral en el niño.' },
          { t: 'FC < 60 con mala perfusión', d: 'Pese a ventilar; cianosis, palidez, hipotonía',
            say: 'También empiezas reanimación si la frecuencia cardíaca es menor de sesenta por minuto con mala perfusión, es decir, cianosis, palidez o hipotonía, a pesar de estar ventilando. Esa bradicardia es el paro que se avecina.' },
        ] },
        { title: 'Cadena de supervivencia', tag: 'Qué la compone', kind: 'key', items: [
          { t: 'Prevención y RCP precoz', d: 'De alta calidad',
            say: 'La cadena de supervivencia parte por la prevención, sigue con la reanimación precoz de alta calidad y la activación del sistema de emergencia.' },
          { t: 'Soporte avanzado y cuidados posparo', d: 'Hasta la UCI',
            say: 'Continúa con el soporte vital avanzado y los cuidados posparo, que terminan en la unidad de cuidados intensivos.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'RCP pediátrica',
      title: 'Parámetros según la edad',
      head: ['Parámetro', 'Lactante', 'Niño', 'Recién nacido'],
      rows: [
        { cells: ['Pulso', 'Braquial', 'Carotídeo o femoral', 'FC por auscultación'],
          say: 'Esta tabla se pregunta. El pulso que decide: braquial en el lactante, carotídeo o femoral en el niño, y en el recién nacido de la sala de partos, la frecuencia por auscultación.' },
        { cells: ['Técnica', '2 dedos o 2 pulgares con manos rodeando el tórax', 'Talón de 1 o 2 manos', '2 pulgares, tercio inferior'],
          say: 'La técnica de compresión: en el lactante, dos dedos con un reanimador, o dos pulgares con las manos rodeando el tórax si son dos. En el niño, el talón de una o de dos manos. Y en el recién nacido, dos pulgares sobre el tercio inferior del esternón.' },
        { cells: ['Profundidad', '≥ 1/3 del tórax (~4 cm)', '≥ 1/3 del tórax (~5 cm)', '1/3 del tórax'],
          say: 'La profundidad es al menos un tercio del diámetro del tórax: unos cuatro centímetros en el lactante y unos cinco en el niño.' },
        { cells: ['Compresión:ventilación', '30:2 (1) · 15:2 (2 reanimadores)', '30:2 (1) · 15:2 (2 reanimadores)', '3:1'],
          say: 'La relación es treinta compresiones por dos ventilaciones con un reanimador, y quince por dos con dos reanimadores. La relación tres a uno es solo para el recién nacido en sala de partos. Esa mezcla es una trampa clásica.' },
        { cells: ['Adrenalina', '0,01 mg/kg EV/IO cada 3-5 min', '0,01 mg/kg EV/IO cada 3-5 min', '0,01-0,03 mg/kg EV'],
          say: 'La adrenalina es cero coma cero uno miligramos por kilo, endovenosa o intraósea, cada tres a cinco minutos. En el recién nacido el rango es de cero coma cero uno a cero coma cero tres.' },
        { cells: ['Desfibrilación', '2 J/kg, luego 4 J/kg', '2 J/kg, luego 4 J/kg', 'No de rutina'],
          say: 'Y la desfibrilación: dos joules por kilo, y luego cuatro joules por kilo. En el recién nacido no se hace de rutina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica',
      title: 'C-A-B: compresiones primero',
      cards: [
        { title: 'Compresiones', tag: 'Lo que más importa', kind: 'key', items: [
          { t: 'Pedir ayuda y desfibrilador; comprimir', d: 'Mitad inferior del esternón',
            say: 'La secuencia es C-A-B. Compruebas la seguridad, estimulas, pides ayuda y un desfibrilador, y empiezas las compresiones, sobre la mitad inferior del esternón.' },
          { t: '100 a 120 por minuto', d: 'Reexpansión completa; pausas < 10 s',
            say: 'La frecuencia es de cien a ciento veinte por minuto, dejando que el tórax se reexpanda por completo, y con interrupciones de menos de diez segundos.' },
        ] },
        { title: 'Ventilación', tag: 'Que el tórax suba', kind: 'criteria', items: [
          { t: 'Bolsa-máscara con O₂ al 100%', d: 'Cabeza neutra en el lactante',
            say: 'Abres la vía aérea con una extensión suave de la cabeza, en posición neutra en el lactante, o con elevación del mentón, y ventilas con bolsa y máscara con oxígeno al cien por ciento, hasta ver que el tórax se eleva.' },
          { t: 'Vía aérea avanzada: 1 ventilación cada 6 s', d: 'Con compresiones continuas',
            say: 'Con una vía aérea avanzada, las compresiones son continuas y se da una ventilación cada seis segundos. Reanimar sin ventilar solo es aceptable si el reanimador no puede o no sabe ventilar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Desfibrilación y fármacos',
      title: 'Qué haces según el ritmo',
      cards: [
        { title: 'Ritmo desfibrilable', tag: 'FV o TV sin pulso', kind: 'alert', items: [
          { t: 'Descarga de 2 J/kg, luego 4 J/kg', d: 'DEA con parches pediátricos en < 8 años',
            say: 'Si el ritmo es desfibrilable, das una descarga de dos joules por kilo, luego cuatro joules por kilo, y retomas la reanimación por dos minutos sin evaluar el pulso. En menores de ocho años se usa el desfibrilador automático con parches pediátricos, que atenúan la energía.' },
          { t: 'Amiodarona 5 mg/kg', d: 'Tras la 3.ª descarga, si es refractaria',
            say: 'Si la fibrilación o la taquicardia ventricular son refractarias, amiodarona cinco miligramos por kilo después de la tercera descarga, o lidocaína.' },
        ] },
        { title: 'Ritmo no desfibrilable', tag: 'Asistolia o AESP', kind: 'pharma', items: [
          { t: 'Adrenalina 0,01 mg/kg', d: '0,1 mL/kg de la dilución 1:10.000; EV o IO',
            say: 'Si es no desfibrilable, lo que cambia el pronóstico es la adrenalina lo antes posible: cero coma cero uno miligramos por kilo, es decir, cero coma uno mililitros por kilo de la dilución uno en diez mil, endovenosa o intraósea, cada tres a cinco minutos.' },
          { t: 'Sin bicarbonato, calcio ni atropina de rutina', d: 'Buscar las causas reversibles',
            say: 'El bicarbonato, el calcio y la atropina no se usan de rutina. Lo que haces es corregir las causas reversibles, las Hs y las Ts, en especial la hipoxia, la hipovolemia y la hipoglicemia.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Dos minutos de reanimación',
      images: [
        { src: 'animaciones/ped-24/A1_ciclos_rcp.mp4', label: 'Ciclos de dos minutos según el ritmo', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Un ciclo de dos minutos, dos caminos',
          say: 'Mira el ciclo. Se comprime sin parar durante dos minutos y se revisa el ritmo. Si es no desfibrilable, sigues comprimiendo y das adrenalina, repitiéndola cada tres a cinco minutos. Si es desfibrilable, una descarga de dos joules por kilo, dos minutos de reanimación, otra de cuatro joules por kilo, y después de la tercera, amiodarona. En ambos caminos buscas la causa reversible mientras comprimes.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuidados posparo',
      title: 'Después de recuperar el pulso',
      cards: [
        { title: 'Posparo', tag: 'A la UCI', kind: 'criteria', items: [
          { t: 'Sat 94-99%, sin hiperoxia', d: 'Normocapnia',
            say: 'Después de recuperar la circulación, ventilas para una saturación de noventa y cuatro a noventa y nueve por ciento, evitando la hiperoxia, y mantienes la normocapnia.' },
          { t: 'Controlar presión, glicemia y temperatura', d: 'Evitar la fiebre',
            say: 'Controlas la presión arterial, la glicemia y la temperatura, evitando la fiebre, y trasladas a una unidad de cuidados intensivos.' },
        ] },
        { title: 'Cuándo parar', tag: 'Decisión', kind: 'key', items: [
          { t: 'Sin respuesta tras 20 a 30 minutos', d: 'Salvo hipotermia o intoxicación',
            say: 'La reanimación se suspende cuando no hay respuesta después de veinte a treinta minutos, salvo en la hipotermia o en la intoxicación, donde se prolonga.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Intoxicaciones',
      title: 'Enfoque general',
      cards: [
        { title: 'Primero el ABC', tag: 'Y la historia', kind: 'key', items: [
          { t: 'ABC, glicemia capilar', d: 'Qué, cuánto, cuándo, cómo',
            say: 'Con un niño intoxicado partes por el ABC y la glicemia capilar. Después la historia dirigida: qué tomó, cuánto, cuándo y cómo, e identificas el envase.' },
          { t: 'Consultar al CITUC', d: 'Centro toxicológico, 24 horas',
            say: 'Y consultas al CITUC, el centro toxicológico de la Universidad Católica, que atiende las veinticuatro horas. Toda intoxicación se notifica.' },
        ] },
        { title: 'Descontaminar', tag: 'Qué sí y qué no', kind: 'alert', items: [
          { t: 'Carbón activado 1 g/kg', d: 'Si pasaron < 1-2 h y la vía aérea está protegida',
            say: 'Si la ingestión fue hace menos de una a dos horas, la vía aérea está protegida y el tóxico se adsorbe, se da carbón activado, un gramo por kilo. No sirve para metales, hierro, litio, alcoholes ni cáusticos.' },
          { t: 'No inducir el vómito', d: 'Lavado gástrico no es de rutina',
            say: 'El vómito no se induce, nunca, con jarabe de ipecacuana, y el lavado gástrico no es de rutina. Después observas por el tiempo que corresponda: el paracetamol, por ejemplo, tarda veinticuatro horas en dar síntomas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Toxidromes',
      title: 'Las pupilas orientan',
      cards: [
        { title: 'Colinérgico', tag: 'Organofosforados y carbamatos', kind: 'alert', items: [
          { t: 'Miosis, sialorrea, broncorrea, bradicardia', d: 'Diarrea, vómitos, fasciculaciones',
            say: 'El síndrome colinérgico, de los organofosforados y los carbamatos, tiene miosis, sialorrea, broncorrea, bradicardia, diarrea, vómitos, fasciculaciones y compromiso de conciencia.' },
          { t: 'Lavar la piel; atropina y pralidoxima', d: 'Atropina 0,02-0,05 mg/kg hasta secar secreciones',
            say: 'Se retira la ropa y se lava la piel, y quien atiende se protege del contacto. El antídoto es la atropina, cero coma cero dos a cero coma cero cinco miligramos por kilo, repetida hasta secar las secreciones, más pralidoxima.' },
        ] },
        { title: 'Otros toxidromes', tag: 'Pupilas y conciencia', kind: 'criteria', items: [
          { t: 'Anticolinérgico: midriasis, piel seca', d: 'Taquicardia, delirio: soporte y BZD',
            say: 'El anticolinérgico es lo contrario: midriasis, piel seca y caliente, taquicardia y delirio. Se maneja con soporte y benzodiacepinas.' },
          { t: 'Opioides: miosis, depresión respiratoria', d: 'Naloxona 0,1 mg/kg, máx. 2 mg',
            say: 'Los opioides dan miosis, depresión respiratoria y coma, y se tratan con naloxona, cero coma uno miligramos por kilo, con un máximo de dos miligramos. Su vida media es corta, por eso el niño puede renarcotizarse.' },
          { t: 'Simpaticomiméticos: midriasis, hipertermia', d: 'Cocaína y anfetaminas; BZD',
            say: 'Y los simpaticomiméticos, como la cocaína y las anfetaminas, dan midriasis, hipertermia e hipertensión, y también se tratan con benzodiacepinas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos frecuentes',
      title: 'Paracetamol, salicilatos, hierro y tricíclicos',
      cards: [
        { title: 'Paracetamol', tag: 'La más frecuente', kind: 'alert', items: [
          { t: '24-72 h asintomático; luego hepatotoxicidad', d: 'Ictericia y transaminasas muy altas',
            say: 'El paracetamol es la intoxicación medicamentosa más frecuente. Durante veinticuatro a setenta y dos horas el niño está sin síntomas o con vómitos, y después aparece la hepatotoxicidad, con ictericia y transaminasas muy altas.' },
          { t: 'Dosis tóxica > 150 mg/kg', d: 'Nivel a las 4 h: Rumack-Matthew',
            say: 'La dosis tóxica es sobre ciento cincuenta miligramos por kilo. Se mide el nivel a las cuatro horas y se interpreta con el nomograma de Rumack-Matthew.' },
          { t: 'N-acetilcisteína, aun con daño hepático', d: 'Idealmente en las primeras 8-10 h',
            say: 'El antídoto es la N-acetilcisteína, endovenosa u oral, idealmente en las primeras ocho a diez horas. Y se da también si ya hay daño hepático.' },
        ] },
        { title: 'Salicilatos, hierro y tricíclicos', tag: 'Cada uno con su clave', kind: 'criteria', items: [
          { t: 'Salicilatos: taquipnea, tinnitus, fiebre', d: 'Acidosis metabólica; alcalinizar la orina',
            say: 'Los salicilatos dan taquipnea, tinnitus y fiebre, con acidosis metabólica y alcalosis respiratoria. Se alcaliniza la orina y se dializa en los casos graves.' },
          { t: 'Hierro: vómitos y diarrea con sangre', d: 'Deferoxamina',
            say: 'El hierro produce vómitos y diarrea con sangre, y se trata con deferoxamina.' },
          { t: 'Tricíclicos: QRS ancho, convulsiones', d: 'Bicarbonato de sodio',
            say: 'Los antidepresivos tricíclicos dan QRS ancho, convulsiones y arritmias, y se tratan con bicarbonato de sodio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Gases, hidrocarburos y cáusticos',
      title: 'Lo que no se hace',
      cards: [
        { title: 'Cáusticos', tag: 'Soda cáustica, cloro, ácidos', kind: 'alert', items: [
          { t: 'Sialorrea, odinofagia, dolor retroesternal', d: 'Estridor; sin lesiones orales no se descarta',
            say: 'La ingesta de cáusticos da sialorrea, odinofagia, dolor retroesternal o abdominal y a veces estridor. Ojo: que no haya lesiones en la boca no descarta lesión del esófago.' },
          { t: 'Sin vómito, sin neutralizar; ayuno y EDA', d: 'Endoscopía digestiva alta en 12-48 h',
            say: 'No se induce el vómito ni se neutraliza, se deja en ayuno y se pide endoscopía digestiva alta dentro de las doce a cuarenta y ocho horas. Así se ve una lesión grave del esófago en la endoscopía: mira la necrosis y la escara de la mucosa.',
            photo: { src: 'biblioteca/15_pediatria/ped-24/01_lesion-esofagica-endoscopia__nelson_p2927.jpg', label: 'Lesión esofágica grave', at: 'Así se ve una lesión grave', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 373.3 (pila de botón)' } },
        ] },
        { title: 'Otras', tag: 'Qué recordar', kind: 'criteria', items: [
          { t: 'Monóxido: cefalea, sat normal', d: 'O₂ al 100%; cámara hiperbárica si es grave',
            say: 'El monóxido de carbono da cefalea y compromiso de conciencia con saturación normal, porque la oximetría de pulso es falsamente normal. Se trata con oxígeno al cien por ciento, y con cámara hiperbárica si es grave.' },
          { t: 'Hidrocarburos: aspiración', d: 'No inducir vómito',
            say: 'Los hidrocarburos amenazan con una neumonitis por aspiración, así que tampoco se induce el vómito.' },
          { t: 'Benzodiacepinas y alcohol', d: 'Evitar flumazenil; el alcohol da hipoglicemia',
            say: 'Las benzodiacepinas dan sedación sin depresión respiratoria severa, y se evita el flumazenil. Y el alcohol etílico en el niño produce hipoglicemia y coma.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Toxidrome, clave clínica y antídoto',
      head: ['Tóxico', 'Clave clínica', 'Tratamiento', 'Advertencia'],
      rows: [
        { cells: ['Organofosforados', 'Miosis, sialorrea, broncorrea, bradicardia', 'Atropina + pralidoxima; descontaminar', 'Proteger al personal'],
          say: 'En resumen. Organofosforados: miosis, sialorrea y bradicardia. Atropina más pralidoxima, descontaminando la piel. El personal debe protegerse del contacto.' },
        { cells: ['Paracetamol', 'Asintomático 24 h; luego ictericia', 'N-acetilcisteína; nivel a las 4 h', 'Tratar aunque haya daño hepático'],
          say: 'Paracetamol: asintomático el primer día, y después ictericia. N-acetilcisteína, y se da aunque ya haya daño hepático.' },
        { cells: ['Opioides', 'Miosis, depresión respiratoria, coma', 'Naloxona 0,1 mg/kg (máx. 2 mg)', 'Puede renarcotizarse'],
          say: 'Opioides: miosis y depresión respiratoria. Naloxona, vigilando porque su efecto dura menos que el del opioide.' },
        { cells: ['Salicilatos', 'Taquipnea, tinnitus, acidosis metabólica', 'Alcalinizar la orina; diálisis', 'No intubar sin hiperventilar'],
          say: 'Salicilatos: taquipnea, tinnitus y acidosis. Se alcaliniza la orina, y cuidado: no se intuba sin hiperventilar, porque se pierde la compensación respiratoria.' },
        { cells: ['Cáusticos', 'Sialorrea, dolor torácico, estridor', 'Ayuno y EDA en 12-48 h', 'No inducir vómito ni neutralizar'],
          say: 'Cáusticos: ayuno y endoscopía precoz. Inducir el vómito y neutralizar son los errores.' },
        { cells: ['Monóxido de carbono', 'Cefalea, compromiso de conciencia', 'O₂ al 100%; cámara hiperbárica', 'El oxímetro engaña'],
          say: 'Y el monóxido: oxígeno al cien por ciento, sabiendo que el oxímetro de pulso engaña, porque marca normal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención de accidentes',
      title: 'La primera causa de muerte después del año',
      cards: [
        { title: 'Menor de 1 año', tag: 'Sueño seguro', kind: 'key', items: [
          { t: 'Sueño seguro: supino, colchón firme', d: 'Sin almohadas ni peluches',
            say: 'Los accidentes son la primera causa de muerte en los niños mayores de un año, y la mayoría es prevenible. La consejería se entrega en cada control, según la edad. Bajo el año, lo central es el sueño seguro: el lactante duerme boca arriba, en un colchón firme y sin almohadas ni peluches.' },
          { t: 'Caídas, agua tibia, asfixia', d: 'Baño ≤ 38 °C; sin bolsas ni objetos pequeños',
            say: 'Se previenen las caídas del cambiador y de la cama, se mantiene el agua del baño en treinta y ocho grados o menos, y se evitan los objetos pequeños y las bolsas plásticas. Los medicamentos y los productos de aseo se guardan.' },
        ] },
        { title: '1 a 5 años', tag: 'Ahogamiento, quemaduras, tóxicos', kind: 'alert', items: [
          { t: 'Cerco de piscina y supervisión', d: 'Nunca solo en la tina',
            say: 'De uno a cinco años, el ahogamiento: cerco en las piscinas, supervisión directa a un brazo de distancia, y nunca el niño solo en la tina. Las quemaduras: mangos de las ollas hacia adentro y líquidos calientes fuera de alcance.' },
          { t: 'Tóxicos bajo llave, en su envase', d: 'Teléfono del CITUC visible',
            say: 'Las intoxicaciones: medicamentos, cloro y plaguicidas bajo llave y en su envase original, nunca en una botella de bebida, y el teléfono del CITUC a la vista. También protección en ventanas y escaleras, y cuidado con atoros con frutos secos y uvas.' },
        ] },
        { title: 'Transporte y mayores', tag: 'Silla, casco, cinturón', kind: 'criteria', items: [
          { t: 'Silla en el asiento trasero', d: 'Mirando atrás hasta los 2 años o más',
            say: 'En el auto, un sistema de retención adecuado a la edad y al peso, en el asiento trasero, mirando hacia atrás el mayor tiempo posible, idealmente hasta los dos años o más. Después con arnés hacia adelante, y luego alzador, hasta que el cinturón calce bien. Nunca en brazos ni delante de un airbag activo.' },
          { t: 'Escolares y adolescentes', d: 'Casco, cinturón, sin alcohol al volante, sin armas',
            say: 'En escolares y adolescentes: casco en bicicleta y moto, cinturón de seguridad, no manejar con alcohol, prevención de la violencia y del acceso a armas. Y en cada control, el registro de los riesgos del hogar.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del niño grave o intoxicado a la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niño de 3 años que hace 40 minutos fue encontrado en su casa con un frasco de jarabe vacío. Está somnoliento, con vómitos y sialorrea. Al examen: FC 52 por minuto, FR 36 por minuto con roncus y sibilancias difusas, pupilas puntiformes, fasciculaciones en la lengua y piel húmeda. La madre refiere que guardaba un insecticida en el patio, en un envase de bebida.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Inducir el vómito con jarabe de ipecacuana y observar en casa' },
        { letter: 'B', text: 'Naloxona endovenosa' },
        { letter: 'C', text: 'N-acetilcisteína endovenosa' },
        { letter: 'D', text: 'Retirar la ropa y lavar la piel, asegurar la vía aérea, administrar atropina y pralidoxima, y consultar al CITUC' },
        { letter: 'E', text: 'Carbón activado y alta con control en 24 horas' },
      ],
      correct: 'D',
      explanation: 'Síndrome colinérgico (miosis, sialorrea, broncorrea, bradicardia, fasciculaciones) por organofosforado o carbamato. Se retira la ropa y se lava la piel, se asegura la vía aérea con oxígeno y se administra atropina (0,02-0,05 mg/kg, repetida hasta secar las secreciones) y pralidoxima. No se induce el vómito; se consulta al CITUC y se hospitaliza. La prevención incluye guardar los plaguicidas bajo llave y en su envase original.',
      say: {
        stem: 'Un niño de tres años fue encontrado hace cuarenta minutos con un frasco de jarabe vacío. Está somnoliento, con vómitos y sialorrea. Tiene la frecuencia cardíaca en cincuenta y dos, respira treinta y seis veces por minuto con roncus y sibilancias difusas, las pupilas puntiformes, fasciculaciones en la lengua y la piel húmeda. La madre guardaba un insecticida en el patio, en un envase de bebida.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: inducir el vómito y observar en casa; naloxona; N-acetilcisteína; retirar la ropa, lavar la piel, asegurar la vía aérea, atropina y pralidoxima, y consultar al CITUC; o carbón activado y alta. Piénsalo.',
        answer: 'Es la D. Miosis, sialorrea, broncorrea, bradicardia y fasciculaciones forman el síndrome colinérgico de un organofosforado. Se descontamina la piel, se asegura la vía aérea y se da atropina hasta secar las secreciones, más pralidoxima. La B tienta por las pupilas puntiformes, pero el opioide no produce sialorrea, broncorrea ni fasciculaciones. Y el vómito nunca se induce.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 41',
      stem: 'Un niño de edad presenta un cuadro de agitación, alternado con obnubilación, asociado a vómitos, sialorrea, diarrea, dolor abdominal, taquicardia, tos, temblor y sudoración. Se sospecha que haya ingerido algún tóxico.',
      question: '¿Cuál es la conducta inicial?',
      options: [
        { letter: 'A', text: 'Administrar antieméticos' },
        { letter: 'B', text: 'Administrar omeprazol' },
        { letter: 'C', text: 'Administrar solución glucosada al 10%' },
        { letter: 'D', text: 'Administrar N-acetil.cisteína' },
        { letter: 'E', text: 'Administrar atropina' },
      ],
      correct: 'E',
      explanation: 'Síndrome colinérgico clásico (vómitos, sialorrea, diarrea, tos, sudoración y compromiso de conciencia): lo más probable es la ingestión de un insecticida organofosforado o carbamato, y el antídoto es la atropina. La N-acetilcisteína es el antídoto del paracetamol.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un niño tiene agitación alternada con obnubilación, vómitos, sialorrea, diarrea, dolor abdominal, taquicardia, tos, temblor y sudoración. Se sospecha que ingirió un tóxico.',
        question: '¿Cuál es la conducta inicial?',
        options: 'Las opciones: antieméticos; omeprazol; solución glucosada al diez por ciento; N-acetilcisteína; o atropina. Piénsalo.',
        answer: 'Es la E. Vómitos, sialorrea, diarrea, tos y sudoración con compromiso de conciencia son un síndrome colinérgico, probablemente por un insecticida, y el antídoto es la atropina. La D tienta si recuerdas la N-acetilcisteína como antídoto, pero es la del paracetamol, que no produce este cuadro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 108',
      stem: 'Un niño de 4 años, hace 24 horas ingiere 7 comprimidos de algún medicamento desconocido, evolucionando con malestar general, vómitos e ictericia. Se solicitan exá- menes, en los que destaca GOT: 403 UI/L, GPT: 390 UI/L, bilirrubina plasmática total: 5,2 mg/dl.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar L-carnitina endovenosa' },
        { letter: 'B', text: 'Administrar deferoxamina endovenosa' },
        { letter: 'C', text: 'Administrar N-acetil-cisteína endovenosa' },
        { letter: 'D', text: 'Administrar carbón activado vía oral' },
        { letter: 'E', text: 'Administrar piridoxina vía oral' },
      ],
      correct: 'C',
      explanation: 'Se sospecha intoxicación por paracetamol: vómitos, ictericia y transaminasas elevadas a las 24 horas. Aún está en ventana para dar N-acetilcisteína, que se indica también si ya hay daño hepático. La deferoxamina es para el hierro y el carbón activado ya no sirve a las 24 horas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un niño de cuatro años ingirió, hace veinticuatro horas, siete comprimidos de un medicamento desconocido, y evoluciona con malestar, vómitos e ictericia. Las transaminasas están sobre cuatrocientas y la bilirrubina total en cinco coma dos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: L-carnitina; deferoxamina; N-acetilcisteína; carbón activado; o piridoxina. Piénsalo.',
        answer: 'Es la C. Un día después, con vómitos, ictericia y transaminasas altas, es una hepatotoxicidad por paracetamol, y la N-acetilcisteína se da incluso con daño hepático. La D tienta, pero el carbón activado solo sirve si pasaron menos de una a dos horas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 95',
      stem: 'Una niña de 5 años, ingiere accidentalmente soda cáustica, hace 45 minutos. Evoluciona con sialorrea y dolor abdominal y torácico.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar carbon activado' },
        { letter: 'B', text: 'Solicitar endoscopía digestiva alta' },
        { letter: 'C', text: 'Administrar agente alcalinizante' },
        { letter: 'D', text: 'Instalar una sonda nasogástrica y aspirar el contenido' },
        { letter: 'E', text: 'Inducir los vómitos' },
      ],
      correct: 'B',
      explanation: 'La ingesta de cáusticos se estudia con endoscopía digestiva alta precoz (12 a 48 horas), en ayuno. No se induce el vómito, no se neutraliza y el carbón activado no adsorbe cáusticos. Si hay lesiones graves se alimenta por sonda y, ante una perforación, se opera de inmediato.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una niña de cinco años ingirió soda cáustica hace cuarenta y cinco minutos, y tiene sialorrea y dolor abdominal y torácico.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: carbón activado; endoscopía digestiva alta; agente alcalinizante; sonda nasogástrica con aspiración; o inducir el vómito. Piénsalo.',
        answer: 'Es la B. La ingesta de un cáustico se estudia con endoscopía precoz y la niña queda en ayuno. La A tienta porque el carbón es lo primero que uno piensa en una ingestión, pero no adsorbe cáusticos. Inducir el vómito vuelve a quemar el esófago y neutralizar no se hace.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 143',
      stem: '¿Cuál es la posición recomendada para que duerman los lactantes?',
      question: 'Elige la alternativa correcta:',
      options: [
        { letter: 'A', text: 'Prono' },
        { letter: 'B', text: 'Decúbito lateral derecho' },
        { letter: 'C', text: 'Supino' },
        { letter: 'D', text: 'Decúbito lateral izquierdo' },
        { letter: 'E', text: 'Alternar decúbito lateral derecho e izquierdo' },
      ],
      correct: 'C',
      explanation: 'La posición supina es la de menor riesgo de muerte súbita del lactante. Las otras posiciones solo se consideran en casos de reflujo gastroesofágico, porque la posición supina puede aumentarlo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. ¿Cuál es la posición recomendada para que duerman los lactantes?',
        question: 'Elige la alternativa correcta.',
        options: 'Las opciones: prono; decúbito lateral derecho; supino; decúbito lateral izquierdo; o alternar los decúbitos laterales. Piénsalo.',
        answer: 'Es la C. La posición supina, boca arriba, es la de menor riesgo de muerte súbita del lactante, y es parte del sueño seguro junto con el colchón firme y sin almohadas ni peluches. Las otras solo se consideran en el reflujo, porque la posición supina puede aumentarlo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: urgencia pediátrica',
      cards: [
        { title: 'Reanimar', tag: 'RCP de calidad', kind: 'key', items: [
          { t: 'Paro del niño: hipoxia o shock', d: 'Asistolia o AESP; adrenalina 0,01 mg/kg',
            say: 'Cerremos con las reglas de oro. El paro del niño casi siempre viene de hipoxia o de shock, el ritmo es no desfibrilable y se trata con reanimación de calidad y adrenalina, cero coma cero uno miligramos por kilo cada tres a cinco minutos.' },
          { t: 'Comprimir ≥ 1/3, 100-120/min, 15:2', d: 'Desfibrilar a 2 J/kg y 4 J/kg',
            say: 'Se comprime al menos un tercio del tórax, a cien a ciento veinte por minuto, con relación quince a dos con dos reanimadores. Si el ritmo es desfibrilable, dos y luego cuatro joules por kilo.' },
        ] },
        { title: 'Tóxicos y prevención', tag: 'Antídoto y consejo', kind: 'alert', items: [
          { t: 'Colinérgico: atropina; paracetamol: NAC', d: 'Opioides: naloxona',
            say: 'En el síndrome colinérgico, atropina hasta secar las secreciones y pralidoxima; en el paracetamol, N-acetilcisteína; en los opioides, naloxona.' },
          { t: 'Cáusticos: ayuno y EDA; nunca vómito', d: 'Consultar al CITUC',
            say: 'Con un cáustico no se induce el vómito ni se neutraliza: ayuno y endoscopía en doce a cuarenta y ocho horas. Y ante cualquier intoxicación, consulta al CITUC.' },
          { t: 'Sueño seguro y silla mirando atrás', d: 'Medicamentos bajo llave; cerco de piscina',
            say: 'La prevención es parte del control: sueño seguro boca arriba, silla de auto mirando hacia atrás en el asiento trasero, cerco de piscina y medicamentos bajo llave. Si te llevas una sola idea de hoy: reanimar bien es ventilar y comprimir sin parar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Niño grave o intoxicado',
    root: N('start', 'Niño grave o intoxicado', 'ABC, glicemia, historia, CITUC',
      'Llega un niño grave o sospechoso de una intoxicación. Parte por el ABC y la glicemia capilar, y te preguntas: ¿responde y tiene pulso?',
      ['No responde, no respira, sin pulso', N('alert', 'Paro: RCP en C-A-B', '100-120 por min; 15:2 con dos reanimadores',
        'Si no responde, no respira o solo jadea y no tiene pulso central en diez segundos, es un paro. Empiezas compresiones, y ventilas con bolsa y máscara con oxígeno al cien por ciento.',
        ['Ritmo desfibrilable', N('do', 'Descarga 2 J/kg, luego 4 J/kg', 'Amiodarona 5 mg/kg tras la 3.ª',
          'Si el ritmo es una fibrilación o taquicardia ventricular sin pulso, descarga de dos joules por kilo, luego cuatro, y amiodarona después de la tercera si es refractaria.')],
        ['Asistolia o AESP', N('do', 'Adrenalina 0,01 mg/kg', 'EV o IO cada 3-5 min; causas reversibles',
          'Si es asistolia o actividad eléctrica sin pulso, adrenalina cero coma cero uno miligramos por kilo cada tres a cinco minutos, y buscas las causas reversibles, en especial hipoxia, hipovolemia e hipoglicemia.')],
      )],
      ['Tiene pulso y hay un tóxico', N('q', '¿Qué toxidrome tiene?', 'Pupilas, secreciones, FC, conciencia',
        'Si tiene pulso y sospechas un tóxico, identificas el toxidrome y consultas al CITUC. No se induce el vómito.',
        ['Miosis y secreciones', N('do', 'Colinérgico', 'Lavar piel; atropina y pralidoxima',
          'Miosis, sialorrea, broncorrea y bradicardia: organofosforado. Lavas la piel y das atropina hasta secar las secreciones, más pralidoxima.')],
        ['Miosis y depresión respiratoria', N('do', 'Opioide', 'Naloxona 0,1 mg/kg',
          'Miosis con depresión respiratoria y coma: opioide. Naloxona, cero coma uno miligramos por kilo, y vigilas la renarcotización.')],
        ['Vómitos, ictericia a las 24 h', N('do', 'Paracetamol', 'N-acetilcisteína',
          'Vómitos y luego ictericia, con transaminasas altas: paracetamol. N-acetilcisteína, aunque ya haya daño hepático.')],
        ['Sialorrea y dolor torácico', N('refer', 'Cáustico', 'Ayuno y endoscopía en 12-48 h',
          'Sialorrea, dolor torácico o abdominal y estridor tras un cáustico: ayuno y endoscopía digestiva alta, sin vómito ni neutralización.')],
      )],
    ),
  },
};
