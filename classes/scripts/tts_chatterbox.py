"""
tts_chatterbox.py
Sintetiza la narración exportada (classes/narration/<id>.json) con Chatterbox Multilingual
clonando una voz de referencia. Pensado para correr en una GPU arrendada (RTX 4090 o similar).

Instalación en la máquina GPU:
    pip install chatterbox-tts
Uso:
    python classes/scripts/tts_chatterbox.py --ref voz_referencia.wav --voice mi_voz            # todas
    python classes/scripts/tts_chatterbox.py --ref voz.wav --voice mi_voz gastro-01 gastro-02  # puntuales
    python classes/scripts/tts_chatterbox.py ... --shard 0/4   # reparte clases entre 4 GPUs (esta es la 0)

Salida: classes/dist/audio/<id>/<voice>/sXX_gYY.wav (lo que lee render_lesson_video.cjs --voice <voice>).
Retoma donde quedó: salta los segmentos que ya existen.
"""

import argparse
import json
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
NARRATION = ROOT / "classes" / "narration"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("ids", nargs="*", help="clases a sintetizar (por defecto, todas las de manifest.json)")
    ap.add_argument("--ref", required=True, help="audio de referencia de la voz a clonar (10–30 s, limpio)")
    ap.add_argument("--voice", required=True, help="nombre de la carpeta de voz de salida")
    ap.add_argument("--shard", default="0/1", help="i/n: procesa solo la parte i de n (para varias GPUs)")
    ap.add_argument("--exaggeration", type=float, default=0.5)
    ap.add_argument("--cfg", type=float, default=0.5)
    args = ap.parse_args()

    import torch
    import torchaudio as ta
    import perth
    if getattr(perth, "PerthImplicitWatermarker", None) is None:
        perth.PerthImplicitWatermarker = perth.DummyWatermarker
    from chatterbox.mtl_tts import ChatterboxMultilingualTTS

    ids = args.ids or [m["id"] for m in json.loads((NARRATION / "manifest.json").read_text())]
    i, n = map(int, args.shard.split("/"))
    ids = [x for k, x in enumerate(sorted(ids)) if k % n == i]

    device = "cuda" if torch.cuda.is_available() else "cpu"
    model = ChatterboxMultilingualTTS.from_pretrained(device=device)
    print(f"{len(ids)} clases · dispositivo {device}", flush=True)

    t0, audio_s = time.time(), 0.0
    for cid in ids:
        data = json.loads((NARRATION / f"{cid}.json").read_text())
        out = ROOT / "classes" / "dist" / "audio" / cid / args.voice
        out.mkdir(parents=True, exist_ok=True)
        for seg in data["segments"]:
            f = out / f"{seg['file']}.wav"
            if f.exists() and f.stat().st_size > 0:
                continue
            wav = model.generate(seg["text"], language_id="es", audio_prompt_path=args.ref,
                                 exaggeration=args.exaggeration, cfg_weight=args.cfg)
            ta.save(str(f), wav, model.sr)
            audio_s += wav.shape[-1] / model.sr
        el = time.time() - t0
        print(f"✓ {cid}  · audio acumulado {audio_s / 60:.1f} min · {el / 60:.1f} min de GPU"
              + (f" · velocidad {audio_s / el:.2f}× tiempo real" if el else ""), flush=True)


if __name__ == "__main__":
    sys.exit(main())
