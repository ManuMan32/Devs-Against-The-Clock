// DEVS AGAINST THE CLOCK
// Script written by Manuel Crocco
// Save and load settings

// Saves settings when the page is closed
window.addEventListener("beforeunload", () => {
  if (saveSettings) {
    localStorage.setItem("DATCtheme", themes.indexOf(actualTheme).toString()); // Saves the index of the theme
    localStorage.setItem("DATCsoundEffects", soundEffects.toString());
    localStorage.setItem("DATCinvert", invertClockAndPoints.toString());
    localStorage.setItem("DATClang", lang.toString());
    localStorage.removeItem("DATCsave");
  } else localStorage.setItem("DATCsave", "false");
});

// Loads settings when the page starts
window.addEventListener("load", () => {
  const saveOption = localStorage.getItem("DATCsave");
  if (saveOption == "false") {
    saveSettings = false;
    return;
  }
  const themeLoaded = localStorage.getItem("DATCtheme");
  if (themeLoaded != null) {
    actualTheme = themes[parseInt(themeLoaded)];
    root.style.setProperty("--background1", actualTheme[0]);
    root.style.setProperty("--background2", actualTheme[1]);
    soundEffects = (localStorage.getItem("DATCsoundEffects") == "true");
    invertClockAndPoints = (localStorage.getItem("DATCinvert") == "true");
    // Check if the saved language is 0 or 1
    const langLoaded = localStorage.getItem("DATClang");
    const intValue: number = (langLoaded) ? parseInt(langLoaded) : -1;
    if (intValue == 0 || intValue == 1) lang = intValue;
  }
})