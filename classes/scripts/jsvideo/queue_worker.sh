#!/bin/bash
# Cola de clases completas: un solo trabajador renderiza, en orden, las clases de out/queue.txt (una por línea).
#   echo hem-01 >> classes/scripts/jsvideo/out/queue.txt   (agregar)   ·   nohup setsid queue_worker.sh &   (iniciar)
D=$(cd "$(dirname "$0")" && pwd); Q="$D/out/queue.txt"; DONE="$D/out/queue.done"; touch "$Q" "$DONE"
while pgrep -f "batch_classes.sh" >/dev/null; do sleep 60; done          # esperar lotes anteriores
while true; do
  c=$(grep -vxF -f "$DONE" "$Q" | head -1)
  if [ -z "$c" ]; then sleep 120; continue; fi
  "$D/batch_classes.sh" "$c"; echo "$c" >> "$DONE"
done
