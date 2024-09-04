document.addEventListener('DOMContentLoaded', function () {
    var carouselContainer = document.querySelector('.carousel-container');
    var slides = document.querySelectorAll('.carousel-slide');
    var totalSlides = slides.length;
    var currentIndex = 1; // Start from the second slide since the first one is a clone of the last
    
    // Clone the first and last slide
    function cloneSlides() {
        var firstSlide = carouselContainer.firstElementChild.cloneNode(true);
        var lastSlide = carouselContainer.lastElementChild.cloneNode(true);
        carouselContainer.insertBefore(lastSlide, carouselContainer.firstElementChild);
        carouselContainer.appendChild(firstSlide);
    }
    
    function updateSlides() {
        var slideWidth = slides[0].clientWidth;
        var offset = -currentIndex * slideWidth;
        carouselContainer.style.transition = 'transform 0.5s ease';
        carouselContainer.style.transform = 'translateX(' + offset + 'px)';
    }

    function moveToEnd() {
        carouselContainer.style.transition = 'none';
        currentIndex = totalSlides;
        updateSlides();
    }

    function moveToStart() {
        carouselContainer.style.transition = 'none';
        currentIndex = 1;
        updateSlides();
    }

    document.querySelector('.carousel-next-slide').addEventListener('click', function () {
        if (currentIndex >= totalSlides + 1) {
            moveToEnd();
        } else {
            currentIndex++;
            updateSlides();
        }
    });

    document.querySelector('.carousel-prev-slide').addEventListener('click', function () {
        if (currentIndex <= 0) {
            moveToStart();
        } else {
            currentIndex--;
            updateSlides();
        }
    });

    cloneSlides();
    updateSlides(); // Initial update to set position correctly
    
    // Optional: if you want to automate the sliding, you can set an interval
    setInterval(function() {
        if (currentIndex >= totalSlides + 1) {
            moveToEnd();
        } else {
            currentIndex++;
            updateSlides();
        }
    }, 3000); // changes slides every 3 seconds
});
