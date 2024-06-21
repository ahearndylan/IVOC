document.addEventListener('DOMContentLoaded', function () {
    var slideIndex = 0;
    var slides = document.querySelectorAll('.custom-slide');
    var totalSlides = slides.length;
    var prevButton = document.querySelector('.custom-prev-slide');
    var nextButton = document.querySelector('.custom-next-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'flex' : 'none';
        });
    }

    function showNextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function showPrevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    prevButton.addEventListener('click', showPrevSlide);
    nextButton.addEventListener('click', showNextSlide);

    showSlide(slideIndex);
});