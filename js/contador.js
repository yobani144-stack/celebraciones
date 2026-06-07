/**
 * Inicializa la lógica de cuenta regresiva matemática para la boda.
 */
export function inicializarContador() {
    // Configura aquí la fecha exacta de tu boda
    const fechaBoda = new Date('December 26, 2026 18:00:00').getTime();
    
    // Capturamos los nodos del DOM
    const txtDias = document.getElementById('reloj-dias');
    const txtHoras = document.getElementById('reloj-horas');
    const txtMinutos = document.getElementById('reloj-minutos');
    const txtSegundos = document.getElementById('reloj-segundos');
    const seccionHero = document.getElementById('seccion-hero');

    // Agregamos la clase de animación para que la sección aparezca suavemente
    if (seccionHero) {
        setTimeout(() => {
            seccionHero.classList.add('revelado');
        }, 100);
    }

    // Guardrail técnico: Validamos que existan los elementos antes de ejecutar
    if (!txtDias || !txtHoras || !txtMinutos || !txtSegundos) return;

    const actualizarReloj = () => {
        const ahora = new Date().getTime();
        const diferencia = fechaBoda - ahora;

        // Si la fecha ya llegó o pasó
        if (diferencia < 0) {
            clearInterval(intervalo);
            const bloqueContador = document.querySelector('.contador-bloque');
            if (bloqueContador) {
                bloqueContador.innerHTML = "<p class='contador-titulo' style='margin:0; font-size:1.2rem;'>¡Llegó el gran día!</p>";
            }
            return;
        }

        // Conversiones de tiempo standard
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Renderizado anteponiendo un cero para mantener los dos dígitos
        txtDias.innerText = dias < 10 ? '0' + dias : dias;
        txtHoras.innerText = horas < 10 ? '0' + horas : horas;
        txtMinutos.innerText = minutos < 10 ? '0' + minutos : minutos;
        txtSegundos.innerText = segundos < 10 ? '0' + segundos : segundos;
    };

    // Ejecución inmediata inicial
    actualizarReloj();
    // Bucle de actualización cada 1 segundo (1000ms)
    const intervalo = setInterval(actualizarReloj, 1000);
}
