#!/bin/bash
# Parcha un video de clase ya renderizado, sin rehacerlo entero:
#   1) renderiza solo los tramos de fotos ("Así se ve") que salieron en negro y los pega encima,
#   2) tapa la línea de créditos de los clips de animación,
#   3) corta los casos y preguntas sobrantes (queda 1 caso clínico + 1 pregunta real EUNACOM).
#   classes/scripts/jsvideo/patch_class.sh <clase>      (el original queda como <clase>_clase_orig.mp4)
set -e
D=$(cd "$(dirname "$0")" && pwd); id=$1; O="$D/out/$id"; V="$O/${id}_clase.mp4"
export NODE_PATH=${NODE_PATH:-$(npm root -g)}
[ -f "$O/${id}_clase_orig.mp4" ] || cp "$V" "$O/${id}_clase_orig.mp4"
J=$(node "$D/seg_info.cjs" "$id")
IN=(-i "$O/${id}_clase_orig.mp4"); FV="[0:v]"; FILT=""; n=0
# 1) fotos
for r in $(echo "$J" | python3 -c "import json,sys;[print(f'{a:.3f}:{b:.3f}') for a,b in json.load(sys.stdin)['photos']]"); do
  a=${r%:*}; b=${r#*:}
  node "$D/render_class.cjs" "$id" --from "$a" --to "$b" --workers 2 >/dev/null
  p=$(ls -t "$O/${id}_clase_"[0-9]*-*.mp4 | head -1); mv "$p" "$O/patch_$n.mp4"
  n=$((n+1)); IN+=(-itsoffset "$a" -i "$O/patch_$((n-1)).mp4")
  FILT+="${FV}[$n:v]overlay=eof_action=pass:enable='between(t,$a,$b)'[v$n];"; FV="[v$n]"
done
# 2) créditos de los clips
BOX=$(echo "$J" | python3 -c "import json,sys;r=json.load(sys.stdin)['clips'];print('+'.join(f'between(t,{a:.3f},{b:.3f})' for a,b in r) or '0')")
FILT+="${FV}drawbox=x=700:y=694:w=580:h=26:color=0x0E1116:t=fill:enable='$BOX'[vb];"
# 3) cortes
CUT=$(echo "$J" | python3 -c "import json,sys;r=json.load(sys.stdin)['cut'];print('+'.join(f'between(t,{a:.3f},{b:.3f})' for a,b in r) or '0')")
FILT+="[vb]select='not($CUT)',setpts=N/FRAME_RATE/TB[vo];[0:a]aselect='not($CUT)',asetpts=N/SR/TB[ao]"
ffmpeg -loglevel error -y "${IN[@]}" -filter_complex "$FILT" -map "[vo]" -map "[ao]" \
  -c:v libx264 -crf 23 -preset medium -pix_fmt yuv420p -c:a aac -b:a 128k -movflags +faststart "$V"
rm -f "$O"/patch_*.mp4
printf '%s parchado: %s fotos, %s s cortados → %s\n' "$id" "$n" \
  "$(echo "$J" | python3 -c "import json,sys;print(round(sum(b-a for a,b in json.load(sys.stdin)['cut'])))")" \
  "$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$V" | cut -d. -f1) s"
