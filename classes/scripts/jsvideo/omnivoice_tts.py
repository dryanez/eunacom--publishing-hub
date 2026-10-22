# Voz clonada con OmniVoice (el motor de VoiceStudio), local en el Mac (Apple Silicon / MPS).
#   Clonar una vez:  ~/.venvs/omnivoice/bin/python omnivoice_tts.py clonar <grabación.wav|m4a> <voz.pt> [texto de la grabación]
#   Narrar:          ~/.venvs/omnivoice/bin/python omnivoice_tts.py narrar <voz.pt> <lista.json>
#   lista.json = [{"say": "...", "out": ".../x.mp3"}, ...]; build_class.cjs --voice omni:<voz.pt> la arma y llama a esto.
import json, os, subprocess, sys, tempfile, time
import soundfile as sf, torch
from omnivoice import OmniVoice, VoiceClonePrompt

def modelo():
    return OmniVoice.from_pretrained('k2-fsa/OmniVoice', device_map='mps' if torch.backends.mps.is_available() else 'cpu', dtype=torch.float16)

def a_mp3(audio, out):
    wav = tempfile.mktemp(suffix='.wav'); sf.write(wav, audio, 24000)
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', wav, '-ac', '1', '-b:a', '128k', out], check=True); os.remove(wav)

cmd = sys.argv[1]
if cmd == 'clonar':
    src, pt = sys.argv[2], sys.argv[3]; txt = sys.argv[4] if len(sys.argv) > 4 else None
    # OmniVoice rinde mejor con 3–10 s: se usan los primeros 10 s de la grabación, en mono a 24 kHz
    ref = tempfile.mktemp(suffix='.wav')
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', src, '-t', '10', '-ac', '1', '-ar', '24000', ref], check=True)
    m = modelo(); p = m.create_voice_clone_prompt(ref_audio=ref, ref_text=txt) if txt else m.create_voice_clone_prompt(ref_audio=ref)
    p.save(pt); print('voz guardada en', pt)
elif cmd == 'narrar':
    p = VoiceClonePrompt.load(sys.argv[2]); items = json.load(open(sys.argv[3])); m = modelo(); t0 = time.time()
    for i, it in enumerate(items):
        if os.path.exists(it['out']) and os.path.getsize(it['out']) > 1000: continue
        a_mp3(m.generate(text=it['say'], voice_clone_prompt=p)[0], it['out'])
        print(f'\rvoz {i + 1}/{len(items)} · {time.time() - t0:.0f} s', end='', flush=True)
    print()
