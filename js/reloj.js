document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const envelopeSection = document.getElementById('envelope-section');
    const invitationContent = document.getElementById('invitation-content');
    const bgMusic = document.getElementById('bg-music');

    if (openBtn) {
        openBtn.addEventListener('click', () => {
            // 1. Iniciamos la música inmediatamente
            bgMusic.play().catch(err => console.log("Auto-play bloqueado:", err));

            // 2. Animación de salida del sobre
            envelopeSection.classList.add('fade-out');

            // 3. Traemos el contenido desde el otro archivo HTML
            fetch('contenido.html')
                .then(response => response.text())
                .then(html => {
                    // Metemos el HTML externo en nuestro contenedor
                    invitationContent.innerHTML = html;

                    // Ocultamos el sobre y mostramos el contenido inyectado
                    setTimeout(() => {
                        envelopeSection.classList.add('hidden');
                        invitationContent.classList.remove('hidden');
                        
                        // Activamos las funciones secundarias ya que los botones ya existen en pantalla
                        initMusicControl();
                        initCountdown();
                    }, 800);
                })
                .catch(error => console.error("Error al cargar la invitación:", error));
        });
    }

    // FUNCIÓN PARA EL BOTÓN DE PAUSA/PLAY
    function initMusicControl() {
        const musicBtn = document.getElementById('musicBtn');
        if (musicBtn) {
            musicBtn.addEventListener('click', () => {
                if (bgMusic.paused) {
                    bgMusic.play();
                    musicBtn.classList.remove('muted');
                } else {
                    bgMusic.pause();
                    musicBtn.classList.add('muted');
                }
            });
        }
    }

    // FUNCIÓN DEL RELOJ EN TIEMPO REAL
    function initCountdown() {
        const targetDate = new Date("May 20, 2026 20:00:00").getTime();
        
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference < 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Verificamos que los elementos existan antes de asignarles valor
            if(document.getElementById("days")) {
                document.getElementById("days").innerText = days < 10 ? "0" + days : days;
                document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
                document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
                document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
            }
        }, 1000);
    }
});
