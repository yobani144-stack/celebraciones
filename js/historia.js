/**
 * Inicializa el comportamiento de revelado progresivo de la línea de tiempo.
 */
export function inicializarHistoria() {
    const elementos = document.querySelectorAll('.animate-historia');

    if (elementos.length === 0) return;

    const opciones = {
        root: null,
        threshold: 0.15 // Se activa cuando asoma el 15% del contenedor
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animamos solo una vez
            }
        });
    }, opciones);

    elementos.forEach(el => observer.observe(el));
}
