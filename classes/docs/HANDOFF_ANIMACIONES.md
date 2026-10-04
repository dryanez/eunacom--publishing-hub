# Handoff: animaciones de las clases (2026-10-05)

Para continuar en una sesión nueva: abrir Claude Code en `eunacom--publishing-hub` y pedir
"lee classes/docs/HANDOFF_ANIMACIONES.md y sigue con las animaciones".

## 1. Decisión clave del usuario (leer primero)

El usuario revisó las animaciones Manim y dijo: **"no es suficiente"**. Los órganos dibujados con formas
simples (la sustancia nigra como un círculo, el riñón como una línea, el útero como una elipse, la piel como
rectángulos) **no sirven**. Toda animación que muestre anatomía debe usar:

1. **Render 3D con anatomía real** (Blender + BodyParts3D / Z-Anatomy), o
2. **Ilustración médica profesional real** (Blausen, CC BY 3.0) como fondo, con la animación encima
   (flechas, partículas, resaltados, rótulos en Manim o en Blender).

Lo que **sí puede quedar en Manim puro**: gráficos y líneas de tiempo sin anatomía (curvas flujo-volumen,
ROC, insulinas, Bhutani, serología VHB, sífilis, dengue, CD4, ciclo menstrual, gases, tabla 2x2, VPP,
sesgo de adelanto, reloj de incubación, reloj del estatus, ABCDE, reanimación, ECG, monitoreo fetal).

## 2. Estado actual (todo en `main`, último commit b786e4f)

- 128 videos MP4 en `classes/media/animaciones/<clase>/A*.mp4` (≈ 96 clases). 9 son 3D (`*_3d.mp4`).
- Cada clase con animación tiene una diapositiva `type: 'image', layout: 'sequence', kicker: 'En movimiento'`
  con narración por paso. Las animaciones SVG antiguas (ob-17, nefro-09) siguen en `media/biblioteca/`.
- Plan completo por clase: `classes/docs/PLAN_ANIMACIONES.md` (★★★/★★/★, ~230 propuestas).
- Inventario de imágenes: `classes/docs/INVENTARIO_IMAGENES.md`.
- El reproductor (`classes/decks/Reproductor_Suiza_Oficial.html`, ~13,6 MB) carga imágenes y videos desde
  `../media/` (no incrustados). Soporta `.mp4` (`video: true`) y el layout `sequence` (una imagen grande que
  cambia por paso; solo reproduce el video del paso activo).

### Pendiente inmediato
1. **Parkinson 3D** (`classes/scripts/blender/z_parkinson.py`): preview OK (cerebro real Z-Anatomy, nigra se
   despigmenta, dopamina viaja al estriado). El render completo quedó a medias. Correr:
   `python3 classes/scripts/blender/render3d.py z_parkinson` → `media/animaciones/neuro-11/A1_nigroestriada_3d.mp4`.
   Luego reemplazar en `lessons/neuro-11.cjs` el video `A1_nigroestriada.mp4` (abstracto) por el 3D.
2. **Blausen**: 106 de 797 PNG se bajaron vacíos (rate limit). Lista en el directorio: re-bajar con pausas
   (ver `assets3d/blausen/meta.json` = título→URL; reintentar los archivos de tamaño 0 con `sleep 0.6`).
3. **Rehacer las animaciones con anatomía abstracta** (sección 4).

## 3. Herramientas y assets (ya instalados en este Mac)

| Qué | Dónde | Uso |
|---|---|---|
| Blender 4.5 | `/Applications/Blender.app/Contents/MacOS/Blender` | render sin interfaz (`-b -P script.py -- args`) |
| Manim CE 0.21 | `~/.venvs/manim/bin/manim` (Python 3.12, uv) | animaciones 2D |
| BodyParts3D (CC BY 4.0) | `~/Documents/Archive/Apps/assets3d/bp3d/partof_BP3D_4.0_obj_99/` + `partof_element_parts.txt` (concepto FMA → archivos FJ) | 1.258 piezas: corazón, pulmones, bronquios, huesos, arterias cerebrales, vísceras abdominales, hipófisis, cerebro (sin núcleos basales), ojo (globo) |
| Z-Anatomy (CC BY-SA 4.0) | `assets3d/zanatomy/Z-Anatomy/Startup.blend`; piezas exportadas a OBJ en `assets3d/zanatomy/obj/` (99) | núcleos basales, tálamo, mesencéfalo, núcleo rojo, ventrículos, córtex (giros), ojo (córnea, cristalino, iris, retina, vítreo, esclera), hígado, vesícula, estómago, duodeno, páncreas, esófago, vejiga, tiroides, suprarrenales. **No hay** útero/ovario (modelo masculino). **No usar** oído interno ni riñón de Z-Anatomy (licencia NC). Exportar más piezas con `/tmp/zexport.py` (ver sección 5) |
| Blausen Medical (CC BY 3.0) | `assets3d/blausen/img/*.png` (797; 106 vacíos) + `meta.json` | ilustraciones profesionales: Nephron Anatomy, Emphysema, Sickle Cell Anemia, Gallstones, Liver Cirrhosis, Crohn's Disease, Intussusception, Placenta Previa, PlacentalAbruption, Ectopic Pregnancy, Hematoma Comparison, InguinalHernia, SkinAnatomy 01, Epidermis, Melanoma, EyeAnatomy Sectional, Cataracts, Macular Degeneration, Herpes Zoster Rash, Synapse/Acetylcholine Pathway, Dopamine Pathway, BasalGanglia, ParkinsonsDisease, Pyloric Stenosis, Multiple Sclerosis, PleuralEffusion, Pneumonia, Atelectasis, Burns, Pap Smear, Uterine Fibroids, Stages of Childbirth, Heimlich, CPR, etc. |
| ffmpeg | `/opt/homebrew/bin/ffmpeg` (sin filtro drawtext: los rótulos se hacen con PIL) | |

