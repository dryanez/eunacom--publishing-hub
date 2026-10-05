"""Quita los rótulos en inglés (texto y líneas guía negras) de una ilustración Blausen y recorta.
    ~/.venvs/manim/bin/python classes/scripts/manim/blausen_clean.py "<archivo.png>" <salida.png> [x0,y0,x1,y1] [--erase x0,y0,x1,y1 ...]
Recorte y zonas a borrar en fracciones de la imagen (0-1). Las zonas --erase se rellenan con el fondo
(útil para títulos grandes); el resto del texto negro se detecta solo y se rellena por inpainting.
"""
import sys, os
import numpy as np, cv2

BL = os.path.expanduser('~/Documents/Archive/Apps/assets3d/blausen/img')


def clean(src, dst, crop=None, erase=(), desat=()):
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
        if e[0] == 'ring':                                  # ('ring', cx, cy, radio, grosor) en fracciones del ancho
            _, cx, cy, r, th = e
            band = np.zeros_like(mask)
            cv2.circle(band, (int(cx * w), int(cy * h)), int(r * w), 255, max(1, int(th * w)))
            dark = (v < 120).astype(np.uint8) * 255                 # solo el trazo oscuro, no lo que queda debajo
            mask |= cv2.dilate(band & dark, np.ones((5, 5), np.uint8), iterations=1)
            continue
        if e[0] == 'dark':                                  # ('dark', x0, y0, x1, y1[, umbral]): solo píxeles oscuros de la caja
            _, x0, y0, x1, y1 = e[:5]; thr = e[5] if len(e) > 5 else 120
            sub = (v[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)] < thr).astype(np.uint8) * 255
            sub = cv2.dilate(sub, np.ones((5, 5), np.uint8), iterations=1)
            mask[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)] |= sub
            continue
        x0, y0, x1, y1 = e
        mask[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)] = 255
    out = cv2.inpaint(im, mask, 4, cv2.INPAINT_TELEA)
    for x0, y0, x1, y1 in desat:                       # quitar resaltados rojos dibujados (inflamación) en una zona
        ys, xs = slice(int(y0 * h), int(y1 * h)), slice(int(x0 * w), int(x1 * w))
        hs = cv2.cvtColor(out[ys, xs], cv2.COLOR_BGR2HSV).astype(np.float32)
        red = ((hs[..., 0] < 12) | (hs[..., 0] > 168)) & (hs[..., 1] > 90)
        soft = cv2.GaussianBlur(red.astype(np.float32), (0, 0), 6)
        hs[..., 1] *= 1 - 0.75 * soft
        hs[..., 2] = np.minimum(255, hs[..., 2] + 40 * soft)
        out[ys, xs] = cv2.cvtColor(hs.astype(np.uint8), cv2.COLOR_HSV2BGR)
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
