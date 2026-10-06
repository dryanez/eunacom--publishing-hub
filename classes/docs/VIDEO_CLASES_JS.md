# Clases en video con JavaScript (sin Manim, sin After Effects)

Método: cada cuadro del video es una función de JavaScript `render(t)` que dibuja en un canvas. Chromium sin interfaz
(Playwright) dibuja 30 cuadros por segundo, ffmpeg los une en MP4 y se le pone la narración. Como el mismo `t` da siempre
el mismo cuadro, se puede revisar cualquier instante (storyboard, hoja de contacto) antes de renderizar todo.

Piloto: **neuro-16 Guillain-Barré** (17,6 min). Todo vive en `classes/scripts/jsvideo/`.

## Qué hay

| Archivo | Para qué |
|---|---|
| `scenes/clase.html` | Dibuja cualquier clase completa a partir de su `lessons/<clase>.cjs`: intro con logo AEE, portada, flujos, tarjetas, tabla, algoritmo con cámara, preguntas con cuenta regresiva y respuesta, animaciones (MP4) y cierre con "Próxima clase". |
| `build_class.cjs` | Arma la línea de tiempo: un *beat* por cada texto narrado (`say`), genera la voz, mide su duración y mezcla `narracion.m4a`. |
| `render_class.cjs` | Renderiza la clase en paralelo (un Chromium por núcleo) y le pone el audio. |
| `render.cjs` | Escenas sueltas (animaciones de anatomía): MP4, `--frames` (storyboard) y `--sheet` (hoja de contacto). |
| `scenes/neuro16_gbs.html` | Animación de anatomía real: mielina sobre el axón real de Blausen, ataque de anticuerpos, conducción lenta, debilidad ascendente y capacidad vital. |
| `lib.js`, `assets/` | Utilidades, ilustración Blausen limpia (con y sin fondo), fuentes Inter / Syne / DM Mono (las del logo). |
| `out/<clase>/` | Salida (no va a git): `data.js`, `narracion.m4a`, `voz/`, `frames/`, `<clase>_clase.mp4`. |

## Pasar al Mac (una vez)

```bash
cd ~/…/eunacom--publishing-hub
git fetch origin && git checkout claude/pensive-dijkstra-2kkcm7 && git pull     # o main, cuando esté mezclado
npm i -g playwright@1.56 && npx playwright install chromium                   # navegador sin interfaz
brew install ffmpeg                                                            # ya está en /opt/homebrew/bin
pip3 install edge-tts                                                          # voz gratuita de borrador
```

En Claude Code en el Mac basta decir: **"lee classes/docs/VIDEO_CLASES_JS.md y haz la clase <id> en video"**.

## Hacer una clase

```bash
export NODE_PATH=$(npm root -g)
node classes/scripts/jsvideo/build_class.cjs neuro-16                       # voz de borrador (edge, gratis)
node classes/scripts/jsvideo/render.cjs "clase?c=neuro-16" --frames /tmp/sb 2 20 60 300   # revisar cuadros sueltos
node classes/scripts/jsvideo/render_class.cjs neuro-16 --from 0 --to 60     # probar el primer minuto
node classes/scripts/jsvideo/render_class.cjs neuro-16                      # clase completa (~9 min con 4 núcleos)
```

### Voz
- `--voice edge:es-CL-LorenzoNeural` (por defecto): gratis, para revisar. Otras: `es-MX-JorgeNeural`, `es-US-AlonsoNeural`.
- `--voice eleven:m3IrTXgclGG0hR8ORocn`: **Alejandro** en ElevenLabs (usa `ELEVENLABS_API_KEY`). Una clase gasta
  ~15.000 caracteres; al 6-10-2026 el plan Creator tenía solo ~780 libres hasta el reinicio (~23-10-2026).
- `--voice dir:<carpeta>`: MP3 propios por beat (`<carpeta>/b001.mp3`, `b002.mp3`… según `out/<clase>/data.js`), por
  ejemplo si se genera Alejandro con el modelo local del Mac. Los que falten se hacen con edge.

La voz se guarda en caché por texto: cambiar un `say` y volver a correr `build_class.cjs` solo regenera ese trozo.
Los tiempos de la animación salen del audio, así que con otra voz todo vuelve a quedar sincronizado solo.

## Revisar (obligatorio antes de entregar)
1. Storyboard: `render.cjs "clase?c=<id>" --frames <dir> t1 t2 …` (un cuadro por diapositiva, al final de cada una).
2. Mirar los cuadros: textos que se salen o se tapan, cajas vacías, cosas encima del título.
3. Corregir en `scenes/clase.html` (afecta a todas las clases) y repetir.
4. Recién ahí `render_class.cjs`.

## Agregar animaciones de anatomía a una clase
Las diapositivas `type: 'image'` con `.mp4` (Manim, Blender o `render.cjs`) se reproducen dentro del video: `build_class.cjs`
extrae sus cuadros a `out/<clase>/frames/` y el beat dura al menos lo que dura la animación. Para una animación nueva en JS,
copiar `scenes/neuro16_gbs.html` como plantilla (imagen real de fondo + capas animadas) y renderizar con `render.cjs`.

## Pendiente / ideas
- Música de fondo suave y un "whoosh" en la intro (mezclar en `build_class.cjs`).
- Más imágenes Blausen: Wikimedia limita las descargas desde la nube; en el Mac están las 797 en `assets3d/blausen/img`.
- Tamaño: la clase completa pesa ~25-40 MB; no se sube a git (está en `out/`). Subir al bucket R2 o a la plataforma.
