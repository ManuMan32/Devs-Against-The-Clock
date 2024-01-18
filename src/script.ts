// General Script of Devs Against The Clock
// ---- Variables ----
const questionsUI: HTMLElement | null = document.getElementById("questions-ui");

// ---- Button Listeners ----
const buttonPlay: HTMLElement | null = document.getElementById("button-play");
buttonPlay?.addEventListener("click", (): void => {
  clearQuestionScreen();
});

function clearQuestionScreen(): void {
  const screenElements: NodeListOf<ChildNode> | undefined = questionsUI?.childNodes;
  screenElements?.forEach(() => screenElements[0]?.remove());

  setTimeout(() => createQuestionScreen(3), 1000);
}

// ---- Functions ----

function createQuestionScreen(id: number): void {
  // Gets the text
  const questionTitle: string = questions[id].statement;
  const questionAnswer: string = questions[id].answer;
  const questionOptions: string[] = questions[id].options;

  // Creates the principal elements
  const elQuestionTitle: HTMLElement = document.createElement("span");
  elQuestionTitle.classList.add("title");
  elQuestionTitle.innerText = questionTitle;
  const elQuestionButtons: HTMLElement = document.createElement("div");
  elQuestionButtons.classList.add("buttons-row");

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
    buttons.push(button);
  }

  // Appends the option buttons
  buttons.forEach(el => elQuestionButtons.appendChild(el) );

  // Appends the principal elements
  questionsUI?.appendChild(elQuestionTitle);
  questionsUI?.appendChild(elQuestionButtons);
}