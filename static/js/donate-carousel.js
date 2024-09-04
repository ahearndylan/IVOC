document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const originalSlides = document.querySelectorAll('.carousel-slide');
    const totalOriginalSlides = originalSlides.length;
    let currentIndex = 0;
    let slideWidth = originalSlides[0].clientWidth;
    let isTransitioning = false;

    // Function to clone all slides
    function cloneSlides() {
        originalSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            carouselContainer.appendChild(clone);
        });
    }

    // Function to update the carousel's position
    function updateCarousel() {
        const offset = -currentIndex * slideWidth;
        carouselContainer.style.transform = `translateX(${offset}px)`;
        carouselContainer.style.transition = 'transform 0.5s ease';
    }

    // Function to handle seamless looping
    function handleLoop() {
        if (currentIndex >= totalOriginalSlides) {
            // If it reaches the end of the original slides, reset to the first without animation
            carouselContainer.style.transition = 'none'; // Disable transition for instant jump
            currentIndex = 0; // Reset index to 0
            updateCarousel(); // Update carousel to start
            // Re-enable transitions after the transform reset
            setTimeout(() => {
                carouselContainer.style.transition = 'transform 0.5s ease';
            }, 50); // Small delay to ensure the transition reset is rendered
        }
    }

    // Event listeners for next navigation
    document.querySelector('.carousel-next-slide').addEventListener('click', function () {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        updateCarousel();
        setTimeout(() => {
            handleLoop();
            isTransitioning = false;
        }, 500); // Match the timeout to transition duration
    });

    // Initial setup
    cloneSlides(); // Clone all slides and append to the carousel
    updateCarousel(); // Set the initial position of the carousel
});
