"""Renderiza escenas Manim a classes/media/animaciones/<clase>/<archivo>.mp4
    ~/.venvs/manim/bin/python classes/scripts/manim/render.py lote1 Resp01Normal:resp-01/A1_flujo_volumen_normal ...
"""
import subprocess, sys, os, shutil, glob
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', '..', 'media', 'animaciones')
MANIM = os.path.expanduser('~/.venvs/manim/bin/manim')
mod = sys.argv[1]
for job in sys.argv[2:]:
    scene, dest = job.split(':')
    tmp = f'/tmp/manim_media_{scene}'
    r = subprocess.run([MANIM, '-r', '1280,720', '--fps', '30', '--media_dir', tmp, '--disable_caching', '-v', 'WARNING',
                        os.path.join(HERE, mod + '.py'), scene], capture_output=True, text=True)
    vids = glob.glob(f'{tmp}/videos/**/{scene}.mp4', recursive=True)
    if r.returncode or not vids:
        print('FAIL', scene, r.stderr[-1500:]); continue
    out = os.path.join(OUT, dest + '.mp4'); os.makedirs(os.path.dirname(out), exist_ok=True)
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', vids[0], '-c:v', 'libx264', '-crf', '26', '-preset', 'slow',
                    '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', out])
    print('ok', dest, os.path.getsize(out) // 1024, 'KB')
    shutil.rmtree(tmp, ignore_errors=True)
