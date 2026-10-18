/**
 * Códigos Perfil V3 por tema — fuente única: books/data/v3_topic_codes.json
 * (revisados contra el Perfil de Conocimientos V3 oficial, data/v3_codemap.json).
 * Clave: classId (p. ej. «orl-08») o «<libro>:<tema>» para temas sin clase (cardiología).
 *
 * applyV3(bookKey, data): reemplaza c.perfilCode por los códigos correctos y re-etiqueta
 * cada pregunta del banco AEE con el código del tema que más se parece a su enunciado.
 */
const fs = require('fs');
const path = require('path');
const MAP = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'v3_topic_codes.json'), 'utf8'));
const QFILE = path.join(__dirname, '..', 'data', 'v3_question_codes.json');
const QCODES = fs.existsSync(QFILE) ? JSON.parse(fs.readFileSync(QFILE, 'utf8')) : {};
const CODEMAP = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'v3_codemap.json'), 'utf8'));
const norm = t => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/<[^>]+>/g, ' ').toLowerCase();
const words = t => norm(t).split(/[^a-z0-9ñ]+/).filter(w => w.length >= 5);
const CODE_RE = /\b\d\.\d{2}\.\d\.\d{3}\b/g;

function codesFor(bookKey, c) {
  const e = MAP[c.classId] || MAP[`${bookKey}:${c.topicLabel}`];
  return e ? e.codes : null;
}

function bestCode(codes, q) {
  // pesa más la alternativa correcta y la explicación (ahí aparece el diagnóstico), luego el enunciado
  const ok = (q.options || []).find(o => o.id === q.correcta);
  const parts = [[ok ? ok.text : '', 3], [q.explicacion || '', 2], [q.stem || '', 1]];
  const stems = parts.map(([t, w]) => [new Set(words(t).map(x => x.slice(0, 6))), w]);
  let best = codes[0], score = 0;
  for (const k of codes) {
    const kw = [...new Set(words((CODEMAP[k] || {}).name).map(x => x.slice(0, 6)))];
    let n = 0;
    for (const [set, w] of stems) n += w * kw.filter(x => set.has(x)).length;
    if (n > score) { score = n; best = k; }
  }
  return best;
}

function applyV3(bookKey, data) {
  return data.map(c => {
    const codes = codesFor(bookKey, c);
    if (!codes) return c;
    const old = String(c.perfilCode || '').match(CODE_RE) || [];
    const fix = s => typeof s === 'string' && old.length ? s.replace(CODE_RE, m => (old.includes(m) && !codes.includes(m) ? codes[0] : m)) : s;
    const out = { ...c, perfilCode: codes.join(', ') };
    for (const k of Object.keys(out)) if (k !== 'perfilCode' && typeof out[k] === 'string') out[k] = fix(out[k]);
    if (Array.isArray(c.questions)) {
      const tkey = `${bookKey}|${c.classId || c.topicLabel}`;
      out.questions = c.questions.map((q, i) => {
        if (q.recTag && !/Banco Oficial AEE/i.test(q.recTag)) return q; // pregunta real: conserva su cita
        const pick = QCODES[`${tkey}|${i}`];
        const code = pick && codes.includes(pick) ? pick : bestCode(codes, q); // clasificación revisada pregunta a pregunta
        return { ...q, recTag: `Banco Oficial AEE · Perfil V3 ${code}` };
      });
    }
    return out;
  });
}

module.exports = { applyV3, codesFor, V3_MAP: MAP };
