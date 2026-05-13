document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openBtn');
    const mainContainer = document.getElementById('mainContainer');

    openBtn.addEventListener('click', () => {
        // Animación de "acercamiento" al sobre
        mainContainer.classList.add('open-animation');

        // Redirección después de que pase la animación
        setTimeout(() => {
            window.location.href = 'invitacion.html';
        }, 800);
    });
});
