import React, { useState } from "react";

const Input = ({ initialValue, setInitialValue }) => {
  return (
    <div className="relative">
      <label
        className="absolute left-0 right-0 text-center bg-yellow-500 px-3 rounded-2xl text-xs py-1 -top-8 text-white"
        htmlFor=""
      >
        Initial value of X
      </label>
      <input
        className="border-2 px-5 py-3 rounded-2xl w-[115px] border-yellow-500"
        type="text"
        value={initialValue}
        onChange={(e) => setInitialValue(e.target.value)}
      />
      <div className="flex items-center gap-3 absolute right-3 border-l top-[2px] bottom-[2px] pl-3">
        <div className="bg-blue-400 w-1 h-1 rounded-full outline outline-2 outline-gray-300 border-2 border-white p-2"></div>
      </div>
    </div>
  );
};

export default Input;
