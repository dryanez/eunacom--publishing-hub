# Mazo Anki AEE EUNACOM V3 · Gastroenterología (muestra)

Archivo: `AEE_EUNACOM_V3_Gastroenterologia.apkg` (imágenes incluidas). Es de uso personal.

## 1. Importar
1. Instala Anki (desktop 2.1.50 o más nuevo, AnkiMobile o AnkiDroid).
2. Ve a **Archivo → Importar…** y elige el `.apkg`. Si lo abres con doble clic, hace lo mismo.
3. Se crea esta jerarquía: `AEE EUNACOM V3 › 01 Medicina Interna › Gastroenterología › 01 1.1 … 26 6.4 …`, con un subdeck por tema.
4. Para el celular, sincroniza con AnkiWeb o importa el mismo archivo en el teléfono. Las tarjetas funcionan en modo oscuro.

**Actualizar:** importa la versión nueva encima de la anterior. Los tipos de nota tienen ID fijo y cada nota tiene un GUID estable (hash de `classId` + id de la tarjeta). Por eso Anki **actualiza** las notas existentes, no las duplica, y conservas tu historial de repaso. Si una tarjeta se borra del JSON, no se elimina sola de tu colección. Búscala con `tag:AEE_V3*` y bórrala a mano.
Las plantillas (CSS/JS del glosario) cambian sin tocar los campos, así que el tipo de nota también se actualiza: en Anki 23.10+ deja «Actualizar tipos de nota: si es más reciente» (valor por defecto).

## 2. Tipos de nota
| Tipo | Frente | Reverso |
|---|---|---|
| **AEE Cloze** | Un hecho con un hueco `{{c1::…}}` | Extra (el porqué), captura del material de origen, fuente, perfil V3, pregunta real y enlace a la clase |
| **AEE Imagen** | Foto + «¿Qué muestra y qué haces?» | Diagnóstico, clave visual, conducta, fuente y perfil |
| **AEE Occlusion** | Algoritmo del tema con un paso tapado (recuadro naranjo «?») + pista | El paso tapado, la explicación y el algoritmo completo con el paso marcado en rojo |

La captura que acompaña a cada cloze depende de dónde sale el hecho:
- **Tabla del libro:** imagen de la tabla.
- **Diapositiva de la clase:** cuadro del video en esa diapositiva.
- **Algoritmo:** el árbol completo.
- **Párrafo con foto:** la foto.

## 3. Tags y cómo usarlos (Explorar → barra lateral, o buscar)
| Tag | Para qué |
|---|---|
| `AEE_V3::01_Medicina_Interna::Gastroenterologia::gastro-NN_…` | Tema |
| `AEE_V3::Frecuencia::3_estrellas` · `2_estrellas` · `1_estrella` | Rendimiento según el n.º de preguntas reales de los códigos del tema. Tres estrellas = 14 o más; dos = 7 a 13; una = menos de 7 |
| `AEE_V3::Perfil::1.06.1.027` | Código del Perfil V3 |
| `AEE_V3::Nivel::Dx_Especifico` · `Tx_Completo` · `Seg_Completo` | Nivel exigido por el perfil |
| `AEE_V3::Tipo::Cifra` · `Farmaco` · `Imagen` · `Algoritmo` · `Trampa` · `GES` · `Concepto` | Tipo de dato |
| `AEE_V3::Pregunta_real::Enero2023_P65` | Preguntas reales EUNACOM vinculadas a los códigos del tema |
| `AEE_V3::Recurso::LibroGordo_Gastro_Q07` | Pregunta del *Libro Gordo Gastroenterología 90Q* (mismo código) |
| `AEE_V3::Repaso_Ultima_Hora` | Núcleo de alto rendimiento (~25 %) |
| `AEE_V3::Concepto::Esofago_de_Barrett` · `Helicobacter_pylori` · `Pancreatitis_aguda` … | Concepto o enfermedad que trata la tarjeta (estilo AnKing) |
| `AEE_V3::Farmaco::Inhibidor_de_la_bomba_de_protones` · `Ceftriaxona` … | Fármaco nombrado en la tarjeta |
| `AEE_V3::Signo::Ictericia` · `Triada_de_Charcot` · `Melena` … | Signo o síntoma |
| `AEE_V3::Examen::Endoscopia_digestiva_alta` · `Colonoscopia` · `Ecografia_abdominal` … | Examen o procedimiento |

