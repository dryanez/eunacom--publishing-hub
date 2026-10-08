#!/bin/bash
# Renderiza clases completas en serie: classes/scripts/jsvideo/batch_classes.sh diab-01 diab-02 …   (log en out/batch.log)
D=$(cd "$(dirname "$0")" && pwd); export NODE_PATH=${NODE_PATH:-$(npm root -g)}
mkdir -p "$D/out"; LOG="$D/out/batch.log"
for c in "$@"; do
  if [ -f "$D/out/$c/${c}_clase.mp4" ]; then echo "$(date +%H:%M) $c ya estaba" >> "$LOG"; continue; fi
  echo "$(date +%H:%M) $c voz…" >> "$LOG"
  node "$D/build_class.cjs" "$c" > "$D/out/$c.build.log" 2>&1 || { echo "$(date +%H:%M) $c ERROR voz" >> "$LOG"; continue; }
  node "$D/render_class.cjs" "$c" --workers 3 > "$D/out/$c.render.log" 2>&1 || { echo "$(date +%H:%M) $c ERROR render" >> "$LOG"; continue; }
  echo "$(date +%H:%M) $c OK $(tail -1 "$D/out/$c.render.log" | sed 's/.*clase.mp4 //')" >> "$LOG"
  rm -rf "$D/out/$c/frames"                                   # los cuadros de las animaciones pesan; se regeneran solos
done
echo "$(date +%H:%M) FIN" >> "$LOG"
