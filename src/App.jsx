import React, { useState, useMemo } from "react";
import Input from "./components/Input";
import Function from "./components/Function";
import Output from "./components/Output";
import evaluateExpression from "./utils/evaluateExpression";

const App = () => {
  const [initialValue, setInitialValue] = useState(2);
  const [functions, setFunctions] = useState({
    function1: { equation: "x^2", next: "function2" },
    function2: { equation: "2x+4", next: "function4" },
    function3: { equation: "x^2+20", next: "-" },
    function4: { equation: "x-2", next: "function5" },
    function5: { equation: "x/2", next: "function3" },
  });

  // Recursive function to calculate outputs based on chaining
  const calculateOutput = (funcName, input) => {
    const currentFunc = functions[funcName];
    if (!currentFunc || currentFunc.next === "-")
      return evaluateExpression(
        currentFunc.equation.replace(/(\d+|\b)x/g, (_, num) =>
          num ? `${num} * ${input}` : input
        )
      );

    const currentOutput = evaluateExpression(
      currentFunc.equation.replace(/(\d+|\b)x/g, (_, num) =>
        num ? `${num} * ${input}` : input
      )
    );

    return calculateOutput(currentFunc.next, currentOutput);
  };

  const finalResult = useMemo(
    () => calculateOutput("function1", initialValue),
    [initialValue, functions]
  );

  const updateEquation = (funcName, newEquation) => {
    setFunctions((prev) => ({
      ...prev,
      [funcName]: {
        ...prev[funcName],
        equation: newEquation,
      },
    }));
  };

  return (
    <main className="flex justify-center items-center py-16 play-ground flex-col gap-28">
      <div className="flex items-end gap-2">
        <Input initialValue={initialValue} setInitialValue={setInitialValue} />
        <div className="flex gap-24">
          <Function
            name="Function 1"
            equation={functions.function1.equation}
            setEquation={(eq) => updateEquation("function1", eq)}
          />
          <Function
            name="Function 2"
            equation={functions.function2.equation}
            setEquation={(eq) => updateEquation("function2", eq)}
          />
          <Function
            name="Function 3"
            equation={functions.function3.equation}
            setEquation={(eq) => updateEquation("function3", eq)}
          />
        </div>
        <Output output={finalResult} />
      </div>
      <div className="flex gap-32">
        <Function
          name="Function 4"
          equation={functions.function4.equation}
          setEquation={(eq) => updateEquation("function4", eq)}
        />
        <Function
          name="Function 5"
          equation={functions.function5.equation}
          setEquation={(eq) => updateEquation("function5", eq)}
        />
      </div>
    </main>
  );
};

export default App;
