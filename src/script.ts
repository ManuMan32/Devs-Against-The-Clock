// General Script of Devs Against The Clock
// ---- Variables ----
const questionsUI: HTMLElement | null = document.getElementById("questions-ui");
let lang: 0 | 1 = 0;
let correctLang: string = "Correct!";
let incorrectLang: string = "Incorrect!";
const recentQuestionsQueue: number[] = [];

// ---- Button Listeners ----
const buttonPlay: HTMLElement | null = document.getElementById("button-play");
buttonPlay?.addEventListener("click", (): void => {
  const logo: HTMLElement | null = document.getElementById("logo");
  if (logo) logo.style.animation = "0.9s cubic-bezier(.36,-0.62,.74,.27) forwards disappearLogo";
  const buttonsRow: HTMLElement | null = document.querySelector(".buttons-row");
  if (buttonsRow) { buttonsRow.style.opacity = "0"; }
  setTimeout(() => clearQuestionScreen(), 1250);
  setTimeout(() => createQuestionScreen(Math.floor(Math.random() * (questions.length))), 1500);
});

// ---- FUNCTIONS ----
// ---- Question Functions ----

function buildElement(type: string, eClass: string, eText: string): HTMLElement {
  const e: HTMLElement = document.createElement(type);
  e.classList.add(eClass);
  e.innerText = eText;
  return e;
}

function clearQuestionScreen(): void {
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

function clearQuestionAnimation(): void {
  const buttonsRow: HTMLElement | null = document.querySelector(".buttons-row");
  (buttonsRow) ? buttonsRow.style.opacity = "0" : void 0;
  const title: HTMLElement | null = document.querySelector(".title");
  (title) ? title.innerText = "" : void 0;
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
  const rightAnswer: number = Math.floor(Math.random() * (questionOptions.length+1));
  let rightAlready: 0 | 1 = 0;
  for (let i = 0; i < questionOptions.length + 1; i++) {
    const button: HTMLButtonElement = document.createElement("button");
    button.type = "button";
    button.classList.add("button-option");
    button.innerText = (i == rightAnswer) ? questionAnswer : questionOptions[i - rightAlready];
    if (button.innerText == questionAnswer) rightAlready = 1;
    button.addEventListener("click", function() {
      const response: boolean = checkAnswer(this, id);
      requestAnswer(response);
    } );
    buttons.push(button);
  }

  // Appends the option buttons
  if (questionButtons) {
    buttons.forEach(el => questionButtons.appendChild(el) );
    questionButtons.style.opacity = "1";
  }
  recentQuestionsQueue.push(id);
  if (recentQuestionsQueue.length > 10) recentQuestionsQueue.shift();
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
  questionsUI?.appendChild(answerContainer);
  nextQuestion();
  setTimeout(() => answerContainer.remove(), 2000);
}

function nextQuestion(): void {
  clearQuestionAnimation();
  setTimeout(() => clearQuestionScreen(), 1000);
  let newId = Math.floor(Math.random() * questions.length)
  while (true) {
    if (recentQuestionsQueue.includes(newId)) newId = Math.floor(Math.random() * questions.length);
    else {
      setTimeout(() => createQuestionScreen(newId), 2000);
      break;
    }
  }
}

// ---- General Functions ----
function changeLanguage(value: 0 | 1): void {
  lang = value;
  correctLang = (lang == 0) ? "Correct!" : "Correcto!";
  incorrectLang = (lang == 0) ? "Incorrect!" : "Incorrecto!";
}