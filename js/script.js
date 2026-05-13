document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const container = document.getElementById('mainContainer');

    openBtn.addEventListener('click', () => {
        // Añadir la clase de animación
        container.classList.add('open-animation');

        // Redirigir tras la animación (1 segundo después)
        setTimeout(() => {
            window.location.href = 'invitacion.html';
        }, 1000);
    });
});
