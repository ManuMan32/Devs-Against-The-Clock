// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Script that controls the functionality of the clock

// Variables
const clock: HTMLElement | null = document.querySelector(".clock");
const clockBar: HTMLElement | null = document.querySelector(".clock-bar");
let maxTime = 30;
let time = 30;
let timerStarted = false;
let timer: number;

// Functions
function createTimerInterval(stop = false) {
  updateClock();
  if (stop) clearInterval(timer);
  else {
    timer = setInterval(timerFunction, 100)
    if (clock) clock.style.opacity = "1";
    if (footerUI) footerUI.style.opacity = "1";
  };
}
function timerFunction() {
  time -= 0.1;
  updateClock();
  if (time <= 0) timeIsOut();
}
function updateClock() {
  const barPercentage = (time / maxTime) * 100;
  if (clockBar) clockBar.style.width = `${barPercentage}%`;
}
function modifyTime(timeAdd: number, operation: "add" | "subtract") {
  switch (operation) {
    case "add": time += timeAdd; break;
    case "subtract": time -= timeAdd; break;
  }
  if (time > maxTime) time = maxTime;
  updateClock();
}
function timeIsOut() {
  gamePlaying = false;
  createTimerInterval(true);
  time = maxTime;
  updateClock();
  if (clock) clock.style.opacity = "0";
  if (footerUI) footerUI.style.opacity = "0";
  if (questionsUI) {
    questionsUI.style.animation = "1s ease forwards pulseScreen";
    setTimeout(() => questionsUI.style.animation = "none", 1100);
    questionsUI.appendChild(createIconAnimation());
  }
  if (title) {
    title.style.animation = "1s ease forwards pulseTitle";
    setTimeout(() => title.style.animation = "none", 1100);
  }
  clearScreen(1900, createGameOverScreen, MenuScreens.GameOver);
}

updateClock();