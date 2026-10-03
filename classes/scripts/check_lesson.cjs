/**
 * check_lesson.cjs
 * Valida guiones de classes/lessons/<id>.cjs contra classes/docs/LESSON_STANDARD.md
 * sin compilar el reproductor (seguro de correr en paralelo).
 *
 * Uso: node classes/scripts/check_lesson.cjs <id> [<id> …]
 */

const path = require('path');
const fs = require('fs');
const ROOT = path.join(__dirname, '..', '..');
const PW_DIR = path.join(ROOT, 'classes', 'pathways');
const PATHWAYS = Object.assign({}, ...fs.readdirSync(PW_DIR).filter(f => f.endsWith('_pathways.cjs')).map(f => require(path.join(PW_DIR, f))));

const FLOW_K = new Set(['cause', 'mech', 'effect', 'risk', 'good', 'alert', 'start', 'q', 'refer', 'trap']);
const CARD_KIND = new Set(['key', 'alert', 'pharma', 'criteria', 'normal']);
const PW_K = new Set(['start', 'q', 'do', 'ok', 'refer', 'alert']);
const WORDS = { 1: [800, 1100], 2: [1400, 1800], 3: [2100, 3000] };

function check(id) {
  const errors = [];
  const warns = [];
  const file = path.join(ROOT, 'classes', 'lessons', `${id}.cjs`);
  let lesson;
  try { lesson = require(file); } catch (e) { return { errors: [`no carga: ${e.message}`], warns }; }
  if (lesson.id !== id) errors.push(`id "${lesson.id}" no coincide con el archivo`);
  const says = [];
  const say = (where, t) => {
    if (typeof t !== 'string' || !t.trim()) { errors.push(`${where}: falta say`); return; }
    says.push(t);
    if (/\d/.test(t)) warns.push(`${where}: cifra en say (escribir en palabras): "${t.match(/.{0,20}\d.{0,20}/)[0]}"`);
    if (/[≥≤%→±<>\/()]/.test(t)) warns.push(`${where}: símbolo en say: "${t.match(/.{0,20}[≥≤%→±<>\/()].{0,20}/)[0]}"`);
    if (t.split(/\s+/).length > 80) warns.push(`${where}: say de ${t.split(/\s+/).length} palabras (dividir)`);
  };

  const slides = lesson.slides || [];
  if (slides[0]?.type !== 'cover') errors.push('la primera diapositiva debe ser cover');
  if (slides.at(-1)?.type !== 'points') errors.push('la última diapositiva debe ser points (cierre)');
  let pathways = 0;
  slides.forEach((s, i) => {
    const w = `slide ${i + 1} (${s.type})`;
    if (s.type === 'cover') say(w, s.say);
    else if (s.type === 'flow') {
      const ids = new Set((s.nodes || []).map(n => n.id));
      (s.nodes || []).forEach(n => { if (!FLOW_K.has(n.k)) errors.push(`${w}: k inválido "${n.k}"`); if (n.col > 4 || n.row > 4) errors.push(`${w}: nodo ${n.id} fuera de la grilla 5×5`); });
      (s.edges || []).forEach(e => { if (!ids.has(e.from) || !ids.has(e.to)) errors.push(`${w}: arista a nodo inexistente ${e.from}→${e.to}`); });
      (s.steps || []).forEach((st, j) => { st.show.forEach(x => { if (!ids.has(x)) errors.push(`${w}: paso ${j + 1} muestra nodo inexistente ${x}`); }); say(`${w} paso ${j + 1}`, st.say); });
    } else if (s.type === 'points') {
      (s.cards || []).forEach(c => { if (!CARD_KIND.has(c.kind)) errors.push(`${w}: kind inválido "${c.kind}"`); c.items.forEach((it, j) => say(`${w} ${c.title} ${j + 1}`, it.say)); });
    } else if (s.type === 'pathway') {
      pathways++;
      const pw = lesson.pathway || PATHWAYS[id];
      if (!pw) { errors.push(`${w}: falta lesson.pathway`); return; }
      (function walk(n, d) {
        if (!PW_K.has(n.k)) errors.push(`pathway: k inválido "${n.k}"`);
        say(`pathway "${n.t}"`, n.say);
        (n.kids || []).forEach(([, c]) => walk(c, d + 1));
      })(pw.root, 0);
    } else if (s.type === 'table') {
      (s.rows || []).forEach((r, j) => { if (r.cells.length !== s.head.length || s.head.length < 2 || s.head.length > 4) errors.push(`${w}: fila ${j + 1} con ${r.cells.length} celdas`); say(`${w} fila ${j + 1}`, r.say); });
    } else if (s.type === 'quiz') {
      if ((s.options || []).length !== 5) errors.push(`${w}: debe tener 5 alternativas`);
      if (!(s.options || []).some(o => o.letter === s.correct)) errors.push(`${w}: correct "${s.correct}" no está en las alternativas`);
      ['stem', 'question', 'options', 'answer'].forEach(k => say(`${w} say.${k}`, s.say?.[k]));
    } else errors.push(`${w}: tipo desconocido`);
  });
  if (pathways > 1) errors.push('más de una diapositiva pathway');

  const tier = lesson.tier;
  if (![1, 2, 3].includes(tier)) errors.push('falta tier (1, 2 o 3) en el guion');
  const words = says.join(' ').split(/\s+/).length;
  if (WORDS[tier]) {
    const [a, b] = WORDS[tier];
    if (words < a * 0.85) warns.push(`largo: ${words} palabras, poco para un tier ${tier} (referencia ${a}–${b}); revisar que no falte contenido del libro`);
  }
  return { errors, warns, words, slides: slides.length, tier };
}

let failed = false;
for (const id of process.argv.slice(2)) {
  const r = check(id);
  const status = r.errors.length ? '✗' : '✓';
  console.log(`${status} ${id}  tier ${r.tier} · ${r.slides} diapositivas · ${r.words} palabras`);
  r.errors.forEach(e => console.log(`   ERROR ${e}`));
  r.warns.forEach(e => console.log(`   aviso ${e}`));
  if (r.errors.length) failed = true;
}
process.exit(failed ? 1 : 0);
