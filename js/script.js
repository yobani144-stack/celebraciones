document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const openBtn = document.getElementById('openBtn');

    openBtn.addEventListener('click', () => {
        // Ejecutamos la animación de CSS
        envelope.classList.add('envelope-open');

        // Esperamos 800ms a que termine la animación para cambiar de página
        setTimeout(() => {
            // Aquí pones el nombre de tu archivo con los detalles del evento
            window.location.href = 'invitacion.html'; 
        }, 800);
    });
});
