/**
 * Inicializa las animaciones de aparición fluida por secciones en la Corte de Honor.
 */
export function inicializarCorte() {
    const bloques = document.querySelectorAll('.animate-corte');

    if (bloques.length === 0) return;

    const opciones = {
        root: null,
        threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, opciones);

    bloques.forEach(bloque => observer.observe(bloque));
}
