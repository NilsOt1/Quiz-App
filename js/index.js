const answerButtons = document.querySelectorAll('[data-js="answerButton"]');
const cardAnswers = document.querySelectorAll('[data-js="cardAnswer"]');
const questionForm = document.querySelector('[data-js="questionForm"]');
const formMain = document.querySelector('[data-js="formMain"]');
const formQuestion = document.querySelector('[data-js="question"]');

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

  const newCard = document.createElement("section");
  const newQuestion = document.createElement("p");
  const newAnswer = document.createElement("p");
  const newTags = document.createElement("p");

  newCard.classList.add("card");
  newQuestion.textContent = data.question;
  newQuestion.classList.add("card__question");
  newAnswer.classList.add("card__question");
  newAnswer.textContent = data.answer;
  newTags.classList.add("card__categories--flex");
  newTags.textContent = data.tag;

  formMain.append(newCard);
  newCard.append(newQuestion, newAnswer, newTags);

  event.target.reset();
  formQuestion.focus();
});
