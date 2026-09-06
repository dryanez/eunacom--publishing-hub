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
    const cls = { acc: 'acc', dec: 'dec', warn: 'warn', crit: 'warn' }[o.type] || 'b';
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
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#64748b}
    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#eafdf3}
    .dec{fill:var(--acc-t);stroke:var(--acc-p);stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .ln{stroke:#475569;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque1 = [
  {
    id: 'resp-01',
    classId: 'resp-01',
    tier: 2,
    blockNum: 1,
    blockName: 'Vía Aérea Obstructiva y Función Pulmonar',
    topicLabel: '1.1',
    title: 'Espirometría y Pruebas de Función Pulmonar',
    perfilCode: '1.05.4.001',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Diagnóstico y Confirmación de Asma y EPOC en APS',
    reconstrucciones: '',
    frecuencia: 'Alta · Pregunta fija sobre interpretación de curvas y reversibilidad',
    svg: null, algoTitle: 'Algoritmo de Interpretación Espirométrica Sistemática',
    diagram: flow('Algoritmo de Interpretación Espirométrica Sistemática', [
      { t: 'Paso 1: Relación VEF1/CVF post-broncodilatador', s: 'Punto de corte canónico: 70% (0.70) o Límite Inferior de Normalidad (LIN)' },
      { k: 'split', q: '¿VEF1/CVF < 0.70 post-broncodilatador?', s: 'Define la presencia o ausencia de obstrucción ventilatoria', ll: 'sí (< 0.70)', rl: 'no (≥ 0.70)',
        left: { t: 'Patrón Obstructivo Confirmado', s: 'Test BD: ΔVEF1 ≥ 12% y ≥ 200 mL · Evaluar severidad por % VEF1 teórico', type: 'acc' },
        right: { t: 'Evaluar Capacidad Vital Forzada (CVF)', s: 'Si CVF < 80% → Sospecha restricción (solicitar Pletismografía CPT)', type: 'warn' } },
      { t: 'Interpretación de Respuesta Broncodilatadora (BD)', s: 'Positiva (Asma probable): Reversibilidad total o parcial significativa · Negativa (EPOC típico): Sin cambio significativo', type: 'dec', al: 'clasificación', from: 'left' },
    ]),
    contexto: 'La espirometría con prueba broncodilatadora es el estándar de oro para el diagnóstico de las enfermedades de la vía aérea en el EUNACOM. Es imperativo dominar los criterios de obstrucción fija vs reversible y diferenciar un patrón no obstructivo con CVF baja de una verdadera restricción pulmonar.',
    contentSections: [
      {
        subhead: '1. Criterios de Aceptabilidad y Parámetros Fundamentales',
        paragraphs: [
          'La espirometría evalúa tres variables cardinales: <strong>VEF1</strong> (volumen espiratorio forzado en el primer segundo), <strong>CVF</strong> (capacidad vital forzada) y la <strong>relación VEF1/CVF</strong> (índice de Tiffeneau). Una prueba válida exige al menos 3 maniobras reproducibles con esfuerzo maximal y meseta espiratoria ≥ 6 segundos.',
          'El diagnóstico de <strong>patrón obstructivo</strong> exige obligatoriamente una <strong>relación VEF1/CVF &lt; 0.70</strong> (o bajo el percentil 5 / LIN). La severidad de la obstrucción se gradúa exclusivamente según el VEF1 post-BD: leve (≥ 80%), moderada (50–79%), grave (30–49%) y muy grave (&lt; 30%).',
        ],
      },
      {
        subhead: '2. Prueba de Broncodilatación (Reversibilidad)',
        paragraphs: [
          'Se administra salbutamol 400 mcg en aerosol con aerocámara, repitiendo la maniobra a los 15 minutos. Se considera <strong>respuesta broncodilatadora positiva</strong> cuando se comprueba un <strong>incremento del VEF1 o de la CVF ≥ 12% Y ≥ 200 mL</strong> respecto al valor basal.',
          'Una prueba BD positiva con normalización de la relación VEF1/CVF confirma <strong>asma bronquial</strong>. Si la obstrucción persiste post-BD en un fumador, confirma <strong>EPOC</strong> (obstrucción fija), aunque hasta un tercio de los pacientes con EPOC puede presentar reversibilidad parcial.',
        ],
      },
      {
        subhead: '3. Sospecha de Restricción y Pletismografía',
        paragraphs: [
          'Cuando la relación VEF1/CVF es normal (≥ 0.70) pero la <strong>CVF es &lt; 80%</strong> del valor predicho, la espirometría sugiere una <strong>posible alteración restrictiva</strong> (o defecto ventilatorio no obstructivo).',
          '<strong>Regla de oro EUNACOM:</strong> La espirometría NUNCA confirma restricción. El diagnóstico definitivo de restricción pulmonar exige medir volúmenes pulmonares estáticos mediante <strong>pletismografía corporal</strong>, comprobando una <strong>Capacidad Pulmonar Total (CPT) &lt; 80%</strong>.',
        ],
      },
    ],
    table: {
      title: 'Patrones Espirométricos Fundamentales y Pruebas Confirmatorias',
      headers: ['Patrón Espirométrico', 'VEF1/CVF', 'CVF (% predicho)', 'VEF1 (% predicho)', 'Examen de Confirmación'],
      rows: [
        ['Normal', '≥ 0.70', '≥ 80%', '≥ 80%', 'Espirometría normal concluyente'],
        ['Obstructivo Reversible', '< 0.70', 'Normal o baja', 'Variable (mejora >12% y 200 mL)', 'Test Broncodilatador (Asma)'],
        ['Obstructivo Fijo', '< 0.70 post-BD', 'Normal o baja', 'Reducido post-BD', 'Espirometría post-BD (EPOC)'],
        ['Sugerente de Restricción', '≥ 0.70', '< 80%', 'Proporcionalmente bajo', 'Pletismografía (CPT < 80%)'],
        ['Mixto (Obstr + Restr)', '< 0.70', '< 80%', 'Muy disminuido', 'Pletismografía (CPT baja + VEF1/CVF bajo)'],
      ],
    },
    vignette: 'Hombre de 54 años, fumador de 25 paquetes-año, consulta por disnea de esfuerzo progresiva. La espirometría basal muestra VEF1/CVF 0.58, VEF1 1.60 L (52% predicho) y CVF 2.76 L (78% predicho). Tras 400 mcg de salbutamol inhalado, el VEF1 sube a 1.72 L (aumento de 120 mL y 7.5%) y VEF1/CVF 0.60.',
    explicacion: 'El paciente presenta una limitación crónica al flujo aéreo no completamente reversible (VEF1/CVF post-BD < 0.70 con cambio < 12% y < 200 mL en VEF1), lo que confirma el diagnóstico de Enfermedad Pulmonar Obstructiva Crónica (EPOC) con limitación moderada al flujo aéreo (VEF1 52%).',
    keyPoints: [
      'El patrón obstructivo se define estrictamente por VEF1/CVF < 0.70 post-broncodilatador.',
      'Test BD positivo: aumento del VEF1 o CVF ≥ 12% Y ≥ 200 mL respecto al basal.',
      'La severidad obstructiva se clasifica según el VEF1 post-BD: ≥80% leve, 50-79% moderada, 30-49% grave, <30% muy grave.',
      'Trampa: la espirometría jamás confirma restricción; solo la sugiere cuando la CVF es < 80% con VEF1/CVF normal.',
      'La confirmación categórica de restricción pulmonar exige pletismografía demostrando CPT < 80%.',
    ],
    questions: [
      {
        stem: 'Un paciente de 26 años con antecedentes de rinitis alérgica consulta por episodios recurrentes de tos seca nocturna y disnea sibilante tras realizar ejercicio. Se realiza una espirometría basal que muestra VEF1/CVF de 0.64 y VEF1 del 68% del teórico. Tras la inhalación de 400 mcg de salbutamol, el VEF1 asciende al 84% del predicho, con un incremento absoluto de 420 mL. ¿Cuál es la interpretación diagnóstica más adecuada?',
        options: [
          { id: 'A', text: 'Patrón restrictivo pulmonar puro secundario a hiperreactividad' },
          { id: 'B', text: 'Patrón obstructivo con respuesta broncodilatadora significativa compatible con asma' },
          { id: 'C', text: 'Obstrucción fija de la vía aérea que descarta asma bronquial' },
          { id: 'D', text: 'Espirometría no interpretable que exige solicitar pletismografía inmediata' },
          { id: 'E', text: 'Patrón mixto con atrapamiento aéreo severo' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una relación VEF1/CVF < 0.70 basal que revierte tras broncodilatador con un aumento de VEF1 > 12% y > 200 mL (en este caso 420 mL y 16% absoluto), normalizando la función. Este patrón obstructivo reversible es característico y diagnóstico de asma bronquial. La restricción (A) cursa con relación VEF1/CVF normal. No es una obstrucción fija (C) porque revirtió significativamente.',
        recTag: 'Banco de Preguntas Oficial · Espirometría y Función Pulmonar',
      },
      {
        stem: 'Un paciente de 60 años con disnea de esfuerzo en estudio presenta una espirometría con VEF1/CVF de 0.82, VEF1 del 62% del valor predicho y CVF del 60% del predicho. ¿Cuál es la conducta médica de elección para certificar el diagnóstico funcional?',
        options: [
          { id: 'A', text: 'Iniciar salmeterol con fluticasona por patrón obstructivo leve' },
          { id: 'B', text: 'Solicitar pletismografía corporal para medir Capacidad Pulmonar Total (CPT)' },
          { id: 'C', text: 'Realizar test de provocación con metacolina en forma ambulatoria' },
          { id: 'D', text: 'Asumir diagnóstico definitivo de fibrosis pulmonar e iniciar pirfenidona' },
          { id: 'E', text: 'Repetir la espirometría tras ciclo de prednisona oral por 14 días' },
        ],
        correcta: 'B',
        explicacion: 'Una espirometría con relación VEF1/CVF normal (≥ 0.70) y CVF disminuida (< 80%) es sugerente pero NO diagnóstica de alteración restrictiva. Para confirmar fehacientemente una restricción pulmonar es indispensable medir volúmenes absolutos mediante pletismografía corporal y constatar una CPT < 80%. Asumir fibrosis o indicar fármacos sin CPT es un error conceptual grave.',
        recTag: 'Banco de Preguntas Oficial · Espirometría y Función Pulmonar',
      },
    ],
  },
  {
    id: 'resp-02',
    classId: 'resp-02',
    tier: 3,
    blockNum: 1,
    blockName: 'Vía Aérea Obstructiva y Función Pulmonar',
    topicLabel: '1.2',
    title: 'Crisis Asmática en el Adulto',
    perfilCode: '1.05.2.004',
    dx: 'Específico', tx: 'Completo', seg: 'Inicial',
    ges: 'Garantía Explícita en Salud (GES): Manejo de Urgencia del Asma Bronquial Moderada o Grave',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#42) · EUNACOM Julio 2021 (Q#15) · EUNACOM Diciembre 2023 (Q#88)',
    frecuencia: 'Máxima · Presente en el 100% de los exámenes EUNACOM de urgencias',
    svg: null, algoTitle: 'Algoritmo de Manejo de la Crisis Asmática en el Servicio de Urgencia',
    diagram: flow('Algoritmo de Manejo de la Crisis Asmática en Urgencias', [
      { t: 'Evaluación de Severidad Inmediata', s: 'Crisis Leve/Moderada (PEF ≥ 50%, frases completas) vs Grave/Paro (PEF < 50%, tórax silente)' },
      { k: 'split', q: '¿Presenta Signos de Riesgo Vital o Tórax Silente?', s: 'Bradicardia, cianosis, confusión, PaCO2 normal o elevada (≥ 42 mmHg)', ll: 'no (crisis moderada/grave)', rl: 'sí (riesgo vital inminente)',
        left: { t: 'Tratamiento Estándar Escalonado', s: 'O2 (meta Sat 93-95%) + Salbutamol 4-8 puff c/20 min + Corticoide sistémico oral', type: 'acc' },
        right: { t: 'Manejo Avanzado y Vía Aérea', s: 'Salbutamol + Ipratropio nebulizado + Sulfato de Magnesio EV 2 g + Preparar IOT', type: 'warn' } },
      { t: 'Reevaluación a los 60 Minutos Post-Tratamiento', s: 'Buena respuesta (PEF > 70%): Alta con corticoide oral 5-7 días · Mala respuesta (PEF < 50%): Hospitalizar en UCI/UTI', type: 'dec', al: 'destino', from: 'left' },
    ]),
    contexto: 'La crisis asmática es una causa muy común de consulta en urgencias. El EUNACOM evalúa la estratificación clínica de severidad, el reconocimiento temprano de signos de fatiga muscular (tórax silente, pulso paradojal, PaCO2 pseudonormal) y el uso oportuno de corticoides sistémicos y sulfato de magnesio.',
    contentSections: [
      {
        subhead: '1. Definición y Fisiopatología del Broncoespasmo Agudo',
        paragraphs: [
          'La <strong>crisis asmática</strong> es un episodio agudo o subagudo de empeoramiento progresivo de la disnea, tos, sibilancias y opresión torácica, acompañado de una disminución cuantificable del flujo espiratorio (VEF1 o PEF). Fisiopatológicamente combina <strong>espasmo del músculo liso bronquial</strong>, edema parietal de la mucosa, hipersecreción de moco espeso con tapones intraluminales e inflamación eosinofílica o neutrofílica aguda.',
          'Esta obstrucción difusa genera un aumento crítico de la resistencia de la vía aérea, hiperinsuflación dinámica con atrapamiento aéreo, aumento del trabajo respiratorio y desbalance de la relación ventilación/perfusión (V/Q), desencadenando inicialmente hipoxemia arterial con hiperventilación reactiva (alcalosis respiratoria hipocápnica).',
        ],
      },
      {
        subhead: '2. Estratificación Clínica de Severidad y Signos de Riesgo Vital',
        paragraphs: [
          'La severidad inicial se clasifica mediante parámetros clínicos y funcionales objetivos (Peak Flow / PEF). En la <strong>crisis leve a moderada</strong> el paciente puede hablar en oraciones o párrafos, presenta FC 100–120 lpm, FR &lt; 25 rpm, SatO₂ 90–95% ambiental y PEF entre 50% y 70% de su mejor valor personal o teórico.',
          'En la <strong>crisis grave</strong> el paciente solo logra emitir palabras o frases cortas, adopta posición de trípode, utiliza musculatura accesoria cervical e intercostal, presenta FC &gt; 120 lpm, FR &gt; 30 rpm y PEF &lt; 50%. Los <strong>signos de paro respiratorio inminente (crisis casi fatal)</strong> son: <em>tórax silente</em> (ausencia paradójica de sibilancias por flujo espiratorio insuficiente para hacer vibrar las paredes bronquiales), bradicardia, pulso paradojal &gt; 25 mmHg, diaforesis profusa, confusión o somnolencia por hipoxia tisular y agotamiento muscular diafragmático.',
        ],
      },
      {
        subhead: '3. Enfrentamiento Gasométrico y Evaluación Funcional (PEF)',
        paragraphs: [
          'El análisis de los <strong>gases en sangre arterial (GSA)</strong> es mandatorio ante crisis grave o falta de respuesta al tratamiento inicial. La respuesta fisiológica esperada a la disnea asmática es la <strong>alcalosis respiratoria con hipocapnia (PaCO₂ &lt; 35 mmHg)</strong> secundaria a la hiperventilación alveolar compensadora.',
          'El hallazgo de una <strong>PaCO₂ &quot;normal&quot; (38–42 mmHg)</strong> en un paciente visiblemente taquipneico es un <strong>signo ominoso de agotamiento diafragmático inminente</strong>: el paciente ha entrado en fatiga y ya no puede sostener el volumen minuto respiratorio. Si la PaCO₂ asciende a &gt; 45 mmHg con acidosis respiratoria concomitante (pH &lt; 7.30), el riesgo de paro hipóxico es extremo y exige soporte inmediato en UPC.',
        ],
      },
      {
        subhead: '4. Protocolo Farmacológico Escalonado y Terapias de Rescate',
        paragraphs: [
          '<strong>1) Oxigenoterapia normobárica controlada:</strong> Aporte por cánula nasal titulado para alcanzar una <strong>SatO₂ meta de 93–95%</strong> (en embarazadas o cardiópatas ≥ 95%). Evitar la hiperoxia indiscriminada.',
          '<strong>2) Broncodilatadores de acción corta (SABA):</strong> Salbutamol en dosis de <strong>4 a 8 inhalaciones cada 20 minutos durante la primera hora</strong> utilizando inhalador presurizado de dosis medida (MDI) con aerocámara valvulada. La evidencia demuestra que el MDI con espaciador es al menos igual de eficaz que la nebulización continua, con menor depósito orofaríngeo y menor taquicardia sistémica.',
          '<strong>3) Anticolinérgicos inhalados (SAMA):</strong> Bromuro de Ipratropio (4 a 8 puff o 500 mcg nebulizados cada 20 minutos en la primera hora) asociado a SABA en crisis moderadas y graves; su adición reduce las tasas de hospitalización.',
          '<strong>4) Corticoides sistémicos precoces:</strong> Deben administrarse en la primera hora de atención médica. De primera elección por vía oral: <strong>Prednisona 40 a 50 mg en dosis única matinal</strong>. La biodisponibilidad oral es casi del 100%, alcanzando concentraciones plasmáticas equivalentes a la vía parenteral. Si el paciente vomita o tiene compromiso de conciencia, se administra Hidrocortisona 200 mg EV o Metilprednisolona 40 mg EV.',
          '<strong>5) Sulfato de Magnesio intravenoso:</strong> Dosis de <strong>2 g EV en infusión de 20 minutos</strong> en pacientes con crisis grave refractaria a la primera hora de broncodilatadores o PEF &lt; 50%. Actúa bloqueando la entrada de calcio a las células musculares lisas, induciendo potente broncodilatación de rescate.',
        ],
      },
      {
        subhead: '5. Criterios de Ingreso a UPC, Intubación Orotraqueal y Criterios de Alta',
        paragraphs: [
          '<strong>Criterios de intubación endotraqueal:</strong> Deterioro del estado de conciencia (sopor, coma), acidosis respiratoria progresiva con pH &lt; 7.25 y PaCO₂ &gt; 50 mmHg, inestabilidad hemodinámica o paro cardiorrespiratorio inminente. Debe realizarse con secuencia de intubación rápida (ketamina de inducción por su propiedad broncodilatadora).',
          '<strong>Criterios de alta del Servicio de Urgencia:</strong> Paciente asintomático en reposo, examen pulmonar normal o con sibilancias espiratorias mínimas, SatO₂ &gt; 93% al aire ambiente y <strong>PEF &gt; 70% del valor de referencia</strong> tras al menos 60 minutos del último broncodilatador.',
          '<strong>Prescripción de egreso obligatoria:</strong> Ciclo de <strong>Prednisona oral 40 mg/día por 5 a 7 días</strong> (sin requerir esquema descendente), SABA de rescate, inicio o escalamiento de Corticoide Inhalado (CI) de mantención, educación en técnica inhalatoria y citación a control médico en APS o policlínico en un plazo máximo de 7 días hábiles.',
        ],
      },
    ],
    table: {
      title: 'Estratificación Clínica y Gasométrica de la Crisis Asmática',
      headers: ['Severidad', 'Disnea y Habla', 'FC y FR', 'PEF (% teórico)', 'Gases Arteriales (GSA)'],
      rows: [
        ['Leve / Moderada', 'Párrafos o frases completas', 'FC < 100-110, FR < 25', '≥ 50% - 70%', 'Alcalosis respiratoria (PaCO2 < 35, hipocapnia)'],
        ['Grave', 'Frases cortas o palabras', 'FC > 120, FR > 30', '< 50%', 'Hipoxemia moderada, PaCO2 normalizante (38-42)'],
        ['Paro Inminente', 'Incapaz de hablar, sopor', 'Bradicardia, agotamiento', '< 30% o no medible', 'Acidosis respiratoria grave (PaCO2 > 45 mmHg)'],
      ],
    },
    severityTable: {
      title: 'Criterios de Gravedad y Signos de Riesgo Vital Inminente (GINA 2026)',
      headers: ['Variable Clínica', 'Crisis Leve - Moderada', 'Crisis Grave', 'Crisis Casi Fatal (Paro Inminente)'],
      rows: [
        ['Capacidad de Habla', 'Oraciones completas', 'Frases entrecortadas / palabras', 'Monosílabos o incapaz de hablar'],
        ['Frecuencia Cardíaca', '100 – 110 lpm', '> 120 lpm (taquicardia marcada)', 'Bradicardia paradójica (extrema gravedad)'],
        ['Frecuencia Respiratoria', '20 – 25 rpm', '> 30 rpm (polipnea con tiraje)', 'Movimiento paradójico toracoabdominal'],
        ['Auscultación Pulmonar', 'Sibilancias espiratorias difusas', 'Sibilancias inspiratorias y espiratorias', 'Tórax silente (ausencia de murmullo y sibilancias)'],
        ['Flujo Espiratorio (PEF)', '50% – 70% del basal', '< 50% del mejor valor teórico', '< 30% o técnicamente imposible de medir'],
        ['Sensorio / Estado Mental', 'Tranquilo o leve ansiedad', 'Ansioso, agitado, sudoroso', 'Confuso, soporoso, bradipsíquico, agotado'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Farmacológico Escalonado de la Crisis Asmática en Urgencias',
      headers: ['Fármaco / Intervención', 'Vía y Dosis Estándar', 'Frecuencia / Intervalo', 'Objetivo Terapéutico y Observaciones'],
      rows: [
        ['Salbutamol (SABA)', 'MDI 4 a 8 puff con aerocámara', 'Cada 20 min por 1 hora (3 ciclos)', 'Broncodilatación rápida; titular según respuesta clínica y FC'],
        ['Bromuro de Ipratropio (SAMA)', 'MDI 4 a 8 puff con aerocámara', 'Cada 20 min durante la 1ª hora', 'Sinergia vagolítica; indicado en crisis moderada y grave'],
        ['Prednisona oral', '40 a 50 mg VO dosis única', 'Dosis diaria matinal por 5-7 días', 'Desinflamación de la mucosa; igual eficacia que vía EV'],
        ['Hidrocortisona / Metilprednisolona', '200 mg EV / 40 mg EV bolo', 'Cada 6 a 8 horas según evolución', 'Segunda línea si existe vómito, intolerancia oral o IOT'],
        ['Sulfato de Magnesio EV', '2 gramos en 100 mL SF al 0.9%', 'Infusión en 20 minutos (dosis única)', 'Rescate en crisis severa refractaria a la 1ª hora (PEF < 50%)'],
        ['Oxigenoterapia normobárica', 'Cánula nasal 2-4 L/min o Venturi', 'Continuo', 'Mantener SatO2 93-95% (evitar hipoxemia e hiperoxia)'],
      ],
    },
    vignette: 'Mujer de 22 años con antecedentes de asma desde la infancia en tratamiento irregular consulta en el SAPU con disnea intensa, tos y sibilancias audibles a distancia de 4 horas de evolución. Al examen físico: FR 32 rpm, FC 128 lpm, SatO2 89% al aire ambiente, habla solo con monosílabos entrecortados, presenta tiraje intercostal y supraclavicular bilateral. La medición de PEF inicial es de 160 L/min (38% del predicho). Auscultación: sibilancias espiratorias e inspiratorias bilaterales difusas.',
    explicacion: 'Se trata de una crisis asmática grave definida objetivamente por la incapacidad de pronunciar frases completas, taquicardia > 120 lpm, polipnea > 30 rpm, uso de musculatura accesoria y PEF < 50%. La conducta oficial inmediata y prioritaria consiste en: 1) Oxigenoterapia por cánula nasal para asegurar SatO2 93-95%; 2) Broncodilatadores de acción corta en dosis plena: Salbutamol 4-8 inhalaciones asociado a Bromuro de Ipratropio 4 puff con aerocámara cada 20 minutos durante la primera hora; 3) Corticoides sistémicos precoces desde el minuto cero (Prednisona 40-50 mg VO o Hidrocortisona 200 mg EV); y 4) Reevaluación clínica y de PEF a los 60 minutos. Si la respuesta es insuficiente, se administra Sulfato de Magnesio 2 g EV.',
    keyPoints: [
      'Un PaCO2 "normal" (40 mmHg) en un paciente con crisis asmática y taquipnea es signo de alarma extrema de fatiga muscular inminente.',
      'El tórax silente (ausencia de sibilancias con esfuerzo respiratorio) refleja una caída crítica del flujo aéreo y riesgo inminente de paro respiratorio.',
      'El corticoide sistémico oral (Prednisona 40-50 mg) tiene la misma biodisponibilidad y rapidez que la vía EV; debe administrarse en la primera hora.',
      'En crisis severa refractaria a SABA + Ipratropio en la primera hora, el fármaco de rescate de elección es Sulfato de Magnesio 2 g EV en 20 minutos.',
      'No se realiza pauta descendente de corticoides sistémicos si el ciclo dura entre 5 y 7 días.',
      'El inhalador presurizado de dosis medida (MDI) con aerocámara es tan eficaz como la nebulización continua y produce menor taquicardia.',
      'Trampa de examen: los antibióticos y las metilxantinas (aminofilina) NO tienen indicación de rutina en la crisis asmática.',
      'El criterio funcional objetivo para el alta del servicio de urgencia es un PEF > 70% del valor teórico o mejor valor personal tras 1 hora de observación.',
    ],
    questions: [
      {
        stem: 'Un joven de 19 años es llevado al servicio de urgencias por una crisis asmática severa. Al ingreso se encuentra somnoliento, sudoroso, con respiración paradójica y a la auscultación pulmonar llama la atención un murmullo pulmonar globalmente disminuido sin sibilancias audibles ("tórax silente"). Los gases arteriales muestran: pH 7.28, PaO2 55 mmHg, PaCO2 48 mmHg y HCO3 22 mEq/L. ¿Cuál es la interpretación fisiopatológica y la conducta más prioritaria?',
        options: [
          { id: 'A', text: 'Mejoría clínica espontánea por ausencia de sibilancias; mantener observación con salbutamol en dosis bajas' },
          { id: 'B', text: 'Agotamiento diafragmático con riesgo vital inminente de paro respiratorio; preparar intubación endotraqueal' },
          { id: 'C', text: 'Ataque de pánico con hiperventilación psicógena; administrar alprazolam oral' },
          { id: 'D', text: 'Acidosis metabólica láctica primaria; administrar 100 mL de bicarbonato de sodio EV' },
          { id: 'E', text: 'Crisis leve-moderada compensada; nebulizar con suero fisiológico exclusivo' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta signos inequívocos de crisis asmática casi fatal con agotamiento muscular inminente: tórax silente (flujo aéreo insuficiente para generar sibilancias), somnolencia y acidosis respiratoria con hipercapnia (PaCO2 48 mmHg). Normalmente el asma hiperventila y genera hipocapnia (PaCO2 < 35); cuando la PaCO2 se normaliza o sube, el paciente está claudicando y requiere manejo en reanimación con preparación de intubación orotraqueal e ingreso a UCI.',
        recTag: 'EUNACOM Diciembre 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Una paciente de 30 años consulta por disnea sibilante de 6 horas de evolución. Presenta FR 24 rpm, FC 98 lpm, SatO2 94% ambiental y PEF del 62% del valor predicho. Tras recibir salbutamol 4 puff cada 20 minutos por 3 veces y 40 mg de prednisona oral, se encuentra asintomática, con SatO2 97% y PEF del 78%. ¿Cuál es la indicación farmacológica de egreso más apropiada?',
        options: [
          { id: 'A', text: 'Salbutamol a demanda exclusivo sin corticoides ambulatorios' },
          { id: 'B', text: 'Prednisona oral 40 mg al día por 5 días más salbutamol de rescate y control médico' },
          { id: 'C', text: 'Ciclo de prednisona oral por 30 días con reducción progresiva semanal' },
          { id: 'D', text: 'Amoxicilina más ácido clavulánico 875/125 mg cada 12 horas por 7 días' },
          { id: 'E', text: 'Teofilina de liberación prolongada 200 mg cada 12 horas' },
        ],
        correcta: 'B',
        explicacion: 'Tras una crisis asmática moderada resuelta en urgencias, todo paciente debe ser dado de alta con un ciclo corto de corticoide sistémico oral (Prednisona 40–50 mg/día por 5 a 7 días) para prevenir recaídas precoces y consolidar la desinflamación bronquial. Los ciclos cortos (< 14 días) no requieren reducción gradual. Los antibióticos (D) no están indicados en crisis asmáticas no infecciosas y la teofilina (E) está en desuso.',
        recTag: 'EUNACOM Julio 2021 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 24 años consulta por crisis asmática grave. Recibe durante la primera hora 3 ciclos de salbutamol 8 puff más bromuro de ipratropio 4 puff con aerocámara e hidrocortisona 200 mg EV. En la reevaluación clínica a los 60 minutos persiste con disnea limitante, tiraje intercostal, FR 28 rpm, FC 118 lpm y su PEF se mantiene en 44% del teórico. ¿Cuál es el siguiente paso farmacológico indicado en el servicio de urgencia?',
        options: [
          { id: 'A', text: 'Administrar aminofilina en infusión continua de carga y mantención' },
          { id: 'B', text: 'Infusión intravenosa de sulfato de magnesio 2 g en 20 minutos' },
          { id: 'C', text: 'Nebulización con adrenalina racémica al 2.25%' },
          { id: 'D', text: 'Administrar bicarbonato de sodio para alcalinizar la vía aérea' },
          { id: 'E', text: 'Indicar intubación orotraqueal inmediata electiva sin más fármacos' },
        ],
        correcta: 'B',
        explicacion: 'En pacientes adultos con crisis asmática grave que no responden adecuadamente al tratamiento broncodilatador inicial de primera línea (SABA + SAMA) asociado a corticoides sistémicos y cuyo PEF persiste < 50% a la hora de manejo, la guía GINA y los protocolos de urgencia recomiendan fuertemente la administración de Sulfato de Magnesio 2 g EV en infusión de 20 minutos. El magnesio produce relajación rápida del músculo liso bronquial al bloquear canales de calcio voltaje-dependientes. La aminofilina (A) no ha demostrado beneficio adicional y posee alta toxicidad arrítmica.',
        recTag: 'EUNACOM Diciembre 2023 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de las siguientes aseveraciones respecto a la aerosolterapia en la crisis asmática aguda en el servicio de urgencias es correcta según la evidencia médica actual?',
        options: [
          { id: 'A', text: 'La nebulización continua con oxígeno es categóricamente superior en eficacia clínica que el inhalador de dosis medida con aerocámara' },
          { id: 'B', text: 'El inhalador presurizado de dosis medida (MDI) con aerocámara valvulada ofrece igual broncodilatación que la nebulización, con menor riesgo de efectos adversos sistémicos' },
          { id: 'C', text: 'Los corticoides inhalados a dosis altas reemplazan por completo la necesidad de corticoides sistémicos en la primera hora de una crisis grave' },
          { id: 'D', text: 'La administración de salbutamol por vía intramuscular o subcutánea es la vía de elección preferente sobre la vía inhalatoria' },
          { id: 'E', text: 'La aerocámara debe reservarse exclusivamente para niños menores de 5 años y no tiene utilidad en adultos' },
        ],
        correcta: 'B',
        explicacion: 'Múltiples revisiones sistemáticas y metaanálisis (incluyendo Cochrane) han demostrado de forma concluyente que en la crisis asmática aguda leve, moderada e incluso grave, la administración de broncodilatadores beta-2 agonistas mediante MDI con aerocámara con válvula es al menos tan eficaz como la nebulización con mascarilla en términos de mejoría del VEF1/PEF y tasas de hospitalización. Además, el MDI con aerocámara genera menor taquicardia refleja, menor temblor y no produce aerosoles infecciosos dispersos al ambiente. Los corticoides sistémicos (VO o EV) siguen siendo obligatorios en la crisis grave.',
        recTag: 'EUNACOM Reconstrucción Canónica · Manejo de Urgencias',
      },
    ],
  },
  {
    id: 'resp-03',
    classId: 'resp-03',
    tier: 2,
    blockNum: 1,
    blockName: 'Vía Aérea Obstructiva y Función Pulmonar',
    topicLabel: '1.3',
    title: 'Asma Bronquial Crónica y Manejo GINA/GES',
    perfilCode: '1.05.1.002, 1.05.1.003',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Asma Bronquial en Personas de 15 años y más',
    reconstrucciones: '',
    frecuencia: 'Alta · Pregunta sistemática sobre escalamiento GINA y control de síntomas',
    svg: null, algoTitle: 'Algoritmo de Escalamiento Terapéutico en Asma Crónica (GINA / GES)',
    diagram: flow('Algoritmo de Escalamiento Terapéutico en Asma Crónica (GINA/GES)', [
      { t: 'Evaluación del Grado de Control Clínico GINA (últimas 4 semanas)', s: 'Síntomas diurnos >2/sem · Despertares nocturnos · Uso SABA/CI rescate >2/sem · Limitación actividad' },
      { k: 'split', q: '¿Cuántos Criterios de Mal Control Presenta el Paciente?', s: '0 = Controlada · 1-2 = Parcialmente controlada · 3-4 = No controlada', ll: '0-2 (controlada o parcial)', rl: '3-4 (no controlada)',
        left: { t: 'Mantener Escalón o Ajuste Leve', s: 'Vía 1 preferida GINA: CI-Formoterol a dosis bajas a demanda (Escalones 1 y 2)', type: 'acc' },
        right: { t: 'Subir 1 Escalón (Step-Up)', s: 'Verificar técnica inhalatoria y adherencia antes de subir dosis de CI + LABA', type: 'warn' } },
      { t: 'Escalón 3 a 5: Terapia de Mantenimiento y Rescate (MART)', s: 'Escalón 3: CI dosis baja + LABA diario · Escalón 4: CI dosis media + LABA · Escalón 5: Derivar especialista (LAMA/Biológicos)', type: 'dec', al: 'escalamiento', from: 'right' },
    ]),
    contexto: 'El asma es una de las enfermedades crónicas no transmisibles con garantía GES más comunes en APS. El EUNACOM exige aplicar los criterios de control de síntomas de GINA, comprender el cambio de paradigma de NO prescribir jamás SABA como monoterapia, y dominar el uso de corticoides inhalados asociados a formoterol.',
    contentSections: [
      {
        subhead: '1. Definición y Diagnóstico Clínico-Funcional',
        paragraphs: [
          'El asma es una enfermedad inflamatoria crónica heterogénea de las vías aéreas caracterizada por síntomas respiratorios variables (sibilancias, disnea, opresión torácica y tos) asociados a una limitación variable del flujo aéreo espiratorio.',
          'La confirmación diagnóstica exige clínica compatible + demostración de <strong>variabilidad o reversibilidad al flujo aéreo</strong>: aumento de VEF1 &gt; 12% y &gt; 200 mL post-broncodilatador en la espirometría, o variabilidad diurna del PEF &gt; 10%, o caída de VEF1 &gt; 20% en test de metacolina.',
        ],
      },
      {
        subhead: '2. Evaluación del Control Clínico (Criterios GINA)',
        paragraphs: [
          'En cada control se evalúan las últimas 4 semanas: 1) Síntomas diurnos &gt; 2 veces por semana; 2) Algún despertar nocturno por asma; 3) Uso de inhalador de alivio &gt; 2 veces por semana; 4) Cualquier limitación de la actividad física habitual.',
          '<strong>Clasificación:</strong> Bien controlada (0 criterios), Parcialmente controlada (1 o 2 criterios) y No controlada (3 o 4 criterios). Si está no controlada, antes de escalar tratamiento es obligatorio revisar la técnica del inhalador y la adherencia.',
        ],
      },
      {
        subhead: '3. Esquema Terapéutico Escalonado GINA y Canasta GES',
        paragraphs: [
          '<strong>Paradigma GINA actual:</strong> El uso de SABA en monoterapia está formalmente proscrito porque incrementa el riesgo de exacerbaciones graves y muerte. Todo paciente asmático debe recibir un corticoide inhalado.',
          '<strong>Estrategia Vía 1 (Preferida):</strong> CI dosis baja combinado con <strong>Formoterol a demanda</strong> en Escalón 1–2 (ej. Budesonida/Formoterol 160/4.5 mcg 1 puff SOS). En Escalón 3: CI/Formoterol diario a dosis baja + rescate con la misma combinación (estrategia MART). En Escalón 4: CI/LABA a dosis media. En Escalón 5: agregar Tiotropio (LAMA) o biológicos anti-IgE/anti-IL5 previa derivación.',
        ],
      },
    ],
    table: {
      title: 'Escalones Terapéuticos GINA para Mayores de 12 Años',
      headers: ['Escalón GINA', 'Tratamiento Preferido (Vía 1)', 'Alternativa (Vía 2)', 'Perfil de Paciente'],
      rows: [
        ['Escalón 1 y 2', 'Budesonida/Formoterol dosis baja SOS', 'CI diario a dosis baja + SABA SOS', 'Síntomas < 4-5 días a la semana'],
        ['Escalón 3', 'CI dosis baja + LABA diario + rescate MART', 'CI dosis baja + LABA + SABA SOS', 'Síntomas la mayoría de los días o despierta ≥ 1/sem'],
        ['Escalón 4', 'CI dosis media + LABA diario + rescate MART', 'CI dosis media + LABA + SABA SOS', 'Asma no controlada con escalón 3'],
        ['Escalón 5', 'CI dosis alta + LABA + agregar LAMA / derivar', 'Evaluar fenotipo biológico (anti-IgE)', 'Asma grave refractaria especializada'],
      ],
    },
    vignette: 'Mujer de 32 años con asma en tratamiento solo con Salbutamol en aerosol a demanda. Refiere que en el último mes ha tenido síntomas diurnos 4 días a la semana, despertó en 2 ocasiones por tos y usa salbutamol casi todos los días. La espirometría muestra VEF1 72% con respuesta broncodilatadora positiva.',
    explicacion: 'Asma no controlada (presenta 3 criterios GINA: síntomas diurnos frecuentes, despertares nocturnos y uso elevado de rescate) en monoterapia con SABA (conducta contraindicada). La indicación médica correcta es suspender el SABA exclusivo e iniciar terapia antiinflamatoria de mantención con Corticoide Inhalado a dosis baja asociado a LABA (o Budesonida/Formoterol según GINA vía 1).',
    keyPoints: [
      'El uso de Salbutamol (SABA) como monoterapia está contraindicado por aumentar el riesgo de crisis mortales.',
      'El corticoide inhalado (CI) es la piedra angular del tratamiento del asma crónica.',
      'En cada control se evalúan 4 criterios en el último mes: síntomas diurnos, nocturnos, uso de rescate y limitación funcional.',
      'Antes de subir un escalón terapéutico (Step-up), siempre revisar la técnica inhalatoria y la adherencia al fármaco.',
      'El tratamiento con Budesonida/Formoterol como rescate y mantenimiento (MART) reduce significativamente las exacerbaciones.',
    ],
    questions: [
      {
        stem: 'Una paciente de 24 años con asma bronquial consulta a control en su CESFAM. Utiliza actualmente fluticasona 125 mcg cada 12 horas más salbutamol SOS. En las últimas 4 semanas refiere haber presentado tos y sibilancias 3 veces por semana, un despertar nocturno por disnea y necesidad de salbutamol 3 veces por semana. No ha tenido limitaciones en su trabajo. ¿Cómo clasifica su nivel de control y cuál es la conducta clínica inicial?',
        options: [
          { id: 'A', text: 'Asma bien controlada; reducir la fluticasona a la mitad' },
          { id: 'B', text: 'Asma parcialmente controlada; revisar técnica inhalatoria y adherencia antes de escalar a CI + LABA' },
          { id: 'C', text: 'Asma no controlada; iniciar de inmediato prednisona oral 40 mg al día por 1 mes' },
          { id: 'D', text: 'Asma refractaria grave; derivar a nivel secundario para estudio con anticuerpos monoclonales' },
          { id: 'E', text: 'Crisis asmática subaguda; hospitalizar en sala de medicina interna' },
        ],
        correcta: 'B',
        explicacion: 'La paciente cumple 2 criterios positivos en las últimas 4 semanas (síntomas diurnos > 2/sem y rescate > 2/sem, además de un despertar nocturno), lo que clasifica su condición como "Asma parcialmente controlada" según GINA. La conducta protocolar obligatoria antes de cualquier cambio de receta es verificar la técnica del uso del inhalador (con aerocámara si es MDI) y comprobar la adherencia terapéutica. Si son correctas, se escala a Escalón 3 agregando un LABA (Salmeterol o Formoterol).',
        recTag: 'Banco de Preguntas Oficial · Asma Bronquial Crónica',
      },
      {
        stem: '¿Cuál es la razón fundamental por la cual las guías internacionales GINA eliminaron la recomendación del uso exclusivo de beta-2 agonistas de corta acción (SABA, ej. salbutamol) como monoterapia en el escalón 1 del asma?',
        options: [
          { id: 'A', text: 'Porque el salbutamol induce hipertensión pulmonar irreversible a corto plazo' },
          { id: 'B', text: 'Porque el uso regular de SABA sin corticoides causa regulación a la baja de receptores beta, mayor inflamación de la vía aérea y aumenta el riesgo de exacerbaciones graves y muerte' },
          { id: 'C', text: 'Porque genera resistencia bacteriana cruzada en el epitelio bronquial' },
          { id: 'D', text: 'Porque el salbutamol inhalado ha demostrado ser totalmente inefectivo para revertir el broncoespasmo' },
          { id: 'E', text: 'Porque induce fibrosis pulmonar idiopática en personas jóvenes' },
        ],
        correcta: 'B',
        explicacion: 'La evidencia científica demostró que el uso de SABA en monoterapia sin corticoide inhalado desensibiliza los receptores beta-2 adrenérgicos, incrementa la respuesta hiperreactiva ante alérgenos, aumenta los eosinófilos en la vía aérea y duplica el riesgo de exacerbaciones graves y mortalidad por asma. Por ello, GINA exige que cada vez que se administre un broncodilatador se acompañe de corticoide inhalado.',
        recTag: 'Banco de Preguntas Oficial · Asma Bronquial Crónica',
      },
    ],
  },
  {
    id: 'resp-04',
    classId: 'resp-04',
    tier: 2,
    blockNum: 1,
    blockName: 'Vía Aérea Obstructiva y Función Pulmonar',
    topicLabel: '1.4',
    title: 'Enfermedad Pulmonar Obstructiva Crónica (EPOC) Estable',
    perfilCode: '1.05.1.016, 1.05.1.017',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Enfermedad Pulmonar Obstructiva Crónica en Personas de 15 años y más',
    reconstrucciones: '',
    frecuencia: 'Muy Alta · Clasificación GOLD ABE y medidas que aumentan sobrevida',
    svg: null, algoTitle: 'Algoritmo de Manejo Farmacológico Inicial en EPOC Estable (GOLD 2024-2026)',
    diagram: flow('Algoritmo de Manejo Farmacológico Inicial EPOC Estable (GOLD)', [
      { t: 'Confirmación Espirométrica: VEF1/CVF < 0.70 post-BD', s: 'Evaluar síntomas (mMRC ≥ 2 o CAT ≥ 10) e historial de exacerbaciones anuales' },
      { k: 'split', q: '¿Presenta ≥ 2 Exacerbaciones Moderadas o ≥ 1 con Hospitalización?', s: 'Define Grupo E (exacerbadores frecuentes) vs Grupos A y B', ll: 'no (0 o 1 moderada sin hospitalizar)', rl: 'sí (Grupo E)',
        left: { t: 'Grupos A y B', s: 'Grupo A (poco síntoma): 1 Broncodilatador (LAMA o LABA) · Grupo B (muy sintomático): LAMA + LABA', type: 'acc' },
        right: { t: 'Grupo E (Exacerbador)', s: 'LAMA + LABA inicial · Si Eosinófilos sangre ≥ 300/uL: Agregar Corticoide Inhalado (LABA+LAMA+CI)', type: 'warn' } },
      { t: 'Medidas de Impacto Comprobado en Supervivencia', s: '1. Cese absoluto del tabaco · 2. Oxigenoterapia domiciliaria si PaO2 ≤ 55 mmHg · 3. Cirugía de reducción de volumen en enfisema seleccionado', type: 'dec', al: 'sobrevida', from: 'left' },
    ]),
    contexto: 'La EPOC es una de las enfermedades respiratorias más evaluadas en el EUNACOM. Es imprescindible dominar la clasificación GOLD A-B-E (actualización que fusionó C y D en E), el rol hegemónico de los broncodilatadores de larga acción (LAMA/LABA), el uso muy restringido de corticoides inhalados según recuento de eosinófilos, y las únicas intervenciones que mejoran la sobrevida.',
    contentSections: [
      {
        subhead: '1. Diagnóstico y Clasificación GOLD',
        paragraphs: [
          'Se sospecha en todo adulto con exposición a tabaco (habitualmente &gt; 10–20 paquetes-año) o biomasa que consulta por tos crónica, expectoración y disnea de esfuerzo progresiva. El diagnóstico se confirma exclusivamente con <strong>espirometría con VEF1/CVF &lt; 0.70 post-broncodilatador</strong>.',
          'La severidad funcional por VEF1 post-BD es: <strong>GOLD 1</strong> (≥ 80%), <strong>GOLD 2</strong> (50–79%), <strong>GOLD 3</strong> (30–49%) y <strong>GOLD 4</strong> (&lt; 30%). Clínicamente se clasifica en 3 grupos (GOLD 2024-2026): <strong>Grupo A</strong> (bajo síntoma mMRC 0-1 y sin exacerbaciones graves), <strong>Grupo B</strong> (muy sintomático mMRC ≥ 2 y sin exacerbaciones graves) y <strong>Grupo E</strong> (≥ 2 exacerbaciones moderadas o ≥ 1 hospitalización en el último año, independiente de los síntomas).',
        ],
      },
      {
        subhead: '2. Manejo Farmacológico de Mantención',
        paragraphs: [
          'La base del tratamiento son los <strong>broncodilatadores de larga acción</strong>. En Grupo A: un broncodilatador (LAMA o LABA). En Grupo B: <strong>doble broncodilatación (LAMA + LABA)</strong> de inicio (ej. Tiotropio + Olodaterol o Umeclidinio + Vilanterol). En Grupo E: LAMA + LABA inicial.',
          '<strong>Uso de Corticoides Inhalados (CI):</strong> Están formalmente contraindicados como monoterapia en EPOC. Se reservan en terapia triple (LABA + LAMA + CI) únicamente para pacientes con exacerbaciones frecuentes que presenten <strong>eosinófilos en sangre periférica ≥ 300 células/uL</strong> (o ≥ 100 con historia de asma o ≥ 2 exacerbaciones).',
        ],
      },
      {
        subhead: '3. Medidas que Prolongan la Supervivencia',
        paragraphs: [
          'Solo tres medidas han demostrado aumentar la sobrevida en EPOC: 1) <strong>Cese del consumo de tabaco</strong> (la intervención más costo-efectiva); 2) <strong>Oxigenoterapia domiciliaria crónica (OCD)</strong> por al menos 15 horas al día; y 3) Cirugía de reducción de volumen o trasplante pulmonar en casos hiperseleccionados.',
          '<strong>Criterios estrictos de Oxigenoterapia Domiciliaria (GES):</strong> Indicada si en reposo y estable presenta: <strong>PaO₂ ≤ 55 mmHg</strong> (o SatO₂ ≤ 88%), O <strong>PaO₂ entre 56 y 59 mmHg</strong> con evidencia de cor pulmonale, hipertensión pulmonar o poliglobulia (hematocrito &gt; 55%).',
        ],
      },
    ],
    table: {
      title: 'Clasificación GOLD A-B-E y Tratamiento Farmacológico Inicial',
      headers: ['Grupo GOLD', 'Historial de Exacerbaciones', 'Síntomas (mMRC / CAT)', 'Tratamiento Inicial Recomendado'],
      rows: [
        ['Grupo A', '0 o 1 moderada (sin hospitalizar)', 'mMRC 0-1 / CAT < 10', 'Broncodilatador de larga acción (LAMA o LABA)'],
        ['Grupo B', '0 o 1 moderada (sin hospitalizar)', 'mMRC ≥ 2 / CAT ≥ 10', 'Doble broncodilatación: LAMA + LABA'],
        ['Grupo E', '≥ 2 moderadas o ≥ 1 con hospitalización', 'Cualquier nivel de síntomas', 'LAMA + LABA (considerar CI si Eosinófilos ≥ 300/uL)'],
      ],
    },
    vignette: 'Hombre de 66 años, fumador de 35 paquetes-año, con diagnóstico de EPOC GOLD 3. Consulta por disnea al caminar en plano al ritmo de personas de su edad (mMRC 2). No ha presentado ninguna exacerbación en el último año. Su recuento de eosinófilos es de 90 células/uL. Gases arteriales basales: PaO2 64 mmHg, PaCO2 42 mmHg.',
    explicacion: 'El paciente corresponde al Grupo B de GOLD (disnea mMRC ≥ 2 sin historial de exacerbaciones frecuentes en el año previo). La indicación farmacológica de primera línea recomendada por GOLD es la doble terapia broncodilatadora con un antimuscarínico de larga acción más un beta-2 agonista de larga acción (LAMA + LABA, ej. Tiotropio/Olodaterol). No tiene indicación de corticoide inhalado (eosinófilos < 300 y no exacerbador) ni de oxígeno domiciliario (PaO2 > 59 mmHg).',
    keyPoints: [
      'Las únicas medidas que prolongan la sobrevida en EPOC son el cese del tabaco y el oxígeno domiciliario crónico (≥15 h/día).',
      'Criterio de oxígeno domiciliario: PaO2 ≤ 55 mmHg o PaO2 56-59 mmHg si hay cor pulmonale o poliglobulia (Hto > 55%).',
      'El esquema GOLD 2024 unificó los grupos C y D en el "Grupo E" (exacerbadores frecuentes), indicando LAMA + LABA inicial.',
      'Los corticoides inhalados (CI) en monoterapia están contraindicados en EPOC; aumentan el riesgo de neumonía bacteriana.',
      'El corticoide inhalado solo se indica como terapia triple (LABA+LAMA+CI) si los eosinófilos en sangre son ≥ 300/uL.',
    ],
    questions: [
      {
        stem: 'Un paciente de 68 años con diagnóstico de EPOC avanzado acude a control en el policlínico broncopulmonar. Se encuentra en reposo, en fase estable. Su gasometría arterial respirando aire ambiental muestra: pH 7.38, PaO2 53 mmHg, PaCO2 46 mmHg y SatO2 86%. ¿Cuál de las siguientes intervenciones ha demostrado prolongar la supervivencia en este paciente?',
        options: [
          { id: 'A', text: 'Terapia triple con fluticasona, salmeterol y tiotropio' },
          { id: 'B', text: 'Oxigenoterapia continua domiciliaria al menos 15 horas al día' },
          { id: 'C', text: 'Ciclos mensuales de azitromicina oral en dosis profiláctica' },
          { id: 'D', text: 'Teofilina oral de liberación retardada' },
          { id: 'E', text: 'Nebulizaciones diarias con solución salina hipertónica al 7%' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una insuficiencia respiratoria crónica con PaO2 en reposo ≤ 55 mmHg (53 mmHg), cumpliendo el criterio formal de indicación de Oxigenoterapia Crónica Domiciliaria (OCD). La OCD utilizada un mínimo de 15 horas diarias (idealmente > 16-18 h, incluyendo el sueño) es una de las pocas medidas que ha demostrado de manera contundente reducir la mortalidad y la progresión a cor pulmonale en EPOC.',
        recTag: 'Banco de Preguntas Oficial · EPOC Estable',
      },
      {
        stem: '¿Cuál es el tratamiento farmacológico de inicio de elección para un paciente con EPOC que ha presentado 2 hospitalizaciones por exacerbaciones agudas en el último año y cuyo hemograma muestra un recuento de eosinófilos de 380 células/uL?',
        options: [
          { id: 'A', text: 'Salbutamol en aerosol a demanda exclusivo' },
          { id: 'B', text: 'LAMA + LABA + Corticoide Inhalado (terapia triple)' },
          { id: 'C', text: 'Fluticasona en monoterapia inhalada' },
          { id: 'D', text: 'Prednisona oral 20 mg al día en forma continua' },
          { id: 'E', text: 'Bromuro de ipratropio cada 8 horas' },
        ],
        correcta: 'B',
        explicacion: 'El paciente pertenece al Grupo E (exacerbador frecuente con ≥ 2 eventos o requerimiento de hospitalización) y además presenta eosinófilos séricos ≥ 300 células/uL (380/uL). Según las guías GOLD, este perfil específico predice un alto beneficio y reducción de mortalidad con la adición de un corticoide inhalado, estando indicada la terapia triple de inicio (LABA + LAMA + CI). La monoterapia con CI (C) o corticoides orales continuos (D) están formalmente contraindicados.',
        recTag: 'Banco de Preguntas Oficial · EPOC Estable',
      },
    ],
  },
  {
    id: 'resp-05',
    classId: 'resp-05',
    tier: 3,
    blockNum: 1,
    blockName: 'Vía Aérea Obstructiva y Función Pulmonar',
    topicLabel: '1.5',
    title: 'Exacerbación Aguda de EPOC (Anthonisen)',
    perfilCode: '1.05.2.006',
    dx: 'Específico', tx: 'Completo', seg: 'Inicial',
    ges: 'Garantía Explícita en Salud (GES): Manejo de la Exacerbación Aguda del EPOC',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#34) · EUNACOM Diciembre 2020 (Q#71) · EUNACOM Julio 2022 (Q#56)',
    frecuencia: 'Máxima · Pregunta obligada sobre criterios de Anthonisen y uso de VMNI',
    svg: null, algoTitle: 'Algoritmo de Manejo de la Exacerbación de EPOC y Ventilación No Invasiva',
    diagram: flow('Algoritmo de Manejo de Exacerbación de EPOC (Anthonisen)', [
      { t: 'Evaluación de Criterios de Anthonisen', s: '1. Aumento de disnea · 2. Aumento de volumen de esputo · 3. Purulencia del esputo' },
      { k: 'split', q: '¿Presenta Criterios para Uso de Antibióticos?', s: 'Tipo 1 (3 criterios) o Tipo 2 con purulencia o necesidad de ventilación mecánica', ll: 'sí (purulencia presente)', rl: 'no (esputo mucoso)',
        left: { t: 'Iniciar Antibióticos + Broncodilatadores + Corticoides', s: 'Amoxicilina/Clavulánico o Macrólido (5-7 días) + Prednisona 40 mg VO (5 días)', type: 'acc' },
        right: { t: 'Broncodilatadores + Corticoide Sistémico', s: 'SABA + SAMA c/20 min · Prednisona 40 mg VO x 5 días · Sin antibióticos', type: 'warn' } },
      { t: 'Evaluación de Acidosis Respiratoria en Gases Arteriales', s: 'Si pH < 7.35 y PaCO2 > 45 mmHg a pesar de tratamiento médico → Ventilación Mecánica No Invasiva (VMNI BiPAP) de 1ª Línea', type: 'dec', al: 'soporte VMNI', from: 'left' },
    ]),
    contexto: 'La exacerbación de EPOC es una de las principales urgencias respiratorias. El EUNACOM interroga sistemáticamente la aplicación de los criterios de Anthonisen para decidir antibióticos, la dosis y duración corta de corticoides orales, la meta restrictiva de oxígeno para evitar narcosis hipercápnica y las indicaciones absolutas de ventilación no invasiva (VMNI).',
    contentSections: [
      {
        subhead: '1. Definición y Fisiopatología de la Descompensación',
        paragraphs: [
          'La <strong>exacerbación aguda de EPOC</strong> se define como un evento agudo caracterizado por el empeoramiento de la disnea y/o tos y expectoración más allá de la variabilidad diaria habitual en un período &lt; 14 días, que condiciona un ajuste de la terapia de base. El 75–80% de los casos se desencadenan por infecciones del árbol traqueobronquial (bacterianas o virales) y el resto por contaminación ambiental o falta de adherencia.',
          'El aumento de la resistencia al flujo aéreo empeora el atrapamiento aéreo dinámico, provocando hiperinsuflación pulmonar crítica. Esto acorta las fibras diafragmáticas situándolas en desventaja mecánica, aumenta el trabajo respiratorio y descompensa drásticamente la relación ventilación/perfusión (V/Q), con riesgo inminente de hipoxemia y fatiga muscular hipercápnica.',
        ],
      },
      {
        subhead: '2. Criterios Cardinales de Anthonisen y Microbiología',
        paragraphs: [
          'La indicación de antibioticoterapia descansa en la clasificación clásica de <strong>Anthonisen</strong>, basada en tres síntomas cardinales: 1) <strong>Aumento de la disnea</strong> basal; 2) <strong>Aumento del volumen del esputo</strong>; y 3) <strong>Aparición o incremento de la purulencia del esputo</strong>.',
          'Se clasifica en: <strong>Tipo 1 (Grave)</strong>: presencia de los 3 síntomas cardinales (requiere antibióticos 100%); <strong>Tipo 2 (Moderada)</strong>: 2 síntomas cardinales (<em>solo requiere antibióticos si uno de ellos es la purulencia</em>); y <strong>Tipo 3 (Leve)</strong>: 1 síntoma cardinal más al menos un criterio menor (tos, sibilancias, fiebre, infección de vía aérea superior) en los últimos 5 días (no requiere antibióticos de rutina). Los patógenos bacterianos predominantes son <em>Haemophilus influenzae</em> (el más común), <em>Streptococcus pneumoniae</em> y <em>Moraxella catarrhalis</em>; en pacientes con obstrucción muy severa o bronquiectasias cobra relevancia <em>Pseudomonas aeruginosa</em>.',
        ],
      },
      {
        subhead: '3. Oxigenoterapia Controlada y Riesgo de Narcosis Hipercápnica',
        paragraphs: [
          'En todo paciente con EPOC exacerbado que requiera oxígeno suplementario, la administración debe ser <strong>estrictamente controlada y titulada</strong> con <strong>meta de SatO₂ entre 88% y 92%</strong> (o PaO₂ entre 55 y 65 mmHg) mediante cánula nasal a 1–2 L/min o mascarilla Venturi al 24–28%.',
          'La administración inadvertida de altos flujos de O₂ (FiO₂ elevada) suprime la vasoconstricción hipóxica protectora en alvéolos hipoventilados (empeorando el desbalance V/Q), desplaza el CO₂ de la hemoglobina hacia el plasma (efecto Haldane) y atenúa el estímulo ventilatorio central hipóxico. Esto precipita una hipercapnia brusca, acidosis respiratoria descompensada, encefalopatía hipercápnica (asterixis, somnolencia, letargia) y finalmente coma y paro respiratorio.',
        ],
      },
      {
        subhead: '4. Protocolo Farmacológico Escalonado (SABA/SAMA, Corticoides REDUCE, Antimicrobianos)',
        paragraphs: [
          '<strong>1) Broncodilatación inhalada intensiva:</strong> Combinación de <strong>Salbutamol 4 a 8 puff más Bromuro de Ipratropio 4 a 8 puff con aerocámara cada 20–30 minutos</strong> durante las primeras 2 horas, espaciando luego cada 2 a 4 horas según respuesta.',
          '<strong>2) Corticoides sistémicos orales:</strong> <strong>Prednisona 40 mg al día por vía oral durante exactamente 5 días</strong> (evidencia clase I del estudio REDUCE). No se recomienda prolongar la terapia más allá de 5 días ni realizar pautas descendentes, ya que 14 días no ofrecen ningún beneficio en recuperación funcional ni prevención de recaídas y triplican las complicaciones metabólicas e infecciosas.',
          '<strong>3) Antibioticoterapia dirigida:</strong> En exacerbaciones Tipo 1 o Tipo 2 con purulencia, el esquema de primera línea en Chile es <strong>Amoxicilina/Ácido Clavulánico 875/125 mg cada 12 horas por 5 a 7 días</strong> (o Azitromicina 500 mg/día por 3 a 5 días; Cefuroximo 500 mg c/12h como alternativa).',
        ],
      },
      {
        subhead: '5. Ventilación Mecánica No Invasiva (BiPAP): Criterios, Metas y Destino',
        paragraphs: [
          'La <strong>Ventilación Mecánica No Invasiva (VMNI en modalidad BiPAP / Bilevel)</strong> es el estándar de oro y la terapia de soporte ventilatorio de primera elección en la exacerbación de EPOC con <strong>acidosis respiratoria hipercápnica</strong> definida por <strong>pH &lt; 7.35 y PaCO₂ &gt; 45 mmHg</strong> a pesar de tratamiento médico óptimo.',
          'La VMNI descarga la musculatura inspiratoria fatigada, aumenta el volumen corriente, barre el dióxido de carbono acumulado y reduce en más de un 50% la necesidad de intubación orotraqueal y la mortalidad intrahospitalaria. Son contraindicaciones de VMNI: paro cardiorrespiratorio inminente, Glasgow &lt; 8 sin protección de vía aérea, inestabilidad hemodinámica con requerimiento de drogas vasoactivas, vómitos incoercibles o trauma facial grave.',
        ],
      },
    ],
    table: {
      title: 'Criterios de Anthonisen e Indicación Antimicrobiana en Exacerbación de EPOC',
      headers: ['Tipo de Anthonisen', 'Criterios Presentes', '¿Requiere Antibióticos?', 'Tratamiento Médico Obligatorio'],
      rows: [
        ['Tipo 1 (Grave)', 'Aumento disnea + aumento esputo + purulencia', 'SÍ (100% de los casos)', 'SABA + SAMA + Prednisona 40 mg x 5d + ATB'],
        ['Tipo 2 (Moderada)', '2 criterios (con esputo purulento)', 'SÍ (por la purulencia)', 'SABA + SAMA + Prednisona 40 mg x 5d + ATB'],
        ['Tipo 2 (Moderada)', '2 criterios (disnea + volumen SIN purulencia)', 'NO indicado de rutina', 'SABA + SAMA + Prednisona 40 mg x 5d'],
        ['Tipo 3 (Leve)', '1 criterio cardinal + tos/fiebre/faringitis', 'NO indicado', 'Optimizar SABA + SAMA (reevaluar)'],
      ],
    },
    severityTable: {
      title: 'Estratificación de Severidad y Criterios de Ingreso en Exacerbación de EPOC (GOLD 2026)',
      headers: ['Nivel de Severidad', 'Parámetros Clínicos y Gasométricos', 'Intervención Requerida', 'Destino Asistencial'],
      rows: [
        ['Leve (Ambulatoria)', 'Disnea leve; sin insuficiencia respiratoria (SatO2 > 92%)', 'Aumento de broncodilatadores de acción corta (SABA)', 'Manejo ambulatorio con control médico'],
        ['Moderada', 'Disnea moderada; taquipnea FR > 24 rpm; sin acidosis', 'SABA + SAMA + Corticoides orales (Prednisona 40 mg x 5d)', 'Observación urgencias / Hospitalización básica'],
        ['Grave (Sin riesgo vital)', 'FR > 30 rpm; tiraje; acidosis leve (pH 7.30-7.35); PaCO2 45-60', 'SABA + SAMA + Corticoides + VMNI precoz (BiPAP)', 'Hospitalización en Sala de Cuidados Medios'],
        ['Muy Grave / Falla respiratoria', 'Acidosis grave (pH < 7.25); PaCO2 > 65; sopor; inestabilidad', 'VMNI inmediata de rescate o Intubación endotraqueal', 'Ingreso inmediato a UCI / UTI'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Farmacológico y Terapéutico Escalonado en Exacerbación de EPOC',
      headers: ['Fármaco / Medida', 'Dosis y Vía de Administración', 'Frecuencia / Duración', 'Objetivo Clínico'],
      rows: [
        ['Oxigenoterapia controlada', 'Cánula nasal 1-2 L/min o Venturi 24-28%', 'Titulación continua', 'Meta estricta de SatO2 88-92% (prevenir narcosis hipercápnica)'],
        ['Salbutamol + Ipratropio', '4 a 8 puff de cada uno con aerocámara', 'Cada 20-30 min por 2 h; luego c/4-6h', 'Broncodilatación dual y reducción del atrapamiento aéreo'],
        ['Prednisona oral', '40 mg VO en dosis única matinal', '5 días exactos (sin pauta descendente)', 'Reducción de inflamación bronquial y estancia hospitalaria (REDUCE)'],
        ['Amoxicilina/Ácido Clavulánico', '875/125 mg VO cada 12 horas', '5 a 7 días (si Anthonisen 1 o 2 purulento)', 'Cobertura de H. influenzae, S. pneumoniae y M. catarrhalis'],
        ['Ventilación No Invasiva (BiPAP)', 'IPAP 10-14 cmH2O, EPAP 4-6 cmH2O', 'Sesiones de 2-4 horas continuas', 'Barrer PaCO2 y corregir acidosis respiratoria (pH < 7.35)'],
      ],
    },
    vignette: 'Hombre de 70 años con EPOC grave por tabaquismo (40 paq/año) consulta en el Servicio de Urgencias por cuadro de 48 horas de aumento progresivo de disnea de esfuerzo a mínimos esfuerzos, incremento notable del volumen de esputo y cambio de secreciones a coloración verde espesa. Al examen físico: FR 28 rpm, FC 102 lpm, PA 135/85 mmHg, SatO2 86% al aire ambiente. A la auscultación pulmonar destaca murmullo pulmonar globalmente disminuido con espiración muy prolongada y abundantes roncus y sibilancias difusas bilaterales.',
    explicacion: 'El paciente cursa una exacerbación aguda de EPOC clasificada como Anthonisen Tipo 1 (cumple los 3 criterios cardinales: incremento de disnea basal, aumento del volumen de esputo y purulencia manifiesta). El manejo integral estructurado comprende: 1) Oxigenoterapia normobárica controlada por cánula nasal con meta estricta de SatO2 88-92%; 2) Broncodilatadores duales inhalados (Salbutamol + Bromuro de Ipratropio 4-8 puff con espaciador c/20-30 min); 3) Corticoterapia sistémica oral (Prednisona 40 mg/día por exactamente 5 días, estudio REDUCE); 4) Antibioticoterapia empírica oral de primera línea (Amoxicilina/Clavulánico 875/125 mg c/12h por 5-7 días); y 5) Gases arteriales basales para pesquisar acidosis hipercápnica y eventual necesidad de VMNI.',
    keyPoints: [
      'Los criterios de Anthonisen guían la indicación de antibióticos: se indican en Tipo 1 (3 criterios) o Tipo 2 si uno de los criterios es esputo purulento.',
      'El patógeno bacteriano más frecuentemente aislado en las exacerbaciones de EPOC es Haemophilus influenzae.',
      'El esquema corticoideo de elección avalado por el estudio REDUCE es Prednisona 40 mg/día durante exactamente 5 días (sin pauta descendente).',
      'La meta de saturación en EPOC descompensado es estrictamente 88–92%; la hiperoxia suprime la vasoconstricción hipóxica y desencadena coma hipercápnico.',
      'La Ventilación Mecánica No Invasiva (BiPAP) es la indicación de elección de primera línea ante acidosis respiratoria hipercápnica (pH < 7.35 y PaCO2 > 45 mmHg).',
      'La VMNI reduce la necesidad de intubación orotraqueal en más de 50% y disminuye significativamente la mortalidad intrahospitalaria.',
      'Trampa: no indicar corticoides orales por más de 5 a 7 días ni demorar la instalación de VMNI si hay acidosis respiratoria.',
      'En pacientes con EPOC que utilizan oxígeno domiciliario crónico, la indicación formal es PaO2 ≤ 55 mmHg en reposo o SatO2 ≤ 88% demostrada.',
    ],
    questions: [
      {
        stem: 'Un paciente de 67 años con antecedente de EPOC tabáquico ingresa a urgencias por una exacerbación infecciosa con disnea intensa y esputo purulento. Se inicia oxigenoterapia por mascarilla con reservorio a 15 L/min. Una hora más tarde el paciente se encuentra estuporoso, con respiración superficial y asterixis evidente. Los gases arteriales muestran: pH 7.22, PaO2 110 mmHg, PaCO2 74 mmHg y HCO3 26 mEq/L. ¿Cuál fue el error en el manejo y cuál es la conducta inmediata?',
        options: [
          { id: 'A', text: 'Error: dosis insuficiente de antibióticos; conducta: agregar vancomicina endovenosa en bolo' },
          { id: 'B', text: 'Error: hiperoxia inducida por exceso de oxígeno que abolió el estímulo respiratorio; conducta: bajar FiO2 a meta Sat 88-92% e iniciar Ventilación Mecánica No Invasiva (BiPAP)' },
          { id: 'C', text: 'Error: no haber administrado aminofilina en infusión; conducta: cargar bolo de aminofilina EV' },
          { id: 'D', text: 'Error: falta de sedación; conducta: administrar midazolam EV para controlar la agitación' },
          { id: 'E', text: 'Error: falta de hidratación; conducta: infundir 2.000 mL de suero fisiológico en 30 minutos' },
        ],
        correcta: 'B',
        explicacion: 'El uso inadvertido de oxígeno a alto flujo con mascarilla de reservorio elevó la PaO2 a 110 mmHg, anulando el estímulo hipóxico carotídeo, empeorando el desbalance V/Q y provocando una hipoventilación alveolar severa con narcosis hipercápnica (PaCO2 74 mmHg) y acidosis respiratoria grave (pH 7.22). La conducta inmediata es ajustar el aporte de O2 para mantener SatO2 88-92% e instalar de urgencia soporte con Ventilación Mecánica No Invasiva (VMNI BiPAP) para barrer el CO2 y revertir la acidosis.',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál es la duración recomendada del tratamiento con corticoides sistémicos orales en una exacerbación moderada de EPOC según la evidencia clínica actual (estudio REDUCE)?',
        options: [
          { id: 'A', text: '14 días con descenso progresivo de 5 mg cada 3 días' },
          { id: 'B', text: '5 días con dosis fija de 40 mg de prednisona al día sin pauta descendente' },
          { id: 'C', text: '21 días acompañado de corticoides inhalados a dosis máxima' },
          { id: 'D', text: 'Dosis única de 100 mg de hidrocortisona EV sin mantención oral' },
          { id: 'E', text: '30 días continuos con control glucémico estricto' },
        ],
        correcta: 'B',
        explicacion: 'El ensayo clínico aleatorizado REDUCE demostró que un ciclo corto de 5 días de Prednisona oral a 40 mg/día es no inferior a los regímenes tradicionales de 14 días en términos de recurrencia de exacerbaciones, mejoría del VEF1 y mortalidad, pero con una tasa significativamente menor de efectos adversos (hiperglicemia, infecciones secundarias y osteoporosis). Por ello, las guías GOLD recomiendan exactamente 5 días sin descenso gradual.',
        recTag: 'EUNACOM Diciembre 2020 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 72 años con EPOC consulta en el SAPU por incremento de su disnea habitual en los últimos 3 días, acompañado de tos con abundante expectoración verdosa espesa y sensación febril. Al examen: FR 26 rpm, FC 94 lpm, SatO2 89% al aire ambiente. Auscultación con roncus y sibilancias bilaterales. ¿Cuál es la conducta médica integral más apropiada para este paciente?',
        options: [
          { id: 'A', text: 'Indicar salbutamol en aerosol SOS y control ambulatorio en caso de fiebre mayor a 39°C' },
          { id: 'B', text: 'Prescribir amoxicilina/ácido clavulánico oral, prednisona 40 mg/día por 5 días, broncodilatadores inhalados y oxígeno controlado' },
          { id: 'C', text: 'Hospitalizar de inmediato para inicio de ciprofloxacino en infusión endovenosa continua y metilprednisolona en pulsos' },
          { id: 'D', text: 'Indicar kinesioterapia respiratoria motora exclusiva sin fármacos antiinflamatorios' },
          { id: 'E', text: 'Administrar nebulización con corticoides y suspender los broncodilatadores inhalados habituales' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una exacerbación de EPOC Anthonisen Tipo 1 (aumento de disnea, incremento de volumen de esputo y franca purulencia del esputo con expectoración verdosa). La conducta médica de elección según las guías clínicas GES y GOLD comprende la asociación de: 1) Broncodilatadores de acción corta (SABA + SAMA); 2) Corticoides sistémicos orales en ciclo corto (Prednisona 40 mg/día por 5 días); 3) Antibioticoterapia empírica dirigida (Amoxicilina/Clavulánico 875/125 mg c/12h por 5-7 días); y 4) Oxígeno controlado con meta SatO2 88-92%.',
        recTag: 'EUNACOM Julio 2022 · Reconstrucción oficial',
      },
      {
        stem: 'Un paciente de 69 años con EPOC e hipercapnia crónica es ingresado a la unidad de emergencias por disnea grave. Los gases arteriales tras 1 hora de tratamiento broncodilatador muestran: pH 7.27, PaCO2 62 mmHg, PaO2 58 mmHg, HCO3 28 mEq/L con cánula nasal a 2 L/min. El paciente está vigil, orientado y coopera con el examen físico. ¿Cuál es la indicación prioritaria en este momento?',
        options: [
          { id: 'A', text: 'Intubación orotraqueal e inicio inmediato de ventilación mecánica invasiva' },
          { id: 'B', text: 'Instalación de Ventilación Mecánica No Invasiva (VMNI BiPAP)' },
          { id: 'C', text: 'Administración de bicarbonato de sodio 2/3 M en infusión endovenosa' },
          { id: 'D', text: 'Aumentar el oxígeno a 10 L/min con mascarilla de recirculación' },
          { id: 'E', text: 'Sedación suave con morfina subcutánea para disminuir el trabajo respiratorio' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una insuficiencia respiratoria hipercápnica aguda con acidosis respiratoria descompensada (pH 7.27 < 7.35 y PaCO2 62 mmHg > 45 mmHg) a pesar de la terapia broncodilatadora inicial. Al encontrarse vigil, colaborador y hemodinámicamente estable, cumple todos los criterios para el inicio de Ventilación Mecánica No Invasiva (VMNI en modalidad BiPAP). La VMNI es la terapia de primera línea obligatoria: disminuye el trabajo de los músculos respiratorios, favorece el lavado de CO2 y reduce drásticamente la tasa de intubación endotraqueal y la morbimortalidad.',
        recTag: 'EUNACOM Reconstrucción Canónica · Soporte Ventilatorio',
      },
    ],
  },
];

module.exports = { bloque1 };