**Créditos obligatorios**: BodyParts3D "DBCLS, CC BY 4.0"; Z-Anatomy "CC BY-SA 4.0" (el video derivado queda
BY-SA, se puede vender el curso); Blausen "Blausen.com staff (2014), CC BY 3.0". Ponerlos en `credit:` de la diapositiva.

## 4. Animaciones a rehacer con anatomía real (abstractas hoy)

Base sugerida entre paréntesis. 3D = Blender; BL = Blausen de fondo + overlay.

- neuro-11 Parkinson → 3D Z-Anatomy (hecho, falta render final) + BL ParkinsonsDisease/Dopamine Pathway
- neuro-17 placa neuromuscular → BL Acetylcholine Pathway / Synapse
- neuro-01 penumbra → 3D cerebro BP3D/Z (corte) o BL Stroke
- neuro-04 aneurisma/HSA → 3D polígono de Willis BP3D (FMA50454) + sangre en cisternas
- neuro-08 crisis focal → 3D cerebro (giros Z-Anatomy) con onda de actividad
- neuro-16 Guillain-Barré → BL Multiple Sclerosis / neurona (mielina)
- neuro-19 parálisis facial → BL CranialNerves/Trigeminal + cara real
- nefro-01, nefro-08, nefro-13, diab-10, endo-24 → BL Nephron Anatomy (riñón 3D: BP3D right kidney)
- nefro-05 neurona/agua → BL OsmoticFlow Hypotonic/Hypertonic + neurona
- resp-02 asma → BL Lungs NormalvsInflamedAirway; resp-04 → BL Emphysema; resp-11/resp-22 → BL PleuralEffusion/Pneumonia; resp-21 → BL Atelectasis/alvéolo
- hem-09 → BL Sickle Cell Anemia; hem-07/hem-10/hem-15/hem-22 → BL RedBloodCells/Platelets
- gastro-03 acalasia → 3D esófago+estómago Z-Anatomy; gastro-10 → BL Crohn's + 3D colon BP3D; gastro-13/gastro-17 → BL Gallstones/Gallbladder-Liver-Pancreas o 3D Z-Anatomy (hígado, vesícula, duodeno, páncreas); gastro-15 → BL Liver Cirrhosis; gastro-25 → BL Intussusception
- ob-13 → BL Placenta Previa + PlacentalAbruption; ob-18 atonía → BL Pregnancy/útero; ob-05 → BL Placenta; ob-20 → BL Placenta + glóbulos
- oftal-06/07/09/18 → 3D ojo Z-Anatomy (córnea, cristalino, iris, retina) o BL EyeAnatomy Sectional; oftal-10 → BL
- derma-01/11/13, infecto-04/20 → BL SkinAnatomy 01 / Epidermis / Melanoma
- infecto-23 zóster → BL Herpes Zoster Rash; infecto-06 → BL neurona/médula
- cirugia-04 obstrucción → 3D intestino BP3D; cirugia-06 → BL InguinalHernia; cirugia-12 → BL Hematoma Comparison
- diab-01 islote → BL PancreaticTissue; diab-15/diab-17 → BL Sodium-PotassiumPump; endo-06/endo-12/endo-15 → BL EndocrineSystem + 3D tiroides/suprarrenal Z-Anatomy
- ped-05 bronquiolitis → BL Bronchitis/Lungs; gin-13 → BL Pap Smear; ob-04 → mantener Doppler (gráfico)

Lista completa de videos actuales (para revisar uno a uno): `ls classes/media/animaciones/*/A*.mp4`.

