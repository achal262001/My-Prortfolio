import React from "react";
import freelance_img from "../Images/Freelanceing.png";
import Internship_img from "../Images/Internship.png";
import LeetCode_img from "../Images/Leetcode.png";

function About() {
  return (
    <div className="bg-[#1b1b1b] min-h-screen">
      <div className="text-slate-200 flex flex-col gap-3 ">
        <h1 className="text-3xl mb-2 pt-3 p-2">I am Achal Kokatanoor</h1>
        <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
          <div className="bg-[#28282B] sm:max-w-[300px] rounded-xl">
            <h1 className="text-lg">
              Previously, I have Done work on{" "}
              <span className="text-xl underline">
                Patient Engagement and Record System
              </span>{" "}
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
          <div className="bg-[#28282B] sm:max-w-[300px] rounded-xl">
            <h1 className="text-lg">
              I have Did One Month Internship at
              <span className="text-xl underline">
                Varcons Technologies Pvt. Ltd
              </span>{" "}
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
          <div className="bg-[#28282B] sm:max-w-[300px] rounded-xl p-2 mb-4">
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
