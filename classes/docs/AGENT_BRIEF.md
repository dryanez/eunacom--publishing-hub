# Instrucciones para agentes · guiones docentes Módulo 1

You write hand-written teaching scripts ("guiones docentes") for EUNACOM video masterclasses, in Chilean Spanish.
Repo: /home/user/eunacom--publishing-hub. Your prompt names your book and your classes.

## Read first
1. `classes/docs/LESSON_STANDARD.md`: the standard. Follow it exactly: dynamic size (no slide minimum or maximum, never merge or drop content to fit a number), TTS rules, file format, and review-note categories.
2. `classes/lessons/gastro-01.cjs` and `classes/lessons/gastro-02.cjs`: the gold standard. Match their tone and pacing, keep on-screen text short, and write `say` so it explains and connects ideas instead of reading the slide.
3. One recent example with an inline pathway, for the file shape, e.g. `classes/lessons/gastro-17.cjs`.
4. Your book: `books/scripts/dataset_<book>.cjs`. Find each class's entry by `id` (Infectología: the dataset id is `inf-XX` while the lesson id is `infecto-XX`, same number). Use its tier, contentSections, table, vignette, explicacion, keyPoints and questions. For neighbouring class titles (to link ideas between classes) see `classes/curriculum/<book>_decks_data.json`.

## Real EUNACOM questions
- `node classes/scripts/class_questions.cjs <id>` lists the real, dated bank questions for the class's Perfil code.
- The class usually covers more topics than its code, so also run `node classes/scripts/class_questions.cjs --search "term1|term2|…"` with the class's key topics.
- Include every real question that teaches something different (typically 1–4, more for heavily tested topics). Copy the stem, options and correct answer as-is. Use the `recTag` as the slide title (e.g. "EUNACOM Julio 2013 · Pregunta 12") and say the exam and year in the voice, in words.
- Discard a question whose answer contradicts the book or current practice, and report it.
- Only if the real bank has nothing on the topic, use a book `questions` item labelled "Banco EUNACOM · Caso representativo" (kicker "Pregunta del banco EUNACOM"), with no date.
- **Never use the exam dates or numbers that the BOOK gives** (its `questions` recTags like "Reconstrucción EUNACOM Julio 2017", or its `reconstrucciones` list): they were found not to match the real bank. Only `recTag`s coming from class_questions.cjs are real.

## Output
- One file per class: `classes/lessons/<id>.cjs`, with `id`, `tier`, `slides` and an inline `pathway` (use the `N` helper at the top), plus a header comment naming the source.
- Validate: `node classes/scripts/check_lesson.cjs <id>` must show no ERROR. Fix any avisos unless there is a real reason not to.

## Rules
- Only create or edit your own `classes/lessons/<id>.cjs` files. Do NOT edit any other file (not REVISION_CONTENIDO.md, not the standard). Do NOT run build_swiss_player.cjs. Do NOT git commit or push.
- Never invent medical facts; figures, doses and GES cut-offs must match the book.
- Finish all your classes.

## Final report (short)
1. Per class: tier, slides, spoken words, number of real questions used (with their recTags), and checker result.
2. Review notes, only in these categories, with the class id:
   - A · possible error in the book (medically wrong)
   - B · the book contradicts itself (say which part you followed)
   - C · information missing in the book

   Rewording what the book says, or format decisions, are NOT review notes.

## Pictures and animations (new books: ORL, Traumatología, Urología, Psiquiatría — from 2026-10-05)
Classes now get real pictures while they are written. After a class passes the checker:
1. **Search the already-extracted books** (do not extract PDFs again):
   `python3 classes/scripts/buscar_figuras.py classes/media/_candidatas4 "" "term1|term2"` (Bailey & Love, Bates, Pathoma, CXR, ECG, Williams Gyn)
   and `classes/media/_candidatas2` (Harrison, Bates, Schwartz, Williams Obstetricia). Search in English. Then
   `python3 classes/scripts/hoja_contactos.py <same folder> /tmp/hoja_<id>.jpg <F numbers>` and **look at the sheet**:
   the caption can belong to another image on the same page. Only real clinical images (photos, X-ray/CT/US, otoscopy,
   histology, ECG) that show exactly what the class teaches; skip blurry (<500 px) or text-heavy figures.
2. Copy the chosen ones (1–4 per class) to `classes/media/biblioteca/<NN_esp>/<id>/` as `NN_item-en-espanol__<libro>_p<página>.jpg`
   (max 1600 px, JPEG quality 85). Folders: `17_otorrino`, `18_traumatologia`, `19_urologia`, `20_psiquiatria`.
   Libro tags: `bailey-love`, `bates`, `pathoma`, `cxr`, `ecg`, `harrison`, `williams-gyn`, `williams-ob`, `schwartz`.
3. Add ONE `type: 'image'` slide ("Así se ve") after the body section it illustrates, like `classes/lessons/reuma-03.cjs`
   (layout `gallery`, `images[{src, label, credit}]`, one `steps` item per image with `note` and a teaching `say`
   that says what to look at; `src` relative to `classes/media/`; `credit` like "Bailey & Love 27.ª ed., Fig. 46.16").
   Labels in Spanish, describing exactly what is visible. Re-run the checker.
4. Psiquiatría usually needs no pictures; don't force them.

In the final report add, per class:
- **Imágenes puestas:** file → what it shows.
- **Imágenes que faltan:** what picture would help and which book probably has it (e.g. "Manual CTO Otorrino", "AMIR Urología"
  — those manuals are not on this computer).
- **Animaciones propuestas:** 0–3 short animations that would make the key point click (what moves, why it matters for the exam).
  Must be possible with real anatomy (BodyParts3D/Z-Anatomy/Blausen) or clean diagrams — never abstract blobs for anatomy.
You may create image files only inside your own classes' folders.
