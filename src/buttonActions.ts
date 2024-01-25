// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Button Events Listeners

// Title buttons
const buttonPlay: HTMLElement | null = document.getElementById("button-play");
buttonPlay?.addEventListener("click", buttonPlayFunction);
function buttonPlayFunction(this: HTMLElement) {
  if (!this.classList.contains("button-blocked")) clearScreen(1250, createDifficultiesScreen, MenuScreens.Difficulties);
}

// Back button
function createBackButton() {
  const backButton: HTMLButtonElement = document.createElement("button");
  backButton.classList.add("button-back");
  backButton.type = "button";
  backButton.addEventListener("click", backButtonAction);
  const img: HTMLImageElement = document.createElement("img");
  img.classList.add("button-icon");
  img.src = "icons/back.svg";
  img.alt = "Back";
  backButton.appendChild(img);
  questionsUI?.appendChild(backButton);
}
function backButtonAction(this: HTMLElement) {
  switch (actualScreen) {
    case MenuScreens.Difficulties:
    case MenuScreens.GameOver:
      clearScreen(800, createTitleScreen, MenuScreens.Title);
      break;
  }
  this.remove();
}