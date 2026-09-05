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
  ${P.join('\\n  ')}
</svg>`;
  return { title, svg };
}

const bloque1 = [
  {
    id: 'inf-01',
    classId: 'infecto-01',
    tier: 3,
    blockNum: 1,
    blockName: 'Urgencias Críticas, Sepsis e Infecciones del SNC',
    topicLabel: '1.1',
    title: 'Sepsis y Shock Séptico (Consenso Sepsis-3 & Paquete 1ª Hora)',
    perfilCode: '1.04.2.007',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Manejo Integral del Paciente Crítico en Cuidados Intensivos',
    reconstrucciones: 'EUNACOM 2024 (Q#12) · EUNACOM 2022 (Q#88) · EUNACOM 2020 (Q#45) · EUNACOM 2018 (Q#102)',
    frecuencia: 'Máxima rentabilidad · aparece en el 100% de las versiones del EUNACOM',
    svg: null, algoTitle: 'Algoritmo de Resucitación Hemodinámica y Manejo de Shock Séptico',
    diagram: flow('Resucitación Hemodinámica y Escalamiento Vasoactivo en Shock Séptico', [
      { t: 'Sospecha de Sepsis / Disfunción Orgánica Aguda', s: 'qSOFA ≥ 2 (FR ≥ 22 · Glasgow < 15 · PAS ≤ 100) o aumento agudo de SOFA ≥ 2' },
      { k: 'split', q: '¿PAM ≥ 65 mmHg tras Paquete 1ª Hora y Cristaloides 30 mL/kg?', s: 'Lactato sérico + 2 hemocultivos + ATB EV precoz + fluidos en bolo rápido', ll: 'sí (respondedor)', rl: 'no (shock séptico)',
        left: { t: 'Mantener Soporte y Desescalar', s: 'Ajustar fluidos por diuresis (> 0.5 mL/kg/h) · Desescalar ATB según cultivo', type: 'acc' },
        right: { t: 'Noradrenalina EV Precoz (1ª Línea)', s: 'Meta PAM ≥ 65 mmHg · Vía periférica o catéter venoso central', type: 'warn' } },
      { t: 'Persistencia de Hipotensión con Dosis Alta de Noradrenalina (> 0.25 mcg/kg/min)', s: 'Asociar Vasopresina 0.03 U/min + Hidrocortisona EV 200 mg/día · Si falla de bomba: Dobutamina', type: 'warn', al: 'refractario', from: 'right' },
    ]),
    contexto: 'La sepsis y el shock séptico son emergencias médicas de máxima evaluación en el EUNACOM. La clave radica en aplicar el Consenso Sepsis-3 (abandono del SIRS, centralidad del SOFA/qSOFA) y ejecutar con rapidez estricta el Paquete de la Primera Hora antes de que se instale la disfunción multiorgánica irreversible.',
    contentSections: [
      {
        subhead: '1. Definición y Criterios Diagnósticos (Sepsis-3)',
        paragraphs: [
          'La sepsis se define según el consenso <strong>Sepsis-3</strong> como la <strong>disfunción orgánica potencialmente mortal causada por una respuesta desregulada del huésped a la infección</strong>. El concepto de SIRS fue abandonado por inespecífico.',
          'La confirmación requiere sospecha de infección + aumento agudo de <strong>≥ 2 puntos en el Score SOFA</strong> basal. En la cabecera del paciente y urgencias se utiliza el <strong>qSOFA (quick SOFA)</strong>: FR ≥ 22 rpm, Glasgow &lt; 15 y Presión Sistólica ≤ 100 mmHg. Dos o más puntos identifican alto riesgo de muerte.',
        ],
      },
      {
        subhead: '2. Definición Estricta de Shock Séptico',
        paragraphs: [
          'El shock séptico es un subgrupo de sepsis con colapso circulatorio y celular profundo. Se diagnostica cuando, tras una adecuada resucitación con volumen, persisten simultáneamente:',
          '1. Necesidad de <strong>vasopresores para mantener PAM ≥ 65 mmHg</strong>, Y<br>' +
          '2. <strong>Lactato sérico &gt; 2 mmol/L (&gt; 18 mg/dL)</strong> a pesar de la carga de volumen.',
        ],
      },
      {
        subhead: '3. Paquete de la 1ª Hora (Surviving Sepsis Campaign)',
        paragraphs: [
          'Cada hora de demora en los antibióticos aumenta la mortalidad en 8 %. En los primeros 60 minutos:',
          '• <strong>Medir Lactato sérico</strong> (remeir a las 2–4 h si está elevado; meta: descenso &gt; 20 % en 2 h).<br>' +
          '• <strong>Tomar 2 frascos de hemocultivos</strong> antes de iniciar antimicrobianos (sin demorar &gt; 45 min).<br>' +
          '• <strong>Antibióticos EV de amplio espectro</strong> en dosis plenas según foco probable.<br>' +
          '• <strong>Cristaloides a 30 mL/kg</strong> (Ringer Lactato o Solución Fisiológica) en bolo rápido si hay hipotensión o lactato ≥ 4.',
        ],
      },
      {
        subhead: '4. Escalamiento Vasoactivo y Manejo Avanzado',
        paragraphs: [
          '<strong>Vasopresor de 1ª línea: Noradrenalina EV</strong>. La dopamina está proscrita por mayor arritmogenia y mortalidad. Se puede iniciar por vía periférica mientras se instala el CVC.',
          'Si la hipotensión persiste con dosis crecientes de noradrenalina (&gt; 0.25 mcg/kg/min), se asocia <strong>Vasopresina (0.03 U/min)</strong> e <strong>Hidrocortisona EV (200 mg/día)</strong>. Si coexiste disfunción miocárdica (ScvO₂ &lt; 70 % con PAM adecuada), agregar <strong>Dobutamina</strong>.',
        ],
      },
    ],
    table: {
      title: 'Sepsis vs Shock Séptico vs Hipovolemia — Diagnóstico Diferencial',
      headers: ['Parámetro', 'Sepsis (Sepsis-3)', 'Shock Séptico', 'Hipotensión Hipovolémica'],
      rows: [
        ['Criterio clínico', 'Infección + aumento SOFA ≥ 2', 'PAM < 65 post-fluidos + Lactato > 2', 'Déficit intravascular puro'],
        ['Respuesta a 30 mL/kg', 'Estabiliza PA transitoriamente', 'Refractario; persiste hipotensión', 'Restaura PA y perfusión 100%'],
        ['Vasopresor de elección', 'No indicado (solo fluidos)', 'Noradrenalina (meta PAM ≥ 65)', 'Contraindicado (requiere volumen)'],
        ['Lactato Sérico', 'Normal o leve elevación', '> 2 mmol/L post-fluidos', 'Normal o normaliza con volumen'],
        ['Mortalidad', '10% a 15%', '> 40%', '< 5% con reposición'],
      ],
    },
    vignette: 'Hombre de 68 años con ITU complicada febril (39 °C), soporoso, PA 82/48 (PAM 59 mmHg), FC 122 lpm, FR 26 rpm. Se administran 2.500 mL de Ringer lactato (30 mL/kg) en 2 horas. Tras la carga, la PA es de 84/50 mmHg (PAM 61 mmHg) y lactato 4.2 mmol/L.',
    explicacion: 'Shock séptico urinario refractario a fluidos: cumple criterios Sepsis-3 con persistencia de PAM < 65 mmHg y lactato > 2 mmol/L tras 30 mL/kg de cristaloides. La conducta inmediata es el inicio impostergable de Noradrenalina EV (meta PAM ≥ 65 mmHg), toma de hemocultivos y antibióticos EV de amplio espectro.',
    keyPoints: [
      'El concepto de SIRS fue eliminado: Sepsis = sospecha de infección + disfunción orgánica aguda (SOFA ≥ 2).',
      'qSOFA (≥ 2 de 3): FR ≥ 22 rpm, Glasgow < 15, Presión Sistólica ≤ 100 mmHg. Herramienta de alarma rápida.',
      'Shock Séptico = necesidad de vasopresores para PAM ≥ 65 mmHg a pesar de 30 mL/kg de fluidos Y Lactato > 2 mmol/L.',
      'Vasopresor de 1ª línea indiscutido: Noradrenalina EV. La dopamina está en desuso por arritmias y mayor mortalidad.',
      'Paquete 1ª hora: Lactato + Hemocultivos x 2 + ATB amplio espectro EV + Cristaloides 30 mL/kg + Noradrenalina precoz.',
    ],
    questions: [
      {
        stem: 'Un paciente de 62 años con neumonía adquirida en la comunidad grave evoluciona con taquipnea (FR 28 rpm), compromiso de conciencia y PA 80/50 mmHg. A pesar de la administración de 2.000 mL de solución salina al 0.9% en 90 minutos, la PAM persiste en 58 mmHg y el lactato sérico se reporta en 3.6 mmol/L. ¿Cuál es la conducta farmacológica inmediata más indicada?',
        options: [
          { id: 'A', text: 'Iniciar infusión continua de dopamina a dosis beta' },
          { id: 'B', text: 'Iniciar infusión de noradrenalina con meta de PAM ≥ 65 mmHg' },
          { id: 'C', text: 'Administrar un bolo de 100 mg de hidrocortisona EV antes de vasopresores' },
          { id: 'D', text: 'Continuar la carga de cristaloides con 2.000 mL adicionales en 1 hora' },
          { id: 'E', text: 'Iniciar infusión de bicarbonato de sodio 2/3 molar' },
        ],
        correcta: 'B',
        explicacion: 'El paciente se encuentra en shock séptico refractario a fluidos (PAM < 65 mmHg y lactato > 2 mmol/L post-volumen). La recomendación Surviving Sepsis Campaign establece la Noradrenalina como el vasopresor de primera línea para restaurar la presión de perfusión tisular (PAM ≥ 65 mmHg). La dopamina (A) aumenta el riesgo de arritmias ventriculares y mortalidad. Los corticoides (C) se indican solo en shock refractario a dosis altas de noradrenalina. Continuar aportando volumen a ciegas (D) provoca edema pulmonar y mayor falla ventricular.',
        recTag: 'Banco de Preguntas Oficial · Sepsis y Shock Séptico',
      },
      {
        stem: '¿Cuál de los siguientes hallazgos clínicos forma parte del score qSOFA (quick SOFA) para la identificación rápida de sepsis en el servicio de urgencia?',
        options: [
          { id: 'A', text: 'Temperatura axilar > 38.3 °C o < 36.0 °C' },
          { id: 'B', text: 'Leucocitosis > 12.000/mm³ o baciliformes > 10%' },
          { id: 'C', text: 'Frecuencia respiratoria ≥ 22 respiraciones por minuto' },
          { id: 'D', text: 'Frecuencia cardíaca > 90 latidos por minuto' },
          { id: 'E', text: 'Diuresis horaria < 0.5 mL/kg/h' },
        ],
        correcta: 'C',
        explicacion: 'El qSOFA consta exclusivamente de tres parámetros clínicos de fácil evaluación sin requerir exámenes de laboratorio: (1) Frecuencia respiratoria ≥ 22 rpm, (2) Alteración del estado mental (Glasgow < 15), y (3) Presión arterial sistólica ≤ 100 mmHg. La temperatura, taquicardia y leucocitosis (A, B, D) pertenecían a los antiguos criterios de SIRS, los cuales fueron abandonados por su baja especificidad.',
        recTag: 'Banco de Preguntas Oficial · Sepsis y Shock Séptico',
      },
    ],
  },
  {
    id: 'inf-02',
    classId: 'infecto-02',
    tier: 3,
    blockNum: 1,
    blockName: 'Urgencias Críticas, Sepsis e Infecciones del SNC',
    topicLabel: '1.2',
    title: 'Meningitis Aguda Bacteriana y Viral',
    perfilCode: '1.04.2.006',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Infecciones del Sistema Nervioso Central en Adultos y Pediatría',
    reconstrucciones: 'EUNACOM 2024 (Q#33) · EUNACOM 2023 (Q#77) · EUNACOM Diciembre 2019 (Q#12) · EUNACOM 2017 (Q#68)',
    frecuencia: 'Máxima rentabilidad · diagnóstico diferencial de LCR y banderas rojas de TAC',
    svg: null, algoTitle: 'Algoritmo de Decisión Inmediata: TAC Previo a Punción Lumbar',
    diagram: flow('Enfrentamiento de Meningitis Aguda y Decisión de TAC Cerebral', [
      { t: 'Sospecha Clínica de Meningitis Aguda', s: 'Fiebre + cefalea intensa + rigidez de nuca / signos meníngeos (Kernig y Brudzinski)' },
      { k: 'split', q: '¿Presenta Banderas Rojas para TAC Previo a Punción Lumbar?', s: 'Focalidad neurológica · convulsión reciente · Glasgow < 10 · papiledema · inmunodepresión', ll: 'no (mayoría)', rl: 'sí (riesgo de herniación)',
        left: { t: 'Punción Lumbar (PL) Inmediata', s: 'Citoquímico, Gram y cultivo de LCR · Iniciar Dexametasona + ATB EV', type: 'acc' },
        right: { t: 'Dexametasona + Hemocultivos + ATB EV Inmediatos', s: 'NUNCA demorar antimicrobianos por la neuroimagen · Traslado a TAC', type: 'warn' } },
      { t: 'Realizar TAC Cerebral sin Contraste y PL posterior', s: 'Descartada masa o desviación de línea media: efectuar PL para confirmación microbiológica', type: 'dec', al: 'tras TAC', from: 'right' },
    ]),
    contexto: 'La meningitis aguda es una emergencia infectológica crítica. En el EUNACOM se evalúan dos principios inviolables: saber cuándo se debe solicitar TAC previo a la punción lumbar (sin postergar jamás los antibióticos) y dominar el perfil citoquímico del LCR para distinguir etiología bacteriana de viral.',
    contentSections: [
      {
        subhead: '1. Presentación Clínica y Fisiopatología',
        paragraphs: [
          'La infección subaracnoidea comunitaria se produce principalmente por <em>Streptococcus pneumoniae</em> y <em>Neisseria meningitidis</em>. La tríada clásica incluye <strong>fiebre, cefalea y rigidez de nuca</strong> (presente en < 50 % de casos; pero la ausencia de los 3 descarta prácticamente el cuadro).',
          'La respuesta inflamatoria masiva produce edema vasogénico, citotóxico e intersticial, con rápida elevación de la presión intracraneana y riesgo de isquemia cerebral.',
        ],
      },
      {
        subhead: '2. Banderas Rojas: Cuándo TAC Previo a Punción Lumbar',
        paragraphs: [
          'La <strong>Punción Lumbar (PL)</strong> es el estudio de elección, pero en presencia de efecto de masa puede provocar <strong>herniación cerebral fatal</strong>. Requieren TAC previo:',
          '• <strong>Déficit neurológico focal</strong> (paresia, asimetría facial, afasia).<br>' +
          '• <strong>Crisis convulsiva de reciente inicio</strong> (&lt; 1 semana).<br>' +
          '• <strong>Compromiso de conciencia profundo</strong> (Glasgow &lt; 10).<br>' +
          '• <strong>Papiledema</strong> en el fondo de ojo o <strong>inmunodepresión severa</strong> (VIH con CD4 bajo).',
          '<strong>Regla de oro:</strong> Si tiene indicación de TAC, <strong>NUNCA esperar la imagen para tratar</strong>: tomar hemocultivos, administrar Dexametasona + ATB empíricos EV de inmediato y luego trasladar a TAC.',
        ],
      },
      {
        subhead: '3. Tratamiento Antimicrobiano Empírico y Corticoides',
        paragraphs: [
          '<strong>Dexametasona EV (10 mg cada 6 h por 4 días):</strong> administrar 15–20 minutos ANTES o junto con la primera dosis de antibiótico. Reduce secuelas auditivas y mortalidad en meningitis por neumococo.',
          '<strong>Esquema estándar (3 meses a 50 años):</strong> <strong>Ceftriaxona 2 g cada 12 h EV + Vancomicina 15–20 mg/kg cada 12 h EV</strong>.',
          '<strong>Mayores de 50 años, embarazadas e inmunodeprimidos:</strong> <strong>AGREGAR Ampicilina 2 g cada 4 h EV</strong> para cubrir <em>Listeria monocytogenes</em> (intrínsecamente resistente a cefalosporinas).',
        ],
      },
      {
        subhead: '4. Diagnóstico Diferencial en Líquido Cefalorraquídeo',
        paragraphs: [
          'El análisis de LCR orienta la etiología: bacteriana aguda presenta <strong>pleocitosis con predominio PMN (> 80 %)</strong>, <strong>hipoglucorraquia marcada (ratio LCR/suero < 0.4)</strong> e hiperproteinorraquia severa (> 100–500 mg/dL). La etiología viral presenta predominio mononuclear con <strong>glucosa normal</strong>.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial del Citoquímico de Líquido Cefalorraquídeo',
      headers: ['Parámetro', 'Normal', 'Bacteriana Aguda', 'Viral (Aséptica)', 'Tuberculosa / Fúngica'],
      rows: [
        ['Presión apertura', '10–20 cm H2O', 'Elevada (> 25 cm H2O)', 'Normal o leve aumento', 'Marcadamente elevada (> 30)'],
        ['Leucocitos /mm³', '< 5', 'Muy alto (1.000–10.000+)', 'Moderado (50–500)', 'Moderado (100–500)'],
        ['Predominio celular', 'Mononucleares', 'Polimorfonucleares (> 80%)', 'Mononucleares / Linfocitos', 'Mononucleares / Linfocitos'],
        ['Glucosa (LCR/Suero)', '> 0.6 (> 60%)', 'Baja (< 0.4 / < 40 mg/dL)', 'Normal (> 0.6)', 'Muy baja (< 0.3)'],
        ['Proteínas', '< 45 mg/dL', 'Muy elevadas (> 100–500)', 'Leve aumento (50–100)', 'Muy elevadas (100–500+)'],
      ],
    },
    vignette: 'Mujer de 54 años consulta por 24 horas de cefalea holocraneana, fiebre de 39.2 °C, fotofobia y vómitos. Al examen: orientada parcialmente (Glasgow 14), sin focalidad neurológica, fondo de ojo normal, rigidez de nuca y Brudzinski positivos. PL inmediata: LCR turbio, presión 32 cm H2O, 4.200 leucocitos/mm³ con 92% PMN, glucosa LCR 18 mg/dL (glicemia sérica 110 mg/dL), proteínas 280 mg/dL.',
    explicacion: 'Meningitis bacteriana aguda típica por citoquímico (pleocitosis PMN > 80%, consumo severo de glucosa ratio < 0.4 e hiperproteinorraquia). Al ser mayor de 50 años, la cobertura empírica obligatoria debe incluir Ceftriaxona + Vancomicina + AMPICILINA EV (para cubrir Listeria monocytogenes) junto con Dexametasona EV precoz.',
    keyPoints: [
      'Tríada meníngea: fiebre + rigidez de nuca + alteración mental. La ausencia de los 3 descarta prácticamente el cuadro.',
      'Citoquímico bacteriano: PMN > 80 %, proteínas > 100 mg/dL y consumo severo de glucosa (ratio LCR/suero < 0.4).',
      'Citoquímico viral: predominio mononuclear/linfocítico con GLUCOSA NORMAL y proteínas levemente aumentadas.',
      'Banderas rojas para TAC previo a PL: focalidad neurológica, convulsión nueva, Glasgow < 10, papiledema e inmunodepresión.',
      'Si requiere TAC: administrar Dexametasona + ATB EV de inmediato antes del traslado, NUNCA demorarlos.',
      'En > 50 años, alcohólicos y embarazadas: agregar siempre AMPICILINA para cubrir Listeria monocytogenes.',
    ],
    questions: [
      {
        stem: 'Hombre de 58 años es traído a urgencias con fiebre de 39 °C, rigidez de nuca y sopor. Al examen se constata hemiparesia braquiocrural derecha leve y signo de Babinski ipsilateral. ¿Cuál es la conducta médica más adecuada a seguir?',
        options: [
          { id: 'A', text: 'Realizar punción lumbar de urgencia de inmediato y esperar el Gram para iniciar fármacos' },
          { id: 'B', text: 'Tomar hemocultivos, administrar dexametasona y antibióticos EV de inmediato, y luego solicitar TAC cerebral' },
          { id: 'C', text: 'Trasladar a TAC cerebral de inmediato sin administrar fármacos para no interferir con los cultivos' },
          { id: 'D', text: 'Iniciar infusión de manitol al 15% y diferir todo estudio invasivo por 24 horas' },
          { id: 'E', text: 'Administrar ceftriaxona en dosis única intramuscular y enviar a domicilio con control en 12 horas' },
        ],
        correcta: 'B',
        explicacion: 'La presencia de focalidad neurológica (hemiparesia y Babinski) es una contraindicación formal para la punción lumbar inmediata por riesgo inminente de herniación cerebral fatal. Sin embargo, la regla médica absoluta es que NUNCA se debe postergar el inicio de los antibióticos por la realización de neuroimágenes. La conducta exacta es tomar hemocultivos inmediatos, administrar la Dexametasona EV + Ceftriaxona + Vancomicina + Ampicilina (por ser > 50 años), y proceder de inmediato a la realización del TAC.',
        recTag: 'Banco de Preguntas Oficial · Meningitis Aguda Bacteriana y Viral',
      },
      {
        stem: 'Se recibe el informe del citoquímico de LCR de un joven de 21 años previamente sano con fiebre y rigidez de nuca: aspecto transparente, leucocitos 180/mm³ con 88% de mononucleares, glucosa en LCR 62 mg/dL (glicemia sérica simultánea 98 mg/dL) y proteínas 68 mg/dL. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Meningitis bacteriana por Streptococcus pneumoniae' },
          { id: 'B', text: 'Meningitis bacteriana por Listeria monocytogenes' },
          { id: 'C', text: 'Meningitis viral (aséptica)' },
          { id: 'D', text: 'Meningitis tuberculosa en fase avanzada' },
          { id: 'E', text: 'Meningitis fúngica por Cryptococcus neoformans' },
        ],
        correcta: 'C',
        explicacion: 'El perfil de LCR muestra pleocitosis moderada a expensas de mononucleares/linfocitos, con proteínas levemente aumentadas y GLUCOSA NORMAL (ratio LCR/suero > 0.6). Este patrón es característico de meningitis viral (etiología enterovirus la más frecuente en adultos jóvenes). La bacteriana (A, B) y la tuberculosa/fúngica (D, E) cursan con hipoglucorraquia marcada (consumo patológico de glucosa).',
        recTag: 'Banco de Preguntas Oficial · Meningitis Aguda Bacteriana y Viral',
      },
    ],
  },
  {
    id: 'inf-03',
    classId: 'infecto-03',
    tier: 3,
    blockNum: 1,
    blockName: 'Urgencias Críticas, Sepsis e Infecciones del SNC',
    topicLabel: '1.3',
    title: 'Encefalitis Aguda por VHS y Absceso Cerebral',
    perfilCode: '1.04.2.001, 1.04.2.002',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Infecciones del Sistema Nervioso Central',
    reconstrucciones: 'EUNACOM 2023 (Q#14) · EUNACOM 2021 (Q#92) · EUNACOM 2018 (Q#31)',
    frecuencia: 'Alta rentabilidad · preguntas clásicas sobre conducta empírica con Aciclovir y foco de absceso',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'La encefalitis aguda y el absceso cerebral son infecciones parenquimatosas del SNC con elevada morbimortalidad y secuelas neurocognitivas graves. En el EUNACOM se evalúa la distinción entre meningitis (afectación meníngea pura) y encefalitis (compromiso parenquimatoso con afasia, conducta bizarra y crisis focales), donde el Aciclovir empírico salva vidas.',
    contentSections: [
      {
        subhead: '1. Encefalitis herpética (VHS-1): patogenia y cuadro clínico',
        paragraphs: [
          'El <strong>Virus Herpes Simplex tipo 1 (VHS-1)</strong> es la causa más frecuente de encefalitis viral esporádica no epidémica en inmunocompetentes (> 90% de los casos). El virus accede al sistema nervioso central por transporte axonal retrógrado a través del nervio olfatorio o trigémino hacia las zonas basales del cerebro.',
          'Presenta un tropismo selectivo por las <strong>estructuras límbicas y los lóbulos temporales anteriores e inferiores</strong>, causando necrosis hemorrágica localizada, edema severo y gliosis reactiva.',
          '<strong>Clínica cardinal:</strong> a diferencia de la meningitis pura, la encefalitis se define por <strong>alteración de la función cerebral superior</strong>: cambios conductuales bizarros, alteraciones de memoria reciente, afasia de comprensión (compromiso del lóbulo temporal izquierdo dominante), alucinaciones olfatorias/gustativas y crisis convulsivas focales con o sin generalización secundaria.',
        ],
      },
      {
        subhead: '2. Diagnóstico y Tratamiento Empírico con Aciclovir',
        paragraphs: [
          '<strong>Resonancia Magnética (RMN) cerebral:</strong> es el examen de imagen de elección (muy superior a la TAC), demostrando hiperintensidad en secuencias T2 y FLAIR en los <strong>lóbulos temporales de forma asimétrica</strong> y corteza insular.',
          '<strong>Punción Lumbar y PCR:</strong> el LCR típicamente muestra pleocitosis linfocítica con <strong>eritrocitos o xantocromía</strong> (por la necrosis hemorrágica temporal). El diagnóstico de certeza se establece mediante <strong>PCR para VHS-1 en LCR</strong> (sensibilidad y especificidad > 95%).',
          '<strong>Conducta médica de primera línea:</strong> ante toda sospecha clínica de encefalitis, se debe iniciar de inmediato <strong>Aciclovir EV (10 mg/kg cada 8 horas por 14 a 21 días)</strong> sin esperar el resultado de la PCR. Cada hora de retraso empeora drásticamente el pronóstico neurológico definitivo.',
        ],
      },
      {
        subhead: '3. Absceso cerebral: focos primarios y triada clínica',
        paragraphs: [
          'El absceso cerebral es una infección focal supurada intraparenquimatosa. Se produce principalmente por tres mecanismos: (1) <strong>Contigüidad (50%):</strong> sinusitis frontal/etmoidal (absceso frontal), otitis media crónica o mastoiditis (absceso temporal o cerebeloso); (2) <strong>Diseminación hematógena (30%):</strong> cardiopatías congénitas cianóticas con cortocircuito derecha-izquierda, endocarditis bacteriana, bronquiectasias o fístulas arteriovenosas pulmonares; (3) <strong>Inoculación directa:</strong> traumatismo craneoencefálico penetrante o neurocirugía.',
          '<strong>Tríada clásica:</strong> cefalea persistente refractaria + fiebre (ausente en 50%) + déficit focal neurológico. La sospecha exige <strong>TAC o RMN con contraste</strong> que revela la clásica <strong>lesión en anillo con realce periférico</strong> y edema vasogénico perilesional.',
          '<strong>Tratamiento:</strong> Ceftriaxona 2g c/12h EV + Metronidazol 500mg c/8h EV (para anaerobios de foco ótico/sinusal) + Vancomicina si hay antecedente quirúrgico o trauma. Descompresión quirúrgica (aspiración estereotáxica o escisión) si mide > 2.5 cm.',
        ],
      },
    ],
    table: {
      title: 'Meningitis vs Encefalitis vs Absceso Cerebral: Diagnóstico Diferencial',
      headers: ['Característica', 'Meningitis Aguda', 'Encefalitis Herpética', 'Absceso Cerebral'],
      rows: [
        ['Compromiso cerebral', 'Ausente (conciencia clara o somnolencia)', 'Marcado (afasia, conducta bizarra, crisis)', 'Focalidad motora o sensitiva progresiva'],
        ['Signos meníngeos', 'Marcados (rigidez, Kernig, Brudzinski)', 'Ausentes o leves', 'Raros (salvo rotura intraventricular)'],
        ['Hallazgo en Imagen', 'Habitualmente normal (realce meníngeo)', 'Hiperintensidad temporal en RMN (FLAIR)', 'Lesión con captación en anillo y edema'],
        ['LCR patognomónico', 'Bacteriana: PMN + glucosa baja', 'Linfocitos + hematíes / PCR VHS (+)', 'PL contraindicada por riesgo de herniación'],
        ['Tratamiento de elección', 'Ceftriaxona + Vancomicina (± Ampicilina)', 'Aciclovir 10 mg/kg c/8h EV por 14-21 d', 'Ceftriaxona + Metronidazol + Cirugía'],
      ],
    },
    vignette: 'Hombre de 42 años sin antecedentes mórbidos es llevado a urgencias por sus familiares debido a cuadro de 3 días de fiebre leve, cefalea y conducta crecientemente inapropiada y desinhibida. La esposa relata que no comprende lo que se le dice y emite palabras incoherentes. Durante la evaluación médica presenta una crisis convulsiva tónico-clónica focalizada en brazo y hemicara derecha. Examen físico: T° 38.4 °C, sin rigidez de nuca franca, afasia sensitiva (de Wernicke) evidente.',
    explicacion: 'El cuadro de fiebre, cambios conductuales agudos, afasia sensitiva y crisis convulsivas focales de origen temporal es la presentación clásica de Encefalitis por Virus Herpes Simplex (VHS-1). La sospecha clínica obliga a hospitalizar en UTI e iniciar de inmediato Aciclovir por vía endovenosa (10 mg/kg cada 8 horas). No se debe esperar la confirmación por PCR en LCR ni el informe de la RMN para iniciar el antiviral, pues la letalidad sin tratamiento supera el 70% y la ventana terapéutica es muy estrecha.',
    keyPoints: [
      'Encefalitis = fiebre + alteración de funciones cerebrales superiores (afasia, delirio, conducta bizarra, crisis focales).',
      'Causa más frecuente y letal: Virus Herpes Simplex tipo 1 (VHS-1), con tropismo temporal y frontal basal.',
      'Examen de imagen más sensible: Resonancia Magnética (hiperintensidad temporal asimétrica en secuencias FLAIR).',
      'Test de confirmación: PCR para VHS en líquido cefalorraquídeo.',
      'Tratamiento de elección inmediato: Aciclovir 10 mg/kg cada 8 horas EV por 14 a 21 días.',
      'En absceso cerebral de origen ótico o sinusal: la combinación empírica es Ceftriaxona + Metronidazol (para anaerobios).',
    ],
    questions: [
      {
        stem: 'Una mujer de 35 años consulta por fiebre de 38.5 °C, cefalea y desorientación de 48 horas. Durante la anamnesis presenta alucinaciones olfatorias y afasia de comprensión. La TAC cerebral inicial sin contraste no muestra lesiones evidentes. ¿Cuál es la conducta terapéutica más adecuada?',
        options: [
          { id: 'A', text: 'Iniciar Aciclovir endovenoso de inmediato' },
          { id: 'B', text: 'Indicar tratamiento con Ceftriaxona y Vancomicina EV y observar' },
          { id: 'C', text: 'Esperar el resultado de la PCR viral en LCR antes de indicar antivirales' },
          { id: 'D', text: 'Iniciar Dexametasona oral y enviar a domicilio con reposo' },
          { id: 'E', text: 'Solicitar electroencefalograma ambulatorio para descartar pseudocrisis' },
        ],
        correcta: 'A',
        explicacion: 'La presencia de fiebre asociada a síntomas del lóbulo temporal (alucinaciones olfatorias, afasia de comprensión, desorientación) configura una alta sospecha de encefalitis herpética. La TAC cerebral puede ser completamente normal en las primeras 48 a 72 horas. La conducta inmediata y que no admite demora es el inicio de Aciclovir EV (10 mg/kg c/8h), el cual reduce la mortalidad de más de un 70% a menos del 20%.',
        recTag: 'Banco de Preguntas Oficial · Encefalitis Aguda por VHS y Absceso Cerebral',
      },
      {
        stem: '¿Cuál de los siguientes esquemas antibióticos empíricos es el de elección para el tratamiento de un absceso cerebral secundario a una otitis media crónica no complicada con neurocirugía previa?',
        options: [
          { id: 'A', text: 'Ceftriaxona + Metronidazol EV' },
          { id: 'B', text: 'Ciprofloxacino + Clindamicina oral' },
          { id: 'C', text: 'Vancomicina + Gentamicina EV' },
          { id: 'D', text: 'Ampicilina en monoterapia EV' },
          { id: 'E', text: 'Cefazolina + Dexametasona EV' },
        ],
        correcta: 'A',
        explicacion: 'Los abscesos cerebrales contiguos secundarios a sinusitis u otitis media crónica son provocados típicamente por flora mixta polimicrobiana: estreptococos aerobios y anaerobios de la cavidad oral/orofaríngea (Bacteroides, Fusobacterium, Peptostreptococcus). El esquema de elección es Ceftriaxona (cruza BHE con excelente cobertura para estreptococos) combinada con Metronidazol (excelente penetración en LCR y tejido necrótico contra anaerobios).',
        recTag: 'Banco de Preguntas Oficial · Encefalitis Aguda por VHS y Absceso Cerebral',
      },
    ],
  },
  {
    id: 'inf-04',
    classId: 'infecto-04',
    tier: 3,
    blockNum: 1,
    blockName: 'Urgencias Críticas, Sepsis e Infecciones del SNC',
    topicLabel: '1.4',
    title: 'Infecciones Invasivas de Partes Blandas y Angina de Ludwig',
    perfilCode: '1.04.2.004, 1.04.2.005',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Infecciones Graves de Cabeza, Cuello y Partes Blandas',
    reconstrucciones: 'EUNACOM 2024 (Q#89) · EUNACOM 2022 (Q#51) · EUNACOM 2019 (Q#72)',
    frecuencia: 'Alta rentabilidad · identificación de signos de fascitis necrotizante y manejo de vía aérea',
    svg: null, algoTitle: 'Algoritmo de Manejo Quirúrgico y Reanimación en Infecciones Necrotizantes',
    diagram: flow('Enfrentamiento de Infección Necrotizante y Angina de Ludwig', [
      { t: 'Sospecha de Infección Necrotizante o Angina de Ludwig', s: 'Dolor desproporcionado · Flictenas hemorrágicas · Gas subcutáneo · Estridor/trismus' },
      { k: 'split', q: '¿Presenta Signos Duros de Necrosis o Compromiso de Vía Aérea?', s: 'Crepitación | Anestesia focal | Shock séptico | Elevación piso de boca', ll: 'sí (emergencia quirúrgica)', rl: 'no (infección simple)',
        left: { t: 'Pabellón Quirúrgico Inmediato + Desbridamiento', s: 'Cirugía de urgencia sin diferir por imágenes · En Ludwig: vía aérea prioritaria', type: 'crit' },
        right: { t: 'Cefazolina o Cloxacilina EV', s: 'Delimitar eritema con marcador y reevaluar en 12–24 horas', type: 'acc' } },
      { t: 'Tríada EV Empírica: Meropenem + Vancomicina + Clindamicina', s: 'Clindamicina obligatoria: inhibe síntesis de exotoxinas pirogénicas (efecto Eagle)', type: 'warn', al: 'anti-toxina', from: 'left' },
    ]),
    contexto: 'Las infecciones necrotizantes de partes blandas y la angina de Ludwig son emergencias quirúrgicas con altísima letalidad. El EUNACOM evalúa dos conceptos cardinales: el reconocimiento precoz del dolor desproporcionado a la inspección y la indicación indiscutible de exploración quirúrgica inmediata sin perder tiempo en imágenes.',
    contentSections: [
      {
        subhead: '1. Fascitis Necrotizante: Tipos Microbiológicos',
        paragraphs: [
          'La fascitis necrotizante es una infección rápidamente destructiva que afecta la fascia profunda y el tejido subcutáneo con trombosis microvascular secundaria.',
          'Se clasifica en: <strong>Tipo I (Polimicrobiana - 80%)</strong>, mezcla de anaerobios (<em>Bacteroides</em>) con enterobacterias y estreptococos en diabéticos o tras cirugía perineal (<strong>Gangrena de Fournier</strong>); y <strong>Tipo II (Monomicrobiana - 20%)</strong>, por <em>Streptococcus pyogenes</em> en pacientes jóvenes tras traumatismos menores o varicela.',
        ],
      },
      {
        subhead: '2. Signos Clínicos Cardinales y Diagnóstico',
        paragraphs: [
          'El signo más precoz es el <strong>dolor desproporcionado a los hallazgos físicos iniciales</strong>: la piel parece solo eritematosa pero el dolor es intolerable y sobrepasa los márgenes visibles.',
          '<strong>Signos duros de necrosis:</strong> flictenas con contenido serohemático, <strong>crepitación</strong> a la palpación (gas tisular por anaerobios), <strong>anestesia cutánea focal</strong> (por necrosis de nervios dérmicos) y shock séptico fulminante con acidosis y lactato elevado.',
        ],
      },
      {
        subhead: '3. Angina de Ludwig y Pilares Terapéuticos',
        paragraphs: [
          'La <strong>Angina de Ludwig</strong> es una celulitis gangrenosa bilateral de los espacios submandibular y sublingual, originada en el 80% de los casos por infección de <strong>2° o 3° molares inferiores</strong>. Cursa con trismus, lengua protruida y estridor: el riesgo inminente es la asfixia.',
          '<strong>Manejo de urgencia:</strong> 1) Asegurar vía aérea en Ludwig (intubación con fibra óptica o traqueostomía); 2) <strong>Aseo quirúrgico y fasciotomía urgente</strong> (no diferir por TAC ni RMN); 3) Terapia EV: <strong>Meropenem + Vancomicina + Clindamicina</strong> (la clindamicina bloquea la producción de toxinas estreptocócicas).',
        ],
      },
    ],
    table: {
      title: 'Celulitis Simple vs Infección Necrotizante de Partes Blandas',
      headers: ['Característica', 'Celulitis / Erisipela', 'Fascitis Necrotizante'],
      rows: [
        ['Dolor y clínica', 'Proporcional al eritema visible', 'Severo, lacerante y desproporcionado al examen'],
        ['Signos locales críticos', 'Calor, rubor y edema con fóvea', 'Flictenas hemorrágicas, crepitación, anestesia focal'],
        ['Compromiso sistémico', 'Fiebre moderada, hemodinamia estable', 'Shock séptico, lactato elevado, falla multiorgánica'],
        ['Conducta de elección', 'Antibióticos orales o EV en sala', 'Pabellón urgente + desbridamiento amplio + clindamicina'],
      ],
    },
    vignette: 'Hombre de 56 años con diabetes mellitus tipo 2 mal controlada consulta por aumento de volumen doloroso en pierna izquierda de 24 horas de evolución posterior a una herida cortante menor en el pie. Al examen: T° 38.8 °C, PA 85/55 mmHg, FC 126 lpm. En tercio medio de pierna se observa eritema mal delimitado con edema tenso. A la palpación el dolor es insoportable; se aprecian dos flictenas con líquido serosanguinolento y se palpa crepitación fina en el tejido celular subcutáneo. Exámenes: leucocitos 24.000/mm³, PCR 320 mg/L, sodio plasmático 128 mEq/L, lactato 4.8 mmol/L.',
    explicacion: 'El paciente presenta una fascitis necrotizante (infección invasiva de partes blandas con shock séptico en paciente diabético). La presencia de dolor desproporcionado, flictenas hemorrágicas, crepitación subcutánea y compromiso hemodinámico con hiperlactatemia e hiponatremia (Score LRINEC > 8) confirman la sospecha diagnóstica. La conducta médica inmediata que define la sobrevida del paciente es el traslado urgente a pabellón para exploración quirúrgica y desbridamiento tisular extenso de todo el tejido necrótico, junto con resucitación hemodinámica y triterapia antibiótica con Meropenem + Vancomicina + Clindamicina.',
    keyPoints: [
      'El signo de sospecha más precoz de fascitis necrotizante es el DOLOR DESPROPORCIONADO al aspecto externo de la piel.',
      'Signos duros que confirman necrosis: flictenas serohemáticas, crepitación (gas tisular), anestesia cutánea focal y toxicidad sistémica.',
      'La exploración quirúrgica en pabellón con desbridamiento de urgencia es la medida terapéutica que define la sobrevida.',
      'NUNCA solicitar resonancia o TAC para confirmar la sospecha si ello demora la entrada a pabellón quirúrgico.',
      'Antibioticoterapia de elección: Meropenem + Vancomicina + Clindamicina (la clindamicina bloquea la síntesis de toxinas pirogénicas).',
      'Angina de Ludwig: celulitis bilateral submandibular/sublingual de origen dental; prioridad número 1 es asegurar la vía aérea.',
    ],
    questions: [
      {
        stem: 'Un paciente diabético de 52 años es evaluado en el box de reanimación por una lesión eritematosa en el muslo derecho con marcado edema y dolor intenso. A la palpación se detecta crepitación subcutánea y se aprecian flictenas hemorrágicas en el centro de la lesión. El paciente se encuentra febril (39 °C) e hipotenso (PA 80/50 mmHg). ¿Cuál es la conducta prioritaria en este momento?',
        options: [
          { id: 'A', text: 'Solicitar resonancia magnética nuclear urgente del muslo para evaluar la profundidad del compromiso' },
          { id: 'B', text: 'Trasladar de inmediato a pabellón para exploración y desbridamiento quirúrgico extenso' },
          { id: 'C', text: 'Iniciar Cloxacilina 2 g EV y reevaluar los límites del eritema en 12 horas' },
          { id: 'D', text: 'Realizar punción aspirativa con aguja fina en la zona crepitante para cultivo y esperar resultado' },
          { id: 'E', text: 'Administrar corticoides endovenosos a dosis altas para reducir el edema de partes blandas' },
        ],
        correcta: 'B',
        explicacion: 'La presencia de flictenas hemorrágicas, crepitación y shock séptico en una infección de partes blandas es diagnóstica de fascitis necrotizante. La mortalidad se incrementa drásticamente por cada hora de demora quirúrgica. Ningún examen de imagen (A) ni procedimiento diagnóstico menor (D) debe retrasar el ingreso a pabellón. El tratamiento es quirúrgico inmediato (desbridamiento amplio de toda la fascia desvitalizada) asociado a reanimación y antibióticos EV de amplio espectro.',
        recTag: 'Banco de Preguntas Oficial · Infecciones Invasivas de Partes Blandas y Angina de Ludwig',
      },
      {
        stem: 'Un paciente de 38 años consulta por aumento de volumen doloroso cervical anterior y submandibular de 48 horas de evolución, posterior a la extracción del tercer molar inferior izquierdo. Al examen se observa cuello en embudo, elevación de la lengua contra el paladar duro, trismus moderado, voz engolada y estridor inspiratorio intermitente. ¿Cuál es la prioridad médica inmediata?',
        options: [
          { id: 'A', text: 'Asegurar la vía aérea de forma inmediata mediante intubación guiada o traqueostomía' },
          { id: 'B', text: 'Solicitar TAC de cuello con contraste para drenaje percutáneo' },
          { id: 'C', text: 'Administrar antibióticos orales con Amoxicilina/Clavulánico y analgesia' },
          { id: 'D', text: 'Realizar laringoscopía indirecta con espejo en el box dental' },
          { id: 'E', text: 'Indicar nebulizaciones con adrenalina racémica y hospitalizar en sala básica' },
        ],
        correcta: 'A',
        explicacion: 'El cuadro corresponde a una Angina de Ludwig con signos inminentes de compromiso obstructivo de la vía aérea (estridor inspiratorio, protrusión lingual, cuello en embudo). La causa número uno de muerte en esta patología es la asfixia por colapso de la hipofaringe. La prioridad médica absoluta antes de cualquier estudio radiológico o intervención quirúrgica del foco es el aseguramiento de la vía aérea mediante intubación con fibra óptica o traqueostomía de urgencia.',
        recTag: 'Banco de Preguntas Oficial · Infecciones Invasivas de Partes Blandas y Angina de Ludwig',
      },
    ],
  },
];

module.exports = { bloque1, flow };
