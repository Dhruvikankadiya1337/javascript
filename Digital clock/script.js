$(document).ready(function () {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const timeS = hours + ":" + minutes + ":" + seconds;
        $('#digital-clock').text(timeS);
    }

    setInterval(updateClock, 1000);
});
