function toggleDropdown(event) {
    event.preventDefault(); 
    var parent = event.currentTarget.parentNode;
    if (parent.classList.contains('open')) {
        parent.classList.remove('open');
    } else {
        parent.classList.add('open');
    }
}

function toggleHamburgerMenu() {
    var menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('open');
}
