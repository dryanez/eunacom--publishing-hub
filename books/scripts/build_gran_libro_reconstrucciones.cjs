/**
 * build_gran_libro_reconstrucciones.cjs
 * Compilador de "EL GRAN LIBRO EUNACOM · RECONSTRUCCIONES OFICIALES 2013 - 2025"
 * Formato editorial estilo AMIR / Libro Gordo (!Libro Gordo Preguntas y Respuestas 12-22.pdf):
 * - 2.708 Preguntas reales de exámenes históricos EUNACOM (2013 a 2025)
 * - Agrupadas por Módulo y Especialidad
 * - Portadilla de especialidad con tabla de vinculación a Tomo, Tema y Página de los manuales de estudio
 * - Preguntas a 2 columnas con comentario razonado y clave oficial inmediata
 * - Portada editorial oficial con años 2013 - 2025 y sello 1ª Edición AEE
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const puppeteer = require('puppeteer');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DIST_DIR = path.join(__dirname, '..', 'dist');
const DATA_DIR = path.join(__dirname, '..', 'data');
const ASSETS_DIR = path.join(__dirname, '..', 'assets');

const mapper = require('./code_to_manual_mapper.cjs');

// Cargar catálogo de Perfil V3 para nombres oficiales y niveles legales
const FULL_CURRICULUM_FILE = path.join(__dirname, '..', '..', 'classes', 'curriculum', 'perfil_v3_full.json');
let v3Catalog = {};
if (fs.existsSync(FULL_CURRICULUM_FILE)) {
  const raw = JSON.parse(fs.readFileSync(FULL_CURRICULUM_FILE, 'utf8'));
  if (raw.specialties) {
    Object.values(raw.specialties).forEach(sp => {
      if (sp.codes) {
        sp.codes.forEach(c => {
          v3Catalog[c.code] = c;
        });
      }
    });
  }
}

// Cargar Nuevo Logo AEE en SVG
let aeeLogoSvg = '';
const newLogoPath = path.join(ASSETS_DIR, 'aee_logo_new.svg');
if (fs.existsSync(newLogoPath)) {
  aeeLogoSvg = fs.readFileSync(newLogoPath, 'utf8');
}

// Registro de especialidades y sus códigos Perfil V3
const MODULES = [
  {
    moduleNum: 1,
    moduleName: 'Medicina Interna',
    specialties: [
      { key: 'cardiologia', pfx: '1.01', name: 'Cardiología', tomo: '01', color: '#ea580c' },
      { key: 'infectologia', pfx: '1.04', name: 'Infectología', tomo: '02', color: '#4d7c0f' },
      { key: 'gastroenterologia', pfx: '1.06', name: 'Gastroenterología', tomo: '03', color: '#15803d' },
      { key: 'neumologia', pfx: '1.05', name: 'Respiratorio / Neumología', tomo: '04', color: '#0f766e' },
      { key: 'nefrologia', pfx: '1.09', name: 'Nefrología', tomo: '05', color: '#a16207' },
      { key: 'diabetes', pfx: '1.02', name: 'Diabetes Mellitus & Nutrición', tomo: '06', color: '#0891b2' },
      { key: 'endocrinologia', pfx: '1.03', name: 'Endocrinología & Metabolismo', tomo: '07', color: '#7c3aed' },
      { key: 'hematologia', pfx: '1.08', name: 'Hematología & Hemostasia', tomo: '08', color: '#be123c' },
      { key: 'reumatologia', pfx: '1.11', name: 'Reumatología', tomo: '09', color: '#9f1239' },
      { key: 'neurologia', pfx: '1.10', name: 'Neurología & Geriatría', tomo: '10', color: '#6d28d9' },
    ]
  },
  {
    moduleNum: 2,
    moduleName: 'Cirugía y Especialidades',
    specialties: [
      { key: 'cirugia', pfx: '4.01', name: 'Cirugía General & Anestesia', tomo: '11', color: '#334155' },
      { key: 'traumatologia', pfx: '4.02', name: 'Traumatología & Ortopedia', tomo: '12', color: '#b45309' },
      { key: 'urologia', pfx: '4.03', name: 'Urología', tomo: '13', color: '#0369a1' },
      { key: 'otorrino', pfx: '6.03', name: 'Otorrinolaringología (ORL)', tomo: '14', color: '#4338ca' },
      { key: 'oftalmologia', pfx: '6.02', name: 'Oftalmología', tomo: '15', color: '#0e7490' },
      { key: 'dermatologia', pfx: '6.01', name: 'Dermatología', tomo: '16', color: '#a21caf' },
      { key: 'psiquiatria', pfx: '5.01', name: 'Psiquiatría & Salud Mental', tomo: '17', color: '#7e22ce' },
    ]
  },
  {
    moduleNum: 3,
    moduleName: 'Materno - Infantil',
    specialties: [
      { key: 'pediatria', pfx: '2.01', name: 'Pediatría & Neonatología', tomo: '18', color: '#c2410c' },
      { key: 'obstetricia', pfx: '3.01_ob', name: 'Obstetricia & Materno-Fetal', tomo: '19', color: '#9d174d' },
      { key: 'ginecologia', pfx: '3.01_go', name: 'Ginecología & Oncología', tomo: '20', color: '#be185d' },
    ]
  },
  {
    moduleNum: 4,
    moduleName: 'Salud Pública y Gestión',
    specialties: [
      { key: 'saludpublica', pfx: '7.01', name: 'Salud Pública, Bioética & GES', tomo: '21', color: '#166534' },
    ]
  }
];

function isObstetricia(code) {
  const obPrefixes = ['3.01.1.001', '3.01.1.002', '3.01.1.003', '3.01.1.004', '3.01.1.005', '3.01.1.006', '3.01.1.007', '3.01.1.008', '3.01.1.009', '3.01.1.010', '3.01.1.011', '3.01.1.031'];
  const obUrg = ['3.01.2.001', '3.01.2.003', '3.01.2.004', '3.01.2.005', '3.01.2.006', '3.01.2.007', '3.01.2.009', '3.01.2.010', '3.01.2.011', '3.01.2.012', '3.01.2.013', '3.01.2.014', '3.01.2.015', '3.01.2.017', '3.01.2.021'];
  return obPrefixes.includes(code) || obUrg.includes(code);
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getBaseStyles() {
  return `
    @page {
      size: A4 portrait;
      margin: 14mm 12mm 14mm 12mm;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0; padding: 0;
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 8pt; line-height: 1.34;
      color: #1e293b; background: white;
    }

    /* ════════════ ENCABEZADO DE PÁGINA RECURRENTE ════════════ */
    .running-header {
      display: flex; justify-content: space-between; align-items: center;
      border-bottom: 1.5px solid #0f172a; padding-bottom: 3px; margin-bottom: 12px;
      font-family: 'Archivo', sans-serif; font-size: 7pt; text-transform: uppercase;
      letter-spacing: 0.08em; color: #64748b;
    }
    .running-header strong { color: #0f172a; font-weight: 800; }

    /* ════════════ PORTADILLA DE ESPECIALIDAD ════════════ */
    .spec-opener {
      page-break-before: always;
      page-break-after: always;
      padding: 8mm 0;
    }
    .spec-banner {
      background: linear-gradient(135deg, #0b1420 0%, #1e293b 100%);
      color: white; padding: 18px 20px; border-radius: 4px;
      border-left: 6px solid var(--accent); margin-bottom: 16px;
      display: flex; justify-content: space-between; align-items: center;
    }
    .spec-banner-title {
      font-family: 'Archivo', sans-serif; font-size: 20pt; font-weight: 900;
      margin: 0; text-transform: uppercase; letter-spacing: -0.01em;
    }
    .spec-banner-sub {
      font-size: 9.5pt; color: #94a3b8; margin-top: 4px; font-family: 'IBM Plex Sans', sans-serif;
    }
    .spec-banner-chip {
      font-family: 'IBM Plex Mono', monospace; font-size: 9pt; font-weight: 700;
      background: var(--accent); color: white; padding: 6px 12px; border-radius: 3px;
      letter-spacing: 0.08em; text-align: right;
    }

    /* ════════════ TABLA DE MAPEO AL MANUAL DE ESTUDIO ════════════ */
    .table-title {
      font-family: 'Archivo', sans-serif; font-size: 11pt; font-weight: 800;
      color: #0f172a; text-transform: uppercase; margin: 14px 0 6px 0;
      display: flex; justify-content: space-between; align-items: center;
    }
    .rec-table {
      width: 100%; border-collapse: collapse; font-size: 7.5pt; line-height: 1.3;
      margin-bottom: 20px;
    }
    .rec-table th {
      background: #0f172a; color: white; font-family: 'Archivo', sans-serif;
      font-size: 7pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
      padding: 5px 7px; text-align: left;
    }
    .rec-table td {
      padding: 4px 6px; border-bottom: 1px solid #e2e8f0; vertical-align: middle;
    }
    .td-code { font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--accent); }
    .td-title { font-weight: 600; color: #1e293b; }
    .pill-qcount {
      display: inline-block; background: #f1f5f9; color: #0f172a; font-family: 'IBM Plex Mono', monospace;
      font-weight: 700; padding: 1px 5px; border-radius: 3px; border: 1px solid #cbd5e1; font-size: 6.8pt;
    }
    .pill-manual {
      display: inline-block; background: #f0f9ff; color: #0284c7; border: 1px solid #bae6fd;
      padding: 2px 5px; border-radius: 3px; font-family: 'IBM Plex Mono', monospace;
      font-size: 6.6pt; font-weight: 600; white-space: nowrap;
    }

    /* ════════════ PREGUNTAS A 2 COLUMNAS (ESTILO AMIR) ════════════ */
    .questions-wrapper {
      page-break-before: always;
    }
    .q-columns {
      column-count: 2; column-gap: 15px; column-rule: 1px solid #e2e8f0;
      text-align: justify;
    }
    .q-card {
      break-inside: avoid; margin-bottom: 12px; padding-bottom: 8px;
      border-bottom: 1px solid #cbd5e1;
    }
    .q-header {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 5px;
    }
    .q-tag {
      font-family: 'IBM Plex Mono', monospace; font-size: 7pt; font-weight: 700;
      background: #0f172a; color: white; padding: 2px 6px; border-radius: 3px;
      letter-spacing: 0.04em;
    }
    .q-code-badge {
      font-family: 'IBM Plex Mono', monospace; font-size: 6.8pt; font-weight: 700;
      color: var(--accent);
    }
    .q-stem {
      font-size: 8pt; line-height: 1.33; color: #0f172a; margin-bottom: 6px; font-weight: 500;
    }
    .q-options {
      margin-bottom: 6px;
    }
    .q-opt {
      font-size: 7.5pt; line-height: 1.25; margin-bottom: 2px; color: #334155;
    }
    .q-opt-id {
      font-family: 'Archivo', sans-serif; font-weight: 700; color: #0f172a;
    }

    /* Cuadro de Solución y Comentario Razonado Continuo */
    .q-solution {
      background: #f8fafc; border-left: 3px solid #10b981; border-radius: 0 3px 3px 0;
      padding: 5px 7px; margin-top: 5px; font-size: 7.3pt; line-height: 1.32;
    }
    .q-sol-top {
      display: flex; align-items: center; gap: 6px; margin-bottom: 3px;
    }
    .q-sol-pill {
      background: #10b981; color: white; font-family: 'Archivo', sans-serif;
      font-weight: 900; font-size: 7pt; padding: 1px 6px; border-radius: 2px;
      letter-spacing: 0.04em;
    }
    .q-sol-text {
      color: #334155;
    }
  `;
}

async function renderCoverAndTOC(allQuestionsBySpec) {
  console.log('>>> [1/5] Generando Portada Maestra y Gran Índice de Reconstrucciones...');

  let totalQuestions = 0;
  MODULES.forEach(m => {
    m.specialties.forEach(sp => {
      const qList = allQuestionsBySpec[sp.key] || [];
      totalQuestions += qList.length;
    });
  });

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>El Gran Libro EUNACOM · Reconstrucciones Oficiales 2013-2025</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @page { size: A4 portrait; margin: 0; }
    * { box-sizing: border-box; }
    body {
      margin: 0; padding: 0; font-family: 'IBM Plex Sans', sans-serif;
      color: #1e293b; background: white;
    }

    /* PORTADA OFICIAL ESTILO AMIR / AEE */
    .cover-page {
      page-break-after: always;
      width: 100%; height: 100vh; max-height: 297mm;
      background: #080d14; color: white; position: relative; overflow: hidden;
      display: flex; flex-direction: column; justify-content: space-between;
      padding: 34mm 26mm 26mm 32mm; box-sizing: border-box;
    }
    .cover-photo {
      position: absolute; inset: 0;
      background-image: url('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?fm=jpg&q=80&w=1600&auto=format&fit=crop');
      background-size: cover; background-position: center;
      filter: grayscale(0.5) brightness(0.32) contrast(1.2);
      z-index: 1;
    }
    .cover-veil {
      position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(8,13,20,0.90) 0%, rgba(8,13,20,0.60) 35%, rgba(8,13,20,0.95) 75%, rgba(8,13,20,0.99) 100%);
      z-index: 2;
    }
    .cover-spine {
      position: absolute; left: 0; top: 0; bottom: 0; width: 16px;
      background: linear-gradient(180deg, #991b1b 0%, #e11d48 50%, #ea580c 100%);
      z-index: 3;
    }
    .cover-watermark {
      position: absolute; right: -25px; top: 60px;
      font-family: 'Archivo', sans-serif; font-size: 190pt; font-weight: 900; line-height: 0.8;
      color: rgba(255, 255, 255, 0.04); user-select: none; pointer-events: none; z-index: 3;
    }
    .cover-top {
      display: flex; justify-content: space-between; align-items: center; z-index: 4;
    }
    .cover-logo-svg svg { width: 250px; height: auto; display: block; }
    .cover-edition {
      font-family: 'IBM Plex Mono', monospace; font-size: 9pt; font-weight: 700;
      letter-spacing: 0.15em; color: #f43f5e;
      border: 1px solid rgba(244,63,94,0.4); background: rgba(8,13,20,0.7);
      padding: 6px 14px; border-radius: 4px;
    }
    .cover-main {
      margin-top: auto; margin-bottom: 15mm; z-index: 4;
    }
    .cover-chip {
      display: inline-block; padding: 6px 14px; background: #991b1b;
      font-family: 'IBM Plex Mono', monospace; font-size: 9pt; font-weight: 700;
      letter-spacing: 0.16em; color: white; border-radius: 3px; margin-bottom: 16px;
      text-transform: uppercase;
    }
    .cover-title-prefix {
      font-size: 18pt; font-weight: 500; color: #94a3b8; margin-bottom: 4px;
    }
    .cover-title-main {
      font-family: 'Archivo', sans-serif; font-size: 42pt; font-weight: 900; line-height: 0.95;
      color: #ffffff; letter-spacing: -0.03em; margin: 0; text-transform: uppercase;
    }
    .cover-subject {
      font-family: 'Archivo', sans-serif; font-size: 20pt; font-weight: 700;
      color: #f43f5e; margin-top: 10px; letter-spacing: -0.01em;
    }
    .cover-desc {
      font-size: 11pt; color: #cbd5e1; margin-top: 8px; line-height: 1.4; max-width: 660px;
    }
    .cover-rule {
      width: 100%; height: 1px; background: rgba(255, 255, 255, 0.25); margin: 20px 0 14px 0;
    }
    .cover-meta {
      font-family: 'IBM Plex Mono', monospace; font-size: 8.5pt; letter-spacing: 0.08em;
      color: #94a3b8; display: flex; justify-content: space-between;
    }

    /* ÍNDICE GENERAL */
    .toc-page {
      page-break-after: always; padding: 16mm 14mm 16mm 14mm;
    }
    .toc-header {
      border-bottom: 2.5px solid #0f172a; padding-bottom: 8px; margin-bottom: 14px;
      display: flex; justify-content: space-between; align-items: flex-end;
    }
    .toc-title {
      font-family: 'Archivo', sans-serif; font-size: 16pt; font-weight: 900;
      color: #0f172a; text-transform: uppercase; margin: 0;
    }
    .toc-table {
      width: 100%; border-collapse: collapse; font-size: 8pt; line-height: 1.35;
    }
    .toc-table th {
      background: #0f172a; color: white; font-family: 'Archivo', sans-serif;
      font-size: 7.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
      padding: 6px 8px; text-align: left;
    }
    .toc-table td {
      padding: 5px 8px; border-bottom: 1px solid #e2e8f0;
    }
    .toc-mod {
      background: #f1f5f9; font-family: 'Archivo', sans-serif; font-size: 8pt;
      font-weight: 800; color: #0f172a; text-transform: uppercase; padding: 7px 8px;
    }
    .toc-pill-q {
      font-family: 'IBM Plex Mono', monospace; font-weight: 700; color: #991b1b;
    }
  </style>
</head>
<body>

  <div class="cover-page">
    <div class="cover-photo"></div>
    <div class="cover-veil"></div>
    <div class="cover-spine"></div>
    <div class="cover-watermark">2025</div>
    
    <div class="cover-top">
      <div class="cover-logo-svg">${aeeLogoSvg}</div>
      <div class="cover-edition">1ª EDICIÓN · AEE · 2013 - 2025</div>
    </div>

    <div class="cover-main">
      <div class="cover-chip">RECONSTRUCCIONES OFICIALES · BANCO HISTÓRICO</div>
      <div class="cover-title-prefix">Preguntas Examen EUNACOM 2013 - 2025</div>
      <h1 class="cover-title-main">El Gran Libro EUNACOM</h1>
      <div class="cover-subject">Preguntas Reales y sus Comentarios Razonados</div>
      <div class="cover-desc">
        Compendio enciclopédico de ${totalQuestions.toLocaleString('es-CL')} preguntas reales de exámenes EUNACOM rendidos entre 2013 y 2025. Organizado por especialidad médica y enlazado directamente a los manuales de estudio de la Academia Examen EUNACOM.
      </div>
      <div class="cover-rule"></div>
      <div class="cover-meta">
        <span>CONVOCATORIAS OFICIALES 2013 - 2025</span>
        <span>${totalQuestions.toLocaleString('es-CL')} PREGUNTAS REALES CON JUSTIFICACIÓN MINSAL/GES</span>
      </div>
    </div>
  </div>

  <div class="toc-page">
    <div class="toc-header">
      <div>
        <h2 class="toc-title">Índice General de Reconstrucciones Históricas</h2>
        <div style="font-size: 8.5pt; color: #64748b;">Distribución por Módulos y Especialidades · EUNACOM 2013 - 2025</div>
      </div>
      <div style="font-family: 'IBM Plex Mono'; font-size: 8pt; font-weight: 700; color: #991b1b;">
        TOTAL: ${totalQuestions.toLocaleString('es-CL')} PREGUNTAS
      </div>
    </div>

    <table class="toc-table">
      <thead>
        <tr>
          <th style="width: 8%;">Tomo</th>
          <th style="width: 34%;">Especialidad</th>
          <th style="width: 22%;">Preguntas Históricas</th>
          <th style="width: 36%;">Vinculación a Manual AEE</th>
        </tr>
      </thead>
      <tbody>
        ${MODULES.map(m => `
          <tr class="toc-mod"><td colspan="4">📂 MÓDULO ${m.moduleNum}: ${m.moduleName.toUpperCase()}</td></tr>
          ${m.specialties.map(sp => {
            const count = (allQuestionsBySpec[sp.key] || []).length;
            return `
              <tr>
                <td style="font-family: 'IBM Plex Mono'; font-weight: 700; color: ${sp.color};">${sp.tomo}</td>
                <td style="font-weight: 700; color: #0f172a;">${sp.name}</td>
                <td class="toc-pill-q">${count} preguntas reales</td>
                <td style="font-family: 'IBM Plex Mono'; font-size: 7.5pt; color: #0369a1;">Tomo ${sp.tomo} · Manual de ${sp.name.split('/')[0].trim()}</td>
              </tr>
            `;
          }).join('')}
        `).join('')}
      </tbody>
    </table>
  </div>

</body>
</html>`;

  const tempHtml = path.join(__dirname, 'temp_rec_cover.html');
  const tempPdf = path.join(DIST_DIR, 'temp_rec_cover.pdf');
  fs.writeFileSync(tempHtml, html, 'utf8');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('file:///' + tempHtml.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page.pdf({
    path: tempPdf,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
  });
  await browser.close();
  if (fs.existsSync(tempHtml)) fs.unlinkSync(tempHtml);

  console.log(`✓ Portada e Índice Maestra de Reconstrucciones generados: ${tempPdf}`);
  return tempPdf;
}

function buildModuleHtml(mod, allQuestionsBySpec) {
  let contentHtml = '';

  mod.specialties.forEach(sp => {
    const qList = allQuestionsBySpec[sp.key] || [];
    if (!qList.length) return;

    // Resumen de códigos en esta especialidad
    const codeMap = {};
    qList.forEach(q => {
      const c = q.code;
      if (!codeMap[c]) {
        const v3Item = v3Catalog[c] || {};
        codeMap[c] = {
          code: c,
          title: v3Item.name || q.topicTitle || 'Patología Clínica',
          dx: v3Item.dx || 'Específico',
          tx: v3Item.tx || 'Inicial',
          seg: v3Item.seg || 'Derivar',
          count: 0
        };
      }
      codeMap[c].count++;
    });

    const sortedCodes = Object.values(codeMap).sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }));

    // 1. Portadilla de Especialidad y Tabla de Mapeo
    const tableRows = sortedCodes.map(r => {
      const manualRef = mapper.getManualReference(r.code);
      const manualStr = manualRef ? manualRef.referenceString : `Tomo ${sp.tomo} (Pág. 8)`;
      return `
        <tr>
          <td class="td-code">${r.code}</td>
          <td class="td-title">${escapeHtml(r.title)}</td>
          <td>Dx: <strong>${r.dx}</strong> · Tx: <strong>${r.tx}</strong></td>
          <td style="text-align: center;"><span class="pill-qcount">${r.count} Q</span></td>
          <td><span class="pill-manual">${manualStr}</span></td>
        </tr>
      `;
    }).join('');

    // 2. Cuadernillo de Preguntas con Solución Inmediata a 2 Columnas
    const questionsHtml = qList.map((q, idx) => {
      const v3Item = v3Catalog[q.code] || {};
      const topicName = v3Item.name || q.topicTitle || 'Caso Clínico';
      const cleanRecTag = q.recTag || `EUNACOM ${q.year || '2024'}`;

      const optionsHtml = (q.options || []).map(opt => `
        <div class="q-opt"><span class="q-opt-id">${opt.id})</span> ${escapeHtml(opt.text)}</div>
      `).join('');

      const explText = q.explicacion || `Respuesta oficial acreditada por el comité de evaluación médica EUNACOM según pautas MINSAL.`;

      return `
        <div class="q-card">
          <div class="q-header">
            <span class="q-tag">${escapeHtml(cleanRecTag)}</span>
            <span class="q-code-badge">${q.code} · ${escapeHtml(topicName.slice(0, 26))}</span>
          </div>
          <div class="q-stem">${escapeHtml(q.stem)}</div>
          <div class="q-options">${optionsHtml}</div>
          <div class="q-solution">
            <div class="q-sol-top">
              <span class="q-sol-pill">Respuesta: ${q.correcta}</span>
              <strong style="color: #0f172a; font-size: 7.2pt;">Fundamentación Oficial MINSAL / GES:</strong>
            </div>
            <div class="q-sol-text">${escapeHtml(explText)}</div>
          </div>
        </div>
      `;
    }).join('');

    contentHtml += `
      <!-- PORTADILLA DE ESPECIALIDAD -->
      <div class="spec-opener" style="--accent: ${sp.color};">
        <div class="running-header">
          <div><strong>EL GRAN LIBRO EUNACOM · RECONSTRUCCIONES 2013-2025</strong></div>
          <div>MÓDULO ${mod.moduleNum}: ${mod.moduleName.toUpperCase()} · TOMO ${sp.tomo}</div>
        </div>

        <div class="spec-banner">
          <div>
            <h2 class="spec-banner-title">${sp.name}</h2>
            <div class="spec-banner-sub">Módulo ${mod.moduleNum}: ${mod.moduleName} · Colección Tomo ${sp.tomo}</div>
          </div>
          <div class="spec-banner-chip">${qList.length} PREGUNTAS REALES<br>CONVOCATORIAS 2013 - 2025</div>
        </div>

        <div class="table-title">
          <span>Matriz de Frecuencia Perfil V3 &amp; Enlace a Manuales de Estudio AEE</span>
          <span style="font-family: 'IBM Plex Mono'; font-size: 8pt; color: ${sp.color};">${sortedCodes.length} CÓDIGOS EVALUADOS</span>
        </div>

        <table class="rec-table">
          <thead>
            <tr>
              <th style="width: 13%;">Código V3</th>
              <th style="width: 36%;">Situación Clínica / Patología Oficial</th>
              <th style="width: 20%;">Nivel Legal Exigido</th>
              <th style="width: 11%; text-align: center;">Preguntas</th>
              <th style="width: 20%;">Manual de Estudio AEE</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>

      <!-- PREGUNTAS A 2 COLUMNAS -->
      <div class="questions-wrapper" style="--accent: ${sp.color};">
        <div class="running-header">
          <div><strong>AEE · EL GRAN LIBRO EUNACOM</strong> · ${sp.name.toUpperCase()} (TOMO ${sp.tomo})</div>
          <div>RECONSTRUCCIONES OFICIALES 2013 - 2025</div>
        </div>

        <div class="q-columns">
          ${questionsHtml}
        </div>
      </div>
    `;
  });

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Módulo ${mod.moduleNum}: ${mod.moduleName} · Reconstrucciones EUNACOM</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600;700&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
  <style>
    ${getBaseStyles()}
  </style>
