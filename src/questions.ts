//Questions of Devs Against The Clock

type Question = {
  readonly id: number
  statement: string
  answer: string
  options: string[]
}
const questions: Question[] = [];
function createQuestion(statement: string, answer: string, options: string[]): Question {
  return { id: questions.length, statement, answer, options }
}

// 0
questions.push(createQuestion (
  (lang == 0) ? "CSS was invented before JavaScript" : "CSS fue inventado antes que JavaScript",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
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
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
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
// 16
questions.push(createQuestion (
  (lang == 0) ? "In HTML, do description lists exist?" : "En HTML ¿Existen las description lists?",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 17
questions.push(createQuestion (
  (lang == 0) ? "If I run 'console.log(2 == '2')' what will the console show me?" : "Si ejecuto 'console.log(2 == '2')' ¿Qué me mostrará la consola?",
  "true",
  ["false","NaN"]
));
// 18
questions.push(createQuestion (
  (lang == 0) ? '"~" is used in CSS to select a...' : '"~" es usado en CSS para seleccionar un...',
  "sibling",
  ["parent","child"]
));
// 19
questions.push(createQuestion (
  (lang == 0) ? "If I run 'console.log(parseInt('25.5'))' what will the console show me?" : "Si ejecuto 'console.log(parseInt('25.5'))' ¿Qué me mostrará la consola?",
  "25",
  ["25.5","5","0.5"]
));
// 20
questions.push(createQuestion (
  (lang == 0) ? "What method adds an element to the beginning of an array?" : "¿Qué método agrega un elemento al principio de un array?",
  "unshift",
  ["pop","shift","push"]
));
// 21
questions.push(createQuestion (
  (lang == 0) ? "With what attribute is a label connected to an input?" : "¿Con qué atributo se conecta un label a un input?",
  "for and name",
  ["name and value","for and id","id and value"]
));
// 22
questions.push(createQuestion (
  (lang == 0) ? "What method makes an object readonly?" : "¿Qué método hace que un objeto sea readonly?",
  "freeze",
  ["constant","static","setReadOnly"]
));
// 23
questions.push(createQuestion (
  (lang == 0) ? "'position: absolute' fixes an element to a specific location on the website." : "'position: absolute' fija un elemento en un lugar específico de la web.",
  (lang == 0) ? "False" : "False",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 24
questions.push(createQuestion (
  (lang == 0) ? "The ::after and ::before pseudo-elements are part of the DOM." : "Los pseudoelementos ::after y ::before forman parte del DOM.",
  (lang == 0) ? "False" : "False",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 25
questions.push(createQuestion (
  (lang == 0) ? "H1 elements in HTML have a default 'margin'." : "Los elementos h1 en HTML tienen un 'margin' predeterminado.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 26
questions.push(createQuestion (
  (lang == 0) ? "Which 'display' has a <span> element by default?" : "¿Qué 'display' tiene por defecto un elemento <span>?",
  "inline",
  ["block","inline-block","flex"]
));
// 27
questions.push(createQuestion (
  (lang == 0) ? "Does HTML support animated GIFs within an <img> element?" : "¿HTML soporta GIFs animados dentro de un elemento <img>?",
  (lang == 0) ? "Yes" : "Si",
  ["No"]
));
// 28
questions.push(createQuestion (
  (lang == 0) ? "In CSS, ':' is pseudoclass and '::' is pseudoelement." : "En CSS, ':' indica una pseudoclase y '::' indica un pseudoelemento.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 29
questions.push(createQuestion (
  (lang == 0) ? "Which of these has more specificity in CSS?" : "¿Cuál de estos tiene más especificidad en CSS?",
  "ID",
  ["classes","pseudoelements","elements"]
));
// 30
questions.push(createQuestion (
  (lang == 0) ? "With what prefix are variables declared in CSS?" : "¿Con qué prefix se declaran variables en CSS?",
  "--",
  ["-","let","var"]
));
// 31
questions.push(createQuestion (
  (lang == 0) ? "What type of data is an 'array' in JavaScript?" : "¿Qué tipo de dato es un 'array' en JavaScript?",
  "object",
  ["symbol","array","date"]
));
// 32
questions.push(createQuestion (
  (lang == 0) ? "With which operator is the power of a number calculated in JavaScript?" : "¿Con qué operador se calcula la potencia de un número en JavaScript?",
  "**",
  ["^","!","²"]
));