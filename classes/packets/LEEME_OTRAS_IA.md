# Cómo escribir clases con ChatGPT o Gemini (en paralelo a Claude)

**Reparto para no duplicar trabajo:**
- **ChatGPT → Reumatología** (reuma-01 … reuma-24)
- **Gemini → Neurología y Geriatría** (neuro-01 … neuro-24)
- **Claude → todo lo demás** (Endocrinología, Hematología, Infectología y la revisión de Gastro)

## Archivos (en GitHub, rama `claude/loving-ramanujan-0cwrvg`, carpeta `classes/packets/`)
- `00_COMUN.md`: reglas, estándar y dos clases modelo. Se sube **una vez por conversación**.
- `reuma-01.md`, `neuro-01.md`, …: el contenido del libro y las preguntas reales de **una** clase.

## Paso a paso (una clase)
1. Abre una conversación nueva en ChatGPT o Gemini (idealmente el modelo más potente que tengas).
2. Sube `00_COMUN.md` y el archivo de la clase, por ejemplo `reuma-01.md`.
3. Pega este mensaje:

   > Lee completo 00_COMUN.md y luego reuma-01.md. Escribe el archivo classes/lessons/reuma-01.cjs siguiendo exactamente
   > las reglas y el estilo de las clases modelo. Entrega solo el bloque de código completo, con el comentario INFORME al final.

4. Copia el bloque de código que te entrega.
5. Guárdalo con **una** de estas dos opciones:
   - **En GitHub:** abre la rama `claude/loving-ramanujan-0cwrvg`, entra a `classes/lessons/`, usa *Add file → Create new file*, ponle de nombre `reuma-01.cjs`, pega el código y haz *Commit*.
   - **O pásaselo a Claude** en esta sesión: "aquí está reuma-01 de ChatGPT", y pega el código.
6. En la **misma** conversación puedes seguir con la próxima clase: sube solo `reuma-02.md` y repite el mensaje cambiando el número.
   Si la conversación se pone lenta o empieza a olvidar las reglas, abre una nueva y vuelve a subir `00_COMUN.md`.

## Qué hace Claude con esas clases
- Las valida con `check_lesson.cjs`. Si una tiene errores de formato, Claude las corrige.
- Revisa que las preguntas reales y las cifras coincidan con el libro.
- Agrega las notas del INFORME a `classes/docs/REVISION_CONTENIDO.md`.
- Las compila en el reproductor.

## Rehacer los paquetes (si cambia el estándar)
```bash
node classes/scripts/make_packets.cjs reumatologia neurologia
```
