/**
 * DATASET · Nefrología — Bloque 5: Enfermedad Renal Crónica, Hipertensión Renovascular y Nefropatías Crónicas
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
  /* ───────────────────────── 🔴 TIER 3 (4 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-18', classId: 'nefro-18', tier: 3,
    blockNum: 5, blockName: 'Enfermedad Renal Crónica, Hipertensión Renovascular y Nefropatías Crónicas',
    topicLabel: '5.1', title: 'Enfermedad Renal Crónica (KDIGO) y Garantías Explícitas en Salud (GES)',
    perfilCode: '1.09.1.014, 1.09.1.001, 1.09.4.005, 1.09.4.016', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Problema de Salud GES N° 1: Enfermedad Renal Crónica Etapa 4 y 5 (Acceso garantizado a Nefrólogo, Fístula AV, Diálisis y Trasplante)',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#80) · EUNACOM Diciembre 2018 (Q#12) · EUNACOM Julio 2021 (Q#33) · EUNACOM Diciembre 2022 (Q#47)',
    frecuencia: 'Máxima rentabilidad en EUNACOM · Indicación de IECA/ARA-II antiproteinúrico, criterios GES etapa 4–5 y confección de fístula AV',
    svg: null, algoTitle: 'Algoritmo de Etapificación KDIGO y Manejo Nefroprotector',
    diagram: flow('Algoritmo de Etapificación KDIGO y Ruta Terapéutica en ERC', [
      { t: 'Filtrado Glomerular < 60 mL/min/1.73m² o Marcadores de Daño Renal Persistentes ≥ 3 Meses', s: 'Albuminuria persistente (RAC ≥ 30 mg/g), sedimento activo, alteraciones en imágenes o biopsia', type: 'warn' },
      { k: 'split', q: '¿Presenta Albuminuria Moderada a Severa (A2: RAC 30–300 mg/g o A3: RAC > 300 mg/g)?',
        ll: 'SÍ: Albuminuria Positiva (Alto Riesgo de Progresión Renal)',
        left: { t: 'Iniciar Bloqueador del SRAA (IECA / ARA-II) + iSGLT2', s: 'Vasodilatación eferente, caída de presión intraglomerular · Meta PA < 130/80 mmHg y reducir albuminuria', type: 'acc' },
        rl: 'NO: Albuminuria A1 (< 30 mg/g) Sin Factores de Riesgo',
        right: { t: 'Control Metabólico y Cardiovascular Estricto', s: 'Control de glicemia, estatinas para LDL < 70 mg/dL, restricción de sodio (< 2 g/día), evitar AINEs', type: 'dec' },
      },
      { k: 'split', q: '¿Tasa de Filtración Glomerular < 30 mL/min (ERC Etapa 4 o 5)?',
        ll: 'SÍ: TFG < 30 mL/min (ETAPA 4) o < 15 mL/min (ETAPA 5)',
        left: { t: 'NOTIFICACIÓN INMEDIATA A GARANTÍAS GES N° 1', s: 'Derivación prioritaria a Nefrólogo en ≤ 30 días · Confección de Fístula AV prediálisis · Vacunación VHB', type: 'acc' },
        rl: 'NO: TFG ≥ 30 mL/min (Etapas 1 a 3)',
        right: { t: 'Manejo en Atención Primaria de Salud (APS)', s: 'Monitorización de TFG y RAC cada 6–12 meses · Ajuste de fármacos nefrotóxicos (metformina)', type: 'dec' },
      },
    ]),
    contexto: 'La Enfermedad Renal Crónica (ERC) es un problema de salud pública prioritario en Chile y en el mundo, siendo la principal complicación microvascular de la diabetes mellitus y la hipertensión arterial. Su detección precoz mediante la estimación de la TFG (ecuación CKD-EPI) y la medición de la Razón Albúmina/Creatinina en orina (RAC) permite instaurar medidas nefroprotectoras que frenan la pérdida de nefronas. La Ley GES en Chile garantiza el acceso integral, oportuno y financiado al especialista, a la confección de fístula arteriovenosa y a las terapias de reemplazo renal (hemodiálisis, peritoneodiálisis y trasplante) a todo paciente en etapas 4 y 5.',
    contentSections: [
      {
        subhead: '1. Definición y Clasificación KDIGO 2024',
        paragraphs: [
          'La <strong>Enfermedad Renal Crónica (ERC)</strong> se define por la presencia de <strong>anomalías de la estructura o de la función renal presentes durante más de 3 meses consecutivos</strong>, con implicancias para la salud. Requiere al menos uno de los siguientes criterios:',
          '1. <strong>Tasa de Filtración Glomerular estimada (TFGe) < 60 mL/min/1.73 m²</strong> calculada por ecuación <strong>CKD-EPI</strong> con creatinina sérica.',
          '2. <strong>Marcadores de daño renal parenquimatoso</strong>: <strong>Albuminuria persistente</strong> (Razón Albúmina/Creatinina en orina de muestra aislada <strong>RAC ≥ 30 mg/g</strong> o IPC ≥ 0.2 mg/mg); sedimento de orina patológico persistente (hematuria dismórfica o cilindros); anomalías electrolíticas de origen tubular; alteraciones histológicas en biopsia renal; alteraciones estructurales en imágenes (ecografía con riñones pequeños < 9 cm, pérdida de relación córtico-medular o riñones poliquísticos); o antecedente de trasplante renal.',
          'La etapificación KDIGO es <strong>bidimensional</strong> (categoría G combinada con categoría A): <strong>G1</strong> (TFGe ≥ 90 mL/min con daño renal), <strong>G2</strong> (60–89 mL/min con daño renal), <strong>G3a</strong> (45–59 mL/min), <strong>G3b</strong> (30–44 mL/min), <strong>G4</strong> (15–29 mL/min, falla renal severa) y <strong>G5</strong> (< 15 mL/min, falla renal terminal). Respecto a la albuminuria: <strong>A1</strong> (< 30 mg/g, normal a levemente aumentada), <strong>A2</strong> (30–300 mg/g, microalbuminuria o moderadamente aumentada) y <strong>A3</strong> (> 300 mg/g, macroalbuminuria o severamente aumentada).',
        ],
      },
      {
        subhead: '2. Medidas de Nefroprotección y Fármacos Modificadores',
        paragraphs: [
          'El objetivo cardinal en etapas precoces (G1–G3) es retardar la progresión hacia la diálisis mediante:',
          '<strong>Bloqueo del Sistema Renina-Angiotensina (IECA o ARA-II):</strong> Es el pilar de primera línea en todo paciente hipertenso o normotenso que presente <strong>albuminuria persistente A2 o A3</strong>. Dilatan selectivamente la arteriola eferente, abatiendo la hipertensión intraglomerular y reduciendo la proteinuria. Al iniciarlos es esperable un <strong>incremento fisiológico de hasta un 30% en la creatinina sérica basal</strong> (por caída de la hiperfiltración) y una discreta elevación del potasio: esto NO es motivo de suspensión, solo si la creatinina se eleva > 30% o el potasio supera los 5.5 mEq/L se debe ajustar o pausar el fármaco.',
          '<strong>Inhibidores del cotransportador SGLT2 (Dapagliflozina, Empagliflozina):</strong> Demostraron reducir en un 35–40% el riesgo de duplicación de creatinina, muerte renal o necesidad de diálisis tanto en pacientes diabéticos como no diabéticos con ERC y albuminuria, promoviendo natriuresis en la mácula densa y restauración del feedback túbulo-glomerular.',
          '<strong>Control de Presión Arterial:</strong> Meta de presión arterial estandarizada <strong>< 130/80 mmHg</strong> (o PA sistólica < 120 mmHg según guías KDIGO 2024 si se mide de forma automatizada en reposo).',
        ],
      },
      {
        subhead: '3. Garantías Explícitas en Salud (GES N° 1) en Chile',
        paragraphs: [
          'El <strong>Problema de Salud GES N° 1</strong> cubre integralmente la <strong>Enfermedad Renal Crónica Etapas 4 y 5</strong>:',
          '• <strong>Acceso al Nefrólogo:</strong> Todo paciente Fonasa o Isapre diagnosticado con <strong>TFG < 30 mL/min (Etapa 4) o < 15 mL/min (Etapa 5)</strong> debe ser derivado y atendido por el especialista Nefrólogo en el nivel secundario en un plazo máximo de <strong>30 días</strong>.',
          '• <strong>Preparación Prediálisis:</strong> Todo paciente en Etapa 4 debe iniciar la educación para terapias de reemplazo y ser programado para la <strong>confección de una Fístula Arteriovenosa (FAV) autóloga (habitualmente radio-cefálica de Brescia-Cimino en brazo no dominante) al menos 6 meses antes</strong> de la fecha estimada de ingreso a diálisis, asegurando un acceso vascular maduro y evitando el uso de catéteres venosos centrales temporales asociados a bacteriemias y estenosis venosa central.',
          '• <strong>Tratamiento Sustitutivo Garantizado:</strong> Acceso oportuno e ilimitado a <strong>Hemodiálisis Crónica</strong> (3 veces por semana, 4 horas por sesión) o <strong>Peritoneodiálisis</strong>, medicamentos de soporte (eritropoyetina humana recombinante, hierro endovenoso, análogos de vitamina D, quelantes de fósforo) e incorporación formal a la lista de espera de <strong>Trasplante Renal</strong>.',
        ],
      },
      {
        subhead: '4. Nutrición y Estilo de Vida en ERC',
        paragraphs: [
          'La intervención dietética comprende: <strong>restricción de sodio a < 2 g/día (< 5 g de sal común)</strong>; <strong>restricción moderada de proteínas en etapas G3–G5 no dializadas a 0.6 a 0.8 g/kg/día</strong> (para reducir la sobrecarga de toxinas nitrogenadas y la presión glomerular); restricción de alimentos ricos en fósforo (lácteos, bebidas cola, procesados) y potasio (frutos secos, plátano, cítricos) en etapas avanzadas.',
        ],
      },
    ],
    table: {
      title: 'Matriz de Riesgo y Clasificación KDIGO: Intersección TFG (G) y Albuminuria (A)',
      headers: ['Estadio de TFG', 'Rango de TFGe (mL/min)', 'A1: RAC < 30 mg/g', 'A2: RAC 30–300 mg/g', 'A3: RAC > 300 mg/g'],
      rows: [
        ['G1 (Normal / Alto)', '≥ 90 mL/min', 'Bajo Riesgo (Verde)', 'Riesgo Moderado (Amarillo)', 'Alto Riesgo (Naranja)'],
        ['G2 (Levemente Disminuido)', '60–89 mL/min', 'Bajo Riesgo (Verde)', 'Riesgo Moderado (Amarillo)', 'Alto Riesgo (Naranja)'],
        ['G3a (Leve a Moderado)', '45–59 mL/min', 'Riesgo Moderado (Amarillo)', 'Alto Riesgo (Naranja)', 'Muy Alto Riesgo (Rojo)'],
        ['G3b (Moderado a Severo)', '30–44 mL/min', 'Alto Riesgo (Naranja)', 'Muy Alto Riesgo (Rojo)', 'Muy Alto Riesgo (Rojo)'],
        ['G4 (Severamente Disminuido)', '15–29 mL/min', 'Muy Alto Riesgo (Rojo - GES)', 'Muy Alto Riesgo (Rojo - GES)', 'Muy Alto Riesgo (Rojo - GES)'],
        ['G5 (Falla Renal Terminal)', '< 15 mL/min o Diálisis', 'Muy Alto Riesgo (Rojo - GES)', 'Muy Alto Riesgo (Rojo - GES)', 'Muy Alto Riesgo (Rojo - GES)'],
      ],
    },
    treatmentTable: {
      title: 'Pautas de Intervención Escalonada según Estadio de ERC',
      headers: ['Estadio KDIGO', 'Acciones Clínicas Principales', 'Fármaco / Garantía Mandatoria'],
      rows: [
        ['Estadios G1–G2 con Albuminuria A2/A3', 'Nefroprotección intensiva y pesquisa etiológica', 'Iniciar IECA (Enalapril) o ARA-II (Losartán) + iSGLT2 (Dapagliflozina)'],
        ['Estadio G3 (TFGe 30–59 mL/min)', 'Ajuste de dosis de fármacos, pesquisa de anemia y CKD-MBD', 'Suspender o ajustar Metformina si TFG < 45; suspender AINEs de por vida'],
        ['Estadio G4 (TFGe 15–29 mL/min)', 'Notificación GES N° 1 y derivación urgente a Nefrólogo', 'Garantía GES: consulta en ≤ 30 días · Cirugía de Fístula AV autóloga prediálisis'],
        ['Estadio G5 (TFGe < 15 mL/min)', 'Inicio de Terapia de Reemplazo Renal / Evaluación Trasplante', 'Hemodiálisis trisemanal o Peritoneodiálisis ambulatoria garantizada GES'],
      ],
    },
    vignette: 'Hombre de 54 años, con antecedentes de diabetes mellitus tipo 2 de 14 años de evolución e hipertensión arterial, en tratamiento regular con Metformina 850 mg cada 12 horas y Amlodipino 10 mg/día. Consulta a control médico asintomático. Al examen físico: PA 142/88 mmHg, FC 70 lpm, fondo de ojo con retinopatía diabética no proliferativa moderada, examen físico sin edemas. Exámenes de laboratorio: Glicemia 134 mg/dL, HbA1c 7.4%, Creatinina sérica 1.5 mg/dL (TFGe por CKD-EPI: 52 mL/min/1.73m², estadio G3a), Potasio 4.2 mEq/L. Orina completa normal, Razón Albúmina/Creatinina en orina (RAC): 180 mg/g (estadio A2, microalbuminuria confirmada en 2 tomas).',
    explicacion: 'El paciente presenta una Enfermedad Renal Crónica estadio G3a A2 secundaria a Nefropatía Diabética establecida. La presencia de albuminuria moderadamente aumentada (A2: RAC 30–300 mg/g) en un paciente diabético con hipertensión arterial constituye la indicación de primera línea indiscutible para iniciar un Bloqueador del Sistema Renina-Angiotensina-Aldosterona (un IECA como Enalapril o un ARA-II como Losartán), sumado a un inhibidor de SGLT2 (Dapagliflozina o Empagliflozina). El IECA reduce selectivamente el tono de la arteriola eferente, disminuyendo la presión capilar intraglomerular y reduciendo la progresión del daño glomerular.',
    keyPoints: [
      'ERC: TFG < 60 mL/min/1.73m² o daño renal (albuminuria persistente RAC ≥ 30 mg/g) por más de 3 meses.',
      'Causa #1 de ERC terminal en Chile y el mundo: Nefropatía Diabética, seguida de la Nefroangioesclerosis hipertensiva.',
      'IECA o ARA-II son los fármacos antiproteinúricos de elección en todo paciente con albuminuria A2 o A3.',
      'Un aumento de hasta un 30% de la creatinina tras iniciar IECA/ARA-II es un efecto hemodinámico esperado y NO obliga a suspender el fármaco.',
      'iSGLT2 (dapagliflozina, empagliflozina) han demostrado nefroprotección de clase reduciendo muerte renal en diabéticos y no diabéticos.',
      'Problema de Salud GES N° 1: cubre la ERC Etapa 4 y 5 con consulta por Nefrólogo en ≤ 30 días, preparación de fístula AV, diálisis y trasplante.',
      'La fístula arteriovenosa (FAV) debe confeccionarse al menos 6 meses antes del inicio previsto de diálisis (en estadio 4) para permitir su maduración.',
      'Metformina debe suspenderse obligatoriamente si la TFG desciende por debajo de 30 mL/min por riesgo de acidosis láctica.',
    ],
    questions: [
      {
        stem: 'Hombre de 46 años, con antecedente de diabetes mellitus tipo 2 en tratamiento con metformina, acude a control regular encontrándose asintomático. Al examen físico se pesquisa presión arterial de 138/84 mmHg, sin otros hallazgos patológicos. Sus exámenes de laboratorio revelan: HbA1c 6.9%, Creatinina 0.8 mg/dL, y un Índice Proteinuria/Creatininuria (o RAC) confirmado de 0.3 mg/mg (300 mg/g). ¿Cuál es la conducta farmacológica más adecuada e indicada para la protección renal de este paciente?',
        options: [
          { id: 'A', text: 'Aumentar la dosis de metformina a 2.550 mg/día' },
          { id: 'B', text: 'Iniciar hidroclorotiazida 25 mg/día' },
          { id: 'C', text: 'Iniciar enalapril en dosis tituladas' },
          { id: 'D', text: 'Suspender metformina e iniciar esquema de insulina' },
          { id: 'E', text: 'Mantener el tratamiento actual sin modificaciones' },
        ],
        correcta: 'C',
        explicacion: 'En todo paciente diabético que presenta microalbuminuria o proteinuria confirmada (RAC ≥ 30 mg/g o IPC ≥ 0.2), las guías clínicas ministeriales (MINSAL) e internacionales (ADA / KDIGO) establecen que el fármaco antihipertensivo y nefroprotector de elección obligada es un inhibidor de la enzima convertidora de angiotensina (IECA, como el Enalapril) o un antagonista de los receptores de angiotensina II (ARA-II, como el Losartán). Los IECA vasodilatan la arteriola eferente del glomérulo, disminuyendo la presión hidrostática intraglomerular y frenando la progresión de la nefropatía diabética.',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 62 años con diabetes mellitus e hipertensión arterial consulta a control en Cesfam. Trae exámenes que muestran creatinina de 2.1 mg/dL, con una tasa de filtración glomerular estimada de 24 mL/min/1.73m² (confirmada con examen previo de hace 4 meses similar). No presenta síntomas urémicos. De acuerdo a la normativa de Garantías Explícitas en Salud (GES N° 1) en Chile, ¿cuál es la conducta que debe adoptar el médico tratante?',
        options: [
          { id: 'A', text: 'Notificar caso GES N° 1 de ERC Etapa 4 y generar interconsulta prioritaria a Nefrología para ingreso en menos de 30 días' },
          { id: 'B', text: 'Instalar catéter venoso central transitorio para hemodiálisis en el servicio de urgencias' },
          { id: 'C', text: 'Citar a nuevo control en atención primaria en un año para reevaluar función renal' },
          { id: 'D', text: 'Iniciar diálisis peritoneal ambulatoria de forma inmediata en el consultorio' },
          { id: 'E', text: 'Indicar restricción hídrica estricta de 500 mL/día y suspender todo tratamiento oral' },
        ],
        correcta: 'A',
        explicacion: 'La paciente presenta una Enfermedad Renal Crónica confirmada en Etapa 4 (TFG entre 15 y 29 mL/min, en este caso 24 mL/min). En Chile, el Problema de Salud GES N° 1 cubre formalmente la ERC en Etapas 4 y 5. La obligación del médico de atención primaria es notificar el caso al sistema GES y emitir la derivación al especialista Nefrólogo en el nivel secundario, quien tiene un plazo garantizado por ley de no más de 30 días para evaluar a la paciente, optimizar el manejo metabólico, vacunar contra hepatitis B y planificar la confección oportuna del acceso vascular (fístula arteriovenosa) pre-diálisis.',
        recTag: 'EUNACOM Diciembre 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 68 años con enfermedad renal crónica estadio 4 en programa de prediálisis es programado para confección de fístula arteriovenosa autóloga. ¿Por qué motivo las guías clínicas recomiendan confeccionar la fístula arteriovenosa con al menos 6 meses de anticipación al inicio previsto de la hemodiálisis?',
        options: [
          { id: 'A', text: 'Para permitir el proceso de maduración y arterialización venosa con adecuado flujo y pared engrosada' },
          { id: 'B', text: 'Para prevenir la aparición de calcificaciones metastásicas en la arteria radial' },
          { id: 'C', text: 'Porque la fístula reduce de inmediato la cifra de creatinina sérica a valores normales' },
          { id: 'D', text: 'Para evitar el uso de eritropoyetina humana recombinante en el paciente' },
          { id: 'E', text: 'Para facilitar la reabsorción distal de potasio en las nefronas residuales' },
        ],
        correcta: 'A',
        explicacion: 'Una fístula arteriovenosa (FAV) autóloga requiere someterse al flujo de alta presión pulsátil arterial para que la vena anastomosada se dilate progresivamente, engruese su capa muscular y endotelial ("arterialización") y alcance un calibre y flujo suficientes (> 500–600 mL/min) que permitan soportar punciones repetidas con agujas de diálisis de grueso calibre. Este proceso biológico de maduración vascular tarda típicamente entre 2 a 6 meses. La confección precoz evita que el paciente deba ingresar a diálisis de urgencia con un catéter venoso central transitorio, el cual se asocia a bacteriemias letales y estenosis venosa central.',
        recTag: 'EUNACOM Julio 2021 · Reconstrucción oficial',
      },
      {
        stem: 'En un paciente hipertenso con enfermedad renal crónica y proteinuria en quien se inicia tratamiento con Losartán 50 mg/día, se constata a las 2 semanas de control un ascenso de la creatinina sérica desde 1.4 mg/dL hasta 1.65 mg/dL (incremento del 18%) y un potasio sérico de 4.8 mEq/L. El paciente se encuentra clínicamente asintomático y con PA de 128/78 mmHg. ¿Cuál es la conducta médica más adecuada?',
        options: [
          { id: 'A', text: 'Mantener el losartán sin cambios y continuar la monitorización periódica' },
          { id: 'B', text: 'Suspender de inmediato el losartán por toxicidad renal irreversible' },
          { id: 'C', text: 'Reducir la dosis a un cuarto de comprimido y administrar furosemida' },
          { id: 'D', text: 'Indicar hemodiálisis de urgencia por deterioro de filtración' },
          { id: 'E', text: 'Reemplazar el losartán por un AINE a dosis antiinflamatorias' },
        ],
        correcta: 'A',
        explicacion: 'El bloqueo del sistema renina-angiotensina con IECA o ARA-II produce una vasodilatación de la arteriola eferente que alivia la hiperfiltración e hipertensión intraglomerular, lo cual genera de manera hemodinámica esperable una discreta disminución del filtrado glomerular reflejada en una elevación leve de la creatinina sérica. Se considera un efecto fisiológico seguro y tolerable si el aumento de la creatinina sérica es menor al 30% respecto al valor basal y la kalemia se mantiene en niveles seguros (< 5.5 mEq/L). Por tanto, con un ascenso del 18% y potasio normal, la conducta correcta es mantener el fármaco y monitorear.',
        recTag: 'EUNACOM Diciembre 2022 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-19', classId: 'nefro-19', tier: 2,
    blockNum: 5, blockName: 'Enfermedad Renal Crónica, Hipertensión Renovascular y Nefropatías Crónicas',
    topicLabel: '5.2', title: 'Complicaciones de la ERC: Anemia, Trastorno Mineral Óseo (CKD-MBD) y Acidosis',
    perfilCode: '1.09.1.015, 1.09.1.001', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía GES N° 1: Medicamentos e insumos para anemia y CKD-MBD en etapas 4–5',
    reconstrucciones: 'EUNACOM Diciembre 2016 (Q#63) · EUNACOM Julio 2020 (Q#25)',
    frecuencia: 'Alta en EUNACOM · Tratamiento de la anemia con EPO (meta Hb 10–11.5) y estudio del hiperparatiroidismo secundario con 25-OH-vitamina D',
    svg: null, algoTitle: 'Algoritmo de Manejo de Anemia y Trastorno Mineral en ERC',
    diagram: flow('Algoritmo de Manejo: Anemia Renal y CKD-MBD en ERC', [
      { t: 'Complicaciones Sistémicas de la ERC en Estadios G3 a G5', s: 'Screening periódico: Hemograma, Perfil de Hierro, Calcio, Fósforo, PTH intacta y 25-OH-Vit D', type: 'warn' },
      { k: 'split', q: '¿Presenta Anemia Normocítica Normocrómica (Hb < 10 g/dL)?',
        ll: 'PASO 1: DESCARTAR Y CORREGIR FERROPENIA',
        left: { t: 'Optimizar Hierro (Meta: Sat Tranferrina > 20%, Ferritina > 100 ng/mL)', s: 'Hierro intravenoso u oral · Solo si el hierro está repleto se inicia Eritropoyetina (AEE) con meta Hb 10–11.5', type: 'acc' },
        rl: 'PASO 2: HIPERPARATIROIDISMO SECUNDARIO (CKD-MBD)',
        right: { t: 'Control de Fósforo + Vitamina D + Calcitriol', s: 'Restricción de fósforo en dieta + Quelantes (Carbonato Ca / Sevelamer) + Calcitriol si PTH elevada', type: 'dec' },
      },
    ]),
    contexto: 'A medida que la TFG declina por debajo de 60 y especialmente de 30 mL/min, se alteran las funciones endocrinas y metabólicas renales. La pérdida de masa tubular intersticial reduce la síntesis de eritropoyetina provocando anemia crónica severa; la retención de fósforo y la falta de activación de la vitamina D (déficit de 1-alfa-hidroxilasa) desatan el hiperparatiroidismo secundario con resorción ósea acelerada (osteodistrofia renal) y calcificaciones vasculares generalizadas. Dominar las metas de hemoglobina y el algoritmo del metabolismo calcio-fósforo es crucial en el EUNACOM.',
    contentSections: [
      {
        subhead: '1. Anemia Renal y Agentes Estimulantes de la Eritropoyesis (AEE)',
        paragraphs: [
          'La causa primordial es el <strong>déficit relativo o absoluto de síntesis de Eritropoyetina (EPO)</strong> por las células peritubulares renales. Se manifiesta como una <strong>anemia normocítica, normocrómica, arregenerativa (índice reticulocitario < 2)</strong>.',
          '<strong>Regla de Oro en el Manejo de la Anemia:</strong> ANTES de indicar agentes estimulantes de la eritropoyesis (EPO recombinante o Darbepoetina), <strong>ES OBLIGATORIO EVALUAR Y REPLECIONAR LOS DEPÓSITOS DE HIERRO</strong>. La meta de cinética de hierro para permitir una respuesta eritropoyética eficaz es: <strong>Saturación de Transferrina (IST) > 20%</strong> y <strong>Ferritina sérica > 100 ng/mL (o > 200 ng/mL en pacientes hemodializados)</strong>. Administrar EPO a un paciente con ferropenia es ineficaz (resistencia a EPO).',
          '<strong>Meta de Hemoglobina con EPO:</strong> La meta terapéutica estricta es mantener la <strong>Hemoglobina entre 10.0 y 11.5 g/dL</strong> (máximo 12.0 g/dL). <strong>NUNCA se debe intentar normalizar la hemoglobina a cifras > 13.0 g/dL</strong>, debido a que los grandes ensayos clínicos (TREAT, CHOIR) demostraron un incremento letal de eventos cardiovasculares adversos mayores (ACV isquémico, infarto agudo de miocardio) y trombosis precoz del acceso vascular (fístula arteriovenosa).',
        ],
      },
      {
        subhead: '2. Trastorno Mineral y Óseo (CKD-MBD) e Hiperparatiroidismo Secundario',
        paragraphs: [
          'La fisiopatología del <strong>CKD-MBD (Chronic Kidney Disease - Mineral and Bone Disorder)</strong> inicia con la <strong>retención de fósforo</strong> al descender la TFG, la cual estimula al factor de crecimiento fibroblástico 23 (FGF-23) y reduce los niveles de calcio iónico.',
          'Concomitantemente, la pérdida de parénquima renal condiciona una <strong>deficiencia de la enzima 1-alfa-hidroxilasa</strong>, impidiendo la hidroxilación de la 25-hidroxivitamina D a su forma biológicamente activa: la <strong>1,25-dihidroxivitamina D (Calcitriol)</strong>.',
          'La hipocalcemia, la hiperfosfatemia y la ausencia de calcitriol estimulan de forma masiva la síntesis y secreción de <strong>Paratohormona (PTH intacta)</strong> por las glándulas paratiroides, configurando el <strong>Hiperparatiroidismo Secundario</strong>. Esto genera resorción ósea masiva (osteítis fibrosa quística), fragilidad esquelética, dolor óseo, prurito urémico intratable y calcificaciones de la túnica media arterial (arteriolopatía urémica calcificante o calcifilaxis).',
          '<strong>Tratamiento del CKD-MBD:</strong> (1) Restricción de fósforo en la dieta (< 800–1000 mg/día); (2) <strong>Quelantes de fósforo</strong> tomados estrictamente con las comidas (Carbonato de calcio o Acetato de calcio si hay hipocalcemia; o quelantes libres de calcio como <strong>Sevelamer</strong> si hay hipercalcemia o calcificaciones vasculares); (3) Medición seriada de <strong>25-OH-vitamina D sérica</strong> y suplementación con Colecalciferol si hay déficit (< 30 ng/mL); y (4) Administración de <strong>Calcitriol o análogos (Paricalcitol)</strong> o <strong>calcimiméticos (Cinacalcet)</strong> si la PTH se eleva persistentemente.',
        ],
      },
    ],
    table: {
      title: 'Alteraciones Bioquímicas y Metas Terapéuticas en CKD-MBD (Etapas G3 a G5)',
      headers: ['Parámetro Bioquímico', 'Alteración Fisiopatológica en ERC', 'Meta Terapéutica Recomendada', 'Intervención de Elección'],
      rows: [
        ['Fósforo Sérico', 'Hiperfosfatemia por retención renal', 'Normal (2.5 a 4.5 mg/dL en G3-G4; hacia la normalidad en G5)', 'Dieta baja en fósforo + Quelantes (Sevelamer / Carbonato Ca)'],
        ['Calcio Sérico', 'Hipocalcemia por falta de calcitriol', 'Mantener en rango normal (8.5 a 10.2 mg/dL)', 'Evitar hipercalcemia; carbonato de calcio con comidas'],
        ['25-OH-Vitamina D', 'Déficit nutricional frecuente (< 30 ng/mL)', 'Nivel sérico > 30 ng/mL', 'Suplementación oral con Colecalciferol (Vitamina D3)'],
        ['PTH Intacta (iPTH)', 'Elevación marcada (Hiperparatiroidismo)', '2 a 9 veces el límite superior normal en G5D (150–600 pg/mL)', 'Calcitriol oral / Paricalcitol o Cinacalcet (calcimimético)'],
      ],
    },
    vignette: 'Hombre de 64 años con antecedente de insuficiencia renal crónica estadio G3b (TFGe estimada en 38 mL/min) acude a control de nefrología ambulatoria. Sus exámenes de laboratorio revelan: Calcemia 8.6 mg/dL, Fósforo 4.2 mg/dL, Hormona Paratiroidea (PTH intacta) en 135 pg/mL (VN menor a 65 pg/mL) y TSH normal. Hemograma muestra hemoglobina de 10.4 g/dL con VCM de 88 fL. El paciente no refiere sintomatología musculoesquelética.',
    explicacion: 'El paciente presenta un Hiperparatiroidismo Secundario inicial a su enfermedad renal crónica estadio G3b, evidenciado por la elevación de la PTH sérica por sobre el doble del valor de referencia normal, en presencia de niveles normales de calcio y fósforo. Antes de iniciar análogos activos de la vitamina D (como calcitriol), las guías clínicas KDIGO recomiendan formalmente que el primer paso diagnóstico de elección para proseguir el estudio es determinar los niveles plasmáticos de 25-hidroxivitamina D (25-OH-vitamina D). Si existe un déficit nutricional de 25-OH-vitamina D (< 30 ng/mL), su corrección con colecalciferol oral suele ser suficiente para suprimir la hipersecreción paratiroidea en etapas moderadas de la ERC.',
    keyPoints: [
      'Anemia de la ERC: normocítica normocrómica por déficit de síntesis de eritropoyetina por células peritubulares.',
      'Antes de indicar eritropoyetina (AEE) es obligatorio confirmar y repletar el hierro: meta IST > 20% y Ferritina > 100 ng/mL.',
      'Meta de Hemoglobina con EPO: 10.0 a 11.5 g/dL. Sobrepasar 13.0 g/dL aumenta letalmente el riesgo de ACV, infarto y trombosis de FAV.',
      'CKD-MBD: hiperfosfatemia por retención + déficit de 1-alfa-hidroxilasa (falta de calcitriol) = hiperparatiroidismo secundario.',
      'Estudio inicial de PTH elevada en ERC estadios 3–4: medir niveles plasmáticos de 25-OH-vitamina D y suplementar con colecalciferol si está baja.',
      'Los quelantes de fósforo (Carbonato de Calcio, Sevelamer) deben tomarse estrictamente con las comidas para unirse al fósforo de la dieta en el tubo digestivo.',
    ],
    questions: [
      {
        stem: 'Hombre de 64 años con antecedente de enfermedad renal crónica con clearence de creatinina estimado en 40 mL/min se realiza exámenes de control que muestran: Calcio sérico 8.5 mg/dL, Fósforo 4.0 mg/dL, PTH intacta 125 pg/mL (valor normal < 55 pg/mL) y TSH normal. ¿Cuál es el examen de elección para proseguir el estudio y manejo de este trastorno mineral?',
        options: [
          { id: 'A', text: 'Niveles plasmáticos de 25-OH-vitamina D' },
          { id: 'B', text: 'Niveles de tiroxina libre (T4 libre)' },
          { id: 'C', text: 'Calciuria cuantitativa de 24 horas' },
          { id: 'D', text: 'Magnesemia sérica' },
          { id: 'E', text: 'Bicarbonato plasmático y gases venosos' },
        ],
        correcta: 'A',
        explicacion: 'El paciente presenta un hiperparatiroidismo secundario precoz a su insuficiencia renal moderada (estadio G3b). De acuerdo con las guías internacionales KDIGO para el manejo del Trastorno Mineral Óseo (CKD-MBD), en pacientes con TFG entre 30 y 60 mL/min que presentan elevación de PTH, la conducta inicial de elección es medir los niveles plasmáticos de 25-hidroxi-vitamina D (calcidiol). Si se documenta déficit o insuficiencia (< 30 ng/mL), debe reponerse con vitamina D nativa (colecalciferol o ergocalciferol) antes de plantear el uso de análogos activos como el calcitriol.',
        recTag: 'EUNACOM Diciembre 2016 · Reconstrucción oficial',
      },
      {
        stem: 'Mujer de 58 años en hemodiálisis crónica presenta anemia con hemoglobina de 8.8 g/dL. Su cinética de hierro revela: Saturación de Transferrina de 14% y Ferritina sérica de 65 ng/mL. ¿Cuál es la conducta inicial correcta antes de titular o iniciar agentes estimulantes de la eritropoyesis (EPO)?',
        options: [
          { id: 'A', text: 'Administrar hierro sacarosa intravenoso hasta alcanzar saturación de transferrina > 20% y ferritina > 200 ng/mL' },
          { id: 'B', text: 'Iniciar dosis plenas de eritropoyetina a 150 UI/kg tres veces por semana en monoterapia' },
          { id: 'C', text: 'Indicar transfusión inmediata de 2 unidades de glóbulos rojos desplasmatizados' },
          { id: 'D', text: 'Realizar mielograma urgente para descartar aplasia medular pura de serie roja' },
          { id: 'E', text: 'Prescribir ácido fólico en megadosis como único tratamiento' },
        ],
        correcta: 'A',
        explicacion: 'En los pacientes con insuficiencia renal crónica en diálisis, la presencia de una saturación de transferrina < 20% y ferritina < 100–200 ng/mL demuestra una ferropenia absoluta concomitante. Administrar eritropoyetina a un paciente ferropénico es un error terapéutico mayor, ya que no habrá sustrato suficiente de hierro para la síntesis de hemoglobina, induciendo resistencia al tratamiento. La conducta prioritaria obligatoria es reponer hierro por vía intravenosa (hierro sacarosa o carboximaltosa) hasta superar las metas mínimas antes o en conjunto con la optimización de la EPO.',
        recTag: 'EUNACOM Julio 2020 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-20', classId: 'nefro-20', tier: 2,
    blockNum: 5, blockName: 'Enfermedad Renal Crónica, Hipertensión Renovascular y Nefropatías Crónicas',
    topicLabel: '5.3', title: 'Hipertensión Secundaria y Estenosis de la Arteria Renal',
    perfilCode: '1.09.1.009', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía GES de Hipertensión Arterial Primaria (excluye cobertura específica de procedimientos endovasculares)',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#09) · EUNACOM Diciembre 2019 (Q#52)',
    frecuencia: 'Alta en EUNACOM · Sospecha clínica (soplo en flanco, alza de creatinina con IECA) y estudio con Eco-Doppler de arterias renales',
    svg: null, algoTitle: 'Algoritmo Diagnóstico de la Hipertensión Renovascular',
    diagram: flow('Algoritmo de Sospecha y Estudio de Estenosis de Arteria Renal (EAR)', [
      { t: 'Sospecha de HTA Renovascular: HTA Severa Refractaria, Joven o Deterioro con IECA', s: 'Presencia de soplo abdominal sisto-diastólico en flanco o asimetría renal en ecografía', type: 'warn' },
      { k: 'split', q: '¿Cuál es el Examen Inicial No Invasivo de Elección?',
        ll: 'ECOGRAFÍA DOPPLER DE ARTERIAS RENALES',
        left: { t: 'Examen Inicial de Elección (Gold Standard No Invasivo)', s: 'Medir velocidad sistólica máxima (> 200 cm/s) e índice reno-aórtico (> 3.5) · No invasivo, sin contraste', type: 'acc' },
        rl: 'PERFIL CLÍNICO DEL PACIENTE',
        right: { t: 'Displasia Fibromuscular vs Ateroesclerosis', s: 'Mujer joven < 30 años (Displasia / Collar de perlas) vs Adulto mayor > 60 años con vasculopatía (Ostium)', type: 'dec' },
      },
    ]),
    contexto: 'La hipertensión arterial secundaria representa aproximadamente el 5 al 10% de todos los casos de hipertensión, pero su identificación es vital porque ofrece la oportunidad de cura quirúrgica o angioplástica. La Estenosis de la Arteria Renal (EAR) es la causa más frecuente de HTA secundaria renovascular curable. El riñón isquémico hiperactiva el sistema renina-angiotensina-aldosterona secretando renina masivamente, lo que genera vasoconstricción sistémica severa y retención de volumen. El uso de IECA/ARA-II en estenosis bilateral desencadena una caída brusca del filtrado glomerular que pone en alerta al clínico.',
    contentSections: [
      {
        subhead: '1. Signos de Alarma y Sospecha Clínica',
        paragraphs: [
          'Debe sospecharse activamente una <strong>Estenosis de la Arteria Renal (HTA Renovascular)</strong> en las siguientes circunstancias clínicas evaluadas en el EUNACOM:',
          '1. Hipertensión arterial de inicio brusco en <strong>pacientes menores de 30 años</strong> (sospecha de Displasia Fibromuscular) o <strong>mayores de 55–60 años</strong> con ateromatosis multivaso periférica o coronaria.',
          '2. <strong>Hipertensión arterial refractaria o resistente</strong> (no controlada a pesar de 3 fármacos antihipertensivos a dosis plenas, incluyendo un diurético).',
          '3. <strong>Soplo abdominal continuo o sisto-diastólico audible en el epigastrio o flancos lumbares</strong> (presente en el 40–50% de los pacientes).',
          '4. <strong>Deterioro agudo e inexplicable de la función renal con elevación de la creatinina sérica > 30% dentro de las primeras dos semanas tras iniciar un IECA o ARA-II</strong> (sello de estenosis bilateral crítica o en riñón único).',
          '5. Episodios recurrentes e inexplicables de <strong>edema agudo pulmonar súbito ("flash pulmonary edema")</strong> con función sistólica ventricular izquierda preservada.',
        ],
      },
      {
        subhead: '2. Displasia Fibromuscular vs Ateroesclerosis',
        paragraphs: [
          '<strong>Displasia Fibromuscular:</strong> Afecta típicamente a <strong>mujeres jóvenes (15 a 35 años)</strong> sin antecedentes cardiovasculares. Es una enfermedad no inflamatoria ni ateroesclerótica de la capa media arterial que compromete los <strong>dos tercios distales de la arteria renal</strong>. En la angiografía muestra el aspecto clásico en <strong>"collar de perlas" o "rosario"</strong>. El tratamiento de elección es la <strong>Angioplastía Renal con Balón simple (sin colocación de stent)</strong>, logrando la curación completa de la hipertensión en más del 70% de los casos.',
          '<strong>Ateroesclerosis Renal:</strong> Afecta a <strong>adultos mayores de 60 años</strong>, predominantemente varones, fumadores, diabéticos o vasculópatas. La placa se ubica en el <strong>ostium (origen aórtico) o tercio proximal</strong> de la arteria renal. El manejo inicial de elección es el <strong>tratamiento médico agresivo</strong> (estatinas, antiagregantes y control estricto de PA); la angioplastía con stent se reserva para casos refractarios, deterioro progresivo de TFG o edema pulmonar recurrente.',
        ],
      },
      {
        subhead: '3. Estrategia Diagnóstica y Estudio de Imagen',
        paragraphs: [
          'El examen diagnóstico inicial de elección es la <strong>Ecografía Doppler de Arterias Renales</strong>: técnica no invasiva, libre de radiación y que no requiere medio de contraste nefrotóxico. Criterios de estenosis hemodinámicamente significativa (> 60% de luz vascular): <strong>Velocidad Sistólica Máxima (VSM) > 180–200 cm/s</strong> y una relación de velocidad sistólica reno-aórtica (RIR) > 3.5.',
          'Si el Doppler es equívoco o positivo y se planifica intervención revascularizadora, se confirma la anatomía con <strong>AngioTAC de arterias renales</strong> (si la función renal lo permite) o <strong>Angiorresonancia magnética con gadolinio</strong>. La <strong>Arteriografía Renal por cateterismo</strong> es el estándar de oro diagnóstico y permite realizar la angioplastía terapéutica en el mismo acto operatorio.',
        ],
      },
    ],
    table: {
      title: 'Comparación: Displasia Fibromuscular vs Ateroesclerosis de Arteria Renal',
      headers: ['Parámetro', 'Displasia Fibromuscular', 'Ateroesclerosis Renal'],
      rows: [
        ['Grupo Etario y Sexo', 'Mujeres jóvenes (15 a 35 años)', 'Varones y mujeres > 55–60 años'],
        ['Factores de Riesgo', 'Sin factores de riesgo cardiovascular clásicos', 'Tabaquismo severo, dislipidemia, diabetes, IAM previo'],
        ['Localización de la Lesión', 'Tercio medio y distal de arteria renal', 'Ostium y tercio proximal inmediato a la aorta'],
        ['Patrón Angiográfico', 'Imagen clásica en "collar de perlas" (string of beads)', 'Estenosis excéntrica u orificial calcificada'],
        ['Procedimiento de Elección', 'Angioplastía percutánea con balón (sin stent)', 'Manejo médico optimizado · Stent vascular solo en criterios selectos'],
      ],
    },
    vignette: 'Mujer de 22 años, sin antecedentes médicos conocidos, consulta a control de salud por cefalea pulsátil holocránea recurrente de 2 meses de evolución. Al examen físico: paciente delgada, PA 175/105 mmHg constatada en ambos brazos, FC 72 lpm. A la auscultación abdominal cuidadosa se pesquisa un soplo sistólico nítido y rudo en el flanco derecho que se prolonga hacia la fosa lumbar. Exámenes: Creatinina 0.8 mg/dL, Potasio 3.3 mEq/L, Bicarbonato 28 mEq/L. No toma anticonceptivos orales.',
    explicacion: 'La presencia de una hipertensión arterial severa en una mujer joven de 22 años sin obesidad ni factores metabólicos, asociada al hallazgo clínico patognomónico de un soplo sistólico en el flanco renal y una hipokalemia limítrofe por hiperaldosteronismo secundario a renina elevada, apunta con certeza a una Hipertensión Renovascular secundaria a Displasia Fibromuscular de la arteria renal derecha. El primer examen de estudio no invasivo de elección es la Ecografía Doppler de arterias renales. Si confirma la estenosis, la paciente es candidata ideal a una angioplastía transluminal percutánea con balón sin prótesis, procedimiento que cura la hipertensión de forma definitiva en la mayoría de estas pacientes jóvenes.',
    keyPoints: [
      'EAR: sospechar en hipertensión en < 30 años o > 55 años, HTA refractaria o elevación de creatinina > 30% con IECA/ARA-II.',
      'Soplo sisto-diastólico en flanco abdominal es un signo físico altamente específico de estenosis de arteria renal.',
      'Displasia fibromuscular: mujer joven (< 30 años), imagen en "collar de perlas" en tercio medio/distal; cura con angioplastía con balón.',
      'Ateroesclerosis renal: adultos mayores (> 60 años), lesión ostial proximal; tratamiento inicial médico intensivo.',
      'Examen de tamizaje no invasivo de primera línea: Ecografía Doppler de arterias renales (VSM > 200 cm/s).',
      'Arteriografía renal es el estándar de oro y permite el tratamiento intervencional endovascular en el mismo procedimiento.',
    ],
    questions: [
      {
        stem: 'Hombre de 18 años consulta por cefalea progresiva de algunas semanas de evolución. Al examen físico destaca una presión arterial de 170/100 mmHg, FC 72 lpm y la presencia de un soplo sistólico continuo en el flanco derecho del abdomen. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Disección aórtica tipo B de Stanford' },
          { id: 'B', text: 'Aneurisma de la aorta abdominal' },
          { id: 'C', text: 'Hipertensión arterial esencial severa' },
          { id: 'D', text: 'Hipertensión renovascular' },
          { id: 'E', text: 'Accidente cerebrovascular isquémico agudo' },
        ],
        correcta: 'D',
        explicacion: 'En un paciente joven de 18 años con hipertensión arterial severa de debut reciente, la coexistencia de un soplo abdominal localizado en el flanco orienta de forma casi patognomónica a una Hipertensión Renovascular secundaria a estenosis de la arteria renal (en este grupo etario, producida característicamente por displasia fibromuscular de la arteria renal). El soplo es generado por el flujo turbulento de sangre a través del segmento arterial estenosado.',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 65 años, con antecedente de hipertensión arterial diagnosticada hace un año en tratamiento combinado con Atenolol y Enalapril a dosis plenas, refiere múltiples registros domiciliarios con valores superiores a 160/100 mmHg. En sus exámenes de sangre destaca: Creatinina 1.2 mg/dL, Potasio 3.4 mEq/L, Na 142 mEq/L y TSH normal. ¿Con qué examen se debe proseguir su estudio diagnóstico?',
        options: [
          { id: 'A', text: 'Cortisol libre urinario y prueba de dexametasona' },
          { id: 'B', text: 'Monitoreo ambulatorio de presión arterial de 24 horas (MAPA)' },
          { id: 'C', text: 'Niveles de calcemia y paratohormona intacta' },
          { id: 'D', text: 'Metanefrinas y normetanefrinas fraccionadas en orina' },
          { id: 'E', text: 'Ecografía Doppler de arterias renales' },
        ],
        correcta: 'E',
        explicacion: 'El paciente presenta una hipertensión arterial resistente o de difícil control iniciada después de los 60 años, acompañada de potasio en el límite inferior (3.4 mEq/L) que sugiere activación del eje renina-angiotensina-aldosterona. Este perfil clínico en el adulto mayor genera una alta sospecha de hipertensión renovascular secundaria a estenosis ateroesclerótica de arteria renal. El examen no invasivo de primera línea para confirmar o descartar esta sospecha es la Ecografía Doppler de arterias renales.',
        recTag: 'EUNACOM Diciembre 2019 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟡 TIER 2 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-21', classId: 'nefro-21', tier: 2,
    blockNum: 5, blockName: 'Enfermedad Renal Crónica, Hipertensión Renovascular y Nefropatías Crónicas',
    topicLabel: '5.4', title: 'Pielonefritis Aguda e Infecciones Urinarias Altas en el Adulto',
    perfilCode: '1.09.2.011, 1.09.1.016', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#64) · EUNACOM Diciembre 2021 (Q#10)',
    frecuencia: 'Alta en EUNACOM · Criterios de hospitalización en embarazo, urocultivo obligatorio y selección de antibióticos parenterales',
    svg: null, algoTitle: 'Algoritmo de Diagnóstico y Tratamiento de la Pielonefritis Aguda',
    diagram: flow('Enfrentamiento de la Pielonefritis Aguda (PNA) en el Adulto', [
      { t: 'Fiebre (> 38.5°C) + Puñopercusión Lumbar Positiva + Síntomas Urinarios Bajos', s: 'Toma obligatoria de Urocultivo con antibiograma y sedimento de orina previo a antibióticos', type: 'warn' },
      { k: 'split', q: '¿Presenta Criterios de Hospitalización (Embarazo, Sepsis, Vómitos)?',
        ll: 'SÍ: PNA COMPLICADA / CRITERIOS DE HOSPITALIZACIÓN',
        left: { t: 'Hospitalización Inmediata + Cefalosporinas Parenterales', s: 'Embarazo (Ceftriaxona 1 g IV/día obligatorio) · Sepsis, mala tolerancia oral o comorbilidad descompensada', type: 'acc' },
        rl: 'NO: PNA NO COMPLICADA AMBULATORIA',
        right: { t: 'Tratamiento Antibiótico Oral Ambulatorio', s: 'Ciprofloxacino 500 mg c/12h x 7 días o Cefalosporina 3a gen x 10–14 días con control clínico estricto en 48 h', type: 'dec' },
      },
    ]),
    contexto: 'La Pielonefritis Aguda (PNA) es una infección bacteriana invasiva del parénquima renal y del sistema pielocalicial que asciende desde la vejiga. A diferencia de la cistitis aguda (infección urinaria baja confinada a la mucosa vesical que nunca produce fiebre ni compromiso sistémico), la PNA cursa con bacteriemia hasta en el 20–30% de los casos y conlleva riesgo de sepsis severa, shock séptico, absceso renal y necrosis papilar. En el EUNACOM se evalúa de forma reiterada el manejo específico de la PNA en el embarazo y la elección de esquemas empíricos.',
    contentSections: [
      {
        subhead: '1. Cuadro Clínico y Diagnóstico de Laboratorio',
        paragraphs: [
          'La tríada clásica de <strong>Pielonefritis Aguda</strong> comprende: (1) <strong>Fiebre alta (> 38.5°C) con calofríos intensos</strong>; (2) <strong>Dolor lumbar unilateral o en flanco con signo de Giordano positivo (puñopercusión lumbar dolorosa)</strong>; y (3) Grados variables de síntomas irritativos miccionales (disuria, polaquiuria, urgencia miccional), aunque pueden estar ausentes en ancianos.',
          '<strong>Sedimento de orina:</strong> Revela <strong>leucocituria significativa (> 10 leucocitos por campo o piuria franca), bacteriuria abundante, microhematuria</strong> y el hallazgo patognomónico de <strong>cilindros leucocitarios</strong> (que certifican el origen parenquimatoso renal de la infección).',
          '<strong>Urocultivo:</strong> <strong>ES ABSOLUTAMENTE OBLIGATORIO</strong> tomar muestra para urocultivo y antibiograma previo al inicio de cualquier antibiótico para guiar el desescalamiento terapéutico según sensibilidades locales. El patógeno etiológico principal es <strong>Escherichia coli (75 a 85% de los casos)</strong>, seguido por <em>Klebsiella pneumoniae</em> y <em>Proteus mirabilis</em>.',
        ],
      },
      {
        subhead: '2. Criterios de Hospitalización Inmediata',
        paragraphs: [
          'Debe indicarse la <strong>hospitalización obligatoria para antibioticoterapia intravenosa</strong> en presencia de cualquiera de los siguientes criterios:',
          '1. <strong>Embarazo en cualquier trimestre de gestación</strong> (la PNA aumenta drásticamente el riesgo de parto prematuro, sepsis y shock séptico).',
          '2. <strong>Intolerancia a la vía oral</strong> (náuseas y vómitos incoercibles que impiden la absorción de fármacos orales) o deshidratación clínica.',
          '3. <strong>Inestabilidad hemodinámica, criterios de sepsis o shock séptico</strong> (hipotensión, taquicardia, compromiso de conciencia).',
          '4. <strong>Falla renal aguda o sospecha de uropatía obstructiva</strong> (litiasis urinaria con infección concomitante: verdadera emergencia urológica).',
          '5. <strong>Comorbilidades descompensadas o inmunosupresión</strong> (diabetes mellitus descompensada, neutropenia, trasplante renal, uso crónico de corticoides).',
        ],
      },
      {
        subhead: '3. Esquemas Antimicrobianos de Elección',
        paragraphs: [
          '<strong>Manejo Ambulatorio (PNA no complicada sin criterios de gravedad):</strong> El esquema clásico es <strong>Ciprofloxacino oral 500 mg cada 12 horas durante 7 días</strong> (si la resistencia local de *E. coli* es < 10–15%) o <strong>Cefadroxilo / Cefixima oral durante 10 a 14 días</strong>. Se debe controlar clínicamente al paciente a las 48 a 72 horas.',
          '<strong>Manejo Hospitalizado (PNA complicada / Sepsis):</strong> El régimen parenteral de primera línea en Chile es una cefalosporina de tercera generación: <strong>Ceftriaxona 1 a 2 g IV cada 24 horas</strong> o <strong>Cefotaximo 1 a 2 g IV cada 8 horas</strong>. En caso de sospecha de gérmenes productores de betalactamasas de espectro extendido (BLEE) o shock séptico, se escala a Carbapenémicos (Ertapenem 1 g/día o Meropenem 1 g c/8h).',
          '<strong>Pielonefritis en el Embarazo:</strong> <strong>Hospitalización mandatoria e inicio inmediato de Ceftriaxona 1 g intravenoso al día</strong> (o Ampicilina/Sulbactam o Cefazolina según antibiograma). Las fluoroquinolonas (ciprofloxacino) están formalmente contraindicadas en el embarazo por toxicidad sobre el cartílago de crecimiento fetal.',
        ],
      },
    ],
    table: {
      title: 'Esquemas Terapéuticos Empíricos en Pielonefritis Aguda',
      headers: ['Población / Escenario', 'Vía de Manejo', 'Antimicrobiano de Elección', 'Duración del Tratamiento'],
      rows: [
        ['PNA No Complicada (Adulto sano)', 'Ambulatoria oral', 'Ciprofloxacino 500 mg c/12h (o Cefixima 400 mg/día)', '7 días (ciprofloxacino) a 10–14 días (cefalosporinas)'],
        ['PNA Hospitalizada (Severa / Vómitos)', 'Intravenosa', 'Ceftriaxona 1–2 g/día IV o Cefotaximo 1–2 g c/8h IV', '10 a 14 días (traslape a vía oral tras 48 h afebril)'],
        ['PNA en la Embarazada', 'Hospitalizada obligatoria', 'Ceftriaxona 1 g/día IV (Ciprofloxacino contraindicado)', '10 a 14 días + Urocultivo de control a los 7 días post'],
        ['PNA con Sospecha de BLEE / UPC', 'Intravenosa', 'Ertapenem 1 g/día IV o Meropenem 1 g c/8h IV', '14 días guiado por antibiograma'],
      ],
    },
    vignette: 'Mujer de 28 años, cursando un embarazo de 18 semanas de gestación por amenorrea, sin antecedentes médicos relevantes. Consulta en el servicio de urgencia por cuadro de 24 horas de fiebre alta con calofríos (temperatura axilar medida en 39.0°C), náuseas, dos vómitos alimentarios, dolor lumbar derecho de intensidad progresiva y disuria ardorosa. Al examen físico: PA 115/70 mmHg, FC 98 lpm, abdomen grávido concordante con edad gestacional, útero no doloroso, puñopercusión lumbar derecha francamente dolorosa y positiva (signo de Giordano +). La monitorización fetal constata latidos cardiofetales normales a 145 lpm. Sedimento de orina de urgencia: leucocitos incontables por campo, abundantes bacterias, nitritos positivos y microhematuria. Se toma urocultivo.',
    explicacion: 'La paciente presenta una Pielonefritis Aguda (PNA) franca cursando el segundo trimestre de embarazo. En el embarazo, las modificaciones anatómicas y fisiológicas (dilatación de uréteres por efecto miorelajante de la progesterona y compresión mecánica uterina) predisponen a bacteriemia grave y parto prematuro. La presencia de PNA en cualquier semana de gestación constituye una indicación absoluta de hospitalización en sala gineco-obstétrica para hidratación y antibioticoterapia intravenosa inmediata con Ceftriaxona parenteral (1 g/día IV). Los antibióticos orales ambulatorios y las fluoroquinolonas están totalmente contraindicados en este escenario.',
    keyPoints: [
      'PNA se define por fiebre > 38.5°C, dolor lumbar con puñopercusión positiva y síntomas urinarios.',
      'Sedimento urinario patognomónico: cilindros leucocitarios y piuria franca.',
      'Urocultivo con antibiograma es obligatorio en toda sospecha de PNA previo al inicio del antibiótico.',
      'Patógeno causal más frecuente: Escherichia coli (75–85%), seguido de Klebsiella pneumoniae y Proteus mirabilis.',
      'En el embarazo, TODA pielonefritis aguda requiere HOSPITALIZACIÓN OBLIGATORIA y Ceftriaxona intravenosa.',
      'Las fluoroquinolonas (ciprofloxacino) están estrictamente contraindicadas durante todo el embarazo.',
      'Si el paciente con PNA persiste febril tras 48 a 72 horas de antibióticos adecuados, solicitar Ecografía o TAC renal para descartar absceso renal o litiasis obstructiva.',
    ],
    questions: [
      {
        stem: 'Mujer de 28 años, cursando un embarazo de 18 semanas, consulta por fiebre de 38.9°C, calofríos, náuseas, dolor lumbar derecho intenso y disuria. Al examen físico se constata puñopercusión positiva a derecha. El sedimento urinario muestra más de 50 leucocitos por campo, bacterias abundantes y nitritos positivos. El bienestar fetal está conservado. ¿Cuál es el tratamiento y la conducta más adecuada?',
        options: [
          { id: 'A', text: 'Indicar ciprofloxacino oral 500 mg cada 12 horas ambulatorio' },
          { id: 'B', text: 'Prescribir nitrofurantoína 100 mg cada 8 horas vía oral por 7 días' },
          { id: 'C', text: 'Tratamiento ambulatorio con amoxicilina más ácido clavulánico' },
          { id: 'D', text: 'Hospitalización inmediata e inicio de ceftriaxona intravenosa' },
          { id: 'E', text: 'Reposo en domicilio y esperar resultado del urocultivo en 48 horas' },
        ],
        correcta: 'D',
        explicacion: 'En toda mujer embarazada con diagnóstico de Pielonefritis Aguda, la conducta médica mandataria es la hospitalización obligatoria y la administración parenteral de antibióticos de amplio espectro seguros para el feto. El fármaco de primera línea de elección en Chile es la Ceftriaxona intravenosa (1 g al día). La nitrofurantoína no penetra en el tejido renal y solo sirve para cistitis baja, mientras que el ciprofloxacino está contraindicado en la gestación por su potencial daño en los cartílagos fetales.',
        recTag: 'EUNACOM Julio 2018 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 54 años con PNA izquierda confirmada se encuentra hospitalizado recibiendo ceftriaxona 1 g IV cada 24 horas desde hace 72 horas. Sin embargo, persiste con picos febriles diarios de hasta 39.2°C y dolor lumbar sordo en aumento. El laboratorio muestra leucocitosis de 18.000/uL y PCR en ascenso. El urocultivo inicial aisló E. coli multisensible a cefalosporinas. ¿Cuál es la conducta diagnóstica inmediata de elección?',
        options: [
          { id: 'A', text: 'Solicitar Tomografía Axial Computarizada (TAC) de abdomen y pelvis con contraste' },
          { id: 'B', text: 'Cambiar de inmediato a vancomicina intravenosa en monoterapia' },
          { id: 'C', text: 'Suspender todo antibiótico y esperar 48 horas para tomar nuevos hemocultivos' },
          { id: 'D', text: 'Dar de alta con ciprofloxacino oral por 21 días' },
          { id: 'E', text: 'Realizar punción lumbar diagnóstica' },
        ],
        correcta: 'A',
        explicacion: 'Cuando un paciente con pielonefritis aguda no presenta defervescencia térmica y mejoría clínica tras 48 a 72 horas de tratamiento antibiótico empírico adecuado (al cual el germen es sensible in vitro), la regla clínica exige descartar una complicación supurativa local o una obstrucción anatómica. El examen de elección es la Tomografía Computarizada (TAC) con contraste de abdomen y pelvis para pesquisar abscesos renales parenquimatosos, abscesos perinefríticos, nefritis bacteriana focal aguda (nefronía) o litiasis obstructiva que requiera drenaje percutáneo o descompresión urológica de urgencia.',
        recTag: 'EUNACOM Diciembre 2021 · Reconstrucción oficial',
      },
    ],
  },

  /* ───────────────────────── 🟢 TIER 1 (2 PÁGINAS) ───────────────────────── */
  {
    id: 'nefro-22', classId: 'nefro-22', tier: 1,
    blockNum: 5, blockName: 'Enfermedad Renal Crónica, Hipertensión Renovascular y Nefropatías Crónicas',
    topicLabel: '5.5', title: 'Ajuste de Fármacos en Insuficiencia Renal y Nefrotoxicidad Prevenible',
    perfilCode: '1.09.1.014, 1.09.2.008, 1.09.4.016', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#40) · EUNACOM Diciembre 2020 (Q#88)',
    frecuencia: 'Media en EUNACOM · Límites de uso de Metformina en TFG < 30 mL/min y prevención de nefropatía por medio de contraste',
    svg: null, algoTitle: 'Algoritmo de Prevención de Nefrotoxicidad y Ajuste Fármacos',
    diagram: flow('Protocolo de Seguridad: Ajuste Farmacológico y Prevención de Nefrotoxicidad', [
      { t: 'Evaluación de Función Renal Basal (TFGe por CKD-EPI)', s: 'Calcular depuración renal antes de prescribir fármacos con excreción o toxicidad tubular', type: 'warn' },
      { k: 'split', q: '¿Uso de Metformina en Paciente Diabético con ERC?',
        ll: 'TFG < 30 mL/min (Contraindicación Absoluta)',
        left: { t: 'SUSPENDER METFORMINA DE INMEDIATO', s: 'Riesgo letal de Acidosis Láctica grave por acumulación de biguanidas · Reemplazar por Insulina / iDPP-4', type: 'acc' },
        rl: 'TFG 30 a 44 mL/min (Uso Precautorio)',
        right: { t: 'Reducir Dosis Máxima al 50% (máx 1.000 mg/día)', s: 'Monitorización seriada de TFG cada 3 meses · Suspender transitoriamente en deshidratación', type: 'dec' },
      },
    ]),
    contexto: 'La iatrogenia farmacológica es una de las causas más frecuentes y evitables de deterioro renal agudo y sobreagregado en pacientes con falla renal preexistente. El riñón participa en la excreción activa y filtración de múltiples fármacos hidrofílicos, así como en su degradación metabólica. Conocer los umbrales críticos de filtrado glomerular para la suspensión de antidiabéticos orales (como la metformina), la proscripción estricta de AINEs y las medidas profilácticas en estudios con medios de contraste yodados previene ingresos a unidades de cuidados intensivos y diálisis.',
    contentSections: [
      {
        subhead: '1. Antidiabéticos Orales y Límite de la Metformina',
        paragraphs: [
          'La <strong>Metformina</strong> es el fármaco de primera línea en Diabetes Mellitus tipo 2 pero se elimina sin cambios por secreción y filtración renal. Al acumularse en falla renal severa, inhibe el complejo I mitocondrial hepático bloqueando la gluconeogénesis a partir de lactato, lo que precipita una <strong>Acidosis Láctica severa asociada a Metformina (MALA)</strong> con mortalidad superior al 40%.',
          'Las reglas KDIGO y ministeriales son estrictas: (1) Si la <strong>TFGe está entre 45 y 59 mL/min</strong>: mantener dosis con vigilancia semestral; (2) Si la <strong>TFGe está entre 30 y 44 mL/min</strong>: <strong>reducir la dosis máxima total al 50% (máximo 1.000 mg/día)</strong> y no iniciar en pacientes vírgenes de tratamiento; y (3) Si la <strong>TFGe es < 30 mL/min (o creatinina > 2.0 en mujeres o > 2.5 en hombres): CONTRAINDICACIÓN ABSOLUTA, SUSPENDER DE INMEDIATO</strong>.',
        ],
      },
      {
        subhead: '2. Prevención de la Nefropatía por Medios de Contraste Yodados (NIC)',
        paragraphs: [
          'La <strong>Nefropatía Inducida por Contraste (NIC)</strong> se define como el aumento de la creatinina sérica en ≥ 0.3 mg/dL o ≥ 50% del valor basal dentro de las 48 a 72 horas posteriores a la administración intravascular de contraste radiológico yodado en ausencia de otra etiología.',
          'Factores de riesgo mayores: ERC previa con TFG < 30–45 mL/min, nefropatía diabética, deshidratación e insuficiencia cardíaca.',
          '<strong>Protocolo de Prevención de Primera Línea:</strong> La única medida profiláctica demostrada con alta evidencia es la <strong>Hidratación Intravenosa con Cristaloides Isotónicos (Suero Fisiológico al 0.9% o Bicarbonato de sodio isotónico) a razón de 1.0 a 1.5 mL/kg/hora durante 6 a 12 horas antes y 6 a 12 horas después del procedimiento</strong>; utilizar medios de contraste iso-osmolares o de baja osmolaridad a la menor dosis posible; y suspender temporalmente fármacos nefrotóxicos concomitantes (AINEs e IECA/ARA-II) 48 horas antes.',
        ],
      },
    ],
    table: {
      title: 'Ajuste de Fármacos Seleccionados en Insuficiencia Renal',
      headers: ['Fármaco / Grupo', 'Umbral de TFG Crítico', 'Riesgo / Toxicidad', 'Conducta Recomendada'],
      rows: [
        ['Metformina', 'TFGe < 30 mL/min', 'Acidosis Láctica grave (MALA)', 'Contraindicación absoluta; suspender de inmediato'],
        ['AINEs (Ibuprofeno, Ketorolaco)', 'Cualquier grado de ERC o IRA', 'Necrosis tubular isquémica e hiperkalemia', 'Contraindicación formal en pacientes con daño renal'],
        ['Aminoglucósidos (Amikacina)', 'TFGe < 60 mL/min', 'Necrosis tubular aguda tóxica y ototoxicidad', 'Espaciar intervalos según clearence y niveles plasmáticos'],
        ['Enoxaparina (HBPM)', 'TFGe < 30 mL/min', 'Acumulación y hemorragia mayor', 'Reducir dosis al 50% o reemplazar por heparina no fraccionada'],
      ],
    },
    vignette: 'Mujer de 72 años con diabetes mellitus tipo 2 e hipertensión arterial en tratamiento con Metformina 850 mg cada 8 horas, Losartán 50 mg cada 12 horas e Hidroclorotiazida 25 mg/día. Se realiza exámenes de control que muestran: Creatinina plasmática 2.4 mg/dL (basal de hace un año en 1.1 mg/dL) con Tasa de Filtración Glomerular estimada por CKD-EPI en 22 mL/min/1.73m². El bicarbonato plasmático es de 19 mEq/L y el potasio sérico es de 5.2 mEq/L.',
    explicacion: 'La paciente presenta un deterioro severo de la función renal con una TFG calculada de 22 mL/min (estadio G4). Con este nivel de depuración renal, la conducta farmacológica inmediata e impostergable es SUSPENDER LA METFORMINA debido al riesgo letal de acumulación sistémica y desarrollo de acidosis láctica grave (MALA). El control glucémico deberá ajustarse con inhibidores de DPP-4 de ajuste renal (o linagliptina que no requiere ajuste) o insulina humana.',
    keyPoints: [
      'Metformina está absolutamente contraindicada con TFG < 30 mL/min por riesgo de acidosis láctica severa.',
      'Con TFG entre 30 y 44 mL/min, la dosis de metformina debe reducirse a la mitad (máximo 1.000 mg/día).',
      'Los AINEs están contraindicados en pacientes con ERC por inhibir la síntesis de prostaglandinas vasodilatadoras aferentes.',
      'Prevención de nefropatía por contraste: hidratación con Suero Fisiológico 0.9% intravenoso antes y después del examen.',
      'La N-acetilcisteína no ha demostrado beneficio superior a la hidratación isotónica en la prevención de nefropatía por contraste.',
      'Enoxaparina (HBPM) se acumula en TFG < 30 mL/min requiriendo reducir la dosis al 50% o cambiar a heparina no fraccionada.',
    ],
    questions: [
      {
        stem: 'Mujer de 70 años con diabetes mellitus en tratamiento con metformina 850 mg cada 12 horas acude a control. Sus exámenes revelan creatinina de 2.2 mg/dL con filtrado glomerular estimado en 25 mL/min/1.73m². La paciente está asintomática. ¿Cuál es la conducta farmacológica correcta respecto al manejo de su diabetes?',
        options: [
          { id: 'A', text: 'Suspender la metformina de inmediato e indicar una alternativa terapéutica segura' },
          { id: 'B', text: 'Aumentar la metformina a 850 mg cada 8 horas para compensar la menor eliminación' },
          { id: 'C', text: 'Mantener la metformina en la misma dosis y asociar hidroclorotiazida' },
          { id: 'D', text: 'Agregar glibenclamida a dosis plenas' },
          { id: 'E', text: 'Suspender todos los fármacos y dejarla únicamente con dieta' },
        ],
        correcta: 'A',
        explicacion: 'La metformina se elimina principalmente por filtración y secreción tubular renal activa. Cuando la tasa de filtración glomerular disminuye por debajo de 30 mL/min/1.73m² (como en este caso, con 25 mL/min), el fármaco se acumula progresivamente en los tejidos y puede inhibir de forma crítica la respiración mitocondrial hepática, desencadenando una acidosis láctica severa asociada a metformina (MALA), complicación con una letalidad superior al 40%. La conducta obligatoria es suspender la metformina de inmediato y sustituirla por fármacos seguros para este nivel de función renal (como insulina o inhibidores de DPP-4 ajustados).',
        recTag: 'EUNACOM Julio 2017 · Reconstrucción oficial',
      },
      {
        stem: 'Hombre de 68 años con antecedente de enfermedad renal crónica estadio 3b (TFG 35 mL/min) debe someterse a una tomografía computarizada de tórax con contraste yodado para etapificación oncológica. ¿Cuál es la medida preventiva de primera línea más efectiva para reducir el riesgo de nefropatía inducida por contraste?',
        options: [
          { id: 'A', text: 'Hidratación intravenosa con cristaloides isotónicos (suero fisiológico al 0.9%) antes y después del examen' },
          { id: 'B', text: 'Administración de furosemida en bolo antes del medio de contraste' },
          { id: 'C', text: 'Hemodiálisis profiláctica inmediatamente después del procedimiento' },
          { id: 'D', text: 'Indicar manitol al 20% en infusión continua' },
          { id: 'E', text: 'Administración de prednisona oral 50 mg 12 horas antes' },
        ],
        correcta: 'A',
        explicacion: 'La hidratación intravenosa con soluciones cristaloides isotónicas (Suero Fisiológico al 0.9% o solución de bicarbonato isotónico) administrada a 1–1.5 mL/kg/h durante 6 a 12 horas antes y 6 a 12 horas después del procedimiento es la única intervención profiláctica que ha demostrado sólidamente reducir la incidencia de nefropatía inducida por contraste. La hidratación expande el volumen intravascular, promueve la diuresis y diluye la concentración del medio de contraste en los túbulos renales, disminuyendo la vasoconstricción medular hipóxica y la toxicidad epitelial tubular directa. El uso de diuréticos (furosemida o manitol) está contraindicado porque depleta el volumen y agrava la isquemia renal.',
        recTag: 'EUNACOM Diciembre 2020 · Reconstrucción oficial',
      },
    ],
  },
];

module.exports = { bloque5 };
