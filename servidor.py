import http.server
import socketserver
import webbrowser
import os

DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class GodotHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Cabeceras requeridas por Godot 4 para SharedArrayBuffer y WebAssembly
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Cross-Origin-Embedder-Policy", "require-corp")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

if __name__ == "__main__":
    handler = GodotHTTPRequestHandler
    with socketserver.TCPServer(("127.0.0.1", 0), handler) as httpd:
        port = httpd.server_address[1]
        url = f"http://127.0.0.1:{port}"
        print("=" * 60)
        print(f" Servidor Web para tu Juego de Godot iniciado!")
        print(f" Abre en tu navegador: {url}")
        print(f" Presiona CTRL+C para detener el servidor")
        print("=" * 60)
        webbrowser.open(url)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor cerrado.")
