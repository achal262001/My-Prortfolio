import React from "react";
import { useState } from "react";
import QuestionData from "./QuestionData";
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answerSet, setAnswerSet] = useState([]);

  const resetQuiz = () => {
    setCurrQuestion(0);
    setAnswerSet([]);
  };

  const nextQuestion = (isCorrect) => {
    setCurrQuestion((pre) => pre + 1);
    setAnswerSet([...answerSet, isCorrect]);
  };
  return (
    <div className="text-center max-h-screen  flex flex-col justify-center items-center">
      <div className="border-2 bg-slate-600 min-w-80 rounded-xl p-3 m-2 max-w-[450px]">
        <h1 className="items-center text-2xl">Welcome to the Quiz</h1>
        {currQuestion < QuestionData.length && (
          <Question
            question={QuestionData[currQuestion]}
            onAnwerClick={nextQuestion}
          ></Question>
        )}
      </div>
      {currQuestion === QuestionData.length && (
        <Result
          answerSet={answerSet}
          questions={QuestionData}
          resetQuiz={resetQuiz}
        ></Result>
      )}
    </div>
  );
}

export default Quiz;
