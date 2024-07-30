document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.section-heading');
    headings.forEach(heading => {
        heading.classList.add('animated');
    });

    const quotes = document.querySelectorAll('.about-quote');
    quotes.forEach(quote => {
        quote.classList.add('animated');
    });
});