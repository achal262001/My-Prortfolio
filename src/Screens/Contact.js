import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <div className="bg-[#28282B] min-h-screen">
      <div className="text-slate-200 ">
        <div className="pb-5"></div>
        <h1 className="text-3xl animate-bounce p-2 ">
          Please Take An Action..!
        </h1>
        <div>Phone Number :- 9019989463</div>
        <div>Gmail Id :- achalkokatanoor01@gmail.com</div>
        <div className="flex justify-center items-center w-full mt-8">
          <div className="flex gap-5">
            <a href="https://github.com/achal262001">
              <span className="">
                <FaGithub className="size-9 hover:size-10" />
              </span>{" "}
            </a>
            <a href="https://www.linkedin.com/in/achal-kokatanoor-588483266/">
              <span className="hover:cu">
                <FaLinkedin className="size-9 hover:size-10" />
              </span>{" "}
            </a>
            <a href="https://leetcode.com/u/achalkokatanoor00/">
              <span className="hover:cu">
                <SiLeetcode className="size-9 hover:size-10" />
              </span>{" "}
            </a>
            <span className="hover:cu">
              <SiGmail className="size-9 hover:size-10" />
            </span>{" "}
          </div>
        </div>
        {/* Projects Sections */}
      </div>
    </div>
  );
}

export default Contact;
