import React, { useState } from "react";
import header_img from "../Images/LinkedIn.jpg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Stepper from "../Small Projects/Stepper/Stepper";

function Header() {
  const [showHamburgur, setShowHamburgur] = useState(false);
  return (
    <div>
      <nav className=" bg-slate-800  dark:bg-gray-900 text-slate-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Protfolio
          </span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={() => setShowHamburgur((pre) => !pre)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <GiHamburgerMenu className="size-6" />
            </button>
          </div>
          <div
            className="items-center justify-between  text-slate-200 w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul
              className={`flex flex-col  font-medium p-4 md:p-0 mt-4 text-slate-200 border rounded-lg bg-slate-800 ${
                showHamburgur ? "" : "max-sm:hidden"
              }  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:px-5 md:py-1 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
            >
              <li>
                <Link
                  to="/"
                  onClick={() => setShowHamburgur(false)}
                  className="block py-2 px-3 md:p-0 text-white hover:bg-gray-100  hover:text-slate-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="rounded hover:bg-red-600 md:hover:bg-transparent">
                <Link
                  onClick={() => setShowHamburgur(false)}
                  to="/about"
                  className="block py-2 px-3  md:p-0  rounded hover:bg-gray-100 hover:text-slate-700 md:hover:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  onClick={() => setShowHamburgur(false)}
                  className="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 hover:text-slate-700 md:hover:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setShowHamburgur(false)}
                  className="block py-2 px-3 md:p-0  rounded hover:bg-gray-100 hover:text-slate-700 md:hover:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div classNameName="h-full">
        <img src={header_img} alt="header_img" classNameName="max-h-32 w-full" />
      </div> */}
      {/* <div className="bg-[#28282B] pt-2"><Stepper /></div> */}
    </div>
  );
}

export default Header;
