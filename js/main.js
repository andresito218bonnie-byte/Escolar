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