/*const body = document.querySelector('[data-js="body"]');
const nav = document.querySelector('[data-js="nav"]');
const header = document.querySelector('[data-js="header"]');
const profileQuestions = document.querySelector('[data-js="profileQuestions"]');
const profileBookmarks = document.querySelector('[data-js="profileBookmarks"]');
const buttonDarkMode = document.querySelector('[data-js="buttonDarkMode"]');

buttonDarkMode?.addEventListener("click", () => {
  body.classList.toggle("darkmode");
});
buttonDarkMode?.addEventListener("click", () => {
  nav.classList.toggle("darkmode1");
  header.classList.toggle("darkmode1");
  profileQuestions.classList.toggle("darkmode1");
  profileBookmarks.classList.toggle("darkmode1");
  buttonDarkMode.textContent = "Lightmode";
});*/

const cardBookmark = document.querySelector('[data-js="cardBookmark"]');

cardBookmark.addEventListener("click", () => {
  cardBookmark.classList.toggle("bookmark--clicked");
});

const answerButton = document.querySelector('[data-js="answerButton"]');
const cardAnswer = document.querySelector('[data-js="cardAnswer"]');

answerButton.addEventListener("click", toggleAnswer);

function toggleAnswer() {
  cardAnswer.classList.toggle("hidden");

  if (cardAnswer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
}
