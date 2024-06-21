document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.socialmedia-dropdown');

    dropdowns.forEach(function (dropdown) {
        var toggle = dropdown.querySelector('.dropdown-toggle');
        var menu = dropdown.querySelector('.dropdown-menu');

        toggle.addEventListener('mouseenter', function () {
            menu.style.display = 'block';
            adjustDropdownPosition(menu);
        });

        dropdown.addEventListener('mouseleave', function () {
            menu.style.display = 'none';
        });

        menu.addEventListener('mouseenter', function () {
            menu.style.display = 'block';
        });

        menu.addEventListener('mouseleave', function () {
            menu.style.display = 'none';
        });
    });

    function adjustDropdownPosition(menu) {
        var rect = menu.getBoundingClientRect();
        var screenWidth = window.innerWidth;

        menu.style.left = 'auto';
        menu.style.right = 'auto';

        if (rect.right > screenWidth) {
            menu.style.left = 'auto';
            menu.style.right = '0';
        }

        if (rect.left < 0) {
            menu.style.left = '0';
            menu.style.right = 'auto';
        }

        rect = menu.getBoundingClientRect();

        if (rect.right > screenWidth) {
            menu.style.left = 'auto';
            menu.style.right = '0';
        }
        if (rect.left < 0) {
            menu.style.left = '0';
            menu.style.right = 'auto';
        }
    }

    window.addEventListener('resize', function() {
        var openMenus = document.querySelectorAll('.socialmedia-dropdown .dropdown-menu');
        openMenus.forEach(function(menu) {
            if (menu.style.display === 'block') {
                adjustDropdownPosition(menu);
            }
        });
    });
});