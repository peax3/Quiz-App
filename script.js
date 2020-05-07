import questions from "./data/questions.js";
import { ui } from "./ui.js";

const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const optionsContainer = document.querySelector("#options-container");

// Event listeners
document.addEventListener("DOMContentLoaded", startQuiz);
nextBtn.addEventListener("click", toNextQuiz);
submitBtn.addEventListener("click", toSubmitQuiz);
document.querySelector(".play-again").addEventListener("click", toPlayAgain);
document.querySelector(".start-quiz").addEventListener("click", toStartQuiz);

let currentQuestionIndex = 0;
let score = 0;
const totalQuestionNum = questions.length;

function startQuiz() {
  // show the first question
  ui.showQuiz(
    questions[currentQuestionIndex],
    currentQuestionIndex + 1,
    totalQuestionNum
  );
  ui.updateScore(score);
  assignChangeHandler();
  ui.showStartModal();
}

function toStartQuiz() {
  ui.removeStartModal();
}

// assign onChange handler each option
function assignChangeHandler() {
  if (optionsContainer !== undefined) {
    const options = optionsContainer.querySelectorAll(".option");
    options.forEach((option) =>
      option.addEventListener("change", (e) => checkAnswer(e, options))
    );
  }
}

// check the answer
function checkAnswer(e, options) {
  // disable the other options to prevent the user from clicking it
  options.forEach((option) => {
    if (option !== e.target) {
      option.disabled = true;
    }
  });

  // check if the answer is correct
  if (e.target.value == questions[currentQuestionIndex].answer) {
    score = score + 1;
    ui.updateScore(score);
    ui.showAnswerStatus(e.target.parentElement, "correct");
  } else {
    ui.showAnswerStatus(e.target.parentElement, "fail");
    // loop throught the options and find the correct answer
    options.forEach((option) => {
      if (option.value == questions[currentQuestionIndex].answer) {
        ui.showAnswerStatus(option.parentElement, "correct");
      }
    });
  }

  if (currentQuestionIndex >= totalQuestionNum - 1) {
    ui.showSubmitButton();
  } else {
    ui.showNextButton();
  }
}

function toNextQuiz() {
  currentQuestionIndex = currentQuestionIndex + 1;

  ui.showQuiz(
    questions[currentQuestionIndex],
    currentQuestionIndex + 1,
    totalQuestionNum
  );
  assignChangeHandler();
  ui.removeNextButton();
}

function toSubmitQuiz() {
  ui.showResultModal(score, totalQuestionNum);
}

function toPlayAgain() {
  window.location.reload(true);
}
