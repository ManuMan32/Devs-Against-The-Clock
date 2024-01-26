// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Diverse functions that read answers

function checkAnswer(button: HTMLElement, id: number): boolean {
  const userAnswer: string = button.innerText;
  return userAnswer == questions[id].answer;
}

function requestAnswer(value: boolean): void {
  const answerContainer: HTMLElement = buildElement("div", "answer-container");
  const answer: HTMLElement = buildElement("div", "answer");
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
  nextQuestion((value) ? 1000 : 1500);
  if (buttonsRow) {
    setTimeout(() => buttonsRow.style.opacity = "1", 5);
    setTimeout(() => buttonsRow.style.opacity = "0", (value) ? 500 : 1000);
    if (!value) {
      for (let j in buttonsRow.children) {
        if (parseInt(j).toString() != "NaN") {
          const val = parseInt(j);
          const element: HTMLElement | null = document.querySelector(`.buttons-row .button-option:nth-child(${val + 1})`);
          if (element) {
            if (element.innerText == questions[actualQuestion].answer) element.classList.add("button-blocked-correct");
          }
        }
      }
    }
  }
  const title = document.querySelector(".title");
  title?.appendChild(answerContainer);
  setTimeout(() => answerContainer.remove(), 2000);
}
function nextQuestion(clearTime: number): void {
  clearScreen(clearTime);
  let newId = Math.floor(Math.random() * questions.length)
  while (true) {
    if (recentQuestionsQueue.includes(newId)) newId = Math.floor(Math.random() * questions.length);
    else {
      setTimeout(() => createQuestionScreen(newId), clearTime + 250);
      break;
    }
  }
}