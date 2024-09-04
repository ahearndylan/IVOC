document.addEventListener('DOMContentLoaded', function () {
    const carouselTrack = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    // Function to clone the first few slides
    function cloneFirstSlides(number) {
        for (let i = 0; i < number; i++) {
            const clone = slides[i].cloneNode(true);
            carouselTrack.appendChild(clone);
        }
    }

    cloneFirstSlides(2); // Cloning the first 2 slides to complete the loop
});
