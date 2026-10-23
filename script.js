// ========================================================
// MANEJO DE LA PANTALLA Y CONTROL DEL JUEGO GODOT
// ========================================================

const gameContainer = document.getElementById('game-container');
const godotFrame = document.getElementById('godot-frame');
const startOverlay = document.getElementById('start-overlay');

// Iniciar el juego al presionar el botón de la máquina arcade
function iniciarJuego() {
  if (godotFrame) {
    godotFrame.src = 'juego/Game.html';
  }

  if (startOverlay) {
    startOverlay.style.display = 'none';
  }

  console.log('Iniciando Samulandia.');
}

// Activar o desactivar Pantalla Completa
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    if (gameContainer.requestFullscreen) {
      gameContainer.requestFullscreen();
    } else if (gameContainer.webkitRequestFullscreen) {
      gameContainer.webkitRequestFullscreen();
    } else if (gameContainer.msRequestFullscreen) {
      gameContainer.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Recargar el iframe del juego
function recargarJuego() {
  if (godotFrame) {
    if (!godotFrame.src || godotFrame.getAttribute('src') === '') {
      iniciarJuego();
    } else {
      godotFrame.src = godotFrame.src;
    }
  }
}

// Escuchar cambios de pantalla completa para ajustar el texto del botón
document.addEventListener('fullscreenchange', () => {
  const btnFullscreen = document.getElementById('btn-fullscreen');
  if (btnFullscreen) {
    if (document.fullscreenElement) {
      btnFullscreen.innerHTML = 'SALIR PANTALLA';
    } else {
      btnFullscreen.innerHTML = 'PANTALLA COMPLETA';
    }
  }
});
