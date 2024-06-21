document.addEventListener("DOMContentLoaded", function () { 
    var headings = document.querySelectorAll('.curved-underline-animation');
    var quote = document.querySelector('.about-quote');

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    headings.forEach(function(heading) {
        observer.observe(heading);
    });

    observer.observe(quote);
});