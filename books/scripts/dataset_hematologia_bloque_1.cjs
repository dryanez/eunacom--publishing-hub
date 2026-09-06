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
    .acc{fill:var(--acc)}.accT{fill:#fff}.accS{font-size:8px;fill:#fff1f2}
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
    id: 'hem-01',
    classId: 'hem-01',
    tier: 2,
    blockNum: 1,
    blockName: 'Síndromes Anémicos Hipoproliferativos y Carenciales',
    topicLabel: '8.1',
    title: 'Síndrome Anémico: Definición, Índices Eritrocitarios (VCM, HCM) e Índice Reticulocitario',
    perfilCode: '1.08.1.001',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'No GES directo · Programa de Salud del Adulto Mayor y APS',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#12) · EUNACOM Julio 2021 (Q#05) · EUNACOM Enero 2024 (Q#33)',
    frecuencia: 'Alta · Criterios diagnósticos OMS (Hb <13 g/dL en hombres, <12 g/dL en mujeres) y clasificación fisiopatológica',
    svg: null, algoTitle: 'Algoritmo de Enfrentamiento Inicial de la Anemia en Adultos',
    diagram: flow('Enfrentamiento de la Anemia según VCM e Índice Reticulocitario', [
      { t: 'Hemoglobina Disminuida (< 13 g/dL en varones, < 12 g/dL en mujeres no embarazadas)', s: 'Confirmar anemia y evaluar estabilidad hemodinámica · Descartar sangrado activo agudo' },
      { k: 'split', q: 'Evaluar Índice Reticulocitario Corregido (IRC)', s: 'IRC = % Reticulocitos × (Hto paciente / 45) / Factor corrección maduración', ll: 'IRC > 2.0 % (Regenerativa)', rl: 'IRC < 2.0 % (Arregenerativa / Hipoproliferativa)',
        left: { t: 'Médula Ósea Hiperproliferativa', s: 'Causas: Hemólisis aguda o Hemorragia aguda reciente · Evaluar LDH, Bilirrubina y Frotis', type: 'acc' },
        right: { t: 'Falla Central o Carencial', s: 'Clasificar por VCM: Microcítica (<80 fL), Normocítica (80-100 fL) o Macrocítica (>100 fL)', type: 'warn' },
        ll: 'regenerativa', rl: 'arregenerativa' },
      { t: 'Conducta Diagnóstica Inmediata en APS', s: 'Reticulocitos < 2%: solicitar Perfil de Hierro completo (ferritina), Función renal (BUN/creatinina) y B12/Folato', type: 'dec', al: 'estudio etiológico', from: 'right' },
    ]),
    contexto: 'La anemia es un signo cardinal transversal en medicina interna y atención primaria. El EUNACOM evalúa de manera sistemática los puntos de corte de hemoglobina según sexo y estado fisiológico, la regla de 3 del hematocrito (Hto ≈ 3 × Hb), y la distinción crucial entre anemias regenerativas (IRC > 2%) y arregenerativas (IRC < 2%). Recordar siempre que las hemorragias digestivas crónicas son arregenerativas debido al agotamiento progresivo del hierro.',
    contentSections: [
      {
        subhead: '1. Definición Operativa y Criterios Diagnósticos según OMS',
        paragraphs: [
          'La Organización Mundial de la Salud (OMS) define la anemia como la disminución de la masa total de glóbulos rojos circulantes, expresada clínicamente como una concentración de hemoglobina (Hb) por debajo de dos desviaciones estándar del promedio poblacional: Hb < 13.0 g/dL en hombres adultos, Hb < 12.0 g/dL en mujeres adultas no embarazadas, y Hb < 11.0 g/dL en mujeres embarazadas durante el primer y tercer trimestre (Hb < 10.5 g/dL en el segundo trimestre debido a la hemodilución fisiológica).',
          'En la práctica ambulatoria, el hematocrito (Hto) se relaciona proporcionalmente con la hemoglobina en una proporción aproximada de 3:1 (Hto % ≈ 3 × Hb g/dL en eritrocitos normocíticos y normocrómicos). No obstante, ante discrepancias, el valor de corte rector es siempre la hemoglobina sérica directa, evitando falsas clasificaciones generadas por variaciones en la volemia plasmática.'
        ]
      },
      {
        subhead: '2. Índices Corpuscular y Morfología Eritrocitaria (VCM, HCM, CHCM y RDW)',
        paragraphs: [
          'El Volumen Corpuscular Medio (VCM, rango de referencia: 80 a 100 fL) orienta de inmediato la etiología: microcitosis (VCM < 80 fL) refleja un defecto en la síntesis del grupo hemo (ferropenia) o de cadenas de globina (talasemia); normocitosis (VCM 80-100 fL) traduce inflamación crónica, insuficiencia renal o compromiso mixto inicial; y macrocitosis (VCM > 100 fL) apunta a alteración en la síntesis de ADN (déficit de B12/folatos) o disfunción de membrana (hepatopatía, alcohol, hipotiroidismo).',
          'La Hemoglobina Corpuscular Media (HCM, normal: 27 a 33 pg) y la Concentración de HCM (CHCM, normal: 32 a 36 g/dL) definen la normocromía o hipocromía. El RDW (Red Cell Distribution Width o amplitud de distribución eritrocitaria, normal: 11.5 a 14.5%) evalúa la anisocitosis: un RDW elevado (>15%) es característico de la anemia ferropénica y orienta a causas carenciales frente a talasemias donde el RDW suele ser homogéneamente normal.'
        ]
      },
      {
        subhead: '3. El Índice Reticulocitario Corregido (IRC) y su Significado Clínico',
        paragraphs: [
          'El recuento de reticulocitos en sangre periférica mide directamente la respuesta eritropoyética medular. Como el porcentaje de reticulocitos está sobrestimado en presencia de anemia grave, debe calcularse el Índice Reticulocitario Corregido: IRC = [% reticulocitos × (Hto paciente / 45)] / Factor de Maduración (donde el factor es 1.0 para Hto ≥ 36%, 1.5 para Hto 26-35%, 2.0 para Hto 16-25% y 2.5 para Hto < 15%).',
          'Un IRC > 2.0% define una anemia regenerativa, en la cual la médula ósea está indemne y responde aumentando la producción (hemólisis autoinmune, hiperesplenismo, microangiopatía o hemorragia aguda una vez que la volemia se ha reexpandido). Un IRC < 2.0% define una anemia hipoproliferativa o arregenerativa, indicando déficit de sustrato (hierro, B12, folatos), daño primario medular (aplasia, leucemia, mielodisplasia) o supresión por citocinas inflamatorias (anemia de enfermedades crónicas, uremia).'
        ]
      }
    ],
    table: {
      title: 'Clasificación Diagnóstica de las Anemias según VCM e Índice Reticulocitario',
      headers: ['Categoría VCM', 'Reticulocitos (IRC)', 'Etiologías Principales', 'Frotis y Marcadores Clave'],
      rows: [
        ['Microcítica (< 80 fL)', 'Arregenerativo (< 2%)', 'Anemia Ferropénica, Rasgo Talasémico, Anemia Sideroblástica', 'Hipocromía, microcitosis, poiquilocitosis, RDW aumentado en ferropenia'],
        ['Normocítica (80-100 fL)', 'Arregenerativo (< 2%)', 'Enfermedad Crónica/Inflamatoria, ERC, Mieloma Múltiple, Aplasia', 'Rouleaux en mieloma; normocromía; ferritina elevada en inflamación'],
        ['Normocítica (80-100 fL)', 'Regenerativo (> 2%)', 'Anemia Hemolítica Aguda, Hemorragia Aguda reciente', 'Esquistocitos (PTT/SHU), esferocitos (AHAI), policromatofilia intensa'],
        ['Macrocítica (> 100 fL)', 'Arregenerativo (< 2%)', 'Déficit Vitamina B12, Déficit Folato, Consumo Etílico, Hipotiroidismo', 'Neutrófilos hipersegmentados (pleocariocitos), macroovalocitos'],
        ['Macrocítica (> 100 fL)', 'Regenerativo (> 2%)', 'Crisis hemolítica intensa con reticulocitosis extrema masiva', 'Los reticulocitos son más voluminosos (>110 fL) y elevan el VCM medido']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Anemia Arregenerativa en Adulto Mayor',
      text: 'Hombre de 72 años, autovalente, consulta en CESFAM por astenia y palidez cutaneomucosa progresiva de 3 meses. Niega melena evidente ni hematuria. Hemograma: Hb 8.8 g/dL, Hto 27%, VCM 74 fL, HCM 24 pg, Leucocitos 6.100/uL, Plaquetas 420.000/uL, Reticulocitos 0.6%. En el examen segmentario se ausculta soplo sistólico eyectivo grado II/VI en foco aórtico, sin taquicardia ni signos de insuficiencia cardíaca.',
      conducta: 'Anemia microcítica hipocrómica con trombocitosis reactiva y respuesta arregenerativa (IRC < 2%). La sospecha rectora es anemia ferropénica secundaria a sangrado digestivo oculto. Se debe solicitar perfil de hierro inmediato y programar endoscopía digestiva alta y colonoscopía de urgencia.'
    },
    keyPoints: [
      'Puntos de corte OMS: Hb < 13 g/dL en varones y < 12 g/dL en mujeres adultas no embarazadas.',
      'El hematocrito aproximado equivale al triple de la hemoglobina (Hto ≈ 3 × Hb); en deshidratación el Hto se sobrestima.',
      'IRC > 2.0% clasifica la anemia como regenerativa: las causas son hemólisis o hemorragia aguda reciente.',
      'IRC < 2.0% clasifica la anemia como arregenerativa: abarca anemias carenciales, aplasias y enfermedades crónicas.',
      'Las pérdidas hemáticas digestivas crónicas son arregenerativas debido a la pérdida concomitante de reservas de hierro.',
      'Trombocitosis reactiva en el hemograma acompaña frecuentemente a la microcitosis en la anemia ferropénica.'
    ],
    questions: [
      {
        stem: '¿Cuál de las siguientes condiciones cursa característicamente con un índice reticulocitario corregido mayor a 2% (anemia regenerativa)?',
        opciones: [
          'A) Anemia ferropénica por gastropatía erosiva crónica',
          'B) Anemia de las enfermedades crónicas asociada a artritis reumatoide',
          'C) Anemia hemolítica autoinmune por anticuerpos calientes',
          'D) Anemia megaloblástica por deficiencia de cobalamina',
          'E) Aplasia medular adquirida secundaria a fármacos'
        ],
        correcta: 'C',
        explicacion: 'La anemia hemolítica autoinmune es una anemia regenerativa por destrucción periférica acelerada de glóbulos rojos, lo que desencadena una enérgica respuesta eritropoyética medular con aumento del índice reticulocitario (>2%). Las opciones A, B, D y E corresponden a anemias hipoproliferativas o arregenerativas (IRC < 2%). Perla. Toda anemia regenerativa sin antecedente de traumatismo o hemorragia aguda reciente es de origen hemolítico hasta demostrar lo contrario.',
        recTag: 'EUNACOM 2021 · Q#05'
      },
      {
        stem: 'Varón de 48 años consulta por astenia. El hemograma revela Hb 9.8 g/dL, VCM 108 fL, plaquetas 190.000/uL y leucocitos normales. ¿Cuál de las siguientes causas es la MENOS probable como explicación de esta macrocitosis?',
        opciones: [
          'A) Consumo crónico de alcohol',
          'B) Hipotiroidismo primario descompensado',
          'C) Rasgo talasémico beta (talasemia menor)',
          'D) Déficit nutricional de vitamina B12',
          'E) Síndrome mielodisplásico temprano'
        ],
        correcta: 'C',
        explicacion: 'El rasgo talasémico produce característicamente anemia microcítica e hipocrómica marcada (VCM típicamente < 72 fL con número normal o aumentado de hematíes), jamás macrocitosis. El alcoholismo, el hipotiroidismo, el déficit de B12/folatos y el síndrome mielodisplásico son causas clásicas de anemia macrocítica (VCM > 100 fL). Perla. Si el enunciado describe microcitosis llamativa con número de glóbulos rojos elevado y RDW normal, piense de inmediato en rasgo talasémico.',
        recTag: 'EUNACOM 2024 · Q#33'
      }
    ]
  },
  {
    id: 'hem-02',
    classId: 'hem-02',
    tier: 2,
    blockNum: 1,
    blockName: 'Síndromes Anémicos Hipoproliferativos y Carenciales',
    topicLabel: '8.2',
    title: 'Perfil de Cinética de Hierro: Ferritina, Transferrina, TIBC y Saturación de Transferrina',
    perfilCode: '1.08.1.002',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'No GES directo · Examen de Laboratorio Perfil V3 (1.08.4.008)',
    reconstrucciones: 'EUNACOM Julio 2019 (Q#20) · EUNACOM Diciembre 2020 (Q#44) · EUNACOM Julio 2023 (Q#11)',
    frecuencia: 'Muy Alta · Patrones de cinética marcial en ferropenia, inflamación crónica y hemocromatosis',
    svg: null, algoTitle: 'Interpretación de la Cinética de Hierro en Medicina Interna',
    diagram: flow('Algoritmo de Cinética de Hierro: Diagnóstico Diferencial Inmediato', [
      { t: 'Paciente con Anemia y Sospecha de Alteración del Metabolismo Férrico', s: 'Solicitar Perfil de Hierro: Ferritina sérica, Ferremia, Transferrina/TIBC y Saturación de Transferrina' },
      { k: 'split', q: 'Evaluar Nivel de Ferritina Sérica (Depósitos Marciales)', s: 'Reactante de fase aguda positivo: refleja depósitos hepáticos y de macrófagos', ll: 'Ferritina < 30 ng/mL (Baja)', rl: 'Ferritina Normal o Elevada (> 100 ng/mL)',
        left: { t: 'Diagnóstico Certero: Ferropenia', s: 'TIBC aumentada, Saturación < 15-20%, Ferremia baja · Iniciar reposición marcial y buscar causa', type: 'acc' },
        right: { t: 'Evaluar Coexistencia Inflamatoria', s: 'Transferrina/TIBC baja, Saturación normal o baja · Sugiere Anemia de Enfermedad Crónica', type: 'warn' },
        ll: 'ferropenia pura', rl: 'inflamación / sobrecarga' },
      { t: 'Punto Crítico en Paciente Inflamado', s: 'Si hay PCR alta, una ferritina < 100 ng/mL puede coexistir con ferropenia real subyacente', type: 'dec', al: 'trampa reactante', from: 'right' },
    ]),
    contexto: 'El perfil de hierro o cinética de hierro es una de las pruebas de laboratorio más frecuentemente preguntadas en el EUNACOM. Permite diferenciar con precisión matemática la anemia ferropénica (depósitos vacíos) de la anemia de la inflamación crónica (hierro atrapado por hepcidina) y de la hemocromatosis. Comprender el rol de la ferritina como reactante de fase aguda positivo y de la transferrina como reactante de fase aguda negativo es indispensable para no errar diagnósticos en pacientes con comorbilidades.',
    contentSections: [
      {
        subhead: '1. Parámetros del Perfil Marcial: Fisiología e Interpretación',
        paragraphs: [
          'La ferritina sérica (valor normal: 30 a 200 ng/mL) es el parámetro más sensible y específico para estimar los depósitos corporales totales de hierro en ausencia de inflamación. Un valor de ferritina menor a 30 ng/mL confirma ferropenia sin necesidad de exámenes invasivos medulares. Sin embargo, dado que la ferritina es un reactante de fase aguda positivo estimulado por interleucina-6, en presencia de infección activa, artritis o neoplasia, su concentración se eleva artificialmente; en estos escenarios, un valor de corte < 100 ng/mL aún traduce ferropenia concomitante.',
          'La transferrina plasmática (valor normal: 200 a 360 mg/dL) es la glicoproteína hepática encargada del transporte sérico del hierro. Corresponde a un reactante de fase aguda negativo (desciende ante la inflamación sistémica). En la anemia ferropénica pura, la síntesis hepática de transferrina aumenta en un intento homeostático de captar hierro residual, reflejándose también en una Capacidad Total de Fijación de Hierro (TIBC) marcadamente elevada.'
        ]
      },
      {
        subhead: '2. Ferremia y Saturación de Transferrina',
        paragraphs: [
          'La ferremia o hierro sérico (normal: 50 a 170 ug/dL) mide el hierro ligado a la transferrina. Tiene marcada fluctuación circadiana y baja tanto en la ferropenia como en la inflamación aguda o crónica, por lo que nunca debe utilizarse en forma aislada para guiar conductas terapéuticas.',
          'El Índice de Saturación de Transferrina (IST = [Hierro sérico / TIBC] × 100, valor normal: 20% a 50%) traduce el porcentaje de sitios transportadores ocupados por hierro. Un IST < 15-20% define ferropenia funcional o absoluta, indicando aporte insuficiente de hierro a los eritroblastos medulares. Por el contrario, un IST > 45-50% orienta a estados de sobrecarga férrica sistémica.'
        ]
      },
      {
        subhead: '3. Patrones Comparativos de Mayor Rendimiento en el Examen',
        paragraphs: [
          'En el rasgo talasémico menor, el perfil de hierro es estrictamente normal o muestra sobrecarga ligera (ferritina normal o alta, transferrina normal, IST normal); iniciar hierro en un paciente talasémico es una mala práctica médica evaluada negativamente.',
          'En la hemocromatosis hereditaria, los depósitos están sobresaturados: ferritina > 500-1.000 ng/mL, IST > 50-60%, transferrina baja y ferremia marcadamente elevada. En la enfermedad de Still del adulto o en el síndrome de activación macrofágica (SAM), la ferritina alcanza concentraciones extremas diagnósticas (> 3.000 a 10.000 ng/mL), diferenciándose de otros cuadros reumatológicos comunes.'
        ]
      }
    ],
    table: {
      title: 'Patrones Diagnósticos del Perfil Marcial en Patologías Frecuentes',
      headers: ['Parámetro', 'Anemia Ferropénica', 'Anemia de Enfermedad Crónica', 'Hemocromatosis Hereditaria', 'Rasgo Talasémico Menor'],
      rows: [
        ['Ferritina Sérica', 'Disminuida (< 30 ng/mL)', 'Elevada (> 100-300 ng/mL)', 'Muy Elevada (> 500-1.000 ng/mL)', 'Normal o Ligeramente Elevada'],
        ['Transferrina / TIBC', 'Aumentada (Síntesis ↑)', 'Disminuida (Reactante negativo)', 'Disminuida o Normal', 'Normal'],
        ['Hierro Sérico (Ferremia)', 'Muy Disminuido', 'Disminuido (Hierro secuestrado)', 'Muy Aumentado', 'Normal'],
        ['Saturación Transferrina (IST)', 'Muy Baja (< 15%)', 'Baja o Normal (15-25%)', 'Muy Alta (> 50-60%)', 'Normal (25-40%)'],
        ['Mecanismo Central', 'Agotamiento de depósitos', 'Secuestro marcial por hepcidina', 'Mutación gen HFE (sobreabsorción)', 'Mutación cadenas globina (no falta hierro)']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Interpretación de Cinética Marcial en Paciente Reumatológica',
      text: 'Mujer de 54 años con artritis reumatoide en tratamiento con metotrexato, consulta por astenia. Hemograma: Hb 9.4 g/dL, VCM 83 fL, Leucocitos 7.800/uL, Plaquetas 390.000/uL. Perfil de hierro: Ferremia 32 ug/dL (VN 50-150), Transferrina 180 mg/dL (VN 200-360), TIBC 225 ug/dL (VN 250-420), Ferritina 380 ng/mL (VN 30-200), Saturación de transferrina 14%. Proteína C reactiva: 24 mg/L.',
      conducta: 'Anemia normocítica secundaria a inflamación crónica (anemia de las enfermedades crónicas), caracterizada por ferritina elevada como reactante de fase aguda y transferrina baja. El tratamiento consiste en optimizar el control de la artritis reumatoide de base; no está indicado suplementar hierro oral.'
    },
    keyPoints: [
      'La ferritina sérica < 30 ng/mL es el indicador más confiable de déficit de hierro en ausencia de inflamación.',
      'La ferritina es un reactante de fase aguda positivo: en presencia de PCR elevada, valores < 100 ng/mL aún sugieren ferropenia.',
      'La transferrina plasmática es un reactante de fase aguda negativo: desciende en sepsis, artritis, cáncer y uremia.',
      'En la anemia ferropénica pura la transferrina y la TIBC se encuentran elevadas.',
      'La ferremia aislada carece de valor diagnóstico diferencial debido a sus fluctuaciones y caída tanto en ferropenia como en infección.',
      'Ferritina > 3.000-5.000 ng/mL en contexto de fiebre y artritis orienta específicamente a Enfermedad de Still del adulto.'
    ],
    questions: [
      {
        stem: '¿Cuál de los siguientes perfiles de laboratorio es el más característico de una anemia ferropénica no complicada?',
        opciones: [
          'A) Ferritina baja, transferrina alta, saturación de transferrina baja',
          'B) Ferritina alta, transferrina baja, saturación de transferrina normal',
          'C) Ferritina alta, transferrina alta, saturación de transferrina alta',
          'D) Ferritina normal, transferrina normal, saturación de transferrina normal',
          'E) Ferritina baja, transferrina baja, saturación de transferrina alta'
        ],
        correcta: 'A',
        explicacion: 'En la anemia ferropénica no complicada los depósitos medulares y hepáticos se agotan, lo que produce ferritina baja (<30 ng/mL); el hígado incrementa la síntesis de transferrina (TIBC alta) para captar el escaso hierro circulante, resultando en un índice de saturación de transferrina marcadamente bajo (<15%). Perla. La tríada clásica de la ferropenia es ferritina baja + transferrina/TIBC alta + saturación baja.',
        recTag: 'EUNACOM 2020 · Q#44'
      },
      {
        stem: 'Hombre de 62 años con antecedente de tuberculosis tratada y bronquiectasias crónicas presenta Hb 10.1 g/dL, VCM 82 fL. Su perfil de hierro muestra ferremia baja, TIBC disminuida y ferritina de 420 ng/mL. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Anemia ferropénica severa',
          'B) Anemia de las enfermedades crónicas',
          'C) Hemocromatosis hereditaria primaria',
          'D) Talasemia beta menor',
          'E) Anemia sideroblástica ligada al cromosoma X'
        ],
        correcta: 'B',
        explicacion: 'La anemia normocítica con ferritina elevada (reactante de fase aguda positivo) y transferrina/TIBC disminuida (reactante negativo) con ferremia baja es la presentación paradigmática de la anemia de las enfermedades crónicas o de la inflamación. El hierro no falta en el organismo sino que se encuentra atrapado e inaccesible en los macrófagos por acción de la hepcidina. Perla. En la anemia por inflamación la ferritina está alta y la transferrina baja; no administrar hierro empírico.',
        recTag: 'EUNACOM 2023 · Q#11'
      }
    ]
  },
  {
    id: 'hem-03',
    classId: 'hem-03',
    tier: 3,
    blockNum: 1,
    blockName: 'Síndromes Anémicos Hipoproliferativos y Carenciales',
    topicLabel: '8.3',
    title: 'Anemia Ferropénica: Diagnóstico, Algoritmo Causal (Digestivo, Menstrual, Celíaco) y Terapia Oral vs Endovenosa',
    perfilCode: '1.08.1.002',
    dx: 'Sospecha', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Prevención y Tratamiento Integral en Niños y Gestantes',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#08) · EUNACOM Julio 2019 (Q#14) · EUNACOM Enero 2022 (Q#22) · EUNACOM Julio 2023 (Q#09)',
    frecuencia: 'Máxima · Primera causa de anemia en el mundo y en Chile; estudio de hemorragia oculta y esquema de sulfato ferroso',
    svg: null, algoTitle: 'Algoritmo de Estudio Causal y Tratamiento Escalonado de la Anemia Ferropénica',
    diagram: flow('Algoritmo Integral de Anemia Ferropénica: Estudio y Tratamiento', [
      { t: 'Confirmación Diagnóstica: Anemia Microcítica (VCM < 80) + Ferritina < 30 ng/mL', s: 'Trombocitosis reactiva frecuente · Todo caso obliga a buscar y documentar la causa del sangrado o malabsorción' },
      { k: 'split', q: 'Estratificación Causal según Sexo y Grupo Etario', s: 'Determina los estudios endoscópicos invasivos inmediatos', ll: 'Mujer Premenopáusica con Hipermenorrea', rl: 'Varón Adulto o Mujer Posmenopáusica',
        left: { t: 'Causa Ginecológica Menstrual', s: 'Anamnesis ginecológica dirigida · Si no hay síntomas digestivos de alarma, no requiere EDA/Colonoscopía inicial', type: 'acc' },
        right: { t: 'Sospecha Obligada: Neoplasia Digestiva', s: 'Indicar Endoscopía Digestiva Alta (EDA) + Colonoscopía Total simultáneas para descartar Cáncer Colorrectal', type: 'warn' },
        ll: 'estudio ginecológico', rl: 'estudio endoscópico dual' },
      { t: 'Esquema Terapéutico Marcial de Primera Línea', s: 'Hierro Oral: Sulfato ferroso 200 mg/día (40-60 mg Fe elemental) alejado de comidas · Mantener 3 a 6 meses posnormalización de Hb', type: 'dec', al: 'terapia de reposición', from: 'left' },
      { t: 'Indicaciones Estrictas de Hierro Endovenoso (Hierro Carboximaltosa / Sacarato)', s: 'Intolerancia oral refractaria, Enfermedad Celíaca/EII activa, ERC en hemodiálisis o 3er trimestre de embarazo', type: 'crit', al: 'fracaso oral', from: 'right' }
    ]),
    contexto: 'La anemia ferropénica es la anemia más frecuente en la práctica médica global y en el examen EUNACOM. El error más grave evaluado en el examen es limitar el manejo a recetar suplementos de hierro sin investigar exhaustivamente la causa de la pérdida. En hombres de cualquier edad y en mujeres posmenopáusicas, la anemia ferropénica debe considerarse secundaria a una neoplasia digestiva oculta (cáncer de colon derecho o gástrico) hasta demostrar lo contrario mediante estudio endoscópico completo.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Etapas del Déficit de Hierro y Manifestaciones Clínicas',
        paragraphs: [
          'El hierro corporal total (aproximadamente 3 a 4 gramos en el adulto) se distribuye entre la hemoglobina eritrocitaria funcional (65%), la mioglobina y enzimas tisulares (10%), y los depósitos celulares en macrófagos hepáticos y del bazo en forma de ferritina y hemosiderina (25%). El balance férrico depende estrictamente de la absorción duodenal activa mediada por el transportador DMT-1, ya que no existe un mecanismo fisiológico activo de excreción marcial (las pérdidas basales ocurren por descamación epitelial y enterocitos, ~1 mg/día).',
          'El déficit de hierro progresa a través de tres etapas continuas: 1) Ferropenia prelatente o depleción de depósitos: la ferritina desciende a < 30 ng/mL, pero la hemoglobina y el VCM se mantienen normales; 2) Ferropenia latente o eritropoyesis ferropénica: la ferremia y la saturación de transferrina caen (<15%) con aumento compensatorio de la transferrina, mientras el frotis muestra anisocitosis incipiente (RDW elevado); y 3) Anemia ferropénica manifiesta: la síntesis de hemoglobina claudica, expresándose como anemia microcítica e hipocrómica con trombocitosis reactiva por estimulación cruzada de la trombopoyetina.',
          'Además del síndrome anémico general (astenia, adinamia, taquicardia, palidez de conjuntivas y pliegues palmares), el déficit tisular de hierro genera alteraciones epiteliales características: coiloniquia (uñas en cuchara), queilitis angular, glositis atrófica dolorosa con pérdida de papilas linguales, pica (ingesta compulsiva de hielo [pagofagia], tierra o almidón) y fragilidad capilar.'
        ]
      },
      {
        subhead: '2. Algoritmo Diagnóstico y Búsqueda Exhaustiva de la Etiología',
        paragraphs: [
          'La confirmación de laboratorio exige un hemograma con VCM < 80 fL, HCM < 27 pg, frotis con microcitosis, dianocitos ocasionales y poiquilocitosis, junto con un perfil marcial demostrativo de ferritina sérica < 30 ng/mL. Si el paciente cursa con un estado inflamatorio asociado, una ferritina < 100 ng/mL combinada con una saturación de transferrina < 15% ratifica el diagnóstico.',
          'El pilar conceptual rector para el EUNACOM es: "La anemia ferropénica no es un diagnóstico final, es un síntoma que exige encontrar el origen del sangrado o de la malabsorción". La anamnesis clasifica la ruta de estudio: en mujeres en edad fértil con hipermenorrea cuantificada y sin síntomas digestivos, la causa ginecológica es la más prevalente y no requiere estudio invasivo rutinario inmediato.',
          'Por el contrario, en varones adultos de cualquier edad y en mujeres posmenopáusicas, la causa rectora es la hemorragia digestiva crónica por lesiones neoplásicas (cáncer de colon derecho, adenocarcinoma gástrico), angiodisplasias, úlceras pépticas o pólipos avanzados. La conducta obligada e inapelable es programar Endoscopía Digestiva Alta (EDA) y Colonoscopía Total. En pacientes con endoscopías negativas y síntomas malabsortivos o resistencia a la terapia oral, debe descartarse activamente Enfermedad Celíaca mediante anticuerpos anti-transglutaminasa tisular IgA y biopsia duodenal.'
        ]
      },
      {
        subhead: '3. Terapia Marcial Oral: Posología Actual, Absorción y Duración',
        paragraphs: [
          'El tratamiento de primera línea es la reposición de hierro por vía oral. Clásicamente se recomendaban dosis fraccionadas de 150 a 200 mg de hierro elemental al día; sin embargo, la evidencia farmacológica contemporánea demuestra que cada dosis de hierro oral estimula la síntesis hepática de hepcidina por hasta 24-48 horas, lo que bloquea transitoriamente la absorción de dosis subsiguientes y satura el tracto digestivo de hierro libre no absorbido, gatillando náuseas, epigastralgia, constipación o diarrea.',
          'La recomendación actual avalada en guías clínicas consiste en administrar 40 a 100 mg de hierro elemental al día (ej. 1 comprimido de sulfato ferroso de 200 mg, que aporta 40 a 60 mg de hierro elemental) o en días alternos (lunes, miércoles y viernes), en ayunas o alejado de las comidas principales, preferentemente asociado a vitamina C (ácido ascórbico) o jugo de cítricos para mantener el hierro en estado ferroso soluble (Fe2+). Debe advertirse expresamente al paciente que el hierro tiñe las deposiciones de color negro azabache (falsa melena sin hedor) para evitar consultas innecesarias a servicios de urgencia.',
          'La respuesta terapéutica sigue una cronología estricta que debe monitorizarse: a) Reticulocitosis medular que alcanza su pico a los 5 a 7 días de iniciado el tratamiento; b) Aumento de la concentración de hemoglobina a razón de 1 a 2 g/dL cada 2 a 3 semanas, alcanzando la normalización clínica al cabo de 4 a 8 semanas; y c) La terapia oral DEBE CONTINUARSE por 3 a 6 meses adicionales una vez normalizada la hemoglobina para repletar por completo los depósitos tisulares de ferritina (> 50-100 ng/mL).'
        ]
      },
      {
        subhead: '4. Indicaciones y Modalidades del Hierro Parenteral (Endovenoso)',
        paragraphs: [
          'El hierro endovenoso está formalmente indicado en situaciones clínicas bien precisas donde la vía oral es ineficaz, dañina o insuficiente: 1) Intolerancia gástrica grave e insalvable al hierro oral tras probar esquemas en días alternos o preparaciones complejas; 2) Malabsorción intestinal documentada (enfermedad celíaca activa, gastrectomía, bypass gástrico, resección ileal amplia o enfermedad inflamatoria intestinal activa); 3) Pacientes con Enfermedad Renal Crónica en estadios 4-5 o en hemodiálisis tratados con agentes estimulantes de la eritropoyesis (EPO); 4) Anemia grave en el tercer trimestre del embarazo (≥ 32 semanas) donde se requiere repleción acelerada antes del parto; y 5) Pérdidas hemáticas activas continuas que exceden la capacidad de absorción duodenal.',
          'Las preparaciones modernas como el Carboximaltosa Férrica y el Hierro Sacarato poseen una estabilidad coloidal elevada y liberan el hierro lentamente al sistema reticuloendotelial, permitiendo infundir dosis únicas masivas de 500 a 1.000 mg en 15 a 30 minutos sin el riesgo histórico de anafilaxia asociado al hierro dextrano de alto peso molecular (el cual requería dosis de prueba previa).'
        ]
      },
      {
        subhead: '5. Criterios de Transfusión y Situaciones Especiales en APS',
        paragraphs: [
          'La anemia ferropénica, al ser de instauración lenta e insidiosa, permite mecanismos compensatorios cardiovasculares extraordinarios (desviación de la curva de disociación de la hemoglobina a la derecha por aumento de 2,3-DPG, redistribución de flujo y gasto cardíaco elevado). Por ello, la transfusión de concentrados de glóbulos rojos no se guía por un valor umbral arbitrario de hemoglobina sino por la presencia de inestabilidad hemodinámica, hipotensión refractaria, taquicardia severa en reposo, disnea clase funcional IV o angina de pecho en pacientes con cardiopatía coronaria previa.',
          'Si un paciente en tratamiento con hierro oral consulta por constipación que inició DESPUÉS del fármaco, se ajusta la dosis a días alternos o se prescribe un laxante osmótico suave (lactulosa o polietilenglicol). No obstante, si el cambio del hábito intestinal (constipación progresiva o alternancia con diarrea) precedía al inicio del hierro, jamás debe atribuirse al medicamento y obliga a adelantar de inmediato la colonoscopía para descartar adenocarcinoma de colon estenosante.'
        ]
      }
    ],
    table: {
      title: 'Comparación Terapéutica: Hierro Oral vs Hierro Endovenoso en APS y Hospital',
      headers: ['Parámetro', 'Hierro Oral (Sulfato Ferroso)', 'Hierro Endovenoso (Carboximaltosa / Sacarato)'],
      rows: [
        ['Indicación Principal', 'Tratamiento estándar de 1ª línea en ferropenia ambulatoria no complicada', 'Malabsorción intestinal, EII, bypass gástrico, intolerancia oral grave, ERC en diálisis, 3er trimestre embarazo'],
        ['Vía y Posología', 'Oral: 200 mg sulfato ferroso (40-60 mg Fe elemental) 1 vez/día o días alternos', 'Infusión EV: 500 a 1.000 mg en dilución salina en 15-30 minutos en ambiente monitorizado'],
        ['Ventajas', 'Bajo costo, disponibilidad universal en red pública GES/APS, fácil administración', 'Repleción marcial ultrarrápida, 100% biodisponible, no depende del transporte duodenal'],
        ['Efectos Adversos', 'Dispepsia, náuseas, constipación, diarrea, tinción oscura de heces', 'Cefalea, rubor facial, flebitis local, náuseas transitorias, hipofosfemia leve transitoria'],
        ['Duración Terapia', 'Normalización de Hb en 1-2 meses + 3 a 6 meses extra para llenar depósitos', 'Dosis total calculada por fórmula de Ganzoni administrada en 1 a 2 sesiones']
      ]
    },
    severityTable: {
      title: 'Estratificación Diagnóstica del Déficit Marcial: Progresión en 3 Fases',
      headers: ['Estadio', 'Ferritina Sérica', 'Hierro Sérico e IST', 'Hemoglobina y VCM', 'Significado Fisiopatológico'],
      rows: [
        ['1. Ferropenia Prelatente', 'Baja (< 30 ng/mL)', 'Normales (Ferremia >50, IST >20%)', 'Normales (Hb >12-13, VCM 80-100)', 'Depósitos medulares y hepáticos vacíos; eritropoyesis aún compensada'],
        ['2. Ferropenia Latente', 'Muy baja (< 15 ng/mL)', 'Bajos (Ferremia <50, IST <15%)', 'Hb normal o en límite bajo; RDW ↑', 'Falta hierro para síntesis de hemo; anisocitosis en frotis'],
        ['3. Anemia Ferropénica', 'Críticamente baja (< 10 ng/mL)', 'IST < 10-12%, TIBC muy elevada', 'Hb baja (<12 o <13), VCM < 80 fL', 'Claudicación eritropoyética franca con microcitosis e hipocromía marcada']
      ]
    },
    treatmentTable: {
      title: 'Cronograma de Respuesta Terapéutica al Hierro y Metas Clínicas',
      headers: ['Tiempo Posinicio', 'Parámetro Clave Evaluado', 'Comportamiento Esperado', 'Conducta Médica'],
      rows: [
        ['48 a 72 horas', 'Estado General y Astenia', 'Mejoría subjetiva precoz por repleción de enzimas tisulares', 'Reasegurar al paciente y confirmar tolerancia digestiva'],
        ['5 a 7 días', 'Recuento de Reticulocitos', 'Crisis reticulocitaria con pico máximo de reticulocitos', 'Primer marcador objetivo de respuesta biológica al tratamiento'],
        ['3 a 4 semanas', 'Concentración de Hemoglobina', 'Aumento de Hb en al menos 1.5 a 2.0 g/dL respecto al basal', 'Si no sube: verificar adherencia, pérdidas persistentes o malabsorción'],
        ['2 meses', 'Normalización Hemograma', 'Normalización de Hb y VCM a rangos de referencia', '¡NO SUSPENDER EL HIERRO! Continuar tratamiento de mantención'],
        ['3 a 6 meses', 'Ferritina Sérica', 'Ferritina sérica > 50-100 ng/mL (depósitos repletados)', 'Momento formal de suspensión del hierro oral y alta hematológica']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Anemia Ferropénica en Varón Adulto y Neoplasia Oculta',
      text: 'Hombre de 58 años, fumador ocasional, consulta en policlínico por disnea de medianos esfuerzos y palpitaciones de 2 meses. No refiere dolor abdominal ni deposiciones oscuras. En el examen destaca palidez cutánea evidente y frecuencia cardíaca de 96 lpm. El hemograma informa: Hb 8.1 g/dL, Hto 25%, VCM 68 fL, HCM 21 pg, Plaquetas 510.000/uL, Leucocitos 6.900/uL, Reticulocitos 0.8%. Perfil de hierro: Ferritina 8 ng/mL, Ferremia 20 ug/dL, TIBC 440 ug/dL, Saturación 4.5%. El paciente refiere que hace 4 meses nota que evacua con menor frecuencia que antes.',
      conducta: 'Anemia ferropénica severa microcítica hipocrómica arregenerativa con trombocitosis reactiva. En un varón de 58 años, el diagnóstico de trabajo mandatario es sangrado digestivo crónico secundario a adenocarcinoma de colon. Se inicia reposición con sulfato ferroso oral y se solicitan con prioridad absoluta colonoscopía total y endoscopía digestiva alta.'
    },
    keyPoints: [
      'La causa principal de anemia ferropénica en varones adultos y mujeres posmenopáusicas es el cáncer de colon.',
      'En mujeres jóvenes con hipermenorrea sin síntomas digestivos la anamnesis ginecológica dirigida suele ser suficiente.',
      'La ferritina sérica < 30 ng/mL confirma el diagnóstico de ferropenia con máxima sensibilidad y especificidad.',
      'La dosis moderna de hierro oral es de 40 a 100 mg de Fe elemental/día o en días alternos para no saturar la hepcidina.',
      'El sulfato ferroso tiñe las deposiciones de negro; advertir siempre para evitar falsas alarmas de melena.',
      'La respuesta medular se objetiva al 5°-7° día con el pico de reticulocitos; la Hb se normaliza al 1°-2° mes.',
      'El hierro oral debe mantenerse durante 3 a 6 meses tras normalizar la Hb para repletar depósitos de ferritina.',
      'Indicaciones de hierro EV: malabsorción (celiaquía/bypass), intolerancia severa, EII activa, hemodiálisis y 3er trimestre gestacional.'
    ],
    questions: [
      {
        stem: 'Hombre de 56 años consulta por fatiga progresiva. Se constata palidez. El hemograma muestra Hb 9.2 g/dL, VCM 71 fL, ferritina 11 ng/mL y sangre oculta en deposiciones positiva. Niega antecedentes mórbidos. ¿Cuál es la conducta diagnóstica más adecuada?',
        opciones: [
          'A) Iniciar sulfato ferroso oral y controlar hemograma en 3 meses',
          'B) Solicitar colonoscopía total y endoscopía digestiva alta',
          'C) Indicar biopsia de médula ósea para descartar aplasia',
          'D) Solicitar electroforesis de hemoglobina y test de Coombs',
          'E) Administrar hierro endovenoso y repetir sangre oculta en 30 días'
        ],
        correcta: 'B',
        explicacion: 'En un varón adulto con anemia ferropénica demostrada, el hallazgo de pérdida marcial obliga imperiosamente a descartar neoplasia maligna del tubo digestivo mediante estudio endoscópico completo (colonoscopía y endoscopía digestiva alta). Limitarse a dar hierro oral sin estudio endoscópico retrasa fatalmente el diagnóstico oncológico. Perla. Todo hombre o mujer posmenopáusica con anemia ferropénica tiene un cáncer digestivo hasta que la colonoscopía y la EDA demuestren lo contrario.',
        recTag: 'EUNACOM 2017 · Q#08'
      },
      {
        stem: '¿En cuál de las siguientes situaciones clínicas se encuentra formalmente indicado el uso de hierro endovenoso en lugar de la vía oral?',
        opciones: [
          'A) Mujer de 22 años con hipermenorrea y Hb de 10.5 g/dL con VCM de 76 fL',
          'B) Paciente con enfermedad renal crónica en hemodiálisis que recibe eritropoyetina',
          'C) Adulto mayor con anemia ferropénica leve que refiere deposiciones oscuras por sulfato ferroso',
          'D) Mujer en su primer trimestre de gestación con Hb 10.8 g/dL',
          'E) Paciente con gastritis crónica superficial no atrófica en tratamiento con omeprazol'
        ],
        correcta: 'B',
        explicacion: 'Los pacientes con enfermedad renal crónica terminal en hemodiálisis tratados con eritropoyetina presentan una demanda marcial masiva que sobrepasa con creces la capacidad de absorción duodenal, sumado al estado inflamatorio urémico que eleva la hepcidina; en ellos el hierro endovenoso es la vía de elección mandatoria. Otras indicaciones formales son malabsorción intestinal comprobada y tercer trimestre del embarazo. Perla. La ERC en hemodiálisis y el bypass gástrico son indicaciones clásicas de hierro endovenoso.',
        recTag: 'EUNACOM 2019 · Q#14'
      },
      {
        stem: 'Una paciente de 28 años con anemia ferropénica inicia tratamiento con sulfato ferroso 200 mg/día. ¿A los cuántos días de iniciado el tratamiento se espera observar el aumento máximo de los reticulocitos en sangre periférica?',
        opciones: [
          'A) A las 24 a 48 horas',
          'B) A los 5 a 7 días',
          'C) A los 21 días',
          'D) A los 45 días',
          'E) A los 3 meses'
        ],
        correcta: 'B',
        explicacion: 'La respuesta eritropoyética medular al tratamiento con hierro oral se manifiesta como una crisis reticulocitaria con aumento progresivo de reticulocitos que alcanza su acmé o valor máximo entre los 5 y 7 días de iniciado el suplemento. La hemoglobina comienza a ascender a las 2 a 3 semanas y los depósitos de ferritina tardan de 3 a 6 meses en llenarse. Perla. El primer signo analítico de eficacia del hierro oral es el pico reticulocitario al 5°-7° día.',
        recTag: 'EUNACOM 2022 · Q#22'
      },
      {
        stem: 'Mujer de 42 años diagnosticada de anemia ferropénica con Hb 9.5 g/dL y ferritina 8 ng/mL inicia sulfato ferroso. Tras 2 meses de tratamiento la Hb se normaliza en 13.2 g/dL. ¿Cuál es la conducta médica correcta respecto a la terapia marcial?',
        opciones: [
          'A) Suspender inmediatamente el sulfato ferroso por normalización de la hemoglobina',
          'B) Mantener el sulfato ferroso por 3 a 6 meses adicionales para repletar los depósitos de hierro',
          'C) Cambiar a hierro endovenoso para evitar toxicidad hepática oral',
          'D) Disminuir la dosis a la mitad y mantener indefinidamente de por vida',
          'E) Reemplazar el sulfato ferroso por complejo vitamínico B12 y ácido fólico'
        ],
        correcta: 'B',
        explicacion: 'La normalización de la concentración de hemoglobina únicamente refleja que la masa eritrocitaria circulante se ha reconstituido, pero los depósitos de hierro (ferritina tisular) continúan depletados. Para evitar recidivas precoces, el tratamiento marcial debe continuarse por al menos 3 a 6 meses tras la normalización de la hemoglobina hasta documentar ferritina sérica normal. Perla. El hierro se mantiene 3 a 6 meses después de que la hemoglobina llega a rango normal.',
        recTag: 'EUNACOM 2023 · Q#09'
      }
    ]
  },
  {
    id: 'hem-04',
    classId: 'hem-04',
    tier: 3,
    blockNum: 1,
    blockName: 'Síndromes Anémicos Hipoproliferativos y Carenciales',
    topicLabel: '8.4',
    title: 'Anemia de la Enfermedad Crónica / Inflamación vs Anemia en la Enfermedad Renal Crónica (EPO y Manejo)',
    perfilCode: '1.08.1.001',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 1): Insuficiencia Renal Crónica Terminal',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#25) · EUNACOM Diciembre 2020 (Q#18) · EUNACOM Julio 2022 (Q#31) · EUNACOM Enero 2024 (Q#10)',
    frecuencia: 'Muy Alta · Diagnóstico diferencial fisiopatológico por hepcidina, diana terapéutica de Hb en ERC (10-11.5 g/dL)',
    svg: null, algoTitle: 'Algoritmo Diferencial y Terapéutico: Inflamación Crónica vs Insuficiencia Renal',
    diagram: flow('Algoritmo de Manejo: Anemia Inflamatoria vs Anemia Renal', [
      { t: 'Anemia Normocítica Normocrómica (VCM 80-100 fL) e Hipoproliferativa (IRC < 2%)', s: 'Evaluar presencia de inflamación sistémica (IL-6, PCR) y función renal estimada (VFG por CKD-EPI)' },
      { k: 'split', q: 'Etiopatogenia Principal: ¿Hepcidina o Déficit de Eritropoyetina (EPO)?', s: 'Diferenciación analítica crucial en Medicina Interna', ll: 'Anemia de Enfermedad Crónica (AEC)', rl: 'Anemia de Enfermedad Renal Crónica (ERC)',
        left: { t: 'Eje IL-6 / Hepcidina Activado', s: 'Ferritina elevada (>100-300 ng/mL), Transferrina baja, Hierro secuestrado en macrófagos · Tratar patología de base', type: 'acc' },
        right: { t: 'Déficit Relativo o Absoluto de EPO', s: 'Pérdida de células peritubulares renales con VFG < 45-60 mL/min · Indicar Agentes Estimulantes de Eritropoyesis', type: 'warn' },
        ll: 'patología inflamatoria', rl: 'falla renal progresiva' },
      { t: 'Manejo en ERC: Protocolo GES MINSAL', s: 'Repletar hierro primero (Meta: Ferritina > 200 ng/mL e IST > 20%) -> Iniciar Eritropoyetina recombinante (rHuEPO)', type: 'dec', al: 'protocolo nefrológico', from: 'right' },
      { t: 'Meta Estricta de Hemoglobina en ERC', s: 'Objetivo terapéutico: Hb entre 10.0 y 11.5 g/dL (¡Evitar Hb > 12-13 g/dL por aumento de ACV, trombosis y muerte!)', type: 'crit', al: 'alerta de seguridad', from: 'right' }
    ]),
    contexto: 'La anemia de las enfermedades crónicas (también denominada anemia de la inflamación) es la segunda anemia más frecuente en la práctica médica general y la causa más común en pacientes hospitalizados. Su fisiopatología está dominada por la hepcidina, hormona hepática que secuestra el hierro en los macrófagos. Por su parte, la anemia en la ERC combina este mecanismo inflamatorio con la falta primaria de producción peritubular de eritropoyetina. El EUNACOM evalúa con extrema insistencia las metas de tratamiento de la anemia renal bajo el protocolo GES, destacando que nunca debe normalizarse la hemoglobina a > 12 g/dL debido a riesgos trombóticos graves.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Molecular de la Hepcidina y el Bloqueo del Hierro',
        paragraphs: [
          'La anemia de la inflamación crónica se desarrolla en el contexto de infecciones prolongadas (tuberculosis, osteomielitis, endocarditis subaguda), neoplasias sólidas y hematológicas, y enfermedades autoinmunes activas (artritis reumatoide, lupus eritematoso sistémico, vasculitis). Su mecanismo central es la sobreexpresión de interleucina-6 (IL-6) e interferón gamma, citocinas proinflamatorias que estimulan masivamente la síntesis y secreción hepática de hepcidina.',
          'La hepcidina actúa como el modulador negativo central de la homeostasis marcial: se une al único exportador celular de hierro conocido, la ferroportina (expresada en la membrana basolateral de los enterocitos duodenales y en la membrana de los macrófagos del sistema reticuloendotelial), provocando su ubiquitinación, internalización y degradación lisosomal. Al degradarse la ferroportina, el hierro queda atrapado irreversiblemente dentro de los macrófagos y de las reservas hepáticas, bloqueándose el reciclaje de hierro derivado de hematíes senescentes hacia los eritroblastos medulares.',
          'De forma paralela y sinérgica, el factor de necrosis tumoral alfa (TNF-alfa) y el interferón suprimen directamente la proliferación de progenitores eritroides (BFU-E y CFU-E) en la médula ósea, acortan la vida media de los glóbulos rojos circulantes de 120 días a 80-90 días por hiperactividad macrofágica, y atenúan la respuesta peritubular de síntesis de eritropoyetina ante el estímulo hipóxico.'
        ]
      },
      {
        subhead: '2. Características Analíticas y Diagnóstico Diferencial de Laboratorio',
        paragraphs: [
          'En las fases iniciales, la anemia de enfermedades crónicas es normocítica y normocrómica (VCM 80-95 fL, HCM normal). Con el paso de los meses, la hiposideremia persistente puede limitar la síntesis de hemo hasta generar una anemia microcítica e hipocrómica leve a moderada (VCM típicamente entre 72 y 79 fL, rara vez < 70 fL). La hemoglobina suele fluctuar entre 8.5 y 11.5 g/dL; una anemia con Hb < 8.0 g/dL debe obligar a buscar sangrado concomitante u otra causa sobreagregada.',
          'El perfil de hierro es patognomónico y define el diagnóstico diferencial con la ferropenia: la ferritina sérica se encuentra elevada (> 100-300 ng/mL) como reactante de fase aguda positivo; la transferrina y la TIBC se encuentran reducidas por ser reactantes de fase aguda negativos; y el hierro sérico está disminuido debido al secuestro intracelular. La saturación de transferrina suele ser normal o levemente disminuida (15-25%). En la médula ósea, el azul de Prusia revela abundantes depósitos de hierro en los macrófagos pero ausencia de hierro en los sideroblastos.',
          'En pacientes complejos con artritis reumatoide o insuficiencia cardíaca y anemia microcítica mixta (ferropenia coexistente con inflamación crónica), la medición del receptor soluble de transferrina (sTfR) y el índice sTfR/log ferritina aclaran el cuadro: un sTfR elevado confirma ferropenia verdadera asociada.'
        ]
      },
      {
        subhead: '3. Fisiopatología Específica de la Anemia en la Enfermedad Renal Crónica (ERC)',
        paragraphs: [
          'A medida que la Enfermedad Renal Crónica progresa por debajo de una velocidad de filtración glomerular (VFG) de 45 a 60 mL/min/1.73m² (estadios 3a y 3b en adelante), la masa de células intersticiales peritubulares de la corteza renal encargadas de sensar la tensión de oxígeno tisular se fibrosa y se reduce drásticamente. Esto genera una incapacidad progresiva para sintetizar y secretar eritropoyetina (EPO) en respuesta a la hipoxia anémica.',
          'Adicionalmente, el estado urémico genera una toxemia metabólica que induce apoptosis de los precursores eritroides, acorta la sobrevida eritrocitaria por daño mecánico y oxidativo de membrana, e inhibe la absorción gastrointestinal de folatos y vitamina B12. La uremia induce además un estado microinflamatorio persistente que eleva la hepcidina, por lo que la anemia renal es un modelo mixto: déficit de EPO más bloqueo funcional de hierro.'
        ]
      },
      {
        subhead: '4. Protocolo Terapéutico GES en ERC: Agentes Estimulantes de la Eritropoyesis (AEE)',
        paragraphs: [
          'En Chile, el manejo de la anemia en la insuficiencia renal crónica terminal está garantizado bajo el régimen GES N° 1. El pilar fundamental previo al inicio de cualquier Agente Estimulante de la Eritropoyesis (rHuEPO o darbepoetina alfa) es asegurar una adecuada repleción de los depósitos marciales corporales.',
          'Las guías clínicas internacionales (KDIGO) y el Ministerio de Salud de Chile establecen que no debe administrarse EPO si la ferritina es < 200 ng/mL (en pacientes en hemodiálisis) o si el índice de saturación de transferrina (IST) es < 20%. Iniciar EPO con reservas marciales bajas genera "resistencia funcional a la eritropoyetina" y depleta instantáneamente el hierro disponible, fracasando el ascenso de la hemoglobina. Por ello, la reposición con hierro endovenoso (hierro sacarato o carboximaltosa) es rutinaria y mandatoria en diálisis.',
          'Una vez garantizadas las reservas de hierro (ferritina > 200-500 ng/mL e IST 20-30%), se indica eritropoyetina recombinante humana subcutánea o endovenosa (dosis inicial: 50 a 100 UI/kg administradas 2 a 3 veces por semana). La respuesta terapéutica esperada es un ascenso suave de la hemoglobina a razón de 1.0 a 2.0 g/dL por mes.'
        ]
      },
      {
        subhead: '5. Ventana de Seguridad y Diana Terapéutica Estricta (Alerta EUNACOM)',
        paragraphs: [
          'La meta terapéutica de hemoglobina en pacientes con ERC tratados con EPO es de 10.0 a 11.5 g/dL (con un límite máximo de seguridad de 12.0 g/dL). Este rango reduce la necesidad de transfusiones sanguíneas y alivia sustancialmente la astenia y la hipertrofia ventricular izquierda asociada a la sobrecarga hiperdinámica.',
          'Múltiples ensayos clínicos aleatorizados mayores (estudios CHOIR, CREATE y TREAT) demostraron de forma concluyente que intentar normalizar la hemoglobina a valores de población sana (> 13.0 g/dL) mediante dosis elevadas de eritropoyetina aumenta de manera estadísticamente significativa el riesgo de accidente cerebrovascular (ACV) isquémico, eventos trombóticos mayores de la fístula arteriovenosa de hemodiálisis, hipertensión arterial refractaria grave y mortalidad cardiovascular global. Por tanto, si la hemoglobina supera los 11.5 a 12.0 g/dL, la conducta inmediata es reducir la dosis de EPO en un 25-50% o suspenderla transitoriamente.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Anemia Ferropénica vs Enfermedad Crónica vs ERC',
      headers: ['Característica', 'Anemia Ferropénica', 'Anemia de Enf. Crónicas', 'Anemia Renal (ERC)'],
      rows: [
        ['VCM Eritrocitario', 'Microcítica franca (< 80, fqte < 72 fL)', 'Normocítica (80-95); microcítica tardía', 'Normocítica normocrómica pura (80-100 fL)'],
        ['Ferritina Sérica', 'Disminuida (< 30 ng/mL)', 'Elevada (> 100 a 500 ng/mL)', 'Normal o elevada (según estado inflamatorio)'],
        ['Transferrina / TIBC', 'Aumentada (> 360 mg/dL)', 'Disminuida (< 200 mg/dL)', 'Normal o disminuida'],
        ['Saturación Transferrina (IST)', 'Muy baja (< 15%)', 'Normal o baja (15-25%)', 'Normal o baja (evaluar ferropenia funcional)'],
        ['Mecanismo Central', 'Falta total de hierro corporal', 'Secuestro marcial inducido por Hepcidina', 'Déficit de producción renal de Eritropoyetina'],
        ['Tratamiento Fundamental', 'Hierro oral o endovenoso', 'Tratar la enfermedad inflamatoria de base', 'Hierro EV (repleción previa) + Eritropoyetina (AEE)']
      ]
    },
    severityTable: {
      title: 'Estratificación del Manejo de la Anemia en Enfermedad Renal Crónica (KDIGO / GES)',
      headers: ['Nivel de Hb / Parámetro', 'Estado Clínico', 'Intervención Terapéutica', 'Alerta de Seguridad'],
      rows: [
        ['Hb < 10.0 g/dL + Ferritina < 200 ng/mL', 'Déficit de hierro predominante', 'Hierro EV prioritario; NO iniciar EPO aún', 'EPO sin hierro genera resistencia y fracaso'],
        ['Hb < 10.0 g/dL + Ferritina > 200 ng/mL', 'Criterio de inicio de EPO', 'Iniciar rHuEPO 50-100 UI/kg 2-3 v/sem SC/EV', 'Monitorizar presión arterial semanalmente'],
        ['Hb 10.0 a 11.5 g/dL (Rango Meta)', 'Objetivo terapéutico alcanzado', 'Mantener dosis de EPO y monitoreo mensual', 'Rango óptimo con mínimo riesgo cardiovascular'],
        ['Hb > 11.5 a 12.0 g/dL', 'Riesgo de sobrecorrección', 'Reducir dosis de EPO en un 25 a 50%', 'Prevenir trombosis de la fístula arteriovenosa'],
        ['Hb > 12.0 a 13.0 g/dL (Peligro)', 'Sobredosis / hiperviscosidad', 'Suspender EPO temporalmente hasta Hb < 11.5', 'Aumento demostrado de ACV y mortalidad (TREAT)']
      ]
    },
    treatmentTable: {
      title: 'Algoritmo de Fármacos Estimulantes y Coadyuvantes en la Anemia Renal',
      headers: ['Fármaco / Agente', 'Vía y Dosis Estándar', 'Objetivo Primario', 'Consideración Práctica EUNACOM'],
      rows: [
        ['Eritropoyetina Humana Recombinante (rHuEPO)', '50-100 UI/kg SC 2 a 3 veces/semana (o EV en diálisis)', 'Estimular progenitores CFU-E para ascender Hb', 'Requiere vía SC en prediálisis por mejor biodisponibilidad'],
        ['Darbepoetina Alfa (AEE de acción prolongada)', '0.45 ug/kg SC o EV una vez por semana o cada 2 sem', 'Estimulación sostenida con menor frecuencia de inyecciones', 'Mayor vida media plasmática gracias a hiperglicosilación'],
        ['Hierro Sacarato o Carboximaltosa EV', '100 mg EV en cada sesión de diálisis (hasta 1.000 mg)', 'Mantener saturación transferrina >20% y ferritina >200', 'Condición sine qua non para que la EPO sea efectiva'],
        ['Control de la Presión Arterial', 'Fármacos antihipertensivos IECA/ARA-II o BCC', 'Controlar el vasoespasmo endotelial inducido por EPO', 'La EPO eleva la presión arterial en el 20-30% de los casos']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Manejo de Anemia en Paciente Renal en Diálisis',
      text: 'Mujer de 64 años con nefropatía diabética en hemodiálisis trisemanal por fístula nativa braquiocefálica. En sus controles mensuales presenta Hb 8.7 g/dL, VCM 88 fL, ferritina 110 ng/mL y saturación de transferrina 14%. La enfermera de nefrología propone aumentar la dosis de eritropoyetina de 4.000 a 8.000 UI en cada sesión. La paciente está asintomática en reposo, con PA 135/80 mmHg.',
      conducta: 'Conducta errónea. La paciente presenta ferropenia funcional absoluta asociada (ferritina < 200 ng/mL e IST < 20%). Aumentar la dosis de eritropoyetina sin reponer hierro no elevará la hemoglobina y aumentará el costo y la toxicidad. La conducta correcta es suspender el aumento de EPO e indicar hierro sacarato endovenoso 100 mg en cada sesión de hemodiálisis hasta repletar reservas.'
    },
    keyPoints: [
      'La anemia de enfermedades crónicas está mediada por hepcidina inducida por IL-6, que degrada la ferroportina.',
      'Perfil clásico de la anemia de la inflamación: ferritina elevada (> 100-300), transferrina baja y ferremia baja.',
      'La anemia en la ERC se debe primariamente al déficit de síntesis peritubular de eritropoyetina.',
      'Antes de iniciar eritropoyetina en un paciente renal es obligatorio repletar el hierro (ferritina > 200 ng/mL e IST > 20%).',
      'La diana terapéutica de hemoglobina en la ERC con EPO es estrictamente de 10.0 a 11.5 g/dL.',
      'Buscar normalizar la hemoglobina a > 12-13 g/dL en ERC con EPO aumenta el riesgo de ACV, trombosis de fístula y muerte.',
      'La hipertensión arterial es el efecto adverso cardiovascular más común del uso de eritropoyetina.',
      'La anemia por inflamación no se trata con hierro empírico; el tratamiento es el control estricto de la enfermedad de base.'
    ],
    questions: [
      {
        stem: '¿Cuál es el mecanismo fisiopatológico cardinal responsable del desarrollo de la anemia de las enfermedades crónicas?',
        opciones: [
          'A) Destrucción intravascular de eritrocitos mediada por activación del complemento',
          'B) Aumento de la síntesis hepática de hepcidina inducida por citocinas proinflamatorias como la IL-6',
          'C) Anticuerpos dirigidos contra los receptores de eritropoyetina en la médula ósea',
          'D) Pérdida acelerada de hierro por descamación acelerada del epitelio digestivo',
          'E) Deficiencia congénita en la síntesis de cadenas beta de la hemoglobina'
        ],
        correcta: 'B',
        explicacion: 'El evento fisiopatológico central en la anemia de la inflamación crónica es la hipersecreción hepática de hepcidina estimulada por citocinas como la interleucina-6 (IL-6). La hepcidina induce la internalización y destrucción de la ferroportina, atrapando el hierro dentro de los macrófagos e impidiendo su transporte a la médula ósea para la eritropoyesis. Perla. La hepcidina destruye la ferroportina y secuestra el hierro en los macrófagos.',
        recTag: 'EUNACOM 2018 · Q#25'
      },
      {
        stem: 'Varón de 67 años con enfermedad renal crónica en etapa 5 en hemodiálisis crónica se encuentra en tratamiento con eritropoyetina recombinante humana. Su último control de laboratorio muestra Hb 12.8 g/dL y PA 165/95 mmHg. ¿Cuál es la conducta más adecuada respecto a su tratamiento hematológico?',
        opciones: [
          'A) Aumentar la dosis de eritropoyetina para alcanzar una hemoglobina de 14 g/dL',
          'B) Mantener la dosis actual de eritropoyetina y agregar un diurético de asa',
          'C) Reducir la dosis o suspender transitoriamente la eritropoyetina para situar la Hb entre 10.0 y 11.5 g/dL',
          'D) Indicar sangría terapéutica de urgencia de 500 mL',
          'E) Cambiar la eritropoyetina por suplementación con hierro oral en dosis altas'
        ],
        correcta: 'C',
        explicacion: 'En pacientes con insuficiencia renal crónica tratados con agentes estimulantes de la eritropoyesis, el objetivo estricto de hemoglobina es de 10.0 a 11.5 g/dL (máximo 12.0 g/dL). Valores superiores aumentan significativamente el riesgo de accidente cerebrovascular isquémico, trombosis del acceso vascular y descompensación hipertensiva. Por ello, ante Hb de 12.8 g/dL se debe suspender temporalmente o disminuir la dosis en un 25-50%. Perla. La meta de Hb en ERC con EPO es de 10 a 11.5 g/dL; nunca intentar normalizar a más de 12 g/dL.',
        recTag: 'EUNACOM 2020 · Q#18'
      },
      {
        stem: 'Paciente de 59 años con antecedentes de lupus eritematoso sistémico activo y VFG de 80 mL/min presenta Hb 9.6 g/dL, VCM 85 fL. El perfil de hierro informa ferritina de 450 ng/mL, TIBC disminuida y ferremia baja. ¿Cuál es la conducta médica más apropiada?',
        opciones: [
          'A) Iniciar sulfato ferroso oral 200 mg cada 8 horas',
          'B) Administrar hierro sacarato endovenoso en infusión semanal',
          'C) Indicar eritropoyetina humana recombinante subcutánea',
          'D) Ajustar el tratamiento inmunosupresor para controlar la actividad del lupus',
          'E) Indicar transfusión de dos unidades de glóbulos rojos desleucocitados'
        ],
        correcta: 'D',
        explicacion: 'El cuadro corresponde a una anemia de las enfermedades crónicas secundaria a lupus eritematoso activo (anemia normocítica con ferritina elevada y transferrina/TIBC baja). En esta entidad no hay deficiencia de hierro corporal, sino un bloqueo de su utilización por inflamación mediada por citocinas. Por tanto, el tratamiento consiste en tratar y controlar la enfermedad inflamatoria de base. Administrar hierro oral o EV es inútil y potencialmente tóxico. Perla. La anemia de enfermedades crónicas se trata optimizando el control de la enfermedad autoinmune o infecciosa de base.',
        recTag: 'EUNACOM 2022 · Q#31'
      },
      {
        stem: '¿Cuál es el requisito indispensable que debe comprobarse y cumplirse ANTES de iniciar tratamiento con eritropoyetina en un paciente con anemia secundaria a enfermedad renal crónica?',
        opciones: [
          'A) Confirmar un aclaramiento de creatinina mayor a 60 mL/min',
          'B) Demostrar niveles de ferritina sérica > 200 ng/mL y saturación de transferrina > 20%',
          'C) Realizar una biopsia de médula ósea que demuestre ausencia de mielodisplasia',
          'D) Administrar previamente tres dosis de inmunoglobulina endovenosa',
          'E) Mantener al paciente en terapia con antibióticos profilácticos'
        ],
        correcta: 'B',
        explicacion: 'Para que la eritropoyetina pueda estimular eficazmente la eritropoyesis en la médula ósea, es estrictamente obligatorio asegurar una adecuada disponibilidad de hierro. Las guías clínicas exigen que la ferritina sérica sea mayor a 200 ng/mL (en hemodiálisis) y el índice de saturación de transferrina mayor a 20% antes de prescribir EPO. Si no se repletan los depósitos previamente, el tratamiento fracasa por ferropenia funcional inducida. Perla. Sin hierro adecuado (ferritina > 200 e IST > 20%), la eritropoyetina no funciona.',
        recTag: 'EUNACOM 2024 · Q#10'
      }
    ]
  },
  {
    id: 'hem-05',
    classId: 'hem-05',
    tier: 2,
    blockNum: 1,
    blockName: 'Síndromes Anémicos Hipoproliferativos y Carenciales',
    topicLabel: '8.5',
    title: 'Aplasia Medular e Hipofunción Medular Adquirida vs Fármacos Mielotóxicos',
    perfilCode: '1.08.1.008',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES directo · Derivación Prioritaria a Hematología de Adultos',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#40) · EUNACOM Enero 2021 (Q#19)',
    frecuencia: 'Media · Pancitopenia sin esplenomegalia, biopsia de médula ósea con celularidad < 25%',
    svg: null, algoTitle: 'Enfrentamiento de la Pancitopenia en el Adulto en APS',
    diagram: flow('Algoritmo de Enfrentamiento de la Pancitopenia: Aplasia Medular', [
      { t: 'Pancitopenia en Sangre Periférica (Anemia + Leucopenia/Neutropenia + Trombocitopenia)', s: 'Confirmar en frotis · Descartar pseudotrombocitopenia por EDTA · Evaluar examen físico' },
      { k: 'split', q: '¿Presencia de Esplenomegalia o Adenopatías Palpables?', s: 'Signo semiológico discriminador crucial en Medicina Interna', ll: 'Sin Esplenomegalia ni Adenopatías', rl: 'Con Esplenomegalia o Adenopatías Claras',
        left: { t: 'Sospecha Alta: Aplasia Medular', s: 'Médula hipocelular · Suspender fármacos mielotóxicos inmediatamente · Derivar a Biopsia de Médula Ósea', type: 'acc' },
        right: { t: 'Sospecha de Hiperesplenismo / Infiltración', s: 'Causas: Cirrosis/Hipertensión portal, Linfoma, Leucemia, Leishmaniasis o Enfermedad de Gaucher', type: 'warn' },
        ll: 'médula vacía', rl: 'destrucción / infiltración' },
      { t: 'Criterio Diagnóstico Confirmatorio de Aplasia Medular', s: 'Biopsia de médula ósea con celularidad hematopoyética < 25% y reemplazo adiposo masivo, sin fibrosis ni blastos', type: 'crit', al: 'confirmación histológica', from: 'left' }
    ]),
    contexto: 'La aplasia medular adquirida es una falla hematopoyética global caracterizada por la desaparición selectiva de los progenitores hematopoyéticos en la médula ósea, que es reemplazada por tejido graso. El EUNACOM evalúa con frecuencia la tríada clínica de la pancitopenia (astenia por anemia, infecciones por neutropenia y sangrados mucocutáneos por trombocitopenia) y el dato semiológico indispensable de que la aplasia medular cursa SIN esplenomegalia ni adenopatías. Identificar y suspender de inmediato los fármacos mielotóxicos asociados es una competencia médica de primer nivel.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Etiología y Fármacos Mielotóxicos Culpables',
        paragraphs: [
          'La aplasia medular se origina en la inmensa mayoría de los casos (>75%) por un mecanismo autoinmune idiopático, en el cual linfocitos T citotóxicos activados (CD8+) reconocen antígenos en las células madre hematopoyéticas pluripotenciales (CD34+) y liberan interferón gamma y factor de necrosis tumoral, induciendo la apoptosis de la célula madre y el colapso de las tres series celulares.',
          'Las causas secundarias comprenden exposiciones ambientales y ocupacionales (benceno, pesticidas organofosforados, radiaciones ionizantes), infecciones virales (virus de hepatitis no-A no-B no-C, virus de Epstein-Barr, parvovirus B19 en crisis aplásicas puras) y fármacos. Entre los fármacos clásicamente inductores de aplasia medular dependiente de dosis o idiosincrática destacan el cloranfenicol, sales de oro, carbamazepina, fenitoína, sulfonamidas, propiltiouracilo, metimazol, antitiroideos y quimioterápicos citostáticos.'
        ]
      },
      {
        subhead: '2. Clínica de la Pancitopenia y Criterios Diagnósticos de Camitta',
        paragraphs: [
          'El cuadro clínico se expresa por las consecuencias directas de la claudicación celular: síndrome anémico insidioso, síndrome purpúrico (petequias, equimosis, gingivorragia, epistaxis por plaquetas < 20.000/uL) y propensión a infecciones bacterianas o fúngicas oportunistas graves por neutropenia. El examen físico es rigurosamente negativo para esplenomegalia, hepatomegalia o linfoadenopatías; el hallazgo de esplenomegalia descarta aplasia primaria y orienta a cirrosis con hiperesplenismo, mielofibrosis o leucemia.',
          'El diagnóstico exige mielograma y biopsia osteomedular (cresta ilíaca): la celularidad global es < 25% del espacio medular, reemplazado por adipocitos maduros, sin células neoplásicas, blastos ni aumento de reticulina. Los criterios de Camitta definen la Aplasia Medular Grave (al menos 2 de 3): neutrófilos < 500/uL, plaquetas < 20.000/uL, o reticulocitos absolutos < 20.000/uL (o < 1%). Si los neutrófilos son < 200/uL, se clasifica como Muy Grave.'
        ]
      },
      {
        subhead: '3. Manejo Inicial, Medidas de Soporte y Derivación de Urgencia',
        paragraphs: [
          'Ante la sospecha de aplasia medular en APS, la conducta inicial obligada consiste en: 1) Suspender de inmediato todo fármaco potencialmente mielotóxico; 2) Manejo profiláctico estricto de infecciones (aislamiento protector, evitar inyecciones intramusculares por riesgo de hematomas profundos); 3) Soporte transfusional restrictivo con glóbulos rojos y plaquetas desleucocitados e irradiados (para evitar la aloinmunización frente a antígenos HLA si el paciente es candidato a trasplante); y 4) Derivación inmediata a centro de hematología terciario.',
          'El tratamiento curativo de elección en pacientes jóvenes (< 40-50 años) con donante hermano HLA idéntico es el Trasplante Alogénico de Progenitores Hematopoyéticos. En pacientes mayores o sin donante familiar, la terapia de elección es la Inmunosupresión Intensa con Globulina Antitimocito (ATG) más Ciclosporina A y eltrombopag (agonista del receptor de trombopoyetina).'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial de la Pancitopenia en Sangre Periférica',
      headers: ['Patología', 'Médula Ósea', 'Esplenomegalia', 'Frotis Periférico', 'Clave Diagnóstica'],
      rows: [
        ['Aplasia Medular Adquirida', 'Hipocelular (<25%), infiltrada por grasa', 'Ausente (0%)', 'Pancitopenia sin anomalías morfológicas', 'Médula vacía sin organomegalia ni blastos'],
        ['Leucemia Aguda (LMA / LLA)', 'Hipercelular con > 20% de blastos', 'Frecuente (especialmente LLA)', 'Blastos circulantes, bastones de Auer en LMA', 'Pancitopenia con blastos en frotis periférico'],
        ['Síndrome Mielodisplásico', 'Normo o hipercelular con dishemopoyesis', 'Rara o ausente', 'Anisocitosis, hipogranulación, neutrófilos Pelger', 'Displasia celular multilínea en adultos mayores'],
        ['Mielofibrosis Primaria', 'Fibrosis reticulínica severa (biopsia seca)', 'Esplenomegalia masiva', 'Dacriocitos (células en lágrima), leucoeritroblastosis', 'Punción aspirativa seca + dacriocitos + bazo gigante'],
        ['Cirrosis con Hiperesplenismo', 'Médula normal o hiperplásica reactiva', 'Presente (Hipertensión portal)', 'Macrocitosis leve por alcoholismo / daño hepático', 'Estigmas de hepatopatía crónica + esplenomegalia']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Pancitopenia Febril tras Uso de Antitiroideos',
      text: 'Mujer de 32 años con enfermedad de Graves-Basedow tratada con tiamazol (metimazol) 20 mg/día desde hace 5 semanas, consulta en urgencias por fiebre de 38.8 °C, odinofagia intensa con úlceras orales necróticas y petequias en extremidades inferiores. En el examen físico no se palpa esplenomegalia ni linfoadenopatías. Hemograma: Hb 7.8 g/dL, Leucocitos 900/uL, RAN 120/uL, Plaquetas 14.000/uL, Reticulocitos 0.2%.',
      conducta: 'Aplasia medular aguda secundaria a toxicidad por tiamazol (agranulocitosis/aplasia medicamentosa). Se debe suspender inmediatamente el tiamazol, hospitalizar en aislamiento protector con neutropenia febril de alto riesgo, iniciar ceftazidima o piperacilina/tazobactam endovenoso empírico inmediato, transfundir plaquetas si hay sangrado y derivar con urgencia a hematología para biopsia medular.'
    },
    keyPoints: [
      'La aplasia medular cursa con pancitopenia en sangre periférica y médula ósea hipocelular (<25% celularidad).',
      'Signo semiológico de valor diagnóstico crucial: la aplasia medular NO presenta esplenomegalia ni adenopatías.',
      'Si hay pancitopenia con esplenomegalia palpable, sospechar hiperesplenismo, cirrosis, leucemia o mielofibrosis.',
      'Fármacos clásicos inductores de aplasia: cloranfenicol, antitiroideos (tiamazol), carbamazepina y quimioterapia.',
      'Criterios de gravedad de Camitta: neutrófilos < 500/uL, plaquetas < 20.000/uL o reticulocitos < 20.000/uL.',
      'El tratamiento definitivo en pacientes jóvenes (< 40-50 años) es el trasplante alogénico de médula ósea con donante HLA compatible.'
    ],
    questions: [
      {
        stem: 'Hombre de 24 años consulta por epistaxis repetidas, astenia progresiva y fiebre ocasional. En el examen se constata palidez intensa y petequias en tronco y extremidades. No se palpan adenopatías ni esplenomegalia. El hemograma muestra Hb 7.2 g/dL, leucocitos 1.400/uL con neutrófilos absolutos de 380/uL y plaquetas 12.000/uL. ¿Cuál es el diagnóstico de sospecha inicial más probable?',
        opciones: [
          'A) Cirrosis hepática con hiperesplenismo congestivo',
          'B) Aplasia medular adquirida',
          'C) Mononucleosis infecciosa por virus de Epstein-Barr',
          'D) Púrpura trombocitopénica inmune pura',
          'E) Talasemia mayor descompensada'
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una pancitopenia grave (anemia, neutropenia severa y trombocitopenia profunda) en ausencia completa de esplenomegalia y adenopatías, lo cual es la presentación clínica clásica de la aplasia medular. El hiperesplenismo y las neoplasias hematológicas infiltrativas habitualmente cursan con organomegalia. Perla. Pancitopenia sin esplenomegalia ni adenopatías es altamente sugerente de aplasia medular.',
        recTag: 'EUNACOM 2018 · Q#40'
      },
      {
        stem: '¿Cuál de los siguientes hallazgos anatomopatológicos en la biopsia osteomedular confirma de manera definitiva el diagnóstico de aplasia medular?',
        opciones: [
          'A) Médula ósea hipercelular con más del 20% de mieloblastos y bastones de Auer',
          'B) Fibrosis reticulínica difusa grado 3 con osteoesclerosis',
          'C) Celularidad hematopoyética global menor al 25% con infiltración adiposa extensa y ausencia de células neoplásicas',
          'D) Hiperplasia eritroide severa con abundantes sideroblastos en anillo',
          'E) Infiltración por células plasmáticas monoclonales mayor al 60%'
        ],
        correcta: 'C',
        explicacion: 'El criterio anatomopatológico de certeza para el diagnóstico de aplasia medular es una celularidad hematopoyética inferior al 25% del espacio medular (o inferior al 50% si menos del 30% de las células remanentes son hematopoyéticas), con reemplazo adiposo masivo y ausencia de fibrosis, displasia significativa o infiltración por blastos o neoplasias sólidas. Perla. La biopsia en aplasia medular demuestra una médula ósea despoblada sustituida por tejido graso.',
        recTag: 'EUNACOM 2021 · Q#19'
      }
    ]
  }
];

module.exports = {
  bloque1,
  flow
};
