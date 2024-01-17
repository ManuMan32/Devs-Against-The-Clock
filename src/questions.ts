//Questions of Devs Against The Clock

type Question = {
  readonly id: number
  statement: string
  answer: string
  options: string[]
}
const questions: Question[] = [];
function createQuestion(statement: string, answer: string, options: string[]): Question {
  return { id: (questions.length + 1), statement, answer, options }
}
let lang: 0 | 1 = 0;

// 1
questions.push(createQuestion (
  (lang == 0) ? "Which of these technologies is NOT a framework?" : "¿Cuál de estas tecnologías NO ES un framework?",
  "TypeScript",
  ["React","Bootstrap","Vue"]
));
// 2
questions.push(createQuestion (
  (lang == 0) ? "What 'CSS' stands for?" : "¿Qué significa 'CSS'?",
  "Cascading StyleSheets",
  ["Colorful Web Styles","Cascading SurfaceS","Colorful Sintax Statements"]
));
// 3
questions.push(createQuestion (
  (lang == 0) ? "Which of these HTML tags is obsolete?" : "¿Cuál de estas etiquetas HTML está obsoleta?",
  "<marqueue>",
  ["<meter>","<summary>","<div>"]
));
// 4
questions.push(createQuestion (
  (lang == 0) ? "Which of these is NOT a CSS property?" : "¿Cuál de estas NO es una propiedad de CSS?",
  "transition-offset",
  ["aspect-ratio","flex-shrink","isolation"]
));
// 5
questions.push(createQuestion (
  "<link rel='_______' href='styles.css'>",
  "stylesheet",
  ["text/css","css","style"]
));
// 6
questions.push(createQuestion (
  (lang == 0) ? "Which of these is NOT a JavaScript API?" : "¿Cuál de estas NO es una API de JavaScript?",
  "FileLoader",
  ["IndexedDB","MatchMedia","IntersectionObserver"]
));
// 7
questions.push(createQuestion (
  (lang == 0) ? "In ES06 strict mode, can you declare a variable with 'var'?" : "En el modo estricto de ES06 ¿Se puede declarar una variable con 'var'?",
  (lang == 0) ? "Yes" : "Sí",
  (lang == 0) ? ["No, only let and const"] : ["No, solo con let y const"]
));
// 8
questions.push(createQuestion (
  (lang == 0) ? "In JavaScript, there are reserved words that you cannot use as variable names." : "En JavaScript, hay palabras reservadas que no puedes usar como nombres de variables.",
  (lang == 0) ? "Only in strict mode" : "Solo en el modo estricto",
  (lang == 0) ? ["True","False"] : ["Verdadero","Falso"]
));
// 9
questions.push(createQuestion (
  (lang == 0) ? "Which of these is the ternary operator?" : "¿Cuál de estos es el operador ternario?",
  "?",
  ["$","...","&&"]
));
// 10
questions.push(createQuestion (
  (lang == 0) ? "If I run 'console.log(true + true)' what will the console show me?" : "Si ejecuto 'console.log(true + true)' ¿Qué me mostrará la consola?",
  "2",
  ["true","1","NaN"]
));
// 11
questions.push(createQuestion (
  (lang == 0) ? "What is the name of the JavaScript event that is called when the right click is pressed?" : "¿Qué nombre tiene el evento de JavaScript que se llama cuando se pulsa el click derecho?",
  "contextmenu",
  ["mouseright","clickright","showoptions"]
));
// 12
questions.push(createQuestion (
  (lang == 0) ? "'body:not(p)' selects all children of body that are not a 'p' element." : "'body:not(p)' selecciona a todos los hijos de body que no sean un elemento 'p'.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 13
questions.push(createQuestion (
  (lang == 0) ? "What 'DOM' stands for?" : "¿Qué significa 'DOM'?",
  "Document Object Model",
  ["Document Order Manipulation","Data Order Model","Document Order Model"]
));
// 14
questions.push(createQuestion (
  (lang == 0) ? "Which of these is a string method?" : "¿Cuál de estos es un método de string?",
  "string.split()",
  ["string.reduce()","string.reverse()","string.power()"]
));
// 15
questions.push(createQuestion (
  (lang == 0) ? "If I run 'console.log(!4)' what will the console show me?" : "Si ejecuto 'console.log(!4)' ¿Qué me mostrará la consola?",
  "false",
  ["-4","TypeError","24"]
));