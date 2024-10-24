const idSpan = document.querySelector("#adviceId");
const adviceSpan = document.querySelector("#advice");
const diceBtn = document.querySelector("#dice_button");

async function getAdvice() {
  const { id, advice } = await fetch(
    `https://api.adviceslip.com/advice?t=${Date.now()}`
  )
    .then((res) => res.json())
    .then((res) => res.slip)
    .catch((err) => {
      console.log(err);
    });
  return { id, advice };
}

async function showAdvice() {
  const { id, advice } = await getAdvice();
  idSpan.textContent = id;
  adviceSpan.textContent = advice;
}

diceBtn.addEventListener("click", () => {
  showAdvice();
});

document.addEventListener("DOMContentLoaded", () => {
  showAdvice();
});
