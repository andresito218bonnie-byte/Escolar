// =========================================================
// MINI BASE DE DATOS DE NOTICIAS
// =========================================================

const baseDatosNoticias = {
    "feria-ciencias": {
        titulo: "Gran éxito en la Feria de Innovación y Robótica 2024",
        categoria: "Ciencia y Tecnología",
        colorCategoria: "category-tag--science",
        fecha: "24 de Octubre, 2024",
        autor: "Coordinación Académica",
        imagen: "assets/img/colegio1.jpg", // Pon la ruta real de tu foto
        contenido: `
            <p class="lead-paragraph">El pasado viernes, las instalaciones de nuestro coliseo principal se transformaron en un verdadero epicentro de tecnología y creatividad.</p>
            <p>Con la participación de más de 150 estudiantes, el evento demostró que el talento y la pasión por las ciencias exactas están más vivos que nunca.</p>
            <h2>Proyectos que miran al futuro</h2>
            <p>Destacó un sistema de riego automatizado basado en sensores de humedad, programado íntegramente usando placas Arduino.</p>
            <blockquote>"Nuestro objetivo es que los estudiantes se conviertan en creadores de soluciones para su entorno". <br><strong>— Prof. Carlos Ramírez</strong></blockquote>
        `
    },
    "campeones-baloncesto": {
        titulo: "Campeones en el torneo intercolegiado de baloncesto",
        categoria: "Deportes",
        colorCategoria: "category-tag--sports",
        fecha: "20 de Octubre, 2024",
        autor: "Departamento de Educación Física",
        imagen: "assets/img/noticia-deportes.jpg",
        contenido: `
            <p class="lead-paragraph">En una final de infarto que se decidió en los últimos segundos, nuestro equipo representativo se coronó campeón regional.</p>
            <p>El marcador final de 54-52 refleja lo reñido que estuvo el encuentro contra el Instituto Técnico. Felicitamos a nuestros atletas por dejar en alto el nombre de nuestra institución.</p>
            <h2>El MVP del torneo</h2>
            <p>Andrés, de grado 11º, fue galardonado como el Jugador Más Valioso del campeonato tras anotar 24 puntos en el partido decisivo.</p>
        `
    }
    // Puedes seguir agregando todas las noticias que quieras aquí, separadas por coma.
};

// =========================================================
// EL MOTOR QUE RELLENA LA PÁGINA
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Verificamos si estamos en la página de detalles
    const tituloElemento = document.getElementById('news-title');
    
    if (tituloElemento) {
        // 2. Extraer el ID de la URL (Ej: extrae 'feria-ciencias' de ?id=feria-ciencias)
        const parametrosURL = new URLSearchParams(window.location.search);
        const idNoticia = parametrosURL.get('id');

        // 3. Buscar la noticia en la base de datos
        const noticia = baseDatosNoticias[idNoticia];

        if (noticia) {
            // Si la noticia existe, inyectamos los datos en la página
            document.getElementById('news-title').textContent = noticia.titulo;
            document.getElementById('news-author').textContent = noticia.autor;
            document.getElementById('news-date').textContent = noticia.fecha;
            
            const categoriaEl = document.getElementById('news-category');
            categoriaEl.textContent = noticia.categoria;
            categoriaEl.className = `category-tag ${noticia.colorCategoria}`;
            
            const imagenEl = document.getElementById('news-image');
            if(noticia.imagen) {
                imagenEl.src = noticia.imagen;
                imagenEl.style.display = 'block';
            }

            document.getElementById('news-content').innerHTML = noticia.contenido;
            
            // Cambiar el título de la pestaña del navegador
            document.title = `${noticia.titulo} | Colegio Ciudad de Tunja`;

        } else {
            // Si alguien pone un ID inventado en la URL o no existe
            tituloElemento.textContent = "Noticia no encontrada";
            document.getElementById('news-content').innerHTML = `
                <div style="text-align:center; padding: 50px;">
                    <h2>¡Ups!</h2>
                    <p>La noticia que buscas no existe o ha sido eliminada.</p>
                    <a href="noticias.html" class="btn btn--primary mt-4">Ver otras noticias</a>
                </div>
            `;
            document.getElementById('news-category').style.display = 'none';
        }
    }
});