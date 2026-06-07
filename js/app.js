import { inicializarSobre } from './sobre.js';
import { inicializarContador } from './contador.js'; // Importamos el nuevo módulo
import { inicializarUbicaciones } from './ubicaciones.js';

function cargarEstilo(ruta) {
    if (document.querySelector(`link[href="${ruta}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = ruta;
    document.head.appendChild(link);
}

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

document.addEventListener('DOMContentLoaded', async () => {
    cargarEstilo('css/sobre.css');
    await cargarComponente('sobre.html', 'app-invitacion');
    
    inicializarSobre(async () => {
        // --- ESTE CÓDIGO SE EJECUTA CUANDO SE ABRE EL SOBRE ---
        
        // 1. Cargamos dinámicamente los estilos de la portada
        cargarEstilo('css/hero-contador.css');
        
        // 2. Inyectamos el componente HTML del Hero dentro de <main id="main-content">
        await cargarComponente('hero-contador.html', 'main-content');
        
        // 3. Activamos el contenedor principal y devolvemos el scroll
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.classList.remove('main-oculto');
            document.body.style.overflow = 'auto'; // Permitimos navegar hacia abajo
        }
        
        // 4. Inicializamos la lógica del contador regresivo
        inicializarContador();

            // --- CARGA DE FASE 3 (Ubicaciones) ---
        cargarEstilo('css/ubicaciones.css');
        await cargarComponente('html/ubicaciones.html', 'main-content');
        
        // Inicializamos el IntersectionObserver para el efecto scroll
        inicializarUbicaciones();
    });
});
