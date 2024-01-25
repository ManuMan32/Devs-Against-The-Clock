// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Questions of game

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
// 33
questions.push(createQuestion (
  (lang == 0) ? "Which of these is NOT an input type?" : "¿Cuál de estos NO es un tipo de input?",
  "select",
  ["week","radio","password"]
));
// 34
questions.push(createQuestion (
  (lang == 0) ? "Which of these HTML tags is standalone (open-only)?" : "¿Cuál de estas etiquetas HTML es de solo apertura?",
  "<img>",
  ["<html>","<textarea>","<button>"]
));
// 35
questions.push(createQuestion (
  (lang == 0) ? "Which of these pseudoclasses indicate that a link has been visited?" : "¿Cuál de estas pseudoclases indican que un link ha sido visitado?",
  ":visited",
  [":focus",":anchor",":entered"]
));
// 36
questions.push(createQuestion (
  (lang == 0) ? "Bootstrap is a JavaScript framework" : "Bootstrap es un framework de JavaScript.",
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 37
questions.push(createQuestion (
  (lang == 0) ? "CSS is mainly used for backend." : "CSS se usa para el backend principalmente.",
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 38
questions.push(createQuestion (
  (lang == 0) ? "What was the first name that JavaScript had?" : "¿Cuál fue el primer nombre que tuvo JavaScript?",
  "Mocha",
  ["ECMAScript","LiveScript","Java"]
));
// 39
questions.push(createQuestion (
  (lang == 0) ? 'Which version of JavaScript introduced the "let" keyword?' : '¿Qué versión de JavaScript introdujo la palabra clave "let"?',
  "ES06",
  ["ECMAScript 2020","ES05","ECMAScript 2018"]
));
// 40
questions.push(createQuestion (
  (lang == 0) ? 'What "HTML" stands for?' : '¿Qué significa "HTML"?',
  "HyperText Markup Language",
  ["Hyper Tag Manipulation Language","HyperText Programming Language","Hyper Tag Markup Lector"]
));
// 41
questions.push(createQuestion (
  (lang == 0) ? "React is a JavaScript framework." : "React es un framework de JavaScript.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 42
questions.push(createQuestion (
  (lang == 0) ? 'Which HTML tag creates vector graphics?' : '¿Qué etiqueta HTML crea gráficos vectoriales?',
  "<svg>",
  ["<canvas>","<vector>","<picture>"]
));
// 43
questions.push(createQuestion (
  (lang == 0) ? 'What prefix is used to create a CSS animation?' : '¿Con qué prefix se crea una animación en CSS?',
  "@KeyFrames",
  ["--animation","@Animation","--keyframe"]
));
// 44
questions.push(createQuestion (
  '<meta name="viewport" content="width=__________, initial-scale=1" />',
  "device-width",
  ["media","auto","screen"]
));
// 45
questions.push(createQuestion (
  (lang == 0) ? 'What is the name of the web icon that appears in the browser tab?' : '¿Cómo se llama el icono de la web que aparece en la pestaña del navegador?',
  "favicon",
  ["web icon","image","picture"]
));
// 46
questions.push(createQuestion (
  (lang == 0) ? "The text inside an HTML tag is a TextNode." : "El texto dentro de una etiqueta HTML es un TextNode.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 47
questions.push(createQuestion (
  (lang == 0) ? "HTML is case sensitive." : "HTML es sensible a mayúsculas.",
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 48
questions.push(createQuestion (
  (lang == 0) ? 'Which of these HTML tags draws a horizontal dividing line?' : '¿Cuál de estas etiquetas HTML dibuja una linea horizontal divisora?',
  "<hr>",
  ["<br>","<hl>","<break>"]
));
// 49
questions.push(createQuestion (
  (lang == 0) ? 'How do you write comments in HTML?' : '¿Cómo se escriben comentarios en HTML?',
  "<!-- -->",
  ["<comment>","<-- -->","<// >"]
));
// 50
questions.push(createQuestion (
  (lang == 0) ? 'Which of these is a hexadecimal color?' : '¿Cuál de estos es un color hexadecimal?',
  "#44a3cc",
  ["red","hex(3, 7, 9)","rgb(2, 5, 6)"]
));
// 51
questions.push(createQuestion (
  (lang == 0) ? 'Which of these is NOT a JavaScript datatype?' : '¿Cuál de estos no es un tipo de dato en JavaScript?',
  "date",
  ["number","symbol","object"]
));
// 52
questions.push(createQuestion (
  (lang == 0) ? 'In JavaScript, what will return (2 + "a")?' : 'En JavaScript ¿Que retornará (2 + "a")?',
  "2a",
  ["aa","error","true"]
));
// 53
questions.push(createQuestion (
  (lang == 0) ? 'What type of data does the "foreach" method work on?' : '¿En qué tipo de dato funciona el método "foreach"?',
  "array",
  ["string","object","date"]
));
// 54
questions.push(createQuestion (
  (lang == 0) ? 'What is the syntax of arrow functions?' : '¿Cuál es la sintaxis de las funciones flecha?',
  "() => {}",
  ["func => {}"," f() ===> ()","function()"]
));
// 55
questions.push(createQuestion (
  (lang == 0) ? "If the arrow functions only have one line, will they return what that line returns?" : "Las funciones flecha, si solo tienen una linea ¿Retonarán lo que devuelva esa linea?.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 56
questions.push(createQuestion (
  (lang == 0) ? '"toCelsius" is a built-in JavaScript function' : '"toCelsius" es una función que viene con JavaScript.',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 57
questions.push(createQuestion (
  (lang == 0) ? 'Which method creates an event listener for an object?' : '¿Con qué método se crea un event listener para un objeto?',
  "addEventListener",
  ["actionAdd","event","addEvent"]
));
// 58
questions.push(createQuestion (
  (lang == 0) ? 'What HTML attribute can I use to give functionality to a button?' : '¿Qué atributo HTML puedo usar para darle funcionalidad a un botón?',
  "onclick",
  ["placeholder","event","required"]
));
// 59
questions.push(createQuestion (
  (lang == 0) ? `To create a string, you can use " ", ' ' or...` : `Para crear un string, se puede utilizar " ", ' ' o...`,
  "` `",
  ["! !","${}","* *"]
));
// 60
questions.push(createQuestion (
  (lang == 0) ? 'You can access a specific character in a string using [].' : 'Puedes acceder a un caracter en específico de un string usando [].',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));