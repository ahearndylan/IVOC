$('#myCarousel').carousel({
    interval: false,  // Disable auto-slide
    wrap: true        // Allow looping of slides
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#myCarousel');
    const slides = carousel.querySelectorAll('.carousel-item');
    
    // Function to update the scaling and opacity based on the active slide
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('prev-slide', 'next-slide');
            if (slide.classList.contains('active')) {
                slide.style.transform = 'scale(1.2)';
                slide.style.opacity = '1';
            } else {
                slide.style.transform = 'scale(0.8)';
                slide.style.opacity = '0.5';
            }
        });
    }
    
    // Manually update the scaling after each slide transition
    carousel.addEventListener('slid.bs.carousel', updateSlides);

    // Initialize the slide scaling on page load
    updateSlides();
});
