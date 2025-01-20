import React, { useEffect, useState } from "react";

const Function = ({ name, nextFunc, equation, setEquation }) => {
  const [selectedValue, setSelectedValue] = useState(nextFunc);

  const handleChange = (e) => {
    setSelectedValue((prev) => prev + e.target.value);
  };

  return (
    <div className="bg-white border shadow-md px-5 py-4 rounded-2xl w-[235px]">
      <h2 className="tet-sm font-semibold">{name}</h2>
      <div>
        <label className="font-medium text-xs" htmlFor="">
          Equation
        </label>
        <br />
        <input
          className="border rounded-lg px-3 py-2 mt-1"
          type="text"
          placeholder="X^2"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <label className="font-medium text-xs" htmlFor="">
          Next Function
        </label>
        <br />
        <select
          className="block w-full border rounded-lg px-3 py-2 mt-1 disabled:bg-gray-200"
          name=""
          id=""
          disabled
          onChange={handleChange}
          value={selectedValue}
        >
          <option value="function2">Function 2</option>
          <option value="function3">Function 3</option>
          <option value="function4">Function 4</option>
          <option value="function5">Function 5</option>
          <option value="-">-</option>
        </select>
      </div>
      <div className="mt-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-400 w-1 h-1 rounded-full outline outline-2 outline-gray-300 border-2 border-white p-2"></div>
          <span className="text-xs">input</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs">output</span>
          <div className="bg-blue-400 w-1 h-1 rounded-full outline outline-2 outline-gray-300 border-2 border-white p-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Function;
