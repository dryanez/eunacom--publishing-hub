/* Complementos del libro Neurología y Geriatría (completar_prompt, LIBRO=neurologia): párrafos que faltaban + 2 temas nuevos.
 * applyExtra(classes) devuelve las clases con los párrafos agregados al final y los temas nuevos al final de su bloque. */
const fs = require('fs');
const path = require('path');
const DATA = path.join(__dirname, '..', '..', 'data');
const ADD = require('./a.cjs');
const { NEW_TOPICS } = require('./c.cjs');

function loadQuestions(codes) {
  const real = JSON.parse(fs.readFileSync(path.join(DATA, 'real_questions_by_code.json'), 'utf8'));
  const banco = JSON.parse(fs.readFileSync(path.join(DATA, 'banco_preguntas_v3.json'), 'utf8'));
  const out = [];
  for (const k of codes) {
    const r = (real[k] || []).filter(q => Number(q.confidence) >= 0.5 || /Dic.*2019/.test(q.recTag || '') );
    if (r.length) { r.forEach(q => out.push({ stem: q.stem, options: q.options, correcta: q.correcta, explicacion: q.explicacion, recTag: q.recTag })); continue; }
    const b = banco[k] && banco[k].slide;
    if (b) out.push({ stem: `${b.stem} ${b.question}`, options: b.options.map(o => ({ id: o.letter, text: o.text })), correcta: b.correct, explicacion: b.explanation, recTag: `Banco Oficial AEE · Perfil V3 ${k}` });
  }
  return out;
}

function topicFromSpec(t) {
  const { codes, qcodes, ...rest } = t;
  return { ...rest, perfilCode: codes.join(', '), questions: loadQuestions(qcodes), contentSections: t.contentSections.map(s => ({ subhead: s.subhead, paragraphs: [...s.paragraphs] })) };
}

/* qué párrafos agregó cada tema: { classId: [ {i, j, codes} ] } (i = sección, j = índice del párrafo), para el audit */
function layout(classes) {
  const out = {};
  const all = applyExtra(classes);
  for (const c of all) {
    const add = ADD[c.classId];
    const n0 = (classes.find(x => x.classId === c.classId) || {}).contentSections;
    if (add) {
      out[c.classId] = [];
      let i = n0.length;
      for (const s of add) { s.paras.forEach((p, j) => out[c.classId].push({ i, j, codes: p.c })); i++; }
    }
  }
  for (const t of NEW_TOPICS) {
    out[t.classId] = { nuevo: true, codes: t.codes, nsec: t.contentSections.length };
  }
  return out;
}

function applyExtra(classes) {
  let res = classes.map(c => {
    const add = ADD[c.classId];
    if (!add) return c;
    const secs = [...c.contentSections];
    for (const s of add) secs.push({ subhead: s.subhead, paragraphs: s.paras.map(p => p.t) });
    return { ...c, contentSections: secs };
  });
  for (const t of NEW_TOPICS) {
    const nt = topicFromSpec(t);
    let at = -1;
    res.forEach((c, i) => { if (c.blockNum === nt.blockNum) at = i; });
    res.splice(at + 1, 0, nt);
  }
  return res;
}

module.exports = { applyExtra, layout, ADD, NEW_TOPICS };
