let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.querySelectorAll('.slides img');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex - 1 ? 'block' : 'none';
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlides(slideIndex -= 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlides(slideIndex += 1);
});

