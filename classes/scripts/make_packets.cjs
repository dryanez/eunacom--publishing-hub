/**
 * make_packets.cjs
 * Genera paquetes autocontenidos para que otra IA (ChatGPT, Gemini…) escriba guiones docentes sin acceso al repo:
 *   classes/packets/00_COMUN.md   → reglas, estándar y dos clases modelo (se sube una vez por conversación)
 *   classes/packets/<id>.md       → contenido del libro y preguntas reales del banco para esa clase
 * Uso: node classes/scripts/make_packets.cjs <libro> [<libro> …]      (p. ej. reumatologia neurologia)
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'classes', 'packets');
const read = p => fs.readFileSync(path.join(ROOT, p), 'utf8');
fs.mkdirSync(OUT, { recursive: true });

const common = `# PAQUETE COMÚN · Guiones docentes EUNACOM (leer entero antes de escribir)

Eres un profesor de medicina chileno que escribe guiones de clases en video para preparar el EUNACOM.
Vas a recibir, además de este archivo, un archivo \`<id>.md\` con el contenido del libro y las preguntas reales de UNA clase.
Tu tarea: escribir el archivo \`classes/lessons/<id>.cjs\` de esa clase.

## Qué entregar
- **Solo el código completo del archivo \`<id>.cjs\`**, en un único bloque de código JavaScript, sin texto antes ni después.
- Mismo formato exacto que las clases modelo de abajo (\`module.exports = { id, tier, slides, pathway }\`, con el helper \`N\` al inicio).
- Al final del bloque, como comentario JavaScript, un informe breve:
  \`/* INFORME: palabras habladas ~N · preguntas reales usadas: … · notas de revisión A/B/C: … */\`

## Reglas duras
1. **Nada de contenido médico inventado.** Todo sale del contenido del libro de la clase (cifras, dosis, cortes GES).
2. **Preguntas reales:** usa solo las del bloque "PREGUNTAS REALES DEL BANCO" del archivo de la clase: copia enunciado, alternativas y respuesta tal cual y usa su etiqueta (p. ej. "EUNACOM Julio 2013 · Pregunta 12") como \`title\`. Incluye todas las que enseñen algo distinto y sean del tema. Descarta las que contradigan al libro (y dilo en el informe). **Nunca uses las fechas que trae el libro** en sus \`questions\` o \`reconstrucciones\`: no son reales. Si no hay ninguna pregunta real del tema, usa una pregunta del libro con title "Banco EUNACOM · Caso representativo", sin fecha.
3. **Tamaño dinámico:** sin mínimo ni máximo de diapositivas. Nunca fusiones secciones ni quites contenido para "caber".
4. **Voz (\`say\`) para TTS:** números en palabras, sin símbolos (≥ % / → paréntesis), siglas completas la primera vez. La voz explica y conecta, no lee la pantalla.
5. Tipos de diapositiva válidos: cover, flow, points, pathway, table, quiz. Valores de \`k\` en flow: cause, mech, effect, risk, good, alert, start, q, refer, trap. \`kind\` en points: key, alert, pharma, criteria, normal. Pathway: start, q, do, ok, refer, alert. Quiz: exactamente 5 alternativas A–E.

---

${read('classes/docs/LESSON_STANDARD.md')}

---

# CLASE MODELO 1 (la referencia de tono y estilo): gastro-02.cjs
\`\`\`js
${read('classes/lessons/gastro-02.cjs')}
\`\`\`

Su árbol de decisión (en las clases nuevas va DENTRO del archivo, como \`pathway\`):
\`\`\`js
${(read('classes/pathways/gastro_pathways.cjs').match(/const N = [^\n]+/) || [''])[0]}
// 'gastro-02': ${(read('classes/pathways/gastro_pathways.cjs').split("'gastro-02': ")[1] || '').split("\n  'gastro-03'")[0].trim()}
\`\`\`

# CLASE MODELO 2 (formato completo con pathway dentro del archivo): gastro-17.cjs
\`\`\`js
${read('classes/lessons/gastro-17.cjs')}
\`\`\`
`;
fs.writeFileSync(path.join(OUT, '00_COMUN.md'), common);

const books = process.argv.slice(2);
if (!books.length) { console.error('Uso: node make_packets.cjs <libro> [<libro> …]'); process.exit(1); }
let n = 0;
for (const book of books) {
  const decks = JSON.parse(read(`classes/curriculum/${book}_decks_data.json`));
  const ds = require(path.join(ROOT, 'books', 'scripts', `dataset_${book}.cjs`));
  const list = Array.isArray(ds) ? ds : Object.values(ds).find(Array.isArray);
  const ids = Object.keys(decks);
  ids.forEach((id, i) => {
    const entry = list.find(t => t.id === id) || list[i];
    const { svg, ...clean } = entry;
    const title = decks[id].title || entry.title;
    const byCode = JSON.parse(execFileSync('node', [path.join(__dirname, 'class_questions.cjs'), id, '--json', '--min', '0.5']).toString()).questions;
    const words = String(entry.title || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .split(/[^a-zñ]+/).filter(w => w.length > 6 && !/^(clinica|diagnostico|tratamiento|manejo|enfermedad|sindrome|paciente|urgencia|conducta)/.test(w)).slice(0, 5);
    const bySearch = words.length ? JSON.parse(execFileSync('node', [path.join(__dirname, 'class_questions.cjs'), '--search', words.join('|'), '--json']).toString()).questions : [];
    const seen = new Set();
    const qs = [...byCode, ...bySearch].filter(q => !seen.has(q.key) && seen.add(q.key)).slice(0, 25);
    const neighbours = ids.slice(Math.max(0, i - 3), i + 4).filter(x => x !== id).map(x => `- ${x}: ${decks[x].title}`).join('\n');
    const md = `# CLASE ${id} · ${title}

Escribe \`classes/lessons/${id}.cjs\` siguiendo el PAQUETE COMÚN. El \`id\` es "${id}" y el \`tier\` es ${entry.tier || '(estimar por secciones)'}.

## Clases vecinas del mismo libro (para conectar ideas)
${neighbours}

## CONTENIDO DEL LIBRO (única fuente clínica)
\`\`\`json
${JSON.stringify(clean, null, 2)}
\`\`\`

## PREGUNTAS REALES DEL BANCO (${qs.length}; por código de la clase y por búsqueda "${words.join(', ')}")
Elige las que sean del tema de esta clase. Algunas pueden ser de otro tema: descártalas.
${qs.map((q, k) => `
### [${k + 1}] ${q.recTag} · confianza ${q.confidence}
${q.stem}
${q.options.map(o => `- ${o.id}) ${o.text}`).join('\n')}
**Correcta: ${q.correcta}**
Explicación del banco: ${String(q.explicacion || '').replace(/\s+/g, ' ')}`).join('\n')}
`;
    fs.writeFileSync(path.join(OUT, `${id}.md`), md);
    n++;
  });
}
console.log(`${n} paquetes + 00_COMUN.md → classes/packets/`);
