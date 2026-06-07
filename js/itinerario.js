/**
 * Inicializa la animación escalonada de aparición del itinerario.
 */
export function inicializarItinerario() {
    const elementos = document.querySelectorAll('.animate-itinerario');

    if (elementos.length === 0) return;

    const opciones = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, opciones);

    elementos.forEach(el => observer.observe(el));
}
