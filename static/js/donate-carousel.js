document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    let currentIndex = 0;
    const totalSlides = slides.length;
    const clonedSlides = [...slides]; // Clone slides for seamless effect

    // Clone first and last few slides to the container
    clonedSlides.slice(0, 3).forEach(slide => carouselContainer.appendChild(slide.cloneNode(true)));
    clonedSlides.slice(-3).forEach(slide => carouselContainer.insertBefore(slide.cloneNode(true), slides[0]));

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });

        const offset = -currentIndex * 100 / totalSlides; // Translate based on current slide
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    function moveToNextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            // Skip animation and reset to start of original slides for seamless effect
            carouselContainer.style.transition = 'none';
            currentIndex = 0;
            updateCarousel();
            setTimeout(() => {
                carouselContainer.style.transition = 'transform 0.5s ease-in-out';
            }, 50); // Add small delay for smooth transition
        } else {
            updateCarousel();
        }
    }

    function moveToPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            // Skip animation and reset to end of original slides for seamless effect
            carouselContainer.style.transition = 'none';
            currentIndex = totalSlides - 1;
            updateCarousel();
            setTimeout(() => {
                carouselContainer.style.transition = 'transform 0.5s ease-in-out';
            }, 50); // Add small delay for smooth transition
        } else {
            updateCarousel();
        }
    }

    // Attach event listeners to buttons
    document.querySelector('.carousel-next-slide').addEventListener('click', moveToNextSlide);
    document.querySelector('.carousel-prev-slide').addEventListener('click', moveToPrevSlide);

    // Initialize the carousel
    updateCarousel();
});
