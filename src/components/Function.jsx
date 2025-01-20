import React from "react";

const Function = ({ name, equation, setEquation }) => {
  return (
    <div className="bg-white border shadow-md px-5 py-4 rounded-2xl w-[235px]">
      <h2 className="text-sm font-semibold">{name}</h2>
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
