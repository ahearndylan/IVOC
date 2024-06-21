document.addEventListener('DOMContentLoaded', function () {
    var isMobile = window.matchMedia("(max-width: 480px)").matches;
    var slides = document.querySelectorAll('.carousel-slide');

    if (isMobile) {
        var carouselContainer = document.querySelector('.carousel-container');
        var startX = 0;
        var scrollLeft = 0;

        function startDragging(e) {
            startX = e.pageX || e.touches[0].pageX;
            scrollLeft = carouselContainer.scrollLeft;
            carouselContainer.classList.add('active');
        }

        function stopDragging() {
            carouselContainer.classList.remove('active');
        }

        function scroll(e) {
            if (!carouselContainer.classList.contains('active')) return;
            e.preventDefault();
            var x = e.pageX || e.touches[0].pageX;
            var walk = (x - startX) * 2; // Adjust scroll speed
            carouselContainer.scrollLeft = scrollLeft - walk;
        }

        carouselContainer.addEventListener('mousedown', startDragging);
        carouselContainer.addEventListener('mouseleave', stopDragging);
        carouselContainer.addEventListener('mouseup', stopDragging);
        carouselContainer.addEventListener('mousemove', scroll);
        carouselContainer.addEventListener('touchstart', startDragging);
        carouselContainer.addEventListener('touchend', stopDragging);
        carouselContainer.addEventListener('touchmove', scroll);
    } else {
        var currentIndex = 1; 
        var totalSlides = slides.length;

        function cloneSlides() {
            var carouselContainer = document.querySelector('.carousel-container');
            slides.forEach(slide => {
                var clone = slide.cloneNode(true);
                carouselContainer.appendChild(clone);
            });
        }

        function updateSlides() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active');
                if (index === currentIndex) {
                    slide.classList.add('active');
                }
            });

            var slideWidth = slides[0].clientWidth;
            var additionalOffset = 150; 
            var offset = -currentIndex * (slideWidth + 30) + ((slideWidth + 30) / 2) + additionalOffset; 
            document.querySelector('.carousel-container').style.transform = 'translateX(' + offset + 'px)';
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % (totalSlides * 2);
            if (currentIndex >= totalSlides) {
                setTimeout(() => {
                    document.querySelector('.carousel-container').style.transition = 'none';
                    currentIndex = currentIndex % totalSlides;
                    updateSlides();
                }, 500);
            } else {
                document.querySelector('.carousel-container').style.transition = 'transform 0.5s ease-in-out';
            }
            updateSlides();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides * 2) % (totalSlides * 2);
            if (currentIndex < totalSlides) {
                setTimeout(() => {
                    document.querySelector('.carousel-container').style.transition = 'none';
                    currentIndex = (currentIndex + totalSlides) % totalSlides;
                    updateSlides();
                }, 500);
            } else {
                document.querySelector('.carousel-container').style.transition = 'transform 0.5s ease-in-out';
            }
            updateSlides();
        }

        document.querySelector('.carousel-prev-slide').addEventListener('click', prevSlide);
        document.querySelector('.carousel-next-slide').addEventListener('click', nextSlide);

        cloneSlides();
        updateSlides(); // Initialize the carousel
    }
});