// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Questions of game

type Question = {
  readonly id: number
  statement: string
  answer: string
  options: string[]
  appear?: true
}
const questions: Question[] = [];
function createQuestion(statement: string, answer: string, options: string[]): Question {
  return { id: questions.length, statement, answer, options }
}

// HTML Questions
// 0
questions.push(createQuestion (
  (lang == 0) ? 'What "HTML" stands for?' : '¿Qué significa "HTML"?',
  "HyperText Markup Language",
  ["Hyper Tag Manipulation Language","HyperText Programming Language","Hyper Tag Markup Lector"]
));
// 1
questions.push(createQuestion (
  (lang == 0) ? "H1 elements in HTML have a default 'margin'." : "Los elementos h1 en HTML tienen un 'margin' predeterminado.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 2
questions.push(createQuestion (
  (lang == 0) ? "Which of these HTML tags is standalone (open-only)?" : "¿Cuál de estas etiquetas HTML es de solo apertura?",
  "<img>",
  ["<html>","<textarea>","<button>"]
));
// 3
questions.push(createQuestion (
  (lang == 0) ? 'Which HTML tag creates vector graphics?' : '¿Qué etiqueta HTML crea gráficos vectoriales?',
  "<svg>",
  ["<canvas>","<vector>","<picture>"]
));
// 4
questions.push(createQuestion (
  (lang == 0) ? 'Which HTML tag embeds sound content in a website?' : '¿Qué etiqueta HTML sube contenido de sonido a la página web?',
  "<audio>",
  ["<mp3>","<sound>","<music>"]
));
// 5
questions.push(createQuestion (
  (lang == 0) ? 'What HTML tag creates a cell within a table?' : '¿Qué etiqueta HTML crea una celda dentro de una tabla?',
  "<td>",
  ["<th>","<tc>","<table>"]
));
// 6
questions.push(createQuestion (
  (lang == 0) ? 'What HTML tag inserts an ordered list?' : '¿Qué etiqueta HTML inserta una lista ordenada?',
  "<ol>",
  ["<li>","<ul>","<list>"]
));
// 7
questions.push(createQuestion (
  (lang == 0) ? 'What HTML tag highlights text?' : '¿Qué etiqueta HTML resalta un texto?',
  "<mark>",
  ["<strike>","<hl>","<strong>"]
));
// 8
questions.push(createQuestion (
  (lang == 0) ? 'What HTML attribute can I use to give functionality to a button?' : '¿Qué atributo HTML puedo usar para darle funcionalidad a un botón?',
  "onclick",
  ["placeholder","event","required"]
));
// 9
questions.push(createQuestion (
  (lang == 0) ? "The text inside an HTML tag is a TextNode." : "El texto dentro de una etiqueta HTML es un TextNode.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 10
questions.push(createQuestion (
  (lang == 0) ? "HTML is case sensitive." : "HTML es sensible a mayúsculas.",
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 11
questions.push(createQuestion (
  (lang == 0) ? 'Which of these HTML tags draws a horizontal dividing line?' : '¿Cuál de estas etiquetas HTML dibuja una linea horizontal divisora?',
  "<hr>",
  ["<br>","<hl>","<break>"]
));
// 12
questions.push(createQuestion (
  (lang == 0) ? 'How do you write comments in HTML?' : '¿Cómo se escriben comentarios en HTML?',
  "<!-- -->",
  ["<comment>","<-- -->","<// >"]
));
// 13
questions.push(createQuestion (
  (lang == 0) ? "Which of these HTML tags is obsolete?" : "¿Cuál de estas etiquetas HTML está obsoleta?",
  "<marqueue>",
  ["<meter>","<summary>","<div>"]
));
// 14
questions.push(createQuestion (
  (lang == 0) ? "In HTML, do description lists exist?" : "En HTML ¿Existen las description lists?",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 15
questions.push(createQuestion (
  (lang == 0) ? "Does HTML support animated GIFs within an <img> element?" : "¿HTML soporta GIFs animados dentro de un elemento <img>?",
  (lang == 0) ? "Yes" : "Si",
  ["No"]
));
// 16
questions.push(createQuestion (
  (lang == 0) ? "With what attribute is a label connected to an input?" : "¿Con qué atributo se conecta un label a un input?",
  "for and name",
  ["name and value","for and id","id and value"]
));
// 17
questions.push(createQuestion (
  '<meta name="viewport" content="width=__________, initial-scale=1" />',
  "device-width",
  ["media","auto","screen"]
));
// 18
questions.push(createQuestion (
  '<!DOCTYPE ____ >',
  "html",
  ["file","htmlfile","programming"]
));
// 19
questions.push(createQuestion (
  (lang == 0) ? "Which of these is NOT an input type?" : "¿Cuál de estos NO es un tipo de input?",
  "select",
  ["week","radio","password"]
));
// 20
questions.push(createQuestion (
  (lang == 0) ? "What HTML attribute gives destination to an <a> element?" : "¿Qué atributo HTML le da destino a un elemento <a>?",
  "href",
  ["link","to","anchor"]
));
// 21
questions.push(createQuestion (
  (lang == 0) ? "What HTML attribute gives an alternative text to an <img> element?" : "¿Qué atributo HTML le da texto alternativo a un elemento <img>?",
  "alt",
  ["title","src","info"]
));
// 22
questions.push(createQuestion (
  (lang == 0) ? "What HTML attribute gives CSS rulesets to an element?" : "¿Qué atributo HTML le da reglas CSS a un elemento?",
  "style",
  ["css","stylesheet","properties"]
));
// 23
questions.push(createQuestion (
  (lang == 0) ? "What HTML attribute specifies where the data of a form should go?" : "¿Qué atributo HTML especifica a donde deben llegar los datos de un formulario?",
  "action",
  ["link","target","type"]
));
// 24
questions.push(createQuestion (
  (lang == 0) ? "Within which tag does the <title> of the web page go?" : "¿Dentro de cuál etiqueta va el <title> de la página web?",
  "head",
  ["meta","script","body"]
));
// 25
questions.push(createQuestion (
  (lang == 0) ? 'What should go inside the "target" attribute of an <a> for it to open in a new tab?' : '¿Qué debe ir dentro del atributo "target" de un <a> para que se abra en una nueva pestaña?',
  "_blank",
  ["_self","_open","_top"]
));
// 26
questions.push(createQuestion (
  (lang == 0) ? 'The <tfoot> tag exists and defines the footer of a table.' : 'La etiqueta <tfoot> existe y define el footer de una tabla.',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 27
questions.push(createQuestion (
  (lang == 0) ? 'How many classes can an HTML element have at most?' : '¿Cuántas clases puede tener un elemento HTML como máximo?',
  (lang == 0) ? "infinite" : "infinitas",
  ["10","100","5"]
));
// 28
questions.push(createQuestion (
  (lang == 0) ? 'The <div> element in HTML has a semantic meaning.' : 'La etiqueta <div> en HTML tiene un significado semántico.',
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 29
questions.push(createQuestion (
  (lang == 0) ? 'The <span> element in HTML has a semantic meaning.' : 'La etiqueta <span> en HTML tiene un significado semántico.',
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 30
questions.push(createQuestion (
  (lang == 0) ? 'The <table> element in HTML has a semantic meaning.' : 'La etiqueta <table> en HTML tiene un significado semántico.',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 31
questions.push(createQuestion (
  (lang == 0) ? 'The <article> element in HTML has a semantic meaning.' : 'La etiqueta <article> en HTML tiene un significado semántico.',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 32
questions.push(createQuestion (
  (lang == 0) ? 'The ID of an HTML element can start with a number.' : 'La ID de un elemento HTML puede comenzar on un número.',
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 33
questions.push(createQuestion (
  (lang == 0) ? 'Which HTML element is used to display a web page within a web page?' : '¿Qué elemento HTML se utiliza para mostrar una página web dentro de una página web?',
  "<iframe>",
  ["<anchor>","<api>","<page>"]
));
// 34
questions.push(createQuestion (
  (lang == 0) ? 'What HTML tag is used to add a JavaScript file to the page?' : '¿Qué etiqueta HTML se utiliza para agregar un archivo JavaScript a la página?',
  "<script>",
  ["<code>","<import>","<javascript>"]
));
// 35
questions.push(createQuestion (
  (lang == 0) ? 'What HTML tag is used to display a message to users who have JavaScript disabled?' : '¿Qué etiqueta HTML se utiliza para mostrar un mensaje a los usuarios que tienen JavaScript desactivado?',
  "<noscript>",
  ["<alt>","<codebreak>",(lang == 0) ? "It doesn't exist" : "No existe"]
));
// 36
questions.push(createQuestion (
  (lang == 0) ? 'What HTML tag is used to add a JavaScript file to the page?' : '¿Qué nombre debe tener la etiqueta <meta> para definir las palabras clave para los ?',
  "<script>",
  ["<code>","<import>","<javascript>"]
));
// 37
questions.push(createQuestion (
  (lang == 0) ? '<head> tag can be ommitted in an HTML document.' : 'La etiqueta <head> se puede omitir en un documento HTML.',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 38
questions.push(createQuestion (
  (lang == 0) ? 'An HTML file can have the extension ".htm".' : 'Un archivo HTML puede tener la extensión ".htm".',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 39
questions.push(createQuestion (
  (lang == 0) ? 'The "contenteditable" attribute has practical use in all HTML tags.' : 'El atributo "contenteditable" tiene un uso práctico en todas las etiquetas HTML.',
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));

// CSS Questions
// 0
questions.push(createQuestion (
  (lang == 0) ? "What 'CSS' stands for?" : "¿Qué significa 'CSS'?",
  "Cascading StyleSheets",
  ["Colorful Web Styles","Cascading SurfaceS","Colorful Sintax Statements"]
));
// 1
questions.push(createQuestion (
  (lang == 0) ? "CSS was invented before JavaScript" : "CSS fue inventado antes que JavaScript",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 2
questions.push(createQuestion (
  (lang == 0) ? "Which of these is NOT a CSS property?" : "¿Cuál de estas NO es una propiedad de CSS?",
  "transition-offset",
  ["aspect-ratio","flex-shrink","isolation"]
));
// 3
questions.push(createQuestion (
  "<link rel='_______' href='styles.css'>",
  "stylesheet",
  ["text/css","css","style"]
));
// 4
questions.push(createQuestion (
  (lang == 0) ? '"~" is used in CSS to select a...' : '"~" es usado en CSS para seleccionar un...',
  "sibling",
  ["parent","child"]
));
// 5
questions.push(createQuestion (
  (lang == 0) ? "Which of these has more specificity in CSS?" : "¿Cuál de estos tiene más especificidad en CSS?",
  "ID",
  ["classes","pseudoelements","elements"]
));
// 6
questions.push(createQuestion (
  (lang == 0) ? "With what prefix are variables declared in CSS?" : "¿Con qué prefix se declaran variables en CSS?",
  "--",
  ["-","let","var"]
));
// 7
questions.push(createQuestion (
  (lang == 0) ? "In CSS, ':' is pseudoclass and '::' is pseudoelement." : "En CSS, ':' indica una pseudoclase y '::' indica un pseudoelemento.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 8
questions.push(createQuestion (
  (lang == 0) ? "CSS is mainly used for backend." : "CSS se usa para el backend principalmente.",
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 9
questions.push(createQuestion (
  (lang == 0) ? 'What prefix is used to create a CSS animation?' : '¿Con qué prefix se crea una animación en CSS?',
  "@KeyFrames",
  ["--animation","@Animation","--keyframe"]
));
// 10
questions.push(createQuestion (
  (lang == 0) ? "'body:not(p)' selects all children of body that are not a 'p' element." : "'body:not(p)' selecciona a todos los hijos de body que no sean un elemento 'p'.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 11
questions.push(createQuestion (
  (lang == 0) ? "Which of these pseudoclasses indicate that a link has been visited?" : "¿Cuál de estas pseudoclases indican que un link ha sido visitado?",
  ":visited",
  [":focus",":anchor",":entered"]
));
// 12
questions.push(createQuestion (
  (lang == 0) ? "'position: absolute' fixes an element to a specific location on the website." : "'position: absolute' fija un elemento en un lugar específico de la web.",
  (lang == 0) ? "False" : "False",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 13
questions.push(createQuestion (
  (lang == 0) ? "The ::after and ::before pseudo-elements are part of the DOM." : "Los pseudoelementos ::after y ::before forman parte del DOM.",
  (lang == 0) ? "False" : "False",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 14
questions.push(createQuestion (
  (lang == 0) ? "What CSS property changes the color of a text?" : "¿Cuál propiedad CSS cambia el color de un texto?",
  "color",
  ["text-color","background-color","font-color"]
));
// 15
questions.push(createQuestion (
  (lang == 0) ? "Which of these is the universal CSS selector?" : "¿Cuál es el selector universal de CSS?",
  "*",
  [".","universal","_all"]
));
// 16
questions.push(createQuestion (
  (lang == 0) ? "What CSS property is used to add a space between letters in a text?" : "¿Qué propiedad CSS se usa para agregar un espacio entre las letras de un texto?",
  "letter-spacing",
  ["space-between","font-weight","font-space"]
));
// 17
questions.push(createQuestion (
  (lang == 0) ? "What CSS property is used to capitalize a text?" : "¿Qué propiedad CSS se utiliza para poner en mayúscula un texto?",
  "text-transform",
  ["uppercase","font-weight","text-style"]
));
// 18
questions.push(createQuestion (
  (lang == 0) ? "What CSS property is used to make text bold?" : "¿Qué propiedad CSS se utiliza para poner un texto en negrita?",
  "font-weight",
  ["font-style","font-bold","text-size"]
));
// 19
questions.push(createQuestion (
  (lang == 0) ? "What CSS property is used to make text italic?" : "¿Qué propiedad CSS se utiliza para poner un texto en cursiva?",
  "font-style",
  ["oblique","text-indent","font-type"]
));
// 20
questions.push(createQuestion (
  (lang == 0) ? "Which function should I use if I want to create a gradient in CSS?" : "¿Qué función debo usar si quiero crear un gradiente en CSS?",
  "linear-gradient",
  ["color-mix","grad","generate-gradient"]
));
// 21
questions.push(createQuestion (
  (lang == 0) ? "What CSS property should I use if I want to create a flex container?" : "¿Qué propiedad CSS debo usar si quiero hacer un contenedor flex?",
  "display",
  ["position","flex","flex-template"]
));
// 22
questions.push(createQuestion (
  (lang == 0) ? "What CSS property should I use if I want one element to look above the other?" : "¿Qué propiedad CSS debo usar si quiero que un elemento se vea por encima del otro?",
  "z-index",
  ["display","grid","depth"]
));
// 23
questions.push(createQuestion (
  (lang == 0) ? "What CSS property should I use if I want to make some text unselectable?" : "¿Qué propiedad CSS debo usar si quiero que un texto no se pueda seleccionar?",
  "user-select",
  ["text-unselect","font-style","select"]
));
// 24
questions.push(createQuestion (
  (lang == 0) ? "Semicolons are NOT necessary in CSS." : "El punto y coma NO es necesario en CSS.",
  (lang == 0) ? "False" : "False",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 25
questions.push(createQuestion (
  (lang == 0) ? "Which of these is the CSS id selector?" : "¿Cuál de estos es el selector de id de CSS?",
  "#",
  [".","[]","*"]
));
// 26
questions.push(createQuestion (
  (lang == 0) ? "CSS stylesheets can be imported and exported." : "Las hojas de estilo CSS se pueden importar y exportar.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 27
questions.push(createQuestion (
  (lang == 0) ? "Which of these is a relative CSS unit?" : "¿Cuál de estas es una unidad relativa en CSS?",
  "%",
  ["px","cm","in"]
));
// 28
questions.push(createQuestion (
  (lang == 0) ? "An element can have a background image using CSS." : "Un elemento puede tener una imagen de fondo usando CSS.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 29
questions.push(createQuestion (
  (lang == 0) ? '"border" is a shorthand property in CSS.' : '"border" es una propiedad shorthand en CSS.',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 30
questions.push(createQuestion (
  (lang == 0) ? '"grid-gap" is a shorthand property in CSS.' : '"grid-gap" es una propiedad shorthand en CSS.',
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 31
questions.push(createQuestion (
  (lang == 0) ? '"text-align" is a shorthand property in CSS.' : '"text-align" es una propiedad shorthand en CSS.',
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 32
questions.push(createQuestion (
  (lang == 0) ?  `Which of these CSS properties can't have "auto" as a valid value?` : '¿Cuál de estas propiedades CSS no puede tener "auto" como valor válido?',
  "color",
  ["position","margin","height"]
));
// 33
questions.push(createQuestion (
  (lang == 0) ?  `Which of these CSS properties is NOT inherited?` : '¿Cuál de estas propiedades CSS no es heredada?',
  "padding",
  ["font-size","color","font-family"]
));
// 34
questions.push(createQuestion (
  (lang == 0) ?  `Which of these properties is NOT part of the CSS box model?` : '¿Cuál de estas propiedades NO forma parte del CSS box model?',
  "gap",
  ["margin","border","padding"]
));
// 35
questions.push(createQuestion (
  (lang == 0) ?  `Outline in CSS is drawn outside the borders of an element.` : 'El outline en CSS se dibuja fuera de los bordes de un elemento.',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 36
questions.push(createQuestion (
  (lang == 0) ?  `"double" is a valid border style.` : '"double" es un estilo de borde válido.',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 37
questions.push(createQuestion (
  (lang == 0) ?  `"gradient" is a valid border style.` : '"gradient" es un estilo de borde válido.',
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 38
questions.push(createQuestion (
  (lang == 0) ?  `CSS has a "calc" function.` : 'CSS tiene una función "calc".',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 39
questions.push(createQuestion (
  (lang == 0) ?  `CSS has an "if" function` : 'CSS tiene una función "if"',
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));

// JavaScript Questions
// 0
questions.push(createQuestion (
  (lang == 0) ? "What was the first name that JavaScript had?" : "¿Cuál fue el primer nombre que tuvo JavaScript?",
  "Mocha",
  ["ECMAScript","LiveScript","Java"]
));
// 1
questions.push(createQuestion (
  (lang == 0) ? "What type of data is an 'array' in JavaScript?" : "¿Qué tipo de dato es un 'array' en JavaScript?",
  "object",
  ["symbol","array","date"]
));
// 2
questions.push(createQuestion (
  (lang == 0) ? 'Which of these is NOT a JavaScript datatype?' : '¿Cuál de estos no es un tipo de dato en JavaScript?',
  "date",
  ["number","symbol","object"]
));
// 3
questions.push(createQuestion (
  (lang == 0) ? "With which operator is the power of a number calculated in JavaScript?" : "¿Con qué operador se calcula la potencia de un número en JavaScript?",
  "**",
  ["^","!","²"]
));
// 4
questions.push(createQuestion (
  (lang == 0) ? "In JavaScript, there are reserved words that you cannot use as variable names." : "En JavaScript, hay palabras reservadas que no puedes usar como nombres de variables.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 5
questions.push(createQuestion (
  (lang == 0) ? "What is the name of the JavaScript event that is called when the right click is pressed?" : "¿Qué nombre tiene el evento de JavaScript que se llama cuando se pulsa el click derecho?",
  "contextmenu",
  ["mouseright","clickright","showoptions"]
));
// 6
questions.push(createQuestion (
  (lang == 0) ? "Which of these is NOT a JavaScript API?" : "¿Cuál de estas NO es una API de JavaScript?",
  "FileLoader",
  ["IndexedDB","MatchMedia","IntersectionObserver"]
));
// 7
questions.push(createQuestion (
  (lang == 0) ? "Bootstrap is a JavaScript framework" : "Bootstrap es un framework de JavaScript.",
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 8
questions.push(createQuestion (
  (lang == 0) ? "React is a JavaScript framework." : "React es un framework de JavaScript.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 9
questions.push(createQuestion (
  (lang == 0) ? 'Which version of JavaScript introduced the "let" keyword?' : '¿Qué versión de JavaScript introdujo la palabra clave "let"?',
  "ES06",
  ["ECMAScript 2020","ES05","ECMAScript 2018"]
));
// 10
questions.push(createQuestion (
  (lang == 0) ? 'In JavaScript, what will return (2 + "a")?' : 'En JavaScript ¿Que retornará (2 + "a")?',
  "2a",
  ["aa","error","true"]
));
// 11
questions.push(createQuestion (
  (lang == 0) ? '"toCelsius" is a built-in JavaScript function' : '"toCelsius" es una función que viene con JavaScript.',
  (lang == 0) ? "False" : "Falso",
  (lang == 0) ? ["True"] : ["Verdadero"]
));
// 12
questions.push(createQuestion (
  (lang == 0) ? 'In JavaScript, you can access a specific character in a string using [].' : 'En JavaScript, puedes acceder a un caracter en específico de un string usando [].',
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 13
questions.push(createQuestion (
  (lang == 0) ? "Which of these technologies is NOT a framework?" : "¿Cuál de estas tecnologías NO ES un framework?",
  "TypeScript",
  ["React","Bootstrap","Vue"]
));
// 14
questions.push(createQuestion (
  (lang == 0) ? "In ES06 strict mode, can you declare a variable with 'var'?" : "En el modo estricto de ES06 ¿Se puede declarar una variable con 'var'?",
  (lang == 0) ? "Yes" : "Sí",
  (lang == 0) ? ["No, only let and const"] : ["No, solo con let y const"]
));

// console.log Questions
// 0
questions.push(createQuestion (
  (lang == 0) ? "If I run 'console.log(true + true)' what will the console show me?" : "Si ejecuto 'console.log(true + true)' ¿Qué me mostrará la consola?",
  "2",
  ["true","1","NaN"]
));
// 1
questions.push(createQuestion (
  (lang == 0) ? "If I run 'console.log(!4)' what will the console show me?" : "Si ejecuto 'console.log(!4)' ¿Qué me mostrará la consola?",
  "false",
  ["-4","TypeError","24"]
));
// 2
questions.push(createQuestion (
  (lang == 0) ? "If I run 'console.log(2 == '2')' what will the console show me?" : "Si ejecuto 'console.log(2 == '2')' ¿Qué me mostrará la consola?",
  "true",
  ["false","NaN"]
));
// 3
questions.push(createQuestion (
  (lang == 0) ? "If I run 'console.log(parseInt('25.5'))' what will the console show me?" : "Si ejecuto 'console.log(parseInt('25.5'))' ¿Qué me mostrará la consola?",
  "25",
  ["25.5","5","0.5"]
));

// General Programming Questions
// 0
questions.push(createQuestion (
  (lang == 0) ? "Which of these is the ternary operator?" : "¿Cuál de estos es el operador ternario?",
  "?",
  ["$","...","&&"]
));
// 1
questions.push(createQuestion (
  (lang == 0) ? "What 'DOM' stands for?" : "¿Qué significa 'DOM'?",
  "Document Object Model",
  ["Document Order Manipulation","Data Order Model","Document Order Model"]
));
// 2
questions.push(createQuestion (
  (lang == 0) ? "Which of these is a string method?" : "¿Cuál de estos es un método de string?",
  "string.split()",
  ["string.reduce()","string.reverse()","string.power()"]
));
// 3
questions.push(createQuestion (
  (lang == 0) ? "What method adds an element to the beginning of an array?" : "¿Qué método agrega un elemento al principio de un array?",
  "unshift",
  ["pop","shift","push"]
));
// 4
questions.push(createQuestion (
  (lang == 0) ? "What method makes an object readonly?" : "¿Qué método hace que un objeto sea readonly?",
  "freeze",
  ["constant","static","setReadOnly"]
));
// 5
questions.push(createQuestion (
  (lang == 0) ? "Which 'display' has a <span> element by default?" : "¿Qué 'display' tiene por defecto un elemento <span>?",
  "inline",
  ["block","inline-block","flex"]
));
// 6
questions.push(createQuestion (
  (lang == 0) ? 'What is the name of the web icon that appears in the browser tab?' : '¿Cómo se llama el icono de la web que aparece en la pestaña del navegador?',
  "favicon",
  ["web icon","image","picture"]
));
// 7
questions.push(createQuestion (
  (lang == 0) ? 'Which of these is a hexadecimal color?' : '¿Cuál de estos es un color hexadecimal?',
  "#44a3cc",
  ["red","hex(3, 7, 9)","rgb(2, 5, 6)"]
));
// 8
questions.push(createQuestion (
  (lang == 0) ? 'What type of data does the "foreach" method work on?' : '¿En qué tipo de dato funciona el método "foreach"?',
  "array",
  ["string","object","date"]
));
// 9
questions.push(createQuestion (
  (lang == 0) ? 'What is the syntax of arrow functions?' : '¿Cuál es la sintaxis de las funciones flecha?',
  "() => {}",
  ["func => {}"," f() ===> ()","function()"]
));
// 10
questions.push(createQuestion (
  (lang == 0) ? "If the arrow functions only have one line, will they return what that line returns?" : "Las funciones flecha, si solo tienen una linea ¿Retonarán lo que devuelva esa linea?.",
  (lang == 0) ? "True" : "Verdadero",
  (lang == 0) ? ["False"] : ["Falso"]
));
// 11
questions.push(createQuestion (
  (lang == 0) ? 'Which method creates an event listener for an object?' : '¿Con qué método se crea un event listener para un objeto?',
  "addEventListener",
  ["actionAdd","event","addEvent"]
));
// 12
questions.push(createQuestion (
  (lang == 0) ? `To create a string, you can use " ", ' ' or...` : `Para crear un string, se puede utilizar " ", ' ' o...`,
  "` `",
  ["! !","${}","* *"]
));