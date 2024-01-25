// General Script of Devs Against The Clock
// ---- Variables ----
const questionsUI: HTMLElement | null = document.getElementById("questions-ui");
const footerUI: HTMLElement | null = document.getElementById("footer-ui");
enum MenuScreens {
  Title,
  Difficulties,
  Question
}
let actualScreen: MenuScreens = MenuScreens.Title;
let lang: 0 | 1 = 0;
let correctLang: string = "Correct!";
let incorrectLang: string = "Incorrect!";
const recentQuestionsQueue: number[] = [];
let actualQuestion: number;
enum Difficulty {
  Easy = "easy",
  Normal = "normal",
  Hard = "hard",
  Expert = "expert"
}
let incrementTime = 7;
let decrementTime = 3;

let points = 0;
let correctAnswers = 0;
let totalAnswers = 0;

// ---- Button Listeners ----

const buttonPlay: HTMLElement | null = document.getElementById("button-play");
buttonPlay?.addEventListener("click", function() {
  if (!this.classList.contains("button-blocked")) clearScreen(1250, createDifficultiesScreen, MenuScreens.Difficulties);
});

// ---- FUNCTIONS ----
// ---- Question Functions ----

function buildElement(type: string, eClass: string, eText: string): HTMLElement {
  const e: HTMLElement = document.createElement(type);
  e.classList.add(eClass);
  e.innerText = eText;
  return e;
}

    // ---- CLEAR SCREEN FUNCTIONS ----
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
  const buttonsRow: HTMLElement | null = document.querySelector(".buttons-row");
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

    // ---- CREATE SCREEN FUNCTIONS
function createDifficultiesScreen(): void {
  const questionTitle: HTMLElement | null = document.querySelector(".title");
  if (questionTitle) questionTitle.innerText = (lang == 0) ? "Select the difficulty" : "Selecciona la dificultad";
  const buttonsRow: HTMLElement | null = document.querySelector(".buttons-row");
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

function checkAnswer(button: HTMLElement, id: number): boolean {
  const userAnswer: string = button.innerText;
  return userAnswer == questions[id].answer;
}

function requestAnswer(value: boolean): void {
  const answerContainer: HTMLElement = buildElement("div", "answer-container", "");
  const answer: HTMLElement = buildElement("div", "answer", "");
  const answerSpan: HTMLElement = buildElement("span", "answer-span", (value) ? correctLang : incorrectLang);
  answer.classList.add((value) ? "ans-correct" : "ans-incorrect");
  answer.appendChild(answerSpan);
  answerContainer.appendChild(answer);
  if (value) {
    modifyTime(incrementTime, "add");
    points += 100;
    correctAnswers++;
  } else {
    modifyTime(decrementTime, "subtract");
    points -= 50;
  }
  totalAnswers++;
  refreshUI();
  if (clockBar) {
    clockBar.style.animation = ".8s ease-out forwards " + ((value) ? "co" : "inco") + "rrectBarPulse";
    setTimeout(() => clockBar.style.animation = "none", 1500);
  }
  nextQuestion();
  const buttonsRow: HTMLElement | null = document.querySelector(".buttons-row");
  if (buttonsRow) {
    setTimeout(() => buttonsRow.style.opacity = "1", 5);
    setTimeout(() => buttonsRow.style.opacity = "0", 500);
    if (!value) {
      for (let i in buttonsRow.children) {
        const element = buttonsRow.children[parseInt(i)];
        if (typeof element == "object") {
          if (element.innerHTML == questions[actualQuestion].answer) element.classList.add("button-blocked-correct");
        }
      }
    }
  }
  const title = document.querySelector(".title");
  title?.appendChild(answerContainer);
  setTimeout(() => answerContainer.remove(), 2000);
}

function nextQuestion(): void {
  clearScreen(1000);
  let newId = Math.floor(Math.random() * questions.length)
  while (true) {
    if (recentQuestionsQueue.includes(newId)) newId = Math.floor(Math.random() * questions.length);
    else {
      setTimeout(() => createQuestionScreen(newId), 1250);
      break;
    }
  }
}

function refreshUI() {
  const pointsSpan = document.getElementById("points");
  const correctAnswersSpan = document.getElementById("correct-answers");
  const totalAnswersSpan = document.getElementById("total-answers");
  if (pointsSpan) pointsSpan.innerText = points.toString();
  if (correctAnswersSpan) correctAnswersSpan.innerText = correctAnswers.toString();
  if (totalAnswersSpan) totalAnswersSpan.innerText = totalAnswers.toString();
}

// ---- General Functions ----

function changeLanguage(value: 0 | 1): void {
  lang = value;
  correctLang = (lang == 0) ? "Correct!" : "Correcto!";
  incorrectLang = (lang == 0) ? "Incorrect!" : "Incorrecto!";
}

function changeDifficulty(index: Difficulty) {
  switch (index) {
    case Difficulty.Easy:
    default:
      incrementTime = 7; decrementTime = 3;
      break;
    case Difficulty.Normal:
      incrementTime = 6; decrementTime = 4;
      break;
    case Difficulty.Hard:
      incrementTime = 5; decrementTime = 5;
      break
    case Difficulty.Expert:
      incrementTime = 4; decrementTime = 6;
      break;
  }
}
changeDifficulty(Difficulty.Normal);