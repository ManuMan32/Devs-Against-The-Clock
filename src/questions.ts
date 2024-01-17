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

questions.push(createQuestion (
  "Is this code TypeScript?",
  "Yes",
  ["No","I don't care"]
));
console.log(questions[0]);