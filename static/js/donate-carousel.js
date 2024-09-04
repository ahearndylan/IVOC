document.addEventListener('DOMContentLoaded', function () {
    var carouselContainer = document.querySelector('.carousel-container');
    var slides = Array.from(document.querySelectorAll('.carousel-slide'));
    var currentIndex = 0;
    var slideWidth = slides[0].clientWidth;
    var moving = false;

    // Initialize the carousel positioning
    function setupCarousel() {
        carouselContainer.style.transition = 'none';
        carouselContainer.style.transform = 'translateX(0px)';
        requestAnimationFrame(() => {
            carouselContainer.style.transition = 'transform 0.5s ease';
        });
    }

    // Handle the seamless transition to the right
    function moveRight() {
        if (moving) return;
        moving = true;
        currentIndex++;
        carouselContainer.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';

        if (currentIndex === slides.length - 1) {
            setTimeout(() => {
                slides.push(slides.shift()); // Move the first slide to the end
                carouselContainer.appendChild(slides[slides.length - 1]); // Append moved slide to the container
                carouselContainer.style.transition = 'none';
                currentIndex--;
                carouselContainer.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';
                requestAnimationFrame(() => {
                    carouselContainer.style.transition = 'transform 0.5s ease';
                    moving = false;
                });
            }, 500);
        } else {
            setTimeout(() => {
                moving = false;
            }, 500);
        }
    }

    // Handle the seamless transition to the left
    function moveLeft() {
        if (moving || currentIndex <= 0) return;
        moving = true;
        currentIndex--;
        carouselContainer.style.transform = 'translateX(-' + (currentIndex * slideWidth) + 'px)';

        setTimeout(() => {
            moving = false;
        }, 500);
    }

    document.querySelector('.carousel-next-slide').addEventListener('click', moveRight);
    document.querySelector('.carousel-prev-slide').addEventListener('click', moveLeft);

    setupCarousel();
});
