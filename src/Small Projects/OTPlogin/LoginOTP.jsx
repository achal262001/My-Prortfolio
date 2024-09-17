import React, { useState } from "react";
import GetOTP from "./GetOTP";

function LoginOTP() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpStep, setOtpStep] = useState(true);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (
      phoneNumber.length < 10 ||
      regex.test(phoneNumber) ||
      phoneNumber.length > 10
    ) {
      alert("Invalid Phone Number");
      return;
    }
    setOtpStep(false);
  };
  const onOTPSubmit = () => {};

  return (
    <div>
      <h1 className="my-2">Log in or sign up to continue</h1>
      {otpStep ? (
        <form action="" onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            className="border-2 border-gray-500 rounded-md"
            onChange={handlePhoneNumber}
            placeholder="Enter the Phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <div> Enter the otp sent to {phoneNumber} </div>
          <GetOTP length={4} onOTPSubmit={onOTPSubmit}></GetOTP>
        </div>
      )}
    </div>
  );
}

export default LoginOTP;
