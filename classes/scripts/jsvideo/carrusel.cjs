// Carrusel de Instagram (1080x1350, 4:5) desde la misma ficha de un short (shorts/<id>.json).
// 7 láminas: portada · caso · alternativas · respuesta · trampa · regla de oro · llamada a la acción.
//   node classes/scripts/jsvideo/carrusel.cjs <id> [<id> …]   → out/carruseles/<id>/01.png … 07.png + <id>_caption.txt
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const HERE = __dirname, ROOT = path.resolve(HERE, '..', '..', '..');
const FONTS = path.join(HERE, 'assets', 'fonts');
const C = { BG: '#0E1116', CARD: '#161B22', LINE: '#2A313C', INK: '#F5F5F7', MUTED: '#9AA0A6', RED: '#FF5A4E', GREEN: '#3DDC84',
  AMBER: '#FFC247', CYAN: '#0BD9E7', NAVY: '#08365F', YEL: '#FFE14D' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = s => esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');

const emblem = (w = 150) => `<svg class="emb" width="${w}" viewBox="0 0 128 80"><path d="M3 3H125V52L101 77H3Z" fill="${C.NAVY}" stroke="${C.CYAN}" stroke-width="4" stroke-linejoin="round"/>
<text x="64" y="50" text-anchor="middle" font-family="Syne" font-weight="800" font-size="27"><tspan fill="#fff">A</tspan><tspan fill="${C.CYAN}">E</tspan><tspan fill="#fff">E</tspan></text></svg>`;

// cuadro de la animación de la clase en el instante t, recortado como en el short
function still(S, out, name, t, crop) {
  const src = path.join(ROOT, 'classes', 'media', S.clip.src), f = path.join(out, name);
  const [x, y, w, h] = crop || S.clip.panels[0].crop;
  execFileSync('ffmpeg', ['-loglevel', 'error', '-y', '-ss', String(t), '-i', src, '-frames:v', '1', '-vf', `crop=${w}:${h}:${x}:${y}`, '-q:v', '2', f]);
  return f;
}

function html(S, img) {
  const N = 7, opt = S.options.find(o => o.letter === S.correct);
  const head = (i, dark) => `<div class="top"><span class="chip">${esc(({ "Otorrinolaringología": "Otorrino" }[S.spec] || S.spec).toUpperCase())}</span><span class="src">${esc(S.source)}</span><span class="n">${i}/${N}</span></div>`;
  const foot = (txt = 'Desliza →') => `<div class="foot">${emblem(92)}<span class="brand">ACADEMIA EXAMEN EUNACOM</span><span class="swipe">${txt}</span></div>`;
  const ex = S.explain, trap = ex[ex.length - 1];
  const cta = S.cta;
  let ctaHtml;
  if (cta.kind === 'web') {
    ctaHtml = `<div class="big c">${esc(cta.top)}</div>
      <div class="url">eunacomapp.cl</div>
      <div class="sub c">${esc(cta.t)}</div>
      <div class="coupon"><div>${esc(cta.codeT || '20 % en cualquier plan')}</div><b>${esc(cta.code)}</b></div>
      <div class="note c">Link en la bio</div>`;
  } else {
    ctaHtml = `<div class="big c">Comenta</div><div class="kw">${esc(cta.keyword)}</div>
      <div class="sub c">${esc(cta.t)}</div>
      ${img.cover ? `<div class="coverwrap"><img class="cover" src="file://${img.cover}"><span class="gratis">GRATIS</span></div>` : ''}`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Inter;src:url(file://${FONTS}/Inter-opsz_wght.ttf);font-weight:100 900}
@font-face{font-family:Syne;src:url(file://${FONTS}/Syne-wght.ttf);font-weight:400 800}
@font-face{font-family:DMMono;src:url(file://${FONTS}/DMMono-Medium.ttf)}
*{box-sizing:border-box;margin:0;padding:0}
body{background:#000;font-family:Inter;color:${C.INK}}
.s{width:1080px;height:1350px;position:relative;overflow:hidden;padding:70px 76px;display:flex;flex-direction:column;
  background:radial-gradient(900px 700px at 80% -10%,rgba(11,217,231,.13),transparent 70%),linear-gradient(180deg,#0E1116,#111824)}
.s:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.07) 1.5px,transparent 1.5px);background-size:46px 46px;pointer-events:none}
.top{display:flex;align-items:center;gap:18px;position:relative;z-index:2}
.chip{background:${C.CYAN};color:${C.BG};font-weight:900;font-size:26px;letter-spacing:.06em;padding:10px 20px;border-radius:12px}
.src{font-family:DMMono;font-size:24px;color:${C.MUTED}}
.n{margin-left:auto;font-family:DMMono;font-size:24px;color:${C.MUTED}}
.foot{position:absolute;left:76px;right:76px;bottom:56px;display:flex;align-items:center;gap:20px;z-index:2}
.brand{font-family:DMMono;font-size:24px;letter-spacing:.04em}
.swipe{margin-left:auto;font-weight:800;font-size:30px;color:${C.CYAN}}
.body{flex:1;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:2;padding-bottom:110px}
.c{text-align:center}
.kick{font-family:DMMono;font-size:28px;color:${C.CYAN};letter-spacing:.08em;margin-bottom:26px}
.hook{font-size:104px;font-weight:900;line-height:1.02;letter-spacing:-.02em;text-transform:uppercase}
.hook2{font-size:118px;font-weight:900;line-height:1;color:${C.RED};margin-top:30px;letter-spacing:-.02em}
.bgimg{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.16;filter:saturate(.7)}
.bgfade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,17,22,.6),rgba(14,17,22,.95) 75%)}
.big{font-size:70px;font-weight:900;line-height:1.08;letter-spacing:-.01em}
.sub{font-size:40px;font-weight:700;line-height:1.25;color:#fff;margin-top:26px}
.card{background:${C.CARD};border:2px solid ${C.LINE};border-radius:30px;padding:40px 44px}
.line{font-size:50px;font-weight:700;line-height:1.2;padding:14px 0 14px 30px;border-left:8px solid ${C.CYAN};margin:14px 0}
.line.hl{color:${C.RED};border-color:${C.RED};font-weight:900}
.q{font-size:52px;font-weight:900;color:${C.AMBER};line-height:1.15;margin-top:50px}
.opt{display:flex;align-items:center;gap:26px;background:${C.CARD};border:2px solid ${C.LINE};border-radius:22px;padding:26px 30px;margin:14px 0;font-size:38px;font-weight:700;line-height:1.2}
.opt b{flex:none;width:64px;height:64px;border-radius:16px;background:#232B36;display:grid;place-items:center;font-size:34px;font-weight:900}
.opt.ok{background:rgba(22,60,40,.95);border:3px solid ${C.GREEN}}.opt.ok b{background:${C.GREEN};color:${C.BG}}
.opt.dim{opacity:.3;font-size:32px;padding:16px 30px;margin:10px 0}.opt.dim b{width:52px;height:52px;font-size:28px}
.opt.no{background:rgba(70,20,20,.9);border:3px solid ${C.RED};font-size:42px}.opt.no b{background:${C.RED};color:#fff}
.ask{margin-top:34px;font-size:36px;font-weight:800;color:${C.YEL};text-align:center}
.ans{display:flex;align-items:center;gap:24px;background:rgba(22,60,40,.95);border:3px solid ${C.GREEN};border-radius:26px;padding:24px 30px;font-size:44px;font-weight:900;line-height:1.15}
.ans i{flex:none;width:70px;height:70px;border-radius:16px;background:${C.GREEN};color:${C.BG};display:grid;place-items:center;font-style:normal;font-size:46px}
.pic{margin-top:36px;border-radius:26px;overflow:hidden;border:2px solid ${C.LINE};background:#0B0E13}
.pic img{display:block;width:100%;max-height:600px;object-fit:contain}
.amber{display:inline-block;background:${C.AMBER};color:${C.BG};font-weight:900;font-size:36px;padding:14px 28px;border-radius:40px;margin-top:30px}
.why{font-size:40px;font-weight:600;line-height:1.3;margin-top:30px;color:#E6E8EB}
.trap{font-family:DMMono;font-size:30px;color:${C.RED};letter-spacing:.08em}
.rule-k{display:inline-block;background:${C.AMBER};color:${C.BG};font-weight:900;font-size:30px;padding:10px 24px;border-radius:30px;letter-spacing:.06em}
.rule{font-size:92px;font-weight:900;line-height:1.08;margin-top:40px;letter-spacing:-.02em}
.rule em{font-style:normal;color:${C.RED}}
.rule-s{font-size:44px;font-weight:800;color:${C.GREEN};margin-top:36px}
.save{margin-top:70px;font-size:34px;font-weight:700;color:${C.MUTED}}
.kw{align-self:center;background:${C.CYAN};color:${C.BG};font-weight:900;font-size:150px;line-height:1.15;padding:6px 60px;border-radius:44px;margin-top:20px;box-shadow:0 0 70px rgba(11,217,231,.5)}
.url{align-self:center;background:${C.CYAN};color:${C.BG};font-weight:900;font-size:96px;padding:12px 50px;border-radius:40px;margin-top:40px;box-shadow:0 0 70px rgba(11,217,231,.5)}
.coupon{align-self:center;margin-top:56px;background:${C.YEL};color:${C.BG};border-radius:28px;padding:30px 70px;text-align:center;outline:4px dashed ${C.BG};outline-offset:-20px;transform:rotate(-2deg);box-shadow:0 0 50px rgba(255,225,77,.35)}
.coupon div{font-size:40px;font-weight:800}.coupon b{display:block;font-size:120px;font-weight:900;line-height:1.05}
.note{margin-top:46px;font-size:34px;font-weight:700;color:${C.MUTED}}
.coverwrap{align-self:center;position:relative;margin-top:40px;transform:rotate(-3deg)}
.cover{height:460px;border-radius:14px;box-shadow:0 30px 70px rgba(0,0,0,.7);display:block}
.gratis{position:absolute;top:-18px;right:-40px;background:${C.YEL};color:${C.BG};font-weight:900;font-size:38px;padding:10px 24px;border-radius:30px;transform:rotate(8deg)}
</style></head><body>

<section class="s">${img.hook ? `<div class="bgimg" style="background-image:url(file://${img.hook})"></div><div class="bgfade"></div>` : ''}
  ${head(1)}<div class="body"><div class="kick">PREGUNTA REAL DEL EUNACOM</div>
  <div class="hook">${esc(S.hook.top)}</div><div class="hook2">${esc(S.hook.big)}</div></div>${foot('Desliza y responde →')}</section>

<section class="s">${head(2)}<div class="body"><div class="kick">EL CASO</div><div class="card">
  ${S.case.map(c => `<div class="line${c.hl ? ' hl' : ''}">${esc(c.t)}</div>`).join('')}</div>
  <div class="q">${esc(S.question.t)}</div></div>${foot()}</section>

<section class="s">${head(3)}<div class="body"><div class="q" style="margin:0 0 30px">${esc(S.question.t)}</div>
  ${S.options.map(o => `<div class="opt"><b>${o.letter}</b><span>${esc(o.text)}</span></div>`).join('')}
  <div class="ask">Comenta tu letra antes de deslizar 👇</div></div>${foot('Respuesta →')}</section>

<section class="s">${head(4)}<div class="body"><div class="ans"><i>✓</i><span>${S.correct} · ${esc(S.answer.t || opt.text)}</span></div>
  ${img.e1 ? `<div class="pic"><img src="file://${img.e1}"></div>` : ''}
  <div class="c"><span class="amber">${esc(ex[0].chip)}</span></div>
  <div class="why c">${esc(ex[0].say)}</div></div>${foot()}</section>

<section class="s">${head(5)}<div class="body"><div class="trap">LA TRAMPA</div>
  ${S.options.filter(o => o.letter !== S.correct).map(o => `<div class="opt ${o.letter === S.trap ? 'no' : 'dim'}"><b>${o.letter === S.trap ? '✗' : o.letter}</b><span>${esc(o.text)}</span></div>`).join('')}
  ${img.e2 ? `<div class="pic" style="margin-top:26px"><img src="file://${img.e2}" style="max-height:330px"></div>` : ''}
  <div class="why c" style="margin-top:26px">${esc(trap.say)}</div></div>${foot()}</section>

<section class="s">${head(6)}<div class="body c"><div><span class="rule-k">REGLA DE ORO</span></div>
  <div class="rule">${rich(S.rule.t)}</div><div class="rule-s">${esc(S.rule.s || '')}</div>
  <div class="save">🔖 Guárdalo para tu repaso</div></div>${foot()}</section>

<section class="s">${head(7)}<div class="body">${ctaHtml}</div>${foot('')}</section>
</body></html>`;
}

async function one(browser, id) {
  const S = JSON.parse(fs.readFileSync(path.join(HERE, 'shorts', id + '.json'), 'utf8'));
  const out = path.join(HERE, 'out', 'carruseles', id); fs.mkdirSync(out, { recursive: true });
  const ex = S.explain, img = {};
  if (S.clip) {
    const mid = c => (c[0] + c[1]) / 2;
    img.hook = still(S, out, '_hook.jpg', S.hook.frame || mid(ex[0].clip), [0, 0, 1280, 720]);
    img.e1 = still(S, out, '_e1.jpg', ex[0].clip[1] - 0.3);
    img.e2 = still(S, out, '_e2.jpg', ex[ex.length - 1].clip[1] - 0.3);
  }
  if (S.cta.cover) {
    const pdf = path.join(ROOT, 'books', 'dist', S.cta.cover);
    execFileSync('pdftoppm', ['-png', '-r', '110', '-f', '1', '-l', '1', '-singlefile', pdf, path.join(out, '_cover')]);
    img.cover = path.join(out, '_cover.png');
  }
  const f = path.join(out, 'index.html'); fs.writeFileSync(f, html(S, img));
  const p = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  await p.goto('file://' + f); await p.evaluate(() => document.fonts.ready);
  const secs = await p.$$('section');
  for (let i = 0; i < secs.length; i++) await secs[i].screenshot({ path: path.join(out, String(i + 1).padStart(2, '0') + '.png') });
  await p.close();
  for (const x of fs.readdirSync(out)) if (x.startsWith('_') || x === 'index.html') fs.rmSync(path.join(out, x));
  // texto de publicación del carrusel
  const P = S.post || {};
  const ctaLine = (P.text || '').trim().split('\n').pop();
  const when = (S.source.match(/·\s*(.+)$/) || [])[1];
  fs.writeFileSync(path.join(HERE, 'out', 'carruseles', `${id}_caption.txt`),
    `${S.hook.top}… ${S.hook.big} 🤔\nPregunta real del EUNACOM${when ? ` (${when})` : ''}.\n\n` +
    `Desliza 👉 y comenta tu letra ANTES de ver la respuesta.\n\n${ctaLine}\n\n🔖 Guárdalo para tu repaso.\n\n` +
    `${(P.hashtags || []).join(' ')}\n\n${P.credit ? 'Créditos: ' + P.credit : ''}\n`);
  console.log('ok', id, secs.length, 'láminas');
}

(async () => {
  const ids = process.argv.slice(2);
  if (!ids.length) { console.error('uso: carrusel.cjs <id> [<id> …]'); process.exit(1); }
  const browser = await require('playwright').chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
  for (const id of ids) await one(browser, id);
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
