import React from "react";

function Result({ questions, answerSet, resetQuiz }) {
  const totalCorrectAnswer = answerSet.filter((answer) => answer).length;
  console.log(questions);
  return (
    <div>
      <h2>Results</h2>
      <p>
        You answered {totalCorrectAnswer} out of {questions.length} questions
      </p>
      <button
        className="font-light border-2 rounded-md bg-gray-200 px-1 py-1"
        onClick={resetQuiz}
      >
        Click here to Reset
      </button>
      {questions.map((question, i) => {
        return (
          <li
            key={i}
            className={`list-none ${
              answerSet[i] ? "text-green-500" : "text-red-500"
            }`}
          >
            Q{i + 1}. {question.question}
          </li>
        );
      })}
    </div>
  );
}

export default Result;
