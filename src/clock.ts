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
  else timer = setInterval(timerFunction, 100);
}
function timerFunction() {
  time -= 0.1;
  updateClock();
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
updateClock();