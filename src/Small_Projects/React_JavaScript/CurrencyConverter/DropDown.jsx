import React from "react";

function DropDown({ currencies, label, currency, setCurrency }) {
  return (
    <div>
      <label htmlFor={label} className="block text-lg">
        {label}
      </label>
      <div className="pr-2">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 md:px-3 border border-gray-300 right-1 text-black rounded-md shadow-sm"
        >
          {currencies?.map((curr) => {
            return (
              <option value={curr} key={curr}>
                {curr}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default DropDown;
