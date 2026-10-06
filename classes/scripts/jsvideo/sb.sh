#!/bin/bash
# Storyboard: cuadros sueltos de una escena en una sola hoja (2 columnas).
#   classes/scripts/jsvideo/sb.sh "<escena>[?q]" salida.png t1 t2 t3 …
D=$(cd "$(dirname "$0")" && pwd); S="$1"; O="$2"; shift 2
export NODE_PATH=${NODE_PATH:-$(npm root -g)}
T=$(mktemp -d); node "$D/render.cjs" "$S" --frames "$T" "$@" || exit 1
python3 - "$T" "$O" <<'P'
import sys, glob
from PIL import Image
fs = sorted(glob.glob(sys.argv[1] + '/*.png')); n = len(fs); rows = (n + 1) // 2
sh = Image.new('RGB', (1290, rows * 364), 'white')
for i, f in enumerate(fs): sh.paste(Image.open(f).convert('RGB').resize((640, 360)), ((i % 2) * 648, (i // 2) * 364))
sh.save(sys.argv[2])
P
rm -rf "$T"
