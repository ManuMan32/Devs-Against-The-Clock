// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// General Script

// Variables
const root = document.documentElement;
const main = document.getElementById("screen");
let questionsUI: HTMLElement | null = document.getElementById("questions-ui");
let footerUI: HTMLElement | null = document.getElementById("footer-ui");
let title: HTMLElement | null = document.querySelector(".title");
let buttonsRow: HTMLElement | null = document.querySelector(".buttons-row");
const enum MenuScreens {
  LanguageSelect = "languageselect",
  Title = "title",
  QuestionsList = "questionslist",
  Settings = "settings",
  Difficulties = "difficulties",
  Question = "question",
  GameOver = "gameover"
}
let actualScreen: MenuScreens = MenuScreens.Title;
let gamePlaying = false;
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

// SFX
type sfx = HTMLAudioElement | null;
const SFXClick: sfx = document.querySelector("#SFXclick");
const SFXClock: sfx = document.querySelector("audio #SFXclock");
const SFXCorrect: sfx = document.querySelector("audio #SFXcorrect");
const SFXIncorrect: sfx = document.querySelector("audio #SFXincorrect");

// Options
const themes: [string, string][] = [
  ["#6b6b6b44", "#dedede44"],
  ["#995500af", "#bb6600af"],
  ["#559900af", "#66bb00af"],
  ["#5599aaaf", "#66bbccaf"],
  ["#9955aaaf", "#bb66ccaf"]
]
let actualTheme: [string, string] = themes[0];
let soundEffects = true;
let invertClockAndPoints = false;
let lang: 0 | 1 = 0;
let saveSettings = true;

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
// Reload questions, used for language settings
function loadQuestions() {
  // Deletes the previous question script if it exists
  const prevScript = document.querySelector('script[src="dist/questions.js"]');
  if (prevScript) prevScript.remove();
  // Creates a new questions script
  const questionsScript = document.createElement("script");
  questionsScript.src = "dist/questions.js";
  document.body.appendChild(questionsScript);
}
function refreshUI() {
  const pointsSpan = document.getElementById("points");
  const correctAnswersSpan = document.getElementById("correct-answers");
  const totalAnswersSpan = document.getElementById("total-answers");
  if (pointsSpan) pointsSpan.innerText = points.toString();
  if (correctAnswersSpan) correctAnswersSpan.innerText = correctAnswers.toString();
  if (totalAnswersSpan) totalAnswersSpan.innerText = totalAnswers.toString();
}
function resetGame() {
  points = 0;
  totalAnswers = 0;
  correctAnswers = 0;
}
function sfx(audio: sfx, action: "play" | "stop"): void {
  if (audio && soundEffects) {
    if (action == "play") audio.play();
    else audio.pause();
    audio.currentTime = 0;
  }
}
function changeLanguage(value: 0 | 1): void {
  lang = value;
  correctLang = (lang == 0) ? "Correct!" : "Correcto!";
  incorrectLang = (lang == 0) ? "Incorrect!" : "Incorrecto!";
  loadQuestions();
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