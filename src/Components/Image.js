import React from "react";
import side_cover from "../Images/Side-cover-removebg.png";

function Image({ classs }) {
  return (
    <div className={`-full w-full`}>
      <img
        src={side_cover}
        alt="AK Photo"
        className={`${classs} h-full w-full`}
      />
    </div>
  );
}

export default Image;
