document.addEventListener('DOMContentLoaded', function () {
    var carouselContainer = document.querySelector('.carousel-container');
    var slides = document.querySelectorAll('.carousel-slide');
    var totalSlides = slides.length;
    var currentIndex = 1; // Start with the first slide being the second element in the DOM (due to a clone at the start)

    function cloneSlides() {
        var firstSlide = carouselContainer.firstElementChild.cloneNode(true);
        var lastSlide = carouselContainer.lastElementChild.cloneNode(true);
        carouselContainer.insertBefore(lastSlide, carouselContainer.firstChild);
        carouselContainer.appendChild(firstSlide);
        updateCarousel();
    }

    function updateCarousel() {
        var slideWidth = carouselContainer.firstElementChild.clientWidth;
        // Center the active slide in view
        carouselContainer.style.transform = 'translateX(-' + (currentIndex * slideWidth - slideWidth / 2 - carouselContainer.clientWidth / 2) + 'px)';
        carouselContainer.style.transition = 'transform 0.5s ease';
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex > totalSlides) {
            // Seamless transition to the first slide
            carouselContainer.style.transition = 'none';
            currentIndex = 1;
            updateCarousel();
            // Re-enable transition for visual effect
            setTimeout(() => {
                carouselContainer.style.transition = 'transform 0.5s ease';
            }, 10);
        } else {
            updateCarousel();
        }
    }

    function prevSlide() {
        currentIndex--;
        if (currentIndex < 1) {
            // Seamless transition to the last slide
            carouselContainer.style.transition = 'none';
            currentIndex = totalSlides;
            updateCarousel();
            setTimeout(() => {
                carouselContainer.style.transition = 'transform 0.5s ease';
            }, 10);
        } else {
            updateCarousel();
        }
    }

    document.querySelector('.carousel-next-slide').addEventListener('click', nextSlide);
    document.querySelector('.carousel-prev-slide').addEventListener('click', prevSlide);

    cloneSlides(); // Add clones for seamless looping
    updateCarousel(); // Position slides correctly
});
