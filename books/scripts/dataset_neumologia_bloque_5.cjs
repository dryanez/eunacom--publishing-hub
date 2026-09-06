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

const bloque5 = [
  {
    id: 'resp-21',
    classId: 'resp-21',
    tier: 3,
    blockNum: 5,
    blockName: 'Cuidados Críticos, Ventilación y Medicina del Sueño',
    topicLabel: '5.1',
    title: 'Insuficiencia Respiratoria Aguda: Tipo 1 (Hipoxémica) vs Tipo 2 (Hipercápnica)',
    perfilCode: '1.05.1.023, 1.05.2.008, 1.05.2.009',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES',
    reconstrucciones: 'EUNACOM Diciembre 2016 (Q#12) · EUNACOM Julio 2018 (Q#55) · EUNACOM Diciembre 2020 (Q#34) · EUNACOM Julio 2023 (Q#81)',
    frecuencia: 'Máxima · Interpretación gasométrica y gradiente alvéolo-arterial',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico Gasométrico y Mecanismos Fisiopatológicos de IRA',
    diagram: flow('Algoritmo de Diferenciación Fisiopatológica de IRA', [
      { t: 'Insuficiencia Respiratoria Aguda Gasométrica', s: 'PaO2 < 60 mmHg a nivel del mar respirando aire ambiental (SatO2 < 90%)' },
      { k: 'split', q: 'Paso 1: Evaluar la Presión Arterial de CO2 (PaCO2)', s: 'Define Insuficiencia Respiratoria Tipo 1 vs Tipo 2', ll: 'PaCO2 ≤ 45 mmHg (Tipo 1)', rl: 'PaCO2 > 45 mmHg (Tipo 2)',
        left: { t: 'IRA Tipo 1: Hipoxémica / Parénquima', s: 'Gradiente A-a elevado (> 15-20) · Mecanismos: Shunt (SDRA, edema) o Alteración V/Q (NAC, TEP)', type: 'acc' },
        right: { t: 'IRA Tipo 2: Hipercápnica / Falla de Bomba', s: 'Evaluar Gradiente A-a: Si A-a es NORMAL → Hipoventilación alveolar pura (Opioides, Miastenia, Guillain-Barré)', type: 'warn' },
        ll: 'PaCO2 normal/baja', rl: 'PaCO2 elevada (>45)' },
      { t: 'Respuesta al Aporte de Oxígeno Suplementario (O2 al 100%)', s: 'Shunt verdadero (intrapulmonar): NO corrige con O2 100% · Alteración V/Q: Sí corrige de inmediato', type: 'dec', al: 'test de oxígeno', from: 'left' },
    ]),
    contexto: 'La Insuficiencia Respiratoria Aguda (IRA) es una condición clínica crítica transversal de máxima evaluación en el EUNACOM. Es imprescindible memorizar la definición gasométrica estricta (PaO₂ < 60 mmHg a nivel del mar), diferenciar la IRA Tipo 1 de la Tipo 2, calcular e interpretar el Gradiente Alvéolo-Arterial de Oxígeno [P(A-a)O₂], reconocer el Shunt como la única hipoxemia refractaria al O₂ al 100%, y aplicar la indicación de Ventilación Mecánica No Invasiva (VMNI BiPAP) en acidosis hipercápnica por EPOC.',
    contentSections: [
      {
        subhead: '1. Definición Gasométrica Rigurosa y Umbrales Diagnósticos',
        paragraphs: [
          'La Insuficiencia Respiratoria Aguda (IRA) se define <strong>estrictamente mediante el análisis de gases en sangre arterial (GSA)</strong> como la incapacidad del sistema respiratorio para cumplir su función primordial de oxigenar la sangre venosa y/o eliminar el dióxido de carbono metabólico.',
          '<strong>Criterio diagnóstico universal de examen:</strong> <strong>Presión Arterial de Oxígeno (PaO₂) &lt; 60 mmHg respirando aire ambiental (FiO₂ 21%) a nivel del mar</strong>.',
          'Este umbral de 60 mmHg no es arbitrario: corresponde exactamente a la zona de inflexión de la <strong>curva de disociación de la oxihemoglobina</strong>, por debajo de la cual pequeñas caídas adicionales de PaO₂ generan caídas estrepitosas en la saturación arterial (SatO₂ &lt; 90%) y comprometen críticamente la entrega de oxígeno a los tejidos periféricos.',
        ],
      },
      {
        subhead: '2. Los Cinco Mecanismos Fisiopatológicos de la Hipoxemia Arterial',
        paragraphs: [
          'Toda hipoxemia en la práctica médica se origina en uno de 5 mecanismos:<br>' +
          '1. <strong>Desbalance o Desigualdad Ventilación/Perfusión (Bajo V/Q):</strong> Es el mecanismo <strong>más frecuente</strong> en la clínica (neumonía, EPOC, asma bronquial, embolia pulmonar). Zonas pulmonares perfundidas pero poco ventiladas. <strong>Sello característico: Gradiente A-a elevado, pero CORRIGE con aporte suplementario de oxígeno</strong>.<br>' +
          '2. <strong>Efecto Shunt o Cortocircuito Intrapulmonar Verdadero:</strong> Sangre venosa mixta atraviesa el lecho capilar de alvéolos totalmente colapsados o inundados de líquido/pus (SDRA grave, edema agudo de pulmón cardiogénico masivo, atelectasia lobar obstructiva total). <strong>Regla de oro patognomónica EUNACOM: Es el ÚNICO mecanismo que NO corrige con O₂ al 100%</strong>.<br>' +
          '3. <strong>Hipoventilación Alveolar Pura:</strong> Falla de la bomba respiratoria por depresión del centro ventilatorio bulbar (sobredosis de opioides, intoxicación por benzodiacepinas) o patología neuromuscular periférica (síndrome de Guillain-Barré, miastenia gravis crisis, ELA). Cursa con <strong>hipercapnia obligada (PaCO₂ &gt; 45 mmHg) y Gradiente A-a NORMAL</strong>.<br>' +
          '4. <strong>Alteración de la Difusión Alvéolo-Capilar:</strong> Engrosamiento inflamatorio o fibrótico de la membrana alvéolo-capilar (fibrosis pulmonar idiopática avanzada). Se manifiesta inicialmente como hipoxemia durante el ejercicio físico.<br>' +
          '5. <strong>Disminución de la Presión Inspirada de Oxígeno (PiO₂):</strong> Exposición a grandes altitudes geográficas (&gt; 3.000 msnm) o atmósfera enrarecida en espacios confinados. Cursa con gradiente A-a normal y normo/hipocapnia compensatoria.',
        ],
      },
      {
        subhead: '3. El Gradiente Alvéolo-Arterial de Oxígeno: Cálculo e Interpretación',
        paragraphs: [
          'El Gradiente Alvéolo-Arterial de Oxígeno [P(A-a)O₂] es la diferencia entre la presión parcial de oxígeno en el alvéolo (PAO₂) y en la sangre arterial (PaO₂):<br>' +
          '• <strong>Ecuación del Gas Alveolar:</strong> PAO₂ = PiO₂ - (PaCO₂ / R) = [FiO₂ x (Pbarométrica - Ph2o)] - (PaCO₂ / 0.8). Respirando aire ambiental a nivel del mar: <strong>PAO₂ = 150 - (PaCO₂ / 0.8)</strong>.<br>' +
          '• <strong>Gradiente [P(A-a)O₂] = PAO₂ - PaO₂</strong>.<br>' +
          '• <strong>Valor Normal:</strong> En adultos jóvenes es de <strong>5 a 15 mmHg</strong> (aumenta fisiológicamente con la edad: Fórmula: <em>Edad/4 + 4</em>; en mayores de 70 años hasta 20 mmHg).<br>' +
          '• <strong>Regla de oro diagnóstica EUNACOM:</strong> Si un paciente presenta hipoxemia con <strong>Gradiente A-a NORMAL (&lt; 15–20 mmHg)</strong>, el parénquima pulmonar y la circulación pulmonar están SANOS; la causa reside exclusivamente fuera del pulmón (<strong>hipoventilación alveolar pura</strong> por drogas/falla neuromuscular o baja altitud). Si el <strong>Gradiente A-a está ELEVADO (&gt; 20 mmHg)</strong>, existe daño estructural intrínseco del parénquima pulmonar (neumonía, SDRA, edema) o vascular (TEP).',
        ],
      },
      {
        subhead: '4. Insuficiencia Respiratoria Tipo 1 vs Tipo 2: Distinción Gasométrica y Clínica',
        paragraphs: [
          '• <strong>IRA Tipo 1 (Hipoxémica o Parénquimatosa / Falla de Oxigenación):</strong> Se define por <strong>PaO₂ &lt; 60 mmHg con PaCO₂ normal o baja (≤ 45 mmHg)</strong>. El Gradiente A-a está invariablemente elevado. Clínicamente se manifiesta por taquipnea, taquicardia, uso de musculatura accesoria, sudoración y cianosis periférica o central.<br>' +
          '• <strong>IRA Tipo 2 (Hipercápnica o Ventilatoria de Bomba):</strong> Se define por <strong>PaCO₂ &gt; 45 mmHg (hipercapnia)</strong>, habitualmente acompañada de acidosis respiratoria (pH &lt; 7.35) si es aguda. Puede cursar con o sin hipoxemia secundaria. Clínicamente se caracteriza por signos de <strong>narcosis por CO₂ y vasodilatación cerebral</strong>: cefalea pulsátil, somnolencia fluctuante, confusión, estupor, asterixis (flapping tremor) y convulsiones.',
        ],
      },
      {
        subhead: '5. Algoritmo Terapéutico Escalonado y Soporte Ventilatorio (VMNI vs VMI)',
        paragraphs: [
          '• <strong>Oxigenoterapia en IRA Tipo 1:</strong> Administrar oxígeno titulado para meta de SatO₂ 92–96% (enfermos sin retención) mediante Cánula Nasal (1–5 L/min) o Mascarilla Venturi. Si persiste hipoxemia refractaria moderada-severa (PaFiO₂ &lt; 200), la <strong>Cánula Nasal de Alto Flujo (CNAF, hasta 60 L/min)</strong> reduce el trabajo respiratorio y genera PEEP dinámico leve.<br>' +
          '• <strong>Ventilación Mecánica No Invasiva (VMNI en modalidad BiPAP):</strong> Es la intervención salvadora de <strong>primera línea con evidencia categoría A en la exacerbación aguda de EPOC con acidosis respiratoria hipercápnica (pH entre 7.25 y 7.35 y PaCO₂ &gt; 45 mmHg)</strong> y en el <strong>Edema Pulmonar Agudo Cardiogénico</strong>. Reduce la necesidad de intubación endotraqueal en más del 60% y disminuye la mortalidad hospitalaria.<br>' +
          '• <strong>Criterios de Ventilación Mecánica Invasiva (Intubación Orotraqueal de Urgencia):</strong> Paro cardiorrespiratorio o apnea, compromiso grave de conciencia (Glasgow ≤ 8), inestabilidad hemodinámica refractaria con shock, fatiga muscular respiratoria extrema con respiración paradójica y fracaso de la VMNI tras 1–2 horas de prueba.',
        ],
      },
    ],
    table: {
      title: 'Mecanismos Fisiopatológicos de la Insuficiencia Respiratoria Aguda',
      headers: ['Mecanismo Fisiopatológico', 'PaO2', 'PaCO2', 'Gradiente A-a O2', 'Respuesta a O2 100%'],
      rows: [
        ['Hipoventilación alveolar pura (Opioides, ACV)', 'Disminuida', 'Elevada (> 45)', 'NORMAL (< 15-20)', 'Corrige rápidamente'],
        ['Desbalance V/Q bajo (NAC, EPOC, Asma)', 'Disminuida', 'Normal o Baja', 'ELEVADO (> 20)', 'Corrige fácilmente'],
        ['Shunt Intrapulmonar (SDRA, Edema cardiogénico)', 'Muy disminuida', 'Normal o Baja', 'MUY ELEVADO', 'REFRACTARIO a O2 100%'],
        ['Alteración de la Difusión (EPID avanzada)', 'Baja en esfuerzo', 'Normal o Baja', 'ELEVADO', 'Corrige con O2'],
      ],
    },
    severityTable: {
      title: 'Clasificación Gasométrica y Mecanismos Fisiopatológicos de la Hipoxemia',
      headers: ['Mecanismo Fisiopatológico', 'PaO2', 'PaCO2', 'Gradiente A-a O2', 'Respuesta a O2 100%', 'Ejemplos Clínicos Típicos'],
      rows: [
        ['Hipoventilación alveolar pura', 'Disminuida', 'Elevada (> 45 mmHg)', 'NORMAL (< 15-20 mmHg)', 'Corrige completamente', 'Sobredosis opioides/sedantes, Guillain-Barré, Miastenia'],
        ['Desbalance V/Q bajo', 'Disminuida', 'Normal o Baja', 'ELEVADO (> 20 mmHg)', 'Corrige fácilmente', 'Crisis asmática, EPOC exacerbado, NAC comunitaria, TEP'],
        ['Shunt intrapulmonar verdadero', 'Muy disminuida', 'Normal o Baja', 'MUY ELEVADO (> 30 mmHg)', 'REFRACTARIO a O2 100%', 'SDRA severo, Edema pulmonar cardiogénico masivo, Atelectasia lobar'],
        ['Alteración de la Difusión', 'Baja en esfuerzo', 'Normal o Baja', 'ELEVADO (> 20 mmHg)', 'Corrige con O2 suplementario', 'Fibrosis Pulmonar Idiopática, EPID avanzada'],
        ['Baja Presión Inspirada de O2 (PiO2)', 'Disminuida', 'Baja (por hiperventilación)', 'NORMAL (< 15-20 mmHg)', 'Corrige de inmediato', 'Grandes alturas (> 3.000 m sobre el nivel del mar)'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Escalonado de Oxigenoterapia y Soporte Ventilatorio en IRA',
      headers: ['Dispositivo de Oxigenación', 'Flujo / FiO2 Entregada', 'Indicación Primaria', 'Criterio de Escalamiento'],
      rows: [
        ['Cánula Nasal Estándar', '1 a 5 L/min (FiO2 24% - 40%)', 'Hipoxemia leve a moderada (IRA Tipo 1)', 'SatO2 < 90% a 5 L/min o taquipnea persistente'],
        ['Mascarilla Venturi', 'FiO2 fija precisa: 24%, 28%, 35%, 50%', 'EPOC retenedor de CO2 (evitar abolición del estímulo hipóxico)', 'PaO2 < 60 mmHg con FiO2 50% o acidosis progresiva'],
        ['Cánula Nasal de Alto Flujo (CNAF)', 'Flujo 30-60 L/min (FiO2 21% - 100%) con PEEP 3-5 cm', 'IRA hipoxémica moderada-severa, falla de Venturi', 'Índice ROX < 3.88 a las 2-12 h (alto riesgo de falla)'],
        ['Ventilación Mecánica No Invasiva (VMNI BiPAP)', 'IPAP 10-15 / EPAP 4-6 cmH2O', 'IRA Tipo 2 hipercápnica (EPOC, edema pulmonar cardiogénico)', 'pH < 7.25 persistente, encefalopatía, paro respiratorio'],
        ['Ventilación Mecánica Invasiva (VMI)', 'Intubación orotraqueal + Sedoanalgesia', 'Falla de CNAF/VMNI, coma Glasgow ≤ 8, shock séptico grave', 'Mantenimiento de soporte vital avanzado en UCI'],
      ],
    },
    vignette: 'Joven de 22 años es encontrado inconsciente con jeringas vacías a su lado. Ingresa a reanimación en coma, con bradipnea severa de 6 rpm, miosis pupilar puntiforme y cianosis. Gases arteriales respirando aire ambiental: pH 7.22, PaO2 52 mmHg, PaCO2 68 mmHg, HCO3 26 mEq/L. El cálculo del gradiente alvéolo-arterial de oxígeno resulta en 11 mmHg (normal).',
    explicacion: 'Insuficiencia respiratoria aguda hipercápnica (Tipo 2) secundaria a hipoventilación alveolar pura por sobredosis de opioides. La presencia de hipercapnia severa con acidosis respiratoria asociada a un Gradiente Alvéolo-Arterial rigurosamente NORMAL confirma que el pulmón está sano y la falla reside en la bomba ventilatoria/centro respiratorio. La conducta inmediata es ventilar con bolsa-mascarilla y administrar Naloxona endovenosa.',
    keyPoints: [
      'Definición gasométrica de IRA: PaO2 < 60 mmHg respirando aire ambiental a nivel del mar (SatO2 < 90%).',
      'IRA Tipo 1 es hipoxémica (PaCO2 ≤ 45 mmHg) con Gradiente Alvéolo-Arterial elevado por daño parenquimatoso o vascular.',
      'IRA Tipo 2 es hipercápnica (PaCO2 > 45 mmHg) secundaria a falla de bomba ventilatoria o fatiga muscular.',
      'La hipoventilación alveolar pura se diagnostica por hipercapnia con Gradiente Alvéolo-Arterial NORMAL (< 15–20 mmHg).',
      'El Shunt intrapulmonar (SDRA, edema alveolar masivo) es el único mecanismo que NO corrige con O2 al 100%.',
      'La Mascarilla Venturi es de elección en pacientes retenedores de CO2 para evitar hipoventilación por exceso de FiO2.',
      'La Ventilación Mecánica No Invasiva (VMNI BiPAP) es la terapia de primera línea de elección en exacerbación de EPOC con pH 7.25–7.35.',
      'Criterios de intubación endotraqueal inmediata: paro respiratorio inminente, Glasgow ≤ 8, shock o fracaso de VMNI.',
    ],
    questions: [
      {
        stem: 'Un paciente de 25 años ingresa al servicio de urgencias estuporoso con sospecha de intoxicación exógena por sedantes. Al examen físico tiene FR 8 rpm y ruidos pulmonares normales bilateralmente. Sus gases en sangre arterial respirando aire ambiental muestran: pH 7.24, PaO2 55 mmHg, PaCO2 65 mmHg y bicarbonato 26 mEq/L. El gradiente alvéolo-arterial de oxígeno calculado es de 12 mmHg (dentro del rango normal para su edad). ¿Cuál es el mecanismo fisiopatológico primario responsable de la hipoxemia en este paciente?',
        options: [
          { id: 'A', text: 'Shunt intrapulmonar de derecha a izquierda por microatelectasias' },
          { id: 'B', text: 'Desbalance entre la ventilación y la perfusión pulmonar (efecto V/Q)' },
          { id: 'C', text: 'Hipoventilación alveolar pura con integridad del parénquima pulmonar' },
          { id: 'D', text: 'Trastorno severo de la difusión alvéolo-capilar' },
          { id: 'E', text: 'Disminución crítica de la fracción inspirada de oxígeno' },
        ],
        correcta: 'C',
        explicacion: 'El paciente presenta una acidosis respiratoria aguda descompensada (pH 7.24, PaCO2 65 mmHg) con hipoxemia moderada (PaO2 55 mmHg). El dato decisivo es el Gradiente Alvéolo-Arterial de Oxígeno [P(A-a)O2], el cual es rigurosamente normal (12 mmHg). Cuando la hipoxemia se acompaña de hipercapnia con gradiente A-a normal, el único mecanismo fisiopatológico posible es la hipoventilación alveolar pura secundaria a la depresión central del estímulo ventilatorio por fármacos.',
        recTag: 'EUNACOM Diciembre 2016 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de los siguientes mecanismos fisiopatológicos productores de hipoxemia arterial se caracteriza por presentar una falta de respuesta (o refractariedad) a la administración de oxígeno suplementario al 100% mediante mascarilla de no reinhalación?',
        options: [
          { id: 'A', text: 'Desbalance ventilación-perfusión con zonas de bajo V/Q' },
          { id: 'B', text: 'Efecto Shunt o cortocircuito de derecha a izquierda verdadero' },
          { id: 'C', text: 'Hipoventilación alveolar por intoxicación por benzodiacepinas' },
          { id: 'D', text: 'Disminución de la presión barométrica en grandes alturas' },
          { id: 'E', text: 'Limitación de la difusión en ejercicio' },
        ],
        correcta: 'B',
        explicacion: 'El efecto Shunt intrapulmonar verdadero se produce cuando la sangre desoxigenada perfunde alvéolos completamente colapsados o inundados de líquido o pus (como ocurre en el SDRA grave, edema pulmonar masivo o atelectasia lobar total). Como el gas inspirado no entra en contacto con la sangre capilar de esas unidades no ventiladas, el aporte de O2 al 100% no logra oxigenar dicha fracción sanguínea, resultando en hipoxemia refractaria al oxígeno.',
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Una mujer de 64 años ingresa al servicio de urgencias por disnea progresiva, tos y fiebre. Al examen: FR 28 rpm, SatO2 86% respirando aire ambiental. Sus gases arteriales a nivel del mar muestran: pH 7.45, PaO2 52 mmHg, PaCO2 32 mmHg y HCO3 22 mEq/L. Con una presión barométrica de 760 mmHg y vapor de agua de 47 mmHg, el cálculo del Gradiente Alvéolo-Arterial de Oxígeno resulta en 58 mmHg (marcadamente elevado). ¿Qué conclusión diagnóstica fisiopatológica se deriva de este resultado?',
        options: [
          { id: 'A', text: 'Hipoxemia por hipoventilación alveolar pura secundaria a debilidad de musculatura diafragmática' },
          { id: 'B', text: 'Hipoxemia dependiente de alteración del parénquima pulmonar o del lecho vascular (desbalance V/Q o shunt)' },
          { id: 'C', text: 'Insuficiencia respiratoria crónica compensada con integridad del alvéolo' },
          { id: 'D', text: 'Efecto secundario normal esperado para la edad de la paciente' },
          { id: 'E', text: 'Hipoxemia explicable exclusivamente por una disminución de la fracción inspirada de oxígeno ambiental' },
        ],
        correcta: 'B',
        explicacion: 'La paciente presenta una IRA Tipo 1 (PaO2 52 mmHg con PaCO2 32 mmHg). La ecuación del gas alveolar arroja PAO2 = 150 - (32 / 0.8) = 110 mmHg. Al restar la PaO2 arterial (110 - 52), el gradiente alvéolo-arterial es de 58 mmHg (valor normal para su edad < 20 mmHg). Un gradiente A-a marcadamente elevado descarta categóricamente una causa extrapulmonar (como hipoventilación o altitud) y confirma la existencia de un daño estructural intrínseco del parénquima pulmonar (como neumonía comunitaria) o de la microvasculatura pulmonar (TEP).',
        recTag: 'EUNACOM Diciembre 2020 · Reconstrucción oficial',
      },
      {
        stem: 'Un paciente de 68 años con antecedente de EPOC grave ingresa a urgencias por disnea de reposo, tos con expectoración purulenta y compromiso cuantitativo de conciencia fluctuante con asterixis. Al examen físico: somnoliento, diaforético, FR 32 rpm con respiración con labios fruncidos y uso de esternocleidomastoideos. Gases arteriales con mascarilla Venturi al 28%: pH 7.27, PaO2 56 mmHg, PaCO2 66 mmHg, HCO3 30 mEq/L. ¿Cuál es el soporte ventilatorio de primera línea con mayor nivel de evidencia para evitar la intubación orotraqueal y disminuir la mortalidad?',
        options: [
          { id: 'A', text: 'Aumento inmediato de la FiO2 al 100% mediante mascarilla con reservorio' },
          { id: 'B', text: 'Ventilación Mecánica No Invasiva con presión positiva binivelada (VMNI BiPAP)' },
          { id: 'C', text: 'Intubación orotraqueal y conexión directa a ventilador mecánico invasivo' },
          { id: 'D', text: 'Infusión endovenosa continua de aminofilina a dosis de carga' },
          { id: 'E', text: 'Administración de bicarbonato de sodio 2/3 molar endovenoso para corregir el pH' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una exacerbación aguda de EPOC complicada con acidosis respiratoria hipercápnica descompensada (pH 7.27 y PaCO2 66 mmHg). En este escenario, la Ventilación Mecánica No Invasiva (VMNI en modalidad BiPAP) es la terapia de soporte ventilatorio de primera línea con recomendación grado 1A: disminuye el trabajo respiratorio, favorece el lavado de CO2, previene la intubación endotraqueal en más del 60% de los pacientes y reduce drásticamente la mortalidad hospitalaria. La intubación orotraqueal se reserva si la VMNI fracasa, si el pH es < 7.20-7.25 refractario o si hay coma profundo.',
        recTag: 'EUNACOM Julio 2023 · Reconstrucción oficial',
      },
    ],
  },
  {
    id: 'resp-22',
    classId: 'resp-22',
    tier: 2,
    blockNum: 5,
    blockName: 'Cuidados Críticos, Ventilación y Medicina del Sueño',
    topicLabel: '5.2',
    title: 'Síndrome de Distrés Respiratorio Agudo (SDRA): Criterios de Berlín',
    perfilCode: '1.05.1.014',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Alta · Criterios diagnósticos de Berlín y principios de ventilación protectora',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico de SDRA (Berlín) y Ventilación Protectora',
    diagram: flow('Algoritmo de Manejo de SDRA (Consenso de Berlín)', [
      { t: 'Paciente Crítico con Hipoxemia Aguda tras Factor Desencadenante (Sepsis, Neumonía, Politrauma)', s: 'Inicio dentro de los 7 días tras el insulto clínico conocido' },
      { k: 'split', q: 'Cumplimiento de Criterios Diagnósticos de Berlín (4 Pilares)', s: '1. Tiempo ≤ 1 sem · 2. Opacidades bilaterales en Rx/TAC · 3. Origen no cardiogénico · 4. PaFiO2 ≤ 300 con PEEP ≥ 5', ll: 'cumple Berlín (SDRA)', rl: 'causa cardiogénica / sobrecarga',
        left: { t: 'Estratificación por PaFiO2 (con PEEP ≥ 5 cmH2O)', s: 'Leve (PaFi 200-300) · Moderado (PaFi 100-200) · Severo (PaFi < 100)', type: 'warn' },
        right: { t: 'Tratar Edema Cardiogénico', s: 'Diuréticos de asa (Furosemida) + Vasodilatadores (Nitroglicerina) + VMNI CPAP', type: 'acc' },
        ll: 'SDRA confirmado', rl: 'edema hidrostático' },
      { t: 'Ventilación Mecánica Protectora Obligatoria', s: 'Volumen corriente bajo (6 mL/kg peso ideal) + Presión Plateau ≤ 30 cmH2O · En SDRA severo (PaFi < 150): Prono precoz ≥ 16 h/día', type: 'dec', al: 'ventilación protectora', from: 'left' },
    ]),
    contexto: 'El SDRA es la forma más grave de lesión pulmonar inflamatoria aguda con permeabilidad alveolar alterada. El EUNACOM exige el dominio exhaustivo de la Definición de Berlín (tiempo, imágenes bilaterales, ausencia de causa cardiogénica y estratificación de la relación PaFiO2 con PEEP ≥ 5) y los pilares de la ventilación protectora que salvan vidas (volumen tidal bajo y posición prono).',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Causas Desencadenantes',
        paragraphs: [
          'El SDRA es una respuesta inflamatoria estéril o infecciosa masiva del parénquima pulmonar caracterizada por <strong>daño alveolar difuso (DAD)</strong> con rotura de la barrera alvéolo-capilar, aumento extremo de la permeabilidad y extravasación de líquido rico en proteínas al espacio alveolar.',
          '<strong>Causas principales:</strong><br>' +
          '• <em>Causas pulmonares directas:</em> Neumonía grave (bacteriana o viral), aspiración masiva de contenido gástrico, contusión pulmonar bilateral o inhalación de humo.<br>' +
          '• <em>Causas extrapulmonares indirectas:</em> <strong>Sepsis y shock séptico</strong> (la causa más común en UTI), politraumatismo severo con transfusiones masivas (TRALI), pancreatitis aguda necrotizante y grandes quemaduras.',
        ],
      },
      {
        subhead: '2. Criterios Diagnósticos de Berlín (4 Pilares)',
        paragraphs: [
          'Para certificar SDRA se deben cumplir <strong>simultáneamente los 4 criterios de la Definición de Berlín</strong>:<br>' +
          '1. <strong>Temporalidad:</strong> Comienzo agudo dentro de <strong>1 semana (7 días)</strong> del insulto clínico conocido o empeoramiento de síntomas respiratorios.<br>' +
          '2. <strong>Radiología de tórax o TAC:</strong> <strong>Opacidades bilaterales</strong> no explicadas completamente por derrames, atelectasias lobares o nódulos pulmonares.<br>' +
          '3. <strong>Origen del edema:</strong> Insuficiencia respiratoria <strong>NO explicada completamente por falla cardíaca o sobrecarga de fluidos</strong>. Requiere ecocardiograma u otra evaluación objetiva para descartar edema hidrostático.<br>' +
          '4. <strong>Oxigenación (medida con PEEP o CPAP ≥ 5 cmH₂O):</strong><br>' +
          '- <strong>Leve:</strong> 200 &lt; PaFiO₂ ≤ 300 mmHg.<br>' +
          '- <strong>Moderado:</strong> 100 &lt; PaFiO₂ ≤ 200 mmHg.<br>' +
          '- <strong>Severo:</strong> <strong>PaFiO₂ ≤ 100 mmHg</strong> (mortalidad cercana al 45%).',
        ],
      },
      {
        subhead: '3. Principios de Ventilación Protectora que Reducen Mortalidad',
        paragraphs: [
          '• <strong>Volumen Corriente (Tidal) Bajo:</strong> <strong>6 mL/kg de Peso Corporal Predicho (Ideal)</strong> (no del peso real), para evitar el volutrauma y barotrauma (estudio ARDS Network).<br>' +
          '• <strong>Límite de Presión Meseta (Plateau):</strong> Mantener estrictamente <strong>Pplateau ≤ 30 cmH₂O</strong>.<br>' +
          '• <strong>Posición Prono Precoz:</strong> En SDRA moderado a severo con <strong>PaFiO₂ &lt; 150 mmHg</strong>, la ventilación en <strong>decúbito prono durante al menos 16 horas consecutivas al día</strong> demostró una reducción drástica de la mortalidad (estudio PROSEVA).<br>' +
          '• Bloqueo neuromuscular precoz con cisatracur en las primeras 48 horas de SDRA severo para optimizar la sincronía ventilatoria.',
        ],
      },
    ],
    table: {
      title: 'Clasificación de Berlín del Síndrome de Distrés Respiratorio Agudo (SDRA)',
      headers: ['Categoría SDRA', 'Relación PaFiO2 (con PEEP ≥ 5)', 'Mortalidad Estimada', 'Intervención de Impacto Comprobado'],
      rows: [
        ['Leve', '200 < PaFiO2 ≤ 300 mmHg', '27%', 'Ventilación protectora (Vt 6 mL/kg ideal)'],
        ['Moderado', '100 < PaFiO2 ≤ 200 mmHg', '32%', 'PEEP optimizado + Evitar balance hídrico positivo'],
        ['Severo', 'PaFiO2 ≤ 100 mmHg', '45%', 'Posición Prono precoz (≥ 16 h/d) + Bloqueo neuromuscular'],
      ],
    },
    vignette: 'Hombre de 44 años con pancreatitis aguda grave necrotizante de 3 días de evolución presenta disnea extrema, taquipnea de 36 rpm y cianosis. La radiografía de tórax muestra extensos infiltrados alveolares algodonosos bilaterales difusos. Con FiO2 al 60% y PEEP de 10 cmH2O, los gases arteriales muestran PaO2 78 mmHg (PaFiO2 = 130). El ecocardiograma revela función sistólica biventricular normal y sin valvulopatías.',
    explicacion: 'El paciente cumple los 4 criterios de Berlín para Síndrome de Distrés Respiratorio Agudo (SDRA): tiempo < 7 días de insulto agudo (pancreatitis), infiltrados bilaterales en Rx de tórax, ecocardiograma normal que descarta origen cardiogénico y PaFiO2 de 130 con PEEP ≥ 5, lo que clasifica el cuadro como SDRA Moderado. La conducta de soporte vital es la ventilación mecánica protectora con volumen corriente de 6 mL/kg de peso predicho y límite de presión plateau ≤ 30 cmH2O.',
    keyPoints: [
      'Criterios de Berlín: inicio en ≤ 7 días, opacidades bilaterales, edema no cardiogénico y PaFiO2 con PEEP ≥ 5.',
      'Estratificación de Berlín: Leve (PaFi 200-300), Moderada (PaFi 100-200) y Severa (PaFi ≤ 100 mmHg).',
      'La ventilación protectora exige volumen corriente bajo de 6 mL/kg según peso corporal IDEAL (no real).',
      'La presión meseta o plateau debe mantenerse siempre en ≤ 30 cmH2O para prevenir barotrauma.',
      'En SDRA severo con PaFiO2 < 150 mmHg, la posición decúbito prono por ≥ 16 h/día reduce significativamente la mortalidad.',
    ],
    questions: [
      {
        stem: 'Un paciente de 50 años ingresa a la UCI con shock séptico secundario a peritonitis apendicular. Al tercer día de ventilación mecánica invasiva presenta empeoramiento del intercambio gaseoso. La radiografía de tórax revela opacidades alveolo-intersticiales difusas bilaterales que no estaban presentes al ingreso. Con ventilador en modalidad asistida, FiO2 70% y PEEP 8 cmH2O, sus gases arteriales reportan una PaO2 de 63 mmHg (PaFiO2 = 90). El ecocardiograma descarta insuficiencia cardíaca. ¿Cuál es el diagnóstico según los criterios de Berlín y cuál es la estrategia ventilatoria que ha demostrado reducir la mortalidad?',
        options: [
          { id: 'A', text: 'SDRA leve; ventilar con volúmenes corrientes de 10 a 12 mL/kg peso real' },
          { id: 'B', text: 'SDRA severo; ventilación protectora con volumen corriente de 6 mL/kg peso predicho y posición en decúbito prono precoz' },
          { id: 'C', text: 'Edema pulmonar cardiogénico; suspender sedación e indicar digoxina' },
          { id: 'D', text: 'Atelectasia masiva izquierda; realizar broncoscopía rígida desobstructiva' },
          { id: 'E', text: 'SDRA moderado; mantener al paciente en posición supina estricta y volumen corriente de 8 mL/kg' },
        ],
        correcta: 'B',
        explicacion: 'El paciente cumple los criterios de Berlín para SDRA: factor de riesgo conocido (sepsis abdominal), tiempo < 7 días, opacidades bilaterales difusas y exclusión de edema cardiogénico. Al tener una relación PaFiO2 de 90 mmHg (con PEEP ≥ 5), se clasifica como SDRA Severo (PaFi ≤ 100). En esta categoría grave, la estrategia con evidencia de máxima categoría para reducir la mortalidad es la ventilación protectora (volumen corriente bajo de 6 mL/kg de peso predicho) y la colocación precoz en decúbito prono durante al menos 16 horas diarias (ensayo PROSEVA).',
        recTag: 'Banco de Preguntas Oficial · Síndrome de Distrés Respiratorio Agudo',
      },
      {
        stem: '¿Cuál es el parámetro fisiológico de seguridad en el ventilador mecánico que debe monitorizarse y mantenerse rigurosamente por debajo de 30 cmH2O para prevenir el barotrauma alveolar en un paciente con SDRA?',
        options: [
          { id: 'A', text: 'Presión inspiratoria peak (Ppeak)' },
          { id: 'B', text: 'Presión meseta o plateau (Pplateau)' },
          { id: 'C', text: 'Nivel de presión positiva al final de la espiración (PEEP)' },
          { id: 'D', text: 'Presión de oclusión de la arteria pulmonar (POAP)' },
          { id: 'E', text: 'Presión venosa central (PVC)' },
        ],
        correcta: 'B',
        explicacion: 'La Presión Meseta o Plateau (medida realizando una pausa inspiratoria al final de la insuflación) refleja la presión estática que experimentan directamente los alvéolos. La evidencia internacional de ventilación protectora (ARDS Network) ha demostrado que mantener la Presión Plateau en un límite ≤ 30 cmH2O previene la sobredistensión alveolar cíclica y el barotrauma, siendo el parámetro de seguridad alveolar por excelencia. La presión peak (A) incluye la resistencia de la vía aérea y puede elevarse sin necesariamente sobredistender el alvéolo.',
        recTag: 'Banco de Preguntas Oficial · Síndrome de Distrés Respiratorio Agudo',
      },
    ],
  },
  {
    id: 'resp-23',
    classId: 'resp-23',
    tier: 2,
    blockNum: 5,
    blockName: 'Cuidados Críticos, Ventilación y Medicina del Sueño',
    topicLabel: '5.3',
    title: 'Síndrome de Apnea-Hipoapnea Obstructiva del Sueño (SAHOS)',
    perfilCode: '1.05.1.033',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Alta · Diagnóstico por Polisomnografía e indicación de CPAP nocturno',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico en Síndrome de Apnea Obstructiva del Sueño',
    diagram: flow('Algoritmo de Manejo del SAHOS', [
      { t: 'Sospecha Clínica en APS: Ronquidos intensos + Pausas respiratorias presenciadas + Somnolencia diurna excesiva', s: 'Escala de Epworth elevada (> 10 puntos) en paciente con sobrepeso/obesidad y cuello ancho' },
      { k: 'split', q: 'Examen Diagnóstico de Confirmación: Polisomnografía Nocturna', s: 'Determina el Índice de Apnea-Hipoapnea (IAH = eventos por hora de sueño)', ll: 'IAH < 15 sin comorbilidad', rl: 'IAH ≥ 15 (Moderado/Severo) o sintomático',
        left: { t: 'Medidas Generales y de Estilo de Vida', s: 'Baja de peso (reduce IAH hasta un 50%) + Evitar alcohol y sedantes nocturnos + Terapia postural', type: 'acc' },
        right: { t: 'Tratamiento Médico de 1ª Línea: CPAP Nocturno', s: 'Presión positiva continua en la vía aérea · Férula neumática que elimina colapso faríngeo', type: 'warn' },
        ll: 'SAHOS leve (IAH 5-14)', rl: 'SAHOS moderado-severo (IAH ≥ 15)' },
      { t: 'Impacto Comprobado del Uso de CPAP', s: 'Normaliza la somnolencia diurna, previene accidentes de tránsito y reduce cifras de hipertensión arterial refractaria', type: 'dec', al: 'beneficio cardiovascular', from: 'right' },
    ]),
    contexto: 'El SAHOS es una patología de altísima prevalencia y gran impacto cardiovascular y laboral. El EUNACOM evalúa el reconocimiento de la tríada cardinal (ronquidos, pausas observadas y somnolencia diurna con escala Epworth), el estándar diagnóstico de la Polisomnografía (IAH) y la indicación indiscutida de CPAP continuo nasal en casos moderados a severos.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Factores de Riesgo',
        paragraphs: [
          'El SAHOS se caracteriza por episodios repetidos de <strong>obstrucción total (apnea ≥ 10 s) o parcial (hipoapnea con desaturación ≥ 3-4%) de la vía aérea superior durante el sueño</strong>, causados por el colapso de los tejidos blandos de la faringe.',
          'Cada evento obstructivo produce hipoxemia intermitente, hipercapnia y microdespertares corticales transitorios que fragmentan la arquitectura del sueño y generan una descarga simpática masiva neurovegetativa.',
          '<strong>Factores de riesgo mayores:</strong> <strong>Obesidad (IMC &gt; 30 kg/m², el principal factor modificable)</strong>, sexo masculino, edad mediana, perímetro de cuello aumentado (hombres &gt; 43 cm, mujeres &gt; 40 cm), retrognatia y consumo nocturno de alcohol o benzodiacepinas.',
        ],
      },
      {
        subhead: '2. Manifestaciones Clínicas y Sospecha',
        paragraphs: [
          '• <strong>Síntomas nocturnos:</strong> <strong>Ronquidos fuertes y entrecortados</strong>, <strong>apneas presenciadas por la pareja</strong> (el paciente deja de respirar y luego despierta con un resoplido o jadeo), nicturia, sudoración y sueño inquieto.<br>' +
          '• <strong>Síntomas diurnos:</strong> <strong>Hipersomnolencia diurna excesiva</strong> (quedarse dormido involuntariamente leyendo, viendo televisión o conduciendo), fatiga matinal, cefalea frontal al despertar, irritabilidad y pérdida de memoria.<br>' +
          '• <strong>Escala de Somnolencia de Epworth:</strong> Cuestionario validado; un puntaje <strong>&gt; 10 puntos</strong> confirma somnolencia anormal e indica estudio formal.',
        ],
      },
      {
        subhead: '3. Diagnóstico por Polisomnografía y Criterios de CPAP',
        paragraphs: [
          '<strong>Estándar de Oro Diagnóstico:</strong> <strong>Polisomnografía Nocturna supervisada en laboratorio (o Poligrafía respiratoria ambulatoria)</strong>. Evalúa el flujo aéreo, esfuerzo toracoabdominal, SatO₂, electrocardiograma y electroencefalograma.',
          '<strong>Índice de Apnea-Hipoapnea (IAH):</strong> Número de apneas e hipoapneas por hora de sueño:<br>' +
          '- <strong>Leve:</strong> IAH entre 5 y 14 eventos/hora.<br>' +
          '- <strong>Moderado:</strong> IAH entre 15 y 29 eventos/hora.<br>' +
          '- <strong>Severo:</strong> <strong>IAH ≥ 30 eventos/hora</strong>.',
          '<strong>Tratamiento de elección:</strong> <strong>CPAP (Continuous Positive Airway Pressure) nasal durante el sueño</strong>. Actúa como una "férula neumática" que mantiene abierta la faringe mediante presión positiva. Está formalmente indicado en: 1) Todo paciente con <strong>IAH ≥ 15</strong>; 2) Pacientes con IAH entre 5 y 14 si presentan hipersomnolencia diurna marcada, comorbilidad cardiovascular (HTA refractaria) o profesiones de riesgo (choferes). Se acompaña siempre de baja de peso y suspensión de sedantes nocturnos.',
        ],
      },
    ],
    table: {
      title: 'Clasificación de Severidad y Enfoque Terapéutico en SAHOS',
      headers: ['Severidad del SAHOS', 'Índice de Apnea-Hipoapnea (IAH)', 'Manifestación Típica', 'Conducta Terapéutica Recomendada'],
      rows: [
        ['Normal', '< 5 eventos / hora', 'Sin patología respiratoria nocturna', 'Medidas higiénicas generales de sueño'],
        ['Leve', '5 a 14 eventos / hora', 'Ronquido leve, somnolencia ocasional', 'Baja de peso, evitar alcohol/BZD, dispositivo avance mandibular'],
        ['Moderado', '15 a 29 eventos / hora', 'Somnolencia diurna habitual, microdespertares', 'CPAP nocturno continuo (tratamiento de 1.ª línea)'],
        ['Severo', '≥ 30 eventos / hora', 'Hipersomnia severa, riesgo vital vascular', 'CPAP nocturno continuo obligatorio + Control HTA'],
      ],
    },
    vignette: 'Hombre de 52 años, chofer de autobús interurbano, con IMC 34 kg/m², consulta obligado por su esposa debido a ronquidos muy intensos de años de evolución y episodios donde "deja de respirar por medio minuto y luego pega un salto". El paciente refiere que se queda dormido en los semáforos y tiene cefalea al levantarse. Escala de Epworth de 16/24.',
    explicacion: 'Sospecha de alta probabilidad de Síndrome de Apnea-Hipoapnea Obstructiva del Sueño (SAHOS) severo en paciente con obesidad, profesión de alto riesgo de accidentes, pausas presenciadas y somnolencia diurna patológica (Epworth > 10). La conducta inmediata es solicitar una Polisomnografía nocturna para certificar el diagnóstico e indicar tratamiento de primera línea con CPAP nasal continuo nocturno.',
    keyPoints: [
      'Tríada cardinal del SAHOS: ronquidos intensos + apneas presenciadas + somnolencia diurna excesiva.',
      'El principal factor de riesgo modificable para SAHOS es la obesidad (IMC > 30 kg/m²).',
      'El examen confirmatorio de referencia indiscutido es la Polisomnografía nocturna.',
      'El punto de corte de IAH para clasificar SAHOS moderado a severo e indicar CPAP es IAH ≥ 15 eventos/hora.',
      'El tratamiento médico de primera línea es el CPAP nasal nocturno; los sedantes y el alcohol están contraindicados.',
    ],
    questions: [
      {
        stem: 'Un hombre de 48 años, hipertenso en tratamiento con enalapril y amlodipino, con IMC de 33 kg/m², acude a la consulta médica traído por su cónyuge. Ella relata que el paciente ronca sonoramente todas las noches y que en reiteradas ocasiones observa que deja de respirar por varios segundos, finalizando el episodio con un ronquido explosivo. El paciente refiere cansancio crónico diurno y somnolencia mientras maneja su automóvil. Su escala de Epworth es de 15 puntos. ¿Cuál es el examen diagnóstico de elección para confirmar la enfermedad?',
        options: [
          { id: 'A', text: 'Electroencefalograma estándar de vigilia' },
          { id: 'B', text: 'Polisomnografía nocturna' },
          { id: 'C', text: 'Holter de presión arterial de 24 horas' },
          { id: 'D', text: 'Espirometría con curva de flujo-volumen' },
          { id: 'E', text: 'Tomografía computarizada de cavidades paranasales' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro clínico describe la presentación prototípica de un Síndrome de Apnea-Hipoapnea Obstructiva del Sueño (SAHOS): paciente con sobrepeso u obesidad, ronquidos intensos, apneas presenciadas por terceros y marcada hipersomnolencia diurna con puntaje de Epworth anormal (> 10). El examen estándar de referencia para confirmar de manera objetiva el diagnóstico, cuantificar el Índice de Apnea-Hipoapnea (IAH) y graduar la desaturación de oxígeno es la Polisomnografía nocturna.',
        recTag: 'Banco de Preguntas Oficial · Medicina del Sueño y SAHOS',
      },
      {
        stem: '¿Cuál es el tratamiento de primera línea con mayor nivel de evidencia científica para un paciente diagnosticado mediante polisomnografía de un SAHOS severo con un IAH de 38 eventos por hora?',
        options: [
          { id: 'A', text: 'Fármacos estimulantes diurnos como modafinilo en monoterapia' },
          { id: 'B', text: 'Aplicación nocturna de Presión Positiva Continua en la Vía Aérea (CPAP)' },
          { id: 'C', text: 'Uvulopalatofaringoplastía quirúrgica de urgencia' },
          { id: 'D', text: 'Oxigenoterapia nocturna exclusiva por cánula nasal a 2 L/min' },
          { id: 'E', text: 'Prescripción de clonazepam nocturno para regularizar el ciclo del sueño' },
        ],
        correcta: 'B',
        explicacion: 'En el SAHOS moderado a severo (IAH ≥ 15, y particularmente con IAH ≥ 30), el tratamiento de primera línea no quirúrgico de máxima eficacia es el CPAP nasal nocturno continuo. El CPAP actúa generando una presión positiva hidroneumática constante que mantiene permeable la vía aérea faríngea, aboliendo los ronquidos, las apneas y los microdespertares, normalizando la presión arterial y eliminando la somnolencia diurna. Las benzodiacepinas (E) agravan el colapso.',
        recTag: 'Banco de Preguntas Oficial · Medicina del Sueño y SAHOS',
      },
    ],
  },
  {
    id: 'resp-24',
    classId: 'resp-24',
    tier: 2,
    blockNum: 5,
    blockName: 'Cuidados Críticos, Ventilación y Medicina del Sueño',
    topicLabel: '5.4',
    title: 'Intoxicación por Monóxido de Carbono e Inhalación de Humo',
    perfilCode: '1.05.1.024, 1.05.2.010',
    dx: 'Específico', tx: 'Completo', seg: 'Inicial',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Muy Alta · Oximetría de pulso normal engañosa e indicación de O2 normobárico vs hiperbárico',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico y Tratamiento en Intoxicación por Monóxido de Carbono (CO)',
    diagram: flow('Algoritmo de Intoxicación por CO e Inhalación de Humo', [
      { t: 'Sospecha: Paciente rescatado de incendio, calefactor defectuoso o brasero en espacio cerrado', s: 'Cefalea holocraneana punzante, náuseas, mareos, compromiso de conciencia y síncope' },
      { k: 'split', q: '¿Qué Muestra la Oximetría de Pulso (SatO2 en dedo)?', s: 'La saturometría habitual NO diferencia oxihemoglobina de carboxihemoglobina (marcará 99-100% FALSA)', ll: 'Saturometría Falsamente Normal (98-100%)', rl: 'Medición de Carboxihemoglobina (COHb)',
        left: { t: 'Trampa EUNACOM: NUNCA Confiarse', s: 'Solicitar de inmediato Gases Arteriales con Co-oximetría para medir % COHb directa', type: 'warn' },
        right: { t: 'Diagnóstico de Certeza de CO', s: 'COHb > 3-5% en no fumadores o > 10% en fumadores · Si > 25%: Intoxicación severa', type: 'acc' },
        ll: 'oxímetro normal', rl: 'co-oximetría solicitada' },
      { t: 'Tratamiento Específico Inmediato', s: 'O2 al 100% por mascarilla con reservorio (baja vida media de CO de 320 min a 80 min) · Oxígeno Hiperbárico si coma, embarazo o COHb > 25%', type: 'dec', al: 'oxígeno hiperbárico', from: 'left' },
    ]),
    contexto: 'La intoxicación por monóxido de carbono (CO) es una de las intoxicaciones letales más frecuentes durante el invierno en Chile (braseros, calefones defectuosos). El EUNACOM pone trampas constantes sobre la oximetría de pulso (que marca falsamente 100% y no detecta la hipoxia celular), el examen de confirmación (co-oximetría para COHb) y las indicaciones de cámara hiperbárica.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Toxicidad Celular del CO',
        paragraphs: [
          'El monóxido de carbono (CO) es un gas inodoro, incoloro, insípido y no irritante producido por la combustión incompleta de hidrocarburos. Su toxicidad se debe a dos mecanismos letales:<br>' +
          '1. <strong>Afinidad extrema por la hemoglobina:</strong> El CO se une a la hemoglobina con una <strong>afinidad 200 a 250 veces mayor que el oxígeno</strong>, formando <strong>Carboxihemoglobina (COHb)</strong>. Esto anula la capacidad de transporte de O₂ y desplaza la curva de disociación hacia la izquierda (efecto Haldane negativo), impidiendo la entrega de O₂ a los tejidos periféricos.<br>' +
          '2. <strong>Inhibición de la respiración celular:</strong> El CO se une al complejo IV de la cadena transportadora de electrones mitocondrial (<strong>citocromo c oxidasa</strong>), bloqueando la fosforilación oxidativa aeróbica y provocando acidosis láctica celular severa.',
        ],
      },
      {
        subhead: '2. Diagnóstico y la Gran Trampa de la Oximetría de Pulso',
        paragraphs: [
          '<strong>Trampa clásica de examen EUNACOM:</strong> La oximetría de pulso estándar de dos longitudes de onda (saturómetro de dedo) <strong>no puede distinguir la oxihemoglobina de la carboxihemoglobina</strong>, por lo que <strong>marcará una saturación falsamente normal (98–100%)</strong> incluso en pacientes con niveles letales de carboxihemoglobina.',
          '<strong>Clínica:</strong> Cefalea holocraneana pulsátil (el síntoma más precoz), náuseas, vómitos, mareos, debilidad muscular y, en casos graves, ataxia, síncope, convulsiones, coma y arritmias. La piel de color "rojo cereza" es un signo clásico pero muy infrecuente en la práctica (&lt; 5%) y tardío.',
          '<strong>Confirmación:</strong> Medición directa de <strong>Carboxihemoglobina (COHb) en sangre mediante Co-oximetría</strong> en gases arteriales o venosos. Niveles diagnósticos: <strong>COHb &gt; 3–5% en personas no fumadoras</strong> o <strong>&gt; 10% en fumadores habituales</strong>.',
        ],
      },
      {
        subhead: '3. Tratamiento con Oxígeno Normobárico vs Cámara Hiperbárica',
        paragraphs: [
          '<strong>Tratamiento inmediato universal:</strong> <strong>Oxígeno al 100% mediante mascarilla con bolsa de no reinhalación</strong> (reservorio) a 15 L/min en forma ininterrumpida por al menos 6 horas. Respirando aire ambiental la vida media de la COHb es de 320 minutos (5.5 horas); con O₂ al 100% normobárico la vida media se reduce drásticamente a <strong>80 minutos</strong>.',
          '<strong>Indicaciones estrictas de Oxígeno Hiperbárico (Cámara Hiperbárica):</strong><br>' +
          '1. Nivel de <strong>COHb &gt; 25%</strong> en cualquier paciente.<br>' +
          '2. <strong>Mujeres embarazadas con COHb &gt; 15%</strong> (la hemoglobina fetal concentra más CO que la materna).<br>' +
          '3. <strong>Pérdida de conciencia o síncope</strong>, coma o convulsiones.<br>' +
          '4. Compromiso neurológico persistente o déficit focal.<br>' +
          '5. Isquemia miocárdica aguda en ECG (angina, elevación de troponinas) o acidosis metabólica severa refractaria (pH &lt; 7.15).',
        ],
      },
    ],
    table: {
      title: 'Cinética de Eliminación de la Carboxihemoglobina y Tiempos de Vida Media',
      headers: ['Modalidad de Oxigenoterapia', 'Presión y Fracción de O2', 'Vida Media de la COHb', 'Lugar de Administración'],
      rows: [
        ['Aire Ambiental', '1 ATA (FiO2 21%)', '320 minutos (~ 5.5 horas)', 'Habitación estándar'],
        ['O2 al 100% Normobárico', '1 ATA (FiO2 100% Mascarilla Reservorio)', '80 minutos (~ 1.3 horas)', 'Servicio de Urgencias / Reanimación'],
        ['Oxígeno Hiperbárico (OHB)', '2.5 a 3 ATA en Cámara Hiperbárica', '20 a 25 minutos', 'Centro de Medicina Hiperbárica especializado'],
      ],
    },
    vignette: 'Mujer de 26 años embarazada de 24 semanas es rescatada de un departamento con un calefón defectuoso encendido en el baño. Ingresa quejándose de intensa cefalea pulsátil, mareos y náuseas. Al examen: PA 115/70 mmHg, FC 98 lpm, examen neurológico sin focalidad. El saturometría de pulso marca SatO2 99% ambiental. La co-oximetría en sangre arterial revela un nivel de Carboxihemoglobina (COHb) del 18%.',
    explicacion: 'Intoxicación aguda por monóxido de carbono. La oximetría de pulso normal (99%) es una trampa que no descarta la intoxicación, la cual se confirma por el nivel de COHb de 18%. Aunque el nivel en un adulto no embarazado (< 25%) se manejaría con O2 al 100% normobárico, la condición de EMBARAZO con COHb > 15% es una indicación formal y categórica de Oxigenoterapia Hiperbárica (OHB), debido a que la hemoglobina fetal capta ávidamente el CO provocando hipoxia tisular fetal severa y muerte intrauterina.',
    keyPoints: [
      'La oximetría de pulso estándar NO sirve para diagnosticar intoxicación por CO; marca falsamente 100%.',
      'El examen confirmatorio es la medición de Carboxihemoglobina (COHb) por Co-oximetría en gases sanguíneos.',
      'El tratamiento inmediato de primera línea es Oxígeno al 100% con mascarilla con reservorio por al menos 6 horas.',
      'El O2 al 100% normobárico reduce la vida media de la COHb de 320 minutos a solo 80 minutos.',
      'Indicaciones de Oxígeno Hiperbárico: COHb > 25%, embarazadas con COHb > 15%, síncope/coma o isquemia miocárdica.',
    ],
    questions: [
      {
        stem: 'Una familia de 3 personas es trasladada al servicio de urgencias en época invernal tras ser encontrados en su vivienda con un brasero encendido en un dormitorio cerrado. Todos refieren cefalea holocraneana intensa, náuseas y mareos. El médico de turno observa que el monitor muestra saturaciones de oxígeno de 99% y 100% en todos ellos mediante oxímetro de pulso de dedo. ¿Cuál es la conducta diagnóstica y terapéutica correcta?',
        options: [
          { id: 'A', text: 'Dar de alta a los pacientes por presentar oxigenación arterial normal garantizada por el oxímetro' },
          { id: 'B', text: 'Desestimar el valor del oxímetro de pulso, solicitar co-oximetría para medir carboxihemoglobina e iniciar oxígeno al 100% con mascarilla de no reinhalación' },
          { id: 'C', text: 'Tratar sintomáticamente con paracetamol oral y derivar a domicilio' },
          { id: 'D', text: 'Indicar nebulizaciones con salbutamol por sospecha de broncoespasmo térmico' },
          { id: 'E', text: 'Solicitar tomografía de cerebro para descartar hemorragia subaracnoidea simultánea' },
        ],
        correcta: 'B',
        explicacion: 'Los oxímetros de pulso habituales miden la absorción de luz a solo dos longitudes de onda (660 y 940 nm), incapaces de diferenciar la oxihemoglobina de la carboxihemoglobina, interpretando falsamente el compuesto tóxico como hemoglobina saturada de oxígeno (99-100%). Frente a una sospecha epidemiológica clara de exposición a brasero con cefalea, es un error médico fatal confiar en el saturómetro. Se debe iniciar de inmediato oxígeno al 100% con mascarilla de reservorio y confirmar con co-oximetría.',
        recTag: 'Banco de Preguntas Oficial · Toxicología Respiratoria',
      },
      {
        stem: '¿Cuál de las siguientes condiciones clínicas en un paciente con intoxicación aguda por monóxido de carbono constituye una indicación formal e indiscutida de traslado urgente a una unidad de Oxigenoterapia Hiperbárica (Cámara Hiperbárica)?',
        options: [
          { id: 'A', text: 'Paciente no fumador con nivel de carboxihemoglobina de 8% y cefalea leve' },
          { id: 'B', text: 'Paciente masculino joven con COHb de 12% que responde adecuadamente al oxígeno normobárico' },
          { id: 'C', text: 'Paciente que presentó pérdida transitoria de conciencia (síncope) o compromiso de conciencia durante la exposición' },
          { id: 'D', text: 'Paciente con tos seca irritativa sin acidosis' },
          { id: 'E', text: 'Fumador crónico con carboxihemoglobina de 9% asintomático' },
        ],
        correcta: 'C',
        explicacion: 'Las indicaciones estrictas y de consenso para el uso de Oxigenoterapia Hiperbárica (cámara hiperbárica) en intoxicación por monóxido de carbono son: (1) Antecedente de síncope, pérdida de conciencia, coma o convulsiones; (2) Presencia de signos neurológicos focales persistentes; (3) Nivel de Carboxihemoglobina > 25% (o > 15% en mujeres embarazadas); y (4) Evidencia de isquemia miocárdica aguda en el electrocardiograma o acidosis metabólica severa.',
        recTag: 'Banco de Preguntas Oficial · Toxicología Respiratoria',
      },
    ],
  },
];

module.exports = { bloque5 };
