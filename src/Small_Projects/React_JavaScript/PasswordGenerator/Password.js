import { useCallback, useEffect, useRef, useState } from "react";

function Password() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // const [copy, SetCopy] = useState("copy");
  const passwordRef = useRef;

  const generatePassword = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqurstwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      const index = Math.floor(Math.random() * str.length + 1);
      console.log(index);
      password += str.charAt(index);
    }

    setPassword(password);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed]);

  return (
    <div className="w-full bg-slate-700 my-5 max-h-screen">
      <div className="shadow-md text-white rounded-lg   bg-gray-800 w-full max-w-md mx-auto flex flex-wrap gap-3 justify-center">
        <h1 className="text-white text-center my-1 mt-3 text-3xl">
          {" "}
          Password Generator
        </h1>
        <div className="flex relative rounded-lg w-full overflow-hidden mb-4 px-2">
          <input
            type="text"
            value={password}
            className="outline-none text-orange-700 w-full rounded-xl p-[0.35rem]"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none absolute right-0 bg-blue-800 p-[0.35rem] text-white shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center size-fit  gap-x-1">
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className="cursor-pointer w-auto max-w-28"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={numAllowed}
              onChange={() => {
                setNumAllowed(!numAllowed);
              }}
            />
            <label htmlFor="number">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={charAllowed}
              onChange={() => {
                setCharAllowed((pre) => !pre);
              }}
            />
            <label htmlFor="charInput">Charactor</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
