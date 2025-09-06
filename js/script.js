// Función para alternar la visibilidad del menú desplegable
function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Índice de la imagen actual en el carrusel
let currentImageIndex = 0;
// Número total de imágenes en el carrusel
const totalImages = 5;

// Función para mostrar una imagen específica en el carrusel
function showImage(index) {
    const images = document.querySelectorAll('.carousel-items');
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Función para mostrar la siguiente imagen en el carrusel
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    showImage(currentImageIndex);
}

// Función para mostrar la imagen anterior en el carrusel
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(currentImageIndex);
}

// Función para desplazar automáticamente el carrusel
function startCarousel() {
    setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos
}

// Iniciar el carrusel automáticamente al cargar la página
startCarousel();

// Event listener para la flecha derecha
document.querySelector('.arrow-right').addEventListener('click', nextImage);

// Event listener para la flecha izquierda
document.querySelector('.arrow-left').addEventListener('click', previousImage);

// Control del carrusel con botones
const carouselButtons = document.querySelectorAll('.carousel-btn');
const urls = [
    'historia.html', // URL para la primera imagen
    'gastronomia.html', // URL para la segunda imagen
    'cultura.html', // URL para la tercera imagen
    'turismo.html', // URL para la cuarta imagen
    'tradiciones.html' // URL para la quinta imagen
];

carouselButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showImage(index);
        currentImageIndex = index;
        window.location.href = urls[index]; // Redirigir a la URL correspondiente
    });
});

// Función para mostrar un mensaje emergente al hacer clic en el botón "continuar"
function showMessage() {
    alert("Te llevaré a la página para que continúes tu lectura.");
}

document.addEventListener('DOMContentLoaded', () => {
    const visitCountElement = document.getElementById('visitCount');
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    visitCountElement.textContent = visitCount;
});

// Event listener para la flecha derecha
document.querySelector('.arrow-right').addEventListener('click', nextImage);

// Event listener para la flecha izquierda
document.querySelector('.arrow-left').addEventListener('click', previousImage);

// Event listener para el botón "continuar leyendo"
document.querySelector(".continuar").addEventListener("click", showMessage);
