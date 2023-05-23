const body = document.querySelector('[data-js="body"]');
const buttonDarkMode = document.querySelector('[data-js="buttonDarkMode"]');
const nav = document.querySelector('[data-js="nav"]');
const header = document.querySelector('[data-js="header"]');

buttonDarkMode.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});
buttonDarkMode.addEventListener("click", () => {
  nav.classList.toggle("darkmode1");
  header.classList.toggle("darkmode1");
});
