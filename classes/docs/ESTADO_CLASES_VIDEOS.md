# Estado: clases, fotos y videos (actualizado 19-oct-2026 ~01:50)

Si Claude se corta por límite de uso: **nada se pierde**. Todo lo que hacen los agentes queda escrito en disco
(classes/lessons/*.cjs, media/, books/). La cola de videos NO usa Claude y sigue sola.
Al volver: abrir esta sesión y decir «sigue» — o en una sesión nueva: «lee classes/docs/ESTADO_CLASES_VIDEOS.md y continúa».

## Hecho
- 20 especialidades: clases actualizadas con contenido nuevo del libro, fotos en contexto, animaciones (prompt: ~/fotos_tools/v3/sec/clases_prompt.txt).
- 26 clases nuevas creadas (prompt: ~/fotos_tools/v3/sec/clases_nuevas_prompt.txt).
- Reproductor Suizo recompilado: 431 clases (`node classes/scripts/build_swiss_player.cjs`).
- Nada en commit todavía (el usuario no lo ha pedido).

## En curso al cortar (retomar si no terminaron)
1. **Cardiología → 38 temas** (libro + clases al estándar de los otros 20). Agente de diseño hace estructura + muestra SCACEST y deja
   ~/fotos_tools/v3/sec/cardio_prompt.txt para 5 agentes (un bloque cada uno). Respaldo del cardio antiguo: books/scripts/_old_cardio/.
   Para retomar: ver si existe books/scripts/dataset_cardiologia_bloque_*.cjs y cardio_prompt.txt; si no, relanzar el paso 1.
2. **Fotos faltantes — TERMINADO (66 fotos nuevas)** (4 agentes: m1a endo/diab/nefro/hem/neuro · m1b resp/gastro/infecto/reuma · m2 cirugia/trauma/uro/orl/oftal/derma ·
   m3 ped/ob/gin/sp/psiq). Prompt: ~/fotos_tools/v3/sec/fotos_prompt.txt. Avance: filas marcadas ✅/❌ en
   classes/docs/auditoria_imagenes/FALTANTES_<esp>.md. Fotos para libros en books/data/atlas_add/fotos_<grupo>.json → falta FUSIONAR
   en atlas_fotos_verificadas.json y reconstruir los 21 libros (HACERLO cuando termine Cardiología, que también edita el atlas).
3. **Otro computador:** rama `clases-v3-videos` en GitHub; instrucciones en classes/docs/OTRO_COMPUTADOR.md (Módulos 3–4: ped, ob, gin, sp; quitados de la cola de este Mac).

## Cola de videos (corre sola)
- Ver estado: `bash classes/scripts/jsvideo/estado_cola.sh` · log: classes/scripts/jsvideo/out/batch.log
- Reiniciar si se cayó: `cd classes/scripts/jsvideo && (nohup bash queue_worker.sh > out/queue_worker.log 2>&1 &)` (sin sandbox: voz Edge por red)
- Videos listos: Escritorio › Clases_MP4/<esp>/ (accesos directos a out/<clase>/<clase>_clase.mp4).
- Voz de borrador Edge (Lorenzo). Voz final = clon del usuario en ElevenLabs (plan Scale ~$600 con Flash), después.
- Idea pendiente: repartir Módulos 3–4 a otro computador (requiere commit + push de rama nueva; el usuario no lo ha aprobado aún).

## Decisiones pendientes del usuario
- cirugia-13 quemaduras: ¿«agua corriente 10–20 min, sin hielo» (libro nuevo) en vez de «agua tibia»?
- psiq-02: ¿unificar litio y valproato con los rangos del libro nuevo?
- ped-05 / ped-10: ¿dejar 3 fotos de niños con torso descubierto (sin genitales)?
- Claves del banco posiblemente erróneas: ver classes/docs/REVISION_CONTENIDO.md («Posibles claves erróneas del banco»).
- Fotos en cuarentena (genitales de menores): ~/fotos_tools/cuarentena_fotos/ (no borradas).
