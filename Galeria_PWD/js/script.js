// Espera a que el modelo de objetos del documento se cargue completamente
document.addEventListener("DOMContentLoaded", () => {
  // Variables Carrusel
  const contenedorImagenes = document.querySelector('.contenedor-imagenes');
  const imagenes = document.querySelectorAll('.contenedor-imagenes img');
  const totalImagenes = imagenes.length;
  let indiceActual = 0;

  // Función para mover el carrusel
  function moverCarrusel() {
    contenedorImagenes.style.transform = `translateX(-${indiceActual * 100}%)`;
  }

  // Función para avanzar al siguiente slide
  function siguienteImagen() {
    indiceActual = (indiceActual + 1) % totalImagenes;
    moverCarrusel();
  }

  // Función para retroceder al slide anterior
  function anteriorImagen() {
    indiceActual = (indiceActual - 1 + totalImagenes) % totalImagenes;
    moverCarrusel();
  }

  // Inicia el carrusel automático cada 5 segundos
  let intervaloCarrusel = setInterval(siguienteImagen, 5000);

  // Eventos para las flechas (navegación manual)
  const btnSiguiente = document.getElementById("siguiente");
  const btnAnterior = document.getElementById("anterior");

  btnSiguiente.addEventListener("click", () => {
    clearInterval(intervaloCarrusel); // Reinicia el auto-advance
    siguienteImagen();
    intervaloCarrusel = setInterval(siguienteImagen, 5000);
  });

  btnAnterior.addEventListener("click", () => {
    clearInterval(intervaloCarrusel);
    anteriorImagen();
    intervaloCarrusel = setInterval(siguienteImagen, 5000);
  });

  // Funcionalidad del Modal (Imagen Ampliada)
  const modal = document.getElementById("modal");
  const imagenModal = document.getElementById("imagenModal");
  const cerrarModal = document.getElementById("cerrarModal");

  // Abre el modal al hacer clic en una imagen del carrusel
  imagenes.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex"; // Usamos flex para centrar la imagen
      imagenModal.src = img.src;
    });
  });

  // Cierra el modal cuando se hace clic en el botón de cierre
  cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cierra el modal si se hace clic fuera de la imagen ampliada
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Funcionalidad del Modo Oscuro
  const botonModoOscuro = document.getElementById("modoOscuro");
  botonModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
  });

  // Funcionalidad de la Música de Fondo
  const musica = document.getElementById("musica");
  const botonMusica = document.getElementById("toggleMusica");

  // Configura el volumen de la música
  musica.volume = 0.5;

  // Alterna entre reproducir y pausar la música al hacer clic en el botón,
  // cambiando el icono: ▶ (play) y ⏸ (pause)
  botonMusica.addEventListener("click", () => {
    if (musica.paused) {
      musica.play();
      botonMusica.textContent = "⏸";
    } else {
      musica.pause();
      botonMusica.textContent = "▶";
    }
  });
});
