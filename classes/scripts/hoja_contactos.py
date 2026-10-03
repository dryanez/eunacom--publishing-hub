"""
hoja_contactos.py
Arma una hoja de contactos (miniaturas + pie) para revisar figuras a ojo antes de elegirlas.

    python classes/scripts/hoja_contactos.py <carpeta_salida> hoja.jpg 382 2839 401 ...

Los números son los F de buscar_figuras.py (lee figs.json que ese script deja en la carpeta).
"""
import json, sys, textwrap
from PIL import Image, ImageDraw, ImageFont

out, dest, ids = sys.argv[1], sys.argv[2], [int(x.lstrip('F')) for x in sys.argv[3:]]
figs = json.load(open(out + '/figs.json', encoding='utf-8'))
W, H, CAP, cols = 300, 240, 30, 4
rows = (len(ids) + cols - 1) // cols
sheet = Image.new('RGB', (cols * W, rows * (H + CAP)), 'white')
d = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype('arial.ttf', 11)
except OSError:
    font = ImageFont.load_default()
for k, i in enumerate(ids):
    f = figs[i]; x, y = (k % cols) * W, (k // cols) * (H + CAP)
    im = Image.open(out + '/' + f['imgs'][0]).convert('RGB'); im.thumbnail((W - 8, H - 8)); sheet.paste(im, (x + 4, y + 4))
    for j, line in enumerate(textwrap.wrap(f'F{i} ' + f['cap'], 52)[:2]):
        d.text((x + 4, y + H + j * 12), line, fill='black', font=font)
sheet.save(dest, quality=82)
print(dest)
