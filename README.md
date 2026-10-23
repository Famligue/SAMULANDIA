# Samulandia

Samulandia es un videojuego arcade ecológico presentado en una página web. Acompaña a Samu en su misión de limpiar el bosque y ayudar a la Gran Planta.

## Cómo iniciar el juego en Windows

1. Descarga o copia la carpeta completa del proyecto.
2. Comprueba que Python esté instalado.
3. Haz doble clic en `iniciar_servidor.bat`.
4. Se abrirá el navegador con la página del juego. Pulsa **INICIAR JUEGO** para jugar.
5. Para detener el servidor, vuelve a la ventana negra y presiona `Ctrl+C`.

No abras `index.html` directamente desde el explorador de archivos: el juego de Godot necesita ejecutarse desde un servidor web local.

### Iniciar desde una terminal

También puedes abrir una terminal en la carpeta del proyecto y ejecutar:

```bash
python servidor.py
```

El servidor mostrará la dirección local y abrirá la página en el navegador. Si `python` no se reconoce, instala Python y asegúrate de agregarlo al `PATH`.

## Controles

- **Mover a Samu:** `W`, `A`, `S`, `D` o las flechas del teclado.
- **Atacar:** `K` o `Z`.
- Usa los botones de la página para reiniciar o activar la pantalla completa.

## Archivos principales

- `index.html`: página principal del proyecto.
- `styles.css`: estilos y diseño arcade.
- `script.js`: controles para iniciar y reiniciar el juego.
- `servidor.py`: servidor local necesario para ejecutar la versión web.
- `iniciar_servidor.bat`: acceso rápido para iniciar el servidor en Windows.
- `juego/`: archivos exportados de Godot que necesita el navegador.
