// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Button Events Listeners

// Title buttons
const buttonQuestions: HTMLElement | null = document.getElementById("button-questions");
buttonQuestions?.addEventListener("click", buttonQuestionsFunction);
function buttonQuestionsFunction(this: HTMLElement) {
  if (!this.classList.contains("button-blocked")) {
    clearScreen(1250, void 0, MenuScreens.QuestionsList);
    setTimeout(() => {
      clearElement(main);
      createQuestionsMenu();
    }, 1250);
  }
}
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
    case MenuScreens.GameOver:
      const icon = document.querySelector(".title-animation");
      icon?.remove();
    case MenuScreens.Difficulties:
      clearScreen(800, createTitleScreen, MenuScreens.Title);
      break;
    case MenuScreens.QuestionsList:
      if (title) title.style.opacity = "0";
      const qContainer: HTMLElement | null = document.querySelector(".questions-container");
      if (qContainer) qContainer.style.opacity = "0";
      clearScreen(800, void 0, MenuScreens.Title);
      setTimeout(() => clearElement(main), 800);
      setTimeout(() => createTitleScreen(), 800);
      break;
  }
  this.remove();
}