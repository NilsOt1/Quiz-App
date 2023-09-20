const answerButtons = document.querySelectorAll('[data-js="answerButton"]');
const cardAnswers = document.querySelectorAll('[data-js="cardAnswer"]');

answerButtons.forEach((button, answer) => {
  button.addEventListener("click", () => {
    if (button.textContent.includes("Show Answer")) {
      button.textContent = "Hide Answer";
      cardAnswers[answer].classList.remove("hidden");
    } else {
      button.textContent = "Show Answer";
      cardAnswers[answer].classList.add("hidden");
    }
  });
});
