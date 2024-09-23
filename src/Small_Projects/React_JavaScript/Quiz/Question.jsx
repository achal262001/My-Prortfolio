import React from "react";

function Question({ question, onAnwerClick }) {
  console.log(question);
  return (
    <div className="font-bold">
      <div>{question.question}</div>
      <hr />
      <ul className="gridd my-2">
        {question.answerOptions.map((option, i) => {
          return (
            <li>
              <button
                onClick={() => onAnwerClick(option.isCorrect)}
                className="font-light border-2 rounded-md bg-gray-200 px-1 py-1 m-1 w-[150px]"
                id={i}
              >
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Question;
