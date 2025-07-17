const track = document.querySelector('.carousel-mov');
const images = document.querySelectorAll('.carousel-image');
let index = 0;

function updateCarousel() {
  // Quitar la clase "center" de todas
  images.forEach(img => img.classList.remove('center'));

  // Calcular el desplazamiento
  const offset = -index * (images[0].clientWidth + 20); // margen incluido
  track.style.transform = `translateX(${offset}px)`;

  // Marcar la imagen del medio como "center"
  const centerIndex = index + 1;
  if (images[centerIndex]) {
    images[centerIndex].classList.add('center');
  }

  index = (index + 1) % (images.length - 2); // aseguramos que siempre hay 3 visibles
}

setInterval(updateCarousel, 3000);