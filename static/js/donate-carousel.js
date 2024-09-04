document.addEventListener('DOMContentLoaded', function () {
    var carouselContainer = document.querySelector('.carousel-container');
    var slides = document.querySelectorAll('.carousel-slide');
    var totalSlides = slides.length;
    var currentIndex = 0; // Start from the first original slide

    // Clone the first and last slide
    function cloneSlides() {
        var firstSlide = carouselContainer.firstElementChild.cloneNode(true);
        var lastSlide = carouselContainer.lastElementChild.cloneNode(true);
        carouselContainer.insertBefore(lastSlide, carouselContainer.firstElementChild);
        carouselContainer.appendChild(firstSlide);
        carouselContainer.style.transition = 'none';
        // Adjust the carousel position to the 'new' first slide which is technically the second element now
        var slideWidth = carouselContainer.firstElementChild.offsetWidth;
        carouselContainer.style.transform = 'translateX(-' + slideWidth + 'px)';
    }

    function updateSlides() {
        var slideWidth = carouselContainer.firstElementChild.offsetWidth;
        var offset = -currentIndex * slideWidth;
        carouselContainer.style.transition = 'transform 0.5s ease';
        carouselContainer.style.transform = 'translateX(' + offset + 'px)';
    }

    function cycleSlides() {
        if (currentIndex > totalSlides) { // If it's on the last clone
            carouselContainer.style.transition = 'none'; // Disable the transition
            currentIndex = 1; // Jump back to the first actual slide
            updateSlides();
        } else if (currentIndex < 1) { // If it's on the first clone
            carouselContainer.style.transition = 'none'; // Disable the transition
            currentIndex = totalSlides; // Jump to the last actual slide
            updateSlides();
        }
    }

    document.querySelector('.carousel-next-slide').addEventListener('click', function () {
        currentIndex++;
        updateSlides();
        setTimeout(cycleSlides, 500); // Adjust timing to match the transition
    });

    document.querySelector('.carousel-prev-slide').addEventListener('click', function () {
        currentIndex--;
        updateSlides();
        setTimeout(cycleSlides, 500); // Adjust timing to match the transition
    });

    cloneSlides(); // Create clones and set initial position
});
