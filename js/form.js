const formTextArea = document.querySelectorAll('[data-js="formTextArea"]');
const characters = document.querySelectorAll('[data-js="characters"]');
const questionForm = document.querySelector('[data-js="questionForm"]');
const formMain = document.querySelector('[data-js="formMain"]');

formTextArea.forEach((textArea, index) => {
  characters.forEach((output) => {
    output.innerText = 150;
  });
  textArea.addEventListener("input", () => {
    const charactersLeft = 150 - textArea.value.length;

    characters[index].innerText = charactersLeft;
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
  newTags.textContent = "#" + data.tag;

  formMain.append(newCard);
  newCard.append(newQuestion, newAnswer, newTags);

  event.target.reset();

  formTextArea.forEach((textArea, index) => {
    characters[index].innerText = 150;
  });
});
