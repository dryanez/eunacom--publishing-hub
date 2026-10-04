"""Quita los rótulos en inglés (texto y líneas guía negras) de una ilustración Blausen y recorta.
    ~/.venvs/manim/bin/python classes/scripts/manim/blausen_clean.py "<archivo.png>" <salida.png> [x0,y0,x1,y1] [--erase x0,y0,x1,y1 ...]
Recorte y zonas a borrar en fracciones de la imagen (0-1). Las zonas --erase se rellenan con el fondo
(útil para títulos grandes); el resto del texto negro se detecta solo y se rellena por inpainting.
"""
import sys, os
import numpy as np, cv2

BL = os.path.expanduser('~/Documents/Archive/Apps/assets3d/blausen/img')


def clean(src, dst, crop=None, erase=()):
    im = cv2.imread(src if os.path.isabs(src) else os.path.join(BL, src), cv2.IMREAD_COLOR)
    h, w = im.shape[:2]
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV)
    v, s = hsv[..., 2].astype(int), hsv[..., 1].astype(int)
    ink = ((v < 95) & (s < 70)).astype(np.uint8) * 255                  # negro/gris oscuro poco saturado = rótulos
    # quedarse con trazos finos (texto y líneas), no con zonas oscuras grandes de la ilustración
    n, lab, st, _ = cv2.connectedComponentsWithStats(ink, 8)
    keep = np.zeros_like(ink)
    for i in range(1, n):
        x, y, ww, hh, area = st[i]
        fill = area / max(1, ww * hh)
        if area < 0.004 * w * h and (fill < 0.45 or max(ww, hh) < 0.03 * max(w, h)):
            keep[lab == i] = 255
    mask = cv2.dilate(keep, np.ones((5, 5), np.uint8), iterations=1)
    for e in erase:
        x0, y0, x1, y1 = e
        mask[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)] = 255
    out = cv2.inpaint(im, mask, 4, cv2.INPAINT_TELEA)
    if crop:
        x0, y0, x1, y1 = crop
        out = out[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)]
    cv2.imwrite(dst, out)
    return dst


if __name__ == '__main__':
    a = sys.argv[1:]
    erase = [tuple(map(float, a[i + 1].split(','))) for i, x in enumerate(a) if x == '--erase']
    pos = [x for i, x in enumerate(a) if x != '--erase' and (i == 0 or a[i - 1] != '--erase')]
    crop = tuple(map(float, pos[2].split(','))) if len(pos) > 2 else None
    print(clean(pos[0], pos[1], crop, erase))
