/**
 * class_questions.cjs
 * Lista las preguntas reales del banco EUNACOM (books/data/real_questions_by_code.json, con examen y fecha)
 * que corresponden a los códigos Perfil V3 de una clase. Es la fuente de las diapositivas "Pregunta real EUNACOM".
 *
 * Uso: node classes/scripts/class_questions.cjs <id> [--min 0.6] [--json]
 *      node classes/scripts/class_questions.cjs --search "colangitis|coledocolitiasis"
 *   --min     confianza mínima del mapeo pregunta→código (por defecto 0.6)
 *   --search  busca en el enunciado y la explicación de todo el banco (expresión regular, sin distinguir mayúsculas)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const args = process.argv.slice(2);
const id = args.find((a, i) => !a.startsWith('--') && !['--min', '--search'].includes(args[i - 1]));
const minIdx = args.indexOf('--min');
const MIN = minIdx >= 0 ? Number(args[minIdx + 1]) : 0.6;
const JSON_OUT = args.includes('--json');
const sIdx = args.indexOf('--search');
const SEARCH = sIdx >= 0 ? new RegExp(args[sIdx + 1], 'i') : null;
if (!id && !SEARCH) { console.error('Uso: node class_questions.cjs <id> [--min 0.6] [--json]'); process.exit(1); }

const CODE = /\d\.\d{2}\.\d\.\d{3}/g;

// Códigos de la clase: los del mazo del reproductor y los del tema en el libro.
function classCodes(classId) {
  const codes = new Set();
  const cur = path.join(ROOT, 'classes', 'curriculum');
  for (const f of fs.readdirSync(cur).filter(f => f.endsWith('_decks_data.json'))) {
    const deck = JSON.parse(fs.readFileSync(path.join(cur, f), 'utf8'))[classId];
    if (deck) {
      (deck.perfilCodes || []).forEach(c => (String(c).match(CODE) || []).forEach(x => codes.add(x)));
      const idx = Object.keys(JSON.parse(fs.readFileSync(path.join(cur, f), 'utf8'))).indexOf(classId);
      const key = f.replace('_decks_data.json', '');
      const dsPath = path.join(ROOT, 'books', 'scripts', `dataset_${key}.cjs`);
      if (fs.existsSync(dsPath)) {
        const ds = require(dsPath);
        const list = Array.isArray(ds) ? ds : Object.values(ds).find(Array.isArray) || [];
        const topic = list.find(t => t.id === classId) || list[idx];
        if (topic) (JSON.stringify([topic.perfilCode, topic.perfilCodes]).match(CODE) || []).forEach(x => codes.add(x));
      }
    }
  }
  return [...codes];
}

const bank = JSON.parse(fs.readFileSync(path.join(ROOT, 'books', 'data', 'real_questions_by_code.json'), 'utf8'));
const codes = SEARCH ? Object.keys(bank) : classCodes(id);
const seen = new Set();
const qs = codes.flatMap(c => (bank[c] || []).map(q => ({ ...q, code: c })))
  .filter(q => (SEARCH ? SEARCH.test(q.stem + ' ' + q.explicacion) : q.confidence >= MIN) && !seen.has(q.key) && seen.add(q.key))
  .sort((a, b) => b.confidence - a.confidence || b.year - a.year);

if (JSON_OUT) { console.log(JSON.stringify({ id, codes, questions: qs }, null, 2)); return; }
console.log(SEARCH ? `búsqueda /${SEARCH.source}/ · ${qs.length} preguntas reales\n`
  : `${id} · códigos ${codes.join(', ') || '(ninguno)'} · ${qs.length} preguntas reales (confianza ≥ ${MIN})\n`);
qs.forEach((q, i) => {
  console.log(`[${i + 1}] ${q.recTag} · código ${q.code} · confianza ${q.confidence}`);
  console.log(`    ${q.stem}`);
  q.options.forEach(o => console.log(`    ${o.id}) ${o.text}`));
  console.log(`    Correcta: ${q.correcta}`);
  console.log(`    Explicación: ${String(q.explicacion || '').replace(/\s+/g, ' ')}\n`);
});
