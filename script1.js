let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0, minute = 0, second = 0, count = 0, timer = false;

startBtn.addEventListener('click', function () {
    if (!timer) {
        timer = true;
        stopWatch();
    }
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = minute = second = count = 0;
    updateDisplay();
});

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
        updateDisplay();
        setTimeout(stopWatch, 10);
    }
}

function updateDisplay() {
    document.getElementById('hr').innerText = hour.toString().padStart(2, '0');
    document.getElementById('min').innerText = minute.toString().padStart(2, '0');
    document.getElementById('sec').innerText = second.toString().padStart(2, '0');
    document.getElementById('count').innerText = count.toString().padStart(2, '0');
}
