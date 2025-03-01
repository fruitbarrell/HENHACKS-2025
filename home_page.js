let currentIndex = 0; 
const images = document.querySelectorAll('.imagesToCycle img'); 
const text = document.querySelectorAll('.container p'); 
const totalImages = images.length; 
const totalP = text.length;

function changeSlide(direction) {
    images[currentIndex].style.display = 'none';
    text[currentIndex].style.display = 'none';

    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    images[currentIndex].style.display = 'block';
    text[currentIndex].style.display = 'block';
}

function initializeCarousel() {
    images.forEach((img,p, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none'; 
        p.style.display = index === currentIndex ? 'block' : 'none'; 
    });
}

initializeCarousel();