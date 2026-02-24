
const startTimerButton = document.getElementById("startTimer");
const stopTimerButton = document.getElementById("stopTimer");
const resetTimerButton = document.getElementById("resetTimer");
const timerDisplay = document.getElementById("timerDisplay")

let currentTime = 0;
let timerId = null;


startTimerButton.addEventListener("click", function() {
    if (timerId === null) {
        timerId = setInterval(function() {
            currentTime = currentTime + 1;
            updateDisplay();
        }, 1000);
    }
});

stopTimerButton.addEventListener("click", function() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
});


resetTimerButton.addEventListener("click", function() {
    timerId = null;
    currentTime = 0;
    updateDisplay();
});

function updateDisplay() {
    timerDisplay.innerHTML = currentTime
}