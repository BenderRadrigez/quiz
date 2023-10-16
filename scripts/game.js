import { questionsArr } from "./questions.js";

const question = document.querySelector(".question");
const answerBtns = document.querySelectorAll(".answer");
let currentQuestionIndex = 0;

generateQuiz();

answerBtns.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.textContent === questionsArr[currentQuestionIndex].trueAnswer) {
      console.log(true);
    } else {
        console.log(false);
    }
    setTimeout(()=>{
        currentQuestionIndex++;
        generateQuiz();
    }, 1000)
  });
});

function generateQuiz() {
  question.textContent = questionsArr[currentQuestionIndex].question;
  answerBtns.forEach((el, index) => {
    el.textContent = questionsArr[currentQuestionIndex].answers[index];
  });
}
