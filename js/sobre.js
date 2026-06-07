/**
 * Inicializa el comportamiento interactivo del sobre de bodas y crea una atmósfera mágica.
 * @param {Function} onCompletado - Callback ejecutado al finalizar la animación de apertura.
 */
export function inicializarSobre(onCompletado) {
    const sello = document.getElementById('sello-interactivo');
    const sobreObjeto = document.querySelector('.sobre-objeto');
    const wrapperSobre = document.getElementById('wrapper-sobre');

    if (!sello || !sobreObjeto || !wrapperSobre) return;

    // --- GENERADOR DE DESTELLOS DE ORO FLOTANTES ---
    const cantidadParticulas = window.innerWidth < 600 ? 20 : 40; // Menos partículas en móvil para cuidar rendimiento
    
    for (let i = 0; i < cantidadParticulas; i++) {
        const particula = document.createElement('div');
        particula.classList.add('particula-oro');
        
        // Matemáticas aleatorias para que se vean orgánicas y naturales
        const tamaño = Math.random() * 5 + 2; // Tamaños entre 2px y 7px
        const posicionX = Math.random() * 100; // Distribuidas por todo el ancho de la pantalla (0% a 100%)
        const duracion = Math.random() * 8 + 6; // Tardan entre 6 y 14 segundos en subir
        const retraso = Math.random() * 8; // Retrasos escalonados para que no salgan todas al mismo tiempo

        particula.style.width = `${tamaño}px`;
        particula.style.height = `${tamaño}px`;
        particula.style.left = `${posicionX}%`;
        particula.style.animationDuration = `${duracion}s`;
        particula.style.animationDelay = `${retraso}s`;

        wrapperSobre.appendChild(particula);
    }

    // --- ACCIÓN DEL CLIC EN EL SELLO ---
    sello.addEventListener('click', () => {
        // Abrimos el sobre físicamente
        sobreObjeto.classList.add('animar-apertura');

        // Esperamos el clímax visual para desvanecer la escena entera
        setTimeout(() => {
            wrapperSobre.classList.add('desvanecer-todo');
            
            setTimeout(() => {
                if (typeof onCompletado === 'function') {
                    onCompletado();
                }
            }, 800); 
            
        }, 1600); 
    });
}
