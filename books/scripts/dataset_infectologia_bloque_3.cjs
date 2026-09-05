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

const bloque3 = [
  {
    id: 'inf-09',
    classId: 'infecto-09',
    tier: 2,
    blockNum: 3,
    blockName: 'Infecciones Crónicas, Retrovirales y Granulomatosas',
    topicLabel: '3.1',
    title: 'Infección por VIH: Diagnóstico, Etapificación y Terapia Antirretroviral (TARV GES)',
    perfilCode: '1.04.1.014',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 18): Síndrome de Inmunodeficiencia Adquirida (VIH/SIDA)',
    reconstrucciones: 'EUNACOM 2024 (Q#18) · EUNACOM 2023 (Q#55) · EUNACOM 2021 (Q#40)',
    frecuencia: 'Máxima rentabilidad · algoritmo legal de confirmación ISP y triterapia con inhibidor de integrasa',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico Oficial del VIH en Chile (Norma MINSAL 2024)',
    diagram: flow('Algoritmo Diagnóstico y Terapéutico de VIH en Chile', [
      { t: 'Sospecha o Tamizaje con Consentimiento Informado (Ley 19.779)', s: 'Test rápido visual (sangre/saliva) o ELISA 4ª gen (Ag p24 + Ac anti-VIH)' },
      { k: 'split', q: '¿Resultado del Tamizaje Inicial?', s: 'Toda prueba reactiva local es preliminar; requiere confirmación oficial', ll: 'reactivo (preliminar)', rl: 'no reactivo (negativo)',
        left: { t: '2ª Muestra Venosa al ISP de Chile', s: 'Confirmación legal exclusiva por ISP · Activa GES N° 18 en < 7 días', type: 'warn' },
        right: { t: 'Paciente No Infectado', s: 'Consejería preventiva · Repetir en 3 meses si periodo de ventana', type: 'acc' } },
      { t: 'Inicio Inmediato de TARV: Tenofovir + Lamivudina + Dolutegravir', s: 'Test & Treat universal independiente de CD4 · Indetectable = Intransmisible (I=I)', type: 'acc', al: 'esquema ges', from: 'left' },
    ]),
    contexto: 'El VIH es una de las áreas más reglamentadas del EUNACOM. Todo médico debe dominar la Ley del SIDA (consentimiento informado, confirmación exclusiva por el ISP), la estrategia Test & Treat universal independiente del recuento de CD4 y el régimen preferente GES de una pastilla al día con inhibidor de integrasa.',
    contentSections: [
      {
        subhead: '1. Diagnóstico Nacional según Ley 19.779',
        paragraphs: [
          'Por ley chilena, el test de VIH es <strong>voluntario, confidencial y exige consentimiento informado firmado</strong>.',
          '<strong>Algoritmo en dos etapas:</strong> 1) Tamizaje local mediante ELISA de 4ª generación (Ag p24 + Ac) o test rápido; 2) <strong>Confirmación obligatoria por el ISP</strong>: ante resultado reactivo, se envía una segunda muestra venosa al Instituto de Salud Pública (único organismo legalmente facultado). Nunca se comunica positividad sin confirmación del ISP.',
        ],
      },
      {
        subhead: '2. Terapia Antirretroviral (TARV) GES 2026',
        paragraphs: [
          'Todo caso confirmado ingresa a la <strong>Garantía GES N° 18</strong> con cobertura gratuita integral.',
          '<strong>Estrategia Test & Treat:</strong> la TARV se inicia de inmediato a todo paciente confirmado, sin importar los CD4 ni la carga viral. Esquema de 1ª línea co-formulado en 1 pastilla al día: <strong>Tenofovir (TDF) + Lamivudina (3TC) + Dolutegravir (DTG)</strong>. El dolutegravir ofrece alta barrera genética y rápida supresión viral.',
        ],
      },
      {
        subhead: '3. Etapificación y Concepto I = I',
        paragraphs: [
          'Se clasifica según recuento de CD4 (≥ 500, 200–499, &lt; 200/mm³) y clínica (A: asintomático; B: sintomático no SIDA como muguet; C: SIDA). <strong>Etapa SIDA:</strong> CD4 &lt; 200/mm³ o presencia de patología marcadora (Pneumocystis, Criptococo, TBC extrapulmonar, Sarcoma de Kaposi).',
          '<strong>Indetectable = Intransmisible (I = I):</strong> carga viral &lt; 50 copias/mL por &gt; 6 meses anula el riesgo de transmisión sexual.',
        ],
      },
    ],
    table: {
      title: 'Etapificación Clínica y de Laboratorio del VIH (CDC)',
      headers: ['Recuento Linfocitos CD4+', 'Categoría A (Asintomático / SRA)', 'Categoría B (Sintomático no A ni C)', 'Categoría C (Condición SIDA)'],
      rows: [
        ['≥ 500 células/mm³ (≥ 26%)', 'Etapa A1', 'Etapa B1', 'Etapa C1 (SIDA)'],
        ['200 a 499 células/mm³ (14–25%)', 'Etapa A2', 'Etapa B2', 'Etapa C2 (SIDA)'],
        ['< 200 células/mm³ (< 14%)', 'Etapa A3 (SIDA por CD4)', 'Etapa B3 (SIDA por CD4)', 'Etapa C3 (SIDA clínico y lab)'],
        ['Enfermedades Prototípicas', 'Linfadenopatía persistente, SRA', 'Candidiasis oral (muguet), leucoplasia oral vellosa, herpes zóster recurrente', 'Pneumocystis, Toxoplasmosis cerebral, Criptococo, TBC extrapulmonar, Sarcoma Kaposi'],
      ],
    },
    vignette: 'Hombre de 29 años consulta en APS por astenia y candidiasis orofaríngea (muguet) recurrente. Se realiza test rápido visual para VIH en el CESFAM que resulta reactivo. El paciente se angustia severamente y pregunta si ya tiene SIDA y si debe informar a su familia.',
    explicacion: 'Un test rápido o ELISA reactivo en APS es solo un resultado preliminar. Por la Ley del SIDA chilena, el paciente NO tiene confirmación diagnóstica aún. La conducta médica inmediata consiste en contener al paciente, explicar que el test es presuntivo, tomar una segunda muestra de sangre venosa y remitirla al Instituto de Salud Pública (ISP) para confirmación oficial. Una vez confirmado por el ISP, se activa la Garantía GES N° 18, se solicitan CD4 y Carga Viral basales y se inicia de inmediato el tratamiento antirretroviral triconjugado con Tenofovir + Lamivudina + Dolutegravir.',
    keyPoints: [
      'Ley del SIDA: test de VIH es voluntario, confidencial y requiere consentimiento informado firmado.',
      'El diagnóstico definitivo en Chile lo realiza EXCLUSIVAMENTE el Instituto de Salud Pública (ISP); nunca rotular con un test rápido local.',
      'Estrategia actual: TARV universal e inmediata a todo paciente confirmado, sin importar el nivel de CD4.',
      'Esquema preferente de primera línea en Chile: Tenofovir + Lamivudina + Dolutegravir (TDF/3TC/DTG) en dosis única diaria.',
      'Dolutegravir es un inhibidor de integrasa con alta barrera genética y rápida supresión viral.',
      'Indetectable = Intransmisible (I=I): si la carga viral es < 50 copias/mL por 6 meses continuos, el riesgo de transmisión sexual es cero.',
    ],
    questions: [
      {
        stem: 'Un joven de 24 años se realiza un test rápido visual para VIH en una campaña universitaria, el cual resulta reactivo. ¿Cuál es la conducta médica normativa que se debe seguir en el sistema de salud chileno?',
        options: [
          { id: 'A', text: 'Informar al paciente que tiene infección por VIH confirmada e iniciar de inmediato el tratamiento con antirretrovirales' },
          { id: 'B', text: 'Tomar una segunda muestra de sangre venosa y derivarla al Instituto de Salud Pública (ISP) para confirmación' },
          { id: 'C', text: 'Solicitar carga viral para VIH y dar por confirmado el diagnóstico si esta supera las 1.000 copias/mL' },
          { id: 'D', text: 'Repetir el test rápido visual en 3 meses para descartar el período de ventana' },
          { id: 'E', text: 'Derivar a infectología con diagnóstico de SIDA etapa C3' },
        ],
        correcta: 'B',
        explicacion: 'En Chile, según la Ley 19.779 (Ley del SIDA), ningún examen de tamizaje local (sea test rápido o ELISA de 4ª generación) confiere diagnóstico definitivo. Ante cualquier resultado reactivo, se debe tomar una segunda muestra de sangre y enviarla al ISP para su confirmación oficial mediante Western Blot / Inmunocromatografía. Solo con el informe confirmatorio del ISP se entrega el diagnóstico al paciente y se activa la canasta GES.',
        recTag: 'Banco de Preguntas Oficial · Infección por VIH',
      },
      {
        stem: '¿Cuál es el esquema antirretroviral de primera línea preferente para el inicio de tratamiento en pacientes adultos con diagnóstico confirmado de infección por VIH en Chile según la guía ministerial vigente?',
        options: [
          { id: 'A', text: 'Zidovudina + Lamivudina + Nevirapina' },
          { id: 'B', text: 'Tenofovir disoproxilo + Lamivudina + Dolutegravir' },
          { id: 'C', text: 'Abacavir + Emtricitabina + Lopinavir/Ritonavir' },
          { id: 'D', text: 'Efavirenz + Zidovudina + Atazanavir' },
          { id: 'E', text: 'Tenofovir alafenamida en monoterapia' },
        ],
        correcta: 'B',
        explicacion: 'El esquema preferente de primera línea en las guías clínicas GES del MINSAL es la combinación en tableta única diaria de dos inhibidores de transcriptasa reversa nucleósidos (Tenofovir disoproxil fumarato + Lamivudina) asociados a un inhibidor de integrasa de segunda generación (Dolutegravir: TDF/3TC/DTG). Este esquema reemplazó a los regímenes antiguos basados en Efavirenz (asociados a efectos neuropsiquiátricos) y Zidovudina (asociada a mielotoxicidad y anemia severa).',
        recTag: 'Banco de Preguntas Oficial · Infección por VIH',
      },
    ],
  },
  {
    id: 'inf-10',
    classId: 'infecto-10',
    tier: 3,
    blockNum: 3,
    blockName: 'Infecciones Crónicas, Retrovirales y Granulomatosas',
    topicLabel: '3.2',
    title: 'Infecciones Oportunistas Mayores en VIH/SIDA',
    perfilCode: '1.04.1.019',
    dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 18): Tratamiento de Infecciones Oportunistas en VIH',
    reconstrucciones: 'EUNACOM 2024 (Q#61) · EUNACOM 2022 (Q#15) · EUNACOM 2020 (Q#78)',
    frecuencia: 'Máxima rentabilidad · umbrales de CD4 para profilaxis y tratamiento de Pneumocystis/Toxoplasma',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'Las infecciones oportunistas definen la etapa SIDA y son la principal causa de muerte en personas con diagnóstico tardío de VIH. En el EUNACOM se evalúan los puntos de corte exactos de linfocitos CD4 para iniciar profilaxis primaria (Cotrimoxazol con CD4 < 200 y Azitromicina con CD4 < 50), el manejo de la neumonía por Pneumocystis jirovecii (con uso de corticoides) y el diagnóstico diferencial de masas cerebrales.',
    contentSections: [
      {
        subhead: '1. Neumonía por Pneumocystis jirovecii (CD4 < 200/mm³)',
        paragraphs: [
          'Es la infección oportunista pulmonar definitoria de SIDA más frecuente. <em>P. jirovecii</em> es un hongo atípico que coloniza los alvéolos, produciendo un exudado espumoso intraalveolar rico en fibrina que bloquea el intercambio gaseoso.',
          '<strong>Clínica:</strong> disnea progresiva subaguda de semanas de evolución, tos seca no productiva, fiebre y desaturación marcada durante el ejercicio (desaturación al caminar). Radiografía de tórax: <strong>infiltrados intersticiales bilaterales perihiliares difusos en "alas de mariposa"</strong> con LDH sérica marcadamente elevada (> 400-500 UI/L).',
          '<strong>Tratamiento:</strong> <strong>Cotrimoxazol (Trimetoprim-Sulfametoxazol) EV en dosis altas (TMP 15-20 mg/kg/día dividido cada 6-8 h) por 21 días</strong>.',
          '<strong>Regla de oro con Corticoides:</strong> si presenta insuficiencia respiratoria moderada a severa definida por <strong>PaO2 < 70 mmHg en gases arteriales o Gradiente Alvéolo-Arterial (A-a) ≥ 35 mmHg</strong>, se debe administrar <strong>Prednisona oral o Metilprednisolona EV antes o junto con el Cotrimoxazol</strong> (reduce la inflamación alveolar masiva causada por la lisis del hongo y disminuye la mortalidad a la mitad).',
        ],
      },
      {
        subhead: '2. Toxoplasmosis Cerebral vs Linfoma Primario del SNC (CD4 < 100/mm³)',
        paragraphs: [
          '<em>Toxoplasma gondii</em> se reactiva a partir de quistes tisulares latentes cuando los CD4 caen bajo 100/mm³. Es la <strong>causa número uno de masa cerebral focal con déficit neurológico</strong> en pacientes con VIH.',
          '<strong>Clínica e imágenes:</strong> cefalea, confusión, fiebre y signos de focalidad neurológica motora. La TAC o RMN con contraste revela <strong>múltiples lesiones nodulares redondeadas con realce periférico en anillo</strong>, con marcada predilección por los <strong>ganglios basales</strong> y la unión córtico-subcortical, asociadas a intenso edema perilesional.',
          '<strong>Conducta diagnóstica:</strong> ante paciente con VIH avanzado y lesiones en anillo en neuroimagen, se asume Toxoplasmosis y se inicia <strong>prueba terapéutica empírica por 10 a 14 días con Sulfadiazina + Pirimetamina (o Cotrimoxazol EV a dosis alta) + Ácido Folínico</strong>. Si a los 14 días las lesiones reducen de tamaño, se confirma el diagnóstico. Si no hay mejoría clínica o radiológica, la sospecha pasa a <strong>Linfoma Primario del SNC</strong> (asociado a Virus Epstein-Barr) y se indica biopsia cerebral estereotáxica.',
        ],
      },
      {
        subhead: '3. Meningitis por Criptococo y Profilaxis Primaria por Umbrales CD4',
        paragraphs: [
          '<strong>Meningitis Criptococócica (<em>Cryptococcus neoformans</em> - CD4 < 100/mm³):</strong> levadura encapsulada inhalada que disemina al SNC. Cursa con cefalea insidiosa progresiva, náuseas y fiebre, a menudo con escasa o nula rigidez de nuca. Diagnóstico: LCR con presión de apertura muy elevada (> 30 cm H2O), tinción con <strong>Tinta China (visualiza levaduras con halo refringente por la cápsula)</strong> y detección de <strong>Antígeno Criptococócico (CrAg)</strong> en sangre y LCR. Tratamiento: inducción con <strong>Anfotericina B liposomal + Flucitosina por 2 semanas</strong>, seguido de consolidación y mantención prolongada con Fluconazol oral.',
        ],
      },
    ],
    table: {
      title: 'Profilaxis Primaria de Infecciones Oportunistas en VIH según Umbral de CD4',
      headers: ['Nivel de Linfocitos CD4+', 'Patógeno Blanco', 'Fármaco Profiláctico de Elección', 'Criterio de Suspensión'],
      rows: [
        ['CD4 < 200 células/mm³ (o < 14%)', 'Pneumocystis jirovecii', 'Cotrimoxazol fuerte (TMP/SMX 160/800 mg) 1 comp/día', 'CD4 > 200 por ≥ 3 meses continuos con TARV'],
        ['CD4 < 100 células/mm³ + IgG (+)', 'Toxoplasma gondii', 'Cotrimoxazol fuerte 1 comp/día (misma dosis que PCP)', 'CD4 > 200 por ≥ 3 meses continuos con TARV'],
        ['CD4 < 50 células/mm³', 'Mycobacterium avium complex (MAC)', 'Azitromicina 1.200 mg oral una vez por semana', 'CD4 > 100 por ≥ 3 meses continuos con TARV'],
        ['Cualquier CD4 con PPD ≥ 5 mm', 'Mycobacterium tuberculosis', 'Isoniazida 300 mg/día + Piridoxina por 9 meses', 'Al completar los 9 meses de quimioprofilaxis'],
      ],
    },
    vignette: 'Hombre de 34 años con infección por VIH diagnosticada hace 4 años con abandono de TARV ingresa por tos seca de 3 semanas, disnea progresiva que actualmente se presenta a mínimos esfuerzos y fiebre vespertina. Al examen: T° 38.2 °C, FC 110 lpm, FR 28 rpm, saturación de oxígeno 86% al aire ambiente. Radiografía de tórax muestra infiltrados intersticiales bilaterales de predominio perihiliar y basal en vidrio esmerilado. Gases arteriales con FiO2 21%: pH 7.46, PaO2 54 mmHg, PaCO2 31 mmHg, gradiente alvéolo-arterial 52 mmHg. Recuento de CD4: 68 células/mm³.',
    explicacion: 'El cuadro corresponde a una Neumonía por Pneumocystis jirovecii (PCP) grave en paciente con SIDA (CD4 < 200). La presencia de insuficiencia respiratoria severa con PaO2 < 70 mmHg (54 mmHg) y gradiente alvéolo-arterial ≥ 35 mmHg (52 mmHg) constituye una indicación formal e inmediata de asociar CORTICOIDES SISTÉMICOS (Prednisona oral 40 mg cada 12 h o Metilprednisolona EV) iniciando 15-30 minutos antes o junto con el Cotrimoxazol EV a dosis plenas (TMP 15-20 mg/kg/día). Omitir los corticoides aumenta drásticamente la mortalidad por el deterioro ventilatorio agudo secundario a la lisis masiva del microorganismo.',
    keyPoints: [
      'Pneumocystis jirovecii: tos seca, disnea subaguda, infiltrado intersticial bilateral en alas de mariposa y LDH elevada.',
      'Tratamiento de Pneumocystis: Cotrimoxazol a dosis altas por 21 días.',
      'CORTICOIDES en Pneumocystis: obligatorios si PaO2 < 70 mmHg o Gradiente A-a ≥ 35 mmHg.',
      'Masa cerebral con realce en anillo en paciente VIH: Toxoplasmosis cerebral (ganglios basales); iniciar prueba terapéutica con Sulfadiazina + Pirimetamina.',
      'Meningitis por Cryptococcus neoformans: Tinta China (+) en LCR; tratamiento con Anfotericina B + Flucitosina.',
      'Profilaxis con Cotrimoxazol 1 comp/día: obligatoria en todo paciente con CD4 < 200/mm³ (protege contra Pneumocystis y Toxoplasma).',
    ],
    questions: [
      {
        stem: 'Un paciente de 38 años con VIH y recuento de CD4 de 85 células/mm³ es diagnosticado de neumonía por Pneumocystis jirovecii. Los gases arteriales respirando aire ambiental muestran una PaO2 de 58 mmHg. Además del tratamiento antimicrobiano con Cotrimoxazol a dosis altas, ¿cuál de las siguientes medidas farmacológicas reduce la mortalidad?',
        options: [
          { id: 'A', text: 'Iniciar infusión de N-acetilcisteína como antioxidante alveolar' },
          { id: 'B', text: 'Administrar corticoides sistémicos (Prednisona) antes o junto con el antibiótico' },
          { id: 'C', text: 'Indicar tratamiento concomitante con Azitromicina para cobertura de bacterias atípicas' },
          { id: 'D', text: 'Asociar Ganciclovir por probable coinfección con Citomegalovirus' },
          { id: 'E', text: 'Iniciar diuréticos de asa para reducir el edema alveolar' },
        ],
        correcta: 'B',
        explicacion: 'En la neumonía por Pneumocystis jirovecii, la presencia de una PaO2 < 70 mmHg o un gradiente alvéolo-arterial ≥ 35 mmHg define una forma moderada-severa con alto riesgo de falla ventilatoria. El uso de corticoides sistémicos (Prednisona 40 mg c/12h con pauta descendente por 21 días) reduce a la mitad la necesidad de intubación y la mortalidad intrahospitalaria, al mitigar la respuesta inflamatoria paradójica gatillada por la muerte del hongo.',
        recTag: 'Banco de Preguntas Oficial · Infecciones Oportunistas',
      },
      {
        stem: 'Hombre de 31 años con VIH y abandono de terapia presenta cefalea holocraneana y hemiparesia faciobraquial derecha de 5 días de evolución. Su recuento de CD4 es de 45 células/mm³. La RMN cerebral con contraste muestra tres lesiones nodulares con captación en anillo y edema circundante localizadas en el tálamo y ganglios basales izquierdos. ¿Cuál es la conducta médica inicial más adecuada?',
        options: [
          { id: 'A', text: 'Indicar biopsia estereotáxica urgente de la lesión talámica' },
          { id: 'B', text: 'Iniciar radioterapia holocraneana por sospecha de linfoma primario del SNC' },
          { id: 'C', text: 'Iniciar tratamiento empírico para Toxoplasmosis con Sulfadiazina + Pirimetamina y evaluar respuesta en 10-14 días' },
          { id: 'D', text: 'Administrar anfotericina B liposomal en monoterapia EV' },
          { id: 'E', text: 'Indicar tratamiento antituberculoso con 4 fármacos por 12 meses' },
        ],
        correcta: 'C',
        explicacion: 'En un paciente con SIDA avanzado (CD4 < 100) que se presenta con múltiples lesiones cerebrales con realce en anillo y predilección por los núcleos de la base, la etiología más frecuente con gran diferencia es la Toxoplasmosis cerebral. La conducta recomendada internacionalmente es iniciar tratamiento empírico antitoxoplasma y repetir la neuroimagen en 10 a 14 días. La biopsia cerebral (A) solo se plantea si el paciente empeora clínicamente o no muestra mejoría radiológica tras 2 semanas (sospecha de Linfoma Primario del SNC).',
        recTag: 'Banco de Preguntas Oficial · Infecciones Oportunistas',
      },
    ],
  },
  {
    id: 'inf-11',
    classId: 'infecto-11',
    tier: 2,
    blockNum: 3,
    blockName: 'Infecciones Crónicas, Retrovirales y Granulomatosas',
    topicLabel: '3.3',
    title: 'Tuberculosis: Formas Extrapulmonares, Diagnóstico y Manejo MDR',
    perfilCode: '1.04.1.028',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Programa Nacional de Control y Eliminación de la Tuberculosis (PROCET) MINSAL',
    reconstrucciones: 'EUNACOM 2023 (Q#80) · EUNACOM 2021 (Q#33) · EUNACOM 2019 (Q#95)',
    frecuencia: 'Alta rentabilidad · esquemas MINSAL (2RHEZ/4RH), ADA en líquido pleural y GeneXpert',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'La Tuberculosis (TBC) es una de las prioridades sanitarias de Chile. Aunque la forma pulmonar es la más contagiosa, el EUNACOM evalúa exhaustivamente el diagnóstico de las formas extrapulmonares (pleural con ADA, ganglionar, meníngea y renal), la interpretación del test molecular GeneXpert y la toxicidad de los cuatro fármacos de primera línea.',
    contentSections: [
      {
        subhead: '1. Patogenia y Formas Extrapulmonares Frecuentes',
        paragraphs: [
          '<em>Mycobacterium tuberculosis</em> es un bacilo ácido-alcohol resistente (BAAR) aerobio estricto. Tras la infección primaria, los bacilos pueden diseminar por vía linfohematógena y permanecer latentes durante décadas.',
          'Las formas extrapulmonares representan el 20-25% de los casos en inmunocompetentes y más del 50% en personas con VIH:',
          '• <strong>Pleuresía tuberculosa:</strong> derrame pleural exudativo unilateral, típicamente con recuento linfocítico > 80% y <strong>Adenosina Deaminasa (ADA) marcadamente elevada (> 40 UI/L)</strong>. El ADA > 40 en contexto clínico compatible tiene valor diagnóstico confirmativo.<br>' +
          '• <strong>Tuberculosis ganglionar (Escrófula):</strong> localización extrapulmonar más frecuente. Afecta típicamente a ganglios cervicales anteriores (supraclaviculares/yugulares), formando masas indoloras frías que coalescen y pueden fistulizar a la piel drenando material caseoso.<br>' +
          '• <strong>Meningitis tuberculosa:</strong> presentación subaguda en la base del encéfalo, provocando parálisis de pares craneanos (III y VI) y citoquímico de LCR con hipoglucorraquia severa, hiperproteinorraquia muy alta (> 200-500 mg/dL) y pleocitosis linfocítica.<br>' +
          '• <strong>Mal de Pott (Espondilodiscitis TBC):</strong> compromiso de la columna torácica o lumbar con destrucción del disco intervertebral y cuerpos vertebrales adyacentes, provocando cifosis angular y compresión medular.',
        ],
      },
      {
        subhead: '2. Diagnóstico microbiológico y molecular (GeneXpert)',
        paragraphs: [
          '• <strong>Baciloscopía (Tinción de Ziehl-Neelsen o Fluorescencia con Auramina):</strong> método tradicional para detectar BAAR. Rápido y económico, pero requiere > 5.000 bacilos/mL de muestra.<br>' +
          '• <strong>Cultivo en medio Lowenstein-Jensen (sólido) o MGIT (líquido):</strong> sigue siendo el gold standard diagnóstico y permite realizar antibiograma de susceptibilidad.<br>' +
          '• <strong>GeneXpert MTB/RIF (PCR en tiempo real automatizada):</strong> es la técnica molecular de elección en la Norma Técnica chilena. Detecta el ADN del complejo <em>M. tuberculosis</em> y simultáneamente <strong>determina la mutación del gen rpoB que confiere resistencia a Rifampicina</strong> en menos de 2 horas. Se indica como prueba inicial en sospecha de TBC en niños, personas con VIH, contactos de casos resistentes y personal de salud.',
        ],
      },
      {
        subhead: '3. Esquema Terapéutico Nacional y Toxicidades Farmacológicas',
        paragraphs: [
          'El tratamiento del caso nuevo pan-sensible en Chile consta del esquema diario directamente observado (DOTS):',
          '• <strong>Fase Diaria Inicial (2 meses): 4 fármacos (2 RHZE):</strong> Rifampicina (R) + Isoniazida (H) + Pirazinamida (Z) + Etambutol (E) por 50 dosis (lunes a viernes).<br>' +
          '• <strong>Fase de Continuación (4 meses): 2 fármacos (4 RH):</strong> Rifampicina + Isoniazida por 80 dosis.<br>' +
          '<strong>Toxicidades clásicas de memoria EUNACOM:</strong><br>' +
          '• <strong>Isoniazida (H):</strong> <strong>hepatotoxicidad</strong> y <strong>neuropatía periférica</strong> por depleción de piridoxina (se previene coadministrando Vitamina B6 25-50 mg/día).<br>' +
          '• <strong>Rifampicina (R):</strong> tinción anaranjada/rojiza de orina y lágrimas (benigna), hepatitis colestásica e <strong>inducción potente del citocromo P450</strong> (reduce niveles de anticonceptivos, warfarina, antirretrovirales).<br>' +
          '• <strong>Pirazinamida (Z):</strong> fármaco más hepatotóxico del esquema e <strong>hiperuricemia</strong> (puede gatillar crisis de gota).<br>' +
          '• <strong>Etambutol (E):</strong> <strong>neuritis óptica retrobulbar</strong> dosis-dependiente (pérdida de la agudeza visual y de la discriminación de colores verde-rojo; contraindicado en niños pequeños que no pueden colaborar con el examen oftalmológico).',
        ],
      },
    ],
    table: {
      title: 'Farmacología Antituberculosa de Primera Línea: Mecanismos y Efectos Adversos',
      headers: ['Fármaco', 'Mecanismo de Acción', 'Efecto Adverso Principal', 'Manejo / Prevención'],
      rows: [
        ['Isoniazida (H)', 'Inhibe síntesis de ácido micólico', 'Neuropatía periférica y hepatitis', 'Coadministrar Piridoxina (Vitamina B6)'],
        ['Rifampicina (R)', 'Inhibe ARN polimerasa bacteriana', 'Secreciones naranjas e inducción CYP450', 'Educar al paciente sobre orina naranja'],
        ['Pirazinamida (Z)', 'Disrumpe potencial de membrana', 'Hepatotoxicidad severa e hiperuricemia', 'Monitorizar función hepática y ácido úrico'],
        ['Etambutol (E)', 'Inhibe arabinosil transferasa', 'Neuritis óptica (discromatopsia rojo-verde)', 'Control de agudeza visual; suspender de inmediato'],
      ],
    },
    vignette: 'Hombre de 48 años en tratamiento antituberculoso hace 5 semanas con esquema 2RHZE consulta por visión borrosa bilateral y dificultad para distinguir las luces del semáforo. Al examen oftalmológico se constata agudeza visual 20/60 en ambos ojos y alteración marcada en el test de Ishihara para los colores verde y rojo. El fondo de ojo es normal.',
    explicacion: 'El cuadro corresponde a una Neuritis Óptica Retrobulbar por Etambutol, el efecto adverso clásico y más temido de este fármaco. El etambutol inhibe la arabinosil-transferasa afectando la vaina de mielina del nervio óptico. La conducta médica inmediata e ineludible es la SUSPENSIÓN INMEDIATA Y DEFINITIVA del Etambutol. Si se suspende de forma precoz, la alteración visual suele ser reversible en semanas a meses; de continuar el fármaco, la ceguera puede volverse permanente.',
    keyPoints: [
      'Pleuritis TBC: derrame pleural exudado linfocítico con ADA > 40 UI/L (valor diagnóstico confirmatorio).',
      'GeneXpert: PCR en tiempo real que confirma M. tuberculosis y detecta resistencia a Rifampicina en < 2 horas.',
      'Esquema primario estándar en Chile: 2 meses de 4 fármacos (RHZE) seguidos de 4 meses de 2 fármacos (RH).',
      'Isoniazida causa neuropatía periférica por déficit de vitamina B6; se previene con Piridoxina oral.',
      'Etambutol causa neuritis óptica retrobulbar con pérdida de la visión de colores verde-rojo; exige suspensión inmediata.',
      'Rifampicina tiñe secreciones corporales de color anaranjado y es un potente inductor de enzimas microsomales hepáticas.',
    ],
    questions: [
      {
        stem: 'Un paciente de 35 años consulta por dolor torácico pleurítico y disnea. La toracocentesis diagnóstica obtiene un líquido pleural de aspecto cetrino con recuento de 2.400 leucocitos/mm³, 88% mononucleares, glucosa 48 mg/dL, proteínas 4.8 g/dL y nivel de Adenosina Deaminasa (ADA) de 54 UI/L. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Empiema paraneumónico complicado por Streptococcus pneumoniae' },
          { id: 'B', text: 'Pleuritis tuberculosa' },
          { id: 'C', text: 'Derrame pleural por insuficiencia cardíaca descompensada' },
          { id: 'D', text: 'Mesotelioma pleural maligno' },
          { id: 'E', text: 'Lupus eritematoso sistémico con serositis' },
        ],
        correcta: 'B',
        explicacion: 'Un líquido pleural exudativo con claro predominio mononuclear/linfocítico (> 80%) y una elevación de la enzima Adenosina Deaminasa (ADA) por encima de 40 UI/L tiene una sensibilidad y especificidad superiores al 95% para Pleuritis Tuberculosa en áreas de prevalencia moderada como Chile. El empiema bacteriano (A) cursa con predominio PMN franco y pH < 7.20; la insuficiencia cardíaca (C) produce un trasudado con ADA normal (< 20 UI/L).',
        recTag: 'Banco de Preguntas Oficial · Tuberculosis',
      },
      {
        stem: 'Un paciente de 28 años que inició tratamiento antituberculoso hace 3 semanas consulta alarmado porque su orina y saliva se han tornado de color anaranjado intenso. No refiere molestias urinarias, fiebre ni prurito. Las pruebas hepáticas son normales. ¿Cuál es la conducta médica indicada?',
        options: [
          { id: 'A', text: 'Suspender de inmediato todo el esquema antituberculoso por sospecha de falla hepática' },
          { id: 'B', text: 'Tranquilizar al paciente, explicar que es un efecto farmacológico benigno de la rifampicina y continuar el esquema' },
          { id: 'C', text: 'Reemplazar la rifampicina por levofloxacino' },
          { id: 'D', text: 'Solicitar sedimento de orina y urocultivo por sospecha de hematuria macroscópica' },
          { id: 'E', text: 'Reducir la dosis de isoniazida a la mitad' },
        ],
        correcta: 'B',
        explicacion: 'La Rifampicina y sus metabolitos tienen una coloración rojo-anaranjada intrínseca que tiñe los fluidos corporales (orina, sudor, lágrimas y saliva). Este fenómeno es completamente inocuo, carece de significado patológico y no indica daño hepático ni renal. La conducta es educar y tranquilizar al paciente para asegurar la adherencia al tratamiento, advirtiendo a usuarios de lentes de contacto que estos pueden mancharse de forma permanente.',
        recTag: 'Banco de Preguntas Oficial · Tuberculosis',
      },
    ],
  },
  {
    id: 'inf-12',
    classId: 'infecto-12',
    tier: 2,
    blockNum: 3,
    blockName: 'Infecciones Crónicas, Retrovirales y Granulomatosas',
    topicLabel: '3.4',
    title: 'Infecciones de Transmisión Sexual (ITS) I: Sífilis en Todas sus Etapas',
    perfilCode: '1.04.1.023',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES N° 35): Prevención y Diagnóstico de la Transmisión Vertical de Sífilis',
    reconstrucciones: 'EUNACOM 2024 (Q#05) · EUNACOM 2022 (Q#49) · EUNACOM 2019 (Q#18)',
    frecuencia: 'Máxima rentabilidad · serología VDRL/RPR vs treponémica y dosis de Penicilina Benzatina',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Serológico de Sífilis (Norma Técnica MINSAL)',
    diagram: flow('Algoritmo Diagnóstico y Serológico de Sífilis', [
      { t: 'Sospecha de Sífilis (Úlcera Indolora o Exantema Maculopapular)', s: 'Treponema pallidum: infección bacteriana sistémica de transmisión sexual' },
      { k: 'split', q: '¿Resultado de Pruebas No Treponémica (VDRL) y Treponémica?', s: 'VDRL cuantitativo (actividad) | Treponémica cualitativa (diagnóstica)', ll: 'vdrl reactivo + trepo (+)', rl: 'vdrl (-) o falso positivo',
        left: { t: 'Sífilis Confirmada: Penicilina Benzatina IM', s: 'Precoz (< 1 a): 2.4 MU dosis única · Tardía (> 1 a): 2.4 MU semanal x 3 sem', type: 'crit' },
        right: { t: 'Descartar Sífilis Activa / Falso Positivo', s: 'Si chancro precoz: repetir VDRL en 2–4 sem · Cicatriz serológica no se retrata', type: 'acc' } },
      { t: 'Embarazada Alérgica a Penicilina: Desensibilización Obligatoria en UCI', s: 'Doxiciclina contraindicada en embarazo · Reacción Jarisch-Herxheimer es benigna', type: 'warn', al: 'perla ges', from: 'left' },
    ]),
    contexto: 'La sífilis presenta un incremento epidémico continuo en Chile. En el EUNACOM se evalúa de manera estricta la interpretación serológica (diferencia entre pruebas no treponémicas cuantitativas y pruebas treponémicas cicatriciales), los esquemas exactos de Penicilina Benzatina según el tiempo de evolución y la conducta obligatoria en la embarazada.',
    contentSections: [
      {
        subhead: '1. Etapas Clínicas de la Sífilis',
        paragraphs: [
          '<em>Treponema pallidum</em> se transmite por contacto sexual o vía transplacentaria.',
          '<strong>Primaria:</strong> <strong>chancro sifilítico</strong> (úlcera genital <strong>única, indurada e INDOLORA</strong>, fondo limpio) y adenopatías duras indoloras; cura en 3–6 semanas. <strong>Secundaria:</strong> <strong>roseola sifilítica</strong> (exantema maculopapular con <strong>compromiso palmo-plantar</strong>), <strong>condilomas planos</strong> perianales y micropoliadenopatías. <strong>Latente:</strong> asintomática (precoz &lt; 1 año vs tardía &gt; 1 año). <strong>Terciaria:</strong> gomas, aortitis y <strong>neurosífilis</strong>.',
        ],
      },
      {
        subhead: '2. Interpretación Serológica: VDRL vs Treponémicas',
        paragraphs: [
          '• <strong>Pruebas No Treponémicas (VDRL, RPR):</strong> cuantitativas (diluciones 1:2, 1:4, 1:16...). Evalúan <strong>actividad y respuesta al tratamiento</strong> (curación: caída de ≥ 4 veces o 2 diluciones a los 6–12 meses).',
          '• <strong>Pruebas Treponémicas (FTA-ABS, MHA-TP, ELISA IgG):</strong> cualitativas. Sirven para <strong>confirmar el diagnóstico</strong>. Permanecen positivas de por vida (<strong>cicatriz serológica</strong>) en el 90 %; NO evalúan respuesta ni reinfección.',
        ],
      },
      {
        subhead: '3. Tratamiento Estándar con Penicilina Benzatina',
        paragraphs: [
          '• <strong>Sífilis Precoz (&lt; 1 año):</strong> <strong>Penicilina Benzatina 2.400.000 UI IM dosis única</strong>.',
          '• <strong>Sífilis Tardía (&gt; 1 año o desconocida):</strong> <strong>Penicilina Benzatina 2.400.000 UI IM semanal por 3 semanas consecutivas</strong> (total 7.2 MU).',
          '• <strong>Embarazada alérgica a penicilina:</strong> <strong>desensibilización obligatoria en UCI</strong> y tratamiento con penicilina (la doxiciclina está estrictamente contraindicada). La reacción de Jarisch-Herxheimer es benigna y se maneja con paracetamol.',
        ],
      },
    ],
    table: {
      title: 'Interpretación de Algoritmos Serológicos de Sífilis',
      headers: ['Prueba No Treponémica (VDRL/RPR)', 'Prueba Treponémica (FTA-ABS/ELISA)', 'Interpretación Clínica', 'Conducta Recomendada'],
      rows: [
        ['Reactivo (ej. 1:16)', 'Reactiva', 'Sífilis activa confirmada', 'Tratar según tiempo de evolución'],
        ['Reactivo (ej. 1:2)', 'No Reactiva', 'Falso positivo biológico', 'No tratar; causas: autoinmune, embarazo, edad'],
        ['No Reactivo', 'Reactiva', 'Cicatriz serológica o sífilis primaria muy precoz', 'Si tratado previamente: observar; si no: evaluar'],
        ['No Reactivo', 'No Reactiva', 'Paciente no infectado (o período de ventana)', 'Repetir en 3 semanas si hay chancro sospechoso'],
      ],
    },
    vignette: 'Hombre de 26 años consulta por lesión ulcerada indolora en el glande de 10 días de evolución. Al examen: úlcera de 1.5 cm de diámetro, bordes regulares sobreelevados, base limpia e indurada al tacto, sin dolor a la palpación, asociada a adenopatía inguinal derecha no dolorosa. El VDRL resulta reactivo en dilución 1:32.',
    explicacion: 'El cuadro clínico de úlcera genital única, indurada e indolora con adenopatía regional indolora y VDRL 1:32 es la presentación prototípica de Sífilis Primaria (Chancro duro). Por tratarse de una sífilis precoz (< 1 año de evolución), el tratamiento normativo de primera línea es Penicilina G Benzatina 2.400.000 UI por vía intramuscular en DOSIS ÚNICA. Además, se debe solicitar serología para VIH y hepatitis B, indicar estudio y tratamiento simultáneo a todos los contactos sexuales de los últimos 90 días, y programar control serológico con VDRL cuantitativo a los 6 y 12 meses.',
    keyPoints: [
      'Chancro sifilítico (primaria): úlcera única, base indurada, fondo limpio e INDOLORA.',
      'Secundarismo sifilítico: exantema maculopapular con compromiso palmo-plantar y condilomas planos perianales.',
      'VDRL/RPR es cuantitativo y sirve para evaluar actividad y respuesta al tratamiento (cura = caída de 4 veces los títulos).',
      'Las pruebas treponémicas (FTA-ABS) quedan positivas de por vida ("cicatriz serológica") y confirman el diagnóstico.',
      'Sífilis precoz (< 1 año): Penicilina Benzatina 2.4 MU IM en DOSIS ÚNICA.',
      'Sífilis tardía (> 1 año o desconocida): Penicilina Benzatina 2.4 MU IM semanal por 3 SEMANAS CONSECUTIVAS.',
      'En embarazada alérgica a penicilina: DESENSIBILIZACIÓN CON PENICILINA obligatoria (doxiciclina contraindicada).',
    ],
    questions: [
      {
        stem: 'Un hombre de 24 años consulta por un exantema eritematoso difuso en tronco que compromete francamente las palmas de las manos y las plantas de los pies, sin prurito, de 1 semana de evolución. Hace 2 meses recuerda haber tenido una úlcera indolora en el pene que desapareció espontáneamente. El VDRL es reactivo 1:64. ¿Cuál es el tratamiento de elección para este paciente?',
        options: [
          { id: 'A', text: 'Penicilina Benzatina 2.400.000 UI IM en dosis única' },
          { id: 'B', text: 'Penicilina Benzatina 2.400.000 UI IM semanal por 3 semanas consecutivas' },
          { id: 'C', text: 'Ceftriaxona 1 g EV diario por 14 días' },
          { id: 'D', text: 'Doxiciclina 100 mg cada 12 horas oral por 7 días' },
          { id: 'E', text: 'Azitromicina 1 g oral en dosis única' },
        ],
        correcta: 'A',
        explicacion: 'El paciente cursa con un secundarismo sifilítico (sífilis secundaria con exantema palmoplantar característico y títulos altos de VDRL). La sífilis secundaria forma parte de la Sífilis Precoz (menos de 1 año de evolución desde el contacto infectante). El tratamiento de elección normado por el MINSAL es Penicilina G Benzatina en DOSIS ÚNICA de 2.400.000 UI IM. El esquema de 3 semanas consecutivas (B) se reserva para sífilis latente tardía (> 1 año) o de duración indeterminada.',
        recTag: 'Banco de Preguntas Oficial · Enfermedades de Transmisión Sexual',
      },
      {
        stem: 'Una mujer de 26 años con embarazo de 14 semanas presenta un VDRL de tamizaje reactivo 1:16, confirmado mediante FTA-ABS reactivo. La paciente refiere ser alérgica confirmada a la penicilina (presentó shock anafiláctico previo). ¿Cuál es la conducta médica indicada para prevenir la sífilis congénita?',
        options: [
          { id: 'A', text: 'Indicar tratamiento con Doxiciclina 100 mg cada 12 horas por 14 días' },
          { id: 'B', text: 'Hospitalizar para desensibilización oral a la penicilina y luego administrar Penicilina Benzatina' },
          { id: 'C', text: 'Administrar Eritromicina oral 500 mg cada 6 horas por 14 días' },
          { id: 'D', text: 'Diferir todo tratamiento antibiótico hasta después del parto para evitar teratogenia' },
          { id: 'E', text: 'Administrar Ceftriaxona 1 g diario intramuscular por 10 días' },
        ],
        correcta: 'B',
        explicacion: 'La Penicilina es el ÚNICO antibiótico con eficacia demostrada para atravesar la placenta y tratar tanto a la madre como al feto, previniendo la sífilis congénita, el aborto y la muerte fetal in útero. La doxiciclina (A) está formalmente contraindicada en el embarazo por daño dental y óseo fetal. Los macrólidos (C) no cruzan adecuadamente la placenta. Por tanto, ante una embarazada alérgica a la penicilina, la norma nacional e internacional exige desensibilización protocolizada a penicilina y tratamiento posterior con Penicilina Benzatina.',
        recTag: 'Banco de Preguntas Oficial · Enfermedades de Transmisión Sexual',
      },
    ],
  },
  {
    id: 'inf-13',
    classId: 'infecto-13',
    tier: 2,
    blockNum: 3,
    blockName: 'Infecciones Crónicas, Retrovirales y Granulomatosas',
    topicLabel: '3.5',
    title: 'Infecciones de Transmisión Sexual (ITS) II: Uretritis, Úlceras Genitales y VPH',
    perfilCode: '1.04.1.010',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Cáncer Cervicouterino (Tamizaje VPH / PAP)',
    reconstrucciones: 'EUNACOM 2023 (Q#95) · EUNACOM 2021 (Q#12) · EUNACOM 2018 (Q#66)',
    frecuencia: 'Alta rentabilidad · manejo sindrómico de uretritis gonocócica vs no gonocócica y úlceras',
    svg: null, algoTitle: null,
    diagram: null,
    contexto: 'El manejo sindrómico de las infecciones de transmisión sexual en Atención Primaria es un clásico del EUNACOM. La regla es clara: toda uretritis o cervicitis se trata de entrada con doble cobertura empírica (Neisseria gonorrhoeae + Chlamydia trachomatis) y las úlceras genitales se discriminan entre sífilis, herpes simple y chancroide.',
    contentSections: [
      {
        subhead: '1. Síndrome de descarga uretral y cervicitis mucopurulenta',
        paragraphs: [
          'La uretritis se manifiesta por disuria, prurito meatal y secreción uretral. Se divide en dos grupos etiológicos mayores:',
          '• <strong>Uretritis Gonocócica (UG - <em>Neisseria gonorrhoeae</em>):</strong> secreción típicamente <strong>abundante, espesa, purulenta y amarilloverdosa</strong>, con incubación corta (2 a 7 días). El frotis directo con tinción de Gram revela <strong>diplococos Gram negativos intracelulares en polimorfonucleares</strong> (sensibilidad > 95% en varones).<br>' +
          '• <strong>Uretritis No Gonocócica (UNG - <em>Chlamydia trachomatis</em> serovares D-K en 40-50%, <em>Mycoplasma genitalium</em>, <em>Trichomonas vaginalis</em>):</strong> secreción más escasa, serosa o mucoide, a menudo matinal ("gota matinal"), con incubación más prolongada (1 a 3 semanas). El Gram solo muestra PMN sin bacterias visibles.',
          '<strong>Regla de oro terapéutica del manejo sindrómico:</strong> debido a que la coinfección gonococo-clamidia ocurre en el 20-40% de los casos, <strong>TODA URETRITIS SE TRATA CON DOBLE COBERTURA OBLIGATORIA:</strong><br>' +
          '• <strong>Ceftriaxona 500 mg IM en dosis única</strong> (cobertura para <em>N. gonorrhoeae</em>) + <strong>Doxiciclina 100 mg cada 12 h oral por 7 días</strong> (o Azitromicina 1 g oral dosis única) para cubrir <em>C. trachomatis</em>.<br>' +
          '• Tratamiento simultáneo a todas las parejas sexuales recientes y abstinencia sexual por 7 días.',
        ],
      },
      {
        subhead: '2. Diagnóstico diferencial de las úlceras genitales',
        paragraphs: [
          'El enfrentamiento de las úlceras genitales es un pilar evaluativo en el EUNACOM:',
          '• <strong>Herpes Genital (VHS-2 > VHS-1):</strong> es la causa más frecuente de úlcera genital. Cursa con <strong>vesículas agrupadas en racimo sobre base eritematosa que se rompen formando úlceras superficiales dolorosas</strong>. Típicamente recurrente, precedida de pródromos de ardor o parestesias. Tratamiento: <strong>Aciclovir oral 400 mg cada 8 horas por 7 a 10 días</strong> (acorta los días de síntomas y diseminación viral; no erradica el virus del ganglio sensitivo sacro).<br>' +
          '• <strong>Chancro duro (Sífilis primaria):</strong> úlcera <strong>única, base indurada, fondo limpio e INDOLORA</strong>, adenopatía indolora.<br>' +
          '• <strong>Chancro blando o Chancroide (<em>Haemophilus ducreyi</em>):</strong> úlcera <strong>múltiple, fondo sucio con exudado necrótico purulento, bordes deshilachados e INTENSAMENTE DOLOROSA</strong>, asociada a adenopatía inguinal dolorosa inflamatoria con tendencia a fistulizar (bubón). Tratamiento: Azitromicina 1 g oral dosis única o Ceftriaxona 250 mg IM.',
        ],
      },
      {
        subhead: '3. Virus Papiloma Humano (VPH): verrugas vs oncogénesis',
        paragraphs: [
          '• <strong>VPH de bajo riesgo oncogénico (genotipos 6 y 11):</strong> causan los <strong>Condilomas acuminados</strong> (verrugas anogenitales exofíticas "en cresta de gallo" en glande, vulva o perianal). Tratamiento: Podofilotoxina tópica al 0.5%, Imiquimod al 5% o crioterapia.<br>' +
          '• <strong>VPH de alto riesgo oncogénico (genotipos 16 y 18 causan el 70% del cáncer cervical):</strong> provocan displasia intraepitelial asintomática. Tamizaje GES en Chile: citología cervical (PAP) cada 3 años entre los 25 y 64 años, o test molecular de ADN-VPH cada 5 años.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial de las Úlceras Genitales en EUNACOM',
      headers: ['Característica', 'Herpes Genital (VHS-2)', 'Sífilis Primaria (Chancro Duro)', 'Chancroide (Chancro Blando)'],
      rows: [
        ['Etiología', 'Virus Herpes Simplex tipo 2 (o 1)', 'Treponema pallidum', 'Haemophilus ducreyi'],
        ['Número de lesiones', 'Múltiples vesículas agrupadas en racimo', 'Habitualmente única', 'Múltiples (autoinoculables)'],
        ['Dolor local', 'Muy dolorosas', 'Completamente indolora', 'Intensamente dolorosa'],
        ['Fondo de la úlcera', 'Eritematoso limpio tras romperse', 'Limpio con base indurada y firme', 'Sucio, purulento y necrótico'],
        ['Adenopatía regional', 'Sensible bilateral', 'Indolora, firme y bilateral', 'Dolorosa con tendencia a fistulizar (bubón)'],
        ['Tratamiento de elección', 'Aciclovir oral 400 mg c/8h x 7-10 d', 'Penicilina Benzatina 2.4 MU IM x 1', 'Azitromicina 1 g oral o Ceftriaxona 250 mg IM'],
      ],
    },
    vignette: 'Hombre de 22 años sexualmente activo consulta por cuadro de 4 días de disuria intensa y abundante secreción matinal purulenta amarillenta por el meato uretral. En el box de urgencias se toma frotis de la secreción uretral con tinción de Gram que revela abundantes polimorfonucleares con presencia de diplococos Gram negativos intracelulares.',
    explicacion: 'El hallazgo de diplococos Gram negativos intracelulares en un hombre con secreción purulenta confirma el diagnóstico de Uretritis Gonocócica por Neisseria gonorrhoeae. Sin embargo, la norma nacional e internacional de manejo de ITS exige administrar SIEMPRE tratamiento combinado que cubra simultáneamente N. gonorrhoeae y Chlamydia trachomatis, dada la altísima tasa de coinfección (hasta 40%). El esquema de elección es Ceftriaxona 500 mg IM dosis única + Doxiciclina 100 mg cada 12 h oral por 7 días (o Azitromicina 1 g oral). Se debe tratar a los contactos sexuales de los últimos 60 días y abstenerse de relaciones sexuales por 7 días.',
    keyPoints: [
      'Uretritis gonocócica: secreción purulenta abundante; Gram con diplococos Gram negativos intracelulares.',
      'Uretritis no gonocócica (Chlamydia): secreción serosa o escasa, incubación larga, Gram sin bacterias visibles.',
      'Toda uretritis exige tratamiento combinado empírico: Ceftriaxona 500 mg IM (gonococo) + Doxiciclina 100 mg c/12h x 7 días (clamidia).',
      'Úlcera dolorosa en racimo sobre base eritematosa: Herpes genital (tratar con Aciclovir oral).',
      'Úlcera indolora, base indurada y limpia: Sífilis primaria (tratar con Penicilina Benzatina dosis única).',
      'Úlcera dolorosa, fondo sucio y purulento con bubón fistulizado: Chancroide (Haemophilus ducreyi).',
    ],
    questions: [
      {
        stem: 'Un hombre de 25 años consulta por disuria y secreción uretral purulenta abundante. La tinción de Gram de la secreción demuestra diplococos Gram negativos intracelulares. ¿Cuál es el tratamiento farmacológico de primera línea más adecuado?',
        options: [
          { id: 'A', text: 'Ceftriaxona 500 mg IM en dosis única en monoterapia' },
          { id: 'B', text: 'Ceftriaxona 500 mg IM dosis única + Doxiciclina 100 mg cada 12 h oral por 7 días' },
          { id: 'C', text: 'Ciprofloxacino 500 mg oral en dosis única' },
          { id: 'D', text: 'Azitromicina 500 mg diarios por 3 días' },
          { id: 'E', text: 'Penicilina Benzatina 2.400.000 UI IM en dosis única' },
        ],
        correcta: 'B',
        explicacion: 'Aunque el frotis confirme gonorrea, el tratamiento sindrómico normado por el MINSAL y la CDC exige cobertura combinada para Neisseria gonorrhoeae (Ceftriaxona 500 mg IM dosis única) y Chlamydia trachomatis (Doxiciclina 100 mg c/12h por 7 días), debido a la frecuencia extrema de coinfección oculta. El ciprofloxacino (C) no se utiliza por alta resistencia de gonococo en Chile (> 50%).',
        recTag: 'Banco de Preguntas Oficial · Enfermedades de Transmisión Sexual',
      },
      {
        stem: 'Una mujer de 22 años consulta por intenso dolor vulvar y ardor al orinar de 3 días de evolución. Al examen ginecológico se aprecian múltiples vesículas agrupadas y pequeñas úlceras superficiales eritematosas muy sensibles en ambos labios mayores, con adenopatías inguinales dolorosas bilaterales. ¿Cuál es el diagnóstico más probable y el tratamiento indicado?',
        options: [
          { id: 'A', text: 'Chancroide / Ceftriaxona IM' },
          { id: 'B', text: 'Sífilis primaria / Penicilina Benzatina IM' },
          { id: 'C', text: 'Herpes genital primario / Aciclovir oral' },
          { id: 'D', text: 'Linfogranuloma venéreo / Doxiciclina oral' },
          { id: 'E', text: 'Candidiasis vulvovaginal / Fluconazol oral' },
        ],
        correcta: 'C',
        explicacion: 'La presencia de lesiones vesiculares agrupadas en racimo que evolucionan a úlceras superficiales dolorosas asociadas a adenopatías sensibles es el cuadro prototípico del primer episodio de Herpes Genital (generalmente por VHS-2). El tratamiento de elección para acortar el cuadro y reducir la eliminación viral es Aciclovir oral (400 mg cada 8 horas o 200 mg 5 veces al día por 7 a 10 días). El chancro sifilítico (B) es una úlcera única e indolora.',
        recTag: 'Banco de Preguntas Oficial · Enfermedades de Transmisión Sexual',
      },
    ],
  },
];

module.exports = { bloque3, flow };
