# Banco corregido para la app

Archivo: `books/data/real_questions_corregido_para_app.json`. Se regenera con `python3 books/scripts/exportar_banco_app.py` y siempre sale del banco vigente (`books/data/real_questions_by_code.json`).

## Qué trae

- **Mismo formato** que `real_questions_by_code.json` del repo de la app: `{ "código V3": [ {stem, options[{id,text}], correcta, explicacion, recTag, confidence, year, hasExpl, key, secondary}, … ] }`.
- **Ya corregido:**
  - las claves erróneas de confianza alta (CLAVE_ERRONEA alta),
  - las explicaciones ajenas o contradictorias,
  - las ligaduras rotas del PDF (2→ti, :→fi).
- **No trae las preguntas excluidas** (`audit.excluir`): texto irrecuperable, o falta de imagen todavía sin resolver.
- **No trae el bloque `audit`.** Las preguntas que el audit dejó dudosas traen en su lugar `"revisar": {estado, motivo, propuesta}`. Son las CLAVE_DISCUTIBLE, las CLAVE_ERRONEA de confianza media o baja, las MAL_VINCULADA y las explicaciones ajenas que no tienen reemplazo. Su clave **no** se cambió.
- **Imagen:** algunas preguntas traen `"imagen": {src, credit, nota}`. El `src` es relativo a `classes/media/` (por ejemplo `biblioteca/_preguntas_reales/…jpg`). Hay que copiar esos archivos a la app y mostrar la imagen junto al enunciado, con la nota «Imagen representativa» en letra chica.

## Cómo aplicarlo en la app

1. Respalda el banco actual de la app (`book/scripts/reconstruction_classifier/real_questions_by_code.json` o el que use la app).
2. Reemplázalo por `real_questions_corregido_para_app.json`, renombrado al nombre que espera la app.
3. Copia las imágenes, que se sacan del mismo archivo:
   ```
   python3 -c "import json;[print(q['imagen']['src']) for v in json.load(open('real_questions_corregido_para_app.json')).values() for q in v if q.get('imagen')]" \
     | rsync -a --files-from=- classes/media/ <app>/public/media/
   ```
4. En la app:
   - muestra `q.imagen` cuando exista;
   - opcional: oculta o marca las que traen `revisar`.
5. Si la app guarda el progreso por `key` o `recTag`, esos campos no cambiaron. Las preguntas excluidas simplemente desaparecen. Conviene que la app ignore el historial de las claves que ya no existen.

Detalle de cada corrección: `classes/docs/audit_banco/AUDIT_BANCO_COMPLETO.csv`. Propagación a clases y libros: `PROPAGACION.md`.
