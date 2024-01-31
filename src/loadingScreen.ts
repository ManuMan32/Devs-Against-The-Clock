// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Script that creates the loading screen

let playedBefore: boolean; // Sends information to another script if the game has been played before
playedBefore = (localStorage.getItem("DATClang") != null);

// Creates the necessary DOM elements
const animationScreen: HTMLElement = document.createElement("div");
animationScreen.classList.add("screen-animation");
const div1: HTMLElement = document.createElement("div");
div1.classList.add("screen-div");
const div2: HTMLElement = document.createElement("div");
div2.classList.add("screen-div");
const logo: HTMLImageElement = document.createElement("img");
logo.classList.add("screen-logo");
logo.src = "icons/gameicon.png";
logo.alt = "Devs Against The Clock";

// Appends them
animationScreen.appendChild(div1);
animationScreen.appendChild(div2);
animationScreen.appendChild(logo);
document.body.appendChild(animationScreen);

// Open animation
setTimeout(() => {
  logo.style.opacity = "0";
  div1.style.transform = "translateY(-100%)";
  div1.style.borderBottom = "2px solid #000";
  div2.style.transform = "translateY(100%)";
  div2.style.borderTop = "2px solid #000";
}, 1000);

// Destroys the screen
setTimeout(() => {
  animationScreen.remove();
}, 2000);