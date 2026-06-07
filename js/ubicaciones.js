/**
 * Inicializa las animaciones de aparición fluida para las tarjetas de ubicación.
 */
export function inicializarUbicaciones() {
    const elementoAnimar = document.querySelector('.animate-scroll');

    if (!elementoAnimar) return;

    // Configuración del observador de pantalla
    const opciones = {
        root: null, // Usa el viewport del navegador
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase CSS que cambia la opacidad y posición
                entry.target.classList.add('visible');
                // Dejamos de observar una vez que ya apareció
                observer.unobserve(entry.target);
            }
        });
    }, opciones);

    observer.observe(elementoAnimar);
}
