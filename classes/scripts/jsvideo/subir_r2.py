"""Sube los videos de clase terminados a R2 (bucket eunacomvideos, carpeta Clases_V3/<esp>/<clase>.mp4),
verifica el tamaño en R2 y, solo entonces, borra la copia local para liberar disco.
Las credenciales se leen de un .env (R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET); no van al repo.
  PYTHONPATH=~/fotos_tools/pylib python3 classes/scripts/jsvideo/subir_r2.py [--env RUTA] [--keep gastro] [clase …]
Deja un registro en out/r2_subidos.txt (clase, tamaño, clave en R2)."""
import os, sys, glob, argparse
import boto3

ap = argparse.ArgumentParser()
ap.add_argument('clases', nargs='*')
ap.add_argument('--env', default=os.path.expanduser('~/Documents/Archive/Apps/sketchy/.env'))
ap.add_argument('--keep', default='', help='prefijos de especialidad que se suben pero NO se borran localmente (coma)')
ap.add_argument('--prefix', default='Clases_V3/')
a = ap.parse_args()

env = {}
for line in open(a.env):
    if '=' in line and not line.lstrip().startswith('#'):
        k, v = line.strip().split('=', 1); env[k] = v.strip().strip('"\'')
s3 = boto3.client('s3', endpoint_url=f"https://{env['R2_ACCOUNT_ID']}.r2.cloudflarestorage.com",
                  aws_access_key_id=env['R2_ACCESS_KEY_ID'], aws_secret_access_key=env['R2_SECRET_ACCESS_KEY'], region_name='auto')
bucket = env.get('R2_BUCKET', 'eunacomvideos')
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'out')
keep = tuple(p for p in a.keep.split(',') if p)
files = sorted(glob.glob(os.path.join(OUT, '*', '*_clase.mp4')))
if a.clases: files = [f for f in files if os.path.basename(os.path.dirname(f)) in a.clases]
log = open(os.path.join(OUT, 'r2_subidos.txt'), 'a')
tot = 0
for f in files:
    c = os.path.basename(os.path.dirname(f)); esp = c.rsplit('-', 1)[0]; key = f"{a.prefix}{esp}/{c}.mp4"
    size = os.path.getsize(f)
    s3.upload_file(f, bucket, key, ExtraArgs={'ContentType': 'video/mp4'})
    remote = s3.head_object(Bucket=bucket, Key=key)['ContentLength']
    if remote != size:
        print(f'{c}: tamaño distinto en R2 ({remote} vs {size}); NO se borra'); continue
    log.write(f'{c}\t{size}\t{bucket}/{key}\n'); log.flush()
    if not c.startswith(keep):
        os.remove(f); tot += size
    print(f'{c} → {key} ({size/1e6:.1f} MB){"" if c.startswith(keep) else " · local borrado"}', flush=True)
print(f'Liberados {tot/1e9:.2f} GB')
