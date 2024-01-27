// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// General Script

// Variables
const main = document.getElementById("screen");
let questionsUI: HTMLElement | null = document.getElementById("questions-ui");
let footerUI: HTMLElement | null = document.getElementById("footer-ui");
let title: HTMLElement | null = document.querySelector(".title");
let buttonsRow: HTMLElement | null = document.querySelector(".buttons-row");
const enum MenuScreens {
  Title = "title",
  QuestionsList = "questionslist",
  Difficulties = "difficulties",
  Question = "question",
  GameOver = "gameover"
}
let actualScreen: MenuScreens = MenuScreens.Title;
let gamePlaying = false;
let lang: 0 | 1 = 0;
let correctLang: string = "Correct!";
let incorrectLang: string = "Incorrect!";
const recentQuestionsQueue: number[] = [];
let actualQuestion: number;
const enum Difficulty {
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

// General Functions
// Clears all childrens of an element
function clearElement(element: Element | HTMLElement | null): void {
  if (element) {
    const children = element.childNodes;
    for (let i in children) {
      if (typeof children[0] == "object") children[0].remove();
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
function changeLanguage(value: 0 | 1): void {
  lang = value;
  correctLang = (lang == 0) ? "Correct!" : "Correcto!";
  incorrectLang = (lang == 0) ? "Incorrect!" : "Incorrecto!";
}
function changeDifficulty(index: Difficulty) {
  switch (index) {
    case Difficulty.Easy:
    default:
      incrementTime = 7; decrementTime = 2;
      break;
    case Difficulty.Normal:
      incrementTime = 6; decrementTime = 3;
      break;
    case Difficulty.Hard:
      incrementTime = 5; decrementTime = 4;
      break
    case Difficulty.Expert:
      incrementTime = 4; decrementTime = 5;
      break;
  }
}
changeDifficulty(Difficulty.Normal);