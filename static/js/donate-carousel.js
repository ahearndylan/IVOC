document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const totalSlides = slides.length;
    let currentIndex = 0;
    let isTransitioning = false;

    // Clone the first and last slides to make the carousel seamless
    const firstSlide = slides[0].cloneNode(true);
    const lastSlide = slides[slides.length - 1].cloneNode(true);
    carouselContainer.appendChild(firstSlide);
    carouselContainer.insertBefore(lastSlide, slides[0]);

    const updateCarousel = () => {
        if (!isTransitioning) {
            isTransitioning = true;
            // Move the slides container
            const offset = -(currentIndex + 1) * 100 / (totalSlides + 2); // Adjust for cloned slides
            carouselContainer.style.transition = 'transform 0.5s ease-in-out';
            carouselContainer.style.transform = `translateX(${offset}%)`;
        }
    };

    // Handle transition end for seamless effect
    carouselContainer.addEventListener('transitionend', () => {
        isTransitioning = false;
        // If we're at the cloned first slide, jump to the actual first slide
        if (currentIndex === totalSlides) {
            carouselContainer.style.transition = 'none'; // Disable transition
            currentIndex = 0; // Reset to first actual slide
            carouselContainer.style.transform = `translateX(-100%)`;
        }
        // If we're at the cloned last slide, jump to the actual last slide
        if (currentIndex === -1) {
            carouselContainer.style.transition = 'none'; // Disable transition
            currentIndex = totalSlides - 1; // Reset to last actual slide
            carouselContainer.style.transform = `translateX(-${totalSlides * 100 / (totalSlides + 2)}%)`;
        }
    });

    const moveToNextSlide = () => {
        if (!isTransitioning) {
            currentIndex++;
            updateCarousel();
        }
    };

    const moveToPrevSlide = () => {
        if (!isTransitioning) {
            currentIndex--;
            updateCarousel();
        }
    };

    document.querySelector('.carousel-next-slide').addEventListener('click', moveToNextSlide);
    document.querySelector('.carousel-prev-slide').addEventListener('click', moveToPrevSlide);

    // Initialize the carousel position to the first actual slide
    carouselContainer.style.transform = `translateX(-100%)`;
});
