import { inicializarSobre } from './sobre.js';
import { inicializarContador } from './contador.js';
import { inicializarHistoria } from './historia.js';
import { inicializarItinerario } from './itinerario.js'; 
import { inicializarUbicaciones } from './ubicaciones.js';
import { inicializarGaleria } from './galeria.js';
import { inicializarCorte } from './corte.js';
import { inicializarRsvp } from './rsvp.js';
import { inicializarFooterDisenador } from './footer-diseñador.js';

// --- NUEVAS IMPORTACIONES DE AUDIO ---
import { encenderMusicaAlApertura, inicializarControlMusica } from './musica.js';

// ... (cargarEstilo y cargarComponente permanecen igual) ...

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Carga inicial del Sobre 3D
    cargarEstilo('css/sobre.css');
    await cargarComponente('sobre.html', 'app-invitacion');
    
    // 2. Pre-cargamos el componente de música de forma silenciosa en el DOM
    // (Esto asegura que el nodo de audio exista antes de abrir el sobre)
    cargarEstilo('css/musica.css');
    await cargarComponente('musica.html', 'main-content');

    inicializarSobre(async () => {
        // --- MOMENTO DE APERTURA DEL SOBRE ---
        
        // Disparamos la música y mostramos el botón flotante de inmediato
        encenderMusicaAlApertura();
        inicializarControlMusica();

        // Continuación de la carga asíncrona de las demás fases del sitio web
        cargarEstilo('css/hero-contador.css');
        await cargarComponente('hero-contador.html', 'main-content');
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.classList.remove('main-oculto');
            document.body.style.overflow = 'auto'; 
        }
        inicializarContador();
        
        // Carga secuencial del resto de componentes (Historia, Itinerario, Ubicaciones, etc.)
        cargarEstilo('css/nuestra-historia.css');
        await cargarComponente('nuestra-historia.html', 'main-content');
        inicializarHistoria();
        cargarEstilo('css/itinerario.css');
        await cargarComponente('html/itinerario.html', 'main-content');
        inicializarItinerario();
        cargarEstilo('css/ubicaciones.css');
        await cargarComponente('ubicaciones.html', 'main-content');
        inicializarUbicaciones();
        cargarEstilo('css/galeria.css');
        await cargarComponente('html/galeria.html', 'main-content');
        inicializarGaleria();
        cargarEstilo('css/corte-honor.css');
        await cargarComponente('corte-honor.html', 'main-content');
        inicializarCorte();
        cargarEstilo('css/rsvp.css');
        await cargarComponente('rsvp.html', 'main-content');
        inicializarRsvp();
        cargarEstilo('css/footer-diseñador.css');
        await cargarComponente('footer-diseñador.html', 'main-content');
        inicializarFooterDisenador();
    });
});
