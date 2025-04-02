$(document).ready(function () {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const timeString = hours + ":" + minutes + ":" + seconds;
        $('#digital-clock').text(timeString);
    }

    setInterval(updateClock, 1000);
});
