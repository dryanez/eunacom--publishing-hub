# Buscar las fotos que faltan en los libros de Descargas (en el computador local)

> Escrito el 2026-10-12. Los libros fuente están en la carpeta Descargas del computador, no en el repo ni en la nube.
> Abrir Claude Code en la carpeta del repo (`git pull` primero) y pedirle que lea este archivo.

## Qué buscar

`classes/docs/auditoria_imagenes/FALTANTES_TODO.md`: **392 fotos** que las clases enseñan y que no existen en ninguna parte del repo
(94 alta, 221 media, 77 baja), de los 4 módulos. Cada fila trae clase, tema, la imagen concreta y el tipo (eco, TAC, foto clínica…).
Empezar por **prioridad alta**. El detalle por especialidad está en `FALTANTES_<esp>.md`.

## Dónde buscar cada especialidad

| Especialidades | Libro de Descargas |
|---|---|
| endo, nefro, hem, neuro, resp, gastro, infecto, reuma, diab | Harrison's Principles of Internal Medicine; HY |
| derma (y lesiones de piel de reuma e infecto) | Fitzpatrick Dermatology |
| oftal (y retinopatía de diab, uveítis de reuma) | Kanski's Clinical Ophthalmology |
| ob, gin | Williams Obstetricia y Williams Gynecology |
| ped (y exantemas de infecto) | Nelson Textbook of Pediatrics, Meneghello Pediatría |
| cirugia, trauma, uro, orl | Bailey & Love's Surgery |
| todas | manuales CTO 14.ª y AMIR (bucket R2 `eunacomvideos/Manuales_MIR/`) |

## Cómo (herramientas ya en el repo)

```bash
pip install pymupdf pillow
# 1. Extraer las imágenes de los PDF, con página y pie de figura (no se sube: _candidatas está en .gitignore)
python classes/scripts/extract_pdf_images.py "<ruta a Descargas>/<carpeta de libros>" --out classes/media/_candidatas
# 2. Buscar por tema en los pies de figura (ignora tildes y mayúsculas)
python classes/scripts/buscar_figuras.py classes/media/_candidatas "" "de quervain|subacute thyroiditis" "esophageal varices"
# 3. Mirar las candidatas antes de elegir
python classes/scripts/hoja_contactos.py classes/media/_candidatas hoja.jpg 123 456 789
```

Los libros en inglés: buscar con el nombre en inglés (p. ej. "hypopyon", "Looser zone", "string of beads").

## Para cada foto elegida

1. **Mirarla** antes de usarla: el pie de figura a veces corresponde a otra imagen de la misma página.
2. Copiarla a `classes/media/biblioteca/<NN_especialidad>/<clase>/NN_tema__libro_pPÁGINA.jpg` (máx. 1600 px, JPEG 85).
3. Ponerla en la diapositiva `type: 'image'` de la clase: en «Así se ve» si es importante (el libro toma hasta 3 de ahí), si no en «Más imágenes».
   Con más de una foto: `layout: 'gallery'` y un paso por foto. Narración sin cifras ni símbolos, solo hechos que la clase ya dice.
4. `node classes/scripts/check_lesson.cjs <clase>` debe dar ✓.
5. Tachar la fila en `FALTANTES_<esp>.md`.

## Después

- Libros: `node books/scripts/build_book.cjs <especialidad>` (en la nube funciona con `books/scripts/puppeteer_shim.cjs`).
- Videos de clase ya hechos: `node classes/scripts/jsvideo/refresh_slides.cjs <clase>` y `classes/scripts/jsvideo/patch_class.sh <clase>`
  (solo vuelve a hacer los segundos de la foto). Si la clase cambió de narración o de número de diapositivas, se renderiza entera.
- La voz gratuita (Edge TTS) no funciona en la nube desde el 12-oct (la red bloquea su conexión). En el Mac sí funciona:
  ahí se pueden renderizar las clases que faltan con `classes/scripts/jsvideo/queue_worker.sh` (ver `VIDEO_CLASES_JS.md`).
