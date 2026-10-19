#!/usr/bin/env bash
# Copia las reconstrucciones corregidas (books/data/app_reconstrucciones) a las carpetas de la app,
# con respaldo previo de lo que se sobrescribe. NO se ejecuta automáticamente.
#   NEW=~/Desktop/NEWeunacom bash books/scripts/aplicar_a_app.sh [--dry-run]
# Las preguntas con "excluir": true no deberían mostrarse; las imágenes quedan en <carpeta>/img/.
set -euo pipefail
REPO="$(cd "$(dirname "$0")/../.." && pwd)"
SRC="$REPO/books/data/app_reconstrucciones"
NEW="${NEW:-$HOME/Desktop/NEWeunacom}"
DESTS=(
  "$NEW/eunacom-app-v2/public/data/reconstrucciones"
  "$NEW/eunacom-app-v2/ios/App/App/public/data/reconstrucciones"
  "$NEW/eunacom-mobile/public/data/reconstrucciones"
)
STAMP="$(date +%Y%m%d-%H%M%S)"
DRY=0; [ "${1:-}" = "--dry-run" ] && DRY=1
run() { if [ $DRY = 1 ]; then echo "[dry-run] $*"; else "$@"; fi; }

n=$(ls "$SRC"/eunacom-*.json 2>/dev/null | wc -l | tr -d ' ')
[ "$n" -ge 16 ] || { echo "Faltan archivos en $SRC (hay $n)"; exit 1; }
for f in "$SRC"/eunacom-*.json "$SRC/topic_index.json"; do python3 -c "import json,sys; json.load(open(sys.argv[1]))" "$f"; done

for D in "${DESTS[@]}"; do
  if [ ! -d "$D" ]; then echo "(omito, no existe) $D"; continue; fi
  B="$D/../reconstrucciones_respaldo_$STAMP"
  echo "== $D (respaldo: $B)"
  run mkdir -p "$B"
  run cp -p "$D"/eunacom-*.json "$D/topic_index.json" "$B"/
  [ -d "$D/img" ] && run cp -pR "$D/img" "$B/img" || true
  run cp -p "$SRC"/eunacom-*.json "$SRC/topic_index.json" "$D"/
  if [ -d "$SRC/img" ]; then run mkdir -p "$D/img"; run cp -p "$SRC"/img/* "$D/img/"; fi
done
echo "Listo. Respaldos: reconstrucciones_respaldo_$STAMP junto a cada carpeta."
