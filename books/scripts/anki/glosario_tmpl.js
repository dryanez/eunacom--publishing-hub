/* AEE · glosario clicable (estilo AMBOSS) + reproductor AEE embebido. Va al final del reverso de las 3 plantillas.
   Lee el JSON oculto de la nota (<div class="aee-glos">, dentro del campo Clase), subraya la 1.ª aparición de cada
   término en el reverso (no toca los huecos del cloze, enlaces ni metadatos) y abre un panel con la definición,
   la página del libro y los botones «▶ Ver aquí» (iframe) y «Abrir en AEE ↗». ES5 sin dependencias:
   Anki escritorio, AnkiMobile y AnkiDroid. */
(function () {
  var host = document.getElementById('aee-host');
  if (!host || host.getAttribute('data-ok')) return;
  host.setAttribute('data-ok', '1');
  var root = host.parentNode || document.body;

  function player(box, url) {            // inserta / quita el iframe 16:10 en `box`
    if (box.firstChild) { box.innerHTML = ''; box.style.display = 'none'; return; }
    var f = document.createElement('iframe');
    f.src = url; f.setAttribute('allow', 'fullscreen; autoplay'); f.setAttribute('allowfullscreen', '');
    box.appendChild(f); box.style.display = 'block';
  }
  // botón «▶ Ver aquí» del campo Clase de la tarjeta
  var plays = root.querySelectorAll('a.aee-play');
  for (var i = 0; i < plays.length; i++) (function (a) {
    a.onclick = function (ev) {
      var box = a.parentNode.querySelector('.aee-player');
      if (!box) return true;                // sin contenedor: deja que abra el link
      ev.preventDefault(); player(box, a.getAttribute('data-embed') || a.href); return false;
    };
  })(plays[i]);

  var gEl = root.querySelector('.aee-glos'), G = [];
  try { G = JSON.parse(gEl ? gEl.textContent : '[]') || []; } catch (e) { G = []; }
  if (!G.length) return;

  function fold(s) {
    var o = '';
    for (var i = 0; i < s.length; i++) {
      var c = s.charAt(i), d = c.normalize ? c.normalize('NFKD') : c;
      o += d ? d.charAt(0) : c;
    }
    return o;
  }
  function wch(c) { return !!c && /[A-Za-z0-9]/.test(c); }
  var pats = [];
  for (var gi = 0; gi < G.length; gi++) for (var j = 0; j < G[gi].a.length; j++) {
    var a = G[gi].a[j], sig = a.toUpperCase() === a && /[A-Za-z]/.test(a);
    pats.push({ g: gi, a: sig ? fold(a) : fold(a).toLowerCase(), s: sig });
  }
  pats.sort(function (x, y) { return y.a.length - x.a.length; });

  var SKIP = /(^|\s)(cloze|aee-term|meta|aee-pop|aee-glos|pista)(\s|$)/;
  function texts(el) {
    var out = [];
    (function walk(n) {
      for (var c = n.firstChild; c; c = c.nextSibling) {
        if (c.nodeType === 3) { if (c.nodeValue.length > 2) out.push(c); }
        else if (c.nodeType === 1 && !/^(A|SCRIPT|STYLE|BUTTON|IFRAME|DETAILS|SUMMARY)$/.test(c.tagName) && !SKIP.test(c.className || '')) walk(c);
      }
    })(el);
    return out;
  }
  var zones = root.querySelectorAll('.aee-back .txt, .aee-back .extra, .aee-back .row');
  var done = {};
  for (var p = 0; p < pats.length; p++) {
    var P = pats[p];
    if (done[P.g]) continue;
    for (var z = 0; z < zones.length && !done[P.g]; z++) {
      var tn = texts(zones[z]);
      for (var t = 0; t < tn.length && !done[P.g]; t++) {
        var raw = tn[t].nodeValue, f = fold(raw), hay = P.s ? f : f.toLowerCase(), from = 0, k;
        while ((k = hay.indexOf(P.a, from)) >= 0) {
          var e = k + P.a.length;
          if (!P.s) { if (hay.substr(e, 2) === 'es' && !wch(hay.charAt(e + 2))) e += 2; else if (hay.charAt(e) === 's' && !wch(hay.charAt(e + 1))) e += 1; }
          if (!wch(hay.charAt(k - 1)) && !wch(hay.charAt(e))) {
            var mid = tn[t].splitText(k); mid.splitText(e - k);
            var sp = document.createElement('span');
            sp.className = 'aee-term'; sp.setAttribute('data-g', P.g); sp.setAttribute('role', 'button');
            mid.parentNode.replaceChild(sp, mid); sp.appendChild(mid);
            done[P.g] = 1; break;
          }
          from = k + 1;
        }
      }
    }
  }

  var pop = document.createElement('div');
  pop.className = 'aee-pop'; pop.style.display = 'none';
  host.appendChild(pop);
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function open(g, anchor) {
    var x = G[g], h = '<button class="aee-x" aria-label="Cerrar">×</button>' +
      '<div class="aee-pt"><b>' + esc(x.n) + '</b> <span class="aee-tipo">' + esc(x.t) + '</span></div>' +
      (x.d ? '<div class="aee-pd">' + esc(x.d) + '</div>' : '') + '<div class="aee-btns">' +
      (x.p ? '<span class="aee-btn aee-libro" title="' + esc(x.l) + '">📖 Libro p. ' + esc(x.p) + '</span>' : '') +
      (x.e ? '<a class="aee-btn aee-aqui" href="' + esc(x.e) + '">▶ Ver aquí (' + esc(x.m) + ')</a>' : '') +
      (x.u ? '<a class="aee-btn" href="' + esc(x.u) + '">' + 'Abrir en AEE' + (x.m ? ' (' + esc(x.m) + ')' : '') + ' ↗' + '</a>' : '') +
      '</div><div class="aee-player"></div>';
    pop.innerHTML = h; pop.style.display = 'block'; pop.setAttribute('data-g', g);
    pop.querySelector('.aee-x').onclick = function (ev) { ev.stopPropagation(); pop.style.display = 'none'; pop.innerHTML = ''; };
    var aq = pop.querySelector('.aee-aqui');
    if (aq) aq.onclick = function (ev) { ev.preventDefault(); ev.stopPropagation(); player(pop.querySelector('.aee-player'), aq.href); return false; };
  }
  var terms = root.querySelectorAll('.aee-term');
  for (var q = 0; q < terms.length; q++) (function (sp) {
    sp.onclick = function (ev) {
      ev.stopPropagation();
      var g = sp.getAttribute('data-g');
      if (pop.style.display === 'block' && pop.getAttribute('data-g') === g) { pop.style.display = 'none'; pop.innerHTML = ''; }
      else open(+g, sp);
    };
  })(terms[q]);
  root.addEventListener('click', function (ev) {
    if (pop.style.display !== 'block') return;
    for (var n = ev.target; n; n = n.parentNode) if (n === pop) return;
    pop.style.display = 'none'; pop.innerHTML = '';
  });
})();
