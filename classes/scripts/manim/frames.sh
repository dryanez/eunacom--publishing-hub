#!/bin/bash
# frames.sh out.png video1.mp4 [video2.mp4 ...] -> mosaico con 3 cuadros (30 %, 65 %, último) por video
out=$1; shift; rows=()
for v in "$@"; do
  d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$v")
  n=$(basename "$v" .mp4)
  for f in 0.3 0.65 0.98; do t=$(python3 -c "print($d*$f)"); ffmpeg -y -loglevel error -ss $t -i "$v" -frames:v 1 -vf scale=480:-1 /tmp/_fr_${n}_$f.png; done
  ffmpeg -y -loglevel error -i /tmp/_fr_${n}_0.3.png -i /tmp/_fr_${n}_0.65.png -i /tmp/_fr_${n}_0.98.png -filter_complex hstack=3 /tmp/_row_$n.png
  rows+=(-i /tmp/_row_$n.png)
done
k=$(( ${#rows[@]} / 2 ))
if [ $k -gt 1 ]; then ffmpeg -y -loglevel error "${rows[@]}" -filter_complex vstack=$k "$out"; else cp /tmp/_row_$n.png "$out"; fi
