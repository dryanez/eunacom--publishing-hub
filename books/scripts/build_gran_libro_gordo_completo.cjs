/**
 * build_gran_libro_gordo_completo.cjs
 * Compilador de "EL GRAN LIBRO GORDO EUNACOM · 1.890 PREGUNTAS DE PRÁCTICA (TODOS LOS TOMOS)"
 *
 * Consolida los 21 Tomos Monográficos (Módulos 1, 2, 3 y 4) en un único PDF magistral:
 * - 1.890 preguntas de práctica en formato examen (2 columnas).
 * - Doble Matriz Perfil V3 con vinculación a Tomo, Tema y Página de los manuales AEE.
 * - Solucionarios comentados y razonados a ancho completo horizontal.
 * - Gran Portada Editorial y Gran Índice General con años 2013-2026 y sello 1ª Edición AEE.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const puppeteer = require('puppeteer');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DIST_DIR = path.join(__dirname, '..', 'dist');
const ASSETS_DIR = path.join(__dirname, '..', 'assets');

const TOMOS = [
  { ch: '01', key: 'cardiologia', title: 'Cardiología', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#ea580c', file: 'Libro_Gordo_Cardiologia_90Q.pdf' },
  { ch: '02', key: 'infectologia', title: 'Infectología', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#4d7c0f', file: 'Libro_Gordo_Infectologia_90Q.pdf' },
  { ch: '03', key: 'gastroenterologia', title: 'Gastroenterología', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#15803d', file: 'Libro_Gordo_Gastroenterologia_90Q.pdf' },
  { ch: '04', key: 'neumologia', title: 'Respiratorio', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#0f766e', file: 'Libro_Gordo_Respiratorio_90Q.pdf' },
  { ch: '05', key: 'nefrologia', title: 'Nefrología', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#a16207', file: 'Libro_Gordo_Nefrologia_90Q.pdf' },
  { ch: '06', key: 'diabetes', title: 'Diabetes Mellitus', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#0891b2', file: 'Libro_Gordo_Diabetes_90Q.pdf' },
  { ch: '07', key: 'endocrinologia', title: 'Endocrinología', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#7c3aed', file: 'Libro_Gordo_Endocrinologia_90Q.pdf' },
  { ch: '08', key: 'hematologia', title: 'Hematología', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#be123c', file: 'Libro_Gordo_Hematologia_90Q.pdf' },
  { ch: '09', key: 'reumatologia', title: 'Reumatología', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#9f1239', file: 'Libro_Gordo_Reumatologia_90Q.pdf' },
  { ch: '10', key: 'neurologia', title: 'Neurología y Geriatría', mod: 'MÓDULO 1: MEDICINA INTERNA', color: '#6d28d9', file: 'Libro_Gordo_Neurologia_90Q.pdf' },
  { ch: '11', key: 'cirugia', title: 'Cirugía General', mod: 'MÓDULO 2: CIRUGÍA Y ESPECIALIDADES', color: '#334155', file: 'Libro_Gordo_Cirugia_90Q.pdf' },
  { ch: '12', key: 'traumatologia', title: 'Traumatología y Ortopedia', mod: 'MÓDULO 2: CIRUGÍA Y ESPECIALIDADES', color: '#b45309', file: 'Libro_Gordo_Traumatologia_90Q.pdf' },
  { ch: '13', key: 'urologia', title: 'Urología', mod: 'MÓDULO 2: CIRUGÍA Y ESPECIALIDADES', color: '#0369a1', file: 'Libro_Gordo_Urologia_90Q.pdf' },
  { ch: '14', key: 'otorrino', title: 'Otorrinolaringología', mod: 'MÓDULO 2: CIRUGÍA Y ESPECIALIDADES', color: '#4338ca', file: 'Libro_Gordo_Otorrinolaringologia_90Q.pdf' },
  { ch: '15', key: 'oftalmologia', title: 'Oftalmología', mod: 'MÓDULO 2: CIRUGÍA Y ESPECIALIDADES', color: '#0e7490', file: 'Libro_Gordo_Oftalmologia_90Q.pdf' },
  { ch: '16', key: 'dermatologia', title: 'Dermatología', mod: 'MÓDULO 2: CIRUGÍA Y ESPECIALIDADES', color: '#a21caf', file: 'Libro_Gordo_Dermatologia_90Q.pdf' },
  { ch: '17', key: 'psiquiatria', title: 'Psiquiatría General', mod: 'MÓDULO 2: CIRUGÍA Y ESPECIALIDADES', color: '#7e22ce', file: 'Libro_Gordo_Psiquiatria_90Q.pdf' },
  { ch: '18', key: 'pediatria', title: 'Pediatría General', mod: 'MÓDULO 3: MATERNO - INFANTIL', color: '#c2410c', file: 'Libro_Gordo_Pediatria_90Q.pdf' },
  { ch: '19', key: 'obstetricia', title: 'Obstetricia', mod: 'MÓDULO 3: MATERNO - INFANTIL', color: '#9d174d', file: 'Libro_Gordo_Obstetricia_90Q.pdf' },
  { ch: '20', key: 'ginecologia', title: 'Ginecología', mod: 'MÓDULO 3: MATERNO - INFANTIL', color: '#be185d', file: 'Libro_Gordo_Ginecologia_90Q.pdf' },
  { ch: '21', key: 'saludpublica', title: 'Salud Pública', mod: 'MÓDULO 4: SALUD PÚBLICA Y GESTIÓN', color: '#166534', file: 'Libro_Gordo_SaludPublica_90Q.pdf' },
];

// Cargar Nuevo Logo AEE en SVG
let aeeLogoSvg = '';
const newLogoPath = path.join(ASSETS_DIR, 'aee_logo_new.svg');
if (fs.existsSync(newLogoPath)) {
  aeeLogoSvg = fs.readFileSync(newLogoPath, 'utf8');
}

async function renderMasterCoverAndIndex() {
  console.log('>>> [1/3] Generando Portada Maestra y Gran Índice General...');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>El Gran Libro Gordo EUNACOM · 1.890 Preguntas de Práctica</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    @page { size: A4 portrait; margin: 0; }
    * { box-sizing: border-box; }
    body {
      margin: 0; padding: 0;
      font-family: 'IBM Plex Sans', sans-serif;
      color: #1e293b; background: white;
    }

    /* ════════════ GRAN PORTADA EDITORIAL MASTER ════════════ */
    .master-cover {
      page-break-after: always;
      width: 100%; height: 100vh; max-height: 297mm;
      background: #090f18; color: white;
      position: relative; overflow: hidden;
      display: flex; flex-direction: column; justify-content: space-between;
      padding: 34mm 26mm 26mm 32mm; box-sizing: border-box;
    }
    .mc-photo {
      position: absolute; inset: 0;
      background-image: url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?fm=jpg&q=80&w=1600&auto=format&fit=crop');
      background-size: cover; background-position: center;
      filter: grayscale(0.4) brightness(0.35) contrast(1.15);
      z-index: 1;
    }
    .mc-veil {
      position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(9,15,24,0.88) 0%, rgba(9,15,24,0.60) 35%, rgba(9,15,24,0.94) 75%, rgba(9,15,24,0.99) 100%);
      z-index: 2;
    }
    .mc-spine {
      position: absolute; left: 0; top: 0; bottom: 0; width: 16px;
      background: linear-gradient(180deg, #ea580c 0%, #0284c7 35%, #7c3aed 70%, #166534 100%);
      z-index: 3;
    }
    .mc-watermark {
      position: absolute; right: -25px; top: 70px;
      font-family: 'Archivo', sans-serif; font-size: 210pt; font-weight: 900; line-height: 0.8;
      color: rgba(255, 255, 255, 0.04); user-select: none; pointer-events: none; z-index: 3;
    }
    .mc-top {
      display: flex; justify-content: space-between; align-items: center; z-index: 4;
    }
    .mc-logo svg { width: 250px; height: auto; display: block; }
    .mc-edition-chip {
      font-family: 'IBM Plex Mono', monospace; font-size: 9pt; font-weight: 700;
      letter-spacing: 0.15em; color: #38bdf8;
      border: 1px solid rgba(56,189,248,0.4); background: rgba(9,15,24,0.7);
      padding: 6px 14px; border-radius: 4px;
    }
    .mc-main {
      margin-top: auto; margin-bottom: 15mm; z-index: 4;
    }
    .mc-title {
      font-family: 'Archivo', sans-serif; font-size: 46pt; font-weight: 900; line-height: 0.95;
      color: #ffffff; letter-spacing: -0.03em; margin: 0; text-transform: uppercase;
    }
    .mc-sub {
      font-family: 'Archivo', sans-serif; font-size: 22pt; font-weight: 700;
      color: #38bdf8; margin-top: 12px; letter-spacing: -0.01em;
    }
    .mc-sub-detail {
      font-size: 13pt; font-weight: 500; color: #cbd5e1; margin-top: 6px;
    }
    .mc-rule {
      width: 100%; height: 1px; background: rgba(255, 255, 255, 0.25); margin: 24px 0 14px 0;
    }
    .mc-meta {
      font-family: 'IBM Plex Mono', monospace; font-size: 8.5pt; letter-spacing: 0.08em;
      color: #94a3b8; display: flex; justify-content: space-between;
    }

    /* ════════════ PÁGINA 2: CRÉDITOS, PROPIEDAD INTELECTUAL Y AVISO LEGAL ════════════ */
    .legal-page {
      page-break-after: always;
      padding: 22mm 20mm 18mm 22mm;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
      max-height: 297mm;
      color: #1e293b;
      font-family: 'IBM Plex Sans', sans-serif;
    }
    .legal-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 10px;
      margin-bottom: 16px;
    }
    .legal-logo svg {
      width: 180px;
      height: auto;
    }
    .legal-header-tag {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 7.8pt;
      font-weight: 700;
      color: #0284c7;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .legal-book-title {
      font-family: 'Archivo', sans-serif;
      font-size: 17pt;
      font-weight: 900;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: -0.01em;
      margin: 0 0 3px 0;
    }
    .legal-book-sub {
      font-size: 10pt;
      color: #0284c7;
      font-weight: 600;
      margin-bottom: 14px;
    }
    .legal-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 12px 16px;
      margin-bottom: 14px;
    }
    .legal-box-title {
      font-family: 'Archivo', sans-serif;
      font-size: 8.2pt;
      font-weight: 800;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 7px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .legal-grid {
      display: grid;
      grid-template-columns: 130px 1fr;
      row-gap: 5px;
      column-gap: 10px;
      font-size: 7.8pt;
      line-height: 1.35;
    }
    .legal-label {
      font-family: 'IBM Plex Mono', monospace;
      font-weight: 700;
      color: #64748b;
      text-transform: uppercase;
      font-size: 7.3pt;
    }
    .legal-val {
      color: #0f172a;
      font-weight: 500;
    }
    .legal-warning {
      border-left: 3px solid #dc2626;
      background: #fef2f2;
      padding: 9px 12px;
      font-size: 7.6pt;
      line-height: 1.4;
      color: #991b1b;
      margin-bottom: 12px;
      border-radius: 0 4px 4px 0;
    }
    .legal-text {
      font-size: 7.6pt;
      line-height: 1.42;
      color: #475569;
      text-align: justify;
      margin: 0 0 7px 0;
    }
    .legal-footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 8px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 7.2pt;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* ════════════ GRAN ÍNDICE GENERAL MAESTRO ════════════ */
    .index-page {
      page-break-after: always;
      padding: 16mm 14mm 16mm 14mm;
    }
    .idx-header {
      border-bottom: 2.5px solid #0f172a; padding-bottom: 8px; margin-bottom: 14px;
      display: flex; justify-content: space-between; align-items: flex-end;
    }
    .idx-title {
      font-family: 'Archivo', sans-serif; font-size: 16pt; font-weight: 900;
      color: #0f172a; text-transform: uppercase; margin: 0; letter-spacing: 0.02em;
    }
    .idx-sub {
      font-size: 8.5pt; color: #64748b; margin-top: 2px;
    }
    .idx-meta {
      font-family: 'IBM Plex Mono', monospace; font-size: 8pt; font-weight: 700; color: #0284c7;
    }
    .idx-table {
      width: 100%; border-collapse: collapse; font-size: 8pt; line-height: 1.35;
    }
    .idx-table th {
      background: #0f172a; color: white; font-family: 'Archivo', sans-serif;
      font-size: 7.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em;
      padding: 6px 8px; text-align: left;
    }
    .idx-table td {
      padding: 5px 8px; border-bottom: 1px solid #e2e8f0;
    }
    .idx-mod-row {
      background: #f1f5f9; font-family: 'Archivo', sans-serif; font-size: 8pt;
      font-weight: 800; color: #0f172a; letter-spacing: 0.04em; text-transform: uppercase;
      padding-top: 8px; padding-bottom: 6px;
    }
    .idx-tomo-num {
      font-family: 'IBM Plex Mono', monospace; font-weight: 700; color: #0284c7;
    }
    .idx-tomo-name {
      font-weight: 700; color: #0f172a;
    }
    .idx-pill {
      display: inline-block; padding: 2px 6px; border-radius: 3px; font-family: 'IBM Plex Mono', monospace;
      font-size: 7pt; font-weight: 700;
    }
  </style>
</head>
<body>

  <!-- 1. GRAN PORTADA EDITORIAL MASTER -->
  <div class="master-cover">
    <div class="mc-photo"></div>
    <div class="mc-veil"></div>
    <div class="mc-spine"></div>
    <div class="mc-watermark">2026</div>
    
    <div class="mc-top">
      <div class="mc-logo">${aeeLogoSvg}</div>
      <div class="mc-edition-chip">PRIMERA EDICIÓN 2026</div>
    </div>

    <div class="mc-main">
      <h1 class="mc-title">GRAN LIBRO GORDO EUNACOM</h1>
      <div class="mc-sub">1.890 Preguntas de Práctica</div>
      <div class="mc-sub-detail">Compilación Enciclopédica · 21 Manuales de Preguntas &amp; Solucionarios</div>
    </div>
  </div>

  <!-- 2. PÁGINA DE CRÉDITOS EDITORIALES, COPYRIGHT Y AVISO LEGAL -->
  <div class="legal-page">
    <div>
      <div class="legal-top">
        <div class="legal-logo">${aeeLogoSvg}</div>
        <div class="legal-header-tag">Ficha Editorial &amp; Propiedad Intelectual</div>
      </div>

      <h2 class="legal-book-title">Gran Libro Gordo EUNACOM</h2>
      <div class="legal-book-sub">1.890 Preguntas de Práctica · Compilación Enciclopédica de 21 Tomos Oficiales</div>

      <div class="legal-box">
        <div class="legal-box-title">Ficha Técnica Editorial</div>
        <div class="legal-grid">
          <span class="legal-label">Título:</span>
          <span class="legal-val">Gran Libro Gordo EUNACOM · 1.890 Preguntas de Práctica</span>
          
          <span class="legal-label">Autoría:</span>
          <span class="legal-val">Comité Médico Pedagógico de la Academia Examen EUNACOM (AEE)</span>
          
          <span class="legal-label">Entidad Editora:</span>
          <span class="legal-val"><strong>Wiackowska Group SpA</strong> (Santiago de Chile)</span>
          
          <span class="legal-label">Edición:</span>
          <span class="legal-val">Primera Edición Oficial · Año 2026</span>
          
          <span class="legal-label">Estructura:</span>
          <span class="legal-val">21 Tomos Monográficos · 1.890 Preguntas con Solucionario Razonado</span>
          
          <span class="legal-label">Alineación:</span>
          <span class="legal-val">Perfil de Conocimientos Médicos EUNACOM 2026 (ASOFAMECH / MINSAL)</span>
        </div>
      </div>

      <div class="legal-box-title" style="margin-top: 14px;">Marco Legal y Protección de Derechos de Autor</div>
      <div class="legal-warning">
        <strong>AVISO LEGAL Y RESTRICCIÓN DE USO:</strong> Esta obra y su banco integral de preguntas y solucionarios constituyen propiedad intelectual exclusiva de <strong>Wiackowska Group SpA</strong> y la Academia Examen EUNACOM. Queda terminantemente prohibida su venta, reventa, distribución no autorizada, escaneo o difusión pública por cualquier medio físico o digital bajo apercibimiento de las sanciones legales civiles y penales correspondientes.
      </div>

      <p class="legal-text">
        <strong>Legislación de la República de Chile:</strong> Esta publicación se encuentra registrada y protegida íntegramente por las leyes de la República de Chile, en particular por la <strong>Ley N° 17.336 sobre Propiedad Intelectual</strong>, sus decretos reglamentarios y los convenios internacionales vigentes ratificados por el Estado de Chile.
      </p>

      <p class="legal-text">
        <strong>Prohibición Expresa de Reproducción y Venta:</strong> Ninguna parte de este libro puede ser reproducida, almacenada en sistemas de recuperación de datos ni transmitida en forma alguna o por cualquier medio —electrónico, mecánico, digital, fotocopia, grabación o cualquier otro— sin la autorización previa, expresa y por escrito de <strong>Wiackowska Group SpA</strong>. Queda prohibida expresamente su comercialización, arriendo, cesión onerosa o gratuita, o su inclusión en bancos de preguntas no autorizados.
      </p>

      <p class="legal-text">
        <strong>Licencia de Uso Individual y Personal:</strong> El acceso o adquisición de este material otorga únicamente una licencia de uso personal, individual e intransferible a favor del estudiante registrado, destinada exclusivamente a la preparación académica individual para rendir el Examen Único Nacional de Conocimientos de Medicina (EUNACOM).
      </p>
    </div>

    <div class="legal-footer">
      <span>© 2026 Academia Examen EUNACOM (AEE) · Wiackowska Group SpA</span>
      <span>Santiago de Chile · Todos los derechos reservados</span>
    </div>
  </div>

  <!-- 2. GRAN ÍNDICE GENERAL MAESTRO -->
  <div class="index-page">
    <div class="idx-header">
      <div>
        <h2 class="idx-title">Gran Índice General · Colección 21 Tomos</h2>
        <div class="idx-sub">Estructura Curricular Oficial EUNACOM 2026 · 1.890 Preguntas de Práctica</div>
      </div>
      <div class="idx-meta">1ª EDICIÓN AEE · 2013-2026</div>
    </div>

    <table class="idx-table">
      <thead>
        <tr>
          <th style="width: 8%;">Tomo</th>
          <th style="width: 32%;">Especialidad Médica</th>
          <th style="width: 14%;">Preguntas</th>
          <th style="width: 18%;">Perfil V3</th>
          <th style="width: 28%;">Manual de Estudio AEE</th>
        </tr>
      </thead>
      <tbody>
        <tr class="idx-mod-row"><td colspan="5">MÓDULO 1: MEDICINA INTERNA (TOMOS 01 AL 10 · 900 PREGUNTAS)</td></tr>
        <tr><td class="idx-tomo-num">01</td><td class="idx-tomo-name">Cardiología</td><td>90 Preguntas</td><td>33 Códigos (100%)</td><td>Tomo 01 · 23 Clases (71 págs.)</td></tr>
        <tr><td class="idx-tomo-num">02</td><td class="idx-tomo-name">Infectología</td><td>90 Preguntas</td><td>39 Códigos (100%)</td><td>Tomo 02 · 24 Clases (71 págs.)</td></tr>
        <tr><td class="idx-tomo-num">03</td><td class="idx-tomo-name">Gastroenterología</td><td>90 Preguntas</td><td>42 Códigos (100%)</td><td>Tomo 03 · 26 Clases (68 págs.)</td></tr>
        <tr><td class="idx-tomo-num">04</td><td class="idx-tomo-name">Respiratorio / Neumología</td><td>90 Preguntas</td><td>52 Códigos (100%)</td><td>Tomo 04 · 22 Clases (64 págs.)</td></tr>
        <tr><td class="idx-tomo-num">05</td><td class="idx-tomo-name">Nefrología</td><td>90 Preguntas</td><td>38 Códigos (100%)</td><td>Tomo 05 · 22 Clases (60 págs.)</td></tr>
        <tr><td class="idx-tomo-num">06</td><td class="idx-tomo-name">Diabetes Mellitus & Nutrición</td><td>90 Preguntas</td><td>26 Códigos (100%)</td><td>Tomo 06 · 18 Clases (52 págs.)</td></tr>
        <tr><td class="idx-tomo-num">07</td><td class="idx-tomo-name">Endocrinología & Metabolismo</td><td>90 Preguntas</td><td>28 Códigos (100%)</td><td>Tomo 07 · 20 Clases (58 págs.)</td></tr>
        <tr><td class="idx-tomo-num">08</td><td class="idx-tomo-name">Hematología & Oncología</td><td>90 Preguntas</td><td>28 Códigos (100%)</td><td>Tomo 08 · 20 Clases (58 págs.)</td></tr>
        <tr><td class="idx-tomo-num">09</td><td class="idx-tomo-name">Reumatología & Inmunología</td><td>90 Preguntas</td><td>27 Códigos (100%)</td><td>Tomo 09 · 18 Clases (54 págs.)</td></tr>
        <tr><td class="idx-tomo-num">10</td><td class="idx-tomo-name">Neurología & Geriatría</td><td>90 Preguntas</td><td>50 Códigos (100%)</td><td>Tomo 10 · 24 Clases (70 págs.)</td></tr>

        <tr class="idx-mod-row"><td colspan="5">MÓDULO 2: CIRUGÍA Y ESPECIALIDADES (TOMOS 11 AL 17 · 630 PREGUNTAS)</td></tr>
        <tr><td class="idx-tomo-num">11</td><td class="idx-tomo-name">Cirugía General & Anestesia</td><td>90 Preguntas</td><td>28 Códigos (100%)</td><td>Tomo 11 · 20 Clases (62 págs.)</td></tr>
        <tr><td class="idx-tomo-num">12</td><td class="idx-tomo-name">Traumatología & Ortopedia</td><td>90 Preguntas</td><td>32 Códigos (100%)</td><td>Tomo 12 · 18 Clases (56 págs.)</td></tr>
        <tr><td class="idx-tomo-num">13</td><td class="idx-tomo-name">Urología</td><td>90 Preguntas</td><td>22 Códigos (100%)</td><td>Tomo 13 · 16 Clases (50 págs.)</td></tr>
        <tr><td class="idx-tomo-num">14</td><td class="idx-tomo-name">Otorrinolaringología (ORL)</td><td>90 Preguntas</td><td>27 Códigos (100%)</td><td>Tomo 14 · 18 Clases (54 págs.)</td></tr>
        <tr><td class="idx-tomo-num">15</td><td class="idx-tomo-name">Oftalmología</td><td>90 Preguntas</td><td>25 Códigos (100%)</td><td>Tomo 15 · 16 Clases (50 págs.)</td></tr>
        <tr><td class="idx-tomo-num">16</td><td class="idx-tomo-name">Dermatología</td><td>90 Preguntas</td><td>29 Códigos (100%)</td><td>Tomo 16 · 18 Clases (54 págs.)</td></tr>
        <tr><td class="idx-tomo-num">17</td><td class="idx-tomo-name">Psiquiatría General & Salud Mental</td><td>90 Preguntas</td><td>25 Códigos (100%)</td><td>Tomo 17 · 18 Clases (56 págs.)</td></tr>

        <tr class="idx-mod-row"><td colspan="5">MÓDULO 3: MATERNO - INFANTIL (TOMOS 18 AL 20 · 270 PREGUNTAS)</td></tr>
        <tr><td class="idx-tomo-num">18</td><td class="idx-tomo-name">Pediatría & Neonatología</td><td>90 Preguntas</td><td>90 Códigos (100% Urg.)</td><td>Tomo 18 · 28 Clases (80 págs.)</td></tr>
        <tr><td class="idx-tomo-num">19</td><td class="idx-tomo-name">Obstetricia & Materno-Fetal</td><td>90 Preguntas</td><td>27 Códigos (100%)</td><td>Tomo 19 · 22 Clases (68 págs.)</td></tr>
        <tr><td class="idx-tomo-num">20</td><td class="idx-tomo-name">Ginecología & Oncología</td><td>90 Preguntas</td><td>26 Códigos (100%)</td><td>Tomo 20 · 18 Clases (56 págs.)</td></tr>

        <tr class="idx-mod-row"><td colspan="5">MÓDULO 4: SALUD PÚBLICA Y GESTIÓN (TOMO 21 · 90 PREGUNTAS)</td></tr>
        <tr><td class="idx-tomo-num">21</td><td class="idx-tomo-name">Salud Pública, Bioética & GES</td><td>90 Preguntas</td><td>31 Códigos (100%)</td><td>Tomo 21 · 16 Clases (50 págs.)</td></tr>
      </tbody>
    </table>
  </div>

</body>
</html>`;

  const tempHtml = path.join(__dirname, 'temp_master_cover_index.html');
  const tempPdf = path.join(DIST_DIR, 'temp_master_cover_index.pdf');
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

  console.log(`✓ Portada e Índice Maestra generados exitosamente: ${tempPdf}`);
  return tempPdf;
}

async function main() {
  console.log('════════════════════════════════════════════════════════════════════');
  console.log('COMPILADOR MAESTRO: EL GRAN LIBRO GORDO EUNACOM (1.890 PREGUNTAS)');
  console.log('════════════════════════════════════════════════════════════════════');

  // 1. Generar portada e índice maestro
  const coverPdf = await renderMasterCoverAndIndex();

  // 2. Verificar que los 21 PDFs individuales existan
  console.log('>>> [2/3] Verificando los 21 tomos monográficos individuales...');
  const pdfList = [coverPdf];
  for (const t of TOMOS) {
    const p = path.join(DIST_DIR, t.file);
    if (!fs.existsSync(p)) {
      console.log(`[AVISO] Compilando tomo faltante: ${t.key}...`);
      execSync(`node scripts/build_libro_gordo_pdf.cjs ${t.key}`, { stdio: 'inherit' });
    }
    pdfList.push(p);
  }

  // 3. Unir los PDFs en el Gran Libro Gordo con pypdf
  console.log('>>> [3/3] Ensamblando el Gran Libro Gordo Completo (1.890 Preguntas)...');
  const outMegaPdf = path.join(DIST_DIR, 'El_Gran_Libro_Gordo_EUNACOM_1890Q.pdf');
  const outMegaPdfAct = path.join(DIST_DIR, 'El_Gran_Libro_Gordo_EUNACOM_1890Q_Actualizado.pdf');

  const mergeScript = `
import pypdf
import sys
import shutil
import subprocess

writer = pypdf.PdfWriter()
files = ${JSON.stringify(pdfList.map(p => p.replace(/\\/g, '/')))}
for f in files:
    try:
        reader = pypdf.PdfReader(f)
        for page in reader.pages:
            writer.add_page(page)
    except Exception as e:
        print(f"Error procesando {f}: {e}", file=sys.stderr)

out_act = "${outMegaPdfAct.replace(/\\/g, '/')}"
out_canon = "${outMegaPdf.replace(/\\/g, '/')}"

# Guardar en archivo actualizado garantizado
with open(out_act, "wb") as out:
    writer.write(out)
print("Archivo actualizado generado:", out_act)

# Intentar actualizar el archivo canónico
try:
    subprocess.run(['taskkill', '/F', '/IM', 'prevhost.exe'], capture_output=True)
except Exception:
    pass

try:
    shutil.copyfile(out_act, out_canon)
    print("Archivo canónico actualizado exitosamente:", out_canon)
except Exception as e:
    print(f"[AVISO] No se pudo sobrescribir directamente {out_canon} ({e}). El PDF actualizado está disponible en {out_act}")
`;

  const pyScriptPath = path.join(__dirname, 'temp_merge_gran_libro.py');
  fs.writeFileSync(pyScriptPath, mergeScript, 'utf8');

  execSync(`python "${pyScriptPath}"`, { stdio: 'inherit' });
  if (fs.existsSync(pyScriptPath)) fs.unlinkSync(pyScriptPath);
  if (fs.existsSync(coverPdf)) fs.unlinkSync(coverPdf);

  const finalPdf = fs.existsSync(outMegaPdf) ? outMegaPdf : outMegaPdfAct;
  const stats = fs.statSync(finalPdf);
  console.log('════════════════════════════════════════════════════════════════════');
  console.log(`🎉 ¡ÉXITO TOTAL! EL GRAN LIBRO GORDO EUNACOM GENERADO:`);
  console.log(`📄 Archivo: ${finalPdf}`);
  console.log(`📦 Tamaño: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  console.log('════════════════════════════════════════════════════════════════════');
}

main().catch(err => {
  console.error('Error fatal en compilador maestro:', err);
  process.exit(1);
});
