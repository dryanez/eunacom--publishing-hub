# Traspaso: imágenes de las clases, para seguir en el computador local

> Escrito el 2026-10-03 al cerrar la sesión en la nube. Todo lo de abajo está en `main`.
> Para empezar en local: `git pull`, abrir Claude Code en la carpeta del repo y pedirle que lea este archivo.

## Dónde quedamos

| Qué | Estado | Dónde |
|---|---|---|
| Plan de imágenes por clase (340 clases, prioridad ★★★/★★/★) | Hecho | `classes/docs/PLAN_IMAGENES.md` |
| Figuras sacadas de los 62 manuales CTO/AMIR (bucket R2) | 186 de 251 clases | `classes/media/biblioteca/` + `classes/docs/IMAGENES_ENCONTRADAS.md` |
| Figuras dibujadas por nosotros (SVG) | 40 figuras, 39 clases | `classes/media/biblioteca/<esp>/<clase>/S*__propio.svg` |
| Lo que falta, con el libro donde buscarlo | 97 ítems | `classes/docs/IMAGENES_FALTANTES.md` → "Qué buscar (por libro)" |
| Diapositiva de imagen en el reproductor | Hecho | tipo `image` en `player_template.html` y `build_swiss_player.cjs` |
| Piloto en clases reales | 4 clases | derma-01, resp-13, nefro-09, ob-03 |
| Imágenes puestas en el resto de las clases | **Pendiente** | — |

## Paso 1: buscar las imágenes que faltan en Descargas

La lista de libros y temas está en `IMAGENES_FALTANTES.md`. Los más rentables: Meneghello/Nelson, Fitzpatrick,
Kanski, AMIR Neumología/Digestivo/Neurología, Guía Perinatal MINSAL, Manual ATLS, un atlas de semiología.

```bash
pip install pymupdf pillow

# 1. Extraer todas las imágenes de una carpeta de PDFs (con página y pie de figura)
python classes/scripts/extract_pdf_images.py "C:\Users\<usuario>\Downloads\Libros" --out classes/media/_candidatas

# 2. Buscar por tema en los pies de figura (ignora tildes y mayúsculas; "" = todos los libros)
python classes/scripts/buscar_figuras.py classes/media/_candidatas "" "koplik|sarampion" "chalazion"

# 3. Mirar las candidatas antes de elegir (los números son los F del paso 2)
python classes/scripts/hoja_contactos.py classes/media/_candidatas hoja.jpg 123 456 789
```

`classes/media/_candidatas/` está en `.gitignore`: no se sube al repo.

Para cada figura elegida:
1. Copiarla a `classes/media/biblioteca/<NN_especialidad>/<clase>/` con el nombre
   `NN_item__libro_pPÁGINA.jpg` (máximo 1600 px de lado, JPEG calidad 85).
2. Agregar la fila en `classes/docs/IMAGENES_ENCONTRADAS.md` y sacarla de `IMAGENES_FALTANTES.md`.
3. **Mirarla siempre antes de elegirla**: el pie de figura a veces corresponde a otra imagen de la misma página
   (pasó con "Tumor de Pancoast", que mostraba otra foto, y con "Ojos de mapache", que era amiloidosis y no TEC).

Preferir imágenes de ~1000 px o más. Las de CTO 14.ª suelen venir a ~375 px y se ven borrosas en pantalla completa;
las de AMIR vienen a ~1000 px.

## Paso 2: poner las imágenes en las diapositivas

Modelo: ver las diapositivas `type: 'image'` en `classes/lessons/derma-01.cjs` (galería) y
`classes/lessons/resp-13.cjs` (una imagen con marcas). Formato:

```js
{
  type: 'image',
  layout: 'gallery',          // o se omite para una imagen grande con marcas
  light: true,                // fondo blanco (ECG, registros, dibujos); sin esto, fondo oscuro (RX, fotos)
  kicker: 'Así se ven',
  title: 'Vesícula, ampolla y pústula en la piel real',
  images: [{ src: 'derma-01/vesicula.jpg', label: 'Vesícula', desc: 'Menor a 0,5 cm', credit: 'Herpes simple · Manual AMIR Dermatología' }],
  steps: [
    { note: 'Texto corto en pantalla',
      marks: [{ x: 33, y: 22, w: 12, h: 30, label: 'Pulmón colapsado', labelTop: true, shape: 'box' }],   // % de la imagen
      say: 'Lo que dice la voz en este paso (en palabras, sin cifras ni símbolos).' },
  ],
}
```

- `src` es relativo a `classes/media/`. Las galerías llevan un paso por imagen.
- Las marcas van en % del ancho/alto de la imagen. Para ubicarlas, poner una grilla sobre la imagen y mirarla.
- Una pregunta (`type: 'quiz'`) puede llevar `image: { src, credit, caption }`.
- Mantener la voz "tú" y `note` de menos de 10 palabras (ver `classes/docs/LESSON_STANDARD.md`).

Validar y compilar:

```bash
node classes/scripts/check_lesson.cjs derma-01         # revisa también que existan las imágenes y que las marcas caben
node classes/scripts/build_swiss_player.cjs           # recompila el reproductor
node classes/scripts/export_narration.cjs             # actualiza los guiones de voz
```

### Antes de escalar: tamaño del reproductor

Hoy las imágenes se incrustan dentro del HTML (data URI). El reproductor ya pesa 15,4 MB y el límite del Artifact
es 16 MB. **Antes de agregar imágenes a más clases**, cambiar `loadImage()` en `build_swiss_player.cjs` para que
copie cada imagen a `classes/decks/media/` y use una ruta relativa, y publicar el Artifact con esos archivos aparte
(parámetro `files`). Para uso local (abrir el HTML desde disco) las rutas relativas funcionan igual.

Orden sugerido: Dermatología → Oftalmología → Reumatología → Neumología → Infectología → Pediatría → resto.

## Paso 3: figuras propias

```bash
python classes/scripts/draw_figures.py            # regenera las 40 SVG
python classes/scripts/draw_figures.py ped-17     # solo una clase
python classes/scripts/draw_ctg.py reactivo classes/media/ob-03/rbne_reactivo.svg
```

Curvas y gráficos en `draw_figures.py`, esquemas en `draw_schemes.py`. Las curvas OMS usan las tablas oficiales en
`classes/scripts/data/oms/`. Bhutani y la serología de hepatitis B son esquemas con valores aproximados.

Quedaron para libro (dibujadas en código se verían mal): Kernig/Brudzinski, Dix-Hallpike/Epley, McRoberts,
desobstrucción de vía aérea, Ortolani/Barlow, mapa de fibromialgia.

## Bucket R2

- Bucket `eunacomvideos`, endpoint `https://1feadf1b0863cb9b502faaa828b563aa.r2.cloudflarestorage.com`.
- Manuales en `Manuales_MIR/` (CTO 14.ª en `14_Edicion/`, AMIR en la raíz y en `17_Edicion/`).
- Las claves **no** están en el repo y no deben estarlo. **Rotar la clave R2**: se pegó en el chat de la sesión
  en la nube el 2026-10-03.

## Reglas

- Mergear a `main` el mismo día (ver `STATUS.md`).
- Nunca inventar contenido médico: las imágenes ilustran lo que la clase ya enseña.
- Los PDF CTO del bucket vienen de booksmedicos.org; considerarlo si el curso se vende.
