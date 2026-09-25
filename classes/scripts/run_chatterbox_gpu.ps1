# Runner para Chatterbox Multilingual TTS usando el entorno GPU dedicado (.venv_gpu) y la tarjeta GTX 1080
param(
    [Parameter(ValueFromRemainingArguments = $true)]
    [string[]]$ScriptArgs
)

$PSScriptRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$PythonExe = Join-Path $RepoRoot ".venv_gpu\Scripts\python.exe"
$TtsScript = Join-Path $PSScriptRoot "tts_chatterbox.py"

if (-not (Test-Path $PythonExe)) {
    Write-Error "No se encontro el entorno .venv_gpu en $PythonExe. Ejecute la instalacion primero."
    exit 1
}

Write-Host "Ejecutando Chatterbox TTS en NVIDIA GTX 1080 (CUDA)..." -ForegroundColor Cyan
& $PythonExe $TtsScript @ScriptArgs
