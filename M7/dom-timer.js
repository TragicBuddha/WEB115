// Grab all of our elements from HTML to work with
const startTimerButton = document.getElementById("startTimer");
const stopTimerButton = document.getElementById("stopTimer");
const resetTimerButton = document.getElementById("resetTimer");
const timerDisplay = document.getElementById("timerDisplay")


// Declare timer and id variable
let currentTime = 0;
let timerId = null;


// Create an event listener for the start button
// that will call setInterval and update display as we increment the time
startTimerButton.addEventListener("click", function() {
    if (timerId === null) {
        timerId = setInterval(function() {
            currentTime = currentTime + 1;
            updateDisplay();
        }, 1000);
    }
});


// Create an event listener for the stop button
// the timerId check here is so we can click the stop as many times as we want and it wont reset anything
// if a timer has not be started
stopTimerButton.addEventListener("click", function() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
});


// Create an event listener for the reset button
// This will reset and stop our time interval every time we press it
resetTimerButton.addEventListener("click", function() {
    clearInterval(timerId);
    timerId = null;
    currentTime = 0;
    updateDisplay();
});


// Function that will update our time display
// using the innerHTML method
function updateDisplay() {
    timerDisplay.innerHTML = currentTime
}