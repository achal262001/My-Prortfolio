import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BsSkipBackwardCircleFill } from "react-icons/bs";

function Projects() {
  const navigate = useNavigate();
  const location = useLocation();
  const Array_HTML_CSS_JS_Project = [
    {
      name: "2048",
      navigate:
        "http://127.0.0.1:5500/src/Small_Projects/HTML-CSS-JS_Projects/2048/2048.html",
    },
    {
      name: "Quize",
      navigate:
        "http://127.0.0.1:5500/src/Small_Projects/HTML-CSS-JS_Projects/Quize/quiz.html",
    },
    {
      name: "Random Color Generator",
      navigate:
        "http://127.0.0.1:5500/src/Small_Projects/HTML-CSS-JS_Projects/Random%20Color%20Generator/colorGen.html",
    },
    {
      name: "To Do List",
      navigate:
        "http://127.0.0.1:5500/src/Small_Projects/HTML-CSS-JS_Projects/To-do%20List/todo.html",
    },
  ];
  const Array_React_JavaScript_Project = [
    {
      name: "Currency Convertor",
      navigate: "currencyConverter",
    },
    {
      name: "Password Generator",
      navigate: "passwordGenerator",
    },
    {
      name: "Quiz",
      navigate: "quiz",
    },
    {
      name: "SetColor",
      navigate: "RBG",
    },
    {
      name: "ToDo ",
      navigate: "todo",
    },
    {
      name: "OTP Login",
      navigate: "OTPLogin",
    },
    {
      name: "Weather Prediction",
      navigate: "weather",
    },
    {
      name: "React YouTube Card",
      navigate: "weather",
    },
  ];
  const Array_React_TypeScript_Project = [
    {
      name: "Sticky Notes Tarcker",
      navigate: "stickyNotes",
    },
    {
      name: "2048",
      navigate: "A2048",
    },
    {
      name: "Rock Paper Scissors",
      navigate: "RockPaperScissors",
    },
    {
      name: "Tic Tac Toe",
      navigate: "TicTacToe",
    },
  ];

  const handleClick = () => {
    window.open(
      "http://127.0.0.1:5500/src/Small_Projects/HTML-CSS-JS_Projects/2048/2048.html",
      "_blank"
    );
  };

  return (
    <div className="bg-[#28282B] min-h-screen">
      <div className="flex flex-col">
        <BsSkipBackwardCircleFill
          className="size-9 self-end bg-[#28282B] text-white pr-2"
          onClick={() => navigate("/project")}
        />
      </div>
      <Outlet />
      <div className=" flex flex-col ">
        <h1 className="text-2xl text-slate-200">HTML CSS JS Projects</h1>
        <div className="flex flex-wrap gap-3 m-2">
          {Array_HTML_CSS_JS_Project.map((project) => {
            return (
              <div
                onClick={() => window.open(`${project.navigate}`, "_blank")}
                className="flex hover:animate-bounce  justify-center items-center rounded-xl p-4 m-1 bg-gray-500 h-24 w-24 sm:h-30 sm:w-32"
              >
                <h2 className="text-lg cursor-pointer p-2">{project.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col ">
        <h1 className="text-2xl text-slate-200">
          React Js JavaScript Projects
        </h1>
        <div className="flex flex-wrap gap-3 m-2">
          {Array_React_JavaScript_Project.map((project) => {
            return (
              <div
                onClick={() => navigate(`${project.navigate}`)}
                className="flex hover:animate-bounce  justify-center items-center rounded-xl p-4 m-1 bg-gray-500 h-24 w-24 sm:h-30 sm:w-32"
              >
                <h2 className="text-lg cursor-pointer p-2">{project.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col ">
        <h1 className="text-2xl text-slate-200">
          React Js TypeScript Projects
        </h1>
        <div className="flex flex-wrap gap-3 m-2">
          {Array_React_TypeScript_Project.map((project) => {
            return (
              <div
                onClick={() => navigate(`${project.navigate}`)}
                className="flex hover:animate-bounce  justify-center items-center rounded-xl p-4 m-1 bg-gray-500 h-24 w-24 sm:h-30 sm:w-32 "
              >
                <h2 className="text-lg cursor-pointer p-2">{project.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
