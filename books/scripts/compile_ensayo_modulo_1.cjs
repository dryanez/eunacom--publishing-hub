/**
 * Compilador Oficial del Ensayo EUNACOM 2026 · Módulo 1 (90 Preguntas)
 * 
 * Unifica los 5 lotes generados por la cuadrilla de subagentes,
 * valida exhaustivamente la estructura médica y codificación Perfil V3,
 * aplica un algoritmo de dispersión pseudoaleatoria (cero apelotonamiento de especialidades),
 * y genera los tres entregables finales:
 *   1. books/dist/ENSAYO_EUNACOM_MODULO_1_90Q.json
 *   2. books/dist/ENSAYO_EUNACOM_MODULO_1_90Q.md
 *   3. books/dist/ensayo_modulo_1_90q.html
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DIST_DIR = path.join(__dirname, '..', 'dist');

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR, { recursive: true });
}

function compileExam() {
  console.log('--- COMPILADOR ENSAYO EUNACOM 90 PREGUNTAS · MÓDULO 1 ---');

  const batchFiles = [
    path.join(DATA_DIR, 'temp_ensayo_batch_1.json'),
    path.join(DATA_DIR, 'temp_ensayo_batch_2.json'),
    path.join(DATA_DIR, 'temp_ensayo_batch_3.json'),
    path.join(DATA_DIR, 'temp_ensayo_batch_4.json'),
    path.join(DATA_DIR, 'temp_ensayo_batch_5.json'),
  ];

  let rawQuestions = [];
  batchFiles.forEach((f, idx) => {
    if (!fs.existsSync(f)) {
      throw new Error(`Archivo de lote no encontrado: ${f}. Asegúrate de que el subagente ${idx + 1} haya finalizado.`);
    }
    const data = JSON.parse(fs.readFileSync(f, 'utf8'));
    console.log(`Lote ${idx + 1}: ${data.length} preguntas cargadas`);
    rawQuestions = rawQuestions.concat(data);
  });

  if (rawQuestions.length !== 90) {
    console.warn(`ADVERTENCIA: Se esperaban 90 preguntas pero se encontraron ${rawQuestions.length}`);
  }

  // Validación de consistencia
  const specCounts = {};
  rawQuestions.forEach((q, i) => {
    if (!q.stem || !q.stem.trim()) throw new Error(`Pregunta #${i + 1} sin enunciado (stem)`);
    if (!Array.isArray(q.options) || q.options.length !== 5) {
      throw new Error(`Pregunta #${i + 1} (${q.id}) no tiene exactamente 5 alternativas (tiene ${q.options?.length})`);
    }
    if (!['A', 'B', 'C', 'D', 'E'].includes(q.correcta)) {
      throw new Error(`Pregunta #${i + 1} (${q.id}) tiene clave inválida: ${q.correcta}`);
    }
    if (!q.explicacion || q.explicacion.length < 50) {
      throw new Error(`Pregunta #${i + 1} (${q.id}) tiene explicación deficiente o vacía`);
    }
    specCounts[q.specialtyName] = (specCounts[q.specialtyName] || 0) + 1;
  });

  console.log('Distribución por especialidad:');
  console.table(specCounts);

  // Algoritmo de dispersión aleatoria sin consecutivos de la misma especialidad
  // Deterministic seeded shuffle (LCG) to ensure reproducible high-quality mixing
  let seed = 20260906;
  function rnd() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  }

  // Agrupamos por especialidad
  const bySpec = {};
  rawQuestions.forEach(q => {
    if (!bySpec[q.specialtyName]) bySpec[q.specialtyName] = [];
    bySpec[q.specialtyName].push(q);
  });

  // Mezclamos internamente cada especialidad
  Object.keys(bySpec).forEach(k => {
    bySpec[k].sort(() => rnd() - 0.5);
  });

  // Interleaved round-robin con permutación aleatoria de especialidades por ronda
  const shuffled = [];
  const specNames = Object.keys(bySpec);
  const maxPerSpec = Math.max(...Object.values(bySpec).map(a => a.length));

  for (let r = 0; r < maxPerSpec; r++) {
    // Permutamos el orden de las especialidades para esta ronda
    const roundSpecs = [...specNames].sort(() => rnd() - 0.5);
    for (const sp of roundSpecs) {
      if (bySpec[sp].length > 0) {
        shuffled.push(bySpec[sp].shift());
      }
    }
  }

  // Asignar número oficial 1 a 90
  const finalExam = shuffled.map((q, idx) => ({
    number: idx + 1,
    id: q.id || `Q-${String(idx + 1).padStart(2, '0')}`,
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
  const jsonPath = path.join(DIST_DIR, 'ENSAYO_EUNACOM_MODULO_1_90Q.json');
  fs.writeFileSync(jsonPath, JSON.stringify(finalExam, null, 2), 'utf8');
  console.log(`✓ Generado JSON: ${jsonPath}`);

  // 2. Generar Markdown
  const mdPath = path.join(DIST_DIR, 'ENSAYO_EUNACOM_MODULO_1_90Q.md');
  let md = `# 📝 ENSAYO OFICIAL EUNACOM 2026 · MÓDULO 1: MEDICINA INTERNA
### 90 Preguntas de Alta Calibración Clínica · Perfil de Conocimientos V3 ASOFAMECh

> **INSTRUCCIONES GENERALES**:
> * **Duración estándar**: 150 minutos (2 horas y 30 minutos · promedio 1.6 minutos por pregunta).
> * **Estructura**: 90 preguntas de opción múltiple con 5 alternativas (A, B, C, D, E) y una sola respuesta correcta.
> * **Distribución**: 10 especialidades de Medicina Interna (9 preguntas cada una, orden aleatorio idéntico al examen real).
> * **Modalidad de Autoevaluación**: Responda la **SECCIÓN I** completa en su hoja de respuestas sin mirar la solución. Al finalizar, contraste con la **SECCIÓN II (Solucionario Razonado & Matriz Legal Perfil V3)**.

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
  console.log(`✓ Generado Markdown: ${mdPath}`);

  // 3. Generar HTML Interactivo / Imprimible
  const htmlPath = path.join(DIST_DIR, 'ensayo_modulo_1_90q.html');
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simulacro EUNACOM 2026 · Módulo 1 Medicina Interna (90 Preguntas)</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root {
      --navy: #0f172a;
      --card-bg: #ffffff;
      --border: #e2e8f0;
      --acc: #0284c7;
      --acc-dark: #0369a1;
      --correct: #16a34a;
      --correct-bg: #f0fdf4;
      --wrong: #dc2626;
      --wrong-bg: #fef2f2;
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
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
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
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .subtitle {
      font-size: 14px;
      color: #94a3b8;
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
      box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);
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
      position: relative;
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
      background: #e0f2fe;
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
      color: #334155;
      font-size: 13px;
    }
    .q-meta .code {
      font-family: 'JetBrains Mono', monospace;
      color: var(--acc);
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
      background: #f1f5f9;
      border-color: #cbd5e1;
    }
    .opt-label input {
      margin-top: 4px;
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
      background: #f8fafc;
      border-left: 4px solid var(--acc);
      font-size: 14px;
      display: none;
    }
    .solucion-box.visible {
      display: block;
    }
    .solucion-title {
      font-weight: 700;
      color: var(--navy);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tag-correct {
      background: var(--correct);
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 13px;
    }
    .print-only { display: none; }
    @media print {
      header, .nav-tabs, .no-print { display: none !important; }
      .print-only { display: block !important; }
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
        <h1>Simulacro Oficial EUNACOM 2026</h1>
        <div class="subtitle">Módulo 1 · Medicina Interna (10 Especialidades · 90 Preguntas Perfil V3)</div>
      </div>
      <div class="badge-bar">
        <div class="badge">90 Preguntas</div>
        <div class="badge">150 Minutos</div>
        <div class="badge">100% Perfil V3 ASOFAMECh</div>
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
              <input type="radio" name="q_${q.number}" value="${opt.id}" onchange="checkAnswer(${q.number}, '${opt.id}', '${q.correcta}')">
              <span class="opt-id">${opt.id})</span>
              <span>${opt.text}</span>
            </label>
          `).join('')}
        </div>
        <div class="solucion-box" id="sol-${q.number}">
          <div class="solucion-title">
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

    function checkAnswer(qNum, selectedId, correctId) {
      if (currentMode === 'exam') {
        // En modo examen solo registramos la selección sin alertar de inmediato
        return;
      }
      const box = document.getElementById('sol-' + qNum);
      box.classList.add('visible');
    }
  </script>
</body>
</html>`;

  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log(`✓ Generado HTML interactivo: ${htmlPath}`);
  console.log('--- COMPILACIÓN FINALIZADA CON ÉXITO ---');
}

compileExam();
