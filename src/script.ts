// General Script of Devs Against The Clock
// ---- Variables ----
const questionsUI: HTMLElement | null = document.getElementById("questions-ui");
let lang: 0 | 1 = 0;
let correctLang: string = "Correct!";
let incorrectLang: string = "Incorrect!";

// ---- Button Listeners ----
const buttonPlay: HTMLElement | null = document.getElementById("button-play");
buttonPlay?.addEventListener("click", (): void => {
  clearQuestionScreen();
});

function clearQuestionScreen(): void {
  const screenElements: NodeListOf<ChildNode> | undefined = questionsUI?.childNodes;
  screenElements?.forEach(() => screenElements[0]?.remove());

  setTimeout(() => createQuestionScreen(Math.floor(Math.random() * (questions.length+1))), 1000);
}

// ---- FUNCTIONS ----
// ---- Question Functions ----

function buildElement(type: string, eClass: string, eText: string): HTMLElement {
  const e: HTMLElement = document.createElement(type);
  e.classList.add(eClass);
  e.innerText = eText;
  return e;
}

function createQuestionScreen(id: number): void {
  // Gets the text
  const questionTitle: string = questions[id].statement;
  const questionAnswer: string = questions[id].answer;
  const questionOptions: string[] = questions[id].options;

  // Creates the principal elements
  const elQuestionTitle: HTMLElement = buildElement("span", "title", questionTitle);
  const elQuestionButtons: HTMLElement = buildElement("div", "buttons-row", "");

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
  buttons.forEach(el => elQuestionButtons.appendChild(el) );

  // Appends the principal elements
  questionsUI?.appendChild(elQuestionTitle);
  questionsUI?.appendChild(elQuestionButtons);
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
}

// ---- General Functions ----
function changeLanguage(value: 0 | 1): void {
  lang = value;
  correctLang = (lang == 0) ? "Correct!" : "Correcto!";
  incorrectLang = (lang == 0) ? "Incorrect!" : "Incorrecto!";
}