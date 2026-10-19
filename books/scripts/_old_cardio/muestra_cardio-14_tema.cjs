// Tema 2.5 (cardio-14) reescrito al estándar — se inserta en dataset_cardiologia_bloque_2.cjs
const svg = `<svg viewBox="0 0 620 450" width="100%" style="max-width:620px;font-family:'IBM Plex Sans',system-ui,sans-serif">
  <defs><marker id="ar25" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}
    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff7ed}
    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar25)}
  </style>
  <rect class="b" x="100" y="8" width="420" height="39" rx="3"/>
  <text class="t" x="310" y="23" text-anchor="middle" font-weight="700">Dolor torácico isquémico (opresivo, &gt; 20 minutos, no cede con reposo)</text>
  <text class="sub" x="310" y="36" text-anchor="middle">ECG de 12 derivaciones interpretado en ≤ 10 minutos desde el primer contacto médico</text>
  <path class="ln" d="M310,47 V67"/>
  <rect class="dec" x="90" y="67" width="440" height="42" rx="3"/>
  <text class="t" x="310" y="83" text-anchor="middle" font-weight="700">¿SDST en ≥ 2 derivaciones contiguas o BCRI nuevo?</text>
  <text class="sub" x="310" y="97" text-anchor="middle">Equivalentes: IAM posterior (V7-V9) · infradesnivel difuso con SDST en aVR · ritmo de marcapaso con Sgarbossa</text>
  <text class="lbl" x="20" y="126">No → ECG seriado cada 15-30 min y troponina (Temas 2.1 y 2.4)</text>
  <text class="lbl" x="318" y="126">Sí</text>
  <path class="ln" d="M310,109 V137"/>
  <rect class="acc" x="70" y="137" width="480" height="40" rx="3"/>
  <text class="accT t" x="310" y="153" text-anchor="middle" font-weight="700">SCACEST: activar la red de reperfusión (GES)</text>
  <text class="accS" x="310" y="167" text-anchor="middle">AAS 250 mg masticada + inhibidor P2Y12 + anticoagulante · O₂ solo si SatO₂ &lt; 90%</text>
  <path class="ln" d="M310,177 V197"/>
  <rect class="dec" x="90" y="197" width="440" height="40" rx="3"/>
  <text class="t" x="310" y="213" text-anchor="middle" font-weight="700">¿Angioplastía primaria posible en ≤ 120 min desde el diagnóstico?</text>
  <text class="sub" x="310" y="227" text-anchor="middle">Shock cardiogénico o contraindicación de fibrinólisis → angioplastía, sin importar el tiempo</text>
  <path class="ln" d="M310,237 V255 H158 V267"/>
  <path class="ln" d="M310,255 H462 V267"/>
  <text class="lbl" x="150" y="251" text-anchor="end">Sí</text>
  <text class="lbl" x="470" y="251">No (&gt; 120 min)</text>
  <rect class="acc" x="12" y="267" width="292" height="54" rx="3"/>
  <text class="accT t" x="158" y="283" text-anchor="middle" font-weight="700">ANGIOPLASTÍA PRIMARIA (de elección)</text>
  <text class="accS" x="158" y="297" text-anchor="middle">Traslado directo a hemodinamia 24/7 con stent</text>
  <text class="accS" x="158" y="309" text-anchor="middle">Meta ≤ 90 min (≤ 60 min si el centro tiene hemodinamia)</text>
  <rect class="warn" x="316" y="267" width="292" height="54" rx="3"/>
  <text class="warnT t" x="462" y="283" text-anchor="middle" font-weight="700">FIBRINÓLISIS en ≤ 30 min (puerta-aguja)</text>
  <text class="warnT sub" x="462" y="297" text-anchor="middle">Tenecteplase en bolo según peso (½ dosis si ≥ 75 años)</text>
  <text class="warnT sub" x="462" y="309" text-anchor="middle">+ clopidogrel 300 mg y enoxaparina · traslado siempre</text>
  <path class="ln" d="M158,321 V341"/>
  <path class="ln" d="M462,321 V341"/>
  <rect class="dec" x="316" y="341" width="292" height="40" rx="3"/>
  <text class="t" x="462" y="357" text-anchor="middle" font-weight="700">A los 60-90 min: ¿descendió el ST &gt; 50%?</text>
  <text class="sub" x="462" y="370" text-anchor="middle">Alivio del dolor y RIVA acompañan a la reperfusión</text>
  <path class="ln" d="M462,381 V390 H387 V399"/>
  <path class="ln" d="M462,390 H537 V399"/>
  <rect class="b" x="316" y="399" width="142" height="44" rx="3"/>
  <text class="t" x="387" y="415" text-anchor="middle" font-weight="700">Sí: farmacoinvasiva</text>
  <text class="sub" x="387" y="429" text-anchor="middle">Coronariografía en 2-24 h</text>
  <rect class="warn" x="466" y="399" width="142" height="44" rx="3"/>
  <text class="warnT t" x="537" y="415" text-anchor="middle" font-weight="700">No: ACTP de rescate</text>
  <text class="warnT sub" x="537" y="429" text-anchor="middle">Traslado inmediato</text>
  <rect class="dec" x="12" y="341" width="292" height="54" rx="3"/>
  <text class="t" x="158" y="357" text-anchor="middle" font-weight="700">Al alta: prevención secundaria (GES)</text>
  <text class="sub" x="158" y="371" text-anchor="middle">AAS de por vida + P2Y12 por 12 meses · atorvastatina 80 mg</text>
  <text class="sub" x="158" y="383" text-anchor="middle">Betabloqueador · IECA/ARA II · rehabilitación cardíaca</text>
</svg>`;

