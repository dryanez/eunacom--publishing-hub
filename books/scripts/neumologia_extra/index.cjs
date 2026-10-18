/* Complementos del libro Respiratorio (completar_prompt, LIBRO=neumologia): párrafos que faltaban + tema nuevo resp-25. */
const ADD = require('./a.cjs');
const { NEW_TOPICS } = require('./c.cjs');
function topicFromSpec(t) {
  const { codes, qcodes, ...rest } = t;
  return { ...rest, perfilCode: codes.join(', '), contentSections: t.contentSections.map(s => ({ subhead: s.subhead, paragraphs: [...s.paragraphs] })) };
}
function applyExtra(classes) {
  const res = classes.map(c => {
    const add = ADD[c.classId];
    if (!add) return c;
    return { ...c, contentSections: [...c.contentSections, ...add.map(s => ({ subhead: s.subhead, paragraphs: s.paras.map(p => p.t) }))] };
  });
  for (const t of NEW_TOPICS) {
    const nt = topicFromSpec(t);
    let at = -1; res.forEach((c, i) => { if (c.blockNum === nt.blockNum) at = i; });
    res.splice(at + 1, 0, nt);
  }
  return res;
}
module.exports = { applyExtra, ADD, NEW_TOPICS };
