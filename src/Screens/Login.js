import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { user, loginWithRedirect } = useAuth0();
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => loginWithRedirect()}
        className="border-2 p-1 m-1 bg-red-200 text-black"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
