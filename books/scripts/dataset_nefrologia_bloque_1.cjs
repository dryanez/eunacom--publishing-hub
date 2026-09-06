/**
 * DATASET · Nefrología — Bloque 1: Injuria Renal Aguda (IRA) y Urgencias Nefrológicas
 * EUNACOM 2026 · Colección Oficial · Módulo 1 Medicina Interna
 * Estándar Editorial: Gastro 2-Page / Maqueta 1b con Expansión Dinámica de Tiers
 */

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
  /* ───────────────────────── 🔴 TIER 3 (4 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-01', classId: 'nefro-01', tier: 3,
    blockNum: 1, blockName: 'Injuria Renal Aguda (IRA) y Urgencias Nefrológicas',
    topicLabel: '1.1', title: 'Injuria Renal Aguda (KDIGO) y Diferenciación Prerrenal vs Intrínseca',
    perfilCode: '1.09.2.010, 1.09.2.008, 1.09.4.009, 1.09.4.016', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Sin garantía GES específica para IRA · Garantía de Urgencia Vital (Ley de Urgencias) en falla multiorgánica',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#45) · EUNACOM Diciembre 2019 (Q#82) · EUNACOM Julio 2022 (Q#18)',
    frecuencia: 'Máxima rentabilidad · tema central de urgencias médicas (cálculo de FeNa, FeUrea y sedimento)',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Conducta en Injuria Renal Aguda',
    diagram: flow('Algoritmo Diagnóstico y Terapéutico de la Injuria Renal Aguda (KDIGO)', [
      { t: 'Elevación de Creatinina Sérica o Caída del Débito Urinario', s: 'Criterio KDIGO: ↑ Cr ≥ 0.3 mg/dL en 48 h o ≥ 1.5x basal en 7 días · Diuresis < 0.5 mL/kg/h por > 6 h', type: 'warn' },
      { k: 'split', q: '¿Existe Globo Vesical o Dilatación de Vía Urinaria en Ecografía?',
        ll: 'Ecografía: Hidronefrosis bilateral o vejiga distendida',
        left: { t: 'IRA Postrenal (Obstructiva)', s: 'Instalar Sonda Foley inmediata o Cistostomía · Descompresión urológica de urgencia', type: 'acc' },
        rl: 'Ecografía: Riñones normales sin hidronefrosis',
        right: { t: 'Evaluar Volemia e Índices Urinarios (FeNa / FeUrea)', s: 'Descartada obstrucción · Evaluar perfusión vs parénquima', type: 'dec' },
      },
      { k: 'split', q: '¿FeNa < 1% (o FeUrea < 35% con diuréticos) + Na urinario < 20 mEq/L?',
        ll: 'FeNa < 1% · Relación BUN/Cr > 20 · Cilindros hialinos',
        left: { t: 'IRA Prerrenal (Hipoperfusión)', s: 'Expansión con Cristaloides Isotónicos · Suspender AINEs e IECA/ARA-II · Monitoreo de diuresis', type: 'acc' },
        rl: 'FeNa > 2% · BUN/Cr < 15 · Cilindros granulosos pardos',
        right: { t: 'IRA Intrínseca (Necrosis Tubular Aguda)', s: 'Evitar sobrecarga de volumen · Ajustar fármacos a TFG · Evaluar diálisis si AEIOU', type: 'warn' },
      },
    ]),
    contexto: 'La perfusión glomerular depende del delicado equilibrio hemodinámico entre la vasodilatación de la arteriola aferente (mediada por prostaglandinas) y la vasoconstricción de la arteriola eferente (mediada por angiotensina II). Los AINEs bloquean las prostaglandinas y los IECA/ARA-II bloquean la angiotensina II: administrados juntos en un paciente deshidratado anulan la autorregulación renal y precipitan una caída catastrófica de la filtración glomerular. Reconocer precozmente si el daño es prerrenal o parenquimatoso define si el paciente requiere fluidos de rescate o restricción estricta.',
    contentSections: [
      {
        subhead: '1. Definición y Criterios KDIGO 2026',
        paragraphs: [
          'La <strong>Injuria Renal Aguda (IRA / AKI)</strong> es el deterioro brusco de la función renal (horas a días) que condiciona retención de productos nitrogenados y alteración hidroelectrolítica. Los criterios <strong>KDIGO</strong> exigen al menos uno de los siguientes: (1) aumento de la creatinina sérica en <strong>≥ 0.3 mg/dL en 48 horas</strong>; (2) aumento de creatinina sérica a <strong>≥ 1.5 veces el valor basal</strong> conocido en los últimos 7 días; o (3) <strong>débito urinario < 0.5 mL/kg/hora durante al menos 6 horas consecutivas</strong>.',
          'La estratificación de gravedad comprende tres estadios: <strong>Estadio 1</strong> (Cr 1.5–1.9x basal o aumento ≥ 0.3 mg/dL; diuresis < 0.5 mL/kg/h por 6–12 h); <strong>Estadio 2</strong> (Cr 2.0–2.9x basal; diuresis < 0.5 mL/kg/h por ≥ 12 h); y <strong>Estadio 3</strong> (Cr ≥ 3.0x basal o Cr ≥ 4.0 mg/dL o inicio de terapia de reemplazo renal o anuria por ≥ 12 h).',
        ],
      },
      {
        subhead: '2. Fisiopatología: Mecanismos Hemodinámicos y Autorregulación',
        paragraphs: [
          'El riñón normal mantiene una tasa de filtración glomerular (TFG) constante mediante dos mecanismos autorreguladores: cuando la presión de perfusión cae, la <strong>arteriola aferente se vasodilata</strong> (proceso dependiente de <strong>prostaglandinas</strong> y óxido nítrico) para maximizar la entrada de sangre al ovillo; paralelamente, la <strong>arteriola eferente se vasoconstriñe</strong> por acción de la <strong>angiotensina II</strong> para sostener la presión hidrostática intraglomerular.',
          'Si la presión arterial media cae bajo 65 mmHg o se interfiere farmacológicamente con estos mediadores, la autorregulación fracasa: los <strong>AINEs impiden la vasodilatación aferente</strong>, los <strong>IECA/ARA-II impiden la vasoconstricción eferente</strong> y los diuréticos agravan la hipovolemia. La persistencia de la hipoperfusión celular conduce a isquemia del epitelio tubular proximal y de la porción gruesa del asa de Henle, evolucionando desde una falla prerrenal reversible hacia una <strong>Necrosis Tubular Aguda (NTA)</strong> establecida.',
        ],
      },
      {
        subhead: '3. Enfrentamiento Diagnóstico: Ecografía e Índices Urinarios',
        paragraphs: [
          'El primer paso ineludible en toda elevación aguda de creatinina es <strong>descartar causa postrenal (obstructiva)</strong> mediante ecografía renal y vesical o palpación/cateterismo vesical. La hidronefrosis bilateral o el globo vesical orientan de inmediato a obstrucción.',
          'Descartada la causa urológica, la distinción entre <strong>IRA prerrenal e intrínseca</strong> descansa en la capacidad tubular de reabsorber agua y sodio: un túbulo sano y ávido de sodio (prerrenal) concentra la orina y retiene sodio; un túbulo necrótico (NTA) pierde sodio y genera orina isostenúrica (densidad 1.010, similar al plasma).',
          'El índice de referencia es la <strong>Fracción Excretada de Sodio (FeNa)</strong>: $FeNa = (Na_u \\times Cr_p) / (Na_p \\times Cr_u) \\times 100$. Un <strong>FeNa < 1%</strong> y un <strong>Na urinario < 20 mEq/L</strong> confirman origen prerrenal. En pacientes que han recibido diuréticos de asa (que fuerzan natriuresis e invalidan el FeNa), se calcula la <strong>Fracción Excretada de Urea (FeUrea)</strong>: un <strong>FeUrea < 35%</strong> certifica el origen prerrenal.',
        ],
      },
      {
        subhead: '4. Manejo Terapéutico y Criterios de Rescate Hemodinámico',
        paragraphs: [
          '<strong>Manejo de la IRA Prerrenal:</strong> El pilar es la <strong>expansión de volumen con cristaloides isotónicos (Suero Fisiológico al 0.9% o Ringer Lactato)</strong> a razón de 500 a 1000 mL en bolo inicial, guiado por parámetros de respuesta a volumen (presión arterial media ≥ 65 mmHg, llene capilar, débito urinario ≥ 0.5 mL/kg/h). Se deben <strong>suspender de inmediato todos los nefrotóxicos</strong>: AINEs, IECA/ARA-II, aminoglucósidos y diuréticos.',
          '<strong>Manejo de la NTA Establecida:</strong> Una vez producido el daño tubular parenquimatoso, la infusión agresiva de fluidos NO revertirá la falla renal y provocará <strong>sobrecarga hídrica pulmonar</strong>. El manejo es de soporte: balance neutro de fluidos (aportar pérdidas insensibles ~500 mL + diuresis del día), ajuste riguroso de fármacos a la TFG residual, corrección hidroelectrolítica y monitorización estricta de las indicaciones de diálisis urgente (AEIOU).',
        ],
      },
      {
        subhead: '5. Sedimento Urinario y Complicaciones Críticas',
        paragraphs: [
          'El análisis microscópico del sedimento urinario por el médico entrega información etiológica instantánea: la presencia de <strong>cilindros hialinos</strong> es típica del estado prerrenal; los <strong>cilindros granulosos oscuros ("muddy brown casts") y células epiteliales tubulares libres</strong> son patognomónicos de Necrosis Tubular Aguda; los <strong>cilindros hemáticos y hematíes dismórficos</strong> confirman Glomerulonefritis aguda; y los <strong>cilindros leucocitarios con piuria estéril</strong> apuntan a Nefritis Túbulo-Intersticial Aguda inmunoalérgica.',
        ],
      },
    ],
    table: {
      title: 'Diferenciación Diagnóstica: IRA Prerrenal vs Necrosis Tubular Aguda (NTA)',
      headers: ['Parámetro Diagnóstico', 'IRA Prerrenal (Túbulo Íntegro)', 'NTA Intrínseca (Túbulo Dañado)'],
      rows: [
        ['Fracción Excretada de Sodio (FeNa)', '< 1% (reabsorción ávida de Na)', '> 2% (falla de reabsorción tubular)'],
        ['Fracción Excretada de Urea (FeUrea)', '< 35% (útil si usa diuréticos)', '> 50% (urea no se reabsorbe)'],
        ['Sodio Urinario (Nau)', '< 20 mEq/L', '> 40 mEq/L'],
        ['Relación BUN / Creatinina sérica', '> 20 : 1 (retención de urea)', '< 15 : 1 (patrón paralelo)'],
        ['Osmolaridad Urinaria / Densidad', '> 500 mOsm/kg / Densidad > 1.020', '< 350 mOsm/kg / Isostenuria (1.010)'],
        ['Sedimento Urinario Microscópico', 'Cilindros hialinos acelulares (normal)', 'Cilindros granulosos pardos y células tubulares'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo de Rescate y Metas Terapéuticas en Injuria Renal Aguda',
      headers: ['Fase Clínica', 'Objetivo Fisiológico', 'Intervención de Elección'],
      rows: [
        ['Resucitación Hemodinámica', 'Restaurar PAM ≥ 65 mmHg y perfusión renal', 'Cristaloides isotónicos en bolos de 500 mL; Noradrenalina si hay vasoplejía'],
        ['Protección Glomerular', 'Eliminar agresores de la autorregulación', 'Suspender AINEs, IECA, ARA-II, diuréticos y ajustar antibióticos'],
        ['Monitoreo de Débito', 'Detectar oliguria (< 0.5 mL/kg/h)', 'Sonda Foley con recolector horario en pacientes inestables'],
        ['Prevención de Sobrecarga', 'Evitar edema pulmonar en NTA anúrica', 'Restricción hídrica a pérdidas insensibles (500 mL) + débito diario'],
      ],
    },
    vignette: 'Hombre de 68 años, hipertenso y diabético en tratamiento con Enalapril 20 mg/día e Hidroclorotiazida 25 mg/día. Consulta por cuadro de 4 días de diarrea acuosa profusa y vómitos. Ingresa somnoliento, PA 85/50 mmHg, FC 115 lpm, mucosas secas y llene capilar de 4 segundos. Exámenes: Creatinina 3.4 mg/dL (basal de hace 1 mes: 1.0 mg/dL), BUN 72 mg/dL, Na sérico 138 mEq/L, K sérico 5.6 mEq/L. Sedimento de orina: algunos cilindros hialinos, sin proteinuria ni hematuria. Sodio urinario: 12 mEq/L, Creatinina urinaria: 90 mg/dL.',
    explicacion: 'El paciente presenta una Injuria Renal Aguda KDIGO Estadio 3 de origen prerrenal grave, precipitada por hipovolemia por deshidratación en un paciente que utilizaba un IECA (que impide la vasoconstricción de la arteriola eferente) y un diurético. El FeNa calculado es de 0.52% (claramente < 1%), la relación BUN/Creatinina es de 21:1 y el sodio urinario es de 12 mEq/L (< 20 mEq/L), con sedimento que muestra cilindros hialinos normales. La conducta oficial inmediata es suspender Enalapril e Hidroclorotiazida e iniciar hidratación intravenosa rápida con cristaloides isotónicos (Suero Fisiológico 0.9%). El uso de furosemida en este momento es un error grave que agravaría el shock hipovolémico.',
    keyPoints: [
      'Criterios KDIGO de IRA: ↑ Cr ≥ 0.3 mg/dL en 48 h, o ↑ Cr ≥ 1.5x basal en 7 días, o diuresis < 0.5 mL/kg/h por > 6 h.',
      'FeNa < 1% y Na urinario < 20 mEq/L certifican origen prerrenal; FeNa > 2% y Na urinario > 40 mEq/L indican NTA intrínseca.',
      'Si el paciente utiliza diuréticos de asa, el FeNa se altera por la natriuresis forzada: el índice diagnóstico de elección es la FeUrea (< 35% es prerrenal).',
      'Sedimento urinario: cilindros hialinos = prerrenal; cilindros granulosos oscuros ("muddy brown") = NTA; cilindros hemáticos = glomerulonefritis.',
      'La combinación de AINEs (bloqueo prostaglandinas aferentes) + IECA/ARA-II (bloqueo angiotensina II eferente) anula la autorregulación renal y desencadena IRA en deshidratación.',
      'En IRA prerrenal el tratamiento es la infusión de cristaloides isotónicos; en NTA establecida el exceso de volumen provoca edema pulmonar y congestión venosa renal.',
      'Nunca administrar furosemida para "forzar la diuresis" en una IRA prerrenal hipovolémica: aumenta la depleción y precipita necrosis tubular isquémica.',
      'Descartar siempre obstrucción urinaria (ecografía renal/vesical o palpación de globo) antes de rotular una IRA como parenquimatosa.',
    ],
    questions: [
      {
        stem: 'Hombre de 72 años con antecedentes de cardiopatía coronaria y uso crónico de furosemida 40 mg/día por insuficiencia cardíaca compensada. Consulta por debilidad y astenia tras 3 días de transgresión dietética y gastroenteritis aguda con vómitos. Al examen: PA 90/60 mmHg, turgencia cutánea disminuida, ortostatismo positivo. Laboratorio: Creatinina 2.9 mg/dL (basal 1.1 mg/dL), BUN 68 mg/dL, Sodio sérico 135 mEq/L, Potasio sérico 3.3 mEq/L, Sodio urinario 38 mEq/L. ¿Cuál es el parámetro más confiable para confirmar si la falla renal es de origen prerrenal en este paciente?',
        options: [
          { id: 'A', text: 'Fracción excretada de sodio (FeNa)' },
          { id: 'B', text: 'Fracción excretada de urea (FeUrea)' },
          { id: 'C', text: 'Sedimento urinario en fresco' },
          { id: 'D', text: 'Resonancia magnética renal con contraste' },
          { id: 'E', text: 'Prueba de furosemida intravenosa en bolo' },
        ],
        correcta: 'B',
        explicacion: 'En pacientes que reciben diuréticos (como la furosemida de uso crónico en este caso), la fracción excretada de sodio (FeNa) y el sodio urinario pierden confiabilidad diagnóstica debido a la natriuresis inducida farmacológicamente a nivel del asa de Henle, arrojando falsos positivos de NTA (FeNa > 1% o Na urinario > 20 mEq/L a pesar de hipovolemia). En este escenario clínico específico, la Fracción Excretada de Urea (FeUrea) es el índice de elección, ya que el transporte de urea en el túbulo proximal no se ve directamente afectado por los diuréticos de asa: un FeUrea < 35% confirma origen prerrenal con alta sensibilidad y especificidad.',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 64 años ingresa a la Unidad de Paciente Crítico por shock séptico de foco abdominal. A las 24 horas de evolución en ventilación mecánica y noradrenalina, la diuresis acumulada en las últimas 8 horas es de 15 mL/hora (peso 60 kg). Exámenes muestran aumento de creatinina sérica desde 0.9 mg/dL al ingreso hasta 2.8 mg/dL hoy. Sedimento urinario: abundantes cilindros granulosos pigmentados pardos y células epiteliales tubulares aisladas. FeNa: 3.2%. ¿Cuál es el mecanismo fisiopatológico primario de la falla renal?',
        options: [
          { id: 'A', text: 'Hipoperfusión renal reversible sin daño estructural tubular' },
          { id: 'B', text: 'Necrosis tubular aguda isquémica y tóxica con pérdida de polaridad celular' },
          { id: 'C', text: 'Nefritis intersticial aguda alérgica por antibióticos' },
          { id: 'D', text: 'Glomerulonefritis membranoproliferativa rápidamente progresiva' },
          { id: 'E', text: 'Microangiopatía trombótica con anemia hemolítica microangiopática' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro clínico corresponde a una Necrosis Tubular Aguda (NTA) intrínseca establecida secundaria a shock séptico (isquemia hipóxica prolongada y citotoxicidad mediada por citoquinas proinflamatorias). Los hallazgos confirmatorios son: FeNa marcadamente elevado (> 2%, en este caso 3.2%), oliguria persistente y el sedimento urinario patognomónico con cilindros granulosos oscuros ("muddy brown casts") formados por células tubulares descamadas que se aglutinan en la luz tubular. La respuesta A corresponde a IRA prerrenal pura, descartada por el FeNa > 2% y los cilindros.',
        recTag: 'EUNACOM Diciembre 2019 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 76 años consulta por dolor lumbar derecho intenso, cólico, de 12 horas de evolución, asociado a anuria absoluta en las últimas 6 horas. Tiene antecedente de hiperplasia prostática benigna y nefrectomía izquierda hace 10 años por trauma. Al examen físico: abdomen blando, doloroso a la palpación en fosa ilíaca y flanco derecho, sin signos de peritonismo. Laboratorio: Creatinina 4.8 mg/dL, K 5.8 mEq/L. ¿Cuál es la conducta inicial prioritaria?',
        options: [
          { id: 'A', text: 'Iniciar hemodiálisis de urgencia inmediata por fístula' },
          { id: 'B', text: 'Administrar 2.000 mL de suero fisiológico en bolo para forzar diuresis' },
          { id: 'C', text: 'Solicitar ecografía renal urgente y descompresión de la vía urinaria' },
          { id: 'D', text: 'Indicar tratamiento con ácido acetilsalicílico y heparina de bajo peso molecular' },
          { id: 'E', text: 'Realizar biopsia renal percutánea de urgencia' },
        ],
        correcta: 'C',
        explicacion: 'El paciente es monorreno funcional (nefrectomía izquierda previa) y presenta dolor cólico agudo con anuria absoluta. La anuria súbita (débito 0 mL) es el sello de la obstrucción completa de la vía urinaria (litiasis o compresión ureteral en riñón único) o catástrofe vascular. La conducta inicial obligatoria es descartar y resolver la causa postrenal mediante ecografía renal de urgencia (o TAC sin contraste) para constatar hidronefrosis, seguida de la descompresión urológica urgente (nefrostomía percutánea o catéter doble J). Infundir 2 litros de suero (B) en un paciente anúrico obstructivo provocará edema agudo pulmonar.',
        recTag: 'EUNACOM Julio 2022 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 58 años, diabética en tratamiento con Metformina, consulta por cefalea y artromialgias para lo cual se automedicó con Ibuprofeno 600 mg cada 8 horas durante 7 días. Concomitantemente inició Losartán 50 mg/día indicado por su médico general por cifras tensionales limítrofes. Consulta por astenia y náuseas. Laboratorio: Creatinina sérica 3.1 mg/dL (basal de hace 2 semanas 0.9 mg/dL), BUN 58 mg/dL, K 5.4 mEq/L. No presenta edemas y su examen físico es normal. ¿Cuál es la explicación farmacológica de este cuadro?',
        options: [
          { id: 'A', text: 'Toxicidad tubular directa de la metformina sobre las células del túbulo distal' },
          { id: 'B', text: 'El ibuprofeno inhibe la vasodilatación de la arteriola aferente y el losartán impide la vasoconstricción de la arteriola eferente' },
          { id: 'C', text: 'El losartán produce vasoconstricción de la arteriola aferente y el ibuprofeno vasodilatación eferente' },
          { id: 'D', text: 'Inducción de nefritis lúpica proliferativa difusa por fármacos antihipertensivos' },
          { id: 'E', text: 'Precipitación intraluminal de cristales de metformina en el asa de Henle' },
        ],
        correcta: 'B',
        explicacion: 'Este es el mecanismo clásico de "doble bloqueo hemodinámico" que anula la autorregulación renal: el AINE (Ibuprofeno) bloquea la síntesis de prostaglandinas vasodilatadoras en la arteriola aferente, reduciendo el flujo plasmático que entra al ovillo; paralelamente, el ARA-II (Losartán) bloquea el receptor AT1 de la angiotensina II en la arteriola eferente, impidiendo su vasoconstricción compensatoria. El resultado neto es una caída drástica de la presión hidrostática capilar intraglomerular con colapso de la filtración glomerular, generando una IRA hemodinámica que revierte al suspender ambos fármacos.',
        recTag: 'Caso tipo EUNACOM · Farmacología aplicada',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-02', classId: 'nefro-02', tier: 2,
    blockNum: 1, blockName: 'Injuria Renal Aguda (IRA) y Urgencias Nefrológicas',
    topicLabel: '1.2', title: 'Necrosis Tubular Aguda (NTA) y Nefritis Túbulo-Intersticial Aguda (NTIA)',
    perfilCode: '1.09.2.004, 1.09.1.013', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES · Cobertura hospitalaria de urgencias',
    reconstrucciones: 'EUNACOM Julio 2016 (Q#34) · EUNACOM Diciembre 2021 (Q#77)',
    frecuencia: 'Alta rentabilidad · diagnóstico diferencial entre toxicidad tubular directa e hipersensibilidad inmunoalérgica',
    svg: null, algoTitle: 'Diferenciación entre NTA y Nefritis Intersticial Aguda por Fármacos',
    diagram: flow('Algoritmo de Falla Renal Intrínseca: NTA vs Nefritis Intersticial', [
      { t: 'Paciente Hospitalizado con Deterioro Agudo de Función Renal', s: 'Aumento progresivo de Creatinina tras inicio de fármacos o evento hemodinámico', type: 'warn' },
      { k: 'split', q: '¿Exposición a Fármacos Alergizantes (Betalactámicos, AINEs, IBP) + Rash/Eosinofilia?',
        ll: 'Fiebre + Rash máculo-papular + Piuria estéril / Eosinofiluria',
        left: { t: 'Nefritis Túbulo-Intersticial Aguda (NTIA)', s: 'Suspender fármaco causal de inmediato · Corticoides si no revierte en 5-7 días', type: 'acc' },
        rl: 'Isquemia grave, Aminoglucósidos, Contraste o Rabdomiólisis',
        right: { t: 'Necrosis Tubular Aguda (NTA)', s: 'Cilindros granulosos pardos · FeNa > 2% · Soporte, balance hídrico y evitar sobrecarga', type: 'dec' },
      },
    ]),
    contexto: 'La NTA y la NTIA son las dos causas parenquimatosas más comunes de falla renal adquirida en el hospital. Mientras la NTA es una lesión tóxica o isquémica directa del epitelio tubular que requiere esperar la regeneración celular evitando la sobrecarga hídrica, la NTIA es una reacción inmunológica de hipersensibilidad en el intersticio provocada por medicamentos cotidianos (omeprazol, amoxicilina, AINEs) que puede beneficiarse del uso precoz de corticoides si no revierte tras retirar el agente.',
    contentSections: [
      {
        subhead: '1. Necrosis Tubular Aguda: Causas Tóxicas e Isquémicas',
        paragraphs: [
          'La <strong>Necrosis Tubular Aguda (NTA)</strong> representa el 85% de las IRA intrínsecas en pacientes hospitalizados. Sus causas se dividen en <strong>isquémicas</strong> (evolución de un shock séptico, cardiogénico o hipovolémico prolongado) y <strong>nefrotóxicas</strong>: aminoglucósidos (gentamicina, amikacina), medios de contraste yodado, vancomicina, anfotericina B, o pigmentos endógenos como la <strong>mioglobina</strong> en la rabdomiólisis (CPK > 5.000–10.000 U/L, orina color té/coca-cola sin glóbulos rojos al microscopio) y la hemoglobina en la hemólisis intravascular masiva.',
        ],
      },
      {
        subhead: '2. Nefritis Túbulo-Intersticial Aguda (NTIA) Inmunoalérgica',
        paragraphs: [
          'La <strong>Nefritis Intersticial Aguda (NTIA)</strong> es una reacción de hipersensibilidad mediada por células en el compartimento intersticial renal, desencadenada en > 75% por fármacos: <strong>antibióticos</strong> (penicilinas, cefalosporinas, sulfas, ciprofloxacino), <strong>AINEs</strong> (pueden asociar síndrome nefrótico por cambios mínimos concomitante) e <strong>inhibidores de la bomba de protones (omeprazol, esomeprazol)</strong>, hoy una causa prevalente en adultos mayores.',
          'La clásica tríada clínica de <strong>fiebre, exantema cutáneo máculo-papular y eosinofilia periférica</strong> solo se observa en el 10–15% de los casos. El hallazgo de laboratorio más constante es el sedimento con <strong>piuria estéril (leucocituria con urocultivo negativo)</strong>, cilindros leucocitarios y microhematuria. La eosinofiluria (tinción de Hansel) es sugerente pero no específica.',
        ],
      },
      {
        subhead: '3. Manejo y Diferencias Terapéuticas Clave',
        paragraphs: [
          'En la <strong>NTA</strong> el epitelio tubular tarda de 1 a 3 semanas en regenerarse. El tratamiento es estrictamente conservador: suspender el tóxico, ajustar todos los medicamentos al aclaramiento renal y mantener balance neutro de agua y electrolitos. En la <strong>fase poliúrica de recuperación</strong> (cuando el túbulo regenerado aún no reconcentra la orina), se debe vigilar la deshidratación y la hipokalemia.',
          'En la <strong>NTIA</strong> la medida mandatoria y curativa es la <strong>suspensión inmediata del fármaco responsable</strong>. Si la función renal no muestra mejoría franca tras 5 a 7 días de suspensión o el compromiso es severo (Cr > 3-4 mg/dL), está indicada la corticoterapia con <strong>Prednisona oral (1 mg/kg/día por 2 a 4 semanas)</strong> para evitar la fibrosis intersticial irreversible.',
        ],
      },
    ],
    table: {
      title: 'Comparación Clínica: NTA Isquémica/Tóxica vs Nefritis Intersticial Aguda (NTIA)',
      headers: ['Característica', 'Necrosis Tubular Aguda (NTA)', 'Nefritis Intersticial Aguda (NTIA)'],
      rows: [
        ['Mecanismo lesional', 'Isquemia hipóxica o toxicidad tubular directa', 'Reacción de hipersensibilidad alérgica (tipo IV/III)'],
        ['Fármacos típicos', 'Aminoglucósidos, medios de contraste, vancomicina', 'Betalactámicos, AINEs, IBP (omeprazol), sulfas'],
        ['Manifestaciones extrarrenales', 'Ninguna (clínica del shock o sepsis)', 'Fiebre, rash cutáneo, artralgias, eosinofilia'],
        ['Sedimento de orina', 'Cilindros granulosos pardos ("muddy brown")', 'Piuria estéril, cilindros leucocitarios, hematuria'],
        ['Respuesta a Corticoides', 'Nula (no están indicados)', 'Favorable (indicados si no revierte en 5-7 días)'],
      ],
    },
    vignette: 'Hombre de 54 años, hospitalizado hace 10 días por osteomielitis en tratamiento con Cefazolina IV. Comienza con febrícula de 37.8 °C y un exantema eritematoso pruriginoso en tronco. Laboratorio muestra elevación de Creatinina de 1.0 a 2.6 mg/dL. Hemograma: 9.800 leucocitos con 9% de eosinófilos. Sedimento urinario: leucocitos 30-40 por campo, cilindros leucocitarios, urocultivo negativo.',
    explicacion: 'El paciente presenta una Nefritis Túbulo-Intersticial Aguda (NTIA) inmunoalérgica clásica inducida por Cefazolina. El diagnóstico se confirma por la combinación de exposición al betalactámico, febrícula, rash, eosinofilia y sedimento con piuria estéril y cilindros leucocitarios en ausencia de infección urinaria activa. La primera conducta es suspender de inmediato la cefazolina y rotar a otra familia antibiótica.',
    keyPoints: [
      'Causa más frecuente de NTA en pacientes hospitalizados: isquemia prolongada (shock séptico/cardiogénico) y fármacos (aminoglucósidos, contraste).',
      'La rabdomiólisis causa NTA por mioglobinuria: orina color té con dipstick positivo para sangre pero SIN glóbulos rojos al microscopio (detecta mioglobina).',
      'Fármacos inductores de NTIA alérgica: Omeprazol/IBP (muy frecuente), Betalactámicos, AINEs y Sulfonamidas.',
      'La tríada de NTIA (fiebre, rash, eosinofilia) es infrecuente; el hallazgo más constante es la piuria estéril con cilindros leucocitarios.',
      'Conducta obligatoria en NTIA: suspender de inmediato el fármaco culpable. Si la creatinina no desciende en 5-7 días, indicar Prednisona 1 mg/kg/día.',
    ],
    questions: [
      {
        stem: 'Hombre de 28 años ingresa tras colapso durante una maratón en día caluroso. Al ingreso está obnubilado, deshidratado, con mialgias generalizadas severas. Exámenes: Creatinina 4.2 mg/dL, K 6.1 mEq/L, CPK 68.000 U/L. La orina es de color marrón oscuro; la tira reactiva marca 4+ de sangre, pero el sedimento microscópico muestra apenas 0-2 hematíes por campo. ¿Cuál es el tratamiento inicial más adecuado para prevenir mayor daño renal?',
        options: [
          { id: 'A', text: 'Hemodiálisis de urgencia con filtro de alta permeabilidad' },
          { id: 'B', text: 'Hidratación intravenosa agresiva con cristaloides isotónicos' },
          { id: 'C', text: 'Iniciar corticoides en altas dosis por sospecha de miositis autoinmune' },
          { id: 'D', text: 'Administrar furosemida en infusión continua sin aporte de volumen' },
          { id: 'E', text: 'Indicar tratamiento con manitol al 20% en bolo cada 4 horas' },
        ],
        correcta: 'B',
        explicacion: 'Se trata de una rabdomiólisis por esfuerzo extremo con mioglobinuria masiva y Necrosis Tubular Aguda secundaria. La discordancia clásica del dipstick (tira reactiva que marca sangre 4+ debido a que la ortotolidina reacciona con el grupo hemo de la mioglobina libre) frente a la ausencia de glóbulos rojos en el microscopio certifica la mioglobinuria. El pilar fundamental y urgente del tratamiento es la hidratación intravenosa agresiva con cristaloides isotónicos (Suero Fisiológico o soluciones balanceadas a 200-300 mL/h) para mantener una diuresis elevada (> 2-3 mL/kg/h) y evitar la precipitación de cilindros de mioglobina y la toxicidad tubular directa.',
        recTag: 'EUNACOM Julio 2016 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 70 años con antecedente de artrosis y dispepsia en tratamiento con Omeprazol y Naproxeno. Consulta por astenia y náuseas. Laboratorio muestra elevación de creatinina sérica a 3.2 mg/dL (basal de hace 2 meses: 0.9 mg/dL). El sedimento urinario muestra 25 leucocitos por campo, cilindros leucocitarios y eosinófilos en orina (tinción de Hansel positiva). El urocultivo es negativo. ¿Cuál es la conducta inicial más adecuada?',
        options: [
          { id: 'A', text: 'Iniciar ciprofloxacino por sospecha de pielonefritis aguda' },
          { id: 'B', text: 'Suspender de inmediato omeprazol y naproxeno' },
          { id: 'C', text: 'Realizar pielografía ascendente retrógrada' },
          { id: 'D', text: 'Indicar diálisis peritoneal continua' },
          { id: 'E', text: 'Aumentar la dosis de IBP para proteger la mucosa gástrica' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una Nefritis Túbulo-Intersticial Aguda inmunoalérgica secundaria a fármacos (el omeprazol y los AINEs son dos de los principales causantes). La presencia de piuria estéril (leucocitos en orina con urocultivo negativo), cilindros leucocitarios y eosinofiluria confirma el diagnóstico. La primera y más importante medida terapéutica es suspender inmediatamente todos los fármacos potencialmente alergizantes (omeprazol y naproxeno). La mayoría de los pacientes recupera la función renal solo con esta medida; los corticoides se reservan si no hay mejoría tras una semana.',
        recTag: 'EUNACOM Diciembre 2021 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-03', classId: 'nefro-03', tier: 2,
    blockNum: 1, blockName: 'Injuria Renal Aguda (IRA) y Urgencias Nefrológicas',
    topicLabel: '1.3', title: 'Síndrome Urémico y Urgencias Dialíticas (Criterios AEIOU)',
    perfilCode: '1.09.1.023, 1.09.3.004, 1.09.5.003', dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES #1): Enfermedad Renal Crónica Terminal · Acceso garantizado a hemodiálisis y trasplante',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#12) · EUNACOM Diciembre 2020 (Q#95)',
    frecuencia: 'Alta rentabilidad · preguntas clásicas de indicación absoluta de hemodiálisis de urgencia',
    svg: null, algoTitle: 'Algoritmo de Decisión de Diálisis de Urgencia (AEIOU)',
    diagram: flow('Criterios de Hemodiálisis de Urgencia en Injuria Renal Aguda', [
      { t: 'Paciente con Falla Renal Aguda o Crónica Agudizada', s: 'Azoemia severa, oliguria o descompensación clínica', type: 'warn' },
      { k: 'split', q: '¿Presenta Criterio de Urgencia Vital AEIOU?',
        ll: 'Acidosis refractaria (pH < 7.15) · Hiperkalemia > 6.5 mEq/L con ECG · Sobrecarga pulmonar refractaria · Uremia grave',
        left: { t: 'Hemodiálisis de Urgencia Absoluta', s: 'Instalar Catéter Venoso Central (Yugular Interno) · Conectar a Hemodiálisis inmediata', type: 'acc' },
        rl: 'Azoemia sin criterios vitales · Diuresis y electrolitos controlados',
        right: { t: 'Tratamiento Médico Conservador', s: 'Manejo de volumen, diuréticos, quelantes de K y bicarbonato · Monitorización seriada', type: 'dec' },
      },
    ]),
    contexto: 'El nivel absoluto de uremia o creatinina no define por sí solo la necesidad de conectar a un paciente a un riñón artificial: un paciente con creatinina de 8 mg/dL asintomático puede manejarse médicamente, mientras que otro con creatinina de 3 mg/dL pero con edema pulmonar refractario o hiperkalemia con cambios en el ECG morirá en minutos si no se dializa. Conocer de memoria la regla AEIOU de las urgencias dialíticas es uno de los conocimientos más evaluados en medicina interna y urgencias.',
    contentSections: [
      {
        subhead: '1. Síndrome Urémico: Manifestaciones Clínicas Graves',
        paragraphs: [
          'El <strong>Síndrome Urémico</strong> es la constelación de síntomas y signos clínicos producidos por la acumulación de toxinas urémicas (urea, guanidinas, fenoles, citoquinas) en falla renal avanzada. Sus manifestaciones más peligrosas son:',
          '<strong>Encefalopatía urémica:</strong> letargia, desorientación, mioclonías, asterixis (flapping tremor) y eventualmente convulsiones o coma. <strong>Pericarditis urémica:</strong> dolor torácico pleuropericárdico con roce pericárdico auscultable; es indicación formal de diálisis urgente y existe contraindicación estricta de anticoagulación con heparina no fraccionada durante el procedimiento por riesgo de <strong>taponamiento cardíaco hemorrágico</strong>. <strong>Disfunción plaquetaria urémica:</strong> sangrado mucocutáneo por alteración de la adhesión plaquetaria (factor Von Willebrand); se revierte de forma transitoria con <strong>Desmopresina (DDAVP 0.3 mcg/kg)</strong>.',
        ],
      },
      {
        subhead: '2. Indicaciones Absolutas de Hemodiálisis de Urgencia: Regla AEIOU',
        paragraphs: [
          'Las indicaciones de hemodiálisis de urgencia son universales y se recuerdan mediante la mnemotecnia <strong>AEIOU</strong>:',
          '<strong>A (Acidosis):</strong> Acidosis metabólica severa y refractaria al tratamiento médico con bicarbonato (habitualmente <strong>pH < 7.15 o bicarbonato < 10 mEq/L</strong> persistente).',
          '<strong>E (Electrolitos):</strong> <strong>Hiperkalemia grave (> 6.5 mEq/L)</strong> con alteraciones en el electrocardiograma (ondas T picudas, ensanchamiento QRS) o refractaria al manejo con gluconato de calcio, insulina-glucosa y salbutamol.',
          '<strong>I (Intoxicaciones):</strong> Sustancias dializables (mnemotecnia <strong>SLIME</strong>: Salicilatos, Litio, Isopropanol, Metanol, Etilenglicol).',
          '<strong>O (Overload - Sobrecarga de volumen):</strong> <strong>Edema Pulmonar Agudo</strong> refractario a dosis máximas de diuréticos de asa (furosemida IV) o en paciente anúrico.',
          '<strong>U (Uremia sintomática):</strong> Pericarditis urémica, encefalopatía urémica o diátesis hemorrágica activa por uremia.',
        ],
      },
      {
        subhead: '3. Acceso Vascular y Complicaciones de la Diálisis de Urgencia',
        paragraphs: [
          'Para la hemodiálisis de urgencia se requiere un acceso vascular temporal mediante catéter venoso central de doble lumen (Mahurkar). El sitio de elección es la <strong>vena yugular interna derecha</strong> (menor tasa de trombosis y estenosis que la vena subclavia, la cual debe evitarse para no comprometer el territorio de futuras fístulas arteriovenosas).',
          'La complicación neurológica clásica de la primera sesión es el <strong>Síndrome de Desequilibrio Dialítico</strong>: cefalea, náuseas, vómitos, agitación y convulsiones secundarias a edema cerebral osmótico por depuración demasiado rápida de urea sanguínea frente a un clearance más lento en el tejido cerebral. Se previene realizando sesiones iniciales cortas (2 horas) y a flujos bajos.',
        ],
      },
    ],
    table: {
      title: 'Mnemotecnia AEIOU: Criterios Absolutos de Hemodiálisis de Urgencia',
      headers: ['Criterio', 'Hallazgo Clínico / Parámetro', 'Error Frecuente en Examen'],
      rows: [
        ['A — Acidosis', 'pH < 7.15 refractario a bicarbonato', 'Indicar diálisis por acidosis leve compensada (pH 7.30)'],
        ['E — Electrolitos', 'K > 6.5 mEq/L con cambios ECG o refractario', 'Dializar sin antes administrar Gluconato de Calcio IV'],
        ['I — Ingestion (Tóxicos)', 'Litio, Metanol, Etilenglicol, Salicilatos', 'Creer que intoxicación por benzodiacepinas se dializa'],
        ['O — Overload (Volumen)', 'Edema pulmonar agudo cardiogénico refractario', 'Esperar horas con bolos repetidos de furosemida en anuria'],
        ['U — Uremia', 'Pericarditis urémica, encefalopatía, sangrado', 'Indicar heparina en pericarditis (riesgo de hemopericardio)'],
      ],
    },
    vignette: 'Hombre de 62 años con antecedente de insuficiencia renal crónica avanzada sin diálisis. Es traído por familiares por desorientación y somnolencia progresiva de 48 horas. Al examen: estuporoso, asterixis bilateral evidente a la dorsiflexión de manos. Auscultación cardíaca: frote rudo sistodiastólico en borde esternal izquierdo. Laboratorio: Creatinina 9.2 mg/dL, BUN 120 mg/dL, K 5.2 mEq/L, pH venoso 7.28, bicarbonato 16 mEq/L. No presenta signos de congestión pulmonar.',
    explicacion: 'El paciente presenta manifestaciones cardinales de uremia severa: encefalopatía urémica (asterixis) y pericarditis urémica (frote pericárdico). Ambos hallazgos constituyen indicaciones absolutas e inmediatas de hemodiálisis de urgencia (criterio U de AEIOU), con independencia de que el potasio no esté en rango letal y no exista edema pulmonar. La presencia de pericarditis obliga además a evitar la heparinización plena durante la hemodiálisis por el riesgo mortal de hemopericardio y taponamiento cardíaco.',
    keyPoints: [
      'La cifra aislada de creatinina o BUN NO es indicación de diálisis urgente: lo es la clínica de uremia grave o descompensación vital (AEIOU).',
      'La pericarditis urémica (roce pericárdico) es indicación urgente de hemodiálisis; está contraindicada la heparina sistémica durante el procedimiento.',
      'El edema pulmonar refractario a diuréticos en un paciente con falla renal es la causa más común de diálisis urgente en el servicio de urgencias.',
      'Acceso vascular de elección para hemodiálisis urgente: Catéter venoso central en vena yugular interna derecha; evitar vena subclavia.',
      'El síndrome de desequilibrio dialítico se previene con diálisis iniciales suaves, cortas y a bajo flujo en pacientes con uremia muy elevada.',
    ],
    questions: [
      {
        stem: 'Hombre de 56 años con diabetes mellitus y nefropatía diabética avanzada consulta en el servicio de urgencias por disnea de reposo y ortopnea progresiva. Al examen: PA 180/100 mmHg, FC 105 lpm, SatO2 86% ambiental. Se auscultan crepitaciones bilaterales difusas hasta los tercios superiores de ambos campos pulmonares. Se administran 120 mg de furosemida IV sin lograr diuresis a los 45 minutos. Gases arteriales: pH 7.22, PaO2 55 mmHg, PaCO2 32 mmHg, HCO3 12 mEq/L. Creatinina 6.4 mg/dL, K 5.8 mEq/L. ¿Cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Repetir bolo de 240 mg de furosemida IV' },
          { id: 'B', text: 'Instalar catéter y realizar hemodiálisis de urgencia' },
          { id: 'C', text: 'Administrar bicarbonato de sodio al 8.4% en infusión continua' },
          { id: 'D', text: 'Iniciar infusión de nitroglicerina y nebulizaciones con salbutamol' },
          { id: 'E', text: 'Indicar ventilación mecánica no invasiva con CPAP y esperar 24 horas' },
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un Edema Pulmonar Agudo con insuficiencia respiratoria severa refractario a dosis altas de diuréticos de asa en el contexto de una falla renal terminal anúrica. Esto corresponde a la "O" (Overload / Sobrecarga de volumen) de los criterios de hemodiálisis de urgencia (AEIOU). Continuar aumentando dosis de diuréticos en un riñón no respondedor solo retrasa el tratamiento definitivo y aumenta la mortalidad; la ultrafiltración inmediata mediante hemodiálisis es la única medida que remueve el exceso de agua y resuelve el edema alveolar.',
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 42 años con antecedente de trastorno bipolar en tratamiento crónico con Carbonato de Litio es traída a urgencias por cuadro de compromiso de conciencia, temblor grosero, ataxia y disartria tras deshidratación por diarrea. Los exámenes muestran Creatinina 3.8 mg/dL y una Litemia de 4.8 mEq/L (rango terapéutico 0.6-1.2 mEq/L). ¿Cuál es la conducta terapéutica de elección?',
        options: [
          { id: 'A', text: 'Lavado gástrico con carbón activado seriado' },
          { id: 'B', text: 'Hemodiálisis de urgencia' },
          { id: 'C', text: 'Administración de poliestireno sulfonato de sodio oral' },
          { id: 'D', text: 'Alcalinización urinaria con bicarbonato de sodio' },
          { id: 'E', text: 'Forzar diuresis osmótica con manitol' },
        ],
        correcta: 'B',
        explicacion: 'Se trata de una intoxicación grave por Litio (Litemia > 4.0 mEq/L con neurotoxicidad severa y falla renal aguda). El litio es una molécula pequeña, de bajo peso molecular y baja unión a proteínas plasmáticas, lo que la convierte en una sustancia altamente dializable. Corresponde al criterio "I" (Intoxicaciones dializables: SLIME) de las urgencias dialíticas. El carbón activado (A) no une metales como el litio y no tiene ninguna utilidad.',
        recTag: 'EUNACOM Diciembre 2020 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟢 TIER 1 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-04', classId: 'nefro-04', tier: 1,
    blockNum: 1, blockName: 'Injuria Renal Aguda (IRA) y Urgencias Nefrológicas',
    topicLabel: '1.4', title: 'Síndrome Cardiorrenal y Síndrome Hepatorrenal',
    perfilCode: '1.09.1.020, 1.09.2.003', dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía GES #3: Insuficiencia Cardíaca y GES #74: Cirrosis Hepática',
    reconstrucciones: 'EUNACOM Julio 2015 (Q#22) · EUNACOM Diciembre 2017 (Q#68)',
    frecuencia: 'Media rentabilidad · concepto de congestión venosa retrógrada y diagnóstico diferencial en cirróticos',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'Durante décadas se enseñó que el riñón fallaba en la insuficiencia cardíaca únicamente porque el corazón no bombeaba suficiente sangre hacia adelante (falla de bomba anterógrada). La evidencia contemporánea demostró que el principal culpable es la congestión venosa retrógrada: el aumento de la presión en la vena renal ahoga el gradiente de filtración capilar. En la cirrosis ocurre lo opuesto: una vasodilatación esplácnica extrema secuestra el volumen arterial efectivo y desencadena una vasoconstricción renal refleja devastadora conocida como Síndrome Hepatorrenal.',
    contentSections: [
      {
        subhead: '1. Síndrome Cardiorrenal: El Rol de la Congestión Venosa',
        paragraphs: [
          'El <strong>Síndrome Cardiorrenal (SCR)</strong> define la disfunción bidireccional donde la falla de uno de estos órganos genera disfunción aguda o crónica en el otro. Se clasifica en 5 tipos: <strong>Tipo 1</strong> (Insuficiencia cardíaca aguda descompensada que gatilla IRA); <strong>Tipo 2</strong> (Cardiopatía crónica que induce ERC progresiva); <strong>Tipo 3</strong> (IRA que gatilla insuficiencia cardíaca aguda por sobrecarga); <strong>Tipo 4</strong> (ERC que acelera cardiopatía y calcificación vascular); y <strong>Tipo 5</strong> (Enfermedad sistémica como sepsis o amiloidosis que daña ambos simultáneamente).',
          'El pilar fisiopatológico en el Tipo 1 no es la caída del gasto cardíaco, sino la <strong>hipertensión venosa central retrógrada</strong>: al subir la presión en la aurícula derecha, se transmite a la vena cava inferior y a las venas renales, elevando la presión hidrostática en el espacio de Bowman y colapsando el gradiente transglomerular. Por ello, la descongestión efectiva con <strong>furosemida IV</strong> suele mejorar la función renal a pesar de la diuresis.',
        ],
      },
      {
        subhead: '2. Síndrome Hepatorrenal (SHR): Fisiopatología y Diagnóstico',
        paragraphs: [
          'El <strong>Síndrome Hepatorrenal (SHR-IRA)</strong> es una forma funcional de falla renal oligúrica que ocurre en pacientes con cirrosis hepática avanzada e hipertensión portal. Su mecanismo es la <strong>vasodilatación arterial esplácnica extrema</strong> mediada por óxido nítrico, que secuestra el flujo arterial sistémico; el organismo interpreta una hipovolemia crítica y activa masivamente el sistema nervioso simpático y el eje RAA, produciendo una intensa <strong>vasoconstricción de las arterias renales</strong>.',
          'Es un <strong>diagnóstico de exclusión</strong> según el International Club of Ascites: (1) Cirrosis con ascitis; (2) Aumento de creatinina ≥ 0.3 mg/dL en 48 h o ≥ 50% del basal; (3) <strong>Ausencia de respuesta tras suspender diuréticos y expandir con Albúmina humana (1 g/kg/día, máx 100 g/día) durante 48 horas continuas</strong>; (4) Ausencia de shock; (5) Ausencia de uso reciente de nefrotóxicos; y (6) Ausencia de proteinuria macroscópica (> 500 mg/día) o microhematuria en el sedimento.',
        ],
      },
      {
        subhead: '3. Tratamiento Médico Específico y Trasplante',
        paragraphs: [
          'El tratamiento médico de elección para el SHR-IRA es la combinación de <strong>vasoconstrictores esplácnicos + expansor coloidal</strong>: <strong>Terlipresina</strong> (análogo de vasopresina IV en bolos de 1-2 mg cada 4-6 h o infusión continua) asociada a <strong>Albúmina al 20% (20 a 40 g/día)</strong>. Como alternativa en UCI se utiliza Noradrenalina IV + Albúmina.',
          'La terlipresina revierte la vasodilatación mesentérica y redistribuye el flujo sanguíneo hacia el lecho renal. No obstante, la terapia definitiva y curativa del síndrome hepatorrenal es el <strong>Trasplante Hepático</strong>.',
        ],
      },
    ],
    table: {
      title: 'Criterios Diagnósticos del Síndrome Hepatorrenal (Club Internacional de Ascitis)',
      headers: ['Criterio Obligatorio', 'Detalle Clínico / Prueba de Descarte'],
      rows: [
        ['Enfermedad hepática de base', 'Cirrosis hepática con ascitis clínica o ecográfica'],
        ['Definición de IRA (KDIGO)', 'Aumento de Cr sérica ≥ 0.3 mg/dL en 48 h o ≥ 50% sobre el basal'],
        ['Prueba terapéutica con albúmina', 'Sin mejoría de Cr tras 48 h de suspender diuréticos y dar Albúmina 1 g/kg/día'],
        ['Descarte de shock hemodinámico', 'Presión arterial media mantenida sin shock séptico ni cardiogénico'],
        ['Descarte de nefrotoxicidad', 'Sin exposición reciente a AINEs, aminoglucósidos o contraste yodado'],
        ['Descarte de nefropatía parenquimatosa', 'Sedimento sin hematuria glomerular (< 50 hematíes) y proteinuria < 500 mg/día'],
      ],
    },
    vignette: 'Hombre de 58 años con antecedentes de cirrosis hepática por alcohol y ascitis moderada en tratamiento con Espironolactona 100 mg y Furosemida 40 mg/día. Consulta por aumento de astenia y oliguria. Exámenes: Creatinina 2.4 mg/dL (basal de hace 3 semanas: 0.9 mg/dL), BUN 48 mg/dL, Na urinario 8 mEq/L. Sedimento de orina normal sin cilindros ni hematíes. Se suspenden los diuréticos y se administra Albúmina humana IV a 1 g/kg/día por 48 horas, pero la creatinina de control al tercer día sube a 2.7 mg/dL.',
    explicacion: 'El paciente cumple todos los criterios diagnósticos de Síndrome Hepatorrenal Tipo 1 (SHR-IRA): cirrosis con ascitis, elevación significativa de creatinina, sedimento urinario sin signos de daño parenquimatoso orgánico, sodio urinario bajo (< 10 mEq/L por vasoconstricción renal extrema) y refractariedad a la prueba de expansión con albúmina durante 48 horas tras retirar los diuréticos. El tratamiento farmacológico de elección en este momento es la combinación de Terlipresina intravenosa más Albúmina humana al 20%.',
    keyPoints: [
      'El Síndrome Cardiorrenal Tipo 1 se debe principalmente a hipertensión venosa central retrógrada, no solo a bajo gasto cardíaco.',
      'En insuficiencia cardíaca descompensada con elevación de creatinina, la descongestión con diuréticos suele mejorar la función renal al reducir la presión venosa renal.',
      'El Síndrome Hepatorrenal es una falla renal funcional debida a vasodilatación esplácnica masiva y vasoconstricción renal refleja compensatoria.',
      'Para diagnosticar SHR es MANDATORIO suspender diuréticos y administrar Albúmina humana (1 g/kg/día) por 48 horas sin mejoría de la creatinina.',
      'Tratamiento médico de elección en SHR: Terlipresina + Albúmina al 20%. Terapia curativa definitiva: Trasplante Hepático.',
    ],
    questions: [
      {
        stem: 'Hombre de 52 años con cirrosis hepática Child-Pugh C por virus de hepatitis C y ascitis refractaria, hospitalizado por hemorragia digestiva alta variceal resuelta con ligadura endoscópica. A las 72 horas presenta oliguria con elevación de creatinina sérica desde 0.8 mg/dL a 2.6 mg/dL. Se suspenden diuréticos y se infunde albúmina humana al 20% a dosis de 1 g/kg/día durante 48 horas consecutivas, manteniéndose la creatinina en 2.5 mg/dL. Sedimento urinario: 2-3 leucocitos por campo, sin cilindros ni proteinuria. Sodio urinario: 6 mEq/L. Presión arterial: 100/60 mmHg. ¿Cuál es el tratamiento de primera línea?',
        options: [
          { id: 'A', text: 'Hemodiálisis trisemanal ambulatoria' },
          { id: 'B', text: 'Terlipresina intravenosa asociada a albúmina' },
          { id: 'C', text: 'Infusión de dopamina a dosis renales vasodilatadoras (2 mcg/kg/min)' },
          { id: 'D', text: 'Bolo de furosemida de 120 mg IV' },
          { id: 'E', text: 'Paracentesis evacuadora total de 8 litros sin reposición' },
        ],
        correcta: 'B',
        explicacion: 'El paciente cumple con todos los criterios de Síndrome Hepatorrenal (SHR-IRA): cirrosis con ascitis, deterioro agudo de la función renal, oliguria con sodio urinario muy bajo (< 10 mEq/L), sedimento inactivo y confirmación de refractariedad a la expansión con albúmina intravenosa durante 48 horas. La combinación farmacológica de elección según las guías internacionales (EASL) y nacionales es Terlipresina (análogo sintético de la vasopresina con acción vasoconstrictora esplácnica selectiva) más Albúmina humana IV al 20%, lo que permite recuperar la perfusión renal como puente al trasplante hepático.',
        recTag: 'EUNACOM Julio 2015 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 68 años con antecedentes de miocardiopatía dilatada con fracción de eyección del 25% consulta por ortopnea, disnea paroxística nocturna y edema de extremidades inferiores hasta rodillas. Al examen: ingurgitación yugular hasta el ángulo mandibular, reflujo hepatoyugular positivo y crepitaciones bibasales. Laboratorio: Creatinina 2.2 mg/dL (basal 1.3 mg/dL), BUN 54 mg/dL. ¿Cuál es el mecanismo fisiopatológico principal responsable del deterioro agudo de su función renal (Síndrome Cardiorrenal Tipo 1)?',
        options: [
          { id: 'A', text: 'Aumento de la presión venosa central transmitida a las venas renales con congestión parenquimatosa' },
          { id: 'B', text: 'Necrosis tubular aguda isquémica irreversible en ambos riñones' },
          { id: 'C', text: 'Glomerulonefritis membranosa asociada a cardiopatía' },
          { id: 'D', text: 'Toxicidad tubular directa por péptido natriurético tipo B cerebral' },
          { id: 'E', text: 'Obstrucción mecánica ureteral por compresión de venas ilíacas ingurgitadas' },
        ],
        correcta: 'A',
        explicacion: 'En el Síndrome Cardiorrenal Tipo 1 (descompensación cardíaca aguda que genera injuria renal aguda), los estudios hemodinámicos han demostrado que la elevación de la presión venosa central y la consiguiente congestión venosa renal retrógrada es el factor hemodinámico predominante en la caída del filtrado glomerular. El aumento de la presión en las venas renales incrementa la presión intersticial renal y la presión hidrostática dentro del espacio de Bowman, reduciendo el gradiente transglomerular neto de filtración. El tratamiento prioritario es la descongestión con diuréticos de asa intravenosos.',
        recTag: 'EUNACOM Diciembre 2017 · Reconstrucción oficial',
      },
    ],
  },
];

module.exports = { bloque1 };
