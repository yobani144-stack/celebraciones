function abrirInvitacion() {
    const inicio = document.getElementById('pantalla-inicio');
    const contenido = document.getElementById('contenido-invitacion');

    // 1. Desvanecer la pantalla de inicio
    inicio.style.opacity = '0';
    inicio.style.transform = 'translateY(-100vh)'; // Efecto de cortina hacia arriba

    // 2. Esperar a que termine la animación de salida para ocultarla por completo y mostrar el contenido
    setTimeout(() => {
        inicio.style.display = 'none';
        
        // Mostrar el contenido principal con transición
        contenido.classList.remove('contenido-oculto');
        contenido.classList.add('contenido-visible');
        
        // Opcional: Aquí puedes reproducir música de fondo si la incluyes
        // document.getElementById('musica-fondo').play();
    }, 800); // 800ms coincide con la transición del CSS
}
