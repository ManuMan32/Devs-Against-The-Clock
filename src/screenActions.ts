// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Functions that manage the game's screen

// Principal builder function
function buildElement(type: string, eClass: string, eText: string = ""): HTMLElement {
  const e: HTMLElement = document.createElement(type);
  e.classList.add(eClass);
  e.innerText = eText;
  return e;
}

// Create Screen Functions
function createTitleScreen() {
  const h1 = buildElement("h1", "screen-reader");
  const img = document.createElement("img");
  img.id = "logo";
  img.src = "logo.png";
  img.alt = "Devs Against The Clock Logo";
  const title = document.querySelector(".title");
  if (title) {
    title.appendChild(h1);
    title.appendChild(img);
  }
  function createButtonTitle(buttonId: string, imgSrc: string, imgAlt: string, buttonFunction: VoidFunction = () => console.log("This button doesn't have any functionality yet.")): HTMLElement {
    const button = document.createElement("button");
    button.classList.add("button-menu");
    button.type = "button";
    button.id = buttonId;
    button.addEventListener("click", buttonFunction);
    const buttonIcon = document.createElement("img");
    buttonIcon.classList.add("button-icon");
    buttonIcon.src = imgSrc;
    buttonIcon.alt = imgAlt;
    button.appendChild(buttonIcon);
    return button;
  }
  if (buttonsRow) {
    buttonsRow.appendChild(createButtonTitle("button-questions", "icons/questions.svg", "Questions"));
    buttonsRow.appendChild(createButtonTitle("button-play", "icons/play.svg", "Play", buttonPlayFunction));
    buttonsRow.appendChild(createButtonTitle("button-settings", "icons/settings.svg", "Settings"));
    buttonsRow.style.opacity = "1"
  }
}
function createDifficultiesScreen() {
  const questionTitle: HTMLElement | null = document.querySelector(".title");
  if (questionTitle) questionTitle.innerText = (lang == 0) ? "Select the difficulty" : "Selecciona la dificultad";
  const difficultiesArr = (lang == 0) ? ["Easy", "Normal", "Hard", "Expert"] : ["Fácil", "Normal", "Dificil", "Experto"];
  const difficultiesEnum = [Difficulty.Easy, Difficulty.Normal, Difficulty.Hard, Difficulty.Expert];
  difficultiesArr.forEach((text, index) => {
    const difficultyButton: HTMLButtonElement = document.createElement("button");
    difficultyButton.type = "button";
    difficultyButton.classList.add("button-option");
    difficultyButton.classList.add("button-difficulty-"+difficultiesEnum[index]);
    difficultyButton.innerHTML = text;
    difficultyButton.addEventListener("click", function() {
      if (!this.classList.contains("button-blocked")) {
        changeDifficulty(difficultiesEnum[index]);
        clearScreen(1250, () => {
          createQuestionScreen(Math.floor(Math.random() * questions.length));
          createTimerInterval();
        }, MenuScreens.Question);
      }
    })
    buttonsRow?.appendChild(difficultyButton);
  })
  if (buttonsRow) buttonsRow.style.opacity = "1";
  createBackButton();
}
function createQuestionScreen(id: number): void {
  // Gets the text
  const questionTitle: HTMLElement | null = document.querySelector(".title");
  const questionAnswer: string = questions[id].answer;
  const questionOptions: string[] = questions[id].options;

  // Creates the principal elements
  (questionTitle) ? questionTitle.innerText = questions[id].statement : void 0;
  const questionButtons: HTMLElement | null = document.querySelector(".buttons-row");

  // Creates the option buttons
  const buttons: HTMLElement[] = [];
  const rightAnswer: number = Math.floor(Math.random() * (questionOptions.length + 1));
  let rightAlready: 0 | 1 = 0;
  for (let i = 0; i < questionOptions.length + 1; i++) {
    const button: HTMLButtonElement = document.createElement("button");
    button.type = "button";
    button.classList.add("button-option");
    button.innerText = (i == rightAnswer) ? questionAnswer : questionOptions[i - rightAlready];
    if (button.innerText == questionAnswer) rightAlready = 1;
    button.addEventListener("click", function() {
      if (!this.classList.contains("button-blocked")) {
        actualQuestion = id;
        const response: boolean = checkAnswer(this, id);
        this.classList.add((response) ? "button-blocked-correct" : "button-blocked-incorrect");
        requestAnswer(response);
      }
    } );
    buttons.push(button);
  }

  // Appends the option buttons
  if (questionButtons) {
    buttons.forEach(el => questionButtons.appendChild(el) );
    questionButtons.style.opacity = "1";
  }
  recentQuestionsQueue.push(id);
  if (recentQuestionsQueue.length > 40) recentQuestionsQueue.shift();
}

// Clear Screen Functions
function clearScreen(timeout: number = 1250, nextScreenFunction: VoidFunction | undefined = undefined, nextScreenType: MenuScreens | undefined = undefined): void {
  // Clears the Screen
  clearAnimation(actualScreen == MenuScreens.Title);
  // Then creates a new one
  setTimeout(() => clearQuestion(), timeout);
  if (nextScreenFunction && nextScreenType) {
    actualScreen = nextScreenType;
    setTimeout(() => { nextScreenFunction(); }, timeout + 250);
  }
}
function clearQuestion(): void {
  const screenElements: HTMLCollection | undefined = questionsUI?.children;
  let j: number = 0;
  for (let i in screenElements) {
    if (screenElements[j]) {
      (screenElements[j].classList.contains("answer-container")) ? (void 0, j++) :
      (screenElements[j].classList.contains("title")) ? (void 0, j++) :
      (screenElements[j].classList.contains("buttons-row")) ? (
        screenElements[j].childNodes.forEach(e => e.remove())
      ) :
       screenElements[j].remove();
    }
  }
}
function clearAnimation(isTitle: boolean = false): void {
  if (buttonsRow) {
    buttonsRow.style.opacity = "0";
    const buttons = buttonsRow.children;
    for (let i in buttons) {
      if (typeof buttons[i] == "object") buttons[i].classList.add("button-blocked");
    }
  }
  if (isTitle) {
    const logo: HTMLElement | null = document.getElementById("logo");
    if (logo) logo.style.animation = "0.9s cubic-bezier(.36,-0.62,.74,.27) forwards disappearLogo";
  } else {
    const title: HTMLElement | null = document.querySelector(".title");
    (title) ? title.innerText = "" : void 0;
  }
}