// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Button Events Listeners

// Hi, if you ever read this code, Manu from the past says that this is the only script on the page that doesn't make any sense. I reviewed it like 4 times and I don't even understand how I could write this ugly code. At least it's experience, I'm not going to do this again XDDD

// Language button
function addLangButtonFunction(element: HTMLElement, langSet: 0 | 1): void {
  if (!element.classList.contains("button-blocked")) {
    element.addEventListener("click", () => {
      if (title) title.style.opacity = "0";
      if (buttonsRow) buttonsRow.style.opacity = "0";
      clearScreen(800, void 0, MenuScreens.Title);
      setTimeout(() => clearElement(main), 800);
      setTimeout(() => createTitleScreen(), 800);
      changeLanguage(langSet);
      sfx(SFXClick, "play");
    });
  }
}
const englishButton: HTMLElement | null = document.getElementById("button-english");
const spanishButton: HTMLElement | null = document.getElementById("button-spanish");
if (englishButton) addLangButtonFunction(englishButton, 0);
if (spanishButton) addLangButtonFunction(spanishButton, 1);
// Title buttons
function buttonQuestionsFunction(this: HTMLElement) {
  if (!this.classList.contains("button-blocked")) {
    clearScreen(1250, void 0, MenuScreens.QuestionsList);
    setTimeout(() => {
      clearElement(main);
      createQuestionsMenu();
    }, 1250);
    sfx(SFXClick, "play");
  }
}
function buttonPlayFunction(this: HTMLElement) {
  if (!this.classList.contains("button-blocked")) {
    clearScreen(1250, createDifficultiesScreen, MenuScreens.Difficulties);
    sfx(SFXClick, "play");
  }
}
function buttonSettingsFunction(this: HTMLElement) {
  if (!this.classList.contains("button-blocked")) {
    clearScreen(1250, void 0, MenuScreens.Settings);
    setTimeout(() => {
      clearElement(main);
      createSettingsMenu();
    }, 1250);
    sfx(SFXClick, "play");
  }
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
    mButton.addEventListener("click", () => { if (title) {
      title.innerText = infoContent;
      title.classList.add("info-text");
      sfx(SFXClick, "play");
    }});
    mButton.innerText = "i";
  }
  questionsUI?.appendChild(mButton);
}
function backButtonAction(this: HTMLElement) {
  switch (actualScreen) {
    case MenuScreens.GameOver:
      const icon = document.querySelector(".title-animation");
      icon?.remove();
      resetGame();
      refreshUI();
    case MenuScreens.Difficulties:
      clearScreen(800, createTitleScreen, MenuScreens.Title);
      break;
    case MenuScreens.QuestionsList:
      if (title) title.style.opacity = "0";
      const qContainer: HTMLElement | null = document.querySelector(".questions-container");
      if (qContainer) qContainer.style.opacity = "0";
      const infoButton: HTMLElement | null = document.querySelector(".button-info");
      infoButton?.remove();
    case MenuScreens.Settings:
      const options: NodeListOf<HTMLElement> = document.querySelectorAll(".options-bar");
      if (options) options.forEach(i => i.style.opacity = "0");
      clearScreen(800, void 0, MenuScreens.Title);
      setTimeout(() => clearElement(main), 800);
      setTimeout(() => createTitleScreen(), 800);
      break;
  }
  sfx(SFXClick, "play");
  this.remove();
}