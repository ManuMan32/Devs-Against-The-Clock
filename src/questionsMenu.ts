// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// This controls the questions menu

let page = 0;
const questionsPerPage = 4;

// Creates the menu of questions after cleaning the entire screen
function createQuestionsMenu(): void {
  const newQuestionUI = buildElement("section");
  newQuestionUI.id = "questions-ui";
  const newTitle = buildElement("div", "title", (lang == 0) ? "Game questions list" : "Lista de preguntas del juego");
  const questionsContainer = buildElement("div", "questions-container");
  // Left button for question list control
  const leftButton = document.createElement("button");
  leftButton.type = "button";
  leftButton.classList.add("button-left");
  leftButton.addEventListener("click", function() {
    if (!this.classList.contains("button-blocked")) newPage(-1);
  });
  const lImgButton = document.createElement("img");
  lImgButton.classList.add("button-icon");
  lImgButton.src = "icons/play.svg";
  lImgButton.alt = "Left";
  lImgButton.style.transform = "scaleX(-1)";
  leftButton.appendChild(lImgButton);
  questionsContainer.appendChild(leftButton);
  // Question list
  const questionsList = buildElement("div", "questions-list");
  questionsList.appendChild(buildQuestionsList());
  questionsContainer.appendChild(questionsList);
  // Right button for question list control
  const rightButton = document.createElement("button");
  rightButton.type = "button";
  rightButton.classList.add("button-right");
  rightButton.addEventListener("click", function() {
    if (!this.classList.contains("button-blocked")) newPage(1);
  });
  const rImgButton = document.createElement("img");
  rImgButton.classList.add("button-icon");
  rImgButton.src = "icons/play.svg";
  rImgButton.alt = "Left";
  rightButton.appendChild(rImgButton);
  questionsContainer.appendChild(rightButton);
  // Miscellaneous things
  setTimeout(() => questionsContainer.style.opacity = "1", 200);
  title = newTitle;
  newQuestionUI.appendChild(newTitle);
  newQuestionUI.appendChild(questionsContainer);
  questionsUI = newQuestionUI;
  main?.appendChild(newQuestionUI);
  updateButtons();
  createBackButton();
}
// Creates the question list depending on the current page
function buildQuestionsList(): DocumentFragment {
  const fragment = document.createDocumentFragment();
  let buildingQuestion = 0;
  while(buildingQuestion < 4) {
    const id = buildingQuestion + (questionsPerPage * page);
    const object: Question = questions[id];
    if (object) {
      const q = buildElement("div", "question");
      const qId = buildElement("span", "question-id", (id + 1).toString());
      const qTitle = buildElement("span", "question-title", object.statement);
      const qOptions = buildElement("div", "question-options");
      const qRightAnswer = buildElement("span", "question-option", object.answer);
      qRightAnswer.classList.add("question-answer");
      qOptions.appendChild(qRightAnswer);
      object.options.forEach(op => {
        const option = buildElement("span", "question-option", op);
        qOptions.appendChild(option);
      })
      q.appendChild(qId);
      q.appendChild(qTitle);
      q.appendChild(qOptions);
      fragment.appendChild(q);
    }
    buildingQuestion++;
  }
  updateButtons();
  return fragment;
}
// Creates a new page (button function)
function newPage(increment: number): void {
  page += increment;
  const questionsList = document.querySelector(".questions-list");
  clearElement(questionsList);
  questionsList?.appendChild(buildQuestionsList());
}
// Updates the buttons after a new page is changed (to see if they should block or not)
function updateButtons() {
  // Checks if page < 0, then blocks the left button
  const leftButton = document.querySelector(".button-left");
  if (page - 1 < 0) leftButton?.classList.add("button-blocked");
  else leftButton?.classList.toggle("button-blocked", false);
  // Checks if page > questionsOverflow, then blocks the right button
  const rightButton = document.querySelector(".button-right");
  const checkOverflow = (questions.length < questionsPerPage * (page + 1));
  if (checkOverflow) rightButton?.classList.add("button-blocked");
  else rightButton?.classList.toggle("button-blocked", false);
}