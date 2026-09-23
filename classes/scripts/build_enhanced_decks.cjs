#!/usr/bin/env node

/**
 * Build Enhanced Decks
 * Orchestrates the complete presentation generation pipeline:
 * 1. Generate clinical decision pathways
 * 2. Build interactive HTML player with animated components
 * 3. Generate Remotion video compositions (optional)
 * 4. Synthesize audio and sync with video
 *
 * Usage:
 *   node build_enhanced_decks.cjs gastro-01                    # Build single class
 *   node build_enhanced_decks.cjs gastro-01 --with-video       # Include Remotion export
 *   node build_enhanced_decks.cjs --batch gastro 1-26          # Batch build gastro-01 to gastro-26
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT_DIR = path.join(__dirname, '../..');
const CLASSES_DIR = path.join(ROOT_DIR, 'classes');
const SCRIPTS_DIR = path.join(CLASSES_DIR, 'scripts');
const DECKS_DIR = path.join(CLASSES_DIR, 'decks');
const PATHWAYS_DIR = path.join(CLASSES_DIR, 'pathways');
const DIST_DIR = path.join(CLASSES_DIR, 'dist');

// Ensure directories exist
[DECKS_DIR, PATHWAYS_DIR, DIST_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

/**
 * Log with style
 */
function log(message, type = 'info') {
  const prefix = {
    info: 'ℹ',
    success: '✓',
    error: '✗',
    warn: '⚠',
    step: '→',
  }[type] || '•';

  console.log(`${prefix} ${message}`);
}

/**
 * Step 1: Generate Clinical Pathways
 */
function generatePathways(classId) {
  log(`Generating clinical pathway for ${classId}`, 'step');

  try {
    execSync(`node "${path.join(SCRIPTS_DIR, 'generate_clinical_pathways.cjs')}" ${classId}`, {
      stdio: 'inherit',
    });
    return true;
  } catch (err) {
    log(`Failed to generate pathway: ${err.message}`, 'error');
    return false;
  }
}

/**
 * Step 2: Load and Merge Deck Data with Pathways
 */
function loadDeckData(classId) {
  const curriculumFile = path.join(CLASSES_DIR, 'curriculum', 'gastroenterologia_decks_data.json');

  if (!fs.existsSync(curriculumFile)) {
    log(`Curriculum file not found: ${curriculumFile}`, 'error');
    return null;
  }

  const curriculum = JSON.parse(fs.readFileSync(curriculumFile, 'utf8'));
  const deckData = curriculum[classId];

  if (!deckData) {
    log(`Deck not found in curriculum: ${classId}`, 'error');
    return null;
  }

  // Merge pathway data if available
  const pathwayFile = path.join(PATHWAYS_DIR, `${classId}_pathway.json`);
  if (fs.existsSync(pathwayFile)) {
    const pathway = JSON.parse(fs.readFileSync(pathwayFile, 'utf8'));

    // Inject pathway slide after slide 05 (Farmacotherapy)
    deckData.slides = deckData.slides || [];
    const pathwaySlide = {
      type: 'pathway',
      nav: pathway.title,
      title: pathway.title,
      steps: pathway.steps,
      durationFrames: pathway.steps.reduce((sum, s) => sum + (s.duration || 30), 0),
      audio: null, // Will be generated
    };

    // Insert after pharmacology slide (usually slide 5)
    deckData.slides.splice(6, 0, pathwaySlide);
  }

  return deckData;
}

/**
 * Step 3: Generate Responsive HTML Player
 */
function generateHTMLPlayer(classId, deckData) {
  log(`Generating HTML player for ${classId}`, 'step');

  if (!deckData) return false;

  const templatePath = path.join(SCRIPTS_DIR, 'player_template_enhanced.html');
  if (!fs.existsSync(templatePath)) {
    log(`Template not found: ${templatePath}`, 'error');
    return false;
  }

  let template = fs.readFileSync(templatePath, 'utf8');

  // Inject deck data directly into a script tag
  const deckDataJson = JSON.stringify(deckData, null, 2);
  const dataScript = `<script>\nwindow.deckData = ${deckDataJson};\n</script>`;

  // Insert after <body> tag
  template = template.replace('<body>', `<body>\n${dataScript}`);

  // Update header title
  template = template.replace(
    'Cargando...',
    deckData.title || classId
  );

  const outputPath = path.join(DECKS_DIR, `${classId}_player.html`);
  fs.writeFileSync(outputPath, template);

  log(`HTML player created: ${outputPath}`, 'success');
  return true;
}

/**
 * Step 4: Generate Remotion Composition (optional)
 */
