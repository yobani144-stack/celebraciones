document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const envelopeSection = document.getElementById('envelope-section');
    const invitationContent = document.getElementById('invitation-content');

    openBtn.addEventListener('click', () => {
        // 1. Aplicamos animación de salida al sobre
        envelopeSection.classList.add('fade-out');

        // 2. Esperamos a que termine la animación
        setTimeout(() => {
            // 3. Eliminamos el sobre del flujo de la página
            envelopeSection.classList.add('hidden');
            
            // 4. Mostramos el contenido de la invitación
            invitationContent.classList.remove('hidden');
        }, 800); // Tiempo igual al de la transición en CSS
    });
});
