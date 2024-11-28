let currentStep = 0;
const steps = document.querySelectorAll(".step");
const quizSections = document.querySelectorAll(".quiz-main");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const radioButtons = document.querySelectorAll(".radio");

function changeStep(direction) {
  // Move to the next or previous step based on the direction
  if (direction === "next" && currentStep < steps.length - 1) {
    currentStep++;
  } else if (direction === "prev" && currentStep > 0) {
    currentStep--;
  }

  // Update the progress bar
  updateProgressBar();

  // Update the quiz question visibility
  updateQuizVisibility();

  // Update the button states
  updateButtonStates();
}

function updateProgressBar() {
  // Remove 'active' from all steps
  steps.forEach((step, index) => {
    step.classList.remove("active");
    if (index <= currentStep) {
      step.classList.add("active");
    }
  });
}

function updateQuizVisibility() {
  quizSections.forEach((quiz, index) => {
    quiz.classList.remove("mainActive");
    if (index === currentStep) {
      quiz.classList.add("mainActive");
    }
  });
}

function updateButtonStates() {
  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}

updateProgressBar();
updateQuizVisibility();
updateButtonStates();

radioButtons.forEach((button) => {
  button.addEventListener("change", function () {
    console.log("Selected value: " + this.value);
    const quizQuestion = this.closest(".quiz-question");
    document.querySelectorAll(".quiz-question").forEach((q) => {
      q.classList.remove("selected");
    });
    quizQuestion.classList.add("selected");
  });
});
