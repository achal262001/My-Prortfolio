const questions = [
  {
    ques: "Which one on following is the markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "Msql",
    correct: "a",
  },
  {
    ques: "Which one on following is the markup extensable language?",
    a: "HTML",
    b: "XML",
    c: "ETML",
    d: "XTML",
    correct: "b",
  },
  {
    ques: "Which one on following is the oldest language?",
    a: "Java",
    b: "Python",
    c: "JavaScript",
    d: "Msql",
    correct: "b",
  },
];

let index = 0;
(right = 0), (wrong = 0);
const que = document.getElementById("que");
const options = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === questions.length) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  que.innerHTML = `${index + 1}) ${data.ques}`;
  options[0].nextElementSibling.innerHTML = data.a;
  options[1].nextElementSibling.innerHTML = data.b;
  options[2].nextElementSibling.innerHTML = data.c;
  options[3].nextElementSibling.innerHTML = data.d;
  console.log(data);
};

const submit = () => {
  const ans = getAnswer();
  const data = questions[index];
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};

const getAnswer = () => {
  let ans;
  options.forEach((input) => {
    if (input.checked) {
      ans = input.value;
    }
  });
  return ans;
};

const reset = () => {
  options.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <h2>ThankYou for Playing the Quiz</h2>`;
};

loadQuestion();
