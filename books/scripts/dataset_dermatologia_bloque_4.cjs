/**
 * TOMO 16 · DERMATOLOGÍA — BLOQUE 04: Oncología Cutánea, Lesiones Premalignas & Infecciones Cutáneas
 * Clases 16.13 a 16.16 · Editorial EUNACOM 2026 · Color #a21caf
 */

function flow(title, rows, customColor = '#a21caf') {
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
    const bent = (from === 'left' ? [prev.xs[0]] : from === 'right' ? [prev.xs[prev.xs.length - 1]] : prev.xs).some(x => x !== CX); const ty = y + GAP + (bent && label ? 12 : 0); // rótulo bajo el tramo horizontal, no encima de la línea
    const xs = from === 'left' ? [prev.xs[0]] : from === 'right' ? [prev.xs[prev.xs.length - 1]] : prev.xs;
    xs.forEach(x => {
      P.push(x === CX
        ? `<path class="ln" d="M${CX},${prev.y} V${ty}"/>`
        : `<path class="ln" d="M${x},${prev.y} V${prev.y + 10} H${CX} V${ty}"/>`);
    });
    if (label) P.push(`<text class="sub" x="${CX + 7}" y="${bent ? prev.y + 22 : prev.y + GAP / 2 + 3}">${esc(label)}</text>`);
    y = ty;
  }
  rows = (rs => { const out = []; let pend = null; for (let r of rs) { const subs = [].concat(r && r.s || []).filter(Boolean); if (r && r.k !== 'split' && !r.t && !r.q && !subs.length) { if (r.al || r.from) pend = { al: r.al, from: r.from }; continue; } if (pend) { r = { ...r, al: r.al || pend.al, from: r.from || pend.from }; pend = null; } out.push(r); } return out; })(rows); // filas solo-rótulo → rótulo de la flecha siguiente (sin caja vacía)
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
  <defs><marker id="ar_derma" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${customColor}"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:${customColor};font-weight:700}
    .acc{fill:${customColor};stroke:#701a75}.accT{fill:#fff}.accS{font-size:8px;fill:#fae8ff}
    .dec{fill:#fdf4ff;stroke:#f0abfc;stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}
    .ln{stroke:${customColor};stroke-width:1.2;fill:none;marker-end:url(#ar_derma)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg, toString() { return this.svg; } };
}

const bloque4 = [
  // ==========================================================================
  // TEMA 16.13: MELANOMA MALIGNO (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'derma-13',
    classId: 'derma-13',
    tier: 3,
    blockNum: 4,
    blockName: 'Oncología Cutánea, Lesiones Premalignas & Infecciones Cutáneas',
    topicLabel: '16.13',
    title: 'Melanoma Maligno: Regla ABCDE, Biopsia Excisional, Índice de Breslow y Márgenes Quirúrgicos',
    perfilCode: '1.09.1.006',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Cáncer de Piel en personas de 15 años y más · Notificación Obligatoria.',
    reconstrucciones: 'EUNACOM Diciembre 2023 (Q#15) · EUNACOM Julio 2022 (Q#82) · EUNACOM Enero 2021 (Q#45)',
    frecuencia: 'Muy Alta en EUNACOM · Preguntas clave sobre técnica de biopsia diagnóstica e índice pronóstico',
    diagram: flow('Algoritmo Diagnóstico y Manejo Quirúrgico del Melanoma Maligno', [
      { t: 'Lesión Pigmentada Sospechosa: Evaluación con Regla ABCDE y Dermatoscopía', s: 'Asimetría, Bordes irregulares, Color heterogéneo, Diámetro > 6 mm, Evolución dinámica', type: 'warn' },
      { k: 'split', q: '¿Conducta Diagnóstica Inicial ante Sospecha de Melanoma?', s: 'Técnica de biopsia obligatoria según Guía Clínica MINSAL',
        ll: 'BIOPSIA EXCISIONAL COMPLETA (Estándar de Oro)',
        left: { t: 'Extirpación Total con Margen Estrecho (1-2 mm)', s: 'Incluye tejido celular subcutáneo · Permite medir el espesor microtumoral de Breslow exacto', type: 'acc' },
        rl: 'BIOPSIA INCISIONAL / PUNCH / SHAVE',
        right: { t: '¡CONTRAINDICADAS DE ENTRADA!', s: 'Subestiman el espesor de Breslow y arriesgan subetapificación (solo en cara o lesiones gigantes)', type: 'crit' }
      },
      { t: 'Estratificación según Espesor Tumoral de Breslow (mm)', s: 'Breslow ≤ 0.8 mm (in situ / fino) vs > 0.8 mm (ulcerado o grueso: biopsia de ganglio centinela)', type: 'dec' },
      { t: 'Ampliación Definitiva de Márgenes según Breslow', s: 'In situ: 5 mm · ≤ 1.0 mm: 1 cm · 1.01-2.0 mm: 1-2 cm · > 2.0 mm: 2 cm de margen tridimensional', type: 'acc' }
    ]),
    contexto: 'El melanoma maligno es el tumor cutáneo con mayor letalidad por su elevado potencial metastásico precoz. En el EUNACOM se evalúan con absoluta certeza tres conceptos fundamentales: 1) la regla del ABCDE para la sospecha clínica; 2) la técnica de biopsia adecuada, que DEBE SER EXCISIONAL COMPLETA con margen mínimo de 1 a 2 mm incluyendo hipodermis (la biopsia por afeitado/shave o punch está formalmente contraindicada porque mutila la medición del espesor); y 3) el Índice de Breslow (profundidad de invasión en milímetros medido desde la capa granulosa), que es el factor pronóstico individual más importante y determina la ampliación definitiva de márgenes quirúrgicos y la indicación de biopsia de ganglio centinela.',
    contentSections: [
      {
        subhead: '1. Factores de Riesgo, Sospecha Clínica y Regla del ABCDE',
        paragraphs: [
          '• <strong>Factores de Riesgo:</strong> Exposición solar ultravioleta intermitente e intensa con quemaduras solares en la infancia/adolescencia, fototipo cutáneo claro (Fitzpatrick I y II: ojos claros, pelo rubio o pelirrojo, pecas), presencia de > 50-100 nevos melanocíticos comunes, presencia de nevos displásicos/atípicos, historia personal o familiar de melanoma (mutaciones en CDKN2A/p16).',
          '• <strong>Regla del ABCDE de la Lesión Pigmentada:</strong>',
          '  - <strong>A (Asimetría):</strong> Al trazar una línea imaginaria por el centro, las dos mitades no coinciden en forma.',
          '  - <strong>B (Bordes):</strong> Bordes irregulares, festoneados, recortados, dentados o mal definidos.',
          '  - <strong>C (Color):</strong> Variación heterogénea de color en la misma lesión (marrón oscuro, negro, azulado, blanco o rojo).',
          '  - <strong>D (Diámetro):</strong> Mayor a 6 mm (aproximadamente el borrador de un lápiz), aunque melanomas iniciales pueden ser menores.',
          '  - <strong>E (Evolución):</strong> El criterio más sensible. Cualquier cambio dinámico de tamaño, forma, color, elevación, prurito o sangrado espontáneo en un nevo previo, o la aparición de una lesión nueva de novo en adultos ("signo del patito feo").'
        ]
      },
      {
        subhead: '2. Subtipos Clínico-Patológicos Principales',
        paragraphs: [
          '• <strong>Melanoma de Extensión Superficial (70%):</strong> Es el subtipo más frecuente en caucásicos. Se presenta en tronco en hombres y piernas en mujeres. Fase de crecimiento radial intraepidérmico prolongada antes de invadir la dermis.',
          '• <strong>Melanoma Nodular (15%):</strong> El subtipo más agresivo. Fase de crecimiento vertical rápida desde el inicio, sin fase radial. Nódulo cupuliforme negro-azulado, sangrante o ulcerado. Elevado espesor de Breslow al diagnóstico.',
          '• <strong>Léntigo Maligno Melanoma (10%):</strong> En zonas fotoexpuestas crónicas (cara, cuello) de ancianos. Precedido por léntigo maligno in situ ("peca de Hutchinson") de evolución lenta durante décadas.',
          '• <strong>Melanoma Lentiginoso Acral (5% en caucásicos, pero > 50% en poblaciones mestizas y chilenas):</strong> Localizado en palmas, plantas y lechos ungueales (melanoniquia longitudinal con signo de Hutchinson: pigmento que compromete el pliegue ungueal cutáneo). <strong>NO se relaciona con exposición solar.</strong>'
        ]
      },
      {
        subhead: '3. Diagnóstico y Conducta Quirúrgica Escalonada',
        paragraphs: [
          '• <strong>TÉCNICA DE BIOPSIA DE ELECCIÓN:</strong> <strong>Biopsia excisional completa</strong> con margen estrecho de 1 a 2 mm de piel sana y con profundidad que incluya todo el tejido celular subcutáneo. Está terminantemente contraindicada la biopsia por rasurado (shave) o sacabocados (punch) superficial, ya que amputa la base del tumor y hace imposible medir el espesor de Breslow real.',
          '• <strong>Índice de Breslow:</strong> Medición histológica exacta en milímetros desde la capa granulosa de la epidermis hasta la célula tumoral más profunda en la dermis/hipodermis.',
          '• <strong>Ampliación Quirúrgica Definitiva según Breslow:</strong>',
          '  - <em>Melanoma in situ:</em> Margen de 0.5 cm (5 mm).',
          '  - <em>Breslow ≤ 1.0 mm:</em> Margen de 1.0 cm.',
          '  - <em>Breslow 1.01 a 2.0 mm:</em> Margen de 1.0 a 2.0 cm.',
          '  - <em>Breslow > 2.0 mm:</em> Margen de 2.0 cm.',
          '• <strong>Biopsia de Ganglio Centinela:</strong> Indicada en todo melanoma con <strong>Breslow > 0.8 mm</strong> (o Breslow < 0.8 mm con ulceración histológica o mitosis elevadas) en ausencia de adenopatías clínicas palpables.'
        ]
      },
      {
        subhead: "4. Dermatoscopía: Herramienta de Apoyo en el Diagnóstico de Lesiones Pigmentadas",
        paragraphs: [
          "La <strong>dermatoscopía</strong> es la observación de la lesión con un dermatoscopio (luz polarizada y aumento de 10 veces) que muestra estructuras bajo la epidermis; aumenta la sensibilidad para detectar melanoma y evita biopsias innecesarias. El médico general <strong>emplea el informe</strong>: lo lee y decide conducta, sin reemplazar la biopsia. Los hallazgos de las lesiones benignas son retículo pigmentado regular, patrón globular o empedrado, color homogéneo y simetría. Los <strong>hallazgos de alarma de melanoma</strong> son: red pigmentada atípica o irregular, estrías o pseudópodos irregulares, <strong>velo azul blanquecino</strong>, <strong>estructuras de regresión</strong> (áreas blancas cicatriciales y puntos azul-grisáceos), glóbulos y puntos irregulares y vasos atípicos; se usan algoritmos como el análisis de patrones, la regla ABCD dermatoscópica y la <strong>lista de 7 puntos de Argenziano</strong>, y el signo del «patito feo» (la lesión que no se parece a las demás del paciente). Otras lesiones tienen patrones propios: el carcinoma basocelular muestra <strong>vasos arboriformes</strong>, ulceración y glóbulos azul-grisáceos; la queratosis seborreica, aperturas tipo comedón, quistes tipo milia y aspecto cerebriforme; el dermatofibroma, una red periférica delicada con centro blanco cicatricial. Conducta: dermatoscopía sospechosa de melanoma se resuelve con <strong>biopsia excisional con margen de 1 a 3 mm y derivación</strong> (véase sección 3); las lesiones benignas se siguen con fotografía y dermatoscopía digital, y en pacientes de alto riesgo (más de 50 nevos, antecedente familiar o personal de melanoma) se hace mapeo corporal total."
        ]
      }
    ],
    table: {
      title: 'Subtipos de Melanoma Maligno y Correlación Clínico-Patológica',
      headers: ['Subtipo', 'Frecuencia Global / Chile', 'Localización Típica', 'Fase de Crecimiento', 'Características Distintivas'],
      rows: [
        ['Extensión Superficial', '70% caucásicos', 'Espalda (hombres), Piernas (mujeres)', 'Radial prolongada antes de vertical', 'Mácula/placa policromática asimétrica; el más frecuente'],
        ['Nodular', '15%', 'Cualquier zona anatómica', 'Vertical pura desde el inicio', 'Nódulo azul-negro cupuliforme, muy agresivo, Breslow alto'],
        ['Léntigo Maligno Melanoma', '10%', 'Cara, mejillas, nariz en ancianos', 'Radial muy lenta (años/décadas)', 'Asociado a daño solar crónico continuo (peca de Hutchinson)'],
        ['Lentiginoso Acral', '5% caucásicos (>50% en Chile/latino)', 'Palmas, plantas, subungueal', 'Radial y vertical', 'No UV-dependiente; Signo de Hutchinson periungueal']
      ]
    },
    severityTable: {
      title: 'Estratificación según Índice de Breslow y Márgenes Quirúrgicos Definitivos',
      headers: ['Espesor de Breslow (mm)', 'Estadio T', 'Margen Quirúrgico Definitivo', 'Biopsia de Ganglio Centinela', 'Sobrevida a 5 Años'],
      rows: [
        ['In situ (Tis)', 'Tis', '0.5 cm (5 mm)', 'No indicada', '> 99%'],
        ['≤ 1.00 mm', 'T1 (a: <0.8 s/ulc; b: 0.8-1.0 o c/ulc)', '1.0 cm', 'Indicada si > 0.8 mm o con ulceración', '95 - 98%'],
        ['1.01 - 2.00 mm', 'T2 (a: sin ulc; b: con ulc)', '1.0 - 2.0 cm', 'Indicada siempre', '85 - 90%'],
        ['2.01 - 4.00 mm', 'T3 (a: sin ulc; b: con ulc)', '2.0 cm', 'Indicada siempre', '65 - 75%'],
        ['> 4.00 mm', 'T4 (a: sin ulc; b: con ulc)', '2.0 cm', 'Indicada + Estudio de diseminación', '50%']
      ]
    },
    treatmentTable: {
      title: 'Manejo Médico y Quirúrgico Integral del Melanoma Maligno (GES)',
      headers: ['Escenario Clínico', 'Intervención Primaria', 'Estudio de Etapificación', 'Terapia Adyuvante / Sistémica'],
      rows: [
        ['Lesión Sospechosa Inicial', 'Biopsia excisional completa con margen 1-2 mm', 'Dermatoscopía digital + estudio histopatológico', 'No aplica'],
        ['Melanoma Localizado (T1-T4 N0)', 'Ampliación de márgenes (1 a 2 cm) + Ganglio Centinela', 'TAC tórax-abdomen-pelvis o PET-CT si T3-T4', 'Interferón-alfa (histórico) o seguimiento estrecho'],
        ['Compromiso Ganglionar (N+)', 'Linfadenectomía regional terapéutica si macroscópico', 'PET-CT o RMN cerebral + TAC TAP', 'Inmunoterapia (Nivolumab / Pembrolizumab) o Terapia dirigida'],
        ['Melanoma Metastásico (Estadio IV)', 'Manejo oncológico sistémico según mutación BRAF V600E', 'RMN cerebral + PET-CT completo', 'Inhibidores BRAF/MEK (Dabrafenib+Trametinib) o anti-PD-1']
      ]
    },
    vignette: 'Hombre de 52 años, agricultor, consulta por la aparición de una lesión pigmentada en la región interescapular de 8 meses de evolución, que ha presentado crecimiento progresivo y picazón ocasional. Al examen dermatológico se observa una lesión macular de 9 mm de diámetro mayor, francamente asimétrica, con bordes dentados e irregulares y múltiples tonalidades de color marrón oscuro, negro y áreas azuladas centrales. No se palpan adenopatías en las cadenas ganglionares axilares ni cervicales.',
    explicacion: 'La lesión reúne todos los criterios de sospecha de melanoma maligno según la regla del ABCDE (Asimétrica, Bordes irregulares, Color policromático, Diámetro > 6 mm, Evolución dinámica). De acuerdo con las guías clínicas ministeriales e internacionales, la conducta diagnóstica de elección obligatoria es realizar una biopsia excisional completa con 1 a 2 mm de margen de piel sana, incluyendo tejido celular subcutáneo en profundidad, para confirmar el diagnóstico y permitir al patólogo medir con exactitud el espesor de Breslow.',
    keyPoints: [
      "La regla del ABCDE (Asimetría, Bordes, Color heterogéneo, Diámetro > 6 mm, Evolución) es la herramienta clínica de tamizaje cardinal para melanoma.",
      "La biopsia de elección de toda lesión sospechosa de melanoma es la BIOPSIA EXCISIONAL COMPLETA con margen estrecho de 1 a 2 mm e hipodermis.",
      "Las biopsias por rasurado (shave) o punch están contraindicadas porque mutilan la muestra e impiden medir con exactitud el espesor de Breslow.",
      "El Índice de Breslow (espesor tumoral en milímetros) es el factor pronóstico individual más importante para el melanoma localizado.",
      "El margen de ampliación quirúrgica definitiva se define según el Breslow: in situ (0.5 cm), ≤ 1 mm (1 cm), 1-2 mm (1-2 cm), > 2 mm (2 cm).",
      "La biopsia de ganglio centinela está formalmente indicada en todo melanoma con espesor de Breslow > 0.8 mm (o < 0.8 mm con ulceración)."
    ],
    questions: [
      {
        stem: 'Un hombre de 46 años consulta por un nevo en la espalda que ha cambiado de color y aumentado de tamaño en los últimos 4 meses. Al examen se observa una lesión macular asimétrica de 8 mm con bordes irregulares y tres colores distintos (café claro, negro y grisáceo). ¿Cuál es la conducta diagnóstica de elección?',
        options: [
          { id: 'A', text: 'Cauterización con nitrógeno líquido (crioterapia) en la consulta' },
          { id: 'B', text: 'Biopsia excisional completa con 1 a 2 mm de margen lateral y celular subcutáneo' },
          { id: 'C', text: 'Biopsia por afeitado (shave) superficial para no dejar cicatriz antiestética' },
          { id: 'D', text: 'Biopsia por sacabocados (punch) de 2 mm tomada del centro más pigmentado de la lesión' },
          { id: 'E', text: 'Control fotográfico digital seriado cada 3 meses' }
        ],
        correcta: 'B',
        explicacion: 'Ante una lesión con sospecha clínica de melanoma maligno, el estándar de oro diagnóstico es la biopsia excisional completa con márgenes estrechos de 1 a 2 mm y en toda la profundidad del tejido celular subcutáneo. Esta técnica permite la extirpación diagnóstica íntegra y asegura la medición histológica fidedigna del espesor de Breslow, sin desestructurar la arquitectura de la lesión.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.006'
      },
      {
        stem: 'El informe histopatológico de una biopsia excisional de una lesión cutánea en la pierna de una mujer de 38 años concluye: "Melanoma maligno de extensión superficial, espesor de Breslow de 0.6 mm, sin ulceración, márgenes de resección libres a 1 mm". ¿Cuál es la conducta terapéutica definitiva más apropiada?',
        options: [
          { id: 'A', text: 'No realizar ningún procedimiento adicional dado que los márgenes de la biopsia estaban libres' },
          { id: 'B', text: 'Ampliación quirúrgica de márgenes a 1 cm de tejido sano, sin necesidad de biopsia de ganglio centinela' },
          { id: 'C', text: 'Ampliación quirúrgica de márgenes a 2 cm más biopsia de ganglio centinela obligatoria' },
          { id: 'D', text: 'Iniciar quimioterapia adyuvante con dacarbazina por 6 ciclos' },
          { id: 'E', text: 'Radioterapia local fraccionada sobre el lecho de la cicatriz' }
        ],
        correcta: 'B',
        explicacion: 'En un melanoma con espesor de Breslow ≤ 1.0 mm (en este caso 0.6 mm) sin ulceración histológica (T1a), el margen quirúrgico definitivo recomendado por todas las guías internacionales es de 1.0 cm de piel sana tridimensional. Dado que el Breslow es < 0.8 mm y no presenta factores de mal pronóstico (sin ulceración), NO está indicada la biopsia de ganglio centinela.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.006'
      },
      {
        stem: '¿Cuál de los siguientes subtipos clínico-patológicos de melanoma maligno se caracteriza por no estar relacionado con la exposición a radiación ultravioleta y ser el subtipo proporcionalmente más común en poblaciones hispanoamericanas y de etnia no caucásica?',
        options: [
          { id: 'A', text: 'Melanoma de extensión superficial' },
          { id: 'B', text: 'Melanoma nodular' },
          { id: 'C', text: 'Léntigo maligno melanoma' },
          { id: 'D', text: 'Melanoma lentiginoso acral' },
          { id: 'E', text: 'Melanoma desmoplásico' }
        ],
        correcta: 'D',
        explicacion: 'El melanoma lentiginoso acral se localiza en palmas, plantas y lechos ungueales (subungueal). A diferencia de los otros subtipos, su patogenia no depende de la exposición a la radiación solar ultravioleta. Aunque en personas caucásicas solo representa el 5% de los melanomas, en poblaciones chilenas, hispanoamericanas, asiáticas y afrodescendientes constituye entre el 40% y el 60% de los casos.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.006'
      },
      {
        stem: 'En el informe histológico de un melanoma maligno, ¿cuál es el factor pronóstico individual más importante para determinar el riesgo de metástasis y la sobrevida en estadios clínicos iniciales?',
        options: [
          { id: 'A', text: 'El diámetro clínico mayor de la lesión' },
          { id: 'B', text: 'El nivel de invasión anatómica de Clark' },
          { id: 'C', text: 'El espesor tumoral microtumoral medido en milímetros según el Índice de Breslow' },
          { id: 'D', text: 'La intensidad de la pigmentación melánica tumoral' },
          { id: 'E', text: 'La presencia de infiltrado inflamatorio perilesional' }
        ],
        correcta: 'C',
        explicacion: 'El espesor tumoral según el Índice de Breslow (medido micrométricamente en milímetros desde la capa granulosa de la epidermis hasta la célula tumoral más profunda) es el factor pronóstico independiente más potente y validado en el melanoma primario. Ha sustituido completamente a los niveles de Clark en la etapificación oficial AJCC.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.09.1.006'
      }
    ]
  },

  // ==========================================================================
  // TEMA 16.14: CARCINOMAS CUTÁNEOS NO MELANOMA (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'derma-14',
    classId: 'derma-14',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncología Cutánea, Lesiones Premalignas & Infecciones Cutáneas',
    topicLabel: '16.14',
    title: 'Carcinomas Cutáneos No Melanoma: Carcinoma Basocelular (CBC) vs Carcinoma Espinocelular (CEC)',
    perfilCode: '1.08.1.001',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Cáncer de Piel en personas de 15 años y más.',
    reconstrucciones: 'EUNACOM Julio 2024 (Q#64) · EUNACOM Diciembre 2022 (Q#33) · EUNACOM Enero 2021 (Q#98)',
    frecuencia: 'Muy Alta en EUNACOM · Diagnóstico diferencial semiológico entre CBC (perlado) y CEC (queratósico)',
    diagram: flow('Diagnóstico Diferencial entre Carcinoma Basocelular y Espinocelular', [
      { t: 'Tumor Cutáneo Maligno No Melanoma en Zona Fotoexpuesta (Cara, Cuello, Manos)', s: 'Cáncer humano más común en todo el mundo · Fuerte asociación con daño solar acumulativo', type: 'warn' },
      { k: 'split', q: '¿Morfología Semiológica y Biología Tumoral Predominante?', s: 'Diferenciación cardinal CBC vs CEC',
        ll: 'CARCINOMA BASOCELULAR (CBC · 80%)',
        left: { t: 'Pápula perlada translúcida con telangiectasias', s: 'Bordes arrollados · Crecimiento lento · Invasión local destructiva (úlcera de Rodent) · METÁSTASIS EXCEPCIONALES (<0.01%)', type: 'acc' },
        rl: 'CARCINOMA ESPINOCELULAR (CEC · 20%)',
        right: { t: 'Placa o nódulo queratósico, costroso o ulcerado', s: 'Sobre queratosis actínica previa · Puede originarse en mucosas/labio · RIESGO DE METÁSTASIS GANGLIONAR (2-5%)', type: 'crit' }
      },
      { t: 'Confirmación Histopatológica de Elección', s: 'Biopsia por afeitado (shave) o sacabocados (punch) / excisional · Biopsia diferida', type: 'dec' },
      { t: 'Tratamiento Estándar Curativo', s: 'Extirpación quirúrgica con márgenes de 4-5 mm · Cirugía micrográfica de Mohs en zonas de alto riesgo facial', type: 'acc' }
    ]),
    contexto: 'El cáncer de piel no melanoma comprende los tumores malignos más frecuentes en el ser humano. El carcinoma basocelular (CBC, 75-80%) y el carcinoma espinocelular o escamoso (CEC, 20%) difieren profundamente en su comportamiento biológico y semiología. En el EUNACOM se evalúa con gran constancia la identificación clínica: la lesión perlada con telangiectasias del CBC (que prácticamente nunca da metástasis a distancia, pero genera destrucción local severa) versus la lesión queratósica o ulcerada de base indurada del CEC (que sí tiene potencial de invasión perineural y metástasis a ganglios regionales, especialmente si asienta en labio inferior u oreja).',
    contentSections: [
      {
        subhead: '1. Carcinoma Basocelular (CBC): Clínica y Variantes',
        paragraphs: [
          '• <strong>Epidemiología:</strong> Es el cáncer cutáneo más frecuente (80% de los no melanoma). Deriva de células pluripotenciales de la capa basal de la epidermis.',
          '• <strong>Fisiopatología:</strong> Asociado a quemaduras solares agudas intermitentes en la infancia/adolescencia y a mutaciones en la vía Sonic Hedgehog (PTCH1).',
          '• <strong>Clínica Cardinal:</strong> Pápula o nódulo de aspecto <strong>perlado o translúcido, brillante, con telangiectasias superficiales ramificadas</strong> y bordes arrollados o acordonados. Con el tiempo suele ulcerarse centralmente (úlcera de Rodent o nódulo-ulcerativo).',
          '• <strong>Subtipos:</strong> Nódulo-ulcerativo (el más común, 60%), superficial (placa eritematosa descamativa en tronco), morfeiforme o esclerosante (placa amarillenta similar a cicatriz, bordes infiltrativos mal definidos, el más agresivo localmente).',
          '• <strong>Comportamiento Biológico:</strong> <strong>Riesgo de metástasis prácticamente nulo (< 0.01%)</strong>. Sin embargo, si se deja evolucionar sin tratamiento, produce invasión y destrucción tisular local masiva (cartílago, hueso, órbita).'
        ]
      },
      {
        subhead: '2. Carcinoma Espinocelular (CEC): Clínica y Factores de Alto Riesgo',
        paragraphs: [
          '• <strong>Epidemiología:</strong> Segundo cáncer de piel más común (20%). Deriva de los queratinocitos de la capa espinosa.',
          '• <strong>Fisiopatología:</strong> Asociado a la <strong>dosis acumulativa total de radiación ultravioleta</strong> a lo largo de toda la vida (típico de trabajadores al aire libre), a inmunosupresión crónica (trasplantados renales: riesgo 65 veces mayor) e infección por VPH.',
          '• <strong>Lesión Precursora Clásica:</strong> La <strong>queratosis actínica</strong> es su precursor obligado más común.',
          '• <strong>Clínica Cardinal:</strong> Pápula, placa o nódulo indurado, eritematoso, cubierto de <strong>escama gruesa o hiperqueratosis hiperadherente, que sangra con el roce o se ulcera</strong> sobre una base firme e infiltrada.',
          '• <strong>Localizaciones de Alto Riesgo:</strong> <strong>Labio inferior (queilitis actínica)</strong>, pabellón auricular y cuero cabelludo calvo.',
          '• <strong>Comportamiento Biológico:</strong> A diferencia del CBC, el CEC <strong>SÍ tiene capacidad de invasión perineural y de diseminación metastásica linfática regional (2-5% en piel sana, pero hasta 15-20% en labio y pabellón auricular)</strong>.'
        ]
      },
      {
        subhead: "3. Tratamiento, Derivación y Fotoprotección del Cáncer de Piel No Melanoma",
        paragraphs: [
          "<strong>Sospecha, tratamiento inicial y derivación.</strong> El médico general sospecha por la clínica, toma una biopsia (punch o incisional) si hay dudas y <strong>deriva</strong>; no cauteriza ni congela a ciegas una lesión sin diagnóstico porque impide el estudio histológico. El tratamiento definitivo es <strong>quirúrgico</strong>: escisión con márgenes (cerca de 4 mm en el CBC de bajo riesgo y de 4 a 6 mm en el CEC de bajo riesgo, 6 a 10 mm si es de alto riesgo) o <strong>cirugía micrográfica de Mohs</strong> cuando el tumor está en la «zona H» de la cara (nariz, párpados, labios, orejas), es recurrente, de subtipo morfeiforme o infiltrante, mayor de 2 cm o en inmunosuprimidos. En el CBC superficial de bajo riesgo hay alternativas no quirúrgicas: imiquimod 5%, 5-fluorouracilo tópico, crioterapia, curetaje con electrodesecación y terapia fotodinámica; la radioterapia se reserva para quienes no pueden operarse. Para tumores avanzados existen inhibidores de la vía Hedgehog (vismodegib) en el CBC y cemiplimab (anti-PD-1) en el CEC. El CEC se deriva con prioridad por su potencial metastásico, igual que toda lesión de cara o de un paciente trasplantado. Seguimiento: control cutáneo completo anual (cada 6 meses en los primeros 2 años del CEC o alto riesgo), pues cerca de 40% desarrolla otro cáncer de piel en 5 años.",
          "<strong>Fotoprotección (prevención primaria).</strong> La radiación ultravioleta B causa quemadura solar y cáncer; la A, envejecimiento e inmunosupresión cutánea. Chile tiene un índice UV muy alto en verano por la menor capa de ozono, por lo que se educa desde la infancia, etapa en que las quemaduras solares aumentan el riesgo de melanoma. Las medidas son: <strong>evitar la exposición directa entre las 10 y las 16 horas</strong>, buscar la sombra, usar ropa de manga larga, sombrero de ala ancha y lentes con filtro UV, y aplicar un <strong>protector solar de amplio espectro (UVA y UVB) con FPS 30 o más, idealmente 50</strong>, en cantidad suficiente (cerca de una cucharadita para cara y cuello) <strong>15 a 30 minutos antes de salir y reaplicarlo cada 2 horas</strong> y después de sudar o bañarse. En menores de 6 meses se evita el sol directo y se prefiere la ropa y la sombra. Se desaconsejan las camas solares (carcinógeno del grupo 1 de la OMS). Se enseña el autoexamen de piel y se hace examen cutáneo anual en pacientes de alto riesgo: fototipos I y II, muchos nevos, antecedente de quemaduras, antecedente personal o familiar de cáncer de piel e inmunosupresión."
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Carcinoma Basocelular vs Carcinoma Espinocelular',
      headers: ['Parámetro', 'Carcinoma Basocelular (CBC)', 'Carcinoma Espinocelular (CEC)'],
      rows: [
        ['Frecuencia Relativa', '75 - 80% (el más frecuente)', '15 - 20%'],
        ['Lesión Precursora', 'Ninguna conocida (aparece de novo)', 'Queratosis actínica / Queilitis actínica'],
        ['Aspecto Clínico Típico', 'Pápula translúcida perlada con telangiectasias y borde arrollado', 'Placa/nódulo queratósico costroso indurado o cuerno cutáneo'],
        ['Compromiso de Mucosas', 'Excepcional (nunca en mucosas puras)', 'Frecuente (labio inferior, lengua, mucosa genital)'],
        ['Riesgo de Metástasis', 'Prácticamente nulo (< 0.01%)', 'Significativo (2 - 5% en piel, > 15% en labio/oreja)'],
        ['Tratamiento Estándar', 'Extirpación con margen 4-5 mm o Mohs', 'Extirpación con margen 5-10 mm + evaluación ganglionar']
      ]
    },
    vignette: 'Hombre de 66 años, agricultor retirado, consulta por una lesión en la mejilla derecha de 1 año de evolución que sangra ocasionalmente al lavarse la cara. Al examen físico se aprecia una pápula brillante de 7 mm de diámetro, de tonalidad perlada translúcida, con borde levemente solevantado y finas telangiectasias ramificadas arboriformes en su superficie, con una pequeña costra central hemática. No se palpan adenopatías en el cuello.',
    explicacion: 'El cuadro es semiológicamente clásico de un Carcinoma Basocelular nódulo-ulcerativo (pápula perlada con telangiectasias y ulceración central en zona fotoexpuesta en paciente mayor con daño solar). La conducta adecuada es realizar una biopsia diagnóstica (o extirpación quirúrgica completa con margen oncológico de 4 mm), lo que brinda una tasa de curación superior al 95%.',
    keyPoints: [
      "El Carcinoma Basocelular (CBC) es el cáncer cutáneo más frecuente de todos; se caracteriza por pápula perlada con telangiectasias.",
      "El CBC tiene un riesgo de metástasis prácticamente nulo (<0.01%), pero gran poder de destrucción local invasiva.",
      "El Carcinoma Espinocelular (CEC) se manifiesta como nódulo o placa queratósica descamativa indurada sobre queratosis actínica previa.",
      "El CEC SÍ tiene potencial metastásico linfático regional (2-5% habitual, hasta 15% en labio inferior y pabellón auricular).",
      "Los pacientes con trasplante de órganos bajo inmunosupresión crónica tienen un riesgo masivamente aumentado de CEC agresivo.",
      "La Cirugía Micrográfica de Mohs es el tratamiento de elección para tumores en áreas cosméticamente críticas faciales o con bordes mal definidos."
    ],
    questions: [
      {
        stem: 'Un hombre de 68 años presenta en la punta nasal una lesión papular de 6 mm de diámetro, de coloración blanquecina perlada translúcida, de bordes redondeados solevantados, con presencia de finas telangiectasias en su superficie y una úlcera milimétrica en el centro. ¿Cuál es el diagnóstico clínico más probable?',
        options: [
          { id: 'A', text: 'Carcinoma basocelular nódulo-ulcerativo' },
          { id: 'B', text: 'Carcinoma espinocelular queratoacantoma' },
          { id: 'C', text: 'Melanoma amelanótico de extensión superficial' },
          { id: 'D', text: 'Queratosis seborreica irritada' },
          { id: 'E', text: 'Lupus eritematoso discoide crónico' }
        ],
        correcta: 'A',
        explicacion: 'La tríada semiológica de pápula translúcida con brillo perlado, telangiectasias arboriformes superficiales y ulceración central ("úlcera de Rodent") en una zona fotoexpuesta facial (nariz) es patognomónica del Carcinoma Basocelular, el tumor maligno cutáneo más frecuente.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.08.1.001'
      },
      {
        stem: 'Una mujer de 72 años consulta por una lesión en el labio inferior que no cicatriza desde hace 6 meses. Al examen se observa una placa de 12 mm, de base indurada e infiltrada, con superficie ulcerada y cubierta de costra hiperqueratósica amarillenta adherente, que sangra al desprendimiento. ¿Cuál es el diagnóstico clínico más probable?',
        options: [
          { id: 'A', text: 'Carcinoma basocelular superficial' },
          { id: 'B', text: 'Carcinoma espinocelular infiltrante' },
          { id: 'C', text: 'Herpes labial recidivante crónico' },
          { id: 'D', text: 'Aftosis oral recurrente mayor de Sutton' },
          { id: 'E', text: 'Queilitis angular bacteriana' }
        ],
        correcta: 'B',
        explicacion: 'Toda úlcera o placa costrosa indurada en el labio inferior que no cicatriza en más de 2 a 4 semanas debe considerarse un Carcinoma Espinocelular (CEC) hasta demostrar lo contrario. El labio inferior es una localización de alto riesgo para CEC (precedido comúnmente por queilitis actínica) y tiene un riesgo significativo de metástasis a ganglios submentonianos y submandibulares.',
        recTag: 'Banco Oficial AEE · Perfil V3 1.08.1.001'
      }
    ]
  },

  // ==========================================================================
  // TEMA 16.15: LESIONES CUTÁNEAS PREMALIGNAS (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'derma-15',
    classId: 'derma-15',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncología Cutánea, Lesiones Premalignas & Infecciones Cutáneas',
    topicLabel: '16.15',
    title: 'Lesiones Cutáneas Premalignas: Queratosis Actínica, Cuerno Cutáneo y Nevos Displásicos',
    perfilCode: '6.01.6.002',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Completo',
    ges: 'Sin garantía GES específica · Detección y tratamiento precoz del cáncer de piel.',
    reconstrucciones: 'EUNACOM Julio 2023 (Q#19) · EUNACOM Diciembre 2021 (Q#77) · EUNACOM Enero 2020 (Q#112)',
    frecuencia: 'Alta en EUNACOM · Preguntas sobre identificación y tratamiento de campo de cancerización de queratosis actínica',
    diagram: flow('Diagnóstico y Tratamiento de Lesiones Premalignas Cutáneas', [
      { t: 'Lesión Eritematosa Áspera o Displásica en Zonas Fotoexpuestas', s: 'Marcadores biológicos de daño actínico crónico y riesgo aumentado de malignidad', type: 'warn' },
      { k: 'split', q: '¿Tipo de Lesión Premaligna Identificada?', s: 'Queratosis actínica vs Nevo melanocítico displásico',
        ll: 'QUERATOSIS ACTÍNICA (Precursora de CEC)',
        left: { t: 'Mácula eritematosa áspera ("tacto como lija")', s: 'Tratamiento focal: Crioterapia con nitrógeno líquido · Terapia de campo: Imiquimod 5% o 5-Fluorouracilo', type: 'acc' },
        rl: 'NEVO DISPLÁSICO / ATÍPICO',
        right: { t: 'Lesión melanocítica con atipia clínica (ABCDE)', s: 'Marcador de riesgo de melanoma · Si cumple criterios de sospecha severa: Biopsia excisional completa', type: 'crit' }
      },
      { t: 'Concepto de "Campo de Cancerización"', s: 'Toda la piel circundante fotoexpuesta comparte mutaciones de p53 aunque se vea sana', type: 'dec' },
      { t: 'Fotoprotección Estricta Diaria (FPS ≥ 50+)', s: 'Pilar no farmacológico preventivo obligatorio en todos los pacientes con queratosis actínicas', type: 'acc' }
    ]),
    contexto: 'La queratosis actínica (QA) es la lesión cutánea premaligna más frecuente en la práctica médica. Representa la proliferación intraepidérmica clonal de queratinocitos atípicos inducida por radiación UV acumulativa; si no se trata, entre un 5% y 20% evoluciona a carcinoma espinocelular invasor. El EUNACOM evalúa: 1) su semiología clásica, donde la lesión muchas veces "se palpa mejor de lo que se ve" como una superficie áspera o en papel de lija; y 2) las modalidades de tratamiento, distinguiendo la crioterapia para lesiones aisladas del tratamiento de campo de cancerización con fármacos tópicos (Imiquimod al 5% o 5-Fluorouracilo en crema).',
    contentSections: [
      {
        subhead: '1. Queratosis Actínica: Fisiopatología y Semiología',
        paragraphs: [
          '• <strong>Fisiopatología:</strong> Proliferación de queratinocitos displásicos en la epidermis basal debido a mutaciones inducidas por radiación UVB en el gen supresor tumoral <strong>TP53</strong>. Se considera biológicamente un carcinoma espinocelular in situ incipiente.',
          '• <strong>Semiología Clásica:</strong> Mácula o pápula eritematosa mal delimitada, cubierta por una escama seca o costra rugosa amarillenta o blanquecina muy adherente. <em>Aforismo clínico:</em> <strong>"La queratosis actínica se palpa antes de verse"</strong>; al pasar la yema del dedo sobre la piel se percibe una aspereza característica idéntica a <strong>papel de lija</strong>.',
          '• <strong>Localizaciones Predilectas:</strong> Cara (frente, mejillas, nariz), pabellones auriculares, dorso de manos, antebrazos y cuero cabelludo calvo en hombres.',
          '• <strong>Cuerno Cutáneo:</strong> Protrusión cónica hiperqueratósica compacta que semeja un pequeño cuerno. No es un diagnóstico histológico sino una descripción morfológica; en su base suele esconderse una queratosis actínica (60%), una verruga viral o un carcinoma espinocelular invasor (20%).'
        ]
      },
      {
        subhead: '2. Tratamiento Focal vs Tratamiento de Campo de Cancerización',
        paragraphs: [
          '• <strong>Tratamiento de Lesiones Aisladas (Focal):</strong>',
          '  - <strong>Crioterapia con Nitrógeno Líquido (-196 °C):</strong> Método físico de elección para lesiones únicas o escasas. Produce necrosis celular por congelación rápida y descongelación lenta.',
          '• <strong>Concepto de "Campo de Cancerización":</strong> Se refiere al área de piel fotoexpuesta que rodea a las queratosis visibles, la cual presenta alteraciones genéticas subclínicas idénticas predisponentes a la formación continua de nuevos tumores.',
          '• <strong>Tratamientos Tópicos de Campo:</strong>',
          '  - <strong>Imiquimod al 5% en crema:</strong> Modificador de la respuesta inmunológica (agonista de receptores TLR-7). Induce respuesta inflamatoria con necrosis selectiva de células displásicas.',
          '  - <strong>5-Fluorouracilo (5-FU) al 5% en crema:</strong> Antimetabolito que inhibe la timidilato sintasa, bloqueando la síntesis de ADN en células con alta tasa de división.',
          '  - <strong>Terapia Fotodinámica (TFD):</strong> Aplicación de ácido metilaminolevulinato (MAL) seguido de iluminación con luz roja.'
        ]
      },
      {
        subhead: "3. Enfermedad de Bowen (Carcinoma Espinocelular In Situ)",
        paragraphs: [
          "La <strong>enfermedad de Bowen</strong> es un carcinoma espinocelular <strong>in situ</strong> (la displasia compromete todo el espesor de la epidermis sin invadir la dermis). Clínicamente es una <strong>placa eritematosa, bien delimitada, escamosa o costrosa, solitaria y de crecimiento lento</strong> (años), en áreas fotoexpuestas, sobre todo piernas de mujeres y cabeza y cuello. Su error clásico es tratarla como eccema numular, psoriasis o tiña: <strong>toda placa solitaria que no responde a corticoides ni a antifúngicos debe biopsiarse</strong>. Sus causas son la radiación UV, el <strong>arsénico</strong> (exposición crónica en aguas del norte de Chile, con queratosis palmoplantares y lesiones múltiples), el VPH 16 en la región genital (papulosis bowenoide y eritroplasia de Queyrat en el glande, con mayor riesgo de invasión) y la inmunosupresión. Hasta 3 a 5% progresa a carcinoma espinocelular invasor, por lo que se trata. Manejo: sospecha clínica, biopsia y tratamiento inicial por el médico general o derivación, con opciones de <strong>escisión con margen, curetaje y electrodesecación, crioterapia, 5-fluorouracilo 5% o imiquimod tópicos y terapia fotodinámica</strong>; el seguimiento es anual con examen completo de la piel. La queratosis actínica, en cambio, es una lesión premaligna que no compromete todo el espesor epidérmico."
        ]
      }
    ],
    table: {
      title: 'Modalidades Terapéuticas en Queratosis Actínicas',
      headers: ['Modalidad', 'Fármaco / Técnica', 'Indicación Clínica', 'Efecto Adverso Esperable'],
      rows: [
        ['Terapia Dirigida a Lesión', 'Crioterapia con Nitrógeno Líquido', 'Lesiones aisladas, gruesas o hiperqueratósicas', 'Ampolla, costra, hipopigmentación residual'],
        ['Terapia de Campo Tópica', 'Imiquimod al 5% crema (2-3 veces/sem x 4-6 sem)', 'Múltiples lesiones en área extensa (frente/cuero cabelludo)', 'Eritema intenso, erosiones, costras (señal de eficacia)'],
        ['Terapia de Campo Tópica', '5-Fluorouracilo (5-FU) 5% crema (2 veces/día x 3-4 sem)', 'Múltiples lesiones en cara y dorso de manos', 'Inflamación marcada, descamación, ardor'],
        ['Cirugía / Biopsia', 'Biopsia excisional o curetaje', 'Lesión con base indurada, dolor o rápido crecimiento', 'Cicatriz (descartar carcinoma espinocelular invasor)']
      ]
    },
    vignette: 'Hombre de 70 años, calvo, aficionado a la jardinería, consulta porque nota la piel de su cuero cabelludo y frente "áspera y con pequeñas escamas que reaparecen al rascarlas". Al examen dermatológico, la piel de la región frontal y vértex presenta múltiples máculas eritematosas poco delimitadas de 3 a 6 mm cubiertas por escamas secas adherentes que al tacto se perciben ásperas como papel de lija. Ninguna lesión presenta induración en la base ni sangrado espontáneo.',
    explicacion: 'El cuadro corresponde a queratosis actínicas múltiples en el contexto de un campo de cancerización en cuero cabelludo y frente fotoexpuestos. El tratamiento de elección consiste en combinar medidas destructivas focales (crioterapia con nitrógeno líquido para las lesiones más engrosadas) con tratamiento médico del campo de cancerización mediante Imiquimod al 5% o 5-Fluorouracilo tópico, asociado a educación rigurosa en fotoprotección diaria con FPS ≥ 50+.',
    keyPoints: [
      "La queratosis actínica es la lesión premaligna cutánea más común y es precursora directa del Carcinoma Espinocelular.",
      "Clínicamente se caracteriza por máculas eritematosas con escamas secas adherentes que al tacto se sienten ásperas como papel de lija.",
      "La presencia de induración en la base de una queratosis actínica obliga a sospechar progresión a carcinoma espinocelular invasor y realizar biopsia.",
      "El cuerno cutáneo es una hiperqueratosis compacta en cuya base frecuentemente subyace una queratosis actínica o un CEC.",
      "Para lesiones múltiples en una zona fotoexpuesta extensa se debe tratar el 'campo de cancerización' con Imiquimod o 5-Fluorouracilo tópico.",
      "La crioterapia con nitrógeno líquido es la terapia de primera línea para lesiones individuales aisladas."
    ],
    questions: [
      {
        stem: 'Un hombre de 65 años presenta en la frente y dorso de manos varias máculas eritematosas milimétricas cubiertas por escamas ásperas muy adherentes, que al frotarlas suavemente con el dedo se sienten rugosas como lija. No hay induración ni signos inflamatorios profundos. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Queratosis actínicas' },
          { id: 'B', text: 'Queratosis seborreicas' },
          { id: 'C', text: 'Psoriasis vulgar' },
          { id: 'D', text: 'Lupus eritematoso discoide' },
          { id: 'E', text: 'Linfoma cutáneo de células T' }
        ],
        correcta: 'A',
        explicacion: 'Las máculas eritematosas poco delimitadas con escamas adherentes ásperas al tacto (signo de la lija) en zonas fotoexpuestas crónicas son patognomónicas de las Queratosis Actínicas, lesiones premalignas inducidas por daño solar ultravioleta acumulativo.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.6.002'
      },
      {
        stem: '¿Cuál de los siguientes fármacos tópicos está indicado para el tratamiento del "campo de cancerización" en pacientes con múltiples queratosis actínicas faciales?',
        options: [
          { id: 'A', text: 'Clobetasol propionato al 0.05% en crema' },
          { id: 'B', text: 'Imiquimod al 5% en crema' },
          { id: 'C', text: 'Mupirocina al 2% en ungüento' },
          { id: 'D', text: 'Ketoconazol al 2% en crema' },
          { id: 'E', text: 'Metronidazol al 0.75% en gel' }
        ],
        correcta: 'B',
        explicacion: 'El Imiquimod al 5% en crema es un inmunomodulador tópico aprobado y ampliamente utilizado para tratar el campo de cancerización en queratosis actínicas múltiples, ya que estimula la respuesta inmune innata y adaptativa local eliminando queratinocitos atípicos subclínicos en toda el área fotoexpuesta.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.6.002'
      }
    ]
  },

  // ==========================================================================
  // TEMA 16.16: INFECCIONES CUTÁNEAS COMUNES (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'derma-16',
    classId: 'derma-16',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncología Cutánea, Lesiones Premalignas & Infecciones Cutáneas',
    topicLabel: '16.16',
    title: 'Infecciones Cutáneas Comunes: Micosis Superficiales (Dermatofitosis, Pitiriasis Versicolor), Escabiosis & Pediculosis',
    perfilCode: '6.01.1.006',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Completo',
    ges: 'Sin garantía GES específica · Manejo habitual en Atención Primaria de Salud (APS).',
    reconstrucciones: 'EUNACOM Diciembre 2023 (Q#88) · EUNACOM Julio 2022 (Q#105) · EUNACOM Enero 2021 (Q#31)',
    frecuencia: 'Muy Alta en EUNACOM · Diagnóstico clínico y tratamiento de primera línea de escabiosis y tiñas',
    diagram: flow('Enfrentamiento de Infecciones Cutáneas y Ectoparasitosis en APS', [
      { t: 'Lesión Cutánea Pruriginosa o Descamativa en APS: Diagnóstico Diferencial', s: 'Micosis superficiales por hongos filamentosos/levaduras vs Ectoparasitosis humanas', type: 'warn' },
      { k: 'split', q: '¿Morfología y Patrón de Distribución de las Lesiones?', s: 'Diferenciación etiológica cardinal',
        ll: 'MICOSIS SUPERFICIALES (Tiñas / Pitiriasis)',
        left: { t: 'Placas anulares con borde activo descamativo', s: 'Tiña corporis/cruris: Terbinafina tópica · Pitiriasis versicolor: Ketoconazol · Tiña capitis: Griseofulvina VO obligatoria', type: 'acc' },
        rl: 'ECTOPARASITOSIS (Sarna / Pediculosis)',
        right: { t: 'Prurito nocturno intenso + Surcos acarianos', s: 'Escabiosis: Permetrina 5% crema cuerpo entero + TRATAMIENTO SIMULTÁNEO A TODOS LOS CONTACTOS', type: 'crit' }
      },
      { t: 'Confirmación Diagnóstica Rápida en APS', s: 'Examen micológico directo con KOH al 10-20% · Acarotest / cinta adhesiva para Sarcoptes scabiei', type: 'dec' },
      { t: 'Regla de Oro en Ectoparasitosis: Lavado de Ropa', s: 'Lavar ropa y sábanas con agua caliente (> 60 °C) o embolsar herméticamente por 72 horas', type: 'acc' }
    ]),
    contexto: 'Las infecciones fúngicas superficiales y las ectoparasitosis son motivos de consulta diarios en la atención primaria y hospitalaria chilena. El EUNACOM evalúa sistemáticamente: 1) el diagnóstico de las dermatofitosis (placa anular de centro claro con borde circinado eritematoescamoso activo); 2) el tratamiento de la Tiña Capitis, que SIEMPRE requiere antimicóticos orales (griseofulvina o terbinafina oral) ya que los tópicos no penetran el folículo piloso; 3) el diagnóstico de la escabiosis (prurito de predominio nocturno y surcos en pliegues interdigitales); y 4) el pilar del tratamiento de la escabiosis con permetrina al 5% aplicada desde el cuello a los pies con indicación simultánea obligatoria a TODOS los convivientes, tengan o no síntomas.',
    contentSections: [
      {
        subhead: '1. Micosis Superficiales: Dermatofitosis y Pitiriasis Versicolor',
        paragraphs: [
          '• <strong>Dermatofitosis (Tiñas):</strong> Producidas por hongos filamentosos queratinofílicos (<em>Trichophyton</em>, <em>Microsporum</em>, <em>Epidermophyton</em>).',
          '  - <strong>Tiña del Cuerpo (Tinea corporis):</strong> Placas anulares u ovales eritematodescamativas con <strong>borde activo solevantado microvesiculoso</strong> y centro que aclara ("lesión en diana o anillo").',
          '  - <strong>Tiña Inguinal (Tinea cruris):</strong> Placa eritematosa bilateral en pliegues inguinales que <strong>RESPETA el escroto</strong> (a diferencia del intértrigo candidiásico, que compromete escroto con lesiones satélites).',
          '  - <strong>Tiña del Pie (Tinea pedis / "Pie de Atleta"):</strong> Maceración y fisuración interdigital (4° espacio) o patrón descamativo en mocasín.',
          '  - <strong>Tiña de la Cabeza (Tinea capitis):</strong> Exclusiva de niños. Placas alopécicas con pelos rotos "en sacapuntas" y escamas. <strong>REGLA DE ORO EUNACOM: El tratamiento SIEMPRE es sistémico por vía oral (Griseofulvina 20-25 mg/kg/día por 6-8 semanas o Terbinafina oral). Los antimicóticos tópicos son ineficaces.</strong>',
          '• <strong>Pitiriasis Versicolor:</strong> Causada por la levadura lipofílica <em>Malassezia globosa/furfur</em>. Máculas hipo o hiperpigmentadas con fina descamación furfurácea al raspado (<strong>signo de la uñada o de Besnier</strong>) en tronco superior y cuello. Diagnóstico con KOH: imagen en "albóndigas con espaguetis" (hifas cortas y esporas redondas). Tratamiento: Ketoconazol shampoo al 2% o Terbinafina tópica.'
        ]
      },
      {
        subhead: '2. Ectoparasitosis: Escabiosis (Sarna) y Pediculosis',
        paragraphs: [
          '• <strong>Escabiosis (Sarna Humana):</strong> Infestación por el ácaro <em>Sarcoptes scabiei var. hominis</em>.',
          '  - <strong>Clínica Cardinal:</strong> <strong>Prurito de predominio nocturno intenso</strong> e intratable, que afecta a varios miembros del grupo familiar.',
          '  - <strong>Lesiones Patognomónicas:</strong> <strong>Surco acariano</strong> (línea serpinginosa milimétrica) y <strong>vesícula perlada</strong> en su extremo. Localizaciones predilectas: <strong>espacios interdigitales de manos, cara anterior de muñecas</strong>, pliegues axilares, areolas mamarias en mujeres y genitales externos en hombres (nódulos escabióticos pruriginosos en escroto y pene). Respeta cabeza y espalda en adultos (puede afectar cuero cabelludo y palmas/plantas en lactantes).',
          '  - <strong>Tratamiento de Elección:</strong> <strong>Permetrina al 5% en crema</strong>. Aplicar desde el cuello hacia abajo (en lactantes incluir cuero cabelludo) cubriendo toda la superficie corporal; dejar actuar 8 a 12 horas y retirar con ducha. Repetir a los 7 días (para eliminar ácaros eclosionados de huevos residuales). Alternativa oral: <strong>Ivermectina oral 200 mcg/kg</strong> (dosis única, repetir a los 7-14 días; contraindicada en < 15 kg y embarazadas).',
          '  - <strong>REGLA FUNDAMENTAL DE ÉXITO:</strong> <strong>Tratar simultáneamente a TODOS los miembros del hogar y contactos íntimos</strong>, presenten o no síntomas. Lavar ropa de vestir y ropa de cama usada las últimas 48-72 h con agua caliente (> 60 °C) o guardarla en bolsas plásticas cerradas herméticamente durante 3 a 5 días (el ácaro no sobrevive más de 48-72 h fuera del huésped).',
          '• <strong>Pediculosis:</strong> Infestación por <em>Pediculus humanus capitis</em> (piojo de la cabeza), <em>corporis</em> o <em>Phthirus pubis</em> (ladilla). Tratamiento: Permetrina al 1% loción en cuero cabelludo seco por 10 minutos + remoción mecánica de liendres con peine metálico fino; repetir a los 7 días.'
        ]
      },
      {
        subhead: "3. Exámenes en Dermatología Infecciosa: KOH, Cultivo de Hongos y Acarotest",
        paragraphs: [
          "<strong>Examen micológico directo con KOH (interpreta y emplea).</strong> Se indica en tiñas, onicomicosis (siempre se confirma antes de un tratamiento oral prolongado), pitiriasis versicolor y candidiasis. Toma de la muestra: limpiar con alcohol 70% y dejar secar, <strong>raspar con bisturí N° 15 el borde activo de la lesión</strong> (no el centro), en la uña recoger el detritus subungueal de la zona proximal del área enferma y en el cuero cabelludo <strong>arrancar los pelos rotos</strong> y las escamas. El material se coloca en un portaobjetos con 1 a 2 gotas de <strong>KOH al 10 a 20%</strong> (40% en uñas y pelos), se cubre con cubreobjetos, se calienta suavemente sin hervir o se espera 10 a 20 minutos y se observa a 10 y 40 aumentos. Los dermatofitos se ven como <strong>hifas hialinas septadas, ramificadas, de grosor uniforme</strong>, con artroconidias; en la tiña capitis las esporas pueden estar dentro del pelo (endotrix, <em>Trichophyton tonsurans</em>) o alrededor (ectotrix, <em>Microsporum</em>); la pitiriasis versicolor muestra hifas cortas y gruesas con esporas redondas («espaguetis con albóndigas») y <em>Candida</em>, levaduras con pseudohifas y gemación. Puede haber falsos negativos si se usó un antifúngico tópico en las últimas 2 semanas u oral en las últimas 4, y artefactos (bordes celulares o fibras de algodón) que simulan hifas. La lámpara de Wood da fluorescencia verde-amarilla en <em>Microsporum</em> y color coral en el eritrasma.",
          "<strong>Cultivo de hongos (interpreta y emplea).</strong> Se siembra el raspado en <strong>agar Sabouraud con cloranfenicol</strong> (con o sin cicloheximida) y se incuba a 25 a 30 °C por <strong>2 a 4 semanas</strong> (hasta 6 en uñas); la especie se identifica por la colonia y la microscopía. Se pide en la <strong>tiña capitis</strong> (el género decide el fármaco: <em>Microsporum</em> responde mejor a griseofulvina y <em>Trichophyton</em> a terbinafina), en la onicomicosis antes de un tratamiento sistémico, con KOH negativo y alta sospecha, en formas extensas o refractarias y en brotes en colectividades para buscar la fuente zoofílica (gatos, perros, cobayos con <em>M. canis</em>). Interpretación: el aislamiento de un <strong>dermatofito</strong> confirma la infección; los hongos filamentosos no dermatofitos o contaminantes (<em>Aspergillus</em>, <em>Penicillium</em>) solo cuentan si se aíslan en forma repetida con KOH positivo, y <em>Candida</em> en piel o uñas debe correlacionarse con la clínica porque puede ser colonización.",
          "<strong>Acarotest (realiza, interpreta y emplea).</strong> Es el examen directo de la escabiosis. Se elige un <strong>surco o una vesícula perlada reciente y no excoriada</strong> (espacios interdigitales, muñecas), se pone una gota de aceite mineral o de KOH, se raspa con bisturí N° 15 hasta un mínimo de sangrado y se lleva al portaobjetos. Al microscopio (10 aumentos) se ve el <strong>ácaro adulto</strong> (0,3 a 0,4 mm, ovalado, de 8 patas), los <strong>huevos</strong> y los <strong>escíbalos</strong> (heces, bolitas pardas). Una variante es la prueba de la tinta: se pinta el surco con tinta y se limpia con alcohol, y la tinta delimita su trayecto; la dermatoscopía muestra el signo del «ala delta». Un resultado negativo <strong>no descarta sarna</strong> (hay pocos ácaros por paciente): si la clínica y la epidemiología son compatibles se trata. En la sarna costrosa o noruega, de inmunodeprimidos y ancianos, hay miles de ácaros y gran contagiosidad: se aísla, se deriva y se asocia ivermectina oral a la permetrina."
        ]
      },
      {
        subhead: "4. Pediculosis: Piojo de la Cabeza, del Cuerpo y Ladilla",
        paragraphs: [
          "Existen tres entidades. <strong>Pediculosis capitis</strong> (<em>Pediculus humanus capitis</em>): afecta a escolares de 3 a 12 años por contacto directo cabeza con cabeza (los piojos no saltan ni vuelan y sobreviven 1 a 2 días fuera de la cabeza); produce <strong>prurito intenso en la nuca y detrás de las orejas</strong>, excoriaciones, impétigo secundario y adenopatías occipitales y retroauriculares. El diagnóstico se hace al ver el piojo vivo o <strong>liendres adheridas al pelo a menos de 6 mm del cuero cabelludo</strong>, que no se desprenden al sacudirlas (la caspa sí cae); el peine fino sobre cabello húmedo es la mejor técnica. <strong>Pediculosis corporis</strong> (<em>P. h. corporis</em>): el piojo vive en las costuras de la ropa y se asocia a hacinamiento y falta de higiene; produce excoriaciones lineales en tronco, hombros y cintura y, crónicamente, hiperpigmentación; es vector de <em>Rickettsia prowazekii</em> (tifus epidémico), <em>Bartonella quintana</em> (fiebre de las trincheras) y fiebre recurrente; el tratamiento es lavar la ropa a más de 60 °C y cambiarla. <strong>Pediculosis pubis o ladilla</strong> (<em>Phthirus pubis</em>): infección de transmisión sexual con prurito púbico y a veces máculas azuladas (cerúleas) en muslos y abdomen; en pestañas de un niño obliga a descartar abuso sexual. Se estudian otras ITS y se trata a los contactos.",
          "<strong>Tratamiento de la pediculosis (nivel completo).</strong> Primera línea en la cabeza: <strong>permetrina 1% loción durante 10 minutos sobre el cabello húmedo</strong>, repetida a los 7 a 10 días para eliminar las ninfas que nacen de las liendres; si hay resistencia a piretroides, <strong>dimeticona 4%</strong> (se deja actuar varias horas y se repite a los 7 a 9 días); ivermectina oral 200 µg/kg en dos dosis en casos refractarios. Se retiran las liendres con peine fino, se lavan peines y ropa de cama a más de 60 °C o se guardan en bolsa cerrada por 48 horas, y <strong>se examina y trata solo a los contactos infestados</strong>. No es necesario cortar el pelo ni excluir al niño de clases tras iniciar el tratamiento, ni fumigar el ambiente. En la ladilla se usa permetrina 1% por 10 minutos, y en las pestañas, vaselina oftálmica dos a tres veces al día."
        ]
      },
      {
        subhead: "5. Pitiriasis Rosada de Gilbert",
        paragraphs: [
          "Es un exantema <strong>autolimitado</strong> de adultos jóvenes (10 a 35 años), más frecuente en primavera y otoño, probablemente por reactivación del herpesvirus 6 y 7. Comienza con la <strong>placa heráldica o «medallón»</strong>: una placa oval de 2 a 5 cm, rosada, con un <strong>collarete de fina descamación en su borde interno</strong>, en el tronco. A los 1 a 2 semanas aparecen placas ovaladas más pequeñas, rosadas, con escama periférica, cuyo eje mayor sigue las líneas de Langer y dibuja la distribución <strong>«en árbol de Navidad»</strong> en la espalda; el prurito es leve a moderado. Habitualmente respeta cara, palmas y plantas. Dura 6 a 8 semanas (hasta 12) y remite sin cicatriz. Diagnóstico diferencial importante: <strong>sífilis secundaria</strong> (compromiso palmoplantar, adenopatías; se pide VDRL o RPR a todo paciente sexualmente activo con exantema similar), tiña corporis (KOH), psoriasis en gotas, dermatitis seborreica, exantema por fármacos (captopril, AINE, isotretinoína) y eccema numular. Tratamiento: explicar la evolución benigna, emolientes, antihistamínicos orales y corticoide tópico de potencia media para el prurito, y evitar los baños muy calientes; en casos extensos o precoces puede usarse aciclovir en dosis altas o fototerapia UVB por el especialista. Se deriva si ocurre en el primer trimestre del embarazo, por su asociación a aborto y parto prematuro."
        ]
      },
      {
        subhead: "6. Prúrigo Infantil Agudo y Picaduras de Insectos",
        paragraphs: [
          "El <strong>prúrigo infantil agudo</strong> (estrófulo, urticaria papular) es una reacción de hipersensibilidad a las picaduras de insectos (pulgas de mascotas, chinches de cama, mosquitos) en niños de 2 a 7 años. Se presenta con <strong>pápulas y pápulo-vesículas muy pruriginosas con un punto central hemorrágico o costroso</strong>, a veces ampollas, en brotes sobre extremidades y zonas expuestas, nalgas y tronco; en cada brote hay lesiones de distintas edades, y el rascado produce excoriaciones e <strong>impétigo secundario</strong>. Las chinches suelen dejar tres lesiones alineadas («desayuno, almuerzo y cena»). Desaparece hacia los 7 a 10 años por desensibilización. El diagnóstico es clínico; se diferencia de la escabiosis (surcos, pliegues, contactos familiares), la varicela (vesículas en distintos estadios con fiebre y lesiones en mucosas), el impétigo y la dermatitis atópica. Tratamiento: <strong>control del vector</strong> (desparasitar mascotas, lavar y aspirar ropa de cama, colchones y rincones, revisar grietas en busca de chinches), repelente con DEET en mayores de 2 meses o icaridina, mosquiteros, <strong>corticoide tópico de potencia baja a media por 3 a 5 días</strong> y antihistamínico oral sedante nocturno, uñas cortas y antibiótico (cefadroxilo o cloxacilina) si hay sobreinfección. Una lesión única y necrótica con dolor intenso no es prúrigo: debe pensarse en loxoscelismo (véase Tema 16.18)."
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial y Tratamiento de Infecciones Cutáneas Comunes',
      headers: ['Infección', 'Agente Causal', 'Clínica Cardinal', 'Diagnóstico de Elección', 'Tratamiento de Primera Línea'],
      rows: [
        ['Tiña del Cuerpo / Pie', 'Trichophyton rubrum / mentagrophytes', 'Placa anular borde activo descamativo', 'Clínica + Examen directo KOH', 'Terbinafina tópica 1% c/12h x 2-3 sem'],
        ['Tiña de la Cabeza', 'Microsporum canis / Trichophyton', 'Placa alopécica con pelos rotos en niños', 'Examen con lámpara de Wood + KOH/cultivo', 'GRISEOFULVINA ORAL x 6-8 semanas (No tópicos)'],
        ['Pitiriasis Versicolor', 'Malassezia furfur / globosa', 'Máculas hipo/hipercrómicas descamativas', 'Signo de la uñada + KOH (espaguetis)', 'Ketoconazol shampoo 2% tópico x 2 semanas'],
        ['Escabiosis (Sarna)', 'Sarcoptes scabiei hominis', 'Prurito nocturno, surcos interdigitales', 'Clínica + Acarotest directo', 'PERMETRINA 5% crema a TODOS los convivientes']
      ]
    },
    vignette: 'Madre consulta con su hijo de 7 años por prurito cutáneo generalizado muy intenso de 2 semanas de evolución, que empeora marcadamente durante la noche impidiéndole dormir. Al examen físico se aprecian pápulas eritematosas escoriadas y pequeños surcos lineales en los pliegues interdigitales de ambas manos, muñecas y pliegue anterior de los codos. La madre refiere que ella y su pareja han comenzado con síntomas de picazón similar en las manos y zona genital en los últimos días.',
    explicacion: 'El cuadro clínico de prurito nocturno intenso con lesiones en pliegues interdigitales y afectación de múltiples convivientes es patognomónico de escabiosis (sarna). El tratamiento de elección consiste en aplicar permetrina al 5% en crema desde el cuello hasta la punta de los pies, dejándola actuar durante 8 a 12 horas antes de lavarse, y repetir la aplicación a los 7 días. Es de vital importancia prescribir el mismo tratamiento simultáneamente a todos los miembros del hogar, sintomáticos o asintomáticos, y lavar la ropa a temperatura alta.',
    keyPoints: [
      "La Tiña Capitis SIEMPRE requiere tratamiento antimicótico oral (Griseofulvina o Terbinafina); los antifúngicos tópicos NO curan la tiña capitis.",
      "La Tiña Inguinal típicamente respeta el escroto, a diferencia del intértrigo candidiásico que compromete escroto con lesiones satélites.",
      "La Pitiriasis Versicolor presenta el signo de la uñada positivo y en el examen con KOH se aprecian hifas y esporas ('espaguetis con albóndigas').",
      "El prurito nocturno intratable con surcos en espacios interdigitales y muñecas es el sello clínico de la Escabiosis.",
      "El tratamiento de la escabiosis es Permetrina al 5% en crema aplicada del cuello a los pies y repetida a los 7 días.",
      "Es una regla inaplazable tratar a TODOS los convivientes y contactos estrechos de un paciente con escabiosis de manera simultánea."
    ],
    questions: [
      {
        stem: 'Un escolar de 6 años es traído por su madre por presentar una placa redondeada de 4 cm en el cuero cabelludo, donde el pelo se ha caído parcialmente y los cabellos restantes se observan rotos a pocos milímetros de la superficie cutánea, con descamación superficial asociada y prurito leve. ¿Cuál es el tratamiento de elección para este paciente?',
        options: [
          { id: 'A', text: 'Ketoconazol en crema al 2% aplicado dos veces al día por 2 semanas' },
          { id: 'B', text: 'Clobetasol tópico al 0.05% por sospecha de alopecia areata' },
          { id: 'C', text: 'Griseofulvina oral a 20 mg/kg/día durante 6 a 8 semanas' },
          { id: 'D', text: 'Permetrina al 1% en loción capilar en dosis única' },
          { id: 'E', text: 'Antibioticoterapia oral con cefadroxilo por 10 días' }
        ],
        correcta: 'C',
        explicacion: 'El cuadro corresponde a una Tiña de la Cabeza (Tinea capitis), producida comúnmente por Microsporum canis. La regla de oro en dermatología pediátrica es que la tiña capitis requiere SIEMPRE tratamiento antimicótico por vía oral (Griseofulvina oral durante 6 a 8 semanas, administrada idealmente con alimentos grasos para mejorar su absorción), ya que los antimicóticos tópicos no logran penetrar la raíz del folículo piloso afectado.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.006'
      },
      {
        stem: 'Una mujer de 29 años consulta por intenso prurito nocturno en las manos y cuerpo de 10 días de evolución. Al examen se aprecian lesiones lineales milimétricas y pequeñas pápulas con excoriaciones en los espacios interdigitales de las manos y cara flexora de las muñecas. ¿Cuál de las siguientes medidas terapéuticas es INDISPENSABLE para lograr la erradicación del cuadro?',
        options: [
          { id: 'A', text: 'Indicar tratamiento antibiótico oral profiláctico con doxiciclina' },
          { id: 'B', text: 'Tratar simultáneamente a todos los contactos del hogar con permetrina al 5%, presenten o no síntomas' },
          { id: 'C', text: 'Indicar corticoides sistémicos a dosis altas para frenar el prurito de inmediato' },
          { id: 'D', text: 'Aplicar permetrina al 5% exclusivamente sobre las lesiones visibles de las manos' },
          { id: 'E', text: 'Desinfectar los muebles del hogar con soluciones cloradas concentradas' }
        ],
        correcta: 'B',
        explicacion: 'En la escabiosis, el pilar más crítico para evitar el fracaso terapéutico y las reinfecciones continuas en "ping-pong" es tratar de forma simultánea a TODOS los convivientes y contactos estrechos del paciente con permetrina al 5% en crema (o ivermectina oral), independientemente de si presentan síntomas clínicos o no, ya que el período de incubación asintomático puede durar hasta 4 a 6 semanas.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.006'
      }
    ]
  },

  // ==========================================================================
  // TEMA 16.17: TUMORES BENIGNOS DE PIEL, HEMANGIOMAS Y MALFORMACIONES VASCULARES (TIER 2)
  // ==========================================================================
  {
    id: 'derma-17',
    classId: 'derma-17',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncología Cutánea, Lesiones Premalignas & Infecciones Cutáneas',
    topicLabel: '16.17',
    title: 'Tumores Benignos de Piel, Hemangiomas Infantiles y Malformaciones Vasculares',
    perfilCode: '6.01.1.028, 6.01.1.013, 2.01.1.111',
    dx: 'Específico',
    tx: 'Completo / Inicial',
    seg: 'Completo / Derivar',
    ges: 'Sin garantía GES específica · Manejo en APS de los tumores benignos; hemangiomas complicados y malformaciones se derivan a dermatología o pediatría.',
    reconstrucciones: 'EUNACOM Agosto 2021 (Q#83) · EUNACOM Julio 2024 (Q#125) · EUNACOM Diciembre 2018 (Q#64) · EUNACOM Diciembre 2025 (Q#83)',
    frecuencia: 'Alta rentabilidad · hemangioma infantil (propranolol y ecografía abdominal si son 5 o más), queloide versus cicatriz hipertrófica y diferencia entre hemangioma y malformación vascular',
    diagram: flow('Enfrentamiento de una Lesión Vascular o Tumor Benigno de Piel', [
      { t: 'Lesión nodular o vascular de la piel en consulta', s: 'Definir si es tumor benigno del adulto, hemangioma infantil o malformación vascular', type: 'warn' },
      { k: 'split', q: '¿Cuándo aparece y cómo evoluciona?', s: 'Edad de inicio e historia natural',
        ll: 'LACTANTE: LESIÓN VASCULAR',
        left: { t: 'Aparece en las primeras semanas, crece y luego involuciona', s: ['Hemangioma infantil: observar si es pequeño', 'Propranolol si es periocular, ulcerado o de vía aérea', 'Cinco o más: ecografía abdominal'], type: 'acc' },
        rl: 'ADULTO: TUMOR O CICATRIZ',
        right: { t: 'Nódulo, placa pigmentada o cicatriz que sobrepasa su herida', s: ['Quiste: escisión completa · lipoma: observar', 'Queratosis seborreica: crioterapia', 'Queloide: corticoide intralesional'], type: 'dec' }
      },
      { t: 'Presente desde el nacimiento, sin involución', s: 'Malformación vascular: mancha salmón (observar), mancha en vino de Oporto (descartar Sturge-Weber si compromete V1) · Doppler o RM y derivar', type: 'crit' },
      { t: 'Criterio de derivación', s: 'Dudas diagnósticas o signos de malignidad · compromiso funcional · malformación sintomática o extensa', type: 'acc' }
    ]),
    contexto: 'Las lesiones benignas de la piel son motivo frecuente de consulta y el médico general debe reconocerlas, tranquilizar al paciente y distinguir las que requieren extirpación o derivación. En el adulto dominan la queratosis seborreica, los quistes epidérmicos, el lipoma, el dermatofibroma y las cicatrices patológicas (queloide e hipertrófica). En el lactante, el hemangioma infantil es el tumor vascular más frecuente: aparece en las primeras semanas, crece durante 3 a 5 meses y luego involuciona en años; la mayoría solo se observa, pero los periorbitarios, de vía aérea, ulcerados o desfigurantes se tratan con propranolol oral y los múltiples (5 o más) obligan a descartar compromiso hepático con ecografía abdominal. Las malformaciones vasculares, en cambio, están presentes desde el nacimiento, crecen con el niño y no involucionan: la mancha salmón es benigna y desaparece, mientras la mancha en vino de Oporto de la frente y el párpado superior hace sospechar síndrome de Sturge-Weber.',
    contentSections: [
      {
        subhead: '1. Tumores Benignos Frecuentes: Queratosis Seborreica, Quistes, Lipoma y Dermatofibroma',
        paragraphs: [
          '<strong>Queratosis seborreica:</strong> es el tumor epitelial benigno más frecuente del adulto mayor. Son placas o pápulas bien delimitadas, de <strong>superficie verrugosa y untuosa, «pegadas» sobre la piel</strong> (aspecto de stuck-on), de color café a negro, múltiples, en tronco, cara y cuero cabelludo, y respetan palmas y plantas. La dermatoscopía muestra aperturas tipo comedón, quistes tipo milia y aspecto cerebriforme. La aparición brusca de muchas lesiones con prurito (<strong>signo de Leser-Trélat</strong>) sugiere una neoplasia interna, sobre todo digestiva. No malignizan y no requieren tratamiento; si molestan o se inflaman se tratan con crioterapia, curetaje o shaving, y las lesiones que cambian, sangran o generan dudas con un melanoma se biopsian.',
          '<strong>Quistes:</strong> el <strong>quiste epidérmico</strong> (mal llamado «sebáceo») es un nódulo firme, móvil, con un <strong>punctum central</strong>, en cara, cuello y tronco, con contenido caseoso de queratina; puede inflamarse o abscedarse. El <strong>quiste pilar</strong> es liso, sin punctum, múltiple y familiar, y se ubica en el cuero cabelludo. El tratamiento es la <strong>extirpación completa de la pared quística</strong> (si queda, recidiva); durante la inflamación se indican AINE y drenaje si hay absceso, con antibiótico solo si hay celulitis, y se extirpa 4 a 6 semanas después. Los quistes epidérmicos múltiples y atípicos obligan a descartar el síndrome de Gardner (poliposis, osteomas).',
          '<strong>Lipoma:</strong> es el tumor benigno de partes blandas más frecuente: un nódulo subcutáneo <strong>blando, lobulado, móvil, indoloro y de crecimiento lento</strong>, de 2 a 10 cm, en tronco, cuello y extremidades. El diagnóstico es clínico y la ecografía ayuda en las dudas. Se observa o se extirpa si molesta, por estética o por incertidumbre diagnóstica. Se sospecha liposarcoma si mide más de 5 cm, es profundo (bajo la fascia), firme, fijo, doloroso o crece rápido: requiere resonancia magnética y biopsia.',
          '<strong>Dermatofibroma:</strong> es una pápula o nódulo firme de 0,5 a 1 cm, pardo rosado, en las piernas de mujeres jóvenes, frecuentemente tras una picadura o trauma; al comprimirlo lateralmente se deprime (<strong>signo del hoyuelo</strong>). Es benigno y asintomático; se extirpa solo si hay duda o molestia. Otras lesiones benignas habituales son los acrocordones (fibromas blandos péndulos del cuello y las axilas, asociados a obesidad y diabetes), el angioma rubí (pápula roja brillante del adulto) y el granuloma piógeno (pápula roja friable que sangra, de crecimiento rápido tras un trauma o en el embarazo, que se trata con curetaje y electrocoagulación).',
          '<strong>Cicatrices patológicas:</strong> la <strong>cicatriz hipertrófica</strong> no sobrepasa los bordes de la herida, aparece en las primeras semanas y tiende a regresar en 1 a 2 años. El <strong>queloide</strong> <strong>sobrepasa los límites de la herida</strong> (aspecto rojo violáceo, a veces doloroso o pruriginoso), aparece meses después, no regresa y es más frecuente en fototipos oscuros y en esternón, hombros, dorso y lóbulo de la oreja (después de perforaciones). Tratamiento: <strong>triamcinolona intralesional</strong> (10 a 40 mg/mL cada 4 a 6 semanas), láminas de silicona, presoterapia y crioterapia; la cirugía sola recidiva en más de la mitad de los casos y se combina con corticoide o radioterapia. Se previenen evitando cirugías electivas y perforaciones en pacientes con antecedente.'
        ]
      },
      {
        subhead: '2. Hemangioma Infantil: Historia Natural, Complicaciones y Propranolol',
        paragraphs: [
          'El <strong>hemangioma infantil</strong> es el tumor vascular benigno más frecuente de la infancia (4 a 10% de los lactantes; más en prematuros, bajo peso y niñas), formado por células endoteliales <strong>GLUT-1 positivas</strong>. No está presente al nacer o es solo una mácula precursora pálida o telangiectásica de pocos milímetros; luego tiene una <strong>fase de proliferación rápida durante los primeros 3 a 5 meses</strong> (la mayor parte del tamaño se alcanza a los 3 meses), una meseta y una <strong>involución lenta durante años</strong> (alrededor de 50% a los 5 años y 70% a los 7). Puede dejar piel redundante, telangiectasias y tejido fibroadiposo. El hemangioma <strong>superficial</strong> es una placa rojo brillante «en fresa», el <strong>profundo</strong> un nódulo azulado bajo piel normal y el <strong>mixto</strong> combina ambos; el hemangioma <strong>segmentario</strong> sigue un territorio de desarrollo y se asocia a más complicaciones y a síndromes.',
          '<strong>Complicaciones y alarmas.</strong> La más frecuente es la <strong>ulceración</strong> (dolorosa, en pliegues, labios y zona del pañal). Los hemangiomas <strong>periorbitarios</strong> pueden causar ambliopía y astigmatismo; los de la «barba» o segmentarios del cuello pueden acompañar un hemangioma subglótico con estridor, tos o ronquera entre las 6 semanas y los 6 meses; los labiales dificultan la alimentación; los de la nariz o el labio pueden deformar. <strong>Cinco o más hemangiomas cutáneos obligan a pedir una ecografía abdominal</strong> para descartar compromiso hepático, que puede cursar con insuficiencia cardíaca de alto gasto e hipotiroidismo (se mide TSH). Un hemangioma segmentario facial grande hace sospechar el síndrome PHACE (malformación de fosa posterior, hemangioma, anomalías arteriales, cardíacas y oculares: resonancia, angiorresonancia y ecocardiograma), y uno lumbosacro en la línea media, un disrafismo espinal (ecografía o resonancia de columna).',
          '<strong>Tratamiento.</strong> La mayoría, pequeños y sin riesgo funcional, se <strong>observa</strong> con fotografías seriadas y controles mensuales en la fase proliferativa. Cuando hay riesgo funcional, ulceración o desfiguración, la primera línea es <strong>propranolol oral 2 a 3 mg/kg/día en 2 o 3 dosis</strong> (se inicia con 1 mg/kg/día y se sube en 1 a 2 semanas), idealmente antes de los 5 meses y durante <strong>6 a 12 meses</strong> (suspenderlo antes produce rebote), con control de frecuencia cardíaca, presión arterial y glicemia: se da con alimentación y se suspende si el lactante tiene ayuno o vómitos por el riesgo de hipoglicemia. Está contraindicado en asma o broncoespasmo, bradicardia, bloqueo auriculoventricular, hipotensión y shock. Los hemangiomas superficiales pequeños pueden tratarse con <strong>timolol tópico 0,5%</strong>; el láser de colorante pulsado se usa para telangiectasias y ulceraciones, y la cirugía para las secuelas. Los corticoides sistémicos quedaron como alternativa ante contraindicación del propranolol. El médico general inicia el tratamiento con evaluación previa y <strong>deriva</strong> los hemangiomas periorbitarios, de la vía aérea, ulcerados, segmentarios faciales y múltiples.'
        ]
      },
      {
        subhead: '3. Malformaciones Vasculares Cutáneas: Mancha Salmón, Mancha en Vino de Oporto y Síndromes Asociados',
        paragraphs: [
          'Las <strong>malformaciones vasculares</strong> son errores del desarrollo de los vasos <strong>presentes desde el nacimiento</strong> (aunque a veces se notan después), crecen proporcionalmente con el niño, <strong>nunca involucionan</strong> y son GLUT-1 negativas; el hemangioma, en cambio, es un tumor que aparece semanas después del parto, prolifera y luego involuciona. Se clasifican según el vaso comprometido en capilares, venosas, linfáticas, arteriovenosas y combinadas.',
          'La <strong>mancha salmón</strong> (nevus simplex; «picotazo de cigüeña» en la nuca y «beso de ángel» en la frente y los párpados) es una mácula rosada mal delimitada presente en 40 a 70% de los recién nacidos, que se acentúa con el llanto; la de la frente y los párpados desaparece en 1 a 2 años y la de la nuca puede persistir. Es benigna y no requiere estudio ni tratamiento. La <strong>mancha en vino de Oporto</strong> (malformación capilar) es una mácula rosada a roja, bien delimitada, habitualmente unilateral en cara y cuello, que <strong>no desaparece</strong> y con los años se oscurece, se engruesa y puede formar nódulos, hipertrofia de partes blandas y granulomas piógenos. Su tratamiento de elección es el láser de colorante pulsado, idealmente temprano, a cargo del especialista.',
          '<strong>Síndromes asociados.</strong> La mancha en vino de Oporto que compromete la <strong>rama oftálmica del trigémino (frente y párpado superior)</strong> hace sospechar el <strong>síndrome de Sturge-Weber</strong>: malformación vascular leptomeníngea ipsilateral que produce <strong>convulsiones</strong>, hemiparesia y retraso del desarrollo, con calcificaciones «en vías de tren» en la imagen, y <strong>glaucoma</strong>; se pide resonancia con contraste y se deriva a neurología y oftalmología. En una extremidad, la combinación de malformación capilar, venosa e hipertrofia del miembro corresponde al <strong>síndrome de Klippel-Trénaunay</strong> (riesgo de trombosis venosa y embolia pulmonar; se estudia con Doppler). Otras malformaciones: la <strong>venosa</strong> es una masa azulada, blanda y compresible que aumenta al llorar o con la maniobra de Valsalva (con flebolitos); la <strong>linfática macroquística</strong> (higroma quístico) se asocia a síndrome de Turner y a trisomías; la <strong>arteriovenosa</strong> es cálida, con frémito y riesgo de sangrado. El ecodoppler o la resonancia definen si se observa, se hace escleroterapia, láser o cirugía, por lo que se derivan.'
        ]
      }
    ],
    table: {
      title: 'Hemangioma Infantil versus Malformaciones Vasculares y Lesiones Benignas Frecuentes',
      headers: ['Lesión', 'Cuándo aparece / Dato clave', 'Evolución', 'Conducta en APS'],
      rows: [
        ['Hemangioma infantil', 'Semanas tras el nacimiento · GLUT-1 positivo · placa roja en fresa o nódulo azulado', 'Crece 3 a 5 meses y luego involuciona en años', 'Observar · propranolol si es periocular, ulcerado, de vía aérea o desfigurante · 5 o más: ecografía abdominal'],
        ['Mancha salmón', 'Presente al nacer · nuca, frente y párpados · pálida con la digitopresión', 'Frente y párpados desaparecen en 1 a 2 años', 'Tranquilizar · sin estudio ni tratamiento'],
        ['Mancha en vino de Oporto', 'Presente al nacer · unilateral en cara · no desaparece', 'Se oscurece y engruesa con la edad', 'Láser (derivar) · V1 afectado: descartar Sturge-Weber (RM, oftalmología)'],
        ['Malformación venosa o linfática', 'Masa blanda azulada compresible o quística', 'Crece con el niño y no involuciona', 'Ecodoppler o RM · derivar'],
        ['Queratosis seborreica', 'Adulto mayor · placa verrugosa «pegada» café a negra', 'Benigna, sin malignización', 'Observar · crioterapia si molesta · biopsia si hay duda'],
        ['Quiste epidérmico', 'Nódulo móvil con punctum central', 'Puede inflamarse o abscedarse', 'Extirpación completa de la pared fuera de la fase inflamatoria'],
        ['Lipoma', 'Nódulo subcutáneo blando, móvil e indoloro', 'Crecimiento lento', 'Observar o extirpar · más de 5 cm, profundo o doloroso: RM y biopsia'],
        ['Queloide', 'Cicatriz que sobrepasa los bordes de la herida · meses después', 'No regresa', 'Triamcinolona intralesional · silicona · cirugía más corticoide']
      ]
    },
    vignette: 'Madre consulta por una lesión roja y sobreelevada en la mejilla de su hija de 7 semanas, que no estaba al nacer y ha crecido rápidamente en las últimas semanas. Al examen se observa una placa rojo brillante de 2 cm, de superficie lobulada, sin ulceración, que no compromete el párpado ni la vía aérea; no hay otras lesiones cutáneas y el resto del examen es normal. La madre pregunta si debe operarse.',
    explicacion: 'Se trata de un hemangioma infantil superficial: tumor vascular que aparece en las primeras semanas, crece durante los primeros meses y luego involuciona de forma espontánea. Por ser único, pequeño, sin ulceración y sin riesgo funcional (no compromete la visión ni la vía aérea), la conducta es observar con controles y fotografías seriadas y tranquilizar a la madre; no se opera. Si fuera periocular, ulcerado, de la vía aérea o desfigurante se indica propranolol oral, y si hubiera 5 o más hemangiomas se pide una ecografía abdominal para descartar compromiso hepático.',
    keyPoints: [
      'Queratosis seborreica: placa verrugosa «pegada» del adulto mayor, benigna; la aparición brusca de muchas (Leser-Trélat) sugiere neoplasia interna.',
      'Quiste epidérmico: nódulo con punctum; se extirpa completo y fuera de la fase inflamatoria. Lipoma sospechoso (más de 5 cm, profundo o doloroso): resonancia y biopsia.',
      'Queloide sobrepasa los bordes de la herida y no regresa (triamcinolona intralesional); la cicatriz hipertrófica no los sobrepasa y tiende a regresar.',
      'Hemangioma infantil: no está al nacer, crece 3 a 5 meses y luego involuciona. La mayoría se observa.',
      'Propranolol oral (2 a 3 mg/kg/día por 6 a 12 meses) para hemangiomas periorbitarios, de vía aérea, ulcerados o desfigurantes; contraindicado en asma, bradicardia y bloqueo AV.',
      'Cinco o más hemangiomas cutáneos: ecografía abdominal para descartar hemangiomas hepáticos.',
      'Las malformaciones vasculares están presentes al nacer, no involucionan; mancha en vino de Oporto en V1 (frente y párpado superior) hace sospechar Sturge-Weber (convulsiones y glaucoma).'
    ],
    questions: [
      {
        stem: 'Una paciente de 24 años presenta una cicatriz en la zona esternal, de gran tamaño, secundaria a una cirugía torácica realizada hace 6 meses, que no ha respondido a la terapia compresiva. Al examen físico se observa una cicatriz que sobrepasa los bordes de la cirugía inicial, de aspecto rojo-violáceo y dolorosa a la palpación. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Cicatriz hipertrófica en fase activa' },
          { id: 'B', text: 'Queloide' },
          { id: 'C', text: 'Cuerpo extraño' },
          { id: 'D', text: 'Úlcera de Marjolin' },
          { id: 'E', text: 'Granuloma piógeno' }
        ],
        correcta: 'B',
        explicacion: 'Una cicatriz que sobrepasa los bordes de la herida original, de aspecto rojo-violáceo, dolorosa y que aparece meses después de la cirugía, en el esternón (zona de riesgo), corresponde a un queloide. La cicatriz hipertrófica no sobrepasa los límites de la herida y tiende a regresar sola. La úlcera de Marjolin es un carcinoma sobre una cicatriz crónica y el granuloma piógeno es una pápula roja friable que sangra.',
        recTag: 'EUNACOM Diciembre 2025 · Pregunta 83'
      },
      {
        stem: 'Un paciente de 17 años consulta por un nódulo blanquecino que apareció hace 3 semanas, en una zona donde se había puesto un arete, y que ha ido aumentando de tamaño. El diagnóstico más probable es:',
        options: [
          { id: 'A', text: 'Dermatofibroma' },
          { id: 'B', text: 'Quiste dermoide' },
          { id: 'C', text: 'Neurofibroma' },
          { id: 'D', text: 'Dermatitis de contacto' },
          { id: 'E', text: 'Queloide' }
        ],
        correcta: 'E',
        explicacion: 'La perforación del lóbulo de la oreja es una causa clásica de queloide: un nódulo firme que crece de forma progresiva y sobrepasa el sitio del trauma. El dermatofibroma es pequeño, pardo, de las piernas y con signo del hoyuelo. El tratamiento inicial es la infiltración con triamcinolona intralesional.',
        recTag: 'EUNACOM Diciembre 2018 · Pregunta 64'
      },
      {
        stem: 'Un recién nacido de 10 días presenta un hemangioma en el párpado derecho, de 3 cm de diámetro, que cubre parcialmente la visión. ¿Cuál es la conducta más adecuada en este momento?',
        options: [
          { id: 'A', text: 'Administrar propranolol' },
          { id: 'B', text: 'Administrar betametasona' },
          { id: 'C', text: 'Realizar embolización' },
          { id: 'D', text: 'Derivar a cirujano plástico' },
          { id: 'E', text: 'Observar evolución' }
        ],
        correcta: 'A',
        explicacion: 'Un hemangioma periocular que obstruye el eje visual pone en riesgo la visión (ambliopía y astigmatismo), por lo que no se observa: la primera línea es el propranolol oral, con evaluación previa y control de frecuencia cardíaca, presión y glicemia, junto a derivación a oftalmología y dermatología. La cirugía queda para los que no responden y deja cicatriz.',
        recTag: 'EUNACOM Agosto 2021 · Pregunta 83'
      },
      {
        stem: 'Un lactante de 6 meses presenta ocho hemangiomas infantiles localizados en el tronco, principalmente en la espalda. ¿Cuál es la conducta más adecuada para el manejo de este paciente?',
        options: [
          { id: 'A', text: 'Solicitar ecografía abdominal' },
          { id: 'B', text: 'Iniciar propranolol oral' },
          { id: 'C', text: 'Iniciar corticoides intralesionales' },
          { id: 'D', text: 'Solicitar una resonancia magnética de cerebro' },
          { id: 'E', text: 'Solicitar estudio de neurofibromatosis' }
        ],
        correcta: 'A',
        explicacion: 'Cinco o más hemangiomas cutáneos obligan a descartar hemangiomas viscerales, sobre todo hepáticos, con una ecografía abdominal (y TSH si hay compromiso hepático). El propranolol se reserva para los hemangiomas complicados o desfigurantes, y no hay indicación de resonancia cerebral ni de estudio de neurofibromatosis.',
        recTag: 'EUNACOM Julio 2024 · Pregunta 125'
      }
    ]
  },

  // ==========================================================================
  // TEMA 16.18: LOXOSCELISMO Y PREVENCIÓN EN LA VIVIENDA (TIER 2)
  // ==========================================================================
  {
    id: 'derma-18',
    classId: 'derma-18',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncología Cutánea, Lesiones Premalignas & Infecciones Cutáneas',
    topicLabel: '16.18',
    title: 'Loxoscelismo (Loxosceles laeta): Cuadro Cutáneo y Cutáneo-Visceral, Manejo y Prevención en la Vivienda',
    perfilCode: '6.01.2.008, 6.01.3.002',
    dx: 'Específico',
    tx: 'Completo',
    seg: 'Completo',
    ges: 'Sin garantía GES específica · Consulta toxicológica disponible las 24 horas en el CITUC · Hospitalizar ante signos de compromiso sistémico.',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#89) · EUNACOM Enero 2023 (Q#149)',
    frecuencia: 'Alta rentabilidad · placa livedoide con necrosis tras mordedura de araña de rincón, y reconocer la forma cutáneo-visceral con hemólisis y falla renal',
    diagram: flow('Enfrentamiento del Loxoscelismo en Urgencia', [
      { t: 'Mordedura de araña de rincón (Loxosceles laeta)', s: 'Dolor y eritema tras la mordedura, a menudo durante la noche o al vestirse · capturar la araña si es posible', type: 'warn' },
      { k: 'split', q: '¿Hay síntomas o laboratorio sistémicos en las primeras 72 horas?', s: 'Fiebre, exantema, ictericia, orina oscura, anemia, trombocitopenia, creatinina elevada',
        ll: 'FORMA CUTÁNEA (80-90%)',
        left: { t: 'Placa livedoide con ampolla hemorrágica y escara', s: 'Reposo, frío local, elevación, analgesia, profilaxis antitetánica · antibiótico solo si hay infección · debridar la escara tardíamente', type: 'acc' },
        rl: 'FORMA CUTÁNEO-VISCERAL',
        right: { t: 'Hemólisis, coagulación intravascular y falla renal', s: 'Hospitalizar · hidratación endovenosa · corticoide endovenoso precoz · suero antiloxosceles según toxicólogo · diálisis o transfusión si es necesario', type: 'crit' }
      },
      { t: 'Control y estudio a todo paciente con mordedura sospechosa', s: 'Hemograma, plaquetas, reticulocitos, LDH, bilirrubina, creatinina y orina completa seriados las primeras 48 horas', type: 'dec' },
      { t: 'Prevención en la vivienda', s: 'Ordenar y aspirar rincones, separar la cama de la pared, revisar ropa y calzado antes de usarlos, sellar grietas', type: 'acc' }
    ]),
    contexto: 'El loxoscelismo es el cuadro producido por la mordedura de la araña de rincón (Loxosceles laeta), la única araña de importancia médica que causa necrosis cutánea en Chile. Vive dentro de las casas, en rincones oscuros, tras muebles, ropa y calzado, y muerde cuando se la comprime contra la piel, de noche o al vestirse. En la mayoría de los casos produce la forma cutánea: una mordedura casi indolora que, en horas, evoluciona a una placa livedoide dolorosa con ampollas hemorrágicas y una escara negra que se desprende dejando una úlcera de cicatrización lenta. En una minoría, sobre todo niños, aparece la forma cutáneo-visceral, con hemólisis intravascular, coagulación intravascular e insuficiencia renal, que exige hospitalización. La prevención descansa en el orden, la limpieza de la vivienda y la revisión de ropa y calzado.',
    contentSections: [
      {
        subhead: '1. Loxosceles laeta (Araña de Rincón): Biología, Epidemiología y Mecanismo',
        paragraphs: [
          '<strong>Loxosceles laeta</strong> es una araña pardo amarillenta de cuerpo de 8 a 15 mm y patas largas y finas, con una marca en forma de violín en el cefalotórax y seis ojos agrupados en tres pares. Es <strong>nocturna, sedentaria y no agresiva</strong>: vive en rincones oscuros y poco perturbados de la vivienda (tras cuadros y muebles, en closets, ropa, zapatos y grietas) y muerde solo cuando es aplastada contra la piel, de noche en la cama o al vestirse y calzarse. La mayoría de los accidentes ocurre dentro del domicilio, en la zona central del país y con mayor frecuencia entre el verano y el otoño; la picadura se ubica con frecuencia en tronco, muslos y brazos.',
          'El veneno contiene <strong>esfingomielinasa D</strong>, una enzima dermonecrótica que activa el complemento, los neutrófilos y las plaquetas y daña el endotelio: produce <strong>trombosis microvascular con necrosis isquémica</strong> de la piel y el tejido subcutáneo. En la forma sistémica la misma toxina provoca hemólisis intravascular, coagulación intravascular diseminada y daño renal.'
        ]
      },
      {
        subhead: '2. Loxoscelismo Cutáneo (80 a 90% de los Casos)',
        paragraphs: [
          'La mordedura es <strong>casi indolora</strong> o produce un leve escozor; entre 2 y 8 horas después aparecen dolor quemante creciente, eritema y edema. A las 6 a 12 horas se forma la <strong>placa livedoide</strong>: una placa de bordes geográficos con zonas <strong>eritematosas, violáceas y pálidas isquémicas</strong>, a menudo con ampollas hemorrágicas. En 24 a 72 horas la lesión se extiende, por gravedad, hacia abajo, y evoluciona a una <strong>escara negra seca</strong> que se demarca en 7 a 14 días y se desprende dejando una <strong>úlcera de cicatrización lenta</strong> (semanas a meses) con cicatriz atrófica. En la cara, los muslos y los glúteos predomina el edema extenso. El diagnóstico es clínico y se apoya en la captura de la araña. Hay que diferenciarlo del pioderma gangrenoso, el ectima, la fasceítis necrotizante, la celulitis, la necrosis grasa y el herpes zóster.'
        ]
      },
      {
        subhead: '3. Loxoscelismo Cutáneo-Visceral (Sistémico)',
        paragraphs: [
          'Afecta a una minoría (1 a 15%), más a niños y tras mordeduras en zonas con tejido graso. Los síntomas sistémicos aparecen en las primeras <strong>6 a 72 horas</strong>: fiebre, cefalea, mialgias, náuseas y un exantema morbiliforme o petequial; luego <strong>hemólisis intravascular</strong> con anemia, ictericia, <strong>hemoglobinuria (orina oscura)</strong> y aumento de LDH y bilirrubina indirecta, <strong>coagulación intravascular diseminada</strong> con trombocitopenia y alteración de la coagulación, <strong>insuficiencia renal aguda</strong> y rabdomiólisis; puede llegar al shock y la muerte. El estudio inicial, que se repite en las primeras 48 horas en toda mordedura sospechosa, incluye hemograma con plaquetas y reticulocitos, LDH, bilirrubina, creatinina, nitrógeno ureico, creatinquinasa, pruebas de coagulación y orina completa.'
        ]
      },
      {
        subhead: '4. Tratamiento y Criterios de Hospitalización',
        paragraphs: [
          '<strong>Forma cutánea:</strong> reposo con la zona elevada, <strong>frío local</strong> (no calor), analgesia, profilaxis antitetánica, aseo y curaciones; el antibiótico solo se usa si hay infección secundaria. Muchos centros indican un corticoide sistémico en las primeras 24 a 48 horas. <strong>No se hace escisión quirúrgica precoz</strong>, que empeora la lesión: la escara se debrida tardíamente, a las 2 a 4 semanas, cuando está demarcada, y la úlcera se maneja como herida crónica con eventual injerto. Control diario las primeras 48 a 72 horas para detectar la evolución sistémica.',
          '<strong>Forma cutáneo-visceral:</strong> se <strong>hospitaliza</strong> en unidad de monitoreo. Se hidrata por vía endovenosa de forma forzada para proteger el riñón y se mantiene la diuresis, se indica corticoide endovenoso precoz, se transfunde si hay anemia grave, se corrige la coagulopatía y se dializa si hay falla renal. El <strong>suero antiloxosceles</strong> (antiveneno de producción nacional) se usa en las primeras 24 a 48 horas, por indicación del toxicólogo o del especialista (consulta al CITUC), porque su eficacia disminuye con el tiempo. El pronóstico es bueno si se reconoce y trata de forma precoz.'
        ]
      },
      {
        subhead: '5. Higiene de la Vivienda y Profilaxis del Loxoscelismo',
        paragraphs: [
          'Como la araña vive en la casa, la prevención es doméstica: <strong>ordenar y aspirar semanalmente</strong> los rincones, zócalos, detrás de muebles y cuadros, bajo las camas y dentro de closets y cajones, retirando telas y ootecas (sacos de huevos) y cerrando la bolsa de la aspiradora; <strong>separar la cama de la pared</strong> (al menos 20 cm), sin que la ropa de cama cuelgue hasta el piso, y no guardar cajas ni ropa bajo ella; <strong>sacudir y revisar la ropa, los zapatos, las toallas y las sábanas</strong> antes de usarlos, sobre todo si estuvieron guardados o en el piso; guardar ropa y calzado en bolsas cerradas; <strong>sellar grietas</strong> en muros, zócalos y marcos de puertas y ventanas; evitar acumular escombros, leña, cartones y papeles; y no manipular la araña con la mano, sino capturarla con un vaso y llevarla para su identificación. La fumigación profesional solo complementa estas medidas. Se educa a la familia para consultar de inmediato ante una mordedura con dolor o cambio de color de la piel.'
        ]
      }
    ],
    table: {
      title: 'Loxoscelismo Cutáneo versus Cutáneo-Visceral',
      headers: ['Parámetro', 'Cutáneo (80-90%)', 'Cutáneo-visceral (1-15%)'],
      rows: [
        ['Inicio de los síntomas', 'Dolor y eritema en 2 a 8 horas', 'Síntomas sistémicos en las primeras 6 a 72 horas'],
        ['Lesión', 'Placa livedoide, ampolla hemorrágica y escara', 'Igual, con o sin lesión cutánea llamativa'],
        ['Clínica sistémica', 'Ausente', 'Fiebre, exantema, ictericia, orina oscura'],
        ['Laboratorio', 'Normal', 'Anemia hemolítica, LDH elevada, trombocitopenia, coagulopatía, creatinina elevada'],
        ['Manejo', 'Reposo, frío, analgesia, curaciones; debridar la escara tardíamente', 'Hospitalizar · hidratación · corticoide endovenoso · suero antiloxosceles · diálisis si hay falla renal'],
        ['Pronóstico', 'Úlcera de cicatrización lenta con cicatriz', 'Riesgo vital, mayor en niños']
      ]
    },
    vignette: 'Niño de 6 años es llevado a urgencia por fiebre de 38,5 °C, decaimiento y orina de color oscuro, 36 horas después de despertar con dolor en el muslo derecho. En esa zona se observa una placa violácea de bordes geográficos con ampolla hemorrágica y áreas pálidas. Los exámenes muestran hemoglobina de 7,5 g/dL, bilirrubina indirecta elevada, LDH elevada, plaquetas de 60.000 por microlitro y creatinina de 1,6 mg/dL; la orina tiene hemoglobina sin glóbulos rojos.',
    explicacion: 'Es un loxoscelismo cutáneo-visceral por Loxosceles laeta: placa livedoide con ampolla hemorrágica en el muslo y, dentro de las primeras 72 horas, hemólisis intravascular (anemia, LDH elevada, hemoglobinuria), coagulación intravascular (trombocitopenia) y daño renal. Requiere hospitalización con hidratación endovenosa forzada, corticoide endovenoso, monitoreo y soporte transfusional y renal; el suero antiloxosceles se indica en las primeras 24 a 48 horas con asesoría del toxicólogo. No se hace cirugía precoz de la lesión cutánea.',
    keyPoints: [
      'La araña de rincón (Loxosceles laeta) vive dentro de las casas, es nocturna y muerde al ser aplastada contra la piel, al dormir o vestirse.',
      'Mordedura casi indolora; a las 6 a 12 horas, placa livedoide con ampolla hemorrágica; luego escara negra y úlcera de cicatrización lenta.',
      'Forma cutánea (80 a 90%): reposo, frío local, elevación, analgesia, aseo y profilaxis antitetánica; no escisión precoz, debridar la escara tardíamente.',
      'Forma cutáneo-visceral (hasta 72 horas): fiebre, exantema, hemólisis con orina oscura, trombocitopenia y falla renal; hospitalizar con hidratación y corticoide endovenoso.',
      'Suero antiloxosceles solo en las primeras 24 a 48 horas y con criterio del toxicólogo; el CITUC asesora las 24 horas.',
      'Prevención: aspirar rincones, cama separada del muro, revisar ropa y calzado antes de usarlos, sellar grietas y evitar acumular objetos.'
    ],
    questions: [
      {
        stem: 'Una paciente consulta por una lesión en el antebrazo, que inicialmente era dolorosa y eritematosa, pero que a las 6 horas se volvió más oscura y más grande. Al examen físico se observa una placa livedoide típica, con zonas violáceas, pálidas y eritematosas de bordes geográficos. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Loxoscelismo cutáneo' },
          { id: 'B', text: 'Necrosis grasa' },
          { id: 'C', text: 'Ectima' },
          { id: 'D', text: 'Pioderma gangrenoso' },
          { id: 'E', text: 'Fasceítis necrotizante' }
        ],
        correcta: 'A',
        explicacion: 'Una lesión que inicia con dolor y eritema y en pocas horas se vuelve violácea, con zonas pálidas isquémicas y bordes geográficos (placa livedoide), es la presentación clásica del loxoscelismo cutáneo por mordedura de araña de rincón. El ectima aparece en días, el pioderma gangrenoso es una úlcera de borde socavado en un paciente con enfermedad de base y la fasceítis necrotizante cursa con toxicidad sistémica marcada y dolor desproporcionado.',
        recTag: 'EUNACOM Diciembre 2017 · Pregunta 89'
      },
      {
        stem: 'Paciente con dolor en zona escapular izquierda y lesión ulcerada con halo violáceo. ¿Cuál es el agente causal más probable?',
        options: [
          { id: 'A', text: 'Latrodectus mactans (araña del trigo)' },
          { id: 'B', text: 'Paederus irritans (bicho candela)' },
          { id: 'C', text: 'Miasis cutánea' },
          { id: 'D', text: 'Loxosceles laeta (araña de rincón)' },
          { id: 'E', text: 'Picadura de abeja con reacción local' }
        ],
        correcta: 'D',
        explicacion: 'Una lesión dolorosa, ulcerada o necrótica con halo violáceo en el tronco, en una persona que muerde al vestirse o dormir, corresponde a una mordedura de Loxosceles laeta (araña de rincón). Latrodectus produce un cuadro neurotóxico con dolor muscular y contracturas sin necrosis cutánea; Paederus causa dermatitis lineal ampollar y la miasis, un nódulo con larva.',
        recTag: 'EUNACOM Enero 2023 · Pregunta 149'
      },
      {
        stem: 'Una madre consulta porque su hijo de 5 años fue mordido ayer por una araña de rincón en el muslo. El niño se encuentra afebril y la lesión es una placa eritematosa dolorosa de 4 cm con centro pálido. ¿Cuál es la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Escisión quirúrgica inmediata de la lesión' },
          { id: 'B', text: 'Medidas de sostén, frío local, analgesia, estudio de laboratorio y control en 24 a 48 horas' },
          { id: 'C', text: 'Alta sin control, porque la forma cutánea es siempre benigna' },
          { id: 'D', text: 'Calor local y antibióticos endovenosos' },
          { id: 'E', text: 'Hospitalización con suero antiloxosceles de rutina' }
        ],
        correcta: 'B',
        explicacion: 'Si no hay signos sistémicos se maneja como loxoscelismo cutáneo con reposo, frío local, analgesia, profilaxis antitetánica y curaciones, pero se deben controlar en las primeras 48 a 72 horas los parámetros de hemólisis y función renal (hemograma, LDH, bilirrubina, creatinina, orina) porque en los niños puede aparecer la forma cutáneo-visceral. La escisión precoz y el calor empeoran la lesión, y el suero se reserva para casos sistémicos.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.2.008'
      }
    ]
  }

];

module.exports = { bloque4, flow };