Los tags de concepto (máx. 6 por nota) salen del texto de la tarjeta y del título de la sección del libro, con el vocabulario de `books/scripts/anki/vocab_gastro.txt` (sin tildes, espacios → `_`).

### Recetas
- **Solo los temas de tres estrellas:** crea un mazo filtrado (Herramientas → Crear mazo filtrado) con la búsqueda
  `"deck:AEE EUNACOM V3*" tag:AEE_V3::Frecuencia::3_estrellas`.
- **Repaso de última hora** (la semana del examen):
  `tag:AEE_V3::Repaso_Ultima_Hora`, con «Reprogramar según las respuestas» desactivado si no quieres alterar tus intervalos.
- **Desbloquear por pregunta real fallada** (estilo AnKing): deja el mazo suspendido. Cuando falles una pregunta real (por ejemplo, Enero 2023 P65), busca
  `tag:AEE_V3::Pregunta_real::Enero2023_P65`, selecciona todo y haz clic en **Desuspender** (Ctrl/Cmd+J).
  Lo mismo sirve para una pregunta del Libro Gordo: `tag:AEE_V3::Recurso::LibroGordo_Gastro_Q07`.
- **Solo cifras y fármacos:** `tag:AEE_V3::Tipo::Cifra or tag:AEE_V3::Tipo::Farmaco`.
- **Un código del perfil:** `tag:AEE_V3::Perfil::1.06.1.006`.
- **Todo lo de un concepto, cruzando temas:** `tag:AEE_V3::Concepto::Helicobacter_pylori` (úlcera, linfoma MALT, cáncer gástrico…).
- **Un fármaco en todo el mazo:** `tag:AEE_V3::Farmaco::Ceftriaxona`. **Todos los fármacos:** `tag:AEE_V3::Farmaco::*`.
- **Todos los exámenes de imagen/endoscopía:** `tag:AEE_V3::Examen::*`. **Un signo:** `tag:AEE_V3::Signo::Ictericia`.
- **Combinar:** `tag:AEE_V3::Concepto::Cirrosis_hepatica tag:AEE_V3::Frecuencia::3_estrellas`. En Explorar, la barra lateral muestra el árbol `AEE_V3 › Concepto / Farmaco / Signo / Examen`.

## 3 b. Glosario clicable y video de la clase (estilo AMBOSS)
- En el **reverso**, los términos del glosario aparecen con **subrayado punteado**. Tócalos (o haz clic) y se abre un panel abajo con la definición breve (sacada del libro), **📖 Libro p. X** (página del *Manual EUNACOM Gastroenterología* PDF), **▶ Ver aquí (m:ss)** y **Abrir en AEE (m:ss) ↗**. Se cierra con × o tocando fuera. No se subraya dentro del hueco del cloze ni en el frente.
- Cada tarjeta trae en «🎬 Clase» los mismos dos botones, con el minuto de la diapositiva de la que sale el dato:
  - **▶ Ver aquí** abre el reproductor AEE *dentro de la tarjeta* (iframe 16:10) en ese minuto.
  - **Abrir en AEE ↗** es un enlace normal: Anki escritorio, AnkiMobile y AnkiDroid lo abren en el navegador.