</head>
<body>
  ${contentHtml}
</body>
</html>`;
}

async function main() {
  console.log('════════════════════════════════════════════════════════════════════');
  console.log('COMPILADOR: EL GRAN LIBRO EUNACOM · RECONSTRUCCIONES 2013 - 2025');
  console.log('════════════════════════════════════════════════════════════════════');

  // 1. Cargar el banco oficial de preguntas reales
  const bankFile = path.join(DATA_DIR, 'real_questions_by_code.json');
  if (!fs.existsSync(bankFile)) {
    throw new Error(`No se encontró el archivo de preguntas reales en ${bankFile}`);
  }
  const bank = JSON.parse(fs.readFileSync(bankFile, 'utf8'));

  // 2. Clasificar preguntas en especialidades
  const allQuestionsBySpec = {};
  for (const [code, qList] of Object.entries(bank)) {
    qList.forEach(q => {
      q.code = code;
      const pfx = code.split('.').slice(0, 2).join('.');
      let specKey = 'saludpublica';

      if (pfx === '1.01') specKey = 'cardiologia';
      else if (pfx === '1.02') specKey = 'diabetes';
      else if (pfx === '1.03') specKey = 'endocrinologia';
      else if (pfx === '1.04') specKey = 'infectologia';
      else if (pfx === '1.05') specKey = 'neumologia';
      else if (pfx === '1.06') specKey = 'gastroenterologia';
      else if (pfx === '1.08') specKey = 'hematologia';
      else if (pfx === '1.09') specKey = 'nefrologia';
      else if (pfx === '1.10') specKey = 'neurologia';
      else if (pfx === '1.11') specKey = 'reumatologia';
      else if (pfx === '2.01') specKey = 'pediatria';
      else if (pfx === '3.01') {
        specKey = isObstetricia(code) ? 'obstetricia' : 'ginecologia';
      }
      else if (pfx === '4.01') specKey = 'cirugia';
      else if (pfx === '4.02') specKey = 'traumatologia';
      else if (pfx === '4.03') specKey = 'urologia';
      else if (pfx === '5.01') specKey = 'psiquiatria';
      else if (pfx === '6.01') specKey = 'dermatologia';
      else if (pfx === '6.02') specKey = 'oftalmologia';
      else if (pfx === '6.03') specKey = 'otorrino';
      else if (pfx === '7.01') specKey = 'saludpublica';

      if (!allQuestionsBySpec[specKey]) allQuestionsBySpec[specKey] = [];
      allQuestionsBySpec[specKey].push(q);
    });
  }

  // 3. Generar Portada e Índice Maestra
  const coverPdf = await renderCoverAndTOC(allQuestionsBySpec);
  const pdfList = [coverPdf];

  // 4. Compilar en Puppeteer por lotes optimizados para evitar timeouts
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const BATCHES = [
    { id: '1a', label: 'Módulo 1 (Parte 1: Cardio a Nefro)', moduleNum: 1, moduleName: 'Medicina Interna', specialties: MODULES[0].specialties.slice(0, 5) },
    { id: '1b', label: 'Módulo 1 (Parte 2: Diabetes a Neuro)', moduleNum: 1, moduleName: 'Medicina Interna', specialties: MODULES[0].specialties.slice(5) },
    { id: '2', label: 'Módulo 2: Cirugía y Especialidades', moduleNum: 2, moduleName: 'Cirugía y Especialidades', specialties: MODULES[1].specialties },
    { id: '3', label: 'Módulo 3: Materno - Infantil', moduleNum: 3, moduleName: 'Materno - Infantil', specialties: MODULES[2].specialties },
    { id: '4', label: 'Módulo 4: Salud Pública y Gestión', moduleNum: 4, moduleName: 'Salud Pública y Gestión', specialties: MODULES[3].specialties },
  ];

  for (const b of BATCHES) {
    console.log(`>>> Compilando PDF de Reconstrucciones para: ${b.label}...`);
    const modHtml = buildModuleHtml(b, allQuestionsBySpec);
    const tempHtmlPath = path.join(__dirname, `temp_rec_batch_${b.id}.html`);
    const tempPdfPath = path.join(DIST_DIR, `temp_rec_batch_${b.id}.pdf`);
    fs.writeFileSync(tempHtmlPath, modHtml, 'utf8');

    const page = await browser.newPage();
    page.setDefaultTimeout(300000);
    page.setDefaultNavigationTimeout(300000);

    await page.goto('file:///' + tempHtmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 300000 });
    await page.pdf({
      path: tempPdfPath,
      format: 'A4',
      printBackground: true,
      timeout: 300000,
      margin: { top: 0, bottom: 0, left: 0, right: 0 }
    });
    await page.close();

    if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
    pdfList.push(tempPdfPath);
    console.log(`✓ ${b.label} renderizado exitosamente.`);
  }

  await browser.close();

  // 5. Ensamblar todo con pypdf
  console.log('>>> [5/5] Ensamblando El Gran Libro EUNACOM de Reconstrucciones...');
  const outFinalPdf = path.join(DIST_DIR, 'El_Gran_Libro_EUNACOM_Reconstrucciones_2013_2025.pdf');

  const mergeScript = `
