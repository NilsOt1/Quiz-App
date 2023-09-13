const answerButtons = document.querySelectorAll('[data-js="answerButton"]');
const cardAnswers = document.querySelectorAll('[data-js="cardAnswer"]');
const questionForm = document.querySelector('[data-js="questionForm"]');

answerButtons.forEach((button, answer) => {
  button.addEventListener("click", () => {
    if (button.textContent.includes("Show Answer")) {
      button.textContent = "Hide Answer, por favor";
      cardAnswers[answer].classList.remove("hidden");
    } else {
      button.textContent = "Show Answer";
      cardAnswers[answer].classList.add("hidden");
    }
  });
});

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
});