## 5. Cómo se hace (comandos)

```bash
# Manim 2D (lotes por especialidad en classes/scripts/manim/lote1..7.py; estilo común estilo.py)
~/.venvs/manim/bin/python classes/scripts/manim/render.py lote7 Escena:clase/A1_nombre
classes/scripts/manim/frames.sh /tmp/x.png classes/media/animaciones/clase/*.mp4   # 3 cuadros por video para revisar

# Blender 3D con BodyParts3D (escenas en anatomia3d.py: resp14, bronquio, cadera, vertebra, apendice, hipofisis, parto)
python3 classes/scripts/blender/render3d.py <escena>          # render + título/rótulos (PIL) → MP4
classes/scripts/blender/preview3d.sh <escena>                 # 3 cuadros de prueba en /tmp/p3d_<escena>.png

# Z-Anatomy: exportar piezas a OBJ (guardado en el repo: classes/scripts/blender/zexport.py lee /tmp/zexport_list.txt;
# copiar primero: cp classes/scripts/blender/zexport_list.txt /tmp/ y editar la lista de regex)
# Blender -b ~/Documents/Archive/Apps/assets3d/zanatomy/Z-Anatomy/Startup.blend -P classes/scripts/blender/zexport.py
# Cargar en escena: ver zload() en classes/scripts/blender/z_parkinson.py (fábrica vacía + obj_import + material)
# NO renderizar dentro de Startup.blend (tiene freestyle/escenas que dejan todo blanco).

# Insertar diapositivas: python3 classes/scripts/insert_anim.py <archivo_slides.py> (formato: dict S como en el script; lógica: por clase, bloque
# {type:'image', layout:'sequence', kicker:'En movimiento', title, images:[{src:'animaciones/<clase>/<f>.mp4', label, credit}],
#  steps:[{note, say}]} antes de la diapositiva 'Así se ve' o del 'pathway'). say sin cifras ni símbolos (check_lesson).
node classes/scripts/check_lesson.cjs <clase>
node classes/scripts/build_swiss_player.cjs && node classes/scripts/export_narration.cjs
```

Revisión visual obligatoria: renderizar, mirar 3 cuadros (`frames.sh`) y corregir antes de insertar.
Errores típicos ya vistos: lado anatómico invertido (en vista anterior la derecha del paciente va a la
izquierda de la pantalla), rótulos que se salen o se tapan, título encima del modelo (hay franja oscura en render3d).

## 6. Siguiente orden sugerido
1. Terminar Parkinson 3D y reemplazarlo en neuro-11.
2. Re-bajar los 106 Blausen vacíos.
3. Crear en Manim una clase base `BlausenScene` (ImageMobject de fondo + coordenadas en fracción de la imagen,
   ver la imagen con una grilla para ubicar puntos) y rehacer la lista de la sección 4 por especialidad.
4. Seguir el PLAN_ANIMACIONES.md (★★★ que faltan: cirugia-01/10, derma-01, gin-06/16, ob-11, oftal-01/17,
   ped-06/13/22, resp-19/23, reuma-03/04/06/14/17, neuro-20) — casi todas 3D.
5. Commit + push a `main` el mismo día.

## 7. Progreso 2026-10-05 (sesión 2)
- Hecho con anatomía real: neuro-11 (3D Z-Anatomy, final), gastro-03 normal + acalasia (3D BP3D: esófago, estómago),
  nefro-08 A2 diuréticos, diab-10 eferente, resp-04 enfisema (Blausen limpio). Videos abstractos reemplazados y borrados.
- **Pipeline Blausen**: `classes/scripts/manim/blausen_clean.py` quita automáticamente los rótulos en inglés (texto y líneas
  negras → inpainting OpenCV, instalado en el venv de manim) y recorta. `BlausenScene` en `estilo.py`: `lamina(crop=..., width=...)`
  (admite varias láminas), `P(fx, fy, img)` = punto de la escena para una fracción de la imagen ORIGINAL, `path`, `flow`.
  Escenas en `lote8.py`. Para ubicar puntos: limpiar la imagen y dibujarle una grilla de fracciones (ver historia de lote8).
- `render3d.py`: los rótulos aceptan un 7.º elemento `(x, y)` → línea guía hasta la estructura.
- `insert_anim.py` y `zexport.py` reescritos (no estaban en el repo). `zexport.py -- --list <regex>` lista nombres de Z-Anatomy.
  Z-Anatomy NO tiene esófago como malla (usar BP3D FMA7131).
- Blausen: 104 PNG siguen vacíos. upload.wikimedia.org devuelve 429 a esta IP; urllib de Python falla por SSL → usar curl
  con pausas largas cuando se levante el bloqueo. Faltan, entre otros: Sickle Cell Anemia, Placenta Previa.
