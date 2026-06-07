/**
 * Inicializa el efecto de aparición scroll reveal del flyer del diseñador.
 */
export function inicializarFooterDisenador() {
    const elementos = document.querySelectorAll('.animate-autor');

    if (elementos.length === 0) return;

    const opciones = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, opciones);

    elementos.forEach(el => observer.observe(el));
}
