"use strict";

const correctNumber = document.querySelector(".correct");
const userNumber = document.querySelector("#text");
const submitBtn = document.querySelector("#submit");
const showText = document.querySelector(".remind");
const randomBtn = document.querySelector(".random");
const guessTiming = document.querySelector(".guess");
const restartBtn = document.querySelector(".restart");

let randomNumber;
let score = 10;

function disable() {
  submitBtn.disabled = true;
  randomBtn.disabled = true;
  userNumber.disabled = true;
}

randomBtn.addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 10) + 1;
  userNumber.disabled = false;
  randomBtn.disabled = true;
});

submitBtn.addEventListener("click", () => {
  const number = Number(userNumber.value);

  if (number === 0) {
    return;
  } else {
    if (number > 10) {
      alert("Pls insert any number below 10");
    } else if (number === randomNumber) {
      correctNumber.innerText = number;
      showText.innerText = "Congratulation! You did it.🤗😍";
      showText.style.color = "#edf2f8";
      disable();
    } else if (number !== randomNumber) {
      guessTiming.innerText = `Guess Time : ${--score}`;
      showText.innerText = "Pls keey trying.You almost get it.";
      showText.style.color = "#edf2f8";
    }
    if (score <= 0) {
      showText.innerText = "You lose! You are not a genius lol.🤣🤣.";
      showText.style.color = "#edf2f8";
      disable();
    }
    userNumber.value = "";
  }
});

restartBtn.addEventListener("click", () => {
  randomNumber = 0;
  score = 10;
  correctNumber.innerText = 0;
  guessTiming.innerText = `Guess Time : 10`;
  showText.innerText = "";
  submitBtn.disabled = false;
  randomBtn.disabled = false;
  userNumber.disabled = true;
});
