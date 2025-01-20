import React, { useState } from "react";

const Output = ({ output }) => {
  // const [initialValue, setInitialValue] = useState(output);
  return (
    <div className="relative">
      <label
        className="absolute left-0 right-0 text-center bg-green-600 px-3 rounded-2xl text-xs py-1 -top-8 text-white"
        htmlFor=""
      >
        Final Output Y
      </label>
      <div className="border px-5 pl-16 py-3 rounded-2xl w-[115px] border-green-600">
        {output ? output : "calculating"}
      </div>
      <div className="flex items-center gap-3 absolute left-3 border-r top-[2px] bottom-[2px] pr-3">
        <div className="bg-blue-400 w-1 h-1 rounded-full outline outline-2 outline-gray-300 border-2 border-white p-2"></div>
      </div>
    </div>
  );
};

export default Output;
