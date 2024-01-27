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
function createMinorButton(type: "back" | "info", infoContent: string = "") {
  const mButton: HTMLButtonElement = document.createElement("button");
  mButton.type = "button";
  if (type == "back") {
    mButton.classList.add("button-back");
    mButton.addEventListener("click", backButtonAction);
    const img: HTMLImageElement = document.createElement("img");
    img.classList.add("button-icon");
    img.src = "icons/back.svg";
    img.alt = "Back";
    mButton.appendChild(img);
  } else {
    mButton.classList.add("button-info");
    mButton.addEventListener("click", () => { if (title) title.innerText = infoContent });
    mButton.innerText = "i";
  }
  questionsUI?.appendChild(mButton);
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
      const infoButton: HTMLElement | null = document.querySelector(".button-info");
      infoButton?.remove();
      clearScreen(800, void 0, MenuScreens.Title);
      setTimeout(() => clearElement(main), 800);
      setTimeout(() => createTitleScreen(), 800);
      break;
  }
  this.remove();
}