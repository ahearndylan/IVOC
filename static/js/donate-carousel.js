document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#carouselExample .carousel-inner');
    let isScrolling = false;
    
    // Function to copy the first few items and append them to the end for seamless effect
    function cloneCarouselItems() {
        const items = carouselElement.querySelectorAll('.carousel-item');
        items.forEach((item, index) => {
            if (index < 3) { // Adjust number of items to clone
                const clone = item.cloneNode(true);
                carouselElement.appendChild(clone);
            }
        });
    }
    
    cloneCarouselItems(); // Call the function to clone items for continuous scroll
    
    // Custom scroll behavior
    function scrollContinuously() {
        if (!isScrolling) {
            isScrolling = true;
            carouselElement.style.transition = 'transform 0.5s ease-in-out';
            carouselElement.style.transform = 'translateX(-100%)';
            
            setTimeout(function () {
                // Move first slide to the end to create an endless loop effect
                carouselElement.appendChild(carouselElement.firstElementChild);
                carouselElement.style.transition = 'none';
                carouselElement.style.transform = 'translateX(0)';
                isScrolling = false;
            }, 500); // Matches the transition duration
        }
    }
    
    // Set up automatic scrolling every 3 seconds
    setInterval(scrollContinuously, 3000);
});
