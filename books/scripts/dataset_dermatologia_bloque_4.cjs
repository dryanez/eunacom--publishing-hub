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
  }
];

module.exports = { bloque4, flow };
