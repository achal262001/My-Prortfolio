import React from "react";
import Image from "../Components/Image";
import sideImg from "../Images/Side_Img.png";
import BanneerIMG from "../Images/LinkedIn.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";

function Home() {
  const top = "top-10 right-5";
  const Bottom = "bottom-10 right-5";
  const message =
    "With two years of focused learning and hands-on experience, I havve mastered Java, HTML - CSS, JavaScript (ES6+), Spring Boot, React.js, Node.js. I deliver top-tier web-solutions that integrate robust back-end with responsive front-end user interface design.";
  return (
    <div className="f bg-[#28282B] min-h-screen  sm:p-12 m-0">
      <div className="sm:grid relative overflow-hidden max-sm:overflow-y-scroll sm:grid-cols-4  max-h-screen p-0 bg-[#1b1a1a]">
        {/* left-part */}
        <div className="col-start-1 col-end-4">
          <div className="w-full flex justify-center items-center">
            <img
              src={`${BanneerIMG}`}
              alt=""
              className="max-h-full  max-w-full"
            />
          </div>
          <div className="h-full w-full sm:pt-10">
            <div className="whitespace-normal text-2xl  mb-4 text-slate-300 ">
              <h1 className="text-slate-200 animate-pulse sm:text-4xl text-3xl my-5">
                Welcome To My PortFolio
              </h1>
              <div className="w-full sm:hidden animate-none">
                <img
                  src={sideImg}
                  alt="Ak_Photo"
                  className="max-w-full max-h-full  overflow-hidden"
                />
              </div>
              <h1 className="text-slate-200 animate-pulse sm:text-4xl text-3xl sm:my-5">
                Passionate Full-Stack Developer
              </h1>
            </div>
            <div className="text-xl max-sm:hidden text-slate-200">
              With two years of focused learning and hands-on experience, I’ve
              mastered Java,HTML/CSS,JavaScript (ES6+), Spring Boot, React.js,
              Node.js. I deliver top-tier web-solutions that integrate robust
              back-end with responsive front-end user interface design.
            </div>
            <div className="text-slate-200 ">
              <div className="sm:pb-5"></div>
              <div>Phone Number :- 9019989463</div>
              <div>Gmail Id :- achalkokatanoor01@gmail.com</div>
              <div className="flex justify-center items-center w-full mt-8">
                <div className="flex gap-5 mb-6">
                  <a href="https://github.com/achal262001">
                    <span className="">
                      <FaGithub className="size-12 hover:size-14 max-sm:size-9 max-sm:hover:size-10" />
                    </span>{" "}
                  </a>
                  <a href="https://www.linkedin.com/in/achal-kokatanoor-588483266/">
                    <span className="">
                      <FaLinkedin className="size-12 hover:size-14 max-sm:size-9 max-sm:hover:size-10" />
                    </span>{" "}
                  </a>
                  <button>
                    <a href="https://leetcode.com/u/achalkokatanoor00/">
                      <span className="">
                        <SiLeetcode className="size-12 hover:size-14 max-sm:size-9 max-sm:hover:size-10" />
                      </span>{" "}
                    </a>
                  </button>
                  <button>
                    <span className="hover:size-14">
                      <SiGmail className="size-12 hover:size-14 max-sm:size-9 max-sm:hover:size-10" />
                    </span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Part */}
        <div className="absolute max-sm:hidden top-0 sm:h-[110%] sm:w-[110%] sm:right-[-17rem] md:h-[130%] md:w-[130%] md:right-[-35rem] lg:h-[110%] lg:w-[110%] lg:right-[-37rem] xl:h-[100%] xl:w-[100%] xl:right-[-60rem] right-0">
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
