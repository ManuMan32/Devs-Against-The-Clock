// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Diverse functions that read answers

// Receives a button and the id of the question, returns a boolean depending on whether the button's answer is correct
function checkAnswer(button: HTMLElement, id: number): boolean {
  const userAnswer: string = button.innerText;
  return userAnswer == questions[id].answer;
}
// Creates the answer animation
function requestAnswer(value: boolean): void {
  const answerContainer: HTMLElement = buildElement("div", "answer-container");
  const answer: HTMLElement = buildElement("div", "answer");
  const answerSpan: HTMLElement = buildElement("span", "answer-span",
    (value) ? ((lang == 0) ? "Correct!" : "Correcto!") : ((lang == 0) ? "Incorrect!" : "Incorrecto!")
  );
  answer.classList.add((value) ? "ans-correct" : "ans-incorrect");
  answer.appendChild(answerSpan);
  answerContainer.appendChild(answer);
  if (value) {
    modifyTime(incrementTime, "add");
    points += 100;
    correctAnswers++;
    sfx(SFXCorrect, "play");
  } else {
    modifyTime(decrementTime, "subtract");
    points -= 50;
    sfx(SFXIncorrect, "play");
  }
  totalAnswers++;
  refreshUI();
  if (clockBar) {
    clockBar.style.animation = ".8s ease-out forwards " + ((value) ? "co" : "inco") + "rrectBarPulse";
    setTimeout(() => { if (clockBar) clockBar.style.animation = "none" }, 1500);
  }
  nextQuestion((value) ? 1000 : 1500);
  if (buttonsRow) {
    setTimeout(() => { if (buttonsRow) buttonsRow.style.opacity = "1" }, 5);
    setTimeout(() => { if (buttonsRow) buttonsRow.style.opacity = "0" }, (value) ? 500 : 1000);
    // Highlights the correct answer
    for (let j in buttonsRow.children) {
      if (parseInt(j).toString() != "NaN") {
        const val = parseInt(j);
        const element: HTMLElement | null = document.querySelector(`.buttons-row .button-option:nth-child(${val + 1})`);
        if (element) {
          if (element.innerText == questions[actualQuestion].answer) element.classList.toggle("button-blocked-correct", true);
        }
      }
    }
  }
  const title = document.querySelector(".title");
  title?.appendChild(answerContainer);
  setTimeout(() => answerContainer.remove(), 2000);
}
// Clears the screen and creates a new question with a random ID
function nextQuestion(clearTime: number): void {
  clearScreen(clearTime);
  let newId = Math.floor(Math.random() * questions.length)
  // Checks if the ID is unique and not in the recent questions queue (to not repeat questions)
  while (true) {
    if (recentQuestionsQueue.includes(newId)) newId = Math.floor(Math.random() * questions.length);
    else {
      setTimeout(() => createQuestionScreen(newId), clearTime + 250);
      break;
    }
  }
}