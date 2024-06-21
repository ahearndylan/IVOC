
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById('chatModal');
    var btn = document.querySelector('.chat-button');
    var span = document.getElementsByClassName("close")[0];

    function openModal() {
        modal.style.display = "block";
        modal.style.top = (window.pageYOffset + 100) + "px"; // Adjusted top position
    }

    function closeModal() {
        modal.style.display = "none";
    }

    btn.onclick = openModal;
    span.onclick = closeModal;

    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});


