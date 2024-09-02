document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0; 
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let isAnimating = false;

    function showSlide(number) {
        const slideWidth = slidesContainer.querySelector('.slide').offsetWidth;
        slidesContainer.style.transform = `translateX(-${number * slideWidth}px)`;
        console.log(`Showing slide ${number}`);
    }

    function changeSlide(step) {
        if (isAnimating) return;
        isAnimating = true;

        currentSlide += step;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        showSlide(currentSlide);
        console.log(`Current Slide: ${currentSlide}`);

        setTimeout(() => {
            isAnimating = false;
        }, 500); 
    }

    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));

    showSlide(currentSlide);
});
