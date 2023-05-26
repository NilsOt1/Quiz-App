const body = document.querySelector('[data-js="body"]');
const nav = document.querySelector('[data-js="nav"]');
const header = document.querySelector('[data-js="header"]');
const profileQuestions = document.querySelector('[data-js="profileQuestions"]');
const profileBookmarks = document.querySelector('[data-js="profileBookmarks"]');
const buttonDarkMode = document.querySelector('[data-js="buttonDarkMode"]');

buttonDarkMode.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});
buttonDarkMode.addEventListener("click", () => {
  nav.classList.toggle("darkmode1");
  header.classList.toggle("darkmode1");
  profileQuestions.classList.toggle("darkmode1");
  profileBookmarks.classList.toggle("darkmode1");
});

buttonDarkMode.addEventListener("click", () => {
  buttonDarkMode.textContent = "Lightmode";
});