import pypdf
import sys

writer = pypdf.PdfWriter()
files = ${JSON.stringify(pdfList.map(p => p.replace(/\\/g, '/')))}
for f in files:
    try:
        reader = pypdf.PdfReader(f)
        for page in reader.pages:
            writer.add_page(page)
    except Exception as e:
        print(f"Error procesando {f}: {e}", file=sys.stderr)

with open("${outFinalPdf.replace(/\\/g, '/')}", "wb") as out:
    writer.write(out)
print("Merge de Reconstrucciones finalizado exitosamente.")
`;

  const pyScriptPath = path.join(__dirname, 'temp_merge_rec.py');
  fs.writeFileSync(pyScriptPath, mergeScript, 'utf8');

  execSync(`python "${pyScriptPath}"`, { stdio: 'inherit' });
  if (fs.existsSync(pyScriptPath)) fs.unlinkSync(pyScriptPath);

  // Limpiar temporales de módulos
  pdfList.forEach(p => {
    if (fs.existsSync(p)) fs.unlinkSync(p);
  });

  const stats = fs.statSync(outFinalPdf);
  console.log('════════════════════════════════════════════════════════════════════');
  console.log(`🎉 ¡ÉXITO TOTAL! EL GRAN LIBRO EUNACOM (RECONSTRUCCIONES) GENERADO:`);
  console.log(`📄 Archivo: ${outFinalPdf}`);
  console.log(`📦 Tamaño: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  console.log('════════════════════════════════════════════════════════════════════');
}

main().catch(err => {
  console.error('Error fatal en compilador de reconstrucciones:', err);
  process.exit(1);
});
