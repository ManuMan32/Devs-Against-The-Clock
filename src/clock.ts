// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Script that controls the functionality of the clock

// Variables
let maxTime = 30;
let time = 30;
let timerStarted = false;
let timer: number;

// Functions
// Starts the interval and declares its value in "timer", also can stop it
function createTimerInterval(stop = false) {
  updateClock();
  if (stop) clearInterval(timer);
  else {
    timer = setInterval(timerFunction, 100)
    if (clock) clock.style.opacity = "1";
    if (footerUI) footerUI.style.opacity = "1";
  };
}
// Function that will be called in the timer interval
function timerFunction() {
  time -= 0.1;
  updateClock();
  if (time <= 0) timeIsOut();
}
// Updates the clock HTML
function updateClock() {
  const barPercentage = (time / maxTime) * 100;
  if (clockBar) clockBar.style.width = `${barPercentage}%`;
}
// Adds or subtracts time from the clock
function modifyTime(timeAdd: number, operation: "add" | "subtract") {
  switch (operation) {
    case "add": time += timeAdd; break;
    case "subtract": time -= timeAdd; break;
  }
  if (time > maxTime) time = maxTime;
  updateClock();
}
// Function that will be called when the time is out
function timeIsOut() {
  gamePlaying = false;
  createTimerInterval(true); // Stops the inteval
  time = maxTime;
  updateClock();
  if (clock) clock.style.opacity = "0";
  if (footerUI) footerUI.style.opacity = "0";
  if (questionsUI) {
    questionsUI.style.animation = "1s ease forwards pulseScreen";
    setTimeout(() => { if (questionsUI) questionsUI.style.animation = "none" }, 1100);
    questionsUI.appendChild(createIconAnimation());
  }
  if (title) {
    title.style.animation = "1s ease forwards pulseTitle";
    setTimeout(() => { if (title) title.style.animation = "none" }, 1100);
  }
  clearScreen(1900, createGameOverScreen, MenuScreens.GameOver);
  sfx(SFXIncorrect, "play");
  sfx(SFXClock, "stop");
}
// Fills the clock before starting the game
updateClock();