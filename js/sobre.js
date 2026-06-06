/**
 * Inicializa el comportamiento interactivo del sobre de bodas.
 * Gestiona las transiciones CSS y avisa al sistema central cuando termina.
 * @param {Function} onCompletado - Callback ejecutado al finalizar la animación de apertura.
 */
export function inicializarSobre(onCompletado) {
    const sello = document.getElementById('sello-interactivo');
    const sobreObjeto = document.querySelector('.sobre-objeto');
    const wrapperSobre = document.getElementById('wrapper-sobre');

    if (!sello || !sobreObjeto || !wrapperSobre) return;

    sello.addEventListener('click', () => {
        // 1. Iniciamos animación en el sobre (solapa se abre, tarjeta sube, sello desaparece)
        sobreObjeto.classList.add('animar-apertura');

        // 2. Esperamos a que la tarjeta termine de subir para desvanecer todo el sobre
        setTimeout(() => {
            wrapperSobre.classList.add('desvanecer-todo');
            
            // 3. Cuando el desvanecimiento de pantalla termina, liberamos la app principal
            setTimeout(() => {
                if (typeof onCompletado === 'function') {
                    onCompletado();
                }
            }, 800); // Sincronizado con el transition opacity de .sobre-wrapper (0.8s)
            
        }, 1600); // Tiempo suficiente para apreciar la apertura física en 3D
    });
}
