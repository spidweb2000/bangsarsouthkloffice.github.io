// Toggle navigation menu on click for mobile
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Toggle dropdown menu on mobile
document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        dots[i].classList.toggle('active', i === index);
    });
}

function changeSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

function setSlide(index) {
    currentSlide = index - 1;
    showSlide(currentSlide);
}

// Auto play
function autoPlay() {
    changeSlide(1);
    setTimeout(autoPlay, 5000); // Change slide every 5 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    autoPlay();
});
