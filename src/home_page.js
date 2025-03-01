let currentIndex = 0; 
const images = document.querySelectorAll('.imagesToCycle img'); 
const text = document.querySelectorAll('.container p'); 
const totalImages = images.length; 
const totalText = text.length; 

function changeSlide(direction) {

    if (images[currentIndex]) images[currentIndex].style.display = 'none';
    if (text[currentIndex]) text[currentIndex].style.display = 'none';

    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    if (images[currentIndex]) images[currentIndex].style.display = 'block';
    if (text[currentIndex]) text[currentIndex].style.display = 'block';
}

window.changeSlide = changeSlide;

function initializeCarousel() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });

    text.forEach((p, index) => {
        p.style.display = index === currentIndex ? 'block' : 'none';
    });

}

document.addEventListener("DOMContentLoaded", initializeCarousel);
