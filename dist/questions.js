"use strict";
const questions = [];
function createQuestion(statement, answer, options) {
    return { id: (questions.length + 1), statement, answer, options };
}
questions.push(createQuestion("Does gitignore work?", "Yes", ["No", "I don't care"]));
console.log(questions[0]);
//# sourceMappingURL=questions.js.map