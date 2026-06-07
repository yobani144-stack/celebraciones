let audio = null;
let boton = null;

/**
 * Activa y reproduce el audio de fondo automáticamente al abrir el sobre.
 */
export function encenderMusicaAlApertura() {
    audio = document.getElementById('audio-boda');
    boton = document.getElementById('btn-control-musica');

    if (!audio || !boton) return;

    // Hacemos aparecer el botón discreto con su transición
    boton.classList.add('mostrar');

    // Configuramos un volumen sutil y elegante (40%) para no asustar al invitado
    audio.volume = 0.4; 

    // Intentamos reproducir de forma nativa
    audio.play()
        .then(() => {
            boton.classList.add('sonando'); // Enciende la animación de las barras
        })
        .catch(error => {
            console.log("Interacción requerida o fallo al cargar el archivo de audio:", error);
        });
}

/**
 * Controla el ciclo de Play/Pausa del botón flotante cuando el usuario interactúa.
 */
export function inicializarControlMusica() {
    // Re-validamos los elementos por seguridad
    if (!boton) boton = document.getElementById('btn-control-musica');
    if (!audio) audio = document.getElementById('audio-boda');

    if (!boton || !audio) return;

    boton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            boton.classList.add('sonando');
        } else {
            audio.pause();
            boton.classList.remove('sonando'); // Congela las barritas en su lugar estático
        }
    });
}
