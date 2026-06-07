import { inicializarSobre } from './sobre.js';
import { inicializarContador } from './contador.js';
import { inicializarUbicaciones } from './ubicaciones.js'; // 1. Nueva importación
import { inicializarGaleria } from './galeria.js';
import { inicializarCorte } from './corte.js';
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
        
        // CORRECCIÓN/MEJORA: Usamos += o append para no borrar lo que ya estaba en main-content
        const contenedor = document.getElementById(contenedorId);
        if (contenedor.innerHTML === "") {
            contenedor.innerHTML = html;
        } else {
            contenedor.insertAdjacentHTML('beforeend', html);
        }
    } catch (error) {
        console.error(`Error cargando el módulo [${url}]:`, error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    cargarEstilo('css/sobre.css');
    await cargarComponente('sobre.html', 'app-invitacion');
    
    inicializarSobre(async () => {
        // Carga de Fase 2 (Portada)
        cargarEstilo('css/hero-contador.css');
        await cargarComponente('hero-contador.html', 'main-content');
        
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.classList.remove('main-oculto');
            document.body.style.overflow = 'auto'; 
        }
        inicializarContador();

        // --- CARGA DE FASE 3 (Ubicaciones) ---
        cargarEstilo('css/ubicaciones.css');
        await cargarComponente('ubicaciones.html', 'main-content');
        
        // Inicializamos el IntersectionObserver para el efecto scroll
        inicializarUbicaciones();

        // --- CARGA DE FASE 4 (Galería 3D) ---
        cargarEstilo('css/galeria.css');
        await cargarComponente('galeria.html', 'main-content');
        
        // Inicializamos las matemáticas de rotación 3D del carrusel
        inicializarGaleria();

        // --- CARGA DE FASE 5 (Corte de Honor: Padres y Padrinos) ---
        cargarEstilo('css/corte-honor.css');
        await cargarComponente('corte-honor.html', 'main-content');
        
        // Inicializamos los observadores de scroll para la familia
        inicializarCorte();
    });
});
