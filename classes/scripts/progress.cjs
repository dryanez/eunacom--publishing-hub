/**
 * progress.cjs
 * Escribe classes/docs/PROGRESO_MODULO1.md: qué clases de Módulo 1 tienen guion docente que pasa el checker
 * y cuáles faltan. Sirve para retomar el trabajo en otra sesión lanzando agentes solo para lo que falta.
 * Uso: node classes/scripts/progress.cjs
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const BOOKS = [
  ['gastroenterologia', 'Gastroenterología'], ['neumologia', 'Neumología'], ['nefrologia', 'Nefrología'],
  ['diabetes', 'Diabetes'], ['endocrinologia', 'Endocrinología'], ['hematologia', 'Hematología'],
  ['infectologia', 'Infectología'], ['neurologia', 'Neurología y Geriatría'], ['reumatologia', 'Reumatología'],
  ['dermatologia', 'Dermatología'], ['oftalmologia', 'Oftalmología'], ['cirugia', 'Cirugía General'],
  ['ginecologia', 'Ginecología'], ['pediatria', 'Pediatría'], ['saludpublica', 'Salud Pública'],
];

function passes(id) {
  if (!fs.existsSync(path.join(ROOT, 'classes', 'lessons', `${id}.cjs`))) return false;
  try { execFileSync('node', [path.join(__dirname, 'check_lesson.cjs'), id], { stdio: 'ignore' }); return true; } catch { return false; }
}

// Gastro: además de pasar el checker, debe estar revisada con preguntas reales (sin "Caso representativo" si el banco tiene preguntas).
function usesRepresentative(id) {
  const f = path.join(ROOT, 'classes', 'lessons', `${id}.cjs`);
  return fs.existsSync(f) && /Caso representativo/.test(fs.readFileSync(f, 'utf8'));
}

let md = '# Progreso · guiones docentes Módulo 1\n\n';
md += 'Generado por `node classes/scripts/progress.cjs` (y cada 5 minutos por `autosave_lessons.sh`).\n';
md += 'Para retomar en otra sesión: lanzar agentes con `classes/docs/AGENT_BRIEF.md` solo para las clases ✗.\n';
md += 'Cardiología queda fuera por ahora.\n\n| Libro | Listas | Faltan |\n|---|---|---|\n';
let done = 0, total = 0;
const detail = [];
for (const [key, name] of BOOKS) {
  const ids = Object.keys(JSON.parse(fs.readFileSync(path.join(ROOT, 'classes', 'curriculum', `${key}_decks_data.json`), 'utf8')));
  const ok = ids.filter(passes);
  const missing = ids.filter(id => !ok.includes(id));
  done += ok.length; total += ids.length;
  md += `| ${name} | ${ok.length}/${ids.length} | ${missing.join(', ') || '—'} |\n`;
  if (key === 'gastroenterologia') {
    const rep = ok.filter(usesRepresentative);
    if (rep.length) detail.push(`Gastroenterología: aún usan "Caso representativo" (revisar si el banco real tiene preguntas): ${rep.join(', ')}`);
  }
}
md += `\n**Total: ${done}/${total} clases con guion docente.**\n`;
if (detail.length) md += '\n' + detail.map(d => `- ${d}`).join('\n') + '\n';
fs.writeFileSync(path.join(ROOT, 'classes', 'docs', 'PROGRESO_MODULO1.md'), md);
console.log(`${done}/${total}`);
