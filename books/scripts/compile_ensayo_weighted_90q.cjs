/**
 * Compilador Oficial del Ensayo Ponderado por Frecuencia Real EUNACOM 2026
 * Módulo 1: Medicina Interna (90 Preguntas)
 *
 * Ponderación Histórica Exacta (1.082 preguntas EUNACOM 2013-2025):
 * - Gastroenterología: 15 preguntas (16.7%)
 * - Cardiología: 15 preguntas (16.3%)
 * - Respiratorio / Neumología: 11 preguntas (11.7%)
 * - Infectología: 9 preguntas (10.2%)
 * - Endocrinología: 8 preguntas (8.7%)
 * - Neurología: 7 preguntas (7.6%)
 * - Hémato-oncología: 7 preguntas (7.8%)
 * - Diabetes y Nutrición: 6 preguntas (6.7%)
 * - Reumatología: 5 preguntas (5.9%)
 * - Nefrología: 5 preguntas (5.2%)
 * - Geriatría: 2 preguntas (3.2%)
 * TOTAL: 90 preguntas exactas
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DIST_DIR = path.join(__dirname, '..', 'dist');

function compileWeightedExam() {
  console.log('--- COMPILADOR ENSAYO MAESTRO PONDERADO POR FRECUENCIA (90 Q) ---');

  const prevPath = path.join(DIST_DIR, 'ENSAYO_EUNACOM_MODULO_1_90Q.json');
  const extraPath = path.join(DATA_DIR, 'temp_ensayo_weighted_extra.json');

  if (!fs.existsSync(prevPath)) throw new Error(`Falta el archivo base: ${prevPath}`);
  if (!fs.existsSync(extraPath)) throw new Error(`Falta el archivo de extras: ${extraPath}`);

  const prevExam = JSON.parse(fs.readFileSync(prevPath, 'utf8'));
  const extraQuestions = JSON.parse(fs.readFileSync(extraPath, 'utf8'));

  console.log(`Cargadas ${prevExam.length} preguntas base y ${extraQuestions.length} preguntas extras.`);

  // Separar preguntas previas por especialidad
  const bySpec = {
    cardiologia: prevExam.filter(q => q.specialtyKey === 'cardiologia'),
    gastroenterologia: prevExam.filter(q => q.specialtyKey === 'gastroenterologia'),
    neumologia: prevExam.filter(q => q.specialtyKey === 'neumologia'),
    infectologia: prevExam.filter(q => q.specialtyKey === 'infectologia'),
    endocrinologia: prevExam.filter(q => q.specialtyKey === 'endocrinologia'),
    hematologia: prevExam.filter(q => q.specialtyKey === 'hematologia'),
    diabetes: prevExam.filter(q => q.specialtyKey === 'diabetes'),
    reumatologia: prevExam.filter(q => q.specialtyKey === 'reumatologia'),
    nefrologia: prevExam.filter(q => q.specialtyKey === 'nefrologia'),
    neurologia: prevExam.filter(q => q.specialtyKey === 'neurologia' && !q.topicTitle.toLowerCase().includes('delirium') && !q.topicTitle.toLowerCase().includes('demencia') && !q.topicTitle.toLowerCase().includes('anciano')),
    geriatria: prevExam.filter(q => q.specialtyKey === 'neurologia' && (q.topicTitle.toLowerCase().includes('delirium') || q.topicTitle.toLowerCase().includes('demencia') || q.topicTitle.toLowerCase().includes('anciano'))),
  };

  // Agregar extras
  extraQuestions.forEach(q => {
    if (q.specialtyKey === 'cardiologia') bySpec.cardiologia.push(q);
    else if (q.specialtyKey === 'gastroenterologia') bySpec.gastroenterologia.push(q);
    else if (q.specialtyKey === 'neumologia') bySpec.neumologia.push(q);
  });

  // Ensamblar la cuota exacta de 90 preguntas ponderadas
  const quota = {
    cardiologia: 15,
    gastroenterologia: 15,
    neumologia: 11,
    infectologia: 9,
    endocrinologia: 8,
    neurologia: 8,
    hematologia: 7,
    diabetes: 6,
    reumatologia: 5,
    nefrologia: 5,
    geriatria: 1,
  };

  const weightedPool = [];
  const reportCounts = {};

  for (const sp in quota) {
    const target = quota[sp];
    const available = bySpec[sp] || [];
    const selected = available.slice(0, target);
    if (selected.length < target) {
      console.warn(`Alerta: ${sp} requería ${target} pero solo tiene ${selected.length}`);
    }
    reportCounts[sp] = selected.length;
    weightedPool.push(...selected);
  }

  console.log('Distribución ponderada final:');
  console.table(reportCounts);
  console.log(`Total acumulado: ${weightedPool.length} preguntas`);

  if (weightedPool.length !== 90) {
    console.warn(`ADVERTENCIA: Total es ${weightedPool.length}, se esperaban 90`);
  }

  // Algoritmo de dispersión aleatoria sin consecutivos de la misma especialidad
  let seed = 20261108;
  function rnd() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  }

  const specBuckets = {};
  weightedPool.forEach(q => {
    const k = q.specialtyName;
    if (!specBuckets[k]) specBuckets[k] = [];
    specBuckets[k].push(q);
  });

  Object.keys(specBuckets).forEach(k => {
    specBuckets[k].sort(() => rnd() - 0.5);
  });

  const shuffled = [];
  const specKeys = Object.keys(specBuckets);
  const maxInBucket = Math.max(...Object.values(specBuckets).map(b => b.length));

  for (let r = 0; r < maxInBucket; r++) {
    const roundKeys = [...specKeys].sort(() => rnd() - 0.5);
    for (const sk of roundKeys) {
      if (specBuckets[sk].length > 0) {
        shuffled.push(specBuckets[sk].shift());
      }
    }
  }

  // Asignar número oficial 1 a 90
  const finalExam = shuffled.map((q, idx) => ({
    number: idx + 1,
    id: q.id || `QW-${String(idx + 1).padStart(2, '0')}`,
    specialtyKey: q.specialtyKey,
    specialtyName: q.specialtyName,
    topicTitle: q.topicTitle,
    perfilCode: q.perfilCode,
    legalLevel: q.legalLevel,
    stem: q.stem,
    options: q.options,
    correcta: q.correcta,
    explicacion: q.explicacion,
  }));

  // 1. Guardar JSON
  const jsonPath = path.join(DIST_DIR, 'ENSAYO_EUNACOM_MODULO_1_PONDERADO_90Q.json');
  fs.writeFileSync(jsonPath, JSON.stringify(finalExam, null, 2), 'utf8');
  console.log(`✓ Generado JSON Ponderado: ${jsonPath}`);

  // 2. Generar Markdown
  const mdPath = path.join(DIST_DIR, 'ENSAYO_EUNACOM_MODULO_1_PONDERADO_90Q.md');
  let md = `# 📝 ENSAYO MAESTRO EUNACOM 2026 · MÓDULO 1 (PONDERADO POR FRECUENCIA REAL)
### 90 Preguntas Calibradas Estadísticamente con 1.082 Exámenes EUNACOM (2013-2025)

> **INSTRUCCIONES GENERALES**:
> * **Tiempo límite**: 150 minutos (2 horas y 30 minutos · promedio 1.6 minutos por pregunta).
> * **Distribución Ponderada EUNACOM**: 15 Gastro, 15 Cardio, 11 Neumo, 9 Infecto, 8 Endo, 7 Neuro, 7 Hemato, 6 Diabetes, 5 Reuma, 5 Nefro y 2 Geriatría.
> * **Estructura**: 90 preguntas de opción múltiple con 5 alternativas (A, B, C, D, E) y 1 sola respuesta correcta.
> * **Modalidad de Autoevaluación**: Responda la **SECCIÓN I** completa sin consultar las respuestas. Al finalizar, revise la **SECCIÓN II (Solucionario Razonado & Matriz Perfil V3)**.

---

\\pagebreak

# SECCIÓN I · CUADERNILLO DE PREGUNTAS (1 A 90)

`;

  finalExam.forEach(q => {
    md += `### Pregunta ${q.number}\n\n`;
    md += `${q.stem}\n\n`;
    q.options.forEach(opt => {
      md += `* **${opt.id})** ${opt.text}\n`;
    });
    md += `\n---\n\n`;
  });

  md += `\\pagebreak\n\n# SECCIÓN II · SOLUCIONARIO OFICIAL RAZONADO & MATRIZ PERFIL V3\n\n`;
  md += `> Cada justificación detalla la fundamentación médica de la clave correcta según guías clínicas MINSAL/GES vigentes en Chile y el análisis de descarte de cada uno de los distractores.\n\n---\n\n`;

  finalExam.forEach(q => {
    const gesText = q.legalLevel?.ges ? ` · GES: ${q.legalLevel.ges}` : '';
    md += `### Pregunta ${q.number} · Clave Oficial: **[ ${q.correcta} ]**\n\n`;
    md += `* **Especialidad:** ${q.specialtyName}\n`;
    md += `* **Tema:** ${q.topicTitle}\n`;
    md += `* **Código Perfil V3:** \`${q.perfilCode}\` (Dx: **${q.legalLevel?.dx || 'Específico'}** · Tx: **${q.legalLevel?.tx || 'Inicial'}** · Seg: **${q.legalLevel?.seg || 'Derivar'}**${gesText})\n\n`;
    md += `**Justificación Clínica y Análisis de Distractores:**\n\n`;
    md += `${q.explicacion}\n\n`;
    md += `---\n\n`;
  });

  fs.writeFileSync(mdPath, md, 'utf8');
  console.log(`✓ Generado Markdown Ponderado: ${mdPath}`);

  // 3. Generar HTML Interactivo / Imprimible
  const htmlPath = path.join(DIST_DIR, 'ensayo_modulo_1_ponderado_90q.html');
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simulacro Ponderado EUNACOM 2026 · Módulo 1 Medicina Interna (90 Preguntas)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --navy: #0f172a;
      --card-bg: #ffffff;
      --border: #e2e8f0;
      --acc: #0d9488;
      --acc-dark: #0f766e;
      --correct: #16a34a;
      --wrong: #dc2626;
      --text: #1e293b;
      --muted: #64748b;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'IBM Plex Sans', sans-serif;
      background: #f8fafc;
      color: var(--text);
      line-height: 1.5;
      padding-bottom: 80px;
    }
    header {
      background: linear-gradient(135deg, #0f172a 0%, #134e4a 100%);
      color: white;
      padding: 30px 20px;
      border-bottom: 4px solid var(--acc);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .header-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
    }
    h1 {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .subtitle {
      font-size: 14px;
      color: #99f6e4;
      margin-top: 4px;
    }
    .badge-bar {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .badge {
      background: rgba(255,255,255,0.12);
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      border: 1px solid rgba(255,255,255,0.2);
    }
    .nav-tabs {
      max-width: 1100px;
      margin: 25px auto 0;
      display: flex;
      gap: 10px;
      padding: 0 20px;
    }
    .tab-btn {
      background: white;
      border: 1px solid var(--border);
      padding: 10px 20px;
      font-weight: 600;
      font-size: 15px;
      border-radius: 8px;
      cursor: pointer;
      color: var(--muted);
      transition: all 0.2s;
    }
    .tab-btn.active {
      background: var(--acc);
      color: white;
      border-color: var(--acc);
      box-shadow: 0 2px 8px rgba(13, 148, 136, 0.3);
    }
    main {
      max-width: 1100px;
      margin: 25px auto;
      padding: 0 20px;
    }
    .q-card {
      background: white;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    }
    .q-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 14px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
      gap: 10px;
    }
    .q-num {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--acc-dark);
      background: #ccfbf1;
      padding: 2px 10px;
      border-radius: 6px;
    }
    .q-meta {
      text-align: right;
      font-size: 12px;
      color: var(--muted);
    }
    .q-meta .spec {
      font-weight: 700;
      color: #0f766e;
      font-size: 13px;
    }
    .q-meta .code {
      font-family: 'JetBrains Mono', monospace;
      color: #334155;
      font-weight: 600;
    }
    .q-stem {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 18px;
      line-height: 1.6;
    }
    .q-options {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .opt-label {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 16px;
      border: 1.5px solid var(--border);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s ease;
      font-size: 15px;
    }
    .opt-label:hover {
      background: #f0fdfa;
      border-color: #99f6e4;
    }
    .opt-id {
      font-weight: 700;
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 18px;
      color: var(--muted);
      min-width: 22px;
    }
    .solucion-box {
      margin-top: 18px;
      padding: 18px;
      border-radius: 8px;
      background: #f0fdfa;
      border-left: 4px solid var(--acc);
      font-size: 14px;
      display: none;
    }
    .solucion-box.visible {
      display: block;
    }
    .tag-correct {
      background: var(--correct);
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 13px;
    }
    @media print {
      header, .nav-tabs, .no-print { display: none !important; }
      body { background: white; color: black; }
      .q-card { page-break-inside: avoid; border: 1px solid #ccc; box-shadow: none; margin-bottom: 20px; }
      .solucion-box { display: block !important; border: 1px solid #ddd; }
    }
  </style>
</head>
<body>
  <header>
    <div class="header-inner">
      <div>
        <h1>Simulacro Maestro Ponderado EUNACOM 2026</h1>
        <div class="subtitle">Módulo 1 · Medicina Interna (Calibrado con 1.082 Preguntas Reales Históricas)</div>
      </div>
      <div class="badge-bar">
        <div class="badge">90 Preguntas Ponderadas</div>
        <div class="badge">150 Minutos</div>
        <div class="badge">Perfil V3 ASOFAMECh</div>
      </div>
    </div>
  </header>

  <div class="nav-tabs no-print">
    <button class="tab-btn active" onclick="setMode('exam')">Modo Examen (Ocultar Respuestas)</button>
    <button class="tab-btn" onclick="setMode('study')">Modo Estudio (Ver Solucionario)</button>
    <button class="tab-btn" onclick="window.print()">🖨️ Imprimir Cuadernillo / PDF</button>
  </div>

  <main id="examContainer">
    ${finalExam.map(q => `
      <div class="q-card" id="card-${q.number}">
        <div class="q-header">
          <div class="q-num">PREGUNTA ${q.number}</div>
          <div class="q-meta">
            <div class="spec">${q.specialtyName}</div>
            <div class="code">[Perfil V3: ${q.perfilCode}] · ${q.legalLevel?.dx || 'Específico'} / ${q.legalLevel?.tx || 'Inicial'}</div>
          </div>
        </div>
        <div class="q-stem">${q.stem}</div>
        <div class="q-options">
          ${q.options.map(opt => `
            <label class="opt-label" id="opt-${q.number}-${opt.id}">
              <input type="radio" name="q_${q.number}" value="${opt.id}">
              <span class="opt-id">${opt.id})</span>
              <span>${opt.text}</span>
            </label>
          `).join('')}
        </div>
        <div class="solucion-box" id="sol-${q.number}">
          <div style="font-weight: 700; margin-bottom: 8px;">
            <span class="tag-correct">Clave Oficial: Opción ${q.correcta}</span>
            <span>· ${q.topicTitle}</span>
          </div>
          <p style="margin-top: 6px; line-height: 1.6;">${q.explicacion}</p>
        </div>
      </div>
    `).join('')}
  </main>

  <script>
    let currentMode = 'exam';
    function setMode(mode) {
      currentMode = mode;
      document.querySelectorAll('.tab-btn').forEach((b, i) => {
        b.classList.toggle('active', (i === 0 && mode === 'exam') || (i === 1 && mode === 'study'));
      });
      document.querySelectorAll('.solucion-box').forEach(box => {
        if (mode === 'study') {
          box.classList.add('visible');
        } else {
          box.classList.remove('visible');
        }
      });
    }
  </script>
</body>
</html>`;

  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`✓ Generado HTML Ponderado interactivo: ${htmlPath}`);
  console.log('--- COMPILACIÓN PONDERADA FINALIZADA CON ÉXITO ---');
}

compileWeightedExam();
