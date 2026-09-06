#!/usr/bin/env node

/**
 * ══════════════════════════════════════════════════════════════════════════════
 * EUNACOM 2026 · LOCAL PUBLISHING & MASTERCLASS STUDIO RUNNER
 * ══════════════════════════════════════════════════════════════════════════════
 * 
 * Permite compilar manuales y ejecutar pipelines de clases de forma local
 * e interactiva desde la terminal.
 * 
 * Uso:
 *   node run_local.cjs                # Menú interactivo
 *   node run_local.cjs infectologia   # Compila directamente Infectología
 *   node run_local.cjs gastro         # Compila Gastroenterología
 *   node run_local.cjs cardio         # Compila Cardiología
 *   node run_local.cjs all            # Compila todos los manuales
 *   node run_local.cjs audio cardio-01# Genera manifiesto de audio
 */

const { execSync } = require('child_process');
const path = require('path');
const readline = require('readline');

const ROOT = __dirname;
const BOOKS_DIR = path.join(ROOT, 'books');
const CLASSES_DIR = path.join(ROOT, 'classes');

function banner() {
  console.log('\x1b[36m╔══════════════════════════════════════════════════════════════════╗\x1b[0m');
  console.log('\x1b[36m║\x1b[0m   \x1b[1m\x1b[37mEUNACOM 2026 · PUBLISHING & MASTERCLASS STUDIO (LOCAL RUNNER)\x1b[0m  \x1b[36m║\x1b[0m');
  console.log('\x1b[36m╚══════════════════════════════════════════════════════════════════╝\x1b[0m\n');
}

function runCommand(cmd, cwd) {
  try {
    execSync(cmd, { cwd, stdio: 'inherit' });
    return true;
  } catch (e) {
    console.error(`\x1b[31mError ejecutando: ${cmd}\x1b[0m`, e.message);
    return false;
  }
}

function buildManual(specialty) {
  console.log(`\n\x1b[33m▶ Compilando Manual EUNACOM: ${specialty.toUpperCase()}...\x1b[0m`);
  runCommand(`node scripts/build_book.cjs ${specialty}`, BOOKS_DIR);
}

function buildAll() {
  console.log(`\n\x1b[33m▶ Compilando TODOS los manuales calibrados...\x1b[0m`);
  runCommand(`node scripts/build_book.cjs infectologia`, BOOKS_DIR);
  runCommand(`node scripts/build_book.cjs gastroenterologia`, BOOKS_DIR);
  runCommand(`node scripts/build_book.cjs cardiologia`, BOOKS_DIR);
  console.log(`\n\x1b[32m✔ Compilación completada. Archivos en books/dist/\x1b[0m`);
}

function generateAudio(classId) {
  console.log(`\n\x1b[33m▶ Generando manifiesto de teleprompter para: ${classId}...\x1b[0m`);
  runCommand(`node scripts/generate_class_audio.cjs --class=${classId}`, CLASSES_DIR);
}

function showMenu() {
  banner();
  console.log('\x1b[32m[1]\x1b[0m Compilar Manual de Infectología (71 páginas · 100% calibrado)');
  console.log('\x1b[32m[2]\x1b[0m Compilar Manual de Gastroenterología (27 páginas · Muestra canónica)');
  console.log('\x1b[32m[3]\x1b[0m Compilar Manual de Cardiología (71 páginas · Con figuras clínicas)');
  console.log('\x1b[32m[4]\x1b[0m Compilar TODOS los manuales a la vez');
  console.log('\x1b[34m[5]\x1b[0m Generar Manifiesto de Audio de Masterclass: Angina Estable (cardio-01)');
  console.log('\x1b[34m[6]\x1b[0m Generar Manifiesto de Audio de Masterclass: ERGE & Barrett (gastro-01)');
  console.log('\x1b[90m[0] Salir\x1b[0m\n');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Selecciona una opción [1-6]: ', (answer) => {
    rl.close();
    switch (answer.trim()) {
      case '1':
        buildManual('infectologia');
        break;
      case '2':
        buildManual('gastroenterologia');
        break;
      case '3':
        buildManual('cardiologia');
        break;
      case '4':
        buildAll();
        break;
      case '5':
        generateAudio('cardio-01');
        break;
      case '6':
        generateAudio('gastro-01');
        break;
      case '0':
        console.log('Hasta pronto.');
        process.exit(0);
        break;
      default:
        console.log('\x1b[31mOpción no válida.\x1b[0m');
        process.exit(1);
    }
  });
}

// CLI args handling
const arg = process.argv[2];
const subArg = process.argv[3];

if (arg) {
  banner();
  if (arg === 'infectologia' || arg === 'infecto') {
    buildManual('infectologia');
  } else if (arg === 'gastro' || arg === 'gastroenterologia') {
    buildManual('gastroenterologia');
  } else if (arg === 'cardio' || arg === 'cardiologia') {
    buildManual('cardiologia');
  } else if (arg === 'neumo' || arg === 'respiratorio' || arg === 'neumologia') {
    buildManual('neumologia');
  } else if (arg === 'nefro' || arg === 'nefrologia') {
    buildManual('nefrologia');
  } else if (arg === 'all') {
    buildAll();
  } else if (arg === 'audio') {
    generateAudio(subArg || 'cardio-01');
  } else {
    console.log(`Comando no reconocido: ${arg}`);
    console.log('Opciones: infectologia | gastro | cardio | neumo | nefro | all | audio <class-id>');
  }
} else {
  showMenu();
}
