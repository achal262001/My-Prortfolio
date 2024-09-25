import React from "react";
import freelance_img from "../Images/Freelanceing.png";
import Internship_img from "../Images/Internship.png";
import LeetCode_img from "../Images/Leetcode.png";

function About() {
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
    <div className="bg-[#1b1b1b] min-h-screen">
      <div className="text-slate-200 flex flex-col gap-3 ">
        <h1 className="text-3xl mb-2 pt-3 p-2">I am Achal Kokatanoor</h1>
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <div className="bg-[#28282B] sm:max-w-[300px] lg:min-w-[450px]  rounded-xl">
            <h1 className="text-lg">
              Previously, I have Done work on{" "}
              <div className="text-xl underline">
                Patient Engagement and Record System
              </div>{" "}
              <div>As a Front-End & Back-End Developer</div>
            </h1>
            <h1>Its Fully Dynamic and Responsive Website </h1>
            <h1> Click On The Image For Demonstration Video </h1>
            <div className="flex   justify-center items-center">
              <a
                className="p-3"
                href="https://www.linkedin.com/posts/achalkokatanoor_project-title-patient-engagement-and-record-activity-7239083652637188096-3Qz6?utm_source=share&utm_medium=member_desktop"
              >
                <div className=" h-[260px]">
                  <img
                    src={freelance_img}
                    alt=""
                    className="max-w-full max-h-full"
                  />
                </div>
              </a>
            </div>
          </div>
          {/* <div className="bg-[#28282B] sm:max-w-[300px] lg:min-w-[450px]  rounded-xl">
            <h1 className="text-lg">
              Previously, I have Done work on{" "}
              <div className="text-xl underline">
                Patient Engagement and Record System
              </div>{" "}
              <div>As a Front-End & Back-End Developer</div>
            </h1>
            <h1>Its Fully Dynamic and Responsive Website </h1>
            <h1> Click On The Image For Demonstration Video </h1>
            <div className="flex   justify-center items-center">
              <a
                className="p-3"
                href="https://www.linkedin.com/posts/achalkokatanoor_project-title-patient-engagement-and-record-activity-7239083652637188096-3Qz6?utm_source=share&utm_medium=member_desktop"
              >
                <div className=" h-[260px]">
                  <img
                    src={freelance_img}
                    alt=""
                    className="max-w-full max-h-full"
                  />
                </div>
              </a>
            </div>
          </div> */}
          <div className="bg-[#28282B] sm:max-w-[300px] lg:min-w-[450px] rounded-xl">
            <h1 className="text-lg">
              I have Did One Month Internship at
              <div className="text-xl underline">
                Varcons Technologies Pvt. Ltd
              </div>{" "}
            </h1>

            <h1>
              Designed and implemented functional web pages in accordance with
              client specifications and design briefs.{" "}
            </h1>
            <div className="flex   justify-center items-center">
              <div className=" h-[260px]">
                <img
                  src={Internship_img}
                  alt=""
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#28282B] sm:max-w-[300px] lg:min-w-[450px] rounded-xl max-sm:p-2 max-sm:file:mb-4">
            <h1 className="text-lg">I am activily Sloving Leetcode Problems</h1>
            <h1>Its Fully Dynamic and Responsive Website </h1>
            <h1> Click On The Image To See </h1>
            <div className="flex   justify-center items-center">
              <div className=" h-[260px]">
                <a href="https://leetcode.com/u/achalkokatanoor00/">
                  <img
                    src={LeetCode_img}
                    alt=""
                    className="max-w-full max-h-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
