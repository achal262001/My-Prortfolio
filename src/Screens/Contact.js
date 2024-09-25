import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";

function Contact() {
  const [showPrerequisites, setShowPrerequisites] = useState(false);
  const openGmailCompose = () => {
    const email = "achalkokatanoor01@gmail.com";
    const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(mailToLink, "_blank", "width=600,height=600");
  };

  const downloadFile = (fileName) => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/zip/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const Array_zip = [
    {
      id: 1,
      type: "HTML CSS JS Project",
      name: "2048 Game",
      zip: "2048HTML.zip",
    },
    {
      id: 2,
      type: "HTML CSS JS Project",
      name: "To-Do List",
      zip: "to-doListHTML.zip",
    },
    {
      id: 3,
      type: "HTML CSS JS Project",
      name: "Random Color Generator",
      zip: "RandomColorGeneratorHTML.zip",
    },
    {
      id: 4,
      type: "HTML CSS JS Project",
      name: "Quiz",
      zip: "QuizeHTML.zip",
    },
    {
      id: 5,
      type: "Java Script React Project",
      name: "OTP login",
      zip: "OTPloginJS.zip",
    },
    {
      id: 6,
      type: "Java Script React Project",
      name: "Currency Converter",
      zip: "CurrencyConverterJS.zip",
    },
    {
      id: 7,
      type: "Java Script React Project",
      name: "Password Generator",
      zip: "PasswordGeneratorJS.zip",
    },
    {
      id: 8,
      type: "Java Script React Project",
      name: "Quiz",
      zip: "QuizJS.zip",
    },
    {
      id: 9,
      type: "Java Script React Project",
      name: "RBG SetColor ",
      zip: "SetColorJS.zip",
    },
    {
      id: 10,
      type: "Java Script React Project",
      name: "Weather Predictor",
      zip: "WeatherPredictionJS.zip",
    },
    {
      id: 11,
      type: "Java Script React Project",
      name: "To-Do List ",
      zip: "TodoJS.zip",
    },
    {
      id: 12,
      type: "Java Script React Project",
      name: "React Youtube Card",
      zip: "ReactYoutubeCardJS.zip",
    },
    {
      id: 13,
      type: "Type Script React Project",
      name: "Sticky Notes Tracker",
      zip: "StickyNotesTrackerTS.zip",
    },
    {
      id: 14,
      type: "Type Script React Project",
      name: "Rock-Paper-Scissors Game",
      zip: "Rock-Paper-ScissorsTS.zip",
    },
    {
      id: 15,
      type: "Type Script React Project",
      name: "Tic-Tac-Toe Game",
      zip: "Tic-Tac_ToeTS.zip",
    },
    {
      id: 16,
      type: "Type Script React Project",
      name: "2048 Game",
      zip: "2048TS.zip",
    },
  ];
  return (
    <div className="bg-[#28282B] min-h-screen">
      <div className="text-slate-200 ">
        <div className="pb-5"></div>
        <h1 className="text-3xl animate-bounce p-2 ">
          Please Take An Action..!
        </h1>
        <div className="text-xl">Phone Number :- 9019989463</div>
        <div className="text-lg">Gmail Id :- achalkokatanoor01@gmail.com</div>
        <br />
        <div className="flex justify-center items-center w-full ">
          <div className="flex gap-5 justify-between items-center">
            <a
              href="https://github.com/achal262001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="">
                <FaGithub className="size-9 hover:size-10 " />
              </span>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/achal-kokatanoor-588483266/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:cu">
                <FaLinkedin className="size-9 hover:size-10" />
              </span>{" "}
            </a>
            <a
              href="https://leetcode.com/u/achalkokatanoor00/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:cu">
                <SiLeetcode className="size-9 hover:size-10" />
              </span>{" "}
            </a>
            <a
              style={{ width: "100px", cursor: "pointer" }}
              onClick={openGmailCompose}
              className="hover:size-10"
            >
              <span className="hover:size-10">
                <SiGmail className="size-9 hover:size-10" />
              </span>{" "}
            </a>
          </div>
        </div>
        <br />
        <div className="w-full h-[0.03rem] bg-white"></div>
        <br />
        {/* DownLoad Sections */}
        <div className="flex flex-col justify-center items-center">
          {/* Header */}
          <div>
            <h1 className="text-2xl">Here You Can Download The Project Code</h1>
            <h2>
              Before you Download any project read the{" "}
              <button
                className="animate-pulse text-xl text-orange-800"
                onClick={() => setShowPrerequisites((pre) => !pre)}
              >
                Prerequisite
              </button>{" "}
              of that perticular project
            </h2>

            {showPrerequisites && (
              <div className="bg-gray-900 text-green-800 border rounded-xl">
                <h2 className="text-2xl underline">
                  Prerequisite For the HTML CSS JS Project
                </h2>
                <div>
                  Its ZIP File Which Contains Project HTML CSS JS files, You can
                  Extract it and open project in 'VS Code Studio' and HTML files
                  live Server
                </div>
                <br />
                <h2 className="text-2xl underline">
                  Prerequisite For the React.js JavaScript Project
                </h2>
                <div>
                  Its ZIP File Which Contains Project TypeScript React
                  Components with Tailwind Css, You can Extract it and Create
                  the React with Typescript apllication using "npx
                  create-react-app my-app" and install and do configurations for
                  Tailwind Css Than import these components in app.js component.
                </div>
                <br />
                <h2 className="text-2xl underline">
                  Prerequisite For the HTML CSS JS Project
                </h2>
                <div>
                  Its ZIP File Which Contains Project TypeScript React
                  Components with Tailwind Css, You can Extract it and Create
                  the React with Typescript apllication using "npx
                  create-react-app my-app --template typescript" and install and
                  do configurations for Tailwind Css Than import these
                  components in app.tsx component.
                </div>
              </div>
            )}
          </div>
          {/* Projects */}
          <div className="flex flex-wrap justify-center items-center">
            {Array_zip.map((project) => {
              return (
                <div className={`bg-[#4f4d4d] rounded-xl p-0 m-1 w-64 `}>
                  <div
                    key={project.id}
                    className=" flex justify-center items-center m-0 p-0 flex-col"
                  >
                    <div className="text-xl">
                      {project.name}{" "}
                      <span>
                        <button
                          onClick={() => {
                            downloadFile(project.zip);
                          }}
                        >
                          <FaFileDownload className="size-4 hover:size-5" />
                        </button>
                      </span>
                    </div>
                    <div>{project.type}</div>{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
