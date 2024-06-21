function toggleDropdown(element, event) {
    event.preventDefault(); 
    event.stopPropagation(); 
    var dropdownContent = element.nextElementSibling;

    console.log("Dropdown clicked:", element.textContent);

    // Close all dropdowns
    document.querySelectorAll('.dropdown-content-mobile').forEach(function(content) {
        content.classList.remove('open');
    });

    dropdownContent.classList.toggle('open');
}

document.querySelectorAll('.dropdown-mobile > a').forEach(function(dropdownLink) {
    dropdownLink.addEventListener('click', function(event) {
        toggleDropdown(this, event);
    });
});