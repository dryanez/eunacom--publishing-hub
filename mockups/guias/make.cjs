// 5 muestras de portada para la serie de Repasos: el TIPO de libro va grande y la especialidad en segundo lugar
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const R = path.resolve(__dirname, '..', '..');
const BB = require(R + '/books/scripts/build_book.cjs');
const logo = fs.readFileSync(R + '/books/assets/aee-logo-7a-dark.svg', 'utf8');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const S = [
  { n: 1, ch: '01', a: 'Guía', b: 'Rápida', esp: 'Cardiología', tag: 'Todo el Perfil V3 en 1 página por tema' },
  { n: 2, ch: '07', a: 'Repaso', b: 'Final', esp: 'Endocrinología', tag: 'Para las últimas semanas antes del EUNACOM' },
  { n: 3, ch: '18', a: 'Lo', b: 'Esencial', esp: 'Pediatría', tag: 'Lo que siempre preguntan, 1 página por tema' },
  { n: 4, ch: '10', a: 'Fichas', b: 'Clave', esp: 'Neurología', tag: 'Una ficha por tema · números, fármacos y trampas' },
  { n: 5, ch: '21', a: 'Guía de', b: 'Bolsillo', esp: 'Salud Pública', tag: 'Para repasar en cualquier parte' },
];
const files = fs.readdirSync(R + '/books/assets/covers');
for (const s of S) {
  const m = BB.COVER_METADATA[s.ch] || {};
  const col = m.color || '#f97316';
  const ph = files.find(f => f.startsWith(s.ch + '_'));
  const bg = 'data:image/jpeg;base64,' + fs.readFileSync(R + '/books/assets/covers/' + ph).toString('base64');
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}html,body{width:794px;height:1123px;overflow:hidden}
body{font-family:'IBM Plex Sans';color:#fff;background:#0b1420;position:relative;--a:${col}}
.ph{position:absolute;inset:0;background:url('${bg}') center/cover;filter:grayscale(.4) brightness(.45) contrast(1.1)}
.vl{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,20,32,.88) 0%,rgba(11,20,32,.55) 38%,rgba(11,20,32,.92) 75%,rgba(11,20,32,.98) 100%)}
.sp{position:absolute;left:0;top:0;bottom:0;width:14px;background:var(--a)}
.w{position:absolute;inset:0;padding:56px 60px 56px 72px;display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;align-items:flex-start}.top svg{height:96px;width:auto;margin-left:-38px;display:block}
.ed{font:700 11px/1 'IBM Plex Mono';letter-spacing:.14em;color:var(--a);border:1px solid var(--a);padding:7px 11px;background:rgba(8,13,20,.6)}
.k{font:700 13px/1 'IBM Plex Mono';letter-spacing:.2em;color:#c6d0dd;margin-top:54px}
.t{font:900 150px/.82 'Barlow Condensed';text-transform:uppercase;letter-spacing:-.02em;margin-top:12px}.t span{color:var(--a)}
.bar{height:6px;width:140px;background:var(--a);margin:26px 0 20px}
.esp{font:800 60px/.95 'Barlow Condensed';text-transform:uppercase;letter-spacing:.01em}
.sub{font:500 18px/1.3 'IBM Plex Sans';color:#c6d0dd;margin-top:10px}
.f{margin-top:22px;font:600 15px/1.4 'IBM Plex Sans';color:#e2e8f0}.f b{font:800 30px/1 'Barlow Condensed';color:var(--a);margin-right:4px}
.bot{margin-top:auto;border-top:1px solid rgba(255,255,255,.35);padding-top:14px;display:flex;justify-content:space-between;font:600 11px/1 'IBM Plex Mono';letter-spacing:.12em;color:#b6c1d0;text-transform:uppercase}
.num{position:absolute;right:60px;top:150px;font:800 13px/1 'IBM Plex Mono';letter-spacing:.15em;color:#fff;background:var(--a);padding:6px 10px}
</style></head><body><div class="ph"></div><div class="vl"></div><div class="sp"></div>
<div class="num">MUESTRA ${s.n}</div>
<div class="w"><div class="top">${logo}<span class="ed">1ª EDICIÓN · 2026</span></div>
<div class="k">SERIE AEE · PERFIL V3</div>
<div class="t">${s.a}<br><span>${s.b}</span></div><div class="bar"></div>
<div class="esp">${s.esp}</div><div class="sub">${s.tag}</div>
<div class="f"><b>1</b> página por tema &nbsp;·&nbsp; <b>★★★</b> según preguntas reales 2013–2025 &nbsp;·&nbsp; <b>7</b> días de plan</div>
<div class="bot"><span>Tomo ${s.ch} · ${s.a} ${s.b}</span><span>Academia Examen EUNACOM</span></div></div></body></html>`;
  const h = path.join(__dirname, `muestra_${s.n}.html`); fs.writeFileSync(h, html);
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--virtual-time-budget=6000', '--window-size=794,1123', `--screenshot=${path.join(__dirname, `muestra_${s.n}.png`)}`, 'file://' + h], { stdio: 'ignore' });
  console.log('muestra', s.n, s.a, s.b);
}
