function toggleHamburgerMenu() {
    var menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('open');
}

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.classList.toggle('open');
}