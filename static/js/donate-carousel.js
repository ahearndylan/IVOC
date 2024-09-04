document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function updateActiveSlide() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });
    }

    function moveToNextSlide() {
        currentIndex++;
        if (currentIndex > slides.length - 1) {
            currentIndex = 0;
        }
        updateActiveSlide();
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}px)`;
    }

    function moveToPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        updateActiveSlide();
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}px)`;
    }

    document.querySelector('.carousel-next-slide').addEventListener('click', moveToNextSlide);
    document.querySelector('.carousel-prev-slide').addEventListener('click', moveToPrevSlide);

    // Initialize the active slide
    updateActiveSlide();
});
