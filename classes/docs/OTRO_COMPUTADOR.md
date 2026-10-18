# Renderizar videos de clases en otro computador (Mac)

Este computador hace los Módulos 1 y 2. El otro hace los **Módulos 3 y 4** (ped, ob, gin, sp): lista en
`classes/scripts/jsvideo/queue_otro_computador.txt`. Los videos NO usan Claude (voz Edge + Chrome sin interfaz).

## 1. Instalar (una vez, en Terminal)
```bash
xcode-select --install            # si pide herramientas de desarrollo
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"   # si no hay Homebrew
brew install node ffmpeg git
npm i -g playwright@1.63 msedge-tts
npx playwright@1.63 install chromium-headless-shell
```

## 2. Bajar el repo en la rama de trabajo
```bash
git clone -b clases-v3-videos git@github.com:dryanez/eunacom--publishing-hub.git ~/eunacom-videos
cd ~/eunacom-videos
```
(Si ya estaba clonado: `git fetch origin && git checkout clases-v3-videos && git pull`.)

## 3. Renderizar los Módulos 3 y 4
```bash
cd ~/eunacom-videos/classes/scripts/jsvideo
mkdir -p out && cp queue_otro_computador.txt out/queue.txt && : > out/queue.done
export NODE_PATH=$(npm root -g)
caffeinate -dims nohup bash queue_worker.sh > out/queue_worker.log 2>&1 &
```
- `caffeinate` evita que el Mac se duerma. Dejarlo enchufado y con internet.
- Ver avance: `bash estado_cola.sh` (en la misma carpeta). ~80 videos, ~8–10 h.
- Si se corta internet, la cola reintenta sola. Si se reinicia el Mac, repetir el último comando del paso 3 (sin el `cp`).

## 4. Devolver los videos
Los MP4 quedan en `out/<clase>/<clase>_clase.mp4`. Copiarlos a Google Drive (carpeta «Clases MP4»), por ejemplo:
```bash
mkdir -p "$HOME/Google Drive/Clases MP4" && cp out/*/*_clase.mp4 "$HOME/Google Drive/Clases MP4/"
```
(o arrastrarlos en Finder). Con Claude Code en ese Mac basta decir: «lee classes/docs/OTRO_COMPUTADOR.md y hazlo».
