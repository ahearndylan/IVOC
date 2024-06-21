document.addEventListener('DOMContentLoaded', function () {
    var maxValue = 350;
    var currentValue = 244;
    var elem = document.getElementById('impactProgressBar');
    var width = 0;
    var startTime = null;

    function frame(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        width = Math.min(progress / 10, currentValue); 

        elem.style.width = (width / maxValue) * 100 + '%';
        elem.innerHTML = currentValue + ' youth impacted since 2021';

        if (width < currentValue) {
            requestAnimationFrame(frame);
        }
    }

    requestAnimationFrame(frame);
});