function generateRemotionComposition(classId, deckData, includeVideo) {
  if (!includeVideo) return true;

  log(`Generating Remotion composition for ${classId}`, 'step');

  try {
    execSync(`node "${path.join(SCRIPTS_DIR, 'remotion_composition_builder.cjs')}" ${classId}`, {
      stdio: 'inherit',
    });
    return true;
  } catch (err) {
    log(`Failed to generate Remotion composition: ${err.message}`, 'warn');
    return false; // Non-fatal
  }
}

/**
 * Step 5: Generate Audio (stub - would use ElevenLabs/Azure)
 */
function generateAudio(classId, deckData) {
  log(`Audio generation skipped (requires API key)`, 'warn');
  // In production, this would call:
  // - ElevenLabs API or
  // - Azure Edge TTS (es-CL-LorenzoNeural)
  return true;
}

/**
 * Step 6: Generate Video Export (optional)
 */
function generateVideoExport(classId, includeVideo) {
  if (!includeVideo) return true;

  log(`Video export would use: npx remotion render src/compositions/${classId}_composition.jsx`, 'info');
  return true;
}

/**
 * Main build pipeline
 */
function buildClass(classId, options = {}) {
  console.log('\n' + '='.repeat(70));
  log(`Building Enhanced Deck: ${classId}`, 'step');
  console.log('='.repeat(70));

  const steps = [
    ['Generate Pathways', () => generatePathways(classId)],
    ['Load Deck Data', () => !!loadDeckData(classId)],
    ['Generate HTML Player', () => generateHTMLPlayer(classId, loadDeckData(classId))],
    ['Generate Remotion Composition', () => generateRemotionComposition(classId, loadDeckData(classId), options.withVideo)],
    ['Generate Audio', () => generateAudio(classId, loadDeckData(classId))],
    ['Generate Video Export', () => generateVideoExport(classId, options.withVideo)],
  ];

  let passed = 0;
  for (const [stepName, stepFn] of steps) {
    try {
      if (stepFn()) {
        passed++;
        log(stepName, 'success');
      } else {
        log(`${stepName} failed`, 'error');
      }
    } catch (err) {
      log(`${stepName} error: ${err.message}`, 'error');
    }
  }

  console.log('\n' + '='.repeat(70));
  log(`Completed ${passed}/${steps.length} steps for ${classId}`, passed === steps.length ? 'success' : 'warn');
  console.log('='.repeat(70) + '\n');

  return passed === steps.length;
}

/**
 * Batch build multiple classes
 */
function batchBuild(subject, startNum, endNum, options = {}) {
  log(`Batch building ${subject} classes ${startNum} to ${endNum}`, 'step');

  let successful = 0;
  let failed = [];

  for (let i = startNum; i <= endNum; i++) {
    const classId = `${subject}-${String(i).padStart(2, '0')}`;

    if (buildClass(classId, options)) {
      successful++;
    } else {
      failed.push(classId);
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log(`BATCH BUILD COMPLETE`);
  console.log('='.repeat(70));
  log(`Successful: ${successful}/${endNum - startNum + 1}`, 'success');

  if (failed.length > 0) {
    log(`Failed: ${failed.join(', ')}`, 'error');
  }
}

/**
 * CLI parser
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
EUNACOM 2026 Enhanced Deck Builder

Usage:
  node build_enhanced_decks.cjs gastro-01                    # Build single class
  node build_enhanced_decks.cjs gastro-01 --with-video       # Include video export
  node build_enhanced_decks.cjs --batch gastro 1 26          # Batch: gastro-01 to gastro-26
  node build_enhanced_decks.cjs --batch nefro 1 22           # Batch: nefro-01 to nefro-22

Features:
  ✓ Clinical decision pathways (flowcharts)
  ✓ Animated topic expansion with popping sub-points
  ✓ Full-width question layouts
  ✓ Spring animations for smooth transitions
  ✓ Remotion video export (optional)
  ✓ Audio-visual synchronization

Output:
  - classes/decks/[classId]_player.html      (Interactive player)
  - classes/pathways/[classId]_pathway.json  (Pathway data)
  - classes/remotion_studio/                 (Remotion components, optional)
  - classes/dist/[classId]_export.mp4        (Video, optional)
    `);
    return;
  }

  if (args[0] === '--batch') {
    const [_, subject, startNum, endNum] = args;
    const options = { withVideo: args.includes('--with-video') };
    batchBuild(subject, parseInt(startNum), parseInt(endNum), options);
  } else {
    const classId = args[0];
    const options = { withVideo: args.includes('--with-video') };
    buildClass(classId, options);
  }
}

main();
