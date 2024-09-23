import React from "react";
import Image from "../Components/Image";
import sideImg from "../Images/Side_Img.png";
import BanneerIMG from "../Images/LinkedIn.jpg";

function Home() {
  const top = "top-10 right-5";
  const Bottom = "bottom-10 right-5";
  const message =
    "With two years of focused learning and hands-on experience, I havve mastered Java, HTML - CSS, JavaScript (ES6+), Spring Boot, React.js, Node.js. I deliver top-tier web-solutions that integrate robust back-end with responsive front-end user interface design.";
  return (
    <div className="font- bg-[#28282B] min-h-screen p-0 m-0">
      <div className="w-full">
        <img src={`${BanneerIMG}`} alt="" />
      </div>
      <h1 className="text-slate-200 lg:text-5xl text-4xl animate-bounce pt-5 mt-2">
        Welcome To My Protfolio
      </h1>

      <div className="bg-[#1b1b1b] mx-8 sm:flex  lg:mx-28">
        <div className="relative sm:self-end sm:hidden overflow-hidden sm:h-[500px] sm:w-[380px] h-[420px] w-[380px]">
          <img
            src={sideImg}
            alt="Ak_Photo"
            className="max-w-full max-h-full overflow-hidden"
          />
        </div>
        <div className="sm:self-start h-full flex justify-center items-center">
          <div className="h-full w-full sm:pt-40">
            <div className="whitespace-normal text-2xl animate-pulse  text-slate-300 ">
              <h1 className="text-slate-200 text-4xl mt-2">
                I am Tech Enthusiast
              </h1>
              Passionate Full-Stack Developer
            </div>
          </div>
        </div>
        <div className="relative sm:self-end max-sm:hidden overflow-hidden sm:h-[500px] sm:w-[380px] h-[420px] w-[380px]">
          <img
            src={sideImg}
            alt="Ak_Photo"
            className="max-w-full max-h-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
