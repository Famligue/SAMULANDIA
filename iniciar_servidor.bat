@echo off
title Servidor Web del Juego Godot
echo ======================================================
echo  Iniciando servidor local para el juego...
echo ======================================================
cd /d "%~dp0"
python servidor.py
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] No se pudo iniciar el servidor. Verifica que Python este instalado y agregado al PATH.
    echo El juego web necesita ejecutarse desde un servidor HTTP; abrir index.html directamente no funciona.
)
pause
