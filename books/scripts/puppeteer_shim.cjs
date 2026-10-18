// Puppeteer mínimo sobre Playwright (Chromium), para compilar los libros donde no hay puppeteer (p. ej. la nube).
// Cubre lo que usa build_book.cjs: launch, newPage, setContent, evaluate, evaluateHandle, pdf, close.
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path'), crypto = require('crypto');
// Las fuentes web (Google Fonts) se bajan con curl, que sí pasa por el proxy, y quedan en caché.
const CACHE = path.join(os.tmpdir(), 'eunacom_fonts');
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
function fetchCached(url) {
  fs.mkdirSync(CACHE, { recursive: true });
  const f = path.join(CACHE, crypto.createHash('md5').update(url).digest('hex'));
  if (!fs.existsSync(f)) execFileSync('curl', ['-sSL', '-A', UA, '-o', f, url]);
  return fs.readFileSync(f);
}
const TYPE = u => /css2?\?|\.css/.test(u) ? 'text/css' : /\.woff2/.test(u) ? 'font/woff2' : /\.ttf/.test(u) ? 'font/ttf' : 'application/octet-stream';
const WAIT = { networkidle0: 'networkidle', networkidle2: 'networkidle', load: 'load', domcontentloaded: 'domcontentloaded' };
function wrapPage(p) {
  return {
    setContent: (html, o = {}) => p.setContent(html, { waitUntil: WAIT[o.waitUntil] || 'load', timeout: o.timeout }),
    goto: (u, o = {}) => p.goto(u, { waitUntil: WAIT[o.waitUntil] || 'load', timeout: o.timeout }),
    evaluate: (fn, ...args) => typeof fn === 'string' ? p.evaluate(fn) : p.evaluate(`(${fn.toString()})(...${JSON.stringify(args)})`),
    evaluateHandle: (s) => p.evaluateHandle(s),
    pdf: (o) => p.pdf(o),
    close: () => p.close(),
  };
}
module.exports = {
  launch: async () => { const b = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}); return { newPage: async () => { const p = await b.newPage(); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => { try { r.fulfill({ status: 200, contentType: TYPE(r.request().url()), body: fetchCached(r.request().url()) }); } catch (e) { r.abort(); } }); return wrapPage(p); }, close: () => b.close() }; },
};
