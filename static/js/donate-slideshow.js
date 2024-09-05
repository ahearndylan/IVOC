document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.slide');
    var slidesContainer = document.querySelector('.slides-container');
    var currentIndex = 0;

    function showSlide(index) {
        var slideWidth = slides[0].clientWidth; 
        var offset = -index * slideWidth; 
        slidesContainer.style.transform = 'translateX(' + offset + 'px)'; 
    }

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = currentIndex <= 0 ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = currentIndex >= slides.length - 1 ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    showSlide(currentIndex); 
});