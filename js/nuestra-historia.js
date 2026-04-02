// --- Lógica específica para la página Nuestra Historia ---

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Actualizar el año del copyright en el footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. (Opcional) Aquí podrías añadir animaciones de scroll para el timeline 
    // usando librerías como AOS si quisieras darle más 'vuelo'.
    // Por ahora, lo mantenemos minimalista y funcional.

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