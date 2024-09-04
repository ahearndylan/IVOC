document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    let currentIndex = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });

        const offset = -currentIndex * (100 / slides.length); // Calculate the translation value
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    function moveToNextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0; // Reset to the first slide for an infinite feel
        }
        updateCarousel();
    }

    function moveToPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1; // Go to the last slide
        }
        updateCarousel();
    }

    // Attach event listeners to buttons
    document.querySelector('.carousel-next-slide').addEventListener('click', moveToNextSlide);
    document.querySelector('.carousel-prev-slide').addEventListener('click', moveToPrevSlide);

    // Initialize the carousel
    updateCarousel();
});
