// ============================================================================
// BLOQUE 03 NEUROLOGÍA: TRASTORNOS DEL MOVIMIENTO Y ENFERMEDADES NEURODEGENERATIVAS
// Manual EUNACOM 2026 · Tomo 10 Neurología & Geriatría (Accent color: #6d28d9 - Púrpura)
// 5 Temas Curriculares (10.11 a 10.15) · Cobertura 100% Perfil V3 & Garantías GES
// ============================================================================

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
    const cls = { acc: 'acc', dec: 'dec', warn: 'warn', crit: 'crit' }[o.type] || 'b';
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
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#6d28d9"/></marker></defs>
  <style>
    .b{fill:#fff;stroke:#cbd5e1;stroke-width:1}
    .t{font-size:10px;fill:#15181d}
    .sub{font-size:8px;fill:#475569}.lbl{font-size:7.5px;fill:#6d28d9;font-weight:700}
    .acc{fill:#6d28d9;stroke:#5b21b6}.accT{fill:#fff}.accS{font-size:8px;fill:#ede9fe}
    .dec{fill:#f5f3ff;stroke:#c4b5fd;stroke-width:1}
    .warn{fill:#fef2f2;stroke:#fecaca;stroke-width:1}.warnT{fill:#991b1b}
    .crit{fill:#fff1f2;stroke:#f43f5e;stroke-width:1}
    .ln{stroke:#6d28d9;stroke-width:1.2;fill:none;marker-end:url(#ar)}
  </style>
  ${P.join('\n  ')}
</svg>`;
  return { title, svg };
}

const bloque3 = [
  // ==========================================================================
  // TEMA 10.11: ENFERMEDAD DE PARKINSON: CRITERIOS DIAGNÓSTICOS MDS, TERAPIA CON LEVODOPA Y FLUCTUACIONES MOTORAS
  // ==========================================================================
  {
    id: "neuro-11",
    classId: "neuro-11",
    tier: 3,
    blockNum: 3,
    blockName: "Trastornos del Movimiento y Enfermedades Neurodegenerativas",
    topicLabel: "10.11",
    title: "Enfermedad de Parkinson: Criterios Diagnósticos MDS, Terapia con Levodopa y Fluctuaciones Motoras",
    perfilCode: "1.10.1.006",
    dx: "Específico",
    tx: "Completo",
    seg: "Derivar",
    ges: "Garantía Explícita en Salud (GES N° 67): Enfermedad de Parkinson en personas de todas las edades · Diagnóstico integral por especialista (neurólogo) dentro de 60 días desde la sospecha clínica, confirmación diagnóstica, acceso garantizado a tratamiento farmacológico (Levodopa/Carbidopa, agonistas dopaminérgicos, inhibidores COMT y MAO-B) dentro de 20 días desde confirmación, rehabilitación motora multidisciplinaria y acceso a Cirugía de Estimulación Cerebral Profunda (DBS) en centros terciarios de referencia.",
    reconstrucciones: "EUNACOM Julio 2024 (Q#82) · EUNACOM Diciembre 2023 (Q#45) · EUNACOM Enero 2021 (Q#109)",
    frecuencia: "Máxima rentabilidad · Pregunta angular de trastornos del movimiento y neurología ambulatoria",
    svg: null,
    algoTitle: "Algoritmo Diagnóstico MDS y Escalonamiento Terapéutico en Enfermedad de Parkinson",
    diagram: flow('Algoritmo Diagnóstico y Manejo Escalonado en Enfermedad de Parkinson', [
      { t: 'Sospecha Clínica de Síndrome Parkinsoniano', s: 'Bradicinesia obligatoria + Temblor de reposo (4-6 Hz) y/o Rigidez en rueda dentada', type: 'acc' },
      { t: 'Descarte Activo de Banderas Rojas (Red Flags MDS)', s: 'Caídas en primer año · Parálisis de la mirada vertical · Disautonomía grave precoz · Fármacos bloqueadores D2', type: 'warn' },
      { k: 'split', q: '¿Diagnóstico Clínico Establecido de Enfermedad de Parkinson?', s: 'Estratificación etaria, comorbilidades y nivel de demanda funcional del paciente',
        ll: 'Adulto Mayor (≥ 65-70 años) o Fragilidad',
        left: { t: 'Inicio con Levodopa / Carbidopa', s: 'Mayor eficacia motora sintomática · Menor riesgo de psicosis y trastornos de control de impulsos', type: 'crit' },
        rl: 'Paciente Joven (< 65 años) Activo',
        right: { t: 'Agonistas Dopaminérgicos o IMAO-B', s: 'Pramipexol / Rasagilina · Busca retrasar aparición de fluctuaciones y disquinesias', type: 'dec' }
      },
      { t: 'Aparición de Complicaciones Motoras Tardías (3-5 años)', s: 'Wearing-off (acortamiento de dosis) · Disquinesias pico de dosis · Fenómeno On-Off', type: 'warn' },
      { t: 'Optimización y Terapias Avanzadas GES', s: 'Fraccionar L-Dopa + Asociar Entacapona (ICOMT) o Rasagilina · Amantadina para disquinesias · Considerar DBS', type: 'acc' }
    ]),
    contexto: "La Enfermedad de Parkinson (EP) es la segunda patología neurodegenerativa más frecuente en el adulto mayor tras el Alzheimer y una patología priorizada en Chile mediante la Garantía GES N° 67. El diagnóstico es estrictamente clínico y exige la presencia obligatoria de bradicinesia acompañada de temblor de reposo o rigidez en rueda dentada con asimetría al debut. Reconocer precozmente los síntomas no motores prodrómicos (hiposmia, trastorno conductual del sueño REM y constipación pertinaz), diferenciarla de los parkinsonismos atípicos y dominar el ajuste escalonado de Levodopa frente al desarrollo de fluctuaciones motoras (wearing-off y disquinesias) constituyen competencias médicas esenciales evaluadas de manera constante en el EUNACOM.",
    contentSections: [
      {
            "subhead": "1. Fisiopatología, Vías de Ganglios Basales y Fases de Progresión de Braak",
            "paragraphs": [
                  "La Enfermedad de Parkinson se caracteriza por la pérdida neuronal progresiva y selectiva en la <strong>pars compacta de la sustancia negra mesencefálica</strong> (proyecciones dopaminérgicas nigroestriatales hacia el putamen y núcleo caudado). La manifestación de los síntomas motores clásicos requiere la pérdida de al menos el <strong>50% al 70% de las neuronas dopaminérgicas</strong> y una reducción superior al 80% del contenido de dopamina estriatal.",
                  "A nivel histopatológico, el sello distintivo es el acúmulo intracitoplasmático de inclusiones proteicas eosinofílicas denominadas <strong>Cuerpos de Lewy</strong>, cuyo componente estructural primario es la proteína <strong>alfa-sinucleína mal plegada y fosforilada</strong>. En el modelo fisiopatológico de los ganglios basales, la depleción de dopamina rompe el equilibrio entre las dos vías estriatales: disminuye la activación de la <strong>vía directa</strong> (receptores D1, promotora del movimiento) e hiperactiva la <strong>vía indirecta</strong> (receptores D2, mediada por el núcleo subtalámico de Luys), traduciéndose en una inhibición excesiva del tálamo motor y la corteza cerebral, lo que genera bradicinesia y rigidez (véase Figura 10.11: Algoritmo Diagnóstico y Manejo Escalonado en Enfermedad de Parkinson).",
                  "La hipótesis de <strong>estadificación de Heiko Braak</strong> postula que el proceso neurodegenerativo comienza años o décadas antes de las manifestaciones motoras, iniciándose en el <strong>plexo entérico y el núcleo motor dorsal del vago (estadios 1-2)</strong>, así como en el <strong>bulbo olfatorio</strong>, ascendiendo por el tronco encefálico hacia el mesencéfalo (estadios 3-4, donde debutan los síntomas motores) y finalmente extendiéndose a áreas límbicas y neocorticales (estadios 5-6, donde sobreviene el deterioro cognitivo y las alucinaciones)."
            ]
      },
      {
            "subhead": "2. Criterios Diagnósticos Clínicos de la Movement Disorder Society (MDS 2026)",
            "paragraphs": [
                  "El diagnóstico de la Enfermedad de Parkinson es <strong>fundamentalmente clínico</strong>; ningún examen de laboratorio o neuroimagen convencional (TAC o RM) confirma la enfermedad por sí solo (si bien la RM cerebral es obligatoria para descartar parkinsonismo vascular, hidrocefalia o lesiones estructurales).",
                  "Según los criterios oficiales de la <strong>Movement Disorder Society (MDS)</strong>, el diagnóstico requiere tres pasos consecutivos:",
                  "• <strong>Paso 1: Diagnóstico de Síndrome Parkinsoniano (Parkinsonismo):</strong> Presencia obligatoria de <strong>BRADICINESIA</strong> (lentitud de movimiento y decremento progresivo en velocidad o amplitud durante movimientos repetitivos alternantes: finger tapping, pronosupinación o apertura-cierre de manos), asociada a AL MENOS UNO de los siguientes: <strong>Rigidez muscular</strong> (resistencia plástica al movimiento pasivo, signo de la \"rueda dentada\" al combinarse con temblor) O <strong>Temblor de reposo</strong> (4 a 6 Hz, característicamente asimétrico, que cede con el movimiento voluntario) (véase Tabla 10.11A: Criterios Diagnósticos Cardinales y Banderas Rojas MDS).",
                  "• <strong>Paso 2: Criterios de Exclusión Absoluta:</strong> Ausencia de signos cerebelosos manifiestos, parálisis de la mirada vertical supranuclear hacia abajo, diagnóstico de demencia frontotemporal en los primeros 5 años, uso reciente de fármacos antagonistas dopaminérgicos (metoclopramida, neurolépticos) y ausencia total de respuesta a dosis altas de Levodopa (> 600-1000 mg/día).",
                  "• <strong>Paso 3: Banderas Rojas (Red Flags):</strong> Caídas recurrentes tempranas (< 3 años), progresión acelerada de la marcha que obliga al uso de silla de ruedas en los primeros 5 años, disautonomía severa precoz (hipotensión ortostática sintomática grave o incontinencia urinaria en el primer año) o ausencia de progresión motora durante más de 5 años salvo por tratamiento."
            ]
      },
      {
            "subhead": "3. Sintomatología No Motora: El Iceberg de la Enfermedad de Parkinson",
            "paragraphs": [
                  "Los síntomas motores representan únicamente la porción visible de la enfermedad. La patología no motora impone una gran merma en la calidad de vida y comprende:",
                  "• <strong>Síntomas Prodrómicos Premotores:</strong> 1) <em>Hiposmia o anosmia neurosensorial</em> (presente en más del 80-90% de los pacientes, años antes del temblor); 2) <em>Trastorno conductual del sueño REM (RBD)</em>: pérdida de la atonía muscular fisiológica durante la fase REM del sueño, provocando que los pacientes \"actúen violentamente sus sueños\" con gritos, puñetazos y patadas (altísimo valor predictivo positivo para sinucleinopatías); 3) <em>Constipación pertinaz</em> por disfunción mioentérica colónica.",
                  "• <strong>Disfunción Autonómica (Disautonomía):</strong> Hipotensión ortostática sintomática (caída de PAS ≥ 20 mmHg o PAD ≥ 10 mmHg al ponerse de pie), sialorrea (por enlentecimiento de la deglución automática), urgencia o incontinencia urinaria, disfunción eréctil y sudoración paroxística.",
                  "• <strong>Manifestaciones Neuropsiquiátricas y Cognitivas:</strong> Depresión mayor reactiva o endógena (hasta en el 40-50%), ansiedad, apatía profunda, trastornos del control de impulsos (hipersexualidad, ludopatía, compras compulsivas ligadas al uso de agonistas dopaminérgicos) y <em>Deterioro Cognitivo / Demencia en la EP</em> de perfil fronto-subcortical (disfunción ejecutiva, bradipsiquia, alteraciones visuoespaciales) de aparición típicamente tardía (véase Tabla 10.11B: Fluctuaciones Motoras y Síntomas No Motores)."
            ]
      },
      {
            "subhead": "4. Abordaje Terapéutico Inicial: Levodopa vs Agonistas Dopaminérgicos e Inhibidores Enzimáticos",
            "paragraphs": [
                  "El tratamiento de la EP es <strong>estrictamente sintomático</strong>; ningún fármaco ha demostrado efecto neuroprotector o modificador definitivo de la enfermedad en ensayos clínicos fase III.",
                  "• <strong>Levodopa (asociada a Carbidopa o Benserazida):</strong> Es el <strong>estándar de oro</strong> de máxima eficacia motora. La L-Dopa atraviesa la barrera hematoencefálica mediante el transportador de aminoácidos neutros grandes (LAT1) y se descarboxila a dopamina en el estriado. La coadministración obligatoria de un inhibidor periférico de la dopa-descarboxilasa (Carbidopa 25 mg o Benserazida 50 mg por cada 100-200 mg de L-Dopa) previene la conversión periférica, minimizando náuseas, vómitos e hipotensión arterial. <em>Regla de administración:</em> Tomar alejada de las comidas ricas en proteínas (al menos 30-60 min antes o 2 h después) porque los aminoácidos dietéticos compiten por el transportador duodenal e intracerebral.",
                  "• <strong>Estrategia de inicio según edad y comorbilidad:</strong>",
                  "- <em>Adultos mayores (≥ 65-70 años) o con comorbilidades/deterioro cognitivo:</em> Iniciar directamente con <strong>Levodopa/Carbidopa</strong> (dosis inicial baja: 50/12.5 mg a 100/25 mg dos a tres veces al día, titulando semanalmente). Presenta el perfil de tolerancia neuropsiquiátrica más seguro (menor riesgo de alucinaciones, somnolencia diurna y psicosis que los agonistas).",
                  "- <em>Pacientes jóvenes (< 65 años) con alta demanda laboral y bajo riesgo neuropsiquiátrico:</em> Se puede iniciar con <strong>Agonistas Dopaminérgicos no ergolínicos</strong> (Pramipexol, Ropinirol) o <strong>Inhibidores de la MAO-B</strong> (Rasagilina, Selegilina) para postergar el uso de Levodopa y retrasar la génesis de fluctuaciones motoras y disquinesias.",
                  "• <strong>Inhibidores de la MAO-B:</strong> <em>Rasagilina</em> (0.5 a 1 mg/día) o <em>Selegilina</em> (5 mg c/12h). Bloquean la degradación de dopamina sináptica; útiles como monoterapia en fases muy tempranas o coadyuvantes para atenuar fluctuaciones (véase Tabla 10.11C: Protocolo Farmacológico Escalonado en Enfermedad de Parkinson)."
            ]
      },
      {
            "subhead": "5. Complicaciones Motoras Crónicas (Fluctuaciones y Disquinesias) y Terapias Avanzadas GES",
            "paragraphs": [
                  "Tras un período inicial de excelente respuesta clínica sin altibajos (\"luna de miel\", que dura 3 a 5 años), la progresiva pérdida de terminales dopaminérgicas estriatales y la vida media corta de la L-Dopa plasmática (90 minutos) conducen al desarrollo de <strong>complicaciones motoras crónicas</strong> en más del 50-70% de los pacientes a los 5 años:",
                  "• <strong>Fluctuación de final de dosis (\"Wearing-Off\"):</strong> El efecto de cada dosis se acorta progresivamente (dura 2-3 horas en lugar de 4-5 horas), reapareciendo la rigidez y el temblor antes de la siguiente toma. <em>Manejo:</em> 1) Fraccionar las tomas de Levodopa (administrar con mayor frecuencia e intervalos menores); 2) Asociar un <strong>Inhibidor de la COMT (Entacapona 200 mg</strong> con cada toma de L-Dopa), que bloquea la degradación periférica de L-Dopa y prolonga su biodisponibilidad cerebral; 3) Asociar Rasagilina o agonistas dopaminérgicos.",
                  "• <strong>Disquinesias de Pico de Dosis:</strong> Movimientos involuntarios coreiformes o distónicos que aparecen cuando la concentración plasmática y cerebral de Levodopa alcanza su cénit. <em>Manejo:</em> Reducir ligeramente la dosis unitaria de L-Dopa y aumentar la frecuencia de tomas; asociar <strong>Amantadina</strong> (antagonista NMDA antiglutamatérgico que reduce directamente las disquinesias coreicas).",
                  "• <strong>Fenómeno On-Off Impredecible y Congelamiento de la Marcha (Freezing):</strong> Transiciones bruscas e impredecibles entre períodos de buena movilidad (\"On\") e inmovilidad severa (\"Off\").",
                  "• <strong>Terapias Avanzadas GES:</strong> En pacientes con fluctuaciones motoras severas y disquinesias refractarias que conservan indemnidad cognitiva y psiquiátrica, está garantizada la evaluación de <strong>Estimulación Cerebral Profunda (DBS: Deep Brain Stimulation)</strong> bilateral del <em>núcleo subtalámico (STN)</em> o del <em>globo pálido interno (GPi)</em>, o la infusión enteral continua de gel de Levodopa/Carbidopa (Duodopa) mediante gastrostomía percutánea."
            ]
      }
],
    table: {
      "title": "Tabla 10.11A: Criterios Diagnósticos Cardinales y Banderas Rojas MDS",
      "headers": [
            "Categoría Diagnóstica MDS",
            "Manifestaciones Clínicas Específicas",
            "Hallazgo Semiológico Clave",
            "Interpretación y Conducta"
      ],
      "rows": [
            [
                  "Bradicinesia (Signo Obligatorio)",
                  "Lentitud motora para iniciar y ejecutar movimientos + decremento progresivo",
                  "Fatiga y disminución de amplitud en golpeteo de dedos (finger tapping) y pronosupinación",
                  "Condición sine qua non para definir síndrome parkinsoniano; si falta, no es Parkinson"
            ],
            [
                  "Temblor de Reposo Cardinal",
                  "Frecuencia de 4 a 6 Hz, característicamente asimétrico al debut",
                  "Movimiento en \"cuenta monedas\" (pill-rolling) en manos; disminuye con la acción voluntaria",
                  "Presente en 70-80% de los pacientes; respeta típicamente la cabeza (a diferencia del esencial)"
            ],
            [
                  "Rigidez en Rueda Dentada",
                  "Resistencia plástica involuntaria constante en todo el rango pasivo",
                  "Fenómeno de Negro (resaltes sucesivos al combinar rigidez con temblor subclínico)",
                  "Afecta flexores y extensores; se incrementa al mover la extremidad contralateral (Froment)"
            ],
            [
                  "Inestabilidad Postural Tardía",
                  "Falla de reflejos posturales con tendencia a la retropulsión / propulsión",
                  "Prueba del tirón (pull test) anormal con retropulsión > 2 pasos o caída al suelo",
                  "Signo de etapa avanzada en EP; si ocurre en el primer año de evolución, es bandera roja"
            ],
            [
                  "Criterios de Apoyo (MDS)",
                  "Respuesta dramática y sostenida a Levodopa, disquinesias inducidas por L-Dopa",
                  "Pérdida asimétrica de braceo, hiposmia objetivada por test olfatorio, trastorno REM (RBD)",
                  "Confirman el diagnóstico de Enfermedad de Parkinson Clínicamente Establecida"
            ],
            [
                  "Banderas Rojas y Exclusión",
                  "Caídas tempranas (< 3 años), parálisis de mirada vertical, disautonomía severa precoz",
                  "Marcha en silla de ruedas en < 5 años, nula respuesta motora a dosis altas de L-Dopa",
                  "Obligan a descartar síndromes Parkinson-Plus (PSP, AMS) o causas secundarias"
            ]
      ]
},
    severityTable: {
      "title": "Tabla 10.11B: Fluctuaciones Motoras y Síntomas No Motores",
      "headers": [
            "Fenómeno Clínico",
            "Mecanismo Fisiopatológico",
            "Presentación Clínica Típica",
            "Estrategia Terapéutica Recomendada"
      ],
      "rows": [
            [
                  "Deterioro de Fin de Dosis (\"Wearing-off\")",
                  "Pérdida de terminales dopaminérgicas estriatales; acortamiento de vida media cerebral",
                  "Reaparición de rigidez, temblor y acinesia 2-3 h post-dosis antes de la siguiente toma",
                  "Fraccionar tomas de L-Dopa (acortar intervalo) · Asociar Entacapona 200 mg o Rasagilina"
            ],
            [
                  "Disquinesias de Pico de Dosis",
                  "Hipersensibilidad de receptores estriatales por estimulación dopaminérgica pulsátil",
                  "Movimientos coreicos o balísticos involuntarios en cabeza, tronco y extremidades en cénit",
                  "Reducir dosis individual de L-Dopa manteniendo frecuencia · Indicar Amantadina 100 mg c/12h"
            ],
            [
                  "Fenómeno On-Off Impredecible",
                  "Falla de amortiguación central y fluctuaciones impredecibles de niveles plasmáticos",
                  "Cambios bruscos en minutos entre movilidad normal y acinesia severa sin relación a toma",
                  "Optimizar intervalos · Apomorfina subcutánea de rescate · Considerar bomba de infusión o DBS"
            ],
            [
                  "Trastorno del Sueño REM (RBD)",
                  "Degeneración de núcleos pontinos subcoerúleos que median la atonía fisiológica REM",
                  "Pesadillas vívidas, gritos, puñetazos y patadas durmiendo; autolesiones o al cónyuge",
                  "Clonazepam 0.5-1 mg/noche o Melatonina 3-10 mg/noche · Medidas de protección en cama"
            ],
            [
                  "Disfunción Autonómica",
                  "Depósito de alfa-sinucleína en plexo entérico, ganglios simpáticos y vago",
                  "Hipotensión ortostática sintomática, constipación pertinaz, vejiga hiperactiva, disfunción eréctil",
                  "Fludrocortisona / Midodrina para ortostatismo · Polietilenglicol para constipación · Evitar anticolinérgicos"
            ]
      ]
},
    treatmentTable: {
      "title": "Tabla 10.11C: Protocolo Farmacológico Escalonado en Enfermedad de Parkinson",
      "headers": [
            "Fármaco / Intervención",
            "Mecanismo de Acción",
            "Dosis Estándar y Vía",
            "Consideraciones Clínicas y Advertencias EUNACOM"
      ],
      "rows": [
            [
                  "Levodopa / Carbidopa",
                  "Precursor directo de dopamina + inhibidor dopa-descarboxilasa periférica",
                  "Inicio: 100/25 mg c/8h vía oral; titular gradualmente hasta 200/50 mg c/6-8h",
                  "Gold standard sintomático. Tomar alejado de comidas proteicas. Fármaco de elección en > 65 años"
            ],
            [
                  "Pramipexol",
                  "Agonista dopaminérgico no ergolínico selective D2/D3",
                  "Inicio: 0.125 mg c/8h; titular semanal hasta 0.5-1.5 mg c/8h (o formulación LP 1 vez/día)",
                  "De elección en < 65 años. Alerta: Trastornos de control de impulsos (ludopatía, compras) y somnolencia"
            ],
            [
                  "Rasagilina",
                  "Inhibidor irreversible selectivo de Monoaminooxidasa B (MAO-B)",
                  "0.5 a 1 mg una vez al día por la mañana",
                  "Monoterapia en etapas iniciales o coadyuvante en wearing-off. No requiere dieta sin tiramina estricta"
            ],
            [
                  "Entacapona",
                  "Inhibidor periférico reversible de Catecol-O-Metiltransferasa (COMT)",
                  "200 mg por vía oral administrados conjuntamente con CADA dosis de Levodopa (máx 1600-2000 mg/día)",
                  "Prolonga vida media plasmática de L-Dopa. Trata el wearing-off. Advierte tinción naranja de orina"
            ],
            [
                  "Amantadina",
                  "Antagonista no competitivo NMDA / estimula liberación dopamina",
                  "100 mg c/12-8h vía oral",
                  "Fármaco específico de elección para reducir disquinesias inducidas por Levodopa. Causa livedo reticularis"
            ],
            [
                  "Estimulación Cerebral Profunda (DBS)",
                  "Neuroestimulación eléctrica continua de alta frecuencia en STN o GPi",
                  "Implante quirúrgico estereotáxico bilateral de electrodos profundos + generador subclavio",
                  "Garantía GES N° 67 en pacientes con fluctuaciones motoras refractarias, sin demencia ni depresión severa"
            ]
      ]
},
    vignette: "Hombre de 68 años, jubilado, sin antecedentes mórbidos relevantes, consulta por un cuadro de 14 meses de evolución caracterizado por temblor involuntario en su extremidad superior derecha que aparece principalmente cuando tiene el brazo apoyado en reposo mirando televisión, cediendo cuando toma una taza o escribe. Su esposa refiere que camina más lento, arrastra levemente el pie derecho y ha perdido la expresividad de su rostro. Al examen físico: alerta, orientado, facies inexpresiva (hipomimia facial), habla con volumen bajo (hipofonía). En la marcha se evidencia postura ligeramente encorvada, reducción marcada del braceo derecho y pasos cortos. Al examen segmentario presenta rigidez plástica en rueda dentada en muñeca y codo derechos, acompañada de temblor rítmico de reposo a 5 Hz (\"cuenta monedas\") en mano derecha. El golpeteo repetitivo de dedos (finger tapping) muestra clara lentitud con disminución progresiva de la amplitud en mano derecha. No presenta caídas, parálisis oculomotora ni disautonomía.",
    explicacion: "El cuadro clínico corresponde al clásico debut asimétrico de una Enfermedad de Parkinson idiopática, cumpliendo plenamente los criterios diagnósticos de la Movement Disorder Society (MDS): Bradicinesia obligatoria (demostrada por decremento progresivo en velocidad y amplitud del finger tapping) + Temblor de reposo típico (4-5 Hz, que cede con el movimiento voluntario) + Rigidez en rueda dentada, con notable asimetría al debut (compromiso predominante del hemicuerpo derecho). La ausencia de banderas rojas (caídas tempranas, parálisis de mirada vertical, disautonomía severa o síntomas piramidales/cerebelosos) y la edad del paciente (68 años) orientan al diagnóstico de certeza. En un paciente mayor de 65 años, la conducta farmacológica de elección es iniciar Levodopa/Carbidopa (100/25 mg tres veces al día alejado de comidas ricas en proteínas), titulando la dosis según respuesta clínica, garantizado por el programa GES N° 67. Diferir el tratamiento o iniciar antipsicóticos está formalmente proscrito.",
    keyPoints: [
      "El diagnóstico de la Enfermedad de Parkinson es estrictamente clínico: requiere la presencia obligatoria de Bradicinesia sumada a Temblor de Reposo (4-6 Hz) y/o Rigidez en rueda dentada.",
      "El temblor parkinsoniano característico es de reposo, asimétrico al inicio (\"cuenta monedas\") y disminuye o desaparece transitoriamente con el movimiento voluntario.",
      "Los síntomas no motores premotores (hiposmia, trastorno conductual del sueño REM y constipación severa) preceden por años o décadas al inicio de las manifestaciones motoras.",
      "La presencia de caídas tempranas (< 3 años), parálisis de la mirada vertical hacia abajo o disautonomía severa precoz son banderas rojas que obligan a sospechar síndromes Parkinson-Plus.",
      "En pacientes mayores de 65-70 años, el tratamiento de inicio de elección es Levodopa/Carbidopa; en menores de 65 años se pueden considerar agonistas dopaminérgicos para retrasar fluctuaciones motoras.",
      "El fenómeno de fin de dosis (\"wearing-off\") se maneja fraccionando las tomas de Levodopa o asociando un inhibidor de la COMT como Entacapona (200 mg con cada toma)."
],
    questions: [
      {
            "stem": "El temblor de la enfermedad de Parkinson se caracteriza por:",
            "options": [
                  {
                        "id": "A",
                        "text": "Ser postural"
                  },
                  {
                        "id": "B",
                        "text": "Asociarse a aumento del pestañeo"
                  },
                  {
                        "id": "C",
                        "text": "Ser de intención"
                  },
                  {
                        "id": "D",
                        "text": "Presentarse en reposo y ceder con realizar movimientos"
                  },
                  {
                        "id": "E",
                        "text": "Asociarse a una marcha con aumento de la base de sustentación y pasos largos"
                  }
            ],
            "correcta": "D",
            "explicacion": "La respuesta correcta, D) \"Presentarse en reposo y ceder con realizar movimientos\", describe de manera precisa el temblor característico de la enfermedad de Parkinson. Este es el síntoma motor cardinal más distintivo y a menudo el primero en manifestarse. Se conoce como temblor de reposo porque aparece cuando la extremidad (brazo, pierna o mano) está completamente relajada y apoyada, es decir, sin ninguna actividad muscular voluntaria ni sosteniéndose contra la gravedad. Típicamente, tiene una frecuencia de 4 a 6 Hz y se describe comúnmente como un \"signo de contar monedas\" o \"pill-rolling\" por el movimiento repetitivo del pulgar y el índice.\n\nUna característica fundamental de este temblor es que disminuye o incluso desaparece por completo durante el movimiento voluntario o intencional de la extremidad afectada, y reaparece cuando la extremidad vuelve al reposo. También suele desaparecer durante el sueño. Aunque algunos pacientes pueden desarrollar un componente postural o cinético leve con el avance de la enfermedad, el temblor de reposo es el rasgo distintivo y el principal criterio semiológico para su diagnóstico diferencial con otros trastornos del movimiento. Su intensidad puede variar, exacerbándose con el estrés emocional o la fatiga.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
      },
      {
            "stem": "¿Cuál de los siguientes hallazgos es muy frecuente en la enfermedad de\nParkinson idiopática?:",
            "options": [
                  {
                        "id": "A",
                        "text": "Demencia al inicio"
                  },
                  {
                        "id": "B",
                        "text": "Mioclonías."
                  },
                  {
                        "id": "C",
                        "text": "Blefaroespasmo."
                  },
                  {
                        "id": "D",
                        "text": "Retrocollis."
                  },
                  {
                        "id": "E",
                        "text": "Pérdida de movimientos asociados en la marcha."
                  }
            ],
            "correcta": "E",
            "explicacion": "La pérdida de movimientos asociados en la marcha, como la reducción o ausencia del braceo de los brazos, es uno de los signos motores cardinales y tempranos de la Enfermedad de Parkinson idiopática. Este fenómeno es una manifestación de la bradicinesia/acinesia, que es la lentitud o dificultad para iniciar y ejecutar el movimiento, y la pérdida de movimientos automáticos. En la marcha parkinsoniana típica, además de la postura encorvada y el arrastre de pies, es característico observar cómo los brazos no se balancean de forma rítmica y simétrica como lo harían en una persona sana, o incluso permanecen rígidamente pegados al cuerpo.\n\nEste hallazgo es muy frecuente porque se relaciona directamente con el déficit dopaminérgico en los ganglios basales que subyace a la patogenia de la enfermedad. La alteración en el circuito motor provoca una dificultad para la ejecución fluida y coordinada de movimientos automáticos y semi-automáticos, de los cuales el braceo es un excelente ejemplo. La asimetría en el braceo es, de hecho, uno de los signos tempranos que a menudo son notados por familiares o el propio paciente, incluso antes de que se establezca un diagnóstico formal.\n\nPor lo tanto, la pérdida de movimientos asociados en la marcha, especialmente el braceo, es un criterio diagnóstico clave y un hallazgo motor muy prevalente y característico en la Enfermedad de Parkinson idiopática, presente desde las etapas iniciales de la enfermedad en la mayoría de los pacientes.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
      },
      {
            "stem": "¿Cuál de los siguientes medicamentos produce parkinsonismo por drogas\ncon más frecuencia?",
            "options": [
                  {
                        "id": "A",
                        "text": "Clozapina"
                  },
                  {
                        "id": "B",
                        "text": "Risperidona"
                  },
                  {
                        "id": "C",
                        "text": "Carbamacepina"
                  },
                  {
                        "id": "D",
                        "text": "Ergotamina"
                  },
                  {
                        "id": "E",
                        "text": "Amitriptilina"
                  }
            ],
            "correcta": "B",
            "explicacion": "La respuesta correcta es la Risperidona. La Risperidona es un antipsicótico atípico que ejerce su efecto bloqueando los receptores de dopamina D2 en el sistema nervioso central, particularmente en los ganglios basales. Este bloqueo dopaminérgico, similar al que ocurre en la enfermedad de Parkinson idiopática, puede manifestarse clínicamente como parkinsonismo inducido por fármacos. Los síntomas suelen incluir bradicinesia (lentitud de movimiento), rigidez muscular, temblor en reposo y, en algunos casos, inestabilidad postural. La incidencia de parkinsonismo con la Risperidona es relativamente alta en comparación con otros antipsicóticos atípicos, aunque generalmente menor que con los antipsicóticos típicos de alta potencia.\n\nEl riesgo de desarrollar parkinsonismo inducido por fármacos con Risperidona está relacionado con la dosis y la duración del tratamiento, así como con factores individuales del paciente como la edad y la presencia de otros trastornos neurológicos. Es importante destacar que, si bien la Clozapina (opción a) también es un antipsicótico atípico, tiene un riesgo significativamente menor de parkinsonismo, e incluso puede ser beneficiosa en algunos pacientes con Parkinson.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
      },
      {
            "stem": "Una paciente de 22 años consulta por presentar desde una semana antes\nptosis palpebral izquierda, sin dolor, con diplopía en al mirada lateral\nizquierda. En la exploración física se comprueba la existencia de una ptosis\nizquierda, una paresia de la abducción del ojo izquierdo, con unas pupilas\nisocóricas y normorreactivas de la luz. ¿Qué enfermedad es más probable que\npadezca la paciente?:",
            "options": [
                  {
                        "id": "A",
                        "text": "Una neuritis óptica izquierda en relación con Esclerosis Múltiple."
                  },
                  {
                        "id": "B",
                        "text": "Un síndrome de Horner."
                  },
                  {
                        "id": "C",
                        "text": "Una Miastenia gravis."
                  },
                  {
                        "id": "D",
                        "text": "Una parálisis del III par izquierdo."
                  },
                  {
                        "id": "E",
                        "text": "Una miopatía hipertiroidea con afectación de la musculatura extraocular."
                  }
            ],
            "correcta": "C",
            "explicacion": "La presentación clínica de la paciente es altamente sugestiva de Miastenia gravis (MG), específicamente de la forma ocular. La Miastenia gravis es una enfermedad autoinmune que afecta la unión neuromuscular, resultando en debilidad muscular fluctuante. Los síntomas oculares son la manifestación inicial en la mayoría de los casos y se caracterizan por ptosis (caída del párpado) y diplopía (visión doble), que empeoran con la fatiga y mejoran con el reposo. En este caso, la paciente presenta ptosis palpebral izquierda y diplopía en la mirada lateral izquierda debido a paresia de la abducción del ojo izquierdo, lo que indica debilidad del músculo recto lateral izquierdo (inervado por el VI par craneal).\n\nUn hallazgo crucial que orienta fuertemente hacia la Miastenia gravis y permite descartar otras causas de oftalmoplejía es la normalidad de las pupilas (isocóricas y normorreactivas a la luz). La Miastenia gravis afecta únicamente la musculatura estriada voluntaria y nunca las fibras autonómicas que controlan la pupila, ya que estas últimas poseen receptores muscarínicos de acetilcolina que no son el blanco de los autoanticuerpos miasténicos. La edad joven de la paciente (22 años) y el curso subagudo de los síntomas (\"desde una semana antes\") también son consistentes con el perfil de la Miastenia gravis.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
      }
]
  },
  // ==========================================================================
  // TEMA 10.12: PARKINSONISMOS SECUNDARIOS, FARMACOLÓGICOS Y SÍNDROMES PARKINSON-PLUS
  // ==========================================================================
  {
    id: "neuro-12",
    classId: "neuro-12",
    tier: 2,
    blockNum: 3,
    blockName: "Trastornos del Movimiento y Enfermedades Neurodegenerativas",
    topicLabel: "10.12",
    title: "Parkinsonismos Secundarios, Farmacológicos y Síndromes Parkinson-Plus",
    perfilCode: "1.10.1.006",
    dx: "Sospecha",
    tx: "Inicial",
    seg: "Derivar",
    ges: "Derivación preferente a nivel secundario ante banderas rojas de parkinsonismo atípico (parálisis de la mirada vertical, caídas precoces, disautonomía severa precoz o nula respuesta a Levodopa).",
    reconstrucciones: "EUNACOM Diciembre 2024 (Q#102) · EUNACOM Enero 2023 (Q#88)",
    frecuencia: "Alta rentabilidad · Diferenciación clave entre parkinsonismo farmacológico reversible y síndromes atípicos degenerativos",
    svg: null,
    algoTitle: null,
    diagram: null,
    contexto: "Distinguir entre la Enfermedad de Parkinson idiopática y las etiologías secundarias o síndromes parkinsonianos atípicos (\"Parkinson-Plus\") es una de las habilidades clínicas más exigidas en el EUNACOM. El parkinsonismo inducido por fármacos es la causa reversible más prevalente en la práctica médica general, debida al bloqueo de receptores estriatales D2 por antieméticos (Metoclopramida), neurolépticos típicos (Haloperidol) o antagonistas del calcio vasodilatadores (Flunarizina, Cinarizina), manifestándose clásicamente de forma bilateral y simétrica. Por otra parte, los síndromes Parkinson-Plus (Parálisis Supranuclear Progresiva, Atrofia Multisistémica y Degeneración Corticobasal) constituyen entidades neurodegenerativas agresivas caracterizadas por nula o transitoria respuesta a Levodopa, ausencia de temblor de reposo clásico y presencia precoz de banderas rojas.",
    contentSections: [
      {
            "subhead": "1. Parkinsonismo Inducido por Fármacos: Antieméticos, Neurolépticos y Bloqueadores de Calcio",
            "paragraphs": [
                  "El <strong>Parkinsonismo Inducido por Fármacos (DIP: Drug-Induced Parkinsonism)</strong> representa la segunda causa más frecuente de parkinsonismo general tras la EP idiopática y la primera causa de parkinsonismo reversible en adultos mayores.",
                  "<strong>Fármacos causales más frecuentes en Chile:</strong>",
                  "• <em>Antieméticos y procinéticos:</em> <strong>Metoclopramida</strong> (antagonista D2 potente que cruza la barrera hematoencefálica; causa común de parkinsonismo iatrogénico grave por uso crónico en dispepsia o gastroparesia) y <strong>Sulpirida / Levosulpirida</strong>. Nota: la <em>Domperidona</em> tiene mínimo paso por la BHE y menor riesgo extrapiramidal.",
                  "• <em>Antipsicóticos típicos y atípicos:</em> <strong>Haloperidol</strong>, Clorpromazina, Flufenazina y, entre los atípicos, <strong>Risperidona</strong> en dosis > 2-4 mg/día. (Los antipsicóticos con menor perfil extrapiramidal son Quetiapina y Clozapina).",
                  "• <em>Bloqueadores de canales de calcio con acción dopaminérgica:</em> <strong>Flunarizina y Cinarizina</strong>, frecuentemente prescritos de manera inapropiada durante meses o años para \"mareos o vértigo\" en ancianos.",
                  "<strong>Diferencias semiológicas cardinales con EP:</strong> El parkinsonismo farmacológico se presenta de forma <strong>subaguda, bilateral y simétrica</strong>, con predominio de bradicinesia y rigidez plástica, temblor postural/cinético más que temblor de reposo, escasa o nula micrografía, y <strong>ausencia de síntomas no motores prodrómicos</strong> (olfato y sueño REM normales). La conducta es la <strong>suspensión gradual del fármaco causal</strong>; la remisión completa suele tardar entre 4 semanas y varios meses (véase Tabla 10.12: Diagnóstico Diferencial de Parkinsonismos Secundarios, Farmacológicos y Parkinson-Plus)."
            ]
      },
      {
            "subhead": "2. Parálisis Supranuclear Progresiva (PSP / Síndrome de Steele-Richardson-Olszewski)",
            "paragraphs": [
                  "La <strong>Parálisis Supranuclear Progresiva (PSP)</strong> es una tauopatía neurodegenerativa con depósito de proteína tau de 4 repeticiones (4R-tau) en ganglios basales, tronco encefálico y cerebelo.",
                  "<strong>Tríada clínica cardinal de la PSP:</strong>",
                  "1) <strong>Parálisis supranuclear de la mirada vertical:</strong> Limitación precoz de los movimientos oculares sacádicos verticales, afectando primero la <strong>mirada hacia abajo (infradiversión)</strong> y luego hacia arriba. Es de origen supranuclear, por lo que el reflejo oculocefálico (\"ojos de muñeca\") está conservado al forzar el movimiento de la cabeza.",
                  "2) <strong>Inestabilidad postural y caídas precoces:</strong> Falla catastrófica de reflejos posturales en el <strong>primer año de evolución</strong>, con caídas típicamente <em>hacia atrás (retropulsión espontánea)</em>.",
                  "3) <strong>Rigidez axial prominente y facies de sorpresa:</strong> Hiperextensión cervical (retrocollis), rigidez de tronco superior a la de extremidades, disartria espástica temprana y marcada retracción de párpados con ojos muy abiertos (\"signo de Boston\" o facie asustada/atónita).",
                  "• <em>Neuroimagen:</em> La RM de cerebro muestra atrofia mesencefálica marcada con respeto protuberancial relativo, conformando el patognomónico <strong>\"signo del colibrí\" o \"signo del pingüino\"</strong> en corte sagital T1. La respuesta a Levodopa es nula o insignificante."
            ]
      },
      {
            "subhead": "3. Atrofia Multisistémica (AMS): Disautonomía Precoz, Estridor Laríngeo y Signos Cerebelosos",
            "paragraphs": [
                  "La <strong>Atrofia Multisistémica (AMS)</strong> es una alfa-sinucleinopatía agresiva del adulto (> 50-60 años) definida por el depósito de alfa-sinucleína en inclusiones citoplasmáticas gliales de oligodendrocitos (GCI), con pérdida neuronal en estriado, sustancia negra, núcleos pontinos y médula espinal autonómica.",
                  "Se clasifica clínicamente según el fenotipo motor predominante en:",
                  "• <strong>AMS tipo Parkinsoniana (AMS-P):</strong> Parkinsonismo rígido-acinético simétrico rápidamente progresivo, con pobre y transitoria respuesta a Levodopa, y temblor postural o mioclónico.",
                  "• <strong>AMS tipo Cerebelosa (AMS-C):</strong> Síndrome cerebeloso progresivo con ataxia de la marcha, ataxia apendicular, nistagmo y disartria cerebelosa escandida.",
                  "• <strong>Criterio cardinal compartido: Falla autonómica temprana y severa:</strong> Hipotensión ortostática grave y refractaria (caída PAS > 30 mmHg o PAD > 15 mmHg en primeros 3 min) sin compensación de taquicardia refleja, e <strong>incontinencia urinaria precoz con residuo posmiccional elevado o disfunción eréctil precoz</strong>.",
                  "• <strong>Signos de alarma vital:</strong> <em>Estridor laríngeo nocturno</em> por distonía/parálisis de cuerdas vocales en aducción (riesgo inminente de asfixia y muerte súbita; requiere CPAP o traqueostomía de urgencia).",
                  "• <em>Neuroimagen:</em> RM cerebral muestra atrofia pontina con degeneración de fibras pontocerebelosas transversas conformando el <strong>\"signo de la cruz caliente\" (hot cross bun sign)</strong> en cortes axiales T2."
            ]
      },
      {
            "subhead": "4. Degeneración Corticobasal (DCB) y Parkinsonismo Vascular Subcortical",
            "paragraphs": [
                  "• <strong>Degeneración Corticobasal (DCB):</strong> Tauopatía caracterizada por una <strong>asimetría extrema y progresiva</strong>. Combina parkinsonismo rígido-acinético refractario a Levodopa con signos de disfunción cortical mayor: 1) <em>Apraxia ideomotora severa</em> en una extremidad (incapacidad de realizar actos motores aprendidos como usar una llave o peinarse pese a fuerza normal); 2) <em>Fenómeno del miembro alienígena (mano ajena)</em>: la extremidad parece actuar de manera independiente a la voluntad del paciente, agarrando objetos o interfiriendo con la otra mano; 3) Mioclonías corticales reflejas al estímulo táctil y distonía focal fija en flexión.",
                  "• <strong>Parkinsonismo Vascular (Pseudo-Parkinsonismo de Tronco Inferior):</strong> Secundaria a múltiples infartos lacunares subcorticales bilaterales o leucoaraiosis isquémica microangiopática severa en pacientes con HTA crónica y diabetes. Se manifiesta clínicamente como un <strong>\"parkinsonismo del tren inferior\"</strong>: marcha a pequeños pasos con los pies \"pegados al suelo\" (marcha magnética), base de sustentación ensanchada e inestabilidad, con llamativa <em>conservación del braceo y ausencia de temblor en miembros superiores</em>. Al examen neurológico destacan reflejos osteotendinosos exaltados, signo de Babinski bilateral e incontinencia urinaria."
            ]
      }
],
    table: {
      "title": "Tabla 10.12: Diagnóstico Diferencial de Parkinsonismos Secundarios, Farmacológicos y Parkinson-Plus",
      "headers": [
            "Entidad Clínica",
            "Etiología / Mecanismo",
            "Presentación Motora Cardinal",
            "Banderas Rojas y Signos Específicos",
            "Respuesta a L-Dopa"
      ],
      "rows": [
            [
                  "Parkinson Inducido por Fármacos",
                  "Bloqueo D2 estriatal (Metoclopramida, Haloperidol, Flunarizina, Risperidona)",
                  "Bilateral, rigidez y bradicinesia simétricas; temblor postural/acción",
                  "Antecedente farmacológico claro · Ausencia de hiposmia · Remisión al suspender",
                  "Nula / contraindicada (tratamiento: suspender fármaco causal)"
            ],
            [
                  "Parálisis Supranuclear Progresiva (PSP)",
                  "Tauopatía (4R-tau) en mesencéfalo, ganglios basales y núcleos subtalámicos",
                  "Rigidez axial prominente en extensión (retrocollis); marcha rígida",
                  "Parálisis de mirada vertical hacia abajo · Caídas tempranas hacia atrás · Signo colibrí en RM",
                  "Mala / nula (< 10-15% transitoria leve)"
            ],
            [
                  "Atrofia Multisistémica (AMS)",
                  "Alfa-sinucleinopatía en células gliales oligodendrogliales (inclusiones GCI)",
                  "Parkinsonismo rígido (AMS-P) o ataxia cerebelosa progresiva (AMS-C)",
                  "Disautonomía severa precoz (hipotensión ortostática grave, vejiga neurogénica) · Estridor laríngeo · Signo cruz caliente",
                  "Escasa / transitoria"
            ],
            [
                  "Degeneración Corticobasal (DCB)",
                  "Tauopatía cortical y subcortical asimétrica",
                  "Parkinsonismo marcadamente asimétrico con distonía focal fija de la mano",
                  "Apraxia ideomotora severa · Fenómeno de mano ajena (alien limb) · Mioclonías corticales reflejas",
                  "Completamente nula"
            ],
            [
                  "Parkinsonismo Vascular",
                  "Enfermedad isquémica microangiopática subcortical (infartos lacunares múltiples)",
                  "Parkinsonismo del tren inferior: marcha magnética a pequeños pasos, base ancha",
                  "Preservación del braceo en extremidades superiores · Hiperreflexia y Babinski (+) · Leucoaraiosis extensa en TAC/RM",
                  "Generalmente nula o muy pobre"
            ],
            [
                  "Enfermedad de Parkinson Idiopática",
                  "Pérdida neuronal nigroestriatal con cuerpos de Lewy (alfa-sinucleína)",
                  "Asimétrico al inicio: bradicinesia + temblor de reposo (4-6 Hz) + rueda dentada",
                  "Hiposmia y trastorno del sueño REM prodrómicos · Caídas sólo en etapas tardías",
                  "Excelente y sostenida (> 70% mejoría inicial)"
            ]
      ]
},
    severityTable: null,
    treatmentTable: null,
    vignette: "Mujer de 74 años, con antecedentes de hipertensión arterial y síndrome vertiginoso recurrente de larga data, es traída por sus familiares por notar que desde hace 4 meses se mueve con extrema lentitud, presenta dificultad para levantarse del sillón y sus manos tiemblan constantemente al tomar la taza o peinarse. Al revisar su tratamiento farmacológico habitual, destaca el uso de Losartán 50 mg/día, Hidroclorotiazida 25 mg/día, Flunarizina 10 mg/noche (iniciada hace 9 meses para sus mareos) y Metoclopramida 10 mg tres veces al día antes de las comidas (prescrita hace 6 meses por sensación de plenitud gástrica). Al examen neurológico: orientada, facie inexpresiva y fija (hipomimia bilateral), bradicinesia simétrica moderada en miembros superiores, rigidez plástica en rueda dentada bilateral y simétrica en muñecas, y temblor fino postural de ambas manos sin temblor de reposo. En la marcha presenta pasos cortos simétricos con reducción bilateral del braceo. No presenta parálisis de la mirada vertical ni caídas.",
    explicacion: "El cuadro corresponde a un Parkinsonismo Inducido por Fármacos (parkinsonismo farmacológico secundario), generado por la combinación de dos bloqueadores dopaminérgicos: Metoclopramida (antiemético con potente antagonismo D2 central) y Flunarizina (antagonista del calcio con bloqueo de receptores dopaminérgicos estriatales, causa frecuente de parkinsonismo y depresión en adultos mayores). Las claves semiológicas que diferencian este cuadro de la EP idiopática son: 1) Inicio subagudo tras la prescripción de los fármacos; 2) Afectación bilateral rigurosamente simétrica desde el comienzo; 3) Ausencia de temblor de reposo asimétrico tipo \"cuenta monedas\", predominando el temblor postural; y 4) Antecedente farmacológico explícito. La conducta inmediata es suspender de forma gradual tanto la Flunarizina como la Metoclopramida y observar la evolución clínica, advirtiendo a la familia que la recuperación motora completa puede tardar varias semanas o meses.",
    keyPoints: [
      "El parkinsonismo inducido por fármacos es la causa más común de parkinsonismo secundario y se caracteriza por debut subagudo, rigidez y bradicinesia bilaterales y simétricas.",
      "Los fármacos más frecuentemente implicados en la clínica chilena son Metoclopramida, Sulpirida, Haloperidol, Risperidona y los vasodilatadores Cinarizina y Flunarizina.",
      "La Parálisis Supranuclear Progresiva (PSP) se reconoce por la tríada de parálisis de la mirada vertical hacia abajo, caídas precoces hacia atrás en el primer año y rigidez axial.",
      "La Atrofia Multisistémica (AMS) cursa con disautonomía severa precoz (hipotensión ortostática grave, vejiga neurogénica), estridor laríngeo nocturno y signos cerebelosos o parkinsonianos refractarios.",
      "La Degeneración Corticobasal (DCB) se manifiesta con parkinsonismo extremo asimétrico, apraxia ideomotora severa y el patognomónico fenómeno de la mano ajena (alien hand)."
],
    questions: [
      {
            "stem": "Está usted evaluando una prueba diagnóstica y finalmente se encuentra en\nla siguiente tabla:\nEnfermedad SÏ NO\nPrueba Positiva 80 100\nPrueba Negativa 20 800\nA partir de ella y redondeando decimales, señale cuál de las siguientes\nafirmaciones es verdadera:",
            "options": [
                  {
                        "id": "A",
                        "text": "El valor predictivo positivo es del 56% y el valor predictivo negativo del 13%."
                  },
                  {
                        "id": "B",
                        "text": "El valor predictivo positivo es del 44% y el valor predictivo negativo del 98%."
                  },
                  {
                        "id": "C",
                        "text": "El valor predictivo positivo es del 80% y el valor predictivo negativo del 90%."
                  },
                  {
                        "id": "D",
                        "text": "El valor predictivo positivo es del 80% y el valor predictivo negativo del 11%."
                  },
                  {
                        "id": "E",
                        "text": "El valor predictivo positivo es del 10% y el valor predictivo negativo del 20%."
                  }
            ],
            "correcta": "B",
            "explicacion": "Para resolver esta pregunta, es fundamental comprender las definiciones y fórmulas del Valor Predictivo Positivo (VPP) y el Valor Predictivo Negativo (VPN), que son medidas de la utilidad de una prueba diagnóstica en la práctica clínica. Estas medidas dependen de la prevalencia de la enfermedad y se calculan a partir de los resultados de la prueba en individuos con y sin la enfermedad, como se presenta en la tabla de contingencia.\n\nLa tabla proporcionada se interpreta de la siguiente manera:\n- Verdaderos Positivos (VP): Individuos con la enfermedad que dan positivo en la prueba. En este caso: 80.\n- Falsos Positivos (FP): Individuos sin la enfermedad que dan positivo en la prueba. En este caso: 100.\n- Falsos Negativos (FN): Individuos con la enfermedad que dan negativo en la prueba. En este caso: 20.\n- Verdaderos Negativos (VN): Individuos sin la enfermedad que dan negativo en la prueba. En este caso: 800.\n\nEl Valor Predictivo Positivo (VPP) es la probabilidad de que un paciente que ha obtenido un resultado positivo en la prueba realmente tenga la enfermedad. Su fórmula es: VPP = VP / (VP + FP).\nCalculando el VPP:\nVPP = 80 / (80 + 100) = 80 / 180 = 0.4444...\nRedondeado a porcentaje: 44%.\n\nEl Valor Predictivo Negativo (VPN) es la probabilidad de que un paciente que ha obtenido un resultado negativo en la prueba realmente no tenga la enfermedad. Su fórmula es: VPN = VN / (FN + VN).\nCalculando el VPN:\nVPN = 800 / (20 + 800) = 800 / 820 = 0.9756...\nRedondeado a porcentaje: 98%.\nPor lo tanto, la afirmación verdadera es que el valor predictivo positivo es del 44% y el valor predictivo negativo del 98%, lo que corresponde a la opción B.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
      },
      {
            "stem": "Para determinar la relevancia de una enfermedad infecciosa grave\nconviene ocupar:",
            "options": [
                  {
                        "id": "A",
                        "text": "Mortalidad general"
                  },
                  {
                        "id": "B",
                        "text": "Mortalidad específica"
                  },
                  {
                        "id": "C",
                        "text": "Incidencia"
                  },
                  {
                        "id": "D",
                        "text": "Prevalencia"
                  },
                  {
                        "id": "E",
                        "text": "Tasa de ataque"
                  }
            ],
            "correcta": "C",
            "explicacion": "La incidencia es la medida epidemiológica más adecuada para determinar la \"relevancia\" de una enfermedad infecciosa grave. Se define como la tasa de aparición de nuevos casos de una enfermedad en una población específica durante un período determinado. Para una enfermedad infecciosa, la incidencia nos informa directamente sobre la velocidad a la que se está propagando y el número de personas que están contrayendo la infección recientemente.\n\nConocer la incidencia de una enfermedad infecciosa grave es crucial para la salud pública y la toma de decisiones clínicas. Una alta incidencia indica que la enfermedad está activamente presente en la comunidad, que la transmisión es significativa y que existe un riesgo considerable de que un mayor número de personas enfermen. Esto permite a las autoridades sanitarias y a los profesionales médicos evaluar la magnitud del problema actual, predecir futuras cargas de enfermedad, implementar medidas de control y prevención (como campañas de vacunación, aislamiento o tratamiento temprano) y asignar recursos de manera efectiva.\n\nEn resumen, la incidencia capta la dinámica de la enfermedad en tiempo real, reflejando su impacto y la urgencia de su abordaje en términos de nuevos contagios. Para una enfermedad infecciosa, especialmente una grave, su \"relevancia\" se asocia primariamente con su capacidad de infectar a nuevas personas y expandirse en la población, siendo la incidencia la métrica que mejor describe este fenómeno.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.006"
      }
]
  },
  // ==========================================================================
  // TEMA 10.13: TEMBLOR ESENCIAL VS PARKINSONIANO Y DISTONÍAS AGUDAS POR NEUROLÉPTICOS
  // ==========================================================================
  {
    id: "neuro-13",
    classId: "neuro-13",
    tier: 2,
    blockNum: 3,
    blockName: "Trastornos del Movimiento y Enfermedades Neurodegenerativas",
    topicLabel: "10.13",
    title: "Temblor Esencial vs Parkinsoniano y Distonías Agudas por Neurolépticos",
    perfilCode: "1.10.1.026",
    dx: "Específico",
    tx: "Completo",
    seg: "Control",
    ges: "Manejo integral ambulatorio en atención primaria y nivel secundario · Tratamiento farmacológico con betabloqueadores y derivación urgente ante emergencias extrapiramidales agudas.",
    reconstrucciones: "EUNACOM Julio 2025 (Q#71) · EUNACOM Julio 2023 (Q#105) · EUNACOM Diciembre 2022 (Q#19)",
    frecuencia: "Alta frecuencia · Comparación clásica de temblores y urgencias extrapiramidales inducidas por fármacos",
    svg: null,
    algoTitle: "Algoritmo de Diagnóstico Diferencial de Temblores y Conducta Urgente en Distonía Aguda",
    diagram: flow('Algoritmo de Diagnóstico Diferencial de Temblores y Conducta en Distonía', [
      { t: 'Evaluación Semiológica del Trastorno del Movimiento', s: 'Inspección de manos, cabeza y voz en reposo, mantención de postura y acción intencional', type: 'acc' },
      { k: 'split', q: '¿Momento de Aparición y Características del Temblor?', s: 'Diferenciación entre activación cinética/postural vs temblor estático de reposo',
        ll: 'Temblor Postural / Acción (Bilateral Simétrico)',
        left: { t: 'Temblor Esencial (8-12 Hz)', s: 'Mejora con alcohol · Antecedente familiar · Respeta reposo · Tratamiento: Propranolol o Primidona', type: 'acc' },
        rl: 'Temblor de Reposo (4-6 Hz Asimétrico)',
        right: { t: 'Temblor Parkinsoniano', s: 'Marcha con hipocinesia · Rueda dentada · Desaparece con movimiento voluntario · Iniciar L-Dopa', type: 'dec' }
      },
      { t: 'Urgencia Extrapiramidal: Distonía Aguda por Fármacos', s: 'Espasmo doloroso cervical (tortícolis), crisis oculógira o trismus tras neuroléptico o metoclopramida', type: 'crit' },
      { t: 'Tratamiento de Elección Inmediato en Distonía Aguda', s: 'Biperideno 2.5 a 5 mg IM o EV lento (anticolinérgico) · Respuesta en 10-15 min · Mantener VO x 48 h', type: 'acc' }
    ]),
    contexto: "El temblor es el movimiento involuntario rítmico oscilatorio más frecuente en la práctica médica. El desafío primordial para el médico general radica en diferenciar con precisión el Temblor Esencial (el trastorno del movimiento más prevalente a nivel global, caracterizado por ser postural y cinético, bilateral, familiar y con respuesta al alcohol) del Temblor Parkinsoniano (estático de reposo, asimétrico, con bradicinesia y rigidez). Paralelamente, las Distonías Agudas Inducidas por Fármacos representan una urgencia neurológica extrapiramidal de consulta habitual en los servicios de urgencia, originadas por el bloqueo dopaminérgico agudo tras antieméticos (Metoclopramida) o neurolépticos (Haloperidol), cuyo diagnóstico inmediato y tratamiento específico con anticolinérgicos centrales (Biperideno) son preguntas obligatorias del EUNACOM.",
    contentSections: [
      {
            "subhead": "1. Semiología Diferencial del Temblor: Reposo vs Acción Postural vs Intención Cinética",
            "paragraphs": [
                  "La aproximación diagnóstica al temblor se fundamenta en determinar la <strong>condición de activación motora</strong> en la que se manifiesta (véase Figura 10.13: Algoritmo de Diagnóstico Diferencial de Temblores y Conducta en Distonía):",
                  "• <strong>Temblor de Reposo:</strong> Ocurre cuando la musculatura del segmento corporal se encuentra totalmente relajada y apoyada contra la gravedad (por ejemplo, manos sobre el regazo). Frecuencia: <strong>4 a 6 Hz</strong>. Característico de la <strong>Enfermedad de Parkinson</strong>; desaparece transitoriamente con el inicio del movimiento intencional activo.",
                  "• <strong>Temblor de Acción - Postural:</strong> Se desencadena al mantener voluntariamente una postura antigravitatoria (por ejemplo, extender los brazos al frente con las manos abiertas). Típico del <strong>Temblor Esencial</strong> y del temblor fisiológico exacerbado.",
                  "• <strong>Temblor de Acción - Cinético / Intencional:</strong> Aparece durante cualquier movimiento voluntario guiado por una meta, intensificándose dramáticamente al aproximarse al blanco (\"dismetría con temblor de intención\" en la prueba índice-nariz). Es el sello de la <strong>patología cerebelosa</strong> (esclerosis múltiple, infartos cerebelosos, intoxicación por fenitoína o alcohol)."
            ]
      },
      {
            "subhead": "2. Temblor Esencial: Fisiopatología, Genética y Protocolo Terapéutico Escalonado",
            "paragraphs": [
                  "El <strong>Temblor Esencial (TE)</strong> es el trastorno del movimiento más común del ser humano (prevalencia de hasta 4-5% en mayores de 65 años). Posee un claro patrón de <strong>herencia autosómica dominante con penetrancia variable</strong> en más del 50-60% de los pacientes (\"temblor familiar esencial\"). Fisiopatológicamente se atribuye a una oscilación rítmica anómala en el circuito córtico-olivo-cerebelo-talámico.",
                  "<strong>Rasgos clínicos cardinales:</strong>",
                  "• Temblor <strong>postural y cinético bilateral</strong> de extremidades superiores, típicamente simétrico o discretamente asimétrico, con frecuencia de <strong>8 a 12 Hz</strong> (disminuye en frecuencia y aumenta en amplitud con la edad).",
                  "• Dificulta actividades cotidianas de motricidad fina: comer sopa con cuchara, beber agua de un vaso lleno sin derramar, abotonarse o escribir (grafismo con líneas espiculadas y temblorosas en la <em>Espiral de Arquímedes</em>).",
                  "• Frecuente afectación de la <strong>cabeza (titubeo cefálico \"no-no\" o \"sí-sí\")</strong> y de la laringe (voz trémula/temblorosa). <em>Regla de Oro:</em> El Temblor Esencial <strong>NO afecta las piernas en reposo</strong> (si tiembla una pierna en reposo, es Parkinson).",
                  "• <strong>Respuesta paradójica al etanol:</strong> La ingesta de cantidades moderadas de alcohol (una copa de vino) produce una mejoría transitoria notable del temblor en más del 65-75% de los pacientes (marcador clínico diagnóstico de gran valor anamnésico).",
                  "• <strong>Examen neurológico rigurosamente normal:</strong> No existe bradicinesia, no hay rigidez en rueda dentada, los reflejos osteotendinosos son normales y la marcha es estable.",
                  "<strong>Tratamiento farmacológico de primera línea:</strong>",
                  "1) <strong>Propranolol:</strong> Betabloqueador no selectivo que actúa bloqueando receptores beta-2 periféricos en los husos neuromusculares. Dosis: 40 a 160 mg/día fraccionado en 2-3 tomas (contraindicado en asma bronquial, bloqueo AV y bradicardia severa).",
                  "2) <strong>Primidona:</strong> Anticonvulsivante barbitúrico. Dosis: 25 a 250 mg/noche (titular lentamente por riesgo de sedación y mareos). Ambas opciones reducen la amplitud del temblor en un 50-70% (véase Tabla 10.13: Diagnóstico Diferencial de Temblor Esencial, Parkinsoniano y Emergencias Extrapiramidales)."
            ]
      },
      {
            "subhead": "3. Diagnóstico Diferencial con Temblor Fisiológico Exagerado y Temblor Parkinsoniano",
            "paragraphs": [
                  "• <strong>Temblor Fisiológico Exagerado:</strong> Temblor postural fino de alta frecuencia (10 a 12 Hz), transitorio y reversible, secundario a hiperactividad adrenérgica. Causas: ansiedad aguda, consumo de cafeína, <strong>hipertiroidismo</strong> (descartar con TSH), abstinencia alcohólica, o fármacos beta-agonistas (salbutamol), litio, ácido valproico, corticoides o antidepresivos tricíclicos.",
                  "• <strong>Diferenciación TE vs Enfermedad de Parkinson:</strong> En la EP, el temblor es de <strong>reposo, asimétrico, cede con el movimiento voluntario</strong> y se asocia invariablemente a bradicinesia, hipomimia y rueda dentada; en el TE, el temblor es de <strong>acción/postural, bilateral simétrico, no cede con el movimiento</strong>, afecta con frecuencia la cabeza y no presenta bradicinesia ni rigidez."
            ]
      },
      {
            "subhead": "4. Distonías Agudas por Bloqueo Dopaminérgico: Crisis Oculógira, Tortícolis y Manejo con Biperideno",
            "paragraphs": [
                  "Las <strong>Distonías Agudas Inducidas por Fármacos</strong> son contracciones musculares tónicas involuntarias, sostenidas y sumamente dolorosas que ocurren de manera aguda (habitualmente dentro de las primeras 24 a 48 horas, o incluso minutos) tras la administración de un fármaco con acción antagonista de receptores de dopamina D2.",
                  "• <strong>Fisiopatología:</strong> El bloqueo agudo masivo de receptores D2 en el cuerpo estriado provoca una desinhibición colinérgica relativa con <strong>hiperactividad de la neurotransmisión muscarínica de acetilcolina</strong>.",
                  "• <strong>Fármacos gatillantes típicos en urgencias:</strong> <strong>Metoclopramida endovenosa</strong> (situación clásica EUNACOM: paciente joven que consulta por náuseas o vómitos tras transgresión alimentaria o cólico biliar y recibe metoclopramida EV), <strong>Haloperidol</strong>, Clorpromazina y antipsicóticos atípicos en dosis crecientes.",
                  "• <strong>Presentaciones clínicas cardinales:</strong>",
                  "1) <strong>Crisis Oculógira:</strong> Desviación forzada, espástica y conjugada de la mirada hacia arriba y afuera sostenida en el tiempo.",
                  "2) <strong>Tortícolis aguda / Retrocollis espasmódico:</strong> Contracción dolorosa e intensa del músculo esternocleidomastoideo con rotación forzada del cuello.",
                  "3) <strong>Distonía oromandibular y lingual:</strong> Protrusión forzada involuntaria de la lengua (con disartria y riesgo de compromiso de vía aérea), trismus o muecas faciales grotescas.",
                  "4) <strong>Opistótonos:</strong> Hiperextensión espástica de la columna vertebral.",
                  "• <strong>Tratamiento de Elección Inmediato (Regla de Oro EUNACOM):</strong> Administración inmediata de un <strong>anticolinérgico central: Biperideno 2.5 a 5 mg intramuscular o endovenoso lento</strong> (o difenhidramina 25-50 mg IM/EV). El alivio clínico es dramático y completo en <strong>10 a 15 minutos</strong>. Posteriormente se debe indicar Biperideno oral (2 mg c/8-12h) durante 24 a 48 horas para evitar la recurrencia distónica al reabsorberse el fármaco bloqueador."
            ]
      }
],
    table: {
      "title": "Tabla 10.13: Diagnóstico Diferencial de Temblor Esencial, Parkinsoniano y Emergencias Extrapiramidales",
      "headers": [
            "Característica Clínica",
            "Temblor Esencial",
            "Temblor Parkinsoniano",
            "Temblor Cerebeloso",
            "Distonía Aguda por Fármacos"
      ],
      "rows": [
            [
                  "Condición de Activación",
                  "Postural y Cinético (aparece al sostener objetos o postura)",
                  "Reposo (aparece con extremidad completamente relajada)",
                  "Intencional / Cinético terminal (al aproximarse al objetivo)",
                  "Contracción tónica sostenida involuntaria (postura fija dolorosa)"
            ],
            [
                  "Distribución Anatómica",
                  "Bilateral, manos (manos y cabeza; cuerdas vocales)",
                  "Asimétrico, manos (\"cuenta monedas\"); respeta cabeza",
                  "Unilateral o bilateral en extremidades; dismetría ipsilateral",
                  "Focal o segmentario: cuello (tortícolis), ojos (crisis oculógira), lengua"
            ],
            [
                  "Frecuencia Oscilatoria",
                  "8 a 12 Hz (rápido y fino)",
                  "4 a 6 Hz (lento y de mayor amplitud)",
                  "< 4 Hz (lento, grosero y ataxia)",
                  "No oscilatorio rítmico; postura fija espástica distónica"
            ],
            [
                  "Efecto del Alcohol",
                  "Mejoría transitoria notable (70% de los pacientes)",
                  "Sin efecto significativo",
                  "Sin efecto / puede empeorar ataxia",
                  "Sin efecto"
            ],
            [
                  "Signos Acompañantes",
                  "Ninguno; examen neurológico rigurosamente normal",
                  "Bradicinesia, rigidez en rueda dentada, marcha a pequeños pasos",
                  "Ataxia de la marcha, dismetría, disdiadococinesia, nistagmo",
                  "Dolor intenso por espasmo, angustia; sin fiebre ni rigidez generalizada"
            ],
            [
                  "Tratamiento de Elección",
                  "Propranolol (40-160 mg/día) o Primidona (25-250 mg/día)",
                  "Levodopa/Carbidopa o agonistas dopaminérgicos",
                  "Tratar causa subyacente; refractario a fármacos",
                  "Biperideno 2.5 a 5 mg IM o EV lento de urgencia"
            ]
      ]
},
    severityTable: null,
    treatmentTable: null,
    vignette: "Mujer de 23 años, sin antecedentes mórbidos, ingresa al servicio de urgencia por un cuadro de náuseas y dolor cólico epigástrico tras transgresión alimentaria rica en grasas. Se le administra analgesia y una ampolla de Metoclopramida 10 mg endovenosa en bolo. Cuarenta minutos más tarde, el médico es llamado con urgencia a la sala de observación porque la paciente presenta bruscamente incapacidad para bajar la mirada, con los ojos desviados de forma fija y sostenida hacia arriba (crisis oculógira), acompañada de dolorosa contractura espástica cervical con rotación fija del mentón hacia el hombro izquierdo (tortícolis espasmódica) y protrusión parcial de la lengua con dificultad para articular palabras. La paciente se encuentra sumamente angustiada y llorosa, con signos vitales normales: PA 125/75 mmHg, FC 82 lpm, afebril, con Glasgow 15 y pupilas isocóricas reactivas.",
    explicacion: "El cuadro corresponde a una Distonía Aguda Inducida por Fármacos secundaria a la administración endovenosa reciente de Metoclopramida. La metoclopramida es un antagonista central de los receptores dopaminérgicos D2 que, en pacientes jóvenes, puede gatillar un desbalance colinérgico agudo con hipertonía colinérgica masiva en los ganglios basales. Las manifestaciones son clásicas: crisis oculógira (desviación tónica involuntaria de la mirada vertical superior) y tortícolis espasmódica aguda. La conducta diagnóstica y terapéutica inmediata es administrar un anticolinérgico central: Biperideno 2.5 a 5 mg por vía intramuscular o endovenosa lenta (o Difenhidramina EV si no está disponible). La respuesta es casi instantánea (resolución en 10-15 minutos). No debe confundirse con una crisis epiléptica, un ACV o un cuadro psicógeno, ni requiere TAC de cerebro.",
    keyPoints: [
      "El Temblor Esencial es postural y de acción, bilateral y simétrico, de 8 a 12 Hz, con fuerte agregación familiar y mejoría característica con el alcohol.",
      "A diferencia de la enfermedad de Parkinson, el Temblor Esencial afecta con frecuencia la cabeza (titubeo cefálico) y la voz, pero NUNCA afecta las piernas en reposo ni presenta bradicinesia.",
      "El tratamiento farmacológico de primera línea del Temblor Esencial sintomático e invalidante es el Propranolol o la Primidona.",
      "La distonía aguda por fármacos es una emergencia extrapiramidal desencadenada por bloqueo D2 (Metoclopramida, Haloperidol), manifestándose como tortícolis, crisis oculógira y trismus.",
      "La conducta de elección inmediata en la distonía aguda es Biperideno 2.5 a 5 mg IM o EV lento, seguido de mantención oral por 24 a 48 horas."
],
    questions: [
      {
            "stem": "Un paciente de 72 años presenta temblor de las extremidades superiores,\nmayor a la izquierda. El temblor aumenta al adoptar una postura. Además se\nobserva temblor del mentón y de la cabeza y el resto del examen neurológico es\nnormal. El tratamiento de la patología descrita es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Antagonistas dopaminérgicos"
                  },
                  {
                        "id": "B",
                        "text": "Agonistas dopaminérgicos"
                  },
                  {
                        "id": "C",
                        "text": "Betabloqueo"
                  },
                  {
                        "id": "D",
                        "text": "Antipsicóticos"
                  },
                  {
                        "id": "E",
                        "text": "Anticonvulsivantes"
                  }
            ],
            "correcta": "C",
            "explicacion": "El cuadro clínico presentado por el paciente de 72 años es altamente sugestivo de un **Temblor Esencial (TE)**. Las características clave son: la edad del paciente (generalmente inicia en la adultez, pero es más notorio en personas mayores), el temblor que aumenta \"al adoptar una postura\" (lo que define un temblor postural, principal característica del TE), la afectación de las extremidades superiores (con predominio izquierdo, lo cual puede ocurrir en el TE, aunque a menudo es bilateral), y la presencia de temblor en el mentón y la cabeza (manifestaciones clásicas del TE). La ausencia de otros hallazgos neurológicos anormales descarta otras causas de temblor, como la enfermedad de Parkinson (que presentaría bradicinesia, rigidez y temblor de reposo) o temblor cerebeloso (que se asociaría a ataxia y temblor de intención).\n\nEl tratamiento de primera línea para el Temblor Esencial son los **betabloqueantes**, siendo el Propranolol el fármaco más utilizado y estudiado. Actúa reduciendo la amplitud del temblor en aproximadamente el 50-70% de los pacientes, aunque el mecanismo exacto no se comprende completamente. Se cree que su efecto está relacionado con el bloqueo de los receptores beta-adrenérgicos periféricos, aunque también puede tener un efecto central. La opción \"Betabloqueo\" se refiere directamente a esta clase de fármacos.\n\nPor lo tanto, ante un diagnóstico claro de Temblor Esencial basado en las características del temblor y la normalidad del resto del examen neurológico, el tratamiento más apropiado y de primera elección es el betabloqueo.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.026"
      },
      {
            "stem": "Un paciente de 67 años consulta por temblor de las extremidades\nsuperiores, que aumenta al adoptar alguna postura. Refiere que su madre\npresentó un cuadro similar. La marcha y la coordinación motora son normales\ny no presenta focalidad en el examen neurológico. El tratamiento de la\npatología descrita es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Antidepresivos tricíclicos"
                  },
                  {
                        "id": "B",
                        "text": "Agonistas dopaminérgicos"
                  },
                  {
                        "id": "C",
                        "text": "Betabloqueo"
                  },
                  {
                        "id": "D",
                        "text": "Antipsicóticos"
                  },
                  {
                        "id": "E",
                        "text": "Anticonvulsivantes"
                  }
            ],
            "correcta": "C",
            "explicacion": "El cuadro clínico presentado por el paciente de 67 años es altamente sugestivo de **Temblor Esencial (TE)**. Las características clave que apoyan este diagnóstico son: el **temblor de las extremidades superiores que aumenta al adoptar alguna postura** (lo que describe un temblor postural, principal manifestación del TE), el antecedente de que **su madre presentó un cuadro similar** (destacando el fuerte componente genético y herencia autosómica dominante en muchos casos de TE), y la **normalidad de la marcha, coordinación motora y ausencia de focalidad en el examen neurológico**. Esta ausencia de otros signos neurológicos es crucial para diferenciarlo de otras patologías como la enfermedad de Parkinson (donde se esperaría temblor de reposo, bradicinesia y rigidez) o patologías cerebelosas (con ataxia y dismetría).\n\nEl **betabloqueo**, específicamente con fármacos como el propranolol (un betabloqueante no selectivo), es el tratamiento farmacológico de primera línea más ampliamente recomendado y eficaz para el Temblor Esencial sintomático. El propranolol actúa reduciendo la amplitud del temblor, mejorando significativamente la calidad de vida de los pacientes. Su mecanismo exacto no está completamente dilucidado, pero se cree que ejerce sus efectos tanto a nivel periférico (bloqueo de receptores beta-2) como a nivel central. La dosis se ajusta de forma individualizada para lograr el máximo beneficio con mínimos efectos adversos.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.026"
      }
]
  },
  // ==========================================================================
  // TEMA 10.14: ENFERMEDAD DE ALZHEIMER Y DETERIORO COGNITIVO LEVE
  // ==========================================================================
  {
    id: "neuro-14",
    classId: "neuro-14",
    tier: 3,
    blockNum: 3,
    blockName: "Trastornos del Movimiento y Enfermedades Neurodegenerativas",
    topicLabel: "10.14",
    title: "Enfermedad de Alzheimer y Deterioro Cognitivo Leve",
    perfilCode: "1.10.1.005",
    dx: "Específico",
    tx: "Completo",
    seg: "Control",
    ges: "Garantía Explícita en Salud (GES N° 85): Enfermedad de Alzheimer y otras demencias · Evaluación diagnóstica médica integral dentro de 60 días desde la sospecha, test cognitivos estandarizados (MMSE, MoCA, Pfeffer), acceso garantizado a fármacos específicos (Donepezilo, Memantina), plan de cuidados multidisciplinario y apoyo psicosocial al cuidador para prevenir el síndrome de sobrecarga.",
    reconstrucciones: "EUNACOM Julio 2025 (Q#39) · EUNACOM Julio 2024 (Q#15) · EUNACOM Diciembre 2023 (Q#112) · EUNACOM Enero 2021 (Q#77)",
    frecuencia: "Máxima rentabilidad · Pregunta obligatoria de neurología, medicina interna y geriatría",
    svg: null,
    algoTitle: "Algoritmo Diagnóstico del Deterioro Cognitivo y Abordaje Terapéutico de la Enfermedad de Alzheimer",
    diagram: flow('Algoritmo Diagnóstico del Deterioro Cognitivo y Manejo de Alzheimer', [
      { t: 'Evaluación de Queja Cognitiva y Pérdida de Memoria', s: 'Aplicación de MMSE / MoCA y evaluación de actividades de la vida diaria (Índice de Pfeffer)', type: 'acc' },
      { t: 'Descarte Obligatorio de Causas Potencialmente Reversibles', s: 'TSH · Vitamina B12 · VDRL · Pruebas metabólicas · TAC o RM cerebral sin contraste', type: 'warn' },
      { k: 'split', q: '¿Existe Pérdida de Autonomía en Actividades de la Vida Diaria?', s: 'Diferenciación clínica cardinal entre DCL y Trastorno Neurocognitivo Mayor (Demencia)',
        ll: 'Autonomía Preservada (Pfeffer < 6)',
        left: { t: 'Deterioro Cognitivo Leve (DCL)', s: 'MoCA < 26 · Memoria amnésica · Control periódico cada 6-12 meses · Estimulación cognitiva · No usar IAChE', type: 'dec' },
        rl: 'Dependencia en AVD (Pfeffer ≥ 6)',
        right: { t: 'Demencia Tipo Alzheimer Confirmada', s: 'Amnesia episódica progresiva · Test del reloj alterado · Atrofia hipocámpica bilateral en neuroimagen', type: 'crit' }
      },
      { t: 'Terapia Farmacológica Escalonada (Garantía GES N° 85)', s: 'Leve a Moderada: Inhibidores Acetilcolinesterasa (Donepezilo 5-10 mg o Rivastigmina en parche)', type: 'acc' },
      { t: 'Fase Moderada a Severa y Apoyo al Cuidador', s: 'Adicionar Memantina 10-20 mg/día (antagonista NMDA) · Educación familiar y prevención del colapso del cuidador', type: 'acc' }
    ]),
    contexto: "La Enfermedad de Alzheimer (EA) es la principal causa de demencia en Chile y el mundo, representando entre el 60% y el 70% de los casos de trastorno neurocognitivo mayor. Con la promulgación de la Garantía GES N° 85, el diagnóstico y abordaje integral de las demencias se consolidó como una prioridad sanitaria nacional. El sello distintivo de la enfermedad es el deterioro insidioso, progresivo e irreversible de la memoria episódica reciente (amnesia anterógrada), conservando durante etapas prolongadas la memoria remota y el nivel de vigilia. La frontera diagnóstica crucial frente al Deterioro Cognitivo Leve (DCL) radica en la pérdida de la independencia funcional para las actividades de la vida diaria. El rol del médico general comprende la aplicación de escalas diagnósticas breves (MMSE, MoCA, Test del Reloj), el descarte sistemático de causas potencialmente reversibles (B12, TSH, VDRL, hidrocefalia) y la titulación oportuna de inhibidores de la acetilcolinesterasa y memantina.",
    contentSections: [
      {
            "subhead": "1. Fisiopatología Molecular: Péptido Beta-Amiloide, Ovillos Neurofibrilares Tau y Déficit Colinérgico",
            "paragraphs": [
                  "La fisiopatología de la Enfermedad de Alzheimer se sustenta en dos cascadas neurodegenerativas interconectadas:",
                  "• <strong>Hipótesis de la Cascada Amiloide:</strong> Procesamiento anómalo de la Proteína Precursora de Amiloide (APP) a través de la vía amiloidogénica mediada por las enzimas <strong>beta y gamma-secretasas</strong> (complejo presenilina 1 y 2). Esto genera el fragmento insoluble neurotóxico <strong>péptido beta-amiloide 42 (Aβ42)</strong>, que se polimeriza formando oligómeros solubles y finalmente <strong>placas seniles o placas neuríticas extracelulares</strong>. Los oligómeros de Aβ dañan directamente la transmisión sináptica e inducen estrés oxidativo.",
                  "• <strong>Hiperfosforilación de Proteína Tau y Ovillos Neurofibrilares:</strong> La proteína Tau, normalmente encargada de ensamblar y estabilizar los microtúbulos del citoesqueleto axonal, sufre hiperfosforilación patológica, desprendiéndose de los túbulos y agregándose en <strong>ovillos neurofibrilares intracelulares (NFT)</strong>. Esto bloquea el transporte axoplásmico retrógrado y anterógrado, produciendo la muerte celular retrógrada.",
                  "• <strong>Secuencia Anatómica y Déficit Colinérgico:</strong> El daño histológico se inicia invariablemente en la <strong>corteza entorrinal y el hipocampo</strong> (lóbulo temporal medial), explicando por qué el primer síntoma es la falla en consolidar nueva información (amnesia anterógrada). Posteriormente se expande a las cortezas asociativas parieto-temporales y finalmente a la corteza frontal. Se produce una depleción masiva de acetilcolina por degeneración de las neuronas colinérgicas del <strong>núcleo basal de Meynert</strong>, fundamento del tratamiento con inhibidores de la acetilcolinesterasa (véase Figura 10.14: Algoritmo Diagnóstico del Deterioro Cognitivo y Manejo de Alzheimer)."
            ]
      },
      {
            "subhead": "2. Deterioro Cognitivo Leve (DCL) vs Trastorno Neurocognitivo Mayor (Demencia)",
            "paragraphs": [
                  "La distinción clínica entre el envejecimiento fisiológico, el Deterioro Cognitivo Leve y la Demencia constituye el eje central de la evaluación geroneurológica:",
                  "• <strong>Envejecimiento Normal (\"Olvidos Benignos del Anciano\"):</strong> Dificultad ocasional para evocar nombres o palabras (fenómeno de la punta de la lengua) o recordar dónde se dejaron las llaves, pero la información se recuerda espontáneamente más tarde o con pistas (falla de recuperación, no de consolidación). Rendimiento psicométrico normal para edad y escolaridad.",
                  "• <strong>Deterioro Cognitivo Leve (DCL / Trastorno Neurocognitivo Menor):</strong>",
                  "- <em>Criterios de Petersen / NIA-AA:</em> 1) Queja cognitiva reportada por el paciente o familiar; 2) Deterioro objetivo en uno o más dominios cognitivos (típicamente memoria en el DCL amnésico, con MoCA alterado < 26); 3) <strong>PRESERVACIÓN DE LA AUTONOMÍA FUNCIONAL:</strong> El paciente mantiene intacta su independencia para las actividades instrumentales de la vida diaria (manejo de dinero, compras, medicación, transporte), aunque pueda requerir mayor esfuerzo, tiempo o estrategias compensatorias (Pfeffer < 6 puntos). Tasa de progresión a demencia: <strong>10% a 15% por año</strong> (frente al 1-2% en la población sana). <em>Conducta:</em> Estimulación cognitiva, control de factores de riesgo vascular y seguimiento semestral. NO están indicados los inhibidores de acetilcolinesterasa en DCL.",
                  "• <strong>Demencia (Trastorno Neurocognitivo Mayor):</strong>",
                  "- Deterioro significativo en al menos dos dominios cognitivos que <strong>INTERFIERE CLARAMENTE CON LA INDEPENDENCIA</strong> en las actividades de la vida diaria (el paciente requiere asistencia de terceros para administrar sus finanzas, tomar sus remedios o preparar alimentos; Pfeffer ≥ 6 puntos). Ocurre en ausencia de delirium o trastorno psiquiátrico mayor (véase Tabla 10.14A: Criterios NIA-AA de Deterioro Cognitivo Leve vs Demencia tipo Alzheimer)."
            ]
      },
      {
            "subhead": "3. Batería Diagnóstica: Escalas Cognitivas y Descarte Obligatorio de Causas Potencialmente Reversibles",
            "paragraphs": [
                  "El protocolo diagnóstico inicial normado por la guía GES N° 85 del MINSAL comprende tres elementos obligatorios:",
                  "• <strong>1) Evaluación Cognitiva y Funcional Breve:</strong>",
                  "- <em>Mini-Mental State Examination (MMSE) de Folstein:</em> Escala de 0 a 30 puntos (orientación, memoria inmediata, atención/cálculo, recuerdo diferido y lenguaje). El punto de corte tradicional en Chile es <strong>< 24 puntos</strong> ajustado por escolaridad. Tiene baja sensibilidad para detectar DCL en personas con alta escolaridad.",
                  "- <em>Montreal Cognitive Assessment (MoCA):</em> Escala de 30 puntos con mayor sensibilidad para detectar DCL y afectación de funciones ejecutivas frontales (corte < 26).",
                  "- <em>Test del Reloj (Clock Drawing Test):</em> Prueba extremadamente sensible y rápida para evaluar funciones ejecutivas, memoria de trabajo y habilidades visuoespaciales. En la EA se altera precozmente (el paciente coloca los números en un solo hemisferio o ubica las manecillas de forma grotescamente errónea).",
                  "- <em>Evaluación Funcional:</em> <strong>Índice de Pfeffer</strong> (actividades instrumentales en adultos mayores; ≥ 6 puntos define dependencia funcional) y <strong>Escala de Barthel</strong> (actividades básicas de la vida diaria: aseo, vestimenta, continencia).",
                  "• <strong>2) Batería de Laboratorio para Descartar Causas Reversibles (Regla de Oro EUNACOM):</strong>",
                  "Todo paciente con sospecha de demencia DEBE ser estudiado con exámenes de sangre basales para descartar patologías tratables: 1) <strong>TSH</strong> (hipotiroidismo como causa de bradipsiquia y pseudodemencia); 2) <strong>Niveles séricos de Vitamina B12</strong> (su déficit genera demencia reversible, neuropatía periférica y mielopatía subaguda); 3) <strong>VDRL / RPR</strong> (neurosífilis terciaria / paresia general); 4) Hemograma, electrolitos plasmáticos, función renal y hepática.",
                  "• <strong>3) Neuroimagen Estructural (TAC o RM Cerebral sin Contraste):</strong>",
                  "Obligatoria para descartar lesiones estructurales expansivas o potencialmente quirúrgicas: <strong>Hematoma subdural crónico</strong> (frecuente en ancianos tras traumas menores), <strong>tumores cerebrales</strong> (meningiomas frontales), <strong>infartos cerebrales silentes</strong> e <strong>Hidrocefalia Normotensiva (Síndrome de Hakim-Adams)</strong>, cuya tríada diagnóstica patognomónica es: <em>Apraxia de la marcha (\"marcha magnética a pasos cortos pegados al piso\") + Incontinencia urinaria precoz + Deterioro cognitivo</em>, reversible tras derivación ventrículo-peritoneal (véase Tabla 10.14B: Escalas Cognitivas y Batería de Causas Potencialmente Reversibles)."
            ]
      },
      {
            "subhead": "4. Estrategia Farmacológica: Inhibidores de Acetilcolinesterasa y Memantina",
            "paragraphs": [
                  "El tratamiento farmacológico de la Enfermedad de Alzheimer está cubierto por la <strong>Garantía GES N° 85</strong> y se orienta a frenar transitoriamente la declinación cognitiva y funcional:",
                  "• <strong>Inhibidores de la Acetilcolinesterasa (IAChE):</strong> Fármacos de primera línea en <strong>Enfermedad de Alzheimer Leve a Moderada</strong> (MMSE entre 10 y 24 puntos):",
                  "- <strong>Donepezilo:</strong> 5 mg una vez al día por la noche, titulando tras 4-6 semanas a 10 mg/día. Es el más utilizado.",
                  "- <strong>Rivastigmina:</strong> Disponible en parches transdérmicos diarios de 4.6 mg y 9.5 mg/24 horas. La vía transdérmica reduce drásticamente los efectos secundarios gastrointestinales y asegura adherencia.",
                  "- <strong>Galantamina:</strong> 8 a 24 mg/día en formulación de liberación prolongada.",
                  "- <em>Efectos adversos colinérgicos:</em> Náuseas, vómitos, diarrea, anorexia, pérdida de peso, calambres musculares y, con relevancia clínica crítica, <strong>bradicardia sinusal y síncope por bloqueo AV</strong> (es mandatorio solicitar un electrocardiograma basal antes de iniciar IAChE).",
                  "• <strong>Memantina:</strong> Antagonista no competitivo de afinidad moderada por los <strong>receptores NMDA del glutamato</strong>. Protege a las neuronas de la excitotoxicidad glutamatérgica crónica. Indicada en <strong>Enfermedad de Alzheimer Moderada a Severa</strong> (MMSE < 15 puntos), ya sea en monoterapia o combinada con un IAChE (terapia dual sinérgica). Dosis: inicio 5 mg/día, titulando semanalmente 5 mg hasta alcanzar la dosis meta de <strong>20 mg/día</strong> (10 mg cada 12 horas o 20 mg LP). Posee un excelente perfil de seguridad (véase Tabla 10.14C: Protocolo Farmacológico con Inhibidores de Acetilcolinesterasa y Memantina)."
            ]
      },
      {
            "subhead": "5. Síntomas Conductuales y Psicológicos de la Demencia (BPSD) y Soporte Integral al Cuidador",
            "paragraphs": [
                  "Los Síntomas Conductuales y Psicológicos de la Demencia (BPSD: agitación psicomotora, agresividad, delirios paranoides de robo o infidelidad, vagabundeo nocturno e insomnio) generan un enorme desgaste en el entorno familiar.",
                  "• <strong>Abordaje de primera línea:</strong> Siempre <strong>no farmacológico</strong>: descartar dolor físico oculto (retención urinaria, fecaloma, infección del tracto urinario), mantener rutinas estables, buena iluminación diurna y evitar confrontar directamente las falsas creencias del paciente.",
                  "• <strong>Farmacoterapia de segunda línea en crisis severas:</strong> Si existe riesgo inminente para sí mismo o terceros y fracasan las medidas ambientales, se pueden emplear antipsicóticos atípicos en dosis mínimas y por el tiempo más breve posible (<strong>Quetiapina 12.5 a 25 mg/noche</strong> o Risperidona 0.25 a 0.5 mg/día). <em>Advertencia regulatoria:</em> Los antipsicóticos conllevan una advertencia de caja negra (black-box warning) por incremento del riesgo de ACV y mortalidad cardiovascular en ancianos con demencia. Están formalmente contraindicadas las benzodiacepinas (empeoran la cognición, causan agitación paradójica y provocan caídas con fractura de cadera).",
                  "• <strong>Prevención del Colapso del Cuidador (Garantía GES N° 85):</strong> El síndrome de sobrecarga del cuidador (evaluado con la <em>Escala de Zarit</em>) debe ser pesquisado activamente por el equipo de salud primaria, otorgando talleres de psicoeducación, redes de respiro y apoyo psicológico."
            ]
      }
],
    table: {
      "title": "Tabla 10.14A: Criterios NIA-AA de Deterioro Cognitivo Leve vs Demencia tipo Alzheimer",
      "headers": [
            "Criterio / Característica",
            "Envejecimiento Normal",
            "Deterioro Cognitivo Leve (DCL)",
            "Enfermedad de Alzheimer (Demencia)"
      ],
      "rows": [
            [
                  "Queja Subjetiva de Memoria",
                  "Olvidos ocasionales de nombres; recupera información con pistas o tiempo",
                  "Queja constante referida por el paciente y confirmada por informante clave",
                  "Frecuentemente el paciente tiene anosognosia (no es consciente del déficit); la familia consulta"
            ],
            [
                  "Rendimiento en Test Cognitivos",
                  "Normal para edad y nivel de escolaridad (MMSE ≥ 27, MoCA ≥ 26)",
                  "Déficit objetivo demostrado en pruebas neuropsicológicas (MoCA < 26, MMSE 24-27)",
                  "Déficit multidominio significativo en test cognitivos (MMSE < 24, Test del Reloj alterado)"
            ],
            [
                  "Autonomía en Actividades de la Vida Diaria",
                  "Completamente preservada e independiente en todas las esferas",
                  "PRESERVADA: Realiza actividades instrumentales (dinero, compras, medicación; Pfeffer < 6)",
                  "PERDIDA: Dependencia progresiva de terceros para AVD instrumentales y básicas (Pfeffer ≥ 6)"
            ],
            [
                  "Perfil de Memoria Afectado",
                  "Dificultad leve en recuperación; almacenamiento y consolidación intactos",
                  "Afectación selectiva de consolidación episódica reciente (DCL amnésico)",
                  "Amnesia episódica anterógrada severa (olvida conversaciones recientes, citas y eventos del día)"
            ],
            [
                  "Tasa de Progresión Anual a Demencia",
                  "1% a 2% por año (riesgo basal de la población general)",
                  "10% a 15% por año evolucionan hacia demencia franca tipo Alzheimer",
                  "Enfermedad neurodegenerativa progresiva irreversible; sobrevida media 8-10 años"
            ],
            [
                  "Conducta Terapéutica Normada",
                  "Tranquilizar al paciente; fomentar actividad física e intelectual",
                  "Control cognitivo semestral, ejercicio aeróbico, dieta mediterránea; NO usar fármacos IAChE",
                  "Tratamiento específico con Donepezilo / Rivastigmina + Memantina (Garantía GES N° 85)"
            ]
      ]
},
    severityTable: {
      "title": "Tabla 10.14B: Escalas Cognitivas y Batería de Causas Potencialmente Reversibles",
      "headers": [
            "Herramienta / Examen",
            "Parámetro Evaluado / Hallazgo",
            "Puntos de Corte Clínicos",
            "Relevancia EUNACOM / Conducta"
      ],
      "rows": [
            [
                  "Mini-Mental State Exam (MMSE)",
                  "Orientación temporal/espacial, fijación, cálculo, recuerdo diferido, lenguaje",
                  "Normal: 27-30 · Leve: 20-23 · Moderado: 10-19 · Grave: < 10 puntos",
                  "Corte patológico < 24 puntos (Chile); útil para clasificar gravedad e indicar fármacos GES"
            ],
            [
                  "Montreal Cognitive Assessment (MoCA)",
                  "Visoespacial, ejecutiva, memoria, atención, concentración, lenguaje, abstracción",
                  "Puntuación máxima 30 puntos · Patológico: < 26 puntos (+1 si escolaridad ≤ 12 a)",
                  "Muy superior al MMSE para detectar Deterioro Cognitivo Leve y disfunción ejecutiva"
            ],
            [
                  "Test del Reloj (Clock Drawing Test)",
                  "Praxias constructivas, funciones ejecutivas de planificación, memoria de trabajo",
                  "Puntuación cuantitativa (Clox 1/2 o Shulman); dibujo circular, números y hora (11:10)",
                  "Se altera precozmente en la enfermedad de Alzheimer; excelente screening en atención primaria"
            ],
            [
                  "Perfil Tiroideo (TSH)",
                  "Función tiroidea (descarte de hipotiroidismo primario severo descompensado)",
                  "TSH elevada con T4 libre baja; mixedema, bradipsiquia, letargia",
                  "Causa reversible clásica de pseudodemencia; revierte tras reposición con Levotiroxina"
            ],
            [
                  "Vitamina B12 Plasmática",
                  "Niveles séricos de cobalamina (descarte de degeneración combinada subaguda)",
                  "Nivel sérico < 200 pg/mL (confirmar con ácido metilmalónico si borderline)",
                  "Demencia reversible con anemia megaloblástica y neuropatía sensitiva; reponer B12 IM"
            ],
            [
                  "VDRL / RPR en Suero",
                  "Tamizaje de Neurosífilis terciaria (paresia general del demente)",
                  "Reactivo en suero; obliga a punción lumbar para confirmar VDRL en LCR",
                  "Infección tratable del SNC; tratamiento curativo con Penicilina G Sódica endovenosa"
            ],
            [
                  "TAC / RM Cerebral sin Contraste",
                  "Descarte de lesiones estructurales quirúrgicas y cuantificación de atrofia",
                  "Atrofia hipocámpica bilateral en EA · Descartar hematoma subdural e hidrocefalia",
                  "Obligatorio en todo estudio inicial; detecta Hidrocefalia Normotensiva (Hakim-Adams)"
            ]
      ]
},
    treatmentTable: {
      "title": "Tabla 10.14C: Protocolo Farmacológico con Inhibidores de Acetilcolinesterasa y Memantina",
      "headers": [
            "Fármaco",
            "Mecanismo de Acción",
            "Indicación / Etapa Clínica",
            "Dosis Estándar y Titulación",
            "Efectos Adversos y Precauciones Críticas"
      ],
      "rows": [
            [
                  "Donepezilo",
                  "Inhibidor reversible y selectivo de la Acetilcolinesterasa central",
                  "EA Leve a Moderada (MMSE 10 a 24 puntos)",
                  "Inicio: 5 mg/día oral nocturno por 4-6 semanas; titular a 10 mg/día",
                  "Náuseas, diarrea, insomnio, calambres. Solicitar ECG basal por riesgo de bradicardia"
            ],
            [
                  "Rivastigmina",
                  "Inhibidor pseudo-irreversible de Acetilcolinesterasa y Butirilcolinesterasa",
                  "EA Leve a Moderada (de elección si intolerancia gastrointestinal a orales)",
                  "Parche transdérmico: 4.6 mg/24h por 4 semanas; titular a 9.5 mg/24h (máximo 13.3 mg/24h)",
                  "Eritema cutáneo en sitio de aplicación (rotar sitio diario). Excelente adherencia"
            ],
            [
                  "Galantamina",
                  "Inhibidor de AChE + modulador alostérico de receptores nicotínicos",
                  "EA Leve a Moderada",
                  "Cápsulas LP: inicio 8 mg/día por 4 semanas; titular a 16 mg/día; máx 24 mg/día",
                  "Perfil colinérgico similar; administrar con desayuno para minimizar náuseas"
            ],
            [
                  "Memantina",
                  "Antagonista no competitivo de receptores NMDA de glutamato",
                  "EA Moderada a Severa (MMSE < 15 puntos) monoterapia o combinada",
                  "Inicio: 5 mg/día; aumentar 5 mg por semana hasta 20 mg/día (10 mg c/12h o 20 mg LP)",
                  "Excelente tolerancia; mareos leves, cefalea, constipación. Ajustar dosis en insuficiencia renal"
            ],
            [
                  "Quetiapina",
                  "Antipsicótico atípico (antagonista 5-HT2A y débil antagonista D2)",
                  "Manejo de BPSD refractario grave (alucinaciones angustiantes, agresividad)",
                  "12.5 a 25 mg por la noche (dosis máxima habitual: 50-100 mg/día)",
                  "Aumenta riesgo de ACV y mortalidad en demencia. Usar tiempo mínimo indispensable"
            ]
      ]
},
    vignette: "Hombre de 71 años, profesor de historia jubilado, es traído a la consulta de medicina general por su hija debido a un cuadro de aproximadamente 16 meses de evolución de olvidos frecuentes y progresivos. La hija refiere que el paciente repite insistentemente las mismas preguntas que acaban de ser respondidas, olvida citas médicas y ha dejado la estufa encendida en dos ocasiones. Hace un mes se desorientó mientras conducía hacia el supermercado habitual del barrio, requiriendo auxilio telefónico. El paciente minimiza la situación, afirmando que \"a su edad es normal tener mala memoria\". Al examen mental: lúcido, colaborador, sin alteraciones en el nivel de conciencia ni en la inversión de series (atención y memoria de trabajo normales). En el Mini-Mental State Examination obtiene 21/30 puntos (falla 3/3 en memoria diferida y 4 puntos en orientación temporal y espacial). El Test del Reloj se encuentra marcadamente alterado (ubica todos los números amontonados en la mitad derecha de la esfera y dibuja las manecillas sin conexión al centro). El Índice de Pfeffer es de 8 puntos (dependencia para finanzas y uso de electrodomésticos). El examen neurológico físico no revela focalidad motora, sensitiva ni cerebelosa.",
    explicacion: "El paciente presenta un cuadro clínico prototípico de Trastorno Neurocognitivo Mayor tipo Enfermedad de Alzheimer en etapa leve a moderada. Los elementos diagnósticos de certeza son: 1) Deterioro insidioso y progresivo de más de un año de evolución; 2) Patrón amnésico anterógrado típico (falla severa en la consolidación de la memoria reciente, con conservación de la memoria remota y atención); 3) Compromiso ejecutivo y visoespacial objetivado por el Test del Reloj patológico; 4) Impacto funcional indiscutible en actividades instrumentales de la vida diaria (Pfeffer 8 puntos, lo que define demencia y descarta DCL); y 5) Examen neurológico físico sin signos focales piramidales o extrapiramidales. La conducta normada por la Garantía GES N° 85 consiste en: solicitar batería de laboratorio para descartar causas tratables (TSH, Vitamina B12, VDRL, perfil bioquímico), TAC de cerebro sin contraste para descartar hematoma subdural, tumores o hidrocefalia normotensiva, e iniciar precozmente tratamiento farmacológico sintomático con un inhibidor de la acetilcolinesterasa (Donepezilo 5 mg/día oral) junto con apoyo psicosocial al cuidador.",
    keyPoints: [
      "La Enfermedad de Alzheimer es la causa más prevalente de demencia (> 60-70%) y su manifestación inicial cardinal es la amnesia anterógrada (pérdida de memoria episódica reciente).",
      "La frontera clínica cardinal entre el Deterioro Cognitivo Leve (DCL) y la Demencia es la pérdida de autonomía funcional en las actividades de la vida diaria (Índice de Pfeffer ≥ 6).",
      "El estudio diagnóstico inicial de toda demencia exige descartar causas potencialmente reversibles mediante TSH (hipotiroidismo), Vitamina B12, VDRL y TAC o RM cerebral sin contraste.",
      "La Hidrocefalia Normotensiva (Hakim-Adams) es una causa reversible que se presenta con la tríada clásica de apraxia de la marcha magnética, incontinencia urinaria y demencia.",
      "El tratamiento farmacológico de elección en la EA leve a moderada (Garantía GES N° 85) son los Inhibidores de la Acetilcolinesterasa (Donepezilo, Rivastigmina, Galantamina).",
      "En la fase moderada a severa (MMSE < 15) se debe incorporar Memantina (antagonista NMDA), fármaco que también puede asociarse en terapia dual combinada con IAChE."
],
    questions: [
      {
            "stem": "¿Qué medicamento se utiliza para el manejo inicial del paciente con\nenfermedad de Alzheimer leve a moderada?",
            "options": [
                  {
                        "id": "A",
                        "text": "Benzodiacepinas."
                  },
                  {
                        "id": "B",
                        "text": "Neurolépticos atípicos."
                  },
                  {
                        "id": "C",
                        "text": "Inhibidores de la monoaminooxidasa."
                  },
                  {
                        "id": "D",
                        "text": "Antidepresivos tipo ISRS."
                  },
                  {
                        "id": "E",
                        "text": "Inhibidores de la acetilcolinesterasa."
                  }
            ],
            "correcta": "E",
            "explicacion": "La alternativa correcta es la E (Inhibidores de la acetilcolinesterasa). En el manejo inicial del paciente con enfermedad de Alzheimer leve a moderada, los inhibidores de la acetilcolinesterasa (IAChE) como donepezilo, rivastigmina y galantamina son los fármacos de primera línea. Estos medicamentos actúan inhibiendo la enzima acetilcolinesterasa, que degrada la acetilcolina en la sinapsis neuronal. Al aumentar la disponibilidad de acetilcolina, mejoran la neurotransmisión colinérgica, lo que puede resultar en una leve mejoría en la función cognitiva, el comportamiento y las actividades de la vida diaria en algunos pacientes. Las guías clínicas del MINSAL (Programa Nacional de Salud Mental) recomiendan el uso de IAChE en las etapas iniciales de la enfermedad de Alzheimer, considerando la relación riesgo-beneficio y la respuesta individual de cada paciente. Es fundamental el monitoreo regular y la evaluación de la eficacia y los efectos secundarios del tratamiento.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
      },
      {
            "stem": "Un paciente de 78 años, con antecedente de hipertensión, diabetes y\ndemencia inicial por enfermedad de Alzheimer, sufre una caída a nivel,\nresultando con imposibilidad para caminar e intenso dolor. Al examen se\naprecia extremidad inferior derecha en posición impúdica, con imposibilidad\nde flectar la cadera. Se solicitan radiografías de caderas que demuestra una\nfractura de la región intertrocantérica, con importante desplazamiento\n(Tronzo IV). Una vez estabilizado el paciente, la conducta más adecuada es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Inmovilizar con yeso pelvipedio"
                  },
                  {
                        "id": "B",
                        "text": "Realizar osteosíntesis con placa y tornillos"
                  },
                  {
                        "id": "C",
                        "text": "Realizar osteosíntesis con DHS (dinamic hip screw)"
                  },
                  {
                        "id": "D",
                        "text": "Instalar prótesis parcial de cadera"
                  },
                  {
                        "id": "E",
                        "text": "Instalar prótesis total de cadera"
                  }
            ],
            "correcta": "C",
            "explicacion": "El paciente presenta una fractura intertrocantérica desplazada (Tronzo IV) de cadera. Las fracturas intertrocantéricas son fracturas extracapsulares del fémur proximal, comunes en pacientes ancianos, a menudo asociadas a osteoporosis y caídas. El objetivo principal del tratamiento en estos pacientes, especialmente aquellos con comorbilidades como diabetes, hipertensión y demencia, es lograr una fijación estable que permita la movilización temprana. Esto es crucial para prevenir las graves complicaciones asociadas al reposo prolongado en cama, como la trombosis venosa profunda, embolia pulmonar, neumonía, úlceras por presión, atrofia muscular y el empeoramiento del deterioro cognitivo o el desarrollo de delirium.\n\nLa osteosíntesis con DHS (Dynamic Hip Screw o Tornillo Deslizante de Cadera) es considerada el estándar de oro para el tratamiento de la mayoría de las fracturas intertrocantéricas estables y muchas inestables. Este sistema consiste en un tornillo de gran diámetro que se inserta en el cuello y la cabeza femoral, y que se desliza dentro de un barril fijado a una placa atornillada a la diáfisis femoral. Este diseño permite una compresión controlada y un impacto progresivo en el sitio de la fractura durante la carga, lo que promueve la consolidación y proporciona una excelente estabilidad. La ventaja clave del DHS es que preserva la articulación nativa de la cadera, lo que es preferible en este tipo de fracturas donde la irrigación de la cabeza femoral no suele estar comprometida. La estabilidad que ofrece el DHS permite una movilización precoz y el inicio de la rehabilitación, lo cual es fundamental para el pronóstico funcional y la reducción de la morbimortalidad en pacientes ancianos frágiles como el descrito.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
      },
      {
            "stem": "¿Qué alternativa es MÁS compatible con una demencia por enfermedad de\nAlzheimer?",
            "options": [
                  {
                        "id": "A",
                        "text": "Test del reloj alterado"
                  },
                  {
                        "id": "B",
                        "text": "Alucinaciones visuales"
                  },
                  {
                        "id": "C",
                        "text": "Minimental de 24/25 puntos"
                  },
                  {
                        "id": "D",
                        "text": "Sopor y desorientación"
                  },
                  {
                        "id": "E",
                        "text": "Síntomas extrapiramidales"
                  }
            ],
            "correcta": "A",
            "explicacion": "La enfermedad de Alzheimer se caracteriza por un deterioro cognitivo progresivo. El Test del Reloj es una herramienta sencilla pero sensible para evaluar la función visuoespacial, la planificación y la memoria operativa, todas afectadas en la enfermedad de Alzheimer. Los pacientes con EA suelen mostrar dificultades significativas para dibujar el reloj correctamente, como colocar los números en el lugar incorrecto, omitir números, dibujar las manecillas incorrectamente o no entender la consigna. Este test es útil para detectar disfunción cognitiva temprana. La guía clínica de MINSAL \"Enfermedad de Alzheimer y otras Demencias\" (2018) recomienda el uso de tests neuropsicológicos breves, como el Test del Reloj, en la evaluación inicial de pacientes con sospecha de demencia.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
      },
      {
            "stem": "Un paciente de 65 años presenta olvidos frecuentes y repetición de algunas\nideas, asociados a dificultad para realizar sus tareas habituales. En el examen\nmental invierte series con normalidad, y mantiene la memoria a largo plazo,\nsin embargo presenta varias fallas en las pruebas de memoria reciente. El\nexamen neurológico no presenta signos focales y sólo destaca cierta torpeza\nmotora, sin signos cerebelosos. El diagnóstico más probable es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Envejecimiento normal"
                  },
                  {
                        "id": "B",
                        "text": "Depresión"
                  },
                  {
                        "id": "C",
                        "text": "Enfermedad de Alzheimer"
                  },
                  {
                        "id": "D",
                        "text": "Delirium"
                  },
                  {
                        "id": "E",
                        "text": "Demencia por cuerpos de Lewy"
                  }
            ],
            "correcta": "C",
            "explicacion": "El cuadro clínico descrito es altamente sugerente de una **Enfermedad de Alzheimer (EA)** en su etapa inicial. La EA es la causa más común de demencia y se caracteriza por un inicio insidioso y una progresión gradual del deterioro cognitivo.\n\nLos elementos clave en el caso que apoyan este diagnóstico son:\n1.  **Perfil del paciente:** 65 años, una edad típica para el inicio de la EA de inicio tardío.\n2.  **Déficit cognitivo principal:** El síntoma cardinal es la **pérdida de memoria reciente** (amnesia anterógrada), manifestada como \"olvidos frecuentes\", \"repetición de ideas\" y \"fallas en las pruebas de memoria reciente\". Es característico que la memoria a largo plazo (\"mantiene la memoria a largo plazo\") y la atención (\"invierte series con normalidad\") estén relativamente preservadas en las fases iniciales.\n3.  **Impacto funcional:** El paciente presenta \"dificultad para realizar sus tareas habituales\". Este es un criterio fundamental para el diagnóstico de demencia (Trastorno Neurocognitivo Mayor), ya que distingue el deterioro patológico del envejecimiento normal.\n4.  **Examen neurológico:** La ausencia de \"signos focales\" (como hemiparesia, afasia motora marcada o defectos campimétricos) y de \"signos cerebelosos\" va en contra de otras etiologías como la demencia vascular o ataxias espinocerebelosas. La \"cierta torpeza motora\" es un hallazgo inespecífico que puede observarse en la EA.\n\nEn conjunto, un deterioro de predominio amnésico, con impacto funcional y un examen neurológico no focal, es el patrón clásico de la Enfermedad de Alzheimer.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
      }
]
  },
  // ==========================================================================
  // TEMA 10.15: DEMENCIA VASCULAR, DEMENCIA POR CUERPOS DE LEWY Y DEMENCIA FRONTOTEMPORAL
  // ==========================================================================
  {
    id: "neuro-15",
    classId: "neuro-15",
    tier: 2,
    blockNum: 3,
    blockName: "Trastornos del Movimiento y Enfermedades Neurodegenerativas",
    topicLabel: "10.15",
    title: "Demencia Vascular, Demencia por Cuerpos de Lewy y Demencia Frontotemporal",
    perfilCode: "1.10.1.005",
    dx: "Específico",
    tx: "Inicial",
    seg: "Derivar",
    ges: "Garantía Explícita en Salud (GES N° 85): Cobertura integral para demencias no Alzheimer en personas de cualquier edad · Abordaje multidisciplinario y manejo de síntomas conductuales.",
    reconstrucciones: "EUNACOM Julio 2024 (Q#56) · EUNACOM Diciembre 2023 (Q#128) · EUNACOM Enero 2022 (Q#34)",
    frecuencia: "Alta rentabilidad · Diagnóstico diferencial sistemático de síndromes demenciales en el adulto mayor",
    svg: null,
    algoTitle: null,
    diagram: null,
    contexto: "Aunque la Enfermedad de Alzheimer es la demencia más frecuente, el médico general debe reconocer de forma inmediata los perfiles clínicos sindromáticos de las demencias no Alzheimer más prevalentes. La Demencia Vascular cursa con un deterioro característicamente escalonado, disfunción ejecutiva frontal y focalidad neurológica motora o sensitiva; la Demencia por Cuerpos de Lewy se define por la tríada clásica de alucinaciones visuales tempranas estructuradas, fluctuación del estado cognitivo y parkinsonismo espontáneo, presentando una letal hipersensibilidad a los antipsicóticos típicos; y la Demencia Frontotemporal destaca por debutar en pacientes preseniles (< 65 años) con marcada alteración de la conducta social, desinhibición o trastornos del lenguaje, con llamativa conservación inicial de la memoria episódica.",
    contentSections: [
      {
            "subhead": "1. Demencia Vascular: Mecanismos Isquémicos, Curso Escalonado y Escala de Hachinski",
            "paragraphs": [
                  "La <strong>Demencia Vascular (DV)</strong> es la segunda causa más frecuente de demencia en el adulto (15% a 20% de los casos). Se origina por el daño cerebral acumulativo secundario a patología cerebrovascular isquémica o hemorrágica.",
                  "• <strong>Subtipos Etiopatogénicos:</strong>",
                  "1) <em>Demencia Multi-Infarto:</em> Secundaria a infartos corticales embólicos o trombóticos recurrentes en grandes arterias.",
                  "2) <em>Infartos Estratégicos Únicos:</em> Lesiones isquémicas focales en zonas cognitivas nodales críticas (tálamo paramediano, rodilla de la cápsula interna o circunvolución angular).",
                  "3) <em>Enfermedad Isquémica de Pequeño Vaso Subcortical (Enfermedad de Binswanger):</em> Leucoaraiosis difusa periventricular microangiopática por hipertensión y diabetes de larga data.",
                  "• <strong>Perfil Clínico Cardinal:</strong>",
                  "- <strong>Curso fluctuante y en escalones (stepwise):</strong> Períodos de deterioro cognitivo agudo tras cada evento vascular seguidos de mesetas de estabilización o leve recuperación parcial.",
                  "- <strong>Disfunción ejecutiva desproporcionada:</strong> Mayor afectación de velocidad de procesamiento, planificación y flexibilidad cognitiva que de la memoria episódica per se.",
                  "- <strong>Signos neurológicos focales:</strong> Presencia de hemiparesia leve, reflejos osteotendinosos asimétricos vivos, signo de Babinski unilateral o marcha con apraxia o pasos cortos.",
                  "- <strong>Escala Isquémica de Hachinski:</strong> Puntuación <strong>≥ 7 puntos</strong> orienta fuertemente a demencia vascular pura (vs ≤ 4 para demencia degenerativa pura tipo Alzheimer).",
                  "• <em>Manejo:</em> Control agresivo de factores de riesgo cardiovascular (PA, diabetes, estatinas de alta potencia) y antiagregación con Aspirina 100 mg/día (o anticoagulación si media fibrilación auricular) (véase Tabla 10.15: Perfil Clínico Diferencial de Demencia Vascular, Cuerpos de Lewy y Demencia Frontotemporal)."
            ]
      },
      {
            "subhead": "2. Demencia por Cuerpos de Lewy (DCL): Criterios de McKeith, Tríada Nuclear y Letalidad por Neurolépticos",
            "paragraphs": [
                  "La <strong>Demencia por Cuerpos de Lewy (DCL)</strong> es la segunda demencia neurodegenerativa más frecuente tras el Alzheimer (10% a 15%). Corresponde a una alfa-sinucleinopatía caracterizada por la presencia difusa de cuerpos de Lewy en la corteza cerebral, sistema límbico y tronco encefálico.",
                  "<strong>Criterios Diagnósticos Nucleares de McKeith (Se requieren ≥ 2 para diagnóstico probable):</strong>",
                  "1) <strong>Fluctuaciones cognitivas pronunciadas:</strong> Variaciones espontáneas y llamativas en la atención y en el nivel de alerta; el paciente puede alternar en horas o días entre lucidez comunicativa casi normal y estados de somnolencia profunda o estupor confuso.",
                  "2) <strong>Alucinaciones visuales recurrentes y bien estructuradas:</strong> Presentes desde etapas tempranas en el 80% de los casos. Son extraordinariamente vívidas, coloridas y detalladas (visualización de figuras humanas completas, niños jugando o animales en la habitación), habitualmente no amenazantes.",
                  "3) <strong>Parkinsonismo espontáneo:</strong> Bradicinesia y rigidez axial con facies inexpresiva y alteración de la marcha. El temblor de reposo es menos frecuente que en la EP idiopática.",
                  "4) <strong>Trastorno conductual del sueño REM (RBD):</strong> Pérdida de atonía motora en sueño REM con actuación de pesadillas violentas.",
                  "• <strong>Regla del Año para diferenciar DCL vs Demencia en Enfermedad de Parkinson (DEP):</strong>",
                  "- Si el deterioro cognitivo y las alucinaciones aparecen <strong>antes, simultáneamente o dentro del primer año</strong> del inicio del parkinsonismo motor, el diagnóstico es <strong>Demencia por Cuerpos de Lewy (DCL)</strong>.",
                  "- Si el parkinsonismo motor precede en <strong>más de un año</strong> (habitualmente más de 5 a 10 años) a la aparición de la demencia, el diagnóstico es <strong>Demencia en la Enfermedad de Parkinson (DEP)</strong>.",
                  "• <strong>Regla de Oro de Seguridad Vital EUNACOM: HIPERSENSIBILIDAD SEVERA A NEUROLÉPTICOS:</strong>",
                  "Está <strong>FORMALMENTE CONTRAINDICADO el uso de antipsicóticos típicos (Haloperidol, Clorpromazina)</strong> en pacientes con DCL. Hasta el 50% de los pacientes sufren una reacción de hipersensibilidad potencialmente letal caracterizada por rigidez extrema irreversible, mutismo, sedación profunda, hipotensión ortostática refractaria e incremento de dos a tres veces en la mortalidad. Si se requiere tratar alucinaciones angustiantes, los fármacos de elección son los <strong>Inhibidores de Acetilcolinesterasa (Donepezilo)</strong> o, en casos extremos, antipsicóticos atípicos con muy bajo antagonismo D2 como <strong>Quetiapina</strong> en dosis ultrabajas (12.5 mg) o <em>Pimavanserina</em>."
            ]
      },
      {
            "subhead": "3. Demencia Frontotemporal (DFT / Enfermedad de Pick): Variante Conductual y Afasias Primarias",
            "paragraphs": [
                  "La <strong>Demencia Frontotemporal (DFT)</strong> es la causa más común de demencia presenil en menores de 65 años (edad típica de debut entre 45 y 65 años), con agregación familiar autosómica dominante en un tercio de los casos (mutaciones en MAPT, GRN, C9orf72). Se caracteriza por degeneración lobar frontotemporal con inclusiones de tau o TDP-43.",
                  "<strong>Subtipos Clínicos Cardinales:</strong>",
                  "• <strong>Variante Conductual (bvFTD - 70% de los casos):</strong>",
                  "- <em>Desinhibición social precoz:</em> Pérdida de normas sociales, comentarios inapropiados o de connotación sexual en público, falta de pudor o vestimenta inadecuada.",
                  "- <em>Apatía e inercia profunda:</em> Aislamiento afectivo y pérdida de motivación.",
                  "- <em>Pérdida de empatía y compasión:</em> Indiferencia emocional ante el sufrimiento ajeno o duelo familiar.",
                  "- <em>Conductas perseverativas o compulsivas:</em> Ritualismos motores repetitivos, coleccionismo obsesivo.",
                  "- <em>Hiperoralidad y cambios dietéticos:</em> Atracones alimentarios, consumo desmedido de azúcares y dulces, o llevarse objetos no comestibles a la boca.",
                  "- <em>Preservación llamativa de la memoria episódica y visoespacial:</em> El paciente recuerda fechas y se orienta espacialmente a la perfección, contrastando con su colapso conductual.",
                  "• <strong>Variantes del Lenguaje (Afasia Primaria Progresiva - APP):</strong>",
                  "- <em>Variante Semántica:</em> Pérdida del significado de las palabras (anomia severa) con fluidez fonética conservada (el paciente habla fluidamente pero no comprende qué es un \"refrigerador\" o un \"martillo\").",
                  "- <em>Variante No Fluente / Agramática:</em> Habla trabajosa, con esfuerzo y errores gramaticales.",
                  "• <em>Neuroimagen:</em> Atrofia focal asimétrica lobar anterior en los lóbulos frontales y/o temporales (\"atrofia en filo de cuchillo\") en RM cerebral."
            ]
      },
      {
            "subhead": "4. Diagnóstico Diferencial Integrado y Enfoque Terapéutico Específico",
            "paragraphs": [
                  "• <strong>Algoritmo Diferencial Clínico:</strong> Ante un cuadro demencial progresivo, evaluar: 1) Si hay alucinaciones visuales tempranas estructuradas y parkinsonismo, sospechar <strong>Cuerpos de Lewy</strong>; 2) Si hay antecedentes de ACV, inicio en escalones y signos focales motores, sospechar <strong>Demencia Vascular</strong>; 3) Si el paciente tiene < 65 años y debuta con desinhibición social y pérdida de empatía con memoria conservada, diagnosticar <strong>Demencia Frontotemporal</strong>; 4) Si debuta con pérdida insidiosa de memoria episódica reciente en un adulto mayor, corresponde a <strong>Enfermedad de Alzheimer</strong>.",
                  "• <strong>Particularidades Terapéuticas:</strong> En la DCL, los inhibidores de la acetilcolinesterasa (Donepezilo) son excepcionalmente eficaces para mejorar las fluctuaciones y reducir las alucinaciones. En la DFT, los IAChE están contraindicados porque pueden empeorar la agitación y desinhibición; se utilizan inhibidores selectivos de la recaptura de serotonina (ISRS como Trazodona o Sertralina) para modular la conducta."
            ]
      }
],
    table: {
      "title": "Tabla 10.15: Perfil Clínico Diferencial de Demencia Vascular, Cuerpos de Lewy y Demencia Frontotemporal",
      "headers": [
            "Rasgo Diferencial",
            "Demencia de Alzheimer",
            "Demencia Vascular",
            "Demencia por Cuerpos de Lewy",
            "Demencia Frontotemporal (Pick)"
      ],
      "rows": [
            [
                  "Edad de Inicio Típica",
                  "> 65 años (senil tardía)",
                  "Cualquier edad con FRCV",
                  "> 60-70 años",
                  "45 a 65 años (típicamente presenil)"
            ],
            [
                  "Modo de Inicio y Curso",
                  "Insidioso, progresivo continuo y gradual sin mesetas",
                  "Fluctuante, deterioro en escalones (stepwise) tras eventos vasculares",
                  "Fluctuante circadiano de un día a otro o dentro del mismo día",
                  "Insidioso, cambio de personalidad progresivo"
            ],
            [
                  "Síntoma Clínico Cardinal",
                  "Amnesia episódica anterógrada (olvido de hechos recientes)",
                  "Disfunción ejecutiva frontal y enlentecimiento psicomotor",
                  "Tríada: Alucinaciones visuales + Fluctuaciones + Parkinsonismo",
                  "Desinhibición social, apatía, hiperoralidad y pérdida de empatía"
            ],
            [
                  "Examen Neurológico Físico",
                  "Normal en etapas iniciales y moderadas",
                  "Signos focales motores: paresias, Babinski (+), reflejos exaltados",
                  "Parkinsonismo espontáneo (rigidez, bradicinesia, fascies inexpresiva)",
                  "Comportamiento desinhibido; reflejos frontales arcaicos precoces"
            ],
            [
                  "Neuroimagen Clave",
                  "Atrofia hipocámpica y temporal medial bilateral",
                  "Infartos corticales múltiples / leucoaraiosis subcortical severa",
                  "Atrofia difusa leve o normal; hipometabolismo occipital en SPECT/PET",
                  "Atrofia lobar focal frontal y temporal anterior (\"filo de cuchillo\")"
            ],
            [
                  "Alerta Terapéutica Crítica",
                  "Donepezilo / Rivastigmina + Memantina (Garantía GES N° 85)",
                  "Control agresivo de FRCV + Aspirina (antiagregación secundaria)",
                  "CONTRAINDICACIÓN ESTRICTA de antipsicóticos típicos (mortalidad)",
                  "NO usar IAChE (empeoran conducta); usar ISRS (Trazodona/Sertralina)"
            ]
      ]
},
    severityTable: null,
    treatmentTable: null,
    vignette: "Hombre de 69 años, previamente autovalente, es llevado al especialista por su esposa debido a un cuadro de 10 meses de evolución caracterizado por alteraciones cognitivas notorias pero fluctuantes. La esposa refiere que hay días en los que el paciente conversa de forma coherente y atiende las llamadas de sus nietos, mientras que en otros días permanece somnoliento, confuso y no reconoce a sus familiares cercanos. Desde hace 6 meses describe con absoluta convicción que ve niños desconocidos y gatos deambulando en el living de la casa (alucinaciones visuales detalladas y estructuradas que no le generan terror pero le sorprenden). Hace dos semanas, presentó un episodio de agitación nocturna en el servicio de urgencia, donde el médico de turno le indicó Haloperidol 5 mg intramuscular; tras la inyección, el paciente desarrolló de forma inmediata un cuadro de rigidez muscular extrema generalizada, temblor severo, incapacidad total para hablar y severa hipotensión arterial que requirió ingreso a cuidados intensivos.",
    explicacion: "El cuadro clínico es patognomónico de una Demencia por Cuerpos de Lewy (DCL), reuniendo los tres criterios diagnósticos nucleares cardinales de McKeith: 1) Fluctuaciones cognitivas marcadas y espontáneas de la atención y vigilia; 2) Alucinaciones visuales tempranas, vívidas y bien estructuradas (personas y animales); y 3) Síndrome extrapiramidal espontáneo. Asimismo, el caso ilustra la regla de oro más crítica de esta enfermedad: la extrema hipersensibilidad a los antipsicóticos típicos como el Haloperidol. En pacientes con DCL, el bloqueo dopaminérgico con neurolépticos típicos provoca un empeoramiento catastrófico del parkinsonismo, estupor, disautonomía e incrementa gravemente la mortalidad. Si se requiere manejo psicofarmacológico para síntomas neuropsiquiátricos en DCL, los fármacos indicados son los Inhibidores de la Acetilcolinesterasa (Donepezilo) o antipsicóticos atípicos con muy bajo antagonismo D2 (Quetiapina en dosis mínimas de 12.5 mg).",
    keyPoints: [
      "La Demencia Vascular se caracteriza por un curso de deterioro escalonado (stepwise), disfunción ejecutiva y presencia de signos neurológicos focales al examen físico.",
      "La Demencia por Cuerpos de Lewy se define por la tríada nuclear de fluctuación cognitiva circadiana, alucinaciones visuales tempranas estructuradas y parkinsonismo espontáneo.",
      "Regla de Oro Vital EUNACOM: Los antipsicóticos típicos (Haloperidol) están contraindicados en la Demencia por Cuerpos de Lewy por generar hipersensibilidad severa con rigidez extrema y muerte.",
      "La regla del año diferencia la DCL (demencia previa o dentro del primer año del parkinsonismo) de la Demencia en Enfermedad de Parkinson (parkinsonismo precede a la demencia por años).",
      "La Demencia Frontotemporal es la principal causa de demencia presenil (< 65 años) y se manifiesta con desinhibición social, apatía, hiperoralidad y pérdida de empatía con memoria conservada."
],
    questions: [
      {
            "stem": "Un hombre de 67 años presenta un cuadro de varios meses de evolución de\nfallas de la memoria, asociado a ideas paranoides, caídas frecuentes y\nmovimientos involuntarios de las extremidades superiores. Los familiares\nrefieren que en ocasiones es agresivo y presenta alucinaciones visuales. El\ndiagnóstico más probable es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Hidrocefalia normotensiva"
                  },
                  {
                        "id": "B",
                        "text": "Enfermedad de Alzheimer"
                  },
                  {
                        "id": "C",
                        "text": "Glioblastoma multiforme"
                  },
                  {
                        "id": "D",
                        "text": "Demencia por cuerpos de Lewy"
                  },
                  {
                        "id": "E",
                        "text": "Delirium"
                  }
            ],
            "correcta": "D",
            "explicacion": "La alternativa correcta es la Demencia por cuerpos de Lewy (DCL) porque el paciente presenta un cuadro clínico compatible con esta patología. Los elementos clave son:\n*   **Deterioro cognitivo fluctuante:** La memoria falla, pero no de forma constante, sino con fluctuaciones en el tiempo.\n*   **Alucinaciones visuales recurrentes y bien formadas:** Son un criterio diagnóstico central en la DCL.\n*   **Parkinsonismo:** Se manifiesta en este caso como movimientos involuntarios de extremidades superiores y caídas frecuentes. La rigidez y bradicinesia también podrían estar presentes, pero no se mencionan explícitamente.\n*   **Trastornos del sueño REM:** (No explicitamente mencionado) Frecuentemente presentes, pero no evaluables con la información dada.\n*   **Ideas paranoides:** Pueden ocurrir en DCL, pero no son tan específicas como los otros criterios.\n\nLa guía clínica del MINSAL para el manejo de demencias (si bien no se centra exclusivamente en DCL) destaca la importancia de identificar los síntomas nucleares para un diagnóstico diferencial preciso. Además, subraya la necesidad de descartar otras causas de demencia y evaluar la presencia de comorbilidades. El diagnóstico clínico se apoya en criterios estandarizados, como los del Consorcio Internacional para la Demencia con Cuerpos de Lewy.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
      },
      {
            "stem": "Una mujer de 68 años presenta un cuadro de 12 meses de evolución de\nproblemas de memoria, ideas paranoides y alucinaciones visuales. Presenta\nademás caídas frecuentes y temblor de la mano izquierda. Los síntomas son\nfluctuantes, pero muestran una tendencia a empeorar. El diagnóstico más\nprobable es:",
            "options": [
                  {
                        "id": "A",
                        "text": "Demencia por cuerpos de Lewy"
                  },
                  {
                        "id": "B",
                        "text": "Enfermedad de Alzheimer"
                  },
                  {
                        "id": "C",
                        "text": "Delirium"
                  },
                  {
                        "id": "D",
                        "text": "Demencia frontotemporal"
                  },
                  {
                        "id": "E",
                        "text": "Hidrocefalia normotensiva"
                  }
            ],
            "correcta": "A",
            "explicacion": "La respuesta correcta es a) Demencia por cuerpos de Lewy (DCL). El caso clínico presenta una combinación de características cardinales que son altamente sugestivas de este diagnóstico. En primer lugar, la paciente experimenta problemas de memoria, ideas paranoides y, crucialmente, alucinaciones visuales. Las alucinaciones visuales recurrentes, típicamente bien formadas y detalladas, son uno de los criterios diagnósticos fundamentales para la DCL. La presencia de ideas paranoides también es común en esta demencia.\n\nEn segundo lugar, el cuadro incluye síntomas motores como caídas frecuentes y temblor de la mano izquierda, que sugieren parkinsonismo. El parkinsonismo es el segundo criterio diagnóstico central de la DCL, presentándose a menudo con rigidez, bradicinesia, inestabilidad postural (lo que lleva a caídas) y/o temblor de reposo. En la DCL, los síntomas cognitivos suelen aparecer antes o concomitantemente con los síntomas motores, o dentro de un año de su inicio, a diferencia de la enfermedad de Parkinson con demencia, donde la demencia aparece significativamente después del inicio del parkinsonismo.\n\nFinalmente, y quizás el rasgo más distintivo que ayuda a diferenciarla de otras demencias, es el curso fluctuante de los síntomas, aunque con una tendencia general a empeorar. Estas fluctuaciones en la cognición y el nivel de alerta son una característica clave de la DCL, lo que significa que la claridad mental de la persona puede variar significativamente de un día para otro o incluso dentro del mismo día, con periodos de lucidez alternando con confusión y somnolencia. La combinación de alucinaciones visuales, parkinsonismo y fluctuaciones cognitivas, en el contexto de una demencia progresiva, apunta directamente a la Demencia por cuerpos de Lewy.",
            "recTag": "Banco Oficial AEE · Perfil V3 1.10.1.005"
      }
]
  }
];

module.exports = {
  bloque3,
  bloque3Classes: bloque3,
  flow
};
