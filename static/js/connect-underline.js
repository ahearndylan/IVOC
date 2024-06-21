document.addEventListener('DOMContentLoaded', function () {
        
    var underline = document.querySelector('.curved-underline-animation');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(underline);
});