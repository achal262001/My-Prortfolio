import React, { useState } from "react";

function SetColor() {
  let [color, setColor] = useState("yellow");
  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div
        className="bottom-12
        fixed flex flex-wrap justify-center inset-x-0 px-2 "
      >
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-2 py-3 rounded-3xl">
          <button
            className="text-black rounded-full bg-red-700 px-4 py-3 shadow-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="text-black rounded-full bg-blue-700 px-4 py-3 shadow-lg"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="text-black rounded-full bg-green-700 px-3 py-3 shadow-lg"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetColor;
