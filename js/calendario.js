// --- Lógica específica para la página Calendario ---

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Actualiza el año automáticamente en el pie de página
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Pequeña interacción visual: Al hacer clic en un día, se marca como activo
    const days = document.querySelectorAll('.calendar-days .day:not(.prev-month)');
    
    days.forEach(day => {
        day.addEventListener('click', function() {
            // Quitamos la clase active de todos los días
            document.querySelectorAll('.calendar-days .day').forEach(d => {
                d.classList.remove('active');
            });
            
            // Se la añadimos al día clickeado
            this.classList.add('active');
        });
    });

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
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('calendar-grid');
    const monthText = document.getElementById('month-name');
    const eventsContainer = document.getElementById('events-list-container');
    const eventsTitle = document.getElementById('events-month-title');
    
    if (!grid || !monthText || !eventsContainer) return; 
    
    let date = new Date();
    let currentMonth = date.getMonth(); 
    let currentYear = date.getFullYear();
    const nombresMeses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    function renderCalendar() {
        grid.innerHTML = ""; 
        eventsContainer.innerHTML = ""; 

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
        const today = new Date(); 

        const nombreMesActual = nombresMeses[currentMonth];
        monthText.innerText = `${nombreMesActual} ${currentYear}`;
        if (eventsTitle) eventsTitle.innerText = `Eventos de ${nombreMesActual}`;

        let espaciosVacios = firstDay === 0 ? 6 : firstDay - 1;
        for (let i = 0; i < espaciosVacios; i++) grid.innerHTML += `<div></div>`;

        for (let i = 1; i <= lastDate; i++) {
            let daySquare = document.createElement('div');
            daySquare.classList.add('day');
            if (i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                daySquare.classList.add('today');
            }
            daySquare.innerHTML = `<span>${i}</span>`;

            const eventosDelDia = eventosReales.filter(evt => 
                evt.dia === i && evt.mes === currentMonth && evt.anio === currentYear
            );

            if (eventosDelDia.length > 0) {
                // Creamos contenedor de puntos
                const dotsContainer = document.createElement('div');
                dotsContainer.classList.add('dots-container');

                // Sacamos tipos únicos (para no repetir puntos del mismo color)
                const tiposUnicos = [...new Set(eventosDelDia.map(e => e.tipo))];
                tiposUnicos.forEach(tipo => {
                    const dot = document.createElement('span');
                    dot.classList.add('dot', tipo);
                    dotsContainer.appendChild(dot);
                });
                daySquare.appendChild(dotsContainer);

                // Tarjetas de la derecha
                eventosDelDia.forEach(evento => {
                    const mesAbreviado = nombreMesActual.substring(0, 3).toUpperCase();
                    eventsContainer.innerHTML += `
                        <div class="event-card">
                            <div class="event-card__date ${evento.tipo}">
                                <span class="num-dia">${i}</span>
                                <span class="month">${mesAbreviado}</span>
                            </div>
                            <div class="event-card__info">
                                <h4>${evento.titulo}</h4>
                                <p><i class="fa-regular fa-clock"></i> ${evento.hora} - ${evento.lugar}</p>
                            </div>
                        </div>
                    `;
                });
            }
            grid.appendChild(daySquare);
        }

        // Lógica final del botón (Limpiando duplicados)
        if (eventsContainer.innerHTML === "") {
            eventsContainer.innerHTML = `<p style="padding: 20px; color: #666; font-style: italic;">No hay eventos programados para este mes.</p>`;
        } else {
            // Solo lo agregamos si NO existe ya en el DOM para evitar duplicados
            eventsContainer.innerHTML += `
                <div class="download-container" style="margin-top: 40px; text-align: center; width: 100%; grid-column: 1 / -1;">
                    <a href="#" class="btn btn--primary" style="display: inline-block;">Descargar Cronograma PDF</a>
                </div>
            `;
        }
    }

    renderCalendar(); 
    
    document.getElementById('prevMonth').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) { currentMonth = 11; currentYear--; }
        renderCalendar();
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) { currentMonth = 0; currentYear++; }
        renderCalendar();
    });
});