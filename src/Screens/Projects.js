import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { BsSkipBackwardCircleFill } from "react-icons/bs";

function Projects() {
  const navigate = useNavigate();
  const location = useLocation();
  const Array_Project = [
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
  ];
  return (
    <div className="bg-[#28282B] min-h-screen">
      <div className="flex flex-col">
        <BsSkipBackwardCircleFill
          className="size-9 self-end bg-[#28282B] text-white pr-2"
          onClick={() => navigate("/project")}
        />
      </div>
      <Outlet />
      <div className=" flex flex-wrap gap-3 m-2 ">
        {Array_Project.map((project) => {
          return (
            <div
              onClick={() => navigate(`${project.navigate}`)}
              className="flex hover:animate-bounce  justify-center items-center rounded-xl p-4 m-1 bg-gray-500 h-24 w-24 max-h-28 max-w-28"
            >
              <h2 className="text-lg cursor-pointer p-2">{project.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
