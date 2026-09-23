// ============================================================================
// BLOQUE 01 NEUROLOGÍA: ENFERMEDAD CEREBROVASCULAR Y URGENCIAS NEUROVASCULARES
// Manual EUNACOM 2026 · Tomo 10 Neurología & Geriatría (Accent color: #6d28d9 - Púrpura)
// 5 Temas Curriculares (10.1 a 10.5) · Cobertura 100% Perfil V3 & Garantías GES
// ============================================================================

function flow(title, rows) {
  const W = 620, CX = 310, GAP = 22;
  const P = [];
  let y = 8, prev = null;
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const arr = s => Array.isArray(s) ? s : (s ? [s] : []);
  function wrap(s, max) {
    if (s.length <= max) return [s];
    const mid = s.length / 2, marks = [];
    let i = s.indexOf(' · ');
    while (i !== -1) { marks.push([i, i + 3]); i = s.indexOf(' · ', i + 1); }
    if (!marks.length) { let j = s.indexOf(' '); while (j !== -1) { marks.push([j, j + 1]); j = s.indexOf(' ', j + 1); } }
    let best = null, bd = 1e9;
    marks.forEach(m => { const d = Math.abs(m[0] - mid); if (d < bd) { bd = d; best = m; } });
    return best ? [s.slice(0, best[0]).trim(), s.slice(best[1]).trim()] : [s];
  }
  function draw(x, w, o) {
    const max = Math.floor((w - 18) / 4.4);
    const subs = [];
    arr(o.s).forEach(l => wrap(String(l), max).forEach(ln => subs.push(ln)));
    const h = (o.t ? 21 : 8) + subs.length * 11 + (subs.length ? 7 : 8);
    const cls = { acc: 'acc', dec: 'dec', warn: 'warn', crit: 'crit' }[o.type] || 'b';
    const tc = { acc: 'accT', warn: 'warnT', crit: 'warnT' }[o.type] || 't';
    const sc = o.type === 'acc' ? 'accS' : (o.type === 'warn' || o.type === 'crit') ? 'warnT sub' : 'sub';
    P.push(`<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>`);
    let ty = y + (o.t ? 15 : 14);
    if (o.t) { P.push(`<text class="${tc} t" x="${x + w / 2}" y="${ty}" text-anchor="middle" font-weight="700">${esc(o.t)}</text>`); ty += 12; }
    subs.forEach(l => { P.push(`<text class="${sc}" x="${x + w / 2}" y="${ty}" text-anchor="middle">${esc(l)}</text>`); ty += 11; });
    return h;
  }
  function step(label, from) {
    const ty = y + GAP;
    const xs = from === 'left' ? [prev.xs[0]] : from === 'right' ? [prev.xs[prev.xs.length - 1]] : prev.xs;
    xs.forEach(x => {
      P.push(x === CX
        ? `<path class="ln" d="M${CX},${prev.y} V${ty}"/>`
        : `<path class="ln" d="M${x},${prev.y} V${prev.y + 10} H${CX} V${ty}"/>`);
    });
    if (label) P.push(`<text class="sub" x="${CX + 7}" y="${prev.y + GAP / 2 + 3}">${esc(label)}</text>`);
    y = ty;
  }
  rows.forEach(r => {
    if (r.k === 'split') {
      if (prev) step(r.al, r.from);
      const dh = draw(70, 480, { t: r.q, s: r.s, type: 'dec' });
      const db = y + dh;
      const hasL = !!(r.ll || r.rl);
      y = db + (hasL ? 40 : 24);
      const bw = 292, lx = 12, rx = 316, lcx = lx + bw / 2, rcx = rx + bw / 2, hc = y - 10;
      P.push(`<path class="ln" d="M${CX},${db} V${hc} H${lcx} V${y}"/>`);
      P.push(`<path class="ln" d="M${CX},${hc} H${rcx} V${y}"/>`);
      [[r.ll, lcx], [r.rl, rcx]].forEach(([lab, cx]) => {
        if (!lab) return;
        const ls = wrap(String(lab), 74);
        ls.forEach((line, k) => P.push(`<text class="lbl" x="${cx}" y="${y - 15 - (ls.length - 1 - k) * 9}" text-anchor="middle">${esc(line)}</text>`));
      });
      const top = y;
      const lh = draw(lx, bw, r.left);
      y = top;
      const rh = draw(rx, bw, r.right);
      y = top + Math.max(lh, rh);
      prev = { y, xs: [lcx, rcx] };
    } else {
      if (prev) step(r.al, r.from);
      const w = r.w || (r.type === 'dec' ? 480 : 420);
      const x = (W - w) / 2;
      const h = draw(x, w, r);
      y += h;
      prev = { y, xs: [CX] };
    }
  });
  const H = y + 8;
  const svg = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;font-family:'IBM Plex Sans',system-ui,sans-serif">
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6d28d9"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}
    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}
    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}
    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque1 = [
  // ==========================================================================
  // TEMA 10.1: ACCIDENTE CEREBROVASCULAR ISQUÉMICO (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'neuro-01',
    classId: 'neuro-01',
    tier: 3,
    blockNum: 1,
    blockName: 'Enfermedad Cerebrovascular y Urgencias Neurovasculares',
    topicLabel: '10.1',
    title: 'Accidente Cerebrovascular Isquémico: Diagnóstico, Ventana Terapéutica, Trombolisis IV (Alteplase/Tenecteplase) y Trombectomía Mecánica GES',
    perfilCode: '1.10.2.001, 1.10.2.007',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 37): Ataque Cerebrovascular Isquémico en personas de 15 años y más · Sospecha con atención de urgencia inmediata, confirmación diagnóstica con neuroimagen en ≤ 30 minutos desde el ingreso, trombolisis endovenosa dentro de 4.5 horas y trombectomía mecánica en centros terciarios de referencia.',
    reconstrucciones: 'EUNACOM Julio 2025 (Q#66) · EUNACOM Diciembre 2025 (Q#26) · EUNACOM Enero 2023 (Q#121) · EUNACOM Julio 2019 (Q#93)',
    frecuencia: 'Máxima rentabilidad · Pregunta angular de urgencias neurológicas y medicina interna',
    svg: null,
    algoTitle: 'Algoritmo de Reperfusión Aguda en ACV Isquémico: Ventanas y Criterios Hemodinámicos',
    diagram: flow('Algoritmo de Reperfusión Aguda en ACV Isquémico', [
      { t: 'Sospecha de ACV Isquémico Agudo (Cincinnati / FAST (+))', s: 'Tiempo desde inicio o última vez visto sano · Traslado inmediato con preaviso hospitalario', type: 'acc' },
      { t: 'Urgencia Inmediata: TAC de Encéfalo sin Contraste (Meta puerta-TAC ≤ 20-30 min)', s: 'Descartar hemorragia intracerebral · Glicemia capilar para descartar hipoglicemia simulación', type: 'warn' },
      { k: 'split', q: '¿TAC sin Hemorragia y Tiempo de Evolución desde el Inicio?', s: 'Evaluación simultánea de escala NIHSS y presión arterial de ingreso',
        ll: 'Ventana ≤ 4.5 horas (Sin contraindicaciones)',
        left: { t: 'Trombolisis Intravenosa (IVT)', s: 'Alteplase 0.9 mg/kg o Tenecteplase 0.25 mg/kg · PA DEBE ser < 185/110 mmHg', type: 'crit' },
        rl: 'Ventana 4.5 a 24 h o Oclusión de Gran Vaso',
        right: { t: 'AngioTAC / TAC Perfusión Urgente', s: 'Descartar oclusión carotídea / ACM M1 · Evaluar criterios de Trombectomía Mecánica', type: 'dec' }
      },
      { t: 'Trombectomía Mecánica Endovascular (TME)', s: 'Ventana hasta 6 h (o hasta 24 h según criterios DAWN/DEFUSE-3) · Terapia puente post-trombolisis', type: 'acc' },
      { t: 'Ingreso a UTAC y Prevención Secundaria Precoz', s: 'AAS 250 mg a las 24 h post-trombolisis · Atorvastatina 80 mg · Manejo tensional controlado', type: 'acc' }
    ]),
    contexto: 'El ataque cerebrovascular (ACV) isquémico es la principal causa de discapacidad adquirida en el adulto y una de las mayores urgencias médicas en Chile (Garantía GES N° 37). En el cerebro isquémico, "tiempo es cerebro": se destruyen 1.9 millones de neuronas por minuto. La prioridad absoluta del médico de urgencia es descartar hemorragia mediante TAC sin contraste inmediato, estabilizar la presión arterial bajo 185/110 mmHg e iniciar trombolisis intravenosa dentro de 4.5 horas o derivar a trombectomía mecánica en oclusiones de gran vaso.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Penumbra Isquémica y Clasificación Etiológica TOAST',
        paragraphs: [
          'La oclusión arterial cerebral aguda genera dos zonas tisulares biológicamente diferenciadas: el <strong>núcleo isquémico (core)</strong>, donde el flujo sanguíneo cerebral cae por debajo de 10 mL/100 g/min, produciendo depleción inmediata de ATP, falla de la bomba Na+/K+ ATPasa, despolarización anóxica y necrosis irreversible en minutos; y la <strong>penumbra isquémica</strong>, área circundante donde el flujo se mantiene entre 10 y 20 mL/100 g/min gracias a colaterales leptomeníngeas. Las neuronas de la penumbra están silentes pero metabólicamente viables; si la reperfusión no se restablece con rapidez, el núcleo se expande inexorablemente a expensas de la penumbra.',
          'La clasificación etiológica de <strong>TOAST</strong> divide el ACV isquémico en cinco categorías cardinales: <strong>1) Aterosclerosis de grandes vasos</strong> (estenosis ≥ 50% u oclusión de carótida interna extracraneana o troncos intracraneales); <strong>2) Cardioembolia</strong> (asociada a fibrilación auricular, trombo mural ventricular post-IAM, miocardiopatía dilatada o prótesis valvulares mecánicas); <strong>3) Oclusión de pequeño vaso / infarto lacunar</strong> (infartos &lt; 15 mm en ganglios basales, cápsula interna o troncoencefálico, causados por lipohialinosis o microateromatosis ligada a hipertensión arterial y diabetes); <strong>4) Otra etiología determinada</strong> (disección arterial carotídea o vertebral en adultos jóvenes tras trauma cervical o elongación brusca, vasculitis del SNC, trombosis venosa cerebral, síndrome antifosfolípidos); y <strong>5) Etiología indeterminada / criptogénico</strong>.'
        ]
      },
      {
        subhead: '2. Diagnóstico Clínico, Escalas Prehospitalarias y Neuroimagen de Urgencia',
        paragraphs: [
          'El reconocimiento extrahospitalario precoz se basa en la <strong>Escala de Cincinnati (FAST)</strong>: 1) Asimetría facial (paresia facial central); 2) Caída o debilidad de un brazo al elevarlos; 3) Habla anormal (disartria o afasia). La presencia de un solo parámetro confiere una probabilidad de ACV del 72%, elevándose al 85% con los tres.',
          'En el servicio de urgencia es mandatorio cuantificar el déficit mediante la <strong>Escala NIHSS (National Institutes of Health Stroke Scale)</strong> (0 a 42 puntos): evalúa nivel de conciencia, mirada conjugada, campos visuales, paresia facial, fuerza motora braquial y crural, ataxia, sensibilidad, lenguaje, disartria e inatención/extinción. Una puntuación &lt; 5 define un ACV menor; ≥ 16 indica compromiso moderado-severo con alta sospecha de oclusión de gran vaso arterial.',
          '<strong>Examen de elección inicial e inaplazable: TAC de encéfalo sin contraste</strong>. Su objetivo primario en la fase hiperaguda (&lt; 4.5 horas) es <em>descartar sangrado intracraneal</em>. En las primeras horas, el TAC es frecuentemente <strong>normal (hasta en el 60-70% de los casos)</strong> o muestra signos precoces sutiles de isquemia: borramiento del núcleo lenticular, pérdida de diferenciación sustancia gris-blanca en la corteza insular (<em>signo del ribete insular</em>), borramiento de surcos corticales y el <em>signo de la arteria cerebral media hiperdensa</em> (trombo endoluminal agudo). El <strong>Score ASPECTS</strong> (0 a 10 puntos) cuantifica la extensión isquémica precoz en el territorio de la ACM; un ASPECTS &gt; 6 predice buen pronóstico funcional tras la reperfusión.',
          'La <strong>AngioTAC cerebral y de vasos de cuello</strong> debe realizarse de inmediato en pacientes con NIHSS ≥ 6 para identificar la oclusión de grandes vasos arteriales accesibles a trombectomía mecánica (carótida interna terminal, segmento M1 de la arteria cerebral media o arteria basilar).'
        ]
      },
      {
        subhead: '3. Reperfusión Farmacológica Aguda: Trombolisis Intravenosa (IVT)',
        paragraphs: [
          'La <strong>trombolisis intravenosa</strong> está indicada en todo paciente con ACV isquémico con déficit neurológico discapacitante dentro de una <strong>ventana terapéutica estricta de hasta 4.5 horas</strong> desde el inicio de los síntomas (o última vez que fue visto asintomático).',
          '<strong>Agentes trombolíticos oficiales:</strong>',
          '• <strong>Alteplase (rt-PA):</strong> Dosis de <strong>0.9 mg/kg</strong> (dosis máxima 90 mg). Se administra el <strong>10% de la dosis en bolo endovenoso durante 1 minuto</strong> y el <strong>90% restante en infusión continua durante 60 minutos</strong>.',
          '• <strong>Tenecteplase (TNK):</strong> Variante modificada genéticamente con mayor afinidad por la fibrina y vida media más prolongada. Dosis: <strong>0.25 mg/kg en bolo único EV</strong> durante 5 a 10 segundos (máximo 25 mg). Guías clínicas internacionales y GES 2024-2026 lo posicionan como alternativa preferencial por rapidez de infusión y mayor tasa de recanalización precoz en oclusión de gran vaso.',
          '<strong>Requisito hemodinámico crítico:</strong> La presión arterial DEBE ser <strong>&lt; 185 mmHg de sistólica y &lt; 110 mmHg de diastólica ANTES</strong> de iniciar la infusión trombolítica, y mantenerse <strong>&lt; 180/105 mmHg durante las primeras 24 horas</strong> para minimizar el riesgo de hemorragia cerebral sintomática. Los fármacos de elección son <strong>Labetalol EV</strong> (bolos de 10-20 mg repetibles o infusión 2-8 mg/min) o <strong>Nicardipino EV</strong>.',
          '<strong>Contraindicaciones absolutas mayores:</strong> Antecedente de hemorragia intracraneal en cualquier momento de la vida; traumatismo encéfalo-craneano severo o cirugía craneoespinal en los últimos 3 meses; hemorragia interna activa; diátesis hemorrágica conocida (recuento plaquetario &lt; 100.000/mm³, INR &gt; 1.7 o TTPA prolongado); uso de anticoagulantes orales directos (DOACs) en las últimas 48 horas con pruebas de coagulación alteradas; e infarto isquémico extenso establecido (&gt; 1/3 del territorio de la ACM o ASPECTS &lt; 6).'
        ]
      },
      {
        subhead: '4. Trombectomía Mecánica Endovascular (TME) y Ventanas Extendidas',
        paragraphs: [
          'La <strong>trombectomía mecánica</strong> consiste en la extracción directa del trombo endoluminal mediante cateterismo femoral o radial utilizando dispositivos stent-retriever o aspiración por catéter de gran calibre.',
          '<strong>Indicaciones estándar (ventana de 0 a 6 horas):</strong> Oclusión demostrada por AngioTAC de carótida interna terminal o ACM segmento M1, edad ≥ 18 años, NIHSS basal ≥ 6, ASPECTS ≥ 6 y modified Rankin Scale (mRS) previo de 0-1.',
          '<strong>Ventana extendida (de 6 a 24 horas):</strong> Pacientes seleccionados rigurosamente mediante neuroimagen avanzada (AngioTAC con TAC perfusión o RM con difusión/perfusion) según los criterios de los ensayos <strong>DAWN</strong> y <strong>DEFUSE-3</strong>. Se busca demostrar un <strong>mismatch clínico-radiológico o de perfusión</strong> significativo: un núcleo isquémico irreversible pequeño (&lt; 50-70 mL) contrastado con un gran volumen de tejido en penumbra recuperable.',
          '<em>Principio EUNACOM fundamental:</em> Si el paciente es candidato a trombolisis IV y además tiene oclusión de gran vaso, se debe administrar la trombolisis de inmediato y coordinar en paralelo el traslado a angiografía para trombectomía (<em>terapia puente</em>). Jamás debe demorarse el trombolítico esperando ver si se traslada a hemodinamia.'
        ]
      },
      {
        subhead: '5. Manejo Médico en UTAC, Hemodinamia Permisiva y Prevención Secundaria',
        paragraphs: [
          'El ingreso precoz a una <strong>Unidad de Tratamiento del Ataque Cerebral (UTAC)</strong> reduce la morbimortalidad y secuelas funcionales en más de un 25%. Sus pilares son:',
          '• <strong>Manejo de Presión Arterial en pacientes NO trombolizados:</strong> Se adopta una estrategia de <strong>hipertensión permisiva</strong>. NO se debe reducir la presión arterial a menos que supere <strong>PAS &gt; 220 mmHg o PAD &gt; 120 mmHg</strong> (o coexista falla cardíaca aguda, disección aórtica o infarto agudo al miocardio). Si se sobrepasan dichos límites, la reducción debe ser prudente (máximo 15% en las primeras 24 horas) para preservar la presión de perfusión en la penumbra isquémica.',
          '• <strong>Homeostasis metabólica:</strong> Mantener normoglicemia (evitar hipoglicemia &lt; 70 mg/dL e hiperglicemia &gt; 180 mg/dL, administrando insulina cristalina SC/EV según protocolo), normotermia (paracetamol EV/VO si T° &gt; 37.5 °C; la fiebre duplica el daño neuronal) y oxigenación adecuada (satO₂ &gt; 94%).',
          '• <strong>Antiagregación plaquetaria:</strong> <strong>Ácido Acetilsalicílico (AAS) 250 mg vía oral</strong> administrado precozmente (dentro de las primeras 24 a 48 horas). <em>Regla de Oro:</em> Si el paciente recibió trombolisis IV, el AAS se <strong>suspende estrictamente durante las primeras 24 horas post-trombolisis</strong> y solo se inicia tras constatar ausencia de hemorragia en el TAC de control.',
          '• <strong>Doble Antiagregación Plaquetaria (DAPT):</strong> En infartos isquémicos menores (NIHSS ≤ 3) no cardioembólicos o AIT de alto riesgo, los estudios CHANCE y POINT avalan el uso de <strong>AAS 100 mg + Clopidogrel 75 mg/día (carga 300 mg) durante los primeros 21 días</strong>, continuando luego con monoterapia para evitar exceso de sangrado.',
          '• <strong>Estatinas de alta potencia:</strong> Atorvastatina 80 mg/día iniciada precozmente, independiente del nivel basal de colesterol, por su efecto pleiotrópico estabilizador endotelial y antiinflamatorio.'
        ]
      }
    ],
    table: {
      title: 'Clasificación Etiológica TOAST y Territorios Vasculares en ACV Isquémico',
      headers: ['Subtipo / Territorio', 'Mecanismo Fisiopatológico', 'Presentación Clínica Cardinal', 'Hallazgos Clave de Examen'],
      rows: [
        ['Arteria Cerebral Media (ACM)', 'Embolia arteria-arteria o cardioembolia a tronco principal (M1) o ramas (M2)', 'Hemiparesia y hemihipoestesia faciobraquial contralateral predominante + Desviación oculocefálica ipsilateral', 'Afasia de Broca/Wernicke/Global (hemisferio dominante) · Negligencia hemiespacial / Asomatognosia (no dominante)'],
        ['Arteria Cerebral Anterior (ACA)', 'Oclusión embólica o trombótica de ramas prefrontales y parasagitales', 'Hemiparesia y hemihipoestesia crural contralateral (pierna > brazo) · Abulia, mutismo acinético, reflejos arcaicos', 'Incontinencia urinaria de origen frontal · Apraxia de la marcha · Pérdida de inhibición social'],
        ['Arteria Cerebral Posterior (ACP)', 'Oclusión de ramas occipitales y temporomediales (frecuentemente cardioembólica)', 'Hemianopsia homónima contralateral con preservación macular · Alexia sin agrafia (lesión esplenio del cuerpo calloso)', 'Agnosia visual · Desorientación topográfica · Amnesia anterógrada si compromiso hipocámpico'],
        ['Circulación Vertebrobasilar', 'Oclusión de arteria basilar, vertebrales o arterias cerebelosas (PICA, AICA, SUCA)', 'Síndrome cruzado (déficit de par craneal ipsilateral + hemiparesia/hemihipoestesia contralateral)', 'Vértigo central, ataxia severa, diplopía, disfagia, disartria, compromiso fluctuante de conciencia hasta coma'],
        ['Infarto Lacunar (Pequeño Vaso)', 'Lipohialinosis y microateromatosis hipertensiva en arterias perforantes lenticuloestriadas', 'Síndromes lacunares puros: Hemiparesia motora pura (brazo posterior cápsula interna) o Sensitivo puro (núcleo VPL tálamo)', 'Ataxia-hemiparesia · Disartria-mano torpe · Ausencia característica de afasia, hemianopsia o negligencia']
      ]
    },
    severityTable: {
      title: 'Estratificación de Gravedad, Escala NIHSS y Selección para Reperfusión Aguda',
      headers: ['Puntuación NIHSS', 'Nivel de Gravedad', 'Pronóstico Clínico Basal', 'Estrategia Terapéutica Inmediata'],
      rows: [
        ['0 – 4 puntos', 'ACV Isquémico Leve / Menor', 'Riesgo bajo de mortalidad; excelente recuperación funcional espontánea', 'Evaluar si déficit es incapacitante (afasia, hemianopsia); si no discapacita, DAPT (AAS + Clopidogrel) x 21 días'],
        ['5 – 15 puntos', 'ACV Moderado', 'Déficit significativo pero con amplia área de penumbra salvable', 'Candidato prioritario a Trombolisis IV (Alteplase / Tenecteplase) si ventana ≤ 4.5 h · Solicitar AngioTAC'],
        ['16 – 20 puntos', 'ACV Moderado a Severo', 'Alta sospecha de oclusión de gran vaso proximal (carótida terminal o ACM M1)', 'Trombolisis IV inmediata + Trombectomía Mecánica ("terapia puente") en centro terciario'],
        ['21 – 42 puntos', 'ACV Grave / Masivo', 'Mortalidad elevada (> 40%); alto riesgo de transformación hemorrágica y edema cerebral masivo', 'Trombectomía mecánica de rescate; vigilancia en UPC por riesgo de herniación transtentorial y craniectomía descompresiva']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Trombolisis Endovenosa, Trombectomía y Metas de Cuidado en UTAC',
      headers: ['Intervención', 'Fármaco / Procedimiento', 'Dosis / Ventana Terapéutica', 'Metas Clínicas y Advertencias Críticas'],
      rows: [
        ['Trombolisis IV (Alteplase)', 'Alteplase (rt-PA) recombinante', '0.9 mg/kg (máximo 90 mg): 10% bolo EV en 1 min + 90% infusión en 60 min · Ventana ≤ 4.5 h', 'PA DEBE ser < 185/110 mmHg previa a infusión · Suspender infusión si cefalea severa, náuseas o deterioro de Glasgow'],
        ['Trombolisis IV (Tenecteplase)', 'Tenecteplase (TNK)', '0.25 mg/kg bolo único EV en 5-10 s (máximo 25 mg) · Ventana ≤ 4.5 h', 'Mayor afinidad por fibrina; alternativa preferida para agilizar trombectomía mecánica puente'],
        ['Trombectomía Mecánica', 'Stent retriever / Tromboaspiración', '0 a 6 h (estándar) · 6 a 24 h (según criterios DAWN / DEFUSE-3 con mismatch)', 'Indicada en oclusión carotídea interna terminal o ACM segmento M1 con NIHSS ≥ 6 y ASPECTS ≥ 6'],
        ['Manejo de Presión Arterial Pre-Trombolisis', 'Labetalol EV o Nicardipino EV', 'Labetalol 10-20 mg bolo EV en 2 min; repetir c/10-20 min (máx 300 mg) o infusión continua 2-8 mg/min', 'Meta estricta: PAS < 185 mmHg y PAD < 110 mmHg pre-trombolisis; mantener < 180/105 mmHg las primeras 24 h'],
        ['Manejo de PA sin Trombolisis', 'Hipertensión permisiva', 'Solo tratar si PAS > 220 mmHg o PAD > 120 mmHg (salvo disección aórtica o IAM concomitante)', 'Reducción cautelosa (15% en 24 h); caídas bruscas causan infarto irreversible de la penumbra'],
        ['Antiagregación Plaquetaria', 'AAS oral (asociado a Clopidogrel en ACV menor)', 'AAS 250 mg/día iniciado en 24-48 h · Si recibió trombolisis: DIFERIR 24 h hasta TAC de control', 'Doble antiagregación (AAS + Clopidogrel 75 mg) por 21 días si NIHSS ≤ 3 o AIT de alto riesgo']
      ]
    },
    vignette: 'Hombre de 67 años, con antecedente de hipertensión arterial crónica en tratamiento con enalapril, es traído al servicio de urgencia por sus familiares debido a que hace 90 minutos presentó súbitamente dificultad para hablar y debilidad en el hemicuerpo derecho mientras almorzaba. Al examen físico: PA 175/98 mmHg, FC 84 lpm regular, Glasgow 14 (obedece órdenes parcialmente), presenta afasia motora mixta con disartria severa, asimetría facial derecha y hemiparesia braquiocrural derecha con fuerza M2 en brazo y M3 en pierna (NIHSS estimado: 13 puntos). La glicemia capilar es de 118 mg/dL. El TAC de encéfalo sin contraste efectuado a los 25 minutos del ingreso resulta rigurosamente normal, sin evidencias de colecciones hemáticas ni signos de edema expansivo.',
    explicacion: 'El paciente presenta un ataque cerebrovascular isquémico agudo de territorio carotídeo izquierdo (ACM izquierda) en período de ventana terapéutica precoz (< 4.5 horas). La normalidad tomográfica descarta hemorragia intracerebral (el TAC es habitualmente normal en las primeras horas de un infarto) y confirma que no existen contraindicaciones radiológicas. Las cifras tensionales se encuentran dentro del rango seguro pre-trombolisis (< 185/110 mmHg). La conducta obligatoria e inmediata es iniciar trombolisis intravenosa con Alteplase (0.9 mg/kg) o Tenecteplase (0.25 mg/kg en bolo), solicitar AngioTAC cerebral de urgencia para evaluar oclusión de gran vaso arterial susceptible a trombectomía mecánica coordinada e ingresar a la Unidad de Tratamiento del Ataque Cerebral (UTAC). Está formalmente contraindicado diferir la trombolisis esperando una resonancia magnética o administrar antiagregantes plaquetarios antes de cumplir 24 horas post-trombolítico.',
    keyPoints: [
      'Todo déficit neurológico focal agudo es una emergencia médica tiempo-dependiente: el TAC de encéfalo sin contraste debe realizarse e informarse en ≤ 30 minutos desde el ingreso.',
      'El rol principal del TAC sin contraste en las primeras 4.5 horas es descartar hemorragia intracerebral; un TAC normal confirma la sospecha de ACV isquémico y NO contraindica la trombolisis.',
      'La ventana para trombolisis endovenosa con Alteplase (0.9 mg/kg) o Tenecteplase (0.25 mg/kg) es de hasta 4.5 horas desde el inicio de los síntomas o la última vez visto asintomático.',
      'Criterio tensional pre-trombolisis estricto: la PA debe reducirse a < 185/110 mmHg antes de iniciar el trombolítico con Labetalol o Nicardipino EV.',
      'Si el paciente NO es candidato a reperfusión, se adopta hipertensión permisiva: NO reducir la PA a menos que supere 220/120 mmHg para no hipoperfundir la penumbra isquémica.',
      'La trombectomía mecánica endovascular está indicada en oclusión de gran vaso (carótida terminal, ACM M1) hasta las 6 horas de forma estándar, y hasta las 24 horas en centros especializados con mismatch por perfusión (ensayos DAWN y DEFUSE-3).',
      'El Ácido Acetilsalicílico (AAS 250 mg) se administra precozmente en pacientes no trombolizados, pero DEBE postergarse estrictamente 24 horas si el paciente recibió trombolisis IV.',
      'En ACV isquémico menor (NIHSS ≤ 3) no cardioembólico o AIT de alto riesgo, la doble antiagregación con AAS + Clopidogrel se mantiene por 21 días para prevenir recurrencias precoces.'
    ],
    questions: [
      {
        stem: 'Un paciente de 67 años presenta hemiparesia derecha y afasia motora de 2 horas de evolución, que inició de manera súbita mientras descansaba en su domicilio. Al examen físico destaca PA 165/95 mmHg, FC 78 lpm, hemiparesia faciobraquial derecha armónica y afasia de predominio expresivo. Su TAC de encéfalo sin contraste efectuado a los 25 minutos del ingreso resulta informado como normal. ¿Cuál es la conducta terapéutica más adecuada en este momento?',
        options: [
          { id: 'A', text: 'Administrar 250 mg de Ácido Acetilsalicílico oral y solicitar resonancia magnética de cerebro' },
          { id: 'B', text: 'Iniciar trombolisis endovenosa inmediata con Alteplase (rt-PA) o Tenecteplase' },
          { id: 'C', text: 'Iniciar infusión de nitroprusiato de sodio para normalizar la presión arterial antes de cualquier terapia' },
          { id: 'D', text: 'Indicar anticoagulación plena con Heparina de Bajo Peso Molecular en dosis terapéuticas' },
          { id: 'E', text: 'Mantener en observación clínica por 24 horas para evaluar si los síntomas revierten espontáneamente' }
        ],
        correcta: 'B',
        explicacion: 'El paciente se encuentra dentro de la ventana terapéutica estándar de trombolisis intravenosa (< 4.5 horas de evolución). El TAC de encéfalo sin contraste normal en esta etapa es el hallazgo clásico que descarta hemorragia intracerebral y autoriza el inicio inmediato del trombolítico (Alteplase 0.9 mg/kg o Tenecteplase 0.25 mg/kg). La presión arterial (165/95 mmHg) es compatible con la infusión (< 185/110 mmHg). El AAS (A) está contraindicado durante las primeras 24 horas posteriores a la trombolisis. La heparina plena (D) no está indicada en el período hiperagudo por riesgo elevado de hemorragia.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.001'
      },
      {
        stem: 'Mujer de 71 años consulta en el servicio de urgencia por debilidad súbita de extremidades izquierdas iniciada hace 90 minutos. Al ingreso su examen neurológico revela hemiparesia faciobraquiocrural izquierda severa (NIHSS 15). El TAC de encéfalo sin contraste descarta hemorragia. La presión arterial registrada en dos tomas separadas es de 195/115 mmHg. ¿Cuál es la conducta farmacológica que debe realizarse de inmediato para permitir la reperfusión?',
        options: [
          { id: 'A', text: 'Suspender la trombolisis por contraindicación definitiva debida a emergencia hipertensiva' },
          { id: 'B', text: 'Administrar Labetalol 10 a 20 mg endovenoso en bolo para lograr cifras de PA < 185/110 mmHg' },
          { id: 'C', text: 'Indicar Nifedipino sublingual 10 mg en cápsula blanda para un descenso rápido' },
          { id: 'D', text: 'Iniciar infusión de trombolítico y administrar antihipertensivos únicamente si la PAS supera 220 mmHg' },
          { id: 'E', text: 'Diferir el tratamiento hasta que la paciente cumpla 6 horas de evolución y reevaluar' }
        ],
        correcta: 'B',
        explicacion: 'Una presión arterial superior a 185/110 mmHg es una contraindicación temporal pero reversible para la trombolisis endovenosa por el riesgo de hemorragia intracerebral masiva. La conducta normada por guías GES y AHA/ASA es iniciar antihipertensivos endovenosos titulables como Labetalol EV (bolos de 10-20 mg) o Nicardipino en infusión continua para llevar la presión bajo 185/110 mmHg. Si se alcanza dicha meta de forma controlada, se inicia de inmediato la trombolisis. El nifedipino sublingual (C) está estrictamente proscrito en neurología y cardiología por generar caídas precipitadas e impredecibles de la PA, lo que produciría el infarto fulminante de la penumbra isquémica.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.001'
      },
      {
        stem: 'Un hombre de 69 años es llevado a urgencias por afasia global y hemiplejia derecha de 5 horas de evolución desde el inicio de los síntomas. El TAC de cerebro sin contraste no muestra sangrado, pero evidencia borramiento insular leve con score ASPECTS de 8. La AngioTAC de urgencia demuestra una oclusión completa de la arteria cerebral media izquierda en su segmento M1. ¿Cuál es la conducta terapéutica de elección en este paciente?',
        options: [
          { id: 'A', text: 'Trombolisis intravenosa con Alteplase en dosis plenas de rescate' },
          { id: 'B', text: 'Trombectomía mecánica endovascular urgente' },
          { id: 'C', text: 'Anticoagulación con Heparina no fraccionada en bolo endovenoso' },
          { id: 'D', text: 'Antiagregación plaquetaria exclusiva con Clopidogrel 75 mg al día' },
          { id: 'E', text: 'Manejo expectante por haber sobrepasado toda ventana de revascularización' }
        ],
        correcta: 'B',
        explicacion: 'A las 5 horas de evolución, el paciente se encuentra fuera de la ventana para trombolisis endovenosa estándar (límite 4.5 horas). Sin embargo, al presentar una oclusión de gran vaso en la circulación anterior (segmento M1 de la ACM), un NIHSS alto y un score ASPECTS favorable (ASPECTS 8 ≥ 6), cumple con los criterios de indicación de Trombectomía Mecánica Endovascular (TME), cuya ventana se extiende hasta las 6 horas de forma directa e incluso hasta 24 horas mediante neuroimagen con mismatch de perfusión (ensayos DAWN y DEFUSE-3).',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.001'
      },
      {
        stem: 'Hombre de 74 años con antecedente de hipertensión arterial ingresa por cuadro de hemiparesia izquierda de 10 horas de evolución. No es candidato a trombolisis intravenosa ni a trombectomía mecánica. Su presión arterial de ingreso es 190/105 mmHg, FC 82 lpm, afebril y glicemia de 135 mg/dL. ¿Cuál es la conducta terapéutica correcta respecto a su hemodinamia y prevención secundaria inicial?',
        options: [
          { id: 'A', text: 'Iniciar infusión agresiva de Labetalol para normalizar la PA a < 130/80 mmHg e indicar Enoxaparina' },
          { id: 'B', text: 'Permitir cifras de PA elevadas (no tratar a menos que supere 220/120 mmHg) e iniciar AAS 250 mg vía oral' },
          { id: 'C', text: 'Administrar Nimodipino 60 mg cada 4 horas oral para neuroprotección vascular' },
          { id: 'D', text: 'Indicar reposo en cama con cabecera a 90° y restricción hídrica severa' },
          { id: 'E', text: 'Administrar Manitol al 15% profiláctico para prevenir el edema cerebral citotóxico' }
        ],
        correcta: 'B',
        explicacion: 'En pacientes con ACV isquémico que no reciben terapias de reperfusión (trombolisis o trombectomía), la autorregulación vascular cerebral está abolida y la perfusión del tejido en penumbra depende directamente de la presión arterial sistémica. Por ello se aplica el principio de hipertensión permisiva: NO se debe descender la presión arterial salvo que exceda 220 mmHg de sistólica o 120 mmHg de diastólica, o existan complicaciones sistémicas agudas (disección aórtica, edema pulmonar cardiogénico). Paralelamente, se debe iniciar de forma precoz Ácido Acetilsalicílico (AAS 250 mg VO) para reducir recurrencias tempranas. El Nimodipino (C) tiene indicación en hemorragia subaracnoidea pero no en infarto isquémico.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.001'
      }
    ]
  },

  // ==========================================================================
  // TEMA 10.2: ATAQUE ISQUÉMICO TRANSITORIO (AIT) (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'neuro-02',
    classId: 'neuro-02',
    tier: 2,
    blockNum: 1,
    blockName: 'Enfermedad Cerebrovascular y Urgencias Neurovasculares',
    topicLabel: '10.2',
    title: 'Ataque Isquémico Transitorio (AIT): Score ABCD2, Estratificación de Riesgo Precoz y Prevención Secundaria',
    perfilCode: '1.10.2.002',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 37): Accidente Isquémico Transitorio · Hospitalización inmediata de pacientes con riesgo moderado a alto (ABCD² ≥ 4) para neuroimagen urgente, ecocardiograma, dúplex carotídeo y prevención secundaria precoz.',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Alta · Diagnóstico diferencial crítico de déficit neurológico transitorio y prevención de ACV mayor',
    svg: null,
    algoTitle: 'Algoritmo de Estratificación de Riesgo ABCD2 y Manejo Urgente del AIT',
    diagram: flow('Estratificación y Manejo Precoz del AIT', [
      { t: 'Sospecha de Ataque Isquémico Transitorio (Déficit Focal Revertido)', s: 'Síntomas motores, del habla o amaurosis fugaz autolimitados · TAC de encéfalo sin infarto agudo', type: 'acc' },
      { t: 'Cálculo Obligatorio del Score ABCD² (0 a 7 puntos)', s: 'Edad ≥ 60 · PA ≥ 140/90 · Paresia unilateral / Habla · Duración (< 10 / 10-59 / ≥ 60 min) · Diabetes', type: 'warn' },
      { k: 'split', q: '¿Puntaje Score ABCD² y Criterios de Riesgo Precoz?', s: 'Estratificación del riesgo de desarrollar un ACV isquémico discapacitante en las siguientes 48 horas',
        ll: 'ABCD² ≥ 4 puntos o AIT en crescendo',
        left: { t: 'Hospitalización Inmediata de Urgencia', s: 'Doble antiagregación (AAS + Clopidogrel x 21 días) · Dúplex carotídeo + ECG/Holter + RM cerebral', type: 'crit' },
        rl: 'ABCD² 0 a 3 puntos (Bajo Riesgo)',
        right: { t: 'Estudio Ambulatorio Acelerado (< 48 h)', s: 'Monoterapia antiagregante (AAS 100 mg) · Atorvastatina 80 mg · Control estricto de factores de riesgo', type: 'dec' }
      },
      { t: 'Detección de Fuente Embolígena o Estenosis Carotídea', s: 'Si Estenosis carotídea 70-99%: Endarterectomía precoz (< 14 días) · Si Fibrilación Auricular: Anticoagulación oral DOAC', type: 'acc' }
    ]),
    contexto: 'El ataque isquémico transitorio (AIT) no es un episodio benigno: es la mayor señal de alarma biológica en neurovasculares. Hasta el 10-15% de los pacientes que sufren un AIT desarrollarán un ACV isquémico mayor dentro de los siguientes 90 días, concentrándose la mitad de ese riesgo en las primeras 48 horas. El uso estricto del Score ABCD² identifica a los pacientes que requieren hospitalización inmediata para doble antiagregación y revascularización carotídea precoz.',
    contentSections: [
      {
        subhead: '1. Definición Tisular Moderna de AIT y Diagnóstico Diferencial',
        paragraphs: [
          'La definición clásica basada en el tiempo (déficit neurológico focal que resuelve espontáneamente en menos de 24 horas) ha sido reemplazada por la <strong>definición basada en el tejido (AHA/ASA)</strong>: un AIT es un <em>episodio transitorio de disfunción neurológica causado por isquemia focal encefálica, medular o retiniana, SIN evidencia de infarto agudo en las técnicas de neuroimagen (RM-DWI o TAC)</em>.',
          'La gran mayoría de los verdaderos AIT duran menos de 60 minutos (típicamente entre 5 y 20 minutos). Si un paciente con resolución clínica completa de los síntomas presenta una restricción en la secuencia de difusión (DWI) de la resonancia magnética, el cuadro se reclasifica formalmente como <strong>infarto cerebral agudo con resolución clínica transitoria</strong>, asociándose a un riesgo sustancialmente mayor de recurrencia.',
          'La <strong>amaurosis fugaz (ceguera monocular transitoria)</strong> es un equivalente de AIT retiniano de alto valor localizador, caracterizado por una pérdida visual unilateral indolora descrita típicamente como un "telón o cortina negra que desciende y asciende", debida a microembolias hacia la arteria oftálmica o arteria central de la retina provenientes de una placa carotídea ipsilateral.',
          '<em>Diagnóstico diferencial (AIT mimics):</em> Migraña con aura típica (progresión lenta de síntomas visuales positivos en minutos, cefalea pulsátil posterior), crisis epilépticas focales con parálisis de Todd poscrítica, síncope o lipotimia, hipoglicemia aguda, vértigo periférico posicional y episodios de amnesia global transitoria.'
        ]
      },
      {
        subhead: '2. Score ABCD²: Estratificación del Riesgo de ACV a Corto Plazo',
        paragraphs: [
          'El <strong>Score ABCD²</strong> es la herramienta pronóstica estándar de validación internacional para predecir la probabilidad de que un paciente sufra un ACV isquémico completo en las 48 horas y 7 días posteriores al AIT:',
          '• <strong>A (Age / Edad):</strong> ≥ 60 años = <strong>1 punto</strong>.',
          '• <strong>B (Blood Pressure / Presión arterial):</strong> PAS ≥ 140 mmHg o PAD ≥ 90 mmHg en la primera evaluación = <strong>1 punto</strong>.',
          '• <strong>C (Clinical features / Clínica):</strong> Hemiparesia o debilidad unilateral = <strong>2 puntos</strong>; Alteración del habla aislada sin paresia motora = <strong>1 punto</strong>; Otros síntomas = 0 puntos.',
          '• <strong>D (Duration / Duración de los síntomas):</strong> ≥ 60 minutos = <strong>2 puntos</strong>; 10 a 59 minutos = <strong>1 punto</strong>; &lt; 10 minutos = 0 puntos.',
          '• <strong>D (Diabetes):</strong> Antecedente de diabetes mellitus = <strong>1 punto</strong>.',
          '<strong>Categorías de Riesgo y Conducta:</strong>',
          '• <strong>Riesgo Alto (6 – 7 puntos):</strong> Riesgo de ACV a las 48 horas de 8.1% y a los 7 días de 11.7%. Requiere <strong>hospitalización inmediata obligatoria</strong>.',
          '• <strong>Riesgo Moderado (4 – 5 puntos):</strong> Riesgo de ACV a las 48 horas de 4.1% y a los 7 días de 5.9%. Requiere <strong>hospitalización en observación o unidad de ACV</strong>.',
          '• <strong>Riesgo Bajo (0 – 3 puntos):</strong> Riesgo a 48 horas de 1.0%. Puede estudiarse de forma ambulatoria expedita (&lt; 48 h) si no presenta criterios de alto riesgo asociados.',
          '<em>Criterios de hospitalización directa independiente del puntaje:</em> AIT en crescendo (≥ 2 episodios en 7 días), sospecha de etiología cardioembólica (FA conocida), estenosis carotídea sintomática significativa (&gt; 50%) o presencia de lesión aguda en la neuroimagen.'
        ]
      },
      {
        subhead: '3. Estudio Etiológico Rápido y Prevención Secundaria Precoz',
        paragraphs: [
          'Todo paciente con AIT debe completar un estudio diagnóstico urgente dentro de las primeras 24 a 48 horas: 1) <strong>Neuroimagen</strong> (preferentemente Resonancia Magnética con DWI para descartar infarto tisular silente; si no está disponible, TAC de encéfalo sin contraste); 2) <strong>Evaluación vascular carotídea y vertebral</strong> mediante Eco-Doppler carotídeo/vertebral o AngioTAC; 3) <strong>Evaluación cardiológica</strong> con ECG de 12 derivaciones y monitorización continua (telemetría/Holter) para pesquisar fibrilación auricular paroxística, sumado a Ecocardiograma transtorácico/transesofágico.',
          '<strong>Prevención Secundaria Antiplaquetaria Inmediata:</strong>',
          '• En AIT no cardioembólico de alto riesgo (ABCD² ≥ 4 puntos), los ensayos clínicos <strong>CHANCE</strong> y <strong>POINT</strong> demostraron que la <strong>doble antiagregación plaquetaria (DAPT)</strong> iniciada precozmente (&lt; 24 horas) con <strong>Ácido Acetilsalicílico (AAS 100 mg/día) más Clopidogrel (dosis de carga 300 mg, luego 75 mg/día)</strong> reduce significativamente el riesgo de infarto recurrente frente a la monoterapia.',
          '• <em>Duración estricta de la DAPT:</em> <strong>Exactamente 21 días</strong>. Prolongar la terapia combinada más allá de 3 semanas no confiere beneficio adicional y duplica el riesgo de hemorragia digestiva e intracraneal mayor. Al día 22 se prosigue con monoterapia indefinida (AAS o clopidogrel).',
          '• <strong>Etiología Cardioembólica (Fibrilación Auricular):</strong> En AIT confirmado de origen cardioembólico, se inicia <strong>anticoagulación oral con DOACs (Apixabán, Rivaroxabán, Dabigatrán, Edoxabán)</strong> de manera precoz (al día 1 post-evento, al no haber masa necrótica cerebral susceptible de transformación hemorrágica).',
          '• <strong>Estenosis Carotídea Significativa:</strong> Si el dúplex o angioTAC confirma estenosis carotídea ipsilateral severa (70-99%) o moderada (50-69% en hombres), está indicada la <strong>Endarterectomía Carotídea</strong> dentro de las primeras <strong>2 semanas (idealmente en los primeros 7 días)</strong> tras el AIT.'
        ]
      }
    ],
    table: {
      title: 'Score ABCD²: Puntuación, Estimación de Riesgo de ACV a 48 h y Conducta Clínica',
      headers: ['Factor de Riesgo', 'Criterio Clínico Evaluado', 'Puntaje Asignado', 'Riesgo ACV a 48 h', 'Conducta Asistencial Obligatoria'],
      rows: [
        ['Age (Edad)', 'Edad ≥ 60 años', '1 punto', 'Bajo (0 – 3 pts): 1.0%', 'Estudio ambulatorio monitorizado en < 48 h (si no hay AIT en crescendo)'],
        ['Blood Pressure', 'Presión arterial ≥ 140/90 mmHg', '1 punto', 'Moderado (4 – 5 pts): 4.1%', 'Hospitalización inmediata en UTAC / camas de observación médica'],
        ['Clinical Features', 'Hemiparesia o debilidad unilateral', '2 puntos', 'Alto (6 – 7 pts): 8.1%', 'Hospitalización en UTAC + DAPT inmediata (AAS + Clopidogrel x 21 días)'],
        ['Clinical Features', 'Alteración del habla sin debilidad motora', '1 punto', 'Alto (con estenosis carotídea): > 15%', 'Hospitalización prioritaria + AngioTAC / Dúplex carotídeo de urgencia'],
        ['Duration', 'Duración del déficit ≥ 60 minutos', '2 puntos', 'Alto (con FA asociada): > 10%', 'Hospitalización inmediata + ECG continuo / Telemetría por 24-48 horas'],
        ['Duration', 'Duración del déficit entre 10 y 59 minutos', '1 punto', '—', '—'],
        ['Diabetes', 'Diagnóstico previo de Diabetes Mellitus', '1 punto', '—', 'Iniciar Atorvastatina 80 mg/día de alta intensidad a permanencia']
      ]
    },
    vignette: 'Hombre de 64 años, fumador activo e hipertenso tratado irregularmente con amlodipino, consulta en urgencias 2 horas después de haber presentado debilidad marcada en la mano y pierna derechas asociada a dificultad para articular palabras mientras trabajaba en el jardín. Los síntomas comenzaron súbitamente y desaparecieron por completo en aproximadamente 45 minutos. Al examen físico actual: PA 155/95 mmHg, FC 80 lpm regular, examen neurológico rigurosamente normal sin déficit focal motor ni sensitivo, lenguaje fluido y comprensión conservada. El TAC de encéfalo sin contraste descarta sangrado y no evidencia lesiones isquémicas recientes.',
    explicacion: 'El paciente presentó un Ataque Isquémico Transitorio (AIT) de territorio carotídeo izquierdo. El cálculo del Score ABCD² arroja 5 puntos: Edad ≥ 60 años (1 pt), PA ≥ 140/90 mmHg (1 pt), hemiparesia unilateral (2 pts) y duración entre 10 y 59 minutos (1 pt), lo que lo clasifica como riesgo moderado-alto de desarrollar un ACV isquémico completo en las siguientes 48 horas (riesgo > 4-5%). La conducta obligatoria es la hospitalización inmediata de urgencia para completar el estudio etiológico (dúplex carotídeo, ECG/monitorización cardíaca para descartar fibrilación auricular y RM cerebral), iniciar doble antiagregación plaquetaria precoz con Ácido Acetilsalicílico más Clopidogrel durante exactamente 21 días y prescribir Atorvastatina 80 mg/día.',
    keyPoints: [
      'Un AIT se define actualmente por la ausencia de infarto en la neuroimagen (definición tisular); la persistencia de lesión en la RM reclasifica el caso como infarto cerebral.',
      'La mitad de los infartos que siguen a un AIT ocurren dentro de las primeras 48 horas: el AIT es una urgencia médica absoluta.',
      'El Score ABCD² estratifica el riesgo a corto plazo: A (edad ≥ 60: 1), B (PA ≥ 140/90: 1), C (paresia unilateral: 2; habla sola: 1), D (duración ≥ 60 min: 2; 10-59 min: 1), D (diabetes: 1).',
      'Puntaje ABCD² ≥ 4 puntos indica hospitalización inmediata obligatoria en una unidad de observación o UTAC.',
      'En AIT de alto riesgo no cardioembólico, la indicación de elección es doble antiagregación con AAS + Clopidogrel iniciada precozmente y mantenida por exactamente 21 días.',
      'La amaurosis fugaz representa una isquemia retiniana transitoria monocular secundaria a microembolias procedentes de la carótida ipsilateral.',
      'Si se identifica una estenosis carotídea sintomática ≥ 70%, la endarterectomía carotídea debe realizarse dentro de los primeros 14 días para prevenir un ACV mayor.',
      'En caso de confirmarse fibrilación auricular, la anticoagulación oral con DOACs debe iniciarse precozmente tras el AIT sin requerir semanas de espera.'
    ],
    questions: [
      {
        stem: 'Hombre de 66 años, hipertenso, acude a urgencias por haber presentado un episodio de pérdida de fuerza en el brazo derecho y dificultad para emitir palabras de 40 minutos de duración, el cual remitió por completo antes de llegar al hospital. Al ingreso su examen neurológico es rigurosamente normal, su PA es de 160/95 mmHg y no tiene antecedentes de diabetes. El TAC de encéfalo sin contraste es normal. ¿Cuál es su puntuación en la escala ABCD² y la conducta médica indicada?',
        options: [
          { id: 'A', text: 'Score ABCD²: 3 puntos · Indicar reposo en domicilio y control ambulatorio en policlínico en 15 días' },
          { id: 'B', text: 'Score ABCD²: 5 puntos · Hospitalización inmediata de urgencia para estudio etiológico y prevención secundaria' },
          { id: 'C', text: 'Score ABCD²: 2 puntos · Indicar anticoagulación con Warfarina y alta a domicilio' },
          { id: 'D', text: 'Score ABCD²: 6 puntos · Solicitar trombolisis endovenosa preventiva de rescate' },
          { id: 'E', text: 'Score ABCD²: 4 puntos · Prescribir un AINE oral y derivar a kinesiología preventiva' }
        ],
        correcta: 'B',
        explicacion: 'El cálculo del Score ABCD² es: Edad ≥ 60 años (1 pt) + Presión arterial sistólica ≥ 140 mmHg o diastólica ≥ 90 mmHg (1 pt) + Debilidad unilateral (2 pts) + Duración entre 10 y 59 minutos (1 pt) + Sin diabetes (0 pts) = Total 5 puntos. Este puntaje clasifica al paciente en categoría de riesgo moderado-alto de desarrollar un ACV isquémico en las siguientes 48 horas (riesgo superior al 4%). La conducta mandatoria según las guías internacionales y GES es la hospitalización inmediata de urgencia para realizar dúplex carotídeo, neuroimagen (RM-DWI), ECG continuo y comenzar terapia antiagregante dual.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.002'
      },
      {
        stem: 'Una mujer de 62 años consulta por un AIT motor de 25 minutos de duración con resolución completa. El Score ABCD² es de 5 puntos. El dúplex carotídeo descarta estenosis y el electrocardiograma no muestra arritmias. No tiene antecedentes de cardiopatía. De acuerdo a la evidencia contemporánea (ensayos CHANCE y POINT), ¿cuál es la mejor estrategia antiplaquetaria para iniciar en urgencias?',
        options: [
          { id: 'A', text: 'Monoterapia con Ácido Acetilsalicílico 100 mg al día por tiempo indefinido' },
          { id: 'B', text: 'Doble antiagregación con Ácido Acetilsalicílico más Clopidogrel durante exactamente 21 días' },
          { id: 'C', text: 'Doble antiagregación con Ácido Acetilsalicílico más Clopidogrel de forma ininterrumpida por 1 año' },
          { id: 'D', text: 'Anticoagulación oral con Rivaroxabán 20 mg al día en monoterapia' },
          { id: 'E', text: 'Dipiridamol más anticoagulación parenteral con Enoxaparina durante 7 días' }
        ],
        correcta: 'B',
        explicacion: 'En pacientes que presentan un AIT no cardioembólico de alto riesgo (Score ABCD² ≥ 4) o un ACV isquémico menor (NIHSS ≤ 3), los ensayos clínicos CHANCE y POINT demostraron que la doble antiagregación plaquetaria (DAPT) con Ácido Acetilsalicílico más Clopidogrel iniciada precozmente reduce significativamente el riesgo de un nuevo evento isquémico en comparación con la monoterapia. Sin embargo, la duración de la DAPT debe limitarse estrictamente a 21 días (3 semanas), ya que prolongarla más allá de este período no aporta beneficio preventivo adicional y duplica el riesgo de complicaciones hemorrágicas mayores.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.002'
      }
    ]
  },

  // ==========================================================================
  // TEMA 10.3: HEMORRAGIA INTRACEREBRAL ESPONTÁNEA (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'neuro-03',
    classId: 'neuro-03',
    tier: 3,
    blockNum: 1,
    blockName: 'Enfermedad Cerebrovascular y Urgencias Neurovasculares',
    topicLabel: '10.3',
    title: 'Hemorragia Intracerebral Espontánea: Manejo de Presión Arterial, Reversión de Anticoagulantes y Criterios Quirúrgicos',
    perfilCode: '1.10.2.003',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Manejo de Emergencias Neuroquirúrgicas y Cuidados Intensivos en Accidente Cerebrovascular Hemorrágico · Derivación inmediata a UCI/Neurocirugía.',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Muy Alta · Emergencia neurovascular crítica con toma de decisiones terapéuticas de minutos',
    svg: null,
    algoTitle: 'Algoritmo de Manejo Integral en Hemorragia Intracerebral Aguda',
    diagram: flow('Manejo Inicial de la Hemorragia Intracerebral Aguda', [
      { t: 'Sospecha de ACV Hemorrágico (Cefalea + Vómitos + HTA severa + Focalidad)', s: 'Deterioro rápido del estado de conciencia · TAC de Encéfalo sin Contraste inmediato', type: 'acc' },
      { t: 'Confirmación Tomográfica: Hiperdensidad Parenquimatosa Aguda (HIE)', s: 'Calcular volumen del hematoma (fórmula ABC/2) · Evaluar invasión ventricular e ICH Score', type: 'warn' },
      { k: 'split', q: 'Pilares Simultáneos de Emergencia en las Primeras Horas', s: 'Detener la expansión precoz del hematoma (ocurre en el 35% de los casos en < 6 h)',
        ll: 'Manejo Tensional Activo (PAS 150 - 220 mmHg)',
        left: { t: 'Descenso Rápido de PAS (Meta: 130 - 140 mmHg)', s: 'Labetalol o Nicardipino EV en infusión continua · Evitar PAS < 130 mmHg', type: 'crit' },
        rl: 'Uso Previo de Anticoagulantes Orales',
        right: { t: 'Reversión Inmediata de Coagulación', s: 'AVK: Complejo Protrombínico (CCP) + Vit K · DOAC: Idarucizumab / Andexanet / CCP', type: 'dec' }
      },
      { t: 'Evaluación Quirúrgica por Neurocirugía de Urgencia', s: 'Hemorragia cerebelosa ≥ 3 cm o compresión tronco: CIRUGÍA INMEDIATA · Drenaje ventricular si hidrocefalia', type: 'acc' }
    ]),
    contexto: 'La hemorragia intracerebral espontánea (HIE) representa el 15-20% de todos los ictus, pero concentra más del 50% de la mortalidad neurovascular. A diferencia del infarto isquémico, en la hemorragia el hematoma tiende a expandirse activamente en las primeras 3 a 6 horas. El éxito terapéutico descansa en dos medidas médicas impostergables de minutos: el control intensivo y seguro de la presión arterial (meta PAS 130-140 mmHg) y la reversión ultraprecoz de la anticoagulación previa, sumado a la identificación de hematomas cerebelosos tributarios de evacuación quirúrgica urgente.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Etiologías Cardinales y Fenómeno de Expansión',
        paragraphs: [
          'La hemorragia intracerebral no traumática consiste en la extravasación hemática hacia el parénquima encefálico debida a la rotura transmural de arteriolas o vasos de pequeño calibre previamente debilitados por patología vascular subyacente.',
          '<strong>Dos etiologías principales:</strong>',
          '1. <strong>Arteriolopatía Hipertensiva (80%):</strong> Se asocia a hipertensión arterial crónica no controlada, que provoca lipohialinosis, degeneración fibrinoide y formación de microaneurismas de Charcot-Bouchard en arterias perforantes profundas. Afecta típicamente a núcleos profundos: <strong>ganglios basales (putamen 50%)</strong>, <strong>tálamo (15-20%)</strong>, <strong>puente / protuberancia (10-15%)</strong> y <strong>hemisferios cerebelosos (10%)</strong>.',
          '2. <strong>Angiopatía Amiloide Cerebral (AAC) (15-20%):</strong> Predomina en adultos mayores de 65-70 años no necesariamente hipertensos. Se debe al depósito de péptido beta-amiloide en la túnica media y adventicia de arterias de pequeño/mediano calibre corticales y leptomeníngeas. Origina de forma característica <strong>hemorragias lobares (subcorticales/corticales)</strong>, frecuentemente recurrentes y asociadas a microsangrados corticales asintomáticos visibles en secuencias de gradiente de eco o SWI de la resonancia magnética.',
          '<em>Otras causas:</em> Malformaciones arteriovenosas (MAV), aneurismas micóticos, cavernomas, trombosis venosa cerebral con infarto hemorrágico, coagulopatías, consumo de drogas simpaticomiméticas (cocaína, anfetaminas en pacientes jóvenes) y tumores cerebrales hipervascularizados con sangrado intratumoral (metástasis de coriocarcinoma, melanoma, cáncer de tiroides o renal).'
        ]
      },
      {
        subhead: '2. Síndromes Clínicos Topográficos y Neuroimagen de Urgencia',
        paragraphs: [
          'La presentación clínica típica consiste en la instauración aguda o hiperaguda (minutos a pocas horas) de cefalea intensa, náuseas, vómitos explosivos, cifras tensionales marcadamente elevadas (frecuentemente PAS &gt; 180-220 mmHg), déficit motor/sensitivo focal progresivo y compromiso de conciencia que puede fluctuar desde el letargo hasta el coma profundo.',
          '<strong>Correlación anatomo-clínica según topografía:</strong>',
          '• <strong>Hemorragia Putaminal:</strong> Hemiplejia faciobraquiocrural contralateral densa y armónica, hemihipoestesia contralateral, afasia (si lesiona hemisferio dominante) y desviación oculocefálica conjugada hacia el lado de la lesión (el paciente "mira su lesión").',
          '• <strong>Hemorragia Talámica:</strong> Hemihipoestesia contralateral severa (a menudo mayor que el déficit motor), parálisis de la mirada vertical superior (<em>síndrome de Parinaud</em>), desviación ocular hacia abajo y adentro ("ojos que miran la nariz"), pupilas mióticas arreactivas y somnolencia precoz.',
          '• <strong>Hemorragia Protuberancial (Pontina):</strong> Coma fulminante, <strong>pupilas puntiformes (miosis extrema pero reactiva a la luz con lupa)</strong>, tetraparesia flácida o postura de descerebración temprana, ausencia de reflejos oculocefálicos, hipertermia maligna y paro respiratorio central por destrucción de los centros respiratorios del tronco.',
          '• <strong>Hemorragia Cerebelosa:</strong> Cefalea occipital súbita, vértigo intenso, vómitos incoercibles, ataxia de la marcha con incapacidad total para la bipedestación y dismetría ipsilateral, <em>inicialmente SIN debilidad en las extremidades</em>. ¡Urgencia quirúrgica máxima por riesgo inminente de compresión de troncoencefálico, hidrocefalia obstructiva y herniación amigdalina!',
          'El <strong>TAC de encéfalo sin contraste</strong> es el examen diagnóstico de elección (gold standard en agudo): muestra una colección hiperdensa homogénea (40-80 Unidades Hounsfield) intraparenquimatosa. El volumen se estima mediante la fórmula ABC/2. La AngioTAC con fase de contraste detecta el <strong>signo del spot (spot sign)</strong>, fuga activa de contraste intralesional que predice expansión inminente del hematoma.'
        ]
      },
      {
        subhead: '3. Manejo Hemodinámico Inmediato: Control Estricto de la Presión Arterial',
        paragraphs: [
          'La elevación extrema de la presión arterial en la HIE se asocia directamente a la <strong>expansión precoz del hematoma</strong>, aumento del edema perihematomal y mayor mortalidad.',
          '<strong>Protocolo tensional actual (Guías AHA/ASA y ESO 2022-2024):</strong>',
          '• En pacientes que ingresan con PAS entre 150 y 220 mmHg, la recomendación formal es lograr una <strong>reducción rápida, suave y sostenida de la PAS con meta objetivo de 130 a 140 mmHg</strong>, idealmente dentro de las primeras 1 a 2 horas desde el diagnóstico.',
          '• <em>Límite de seguridad:</em> Debe evitarse categóricamente que la PAS caiga por debajo de 130 mmHg o sufra descensos abruptos (&gt; 60 mmHg en pocos minutos), ya que ello compromete la perfusión cerebral global e induce daño renal agudo.',
          '• <strong>Fármacos de elección:</strong> Deben usarse vasodilatadores arteriales de vida media corta y administración endovenosa en infusión continua: <strong>Labetalol EV</strong> (bolos de 10-20 mg cada 10-15 min o infusión a 2-8 mg/min) o <strong>Nicardipino EV</strong> (infusión continua de 5-15 mg/h). Están contraindicados fármacos como nitroprusiato de sodio o hidralazina por producir vasodilatación venosa cerebral con elevación de la presión intracraneana.'
        ]
      },
      {
        subhead: '4. Reversión Rápida de la Coagulopatía y Anticoagulación Previa',
        paragraphs: [
          'La hemorragia intracerebral asociada a fármacos anticoagulantes presenta tasas de expansión del 50% y una mortalidad que supera el 60%. La reversión de la hemostasia debe iniciarse de forma inmediata, en cuestión de minutos:',
          '• <strong>Antagonistas de la Vitamina K (Acenocumarol / Warfarina con INR &gt; 1.4):</strong>',
          '  1. <strong>Complejo Protrombínico Concentrado no activado de 4 factores (CCP 4F):</strong> Es la <strong>terapia de primera línea indiscutida</strong> (dosis de 25 a 50 UI/kg EV según INR basal). Normaliza el INR en menos de 15 a 30 minutos sin sobrecarga de volumen.',
          '  2. <strong>Vitamina K1 (Fitomenadiona) 10 mg EV lenta:</strong> Debe administrarse <em>siempre en conjunto con el CCP</em> para mantener la síntesis hepática de nuevos factores a partir de las 4-6 horas, impidiendo el rebote del INR al agotarse la vida media del concentrado.',
          '  3. <em>Plasma Fresco Congelado (PFC 15-20 mL/kg):</em> Solo debe utilizarse si el CCP no está disponible; es netamente inferior por demoras de varias horas en descongelar, infusión de grandes volúmenes y riesgo de edema pulmonar.',
          '• <strong>Inhibidores Directos de la Trombina (Dabigatrán):</strong> Antídoto específico de elección: <strong>Idarucizumab 5 g EV</strong> (administrado en dos dosis de 2.5 g en bolo rápido). Revierte el efecto anticoagulante en minutos.',
          '• <strong>Inhibidores Directos del Factor Xa (Rivaroxabán, Apixabán):</strong> Antídoto específico: <strong>Andexanet alfa</strong> (si está disponible en el centro asistencial). Si no se dispone de él, administrar <strong>CCP 4 factores a dosis alta (50 UI/kg EV)</strong>.',
          '• <strong>Heparinas (HNF / HBPM):</strong> Sulfato de Protamina EV (1 mg neutraliza 100 UI de HNF administrada en las últimas 2-3 horas; neutralización parcial en HBPM).'
        ]
      },
      {
        subhead: '5. Criterios Neuroquirúrgicos, Manejo de PIC y Escala Pronóstica ICH',
        paragraphs: [
          'El manejo quirúrgico de la HIE supratentorial e infratentorial responde a principios diametralmente distintos:',
          '• <strong>Hemorragia Cerebelosa (Regla de Oro Quirúrgica):</strong> Todo hematoma cerebeloso con <strong>diámetro ≥ 3 cm</strong>, o asociado a compresión del tronco encefálico, distorsión del 4° ventrículo o hidrocefalia obstructiva aguda, constituye una <strong>indicación quirúrgica urgente obligatoria</strong> de evacuación mediante craneotomía o craniectomía suboccipital descompresiva. Adoptar una conducta médica conservadora en un hematoma cerebeloso ≥ 3 cm conlleva muerte por enclavamiento en horas.',
          '• <strong>Hemorragia Supratentorial (STICH Trials):</strong> La evacuación quirúrgica abierta rutinaria de hematomas profundos (ganglios basales o tálamo) NO demostró beneficio funcional frente al manejo médico. Solo se indica cirugía en casos seleccionados: hematomas lobares superficiales grandes (&gt; 30 mL) a menos de 1 cm de la superficie cortical en pacientes con deterioro neurológico progresivo, o craniectomía descompresiva en edema masivo intratable.',
          '• <strong>Hidrocefalia e Invasión Ventricular:</strong> Indicación formal de instalación urgente de un <strong>Drenaje Ventricular Externo (DVE)</strong> para descompresión y monitorización continua de PIC.',
          '• <strong>ICH Score (Hemphill):</strong> Escala pronóstica de 0 a 6 puntos para predecir mortalidad a 30 días: Glasgow 3-4 (2 pts), 5-12 (1 pt); Volumen ≥ 30 mL (1 pt); Invasión intraventricular (1 pt); Origen infratentorial (1 pt); Edad ≥ 80 años (1 pt). Mortalidad: 0 pts = 0%, 1 pt = 13%, 2 pts = 26%, 3 pts = 72%, 4 pts = 97%, 5-6 pts = 100%.'
        ]
      }
    ],
    table: {
      title: 'Síndromes Clínicos Topográficos en Hemorragia Intracerebral Espontánea',
      headers: ['Topografía de la HIE', 'Vasos Sangrantes', 'Manifestaciones Neurológicas Cardinales', 'Signos Pupilar / Oculares Patognomónicos'],
      rows: [
        ['Putaminal (Ganglios Basales, 50%)', 'Ramas lenticuloestriadas profundas de la ACM', 'Hemiplejia faciobraquiocrural contralateral armónica · Hemihipoestesia contralateral · Afasia o hemiinatención', 'Desviación oculocefálica conjugada hacia la lesión ("mira la lesión") · Pupilas normales reactivas'],
        ['Talámica (15 – 20%)', 'Ramas tálamo-perforantes y lenticuloópticas de la ACP', 'Hemihipoestesia profunda contralateral (predomina sobre déficit motor) · Dolor talámico crónico secundario', 'Ojos desviados hacia abajo y adentro ("miran la nariz") · Parálisis de la mirada vertical (Parinaud) · Pupilas mióticas arreactivas'],
        ['Protuberancial / Pontina (10 – 15%)', 'Ramas perforantes mediales de la arteria basilar', 'Coma súbito precoz · Tetraparesia flácida o descerebración temprana · Paro respiratorio · Hipertermia maligna', 'Pupilas puntiformes (miosis extrema pero reactiva a la luz) · Ausencia de reflejos oculocefálicos/vestibulares'],
        ['Cerebelosa (10%)', 'Arterias cerebelosas (PICA, AICA o cerebelosa superior)', 'Cefalea occipital súbita · Vértigo severo, vómitos explosivos · Ataxia ipsilateral e incapacidad para bipedestación', 'Nistagmo horizontal · Inicialmente SIN hemiparesia de extremidades · Pupilas normales hasta herniación'],
        ['Lobar (Cortical/Subcortical, 15-20%)', 'Vasos corticales debilitados por Angiopatía Amiloide Cerebral (AAC)', 'Déficit focal restringido al lóbulo afectado (afasia en lóbulo temporal/frontal; hemianopsia en occipital)', 'Crisis epilépticas focales o generalizadas de inicio temprano · Cefalea localizada ipsilateral']
      ]
    },
    severityTable: {
      title: 'Score ICH de Hemphill: Parámetros, Puntuación y Estimación de Mortalidad a 30 Días',
      headers: ['Componente Evaluado', 'Criterio Clínico / Radiológico', 'Puntos Asignados', 'Puntaje Total ICH', 'Mortalidad a 30 Días'],
      rows: [
        ['Escala de Glasgow (GCS)', 'Glasgow 3 – 4 / Glasgow 5 – 12 / Glasgow 13 – 15', '2 puntos / 1 punto / 0 puntos', '0 puntos', '0% (excelente pronóstico funcional)'],
        ['Volumen del Hematoma', 'Volumen ≥ 30 mL (fórmula ABC/2) / < 30 mL', '1 punto / 0 puntos', '1 punto', '13%'],
        ['Invasión Intraventricular', 'Presente (sangre en ventrículos) / Ausente', '1 punto / 0 puntos', '2 puntos', '26%'],
        ['Localización Infratentorial', 'Origen en cerebelo o tronco / Supratentorial', '1 punto / 0 puntos', '3 puntos', '72% (compromiso crítico)'],
        ['Edad del Paciente', 'Edad ≥ 80 años / < 80 años', '1 punto / 0 puntos', '4 puntos', '97% (mortalidad extrema)'],
        ['—', '—', '—', '5 – 6 puntos', '100% (pronóstico ominoso)']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Reversión Rápida de Anticoagulantes y Metas de Presión Arterial en HIE',
      headers: ['Condición Clínica', 'Fármaco de Elección', 'Dosis y Vía de Administración', 'Objetivo Terapéutico y Reglas Críticas'],
      rows: [
        ['Hipertensión Arterial Aguda', 'Labetalol EV o Nicardipino EV', 'Labetalol 10-20 mg bolo EV en 2 min o infusión 2-8 mg/min; Nicardipino 5-15 mg/h EV', 'Meta estricta: PAS 130 a 140 mmHg en < 1-2 horas · NUNCA permitir caídas por debajo de PAS < 130 mmHg'],
        ['Anticoagulación con AVK (Acenocumarol)', 'Complejo Protrombínico Concentrado 4F + Vitamina K1', 'CCP 4F: 25 a 50 UI/kg EV infusión rápida + Vitamina K1 10 mg EV lenta en 20 min', 'Normalización de INR < 1.4 en < 30 min · El CCP es mandatorio; el plasma fresco es solo alternativa de rescate'],
        ['Anticoagulación con Dabigatrán', 'Idarucizumab', '5 g EV en dos dosis separadas de 2.5 g en bolo rápido (con minutos de diferencia)', 'Neutralización específica inmediata de la molécula de dabigatrán en sangre circulante'],
        ['Anticoagulación con Anti-Xa (Rivaroxabán/Apixabán)', 'Andexanet alfa o Complejo Protrombínico 4F', 'Andexanet alfa bolo + infusión (si disponible) o CCP 4 factores a dosis alta: 50 UI/kg EV', 'Restablecimiento de la generación de trombina para detener la expansión del hematoma'],
        ['Hematoma Cerebeloso ≥ 3 cm', 'Evacuación Quirúrgica Descompresiva', 'Craneotomía / Craniectomía suboccipital evacuadora de urgencia neuroquirúrgica', 'Indicación quirúrgica absoluta; la observación médica en hematomas cerebelosos ≥ 3 cm es error fatal'],
        ['Hidrocefalia Aguda por IVH', 'Drenaje Ventricular Externo (DVE)', 'Trepanación e instalación de catéter ventricular con monitorización continua de PIC', 'Descompresión ventricular y control de hipertensión endocraneana refractaria']
      ]
    },
    vignette: 'Hombre de 62 años con antecedente de fibrilación auricular no valvular en tratamiento con acenocumarol e hipertensión arterial mal controlada. Es traído de urgencia al hospital tras presentar cefalea súbita holocránea mientras tomaba café, seguida rápidamente de vómitos explosivos, debilidad completa del hemicuerpo izquierdo y deterioro del estado de conciencia. Al examen físico: PA 205/115 mmHg, FC 88 lpm arrítmico, Glasgow 11 (somnoliento, desorientado, localiza estímulos dolorosos), hemiplejia faciobraquiocrural izquierda con fuerza M0 en extremidad superior y M1 en inferior, y desviación conjugada de la mirada hacia la derecha. El TAC de encéfalo sin contraste revela una hiperdensidad intraparenquimatosa de 32 mL en el putamen derecho con invasión del asta frontal del ventrículo lateral ipsilateral y desviación de línea media de 3 mm. El laboratorio de urgencias reporta un INR de 3.4 y plaquetas de 220.000/mm³.',
    explicacion: 'El paciente presenta una hemorragia intracerebral espontánea putaminal derecha de volumen considerable (32 mL) con volcado ventricular y desviación de línea media, agravada por anticoagulación supraterapéutica con acenocumarol (INR 3.4) y crisis hipertensiva severa. El riesgo de expansión del hematoma y mortalidad es crítico en las primeras horas. Las conductas médicas de urgencia simultáneas, obligatorias e inmediatas son: 1) Reversión inmediata de la anticoagulación mediante Complejo Protrombínico Concentrado (CCP de 4 factores a 25-50 UI/kg EV) asociado a Vitamina K1 (Fitomenadiona 10 mg EV lenta); 2) Control activo y continuo de la presión arterial con Labetalol o Nicardipino EV para alcanzar una meta de PAS de 130 a 140 mmHg sin provocar caídas bajo 130 mmHg; e 3) Ingreso a Unidad de Cuidados Intensivos (UCI) con evaluación neuroquirúrgica para valorar monitorización de PIC o instalación de drenaje ventricular externo si la hidrocefalia progresa. La evacuación quirúrgica abierta del hematoma putaminal no está indicada de rutina según la evidencia de los ensayos STICH.',
    keyPoints: [
      'La hemorragia intracerebral hipertensiva compromete predominantemente ganglios basales (putamen), tálamo, protuberancia y cerebelo.',
      'La angiopatía amiloide cerebral afecta a ancianos y produce hemorragias lobares (corticales/subcorticales) recidivantes.',
      'En la fase hiperaguda con PAS entre 150 y 220 mmHg, la meta es reducir la PAS de forma suave pero rápida a 130-140 mmHg; caídas < 130 mmHg aumentan el daño renal y la isquemia cerebral.',
      'Ante una HIE bajo antagonistas de la vitamina K (acenocumarol), la reversión de primera línea es Complejo Protrombínico Concentrado (CCP 4F) + Vitamina K1 EV.',
      'El plasma fresco congelado es muy inferior al CCP: demora horas en infundirse, no normaliza rápidamente el INR y produce sobrecarga de volumen.',
      'Todo hematoma cerebeloso de diámetro ≥ 3 cm o con compresión de troncoencefálico/hidrocefalia requiere evacuación quirúrgica suboccipital urgente obligatoria.',
      'La cirugía abierta de hematomas profundos (putaminales/talámicos) no demostró mejoría funcional frente al manejo médico intensivo en UCI.',
      'El Score ICH de Hemphill (Glasgow, volumen, invasión ventricular, infratentorial, edad ≥ 80) estratifica la mortalidad a 30 días.'
    ],
    questions: [
      {
        stem: 'Hombre de 58 años, hipertenso crónico, ingresa a urgencias con hemiparesia izquierda y afasia transcortical de inicio hiperagudo. El TAC de cerebro sin contraste confirma una hemorragia intracerebral talámica derecha de 18 mL sin compromiso ventricular. Al ingreso se registra una presión arterial de 205/115 mmHg y FC 78 lpm. ¿Cuál es la conducta terapéutica indicada respecto al manejo de su presión arterial?',
        options: [
          { id: 'A', text: 'Mantener la presión arterial sin intervención farmacológica para asegurar la perfusión en la penumbra hemorrágica' },
          { id: 'B', text: 'Iniciar Labetalol o Nicardipino endovenoso con meta de descenso rápido de la PAS a 130 – 140 mmHg' },
          { id: 'C', text: 'Indicar infusión continua de nitroprusiato de sodio con meta de PAS < 100 mmHg' },
          { id: 'D', text: 'Administrar Nifedipino 10 mg por vía sublingual en bolo inmediato' },
          { id: 'E', text: 'Iniciar Enalaprilat endovenoso y tolerar cifras tensionales hasta PAS de 220 mmHg' }
        ],
        correcta: 'B',
        explicacion: 'En la hemorragia intracerebral espontánea aguda, la hipertensión arterial severa promueve la expansión activa del hematoma durante las primeras horas. Las guías internacionales contemporáneas recomiendan una reducción rápida, suave y continua de la presión sistólica mediante fármacos endovenosos titulables como Labetalol o Nicardipino, fijando una meta objetivo de PAS entre 130 y 140 mmHg. Descensos excesivos por debajo de 130 mmHg (C) incrementan la mortalidad y la disfunción renal aguda. La hipertensión permisiva (A) se aplica en el ACV isquémico no trombolizado, pero es peligrosa en la hemorragia intraparenquimatosa. El nifedipino sublingual (D) está proscrito.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.003'
      },
      {
        stem: 'Mujer de 72 años con antecedente de reemplazo valvular mitral mecánico en tratamiento con acenocumarol ingresa por hematoma intracerebral lobar parietal izquierdo. El laboratorio reporta un INR de 3.6. ¿Cuál es el tratamiento de primera línea más eficaz y rápido para revertir la coagulopatía de urgencia?',
        options: [
          { id: 'A', text: 'Plasma fresco congelado 20 mL/kg en infusión durante 6 horas' },
          { id: 'B', text: 'Complejo Protrombínico Concentrado (CCP de 4 factores) asociado a Vitamina K1 endovenosa' },
          { id: 'C', text: 'Vitamina K1 oral en monoterapia a dosis de 10 mg' },
          { id: 'D', text: 'Sulfato de Protamina en bolo endovenoso de 50 mg' },
          { id: 'E', text: 'Transfusión de concentrados plaquetarios inmediatos' }
        ],
        correcta: 'B',
        explicacion: 'En la hemorragia intracerebral asociada a antagonistas de la vitamina K, el Complejo Protrombínico Concentrado (CCP de 4 factores) es el tratamiento de primera línea indiscutido: normaliza el INR a valores seguros (< 1.4) en menos de 15 a 30 minutos sin sobrecargar volumen al paciente. Debe administrarse siempre en conjunto con Vitamina K1 (Fitomenadiona 10 mg EV lenta) para sostener la hemostasia una vez que la vida media del CCP concluya. El plasma fresco congelado (A) tarda horas en infundirse y descongelarse, siendo muy inferior.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.003'
      },
      {
        stem: 'Hombre de 64 años ingresa por cuadro súbito de cefalea occipital, vómitos repetidos e incapacidad para mantenerse en pie. Al examen neurológico presenta marcha imposible por ataxia truncal marcada y dismetría en extremidades derechas, sin paresia faciobraquiocrural y con Glasgow 14. El TAC de encéfalo demuestra una hemorragia en el hemisferio cerebeloso derecho de 3.4 cm de diámetro con compresión evidente del cuarto ventrículo. ¿Cuál es la conducta clínica mandatoria e inaplazable?',
        options: [
          { id: 'A', text: 'Hospitalización en sala básica con analgesia y control tomográfico en 48 horas' },
          { id: 'B', text: 'Evaluación y resolución neuroquirúrgica inmediata para descompresión y evacuación del hematoma' },
          { id: 'C', text: 'Iniciar infusión de manitol al 15% y diferir la cirugía mientras el paciente esté consciente' },
          { id: 'D', text: 'Instalación exclusiva de un drenaje lumbar para descompresión de fosa posterior' },
          { id: 'E', text: 'Realizar trombolisis intrahematoma mediante estereotaxia' }
        ],
        correcta: 'B',
        explicacion: 'En la hemorragia cerebelosa, un diámetro igual o superior a 3 cm (o la presencia de compresión del cuarto ventrículo, distorsión del troncoencefálico o hidrocefalia) constituye una indicación quirúrgica de urgencia absoluta para evacuación mediante craneotomía suboccipital. La fosa posterior es un compartimento rígido e inextensible; una conducta conservadora o expectante en un hematoma de 3.4 cm deriva rápidamente en compresión letal del centro respiratorio bulbar o herniación amigdalina descendente fatal.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.003'
      },
      {
        stem: 'Una mujer de 83 años (1 pt) es evaluada por un ACV hemorrágico. Ingresa en coma con un Glasgow de 4 puntos (2 pts). El TAC de cerebro muestra un hematoma gangliobasal de 35 mL (1 pt) con volcado hemático masivo al sistema ventricular (1 pt). Al calcular el Score ICH de Hemphill para estimación pronóstica, ¿cuántos puntos presenta y cuál es su implicancia clínica?',
        options: [
          { id: 'A', text: '2 puntos · Mortalidad estimada a 30 días de 10-15%' },
          { id: 'B', text: '3 puntos · Candidata prioritaria a craneotomía abierta descompresiva' },
          { id: 'C', text: '5 puntos · Predice una mortalidad a 30 días cercana al 100%' },
          { id: 'D', text: '1 punto · Excelente pronóstico de rehabilitación funcional ambulatoria' },
          { id: 'E', text: '4 puntos · Indicación de anticoagulación de rescate' }
        ],
        correcta: 'C',
        explicacion: 'El cálculo del Score ICH es: Glasgow 3-4 (2 pts) + Volumen ≥ 30 mL (1 pt) + Hemorragia intraventricular presente (1 pt) + Localización supratentorial (0 pts) + Edad ≥ 80 años (1 pt) = Total 5 puntos. Una puntuación de 5 puntos en el Score ICH de Hemphill predice una mortalidad extremadamente elevada a los 30 días, cercana al 100%, orientando a una discusión bioética sobre limitación del esfuerzo terapéutico y adecuación de medidas de soporte intensivo.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.003'
      }
    ]
  },

  // ==========================================================================
  // TEMA 10.4: HEMORRAGIA SUBARACNOIDEA (HSA) ANEURISMÁTICA (TIER 3 · 4 PÁG)
  // ==========================================================================
  {
    id: 'neuro-04',
    classId: 'neuro-04',
    tier: 3,
    blockNum: 1,
    blockName: 'Enfermedad Cerebrovascular y Urgencias Neurovasculares',
    topicLabel: '10.4',
    title: 'Hemorragia Subaracnoidea (HSA) Aneurismática: Cefalea en Trueno, TAC precoz, Punción Lumbar (xantocromía), Escalas Hunt & Hess y Fisher, Nimodipino',
    perfilCode: '1.10.2.004, 1.10.2.008',
    dx: 'Sospecha',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 37 / Urgencias Neuroquirúrgicas): Hemorragia Subaracnoidea por Rotura de Aneurisma Cerebral · Confirmación con angioTAC o panangiografía y exclusión aneurismática (coils vs clip) urgente.',
    reconstrucciones: 'EUNACOM Diciembre 2024 (Q#139) · EUNACOM Agosto 2021 (Q#178) · EUNACOM Diciembre 2019 (Q#139) · EUNACOM Julio 2013 (Q#136)',
    frecuencia: 'Máxima rentabilidad · Pregunta clásica de cefalea en trueno, análisis de LCR y manejo de complicaciones en UTI',
    svg: null,
    algoTitle: 'Algoritmo Diagnóstico de Cefalea en Trueno y Manejo Agudo de la HSA',
    diagram: flow('Algoritmo Diagnóstico y Terapéutico en Hemorragia Subaracnoidea', [
      { t: 'Cefalea en Trueno (Acmé en < 1 min, "la peor de la vida")', s: 'Frecuentemente durante esfuerzo físico / coito · Signos meníngeos tardíos · Compromiso de conciencia', type: 'acc' },
      { t: 'Paso Diagnóstico 1: TAC de Encéfalo sin Contraste Ultraprecoz', s: 'Sensibilidad > 98-100% en las primeras 6 horas · Sangre en cisternas basales y valles silvianos', type: 'warn' },
      { k: 'split', q: '¿Resultado del TAC de Encéfalo sin Contraste?', s: 'Decisión diagnóstica de certeza en el servicio de urgencia',
        ll: 'TAC Positivo para HSA',
        left: { t: 'Confirmación Diagnóstica Inmediata', s: 'AngioTAC / Panangiografía digital · Ingreso a UPC + Nimodipino 60 mg c/4h VO', type: 'crit' },
        rl: 'TAC Rigurosamente Normal',
        right: { t: 'Paso 2 OBLIGATORIO: Punción Lumbar', s: 'Realizar idealmente a las 6-12 h del inicio · Buscar Xantocromía y prueba de los 3 tubos', type: 'dec' }
      },
      { t: 'Exclusión Precoz del Aneurisma Roto (≤ 24 a 72 horas)', s: 'Embolización endovascular con coils vs Clipaje microquirúrgico · Prevenir resangrado precoz', type: 'acc' },
      { t: 'Prevención de Vasoespasmo e Isquemia Cerebral Tardía (Día 4 a 14)', s: 'Nimodipino oral por 21 días continuos · Mantenimiento estricto de euvolemia con suero fisiológico', type: 'acc' }
    ]),
    contexto: 'La hemorragia subaracnoidea aneurismática (HSA) es una de las emergencias médicas más temidas y evaluadas en el EUNACOM. El 85% se debe a la rotura de aneurismas saculares en las bifurcaciones del polígono de Willis. La regla diagnóstica de oro es inviolable: ante toda cefalea en trueno ("la peor de mi vida"), el primer paso es un TAC de encéfalo sin contraste inmediato; si el TAC es normal, es mandatorio realizar una punción lumbar para confirmar o descartar xantocromía. El pronóstico depende del aseguramiento precoz del aneurisma y de la prevención del vasoespasmo con Nimodipino.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Factores de Riesgo y Distribución Aneurismática',
        paragraphs: [
          'La hemorragia subaracnoidea (HSA) consiste en la irrupción súbita de sangre arterial en el espacio subaracnoideo (entre la aracnoides y la piamadre), provocando una brusca elevación de la presión intracraneana que puede igualar la presión de perfusión cerebral, ocasionando síncope o paro circulatorio transitorio.',
          'La causa no traumática más frecuente (85% de los casos) es la <strong>rotura de un aneurisma sacular o "en baya"</strong> ubicado en los puntos de ramificación del <strong>Polígono de Willis</strong>. La distribución anatómica clásica es: 1) <strong>Arteria Comunicante Anterior (30-35%)</strong>; 2) <strong>Arteria Comunicante Posterior</strong> en su unión con la carótida interna (25-30%); 3) <strong>Bifurcación de la Arteria Cerebral Media (20%)</strong>; y 4) <strong>Circulación posterior / bifurcación de la arteria basilar (10%)</strong>.',
          '<em>Factores de riesgo mayores:</em> Tabaquismo activo (el principal factor modificable), hipertensión arterial crónica, consumo de cocaína o anfetaminas, alcoholismo severo y antecedentes familiares de HSA en familiares de primer grado. Se asocia a patologías del tejido conectivo como <strong>Enfermedad Renal Poliquística Autosómica Dominante (ERPAD)</strong>, Síndrome de Marfan y Ehlers-Danlos tipo IV.'
        ]
      },
      {
        subhead: '2. Semiología Clásica: Cefalea en Trueno y Banderas Rojas',
        paragraphs: [
          'La manifestación cardinal patognomónica es la <strong>cefalea en trueno (thunderclap headache)</strong>: cefalea de intensidad máxima hiperaguda (EVA 10/10) que alcanza su acmé en <strong>menos de 1 minuto</strong> ("el dolor de cabeza más insoportable de toda mi vida"), iniciada frecuentemente durante maniobras de Valsalva, esfuerzo físico intenso, coito o defecación.',
          'Síntomas acompañantes: Pérdida transitoria de conciencia al inicio del cuadro (50% de los pacientes), vómitos explosivos, fotofobia, dolor y rigidez cervical. <em>Perla EUNACOM:</em> Los signos meníngeos (rigidez de nuca, signos de Kernig y Brudzinski) pueden <strong>tardar entre 6 y 12 horas</strong> en manifestarse, ya que la sangre debe degradarse e irritar las raíces espinales; su ausencia en la primera hora NO descarta jamás una HSA.',
          '<strong>Signos focales de valor localizador:</strong>',
          '• <strong>Parálisis del III par craneal (Nervio Oculomotor):</strong> Midriasis ipsilateral fija arreactiva a la luz, ptosis palpebral y desviación ocular "hacia abajo y afuera". Es patognomónica de compresión por un aneurisma de la <strong>arteria comunicante posterior</strong> en expansión o rotura.',
          '• <strong>Hemorragias prerretinianas subhialoideas (Síndrome de Terson):</strong> Visibles en el fondo de ojo en el 15-20% de las HSA severas, asociadas a mal pronóstico funcional.',
          '• <em>Cefalea centinela:</em> Cefalea previa moderada de alarma que ocurre en las 2-4 semanas anteriores a la rotura masiva por microfugas o distensión parietal del aneurisma (frecuentemente mal diagnosticada como cefalea tensional o sinusitis).'
        ]
      },
      {
        subhead: '3. Algoritmo Diagnóstico Secuencial: TAC sin Contraste vs Punción Lumbar',
        paragraphs: [
          'Ante la sospecha clínica de cefalea en trueno, existe una secuencia diagnóstica inviolable de dos pasos:',
          '<strong>Paso 1: TAC de encéfalo sin contraste precoz:</strong> Es el examen inicial obligatorio. Su sensibilidad supera el <strong>98-100% si se realiza dentro de las primeras 6 horas</strong> del inicio del dolor. Visualiza sangre hiperdensa en cisternas basales, cisura de Silvio, espacio interhemisférico o sistema ventricular.',
          '<strong>Paso 2: Punción Lumbar (PL) diagnóstica obligatoria:</strong>',
          '• Si el TAC de encéfalo es rigurosamente normal pero la clínica de cefalea en trueno es sugerente, <strong>la PL es mandatoria e insoslayable</strong>. Despachar a un paciente a su domicilio con TAC normal sin punción lumbar es uno de los errores más graves evaluados en el examen.',
          '• <em>Momento ideal:</em> Debe efectuarse preferentemente después de <strong>6 a 12 horas del inicio de los síntomas</strong> para otorgar tiempo suficiente a la lisis eritrocitaria y formación de <strong>Xantocromía</strong> (pigmento amarillo o rosado del sobrenadante por bilirrubina y oxihemoglobina).',
          '• <em>Diferenciación de punción traumática:</em> En la <strong>prueba de los 3 tubos</strong>, la HSA muestra un recuento eritrocitario homogéneo en los 3 frascos (sin aclaramiento) y el sobrenadante centrifugado es francamente <strong>xantocrómico</strong>. En la punción traumática (iatrogénica), el número de glóbulos rojos disminuye ostensiblemente del tubo 1 al tubo 3 y el sobrenadante post-centrifugación inmediata es transparente e incoloro.',
          '<strong>Paso 3: Estudio Vascular (AngioTAC cerebral o Panangiografía por sustracción digital - DSA):</strong> Confirma la presencia del aneurisma, su cuello, dimensiones y relaciones espaciales, pesquisando además aneurismas múltiples (presentes en el 15-20% de los pacientes).'
        ]
      },
      {
        subhead: '4. Escalas Pronósticas: Hunt & Hess (Clínica) y Fisher Modificada (Tomográfica)',
        paragraphs: [
          'La estratificación de la HSA se realiza mediante dos escalas complementarias:',
          '• <strong>Escala de Hunt y Hess (Estratificación Clínica Preoperatoria):</strong> Grado I: Asintomático o cefalea leve con rigidez mínima (mortalidad ~2%); Grado II: Cefalea moderada a severa con rigidez de nuca, sin déficit focal salvo paresia de par craneal (mortalidad ~5%); Grado III: Somnolencia, confusión, déficit focal leve; Grado IV: Estupor, hemiparesia moderada a severa; Grado V: Coma profundo, postura de descerebración y aspecto moribundo (mortalidad &gt; 70%).',
          '• <strong>Escala de Fisher Modificada (Estratificación Tomográfica):</strong> Diseñada específicamente para predecir el <strong>riesgo de desarrollar Vasoespasmo cerebral e Isquemia Cerebral Tardía (DCI)</strong>. Grado 1: HSA fina sin hemorragia intraventricular (HIV); Grado 2: HSA fina con HIV; Grado 3: Coágulo grueso de HSA subaracnoidea sin HIV; Grado 4: Coágulo grueso subaracnoideo CON hemorragia intraventricular bilateral (riesgo máximo de vasoespasmo e infartos tardíos).'
        ]
      },
      {
        subhead: '5. Manejo Médico en UPC, Prevención del Resangrado, Vasoespasmo y Nimodipino',
        paragraphs: [
          'El tratamiento de la HSA aneurismática en la Unidad de Paciente Crítico contempla cuatro objetivos prioritarios:',
          '1. <strong>Prevención del Resangrado Aneurismático:</strong> El resangrado tiene una mortalidad superior al 70-80% y su mayor incidencia ocurre en las primeras 24 horas. La única medida definitiva es la <strong>exclusión precoz del aneurisma en las primeras 24 a 72 horas</strong> mediante <strong>embolización endovascular con coils (coiling)</strong> (método de elección por menor invasividad) o <strong>clipaje microquirúrgico</strong> (preferido en aneurismas de cuello ancho de la ACM o hematomas parenquimatosos compresivos concomitantes). Previo al aseguramiento, la PAS debe mantenerse &lt; 160 mmHg.',
          '2. <strong>Prevención del Vasoespasmo e Isquemia Cerebral Tardía (DCI):</strong> Ocurre típicamente entre el <strong>día 4 y el día 14 post-sangrado (pico en días 7 a 10)</strong> por liberación de endotelina y degradación de oxihemoglobina espasmógena.',
          '• <strong>Nimodipino oral (60 mg cada 4 horas vía oral o por sonda nasogástrica durante 21 días continuos):</strong> Es el único fármaco que ha demostrado con alto nivel de evidencia reducir la mortalidad y la isquemia cerebral tardía en la HSA aneurismática. Debe iniciarse de inmediato.',
          '• <em>Euvolemia estricta:</em> Se infunden soluciones cristaloides isotónicas (Suero Fisiológico 0.9%) para mantener la normovolemia. La antigua terapia "triple H" (hipervolemia agresiva) está proscrita; solo se induce <strong>hipertensión controlada</strong> si se demuestra vasoespasmo clínico o angiográfico.',
          '3. <strong>Manejo de la Hidrocefalia Aguda:</strong> Ocurre en el 20-30% de las HSA por bloqueo de las granulaciones de Pacchioni; si produce deterioro del sensorio, requiere instalación urgente de un <strong>Drenaje Ventricular Externo (DVE)</strong>.',
          '4. <strong>Manejo de Hiponatremia:</strong> Se debe a Síndrome de Pérdida de Sal Cerebral (o SIADH). Está estrictamente <strong>contraindicada la restricción hídrica</strong> (la hipovolemia desencadena vasoespasmo e infarto cerebral); se trata con suero salino al 0.9% o hipertónico al 3%.'
        ]
      }
    ],
    table: {
      title: 'Escalas Pronósticas en HSA: Escala Clínica de Hunt & Hess vs Escala Tomográfica de Fisher',
      headers: ['Grado / Escala', 'Hunt & Hess (Estado Clínico Basal)', 'Fisher Modificada (Hallazgos en TAC)', 'Riesgo / Implicancia Clínica'],
      rows: [
        ['Grado I', 'Asintomático o cefalea leve con rigidez de nuca mínima', 'HSA focal o difusa fina < 1 mm de espesor, sin HIV', 'Excelente pronóstico quirúrgico; mortalidad < 5%'],
        ['Grado II', 'Cefalea moderada a severa, rigidez marcada, sin focalidad (salvo par craneal)', 'HSA fina < 1 mm con hemorragia intraventricular bilateral (HIV)', 'Bajo riesgo de vasoespasmo en Fisher 1; moderado en Fisher 2'],
        ['Grado III', 'Somnolencia, confusión o leve déficit focal motor/sensitivo', 'Coágulo grueso subaracnoideo > 1 mm de espesor, sin HIV', 'Riesgo elevado de vasoespasmo sintomático en Fisher 3'],
        ['Grado IV', 'Estupor, hemiparesia moderada a severa, signos de rigidez vegetativa', 'Coágulo grueso subaracnoideo > 1 mm CON hemorragia intraventricular (HIV)', 'Riesgo MÁXIMO de vasoespasmo e isquemia tardía; mortalidad > 40%'],
        ['Grado V', 'Coma profundo, rigidez de descerebración, apariencia moribunda', '—', 'Mortalidad superior al 70-80%; rescate neuroquirúrgico urgente']
      ]
    },
    severityTable: {
      title: 'Complicaciones Mayores de la HSA Aneurismática: Cronología, Fisiopatología y Manejo',
      headers: ['Complicación Mayor', 'Ventana Temporal Crítica', 'Mecanismo Fisiopatológico', 'Diagnóstico y Manejo de Elección'],
      rows: [
        ['Resangrado Aneurismático', 'Primeras 24 horas (máximo riesgo en primeras 6 h)', 'Lisis del coágulo hemostático perianeurismático antes de la exclusión', 'Mortalidad > 70% · Prevención: exclusión precoz con coils o clipaje en < 24-72 h + PAS < 160 mmHg previa'],
        ['Vasoespasmo / Isquemia Tardía (DCI)', 'Días 4 a 14 post-sangrado (pico entre días 7 y 10)', 'Constricción arterial difusa mediada por productos de lisis de hemoglobina', 'Nimodipino 60 mg c/4h VO x 21 días obligatorios · Euvolemia estricta · Doppler transcraneal / AngioTAC'],
        ['Hidrocefalia Aguda', 'Primeras 24 a 48 horas (o tardía comunicante)', 'Obstrucción del flujo de LCR por sangre intraventricular o aracnoiditis química', 'Deterioro precoz del sensorio · Manejo: Drenaje Ventricular Externo (DVE) o válvula de derivación VP'],
        ['Hiponatremia (Pérdida de Sal Cerebral)', 'Primera semana post-HSA', 'Liberación masiva de péptido natriurético cerebral que causa hipovolemia natriurética', 'Tratar con suero salino al 0.9% o hipertónico al 3% · PROSCRITA la restricción hídrica por riesgo de vasoespasmo'],
        ['Arritmias Cardíacas / IAM Neurogénico', 'Primeras 48 horas', 'Descarga simpática masiva y liberación masiva de catecolaminas (Takotsubo)', 'Monitoreo ECG continuo en UPC · Elevación de troponinas e inversión de ondas T en cara anterior']
      ]
    },
    treatmentTable: {
      title: 'Protocolo Escalonado de Manejo en HSA: Medidas Iniciales, Neuroprotección y Exclusión Aneurismática',
      headers: ['Fase Asistencial', 'Intervención / Fármaco', 'Pauta Posológica y Objetivo', 'Reglas de Oro y Advertencias'],
      rows: [
        ['Urgencia Inmediata', 'TAC de Encéfalo sin Contraste', 'Realizar en < 30 min desde sospecha; si es normal: Punción Lumbar a las 6-12 h', 'La normalidad del TAC NO descarta HSA: la PL con xantocromía es obligatoria'],
        ['Neuroprotección Vascular', 'Nimodipino oral', '60 mg cada 4 horas vía oral o sonda nasogástrica durante 21 días continuos', 'Único fármaco con evidencia nivel A en reducir isquemia tardía y mortalidad en HSA aneurismática'],
        ['Control Hemodinámico Pre-Exclusión', 'Labetalol o Nicardipino EV', 'Mantener PAS < 160 mmHg (o PAM < 110 mmHg) evitando caídas bruscas', 'Previene el resangrado sin comprometer la presión de perfusión cerebral'],
        ['Aseguramiento Aneurismático', 'Embolización con Coils (Endovascular) o Clipaje', 'Realizar dentro de las primeras 24 a 72 horas desde el ingreso hospitalario', 'El coiling endovascular es de primera elección en la mayoría; clipaje si hematoma lobar o cuello ancho'],
        ['Manejo de Fluidos', 'Solución Salina 0.9% (Cristaloides)', 'Mantener EUVOLEMIA estricta (diuresis > 0.5-1 mL/kg/h; balance neutro a levemente positivo)', 'Proscritas la hipervolemia profiláctica y la restricción de agua libre; usar suero salino normal'],
        ['Analgesia y Sedación', 'Opioides titulables (Fentanilo / Morfina)', 'Control estricto del dolor y antieméticos (Ondansetrón) para evitar Valsalva', 'Evitar maniobras de esfuerzo, tos o vómitos que eleven la PIC y desencadenen resangrado']
      ]
    },
    vignette: 'Mujer de 48 años, fumadora de 15 cigarrillos al día y sin otros antecedentes mórbidos, consulta en el servicio de urgencia por presentar cefalea occipital explosiva de máxima intensidad (EVA 10/10) mientras sostenía relaciones sexuales hace 4 horas. Refiere que el dolor alcanzó su máxima intensidad en menos de 10 segundos, asociándose a dos vómitos explosivos y rigidez cervical marcada. Al examen físico: PA 160/95 mmHg, FC 76 lpm, vigil pero intensamente adolorida con fotofobia severa (Hunt y Hess II), signos de Kernig y Brudzinski positivos. Al examen ocular destaca ptosis en el párpado derecho y midriasis derecha fija arreactiva con ojo desviado hacia abajo y afuera. Se realiza un TAC de encéfalo sin contraste a los 30 minutos del ingreso, el cual evidencia hiperdensidad compatible con sangre distribuida en las cisternas basales, cisura interhemisférica y valle silviano derecho, sin hematoma parenquimatoso.',
    explicacion: 'El cuadro corresponde a una Hemorragia Subaracnoidea (HSA) de causa aneurismática confirmada por TAC de encéfalo en una paciente con cefalea en trueno clásica. La presencia de parálisis completa del tercer par craneal ipsilateral (midriasis arreactiva, ptosis palpebral y estrabismo divergente hacia abajo y afuera) es patognomónica de compresión por un aneurisma de la arteria comunicante posterior derecha en su unión con la carótida interna. Las conductas de urgencia impostergables son: hospitalización en Unidad de Paciente Crítico (UPC), inicio inmediato de Nimodipino oral 60 mg cada 4 horas por 21 días continuos para prevenir vasoespasmo, control de la presión arterial (PAS < 160 mmHg), analgesia endovenosa, solicitud urgente de AngioTAC cerebral o panangiografía digital para caracterización anatómica y coordinación de la exclusión precoz del aneurisma mediante embolización endovascular con coils o clipaje microquirúrgico dentro de las primeras 24 a 72 horas.',
    keyPoints: [
      'Toda cefalea en trueno ("la peor de mi vida", con acmé en < 1 minuto) es una sospecha formal de hemorragia subaracnoidea hasta demostrar lo contrario.',
      'El estudio inicial mandatario es un TAC de encéfalo sin contraste inmediato (sensibilidad > 98% en las primeras 6 horas).',
      'Si el TAC de cerebro es normal pero la sospecha de HSA persiste, la Punción Lumbar diagnóstica es OBLIGATORIA (buscar xantocromía tras 6-12 horas).',
      'La parálisis aislada del III par craneal (midriasis + ptosis + oftalmoplejia) sugiere compresión por aneurisma de la arteria comunicante posterior.',
      'El resangrado aneurismático es la complicación más letal de las primeras 24 horas; se previene con la exclusión precoz del aneurisma (coils o clipaje) en ≤ 24-72 horas.',
      'El vasoespasmo e isquemia cerebral tardía ocurren típicamente entre los días 4 y 14 post-HSA; se previenen con Nimodipino oral (60 mg c/4h x 21 días) y euvolemia estricta.',
      'La escala de Fisher modificada predice el riesgo de vasoespasmo según la cantidad de sangre subaracnoidea e intraventricular en el TAC.',
      'La hiponatremia en la HSA se maneja con suero fisiológico al 0.9% o hipertónico al 3%; la restricción de líquidos está terminantemente proscrita por gatillar vasoespasmo.'
    ],
    questions: [
      {
        stem: 'Una mujer de 45 años consulta por cefalea de inicio súbito, muy intensa, tipo "estallido", que comenzó hace 8 horas durante una discusión familiar, acompañada de náuseas y rigidez de nuca. Se realiza un TAC de encéfalo sin contraste a las 9 horas del inicio, el cual resulta informado como rigurosamente normal. ¿Cuál es la conducta diagnóstica que debe realizarse a continuación?',
        options: [
          { id: 'A', text: 'Dar de alta con analgesia oral y citar a control ambulatorio con resonancia en 1 mes' },
          { id: 'B', text: 'Realizar una punción lumbar diagnóstica para análisis citoquímico y búsqueda de xantocromía' },
          { id: 'C', text: 'Solicitar un electroencefalograma estándar para descartar estatus no convulsivo' },
          { id: 'D', text: 'Prescribir triptanes orales asumiendo crisis de migraña con aura prolongada' },
          { id: 'E', text: 'Indicar infiltración de puntos gatillo pericraneales y reposo' }
        ],
        correcta: 'B',
        explicacion: 'En todo paciente con sospecha clínica fundada de hemorragia subaracnoidea (cefalea en trueno de inicio abrupto), un TAC de encéfalo normal NO excluye el diagnóstico, ya que la sensibilidad del TAC comienza a descender progresivamente después de las primeras 6 horas. La regla de oro diagnóstica exige realizar una punción lumbar (PL) para evaluar la presencia de sangre incoagulable en los tres tubos y evidenciar xantocromía en el sobrenadante mediante centrifugación, lo que confirma de forma definitiva la presencia de sangre en el espacio subaracnoideo.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.004'
      },
      {
        stem: 'Hombre de 52 años hospitalizado en UPC tras haber sufrido una hemorragia subaracnoidea Fisher grado 3 por rotura de aneurisma de la arteria comunicante anterior, el cual fue excluido con coils endovasculares a las 24 horas del ingreso. Al sexto día de evolución presenta bradipsiquia, desorientación progresiva y leve paresia braquial izquierda. ¿Qué fármaco con evidencia demostrada en la reducción de la morbimortalidad por vasoespasmo debe estar recibiendo este paciente?',
        options: [
          { id: 'A', text: 'Ácido Acetilsalicílico 250 mg al día vía oral' },
          { id: 'B', text: 'Nimodipino 60 mg cada 4 horas por vía oral o enteral durante 21 días' },
          { id: 'C', text: 'Diltiazem 60 mg cada 8 horas vía intravenosa' },
          { id: 'D', text: 'Heparina de bajo peso molecular en dosis anticoagulantes plenas' },
          { id: 'E', text: 'Dexametasona 4 mg cada 6 horas endovenosa' }
        ],
        correcta: 'B',
        explicacion: 'El vasoespasmo y la isquemia cerebral tardía (DCI) representan la principal causa de morbilidad neurológica prevenible en la HSA aneurismática, ocurriendo típicamente entre el día 4 y el día 14 post-sangrado. El Nimodipino (bloqueador de canales de calcio dihidropiridínico lipofílico) a dosis de 60 mg cada 4 horas por vía oral durante 21 días es el único fármaco que ha demostrado en ensayos clínicos aleatorizados reducir el riesgo de isquemia cerebral secundaria y mejorar la sobrevida funcional en pacientes con HSA aneurismática.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.004'
      },
      {
        stem: 'Una paciente de 50 años presenta una hemorragia subaracnoidea de inicio brusco. Al examen neurológico se constata una marcada ptosis palpebral en el ojo derecho, asociada a midriasis pupilar paralítica que no responde a la luz y estrabismo divergente ("ojo desviado hacia abajo y afuera"). ¿En qué localización anatómica se sospecha con mayor probabilidad el aneurisma cerebral roto causante de esta clínica?',
        options: [
          { id: 'A', text: 'Arteria Comunicante Anterior' },
          { id: 'B', text: 'Arteria Cerebral Media en su bifurcación' },
          { id: 'C', text: 'Arteria Comunicante Posterior en su origen en la carótida interna' },
          { id: 'D', text: 'Arteria Cerebelosa Posteroinferior (PICA)' },
          { id: 'E', text: 'Arteria Pericallosa en el surco interhemisférico' }
        ],
        correcta: 'C',
        explicacion: 'La compresión extrínseca del III par craneal (Nervio Oculomotor) cursa típicamente con midriasis pupilar precoz (debido a que las fibras parasimpáticas pupiloconstrictoras transcurren por la superficie externa del nervio), ptosis palpebral y parálisis de la aducción y elevación ocular (el globo ocular queda desviado "hacia abajo y afuera" por acción del IV y VI pares). Este hallazgo neurológico es altamente patognomónico de un aneurisma de la arteria comunicante posterior ipsilateral en su unión con la carótida interna.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.004'
      },
      {
        stem: '¿Cuál de las siguientes medidas es la más importante y prioritaria para prevenir la complicación con mayor tasa de mortalidad en las primeras 24 a 72 horas de una hemorragia subaracnoidea aneurismática?',
        options: [
          { id: 'A', text: 'Instalación de monitor de presión tisular de oxígeno cerebral' },
          { id: 'B', text: 'Exclusión precoz del aneurisma mediante embolización con coils o clipaje microquirúrgico' },
          { id: 'C', text: 'Hipervolemia inducida con coloides y albúmina humana al 20%' },
          { id: 'D', text: 'Administración preventiva de fenitoína durante 30 días' },
          { id: 'E', text: 'Hipotensión arterial forzada con nitroprusiato para PAS < 90 mmHg' }
        ],
        correcta: 'B',
        explicacion: 'El resangrado aneurismático es la complicación precoz más letal de la HSA (mortalidad > 70-80%), concentrándose su máxima frecuencia en las primeras 24 horas del evento inicial. La intervención prioritaria y fundamental para prevenir el resangrado es la exclusión definitiva del saco aneurismático de la circulación cerebral, ya sea mediante embolización endovascular con coils o mediante clipaje microquirúrgico, lo cual debe realizarse con máxima urgencia dentro de las primeras 24 a 72 horas del ingreso.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.004'
      }
    ]
  },

  // ==========================================================================
  // TEMA 10.5: TROMBOSIS VENOSA CEREBRAL (TVC) (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'neuro-05',
    classId: 'neuro-05',
    tier: 2,
    blockNum: 1,
    blockName: 'Enfermedad Cerebrovascular y Urgencias Neurovasculares',
    topicLabel: '10.5',
    title: 'Trombosis Venosa Cerebral: Factores Protrombóticos, Sospecha Clínica, Neuroimagen y Anticoagulación Plena',
    perfilCode: '1.10.2.005',
    dx: 'Sospecha',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Derivación Inmediata de Urgencia a Neurología y Unidad de Pacientes Críticos (UPC) para confirmación por Angio-RM/Angio-TAC y tratamiento anticoagulante parenteral monitorizado.',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Alta · Caso clásico de mujer joven en edad fértil con cefalea progresiva, convulsiones e infarto hemorrágico parasagital atípico',
    svg: null,
    algoTitle: 'Algoritmo Diagnóstico y Decisión de Anticoagulación Plena en Trombosis Venosa Cerebral',
    diagram: flow('Sospecha, Neuroimagen y Manejo de la Trombosis Venosa Cerebral', [
      { t: 'Sospecha de TVC (Mujer joven + Anticonceptivos / Puerperio / Trombofilia)', s: 'Cefalea progresiva que empeora en decúbito · Papiledema · Convulsiones · Déficit focal fluctuante', type: 'acc' },
      { t: 'Estudio de Neuroimagen Vascular Urgente', s: 'TAC sin contraste: normal en 30% o signo de la cuerda · Examen de Elección: Angio-RM venosa o AngioTAC', type: 'warn' },
      { k: 'split', q: '¿Confirmación de Oclusión de Seno Venoso o Infarto Venoso?', s: 'Signo del delta vacío (empty delta sign) o ausencia de señal de flujo venoso en secuencias TOF',
        ll: 'Infarto Venoso sin Hemorragia',
        left: { t: 'Anticoagulación Parenteral Plena Inmediata', s: 'Heparina de Bajo Peso Molecular (Enoxaparina 1 mg/kg c/12h SC)', type: 'crit' },
        rl: 'Infarto Venoso con Transformación Hemorrágica',
        right: { t: 'Anticoagulación Parenteral Plena Inmediata (REGLA DE ORO)', s: 'NO contraindica la heparina · Tratar la hipertensión venosa retrograda subyacente', type: 'crit' }
      },
      { t: 'Manejo de Complicaciones y Transición a Anticoagulación Oral', s: 'Anticonvulsivantes si crisis · Control de hipertensión endocraneana · Transición a Warfarina/DOAC por 3-12 meses', type: 'acc' }
    ]),
    contexto: 'La trombosis venosa cerebral (TVC) es un subtipo infrecuente pero grave de enfermedad cerebrovascular que afecta predominantemente a mujeres jóvenes en edad fértil bajo factores protrombóticos transitorios (anticonceptivos orales, embarazo, puerperio). Su presentación clínica es engañosa: cefalea progresiva, signos de hipertensión endocraneana y convulsiones. La regla de oro del EUNACOM es categórica: el tratamiento de elección es la anticoagulación plena inmediata con heparina, la cual está formalmente indicada incluso cuando el infarto venoso presenta transformación hemorrágica petequial o lobar.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Anatomía Venosa Cerebral',
        paragraphs: [
          'La trombosis oclusión de los senos venosos durales intracraneales (seno sagital superior 60%, seno transverso/sigmoideo 40%, seno recto, venas corticales o venas cerebrales profundas) desencadena dos mecanismos fisiopatológicos simultáneos:',
          '1. <strong>Hipertensión venosa y capilar retrógrada:</strong> Al ocluirse el drenaje venoso cerebral, la presión retrógrada en los lechos capilares aumenta exponencialmente, provocando reducción de la presión de perfusión tisular, edema cerebral vasogénico y citotóxico, e <strong>infarto venoso</strong>. La elevada presión capilar genera ruptura de vénulas postcapilares, resultando en una <strong>frecuente transformación hemorrágica</strong> característica con hematomas bilaterales parasagitales o lesiones que no respetan territorios arteriales anatómicos.',
          '2. <strong>Alteración de la reabsorción de LCR:</strong> La oclusión del seno sagital superior obstruye directamente las vellosidades aracnoideas de Pacchioni encargadas de reabsorber el LCR hacia el sistema venoso, produciendo un <strong>síndrome de hipertensión endocraneana aislada</strong> sin dilatación ventricular evidente (pseudotumor-like).'
        ]
      },
      {
        subhead: '2. Factores Protrombóticos y Etiologías EUNACOM',
        paragraphs: [
          'A diferencia del ictus arterial aterotrombótico, más del 75-80% de los pacientes con TVC son <strong>mujeres entre los 20 y 45 años</strong>.',
          '<strong>Factores de riesgo reconocidos:</strong>',
          '• <strong>Estados hormonales protrombóticos:</strong> Consumo de <strong>anticonceptivos orales combinados (ACO)</strong> o terapia de reemplazo hormonal (riesgo relativo multiplicado por 6 a 10), <strong>embarazo</strong> y de forma especialmente crítica el <strong>puerperio inmediato</strong> (máximo riesgo en las primeras 6 semanas postparto).',
          '• <strong>Trombofilias congénitas y adquiridas:</strong> Mutación del Factor V Leiden, mutación G20210A de la protrombina, déficit congénito de proteína C, proteína S o antitrombina III, hiperhomocisteinemia y <strong>Síndrome Antifosfolípidos (SAF)</strong>.',
          '• <strong>Enfermedades inflamatorias y hematológicas:</strong> Lupus eritematoso sistémico, enfermedad de Behçet, neoplasias hematológicas, hemoglobinuria paroxística nocturna, anemia de células falciformes y policitemia vera.',
          '• <strong>Causas infecciosas locales (Trombosis séptica):</strong> Extensión directa por contigüidad desde focos parameníngeos: mastoiditis u otitis media supurada complicada (trombosis del seno transverso y sigmoideo) o celulitis facial, forúnculo nasal y sinusitis etmoidal/esfenoidal complicada (trombosis séptica del <strong>seno cavernoso</strong>).'
        ]
      },
      {
        subhead: '3. Presentación Clínica, Banderas Rojas y Neuroimagen de Elección',
        paragraphs: [
          'La clínica de la TVC es marcadamente pleomórfica y subaguda, desarrollándose frecuentemente a lo largo de varios días:',
          '• <strong>Cefalea (síntoma presente en &gt; 90%):</strong> Cefalea holocránea opresiva o gravativa, progresiva, de intensidad creciente y rebelde a analgésicos convencionales, que <em>empeora con el decúbito supino, en la madrugada y con maniobras de Valsalva</em>. Puede ser hiperaguda en trueno en un 10% de casos.',
          '• <strong>Síndrome de Hipertensión Endocraneana:</strong> Cefalea, náuseas, vómitos explosivos matinales, oscurecimientos visuales transitorios y <strong>papiledema bilateral en el fondo de ojo</strong>.',
          '• <strong>Crisis convulsivas (35-40%):</strong> Focales motoras (con o sin marcha jacksoniana) o crisis generalizadas secundarias. Su frecuencia es muy superior a la observada en los infartos arteriales debido a la irritación cortical por estasis venosa y microhemorragias.',
          '• <strong>Déficit focal neurológico fluctuante:</strong> Paresias unilaterales o paraparesia (en trombosis parasagital bilateral del seno sagital superior), afasia o compromiso fluctuante de conciencia.',
          '• <em>Trombosis del Seno Cavernoso:</em> Oftalmoplejia dolorosa (parálisis de pares III, IV y VI), quemosis conjuntival marcada, proptosis ocular pulsátil, dolor periorbitario y parestesias en territorio de las ramas V1 y V2 del trigémino.',
          '<strong>Neuroimagen diagnóstica:</strong>',
          '• <em>TAC de encéfalo sin contraste:</em> Puede ser <strong>normal en el 25-30% de los casos</strong>. Puede evidenciar el <em>signo de la cuerda o cordón hiperdenso</em> (trombo fresco hiperdenso en una vena cortical o en el seno sagital) o infartos venosos con edema vasogénico y hemorragias petequiales.',
          '• <em>TAC con contraste venoso:</em> Clásico <strong>signo del delta vacío (empty delta sign)</strong> en el tercio posterior del seno sagital superior: defecto de llenado triangular central hipodenso correspondiente al trombo, rodeado por el realce de contraste de las paredes durales.',
          '• <strong>Examen de Elección (Gold Standard no invasivo): Angio-Resonancia Magnética venosa (Angio-RM con secuencia de tiempo de vuelo venoso TOF)</strong> o AngioTAC en fase venosa. Demuestra la falta de señal de flujo en el seno trombosado y visualiza directamente el trombo intravascular.'
        ]
      },
      {
        subhead: '4. Tratamiento: La Regla de Oro de la Anticoagulación Plena',
        paragraphs: [
          '<strong>Regla de Oro Inviolable EUNACOM:</strong> El pilar terapéutico fundamental y mandatorio de la TVC es la <strong>Anticoagulación Parenteral Plena Inmediata</strong>, independientemente de la presencia de infartos hemorrágicos cerebrales preexistentes.',
          '<strong>Fármaco de primera línea: Heparina de Bajo Peso Molecular (HBPM: Enoxaparina 1 mg/kg cada 12 horas vía subcutánea)</strong> en dosis terapéuticas completas. Ha demostrado ser superior a la Heparina no Fraccionada (HNF) en eficacia, menor tasa de mortalidad y menor riesgo de sangrado mayor (la HNF se reserva si se anticipa una cirugía descompresiva urgente o falla renal severa con ClCr &lt; 30 mL/min).',
          '<em>Justificación biológica de la regla de oro:</em> El sangrado cerebral en la TVC no es producido por fragilidad vascular intrínseca sino por la hipertensión venosa retrógrada debida al obstáculo mecánico del trombo. Anticoagular recanaliza el seno venoso, desobstruye el flujo, disminuye la presión retrógrada y previene activamente la extensión de la isquemia y de la propia hemorragia. Suspender o diferir la heparina por miedo a la hemorragia es un grave error de práctica médica.',
          '<strong>Manejo de mantención y duración de la anticoagulación oral:</strong>',
          '• Tras la fase aguda con heparina se realiza transición a anticoagulación oral con Antagonistas de Vitamina K (Acenocumarol o Warfarina con meta de INR 2.0 a 3.0) o DOACs (Dabigatrán, Rivaroxabán).',
          '• <em>Duración:</em> <strong>3 a 6 meses</strong> si el evento fue provocado por un factor transitorio reversible (ACOs, embarazo, puerperio); <strong>6 a 12 meses</strong> en trombosis idiopáticas o trombofilias leves; e <strong>indefinida</strong> ante trombofilias mayores severas (SAF, déficit homocigoto de proteína C/S o eventos trombóticos recurrentes).',
          '• Manejo de crisis convulsivas: Fármacos anticonvulsivantes (Levetiracetam) indicados si el paciente presentó al menos una convulsión. No se recomienda profilaxis en pacientes sin crisis.',
          '• En hipertensión endocraneana severa refractaria: Acetazolamida, punción lumbar evacuadora o craniectomía descompresiva de rescate en infartos venosos masivos.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Trombosis Venosa Cerebral vs ACV Isquémico Arterial vs Hipertensión Intracraneal Idiopática',
      headers: ['Característica Clínica / Diagnóstica', 'Trombosis Venosa Cerebral (TVC)', 'ACV Isquémico Arterial Clásico', 'Hipertensión Intracraneal Idiopática (Pseudotumor)'],
      rows: [
        ['Perfil Epidemiológico Típico', 'Mujer joven (20 – 45 años) con ACO, puerperio, embarazo o SAF', 'Adulto mayor (> 60 años) con factores aterotrombóticos (HTA, DM, FA, tabaquismo)', 'Mujer joven con obesidad o sobrepeso, sin factores trombóticos específicos'],
        ['Forma de Instalación Temporal', 'Progresiva y subaguda (días a semanas); cefalea insidiosa en crescendo', 'Súbita e hiperaguda (segundos a minutos); déficit máximo desde el inicio', 'Crónica y progresiva (semanas a meses); cefalea matinal continua'],
        ['Síntomas Cardinales Asociados', 'Cefalea gravativa que empeora en decúbito supino + Papiledema + Convulsiones (40%)', 'Déficit focal motor/sensitivo estricto a un territorio arterial · Convulsiones infrecuentes (< 5%)', 'Cefalea + Papiledema bilateral + Tinnitus pulsátil · SIN déficit focal (salvo paresia del VI par)'],
        ['Hallazgos en Neuroimagen', 'Signo del delta vacío en AngioTAC venoso · Ausencia de flujo en Angio-RM · Infartos hemorrágicos atípicos', 'Hipodensidad delimitada estrictamente a territorio vascular arterial (ACM, ACA, ACP)', 'Ventrículos pequeños, silla turca vacía, distensión de vainas del nervio óptico · Senos venosos permeables'],
        ['Tratamiento de Elección Inmediato', 'Anticoagulación parenteral plena (HBPM Enoxaparina 1 mg/kg c/12h SC) obligatoria', 'Reperfusión (Trombolisis IV si ≤ 4.5 h / Trombectomía si ≤ 24 h) o Antiagregación', 'Punción lumbar evacuadora diagnóstica/terapéutica · Acetazolamida · Pérdida ponderal']
      ]
    },
    vignette: 'Mujer de 29 años, en su cuarto día de puerperio tras un parto eutócico sin incidentes, con antecedente de uso prolongado de anticonceptivos orales combinados hasta el embarazo. Consulta en urgencias por cuadro de 4 días de evolución caracterizado por cefalea holocránea intensa de curso progresivo, que empeora al acostarse boca arriba y al toser, asociada a náuseas y dos episodios de vómitos matinales. En las últimas 12 horas su familia nota que ha presentado tres crisis convulsivas focales motoras en el brazo derecho con posterior generalización tónico-clónica. Al examen neurológico de ingreso: somnolienta, orientada parcialmente en persona pero desorientada en tiempo, fondo de ojo con borramiento de los márgenes papilares bilateral compatible con papiledema agudo y leve hemiparesia braquial derecha con hiperreflexia. El TAC de encéfalo sin contraste muestra una lesión hipodensa temporoparietal izquierda con focos hiperdensos petequiales intralesionales que no respeta un territorio vascular arterial clásico.',
    explicacion: 'El cuadro clínico corresponde a una Trombosis Venosa Cerebral (específicamente del seno sagital superior y venas corticales asociadas) complicada con un infarto venoso con transformación hemorrágica secundaria. La paciente presenta múltiples factores protrombóticos concomitantes (puerperio inmediato, historia de anticonceptivos orales), cefalea progresiva con signos de hipertensión endocraneana (empeoramiento en decúbito, vómitos matinales, papiledema) y crisis epilépticas focales de reciente inicio. La presencia de sangre o hemorragia en la neuroimagen representa la ruptura de vénulas por hipertensión capilar retrógrada debida al bloqueo del drenaje venoso. La conducta terapéutica obligatoria, inmediata e inaplazable es iniciar anticoagulación parenteral plena con Heparina de Bajo Peso Molecular (Enoxaparina 1 mg/kg cada 12 horas vía subcutánea), asociar un fármaco anticonvulsivante de acción rápida (Levetiracetam EV) e ingresar a una Unidad de Pacientes Críticos (UPC) con monitorización neurológica continua. Suspender o demorar la anticoagulación por temor a la hemorragia petequial agrava el estasis venoso y desencadena daño cerebral masivo irreversible.',
    keyPoints: [
      'La trombosis venosa cerebral afecta con mayor frecuencia a mujeres jóvenes en edad fértil con factores protrombóticos (ACO, puerperio, embarazo, SAF).',
      'La cefalea es el síntoma cardinal en más del 90% de los casos: típicamente progresiva, rebelde a analgésicos y empeora en decúbito supino.',
      'Las crisis convulsivas (focales o generalizadas) ocurren en el 35-40% de los pacientes, una frecuencia sustancialmente mayor que en el ACV isquémico arterial.',
      'El examen diagnóstico de elección no invasivo es la Angio-Resonancia Magnética venosa (secuencia TOF venosa) o la AngioTAC en fase venosa.',
      'El signo del delta vacío en el TAC contrastado corresponde al trombo intraluminal rodeado de realce dural en el seno sagital superior.',
      'Regla de Oro EUNACOM: El tratamiento de elección es la Anticoagulación Plena Inmediata con Heparina de Bajo Peso Molecular (Enoxaparina 1 mg/kg c/12h SC).',
      'La transformación hemorrágica de un infarto venoso NO contraindica la heparina: alivia la hipertensión venosa capilar y frena el sangrado.',
      'La anticoagulación oral de mantención se mantiene por 3 a 6 meses en causas provocadas por factores reversibles y de forma indefinida en SAF o trombofilias mayores.'
    ],
    questions: [
      {
        stem: 'Mujer de 31 años, usuaria de anticonceptivos orales combinados por 8 años, consulta por cefalea holocránea severa de 5 días de evolución que no ha respondido a AINEs comunes, asociada a vómitos matinales. Hoy presentó una crisis convulsiva tónico-clónica generalizada de 2 minutos de duración. Al examen neurológico se encuentra somnolienta, con papiledema bilateral en el fondo de ojo y leve debilidad braquiocrural derecha. El TAC de cerebro sin contraste no muestra hematomas ni infartos definidos. ¿Cuál es el examen confirmatorio de elección más apropiado para confirmar la sospecha diagnóstica?',
        options: [
          { id: 'A', text: 'Punción lumbar urgente con manometría de apertura' },
          { id: 'B', text: 'Angio-Resonancia Magnética cerebral en fase venosa (Angio-RM venosa)' },
          { id: 'C', text: 'Electroencefalograma de 24 horas con privación de sueño' },
          { id: 'D', text: 'Doppler transcraneal de arterias cerebrales medias' },
          { id: 'E', text: 'Radiografía de cráneo simple en proyecciones anteroposterior y lateral' }
        ],
        correcta: 'B',
        explicacion: 'En una mujer joven con factores de riesgo protrombóticos (anticonceptivos orales) que presenta cefalea con signos de hipertensión endocraneana (papiledema bilateral), crisis convulsiva y TAC sin contraste sin lesiones evidentes, la principal sospecha diagnóstica es una Trombosis Venosa Cerebral (TVC). El TAC simple es normal en hasta el 30% de los casos. El método confirmatorio de elección (gold standard no invasivo) es la Angio-Resonancia Magnética con secuencias venosas (TOF venoso) o AngioTAC venoso, que permite visualizar directamente el defecto de repleción y la ausencia de flujo sanguíneo en el seno venoso dural trombosado.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.005'
      },
      {
        stem: 'Se confirma el diagnóstico de trombosis del seno sagital superior en una mujer de 26 años puérpera de 2 semanas. La resonancia magnética cerebral muestra una zona de infarto venoso parasagital con un componente hemorrágico intraparenquimatoso petequial de 15 mL asociado. ¿Cuál es la conducta terapéutica farmacológica indicada de forma inmediata?',
        options: [
          { id: 'A', text: 'Suspender todo anticoagulante y administrar Ácido Tranexámico para cohibir el sangrado' },
          { id: 'B', text: 'Iniciar anticoagulación parenteral plena de inmediato con Heparina de Bajo Peso Molecular (Enoxaparina)' },
          { id: 'C', text: 'Indicar tratamiento exclusivo con Ácido Acetilsalicílico 100 mg al día' },
          { id: 'D', text: 'Iniciar infusión de Manitol al 15% y diferir la anticoagulación hasta que el hematoma reabsorba por completo' },
          { id: 'E', text: 'Indicar reposo absoluto y analgesia con Paracetamol, contraindicando cualquier terapia heparínica' }
        ],
        correcta: 'B',
        explicacion: 'Esta situación clínica constituye una de las reglas de oro más evaluadas en el EUNACOM: la presencia de un infarto venoso con transformación hemorrágica NO es una contraindicación para la anticoagulación en la Trombosis Venosa Cerebral, sino que ratifica la necesidad urgente de iniciarla. El sangrado en la TVC se origina por hipertensión venosa retrógrada debida al drenaje ocluido. La administración de Heparina de Bajo Peso Molecular (Enoxaparina 1 mg/kg cada 12 horas SC) desobstruye los vasos colaterales, reduce la presión venosa capilar y previene activamente tanto la progresión del infarto como la expansión de la hemorragia.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.005'
      }
    ]
  }
];

module.exports = {
  bloque1,
  flow,
  bloque1Classes: bloque1,
};
