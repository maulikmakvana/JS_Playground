let allQuestions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "define"],
    answer: 0
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: 2
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["Number", "Float", "Character", "Double"],
    answer: 0
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "# comment", "** comment **"],
    answer: 1
  },
  {
    question: "Which method is used to print something in the console?",
    options: ["console.write()", "print()", "console.log()", "log.console()"],
    answer: 2
  }
];

const question = document.getElementById("question");
const options = document.querySelectorAll("span");
const radios = document.querySelectorAll('input[name="answer"]');
const nextBtn = document.querySelector(".next-btn");
const timer = document.getElementById("timer");
const indexqu = document.getElementById("number");

let time = 60;
let timerInterval;
let currentIndex = 0;
let score = 0;

// get selected answer
function getSelectedAnswer() {
  let selected = null;

  radios.forEach((radio, index) => {
    if (radio.checked) {
      selected = index;
    }
  });

  return selected;
}

// timer
function startTimer() {
  timerInterval = setInterval(() => {
    time--;

    timer.innerText = `00:${time < 10 ? "0" + time : time}`;

    if (time === 0) {
      clearInterval(timerInterval);
      nextQuestion(false); // auto next
    }
  }, 1000);
}

// load question
function loadQuestion() {
  indexqu.innerText = currentIndex + 1;
  question.innerText = allQuestions[currentIndex].question;

  options.forEach((span, index) => {
    span.innerText = allQuestions[currentIndex].options[index];
  });

  radios.forEach(radio => (radio.checked = false));

  clearInterval(timerInterval);
  time = 60;
  timer.innerText = "00:60";
  startTimer();
}

// next question logic
function nextQuestion(checkAnswer = true) {
  if (checkAnswer) {
    const selectedAnswer = getSelectedAnswer();

    if (selectedAnswer === null) {
      alert("Please select an option");
      return;
    }

    if (selectedAnswer === allQuestions[currentIndex].answer) {
      score++;
    }
  }

  currentIndex++;

  if (currentIndex < allQuestions.length) {
    loadQuestion();
  } else {
    clearInterval(timerInterval);
    alert(`Quiz Finished\nYour Score: ${score} / ${allQuestions.length}`);
  }
}

// button click
nextBtn.addEventListener("click", () => {
  nextQuestion(true);
});

// start quiz
loadQuestion();
