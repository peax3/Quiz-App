import questions from "./data/questions.js";

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");

function showQuiz() {
  let output = questions.map(
    (elem) =>
      `
    <ul>
      <li>${elem.question}</li>
    </ul>
    `
  );
  quiz.innerHTML = output;
}

showQuiz();
