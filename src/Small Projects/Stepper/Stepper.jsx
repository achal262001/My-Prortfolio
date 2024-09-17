import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout_Step = [
  {
    name: "Home page",
    Component: () => {
      return (
        <div>
          <h1>U are in Home Page</h1>
        </div>
      );
    },
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping adrress.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered .</div>,
  },
];

function Stepper() {
  const [stepNum, setStepNum] = useState(1);
  const [Complete, setCopmlete] = useState(false);

  const clickHandle = () => {
    setStepNum((i) => {
      if (i === Checkout_Step.length) {
        setCopmlete(true);
        return i;
      } else {
        return i + 1;
      }
    });
  };

  const ActiveComponent = Checkout_Step[stepNum - 1]?.Component;
  const calculateProgressBar = () => {
    console.log("(stepNum - 1)", stepNum - 1);
    console.log("(Checkout_Step.length - 1)", Checkout_Step.length - 1);
    console.log(
      "((stepNum - 1) / (Checkout_Step.length - 1))",
      (stepNum - 1) / (Checkout_Step.length - 1),
      "*100",
      ((stepNum - 1) / (Checkout_Step.length - 1)) * 100
    );
    return ((stepNum - 1) / (Checkout_Step.length - 1)) * 100;
  };
  console.log(calculateProgressBar());

  return (
    <>
      <div className="flex px-3 justify-between  items-center relative">
        {Checkout_Step.map((step, i) => {
          return (
            <div className="flex flex-col items-center">
              <div
                className={`bg-gray-300 w-10 h-10 rounded-[50%] items-center flex justify-center 
              ${stepNum === i + 1 ? "bg-blue-500" : ""} ${
                  stepNum > i + 1 ? "bg-green-500" : ""
                } z-10`}
              >
                {stepNum > i + 1 ? <span>&#10003;</span> : i + 1}
              </div>
              <div className="">{step.name}</div>
            </div>
          );
        })}
        <div className="w-full h-1 bg-gray-300 top-[30%] absolute">
          <div
            style={{ width: `${calculateProgressBar()}%` }}
            className="bg-green-500 h-full"
          ></div>
        </div>
      </div>

      <ActiveComponent></ActiveComponent>

      <div className="w-full mt-5">
        {" "}
        <button
          onClick={clickHandle}
          className="bg-gray-300 rounded-lg border-solid border-2 border-slate-800 w-10 h-7 "
        >
          next
        </button>
      </div>
    </>
  );
}

export default Stepper;
