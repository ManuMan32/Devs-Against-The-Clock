// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// This controls the questions menu

const themes = [
  ["#6b6b6b44", "#dedede44"],
  ["#995500af", "#bb6600af"],
  ["#559900af", "#66bb00af"],
  ["#5599aaaf", "#66bbccaf"],
  ["#9955aaaf", "#bb66ccaf"]
]

// Creates the menu of options after cleaning the entire screen
function createSettingsMenu(): void {
  const newQuestionUI = buildElement("section");
  newQuestionUI.id = "questions-ui";
  // Theme options
  newQuestionUI.appendChild(createOption("Theme:", themes, (theme: string[]) => {
    const button = buildElement("div", "option");
    button.addEventListener("click", () => {
      root.style.setProperty("--background1", theme[0]);
      root.style.setProperty("--background2", theme[1]);
    })
    return button;
  }));
  questionsUI = newQuestionUI;
  main?.appendChild(newQuestionUI);
  createMinorButton("back");
}
// Returns an options element
function createOption(optionTitle: string, options: any[], forEachFunction: Function): HTMLElement {
  const bar = buildElement("div", "options-bar");
  const oTitle = buildElement("span", "option-title", optionTitle);
  const oDiv = buildElement("div", "options-div");
  // Creates each option using the forEachFunction
  options.forEach(o => {
    const newEl = forEachFunction(o);
    if (newEl) oDiv.appendChild(newEl);
  });
  bar.appendChild(oTitle);
  bar.appendChild(oDiv);
  // Bar animation
  setTimeout(() => bar.style.opacity = "1", 200);
  return bar;
}