- URLs (una sola constante cada una, en `books/scripts/anki/libros.json`):
  - `_url_clase` = `https://www.eunacomapp.cl/mis-clases?subsystem=Gastroenterología&clase=<classId>&t=<seg>&utm_…`. La app abre hoy la lista de clases de Gastroenterología (`/mis-clases?subsystem=` existe en la app publicada). Los parámetros `clase` y `t` **todavía no los lee la app**; hay que confirmarlos con el equipo web.
  - `_embed_clase` = `http://localhost:8770/embed/embed.html?c=<classId>&t=<seg>` (**solo PRUEBA**). Para probar «Ver aquí», levanta el servidor con `node classes/scripts/jsvideo/embed/servidor.cjs 8770`. En producción será `https://eunacom-examen.cl/embed/clase/<id>?t=…` (por confirmar). Cambia la constante y corre `build_anki.py`.
- El glosario está en `books/data/anki/gastroenterologia/_glosario.json` (término, tipo, alias, def, página, clase, minuto, URL). Cada nota lleva oculto (dentro del campo Clase) solo los términos que aparecen en ella; no se agregó ningún campo, así el tipo de nota sigue igual y se actualiza sin duplicar.
- Para editar definiciones, cambia `def` en `_glosario.json` (se conserva al regenerar). Para agregar términos o sinónimos, edita `vocab_gastro.txt` (`tipo | término | alias; alias | clase casa opcional`). Página, clase y minuto los recalcula `conceptos.py` (lo llama `build_anki.py`).

## 4. Regenerar o editar
La fuente editable son los JSON por tema en `books/data/anki/<libro>/<classId>.json`. El `.apkg` se arma desde ahí.

```bash
# dependencias (una vez): pip del sistema falla en este Mac → uv
uv pip install --target ~/fotos_tools/pylib genanki      # Pillow, playwright (python), ffmpeg y node ya están

python3 books/scripts/anki/validate_cards.py gastroenterologia      # valida esquema + cifras vs. libro
python3 books/scripts/anki/conceptos.py gastroenterologia           # (re)arma _glosario.json (páginas del PDF, clase, minuto, URL)
python3 books/scripts/anki/build_anki.py gastroenterologia          # arma books/dist/Anki/AEE_EUNACOM_V3_Gastroenterologia.apkg
python3 books/scripts/anki/build_anki.py gastroenterologia --force-media   # rehace capturas
python3 books/scripts/anki/verify_apkg.py books/dist/Anki/AEE_EUNACOM_V3_Gastroenterologia.apkg --muestra 10 --png /tmp/muestra
```

`build_anki.py` hace cuatro pasos:
1. Corre `extract_sources.cjs`, que genera `_fuentes/fuentes.json` y un digest `.md` por tema con las cifras del libro, la clase, el algoritmo, las fotos y las preguntas reales.
2. Valida las tarjetas.
3. Genera las capturas en `_media/`, que funciona como caché: JPG de 900 px y ≤ 150 KB, con nombre `aee_<classId>_<tipo>_<n>.jpg`.
4. Escribe el `.apkg`.

Formato de una tarjeta (ver cualquier JSON):
```json
{"id": "c01", "modelo": "cloze", "tipo": "Cifra", "texto": "… {{c1::…}} …", "extra": "porqué",
 "origen": "libro:tabla | libro:sec:N | libro:puntos | libro:caso | clase:N | algoritmo | foto | pregunta_real",
 "imagen": "biblioteca/…jpg (opcional)", "fuente": "Libro §2", "repaso": true, "preguntaReal": ["EUNACOM Enero 2023 · Pregunta 65"]}
```
Reglas para los ids:
- **No cambies los `id`.** Son la identidad de la nota en Anki.
- **Para agregar una tarjeta,** usa un id nuevo.

**Otra especialidad:** agrega su bloque en `books/scripts/anki/libros.json` (dataset, pathways, ensayo 90Q, tags). Luego escribe `books/data/anki/<libro>/<classId>.json` usando los digests de `_fuentes/` y corre `build_anki.py <libro>`.
