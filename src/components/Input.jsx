import React, { useState } from "react";

const Input = ({ initialValue, setInitialValue }) => {
  return (
    <div className="relative">
      <label
        className="absolute left-0 right-0 text-center bg-royal-yellow px-3 rounded-2xl text-xs py-1 -top-8 text-white"
        htmlFor=""
      >
        Initial value of X
      </label>
      <input
        className="border-2 px-5 py-3 rounded-2xl w-[115px] border-yellow-500 text-black font-bold text-lg"
        type="text"
        value={initialValue}
        onChange={(e) => setInitialValue(e.target.value)}
      />
      <div className=" flex justify-center items-center absolute right-3 border-l border-l-royal-yellow top-[2px] bottom-[2px] pl-3">
        <div className="bg-royal-blue w-4 h-4 rounded-full outline outline-[2px] outline-gray-300 border-[3px] border-white"></div>
      </div>
    </div>
  );
};

export default Input;
