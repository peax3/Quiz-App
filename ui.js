class UI {
  constructor() {
    this.quiz = document.getElementById("quiz");
    this.questionContainer = document.getElementById("question-container");
    this.optionsContainer = document.getElementById("options-container");
    this.nextBtn = document.getElementById("next-btn");
    this.submitBtn = document.getElementById("submit-btn");
    this.resultModal = document.querySelector(".result-modal");
    this.startModal = document.querySelector(".start-modal");
    this.currentScore = document.querySelector(".score");
  }

  showQuiz = (currentQuestion, currentQuestionNum, totalQuestionNum) => {
    let question = `
        <span class="question-number"> Question ${currentQuestionNum} of ${totalQuestionNum}</span>
        <p class="question-body">${currentQuestion.question}</p>
    `;

    let options = currentQuestion.options.map(
      (option, index) => `
      <label>
        <input type="radio" name="option" value=${index} class="option"/>
        ${option}
      </label>
    `
    );
    this.questionContainer.innerHTML = question;
    this.optionsContainer.innerHTML = options.join("");
  };

  showNextButton = () => (this.nextBtn.style.display = "inline-block");
  removeNextButton = () => (this.nextBtn.style.display = "none");
  showSubmitButton = () => (this.submitBtn.style.display = "inline-block");

  showResultModal = (finalScore, total) => {
    this.resultModal.querySelector("#final-score").textContent = finalScore;
    this.resultModal.querySelector("#total").textContent = total;

    this.resultModal.classList.add("show-modal");
  };

  showStartModal = () => {
    this.startModal.classList.add("show-modal");
  };

  removeStartModal = () => {
    this.startModal.classList.remove("show-modal");
  };

  updateScore = (value) => (this.currentScore.textContent = value);
}

export const ui = new UI();
