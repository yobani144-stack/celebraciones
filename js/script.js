document.addEventListener("DOMContentLoaded", () => {
    const btnAbrir = document.getElementById("btn-abrir");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const musica = document.getElementById("musica-boda");

    btnAbrir.addEventListener("click", () => {
        // 1. Desvanecer la pantalla de bienvenida
        introScreen.classList.add("intro-oculta");

        // 2. Mostrar el contenido principal con un ligero delay para sincronizar
        setTimeout(() => {
            mainContent.classList.remove("contenido-oculto");
            mainContent.classList.add("contenido-visible");
            
            // 3. Reactivar el scroll en el sitio web
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }, 400); // 400ms después de iniciar la animación de salida

        // 4. Reproducción de audio (Opcional)
        // Intentar reproducir la música de fondo
        if (musica) {
            musica.volume = 0.4; // Volumen sutil al 40%
            musica.play().catch(error => {
                console.log("El navegador bloqueó el audio automático:", error);
            });
        }
    });
});
