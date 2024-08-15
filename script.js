function generateApiKey() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let apiKey = "";
  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    apiKey += characters[randomIndex];
  }
  return apiKey;
}

document
  .getElementById("generateKeyBtn")
  .addEventListener("click", function () {
    const apiKey = generateApiKey();
    document.getElementById(
      "apikey"
    ).innerHTML = `Your API key: <strong>${apiKey}</strong>`;
    console.log(`Your API key: ${apiKey}`);
  });

// document.getElementById("Mode").addEventListener("click", function () {
//   const themeStylesheet = document.getElementById("themeStylesheet");
//   const currentTheme = themeStylesheet.getAttribute("href");

//   if (currentTheme === "dark.css") {
//     themeStylesheet.setAttribute("href", "light.css");
//     this.textContent = "Switch to Day Mode";
//   } else {
//     themeStylesheet.setAttribute("href", "dark.css");
//     this.textContent = "Switch to Night Mode";
//   }
// });

document.getElementById("modeToggle").addEventListener("change", function () {
  const themeStylesheet = document.getElementById("themeStylesheet");
  const toggleLabel = document.getElementById("toggleLabel");

  if (this.checked) {
    themeStylesheet.setAttribute("href", "dark.css");
    toggleLabel.textContent = "Dark Mode";
  } else {
    themeStylesheet.setAttribute("href", "light.css");
    toggleLabel.textContent = "Light Mode";
  }
});
