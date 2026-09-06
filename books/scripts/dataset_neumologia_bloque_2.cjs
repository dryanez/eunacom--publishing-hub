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

const bloque2 = [
  {
    id: 'resp-06',
    classId: 'resp-06',
    tier: 3,
    blockNum: 2,
    blockName: 'Infecciones Respiratorias Bajas y Supuraciones',
    topicLabel: '2.1',
    title: 'Neumonía Adquirida en la Comunidad (NAC): Diagnóstico y Severidad CURB-65',
    perfilCode: '1.05.1.027',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Neumonía Adquirida en la Comunidad de Manejo Ambulatorio en Personas de 65 años y más',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#12) · EUNACOM Diciembre 2020 (Q#45) · EUNACOM Diciembre 2022 (Q#33)',
    frecuencia: 'Máxima · Tema central de medicina interna en todos los exámenes',
    svg: null, algoTitle: 'Algoritmo de Estratificación de Severidad y Destino en NAC (CURB-65)',
    diagram: flow('Algoritmo de Estratificación y Destino en NAC (CURB-65)', [
      { t: 'Sospecha Clínica y Confirmación Radiológica', s: 'Clínica aguda (fiebre, tos, crépitos) + Infiltrado pulmonar nuevo en Rx tórax' },
      { k: 'split', q: 'Cálculo de Score CURB-65 (Confusión · Urea > 7 · FR ≥ 30 · PAS < 90 o PAD ≤ 60 · Edad ≥ 65)', s: 'Puntaje de 0 a 5 define severidad y sitio de atención', ll: '0 a 1 punto (bajo riesgo)', rl: '≥ 2 puntos (moderado a severo)',
        left: { t: 'Manejo Ambulatorio (Mortalidad < 2%)', s: 'Tratamiento oral en domicilio · Control a las 48 h · CURB-65 = 1 por edad puede ser ambulatorio', type: 'acc' },
        right: { t: 'Hospitalización Inmediata (Mortalidad > 9%)', s: '2 puntos: Cama básica · ≥ 3 puntos: Evaluar UCI/UTI (Criterios ATS/IDSA)', type: 'warn' } },
      { t: 'Criterios Mayores ATS/IDSA para Ingreso a UCI', s: '1 criterio mayor (Shock séptico con vasopresores O Necesidad de ventilación invasiva) → UCI obligatoria', type: 'dec', al: 'criterios UCI', from: 'right' },
    ]),
    contexto: 'La NAC es una de las infecciones con mayor morbimortalidad en Chile y garantía GES en mayores de 65 años. El EUNACOM exige el cálculo exacto del score CURB-65 / CRB-65, la definición del lugar de tratamiento (ambulatorio, sala general o UCI) y el reconocimiento de complicaciones precoces como el derrame paraneumónico.',
    contentSections: [
      {
        subhead: '1. Definición, Epidemiología e Impacto Sanitario (GES)',
        paragraphs: [
          'La <strong>Neumonía Adquirida en la Comunidad (NAC)</strong> es una infección aguda del parénquima pulmonar adquirida fuera del ámbito hospitalario o que se manifiesta en las primeras 48 horas tras el ingreso. Representa la principal causa de muerte por patología infecciosa en adultos mayores en Chile.',
          'El Ministerio de Salud garantiza por <strong>GES la atención integral de la NAC en personas de 65 años y más</strong>: ante la sospecha clínica, el paciente tiene derecho a confirmación diagnóstica radiológica e inicio del tratamiento antimicrobiano en menos de 24 horas desde el ingreso.',
        ],
      },
      {
        subhead: '2. Etiología Microbiológica por Grupos de Riesgo',
        paragraphs: [
          'El patógeno bacteriano aislado con mayor frecuencia en todos los grupos de edad y niveles de gravedad sigue siendo <strong><em>Streptococcus pneumoniae</em> (neumococo)</strong>, responsable de más del 50% de las neumonías bacterianas identificadas.',
          'En adultos jóvenes previamente sanos destacan <em>Mycoplasma pneumoniae</em> y virus respiratorios (Influenza, VRS, SARS-CoV-2). En adultos mayores, tabaquistas o portadores de EPOC se asocian frecuentemente <em>Haemophilus influenzae</em> y <em>Moraxella catarrhalis</em>. En pacientes con demencia o trastornos deglutorios se debe sospechar neumonía aspirativa por anaerobios orales y bacilos gramnegativos entéricos.',
        ],
      },
      {
        subhead: '3. Estratificación Pronóstica con Scores CURB-65 y CRB-65',
        paragraphs: [
          'La decisión del sitio de atención clínica (ambulatorio, sala general o UCI) se fundamenta en la escala pronóstica <strong>CURB-65</strong>, validada por la Sociedad Británica del Tórax. Cada parámetro aporta 1 punto:<br>' +
          '• <strong>C (Confusión):</strong> Desorientación témporo-espacial aguda o test mental abreviado ≤ 8.<br>' +
          '• <strong>U (Urea / BUN):</strong> Nitrógeno ureico en sangre (BUN) &gt; 19 mg/dL (o Urea sérica &gt; 42 mg/dL / &gt; 7 mmol/L).<br>' +
          '• <strong>R (Respiratorio):</strong> Frecuencia respiratoria ≥ 30 respiraciones por minuto.<br>' +
          '• <strong>B (Blood pressure):</strong> Presión arterial sistólica &lt; 90 mmHg o diastólica ≤ 60 mmHg.<br>' +
          '• <strong>65:</strong> Edad cronológica ≥ 65 años.',
          'En atención primaria, donde el laboratorio de urgencia no está disponible de inmediato, se utiliza el <strong>CRB-65</strong> (omitiendo la urea): 0 puntos permite manejo ambulatorio seguro; 1 a 2 puntos sugiere derivación para evaluación hospitalaria; ≥ 3 puntos indica hospitalización urgente.',
        ],
      },
      {
        subhead: '4. Criterios de Ingreso a UPC (Consenso ATS/IDSA Mayores y Menores)',
        paragraphs: [
          'El score CURB-65 identifica mortalidad pero no reemplaza el juicio clínico intensivo. La Sociedad Americana del Tórax y la IDSA establecen criterios específicos para el ingreso directo a <strong>Unidad de Cuidados Intensivos (UCI)</strong>.',
          'Se exige la presencia de <strong>al menos 1 criterio mayor</strong> (necesidad de ventilación mecánica invasiva o shock séptico refractario con requerimiento de drogas vasoactivas) <strong>O al menos 3 criterios menores</strong> (FR ≥ 30 rpm, PaO₂/FiO₂ ≤ 250, infiltrados multilobares en la Rx, confusión mental, BUN ≥ 20 mg/dL, leucopenia &lt; 4.000/uL, trombocitopenia &lt; 100.000/uL, hipotermia central &lt; 36 °C o hipotensión arterial con necesidad de resucitación agresiva de fluidos).',
        ],
      },
      {
        subhead: '5. Enfrentamiento Diagnóstico y Complicaciones Supurativas Precoces',
        paragraphs: [
          'La confirmación categórica de NAC <strong>exige indefectiblemente una Radiografía de tórax</strong> (proyecciones anteroposterior/posteroanterior y lateral) que demuestre una condensación alveolar, broncograma aéreo o infiltrados intersticiales nuevos.',
          'Si la fiebre persiste tras 72 horas de antibioticoterapia adecuada, es obligatorio repetir la radiografía o solicitar TAC de tórax para descartar <strong>derrame paraneumónico complicado / empiema</strong>, absceso pulmonar o infección por gérmenes resistentes. En todo derrame paraneumónico &gt; 10 mm de espesor en decúbito lateral está formalmente indicada la <strong>toracocentesis diagnóstica precoz</strong>.',
        ],
      },
    ],
    table: {
      title: 'Score CURB-65: Estratificación de Mortalidad y Sitio de Manejo',
      headers: ['Puntaje CURB-65', 'Riesgo Clínico', 'Mortalidad a 30 días', 'Sitio de Atención Recomendado'],
      rows: [
        ['0 puntos', 'Bajo', '0.7%', 'Ambulatorio en domicilio'],
        ['1 punto', 'Bajo', '2.1%', 'Ambulatorio (si el único punto es edad ≥ 65 a)'],
        ['2 puntos', 'Moderado', '9.2%', 'Hospitalización en sala general (o corta estancia supervisada)'],
        ['3 puntos', 'Grave', '14.5%', 'Hospitalización en sala o UTI (evaluar criterios ATS/IDSA)'],
        ['4 o 5 puntos', 'Muy Grave', '40.0%', 'Hospitalización inmediata en UCI'],
      ],
    },
    severityTable: {
      title: 'Criterios ATS/IDSA para Definición de NAC Severa e Ingreso a UCI',
      headers: ['Categoría de Criterios', 'Parámetros Específicos', 'Umbral de Decisión Asistencial'],
      rows: [
        ['Criterios Mayores (Basta 1)', '1. Shock séptico que requiere vasopresores (noradrenalina)\n2. Insuficiencia respiratoria que requiere intubación (VMI)', 'Ingreso DIRECTO a UCI obligado'],
        ['Criterios Menores (Requiere ≥ 3)', '• FR ≥ 30 rpm · PaFiO2 ≤ 250\n• Infiltrados multilobares en Rx\n• Confusión / desorientación aguda', 'Cumplir ≥ 3 criterios menores define indicación formal de UCI'],
        ['Criterios Menores Adicionales', '• BUN ≥ 20 mg/dL (uremia)\n• Leucopenia < 4.000 / Trombocitopenia < 100.000\n• Hipotermia central < 36.0 °C', 'Monitorización invasiva y soporte intensivo'],
      ],
    },
    treatmentTable: {
      title: 'Algoritmo de Decisión Asistencial y Conducta Terapéutica en NAC',
      headers: ['Sitio de Atención', 'Score CURB-65', 'Esquema de Primera Línea', 'Monitoreo y Metas'],
      rows: [
        ['Ambulatorio Sano (< 65 a)', 'CURB-65 = 0', 'Amoxicilina 1 g c/8h VO por 5-7 días', 'Control en 48-72 h; consultar si fiebre persistente'],
        ['Ambulatorio Mayor / GES', 'CURB-65 = 1 (por edad)', 'Amoxicilina/Clavulánico 875/125 c/12h VO x 7d', 'Garantía GES: iniciar fármacos en < 24 h'],
        ['Hospitalizado Sala Básica', 'CURB-65 = 2', 'Ceftriaxona 1-2 g/día EV (± Macrólido)', 'O2 meta Sat 93-95%; switch a VO tras 48h afebril'],
        ['Unidad de Paciente Crítico (UCI)', 'CURB ≥ 3 o Criterio ATS', 'Ceftriaxona 2 g EV + Levofloxacino 750 mg EV', 'Línea arterial, hemocultivos x 2, balance estricto'],
      ],
    },
    vignette: 'Mujer de 72 años consulta en el CESFAM por tos con expectoración herrumbrosa, tope inspiratorio en base derecha y fiebre hasta 38.8 °C de 48 horas de evolución. Al examen: orientada témporo-espacialmente, FR 24 rpm, FC 92 lpm, PA 130/80 mmHg, SatO2 95% al aire ambiente. Murmullo pulmonar con crépitos en tercio inferior de hemitórax derecho. Laboratorio: BUN 14 mg/dL. Rx tórax confirma condensación alveolar en lóbulo inferior derecho sin derrame pleural.',
    explicacion: 'La paciente presenta una NAC confirmada radiológicamente. Al calcular el score CURB-65 presenta 1 punto exclusivamente por tener ≥ 65 años (C=0, U=0 con BUN 14, R=0 con FR 24, B=0 con PA 130/80). Por tener 1 solo punto por edad y contar con adecuada red de apoyo familiar, estabilidad hemodinámica y buena saturación, cumple criterios para manejo ambulatorio garantizado por GES con Amoxicilina/Ácido Clavulánico 875/125 mg cada 12 horas por 7 días y control médico obligatorio a las 48 horas.',
    keyPoints: [
      'La confirmación de NAC exige siempre una Radiografía de tórax demostrando condensación o infiltrados nuevos.',
      'El germen más común de NAC en todas las edades y comorbilidades es Streptococcus pneumoniae.',
      'CURB-65: Confusión (+1), Urea > 42 mg/dL o BUN > 19 (+1), FR ≥ 30 (+1), PAS < 90 o PAD ≤ 60 (+1), Edad ≥ 65 (+1).',
      'CURB-65 de 0 a 1 punto: manejo ambulatorio. 2 puntos: hospitalización en sala. ≥ 3 puntos: evaluar UCI/UTI.',
      'Si el único punto en CURB-65 es la edad (≥ 65 años), el paciente puede ser manejado ambulatoriamente si no hay hipoxemia ni riesgo social.',
      'Criterios mayores para UCI directa según ATS/IDSA: necesidad de ventilación mecánica invasiva o shock séptico refractario con vasopresores.',
      'La NAC en mayores de 65 años es patología GES: garantiza diagnóstico y tratamiento antibiótico en menos de 24 horas.',
      'Si la fiebre persiste tras 72 horas de tratamiento adecuado, sospechar derrame paraneumónico complicado o empiema.',
    ],
    questions: [
      {
        stem: 'Un hombre de 68 años consulta en el servicio de urgencias por compromiso del estado general, tos con expectoración purulenta y fiebre de 39 °C. Al examen físico se encuentra desorientado en tiempo y espacio, con FR de 34 rpm, PA 85/50 mmHg, FC 118 lpm y crepitaciones en la base pulmonar izquierda. La radiografía de tórax confirma una consolidación basal izquierda. El nitrógeno ureico en sangre (BUN) es de 28 mg/dL. ¿Cuál es el puntaje CURB-65 y la conducta de internación más adecuada?',
        options: [
          { id: 'A', text: 'CURB-65 de 2 puntos; hospitalización en sala de medicina general' },
          { id: 'B', text: 'CURB-65 de 3 puntos; manejo ambulatorio con control en 24 horas' },
          { id: 'C', text: 'CURB-65 de 5 puntos; hospitalización inmediata en Unidad de Cuidados Intensivos (UCI)' },
          { id: 'D', text: 'CURB-65 de 1 punto; tratamiento ambulatorio con levofloxacino' },
          { id: 'E', text: 'CURB-65 de 4 puntos; hospitalización en sala intermedia sin monitorización' },
        ],
        correcta: 'C',
        explicacion: 'El paciente cumple los 5 criterios del CURB-65: Confusión mental (+1), Urea/BUN > 19 mg/dL (+1 con BUN 28), FR ≥ 30 rpm (+1 con 34 rpm), PA < 90/60 mmHg (+1 con 85/50 mmHg) y Edad ≥ 65 años (+1 con 68 años). Total = 5 puntos. Este puntaje conlleva una mortalidad superior al 40% y define una NAC grave con necesidad inmediata de hospitalización en UCI para monitorización continua, aporte vasoactivo y soporte ventilatorio.',
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál es el examen complementario indispensable para confirmar el diagnóstico de neumonía adquirida en la comunidad en un adulto con clínica compatible?',
        options: [
          { id: 'A', text: 'Tomografía computarizada de tórax de alta resolución' },
          { id: 'B', text: 'Radiografía de tórax anteroposterior y lateral' },
          { id: 'C', text: 'Tinción de Gram y cultivo de esputo' },
          { id: 'D', text: 'Proteína C reactiva y procalcitonina cuantitativa' },
          { id: 'E', text: 'Espirometría basal' },
        ],
        correcta: 'B',
        explicacion: 'Por definición de consenso nacional e internacional, la confirmación diagnóstica de la neumonía adquirida en la comunidad exige la demostración objetiva de un infiltrado o condensación alveolar nuevo en la Radiografía de tórax (proyecciones frontal y lateral). Los exámenes de laboratorio (PCR, procalcitonina) apoyan la etiología pero no reemplazan la imagen, y el cultivo de esputo (C) no es imprescindible para iniciar el manejo ambulatorio.',
        recTag: 'EUNACOM Diciembre 2020 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 66 años, sin antecedentes mórbidos conocidos, consulta en un centro de salud familiar por cuadro de 48 horas de fiebre hasta 38.5 °C, tos productiva con esputo amarillento y dolor pleurítico en hemitórax derecho. Al examen: vigil, orientado en tiempo y espacio, FC 84 lpm, PA 126/78 mmHg, FR 20 rpm, SatO2 96% ambiental. Murmullo pulmonar conservado con crépitos inspiratorios en base derecha. BUN 12 mg/dL. Radiografía de tórax: infiltrado alveolar basal derecho. ¿Cuál es el puntaje CURB-65 y la conducta recomendada?',
        options: [
          { id: 'A', text: 'CURB-65 = 0 puntos; manejo sintomático con paracetamol sin antibióticos' },
          { id: 'B', text: 'CURB-65 = 1 punto; tratamiento ambulatorio con amoxicilina/ácido clavulánico oral y control clínico en 48 horas' },
          { id: 'C', text: 'CURB-65 = 2 puntos; hospitalización obligatoria en sala de cuidados medios' },
          { id: 'D', text: 'CURB-65 = 1 punto; derivación inmediata a urgencias para administración de ceftriaxona endovenosa' },
          { id: 'E', text: 'CURB-65 = 3 puntos; ingreso directo a Unidad de Cuidados Intensivos' },
        ],
        correcta: 'B',
        explicacion: 'El paciente tiene 66 años (≥ 65 años: +1 punto), pero no tiene confusión (0), su BUN es normal (12 mg/dL, corte > 19: 0), su FR es 20 rpm (< 30: 0) y su PA es normal (0). Puntaje CURB-65 = 1 punto. Cuando el único factor presente es la edad en un paciente estable, hemodinámicamente compensado, sin hipoxemia y con adecuado soporte sociofamiliar, la conducta validada por guías MINSAL y GES es el tratamiento ambulatorio con amoxicilina/ácido clavulánico (canasta GES mayores de 65 años) y citación a control clínico a las 48 horas.',
        recTag: 'EUNACOM Diciembre 2022 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál de los siguientes criterios clínicos constituye un criterio mayor de la Sociedad Americana del Tórax (ATS/IDSA) que define por sí solo el ingreso directo a una Unidad de Cuidados Intensivos (UCI) en un paciente con neumonía adquirida en la comunidad?',
        options: [
          { id: 'A', text: 'Frecuencia respiratoria superior a 30 respiraciones por minuto' },
          { id: 'B', text: 'Presencia de infiltrados alveolares multilobares en la radiografía de tórax' },
          { id: 'C', text: 'Shock séptico con necesidad de soporte con vasopresores a pesar de resucitación con fluidos' },
          { id: 'D', text: 'Relación PaO2/FiO2 menor o igual a 250' },
          { id: 'E', text: 'Confusión mental aguda con desorientación témporo-espacial' },
        ],
        correcta: 'C',
        explicacion: 'Los criterios ATS/IDSA para NAC severa definen 2 criterios mayores: 1) Shock séptico que requiere vasopresores (noradrenalina); y 2) Insuficiencia respiratoria aguda que requiere ventilación mecánica invasiva. La presencia de cualquiera de estos dos criterios mayores obliga al ingreso directo a UCI. Las opciones A, B, D y E corresponden a criterios menores de ATS/IDSA, de los cuales se requerirían al menos 3 para justificar el ingreso a UCI.',
        recTag: 'EUNACOM Reconstrucción Canónica · Cuidados Intensivos',
      },
    ],
  },
  {
    id: 'resp-07',
    classId: 'resp-07',
    tier: 2,
    blockNum: 2,
    blockName: 'Infecciones Respiratorias Bajas y Supuraciones',
    topicLabel: '2.2',
    title: 'Tratamiento Antimicrobiano de la NAC y Criterios GES',
    perfilCode: '1.05.1.028',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Neumonía en el Adulto de 65 años y más (Tratamiento en menos de 24 horas)',
    reconstrucciones: '',
    frecuencia: 'Máxima · Esquemas empíricos MINSAL y ajustes según lugar de internación',
    svg: null, algoTitle: 'Algoritmo de Selección Antimicrobiana Empírica en NAC (Norma MINSAL / GES)',
    diagram: flow('Algoritmo de Selección Antimicrobiana en NAC (MINSAL/GES)', [
      { t: 'Estratificación del Paciente según Entorno de Atención', s: 'Ambulatorio sano vs Ambulatorio con comorbilidad vs Hospitalizado sala vs Hospitalizado UCI' },
      { k: 'split', q: '¿Requiere Tratamiento Ambulatorio u Hospitalario?', s: 'Decidido por CURB-65 y factores de riesgo individual', ll: 'ambulatorio (CURB 0-1)', rl: 'hospitalizado (CURB ≥ 2 o UCI)',
        left: { t: 'Esquema Ambulatorio Oral', s: 'Sano: Amoxicilina 1 g c/8h · Con comorbilidad/Mayor: Amoxicilina/Clavulánico 875/125 c/12h (o Azitromicina)', type: 'acc' },
        right: { t: 'Esquema Endovenoso Hospitalario', s: 'Sala: Ceftriaxona 1-2 g EV/día (asociar Macrólido si sospecha atípico) · UCI: Ceftriaxona + Levofloxacino', type: 'warn' } },
      { t: 'Duración Estándar de la Terapia', s: '5 a 7 días en total si hay estabilidad clínica (afebril > 48h, FC < 100, FR < 24, SatO2 > 90%)', type: 'dec', al: 'duración', from: 'left' },
    ]),
    contexto: 'El tratamiento empírico de la NAC es uno de los temas más examinados en el EUNACOM. Se debe dominar la guía clínica chilena MINSAL: Amoxicilina oral en pacientes sanos ambulatorios, Amoxicilina/Clavulánico en ancianos o comórbidos (canasta GES), Ceftriaxona en sala básica y Ceftriaxona + Macrólido/Quinolona en UCI.',
    contentSections: [
      {
        subhead: '1. Esquemas Antimicrobianos Ambulatorios (MINSAL / GES)',
        paragraphs: [
          '<strong>Adulto &lt; 65 años sin comorbilidades ni factores de riesgo:</strong> Primera línea <strong>Amoxicilina 1 g cada 8 horas por vía oral por 5 a 7 días</strong>. Alternativa en alérgicos a penicilina: <strong>Azitromicina 500 mg/día por 3 a 5 días</strong> o Claritromicina 500 mg c/12 h.',
          '<strong>Adulto ≥ 65 años o con comorbilidades (EPOC, diabetes, cardiopatía):</strong> Primera línea según Guía Clínica GES: <strong>Amoxicilina + Ácido Clavulánico 875/125 mg cada 12 horas por 7 días</strong> (para cubrir neumococo con susceptibilidad intermedia y bacterias productoras de betalactamasa como <em>H. influenzae</em> y <em>M. catarrhalis</em>). Alternativa: Cefuroximo axetilo 500 mg c/12 h o Levofloxacino 750 mg/día (reservado para alergia grave o sospecha alta de gramnegativos).',
        ],
      },
      {
        subhead: '2. Tratamiento en Pacientes Hospitalizados en Sala General',
        paragraphs: [
          'En pacientes con CURB-65 = 2 que requieren cama básica de medicina, el tratamiento de elección es <strong>Ceftriaxona 1 a 2 g al día por vía endovenosa</strong> (o Ampicilina/Sulbactam 1.5 g c/6 h EV).',
          'Si existe sospecha clínica de patógenos atípicos (infiltrados intersticiales, disociación pulso-temperatura, mialgias marcadas) o NAC de mayor severidad, se asocia un macrólido oral o EV: <strong>Ceftriaxona + Azitromicina 500 mg/día</strong>.',
        ],
      },
      {
        subhead: '3. Manejo en UCI y Criterios de Estabilidad para Cambio a Vía Oral',
        paragraphs: [
          'En NAC grave internada en UCI (CURB-65 ≥ 3 o falla orgánica): de primera línea <strong>Ceftriaxona 2 g EV/día + Levofloxacino 750 mg EV/día</strong> (o Ceftriaxona + Azitromicina EV). Si hay factores de riesgo de <em>Pseudomonas aeruginosa</em> (bronquiectasias, fibrosis quística, corticoides crónicos): Piperacilina/Tazobactam o Cefepime + Ciprofloxacino.',
          '<strong>Criterios de cambio a vía oral (Switch terapéutico):</strong> Paciente afebril por &gt; 48 horas, frecuencia respiratoria &lt; 24 rpm, FC &lt; 100 lpm, PA sistólica ≥ 90 mmHg, saturación &gt; 90% ambiental y tolerancia adecuada a la vía oral. No es necesario completar tratamientos prolongados de 10 a 14 días.',
        ],
      },
    ],
    table: {
      title: 'Tratamiento Antimicrobiano Empírico de la NAC según Guías Chilenas MINSAL',
      headers: ['Escenario Clínico', 'Antibiótico de 1.ª Línea', 'Vía y Dosis', 'Alternativa Alergia a Penicilina'],
      rows: [
        ['Ambulatorio < 65 a sano', 'Amoxicilina', '1 g c/8h VO por 5-7 días', 'Azitromicina 500 mg/d (o Claritromicina 500 mg c/12h)'],
        ['Ambulatorio ≥ 65 a / comórbido (GES)', 'Amoxicilina / Ácido Clavulánico', '875/125 mg c/12h VO por 7 días', 'Cefuroximo 500 mg c/12h o Levofloxacino 750 mg/d'],
        ['Hospitalizado Sala General', 'Ceftriaxona (± Azitromicina)', '1-2 g/día EV (Azitro 500 mg/d VO)', 'Levofloxacino 750 mg/d EV o Moxifloxacino 400 mg/d'],
        ['Hospitalizado UCI (Grave)', 'Ceftriaxona + Levofloxacino (o Azitro)', 'Ceftriaxona 2 g EV + Levo 750 mg EV', 'Levofloxacino + Vancomicina (si riesgo MRSA)'],
      ],
    },
    vignette: 'Hombre de 42 años, previamente sano, no fumador, consulta por cuadro de 3 días de fiebre hasta 38.6 °C, tos con expectoración mucosa y dolor en puntada de costado derecho. Examen: SatO2 96%, PA 120/75, FR 18 rpm, crépitos audibles en base derecha. Rx tórax: foco de condensación lóbulo inferior derecho. CURB-65 = 0.',
    explicacion: 'NAC de bajo riesgo en paciente joven sin comorbilidades: manejo ambulatorio. La terapia antimicrobiana de primera elección según la norma chilena es Amoxicilina oral en dosis de 1 g cada 8 horas por 5 a 7 días. No se justifica el uso de cefalosporinas de tercera generación ni quinolonas respiratorias de entrada en pacientes sanos.',
    keyPoints: [
      'NAC ambulatoria en joven sano sin comorbilidades: Amoxicilina 1 g c/8h VO por 5 a 7 días.',
      'NAC ambulatoria en mayor de 65 años o con comorbilidades (GES): Amoxicilina/Ácido Clavulánico 875/125 mg c/12h.',
      'NAC hospitalizada en sala general: Ceftriaxona 1-2 g al día EV (asociar Azitromicina si sospecha de atípico).',
      'NAC en UCI: Betalactámico EV (Ceftriaxona 2 g) + Quinolona respiratoria (Levofloxacino) o Macrólido EV.',
      'El cambio a vía oral se realiza con 48 horas afebril, estabilidad hemodinámica y buena tolerancia oral.',
    ],
    questions: [
      {
        stem: 'Una mujer de 69 años con antecedente de diabetes mellitus tipo 2 e hipertensión arterial consulta en el CESFAM por fiebre de 38.5 °C, tos productiva y decaimiento de 48 horas. Al examen: orientada, PA 135/85 mmHg, FC 88 lpm, FR 20 rpm, SatO2 95% ambiental. La radiografía de tórax confirma neumonía basal derecha. ¿Cuál es el esquema antibiótico ambulatorio de primera línea según las guías clínicas ministeriales (GES)?',
        options: [
          { id: 'A', text: 'Ceftriaxona 1 g intramuscular al día por 14 días' },
          { id: 'B', text: 'Amoxicilina con ácido clavulánico 875/125 mg cada 12 horas por vía oral durante 7 días' },
          { id: 'C', text: 'Amoxicilina 500 mg cada 8 horas por vía oral por 3 días' },
          { id: 'D', text: 'Ciprofloxacino 500 mg cada 12 horas por vía oral por 10 días' },
          { id: 'E', text: 'Cotrimoxazol fuerte 1 comprimido cada 12 horas por 14 días' },
        ],
        correcta: 'B',
        explicacion: 'La paciente tiene 69 años y comorbilidades médicas crónicas (diabetes e hipertensión), por lo que según las guías chilenas MINSAL/GES el tratamiento ambulatorio de elección es Amoxicilina/Ácido Clavulánico 875/125 mg cada 12 horas vía oral por 7 días. La amoxicilina simple (C) tiene menor eficacia ante cepas resistentes de neumococo o H. influenzae productor de betalactamasa frecuentes en ancianos. El ciprofloxacino (D) no tiene buena cobertura antineumocócica.',
        recTag: 'Banco de Preguntas Oficial · Tratamiento Antimicrobiano de la NAC',
      },
      {
        stem: 'Un paciente de 58 años ingresa a sala de medicina interna por una neumonía adquirida en la comunidad CURB-65 = 2. Recibe ceftriaxona 1 g EV al día. Al cuarto día de hospitalización se encuentra afebril desde hace 48 horas, con FR 16 rpm, FC 74 lpm, PA 125/80 mmHg y SatO2 96% ambiental, tolerando alimentación por boca. ¿Cuál es la conducta terapéutica correcta?',
        options: [
          { id: 'A', text: 'Mantener la ceftriaxona endovenosa hasta completar estrictamente 14 días' },
          { id: 'B', text: 'Realizar switch a antibiótico oral ambulatorio (ej. amoxicilina/clavulánico o cefuroximo) para completar 7 días totales' },
          { id: 'C', text: 'Suspender antibióticos y solicitar nueva radiografía de tórax para comprobar la resolución del infiltrado antes del alta' },
          { id: 'D', text: 'Cambiar ceftriaxona a vancomicina oral profiláctica' },
          { id: 'E', text: 'Tomar broncoscopía con lavado broncoalveolar para cultivo' },
        ],
        correcta: 'B',
        explicacion: 'El paciente cumple todos los criterios de estabilidad clínica: afebril > 48 horas, parámetros vitales normales y buena tolerancia enteral. La conducta estándar recomendada es la transición rápida a terapia oral (switch precoz) para completar un curso total de 7 días de antibióticos y dar el alta hospitalaria. No se debe mantener la vía EV innecesariamente (A) ni exigir una radiografía de control para el alta (C), ya que los infiltrados radiológicos tardan de 4 a 8 semanas en limpiar.',
        recTag: 'Banco de Preguntas Oficial · Tratamiento Antimicrobiano de la NAC',
      },
    ],
  },
  {
    id: 'resp-08',
    classId: 'resp-08',
    tier: 2,
    blockNum: 2,
    blockName: 'Infecciones Respiratorias Bajas y Supuraciones',
    topicLabel: '2.3',
    title: 'Neumonías Atípicas, Intrahospitalarias y Neumonía Aspirativa',
    perfilCode: '1.05.1.029, 1.05.1.030',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Alta · Diagnóstico diferencial y selección antimicrobiana específica',
    svg: null, algoTitle: 'Algoritmo Diferencial: Neumonía Atípica vs NIH vs Neumonía Aspirativa',
    diagram: flow('Algoritmo de Manejo: Neumonías Especiales', [
      { t: 'Presentación Clínica y Contexto Epidemiológico', s: 'Joven con tos seca persistente vs Hospitalizado > 48h vs Trastorno de deglución/alcoholismo' },
      { k: 'split', q: '¿Cuál es el Cuadro Clínico Dominante?', s: 'Define la sospecha etiológica y el espectro antimicrobiano necesario', ll: 'neumonía atípica (Mycoplasma/Legionella)', rl: 'aspirativa / nosocomial (NIH)',
        left: { t: 'Terapia para Patógenos Intracelulares', s: 'Macrólidos (Azitromicina 500 mg/d) o Doxiciclina · Resistentes naturales a betalactámicos', type: 'acc' },
        right: { t: 'Cobertura Anaerobia o Bacilos Gramnegativos', s: 'Aspirativa: Ampicilina/Sulbactam o Amox/Clav · NIH: Piperacilina/Tazo o Cefepime + Vanco', type: 'warn' } },
      { t: 'Localización Radiológica Típica en Aspiración', s: 'Segmento apical de lóbulo inferior o segmento posterior de lóbulo superior derecho en decúbito', type: 'dec', al: 'patrón radiológico', from: 'right' },
    ]),
    contexto: 'El EUNACOM evalúa con frecuencia el reconocimiento de neumonías con agentes no tradicionales: la neumonía por agentes atípicos (Mycoplasma, Chlamydia, Legionella) que no responden a penicilinas; la neumonía intrahospitalaria por gérmenes multirresistentes; y la neumonía aspirativa en alcohólicos o pacientes con daño neurológico.',
    contentSections: [
      {
        subhead: '1. Neumonía Atípica (Mycoplasma, Chlamydia, Legionella)',
        paragraphs: [
          'Se caracteriza por un comienzo insidioso, tos seca persistente, cefalea, mialgias, febrícula y escasos hallazgos a la auscultación en contraste con una <strong>radiografía que muestra infiltrados intersticiales o reticulonodulares bilaterales difusos</strong> ("disociación clínico-radiológica").',
          'Los gérmenes carecen de pared celular de peptidoglicano o son intracelulares obligados, por lo que presentan <strong>resistencia intrínseca a todos los betalactámicos</strong> (penicilinas, cefalosporinas). El tratamiento de elección son los <strong>Macrólidos (Azitromicina o Claritromicina)</strong> o <strong>Doxiciclina</strong>. <em>Legionella pneumophila</em> se asocia a diarrea, hiponatremia y pruebas hepáticas alteradas (tratamiento: Levofloxacino o Azitromicina).',
        ],
      },
      {
        subhead: '2. Neumonía Aspirativa y Supuración por Anaerobios',
        paragraphs: [
          'Ocurre por microaspiración masiva de contenido orofaríngeo o gástrico en pacientes con factores predisponentes: <strong>alcoholismo agudo</strong>, convulsiones, accidente cerebrovascular, demencia o anestesia general.',
          'La flora involucrada es mixta: anaerobios orales (<em>Peptostreptococcus</em>, <em>Fusobacterium</em>, <em>Prevotella</em>) y estreptococos. Típicamente compromete el <strong>segmento apical del lóbulo inferior derecho o segmento posterior del lóbulo superior</strong> en pacientes en decúbito supino. Tratamiento de elección: <strong>Ampicilina/Sulbactam 1.5–3 g c/6 h EV</strong> o <strong>Amoxicilina/Clavulánico</strong>.',
        ],
      },
      {
        subhead: '3. Neumonía Intrahospitalaria (NIH) y Asociada a Ventilación (NAV)',
        paragraphs: [
          'Se define como la neumonía que se manifiesta <strong>después de 48 horas del ingreso hospitalario</strong> (y que no estaba incubándose al ingreso).',
          'Los patógenos predominantes son bacilos gramnegativos nosocomiales (<em>Pseudomonas aeruginosa</em>, <em>Klebsiella pneumoniae</em> productora de BLEE, <em>Acinetobacter</em>) y <em>Staphylococcus aureus</em> meticilino-resistente (SAMR). El esquema empírico requiere betalactámicos antipseudomónicos: <strong>Piperacilina/Tazobactam 4.5 g c/6 h EV</strong> o <strong>Cefepime 2 g c/8 h EV</strong>, asociando <strong>Vancomicina</strong> si hay sospecha de SAMR.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: NAC Atípica vs Aspirativa vs Intrahospitalaria (NIH)',
      headers: ['Tipo de Neumonía', 'Población Típica', 'Microbiología Cardinal', 'Esquema Terapéutico de Elección'],
      rows: [
        ['NAC Atípica', 'Jóvenes, cuarteles, estudiantes', 'Mycoplasma pneumoniae, Chlamydophila', 'Azitromicina 500 mg/d o Doxiciclina 100 mg c/12h'],
        ['Aspirativa', 'Alcohólicos, secuela ACV, demencia', 'Flora mixta anaerobia + estreptococos orales', 'Ampicilina/Sulbactam o Amoxicilina/Clavulánico'],
        ['Intrahospitalaria (NIH)', 'Hospitalizado > 48 horas', 'Pseudomonas, Enterobacterias BLEE, SAMR', 'Piperacilina/Tazo o Cefepime (± Vancomicina)'],
        ['Por Legionella', 'Viajeros, torres de enfriamiento', 'Legionella pneumophila (intracelular)', 'Levofloxacino 750 mg/d o Azitromicina EV'],
      ],
    },
    vignette: 'Hombre de 26 años consulta por 2 semanas de tos seca persistente muy molesta, mialgias, faringitis y febrícula de 37.8 °C. Al examen físico pulmonar prácticamente normal con murmullo vesicular conservado. La radiografía de tórax revela extensos infiltrados intersticiales bilaterales de predominio perihiliar.',
    explicacion: 'Neumonía atípica (probablemente por Mycoplasma pneumoniae): clásica disociación clínico-radiológica (paciente en buen estado general con auscultación pulmonar normal pero gran compromiso radiológico intersticial). Dado que Mycoplasma carece de pared celular, los antibióticos betalactámicos no son efectivos. El tratamiento de primera línea es un macrólido como Azitromicina 500 mg/día por 5 días.',
    keyPoints: [
      'Mycoplasma y Chlamydia carecen de pared de peptidoglicano: son 100% resistentes a penicilinas y cefalosporinas.',
      'La disociación clínico-radiológica (auscultación pobre con radiografía con extensos infiltrados) sugiere neumonía atípica.',
      'La neumonía aspirativa ocurre en pacientes con trastorno de conciencia o deglución y afecta segmentos declives derechos.',
      'Fármaco de elección en sospecha de aspiración y anaerobios: Ampicilina/Sulbactam o Amoxicilina/Ácido Clavulánico.',
      'La neumonía intrahospitalaria (NIH) se define por aparición tras 48 horas del ingreso; exige cobertura antipseudomónica.',
    ],
    questions: [
      {
        stem: 'Un paciente de 62 años con antecedente de etilismo crónico severo sufre un episodio de pérdida de conciencia tras ingesta alcohólica copiosa. Tres días después consulta por fiebre de 38.8 °C, tos con expectoración purulenta de olor fétido y dolor torácico derecho. La radiografía de tórax muestra una condensación con broncograma aéreo en el segmento apical del lóbulo inferior derecho. ¿Cuál es el tratamiento antibiótico empírico más adecuado?',
        options: [
          { id: 'A', text: 'Azitromicina 500 mg al día por vía oral' },
          { id: 'B', text: 'Ampicilina/sulbactam endovenoso' },
          { id: 'C', text: 'Ciprofloxacino en monoterapia oral' },
          { id: 'D', text: 'Amikacina en bolo intramuscular diario' },
          { id: 'E', text: 'Fluconazol endovenoso' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una neumonía aspirativa típica: antecedente de coma etílico, esputo fétido (indicador patognomónico de infección por bacterias anaerobias) y condensación en el segmento apical del lóbulo inferior derecho (zona más dependiente de la gravedad en decúbito supino). El tratamiento empírico de elección debe brindar excelente cobertura anaerobia y contra flora oral, siendo la Ampicilina/Sulbactam EV (o Amoxicilina/Clavulánico) el estándar indiscutido.',
        recTag: 'Banco de Preguntas Oficial · Neumonías Especiales',
      },
      {
        stem: 'Un paciente de 74 años ingresa a medicina por una hemorragia digestiva alta. Al quinto día de hospitalización inicia fiebre de 38.6 °C, taquipnea, desaturación y estertores crepitantes en ambos hemitórax. La radiografía de tórax muestra infiltrados nuevos en base pulmonar izquierda. ¿Cuál es la conducta diagnóstica y terapéutica más apropiada?',
        options: [
          { id: 'A', text: 'Diagnóstico de NAC atípica; tratar con eritromicina oral por 7 días' },
          { id: 'B', text: 'Diagnóstico de Neumonía Intrahospitalaria (NIH); iniciar hemocultivos y antibióticos antipseudomónicos como piperacilina/tazobactam' },
          { id: 'C', text: 'Diagnóstico de embolia grasa; administrar corticoides a altas dosis' },
          { id: 'D', text: 'Diagnóstico de bronquitis aguda viral; mantener observación sin antimicrobianos' },
          { id: 'E', text: 'Diagnóstico de edema pulmonar cardiogénico; suspender fluidos e indicar amoxicilina oral' },
        ],
        correcta: 'B',
        explicacion: 'La aparición de síntomas pulmonares e infiltrados nuevos en la radiografía después de las 48 horas de internación hospitalaria define por criterio estricto una Neumonía Intrahospitalaria (NIH). En estos casos, la flora causante incluye microorganismos intrahospitalarios de alta resistencia como Pseudomonas aeruginosa y enterobacterias multirresistentes. Se debe iniciar de inmediato terapia antibiótica empírica antipseudomónica EV con Piperacilina/Tazobactam o Cefepime tras la toma de cultivos.',
        recTag: 'Banco de Preguntas Oficial · Neumonías Especiales',
      },
    ],
  },
  {
    id: 'resp-09',
    classId: 'resp-09',
    tier: 2,
    blockNum: 2,
    blockName: 'Infecciones Respiratorias Bajas y Supuraciones',
    topicLabel: '2.4',
    title: 'Absceso Pulmonar y Supuraciones Pleuropulmonares',
    perfilCode: '1.05.1.001, 1.05.1.008',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'No GES',
    reconstrucciones: '',
    frecuencia: 'Media · Diagnóstico radiológico de cavidad con nivel hidroaéreo y manejo médico prolongado',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico y Manejo del Absceso Pulmonar',
    diagram: flow('Algoritmo de Manejo del Absceso Pulmonar', [
      { t: 'Sospecha Clínica de Supuración Pulmonar Necrosante', s: 'Fiebre persistente, baja de peso, sudoración nocturna, tos productiva fétida (vómica)' },
      { k: 'split', q: 'Hallazgos en TAC de Tórax con Contraste', s: 'Imagen cavitada de pared gruesa con nivel hidroaéreo en parénquima pulmonar', ll: 'absceso primario por aspiración', rl: 'sospecha de cáncer o germen secundario',
        left: { t: 'Tratamiento Médico Exclusivo Prolongado', s: 'Ampicilina/Sulbactam EV luego Amoxicilina/Clavulánico VO por 4 a 6 semanas · El 90% resuelve sin cirugía', type: 'acc' },
        right: { t: 'Fibrobroncoscopía Diagnóstica Obligatoria', s: 'Descartar neoplasia cavitada o cuerpo extraño que obstruya el bronquio', type: 'warn' } },
      { t: 'Criterios de Intervención Quirúrgica / Drenaje Percutáneo', s: 'Absceso > 6 cm, refractario a 7-10 días de antibióticos, hemoptisis masiva o sospecha de malignidad', type: 'dec', al: 'falla médica', from: 'left' },
    ]),
    contexto: 'El absceso pulmonar es una complicación supurativa grave típicamente secundaria a aspiración de anaerobios en pacientes con mala higiene dental o alcoholismo. El EUNACOM interroga la imagen radiológica característica (lesión cavitada con nivel hidroaéreo y pared gruesa), la indicación de tratamiento médico prolongado y la necesidad de descartar neoplasia.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Etiología',
        paragraphs: [
          'El absceso pulmonar primario es una lesión cavitaria necrótica circunscrita del parénquima pulmonar que contiene pus. En más del 85% de los casos se origina a partir de una <strong>neumonitis aspirativa no tratada</strong> o tratada en forma inadecuada.',
          'Los factores predisponentes son: <strong>periodontitis o sepsis dental grave</strong>, alcoholismo crónico, epilepsia, abuso de sedantes y trastornos de deglución. La flora causal es polimicrobiana con predominio absoluto de <strong>bacterias anaerobias de la cavidad oral</strong> (<em>Fusobacterium nucleatum</em>, <em>Prevotella</em>, <em>Peptostreptococcus</em>) asociadas a estreptococos del grupo <em>anginosus</em>.',
        ],
      },
      {
        subhead: '2. Cuadro Clínico y Hallazgos Imagenológicos',
        paragraphs: [
          'La presentación clínica suele ser subaguda o crónica (semanas de evolución) con compromiso del estado general, fiebre vespertina, sudoración nocturna y baja de peso, lo que puede simular tuberculosis o neoplasia. Es muy característica la <strong>tos con expectoración purulenta muy abundante y fétida (vómica)</strong>.',
          '<strong>Radiografía y TAC de tórax:</strong> Revela una <strong>cavidad redondeada de pared gruesa, con márgenes irregulares y un nivel hidroaéreo evidente en su interior</strong>, localizada habitualmente en segmentos dependientes (segmentos posteriores de lóbulos superiores o apicales de lóbulos inferiores).',
        ],
      },
      {
        subhead: '3. Tratamiento Médico Prolongado e Indicaciones Quirúrgicas',
        paragraphs: [
          'El pilar del tratamiento es <strong>médico y prolongado</strong>. Más del 85–90% de los abscesos pulmonares curan únicamente con antibioticoterapia adecuada sin requerir cirugía ni drenaje invasivo.',
          '<strong>Esquema de elección:</strong> Iniciar con <strong>Ampicilina/Sulbactam 1.5 a 3 g cada 6 horas EV</strong> (o Ceftriaxona + Metronidazol; o Clindamicina en alérgicos). Al lograr estabilidad clínica, se cambia a <strong>Amoxicilina/Ácido Clavulánico 875/125 mg cada 8–12 horas por vía oral</strong> hasta completar <strong>4 a 6 semanas</strong> (guiado por la resolución clínica y cierre de la cavidad en la imagen).',
          '<strong>Regla EUNACOM:</strong> Si el paciente tiene factores de riesgo de cáncer (edad &gt; 50 años, tabáquico) o la cavidad no responde, es mandatoria la <strong>Fibrobroncoscopía</strong> para descartar un carcinoma broncogénico subyacente.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial de Lesiones Cavitadas en Tórax',
      headers: ['Entidad Clínica', 'Pared de la Cavidad', 'Nivel Hidroaéreo', 'Localización Típica', 'Tratamiento de Elección'],
      rows: [
        ['Absceso Pulmonar', 'Gruesa, regular por dentro', 'Frecuente y evidente', 'Segmentos dependientes (posteriores/apicales)', 'Ampicilina/Sulbactam oral/EV x 4-6 sem'],
        ['Cáncer Pulmonar Cavitado', 'Muy gruesa (> 15 mm), nodular interna', 'Ocasional o ausente', 'Lóbulos superiores (carcinoma epidermoide)', 'Biopsia, estadificación y oncología'],
        ['Tuberculosis Cavitada', 'Fina a moderada, halo retráctil', 'Raro', 'Segmentos apicales y posteriores superiores', 'Terapia 4 drogas (RHZE MINSAL)'],
        ['Quiste Hidatídico Complicado', 'Fina con membrana desprendida', 'Signo del camalote / nenúfar', 'Bases pulmonares (más frec. derecha)', 'Albendazol + Cirugía conservadora'],
      ],
    },
    vignette: 'Hombre de 52 años, bebedor excesivo de alcohol y fumador, con mala dentadura, consulta por 3 semanas de astenia, fiebre nocturna, baja de peso de 4 kg y tos con expectoración copiosa verde oscura y olor pestilente. La radiografía de tórax revela una imagen cavitada de 4.5 cm de diámetro con un nivel hidroaéreo horizontal nítido en el lóbulo superior derecho.',
    explicacion: 'Absceso pulmonar primario típico por aspiración de flora anaerobia oral: antecedente de alcoholismo, higiene dental deficiente, clínica subaguda consuntiva con esputo fétido y cavidad pulmonar con nivel hidroaéreo. El tratamiento de primera línea es médico con antibióticos dirigidos contra anaerobios (Ampicilina/Sulbactam EV y luego Amoxicilina/Clavulánico oral) durante 4 a 6 semanas.',
    keyPoints: [
      'El absceso pulmonar se caracteriza en la imagen por una cavidad de pared gruesa con nivel hidroaéreo.',
      'El 90% se debe a aspiración de flora oral anaerobia en pacientes con mala higiene bucal o alcoholismo.',
      'El tratamiento estándar es médico con antibióticos por 4 a 6 semanas (Ampicilina/Sulbactam o Amox/Clav).',
      'No se indica drenaje quirúrgico de rutina; la gran mayoría drena espontáneamente por el árbol bronquial.',
      'En fumadores mayores de 50 años con lesión cavitada siempre debe sospecharse y descartarse cáncer broncogénico.',
    ],
    questions: [
      {
        stem: 'Un hombre de 55 años con antecedente de etilismo crónico consulta por tos productiva con esputo purulento muy maloliente, fiebre vespertina y baja de peso de un mes de evolución. La radiografía de tórax muestra una lesión redondeada de 5 cm de diámetro con nivel hidroaéreo y paredes gruesas en el lóbulo superior derecho. ¿Cuál es el tratamiento inicial de elección?',
        options: [
          { id: 'A', text: 'Toracotomía de urgencia con resección del lóbulo afectado' },
          { id: 'B', text: 'Tratamiento antibiótico médico prolongado con ampicilina/sulbactam (o amoxicilina/clavulánico) por 4 a 6 semanas' },
          { id: 'C', text: 'Instalación percutánea obligatoria de un tubo de drenaje pleural grueso' },
          { id: 'D', text: 'Ciprofloxacino oral por 7 días y reevaluación' },
          { id: 'E', text: 'Punción aspirativa con aguja fina bajo control ecográfico' },
        ],
        correcta: 'B',
        explicacion: 'El absceso pulmonar bacteriano no complicado tiene un éxito terapéutico mayor al 85-90% exclusivamente con tratamiento médico antimicrobiano prolongado (4 a 6 semanas con cobertura anaerobia como ampicilina/sulbactam EV seguida de amoxicilina/clavulánico oral). La cirugía o el drenaje percutáneo (A, C) solo se reservan para fracaso terapéutico médico tras 7 a 10 días, hemoptisis masiva o sospecha de lesión maligna.',
        recTag: 'Banco de Preguntas Oficial · Absceso Pulmonar',
      },
      {
        stem: '¿Cuál de los siguientes hallazgos clínicos o radiológicos en un paciente con una imagen cavitada en el pulmón obliga a sospechar un carcinoma epidermoide cavitado antes que un absceso bacteriano simple?',
        options: [
          { id: 'A', text: 'Presencia de esputo fétido con olor a putrefacción' },
          { id: 'B', text: 'Paredes internas de la cavidad sumamente gruesas e irregulares con nodulaciones parietales en la TAC' },
          { id: 'C', text: 'Aparición aguda en menos de 48 horas con fiebre alta' },
          { id: 'D', text: 'Resolución completa de la lesión tras dos semanas de penicilina' },
          { id: 'E', text: 'Antecedente de extracción de piezas dentales hace 10 días' },
        ],
        correcta: 'B',
        explicacion: 'Las cavidades de origen neoplásico (frecuentemente carcinoma epidermoide o escamoso central necrosado) se diferencian de los abscesos benignos por tener paredes típicamente muy engrosadas (> 15 mm), contornos internos irregulares, festoneados o con proyecciones nodulares. El esputo fétido (A) y la sepsis dental (E) son propios del absceso anaerobio benigno.',
        recTag: 'Banco de Preguntas Oficial · Absceso Pulmonar',
      },
    ],
  },
  {
    id: 'resp-10',
    classId: 'resp-10',
    tier: 3,
    blockNum: 2,
    blockName: 'Infecciones Respiratorias Bajas y Supuraciones',
    topicLabel: '2.5',
    title: 'Tuberculosis Pulmonar: Diagnóstico, Programa MINSAL y Tratamiento',
    perfilCode: '1.05.1.037, 1.05.3.003',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Tuberculosis en Todas sus Formas (Garantía de Acceso, Diagnóstico y Tratamiento)',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#51) · EUNACOM Julio 2019 (Q#29) · EUNACOM Diciembre 2021 (Q#64)',
    frecuencia: 'Muy Alta · Preguntas sistemáticas sobre sintomático respiratorio, GeneXpert y esquema RHZE',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico y Tratamiento de la Tuberculosis Pulmonar (Programa Nacional MINSAL)',
    diagram: flow('Algoritmo Diagnóstico y Terapéutico TBC Pulmonar (MINSAL)', [
      { t: 'Definición de Sintomático Respiratorio (SR)', s: 'Toda persona con tos y expectoración por ≥ 2 semanas (15 días o más)' },
      { k: 'split', q: 'Estudio Diagnóstico Inmediato en Muestra de Expectoración', s: 'Baciloscopía (Ziehl-Neelsen / Auramina) + Ensayo Molecular Rápido (GeneXpert MTB/RIF)', ll: 'positivo para MTB', rl: 'negativo con alta sospecha clínica',
        left: { t: 'Notificación Obligatoria + Estudio de Contactos', s: 'Iniciar esquema de tratamiento normado en Programa de Control y Eliminación de la Tuberculosis (PROCET)', type: 'acc' },
        right: { t: 'Cultivo Koch (Lowenstein-Jensen / MGIT)', s: 'Gold standard bacteriológico · TAC de tórax · Evaluación broncoscópica', type: 'warn' } },
      { t: 'Esquema Primario Diario Asociado: Fase Diaria (2 RHZE) + Fase Bisemanal o Trirresumida (4 RH)', s: 'Fase Inicial (2 meses): Rifampicina + Isoniazida + Pirazinamida + Etambutol diario · Fase Continuación (4 meses): Rifampicina + Isoniazida', type: 'dec', al: 'esquema RHZE', from: 'left' },
    ]),
    contexto: 'La Tuberculosis es una enfermedad de notificación obligatoria universal bajo programa nacional gratuito y con garantía GES. El EUNACOM interroga la definición de sintomático respiratorio (≥ 2 semanas de tos), el rol del GeneXpert MTB/RIF, la toxicidad de cada fármaco antituberculoso y el estudio y profilaxis de contactos domiciliarios.',
    contentSections: [
      {
        subhead: '1. Definición Operativa de Sintomático Respiratorio y Epidemiología',
        paragraphs: [
          'El <strong>Programa de Control y Eliminación de la Tuberculosis (PROCET)</strong> del Ministerio de Salud define como <strong>Sintomático Respiratorio (SR)</strong> a toda persona que consulta presentando <strong>tos con expectoración por 2 semanas (15 días) o más</strong>. Es una obligación clínica y de salud pública solicitar de inmediato estudio bacteriológico y molecular en todo paciente que cumpla esta condición.',
          'La tuberculosis en Chile es una patología con <strong>Garantía Explícita en Salud (GES)</strong> que asegura diagnóstico, confirmación bacteriológica o molecular, tratamiento farmacológico de primera y segunda línea y seguimiento gratuito e irrenunciable para todos los habitantes del territorio nacional, independiente de su previsión.',
        ],
      },
      {
        subhead: '2. Diagnóstico Molecular Rápido (GeneXpert MTB/RIF) y Baciloscopías',
        paragraphs: [
          '<strong>GeneXpert MTB/RIF:</strong> Es el método de elección inicial normado por MINSAL. Consiste en una prueba molecular automatizada de amplificación de ácidos nucleicos (PCR en tiempo real) que detecta el ADN del complejo <em>Mycobacterium tuberculosis</em> en menos de 2 horas e identifica simultáneamente las mutaciones en el gen <em>rpoB</em> responsables de la <strong>resistencia a Rifampicina</strong>.',
          '<strong>Baciloscopía seriada (Ziehl-Neelsen o Auramina):</strong> Se solicitan 2 muestras de esputo (una inmediata al momento de la consulta y otra matinal en ayunas al día siguiente). Detecta bacilos ácido-alcohol resistentes (BAAR), permitiendo cuantificar la baciliferia y el potencial contagioso.',
          '<strong>Cultivo en medio Löwenstein-Jensen o medio líquido automatizado (MGIT):</strong> Sigue siendo el estándar de oro bacteriológico (gold standard), obligatorio en todas las muestras para certificar viabilidad micobacteriana y realizar pruebas de susceptibilidad a drogas (PSD).',
        ],
      },
      {
        subhead: '3. Esquema Primario Diario Asociado RHZE (PROCET MINSAL)',
        paragraphs: [
          'El tratamiento del caso nuevo pan-susceptible se administra bajo la modalidad de <strong>Tratamiento Directamente Observado (DOTS / TAES)</strong> en el centro de salud, garantizando la adherencia y previniendo resistencias:<br>' +
          '• <strong>Fase Inicial o de Ataque (2 meses / 50 dosis diarias de lunes a viernes):</strong> Cuatro fármacos combinados: <strong>Rifampicina (R) + Isoniazida (H) + Pirazinamida (Z) + Etambutol (E)</strong>.<br>' +
          '• <strong>Fase de Continuación (4 meses / 100 dosis diarias):</strong> Dos fármacos: <strong>Rifampicina (R) + Isoniazida (H)</strong>.',
          'Duración total estándar: <strong>6 meses</strong>. Excepciones: la TBC meníngea, del sistema nervioso central y osteoarticular prolongan la fase de continuación hasta completar <strong>12 meses de tratamiento total</strong>, asociándose además corticoides sistémicos (dexametasona o prednisona) en las primeras 6 a 8 semanas para disminuir secuelas neurológicas y mortalidad.',
        ],
      },
      {
        subhead: '4. Reacciones Adversas Medicamentosas (RAM) y Conducta Clínica',
        paragraphs: [
          'Las toxicidades de los fármacos antituberculosos son objeto frecuente de evaluación en el examen:<br>' +
          '• <strong>Isoniazida (H):</strong> <strong>Hepatitis tóxica</strong> y <strong>neuropatía periférica</strong> por depleción de piridoxina (vitamina B6). Se debe prevenir coadministrando Piridoxina 25 a 50 mg/día en pacientes diabéticos, alcohólicos, desnutridos, embarazadas o con insuficiencia renal.<br>' +
          '• <strong>Rifampicina (R):</strong> <strong>Hepatotoxicidad colestásica</strong>, potente inductor del citocromo P450 (interacciones críticas con anticonceptivos orales, antirretrovirales, anticoagulantes y corticoides) y <strong>tincion rojizo-anaranjada de la orina, saliva y lágrimas</strong> (efecto benigno esperado).<br>' +
          '• <strong>Pirazinamida (Z):</strong> Es el fármaco <strong>más hepatotóxico</strong> del cuarteto; induce además <strong>hiperuricemia</strong> por inhibición de la secreción tubular de ácido úrico, pudiendo gatillar artralgias o crisis de gota aguda.<br>' +
          '• <strong>Etambutol (E):</strong> <strong>Neuritis óptica retrobulbar dosis-dependiente</strong>, que se manifiesta precozmente por discromatopsia (pérdida de diferenciación entre los colores rojo y verde), escotoma central y caída de la agudeza visual. Exige suspensión inmediata.',
        ],
      },
      {
        subhead: '5. Estudio de Contactos Intradomiciliarios y Terapia Preventiva (TPT)',
        paragraphs: [
          'Todo contacto estrecho (convivientes o personas que compartan ≥ 6 horas diarias con el caso índice bacilífero) debe ser sometido a anamnesis, examen físico y <strong>Radiografía de tórax frontal</strong>.',
          'Si la radiografía es normal y el paciente se encuentra asintomático (descartada enfermedad activa), se procede a la <strong>Terapia Preventiva de la Tuberculosis (TPT)</strong>: obligatoria en <strong>todos los niños menores de 5 años</strong> y en <strong>personas viviendo con VIH</strong>, independientemente del resultado de la prueba de tuberculina (PPD) o IGRA. El esquema de TPT más utilizado es <strong>Isoniazida 10 mg/kg/día (máximo 300 mg) vía oral por 6 meses</strong> (o Rifampicina 10 mg/kg/día por 4 meses).',
        ],
      },
    ],
    table: {
      title: 'Fármacos Antituberculosos de Primera Línea y Toxicidad Específica',
      headers: ['Fármaco', 'Mecanismo de Acción', 'Principal Efecto Adverso', 'Perla EUNACOM'],
      rows: [
        ['Isoniazida (H)', 'Inhibe síntesis de ácido micólico', 'Neuropatía periférica y hepatitis', 'Prevenir con Piridoxina (Vitamina B6)'],
        ['Rifampicina (R)', 'Inhibe ARN polimerasa', 'Hepatotoxicidad e inductores CYP450', 'Tiñe orina y secreciones de color rojo-naranja'],
        ['Pirazinamida (Z)', 'Altera energía y transporte en pH ácido', 'El más hepatotóxico e hiperuricemia', 'Puede desencadenar crisis de gota'],
        ['Etambutol (E)', 'Inhibe arabinosil transferasa', 'Neuritis óptica retrobulbar', 'Pérdida de discriminación color rojo-verde'],
      ],
    },
    severityTable: {
      title: 'Formas Clínicas Extrapulmonares y Criterios de Gravedad en Tuberculosis',
      headers: ['Localización TBC', 'Presentación y Diagnóstico', 'Duración Total de Tratamiento', 'Terapia Coadyuvante'],
      rows: [
        ['TBC Pulmonar Clásica', 'Tos, hemoptisis, cavitaciones apicales en Rx', '6 meses (2 RHZE + 4 RH)', 'No requiere corticoides'],
        ['TBC Meníngea / SNC', 'Cefalea subaguda, pares craneales, LCR linfocítico/hipoglucorraquia', '12 meses (2 RHZE + 10 RH)', 'Corticoides sistémicos (Dexametasona 0.4 mg/kg/d) x 6-8 sem'],
        ['TBC Pleural (Pleuritis)', 'Derrame exudado linfocítico con ADA > 40 UI/L', '6 meses (2 RHZE + 4 RH)', 'Toracocentesis evacuadora si disnea severa'],
        ['TBC Miliar / Diseminada', 'Patrón micronodular difuso "grano de mijo", hepatoesplenomegalia', '6 a 12 meses según compromiso', 'Evaluar corticoides si falla respiratoria o shock'],
      ],
    },
    treatmentTable: {
      title: 'Esquema Primario Diario Asociado RHZE y Dosis Ponderales del PROCET (MINSAL)',
      headers: ['Fármaco', 'Dosis Diaria Recomendada', 'Dosis Máxima Diaria', 'Fase del Tratamiento'],
      rows: [
        ['Rifampicina (R)', '10 mg/kg de peso corporal', '600 mg al día', 'Fase Inicial (2 meses) + Fase Continuación (4 meses)'],
        ['Isoniazida (H)', '5 mg/kg de peso corporal', '300 mg al día', 'Fase Inicial (2 meses) + Fase Continuación (4 meses)'],
        ['Pirazinamida (Z)', '25 mg/kg de peso corporal', '1.500 – 2.000 mg al día', 'Fase Inicial exclusivamente (primeros 2 meses)'],
        ['Etambutol (E)', '15 a 20 mg/kg de peso corporal', '1.200 mg al día', 'Fase Inicial exclusivamente (primeros 2 meses)'],
        ['Piridoxina (Vit B6)', '25 a 50 mg al día vía oral', '50 mg al día', 'Coadyuvante de Isoniazida en grupos de riesgo de neuropatía'],
      ],
    },
    vignette: 'Mujer de 38 años consulta en el CESFAM por 3 semanas de tos productiva, febrícula vespertina de hasta 37.8 °C, diaforesis nocturna y baja ponderal no intencionada de 4 kg. La baciloscopía seriada de expectoración demuestra bacilos ácido-alcohol resistentes (+++) y el GeneXpert MTB/RIF detecta M. tuberculosis sin mutación de resistencia a rifampicina. Se notifica de inmediato al PROCET y se inicia tratamiento directamente observado con esquema RHZE diario. A las 3 semanas de terapia consulta refiriendo orina de color anaranjado brillante y parestesias dolorosas en dedos de ambos pies.',
    explicacion: 'La coloración anaranjada de la orina y fluidos es un efecto adverso inocuo, esperado y benigno de la Rifampicina que no constituye daño renal ni hepático y no amerita suspender el fármaco. Las parestesias y disestesias distales en extremidades inferiores corresponden a una neuropatía periférica por Isoniazida, ocasionada por la inhibición competitiva de la activación de piridoxina (vitamina B6). La conducta médica obligatoria es indicar suplementación con Piridoxina (vitamina B6) oral en dosis de 25 a 50 mg/día, manteniendo la terapia antituberculosa sin interrupción si las pruebas hepáticas son satisfactorias.',
    keyPoints: [
      'Sintomático respiratorio: persona con tos y expectoración por ≥ 2 semanas (15 días).',
      'El GeneXpert MTB/RIF detecta en 2 horas la presencia de M. tuberculosis y la resistencia a Rifampicina.',
      'Esquema primario estándar: 2 meses de RHZE diario + 4 meses de RH (6 meses totales).',
      'La TBC meníngea y osteoarticular exige prolongar la terapia a 12 meses (2 RHZE + 10 RH) y asociar corticoides.',
      'El Etambutol causa neuritis óptica con alteración precoz de la discriminación de colores rojo y verde (discromatopsia).',
      'La Rifampicina tiñe secreciones y orina de color anaranjado y es un potente inductor hepático del CYP450.',
      'La Isoniazida produce neuropatía periférica por interferencia con piridoxina; se previene con Vitamina B6 25-50 mg/día.',
      'En contactos estrechos menores de 5 años y pacientes con VIH, tras descartar enfermedad activa con Rx tórax normal, la Terapia Preventiva con Isoniazida por 6 meses es obligatoria.',
    ],
    questions: [
      {
        stem: 'Un paciente de 45 años diagnosticado de tuberculosis pulmonar bacilífera inicia tratamiento con el esquema estándar RHZE bajo supervisión directa. A las 4 semanas de tratamiento consulta refiriendo disminución progresiva de la agudeza visual y dificultad para distinguir las luces del semáforo, refiriendo ver los colores deslavados. ¿Cuál de los fármacos del esquema es el responsable más probable de este cuadro?',
        options: [
          { id: 'A', text: 'Isoniazida' },
          { id: 'B', text: 'Rifampicina' },
          { id: 'C', text: 'Etambutol' },
          { id: 'D', text: 'Pirazinamida' },
          { id: 'E', text: 'Estreptomicina' },
        ],
        correcta: 'C',
        explicacion: 'El etambutol es el responsable clásico de la neuritis óptica retrobulbar, un efecto adverso dosis-dependiente que se manifiesta por disminución de la agudeza visual central, escotomas centrales y la característica pérdida precoz de la discriminación de los colores rojo y verde (discromatopsia). Ante la aparición de estos síntomas se debe suspender inmediatamente el etambutol y evaluar por oftalmología.',
        recTag: 'EUNACOM Diciembre 2017 · Reconstrucción oficial',
      },
      {
        stem: '¿Cuál es la definición operacional chilena de "Sintomático Respiratorio" establecida por el Programa de Control y Eliminación de la Tuberculosis (PROCET) del MINSAL para la pesquisa activa de casos?',
        options: [
          { id: 'A', text: 'Todo paciente con fiebre de origen desconocido por más de 7 días' },
          { id: 'B', text: 'Toda persona que presenta tos con expectoración durante 2 semanas (15 días) o más' },
          { id: 'C', text: 'Cualquier persona con disnea de esfuerzo progresiva independiente del tiempo' },
          { id: 'D', text: 'Todo paciente con hemoptisis franca independiente de la duración' },
          { id: 'E', text: 'Cualquier contacto intradomiciliario con tos de más de 48 horas' },
        ],
        correcta: 'B',
        explicacion: 'El Programa Nacional de Control y Eliminación de la Tuberculosis (PROCET) de Chile define de manera estricta y operativa al "Sintomático Respiratorio" como toda persona que presenta tos con expectoración por 15 días o más (≥ 2 semanas). En toda persona que cumpla este criterio es una obligación de salud pública solicitar de inmediato dos muestras de esputo para baciloscopía y estudio molecular (GeneXpert).',
        recTag: 'EUNACOM Julio 2019 · Reconstrucción oficial',
      },
      {
        stem: 'Un paciente de 52 años en su tercera semana de tratamiento con esquema RHZE por tuberculosis pulmonar consulta para control de exámenes rutinarios. Se encuentra completamente asintomático, sin ictericia ni coluria. El perfil hepático demuestra GOT (AST) 95 UI/L y GPT (ALT) 110 UI/L (valor basal previo al tratamiento: 25 UI/L; límite superior normal del laboratorio: 40 UI/L). Bilirrubina total y fosfatasas alcalinas dentro de límites normales. ¿Cuál es la conducta médica más adecuada?',
        options: [
          { id: 'A', text: 'Suspender de inmediato todo el esquema antituberculoso y derivar a trasplante hepático' },
          { id: 'B', text: 'Mantener el esquema RHZE inalterado y repetir pruebas de función hepática en 1 a 2 semanas con estricta vigilancia clínica' },
          { id: 'C', text: 'Suspender únicamente la pirazinamida e iniciar ácido ursodesoxicólico' },
          { id: 'D', text: 'Reemplazar rifampicina por ciprofloxacino en forma inmediata' },
          { id: 'E', text: 'Reducir la dosis de isoniazida a la mitad y dar de alta del programa' },
        ],
        correcta: 'B',
        explicacion: 'Una elevación transitoria y asintomática de transaminasas ocurre en hasta el 20% de los pacientes que inician fármacos antituberculosos. Los consensos del PROCET y las guías internacionales establecen que SOLO se suspende el tratamiento si las transaminasas superan 5 veces el límite superior normal en pacientes asintomáticos (en este caso > 200 UI/L, encontrándose en 110 UI/L, es decir < 3 veces), o si superan 3 veces el límite superior normal acompañadas de síntomas clínicos de hepatitis (náuseas, vómitos, dolor abdominal, ictericia). Por tanto, la conducta correcta es mantener el esquema y monitorizar con nuevo perfil hepático.',
        recTag: 'EUNACOM Diciembre 2021 · Reconstrucción oficial',
      },
      {
        stem: 'Se diagnostica tuberculosis pulmonar bacilífera (BK +++) a un hombre de 34 años. Entre sus contactos intradomiciliarios vive su hijo de 3 años, quien se encuentra asintomático. Se le realiza radiografía de tórax frontal y lateral, la cual es estrictamente normal, y una prueba de tuberculina (PPD) que arroja una induración de 12 mm. ¿Cuál es la conducta indicada en el niño según la norma técnica del PROCET?',
        options: [
          { id: 'A', text: 'Observación clínica exclusiva y citar a control solo si presenta tos por más de 15 días' },
          { id: 'B', text: 'Indicar Terapia Preventiva de la Tuberculosis con Isoniazida oral durante 6 meses' },
          { id: 'C', text: 'Iniciar esquema curativo completo con cuatro drogas (RHZE) por 6 meses' },
          { id: 'D', text: 'Revacunación inmediata con vacuna BCG en dosis de refuerzo' },
          { id: 'E', text: 'Aislamiento respiratorio estricto en habitación individual durante 6 semanas' },
        ],
        correcta: 'B',
        explicacion: 'En todo contacto intradomiciliario menor de 5 años expuesto a un caso índice con tuberculosis pulmonar activa, una vez descartada la enfermedad activa (ausencia de síntomas y radiografía de tórax normal), está formalmente indicada la Terapia Preventiva de la Tuberculosis (TPT / quimioprofilaxis) con Isoniazida 10 mg/kg/día por 6 meses. La presencia de PPD ≥ 5 mm (en este caso 12 mm) confirma infección latente por M. tuberculosis, con altísimo riesgo de progresión rápida a formas graves como meningitis tuberculosa o TBC miliar en menores de 5 años si no reciben TPT.',
        recTag: 'EUNACOM Reconstrucción Canónica · Programa de Salud Pública',
      },
    ],
  },
];

module.exports = { bloque2 };
