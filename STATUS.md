# Project status — read this first

> Last updated: 2026-10-03. Everything below is on `main`.

## Swiss classes (masterclass slides): 340 / 340 done

| Module | Book | Classes |
|---|---|---|
| 1 | Gastroenterología | 26 |
| 1 | Neumología | 24 |
| 1 | Nefrología | 22 |
| 1 | Diabetes y Dislipidemias | 24 |
| 1 | Endocrinología | 24 |
| 1 | Hematología | 24 |
| 1 | Infectología | 24 |
| 1 | Reumatología | 24 |
| 1 | Neurología y Geriatría | 24 |
| 2 | Cirugía General | 18 |
| 2 | Dermatología | 16 |
| 2 | Oftalmología | 18 |
| 3 | Ginecología | 16 |
| 3 | Obstetricia | 20 |
| 3 | Pediatría | 22 |
| 4 | Salud Pública | 14 |

- Lessons live in `classes/lessons/<id>.cjs`; narration scripts in `classes/narration/`.
- The 72 classes first written by Antigravity (Pediatría, Ginecología 05–16, Obstetricia, Cirugía) were
  rewritten from scratch to the standard ("tú" voice, on-screen text ≤ 10 words, real EUNACOM questions).
- Compiled player: `classes/decks/Reproductor_Suiza_Oficial.html` (341 classes incl. induction), each
  specialty in its book's accent color.

**Verify before assuming anything is missing:**

```bash
node classes/scripts/progress.cjs            # must print 340/340
node classes/scripts/build_swiss_player.cjs  # rebuilds the player, lists classes per book
```

## Not done yet

- **Cardiología** (21 classes) — excluded on purpose until the user asks for it.
- **Otorrino, Traumatología, Urología, Psiquiatría** — never started.
- Audio (TTS) and video renders for the full set.
- Images (photos, X-rays, ECG, fundus): none yet — plan in `classes/docs/PLAN_IMAGENES.md`.
- Human review of the B-notes in `classes/docs/REVISION_CONTENIDO.md`.

Detailed handoff for the next session: `classes/docs/HANDOFF_SIGUIENTE_SESION.md`.

## Working rule

Work happens on `claude/*` branches. **Merge finished work into `main` the same day** — on 2026-10-03
340 finished classes were sitting unmerged on a side branch and looked "missing" from `main`.
