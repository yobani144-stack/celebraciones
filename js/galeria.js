/**
 * Inicializa el carrusel interactivo 3D.
 */
export function inicializarGaleria() {
    const track = document.querySelector('.carrusel-track');
    const items = document.querySelectorAll('.carrusel-item');
    const puntos = document.querySelectorAll('.punto');
    const btnPrev = document.getElementById('carrusel-prev');
    const btnNext = document.getElementById('carrusel-next');

    if (!track || items.length === 0) return;

    let currentIndex = 0;
    const totalItems = items.length;

    /**
     * Calcula y renderiza las posiciones 3D de cada imagen
     */
    const updateCarrusel = () => {
        items.forEach((item, index) => {
            // Calculamos la distancia matemática relativa al item activo
            let offset = index - currentIndex;

            // Lógica para que el carrusel sea infinito (bucle circular)
            if (offset < -Math.floor(totalItems / 2)) offset += totalItems;
            if (offset > Math.floor(totalItems / 2)) offset -= totalItems;

            const absOffset = Math.abs(offset);

            // VALORES MATEMÁTICOS DE NUESTRO ESPACIO 3D
            // Modifica estos números para separar más o menos las fotos de los lados
            const muelleX = offset * (window.innerWidth < 600 ? 110 : 160); 
            const muelleZ = absOffset * -120; // Empuja las fotos laterales hacia el fondo
            const rotacionY = offset * -35;   // Inclina las fotos laterales
            const opacidad = absOffset > 2 ? 0 : (absOffset === 2 ? 0.4 : (absOffset === 1 ? 0.7 : 1));
            const escala = absOffset === 0 ? 1 : 0.85;

            // Aplicamos los estilos 3D de forma nativa
            item.style.transform = `translateX(${muelleX}px) translateZ(${muelleZ}px) rotateY(${rotacionY}deg) scale(${escala})`;
            item.style.opacity = opacidad;
            item.style.filter = absOffset === 0 ? 'none' : 'blur(2px) grayscale(20%)';
            item.style.zIndex = 10 - absOffset;

            // Permitir clics solo en la foto del centro si quieres agregar una vista gigante (Lightbox)
            if (absOffset === 0) {
                item.style.pointerEvents = 'auto';
                item.classList.add('active');
            } else {
                item.style.pointerEvents = 'none';
                item.classList.remove('active');
            }
        });

        // Actualizamos los puntos indicadores
        puntos.forEach((punto, idx) => {
            punto.classList.toggle('active', idx === currentIndex);
        });
    };

    // Eventos de los botones de flechas
    btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarrusel();
    });

    btnNext.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarrusel();
    });

    // Eventos al hacer clic directo en los puntos inferiores
    puntos.forEach((punto, index) => {
        punto.addEventListener('click', () => {
            currentIndex = index;
            updateCarrusel();
        });
    });

    // COMPORTAMIENTO INTERACTIVO PARA CELULARES (Touch Swipe)
    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;

        if (Math.abs(diffX) > 50) { // Umbral de 50px de arrastre
            if (diffX > 0) {
                currentIndex = (currentIndex + 1) % totalItems; // Swipe izquierda -> Siguiente
            } else {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Swipe derecha -> Anterior
            }
            updateCarrusel();
        }
    });

    // Renderizado inicial del espacio tridimensional
    updateCarrusel();

    // Re-calcular si el usuario rota la pantalla del celular
    window.addEventListener('resize', updateCarrusel);
}
