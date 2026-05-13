window.onload = () => {
    // Esto asegura que si el navegador guardó el estado de scroll o animaciones,
    // la página regrese al inicio al recargar.
    window.scrollTo(0, 0);
    
    const openBtn = document.getElementById('openBtn');
    const envelopeSection = document.getElementById('envelope-section');
    const invitationContent = document.getElementById('invitation-content');

    if(openBtn) {
        openBtn.addEventListener('click', () => {
            envelopeSection.classList.add('fade-out');

            setTimeout(() => {
                envelopeSection.classList.add('hidden');
                invitationContent.classList.remove('hidden');
                // Opcional: Esto cambia la URL sin recargar para que el navegador 
                // sepa que "estamos dentro"
                window.location.hash = "abierto";
            }, 800);
        });
    }
};

// Si el usuario recarga y la URL tiene "#abierto", mostramos la invitación directo
if(window.location.hash === "#abierto") {
    document.getElementById('envelope-section').classList.add('hidden');
    document.getElementById('invitation-content').classList.remove('hidden');
}
