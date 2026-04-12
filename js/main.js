document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica del Hero Slider ---
    const slides = document.querySelectorAll('.hero__slide');
    let currentSlide = 0;

    // Solo ejecuta si detecta que hay imágenes de slider
    if (slides.length > 0) {
        // Cambia la imagen cada 5000 milisegundos (5 segundos)
        setInterval(() => {
            // Quita la clase 'active' de la imagen actual
            slides[currentSlide].classList.remove('active');
            
            // Calcula cuál es la siguiente imagen (vuelve a 0 si llega al final)
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Le pone la clase 'active' a la nueva imagen
            slides[currentSlide].classList.add('active');
        }, 5000); 
    }
});
// =========================================================
// EXPERIENCIA INTERACTIVA PRO (Animaciones Next-Gen)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Cursor Glow dinámico ---
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
        // requestAnimationFrame hace que el movimiento sea ultra fluido
        requestAnimationFrame(() => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    });

    // Efecto Extra: La luz SOLO se enciende al pasar sobre botones o enlaces
    document.querySelectorAll('a, button, .btn, .day').forEach(el => {
        el.addEventListener('mouseenter', () => {
            /* Enciende la luz agregando la clase CSS */
            cursorGlow.classList.add('show-glow');
        });
        
        el.addEventListener('mouseleave', () => {
            /* Apaga la luz quitando la clase CSS */
            cursorGlow.classList.remove('show-glow');
        });
    });

    // --- 2. Parallax adaptado a nuestro Hero Slider ---
    window.addEventListener('scroll', () => {
        const heroSlider = document.querySelector('.hero__slider');
        if (!heroSlider) return;

        let offset = window.scrollY;
        // Movemos el contenedor de las imágenes para crear profundidad, sin romper el carrusel
        heroSlider.style.transform = `translateY(${offset * 0.4}px)`;
    });

    // --- 3. Hover magnético en botones ---
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Combinamos el magnetismo con un pequeño efecto de elevación
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        });

        btn.addEventListener('mouseleave', () => {
            // Vuelve a su estado natural al quitar el mouse
            btn.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });

    // --- 4. Activar animación al hacer scroll (Reveal) ---
    const sections = document.querySelectorAll('section:not(.hero):not(.page-header)');

    const checkScroll = () => {
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            // Si la sección entra en el campo de visión del usuario
            if (top < window.innerHeight - 100) {
                sec.classList.add('visible');
            }
        });
    };

    // Ejecutar una vez al cargar para mostrar las secciones que ya están en pantalla
    checkScroll();
    
    // Ejecutar cada vez que se hace scroll
    window.addEventListener('scroll', checkScroll);
});
// =========================================================
// js/main.js - LÓGICA DEL MENÚ DE NAVEGACIÓN
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Elementos principales del DOM
    const btnHamburguesa = document.getElementById('btn-hamburguesa');
    const menuPrincipal = document.querySelector('.navbar__menu');
    
    // 2. Lógica del botón Hamburguesa Principal
    if (btnHamburguesa && menuPrincipal) {
        const iconoHamburguesa = btnHamburguesa.querySelector('i');

        btnHamburguesa.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Abre o cierra la cortina principal
            menuPrincipal.classList.toggle('active');

            // Cambia dinámicamente el icono (Barras <-> X)
            if (menuPrincipal.classList.contains('active')) {
                iconoHamburguesa.classList.remove('fa-bars');
                iconoHamburguesa.classList.add('fa-xmark');
            } else {
                iconoHamburguesa.classList.remove('fa-xmark');
                iconoHamburguesa.classList.add('fa-bars');
            }
        });
    }

    // 3. Lógica para los submenús (Ej: "Institucional")
    const botonesSubmenu = document.querySelectorAll('.has-dropdown > a');
    
    botonesSubmenu.forEach(boton => {
        boton.addEventListener('click', function(e) {
            // Solo activar la función de acordeón si estamos en versión móvil
            if (window.innerWidth <= 992) {
                e.preventDefault(); // Evita que la página salte
                
                // Le pone/quita la clase 'active' al contenedor (<li>)
                const elementoPadre = this.parentElement;
                elementoPadre.classList.toggle('active');
            }
        });
    });

});
// --- EFECTO SCROLL SPY CORREGIDO (Solo un activo a la vez) ---
window.addEventListener('scroll', () => {
    const seccionAcademico = document.getElementById('academico');
    const linkAcademico = document.querySelector('a[href="#academico"]');
    const linkInicio = document.querySelector('a[href="index.html"]');
    
    // Todos los enlaces del menú para poder limpiarlos
    const todosLosLinks = document.querySelectorAll('.navbar__link');

    if (seccionAcademico && linkAcademico) {
        const topSeccion = seccionAcademico.offsetTop - 200; // Ajuste de detección
        const scrollActual = window.scrollY;

        if (scrollActual >= topSeccion) {
            // 1. Limpiamos TODOS primero
            todosLosLinks.forEach(link => link.classList.remove('active'));
            
            // 2. Activamos solo Académico
            linkAcademico.classList.add('active');
        } else {
            // 3. Si estamos arriba, limpiamos y solo activamos Inicio
            todosLosLinks.forEach(link => link.classList.remove('active'));
            if(linkInicio) linkInicio.classList.add('active');
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const upcomingContainer = document.getElementById('upcoming-events-list');
    if (!upcomingContainer) return;

    // 🚨 AQUÍ NO PONES "const eventosReales", el JS lo toma de eventos.js solo
    
    const hoy = new Date();
    const nombresMeses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

    // 1. Filtrar eventos futuros
    const futuros = eventosReales.filter(evt => {
        const fechaEvento = new Date(evt.anio, evt.mes, evt.dia);
        return fechaEvento >= hoy.setHours(0,0,0,0);
    });

    // 2. Ordenar por fecha (más cercano primero)
    futuros.sort((a, b) => new Date(a.anio, a.mes, a.dia) - new Date(b.anio, b.mes, b.dia));

    // 3. Mostrar solo los 3 más cercanos
    const proximosTres = futuros.slice(0, 3);

    // 4. Inyectar en el HTML
    upcomingContainer.innerHTML = ""; 
    proximosTres.forEach(evento => {
        upcomingContainer.innerHTML += `
            <div class="event-card">
                <div class="event-card__date ${evento.tipo}">
                    <span class="num-dia">${evento.dia}</span>
                    <span class="month">${nombresMeses[evento.mes]}</span>
                </div>
                <div class="event-card__info">
                    <h4>${evento.titulo}</h4>
                    <p><i class="fa-regular fa-clock"></i> ${evento.hora} - ${evento.lugar}</p>
                </div>
            </div>
        `;
    });
});
// 4. Inyectar en el HTML
    
    // 🛡️ EL ESCUDO: Solo inyecta si el contenedor existe en esta página
    if (upcomingContainer) {
        upcomingContainer.innerHTML = ""; 
        proximosTres.forEach(evento => {
            upcomingContainer.innerHTML += `
                <div class="event-card">
                    <div class="event-card__date ${evento.tipo}">
                        <span class="num-dia">${evento.dia}</span>
                        <span class="month">${nombresMeses[evento.mes]}</span>
                    </div>
                    <div class="event-card__info">
                        <h4>${evento.titulo}</h4>
                        <p><i class="fa-regular fa-clock"></i> ${evento.hora} - ${evento.lugar}</p>
                    </div>
                </div>
            `;
        });
    } // <--- Cierre del escudo

    // =========================================================
// LÓGICA DE LA VENTANA EMERGENTE (MODAL) BLINDADA
// =========================================================

function abrirModal(idPlan) {
    const modal = document.getElementById('modal-estudios');
    const content = modal.querySelector('.modal-content');

    // 1. Limpiamos clases viejas y preparamos el contenido
    content.classList.remove('cerrando');
    modal.classList.remove('desvanecer');
    
    document.querySelectorAll('.plan-info').forEach(p => p.style.display = 'none');
    document.getElementById(idPlan).style.display = 'block';

    // 2. Mostramos y activamos animación de entrada
    modal.style.display = 'flex';
    content.classList.add('abriendo');
}

function cerrarModal() {
    const modal = document.getElementById('modal-estudios');
    const content = modal.querySelector('.modal-content');

    // 1. Activamos las animaciones de salida
    content.classList.remove('abriendo');
    content.classList.add('cerrando');
    modal.classList.add('desvanecer');

    // 2. Esperamos a que termine la animación (400ms) antes de ocultar todo
    setTimeout(() => {
        modal.style.display = 'none';
        content.classList.remove('cerrando');
        modal.classList.remove('desvanecer');
    }, 400); 
}

    // =========================================================
// INYECTOR DE NOTICIAS AUTOMÁTICAS
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    const heroBox = document.getElementById('contenedor-hero');
    const gridBox = document.getElementById('contenedor-grid');

    // 🛡️ ESCUDO: Si no estamos en la página de noticias, no hace nada
    if (!heroBox && !gridBox) return; 

    // Verificamos que la base de datos ya haya cargado exitosamente
    if (typeof baseDatosNoticias === 'undefined') {
        console.error("❌ La base de datos no cargó. Revisa que noticias-db.js esté en tu HTML.");
        return;
    }

    const idPrincipal = "feria-ciencias"; 
    const principal = baseDatosNoticias[idPrincipal];
    
    // 1. PINTAR LA NOTICIA DESTACADA (HERO)
    if (principal && heroBox) {
        heroBox.innerHTML = `
            <a href="noticia-detalle.html?id=${idPrincipal}" class="hero-post">
                <div class="hero-post__image">
                    <img src="${principal.imagen}" alt="${principal.titulo}" class="img-hero-fit">
                    <div class="hero-post__overlay"></div>
                </div>
                <div class="hero-post__content">
                    <span class="category-tag ${principal.colorCategoria}">${principal.categoria}</span>
                    <h1 class="hero-post__title">${principal.titulo}</h1>
                    <ul class="post-meta">
                        <li><i class="fa-regular fa-calendar"></i> ${principal.fecha}</li>
                        <li><i class="fa-regular fa-user"></i> Por: ${principal.autor}</li>
                    </ul>
                    <p class="hero-post__excerpt">Haz clic para leer todos los detalles de este evento.</p>
                </div>
            </a>
        `;
    }

    // 2. PINTAR LAS DEMÁS NOTICIAS (GRID)
    if (gridBox) {
        let contenidoGrid = "";
        for (let id in baseDatosNoticias) {
            if (id === idPrincipal) continue; // Nos saltamos la de arriba
            
            const n = baseDatosNoticias[id];
            
            // Limpiamos etiquetas raras para sacar un extracto limpio
            const textoLimpio = n.contenido.replace(/<[^>]*>?/gm, '');
            const extractoCorto = textoLimpio.substring(0, 80) + "...";

            contenidoGrid += `
                <a href="noticia-detalle.html?id=${id}" class="news-grid-item">
                    <div class="news-grid-item__img">
                        <span class="category-tag ${n.colorCategoria} label-flotante">${n.categoria}</span>
                        <img src="${n.imagen}" alt="${n.titulo}" class="img-grid-fit">
                    </div>
                    <div class="news-grid-item__content">
                        <h3 class="news-grid-item__title">${n.titulo}</h3>
                        <ul class="post-meta">
                            <li><i class="fa-regular fa-calendar"></i> ${n.fecha}</li>
                        </ul>
                        <p>${extractoCorto}</p>
                    </div>
                </a>
            `;
        }
        gridBox.innerHTML = contenidoGrid;
    }
});
