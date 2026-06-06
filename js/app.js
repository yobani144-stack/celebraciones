import { inicializarSobre } from './sobre.js';

/**
 * Inyecta de forma dinámica hojas de estilo CSS en el <head>
 * @param {string} ruta - Ruta del archivo CSS
 */
function cargarEstilo(ruta) {
    if (document.querySelector(`link[href="${ruta}"]`)) return; // Evita duplicados
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = ruta;
    document.head.appendChild(link);
}

/**
 * Carga componentes HTML externos de forma modular
 * @param {string} url - Ruta del archivo HTML
 * @param {string} contenedorId - ID del elemento destino
 */
async function cargarComponente(url, contenedorId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const html = await response.text();
        document.getElementById(contenedorId).innerHTML = html;
    } catch (error) {
        console.error(`Error cargando el módulo [${url}]:`, error);
    }
}

// Orquestación Inicial del Ciclo de Vida de la App
document.addEventListener('DOMContentLoaded', async () => {
    // Cargamos los estilos específicos del sobre
    cargarEstilo('css/sobre.css');
    
    // Inyectamos el componente HTML del sobre dentro de nuestra raíz
    await cargarComponente('sobre.html', 'app-invitacion');
    
    // Inicializamos su lógica pasando un callback para cuando el sobre se destruya
    inicializarSobre(() => {
        console.log("Sobre abierto con éxito. Cargando interfaz principal...");
        
        // Aquí revelaremos el bloque principal de la invitación
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = '1';
                // Devolvemos el scroll al navegador
                document.body.style.overflow = 'auto'; 
            }, 50);
            
            // TODO: Próxima fase - Cargar aquí el Hero y el contador de tiempo de manera limpia
        }
    });
});
