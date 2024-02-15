let startTime;
    let elapsedTime = 0;
    let timerInterval;

    function startClock() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateClock, 1000);
    }

    function updateClock() {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;
        displayTime(elapsedTime);
    }

    function displayTime(time) {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60));

        const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        document.getElementById('clock').innerText = formattedTime;
    }

    function pad(num) {
        return num < 10 ? `0${num}` : num;
    }

    window.onload = startClock;


    //

   