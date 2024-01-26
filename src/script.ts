// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// General Script

// Variables
const questionsUI: HTMLElement | null = document.getElementById("questions-ui");
const footerUI: HTMLElement | null = document.getElementById("footer-ui");
const title: HTMLElement | null = document.querySelector(".title");
const buttonsRow: HTMLElement | null = document.querySelector(".buttons-row");
enum MenuScreens {
  Title = "title",
  Difficulties = "difficulties",
  Question = "question",
  GameOver = "gameover"
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

// General Functions
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