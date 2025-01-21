import React, { useState } from "react";

const Output = ({ output }) => {
  // const [initialValue, setInitialValue] = useState(output);
  return (
    <div className="relative output-connection">
      <label
        className="absolute left-0 right-0 text-center bg-green-600 px-3 rounded-2xl text-xs py-1 -top-8 text-white"
        htmlFor=""
      >
        Final Output Y
      </label>
      <div className="border px-5 h-[67px] pl-16 py-3 rounded-2xl w-[115px] border-green-600 text-lg font-bold text-black">
        {output ? output : "..."}
      </div>
      <div className="flex items-center gap-3 absolute left-3 border-r top-[2px] bottom-[2px] pr-3">
        <div className="bg-royal-blue w-4 h-4 rounded-full outline outline-[2px] outline-gray-300 border-[3px] border-white"></div>
      </div>
    </div>
  );
};

export default Output;
