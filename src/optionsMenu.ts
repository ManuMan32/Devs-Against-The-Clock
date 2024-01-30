// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// This controls the questions menu

// Creates the menu of options after cleaning the entire screen
function createSettingsMenu(): void {
  const newQuestionUI = buildElement("section");
  newQuestionUI.id = "questions-ui";
  // Theme options
  newQuestionUI.appendChild(createOption((lang == 0) ? "Theme:" : "Tema:", themes, (theme: [string, string]) => {
    const button = buildElement("div", "option");
    button.id = theme.toString();
    button.classList.add("option-type-theme");
    button.style.backgroundColor = theme[0];
    button.style.padding = "0";
    button.addEventListener("click", () => {
      root.style.setProperty("--background1", theme[0]);
      root.style.setProperty("--background2", theme[1]);
      actualTheme = theme;
      updateOptions();
    });
    return button;
  }));
  // Sound Effects
  newQuestionUI.appendChild(createOption((lang == 0) ? "Sound effects:" : "Efectos de sonido:", [false, true], (o: boolean) => {
    const button = buildElement("div", "option");
    button.id = o.toString();
    button.classList.add("option-type-sfx");
    button.innerText = (o) ? ((lang == 0) ? "Yes" : "Si") : "No";
    button.addEventListener("click", () => {
      soundEffects = o;
      updateOptions();
    });
    return button;
  }));
  // Invert Clock and Points toggler
  newQuestionUI.appendChild(createOption((lang == 0) ? "Invert clock and points position:" : "Invertir la posición del reloj y los puntos:", [false, true], (o: boolean) => {
    const button = buildElement("div", "option");
    button.id = o.toString();
    button.classList.add("option-type-invert");
    button.innerText = (o) ? ((lang == 0) ? "Yes" : "Si") : "No";
    button.addEventListener("click", () => {
      invertClockAndPoints = o;
      updateOptions();
    });
    return button;
  }));
  // Language
  newQuestionUI.appendChild(createOption((lang == 0) ? "Language:" : "Idioma", [0, 1], (l: 0 | 1) => {
    const button = buildElement("div", "option");
    button.id = l.toString();
    button.classList.add("option-type-lang");
    button.innerText = (l == 0) ? "English" : "Español";
    button.addEventListener("click", () => {
      lang = l;
      updateOptions();
    });
    return button;
  }));
  // Save settings to local storage
  newQuestionUI.appendChild(createOption((lang == 0) ? "Save settings:" : "Guardar configuración:", [false, true], (o: boolean) => {
    const button = buildElement("div", "option");
    button.id = o.toString();
    button.classList.add("option-type-save");
    button.innerText = (o) ? ((lang == 0) ? "Yes" : "Si") : "No";
    button.addEventListener("click", () => {
      saveSettings = o;
      updateOptions();
    });
    return button;
  }));
  questionsUI = newQuestionUI;
  main?.appendChild(newQuestionUI);
  updateOptions();
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
// Updates the option selected classes
function updateOptions() {
  checkType(".option-type-theme", actualTheme.toString()) // Themes
  checkType(".option-type-sfx", soundEffects.toString()) // Sound Effects
  checkType(".option-type-invert", invertClockAndPoints.toString()) // Invert clock and points position
  checkType(".option-type-lang", lang.toString()) // Language
  checkType(".option-type-save", saveSettings.toString()) // Save settings to LocalStorage
  function checkType(typeClass: string, checkString: string) {
    const typeCheck = document.querySelectorAll(typeClass);
    typeCheck.forEach(el => {
      if (el.id == checkString) el.classList.add("option-selected");
      else el.classList.toggle("option-selected", false);
    });
  }
}