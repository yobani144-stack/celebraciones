/**
 * Inicializa la confirmación directa de un solo clic hacia WhatsApp.
 */
export function inicializarRsvp() {
    // Configura aquí tu número de WhatsApp (código de país + 10 dígitos)
    const NUMERO_WHATSAPP = "523300000000"; 

    const btnEnviar = document.getElementById('btn-enviar-whatsapp');
    const elementosAnimar = document.querySelectorAll('.animate-rsvp');

    if (!btnEnviar) return;

    // --- 1. ENVÍO DIRECTO A WHATSAPP ---
    btnEnviar.addEventListener('click', () => {
        // Redacción elegante y abierta para que el invitado solo firme con su nombre si quiere
        let mensaje = `¡Hola Martha y TuNombre! 👋\n\nLes escribo para confirmar con mucha alegría nuestra asistencia a su boda. ¡Nos entusiasma muchísimo poder acompañarlos y celebrar junto a ustedes este día tan especial! 🥂✨`;

        // Codificación de caracteres especiales
        const mensajeCodificado = encodeURIComponent(mensaje);
        const urlFinal = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${mensajeCodificado}`;

        // Pequeño efecto visual táctil al presionar
        btnEnviar.style.transform = "scale(0.98)";
        setTimeout(() => {
            window.open(urlFinal, '_blank');
            btnEnviar.style.transform = "none";
        }, 150);
    });

    // --- 2. ANIMACIÓN SCROLL REVEAL ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    elementosAnimar.forEach(el => observer.observe(el));
}
