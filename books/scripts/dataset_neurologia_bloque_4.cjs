// ============================================================================
// BLOQUE 04 NEUROLOGÍA: PATOLOGÍA NEUROMUSCULAR, DESMIELINIZANTE Y NERVIO PERIFÉRICO
// Manual EUNACOM 2026 · Tomo 10 Neurología & Geriatría (Accent color: #6d28d9 - Púrpura)
// 5 Temas Curriculares (10.16 a 10.20) · Cobertura 100% Perfil V3 & Garantías GES
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

const bloque4 = [
  // ==========================================================================
  // TEMA 10.16: SÍNDROME DE GUILLAIN-BARRÉ (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'neuro-16',
    classId: 'neuro-16',
    tier: 3,
    blockNum: 4,
    blockName: 'Patología Neuromuscular, Desmielinizante y Nervio Periférico',
    topicLabel: '10.16',
    title: 'Síndrome de Guillain-Barré: Polirradiculoneuropatía Aguda, Albúmino-citológico y Manejo Intensivo',
    perfilCode: '1.10.2.013',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Manejo en Unidad de Paciente Crítico (UPC) bajo Ley de Urgencia y garantías de medicina intensiva · Cobertura hospitalaria de soporte vital e inmunoterapia de alto costo (Inmunoglobulina Humana EV / Plasmaféresis).',
    reconstrucciones: 'EUNACOM Julio 2024 (Q#86) · EUNACOM Julio 2019 (Q#85) · EUNACOM Diciembre 2018 (Q#23) · EUNACOM Julio 2016 (Q#170)',
    frecuencia: 'Máxima rentabilidad · Pregunta angular de urgencias neurológicas y medicina intensiva',
    svg: null,
    algoTitle: 'Algoritmo de Manejo Integral y Soporte Ventilatorio en Síndrome de Guillain-Barré',
    diagram: flow('Algoritmo de Manejo Integral y Soporte Ventilatorio en Síndrome de Guillain-Barré', [
      { t: 'Sospecha Clínica de SGB (Debilidad motora aguda simétrica ascendente + Arreflexia)', s: 'Antecedente infeccioso respiratorio o gastrointestinal previo (1-4 sem) · Parestesias distales en calcetín/guante', type: 'acc' },
      { t: 'Evaluación Inmediata de Riesgo Vital y Vía Aérea (Regla 20/30/40)', s: 'Capacidad vital forzada (CVF) · Presión inspiratoria máxima (PImáx) · Frecuencia respiratoria y mecánica torácica', type: 'warn' },
      { k: 'split', q: '¿Criterios de Falla Respiratoria Inminente o Disautonomía Grave?', s: 'CVF < 20 mL/kg, PImáx < -30 cmH2O, taquicardia/bradicardia lábil, parálisis bulbar con disfagia',
        ll: 'Falla ventilatoria / bulbar inminente',
        left: { t: 'Intubación Orotraqueal Electiva en UCI', s: '¡CONTRAINDICADA Succinilcolina (paro por hiperkalemia)! · Ventilación mecánica protectora', type: 'crit' },
        rl: 'Ventilación preservada (CVF > 20 mL/kg)',
        right: { t: 'Ingreso Monitorizado a UPC / Intermedio', s: 'Espirometría / CVF a pie de cama c/4-6 h · Telemetría cardíaca y control tensional continuo', type: 'dec' }
      },
      { t: 'Confirmación Diagnóstica: Punción Lumbar y Estudio Electrofisiológico (EMG/VCN)', s: 'LCR: Disociación albúmino-citológica (hiperproteinorraquia > 45 mg/dL con < 10-50 leucocitos/μL) · Latencias F prolongadas', type: 'acc' },
      { k: 'split', q: 'Inmunoterapia Específica Temprana (Dentro de las primeras 2 a 4 semanas)', s: 'Eficacia terapéutica equivalente · Seleccionar según disponibilidad, comorbilidades y accesibilidad vascular',
        ll: 'Opción 1: Inmunoglobulina EV (IgEV)',
        left: { t: 'IgEV: 0.4 g/kg/día por 5 días (total 2 g/kg)', s: 'Infusión periférica · Vigilancia de anafilaxia en déficit de IgA y sobrecarga de volumen', type: 'acc' },
        rl: 'Opción 2: Plasmaféresis Terapéutica (PE)',
        right: { t: 'Plasmaféresis: 200-250 mL/kg en 4-5 sesiones', s: 'Días alternos con albúmina al 5% · Requiere acceso venoso central rígido de alto flujo', type: 'acc' }
      },
      { t: '¡ADVERTENCIA CRÍTICA EUNACOM: CONTRAINDICACIÓN DE CORTICOIDES!', s: 'Metilprednisolona y prednisona NO aportan beneficio y retrasan la regeneración axonal · NUNCA administrar corticoides', type: 'crit' },
      { t: 'Soporte y Prevención de Complicaciones', s: 'Profilaxis TVP con HBPM · Manejo del dolor neuropático (gabapentina/pregabalina) · Fisioterapia motora precoz', type: 'acc' }
    ]),
    contexto: 'El Síndrome de Guillain-Barré (SGB) es una polirradiculoneuropatía aguda inflamatoria autoinmune que representa la causa más frecuente de parálisis flácida aguda en el adulto y una emergencia médica tiempo-dependiente. Su fisiopatología radica en un mimetismo molecular post-infeccioso (habitualmente tras gastroenteritis por Campylobacter jejuni o infecciones respiratorias virales) donde autoanticuerpos atacan gangliósidos y mielina de raíces nerviosas y nervios periféricos. El sello clínico cardinal es la debilidad muscular bilateral y simétrica, de progresión ascendente, acompañada invariablemente de arreflexia osteotendinosa universal. Hasta un 30% de los pacientes desarrolla insuficiencia respiratoria aguda neuromuscular por paresia diafragmática y de la musculatura intercostal, requiriendo intubación orotraqueal electiva y soporte en UPC. El diagnóstico se confirma mediante disociación albúmino-citológica en el líquido cefalorraquídeo y electromiografía. El tratamiento inmunomodulador de elección es la Inmunoglobulina Humana EV (0.4 g/kg/día por 5 días) o la Plasmaféresis en sesiones alternas (ambas de igual eficacia); los corticoides están formalmente contraindicados.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Mimetismo Molecular y Desencadenantes Infecciosos',
        paragraphs: [
          'El Síndrome de Guillain-Barré es prototipo de enfermedad autoinmune desencadenada por <strong>mimetismo molecular</strong> entre antígenos microbianos y estructuras de la membrana axonal o mielínica de los nervios periféricos humanos. Aproximadamente el 70% de los pacientes relata el antecedente de una infección aguda en las 1 a 4 semanas previas. El agente etiológico más común y de peor pronóstico funcional es <strong>Campylobacter jejuni</strong> (asociado a enteritis invasiva y generación de anticuerpos contra gangliósidos GM1, GD1a y GQ1b). Otros agentes frecuentemente identificados incluyen <strong>Citomegalovirus (CMV)</strong>, <strong>Virus de Epstein-Barr (EBV)</strong>, <em>Mycoplasma pneumoniae</em>, <strong>Virus Zika</strong>, virus de influenza y SARS-CoV-2.',
          'La interacción entre los lipooligosacáridos de la cápsula de <em>Campylobacter jejuni</em> y los gangliósidos de los nódulos de Ranvier induce la producción de autoanticuerpos cruzados y la activación del complemento. En la variante desmielinizante clásica (AIDP), los macrófagos y el complejo de ataque a la membrana (MAC) invaden la vaina de mielina de las raíces ventrales y troncos nerviosos motores y sensitivos, provocando bloqueo de la conducción saltatoria y dispersión temporal del potencial de acción. En las variantes axonales (AMAN y AMSAN), el daño se concentra directamente en la membrana axonal en los nódulos de Ranvier, causando degeneración walleriana precoz con recuperación lenta y secuelas neurológicas más pronunciadas.'
        ]
      },
      {
        subhead: '2. Presentación Clínica, Criterios de Asbury y Variantes Clínicas',
        paragraphs: [
          'El cuadro clínico cardinal inicia de forma subaguda con parestesias y disestesias distales en pies y manos ("en calcetín y en guante"), seguidas rápidamente por <strong>debilidad motora flácida, bilateral y relativamente simétrica, de curso típicamente ascendente</strong>: comienza en las extremidades inferiores (dificultad para levantarse de una silla o subir escaleras) y progresa en días hacia las extremidades superiores, musculatura axial, tronco y musculatura inervada por pares craneales (véase Algoritmo 10.16). La progresión alcanza su nadir clínico habitualmente a las 2 a 4 semanas desde el inicio.',
          'El hallazgo físico más constante, patognomónico y obligatorio según los <strong>Criterios Diagnósticos de Asbury</strong> es la <strong>hiporreflexia o arreflexia osteotendinosa profunda generalizada</strong> (véase Tabla 10.16.1). La presencia de reflejos vivos descarta prácticamente el diagnóstico de SGB y obliga a sospechar compresión medular aguda o mielitis transversa.',
          'El <strong>compromiso de pares craneales</strong> ocurre en más del 50% de los casos, siendo la <strong>parálisis facial bilateral (diplejía facial)</strong> la manifestación más común. La afectación de pares bulbares (IX, X, XII) genera disfagia, disartria, acumulación de secreciones faríngeas e incompetencia laríngea con riesgo inminente de broncoaspiración masiva.',
          'La <strong>disautonomía autonómica</strong> ocurre en hasta el 65% de los pacientes graves: se manifiesta por fluctuaciones tensionales erráticas (episodios alternantes de hipertensión severa e hipotensión ortostática refractaria), taquicardia sinusal persistente, bradiarritmias sinusales bruscas e incluso asistolia paroxística por hiperreactividad vagal, así como íleo paralítico y retención urinaria aguda. El dolor neuropático radicular y lumbar sordo o urente es extraordinariamente prevalente (hasta 80%) y a menudo precede a la debilidad muscular.'
        ]
      },
      {
        subhead: '3. Criterios de Monitoreo Respiratorio e Indicaciones de UCI (Regla 20/30/40)',
        paragraphs: [
          'La complicación más temida del SGB es la <strong>falla respiratoria aguda neuromuscular</strong>, responsable de la gran mayoría de los ingresos a UCI y de la mortalidad intrahospitalaria. La debilidad del diafragma (nervio frénico C3-C5) y de los músculos intercostales produce hipoventilación alveolar progresiva con atelectasias basales e hipercapnia. A diferencia de las neumopatías parenquimatosas, la taquipnea inicial no se acompaña de sibilancias ni crepitaciones, y la oximetría de pulso suele ser engañosamente normal hasta fases terminales de claudicación diafragmática.',
          'Es mandatorio el monitoreo estricto de la mecánica ventilatoria a pie de cama cada 4 a 6 horas mediante la <strong>Regla 20/30/40</strong> (véase Tabla 10.16.2: Criterios de Ingreso a UCI e Intubación): <strong>1) Capacidad Vital Forzada (CVF) &lt; 20 mL/kg</strong> (o disminución &gt; 30% en 24 horas); <strong>2) Presión Inspiratoria Máxima (PImáx / NIF) &lt; -30 cmH2O</strong> (incapacidad para generar presión subatmosférica suficiente para insuflar los pulmones); y <strong>3) Presión Espiratoria Máxima (PEmáx) &lt; 40 cmH2O</strong> (tos inefectiva e incapacidad para movilizar secreciones bronquiales).',
          'En centros que no disponen de espirometría de cabecera, la prueba clínica del <strong>conteo en una sola espiración (single breath count)</strong> es un indicador semiológico invaluable: un paciente incapaz de contar en voz alta hasta 20 tras una inspiración profunda presenta una CVF &lt; 15-20 mL/kg y debe ser trasladado de urgencia a una Unidad de Paciente Crítico para <strong>intubación orotraqueal electiva</strong> antes de que se presente hipoxemia o colapso respiratorio catastrófico.',
          '<em>Precaución farmacológica crítica en intubación:</em> Está <strong>ESTRICTAMENTE CONTRAINDICADA la Succinilcolina</strong> como relajante neuromuscular para la intubación en el SGB. La denervación aguda produce hipersensibilidad por proliferación de receptores de acetilcolina extraneurales en toda la superficie sarcolémica, desencadenando una salida masiva e instantánea de potasio con hiperkalemia maligna fulminante, arritmias ventriculares y asistolia intraprocedimiento. El agente de elección para secuencia rápida es <strong>Rocuronio 1.2 mg/kg</strong>.'
        ]
      },
      {
        subhead: '4. Diagnóstico Paraclínico: Líquido Cefalorraquídeo y Estudio Electrofisiológico',
        paragraphs: [
          'La confirmación diagnóstica requiere dos estudios complementarios cardinales:',
          '• <strong>Punción Lumbar y Estudio de LCR:</strong> El hallazgo clásico es la <strong>disociación albúmino-citológica</strong>, definida por la presencia de <strong>hiperproteinorraquia marcada (&gt; 45 mg/dL, alcanzando a menudo 100 a 400 mg/dL) con un recuento leucocitario rigurosamente normal o mínimamente elevado (&lt; 10 a 50 células mononucleares/μL)</strong>. <em>Perla EUNACOM:</em> En la primera semana de síntomas, las proteínas del LCR pueden ser completamente normales hasta en el 30-50% de los pacientes; la disociación albúmino-citológica típica se hace evidente y alcanza su máxima sensibilidad a partir del día 7 a 14. Un LCR inicial normal NO descarta SGB. Si el LCR muestra pleocitosis &gt; 50 células/μL, deben investigarse obligatoriamente diagnósticos alternativos como infección por VIH, enfermedad de Lyme, poliomielitis o meningitis carcinomatosa.',
          '• <strong>Electromiografía y Velocidades de Conducción Nerviosa (EMG/VCN):</strong> Permite confirmar la neuropatía motora y sensitiva periférica y clasificar el subtipo fisiopatológico (desmielinizante vs axonal). El signo electrofisiológico más temprano (primeros días) es la <strong>prolongación o ausencia de la onda F</strong> (que refleja el retraso en la conducción a través de las raíces nerviosas ventrales proximales) y la prolongación de la latencia motora distal. Conforme avanza el cuadro, se evidencian bloqueo de conducción motora, dispersión temporal y enlentecimiento severo de las velocidades de conducción (&lt; 70-80% del límite inferior normal).'
        ]
      },
      {
        subhead: '5. Inmunoterapia Específica y Manejo Médico de Soporte en UPC',
        paragraphs: [
          'El tratamiento modificador de la enfermedad debe iniciarse de forma precoz (idealmente dentro de las primeras 2 semanas y hasta las 4 semanas desde el inicio de la debilidad motora) en todo paciente con marcha alterada, progresión rápida o insuficiencia respiratoria (véase Tabla 10.16.3: Protocolo Terapéutico en SGB). Existen dos alternativas de <strong>idéntica eficacia clínica probada</strong>:',
          '• <strong>Inmunoglobulina Humana Endovenosa (IgEV):</strong> Administrada a dosis de <strong>0.4 g/kg/día por vía intravenosa durante 5 días consecutivos (dosis acumulada total de 2 g/kg)</strong>. Neutraliza autoanticuerpos patógenos, bloquea receptores Fc macrofágicos y modula la cascada del complemento. Es el tratamiento de primera línea más ampliamente utilizado debido a su facilidad técnica de administración por vía venosa periférica o central convencional y su excelente perfil de tolerancia hemodinámica.',
          '• <strong>Plasmaféresis Terapéutica (Recambio Plasmático):</strong> Consiste en el intercambio de <strong>200 a 250 mL/kg de plasma (generalmente 4 a 5 sesiones en días alternos durante 7 a 10 días)</strong>, sustituyendo el volumen plasmático por albúmina al 5% o solución salina balanceada. Remueve físicamente autoanticuerpos circulantes y factores inflamatorios. Requiere la colocación de un catéter venoso central rígido de alto flujo (tipo catéter de hemodiálisis) y equipo especializado de aféresis.',
          '<em>Principios terapéuticos inviolables en el examen:</em> <strong>1) NO combinar IgEV y plasmaféresis de forma concomitante ni consecutiva</strong>: los ensayos clínicos demostraron que combinar ambas modalidades no confiere beneficio terapéutico adicional y duplica la tasa de complicaciones e infecciones nosocomiales; y <strong>2) Los CORTICOIDES (metilprednisolona, prednisona oral o dexametasona) ESTÁN FORMALMENTE CONTRAINDICADOS COMO MONOTERAPIA EN SGB</strong>. Múltiples ensayos clínicos aleatorizados demostraron que los corticoides no aceleran la recuperación, no previenen la ventilación mecánica y, por el contrario, retrasan la recuperación motora y la reinervación axonal al inhibir la reparación glial endógena.'
        ]
      }
    ],
    table: {
      title: 'Criterios de Asbury y Variantes Clínicas del Síndrome de Guillain-Barré',
      headers: ['Subtipo / Variante', 'Mecanismo Patológico y Anticuerpos', 'Cuadro Clínico Distintivo', 'Hallazgos Neurofisiológicos'],
      rows: [
        ['AIDP (Polirradiculoneuropatía Desmielinizante Aguda)', 'Ataque a vaina de mielina de raíces y troncos · Células T y macrófagos (> 85-90% en Occidente)', 'Debilidad motora simétrica ascendente + Parestesias distales · Parálisis facial bilateral en 50% · Arreflexia universal', 'Enlentecimiento de VCN (< 70%), prolongación de latencias distales y ondas F ausentes/retrasadas · Dispersión temporal'],
        ['AMAN (Neuropatía Axonal Motora Aguda)', 'Ataque directo a nódulos de Ranvier motores mediado por anti-GM1 y anti-GD1a (tras C. jejuni)', 'Debilidad motora pura rápida y severa SIN alteraciones sensitivas objetivas · Arreflexia · Alta tasa de soporte ventilatorio', 'Disminución marcada de la amplitud del CMAP con velocidades de conducción conservadas · Ausencia de dispersión'],
        ['AMSAN (Neuropatía Axonal Motora y Sensitiva Aguda)', 'Degeneración axonal masiva de axones motores y sensitivos · Anticuerpos anti-GM1 / GD1a', 'Tetraparesia flácida severa + Pérdida sensitiva profunda global · Evolución fulminante y recuperación muy lenta con secuelas', 'Amplitudes de CMAP y SNAP gravemente reducidas o ausentes en todas las extremidades · Marcada denervación en agudo'],
        ['Síndrome de Miller Fisher (MFS)', 'Ataque a nervios oculomotores y husos neuromusculares · Anticuerpos patognomónicos anti-GQ1b (> 90%)', 'Tríada clásica de Miller Fisher: 1) Ataxia sensitiva/cerebelosa, 2) Arreflexia osteotendinosa, 3) Oftalmoplejía bilateral externa', 'SNAP disminuidos con conducción motora habitualmente preservada · Responde de forma óptima a IgEV o plasmaféresis'],
        ['Encefalitis de Tallo de Bickerstaff', 'Espectro común con MFS · Reactividad cruzada anti-GQ1b y anti-GM1b en formación reticular', 'Oftalmoplejía + Ataxia + Compromiso fluctuante de conciencia (letargia, estupor, coma) · Puede tener signos piramidales', 'LCR con disociación albúmino-citológica · RMN puede mostrar hiperintensidades en protuberancia/mesencéfalo'],
        ['Variante Faringo-Cérvico-Braquial', 'Compromiso focalizado de raíces bulbares y cervicales altas · Asociación con anti-GT1a', 'Ptosis, disfagia severa, paresia faríngea y debilidad marcada de cuello y hombros; extremidades inferiores respetadas', 'Conducción alterada en nervios cervicales y pares craneales inferiores · Frecuente confusión con botulismo o miastenia']
      ]
    },
    severityTable: {
      title: 'Criterios de Ingreso a UPC y Criterios de Intubación Orotraqueal en SGB',
      headers: ['Parámetro / Criterio', 'Valor Umbral de Riesgo', 'Indicación Clínica / Conducta', 'Justificación Fisiopatológica'],
      rows: [
        ['Capacidad Vital Forzada (CVF)', '< 20 mL/kg (o caída > 30% en 24 h)', 'Ingreso obligatorio a UPC / Monitorización continua', 'Volumen de reserva inspiratorio insuficiente; riesgo crítico de colapso alveolar'],
        ['Capacidad Vital Crítica', '< 15 mL/kg', 'Intubación orotraqueal electiva inmediata', 'Incapacidad absoluta para mantener ventilación alveolar espontánea; hipoventilación'],
        ['Presión Inspiratoria Máxima (PImáx / NIF)', '< -30 cmH2O (o más positiva que -20)', 'Criterio mayor de intubación orotraqueal', 'Paresia severa del diafragma e intercostales; agotamiento muscular inminente'],
        ['Presión Espiratoria Máxima (PEmáx)', '< 40 cmH2O', 'Criterio mayor de soporte invasivo / aspiración', 'Incompetencia para generar tos efectiva; retención de secreciones bronquiales y taponamiento'],
        ['Conteo en Espiración Única (Bedside test)', '< 20 números en un aliento (crítico < 15)', 'Equivalente clínico a CVF < 20 mL/kg; traslado a UCI', 'Test de cabecera rápido para centros sin espirómetro; predice intubación inminente'],
        ['Compromiso Bulbar Progresivo', 'Disfagia severa, disfonia, abolición de reflejo nauseoso', 'Intubación orotraqueal para protección de vía aérea', 'Pérdida de reflejos protectores faringolaríngeos con riesgo masivo de neumonía aspirativa'],
        ['Disautonomía Cardiovascular Severa', 'Labilidad tensional extrema, bradicardia < 40 o arritmias', 'Monitoreo invasivo con línea arterial y telemetría en UCI', 'Inestabilidad autonómica por denervación simpática/parasimpática; riesgo de paro asistólico']
      ]
    },
    treatmentTable: {
      title: 'Protocolo Terapéutico Escalonado y Cuidados Críticos en SGB',
      headers: ['Intervención / Fármaco', 'Dosis y Régimen de Administración', 'Ventajas y Consideraciones', 'Contraindicaciones y Advertencias'],
      rows: [
        ['Inmunoglobulina Humana EV (IgEV)', '0.4 g/kg/día por 5 días consecutivos (dosis total acumulada: 2.0 g/kg)', 'Primera línea preferida; fácil administración periférica sin catéter de aféresis', 'Cefalea, meningitis aséptica, nefropatía por sacarosa; contraindicada si déficit congénito de IgA'],
        ['Plasmaféresis Terapéutica (PE)', '200 a 250 mL/kg de plasma en 4-5 sesiones en días alternos durante 7-10 días', 'Igual de eficaz que IgEV; remoción directa de anticuerpos; menor costo farmacológico', 'Requiere catéter venoso central rígido tipo hemodiálisis, personal especializado; riesgo de hipotensión e hipocalcemia'],
        ['Corticoides Sistémicos (Metilprednisolona/Prednisona)', 'NO ADMINISTRAR BAJO NINGUNA CIRCUNSTANCIA EN SGB TÍPICO', 'Sin beneficio clínico en velocidad de recuperación ni necesidad de ventilación', 'FORMALMENTE CONTRAINDICADOS: aumentan eventos adversos infecciosos y retrasan la reparación nerviosa'],
        ['Profilaxis de Enfermedad Tromboembólica', 'Enoxaparina 40 mg SC cada 24 h + Medias de compresión neumática intermitente', 'Mandatoria desde el primer día en todo paciente no deambulador para prevenir TEP fatal', 'Ajustar dosis en insuficiencia renal; suspender temporalmente si punción lumbar traumática'],
        ['Analgesia Neuropática', 'Gabapentina 300-900 mg c/8 h o Pregabalina 75-150 mg c/12 h oral/SNG', 'Control del dolor radicular lumbar y en extremidades; mejora sueño y cooperación', 'Evitar dosis altas de opioides sedantes que depriman el centro respiratorio central'],
        ['Relajante para Intubación (IOT)', 'Rocuronio 1.2 mg/kg EV (Secuencia de Intubación Rápida)', 'Bloqueante neuromuscular no despolarizante seguro sin liberación de potasio', '¡SUCCINILCOLINA ESTRICTAMENTE CONTRAINDICADA!: causa hiperkalemia fulminante y paro cardíaco']
      ]
    },
    vignette: 'Hombre de 34 años, previamente sano, es traído al servicio de urgencia por debilidad progresiva de las cuatro extremidades iniciada hace 4 días. Refiere que hace dos semanas presentó un cuadro de diarrea acuosa autolimitada tras comer mariscos. Hace 4 días comenzó con sensación de hormigueo en ambos pies y dificultad para ponerse de pie. En las últimas 24 horas la debilidad progresó hasta comprometer ambos brazos y nota dificultad para masticar y deglutir sólidos. Al examen físico: PA 155/95 mmHg lábil, FC 102 lpm, afebril, lúcido. En la evaluación motora presenta tetraparesia flácida simétrica con fuerza muscular M2 en extremidades inferiores y M3 en superiores. La sensibilidad táctil y dolorosa revela hipoestesia distal en calcetín. El examen de reflejos osteotendinosos demuestra arreflexia patelar, aquiliana, bicipital y tricipital bilateral universal (0/4+). La prueba de conteo en una sola espiración alcanza solo 12 números, con leve respiración paradojal abdominal. La punción lumbar revela líquido claro con proteínas de 145 mg/dL y 2 células mononucleares/μL.',
    explicacion: 'El cuadro clínico corresponde al clásico Síndrome de Guillain-Barré (Polirradiculoneuropatía aguda desmielinizante / AIDP) gatillado por un evento entérico previo (sospecha de Campylobacter jejuni). Los elementos patognomónicos son la tetraparesia flácida simétrica ascendente, la arreflexia osteotendinosa generalizada y la disociación albúmino-citológica en el líquido cefalorraquídeo (proteínas elevadas con celularidad normal). La presencia de disfagia y un conteo en una sola espiración de 12 puntos indican insuficiencia respiratoria aguda neuromuscular inminente con fatiga diafragmática. La conducta médica inaplazable es el traslado inmediato a la Unidad de Cuidados Intensivos (UCI), intubación orotraqueal electiva (evitando succinilcolina por riesgo de paro hiperkalémico) e inicio precoz de inmunoterapia con Inmunoglobulina Humana EV a 0.4 g/kg/día por 5 días o Plasmaféresis en 5 sesiones alternas. Se debe enfatizar que los corticoides están contraindicados y no deben utilizarse.',
    keyPoints: [
      'El Síndrome de Guillain-Barré es una polirradiculoneuropatía inflamatoria aguda autoinmune desencadenada por mimetismo molecular post-infeccioso (Campylobacter jejuni, CMV, EBV).',
      'El hallazgo clínico obligatorio y más constante en el examen físico es la debilidad motora simétrica ascendente con arreflexia osteotendinosa universal (0/4+).',
      'La complicación mortal más frecuente es la falla respiratoria neuromuscular: se evalúa mediante la regla 20/30/40 (CVF < 20 mL/kg, PImáx < 30 cmH2O) o conteo espiratorio simple < 20.',
      'En caso de requerir intubación orotraqueal, la Succinilcolina está TERMINANTEMENTE CONTRAINDICADA por el riesgo de hiperkalemia masiva letal secundaria a denervación; usar Rocuronio.',
      'El estudio de LCR revela disociación albúmino-citológica (hiperproteinorraquia marcada con leucocitos normales < 10-50/μL); puede ser normal durante los primeros 7 días de síntomas.',
      'El tratamiento de elección consiste en Inmunoglobulina Humana EV (0.4 g/kg/día por 5 días) o Plasmaféresis terapéutica (4-5 sesiones en días alternos); los CORTICOIDES ESTÁN FORMALMENTE CONTRAINDICADOS.'
    ],
    questions: [
      {
        stem: '¿Qué es lo más constante en el examen físico de un paciente con una síndrome de Guillain-Barré?',
        options: [
          { id: 'A', text: 'Arreflexia' },
          { id: 'B', text: 'Hipoventilación' },
          { id: 'C', text: 'Compromiso de conciencia' },
          { id: 'D', text: 'Hipoestesia' },
          { id: 'E', text: 'Oftalmoplejia' }
        ],
        correcta: 'A',
        explicacion: 'El Síndrome de Guillain-Barré (SGB) es una polirradiculoneuropatía aguda, de origen autoinmune, que afecta principalmente a los nervios periféricos y raíces nerviosas espinales. Clínicamente se manifiesta como un síndrome de motoneurona inferior cuyos hallazgos cardinales son debilidad muscular simétrica ascendente y arreflexia o hiporreflexia osteotendinosa profunda generalizada. La interrupción de la vaina de mielina y el bloqueo de la conducción a nivel radicular anula precozmente el arco reflejo miotático. La arreflexia osteotendinosa es un criterio mandatorio según las guías clínicas y criterios de Asbury/Brighton, siendo el hallazgo semiológico más constante y fidedigno en el examen físico.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.013'
      },
      {
        stem: 'Un paciente de 34 años presenta un cuadro diarreico autolimitado. Diez días después inicia debilidad progresiva para caminar y para mover las manos. Al examen físico se aprecia además parálisis fácil y arreflexia generalizada. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'Síndrome de Guillain Barré' },
          { id: 'B', text: 'Miastenia gravis' },
          { id: 'C', text: 'Polineuropatía' },
          { id: 'D', text: 'Botulismo' },
          { id: 'E', text: 'Intoxicación por marea roja' }
        ],
        correcta: 'A',
        explicacion: 'La presentación clínica es prototípica del Síndrome de Guillain-Barré: antecedente de un cuadro infeccioso diarreico (clásicamente por Campylobacter jejuni) seguido tras un período de latencia de 1 a 2 semanas por debilidad muscular bilateral progresiva ascendente que compromete extremidades inferiores y superiores, sumado a diplejía facial y arreflexia osteotendinosa universal. La miastenia gravis cursa con fatigabilidad y reflejos normales; el botulismo presenta parálisis descendente con compromiso pupilar prominente precoz.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.013'
      },
      {
        stem: 'Un adolescente de 16 años inicia un cuadro relativamente rápido de debilidad de las extremidades inferiores, que luego se extiende a las superiores, en cosa de 5 horas, agravándose a medida que pasa el tiempo. Al examen físico además se constata arreflexia generalizada. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'Polineuropatía' },
          { id: 'B', text: 'Síndrome de Guillain- Barre' },
          { id: 'C', text: 'Síndrome de compresión medular' },
          { id: 'D', text: 'Esclerosis múltiple' },
          { id: 'E', text: 'Miastenia gravis' }
        ],
        correcta: 'B',
        explicacion: 'El diagnóstico más probable es un Síndrome de Guillain-Barré de progresión hiperaguda. Los elementos clave son la debilidad muscular de progresión ascendente rápida (desde piernas hasta brazos en pocas horas) y la constatación obligatoria de arreflexia osteotendinosa generalizada. Una compresión medular aguda daría un nivel sensitivo nítido, disfunción esfinteriana temprana y reflejos que en fase de shock espinal son ausentes pero luego hiperreflexia bilateral, sin compromiso de pares craneales. La esclerosis múltiple afecta sistema nervioso central y cursa típicamente con hiperreflexia y signo de Babinski.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.013'
      },
      {
        stem: 'Un paciente de 36 años presenta disestesias en las piernas, asociadas a debilidad progresiva, que a las 48 horas de su inicio le impide la marcha. Al examen se aprecia arreflexia generalizada. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'Polirradiculoneuritis desmielinizante' },
          { id: 'B', text: 'Síndrome de arteria espinal posterior' },
          { id: 'C', text: 'Mononeuritis múltiple' },
          { id: 'D', text: 'Polineuropatía' },
          { id: 'E', text: 'Esclerosis múltiple' }
        ],
        correcta: 'A',
        explicacion: 'La polirradiculoneuritis desmielinizante inflamatoria aguda (AIDP) es la denominación nosológica anatomopatológica del Síndrome de Guillain-Barré clásico. El paciente presenta el cuadro típico: disestesias y parestesias distales en miembros inferiores, debilidad muscular rápidamente progresiva que anula la marcha en menos de 48 horas y arreflexia osteotendinosa generalizada en la exploración física. La mononeuritis múltiple es un cuadro asimétrico y parcheado (asociado a vasculitis), y la esclerosis múltiple es una patología desmielinizante central.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.2.013'
      }
    ]
  },

  // ==========================================================================
  // TEMA 10.17: MIASTENIA GRAVIS (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'neuro-17',
    classId: 'neuro-17',
    tier: 3,
    blockNum: 4,
    blockName: 'Patología Neuromuscular, Desmielinizante y Nervio Periférico',
    topicLabel: '10.17',
    title: 'Miastenia Gravis: Fisiopatología (anti-AChR, anti-MuSK), Crisis Miasténica y Timoma',
    perfilCode: '1.10.1.020',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Realizar',
    ges: 'Evaluación y seguimiento multidisciplinario por Neurología y Cirugía de Tórax · Cobertura hospitalaria de urgencia para Crisis Miasténica en Unidad de Paciente Crítico (UPC) bajo Ley de Urgencia.',
    reconstrucciones: 'EUNACOM Julio 2024 (Q#74)',
    frecuencia: 'Alta rentabilidad · Pregunta angular de patología de la unión neuromuscular en EUNACOM',
    svg: null,
    algoTitle: 'Algoritmo de Diagnóstico, Manejo Crónico y Crisis Miasténica en Miastenia Gravis',
    diagram: flow('Algoritmo de Manejo Integral de Miastenia Gravis y Crisis Miasténica', [
      { t: 'Sospecha Clínica de Miastenia Gravis (Debilidad muscular fluctuante y fatigable)', s: 'Ptosis palpebral asimétrica, diplopía, voz nasal, debilidad bulbar o proximal · Pupilas estrictamente normales', type: 'acc' },
      { t: 'Pruebas Clínicas a Pie de Cama (Bedside Testing)', s: 'Test del hielo (ice pack test) positivo (mejora ptosis ≥ 2 mm tras 2 min) · Test de Simpson (mirada fija hacia arriba)', type: 'acc' },
      { t: 'Confirmación Serológica, Electrofisiológica y TAC de Tórax', s: 'Anti-AChR (> 85%), Anti-MuSK · EMG estimulación repetitiva 3 Hz (decremento > 10%) · TAC tórax sin contraste para timoma', type: 'acc' },
      { k: 'split', q: '¿Evaluación de la Gravedad: Signos de Crisis Miasténica Inminente?', s: 'Disnea en decúbito, ortopnea, conteo en una respiración < 20, debilidad bulbar severa, estridor inspiratorio',
        ll: 'Crisis Miasténica (CVF < 20 mL/kg o PImáx < 30)',
        left: { t: 'Ingreso Inmediato a UPC / UCI + IOT Electiva', s: 'Pausa transitoria de piridostigmina · Iniciar IgEV (2 g/kg en 2-5 d) o Plasmaféresis · Evitar relajantes curarizantes', type: 'crit' },
        rl: 'Miastenia Estable / Ambulatoria (Sin falla respiratoria)',
        right: { t: 'Manejo Farmacológico Ambulatorio Escalonado', s: 'Piridostigmina 60 mg c/4-6 h VO + Corticoides escalonados + Ahorradores de esteroides (Azatioprina)', type: 'dec' }
      },
      { t: 'Evaluación Quirúrgica: Indicaciones de Timectomía', s: 'Obligatoria en todo Timoma (10-15%) · Recomendada en MG generalizada seropositiva AChR entre 18 y 60 años', type: 'acc' },
      { t: '¡REGLA DE ORO DE SEGURIDAD: FÁRMACOS PROHIBIDOS EN MIASTENIA!', s: 'Contraindicados aminoglucósidos, fluoroquinolonas, betabloqueadores, sales de magnesio EV y relajantes musculares', type: 'warn' }
    ]),
    contexto: 'La Miastenia Gravis (MG) es una enfermedad autoinmune crónica mediada por anticuerpos contra componentes de la membrana postsináptica de la placa motora, predominantemente contra el receptor nicotínico de acetilcolina (AChR, 85% de los casos generalizados) y la tirosina quinasa específica del músculo (MuSK). Su sello clínico patognomónico es la debilidad muscular fluctuante caracterizada por fatigabilidad: la fuerza empeora con el ejercicio repetido o al final del día y mejora sustancialmente tras el reposo o la aplicación local de frío. Afecta típicamente la musculatura ocular extrínseca (ptosis y diplopía con preservación rigurosa de los reflejos pupilares), la musculatura bulbar (disfagia, disartria, voz nasal) y la musculatura proximal de extremidades. La complicación más grave es la Crisis Miasténica (falla ventilatoria por debilidad diafragmática), desencadenada frecuentemente por infecciones o fármacos que bloquean la transmisión neuromuscular. El timo desempeña un papel patogénico central: 65% presenta hiperplasia tímica y 10-15% un timoma (obligando a solicitar TAC de tórax). El tratamiento escalonado incluye inhibidores de la acetilcolinesterasa (piridostigmina), inmunosupresores, timectomía y plasmaféresis o inmunoglobulina EV en las crisis.',
    contentSections: [
      {
        subhead: '1. Fisiopatología de la Unión Neuromuscular y Perfil de Autoanticuerpos',
        paragraphs: [
          'En condiciones fisiológicas normales, el potencial de acción presináptico abre canales de calcio dependientes de voltaje, desencadenando la exocitosis cuántica de acetilcolina (ACh) hacia la hendidura sináptica. La ACh se une a los receptores nicotínicos postsinápticos (AChR), provocando la apertura de canales de sodio y un potencial de placa terminal que supera el umbral para despolarizar el sarcolema (<em>factor de seguridad de la transmisión neuromuscular</em>).',
          'En la Miastenia Gravis se produce una respuesta autoinmune aberrante dependiente de linfocitos T y B con producción de <strong>autoanticuerpos patógenos dirigidos contra la membrana postsináptica</strong>:',
          '• <strong>Anticuerpos anti-Receptor de Acetilcolina (anti-AChR):</strong> Presentes en el 85% de las formas generalizadas y en el 50% de las formas oculares puras. Pertenecen a las subclases IgG1 e IgG3 y actúan mediante tres mecanismos lesionales: 1) Activación del complemento con formación del complejo de ataque a la membrana (MAC), que destruye los pliegues postsinápticos y ensancha la hendidura; 2) Endocitosis acelerada y degradación lisosomal de los receptores (modulación antigénica); y 3) Bloqueo estéreo de los sitios de unión de la acetilcolina. El resultado es una disminución drástica del número de receptores funcionales; tras contracciones repetidas, la cantidad de ACh liberada decae naturalmente, cayendo por debajo del factor de seguridad y generando el fenómeno clínico de <strong>fatigabilidad muscular progresiva</strong>.',
          '• <strong>Anticuerpos anti-Tirosina Quinasa Específica del Músculo (anti-MuSK):</strong> Presentes en un 30-40% de los pacientes seronegativos para anti-AChR. Suelen ser mujeres jóvenes con compromiso bulbar y respiratorio predominante, debilidad facial y de cuello muy severa, atrofia lingual y marcada refractariedad o empeoramiento clínico con anticolinesterásicos habituales (piridostigmina). Responden excepcionalmente bien a Rituximab.',
          '• <strong>Anticuerpos anti-LRP4:</strong> Presentes en una fracción de pacientes seronegativos dobles (anti-AChR y anti-MuSK negativos).'
        ]
      },
      {
        subhead: '2. Manifestaciones Clínicas, Examen Físico y Pruebas Diagnósticas a Pie de Cama',
        paragraphs: [
          'La presentación clínica exhibe una distribución bimodal: un primer pico en mujeres jóvenes de 20 a 40 años (frecuentemente asociado a hiperplasia tímica y otros trastornos autoinmunes como tiroiditis de Hashimoto) y un segundo pico en hombres mayores de 50 a 60 años (asociado con mayor frecuencia a timoma y seropositividad anti-AChR) (véase Algoritmo 10.17).',
          '<strong>Rasgos clínicos cardinales:</strong>',
          '• <strong>Compromiso Ocular Inicial (50-60% de los debuts, > 85% a lo largo de la enfermedad):</strong> <strong>Ptosis palpebral unilateral o bilateral asimétrica</strong> y <strong>diplopía binocular</strong> que no sigue el territorio de un solo par craneal. <em>Regla de Oro Inviolable del EUNACOM:</em> En la Miastenia Gravis la musculatura intrínseca del ojo está rigurosamente INDEMNE: <strong>las pupilas son de tamaño normal, simétricas y reactivas a la luz en el 100% de los casos</strong>. La presencia de midriasis o arreflexia pupilar descarta miastenia y obliga a sospechar síndrome de compresión del III par por aneurisma de arteria comunicante posterior, botulismo o síndrome de Miller Fisher.',
          '• <strong>Compromiso Bulbar:</strong> Disartria con voz nasal progresiva (fatiga del velo del paladar al hablar prolongadamente), disfagia a sólidos y líquidos, y fatiga masticatoria (incapacidad para terminar de masticar un pedazo de carne, requiriendo sostener la mandíbula con la mano).',
          '• <strong>Debilidad en Extremidades:</strong> De predominio proximal y simétrico (afecta deltoides, flexores de cadera y flexores del cuello: "cabeza caída"), con preservación habitual de la fuerza distal.',
          '• <strong>Pruebas de Cabecera (Bedside Tests):</strong>',
          '1) <strong>Test del Hielo (Ice Pack Test):</strong> Se coloca una bolsa de hielo sobre el párpado caído durante 2 a 3 minutos. La inhibición térmica de la acetilcolinesterasa endógena incrementa la concentración de ACh en la hendidura sináptica. El test es positivo si la hendidura palpebral mejora en <strong>≥ 2 mm</strong> (sensibilidad 80-90% en ptosis miasténica).',
          '2) <strong>Prueba de Fatigabilidad (Test de Simpson):</strong> Se solicita al paciente mantener la mirada hacia arriba fija durante 60 segundos; la ptosis palpebral se hace evidente o empeora notablemente de forma progresiva.'
        ]
      },
      {
        subhead: '3. Diagnóstico Paraclínico: Serología, Electrofisiología y Neuroimagen Mediastínica',
        paragraphs: [
          'El protocolo diagnóstico formal contempla los siguientes estudios paraclínicos (véase Tabla 10.17.1):',
          '• <strong>Determinación de Autoanticuerpos:</strong> La cuantificación sérica de <strong>anti-AChR</strong> es la prueba de confirmación de mayor especificidad (> 98%). Si resulta negativa en un cuadro sugestivo generalizado, se solicita <strong>anti-MuSK</strong>.',
          '• <strong>Electromiografía con Estimulación Nerviosa Repetitiva (ENR a 3 Hz):</strong> Consiste en aplicar estímulos supramáximos de baja frecuencia (2 a 3 Hz) sobre nervios motores (accesorio espinal, facial, radial). Se considera positiva si se observa un <strong>decremento progresivo mayor al 10% en la amplitud del potencial de acción muscular compuesto (CMAP)</strong> entre el primer y el cuarto o quinto potencial (patrón decremental por agotamiento sináptico).',
          '• <strong>Electromiografía de Fibra Aislada (Single-Fiber EMG):</strong> Es la prueba electrodiagnóstica de <strong>mayor sensibilidad (> 95-99%)</strong>. Demuestra un aumento marcado del <em>jitter</em> (variabilidad temporal en la transmisión neuromuscular entre dos fibras del mismo axón) y bloqueos de impulsos. Se reserva para casos seronegativos o con sospecha clínica pura en que la estimulación repetitiva convencional resulta normal.',
          '• <strong>TAC de Tórax con y sin Contraste (Obligatorio en todo paciente con MG):</strong> Indicado para evaluar la anatomía del timo. Un <strong>10 a 15% de los pacientes presenta un Timoma</strong> (neoplasia epitelial tímica, habitualmente benigna o de invasión local) y un 65 a 70% presenta <strong>hiperplasia folicular linfoide tímica</strong> activa.'
        ]
      },
      {
        subhead: '4. Fármacos Contraindicados y Factores Desencadenantes de Crisis Miasténica',
        paragraphs: [
          'La prescripción errónea de fármacos que interfieren con la transmisión sináptica neuromuscular es una causa prevalente de agravamiento catastrófico y desencadenamiento de crisis miasténica en la práctica médica (véase Tabla 10.17.2: Fármacos Contraindicados en Miastenia Gravis).',
          '<strong>Fármacos absolutamente contraindicados o que exigen extrema precaución:</strong>',
          '• <strong>Antibióticos:</strong> <strong>Aminoglucósidos</strong> (Gentamicina, Amikacina, Tobramicina) bloquean competitivamente los canales de calcio presinápticos reduciendo la liberación de acetilcolina; <strong>Fluoroquinolonas</strong> (Ciprofloxacino, Levofloxacino, Moxifloxacino) cuentan con una advertencia de caja negra (<em>Black Box Warning</em>) de la FDA por exacerbaciones graves y parálisis respiratoria en MG; <strong>Macrólidos</strong> (Azitromicina, Claritromicina) y <strong>Clindamicina</strong> interfieren con la liberación presináptica.',
          '• <strong>Cardiovasculares:</strong> <strong>Betabloqueadores</strong> (Propranolol, Atenolol, Labetalol) agravan la debilidad muscular; <strong>Calcioantagonistas</strong> (Verapamilo, Diltiazem); y antiarrítmicos como <strong>Procainamida</strong> y <strong>Quinidina</strong>.',
          '• <strong>Electrolitos y Relajantes:</strong> <strong>Sulfato de Magnesio endovenoso</strong> (el magnesio inhibe potentemente la liberación de acetilcolina, pudiendo causar paro respiratorio fulminante en miasténicos; ¡absolutamente proscrito en eclampsia con MG concomitante!); <strong>Relajantes musculares no despolarizantes</strong> (Rocuronio, Vecuronio: los pacientes presentan hipersensibilidad extrema y prolongación del bloqueo, requiriendo 1/10 de la dosis habitual); y <strong>Succinilcolina</strong> (respuesta errática).',
          '• <strong>Inhibidores de Checkpoint Inmunológico (ICIs):</strong> Fármacos oncológicos modernos (Pembrolizumab, Nivolumab, Ipilimumab) pueden desencadenar miastenia gravis de novo hiperaguda y miocarditis necrotizante con mortalidad superior al 30%.'
        ]
      },
      {
        subhead: '5. Protocolo Terapéutico Escalonado, Timectomía y Manejo de Crisis Miasténica',
        paragraphs: [
          'El tratamiento de la Miastenia Gravis se estructura en fases sinérgicas (véase Tabla 10.17.3: Protocolo Terapéutico Escalonado y Manejo de Crisis):',
          '• <strong>1. Tratamiento Sintomático de Primera Línea:</strong> <strong>Bromuro de Piridostigmina oral</strong>, inhibidor reversible de la acetilcolinesterasa. Dosis inicial: <strong>30 a 60 mg vía oral cada 4 a 6 horas</strong> (dosis máxima habitual: 360 mg/día). Su efecto inicia a los 15-30 minutos y dura 3 a 4 horas. Los efectos adversos colinérgicos muscarínicos (cólicos abdominales, diarrea líquida, sialorrea, diaforesis, broncorrea) pueden manejarse coadministrando dosis bajas de anticolinérgicos como propantelina o atropina.',
          '• <strong>2. Inmunosupresión Sistémica:</strong> Indicada si persisten síntomas incapacitantes a pesar de dosis optimizadas de piridostigmina. <strong>Prednisona oral</strong>: se inicia a dosis bajas (10 a 20 mg/día) y se escala gradualmente hasta 0.75-1 mg/kg/día para evitar el <em>efecto dip</em> (exacerbación paradójica transitoria de la debilidad que puede ocurrir en los primeros 7-10 días tras bolos altos de esteroides). Como ahorradores de corticoides a largo plazo se utilizan <strong>Azatioprina</strong> (2 a 3 mg/kg/día) o <strong>Micofenolato Mofetilo</strong> (1 a 2 g/día).',
          '• <strong>3. Timectomía Quirúrgica:</strong>',
          '  - <em>Indicación absoluta e imperativa:</em> Presencia de <strong>Timoma comprobado por imagen</strong>, con el objetivo primordial de erradicar la neoplasia y prevenir la invasión pleural/pericárdica local.',
          '  - <em>Indicación modificadora de enfermedad (Estudio MGTX):</em> Pacientes no timomatosos de <strong>18 a 60-65 años con Miastenia Gravis generalizada y seropositividad anti-AChR</strong>. La timectomía extendida incrementa sustancialmente la tasa de remisión clínica completa y reduce a largo plazo la necesidad de corticoides y hospitalizaciones.',
          '• <strong>4. Manejo de la Crisis Miasténica en UPC:</strong> Definida por insuficiencia respiratoria aguda que requiere ventilación mecánica o disfagia severa que impide la nutrición y pone en riesgo la vía aérea. Requiere <strong>intubación orotraqueal electiva precoz</strong> en UPC, monitorización de CVF y PImáx, y tratamiento inmunomodulador rápido con <strong>Plasmaféresis (5 sesiones en 10 días)</strong> o <strong>Inmunoglobulina Humana EV (2 g/kg administrados en 2 a 5 días)</strong>. <em>Perla de Cuidado Intensivo:</em> Durante la intubación mecánica se suspende transitoriamente la piridostigmina para evitar la hipersecreción bronquial mucosa inmanejable que obstruye el tubo endotraqueal.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Clínico, Pruebas de Cabecera y Métodos Paraclínicos en Miastenia Gravis',
      headers: ['Método / Prueba Diagnóstica', 'Fundamento Fisiopatológico', 'Sensibilidad / Especificidad', 'Utilidad y Consideraciones Clínicas'],
      rows: [
        ['Fatigabilidad Clínica (Semiología)', 'Agotamiento del pool presináptico de ACh que desciende bajo el umbral de activación postsináptico', 'Sensibilidad ~85% / Muy específica si es fluctuante', 'Debilidad que empeora al final de la tarde o tras uso muscular repetido y revierte tras reposo; pupilas estrictamente normales'],
        ['Test del Hielo (Ice Pack Test)', 'El frío inhibe localmente la enzima acetilcolinesterasa aumentando la concentración de ACh', 'Sensibilidad 80-90% / Especificidad > 95%', 'Mejora de la hendidura palpebral en ≥ 2 mm tras 2-3 min de aplicación de hielo sobre el párpado; simple, rápida e inocua a pie de cama'],
        ['Anticuerpos anti-AChR', 'Anticuerpos IgG dirigidos contra el receptor nicotínico postsináptico activadores de complemento', 'Sensibilidad 85% en generalizada (50% en ocular) / Espec. > 98%', 'Marcador de confirmación definitivo; no se correlaciona necesariamente con la severidad exacta de los síntomas'],
        ['Anticuerpos anti-MuSK', 'Anticuerpos contra tirosina quinasa muscular esencial para el clustering de receptores AChR', 'Presentes en 35-40% de pacientes con anti-AChR negativos', 'Fenotipo clínico con predominio bulbar severo, disartria, disfagia, debilidad facial y atrofia lingual; respuesta excelente a Rituximab'],
        ['Estimulación Repetitiva (ENR 3 Hz)', 'Caída progresiva del potencial de acción muscular compuesto por falla en fibras agotadas', 'Sensibilidad 75% en generalizada (menor en ocular)', 'Patrón patológico de decremento > 10% entre el 1° y 4°-5° potencial del CMAP; altamente orientador'],
        ['EMG de Fibra Aislada (Single-Fiber)', 'Medición de la variabilidad temporal entre dos fibras inervadas por la misma unidad motora', 'Sensibilidad > 95-99% (la prueba más sensible disponible)', 'Gold standard neurofisiológico; demuestra aumento del jitter y bloqueo de potenciales; altamente técnico'],
        ['TAC de Tórax con Contraste', 'Visualización de masas mediastínicas anteriores en el espacio retroesternal', 'Sensibilidad > 95% para timoma', 'Obligatorio en el 100% de los pacientes diagnosticados de MG; pesquisa timoma en 10-15% e hiperplasia tímica en 70%']
      ]
    },
    severityTable: {
      title: 'Fármacos Formalmente Contraindicados o de Riesgo Crítico en Miastenia Gravis',
      headers: ['Grupo Farmacológico', 'Fármacos Específicos Prohibidos', 'Mecanismo de Interferencia Neuromuscular', 'Conducta y Alternativas Seguras'],
      rows: [
        ['Antibióticos Aminoglucósidos', 'Gentamicina, Amikacina, Tobramicina, Estreptomicina', 'Bloqueo presináptico de canales de calcio dependientes de voltaje; inhiben liberación de ACh', 'ESTRICTAMENTE CONTRAINDICADOS; utilizar cefalosporinas, carbapenémicos o betalactámicos'],
        ['Antibióticos Fluoroquinolonas', 'Ciprofloxacino, Levofloxacino, Moxifloxacino', 'Bloqueo postsináptico neuromuscular directo; advertencia de caja negra (Black Box Warning)', 'CONTRAINDICADAS; si requiere terapia entérica o urinaria, preferir Ceftriaxona o Cotrimoxazol'],
        ['Otros Antibacterianos', 'Macrólidos (Azitromicina, Claritromicina), Clindamicina', 'Disminuyen la liberación presináptica de acetilcolina e inducen parálisis respiratoria', 'Usar con extrema cautela o sustituir por penicilinas / betalactámicos alternativos'],
        ['Antiarrítmicos y Betabloqueadores', 'Propranolol, Atenolol, Labetalol, Procainamida, Quinidina', 'Disminuyen excitabilidad de placa motora y bloquean canales iónicos sarcolémicos', 'Evitar betabloqueadores; para taquicardia o HTA preferir IECA/ARA-II o hidralazina'],
        ['Sales de Magnesio Endovenosas', 'Sulfato de Magnesio EV (usado en eclampsia o asma)', 'Antagonismo directo de calcio en terminal presináptica; inhibe exocitosis de vesículas de ACh', '¡POTENCIALMENTE MORTAL!: induce paro respiratorio fulminante; contraindicado en eclampsia miasténica'],
        ['Relajantes Musculares en Anestesia', 'Curarizantes no despolarizantes (Rocuronio, Vecuronio)', 'Ocupación competitiva de los escasos receptores AChR residuales con parálisis extrema prolongada', 'Reducir dosis a 1/10 del estándar con monitorización estricta por TOF (tren de cuatro) y revertir con Sugammadex'],
        ['Inmunooncología (ICIs)', 'Pembrolizumab, Nivolumab, Ipilimumab, Atezolizumab', 'Desinhibición masiva de linfocitos autorreactivos contra antígenos de placa motora y miocardio', 'Generan Miastenia Fulminante y Miocarditis autoinmune letal; suspender de inmediato e iniciar pulsos de corticoides']
      ]
    },
    treatmentTable: {
      title: 'Protocolo Farmacológico Escalonado, Timectomía y Manejo de Crisis Miasténica',
      headers: ['Línea Terapéutica', 'Fármaco / Intervención', 'Dosis / Posología Estándar', 'Metas Clínicas y Efectos Secundarios'],
      rows: [
        ['1ª Línea Sintomática', 'Bromuro de Piridostigmina', '60 mg oral cada 4 a 6 horas (rango: 30 a 90 mg c/4-6 h; máx 360 mg/día)', 'Inicio a 15-30 min; alivia ptosis y debilidad; efectos colinérgicos (diarrea, cólicos) manejables con atropina'],
        ['2ª Línea Inmunosupresora', 'Prednisona oral', 'Inicio escalonado 10-20 mg/día, aumentar c/3 días hasta 0.75-1 mg/kg/día', 'Prevenir el "dip" o empeoramiento paradójico precoz; desescalar lentamente tras alcanzar control clínico'],
        ['Ahorrador de Esteroides', 'Azatioprina oral', '2 a 3 mg/kg/día vía oral (previa medición de enzima TPMT)', 'Latencia de inicio prolongada (6 a 12 meses); monitorizar hemograma (leucopenia) y transaminasas hepáticas'],
        ['Ahorrador Alternativo', 'Micofenolato Mofetilo', '1000 mg oral cada 12 horas (total 2 g/día)', 'Latencia de respuesta de 2 a 6 meses; excelente tolerancia gastrointestinal; teratogénico'],
        ['Cirugía Modificadora', 'Timectomía por toracoscopía / esternotomía', 'Resección completa de tejido tímico y grasa mediastínica anterior', 'Obligatoria en Timoma; recomendada en MG generalizada seropositiva AChR (18-60 años) para inducir remisión'],
        ['Crisis Miasténica (Rescate)', 'Inmunoglobulina Humana EV', '0.4 g/kg/día por 5 días o 1 g/kg/día por 2 días (dosis total: 2.0 g/kg)', 'Manejo en UCI con IOT electiva; suspender temporalmente piridostigmina para evitar exceso de secreciones'],
        ['Crisis Miasténica (Alternativa)', 'Plasmaféresis Terapéutica', '5 sesiones de recambio plasmático en días alternos durante 10 días', 'Remoción física rápida de autoanticuerpos circulantes; igual de efectiva que IgEV; requiere catéter central rígido']
      ]
    },
    vignette: 'Mujer de 29 años, cajera de supermercado, consulta por visión doble y caída de párpados de 3 semanas de evolución. Refiere que por las mañanas amanece prácticamente asintomática, pero conforme avanza su jornada laboral nota que se le cae el párpado izquierdo y que al mirar hacia los lados ve doble (diplopía binocular). Además, comenta que en los últimos días le cuesta terminar de almorzar porque se le cansan los músculos de la mandíbula al masticar carnes y nota su voz "apagada y gangosa" al final del día. Al examen físico se aprecia ptosis palpebral bilateral de predominio izquierdo y un leve estrabismo divergente con limitación fluctuante de la aducción ocular. Ambas pupilas son redondas, isocóricas y reactivas a la luz de forma bilateral. El test del hielo sobre el párpado izquierdo durante 2 minutos produce una elevación nítida de 3.5 mm de la hendidura palpebral. Los reflejos osteotendinosos están normales (2/4+) y simétricos, y la sensibilidad táctil está conservada.',
    explicacion: 'El cuadro clínico de ptosis y diplopía con fatigabilidad vespertina, cansancio masticatorio y disartria fluctuante, sumado a un test del hielo intensamente positivo y pupilas estrictamente normales e isorreactivas, es patognomónico de Miastenia Gravis de inicio ocular con generalización precoz. La normalidad pupilar es la perla semiológica angular para descartar compresión del III par por aneurisma o mononeuropatía diabética. La conducta de confirmación requiere solicitar anticuerpos séricos anti-AChR (y anti-MuSK si resultan negativos), electromiografía con estimulación nerviosa repetitiva (búsqueda de decremento > 10%) y TAC de tórax con contraste para descartar timoma subyacente. El tratamiento farmacológico sintomático de primera línea se inicia de inmediato con Bromuro de Piridostigmina 60 mg cada 4 a 6 horas vía oral, recordando advertir a la paciente que tiene estrictamente prohibido recibir antibióticos como gentamicina o ciprofloxacino por riesgo de claudicación respiratoria miasténica.',
    keyPoints: [
      'La Miastenia Gravis es un trastorno autoinmune postsináptico caracterizado por debilidad muscular fluctuante y fatigabilidad (empeora con el uso repetido y mejora con reposo).',
      'Signo semiológico de oro en examen físico: las pupilas son SIEMPRE normales y reactivas a la luz (la musculatura pupilar intrínseca nunca se compromete en miastenia).',
      'El test del hielo (ice pack test) a pie de cama mejora la ptosis palpebral en ≥ 2 mm tras 2 minutos debido a la inhibición térmica de la acetilcolinesterasa.',
      'El estudio diagnóstico confirmatorio requiere anticuerpos anti-AChR (positivos en 85%), anti-MuSK en seronegativos, EMG con decremento > 10% a 3 Hz y TAC de tórax para despistaje de timoma.',
      'Fármacos absolutamente contraindicados que desencadenan crisis miasténica: aminoglucósidos, fluoroquinolonas, betabloqueadores, sulfato de magnesio EV y relajantes musculares curarizantes.',
      'El tratamiento crónico se basa en piridostigmina oral (60 mg c/4-6 h), corticoides e inmunosupresores; la timectomía es obligatoria en timoma y recomendada en MG generalizada anti-AChR (+).'
    ],
    questions: [
      {
        stem: 'Lo más característico de la miastenia gravis es:',
        options: [
          { id: 'A', text: 'La asociación con tiroiditis de Hashimoto' },
          { id: 'B', text: 'El compromiso de la musculatura lisa visceral' },
          { id: 'C', text: 'La presencia de hiperreflexia osteotendinosa' },
          { id: 'D', text: 'La respuesta espectacular a los corticoides orales' },
          { id: 'E', text: 'La fatigabilidad muscular con el ejercicio repetido' }
        ],
        correcta: 'E',
        explicacion: 'El rasgo clínico cardinal, definitorio y fisiopatológico de la Miastenia Gravis es la fatigabilidad muscular fluctuante: la debilidad se acentúa progresivamente con el ejercicio físico o la contracción muscular repetida y se recupera de manera sustancial tras períodos de reposo. Esto obedece a la depleción del neurotransmisor acetilcolina en presencia de un número reducido de receptores nicotínicos funcionales en la placa motora. No compromete musculatura lisa (B) y los reflejos osteotendinosos son normales (C).',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.020'
      },
      {
        stem: 'Mujer de 33 años, consulta por astenia y diplopía, de 2 semanas de evolución, fluctuantes. Al examen se observa ptosis izquierda y ligero estrabismo divergente, que ella refiere no haber tenido previamente. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'Síndrome de Guillain-Barré' },
          { id: 'B', text: 'Miastenia gravis' },
          { id: 'C', text: 'Tumor hipofisiario' },
          { id: 'D', text: 'Encefalopatía de Wernicke' },
          { id: 'E', text: 'Síndrome de Claude Bernard Horner' }
        ],
        correcta: 'B',
        explicacion: 'La asociación de ptosis palpebral asimétrica y diplopía por estrabismo divergente de carácter típicamente fluctuante en una mujer joven en la tercera década de la vida es la presentación clásica de la Miastenia Gravis ocular. El Guillain-Barré cursa con arreflexia y parálisis flácida ascendente; el síndrome de Horner presenta ptosis con miosis y enoftalmos sin diplopía; Wernicke cursa con ataxia y confusión mental.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.020'
      },
      {
        stem: 'Una mujer de 33 años consulta por astenia y debilidad fluctuantes, asociadas a diplopía, que se agrava al realizar deporte. El diagnóstico de sospecha es:',
        options: [
          { id: 'A', text: 'Botulismo' },
          { id: 'B', text: 'Polineuropatía' },
          { id: 'C', text: 'Síndrome de Guillain Barré' },
          { id: 'D', text: 'Miastenia gravis' },
          { id: 'E', text: 'Esclerosis múltiple' }
        ],
        correcta: 'D',
        explicacion: 'La debilidad muscular fluctuante y la diplopía que se agravan de manera ostensible con la actividad física o la práctica deportiva son la manifestación clínica directa del agotamiento del factor de seguridad en la unión neuromuscular, característico de la Miastenia Gravis. El botulismo es un cuadro agudo y descendente con compromiso autonómico y pupilar precoz.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.020'
      },
      {
        stem: 'Un hombre de 30 años acude a su consulta por presentar debilidad muscular y diplopia fluctuantes, de un mes de evolución, que usted objetiva con la exploración física. ¿Cuál de las siguientes pruebas NO le parecería oportuno solicitar?:',
        options: [
          { id: 'A', text: 'Electromiografía de fibra muscular aislada.' },
          { id: 'B', text: 'Electromiografía con estimulación repetitiva.' },
          { id: 'C', text: 'Estudio de función autonómica.' },
          { id: 'D', text: 'Determinación de anticuerpos anti-receptor de aceticolina.' },
          { id: 'E', text: 'TAC torácico.' }
        ],
        correcta: 'C',
        explicacion: 'La Miastenia Gravis es una enfermedad selectiva de la placa neuromuscular del músculo estriado esquelético somático mediada por receptores nicotínicos. No compromete el sistema nervioso autónomo ni la musculatura lisa visceral, por lo que solicitar un estudio de función autonómica carece por completo de justificación diagnóstica. En cambio, los anticuerpos anti-AChR (D), la estimulación repetitiva (B), el EMG de fibra aislada (A) y el TAC torácico para descartar timoma (E) son pilares diagnósticos obligatorios.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.020'
      }
    ]
  },

  // ==========================================================================
  // TEMA 10.18: ESCLEROSIS MÚLTIPLE (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'neuro-18',
    classId: 'neuro-18',
    tier: 3,
    blockNum: 4,
    blockName: 'Patología Neuromuscular, Desmielinizante y Nervio Periférico',
    topicLabel: '10.18',
    title: 'Esclerosis Múltiple: Criterios de McDonald, Bandas Oligoclonales y Terapia Modificadora de Enfermedad',
    perfilCode: '1.10.1.008',
    dx: 'Sospecha',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 69): Esclerosis Múltiple Remitente Recurrente (EMRR) · Garantiza acceso a diagnóstico confirmatorio por Resonancia Magnética y punción lumbar en ≤ 60 días, tratamiento del brote agudo y terapia modificadora de la enfermedad (FME) de primera y segunda línea. Cobertura complementaria de fármacos biológicos de alta eficacia por Ley Ricarte Soto.',
    reconstrucciones: 'EUNACOM Julio 2019 (Q#104) · EUNACOM Julio 2019 (Q#17)',
    frecuencia: 'Alta rentabilidad · Enfermedad desmielinizante prototípica del SNC en adultos jóvenes',
    svg: null,
    algoTitle: 'Algoritmo Diagnóstico y Terapéutico en Esclerosis Múltiple (Criterios McDonald 2017)',
    diagram: flow('Algoritmo Diagnóstico y Terapéutico en Esclerosis Múltiple (Criterios McDonald 2017)', [
      { t: 'Sospecha de Síndrome Clínicamente Aislado (SCA / CIS) en Adulto Joven', s: 'Mujer 20-45 años · Neuritis óptica unilateral dolorosa, mielitis transversa parcial o síndrome de troncoencefálico', type: 'acc' },
      { t: 'RMN de Encéfalo y Médula Espinal con Contraste (Gadolinio)', s: 'Lesiones hiperintensas en T2/FLAIR en territorios típicos: periventricular, yuxtacortical/cortical, infratentorial, médula', type: 'acc' },
      { k: 'split', q: 'Evaluación de Criterios de McDonald 2017: Diseminación en Espacio (DIS) y Tiempo (DIT)', s: '¿Cumple DIS (≥ 1 lesión T2 en ≥ 2 de las 4 áreas típicas del SNC)?',
        ll: 'DIS presente + DIT ausente en RMN',
        left: { t: 'Punción Lumbar: Bandas Oligoclonales (BOC)', s: 'BOC IgG en LCR positivas SUSTITUYEN la DIT · Confirma diagnóstico de EM en el 1° brote', type: 'dec' },
        rl: 'DIS y DIT confirmadas en RMN inicial',
        right: { t: 'Diagnóstico Confirmado de Esclerosis Múltiple', s: 'Simultaneidad de lesiones que captan y no captan gadolinio o nueva lesión en RMN control', type: 'acc' }
      },
      { k: 'split', q: 'Escenario Clínico Inmediato: ¿Brote Agudo Incapacitante vs Terapia de Mantención?', s: 'Déficit neurológico focal > 24 horas en ausencia de fiebre o infección concurrente',
        ll: 'Brote Agudo Discapacitante',
        left: { t: 'Pulsos de Metilprednisolona EV', s: '1 g/día EV por 3 a 5 días · Si refractario grave: Plasmaféresis terapéutica (5-7 sesiones)', type: 'crit' },
        rl: 'Terapia Modificadora de Enfermedad (GES 69)',
        right: { t: 'Fármacos Modificadores de la Enfermedad (FME)', s: 'Plataforma (Fumarato de dimetilo, Teriflunomida) vs Alta Eficacia (Natalizumab, Ocrelizumab)', type: 'acc' }
      },
      { t: 'Seguimiento Integral y Monitorización de Seguridad', s: 'Evaluación seriada con escala EDSS · Serología virus JC semestral en natalizumab (riesgo LMP) · RMN de control', type: 'acc' }
    ]),
    contexto: 'La Esclerosis Múltiple (EM) es una enfermedad autoinmune crónica, inflamatoria y desmielinizante del Sistema Nervioso Central (SNC), caracterizada por daño axonal progresivo, pérdida de oligodendrocitos y gliosis reactiva (placas de desmielinización). Representa la primera causa de discapacidad neurológica no traumática en adultos jóvenes, con clara predilección por mujeres (proporción 3:1) entre los 20 y 45 años. Su curso evolutivo clásico es la forma Remitente-Recurrente (EMRR, 85% de los casos), definida por la aparición recurrente de "brotes" neurológicos agudos (neuritis óptica dolorosa unilateral con defecto pupilar aferente relativo, mielitis transversa incompleta, síndrome de tronco con oftalmoplejía internuclear) separados por remisiones clínicas. El diagnóstico se basa en los Criterios de McDonald (revisión 2017), que exigen demostrar Diseminación en Espacio (DIS) y Diseminación en Tiempo (DIT) en la Resonancia Magnética o mediante la presencia de Bandas Oligoclonales IgG en el líquido cefalorraquídeo. El brote agudo se trata con megadosis de Metilprednisolona EV (1 g/día por 3 a 5 días) y la prevención de progresión con terapias modificadoras de la enfermedad garantizadas por el GES N° 69.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Inmunopatogenia y Fenómenos Clínicos Singulares',
        paragraphs: [
          'La esclerosis múltiple se origina por la pérdida de autotolerancia frente a antígenos de la vaina de mielina del SNC (proteína básica de mielina MBP, glicoproteína de mielina del oligodendrocito MOG, proteína proteolipídica PLP). Linfocitos T CD4+ (subpoblaciones Th1 y Th17) autorreactivos cruzan la barrera hematoencefálica (BHE) mediante moléculas de adhesión endotelial (como la integrina α4β1 o VLA-4). Una vez en el parénquima cerebral, secretan citoquinas proinflamatorias (IFN-γ, TNF-α, IL-17) que activan a la microglía local, reclutan macrófagos e inducen a linfocitos B y células plasmáticas a producir inmunoglobulinas intratecales.',
          'La desmielinización perivenular focal daña selectivamente la mielina y los oligodendrocitos, respetando inicialmente los axones; no obstante, la inflamación crónica desprovista de soporte trófico glial induce <strong>transectomía axonal irreversible</strong>, responsable de la atrofia cerebral progresiva y la discapacidad acumulativa irreversible (evaluada mediante la escala EDSS) (véase Algoritmo 10.18).',
          '<strong>Fenómenos semiológicos cardinales muy preguntados en el examen:</strong>',
          '• <strong>Fenómeno de Uhthoff:</strong> Empeoramiento transitorio y reversible de los síntomas neurológicos previos (como visión borrosa o paresia) desencadenado por el <strong>aumento de la temperatura corporal</strong> (baños calientes, fiebre, ejercicio físico intenso o días de mucho calor). Ocurre porque los axones desmielinizados tienen un factor de seguridad de conducción muy reducido y son exquisitamente sensibles al calor, el cual bloquea transitoriamente los canales de sodio nodales sin implicar un nuevo brote inflamatorio.',
          '• <strong>Signo de Lhermitte:</strong> Sensación brusca de descarga eléctrica u hormigueo que desciende por la espalda hacia los brazos y piernas provocada por la <strong>flexión activa o pasiva del cuello</strong>. Es un signo de hiperexcitabilidad mecanoeléctrica de los axones desmielinizados de los cordones posteriores de la médula espinal cervical.',
          '• <strong>Defecto Pupilar Aferente Relativo (DPAR / Pupila de Marcus Gunn):</strong> Al iluminar el ojo afectado en una neuritis óptica, ambas pupilas paradójicamente se dilatan en lugar de contraerse, debido a la conducción visual aferente enlentecida del nervio óptico dañado.'
        ]
      },
      {
        subhead: '2. Formas Clínicas y Síndromes de Presentación Clásicos',
        paragraphs: [
          'El debut típico corresponde a un <strong>Síndrome Clínicamente Aislado (SCA o CIS)</strong>, definido como un primer episodio de déficit neurológico monofocal o multifocal de curso agudo o subagudo con duración mayor a 24 horas:',
          '• <strong>Neuritis Óptica Típica:</strong> Pérdida visual monocular subaguda (en horas a días), acompañada de <strong>dolor retroorbitario que se intensifica con los movimientos oculares</strong> (90%), discromatopsia (pérdida de visión de los colores, especialmente rojo) y DPAR. El fondo de ojo es normal en las 2/3 partes de los casos (<em>neuritis óptica retrobulbar</em>: "ni el paciente ve ni el médico ve nada") o muestra edema de papila leve en 1/3.',
          '• <strong>Mielitis Transversa Parcial / Incompleta:</strong> Parestesias asimétricas, nivel sensitivo en tronco, signo de Lhermitte, urgencia o incontinencia urinaria y paraparesia espástica.',
          '• <strong>Síndromes de Troncoencefálico y Cerebelo:</strong> <strong>Oftalmoplejía internuclear (OIN)</strong> secundaria a lesión desmielinizante del fascículo longitudinal medial (FLM): en la mirada lateral hacia el lado opuesto, el ojo ipsilateral a la lesión no aduce (paresia del recto interno) y el ojo contralateral presenta nistagmo horizontal abductor. Una OIN bilateral en un adulto joven es virtualmente diagnóstica de esclerosis múltiple.',
          '<strong>Clasificación Evolutiva de la Esclerosis Múltiple (véase Tabla 10.18.2: Formas Clínicas y Escala de Discapacidad EDSS):</strong>',
          '1) <strong>Esclerosis Múltiple Remitente-Recurrente (EMRR):</strong> 85% de los casos al inicio. Cursa con brotes agudos seguidos de remisión completa o con secuelas mínimas estables;',
          '2) <strong>Esclerosis Múltiple Secundaria Progresiva (EMSP):</strong> Evolución natural a los 10-20 años de más del 50% de las EMRR no tratadas; progresión gradual de la discapacidad independiente de los brotes;',
          '3) <strong>Esclerosis Múltiple Primaria Progresiva (EMPP):</strong> 10-15% de los casos. Progresión neurológica continua insidiosa desde el comienzo sin brotes definidos (habitualmente paraparesia espástica progresiva del adulto maduro).'
        ]
      },
      {
        subhead: '3. Criterios Diagnósticos de McDonald (Revisión 2017) y Neuroimagen',
        paragraphs: [
          'Los <strong>Criterios de McDonald (revisión 2017)</strong> permiten establecer el diagnóstico de Esclerosis Múltiple demostrando la <strong>Diseminación en Espacio (DIS)</strong> y la <strong>Diseminación en Tiempo (DIT)</strong>, descartando minuciosamente etiologías alternativas (véase Tabla 10.18.1: Criterios de McDonald y Hallazgos en RMN):',
          '• <strong>Diseminación en Espacio (DIS):</strong> Se cumple con la presencia de al menos <strong>1 lesión hiperintensa en T2 en ≥ 2 de las 4 localizaciones típicas del SNC</strong>:',
          '  1. <strong>Periventriculares:</strong> Lesiones ovoideas perpendiculares a los ventrículos laterales siguiendo las venas medulares profundas (conocidas clásicamente como <em>Dedos de Dawson</em>);',
          '  2. <strong>Corticales o Yuxtacorticales:</strong> En contacto estrecho con la corteza cerebral o afectando fibras en U;',
          '  3. <strong>Infratentoriales:</strong> En protuberancia, pedúnculos cerebelosos o bulbo;',
          '  4. <strong>Médula Espinal:</strong> Lesiones periféricas, posteriores/laterales, que ocupan menos de 2 segmentos vertebrales de longitud.',
          '• <strong>Diseminación en Tiempo (DIT):</strong> Se cumple demostrando cualquiera de las siguientes opciones:',
          '  1. Presencia simultánea de <strong>lesiones asintomáticas que captan gadolinio (activas/agudas) y lesiones que no captan gadolinio (crónicas)</strong> en cualquier RMN basal;',
          '  2. Aparición de una <strong>nueva lesión T2 o captante de gadolinio en una RMN de seguimiento</strong> comparada con una previa;',
          '  3. <strong>¡REVOLUCIÓN DE LOS CRITERIOS McDONALD 2017!:</strong> La presencia de <strong>Bandas Oligoclonales (BOC) IgG en el líquido cefalorraquídeo SUSTITUYE al criterio de Diseminación en Tiempo</strong>. Si un paciente presenta un primer brote típico (CIS) y cumple criterios de DIS en la RMN, la demostración de BOC positivas en LCR confirma de inmediato el diagnóstico de Esclerosis Múltiple sin necesidad de esperar un segundo brote ni una segunda resonancia.'
        ]
      },
      {
        subhead: '4. Estudio de Líquido Cefalorraquídeo y Diagnósticos Diferenciales',
        paragraphs: [
          'El análisis del LCR obtenido por punción lumbar es fundamental para el diagnóstico y exclusión de patologías imitadoras:',
          '• <strong>Bandas Oligoclonales (BOC):</strong> Se determinan mediante <strong>isoelectroenfoque e inmunofijación de IgG comparando simultáneamente suero y LCR</strong>. El patrón típico es el <strong>Patrón Tipo 2</strong>: presencia de dos o más bandas oligoclonales de IgG en el LCR que están completamente ausentes en el suero materno/sanguíneo, reflejando <strong>síntesis intratecal autónoma de anticuerpos</strong>. Es positivo en más del 85-95% de los pacientes con EM confirmada. El índice de IgG (cociente IgG LCR/albúmina LCR dividido por IgG suero/albúmina suero) suele estar elevado (> 0.7).',
          '• <strong>Diagnósticos Diferenciales Mandatorios:</strong>',
          '  - <strong>Trastorno del Espectro de Neuromielitis Óptica (NMOSD):</strong> Caracterizado por neuritis óptica bilateral severa y <strong>mielitis transversa longitudinalmente extensa (LETM)</strong> que compromete 3 o más cuerpos vertebrales contiguos. Se asocia a <strong>anticuerpos anti-Aquaporina 4 (anti-AQP4 / NMO-IgG)</strong> dirigidos contra astrocitos. <em>Advertencia EUNACOM:</em> Terapias de EM como Interferón-beta, Natalizumab y Fingolimod agravan catastróficamente la NMOSD.',
          '  - <strong>Enfermedad asociada a anticuerpos anti-MOG (MOGAD):</strong> Lesiones inflamatorias con predilección por cono medular y neuritis bilateral con edema de papila prominente; responden muy bien a corticoides.',
          '  - <strong>Otras patologías:</strong> Déficit de vitamina B12 (degeneración combinada subaguda), neurosífilis, infección por VIH, vasculitis sistémicas (Lupus, Behçet) y neurosarcoidosis.'
        ]
      },
      {
        subhead: '5. Tratamiento del Brote Agudo y Terapias Modificadoras de Enfermedad (GES N° 69)',
        paragraphs: [
          'El abordaje terapéutico de la Esclerosis Múltiple se divide estrictamente en el manejo del brote agudo y la prevención de recaídas a largo plazo (véase Tabla 10.18.3: Tratamiento del Brote Agudo y Terapias Modificadoras de Enfermedad GES 69):',
          '• <strong>Tratamiento del Brote Agudo:</strong> Un brote se define como un déficit neurológico nuevo o agravado que dura &gt; 24 horas sin fiebre ni infección. El pilar es <strong>Metilprednisolona Endovenosa 1 g (1000 mg) al día diluido en suero fisiológico en infusión continua de 2 horas, administrado durante 3 a 5 días consecutivos</strong>. No requiere reducción gradual oral de corticoides. Si el brote es grave, incapacitante y no responde adecuadamente a los esteroides a las 2 semanas, el tratamiento de rescate de segunda línea es la <strong>Plasmaféresis terapéutica (5 a 7 sesiones en días alternos)</strong>.',
          '• <strong>Terapias Modificadoras de la Enfermedad (TME / FME - Garantía GES N° 69):</strong> Reducen la tasa anualizada de brotes (ARR) y la acumulación de lesiones en la RMN:',
          '  - <strong>Fármacos de Primera Línea / Moderada Eficacia:</strong> <strong>Fumarato de Dimetilo</strong> (oral 240 mg c/12 h; activa la vía antioxidante Nrf2; causa rubefacción y linfopenia), <strong>Teriflunomida</strong> (oral 14 mg/día; inhibe pirimidinas; teratogénico y hepatotóxico), <strong>Interferón beta-1a y 1b</strong> (inyecciones SC/IM; producen síndrome pseudogripal y depresión), y <strong>Acetato de Glatiramero</strong> (seguro durante el embarazo).',
          '  - <strong>Fármacos de Alta Eficacia / Segunda Línea (GES 69 / Ley Ricarte Soto):</strong>',
          '    * <strong>Natalizumab:</strong> Anticuerpo monoclonal recombinante humanizado dirigido contra la <strong>integrina α4 (VLA-4)</strong>. Bloquea el anclaje y la diapédesis de linfocitos activados a través del endotelio de la BHE hacia el parénquima cerebral. Eficacia clínica monumental (reduce brotes en > 68%). <em>Riesgo Crítico Muy Preguntado:</em> Reactivación del <strong>Virus JC</strong> en el cerebro causando <strong>Leucoencefalopatía Multifocal Progresiva (LMP)</strong>, una infección desmielinizante letal de oligodendrocitos. Exige monitorización semestral estricta de anticuerpos séricos anti-virus JC.',
          '    * <strong>Ocrelizumab / Ofatumumab:</strong> Anticuerpos monoclonales anti-CD20 que degranulan selectivamente linfocitos B circulantes. Ocrelizumab es la <strong>primera y única terapia modificadora con eficacia probada en frenar la progresión en la Esclerosis Múltiple Primaria Progresiva (EMPP)</strong>, además de su alta efectividad en EMRR.',
          '    * <strong>Fingolimod:</strong> Modulador de receptores de esfingosina-1-fosfato (S1P) que secuestra linfocitos vírgenes dentro de los ganglios linfáticos; requiere monitorización electrocardiográfica en primera dosis por riesgo de bradicardia transitoria y fondo de ojo para vigilar edema macular.'
        ]
      }
    ],
    table: {
      title: 'Criterios Diagnósticos de McDonald (Revisión 2017) y Hallazgos en Resonancia Magnética',
      headers: ['Criterio / Territorio', 'Definición Radiológica / Biomarcador', 'Regiones Cardinales del SNC', 'Implicancia Clínica en EUNACOM'],
      rows: [
        ['Diseminación en Espacio (DIS)', 'Presencia de ≥ 1 lesión hiperintensa en T2 en ≥ 2 de las 4 localizaciones típicas del SNC', '1) Periventricular (Dedos de Dawson), 2) Cortical / Yuxtacortical, 3) Infratentorial (tronco/cerebelo), 4) Médula espinal', 'Demuestra que el proceso inflamatorio desmielinizante afecta múltiples áreas no contiguas del neuroeje'],
        ['Diseminación en Tiempo (DIT - RMN)', 'Coexistencia de lesiones captantes y no captantes de gadolinio en RMN basal, o nueva lesión T2/Gd+ en control', 'Cualquier territorio típico cerebral o médula espinal', 'Evidencia que la actividad patológica se genera en momentos cronológicos temporalmente separados'],
        ['Bandas Oligoclonales (BOC en LCR)', 'Presencia de ≥ 2 bandas oligoclonales de IgG en LCR ausentes en suero (Patrón Tipo 2 de isoelectroenfoque)', 'Síntesis intratecal de inmunoglobulinas por clones de células plasmáticas en el SNC', 'APORTE CLAVE McDONALD 2017: En un paciente con un primer brote (CIS) y DIS en RMN, las BOC positivas SUSTITUYEN la DIT'],
        ['Lesiones Periventriculares', 'Lesiones ovoideas con eje mayor perpendicular a los ventrículos laterales (Dedos de Dawson)', 'Cuerpo calloso, sustancia blanca periventricular y comisuras', 'Reflejan inflamación venulocéntrica profunda; altamente sugestivas de esclerosis múltiple'],
        ['Lesiones Medulares Típicas', 'Lesiones asimétricas, periféricas (posterolaterales), de menos de 2 cuerpos vertebrales de extensión', 'Médula cervical (frecuente) o torácica', 'Permiten diferenciar de Neuromielitis Óptica (NMOSD), cuyas lesiones son centrales y continuas ≥ 3 vértebras (LETM)']
      ]
    },
    severityTable: {
      title: 'Formas Clínicas Evolutivas y Escala Expandida del Estado de Discapacidad (EDSS)',
      headers: ['Subtipo / Nivel EDSS', 'Definición y Proporción Epidemiológica', 'Curso Clínico y Hallazgos Típicos', 'Pronóstico y Enfoque de Manejo'],
      rows: [
        ['EM Remitente-Recurrente (EMRR)', '85% de los debuts; predominio femenino 3:1 entre 20 y 45 años', 'Brotes agudos con déficit focal claro seguidos de remisión completa o con secuelas estables; sin progresión entre brotes', 'Respuesta excelente a corticoides y a Fármacos Modificadores de la Enfermedad (FME) bajo GES N° 69'],
        ['EM Secundaria Progresiva (EMSP)', 'Fase tardía de la EMRR (50% de las EMRR no tratadas tras 10-20 años)', 'Deterioro funcional continuo insidioso con aumento paulatino de discapacidad, independiente de la ocurrencia de brotes', 'Refleja atrofia cerebral y daño neurodegenerativo axonal irreversible; menor respuesta a inmunoterapias antiinflamatorias'],
        ['EM Primaria Progresiva (EMPP)', '10-15% de los casos; relación mujer:hombre 1:1, inicio más tardío (~40-50 años)', 'Progresión motora continua desde el debut sin brotes ni remisiones clínicas definidas; frecuente paraparesia espástica', 'Ocrelizumab (anti-CD20) es la única terapia aprobada con beneficio comprobado para enlentecer la discapacidad'],
        ['EDSS 0 – 4.5 puntos', 'Discapacidad leve a moderada', 'Examen neurológico alterado pero marcha totalmente autónoma e independiente sin asistencia ni descanso ≥ 500 m', 'Objetivo terapéutico: NEDA (No Evidence of Disease Activity: sin brotes, sin progresión EDSS y sin nuevas lesiones RMN)'],
        ['EDSS 6.0 puntos', 'Hito clínico mayor de discapacidad de la marcha', 'Requiere ayuda unilateral intermitente o constante (bastón, muleta) para caminar una distancia de 100 metros', 'Pérdida de independencia comunitaria plena; alto impacto socioeconómico y laboral'],
        ['EDSS 6.5 puntos', 'Discapacidad severa bilateral', 'Requiere ayuda bilateral constante (dos bastones, andador) para caminar 20 metros sin descansar', 'Candidato a rehabilitación motora intensiva y terapias biológicas de rescate'],
        ['EDSS 7.0 – 8.0 puntos', 'Confinamiento a silla de ruedas o cama', 'Incapaz de caminar más de 5 metros; 7.0 se moviliza en silla de ruedas; 8.0 confinado a cama con movilidad de brazos', 'Riesgo de úlceras por presión, infecciones urinarias a repetición y trombosis venosa profunda']
      ]
    },
    treatmentTable: {
      title: 'Tratamiento del Brote Agudo y Terapias Modificadoras de Enfermedad GES 69',
      headers: ['Categoría / Fármaco', 'Mecanismo de Acción Principal', 'Pauta Posológica y Administración', 'Efectos Adversos y Alertas EUNACOM'],
      rows: [
        ['Metilprednisolona EV (Brote)', 'Potente inmunosupresor y antiinflamatorio; sella la barrera hematoencefálica', '1 g (1000 mg)/día EV diluido en SF en infusión de 2 h por 3 a 5 días consecutivos', 'Insomnio, sabor metálico, hiperglicemia, gastritis aguda (asociar Omeprazol); no requiere descenso oral'],
        ['Plasmaféresis de Rescate', 'Remoción física de inmunoglobulinas, complemento y citoquinas circulantes', '5 a 7 recambios plasmáticos en días alternos', 'Indicada en brotes graves discapacitantes (hemiparesia severa, ceguera por NO) refractarios a esteroides'],
        ['Fumarato de Dimetilo (1ª línea)', 'Activación de vía antioxidante Nrf2 y modulación de citoquinas hacia perfil Th2', '240 mg vía oral cada 12 horas (cápsulas con recubrimiento entérico)', 'Flushing (rubefacción facial), diarrea y náuseas; requiere hemograma por riesgo de linfopenia sostenida'],
        ['Teriflunomida (1ª línea)', 'Inhibición de enzima dihidroorotato deshidrogenasa (DHODH); frena proliferación T y B', '14 mg vía oral una vez al día', 'Hepatotoxicidad (controlar transaminasas); ALTA TERATOGENICIDAD: lavado con colestiramina si embarazo'],
        ['Natalizumab (Alta eficacia)', 'Anticuerpo monoclonal anti-integrina α4 (VLA-4); bloquea migración leucocitaria al SNC', '300 mg en infusión endovenosa cada 4 semanas', '¡RIESGO MAYOR!: Leucoencefalopatía Multifocal Progresiva (LMP) por reactivación de Virus JC; titular anti-JCV'],
        ['Ocrelizumab (Alta eficacia)', 'Anticuerpo monoclonal anti-CD20; induce citólisis y degranulación de linfocitos B', '600 mg EV cada 6 meses (dosis inicial: dos infusiones de 300 mg separadas por 14 días)', 'Aprobado para EMRR y EMPP; reacciones a la infusión, infecciones del tracto respiratorio, reactivación de Hepatitis B'],
        ['Fingolimod (Alta eficacia)', 'Modulador de receptor S1P; secuestra linfocitos vírgenes dentro de ganglios linfáticos', '0.5 mg vía oral una vez al día', 'Bradicardia y bloqueo AV en primera dosis (monitoreo ECG 6 h); edema macular (fondo de ojo pre y post)']
      ]
    },
    vignette: 'Mujer de 26 años, profesora de educación básica, consulta en el servicio de urgencia por disminución progresiva de la agudeza visual del ojo derecho de 3 días de evolución, que se acompaña de dolor sordo y punzante retroorbitario que empeora francamente al mover los ojos. Además refiere que los colores (en particular los tonos rojos) se ven pálidos y deslavados. No refiere antecedentes mórbidos, salvo un episodio de parestesias transitorias en la pierna izquierda hace un año que duró dos semanas y resolvió espontáneamente. Al examen físico: agudeza visual ojo derecho 20/100, ojo izquierdo 20/20. El examen pupilar revela que al iluminar el ojo derecho ambas pupilas se dilatan paradójicamente (Defecto Pupilar Aferente Relativo / Pupila de Marcus Gunn derecha). El fondo de ojo no muestra edema de papila. La Resonancia Magnética de encéfalo con gadolinio revela múltiples lesiones hiperintensas en T2/FLAIR ovoideas perpendiculares a los ventrículos laterales (Dedos de Dawson) y una lesión yuxtacortical frontal izquierda; dos de las lesiones periventriculares captan intensamente gadolinio. La punción lumbar evidencia 3 células mononucleares/μL y el isoelectroenfoque detecta 4 bandas oligoclonales IgG presentes exclusivamente en el LCR.',
    explicacion: 'El cuadro de pérdida visual dolorosa monocular con discromatopsia y defecto pupilar aferente relativo en una mujer joven es el prototipo de Neuritis Óptica Retrobulbar (Síndrome Clínicamente Aislado). La neuroimagen demuestra Diseminación en Espacio (DIS, con lesiones periventriculares y yuxtacorticales) y simultáneamente Diseminación en Tiempo (DIT, por la presencia concomitante de lesiones captantes de gadolinio activas y no captantes crónicas, reforzada de manera incontrovertible por las Bandas Oligoclonales IgG positivas en LCR según los Criterios de McDonald 2017). Se confirma el diagnóstico de Esclerosis Múltiple Remitente-Recurrente (Garantía GES N° 69). La conducta terapéutica inmediata para el brote agudo es administrar pulsos de Metilprednisolona endovenosa (1 g/día por 3 a 5 días) bajo protección gástrica con omeprazol, derivando de urgencia a neurología para enrolamiento GES e inicio precoz de terapia modificadora de la enfermedad.',
    keyPoints: [
      'La Esclerosis Múltiple es una afección autoinmune crónica desmielinizante del SNC típica de mujeres de 20-45 años; la forma Remitente-Recurrente (EMRR) representa el 85% de los debuts.',
      'Presentaciones clínicas clásicas: neuritis óptica monocular dolorosa con Marcus Gunn (DPAR), mielitis transversa parcial y oftalmoplejía internuclear bilateral (lesión del FLM).',
      'El fenómeno de Uhthoff (empeoramiento transitorio de síntomas con el calor/fiebre) y el signo de Lhermitte (descarga eléctrica al flectar el cuello) son sellos semiológicos cardinales.',
      'Criterios de McDonald (2017): exigen Diseminación en Espacio (DIS en ≥ 2 de 4 territorios: periventricular, yuxtacortical, infratentorial, médula) y Diseminación en Tiempo (DIT).',
      'Las Bandas Oligoclonales IgG en LCR (patrón 2) reflejan síntesis intratecal autónoma de anticuerpos y según McDonald 2017 SUSTITUYEN el criterio de DIT ante un primer brote con DIS.',
      'El tratamiento del brote agudo consiste en Metilprednisolona EV 1 g/día por 3 a 5 días; la mantención se efectúa con FME (GES 69): dimetilfumarato, natalizumab (riesgo LMP por virus JC) u ocrelizumab.'
    ],
    questions: [
      {
        stem: 'La esclerosis múltiple puede presentar todos los síntomas siguientes, EXCEPTO:',
        options: [
          { id: 'A', text: 'Hemiparesia' },
          { id: 'B', text: 'Ataxia' },
          { id: 'C', text: 'Hemihipoestesia' },
          { id: 'D', text: 'Incontinencia urinaria' },
          { id: 'E', text: 'Afasia de comprensión' }
        ],
        correcta: 'E',
        explicacion: 'La esclerosis múltiple es una enfermedad inflamatoria desmielinizante de la sustancia blanca del sistema nervioso central (cerebro, médula espinal y nervios ópticos). Sus manifestaciones clínicas típicas derivan de lesiones axonales subcorticales y de vías de conducción: paresias piramidales (A), ataxia cerebelosa (B), déficits sensitivos (C) y disfunción esfinteriana vesical (D). Las afasias corticales complejas, como la afasia de comprensión (afasia de Wernicke), se deben a lesiones corticales focales destructivas de la sustancia gris en el lóbulo temporal superior dominante (típicamente de origen isquémico cerebrovascular) y son extraordinariamente atípicas y ajenas al cuadro clásico de la esclerosis múltiple.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.008'
      },
      {
        stem: 'Paciente de 65 años sin antecedentes mórbidos. Hace 4 meses con conducta más apática y fallas reiteradas en la memoria. Los familiares se muestran muy preocupados y refieren que además ha presentado caídas en múltiples ocasiones y también incontinencia urinaria. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'Enfermedad de Alzheimer inicial' },
          { id: 'B', text: 'AVE a repetición' },
          { id: 'C', text: 'Demencia por cuerpos de Lewy' },
          { id: 'D', text: 'Demencia frontotemporal' },
          { id: 'E', text: 'Hidrocefalia normotensiva' }
        ],
        correcta: 'E',
        explicacion: 'El cuadro clínico corresponde a la tríada clásica de Hakim-Adams patognomónica de la Hidrocefalia Normotensiva (HNT): 1) Trastorno de la marcha (apraxia de la marcha / "marcha magnética", manifestada por caídas frecuentes y el síntoma más precoz y reversible); 2) Deterioro cognitivo subcortical (apatía, bradipsiquia y fallas amnésicas); y 3) Incontinencia urinaria de urgencia. La hidrocefalia normotensiva es una causa tratable y potencialmente reversible de demencia mediante derivación ventrículo-peritoneal.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.008'
      },
      {
        stem: 'Enfermo de 76 años que acude a la consulta por pérdida de fuerza, fundamentalmente proximal, en miembros superiores. La exploración neurológica evidencia pérdida de fuerza, atrofia y fasciculaciones en varios grupos musculares de miembros superiores, así como discreta pérdida de fuerza en los músculos tibiales anteriores. Los reflejos osteotendinosos son vivos y simétricos y la sensibilidad es normal. El estudio electrofisiológico demuestra signos de denervación en múltiples músculos con conducción nerviosa sensitiva normal. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'Esclerosis lateral amiotrófica' },
          { id: 'B', text: 'Síndrome miasténico tipo Eaton-Lambert' },
          { id: 'C', text: 'Miopatía tirotóxica con fasciculaciones' },
          { id: 'D', text: 'Espondilosis cervical' },
          { id: 'E', text: 'Atrofia muscular espinal de comienzo tardío' }
        ],
        correcta: 'A',
        explicacion: 'El cuadro clínico y electrofisiológico es patognomónico de la Esclerosis Lateral Amiotrófica (ELA). El sello distintivo irrebatible es la coexistencia en el mismo territorio anatómico de signos de segunda motoneurona (debilidad muscular flácida, atrofia marcada y fasciculaciones con denervación en EMG) junto con signos de primera motoneurona (reflejos osteotendinosos exaltados o hiperreflexia y clonus), en ausencia estricta de alteraciones sensitivas objetivas. La conservación de la sensibilidad confirma la degeneración pura del sistema motor corticoespinal y de las astas anteriores de la médula.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.008'
      },
      {
        stem: '¿Cuál de las siguientes alteraciones es MENOS probable de encontrar en un paciente con esclerosis lateral amiotrófica?',
        options: [
          { id: 'A', text: 'Fasciculaciones' },
          { id: 'B', text: 'Atrofia muscular' },
          { id: 'C', text: 'Hiperreflexia' },
          { id: 'D', text: 'Hipoestesia' },
          { id: 'E', text: 'Disfagia' }
        ],
        correcta: 'D',
        explicacion: 'La Esclerosis Lateral Amiotrófica (ELA) es una enfermedad neurodegenerativa que destruye de manera selectiva y exclusiva las neuronas motoras superiores (corteza motora) e inferiores (troncoencéfalo y astas anteriores espinales). En consecuencia, produce atrofia (B), fasciculaciones (A), espasticidad con hiperreflexia (C) y compromiso bulbar con disfagia y disartria (E). Las vías y modalidades sensoriales (tacto, dolor, propiocepción, temperatura) están rigurosamente preservadas, al igual que los movimientos oculomotores y el control de esfínteres; por ende, encontrar hipoestesia o cualquier déficit sensitivo objetivo es extraordinariamente improbable y obliga a replantear el diagnóstico.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.008'
      }
    ]
  },

  // ==========================================================================
  // TEMA 10.19: PARÁLISIS FACIAL PERIFÉRICA VS CENTRAL Y NEUROPATÍAS POR ATRAPAMIENTO (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'neuro-19',
    classId: 'neuro-19',
    tier: 2,
    blockNum: 4,
    blockName: 'Patología Neuromuscular, Desmielinizante y Nervio Periférico',
    topicLabel: '10.19',
    title: 'Parálisis Facial Periférica (Bell) vs Central y Neuropatías por Atrapamiento',
    perfilCode: '1.10.1.016',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Realizar',
    ges: 'Manejo ambulatorio en Atención Primaria de Salud (APS) y Servicio de Urgencia · Derivación oportuna a especialista si hay banderas rojas, parálisis atípica o falta de recuperación tras 3 semanas.',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Media-alta rentabilidad · Semiología obligatoria en urgencias y medicina ambulatoria',
    svg: null,
    algoTitle: null,
    diagram: null,
    contexto: 'La parálisis facial es un motivo de consulta neurológica sumamente prevalente en atención primaria y urgencias. La competencia semiológica primordial evaluada en el EUNACOM es la distinción inequívoca entre una Parálisis Facial Periférica (infranuclear, del tronco o núcleo del VII par) y una Parálisis Facial Central (supranuclear, de la vía piramidal corticonuclear). Este diagnóstico diferencial radica en la anatomía del núcleo facial: las motoneuronas que inervan los músculos de la mitad superior de la cara (músculo frontal y orbicular de los párpados) reciben inervación corticonuclear bilateral (de ambos hemisferios cerebrales), mientras que las que inervan la mitad inferior de la cara reciben únicamente inervación contralateral. En consecuencia, la Parálisis Facial Periférica compromete de forma homogénea TODA la hemicara ipsilateral (frente, ceja, párpados y boca, con signo de Bell e imposibilidad de arrugar la frente), mientras que la Parálisis Facial Central compromete exclusivamente los dos tercios inferiores de la cara contralateral, PRESERVANDO rigurosamente la capacidad de arrugar la frente y ocluir el ojo. La Parálisis de Bell (idiopática, asociada a reactivación de VHS-1) exige corticoides precoces y protección ocular obligatoria. Asimismo, las neuropatías por atrapamiento periférico (Síndrome del Túnel Carpiano) demandan precisión semiológica para su manejo conservador y quirúrgico.',
    contentSections: [
      {
        subhead: '1. Neuroanatomía y Diagnóstico Diferencial: Facial Periférica vs Central',
        paragraphs: [
          'La distinción anatómica y clínica entre parálisis facial periférica y central es uno de los pilares semiológicos más reproducibles del examen físico (véase Tabla 10.19.1: Diagnóstico Diferencial de Parálisis Facial y Neuropatías por Atrapamiento):',
          '• <strong>Parálisis Facial Periférica (Parálisis Infranuclear / de Bell):</strong> Se debe a la lesión del nervio facial en cualquier punto de su trayecto desde el núcleo pontino en el troncoencefálico hasta sus ramas periféricas temporofacial y cervicofacial. Produce una <strong>paresia o parálisis flácida completa y homogénea de todos los músculos de la mímica de la hemicara ipsilateral</strong>: el paciente no puede arrugar la frente, no puede elevar la ceja, presenta borramiento de los surcos frontales, caída de la comisura labial y desviación de la boca hacia el lado sano al sonreír.',
          '  - <strong>Lagoftalmos y Signo de Bell:</strong> Imposibilidad de ocluir completamente el ojo ipsilateral por paresia del músculo orbicular de los párpados. Al solicitar al paciente que cierre los ojos con fuerza, se observa la rotación fisiológica del globo ocular hacia arriba y afuera, dejando al descubierto la esclerótica blanca (<strong>Signo de Bell positivo</strong>).',
          '  - <strong>Síntomas acompañantes según el nivel de lesión en el canal de Falopio:</strong> 1) <em>Hiperacusia dolorosa ipsilateral</em> (parálisis del músculo del estribo/estapedio, inervado por una rama intrapetrosa del VII par, que pierde su efecto amortiguador acústico); 2) <em>Ageusia</em> (pérdida de la sensibilidad gustativa en los 2/3 anteriores de la lengua ipsilateral por afectación de la cuerda del tímpano); y 3) <em>Alteración del lagrimeo y salivación</em> (compromiso del nervio petroso superficial mayor y fibras parasimpáticas submandibulares). Dolor retroauricular mastoideo leve precede al cuadro en el 60% de los casos.',
          '• <strong>Parálisis Facial Central (Parálisis Supranuclear):</strong> Ocurre por lesión de la neurona motora superior en la corteza precentral motora o en la vía córtico-nuclear (cápsula interna, troncoencefálico superior por encima del núcleo del VII par), clásicamente en el contexto de un <strong>Accidente Cerebrovascular (ACV) isquémico o hemorrágico</strong>.',
          '  - <em>Hallazgo patognomónico distintivo:</em> <strong>La frente y el cierre ocular están RIGUROSAMENTE PRESERVADOS</strong>. El paciente es perfectamente capaz de arrugar la frente y fruncir ambas cejas simétricamente, y ocluye los ojos sin lagoftalmos ni signo de Bell. La debilidad se restringe de forma aislada a la <strong>mitad inferior de la cara contralateral a la lesión encefálica</strong> (borramiento del surco nasogeniano, descenso de la comisura bucal, caída de saliva al beber). Frecuentemente se asocia a hemiparesia braquiocrural y signos piramidales del mismo lado de la paresia facial.',
          '• <strong>Síndrome de Ramsay Hunt:</strong> Reactivación del Virus Varicela Zóster (VVZ) en el ganglio geniculado del VII par. Clínicamente se manifiesta por la tríada de: 1) Parálisis facial periférica severa; 2) Otalgia aguda intensa y lancinante; y 3) <strong>Erupción vesicular eritematosa herpética típica en el conducto auditivo externo, concha del pabellón auricular y velo del paladar</strong>. Puede asociar hipoacusia y vértigo por contigüidad con el VIII par. Tratamiento: <strong>Prednisona 1 mg/kg/día + Valaciclovir 1000 mg c/8 h (o Aciclovir 800 mg 5 veces al día)</strong> por 7 a 10 días.'
        ]
      },
      {
        subhead: '2. Manejo Terapéutico y Reglas de Oro en Parálisis de Bell',
        paragraphs: [
          'La Parálisis de Bell representa el 70-80% de las parálisis faciales agudas. Su etiología es un edema inflamatorio del nervio facial atribuido a reactivación del Virus Herpes Simple tipo 1 (VHS-1) dentro del segmento laberíntico estrecho del canal óseo de Falopio. El abordaje comprende dos medidas simultáneas inaplazables:',
          '• <strong>1. Corticoterapia Oral Precoz:</strong> Es la única intervención farmacológica que ha demostrado con evidencia clase I acelerar la recuperación completa y prevenir la denervación axonal permanente. Se debe iniciar <strong>dentro de las primeras 72 horas desde el debut</strong>: <strong>Prednisona oral 60 mg/día (o 1 mg/kg/día) durante 7 días, seguida de un descenso progresivo en los 3 a 5 días posteriores</strong>. El uso de antivirales (aciclovir o valaciclovir) no ha demostrado beneficio significativo en la parálisis de Bell aislada y no se recomienda de rutina, reservándose exclusivamente para el Síndrome de Ramsay Hunt.',
          '• <strong>2. Protección Ocular Obligatoria:</strong> <em>¡Principio preventivo vital!:</em> Debido al lagoftalmos y a la ausencia de parpadeo espontáneo protector, la córnea queda permanentemente expuesta al aire, desecándose con alto riesgo de desarrollar <strong>queratitis por exposición, abrasión corneal, úlcera corneal infecciosa y pérdida irreversible de la visión</strong>.',
          '  - <em>Indicaciones no negociables al paciente:</em> 1) <strong>Lágrimas artificiales lubricantes</strong> (gotas de carboximetilcelulosa o hipromelosa) aplicadas durante el día cada 1 a 2 horas de forma continua; 2) <strong>Ungüento oftálmico lubricante espeso</strong> por las noches; y 3) <strong>Oclusión ocular nocturna con parche oclusivo</strong> o cinta micropore fijando suavemente el párpado superior cerrado durante las horas de sueño.',
          '• <strong>Evolución y Criterios de Derivación:</strong> Más del 85% de los pacientes inicia recuperación funcional espontánea dentro de las 3 semanas y logra restitución completa hacia el 3° a 6° mes. Criterios de derivación a especialista: falta de mejoría al cabo de 3 semanas, compromiso de otros pares craneales (V, VI, VIII), afectación bilateral simultánea, presencia de masa parotídea palpable o sospecha de Ramsay Hunt.'
        ]
      },
      {
        subhead: '3. Neuropatías por Atrapamiento: Síndrome del Túnel Carpiano y Nervio Peroneo',
        paragraphs: [
          'Las neuropatías por atrapamiento se producen por compresión mecánica crónica de un nervio periférico al atravesar conductos osteofibrosos anatómicamente estrechos:',
          '• <strong>Síndrome del Túnel Carpiano (STC):</strong> Es la mononeuropatía por atrapamiento más frecuente en la práctica médica. Corresponde a la compresión del <strong>nervio mediano</strong> bajo el retináculo flexor (ligamento anular del carpo) en la muñeca. Factores predisponentes: sexo femenino, embarazo, hipotiroidismo, diabetes mellitus, artritis reumatoide, obesidad y trabajos manuales repetitivos con flexión/extensión forzada.',
          '  - <em>Cuadro Clínico:</em> <strong>Parestesias, hormigueo, entumecimiento y dolor nocturno</strong> de intensidad molesta en el territorio sensitivo del mediano (cara palmar del pulgar, índice, medio y mitad radial del anular). Clásicamente el paciente despierta en la noche con la mano "dormida" y experimenta alivio momentáneo al sacudir vigorosamente la mano (<strong>Signo de Flick</strong>).',
          '  - <em>Maniobras de Provocación al Examen Físico:</em>',
          '    1) <strong>Signo de Phalen:</strong> El paciente mantiene la flexión forzada de ambas muñecas a 90° oponiendo los dorsos de las manos durante 60 segundos. Es positivo si se reproducen o intensifican las parestesias en el territorio del nervio mediano (sensibilidad ~70%).',
          '    2) <strong>Signo de Tinel:</strong> La percusión suave con el martillo de reflejos sobre la superficie volar del túnel carpiano en la muñeca desencadena una sensación de descarga eléctrica o disestesias hacia los dedos inervados por el mediano.',
          '  - <em>Signos de Severidad Crónica:</em> Hipoestesia en los pulpejos de los tres primeros dedos y <strong>atrofia de la eminencia tenar</strong> con debilidad para la abducción corta y oposición del pulgar (la aducción del pulgar depende del nervio ulnar y está preservada).',
          '  - <em>Manejo Escalonado:</em> En casos leves a moderados: <strong>férula de inmovilización de muñeca en posición neutra durante la noche</strong> por 4 a 8 semanas, modificación biomecánica e infiltración local con corticoides. En casos severos con déficit sensitivo persistente, atrofia tenar objetiva o refractariedad al tratamiento conservador tras confirmación electromiográfica: <strong>liberación quirúrgica del ligamento anular del carpo</strong>.',
          '• <strong>Atrapamiento del Nervio Fibular / Peroneo Común (Cabeza de la Fíbula):</strong> Compresión externa a nivel del cuello de la fíbula por posturas prolongadas con piernas cruzadas, yesos apretados o encamamiento. Cursa con <strong>pie caído (imposibilidad para la dorsiflexión y eversión del pie) con marcha en estepaje (steppage)</strong> e hipoestesia en el dorso del pie, con conservación de la flexión plantar e inversión (inervadas por el nervio tibial).'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial de Parálisis Facial y Neuropatías por Atrapamiento',
      headers: ['Entidad Clínica', 'Localización Lesional y Mecanismo', 'Manifestaciones Clínicas Cardinales', 'Hallazgos de Examen Físico y Conducta EUNACOM'],
      rows: [
        ['Parálisis Facial Periférica (Bell)', 'Lesión del nervio facial en el canal de Falopio (edema viral VHS-1)', 'Paresia COMPLETA de toda la hemicara ipsilateral: frente, ojo, mejilla y boca', 'Imposibilidad de arrugar la frente · Signo de Bell (+) y lagoftalmos · Prednisona 60 mg x 7 d + Protección ocular'],
        ['Parálisis Facial Central', 'Lesión de vía córtico-nuclear supranuclear contralateral (ACV isquémico/hemorrágico)', 'Paresia circunscrita a los DOS TERCIOS INFERIORES de la cara contralateral', 'CAPACIDAD DE ARRUGAR LA FRENTE Y CERRAR EL OJO ESTRICTAMENTE PRESERVADA · TAC de encéfalo urgente (GES 37)'],
        ['Síndrome de Ramsay Hunt', 'Reactivación de Virus Varicela Zóster en el ganglio geniculado del VII par', 'Parálisis facial periférica completa + Otalgia severa + Erupción vesicular en CAE', 'Vesículas herpéticas en concha auricular y tímpano · Hipoacusia/vértigo · Prednisona + Valaciclovir / Aciclovir precoz'],
        ['Síndrome del Túnel Carpiano', 'Compresión del nervio mediano bajo el retináculo flexor en la muñeca', 'Parestesias y dolor nocturno en 1°, 2°, 3° y mitad radial del 4° dedo; signo de Flick', 'Signo de Phalen (+) y Tinel (+) · Atrofia tenar tardía · Férula nocturna neutra; cirugía descompresiva si atrofia'],
        ['Atrapamiento del Nervio Ulnar', 'Compresión del nervio ulnar en el túnel cubital (codo) o canal de Guyón (muñeca)', 'Parestesias en 5° dedo y mitad medial del 4° dedo; debilidad de músculos intrínsecos', 'Signo de Froment (+) por debilidad del aductor del pulgar · Atrofia hipotenar · Mano en garra ulnar'],
        ['Neuropatía Peronea Común', 'Compresión del nervio peroneo común en el cuello de la fíbula / cabeza del peroné', 'Pie caído agudo con marcha equina (estepaje); tropiezos al caminar', 'Pérdida de dorsiflexión y eversión del pie · Conserva flexión plantar (tibial) · Férula antiequino y descompresión']
      ]
    },
    vignette: 'Hombre de 22 años, previamente sano, consulta en el servicio de urgencia por notar "la cara chueca" y dificultad para hablar y comer al levantarse hoy en la mañana. Refiere que ayer por la tarde sintió una leve molestia retroauricular derecha. Al examen físico se aprecia una marcada asimetría facial derecha: el paciente es incapaz de elevar la ceja derecha, no logra arrugar la frente del lado derecho y presenta un borramiento completo de los surcos frontales derechos. Al pedirle que cierre los ojos con fuerza, el ojo derecho queda entreabierto unos 4 mm (lagoftalmos) y se aprecia el desplazamiento del globo ocular hacia arriba dejando ver la esclerótica blanca. La comisura de la boca está desviada hacia la izquierda. El examen de los demás pares craneales, la fuerza en extremidades, la sensibilidad corporal y los reflejos osteotendinosos son rigurosamente normales. El conducto auditivo externo se observa limpio y sin vesículas.',
    explicacion: 'El paciente presenta una Parálisis Facial Periférica derecha aguda clásica (Parálisis de Bell). El elemento semiológico determinante para categorizarla como periférica y descartar de forma categórica un ACV o patología central es el compromiso homogéneo de toda la hemicara ipsilateral, incluyendo de manera indiscutible la rama frontal superior (imposibilidad de arrugar la frente y elevar la ceja derecha) y el músculo orbicular del ojo con lagoftalmos y Signo de Bell positivo. La conducta médica inmediata consiste en: 1) Iniciar Prednisona oral a 60 mg/día durante 7 días seguido de descenso gradual en los siguientes 5 días (máxima efectividad iniciada antes de las 72 horas); y 2) Indicar medidas estrictas de protección ocular con lágrimas artificiales diurnas frecuentes, ungüento lubricante nocturno y oclusión con parche ocular durante el sueño para prevenir una queratopatía por exposición.',
    keyPoints: [
      'La parálisis facial periférica (Bell) afecta TODA la hemicara ipsilateral, incluyendo frente y ceja, con imposibilidad de cerrar el ojo (lagoftalmos y Signo de Bell).',
      'La parálisis facial central respeta rigurosamente la frente y el cierre ocular (conserva la capacidad de arrugar la frente) debido a la inervación cortical bilateral del núcleo superior.',
      'El tratamiento de elección en la Parálisis de Bell es Prednisona oral 1 mg/kg/día (60 mg/día) iniciada precozmente (< 72 horas) durante 7 a 10 días.',
      'La protección ocular activa es obligatoria en parálisis periférica (lágrimas artificiales de día, ungüento lubricante y oclusión nocturna) para evitar queratitis por exposición.',
      'El Síndrome del Túnel Carpiano produce parestesias nocturnas en los primeros 3 dedos y medio; se diagnostica con Phalen y Tinel y se trata con férula neutra o cirugía si hay atrofia tenar.'
    ],
    questions: [
      {
        stem: '¿Cuál de los siguientes hallazgos en el examen físico orientan más a una parálisis facial periférica derecha?',
        options: [
          { id: 'A', text: 'Mantener la capacidad de arrugar la frente y cerrar el ojo derecho' },
          { id: 'B', text: 'Compromiso de músculos masticatorios derechos' },
          { id: 'C', text: 'Presencia de hemiparesia braquiocrural derecha' },
          { id: 'D', text: 'Presencia de hemihipoestesia facial derecha' },
          { id: 'E', text: 'Parálisis facial derecha con compromiso armónico de frente, ojo, boca y mentón' }
        ],
        correcta: 'E',
        explicacion: 'El hallazgo más fidedigno y orientador de una parálisis facial periférica (infranuclear) es el compromiso armónico y homogéneo de todos los grupos musculares inervados por el VII par craneal en el lado afectado, comprometiendo tanto la parte superior (músculo frontal para arrugar la frente y orbicular de los párpados para cerrar el ojo) como la mitad inferior de la cara (músculos peribucales). En cambio, la parálisis facial central supranuclear respeta la frente y el ojo debido a la doble inervación hemisférica del núcleo facial superior.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.016'
      },
      {
        stem: 'Un paciente de 19 años consulta por imposibilidad de mover la mitad de la cara izquierda, que inició hace 3 horas. Presenta sensibilidad normal y conserva los movimientos masticatorios y oculomotores, sin embargo no es capaz de realizar movimientos con los músculos de expresión facial del lado izquierdo como sonreír, fruncir el ceño, arrugar la frente y tampoco puede cerrar completamente el ojo. El resto del examen neurológico es normal. Además de la protección ocular la conducta más adecuada es:',
        options: [
          { id: 'A', text: 'Iniciar carbamazepina' },
          { id: 'B', text: 'Iniciar clorpromazina' },
          { id: 'C', text: 'Iniciar amitriptilina' },
          { id: 'D', text: 'Iniciar aciclovir' },
          { id: 'E', text: 'Iniciar prednisona' }
        ],
        correcta: 'E',
        explicacion: 'El paciente presenta una Parálisis Facial Periférica aguda izquierda (afectación motora de la frente, cierre ocular y comisura labial). La conducta terapéutica de elección con mayor nivel de evidencia científica según las guías internacionales y la práctica nacional es la administración inmediata de corticoides sistémicos (Prednisona oral 1 mg/kg/día por 7 a 10 días). Su inicio precoz dentro de las primeras 72 horas reduce el edema neural en el canal óseo y previene secuelas axonales permanentes. La protección ocular es complementaria e indispensable.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.016'
      }
    ]
  },

  // ==========================================================================
  // TEMA 10.20: SÍNDROME VERTIGINOSO PERIFÉRICO VS CENTRAL Y PROTOCOLO HINTS (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'neuro-20',
    classId: 'neuro-20',
    tier: 2,
    blockNum: 4,
    blockName: 'Patología Neuromuscular, Desmielinizante y Nervio Periférico',
    topicLabel: '10.20',
    title: 'Síndrome Vertiginoso Periférico vs Central: VPPB, Maniobras de Epley y Protocolo HINTS',
    perfilCode: '1.10.1.025',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Atención en Servicio de Urgencia y APS · En caso de confirmación de Vértigo Central o ACV de fosa posterior (troncoencéfalo / cerebelo) ingresa de inmediato a Garantía GES N° 37.',
    reconstrucciones: 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026',
    frecuencia: 'Alta rentabilidad · Diagnóstico diferencial crítico de urgencias neurológicas y otoneurología',
    svg: null,
    algoTitle: 'Algoritmo de Decisión en Vértigo Agudo: VPPB vs Protocolo HINTS para Descarte de ACV',
    diagram: flow('Algoritmo de Decisión en Vértigo Agudo: VPPB vs Protocolo HINTS para Descarte de ACV', [
      { t: 'Paciente que Consulta por Síndrome Vertiginoso Agudo / Mareo', s: 'Diferenciar vértigo verdadero (ilusión de giro) de presíncope cardiovascular, desequilibrio motor o mareo inespecífico', type: 'acc' },
      { k: 'split', q: 'Patrón Temporal y Desencadenante del Vértigo', s: '¿Episódico paroxístico breve provocado por giros posturales vs continuo prolongado espontáneo?',
        ll: 'Episódico breve (< 1 min) posicional',
        left: { t: 'Maniobra Diagnóstica de Dix-Hallpike', s: 'Nistagmo torsional geotrópico con latencia (2-10 s) y fatigabilidad · Confirma VPPB canal posterior', type: 'dec' },
        rl: 'Vértigo Continuo Prolongado (> 24 h) + Náuseas',
        right: { t: 'Síndrome Vestibular Agudo: Protocolo HINTS', s: 'Head Impulse + Nystagmus + Test of Skew · Discrimina Neuronitis Vestibular de ACV de fosa posterior', type: 'warn' }
      },
      { k: 'split', q: 'Resultado del Examen y Protocolo HINTS', s: 'Evaluación del reflejo vestíbulo-ocular, nistagmo dinámico de mirada y alineamiento ocular vertical',
        ll: 'Dix-Hallpike (+) en VPPB',
        left: { t: 'Maniobra Terapéutica de Epley Inmediata', s: 'Reposición de otolitos hacia el utrículo · No requiere TAC de cerebro ni fármacos sedantes', type: 'acc' },
        rl: 'HINTS Central (INFARCT) o Focalidad',
        right: { t: 'Alerta Roja: ACV Isquémico Fosa Posterior', s: 'Impulso cefálico normal, nistagmo bidireccional o Skew (+) · RMN difusión urgente + UTAC (GES 37)', type: 'crit' }
      },
      { t: 'HINTS Periférico Puro (Impulso anormal + Nistagmo unidireccional + Skew negativo)', s: 'Diagnóstico: Neuronitis Vestibular · Manejo sintomático con dimenhidrinato/conarizina ≤ 48-72 h + rehabilitación precoz', type: 'acc' }
    ]),
    contexto: 'El enfrentamiento del paciente con vértigo y mareo es uno de los mayores desafíos clínicos en los servicios de urgencia y atención primaria. La primera obligación del médico es distinguir el vértigo verdadero (sensación ilusoria subjetiva u objetiva de movimiento rotatorio) de otros cuadros como presíncope, ataxia sensorial o mareo psicógeno. Desde el punto de vista etiológico, la decisión crítica radica en diferenciar los cuadros periféricos benignos (Vértigo Postural Paroxístico Benigno, Neuronitis Vestibular, Enfermedad de Menière) de las emergencias vasculares centrales potencialmente mortales, en especial el Accidente Cerebrovascular Isquémico de Fosa Posterior (infarto cerebeloso o de tronco encefálico en el territorio de la arteria PICA o AICA). En pacientes con síndrome vestibular agudo continuo, el examen semiológico a pie de cama mediante el Protocolo HINTS (Head Impulse, Nystagmus, Test of Skew) posee una sensibilidad diagnóstica superior a la Resonancia Magnética con difusión en las primeras 24 a 48 horas para pesquisar un ACV de fosa posterior. En contrapartida, el VPPB es el vértigo más prevalente del mundo, caracterizado por crisis breves de segundos desencadenadas por cambios posicionales cefálicos, diagnosticado con la Maniobra de Dix-Hallpike y curado definitivamente en la misma consulta mediante la Maniobra de Reposición de Epley.',
    contentSections: [
      {
        subhead: '1. Clasificación Fisiopatológica: Vértigo Periférico vs Vértigo Central',
        paragraphs: [
          'El sistema vestibular integra información de los conductos semicirculares y órganos otolíticos (utrículo y sáculo), transmitida por el nervio vestibular (VIII par) hacia los núcleos vestibulares del troncoencefálico, el cerebelo y la corteza cerebral. Las lesiones se dividen anatómicamente en dos grandes categorías (véase Algoritmo 10.20):',
          '• <strong>Vértigo Periférico (Laberinto o Nervio Vestibular):</strong> Representa más del 85-90% de los casos. Se caracteriza clínicamente por un inicio brusco e intenso de la sensación rotatoria, cortejo vegetativo severo (náuseas intensas, vómitos profusos, diaforesis, palidez), inestabilidad postural leve a moderada con marcha posible (el paciente lateropulsa hacia el lado de la lesión pero no cae desplomado) y frecuente asociación con síntomas auditivos (tinnitus, hipoacusia neurosensorial, plenitud aural) si hay afectación coclear. El nistagmo espontáneo es típicamente <strong>unidireccional, horizontal-rotatorio, con fase lenta hacia el oído lesionado y fase rápida que bate hacia el oído sano; no cambia de dirección con la mirada y se INHIBE significativamente con la fijación de la mirada</strong>.',
          '• <strong>Vértigo Central (Troncoencefálico o Cerebelo):</strong> Representa el 10-15% de los cuadros agudos y constituye una urgencia vital. Producido por infarto vertebrobasilar (PICA, AICA, basilar), hemorragia cerebelosa, esclerosis múltiple o tumores de fosa posterior. La sensación de giro suele ser insidiosa, sorda o mal definida, pero la <strong>inestabilidad y ataxia de la marcha son desproporcionadamente severas</strong> (el paciente no puede mantenerse en pie ni dar un paso sin apoyo). A menudo se acompaña de signos de focalidad neurológica del tronco o cerebelo (disartria, disfagia, diplopía, dismetría, síndrome de Horner). El nistagmo central es <strong>puramente vertical (upbeat o downbeat), torsional puro o bidireccional que cambia de sentido al mirar a derecha o izquierda ("gaze-evoked"), y NO se inhibe con la fijación visual</strong>.'
        ]
      },
      {
        subhead: '2. Síndrome Vestibular Agudo y Protocolo HINTS (Descarte de ACV)',
        paragraphs: [
          'En el paciente que se presenta con un <strong>Síndrome Vestibular Agudo</strong> (vértigo continuo de inicio súbito, nistagmo espontáneo, náuseas e inestabilidad que dura días), el TAC de encéfalo sin contraste tiene una sensibilidad bajísima (&lt; 15-20%) para detectar infartos en la fosa posterior, e incluso la RMN con difusión puede arrojar hasta un 12-20% de falsos negativos en las primeras 24 a 48 horas. El <strong>Protocolo HINTS (Head Impulse, Nystagmus, Test of Skew)</strong> realizado a pie de cama por un médico entrenado alcanza una <strong>sensibilidad del 100% y especificidad del 96% para detectar ACV</strong>, superando a la resonancia hiperaguda (véase Tabla 10.20.1: Protocolo HINTS y Diagnóstico Diferencial de Síndromes Vertiginosos).',
          'El protocolo consta de 3 maniobras oculomotoras clave (regla mnemotécnica del infarto: <strong>INFARCT</strong>: <em>Impulse Normal, Fast-phase Alternating, Refixation on Cover Test</em>):',
          '• <strong>1. HI (Head Impulse Test / Maniobra de Halmagyi):</strong> Evalúa la integridad del Reflejo Vestíbulo-Ocular (RVO). Se rota la cabeza del paciente rápida y pasivamente 10-20° hacia un lado mientras fija la vista en la nariz del examinador. En una patología periférica unilateral (Neuronitis vestibular), el RVO está lesionado: los ojos se desvían con la cabeza y se observa una <strong>sacada correctiva rápida de refijación hacia el centro (test anormal / positivo)</strong>. Por el contrario, en un infarto cerebeloso o de tronco el RVO periférico está indemne: <strong>los ojos permanecen clavados en la nariz sin ninguna sacada correctiva (test NORMAL / NEGATIVO)</strong>. <em>¡Paradoja EUNACOM!:</em> Un Head Impulse TEST NORMAL en un paciente con vértigo continuo agudo es una BANDERA ROJA de ACV central.',
          '• <strong>2. N (Nystagmus):</strong> En patología periférica es unidireccional (fase rápida siempre en el mismo sentido, independientemente de la dirección de la mirada). La presencia de un <strong>nistagmo bidireccional que cambia de dirección según hacia dónde mira el paciente (gaze-evoked)</strong> o un nistagmo vertical puro es categóricamente CENTRAL.',
          '• <strong>3. TS (Test of Skew):</strong> Prueba de oclusión ocular alternante. Se ocluye un ojo y luego se desocluye rápidamente observando el alineamiento vertical. En personas sanas o vértigo periférico los ojos están alineados en el plano vertical (test normal). En lesiones centrales de tronco se produce un desalineamiento vertical oblicuo (<em>Skew deviation</em>), observándose una <strong>sacada de refijación vertical compensatoria (sube o baja) al desocluir el ojo (test anormal / positivo)</strong>.',
          '<em>Resumen de conducta:</em> Si el paciente presenta <strong>CUALQUIERA</strong> de los 3 signos de alarma centrales (Head impulse normal, nistagmo que cambia de dirección o skew deviation presente), o imposibilidad para mantenerse en bipedestación sin apoyo (Grado 3 de ataxia de tronco), se debe activar el código ACV, hospitalizar en UTAC (GES 37) y solicitar Angio-RMN cerebral urgente.'
        ]
      },
      {
        subhead: '3. Patología Periférica: VPPB, Neuronitis Vestibular y Menière',
        paragraphs: [
          'Las tres entidades periféricas más evaluadas en el EUNACOM presentan cursos clínicos nítidamente diferenciables:',
          '• <strong>Vértigo Postural Paroxístico Benigno (VPPB):</strong> Es la causa más frecuente de vértigo en todas las edades. Se produce por <strong>canalitiasis</strong> (desprendimiento de otoconias de carbonato de calcio desde la mácula del utrículo hacia los conductos semicirculares, siendo el <strong>conducto semicircular posterior el afectado en el 85-90% de los casos</strong>).',
          '  - <em>Cuadro Clínico:</em> Crisis de <strong>vértigo rotatorio muy intenso de duración extraordinariamente breve (menos de 60 segundos, típicamente 10 a 30 segundos)</strong>, desencadenado exclusivamente por <strong>cambios de posición de la cabeza respecto a la gravedad</strong>: al acostarse en la cama, girar hacia un lado al dormir, levantarse o mirar hacia el techo. NO cursa con síntomas auditivos (sin hipoacusia ni tinnitus) ni focalidad neurológica.',
          '  - <em>Diagnóstico Definitivo:</em> <strong>Maniobra de Dix-Hallpike positiva</strong>. Al llevar rápidamente al paciente desde posición sentada a decúbito supino con la cabeza girada 45° y colgando 20° bajo la camilla, se reproduce el vértigo y se observa un <strong>nistagmo torsional y vertical hacia arriba (upbeat-geotrópico), con una latencia de inicio de 2 a 10 segundos, duración &lt; 60 segundos y fatigabilidad manifiesta tras maniobras repetidas</strong>.',
          '  - <em>Tratamiento Curativo:</em> <strong>Maniobra de Reposición de Epley</strong>. Consiste en una secuencia de giros cefálicos guiados en 90° que desplazan las partículas otolíticas por gravedad desde el canal posterior de regreso al utrículo, donde son reabsorbidas. Cura más del 80-90% de los casos en la primera sesión. <em>Regla de Oro:</em> <strong>En el VPPB NO se solicitan neuroimágenes (TAC ni RMN) y NO se indican sedantes vestibulares de mantenimiento (conarizina, betahistina ni dimenhidrinato)</strong>, ya que los fármacos son completamente ineficaces contra los cristales físicos y retrasan la compensación fisiológica.',
          '• <strong>Neuronitis Vestibular:</strong> Inflamación del nervio vestibular (habitualmente de origen viral post-infeccioso). Produce una <strong>crisis aguda única de vértigo rotatorio severo continuo de varios días de duración (2 a 3 días intensos, con recuperación paulatina en 2 a 4 semanas)</strong>, náuseas, vómitos y marcha con lateropulsión hacia el lado de la lesión. <strong>NO presenta síntomas auditivos</strong> (lo que la diferencia de la laberintitis aguda). Protocolo HINTS periférico típico (Head Impulse positivo con sacada correctiva hacia el lado enfermo). Tratamiento sintomático inicial: reposo y <strong>sedantes vestibulares (dimenhidrinato 50 mg c/8 h o conarizina) restringidos estrictamente a las primeras 48 a 72 horas</strong>; su uso prolongado está proscrito porque impide la neuroplasticidad y compensación vestibular central.',
          '• <strong>Enfermedad de Menière:</strong> Producida por <strong>hidropesía endolinfática</strong> (acumulación y aumento de presión de la endolinfa en el laberinto membranoso). Cursa con la tétrada clásica recurrente: 1) <strong>Crisis de vértigo rotatorio episódico espontáneo de 20 minutos a 12 horas de duración</strong>; 2) <strong>Hipoacusia neurosensorial fluctuante de frecuencias graves</strong>; 3) <strong>Tinnitus ipsilateral continuo o acentuado en las crisis</strong>; y 4) <strong>Sensación de plenitud u ocupación aural</strong>. Manejo: restricción estricta de sal (&lt; 2 g/día), cafeína y tabaco; diuréticos orales (hidroclorotiazida / triamtereno) y Betahistina (24 mg c/12 h).'
        ]
      }
    ],
    table: {
      title: 'Protocolo HINTS y Diagnóstico Diferencial de Síndromes Vertiginosos Periféricos vs Centrales',
      headers: ['Entidad / Hallazgo', 'Duración del Vértigo', 'Gatillante / Relación Postural', 'Síntomas Auditivos / Focalidad', 'Examen Físico y Conducta EUNACOM'],
      rows: [
        ['VPPB (Canalitiasis Posterior)', 'Segundos (< 60 s; típicamente 10-30 s)', 'SÍ: desencadenado por giros en cama, acostarse o mirar arriba', 'Ausencia estricta de hipoacusia, tinnitus o focalidad neurológica', 'Dix-Hallpike (+) con nistagmo torsional y latencia · Curación con Maniobra de Epley · CERO fármacos'],
        ['Neuronitis Vestibular', 'Días continuos (2-3 d intensos; cede en 3 sem)', 'Continuo espontáneo; se intensifica con movimientos cefálicos', 'SIN hipoacusia ni tinnitus; solo cortejo vegetativo severo', 'HINTS periférico: Head Impulse (+) con sacada · Sedantes vestibulares solo 48-72 h + rehabilitación'],
        ['Enfermedad de Menière', 'Horas (20 min a 12-24 h)', 'Episódico espontáneo recurrente', 'Hipoacusia fluctuante tonos graves + Tinnitus + Plenitud ótica', 'Audiometría confirma hipoacusia sensorial · Restricción de sal (< 2 g/d) + Hidroclorotiazida + Betahistina'],
        ['ACV Fosa Posterior (PICA/AICA)', 'Horas a días continuo', 'Continuo agudo espontáneo; inicio súbito en paciente vascular', 'Frecuente diplopía, disartria, disfagia, dismetría, ataxia de tronco', 'HINTS CENTRAL (INFARCT): Head Impulse NORMAL, nistagmo bidireccional o Skew (+) · RMN y UTAC inmediata (GES 37)'],
        ['H: Head Impulse Test (Halmagyi)', 'Prueba del reflejo vestíbulo-ocular (RVO) al rotar rápidamente la cabeza', 'Periférico: ANORMAL (sacada correctiva hacia el centro)', 'Central: NORMAL (ojos permanecen en la nariz sin sacada)', '¡PARADOJA!: Un impulso cefálico NORMAL en vértigo continuo orienta a ACV isquémico de tronco/cerebelo'],
        ['N: Nystagmus Dinámico', 'Evaluación del nistagmo en mirada primaria y lateral', 'Periférico: Unidireccional horizontal-rotatorio que se inhibe al fijar', 'Central: Bidireccional (cambia de sentido al mirar a los lados) o vertical', 'Nistagmo vertical o que cambia de dirección es patognomónico de lesión central de fosa posterior'],
        ['TS: Test of Skew (Oclusión ocular)', 'Alineación vertical de globos oculares al desocluir alternadamente', 'Periférico: NORMAL (ojos siempre alineados en plano vertical)', 'Central: ANORMAL (Skew deviation: sacada de refijación vertical)', 'La presencia de skew deviation es altamente específica de infarto de troncoencefálico']
      ]
    },
    vignette: 'Mujer de 59 años, con antecedentes de dislipidemia en tratamiento con atorvastatina, consulta en el servicio de urgencia por vértigo severo. Refiere que hoy a las 06:30 de la mañana, al sonar el despertador y girar su cabeza hacia la derecha para incorporarse de la cama, la habitación comenzó a dar vueltas de forma violenta, lo que le provocó intensas náuseas y dos episodios de vómitos alimentarios. El episodio más intenso duró aproximadamente 25 a 30 segundos y luego disminuyó al quedarse quieta boca arriba, pero al volver a intentar sentarse o girar la cabeza hacia la derecha el mareo rotatorio reapareció con igual intensidad. No ha presentado dolor de cabeza, pérdida de audición, zumbido de oídos, debilidad motora ni dificultad para hablar. Al examen físico: PA 138/82 mmHg, FC 76 lpm regular, examen neurológico con pares craneales, fuerza, sensibilidad y pruebas cerebelosas (índice-nariz y diadococinesia) rigurosamente normales. Al realizar la maniobra de Dix-Hallpike hacia la derecha, tras una latencia de 4 segundos, la paciente presenta una crisis de vértigo rotatorio intenso y se observa un nistagmo geotrópico torsional y vertical hacia arriba de 20 segundos de duración que se agota espontáneamente.',
    explicacion: 'El cuadro clínico descrito es el ejemplo canónico de Vértigo Postural Paroxístico Benigno (VPPB) del conducto semicircular posterior derecho. Sus claves clínicas diagnósticas son: 1) Episodios de vértigo rotatorio intenso de corta duración (segundos, < 1 minuto); 2) Desencadenado de forma reproducible por cambios en la posición cefálica con respecto a la gravedad (incorporarse o girar en cama); 3) Ausencia total de síntomas auditivos (sin hipoacusia ni tinnitus) y de signos de focalidad neurológica; y 4) Maniobra de Dix-Hallpike diagnóstica positiva, que reproduce el vértigo y evidencia el nistagmo torsional geotrópico con latencia, corta duración y fatigabilidad. La conducta médica inmediata e indiscutible es realizar la Maniobra Terapéutica de Reposición de Epley en la camilla de atención, la cual reposiciona mecánicamente las otoconias hacia el utrículo. No está justificado solicitar un TAC de encéfalo ni indicar sedantes vestibulares (conarizina o betahistina), los cuales están contraindicados para el manejo de mantenimiento del VPPB.',
    keyPoints: [
      'El vértigo periférico se caracteriza por inicio brusco, gran cortejo vegetativo (náuseas/vómitos) y nistagmo unidireccional que se inhibe al fijar la mirada y no cambia de sentido.',
      'El VPPB es el vértigo más prevalente: dura segundos (< 1 minuto), es gatillado por cambios posturales cefálicos, no tiene hipoacusia y se confirma con Dix-Hallpike (+).',
      'El tratamiento del VPPB es mecánico mediante la Maniobra de Reposición de Epley en la misma consulta; los fármacos antivertiginosos y neuroimágenes NO están indicados.',
      'El Protocolo HINTS a pie de cama supera a la RMN en las primeras 24-48 h del síndrome vestibular agudo para descartar ACV de fosa posterior (tronco/cerebelo).',
      'Regla del ACV en Protocolo HINTS (INFARCT): Impulso cefálico NORMAL, Nistagmo bidireccional (cambia de dirección al mirar a los lados) o Skew deviation presente orientan a ACV central.'
    ],
    questions: [
      {
        stem: 'Un paciente consulta porque hoy al despertar presentó vértigo muy intenso, que inició en el momento en que se levantó de la cama. El vértigo dura algunos segundos y se desencadena con los movimientos de la cabeza. No ha presentado síntomas auditivos. Al examen destaca nistagmo horizontal, con fase rápida a derecha. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'Enfermedad de Meniere' },
          { id: 'B', text: 'Vértigo postural paroxístico benigno' },
          { id: 'C', text: 'Neuronitis vestibular' },
          { id: 'D', text: 'Laberintitis aguda' },
          { id: 'E', text: 'Infarto de cerebelo' }
        ],
        correcta: 'B',
        explicacion: 'El diagnóstico indudable es Vértigo Postural Paroxístico Benigno (VPPB). Las claves semiológicas son la duración paroxística de pocos segundos, el desencadenamiento directo al levantarse o girar la cabeza en la cama, la ausencia total de sintomatología auditiva (no hay hipoacusia ni acúfenos) y el nistagmo objetivable provocado por el movimiento. Menière dura horas y cursa con hipoacusia; la neuronitis vestibular dura días continuos.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.025'
      },
      {
        stem: 'Un paciente de 65 años, consulta por vértigo, asociado a vómitos y dificultades para caminar, ya que se cae hacia la derecha. No presenta síntomas auditivos. Al examen físico se aprecia nistagmo horizontal hacia izquierda y lateropulsiones a derecha. No presenta adiadococinesia ni dismetría. Los síntomas se instalaron relativamente rápida y perduraron cerca de 3 semanas, disminuyendo progresivamente hasta desaparecer. Respondían parcialmente al tratamiento con conarizina oral. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'AVE cerebeloso' },
          { id: 'B', text: 'Vértigo postural paroxístico benigno' },
          { id: 'C', text: 'Neurinoma del acústico' },
          { id: 'D', text: 'Parálisis vestibular' },
          { id: 'E', text: 'Enfermedad de Meniere' }
        ],
        correcta: 'D',
        explicacion: 'El cuadro corresponde a una Neuronitis Vestibular o parálisis vestibular aguda periférica derecha. Cursa con vértigo severo de inicio rápido y duración continua de días a semanas (3 semanas), cortejo vegetativo con vómitos, lateropulsión hacia el lado hipofuncionante (derecha), nistagmo periférico unidireccional con fase rápida compensatoria hacia el lado sano (izquierda) y ausencia de compromiso auditivo o cerebeloso. La resolución paulatina en semanas refleja la compensación vestibular central.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.10.1.025'
      }
    ]
  }
];

module.exports = {
  bloque4,
  bloque4Classes: bloque4,
  flow,
};
