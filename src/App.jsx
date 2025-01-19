import React from "react";
import Input from "./components/Input";
import Function from "./components/Function";
import Output from "./components/Output";

const App = () => {
  return (
    <main className="flex justify-center items-center h-screen play-ground flex-col gap-28">
      <div className="flex items-end gap-2">
        <Input />
        <div className="flex gap-32">
          <Function name={"Function: 1"} />
          <Function name={"Function: 2"} />
          <Function name={"Function: 3"} />
        </div>
        <Output />
      </div>
      <div className="flex gap-32">
        <Function name={"Function: 4"} />
        <Function name={"Function: 5"} />
      </div>
    </main>
  );
};

export default App;
