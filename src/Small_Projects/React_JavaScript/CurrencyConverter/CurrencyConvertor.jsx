import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";

function CurrencyConvertor() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [converedAmout, setConveredAmout] = useState(0);
  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      console.log("res :-", res);
      console.log("data :-", data);

      setCurrencies(Object.keys(data));
    } catch (err) {
      console.log("Error is cached", { err });
    }
  };
  const fetchConversion = async () => {
    if (!amount) return;
    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConveredAmout(data.rates[toCurrency] + "  " + toCurrency);
    } catch (err) {
      console.log("Error is cahed", { err });
    }
  };
  useEffect(() => {
    fetchCurrency();
  }, []);

  const swapCurr = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex bg-gray-700 mx-auto w-full max-h-screen p-2 m-2 justify-center items-center">
      <div className="text-white pl-2 w-[35rem] rounded-lg shadow-md focus:ring-8">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-3xl">Currency Convertor</h1>
        </div>
        <div className="md:flex justify-evenly">
          <DropDown
            currencies={currencies}
            currency={fromCurrency}
            setCurrency={setFromCurrency}
            label={"From"}
          ></DropDown>
          <div>
            <button
              className="mx-auto md:pt-8 border bg-gray-500 rounded-xl p-2 m-2"
              onClick={swapCurr}
            >
              Swap
            </button>
          </div>
          <DropDown
            currencies={currencies}
            currency={toCurrency}
            setCurrency={setToCurrency}
            label={"To"}
          ></DropDown>
        </div>
        <div className="pt-1">
          <label htmlFor="amout" className="block text-lg font-medium">
            Amount:
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className=" p-2 border text-black border-gray-300 rounded-md shadow-md mt-1 focus:ring-4 focus:ring-indigo-500"
          ></input>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={fetchConversion}
            className=" p-2 mx-3  border bg-indigo-600 border-gray-300 rounded-md shadow-md mt-1 focus:ring-4 focus:ring-indigo-500"
          >
            {" "}
            Convert{" "}
          </button>
        </div>
        {converedAmout && (
          <div className={` text-xl text-right mr-2 text-green-700`}>
            The Converted Amount: {converedAmout}
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyConvertor;
