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
  const leftButton = document.createElement("button");
  leftButton.type = "button";
  leftButton.addEventListener("click", () => newPage(-1));
  questionsContainer.appendChild(leftButton);
  const questionsList = buildElement("div", "questions-list");
  questionsList.appendChild(buildQuestionsList());
  questionsContainer.appendChild(questionsList);
  const rightButton = document.createElement("button");
  rightButton.type = "button";
  rightButton.addEventListener("click", () => newPage(1));
  questionsContainer.appendChild(rightButton);
  setTimeout(() => questionsContainer.style.opacity = "1", 200);
  title = newTitle;
  newQuestionUI.appendChild(newTitle);
  newQuestionUI.appendChild(questionsContainer);
  questionsUI = newQuestionUI;
  main?.appendChild(newQuestionUI);
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
  return fragment;
}
// Creates a new page (button function)
function newPage(increment: number): void {
  page += increment;
  const questionsList = document.querySelector(".questions-list");
  clearElement(questionsList);
  questionsList?.appendChild(buildQuestionsList());
}