"use strict";
const questions = [];
function createQuestion(statement, answer, options) {
    return { id: (questions.length + 1), statement, answer, options };
}
questions.push(createQuestion("Este es el enunciado de mi pregunta", "si", ["no", "tal vez"]));
console.log(questions[0]);
//# sourceMappingURL=questions.js.map