// Script that controls the functionality of the clock

const clock: HTMLElement | null = document.querySelector(".clock");
const clockBar: HTMLElement | null = document.querySelector(".clock-bar");
let maxTime = 30;
let time = 4;

function updateClock() {
  const barPercentage = (time / maxTime) * 100;
  if (clockBar) clockBar.style.width = `${barPercentage}%`;
}
updateClock();