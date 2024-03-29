// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// This controls the questions menu

let page = 0;
const questionsPerPage = 4;

// Creates the menu of questions after cleaning the entire screen
function createQuestionsMenu(): void {
  const newQuestionUI = buildElement("section");
  newQuestionUI.id = "questions-ui";
  // Creates the title bar
  const newTitle = buildElement("div", "title", (lang == 0) ? "Game questions list" : "Lista de preguntas del juego");
  const questionsContainer = buildElement("div", "questions-container");
  // Left button for question list control
  const leftButton = document.createElement("button");
  leftButton.type = "button";
  leftButton.classList.add("button-left");
  leftButton.addEventListener("click", function() {
    if (!this.classList.contains("button-blocked")) {
      newPage(-1);
      sfx(SFXClick, "play");
    }
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
    if (!this.classList.contains("button-blocked")) {
      newPage(1);
      sfx(SFXClick, "play");
    }
  });
  const rImgButton = document.createElement("img");
  rImgButton.classList.add("button-icon");
  rImgButton.src = "icons/play.svg";
  rImgButton.alt = "Right";
  rightButton.appendChild(rImgButton);
  questionsContainer.appendChild(rightButton);
  // Makes the container appear (animation)
  setTimeout(() => questionsContainer.style.opacity = "1", 200);
  // Appends the new UI and sets the variables
  title = newTitle;
  newQuestionUI.appendChild(newTitle);
  newQuestionUI.appendChild(questionsContainer);
  questionsUI = newQuestionUI;
  main?.appendChild(newQuestionUI);
  updateButtons(); // This is for checking if a button must be blocked when the list creates
  createMinorButton("back");
  createMinorButton("info", (lang == 0) ?
    "As you answer questions in the game, they will be saved here. You can refer back to the correct answers whenever you want."
    :
    "A medida que vayas respondiendo preguntas en el juego, estas se irán guardando aquí. Puedes volver a consultar las respuestas correctas cuando quieras."
  );
}
// Creates the question list depending on the current page
function buildQuestionsList(): DocumentFragment {
  const fragment = document.createDocumentFragment();
  let buildingQuestion = 0;
  while(buildingQuestion < 4) {
    const id = buildingQuestion + (questionsPerPage * page);
    const object: Question = questions[id];
    if (object) {
      const hasQuestion = (object.hasOwnProperty("appear")); // Checks if you answered the question before
      const q = buildElement("div", "question");
      const qId = buildElement("span", "question-id", (id + 1).toString());
      const qTitle = buildElement("span", "question-title", (hasQuestion) ? object.statement : "???");
      q.appendChild(qId);
      q.appendChild(qTitle);
      if (hasQuestion) {
        // If you answered the question before, the options are shown
        const qOptions = buildElement("div", "question-options");
        const qRightAnswer = buildElement("span", "question-option", object.answer);
        qRightAnswer.classList.add("question-answer");
        qOptions.appendChild(qRightAnswer);
        object.options.forEach(op => {
          const option = buildElement("span", "question-option", op);
          qOptions.appendChild(option);
        })
        q.appendChild(qOptions);
      }
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
  const checkOverflow = (questions.length - 1 < questionsPerPage * (page + 1));
  if (checkOverflow) rightButton?.classList.add("button-blocked");
  else rightButton?.classList.toggle("button-blocked", false);
}