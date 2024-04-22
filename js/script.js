// bookmark icon toggle

const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("question-card__icon__hidden");
});

// answer toggle

const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

button.addEventListener("click", () => {
  answer.classList.toggle("question-card__answer__unhide");
  buttonSwitch();
});

function buttonSwitch() {
  if (button.textContent === "hide answer") {
    button.textContent = "show answer";
  } else {
    button.textContent = "hide answer";
  }
}
