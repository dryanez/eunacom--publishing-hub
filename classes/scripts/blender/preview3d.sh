#!/bin/bash
# preview3d.sh escena... -> /tmp/p3d_<escena>.png (3 cuadros: inicio, medio, final)
for s in "$@"; do
  rm -rf /tmp/p3d_$s; A3D_PREVIEW=1 /Applications/Blender.app/Contents/MacOS/Blender -b -P "$(dirname "$0")/anatomia3d.py" -- $s /tmp/p3d_$s 120 2>&1 | grep -E "Error|Traceback|SIN MALLA" | head -5
  ffmpeg -y -loglevel error -i /tmp/p3d_$s/f_0001.png -i /tmp/p3d_$s/f_0002.png -i /tmp/p3d_$s/f_0003.png -filter_complex "[0]scale=640:-1[a];[1]scale=640:-1[b];[2]scale=640:-1[c];[a][b][c]hstack=3" /tmp/p3d_$s.png 2>/dev/null && echo "ok $s"
done