module.exports = {
  id: 'cardio-14',
  classId: 'cardio-14',
  tier: 3,
  blockNum: 2,
  blockName: 'Cardiopatía Coronaria',
  topicLabel: '2.5',
  title: 'SCA con Supradesnivel del ST: Diagnóstico Electrocardiográfico y Reperfusión GES',
  perfilCode: '1.01.2.004, 1.01.5.009, 1.01.4.007',
  dx: 'Específico',
  tx: 'Inicial',
  seg: 'Completo',
  ges: 'Garantía Explícita en Salud (GES N.º 5): Infarto Agudo del Miocardio',
  reconstrucciones: '',
  frecuencia: 'Máxima · Criterios ECG del supradesnivel y sus equivalentes, territorio y arteria culpable, regla de los 120 minutos, dosis de tenecteplase, contraindicaciones de fibrinólisis y terapia coadyuvante',
  svg: null,
  algoTitle: 'Algoritmo de reperfusión del IAM con supradesnivel del ST (Guía GES)',
  diagram: { title: 'Algoritmo de Reperfusión del IAM con Supradesnivel del ST (Regla de los 120 Minutos)', svg },
  contexto: 'El infarto agudo del miocardio con supradesnivel del ST es la urgencia cardiovascular tiempo-dependiente por excelencia y una garantía GES: el médico general de un SAPU, de un SAR o de un hospital comunitario es quien toma el primer electrocardiograma y decide, en minutos, si el paciente viaja a angioplastía o recibe la fibrinólisis ahí mismo. El EUNACOM lo pregunta en todos los exámenes: reconocer el supradesnivel y sus equivalentes (el bloqueo de rama izquierda nuevo), ubicar el territorio, aplicar la regla de los 120 minutos, dosificar el tenecteplase, respetar las contraindicaciones y no caer en las trampas del tratamiento coadyuvante.',
  contentSections: [
    {
      subhead: '1. Fisiopatología: Oclusión Coronaria Total y «Tiempo es Músculo»',
      paragraphs: [
        'El Síndrome Coronario Agudo con Supradesnivel del Segmento ST (SCACEST) es una emergencia médica tiempo-dependiente producida por la rotura (o erosión) de una placa aterosclerótica vulnerable sobre la cual se forma un <strong>trombo oclusivo total (100% de la luz / «trombo rojo») rico en fibrina y hematíes</strong>, generando isquemia transmural aguda y necrosis miocárdica progresiva que avanza en «frente de onda» desde el subendocardio hacia el subepicardio en las primeras 6 horas. El beneficio de reperfundir es máximo en las primeras 2 a 3 horas y cae con cada minuto: <strong>«tiempo es músculo»</strong>.',
        'La <strong>definición universal de infarto</strong> exige un ascenso y descenso de troponina con al menos un valor sobre el percentil 99, más evidencia de isquemia (síntomas, cambios nuevos del ECG, onda Q, alteración segmentaria nueva en la imagen o trombo en la angiografía). El infarto <strong>tipo 1</strong> es el aterotrombótico (el SCACEST clásico); el <strong>tipo 2</strong> se debe a un desbalance entre oferta y demanda de oxígeno (anemia grave, taquiarritmia, hipotensión, crisis hipertensiva). Pero el SCACEST <strong>se diagnostica con la clínica y el ECG</strong>: <em>nunca se espera la troponina para reperfundir</em>.',
        'Clínica típica: <strong>dolor retroesternal opresivo de más de 20 minutos</strong>, irradiado al brazo izquierdo, al cuello o a la mandíbula, que no cede con el reposo ni con la nitroglicerina, con diaforesis, náuseas y disnea. Los <strong>adultos mayores, las mujeres y los diabéticos</strong> pueden debutar sin dolor (disnea, síncope, confusión, epigastralgia), y ese infarto atípico es el que más se retrasa. En el joven con dolor torácico tras consumir <strong>cocaína</strong> (vasoespasmo más trombosis) los <strong>betabloqueadores están contraindicados</strong>: se tratan la agitación y la hipertensión con benzodiacepinas y nitratos.',
      ],
    },
    {
      subhead: '2. Diagnóstico Electrocardiográfico: Criterios, Equivalentes y Evolución',
      paragraphs: [
        'Ante un dolor torácico se toma un <strong>ECG de 12 derivaciones interpretado en ≤ 10 minutos desde el primer contacto médico</strong>; si no es diagnóstico y el dolor persiste, se repite cada 15 a 30 minutos. El supradesnivel se mide en el <strong>punto J</strong> y debe estar presente en <strong>≥ 2 derivaciones contiguas</strong> (del mismo territorio):',
        '• En derivaciones <strong>V2 y V3</strong>: supradesnivel del ST <strong>≥ 2,0 mm (0,2 mV) en hombres ≥ 40 años</strong>; <strong>≥ 2,5 mm en hombres &lt; 40 años</strong>; y <strong>≥ 1,5 mm en mujeres de cualquier edad</strong>.',
        '• En <strong>todas las demás derivaciones</strong> (DI, DII, DIII, aVF, aVL, V1, V4, V5, V6): supradesnivel del ST <strong>≥ 1,0 mm (0,1 mV)</strong>.',
        '<em>Equivalentes de SCACEST (exigen reperfusión inmediata):</em> 1) <strong>Bloqueo completo de rama izquierda (BCRI) nuevo o presumiblemente nuevo</strong> en un paciente con clínica de infarto, apoyado por los criterios de Sgarbossa modificados por Smith: a) elevación del ST concordante ≥ 1 mm; b) depresión del ST concordante en V1-V3 ≥ 1 mm; c) elevación discordante excesiva (&gt; 25% de la amplitud de la onda S previa). Los mismos criterios sirven en el <strong>ritmo de marcapaso</strong>. 2) <strong>IAM posterior aislado</strong> (arteria circunfleja): infradesnivel horizontal del ST en V1-V3 con ondas R altas y T positivas (imagen en espejo); se confirma con las derivaciones posteriores <strong>V7, V8 y V9 (supradesnivel ≥ 0,5 mm)</strong>. 3) <strong>Infradesnivel del ST ≥ 1 mm en ≥ 8 derivaciones con supradesnivel en aVR</strong>: sugiere lesión del tronco coronario izquierdo o enfermedad de tres vasos y obliga a coronariografía urgente.',
        '<strong>Evolución temporal del ECG del infarto:</strong> en los primeros minutos aparecen <strong>ondas T hiperagudas</strong> (altas, anchas y simétricas); en las primeras horas, el <strong>supradesnivel convexo del ST</strong> («onda de lesión»); entre las 6 y 12 horas, la <strong>onda Q de necrosis</strong> (≥ 40 ms) con pérdida de la onda R; en los días siguientes el ST vuelve a la línea de base y la <strong>onda T se invierte</strong>; la onda Q suele persistir para siempre. Un <strong>supradesnivel que persiste más de 4 semanas</strong> sugiere un aneurisma ventricular.',
        'La <strong>imagen especular</strong> (cambios recíprocos) es el infradesnivel del ST en las derivaciones opuestas al territorio infartado: en el infarto inferior aparece en DI y aVL; en el anterior, en DIII y aVF. Su presencia tiene alta especificidad para infarto y es la clave para separarlo de sus imitadores: la <strong>pericarditis aguda</strong> (supradesnivel cóncavo, difuso y no territorial, con infradesnivel del PR, sin imagen especular ni ondas Q), la <strong>repolarización precoz</strong> (joven, ST cóncavo con muesca en J, estable en ECG seriados), el aneurisma ventricular, la hipertrofia ventricular izquierda, el patrón de Brugada y la hiperkalemia. Ante la duda: ECG seriados, ecocardiograma (alteración segmentaria de la motilidad) y consulta precoz con el centro de hemodinamia.',
      ],
    },
    {
      subhead: '3. Territorios, Arteria Culpable e Infarto del Ventrículo Derecho',
      paragraphs: [
        'Las derivaciones con supradesnivel identifican la pared y la arteria culpable (Tabla 2.5.A): <strong>V1-V4 → pared anterior y septal, arteria descendente anterior (DA)</strong>; V1-V6 con DI y aVL → infarto anterior extenso por oclusión proximal de la DA (el de peor pronóstico); <strong>DI, aVL, V5-V6 → pared lateral, circunfleja o rama diagonal</strong>; <strong>DII, DIII y aVF → pared inferior, coronaria derecha en el 80-90% de los casos</strong> (si el supradesnivel es mayor en DIII que en DII y hay infradesnivel en DI y aVL, la culpable es la coronaria derecha; si es mayor en DII con supradesnivel en V5-V6, la circunfleja).',
        'Todo infarto inferior exige tomar las <strong>derivaciones derechas V3R y V4R</strong>: un supradesnivel ≥ 1 mm en V4R confirma el <strong>infarto del ventrículo derecho</strong> (oclusión proximal de la coronaria derecha). Su tríada es hipotensión, ingurgitación yugular y campos pulmonares limpios; se trata con volumen y están contraindicados los nitratos, los diuréticos y la morfina. La coronaria derecha irriga además el nodo AV, por lo que el infarto inferior se asocia a bradicardia sinusal y bloqueos AV, habitualmente transitorios (manejo completo en el Tema 2.6).',
        'El <strong>ecocardiograma</strong> muestra la alteración segmentaria de la motilidad del territorio y es útil cuando el ECG no es concluyente o se sospecha una complicación mecánica, pero <strong>nunca debe retrasar la reperfusión</strong> de un SCACEST evidente.',
      ],
    },
    {
      subhead: '4. Estrategia de Reperfusión: la Regla de los 120 Minutos',
      paragraphs: [
        '<strong>Indicación:</strong> todo SCACEST con <strong>menos de 12 horas de síntomas</strong> debe reperfundirse. Entre las 12 y 48 horas se indica angioplastía si persiste el dolor, hay inestabilidad hemodinámica o arritmias graves. Pasadas las 48 horas, en un paciente asintomático y estable, no se reperfunde de rutina la arteria ocluida (se estudia con coronariografía diferida).',
        'La decisión depende del tiempo estimado para realizar una angioplastía primaria desde el diagnóstico (primer contacto médico con ECG diagnóstico):',
        '• <strong>VÍA 1: ANGIOPLASTÍA PRIMARIA POSIBLE EN ≤ 120 MINUTOS.</strong> Se deriva de inmediato a un centro con hemodinamia 24/7 para <strong>angioplastía primaria (ACTP con implante de stent)</strong>, la estrategia de elección. Meta: <em>tiempo puerta-balón ≤ 90 minutos</em> (≤ 60 minutos si el paciente consulta directamente en un hospital con hemodinamia).',
        '• <strong>VÍA 2: ANGIOPLASTÍA EN MÁS DE 120 MINUTOS.</strong> Se realiza <strong>fibrinólisis farmacológica inmediata</strong> en el centro donde está el paciente (SAPU, SAR u hospital comunitario), con meta GES de <strong>tiempo puerta-aguja ≤ 30 minutos</strong> (la guía europea recomienda iniciarla dentro de 10 minutos del diagnóstico), y se traslada después a un centro con hemodinamia.',
        '• La angioplastía primaria es preferida <strong>sin importar el tiempo</strong> en el <strong>shock cardiogénico</strong> o la insuficiencia cardíaca aguda grave, y cuando la fibrinólisis está contraindicada.',
        '• <em>Fibrinolítico de elección:</em> <strong>tenecteplase (TNK-tPA)</strong> en bolo endovenoso único ajustado por peso corporal (Tabla 2.5.C): &lt; 60 kg: 30 mg (6.000 UI) · 60 a 69 kg: 35 mg (7.000 UI) · 70 a 79 kg: 40 mg (8.000 UI) · 80 a 89 kg: 45 mg (9.000 UI) · ≥ 90 kg: 50 mg (10.000 UI). En los <strong>mayores de 75 años se usa la mitad de la dosis</strong>. Alternativas: alteplasa en esquema acelerado y estreptoquinasa 1,5 millones UI en 30 a 60 minutos (no fibrinoespecífica, produce hipotensión y alergia, y no se repite).',
        '• <em>Contraindicaciones absolutas de fibrinólisis:</em> antecedente de ACV hemorrágico de cualquier fecha; ACV isquémico en los últimos 6 meses; malformación arteriovenosa o neoplasia intracraneal; traumatismo craneoencefálico o cirugía mayor en el último mes; sangrado digestivo en el último mes; trastorno hemorrágico conocido; punciones no compresibles en las últimas 24 horas; <strong>sospecha de disección aórtica aguda</strong>. Las relativas (Tabla 2.5.B) obligan a ponderar el riesgo; si hay una contraindicación absoluta, el paciente va a angioplastía aunque el traslado supere los 120 minutos.',
      ],
    },
    {
      subhead: '5. Después de la Fibrinólisis: Reperfusión Exitosa, Rescate y Estrategia Farmacoinvasiva',
      paragraphs: [
        'A los <strong>60 a 90 minutos</strong> de la trombólisis se evalúa el éxito del procedimiento:',
        '1) <strong>Criterios de reperfusión exitosa:</strong> <strong>descenso del supradesnivel del ST &gt; 50%</strong> en la derivación con mayor elevación; desaparición o alivio marcado del dolor torácico; aparición de arritmias de reperfusión típicas (<strong>ritmo idioventricular acelerado, RIVA</strong>, benigno y que no se trata). Conducta: traslado para coronariografía en 2 a 24 horas (<strong>estrategia farmacoinvasiva</strong>).',
        '2) <strong>Fibrinólisis fallida</strong> (descenso del ST &lt; 50% o persistencia del dolor a los 90 minutos): traslado de emergencia inmediato para <strong>angioplastía de rescate</strong>. La reoclusión, la isquemia recurrente, el shock o las arritmias graves después de una fibrinólisis exitosa también obligan a coronariografía urgente. <em>Todo paciente fibrinolizado se traslada a un centro con hemodinamia.</em>',
      ],
    },
    {
      subhead: '6. Terapia Farmacológica Coadyuvante Inmediata',
      paragraphs: [
        '• <strong>Medidas generales:</strong> monitor y desfibrilador a mano, vía venosa y reposo. <strong>Oxígeno solo si la saturación es &lt; 90%</strong> (la hiperoxia no beneficia). <strong>Nitroglicerina</strong> sublingual o endovenosa para el dolor, la hipertensión o la congestión, <strong>contraindicada</strong> en el infarto del ventrículo derecho, con PAS &lt; 90 mmHg o tras usar sildenafil (24 horas) o tadalafil (48 horas). <strong>Morfina</strong> solo para el dolor refractario (retrasa la absorción de los antiagregantes orales).',
        '• <strong>Doble antiagregación plaquetaria:</strong> 1) <strong>Aspirina</strong>: dosis de carga de <strong>250 mg vía oral masticada</strong> (o 500 mg EV), seguida de 100 mg/día de por vida; 2) <strong>Segundo antiagregante (inhibidor P2Y12)</strong>: si el paciente va a <em>angioplastía primaria</em>, el de primera línea es <strong>ticagrelor 180 mg de carga (90 mg cada 12 horas)</strong> o prasugrel 60 mg; si recibe <em>fibrinólisis</em>, se usa <strong>clopidogrel 300 mg de carga</strong> (75 mg sin carga si tiene ≥ 75 años). Duración estándar: <strong>12 meses</strong>.',
        '• <strong>Anticoagulación parenteral:</strong> con fibrinólisis, <strong>enoxaparina</strong> (bolo EV de 30 mg seguido de 1 mg/kg SC cada 12 horas; en mayores de 75 años se omite el bolo y se dosifica 0,75 mg/kg SC cada 12 horas); en la angioplastía primaria, heparina no fraccionada en bolo durante el procedimiento.',
        '• <strong>Estatina de alta potencia precoz:</strong> <strong>atorvastatina 80 mg/día</strong> iniciada en las primeras 24 horas, independientemente del colesterol basal. <strong>Betabloqueador oral</strong> en las primeras 24 horas si no hay insuficiencia cardíaca, shock, bradicardia ni bloqueo AV; <strong>IECA</strong> en las primeras 24 horas si la FEVI es ≤ 40%, hay insuficiencia cardíaca, diabetes o infarto anterior. Evitar los AINE (reinfarto y rotura cardíaca) y no usar antiarrítmicos profilácticos.',
      ],
    },
    {
      subhead: '7. Complicaciones Precoces y Clasificación de Killip-Kimball',
      paragraphs: [
        'La clasificación de <strong>Killip-Kimball</strong> estratifica el pronóstico al ingreso según el examen físico: <strong>I</strong> sin signos de insuficiencia cardíaca; <strong>II</strong> crépitos basales, tercer ruido o ingurgitación yugular; <strong>III</strong> edema agudo de pulmón; <strong>IV</strong> shock cardiogénico. La mortalidad aumenta en forma escalonada de I a IV, y el shock cardiogénico es la principal causa de muerte intrahospitalaria: se trata con angioplastía urgente (Tema 3.4).',
        'La <strong>fibrilación ventricular</strong> de las primeras horas es la principal causa de muerte prehospitalaria y se trata con desfibrilación inmediata (Tema 1.3). La bradicardia y el bloqueo AV del infarto inferior suelen ser transitorios y responden a atropina; el bloqueo AV en el infarto anterior refleja una necrosis extensa y requiere marcapaso. Las complicaciones mecánicas (rotura de músculo papilar, comunicación interventricular y rotura de pared libre) aparecen entre los días 3 y 7 y se revisan en el Tema 2.6.',
      ],
    },
    {
      subhead: '8. Garantías Explícitas en Salud (GES N.º 5) y Prevención Secundaria Integral',
      paragraphs: [
        'El Infarto Agudo del Miocardio es el <strong>problema de salud GES N.º 5</strong> en Chile, con garantías legalmente exigibles de acceso, oportunidad, calidad y protección financiera para el diagnóstico (ECG ante la sospecha), el tratamiento de reperfusión (fibrinólisis o angioplastía) y la prevención secundaria después del alta. Las metas de tiempo que se preguntan: <strong>ECG interpretado en ≤ 10 minutos</strong>, <strong>fibrinólisis en ≤ 30 minutos (puerta-aguja)</strong> y <strong>angioplastía primaria en ≤ 90 minutos (puerta-balón) / ≤ 120 minutos desde el primer contacto</strong>.',
        '<strong>Terapia de alta y prevención secundaria:</strong> todo paciente con IAM debe recibir el régimen de prevención secundaria: <em>1) aspirina 100 mg/día de por vida; 2) ticagrelor o clopidogrel por 12 meses; 3) atorvastatina 80 mg/día (meta c-LDL &lt; 55 mg/dL y reducción ≥ 50%); 4) betabloqueador (bisoprolol o carvedilol, obligatorio si FEVI &lt; 40%); 5) IECA (enalapril) o ARA II</em>; más cesación del tabaco, control de la presión arterial y de la diabetes, rehabilitación cardíaca y un ecocardiograma antes del alta para medir la FEVI (si persiste ≤ 35% pese al tratamiento óptimo, se evalúa un desfibrilador implantable).',
      ],
    },
  ],
  table: {
    title: 'Territorios del IAM con Supradesnivel del ST: Derivaciones, Imagen Especular y Arteria Culpable',
    headers: ['Territorio', 'Derivaciones con supradesnivel', 'Imagen especular (infradesnivel)', 'Arteria culpable habitual'],
    rows: [
      ['Anterior / anteroseptal', 'V1-V4', 'DIII, aVF', 'Descendente anterior (DA)'],
      ['Anterior extenso', 'V1-V6, DI, aVL', 'DII, DIII, aVF', 'DA proximal (peor pronóstico)'],
      ['Lateral (alto)', 'DI, aVL, V5-V6', 'DII, DIII, aVF', 'Circunfleja o rama diagonal'],
      ['Inferior', 'DII, DIII, aVF (DIII > DII)', 'DI, aVL', 'Coronaria derecha (80-90%)'],
      ['Posterior', 'V7-V9 (≥ 0,5 mm)', 'V1-V3 con R alta y T positiva', 'Circunfleja o coronaria derecha'],
      ['Ventrículo derecho', 'V3R-V4R (≥ 1 mm) + inferior', 'DI, aVL', 'Coronaria derecha proximal'],
    ],
  },
  severityTable: {
    title: 'Contraindicaciones de la Fibrinólisis en el SCACEST',
    headers: ['Tipo', 'Contraindicación', 'Conducta'],
    rows: [
      ['Absoluta', 'ACV hemorrágico previo (cualquier fecha) o ACV isquémico en los últimos 6 meses', 'Angioplastía aunque tarde > 120 min'],
      ['Absoluta', 'Malformación arteriovenosa o neoplasia intracraneal', 'Angioplastía aunque tarde > 120 min'],
      ['Absoluta', 'TEC o cirugía mayor en el último mes; sangrado digestivo en el último mes', 'Angioplastía aunque tarde > 120 min'],
      ['Absoluta', 'Trastorno hemorrágico conocido; punciones no compresibles en 24 h', 'Angioplastía aunque tarde > 120 min'],
      ['Absoluta', 'Sospecha de disección aórtica aguda', 'AngioTAC; nunca trombolizar'],
      ['Relativa', 'AIT en los últimos 6 meses; uso de anticoagulantes orales', 'Ponderar riesgo-beneficio'],
      ['Relativa', 'Embarazo o primera semana posparto', 'Ponderar riesgo-beneficio'],
      ['Relativa', 'HTA refractaria (PAS > 180 o PAD > 110 mmHg); hepatopatía avanzada; endocarditis; úlcera péptica activa', 'Controlar y ponderar'],
      ['Relativa', 'Reanimación cardiopulmonar prolongada o traumática', 'Ponderar riesgo-beneficio'],
    ],
  },
  treatmentTable: {
    title: 'Reperfusión y Terapia Coadyuvante Inmediata en el SCACEST (Dosis del Adulto)',
    headers: ['Fármaco', 'Dosis', 'Con angioplastía primaria', 'Con fibrinólisis'],
    rows: [
      ['Aspirina', '250 mg VO masticada (o 500 mg EV); luego 100 mg/día', 'Sí', 'Sí'],
      ['Ticagrelor / prasugrel', '180 mg (90 mg c/12 h) / 60 mg de carga', 'De elección', 'No'],
      ['Clopidogrel', '300 mg de carga (≥ 75 años: 75 mg sin carga); 600 mg si va a ACTP sin ticagrelor', 'Alternativa', 'De elección'],
      ['Enoxaparina', 'Bolo EV 30 mg + 1 mg/kg SC c/12 h (≥ 75 años: 0,75 mg/kg sin bolo)', 'Alternativa', 'De elección'],
      ['Heparina no fraccionada', 'Bolo EV ajustado por peso y TTPA', 'De elección', 'Alternativa'],
      ['Tenecteplase (TNK-tPA)', '< 60 kg 30 mg · 60-69 kg 35 mg · 70-79 kg 40 mg · 80-89 kg 45 mg · ≥ 90 kg 50 mg (bolo único en 5-10 s; ½ dosis si ≥ 75 años)', 'No', 'De elección'],
      ['Estreptoquinasa', '1,5 millones UI EV en 30-60 min', 'No', 'Alternativa'],
      ['Atorvastatina', '80 mg/día desde las primeras 24 h', 'Sí', 'Sí'],
      ['Nitroglicerina / morfina / O₂', 'Solo dolor, HTA o congestión / dolor refractario / SatO₂ < 90%', 'Según clínica', 'Según clínica'],
    ],
  },
  vignette: 'Hombre de 56 años, fumador e hipertenso, consulta en un Servicio de Atención Primaria de Urgencia (SAPU) rural con dolor torácico opresivo de 1 hora de evolución, irradiado a la mandíbula, con diaforesis. El ECG tomado a los 5 minutos muestra supradesnivel del ST de 3 mm en DII, DIII y aVF, con infradesnivel en DI y aVL; las derivaciones V3R-V4R no muestran supradesnivel. El hospital con laboratorio de hemodinamia más cercano se encuentra a 3 horas de distancia. PA 130/80 mmHg, FC 68 lpm, pulmones limpios, peso 74 kg. Sin antecedentes de ACV, sangrado ni cirugías recientes.',
  explicacion: 'El paciente presenta un SCACEST de pared inferior (con imagen especular en DI y aVL, culpable probable la coronaria derecha) sin compromiso del ventrículo derecho. Como el tiempo estimado para llegar a la angioplastía primaria supera con creces los 120 minutos (está a 3 horas) y no tiene contraindicaciones, la indicación es la fibrinólisis farmacológica inmediata en el SAPU con tenecteplase 40 mg en bolo endovenoso (rango de 70 a 79 kg) dentro de los primeros 30 minutos (puerta-aguja), asociada a aspirina 250 mg masticada, clopidogrel 300 mg y enoxaparina (bolo EV de 30 mg y 1 mg/kg SC), coordinando el traslado en ambulancia avanzada a un centro con hemodinamia: angioplastía de rescate si a los 60-90 minutos el ST no ha descendido más de 50%, o coronariografía en 2 a 24 horas si la fibrinólisis fue exitosa.',
  keyPoints: [
    'ECG de 12 derivaciones interpretado en ≤ 10 minutos ante todo dolor torácico; el SCACEST se reperfunde sin esperar la troponina.',
    'Supradesnivel en ≥ 2 derivaciones contiguas: ≥ 1 mm en general; en V2-V3 ≥ 2 mm (hombre ≥ 40 años), ≥ 2,5 mm (hombre < 40) y ≥ 1,5 mm (mujer).',
    'BCRI nuevo con clínica de infarto = equivalente de SCACEST: reperfusión inmediata. Infradesnivel V1-V3 con R alta = IAM posterior (pedir V7-V9).',
    'DII, DIII y aVF = infarto inferior (coronaria derecha): tomar siempre V3R-V4R; en el infarto del VD, volumen y nada de nitratos, diuréticos ni morfina.',
    'Angioplastía primaria si se puede hacer en ≤ 120 min desde el diagnóstico (meta puerta-balón ≤ 90 min); si no, fibrinólisis en ≤ 30 min y traslado.',
    'Tenecteplase en bolo según peso (30 a 50 mg; 40 mg entre 70 y 79 kg) y la mitad de la dosis en ≥ 75 años; con fibrinólisis, clopidogrel 300 mg y enoxaparina.',
    'Reperfusión exitosa = descenso del ST > 50% a los 60-90 min (con alivio del dolor y RIVA); si falla, angioplastía de rescate inmediata.',
    'Shock cardiogénico o contraindicación de fibrinólisis (ACV hemorrágico previo, sospecha de disección aórtica) = angioplastía aunque tarde más de 120 min.',
  ],
  questions: [
    {
      stem: 'Un paciente de 62 años, con antecedentes de dislipidemia y diabetes en tratamiento con dieta e hipoglicemiantes orales, consulta por dolor toráxico opresivo irradiado a ambos hombros intenso EVA 9/10, asociado a disnea y sudoración. Al examen físico, su presión arterial es 140/70 mmHg con frecuencia cardiaca de 80 latidos por minuto. Presenta RR3T con presencia de R3, murmullo pulmonar presente con crépitos bibasales. Electrocardiagrama: SDST en V1-V4. La conducta más adecuada es:',
      options: [
        { id: 'A', text: 'Tratamiento anticoagulante' },
        { id: 'B', text: 'Tratamiento antiplaquetario' },
        { id: 'C', text: 'Solicitar AngioTAC de tórax' },
        { id: 'D', text: 'Ecocardiograma bidimensional' },
        { id: 'E', text: 'Coronariografía de urgencia' },
      ],
      correcta: 'E',
      explicacion: 'SCACEST anterior (supradesnivel V1-V4, territorio de la descendente anterior) con signos de insuficiencia cardíaca (tercer ruido y crépitos: Killip II). La conducta que cambia el pronóstico es la reperfusión: coronariografía de urgencia para angioplastía primaria. Los antiagregantes y la anticoagulación son coadyuvantes, no la conducta principal; el ecocardiograma y el angioTAC retrasan la reperfusión.',
      recTag: 'EUNACOM Julio 2017 · Pregunta 46',
    },
    {
      stem: 'Un paciente de 65 años, diabético e hipertenso, consulta por dolor precordial opresivo intenso, EVA: 9/10, asociado a malestar general y disnea. Al examen físico con frecuencia cardiaca de 90 por minuto, presión arterial de 150/90 mmHg, al examen cardiaco se ausculta un ritmo regular y tercer ruido. Se realiza estudio con electrocardiograma que muestra supradesnivel del segmento ST en DII, DIII y AVF. Diagnóstico más probable:',
      options: [
        { id: 'A', text: 'Infarto de pared anterior' },
        { id: 'B', text: 'Infarto de pared inferior' },
        { id: 'C', text: 'Pericarditis' },
        { id: 'D', text: 'Infarto de pared posterior' },
        { id: 'E', text: 'Infarto de pared lateral' },
      ],
      correcta: 'B',
      explicacion: 'DII, DIII y aVF son las derivaciones inferiores: infarto de pared inferior, habitualmente por oclusión de la coronaria derecha. Obliga a tomar V3R-V4R para descartar compromiso del ventrículo derecho. La pericarditis da un supradesnivel difuso y cóncavo, no limitado a un territorio.',
      recTag: 'EUNACOM Julio 2017 · Pregunta 60',
    },
    {
      stem: 'Paciente de 63 años, fumador y diabético, que hace una hora comienza con dolor torácico opresivo, intenso, que se irradia a cuello, con diaforesis y sensación de angustia. Se solicita un electrocardiograma, que muestra ritmo sinusal, a 80 lpm, con bloqueo completo de rama izquierda, que no se había visualizado en electrocardiogramas previos. ¿Cuál es la conducta más adecuada?',
      options: [
        { id: 'A', text: 'Solicitar enzimas cardíacas' },
        { id: 'B', text: 'Solicitar angiografía pulmonar' },
        { id: 'C', text: 'Solicitar ecocardiograma transesofágico' },
        { id: 'D', text: 'Instalar marcapaso externo transitorio' },
        { id: 'E', text: 'Iniciar terapia de reperfusión miocárdica precoz' },
      ],
      correcta: 'E',
      explicacion: 'El bloqueo completo de rama izquierda nuevo en un paciente con dolor típico es un equivalente de SCACEST: se reperfunde de inmediato (angioplastía primaria o fibrinólisis según el tiempo). Esperar las enzimas es el error que el examen castiga.',
      recTag: 'EUNACOM Julio 2016 · Pregunta 55',
    },
    {
      stem: 'Un paciente de 23 años consulta en el servicio de urgencia, por dolor torácico de 2 horas de evolución, intenso, asociado a diaforesis y palpitaciones, que inició algunos minutos después de haber inhalado cocaína. Al examen físico presenta FC: 120x’, PA: 190/120 mmHg, ritmo regular en dos tonos, sin soplos. Su electrocardiograma muestra supradesnivel de segmento ST en las derivaciones de la pared anterior. ¿Qué fármaco está contraindicado en el manejo de este paciente?',
      options: [
        { id: 'A', text: 'Estreptoquinasa' },
        { id: 'B', text: 'Clopidogrel' },
        { id: 'C', text: 'Nitroglicerina' },
        { id: 'D', text: 'Atenolol' },
        { id: 'E', text: 'Diazepam' },
      ],
      correcta: 'D',
      explicacion: 'En el infarto asociado a cocaína el betabloqueador está contraindicado: deja sin oposición el efecto alfa-adrenérgico y agrava el vasoespasmo y la hipertensión. Se usan benzodiacepinas y nitratos, y se reperfunde como cualquier SCACEST.',
      recTag: 'EUNACOM Agosto 2021 · Pregunta 44',
    },
    {
      stem: 'Hombre de 60 años consulta en hospital comunal sin hemodinamia por dolor precordial típico de 40 minutos de evolución. ECG revela supradesnivel del ST de 4 mm de V1 a V4. El centro terciario con capacidad de angioplastía está a 150 minutos de traslado. No tiene contraindicaciones de fibrinólisis. ¿Cuál es la conducta médica de elección?',
      options: [
        { id: 'A', text: 'Administrar tenecteplase endovenoso en bolo inmediatamente en el hospital comunal y luego trasladar' },
        { id: 'B', text: 'Derivar en ambulancia a angioplastía primaria sin trombólisis previa' },
        { id: 'C', text: 'Administrar heparina en infusión y esperar resultado de troponinas' },
        { id: 'D', text: 'Realizar test de esfuerzo para confirmar extensión del infarto' },
        { id: 'E', text: 'Indicar nitroglicerina sublingual y reposo absoluto sin fármacos trombolíticos' },
      ],
      correcta: 'A',
      explicacion: 'Cuando la angioplastía primaria no puede realizarse en 120 minutos o menos, se indica fibrinólisis inmediata con tenecteplase (meta puerta-aguja ≤ 30 minutos) y traslado posterior a un centro con hemodinamia (estrategia farmacoinvasiva). Esperar troponinas o hacer un test de esfuerzo en un SCACEST está contraindicado.',
      recTag: 'Banco Oficial AEE',
    },
    {
      stem: 'Mujer de 68 años, con antecedente de ACV isquémico hace 2 meses, consulta en un hospital sin hemodinamia por dolor torácico opresivo de 2 horas de evolución. El ECG muestra supradesnivel del ST de 3 mm en DII, DIII y aVF. PA 125/80 mmHg. El centro con angioplastía más cercano está a 150 minutos de traslado. ¿Cuál es la conducta más adecuada?',
      options: [
        { id: 'A', text: 'Tenecteplase a mitad de dosis y traslado' },
        { id: 'B', text: 'Estreptoquinasa, por tener menor riesgo de hemorragia intracraneal' },
        { id: 'C', text: 'Aspirina, clopidogrel y anticoagulación, y traslado inmediato para angioplastía primaria' },
        { id: 'D', text: 'Aspirina y heparina, y coronariografía electiva en 48 a 72 horas' },
        { id: 'E', text: 'Tenecteplase en dosis completa, porque el beneficio supera al riesgo' },
      ],
      correcta: 'C',
      explicacion: 'El ACV isquémico en los últimos 6 meses es una contraindicación absoluta de fibrinólisis (con cualquier fibrinolítico y en cualquier dosis). Con una contraindicación absoluta, el SCACEST se traslada a angioplastía primaria aunque el tiempo supere los 120 minutos, con doble antiagregación y anticoagulación desde el inicio.',
      recTag: 'Banco Oficial AEE',
    },
  ],
  _origen: '2.3§0 · 2.3§1 · 2.3§2 · 2.3§4 · 2.3§5 (reescrito y ampliado al estándar, oct-2026)',
  _estado: 'estandar',
};
